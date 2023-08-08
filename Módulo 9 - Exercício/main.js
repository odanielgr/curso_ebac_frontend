$(document).ready(function () {
    
    $("form").on("submit", function(e) {
        e.preventDefault()
        
        const nomeTarefa = $("#nome-tarefa").val()
        const novaTarefa = `<li>${nomeTarefa}</li>`

        $(novaTarefa).appendTo("ul") // Com o .appendTo, o primeiro valor é colocado dentro do segundo valor

        $("li").click(function () {
            $(this).addClass("sucesso")
        })

        $("#nome-tarefa").val("") // Para atualizar o form ao clicar no botão cadastrar
    })
})