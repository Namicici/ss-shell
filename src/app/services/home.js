"use strict";

var app = require("../app.js");
require("./base.js");

require.ensure([], function(require){
    app.registerService("app.services.home",["app.services.base", function(baseService){
        return {
            getMenus: function(data){
                var config = {
                    url:"/api/menus",
                    method:"get",
                    data:data
                }
                return baseService.httpRequest(config)
            }
        }
    }])
})
