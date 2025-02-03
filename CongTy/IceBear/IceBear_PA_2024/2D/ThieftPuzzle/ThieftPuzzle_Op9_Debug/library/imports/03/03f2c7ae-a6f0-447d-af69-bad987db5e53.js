"use strict";
cc._RF.push(module, '03f2ceupvBEfa9putmH215T', 'Ultils');
// Script/Data/Ultils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ultils = void 0;
var constants_1 = require("./constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rotateDefault = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.pointA_Pos);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
var rotateWithPoint = function (basePoint) {
    var thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    var directionVector = thisPos.sub(constants_1.Constants.newPoint);
    var rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    var rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
};
// const checkTouchCondition1 = (hand: cc.Node, point: cc.Node, graphic: cc.Graphics, pointCompare: cc.Node): void => {
//     if (hand.x > pointCompare.x && hand.y > pointCompare.y) {
//         return;
//     }
//     if(hand.x < point.x &&  !Constants.isTouchPoint2) {
//             Constants.isDrawPoint1 = false;
//             Constants.isTouchPoint1 = false;
//             Constants.newPoint = Constants.pointA_Pos;
//             graphic.clear();
//             return;
//     }
//     if (hand.x > point.x && hand.y > point.y && !Constants.isTouchPoint1) {
//         Constants.isTouchPoint1 = true;
//         Constants.newPoint = point.getPosition();
//     }
// }
// const checkTouchCondition6 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node, graphics: cc.Graphics): void => {
//     if(!Constants.isTouchPoint2  && !Constants.isTouchPoint3 && !Constants.isTouchPoint4) {
//         if (hand.x < newPoint.x  && Constants.isTouchPoint1) {
//             graphics.clear();
//             Constants.isDrawPoint6 = false;
//             Constants.isTouchPoint6 = false;
//             return;
//         }
//         if (hand.x > newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1) {
//             Constants.isTouchPoint6 = true;
//             Constants.oldPoint = oldPoint.getPosition();
//             Constants.newPoint = newPoint.getPosition();
//         }
//     } 
//     if (Constants.isTouchPoint2  && Constants.isTouchPoint3 && Constants.isTouchPoint4) {
//         if (hand.x < newPoint.x) {
//             graphics.clear();
//             Constants.isDrawPoint6 = false;
//             Constants.isTouchPoint6 = false;
//             Constants.oldPoint = Constants.point4Pos; 
//             Constants.newPoint = Constants.point1Pos;
//             return;
//         }
//         if (hand.x > newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1) {
//             Constants.isTouchPoint6 = true;
//             Constants.oldPoint = oldPoint.getPosition();
//             Constants.newPoint = newPoint.getPosition();
//         }
//     }
// }
// const checkTouchCondition7 = (hand: cc.Node): void => {
//     if(Constants.isTouchPoint1) {
//         if(hand.x < Constants.point5Pos.x) {
//             Constants.oldPoint = Constants.pointA_Pos;
//             Constants.newPoint = Constants.point1Pos;
//         }
//     }
// }
// const checkTouchCondition8 = (hand: cc.Node, graphic: cc.Graphics): void => {
//     if(Constants.isTouchPoint1 && Constants.isTouchPoint6) {
//         if(hand.x < Constants.point6Pos.x && Constants.isTouchPoint7) {
//             graphic.clear();
//             Constants.isTouchPoint7 = false;
//             Constants.isDrawPoint7 = false;
//             Constants.oldPoint = Constants.point1Pos;
//             Constants.newPoint = Constants.point5Pos;
//             return;
//         }
//         if(hand.x > Constants.point6Pos.x) {
//             Constants.isTouchPoint7 = true;
//             Constants.oldPoint = Constants.point5Pos;
//             Constants.newPoint = Constants.point6Pos;
//         }
//     }
// }
// const checkTouchCondition9 = (boudingbox: cc.Rect, hand: cc.Node): void => {
//     if(Constants.isTouchPoint1 && boudingbox.intersects(hand.getBoundingBox())) {
//         Constants.isTouchFence = true;
//     } else {
//         Constants.isTouchFence = false;
//     }
// }
var checkTouchPoint = function (fence, hand, fenceLeft) {
    var f_BoudingBox = fence.getBoundingBox();
    var fl_BoudingBox = fenceLeft.getBoundingBox();
    var h_BoudingBox = hand.getBoundingBox();
    var checkPosX = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    var checkPosY = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
    // // touch point 6
    // if(Constants.isTouchPoint6 && f_BoudingBox.intersects(h_BoudingBox)) {
    //     if(checkPosY < Constants.point7Pos.y) {
    //         return;
    //     }
    //     Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    // // touch fence
    // if(f_BoudingBox.intersects(h_BoudingBox)) {
    //     if(Constants.fencePoint.y > checkPosY) {
    //         return;
    //     }
    //     if(Constants.fencePoint.y < checkPosY && Constants.point2Pos.x > checkPosX) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     }
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    // // touch point 3 && 4
    // if(h_BoudingBox.intersects(Constants.point3Bdb) || h_BoudingBox.intersects(Constants.point4Bdb)) {
    //     if(checkPosY < Constants.point3Pos.y && checkPosX < Constants.point3Pos.x) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     } 
    //     Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //     return;
    // }
    // // tooouch fence Left
    // if(fl_BoudingBox.intersects(h_BoudingBox)) {
    //     if(checkPosX <  fenceLeft.x) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     }
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
};
var Hand = {
    rotateDefault: rotateDefault,
    rotateWithPoint: rotateWithPoint,
};
var TouchArea = {
    // checkTouchCondition1: checkTouchCondition1,
    // checkTouchCondition6: checkTouchCondition6,
    // checkTouchCondition7: checkTouchCondition7,
    // checkTouchCondition8: checkTouchCondition8,
    checkTouchPoint: checkTouchPoint,
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
    Ultils.Hand = Hand;
    Ultils.TouchArea = TouchArea;
    return Ultils;
}());
exports.Ultils = Ultils;

cc._RF.pop();