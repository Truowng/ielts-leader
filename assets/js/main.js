export const setActive = (el) => {
  const items = document.querySelectorAll(`${el}`);
  items.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(`${el}.active`).classList.remove("active");
      item.classList.add("active");
    });
  });
};

const swiperCta = new Swiper(".cta .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  speed: 750,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperBlog = new Swiper("#homepage-blog .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  speed: 750,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    1199: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const swiperTips = new Swiper("#tips-slide .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  speed: 750,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".tips-slide-button-next",
    prevEl: ".tips-slide-button-prev",
  },
});

// Open menu

const menuBtn = document.querySelector(".header-navbar-button");
const menuMobile = document.querySelector(".header-navbar-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});
