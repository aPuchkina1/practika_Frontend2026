import "./import/modules";
import "./import/components";

import initTestimonialsSlider from "./modules/testimonials-slider";

window.addEventListener("load", () => {
    initTestimonialsSlider();

    const burger = document.querySelector(".header__burger");
    const headerRight = document.querySelector(".header__right");

    if (burger && headerRight) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("is-active");
            headerRight.classList.toggle("is-open");

            const isExpanded = burger.classList.contains("is-active");
            burger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
        });
    }
});