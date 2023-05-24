<?php

namespace App\Controller;

use App\Entity\ListeDeLecture;
use App\Form\ListeDeLectureType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\RequestStack;

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
    {   $ListeDeLecture = new ListeDeLecture();
        $form = $this->createForm(ListeDeLectureType::class, $ListeDeLecture);

        return $this->render('membre/readList.html.twig', [
            'userInfo' => $this->userInfo,
            'bodyId' => $this->app->getBodyId('MEMBER_PAGE'),
            'form'=>$form
        ]);
    }

    
}
