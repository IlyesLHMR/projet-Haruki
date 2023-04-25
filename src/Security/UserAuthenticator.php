<?php

namespace App\Security;

use Symfony\Bundle\SecurityBundle\Security as SecurityBundleSecurity;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

class UserAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public const LOGIN_ROUTE = 'app_login';

    public function __construct(private UrlGeneratorInterface $urlGenerator)
    {
    }

    public function authenticate(Request $request): Passport
    {
        $email = $request->request->get('email', '');

        $request->getSession()->set(SecurityBundleSecurity::LAST_USERNAME, $email);

        return new Passport(
            new UserBadge($email),
            new PasswordCredentials($request->request->get('password', '')),
            [
                new CsrfTokenBadge('authenticate', $request->request->get('_csrf_token')),
            ]
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response  
    {

    //  A verifier autre methode pour gerer la navbar dynamiquement
        // if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
        //     return new RedirectResponse($targetPath);  
        // }

        // if(in_array('ROLE_SUPER_ADMIN', $token->getUser()->getRoles(), true))
        // {
        //     return new RedirectResponse($this->urlGenerator->generate('app_admin_member_management'));
        // }

        // if(in_array('ROLE_ADMIN', $token->getUser()->getRoles(), true))
        // {
        //     return new RedirectResponse($this->urlGenerator->generate('app_admin'));
        // }

        // if(in_array('ROLE_USER', $token->getUser()->getRoles(), true))
        // {
        //     return new RedirectResponse($this->urlGenerator->generate('app_member'));
        // }

        $currentRoute = $request->get('_route');
        if ($currentRoute == 'app_register') {
            $currentRoute = 'app_email_conf_sent';
        }

        return new RedirectResponse($this->urlGenerator->generate($currentRoute));
    }

    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE);
    }
}
