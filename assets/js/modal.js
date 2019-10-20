//modale

jQuery(function ($) {
  $('.about__image').on('click', function () {
    $('.mask').addClass('active');
  });

  $('.open-modal').on('click', function () {
    $('.mask').addClass('active');
  });

  function closeModal() {
    $('.mask').removeClass('active');
  }

  $('.close, .mask').on('click', function () {
    closeModal();
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });
});