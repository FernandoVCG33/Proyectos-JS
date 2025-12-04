window.addEventListener("DOMContentLoaded",()=>{
    
    //tomar id de los HTML
    let fecha= document.getElementById("fecha").value;
    let hora= document.getElementById("hora");

    
    let fechaActual=new Date();
    let year=fechaActual.getFullYear();
    let mes = fechaActual.getMonth();
    let dia=fechaActual.getDay();

    let hora1=fechaActual.getDate();
    let minutos=fechaActual.getMinutes();
    let segundos= fechaActual.getSeconds() ;

    console.log(mes);

});