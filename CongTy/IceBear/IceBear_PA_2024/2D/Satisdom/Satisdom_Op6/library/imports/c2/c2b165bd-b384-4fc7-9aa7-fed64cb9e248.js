"use strict";
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