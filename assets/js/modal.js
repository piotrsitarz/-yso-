$('.about__image').on('click', function() {
  $('.mask').addClass('active');

  var symbol = $('.about__iframe')[0].src.indexOf('?') > -1 ? '&' : '?';
  $('.about__iframe')[0].src += symbol + 'autoplay=1';
});

function closeModal() {
  $('.mask').removeClass('active');
  $('.about__iframe')[0].src = 'https://www.youtube.com/embed/2J_LUYsFVns';
}

$('.close, .mask').on('click', function() {
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});
