import gulp from 'gulp';
import templateCache from 'gulp-angular-templatecache';
import livereload from 'gulp-livereload';
import config from '../config';

function build() {
    return gulp.src(config.globs.html)
        .pipe(templateCache('templates.js', {
            root: 'app',
            standalone: true
        }))
        .pipe(gulp.dest(config.paths.dist));
}

gulp.task('html2js', ['clean'], () => {
    return build();
});

gulp.task('html2js:watch', () => {
    return build().pipe(livereload());
});
