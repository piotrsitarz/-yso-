  //wylaczanie ciasteczek

  jQuery(function ($) {
      $(".footer-cookies__button").on("click", function (e) {
          $(this).parent().css('display', 'none');
      });

      //rozijwany footer
      $(".toggle-about").click(function () {
          if (window.innerWidth < 500) {
              $(".toggle-about-item").slideToggle();
          }
      });

      $(".toggle-information").click(function () {
          if (window.innerWidth < 500) {
              $(".toggle-information-item").slideToggle();
          }
      });

      $(".toggle-client").click(function () {
          if (window.innerWidth < 500) {
              $(".toggle-client-item").slideToggle();
          }
      });

      $(".toggle-socials").click(function () {
          if (window.innerWidth < 500) {
              $(".toggle-socials-item").slideToggle();
          }
      });

      $(".toggle-contact").click(function () {
          if (window.innerWidth < 500) {
              $(".toggle-contact-item").slideToggle();
          }
      });

  });