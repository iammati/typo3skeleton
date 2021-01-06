const DefaultTask = require('./DefaultTask');

module.exports = class JsTask extends DefaultTask {
    constructor(Gulp) {
        super(Gulp);
    }

    /**
     * @function call
     * @description Handles which task (build or deploy) should be called.
     * 
     * @param {String} type
     * 
     * @returns {Function|undefined}
     */
    call = (type) => {
        return this[type];
    }

    /**
     * @function clean
     * @description Deletes all files inside the /Resources/Public/js/*.
     * 
     * @returns {void}
     */
    clean = () => {
        this.action('js-del');
    }

    /**
     * @function build
     * @description Calls the clean function and builds the app.min.js for this application by
     * concatenating all .js-files inside the source (recursively).
     * 
     * @returns {Function}
     */
    build = () => {
        this.clean();

        this.hook('before-build');

        const r = this.Gulp.src(
            Array.prototype.concat(
                this.GulpInstance.getNodeModules(),
                this.GulpInstance.getPackages(),

                this.GulpInstance.getSource('input', 'js/**/*.js')
            )
        )

            .pipe(this.action('js-concat'))
            .pipe(this.action('js-dest'))
        ;

        this.hook('after-build');

        return r;
    }

    /**
     * @function deploy
     * @description Calls the clean function and builds the app.min.js for this application by
     * concatenating all .js-files inside the source (recursively) and minifies the output by running the terser.
     * 
     * @returns {Function}
     */
    deploy = () => {
        this.clean();

        this.hook('before-deploy');

        const r = this.Gulp.src(
            Array.prototype.concat(
                this.GulpInstance.getNodeModules(),
                this.GulpInstance.getPackages(),

                this.GulpInstance.getSource('input', 'js/**/*.js')
            )
        )
            .pipe(this.action('js-concat'))
            .pipe(this.action('js-terser'))
            .pipe(this.action('js-dest'))
        ;

        this.hook('after-deploy');

        return r;
    }

    /**
     * @function hook
     * @description Custom hook-call to handle anything before and after build/deploy.
     * 
     * @param {String} type
     */
    hook = type => {
        // 
    }
};
