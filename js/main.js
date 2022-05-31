$(document).ready(function () {
    $('.menu__burger').click(function(e) {
        $('.menu__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.acor__title').click(function (e) { 
        if($('.acor').hasClass('one')){
            $('.acor__title').not($(this)).removeClass('acor__title--active');
            $('.acor__text').not($(this).next()).slideUp(250);
        }
        $(this).toggleClass('acor__title--active').next().slideToggle(250);
    });
    $('.slider').slick({
        arrows:false,
        dots: true,
    });
});