
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/mine/MineConstans.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '377f1wDS+ZNiK34Bo00vs8d', 'MineConstans');
// src/mine/MineConstans.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PIECE_STATE = exports.PIECE_TYPE = exports.STATE = void 0;
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["START"] = 1] = "START";
    STATE[STATE["OVER"] = 2] = "OVER";
})(STATE = exports.STATE || (exports.STATE = {}));
var PIECE_TYPE;
(function (PIECE_TYPE) {
    PIECE_TYPE[PIECE_TYPE["OPEN0"] = 0] = "OPEN0";
    PIECE_TYPE[PIECE_TYPE["OPEN1"] = 1] = "OPEN1";
    PIECE_TYPE[PIECE_TYPE["OPEN2"] = 2] = "OPEN2";
    PIECE_TYPE[PIECE_TYPE["OPEN3"] = 3] = "OPEN3";
    PIECE_TYPE[PIECE_TYPE["OPEN4"] = 4] = "OPEN4";
    PIECE_TYPE[PIECE_TYPE["OPEN5"] = 5] = "OPEN5";
    PIECE_TYPE[PIECE_TYPE["OPEN6"] = 6] = "OPEN6";
    PIECE_TYPE[PIECE_TYPE["OPEN7"] = 7] = "OPEN7";
    PIECE_TYPE[PIECE_TYPE["OPEN8"] = 8] = "OPEN8";
    PIECE_TYPE[PIECE_TYPE["BOMB"] = 9] = "BOMB";
})(PIECE_TYPE = exports.PIECE_TYPE || (exports.PIECE_TYPE = {}));
var PIECE_STATE;
(function (PIECE_STATE) {
    PIECE_STATE[PIECE_STATE["PENDING"] = 1] = "PENDING";
    PIECE_STATE[PIECE_STATE["FLAG"] = 2] = "FLAG";
    PIECE_STATE[PIECE_STATE["OPEN"] = 3] = "OPEN";
})(PIECE_STATE = exports.PIECE_STATE || (exports.PIECE_STATE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxtaW5lXFxNaW5lQ29uc3RhbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLEtBSVg7QUFKRCxXQUFZLEtBQUs7SUFDYixpQ0FBUSxDQUFBO0lBQ1IsbUNBQVMsQ0FBQTtJQUNULGlDQUFRLENBQUE7QUFDWixDQUFDLEVBSlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBSWhCO0FBRUQsSUFBWSxVQVdYO0FBWEQsV0FBWSxVQUFVO0lBQ2xCLDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0lBQ1QsNkNBQVMsQ0FBQTtJQUNULDJDQUFRLENBQUE7QUFDWixDQUFDLEVBWFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFXckI7QUFFRCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsbURBQVcsQ0FBQTtJQUNYLDZDQUFRLENBQUE7SUFDUiw2Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU1RBVEV7XHJcbiAgICBOT05FID0gMCxcclxuICAgIFNUQVJUID0gMSxcclxuICAgIE9WRVIgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBJRUNFX1RZUEUge1xyXG4gICAgT1BFTjAgPSAwLFxyXG4gICAgT1BFTjEgPSAxLFxyXG4gICAgT1BFTjIgPSAyLFxyXG4gICAgT1BFTjMgPSAzLFxyXG4gICAgT1BFTjQgPSA0LFxyXG4gICAgT1BFTjUgPSA1LFxyXG4gICAgT1BFTjYgPSA2LFxyXG4gICAgT1BFTjcgPSA3LFxyXG4gICAgT1BFTjggPSA4LFxyXG4gICAgQk9NQiA9IDlcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUElFQ0VfU1RBVEUge1xyXG4gICAgUEVORElORyA9IDEsXHJcbiAgICBGTEFHID0gMixcclxuICAgIE9QRU4gPSAzXHJcbn1cclxuIl19