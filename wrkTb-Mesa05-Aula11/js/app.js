//Função para a criação de cards
let elements = 0
let urlImg = ""
let title = ""
let description = ""


/* Criando a função criar Cards */
function createCard() {
    title = document.getElementById("title").value
    description = document.getElementById("description").value
    urlImg = document.getElementById("url_img").value


    let cardSection = document.getElementById("card");
    // colocando a class box__img dentro da div conforme criamos no HTML
    cardSection.innerHTML += `<div class="box__img">  <img src="${urlImg}">
                                    <h2>${title}</h2>
                                    <p>${description}<p> </div>`;
}

function pop() {
  document.getElementById('pop').style.display='block';
}

function fechar() {
    document.getElementById('pop').style.display='none';
}