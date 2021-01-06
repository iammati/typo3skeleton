/**
 * Requiring and making an instance of GulpClass.
 */
const GulpClass = require("./../../../Gulp/Gulp.js");
const GulpInstance = new GulpClass;

/**
 * Configuring the GulpInstance - adding sources.
 */
GulpInstance.addSource("build", "./");
GulpInstance.addSource("input", "Assets/");
GulpInstance.addSource("output", "../../../../packages/site_frontend/Resources/Public/ContentElements/");
GulpInstance.addSource("nodeModules", "./../../../node_modules/");
GulpInstance.addSource("fileName", "app.min");
GulpInstance.addSource("packages", "Packages/");

/**
 * Adding required node_modules & Packages.
 */

GulpInstance.revInBuildMode = false;


/**
 * Build and Deploy Tasks for CSS.
 */
const gulp = GulpInstance.gulp;

const ScssTaskClass = require("./../../../Gulp/Tasks/ScssTask.js");
const ScssTask = GulpInstance.makeInstance(ScssTaskClass, GulpInstance);

gulp.task("css:build", ScssTask.call("buildCEs"));
gulp.task("css:deploy", ScssTask.call("deployCEs"));

/**
 * Watch-Task Configuration - Build only.
 */
gulp.task("watch:build:task", () => {
	gulp.watch("*.scss", gulp.series("css:build"));
});

gulp.task("watch:build", gulp.series("css:build",
	gulp.parallel("watch:build:task")
));

gulp.task("build", gulp.series("watch:build"));
gulp.task("deploy", gulp.series("css:deploy"));
