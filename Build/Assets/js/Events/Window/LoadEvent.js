App.Events.WindowLoadEvent = () => {
    if ($('> *', Elements.$content).length == 0) {
        Elements.$content.css('height', '100vh');
    }

    App.Listeners.LoadedListener();
};
