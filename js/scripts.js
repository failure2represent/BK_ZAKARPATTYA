const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 3, spaceBetween: 20 }
  }
});

