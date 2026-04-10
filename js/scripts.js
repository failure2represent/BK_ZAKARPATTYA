const swiper = new Swiper('.swiperGallery', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    speed: 1011,
  },
  speed: 1011,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: false,
  },

});

const swiperС = new Swiper('.swiperCertificates', {
  slidesPerView: 3,
  spaceBetween: 60,
  touchEventsTarget: "container",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});