window.addEventListener('DOMContentLoaded',  (e)=>{
    //seleccionar elementos DOM
    alert('don lis');
    let inventarioDom= document.querySelector(".inventario") ;
    let cajas=document.querySelectorAll(".inventario__caja") ;
    let estanteriaDom=querySelectorAll(".almacen__estanteria");

    //poner un id unico a cada caja
    cajas.forEach( (caja,i) =>{
        caja.setAttributte("id","caja"+i);

    })
});