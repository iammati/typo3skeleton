/**
 * @function exists
 * @description Checks whether a jQuery-object element exists or not.
 * 
 * @returns {boolean}
 */
$.fn.exists = function() {
    return App.elExists($(this));
};
