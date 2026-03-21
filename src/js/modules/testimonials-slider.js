const initTestimonialsSlider = () => {
  const slider = document.querySelector(".testimonials__swiper");
  const prevButton = document.querySelector(".testimonials__arrow--left");
  const nextButton = document.querySelector(".testimonials__arrow--right");
  const SwiperClass = window.Swiper;

  if (!slider || !prevButton || !nextButton || !SwiperClass) {
    return;
  }

  if (slider.swiper) {
    slider.swiper.destroy(true, true);
  }

  new SwiperClass(slider, {
    speed: 700,
    grabCursor: true,
    watchOverflow: false,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: prevButton,
      nextEl: nextButton,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
};

export default initTestimonialsSlider;