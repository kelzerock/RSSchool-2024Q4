import { giftConst } from "./const.js";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomItems = (arr, num) => {
  let randomNums = [];
  while (randomNums.length < num) {
    let n = randomIntFromInterval(0, arr.length - 1);
    if (!randomNums.includes(n)) randomNums.push(n);
  }

  return arr.filter((el, index) => randomNums.includes(index));
};

export const createElemGift = (tag, gifts) => {
  gifts.forEach((el) => {
    let { src, alt, classGift } = giftConst[el.category];
    tag.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="gift-block-item">
        <img class="gift-block-img" loading="lazy" src="./image/${src}.png" alt="${alt}">
        <div class="gift-block-content">
          <h3 class="header-4 ${classGift}">${el.category}</h3>
          <h4 class="header-3">${el.name}</h4>
        </div>
      </div>
      `
    );
  });
};

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

export const createModalElemGift = (tag, gift) => {
  let { src, alt, classGift } = giftConst[gift.category];
  let {name, description, category, superpowers : {live, create, love, dream}} = gift;
  tag.insertAdjacentHTML(
    "afterbegin",
    `
      
    <div class="modal">
    <div class="modal-close"></div>
    <div class="modal-item">
      <div class="modal-block-img  ${classGift}"></div>
      <div class="modal-content">
        <div class="modal-block-content">
          <h4 class="header-4 ${classGift}">${category}</h4>
          <h3 class="header-3">${name}</h3>
          <p class="text-p">${description}</p>
        </div>
        <div class="modal-block-power text-p">
          <h4 class="header-4">Adds superpowers to:</h4>
          <span>Live</span> 
            <span class="power">${live}</span> 
              <span class="power-rate">${showflake.repeat(Math.floor(parseInt(live)/100))}</span>
          <span>Create</span> 
            <span class="power">${create}</span> 
              <span class="power-rate">${showflake.repeat(Math.floor(parseInt(create)/100))}</span>
          <span>Love</span> 
            <span class="power">${love}</span> 
              <span class="power-rate">${showflake.repeat(Math.floor(parseInt(love)/100))}</span>
          <span>Dream</span> 
            <span class="power">${dream}</span> 
              <span class="power-rate">${showflake.repeat(Math.floor(parseInt(dream)/100))}</span>
        </div>
      </div>
    </div>
  </div>
      `
  );
};


export const showflake = `
<svg class="snowflake" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_19002_840)">
<path d="M18.2942 14.8224L17.4727 14.3481L19.674 13.7583L19.3102 12.4006L15.7512 13.3542L14.0725 12.385C14.0957 12.26 14.1084 12.1315 14.1084 12C14.1084 11.8684 14.0957 11.7398 14.0725 11.6149L15.7512 10.6457L19.3102 11.5994L19.674 10.2416L17.4727 9.65177L18.2942 9.17747L21.8194 8.96588L22.3385 6.03095L19.5373 5.01305L17.5914 7.96016L16.7699 8.43446L17.3598 6.23317L16.002 5.86939L15.0484 9.42842L13.3687 10.3982C13.1741 10.2315 12.949 10.0997 12.7028 10.0124V8.0742L15.3082 5.46879L14.3143 4.47488L12.7028 6.08633V5.13772L14.2772 1.98876L12 0L9.72271 1.98886L11.2972 5.13782V6.08642L9.68569 4.47497L8.69178 5.46889L11.2971 8.0743V10.0125C11.051 10.0998 10.8259 10.2316 10.6312 10.3983L8.95154 9.42852L7.99792 5.86949L6.64018 6.23326L7.23003 8.43456L6.40854 7.96025L4.46269 5.01314L1.66148 6.03104L2.18058 8.96597L5.70578 9.17757L6.52727 9.65187L4.32597 10.2417L4.6898 11.5994L8.24882 10.6458L9.92746 11.615C9.90431 11.74 9.89157 11.8685 9.89157 12C9.89157 12.1316 9.90427 12.2602 9.92746 12.3851L8.24882 13.3543L4.6898 12.4006L4.32597 13.7584L6.52727 14.3482L5.70578 14.8225L2.18058 15.034L1.66148 17.969L4.46274 18.9869L6.40859 16.0397L7.23012 15.5654L6.64028 17.7667L7.99801 18.1306L8.95163 14.5715L10.6313 13.6018C10.826 13.7684 11.0511 13.9003 11.2972 13.9875V15.9258L8.69187 18.5311L9.68579 19.525L11.2973 17.9135V18.8621L9.7228 22.0111L12.0001 24L14.2774 22.0111L12.7029 18.8621V17.9135L14.3144 19.525L15.3083 18.5311L12.7029 15.9258V13.9875C12.9491 13.9003 13.1742 13.7684 13.3689 13.6018L15.0485 14.5715L16.0022 18.1306L17.3599 17.7667L16.7701 15.5654L17.5916 16.0397L19.5374 18.9869L22.3387 17.969L21.8196 15.034L18.2942 14.8224Z" fill="#FF4646"/>
</g>
<defs>
<clipPath id="clip0_19002_840">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`