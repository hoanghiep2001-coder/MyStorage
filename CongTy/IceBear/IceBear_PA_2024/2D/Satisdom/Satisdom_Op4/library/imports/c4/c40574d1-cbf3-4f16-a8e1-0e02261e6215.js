"use strict";
cc._RF.push(module, 'c4057TRy/NPFqjhDgImHmIV', 'Level2Controller');
// Script/Controller/Level2Controller.ts

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
exports.Level2Controller = void 0;
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level2Controller = /** @class */ (function (_super) {
    __extends(Level2Controller, _super);
    function Level2Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.Lobsters = [];
        return _this;
    }
    Level2Controller.prototype.start = function () {
        // this.Lobsters.forEach(lobster => lobster.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this));
    };
    __decorate([
        property(GameController_1.GameController)
    ], Level2Controller.prototype, "GameController", void 0);
    __decorate([
        property([cc.Node])
    ], Level2Controller.prototype, "Lobsters", void 0);
    Level2Controller = __decorate([
        ccclass
    ], Level2Controller);
    return Level2Controller;
}(cc.Component));
exports.Level2Controller = Level2Controller;

cc._RF.pop();