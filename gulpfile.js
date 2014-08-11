var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css'),
uglifyJS = require('gulp-uglifyjs'),
concat = require('gulp-concat');
 
gulp.task('default', function() {

	gulp.src('./src/css/*.css')
	    .pipe(concat('styles.css'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('./css'));

	gulp.src('./src/js/*.js')
	    .pipe(concat('apps.js'))
	    .pipe(uglifyJS())
	    .pipe(gulp.dest('./js'));

});