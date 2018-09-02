var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('css/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('css/style.sass', ['sass']);
});