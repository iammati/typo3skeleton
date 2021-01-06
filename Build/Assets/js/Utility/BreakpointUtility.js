App.Utility.BreakpointUtility = () => {
    return {
        view: App.getView(),
        breakpointList: App.getVar("BREAKPOINT_LIST")
    };
};

// Media-Query-likely condition.
// If the browser width is smaller than a view e.g. "lg".
App.Utility.BreakpointUtility.down = view => App.getWidth() < App.Utility.BreakpointUtility().breakpointList[view];
App.Utility.BreakpointUtility.downEquals = view => App.getWidth() <= App.Utility.BreakpointUtility().breakpointList[view];

// Media-Query-likely condition.
// If the browser width is greater than a view e.g. "lg".
App.Utility.BreakpointUtility.up = view => App.getWidth() > App.Utility.BreakpointUtility().breakpointList[view];
App.Utility.BreakpointUtility.upEquals = view => App.getWidth() >= App.Utility.BreakpointUtility().breakpointList[view];

// Checks if 2 given views (e.g. between("sm", "lg")) are between the current browser's width.
App.Utility.BreakpointUtility.between = (minView, maxView) => {
    const min = App.getVar[minView];
    const max = App.getVar[maxView];

    return App.getWidth().isBetween(min, max);
};
