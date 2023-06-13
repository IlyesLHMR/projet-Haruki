<?php

namespace App\Form;

use App\Entity\Serie;
use App\Entity\ListeDeLecture;
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
            ->add('serie');
            // ->add('submit', SubmitType::class, [
            //     'attr' => [
            //         'class' => 'btn btn-primary m-4'
            //     ],
            //     'label' => 'Créer la liste'
            // ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ListeDeLecture::class,
        ]);
    }
}
