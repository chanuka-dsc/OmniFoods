/* global document */
/*jslint browser: true*/
/*eslint-env jquery*/
/*global $ */
/*jslint
    bitwise, node
*/

$('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
  offset: '60px;'
});
