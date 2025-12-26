window.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('.input_search');
    let texto = document.querySelector('.main_text');
    input.addEventListener('keydown', (e) => {
        let search=input.value;
        if (search.trim() != ''  && e.code=='Enter' ) {
            let regEx= new RegExp(search, 'gi');
            texto.innerHTML= texto.textContent.replace(regEx, "<span class='text_seacrh'>$&</span>");
        }
        //fin
    });

})