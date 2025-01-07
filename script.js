const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Adiciona um evento de clique no ícone
menuToggle.addEventListener('click', () => {
  // Alterna a classe 'show-menu' para exibir ou esconder os links
  navLinks.classList.toggle('show-menu');
});