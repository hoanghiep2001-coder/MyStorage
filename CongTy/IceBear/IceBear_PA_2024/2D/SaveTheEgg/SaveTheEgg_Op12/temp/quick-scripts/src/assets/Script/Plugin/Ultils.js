"use strict";
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