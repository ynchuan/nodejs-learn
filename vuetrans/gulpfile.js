var inlineVue = require('vue-template-inline');
var gulp = require('gulp');

gulp.task('inline-vue', function () {
    var ret = gulp.src('./src/*.js');
    ret.pipe(inlineVue())
    ret.pipe(gulp.dest('./dist'));
    return ret;
});

gulp.run('inline-vue');
