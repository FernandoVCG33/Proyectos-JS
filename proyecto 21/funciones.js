window.addEventListener('DOMContentLoaded',  (e)=>{
    //seleccionar elementos DOM
   
    let inventarioDom= document.querySelector(".inventario");
    let cajas=document.querySelectorAll(".inventario__caja");
    let estanteriaDom=document.querySelectorAll(".almacen__estanteria");

    //poner un id unico a cada caja
    cajas.forEach( (caja,i) =>{
        caja.setAttribute("id", "caja" + i);
        caja.addEventListener("dragstart", ()=>{
            e.dataTransfer.setData("id", e.target.id);
        })
    })
    //Establecer cada hueco de la estanteria como un hueco 
    //Donde puedo soltar un elemento
    estanteriaDom.forEach((estanteria,i)=>{
        estanteria.addEventListener("dragover",e =>{
            e.preventDefault();
        });
        estanteria.addEventListener("drop",e =>{
            e.preventDefault();
            let cajaId = e.dataTransfer.getData("id");
            console.log(`caja id  ${cajaId}`);
        });

    })  
});