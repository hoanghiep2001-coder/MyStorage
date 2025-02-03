
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
require('./assets/Script/Controller/Bee');
require('./assets/Script/Controller/EggController');
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/GamePlay');
require('./assets/Script/Controller/GraphicsContro');
require('./assets/Script/Controller/NodesController');
require('./assets/Script/Controller/PointController');
require('./assets/Script/Controller/TouchController');
require('./assets/Script/Data/StateForJS');
require('./assets/Script/Data/constants');
require('./assets/Script/Plugin/AudioManager');
require('./assets/Script/Plugin/MyPhysicsCollider');
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
                    var __filename = 'preview-scripts/assets/Script/Controller/EggController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7838NrFfZMWpWVpJlrJ5k0', 'EggController');
// Script/Controller/EggController.ts

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
var GamePlay_1 = require("./GamePlay");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GamePlay = null;
        _this.AudioManager = null;
        _this.effectDies = [];
        _this.rigidbody = null;
        _this.collide = null;
        _this.isChangeEggRigidbodyType = false;
        return _this;
    }
    NewClass.prototype.start = function () {
        var _this = this;
        this.rigidbody = this.getComponent(cc.RigidBody);
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 8) {
                constants_1.Constants.isLoseLv2 = true;
                _this.rigidbody.destroy();
                _this.getComponent(cc.Collider).destroy();
                _this.node.getChildByName("Spine_Character").active = false;
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.explosionSound);
                _this.effectDies.forEach(function (fx) { return fx.resetSystem(); });
                _this.scheduleOnce(function () { _this.GamePlay.loseLv2(); }, 2.5);
            }
        };
    };
    NewClass.prototype.changeRigidbodyType = function () {
        this.rigidbody.type = cc.RigidBodyType.Dynamic;
    };
    NewClass.prototype.update = function (dt) {
        if (window.changeEggRigidbodyType && !this.isChangeEggRigidbodyType) {
            this.isChangeEggRigidbodyType = true;
            this.changeRigidbodyType();
        }
    };
    __decorate([
        property(GamePlay_1.default)
    ], NewClass.prototype, "GamePlay", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], NewClass.prototype, "AudioManager", void 0);
    __decorate([
        property([cc.ParticleSystem])
    ], NewClass.prototype, "effectDies", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxFZ2dDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFDbEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBdkNHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQXdCLEVBQUUsQ0FBQztRQUVyQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUM1Qiw4QkFBd0IsR0FBWSxLQUFLLENBQUM7O0lBK0I5QyxDQUFDO0lBNUJhLHdCQUFLLEdBQWY7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBQyxDQUFtQixFQUFFLENBQXFCLEVBQUUsQ0FBcUI7WUFDOUYsSUFBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDWixxQkFBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNqRSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFBLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTthQUMxRDtRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFHTSxzQ0FBbUIsR0FBMUI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDO0lBR1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFHLE1BQU0sQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNoRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQXRDRDtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDOzhDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7a0RBQ1c7SUFFbEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7Z0RBQ087SUFQcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTBDNUI7SUFBRCxlQUFDO0NBMUNELEFBMENDLENBMUNxQyxFQUFFLENBQUMsU0FBUyxHQTBDakQ7a0JBMUNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL1BsdWdpbi9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgICBHYW1lUGxheTogR2FtZVBsYXkgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuUGFydGljbGVTeXN0ZW1dKVxyXG4gICAgZWZmZWN0RGllczogY2MuUGFydGljbGVTeXN0ZW1bXSA9IFtdO1xyXG5cclxuICAgIHJpZ2lkYm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGNvbGxpZGU6IGNjLkNvbGxpZGVyID0gbnVsbDtcclxuICAgIGlzQ2hhbmdlRWdnUmlnaWRib2R5VHlwZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS5vbkJlZ2luQ29udGFjdCA9IChjOmNjLlBoeXNpY3NDb250YWN0LCBzOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG86IGNjLlBoeXNpY3NDb2xsaWRlcikgPT4ge1xyXG4gICAgICAgICAgICBpZihvLnRhZyA9PT0gOCkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzTG9zZUx2MiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2lkYm9keS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5Db2xsaWRlcikuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiU3BpbmVfQ2hhcmFjdGVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmV4cGxvc2lvblNvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RGllcy5mb3JFYWNoKGZ4ID0+IGZ4LnJlc2V0U3lzdGVtKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuR2FtZVBsYXkubG9zZUx2MigpfSwgMi41KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlUmlnaWRib2R5VHlwZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpZ2lkYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih3aW5kb3cuY2hhbmdlRWdnUmlnaWRib2R5VHlwZSAmJiAhdGhpcy5pc0NoYW5nZUVnZ1JpZ2lkYm9keVR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NoYW5nZUVnZ1JpZ2lkYm9keVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVJpZ2lkYm9keVR5cGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
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
cc._RF.push(module, 'e4962SfSUFOcoqc2Otz+5iQ', 'GamePlay');
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
var NodesController_1 = require("./NodesController");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePlay = /** @class */ (function (_super) {
    __extends(GamePlay, _super);
    function GamePlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Script
        _this.NodesController = null;
        _this.AudioManager = null;
        _this.GameController = null;
        // Component
        // Node
        _this.graphic = null;
        _this.pathFinding_Grid = null;
        _this.pathFinding_Nodes = [];
        _this.Overlay = null;
        // State
        _this.curentPosition = null;
        _this.currentHint = null;
        _this.currentPencil = null;
        _this.curerntPoint = null;
        _this.isHit = false;
        _this.isHint = false;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
        var physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    };
    GamePlay.prototype.start = function () {
        if (window.isLoseGame || constants_1.Constants.isLoseLv2) {
            window.changeEggRigidbodyType = false;
            this.isHit = true;
            this.Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
            cc.tween(this.Overlay)
                .to(0.5, { opacity: 0 }, { easing: cc.easing.smooth })
                .call(function () { constants_1.Constants.isCanTouch = true; })
                .start();
        }
        constants_1.Constants.isWinGame = false;
        window.isLoseGame = false;
        this.NodesController.CTA.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        constants_1.Constants.isCanTouch = true;
    };
    GamePlay.prototype.handleGamePlay = function () {
        constants_1.Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition();
        constants_1.Constants.CharacterPos.y = constants_1.Constants.CharacterPos.y + 25;
        this.registerEvent();
    };
    GamePlay.prototype.registerEvent = function () {
    };
    GamePlay.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
    };
    GamePlay.prototype.handleMuteSoundIronSource = function () {
        constants_1.Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);
        if (constants_1.Constants.ironSource.State) {
            if (constants_1.Constants.ironSource.State === 1 && !constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
                constants_1.Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
            }
            if (constants_1.Constants.ironSource.State === 2 && constants_1.Constants.ironSource.SoundState) {
                constants_1.Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    };
    GamePlay.prototype.characterHit = function () {
        var _this = this;
        window.isReplayGame = true;
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "being_hit", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.crySound);
        if (window.currentLv === 2) {
            this.scheduleOnce(function () {
                cc.tween(_this.Overlay)
                    .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                    .call(function () { cc.director.loadScene("Lv2"); })
                    .start();
            }, 2);
        }
        else {
            this.scheduleOnce(function () {
                cc.tween(_this.Overlay)
                    .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
                    .call(function () { cc.director.loadScene("Lv1_PlayAgain"); })
                    .start();
            }, 2);
        }
    };
    GamePlay.prototype.loseLv2 = function () {
        cc.tween(this.Overlay)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(function () { cc.director.loadScene("Lv2"); })
            .start();
    };
    GamePlay.prototype.winGame = function () {
        constants_1.Constants.isWinGame = true;
        window.currentLv = 2;
        this.NodesController.Spine_Character.setAnimation(0, "result_win", true);
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.winSound);
        this.scheduleOnce(function () { cc.director.loadScene("Lv2"); }, 2);
    };
    GamePlay.prototype.unactiveHint = function () {
        this.handleIronSourcePlaySound();
        this.isHint = true;
        this.NodesController.Hint.active = false;
    };
    GamePlay.prototype.update = function (dt) {
        constants_1.Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();
        window.stopDrawSound && this.AudioManager.stopSound(constants_1.Constants.SoundTrack.drawSound);
        this.handleMuteSoundIronSource();
    };
    __decorate([
        property(NodesController_1.default)
    ], GamePlay.prototype, "NodesController", void 0);
    __decorate([
        property(AudioManager_1.default)
    ], GamePlay.prototype, "AudioManager", void 0);
    __decorate([
        property(GameController_1.GameController)
    ], GamePlay.prototype, "GameController", void 0);
    __decorate([
        property(cc.Graphics)
    ], GamePlay.prototype, "graphic", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "Overlay", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBZ0Q7QUFDaEQscUNBQXFDO0FBRS9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0tDO1FBOUpHLFNBQVM7UUFFVCxxQkFBZSxHQUFvQixJQUFJLENBQUM7UUFFeEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUd0QyxZQUFZO1FBR1osT0FBTztRQUVQLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBQzVCLHNCQUFnQixHQUFRLElBQUksQ0FBQztRQUM3Qix1QkFBaUIsR0FBUSxFQUFFLENBQUM7UUFHNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixRQUFRO1FBQ1Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFDL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBQ2xDLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUFtSTVCLENBQUM7SUFoSWEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsaUVBQWlFO0lBQ3JFLENBQUM7SUFHUyx3QkFBSyxHQUFmO1FBQ0ksSUFBRyxNQUFNLENBQUMsVUFBVSxJQUFJLHFCQUFTLENBQUMsU0FBUyxF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QUFDO1FBQ3RELE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxRCxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUEzSkQ7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQztxREFDYztJQUV4QztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBRWxDO1FBREMsUUFBUSxDQUFDLCtCQUFjLENBQUM7b0RBQ2E7SUFRdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2Q0FDTTtJQUs1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBckJQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnSzVCO0lBQUQsZUFBQztDQWhLRCxBQWdLQyxDQWhLcUMsRUFBRSxDQUFDLFNBQVMsR0FnS2pEO2tCQWhLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IE5vZGVzQ29udHJvbGxlciBmcm9tIFwiLi9Ob2Rlc0NvbnRyb2xsZXJcIjtcclxuLy8gaW1wb3J0ICogYXMgUEYgZnJvbSBcInBhdGhmaW5kaW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBsYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIFNjcmlwdFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgICBHYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBDb21wb25lbnRcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxyXG4gICAgZ3JhcGhpYzogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgcGF0aEZpbmRpbmdfR3JpZDogYW55ID0gbnVsbDtcclxuICAgIHBhdGhGaW5kaW5nX05vZGVzOiBhbnkgPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIE92ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFN0YXRlXHJcbiAgICBjdXJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBjdXJyZW50SGludDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBjdXJyZW50UGVuY2lsOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBjdXJlcm50UG9pbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNIaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzSGludDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwaHlzaWNzID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBwaHlzaWNzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHBoeXNpY3MuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBpZih3aW5kb3cuaXNMb3NlR2FtZSB8fCBDb25zdGFudHMuaXNMb3NlTHYyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jaGFuZ2VFZ2dSaWdpZGJvZHlUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLk92ZXJsYXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLk92ZXJsYXkpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAwfSwge2Vhc2luZzogY2MuZWFzaW5nLnNtb290aH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWV9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5pc1dpbkdhbWUgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNMb3NlR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLkNUQS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZVBsYXkoKTtcclxuICAgICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR2FtZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLkNoYXJhY3RlclBvcyA9IHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICBDb25zdGFudHMuQ2hhcmFjdGVyUG9zLnkgPSBDb25zdGFudHMuQ2hhcmFjdGVyUG9zLnkgKyAyNVxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG5cclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlICYmICFDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuc3RvcEFsbFNvdW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hhcmFjdGVySGl0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5pc1JlcGxheUdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTm9kZXNDb250cm9sbGVyLlNwaW5lX0NoYXJhY3Rlci5zZXRBbmltYXRpb24oMCwgXCJiZWluZ19oaXRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93LmN1cnJlbnRMdiA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLk92ZXJsYXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7b3BhY2l0eTogMjU1fSwge2Vhc2luZzogY2MuZWFzaW5nLnNtb290aH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYyXCIpfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLk92ZXJsYXkpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7b3BhY2l0eTogMjU1fSwge2Vhc2luZzogY2MuZWFzaW5nLnNtb290aH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYxX1BsYXlBZ2FpblwiKX0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGxvc2VMdjIoKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5PdmVybGF5KVxyXG4gICAgICAgIC50bygwLjUsIHtvcGFjaXR5OiAyNTV9LCB7ZWFzaW5nOiBjYy5lYXNpbmcuc21vb3RofSlcclxuICAgICAgICAuY2FsbCgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYyXCIpfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHdpbkdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzV2luR2FtZSA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmN1cnJlbnRMdiA9IDJcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5TcGluZV9DaGFyYWN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwicmVzdWx0X3dpblwiLCB0cnVlKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2sud2luU291bmQpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7Y2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTHYyXCIpfSwgMik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgdW5hY3RpdmVIaW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuaXNIaW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vZGVzQ29udHJvbGxlci5IaW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBDb25zdGFudHMuaXNIaXQgJiYgIXRoaXMuaXNIaXQgJiYgdGhpcy5jaGFyYWN0ZXJIaXQoKTtcclxuICAgICAgICB3aW5kb3cuaXNTdGFydERyYXcgJiYgIXRoaXMuaXNIaW50ICYmIHRoaXMudW5hY3RpdmVIaW50KCk7XHJcbiAgICAgICAgd2luZG93LnN0b3BEcmF3U291bmQgJiYgdGhpcy5BdWRpb01hbmFnZXIuc3RvcFNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmRyYXdTb3VuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
cc._RF.push(module, 'd0b68xTANVBsaIBjAI8Yj1K', 'constants');
// Script/Data/constants.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Event;
(function (Event) {
    Event["touchStart"] = "touchstart";
    Event["touchMove"] = "touchmove";
    Event["touchEnd"] = "touchend";
    Event["touchCancel"] = "touchcancel";
})(Event || (Event = {}));
var IronSource = {
    // ironsource 
    SoundState: true,
    State: 1,
    isEndGame: false,
    isPlayBgSound: false,
};
var Responsive = {
    calculated: 0,
    currentDevice: "",
};
var SoundTrack;
(function (SoundTrack) {
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["drawSound"] = "drawSound";
    SoundTrack["winSound"] = "winSound";
    SoundTrack["moveSound"] = "moveSound";
    SoundTrack["fireworksSound"] = "fireworksSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["clickSound"] = "clickSound";
    SoundTrack["loseSound"] = "loseSound";
    SoundTrack["stingSound"] = "stingSound";
    SoundTrack["explosionSound"] = "explosionSound";
    SoundTrack["beeSound"] = "beeSound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    Constants.isClickGameStart = false;
    Constants.isRotate = false;
    Constants.isCanTouch = false;
    Constants.currentPosition = null;
    Constants.CharacterPos = null;
    Constants.Char_Point1 = null;
    Constants.Char_Point2 = null;
    Constants.Char_Point3 = null;
    Constants.isHit = false;
    Constants.currentLv = 1;
    Constants.isWinGame = false;
    Constants.isLoseLv2 = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxLQUtKO0FBTEQsV0FBSyxLQUFLO0lBQ04sa0NBQXlCLENBQUE7SUFDekIsZ0NBQXVCLENBQUE7SUFDdkIsOEJBQXFCLENBQUE7SUFDckIsb0NBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQUxJLEtBQUssS0FBTCxLQUFLLFFBS1Q7QUFFRCxJQUFNLFVBQVUsR0FBRztJQUNmLGNBQWM7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixLQUFLLEVBQUUsQ0FBQztJQUNSLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFHRCxJQUFNLFVBQVUsR0FBRztJQUNmLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFZSjtBQVpELFdBQUssVUFBVTtJQUNYLGlDQUFtQixDQUFBO0lBQ25CLHFDQUF1QixDQUFBO0lBQ3ZCLG1DQUFxQixDQUFBO0lBQ3JCLHFDQUF1QixDQUFBO0lBQ3ZCLCtDQUFpQyxDQUFBO0lBQ2pDLG1DQUFxQixDQUFBO0lBQ3JCLHVDQUF5QixDQUFBO0lBQ3pCLHFDQUF1QixDQUFBO0lBQ3ZCLHVDQUF5QixDQUFBO0lBQ3pCLCtDQUFpQyxDQUFBO0lBQ2pDLG1DQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFaSSxVQUFVLEtBQVYsVUFBVSxRQVlkO0FBR0Q7SUFBQTtJQStCQSxDQUFDO0lBN0JHLFlBQVk7SUFDTCwwQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFDbEMsa0JBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsb0JBQVUsR0FBWSxLQUFLLENBQUM7SUFFNUIseUJBQWUsR0FBWSxJQUFJLENBQUM7SUFDaEMsc0JBQVksR0FBWSxJQUFJLENBQUM7SUFDN0IscUJBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIscUJBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIscUJBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIsZUFBSyxHQUFZLEtBQUssQ0FBQztJQUN2QixtQkFBUyxHQUFXLENBQUMsQ0FBQztJQUN0QixtQkFBUyxHQUFZLEtBQUssQ0FBQztJQUMzQixtQkFBUyxHQUFZLEtBQUssQ0FBQztJQUVsQyxRQUFRO0lBQ0QsZUFBSyxHQUFpQixLQUFLLENBQUM7SUFHbkMsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUdsRCxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFDdEQsZ0JBQUM7Q0EvQkQsQUErQkMsSUFBQTtBQS9CWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudCB7XHJcbiAgICB0b3VjaFN0YXJ0ID0gXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCIsXHJcbiAgICB0b3VjaENhbmNlbCA9IFwidG91Y2hjYW5jZWxcIlxyXG59XHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBkcmF3U291bmQgPSBcImRyYXdTb3VuZFwiLFxyXG4gICAgd2luU291bmQgPSBcIndpblNvdW5kXCIsXHJcbiAgICBtb3ZlU291bmQgPSBcIm1vdmVTb3VuZFwiLFxyXG4gICAgZmlyZXdvcmtzU291bmQgPSBcImZpcmV3b3Jrc1NvdW5kXCIsXHJcbiAgICBjcnlTb3VuZCA9IFwiY3J5U291bmRcIixcclxuICAgIGNsaWNrU291bmQgPSBcImNsaWNrU291bmRcIixcclxuICAgIGxvc2VTb3VuZCA9IFwibG9zZVNvdW5kXCIsXHJcbiAgICBzdGluZ1NvdW5kID0gXCJzdGluZ1NvdW5kXCIsXHJcbiAgICBleHBsb3Npb25Tb3VuZCA9IFwiZXhwbG9zaW9uU291bmRcIixcclxuICAgIGJlZVNvdW5kID0gXCJiZWVTb3VuZFwiXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuXHJcbiAgICAvLyBzdGF0ZSAgICBcclxuICAgIHN0YXRpYyBpc0NsaWNrR2FtZVN0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgQ2hhcmFjdGVyUG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBDaGFyX1BvaW50MTogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBzdGF0aWMgQ2hhcl9Qb2ludDI6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgc3RhdGljIENoYXJfUG9pbnQzOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHN0YXRpYyBpc0hpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGN1cnJlbnRMdjogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBpc1dpbkdhbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0xvc2VMdjI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxufVxyXG5cclxuXHJcbiJdfQ==
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
cc._RF.push(module, 'd5c01VUSP5G8p7xJENgTwyO', 'Responsive');
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
var NodesController_1 = require("../Controller/NodesController");
var constants_1 = require("../Data/constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.NodesController = null;
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
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
        }
        else {
            this.isRotate = false;
            this.setVertical();
        }
    };
    Responsive.prototype.setHorizontal = function () {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
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
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        constants_1.Constants.Responsive.currentDevice = "horizon_Tablet";
    };
    Responsive.prototype.setVertical = function () {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
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
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        constants_1.Constants.Responsive.currentDevice = "vertical_mobile";
        // if(cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus
        // } else {    
        //     // Ipad
        // }
    };
    Responsive.prototype.update = function (dt) {
        this.handleRotate();
    };
    __decorate([
        property(NodesController_1.default)
    ], Responsive.prototype, "NodesController", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaUVBQTREO0FBQzVELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTZHQztRQTNHRyxZQUFZO1FBRVoscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBS3hDLFFBQVE7UUFDUixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsb0JBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyx1QkFBaUIsR0FBVyxtQkFBbUIsQ0FBQztRQUNoRCxrQkFBWSxHQUFXLGNBQWMsQ0FBQztRQUN0QyxxQkFBZSxHQUFXLGlCQUFpQixDQUFDOztJQTZGaEQsQ0FBQztJQTNGYSwyQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFFUywwQkFBSyxHQUFmO0lBRUEsQ0FBQztJQUVPLGlDQUFZLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUVJLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFO1lBQ3BFLHFDQUFxQztZQUNyQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU8sd0NBQW1CLEdBQTNCO1FBQ0ksSUFBRyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2xDLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQztJQUMxRCxDQUFDO0lBRU8sMkNBQXNCLEdBQTlCO1FBQ0ksSUFBRyxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7SUFFMUQsQ0FBQztJQUVPLGdDQUFXLEdBQW5CO1FBRUksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBRU8sK0JBQVUsR0FBbEI7UUFDSSxJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEMscUJBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLGlCQUFpQixDQUFDO0lBRzNELENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNJLElBQUcsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNuQyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFHdkQsMkVBQTJFO1FBQzNFLHdDQUF3QztRQUV4QyxlQUFlO1FBQ2YsY0FBYztRQUVkLElBQUk7SUFFUixDQUFDO0lBR1MsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXZHRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO3VEQUNjO0lBSnZCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E2RzlCO0lBQUQsaUJBQUM7Q0E3R0QsQUE2R0MsQ0E3R3VDLEVBQUUsQ0FBQyxTQUFTLEdBNkduRDtrQkE3R29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuLi9Db250cm9sbGVyL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBOb2Rlc0NvbnRyb2xsZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZXNDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KE5vZGVzQ29udHJvbGxlcilcclxuICAgIE5vZGVzQ29udHJvbGxlcjogTm9kZXNDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEhvcml6b250YWwoKTogdm9pZCB7XHJcbiAgICAgXHJcbiAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgMC42NSkge1xyXG4gICAgICAgICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXMgLyBYXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SG9yaXpvbnRhbEZvcklwWCgpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsRm9ySXBYKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuSE9SSVpPTlRBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5IT1JJWk9OVEFMX0lQWDtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJob3Jpem9uX1RhYmxldFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLkhPUklaT05UQUxfVEFCTEVUID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTF9UQUJMRVQ7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwiaG9yaXpvbl9UYWJsZXRcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWZXJ0aWNhbCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5WRVJUSUNBTF9JUFggPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV2aWNlID0gdGhpcy5WRVJUSUNBTF9JUFg7XHJcbiAgICAgICAgQ29uc3RhbnRzLlJlc3BvbnNpdmUuY3VycmVudERldmljZSA9IFwidmVydGljYWxfbW9iaWxlXCI7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1vYmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLlZFUlRJQ0FMX01PQklMRSA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLlZFUlRJQ0FMX01PQklMRTtcclxuICAgICAgICBDb25zdGFudHMuUmVzcG9uc2l2ZS5jdXJyZW50RGV2aWNlID0gXCJ2ZXJ0aWNhbF9tb2JpbGVcIjtcclxuICAgICAgXHJcblxyXG4gICAgICAgIC8vIGlmKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNykge1xyXG4gICAgICAgIC8vICAgICAvLyBJcGhvbmUgNiAvIDYgcGx1cyAvIDcgLyA3IFBsdXNcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyB9IGVsc2UgeyAgICBcclxuICAgICAgICAvLyAgICAgLy8gSXBhZFxyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Data/StateForJS.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '658d5P3MUBBApXFkwazlx6Z', 'StateForJS');
// Script/Data/StateForJS.js

"use strict";

exports.__esModule = true;
exports.StateForJs = void 0;
var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;

var StateForJs = function StateForJs() {};

exports.StateForJs = StateForJs;
StateForJs.isCanDraw = true;
StateForJs.timeToWin = 5;
StateForJs.isToStore = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxTdGF0ZUZvckpTLmpzIl0sIm5hbWVzIjpbImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJ0aW1lVG9XaW4iLCJpc1RvU3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEJBLEVBQUUsQ0FBQ0MsVUFBakM7QUFBQSxJQUFRQyxPQUFSLGtCQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFFBQWpCLGtCQUFpQkEsUUFBakI7O0lBQ2FDOzs7QUFBQUEsV0FDRkMsWUFBWTtBQURWRCxXQUVGRSxZQUFZO0FBRlZGLFdBR0ZHLFlBQVkiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUZvckpzIHtcclxuICAgIHN0YXRpYyBpc0NhbkRyYXcgPSB0cnVlO1xyXG4gICAgc3RhdGljIHRpbWVUb1dpbiA9IDU7XHJcbiAgICBzdGF0aWMgaXNUb1N0b3JlID0gZmFsc2U7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GraphicsContro.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93044ZctVJBYpcfVaP3IJVr', 'GraphicsContro');
// Script/Controller/GraphicsContro.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: null,
    line_point: [cc.Vec2]
  },
  onLoad: function onLoad() {
    this.node.width = 5000;
    this.node.height = 5000;
    this.graphics = this.getComponent(cc.Graphics);
    this.currentDrawTime = 0;
  },
  start: function start() {
    window.PointPos = cc.v2(0, 0);
    this.onTouch();
  },
  onTouch: function onTouch() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  offTouch: function offTouch() {
    this.node.off(cc.Node.EventType.TOUCH_START);
    this.node.off(cc.Node.EventType.TOUCH_MOVE);
    this.node.off(cc.Node.EventType.TOUCH_END);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL);
  },
  touch_start: function touch_start(event) {
    if (!_StateForJS.StateForJs.isCanDraw || _StateForJS.StateForJs.isToStore) {
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.isStartDraw = true;
    window.PointPos = pos;
    this.graphics.moveTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
  },
  touch_move: function touch_move(event) {
    if (!_StateForJS.StateForJs.isCanDraw || _StateForJS.StateForJs.isToStore) {
      return;
    }

    this.currentDrawTime += 1;

    if (window.currentLv === 2 && this.currentDrawTime >= 8) {
      window.changeEggRigidbodyType = true;
      window.stopDrawSound = true;
      this.touch_end();
      return;
    }

    var pos = this.node.convertToNodeSpaceAR(event.getLocation());
    window.PointPos = pos;
    this.graphics.lineTo(pos.x, pos.y);
    this.line_point.push(cc.v2(pos.x, pos.y));
    this.updateStrokeColor();
    this.graphics.stroke();
  },
  touch_end: function touch_end(event) {
    if (window.isTouchWall) {
      _StateForJS.StateForJs.isCanDraw = true;
      window.isTouchWall = false;
      this.line_point = [];
      this.graphics.clear();
      return;
    }

    if (!_StateForJS.StateForJs.isCanDraw || _StateForJS.StateForJs.isToStore) {
      return;
    } // Rút gọn đường vẽ


    var simplifiedPoints = this.simplifyPath(this.line_point, 4); // Sử dụng độ tolerance phù hợp

    _StateForJS.StateForJs.isCanDraw = false;
    window.isDraw = true;
    window.isTouchWall = false;
    this.createRigibody(simplifiedPoints);
    this.offTouch();
  },
  updateStrokeColor: function updateStrokeColor() {
    if (window.isTouchWall) {
      this.graphics.strokeColor = cc.Color.RED;
    } else {
      this.graphics.strokeColor = cc.Color.BLACK;
    }
  },
  createRigibody: function createRigibody(simplifiedPoints) {
    this.rigibodyLogic = this.addComponent(cc.RigidBody);
    this.rigibodyLogic.gravityScale = 2;
    this.physicsLine = this.addComponent("MyPhysicsCollider");
    this.physicsLine.lineWidth = 7;
    this.physicsLine.points = simplifiedPoints; // Sử dụng điểm đã rút gọn

    this.physicsLine.friction = 0;
    this.physicsLine.density = 1000000;
    this.physicsLine.tag = 4;
    this.physicsLine.apply();
  },
  simplifyPath: function simplifyPath(points, tolerance) {
    if (points.length < 3) return points;
    var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;
    points = this.simplifyDouglasPeucker(points, sqTolerance);
    return points;
  },
  simplifyDouglasPeucker: function simplifyDouglasPeucker(points, sqTolerance) {
    var len = points.length,
        ArrayConstructor = typeof Uint8Array !== 'undefined' ? Uint8Array : Array,
        markers = new ArrayConstructor(len),
        first = 0,
        last = len - 1,
        stack = [],
        newPoints = [],
        i,
        maxSqDist,
        sqDist,
        index;
    markers[first] = markers[last] = 1;

    while (last) {
      maxSqDist = 0;

      for (i = first + 1; i < last; i++) {
        sqDist = this.getSqSegDist(points[i], points[first], points[last]);

        if (sqDist > maxSqDist) {
          index = i;
          maxSqDist = sqDist;
        }
      }

      if (maxSqDist > sqTolerance) {
        markers[index] = 1;
        stack.push(first, index, index, last);
      }

      last = stack.pop();
      first = stack.pop();
    }

    for (i = 0; i < len; i++) {
      if (markers[i]) {
        newPoints.push(points[i]);
      }
    }

    return newPoints;
  },
  getSqSegDist: function getSqSegDist(p, p1, p2) {
    var x = p1.x,
        y = p1.y,
        dx = p2.x - x,
        dy = p2.y - y;

    if (dx !== 0 || dy !== 0) {
      var t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);

      if (t > 1) {
        x = p2.x;
        y = p2.y;
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }

    dx = p.x - x;
    dy = p.y - y;
    return dx * dx + dy * dy;
  },
  checkIsCanDraw: function checkIsCanDraw(lastPoint, nowPoint) {
    return lastPoint.sub(nowPoint).mag() >= 20;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHcmFwaGljc0NvbnRyby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdyYXBoaWNzIiwibGluZV9wb2ludCIsIlZlYzIiLCJvbkxvYWQiLCJub2RlIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDb21wb25lbnQiLCJHcmFwaGljcyIsImN1cnJlbnREcmF3VGltZSIsInN0YXJ0Iiwid2luZG93IiwiUG9pbnRQb3MiLCJ2MiIsIm9uVG91Y2giLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoX3N0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoX21vdmUiLCJUT1VDSF9FTkQiLCJ0b3VjaF9lbmQiLCJUT1VDSF9DQU5DRUwiLCJvZmZUb3VjaCIsIm9mZiIsImV2ZW50IiwiU3RhdGVGb3JKcyIsImlzQ2FuRHJhdyIsImlzVG9TdG9yZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZ2V0TG9jYXRpb24iLCJpc1N0YXJ0RHJhdyIsIm1vdmVUbyIsIngiLCJ5IiwicHVzaCIsImN1cnJlbnRMdiIsImNoYW5nZUVnZ1JpZ2lkYm9keVR5cGUiLCJzdG9wRHJhd1NvdW5kIiwibGluZVRvIiwidXBkYXRlU3Ryb2tlQ29sb3IiLCJzdHJva2UiLCJpc1RvdWNoV2FsbCIsImNsZWFyIiwic2ltcGxpZmllZFBvaW50cyIsInNpbXBsaWZ5UGF0aCIsImlzRHJhdyIsImNyZWF0ZVJpZ2lib2R5Iiwic3Ryb2tlQ29sb3IiLCJDb2xvciIsIlJFRCIsIkJMQUNLIiwicmlnaWJvZHlMb2dpYyIsImFkZENvbXBvbmVudCIsIlJpZ2lkQm9keSIsImdyYXZpdHlTY2FsZSIsInBoeXNpY3NMaW5lIiwibGluZVdpZHRoIiwicG9pbnRzIiwiZnJpY3Rpb24iLCJkZW5zaXR5IiwidGFnIiwiYXBwbHkiLCJ0b2xlcmFuY2UiLCJsZW5ndGgiLCJzcVRvbGVyYW5jZSIsInVuZGVmaW5lZCIsInNpbXBsaWZ5RG91Z2xhc1BldWNrZXIiLCJsZW4iLCJBcnJheUNvbnN0cnVjdG9yIiwiVWludDhBcnJheSIsIkFycmF5IiwibWFya2VycyIsImZpcnN0IiwibGFzdCIsInN0YWNrIiwibmV3UG9pbnRzIiwiaSIsIm1heFNxRGlzdCIsInNxRGlzdCIsImluZGV4IiwiZ2V0U3FTZWdEaXN0IiwicG9wIiwicCIsInAxIiwicDIiLCJkeCIsImR5IiwidCIsImNoZWNrSXNDYW5EcmF3IiwibGFzdFBvaW50Iiwibm93UG9pbnQiLCJzdWIiLCJtYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsSUFERjtBQUVSQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxJQUFKO0FBRkosR0FIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLElBQWxCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsU0FBS04sUUFBTCxHQUFnQixLQUFLTyxZQUFMLENBQWtCWCxFQUFFLENBQUNZLFFBQXJCLENBQWhCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixDQUF2QjtBQUNILEdBYkk7QUFlTEMsRUFBQUEsS0FmSyxtQkFlRztBQUNKQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0JoQixFQUFFLENBQUNpQixFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBbEI7QUFDQSxTQUFLQyxPQUFMO0FBQ0gsR0FsQkk7QUFvQkxBLEVBQUFBLE9BcEJLLHFCQW9CSztBQUNOLFNBQUtWLElBQUwsQ0FBVVcsRUFBVixDQUFhbkIsRUFBRSxDQUFDb0IsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxLQUFLQyxXQUFqRCxFQUE4RCxJQUE5RDtBQUNBLFNBQUtmLElBQUwsQ0FBVVcsRUFBVixDQUFhbkIsRUFBRSxDQUFDb0IsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxVQUEvQixFQUEyQyxLQUFLQyxVQUFoRCxFQUE0RCxJQUE1RDtBQUNBLFNBQUtqQixJQUFMLENBQVVXLEVBQVYsQ0FBYW5CLEVBQUUsQ0FBQ29CLElBQUgsQ0FBUUMsU0FBUixDQUFrQkssU0FBL0IsRUFBMEMsS0FBS0MsU0FBL0MsRUFBMEQsSUFBMUQ7QUFDQSxTQUFLbkIsSUFBTCxDQUFVVyxFQUFWLENBQWFuQixFQUFFLENBQUNvQixJQUFILENBQVFDLFNBQVIsQ0FBa0JPLFlBQS9CLEVBQTZDLEtBQUtELFNBQWxELEVBQTZELElBQTdEO0FBQ0gsR0F6Qkk7QUEyQkxFLEVBQUFBLFFBM0JLLHNCQTJCTTtBQUNQLFNBQUtyQixJQUFMLENBQVVzQixHQUFWLENBQWM5QixFQUFFLENBQUNvQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQWhDO0FBQ0EsU0FBS2QsSUFBTCxDQUFVc0IsR0FBVixDQUFjOUIsRUFBRSxDQUFDb0IsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxVQUFoQztBQUNBLFNBQUtoQixJQUFMLENBQVVzQixHQUFWLENBQWM5QixFQUFFLENBQUNvQixJQUFILENBQVFDLFNBQVIsQ0FBa0JLLFNBQWhDO0FBQ0EsU0FBS2xCLElBQUwsQ0FBVXNCLEdBQVYsQ0FBYzlCLEVBQUUsQ0FBQ29CLElBQUgsQ0FBUUMsU0FBUixDQUFrQk8sWUFBaEM7QUFDSCxHQWhDSTtBQWtDTEwsRUFBQUEsV0FsQ0ssdUJBa0NPUSxLQWxDUCxFQWtDYztBQUNmLFFBQUksQ0FBQ0MsdUJBQVdDLFNBQVosSUFBeUJELHVCQUFXRSxTQUF4QyxFQUFtRDtBQUMvQztBQUNIOztBQUVELFFBQUlDLEdBQUcsR0FBRyxLQUFLM0IsSUFBTCxDQUFVNEIsb0JBQVYsQ0FBK0JMLEtBQUssQ0FBQ00sV0FBTixFQUEvQixDQUFWO0FBQ0F0QixJQUFBQSxNQUFNLENBQUN1QixXQUFQLEdBQXFCLElBQXJCO0FBQ0F2QixJQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0JtQixHQUFsQjtBQUNBLFNBQUsvQixRQUFMLENBQWNtQyxNQUFkLENBQXFCSixHQUFHLENBQUNLLENBQXpCLEVBQTRCTCxHQUFHLENBQUNNLENBQWhDO0FBQ0EsU0FBS3BDLFVBQUwsQ0FBZ0JxQyxJQUFoQixDQUFxQjFDLEVBQUUsQ0FBQ2lCLEVBQUgsQ0FBTWtCLEdBQUcsQ0FBQ0ssQ0FBVixFQUFhTCxHQUFHLENBQUNNLENBQWpCLENBQXJCO0FBQ0gsR0E1Q0k7QUE4Q0xoQixFQUFBQSxVQTlDSyxzQkE4Q01NLEtBOUNOLEVBOENhO0FBQ2QsUUFBSSxDQUFDQyx1QkFBV0MsU0FBWixJQUF5QkQsdUJBQVdFLFNBQXhDLEVBQW1EO0FBQy9DO0FBQ0g7O0FBRUQsU0FBS3JCLGVBQUwsSUFBd0IsQ0FBeEI7O0FBRUEsUUFBR0UsTUFBTSxDQUFDNEIsU0FBUCxLQUFxQixDQUFyQixJQUEwQixLQUFLOUIsZUFBTCxJQUF3QixDQUFyRCxFQUF3RDtBQUNwREUsTUFBQUEsTUFBTSxDQUFDNkIsc0JBQVAsR0FBZ0MsSUFBaEM7QUFDQTdCLE1BQUFBLE1BQU0sQ0FBQzhCLGFBQVAsR0FBdUIsSUFBdkI7QUFDQSxXQUFLbEIsU0FBTDtBQUNBO0FBQ0g7O0FBRUQsUUFBSVEsR0FBRyxHQUFHLEtBQUszQixJQUFMLENBQVU0QixvQkFBVixDQUErQkwsS0FBSyxDQUFDTSxXQUFOLEVBQS9CLENBQVY7QUFDQXRCLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQm1CLEdBQWxCO0FBQ0EsU0FBSy9CLFFBQUwsQ0FBYzBDLE1BQWQsQ0FBcUJYLEdBQUcsQ0FBQ0ssQ0FBekIsRUFBNEJMLEdBQUcsQ0FBQ00sQ0FBaEM7QUFDQSxTQUFLcEMsVUFBTCxDQUFnQnFDLElBQWhCLENBQXFCMUMsRUFBRSxDQUFDaUIsRUFBSCxDQUFNa0IsR0FBRyxDQUFDSyxDQUFWLEVBQWFMLEdBQUcsQ0FBQ00sQ0FBakIsQ0FBckI7QUFFQSxTQUFLTSxpQkFBTDtBQUNBLFNBQUszQyxRQUFMLENBQWM0QyxNQUFkO0FBQ0gsR0FuRUk7QUFxRUxyQixFQUFBQSxTQXJFSyxxQkFxRUtJLEtBckVMLEVBcUVZO0FBQ2IsUUFBSWhCLE1BQU0sQ0FBQ2tDLFdBQVgsRUFBd0I7QUFDcEJqQiw2QkFBV0MsU0FBWCxHQUF1QixJQUF2QjtBQUNBbEIsTUFBQUEsTUFBTSxDQUFDa0MsV0FBUCxHQUFxQixLQUFyQjtBQUNBLFdBQUs1QyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsV0FBS0QsUUFBTCxDQUFjOEMsS0FBZDtBQUNBO0FBQ0g7O0FBRUQsUUFBSSxDQUFDbEIsdUJBQVdDLFNBQVosSUFBeUJELHVCQUFXRSxTQUF4QyxFQUFtRDtBQUMvQztBQUNILEtBWFksQ0FhYjs7O0FBQ0EsUUFBSWlCLGdCQUFnQixHQUFHLEtBQUtDLFlBQUwsQ0FBa0IsS0FBSy9DLFVBQXZCLEVBQW1DLENBQW5DLENBQXZCLENBZGEsQ0Fja0Q7O0FBQy9EMkIsMkJBQVdDLFNBQVgsR0FBdUIsS0FBdkI7QUFDQWxCLElBQUFBLE1BQU0sQ0FBQ3NDLE1BQVAsR0FBZ0IsSUFBaEI7QUFDQXRDLElBQUFBLE1BQU0sQ0FBQ2tDLFdBQVAsR0FBcUIsS0FBckI7QUFDQSxTQUFLSyxjQUFMLENBQW9CSCxnQkFBcEI7QUFDQSxTQUFLdEIsUUFBTDtBQUNILEdBekZJO0FBMkZMa0IsRUFBQUEsaUJBM0ZLLCtCQTJGZTtBQUNoQixRQUFJaEMsTUFBTSxDQUFDa0MsV0FBWCxFQUF3QjtBQUNwQixXQUFLN0MsUUFBTCxDQUFjbUQsV0FBZCxHQUE0QnZELEVBQUUsQ0FBQ3dELEtBQUgsQ0FBU0MsR0FBckM7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLckQsUUFBTCxDQUFjbUQsV0FBZCxHQUE0QnZELEVBQUUsQ0FBQ3dELEtBQUgsQ0FBU0UsS0FBckM7QUFDSDtBQUNKLEdBakdJO0FBbUdMSixFQUFBQSxjQW5HSywwQkFtR1VILGdCQW5HVixFQW1HNEI7QUFDN0IsU0FBS1EsYUFBTCxHQUFxQixLQUFLQyxZQUFMLENBQWtCNUQsRUFBRSxDQUFDNkQsU0FBckIsQ0FBckI7QUFDQSxTQUFLRixhQUFMLENBQW1CRyxZQUFuQixHQUFrQyxDQUFsQztBQUVBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0gsWUFBTCxDQUFrQixtQkFBbEIsQ0FBbkI7QUFDQSxTQUFLRyxXQUFMLENBQWlCQyxTQUFqQixHQUE2QixDQUE3QjtBQUNBLFNBQUtELFdBQUwsQ0FBaUJFLE1BQWpCLEdBQTBCZCxnQkFBMUIsQ0FONkIsQ0FNZ0I7O0FBQzdDLFNBQUtZLFdBQUwsQ0FBaUJHLFFBQWpCLEdBQTRCLENBQTVCO0FBQ0EsU0FBS0gsV0FBTCxDQUFpQkksT0FBakIsR0FBMkIsT0FBM0I7QUFDQSxTQUFLSixXQUFMLENBQWlCSyxHQUFqQixHQUF1QixDQUF2QjtBQUNBLFNBQUtMLFdBQUwsQ0FBaUJNLEtBQWpCO0FBQ0gsR0E5R0k7QUFnSExqQixFQUFBQSxZQWhISyx3QkFnSFFhLE1BaEhSLEVBZ0hnQkssU0FoSGhCLEVBZ0gyQjtBQUM1QixRQUFJTCxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUIsT0FBT04sTUFBUDtBQUV2QixRQUFJTyxXQUFXLEdBQUdGLFNBQVMsS0FBS0csU0FBZCxHQUEwQkgsU0FBUyxHQUFHQSxTQUF0QyxHQUFrRCxDQUFwRTtBQUNBTCxJQUFBQSxNQUFNLEdBQUcsS0FBS1Msc0JBQUwsQ0FBNEJULE1BQTVCLEVBQW9DTyxXQUFwQyxDQUFUO0FBRUEsV0FBT1AsTUFBUDtBQUNILEdBdkhJO0FBeUhMUyxFQUFBQSxzQkF6SEssa0NBeUhrQlQsTUF6SGxCLEVBeUgwQk8sV0F6SDFCLEVBeUh1QztBQUN4QyxRQUFJRyxHQUFHLEdBQUdWLE1BQU0sQ0FBQ00sTUFBakI7QUFBQSxRQUNJSyxnQkFBZ0IsR0FBRyxPQUFPQyxVQUFQLEtBQXNCLFdBQXRCLEdBQW9DQSxVQUFwQyxHQUFpREMsS0FEeEU7QUFBQSxRQUVJQyxPQUFPLEdBQUcsSUFBSUgsZ0JBQUosQ0FBcUJELEdBQXJCLENBRmQ7QUFBQSxRQUdJSyxLQUFLLEdBQUcsQ0FIWjtBQUFBLFFBSUlDLElBQUksR0FBR04sR0FBRyxHQUFHLENBSmpCO0FBQUEsUUFLSU8sS0FBSyxHQUFHLEVBTFo7QUFBQSxRQU1JQyxTQUFTLEdBQUcsRUFOaEI7QUFBQSxRQU9JQyxDQVBKO0FBQUEsUUFPT0MsU0FQUDtBQUFBLFFBT2tCQyxNQVBsQjtBQUFBLFFBTzBCQyxLQVAxQjtBQVNBUixJQUFBQSxPQUFPLENBQUNDLEtBQUQsQ0FBUCxHQUFpQkQsT0FBTyxDQUFDRSxJQUFELENBQVAsR0FBZ0IsQ0FBakM7O0FBRUEsV0FBT0EsSUFBUCxFQUFhO0FBQ1RJLE1BQUFBLFNBQVMsR0FBRyxDQUFaOztBQUVBLFdBQUtELENBQUMsR0FBR0osS0FBSyxHQUFHLENBQWpCLEVBQW9CSSxDQUFDLEdBQUdILElBQXhCLEVBQThCRyxDQUFDLEVBQS9CLEVBQW1DO0FBQy9CRSxRQUFBQSxNQUFNLEdBQUcsS0FBS0UsWUFBTCxDQUFrQnZCLE1BQU0sQ0FBQ21CLENBQUQsQ0FBeEIsRUFBNkJuQixNQUFNLENBQUNlLEtBQUQsQ0FBbkMsRUFBNENmLE1BQU0sQ0FBQ2dCLElBQUQsQ0FBbEQsQ0FBVDs7QUFFQSxZQUFJSyxNQUFNLEdBQUdELFNBQWIsRUFBd0I7QUFDcEJFLFVBQUFBLEtBQUssR0FBR0gsQ0FBUjtBQUNBQyxVQUFBQSxTQUFTLEdBQUdDLE1BQVo7QUFDSDtBQUNKOztBQUVELFVBQUlELFNBQVMsR0FBR2IsV0FBaEIsRUFBNkI7QUFDekJPLFFBQUFBLE9BQU8sQ0FBQ1EsS0FBRCxDQUFQLEdBQWlCLENBQWpCO0FBQ0FMLFFBQUFBLEtBQUssQ0FBQ3hDLElBQU4sQ0FBV3NDLEtBQVgsRUFBa0JPLEtBQWxCLEVBQXlCQSxLQUF6QixFQUFnQ04sSUFBaEM7QUFDSDs7QUFFREEsTUFBQUEsSUFBSSxHQUFHQyxLQUFLLENBQUNPLEdBQU4sRUFBUDtBQUNBVCxNQUFBQSxLQUFLLEdBQUdFLEtBQUssQ0FBQ08sR0FBTixFQUFSO0FBQ0g7O0FBRUQsU0FBS0wsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHVCxHQUFoQixFQUFxQlMsQ0FBQyxFQUF0QixFQUEwQjtBQUN0QixVQUFJTCxPQUFPLENBQUNLLENBQUQsQ0FBWCxFQUFnQjtBQUNaRCxRQUFBQSxTQUFTLENBQUN6QyxJQUFWLENBQWV1QixNQUFNLENBQUNtQixDQUFELENBQXJCO0FBQ0g7QUFDSjs7QUFFRCxXQUFPRCxTQUFQO0FBQ0gsR0FqS0k7QUFtS0xLLEVBQUFBLFlBbktLLHdCQW1LUUUsQ0FuS1IsRUFtS1dDLEVBbktYLEVBbUtlQyxFQW5LZixFQW1LbUI7QUFDcEIsUUFBSXBELENBQUMsR0FBR21ELEVBQUUsQ0FBQ25ELENBQVg7QUFBQSxRQUNJQyxDQUFDLEdBQUdrRCxFQUFFLENBQUNsRCxDQURYO0FBQUEsUUFFSW9ELEVBQUUsR0FBR0QsRUFBRSxDQUFDcEQsQ0FBSCxHQUFPQSxDQUZoQjtBQUFBLFFBR0lzRCxFQUFFLEdBQUdGLEVBQUUsQ0FBQ25ELENBQUgsR0FBT0EsQ0FIaEI7O0FBS0EsUUFBSW9ELEVBQUUsS0FBSyxDQUFQLElBQVlDLEVBQUUsS0FBSyxDQUF2QixFQUEwQjtBQUN0QixVQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFDTCxDQUFDLENBQUNsRCxDQUFGLEdBQU1BLENBQVAsSUFBWXFELEVBQVosR0FBaUIsQ0FBQ0gsQ0FBQyxDQUFDakQsQ0FBRixHQUFNQSxDQUFQLElBQVlxRCxFQUE5QixLQUFxQ0QsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBcEQsQ0FBUjs7QUFFQSxVQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1B2RCxRQUFBQSxDQUFDLEdBQUdvRCxFQUFFLENBQUNwRCxDQUFQO0FBQ0FDLFFBQUFBLENBQUMsR0FBR21ELEVBQUUsQ0FBQ25ELENBQVA7QUFDSCxPQUhELE1BR08sSUFBSXNELENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDZHZELFFBQUFBLENBQUMsSUFBSXFELEVBQUUsR0FBR0UsQ0FBVjtBQUNBdEQsUUFBQUEsQ0FBQyxJQUFJcUQsRUFBRSxHQUFHQyxDQUFWO0FBQ0g7QUFDSjs7QUFFREYsSUFBQUEsRUFBRSxHQUFHSCxDQUFDLENBQUNsRCxDQUFGLEdBQU1BLENBQVg7QUFDQXNELElBQUFBLEVBQUUsR0FBR0osQ0FBQyxDQUFDakQsQ0FBRixHQUFNQSxDQUFYO0FBRUEsV0FBT29ELEVBQUUsR0FBR0EsRUFBTCxHQUFVQyxFQUFFLEdBQUdBLEVBQXRCO0FBQ0gsR0F6TEk7QUEyTExFLEVBQUFBLGNBM0xLLDBCQTJMVUMsU0EzTFYsRUEyTHFCQyxRQTNMckIsRUEyTCtCO0FBQ2hDLFdBQU9ELFNBQVMsQ0FBQ0UsR0FBVixDQUFjRCxRQUFkLEVBQXdCRSxHQUF4QixNQUFpQyxFQUF4QztBQUNIO0FBN0xJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlRm9ySnMgfSBmcm9tIFwiLi4vRGF0YS9TdGF0ZUZvckpTXCI7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JhcGhpY3M6IG51bGwsXHJcbiAgICAgICAgbGluZV9wb2ludDogW2NjLlZlYzJdLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gNTAwMDtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gNTAwMDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERyYXdUaW1lID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgd2luZG93LlBvaW50UG9zID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoKCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvblRvdWNoKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaF9zdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hfbW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaF9lbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hfZW5kLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgb2ZmVG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b3VjaF9zdGFydChldmVudCkge1xyXG4gICAgICAgIGlmICghU3RhdGVGb3JKcy5pc0NhbkRyYXcgfHwgU3RhdGVGb3JKcy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICB3aW5kb3cuaXNTdGFydERyYXcgPSB0cnVlO1xyXG4gICAgICAgIHdpbmRvdy5Qb2ludFBvcyA9IHBvcztcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIHRoaXMubGluZV9wb2ludC5wdXNoKGNjLnYyKHBvcy54LCBwb3MueSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b3VjaF9tb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFTdGF0ZUZvckpzLmlzQ2FuRHJhdyB8fCBTdGF0ZUZvckpzLmlzVG9TdG9yZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnREcmF3VGltZSArPSAxO1xyXG5cclxuICAgICAgICBpZih3aW5kb3cuY3VycmVudEx2ID09PSAyICYmIHRoaXMuY3VycmVudERyYXdUaW1lID49IDgpIHtcclxuICAgICAgICAgICAgd2luZG93LmNoYW5nZUVnZ1JpZ2lkYm9keVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aW5kb3cuc3RvcERyYXdTb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hfZW5kKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgd2luZG93LlBvaW50UG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgdGhpcy5saW5lX3BvaW50LnB1c2goY2MudjIocG9zLngsIHBvcy55KSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3Ryb2tlQ29sb3IoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b3VjaF9lbmQoZXZlbnQpIHtcclxuICAgICAgICBpZiAod2luZG93LmlzVG91Y2hXYWxsKSB7XHJcbiAgICAgICAgICAgIFN0YXRlRm9ySnMuaXNDYW5EcmF3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGluZV9wb2ludCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghU3RhdGVGb3JKcy5pc0NhbkRyYXcgfHwgU3RhdGVGb3JKcy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUsO6dCBn4buNbiDEkcaw4budbmcgduG6vVxyXG4gICAgICAgIGxldCBzaW1wbGlmaWVkUG9pbnRzID0gdGhpcy5zaW1wbGlmeVBhdGgodGhpcy5saW5lX3BvaW50LCA0KTsgIC8vIFPhu60gZOG7pW5nIMSR4buZIHRvbGVyYW5jZSBwaMO5IGjhu6NwXHJcbiAgICAgICAgU3RhdGVGb3JKcy5pc0NhbkRyYXcgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICB3aW5kb3cuaXNUb3VjaFdhbGwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJpZ2lib2R5KHNpbXBsaWZpZWRQb2ludHMpO1xyXG4gICAgICAgIHRoaXMub2ZmVG91Y2goKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlU3Ryb2tlQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pc1RvdWNoV2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVJpZ2lib2R5KHNpbXBsaWZpZWRQb2ludHMpIHtcclxuICAgICAgICB0aGlzLnJpZ2lib2R5TG9naWMgPSB0aGlzLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMucmlnaWJvZHlMb2dpYy5ncmF2aXR5U2NhbGUgPSAyO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lID0gdGhpcy5hZGRDb21wb25lbnQoXCJNeVBoeXNpY3NDb2xsaWRlclwiKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lLmxpbmVXaWR0aCA9IDc7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTGluZS5wb2ludHMgPSBzaW1wbGlmaWVkUG9pbnRzOyAgLy8gU+G7rSBk4bulbmcgxJFp4buDbSDEkcOjIHLDunQgZ+G7jW5cclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lLmZyaWN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lLmRlbnNpdHkgPSAxMDAwMDAwO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc0xpbmUudGFnID0gNDtcclxuICAgICAgICB0aGlzLnBoeXNpY3NMaW5lLmFwcGx5KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNpbXBsaWZ5UGF0aChwb2ludHMsIHRvbGVyYW5jZSkge1xyXG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoIDwgMykgcmV0dXJuIHBvaW50cztcclxuXHJcbiAgICAgICAgbGV0IHNxVG9sZXJhbmNlID0gdG9sZXJhbmNlICE9PSB1bmRlZmluZWQgPyB0b2xlcmFuY2UgKiB0b2xlcmFuY2UgOiAxO1xyXG4gICAgICAgIHBvaW50cyA9IHRoaXMuc2ltcGxpZnlEb3VnbGFzUGV1Y2tlcihwb2ludHMsIHNxVG9sZXJhbmNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvaW50cztcclxuICAgIH0sXHJcblxyXG4gICAgc2ltcGxpZnlEb3VnbGFzUGV1Y2tlcihwb2ludHMsIHNxVG9sZXJhbmNlKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IHBvaW50cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIEFycmF5Q29uc3RydWN0b3IgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXksXHJcbiAgICAgICAgICAgIG1hcmtlcnMgPSBuZXcgQXJyYXlDb25zdHJ1Y3RvcihsZW4pLFxyXG4gICAgICAgICAgICBmaXJzdCA9IDAsXHJcbiAgICAgICAgICAgIGxhc3QgPSBsZW4gLSAxLFxyXG4gICAgICAgICAgICBzdGFjayA9IFtdLFxyXG4gICAgICAgICAgICBuZXdQb2ludHMgPSBbXSxcclxuICAgICAgICAgICAgaSwgbWF4U3FEaXN0LCBzcURpc3QsIGluZGV4O1xyXG5cclxuICAgICAgICBtYXJrZXJzW2ZpcnN0XSA9IG1hcmtlcnNbbGFzdF0gPSAxO1xyXG5cclxuICAgICAgICB3aGlsZSAobGFzdCkge1xyXG4gICAgICAgICAgICBtYXhTcURpc3QgPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gZmlyc3QgKyAxOyBpIDwgbGFzdDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzcURpc3QgPSB0aGlzLmdldFNxU2VnRGlzdChwb2ludHNbaV0sIHBvaW50c1tmaXJzdF0sIHBvaW50c1tsYXN0XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNxRGlzdCA+IG1heFNxRGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBtYXhTcURpc3QgPSBzcURpc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtYXhTcURpc3QgPiBzcVRvbGVyYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgbWFya2Vyc1tpbmRleF0gPSAxO1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChmaXJzdCwgaW5kZXgsIGluZGV4LCBsYXN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFzdCA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICBmaXJzdCA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrZXJzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQb2ludHMucHVzaChwb2ludHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3UG9pbnRzO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTcVNlZ0Rpc3QocCwgcDEsIHAyKSB7XHJcbiAgICAgICAgbGV0IHggPSBwMS54LFxyXG4gICAgICAgICAgICB5ID0gcDEueSxcclxuICAgICAgICAgICAgZHggPSBwMi54IC0geCxcclxuICAgICAgICAgICAgZHkgPSBwMi55IC0geTtcclxuXHJcbiAgICAgICAgaWYgKGR4ICE9PSAwIHx8IGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gKChwLnggLSB4KSAqIGR4ICsgKHAueSAtIHkpICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHAyLng7XHJcbiAgICAgICAgICAgICAgICB5ID0gcDIueTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgeCArPSBkeCAqIHQ7XHJcbiAgICAgICAgICAgICAgICB5ICs9IGR5ICogdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZHggPSBwLnggLSB4O1xyXG4gICAgICAgIGR5ID0gcC55IC0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGVja0lzQ2FuRHJhdyhsYXN0UG9pbnQsIG5vd1BvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RQb2ludC5zdWIobm93UG9pbnQpLm1hZygpID49IDIwO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Plugin/MyPhysicsCollider.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16fa2jbwqRENLjduRsp+GPv', 'MyPhysicsCollider');
// Script/Plugin/MyPhysicsCollider.js

"use strict";

var MyPhysicsCollider = cc.Class({
  "extends": cc.PhysicsCollider,
  editor: {
    menu: CC_EDITOR && 'i18n:MAIN_MENU.component.physics/Collider/Polygon',
    requireComponent: cc.RigidBody
  },
  properties: {
    lineWidth: 10,
    points: [cc.Vec2]
  },
  _createShape: function _createShape(scale) {
    var shapes = [];
    var polys = this.points;
    var offset = this.offset;
    var polyIdx = 0;

    for (var i = 0; i < polys.length - 1; i++) {
      var posBegin = polys[i];
      var posEnd = polys[i + 1];
      var linelen = posBegin.sub(posEnd).mag();
      var angle = Math.atan2(posEnd.y - posBegin.y, posEnd.x - posBegin.x) - Math.PI / 2;
      var midPos = posBegin.add(posEnd).mul(0.5);
      var shape = new b2.PolygonShape();

      if (shape) {
        shape.SetAsBox(this.lineWidth / 2 / 32, linelen / 2 / 32, new b2.Vec2(midPos.x / 32, midPos.y / 32), angle);
        shapes.push(shape);
      }
    }

    return shapes;
  }
});
module.exports = MyPhysicsCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXE15UGh5c2ljc0NvbGxpZGVyLmpzIl0sIm5hbWVzIjpbIk15UGh5c2ljc0NvbGxpZGVyIiwiY2MiLCJDbGFzcyIsIlBoeXNpY3NDb2xsaWRlciIsImVkaXRvciIsIm1lbnUiLCJDQ19FRElUT1IiLCJyZXF1aXJlQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwicHJvcGVydGllcyIsImxpbmVXaWR0aCIsInBvaW50cyIsIlZlYzIiLCJfY3JlYXRlU2hhcGUiLCJzY2FsZSIsInNoYXBlcyIsInBvbHlzIiwib2Zmc2V0IiwicG9seUlkeCIsImkiLCJsZW5ndGgiLCJwb3NCZWdpbiIsInBvc0VuZCIsImxpbmVsZW4iLCJzdWIiLCJtYWciLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsInkiLCJ4IiwiUEkiLCJtaWRQb3MiLCJhZGQiLCJtdWwiLCJzaGFwZSIsImIyIiwiUG9seWdvblNoYXBlIiwiU2V0QXNCb3giLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDN0IsYUFBU0QsRUFBRSxDQUFDRSxlQURpQjtBQUU3QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRUMsU0FBUyxJQUFJLG1EQURmO0FBRUpDLElBQUFBLGdCQUFnQixFQUFFTixFQUFFLENBQUNPO0FBRmpCLEdBRnFCO0FBTTdCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFLEVBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFFLENBQUNWLEVBQUUsQ0FBQ1csSUFBSjtBQUZBLEdBTmlCO0FBVTdCQyxFQUFBQSxZQUFZLEVBQUUsc0JBQVVDLEtBQVYsRUFBaUI7QUFDM0IsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFFQSxRQUFJQyxLQUFLLEdBQUcsS0FBS0wsTUFBakI7QUFDQSxRQUFJTSxNQUFNLEdBQUcsS0FBS0EsTUFBbEI7QUFFQSxRQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksTUFBTixHQUFlLENBQW5DLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLFVBQUlFLFFBQVEsR0FBR0wsS0FBSyxDQUFDRyxDQUFELENBQXBCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHTixLQUFLLENBQUNHLENBQUMsR0FBRyxDQUFMLENBQWxCO0FBQ0EsVUFBSUksT0FBTyxHQUFHRixRQUFRLENBQUNHLEdBQVQsQ0FBYUYsTUFBYixFQUFxQkcsR0FBckIsRUFBZDtBQUVBLFVBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLE1BQU0sQ0FBQ08sQ0FBUCxHQUFXUixRQUFRLENBQUNRLENBQS9CLEVBQWtDUCxNQUFNLENBQUNRLENBQVAsR0FBV1QsUUFBUSxDQUFDUyxDQUF0RCxJQUEyREgsSUFBSSxDQUFDSSxFQUFMLEdBQVUsQ0FBakY7QUFFQSxVQUFJQyxNQUFNLEdBQUdYLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhWCxNQUFiLEVBQXFCWSxHQUFyQixDQUF5QixHQUF6QixDQUFiO0FBRUEsVUFBSUMsS0FBSyxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsWUFBUCxFQUFaOztBQUVBLFVBQUlGLEtBQUosRUFBVztBQUNQQSxRQUFBQSxLQUFLLENBQUNHLFFBQU4sQ0FBZSxLQUFLNUIsU0FBTCxHQUFpQixDQUFqQixHQUFxQixFQUFwQyxFQUF3Q2EsT0FBTyxHQUFHLENBQVYsR0FBYyxFQUF0RCxFQUEwRCxJQUFJYSxFQUFFLENBQUN4QixJQUFQLENBQVlvQixNQUFNLENBQUNGLENBQVAsR0FBVyxFQUF2QixFQUEyQkUsTUFBTSxDQUFDSCxDQUFQLEdBQVcsRUFBdEMsQ0FBMUQsRUFBcUdILEtBQXJHO0FBRUFYLFFBQUFBLE1BQU0sQ0FBQ3dCLElBQVAsQ0FBWUosS0FBWjtBQUNIO0FBQ0o7O0FBRUQsV0FBT3BCLE1BQVA7QUFDSDtBQXBDNEIsQ0FBVCxDQUF4QjtBQXVDQXlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpDLGlCQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBNeVBoeXNpY3NDb2xsaWRlciA9IGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlBoeXNpY3NDb2xsaWRlcixcclxuICAgIGVkaXRvcjoge1xyXG4gICAgICAgIG1lbnU6IENDX0VESVRPUiAmJiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnBoeXNpY3MvQ29sbGlkZXIvUG9seWdvbicsXHJcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuUmlnaWRCb2R5XHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpbmVXaWR0aDogMTAsXHJcbiAgICAgICAgcG9pbnRzOiBbY2MuVmVjMl1cclxuICAgIH0sXHJcbiAgICBfY3JlYXRlU2hhcGU6IGZ1bmN0aW9uIChzY2FsZSkge1xyXG4gICAgICAgIHZhciBzaGFwZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIHBvbHlzID0gdGhpcy5wb2ludHM7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xyXG5cclxuICAgICAgICB2YXIgcG9seUlkeCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2x5cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHBvc0JlZ2luID0gcG9seXNbaV07XHJcbiAgICAgICAgICAgIHZhciBwb3NFbmQgPSBwb2x5c1tpICsgMV07XHJcbiAgICAgICAgICAgIHZhciBsaW5lbGVuID0gcG9zQmVnaW4uc3ViKHBvc0VuZCkubWFnKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHBvc0VuZC55IC0gcG9zQmVnaW4ueSwgcG9zRW5kLnggLSBwb3NCZWdpbi54KSAtIE1hdGguUEkgLyAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1pZFBvcyA9IHBvc0JlZ2luLmFkZChwb3NFbmQpLm11bCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNoYXBlID0gbmV3IGIyLlBvbHlnb25TaGFwZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNoYXBlKSB7XHJcbiAgICAgICAgICAgICAgICBzaGFwZS5TZXRBc0JveCh0aGlzLmxpbmVXaWR0aCAvIDIgLyAzMiwgbGluZWxlbiAvIDIgLyAzMiwgbmV3IGIyLlZlYzIobWlkUG9zLnggLyAzMiwgbWlkUG9zLnkgLyAzMiksIGFuZ2xlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgc2hhcGVzLnB1c2goc2hhcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2hhcGVzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTXlQaHlzaWNzQ29sbGlkZXI7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Bee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c3a1loUGhKZZS1Pj7UbsBp', 'Bee');
// Script/Controller/Bee.ts

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
var GamePlay_1 = require("./GamePlay");
// import * as PF from "pathfinding";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AudioManager = null;
        _this.GamePlay = null;
        _this.rigidBody = null;
        _this.isCollide = false;
        _this.initPos = null;
        _this.targetPos = null;
        _this.isJumpback = false;
        return _this;
    }
    Bee.prototype.start = function () {
        this.initTargetPos();
        this.beginContact();
        this.initPos = this.node.getPosition();
    };
    Bee.prototype.initTargetPos = function () {
        var random = cc.math.randomRangeInt(1, 4);
        switch (random) {
            case 1:
                this.targetPos = constants_1.Constants.Char_Point1;
                break;
            case 2:
                this.targetPos = constants_1.Constants.Char_Point2;
                break;
            case 3:
                this.targetPos = constants_1.Constants.Char_Point3;
                break;
            default:
                break;
        }
    };
    Bee.prototype.beginContact = function () {
        var _this = this;
        this.rigidBody.onBeginContact = function (c, s, o) {
            if (o.tag === 4 && !constants_1.Constants.isHit) {
                _this.jumpBack();
                console.log("collide line");
            }
            if (o.tag === 3) {
                if (_this.isCollide) {
                    return;
                }
                // if(window.currentLv === 2) {
                //     Constants.isLoseLv2 = true;
                //     o.getComponent(cc.RigidBody).destroy();
                //     o.getComponent(cc.Collider).destroy();
                //     this.AudioManager.playSound(Constants.SoundTrack.stingSound);
                //     this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
                //     this.scheduleOnce(() => {this.GamePlay.loseLv2()}, 2.5)
                //     return;
                // }
                _this.AudioManager.playSound(constants_1.Constants.SoundTrack.stingSound);
                _this.isCollide = true;
                window.isLoseGame = true;
                constants_1.Constants.isHit = true;
                _this.getComponent(sp.Skeleton).setAnimation(0, "Hit", true);
            }
        };
    };
    Bee.prototype.jumpBack = function () {
        var _this = this;
        this.isJumpback = true;
        this.isCollide = true;
        cc.tween(this.node)
            .to(0.2, { x: this.initPos.x, y: this.initPos.y }, { easing: cc.easing.smooth })
            .call(function () {
            _this.initTargetPos();
            _this.isCollide = false;
        })
            .start();
    };
    Bee.prototype.setAttackAgain = function () {
        var _this = this;
        if (this.isJumpback)
            return;
        this.scheduleOnce(function () { _this.isCollide = false; }, 1);
    };
    Bee.prototype.attack = function () {
        var currentPosition = this.node.getPosition();
        currentPosition.lerp(this.targetPos, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    };
    Bee.prototype.update = function (dt) {
        if (window.isDraw && !this.isCollide && !constants_1.Constants.isWinGame) {
            this.attack();
        }
    };
    __decorate([
        property(AudioManager_1.default)
    ], Bee.prototype, "AudioManager", void 0);
    __decorate([
        property(GamePlay_1.default)
    ], Bee.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.RigidBody)
    ], Bee.prototype, "rigidBody", void 0);
    Bee = __decorate([
        ccclass
    ], Bee);
    return Bee;
}(cc.Component));
exports.default = Bee;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxCZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCx1Q0FBa0M7QUFDbEMscUNBQXFDO0FBQy9CLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBNEdDO1FBekdHLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUdsQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGdCQUFVLEdBQVksS0FBSyxDQUFDOztJQThGaEMsQ0FBQztJQTNGYSxtQkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdPLDJCQUFhLEdBQXJCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLFdBQVcsQ0FBQztnQkFDdkMsTUFBTTtZQUNWLEtBQUssQ0FB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QUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQXZHRDtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDOzZDQUNXO0lBR2xDO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7eUNBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDUTtJQVRkLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0E0R3ZCO0lBQUQsVUFBQztDQTVHRCxBQTRHQyxDQTVHZ0MsRUFBRSxDQUFDLFNBQVMsR0E0RzVDO2tCQTVHb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lUGxheSBmcm9tIFwiLi9HYW1lUGxheVwiO1xyXG4vLyBpbXBvcnQgKiBhcyBQRiBmcm9tIFwicGF0aGZpbmRpbmdcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KEdhbWVQbGF5KVxyXG4gICAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUmlnaWRCb2R5KVxyXG4gICAgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIGlzQ29sbGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaW5pdFBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICB0YXJnZXRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgaXNKdW1wYmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0VGFyZ2V0UG9zKCk7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgICAgICB0aGlzLmluaXRQb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGFyZ2V0UG9zKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDEsIDQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAocmFuZG9tKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UG9zID0gQ29uc3RhbnRzLkNoYXJfUG9pbnQzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYmVnaW5Db250YWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5Lm9uQmVnaW5Db250YWN0ID0gKGMsIHMsIG8pID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChvLnRhZyA9PT0gNCAmJiAhQ29uc3RhbnRzLmlzSGl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbGxpZGUgbGluZVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG8udGFnID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbGxpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYod2luZG93LmN1cnJlbnRMdiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIENvbnN0YW50cy5pc0xvc2VMdjIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG8uZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG8uZ2V0Q29tcG9uZW50KGNjLkNvbGxpZGVyKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLnN0aW5nU291bmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJIaXRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuR2FtZVBsYXkubG9zZUx2MigpfSwgMi41KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3RpbmdTb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaXNMb3NlR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb25zdGFudHMuaXNIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkhpdFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSnVtcGJhY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNDb2xsaWRlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuMiwge3g6IHRoaXMuaW5pdFBvcy54LCB5OiB0aGlzLmluaXRQb3MueX0sIHtlYXNpbmc6IGNjLmVhc2luZy5zbW9vdGh9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0VGFyZ2V0UG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBdHRhY2tBZ2FpbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0p1bXBiYWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge3RoaXMuaXNDb2xsaWRlID0gZmFsc2V9LCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhdHRhY2soKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRoaXMudGFyZ2V0UG9zLCAwLjAyLCBjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAod2luZG93LmlzRHJhdyAmJiAhdGhpcy5pc0NvbGxpZGUgJiYgIUNvbnN0YW50cy5pc1dpbkdhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
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
cc._RF.push(module, '16092J/6+9HR5x8fJSUKKad', 'AudioManager');
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
        _this.drawSound = null;
        _this.crySound = null;
        _this.clickSound = null;
        _this.loseSound = null;
        _this.winSound = null;
        _this.stingSound = null;
        _this.explosionSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "explosionSound":
                    this.explosionSound.play();
                    break;
                case "drawSound":
                    this.drawSound.play();
                    break;
                case "winSound":
                    this.winSound.play();
                    break;
                case "crySound":
                    this.crySound.play();
                    break;
                case "clickSound":
                    this.clickSound.play();
                    break;
                case "loseSound":
                    this.loseSound.play();
                    break;
                case "stingSound":
                    this.stingSound.play();
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
            case "explosionSound":
                this.explosionSound.stop();
                break;
            case "drawSound":
                this.drawSound.stop();
                break;
            case "winSound":
                this.winSound.stop();
                break;
            case "crySound":
                this.crySound.stop();
                break;
            case "clickSound":
                this.clickSound.stop();
                break;
            case "loseSound":
                this.loseSound.stop();
                break;
            case "stingSound":
                this.stingSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.bgSound.stop();
        this.explosionSound.stop();
        this.drawSound.stop();
        this.winSound.stop();
        this.crySound.stop();
        this.clickSound.stop();
        this.loseSound.stop();
        this.stingSound.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "bgSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "drawSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "crySound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "clickSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "loseSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "winSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "stingSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "explosionSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUErRkM7UUE3RkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBRWpDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDOztJQTZFMUMsQ0FBQztJQTFFVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNqQyxRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDVixLQUFLLGdCQUFnQjtvQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDM0IsTUFBTTtnQkFDVixLQUFLLFdBQVc7b0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsTUFBTTtnQkFDVixLQUFLLFVBQVU7b0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtnQkFDVixLQUFLLFVBQVU7b0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJ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fSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNvdW5kIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgZHJhd1NvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBjcnlTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgY2xpY2tTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgbG9zZVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICB3aW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc3RpbmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgZXhwbG9zaW9uU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHVibGljIHBsYXlTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXhwbG9zaW9uU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvc2lvblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkcmF3U291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwid2luU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjcnlTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3J5U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxvc2VTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9zZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGluZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGluZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJleHBsb3Npb25Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb25Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRyYXdTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3U291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNyeVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyeVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xpY2tTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9zZVNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0aW5nU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpbmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbFNvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmdTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5leHBsb3Npb25Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud2luU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3J5U291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5sb3NlU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3RpbmdTb3VuZC5zdG9wKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/PointController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80da3u/zVdMR5yti8YdVBri', 'PointController');
