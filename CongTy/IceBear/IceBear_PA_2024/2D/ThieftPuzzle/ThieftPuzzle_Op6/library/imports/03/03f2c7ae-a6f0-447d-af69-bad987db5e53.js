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
// const checkConditionOfPoint1 = (hand: cc.Node, point: cc.Node): boolean => {
//     let boudingBox = hand.getBoundingBox();
//     let result = false;
//     if (
//         (boudingBox.intersects(point.getBoundingBox()) && Constants.newPoint !== point.getPosition())
//     ) {
//         Constants.isTouchPoint1 = true;
//         result = true;
//     }
//     return result;
// }
// const checkConditionWithPoint = (hand: cc.Node, point: cc.Node, oldPoint: cc.Node, index: number): boolean => {
//     let boudingBox = hand.getBoundingBox();
//     let result = false;
//     if (
//         boudingBox.intersects(point.getBoundingBox())
//         && Constants.newPoint !== point.getPosition()
//     ) {
//         result = true;
//     }
//     return result;
// }
var checkTouchCondition1 = function (hand, point, graphic, pointCompare) {
    if (hand.x > pointCompare.x && hand.y > pointCompare.y) {
        return;
    }
    if (hand.x < point.x && !constants_1.Constants.isTouchPoint2) {
        constants_1.Constants.isDrawPoint1 = false;
        constants_1.Constants.isTouchPoint1 = false;
        constants_1.Constants.newPoint = constants_1.Constants.pointA_Pos;
        graphic.clear();
        return;
    }
    if (hand.x > point.x && hand.y > point.y && !constants_1.Constants.isTouchPoint1) {
        constants_1.Constants.isTouchPoint1 = true;
        constants_1.Constants.newPoint = point.getPosition();
    }
};
// const checkTouchCondition2 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x > newPoint.x && hand.y < newPoint.y && Constants.isTouchPoint1) {
//         Constants.isTouchPoint2 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
// const checkTouchCondition3 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x < newPoint.x && hand.y < newPoint.y && Constants.isTouchPoint1 && !Constants.isTouchPoint3) {
//         Constants.isTouchPoint3 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
// const checkTouchCondition4 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x < newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1 && Constants.isTouchPoint3 && !Constants.isTouchPoint4) {
//         Constants.isTouchPoint4 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
// const checkTouchCondition5 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node, graphic: cc.Graphics): void => {
//     if (hand.x < newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1 && Constants.isTouchPoint4 && !Constants.isTouchPoint5) {
//         Constants.isTouchPoint5 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }
var checkTouchCondition6 = function (hand, newPoint, oldPoint, graphics) {
    if (!constants_1.Constants.isTouchPoint2 && !constants_1.Constants.isTouchPoint3 && !constants_1.Constants.isTouchPoint4) {
        if (hand.x < newPoint.x && constants_1.Constants.isTouchPoint1) {
            graphics.clear();
            constants_1.Constants.isDrawPoint6 = false;
            constants_1.Constants.isTouchPoint6 = false;
            return;
        }
        if (hand.x > newPoint.x && hand.y > newPoint.y && constants_1.Constants.isTouchPoint1) {
            constants_1.Constants.isTouchPoint6 = true;
            constants_1.Constants.oldPoint = oldPoint.getPosition();
            constants_1.Constants.newPoint = newPoint.getPosition();
        }
    }
    if (constants_1.Constants.isTouchPoint2 && constants_1.Constants.isTouchPoint3 && constants_1.Constants.isTouchPoint4) {
        if (hand.x < newPoint.x) {
            graphics.clear();
            constants_1.Constants.isDrawPoint6 = false;
            constants_1.Constants.isTouchPoint6 = false;
            constants_1.Constants.oldPoint = constants_1.Constants.point4Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point1Pos;
            return;
        }
        if (hand.x > newPoint.x && hand.y > newPoint.y && constants_1.Constants.isTouchPoint1) {
            constants_1.Constants.isTouchPoint6 = true;
            constants_1.Constants.oldPoint = oldPoint.getPosition();
            constants_1.Constants.newPoint = newPoint.getPosition();
        }
    }
};
var checkTouchCondition7 = function (hand) {
    if (constants_1.Constants.isTouchPoint1) {
        if (hand.x < constants_1.Constants.point5Pos.x) {
            constants_1.Constants.oldPoint = constants_1.Constants.pointA_Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point1Pos;
        }
    }
};
var checkTouchCondition8 = function (hand, graphic) {
    if (constants_1.Constants.isTouchPoint1 && constants_1.Constants.isTouchPoint6) {
        if (hand.x < constants_1.Constants.point6Pos.x && constants_1.Constants.isTouchPoint7) {
            graphic.clear();
            constants_1.Constants.isTouchPoint7 = false;
            constants_1.Constants.isDrawPoint7 = false;
            constants_1.Constants.oldPoint = constants_1.Constants.point1Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point5Pos;
            return;
        }
        if (hand.x > constants_1.Constants.point6Pos.x) {
            constants_1.Constants.isTouchPoint7 = true;
            constants_1.Constants.oldPoint = constants_1.Constants.point5Pos;
            constants_1.Constants.newPoint = constants_1.Constants.point6Pos;
        }
    }
};
var checkTouchCondition9 = function (boudingbox, hand) {
    if (constants_1.Constants.isTouchPoint1 && boudingbox.intersects(hand.getBoundingBox())) {
        constants_1.Constants.isTouchFence = true;
    }
    else {
        constants_1.Constants.isTouchFence = false;
    }
};
var checkTouchPoint = function (fence, hand, fenceLeft) {
    var f_BoudingBox = fence.getBoundingBox();
    var fl_BoudingBox = fenceLeft.getBoundingBox();
    var h_BoudingBox = hand.getBoundingBox();
    var checkPosX = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    var checkPosY = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
    // // touch point 7 
    // if(Constants.isTouchPoint7) {
    //     if(checkPosX < Constants.point6Pos.x) {
    //         return;
    //     }
    //     if(checkPosX < Constants.point6Pos.x && checkPosY > Constants.point6Pos.y) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         // Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     }
    //     Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }
    // // touch point 6
    if (constants_1.Constants.isTouchPoint6 && f_BoudingBox.intersects(h_BoudingBox)) {
        if (checkPosY < constants_1.Constants.point7Pos.y) {
            return;
        }
        constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    // touch fence
    if (f_BoudingBox.intersects(h_BoudingBox)) {
        if (constants_1.Constants.fencePoint.y > checkPosY) {
            return;
        }
        if (constants_1.Constants.fencePoint.y < checkPosY && constants_1.Constants.point2Pos.x > checkPosX) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    // touch point 3 && 4
    if (h_BoudingBox.intersects(constants_1.Constants.point3Bdb) || h_BoudingBox.intersects(constants_1.Constants.point4Bdb)) {
        if (checkPosY < constants_1.Constants.point3Pos.y && checkPosX < constants_1.Constants.point3Pos.x) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
        return;
    }
    // tooouch fence Left
    if (fl_BoudingBox.intersects(h_BoudingBox)) {
        if (checkPosX < fenceLeft.x) {
            constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
            constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }
        constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }
    constants_1.Constants.currentLocalPosition.x = constants_1.Constants.currentPosition.x - cc.winSize.width / 2;
    constants_1.Constants.currentLocalPosition.y = constants_1.Constants.currentPosition.y - cc.winSize.height / 2;
};
var Hand = {
    rotateDefault: rotateDefault,
    rotateWithPoint: rotateWithPoint,
};
var TouchArea = {
    checkTouchCondition1: checkTouchCondition1,
    // checkTouchCondition2: checkTouchCondition2,
    // checkTouchCondition3: checkTouchCondition3,
    // checkTouchCondition4: checkTouchCondition4,
    // checkTouchCondition5: checkTouchCondition5,
    checkTouchCondition6: checkTouchCondition6,
    checkTouchCondition7: checkTouchCondition7,
    checkTouchCondition8: checkTouchCondition8,
    // checkTouchCondition9: checkTouchCondition9,
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