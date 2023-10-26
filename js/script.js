let btn = document.querySelector('.burger__menu-desc');
let menu = document.querySelector('.burger__menu-container')
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

let btnTown = document.querySelector('.town-modal__btnYes');
let startModal = document.querySelector('.town-modal');
let btnSelect = document.querySelector('.town-modal__btnNo');
let modal = document.querySelector('.select__town');
let closeButton = document.querySelector('.town__menu-exit');
let callbackButton = document.querySelector('.select__head');
btnTown.addEventListener('click', () => {
    startModal.style.display = 'none'
});

btnSelect.addEventListener('click', () => {
    startModal.style.display = 'none';
    if(!modal.classList.contains("js-active")){
        setTimeout(() => {
         modal.classList.add("js-active")
        }, 100);
     }
})
callbackButton.addEventListener('click', function(){

    if(!modal.classList.contains("js-active")){
       setTimeout(() => {
        modal.classList.add("js-active")
       }, 100);
    }
})

function closeModal(modal){
    modal.classList.remove("js-active")
}

document.addEventListener('click' , function(event){

    if (!modal.contains(event.target) && modal.classList.contains("js-active")){
        closeModal(modal)
    }
})

closeButton.addEventListener('click', () => {
    closeModal(modal)
})

document.addEventListener('keydown', function(event){
    console.log(event.key)
    if(event.key === 'Escape') {
        closeModal(modal)
    }
    
})
