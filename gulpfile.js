    var gulp = require('gulp');
    var autoprefixer = require('gulp-autoprefixer');
    var sass = require('gulp-sass');
    var sourcemaps = require('gulp-sourcemaps');

    gulp.task('sass', function () {
        gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init({identityMap: true}))
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules/susy/sass']
            })).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 10 versions']
            }))
        .pipe(sourcemaps.write('../maps/'))
        .pipe(gulp.dest('css/'));
        });

    gulp.task('watch',function(){    
        gulp.watch('sass/**', function () {
            setTimeout(function () {
                gulp.start('sass');
            }, 200);
            });
       });

        gulp.task('default', ['sass','watch']);
