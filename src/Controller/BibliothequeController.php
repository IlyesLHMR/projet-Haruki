<?php

namespace App\Controller;

use App\Entity\Manga;
use App\Entity\Serie;
use App\Repository\MangaRepository;
use App\Repository\SerieRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Annotation\Route;

class BibliothequeController extends AbstractController
{
    private string $bodyId;
    private $app;
    private $db;
    private $userInfo;
    private $session;

    // Le constructeur pour injecter les dépendances.
    public function __construct(ManagerRegistry $doctrine,  AppHelpers $app, RequestStack $requestStack)
    {
        $this->app = $app;
        $this->bodyId = $app->getBodyId('BIBLIOTHEQUE');
        $this->db = $doctrine->getManager();
        $this->userInfo = $app->getUser();
        $this->session = $requestStack->getSession();
    }

    // Affichage de la page /bibliotheque pour l'affichage des séries.
    public function index(SerieRepository $serieRepo, PaginatorInterface $paginator, Request $request): Response
    {
        // Récupérer les séries depuis la base de données et paginer les résultats.
        $serieRepo = $paginator->paginate(
            $serieRepo = $this->db->getRepository(Serie::class)->findAll(),
            $request->query->getInt('page', 1),
            5
        );

        $userSeries = [];
        $listes = [];

        // Vérifier si un utilisateur est connecté.
        if ($this->userInfo->user) {
            $listes = $this->userInfo->user->getListeLecture();
            foreach ($listes as $liste) {
                foreach ($liste->getSerie() as $serie){
                    $userSeries[] = $serie;
                }
            }
        }

        return $this->render('bibliotheque/index.html.twig', [
            'userInfo' => $this->userInfo,
            'isUser' => $this->userInfo->user && !$this->userInfo->isAdmin,
            'series' => $serieRepo,
            'listes' => $listes,
            'userSeries' => $userSeries,
        ]);
    }

    // Affichage de la page de détail des séries pour l'affichage des mangas.
    // #[Route("/bibliotheque/{id}", name: "app_detail_serie")]
    public function detail($id, SerieRepository $serieRepo, MangaRepository $mangaRepo): Response
    {
        // Récupérer la série à partir de l'ID fourni dans l'URL
        $serieRepo = $this->db->getRepository(Serie::class)->findOneBy(['id' => $id]);

        // Récupérer les mangas liés à la série
        $mangaRepo = $this->db->getRepository(Manga::class)->findBy(['serie'=> $id]);

        return $this->render('bibliotheque/detail.html.twig', [
            'userInfo' => $this->userInfo,
            'series' => $serieRepo,
            'mangas' => $mangaRepo,
        ]);
    }
}
