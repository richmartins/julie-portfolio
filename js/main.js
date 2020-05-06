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

    $('#project-filter').on('change', function(){
        var cat = this.value;
        $('.card').each(function(i){
            if(cat == 'all'){
                $(this).removeClass('hidden');
            }
            else if(this.className.includes(cat)){
                $(this).removeClass('hidden');
            }else{
                $(this).addClass(" hidden");
            }
        })
    })

    //modal
    var modal = $('.modal');
    var toggleModal = $('.project-bottom-imgs > img');
    toggleModal.on('click', function(){
        $(this).next('div').css('display', 'block');
    })
    modal.on('click', function(){
        modal.css('display', 'none');
    })
});


 