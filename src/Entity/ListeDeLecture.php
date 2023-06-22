<?php

namespace App\Entity;

use App\Repository\ListeDeLectureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ListeDeLectureRepository::class)]
class ListeDeLecture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id = null;

    #[ORM\ManyToOne(inversedBy: 'listeDeLectures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'listeDeLectures')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Manga $manga = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\ManyToMany(targetEntity: Serie::class, inversedBy: 'listeDeLectures')]
    private Collection $serie;

    public function __construct()
    {
        $this->serie = new ArrayCollection();
    }

    // public function getEntityOptions(): Collection
    // {
    //     // Return the options for the series field
    //     return $this->serie;
    // }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getManga(): ?Manga
    {
        return $this->manga;
    }

    public function setManga(?Manga $manga): self
    {
        $this->manga = $manga;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * @return Collection<int, Serie>
     */
    public function getSerie(): Collection
    {
        return $this->serie;
    }

    public function addSerie(Serie $serie): self
    {
        if (!$this->serie->contains($serie)) {
            $this->serie->add($serie);
            $serie->addListeDeLecture($this);
        }

        return $this;
    }

    public function removeSerie(Serie $serie): self
    {
        if ($this->serie->removeElement($serie)) {
            $serie->removeListeDeLecture($this);
        }

        return $this;
    }

    public function emptySeries(): self
    {
        $this->serie->clear();
        return $this;
    }
}