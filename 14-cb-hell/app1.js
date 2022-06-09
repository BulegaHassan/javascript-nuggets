//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 5s second blue; 
// after 2s third green; 
// 1st => 3rd => 2nd
//solution is to to nest callbacks as in app.js

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red'
  }, 1000)
  setTimeout(() => {
    second.style.color = 'blue'
  }, 5000)
  setTimeout(() => {
    third.style.color = 'green'
  }, 2000)
})
