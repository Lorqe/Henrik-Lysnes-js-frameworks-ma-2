# Henrik-Lysnes-js-frameworks-ma-2
jQuery Slider Plugin

# Getting started
The main.js file is what creates our jQuery slider, on line 35 you will find the following code:

`jQuery(window).on('load', function() {`
  `$('.smart_gallery').MySlider(3000);`
`})`

The .MySlider(x) can be changed to set your own time for each image in miliseconds.

# How to show your slider
In the index.html document you can see the `<ul id=""my_slider">` using this will fire up our slideshow!


# How to insert your images
The images are in a background on the listed images so that we can tackle background position and sizes in the css document.
This makes the slider more responsive.

# MIT License

MIT License

Copyright (c) 2020 Henrik Lysnes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
