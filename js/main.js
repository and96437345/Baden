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




// Слайдер HERO -----------------------------------------------//
// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.hero__left-arrow');
const nextButton = document.querySelector('.hero__right-arrow');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();


// Слайдер WEEK -----------------------------------------------//
// Получаем элементы слайдера
const sliderWeek = document.querySelector('.sliderWeek');
const prevButtonWeek = document.querySelector('.week--left');
const nextButtonWeek = document.querySelector('.week--right');
const slidesCashback = Array.from(sliderWeek.querySelectorAll('.week--cash'));
const slidesWeek = Array.from(sliderWeek.querySelectorAll('.week--card'));
const slideWeekCount = slidesWeek.length;
let slideWeekIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonWeek.addEventListener('click', showPreviousSlideWeek);
nextButtonWeek.addEventListener('click', showNextSlideWeek);


// Функция для показа предыдущего слайда
function showPreviousSlideWeek() {
  slideWeekIndex = (slideWeekIndex - 1 + slideWeekCount) % slideWeekCount;
  updateSliderWeek();
}

// Функция для показа следующего слайда
function showNextSlideWeek() {
  slideWeekIndex = (slideWeekIndex + 1) % slideWeekCount;
  updateSliderWeek();
}

// Функция для обновления отображения слайдера
function updateSliderWeek() {
  slidesWeek.forEach((slide, index) => {
    if (index === slideWeekIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
  slidesCashback.forEach((slide, index) => {
    if (index === slideWeekIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSliderWeek();



// Слайдер POPULAR -----------------------------------------------//
// Получаем элементы слайдера
const sliderPopular = document.querySelector('.sliderPopular');
const prevButtonPopular = document.querySelector('.popular--left');
const nextButtonPopular = document.querySelector('.popular--right');
const slidesCash = Array.from(sliderPopular.querySelectorAll('.popular--cash'));
const slidesPopular = Array.from(sliderPopular.querySelectorAll('.popular--card'));
const slidePopularCount = slidesPopular.length;
let slidePopularIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButtonPopular.addEventListener('click', showPreviousSlidePopular);
nextButtonPopular.addEventListener('click', showNextSlidePopular);


// Функция для показа предыдущего слайда
function showPreviousSlidePopular() {
  slidePopularIndex = (slidePopularIndex - 1 + slidePopularCount) % slidePopularCount;
  updateSliderPopular();
}

// Функция для показа следующего слайда
function showNextSlidePopular() {
  slidePopularIndex = (slidePopularIndex + 1) % slidePopularCount;
  updateSliderPopular();
}

// Функция для обновления отображения слайдера
function updateSliderPopular() {
  slidesPopular.forEach((slide, index) => {
    if (index === slidePopularIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
  slidesCash.forEach((slide, index) => {
    if (index === slidePopularIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSliderPopular();