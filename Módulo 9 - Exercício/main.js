$(document).ready(function () {
    
    $("form").on("submit", function(e) {
        e.preventDefault()

        const nomeTarefa = $("#nome-tarefa").val()
        const novaTarefa = `<li>${nomeTarefa}</li>`

        $(nomeTarefa).appendTo(novaTarefa) // Com o .appendTo, o primeiro valor é colocado dentro do segundo valor

        $(novaTarefa).appendTo("ul")

        $("li").click(function () {
            $(this).toggleClass("sucesso")
        })

        $("#nome-tarefa").val("") // Para atualizar o form ao clicar no botão cadastrar
    })
})