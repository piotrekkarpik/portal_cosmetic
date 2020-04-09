
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            centeredSlides: false,
        },
        991: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
});
var swiper2 = new Swiper('.promo_container1', {
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
    }
});