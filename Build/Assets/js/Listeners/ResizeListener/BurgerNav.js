// Simply triggers - if active - the $burger at a 'xl'-Breakpoint
App.Listeners.ResizeListener.push(
    width => {
        if (Breakpoint.upEquals('xl') && Elements.$header.hasClass('burger-active')) {
            Elements.$burger.trigger('click');
        }
    }
);
