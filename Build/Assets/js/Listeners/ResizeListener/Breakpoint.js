App.Listeners.ResizeListener.Breakpoint = width => {
    // Breakpoint-View logic
    let view = 'xs';

    if (width >= (Breakpoint().breakpointList.sm - .02)) {
        view = 'sm';
    }

    if (width >= (Breakpoint().breakpointList.md - .02)) {
        view = 'md';
    }

    if (width >= (Breakpoint().breakpointList.lg - .02)) {
        view = 'lg';
    }

    if (width >= (Breakpoint().breakpointList.xl - .02)) {
        view = 'xl';
    }

    if (App.getView() != view || App.isNull(App.getView())) {
        App.setView(view);
        App.Listeners.BreakpointChanged(view);
    }
};
