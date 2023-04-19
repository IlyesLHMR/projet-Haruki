<?php

namespace App\Entity;

use App\Repository\MangaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MangaRepository::class)]
class Manga
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id = null;

    #[ORM\Column(type: 'integer')]
    private $numero_tome = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable:false)]
    private $date_parution = null;

    #[ORM\Column(type: 'integer', nullable: false)]
    private $nb_exemplaire_dispo = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true, options:['collation' => 'utf8_general_ci'])]
    private $image_cover = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroTome(): ?int
    {
        return $this->numero_tome;
    }

    public function setNumeroTome(int $numero_tome): self
    {
        $this->numero_tome = $numero_tome;

        return $this;
    }

    public function getDateParution(): ?\DateTimeInterface
    {
        return $this->date_parution;
    }

    public function setDateParution(\DateTimeInterface $date_parution): self
    {
        $this->date_parution = $date_parution;

        return $this;
    }

    public function getNbExemplaireDispo(): ?int
    {
        return $this->nb_exemplaire_dispo;
    }

    public function setNbExemplaireDispo(int $nb_exemplaire_dispo): self
    {
        $this->nb_exemplaire_dispo = $nb_exemplaire_dispo;

        return $this;
    }

    public function getImageCover(): ?string
    {
        return $this->image_cover;
    }

    public function setImageCover(?string $image_cover): self
    {
        $this->image_cover = $image_cover;

        return $this;
    }
}
