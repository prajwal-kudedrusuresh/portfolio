// Mobile menu toggle and active-link highlighting
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
    menuIcon.classList.toggle('bx-x');
  });
  navLinks.forEach((link) =>
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
      menuIcon.classList.remove('bx-x');
    })
  );
}

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach((sec) => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id));
    }
  });
});
