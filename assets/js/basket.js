//koszyk

jQuery(function ($) {
    const basketEmpty = $('.header-basket__price').text() === '0,00 zł';
    if (basketEmpty) {
        $('.basket__message-filled').css('display', 'none');
    } else {
        $('.basket__message-empty').css('display', 'none');
    }
});