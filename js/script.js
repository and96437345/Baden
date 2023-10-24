let btn = document.querySelector('.burger__menu-desc');
let menu = document.querySelector('.burger__menu-container')
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});