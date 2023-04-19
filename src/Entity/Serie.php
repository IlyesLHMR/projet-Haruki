<?php

namespace App\Entity;

use App\Repository\SerieRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SerieRepository::class)]
class Serie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id = null;

    #[ORM\Column(type: 'string', length: 255, nullable: false, options:['collation' => 'utf8_general_ci'])]
    private $nom_serie = null;

    #[ORM\Column(type: 'integer', nullable: false)]
    private $nb_de_tomes = null;

    #[ORM\Column(type: 'string', length: 255, nullable: false, options:['collation' => 'utf8_general_ci'])]
    private $cover_serie = null;

    #[ORM\Column(type: 'string', length: 255, nullable: false, options:['collation' => 'utf8_general_ci'])]
    private $edition = null;

    #[ORM\Column(type: 'string', length: 255, nullable: false, options:['collation' => 'utf8_general_ci'])]
    private $editeur = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomSerie(): ?string
    {
        return $this->nom_serie;
    }

    public function setNomSerie(string $nom_serie): self
    {
        $this->nom_serie = $nom_serie;

        return $this;
    }

    public function getNbDeTomes(): ?int
    {
        return $this->nb_de_tomes;
    }

    public function setNbDeTomes(int $nb_de_tomes): self
    {
        $this->nb_de_tomes = $nb_de_tomes;

        return $this;
    }

    public function getCoverSerie(): ?string
    {
        return $this->cover_serie;
    }

    public function setCoverSerie(string $cover_serie): self
    {
        $this->cover_serie = $cover_serie;

        return $this;
    }

    public function getEdition(): ?string
    {
        return $this->edition;
    }

    public function setEdition(string $edition): self
    {
        $this->edition = $edition;

        return $this;
    }

    public function getEditeur(): ?string
    {
        return $this->editeur;
    }

    public function setEditeur(string $editeur): self
    {
        $this->editeur = $editeur;

        return $this;
    }
}
