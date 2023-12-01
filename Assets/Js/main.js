//  show Menu //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {

        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {

        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile //
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*swiper tshirt */

let swiperShoes = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,  
    effect: 'creative',
    creativeEffect:{
        prev:{
            translate:[-100, 0, -500],
            opacity: 0,
        },
        next:{
            translate: [100, 0, -500],
            opacity:0,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* ================ Swiper Popular=============== */ 
const popularSwiper = new Swiper('.popular__content', {
    slidesPerView:'auto',
    centeredSlides:true,
    loop: true,
    
    //Navigation arrows

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
   
    

});