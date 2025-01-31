
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/test/scripts/list-test-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f538fWaWpEkYLqGkQ0A+08', 'list-test-item');
// test/scripts/list-test-item.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var ListTestItem = /** @class */ (function (_super) {
    __extends(ListTestItem, _super);
    function ListTestItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankText = null;
        _this.goldText = null;
        _this.flagImage = null;
        _this.levelText = null;
        _this.levelBar = null;
        _this.descText = null;
        _this.uiOpacity = null;
        return _this;
    }
    ListTestItem.prototype.randomData = function (index, flagSpriteFrame) {
        this.rankText.string = String(index);
        this.goldText.string = String(Math.floor(1000 + Math.random() * 1000));
        this.flagImage.spriteFrame = flagSpriteFrame;
        this.levelText.string = "lv." + Math.floor(Math.random() * 100);
        this.levelBar.progress = Math.random();
        this.descText.string = "\u4EC0\u4E48\u4E5F\u6CA1\u7559\u4E0B - " + index;
        this.uiOpacity.opacity = 100 + Math.floor(Math.random() * 155);
    };
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "rankText", void 0);
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "goldText", void 0);
    __decorate([
        property({ type: cc.Sprite })
    ], ListTestItem.prototype, "flagImage", void 0);
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "levelText", void 0);
    __decorate([
        property({ type: cc.ProgressBar })
    ], ListTestItem.prototype, "levelBar", void 0);
    __decorate([
        property({ type: cc.Label })
    ], ListTestItem.prototype, "descText", void 0);
    __decorate([
        property({ type: cc.Node })
    ], ListTestItem.prototype, "uiOpacity", void 0);
    ListTestItem = __decorate([
        ccclass
    ], ListTestItem);
    return ListTestItem;
}(cc.Component));
exports.default = ListTestItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdGVzdFxcc2NyaXB0c1xcbGlzdC10ZXN0LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFnQ0M7UUE3QkcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWtCLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBVyxJQUFJLENBQUM7O0lBVzdCLENBQUM7SUFURyxpQ0FBVSxHQUFWLFVBQVcsS0FBWSxFQUFFLGVBQThCO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFFBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsR0FBRyxDQUFHLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLDRDQUFZLEtBQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7a0RBQ0Y7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDO2tEQUNGO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzttREFDRDtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUM7bURBQ0Q7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDO2tEQUNGO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQztrREFDRjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7bURBQ0Q7SUFyQlIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWdDaEM7SUFBRCxtQkFBQztDQWhDRCxBQWdDQyxDQWhDeUMsRUFBRSxDQUFDLFNBQVMsR0FnQ3JEO2tCQWhDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFRlc3RJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIHJhbmtUZXh0OmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIGdvbGRUZXh0OmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLlNwcml0ZX0pXHJcbiAgICBmbGFnSW1hZ2U6Y2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIGxldmVsVGV4dDpjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuUHJvZ3Jlc3NCYXJ9KVxyXG4gICAgbGV2ZWxCYXI6Y2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsfSlcclxuICAgIGRlc2NUZXh0OmNjLkxhYmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlfSlcclxuICAgIHVpT3BhY2l0eTpjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgcmFuZG9tRGF0YShpbmRleDpudW1iZXIsIGZsYWdTcHJpdGVGcmFtZTpjYy5TcHJpdGVGcmFtZSl7XHJcbiAgICAgICAgdGhpcy5yYW5rVGV4dC5zdHJpbmcgPSBTdHJpbmcoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZ29sZFRleHQuc3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3IoMTAwMCArIE1hdGgucmFuZG9tKCkqIDEwMDApKTtcclxuICAgICAgICB0aGlzLmZsYWdJbWFnZS5zcHJpdGVGcmFtZSA9IGZsYWdTcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLmxldmVsVGV4dC5zdHJpbmcgPSBgbHYuJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIDEwMCl9YDtcclxuICAgICAgICB0aGlzLmxldmVsQmFyLnByb2dyZXNzID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmRlc2NUZXh0LnN0cmluZyA9IGDku4DkuYjkuZ/msqHnlZnkuIsgLSAke2luZGV4fWA7XHJcbiAgICAgICAgdGhpcy51aU9wYWNpdHkub3BhY2l0eSA9IDEwMCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE1NSk7XHJcbiAgICB9XHJcbn1cclxuIl19