let App = new Core();

App.Events = {};
App.Handler = {};
App.Utility = {};
App.Validator = {};
App.Views = {};
App.Listeners = {};
App.Resolver = {};
App.Inits = {};

App.ContentElements = [];
App.ContentElements.IRREs = [];

/**
 * DOMContentLoaded Event.
 * Initializing the core and the actual application.
 */
$(() => {
    App.init();
});
