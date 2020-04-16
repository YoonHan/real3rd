$(function() {
  var width = $(window).width();

  if(width >= 767){
    $(".content-title").click(function(){
      $(this).siblings(".content-text").toggle();
      $(this).css("height", "auto");
    });
  }
});
