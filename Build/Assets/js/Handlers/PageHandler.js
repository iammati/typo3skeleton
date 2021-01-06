class PageHandler
{
    /**
     * @type {boolean}
     * @description Rootpage state of the current TYPO3 page
     */
    rootPage = false

    constructor() {
        if(Elements.$body.data('isrootpage')) {
            this.rootPage = true;
        }
    }

    /**
     * @function isRootPage
     * @description Checks if the page is a root page
     * 
     * @returns {boolean}
     */
    isRootPage = () => this.rootPage

    /**
     * Checks whether the provided browser name is the client's current browser
     * 
     * @param {string} browser
     * 
     * @returns {boolean}
     */
    isBrowser = browser => {
        let isBrowser = false;
            browser = browser.toLowerCase();

        switch (browser) {
            case 'firefox':
                isBrowser = navigator.userAgent.search('Firefox');
                break;
            default:
                break;
        }

        return isBrowser === true;
    }
}
