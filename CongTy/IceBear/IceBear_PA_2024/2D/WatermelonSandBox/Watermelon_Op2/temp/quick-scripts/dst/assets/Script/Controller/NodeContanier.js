
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodeContanier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69c3bsb3chPmrdB+4j36B25', 'NodeContanier');
// Script/Controller/NodeContanier.ts

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
var NodeContainer = /** @class */ (function (_super) {
    __extends(NodeContainer, _super);
    function NodeContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.UI = null;
        // Bg
        _this.Bg = null;
        _this.HideMask = null;
        // UI
        _this.btn_Active = null;
        _this.PlayerBase = null;
        _this.Hand = null;
        _this.CTA = null;
        _this.CTA_btnDownload = null;
        // Step 1
        _this.Step1 = null;
        _this.Step1_Btn_Active = null;
        _this.Step1_btn_KimTiem = null;
        _this.Step1_character = null;
        // Step 2
        _this.Step2 = null;
        _this.Step2_Options = null;
        _this.Step2_Gun1 = null;
        _this.Step2_kimtiem = null;
        _this.Step2_Gun2 = null;
        _this.Step2_AimingCharacter = null;
        _this.Step2_Btn_Active = null;
        _this.Step2_Hole1 = null;
        _this.Step2_Hole2 = null;
        _this.Step2_Hole3 = null;
        _this.Step2_Holes = [];
        _this.Step2_TempHoles = [];
        _this.Step2_Frames = [];
        // overlay
        _this.overlay = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        var _this = this;
        // init variables for step 1
        this.Step1 = this.UI.getChildByName("Step1");
        this.Step1_Btn_Active = this.btn_Active.getChildByName("btn");
        this.Step1_btn_KimTiem = this.PlayerBase.getChildByName("Btn_KimTiem");
        this.Step1_character = this.PlayerBase.getChildByName("character");
        this.overlay = this.UI.getChildByName("Overlay");
        // init variables for step 2
        this.Step2 = this.UI.getChildByName("Step2");
        this.Step2_Options = this.Step2.getChildByName("PlayerBase").getChildByName("Options");
        this.Step2_AimingCharacter = this.Step2_Options.getChildByName("AimingCharacter");
        this.Step2_Btn_Active = this.Step2.getChildByName("Btn_Active").getChildByName("btn");
        this.Step2_Gun1 = this.Step2_Options.getChildByName("Gun1");
        this.Step2_Gun2 = this.Step2_Options.getChildByName("Gun2");
        this.Step2_kimtiem = this.Step2_Options.getChildByName("kimtiem");
        this.Step2_Hole1 = this.Step2_Options.getChildByName("Hole1");
        this.Step2_Hole2 = this.Step2_Options.getChildByName("Hole2");
        this.Step2_Hole3 = this.Step2_Options.getChildByName("Hole3");
        this.Step2_Holes.push(this.Step2_Hole1, this.Step2_Hole2, this.Step2_Hole3);
        this.Step2_TempHoles.push(this.Step2_Hole1, this.Step2_Hole2, this.Step2_Hole3);
        this.Step2_Options.children.filter(function (node) {
            var isFrame = node.name.startsWith("frame");
            isFrame ? _this.Step2_Frames.push(node) : "";
        });
    };
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "btn_Active", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "PlayerBase", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Hand", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CTA_btnDownload", void 0);
    NodeContainer = __decorate([
        ccclass
    ], NodeContainer);
    return NodeContainer;
}(cc.Component));
exports.default = NodeContainer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBaUZDO1FBL0VHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixLQUFLO1FBRUwsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLEtBQUs7UUFFTCxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsU0FBUztRQUNULFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyxxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxTQUFTO1FBQ1QsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQiwyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDdEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlC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O1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0M7SUFJbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNPO0lBSXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDYztJQXRCZixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBaUZqQztJQUFELG9CQUFDO0NBakZELEFBaUZDLENBakYwQyxFQUFFLENBQUMsU0FBUyxHQWlGdEQ7a0JBakZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZUNvbnRhaW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVQbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIEJnXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFVJXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9BY3RpdmU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBQbGF5ZXJCYXNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIENUQV9idG5Eb3dubG9hZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gU3RlcCAxXHJcbiAgICBTdGVwMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBTdGVwMV9CdG5fQWN0aXZlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFN0ZXAxX2J0bl9LaW1UaWVtOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFN0ZXAxX2NoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gU3RlcCAyXHJcbiAgICBTdGVwMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBTdGVwMl9PcHRpb25zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFN0ZXAyX0d1bjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgU3RlcDJfa2ltdGllbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBTdGVwMl9HdW4yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFN0ZXAyX0FpbWluZ0NoYXJhY3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBTdGVwMl9CdG5fQWN0aXZlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBTdGVwMl9Ib2xlMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBTdGVwMl9Ib2xlMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBTdGVwMl9Ib2xlMzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBTdGVwMl9Ib2xlczogY2MuTm9kZVtdID0gW107XHJcbiAgICBTdGVwMl9UZW1wSG9sZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgU3RlcDJfRnJhbWVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICAvLyBvdmVybGF5XHJcbiAgICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGluaXQgdmFyaWFibGVzIGZvciBzdGVwIDFcclxuICAgICAgICB0aGlzLlN0ZXAxID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIlN0ZXAxXCIpO1xyXG5cclxuICAgICAgICB0aGlzLlN0ZXAxX0J0bl9BY3RpdmUgPSB0aGlzLmJ0bl9BY3RpdmUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIik7XHJcbiAgICAgICAgdGhpcy5TdGVwMV9idG5fS2ltVGllbSA9IHRoaXMuUGxheWVyQmFzZS5nZXRDaGlsZEJ5TmFtZShcIkJ0bl9LaW1UaWVtXCIpO1xyXG4gICAgICAgIHRoaXMuU3RlcDFfY2hhcmFjdGVyID0gdGhpcy5QbGF5ZXJCYXNlLmdldENoaWxkQnlOYW1lKFwiY2hhcmFjdGVyXCIpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJPdmVybGF5XCIpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gaW5pdCB2YXJpYWJsZXMgZm9yIHN0ZXAgMlxyXG4gICAgICAgIHRoaXMuU3RlcDIgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiU3RlcDJcIik7XHJcbiAgICAgICAgdGhpcy5TdGVwMl9PcHRpb25zID0gdGhpcy5TdGVwMi5nZXRDaGlsZEJ5TmFtZShcIlBsYXllckJhc2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJPcHRpb25zXCIpO1xyXG4gICAgICAgIHRoaXMuU3RlcDJfQWltaW5nQ2hhcmFjdGVyID0gdGhpcy5TdGVwMl9PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiQWltaW5nQ2hhcmFjdGVyXCIpO1xyXG4gICAgICAgIHRoaXMuU3RlcDJfQnRuX0FjdGl2ZSA9IHRoaXMuU3RlcDIuZ2V0Q2hpbGRCeU5hbWUoXCJCdG5fQWN0aXZlXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpO1xyXG5cclxuICAgICAgICB0aGlzLlN0ZXAyX0d1bjEgPSB0aGlzLlN0ZXAyX09wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoXCJHdW4xXCIpO1xyXG4gICAgICAgIHRoaXMuU3RlcDJfR3VuMiA9IHRoaXMuU3RlcDJfT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkd1bjJcIik7XHJcbiAgICAgICAgdGhpcy5TdGVwMl9raW10aWVtID0gdGhpcy5TdGVwMl9PcHRpb25zLmdldENoaWxkQnlOYW1lKFwia2ltdGllbVwiKTtcclxuICAgICAgICB0aGlzLlN0ZXAyX0hvbGUxID0gdGhpcy5TdGVwMl9PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiSG9sZTFcIik7XHJcbiAgICAgICAgdGhpcy5TdGVwMl9Ib2xlMiA9IHRoaXMuU3RlcDJfT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkhvbGUyXCIpO1xyXG4gICAgICAgIHRoaXMuU3RlcDJfSG9sZTMgPSB0aGlzLlN0ZXAyX09wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoXCJIb2xlM1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5TdGVwMl9Ib2xlcy5wdXNoKHRoaXMuU3RlcDJfSG9sZTEsIHRoaXMuU3RlcDJfSG9sZTIsIHRoaXMuU3RlcDJfSG9sZTMpO1xyXG4gICAgICAgIHRoaXMuU3RlcDJfVGVtcEhvbGVzLnB1c2godGhpcy5TdGVwMl9Ib2xlMSwgdGhpcy5TdGVwMl9Ib2xlMiwgdGhpcy5TdGVwMl9Ib2xlMyk7XHJcblxyXG4gICAgICAgIHRoaXMuU3RlcDJfT3B0aW9ucy5jaGlsZHJlbi5maWx0ZXIoKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzRnJhbWUgPSBub2RlLm5hbWUuc3RhcnRzV2l0aChcImZyYW1lXCIpO1xyXG4gICAgICAgICAgICBpc0ZyYW1lID8gdGhpcy5TdGVwMl9GcmFtZXMucHVzaChub2RlKSA6IFwiXCJcclxuICAgICAgICB9KSAgXHJcbiAgICB9XHJcbn1cclxuIl19