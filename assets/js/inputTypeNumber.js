jQuery(function ($) {
  // zmiana wartosci inputu number +/-
  // zmiana wartosci inputu number +/-
  $(".input-arrow__container--up").click(function () {
    var inputNumber = $(this).closest('.input-number-container').find('.basket__input');
    var inputNumberVal = parseInt(inputNumber.val()) + 1;
    inputNumber.val(inputNumberVal);
  });

  $(".input-arrow__container--down").click(function () {
    var inputNumber = $(this).closest('.input-number-container').find('.basket__input');
    var inputNumberVal = parseInt(inputNumber.val()) - 1;
    if (inputNumberVal > 0) {
      inputNumber.val(inputNumberVal);
    }
  });

});