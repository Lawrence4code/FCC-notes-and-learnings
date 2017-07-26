// ---------  ALL REQUIRED PLUGIN ---------- //
const gulp = require('gulp');

const browserSync = require('browser-sync');
var reload = browserSync.reload;
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

// ------------ ERROR HANDLING ------------- //

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

// -------------- SCRIPT TASK -------------- //

// None added for now.

// --------------- STYLE TASK -------------- //

gulp.task('style', function(){
  gulp.src('app/resources/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .on('error', console.error.bind(console))
    // .pipe(autoPrefixer('last 2 versions'))
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream:true}));
});

// ------------ IMAGE COMPRESSION ----------- //

gulp.task('image', function(){
  gulp.src('app/resources/images/*')
    .pipe(imagemin([
	imagemin.jpegtran({progressive: true}),
	imagemin.optipng({optimizationLevel: 5}),
	imagemin.svgo({plugins: [{removeViewBox: true}]})
]))
    .pipe(gulp.dest('app/img'));
});

// --------------- HTML TASK --------------- //

gulp.task('html', function(){
  gulp.src('app/**/*.html')
    .pipe(reload({stream:true}))
});

// Browser-sync Task //
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app/"
        }
    });
});

// --------------- WATCH TASK -------------- //

gulp.task('watch', function(){
  gulp.watch('app/resources/sass/**/*.sass',['style'])
  gulp.watch('app/**/*.html',['html'])
});

// --------------- DEFAULT TASK -------------- //

gulp.task('default',['html','style','browser-sync','watch','image']);
