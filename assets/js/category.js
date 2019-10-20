  //rozwijana lista filtrow

  jQuery(function ($) {
    $(".category__toggle").click(function () {
      $(this).next(".filters__toggle").slideToggle();
    });
  });

  //zmiana styli po najechaniu na karte produktu

  $('.product__card').on({
    mouseenter: function () {
      $(this).children('.product__price').addClass('product__price--hovered');
      $(this).children('.product__price').children("p").hide();
      $(this).children('.product__price').children('.product-price--hover').addClass('product__basket--show');
      $(this).children('.product__details').children('.product__details-show').hide();
      $(this).children('.product__details').children('.product__details-hover').addClass('product__details--row');
      $(this).children('.product__image').children('.product__image-hover').show();
    },
    mouseleave: function () {
      $(this).children('.product__price').removeClass('product__price--hovered');
      $(this).children('.product__price').children("p").show();
      $(this).children('.product__price').children('.product__basket').removeClass('product__basket--show');
      $(this).children('.product__price').children('.product-price--hover').removeClass('product__basket--show');
      $(this).children('.product__details').children('.product__details-show').show();
      $(this).children('.product__details').children('.product__details-hover').removeClass('product__details--row');
      $(this).children('.product__image').children('.product__image-hover').hide();
    }
  });