<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\RequestStack;

class HomeController extends AbstractController
{
    private string $bodyId;
    private $app;
    private $db;
    private $userInfo;
    private $session;

    public function __construct(ManagerRegistry $doctrine,  AppHelpers $app, RequestStack $requestStack)
    {
        $this->app = $app;
        $this->bodyId = $app->getBodyId('HOME_PAGE');
        $this->db = $doctrine->getManager();
        $this->userInfo = $app->getUser();
        $this->session = $requestStack->getSession();
    }

    public function index(ArticleRepository $articleRepo): Response
    {
        $articleRepo = $this->db->getRepository(Article::class)->findBy([],['id' => 'DESC']);

        return $this->render('home/index.html.twig', [
            'userInfo' => $this->userInfo,
            'bodyId' => $this->bodyId,
            'articles' => $articleRepo
        ]);
    }

    public function  cgu(): Response
    {
        return $this->render('cgu.html.twig', [
            'userInfo' => $this->userInfo,
        ]);
    }
    public function  privacyPolicy(): Response
    {
        return $this->render('privacy-policy.html.twig', [
            'userInfo' => $this->userInfo,
        ]);
    }

    public function  donate(): Response
    {
        return $this->render('dons.html.twig', [
            'userInfo' => $this->userInfo,
        ]);
    }
}
