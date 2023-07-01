$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $("#botao-cancelar").click(function(){
        $("form").slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçodanovaimagem = $('#endereço-imagem-nova').val()
        const novoitem = $('<li style="display: none"></li>');
        $(`<img src="${endereçodanovaimagem}" />`).appendTo(novoitem)
        $(`<div class"overlay-imagem-link"> 
        <a href= "${endereçodanovaimagem}" target="_blank" title="ver imagem em tamanho real" 
        ver imagem em tamanho real  
        </a>
        </div>`).appendTo(novoitem)
        $(novoitem).appendTo("ul")
        $(novoitem).fadeIn(1000);
        $("#endereço-imagem-nova").val(" ")
    })
})
