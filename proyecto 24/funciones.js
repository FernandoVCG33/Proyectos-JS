window.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input_pas');
    let icon = document.querySelector('.icono_ojo');

    icon.addEventListener('click', () => {
        if(input.type === 'password' && input.value.trim() !== '' ) {
            input.type = 'text';
            console.log('El campo de contraseña se ha mostrado');
        }
        else{
            input.type = 'password';
        }
    });
});