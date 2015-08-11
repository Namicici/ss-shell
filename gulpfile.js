var gulp = require("gulp");
var coffee = require("gulp-coffee");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var del = require("del");
var rename = require("gulp-rename");
var minifycss = require("gulp-minify-css");
var uglify = require("gulp-uglify");

gulp.task("clean:out", function(cb){
    del("./out", cb);
});

gulp.task("clean:publish", function(cb){
    del("./publish", cb);
});

gulp.task("compile:coffee", function(){
    gulp.src("./server/*.coffee")
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest("./out/server"))
    gulp.src("./app/view/**/*.coffee")
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest("./out/app/view"))
    gulp.src("./app/*.coffee")
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest("./out/app"))
});

gulp.task("copy:thirdParty", function(){
    gulp.src(["./bower_components/angular/angular.min.js", "./bower_components/angular-route/angular-route.min.js"])
        .pipe(gulp.dest("./app/lib"))
    gulp.src("./app/lib/*.js")
        .pipe(concat("thirdParty.js"))
        .pipe(gulp.dest("./out/app/lib"))
        .pipe(gulp.dest("./publish/app/lib"))
});

gulp.task("copy:view", function(){
    gulp.src("./app/view/**/*.html")
        .pipe(gulp.dest("./out/app/view"))
        .pipe(gulp.dest("./publish/app/view"))
    gulp.src("./app/*.html")
        .pipe(gulp.dest("./out/app"))
        .pipe(gulp.dest("./publish/app"))
});

gulp.task("sass", function(){
    gulp.src("./app/sass/**/*.scss")
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat("app.css"))
        .pipe(rename({suffix: ".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest("./out/app/css"))
        .pipe(gulp.dest("./publish/app/css"))
});

gulp.task("minify:js", function(){
    gulp.src(["./out/app/*.js", "./out/app/**/*.js"])
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./publish/app"))
});

gulp.task("copy", function(){
    gulp.start("copy:thirdParty", "copy:view")
});

gulp.task("compile", function(){
    gulp.start("compile:coffee")
});

gulp.task("build", ["clean:out"], function(){
    gulp.start("sass", "compile", "copy")
});

gulp.task("publish", ["clean:publish"], function(){
    gulp.start("build", "minify:js")
});
