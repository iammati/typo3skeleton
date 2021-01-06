App.Listeners.ResizeListener = [
    // 
];

App.Listeners.ResizedListener = () => {
    App.Listeners['ResizeListener'].forEach(callback => {
        return callback(App.getWidth());
    });
};
