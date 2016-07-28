$(document).ready(function() {

  var snd = new Audio('punch.mp3'),
      bomb = new Audio('bomb.mp3');

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

  $('.title-container').click(function() {
    $('.explosion').attr('src', './img/explosion.gif');
    $('.explosion').show();
    $(this).addClass('pop');
    bomb.play();
    setTimeout(function () {
      $('.title-container').removeClass('pop');
      $('.explosion').removeAttr('src');
      $('.explosion').hide();
    }, 800);

  })

});
