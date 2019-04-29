/*-------------------------------------------------------------------

01. Smooth Scroll
02. Navbar
03. Skil Progres
04. Work




*/

$(document).ready(function(){


    /* Smooth Scroll */
    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            window.location.hash = hash;
          });
        } 
    });
    /* End Smooth Scroll */


	/* Navbar ( Change Background & Logo )  */

    $(window).on("scroll",function () {

        var bodyScroll = $(window).scrollTop(),
            navbar = $(".navbar"),
            navbarCollapse = $(".navbar-collapse");
            navToggler = $(".navbar-toggler");
            navbarBrand = $(".navbar-brand");

        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            navbarCollapse.addClass("nav-collapse");
            navToggler.addClass("nav-toggler");
            navbarBrand.addClass("nav-brand");

        }else{
            navbar.removeClass("nav-scroll");
            navbarCollapse.removeClass("nav-collapse");
            navToggler.removeClass("nav-toggler");
            navbarBrand.removeClass("nav-brand");
        }
    });


        // close navbar-collapse when a  clicked
        $(".navbar-nav a").on('click', function () {
            $(".navbar-collapse").removeClass("show");
        });

    /* End Navbar */


    /* Skil Progres */
    $(window).on('scroll', function () {
        $(".skill-item-progress .progres").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
    /* End Skil Progres */


    /* Work */
    $(function () {
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.gallery').isotope({
            itemSelector: '.items'
        });

        var $gallery = $('.gallery').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on( 'click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
                $gallery.isotope({ filter: filterValue });
        });

        $('.filtering').on( 'click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');

        });            
    }); 
    /* End Work */

    /* Scroll To Top */
    var win = $(window),
        navbar = $('.navbar'),
        scrollUp = $(".scroll-up");

    win.on('scroll', function () {
        if ($(this).scrollTop() >= 600) {
            scrollUp.show(300);
        } else {
            scrollUp.hide(300);
        }
    });

        // Back To 0 Scroll Top body
        scrollUp.on('click', function () {
            $("html, body").animate({ scrollTop: 0}, 1000);
        });
    /* End Scroll To Top */

});