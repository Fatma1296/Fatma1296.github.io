$('.open-modal').click(function () {
    $('.modal').animate({
        "top": ($(document).innerHeight() / 2) - $('.modal').height() + 30
    }, 300);
    setTimeout(function () {
        $('.modal').animate({
            "top": ($(document).innerHeight() / 2) - $('.modal').height()
        }, 300);
    }, 300);
    $(".modal-bg").fadeIn("fast");
});

$('.close, .modal-bg').click(function () {
    $('.modal').animate({
        "top": ($(document).innerHeight() / 2) - $('.modal').height() + 30
    }, 300);
    setTimeout(function () {
        $('.modal').animate({
            "top": -$(document).innerHeight()
        }, 300);
    }, 300);
    $(".modal-bg").fadeOut("fast");
});
