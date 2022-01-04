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
    
    // close video functionality by clicking outside
    $(document).mouseup(function(e) {
        var container = $("nav");
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('nav').removeClass('showNav')
            $('.layer').fadeOut();
            $('html, body').css("overflow", "visible")
        }
    });

    // stop scroll
    $('.menu').on('click', () => {
        $('html, body').css('overflow', 'hidden');
        $('.layer').fadeIn();
    });
    $('.close').on('click', () => {
        $('html, body').css('overflow', 'visible');
        $('.layer').fadeOut();
    });

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