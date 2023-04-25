<?php

namespace App\Entity;

use App\Repository\ListeDeLectureRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ListeDeLectureRepository::class)]
class ListeDeLecture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id = null;

    #[ORM\Column(type: 'boolean',nullable: false)]
    private $lu = null;

    #[ORM\ManyToOne(inversedBy: 'liste_lecture')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'listeDeLectures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Manga $manga = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isLu(): ?bool
    {
        return $this->lu;
    }

    public function setLu(bool $lu): self
    {
        $this->lu = $lu;

        return $this;
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
}
