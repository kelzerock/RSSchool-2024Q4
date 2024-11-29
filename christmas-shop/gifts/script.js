"use strict";

import {
  createElemGift,
  createModalElemGift,
  getRandomItems,
} from "../data/utils.js";

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

  document.querySelector(".loading").classList.add("stop");
  lockBody();
};

//gifts

// create random gifts
const dataGifts = await fetch("../data/gifts.json").then((res) => res.json());
createElemGift(
  document.querySelector(".gifts-market"),
  getRandomItems(dataGifts, 36),
  "."
);

//modal

const arrGifts = document.querySelectorAll(".gift-block-item");
arrGifts.forEach((el) => {
  el.onclick = () => {
    const nameGift = el.querySelector("h4").innerHTML;
    const giftForModal = dataGifts.find(
      (el) => el.name.toLocaleLowerCase() === nameGift.toLocaleLowerCase()
    );
    createModalElemGift(document.body, giftForModal);
  };
});

//controls
const arrAllGifts = document.querySelectorAll(".gift-block-item");

const arrButtonsControls = document.querySelectorAll(".button-red");
arrButtonsControls.forEach((elem) => {
  elem.onclick = () => {
    arrButtonsControls.forEach((el) => {
      el.classList.remove("current");
    });
    elem.classList.add("current");
    arrAllGifts.forEach((item) => {
      if (elem.innerHTML.toLowerCase() === "all") {
        item.classList.remove("filtered");
      } else if (
        elem.innerHTML.toLowerCase() !==
        item.querySelector("h3").innerHTML.toLowerCase()
      ) {
        item.classList.add("filtered");
      } else {
        item.classList.remove("filtered");
      }
    });
  };
});

//button scroll
const btnScroll = document.querySelector(".button-arrow-top");
window.onscroll = () => {
  if (window.scrollY > 300 && document.documentElement.clientWidth <= 768) {
    btnScroll.classList.remove("disabled");
  } else {
    btnScroll.classList.add("disabled");
  }
};

btnScroll.onclick = () => {
  window.scrollTo(0, 0);
};
