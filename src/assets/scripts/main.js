const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
