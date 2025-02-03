
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
require('./assets/Script/Controller/IronSource');
require('./assets/Script/Controller/NodeContanier');
require('./assets/Script/Controller/TouchAreaController');
require('./assets/Script/Data/Anims');
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
var NodeContanier_1 = require("../Controller/NodeContanier");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeContainer = null;
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
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width > height) {
            constants_1.Constants.isRotate = true;
            this.setHorizontal();
        }
        else {
            constants_1.Constants.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
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
        this.NodeContainer.Bg.scale = 1.1;
        this.NodeContainer.Hand.setPosition(-350, 0);
        this.NodeContainer.Hand.angle = -90;
        this.NodeContainer.Step2_Frames[0].setPosition(250, 60);
        this.NodeContainer.Step2_Frames[1].setPosition(250, -40);
        this.NodeContainer.Step2_Frames[2].setPosition(250, -140);
        this.NodeContainer.Step2_Gun1.setPosition(250, 60);
        this.NodeContainer.Step2_Gun2.setPosition(250, -40);
        this.NodeContainer.Step2_kimtiem.setPosition(250, -140);
        this.NodeContainer.Step2_Frames[0].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[1].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[2].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Gun1.setScale(-0.23, 0.23);
        this.NodeContainer.Step2_Gun2.setScale(0.15, 0.15);
        this.NodeContainer.Step2_kimtiem.setScale(0.5, 0.5);
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        this.NodeContainer.Bg.scale = 1;
        this.NodeContainer.Hand.setPosition(-350, 0);
        this.NodeContainer.Hand.angle = -90;
        this.NodeContainer.Step2_Frames[0].setPosition(250, 60);
        this.NodeContainer.Step2_Frames[1].setPosition(250, -40);
        this.NodeContainer.Step2_Frames[2].setPosition(250, -140);
        this.NodeContainer.Step2_Gun1.setPosition(250, 60);
        this.NodeContainer.Step2_Gun2.setPosition(250, -40);
        this.NodeContainer.Step2_kimtiem.setPosition(250, -140);
        this.NodeContainer.Step2_Frames[0].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[1].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[2].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Gun1.setScale(-0.23, 0.23);
        this.NodeContainer.Step2_Gun2.setScale(0.15, 0.15);
        this.NodeContainer.Step2_kimtiem.setScale(0.5, 0.5);
    };
    Responsive.prototype.setVertical = function () {
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
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
        this.NodeContainer.Bg.scale = 0.8;
        this.NodeContainer.Hand.setPosition(0, 330);
        this.NodeContainer.Hand.angle = 180;
        this.NodeContainer.Step2_Frames[0].setPosition(-100, -280);
        this.NodeContainer.Step2_Frames[1].setPosition(0, -280);
        this.NodeContainer.Step2_Frames[2].setPosition(100, -280);
        this.NodeContainer.Step2_Gun1.setPosition(-100, -280);
        this.NodeContainer.Step2_Gun2.setPosition(100, -280);
        this.NodeContainer.Step2_kimtiem.setPosition(0, -280);
        this.NodeContainer.Step2_Frames[0].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[1].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[2].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Gun1.setScale(-0.19, 0.19);
        this.NodeContainer.Step2_Gun2.setScale(0.12, 0.12);
        this.NodeContainer.Step2_kimtiem.setScale(0.45, 0.45);
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        this.NodeContainer.Bg.scale = 0.8;
        this.NodeContainer.Hand.setPosition(0, 330);
        this.NodeContainer.Hand.angle = 180;
        this.NodeContainer.Step2_Frames[0].setPosition(-100, -250);
        this.NodeContainer.Step2_Frames[1].setPosition(0, -250);
        this.NodeContainer.Step2_Frames[2].setPosition(100, -250);
        this.NodeContainer.Step2_Gun1.setPosition(-100, -250);
        this.NodeContainer.Step2_Gun2.setPosition(100, -250);
        this.NodeContainer.Step2_kimtiem.setPosition(0, -250);
        this.NodeContainer.Step2_Frames[0].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[1].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[2].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Gun1.setScale(-0.19, 0.19);
        this.NodeContainer.Step2_Gun2.setScale(0.12, 0.12);
        this.NodeContainer.Step2_kimtiem.setScale(0.45, 0.45);
        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
        }
        else {
        }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodeContanier_1.default)
    ], Responsive.prototype, "NodeContainer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQW1NQztRQWhNRyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBc0xoRCxDQUFDO0lBbkxhLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBR08saUNBQVksR0FBcEI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDaEIscUJBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gscUJBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFHTyxrQ0FBYSxHQUFyQjtRQUNJLElBQUksS0FBSyxH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LEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZUNvbnRhbmllclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICAgIE5vZGVDb250YWluZXI6IE5vZGVDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChoZWlnaHQgLyB3aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmcuc2NhbGUgPSAxLjE7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kLnNldFBvc2l0aW9uKC0zNTAsIDApO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kLmFuZ2xlID0gLTkwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzWzBdLnNldFBvc2l0aW9uKDI1MCwgNjApO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMV0uc2V0UG9zaXRpb24oMjUwLCAtNDApO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMl0uc2V0UG9zaXRpb24oMjUwLCAtMTQwKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMS5zZXRQb3NpdGlvbigyNTAsIDYwKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMi5zZXRQb3NpdGlvbigyNTAsIC00MCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX2tpbXRpZW0uc2V0UG9zaXRpb24oMjUwLCAtMTQwKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1swXS5zZXRTY2FsZSgwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1sxXS5zZXRTY2FsZSgwLjUsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1syXS5zZXRTY2FsZSgwLjUsIDAuNSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjEuc2V0U2NhbGUoLTAuMjMsIDAuMjMpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4yLnNldFNjYWxlKDAuMTUsIDAuMTUpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9raW10aWVtLnNldFNjYWxlKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmcuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5zZXRQb3NpdGlvbigtMzUwLCAwKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5hbmdsZSA9IC05MDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1swXS5zZXRQb3NpdGlvbigyNTAsIDYwKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzWzFdLnNldFBvc2l0aW9uKDI1MCwgLTQwKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzWzJdLnNldFBvc2l0aW9uKDI1MCwgLTE0MCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjEuc2V0UG9zaXRpb24oMjUwLCA2MCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjIuc2V0UG9zaXRpb24oMjUwLCAtNDApO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9raW10aWVtLnNldFBvc2l0aW9uKDI1MCwgLTE0MCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMF0uc2V0U2NhbGUoMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMV0uc2V0U2NhbGUoMC41LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMl0uc2V0U2NhbGUoMC41LCAwLjUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4xLnNldFNjYWxlKC0wLjIzLCAwLjIzKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMi5zZXRTY2FsZSgwLjE1LCAwLjE1KTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfa2ltdGllbS5zZXRTY2FsZSgwLjUsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICBpZiAod2lkdGggLyBoZWlnaHQgPCAwLjUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJcGhvbmVYKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2JpbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJcGhvbmVYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX0lQWDtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuQmcuc2NhbGUgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kLnNldFBvc2l0aW9uKDAsIDMzMCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmQuYW5nbGUgPSAxODA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMF0uc2V0UG9zaXRpb24oLTEwMCwgLTI4MCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1sxXS5zZXRQb3NpdGlvbigwLCAtMjgwKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzWzJdLnNldFBvc2l0aW9uKDEwMCwgLTI4MCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjEuc2V0UG9zaXRpb24oLTEwMCwgLTI4MCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjIuc2V0UG9zaXRpb24oMTAwLCAtMjgwKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfa2ltdGllbS5zZXRQb3NpdGlvbigwLCAtMjgwKTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1swXS5zZXRTY2FsZSgwLjM1LCAwLjM1KTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzWzFdLnNldFNjYWxlKDAuMzUsIDAuMzUpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMl0uc2V0U2NhbGUoMC4zNSwgMC4zNSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjEuc2V0U2NhbGUoLTAuMTksIDAuMTkpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4yLnNldFNjYWxlKDAuMTIsIDAuMTIpO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9raW10aWVtLnNldFNjYWxlKDAuNDUsIDAuNDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TW9iaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkJnLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5zZXRQb3NpdGlvbigwLCAzMzApO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IYW5kLmFuZ2xlID0gMTgwO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzWzBdLnNldFBvc2l0aW9uKC0xMDAsIC0yNTApO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMV0uc2V0UG9zaXRpb24oMCwgLTI1MCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1syXS5zZXRQb3NpdGlvbigxMDAsIC0yNTApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4xLnNldFBvc2l0aW9uKC0xMDAsIC0yNTApO1xyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4yLnNldFBvc2l0aW9uKDEwMCwgLTI1MCk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX2tpbXRpZW0uc2V0UG9zaXRpb24oMCwgLTI1MCk7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbMF0uc2V0U2NhbGUoMC4zNSwgMC4zNSk7XHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0ZyYW1lc1sxXS5zZXRTY2FsZSgwLjM1LCAwLjM1KTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzWzJdLnNldFNjYWxlKDAuMzUsIDAuMzUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4xLnNldFNjYWxlKC0wLjE5LCAwLjE5KTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMi5zZXRTY2FsZSgwLjEyLCAwLjEyKTtcclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfa2ltdGllbS5zZXRTY2FsZSgwLjQ1LCAwLjQ1KTtcclxuXHJcbiAgICAgICAgaWYgKGhlaWdodCAvIHdpZHRoID4gMS41KSB7XHJcbiAgICAgICAgICAgIGlmICh3aWR0aCAvIGhlaWdodCA+PSAwLjYgJiYgd2lkdGggLyBoZWlnaHQgPCAwLjYyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBtb2JpbGUgbW9kZSBhcHBsb3ZpblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgUGx1cyAvIDcgLyA3IFBsdXMgICBcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/Anims.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e978dmCj1F/oDQ09VgYDVK', 'Anims');
