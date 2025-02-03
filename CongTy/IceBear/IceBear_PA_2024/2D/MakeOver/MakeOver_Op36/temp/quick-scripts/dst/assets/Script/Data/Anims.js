
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Anims.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e978dmCj1F/oDQ09VgYDVK', 'Anims');
// Script/Data/Anims.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpineAnims = void 0;
var Intro_SpiderAnim;
(function (Intro_SpiderAnim) {
    Intro_SpiderAnim["Action"] = "action01";
    Intro_SpiderAnim["Idle"] = "idle01";
})(Intro_SpiderAnim || (Intro_SpiderAnim = {}));
var Intro_DollAnim;
(function (Intro_DollAnim) {
    Intro_DollAnim["Walk"] = "action01";
    Intro_DollAnim["Scare"] = "action02";
    Intro_DollAnim["Idle"] = "idle0";
})(Intro_DollAnim || (Intro_DollAnim = {}));
var LipsAnim;
(function (LipsAnim) {
    LipsAnim["Dry"] = "action04";
    LipsAnim["DirtySmell"] = "action03";
    LipsAnim["Idle"] = "idle02";
})(LipsAnim || (LipsAnim = {}));
var bubbleAnim;
(function (bubbleAnim) {
    bubbleAnim["Clean"] = "action04_bubble_clean";
    bubbleAnim["Show"] = "action03_only_bubble";
})(bubbleAnim || (bubbleAnim = {}));
var waterToothAnim;
(function (waterToothAnim) {
    waterToothAnim["Idle"] = "Idle1";
    waterToothAnim["Action"] = "action01";
})(waterToothAnim || (waterToothAnim = {}));
var SpineAnims = /** @class */ (function () {
    function SpineAnims() {
    }
    SpineAnims.LipsAnim = LipsAnim;
    SpineAnims.Intro_DollAnim = Intro_DollAnim;
    SpineAnims.Intro_SpiderAnim = Intro_SpiderAnim;
    SpineAnims.bubbleAnim = bubbleAnim;
    SpineAnims.waterToothAnim = waterToothAnim;
    return SpineAnims;
}());
exports.SpineAnims = SpineAnims;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxBbmltcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFLLGdCQUdKO0FBSEQsV0FBSyxnQkFBZ0I7SUFDakIsdUNBQW1CLENBQUE7SUFDbkIsbUNBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUdwQjtBQUdELElBQUssY0FJSjtBQUpELFdBQUssY0FBYztJQUNmLG1DQUFpQixDQUFBO0lBQ2pCLG9DQUFrQixDQUFBO0lBQ2xCLGdDQUFjLENBQUE7QUFDbEIsQ0FBQyxFQUpJLGNBQWMsS0FBZCxjQUFjLFFBSWxCO0FBR0QsSUFBSyxRQUlKO0FBSkQsV0FBSyxRQUFRO0lBQ1QsNEJBQWdCLENBQUE7SUFDaEIsbUNBQXVCLENBQUE7SUFDdkIsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSkksUUFBUSxLQUFSLFFBQVEsUUFJWjtBQUdELElBQUssVUFHSjtBQUhELFdBQUssVUFBVTtJQUNYLDZDQUErQixDQUFBO0lBQy9CLDJDQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFISSxVQUFVLEtBQVYsVUFBVSxRQUdkO0FBR0QsSUFBSyxjQUdKO0FBSEQsV0FBSyxjQUFjO0lBQ2YsZ0NBQWMsQ0FBQTtJQUNkLHFDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFISSxjQUFjLEtBQWQsY0FBYyxRQUdsQjtBQUdEO0lBQUE7SUFNQSxDQUFDO0lBTFUsbUJBQVEsR0FBb0IsUUFBUSxDQUFDO0lBQ3JDLHlCQUFjLEdBQTBCLGNBQWMsQ0FBQztJQUN2RCwyQkFBZ0IsR0FBNEIsZ0JBQWdCLENBQUM7SUFDN0QscUJBQVUsR0FBc0IsVUFBVSxDQUFDO0lBQzNDLHlCQUFjLEdBQTBCLGNBQWMsQ0FBQztJQUNsRSxpQkFBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBJbnRyb19TcGlkZXJBbmltIHtcclxuICAgIEFjdGlvbiA9IFwiYWN0aW9uMDFcIixcclxuICAgIElkbGUgPSBcImlkbGUwMVwiLFxyXG59XHJcblxyXG5cclxuZW51bSBJbnRyb19Eb2xsQW5pbSB7XHJcbiAgICBXYWxrID0gXCJhY3Rpb24wMVwiLFxyXG4gICAgU2NhcmUgPSBcImFjdGlvbjAyXCIsXHJcbiAgICBJZGxlID0gXCJpZGxlMFwiLFxyXG59XHJcblxyXG5cclxuZW51bSBMaXBzQW5pbSB7XHJcbiAgICBEcnkgPSBcImFjdGlvbjA0XCIsXHJcbiAgICBEaXJ0eVNtZWxsID0gXCJhY3Rpb24wM1wiLFxyXG4gICAgSWRsZSA9IFwiaWRsZTAyXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIGJ1YmJsZUFuaW0ge1xyXG4gICAgQ2xlYW4gPSBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLFxyXG4gICAgU2hvdyA9IFwiYWN0aW9uMDNfb25seV9idWJibGVcIixcclxufVxyXG5cclxuXHJcbmVudW0gd2F0ZXJUb290aEFuaW0ge1xyXG4gICAgSWRsZSA9IFwiSWRsZTFcIixcclxuICAgIEFjdGlvbiA9IFwiYWN0aW9uMDFcIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGluZUFuaW1zIHtcclxuICAgIHN0YXRpYyBMaXBzQW5pbTogdHlwZW9mIExpcHNBbmltID0gTGlwc0FuaW07XHJcbiAgICBzdGF0aWMgSW50cm9fRG9sbEFuaW06IHR5cGVvZiBJbnRyb19Eb2xsQW5pbSA9IEludHJvX0RvbGxBbmltO1xyXG4gICAgc3RhdGljIEludHJvX1NwaWRlckFuaW06IHR5cGVvZiBJbnRyb19TcGlkZXJBbmltID0gSW50cm9fU3BpZGVyQW5pbTtcclxuICAgIHN0YXRpYyBidWJibGVBbmltOiB0eXBlb2YgYnViYmxlQW5pbSA9IGJ1YmJsZUFuaW07XHJcbiAgICBzdGF0aWMgd2F0ZXJUb290aEFuaW06IHR5cGVvZiB3YXRlclRvb3RoQW5pbSA9IHdhdGVyVG9vdGhBbmltO1xyXG59Il19