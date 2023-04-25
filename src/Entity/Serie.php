<?php

namespace App\Entity;

use App\Repository\SerieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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

    #[ORM\ManyToOne(inversedBy: 'series')]
    private ?Auteur $auteur = null;

    #[ORM\OneToMany(mappedBy: 'serie', targetEntity: Manga::class, orphanRemoval: true)]
    private Collection $manga;

    public function __construct()
    {
        $this->manga = new ArrayCollection();
    }

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

    public function getAuteur(): ?Auteur
    {
        return $this->auteur;
    }

    public function setAuteur(?Auteur $auteur): self
    {
        $this->auteur = $auteur;

        return $this;
    }

    /**
     * @return Collection<int, Manga>
     */
    public function getManga(): Collection
    {
        return $this->manga;
    }

    public function addManga(Manga $manga): self
    {
        if (!$this->manga->contains($manga)) {
            $this->manga->add($manga);
            $manga->setSerie($this);
        }

        return $this;
    }

    public function removeManga(Manga $manga): self
    {
        if ($this->manga->removeElement($manga)) {
            // set the owning side to null (unless already changed)
            if ($manga->getSerie() === $this) {
                $manga->setSerie(null);
            }
        }

        return $this;
    }
}
