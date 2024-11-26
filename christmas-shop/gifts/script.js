"use strict"
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