// Script/Data/Anims.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpineAnims = void 0;
var Intro_SpiderAnim;
(function (Intro_SpiderAnim) {
    Intro_SpiderAnim["Action"] = "action01";
    Intro_SpiderAnim["Idle"] = "idle01";
})(Intro_SpiderAnim || (Intro_SpiderAnim = {}));
var Intro_DollAnim;
(function (Intro_DollAnim) {
    Intro_DollAnim["Walk"] = "action01";
    Intro_DollAnim["Scare"] = "action02";
    Intro_DollAnim["Idle"] = "idle0";
})(Intro_DollAnim || (Intro_DollAnim = {}));
var LipsAnim;
(function (LipsAnim) {
    LipsAnim["Dry"] = "action04";
    LipsAnim["DirtySmell"] = "action03";
    LipsAnim["Idle"] = "idle02";
})(LipsAnim || (LipsAnim = {}));
var bubbleAnim;
(function (bubbleAnim) {
    bubbleAnim["Clean"] = "action04_bubble_clean";
    bubbleAnim["Show"] = "action03_only_bubble";
})(bubbleAnim || (bubbleAnim = {}));
var waterToothAnim;
(function (waterToothAnim) {
    waterToothAnim["Idle"] = "Idle1";
    waterToothAnim["Action"] = "action01";
})(waterToothAnim || (waterToothAnim = {}));
var SpineAnims = /** @class */ (function () {
    function SpineAnims() {
    }
    SpineAnims.LipsAnim = LipsAnim;
    SpineAnims.Intro_DollAnim = Intro_DollAnim;
    SpineAnims.Intro_SpiderAnim = Intro_SpiderAnim;
    SpineAnims.bubbleAnim = bubbleAnim;
    SpineAnims.waterToothAnim = waterToothAnim;
    return SpineAnims;
}());
exports.SpineAnims = SpineAnims;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxBbmltcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFLLGdCQUdKO0FBSEQsV0FBSyxnQkFBZ0I7SUFDakIsdUNBQW1CLENBQUE7SUFDbkIsbUNBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUdwQjtBQUdELElBQUssY0FJSjtBQUpELFdBQUssY0FBYztJQUNmLG1DQUFpQixDQUFBO0lBQ2pCLG9DQUFrQixDQUFBO0lBQ2xCLGdDQUFjLENBQUE7QUFDbEIsQ0FBQyxFQUpJLGNBQWMsS0FBZCxjQUFjLFFBSWxCO0FBR0QsSUFBSyxRQUlKO0FBSkQsV0FBSyxRQUFRO0lBQ1QsNEJBQWdCLENBQUE7SUFDaEIsbUNBQXVCLENBQUE7SUFDdkIsMkJBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSkksUUFBUSxLQUFSLFFBQVEsUUFJWjtBQUdELElBQUssVUFHSjtBQUhELFdBQUssVUFBVTtJQUNYLDZDQUErQixDQUFBO0lBQy9CLDJDQUE2QixDQUFBO0FBQ2pDLENBQUMsRUFISSxVQUFVLEtBQVYsVUFBVSxRQUdkO0FBR0QsSUFBSyxjQUdKO0FBSEQsV0FBSyxjQUFjO0lBQ2YsZ0NBQWMsQ0FBQTtJQUNkLHFDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFISSxjQUFjLEtBQWQsY0FBYyxRQUdsQjtBQUdEO0lBQUE7SUFNQSxDQUFDO0lBTFUsbUJBQVEsR0FBb0IsUUFBUSxDQUFDO0lBQ3JDLHlCQUFjLEdBQTBCLGNBQWMsQ0FBQztJQUN2RCwyQkFBZ0IsR0FBNEIsZ0JBQWdCLENBQUM7SUFDN0QscUJBQVUsR0FBc0IsVUFBVSxDQUFDO0lBQzNDLHlCQUFjLEdBQTBCLGNBQWMsQ0FBQztJQUNsRSxpQkFBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBJbnRyb19TcGlkZXJBbmltIHtcclxuICAgIEFjdGlvbiA9IFwiYWN0aW9uMDFcIixcclxuICAgIElkbGUgPSBcImlkbGUwMVwiLFxyXG59XHJcblxyXG5cclxuZW51bSBJbnRyb19Eb2xsQW5pbSB7XHJcbiAgICBXYWxrID0gXCJhY3Rpb24wMVwiLFxyXG4gICAgU2NhcmUgPSBcImFjdGlvbjAyXCIsXHJcbiAgICBJZGxlID0gXCJpZGxlMFwiLFxyXG59XHJcblxyXG5cclxuZW51bSBMaXBzQW5pbSB7XHJcbiAgICBEcnkgPSBcImFjdGlvbjA0XCIsXHJcbiAgICBEaXJ0eVNtZWxsID0gXCJhY3Rpb24wM1wiLFxyXG4gICAgSWRsZSA9IFwiaWRsZTAyXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIGJ1YmJsZUFuaW0ge1xyXG4gICAgQ2xlYW4gPSBcImFjdGlvbjA0X2J1YmJsZV9jbGVhblwiLFxyXG4gICAgU2hvdyA9IFwiYWN0aW9uMDNfb25seV9idWJibGVcIixcclxufVxyXG5cclxuXHJcbmVudW0gd2F0ZXJUb290aEFuaW0ge1xyXG4gICAgSWRsZSA9IFwiSWRsZTFcIixcclxuICAgIEFjdGlvbiA9IFwiYWN0aW9uMDFcIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGluZUFuaW1zIHtcclxuICAgIHN0YXRpYyBMaXBzQW5pbTogdHlwZW9mIExpcHNBbmltID0gTGlwc0FuaW07XHJcbiAgICBzdGF0aWMgSW50cm9fRG9sbEFuaW06IHR5cGVvZiBJbnRyb19Eb2xsQW5pbSA9IEludHJvX0RvbGxBbmltO1xyXG4gICAgc3RhdGljIEludHJvX1NwaWRlckFuaW06IHR5cGVvZiBJbnRyb19TcGlkZXJBbmltID0gSW50cm9fU3BpZGVyQW5pbTtcclxuICAgIHN0YXRpYyBidWJibGVBbmltOiB0eXBlb2YgYnViYmxlQW5pbSA9IGJ1YmJsZUFuaW07XHJcbiAgICBzdGF0aWMgd2F0ZXJUb290aEFuaW06IHR5cGVvZiB3YXRlclRvb3RoQW5pbSA9IHdhdGVyVG9vdGhBbmltO1xyXG59Il19
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
                mraid.open("https://play.google.com/store/apps/details?id=mods.fors.melon.playground");
                return;
            }
            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
            //     return;
            // }
            mraid.open("https://play.google.com/store/apps/details?id=mods.fors.melon.playground");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsMEVBQTBFLENBQUMsQ0FBQztnQkFDdkYsT0FBTzthQUNWO1lBRUQsOEZBQThGO1lBQzlGLHVFQUF1RTtZQUN2RSxjQUFjO1lBQ2QsSUFBSTtZQUVKLEtBQUssQ0FBQyxJQUFJLENBQUMsMEVBQTBFLENBQUMsQ0FBQztZQUN2RixPQUFPO1NBQ1Y7UUFDRCwyRUFBMkU7UUFDM0UsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO3dEQUNXO0lBRnpCLGNBQWM7UUFEMUIsT0FBTztPQUNLLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0F0REQsQUFzREMsQ0F0RG1DLEVBQUUsQ0FBQyxTQUFTLEdBc0QvQztBQXREWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuIFxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluc3RhbGxIYW5kbGUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnN0YWxsXCIpO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9bW9kcy5mb3JzLm1lbG9uLnBsYXlncm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgLy8gICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkNjQ0OTI2OTczMz9tdD04XCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPW1vZHMuZm9ycy5tZWxvbi5wbGF5Z3JvdW5kXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgbWluZHdvcmsuIHdpbmRvdyBhbHdheSBhdmFpYWJsZSBzbyBza2lwIHVuZGVmaW5lZCBjaGVja1xyXG4gICAgICAgIHdpbmRvdy5pbnN0YWxsICYmIHdpbmRvdy5pbnN0YWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
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
var IronSource_1 = require("./IronSource");
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchAreaController = /** @class */ (function (_super) {
    __extends(TouchAreaController, _super);
    function TouchAreaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.IronSource = null;
        _this.NodeContainer = null;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.GamePlay = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        // this.initVarialbes();
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.Step1_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);
        this.NodeContainer.Step1_btn_KimTiem.on(cc.Node.EventType.TOUCH_START, this.btnActiveTouchStart, this);
        this.NodeContainer.Step2_Btn_Active.on(cc.Node.EventType.TOUCH_START, this.GamePlay.showCTA, this);
        this.NodeContainer.CTA_btnDownload.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
    };
    TouchAreaController.prototype.registerEventStep2 = function () {
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun1.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_Gun2.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_START, this.WeaponTouchStart, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_MOVE, this.WeaponTouchMove, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_END, this.WeaponTouchEnd, this);
        this.NodeContainer.Step2_kimtiem.on(cc.Node.EventType.TOUCH_CANCEL, this.WeaponTouchEnd, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
    };
    TouchAreaController.prototype.btnActiveTouchStart = function () {
        if (constants_1.Constants.isToStore) {
            this.GameController.installHandle();
            return;
        }
        !constants_1.Constants.isDoneStep1 && this.GamePlay.handleStep1();
    };
    TouchAreaController.prototype.WeaponTouchStart = function (e) {
        this.NodeContainer.Hand.active = false;
        var node = e.target;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickdo);
        console.log(node.name);
        switch (node.name) {
            case "Gun1":
                cc.tween(node)
                    .to(0.5, { scale: 0.28 })
                    .start();
                break;
            case "kimtiem":
                cc.tween(node)
                    .to(0.5, { scale: 0.6 }).start();
                break;
            case "Gun2":
                cc.tween(node)
                    .to(0.5, { scale: 0.18 }).start();
                break;
            default:
                break;
        }
    };
    TouchAreaController.prototype.WeaponTouchMove = function (e) {
        var node = e.target;
        var pos = this.node.convertToNodeSpaceAR(e.touch.getLocation());
        node.setPosition(pos.x, pos.y - 40);
    };
    TouchAreaController.prototype.WeaponTouchEnd = function (e) {
        !this.AudioManager.pickdo.isPlaying && this.AudioManager.playSound(constants_1.Constants.SoundTrack.pickdo);
        var node = e.target;
        var result = this.GamePlay.setInHole(node);
        if (!result)
            this.GamePlay.setInHoleWithTouch(node);
        constants_1.Constants.isHole1Actived && constants_1.Constants.isHole2Actived && constants_1.Constants.isHole3Actived && this.GamePlay.showBtnActive();
    };
    __decorate([
        property(IronSource_1.default)
    ], TouchAreaController.prototype, "IronSource", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], TouchAreaController.prototype, "NodeContainer", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], TouchAreaController.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], TouchAreaController.prototype, "GameController", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], TouchAreaController.prototype, "GamePlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUV0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5Qyx1Q0FBWTtJQUFyRDtRQUFBLHFFQTZIQztRQTVIQyxZQUFZO1FBRVosZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBa0IsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixRQUFRO1FBQ1IsYUFBTyxHQUFZLEtBQUssQ0FBQzs7SUE4RzNCLENBQUM7SUEzR1csb0NBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1MsbUNBQUssR0FBZjtRQUNFLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlHLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBR00sZ0RBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFD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QUFDO0lBQ3BILENBQUM7SUFySEQ7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzsyREFDUztJQUU5QjtRQURDLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzhEQUNZO0lBRXBDO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7NkRBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzsrREFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBWGYsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0E2SC9CO0lBQUQsMEJBQUM7Q0E3SEQsQUE2SEMsQ0E3SHdDLEVBQUUsQ0FBQyxTQUFTLEdBNkhwRDtBQTdIWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGluZUFuaW1zIH0gZnJvbSBcIi4uL0RhdGEvQW5pbXNcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgR2FtZVBsYXkgZnJvbSBcIi4vR2FtZVBsYXlcIjtcclxuaW1wb3J0IElyb25Tb3VyY2UgZnJvbSBcIi4vSXJvblNvdXJjZVwiO1xyXG5pbXBvcnQgTm9kZUNvbnRhaW5lciBmcm9tIFwiLi9Ob2RlQ29udGFuaWVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRvdWNoQXJlYUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIC8vIENvbXBvbmVudFxyXG4gIEBwcm9wZXJ0eShJcm9uU291cmNlKVxyXG4gIElyb25Tb3VyY2U6IElyb25Tb3VyY2UgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShOb2RlQ29udGFpbmVyKVxyXG4gIE5vZGVDb250YWluZXI6IE5vZGVDb250YWluZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lQ29udHJvbGxlcilcclxuICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShHYW1lUGxheSlcclxuICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gc3RhdGVcclxuICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAvLyB0aGlzLmluaXRWYXJpYWxiZXMoKTtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9CdG5fQWN0aXZlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmJ0bkFjdGl2ZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX2J0bl9LaW1UaWVtLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmJ0bkFjdGl2ZVRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9CdG5fQWN0aXZlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLkdhbWVQbGF5LnNob3dDVEEsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfYnRuRG93bmxvYWQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5IaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5oaWRlTWFza1RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyByZWdpc3RlckV2ZW50U3RlcDIoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5XZWFwb25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuV2VhcG9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5XZWFwb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfR3VuMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuV2VhcG9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4yLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLldlYXBvblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5XZWFwb25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0d1bjIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLldlYXBvblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9HdW4yLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5XZWFwb25Ub3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX2tpbXRpZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuV2VhcG9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfa2ltdGllbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLldlYXBvblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfa2ltdGllbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuV2VhcG9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX2tpbXRpZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLldlYXBvblRvdWNoRW5kLCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhpZGVNYXNrVG91Y2hTdGFydChlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChDb25zdGFudHMuaXNUb1N0b3JlKSB7XHJcbiAgICAgIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBidG5BY3RpdmVUb3VjaFN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYgKENvbnN0YW50cy5pc1RvU3RvcmUpIHtcclxuICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAhQ29uc3RhbnRzLmlzRG9uZVN0ZXAxICYmIHRoaXMuR2FtZVBsYXkuaGFuZGxlU3RlcDEoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIFdlYXBvblRvdWNoU3RhcnQoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnBpY2tkbyk7XHJcbiAgICBjb25zb2xlLmxvZyhub2RlLm5hbWUpO1xyXG5cclxuXHJcbiAgICBzd2l0Y2ggKG5vZGUubmFtZSkge1xyXG4gICAgICBjYXNlIFwiR3VuMVwiOlxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjI4IH0pXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImtpbXRpZW1cIjpcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC42IH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJHdW4yXCI6XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuMTggfSkuc3RhcnQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBXZWFwb25Ub3VjaE1vdmUoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xyXG4gICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBlLnRhcmdldDtcclxuICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZS50b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuXHJcbiAgICBub2RlLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSAtIDQwKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIFdlYXBvblRvdWNoRW5kKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgICF0aGlzLkF1ZGlvTWFuYWdlci5waWNrZG8uaXNQbGF5aW5nICYmIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5waWNrZG8pO1xyXG4gICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBlLnRhcmdldDtcclxuICAgIGxldCByZXN1bHQgPSB0aGlzLkdhbWVQbGF5LnNldEluSG9sZShub2RlKTtcclxuICAgIGlmICghcmVzdWx0KSB0aGlzLkdhbWVQbGF5LnNldEluSG9sZVdpdGhUb3VjaChub2RlKTtcclxuICAgIENvbnN0YW50cy5pc0hvbGUxQWN0aXZlZCAmJiBDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQgJiYgQ29uc3RhbnRzLmlzSG9sZTNBY3RpdmVkICYmIHRoaXMuR2FtZVBsYXkuc2hvd0J0bkFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19
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
        _this.canhbaoSound = null;
        _this.gun = null;
        _this.pickdo = null;
        _this.tiem = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        // ironsource
        // this.ironSourceNetwork(soundName);
        this.normalNetwork(soundName);
    };
    AudioManager.prototype.normalNetwork = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "canhbaoSound":
                    this.canhbaoSound.play();
                    break;
                case "gun":
                    this.gun.play();
                    break;
                case "pickdo":
                    this.pickdo.play();
                    break;
                case "tiem":
                    this.tiem.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "canhbaoSound":
                this.canhbaoSound.stop();
                break;
            case "gun":
                this.gun.stop();
                break;
            case "pickdo":
                this.pickdo.stop();
                break;
            case "tiem":
                this.tiem.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.canhbaoSound.stop();
        this.gun.stop();
        this.pickdo.stop();
        this.tiem.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "canhbaoSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "gun", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "pickdo", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "tiem", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFtRUM7UUFqRUcsU0FBUztRQUVULGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxTQUFHLEdBQW1CLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUU5QixVQUFJLEdBQW1CLElBQUksQ0FBQzs7SUF5RGhDLENBQUM7SUF2RFUsZ0NBQVMsR0FBaEIsVUFBaUIsU0FBaUI7UUFDOUIsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFHTyxvQ0FBYSxHQUFyQixVQUFzQixTQUFTO1FBQzNCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3BFLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssY0FBYztvQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN6QixNQUFNO2dCQUNWLEtBQUssS0FBSztvQkFDTixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNoQixNQUFNO2dCQUNWLEtBQUssUUFBUTtvQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQixNQUFNO2dCQUNWLEtBQUssTUFBTTtvQkFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNqQixNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtTQUNKO0lBQ0wsQ0FBQztJQUdNLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLFFBQVEsU0FBUyxFQUFFO1lBQ2YsS0FBSyxjQUFjO2dCQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pCLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2pCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBR00sbUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQTlERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNXO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ0U7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDSztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNHO0lBVlgsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1FaEM7SUFBRCxtQkFBQztDQW5FRCxBQW1FQyxDQW5FeUMsRUFBRSxDQUFDLFNBQVMsR0FtRXJEO2tCQW5Fb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gc291bmQgXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjYW5oYmFvU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGd1bjogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgcGlja2RvOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB0aWVtOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgICAvLyB0aGlzLmlyb25Tb3VyY2VOZXR3b3JrKHNvdW5kTmFtZSk7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxOZXR3b3JrKHNvdW5kTmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbm9ybWFsTmV0d29yayhzb3VuZE5hbWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2FuaGJhb1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5oYmFvU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImd1blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VuLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwaWNrZG9cIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tkby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidGllbVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGllbS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcFNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNhbmhiYW9Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5oYmFvU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJndW5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VuLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGlja2RvXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tkby5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRpZW1cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGllbS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbmhiYW9Tb3VuZC5zdG9wKClcclxuICAgICAgICB0aGlzLmd1bi5zdG9wKClcclxuICAgICAgICB0aGlzLnBpY2tkby5zdG9wKClcclxuICAgICAgICB0aGlzLnRpZW0uc3RvcCgpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/IronSource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49c0ang8TBDWqCvjXG1XKDi', 'IronSource');
