var paragrafo  = document.createElement("p")
var texto = document.createTextNode("Aula 07 - Create Element - appendChild")

function iniciar() {
    paragrafo.appendChild(texto);
    document.body.appendChild(paragrafo)
}

window.addEventListener("load", iniciar)