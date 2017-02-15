$(function() {
  $('.switch button').on('click', function(){
    $('body').toggleClass('dark light');
    $('button').toggleClass('on off');
})
})
