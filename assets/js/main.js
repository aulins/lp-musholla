// let swiperCards = new Swiper(".card-content", {
//     loop: true,
//     spaceBetween: 3,
//     grabCursor: true,

//     // If we need pagination
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     // slidesPerView: 3,
//     // spaceBetween: 30,
//     breakpoints: {
//         // ketika window >= 320px
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         //>= 992 (lg)
//         992: {
//             slidesPerView: 4,
//             spaceBetween: 32,
//         },
//     },
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1014: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1351: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
var div = document.getElementById("logoMobile");
var display = 0;

function hideShow() {
    if (display == 1) {
        div.style.display = "block";
        display = 0;
    } else {
        div.style.display = "none";
        display = 1;
    }
}
