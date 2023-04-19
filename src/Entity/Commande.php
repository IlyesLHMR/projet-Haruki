<?php

namespace App\Entity;

use App\Repository\CommandeRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommandeRepository::class)]
class Commande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id = null;

    #[ORM\Column(type: 'string', length: 255, nullable: false, options:['collation' => 'utf8_general_ci'])]
    private $numero_commande = null;

    #[ORM\Column(type: 'float',nullable: false)]
    private $montant_total = null;

    #[ORM\Column(type: 'integer',nullable: false)]
    private $nb_heure = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE,nullable: false)]
    private  $date_achat = null;

    #[ORM\Column(type: 'boolean',nullable: false)]
    private $paiement_effectue = null;

    #[ORM\Column(type: 'boolean',nullable: true)]
    private $promo_applicable = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroCommmande(): ?string
    {
        return $this->numero_commande;
    }

    public function setNumeroCommmande(string $numero_commmande): self
    {
        $this->numero_commande = $numero_commmande;

        return $this;
    }

    public function getMontantTotal(): ?float
    {
        return $this->montant_total;
    }

    public function setMontantTotal(float $montant_total): self
    {
        $this->montant_total = $montant_total;

        return $this;
    }

    public function getNbHeure(): ?int
    {
        return $this->nb_heure;
    }

    public function setNbHeure(int $nb_heure): self
    {
        $this->nb_heure = $nb_heure;

        return $this;
    }

    public function getDateAchat(): ?\DateTimeInterface
    {
        return $this->date_achat;
    }

    public function setDateAchat(\DateTimeInterface $date_achat): self
    {
        $this->date_achat = $date_achat;

        return $this;
    }

    public function isPaiementEffectue(): ?bool
    {
        return $this->paiement_effectue;
    }

    public function setPaiementEffectue(bool $paiement_effectue): self
    {
        $this->paiement_effectue = $paiement_effectue;

        return $this;
    }

    public function isPromoApplicable(): ?bool
    {
        return $this->promo_applicable;
    }

    public function setPromoApplicable(?bool $promo_applicable): self
    {
        $this->promo_applicable = $promo_applicable;

        return $this;
    }
}
