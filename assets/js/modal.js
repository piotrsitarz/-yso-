//modale

jQuery(function ($) {
  $('.about__image').on('click', function () {
    $('.mask').addClass('active');
  });

  $('.open-modal').on('click', function () {
    $('.mask').addClass('active');
  });

  $('.open-modal-account').on('click', function () {
    $('.mask--account').addClass('active');
  });

  function closeModal() {
    $('.mask').removeClass('active');
    $('.mask--account').removeClass('active');
  }

  $('.close, .mask').on('click', function () {
    closeModal();
  });

  $('.close, .mask--account').on('click', function () {
    closeModal();
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });
});