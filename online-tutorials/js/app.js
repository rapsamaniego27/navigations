/* Code javascript here */

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('menu-open');
});