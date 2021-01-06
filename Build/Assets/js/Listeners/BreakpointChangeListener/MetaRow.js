App.Listeners.BreakpointChangeListener.push(
    view => {
        if (Breakpoint.downEquals('lg')) {
            $('#meta-row').appendTo('#sidenavigation > .items');
        }

        if (Breakpoint.up('lg')) {
            $('#sidenavigation > .items #meta-row').appendTo('#headernavigation > .container-fluid');
        }
    }
);
