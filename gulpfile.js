var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css'),
uglifyJS = require('gulp-uglifyjs'),
concat = require('gulp-concat'),
imagemin = require('gulp-imagemin');
 
gulp.task('minify', function() {

	gulp.src('./src/css/*.css')
	    .pipe(concat('styles.css'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function() {

	gulp.src('./src/js/*.js')
	    .pipe(concat('apps.js'))
	    .pipe(uglifyJS())
	    .pipe(gulp.dest('./js'));
});

gulp.task('imagemin', function() {

	gulp.src('./src/images/*')
	    .pipe(imagemin())
	    .pipe(gulp.dest('./images'));
});

gulp.task('watch', function() {
    gulp.watch('./src/css/*.css', ['minify']);
    gulp.watch('./src/js/*.js', ['uglify']);
    gulp.watch('./src/images/*', ['uglify']);
});

gulp.task('default', ['imagemin','minify','uglify','watch']);