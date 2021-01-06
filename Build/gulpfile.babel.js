/**
 * Requiring and making an instance of GulpClass.
 */
const GulpClass = require("./Gulp/Gulp.js");
const GulpInstance = new GulpClass;

/**
 * Configuring the GulpInstance - adding sources.
 */
GulpInstance.addSource("build", "./");
GulpInstance.addSource("input", "Assets/");
GulpInstance.addSource("output", "../packages/site_frontend/Resources/Public/");
GulpInstance.addSource("nodeModules", "node_modules/");
GulpInstance.addSource("fileName", "app.min");
GulpInstance.addSource("rev", "../public/rev-manifest.json");
GulpInstance.addSource("packages", "Packages/");

/**
 * Adding required node_modules & Packages.
 */
GulpInstance.addNodeModule("jquery/dist/jquery.min.js");

GulpInstance.revInBuildMode = false;


/**
 * Build and Deploy Tasks for CSS / JS.
 */
const gulp = GulpInstance.gulp;

const ScssTaskClass = require("./Gulp/Tasks/ScssTask.js");
const JsTaskClass = require("./Gulp/Tasks/JsTask.js");
const MainTaskClass = require("./Gulp/Tasks/MainTask.js");

const ScssTask = GulpInstance.makeInstance(ScssTaskClass, GulpInstance);
const JsTask = GulpInstance.makeInstance(JsTaskClass, GulpInstance);
const MainTask = GulpInstance.makeInstance(MainTaskClass, GulpInstance);

gulp.task("css:build", ScssTask.call("build"));
gulp.task("js:build", JsTask.call("build"));

gulp.task("css:deploy", ScssTask.call("deploy"));
gulp.task("js:deploy", JsTask.call("deploy"));

gulp.task("sync:packages", MainTask.call("packages"));

/**
 * Watch-Task Configuration - Build only.
 */
gulp.task("watch:build:task", () => {
	gulp.watch(GulpInstance.getSource("input", "scss/**/*.{sass,scss}"), gulp.series("css:build"));
	gulp.watch(GulpInstance.getSource("input", "js/**/*.js"), gulp.series("js:build"));
});

gulp.task("watch:build", gulp.series("css:build", "js:build",
	gulp.parallel("watch:build:task")
));

gulp.task("build", gulp.series("watch:build"));
gulp.task("deploy", gulp.series("css:deploy", "js:deploy"));



// gulp.task("js:watch", () => {
// 	gulp.watch(GulpInstance.getSource("input", "js/**/*.js"), gulp.series("js:build"));
// });
