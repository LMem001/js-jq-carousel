// link variables to html document's classes
var nextImageBtn = $(".slider-wrapper .fas.fa-angle-right");

nextImageBtn.click(function() {
  activeImg = $(".images .active");
  activeImg.removeClass("active");
  if(activeImg.hasClass("last") == true) {
    $(".images .first").addClass("active");
  } else {
    activeImg.next().addClass("active");
  }
});
