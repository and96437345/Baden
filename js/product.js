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


// Слайдер PRODUCT-CARD -----------------------------------------------//
// Получаем элементы слайдера
const sliderCard = document.querySelector('.sliderCard');
const prevButtonCard = document.querySelector('.card__left-arrow');
const nextButtonCard = document.querySelector('.card__right-arrow');
const slidesCard = Array.from(sliderCard.querySelectorAll('img'));
const slideCardCount = slidesCard.length;
let slideCardIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonCard.addEventListener('click', showPreviousSlideCard);
nextButtonCard.addEventListener('click', showNextSlideCard);


// Функция для показа предыдущего слайда
function showPreviousSlideCard() {
  slideCardIndex = (slideCardIndex - 1 + slideCardCount) % slideCardCount;
  updateSliderCard();
}

// Функция для показа следующего слайда
function showNextSlideCard() {
  slideCardIndex = (slideCardIndex + 1) % slideCardCount;
  updateSliderCard();
}

// Функция для обновления отображения слайдера
function updateSliderCard() {
  slidesCard.forEach((slide, index) => {
    if (index === slideCardIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSliderCard();

// Слайдер RELATED -----------------------------------------------//
// Получаем элементы слайдера
const sliderRelated = document.querySelector('.sliderRelated');
const prevButtonRelated = document.querySelector('.related--left');
const nextButtonRelated = document.querySelector('.related--right');
const slidesRelated = Array.from(sliderRelated.querySelectorAll('.related--card'));
const slideRelatedCount = slidesRelated.length;
let slideRelatedIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonRelated.addEventListener('click', showPreviousSlideRelated);
nextButtonRelated.addEventListener('click', showNextSlideRelated);


// Функция для показа предыдущего слайда
function showPreviousSlideRelated() {
  slideRelatedIndex = (slideRelatedIndex - 1 + slideRelatedCount) % slideRelatedCount;
  updateSliderRelated();
}

// Функция для показа следующего слайда
function showNextSlideRelated() {
  slideRelatedIndex = (slideRelatedIndex + 1) % slideRelatedCount;
  updateSliderRelated();
}

// Функция для обновления отображения слайдера
function updateSliderRelated() {
  slidesRelated.forEach((slide, index) => {
    if (index === slideRelatedIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSliderRelated();