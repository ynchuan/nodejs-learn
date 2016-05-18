// 载入外挂
var gulp = require('gulp');
var contentIncluder = require('gulp-content-includer');
var packageInfo = {
  "dist": "dest",
  "version": "v1.13",
  "project": "sd"
};

function getPackageName() {
  var date = new Date,
    y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate();

  function autoComplete(n) {
    if (n < 10) {
      return "0" + n;
    }
    return n;
  }
  return (packageInfo.dist + "/" + y + autoComplete(m) + autoComplete(d) + "-" + packageInfo.project + "-" + packageInfo.version);
}

var dist = getPackageName();

gulp.task("common", function() {
  gulp.src("js/lib/jquery-1.7.2.min.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("js/lib/html5shiv.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("js/lib/json2.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("css/lib/normalize.css").pipe(gulp.dest(dist + "/css/lib"));
  gulp.src("readme.txt").pipe(gulp.dest(dist));
});
gulp.task("cp-frame", function() {
  gulp.src("css/cp-frame.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-frame.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("images/cp-frame/*").pipe(gulp.dest(dist + "/images/cp-frame"));
});
/**
 * v1.8
 */
gulp.task("v1.8", ["common", "cp-frame"], function() {
  gulp.src("view/cp-qd-search.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-search.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-qd-search.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("images/cp-qd-search/*").pipe(gulp.dest(dist + "/images/cp-qd-search"));
});
/**
 * v1.9
 */
gulp.task("v1.9", ["common", "cp-frame"], function() {
  gulp.src("view/cp-qd-result.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-result.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-qd-result.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("js/lib/jquery.resetselect.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("js/lib/page.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("js/lib/datepicker.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("images/cp-qd-result/*").pipe(gulp.dest(dist + "/images/cp-qd-result"));
});

/**
 * v1.10
 */
gulp.task("concat", function() {
  gulp.src("./layout/*.html").pipe(contentIncluder({
    includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g
  })).pipe(gulp.dest("./view/"));
});

gulp.task("cp-detail", function() {
  gulp.src("css/cp-detail.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-detail.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("js/lib/click-slide.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("images/cp-detail/*").pipe(gulp.dest(dist + "/images/cp-detail"));
});
gulp.task("v1.10", ["common", "cp-frame", "cp-detail", "concat"], function() {
  gulp.src("view/cp-qd-detail-base.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-detail-base.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-qd-detail-base.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("js/lib/click-slide.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("images/cp-qd-detail-base/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-base"));
});

/**
 * v1.11
 */
gulp.task("v1.11", ["common", "cp-frame", "cp-detail", "concat"], function() {
  gulp.src("view/cp-qd-detail-imp.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-detail-imp.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-qd-detail-imp.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("js/lib/jquery.timeAxis.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("images/cp-qd-detail-imp/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-imp"));
  gulp.src("view/cp-qd-detail-relate.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-detail-relate.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("images/cp-qd-detail-relate/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-relate"));
});

/**
 * v1.12
 */
gulp.task("v1.12", ["common", "cp-frame", "cp-detail", "concat"], function() {
  gulp.src("view/cp-qd-detail-hd6.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("view/cp-qd-detail-goods.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-detail-goods.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-qd-detail-goods.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("images/cp-qd-detail-goods/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-goods"));
  gulp.src("view/cp-qd-detail-socinfo.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-detail-socinfo.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("images/cp-qd-detail-socinfo/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-socinfo"));
  gulp.src("view/cp-qd-detail-statistic.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-detail-statistic.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("images/cp-qd-detail-statistic/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-statistic"));
});

/**
 * v1.13
 */
gulp.task("v1.13", ["common", "cp-frame", "cp-detail", "concat"], function() {
  gulp.src("view/cp-qd-detail-case.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("view/cp-qd-detail-trace.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("view/cp-qd-detail-experience.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("view/cp-qd-detail-notepad.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("view/cp-qd-detail-remark.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("view/cp-qd-detail-taxpayer.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("view/cp-qd-detail-base.html").pipe(gulp.dest(dist + "/view"));
  gulp.src("css/cp-qd-detail-other.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("css/cp-qd-detail-base.css").pipe(gulp.dest(dist + "/css"));
  gulp.src("js/cp-qd-detail-experience.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("js/cp-qd-detail-trace.js").pipe(gulp.dest(dist + "/js"));
  gulp.src("js/lib/page.js").pipe(gulp.dest(dist + "/js/lib"));
  gulp.src("images/cp-qd-detail-other/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-other"));
  gulp.src("images/cp-qd-detail-base/*").pipe(gulp.dest(dist + "/images/cp-qd-detail-base"));
});