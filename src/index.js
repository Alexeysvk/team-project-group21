import './sass/main.scss';
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();

$(function () {
  $('.rev_slider').slick({
      arrows:false,
  dots:true,
  slidesToShow:1,
  autoplay:false,
  speed:1000,
  autoplaySpeed:800,
  responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow:1  
      }
    }
  ]
});
});