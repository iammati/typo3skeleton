/**
 * @function App.Utility.RemoveHashUtility
 * @description Removes the entire hash of the location.href and updates it in the URI bar.
 * 
 * Credits: https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r#5298684
 * 
 * @returns {void}
 */
App.Utility.RemoveHashUtility = () => {
    let scrollV,
        scrollH,
        loc = window.location;

    if ('pushState' in history) {
        history.pushState("", document.title, loc.pathname + loc.search);
    } else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}
