var gulp = require('gulp');
var browsersync = require('browser-sync');
var reload = browsersync.reload;
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

//////////////////
// STYLES TASK
//////////////////

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.sass')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('app/css/'))
        .pipe(reload({stream:true}));

});

//////////////////
// HTML TASK
//////////////////

gulp.task('html', function() {
  gulp.src('app/**/*.html')
  .pipe(reload({stream:true}));
})

//////////////////
// BROWSER TASK
//////////////////

gulp.task('browser-sync', function() {
  browsersync({
    server:{
      baseDir: "./app/"
    }
  });
});

//////////////////
// WATCH TASK
//////////////////

gulp.task('watch',function() {
    gulp.watch('app/sass/**/*.sass',['styles']);
    gulp.watch('app/**/*.html', ['html']);
});

//////////////////
// DEFAULT TASK
//////////////////

gulp.task('default', ['styles', 'html', 'browser-sync', 'watch'])
