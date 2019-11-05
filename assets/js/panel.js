jQuery(function ($) {
  $('.sidebar__option').on('click', function (e) {
    var sidebarOption = $(e.target).closest('.sidebar__option').data('name');
    $(".panel__content").children().hide();
    $(`.content__${sidebarOption}`).css("display", "block");
    if (sidebarOption !== "orders") {
      $(".orders__container").css("display", "block");
      $(".order-single__container").css("display", "none");
    }
  });

  const {
    innerWidth
  } = window;


  if (innerWidth < 840) {
    $(".sidebar__row").click(function (e) {
      $(this).next().toggle();
    });
  }

  $(".account__icon").click(function () {
    $(".my-account-tooltip").fadeIn();
  });

  $(document).mouseup(function (e) {
    var myAccountTooltip = $(".my-account-tooltip");
    if (!myAccountTooltip.is(e.target) && myAccountTooltip.has(e.target).length === 0) {
      myAccountTooltip.fadeOut();
    }
  });

  $(".sidebar__row").click(function () {
    $(".sidebar__row").removeClass('active');
    $(".sidebar__icon").removeClass('active');
    $(".sidebar__paragraph").removeClass('active');
    $(this).addClass('active');
    $(this).find(".sidebar__icon").addClass('active');
    $(this).find(".sidebar__paragraph").addClass('active');
  });

  $('.content__paragraph').on({
    mouseenter: function () {
      $(this).closest('.content__icon-wrapper').find('.content__hexagon').css("stroke", "#eac12d");
      $(this).closest('.content__icon-wrapper').find('.content__icon').css("fill", "#eac12d");
    },
    mouseleave: function () {
      $(this).closest('.content__icon-wrapper').find('.content__hexagon').css("stroke", "#d5d5d5");
      $(this).closest('.content__icon-wrapper').find('.content__icon').css("fill", "#b1b1b1");
    }
  });

  $('.content__icon').on({
    mouseenter: function () {
      $(this).closest('.content__icon-wrapper').find('.content__hexagon').css("stroke", "#eac12d");
      $(this).closest('.content__icon-wrapper').find('.content__icon').css("fill", "#eac12d");
    },
    mouseleave: function () {
      $(this).closest('.content__icon-wrapper').find('.content__hexagon').css("stroke", "#d5d5d5");
      $(this).closest('.content__icon-wrapper').find('.content__icon').css("fill", "#b1b1b1");
    }
  });

  $('.content__hexagon').on({
    mouseenter: function () {
      $(this).closest('.content__icon-wrapper').find('.content__hexagon').css("stroke", "#eac12d");
      $(this).closest('.content__icon-wrapper').find('.content__icon').css("fill", "#eac12d");
    },
    mouseleave: function () {
      $(this).closest('.content__icon-wrapper').find('.content__hexagon').css("stroke", "#d5d5d5");
      $(this).closest('.content__icon-wrapper').find('.content__icon').css("fill", "#b1b1b1");
    }
  });

  $(".orders-table__paragraph--button").click(function () {
    $(".orders__container").css("display", "none");
    $(".order-single__container").css("display", "block");
  });

  $(".write-question").click(function () {
    $(".write-question__container").slideToggle({
      start: function () {
        jQuery(this).css('display', 'flex');
      }
    });
  });

});