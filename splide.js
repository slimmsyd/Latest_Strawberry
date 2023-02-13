
// const splide =  new Splide( '.splide', {
//     type    : 'loop',
//     autoplay: 'play',
//   } )

//   splide.mount()












const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    autoplay: {
      delay: 5000,
    },
    allowTouchMove: false,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });