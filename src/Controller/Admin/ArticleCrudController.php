<?php

namespace App\Controller\Admin;

use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use DateTimeImmutable;
use App\Entity\Article;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;

class ArticleCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Article::class;
    }

    public function createEntity(string $entityFqcn)
{
    $article = new Article();
    $article->setDatePublication(new DateTimeImmutable());

    return $article;
}


    public function configureFields(string $pageName): iterable
{
    yield TextField::new('titre', 'Titre de l\'article');
    yield TextField::new('contenu', 'Contenu de l\'article')
        ->formatValue(function ($value, $entity) {
            return nl2br($value);
        })
        ->setFormTypeOption('attr', ['class' => 'large-textarea']);
    yield ImageField::new('image', 'Image de l\'article')
        ->setUploadDir('public/assets/img/article')
        ->setBasePath('assets/img/article')
        ->setUploadedFileNamePattern('[slug]-[contenthash].[extension]');
}

}
