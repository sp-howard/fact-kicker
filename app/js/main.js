$(document).ready(function() {

  var snd = new Audio("/sound/punch.mp3");

  function kick() {
    $('#talkbubble').hide(300);
    $('.norris-leg').addClass('kick-up');
    snd.play();
    $('.quote').addClass('spin');
    $('.norris-body').css({
      'pointer-events': 'none'
    })
    $('.quote-container').css({
      'pointer-events': 'none'
    })
    $.getJSON('http://api.icndb.com/jokes/random', function(json) {
      var joke = json.value.joke;
      $('.quote').html(JSON.stringify(joke));
      if (joke.length > 220) {
        $('.quote').css({
          'font-size': '1.6em'
        });
      } else if (joke.length > 180) {
        $('.quote').css({
          'font-size': '1.8em'
        });
      } else {
        $('.quote').css({
          'font-size': '2em'
        });
      }
    });
    setTimeout(function() {
      $('.norris-leg').removeClass('kick-up');
      $('.quote').removeClass('spin');
      $('.norris-body').css({
        'pointer-events': 'auto'
      })
      $('.quote-container').css({
        'pointer-events': 'auto'
      })
    }, 900);
  }

  $('.norris-body').click(function() {
    kick();
  });

  $('.quote-container').click(function() {
    kick();
  });


});
