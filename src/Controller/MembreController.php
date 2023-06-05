<?php

namespace App\Controller;

use App\Entity\Serie;
use App\Entity\ListeDeLecture;
use App\Form\ListeDeLectureType;
use App\Repository\ListeDeLectureRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Annotation\Route;


class MembreController extends AbstractController
{
    private $app;
    private $db;
    private $userInfo;
    private $session;

    public function __construct(ManagerRegistry $doctrine,  AppHelpers $app, RequestStack $requestStack)
    {
        $this->app = $app;
        $this->db = $doctrine->getManager();
        $this->userInfo = $app->getUser();
        $this->session = $requestStack->getSession();
    }

    // Page d'accueil des membres connectés
    public function index(): Response
    {
        return $this->render('membre/index.html.twig', [
            'userInfo' => $this->userInfo,
            'bodyId' => $this->app->getBodyId('MEMBER_PAGE'),
        ]);
    }

    public function readList(ListeDeLectureRepository $listeRepo): Response
    {  
        $user = $this->getUser(); // Récupérer l'utilisateur actuellement connecté
        $listeRepo = $this->db->getRepository(ListeDeLecture::class)->findBy(['user' => $user]);

        return $this->render('membre/readList.html.twig', [
            'listes' => $listeRepo,
            'userInfo' => $this->userInfo,
            'bodyId' => $this->app->getBodyId('MEMBER_PAGE'),
        ]);
    }

    
    public function createList(Request $request):Response
    {
        $ListeDeLecture = new ListeDeLecture();    
        $form = $this->createForm(ListeDeLectureType::class, $ListeDeLecture);
        // dd($form);
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {    

            $ListeDeLecture->setUser($this->userInfo->user);
            // Enregistre la liste de lecture en base de données
            $entityManager = $this->db;
            $entityManager->persist($ListeDeLecture);
            $entityManager->flush();
    
            // Redirige ou effectue toute autre action nécessaire après la création de la liste de lecture
            return $this->redirectToRoute('app_member_readList');
        }
        return $this->render('membre/createList.html.twig', [
            'form' => $form->createView(),
            'userInfo' => $this->userInfo,
        ]);
    }


    // Cette fonction permet de modifier une liste de lecture.
    public function editList(ListeDeLecture $liste, Request $request):Response
    {
        // dd($liste);
        $form = $this->createForm(ListeDeLectureType::class, $liste);

        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {    

            // $liste->setUser($this->userInfo->user);
            // Enregistre la liste de lecture en base de données
            $entityManager = $this->db;
            $entityManager->persist($liste);
            $entityManager->flush();
    
            // Redirige ou effectue toute autre action nécessaire après la création de la liste de lecture
            return $this->redirectToRoute('app_member_readList');
        }

        return $this->render('membre/editList.html.twig',[
            'userInfo' => $this->userInfo,
            'form' => $form->createView(),
            'liste' => $liste,
        ]);
    }

    
    public function deleteList(ListeDeLecture $liste): Response
    {
        // Vérifier si l'utilisateur connecté est autorisé à supprimer cette liste de lecture
        // Par exemple, vous pouvez vérifier si l'utilisateur connecté est le propriétaire de la liste de lecture

        // Supprimer la liste de lecture
        $entityManager = $this->db;
        $entityManager->remove($liste);
        $entityManager->flush();

        // Rediriger ou effectuer toute autre action nécessaire après la suppression de la liste de lecture
        // Par exemple, vous pouvez rediriger vers la page de lecture des listes de l'utilisateur
        return $this->redirectToRoute('app_member_readList');
    }


}