"use strict";
cc._RF.push(module, '66495YFVDxEp7II38SL3Oi4', 'test-scene');
// test/scripts/test-scene.ts

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
exports.TestScene = void 0;
var list_test_item_1 = require("./list-test-item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestScene = /** @class */ (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listTestItemPrefab = null;
        _this.listContent = null;
        _this.flagSpriteFrames = [];
        _this.listItemMax = 200;
        return _this;
    }
    TestScene.prototype.start = function () {
        for (var i = 0; i < this.listItemMax; i++) {
            var node = cc.instantiate(this.listTestItemPrefab);
            node.parent = this.listContent;
            var item = node.getComponent(list_test_item_1.default);
            item === null || item === void 0 ? void 0 : item.randomData(i + 1, this.flagSpriteFrames[Math.floor(Math.random() * this.flagSpriteFrames.length)]);
        }
    };
    __decorate([
        property({ type: cc.Prefab })
    ], TestScene.prototype, "listTestItemPrefab", void 0);
    __decorate([
        property({ type: cc.Node })
    ], TestScene.prototype, "listContent", void 0);
    __decorate([
        property({ type: [cc.SpriteFrame] })
    ], TestScene.prototype, "flagSpriteFrames", void 0);
    __decorate([
        property
    ], TestScene.prototype, "listItemMax", void 0);
    TestScene = __decorate([
        ccclass
    ], TestScene);
    return TestScene;
}(cc.Component));
exports.TestScene = TestScene;

cc._RF.pop();