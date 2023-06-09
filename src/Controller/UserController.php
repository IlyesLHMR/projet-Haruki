<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserPasswordType;
use App\Form\UserType;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
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
         return $this->render('user/index.html.twig', [
             'userInfo' => $this->userInfo,
             'bodyId' => $this->app->getBodyId('MEMBER_PAGE'),
         ]);
     }







}
