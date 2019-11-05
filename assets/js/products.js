  jQuery(function ($) {
    $(".weight__item--more").click(function () {
      $(".info__weight--more").css("display", "block");
    });

    $(document).mouseup(function (e) {
      var loadMoreInfoWeightItems = $(".info__weight--more");
      if (!loadMoreInfoWeightItems.is(e.target) && loadMoreInfoWeightItems.has(e.target).length === 0) {
        loadMoreInfoWeightItems.css("display", "none");
      }
    });
  });