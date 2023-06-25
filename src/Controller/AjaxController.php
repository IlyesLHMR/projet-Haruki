<?php

namespace App\Controller;

use App\Entity\ListeDeLecture;
use App\Entity\Serie;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class AjaxController extends AbstractController
{
    private $db;
    private $user;
    public function __construct(ManagerRegistry $doctrine, AppHelpers $app)
    {
        $this->db = $doctrine->getManager();
        $this->user = $app->getUser()->user;
    }

    // #[Route('/ajax/remove-serie-from-list/{id}', name: 'app_ajax_remove_from_list')]
    public function removeSerieFromList(int $idSerie, int $idListe): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        if(!$idSerie || !$idListe) {
            $array = array('success' => false); // data to return via JSON
            $response = new Response(json_encode($array));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }

        $serie = $this->db->getRepository(Serie::class)->find($idSerie);
        $liste = $this->db->getRepository(ListeDeLecture::class)->find($idListe);

        if($serie){
            $liste->removeSerie($serie);
            $this->db->persist($liste);
            $this->db->flush();
        }
        
        
        $array = array('success' => true); // data to return via JSON
        $response = new Response(json_encode($array));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function addSerieToList(int $idSerie, int $idListe): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        if(!$idSerie || !$idListe) {
            $array = array('success' => false); // data to return via JSON
            $response = new Response(json_encode($array));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }

        $liste = $this->db->getRepository(ListeDeLecture::class)->find($idListe);
        $serie = $this->db->getRepository(Serie::class)->find($idSerie);

        $liste->addSerie($serie);
        $this->db->persist($liste);
        $this->db->flush();

        $array = array(
            'success' => true,
            'idSerie' => $idSerie,
            'idListe' => $idListe,
            'nomListe' => $liste->getTitre(),
        ); // data to return via JSON
        $response = new Response(json_encode($array));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }



}