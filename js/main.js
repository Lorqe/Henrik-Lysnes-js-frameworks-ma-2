(function($) {
    $.fn.MySlider = function(interval) {
        var slides;
        var amount;
        var i;

        function run() {
            // Hide and show images
            $(slides[i]).fadeOut(1000);
            i++;

            // Go back to first slide
            if(i >= amount) i = 0;
            $(slides[i]).fadeIn(1000);

            // loop
            setTimeout(run, interval);

        }

        // Variables 

        slides = $('#my_slider').children();
        cnt = $('#counter');
        amount = slides.length;
        i = 0;

        setTimeout(run, interval);

    };
}) (jQuery);

// Custom init

jQuery(window).on('load', function() {
    $('.smart_gallery').MySlider(3000);
})