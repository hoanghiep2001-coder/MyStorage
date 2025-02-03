
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
var checkCollideBubblePoints = function (bdx) {
    for (var i = 0; i < constants_1.Constants.cleanHair_Points.length; i++) {
        var currentNode = constants_1.Constants.cleanHair_Points[i];
        if (currentNode.getBoundingBox().intersects(bdx)) {
            constants_1.Constants.isTouchCleanHair = true;
            for (var j = 0; j < constants_1.Constants.cleanHair_PointsStatus.length; j++) {
                if (!constants_1.Constants.cleanHair_PointsStatus[j]) {
                    constants_1.Constants.cleanHair_PointsStatus[j] = true;
                    constants_1.Constants.cleanHair_Points.splice(i, 1);
                    constants_1.Constants.spine_Bubbles[i].setAnimation(0, "action03_only_bubble", false);
                    constants_1.Constants.spine_Bubbles.splice(i, 1);
                    if (constants_1.Constants.cleanHair_PointsStatus.every(function (status) { return status === true; })) {
                        constants_1.Constants.isDoneCleanHair = true;
                    }
                    break;
                }
            }
            break;
        }
    }
};
var checkCollideMaggot = function (bdx, maggot) {
    if (bdx.intersects(maggot)) {
        constants_1.Constants.isTouchMaggot = true;
    }
};
var TouchArea = {
// checkCollideBubblePoints: checkCollideBubblePoints,
// checkCollideMaggot: checkCollideMaggot
};
var Ultils = /** @class */ (function () {
    function Ultils() {
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLElBQU0sd0JBQXdCLEdBQUcsVUFBQyxHQUFZO0lBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4RCxJQUFJLFdBQVcsR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QyxxQkFBUyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcscUJBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxxQkFBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN0QyxxQkFBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDM0MscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUV4QyxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMxRSxxQkFBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVyQyxJQUFJLHFCQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxLQUFLLElBQUksRUFBZixDQUFlLENBQUMsRUFBRTt3QkFDbkUscUJBQVMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO3FCQUNwQztvQkFDRCxNQUFNO2lCQUNUO2FBQ0o7WUFDRCxNQUFNO1NBQ1Q7S0FDSjtBQUNMLENBQUMsQ0FBQTtBQUVELElBQU0sa0JBQWtCLEdBQUcsVUFBQyxHQUFZLEVBQUUsTUFBZTtJQUNyRCxJQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdkIscUJBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0tBQ2xDO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsSUFBTSxTQUFTLEdBQUc7QUFDZCxzREFBc0Q7QUFDdEQseUNBQXlDO0NBQzVDLENBQUE7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUZTLGdCQUFTLEdBQXFCLFNBQVMsQ0FBQztJQUVsRCxhQUFDO0NBSkQsQUFJQyxJQUFBO0FBSlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuY29uc3QgY2hlY2tDb2xsaWRlQnViYmxlUG9pbnRzID0gKGJkeDogY2MuUmVjdCk6IHZvaWQgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IENvbnN0YW50cy5jbGVhbkhhaXJfUG9pbnRzW2ldO1xyXG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHMoYmR4KSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNUb3VjaENsZWFuSGFpciA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNTdGF0dXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNTdGF0dXNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuY2xlYW5IYWlyX1BvaW50c1N0YXR1c1tqXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHMuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb25zdGFudHMuc3BpbmVfQnViYmxlc1tpXS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wM19vbmx5X2J1YmJsZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLnNwaW5lX0J1YmJsZXMuc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmNsZWFuSGFpcl9Qb2ludHNTdGF0dXMuZXZlcnkoc3RhdHVzID0+IHN0YXR1cyA9PT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzRG9uZUNsZWFuSGFpciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY2hlY2tDb2xsaWRlTWFnZ290ID0gKGJkeDogY2MuUmVjdCwgbWFnZ290OiBjYy5SZWN0KTogdm9pZCA9PiB7XHJcbiAgICBpZihiZHguaW50ZXJzZWN0cyhtYWdnb3QpKSB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzVG91Y2hNYWdnb3QgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcbiAgICAvLyBjaGVja0NvbGxpZGVCdWJibGVQb2ludHM6IGNoZWNrQ29sbGlkZUJ1YmJsZVBvaW50cyxcclxuICAgIC8vIGNoZWNrQ29sbGlkZU1hZ2dvdDogY2hlY2tDb2xsaWRlTWFnZ290XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVbHRpbHMge1xyXG5cclxuICAgc3RhdGljIFRvdWNoQXJlYTogdHlwZW9mIFRvdWNoQXJlYSA9IFRvdWNoQXJlYTtcclxuXHJcbn0iXX0=