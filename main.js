// link variables to html document's classes
var nextImageBtn = $(".slider-wrapper .fas.fa-angle-right");

nextImageBtn.click(function() {
  // get active img from the document
  activeImg = $(".images .active");
  activeImg.removeClass("active");
  // get active bullet from the document
  activeBullet = $(".nav .fa-circle.active");
  activeBullet.removeClass("active");
  if(activeImg.hasClass("last") == true) {
    $(".images .first").addClass("active");
    $(".nav .first").addClass("active");
  } else {
    activeImg.next().addClass("active");
    activeBullet.next().addClass("active");
  }
});
