
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
        _this.bgSound = null;
        _this.spiderSound = null;
        _this.hmmSound = null;
        _this.walkSound = null;
        _this.scareSound = null;
        _this.IntroDelightSound = null;
        _this.whooseSound = null;
        _this.moveItemSound = null;
        _this.DoneStepSound = null;
        _this.crySound = null;
        _this.gapRuoiSound = null;
        _this.screamHoooSound = null;
        _this.nhoMun1Sound = null;
        _this.nhoMun2Sound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "screamHoooSound":
                    this.screamHoooSound.play();
                    break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "gapRuoiSound":
                    this.gapRuoiSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "DoneStepSound":
                    this.DoneStepSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "whooseSound":
                    this.whooseSound.play();
                    break;
                case "hmmSound":
                    this.hmmSound.play();
                    break;
                case "walkSound":
                    this.walkSound.play();
                    break;
                case "spiderSound":
                    this.spiderSound.play();
                    break;
                case "scareSound":
                    this.scareSound.play();
                    break;
                case "IntroDelightSound":
                    this.IntroDelightSound.play();
                    break;
                default:
                    break;
            }
        }
    };
    AudioManager.prototype.stopSound = function (soundName) {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "screamHoooSound":
                this.screamHoooSound.stop();
                break;
            case "gapRuoiSound":
                this.gapRuoiSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "DoneStepSound":
                this.DoneStepSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "whooseSound":
                this.whooseSound.stop();
                break;
            case "spiderSound":
                this.spiderSound.stop();
                break;
            case "walkSound":
                this.walkSound.stop();
                break;
            case "hmmSound":
                this.hmmSound.stop();
                break;
            case "scareSound":
                this.scareSound.stop();
                break;
            case "IntroDelightSound":
                this.IntroDelightSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.nhoMun2Sound.stop();
        this.nhoMun1Sound.stop();
        this.screamHoooSound.stop();
        this.DoneStepSound.stop();
        this.whooseSound.stop();
        this.moveItemSound.stop();
        this.bgSound.stop();
        this.walkSound.stop();
        this.spiderSound.stop();
        this.scareSound.stop();
        this.IntroDelightSound.stop();
        this.hmmSound.stop();
        this.crySound.stop();
        this.gapRuoiSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "spiderSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "hmmSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "walkSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "scareSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "IntroDelightSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "whooseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "moveItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "DoneStepSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "crySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "gapRuoiSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "screamHoooSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun1Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun2Sound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUF1SkM7UUFySkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUV6QyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMscUJBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7O0lBeUh4QyxDQUFDO0lBdEhVLGdDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO1FBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3BFLFFBQVEsU0FBUyxFQUFFO2dCQUNmLEtBQUssU0FBUztvQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQixNQUFNO2dCQUNWLEtBQUssaUJBQWlCO29CQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLElB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Q0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO21EQUNRO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ1M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyREFDZ0I7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDVTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNZO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7dURBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNXO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eURBQ2M7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztzREFDVztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNXO0lBOUJuQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBdUpoQztJQUFELG1CQUFDO0NBdkpELEFBdUpDLENBdkp5QyxFQUFFLENBQUMsU0FBUyxHQXVKckQ7a0JBdkpvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBzb3VuZCBcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGJnU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHNwaWRlclNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBobW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd2Fsa1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBzY2FyZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBJbnRyb0RlbGlnaHRTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgd2hvb3NlU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIG1vdmVJdGVtU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIERvbmVTdGVwU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGNyeVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBnYXBSdW9pU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIHNjcmVhbUhvb29Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbmhvTXVuMVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBuaG9NdW4yU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzb3VuZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY3JlYW1Ib29vU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcmVhbUhvb29Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmhvTXVuMVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uaG9NdW4xU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5ob011bjJTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmhvTXVuMlNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJnYXBSdW9pU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcFJ1b2lTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3J5U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJEb25lU3RlcFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Eb25lU3RlcFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3ZlSXRlbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ3aG9vc2VTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hvb3NlU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImhtbVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5obW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid2Fsa1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxrU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNwaWRlclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGlkZXJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2NhcmVTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhcmVTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiSW50cm9EZWxpZ2h0U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkludHJvRGVsaWdodFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wU291bmQoc291bmROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibmhvTXVuMVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ob011bjFTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm5ob011bjJTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uaG9NdW4yU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY3JlYW1Ib29vU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NyZWFtSG9vb1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ2FwUnVvaVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhcFJ1b2lTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNyeVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRG9uZVN0ZXBTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Eb25lU3RlcFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibW92ZUl0ZW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2hvb3NlU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMud2hvb3NlU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcGlkZXJTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGlkZXJTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndhbGtTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53YWxrU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJobW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5obW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNjYXJlU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhcmVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkludHJvRGVsaWdodFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkludHJvRGVsaWdodFNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmhvTXVuMlNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLm5ob011bjFTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zY3JlYW1Ib29vU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRG9uZVN0ZXBTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy53aG9vc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud2Fsa1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnNwaWRlclNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnNjYXJlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuSW50cm9EZWxpZ2h0U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuaG1tU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZ2FwUnVvaVNvdW5kLnN0b3AoKTtcclxuICAgIH1cclxufVxyXG4iXX0=