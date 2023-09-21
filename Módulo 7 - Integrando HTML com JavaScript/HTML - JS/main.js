    const form = document.getElementById("form-deposito")
const nomeBeneficiario = document.getElementById("nome-beneficiario");
var formValido = false;

function validaNome(nomeCompleto) {
const nomeComonArray = nomeCompleto.split(" ")
return nomeComonArray.length >= 2
}

form.addEventListener("submit", function(e) {
    e.preventDefault()

    const numeroConta = document.getElementById("numero-conta");
    const valorConta = document.getElementById("valor-conta");
    const mensagemSucesso = `Montante de: <b>${valorConta.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - Conta: <b>${numeroConta.value}</b>`

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containermensagemSucesso = document.querySelector(".sucess-message")
        containermensagemSucesso.innerHTML = mensagemSucesso
        containermensagemSucesso.style.display = "block" 

        nomeBeneficiario.value = "";
        numeroConta.value = "";
        valorConta.value = "";

    } else {
        nomeBeneficiario.style.border = "1px solid red"
        document.querySelector(".error-message").style.display = "block"
    }
}) 

    nomeBeneficiario.addEventListener("keyup", function(e) {
    console.log(e)
    formValido = validaNome(e.target.value)

    if (!formValido) {
        nomeBeneficiario.classList.add("error")
        document.querySelector(".error-message").style.display = "block"
    } else {
        nomeBeneficiario.classList.remove("error")
        document.querySelector(".error-message").style.display = "none"
    }
})

