/**
 * @function App.Resolver.CEResolver
 * @description Retrieves the configured data of a CE by its CType.
 * 
 * @param {String} ctype
 * 
 * @returns {null|Object}
 */
App.Resolver.CEResolver = ctype => {
    let data = null;

    App.ContentElements.forEach(_data => {
        if(_data.id == ctype) {
            data = _data;

            return false;
        }
    });

    return data;
};
