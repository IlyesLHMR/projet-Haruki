<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230419095821 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE auteur (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, prenom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commande (id INT AUTO_INCREMENT NOT NULL, numero_commande VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, montant_total DOUBLE PRECISION NOT NULL, nb_heure INT NOT NULL, date_achat DATETIME NOT NULL, paiement_effectue TINYINT(1) NOT NULL, promo_applicable TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE liste_de_lecture (id INT AUTO_INCREMENT NOT NULL, lu TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE manga (id INT AUTO_INCREMENT NOT NULL, numero_tome INT NOT NULL, date_parution DATETIME NOT NULL, nb_exemplaire_dispo INT NOT NULL, image_cover VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie (id INT AUTO_INCREMENT NOT NULL, nom_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, nb_de_tomes INT NOT NULL, cover_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, edition VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, editeur VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE auteur');
        $this->addSql('DROP TABLE commande');
        $this->addSql('DROP TABLE liste_de_lecture');
        $this->addSql('DROP TABLE manga');
        $this->addSql('DROP TABLE serie');
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
    }
}
