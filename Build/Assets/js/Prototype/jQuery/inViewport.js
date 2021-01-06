/**
 * @function inViewport
 * @description Determines if the given element - $(this) - is inside the client's viewport.
 * 
 * @returns {boolean}
 */
$.fn.inViewport = function() {
    if (!$(this).exists()) {
        return null;
    }

    let elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return (elementBottom > viewportTop && elementTop < viewportBottom);
};
