/**
 * @class Core
 * @description 
 *  Core of this application.
 *  Register utilities, components etc. respectively where they belong.
 *  Allowed to extend it for more custom helper functions or more-likely
 *  core functions if necessary.
 * 
 * @author Mati<mati_01@icloud.com>
 */
class Core
{
    /**
     * @function constructor
     * @description Constructor which contains default (empty) variables for this instance only.
     * 
     * @returns {void}
     */
    constructor()
    {
        this.variables = [];

        if (typeof view != 'undefined') {
            this.view = view;
        } else {
            this.view = 'UNKNOWN';
        }

        this.Environment = 'Production';
    }

    /**
     * @function init
     * @description Initialization of the core.
     *              MUST BE called inside main.js inside of a window-onload event or ($) jQuery-ready alternative.
     * 
     * @returns {void}
     */
    init = () => {
        /**
         * Makes sure if the given server's location-hostname is an intern docker
         * by checking if it ends with '.ddev.site' -> turns into Development mode
         * - default is always Production.
         */
        let locationHost = location.host;

        if (locationHost.endsWith('.ddev.site') || locationHost.endsWith('.lan')) {
            this.Environment = 'Development';
        }

        /**
         * The initialization of default variables.
         */
        this.initVars();

        /**
         * Loading the entire Application by calling the DOMContentLoaded-Event
         */
        App.Events.DOMContentLoadedEvent();
    }

    /**
     * @function initVars
     * @description Callback when the initialization of this applications starts.
     * 
     * @returns {void}
     */
    initVars = () => {
        // Initialization of VIEW.
        this.setVar('VIEW', null);

        this.setView(this.getVar('VIEW'));

        // Initialization of WIDTH.
        // Globally and automatically sets the window's width.
        this.setVar('WIDTH', $(window).outerWidth());

        this.setWidth(this.getVar('WIDTH'));

        // Initialization of BREAKPOINT_LIST.
        // Default Breakpoint declarations.
        // Those should be the defaults for Bootstrap 4
        // - the 0.02px difference is handled by the BreakpointUtility -> see https://stackoverflow.com/a/51567792
        this.setVar("BREAKPOINT_LIST", {
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        });
    }

    /**
     * @function setVar
     * @description Sets of this instance App.variables a variable with a key = value behaivour.
     * 
     * @param {String} key
     * @param {String} value
     * 
     * @returns {void}
     */
    setVar = (key, value) => this.variables[key] = value

    /**
     * @function addVar
     * @description Adds to an existing key of this instance App.variables a subvariable with a key = value behaivour including given parentKey.
     * 
     * @param {String} parentKey
     * @param {String} key
     * @param {String} value
     * 
     * @returns {void}
     */
    addVar = (parentKey, key, value) => this.variables[parentKey][key] = value

    /**
     * @function getAllVars
     * @description Returns a list of this.variables.
     * 
     * @returns {Array}
     */
    getAllVars = () => this.variables

    /**
     * @function getVar
     * @description Returns the value of an existing variable by its key/identifier.
     * 
     * @param {String} key
     * 
     * @returns {void|object}
     */
    getVar = key => this.variables[key]

    /**
     * @function getView
     * @description Fetch the current Breakpoint-View.
     * 
     * @returns {String}
     */
    getView = () => this.view

    /**
     * @function setView
     * @description Sets the current Breakpoint-View.
     * 
     * @param {String} view 
     * 
     * @returns {void}
     */
    setView = view => {
        this.view = view;

        App.setVar('VIEW', view);
    }

    /**
     * @function getWidth
     * @description Fetch the current window's width.
     * 
     * @returns {number}
     */
    getWidth = () => this.width

    /**
     * @function setWidth
     * @description Sets the current window's width.
     * 
     * @param {number} width 
     * 
     * @returns {void}
     */
    setWidth = width => {
        this.width = width;

        App.setVar('WIDTH', width);
    }

    /**
     * @function isDev
     * @description Handles if the environment is on Development.
     * 
     * @returns {boolean}
     */
    isDev = () => (this.Environment == 'Dev' || this.Environment == 'Development')

    /**
     * @function isDevelopment
     * @description Handles if the environment is on Development.
     * 
     * @returns {boolean}
     */
    isDevelopment = () => (this.Environment == 'Dev' || this.Environment == 'Development')

    /**
     * @function isProd
     * @description Handles if the environment is on Production.
     * 
     * @returns {boolean}
     */
    isProd = () => (this.Environment == 'Prod' || this.Environment == 'Production')

    /**
     * @function isProduction
     * @description Handles if the environment is on Production.
     * 
     * @returns {boolean}
     */
    isProduction = () => (this.Environment == 'Prod' || this.Environment == 'Production')

