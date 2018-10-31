var gulp = require('gulp');
var gcmq = require('gulp-group-css-media-queries');
var sass = require('gulp-sass');
 
gulp.task('css', function () {
  return gulp.src('css/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass', function () {
   gulp.watch(["css/*"],  ['css']);
});

gulp.task('default', ['sass']);