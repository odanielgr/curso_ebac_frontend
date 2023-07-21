const form = document.getElementById("form")
console.log(form)

const campoA = document.getElementById("campoA")
const campoB = document.getElementById("campoB")

function validaForm(campoA, campoB) {
    const validacao = campoA < campoB
    return validacao
}

form.addEventListener("submit", function(e) {
    e.preventDefault()

    var formEvalido = false

    formEvalido = validaForm(campoA.value, campoB.value)
    if (!formEvalido) {
        document.querySelector(".error").style.display = "block" 
    } else {
        document.querySelector(".result").style.display = "block"
    }
})