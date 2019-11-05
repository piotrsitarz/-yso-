//koszyk

jQuery(function ($) {
    const basketEmpty = $('.header-basket__price').text() === '0,00 zł';
    if (basketEmpty) {
        $('.basket__message-filled').css('display', 'none');
    } else {
        $('.basket__message-empty').css('display', 'none');
    }

    $(".header-basket__order").click(function () {
        $('.bottom').css('display', 'block');
    });


    //toltip z koszyka wylaczanie
    $(document).mouseup(function (e) {
        var basketTooltip = $(".bottom");
        if (!basketTooltip.is(e.target) && basketTooltip.has(e.target).length === 0) {
            $('.bottom').css('display', 'none');
        }
    });
});