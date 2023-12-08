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
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            opacity: 0,
        },
        next: {
            translate: [100, 0, -500],
            opacity: 0,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/* ================ Swiper Popular=============== */

const popularSwiper = new Swiper('.popular__content', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    //Navigation arrows

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // breakpoints: {
    //     768: {
    //         centeredSlides: false,
    //     }
    // }



});


/* ===================CHOOSE FAQ=======================*/


const faqItems = document.querySelectorAll('.choose__faq-item')

//SELECT EACH ITEM

faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.choose__faq-header')

    //2. Select each button click

    faqHeader.addEventListener('click', () => {
        // 7. Select the current faq-open class
        const openItem = document.querySelector('.faq-open')

        // 5.calling the toogle function
        toggleItem(item)

        //8. Remove the faq-open class from other items 
        if( openItem && openItem != item){
            toggleItem(openItem)

        }

    })
})

// 3.create fuction to dispaly the content 

const toggleItem = (item) => {
    const faqContent = item.querySelector('.choose__faq-content')
    // 6. if the same item contains the faq-open class,remove
    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else {
        // 4. Add Max-height to the content and add the flag-open class
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')

    }


}

/* =======================Scroll Reveal==================== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // animation repeat
})
sr.reveal(`.home__container, .popular__container, .footer__container`)
sr.reveal(`.home__swiper`, {origin: 'bottom'})
sr.reveal(`.choose__image`, {origin: 'left'})
sr.reveal(`.choose__content`, {origin: 'right'})