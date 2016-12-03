'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-Sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('assets/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['assets/styles.scss', 'assets/parials/*.scss'],['sass']);
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['assets/styles.scss', 'assets/partials/*.scss'],['sass']);
    gulp.watch(" *.html, 'assets/styles.scss', 'assets/partials/*.scss' ").on('change', browserSync.reload);
});

// Static server
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});