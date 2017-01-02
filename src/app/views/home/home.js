"use strict";

var app = require("../../app.js");
require("css/font-awesome.css");
require("./home.scss");
require("./base.css");
require("./slider.css");
require("app/services/home.js");
//require("./slider.js");

require.ensure([], function(require){

    app.registerController('app.views.home', ["$scope", "app.services.home", function($scope, homeService){
        init();
        function init(){
            var items = {
                id:1
            };
            homeService.getMenus(items)
            .then(function(data){
                console.log("getMenus:" + data);
                $scope.data = data;
            })
        }
        /**
        * 开发时间：2016/5/24
        * 开发人员：boxUnll
        * 开发项目：移动端滑动验证代码
        */
        var oBtn = document.getElementById('btn');
        var oW,oLeft;
        var oSlider = document.getElementById('slider');
        var oTrack = document.getElementById('track');
        var oIcon = document.getElementById('icon');
        var oSpinner = document.getElementById('spinner');
        //web端使用drag和drop
        oBtn.addEventListener('touchstart',function(e){
            console.log(e);
            var touches = e.touches[0];
            oW = touches.clientX - oBtn.offsetLeft;
            oBtn.className = "button";
            oTrack.className = "track";
            document.addEventListener("touchmove",defaultEvent,false);//阻止页面的滑动默认事件
        },false);

        oBtn.addEventListener("touchmove", function(e) {
            var touches = e.touches[0];
            oLeft = touches.clientX - oW;
            if(oLeft < 0) {
                oLeft = 0;
            }else if(oLeft > document.documentElement.clientWidth - oBtn.offsetWidth-30) {
                oLeft = (document.documentElement.clientWidth - oBtn.offsetWidth-30);
            }
            oBtn.style.left = oLeft + "px";
            oTrack.style.width = oLeft+ 'px';
        },false);

        oBtn.addEventListener("touchend",function() {
            if(oLeft>=(oSlider.clientWidth-oBtn.clientWidth)){
                oBtn.style.left = (document.documentElement.clientWidth - oBtn.offsetWidth-30);
                oTrack.style.width = (document.documentElement.clientWidth - oBtn.offsetWidth-30);
                oIcon.style.display = 'none';
                oSpinner.style.display = 'block';
            }else{
                oBtn.style.left = 0;
                oTrack.style.width = 0;
            }
            oBtn.className = "button-on";
            oTrack.className = "track-on";
            document.removeEventListener("touchmove",defaultEvent,false);//阻止页面的滑动默认事件
        },false);

        function defaultEvent(e) {
            e.preventDefault();
        }

    }]);
})
