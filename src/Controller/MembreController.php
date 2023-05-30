<?php

namespace App\Controller;

use App\Entity\ListeDeLecture;
use App\Form\ListeDeLectureType;
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

    public function readList(): Response
    {  
        return $this->render('membre/readList.html.twig', [
            'userInfo' => $this->userInfo,
            'bodyId' => $this->app->getBodyId('MEMBER_PAGE'),
        ]);
    }

    
    public function createList(Request $request):Response
    {
        $ListeDeLecture = new ListeDeLecture();
    
        // Récupérer l'ID de l'utilisateur
        $user = $this->userInfo->user->getId();
    
    
        $form = $this->createForm(ListeDeLectureType::class, $ListeDeLecture, [
            'userInfo' => $this->userInfo->user,
        ]);
    // dd($form);
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {
            // Récupère l'ID de l'utilisateur depuis les données du formulaire
            $user = $form->get('user')->getData();
    
            // Assigne l'utilisateur à la nouvelle liste de lecture
            $ListeDeLecture->setUser($user);
    
            // Enregistre la liste de lecture en base de données
            $entityManager = $this->db;
            $entityManager->persist($ListeDeLecture);
            $entityManager->flush();
    
            // Redirige ou effectue toute autre action nécessaire après la création de la liste de lecture
            // return $this->redirectToRoute('app_member_createList');

        }
    
        return $this->render('membre/createList.html.twig', [
            'form' => $form->createView(),
            'userInfo' => $this->userInfo,
        ]);
    }
    
    

    


}

