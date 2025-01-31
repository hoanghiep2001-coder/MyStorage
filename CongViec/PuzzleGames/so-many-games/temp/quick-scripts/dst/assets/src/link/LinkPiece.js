
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/link/LinkPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '484catbAbJCg4Ac4ycFbtOo', 'LinkPiece');
// src/link/LinkPiece.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var LinkConstants_1 = require("./LinkConstants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.herosAtlas = null;
        _this.x = 0;
        _this.y = 0;
        _this.type = 0;
        _this.state = LinkConstants_1.PIECE_STATE.IDLE;
        return _this;
    }
    Piece.prototype.init = function (x, y, type, state) {
        if (state === void 0) { state = LinkConstants_1.PIECE_STATE.IDLE; }
        this.x = x;
        this.y = y;
        this.setType(type);
        this.setState(state);
    };
    Piece.prototype.setType = function (type) {
        this.type = type;
        if (type === 0) {
            this.sprite.spriteFrame = null;
        }
        else {
            this.sprite.spriteFrame = this.herosAtlas.getSpriteFrame("hero_" + type);
        }
    };
    Piece.prototype.setState = function (state) {
        if (state === this.state) {
            return;
        }
        this.state = state;
        if (state === LinkConstants_1.PIECE_STATE.IDLE) {
            this.node.color = cc.Color.WHITE;
        }
        else if (state === LinkConstants_1.PIECE_STATE.PRESS) {
            this.node.color = cc.Color.GRAY;
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Piece.prototype, "sprite", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Piece.prototype, "herosAtlas", void 0);
    Piece = __decorate([
        ccclass
    ], Piece);
    return Piece;
}(cc.Component));
exports.Piece = Piece;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxsaW5rXFxMaW5rUGllY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVk7SUFBdkM7UUFBQSxxRUF3Q0M7UUFyQ1csWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbkMsT0FBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE9BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQUssR0FBZ0IsMkJBQVcsQ0FBQyxJQUFJLENBQUM7O0lBOEJqRCxDQUFDO0lBNUJVLG9CQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQVksRUFBRSxLQUF3QjtRQUF4QixzQkFBQSxFQUFBLFFBQVEsMkJBQVcsQ0FBQyxJQUFJO1FBQ3BFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUcsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0IsS0FBa0I7UUFDOUIsSUFBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLEtBQUssS0FBSywyQkFBVyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNwQzthQUFNLElBQUcsS0FBSyxLQUFLLDJCQUFXLENBQUMsS0FBSyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQW5DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ2lCO0lBTGpDLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0F3Q2pCO0lBQUQsWUFBQztDQXhDRCxBQXdDQyxDQXhDMEIsRUFBRSxDQUFDLFNBQVMsR0F3Q3RDO0FBeENZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUElFQ0VfU1RBVEUgfSBmcm9tIFwiLi9MaW5rQ29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFBpZWNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJpdmF0ZSBzcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXHJcbiAgICBwcml2YXRlIGhlcm9zQXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHR5cGU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGU6IFBJRUNFX1NUQVRFID0gUElFQ0VfU1RBVEUuSURMRTtcclxuXHJcbiAgICBwdWJsaWMgaW5pdCh4OiBudW1iZXIsIHk6IG51bWJlciwgdHlwZTogbnVtYmVyLCBzdGF0ZSA9IFBJRUNFX1NUQVRFLklETEUpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5zZXRUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0VHlwZSh0eXBlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIGlmKHR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5oZXJvc0F0bGFzLmdldFNwcml0ZUZyYW1lKFwiaGVyb19cIiArIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IFBJRUNFX1NUQVRFKSB7XHJcbiAgICAgICAgaWYoc3RhdGUgPT09IHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBQSUVDRV9TVEFURS5JRExFKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIH0gZWxzZSBpZihzdGF0ZSA9PT0gUElFQ0VfU1RBVEUuUFJFU1MpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19