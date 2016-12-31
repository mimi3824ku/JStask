
// 获取 gulp
var gulp = require('gulp');

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css');//css压缩
/*
var uglify = require('gulp-uglify');//js压缩
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
*/



/*var jshint = require('gulp-jshint');//js代码规范性检查
var concat = require('gulp-concat');//合并文件
var rename = require('gulp-rename');//重命名*/
// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
/*gulp.task('css', function () {
    // 1. 找到文件
    gulp.src('css/!*.css')
        // 2. 压缩文件
        .pipe(minifyCSS())
        // 3. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))
});*/
/*
gulp.task('requirejs',function(){
   return gulp.src('js/com/!**!/!*.js')
            .pipe(amdOptimize('js/app/index'))
            .pipe(concat('result.js'))
            .pipe(gulp.dest('dist'));
});
*/



// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 css 任务
    gulp.watch('js/**/*.js', ['requirejs'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 css 任务和 auto 任务
gulp.task('default', ['requirejs','auto']);