    /**
     * @function isUndefined
     * @description Handles conditions for variable if it's undefined.
     * 
     * @param {mixin} variable The variable of this function.
     * 
     * @returns {boolean}
     */
    isUndefined = variable => (typeof variable == undefined || typeof variable == 'undefined' || variable == undefined || variable == 'undefined')

    /**
     * @function isNotUndefined
     * @description Handles conditions for variable if it's not undefined.
     * 
     * @param {mixin} variable The variable of this function.
     * 
     * @returns {boolean}
     */
    isNotUndefined = variable => (typeof variable != undefined && typeof variable != 'undefined' && variable != undefined && variable != 'undefined')

    /**
     * @function isNull
     * @description Handles conditions for variable if it's null.
     * 
     * @param {mixin} variable The variable of this function.
     * 
     * @returns {boolean}
     */
    isNull = variable => (variable === null)

    /**
     * @function isNotNull
     * @description Handles conditions for variable if it's not null.
     * 
     * @param {mixin} variable The variable of this function.
     * 
     * @returns {boolean}
     */
    isNotNull = variable => (variable !== null)

    /**
     * @function isFunction
     * @description Checks if the given variable is a function.
     * 
     * @param {mixin} variable The variable of this function.
     * 
     * @returns {boolean}
     */
    isFunction = variable => (typeof variable == 'function')

    /**
     * @function isNotFunction
     * @description Checks if the given variable is not a function.
     * 
     * @param {mixin} variable The variable of this function.
     * 
     * @returns {boolean}
     */
    isNotFunction = variable => (typeof variable !== 'function')

    /**
     * Checks if a given element (by selector) exists or not.
     * 
     * @function elExists
     * 
     * @param {element} selector The selector for this function.
     * 
     * @returns {boolean}
     */
    elExists = (selector) => ($(selector).length > 0 ? true : false)

    /**
     * @function strContains
     * @description Checks if the given string contains a specific (given) char.
     * 
     * @param {String} string
     * @param {String} char
     * @param {boolean} ignoreCamelCase
     * 
     * @returns {boolean}
     */
    strContains = (string, char, ignoreCamelCase = false) => {
        var parameter = '';

        if (this.isUndefined(string)) {
            parameter = 'string';
        }
        if (this.isUndefined(char)) {
            parameter = 'char';
        }

        if (parameter != '') {
            console.error('App: strContains(string, char) can\'t be called without a ' + parameter + '-parameter!');

            return;
        }

        if (ignoreCamelCase) {
            return (
                ~(string.toLowerCase()).indexOf(char.toLowerCase())
            ) ? true : false;
        }

        return (~string.indexOf(char)) ? true : false;
    }

    /**
     * @function strReplace
     * @description Replaces a specific part of a string with a given value.
     * 
     * @param {String} string
     * @param {String} replace
     * 
     * @returns {String}
     */
    strReplace = (string, searchValue, replaceValue) => string.replace(searchValue, replaceValue, string)

    /**
     * Returns whether an array has the given item
     * 
     * @function inArray
     * 
     * @param {string|object} item
     * @param {Array} array
     * 
     * @returns {boolean}
     */
    inArray = (item, array) => (!!~$.inArray(item, array))

    /**
     * @function ucfirst
     * @description Uppercase first character of the given string and returns that back.
     * 
     * @param {String} string The string to be upper-cased.
     * 
     * @returns {String}
     */
    ucfirst = string => (string.charAt(0).toUpperCase() + string.slice(1))

    /**
     * @function CE
     * @description Builds dynamically the correct selector-string by the provided ctype.
     * 
     * @param {String} ctype
     * 
     * @returns {String}
     */
    CE = ctype => {
        // If the chars at the offset of 0-2 of the string ARE NOT 'ce_' it will be prepended to the ctype-var
        if (!ctype.charAt(0) == 'c' && !ctype.charAt(1) == 'e' && !ctype.charAt(2) == '_') {
            ctype = 'ce_' + ctype;
        }

        return 'div[data-ctype="' + ctype + '"]';
    }

    /**
     * @function findCEByCType
     * 
     * @param {String} ctype
     * 
     * @returns {String}
     */
    findCEByCType = ctype => {
        ctype = this.CE(ctype);

        return $(ctype);
    }

    /**
     * @function ceError
     * @description Easier to use for custom error handling inside CEs.
     * 
     * @param {String} ctype
     * @param {String} message
     * 
     * @returns {Boolean}
     */
    ceError = (ctype, message) => {
        console.error(ctype + '.js: ' + message);

        return false;
    }
}
