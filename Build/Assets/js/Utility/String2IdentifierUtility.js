/**
 * @function App.Utility.String2IdentifierUtility
 * @description Converts a given string, e.g. 'Welcome to' into 'welcome-to', an identifier.
 *              Credits @ https://stackoverflow.com/a/48000411
 * 
 * @param {*} string The string to be converted into an identifier.
 * @param {*} and Optionally. The delimeter which can be used to replace ampersand.
 * 
 * @returns {string}
 */
App.Utility.String2IdentifierUtility = (string, and = '-') => {
    return string.toString()                                                     // Convert to string
        .normalize('NFD')                                                        // Change diacritics
        .replace(/[\u0300-\u036f]/g, '')                                         // Remove illegal characters
        .replace(/\s+/g, '-')                                                    // Change whitespace to dashes
        .toLowerCase()                                                           // Change to lowercase
        .replace(/&/g, and)                                                      // Replace ampersand
        .replace(/[^a-z0-9\-]/g, '')                                             // Remove anything that is not a letter,
                                                                                 // -> number or dash
        .replace(/-+/g, '-')                                                     // Remove duplicate dashes
        .replace(/^-*/, '')                                                      // Remove starting dashes
        .replace(/-*$/, '');                                                     // Remove trailing dashes
};
