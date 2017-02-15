$(function() {
  $('.switch button').on('click', function(){
    if ($('button').attr('class') === 'on') {
      $('button').toggleClass('on off');
    }
    else {
      $('button').toggleClass('off on');
    }
  });
});
