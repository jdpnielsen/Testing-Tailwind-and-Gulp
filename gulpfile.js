"use strict";

// Gulp 4.0.0 + SASS, minification, TailwindCSS, PHP and BrowserSync support
// (assumes you have your .scss + .css files in a /css directory)
// william@wturrell.co.uk

var gulp        = require('gulp')
    //sass        = require('gulp-sass')
    //cssnano     = require('gulp-cssnano'),
    //php         = require('gulp-connect-php'),
    //browserSync = require('browser-sync')
    ;

var postcss     = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
//var reload      = browserSync.reload;

gulp.task('test', function() {
    console.log('Hello World!');
});

gulp.task('css', function(){
    return gulp.src('css/*.css')
        // Use gulp-sass to convert SCSS to CSS
        //.pipe(sass())
        .pipe(postcss([
            // https://tailwindcss.com/docs/installation/#4-process-your-css-with-tailwind
            tailwindcss('./path/to/your/tailwind.js'),
            require('autoprefixer')]))
        // minimise
        //.pipe(cssnano())
        // write file to disk
        .pipe(gulp.dest('css'))
        // refresh browser
        .pipe(reload({
                stream: true
            })
        );
});

// Troubleshooting - you should see CLI debug messages for both the
// PHP Development server (port 8000) and BrowserSync (ports 3000 + 3001)
// if PHP's base directory is specified wrong, the whole thing can just hang

gulp.task('default', function() {

    // the CSS task does it's own reloading
    gulp.watch("css/*.css", gulp.series('css'));
});
