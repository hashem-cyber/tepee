var gulp = require('gulp');
var nano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var shorthand = require('gulp-shorthand');
var purify = require('gulp-purifycss');

// Task to compile scss into a prefixed css file with watcher
gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 5 version'))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

// Task to compress js into a babel version of the main.js file with watcher
gulp.task('uglify', function() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

// Server mount and behaviour
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['./src/scss/*.scss', './src/scss/*/*.scss'], ['sass']);
  gulp.watch('./js/*.js').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// CSS Shorthand task
gulp.task('shorthand', function() {
  return gulp.src('./css/*.css')
    .pipe(shorthand())
    .pipe(gulp.dest('./css/'));
})

// Purifycss task
gulp.task('removecss', function() {
  return gulp.src('./css/app.css')
    .pipe(purify(['./*.html', './js/*.js']))
    .pipe(gulp.dest('./css/'));
});

// Task to use on development
gulp.task('default', ['sass', 'uglify','serve']);
