/**
 * @function App.Resolver.CEirreResolver
 * @description Retrieves the configured data of an IRRE-CE by its CType.
 * 
 * @param {String} ctype
 * 
 * @returns {null|Object}
 */
App.Resolver.CEirreResolver = ctype => {
    let data = null;

    App.ContentElements.IRREs.forEach(_data => {
        if(_data.id == ctype) {
            data = _data;

            return false;
        }
    });

    return data;
};
