const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('header ul');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// auto-close the menu when a nav link is clicked
document.querySelectorAll('header ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    hamburger.classList.remove('active');
  });
});