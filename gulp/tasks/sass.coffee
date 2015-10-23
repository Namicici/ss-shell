"use strict"

gulp = require "gulp"
sass = require "gulp-sass"
concat  = require "gulp-concat"

paths = require("../config").paths

gulp.task "sass", [], ()->
    gulp.src paths.source.sass
        .pipe sass()
        .pipe concat "app.css"
        .pipe gulp.dest paths.dist.css
