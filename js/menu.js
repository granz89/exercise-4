// Needs latest version of jQuery to run
// This refers to .dropdown-btn
// If doesn't work play with the class

$('.dropdown-btn').click(function(){
  $(this).next().slideToggle(150);
  $('html, body').animate({
      scrollTop: $(this).offset().top + $('window').height()
    }, 2000);
});