'use strict';

let gulp = require('gulp'),
    rimraf = require('rimraf'),
    minify = require('gulp-minify'),
    sourcemaps = require('gulp-sourcemaps');

const { watch, series, parallel } = require('gulp');

const path = {
    build : 'build',
    src : 'src/lib.js',
    clean: 'build'
};

gulp.task('buildExample', () => {
    return gulp
        .src(path.src)
        .pipe(sourcemaps.init())
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build));
});

gulp.task('cleanExample', (cb) => {
    return rimraf(path.clean, cb);
});

gulp.task('build', gulp.series(
    'cleanExample',
    'buildExample',
));