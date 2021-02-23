$(document).ready(function(){
    $('.slider').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow_mini_black.svg" alt="prev arrow"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow_mini_black.svg" alt="next arrow"></button>',
         // arrows: true
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
        // autoplay: 3000
    });

    $('.slider2').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow_mini_left.svg" alt="prev arrow"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow_mini_left.svg" alt="next arrow"></button>',
        // arrows: true
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
        // autoplay: 3000
    });
    $('.slider_mini').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow_mini_left.svg" alt="prev arrow"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow_mini_left.svg" alt="next arrow"></button>',
        // arrows: true
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
        // autoplay: 3000
    });
    $('.slider_mini2').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow_mini_black.svg" alt="prev arrow"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow_mini_black.svg" alt="next arrow"></button>',
        // arrows: true
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
            }
        ]
        // autoplay: 3000
    });

});

