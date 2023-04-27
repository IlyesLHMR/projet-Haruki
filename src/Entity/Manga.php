<?php

namespace App\Entity;

use App\Repository\MangaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\String\Slugger\SluggerInterface;

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

    #[ORM\ManyToOne(inversedBy: 'manga')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Serie $serie = null;

    #[ORM\OneToMany(mappedBy: 'manga', targetEntity: ListeDeLecture::class, orphanRemoval: true)]
    private Collection $listeDeLectures;
  

    public function __construct()
    {
        $this->listeDeLectures = new ArrayCollection();
    }

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

    public function getSerie(): ?Serie
    {
        return $this->serie;
    }

    public function setSerie(?Serie $serie): self
    {
        $this->serie = $serie;

        return $this;
    }

    /**
     * @return Collection<int, ListeDeLecture>
     */
    public function getListeDeLectures(): Collection
    {
        return $this->listeDeLectures;
    }

    public function addListeDeLecture(ListeDeLecture $listeDeLecture): self
    {
        if (!$this->listeDeLectures->contains($listeDeLecture)) {
            $this->listeDeLectures->add($listeDeLecture);
            $listeDeLecture->setManga($this);
        }

        return $this;
    }

    public function removeListeDeLecture(ListeDeLecture $listeDeLecture): self
    {
        if ($this->listeDeLectures->removeElement($listeDeLecture)) {
            // set the owning side to null (unless already changed)
            if ($listeDeLecture->getManga() === $this) {
                $listeDeLecture->setManga(null);
            }
        }

        return $this;
    }
    private $slug;
    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @ORM\PrePersist
     * @ORM\PreUpdate
     */
    public function setSlugFromTitle(SluggerInterface $slugger)
    {
        $this->slug = $slugger->slug($this->getImageCover())->lower();
    }
}
