/**
 * This file SHOULD BE only containing prototypes (functions which are extending)
 * for Strings.
 * 
 * Current prototypes are:
 *  padL
 *  padR
 * 
 * Since 'this' context can't be used within ES6 arrow-functions,
 * Prototypes MUST BE declared using ES5 functions.
 */


String.prototype.padL = function(width, pad) {
    if (!width || width < 1) {
        return this;
    }
 
    if (!pad) {
        pad = ' ';
    }

    let length = width - this.length;

    if (length < 1) {
        return this.substr(0, width);
    }

    return (String.repeat(pad, length) + this).substr(0, width);
}

String.prototype.padR = function(width, pad) {
    if (!width || width < 1) {
        return this;
    }
 
    if (!pad) {
        pad = ' ';
    }

    let length = width - this.length;

    if (length < 1) {
        this.substr(0, width);
    }

    return (this + String.repeat(pad, length)).substr(0, width);
}
