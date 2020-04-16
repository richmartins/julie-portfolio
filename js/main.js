$(document).ready(function () {
    $(".center").slick({
        dots: true,
        lazyLoad: 'ondemand',
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});