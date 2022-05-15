const menuBtn = document.querySelector('.menuButton');
const headerNav = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {headerNav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) headerNav.classList.remove('responsive')};