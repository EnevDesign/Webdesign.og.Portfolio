(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 100
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    
    
    // CUSTOM JQUERY SCRIPTING

    // 'Explore' buttons for each project - Hides/shows the featured project version
    $(".demo-showcase").hide(); //hides all featured versions at the start, so that no featured projects are visible. Doing it through JS means that display-options are retained, when you call show()/fadeIn().
    
    // PROJECT 1 BUTTON
    $("#demo-1-btn").click(function () {
        $(".demo-showcase").hide();         //hide all featured project - so that if another project was featured, then it would be hidden before this one is shown
        $(".demo").show();                  //resets all projects to baseline
        $("#demo-1").fadeOut(200);          //quickly fades the clicked baseline image
        $("#demo-1-active").fadeIn(500);    //and replaces it with the featured project with a carousel of images/videos/sound
    });
    // PROJECT 2 BUTTON
    $("#demo-2-btn").click(function () {
        $(".demo-showcase").hide();
        $(".demo").show();
        $("#demo-2").fadeOut(200);          
        $("#demo-2-active").fadeIn(500);    
    });
    // PROJECT 3 BUTTON
    $("#demo-3-btn").click(function () {
        $(".demo-showcase").hide();
        $(".demo").show();
        $("#demo-3").fadeOut(200);          
        $("#demo-3-active").fadeIn(500);    
    });
    // PROJECT 4 BUTTON
    $("#demo-4-btn").click(function () {
        $(".demo-showcase").hide();
        $(".demo").show();
        $("#demo-4").fadeOut(200);          
        $("#demo-4-active").fadeIn(500);    
    });

    //Plays and pauses a video when you click/tap it
    $('video').click(function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });

})(jQuery); // End of use strict
