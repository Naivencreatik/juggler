$(document).ready( function() {
    var timer;  //timer for splash screen

    function intro() {
        var wh = $(window).height();
    
        $('#introduction').css({
            height: wh + 'px'
        });
    }

    intro();

    $(window).resize(function(){
        intro();
    });

    function scroll(){
        $("#boxscroll").niceScroll({
            cursorborder: "",
            cursorcolor: "#2b2b2b",
            cursorborderradius: 0,
            cursorwidth: 10,
            scrollspeed : 100,
            touchbehavior : true,
            boxzoom: false,
            autohidemode: false
        });
    }
    
    $('#main').hide();
    $("body").attr("id","boxscroll");
    
    //create splash screen animation
    function splashRotator(){
        var cur = $('#jSplash').children('.selected');
        var next = $(cur).next();
        
        if($(next).length != 0) {
            $(next).addClass('selected');
        } else {
            $('#jSplash').children('section:first-child').addClass('selected');
            next = $('#jSplash').children('section:first-child');
        }
            
        $(cur).removeClass('selected').fadeOut(800, function() {
            $(next).fadeIn(800);
        });
    }

    //calling jPreLoader
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '0',
        autoClose: true,

        splashFunction: function() {
            $('#jSplash').children('section').not('.selected').hide();
            $('#jSplash').hide().fadeIn(800);
            
            timer = setInterval(function() {
                splashRotator();
            }, 4000);
        }
    }, function() { //callback function
        clearInterval(timer);
        scroll();
        $('#main').fadeIn(500);
    });

    // Parallax effect
    // $('[data-type="slide"]').each(function(){
    //     var $window = $(window);
    //     var $bgobj = $(this); // assigning the object
                        
    //     $(window).scroll(function() {
    //         var yPos = -($window.scrollTop() / $bgobj.data('speed') * 10);
    //         var coords = yPos + 'px';

    //         $bgobj.css({ top: coords });
    //     });
    // });

    // for video youtube
    // var options = { videoId: '-yHAAel9hhw', repeat: true, mute: false };
    // $('#home').tubular(options);

    $('nav a').bind('click',function(event){
        event.preventDefault();
        var $anchor = $(this);
        //var key = $(".menu nav a").getAttribute('data-key').value;

        $('html, body').stop().animate({
            scrollTop:$($anchor.attr('href')).offset().top
        },1500,'easeInOutExpo');

        setTimeout(function(){
            window.location.hash = $anchor.attr('href');
        }, 500);
    });

    $('.openContact').on('click', function(event){
        event.preventDefault();
        $('#contact').toggle();

        $('nav ul li a').on('click', function() {
            $('#contact').toggle();
        });
    });
});

