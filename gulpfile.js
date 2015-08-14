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

gulp.task("compile:coffee", function(){
    gulp.src("./*.coffee")
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest("./out"))
    gulp.src("./server/*.coffee")
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest("./out/server"))
    gulp.src("./app/**/*.coffee")
        .pipe(coffee({bare: true}))
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest("./out/app"))
});

gulp.task("copy:thirdParty", function(){
    gulp.src(["./node_modules/angular/angular.min.js", "./node_modules/angular-route/angular-route.min.js"])
        .pipe(gulp.dest("./app/lib"))
    gulp.src(["./app/lib/angular.min.js", "./app/lib/angular-route.min.js"])
        .pipe(concat("thirdParty.js"))
        .pipe(gulp.dest("./out/app"))
});

gulp.task("copy:view", function(){
    gulp.src("./app/views/**/*.html")
        .pipe(gulp.dest("./out/app/views"))
    gulp.src("./app/*.html")
        .pipe(gulp.dest("./out/app"))
});

gulp.task("sass", function(){
    gulp.src("./app/sass/app.scss")
        .pipe(sass({errLogToConsole: true}))
        .pipe(rename({suffix: ".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest("./out/app/css"))
});

gulp.task("minify:js", function(){
    gulp.src("./out/app/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./out/app"))
    gulp.src("./app/lib/*.js")
        .pipe(concat("thirdParty.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./out/app"))
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
