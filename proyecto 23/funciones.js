window.addEventListener("DOMContentLoaded", () => {
    console.log('Dom Cargado al 120%');
    let inputS=document.getElementById('emails');
    inputS.addEventListener('keydown', ()=>{
        let inputEmail=inputS.value;
        console.log(inputEmail);


    });
});