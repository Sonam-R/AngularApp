var gulp = require('gulp');

var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var es = require('event-stream');
var stylus = require('gulp-stylus');

gulp.task('jshint', function() {
    gulp.src('./app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});



gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(bs.reload({stream: true}));
});



gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./app/scss/*.scss", ['sass']);
    gulp.watch("./app/*.html").on('change', bs.reload);
});





gulp.task('default',['jshint','sass','browser-sync','watch']);
