'use strict';

let gulp = require('gulp'),
    rimraf = require('rimraf'),
    minify = require('gulp-minify'),
    mocha = require('gulp-mocha'),
    sourcemaps = require('gulp-sourcemaps');

const { watch, series, parallel } = require('gulp');

const path = {
    build : 'build',
    src : 'src/lib.js',
    clean: 'build',
    test : 'test/test.js'
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

gulp.task('testExample', () => {
    return gulp
        .src(path.test, {read: false})
        .pipe(mocha({reporter: 'List'}));
});

gulp.task('build', gulp.series(
    'cleanExample',
    'buildExample',
));
