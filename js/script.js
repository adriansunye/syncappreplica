AOS.init();

$(window).on("scroll", function() {
  var currentPos = $(window).scrollTop();

  $('.navbar nav-link').each(function() {
    var sectionLink = $(this);
    // capture the height of the navbar
    var navHeight = $('#navbar').outerHeight() + 1;
    var section = $(sectionLink.attr('href'));

    // subtract the navbar height from the top of the section
    if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
      $('.nav li').removeClass('active');
      sectionLink.parent().addClass('active');
    } else {
      sectionLink.parent().removeClass('active');
    }
  });        
});