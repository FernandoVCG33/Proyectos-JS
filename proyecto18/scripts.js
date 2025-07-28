window.addEventListener("DOMContentLoaded", (evento) => {
    //capturar botones
    let botonIniciar = document.getElementById("boton-iniciar");
    let botonParar = document.getElementById("boton-parar");
    //capturar minutos y segundos
    let segundosP = document.getElementById("segundos");
    let minutosP = document.getElementById("minutos");
    //funciones
    let segundos = 0;
    let minutos = 0;
    let time = true;
    function iniciar () {
        if (time) {
            time = setInterval(() => {
                segundos++;
                if (segundos <= 9) {
                    segundosP.textContent = `0${segundos} `;
                }
                else {
                    segundosP.textContent = `${segundos} `;
                }
                if (segundos == 60) {
                    segundos = 0;
                    minutos++;
                    segundosP.textContent = `${segundos}0 `;
                    minutosP.textContent = `0${minutos}`;
                }
                if (minutos >= 60) {
                    alert("Tiempo exedido");
                    clearInterval(time);
                }

            }, 1000);
        }
    };
    //Eventos de los botones
    botonIniciar.addEventListener("click", () => {
        iniciar();
    });
    botonParar.addEventListener("click", () => {
        if (time){
            clearInterval(time);
            time = true;
        }
    });

});
