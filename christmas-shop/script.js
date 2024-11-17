"use strict"

let arr = document.querySelectorAll('.button-black')

arr.forEach(el => {
  el.addEventListener('click', ()=> {
    let path = window.location.href
    if(path.includes('localhost')){
      let position = path.lastIndexOf('/')
      path = path.slice(0, position)
      window.location.href = path + '/gifts/'
    } else {
      let pathProduction = "https://rolling-scopes-school.github.io/kelzerock-JSFE2024Q4/christmas-shop/gifts/";
      window.location.href = pathProduction;
    }
  })
})