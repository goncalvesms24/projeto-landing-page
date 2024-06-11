var setaEsquerda = window.document.getElementById("setaEsquerda")
var Bruna = window.document.getElementById("bruna")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var setaDireita = window.document.getElementById("setaDireita")

function RolarParaDireita() {
    bruna.style = "display:flex"
    Leonardo.style = "display:none"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}