jQuery(function ($) {

    //zmiana styli po najechaniu na karte produktu

    $('.article-product__card').on({
        mouseenter: function () {
            $(this).children('.article-product__price').addClass('article-product__price--hovered');
            $(this).children('.article-product__price').children("p").hide();
            $(this).children('.article-product__price').children('.article-product-price--hover').addClass('product__basket--show');
            $(this).children('.article-product__details').children('.article-product__details-show').hide();
            $(this).children('.article-product__details').children('.article-product__details-hover').addClass('article-product__details--row');
            $(this).children('.article-product__image').children('.article-product__image-hover').show();
        },
        mouseleave: function () {
            $(this).children('.article-product__price').removeClass('article-product__price--hovered');
            $(this).children('.article-product__price').children("p").show();
            $(this).children('.article-product__price').children('.product__basket').removeClass('product__basket--show');
            $(this).children('.article-product__price').children('.article-product-price--hover').removeClass('product__basket--show');
            $(this).children('.article-product__details').children('.article-product__details-show').show();
            $(this).children('.article-product__details').children('.article-product__details-hover').removeClass('article-product__details--row');
            $(this).children('.article-product__image').children('.article-product__image-hover').hide();
        }
    });
});