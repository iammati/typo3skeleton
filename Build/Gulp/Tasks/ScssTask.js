const DefaultTask = require('./DefaultTask');

module.exports = class ScssTask extends DefaultTask {
    constructor(Gulp) {
        super(Gulp);

        this.buildSassOpts = {
            outputStyle: 'compact',
            errLogToConsole: true,
            processImport: true
        };

        this.deploySassOpts = {
            outputStyle: 'compressed',
            errLogToConsole: true,
            processImport: true
        };
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
     * @description Deletes all files inside the /Resources/Public/css/*.
     * 
     * @returns {void}
     */
    clean = () => {
        this.action('sass-del');
    }

    /**
     * @function build
     * @description Calls the clean function and builds the app.min.css for this application by
     * concatenating all .scss-files inside the source (recursively).
     * 
     * @returns {Function}
     */
    build = () => {
        this.clean();

        this.hook('before-build');

        const r = this.Gulp.src(
            Array.prototype.concat(
                this.GulpInstance.getSource('input', 'scss/main.scss'),
                '!' + this.GulpInstance.getSource('input', 'scss/ContentElements/main.scss')
            )
        )

            .pipe(this.action('sass', this.buildSassOpts))
            .pipe(this.action('sass-concat'))
            .pipe(this.action('sass-minify'), this.buildSassOpts)
            .pipe(this.action('sass-dest'))
            .pipe(this.GulpInstance.urlAdjuster({
                prepend: '/typo3conf/ext/site_frontend/Resources/Public/'
            }))
            ;

        this.hook('after-build');

        return r;
    }

    /**
     * @function buildCEs
     * @description The same as above just related for the yarn buildCEs task. Will build an unique
     * CSS file for each SCSS file provided inside the source.
     * 
     * @returns {Function}
     */
    buildCEs = () => {
        this.clean();

        return this.Gulp.src('*.scss')
            .pipe(this.action('sass', this.buildSassOpts))
            .pipe(this.action('sass-minify'), this.buildSassOpts)
            .pipe(this.action('sass-dest'))
            ;
    }

    /**
     * @function deploy
     * @description Calls the clean function and builds the app.min.css for this application by
     * concatenating all .scss-files inside the source (recursively) and minifies the output by running the minify.
     * 
     * @returns {Function}
     */
    deploy = () => {
        this.clean();

        this.hook('before-deploy');

        const r = this.Gulp.src(
            this.GulpInstance.getSource('input', 'scss/main.scss')
        )

            .pipe(this.action('sass', this.deploySassOpts))
            .pipe(this.action('sass-concat'))
            .pipe(this.action('sass-minify'), this.deploySassOpts)
            .pipe(this.action('sass-dest'))
            ;

        this.hook('after-deploy');

        return r;
    }

    /**
     * @function deployCEs
     * @description The same as buildCEs, just related for the yarn deployCEs task. Will additionally
     * minify the generated ce_*.css-files.
     * 
     * @returns {Function}
     */
    deployCEs = () => {
        this.clean();

        return this.Gulp.src(
            this.GulpInstance.getSource('input', 'scss/ContentElements/main.scss')
        )

            .pipe(this.action('sass', this.deploySassOpts))
            .pipe(this.action('sass-concat'))
            .pipe(this.action('sass-minify'), this.deploySassOpts)
            .pipe(this.action('sass-dest'));
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
