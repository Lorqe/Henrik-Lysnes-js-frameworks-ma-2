# Henrik-Lysnes-js-frameworks-ma-2
jQuery Slider Plugin

# Getting started
The main.js file is what creates our jQuery slider, on line 35 you will find the following code:

'jQuery(window).on('load', function() {'
  '$('.smart_gallery').MySlider(3000);'
'})'

The .MySlider(x) can be changed to set your own time for each image in miliseconds.

# How to show your slider
In the index.html document you can see the '<ul id=""my_slider">' using this will fire up our slideshow!


# How to insert your images
The images are in a background on the listed images so that we can tackle background position and sizes in the css document.
This makes the slider more responsive.
