jQuery(function ($) {

    // główny slider

    $('.slider__paragraph').click(function () {
        const active = $(this).hasClass("slider__paragraph--active");
        if (!active) {
            const index = $(".slider__paragraph").index(this);
            const imgSrc = `assets/images/slider/main/product-slider${index+1}.webp`;

            $('.slider__paragraph').each(function () {
                const currentElement = $(this);
                currentElement.removeClass('slider__paragraph--active');
            });

            $(this).addClass("slider__paragraph--active");

            $(".slider__img").fadeOut(600, function () {
                $(".slider__img").attr('src', imgSrc).fadeIn(600);
            });
        }
    });

    $('.slider__paragraph--dot').click(function () {
        const active = $(this).hasClass("slider__paragraph--active");
        if (!active) {
            const index = $(".slider__paragraph--dot").index(this);
            const imgSrc = `assets/images/slider/main/product-slider${index+1}.webp`;

            $('.slider__paragraph--dot').each(function () {
                const currentElement = $(this);
                currentElement.removeClass('slider__paragraph--active');
            });

            $(this).addClass("slider__paragraph--active");

            $(".slider__img").fadeOut(600, function () {
                $(".slider__img").attr('src', imgSrc).fadeIn(600);
            });
        }
    });

    //slidery Nowości / Bestsellery

    $('.slider-products__container').slick({
        slidesToShow: 4,
        dots: false,
        centerMode: false,
        arrows: false,
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 996,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".slider-products__arrow-news--right").click(function () {
        $(".slider-products__container--news").slick('slickNext');
    });

    $(".slider-products__arrow-news--left").click(function () {
        $(".slider-products__container--news").slick('slickPrev');
    });

    $(".slider-products__arrow-bestsellers--right").click(function () {
        $(".slider-products__container--bestsellers").slick('slickNext');
    });

    $(".slider-products__arrow-bestsellers--left").click(function () {
        $(".slider-products__container--bestsellers").slick('slickPrev');
    });

    //zmiana styli po najechaniu na karte produktu

    $('.slider-product__card').on({
        mouseenter: function () {
            $(this).children('.slider-product__price').addClass('slider-product__price--hovered');
            $(this).children('.slider-product__price').children("p").hide();
            $(this).children('.slider-product__price').children('.slider-product-price--hover').addClass('product__basket--show');
            $(this).children('.slider-product__details').children('.slider-product__details-show').hide();
            $(this).children('.slider-product__details').children('.slider-product__details-hover').addClass('slider-product__details--row');
            $(this).children('.slider-product__image').children('.slider-product__image-hover').show();
        },
        mouseleave: function () {
            $(this).children('.slider-product__price').removeClass('slider-product__price--hovered');
            $(this).children('.slider-product__price').children("p").show();
            $(this).children('.slider-product__price').children('.product__basket').removeClass('product__basket--show');
            $(this).children('.slider-product__price').children('.slider-product-price--hover').removeClass('product__basket--show');
            $(this).children('.slider-product__details').children('.slider-product__details-show').show();
            $(this).children('.slider-product__details').children('.slider-product__details-hover').removeClass('slider-product__details--row');
            $(this).children('.slider-product__image').children('.slider-product__image-hover').hide();
        }
    });

});