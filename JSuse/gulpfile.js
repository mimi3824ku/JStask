
// ��ȡ gulp
var gulp = require('gulp');

// ��ȡ minify-css ģ�飨����ѹ�� CSS��
var minifyCSS = require('gulp-minify-css');//cssѹ��
/*
var uglify = require('gulp-uglify');//jsѹ��
var amdOptimize = require('amd-optimize');
var concat = require('gulp-concat');
*/



/*var jshint = require('gulp-jshint');//js����淶�Լ��
var concat = require('gulp-concat');//�ϲ��ļ�
var rename = require('gulp-rename');//������*/
// ѹ�� css �ļ�
// ��������ʹ�� gulp css ����������
/*gulp.task('css', function () {
    // 1. �ҵ��ļ�
    gulp.src('css/!*.css')
        // 2. ѹ���ļ�
        .pipe(minifyCSS())
        // 3. ���Ϊѹ���ļ�
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



// ��������ʹ�� gulp auto ����������
gulp.task('auto', function () {
    // �����ļ��޸ģ����ļ����޸���ִ�� css ����
    gulp.watch('js/**/*.js', ['requirejs'])
});

// ʹ�� gulp.task('default') ����Ĭ������
// ��������ʹ�� gulp ���� css ����� auto ����
gulp.task('default', ['requirejs','auto']);