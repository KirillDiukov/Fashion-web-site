const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const mq = window.matchMedia('(max-width: 1590px)')
const mq2 = window.matchMedia('(max-width: 1050px)')

if (mq2.matches) {
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    freeMode: true,
    autoplay: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
}
else if (mq.matches) {
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 2,
    freeMode: true,
    autoplay: false,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
} else {
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    autoplay: false,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
} 

// const swiper2 = new Swiper('.swiper2', {
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 30,
//     freeMode: true,
//     autoplay: false,
  
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
// });

// window.addEventListener('load', () => {
//   const screenWidth = getComputedStyle(document.querySelector('head')).width;
//    doSmthIfEqual(screenWidth);
// })

// //При изменении ширины экрана
// window.addEventListener('resize', () => {
//   const screenWidth = getComputedStyle(document.querySelector('head')).width;
//   doSmthIfEqual(screenWidth);
// });

// function doSmthIfEqual(size) {
//    if (size <= '1920px') {

//     const swiper2 = new Swiper('.swiper2', {
//       direction: 'horizontal',
//       loop: true,
//       spaceBetween: 30,
//       freeMode: true,
//       autoplay: false,
//       slidesPerView: 2,
    
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },

//   });
//     console.log('Разрешение экрана меньше 1920px');
//   } else {
//     console.log('Разрешение экрана больше 1920px');

//     const swiper2 = new Swiper('.swiper2', {
//       direction: 'horizontal',
//       loop: true,
//       spaceBetween: 30,
//       freeMode: true,
//       autoplay: false,
//       slidesPerView: 3,
    
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }
//     }
//   },
// }

const iconMenu = document.querySelector('.nav__icon')
if (iconMenu) {
  const menu = document.querySelector('.nav')
  iconMenu.addEventListener("click", function(e) {
    iconMenu.classList.toggle('_active')
    menu.classList.toggle('_active')
  })
}