// swiperGallery
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

// swiperCertificates
const swiperС = new Swiper('.swiperCertificates', {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 60,
  touchEventsTarget: "container",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


//url-cleaner
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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
    });

    history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search
    );
  });
});



//burger-menu
function toggleMenu() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.header__overlay');
  const body = document.body;
  
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('menu-open');
}

function closeMenu() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.header__overlay');
  const body = document.body;
  
  burger.classList.remove('active');
  nav.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('menu-open');
}


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
      closeMenu();
  }
});


window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
      closeMenu();
  }
});
