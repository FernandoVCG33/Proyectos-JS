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
        });
    })
});