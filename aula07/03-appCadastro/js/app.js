function iniciar() {
    document.getElementById("btnAdicionar").addEventListener("click",
    function() {
        var lista = document.getElementById("listaElementos");
        var texto = document.getElementById("txtIncluir");
        var li = document.createElement("li");
        li.textContent = texto.value;
        lista.appendChild(li); 
        texto.value = ""; // Apagando o texto dentro do box
        texto.focus(); // Colocando o curso dentro do box
    });
}

window.addEventListener("load", iniciar)