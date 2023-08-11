const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero-section');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY) {
    navbar.style.backgroundColor = '#014040cf'; 
  } else {
    const heroColor = getComputedStyle(hero).backgroundColor;
    navbar.style.backgroundColor = heroColor;
  }
  lastScrollY = currentScrollY;
});


const ul = document.querySelector('ul');
ul.classList.add('scrolling');