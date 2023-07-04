<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\EmailVerifier;
use App\Security\UserAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Service\AppHelpers;
use Symfony\Component\HttpFoundation\RedirectResponse;

class RegistrationController extends AbstractController
{
    private EmailVerifier $emailVerifier;
    private $app;
    private $userInfo;
    private $session;

    public function __construct(EmailVerifier $emailVerifier,  AppHelpers $app, RequestStack $requestStack,  )
    {
        $this->app = $app;
        $this->emailVerifier = $emailVerifier;
        $this->userInfo = $app->getUser();
    }

    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, UserAuthenticator $authenticator, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            // Generate a reset token
            $token = $this->generateToken();
            $user->setResetToken($token);

            $entityManager->persist($user);
            $entityManager->flush();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation(
                'app_verify_email',
                $user,
                (new TemplatedEmail())
                    ->from(new Address('Admin@Haruki-concept.com', 'WebMaster Mon-Site'))
                    ->to($user->getEmail())
                    ->subject('Please Confirm your Email')
                    ->htmlTemplate('registration/confirmation_email.html.twig')
            );
            // do anything else you need here, like send an email

            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
            'bodyId' => $this->app->getBodyId('SIGN_UP'),
            'userInfo' => $this->userInfo,
        ]);
    }

    private function generateToken(): string
    {
        // Logic to generate a unique token
        // You can use any method that suits your needs, such as generating a random string or using a library like Ramsey\Uuid
        // Make sure the generated token is unique and has enough entropy to be secure

        // Example using random_bytes to generate a token
        $token = bin2hex(random_bytes(32));

        return $token;
    }

    public function renewEmailLink(): RedirectResponse
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = $this->getUser();
        $this->emailVerifier->sendEmailConfirmation(
            'app_verify_email',
            $user,
            (new TemplatedEmail())
                ->from(new Address('Admin@Haruki-concept.com', 'WebMaster Mon-Site'))
                ->to($user->getEmail())
                ->subject('Please Confirm your Email')
                ->htmlTemplate('registration/confirmation_email.html.twig')
        );

        return $this->redirectToRoute('app_email_conf_sent');
    }

    public function verifyUserEmail(Request $request, TranslatorInterface $translator, RequestStack $requestStack): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $this->getUser());
        } catch (VerifyEmailExceptionInterface $exception) {
            if($translator->trans($exception->getReason(), [], 'VerifyEmailBundle') === 'The link to verify your email has expired. Please request a new link.')
            {
                $this->addFlash('new_link_error', "Le lien pour vérifier votre adresse e-mail a expiré. Veuillez demander un nouveau ");
            } else {
                $this->addFlash('verify_email_error', $translator->trans($exception->getReason(), [], 'VerifyEmailBundle'));
            }

            return $this->redirectToRoute('app_register');
        }

        // @TODO Change the redirect on success and handle or remove the flash message in your templates
        $this->addFlash('success', 'Your email address has been verified.');

        return $this->redirectToRoute('app_home');
    }

    public function postSignUp()
    {
        return $this->render('registration/post_sign_up.html.twig', [
            'bodyId' => $this->app->getBodyId('POST_SIGN_UP'),
            'userInfo' => $this->userInfo,
        ]);
    }
}