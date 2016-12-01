'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['./styles.scss', './variablen.scss', './body', './list'] ['sass']);
    gulp.watch('./_variablen.scss', ['sass']);
    gulp.watch('./_body.scss', ['sass']);
    gulp.watch('./_list.scss', ['sass']);

});
