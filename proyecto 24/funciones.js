window.addEventListener('DOMContentLoaded', () => {
    let input = document.getElementById('input_pas');
    let icon = document.querySelector('svg');

    icon.addEventListener('click', () => {
        if(input.type === 'password'  && input.value.trim() === '' ) {

        }
    });
});