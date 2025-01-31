
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/shared/GameRoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a370bXtLwVLZ7lyzdETAio/', 'GameRoot');
// src/shared/GameRoot.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRoot = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRoot = /** @class */ (function (_super) {
    __extends(GameRoot, _super);
    function GameRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskPanel = null;
        _this.messageLabel = null;
        _this.messageBtn1 = null;
        _this.messageBtn2 = null;
        _this.tipPanel = null;
        _this.tipLabel = null;
        return _this;
    }
    GameRoot.prototype.showMaskMessage = function (message, btn1, btn2) {
        var _this = this;
        this.messageLabel.string = message;
        if (!this.maskPanel.active) {
            this.maskPanel.active = true;
        }
        if (btn1) {
            this.messageBtn1.active = true;
            this.messageBtn1.getComponent(cc.Label).string = btn1.label;
            this.messageBtn1.once(cc.Node.EventType.TOUCH_END, function () {
                _this.hideMaskMessage();
                if (btn1.cb) {
                    btn1.cb();
                }
            }, btn1.target);
        }
        else {
            this.messageBtn1.active = false;
        }
        if (btn2) {
            this.messageBtn2.active = true;
            this.messageBtn2.getComponent(cc.Label).string = btn2.label;
            this.messageBtn2.once(cc.Node.EventType.TOUCH_END, function () {
                _this.hideMaskMessage();
                if (btn2.cb) {
                    btn2.cb();
                }
            }, btn2.target);
        }
        else {
            this.messageBtn2.active = false;
        }
    };
    GameRoot.prototype.hideMaskMessage = function () {
        this.maskPanel.active = false;
    };
    GameRoot.prototype.showTip = function (tip) {
        this.tipLabel.string = tip;
        this.tipPanel.getComponent(cc.Animation).play();
    };
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "maskPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "messageLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "messageBtn1", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "messageBtn2", void 0);
    __decorate([
        property(cc.Node)
    ], GameRoot.prototype, "tipPanel", void 0);
    __decorate([
        property(cc.Label)
    ], GameRoot.prototype, "tipLabel", void 0);
    GameRoot = __decorate([
        ccclass
    ], GameRoot);
    return GameRoot;
}(cc.Component));
exports.GameRoot = GameRoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxzaGFyZWRcXEdhbWVSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFHekM7SUFBOEIsNEJBQVk7SUFBMUM7UUFBQSxxRUF1REM7UUFwRFcsZUFBUyxHQUFXLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBMENyQyxDQUFDO0lBeENVLGtDQUFlLEdBQXRCLFVBQXVCLE9BQWMsRUFBQyxJQUE2QyxFQUFDLElBQTZDO1FBQWpJLGlCQTZCQztRQTVCRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDbkMsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNoQztRQUNELElBQUcsSUFBSSxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUM7Z0JBQzlDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBRyxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNSLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7YUFBSTtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNuQztRQUNELElBQUcsSUFBSSxFQUFFO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUM7Z0JBQzlDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBRyxJQUFJLENBQUMsRUFBRSxFQUFDO29CQUNQLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7YUFBSTtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFTSxrQ0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRU0sMEJBQU8sR0FBZCxVQUFlLEdBQVU7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDbUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDa0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNjO0lBYnhCLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0F1RHBCO0lBQUQsZUFBQztDQXZERCxBQXVEQyxDQXZENkIsRUFBRSxDQUFDLFNBQVMsR0F1RHpDO0FBdkRZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MscHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBHYW1lUm9vdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG1hc2tQYW5lbDpjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbWVzc2FnZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWVzc2FnZUJ0bjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG1lc3NhZ2VCdG4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB0aXBQYW5lbDpjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdGlwTGFiZWw6Y2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzaG93TWFza01lc3NhZ2UobWVzc2FnZTpzdHJpbmcsYnRuMT86e2xhYmVsOnN0cmluZyxjYj86RnVuY3Rpb24sdGFyZ2V0Pzphbnl9LGJ0bjI/OntsYWJlbDpzdHJpbmcsY2I/OkZ1bmN0aW9uLHRhcmdldD86YW55fSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUxhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XHJcbiAgICAgICAgaWYoIXRoaXMubWFza1BhbmVsLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHRoaXMubWFza1BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGJ0bjEpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4xLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYnRuMS5sYWJlbDtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMS5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTWFza01lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmKGJ0bjEuY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4xLmNiKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sYnRuMS50YXJnZXQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihidG4yKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJ0bjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQnRuMi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGJ0bjIubGFiZWw7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUJ0bjIub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1hc2tNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihidG4yLmNiKXtcclxuICAgICAgICAgICAgICAgICAgICBidG4yLmNiKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sYnRuMi50YXJnZXQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VCdG4yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZU1hc2tNZXNzYWdlKCkge1xyXG4gICAgICAgIHRoaXMubWFza1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93VGlwKHRpcDpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IHRpcDtcclxuICAgICAgICB0aGlzLnRpcFBhbmVsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19