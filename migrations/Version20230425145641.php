<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230425145641 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE auteur CHANGE nom nom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE prenom prenom VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE commande CHANGE numero_commande numero_commande VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE liste_de_lecture ADD user_id INT NOT NULL, ADD manga_id INT NOT NULL');
        $this->addSql('ALTER TABLE liste_de_lecture ADD CONSTRAINT FK_EF95D25DA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE liste_de_lecture ADD CONSTRAINT FK_EF95D25D7B6461 FOREIGN KEY (manga_id) REFERENCES manga (id)');
        $this->addSql('CREATE INDEX IDX_EF95D25DA76ED395 ON liste_de_lecture (user_id)');
        $this->addSql('CREATE INDEX IDX_EF95D25D7B6461 ON liste_de_lecture (manga_id)');
        $this->addSql('ALTER TABLE manga ADD serie_id INT NOT NULL, CHANGE image_cover image_cover VARCHAR(255) DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE manga ADD CONSTRAINT FK_765A9E03D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('CREATE INDEX IDX_765A9E03D94388BD ON manga (serie_id)');
        $this->addSql('ALTER TABLE serie ADD auteur_id INT DEFAULT NULL, CHANGE nom_serie nom_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE cover_serie cover_serie VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE edition edition VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`, CHANGE editeur editeur VARCHAR(255) NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE serie ADD CONSTRAINT FK_AA3A933460BB6FE6 FOREIGN KEY (auteur_id) REFERENCES auteur (id)');
        $this->addSql('CREATE INDEX IDX_AA3A933460BB6FE6 ON serie (auteur_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article CHANGE titre titre VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE contenu contenu VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE image image VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE auteur CHANGE nom nom VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE prenom prenom VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE commande CHANGE numero_commande numero_commande VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE liste_de_lecture DROP FOREIGN KEY FK_EF95D25DA76ED395');
        $this->addSql('ALTER TABLE liste_de_lecture DROP FOREIGN KEY FK_EF95D25D7B6461');
        $this->addSql('DROP INDEX IDX_EF95D25DA76ED395 ON liste_de_lecture');
        $this->addSql('DROP INDEX IDX_EF95D25D7B6461 ON liste_de_lecture');
        $this->addSql('ALTER TABLE liste_de_lecture DROP user_id, DROP manga_id');
        $this->addSql('ALTER TABLE manga DROP FOREIGN KEY FK_765A9E03D94388BD');
        $this->addSql('DROP INDEX IDX_765A9E03D94388BD ON manga');
        $this->addSql('ALTER TABLE manga DROP serie_id, CHANGE image_cover image_cover VARCHAR(255) CHARACTER SET utf8 DEFAULT NULL COLLATE `utf8_general_ci`');
        $this->addSql('ALTER TABLE serie DROP FOREIGN KEY FK_AA3A933460BB6FE6');
        $this->addSql('DROP INDEX IDX_AA3A933460BB6FE6 ON serie');
        $this->addSql('ALTER TABLE serie DROP auteur_id, CHANGE nom_serie nom_serie VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE cover_serie cover_serie VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE edition edition VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`, CHANGE editeur editeur VARCHAR(255) CHARACTER SET utf8 NOT NULL COLLATE `utf8_general_ci`');
    }
}
