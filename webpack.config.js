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
        publicPath: "/",
        path: __dirname + "/dist",
        filename: "[name].[hash].js"
    },
    module:{
        loaders:[
            //{test:/\.html/, loader:"raw"}
            {test: /\.html$/, loader: 'html'},
            {test: /\.scss$/, loaders:["style", "css", "sass"]},
			{test: /\.css$/, loaders: ['style-loader','css-loader']},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            //{test: /\.(jpe?g|png|gif|svg)$/, loader:'file'},
			{test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader:"url-loader" }
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
