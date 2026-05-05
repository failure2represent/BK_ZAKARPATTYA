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
  slidesPerView: 4,
  spaceBetween: 60,
  touchEventsTarget: "container",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const logo = document.querySelector('.header__logo');

logo?.addEventListener('click', function (e) {
  const isHomePage =
    window.location.pathname.endsWith('/index.html') ||
    window.location.pathname.endsWith('/');

  if (isHomePage) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search
    );
  }
});