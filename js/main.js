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
    // when window width is >= 376px
    376: {
      slidesPerView: 2,
    },
  }
});
