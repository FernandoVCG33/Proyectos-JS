window.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input_pas');
    let icon = document.querySelector('.icono_ojo');

    icon.addEventListener('click', () => {
        if(input.type === 'password' && input.value.trim() !== '' ) {
            input.type = 'text';
        }
        else{
            input.type = 'password';
        }
    });
});