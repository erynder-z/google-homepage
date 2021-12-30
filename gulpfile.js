const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");


gulp.task("styles",function(done) {
    gulp.src("google2.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"))
    done();//callback function needed to async completition
});


gulp.task("watch", function() {
    gulp.watch("google2.css", gulp.series("styles"));
});