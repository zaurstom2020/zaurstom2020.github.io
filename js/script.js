$(document).ready(function(){
    $('.slider_carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-right slick_right" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-left slick_left" aria-hidden="true"></i></button>'
    });

    //появляется окно при скролле
    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
          $('.button_top').fadeIn();
        } else {
          $('.button_top').fadeOut();
        }
    });

    //плавный скролл 
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    //маска ввода для номера телефона
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //отправка формы
    $('.form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).success(function() {
          $(this).find("input").val("");
          $('.form').trigger('reset');
        });
    
    
        return false;
      });


    $('.hamburger').on("click", function() {
      $('.hamburger').toggleClass('hamburger_activ');
      $('.header_nav').toggleClass('nav_active');
    });
    $('.click_close_menu_phone a').on('click', function() {
      $('.hamburger').removeClass('hamburger_activ');
      $('.header_nav').removeClass('nav_active');
    });
});
