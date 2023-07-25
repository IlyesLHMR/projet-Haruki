<?php

namespace App\Controller;

use App\Entity\ListeDeLecture;
use App\Entity\Serie;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AjaxController extends AbstractController
{
    private $db;
    private $user;

    public function __construct(ManagerRegistry $doctrine, AppHelpers $app)
    {
        $this->db = $doctrine->getManager();
        $this->user = $app->getUser()->user;
    }

    // Action pour supprimer une série d'une liste de lecture.
    
    // #[Route('/ajax/remove-serie-from-list/{id}', name: 'app_ajax_remove_from_list')]
    public function removeSerieFromList(int $idSerie, int $idListe): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        // Vérifier si l'ID de la série et l'ID de la liste sont fournis.
        if (!$idSerie || !$idListe) {
            $array = array('success' => false); // Données à retourner via JSON
            $response = new Response(json_encode($array));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }

        // Récupérer la série et la liste de lecture à partir de leurs ID.
        $serie = $this->db->getRepository(Serie::class)->find($idSerie);
        $liste = $this->db->getRepository(ListeDeLecture::class)->find($idListe);

        if ($serie) {
            // Supprimer la série de la liste de lecture.
            $liste->removeSerie($serie);
            $this->db->persist($liste);
            $this->db->flush();
        }

        $array = array('success' => true); // Données à retourner via JSON
        $response = new Response(json_encode($array));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    // Action pour ajouter une série à une liste de lecture.
    public function addSerieToList(int $idSerie, int $idListe): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        // Vérifier si l'ID de la série et l'ID de la liste sont fournis.
        if (!$idSerie || !$idListe) {
            $array = array('success' => false); // Données à retourner via JSON
            $response = new Response(json_encode($array));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }

        // Récupérer la série et la liste de lecture à partir de leurs ID.
        $liste = $this->db->getRepository(ListeDeLecture::class)->find($idListe);
        $serie = $this->db->getRepository(Serie::class)->find($idSerie);

        // Ajouter la série à la liste de lecture.
        $liste->addSerie($serie);
        $this->db->persist($liste);
        $this->db->flush();

        $array = array(
            'success' => true,
            'idSerie' => $idSerie,
            'idListe' => $idListe,
            'nomListe' => $liste->getTitre(),
        ); // Données à retourner via JSON
        $response = new Response(json_encode($array));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}
