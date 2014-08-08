var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css');
 
gulp.task('default', function() {

	gulp.src('./src/css/*.css')
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('./css'));

});