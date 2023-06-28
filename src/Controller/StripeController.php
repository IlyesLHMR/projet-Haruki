<?php


namespace App\Controller;




use Stripe\Charge;

use App\Service\AppHelpers;

use Doctrine\Persistence\ManagerRegistry;
use Stripe\Stripe as Stripe;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\Security\Core\Security;

use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\HttpFoundation\RequestStack;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class StripeController extends AbstractController

{

    private string $bodyId;

    private $app;

    private $db;

    private $userInfo;

    private $cartCount;

    private $session;


    public function __construct(Security $security, ManagerRegistry $doctrine,  AppHelpers $app, RequestStack $requestStack)

    {

        $this->app = $app;

        $this->bodyId = $app->getBodyId('ORDER_CONFIRMATION');

        $this->db = $doctrine->getManager();

        $this->userInfo = $app->getUser();


        $this->session = $requestStack->getSession();


    }

    public function index(Request $request ): Response

    {

        return $this->render('stripe/index.html.twig',  [

            'clef_stripe' => $_ENV["STRIPE_KEY"],

            'bodyId' => $this->bodyId,

            'cartCount' => $this->cartCount,

            'userInfo' => $this->userInfo,

            'orderTotal' => $request->get('amount')

        ]);

    }


    public function createCharge(Request $request)

    {

        Stripe::setApiKey($_ENV["STRIPE_SECRET"]);

        try {

            Charge::create([

                "amount" => $request->request->get('amount') * 100,

                "currency" => "eur",

                "source" => $request->request->get('stripeToken'),

                "description" => "Payment Test"

            ]);
        } catch (\Exception $e) {

            return $this->redirectToRoute('app_stripe_fail', [

                'error' => $e->getMessage(),

            ], Response::HTTP_SEE_OTHER);
        }


        return $this->redirectToRoute('app_stripe_success', ['amount' => $request->get('amount')], Response::HTTP_SEE_OTHER);
    }


    public function orderConfirmation(): Response

    {

        return $this->render('stripe/order_confirmation.html.twig', [

            'bodyId' => $this->bodyId,

            'cartCount' => $this->cartCount,

            'userInfo' => $this->userInfo,

            'orderTotal' => $this->session->get('orderTotal'),

        ]);

    }


    public function paymentFailure(Request $request): Response

    {

        $error = $request->get('error');

        return $this->render('stripe/payment_failure.html.twig', [

            'bodyId' => $this->bodyId,

            'cartCount' => $this->cartCount,

            'userInfo' => $this->userInfo,

            'orderTotal' => $this->session->get('orderTotal'),

            'error' => $error,

        ]);

    }

}