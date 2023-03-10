/*
document.addEventListener("DOMContentLoaded", function () {
    

const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
  
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
    },
  });

});
*/

document.addEventListener("DOMContentLoaded", function () {
    

  new Swiper('.swiper', {
      navigation: {
        nextEl: '.bt-slaider_first-right',
        prevEl: '.swiper-button-prev'
      },

      pagination: {
        el: '.swiper-pagination'
      }
    });
  
  });