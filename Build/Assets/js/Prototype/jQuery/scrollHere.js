/**
 * @function scrollHere
 * @description Scrolls to this element.
 * 
 * @param {number} adjustment
 * @param {string|number} transition
 * 
 * @returns {void}
 */
$.fn.scrollHere = function(adjustment = 0, transition = 'smooth') {
    if (!$(this).exists()) {
        console.warn('App.js: The element passed here doesn\'t exists!');

        return null;
    }

    let elementTop = $(this).offset().top + adjustment;

    $('html, body').animate({
        scrollTop: elementTop
    }, transition);
};
