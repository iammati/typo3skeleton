App.Events.DOMClickEvent = [
    () => {
        // 
    }
];

App.Events.RegisterDOMClickEvents = () => {
    App.Events['DOMClickEvent'].forEach(callback => {
        return callback();
    });
};
