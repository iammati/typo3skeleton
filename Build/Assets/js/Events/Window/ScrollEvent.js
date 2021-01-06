App.Events.WindowScrollEvent = () => {
    $(window).off('scroll');

    $(window).on('scroll', () => {
        App.Events.WindowScrollEvent.fn();
    });

    App.Events.WindowScrollEvent.fn();
};

App.Events.WindowScrollEvent.fn = () => {
    let scrollTop = $(window).scrollTop();

    App.Listeners.WindowScrolled(scrollTop);
};
