//UDEMY #26

const nav = document.querySelector('.NavBar')
window.addEventListener('scroll', fixNav)

function fixNav() {
   if (window.scrollY > nav.offsetHeight + 10) {
      nav.classList.add('active');
   }
   else {
      nav.classList.remove('active');
   }
}

//UDEMY #5 HIDDEN SEARCH WIDGET

const search =document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
   search.classList.toggle('active')
   input.focus()
})

//UDEMY #31 AUTO TEXT EFFECT
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Transform your body, mind, and lifestyle with our engaging workouts and expert guidance at Muscle Factory.';
let idx = 1;
let speed = 75 / speedEl.value; // Adjust the base speed as necessary

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writeText,speed);
}

writeText(); // Initialize the typing effect
