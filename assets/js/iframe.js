// modal + iframe lazy loaded

jQuery(function($) {
  var video_wrapper = $('.about__iframe-wrapper');
  if (video_wrapper.length) {
    $('.about__image').on('click', function() {
      $('.mask').addClass('active');
      video_wrapper.html(
        '<iframe class="about__iframe" src="https://www.youtube.com/embed/2J_LUYsFVns?autoplay=1"></iframe>'
      );
    });
  }

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
});
