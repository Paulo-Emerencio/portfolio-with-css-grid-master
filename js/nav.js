const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');

navToggle.addEventListener('click', _ => {
   containerAll.style.transition = 'transform ease-out 250ms';
   document.body.classList.toggle('nav-is-open');
});

nav.addEventListener('click', _ => {
   containerAll.style.transition = 'none'
   document.body.classList.remove('nav-is-open');
});