$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    var owl1 = $('.owl-carousel_1');
    owl1.owlCarousel({
        margin: 0,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
});