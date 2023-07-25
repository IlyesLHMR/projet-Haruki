<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\RequestStack;

class AdminController extends AbstractController
{
    private $app;
    private $db;
    private $userInfo;
    private $session;

    public function __construct(ManagerRegistry $doctrine,  AppHelpers $app, RequestStack $requestStack)
    {
        // Injecte le service AppHelpers (app) et ManagerRegistry (doctrine) ainsi que RequestStack (requestStack)
        // pour pouvoir les utiliser dans les autres méthodes du contrôleur
        $this->app = $app;
        $this->db = $doctrine->getManager();
        $this->userInfo = $app->getUser();
        $this->session = $requestStack->getSession();
    }

    public function index(): Response
    {
        // Vérifie si l'utilisateur connecté a le rôle ROLE_ADMIN, sinon interdit l'accès à cette page
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        // Rend la vue 'admin/index.html.twig' avec les données userInfo (informations sur l'utilisateur) et bodyId (identifiant de la page)
        return $this->render('admin/index.html.twig', [
            'userInfo' => $this->userInfo,
            'bodyId' => $this->app->getBodyId('ADMIN_PAGE'),
        ]);
    }

    public function memberManagement(): Response
    {
        // Vérifie si l'utilisateur connecté a le rôle ROLE_SUPER_ADMIN, sinon interdit l'accès à cette page
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN');

        // Rend la vue 'admin/member-management.html.twig' avec les données userInfo (informations sur l'utilisateur) et bodyId (identifiant de la page)
        return $this->render('admin/member-management.html.twig', [
            'userInfo' => $this->userInfo,
            'bodyId' => $this->app->getBodyId('ADMIN_MEMBER_MANAGEMENT_PAGE'),
        ]);
    }
}
