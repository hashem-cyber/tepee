const gulp = require('gulp')
const sass = require('gulp-sass')
const live = require('browser-sync').create()
const pcss = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

gulp.task('sass', () => {
  return gulp.src('./resources/scss/*.scss')
    .pipe(sass())
    .pipe(pcss('last 10 version'))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(live.stream())
})

gulp.task('babel', () => {
  gulp.src('./resources/js/main.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'));
})

gulp.task('server', () => {
  live.init({
    server: {
      baseDir: __dirname
    }
  })

  gulp.watch(['./resources/scss/*.scss', './resources/scss/**/*.scss'], ['sass'])
  gulp.watch('./resources/js/*.js').on('change', live.reload)
  gulp.watch('./*.html').on('change', live.reload)
})
