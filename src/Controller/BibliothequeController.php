<?php

namespace App\Controller;

use App\Entity\Manga;
use App\Entity\Serie;
use App\Repository\MangaRepository;
use App\Repository\SerieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\AppHelpers;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Annotation\Route;

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

    // Appel de la page /bibliotheque pour l'affichage des series.
    public function index(SerieRepository $serieRepo): Response
    {
      //$serieRepo = $serieRepo->findAll();
        $serieRepo = $this->db->getRepository(Serie::class)->findAll();
        shuffle($serieRepo); // pour l'affichage de manière aléatoire des valeurs de ma bdd

        return $this->render('bibliotheque/index.html.twig', [
            'userInfo' => $this->userInfo,
            'series' => $serieRepo,

        ]);
        
    }

    // Appel de la page de détail des series. 
    // #[Route("/bibliotheque/{id}",name:"app_detail_serie")]
    public function detail($id, SerieRepository $serieRepo, MangaRepository $mangaRepo): Response
    {
        $serieRepo = $this->db->getRepository(Serie::class)->findOneBy(['id' => $id]);
        $mangaRepo = $this->db->getRepository(Manga::class)->findAll();

        return $this->render('bibliotheque/detail.html.twig', [
            'userInfo' => $this->userInfo,
            'series' =>$serieRepo,
            'mangas' =>$mangaRepo,
        ]);
    }

  
    
}
