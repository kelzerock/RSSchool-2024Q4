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

// "name": "Bug Magnet",
//     "description": "Able to find bugs in code like they were placed there on purpose.",
//     "category": "For Work",
//     "superpowers": 
//       "live": "+500",
//       "create": "+500",
//       "love": "+200",
//       "dream": "+400"