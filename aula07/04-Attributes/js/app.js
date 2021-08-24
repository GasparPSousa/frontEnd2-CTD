// Selecionando um elemento HTML
let elemento = document.querySelector("#imagem");

// Consultando se existe um atributo source
alert(elemento.hasAttribute("src")); //true

// // Pedimos o valor do atributo
alert(elemento.getAttribute("src")); // bone

// Excluímos o valor do atributo
alert(elemento.removeAttribute("src"));

// Adicionamos o atributo com o seu valor
alert(elemento.setAttribute("src", "imgs/bone"))