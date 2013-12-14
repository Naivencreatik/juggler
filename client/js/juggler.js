$(document).ready(function(){
    $window = $(window);

    $('section[data-type="slide"]').each(function(){
        var $bgobj = $(this); // assigning the object
                        
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed') - 100);
            var coords = '50% '+ yPos + 'px';

            $bgobj.css({ backgroundPosition: coords });
        });
    });

    // var options = { videoId: '-yHAAel9hhw', repeat: true, mute: false };

    // $('#home').tubular(options);
});

document.createElement("section");