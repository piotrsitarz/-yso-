//checkboxy

jQuery(function ($) {
  $(".order").change(function () {
    $(".account").prop('checked', false);
    $(".create").css("display", "none");
    if (!this.checked) {
      $(this).prop('checked', true);
    }
  });

  $(".account").change(function () {
    $(".order").prop('checked', false);
    $(".create").css("display", "flex");
    if (!this.checked) {
      $(this).prop('checked', true);
    }
  });

  $(".factureS").change(function () {
    if (!this.checked) {
      $(".facture").css("display", "none");
    } else {
      $(".facture").css("display", "flex");
    }
  });
});