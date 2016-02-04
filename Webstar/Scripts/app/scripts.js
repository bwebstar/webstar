var appMaster = {

    preLoader: function(){
        imageSources = []
        $('img').each(function() {
            var sources = $(this).attr('src');
            imageSources.push(sources);
        });
        if($(imageSources).load()){
            $('.pre-loader').fadeOut('slow');
        }
    },

    reviewsCarousel: function() {
        // Reviews Carousel
        $('.review-filtering').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
    },

    screensCarousel: function() {
        // Screens Carousel
        $('.filtering').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    },

    scrollMenu: function(){
        var num = 50; //number of pixels before modifying styles

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > num) {
                $('nav').addClass('scrolled');

            } else {
                $('nav').removeClass('scrolled');
            }
        });
    },


    /*====================================
    Nivo Lightbox 
    ======================================*/
    Lightbox: function () {
        $('#itemsWork a , #itemsWorkTwo a , #itemsWorkThree a , #popup a, #work a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });
    },

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    IsotopeGrid: function () {
    $(window).load(function () {
        var $container = $('#itemsWork , #itemsWorkTwo, #itemsWorkThree');
        $container.isotope({
            filter: '.web',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function () {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    },

    /*====================================
    Puts Placeholder Text inside of fields
    ======================================*/
    placeHold: function(){
        // run Placeholdem on all elements with placeholders
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

}; // AppMaster


$(document).ready(function() {

    appMaster.reviewsCarousel();

    appMaster.screensCarousel();

    appMaster.scrollMenu();

    appMaster.Lightbox();

    appMaster.IsotopeGrid();

    appMaster.placeHold();

    $.scrollIt();

    new WOW().init();

});
