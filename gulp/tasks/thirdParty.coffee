"use strict"

gulp = require "gulp"
concat = require "gulp-concat"

paths = require("../config").paths

gulp.task "thirdParty", ["thirdPartyJs", "thirdPartyCss"]

gulp.task "thirdPartyJs",[],()->
    gulp.src paths.thirdParty.js
    .pipe concat "thirdParty.js"
    .pipe gulp.dest paths.dist.js

gulp.task "thirdPartyCss", [], ()->
    gulp.src paths.thirdParty.css
    .pipe concat "thirdParty.css"
    .pipe gulp.dest paths.dist.css
