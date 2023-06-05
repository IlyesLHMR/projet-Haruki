<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230604134512 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE liste_de_lecture_serie (liste_de_lecture_id INT NOT NULL, serie_id INT NOT NULL, INDEX IDX_4B07CEB3314EB86A (liste_de_lecture_id), INDEX IDX_4B07CEB3D94388BD (serie_id), PRIMARY KEY(liste_de_lecture_id, serie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE liste_de_lecture_serie ADD CONSTRAINT FK_4B07CEB3314EB86A FOREIGN KEY (liste_de_lecture_id) REFERENCES liste_de_lecture (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE liste_de_lecture_serie ADD CONSTRAINT FK_4B07CEB3D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE auteur CHANGE nom nom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE prenom prenom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE commande CHANGE numero_commande numero_commande VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE manga CHANGE image_cover image_cover VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE serie CHANGE nom_serie nom_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE cover_serie cover_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE edition edition VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE editeur editeur VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE liste_de_lecture_serie DROP FOREIGN KEY FK_4B07CEB3314EB86A');
        $this->addSql('ALTER TABLE liste_de_lecture_serie DROP FOREIGN KEY FK_4B07CEB3D94388BD');
        $this->addSql('DROP TABLE liste_de_lecture_serie');
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE auteur CHANGE nom nom VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE prenom prenom VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE commande CHANGE numero_commande numero_commande VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE manga CHANGE image_cover image_cover VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE serie CHANGE nom_serie nom_serie VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE cover_serie cover_serie VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE edition edition VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE editeur editeur VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
    }
}
