window.addEventListener('DOMContentLoaded', (e) => {
    //seleccionar elementos DOM

    let inventarioDom = document.querySelector(".inventario");
    let cajas = document.querySelectorAll(".inventario__caja");
    let estanteriaDom = document.querySelectorAll(".almacen__estanteria");

    //poner un id unico a cada caja
    cajas.forEach((caja, i) => {
        caja.setAttribute("id", "caja" + i);
        caja.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", e.target.id);
        })
    })
    //Establecer cada hueco de la estanteria como un hueco 
    //Donde puedo soltar un elemento
    estanteriaDom.forEach((estanteria, i) => {
        estanteria.addEventListener("dragover",function(e)  {
            e.preventDefault();
        });
        estanteria.addEventListener("drop", function(e)  {
            e.preventDefault();
            let cajaId = e.dataTransfer.getData("id");
            console.log(`caja id  ${cajaId}`);
            if (cajaId && cajaId != "") {
                let caja = document.querySelector("#" + cajaId);
                console.log(caja);
                if (this.lastChild == null) {
                    e.target.appendChild(caja);
                    this.style.boxShadow = "none";
                }else{
                    alert(`esta estanteria esta pcupada!!`);
                }
                estanteria.forEach(estanteria =>{
                    if(estanteria.lastChild ==null){
                        estanteria.style.boxShadow = "0px 0px 8px black inset";
                    }
                })
                if (inventarioDom.innerHTML.trim()==""){
                    alert(`todas las cajas fueon guardadas`);
                }
              
            }
        });

    })
});