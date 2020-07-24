$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        adapviteHeight:true,
        slidesToShow:6,
        slidesToScroll:2,
        speed:400,
        easing: '_ease_',
        infinite:true,
        swipe:true,
        autoplay:3000,
        touchThreshold:10,
        touchMove:true,
        waitForAnimate:false,
        centerMode:false,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: false
            }
            },
            {
            breakpoint: 1050,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            }
            },
            {
            breakpoint: 850,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
            },
            {
            breakpoint: 650,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
            },
            {
            breakpoint: 475,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
            }
            ]
            }); 
});