// Script/Controller/IronSource.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IronSource = /** @class */ (function (_super) {
    __extends(IronSource, _super);
    function IronSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        return _this;
        // protected update(dt: number): void {
        //     this.handleMuteSoundIronSource();
        // }
    }
    IronSource.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }
    };
    IronSource.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], IronSource.prototype, "AudioManager", void 0);
    IronSource = __decorate([
        ccclass
    ], IronSource);
    return IronSource;
}(cc.Component));
exports.default = IronSource;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxJcm9uU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUFqQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDOztRQThCaEMsdUNBQXVDO1FBQ3ZDLHdDQUF3QztRQUN4QyxJQUFJO0lBQ1YsQ0FBQztJQS9CVSw4Q0FBeUIsR0FBaEM7UUFDSSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLDZEQUE2RDtTQUM5RDtJQUNILENBQUM7SUFHTyw4Q0FBeUIsR0FBakM7UUFDRSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVsRixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNHLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZDLDZEQUE2RDthQUM5RDtZQUVELElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZFLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDbEM7U0FDRjtJQUNILENBQUM7SUE1Qkg7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztvREFDVztJQUhqQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0M5QjtJQUFELGlCQUFDO0NBcENELEFBb0NDLENBcEN1QyxFQUFFLENBQUMsU0FBUyxHQW9DbkQ7a0JBcENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXJvblNvdXJjZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgICBwcml2YXRlIGhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcbiAgICBcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSAmJiAhQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgLy8gICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgICAvLyB9XHJcbn1cclxuIl19
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
var NodeContanier_1 = require("./NodeContanier");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GameController = null;
        _this.NodeContainer = null;
        _this.touchArea = null;
        // state
        _this.anims = [];
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        // this.scheduleOnce(() => {}, 1)
        this.touchArea.getComponent("TouchAreaController").registerEventStep2();
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.activeBtnAnim();
    };
    GamePlay.prototype.activeBtnAnim = function () {
        this.anims[0] = cc.tween(this.NodeContainer.btn_Active)
            .repeatForever(cc.tween(this.node)
            .to(0.5, { scale: 0.9 })
            .to(0.5, { scale: 1 }, { easing: 'elasticOut' })).start();
    };
    GamePlay.prototype.handleStep1 = function () {
        constants_1.Constants.isDoneStep1 = true;
        this.anims[0].stop();
        this.NodeContainer.btn_Active.scale = 1;
        this.runTweenAnims();
    };
    GamePlay.prototype.runTweenAnims = function () {
        var _this = this;
        var kimtiem = this.NodeContainer.Step1_btn_KimTiem.getChildByName("kimtiem");
        var frame = this.NodeContainer.Step1_btn_KimTiem.getChildByName("frame");
        var Step1_BoneThan = this.NodeContainer.PlayerBase.getChildByName("Bonethan");
        var Step1_Head = this.NodeContainer.Step1_character.getChildByName("Head").getChildByName("dau");
        // tween kim tiem
        cc.tween(kimtiem)
            .to(0.5, { scale: 2 }, { easing: 'elasticOut' })
            .call(function () {
            cc.tween(_this.NodeContainer.btn_Active)
                .to(2.5, { scale: 0 }, { easing: 'elasticInOut' })
                .start();
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.tiem);
            cc.tween(kimtiem)
                .to(0.5, { x: 70 })
                .call(function () {
                _this.NodeContainer.Step1_character.getComponent(cc.Animation).stop("Character_IdleAnim");
                // scale down frame
                cc.tween(frame)
                    .to(1.5, { scaleY: 0 })
                    .call(function () {
                    // show bone character
                    cc.tween(Step1_BoneThan)
                        .to(0.5, { opacity: 255 })
                        .call(function () {
                        console.log(Step1_Head.opacity);
                        cc.tween(kimtiem)
                            .to(0.5, { opacity: 0 })
                            .start();
                        cc.tween(_this.NodeContainer.overlay)
                            .to(1, { opacity: 150 })
                            .call(function () {
                            _this.NodeContainer.Step1.active = false;
                            _this.NodeContainer.Step2.active = true;
                            _this.touchArea.getComponent("TouchAreaController").registerEventStep2();
                        })
                            .to(1, { opacity: 0 })
                            .start();
                    })
                        .start();
                    // --------------
                    // hide main character
                    cc.tween(_this.NodeContainer.Step1_character)
                        .to(0.5, { opacity: 0 })
                        .start();
                    // --------------
                    Step1_Head.getComponent(cc.Animation).stop();
                    cc.tween(Step1_Head)
                        .to(0.5, { angle: -45, opacity: 0 })
                        .start();
                })
                    .start();
            })
                .start();
        })
            .start();
    };
    GamePlay.prototype.setInHole = function (weapon) {
        var weaponBdx = weapon.getBoundingBox();
        for (var index = 0; index < this.NodeContainer.Step2_Holes.length; index++) {
            var hole = this.NodeContainer.Step2_Holes[index];
            var holeBdx = hole.getBoundingBox();
            if (holeBdx.intersects(weaponBdx)) {
                var holeName = hole.name;
                weapon.active = false;
                weapon.off(cc.Node.EventType.TOUCH_START);
                weapon.off(cc.Node.EventType.TOUCH_MOVE);
                weapon.off(cc.Node.EventType.TOUCH_END);
                weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                hole.getChildByName("frame").opacity = 255;
                hole.getChildByName("number").opacity = 0;
                this.activeWeapon(hole, weapon);
                this.NodeContainer.Step2_Holes.splice(index, 1);
                switch (holeName) {
                    case "Hole1":
                        constants_1.Constants.isHole1Actived = true;
                        return true;
                    case "Hole2":
                        constants_1.Constants.isHole2Actived = true;
                        return true;
                    case "Hole3":
                        constants_1.Constants.isHole3Actived = true;
                        return true;
                    default:
                        break;
                }
            }
        }
        return false;
    };
    GamePlay.prototype.setInHoleWithTouch = function (weapon) {
        var weaponBdx = weapon.getBoundingBox();
        for (var index = 0; index < this.NodeContainer.Step2_Holes.length; index++) {
            var hole = this.NodeContainer.Step2_Holes[index];
            var holeBdx = hole.getBoundingBox();
            if (holeBdx.intersects(weaponBdx)) {
                var holeName = hole.name;
                weapon.setPosition(hole.getPosition());
                hole.getChildByName("frame").opacity = 255;
                hole.getChildByName("number").opacity = 0;
                switch (holeName) {
                    case "Hole1":
                        constants_1.Constants.isHole1Actived = true;
                        break;
                    case "Hole2":
                        constants_1.Constants.isHole2Actived = true;
                        break;
                    case "Hole3":
                        constants_1.Constants.isHole3Actived = true;
                        break;
                    default:
                        break;
                }
            }
            else {
                if (!constants_1.Constants.isHole1Actived) {
                    constants_1.Constants.isHole1Actived = true;
                    this.NodeContainer.Step2_TempHoles[0].getChildByName("frame").opacity = 255;
                    this.NodeContainer.Step2_TempHoles[0].getChildByName("number").opacity = 0;
                    weapon.active = false;
                    weapon.off(cc.Node.EventType.TOUCH_START);
                    weapon.off(cc.Node.EventType.TOUCH_MOVE);
                    weapon.off(cc.Node.EventType.TOUCH_END);
                    weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                    this.activeWeapon(hole, weapon);
                    this.NodeContainer.Step2_Holes.splice(index, 1);
                    return;
                }
                if (!constants_1.Constants.isHole2Actived) {
                    constants_1.Constants.isHole2Actived = true;
                    this.NodeContainer.Step2_TempHoles[1].getChildByName("frame").opacity = 255;
                    this.NodeContainer.Step2_TempHoles[1].getChildByName("number").opacity = 0;
                    weapon.active = false;
                    weapon.off(cc.Node.EventType.TOUCH_START);
                    weapon.off(cc.Node.EventType.TOUCH_MOVE);
                    weapon.off(cc.Node.EventType.TOUCH_END);
                    weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                    this.activeWeapon(hole, weapon);
                    this.NodeContainer.Step2_Holes.splice(index, 1);
                    return;
                }
                if (!constants_1.Constants.isHole3Actived) {
                    constants_1.Constants.isHole3Actived = true;
                    this.NodeContainer.Step2_TempHoles[2].getChildByName("frame").opacity = 255;
                    this.NodeContainer.Step2_TempHoles[2].getChildByName("number").opacity = 0;
                    weapon.active = false;
                    weapon.off(cc.Node.EventType.TOUCH_START);
                    weapon.off(cc.Node.EventType.TOUCH_MOVE);
                    weapon.off(cc.Node.EventType.TOUCH_END);
                    weapon.off(cc.Node.EventType.TOUCH_CANCEL);
                    this.activeWeapon(hole, weapon);
                    this.NodeContainer.Step2_Holes.splice(index, 1);
                    return;
                }
            }
        }
    };
    GamePlay.prototype.showBtnActive = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.canhbaoSound);
        var Step2_BtnActive = this.NodeContainer.Step2.getChildByName("Btn_Active");
        for (var index = 0; index < this.NodeContainer.Step2_TempHoles.length; index++) {
            var hole = this.NodeContainer.Step2_TempHoles[index];
            cc.tween(hole)
                .to(2, { scale: 0 }, { easing: 'elasticInOut' })
                .call(function () {
                cc.tween(Step2_BtnActive)
                    .to(0.5, { scale: 1, opacity: 255 }, { easing: 'elasticInOut' })
                    .call(function () {
                    _this.anims[1] = cc.tween(Step2_BtnActive)
                        .repeatForever(cc.tween(_this.node)
                        .to(0.5, { scale: 0.9 })
                        .to(0.5, { scale: 1 }, { easing: 'elasticOut' })).start();
                })
                    .start();
            })
                .start();
        }
        for (var index = 0; index < this.NodeContainer.Step2_Frames.length; index++) {
            var frame = this.NodeContainer.Step2_Frames[index];
            cc.tween(frame)
                .to(2, { scale: 0 }, { easing: 'elasticInOut' })
                .start();
        }
    };
    GamePlay.prototype.activeWeapon = function (hole, weapon) {
        var hole1 = this.NodeContainer.Step2_Options.getChildByName("Hole1_Weapon");
        var hole2 = this.NodeContainer.Step2_Options.getChildByName("Hole2_Weapon");
        var hole3 = this.NodeContainer.Step2_Options.getChildByName("Hole3_Weapon");
        var weaponName = weapon.name;
        switch (hole.name) {
            case "Hole1":
                hole1.getChildByName(weaponName).active = true;
                break;
            case "Hole2":
                hole2.getChildByName(weaponName).active = true;
                break;
            case "Hole3":
                hole3.getChildByName(weaponName).active = true;
                break;
            default:
                break;
        }
    };
    GamePlay.prototype.showCTA = function () {
        // mtg & applovin
        // this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.gun);
        cc.tween(this.NodeContainer.Step2)
            .to(1, { opacity: 0 }, { easing: 'elasticOut' })
            .call(function () {
            _this.NodeContainer.CTA.active = true;
            cc.tween(_this.NodeContainer.CTA)
                .to(1, { opacity: 255 }, { easing: 'elasticOut' })
                .call(function () {
                cc.tween(_this.NodeContainer.CTA_btnDownload)
                    .repeatForever(cc.tween(_this.node)
                    .to(0.5, { scale: 0.5 })
                    .to(0.5, { scale: 0.4 }, { easing: 'elasticOut' })).start();
            })
                .start();
        })
            .start();
    };
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(NodeContanier_1.default)
    ], GamePlay.prototype, "NodeContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "touchArea", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrVUM7UUFoVUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFJcEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixRQUFRO1FBQ1IsV0FBSyxHQUFlLEVBQUUsQ0FBQzs7SUFxVHpCLENBQUM7SUFsVFcseUJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDeEUsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR08sZ0NBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDcEQsYUFBYSxDQUNaLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFB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T0FBTztPQUNhLFFBQVEsQ0FrVTVCO0lBQUQsZUFBQztDQWxVRCxBQWtVQyxDQWxVcUMsRUFBRSxDQUFDLFNBQVMsR0FrVWpEO2tCQWxVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQbGF5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvdWNoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIHN0YXRlXHJcbiAgYW5pbXM6IGNjLlR3ZWVuW10gPSBbXTtcclxuXHJcblxyXG4gIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt9LCAxKVxyXG4gICAgdGhpcy50b3VjaEFyZWEuZ2V0Q29tcG9uZW50KFwiVG91Y2hBcmVhQ29udHJvbGxlclwiKS5yZWdpc3RlckV2ZW50U3RlcDIoKTtcclxuICAgIC8vIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5iZ1NvdW5kKTtcclxuICAgIHRoaXMuYWN0aXZlQnRuQW5pbSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgYWN0aXZlQnRuQW5pbSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5pbXNbMF0gPSBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuYnRuX0FjdGl2ZSlcclxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgKS5zdGFydCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoYW5kbGVTdGVwMSgpOiB2b2lkIHtcclxuICAgIENvbnN0YW50cy5pc0RvbmVTdGVwMSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hbmltc1swXS5zdG9wKCk7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuYnRuX0FjdGl2ZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgdGhpcy5ydW5Ud2VlbkFuaW1zKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBydW5Ud2VlbkFuaW1zKCk6IHZvaWQge1xyXG4gICAgbGV0IGtpbXRpZW0gPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDFfYnRuX0tpbVRpZW0uZ2V0Q2hpbGRCeU5hbWUoXCJraW10aWVtXCIpO1xyXG4gICAgbGV0IGZyYW1lID0gdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX2J0bl9LaW1UaWVtLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIik7XHJcbiAgICBsZXQgU3RlcDFfQm9uZVRoYW4gPSB0aGlzLk5vZGVDb250YWluZXIuUGxheWVyQmFzZS5nZXRDaGlsZEJ5TmFtZShcIkJvbmV0aGFuXCIpXHJcbiAgICBsZXQgU3RlcDFfSGVhZCA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9jaGFyYWN0ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkXCIpLmdldENoaWxkQnlOYW1lKFwiZGF1XCIpXHJcblxyXG4gICAgLy8gdHdlZW4ga2ltIHRpZW1cclxuICAgIGNjLnR3ZWVuKGtpbXRpZW0pXHJcbiAgICAgIC50bygwLjUsIHsgc2NhbGU6IDIgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5idG5fQWN0aXZlKVxyXG4gICAgICAgICAgLnRvKDIuNSwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sudGllbSk7XHJcbiAgICAgICAgY2MudHdlZW4oa2ltdGllbSlcclxuICAgICAgICAgIC50bygwLjUsIHsgeDogNzAgfSlcclxuICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMV9jaGFyYWN0ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcChcIkNoYXJhY3Rlcl9JZGxlQW5pbVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxlIGRvd24gZnJhbWVcclxuICAgICAgICAgICAgY2MudHdlZW4oZnJhbWUpXHJcbiAgICAgICAgICAgICAgLnRvKDEuNSwgeyBzY2FsZVk6IDAgfSlcclxuICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyBib25lIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oU3RlcDFfQm9uZVRoYW4pXHJcbiAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhTdGVwMV9IZWFkLm9wYWNpdHkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oa2ltdGllbSlcclxuICAgICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5vdmVybGF5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMTUwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoQXJlYS5nZXRDb21wb25lbnQoXCJUb3VjaEFyZWFDb250cm9sbGVyXCIpLnJlZ2lzdGVyRXZlbnRTdGVwMigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBtYWluIGNoYXJhY3RlclxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAxX2NoYXJhY3RlcilcclxuICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgICAgICAgICBTdGVwMV9IZWFkLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKFN0ZXAxX0hlYWQpXHJcbiAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgYW5nbGU6IC00NSwgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHNldEluSG9sZSh3ZWFwb246IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgIGxldCB3ZWFwb25CZHggPSB3ZWFwb24uZ2V0Qm91bmRpbmdCb3goKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfSG9sZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGhvbGUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfSG9sZXNbaW5kZXhdO1xyXG4gICAgICBjb25zdCBob2xlQmR4ID0gaG9sZS5nZXRCb3VuZGluZ0JveCgpO1xyXG5cclxuICAgICAgaWYgKGhvbGVCZHguaW50ZXJzZWN0cyh3ZWFwb25CZHgpKSB7XHJcbiAgICAgICAgbGV0IGhvbGVOYW1lID0gaG9sZS5uYW1lO1xyXG4gICAgICAgIHdlYXBvbi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFKTtcclxuICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICBob2xlLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBob2xlLmdldENoaWxkQnlOYW1lKFwibnVtYmVyXCIpLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVdlYXBvbihob2xlLCB3ZWFwb24pXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX0hvbGVzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaG9sZU5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMVwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMUFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMlwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlM1wiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlM0FjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2V0SW5Ib2xlV2l0aFRvdWNoKHdlYXBvbjogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgbGV0IHdlYXBvbkJkeCA9IHdlYXBvbi5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgaG9sZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlc1tpbmRleF07XHJcbiAgICAgIGNvbnN0IGhvbGVCZHggPSBob2xlLmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgICBpZiAoaG9sZUJkeC5pbnRlcnNlY3RzKHdlYXBvbkJkeCkpIHtcclxuICAgICAgICBsZXQgaG9sZU5hbWUgPSBob2xlLm5hbWU7XHJcbiAgICAgICAgd2VhcG9uLnNldFBvc2l0aW9uKGhvbGUuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIGhvbGUuZ2V0Q2hpbGRCeU5hbWUoXCJmcmFtZVwiKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIGhvbGUuZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaG9sZU5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMVwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMUFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJIb2xlMlwiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJIb2xlM1wiOlxyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNIb2xlM0FjdGl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNIb2xlMUFjdGl2ZWQpIHtcclxuICAgICAgICAgIENvbnN0YW50cy5pc0hvbGUxQWN0aXZlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzWzBdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXNbMF0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICB3ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYWN0aXZlV2VhcG9uKGhvbGUsIHdlYXBvbilcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNIb2xlMkFjdGl2ZWQpIHtcclxuICAgICAgICAgIENvbnN0YW50cy5pc0hvbGUyQWN0aXZlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzWzFdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXNbMV0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICB3ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYWN0aXZlV2VhcG9uKGhvbGUsIHdlYXBvbilcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFDb25zdGFudHMuaXNIb2xlM0FjdGl2ZWQpIHtcclxuICAgICAgICAgIENvbnN0YW50cy5pc0hvbGUzQWN0aXZlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzWzJdLmdldENoaWxkQnlOYW1lKFwiZnJhbWVcIikub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXNbMl0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZXJcIikub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICB3ZWFwb24uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgICB3ZWFwb24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xyXG4gICAgICAgICAgd2VhcG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuYWN0aXZlV2VhcG9uKGhvbGUsIHdlYXBvbilcclxuICAgICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9Ib2xlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2hvd0J0bkFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5jYW5oYmFvU291bmQpO1xyXG5cclxuICAgIGxldCBTdGVwMl9CdG5BY3RpdmUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDIuZ2V0Q2hpbGRCeU5hbWUoXCJCdG5fQWN0aXZlXCIpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9UZW1wSG9sZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGhvbGUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfVGVtcEhvbGVzW2luZGV4XTtcclxuICAgICAgY2MudHdlZW4oaG9sZSlcclxuICAgICAgICAudG8oMiwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICBjYy50d2VlbihTdGVwMl9CdG5BY3RpdmUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuYW5pbXNbMV0gPSBjYy50d2VlbihTdGVwMl9CdG5BY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuOSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfRnJhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBmcmFtZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9GcmFtZXNbaW5kZXhdO1xyXG4gICAgICBjYy50d2VlbihmcmFtZSlcclxuICAgICAgICAudG8oMiwgeyBzY2FsZTogMCB9LCB7IGVhc2luZzogJ2VsYXN0aWNJbk91dCcgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZVdlYXBvbihob2xlOiBjYy5Ob2RlLCB3ZWFwb246IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgIGxldCBob2xlMTogY2MuTm9kZSA9IHRoaXMuTm9kZUNvbnRhaW5lci5TdGVwMl9PcHRpb25zLmdldENoaWxkQnlOYW1lKFwiSG9sZTFfV2VhcG9uXCIpO1xyXG4gICAgbGV0IGhvbGUyOiBjYy5Ob2RlID0gdGhpcy5Ob2RlQ29udGFpbmVyLlN0ZXAyX09wdGlvbnMuZ2V0Q2hpbGRCeU5hbWUoXCJIb2xlMl9XZWFwb25cIik7XHJcbiAgICBsZXQgaG9sZTM6IGNjLk5vZGUgPSB0aGlzLk5vZGVDb250YWluZXIuU3RlcDJfT3B0aW9ucy5nZXRDaGlsZEJ5TmFtZShcIkhvbGUzX1dlYXBvblwiKTtcclxuICAgIGxldCB3ZWFwb25OYW1lID0gd2VhcG9uLm5hbWU7XHJcblxyXG4gICAgc3dpdGNoIChob2xlLm5hbWUpIHtcclxuICAgICAgY2FzZSBcIkhvbGUxXCI6XHJcbiAgICAgICAgaG9sZTEuZ2V0Q2hpbGRCeU5hbWUod2VhcG9uTmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkhvbGUyXCI6XHJcbiAgICAgICAgaG9sZTIuZ2V0Q2hpbGRCeU5hbWUod2VhcG9uTmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkhvbGUzXCI6XHJcbiAgICAgICAgaG9sZTMuZ2V0Q2hpbGRCeU5hbWUod2VhcG9uTmFtZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2hvd0NUQSgpOiB2b2lkIHtcclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuSGlkZU1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmd1bik7XHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuU3RlcDIpXHJcbiAgICAudG8oMSwge29wYWNpdHk6IDB9LCB7ZWFzaW5nOiAnZWxhc3RpY091dCd9KVxyXG4gICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5DVEEpXHJcbiAgICAgIC50bygxLCB7b3BhY2l0eTogMjU1fSwge2Vhc2luZzogJ2VsYXN0aWNPdXQnfSlcclxuICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfYnRuRG93bmxvYWQpXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQgfSwgeyBlYXNpbmc6ICdlbGFzdGljT3V0JyB9KVxyXG4gICAgICAgICkuc3RhcnQoKTtcclxuICAgICAgfSlcclxuICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9KVxyXG4gICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
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
    SoundTrack["canhbaoSound"] = "canhbaoSound";
    SoundTrack["gun"] = "gun";
    SoundTrack["pickdo"] = "pickdo";
    SoundTrack["tiem"] = "tiem";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isToStore = true;
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = true;
    Constants.isDoneStep1 = false;
    Constants.isHole1Actived = false;
    Constants.isHole2Actived = false;
    Constants.isHole3Actived = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNaLDJDQUE2QixDQUFBO0lBQzdCLHlCQUFXLENBQUE7SUFDWCwrQkFBaUIsQ0FBQTtJQUNqQiwyQkFBYSxDQUFBO0FBQ2hCLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0Q7SUFBQTtJQTRCQSxDQUFDO0lBMUJHLFlBQVk7SUFDTCxtQkFBUyxHQUFZLElBQUksQ0FBQztJQUMxQixrQkFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixpQkFBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixvQkFBVSxHQUFZLElBQUksQ0FBQztJQUUzQixxQkFBVyxHQUFZLEtBQUssQ0FBQztJQUM3Qix3QkFBYyxHQUFZLEtBQUssQ0FBQztJQUNoQyx3QkFBYyxHQUFZLEtBQUssQ0FBQztJQUNoQyx3QkFBYyxHQUFZLEtBQUssQ0FBQztJQUV2QyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFFdEQsZ0JBQUM7Q0E1QkQsQUE0QkMsSUFBQTtBQTVCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5cclxuY29uc3QgSXJvblNvdXJjZSA9IHtcclxuICAgIC8vIGlyb25zb3VyY2UgXHJcbiAgICBTb3VuZFN0YXRlOiB0cnVlLFxyXG4gICAgU3RhdGU6IDEsXHJcbiAgICBpc0VuZEdhbWU6IGZhbHNlLFxyXG4gICAgaXNQbGF5QmdTb3VuZDogZmFsc2UsXHJcbn1cclxuXHJcblxyXG5jb25zdCBSZXNwb25zaXZlID0ge1xyXG4gICAgY2FsY3VsYXRlZFk6IDAsXHJcbiAgICBjYWxjdWxhdGVkWDogMCxcclxuICAgIGN1cnJlbnREZXZpY2U6IFwiXCIsXHJcbn1cclxuXHJcblxyXG5lbnVtIFNvdW5kVHJhY2sge1xyXG4gICBjYW5oYmFvU291bmQgPSBcImNhbmhiYW9Tb3VuZFwiLFxyXG4gICBndW4gPSBcImd1blwiLFxyXG4gICBwaWNrZG8gPSBcInBpY2tkb1wiLFxyXG4gICB0aWVtID0gXCJ0aWVtXCIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc1RvU3RvcmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhdGljIGlzUm90YXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzQ2FuVG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgaXNEb25lU3RlcDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0hvbGUxQWN0aXZlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzSG9sZTJBY3RpdmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNIb2xlM0FjdGl2ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
