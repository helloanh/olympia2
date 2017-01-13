var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');




gulp.task('imagemin', function () {
    return gulp.src('./wp-content/themes/olympia2/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./wp-content/themes/olympia2/images'));
});


gulp.task('sass', function () {
  gulp.src('./wp-content/themes/olympia2/sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./wp-content/themes/olympia2'));
});


gulp.task('uglify', function() {
  gulp.src('./wp-content/themes/olympia2/lib/*.js')
    .pipe(uglify('olympia2.min.js'))
    .pipe(gulp.dest('./wp-content/themes/olympia2/js'))
});

gulp.task('watch', function(){
    livereload.listen();

    gulp.watch('./wp-content/themes/olympia2/sass/**/*.scss', ['sass']);
    gulp.watch('./wp-content/themes/olympia2/lib/*.js', ['uglify']);
    gulp.watch(['./wp-content/themes/olympia2/style.css', './wp-content/themes/olympia2/*.php', './wp-content/themes/olympia2/js/*.js', './wp-content/themes/olympia2/parts/**/*.php'], function (files){
        livereload.changed(files)
    });
});