"use strict";
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