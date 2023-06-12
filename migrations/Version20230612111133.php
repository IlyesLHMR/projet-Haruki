<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230612111133 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, subject VARCHAR(100) DEFAULT NULL, message LONGTEXT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE auteur CHANGE nom nom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE prenom prenom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE commande CHANGE numero_commande numero_commande VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE manga CHANGE image_cover image_cover VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE serie CHANGE nom_serie nom_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE cover_serie cover_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE edition edition VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE editeur editeur VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE contact');
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE auteur CHANGE nom nom VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE prenom prenom VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE commande CHANGE numero_commande numero_commande VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE manga CHANGE image_cover image_cover VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE serie CHANGE nom_serie nom_serie VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE cover_serie cover_serie VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE edition edition VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE editeur editeur VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
    }
}
