$(document).ready(function () {
    $(".center").slick({
        dots: true,
        lazyLoad: 'ondemand',
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerMode: false
                        
                    }
                }]
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

    if($(window).width() > 800){
        var modal = $('.modal');
        var toggleModal = $('.project-bottom-imgs > img');
        toggleModal.on('click', function(){
            $(this).next('div').css('display', 'block');
        })
        modal.on('click', function(){
            modal.css('display', 'none');
        })
    }
    
    //modal
    $('#icon-burger').on('click', function(){
        $('.item-navbar').each(function(){
            if(this.className.includes('responsive')){
                $(this).removeClass('responsive')
                $(this).css('display', 'none')
            } else {
                $(this).css('display', 'block').addClass('responsive');
            }
        })
    })
});




 