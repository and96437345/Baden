let btn = document.querySelector('.burger--js');
let btnMobile = document.querySelector('.burgerMobile--js')
let menu = document.querySelector('.burger__menu-container')
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
btnMobile.addEventListener('click', () => {
  menu.classList.toggle('active');
});

let btnTown = document.querySelector('.town-modal__btnYes');
let startModal = document.querySelector('.town-modal');
let btnSelect = document.querySelector('.town-modal__btnNo');
let modal = document.querySelector('.select__town');
let closeButton = document.querySelector('.town__menu-exit');
let callbackButton = document.querySelector('.select__head');
startModal.style.display = 'none'
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


let recall = document.querySelector('.recall');
let recallModal = document.querySelector('.recall__modal');
let closeRecall = document.querySelector('.recall-close');
recall.addEventListener('click', () => {
    if(!recallModal.classList.contains("js-active")){
        setTimeout(() => {
         recallModal.classList.add("js-active")
        }, 100);
     }
})

document.addEventListener('keydown', function(event){
    console.log(event.key)
    if(event.key === 'Escape') {
        closeModal(recallModal)
    }  
})
closeRecall.addEventListener('click', () => {
    closeModal(recallModal)
})
document.addEventListener('click' , function(event){

    if (!modal.contains(event.target) && recallModal.classList.contains("js-active")){
        closeModal(recallModal)
    }
})

let find = document.querySelector('.menu__items-find');
let tel = document.querySelector('.header-tel');
let workTime = document.querySelector('.header__worktime');
let menuItems = document.querySelector('.menu__items');
let placeholder = document.querySelector('.menu__items-findInput');
find.addEventListener('click', () => {
    tel.style.display = 'none';
    workTime.style.display = 'none';
    find.style.display = 'none';
    menuItems.classList.add('js--menu');
    placeholder.style.display = 'flex';
})


// Каталог товаров
const filtersBtn = document.querySelector('.filters__more');
const mask = document.querySelector('.mask-modal');
const filtersModal = document.querySelector('.filters-modal');
const filterExit = document.querySelector('.filter__exit');
filtersBtn.addEventListener('click', () => {
  mask.style.display = 'block';
  filtersModal.style.display = 'block';
});
filterExit.addEventListener('click', () => {
  mask.style.display = 'none';
  filtersModal.style.display = 'none';
});