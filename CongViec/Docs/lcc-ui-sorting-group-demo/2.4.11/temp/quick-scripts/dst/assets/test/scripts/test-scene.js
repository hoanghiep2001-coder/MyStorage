
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/test/scripts/test-scene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdGVzdFxcc2NyaXB0c1xcdGVzdC1zY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTRDO0FBRXRDLElBQUEsS0FBeUIsRUFBRSxDQUFDLFVBQVUsRUFBcEMsT0FBTyxhQUFBLEVBQUcsUUFBUSxjQUFrQixDQUFDO0FBRzdDO0lBQStCLDZCQUFZO0lBQTNDO1FBQUEscUVBc0JDO1FBbkJHLHdCQUFrQixHQUFhLElBQUksQ0FBQztRQUdwQyxpQkFBVyxHQUFXLElBQUksQ0FBQztRQUczQixzQkFBZ0IsR0FBb0IsRUFBRSxDQUFDO1FBR3ZDLGlCQUFXLEdBQVUsR0FBRyxDQUFDOztJQVU3QixDQUFDO0lBUkcseUJBQUssR0FBTDtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ3JDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsd0JBQVksQ0FBQyxDQUFDO1lBQzNDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUM7U0FDM0c7SUFDTCxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzt5REFDUztJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7a0RBQ0U7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQzt1REFDSztJQUd2QztRQURDLFFBQVE7a0RBQ2dCO0lBWmhCLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FzQnJCO0lBQUQsZ0JBQUM7Q0F0QkQsQUFzQkMsQ0F0QjhCLEVBQUUsQ0FBQyxTQUFTLEdBc0IxQztBQXRCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0VGVzdEl0ZW0gZnJvbSBcIi4vbGlzdC10ZXN0LWl0ZW1cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRlc3RTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlByZWZhYn0pXHJcbiAgICBsaXN0VGVzdEl0ZW1QcmVmYWI6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuTm9kZX0pXHJcbiAgICBsaXN0Q29udGVudDpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6W2NjLlNwcml0ZUZyYW1lXX0pXHJcbiAgICBmbGFnU3ByaXRlRnJhbWVzOmNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGxpc3RJdGVtTWF4Om51bWJlciA9IDIwMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbU1heDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RUZXN0SXRlbVByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5saXN0Q29udGVudDtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmdldENvbXBvbmVudChMaXN0VGVzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtPy5yYW5kb21EYXRhKGkgKyAxLCB0aGlzLmZsYWdTcHJpdGVGcmFtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5mbGFnU3ByaXRlRnJhbWVzLmxlbmd0aCldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=