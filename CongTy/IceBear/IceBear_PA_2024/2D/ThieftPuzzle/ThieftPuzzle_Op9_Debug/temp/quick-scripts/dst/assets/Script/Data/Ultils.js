
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQU0sYUFBYSxHQUFHLFVBQUMsU0FBa0I7SUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsT0FBTyxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQTtBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsU0FBa0I7SUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMs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Qy9DLHFDQUFxQztJQUNyQyxpR0FBaUc7SUFDakcsa0dBQWtHO0lBQ2xHLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsOEZBQThGO0lBQzlGLGNBQWM7SUFDZCxJQUFJO0lBR0oscUJBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN0RixxQkFBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzNGLENBQUMsQ0FBQTtBQUdELElBQU0sSUFBSSxHQUFHO0lBQ1QsYUFBYSxFQUFFLGFBQWE7SUFDNUIsZUFBZSxFQUFFLGVBQWU7Q0FDbkMsQ0FBQTtBQUNELElBQU0sU0FBUyxHQUFHO0lBQ2QsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLGVBQWUsRUFBRSxlQUFlO0NBQ25DLENBQUE7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUhVLFdBQUksR0FBZ0IsSUFBSSxDQUFDO0lBQ3pCLGdCQUFTLEdBQXFCLFNBQVMsQ0FBQztJQUVuRCxhQUFDO0NBTEQsQUFLQyxJQUFBO0FBTFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCByb3RhdGVEZWZhdWx0ID0gKGJhc2VQb2ludDogY2MuVmVjMik6IG51bWJlciA9PiB7XHJcbiAgICBsZXQgdGhpc1BvcyA9IG5ldyBjYy5WZWMyKGJhc2VQb2ludC54LCBiYXNlUG9pbnQueSk7XHJcbiAgICBsZXQgZGlyZWN0aW9uVmVjdG9yID0gdGhpc1Bvcy5zdWIoQ29uc3RhbnRzLnBvaW50QV9Qb3MpO1xyXG4gICAgY29uc3Qgcm90YXRpb25SYWRpYW5zID0gTWF0aC5hdGFuMihkaXJlY3Rpb25WZWN0b3IueSwgZGlyZWN0aW9uVmVjdG9yLngpO1xyXG4gICAgY29uc3Qgcm90YXRpb25EZWdyZWVzID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKHJvdGF0aW9uUmFkaWFucyk7XHJcbiAgICByZXR1cm4gcm90YXRpb25EZWdyZWVzICsgMjA7XHJcbn1cclxuXHJcbmNvbnN0IHJvdGF0ZVdpdGhQb2ludCA9IChiYXNlUG9pbnQ6IGNjLlZlYzIpOiBudW1iZXIgPT4ge1xyXG4gICAgbGV0IHRoaXNQb3MgPSBuZXcgY2MuVmVjMihiYXNlUG9pbnQueCwgYmFzZVBvaW50LnkpO1xyXG4gICAgbGV0IGRpcmVjdGlvblZlY3RvciA9IHRoaXNQb3Muc3ViKENvbnN0YW50cy5uZXdQb2ludCk7XHJcbiAgICBjb25zdCByb3RhdGlvblJhZGlhbnMgPSBNYXRoLmF0YW4yKGRpcmVjdGlvblZlY3Rvci55LCBkaXJlY3Rpb25WZWN0b3IueCk7XHJcbiAgICBjb25zdCByb3RhdGlvbkRlZ3JlZXMgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMocm90YXRpb25SYWRpYW5zKTtcclxuICAgIHJldHVybiByb3RhdGlvbkRlZ3JlZXMgKyAyMDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBjaGVja1RvdWNoQ29uZGl0aW9uMSA9IChoYW5kOiBjYy5Ob2RlLCBwb2ludDogY2MuTm9kZSwgZ3JhcGhpYzogY2MuR3JhcGhpY3MsIHBvaW50Q29tcGFyZTogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYgKGhhbmQueCA+IHBvaW50Q29tcGFyZS54ICYmIGhhbmQueSA+IHBvaW50Q29tcGFyZS55KSB7XHJcbi8vICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vICAgICBpZihoYW5kLnggPCBwb2ludC54ICYmICAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDIpIHtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50MSA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnRBX1BvcztcclxuLy8gICAgICAgICAgICAgZ3JhcGhpYy5jbGVhcigpO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaWYgKGhhbmQueCA+IHBvaW50LnggJiYgaGFuZC55ID4gcG9pbnQueSAmJiAhQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaFBvaW50MSA9IHRydWU7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gcG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjYgPSAoaGFuZDogY2MuTm9kZSwgbmV3UG9pbnQ6IGNjLk5vZGUsIG9sZFBvaW50OiBjYy5Ob2RlLCBncmFwaGljczogY2MuR3JhcGhpY3MpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKCFDb25zdGFudHMuaXNUb3VjaFBvaW50MiAgJiYgIUNvbnN0YW50cy5pc1RvdWNoUG9pbnQzICYmICFDb25zdGFudHMuaXNUb3VjaFBvaW50NCkge1xyXG4vLyAgICAgICAgIGlmIChoYW5kLnggPCBuZXdQb2ludC54ICAmJiBDb25zdGFudHMuaXNUb3VjaFBvaW50MSkge1xyXG4vLyAgICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIHJldHVybjtcclxuLy8gICAgICAgICB9XHJcbiAgICBcclxuLy8gICAgICAgICBpZiAoaGFuZC54ID4gbmV3UG9pbnQueCAmJiBoYW5kLnkgPiBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gb2xkUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gbmV3UG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9IFxyXG4gICAgXHJcbiAgICBcclxuLy8gICAgIGlmIChDb25zdGFudHMuaXNUb3VjaFBvaW50MiAgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDMgJiYgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDQpIHtcclxuLy8gICAgICAgICBpZiAoaGFuZC54IDwgbmV3UG9pbnQueCkge1xyXG4vLyAgICAgICAgICAgICBncmFwaGljcy5jbGVhcigpO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMuaXNEcmF3UG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IENvbnN0YW50cy5wb2ludDRQb3M7IFxyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQxUG9zO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpZiAoaGFuZC54ID4gbmV3UG9pbnQueCAmJiBoYW5kLnkgPiBuZXdQb2ludC55ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm9sZFBvaW50ID0gb2xkUG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLm5ld1BvaW50ID0gbmV3UG9pbnQuZ2V0UG9zaXRpb24oKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGNoZWNrVG91Y2hDb25kaXRpb243ID0gKGhhbmQ6IGNjLk5vZGUpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxKSB7XHJcbi8vICAgICAgICAgaWYoaGFuZC54IDwgQ29uc3RhbnRzLnBvaW50NVBvcy54KSB7XHJcbi8vICAgICAgICAgICAgIENvbnN0YW50cy5vbGRQb2ludCA9IENvbnN0YW50cy5wb2ludEFfUG9zO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQxUG9zO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjggPSAoaGFuZDogY2MuTm9kZSwgZ3JhcGhpYzogY2MuR3JhcGhpY3MpOiB2b2lkID0+IHtcclxuLy8gICAgIGlmKENvbnN0YW50cy5pc1RvdWNoUG9pbnQxICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ2KSB7XHJcbi8vICAgICAgICAgaWYoaGFuZC54IDwgQ29uc3RhbnRzLnBvaW50NlBvcy54ICYmIENvbnN0YW50cy5pc1RvdWNoUG9pbnQ3KSB7XHJcbi8vICAgICAgICAgICAgIGdyYXBoaWMuY2xlYXIoKTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDcgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzRHJhd1BvaW50NyA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnQxUG9zO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQ1UG9zO1xyXG4vLyAgICAgICAgICAgICByZXR1cm47XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpZihoYW5kLnggPiBDb25zdGFudHMucG9pbnQ2UG9zLngpIHtcclxuLy8gICAgICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hQb2ludDcgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMub2xkUG9pbnQgPSBDb25zdGFudHMucG9pbnQ1UG9zO1xyXG4vLyAgICAgICAgICAgICBDb25zdGFudHMubmV3UG9pbnQgPSBDb25zdGFudHMucG9pbnQ2UG9zO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgY2hlY2tUb3VjaENvbmRpdGlvbjkgPSAoYm91ZGluZ2JveDogY2MuUmVjdCwgaGFuZDogY2MuTm9kZSk6IHZvaWQgPT4ge1xyXG4vLyAgICAgaWYoQ29uc3RhbnRzLmlzVG91Y2hQb2ludDEgJiYgYm91ZGluZ2JveC5pbnRlcnNlY3RzKGhhbmQuZ2V0Qm91bmRpbmdCb3goKSkpIHtcclxuLy8gICAgICAgICBDb25zdGFudHMuaXNUb3VjaEZlbmNlID0gdHJ1ZTtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hGZW5jZSA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuY29uc3QgY2hlY2tUb3VjaFBvaW50ID0gKGZlbmNlOiBjYy5Ob2RlLCBoYW5kOiBjYy5Ob2RlLCBmZW5jZUxlZnQ6IGNjLk5vZGUpOiB2b2lkID0+IHtcclxuICAgIGxldCBmX0JvdWRpbmdCb3ggPSBmZW5jZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgbGV0IGZsX0JvdWRpbmdCb3ggPSBmZW5jZUxlZnQuZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGxldCBoX0JvdWRpbmdCb3ggPSBoYW5kLmdldEJvdW5kaW5nQm94KCk7XHJcbiAgICBsZXQgY2hlY2tQb3NYID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICBsZXQgY2hlY2tQb3NZID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuXHJcbiAgICAvLyAvLyB0b3VjaCBwb2ludCA2XHJcbiAgICAvLyBpZihDb25zdGFudHMuaXNUb3VjaFBvaW50NiAmJiBmX0JvdWRpbmdCb3guaW50ZXJzZWN0cyhoX0JvdWRpbmdCb3gpKSB7XHJcbiAgICAvLyAgICAgaWYoY2hlY2tQb3NZIDwgQ29uc3RhbnRzLnBvaW50N1Bvcy55KSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi54ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAvLyAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyAvLyB0b3VjaCBmZW5jZVxyXG4gICAgLy8gaWYoZl9Cb3VkaW5nQm94LmludGVyc2VjdHMoaF9Cb3VkaW5nQm94KSkge1xyXG4gICAgLy8gICAgIGlmKENvbnN0YW50cy5mZW5jZVBvaW50LnkgPiBjaGVja1Bvc1kpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgIFxyXG4gICAgLy8gICAgIGlmKENvbnN0YW50cy5mZW5jZVBvaW50LnkgPCBjaGVja1Bvc1kgJiYgQ29uc3RhbnRzLnBvaW50MlBvcy54ID4gY2hlY2tQb3NYKSB7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi54ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBDb25zdGFudHMuY3VycmVudExvY2FsUG9zaXRpb24ueSA9IENvbnN0YW50cy5jdXJyZW50UG9zaXRpb24ueSAtIGNjLndpblNpemUuaGVpZ2h0IC8gMjtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIC8vIHRvdWNoIHBvaW50IDMgJiYgNFxyXG4gICAgLy8gaWYoaF9Cb3VkaW5nQm94LmludGVyc2VjdHMoQ29uc3RhbnRzLnBvaW50M0JkYikgfHwgaF9Cb3VkaW5nQm94LmludGVyc2VjdHMoQ29uc3RhbnRzLnBvaW50NEJkYikpIHtcclxuICAgIC8vICAgICBpZihjaGVja1Bvc1kgPCBDb25zdGFudHMucG9pbnQzUG9zLnkgJiYgY2hlY2tQb3NYIDwgQ29uc3RhbnRzLnBvaW50M1Bvcy54KSB7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi54ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi54IC0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAvLyAgICAgICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfSBcclxuXHJcbiAgICAvLyAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICByZXR1cm47XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIC8vIHRvb291Y2ggZmVuY2UgTGVmdFxyXG4gICAgLy8gaWYoZmxfQm91ZGluZ0JveC5pbnRlcnNlY3RzKGhfQm91ZGluZ0JveCkpIHtcclxuICAgIC8vICAgICBpZihjaGVja1Bvc1ggPCAgZmVuY2VMZWZ0LngpIHtcclxuICAgIC8vICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIC8vICAgICAgICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnkgPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnkgLSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgLy8gICAgIHJldHVybjtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgQ29uc3RhbnRzLmN1cnJlbnRMb2NhbFBvc2l0aW9uLnggPSBDb25zdGFudHMuY3VycmVudFBvc2l0aW9uLnggLSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgIENvbnN0YW50cy5jdXJyZW50TG9jYWxQb3NpdGlvbi55ID0gQ29uc3RhbnRzLmN1cnJlbnRQb3NpdGlvbi55IC0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG59XHJcblxyXG5cclxuY29uc3QgSGFuZCA9IHtcclxuICAgIHJvdGF0ZURlZmF1bHQ6IHJvdGF0ZURlZmF1bHQsXHJcbiAgICByb3RhdGVXaXRoUG9pbnQ6IHJvdGF0ZVdpdGhQb2ludCxcclxufVxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uMTogY2hlY2tUb3VjaENvbmRpdGlvbjEsXHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uNjogY2hlY2tUb3VjaENvbmRpdGlvbjYsXHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uNzogY2hlY2tUb3VjaENvbmRpdGlvbjcsXHJcbiAgICAvLyBjaGVja1RvdWNoQ29uZGl0aW9uODogY2hlY2tUb3VjaENvbmRpdGlvbjgsXHJcbiAgICBjaGVja1RvdWNoUG9pbnQ6IGNoZWNrVG91Y2hQb2ludCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVsdGlscyB7XHJcblxyXG4gICAgc3RhdGljIEhhbmQ6IHR5cGVvZiBIYW5kID0gSGFuZDtcclxuICAgIHN0YXRpYyBUb3VjaEFyZWE6IHR5cGVvZiBUb3VjaEFyZWEgPSBUb3VjaEFyZWE7XHJcblxyXG59Il19