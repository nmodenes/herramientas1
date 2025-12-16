// Código para mostrar los enlaces del menú hamburguesa
// cuando tenemos un tamaño de pantalla tablet o mobile
const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Código para añadir la clase actual en el enlace de la
// barra de navegación que estamos visitando, y que permite
// aplicar un estilo CSS concreto (background-color)
const current = window.location.pathname.split('/').pop();  
const links = document.querySelectorAll('nav.menu a');

links.forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === current) {
    link.classList.add('actual');
  }
});

// Código para crear un bucle con un delay para las diferentes letras/palabras animadas del título de la portada
// "Tokio y sus barrios especiales"
// ya que si hay muchas letras/palabras en el título hay que crear muchos 
// ".animation__title span:nth-child(1..n) { animation-delay: 1s; }" en el CSS
document.querySelectorAll('.animation__title span')
  .forEach((span, index) =>{
    span.style.animationDelay = `${index * 0.2}s`;
});

