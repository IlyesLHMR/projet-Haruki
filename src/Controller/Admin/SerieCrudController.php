<?php

namespace App\Controller\Admin;

use App\Entity\Serie;
use App\Repository\AuteurRepository;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;

class SerieCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Serie::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        // yield AssociationField::new('auteur', 'Auteur')->setFormTypeOption(
        //     'query_builder',
        //     fn (AuteurRepository $repo) => $repo->createQueryBuilder('s')->orderBy('s.nom', 'ASC')
        // );
        
        yield TextField::new('nom_serie' , 'Nom de la série');
        yield TextField::new('descriptif' , 'Descriptif');
        yield TextEditorField::new('descriptif', 'Descriptif')->setNumOfRows(30);
        yield IntegerField::new('nb_de_tomes', 'Nombre de tomes');
        yield TextField::new('edition', 'Edition');
        yield TextField::new('editeur', 'Editeur');


        yield ImageField::new('cover_serie', 'image de couverture')
            ->setUploadDir('public/assets/img/uploaded')
            ->setBasePath('assets/img/uploaded')
            ->setUploadedFileNamePattern('[slug]-[contenthash].[extension]');
        
    }
    
}
