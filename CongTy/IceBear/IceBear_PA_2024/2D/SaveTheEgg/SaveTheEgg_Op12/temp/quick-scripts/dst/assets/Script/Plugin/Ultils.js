
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be0d17Ed0ZFy5GvuwVSQsnQ', 'Ultils');
// Script/Plugin/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var decreaseRevive = function (reviveCount) {
    var result = null;
    result = reviveCount - 1;
    return result;
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.decreaseRevive = decreaseRevive;
    return Ultils;
}());
exports.Ultils = Ultils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFVsdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFNLGNBQWMsR0FBRyxVQUFDLFdBQW1CO0lBQ3ZDLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQztJQUMxQixNQUFNLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUE7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUZVLHFCQUFjLEdBQTBCLGNBQWMsQ0FBQTtJQUVqRSxhQUFDO0NBSkQsQUFJQyxJQUFBO0FBSlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lT3B0aW9uIH0gZnJvbSBcIi4uL0RhdGEvR2FtZU9wdGlvblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IGRlY3JlYXNlUmV2aXZlID0gKHJldml2ZUNvdW50OiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gICAgbGV0IHJlc3VsdDogbnVtYmVyID0gbnVsbDtcclxuICAgIHJlc3VsdCA9IHJldml2ZUNvdW50IC0gMTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbHRpbHMge1xyXG5cclxuICAgIHN0YXRpYyBkZWNyZWFzZVJldml2ZTogdHlwZW9mIGRlY3JlYXNlUmV2aXZlID0gZGVjcmVhc2VSZXZpdmVcclxuXHJcbn0iXX0=