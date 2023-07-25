
import * as toastr from 'toastr';
import '../../node_modules/toastr/build/toastr.min.css'; 

// Cette fonction est exécutée lorsque le document est prêt (DOM est chargé).
$(function(){
    // Gère le clic sur l'élément avec la classe "flip-it-trigger" (icône pour retourner la carte).
    $('.flip-it-trigger').on('click', function(e){
        // Empêche la propagation de l'événement pour éviter que le clic se propage aux éléments parents.
        e.stopPropagation();
        // Ajoute la classe "flip-it" à l'élément parent avec la classe "bookCard" pour retourner la carte.
        $(this).parents('.bookCard').addClass('flip-it');
    });

    // Gère le clic sur l'élément avec la classe "flip-back" (icône pour retourner la carte à l'état initial).
    $('.flip-back').on('click', function(e){
        // Ajoute ou supprime la classe "flip-it" à l'élément parent avec la classe "bookCard" pour retourner ou afficher la face avant de la carte.
        $(this).parents('.bookCard').toggleClass('flip-it');
    });

    // Gère le clic sur le corps du document.
    $('body').on('click', function(e){
        // Supprime la classe "flip-it" de tous les éléments avec la classe "bookCard", ce qui remet les cartes à l'état initial.
        $('.bookCard').removeClass('flip-it');
    });

    // Gère le clic sur l'élément avec la classe "add-to-list" (icône pour ajouter la série à une liste).
    $('.add-to-list').on('click', function(e){
        // Récupère les attributs "data-idSerie" et "data-idListe" de l'élément cliqué.
        let idSerie = $(this).attr('data-idSerie');
        let idListe = $(this).attr('data-idListe');
        // Trouve l'élément parent avec la classe "bookCard" et recherche l'élément avec la classe "card-spinner" pour afficher/masquer le spinner de chargement.
        $(this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');

        // Effectue une requête asynchrone de type GET vers l'URL spécifiée en utilisant les identifiants récupérés.
        $.ajax({
            method: "GET",
            url: `${jsData.urls.addToList}/${idSerie}/${idListe}`,
            data: {},
            dataType: "json",
        })
        .done((resp) => {
            // Si la requête a réussi :
            if (resp.success) {
                // Affiche un message de succès à l'aide de Toastr.
                toastr.success('Série correctement rajoutée à votre liste...');
                // Cache le spinner de chargement.
                $(this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');
                // Trouve l'élément parent avec la classe "bookCard" et recherche l'élément avec la classe "flip-it-trigger" et met à jour le texte de l'icône.
                $(this).parents('.bookCard').find('.flip-it-trigger').find('span').text('more_horiz');
                // Génère le HTML pour afficher les détails de la liste à laquelle la série a été ajoutée.
                let html = '';
                html = '<h5 class="text-center mb-4 text-decoration-underline ">Cette série a déjà été ajoutée à :</h5>';
                html += `<p>- `;
                html += `<a class="text-decoration-none text-white lnk-undrline fs-4"  `;
                html += `href="${jsData.urls.editList}/${idListe}">`;
                html += `${resp.nomListe}</a></p>`;
                // Met à jour le contenu de l'élément avec la classe "added" avec le HTML généré.
                $(this).parents('.bookCard').find('.added').html(html);
            }

            // Si la requête a échoué :
            if (!resp.success) {
                // Cache le spinner de chargement.
                $(this).next('.card-spinner').toggleClass('d-none');
                // Affiche un message d'avertissement à l'aide de Toastr.
                toastr.warning('Une erreur inattendue s\'est produite...');
            }
        })
        .fail(function (jqXHR, textStatus) {
            // Si la requête a échoué en raison d'un problème de réseau :
            // Cache le spinner de chargement.
            $(this).next('.card-spinner').toggleClass('d-none');
            // Affiche un message d'erreur à l'aide de Toastr.
            toastr.error('Une erreur de réseau s\'est produite...');
        });
    });
});
