App.Events.WindowKeyDownEvent = () => {
    $(window).off('keydown');

    $(window).on('keydown', (e) => {
        App.Events.WindowKeyDownEvent.fn(e);
    });
};

App.Events.WindowKeyDownEvent.fn = (e) => {
    let char = String.fromCharCode(e.which).toLowerCase();

    if (e.ctrlKey && char == 's') {
        // do something when CTRL + S has been pressed

        e.preventDefault();
        return false;
    }
};
