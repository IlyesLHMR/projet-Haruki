<?php

namespace App\Form;

use App\Entity\Serie;
use App\Entity\ListeDeLecture;
use App\Entity\Manga;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ListeDeLectureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre')
            ->add('series', EntityType::class, [
                'label' => 'Ajoutez/supprimez des séries de votre liste:',
                'mapped' =>false,
                'class' => Serie::class,
                'choice_label' => 'nomSerie',
                'expanded' => true,
                "multiple" => true,
                // la ligne ci-dessous permet de ne montrer que les
                // séries attachées à la liste:
                //'choices' => $options['data']->getEntityOptions(),
                'data' => $options['data']->getSerie()->toArray(),
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ListeDeLecture::class,
        ]);
    }
}