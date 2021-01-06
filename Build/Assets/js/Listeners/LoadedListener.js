App.Listeners.LoadListener = [
    // 
];

App.Listeners.LoadedListener = () => {
    App.Listeners['LoadListener'].forEach(callback => {
        return callback();
    });
};
