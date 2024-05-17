const menuHambuguer = document.querySelector('.menu-hamburguer');
const selecionarMenuMobile = document.querySelector('.menu-hamburguer-mobile');

menuHambuguer.addEventListener('click', function () {
  selecionarMenuMobile.classList.toggle('ativo');
});
