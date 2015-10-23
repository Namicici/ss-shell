module.exports=function(config){
    config.set({
        basePath: "./out",
        frameworks: ["ng-scenario"],
        urlRoot: "/__karma/",
        autoWatch: true,
        browsers: ["Chrome"],
        plugins:[
            "karma-chrome-launcher",
            'karma-ng-scenario'
        ],
        proxies: {
            "/": "http://localhost:8080/"
        },
        files: ["./test/test.e2e.js"]
    });
};
