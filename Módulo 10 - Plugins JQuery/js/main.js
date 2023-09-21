$(document).ready(function () {
    $("#carousel-images").slick({autoplay: true})

    $(".menu-hamburguer").click(function () {
        $("nav").slideToggle()
    })

    $("#telefone").mask("(00) 0 0000-0000", { // Aplicando máscara ao campo telefone
        placeholder: "(__) _ ____-____"
    })

    $("form").validate({
        rules: { // Regras da validação do campo "form"(formulário)
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoDeInteresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Campo obrigatório",
            telefone: "Campo obrigatório",
            email: "Campo obrigatório",
            veiculoDeInteresse: "Campo obrigatório",
            mensagem: "Campo obrigatório"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            var camposInconrretos = validador.numberOfInvalids()
            if (camposInconrretos) {
                alert(`Existem ${camposInconrretos} campos incorretos`)
            }
        }
    })
    
    $(".lista-veículos button").click(function() {
        const destino = $("#contato")
        const nomeVeiculo = $(this).parent().find("h3").text()

        $("#veiculo-interesse").val(nomeVeiculo)

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    })