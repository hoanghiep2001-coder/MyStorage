"use strict";
cc._RF.push(module, 'ccb77OsDvVF6p/wjNW2QnlL', 'GameOption');
// Script/Data/GameOption.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOption = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Op12 = {
    reviveCount: 3,
    showCTA: false,
};
var Op13 = {
    reviveCount: 3,
    showCTA: false,
};
var Op14 = {
    reviveCount: 3,
    showCTA: false,
};
var Op16 = {
    isPointTouchClearFixArea: false,
};
var Op17 = {
    reviveCount: 2,
    showCTA: false,
    isPassLevel28: false,
};
var GameOption = /** @class */ (function () {
    function GameOption() {
    }
    // state    
    GameOption.currentOption = 15;
    GameOption.Op12 = Op12;
    GameOption.Op13 = Op13;
    GameOption.Op14 = Op14;
    GameOption.Op16 = Op16;
    GameOption.Op17 = Op17;
    return GameOption;
}());
exports.GameOption = GameOption;

cc._RF.pop();