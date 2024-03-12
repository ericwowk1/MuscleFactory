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