
// preloader 
$(window).on('load', function(){ 
  $('#status').fadeOut(); 
  $('#preloader').delay(300).fadeOut('slow'); 
  $('body').delay(300).css({'overflow':'visible'});
});

// navbar 
$(document).ready(function () {
        // change menu icon 
        $('#menu-bars').click(function () { 
            $(this).toggleClass('fa-times');
         });

        $('.nav-item').click(function () { 
            $('#menu-bars').removeClass('fa-times');
            $('#navbarNav').removeClass('show');
            
         });


    // go to top 
    $(document).on('scroll', function(){
        if ($(window).scrollTop() > 500){
            $('.nav-2').addClass('nav-active');           
            $('#gotoTop').fadeIn()();
        }else{
            $('.nav-2').removeClass('nav-active');
            $('#gotoTop').fadeOut()();
        }
       
    })

  

    // filter gallary     
        $('#myList').lingGalleryFilter({
          tagContainer: $('#filter-controls')
        });

});

// swiper 
  var swiper = new Swiper(".gallary-swiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop:true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
        spaceBetween: 0,
    },
    1024: {
      slidesPerView: 5,
        spaceBetween: 0,
    },
  },

});

// ...........................the end....................... 
