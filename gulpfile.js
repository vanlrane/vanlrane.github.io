var pkg = require("./package.json");
var gulp = require("gulp");
var child = require('child_process');
var browserSync = require("browser-sync").create();
var runSequence = require("run-sequence");

gulp.task("jekyll", function () {
  const jekyll = child.spawn("jekyll", ["build", "--watch"]);
});

gulp.task("serve", function () {
  browserSync.init({
    files: [
      "_site/**"
    ],
    port: 4000,
    server: {
      baseDir: "_site"
    },
  });
});

gulp.task('default', ["jekyll", "serve"]);

module.exports = gulp;