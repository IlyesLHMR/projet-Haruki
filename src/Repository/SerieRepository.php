<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Serie;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Serie>
 *
 * @method Serie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Serie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Serie[]    findAll()
 * @method Serie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SerieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Serie::class);
    }

    public function save(Serie $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Serie $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//  Trouver un manga par rapport à la série de l'id.
    public function findMangasBySerie(Serie $serie)
    {
        return $this->createQueryBuilder('s')
            ->join('s.manga', 'm') // Assurez-vous que le nom de la relation entre Serie et Manga est correct (ici, 'mangas')
            ->where('s.id = :serieId')
            ->setParameter('serieId', $serie->getId())
            ->getQuery()
            ->getResult();
    }

// récupère les listes de lecture de l'utilisateur à partir de ListeDeLectureRepository, puis utilise SerieRepository pour récupérer les séries associées à ces listes de lecture
    public function findSeriesByUser(User $user): array
{
    return $this->createQueryBuilder('serie')
        ->join('serie.listeDeLectures', 'liste')
        ->where('liste.user = :user')
        ->setParameter('user', $user)
        ->getQuery()
        ->getResult();
}

//    /**
//     * @return Serie[] Returns an array of Serie objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Serie
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
