// link variables to html document's classes
var nextImageBtn = $(".slider-wrapper .fas.fa-angle-right");

nextImageBtn.click(function() {
  activeImg = $(".images .active");
  activeImg.removeClass("active");
  activeImg.next().addClass("active");
});
