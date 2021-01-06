App.Listeners.BreakpointChangeListener = [
    view => {
        // do something here...
    }
];

App.Listeners.BreakpointChanged = () => {
    App.Listeners['BreakpointChangeListener'].forEach(callback => {
        return callback(App.getVar('VIEW'));
    });
};
