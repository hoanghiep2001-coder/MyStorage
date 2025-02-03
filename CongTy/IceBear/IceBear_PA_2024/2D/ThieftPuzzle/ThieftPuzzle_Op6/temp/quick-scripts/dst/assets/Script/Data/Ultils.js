
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Ultils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sYUFBYSxHQUFHLFVBQUMsU0FBa0I7SUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsT0FBTyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQTtBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsU0FBa0I7SUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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QUMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNGLENBQUMsQ0FBQTtBQUdELElBQU0sSUFBSSxHQUFHO0lBQ1QsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZUFBZSxFQUFFLGVBQWU7Q0FHbkMsQ0FBQTtBQUNELElBQU0sU0FBUyxHQUFHO0lBQ2Qsb0JBQW9CLEVBQUUsb0JBQW9CO0lBQzFDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5QyxvQkFBb0IsRUFBRSxvQkFBb0I7SUFDMUMsb0JBQW9CLEVBQUUsb0JBQW9CO0lBQzFDLG9CQUFvQixFQUFFLG9CQUFvQjtJQUMxQyw4Q0FBOEM7SUFDOUMsZUFBZSxFQUFFLGVBQWU7Q0FDbkMsQ0FBQTtBQUVEO0lBQUE7SUFLQSxDQUFDO0lBSFUsV0FBSSxHQUFnQixJQUFJLENBQUM7SUFDekIsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRW5ELGFBQUM7Q0FMRCxBQUtDLElBQUE7QUFMWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHJvdGF0ZURlZmF1bHQgPSAoYmFzZVBvaW50OiBjYy5WZWMyKTogbnVtYmVyID0+IHtcclxuICAgIGxldCB0aGlzUG9zID0gbmV3IGNjLlZlYzIoYmFzZVBvaW50LngsIGJhc2VQb2ludC55KTtcclxuICAgIGxldCBkaXJlY3Rpb25WZWN0b3IgPSB0aGlzUG9zLnN1YihDb25zdGFudHMucG9pbnRBX1Bvcyk7XHJcbiAgICBjb25zdCByb3RhdGlvblJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvblZlY3Rvci55LCBkaXJlY3Rpb25WZWN0b3IueCk7XHJcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMocm90YXRpb25SYWRpYW5zKTtcclxuICAgIHJldHVybiByb3RhdGlvbkRlZ3JlZXMgKyAyMDtcclxufVxyXG5cclxuY29uc3Qgcm90YXRlV2l0aFBvaW50ID0gKGJhc2VQb2ludDogY2MuVmVjMik6IG51bWJlciA9PiB7XHJcbiAgICBsZXQgdGhpc1BvcyA9IG5ldyBjYy5WZWMyKGJhc2VQb2ludC54LCBiYXNlUG9pbnQueSk7XHJcbiAgICBsZXQgZGlyZWN0aW9uVmVjdG9yID0gdGhpc1Bvcy5zdWIoQ29uc3RhbnRzLm5ld1BvaW50KTtcclxuICAgIGNvbnN0IHJvdGF0aW9uUmFkaWFucyA9IE1hdGguYXRhbjIoZGlyZWN0aW9uVmVjdG9yLnksIGRpcmVjdGlvblZlY3Rvci54KTtcclxuICAgIGNvbnN0IHJvdGF0aW9uRGVncmVlcyA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyb3RhdGlvblJhZGlhbnMpO1xyXG4gICAgcmV0dXJuIHJvdGF0aW9uRGVncmVlcyArIDIwO1xyXG59XHJcblxyXG5cclxuLy8gY29uc3QgY2hlY2tDb25kaXRpb25PZlBvaW50MSA9IChoYW5kOiBjYy5Ob2RlLCBwb2ludDogY2MuTm9kZSk6IGJvb2xlYW4gPT4ge1xyXG4vLyAgICAgbGV0IGJvdWRpbmdCb3ggPSBoYW5kLmdldEJvdW5kaW5nQm94KCk7XHJcbi8vICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICAgIChib3VkaW5nQm94LmludGVyc2VjdHMocG9pbnQuZ2V0Qm91bmRpbmdCb3goKSkgJiYgQ29uc3RhbnRzLm5ld1BvaW50ICE9PSBwb2ludC5nZXRQb3NpdGlvbigpKVxyXG4vLyAgICAgKSB7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgPSB0cnVlO1xyXG4vLyAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tDb25kaXRpb25XaXRoUG9pbnQgPSAoaGFuZDogY2MuTm9kZSwgcG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbi8vICAgICBsZXQgYm91ZGluZ0JveCA9IGhhbmQuZ2V0Qm91bmRpbmdCb3goKTtcclxuLy8gICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHJcbi8vICAgICBpZiAoXHJcbi8vICAgICAgICAgYm91ZGluZ0JveC5pbnRlcnNlY3RzKHBvaW50LmdldEJvdW5kaW5nQm94KCkpXHJcbi8vICAgICAgICAgJiYgQ29uc3RhbnRzLm5ld1BvaW50ICE9PSBwb2ludC5nZXRQb3NpdGlvbigpXHJcbi8vICAgICApIHtcclxuLy8gICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uMSA9IChoYW5kOiBjYy5Ob2RlLCBwb2ludDogY2MuTm9kZSwgZ3JhcGhpYzogY2MuR3JhcGhpY3MsIHBvaW50Q29tcGFyZTogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKGhhbmQueCA+IHBvaW50Q29tcGFyZS54ICYmIGhhbmQueSA+IHBvaW50Q29tcGFyZS55KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZihoYW5kLnggPCBwb2ludC54ICYmICAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50MSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnRBX1BvcztcclxuICAgICAgICAgICAgZ3JhcGhpYy5jbGVhcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhbmQueCA+IHBvaW50LnggJiYgaGFuZC55ID4gcG9pbnQueSAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IHRydWU7XHJcbiAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gcG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjIgPSAoaGFuZDogY2MuTm9kZSwgbmV3UG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoaGFuZC54ID4gbmV3UG9pbnQueCAmJiBoYW5kLnkgPCBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIgPSB0cnVlO1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IG9sZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gbmV3UG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjMgPSAoaGFuZDogY2MuTm9kZSwgbmV3UG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCAmJiBoYW5kLnkgPCBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50Mykge1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQzID0gdHJ1ZTtcclxuLy8gICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBvbGRQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb240ID0gKGhhbmQ6IGNjLk5vZGUsIG5ld1BvaW50OiBjYy5Ob2RlLCBvbGRQb2ludDogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYgKGhhbmQueCA8IG5ld1BvaW50LnggJiYgaGFuZC55ID4gbmV3UG9pbnQueSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MyAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NCA9IHRydWU7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gb2xkUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBuZXdQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uNSA9IChoYW5kOiBjYy5Ob2RlLCBuZXdQb2ludDogY2MuTm9kZSwgb2xkUG9pbnQ6IGNjLk5vZGUsIGdyYXBoaWM6IGNjLkdyYXBoaWNzKTogdm9pZCA9PiB7XHJcbi8vICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCAmJiBoYW5kLnkgPiBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ0ICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50NSkge1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ1ID0gdHJ1ZTtcclxuLy8gICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBvbGRQb2ludC5nZXRQb3NpdGlvbigpO1xyXG4vLyAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb242ID0gKGhhbmQ6IGNjLk5vZGUsIG5ld1BvaW50OiBjYy5Ob2RlLCBvbGRQb2ludDogY2MuTm9kZSwgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzKTogdm9pZCA9PiB7XHJcbiAgICBpZighQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIgICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50MyAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQpIHtcclxuICAgICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCAgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGhhbmQueCA+IG5ld1BvaW50LnggJiYgaGFuZC55ID4gbmV3UG9pbnQueSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IG9sZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIgICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQzICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ0KSB7XHJcbiAgICAgICAgaWYgKGhhbmQueCA8IG5ld1BvaW50LngpIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnQ0UG9zOyBcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50MVBvcztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhbmQueCA+IG5ld1BvaW50LnggJiYgaGFuZC55ID4gbmV3UG9pbnQueSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50NiA9IHRydWU7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IG9sZFBvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5uZXdQb2ludCA9IG5ld1BvaW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uNyA9IChoYW5kOiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbiAgICBpZihDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4gICAgICAgIGlmKGhhbmQueCA8IENvbnN0YW50cy5wb2ludDVQb3MueCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnRBX1BvcztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50MVBvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb244ID0gKGhhbmQ6IGNjLk5vZGUsIGdyYXBoaWM6IGNjLkdyYXBoaWNzKTogdm9pZCA9PiB7XHJcbiAgICBpZihDb25zdGFudHMuaXNUb3VjaFBvaW50MSAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50Nikge1xyXG4gICAgICAgIGlmKGhhbmQueCA8IENvbnN0YW50cy5wb2ludDZQb3MueCAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50Nykge1xyXG4gICAgICAgICAgICBncmFwaGljLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc0RyYXdQb2ludDcgPSBmYWxzZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gQ29uc3RhbnRzLnBvaW50MVBvcztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50NVBvcztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaGFuZC54ID4gQ29uc3RhbnRzLnBvaW50NlBvcy54KSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gQ29uc3RhbnRzLnBvaW50NVBvcztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gQ29uc3RhbnRzLnBvaW50NlBvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb245ID0gKGJvdWRpbmdib3g6IGNjLlJlY3QsIGhhbmQ6IGNjLk5vZGUpOiB2b2lkID0+IHtcclxuICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmIGJvdWRpbmdib3guaW50ZXJzZWN0cyhoYW5kLmdldEJvdW5kaW5nQm94KCkpKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hGZW5jZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIENvbnN0YW50cy5pc1RvdWNoRmVuY2UgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGNoZWNrVG91Y2hQb2ludCA9IChmZW5jZTogY2MuTm9kZSwgaGFuZDogY2MuTm9kZSwgZmVuY2VMZWZ0OiBjYy5Ob2RlKTogdm9pZCA9PiB7XHJcbiAgICBsZXQgZl9Cb3VkaW5nQm94ID0gZmVuY2UuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGxldCBmbF9Cb3VkaW5nQm94ID0gZmVuY2VMZWZ0LmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBsZXQgaF9Cb3VkaW5nQm94ID0gaGFuZC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IGNoZWNrUG9zWCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgbGV0IGNoZWNrUG9zWSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuXHJcblxyXG4gICAgLy8gLy8gdG91Y2ggcG9pbnQgNyBcclxuICAgIC8vIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3KSB7XHJcbiAgICAvLyAgICAgaWYoY2hlY2tQb3NYIDwgQ29uc3RhbnRzLnBvaW50NlBvcy54KSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGlmKGNoZWNrUG9zWCA8IENvbnN0YW50cy5wb2ludDZQb3MueCAmJiBjaGVja1Bvc1kgPiBDb25zdGFudHMucG9pbnQ2UG9zLnkpIHtcclxuICAgIC8vICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICAgICAgLy8gQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIC8vIHRvdWNoIHBvaW50IDZcclxuICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ICYmIGZfQm91ZGluZ0JveC5pbnRlcnNlY3RzKGhfQm91ZGluZ0JveCkpIHtcclxuICAgICAgICBpZihjaGVja1Bvc1kgPCBDb25zdGFudHMucG9pbnQ3UG9zLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHRvdWNoIGZlbmNlXHJcbiAgICBpZihmX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhoX0JvdWRpbmdCb3gpKSB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmZlbmNlUG9pbnQueSA+IGNoZWNrUG9zWSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmZlbmNlUG9pbnQueSA8IGNoZWNrUG9zWSAmJiBDb25zdGFudHMucG9pbnQyUG9zLnggPiBjaGVja1Bvc1gpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdG91Y2ggcG9pbnQgMyAmJiA0XHJcbiAgICBpZihoX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhDb25zdGFudHMucG9pbnQzQmRiKSB8fCBoX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhDb25zdGFudHMucG9pbnQ0QmRiKSkge1xyXG4gICAgICAgIGlmKGNoZWNrUG9zWSA8IENvbnN0YW50cy5wb2ludDNQb3MueSAmJiBjaGVja1Bvc1ggPCBDb25zdGFudHMucG9pbnQzUG9zLngpIHtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdG9vb3VjaCBmZW5jZSBMZWZ0XHJcbiAgICBpZihmbF9Cb3VkaW5nQm94LmludGVyc2VjdHMoaF9Cb3VkaW5nQm94KSkge1xyXG4gICAgICAgIGlmKGNoZWNrUG9zWCA8ICBmZW5jZUxlZnQueCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueCA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueCAtIGNjLndpblNpemUud2lkdGggLyAyO1xyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbn1cclxuXHJcblxyXG5jb25zdCBIYW5kID0ge1xyXG4gICAgcm90YXRlRGVmYXVsdDogcm90YXRlRGVmYXVsdCxcclxuICAgIHJvdGF0ZVdpdGhQb2ludDogcm90YXRlV2l0aFBvaW50LFxyXG4gICAgLy8gY2hlY2tDb25kaXRpb24xOiBjaGVja0NvbmRpdGlvbk9mUG9pbnQxLFxyXG4gICAgLy8gY2hlY2tDb25kaXRpb25XaXRoUG9pbnQ6IGNoZWNrQ29uZGl0aW9uV2l0aFBvaW50LFxyXG59XHJcbmNvbnN0IFRvdWNoQXJlYSA9IHtcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb24xOiBjaGVja1RvdWNoQ29uZGl0aW9uMSxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb24yOiBjaGVja1RvdWNoQ29uZGl0aW9uMixcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb24zOiBjaGVja1RvdWNoQ29uZGl0aW9uMyxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb240OiBjaGVja1RvdWNoQ29uZGl0aW9uNCxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb241OiBjaGVja1RvdWNoQ29uZGl0aW9uNSxcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb242OiBjaGVja1RvdWNoQ29uZGl0aW9uNixcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb243OiBjaGVja1RvdWNoQ29uZGl0aW9uNyxcclxuICAgIGNoZWNrVG91Y2hDb25kaXRpb244OiBjaGVja1RvdWNoQ29uZGl0aW9uOCxcclxuICAgIC8vIGNoZWNrVG91Y2hDb25kaXRpb245OiBjaGVja1RvdWNoQ29uZGl0aW9uOSxcclxuICAgIGNoZWNrVG91Y2hQb2ludDogY2hlY2tUb3VjaFBvaW50LFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgICBzdGF0aWMgSGFuZDogdHlwZW9mIEhhbmQgPSBIYW5kO1xyXG4gICAgc3RhdGljIFRvdWNoQXJlYTogdHlwZW9mIFRvdWNoQXJlYSA9IFRvdWNoQXJlYTtcclxuXHJcbn0iXX0=