jQuery(function ($) {

    var searchProductsOptions = [{
            imgSrc: "assets/images/product-option.jpg",
            title: "balsam do ciała biała fantazja 200g",
            price: "56,90 zł"
        },
        {
            imgSrc: "assets/images/product-option.jpg",
            title: "olejek do ciała biała fantazja 200g",
            price: "56,90 zł"
        },
        {
            imgSrc: "assets/images/product-option.jpg",
            title: "świeca z wosku 200g",
            price: "56,90 zł"
        },
        {
            imgSrc: "assets/images/product-option.jpg",
            title: "mleczko pszczele 400g",
            price: "56,90 zł"
        },
        {
            imgSrc: "assets/images/product-option.jpg",
            title: "mleczko pszczele 100g",
            price: "56,90 zł"
        },
        {
            imgSrc: "assets/images/product-option.jpg",
            title: "mleczko pszczele 500g",
            price: "56,90 zł"
        },
    ]

    const productsOptionsList = (products) => {
        products.forEach(option => {
            $('.header-search__input-options').append($(`
                <div class="header-search__input-option">
                    <img class="header-search__input-image" src="${option.imgSrc}" alt="${option.title}">
                    <div class="header-search__input-text">
                        <p class="header-search__input-paragraph">${option.title}</p>
                        <p class="header-search__input-paragraph header-search__input-paragraph--price">${option.price}</p>
                    </div>
                </div>
            `));
        })

        $('.header-search__input-options').append($(`
            <p class="header-search__input-paragraph header-search__input-paragraph--all">Wyświetl wszystko</p>
        `));
    }

    $(".header-search__input").focus(function () {
        $(".header-search__icon").addClass("header-search__icon--active");
        $(".header-search__input-options").addClass("header-search__input-options--show");
        productsOptionsList(searchProductsOptions.slice(0, 3));
    }).blur(function (e) {
        $(".header-search__input-options").removeClass("header-search__input-options--show");
        $(".header-search__icon").removeClass("header-search__icon--active");
        $('.header-search__input-options ').empty();
    })

    $(document).on('click', '.header-search__input-paragraph--all', function () {
        // $(".header-search__icon").addClass("header-search__icon--active");
        // $(".header-search__input-options").addClass("header-search__input-options--show");
        // productsList = productsOptionsList(searchProductsOptions);
    });

    $(".header-search__input").keyup(function (e) {
        const searchingProduct = e.target.value;
        $('.header-search__input-options ').empty();
        const productsList = searchingProduct ? productsOptionsList(searchProductsOptions.filter(productOption => productOption.title.toLowerCase().includes(searchingProduct.toLowerCase()))) : productsOptionsList(searchProductsOptions.slice(0, 3));
    });

});