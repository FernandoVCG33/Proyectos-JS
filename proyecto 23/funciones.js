window.addEventListener("DOMContentLoaded", () => {
    console.log('Dom Cargado al 120%');
    let inputS=document.getElementById('emails');
    let iconoChech=document.getElementById('check');
    let iconoError=document.getElementById('wrong');
    inputS.addEventListener('keyup', ()=>{
        let inputEmail=inputS.value;
        let parter= /@.*\./ ;
        if(inputEmail.trim() !=""){
            let testeo= parter.test(inputEmail);
            console.log(testeo);
            if (testeo){
                iconoChech.classList.remove('ocultar');
                iconoError.classList.add('ocultar');
            }
            else{
                iconoError.classList.remove('ocultar');
            }



        }


    });
});