App.Events.WindowResizeEvent = () => {
    App.Events.WindowResizeEvent.fn();

    $(window).off('resize');

    $(window).on('resize', () => {
        App.Events.WindowResizeEvent.fn();
    });
};

App.Events.WindowResizeEvent.fn = () => {
    const width = $(window).outerWidth();
    App.setWidth(width);

    App.Listeners.ResizeListener.Breakpoint(width);
    App.Listeners.ResizedListener();
};
