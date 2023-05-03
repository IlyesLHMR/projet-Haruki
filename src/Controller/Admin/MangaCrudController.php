<?php

namespace App\Controller\Admin;

use App\Entity\Manga;
use App\Repository\SerieRepository;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;


class MangaCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Manga::class;
    }
    public function configureFields(string $pageName): iterable
    {
        yield AssociationField::new('serie', 'Série')->setFormTypeOption(
            'query_builder',
            fn (SerieRepository $repo) => $repo->createQueryBuilder('s')->orderBy('s.nom_serie', 'ASC')
        );
        yield IntegerField::new('numero_tome', 'Numéro de tome');
        yield DateField::new('date_parution', 'Date de parution');
        yield IntegerField::new('nb_exemplaire_dispo', 'Nombre d\'exemplaires disponibles');


        yield ImageField::new('image_cover', 'image de couverture')
            ->setUploadDir('public/assets/img/uploaded')
            ->setBasePath('assets/img/uploaded')
            ->setUploadedFileNamePattern('[slug]-[contenthash].[extension]');
    }
}