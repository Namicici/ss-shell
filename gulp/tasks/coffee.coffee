"use strict"

gulp = require "gulp"
coffee = require "gulp-coffee"
concat = require "gulp-concat"
rename = require "gulp-rename"

paths = require("../config").paths

gulp.task "coffee", ["coffeeJs"]

gulp.task "coffeeJs", [], ()->
    gulp.src paths.source.coffee
        .pipe coffee()
        .pipe concat "app.js"
        .pipe gulp.dest paths.dist.js
