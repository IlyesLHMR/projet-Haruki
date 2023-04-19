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
}
