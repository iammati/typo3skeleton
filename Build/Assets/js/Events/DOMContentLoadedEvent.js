let Elements = null;
let Page = null;

App.Events.DOMContentLoadedEvent = () => {
    // Creating the Elements and Page instances
    Elements = new ElementsHandler;
    Page = new PageHandler;

    // If there's an anchor defined it'll scroll down here and purge the hash from the URI here
    // using the HistoryAPI by the browser
    App.Handler.AnchorHandler();

    // Iterating through all existing App.ContentElements
    // and calling their callbacks only if the required element
    // exists in the current client's page
    App.ContentElements.forEach(ceData => {
        const id = ceData.id;
        const callback = ceData.callback;

        if (Elements.exists(id)) {
            callback(id, ceData);
        }
    });

    // Same as above just splitted as IRREs for an easier overview
    App.ContentElements.IRREs.forEach(irreData => {
        const id = irreData.id;
        const callback = irreData.callback;

        if (Elements.exists(id)) {
            callback(id, irreData);
        }
    });

    // Loading/registering all window-related events
    App.Events.WindowLoadEvent();
    App.Events.WindowScrollEvent();
    App.Events.WindowResizeEvent();

    // Init of a view, if defined (e.g. 'index')
    if (App.isNotUndefined(App.Views[App.view])) {
        App.Views[App.view]();
    }

    // Registration of DOM-Click event-listeners
    App.Events.RegisterDOMClickEvents();
};
