import { giftConst } from "./const.js";

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomItems = (arr, num) => {
  let randomNums = [];
  while (randomNums.length < num) {
    let n = randomIntFromInterval(0, arr.length - 1);
    if(!randomNums.includes(n)) randomNums.push(n);
  }

  return arr.filter((el, index) => randomNums.includes(index));
};


export const createElemGift = (tag, gifts) => {
  gifts.forEach((el) => {

    let {src, alt, classGift } = giftConst[el.category];
    tag.insertAdjacentHTML("afterbegin", `
      <div class="gift-block-item">
        <img class="gift-block-img" loading="lazy" src="./image/${src}.png" alt="${alt}">
        <div class="gift-block-content">
          <h3 class="header-4 ${classGift}">${el.category}</h3>
          <h4 class="header-3">${el.name}</h4>
        </div>
      </div>
      `)
  })

}

export const createTimer = () => {
  const newYear = new Date(Date.UTC(2025, 0, 1));
  const dToNY = document.querySelector("#daysToNY");
  const hToNY = document.querySelector("#hoursToNY");
  const mToNY = document.querySelector("#minutesToNY");
  const sToNY = document.querySelector("#secondsToNY");
  const newDate = new Date();
  const newYear1 = new Date(2025, 0, 1);
  const allSec = Math.floor((newYear - newDate) / 1000);
  const day = Math.floor(allSec / (24 * 3600));
  const withoutDay = allSec - day * 24 * 3600;
  const hours = Math.floor(withoutDay / 3600);
  const withoutHours = withoutDay - hours * 3600;
  const min = Math.floor(withoutHours / 60);
  const sec = withoutHours - min * 60;
  dToNY.innerHTML = day;
  hToNY.innerHTML = hours;
  mToNY.innerHTML = min;
  sToNY.innerHTML = sec;
};