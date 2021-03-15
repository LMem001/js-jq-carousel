// link variables to html document's classes
var nextImageBtn = $(".slider-wrapper .fas.fa-angle-right");
var prevImageBtn = $(".slider-wrapper .fas.fa-angle-left");
var imageList = $(".images img");
var imgTotal = imageList.length;
var bulletNav = $(".slider-wrapper .nav");

// generate bullets
var i = 0;
while(i < imgTotal) {
  // create the a number of bullet equal to the number of images in the carosel
  if(i == 0) {
    // give the .first class to the firs bullet
    $('<i></i>').addClass('fas fa-circle active first').appendTo(bulletNav);
  } else if(i == imgTotal - 1) {
    // give the .last class to the last bullet
    $('<i></i>').addClass('fas fa-circle last').appendTo(bulletNav);
  } else {
    $('<i></i>').addClass('fas fa-circle').appendTo(bulletNav);
  }
  i++;
}

var bulletBtn = $(".nav .fa-circle");

function nextImage() {
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
}

function prevImage() {
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
}

// show next btn method
nextImageBtn.click(function() {
  nextImage();
});

// show prev btn method
prevImageBtn.click(function() {
  prevImage();
});

// show prev/next: keyboard method
$("body").keydown(function(e) {
  if(e.keyCode == 39) {
    nextImage();
  } else if(e.keyCode == 37) {
    prevImage();
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
    // create a string to get the nth child
    var getImage = ".images img:nth-child(" + ($(this).index() + 1) + ")";
    // add the .active class to the nth child
    $(getImage).addClass("active");
  }
});
