/* Code javascript here */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click', function(){
  navLinks.classList.toggle('open');
  links.forEach(function(link){
    link.classList.toggle('fade');
  });

});