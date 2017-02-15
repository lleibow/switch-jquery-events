$(function() {
  $('.switch button').on('click', function(){
    $('body').toggleClass('dark light');
    $('button').toggleClass('on off');

    if ($('button').attr('class') === 'on') {
      $('h1').text("It's so bright in here");
    }
    else {
      $('h1').text("Yoinks, it's dark!");
    }
})
})
