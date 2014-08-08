var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css'),
concat = require('gulp-concat');
 
gulp.task('default', function() {

	gulp.src('./src/css/*.css')
	    .pipe(concat('styles.css'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('./css'));

});