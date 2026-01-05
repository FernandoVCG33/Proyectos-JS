window.addEventListener("DOMContentLoaded", () => {
    console.log('Dom Cargado al 120%');
    let inputS=document.getElementById('emails');
    inputS.addEventListener('keypress', ()=>{
        let inputEmail=inputS;
       console.log(inputEmail.value);
    });
});