
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/RopeController');
require('./assets/Script/Controller/RopePart');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Ultils');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/Responsive');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/RopeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2b16W9s4RPx5qn/tZMueJI', 'RopeController');
// Script/Controller/RopeController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RopeController = /** @class */ (function (_super) {
    __extends(RopeController, _super);
    function RopeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mouseJoint = false;
        _this.canvas = null;
        _this.size = cc.size(0, 0);
        return _this;
        // private createBound(node, x, y, width, height): void {
        //     let collider = node.addComponent(cc.PhysicsBoxCollider);
        //     collider.offset.x = x;
        //     collider.offset.y = y;
        //     collider.size.width = width;
        //     collider.size.height = height;
        // }
    }
    RopeController.prototype.start = function () {
        var width = this.size.width || this.canvas.width;
        var height = this.size.height || this.canvas.height;
        // let node = new cc.Node();
        // let body = node.addComponent(cc.RigidBody);
        // body.type = cc.RigidBodyType.Static;
        // if (this.mouseJoint) {
        //     // add mouse joint
        //     let joint = node.addComponent(cc.MouseJoint);
        //     joint.mouseRegion = this.node;    
        // }
        // this.createBound(node, 0, height/2, width, 20);
        // this.createBound(node, 0, -height/2, width, 20);
        // this.createBound(node, -width/2, 0, 20, height);
        // this.createBound(node, width/2, 0, 20, height);
        // node.parent = this.node;
    };
    __decorate([
        property(cc.Boolean)
    ], RopeController.prototype, "mouseJoint", void 0);
    __decorate([
        property(cc.Node)
    ], RopeController.prototype, "canvas", void 0);
    __decorate([
        property(cc.Size)
    ], RopeController.prototype, "size", void 0);
    RopeController = __decorate([
        ccclass
    ], RopeController);
    return RopeController;
}(cc.Component));
exports.default = RopeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxSb3BlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXdDQztRQXJDRyxnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7UUEwQjdCLHlEQUF5RDtRQUN6RCwrREFBK0Q7UUFDL0QsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QixtQ0FBbUM7UUFDbkMscUNBQXFDO1FBQ3JDLElBQUk7SUFDUixDQUFDO0lBOUJhLDhCQUFLLEdBQWY7UUFDSSxJQUFJLEtBQUssR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVyRCw0QkFBNEI7UUFFNUIsOENBQThDO1FBQzlDLHVDQUF1QztRQUV2Qyx5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLG9EQUFvRDtRQUNwRCx5Q0FBeUM7UUFDekMsSUFBSTtRQUVKLGtEQUFrRDtRQUNsRCxtREFBbUQ7UUFDbkQsbURBQW1EO1FBQ25ELGtEQUFrRDtRQUVsRCwyQkFBMkI7SUFDL0IsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNPO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQVBaLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F3Q2xDO0lBQUQscUJBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzJDLEVBQUUsQ0FBQyxTQUFTLEdBd0N2RDtrQkF4Q29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3BlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBtb3VzZUpvaW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbnZhczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU2l6ZSlcclxuICAgIHNpemU6IGNjLlNpemUgPSBjYy5zaXplKDAsMCk7XHJcbiBcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHdpZHRoICAgPSB0aGlzLnNpemUud2lkdGggfHwgdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCAgPSB0aGlzLnNpemUuaGVpZ2h0IHx8IHRoaXMuY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG5cclxuICAgICAgICAvLyBsZXQgYm9keSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgLy8gYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLm1vdXNlSm9pbnQpIHtcclxuICAgICAgICAvLyAgICAgLy8gYWRkIG1vdXNlIGpvaW50XHJcbiAgICAgICAgLy8gICAgIGxldCBqb2ludCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLk1vdXNlSm9pbnQpO1xyXG4gICAgICAgIC8vICAgICBqb2ludC5tb3VzZVJlZ2lvbiA9IHRoaXMubm9kZTsgICAgXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNyZWF0ZUJvdW5kKG5vZGUsIDAsIGhlaWdodC8yLCB3aWR0aCwgMjApO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlQm91bmQobm9kZSwgMCwgLWhlaWdodC8yLCB3aWR0aCwgMjApO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlQm91bmQobm9kZSwgLXdpZHRoLzIsIDAsIDIwLCBoZWlnaHQpO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlQm91bmQobm9kZSwgd2lkdGgvMiwgMCwgMjAsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgY3JlYXRlQm91bmQobm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk6IHZvaWQge1xyXG4gICAgLy8gICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAvLyAgICAgY29sbGlkZXIub2Zmc2V0LnggPSB4O1xyXG4gICAgLy8gICAgIGNvbGxpZGVyLm9mZnNldC55ID0geTtcclxuICAgIC8vICAgICBjb2xsaWRlci5zaXplLndpZHRoID0gd2lkdGg7XHJcbiAgICAvLyAgICAgY29sbGlkZXIuc2l6ZS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaccb/69FZDu6rC4YmR+uAW', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculatedY: 0,
    calculatedX: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["ropeSound1"] = "ropeSound1";
    SoundTrack["ropeSound2"] = "ropeSound2";
    SoundTrack["completeSound"] = "completeSound";
    SoundTrack["breakRopeSound"] = "breakRopeSound";
    SoundTrack["completeSound2"] = "completeSound2";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.currentPosition = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isCollideKnot1 = false;
    Constants.isCollideKnot2 = false;
    Constants.knot1Status = false;
    Constants.knot2Status = true;
    Constants.knot3Status = false;
    Constants.knot4Status = false;
    Constants.knot5Status = true;
    Constants.step = 1;
    // event
    Constants.Event = Event;
    // SoundTrack
    Constants.SoundTrack = SoundTrack;
    // ironSource
    Constants.ironSource = IronSource;
    // Responsive
    Constants.Responsive = Responsive;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsRUFBRTtDQUNwQixDQUFBO0FBR0QsSUFBSyxVQU9KO0FBUEQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIsdUNBQXlCLENBQUE7SUFDekIsdUNBQXlCLENBQUE7SUFDekIsNkNBQStCLENBQUE7SUFDL0IsK0NBQWlDLENBQUE7SUFDakMsK0NBQWlDLENBQUE7QUFDckMsQ0FBQyxFQVBJLFVBQVUsS0FBVixVQUFVLFFBT2Q7QUFHRDtJQUFBO0lBZ0NBLENBQUM7SUE5QkcsWUFBWTtJQUNMLHlCQUFlLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU3QyxrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQix3QkFBYyxHQUFZLEtBQUssQ0FBQztJQUNoQyx3QkFBYyxHQUFZLEtBQUssQ0FBQztJQUVoQyxxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixxQkFBVyxHQUFZLElBQUksQ0FBQztJQUM1QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3QixxQkFBVyxHQUFZLElBQUksQ0FBQztJQUM1QixjQUFJLEdBQVcsQ0FBQyxDQUFDO0lBR3hCLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQWhDRCxBQWdDQyxJQUFBO0FBaENZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIEV2ZW50IHtcclxuICAgIHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIixcclxuICAgIHRvdWNoTW92ZSA9IFwidG91Y2htb3ZlXCIsXHJcbiAgICB0b3VjaEVuZCA9IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsID0gXCJ0b3VjaGNhbmNlbFwiXHJcbn1cclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICByb3BlU291bmQxID0gXCJyb3BlU291bmQxXCIsXHJcbiAgICByb3BlU291bmQyID0gXCJyb3BlU291bmQyXCIsXHJcbiAgICBjb21wbGV0ZVNvdW5kID0gXCJjb21wbGV0ZVNvdW5kXCIsXHJcbiAgICBicmVha1JvcGVTb3VuZCA9IFwiYnJlYWtSb3BlU291bmRcIixcclxuICAgIGNvbXBsZXRlU291bmQyID0gXCJjb21wbGV0ZVNvdW5kMlwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgY3VycmVudFBvc2l0aW9uOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XHJcblxyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNDb2xsaWRlS25vdDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NvbGxpZGVLbm90MjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN0YXRpYyBrbm90MVN0YXR1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGtub3QyU3RhdHVzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBrbm90M1N0YXR1czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGtub3Q0U3RhdHVzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMga25vdDVTdGF0dXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIHN0ZXA6IG51bWJlciA9IDE7XHJcblxyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQ6IHR5cGVvZiBFdmVudCA9IEV2ZW50O1xyXG5cclxuXHJcbiAgICAvLyBTb3VuZFRyYWNrXHJcbiAgICBzdGF0aWMgU291bmRUcmFjazogdHlwZW9mIFNvdW5kVHJhY2sgPSBTb3VuZFRyYWNrO1xyXG5cclxuXHJcbiAgICAvLyBpcm9uU291cmNlXHJcbiAgICBzdGF0aWMgaXJvblNvdXJjZTogdHlwZW9mIElyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZTogdHlwZW9mIFJlc3BvbnNpdmUgPSBSZXNwb25zaXZlO1xyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/Responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3abaWwEQhAi5Yf4wF9VZxN', 'Responsive');
