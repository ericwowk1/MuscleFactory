//JS FOR UDEMY #33 SLIDING CHECKBOX

const toggles= document.querySelectorAll('.toggle')
const month= document.querySelector('#monthtomonth')
const year= document.querySelector('#oneyear')
const threemonths= document.querySelector('#threemonths')

//Listens for when any of the 3 checkboxes in toggle class to change
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))


//Logic for only allowing one membership option to be selected
function doTheTrick(theClickedOne) {
   if (theClickedOne === month && month.checked) {
      year.checked = false;
      threemonths.checked = false;
      month.checked=true;
  } else if (theClickedOne === year && year.checked) {
      month.checked = false;
      threemonths.checked = false;
      year.checked=true;
  } else if (theClickedOne === threemonths && threemonths.checked) {
      month.checked = false;
      year.checked = false;
      threemonths.checked=true;
  }
}
//UDEMY #26 COLOR CHANGING NAV BAR
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