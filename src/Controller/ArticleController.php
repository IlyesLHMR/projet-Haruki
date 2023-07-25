<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Article;

class ArticleController extends AbstractController
{
    private string $bodyId;
    private $app;
    private $db;
    private $userInfo;
    private $session;

    public function __construct(ManagerRegistry $doctrine, AppHelpers $app, RequestStack $requestStack)
    {
        $this->app = $app;
        $this->bodyId = $app->getBodyId('BIBLIOTHEQUE');
        $this->db = $doctrine->getManager();
        $this->userInfo = $app->getUser();
        $this->session = $requestStack->getSession();
    }

    /**
     * @Route("/article", name="app_article")
     */
    public function index(ArticleRepository $articleRepo): Response
    {
        // Récupérer tous les articles depuis le repository d'articles
        $articles = $articleRepo->findAll();

        return $this->render('article/index.html.twig', [
            'userInfo' => $this->userInfo,
            'articles' => $articles
        ]);
    }

    /**
     * @Route("/article/{id}", name="app_article_details")
     */
    public function show($id, ArticleRepository $articleRepo): Response
    {
        // Récupérer un article en fonction de l'ID passé dans l'URL depuis le repository d'articles
        $article = $articleRepo->findOneBy(['id' => $id]);

        return $this->render('article/detail.html.twig', [
            'userInfo' => $this->userInfo,
            'article' => $article
        ]);
    }
}
