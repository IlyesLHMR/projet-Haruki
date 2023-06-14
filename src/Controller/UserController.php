<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserPasswordType;
use App\Form\UserType;
use App\Service\AppHelpers;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{
    private $app;
    private $db;
    private $userInfo;
    private $session;

    public function __construct(ManagerRegistry $doctrine,  AppHelpers $app, RequestStack $requestStack)
    {
        $this->app = $app;
        $this->db = $doctrine->getManager();
        $this->userInfo = $app->getUser();
        $this->session = $requestStack->getSession();
    }

     // Page d'accueil des membres connectés
     public function index(): Response
     {
         return $this->render('user/index.html.twig', [
             'userInfo' => $this->userInfo,
             'bodyId' => $this->app->getBodyId('MEMBER_PAGE'),
         ]);
     }

    // #[Route('/utilisateur/edition-email/{id}', name: 'app_user_edit')]
    // public function editEmail(Request $request, User $user): Response
    // {
    //     if(!$this->getUser()) {
    //         return $this->redirectToRoute('app_login');
    //     }

    //     if ($this->getUser() !== $user) {
    //         return $this->redirectToRoute('app_home');
    //     }

    //     $form = $this->createForm(UserType::class, $user);

    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {
    //         $user = $form->getData();

    //         $entityManager = $this->db;
    //         $entityManager->persist($user);
    //         $entityManager->flush();

    //         $this->addFlash(
    //             'success',
    //             'Vos informations ont été mises à jour avec succès'
    //         );
    //         return $this->redirectToRoute('app_member');
    //     }

    //     return $this->render('user/edit.html.twig', [
    //         'form' => $form->createView(),
    //         'userInfo' => $this->userInfo,
    //     ]);
    // }

    #[Route('/utilisateur/edition-password/{id}', name: 'app_user_edit_password', methods: ['GET', 'POST'])]
    public function editPassword(User $user, Request $request, UserPasswordHasherInterface $hasher): Response
    {
        
        $form = $this->createForm(UserPasswordType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if ($hasher->isPasswordValid($user, $form->getData()['plainPassword'])) 
            {
                $user->setPassword(
                    $hasher->hashPassword(
                        $user,
                        $form->getData()['newPassword']
                    )
                );

                $entityManager = $this->db;
                $entityManager->persist($user);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'Le mot de passe a été modifié avec succès.'
                );

                return $this->redirectToRoute('app_member');
            } else {
                $this->addFlash(
                    'warning',
                    'Le mot de passe renseigné est incorrect.'
                );
            }
        }

        return $this->render('user/editPassword.html.twig', [
            'form' => $form->createView(),
            'userInfo' => $this->userInfo
        ]);
    }



}
