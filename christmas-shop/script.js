"use strict";

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
const burgerMenuItems = document.querySelectorAll(".burger-menu-item")

const toggleActiveStatus = () => {
  burgerLines.forEach(el => el.classList.toggle("active"));
  burgerMenu.classList.toggle("active");
  bodyHTML.classList.toggle("lock");
}

burger.onclick = () => {
  toggleActiveStatus();
}

burgerMenu.onclick = (event) => {
  const liTag = event.target.closest('li');
  if(Array.from(burgerMenuItems).includes(liTag)){
    toggleActiveStatus();
  }
}

// burgerMenuItems.forEach((el) => {
//   el.onclick = () => {
//     toggleActiveStatus();
//   }
// })

// burgerMenu.addEventListener("click", () => {
//   console.log(event.currentTarget)
//   console.log(event.target)
//   toggleActiveStatus();
// })


window.addEventListener("resize", (event) => {
  const widthWindow = window.innerWidth;
  if (widthWindow > 768) {
    if (burgerMenu.classList.contains("active")) {
      toggleActiveStatus()
    }
  }
})