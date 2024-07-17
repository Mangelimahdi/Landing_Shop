const asideElem = document.querySelector('.aside');
const burgurMenuElem = document.querySelector('.burgur-menu')
const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    grabCursor: true,
    breakpoints: {
        spaceBetween: 10,
        200: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

});
burgurMenuElem.addEventListener('click', (event) => {
    asideElem.classList.add('active');
})

window.addEventListener('keyup', (event) => {
    if (event.code === 'Escape') {
        asideElem.classList.remove('active')
    }

})
window.addEventListener('click',(event)=>{
    if (event.target.tagName != 'path' && event.target.tagName != 'svg') {
        asideElem.classList.remove('active');
    }
})