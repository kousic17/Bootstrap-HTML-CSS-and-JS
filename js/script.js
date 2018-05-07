$(".scroll-top").css({ display: "none" });
$(document).ready(function() {
  var offset = 250;
  var duration = 300;
  $(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      $(".scroll-top").fadeIn(duration);
    } else {
      $(".scroll-top").fadeOut(duration);
    }
  });
  $(".scroll-top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});


$(".paral a").click(function() {
  $('html,body').animate({
      scrollTop: $("#portfolio").offset().top},
    800);
});