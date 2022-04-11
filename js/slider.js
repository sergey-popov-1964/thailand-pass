const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // effect: 'slide',
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});