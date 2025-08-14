//const { createElement } = require("react");

window.addEventListener('DOMContentLoaded', (event) => {
    console.log(`DOM cargado`);

});
//Elementos del DOM
let articulosLista = document.querySelector(".carrusel");
//elementos formulario  
let titulo = document.getElementById("tituloCard");
let subtitulo = document.getElementById("subtituloCard");
let descripcion = document.getElementById("despcripcionCard");
let formulario = document.getElementById("form_create");

let listaObjetos = [];
function crearCards(lista) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if (titulo.value != " " && subtitulo.value != " " && descripcion.value != " ") {
            console.log(`existen los valores  ${titulo.value} ${subtitulo.value} ${descripcion.value}  `);
            let cardsObjeto = {
                titulo: titulo.value,
                subtitulo: subtitulo.value,
                descripcion: descripcion.value,
            }
            lista.push(cardsObjeto);
            localStorage.setItem("cards", JSON.stringify(lista));
            //console.log(lista);
            titulo.value = " ";
            subtitulo.value = " ";
            descripcion.value = " ";
        }
        else {
            alert(`elementos basios`);
        }
    });
}
function plantillaMostarElementos(cards) {
    let layaot = `
                <article class="card">
                <header class="card_header">
                    <h3 class="card_autor">
                        ${cards.subtitulo}
                    </h3>
                </header>
                <div class="card_contenido">
                    <h2 class="contenido_titulo"> ${cards.titulo} </h2>
                    <p class="card_descripcion">
                        ${cards.descripcion}
                    </p>
                    <button class="card_btn" id="botons">Cambiar estilos</button>
                </div>
            </article>
    `;
    return layaot;
}

function mostrarCards() {
    articulosLista.innerHTML = " ";
    listaObjetos = JSON.parse(localStorage.getItem("cards"));
    if (listaObjetos.length > 0) {
        listaObjetos.forEach(card => {
            articulosLista.innerHTML += plantillaMostarElementos(card);
        });
    }
}

crearCards(listaObjetos);
mostrarCards()
let carrusel= document.getElementById("carrusel");
let docimen= document.createElement("a");
docimen.textContent= "hola";
carrusel.appendChild(docimen);
