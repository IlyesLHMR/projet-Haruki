import * as toastr from 'toastr';
import '../../node_modules/toastr/build/toastr.min.css'; 

$(function(){
    $('.flip-it-trigger').on('click', function(e){
        e.stopPropagation();
        $(this).parents('.bookCard').addClass('flip-it');
    })

    $('.flip-back').on('click', function(e){
        
        $(this).parents('.bookCard').toggleClass('flip-it');
    })

    $('body').on('click', function(e){
        $('.bookCard').removeClass('flip-it');
    })

    $('.add-to-list').on('click', function(e){
        let idSerie = $(this).attr('data-idSerie');
        let idListe = $(this).attr('data-idListe');
        $(this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');

        $.ajax({
            method: "GET",
            url: `${jsData.urls.addToList}/${idSerie}/${idListe}`,
            data: {},
            dataType: "json",
        })
        .done((resp) => {
            // succès de la requête asynchrone:
            //  console.log( "ajax success" );
            // console.log(resp);

            if (resp.success) {
                toastr.success('Série correctement rajoutée à votre liste...');
                $(this).parents('.bookCard').find('.card-spinner').toggleClass('d-none');
                $(this).parents('.bookCard').find('.flip-it-trigger').find('span').text('more_horiz');
                let html = '';
                html = '<h5 class="text-center mb-4 text-decoration-underline ">Cette série a déjà été ajoutée à :</h5>';
                html += `<p>- `;
                html += `<a class="text-decoration-none text-white lnk-undrline fs-4"  `;
                html += `href="${jsData.urls.editList}/${idListe}">`;
                html += `${resp.nomListe}</a></p>`;
                $(this).parents('.bookCard').find('.added').html(html);
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