App.Listeners.ScrollListener = [
    (scrollTop) => {
        if (scrollTop >= 100) {
            Elements.$header.addClass('scrolled');
        } else {
            Elements.$header.removeClass('scrolled');
        }
    }
];

App.Listeners.WindowScrolled = (scrollTop) => {
    App.Listeners['ScrollListener'].forEach(callback => {
        return callback(scrollTop);
    });
};
