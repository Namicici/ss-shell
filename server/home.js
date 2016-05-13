"use strict";

function getMenus(req, res){
    res.send({
        results:"home page"
    })
}

var home = {
    menus: getMenus
}

module.exports = home;
