window.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    //tomar id de los HTML
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");


    let fechaActual = new Date();
    let year = fechaActual.getFullYear();
    let mes = fechaActual.getMonth();
    let dia = fechaActual.getDay();
    

    if (dia < 10)dia=`0${dia}`;
    if (mes<10)mes=`0${mes}`;
    let hora1 = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    console.log(mes);
    let contarHoras = setInterval(() => {
        fecha.textContent = `0${dia} /${mes}/ ${year}`;
        hora.textContent = `${hora1}:${minutos}:${segundos}`;
        segundos++;
        if (segundos==60){
            segundos=0;
        };
    }, 1000);
});