import * as toastr from 'toastr';
import '../../node_modules/toastr/build/toastr.min.css'; 

$(function(){
    $('.remove-from-list-trigger').on('click', function(e){
        let idSerie = $(this).attr('data-serieId');
        let idListe = $(this).attr('data-listeId');
        // console.log(`${jsData.urls.removeFromList}/${id}`);
        $(this).next('.card-spinner').toggleClass('d-none');
        
        $.ajax({
            method: "GET",
            url: `${jsData.urls.removeFromList}/${idSerie}/${idListe}`,
            data: {},
            dataType: "json",
        })
        .done((resp) => {
            // succès de la requête asynchrone:
            //  console.log( "ajax success" );
            // console.log(resp);

            if (resp.success) {
                $(this).next('.card-spinner').toggleClass('d-none');
                $(this).parents('.bookCard').html('');
                toastr.success('Série correctement supprimée de votre liste...');
            }

            if (!resp.success) {
                $(this).next('.card-spinner').toggleClass('d-none');
                toastr.warning('Une erreur inattendue s\'est produite...');
            }
        })
        .fail(function (jqXHR, textStatus) {
            // échec de la requête asynchrone:
            // console.log( "Request failed: " + textStatus );
            // console.log(jqXHR);
            $(this).next('.card-spinner').toggleClass('d-none');
            toastr.error('Une erreur de réseau s\'est produite...');
        });

        
    })
})
