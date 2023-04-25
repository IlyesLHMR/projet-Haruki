<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\RequestStack;

class BibliothequeController extends AbstractController
{
    private string $bodyId;
    private $app;
    private $db;
    private $userInfo;
    private $session;

    public function __construct(ManagerRegistry $doctrine,  AppHelpers $app, RequestStack $requestStack)
    {
        $this->app = $app;
        $this->bodyId = $app->getBodyId('BIBLIOTHEQUE');
        $this->db = $doctrine->getManager();
        $this->userInfo = $app->getUser();
        $this->session = $requestStack->getSession();
    }

    public function index(): Response
    {
        $bookList=[
             'book1', 
             'book2', 
             'book3', 
             'book4', 
             'book5', 
             'book6', 
             'book7', 
             'book8', 
             'book9', 
             'book10', 
        ];

        return $this->render('bibliotheque/index.html.twig', [
            'userInfo' => $this->userInfo,
            'bodyId' => $this->bodyId,
            'bookList' => $bookList,
        ]);
    }
}
