<?php

namespace App\Controller;

use App\Entity\Serie;
use App\Service\AppHelpers;
use App\Entity\ListeDeLecture;
use App\Form\ListeDeLectureType;
use App\Repository\MangaRepository;
use App\Repository\SerieRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\ListeDeLectureRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


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


    public function readList(ListeDeLectureRepository $listeRepo, SerieRepository $serieRepo): Response
    {  
        
        $user = $this->getUser(); // Récupérer l'utilisateur actuellement connecté
        $listeRepo = $this->db->getRepository(ListeDeLecture::class)->findBy(['user' => $user]);
        $series = $serieRepo->findSeriesByUser($user);
        

        return $this->render('membre/readList.html.twig', [
            'listes' => $listeRepo,
            'series' => $series,
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
    
            // Redirige après la création de la liste de lecture
            return $this->redirectToRoute('app_member_readList');
        }
        return $this->render('membre/createList.html.twig', [
            'form' => $form->createView(),
            'userInfo' => $this->userInfo,
        ]);
    }


    // Cette fonction permet de modifier une liste de lecture.
    public function editList(int $id, ListeDeLecture $liste, Request $request):Response
    {
        $serieRepo = $this->db->getRepository(Serie::class)->findBy(['id' => $id]);
        $form = $this->createForm(ListeDeLectureType::class, $liste);

        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {    

            // $liste->setUser($this->userInfo->user);
            // Enregistre la liste de lecture en base de données
            $entityManager = $this->db;
            $entityManager->persist($liste);
            $entityManager->flush();
    
            // Redirige après la modification de la liste de lecture
            return $this->redirectToRoute('app_member_readList');
        }

        return $this->render('membre/editList.html.twig',[
            'userInfo' => $this->userInfo,
            'form' => $form->createView(),
            'liste' => $liste,
            'serie' =>$serieRepo,
            // 'mangas' =>$mangaRepo,
        ]);
    }

    
    public function deleteList(ListeDeLecture $liste): Response
    {
        
        $entityManager = $this->db;
        $entityManager->remove($liste);
        $entityManager->flush();

        return $this->redirectToRoute('app_member_readList');
    }

}