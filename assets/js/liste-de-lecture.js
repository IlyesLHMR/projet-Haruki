// Importe la bibliothèque Toastr pour afficher des messages d'alerte.
import * as toastr from 'toastr';

// Importe le fichier CSS de Toastr depuis le dossier node_modules.
import '../../node_modules/toastr/build/toastr.min.css'; 

// Cette fonction est exécutée lorsque le document est prêt (DOM est chargé).
$(function(){
    // Attache un gestionnaire d'événement "click" à tous les éléments ayant la classe "remove-from-list-trigger".
    $('.remove-from-list-trigger').on('click', function(e){
        // Récupère les attributs "data-serieId" et "data-listeId" de l'élément cliqué.
        let idSerie = $(this).attr('data-serieId');
        let idListe = $(this).attr('data-listeId');

        // Cache ou affiche le spinner de chargement en fonction de son état actuel.
        $(this).next('.card-spinner').toggleClass('d-none');
        
        // Effectue une requête asynchrone de type GET vers l'URL spécifiée en utilisant les identifiants récupérés.
        $.ajax({
            method: "GET",
            url: `${jsData.urls.removeFromList}/${idSerie}/${idListe}`,
            data: {},
            dataType: "json",
        })
        .done((resp) => {
            // Succès de la requête asynchrone :
            if (resp.success) {
                // Cache le spinner de chargement.
                $(this).next('.card-spinner').toggleClass('d-none');
                // Supprime l'élément parent avec la classe "bookCard" de l'élément cliqué.
                $(this).parents('.bookCard').html('');
                // Affiche un message de succès à l'aide de Toastr.
                toastr.success('Série correctement supprimée de votre liste...');
            }

            // Si la requête n'a pas réussi :
            if (!resp.success) {
                // Cache le spinner de chargement.
                $(this).next('.card-spinner').toggleClass('d-none');
                // Affiche un message d'avertissement à l'aide de Toastr.
                toastr.warning('Une erreur inattendue s\'est produite...');
            }
        })
        .fail(function (jqXHR, textStatus) {
            // Échec de la requête asynchrone :
            // Cache le spinner de chargement.
            $(this).next('.card-spinner').toggleClass('d-none');
            // Affiche un message d'erreur à l'aide de Toastr.
            toastr.error('Une erreur de réseau s\'est produite...');
        });
    });
});
