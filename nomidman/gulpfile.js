var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sass = require ('gulp-sass');
var uncss = require('gulp-uncss');
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync');

gulp.task('css', function () {
  return gulp.src('css/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    
    
    
    
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        port: 8080
    });

    gulp.watch(["css/*"],  ['css']);
    gulp.watch("*.html").on('change', browserSync.reload);

});

gulp.task('default', ['server']);
