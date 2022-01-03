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

})