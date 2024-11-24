"use strict";

//router
let arr = document.querySelectorAll(".button-black");

arr.forEach((el) => {
  el.addEventListener("click", () => {
    let path = window.location.href;
    if (path.includes("localhost")) {
      let position = path.lastIndexOf("/");
      path = path.slice(0, position);
      window.location.href = path + "/gifts/";
    } else {
      let pathProduction =
        "https://rolling-scopes-school.github.io/kelzerock-JSFE2024Q4/christmas-shop/gifts/";
      window.location.href = pathProduction;
    }
  });
});

//burger
const bodyHTML = document.body;
const burgerLines = document.querySelectorAll(".header-burger-button-line");
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu ");
const burgerMenuItems = document.querySelectorAll(".burger-menu-item");

const lockBody = () => bodyHTML.classList.toggle("lock");

const toggleActiveStatus = () => {
  burgerLines.forEach((el) => el.classList.toggle("active"));
  burgerMenu.classList.toggle("active");
  lockBody();
};

burger.onclick = () => {
  toggleActiveStatus();
};

burgerMenu.onclick = (event) => {
  const liTag = event.target.closest("li");
  if (Array.from(burgerMenuItems).includes(liTag)) {
    toggleActiveStatus();
  }
};

window.addEventListener("resize", (event) => {
  const widthWindow = window.innerWidth;
  if (widthWindow > 768) {
    if (burgerMenu.classList.contains("active")) {
      toggleActiveStatus();
    }
  }
});

//loading
window.onload = () => {
  document.querySelector(".container").classList.remove("load");

  setTimeout(() => {
    document.querySelector(".loading").classList.add("stop");
    lockBody();
  }, 1000);
};

//slider
let arrowButtons = document.querySelectorAll(".button-arrow");

let counter = 0;
let step = 0;
if (window.innerWidth >= 768) {
  step = 3;
} else {
  step = 6;
}

window.onresize = () => {
  if (window.innerWidth >= 768) {
    step = 3;
  } else {
    step = 6;
  }
};

arrowButtons.forEach((el) => {
  const sliderMainBlock = document.querySelector(".slider");
  const sliderStyles = getComputedStyle(sliderMainBlock);

  el.onclick = () => {
    let rightPropertyCSSWidth = parseFloat(sliderStyles.right);
    let totalWidth = sliderMainBlock.scrollWidth;
    let visibleWidth = sliderMainBlock.offsetWidth;
    let stepSize = (totalWidth - visibleWidth) / step;

    if (el.classList.contains("left")) {
      arrowButtons[1].classList.remove("inactive");

      if (counter - 1 <= 0 || rightPropertyCSSWidth - stepSize <= 0) {
        arrowButtons[0].classList.add("inactive");
        sliderMainBlock.style.right = "0px";
        counter = 0;
      } else {
        sliderMainBlock.style.right = rightPropertyCSSWidth - stepSize + "px";
        counter -= 1;
      }
    } else {
      arrowButtons[0].classList.remove("inactive");

      if (
        counter + 1 >= step ||
        rightPropertyCSSWidth + stepSize >= totalWidth
      ) {
        arrowButtons[1].classList.add("inactive");
        sliderMainBlock.style.right = totalWidth - visibleWidth + "px";
        counter = step;
      } else {
        sliderMainBlock.style.right = rightPropertyCSSWidth + stepSize + "px";
        counter += 1;
      }
    }
  };
});
