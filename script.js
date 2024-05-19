const menuHambuguer = document.querySelector('.menu-hamburguer');
const selecionarMenuMobile = document.querySelector('.menu-hamburguer-mobile');

menuHambuguer.addEventListener('click', function () {
  selecionarMenuMobile.classList.toggle('ativo');
});


const getHeader = document.querySelector('header')
const getSeta = document.querySelector(".quadrado-seta")

window.onscroll = function(){
   let distanciaTopo = getHeader.getBoundingClientRect().top;
   console.log(distanciaTopo)
   
   if (distanciaTopo >= -250){
    getSeta.style.display = 'none'
   } else {
    getSeta.style.display = 'block'
   }
   }

