// Call the dependencies
var gulp = require('gulp'),
sass = require('gulp-sass'),
minifyCSS = require('gulp-minify-css'),
uglifyJS = require('gulp-uglifyjs'),
coffee = require('gulp-coffee'),
concat = require('gulp-concat'),
imagemin = require('gulp-imagemin'),
notify = require("gulp-notify");

// minify Task
gulp.task('minify', function() {

	// processes using sass, concat and minify the css files
	gulp.src('./src/css/*.scss')
		.pipe(sass())
	    .pipe(concat('styles.css'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('./css'))
	    .pipe(notify("minify task ok!"));
});

// uglify task
gulp.task('uglify', function() {

	// processes using CoffeeScript, concat and uglify the js(.coffee) files
	gulp.src('./src/js/*.coffee')
	    .pipe(coffee({bare: true}))
	    .pipe(concat('apps.js'))
	    .pipe(uglifyJS())
	    .pipe(gulp.dest('./js'))
	    .pipe(notify("uglify task ok!"));
});

// imagemin task
gulp.task('imagemin', function() {

	// optimize the images
	gulp.src('./src/images/*')
	    .pipe(imagemin())
	    .pipe(gulp.dest('./images'))
	    .pipe(notify("imagemin task ok!"));
});

// watch task
gulp.task('watch', function() {

	// keep watching the scss files and if there is any change, run the minify task
    gulp.watch('./src/css/*.scss', ['minify']);

	// keep watching the coffee files and if there is any change, run the uglify task
    gulp.watch('./src/js/*.coffee', ['uglify']);

	// keep watching the images and if there is any change, run the imagemin task
    gulp.watch('./src/images/*', ['imagemin']);
});

// default task runs imagemin, minify, uglify and watch tasks
gulp.task('default', ['imagemin','minify','uglify','watch']);