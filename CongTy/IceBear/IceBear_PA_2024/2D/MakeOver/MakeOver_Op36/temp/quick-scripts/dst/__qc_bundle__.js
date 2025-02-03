
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
require('./assets/Script/Controller/MaskGamePlay');
require('./assets/Script/Controller/NodeContanier');
require('./assets/Script/Controller/Scratchable');
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
    }
    IronSource.prototype.handleIronSourcePlaySound = function () {
        if (constants_1.Constants.ironSource.isPlayBgSound) {
            return;
        }
        constants_1.Constants.ironSource.isPlayBgSound = true;
        if (constants_1.Constants.ironSource.SoundState) {
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.bgSound);
        }
    };
    IronSource.prototype.handleMuteSoundIronSource = function () {
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
    IronSource.prototype.update = function (dt) {
        this.handleMuteSoundIronSource();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxJcm9uU291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUE4QztBQUM5Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFvQ0M7UUFqQ0csa0JBQVksR0FBaUIsSUFBSSxDQUFDOztJQWlDdEMsQ0FBQztJQS9CVSw4Q0FBeUIsR0FBaEM7UUFDSSxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQUdPLDhDQUF5QixHQUFqQztRQUNFLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxGLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDM0cscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO2dCQUN2RSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDO0lBRVMsMkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBaENIO1FBREMsUUFBUSxDQUFDLHNCQUFZLENBQUM7b0RBQ1c7SUFIakIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW9DOUI7SUFBRCxpQkFBQztDQXBDRCxBQW9DQyxDQXBDdUMsRUFBRSxDQUFDLFNBQVMsR0FvQ25EO2tCQXBDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElyb25Tb3VyY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLmlzUGxheUJnU291bmQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc1BsYXlCZ1NvdW5kID0gdHJ1ZTtcclxuICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgcHJpdmF0ZSBoYW5kbGVNdXRlU291bmRJcm9uU291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlN0YXRlKSB7XHJcbiAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDEgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmJnU291bmQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBpZiAoQ29uc3RhbnRzLmlyb25Tb3VyY2UuU3RhdGUgPT09IDIgJiYgQ29uc3RhbnRzLmlyb25Tb3VyY2UuU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZU11dGVTb3VuZElyb25Tb3VyY2UoKTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==
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
                    var __filename = 'preview-scripts/assets/Script/Controller/MaskGamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e413qp47tDJaKLlYhUb7NL', 'MaskGamePlay');
// Script/Controller/MaskGamePlay.js

"use strict";

var Scratchable = require("Scratchable");

cc.Class({
  "extends": cc.Component,
  properties: {
    pointClear: cc.Node,
    touchArea: cc.Node
  },
  onLoad: function onLoad() {
    this.scratchables = this.getComponentsInChildren(Scratchable);
  },
  update: function update(dt) {
    this.isTouch = this.touchArea.getComponent("TouchAreaController").isTouch;

    if (this.pointClear.active && this.isTouch) {
      var point = cc.v2(this.pointClear.x + cc.winSize.width / 2, this.pointClear.y + cc.winSize.height / 2);
      this.scratchables.forEach(function (scratchable) {
        if (scratchable.isScratchable && scratchable.isInBound(point)) {
          scratchable.scratchHole(point);
        }
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxNYXNrR2FtZVBsYXkuanMiXSwibmFtZXMiOlsiU2NyYXRjaGFibGUiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb2ludENsZWFyIiwiTm9kZSIsInRvdWNoQXJlYSIsIm9uTG9hZCIsInNjcmF0Y2hhYmxlcyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwidXBkYXRlIiwiZHQiLCJpc1RvdWNoIiwiZ2V0Q29tcG9uZW50IiwiYWN0aXZlIiwicG9pbnQiLCJ2MiIsIngiLCJ3aW5TaXplIiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiZm9yRWFjaCIsInNjcmF0Y2hhYmxlIiwiaXNTY3JhdGNoYWJsZSIsImlzSW5Cb3VuZCIsInNjcmF0Y2hIb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBM0I7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETDtBQUVWQyxJQUFBQSxTQUFTLEVBQUVOLEVBQUUsQ0FBQ0s7QUFGSixHQUhMO0FBUVBFLEVBQUFBLE1BUk8sb0JBUUU7QUFDUCxTQUFLQyxZQUFMLEdBQW9CLEtBQUtDLHVCQUFMLENBQTZCWCxXQUE3QixDQUFwQjtBQUNELEdBVk07QUFZUFksRUFBQUEsTUFaTyxrQkFZQUMsRUFaQSxFQVlJO0FBQ1QsU0FBS0MsT0FBTCxHQUFlLEtBQUtOLFNBQUwsQ0FBZU8sWUFBZixDQUE0QixxQkFBNUIsRUFBbURELE9BQWxFOztBQUNBLFFBQUksS0FBS1IsVUFBTCxDQUFnQlUsTUFBaEIsSUFBMEIsS0FBS0YsT0FBbkMsRUFBNEM7QUFDMUMsVUFBSUcsS0FBSyxHQUFHZixFQUFFLENBQUNnQixFQUFILENBQ1YsS0FBS1osVUFBTCxDQUFnQmEsQ0FBaEIsR0FBb0JqQixFQUFFLENBQUNrQixPQUFILENBQVdDLEtBQVgsR0FBbUIsQ0FEN0IsRUFFVixLQUFLZixVQUFMLENBQWdCZ0IsQ0FBaEIsR0FBb0JwQixFQUFFLENBQUNrQixPQUFILENBQVdHLE1BQVgsR0FBb0IsQ0FGOUIsQ0FBWjtBQUlBLFdBQUtiLFlBQUwsQ0FBa0JjLE9BQWxCLENBQTBCLFVBQUNDLFdBQUQsRUFBaUI7QUFDekMsWUFBSUEsV0FBVyxDQUFDQyxhQUFaLElBQTZCRCxXQUFXLENBQUNFLFNBQVosQ0FBc0JWLEtBQXRCLENBQWpDLEVBQStEO0FBQzdEUSxVQUFBQSxXQUFXLENBQUNHLFdBQVosQ0FBd0JYLEtBQXhCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7QUFDRjtBQXpCTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTY3JhdGNoYWJsZSA9IHJlcXVpcmUoXCJTY3JhdGNoYWJsZVwiKTtcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHBvaW50Q2xlYXI6IGNjLk5vZGUsXG4gICAgdG91Y2hBcmVhOiBjYy5Ob2RlLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNjcmF0Y2hhYmxlcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oU2NyYXRjaGFibGUpO1xuICB9LFxuXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMuaXNUb3VjaCA9IHRoaXMudG91Y2hBcmVhLmdldENvbXBvbmVudChcIlRvdWNoQXJlYUNvbnRyb2xsZXJcIikuaXNUb3VjaDtcbiAgICBpZiAodGhpcy5wb2ludENsZWFyLmFjdGl2ZSAmJiB0aGlzLmlzVG91Y2gpIHtcbiAgICAgIHZhciBwb2ludCA9IGNjLnYyKFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueCArIGNjLndpblNpemUud2lkdGggLyAyLFxuICAgICAgICB0aGlzLnBvaW50Q2xlYXIueSArIGNjLndpblNpemUuaGVpZ2h0IC8gMlxuICAgICAgKTtcbiAgICAgIHRoaXMuc2NyYXRjaGFibGVzLmZvckVhY2goKHNjcmF0Y2hhYmxlKSA9PiB7XG4gICAgICAgIGlmIChzY3JhdGNoYWJsZS5pc1NjcmF0Y2hhYmxlICYmIHNjcmF0Y2hhYmxlLmlzSW5Cb3VuZChwb2ludCkpIHtcbiAgICAgICAgICBzY3JhdGNoYWJsZS5zY3JhdGNoSG9sZShwb2ludCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuIl19
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
        _this.Scratchable = null;
        // Bg
        _this.Bg_2 = null;
        _this.HideMask = null;
        // UI
        _this.CTA = null;
        _this.Btn_1 = null;
        _this.Hand = null;
        _this.Hint_Circle = null;
        // Character Path
        _this.Doll = null;
        _this.Doll_Face = null;
        _this.Doll_Mask = null;
        _this.Doll_Bandage = null;
        // Flow
        _this.Flow1 = null;
        _this.Flow2 = null;
        // Tools
        _this.ToolArea = null;
        _this.Flow1_Tool = null;
        _this.Flow1_ToolHead = null;
        _this.Flow2_spineTool = null;
        _this.Flow2_Tool = null;
        _this.Flow2_ToolHead = null;
        // Area
        _this.Flow1_Areas = [];
        _this.Flow1_Acnes = [];
        // CTA
        _this.CTA_Btn = null;
        _this.CTA_icon = null;
        _this.CTA_logo = null;
        _this.CTA_overlay = null;
        _this.initPosTool_Flow1 = null;
        return _this;
    }
    NodeContainer.prototype.start = function () {
        var _this = this;
        this.Hand = this.UI.getChildByName("hand2");
        this.Doll = this.UI.getChildByName("Doll");
        this.Doll_Face = this.Doll.getChildByName("Gal").getComponent(sp.Skeleton);
        this.Doll_Mask = this.Doll.getChildByName("Doll_Mask");
        this.Doll_Bandage = this.Doll.getChildByName("bandage");
        this.Flow1 = this.UI.getChildByName("Flow_1");
        this.Flow1_Tool = this.Flow1.getChildByName("Tool");
        this.Flow1_ToolHead = this.Flow1.getChildByName("ToolHead");
        this.Hint_Circle = this.Flow1.getChildByName("Hint_2");
        this.Flow1.children.forEach(function (child) {
            if (child.name.includes("AcneArea"))
                _this.Flow1_Areas.push(child);
        });
        this.Flow1_Acnes = this.Doll.getChildByName("Nose").children;
        this.Flow2 = this.UI.getChildByName("Flow_2");
        this.Flow2_spineTool = this.Flow2.getChildByName("spine_cream");
        this.Flow2_ToolHead = this.Flow2.getChildByName("MaskPoint");
        this.Flow2_Tool = this.Flow2.getChildByName("ToolCream");
        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");
        this.init();
    };
    NodeContainer.prototype.init = function () {
        this.initPosTool_Flow1 = this.Flow1_Tool.getPosition();
        this.ToolArea = this.Flow1_Tool;
    };
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "GamePlay", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Scratchable", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "Bg_2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "HideMask", void 0);
    __decorate([
        property(cc.Node)
    ], NodeContainer.prototype, "CTA", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxOb2RlQ29udGFuaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBc0dDO1FBbkdHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixLQUFLO1FBRUwsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLEtBQUs7UUFFTCxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixpQkFBaUI7UUFDakIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUM5QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLE9BQU87UUFDUCxXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsUUFBUTtRQUNSLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsT0FBTztRQUNQLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGlCQUFXLEdBQWMsRUFB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QVcsRUFBRSxDQUFDO1FBRXZELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDQztJQUVuQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNVO0lBSzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTztJQUt6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNFO0lBbkJILGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FzR2pDO0lBQUQsb0JBQUM7Q0F0R0QsQUFzR0MsQ0F0RzBDLEVBQUUsQ0FBQyxTQUFTLEdBc0d0RDtrQkF0R29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlQ29udGFpbmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVQbGF5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBTY3JhdGNoYWJsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIEJnXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEJnXzI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBIaWRlTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBcclxuXHJcbiAgICAvLyBVSVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBDVEE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEJ0bl8xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgSGludF9DaXJjbGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBDaGFyYWN0ZXIgUGF0aFxyXG4gICAgRG9sbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBEb2xsX0ZhY2U6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIERvbGxfTWFzazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBEb2xsX0JhbmRhZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBGbG93XHJcbiAgICBGbG93MTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGbG93MjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIFRvb2xzXHJcbiAgICBUb29sQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGbG93MV9Ub29sOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEZsb3cxX1Rvb2xIZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBGbG93Ml9zcGluZVRvb2w6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgRmxvdzJfVG9vbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBGbG93Ml9Ub29sSGVhZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gQXJlYVxyXG4gICAgRmxvdzFfQXJlYXM6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgRmxvdzFfQWNuZXM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBDVEFcclxuICAgIENUQV9CdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQ1RBX2ljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQ1RBX2xvZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQ1RBX292ZXJsYXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBpbml0UG9zVG9vbF9GbG93MTogY2MuVmVjMiA9IG51bGw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkhhbmQgPSB0aGlzLlVJLmdldENoaWxkQnlOYW1lKFwiaGFuZDJcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5Eb2xsID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkRvbGxcIik7XHJcbiAgICAgICAgdGhpcy5Eb2xsX0ZhY2UgPSB0aGlzLkRvbGwuZ2V0Q2hpbGRCeU5hbWUoXCJHYWxcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLkRvbGxfTWFzayA9IHRoaXMuRG9sbC5nZXRDaGlsZEJ5TmFtZShcIkRvbGxfTWFza1wiKTtcclxuICAgICAgICB0aGlzLkRvbGxfQmFuZGFnZSA9IHRoaXMuRG9sbC5nZXRDaGlsZEJ5TmFtZShcImJhbmRhZ2VcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5GbG93MSA9IHRoaXMuVUkuZ2V0Q2hpbGRCeU5hbWUoXCJGbG93XzFcIik7XHJcbiAgICAgICAgdGhpcy5GbG93MV9Ub29sID0gdGhpcy5GbG93MS5nZXRDaGlsZEJ5TmFtZShcIlRvb2xcIik7XHJcbiAgICAgICAgdGhpcy5GbG93MV9Ub29sSGVhZCA9IHRoaXMuRmxvdzEuZ2V0Q2hpbGRCeU5hbWUoXCJUb29sSGVhZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkhpbnRfQ2lyY2xlID0gdGhpcy5GbG93MS5nZXRDaGlsZEJ5TmFtZShcIkhpbnRfMlwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkZsb3cxLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBpZihjaGlsZC5uYW1lLmluY2x1ZGVzKFwiQWNuZUFyZWFcIikpIHRoaXMuRmxvdzFfQXJlYXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuRmxvdzFfQWNuZXMgPSB0aGlzLkRvbGwuZ2V0Q2hpbGRCeU5hbWUoXCJOb3NlXCIpLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB0aGlzLkZsb3cyID0gdGhpcy5VSS5nZXRDaGlsZEJ5TmFtZShcIkZsb3dfMlwiKTtcclxuICAgICAgICB0aGlzLkZsb3cyX3NwaW5lVG9vbCA9IHRoaXMuRmxvdzIuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluZV9jcmVhbVwiKTtcclxuICAgICAgICB0aGlzLkZsb3cyX1Rvb2xIZWFkID0gdGhpcy5GbG93Mi5nZXRDaGlsZEJ5TmFtZShcIk1hc2tQb2ludFwiKTtcclxuICAgICAgICB0aGlzLkZsb3cyX1Rvb2wgPSB0aGlzLkZsb3cyLmdldENoaWxkQnlOYW1lKFwiVG9vbENyZWFtXCIpO1xyXG5cclxuICAgICAgICB0aGlzLkNUQV9CdG4gPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcImJ0bk5leHRcIik7XHJcbiAgICAgICAgdGhpcy5DVEFfbG9nbyA9IHRoaXMuQ1RBLmdldENoaWxkQnlOYW1lKFwibG9nb1wiKTtcclxuICAgICAgICB0aGlzLkNUQV9pY29uID0gdGhpcy5DVEEuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpO1xyXG4gICAgICAgIHRoaXMuQ1RBX292ZXJsYXkgPSB0aGlzLkNUQS5nZXRDaGlsZEJ5TmFtZShcIk92ZXJsYXlcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbml0UG9zVG9vbF9GbG93MSA9IHRoaXMuRmxvdzFfVG9vbC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLlRvb2xBcmVhID0gdGhpcy5GbG93MV9Ub29sO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        // this.NodeContainer.UI.y = 0;
        // Constants.Responsive.calculatedY = -0;
    };
    Responsive.prototype.setHorizontalForTablet = function () {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }
        this.device = this.HORIZONTAL_TABLET;
        // this.NodeContainer.UI.y = 0;
        // Constants.Responsive.calculatedY = -0;
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
        // this.NodeContainer.UI.y =  -30;
        // Constants.Responsive.calculatedY = -30;
    };
    Responsive.prototype.setMobile = function () {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }
        this.device = this.VERTICAL_MOBILE;
        var width = cc.view.getFrameSize().width;
        var height = cc.view.getFrameSize().height;
        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                return;
            }
            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            // this.NodeContainer.UI.y =  -0;
            // Constants.Responsive.calculatedY = -0;
        }
        else {
            // this.NodeContainer.UI.y =  -0;
            // Constants.Responsive.calculatedY = -0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXFJlc3BvbnNpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELCtDQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJIQztRQXhIRyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsUUFBUTtRQUNSLFlBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixvQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLHVCQUFpQixHQUFXLG1CQUFtQixDQUFDO1FBQ2hELGtCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLHFCQUFlLEdBQVcsaUJBQWlCLENBQUM7O0lBOEdoRCxDQUFDO0lBM0dhLDJCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUdTLDBCQUFLLEdBQWY7SUFFQSxDQUFDO0lBR08saUNBQVksR0FBcEI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUU7WUFDaEIscUJBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0gscUJBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFHTyxrQ0FBYSxHQUFyQjtRQUNJLElBQUksS0FBSyxH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ZGVDb250YWluZXIgZnJvbSBcIi4uL0NvbnRyb2xsZXIvTm9kZUNvbnRhbmllclwiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICAgIE5vZGVDb250YWluZXI6IE5vZGVDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgZGV2aWNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNSb3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBIT1JJWk9OVEFMX0lQWDogc3RyaW5nID0gXCJob3Jpem9udGFsX0lQWFwiO1xyXG4gICAgSE9SSVpPTlRBTF9UQUJMRVQ6IHN0cmluZyA9IFwiaG9yaXpvbnRhbF9UYWJsZXRcIjtcclxuICAgIFZFUlRJQ0FMX0lQWDogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9JUFhcIjtcclxuICAgIFZFUlRJQ0FMX01PQklMRTogc3RyaW5nID0gXCJ2ZXJ0aWNhbF9Nb2JpbGVcIjtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUm90YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBDb25zdGFudHMuaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIb3Jpem9udGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChoZWlnaHQgLyB3aWR0aCA8IDAuNjUpIHtcclxuICAgICAgICAgICAgLy8gSXBob25lIDYgLyA2IHBsdXMgLyA3IC8gNyBQbHVzIC8gWFxyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JJcFgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEhvcml6b250YWxGb3JUYWJsZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvcklwWCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX0lQWCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfSVBYO1xyXG5cclxuICAgICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuVUkueSA9IDA7XHJcbiAgICAgICAgLy8gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAtMDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgc2V0SG9yaXpvbnRhbEZvclRhYmxldCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5IT1JJWk9OVEFMX1RBQkxFVCA9PT0gdGhpcy5kZXZpY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLkhPUklaT05UQUxfVEFCTEVUO1xyXG5cclxuICAgICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuVUkueSA9IDA7XHJcbiAgICAgICAgLy8gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAtMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFZlcnRpY2FsKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgIGlmICh3aWR0aCAvIGhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElwaG9uZVgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldElwaG9uZVgoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfSVBYID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfSVBYO1xyXG5cclxuICAgICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuVUkueSA9ICAtMzA7XHJcbiAgICAgICAgLy8gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAtMzA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNb2JpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuVkVSVElDQUxfTU9CSUxFID09PSB0aGlzLmRldmljZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUxfTU9CSUxFO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0IC8gd2lkdGggPiAxLjUpIHtcclxuICAgICAgICAgICAgaWYgKHdpZHRoIC8gaGVpZ2h0ID49IDAuNiAmJiB3aWR0aCAvIGhlaWdodCA8IDAuNjIpIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vYmlsZSBtb2RlIGFwcGxvdmluXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElwaG9uZSA2IC8gNiBQbHVzIC8gNyAvIDcgUGx1cyAgIFxyXG4gICAgICAgICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuVUkueSA9ICAtMDtcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAtMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuVUkueSA9ICAtMDtcclxuICAgICAgICAgICAgLy8gQ29uc3RhbnRzLlJlc3BvbnNpdmUuY2FsY3VsYXRlZFkgPSAtMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUm90YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
// import { SpineAnims } from "../Data/Anims";
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
        _this.Btn_1 = null;
        _this.Btn_2 = null;
        // state
        _this.isTouch = false;
        return _this;
    }
    TouchAreaController.prototype.onLoad = function () {
    };
    TouchAreaController.prototype.start = function () {
        // this.NodeContainer.CTA.active = false;
        // this.NodeContainer.Btn_1.active = false;
        this.registerEvent();
    };
    TouchAreaController.prototype.registerEvent = function () {
        this.NodeContainer.HideMask.on(cc.Node.EventType.TOUCH_START, this.hideMaskTouchStart, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.ToolArea.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.NodeContainer.CTA_Btn.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        // mtg & applovin
        // this.NodeContainer.CTA_overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    };
    TouchAreaController.prototype.registerNewEvent = function () {
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.NodeContainer.Flow2_Tool.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    };
    TouchAreaController.prototype.hideMaskTouchStart = function (e) {
        // mtg & applovin
        // Constants.maggotRemoved >= 1 && this.GameController.installHandle();
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
        // mtg & applovin
        // Constants.isToStore && this.GameController.installHandle();
    };
    TouchAreaController.prototype.enableTouch = function () {
        constants_1.Constants.isCanTouch = false;
    };
    TouchAreaController.prototype.touchStart = function (e) {
        // ironsource
        this.IronSource.handleIronSourcePlaySound();
        constants_1.Constants.isToStore && this.GameController.installHandle();
        this.NodeContainer.Hand.active = false;
        this.NodeContainer.Hint_Circle.active = false;
        if (!constants_1.Constants.isCanTouch)
            return;
        var pos = e.touch.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        if (constants_1.Constants.isDoneStep1) {
            this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Action", true);
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.FaceWashSound);
            this.isTouch = true;
        }
        this.moveTools(posConverted, pos);
        // this.NodeContainer.Hand.active = false;
        // this.GamePlay.hand.getComponent(cc.Animation).stop();
        // this.GamePlay.hand.opacity = 0;
    };
    TouchAreaController.prototype.touchMove = function (e) {
        if (!constants_1.Constants.isCanTouch || constants_1.Constants.ironSource.isEndGame)
            return;
        var pos = e.getLocation();
        var posConverted = this.node.convertToNodeSpaceAR(pos);
        this.moveTools(posConverted, pos);
    };
    TouchAreaController.prototype.touchEnd = function (e) {
        this.isTouch = false;
        this.AudioManager.stopSound(constants_1.Constants.SoundTrack.FaceWashSound);
        constants_1.Constants.isDoneStep1
            && this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Action", false);
    };
    TouchAreaController.prototype.moveTools = function (posConverted, pos) {
        if (!constants_1.Constants.isDoneStep1) {
            this.NodeContainer.ToolArea.setPosition(posConverted.x, posConverted.y);
            this.NodeContainer.Flow1_ToolHead.setPosition(posConverted.x + 37, posConverted.y + 70);
            this.GamePlay.checkCollideAcne();
            // this.NodeContainer.Tool.setPosition(posConverted.x - 45, posConverted.y - 40);
        }
        else {
            this.NodeContainer.ToolArea.setPosition(posConverted.x, posConverted.y);
            this.NodeContainer.Flow2_ToolHead.setPosition(posConverted.x - 37, posConverted.y - 40);
            this.NodeContainer.Flow2_spineTool.setPosition(posConverted.x - 40, posConverted.y - 30);
        }
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
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_1", void 0);
    __decorate([
        property(cc.Node)
    ], TouchAreaController.prototype, "Btn_2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxUb3VjaEFyZWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDOUMsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsdUNBQWtDO0FBQ2xDLDJDQUFzQztBQUN0QyxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsdUNBQVk7SUFBckQ7UUFBQSxxRUE0SUM7UUEzSUMsWUFBWTtRQUVaLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQWtCLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFFBQVE7UUFDUixhQUFPLEdBQVksS0FBSyxDQUFDOztJQXlIM0IsQ0FBQztJQXRIVyxvQ0FBTSxHQUFoQjtJQUVBLENBQUM7SUFHUyxtQ0FBSyxHQUFmO1FBQ0UseUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdPLDJDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FB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O3NEQUNJO0lBaEJYLG1CQUFtQjtRQUQvQixPQUFPO09BQ0ssbUJBQW1CLENBNEkvQjtJQUFELDBCQUFDO0NBNUlELEFBNElDLENBNUl3QyxFQUFFLENBQUMsU0FBUyxHQTRJcEQ7QUE1SVksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgU3BpbmVBbmltcyB9IGZyb20gXCIuLi9EYXRhL0FuaW1zXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9EYXRhL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9QbHVnaW4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4vR2FtZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IEdhbWVQbGF5IGZyb20gXCIuL0dhbWVQbGF5XCI7XHJcbmltcG9ydCBJcm9uU291cmNlIGZyb20gXCIuL0lyb25Tb3VyY2VcIjtcclxuaW1wb3J0IE5vZGVDb250YWluZXIgZnJvbSBcIi4vTm9kZUNvbnRhbmllclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBUb3VjaEFyZWFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAvLyBDb21wb25lbnRcclxuICBAcHJvcGVydHkoSXJvblNvdXJjZSlcclxuICBJcm9uU291cmNlOiBJcm9uU291cmNlID0gbnVsbDtcclxuICBAcHJvcGVydHkoTm9kZUNvbnRhaW5lcilcclxuICBOb2RlQ29udGFpbmVyOiBOb2RlQ29udGFpbmVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoQXVkaW9NYW5hZ2VyKVxyXG4gIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZUNvbnRyb2xsZXIpXHJcbiAgR2FtZUNvbnRyb2xsZXI6IEdhbWVDb250cm9sbGVyID0gbnVsbDtcclxuICBAcHJvcGVydHkoR2FtZVBsYXkpXHJcbiAgR2FtZVBsYXk6IEdhbWVQbGF5ID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgQnRuXzE6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIEJ0bl8yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgLy8gc3RhdGVcclxuICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gdGhpcy5Ob2RlQ29udGFpbmVyLkJ0bl8xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpZGVNYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmhpZGVNYXNrVG91Y2hTdGFydCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ub29sQXJlYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQV9CdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgLy8gbXRnICYgYXBwbG92aW5cclxuICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5DVEFfb3ZlcmxheS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJOZXdFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBoaWRlTWFza1RvdWNoU3RhcnQoZTogYW55KTogdm9pZCB7XHJcbiAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgLy8gQ29uc3RhbnRzLm1hZ2dvdFJlbW92ZWQgPj0gMSAmJiB0aGlzLkdhbWVDb250cm9sbGVyLmluc3RhbGxIYW5kbGUoKTtcclxuXHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG5cclxuICAgIC8vIG10ZyAmIGFwcGxvdmluXHJcbiAgICAvLyBDb25zdGFudHMuaXNUb1N0b3JlICYmIHRoaXMuR2FtZUNvbnRyb2xsZXIuaW5zdGFsbEhhbmRsZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZW5hYmxlVG91Y2goKTogdm9pZCB7XHJcbiAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgdG91Y2hTdGFydChlOiBjYy5FdmVudC5FdmVudFRvdWNoKTogdm9pZCB7XHJcbiAgICAvLyBpcm9uc291cmNlXHJcbiAgICB0aGlzLklyb25Tb3VyY2UuaGFuZGxlSXJvblNvdXJjZVBsYXlTb3VuZCgpO1xyXG5cclxuICAgIENvbnN0YW50cy5pc1RvU3RvcmUgJiYgdGhpcy5HYW1lQ29udHJvbGxlci5pbnN0YWxsSGFuZGxlKCk7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhhbmQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpbnRfQ2lyY2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2gpIHJldHVybjtcclxuXHJcbiAgICBsZXQgcG9zID0gZS50b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG5cclxuICAgIGlmKENvbnN0YW50cy5pc0RvbmVTdGVwMSkge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfc3BpbmVUb29sLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQWN0aW9uXCIsIHRydWUpO1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRmFjZVdhc2hTb3VuZCk7XHJcbiAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMubW92ZVRvb2xzKHBvc0NvbnZlcnRlZCwgcG9zKTtcclxuXHJcbiAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vIHRoaXMuR2FtZVBsYXkuaGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XHJcbiAgICAvLyB0aGlzLkdhbWVQbGF5LmhhbmQub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE1vdmUoZTogY2MuVG91Y2gpOiB2b2lkIHtcclxuICAgIGlmICghQ29uc3RhbnRzLmlzQ2FuVG91Y2ggfHwgQ29uc3RhbnRzLmlyb25Tb3VyY2UuaXNFbmRHYW1lKSByZXR1cm47XHJcbiAgICBsZXQgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgbGV0IHBvc0NvbnZlcnRlZCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xyXG4gICAgdGhpcy5tb3ZlVG9vbHMocG9zQ29udmVydGVkLCBwb3MpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIHRvdWNoRW5kKGU6IGNjLlRvdWNoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRmFjZVdhc2hTb3VuZCk7XHJcbiAgICBDb25zdGFudHMuaXNEb25lU3RlcDFcclxuICAgICYmIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJBY3Rpb25cIiwgZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgbW92ZVRvb2xzKHBvc0NvbnZlcnRlZDogY2MuVmVjMiwgcG9zOiBjYy5WZWMyKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFDb25zdGFudHMuaXNEb25lU3RlcDEpIHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54LCBwb3NDb252ZXJ0ZWQueSk7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sSGVhZC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCArIDM3LCBwb3NDb252ZXJ0ZWQueSArIDcwKTtcclxuXHJcbiAgICAgIHRoaXMuR2FtZVBsYXkuY2hlY2tDb2xsaWRlQWNuZSgpO1xyXG4gICAgICAvLyB0aGlzLk5vZGVDb250YWluZXIuVG9vbC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCAtIDQ1LCBwb3NDb252ZXJ0ZWQueSAtIDQwKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLlRvb2xBcmVhLnNldFBvc2l0aW9uKHBvc0NvbnZlcnRlZC54LCBwb3NDb252ZXJ0ZWQueSk7XHJcbiAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sSGVhZC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCAtIDM3LCBwb3NDb252ZXJ0ZWQueSAtIDQwKTtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX3NwaW5lVG9vbC5zZXRQb3NpdGlvbihwb3NDb252ZXJ0ZWQueCAtIDQwLCBwb3NDb252ZXJ0ZWQueSAtIDMwKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
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
    SoundTrack["bgSound"] = "bgSound";
    SoundTrack["spiderSound"] = "spiderSound";
    SoundTrack["walkSound"] = "walkSound";
    SoundTrack["scareSound"] = "scareSound";
    SoundTrack["FaceWashSound"] = "FaceWashSound";
    SoundTrack["IntroDelightSound"] = "IntroDelightSound";
    SoundTrack["hmmSound"] = "hmmSound";
    SoundTrack["whooseSound"] = "whooseSound";
    SoundTrack["moveItemSound"] = "moveItemSound";
    SoundTrack["DoneStepSound"] = "DoneStepSound";
    SoundTrack["crySound"] = "crySound";
    SoundTrack["gapRuoiSound"] = "gapRuoiSound";
    SoundTrack["screamHoooSound"] = "screamHoooSound";
    SoundTrack["nhoMun2Sound"] = "nhoMun2Sound";
    SoundTrack["nhoMun1Sound"] = "nhoMun1Sound";
})(SoundTrack || (SoundTrack = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    // state    
    // static currentPosition: cc.Vec2 = new cc.Vec2(0, 0);
    Constants.isRotate = false;
    Constants.isTouch = false;
    Constants.isCanTouch = true;
    Constants.isToStore = false;
    Constants.isDoneStep1 = false;
    Constants.AcneRemoved = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhXFxjb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUMsSUFBTSxVQUFVLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFLENBQUM7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBR0QsSUFBTSxVQUFVLEdBQUc7SUFDZixXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsYUFBYSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQTtBQUdELElBQUssVUFnQko7QUFoQkQsV0FBSyxVQUFVO0lBQ1gsaUNBQW1CLENBQUE7SUFDbkIseUNBQTJCLENBQUE7SUFDM0IscUNBQXVCLENBQUE7SUFDdkIsdUNBQXlCLENBQUE7SUFDekIsNkNBQStCLENBQUE7SUFDL0IscURBQXVDLENBQUE7SUFDdkMsbUNBQXFCLENBQUE7SUFDckIseUNBQTJCLENBQUE7SUFDM0IsNkNBQStCLENBQUE7SUFDL0IsNkNBQStCLENBQUE7SUFDL0IsbUNBQXFCLENBQUE7SUFDckIsMkNBQTZCLENBQUE7SUFDN0IsaURBQW1DLENBQUE7SUFDbkMsMkNBQTZCLENBQUE7SUFDN0IsMkNBQTZCLENBQUE7QUFDakMsQ0FBQyxFQWhCSSxVQUFVLEtBQVYsVUFBVSxRQWdCZDtBQUdEO0lBQUE7SUErQkEsQ0FBQztJQTdCRyxZQUFZO0lBQ1osdURBQXVEO0lBRWhELGtCQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLGlCQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLG9CQUFVLEdBQVksSUFBSSxDQUFDO0lBQzNCLG1CQUFTLEdBQVksS0FBSyxDQUFDO0lBRTNCLHFCQUFXLEdBQVksS0FBSyxDQUFDO0lBSTdCLHFCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBRS9CLFFBQVE7SUFDRCxlQUFLLEdBQWlCLEtBQUssQ0FBQztJQUduQyxhQUFhO0lBQ04sb0JBQVUsR0FBc0IsVUFBVSxDQUFDO0lBR2xELGFBQWE7SUFDTixvQkFBVSxHQUFzQixVQUFVLENBQUM7SUFHbEQsYUFBYTtJQUNOLG9CQUFVLEdBQXNCLFVBQVUsQ0FBQztJQUV0RCxnQkFBQztDQS9CRCxBQStCQyxJQUFBO0FBL0JZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5jb25zdCBJcm9uU291cmNlID0ge1xyXG4gICAgLy8gaXJvbnNvdXJjZSBcclxuICAgIFNvdW5kU3RhdGU6IHRydWUsXHJcbiAgICBTdGF0ZTogMSxcclxuICAgIGlzRW5kR2FtZTogZmFsc2UsXHJcbiAgICBpc1BsYXlCZ1NvdW5kOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmNvbnN0IFJlc3BvbnNpdmUgPSB7XHJcbiAgICBjYWxjdWxhdGVkWTogMCxcclxuICAgIGNhbGN1bGF0ZWRYOiAwLFxyXG4gICAgY3VycmVudERldmljZTogXCJcIixcclxufVxyXG5cclxuXHJcbmVudW0gU291bmRUcmFjayB7XHJcbiAgICBiZ1NvdW5kID0gXCJiZ1NvdW5kXCIsXHJcbiAgICBzcGlkZXJTb3VuZCA9IFwic3BpZGVyU291bmRcIixcclxuICAgIHdhbGtTb3VuZCA9IFwid2Fsa1NvdW5kXCIsXHJcbiAgICBzY2FyZVNvdW5kID0gXCJzY2FyZVNvdW5kXCIsXHJcbiAgICBGYWNlV2FzaFNvdW5kID0gXCJGYWNlV2FzaFNvdW5kXCIsXHJcbiAgICBJbnRyb0RlbGlnaHRTb3VuZCA9IFwiSW50cm9EZWxpZ2h0U291bmRcIixcclxuICAgIGhtbVNvdW5kID0gXCJobW1Tb3VuZFwiLFxyXG4gICAgd2hvb3NlU291bmQgPSBcIndob29zZVNvdW5kXCIsXHJcbiAgICBtb3ZlSXRlbVNvdW5kID0gXCJtb3ZlSXRlbVNvdW5kXCIsXHJcbiAgICBEb25lU3RlcFNvdW5kID0gXCJEb25lU3RlcFNvdW5kXCIsXHJcbiAgICBjcnlTb3VuZCA9IFwiY3J5U291bmRcIixcclxuICAgIGdhcFJ1b2lTb3VuZCA9IFwiZ2FwUnVvaVNvdW5kXCIsXHJcbiAgICBzY3JlYW1Ib29vU291bmQgPSBcInNjcmVhbUhvb29Tb3VuZFwiLFxyXG4gICAgbmhvTXVuMlNvdW5kID0gXCJuaG9NdW4yU291bmRcIixcclxuICAgIG5ob011bjFTb3VuZCA9IFwibmhvTXVuMVNvdW5kXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG5cclxuICAgIC8vIHN0YXRlICAgIFxyXG4gICAgLy8gc3RhdGljIGN1cnJlbnRQb3NpdGlvbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xyXG5cclxuICAgIHN0YXRpYyBpc1JvdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBpc1RvU3RvcmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgaXNEb25lU3RlcDE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBBY25lUmVtb3ZlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBldmVudFxyXG4gICAgc3RhdGljIEV2ZW50OiB0eXBlb2YgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gU291bmRUcmFja1xyXG4gICAgc3RhdGljIFNvdW5kVHJhY2s6IHR5cGVvZiBTb3VuZFRyYWNrID0gU291bmRUcmFjaztcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2U6IHR5cGVvZiBJcm9uU291cmNlID0gSXJvblNvdXJjZTtcclxuXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZVxyXG4gICAgc3RhdGljIFJlc3BvbnNpdmU6IHR5cGVvZiBSZXNwb25zaXZlID0gUmVzcG9uc2l2ZTtcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/Scratchable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e71dUgp89ACJhqvD+hiH+q', 'Scratchable');
// Script/Controller/Scratchable.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDone: 0,
    isWin: cc.Boolean,
    eraserRadius: {
      type: cc.Int,
      "default": 60
    }
  },
  start: function start() {
    this.percentToWin = 0.7;
    var mask = this.getComponentInChildren(cc.Mask);
    this.graphics = mask._graphics;
    this.graphics.fillColor = cc.color(255, 255, 255, 0);
    this.reset();
  },
  calculateProgress: function calculateProgress() {
    if (!this.isScratchable) {
      return;
    }

    var hitItemCount = 0;
    this.polygonPointsList.forEach(function (item) {
      if (!item.isHit) return;
      hitItemCount += 1;
    });
    this.progress = hitItemCount / this.polygonPointsList.length;

    if (this.progress >= this.percentToWin) {
      this.isWin = true;
      this.isDone = 1;
    }

    if (this.isWin) {
      this.fillInstantly();
      this.completed = true;
      this.isScratchable = false;
      this.node.dispatchEvent(new cc.Event.EventCustom("completed", this));
    }
  },
  reset: function reset() {
    this.callbackFlag = true;
    this.graphics.clear();
    this.tempDrawPoints = [];
    this.polygonPointsList = [];
    this.progress = 0;
    this.completed = false;
    this.isScratchable = true;
    this.initPolygonList();
  },
  initPolygonList: function initPolygonList() {
    for (var x = 0; x < this.node.width; x += this.eraserRadius) {
      for (var y = 0; y < this.node.height; y += this.eraserRadius) {
        this.polygonPointsList.push({
          rect: cc.rect(x - this.node.width / 2, y - this.node.height / 2, this.eraserRadius, this.eraserRadius),
          isHit: false
        });
      }
    }
  },
  scratchHole: function scratchHole(pos) {
    pos = this.node.convertToNodeSpaceAR(pos);
    var stencil = this.graphics;
    var len = this.tempDrawPoints.length;
    this.tempDrawPoints.push(pos);
    this.calculateProgress();

    if (len <= 1) {
      stencil.circle(pos.x, pos.y, this.eraserRadius / 2);
      stencil.fill();
      this.polygonPointsList.forEach(function (item) {
        if (item.isHit) return;
        var xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
        var yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
        if (xFlag && yFlag) item.isHit = true;
      });
    } else {
      var prevPos = this.tempDrawPoints[len - 2];
      var curPos = this.tempDrawPoints[len - 1];
      stencil.moveTo(prevPos.x, prevPos.y);
      stencil.lineTo(curPos.x, curPos.y);
      stencil.lineWidth = this.eraserRadius;
      stencil.lineCap = cc.Graphics.LineCap.ROUND;
      stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
      stencil.strokeColor = cc.color(255, 255, 255, 255);
      stencil.stroke();
      this.polygonPointsList.forEach(function (item) {
        item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
      });
    }
  },
  resetProgress: function resetProgress() {
    this.clearInstantly();
    this.polygonPointsList = [];
    this.tempDrawPoints = [];
    this.progress = 0;
    this.initPolygonList();
  },
  isInBound: function isInBound(point) {
    return true;
  },
  clearInstantly: function clearInstantly() {
    this.graphics.clear();
  },
  fillInstantly: function fillInstantly() {
    this.graphics.moveTo(0, 0);
    this.graphics.rect(0, 0, this.node.width, this.node.height);
    this.graphics.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxTY3JhdGNoYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzRG9uZSIsImlzV2luIiwiQm9vbGVhbiIsImVyYXNlclJhZGl1cyIsInR5cGUiLCJJbnQiLCJzdGFydCIsInBlcmNlbnRUb1dpbiIsIm1hc2siLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiTWFzayIsImdyYXBoaWNzIiwiX2dyYXBoaWNzIiwiZmlsbENvbG9yIiwiY29sb3IiLCJyZXNldCIsImNhbGN1bGF0ZVByb2dyZXNzIiwiaXNTY3JhdGNoYWJsZSIsImhpdEl0ZW1Db3VudCIsInBvbHlnb25Qb2ludHNMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJpc0hpdCIsInByb2dyZXNzIiwibGVuZ3RoIiwiZmlsbEluc3RhbnRseSIsImNvbXBsZXRlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJFdmVudEN1c3RvbSIsImNhbGxiYWNrRmxhZyIsImNsZWFyIiwidGVtcERyYXdQb2ludHMiLCJpbml0UG9seWdvbkxpc3QiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwicHVzaCIsInJlY3QiLCJzY3JhdGNoSG9sZSIsInBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwic3RlbmNpbCIsImxlbiIsImNpcmNsZSIsImZpbGwiLCJ4RmxhZyIsInlGbGFnIiwicHJldlBvcyIsImN1clBvcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJHcmFwaGljcyIsIkxpbmVDYXAiLCJST1VORCIsImxpbmVKb2luIiwiTGluZUpvaW4iLCJzdHJva2VDb2xvciIsInN0cm9rZSIsIkludGVyc2VjdGlvbiIsImxpbmVSZWN0IiwicmVzZXRQcm9ncmVzcyIsImNsZWFySW5zdGFudGx5IiwiaXNJbkJvdW5kIiwicG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QyxNQUFsQyxFQUEwQzlCLElBQUksQ0FBQ21CLElBQS9DLENBRGhCO0FBRUQsT0FIRDtBQUlEO0FBQ0YsR0E3R007QUErR1B5QixFQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDekIsU0FBS0MsY0FBTDtBQUNBLFNBQUsvQyxpQkFBTCxHQUF5QixFQUF6QjtBQUNBLFNBQUtjLGNBQUwsR0FBc0IsRUFBdEI7QUFDQSxTQUFLVixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS1csZUFBTDtBQUNELEdBckhNO0FBdUhQaUMsRUFBQUEsU0FBUyxFQUFFLG1CQUFVQyxLQUFWLEVBQWlCO0FBQzFCLFdBQU8sSUFBUDtBQUNELEdBekhNO0FBMkhQRixFQUFBQSxjQUFjLEVBQUUsMEJBQVk7QUFDMUIsU0FBS3ZELFFBQUwsQ0FBY3FCLEtBQWQ7QUFDRCxHQTdITTtBQStIUFAsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3pCLFNBQUtkLFFBQUwsQ0FBY3lDLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEI7QUFDQSxTQUFLekMsUUFBTCxDQUFjNkIsSUFBZCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLYixJQUFMLENBQVVTLEtBQW5DLEVBQTBDLEtBQUtULElBQUwsQ0FBVVcsTUFBcEQ7QUFDQSxTQUFLM0IsUUFBTCxDQUFjb0MsSUFBZDtBQUNEO0FBbklNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGlzRG9uZTogMCxcbiAgICBpc1dpbjogY2MuQm9vbGVhbixcbiAgICBlcmFzZXJSYWRpdXM6IHtcbiAgICAgIHR5cGU6IGNjLkludCxcbiAgICAgIGRlZmF1bHQ6IDYwLFxuICAgIH0sXG4gIH0sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBlcmNlbnRUb1dpbiA9IDAuNztcbiAgICBsZXQgbWFzayA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5NYXNrKTtcbiAgICB0aGlzLmdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH0sXG5cbiAgY2FsY3VsYXRlUHJvZ3Jlc3MoKSB7XG5cbiAgICBpZiAoIXRoaXMuaXNTY3JhdGNoYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaGl0SXRlbUNvdW50ID0gMDtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbS5pc0hpdCkgcmV0dXJuO1xuICAgICAgaGl0SXRlbUNvdW50ICs9IDE7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGhpdEl0ZW1Db3VudCAvIHRoaXMucG9seWdvblBvaW50c0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gdGhpcy5wZXJjZW50VG9XaW4pIHtcbiAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xuICAgICAgdGhpcy5pc0RvbmUgPSAxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzV2luKSB7XG4gICAgICB0aGlzLmZpbGxJbnN0YW50bHkoKTtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNTY3JhdGNoYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQobmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKFwiY29tcGxldGVkXCIsIHRoaXMpKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbGxiYWNrRmxhZyA9IHRydWU7XG4gICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMgPSBbXTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzU2NyYXRjaGFibGUgPSB0cnVlO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaW5pdFBvbHlnb25MaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm5vZGUud2lkdGg7IHggKz0gdGhpcy5lcmFzZXJSYWRpdXMpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ub2RlLmhlaWdodDsgeSArPSB0aGlzLmVyYXNlclJhZGl1cykge1xuICAgICAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0LnB1c2goe1xuICAgICAgICAgIHJlY3Q6IGNjLnJlY3QoXG4gICAgICAgICAgICB4IC0gdGhpcy5ub2RlLndpZHRoIC8gMixcbiAgICAgICAgICAgIHkgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMuZXJhc2VyUmFkaXVzLFxuICAgICAgICAgICAgdGhpcy5lcmFzZXJSYWRpdXNcbiAgICAgICAgICApLFxuICAgICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNjcmF0Y2hIb2xlOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgbGV0IHN0ZW5jaWwgPSB0aGlzLmdyYXBoaWNzO1xuICAgIGNvbnN0IGxlbiA9IHRoaXMudGVtcERyYXdQb2ludHMubGVuZ3RoO1xuICAgIHRoaXMudGVtcERyYXdQb2ludHMucHVzaChwb3MpO1xuXG4gICAgdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpO1xuXG4gICAgaWYgKGxlbiA8PSAxKSB7XG4gICAgICBzdGVuY2lsLmNpcmNsZShwb3MueCwgcG9zLnksIHRoaXMuZXJhc2VyUmFkaXVzIC8gMik7XG4gICAgICBzdGVuY2lsLmZpbGwoKTtcblxuICAgICAgdGhpcy5wb2x5Z29uUG9pbnRzTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlzSGl0KSByZXR1cm47XG4gICAgICAgIGNvbnN0IHhGbGFnID1cbiAgICAgICAgICBwb3MueCA+IGl0ZW0ucmVjdC54ICYmIHBvcy54IDwgaXRlbS5yZWN0LnggKyBpdGVtLnJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IHlGbGFnID1cbiAgICAgICAgICBwb3MueSA+IGl0ZW0ucmVjdC55ICYmIHBvcy55IDwgaXRlbS5yZWN0LnkgKyBpdGVtLnJlY3QuaGVpZ2h0O1xuICAgICAgICBpZiAoeEZsYWcgJiYgeUZsYWcpIGl0ZW0uaXNIaXQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcmV2UG9zID0gdGhpcy50ZW1wRHJhd1BvaW50c1tsZW4gLSAyXTtcbiAgICAgIGxldCBjdXJQb3MgPSB0aGlzLnRlbXBEcmF3UG9pbnRzW2xlbiAtIDFdO1xuXG4gICAgICBzdGVuY2lsLm1vdmVUbyhwcmV2UG9zLngsIHByZXZQb3MueSk7XG4gICAgICBzdGVuY2lsLmxpbmVUbyhjdXJQb3MueCwgY3VyUG9zLnkpO1xuICAgICAgc3RlbmNpbC5saW5lV2lkdGggPSB0aGlzLmVyYXNlclJhZGl1cztcbiAgICAgIHN0ZW5jaWwubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICBzdGVuY2lsLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XG4gICAgICBzdGVuY2lsLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgIHN0ZW5jaWwuc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMucG9seWdvblBvaW50c0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmlzSGl0ID1cbiAgICAgICAgICBpdGVtLmlzSGl0IHx8IGNjLkludGVyc2VjdGlvbi5saW5lUmVjdChwcmV2UG9zLCBjdXJQb3MsIGl0ZW0ucmVjdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXRQcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2xlYXJJbnN0YW50bHkoKTtcbiAgICB0aGlzLnBvbHlnb25Qb2ludHNMaXN0ID0gW107XG4gICAgdGhpcy50ZW1wRHJhd1BvaW50cyA9IFtdO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuaW5pdFBvbHlnb25MaXN0KCk7XG4gIH0sXG5cbiAgaXNJbkJvdW5kOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBjbGVhckluc3RhbnRseTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgfSxcblxuICBmaWxsSW5zdGFudGx5OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oMCwgMCk7XG4gICAgdGhpcy5ncmFwaGljcy5yZWN0KDAsIDAsIHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG4gIH0sXG59KTtcbiJdfQ==
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
        _this.moveItemSound = null;
        _this.DoneStepSound = null;
        _this.nhoMun1Sound = null;
        _this.nhoMun2Sound = null;
        _this.FaceWashSound = null;
        return _this;
    }
    AudioManager.prototype.playSound = function (soundName) {
        if (constants_1.Constants.ironSource.SoundState && !constants_1.Constants.ironSource.isEndGame) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                case "FaceWashSound":
                    this.FaceWashSound.play();
                    break;
                case "nhoMun1Sound":
                    this.nhoMun1Sound.play();
                    break;
                case "nhoMun2Sound":
                    this.nhoMun2Sound.play();
                    break;
                case "DoneStepSound":
                    this.DoneStepSound.play();
                    break;
                case "moveItemSound":
                    this.moveItemSound.play();
                    break;
                case "hmmSound":
                    this.hmmSound.play();
                    break;
                case "spiderSound":
                    this.spiderSound.play();
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
            case "FaceWashSound":
                this.FaceWashSound.stop();
                break;
            case "nhoMun1Sound":
                this.nhoMun1Sound.stop();
                break;
            case "nhoMun2Sound":
                this.nhoMun2Sound.stop();
                break;
            case "DoneStepSound":
                this.DoneStepSound.stop();
                break;
            case "moveItemSound":
                this.moveItemSound.stop();
                break;
            case "spiderSound":
                this.spiderSound.stop();
                break;
            case "hmmSound":
                this.hmmSound.stop();
                break;
            default:
                break;
        }
    };
    AudioManager.prototype.stopAllSound = function () {
        this.nhoMun2Sound.stop();
        this.nhoMun1Sound.stop();
        this.DoneStepSound.stop();
        this.FaceWashSound.stop();
        this.moveItemSound.stop();
        this.bgSound.stop();
        this.spiderSound.stop();
        this.hmmSound.stop();
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
    ], AudioManager.prototype, "moveItemSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "DoneStepSound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun1Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "nhoMun2Sound", void 0);
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "FaceWashSound", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbHVnaW5cXEF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpR0M7UUEvRkcsU0FBUztRQUVULGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRXJDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDOztJQStFekMsQ0FBQztJQTVFVSxnQ0FBUyxHQUFoQixVQUFpQixTQUFpQjtRQUM5QixJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwRSxRQUFRLFNBQVMsRUFBRTtnQkFDZixLQUFLLFNBQVM7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEIsTUFBTTtnQkFDTixLQUFLLGVBQWU7b0JBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzFCLE1BQU07Z0JBQ2QsS0FBSyxjQUFjO29CQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1YsS0FBSyxjQUFjO29CQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3pCLE1BQU07Z0JBQ1Ys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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIHNvdW5kIFxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYmdTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgc3BpZGVyU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIGhtbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBtb3ZlSXRlbVNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBEb25lU3RlcFNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXHJcbiAgICBuaG9NdW4xU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb1NvdXJjZSlcclxuICAgIG5ob011bjJTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgRmFjZVdhc2hTb3VuZDogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheVNvdW5kKHNvdW5kTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvbnN0YW50cy5pcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNvbnN0YW50cy5pcm9uU291cmNlLmlzRW5kR2FtZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNvdW5kTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJnU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGYWNlV2FzaFNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRmFjZVdhc2hTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5ob011bjFTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuaG9NdW4yU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRG9uZVN0ZXBTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRG9uZVN0ZXBTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibW92ZUl0ZW1Tb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZUl0ZW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiaG1tU291bmRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhtbVNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzcGlkZXJTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpZGVyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0b3BTb3VuZChzb3VuZE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoc291bmROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJiZ1NvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRmFjZVdhc2hTb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRmFjZVdhc2hTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJuaG9NdW4xU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibmhvTXVuMlNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ob011bjJTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkRvbmVTdGVwU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuRG9uZVN0ZXBTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1vdmVJdGVtU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNwaWRlclNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaWRlclNvdW5kLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaG1tU291bmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaG1tU291bmQuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdG9wQWxsU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uaG9NdW4yU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubmhvTXVuMVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLkRvbmVTdGVwU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuRmFjZVdhc2hTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlSXRlbVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmJnU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3BpZGVyU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuaG1tU291bmQuc3RvcCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
                mraid.open("https://play.google.com/store/apps/details?id=com.an.beauty.makeoverasmr");
                return;
            }
            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6449269733?mt=8");
                return;
            }
            mraid.open("https://play.google.com/store/apps/details?id=com.an.beauty.makeoverasmr");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXNEQztRQXBERyxrQkFBWSxHQUFpQixJQUFJLENBQUM7O0lBb0R0QyxDQUFDO0lBbERhLCtCQUFNLEdBQWhCO0lBRUEsQ0FBQztJQUVTLDhCQUFLLEdBQWY7UUFDSSxNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLHFCQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVuQyx5QkFBeUI7UUFDekIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbEMsT0FBTztTQUNWO1FBRUQsOEJBQThCO1FBQzlCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixPQUFPO1NBQ1Y7UUFFRCxrQ0FBa0M7UUFDbEMsSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsMEVBQTBFLENBQUMsQ0FBQztnQkFDdkYsT0FBTzthQUNWO1lBRUQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPO2FBQ1Y7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLDBFQUEwRSxDQUFDLENBQUM7WUFDdkYsT0FBTztTQUNWO1FBQ0QsMkVBQTJFO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzt3REFDVztJQUZ6QixjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdERtQyxFQUFFLENBQUMsU0FBUyxHQXNEL0M7QUF0RFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbiBcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEdhbWVDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShBdWRpb01hbmFnZXIpXHJcbiAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YWxsSGFuZGxlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5zdGFsbFwiKTtcclxuICAgICAgICBDb25zdGFudHMuaXJvblNvdXJjZS5pc0VuZEdhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcblxyXG4gICAgICAgIC8vSWYgYWQgbmV0d29yayBpcyB0aWt0b2tcclxuICAgICAgICBpZiAodHlwZW9mIChwbGF5YWJsZVNESykgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3aW5kb3cucGxheWFibGVTREsub3BlbkFwcFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgaXMgZ29vZ2xlIGFkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgKEV4aXRBcGkpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGRhcGkub3BlblN0b3JlVXJsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdvcmsgc3VwcG9ydCBNUkFJRCAyLjBcclxuICAgICAgICBpZiAodHlwZW9mKG1yYWlkKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5BTkRST0lEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5hbi5iZWF1dHkubWFrZW92ZXJhc21yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDY0NDkyNjk3MzM/bXQ9OFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uYW4uYmVhdXR5Lm1ha2VvdmVyYXNtclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIG1pbmR3b3JrLiB3aW5kb3cgYWx3YXkgYXZhaWFibGUgc28gc2tpcCB1bmRlZmluZWQgY2hlY2tcclxuICAgICAgICB3aW5kb3cuaW5zdGFsbCAmJiB3aW5kb3cuaW5zdGFsbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
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
        _this.star = null;
        _this.touchArea = null;
        // Tools
        _this.hand = null;
        _this.scratchAble = null;
        // state
        _this.trackEnTry = null;
        _this.isDoneScratchAble = false;
        _this.activeCTA = false;
        _this.CTA_steps = 0;
        _this.CTA_thumbnail = null;
        _this.CTA_isBtn = false;
        _this.CTA_anyThumbnail = true;
        return _this;
    }
    GamePlay.prototype.onLoad = function () {
    };
    GamePlay.prototype.start = function () {
        this.NodeContainer.CTA.active = false;
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.scaleToDollNose();
    };
    GamePlay.prototype.scaleToDollNose = function () {
        var _this = this;
        var DollCurrentPos = this.NodeContainer.Doll.getPosition();
        this.scheduleOnce(function () {
            cc.tween(_this.NodeContainer.Doll)
                .to(1, { y: DollCurrentPos.y - 100, scale: 1.4 })
                .call(function () {
                constants_1.Constants.isCanTouch = true;
                _this.showTools(_this.NodeContainer.Flow1_Tool, false);
            })
                .start();
        }, 1.5);
    };
    GamePlay.prototype.scaleOutToDollFace = function () {
        var _this = this;
        var DollCurrentPos = this.NodeContainer.Doll.getPosition();
        cc.tween(this.NodeContainer.Doll)
            .to(1, { y: DollCurrentPos.y + 40, scale: 1.2 })
            .call(function () {
            constants_1.Constants.isCanTouch = true;
            _this.showTools(_this.NodeContainer.Flow2_spineTool, true);
            _this.showTowel();
        })
            .start();
    };
    GamePlay.prototype.showHint = function () {
        this.NodeContainer.Hand.active = true;
        this.NodeContainer.Hand.getComponent(cc.Animation).play();
    };
    GamePlay.prototype.debug = function () {
        // flow 2
        this.showTools(this.NodeContainer.Flow2_spineTool, true);
        this.NodeContainer.ToolArea = this.NodeContainer.Flow2_Tool;
        constants_1.Constants.isDoneStep1 = true;
        this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Intro", false);
        // hide tear
        // this.NodeContainer.Tears.forEach(node => this.hideAnim(node))
        // show tools
        // this.showTools(this.NodeContainer.Tool, true);
        // CTA anim
        // this.activeCTAAnim();
    };
    GamePlay.prototype.hideTears = function () {
        // this.AudioManager.playSound(Constants.SoundTrack.crySound);
        // this.scheduleOnce(() => {this.NodeContainer.Tears.forEach(node => this.hideAnim(node));}, 1.5);
        // this.scheduleOnce(() => { this.AudioManager.playSound(Constants.SoundTrack.screamHoooSound);}, 2.5);
    };
    GamePlay.prototype.activeCTAAnim = function () {
        var _this = this;
        this.NodeContainer.CTA.active = true;
        this.CTA_thumbnail = this.NodeContainer.CTA_logo;
        cc.tween(this.NodeContainer.CTA_overlay)
            .to(0.5, { opacity: 150 })
            .call(function () {
            _this.showThumbnailTween(_this.CTA_thumbnail, _this.CTA_anyThumbnail, _this.CTA_isBtn);
        })
            .start();
    };
    GamePlay.prototype.showThumbnailTween = function (thumbnail, anyThumbnail, isBtn) {
        var _this = this;
        switch (this.CTA_steps) {
            case 0:
                this.CTA_thumbnail = this.NodeContainer.CTA_logo;
                break;
            case 1:
                this.CTA_thumbnail = this.NodeContainer.CTA_icon;
                break;
            case 2:
                this.CTA_thumbnail = this.NodeContainer.CTA_Btn;
                this.CTA_anyThumbnail = false;
                this.CTA_isBtn = true;
                break;
            default:
                break;
        }
        this.CTA_steps += 1;
        cc.tween(thumbnail)
            .to(0.5, { opacity: 255 })
            .call(function () {
            anyThumbnail && _this.showThumbnailTween(_this.CTA_thumbnail, _this.CTA_anyThumbnail, _this.CTA_isBtn);
            isBtn && _this.activeBtnTween(_this.CTA_thumbnail);
        }).start();
    };
    GamePlay.prototype.activeBtnTween = function (btn) {
        cc.tween(btn)
            .repeatForever(cc.tween(btn)
            .to(0.5, { scale: 0.45 })
            .to(0.5, { scale: 0.5 }, { easing: cc.easing.elasticOut })).start();
    };
    GamePlay.prototype.hideAnim = function (node) {
        cc.tween(node)
            .to(0.5, { opacity: 0 })
            .start();
    };
    GamePlay.prototype.showTools = function (tool, isActive) {
        var _this = this;
        tool.opacity = 0;
        if (!isActive)
            tool.active = true;
        constants_1.Constants.isCanTouch = true;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.moveItemSound);
        var position = tool.getPosition();
        tool.setPosition(position.x - 30, position.y);
        cc.tween(tool)
            .to(0.5, { x: position.x, opacity: 255 })
            .call(function () {
            if (constants_1.Constants.isDoneStep1) {
                _this.showHint();
                return;
            }
            else {
                _this.showHint();
                _this.NodeContainer.Hint_Circle.active = true;
                _this.NodeContainer.Hint_Circle.getComponent(cc.Animation).play();
            }
        })
            .start();
        // this.showHint();
    };
    GamePlay.prototype.checkCollideAcne = function () {
        var _this = this;
        var toolHead = this.NodeContainer.Flow1_ToolHead.getBoundingBox();
        var _loop_1 = function (index) {
            var area = this_1.NodeContainer.Flow1_Areas[index];
            var areaBdx = area.getBoundingBox();
            if (areaBdx.intersects(toolHead)) {
                this_1.playNhoMunSound();
                constants_1.Constants.isCanTouch = false;
                constants_1.Constants.AcneRemoved += 1;
                if (constants_1.Constants.AcneRemoved >= 4)
                    constants_1.Constants.isDoneStep1 = true;
                var removeSpine = area.getChildByName("Remove_spine").getComponent(sp.Skeleton);
                var spineCream_1 = area.getChildByName("cream").getComponent(sp.Skeleton);
                removeSpine.node.active = true;
                this_1.NodeContainer.Flow1_Tool.active = false;
                this_1.NodeContainer.Flow1_Tool.opacity = 0;
                this_1.NodeContainer.Flow1_Tool.setPosition(this_1.NodeContainer.initPosTool_Flow1);
                this_1.trackEnTry = removeSpine.setAnimation(0, "action01_squeze02", false);
                this_1.scheduleOnce(function () {
                    var number = area.name.match(/\d+/)[0];
                    _this.NodeContainer.Doll.getChildByName("Nose").getChildByName("4acne_" + number).active = false;
                    spineCream_1.setAnimation(0, "action02_cream_scar", false);
                }, 2);
                this_1.setCompleteSpine(removeSpine, index);
            }
        };
        var this_1 = this;
        for (var index = 0; index < this.NodeContainer.Flow1_Areas.length; index++) {
            _loop_1(index);
        }
    };
    GamePlay.prototype.setCompleteSpine = function (removeSpine, index) {
        var _this = this;
        removeSpine.setCompleteListener(function (track) {
            if (track.animation.name === "action01_squeze02") {
                _this.NodeContainer.Flow1_Areas.splice(index, 1);
                _this.doneFlowAndShowNextOption();
            }
        });
    };
    GamePlay.prototype.playNhoMunSound = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun1Sound);
        }, 1);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.nhoMun2Sound);
        }, 1.5);
        this.scheduleOnce(function () {
            _this.AudioManager.playSound(constants_1.Constants.SoundTrack.spiderSound);
        }, 2);
    };
    GamePlay.prototype.getCurentTimeOfTrack = function () {
        // if(this.trackEnTry) {
        //   if(this.trackEnTry.trackTime >= 1.2 && !this.isActiveRemoveSound1) {
        //     this.isActiveRemoveSound1 = true;
        //     this.NodeContainer.Fly.active = false;
        //     this.NodeContainer.Delight_EyeFly.active = false;
        //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun1Sound);
        //   }
        //   if(this.trackEnTry.trackTime >= 1.5 && !this.isActiveRemoveSound2) {
        //     this.isActiveRemoveSound2 = true;
        //     this.NodeContainer.Fly.active = false;
        //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
        //   }
        //   if(this.trackEnTry.trackTime >= 2 && !this.isActiveRemoveSound3) {
        //     this.isActiveRemoveSound3 = true;
        //     this.NodeContainer.Fly.active = false;
        //     this.AudioManager.playSound(Constants.SoundTrack.nhoMun2Sound);
        //   }
        //   if(this.trackEnTry.trackTime >= 2.5) {
        //     this.isActiveRemoveSound4 = true;
        //     this.AudioManager.playSound(Constants.SoundTrack.gapRuoiSound);
        //   }
        // }
    };
    GamePlay.prototype.doneFlowAndShowNextOption = function () {
        var _this = this;
        this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
        this.star.getComponent(cc.Animation).play("StarAnim");
        if (constants_1.Constants.isDoneStep1) {
            this.scheduleOnce(function () {
                _this.scaleOutToDollFace();
            }, 2);
            return;
        }
        ;
        this.scheduleOnce(function () {
            _this.showTools(_this.NodeContainer.Flow1_Tool, false);
        }, 1.5);
    };
    GamePlay.prototype.showTowel = function () {
        this.touchArea.getComponent("TouchAreaController").registerNewEvent();
        this.showTools(this.NodeContainer.Flow2_spineTool, true);
        constants_1.Constants.isCanTouch = true;
        this.NodeContainer.ToolArea = this.NodeContainer.Flow2_Tool;
        // Constants.isDoneStep1 = true;
        this.NodeContainer.Flow2_spineTool.getComponent(sp.Skeleton).setAnimation(0, "Intro", false);
    };
    GamePlay.prototype.checkDoneMask = function () {
        if (this.scratchAble.getComponent("Scratchable").isWin) {
            this.AudioManager.stopSound(constants_1.Constants.SoundTrack.FaceWashSound);
            this.scratchAble.active = false;
            this.NodeContainer.Flow2_Tool.active = false;
            this.NodeContainer.Flow2_spineTool.active = false;
            this.isDoneScratchAble = true;
            this.star.getComponent(cc.Animation).play("StarAnim");
            this.AudioManager.playSound(constants_1.Constants.SoundTrack.DoneStepSound);
            this.NodeContainer.Doll_Mask.active = true;
            this.showDollBeautyFace();
        }
    };
    GamePlay.prototype.showDollBeautyFace = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.NodeContainer.Doll_Bandage.active = true;
            _this.NodeContainer.Doll_Face.setAnimation(0, "idle03", true);
        }, 1);
        this.scheduleOnce(function () {
            cc.tween(_this.NodeContainer.Doll_Mask)
                .to(1, { opacity: 0 })
                .call(function () { return _this.AudioManager.playSound(constants_1.Constants.SoundTrack.hmmSound); })
                .start();
        }, 3);
        this.scheduleOnce(function () {
            _this.NodeContainer.CTA.active = true;
        }, 5.5);
    };
    GamePlay.prototype.update = function (dt) {
        !this.isDoneScratchAble && this.checkDoneMask();
        // !this.isActiveRemoveSound4 && this.getCurentTimeOfTrack();
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
    ], GamePlay.prototype, "star", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "touchArea", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "hand", void 0);
    __decorate([
        property(cc.Node)
    ], GamePlay.prototype, "scratchAble", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyXFxHYW1lUGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxpREFBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFxWUM7UUFuWUMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFFBQVE7UUFFUixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLFFBQVE7UUFDUixnQkFBVSxHQUF3QixJQUFJLENBQUM7UUFFdkMsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1FBRW5DLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUF3V25DLENBQUM7SUFyV1cseUJBQU0sR0FBaEI7SUFDQSxDQUFDO0lBR1Msd0JBQUssR0FBZjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFdEMsNkRBQTZEO1FBRTdELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR08sa0NBQWUsR0FBdkI7UUFBQSxpQkFhQztRQVpDLElBQU0sY0FBYyxHQUFHLElBQUks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QUFELGVBQUM7Q0FyWUQsQUFxWUMsQ0FyWXFDLEVBQUUsQ0FBQyxTQUFTLEdBcVlqRDtrQkFyWW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vRGF0YS9jb25zdGFudHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vUGx1Z2luL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVDb250cm9sbGVyXCI7XHJcbmltcG9ydCBOb2RlQ29udGFpbmVyIGZyb20gXCIuL05vZGVDb250YW5pZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGxheSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5KEF1ZGlvTWFuYWdlcilcclxuICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KEdhbWVDb250cm9sbGVyKVxyXG4gIEdhbWVDb250cm9sbGVyOiBHYW1lQ29udHJvbGxlciA9IG51bGw7XHJcbiAgQHByb3BlcnR5KE5vZGVDb250YWluZXIpXHJcbiAgTm9kZUNvbnRhaW5lcjogTm9kZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHN0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHRvdWNoQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIC8vIFRvb2xzXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgaGFuZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgc2NyYXRjaEFibGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgLy8gc3RhdGVcclxuICB0cmFja0VuVHJ5OiBzcC5zcGluZS5UcmFja0VudHJ5ID0gbnVsbDtcclxuXHJcbiAgaXNEb25lU2NyYXRjaEFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgYWN0aXZlQ1RBOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQ1RBX3N0ZXBzOiBudW1iZXIgPSAwO1xyXG4gIENUQV90aHVtYm5haWw6IGNjLk5vZGUgPSBudWxsO1xyXG4gIENUQV9pc0J0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIENUQV9hbnlUaHVtYm5haWw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuXHJcbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuQ1RBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAvLyB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suYmdTb3VuZCk7XHJcblxyXG4gICAgdGhpcy5zY2FsZVRvRG9sbE5vc2UoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNjYWxlVG9Eb2xsTm9zZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IERvbGxDdXJyZW50UG9zID0gdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGwuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsKVxyXG4gICAgICAudG8oMSwge3k6IERvbGxDdXJyZW50UG9zLnkgLSAxMDAsIHNjYWxlOiAxLjR9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfVG9vbCwgZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpO1xyXG4gICAgfSwgMS41KVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2NhbGVPdXRUb0RvbGxGYWNlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgRG9sbEN1cnJlbnRQb3MgPSB0aGlzLk5vZGVDb250YWluZXIuRG9sbC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIGNjLnR3ZWVuKHRoaXMuTm9kZUNvbnRhaW5lci5Eb2xsKVxyXG4gICAgLnRvKDEsIHt5OiBEb2xsQ3VycmVudFBvcy55ICsgNDAsIHNjYWxlOiAxLjJ9KVxyXG4gICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfc3BpbmVUb29sLCB0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Rvd2VsKCk7XHJcbiAgICB9KVxyXG4gICAgLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNob3dIaW50KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuSGFuZC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICB9ICBcclxuXHJcblxyXG4gIHByaXZhdGUgZGVidWcoKTogdm9pZCB7XHJcbiAgICAvLyBmbG93IDJcclxuICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wsIHRydWUpO1xyXG5cclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5Ub29sQXJlYSA9IHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9Ub29sO1xyXG4gICAgQ29uc3RhbnRzLmlzRG9uZVN0ZXAxID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJbnRyb1wiLCBmYWxzZSlcclxuXHJcbiAgICAvLyBoaWRlIHRlYXJcclxuICAgIC8vIHRoaXMuTm9kZUNvbnRhaW5lci5UZWFycy5mb3JFYWNoKG5vZGUgPT4gdGhpcy5oaWRlQW5pbShub2RlKSlcclxuXHJcbiAgICAvLyBzaG93IHRvb2xzXHJcbiAgICAvLyB0aGlzLnNob3dUb29scyh0aGlzLk5vZGVDb250YWluZXIuVG9vbCwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gQ1RBIGFuaW1cclxuICAgIC8vIHRoaXMuYWN0aXZlQ1RBQW5pbSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaGlkZVRlYXJzKCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmNyeVNvdW5kKTtcclxuICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHt0aGlzLk5vZGVDb250YWluZXIuVGVhcnMuZm9yRWFjaChub2RlID0+IHRoaXMuaGlkZUFuaW0obm9kZSkpO30sIDEuNSk7XHJcbiAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5zY3JlYW1Ib29vU291bmQpO30sIDIuNSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmVDVEFBbmltKCk6IHZvaWQge1xyXG4gICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5DVEFfdGh1bWJuYWlsID0gdGhpcy5Ob2RlQ29udGFpbmVyLkNUQV9sb2dvO1xyXG4gICAgXHJcbiAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuQ1RBX292ZXJsYXkpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMTUwIH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hvd1RodW1ibmFpbFR3ZWVuKHRoaXMuQ1RBX3RodW1ibmFpbCwgdGhpcy5DVEFfYW55VGh1bWJuYWlsLCB0aGlzLkNUQV9pc0J0bik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdGFydCgpXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBzaG93VGh1bWJuYWlsVHdlZW4odGh1bWJuYWlsOiBjYy5Ob2RlLCBhbnlUaHVtYm5haWw6IGJvb2xlYW4sIGlzQnRuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuQ1RBX3N0ZXBzKSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX2xvZ287XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX2ljb247XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICB0aGlzLkNUQV90aHVtYm5haWwgPSB0aGlzLk5vZGVDb250YWluZXIuQ1RBX0J0bjtcclxuICAgICAgICB0aGlzLkNUQV9hbnlUaHVtYm5haWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkNUQV9pc0J0biA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5DVEFfc3RlcHMgKz0gMTtcclxuXHJcbiAgICBjYy50d2Vlbih0aHVtYm5haWwpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICBhbnlUaHVtYm5haWwgJiYgdGhpcy5zaG93VGh1bWJuYWlsVHdlZW4odGhpcy5DVEFfdGh1bWJuYWlsLCB0aGlzLkNUQV9hbnlUaHVtYm5haWwsIHRoaXMuQ1RBX2lzQnRuKVxyXG4gICAgICAgIGlzQnRuICYmIHRoaXMuYWN0aXZlQnRuVHdlZW4odGhpcy5DVEFfdGh1bWJuYWlsKVxyXG4gICAgICB9XHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFjdGl2ZUJ0blR3ZWVuKGJ0bjogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICBjYy50d2VlbihidG4pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjQ1IH0pXHJcbiAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljT3V0IH0pXHJcbiAgICAgICkuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGhpZGVBbmltKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAuc3RhcnQoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dUb29scyh0b29sOiBjYy5Ob2RlLCBpc0FjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG5cclxuICAgIHRvb2wub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgaWYgKCFpc0FjdGl2ZSkgdG9vbC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIENvbnN0YW50cy5pc0NhblRvdWNoID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2subW92ZUl0ZW1Tb3VuZCk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gdG9vbC5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIHRvb2wuc2V0UG9zaXRpb24ocG9zaXRpb24ueCAtIDMwLCBwb3NpdGlvbi55KTtcclxuXHJcbiAgICBjYy50d2Vlbih0b29sKVxyXG4gICAgICAudG8oMC41LCB7IHg6IHBvc2l0aW9uLngsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzRG9uZVN0ZXAxKSB7XHJcblxyXG4gICAgICAgICAgdGhpcy5zaG93SGludCgpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0hpbnQoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuSGludF9DaXJjbGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkhpbnRfQ2lyY2xlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAvLyB0aGlzLnNob3dIaW50KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGNoZWNrQ29sbGlkZUFjbmUoKTogdm9pZCB7XHJcbiAgICBsZXQgdG9vbEhlYWQgPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfVG9vbEhlYWQuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX0FyZWFzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBhcmVhID0gdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX0FyZWFzW2luZGV4XTtcclxuICAgICAgY29uc3QgYXJlYUJkeCA9IGFyZWEuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICAgIGlmICggYXJlYUJkeC5pbnRlcnNlY3RzKHRvb2xIZWFkKSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5TmhvTXVuU291bmQoKTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLmlzQ2FuVG91Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgQ29uc3RhbnRzLkFjbmVSZW1vdmVkICs9IDE7IFxyXG5cclxuICAgICAgICBpZihDb25zdGFudHMuQWNuZVJlbW92ZWQgPj0gNCkgQ29uc3RhbnRzLmlzRG9uZVN0ZXAxID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlU3BpbmUgPSBhcmVhLmdldENoaWxkQnlOYW1lKFwiUmVtb3ZlX3NwaW5lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwaW5lQ3JlYW0gPSBhcmVhLmdldENoaWxkQnlOYW1lKFwiY3JlYW1cIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuXHJcbiAgICAgICAgcmVtb3ZlU3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzFfVG9vbC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX1Rvb2wub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sLnNldFBvc2l0aW9uKHRoaXMuTm9kZUNvbnRhaW5lci5pbml0UG9zVG9vbF9GbG93MSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhY2tFblRyeSA9IHJlbW92ZVNwaW5lLnNldEFuaW1hdGlvbigwLCBcImFjdGlvbjAxX3NxdWV6ZTAyXCIsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IG51bWJlciA9IGFyZWEubmFtZS5tYXRjaCgvXFxkKy8pWzBdOyBcclxuXHJcbiAgICAgICAgICB0aGlzLk5vZGVDb250YWluZXIuRG9sbC5nZXRDaGlsZEJ5TmFtZShcIk5vc2VcIikuZ2V0Q2hpbGRCeU5hbWUoYDRhY25lXyR7bnVtYmVyfWApLmFjdGl2ZSA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgc3BpbmVDcmVhbS5zZXRBbmltYXRpb24oMCwgXCJhY3Rpb24wMl9jcmVhbV9zY2FyXCIsIGZhbHNlKTtcclxuICAgICAgICB9LCAyKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb21wbGV0ZVNwaW5lKHJlbW92ZVNwaW5lLCBpbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIHByaXZhdGUgc2V0Q29tcGxldGVTcGluZShyZW1vdmVTcGluZTogc3AuU2tlbGV0b24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHJlbW92ZVNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrOiBzcC5zcGluZS5UcmFja0VudHJ5KSA9PiB7XHJcbiAgICAgIGlmKHRyYWNrLmFuaW1hdGlvbi5uYW1lID09PSBcImFjdGlvbjAxX3NxdWV6ZTAyXCIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cxX0FyZWFzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMuZG9uZUZsb3dBbmRTaG93TmV4dE9wdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0gXHJcblxyXG5cclxuICBwcml2YXRlIHBsYXlOaG9NdW5Tb3VuZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjFTb3VuZCk7XHJcbiAgICB9LCAxKVxyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICB9LCAxLjUpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suc3BpZGVyU291bmQpO1xyXG4gICAgfSwgMilcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldEN1cmVudFRpbWVPZlRyYWNrKCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGlmKHRoaXMudHJhY2tFblRyeSkge1xyXG4gICAgLy8gICBpZih0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuMiAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMSkge1xyXG4gICAgLy8gICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDEgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRlbGlnaHRfRXllRmx5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuU291bmRUcmFjay5uaG9NdW4xU291bmQpO1xyXG4gICAgLy8gICB9XHJcblxyXG4gICAgLy8gICBpZih0aGlzLnRyYWNrRW5UcnkudHJhY2tUaW1lID49IDEuNSAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMikge1xyXG4gICAgLy8gICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDIgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGlmKHRoaXMudHJhY2tFblRyeS50cmFja1RpbWUgPj0gMiAmJiAhdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kMykge1xyXG4gICAgLy8gICAgIHRoaXMuaXNBY3RpdmVSZW1vdmVTb3VuZDMgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLm5ob011bjJTb3VuZCk7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICAvLyAgIGlmKHRoaXMudHJhY2tFblRyeS50cmFja1RpbWUgPj0gMi41KSB7XHJcbiAgICAvLyAgICAgdGhpcy5pc0FjdGl2ZVJlbW92ZVNvdW5kNCA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLmdhcFJ1b2lTb3VuZCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGRvbmVGbG93QW5kU2hvd05leHRPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRG9uZVN0ZXBTb3VuZCk7XHJcbiAgICB0aGlzLnN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJBbmltXCIpO1xyXG4gICAgXHJcbiAgICBpZihDb25zdGFudHMuaXNEb25lU3RlcDEpIHtcclxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2NhbGVPdXRUb0RvbGxGYWNlKCk7XHJcbiAgICAgIH0sIDIpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd1Rvb2xzKHRoaXMuTm9kZUNvbnRhaW5lci5GbG93MV9Ub29sLCBmYWxzZSk7XHJcbiAgICB9LCAxLjUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgc2hvd1Rvd2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaEFyZWEuZ2V0Q29tcG9uZW50KFwiVG91Y2hBcmVhQ29udHJvbGxlclwiKS5yZWdpc3Rlck5ld0V2ZW50KCk7XHJcblxyXG4gICAgdGhpcy5zaG93VG9vbHModGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX3NwaW5lVG9vbCwgdHJ1ZSk7XHJcbiAgICBDb25zdGFudHMuaXNDYW5Ub3VjaCA9IHRydWU7XHJcbiAgICB0aGlzLk5vZGVDb250YWluZXIuVG9vbEFyZWEgPSB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfVG9vbDtcclxuICAgIFxyXG4gICAgLy8gQ29uc3RhbnRzLmlzRG9uZVN0ZXAxID0gdHJ1ZTtcclxuICAgIHRoaXMuTm9kZUNvbnRhaW5lci5GbG93Ml9zcGluZVRvb2wuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJbnRyb1wiLCBmYWxzZSlcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGNoZWNrRG9uZU1hc2soKTogdm9pZCB7XHJcbiAgICBpZih0aGlzLnNjcmF0Y2hBYmxlLmdldENvbXBvbmVudChcIlNjcmF0Y2hhYmxlXCIpLmlzV2luKSB7XHJcblxyXG4gICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wU291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suRmFjZVdhc2hTb3VuZCk7XHJcblxyXG4gICAgICB0aGlzLnNjcmF0Y2hBYmxlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkZsb3cyX1Rvb2wuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLk5vZGVDb250YWluZXIuRmxvdzJfc3BpbmVUb29sLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5pc0RvbmVTY3JhdGNoQWJsZSA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnN0YXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIlN0YXJBbmltXCIpO1xyXG5cclxuICAgICAgdGhpcy5BdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5Tb3VuZFRyYWNrLkRvbmVTdGVwU291bmQpO1xyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfTWFzay5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zaG93RG9sbEJlYXV0eUZhY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNob3dEb2xsQmVhdXR5RmFjZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfQmFuZGFnZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkRvbGxfRmFjZS5zZXRBbmltYXRpb24oMCwgXCJpZGxlMDNcIiwgdHJ1ZSlcclxuICAgIH0sIDEpXHJcblxyXG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICBjYy50d2Vlbih0aGlzLk5vZGVDb250YWluZXIuRG9sbF9NYXNrKVxyXG4gICAgICAudG8oMSwge29wYWNpdHk6IDB9KVxyXG4gICAgICAuY2FsbCgoKSA9PiB0aGlzLkF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLlNvdW5kVHJhY2suaG1tU291bmQpKVxyXG4gICAgICAuc3RhcnQoKTtcclxuICAgIH0sIDMpO1xyXG5cclxuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgdGhpcy5Ob2RlQ29udGFpbmVyLkNUQS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSwgNS41KVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAhdGhpcy5pc0RvbmVTY3JhdGNoQWJsZSAmJiB0aGlzLmNoZWNrRG9uZU1hc2soKTtcclxuICAgIC8vICF0aGlzLmlzQWN0aXZlUmVtb3ZlU291bmQ0ICYmIHRoaXMuZ2V0Q3VyZW50VGltZU9mVHJhY2soKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