// Script/Plugin/Responsive.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GamePlay_1 = require("../Controller/GamePlay");
var TouchAreaController_1 = require("../Controller/TouchAreaController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TouchAreaController = null;
        _this.GamePlay = null;
        _this.background = null;
        // state
        _this.device = "";
        _this.isRotate = false;
        _this.HORIZONTAL_IPX = "horizontal_IPX";
        _this.HORIZONTAL_TABLET = "horizontal_Tablet";
        _this.VERTICAL_IPX = "vertical_IPX";
        _this.VERTICAL_MOBILE = "vertical_Mobile";
        return _this;
    }
    Responsive.prototype.onLoad = function () {
    };
    Responsive.prototype.start = function () {
    };
    Responsive.prototype.handleRotate = function () {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        }
        else {
            this.setHorizontalForTablet();
        }
    };
    Responsive.prototype.setHorizontalForIpX = function () {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_IPX;
        this.background.scale = 0.6;
        this.GamePlay.UI_Hrz.opacity = 255;
        this.GamePlay.UI_Vtc.opacity = 0;
        this.GamePlay.Character.scale = 1.3;
        this.GamePlay.Character.x = 152;
        this.GamePlay.Character.y = -140;
        this.TouchAreaController.HideMask.x = -55;
        this.TouchAreaController.HideMask.y = -95;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.background.scale = 0.4;
        this.GamePlay.UI_Hrz.opacity = 255;
        this.GamePlay.UI_Vtc.opacity = 0;
        this.GamePlay.Character.scale = 1.3;
        this.GamePlay.Character.x = 152;
        this.GamePlay.Character.y = -140;
        this.TouchAreaController.HideMask.x = -65;
        this.TouchAreaController.HideMask.y = -120;
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
            this.setIphoneX();
        }
        else {
            this.setMobile();
        }
    };
    Responsive.prototype.setIphoneX = function () {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }
        this.device = this.VERTICAL_IPX;
        this.GamePlay.UI_Hrz.opacity = 0;
        this.GamePlay.UI_Vtc.opacity = 255;
        this.background.scale = 0.4;
        this.GamePlay.Character.scale = 1;
        this.GamePlay.Character.x = 0;
        this.GamePlay.Character.y = -235;
        this.TouchAreaController.HideMask.x = 45;
        this.TouchAreaController.HideMask.y = 16;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.GamePlay.UI_Hrz.opacity = 0;
            this.GamePlay.UI_Vtc.opacity = 255;
            this.background.scale = 0.4;
            this.GamePlay.Character.scale = 1;
            this.GamePlay.Character.x = 0;
            this.GamePlay.Character.y = -235;
            this.TouchAreaController.HideMask.x = 45;
            this.TouchAreaController.HideMask.y = 16;
        }
        else {
            this.GamePlay.UI_Hrz.opacity = 0;
            this.GamePlay.UI_Vtc.opacity = 255;
            this.background.scale = 0.4;
            this.GamePlay.Character.scale = 1;
            this.GamePlay.Character.x = 0;
            this.GamePlay.Character.y = -235;
            this.TouchAreaController.HideMask.x = 45;
            this.TouchAreaController.HideMask.y = 16;
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(TouchAreaController_1.TouchAreaController)
    ], Responsive.prototype, "TouchAreaController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Responsive.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], Responsive.prototype, "background", void 0);
    Responsive = __decorate([
        ccclass
    ], Responsive);
    return Responsive;
}(cc.Component));
exports.default = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLHlFQUF3RTtBQUN4RSwrQ0FBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFxSkM7UUFuSkcseUJBQW1CLEdBQXdCLElBQUksQ0FBQztRQUVoRCxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDOztJQXFJaEQsQ0FBQztJQW5JYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxxQkFBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCxxQkFBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0ksSUFBSSxF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SUFBSSxDQUFDO2tEQUNTO0lBUFYsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFKOUI7SUFBRCxpQkFBQztDQXJKRCxBQXFKQyxDQXJKdUMsRUFBRSxDQUFDLFNBQVMsR0FxSm5EO2tCQXJKb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi4vQ29udHJvbGxlci9HYW1lUGxheVwiO1xyXG5pbXBvcnQgeyBUb3VjaEFyZWFDb250cm9sbGVyIH0gZnJvbSBcIi4uL0NvbnRyb2xsZXIvVG91Y2hBcmVhQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoVG91Y2hBcmVhQ29udHJvbGxlcilcclxuICAgIFRvdWNoQXJlYUNvbnRyb2xsZXI6IFRvdWNoQXJlYUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBkZXZpY2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEhPUklaT05UQUxfSVBYOiBzdHJpbmcgPSBcImhvcml6b250YWxfSVBYXCI7XHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogc3RyaW5nID0gXCJob3Jpem9udGFsX1RhYmxldFwiO1xyXG4gICAgVkVSVElDQUxfSVBYOiBzdHJpbmcgPSBcInZlcnRpY2FsX0lQWFwiO1xyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBzdHJpbmcgPSBcInZlcnRpY2FsX01vYmlsZVwiO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLkhPUklaT05UQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9JUFg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNjYWxlID0gMC42O1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX0hyei5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfVnRjLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LkNoYXJhY3Rlci5zY2FsZSA9IDEuMztcclxuICAgICAgICB0aGlzLkdhbWVQbGF5LkNoYXJhY3Rlci54ID0gMTUyO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuQ2hhcmFjdGVyLnkgPSAtMTQwO1xyXG5cclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuSGlkZU1hc2sueCA9IC01NTtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuSGlkZU1hc2sueSA9IC05NTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWxGb3JUYWJsZXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX1RBQkxFVDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc2NhbGUgPSAwLjQ7XHJcblxyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfSHJ6Lm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9WdGMub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuQ2hhcmFjdGVyLnNjYWxlID0gMS4zO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuQ2hhcmFjdGVyLnggPSAxNTI7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5DaGFyYWN0ZXIueSA9IC0xNDA7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLkhpZGVNYXNrLnggPSAtNjU7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLkhpZGVNYXNrLnkgPSAtMTIwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmVydGljYWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfSHJ6Lm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfVnRjLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNjYWxlID0gMC40O1xyXG5cclxuICAgICAgICB0aGlzLkdhbWVQbGF5LkNoYXJhY3Rlci5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5DaGFyYWN0ZXIueCA9IDA7XHJcbiAgICAgICAgdGhpcy5HYW1lUGxheS5DaGFyYWN0ZXIueSA9IC0yMzU7XHJcbiAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLkhpZGVNYXNrLnggPSA0NTtcclxuICAgICAgICB0aGlzLlRvdWNoQXJlYUNvbnRyb2xsZXIuSGlkZU1hc2sueSA9IDE2O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IDEuNSkge1xyXG4gICAgICAgICAgICAvLyBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0ID49IDAuNiAmJiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgPCAwLjYyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBtb2JpbGUgbW9kZSBhcHBsb3ZpblxyXG5cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IFBsdXMgLyA3IC8gNyBQbHVzICAgXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuVUlfSHJ6Lm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX1Z0Yy5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQuc2NhbGUgPSAwLjQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LkNoYXJhY3Rlci5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuR2FtZVBsYXkuQ2hhcmFjdGVyLnggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LkNoYXJhY3Rlci55ID0gLTIzNTtcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLkhpZGVNYXNrLnggPSA0NTtcclxuICAgICAgICAgICAgdGhpcy5Ub3VjaEFyZWFDb250cm9sbGVyLkhpZGVNYXNrLnkgPSAxNjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LlVJX0hyei5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5VSV9WdGMub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNjYWxlID0gMC40O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5DaGFyYWN0ZXIuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVQbGF5LkNoYXJhY3Rlci54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5HYW1lUGxheS5DaGFyYWN0ZXIueSA9IC0yMzU7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5IaWRlTWFzay54ID0gNDU7XHJcbiAgICAgICAgICAgIHRoaXMuVG91Y2hBcmVhQ29udHJvbGxlci5IaWRlTWFzay55ID0gMTY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '459a6fkmHFH5Z+5+z1O55SB', 'GameController');
// Script/Controller/GameController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
    };
    GameController.prototype.start = function () {
        window.gameReady && window.gameReady();
    };
    GameController.prototype.installHandle = function () {
        console.log("install");
        constants_1.Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
        window.gameEnd && window.gameEnd();
        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }
        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }
        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }
        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.mastertwisted.tangle3dpuzzle");
                return;
            }
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
            //     return;
            // }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.mastertwisted.tangle3dpuzzle");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GameController.prototype, "AudioManager", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.GameController = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsbUZBQW1GLENBQUMsQ0FBQztnQkFDaEcsT0FBTzthQUNWO1lBRUQsOEZBQThGO1lBQzlGLHVFQUF1RTtZQUN2RSxjQUFjO1lBQ2QsSUFBSTtZQUVKLEtBQUssQ0FBQyxJQUFJLENBQUMsbUZBQW1GLENBQUMsQ0FBQztZQUNoRyxPQUFPO1NBQ1Y7UUFDRCwyRUFBMkU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO3dEQUNXO0lBRnpCLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0F0REQsQUFzREMsQ0F0RG1DLEVBQUUsQ0FBQyxTQUFTLEdBc0QvQztBQXREWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluc3RhbGxIYW5kbGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnN0YWxsXCIpO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmFuLm1hc3RlcnR3aXN0ZWQudGFuZ2xlM2RwdXp6bGVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgLy8gICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkNjQ0OTI2OTczMz9tdD04XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5tYXN0ZXJ0d2lzdGVkLnRhbmdsZTNkcHV6emxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgbWluZHdvcmsuIHdpbmRvdyBhbHdheSBhdmFpYWJsZSBzbyBza2lwIHVuZGVmaW5lZCBjaGVja1xyXG4gICAgICAgIHdpbmRvdy5pbnN0YWxsICYmIHdpbmRvdy5pbnN0YWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/RopePart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7bc5h3TcJEULzcwms3QbNi', 'RopePart');
