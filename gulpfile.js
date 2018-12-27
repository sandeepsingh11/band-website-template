var gulp = require('gulp');
var sass = require('gulp-sass')
sass.compiler = require('node-sass')

// set up sass gulp
gulp.task('sass', function () {
  return gulp.src('./styles/style.sass') // source file
    .pipe(sass()) // compile
    .pipe(gulp.dest('./styles')) // output file
});

gulp.task('sassy', function () {
	gulp.watch('./styles/style.sass', gulp.series('sass'));
});