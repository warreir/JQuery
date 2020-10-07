$(function(){
    $('.d-md-flex').children(':first').mouseenter(function () {
        $(this).animate({
            'right': '+=30px',
        });
    })
    $('.d-md-flex').children(':first').mouseleave(function () {
        $(this).animate({
            'right': '-=30px',
        });
    })

    $('.d-md-flex').children(':last').mouseenter(function () {
        $(this).animate({
            'left': '+=30px',
        });
    })
    $('.d-md-flex').children(':last').mouseleave(function () {
        $(this).animate({
            'left': '-=30px',
        });
    })
})