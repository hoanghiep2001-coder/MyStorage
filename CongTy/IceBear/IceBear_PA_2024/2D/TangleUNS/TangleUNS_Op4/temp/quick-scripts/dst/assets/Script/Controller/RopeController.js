
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