// Script/Controller/RopePart.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Anchor_Position: {
      "default": 1,
      range: [0, 1],
      notify: function notify() {
        if (CC_EDITOR) return;
        this.Update_Anchor();
      }
    },
    Pos_Short: 0,
    Pos_Long: 24
  },
  onLoad: function onLoad() {
    this.Joints = this.node.getComponentsInChildren(cc.RevoluteJoint);
    this.Joints.reverse();
  },
  Update_Anchor: function Update_Anchor() {
    for (var i = 1; i < this.Joints.length; i++) {
      var part_count = this.Joints.length;
      var ap = cc.misc.clamp01((this.Anchor_Position - i * (1 / part_count)) * part_count);
      var anchor = cc.misc.lerp(this.Pos_Short, this.Pos_Long, ap);

      if (this.Joints[i].name.startsWith("RopeItem")) {
        this.Joints[i].anchor.x = anchor;
        this.Joints[i].connectedAnchor.x = -anchor;
        this.Joints[i].apply();
        this.Joints[i].node.height = cc.misc.lerp(anchor * 2, this.Pos_Long * 2 + 12, 0.8);
      }

      if (this.Joints[i].name.startsWith("RopeItem_First")) {
        this.Joints[i].anchor.y = anchor;
        this.Joints[i].connectedAnchor.x = -anchor;
        this.Joints[i].apply();
        this.Joints[i].node.height = cc.misc.lerp(anchor * 2, this.Pos_Long * 2 + 12, 0.8);
        break;
      } // if (this.Joints[i].name.startsWith("RopeItem_Last")) {
      //     console.log(this.Joints[i].name);
      //     this.Joints[i].anchor.y = anchor;
      //     this.Joints[i].connectedAnchor.x = -anchor;
      //     this.Joints[i].apply();
      //     this.Joints[i].node.height = cc.misc.lerp(anchor * 2, this.Pos_Long * 2 + 40, 0.8);
      //     break;
      // }

    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxSb3BlUGFydC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkFuY2hvcl9Qb3NpdGlvbiIsInJhbmdlIiwibm90aWZ5IiwiQ0NfRURJVE9SIiwiVXBkYXRlX0FuY2hvciIsIlBvc19TaG9ydCIsIlBvc19Mb25nIiwib25Mb2FkIiwiSm9pbnRzIiwibm9kZSIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiUmV2b2x1dGVKb2ludCIsInJldmVyc2UiLCJpIiwibGVuZ3RoIiwicGFydF9jb3VudCIsImFwIiwibWlzYyIsImNsYW1wMDEiLCJhbmNob3IiLCJsZXJwIiwibmFtZSIsInN0YXJ0c1dpdGgiLCJ4IiwiY29ubmVjdGVkQW5jaG9yIiwiYXBwbHkiLCJoZWlnaHQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2IsaUJBQVMsQ0FESTtBQUViQyxNQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZNO0FBR2JDLE1BQUFBLE1BSGEsb0JBR0o7QUFDTCxZQUFJQyxTQUFKLEVBQWU7QUFDZixhQUFLQyxhQUFMO0FBQ0g7QUFOWSxLQURUO0FBU1JDLElBQUFBLFNBQVMsRUFBRSxDQVRIO0FBVVJDLElBQUFBLFFBQVEsRUFBRTtBQVZGLEdBSFA7QUFnQkxDLEVBQUFBLE1BaEJLLG9CQWdCSTtBQUNMLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxJQUFMLENBQVVDLHVCQUFWLENBQWtDZCxFQUFFLENBQUNlLGFBQXJDLENBQWQ7QUFDQSxTQUFLSCxNQUFMLENBQVlJLE9BQVo7QUFDSCxHQW5CSTtBQXFCTFIsRUFBQUEsYUFyQkssMkJBcUJXO0FBRVosU0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtMLE1BQUwsQ0FBWU0sTUFBaEMsRUFBd0NELENBQUMsRUFBekMsRUFBNkM7QUFDekMsVUFBSUUsVUFBVSxHQUFHLEtBQUtQLE1BQUwsQ0FBWU0sTUFBN0I7QUFFQSxVQUFJRSxFQUFFLEdBQUdwQixFQUFFLENBQUNxQixJQUFILENBQVFDLE9BQVIsQ0FBZ0IsQ0FBQyxLQUFLbEIsZUFBTCxHQUF1QmEsQ0FBQyxJQUFJLElBQUlFLFVBQVIsQ0FBekIsSUFBZ0RBLFVBQWhFLENBQVQ7QUFFQSxVQUFJSSxNQUFNLEdBQUd2QixFQUFFLENBQUNxQixJQUFILENBQVFHLElBQVIsQ0FBYSxLQUFLZixTQUFsQixFQUE2QixLQUFLQyxRQUFsQyxFQUE0Q1UsRUFBNUMsQ0FBYjs7QUFDQSxVQUFJLEtBQUtSLE1BQUwsQ0FBWUssQ0FBWixFQUFlUSxJQUFmLENBQW9CQyxVQUFwQixDQUErQixVQUEvQixDQUFKLEVBQWdEO0FBQzVDLGFBQUtkLE1BQUwsQ0FBWUssQ0FBWixFQUFlTSxNQUFmLENBQXNCSSxDQUF0QixHQUEwQkosTUFBMUI7QUFDQSxhQUFLWCxNQUFMLENBQVlLLENBQVosRUFBZVcsZUFBZixDQUErQkQsQ0FBL0IsR0FBbUMsQ0FBQ0osTUFBcEM7QUFDQSxhQUFLWCxNQUFMLENBQVlLLENBQVosRUFBZVksS0FBZjtBQUNBLGFBQUtqQixNQUFMLENBQVlLLENBQVosRUFBZUosSUFBZixDQUFvQmlCLE1BQXBCLEdBQTZCOUIsRUFBRSxDQUFDcUIsSUFBSCxDQUFRRyxJQUFSLENBQWFELE1BQU0sR0FBRyxDQUF0QixFQUF5QixLQUFLYixRQUFMLEdBQWdCLENBQWhCLEdBQW9CLEVBQTdDLEVBQWlELEdBQWpELENBQTdCO0FBQ0g7O0FBRUQsVUFBSSxLQUFLRSxNQUFMLENBQVlLLENBQVosRUFBZVEsSUFBZixDQUFvQkMsVUFBcEIsQ0FBK0IsZ0JBQS9CLENBQUosRUFBc0Q7QUFDbEQsYUFBS2QsTUFBTCxDQUFZSyxDQUFaLEVBQWVNLE1BQWYsQ0FBc0JRLENBQXRCLEdBQTBCUixNQUExQjtBQUNBLGFBQUtYLE1BQUwsQ0FBWUssQ0FBWixFQUFlVyxlQUFmLENBQStCRCxDQUEvQixHQUFtQyxDQUFDSixNQUFwQztBQUNBLGFBQUtYLE1BQUwsQ0FBWUssQ0FBWixFQUFlWSxLQUFmO0FBQ0EsYUFBS2pCLE1BQUwsQ0FBWUssQ0FBWixFQUFlSixJQUFmLENBQW9CaUIsTUFBcEIsR0FBNkI5QixFQUFFLENBQUNxQixJQUFILENBQVFHLElBQVIsQ0FBYUQsTUFBTSxHQUFHLENBQXRCLEVBQXlCLEtBQUtiLFFBQUwsR0FBZ0IsQ0FBaEIsR0FBb0IsRUFBN0MsRUFBaUQsR0FBakQsQ0FBN0I7QUFDQTtBQUNILE9BbkJ3QyxDQXFCekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSDtBQUVKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBBbmNob3JfUG9zaXRpb246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMSxcclxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxXSxcclxuICAgICAgICAgICAgbm90aWZ5KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKENDX0VESVRPUikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VcGRhdGVfQW5jaG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFBvc19TaG9ydDogMCxcclxuICAgICAgICBQb3NfTG9uZzogMjQsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLkpvaW50cyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5SZXZvbHV0ZUpvaW50KTtcclxuICAgICAgICB0aGlzLkpvaW50cy5yZXZlcnNlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFVwZGF0ZV9BbmNob3IoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5Kb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBhcnRfY291bnQgPSB0aGlzLkpvaW50cy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXAgPSBjYy5taXNjLmNsYW1wMDEoKHRoaXMuQW5jaG9yX1Bvc2l0aW9uIC0gaSAqICgxIC8gcGFydF9jb3VudCkpICogcGFydF9jb3VudCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW5jaG9yID0gY2MubWlzYy5sZXJwKHRoaXMuUG9zX1Nob3J0LCB0aGlzLlBvc19Mb25nLCBhcCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkpvaW50c1tpXS5uYW1lLnN0YXJ0c1dpdGgoXCJSb3BlSXRlbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Kb2ludHNbaV0uYW5jaG9yLnggPSBhbmNob3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5jb25uZWN0ZWRBbmNob3IueCA9IC1hbmNob3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5hcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Kb2ludHNbaV0ubm9kZS5oZWlnaHQgPSBjYy5taXNjLmxlcnAoYW5jaG9yICogMiwgdGhpcy5Qb3NfTG9uZyAqIDIgKyAxMiwgMC44KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuSm9pbnRzW2ldLm5hbWUuc3RhcnRzV2l0aChcIlJvcGVJdGVtX0ZpcnN0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5hbmNob3IueSA9IGFuY2hvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuSm9pbnRzW2ldLmNvbm5lY3RlZEFuY2hvci54ID0gLWFuY2hvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuSm9pbnRzW2ldLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkpvaW50c1tpXS5ub2RlLmhlaWdodCA9IGNjLm1pc2MubGVycChhbmNob3IgKiAyLCB0aGlzLlBvc19Mb25nICogMiArIDEyLCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLkpvaW50c1tpXS5uYW1lLnN0YXJ0c1dpdGgoXCJSb3BlSXRlbV9MYXN0XCIpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLkpvaW50c1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuSm9pbnRzW2ldLmFuY2hvci55ID0gYW5jaG9yO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Kb2ludHNbaV0uY29ubmVjdGVkQW5jaG9yLnggPSAtYW5jaG9yO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Kb2ludHNbaV0uYXBwbHkoKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuSm9pbnRzW2ldLm5vZGUuaGVpZ2h0ID0gY2MubWlzYy5sZXJwKGFuY2hvciAqIDIsIHRoaXMuUG9zX0xvbmcgKiAyICsgNDAsIDAuOCk7XHJcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchArea = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxVbHRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxTQUFTLEdBQUcsRUFFakIsQ0FBQTtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBRlMsZ0JBQVMsR0FBcUIsU0FBUyxDQUFDO0lBRWxELGFBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5jb25zdCBUb3VjaEFyZWEgPSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWx0aWxzIHtcclxuXHJcbiAgIHN0YXRpYyBUb3VjaEFyZWE6IHR5cGVvZiBUb3VjaEFyZWEgPSBUb3VjaEFyZWE7XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7cf9rDSJL36cJtz1lUze/', 'AudioManager');
// Script/Plugin/AudioManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // sound 
        _this.bgSound = null;
        _this.ropeSound1 = null;
        _this.ropeSound2 = null;
        _this.breakRopeSound = null;
        _this.completeSound = null;
        _this.completeSound2 = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "ropeSound1":
                    this.ropeSound1.play();
                    break;
                case "ropeSound2":
                    this.ropeSound2.play();
                    break;
                case "completeSound":
                    this.completeSound.play();
                    break;
                case "completeSound2":
                    this.completeSound2.play();
                    break;
                case "breakRopeSound":
                    this.breakRopeSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "ropeSound1":
                this.ropeSound1.stop();
                break;
            case "ropeSound2":
                this.ropeSound2.stop();
                break;
            case "completeSound":
                this.completeSound.stop();
                break;
            case "completeSound2":
                this.completeSound2.stop();
                break;
            case "breakRopeSound":
                this.breakRopeSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.ropeSound1.stop();
        this.ropeSound2.stop();
        this.completeSound.stop();
        this.completeSound2.stop();
        this.breakRopeSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ropeSound1", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "ropeSound2", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "breakRopeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "completeSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "completeSound2", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE4RUM7UUE1RUcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7O0lBZ0UxQyxDQUFDO0lBN0RVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ2pDLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssWUFBWTtvQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUNWLEtBQUssWUFBWTtvQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN2QixNQUFNO2dCQUNWLEtBQUssZUFBZTtvQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDMUIsTUFBTTtnQkFDVixLQUFLLGdCQUFnQjtvQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsTUFBTTtnQkFDVixLQUFLLGdCQUFnQjtvQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsTUFBTTtnQkFFVjtvQkFDSSxNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFNO1lBQ1YsS0FBSyxZQUFZO2dCQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU07WUFDVixLQUFLLFlBQVk7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssZUFBZTtnQkFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCO2dCQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMzQixNQUFNO1lBQ1YsS0FBSyxnQkFBZ0I7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU0sbUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBekVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7aURBQ007SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDUztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNTO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt1REFDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNhO0lBZHJCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E4RWhDO0lBQUQsbUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RXlDLEVBQUUsQ0FBQyxTQUFTLEdBOEVyRDtrQkE5RW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNvdW5kIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgcm9wZVNvdW5kMTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgcm9wZVNvdW5kMjogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYnJlYWtSb3BlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNvbXBsZXRlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNvbXBsZXRlU291bmQyOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBwbGF5U291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJvcGVTb3VuZDFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvcGVTb3VuZDEucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJvcGVTb3VuZDJcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvcGVTb3VuZDIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbXBsZXRlU291bmQyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVNvdW5kMi5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYnJlYWtSb3BlU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyZWFrUm9wZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicm9wZVNvdW5kMVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3BlU291bmQxLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicm9wZVNvdW5kMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3BlU291bmQyLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29tcGxldGVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29tcGxldGVTb3VuZDJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVTb3VuZDIuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJicmVha1JvcGVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmVha1JvcGVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yb3BlU291bmQxLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJvcGVTb3VuZDIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNvdW5kMi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5icmVha1JvcGVTb3VuZC5zdG9wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchAreaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85711X2lIBGPIPjaJXFSYaE', 'TouchAreaController');
// Script/Controller/TouchAreaController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TouchAreaController = void 0;
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        _this.background = null;
        _this.HideMask = null;
        _this.oneTap = null;
        _this.mouseJoint = null;
        // horizontal
        _this.Knots = [];
        _this.Knots_2 = [];
        // @property([cc.Node])
        // Knots_3: cc.Node[] = [];
        _this.Ropes = [];
        _this.motorJoints = [];
        // vertical
        _this.Knots_Vtc = [];
        _this.Knots_2_Vtc = [];
        // @property([cc.Node])
        // Knots_3_Vtc: cc.Node[] = [];
        _this.Ropes_Vtc = [];
        _this.motorJoints_Vtc = [];
        return _this;
        // protected update(dt: number): void {
        //   this.handleMuteSoundIronSource();
        // }
    }
    TouchAreaController.prototype.start = function () {
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        // onetap -----------------
        this.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.oneTap.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // ---------------------------
        // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.ropeTouchStart, this);
        // this.HideMask.on(cc.Node.EventType.TOUCH_END, this.ropeTouchEnd, this);
        // this.HideMask.on(cc.Node.EventType.TOUCH_CANCEL, this.ropeTouchEnd, this);
        // ironsource
        // this.background.on(cc.Node.EventType.TOUCH_START, this.handleIronSourcePlaySound, this);
    };
    TouchAreaController.prototype.ropeTouchStart = function (e) {
        this.GamePlay.hints.forEach(function (hint) { return hint.active = false; });
        this.GamePlay.hints_Vtc.forEach(function (hint) { return hint.active = false; });
        if (constants_1.Constants.step === 2 || !constants_1.Constants.isCollideKnot1) {
            this.GamePlay.hints[1].active = true;
            this.GamePlay.hints_Vtc[1].active = true;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound1);
        }
        this.handleIronSourcePlaySound();
    };
    TouchAreaController.prototype.ropeTouchEnd = function () {
        var _this = this;
        // rope 1
        if ((this.Ropes[0].getBoundingBox().intersects(this.Knots[0].getBoundingBox())
            || this.Ropes_Vtc[0].getBoundingBox().intersects(this.Knots_Vtc[0].getBoundingBox()))
            && !constants_1.Constants.isCollideKnot1) {
            constants_1.Constants.isCollideKnot1 = true;
            constants_1.Constants.knot1Status = false;
            constants_1.Constants.knot4Status = false;
            this.motorJoints[0].linearOffset = new cc.Vec2(50, 245);
            this.motorJoints_Vtc[0].linearOffset = new cc.Vec2(43, 198);
            this.scheduleOnce(function () {
                _this.motorJoints[0].destroy();
                _this.motorJoints_Vtc[0].destroy();
            }, 0.5);
            this.HideMask.width = 5000;
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound2);
        }
        // --------------------
        // rope 2
        if ((this.Ropes[1].getBoundingBox().intersects(this.Knots_2[0].getBoundingBox())
            || this.Ropes_Vtc[1].getBoundingBox().intersects(this.Knots_2_Vtc[0].getBoundingBox()))
            && !constants_1.Constants.isCollideKnot2) {
            constants_1.Constants.isCollideKnot2 = true;
            this.motorJoints[1].linearOffset = new cc.Vec2(115, 245);
            this.motorJoints_Vtc[1].linearOffset = new cc.Vec2(90, 198);
            this.scheduleOnce(function () {
                _this.motorJoints[1].destroy();
                _this.motorJoints[2].destroy();
                _this.motorJoints_Vtc[1].destroy();
                _this.motorJoints_Vtc[2].destroy();
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.ropeSound2);
            }, 0.5);
        }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[1].getBoundingBox()) && !Constants.knot2Status) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(45, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[2].getBoundingBox())) {
        //   Constants.knot3Status = true;
        //   this.motorJoints[1].linearOffset = new cc.Vec2(0, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[3].getBoundingBox())) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(-45, 198);
        // }
        // if(this.Ropes[1].getBoundingBox().intersects(this.Knots_2[4].getBoundingBox())) {
        //   this.motorJoints[1].linearOffset = new cc.Vec2(-92, 198);
        // }
        // --------------------
        // rope 3
        // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[0].getBoundingBox())) {
        //   this.motorJoints[2].linearOffset = new cc.Vec2(128, 185);
        // }
        // if(this.Ropes[2].getBoundingBox().intersects(this.Knots_3[1].getBoundingBox())) {
        //   this.motorJoints[2].linearOffset = new cc.Vec2(85, 185);
        // }
        // --------------------
    };
    TouchAreaController.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    TouchAreaController.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "oneTap", void 0);
    __decorate([
        property(cc.MouseJoint)
    ], TouchAreaController.prototype, "mouseJoint", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_2", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Ropes", void 0);
    __decorate([
        property([cc.MotorJoint])
    ], TouchAreaController.prototype, "motorJoints", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Knots_2_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], TouchAreaController.prototype, "Ropes_Vtc", void 0);
    __decorate([
        property([cc.MotorJoint])
    ], TouchAreaController.prototype, "motorJoints_Vtc", void 0);
    TouchAreaController = __decorate([
        ccclass
    ], TouchAreaController);
    return TouchAreaController;
}(cc.Component));
exports.TouchAreaController = TouchAreaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsdUNBQVk7SUFBckQ7UUFBQSxxRUE0TEM7UUExTEMsWUFBWTtRQUVaLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1FBRWpDLGFBQWE7UUFFYixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLGFBQU8sR0FBYyxFQUFFLENBQUM7UUFDeEIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUUzQixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLGlCQUFXLEdBQW9CLEVBQUUsQ0FBQztRQUdsQyxXQUFXO1FBRVgsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQUUxQixpQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUM1Qix1QkFBdUI7UUFDdkIsK0JBQStCO1FBRS9CLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIscUJBQWUsR0FBb0IsRUFBRSxDQUFDOztRQStJdEMsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxJQUFJO0lBQ04sQ0FBQztJQWhKVyxtQ0FBSyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTywyQ0FBYSxHQUFy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QUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzREQUNRO0lBSTVCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzBEQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dFQUNZO0lBMUMzQixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTRML0I7SUFBRCwwQkFBQztDQTVMRCxBQTRMQyxDQTVMd0MsRUFBRSxDQUFDLFNBQVMsR0E0THBEO0FBNUxZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gIEdhbWVQbGF5OiBHYW1lUGxheSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEhpZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBvbmVUYXA6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Nb3VzZUpvaW50KVxyXG4gIG1vdXNlSm9pbnQ6IGNjLk1vdXNlSm9pbnQgPSBudWxsO1xyXG5cclxuICAvLyBob3Jpem9udGFsXHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBLbm90czogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBLbm90c18yOiBjYy5Ob2RlW10gPSBbXTtcclxuICAvLyBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIC8vIEtub3RzXzM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgUm9wZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTW90b3JKb2ludF0pXHJcbiAgbW90b3JKb2ludHM6IGNjLk1vdG9ySm9pbnRbXSA9IFtdO1xyXG5cclxuXHJcbiAgLy8gdmVydGljYWxcclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIEtub3RzX1Z0YzogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBLbm90c18yX1Z0YzogY2MuTm9kZVtdID0gW107XHJcbiAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAvLyBLbm90c18zX1Z0YzogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBSb3Blc19WdGM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTW90b3JKb2ludF0pXHJcbiAgbW90b3JKb2ludHNfVnRjOiBjYy5Nb3RvckpvaW50W10gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgLy8gb25ldGFwIC0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0aGlzLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICB0aGlzLm9uZVRhcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIC8vIHRoaXMuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMucm9wZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgLy8gdGhpcy5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucm9wZVRvdWNoRW5kLCB0aGlzKTtcclxuICAgIC8vIHRoaXMuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnJvcGVUb3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgLy8gdGhpcy5iYWNrZ3JvdW5kLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcm9wZVRvdWNoU3RhcnQoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIHRoaXMuR2FtZVBsYXkuaGludHMuZm9yRWFjaChoaW50ID0+IGhpbnQuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgdGhpcy5HYW1lUGxheS5oaW50c19WdGMuZm9yRWFjaChoaW50ID0+IGhpbnQuYWN0aXZlID0gZmFsc2UpO1xyXG4gICAgaWYgKENvbnN0YW50cy5zdGVwID09PSAyIHx8ICFDb25zdGFudHMuaXNDb2xsaWRlS25vdDEpIHtcclxuICAgICAgdGhpcy5HYW1lUGxheS5oaW50c1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLkdhbWVQbGF5LmhpbnRzX1Z0Y1sxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sucm9wZVNvdW5kMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHJvcGVUb3VjaEVuZCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyByb3BlIDFcclxuICAgIGlmIChcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMuUm9wZXNbMF0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNbMF0uZ2V0Qm91bmRpbmdCb3goKSlcclxuICAgICAgICB8fCB0aGlzLlJvcGVzX1Z0Y1swXS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5Lbm90c19WdGNbMF0uZ2V0Qm91bmRpbmdCb3goKSlcclxuICAgICAgKVxyXG4gICAgICAmJiAhQ29uc3RhbnRzLmlzQ29sbGlkZUtub3QxKSB7XHJcbiAgICAgIENvbnN0YW50cy5pc0NvbGxpZGVLbm90MSA9IHRydWU7XHJcbiAgICAgIENvbnN0YW50cy5rbm90MVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICBDb25zdGFudHMua25vdDRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5tb3RvckpvaW50c1swXS5saW5lYXJPZmZzZXQgPSBuZXcgY2MuVmVjMig1MCwgMjQ1KTtcclxuICAgICAgdGhpcy5tb3RvckpvaW50c19WdGNbMF0ubGluZWFyT2Zmc2V0ID0gbmV3IGNjLlZlYzIoNDMsIDE5OCk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm1vdG9ySm9pbnRzWzBdLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLm1vdG9ySm9pbnRzX1Z0Y1swXS5kZXN0cm95KCk7XHJcbiAgICAgIH0sIDAuNSlcclxuICAgICAgdGhpcy5IaWRlTWFzay53aWR0aCA9IDUwMDA7XHJcbiAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5yb3BlU291bmQyKTtcclxuICAgIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgIC8vIHJvcGUgMlxyXG4gICAgaWYgKFxyXG4gICAgICAoXHJcbiAgICAgICAgdGhpcy5Sb3Blc1sxXS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5Lbm90c18yWzBdLmdldEJvdW5kaW5nQm94KCkpXHJcbiAgICAgICAgfHwgdGhpcy5Sb3Blc19WdGNbMV0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfMl9WdGNbMF0uZ2V0Qm91bmRpbmdCb3goKSlcclxuICAgICAgKVxyXG4gICAgICAmJiAhQ29uc3RhbnRzLmlzQ29sbGlkZUtub3QyKSB7XHJcbiAgICAgIENvbnN0YW50cy5pc0NvbGxpZGVLbm90MiA9IHRydWU7XHJcbiAgICAgIHRoaXMubW90b3JKb2ludHNbMV0ubGluZWFyT2Zmc2V0ID0gbmV3IGNjLlZlYzIoMTE1LCAyNDUpO1xyXG4gICAgICB0aGlzLm1vdG9ySm9pbnRzX1Z0Y1sxXS5saW5lYXJPZmZzZXQgPSBuZXcgY2MuVmVjMig5MCwgMTk4KTtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubW90b3JKb2ludHNbMV0uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMubW90b3JKb2ludHNbMl0uZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1vdG9ySm9pbnRzX1Z0Y1sxXS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5tb3RvckpvaW50c19WdGNbMl0uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5yb3BlU291bmQyKTtcclxuICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZih0aGlzLlJvcGVzWzFdLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyh0aGlzLktub3RzXzJbMV0uZ2V0Qm91bmRpbmdCb3goKSkgJiYgIUNvbnN0YW50cy5rbm90MlN0YXR1cykge1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzFdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKDQ1LCAxOTgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKHRoaXMuUm9wZXNbMV0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfMlsyXS5nZXRCb3VuZGluZ0JveCgpKSkge1xyXG4gICAgLy8gICBDb25zdGFudHMua25vdDNTdGF0dXMgPSB0cnVlO1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzFdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKDAsIDE5OCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYodGhpcy5Sb3Blc1sxXS5nZXRCb3VuZGluZ0JveCgpLmludGVyc2VjdHModGhpcy5Lbm90c18yWzNdLmdldEJvdW5kaW5nQm94KCkpKSB7XHJcbiAgICAvLyAgIHRoaXMubW90b3JKb2ludHNbMV0ubGluZWFyT2Zmc2V0ID0gbmV3IGNjLlZlYzIoLTQ1LCAxOTgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKHRoaXMuUm9wZXNbMV0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfMls0XS5nZXRCb3VuZGluZ0JveCgpKSkge1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzFdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKC05MiwgMTk4KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiAgICAvLyByb3BlIDNcclxuICAgIC8vIGlmKHRoaXMuUm9wZXNbMl0uZ2V0Qm91bmRpbmdCb3goKS5pbnRlcnNlY3RzKHRoaXMuS25vdHNfM1swXS5nZXRCb3VuZGluZ0JveCgpKSkge1xyXG4gICAgLy8gICB0aGlzLm1vdG9ySm9pbnRzWzJdLmxpbmVhck9mZnNldCA9IG5ldyBjYy5WZWMyKDEyOCwgMTg1KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZih0aGlzLlJvcGVzWzJdLmdldEJvdW5kaW5nQm94KCkuaW50ZXJzZWN0cyh0aGlzLktub3RzXzNbMV0uZ2V0Qm91bmRpbmdCb3goKSkpIHtcclxuICAgIC8vICAgdGhpcy5tb3RvckpvaW50c1syXS5saW5lYXJPZmZzZXQgPSBuZXcgY2MuVmVjMig4NSwgMTg1KTtcclxuICAgIC8vIH1cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSkge1xyXG4gICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAyICYmIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLy8gcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgLy8gICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1d34srP15JNoxtzOCtQ0oZ', 'GamePlay');
// Script/Controller/GamePlay.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../Data/constants");
var AudioManager_1 = require("../Plugin/AudioManager");
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        // Container
        _this.Character = null;
        _this.UI_Hrz = null;
        _this.UI_Vtc = null;
        // horizontal ---------------------
        // UI
        // @property([cc.Node])
        // knots: cc.Node[] = [];
        _this.Ropes = [];
        _this.hints = [];
        // effect
        _this.Effects = [];
        // ---------------------------------
        // Vertical ---------------------
        // UI
        // @property([cc.Node])
        // knots_Vtc: cc.Node[] = [];
        _this.Ropes_Vtc = [];
        _this.hints_Vtc = [];
        // effect
        _this.Effects_Vtc = [];
        // ---------------------------------
        // Character
        _this.Ponmi_Roped = null;
        _this.Spine_Rope = null;
        _this.Pomi_UnRoped = null;
        // CTA
        _this.CTA = null;
        _this.CTA_overlay = null;
        _this.CTA_btn = null;
        _this.step1Flag = false;
        _this.step2Flag = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // collisionManager.enabledDrawBoundingBox = true;
        // collisionManager.enabledDebugDraw = true;
        this.initGame();
    };
    ;
    GamePlay.prototype.initGame = function () {
        this.Pomi_UnRoped.active = false;
        this.hints.forEach(function (hint) { return hint.active = false; });
        this.hints_Vtc.forEach(function (hint) { return hint.active = false; });
        this.CTA.active = false;
    };
    ;
    GamePlay.prototype.start = function () {
        this.handleGamePlay();
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
    };
    GamePlay.prototype.handleGamePlay = function () {
        this.hints[0].active = true;
        this.hints_Vtc[0].active = true;
    };
    GamePlay.prototype.showCTA = function () {
        this.CTA.active = true;
        this.CTA_btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    GamePlay.prototype.checkStep = function () {
        var _this = this;
        switch (constants_1.Constants.step) {
            case 1:
                this.step1Flag = true;
                this.hints[0].active = false;
                this.hints_Vtc[0].active = false;
                this.scheduleOnce(function () {
                    _this.Ropes[0].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes_Vtc[0].getComponent(cc.Animation).play("Rope_BackAnim");
                }, 0.5);
                this.scheduleOnce(function () {
                    _this.Effects[0].resetSystem();
                    _this.Effects_Vtc[0].resetSystem();
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound);
                }, 1);
                this.scheduleOnce(function () {
                    _this.Spine_Rope.setAnimation(0, "break", false);
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.breakRopeSound);
                    _this.hints[2].active = true;
                    _this.hints[1].active = false;
                    _this.hints_Vtc[2].active = true;
                    _this.hints_Vtc[1].active = false;
                }, 1.5);
                break;
            case 2:
                this.step2Flag = true;
                this.hints[2].active = false;
                this.hints[1].active = false;
                this.hints_Vtc[2].active = false;
                this.hints_Vtc[1].active = false;
                this.scheduleOnce(function () {
                    _this.Ropes[1].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes[2].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes_Vtc[1].getComponent(cc.Animation).play("Rope_BackAnim");
                    _this.Ropes_Vtc[2].getComponent(cc.Animation).play("Rope_BackAnim");
                }, 0.5);
                this.scheduleOnce(function () {
                    _this.Effects[0].resetSystem();
                    _this.Effects[1].resetSystem();
                    _this.Effects_Vtc[0].resetSystem();
                    _this.Effects_Vtc[1].resetSystem();
                    _this.AudioManager.playSound(constants_1.Constants.SoundTrack.completeSound2);
                }, 1);
                this.scheduleOnce(function () {
                    _this.Ponmi_Roped.active = false;
                    _this.Pomi_UnRoped.active = true;
                }, 1.5);
                this.scheduleOnce(function () {
                    _this.showCTA();
                }, 2.5);
                break;
            case 3:
                this.GameController.installHandle();
                break;
            default:
                break;
        }
        constants_1.Constants.step = constants_1.Constants.step + 1;
    };
    GamePlay.prototype.update = function (dt) {
        constants_1.Constants.isCollideKnot1 && !this.step1Flag && this.checkStep();
        constants_1.Constants.isCollideKnot2 && !this.step2Flag && this.checkStep();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Character", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_Hrz", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "UI_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "Ropes", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "hints", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], GamePlay.prototype, "Effects", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "Ropes_Vtc", void 0);
    __decorate([
        property([cc.Node])
    ], GamePlay.prototype, "hints_Vtc", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], GamePlay.prototype, "Effects_Vtc", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Ponmi_Roped", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GamePlay.prototype, "Spine_Rope", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Pomi_UnRoped", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_overlay", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "CTA_btn", void 0);
    GamePlay = __decorate([
        ccclass
    ], GamePlay);
    return GamePlay;
}(cc.Component));
exports.default = GamePlay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlMQztRQTlLQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLFlBQVk7UUFFWixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixtQ0FBbUM7UUFDbkMsS0FBSztRQUNMLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFFekIsV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUV0QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLFNBQVM7UUFFVCxhQUFPLEdBQXdCLEVBQUUsQ0FBQztRQUNsQyxvQ0FBb0M7UUFHcEMsaUNBQWlDO1FBQ2pDLEtBQUs7UUFDTCx1QkFBdUI7UUFDdkIsNkJBQTZCO1FBRTdCLGVBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQUUxQixTQUFTO1FBRVQsaUJBQVcsR0FBd0IsRUFBRSxDQUFDO1FBQ3RDLG9DQUFvQztRQUdwQyxZQUFZO1FBRVosaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLE1BQU07UUFFTixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFH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QUMsSUFBSSxDQUFDLENBQUM7MkNBQ0U7SUFJdEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7NkNBQ0k7SUFTbEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7K0NBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7K0NBQ007SUFJMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7aURBQ1E7SUFNdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNTO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFJN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUEzREwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlMNUI7SUFBRCxlQUFDO0NBakxELEFBaUxDLENBakxxQyxFQUFFLENBQUMsU0FBUyxHQWlMakQ7a0JBakxvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gIC8vIENvbnRhaW5lclxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgVUlfSHJ6OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBVSV9WdGM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBob3Jpem9udGFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIFVJXHJcbiAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAvLyBrbm90czogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBSb3BlczogY2MuTm9kZVtdID0gW107XHJcbiAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICBoaW50czogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIC8vIGVmZmVjdFxyXG4gIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gIEVmZmVjdHM6IGNjLlBhcnRpY2xlU3lzdGVtW10gPSBbXTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gIC8vIFZlcnRpY2FsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIFVJXHJcbiAgLy8gQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAvLyBrbm90c19WdGM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgUm9wZXNfVnRjOiBjYy5Ob2RlW10gPSBbXTtcclxuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gIGhpbnRzX1Z0YzogY2MuTm9kZVtdID0gW107XHJcblxyXG4gIC8vIGVmZmVjdFxyXG4gIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gIEVmZmVjdHNfVnRjOiBjYy5QYXJ0aWNsZVN5c3RlbVtdID0gW107XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAvLyBDaGFyYWN0ZXJcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBQb25taV9Sb3BlZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gIFNwaW5lX1JvcGU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBQb21pX1VuUm9wZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAvLyBDVEFcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIENUQV9vdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBDVEFfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gIHN0ZXAxRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHN0ZXAyRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIGxldCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIC8vIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAvLyBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaW5pdEdhbWUoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0R2FtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuUG9taV9VblJvcGVkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5oaW50cy5mb3JFYWNoKGhpbnQgPT4gaGludC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB0aGlzLmhpbnRzX1Z0Yy5mb3JFYWNoKGhpbnQgPT4gaGludC5hY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB0aGlzLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVHYW1lUGxheSgpO1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhpbnRzWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmhpbnRzX1Z0Y1swXS5hY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd0NUQSgpOiB2b2lkIHtcclxuICAgIHRoaXMuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLkNUQV9idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIHRoaXMuQ1RBX292ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1N0ZXAoKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKENvbnN0YW50cy5zdGVwKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLnN0ZXAxRmxhZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oaW50c1swXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpbnRzX1Z0Y1swXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLlJvcGVzWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJSb3BlX0JhY2tBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5Sb3Blc19WdGNbMF0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlJvcGVfQmFja0FuaW1cIik7XHJcbiAgICAgICAgfSwgMC41KVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNbMF0ucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgIHRoaXMuRWZmZWN0c19WdGNbMF0ucmVzZXRTeXN0ZW0oKTtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jb21wbGV0ZVNvdW5kKTtcclxuICAgICAgICB9LCAxKVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLlNwaW5lX1JvcGUuc2V0QW5pbWF0aW9uKDAsIFwiYnJlYWtcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJyZWFrUm9wZVNvdW5kKTtcclxuICAgICAgICAgIHRoaXMuaGludHNbMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuaGludHNbMV0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgdGhpcy5oaW50c19WdGNbMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuaGludHNfVnRjWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLnN0ZXAyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oaW50c1syXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpbnRzWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGludHNfVnRjWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGludHNfVnRjWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuUm9wZXNbMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlJvcGVfQmFja0FuaW1cIik7XHJcbiAgICAgICAgICB0aGlzLlJvcGVzWzJdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJSb3BlX0JhY2tBbmltXCIpO1xyXG4gICAgICAgICAgdGhpcy5Sb3Blc19WdGNbMV0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlJvcGVfQmFja0FuaW1cIik7XHJcbiAgICAgICAgICB0aGlzLlJvcGVzX1Z0Y1syXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiUm9wZV9CYWNrQW5pbVwiKTtcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuRWZmZWN0c1swXS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgdGhpcy5FZmZlY3RzWzFdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNfVnRjWzBdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkVmZmVjdHNfVnRjWzFdLnJlc2V0U3lzdGVtKCk7XHJcbiAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suY29tcGxldGVTb3VuZDIpO1xyXG4gICAgICAgIH0sIDEpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuUG9ubWlfUm9wZWQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLlBvbWlfVW5Sb3BlZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93Q1RBKCk7XHJcbiAgICAgICAgfSwgMi41KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgQ29uc3RhbnRzLnN0ZXAgPSBDb25zdGFudHMuc3RlcCArIDE7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNDb2xsaWRlS25vdDEgJiYgIXRoaXMuc3RlcDFGbGFnICYmIHRoaXMuY2hlY2tTdGVwKCk7XHJcbiAgICBDb25zdGFudHMuaXNDb2xsaWRlS25vdDIgJiYgIXRoaXMuc3RlcDJGbGFnICYmIHRoaXMuY2hlY2tTdGVwKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