// Script/Controller/PointController.ts

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
var GameController_1 = require("./GameController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PointCollider = /** @class */ (function (_super) {
    __extends(PointCollider, _super);
    function PointCollider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GameController = null;
        _this.rigidbody = null;
        return _this;
    }
    PointCollider.prototype.start = function () {
        this.beginContact();
    };
    PointCollider.prototype.beginContact = function () {
        this.rigidbody.onBeginContact = function (c, s, o) {
            if (o.tag === 0) {
                // this.GameController.installHandle();
                window.isTouchWall = true;
            }
        };
    };
    PointCollider.prototype.update = function (dt) {
        this.node.setPosition(window.PointPos);
    };
    __decorate([
        property(GameController_1.GameController)
    ], PointCollider.prototype, "GameController", void 0);
    __decorate([
        property(cc.RigidBody)
    ], PointCollider.prototype, "rigidbody", void 0);
    PointCollider = __decorate([
        ccclass
    ], PointCollider);
    return PointCollider;
}(cc.Component));
exports.default = PointCollider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxQb2ludENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMkJDO1FBeEJHLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxlQUFTLEdBQWlCLElBQUksQ0FBQzs7SUFzQm5DLENBQUM7SUFuQmEsNkJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR08sb0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztZQUNsQyxJQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNaLHVDQUF1QztnQkFDdkMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBR1MsOEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQXRCRDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3lEQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0RBQ1E7SUFMZCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkJqQztJQUFELG9CQUFDO0NBM0JELEFBMkJDLENBM0IwQyxFQUFFLENBQUMsU0FBUyxHQTJCdEQ7a0JBM0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludENvbGxpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gICAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByaWdpZGJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iZWdpbkNvbnRhY3QoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBiZWdpbkNvbnRhY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWdpZGJvZHkub25CZWdpbkNvbnRhY3QgPSAoYyxzLG8pID0+IHtcclxuICAgICAgICAgICAgaWYoby50YWcgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmlzVG91Y2hXYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHdpbmRvdy5Qb2ludFBvcylcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/TouchController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9305oVF5hPCLfUSaAOK4yn', 'TouchController');
// Script/Controller/TouchController.js

