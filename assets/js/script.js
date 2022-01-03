$(document).ready(() => {
    var topHeight = $('header').height();

    // slick sliders
    $('.slider, .review-slider').slick({
        dots: true,
        arrows: false
    })

    // responsive navbar
    $('.menu, .close').on('click', e => {
        e.preventDefault();
        $('nav').toggleClass('showNav');
    })

    // stop scroll
    $('.menu').on('click', () => $('html, body').css('overflow', 'hidden'));
    $('.close').on('click', () => $('html, body').css('overflow', 'visible'));

    // hide and show toggle btn functioanality
    $(window).scroll(function() {
        if ($(this).scrollTop() > topHeight) {
            $('.toggleUp').addClass('flex');
        } else {
            $('.toggleUp').removeClass('flex');
        }
    });

    // on toggleUp click functionality
    $('.toggleUp').click(e => {
        e.preventDefault();
        window.scroll({top: 0, behavior: "smooth"});
    })
})