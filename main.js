// link variables to html document's classes
var nextImageBtn = $(".slider-wrapper .fas.fa-angle-right");
var prevImageBtn = $(".slider-wrapper .fas.fa-angle-left");
var bulletBtn = $(".nav .fa-circle ");

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

bulletBtn.click(function(){
  // run this function only if user click on a non-active bullet
  if($(this).hasClass("active") == false) {
    // get active img from the document
    activeImg = $(".images .active");
    activeImg.removeClass("active");
    // get active bullet from the document
    activeBullet = $(".nav .fa-circle.active");
    activeBullet.removeClass("active");
    // add .active class to the chosen bullet
    $(this).addClass("active");
    switch ($(this).index()) {
      // add the .active class to the corresponding immage
      case 0:
        $(".images .first").addClass("active");
        break;
      case 1:
        $(".images img:nth-child(2)").addClass("active");
        break;
      case 2:
        $(".images img:nth-child(3)").addClass("active");
        break;
      default:
        $(".images .last").addClass("active");
    }
  }
});