"use strict";

var _StateForJS = require("../Data/StateForJS");

cc.Class({
  "extends": cc.Component,
  properties: {
    graphics: cc.Prefab,
    nodesController: cc.Node,
    audioManager: cc.Node,
    GamePlay: cc.Node,
    GameController: cc.Node,
    EggController: cc.Node
  },
  onLoad: function onLoad() {
    window.isDraw = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
  },
  start: function start() {
    _StateForJS.StateForJs.isCanDraw = true;
    this.createGraphics();
    this.isChangeEggRigidbodyType = false;
  },
  touch_start: function touch_start() {
    if (window.isLoseGame || _StateForJS.StateForJs.isToStore) {
      this.GameController.getComponent("GameController").installHandle();
      return;
    }

    this.audioManager.getComponent("AudioManager").playSound("drawSound");
    this.audioManager.getComponent("AudioManager").drawSound.loop = true;
  },
  touch_end: function touch_end(event) {
    var _this = this;

    if (_StateForJS.StateForJs.isToStore) {
      return;
    }

    if (window.currentLv === 2) {
      this.EggController.getComponent("EggController").changeRigidbodyType();
    }

    if (!_StateForJS.StateForJs.isCanDraw) {
      this.offEvent();
      this.createGraphics();
    }

    this.scheduleOnce(function () {
      if (window.isReplayGame) {
        return;
      }

      if (!window.isLoseGame) _this.GamePlay.getComponent("GamePlay").winGame();
    }, _StateForJS.StateForJs.timeToWin);
    this.audioManager.getComponent("AudioManager").stopSound("drawSound");
  },
  offEvent: function offEvent() {
    this.node.off(cc.Node.EventType.TOUCH_START);
    this.node.off(cc.Node.EventType.TOUCH_END);
  },
  createGraphics: function createGraphics() {
    var graphics_node = cc.instantiate(this.graphics);
    graphics_node.x = 0;
    this.node.addChild(graphics_node);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmFwaGljcyIsIlByZWZhYiIsIm5vZGVzQ29udHJvbGxlciIsIk5vZGUiLCJhdWRpb01hbmFnZXIiLCJHYW1lUGxheSIsIkdhbWVDb250cm9sbGVyIiwiRWdnQ29udHJvbGxlciIsIm9uTG9hZCIsIndpbmRvdyIsImlzRHJhdyIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hfc3RhcnQiLCJUT1VDSF9FTkQiLCJ0b3VjaF9lbmQiLCJUT1VDSF9DQU5DRUwiLCJzdGFydCIsIlN0YXRlRm9ySnMiLCJpc0NhbkRyYXciLCJjcmVhdGVHcmFwaGljcyIsImlzQ2hhbmdlRWdnUmlnaWRib2R5VHlwZSIsImlzTG9zZUdhbWUiLCJpc1RvU3RvcmUiLCJnZXRDb21wb25lbnQiLCJpbnN0YWxsSGFuZGxlIiwicGxheVNvdW5kIiwiZHJhd1NvdW5kIiwibG9vcCIsImV2ZW50IiwiY3VycmVudEx2IiwiY2hhbmdlUmlnaWRib2R5VHlwZSIsIm9mZkV2ZW50Iiwic2NoZWR1bGVPbmNlIiwiaXNSZXBsYXlHYW1lIiwid2luR2FtZSIsInRpbWVUb1dpbiIsInN0b3BTb3VuZCIsIm9mZiIsImdyYXBoaWNzX25vZGUiLCJpbnN0YW50aWF0ZSIsIngiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFJTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxNQURMO0FBRVJDLElBQUFBLGVBQWUsRUFBRU4sRUFBRSxDQUFDTyxJQUZaO0FBR1JDLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDTyxJ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LENBQWxCO0FBQ0EsU0FBS2hDLElBQUwsQ0FBVWlDLFFBQVYsQ0FBbUJILGFBQW5CO0FBQ0g7QUE1RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVGb3JKcyB9IGZyb20gXCIuLi9EYXRhL1N0YXRlRm9ySlNcIjtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyYXBoaWNzOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbm9kZXNDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGF1ZGlvTWFuYWdlcjogY2MuTm9kZSxcclxuICAgICAgICBHYW1lUGxheTogY2MuTm9kZSxcclxuICAgICAgICBHYW1lQ29udHJvbGxlcjogY2MuTm9kZSxcclxuICAgICAgICBFZ2dDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHdpbmRvdy5pc0RyYXcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hfc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hfZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoX2VuZCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBTdGF0ZUZvckpzLmlzQ2FuRHJhdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuaXNDaGFuZ2VFZ2dSaWdpZGJvZHlUeXBlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB0b3VjaF9zdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYod2luZG93LmlzTG9zZUdhbWUgfHwgU3RhdGVGb3JKcy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5HYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5wbGF5U291bmQoXCJkcmF3U291bmRcIik7XHJcbiAgICAgICAgdGhpcy5hdWRpb01hbmFnZXIuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpLmRyYXdTb3VuZC5sb29wID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHRvdWNoX2VuZDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoU3RhdGVGb3JKcy5pc1RvU3RvcmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYod2luZG93LmN1cnJlbnRMdiA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLkVnZ0NvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiRWdnQ29udHJvbGxlclwiKS5jaGFuZ2VSaWdpZGJvZHlUeXBlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighU3RhdGVGb3JKcy5pc0NhbkRyYXcpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdyYXBoaWNzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pc1JlcGxheUdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXdpbmRvdy5pc0xvc2VHYW1lKSB0aGlzLkdhbWVQbGF5LmdldENvbXBvbmVudChcIkdhbWVQbGF5XCIpLndpbkdhbWUoKTtcclxuICAgICAgICB9LCBTdGF0ZUZvckpzLnRpbWVUb1dpbik7XHJcblxyXG4gICAgICAgIHRoaXMuYXVkaW9NYW5hZ2VyLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKS5zdG9wU291bmQoXCJkcmF3U291bmRcIik7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBvZmZFdmVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBjcmVhdGVHcmFwaGljcygpIHtcclxuICAgICAgICB2YXIgZ3JhcGhpY3Nfbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzX25vZGUueCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdyYXBoaWNzX25vZGUpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/NodesController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a4b0WHwkROlbKmBnDG0V0n', 'NodesController');
// Script/Controller/NodesController.ts

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
var NodesController = /** @class */ (function (_super) {
    __extends(NodesController, _super);
    function NodesController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Component
        _this.Spine_Bees = [];
        _this.Spine_Character = null;
        // Node
        _this.FakeCharacters = [];
        _this.HideMask = null;
        _this.LineContainer = null;
        _this.point_checkCollide = null;
        _this.Environment = null;
        _this.CTA = null;
        _this.CTA_logo = null;
        _this.CTA_button = null;
        _this.CTA_Overlay = null;
        _this.Hint = null;
        // PreFab
        _this.Prefab_Graphics = null;
        return _this;
    }
    NodesController.prototype.start = function () {
        constants_1.Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
        constants_1.Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
        constants_1.Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
    };
    __decorate([
        property([sp.Skeleton])
    ], NodesController.prototype, "Spine_Bees", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodesController.prototype, "Spine_Character", void 0);
    __decorate([
        property([cc.Node])
    ], NodesController.prototype, "FakeCharacters", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "LineContainer", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "point_checkCollide", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Environment", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_logo", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_button", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "CTA_Overlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodesController.prototype, "Hint", void 0);
    __decorate([
        property(cc.Prefab)
    ], NodesController.prototype, "Prefab_Graphics", void 0);
    NodesController = __decorate([
        ccclass
    ], NodesController);
    return NodesController;
}(cc.Component));
exports.default = NodesController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2Rlc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBd0NDO1FBdkNHLFlBQVk7UUFFWixnQkFBVSxHQUFrQixFQUFFLENBQUM7UUFFL0IscUJBQWUsR0FBZ0IsSUFBSSxDQUFDO1FBR3BDLE9BQU87UUFFUCxvQkFBYyxHQUFjLEVBQUUsQ0FBQztRQUUvQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFTO1FBRVQscUJBQWUsR0FBYyxJQUFJLENBQUM7O0lBT3RDLENBQUM7SUFMYSwrQkFBSyxHQUFmO1FBQ0kscUJBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RCxxQkFBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdELHFCQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQXBDRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt1REFDTztJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzREQUNjO0lBS3BDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzJEQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytEQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDRztJQUlyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBakNqQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBd0NuQztJQUFELHNCQUFDO0NBeENELEFBd0NDLENBeEM0QyxFQUFFLENBQUMsU0FBUyxHQXdDeEQ7a0JBeENvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0RhdGEvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZXNDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8vIENvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXHJcbiAgICBTcGluZV9CZWVzOiBzcC5Ta2VsZXRvbltdID0gW107XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBTcGluZV9DaGFyYWN0ZXI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gTm9kZVxyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIEZha2VDaGFyYWN0ZXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgSGlkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBMaW5lQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcG9pbnRfY2hlY2tDb2xsaWRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgRW52aXJvbm1lbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEFfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgQ1RBX092ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBQcmVGYWJcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBQcmVmYWJfR3JhcGhpY3M6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5DaGFyX1BvaW50MSA9IHRoaXMuRmFrZUNoYXJhY3RlcnNbMF0uZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBDb25zdGFudHMuQ2hhcl9Qb2ludDIgPSB0aGlzLkZha2VDaGFyYWN0ZXJzWzFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgQ29uc3RhbnRzLkNoYXJfUG9pbnQzID0gdGhpcy5GYWtlQ2hhcmFjdGVyc1syXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
cc._RF.push(module, 'dfec3bBGHdHY4ShHxSUTm+E', 'GameController');
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
        this.AudioManager.stopAllSound();
        constants_1.Constants.ironSource.isEndGame = true;
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
                mraid.open("https://play.google.com/store/apps/details?id=com.an.savetheeggs.drawtosave");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6477533955?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.savetheeggs.drawtosave");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXdEQztRQXRERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBc0R0QyxDQUFDO0lBcERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBR00sc0NBQWEsR0FBcEI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMscUJBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsNkVBQTZFLENBQUMsQ0FBQztnQkFDMUYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLDZFQUE2RSxDQUFDLENBQUM7WUFDMUYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBd0QxQjtJQUFELHFCQUFDO0NBeERELEFBd0RDLENBeERtQyxFQUFFLENBQUMsU0FBUyxHQXdEL0M7QUF4RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFsbEhhbmRsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnN0YWxsXCIpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBnb29nbGUgYWRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoRXhpdEFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBFeGl0QXBpLmV4aXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d3JvayBpcyBpcm9uc291cmNlc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGRhcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmFuLnNhdmV0aGVlZ2dzLmRyYXd0b3NhdmVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQSE9ORSB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLklQQUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL2l0dW5lcy5hcHBsZS5jb20vdXMvYXBwL2lkNjQ3NzUzMzk1NT9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5zYXZldGhlZWdncy5kcmF3dG9zYXZlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgbWluZHdvcmsuIHdpbmRvdyBhbHdheSBhdmFpYWJsZSBzbyBza2lwIHVuZGVmaW5lZCBjaGVja1xyXG4gICAgICAgIHdpbmRvdy5pbnN0YWxsICYmIHdpbmRvdy5pbnN0YWxsKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
