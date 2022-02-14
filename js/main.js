const swiper = new Swiper('.main-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.main-slider__arrow',
  },
  breakpoints: {
    // when window width is >= 501px
    769: {
      slidesPerView: 2,
    },
  }
});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
})

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
})

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

buttonModal.addEventListener('click', (e) => {
  modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.classList.remove('active');
  }
})
