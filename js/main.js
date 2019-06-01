$(function () {
    'use stric';


    var winh = $(window).height(),
        upperh = $('.upper-bar').innerHeight(),
        navh = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));


    $('.featured-meals ul li').on('click', function () {
        $(this).addclass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);

        } else {
            $('.shuffled-imgs .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }

    });

});
