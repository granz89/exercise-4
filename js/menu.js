// Needs latest version of jQuery to run

$('.dropdown-btn').click(function(){
  $(this).next().slideToggle(150);
});