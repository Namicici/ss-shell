"use strict"

gulp = require "gulp"
minify = require "gulp-minify-css"
uglify = require "gulp-uglify"
usemin = require "gulp-usemin"

paths = require("../config").paths

gulp.task "usemin", [], ()->
    gulp.src "./index.html"
        .pipe usemin
            appJs: uglify()
            appCss: minify()
            thirdPartyJs: uglify()
            thirdPartyCss: minify()
        .pipe gulp.dest paths.dist.publish
