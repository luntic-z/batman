const swiper = new Swiper('.main-slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  keyboard: {
    enabled: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.main-slider__arrow',
  },
});
