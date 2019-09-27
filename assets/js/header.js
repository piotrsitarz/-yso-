jQuery(function($) {
  // wyszukiwanie produktów

  var allProducts = [
    {
      imgSrc: 'assets/images/product-option.jpg',
      title: 'balsam do ciała biała fantazja 200g',
      price: '56,90 zł'
    },
    {
      imgSrc: 'assets/images/product-option.jpg',
      title: 'olejek do ciała biała fantazja 200g',
      price: '56,90 zł'
    },
    {
      imgSrc: 'assets/images/product-option.jpg',
      title: 'świeca z wosku 200g',
      price: '56,90 zł'
    },
    {
      imgSrc: 'assets/images/product-option.jpg',
      title: 'mleczko pszczele 400g',
      price: '56,90 zł'
    },
    {
      imgSrc: 'assets/images/product-option.jpg',
      title: 'mleczko pszczele 100g',
      price: '56,90 zł'
    },
    {
      imgSrc: 'assets/images/product-option.jpg',
      title: 'mleczko pszczele 500g',
      price: '56,90 zł'
    }
  ];

  var showAllSearchingProductsOptionsActivated = false;

  const showSearchingProductsOptions = () => {
    $('.header-search__input-options').empty();
    $('.header-search__icon').addClass('header-search__icon--active');
    $('.header-search__input-options').removeClass(
      'header-search__input-options--hide'
    );
  };

  const hideSearchingProductsOptions = () => {
    $('.header-search__icon').removeClass('header-search__icon--active');
    $('.header-search__input-options').addClass(
      'header-search__input-options--hide'
    );
  };

  const searchingProductsOptionsList = products => {
    products.forEach(product => {
      $('.header-search__input-options').append(
        $(`
                <div class="header-search__input-option">
                    <img class="header-search__input-image" src="${product.imgSrc}" alt="${product.title}">
                    <div class="header-search__input-text">
                        <p class="header-search__input-paragraph">${product.title}</p>
                        <p class="header-search__input-paragraph header-search__input-paragraph--price">${product.price}</p>
                    </div>
                </div>
            `)
      );
    });

    $('.header-search__input-options').append(
      $(`
            <p class="header-search__input-paragraph header-search__input-paragraph--all">Wyświetl wszystko</p>
        `)
    );
  };

  const getSearchingProductsOptionsList = searchingProduct => {
    searchingProduct
      ? searchingProductsOptionsList(
          allProducts.filter(product =>
            product.title.toLowerCase().includes(searchingProduct.toLowerCase())
          )
        )
      : searchingProductsOptionsList(allProducts.slice(0, 3));
  };

  $('.header-search__input')
    .focus(function(e) {
      const searchingProduct = e.target.value;
      if (!showAllSearchingProductsOptionsActivated) {
        showSearchingProductsOptions();
        getSearchingProductsOptionsList(searchingProduct);
      }
    })
    .blur(function() {
      hideSearchingProductsOptions();
      showAllSearchingProductsOptionsActivated = false;
    });

  $(document).on('click', '.header-search__input-paragraph--all', function() {
    showSearchingProductsOptions();
    searchingProductsOptionsList(allProducts);
    showAllSearchingProductsOptionsActivated = true;
    $('.header-search__input').focus();
  });

  $('.header-search__input').keyup(function(e) {
    const searchingProduct = e.target.value;
    $('.header-search__input-options').empty();
    getSearchingProductsOptionsList(searchingProduct);
  });

  // rozwijane menu produktów

  $('.header-products__item').on({
    mouseenter: function(e) {
      const width = $(window).width();
      const itemPositionX = e.pageX;
      if (width / 2 > itemPositionX) {
        $('.header-products__list').addClass('header-products__list--left');
        $('.products-list__image').addClass('products-list__image--second');
      } else {
        $('.header-products__list').addClass('header-products__list--right');
        $('.products-list__image').addClass('products-list__image--first');
      }
    },
    mouseleave: function() {
      $('.header-products__list').removeClass('header-products__list--left');
      $('.header-products__list').removeClass('header-products__list--right');
      $('.products-list__image').removeClass('products-list__image--second');
      $('.products-list__image').removeClass('products-list__image--first');
      $('.products-list__image').removeClass('products-list__image--show');
    }
  });

  $('.header-products__item').click(function() {
    const productsCategoriesToggleContainer = $(this).children(
      '.header-products__list--mobile'
    );
    const productsCategoriesToggleElement = $(this).children(
      '.header-products__plus'
    );
    const productsCategoriesToggleValue = $(this)
      .children('.header-products__plus')
      .text();
    const width = $(window).width();

    if (width < 880) {
      productsCategoriesToggleContainer.slideToggle(1);
      if (productsCategoriesToggleValue === '+') {
        productsCategoriesToggleElement.text('-');
        productsCategoriesToggleContainer.css('display', 'flex');
      } else {
        productsCategoriesToggleElement.text('+');
      }
    }
  });

  $('.products-list__name').on({
    mouseenter: function() {
      const width = $(window).width();
      if (width >= 1173) {
        $('.products-list__image').addClass('products-list__image--show');
        //tu bedzie zmiana urla img
      }
    }
  });

  $('.header-products__category').click(function() {
    $('.header-products__container').slideToggle();
    const productsCategoriesToggle = $('.header-products__title--plus').text();

    if (productsCategoriesToggle === '+') {
      $('.header-products__title--plus').text('-');
    } else {
      $('.header-products__title--plus').text('+');
    }
  });
});
