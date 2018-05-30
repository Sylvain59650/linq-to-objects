const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const watch = require("gulp-watch");


const chemins = {
  sources: "./sources/",
  distrib: "./distrib/",
  demo: "./docs/node_modules/linq-to-objects/distrib/"
};


gulp.task("fn", () => {
  return gulp.src([
      "sources/fn/*.js"
    ])
    .pipe(concat("linq-to-objects.js"))
    .pipe(babel({
      presets: ["es2017"],
      compact: false,
      comments: false,
      ignore: false
    }))
    .pipe(gulp.dest(chemins.sources))
});

gulp.task("linq-to-objects.min.js", () => {
  return gulp.src([
      "sources/linq-to-objects.js"
    ])
    .pipe(concat("linq-to-objects.min.js"))
    .pipe(babel({
      presets: ["es2017"],
      compact: true,
      comments: false,
      ignore: true
    }))
    .on("error", function(err) { console.error("err", err); })
    .pipe(gulp.dest(chemins.distrib))
});


gulp.task("linq-to-objects-2015.min.js", () => {
  return gulp.src([
      "sources/linq-to-objects.js"
    ])
    .pipe(concat("linq-to-objects-2015.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      comments: false,
      ignore: true
    }))
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("demo", () => {
  return gulp.src([
      "sources/linq-to-objects.js"
    ])
    .pipe(concat("linq-to-objects.min.js"))
    .pipe(gulp.dest(chemins.demo))
});

gulp.task("watch:linq-to-objects.min.js", function() {
  watch("./sources/linq-to-objects.js", function() {
    gulp.run("linq-to-objects.min.js");
    gulp.run("linq-to-objects-2015.min.js");
  });
});



gulp.task("default", ["linq-to-objects.min.js", "linq-to-objects-2015.min.js", "demo"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:linq-to-objects.min.js"]);