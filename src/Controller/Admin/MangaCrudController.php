<?php

namespace App\Controller\Admin;

use App\Entity\Manga;
use App\Entity\Serie;
use App\Repository\SerieRepository;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Component\HttpFoundation\Request;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;
use Symfony\Component\String\Slugger\SluggerInterface;

class MangaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Manga::class;
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $request = Request::createFromGlobals();
        $idSerie = $request->query->get('filters[serie.id]');

        if ($idSerie) {
            $serie = $entityManager->getRepository(Serie::class)->find($idSerie);
            $entityInstance->setSerie($serie);
        }

        parent::persistEntity($entityManager, $entityInstance);
    }
    

    public function configureFields(string $pageName ): iterable
    {
        yield AssociationField::new('serie', 'Série')->setFormTypeOption('query_builder', 
            fn (SerieRepository $repo) => $repo->createQueryBuilder('s')->orderBy('s.nom_serie', 'ASC')
        );
        yield IntegerField::new('numero_tome', 'Numéro de tome');
        yield DateField::new('date_parution', 'Date de parution');
        yield IntegerField::new('nb_exemplaire_dispo', 'Nombre d\'exemplaires disponibles');
        

        yield ImageField::new('image_cover', 'image de couverture')
            ->setUploadDir('public/assets/img/uploaded')
            ->setBasePath('slug');
            

    }
    
}
