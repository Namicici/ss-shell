"use strict";

var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context:__dirname + "/src",
    entry:{
        app:"./app/routing.js",
        vendor:["libs/angular.min.js", "libs/angular-route.min.js"]
    },
    output:{
        publicPath: "http://localhost:8080/",
        path: __dirname + "/dist",
        filename: "[name].[hash].js"
    },
    module:{
        loaders:[
            //{test:/\.html/, loader:"raw"}
            {test: /\.html$/, loader: 'html'},
            {test: /\.scss$/, loaders:["style", "css", "sass"]},
            {test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]}
        ]
    },
    plugins:[new htmlWebpackPlugin({
        filename:"index.html",
        template:"index.html"
    })],
    resolve:{
        root: path.resolve(__dirname + "/src")
    }
};
