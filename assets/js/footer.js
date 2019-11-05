  jQuery(function ($) {
      //wylaczanie ciasteczek
      $(".footer-cookies__button").on("click", function (e) {
          $(this).parent().css('display', 'none');
      });

      //rozijwany footer
      $(".toggle-about").click(function () {
          if (window.innerWidth < 600) {
              $(".toggle-about-item").slideToggle();
              $(this).attr('data-before', 'anything');
          }
      });

      $(".toggle-information").click(function () {
          if (window.innerWidth < 600) {
              $(".toggle-information-item").slideToggle();
          }
      });

      $(".toggle-client").click(function () {
          if (window.innerWidth < 600) {
              $(".toggle-client-item").slideToggle();
          }
      });

      $(".toggle-socials").click(function () {
          if (window.innerWidth < 600) {
              $(".toggle-socials-item").slideToggle();
          }
      });

      $(".toggle-contact").click(function () {
          if (window.innerWidth < 600) {
              $(".toggle-contact-item").slideToggle();
          }
      });

  });