// link variables to html document's classes
var nextImageBtn = $(".slider-wrapper .fas.fa-angle-right");
var prevImageBtn = $(".slider-wrapper .fas.fa-angle-left");

nextImageBtn.click(function() {
  // the function show the user the next image in the carousel
  // get active img from the document
  activeImg = $(".images .active");
  activeImg.removeClass("active");
  // get active bullet from the document
  activeBullet = $(".nav .fa-circle.active");
  activeBullet.removeClass("active");
  // check if the machine is linked to the last elements
  if(activeImg.hasClass("last") == true) {
    // if yes give the .active class to the first elements
    $(".images .first").addClass("active");
    $(".nav .first").addClass("active");
  } else {
    // if not give the .active class to the elements successors
    activeImg.next().addClass("active");
    activeBullet.next().addClass("active");
  }
});

prevImageBtn.click(function() {
  // the function show the user the previous image in the carousel
  // get active img from the document
  activeImg = $(".images .active");
  activeImg.removeClass("active");
  // get active bullet from the document
  activeBullet = $(".nav .fa-circle.active");
  activeBullet.removeClass("active");
  // check if the variablels are linked to the first elements
  if(activeImg.hasClass("first") == true) {
    // if yes give the .active class to the last elements
    $(".images .last").addClass("active");
    $(".nav .last").addClass("active");
  } else {
    // if not give the .active class to the previous elemts
    activeImg.prev().addClass("active");
    activeBullet.prev().addClass("active");
  }
});
