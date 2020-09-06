$(document).ready(function () {
  'use strict';

  //===== Responsive Menu =====//
  $('.menu-btn').on('click', function () {
    $('.menu-wrap').addClass('slidein');
    return false;
  });
  $('.close-btn').on('click', function () {
    $('.menu-wrap').removeClass('slidein');
  });
  $('.menu-wrap li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings('li').children('ul').slideUp();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    //=== Brands Carousel ===//
    $('.brands-caro').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 7,
      fade: false,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      speed: 1500,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      prevArrow:"<button type='button' class='slick-prev'><i class='flaticon-back'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='flaticon-next'></i></button>",
      responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      }
      ]
    });

  }

}); //===== Document Ready Ends =====//

$(window).on('load',function(){
  'use strict';
  
  $('.pageloader').fadeOut('slow');

});//===== Window onLoad Ends =====//

//===== Sticky Header =====//
$(window).on('scroll',function () {
  'use strict';

  var menu_height = $('header').innerHeight();
  var scroll = $(window).scrollTop();
  if (scroll >= menu_height) {
    $('header').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
  }

});//===== Window onScroll Ends =====//