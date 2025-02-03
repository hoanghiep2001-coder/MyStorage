
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controllers/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b971rSQ9pBYKEyKcsXS1Zx', 'GameController');
// Script/Controllers/GameController.js

"use strict";

var GameInfo = require("GameInfo");

var AudioManager = require("AudioManager");

var CONST = require("../Const/CONST");

cc.Class({
  "extends": cc.Component,
  properties: {
    InstallPopup: cc.Node,
    ChangeYourOrientation: cc.Node,
    AudioManager: AudioManager // Dhhiep

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true; // manager.enabledDebugDraw = true;

    var physics_manager = cc.director.getPhysicsManager();
    physics_manager.enabled = true;
    physics_manager.gravity = cc.v2(0, -2000);
    this._changeOrientation = false;
    this._lastOrientationIsLandscape = true;
  },
  start: function start() {
    var _this = this;

    // this.InstallPopup.active = false;
    window.gameReady && window.gameReady();
    this.AudioManager.bgSound.play();
    this.handleYourOrientation();
    cc.view.setResizeCallback(function () {
      _this.handleYourOrientation();
    });
  },
  handleIronSourcePlaySound: function handleIronSourcePlaySound() {
    if (CONST.IronSource.isPlayBgSound) {
      return;
    }

    if (CONST.IronSource.SoundState) {
      this.AudioManager.bgSound.play();
    }

    CONST.IronSource.isPlayBgSound = true;
  },
  handleMuteSoundIronSource: function handleMuteSoundIronSource() {
    CONST.IronSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);

    if (CONST.IronSource.State) {
      if (CONST.IronSource.State === 1 && !CONST.IronSource.SoundState && !CONST.IronSource.isEndGame) {
        CONST.IronSource.SoundState = true;
        this.AudioManager.bgSound.play();
      }

      if (CONST.IronSource.State === 2 && CONST.IronSource.SoundState) {
        CONST.IronSource.SoundState = false;
        this.AudioManager.stopAllSound();
      }
    }
  },
  showPopupInstall: function showPopupInstall() {
    this.InstallPopup.active = true;
    this.InstallPopup.setPosition(0, 0);
  },
  // node build-inline.js unity
  handleYourOrientation: function handleYourOrientation() {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      this.ChangeYourOrientation.active = false;
      GameInfo.GamePause = false;
    } else {
      this.ChangeYourOrientation.active = true;
      GameInfo.GamePause = true;
    }
  },
  update: function update(dt) {
    if (window.isHitArrow) {
      window.isHitArrow = false;
      this.AudioManager.hitBowSound.play();
    } // ironsource
    // this.handleMuteSoundIronSource();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyc1xcR2FtZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiR2FtZUluZm8iLCJyZXF1aXJlIiwiQXVkaW9NYW5hZ2VyIiwiQ09OU1QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkluc3RhbGxQb3B1cCIsIk5vZGUiLCJDaGFuZ2VZb3VyT3JpZW50YXRpb24iLCJvbkxvYWQiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInBoeXNpY3NfbWFuYWdlciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZ3Jhdml0eSIsInYyIiwiX2NoYW5nZU9yaWVudGF0aW9uIiwiX2xhc3RPcmllbnRhdGlvbklzTGFuZHNjYXBlIiwic3RhcnQiLCJ3aW5kb3ciLCJnYW1lUmVhZHkiLCJiZ1NvdW5kIiwicGxheSIsImhhbmRsZVlvdXJPcmllbnRhdGlvbiIsInZpZXciLCJzZXRSZXNpemVDYWxsYmFjayIsImhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQiLCJJcm9uU291cmNlIiwiaXNQbGF5QmdTb3VuZCIsIlNvdW5kU3RhdGUiLCJoYW5kbGVNdXRlU291bmRJcm9uU291cmNlIiwiU3RhdGUiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpc0VuZEdhbWUiLCJzdG9wQWxsU291bmQiLCJzaG93UG9wdXBJbnN0YWxsIiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJnZXRGcmFtZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsIkdhbWVQYXVzZSIsInVwZGF0ZSIsImR0IiwiaXNIaXRBcnJvdyIsImhpdEJvd1NvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUE1Qjs7QUFDQSxJQUFNRSxL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QW1FYTtBQUNkLFNBQUtqQyxZQUFMLENBQWtCa0MsTUFBbEIsR0FBMkIsSUFBM0I7QUFDQSxTQUFLbEMsWUFBTCxDQUFrQm1DLFdBQWxCLENBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBQ0gsR0F0RUk7QUF1RVQ7QUFDSWhCLEVBQUFBLHFCQXhFSyxtQ0F3RWtCO0FBQ25CLFFBQUd2QixFQUFFLENBQUN3QixJQUFILENBQVFnQixZQUFSLEdBQXVCQyxLQUF2QixHQUErQnpDLEVBQUUsQ0FBQ3dCLElBQUgsQ0FBUWdCLFlBQVIsR0FBdUJFLE1BQXpELEVBQWdFO0FBQzVELFdBQUtwQyxxQkFBTCxDQUEyQmdDLE1BQTNCLEdBQW9DLEtBQXBDO0FBQ0ExQyxNQUFBQSxRQUFRLENBQUMrQyxTQUFULEdBQXFCLEtBQXJCO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsV0FBS3JDLHFCQUFMLENBQTJCZ0MsTUFBM0IsR0FBb0MsSUFBcEM7QUFDQTFDLE1BQUFBLFFBQVEsQ0FBQytDLFNBQVQsR0FBcUIsSUFBckI7QUFDSDtBQUNKLEdBaEZJO0FBbUZMQyxFQUFBQSxNQW5GSyxrQkFtRkdDLEVBbkZILEVBbUZPO0FBQ1IsUUFBRzFCLE1BQU0sQ0FBQzJCLFVBQVYsRUFBc0I7QUFDbEIzQixNQUFBQSxNQUFNLENBQUMyQixVQUFQLEdBQW9CLEtBQXBCO0FBQ0EsV0FBS2hELFlBQUwsQ0FBa0JpRCxXQUFsQixDQUE4QnpCLElBQTlCO0FBQ0gsS0FKTyxDQU1SO0FBQ0E7O0FBQ0g7QUEzRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZUluZm8gPSByZXF1aXJlKFwiR2FtZUluZm9cIik7XHJcbmNvbnN0IEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCJBdWRpb01hbmFnZXJcIik7XHJcbmNvbnN0IENPTlNUID0gcmVxdWlyZShcIi4uL0NvbnN0L0NPTlNUXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBJbnN0YWxsUG9wdXA6IGNjLk5vZGUsXHJcbiAgICAgICAgQ2hhbmdlWW91ck9yaWVudGF0aW9uOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlcixcclxuICAgICAgICAvLyBEaGhpZXBcclxuICAgIH0sXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHBoeXNpY3NfbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKClcclxuICAgICAgICBwaHlzaWNzX21hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGh5c2ljc19tYW5hZ2VyLmdyYXZpdHkgPSBjYy52MiAoMCwgLTIwMDApO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGFuZ2VPcmllbnRhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2xhc3RPcmllbnRhdGlvbklzTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuSW5zdGFsbFBvcHVwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVlvdXJPcmllbnRhdGlvbigpO1xyXG5cclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrICgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVlvdXJPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKSB7XHJcbiAgICAgICAgaWYgKENPTlNULklyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmIChDT05TVC5Jcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIENPTlNULklyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpIHtcclxuICAgICAgICBDT05TVC5Jcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKENPTlNULklyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgIGlmIChDT05TVC5Jcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDT05TVC5Jcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNPTlNULklyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIENPTlNULklyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBpZiAoQ09OU1QuSXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDT05TVC5Jcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgQ09OU1QuSXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICBzaG93UG9wdXBJbnN0YWxsKCl7XHJcbiAgICAgICAgdGhpcy5JbnN0YWxsUG9wdXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkluc3RhbGxQb3B1cC5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIH0sXHJcbi8vIG5vZGUgYnVpbGQtaW5saW5lLmpzIHVuaXR5XHJcbiAgICBoYW5kbGVZb3VyT3JpZW50YXRpb24oKXtcclxuICAgICAgICBpZihjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLkNoYW5nZVlvdXJPcmllbnRhdGlvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgR2FtZUluZm8uR2FtZVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5DaGFuZ2VZb3VyT3JpZW50YXRpb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgR2FtZUluZm8uR2FtZVBhdXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYod2luZG93LmlzSGl0QXJyb3cpIHtcclxuICAgICAgICAgICAgd2luZG93LmlzSGl0QXJyb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuaGl0Qm93U291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==