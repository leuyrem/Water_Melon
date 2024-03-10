$(document).ready(function () {
  $("#hamburger").click(function () {
      $(this).toggleClass("is-active");

      if($('#menu_wrap').hasClass('full_n')){
          $('#menu_wrap>ul').hide();
      } else {
          $('#menu_wrap>ul').fadeIn(1000);
      }

      $('#menu_wrap').toggleClass('full_n');
  });
  $(window).resize(function(){
    if (window.innerWidth < 770) {
        $(".logo>a>img").attr("src","img/logo(white_03).png");
    } else {
        $(".logo>a>img").attr("src","img/logo(black_03).png");
    }
  })
});