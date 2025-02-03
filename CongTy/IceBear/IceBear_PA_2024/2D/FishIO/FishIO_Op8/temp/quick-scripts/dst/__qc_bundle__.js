
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
require('./assets/scripts/Controller/BossController');
require('./assets/scripts/Controller/CameraController');
require('./assets/scripts/Controller/EnemyController');
require('./assets/scripts/Controller/GameController');
require('./assets/scripts/Controller/PlayerController');
require('./assets/scripts/Controller/UIGameController');
require('./assets/scripts/Data/Constant');
require('./assets/scripts/Other/Enemy');
require('./assets/scripts/Other/GamePlay');
require('./assets/scripts/Other/SwordPlayer');
require('./assets/scripts/Other/TouchArea');

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
                    var __filename = 'preview-scripts/assets/scripts/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5565f30v5NC16ZUpdX+5nlp', 'GameController');
// scripts/Controller/GameController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    installPopup: cc.Node,
    installButton: cc.Button,
    touchArea: cc.Node,
    //audio
    audioClick: cc.AudioClip,
    audioAtk: cc.AudioClip,
    audioUpgrade: cc.AudioClip,
    audioWarning: cc.AudioClip,
    audioBgMusic: cc.AudioClip,
    audioEat: cc.AudioClip,
    audioBossAtk: cc.AudioClip,
    reviveSound: cc.AudioClip
  },
  onLoad: function onLoad() {
    this.installButton.node.on("click", this.installHandle, this);
  },
  start: function start() {
    window.gameReady && window.gameReady();
  },
  onFinish: function onFinish() {
    window.gameEnd && window.gameEnd();
  },
  playAudio: function playAudio(audio) {
    if (audio === this.audioClick) {
      cc.audioEngine.play(this.audioClick, false, 1);
    } else if (audio === this.audioAtk) {
      cc.audioEngine.play(this.audioAtk, false, 1);
    } else if (audio === this.reviveSound) {
      cc.audioEngine.play(this.reviveSound, false, 1);
    } else if (audio === this.audioUpgrade) {
      cc.audioEngine.play(this.audioUpgrade, false, 1);
    } else if (audio === this.audioWarning) {
      cc.audioEngine.play(this.audioWarning, false, 1);
    } else if (audio === this.audioBgMusic) {
      cc.audioEngine.play(this.audioBgMusic, true, 1);
    } else if (audio === this.audioEat) {
      cc.audioEngine.play(this.audioEat, false, 1);
    } else if (audio === this.audioBossAtk) {
      cc.audioEngine.play(this.audioBossAtk, false, 1);
    }
  },
  showPopupInstall: function showPopupInstall() {
    this.installPopup.active = true;
    cc.tween(this.node.getChildByName("InstallPopup").getChildByName("btn_Revive")).repeatForever(cc.tween(this.node.getChildByName("InstallPopup").getChildByName("btn_Revive")).to(0.5, {
      scale: 0.5
    }).to(0.5, {
      scale: 0.55
    }, {
      easing: 'elasticOut'
    })).start();
    this.touchArea.getComponent("TouchArea").registerReviveAction(); // this.onFinish();
  },
  stopAudio: function stopAudio() {
    cc.audioEngine.stopAll();
  },
  installHandle: function installHandle() {
    this.playAudio(this.audioClick);
    this.stopAudio(); //If ad network is tiktok

    if (typeof playableSDK != "undefined") {
      window.playableSDK.openAppStore();
      return;
    } // If ad network is google ads


    if (typeof ExitApi != "undefined") {
      cc.log("Call exit api");
      ExitApi.exit();
      return;
    } // If ad netwrok is ironsources


    if (typeof dapi != "undefined") {
      cc.log("Call dapi");
      dapi.openStoreUrl();
      return;
    } // If ad network support MRAID 2.0


    if (typeof mraid != "undefined") {
      if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
        mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish");
        return;
      }

      if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
        mraid.open("https://itunes.apple.com/us/com.fishio.hungryfish?mt=8"); //mraid.open("https://itunes.apple.com/us/app/id1627374569?mt=8");

        return;
      }

      mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish");
      return;
    } // If ad network is mindword. window alway avaiable so skip undefined check


    window.install && window.install();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcR2FtZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbnN0YWxsUG9wdXAiLCJOb2RlIiwiaW5zdGFsbEJ1dHRvbiIsIkJ1dHRvbiIsInRvdWNoQXJlYSIsImF1ZGlvQ2xpY2siLCJBdWRpb0NsaXAiLCJhdWRpb0F0ayIsImF1ZGlvVXBncmFkZSIsImF1ZGlvV2FybmluZyIsImF1ZGlvQmdNdXNpYyIsImF1ZGlvRWF0IiwiYXVkaW9Cb3NzQXRrIiwicmV2aXZlU291bmQiLCJvbkxvYWQiLCJub2RlIiwib24iLCJpbnN0YWxsSGFuZGxlIiwic3RhcnQiLCJ3aW5kb3ciLCJnYW1lUmVhZHkiLCJvbkZpbmlzaCIsImdhbWVFbmQiLCJwbGF5QXVkaW8iLCJhdWRpbyIsImF1ZGlvRW5naW5lIiwicGxheSIsInNob3dQb3B1cEluc3RhbGwiLCJhY3RpdmUiLCJ0d2VlbiIsImdldENoaWxkQnlOYW1lIiwicmVwZWF0Rm9yZXZlciIsInRvIiwic2NhbGUiLCJlYXNpbmciLCJnZXRDb21wb25lbnQiLCJyZWdpc3RlclJldml2ZUFjdGlvbiIsInN0b3BBdWRpbyIsInN0b3BBbGwiLCJwbGF5YWJsZVNESyIsIm9wZW5BcHBTdG9yZSIsIkV4aXRBcGkiLCJsb2ciLCJleGl0IiwiZGFwaSIsIm9wZW5TdG9yZVVybCIsIm1yYWlkIiwic3lzIiwib3MiLCJPU19BTkRST0lEIiwiQU5EUk9JRCIsIm9wZW4iLCJPU19JT1MiLCJJUEhPTkUiLCJJUEFEIiwiaW5zdGFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLFlBQVksRUFBRUosRUFBRSxDQUFDSyxJQUZUO0FBR1JDLElBQUFBLGFBQWEs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ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgaW5zdGFsbFBvcHVwOiBjYy5Ob2RlLFxyXG4gICAgICAgIGluc3RhbGxCdXR0b246IGNjLkJ1dHRvbixcclxuICAgICAgICB0b3VjaEFyZWE6IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIC8vYXVkaW9cclxuICAgICAgICBhdWRpb0NsaWNrOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgYXVkaW9BdGs6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBhdWRpb1VwZ3JhZGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBhdWRpb1dhcm5pbmc6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBhdWRpb0JnTXVzaWM6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBhdWRpb0VhdDogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIGF1ZGlvQm9zc0F0azogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHJldml2ZVNvdW5kOiBjYy5BdWRpb0NsaXAsXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmluc3RhbGxCdXR0b24ubm9kZS5vbihcImNsaWNrXCIsIHRoaXMuaW5zdGFsbEhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgd2luZG93LmdhbWVSZWFkeSAmJiB3aW5kb3cuZ2FtZVJlYWR5KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmluaXNoKCkge1xyXG4gICAgICAgIHdpbmRvdy5nYW1lRW5kICYmIHdpbmRvdy5nYW1lRW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlBdWRpbyhhdWRpbyl7XHJcbiAgICAgICAgaWYoYXVkaW8gPT09IHRoaXMuYXVkaW9DbGljayl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdWRpb0NsaWNrLCBmYWxzZSwgMSlcclxuICAgICAgICB9ZWxzZSBpZihhdWRpbyA9PT0gdGhpcy5hdWRpb0F0ayl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdWRpb0F0aywgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGF1ZGlvID09PSB0aGlzLnJldml2ZVNvdW5kKXtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5yZXZpdmVTb3VuZCwgZmFsc2UsIDEpXHJcbiAgICAgICAgfWVsc2UgaWYoYXVkaW8gPT09IHRoaXMuYXVkaW9VcGdyYWRlKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvVXBncmFkZSwgZmFsc2UsIDEpXHJcbiAgICAgICAgfWVsc2UgaWYoYXVkaW8gPT09IHRoaXMuYXVkaW9XYXJuaW5nKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvV2FybmluZywgZmFsc2UsIDEpXHJcbiAgICAgICAgfWVsc2UgaWYoYXVkaW8gPT09IHRoaXMuYXVkaW9CZ011c2ljKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvQmdNdXNpYywgdHJ1ZSwgMSlcclxuICAgICAgICB9ZWxzZSBpZihhdWRpbyA9PT0gdGhpcy5hdWRpb0VhdCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hdWRpb0VhdCwgZmFsc2UsIDEpXHJcbiAgICAgICAgfWVsc2UgaWYoYXVkaW8gPT09IHRoaXMuYXVkaW9Cb3NzQXRrKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvQm9zc0F0aywgZmFsc2UsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93UG9wdXBJbnN0YWxsKCl7XHJcbiAgICAgICAgdGhpcy5pbnN0YWxsUG9wdXAuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSW5zdGFsbFBvcHVwXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuX1Jldml2ZVwiKSlcclxuICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSW5zdGFsbFBvcHVwXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuX1Jldml2ZVwiKSlcclxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAuNSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC41NSB9LCB7IGVhc2luZzogJ2VsYXN0aWNPdXQnIH0pXHJcbiAgICAgICAgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b3VjaEFyZWEuZ2V0Q29tcG9uZW50KFwiVG91Y2hBcmVhXCIpLnJlZ2lzdGVyUmV2aXZlQWN0aW9uKCk7XHJcbiAgICAgICAgLy8gdGhpcy5vbkZpbmlzaCgpO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wQXVkaW8oKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBpbnN0YWxsSGFuZGxlICgpe1xyXG4gICAgICAgIHRoaXMucGxheUF1ZGlvKHRoaXMuYXVkaW9DbGljayk7XHJcbiAgICAgICAgdGhpcy5zdG9wQXVkaW8oKTtcclxuXHJcbiAgICAgICAgLy9JZiBhZCBuZXR3b3JrIGlzIHRpa3Rva1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHBsYXlhYmxlU0RLKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wbGF5YWJsZVNESy5vcGVuQXBwU3RvcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkNhbGwgZXhpdCBhcGlcIilcclxuICAgICAgICAgICAgRXhpdEFwaS5leGl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFkIG5ldHdyb2sgaXMgaXJvbnNvdXJjZXNcclxuICAgICAgICBpZiAodHlwZW9mIChkYXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkNhbGwgZGFwaVwiKTtcclxuICAgICAgICAgICAgZGFwaS5vcGVuU3RvcmVVcmwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBzdXBwb3J0IE1SQUlEIDIuMFxyXG4gICAgICAgIGlmICh0eXBlb2YobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmZpc2hpby5odW5ncnlmaXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2NvbS5maXNoaW8uaHVuZ3J5ZmlzaD9tdD04XCIpO1xyXG4gICAgICAgICAgICAgICAgLy9tcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDE2MjczNzQ1Njk/bXQ9OFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZmlzaGlvLmh1bmdyeWZpc2hcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yZC4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other/GamePlay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d0b2UAFNhFjZ33buq0tdva', 'GamePlay');
// scripts/Other/GamePlay.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gc: cc.Node,
    bgWarning: cc.Node,
    timeShowWarning: 8,
    boss: cc.Node,
    bgMove: cc.Node,
    isIronSource: cc.Boolean
  },
  playBgMusic: function playBgMusic() {
    if (!this.isPlayBgMusic) {
      this.gameController.playAudio(this.gameController.reviveSound);
      this.gameController.playAudio(this.gameController.audioBgMusic);
      this.isPlayBgMusic = true;
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    cc.director.getPhysicsManager().enabled = true;
    var collisionManager = cc.director.getCollisionManager();
    collisionManager.enabled = true; //collisionManager.enabledDebugDraw = true;

    this.gameController = this.gc.getComponent("GameController"); // ironSource

    this.isPlayBgMusic = false;

    if (this.isIronSource) {
      this.node.parent.on(cc.Node.EventType.TOUCH_START, function (event) {
        if (_this.isPlayBgMusic) return;

        _this.playBgMusic();
      });
    } else {
      this.playBgMusic();
    } // ----------------------

  },
  showBoss: function showBoss() {
    this.scheduleOnce(function () {
      this.gameController.playAudio(this.gameController.audioWarning);
      this.bgWarning.active = true;
      this.scheduleOnce(function () {
        this.bgWarning.active = false;
        this.boss.active = true;
      }, 3);
    }, this.timeShowWarning);
  },
  showPopupOptions: function showPopupOptions() {
    console.log("test");
  },
  start: function start() {},
  update: function update(dt) {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      this.bgMove.y = 0;
    } else {
      this.bgMove.y = -800;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXJcXEdhbWVQbGF5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2MiLCJOb2RlIiwiYmdXYXJuaW5nIiwidGltZVNob3dXYXJuaW5nIiwiYm9zcyIsImJnTW92ZSIsImlzSXJvblNvdXJjZSIsIkJvb2xlYW4iLCJwbGF5QmdNdXNpYyIsImlzUGxheUJnTXVzaWMiLCJnYW1lQ29udHJvbGxlciIsInBsYXlBdWRpbyIsInJldml2ZVNvdW5kIiwiYXVkaW9CZ011c2ljIiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJjb2xsaXNpb25NYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImdldENvbXBvbmVudCIsIm5vZGUiLCJwYXJlbnQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJzaG93Qm9zcyIsInNjaGVkdWxlT25jZSIsImF1ZGlvV2FybmluZyIsImFjdGl2ZSIsInNob3dQb3B1cE9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInZpZXciLCJnZXRGcmFtZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxFQUFFLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEQztBQUVSQyxJQUFBQSxTQUFTLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGTjtBQUdSRSxJQUFBQSxlQUFlLEVBQUUsQ0FIVDtBQUlSQyxJQUFBQSxJQUFJLEVBQUVSLEVBQUUsQ0FBQ0ssSUFKRDtBQUtSSSxJQUFBQSxNQUFNLEVBQUVULEVBQUUsQ0FBQ0ssSUFMSDtBQU1SSyxJQUFBQSxZQUFZLEVBQUVWLEVBQUUsQ0FBQ1c7QUFOVCxHQUhQO0FBYUxDLEVBQUFBLFdBYksseUJBYVM7QUFDVixRQUFJLENBQUMsS0FBS0MsYUFBVixFQUF5QjtBQUNyQixXQUFLQyxjQUFMLENBQW9CQyxTQUFwQixDQUE4QixLQUFLRCxjQUFMLENBQW9CRSxXQUFsRDtBQUNBLFdBQUtGLGNBQUwsQ0FBb0JDLFNBQXBCLENBQThCLEtBQUtELGNBQUwsQ0FBb0JHLFlBQWxEO0FBQ0EsV0FBS0osYUFBTCxHQUFxQixJQUFyQjtBQUNIO0FBQ0osR0FuQkk7QUFxQkxLLEVBQUFBLE1BckJLLG9CQXFCSTtBQUFBOztBQUNMbEIsSUFBQUEsRUFBRSxDQUFDbUIsUUFBSCxDQUFZQyxpQkFBWixHQUFnQ0MsT0FBaEMsR0FBMEMsSUFBMUM7QUFDQSxRQUFJQyxnQkFBZ0IsR0FBR3RCLEVBQUUsQ0FBQ21CLFFBQUgsQ0FBWUksbUJBQVosRUFBdkI7QUFDQUQsSUFBQUEsZ0JBQWdCLENBQUNELE9BQWpCLEdBQTJCLElBQTNCLENBSEssQ0FJTDs7QUFFQSxTQUFLUCxjQUFMLEdBQXNCLEtBQUtWLEVBQUwsQ0FBUW9CLFlBQVIsQ0FBcUIsZ0JBQXJCLENBQXRCLENBTkssQ0FRTDs7QUFDQSxTQUFLWCxhQUFMLEdBQXFCLEtBQXJCOztBQUNBLFFBQUksS0FBS0gsWUFBVCxFQUF1QjtBQUNuQixXQUFLZSxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEVBQWpCLENBQW9CM0IsRUFBRSxDQUFDSyxJQUFILENBQVF1QixTQUFSLENBQWtCQyxXQUF0QyxFQUFtRCxVQUFDQyxLQUFELEVBQVc7QUFDMUQsWUFBSSxLQUFJLENBQUNqQixhQUFULEVBQXdCOztBQUN4QixRQUFBLEtBQUksQ0FBQ0QsV0FBTDtBQUNILE9BSEQ7QUFJSCxLQUxELE1BS087QUFDSCxXQUFLQSxXQUFMO0FBQ0gsS0FqQkksQ0FrQkw7O0FBRUgsR0F6Q0k7QUEyQ0xtQixFQUFBQSxRQTNDSyxzQkEyQ007QUFDUCxTQUFLQyxZQUFMLENBQWtCLFlBQVk7QUFDMUIsV0FBS2xCLGNBQUwsQ0FBb0JDLFNBQXBCLENBQThCLEtBQUtELGNBQUwsQ0FBb0JtQixZQUFsRDtBQUNBLFdBQUszQixTQUFMLENBQWU0QixNQUFmLEdBQXdCLElBQXhCO0FBQ0EsV0FBS0YsWUFBTCxDQUFrQixZQUFZO0FBQzFCLGFBQUsxQixTQUFMLENBQWU0QixNQUFmLEdBQXdCLEtBQXhCO0FBQ0EsYUFBSzFCLElBQUwsQ0FBVTBCLE1BQVYsR0FBbUIsSUFBbkI7QUFDSCxPQUhELEVBR0csQ0FISDtBQUlILEtBUEQsRUFPRyxLQUFLM0IsZUFQUjtBQVFILEdBcERJO0FBdURMNEIsRUFBQUEsZ0JBdkRLLDhCQXVEYztBQUNmQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBRUgsR0ExREk7QUE2RExDLEVBQUFBLEtBN0RLLG1CQTZERyxDQUNQLENBOURJO0FBZ0VMQyxFQUFBQSxNQWhFSyxrQkFnRUVDLEVBaEVGLEVBZ0VNO0FBRVAsUUFBSXhDLEVBQUUsQ0FBQ3lDLElBQUgsQ0FBUUMsWUFBUixHQUF1QkMsS0FBdkIsR0FBK0IzQyxFQUFFLENBQUN5QyxJQUFILENBQVFDLFlBQVIsR0FBdUJFLE1BQTFELEVBQWtFO0FBQzlELFdBQUtuQyxNQUFMLENBQVlvQyxDQUFaLEdBQWdCLENBQWhCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS3BDLE1BQUwsQ0FBWW9DLENBQVosR0FBZ0IsQ0FBQyxHQUFqQjtBQUNIO0FBQ0o7QUF2RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGdjOiBjYy5Ob2RlLFxuICAgICAgICBiZ1dhcm5pbmc6IGNjLk5vZGUsXG4gICAgICAgIHRpbWVTaG93V2FybmluZzogOCxcbiAgICAgICAgYm9zczogY2MuTm9kZSxcbiAgICAgICAgYmdNb3ZlOiBjYy5Ob2RlLFxuICAgICAgICBpc0lyb25Tb3VyY2U6IGNjLkJvb2xlYW4sXG5cbiAgICB9LFxuXG4gICAgcGxheUJnTXVzaWMoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1BsYXlCZ011c2ljKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXlBdWRpbyh0aGlzLmdhbWVDb250cm9sbGVyLnJldml2ZVNvdW5kKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheUF1ZGlvKHRoaXMuZ2FtZUNvbnRyb2xsZXIuYXVkaW9CZ011c2ljKTtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5QmdNdXNpYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICBsZXQgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy9jb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLmdjLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpO1xuXG4gICAgICAgIC8vIGlyb25Tb3VyY2VcbiAgICAgICAgdGhpcy5pc1BsYXlCZ011c2ljID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzSXJvblNvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQbGF5QmdNdXNpYykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUJnTXVzaWMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5QmdNdXNpYygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIH0sXG5cbiAgICBzaG93Qm9zcygpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5QXVkaW8odGhpcy5nYW1lQ29udHJvbGxlci5hdWRpb1dhcm5pbmcpO1xuICAgICAgICAgICAgdGhpcy5iZ1dhcm5pbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJnV2FybmluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvc3MuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDMpO1xuICAgICAgICB9LCB0aGlzLnRpbWVTaG93V2FybmluZyk7XG4gICAgfSxcblxuXG4gICAgc2hvd1BvcHVwT3B0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICBcbiAgICB9LFxuXG5cbiAgICBzdGFydCgpIHtcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG5cbiAgICAgICAgaWYgKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggPiBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5iZ01vdmUueSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJnTW92ZS55ID0gLTgwMDtcbiAgICAgICAgfVxuICAgIH0sXG5cblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Data/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78eee14aM5NzKTN1Ih9o+kO', 'Constant');
// scripts/Data/Constant.js

"use strict";

exports.__esModule = true;
exports.Constants = void 0;
var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
var Event = {
  touchStart: "touchstart",
  touchMove: "touchmove",
  touchEnd: "touchend",
  touchCancel: "touchcancel"
};
var IronSource = {
  // ironsource 
  SoundState: true,
  State: 1,
  isEndGame: false,
  isPlayBgSound: false
};
var Responsive = {
  HORIZONTAL_IPX: "horizontal_IPX",
  HORIZONTAL_TABLET: "horizontal_Tablet",
  VERTICAL_IPX: "vertical_IPX",
  VERTICAL_MOBILE: "vertical_Mobile"
};

var Constants = function Constants() {};

exports.Constants = Constants;
Constants.isClickGameStart = false;
Constants.isPlaySound = false;
Constants.isRotate = false;
Constants.countDie = 0;
Constants.isGameStart = false;
Constants.isShowPopupOptions = false;
Constants.gameTime = 0;
Constants.Event = Event;
Constants.ironSource = IronSource;
Constants.Responsive = Responsive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGF0YVxcQ29uc3RhbnQuanMiXSwibmFtZXMiOlsiY2MiLCJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRXZlbnQiLCJ0b3VjaFN0YXJ0IiwidG91Y2hNb3ZlIiwidG91Y2hFbmQiLCJ0b3VjaENhbmNlbCIsIklyb25Tb3VyY2UiLCJTb3VuZFN0YXRlIiwiU3RhdGUiLCJpc0VuZEdhbWUiLCJpc1BsYXlCZ1NvdW5kIiwiUmVzcG9uc2l2ZSIsIkhPUklaT05UQUxfSVBYIiwiSE9SSVpPTlRBTF9UQUJMRVQiLCJWRVJUSUNBTF9JUFgiLCJWRVJUSUNBTF9NT0JJTEUiLCJDb25zdGFudHMiLCJpc0NsaWNrR2FtZVN0YXJ0IiwiaXNQbGF5U291bmQiLCJpc1JvdGF0ZSIsImNvdW50RGllIiwiaXNHYW1lU3RhcnQiLCJpc1Nob3dQb3B1cE9wdGlvbnMiLCJnYW1lVGltZSIsImlyb25Tb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQkFBOEJBLEVBQUUsQ0FBQ0MsVUFBakM7QUFBQSxJQUFRQyxPQUFSLGtCQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFFBQWpCLGtCQUFpQkEsUUFBakI7QUFFQSxJQUFNQyxLQUFLLEdBQUc7QUFDVkMsRUFBQUEsVUFBVSxFQUFFLFlBREY7QUFFVkMsRUFBQUEsU0FBUyxFQUFFLFdBRkQ7QUFHVkMsRUFBQUEsUUFBUSxFQUFFLFVBSEE7QUFJVkMsRUFBQUEsV0FBVyxFQUFFO0FBSkgsQ0FBZDtBQVFBLElBQU1DLFVBQVUsR0FBRztBQUNmO0FBQ0FDLEVBQUFBLFVBQVUsRUFBRSxJQUZHO0FBR2ZDLEVBQUFBLEtBQUssRUFBRSxDQUhRO0FBSWZDLEVBQUFBLFNBQVMsRUFBRSxLQUpJO0FBS2ZDLEVBQUFBLGFBQWEsRUFBRTtBQUxBLENBQW5CO0FBU0EsSUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLEVBQUFBLGNBQWMsRUFBRSxnQkFERDtBQUVmQyxFQUFBQSxpQkFBaUIsRUFBRSxtQkFGSjtBQUdmQyxFQUFBQSxZQUFZLEVBQUUsY0FIQztBQUlmQyxFQUFBQSxlQUFlLEVBQUU7QUFKRixDQUFuQjs7SUFRYUM7OztBQUFBQSxVQUdGQyxtQkFBbUI7QUFIakJELFVBSUZFLGNBQWM7QUFKWkYsVUFLRkcsV0FBVztBQUxUSCxVQU1GSSxXQUFXO0FBTlRKLFVBT0ZLLGNBQWM7QUFQWkwsVUFRRk0scUJBQXFCO0FBUm5CTixVQVNGTyxXQUFXO0FBVFRQLFVBYUZmLFFBQVFBO0FBYk5lLFVBaUJGUSxhQUFhbEI7QUFqQlhVLFVBcUJGTCxhQUFhQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCBFdmVudCA9IHtcclxuICAgIHRvdWNoU3RhcnQ6IFwidG91Y2hzdGFydFwiLFxyXG4gICAgdG91Y2hNb3ZlOiBcInRvdWNobW92ZVwiLFxyXG4gICAgdG91Y2hFbmQ6IFwidG91Y2hlbmRcIixcclxuICAgIHRvdWNoQ2FuY2VsOiBcInRvdWNoY2FuY2VsXCJcclxufVxyXG5cclxuXHJcbmNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuY29uc3QgUmVzcG9uc2l2ZSA9IHtcclxuICAgIEhPUklaT05UQUxfSVBYOiBcImhvcml6b250YWxfSVBYXCIsXHJcbiAgICBIT1JJWk9OVEFMX1RBQkxFVDogXCJob3Jpem9udGFsX1RhYmxldFwiLFxyXG4gICAgVkVSVElDQUxfSVBYOiBcInZlcnRpY2FsX0lQWFwiLFxyXG4gICAgVkVSVElDQUxfTU9CSUxFOiBcInZlcnRpY2FsX01vYmlsZVwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcblxyXG4gICAgLy8gc3RhdGUgICAgXHJcbiAgICBzdGF0aWMgaXNDbGlja0dhbWVTdGFydCA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGlzUGxheVNvdW5kID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgaXNSb3RhdGUgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBjb3VudERpZSA9IDA7XHJcbiAgICBzdGF0aWMgaXNHYW1lU3RhcnQgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBpc1Nob3dQb3B1cE9wdGlvbnMgPSBmYWxzZTtcclxuICAgIHN0YXRpYyBnYW1lVGltZSA9IDA7XHJcblxyXG5cclxuICAgIC8vIGV2ZW50XHJcbiAgICBzdGF0aWMgRXZlbnQgPSBFdmVudDtcclxuXHJcblxyXG4gICAgLy8gaXJvblNvdXJjZVxyXG4gICAgc3RhdGljIGlyb25Tb3VyY2UgPSBJcm9uU291cmNlO1xyXG5cclxuXHJcbiAgICAvLyBSZXNwb25zaXZlXHJcbiAgICBzdGF0aWMgUmVzcG9uc2l2ZSA9IFJlc3BvbnNpdmU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8daewWYL1IObw90wQWYYLg', 'PlayerController');
// scripts/Controller/PlayerController.js

"use strict";

var _require = require("../Data/Constant"),
    Constants = _require.Constants;

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 5,
    isMove: false,
    touchArea: cc.Node,
    targetPosition: cc.Vec2,
    score: 0,
    isLive: true,
    gc: cc.Node,
    headPlayer: cc.Node,
    crownGold: cc.Node,
    crownSilver: cc.Node,
    crownCopper: cc.Node,
    rigidBody: cc.RigidBody,
    scoreLabel1: cc.Label,
    scoreLabel2: cc.Label,
    scoreLabel3: cc.Label,
    rankName1: cc.Sprite,
    rankName2: cc.Sprite,
    rankName3: cc.Sprite,
    sfName1: cc.SpriteFrame,
    sfName2: cc.SpriteFrame,
    sfName3: cc.SpriteFrame,
    sfNamePlayer: cc.SpriteFrame
  },
  // onLoad () {},
  start: function start() {
    this.gameController = this.gc.getComponent("GameController");
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 2 || other.tag == 3) {
      if (this.isLive) {
        this.die();
        this.headPlayer.active = true;
        this.gameController.playAudio(this.gameController.audioBossAtk);
        this.node.getChildByName("Atk").getComponent(sp.Skeleton).setAnimation(0, "bite", false);
        Constants.countDie += 1;
      }
    }
  },
  die: function die() {
    this.gameController.playAudio(this.gameController.audioEat);
    this.node.getChildByName("Body").active = false;
    this.node.getChildByName("Die").active = true;
    this.getComponent(cc.Animation).play("EnemyDieAnim");
    this.isLive = false; // FINISH

    this.scheduleOnce(function () {
      this.gameController.showPopupInstall();
    }, 1);
  },
  // addScore(){
  //   this.score += cc.math.randomRangeInt(5, 15);
  //   this.crownGold.active = false;
  //   this.crownSilver.active = false;
  //   this.crownCopper.active = false;
  //   if(this.score >= 60){
  //     this.crownGold.active = true;
  //     this.node.setScale(1.7);
  //     this.scoreLabel1.string = ""+this.score;
  //     this.scoreLabel2.string = "40";
  //     this.scoreLabel3.string = "25";
  //     this.rankName1.spriteFrame = this.sfNamePlayer;
  //     this.rankName2.spriteFrame = this.sfName1;
  //     this.rankName3.spriteFrame = this.sfName2;
  //   }
  //   if(this.score >= 40 && this.score < 60) {
  //     this.crownGold.active = true;
  //     this.node.setScale(1.5);
  //     this.scoreLabel1.string = ""+this.score;
  //     this.scoreLabel2.string = "40";
  //     this.scoreLabel3.string = "25";
  //     this.rankName1.spriteFrame = this.sfNamePlayer;
  //     this.rankName2.spriteFrame = this.sfName1;
  //     this.rankName3.spriteFrame = this.sfName2;
  //   }
  //   else if(this.score >= 25 && this.score < 40) {
  //     this.crownSilver.active = true;
  //     this.node.setScale(1.3);
  //     this.scoreLabel2.string = ""+this.score;
  //     this.scoreLabel3.string = "25";
  //     this.rankName2.spriteFrame = this.sfNamePlayer;
  //     this.rankName3.spriteFrame = this.sfName2;
  //   }
  //   else if(this.score >= 10 && this.score < 25) {
  //     this.crownCopper.active = true;
  //     this.node.setScale(1.1);
  //     this.scoreLabel3.string = ""+this.score;
  //     this.rankName3.spriteFrame = this.sfNamePlayer;
  //   }
  // },
  update: function update(dt) {
    if (this.isMove && this.isLive) {
      this.targetPosition = this.touchArea.getComponent("TouchArea").positionTouch; //console.log(this.targetPosition.x+" --- "+this.targetPosition.y);

      var currentPosition = this.node.getPosition();
      currentPosition.lerp(this.targetPosition, 0.02, currentPosition);
      this.node.setPosition(currentPosition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29udHJvbGxlclxcUGxheWVyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ29uc3RhbnRzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsImlzTW92ZSIsInRvdWNoQXJlYSIsIk5vZGUiLCJ0YXJnZXRQb3NpdGlvbiIsIlZlYzIiLCJzY29yZSIsImlzTGl2ZSIsImdjIiwiaGVhZFBsYXllciIsImNyb3duR29sZCIsImNyb3duU2lsdmVyIiwiY3Jvd25Db3BwZXIiLCJyaWdpZEJvZHkiLCJSaWdpZEJvZHkiLCJzY29yZUxhYmVsMSIsIkxhYmVsIiwic2NvcmVMYWJlbDIiLCJzY29yZUxhYmVsMyIsInJhbmtOYW1lMSIsIlNwcml0ZSIsInJhbmtOYW1lMiIsInJhbmtOYW1lMyIsInNmTmFtZTEiLCJTcHJpdGVGcmFtZSIsInNmTmFtZTIiLCJzZk5hbWUzIiwic2ZOYW1lUGxheWVyIiwic3RhcnQiLCJnYW1lQ29udHJvbGxlciIsImdldENvbXBvbmVudCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ0YWciLCJkaWUiLCJhY3RpdmUiLCJwbGF5QXVkaW8iLCJhdWRpb0Jvc3NBdGsiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwiY291bnREaWUiLCJhdWRpb0VhdCIsIkFuaW1hdGlvbiIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJzaG93UG9wdXBJbnN0YWxsIiwidXBkYXRlIiwiZHQiLCJwb3NpdGlvblRvdWNoIiwiY3VycmVudFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZXJwIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBc0JBLE9BQU8sQ0FBQyxrQkFBRCxDQUE3QjtBQUFBLElBQVFDLFNBQVIsWUFBUUEsU0FBUjs7QUFFQUMsRUFBRSxDQUFD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QUxHLENBT0g7O0FBQ0EsU0FBS3lDLFlBQUwsQ0FBa0IsWUFBVTtBQUMxQixXQUFLbkIsY0FBTCxDQUFvQm9CLGdCQUFwQjtBQUNELEtBRkQsRUFFRSxDQUZGO0FBR0QsR0E3REk7QUErREw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQUMsRUFBQUEsTUE1R0ssa0JBNEdHQyxFQTVHSCxFQTRHTztBQUNWLFFBQUcsS0FBS2xELE1BQUwsSUFBZSxLQUFLTSxNQUF2QixFQUE4QjtBQUM1QixXQUFLSCxjQUFMLEdBQXNCLEtBQUtGLFNBQUwsQ0FBZTRCLFlBQWYsQ0FBNEIsV0FBNUIsRUFBeUNzQixhQUEvRCxDQUQ0QixDQUc1Qjs7QUFFQSxVQUFJQyxlQUFlLEdBQUcsS0FBS2QsSUFBTCxDQUFVZSxXQUFWLEVBQXRCO0FBQ0FELE1BQUFBLGVBQWUsQ0FBQ0UsSUFBaEIsQ0FBcUIsS0FBS25ELGNBQTFCLEVBQTBDLElBQTFDLEVBQWdEaUQsZUFBaEQ7QUFDQSxXQUFLZCxJQUFMLENBQVVpQixXQUFWLENBQXNCSCxlQUF0QjtBQUdEO0FBQ0Y7QUF4SEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDb25zdGFudHMgfSA9IHJlcXVpcmUoXCIuLi9EYXRhL0NvbnN0YW50XCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgc3BlZWQ6IDUsXHJcbiAgICAgIGlzTW92ZTogZmFsc2UsXHJcbiAgICAgIHRvdWNoQXJlYTogY2MuTm9kZSxcclxuICAgICAgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzIsXHJcbiAgICAgIHNjb3JlOjAsXHJcbiAgICAgIGlzTGl2ZTogdHJ1ZSxcclxuICAgICAgZ2M6IGNjLk5vZGUsXHJcbiAgICAgIGhlYWRQbGF5ZXI6IGNjLk5vZGUsXHJcbiAgICAgIGNyb3duR29sZDogY2MuTm9kZSxcclxuICAgICAgY3Jvd25TaWx2ZXI6IGNjLk5vZGUsXHJcbiAgICAgIGNyb3duQ29wcGVyOiBjYy5Ob2RlLFxyXG4gICAgICByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSxcclxuICAgICAgXHJcbiAgICAgIHNjb3JlTGFiZWwxOiBjYy5MYWJlbCxcclxuICAgICAgc2NvcmVMYWJlbDI6IGNjLkxhYmVsLFxyXG4gICAgICBzY29yZUxhYmVsMzogY2MuTGFiZWwsXHJcblxyXG4gICAgICByYW5rTmFtZTE6IGNjLlNwcml0ZSxcclxuICAgICAgcmFua05hbWUyOiBjYy5TcHJpdGUsXHJcbiAgICAgIHJhbmtOYW1lMzogY2MuU3ByaXRlLFxyXG5cclxuICAgICAgc2ZOYW1lMTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgIHNmTmFtZTI6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICBzZk5hbWUzOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgc2ZOYW1lUGxheWVyOiBjYy5TcHJpdGVGcmFtZSxcclxuXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IHRoaXMuZ2MuZ2V0Q29tcG9uZW50KFwiR2FtZUNvbnRyb2xsZXJcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIgKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgIGlmKG90aGVyLnRhZyA9PSAyIHx8IG90aGVyLnRhZyA9PSAzKXtcclxuICAgICAgICAgIGlmKHRoaXMuaXNMaXZlKXtcclxuICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkUGxheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIucGxheUF1ZGlvKHRoaXMuZ2FtZUNvbnRyb2xsZXIuYXVkaW9Cb3NzQXRrKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQXRrXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYml0ZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5jb3VudERpZSArPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpZSgpe1xyXG4gICAgICB0aGlzLmdhbWVDb250cm9sbGVyLnBsYXlBdWRpbyh0aGlzLmdhbWVDb250cm9sbGVyLmF1ZGlvRWF0KTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiRGllXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkVuZW15RGllQW5pbVwiKTtcclxuICAgICAgdGhpcy5pc0xpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIEZJTklTSFxyXG4gICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIuc2hvd1BvcHVwSW5zdGFsbCgpO1xyXG4gICAgICB9LDEpXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGFkZFNjb3JlKCl7XHJcbiAgICAvLyAgIHRoaXMuc2NvcmUgKz0gY2MubWF0aC5yYW5kb21SYW5nZUludCg1LCAxNSk7XHJcbiAgICAvLyAgIHRoaXMuY3Jvd25Hb2xkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICB0aGlzLmNyb3duU2lsdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICB0aGlzLmNyb3duQ29wcGVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICBpZih0aGlzLnNjb3JlID49IDYwKXtcclxuICAgIC8vICAgICB0aGlzLmNyb3duR29sZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLjcpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDEuc3RyaW5nID0gXCJcIit0aGlzLnNjb3JlO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDIuc3RyaW5nID0gXCI0MFwiO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDMuc3RyaW5nID0gXCIyNVwiO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUxLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWVQbGF5ZXI7XHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTIuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZTE7XHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZTI7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgaWYodGhpcy5zY29yZSA+PSA0MCAmJiB0aGlzLnNjb3JlIDwgNjApIHtcclxuICAgIC8vICAgICB0aGlzLmNyb3duR29sZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRTY2FsZSgxLjUpO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDEuc3RyaW5nID0gXCJcIit0aGlzLnNjb3JlO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDIuc3RyaW5nID0gXCI0MFwiO1xyXG4gICAgLy8gICAgIHRoaXMuc2NvcmVMYWJlbDMuc3RyaW5nID0gXCIyNVwiO1xyXG5cclxuICAgIC8vICAgICB0aGlzLnJhbmtOYW1lMS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZOYW1lUGxheWVyO1xyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUyLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWUxO1xyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUzLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWUyO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIGVsc2UgaWYodGhpcy5zY29yZSA+PSAyNSAmJiB0aGlzLnNjb3JlIDwgNDApIHtcclxuICAgIC8vICAgICB0aGlzLmNyb3duU2lsdmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEuMyk7XHJcbiAgICAvLyAgICAgdGhpcy5zY29yZUxhYmVsMi5zdHJpbmcgPSBcIlwiK3RoaXMuc2NvcmU7XHJcbiAgICAvLyAgICAgdGhpcy5zY29yZUxhYmVsMy5zdHJpbmcgPSBcIjI1XCI7XHJcblxyXG4gICAgLy8gICAgIHRoaXMucmFua05hbWUyLnNwcml0ZUZyYW1lID0gdGhpcy5zZk5hbWVQbGF5ZXI7XHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZTI7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgZWxzZSBpZih0aGlzLnNjb3JlID49IDEwICYmIHRoaXMuc2NvcmUgPCAyNSkge1xyXG4gICAgLy8gICAgIHRoaXMuY3Jvd25Db3BwZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLm5vZGUuc2V0U2NhbGUoMS4xKTtcclxuICAgIC8vICAgICB0aGlzLnNjb3JlTGFiZWwzLnN0cmluZyA9IFwiXCIrdGhpcy5zY29yZTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5yYW5rTmFtZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmTmFtZVBsYXllcjtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgIGlmKHRoaXMuaXNNb3ZlICYmIHRoaXMuaXNMaXZlKXtcclxuICAgICAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gdGhpcy50b3VjaEFyZWEuZ2V0Q29tcG9uZW50KFwiVG91Y2hBcmVhXCIpLnBvc2l0aW9uVG91Y2g7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy50YXJnZXRQb3NpdGlvbi54K1wiIC0tLSBcIit0aGlzLnRhcmdldFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGVycCh0aGlzLnRhcmdldFBvc2l0aW9uLCAwLjAyLCBjdXJyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24pO1xyXG5cclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/BossController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57c65mhFk1I8aojTp7HjE4s', 'BossController');
// scripts/BossController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    player: cc.Node
  },
  start: function start() {
    this.playerControll = this.player.getComponent("PlayerController");
  },
  update: function update(dt) {
    var playerPosition = this.player.getPosition();
    var currentPosition = this.node.getPosition();
    currentPosition.lerp(playerPosition, 0.009, currentPosition);
    this.node.setPosition(currentPosition);
    var angleBoss = cc.misc.radiansToDegrees(Math.atan((this.player.y - this.node.y) / (this.player.x - this.node.x))); // console.log("Angle BOSSS: "+angleBoss)

    this.node.getChildByName("Body").angle = angleBoss;

    if (this.node.x - this.player.x > 0) {
      this.node.getChildByName("Body").scaleX = -1;
    } else {
      this.node.getChildByName("Body").scaleX = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9zc0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwbGF5ZXIiLCJOb2RlIiwic3RhcnQiLCJwbGF5ZXJDb250cm9sbCIsImdldENvbXBvbmVudCIsInVwZGF0ZSIsImR0IiwicGxheWVyUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImN1cnJlbnRQb3NpdGlvbiIsIm5vZGUiLCJsZXJwIiwic2V0UG9zaXRpb24iLCJhbmdsZUJvc3MiLCJtaXNjIiwicmFkaWFuc1RvRGVncmVlcyIsIk1hdGgiLCJhdGFuIiwieSIsIngiLCJnZXRDaGlsZEJ5TmFtZSIsImFuZ2xlIiwic2NhbGVYIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFSixFQUFFLENBQUNLO0FBREgsR0FIUDtBQVFMQyxFQUFBQSxLQVJLLG1CQVFJO0FBQ0wsU0FBS0MsY0FBTCxHQUFzQixLQUFLSCxNQUFMLENBQVlJLFlBQVosQ0FBeUIsa0JBQXpCLENBQXRCO0FBQ0gsR0FWSTtBQWFKQyxFQUFBQSxNQWJJLGtCQWFJQyxFQWJKLEVBYVE7QUFDVCxRQUFJQyxjQUFjLEdBQUcsS0FBS1AsTUFBTCxDQUFZUSxXQUFaLEVBQXJCO0FBQ0EsUUFBSUMsZUFBZSxHQUFHLEtBQUtDLElBQUwsQ0FBVUYsV0FBVixFQUF0QjtBQUNBQyxJQUFBQSxlQUFlLENBQUNFLElBQWhCLENBQXFCSixjQUFyQixFQUFxQyxLQUFyQyxFQUE0Q0UsZUFBNUM7QUFDQSxTQUFLQyxJQUFMLENBQVVFLFdBQVYsQ0FBc0JILGVBQXRCO0FBRUEsUUFBSUksU0FBUyxHQUFHakIsRUFBRSxDQUFDa0IsSUFBSCxDQUFRQyxnQkFBUixDQUF5QkMsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBQyxLQUFLakIsTUFBTCxDQUFZa0IsQ0FBWixHQUFnQixLQUFLUixJQUFMLENBQVVRLENBQTNCLEtBQStCLEtBQUtsQixNQUFMLENBQVltQixDQUFaLEdBQWdCLEtBQUtULElBQUwsQ0FBVVMsQ0FBekQsQ0FBVixDQUF6QixDQUFoQixDQU5TLENBUVQ7O0FBRUEsU0FBS1QsSUFBTCxDQUFVVSxjQUFWLENBQXlCLE1BQXpCLEVBQWlDQyxLQUFqQyxHQUF5Q1IsU0FBekM7O0FBR0EsUUFBSSxLQUFLSCxJQUFMLENBQVVTLENBQVYsR0FBYyxLQUFLbkIsTUFBTCxDQUFZbUIsQ0FBM0IsR0FBZ0MsQ0FBbkMsRUFBcUM7QUFDakMsV0FBS1QsSUFBTCxDQUFVVSxjQUFWLENBQXlCLE1BQXpCLEVBQWlDRSxNQUFqQyxHQUEwQyxDQUFDLENBQTNDO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS1osSUFBTCxDQUFVVSxjQUFWLENBQXlCLE1BQXpCLEVBQWlDRSxNQUFqQyxHQUEwQyxDQUExQztBQUNIO0FBRUg7QUFoQ0csQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGxheWVyOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29udHJvbGwgPSB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJDb250cm9sbGVyXCIpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgcGxheWVyUG9zaXRpb24gPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGVycChwbGF5ZXJQb3NpdGlvbiwgMC4wMDksIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHZhciBhbmdsZUJvc3MgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuKCh0aGlzLnBsYXllci55IC0gdGhpcy5ub2RlLnkpLyh0aGlzLnBsYXllci54IC0gdGhpcy5ub2RlLngpKSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQW5nbGUgQk9TU1M6IFwiK2FuZ2xlQm9zcylcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQm9keVwiKS5hbmdsZSA9IGFuZ2xlQm9zcztcclxuXHJcblxyXG4gICAgICAgIGlmKCh0aGlzLm5vZGUueCAtIHRoaXMucGxheWVyLngpID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvZHlcIikuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvZHlcIikuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/UIGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd451a3z+gxLII7oceSoPGiY', 'UIGameController');
// scripts/UIGameController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    camera: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    this.node.setPosition(this.camera.getPosition());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlHYW1lQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNhbWVyYSIsIk5vZGUiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0s7QUFESCxHQUhQO0FBUUxDLEVBQUFBLEtBUkssbUJBUUUsQ0FFTixDQVZJO0FBWUpDLEVBQUFBLE1BWkksa0JBWUlDLEVBWkosRUFZUTtBQUNULFNBQUtDLElBQUwsQ0FBVUMsV0FBVixDQUFzQixLQUFLTixNQUFMLENBQVlPLFdBQVosRUFBdEI7QUFDRjtBQWRHLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNhbWVyYTogY2MuTm9kZSxcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgfSxcclxuXHJcbiAgIFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f274euVKR9EnbLmW4BUE0K6', 'EnemyController');
// scripts/EnemyController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    arrPoint: [cc.Node],
    arrEnemy: [cc.Prefab],
    indexEnemy: 0,
    indexPoint: 0,
    player: cc.Node
  },
  onLoad: function onLoad() {},
  start: function start() {},
  startCreateEnemy: function startCreateEnemy() {
    this.schedule(function () {
      this.spawnEnemy();
    }, 0.01, 22, 0);
    this.schedule(function () {
      this.spawnEnemy();
    }, 1, 20, 3);
  },
  randomPoint: function randomPoint() {
    this.indexPoint = cc.math.randomRangeInt(0, this.arrPoint.length);
  },
  randomEnemy: function randomEnemy() {
    //this.indexEnemy = 5
    this.indexEnemy = cc.math.randomRangeInt(0, this.arrEnemy.length);
  },
  spawnEnemy: function spawnEnemy() {
    if (!this.player.getComponent("PlayerController").isLive) return;
    this.randomEnemy();
    this.randomPoint();
    var enemy = cc.instantiate(this.arrEnemy[this.indexEnemy]);
    enemy.parent = this.node;
    enemy.setPosition(cc.v2(this.arrPoint[this.indexPoint].getPosition().x, this.arrPoint[this.indexPoint].getPosition().y));
  } //update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRW5lbXlDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXJyUG9pbnQiLCJOb2RlIiwiYXJyRW5lbXkiLCJQcmVmYWIiLCJpbmRleEVuZW15IiwiaW5kZXhQb2ludCIsInBsYXllciIsIm9uTG9hZCIsInN0YXJ0Iiwic3RhcnRDcmVhdGVFbmVteSIsInNjaGVkdWxlIiwic3Bhd25FbmVteSIsInJhbmRvbVBvaW50IiwibWF0aCIsInJhbmRvbVJhbmdlSW50IiwibGVuZ3RoIiwicmFuZG9tRW5lbXkiLCJnZXRDb21wb25lbnQiLCJpc0xpdmUiLCJlbmVteSIsImluc3RhbnRpYXRlIiwicGFyZW50Iiwibm9kZSIsInNldFBvc2l0aW9uIiwidjIiLCJnZXRQb3NpdGlvbiIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFLENBQUNKLEVBQUUsQ0FBQ0ssSUFBSixDQURGO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxDQUFDTixFQUFFLENBQUNPLE1BQUosQ0FGRjtBQUdSQyxJQUFBQSxVQUFVLEVBQUUsQ0FISjtBQUlSQyxJQUFBQSxVQUFVLEVBQUUsQ0FKSjtBQUtSQyxJQUFBQSxNQUFNLEVBQUVWLEVBQUUsQ0FBQ0s7QUFMSCxHQUhQO0FBV0xNLEVBQUFBLE1BWEssb0JBV0ssQ0FBRSxDQVhQO0FBYUxDLEVBQUFBLEtBYkssbUJBYUksQ0FDUixDQWRJO0FBZ0JMQyxFQUFBQSxnQkFoQkssOEJBZ0JhO0FBQ2QsU0FBS0MsUUFBTCxDQUFjLFlBQVU7QUFDcEIsV0FBS0MsVUFBTDtBQUNILEtBRkQsRUFFRyxJQUZILEVBRVMsRUFGVCxFQUVhLENBRmI7QUFJQSxTQUFLRCxRQUFMLENBQWMsWUFBVTtBQUNwQixXQUFLQyxVQUFMO0FBQ0gsS0FGRCxFQUVHLENBRkgsRUFFTSxFQUZOLEVBRVUsQ0FGVjtBQUdILEdBeEJJO0FBMEJMQyxFQUFBQSxXQTFCSyx5QkEwQlE7QUFDVCxTQUFLUCxVQUFMLEdBQWtCVCxFQUFFLENBQUNpQixJQUFILENBQVFDLGNBQVIsQ0FBdUIsQ0FBdkIsRUFBMEIsS0FBS2QsUUFBTCxDQUFjZSxNQUF4QyxDQUFsQjtBQUNILEdBNUJJO0FBOEJMQyxFQUFBQSxXQTlCSyx5QkE4QlE7QUFDVDtBQUNBLFNBQUtaLFVBQUwsR0FBa0JSLEVBQUUsQ0FBQ2lCLElBQUgsQ0FBUUMsY0FBUixDQUF1QixDQUF2QixFQUEwQixLQUFLWixRQUFMLENBQWNhLE1BQXhDLENBQWxCO0FBQ0gsR0FqQ0k7QUFtQ0xKLEVBQUFBLFVBbkNLLHdCQW1DTztBQUNSLFFBQUcsQ0FBQyxLQUFLTCxNQUFMLENBQVlXLFlBQVosQ0FBeUIsa0JBQXpCLEVBQTZDQyxNQUFqRCxFQUF5RDtBQUN6RCxTQUFLRixXQUFMO0FBQ0EsU0FBS0osV0FBTDtBQUVBLFFBQUlPLEtBQUssR0FBR3ZCLEVBQUUsQ0FBQ3dCLFdBQUgsQ0FBZSxLQUFLbEIsUUFBTCxDQUFjLEtBQUtFLFVBQW5CLENBQWYsQ0FBWjtBQUNBZSxJQUFBQSxLQUFLLENBQUNFLE1BQU4sR0FBZSxLQUFLQyxJQUFwQjtBQUNBSCxJQUFBQSxLQUFLLENBQUNJLFdBQU4sQ0FBa0IzQixFQUFFLENBQUM0QixFQUFILENBQU0sS0FBS3hCLFFBQUwsQ0FBYyxLQUFLSyxVQUFuQixFQUErQm9CLFdBQS9CLEdBQTZDQyxDQUFuRCxFQUFzRCxLQUFLMUIsUUFBTCxDQUFjLEtBQUtLLFVBQW5CLEVBQStCb0IsV0FBL0IsR0FBNkNFLENBQW5HLENBQWxCO0FBRUgsR0E1Q0ksQ0E4Q0w7O0FBOUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFyclBvaW50OiBbY2MuTm9kZV0sXHJcbiAgICAgICAgYXJyRW5lbXk6IFtjYy5QcmVmYWJdLFxyXG4gICAgICAgIGluZGV4RW5lbXk6IDAsXHJcbiAgICAgICAgaW5kZXhQb2ludDogMCxcclxuICAgICAgICBwbGF5ZXI6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0Q3JlYXRlRW5lbXkoKXtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25FbmVteSgpO1xyXG4gICAgICAgIH0sIDAuMDEsIDIyLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduRW5lbXkoKTtcclxuICAgICAgICB9LCAxLCAyMCwgMyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJhbmRvbVBvaW50KCl7XHJcbiAgICAgICAgdGhpcy5pbmRleFBvaW50ID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCB0aGlzLmFyclBvaW50Lmxlbmd0aCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJhbmRvbUVuZW15KCl7XHJcbiAgICAgICAgLy90aGlzLmluZGV4RW5lbXkgPSA1XHJcbiAgICAgICAgdGhpcy5pbmRleEVuZW15ID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCB0aGlzLmFyckVuZW15Lmxlbmd0aCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduRW5lbXkoKXtcclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KFwiUGxheWVyQ29udHJvbGxlclwiKS5pc0xpdmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJhbmRvbUVuZW15KCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21Qb2ludCgpO1xyXG5cclxuICAgICAgICBsZXQgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFyckVuZW15W3RoaXMuaW5kZXhFbmVteV0pO1xyXG4gICAgICAgIGVuZW15LnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBlbmVteS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLmFyclBvaW50W3RoaXMuaW5kZXhQb2ludF0uZ2V0UG9zaXRpb24oKS54LCB0aGlzLmFyclBvaW50W3RoaXMuaW5kZXhQb2ludF0uZ2V0UG9zaXRpb24oKS55KSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvL3VwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other/TouchArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cdc76y48VMIozePWT6y+zO', 'TouchArea');
// scripts/Other/TouchArea.js

"use strict";

var _require = require("../Data/Constant"),
    Constants = _require.Constants;

cc.Class({
  "extends": cc.Component,
  properties: {
    positionTouch: cc.Vec2,
    player: cc.Node,
    camera: cc.Node,
    rigidBody: cc.RigidBody,
    tut: cc.Node,
    enemyController: cc.Node,
    gamePlay: cc.Node,
    btn_revive: cc.Node
  },
  start: function start() {
    var _this = this;

    this.bodyPlayer = this.player.getChildByName("Body");
    this.isTouched = false;
    this.node.parent.on(cc.Node.EventType.TOUCH_START, function (event) {
      if (_this.tut.active) {
        _this.tut.active = false;
        _this.player.getComponent("PlayerController").isMove = true;

        _this.enemyController.getComponent("EnemyController").startCreateEnemy();

        _this.gamePlay.getComponent("GamePlay").showBoss();
      }

      Constants.isGameStart = true;
      _this.isTouched = true;

      _this.moveWithTouch(event);
    });
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      _this.moveWithTouch(event);
    });
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      _this.isTouched = false;
    });
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      _this.isTouched = false;
    });
  },
  registerReviveAction: function registerReviveAction() {
    this.btn_revive.on(cc.Node.EventType.TOUCH_START, this.handleBtnReviveTouchStart, this);
  },
  handleBtnReviveTouchStart: function handleBtnReviveTouchStart() {
    cc.audioEngine.stopAll();
    Constants.countDie >= 1 && cc.director.loadScene("Game");
  },
  moveWithTouch: function moveWithTouch(event) {
    this.positionTouch = event.getLocation();
    var localTouchPos = this.node.convertToNodeSpaceAR(this.positionTouch);
    this.positionTouch = localTouchPos;
    this.positionTouch.x += this.camera.x;
    this.positionTouch.y += this.camera.y;
    var anglePlayer = cc.misc.radiansToDegrees(Math.atan((this.player.y - localTouchPos.y) / (this.player.x - localTouchPos.x)));
    this.bodyPlayer.angle = anglePlayer;

    if (this.player.x - localTouchPos.x > 0) {
      this.bodyPlayer.scaleX = -1;
    } else {
      this.bodyPlayer.scaleX = 1;
    }
  },
  update: function update(dt) {
    if (Constants.isGameStart && !Constants.isShowPopupOptions) {
      Constants.gameTime += 0.01;

      if (Constants.gameTime >= 3) {
        Constants.isShowPopupOptions = true;
        this.gamePlay.getComponent("GamePlay").showPopupOptions();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXJcXFRvdWNoQXJlYS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ29uc3RhbnRzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwb3NpdGlvblRvdWNoIiwiVmVjMiIsInBsYXllciIsIk5vZGUiLCJjYW1lcmEiLCJyaWdpZEJvZHkiLCJSaWdpZEJvZHkiLCJ0dXQiLCJlbmVteUNvbnRyb2xsZXIiLCJnYW1lUGxheSIsImJ0bl9yZXZpdmUiLCJzdGFydCIsImJvZHlQbGF5ZXIiLCJnZXRDaGlsZEJ5TmFtZSIsImlzVG91Y2hlZCIsIm5vZGUiLCJwYXJlbnQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJhY3RpdmUiLCJnZXRDb21wb25lbnQiLCJpc01vdmUiLCJzdGFydENyZWF0ZUVuZW15Iiwic2hvd0Jvc3MiLCJpc0dhbWVTdGFydCIsIm1vdmVXaXRoVG91Y2giLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfQ0FOQ0VMIiwiVE9VQ0hfRU5EIiwicmVnaXN0ZXJSZXZpdmVBY3Rpb24iLCJoYW5kbGVCdG5SZXZpdmVUb3VjaFN0YXJ0IiwiYXVkaW9FbmdpbmUiLCJzdG9wQWxsIiwiY291bnREaWUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImdldExvY2F0aW9uIiwibG9jYWxUb3VjaFBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsInkiLCJhbmdsZVBsYXllciIsIm1pc2MiLCJyYWRpYW5zVG9EZWdyZWVzIiwiTWF0aCIsImF0YW4iLCJhbmdsZSIsInNjYWxlWCIsInVwZGF0ZSIsImR0IiwiaXNTaG93UG9wdXBPcHRpb25zIiwiZ2FtZVRpbWUiLCJzaG93UG9wdXBPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQXNCQSxPQUFPLENBQUMsa0JBQUQsQ0FBN0I7QUFBQSxJQUFRQyxTQUFSLFlBQVFBLFNBQVI7O0FBRUFDLEVBQUUs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QSxTQUFTLENBQUMwRCxRQUFWLElBQXNCLElBQXRCOztBQUNBLFVBQUcxRCxTQUFTLENBQUMwRCxRQUFWLElBQXNCLENBQXpCLEVBQTRCO0FBQ3hCMUQsUUFBQUEsU0FBUyxDQUFDeUQsa0JBQVYsR0FBK0IsSUFBL0I7QUFDQSxhQUFLM0MsUUFBTCxDQUFjYSxZQUFkLENBQTJCLFVBQTNCLEVBQXVDZ0MsZ0JBQXZDO0FBQ0g7QUFDSjtBQUNKO0FBcEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ29uc3RhbnRzIH0gPSByZXF1aXJlKFwiLi4vRGF0YS9Db25zdGFudFwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcG9zaXRpb25Ub3VjaDogY2MuVmVjMixcclxuICAgICAgICBwbGF5ZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgY2FtZXJhOiBjYy5Ob2RlLFxyXG4gICAgICAgIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5LFxyXG4gICAgICAgIHR1dDogY2MuTm9kZSxcclxuICAgICAgICBlbmVteUNvbnRyb2xsZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgZ2FtZVBsYXk6IGNjLk5vZGUsXHJcbiAgICAgICAgYnRuX3Jldml2ZTogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuYm9keVBsYXllciA9IHRoaXMucGxheWVyLmdldENoaWxkQnlOYW1lKFwiQm9keVwiKTtcclxuICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHV0LmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdldENvbXBvbmVudChcIlBsYXllckNvbnRyb2xsZXJcIikuaXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlDb250cm9sbGVyLmdldENvbXBvbmVudChcIkVuZW15Q29udHJvbGxlclwiKS5zdGFydENyZWF0ZUVuZW15KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmdldENvbXBvbmVudChcIkdhbWVQbGF5XCIpLnNob3dCb3NzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29uc3RhbnRzLmlzR2FtZVN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoVG91Y2goZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVXaXRoVG91Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICByZWdpc3RlclJldml2ZUFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJ0bl9yZXZpdmUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuaGFuZGxlQnRuUmV2aXZlVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZUJ0blJldml2ZVRvdWNoU3RhcnQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgIENvbnN0YW50cy5jb3VudERpZSA+PSAxICYmIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIG1vdmVXaXRoVG91Y2goZXZlbnQpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ub3VjaCA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IGxvY2FsVG91Y2hQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5wb3NpdGlvblRvdWNoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uVG91Y2ggPSBsb2NhbFRvdWNoUG9zO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVG91Y2gueCArPSB0aGlzLmNhbWVyYS54O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ub3VjaC55ICs9IHRoaXMuY2FtZXJhLnk7XHJcblxyXG4gICAgICAgIHZhciBhbmdsZVBsYXllciA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4oKHRoaXMucGxheWVyLnkgLSBsb2NhbFRvdWNoUG9zLnkpLyh0aGlzLnBsYXllci54IC0gbG9jYWxUb3VjaFBvcy54KSkpO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlQbGF5ZXIuYW5nbGUgPSBhbmdsZVBsYXllcjtcclxuXHJcblxyXG4gICAgICAgIGlmKCh0aGlzLnBsYXllci54IC0gbG9jYWxUb3VjaFBvcy54KSA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlQbGF5ZXIuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keVBsYXllci5zY2FsZVggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoQ29uc3RhbnRzLmlzR2FtZVN0YXJ0ICYmICFDb25zdGFudHMuaXNTaG93UG9wdXBPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5nYW1lVGltZSArPSAwLjAxO1xyXG4gICAgICAgICAgICBpZihDb25zdGFudHMuZ2FtZVRpbWUgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgQ29uc3RhbnRzLmlzU2hvd1BvcHVwT3B0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVQbGF5LmdldENvbXBvbmVudChcIkdhbWVQbGF5XCIpLnNob3dQb3B1cE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Controller/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9946NNZuRHJLTjWdYKXWzD', 'CameraController');
// scripts/CameraController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    player: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    var targetPosition = this.player.getPosition();
    targetPosition.y = cc.misc.clampf(targetPosition.y, -100, 450);
    targetPosition.x = cc.misc.clampf(targetPosition.x, -500, 420);
    var currentPosition = this.node.getPosition();
    currentPosition.lerp(targetPosition, 0.2, currentPosition);
    this.node.setPosition(currentPosition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2FtZXJhQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBsYXllciIsIk5vZGUiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInkiLCJtaXNjIiwiY2xhbXBmIiwieCIsImN1cnJlbnRQb3NpdGlvbiIsIm5vZGUiLCJsZXJwIiwic2V0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUhQO0FBUUxDLEVBQUFBLEtBUkssbUJBUUksQ0FFUixDQVZJO0FBWUpDLEVBQUFBLE1BWkksa0JBWUlDLEVBWkosRUFZUTtBQUNULFFBQUlDLGNBQWMsR0FBRyxLQUFLTCxNQUFMLENBQVlNLFdBQVosRUFBckI7QUFFQUQsSUFBQUEsY0FBYyxDQUFDRSxDQUFmLEdBQW1CWCxFQUFFLENBQUNZLElBQUgsQ0FBUUMsTUFBUixDQUFlSixjQUFjLENBQUNFLENBQTlCLEVBQWlDLENBQUMsR0FBbEMsRUFBdUMsR0FBdkMsQ0FBbkI7QUFDQUYsSUFBQUEsY0FBYyxDQUFDSyxDQUFmLEdBQW1CZCxFQUFFLENBQUNZLElBQUgsQ0FBUUMsTUFBUixDQUFlSixjQUFjLENBQUNLLENBQTlCLEVBQWlDLENBQUMsR0FBbEMsRUFBdUMsR0FBdkMsQ0FBbkI7QUFFQSxRQUFJQyxlQUFlLEdBQUcsS0FBS0MsSUFBTCxDQUFVTixXQUFWLEVBQXRCO0FBQ0FLLElBQUFBLGVBQWUsQ0FBQ0UsSUFBaEIsQ0FBcUJSLGNBQXJCLEVBQXFDLEdBQXJDLEVBQTBDTSxlQUExQztBQUNBLFNBQUtDLElBQUwsQ0FBVUUsV0FBVixDQUFzQkgsZUFBdEI7QUFFRjtBQXRCRyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgcGxheWVyOiBjYy5Ob2RlLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB0aGlzLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICB0YXJnZXRQb3NpdGlvbi55ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0UG9zaXRpb24ueSwgLTEwMCwgNDUwKTtcclxuICAgICAgICB0YXJnZXRQb3NpdGlvbi54ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0UG9zaXRpb24ueCwgLTUwMCwgNDIwKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sZXJwKHRhcmdldFBvc2l0aW9uLCAwLjIsIGN1cnJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbik7XHJcblxyXG4gICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other/SwordPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b94fVRQ7NPU6JabzfyPgGt', 'SwordPlayer');
// scripts/Other/SwordPlayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gc: cc.Node,
    headFish1: cc.Node,
    headFish2: cc.Node,
    headFish3: cc.Node,
    headFish4: cc.Node
  },
  // onLoad () {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 1) {
      if (other.getComponent("Enemy").isLive) {
        this.gameController.playAudio(this.gameController.audioEat);
        other.getComponent("Enemy").die(); // self.node.getParent().getParent().getComponent("PlayerController").addScore();

        this.countHead++;
        if (this.countHead == 1) this.headFish1.active = true;
        if (this.countHead == 2) this.headFish2.active = true;
        if (this.countHead == 3) this.headFish3.active = true;
        if (this.countHead == 4) this.headFish4.active = true;
      }
    }
  },
  start: function start() {
    this.countHead = 0;
    this.gameController = this.gc.getComponent("GameController");
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXJcXFN3b3JkUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2MiLCJOb2RlIiwiaGVhZEZpc2gxIiwiaGVhZEZpc2gyIiwiaGVhZEZpc2gzIiwiaGVhZEZpc2g0Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInRhZyIsImdldENvbXBvbmVudCIsImlzTGl2ZSIsImdhbWVDb250cm9sbGVyIiwicGxheUF1ZGlvIiwiYXVkaW9FYXQiLCJkaWUiLCJjb3VudEhlYWQiLCJhY3RpdmUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEVBQUUsRUFBRUosRUFBRSxDQUFDSyxJQURHO0FBRVZDLElBQUFBLFNBQVMsRUFBRU4sRUFBRSxDQUFDSyxJQUZKO0FBR1ZFLElBQUFBLFNBQVMsRUFBRVAsRUFBRSxDQUFDSyxJQUhKO0FBSVZHLElBQUFBLFNBQVMsRUFBRVIsRUFBRSxDQUFDSyxJQUpKO0FBS1ZJLElBQUFBLFNBQVMsRUFBRVQsRUFBRSxDQUFDSztBQUxKLEdBSFA7QUFXTDtBQUdBSyxFQUFBQSxnQkFkSyw0QkFjYUMsS0FkYixFQWNvQkMsSUFkcEIsRUFjMEI7QUFDM0IsUUFBR0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxVQUFHRixLQUFLLENBQUNHLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEJDLE1BQS9CLEVBQXNDO0FBQ2xDLGFBQUtDLGNBQUwsQ0FBb0JDLFNBQXBCLENBQThCLEtBQUtELGNBQUwsQ0FBb0JFLFFBQWxEO0FBQ0FQLFFBQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQixPQUFuQixFQUE0QkssR0FBNUIsR0FGa0MsQ0FHbEM7O0FBRUEsYUFBS0MsU0FBTDtBQUNBLFlBQUcsS0FBS0EsU0FBTCxJQUFrQixDQUFyQixFQUF3QixLQUFLZCxTQUFMLENBQWVlLE1BQWYsR0FBd0IsSUFBeEI7QUFDeEIsWUFBRyxLQUFLRCxTQUFMLElBQWtCLENBQXJCLEVBQXdCLEtBQUtiLFNBQUwsQ0FBZWMsTUFBZixHQUF3QixJQUF4QjtBQUN4QixZQUFHLEtBQUtELFNBQUwsSUFBa0IsQ0FBckIsRUFBd0IsS0FBS1osU0FBTCxDQUFlYSxNQUFmLEdBQXdCLElBQXhCO0FBQ3hCLFlBQUcsS0FBS0QsU0FBTCxJQUFrQixDQUFyQixFQUF3QixLQUFLWCxTQUFMLENBQWVZLE1BQWYsR0FBd0IsSUFBeEI7QUFDM0I7QUFDSjtBQUNGLEdBNUJFO0FBOEJMQyxFQUFBQSxLQTlCSyxtQkE4Qkk7QUFDTCxTQUFLRixTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0osY0FBTCxHQUFzQixLQUFLWixFQUFMLENBQVFVLFlBQVIsQ0FBcUIsZ0JBQXJCLENBQXRCO0FBRUgsR0FsQ0ksQ0FvQ0w7O0FBcENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBnYzogY2MuTm9kZSxcclxuICAgICAgaGVhZEZpc2gxOiBjYy5Ob2RlLFxyXG4gICAgICBoZWFkRmlzaDI6IGNjLk5vZGUsXHJcbiAgICAgIGhlYWRGaXNoMzogY2MuTm9kZSxcclxuICAgICAgaGVhZEZpc2g0OiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIgKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIudGFnID09IDEpe1xyXG4gICAgICAgICAgICBpZihvdGhlci5nZXRDb21wb25lbnQoXCJFbmVteVwiKS5pc0xpdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci5wbGF5QXVkaW8odGhpcy5nYW1lQ29udHJvbGxlci5hdWRpb0VhdCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoXCJFbmVteVwiKS5kaWUoKTtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGYubm9kZS5nZXRQYXJlbnQoKS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoXCJQbGF5ZXJDb250cm9sbGVyXCIpLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRIZWFkICsrO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudEhlYWQgPT0gMSkgdGhpcy5oZWFkRmlzaDEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY291bnRIZWFkID09IDIpIHRoaXMuaGVhZEZpc2gyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNvdW50SGVhZCA9PSAzKSB0aGlzLmhlYWRGaXNoMy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudEhlYWQgPT0gNCkgdGhpcy5oZWFkRmlzaDQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudEhlYWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXIgPSB0aGlzLmdjLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Other/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd10dec9d+ZI3pr6HInaMjsn', 'Enemy');
// scripts/Other/Enemy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isLive: false,
    body: cc.RigidBody,
    maxSpeed: 60,
    nameFish: cc.Sprite,
    arrNameFish: [cc.SpriteFrame],
    flag: cc.Sprite,
    arrFlag: [cc.SpriteFrame]
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 2) {
      if (this.isLive) {
        this.die();
      }
    }
  },
  start: function start() {
    this.randomName = 0;
    this.randomName = cc.math.randomRangeInt(0, this.arrNameFish.length);
    this.nameFish.spriteFrame = this.arrNameFish[this.randomName];
    this.randomFlag = 0;
    this.randomFlag = cc.math.randomRangeInt(0, this.arrFlag.length);
    this.flag.spriteFrame = this.arrFlag[this.randomFlag];
    this.randomChangeSpeed = 3;
    this.randomVecX = 0;
    this.randomVecY = 0;
    this.isLive = true;
    this.randomVelocity();
    this.schedule(function () {
      this.randomVelocity();
    }, this.randomChangeSpeed, 20, 0);
  },
  randomVelocity: function randomVelocity() {
    this.randomChangeSpeed = cc.math.randomRangeInt(2, 5);
    this.randomVecX = cc.math.randomRangeInt(-this.maxSpeed, this.maxSpeed);
    this.randomVecY = cc.math.randomRangeInt(-this.maxSpeed, this.maxSpeed);
    this.body.linearVelocity = cc.v2(this.randomVecX, this.randomVecY);
    this.node.getChildByName("Body").angle = cc.misc.radiansToDegrees(Math.atan(this.randomVecY / this.randomVecX));

    if (this.randomVecX < 0) {
      this.node.getChildByName("Body").scaleX = -1;
    } else {
      this.node.getChildByName("Body").scaleX = 1;
    }
  },
  die: function die() {
    this.body.linearVelocity = cc.v2(0, 0);
    this.node.getChildByName("Name").active = false;
    this.node.getChildByName("Flag").active = false;
    this.node.getChildByName("Atk").getComponent(sp.Skeleton).setAnimation(0, "bite", false);
    this.node.getChildByName("Body").active = false;
    this.node.getChildByName("Die").active = true;
    this.isLive = false;
    this.getComponent(cc.Animation).play("EnemyDieAnim");
    this.scheduleOnce(function () {
      this.node.destroy();
    }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcT3RoZXJcXEVuZW15LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXNMaXZlIiwiYm9keSIsIlJpZ2lkQm9keSIsIm1heFNwZWVkIiwibmFtZUZpc2giLCJTcHJpdGUiLCJhcnJOYW1lRmlzaCIsIlNwcml0ZUZyYW1lIiwiZmxhZyIsImFyckZsYWciLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwidGFnIiwiZGllIiwic3RhcnQiLCJyYW5kb21OYW1lIiwibWF0aCIsInJhbmRvbVJhbmdlSW50IiwibGVuZ3RoIiwic3ByaXRlRnJhbWUiLCJyYW5kb21GbGFnIiwicmFuZG9tQ2hhbmdlU3BlZWQiLCJyYW5kb21WZWNYIiwicmFuZG9tVmVjWSIsInJhbmRvbVZlbG9jaXR5Iiwic2NoZWR1bGUiLCJsaW5lYXJWZWxvY2l0eSIsInYyIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYW5nbGUiLCJtaXNjIiwicmFkaWFuc1RvRGVncmVlcyIsIk1hdGgiLCJhdGFuIiwic2NhbGVYIiwiYWN0aXZlIiwiZ2V0Q29tcG9uZW50Iiwic3AiLCJTa2VsZXRvbiIsInNldEFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFLEtBREE7QUFFUkMsSUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBRkQ7QUFHUkMsSUFBQUEsUUFBUSxFQUFFLEVBSEY7QUFJUkMsSUFBQUEsUUFBUSxFQUFFUixFQUFFLENBQUNTLE1BSkw7QUFLUkMsSUFBQUEsV0FBVyxFQUFFLENBQUNWLEVBQUUsQ0FBQ1csV0FBSixDQUxM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LENBQXlCLE1BQXpCLEVBQWlDTyxNQUFqQyxHQUEwQyxLQUExQztBQUNBLFNBQUtSLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixFQUFpQ08sTUFBakMsR0FBMEMsS0FBMUM7QUFDQSxTQUFLUixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsS0FBekIsRUFBZ0NRLFlBQWhDLENBQTZDQyxFQUFFLENBQUNDLFFBQWhELEVBQTBEQyxZQUExRCxDQUF1RSxDQUF2RSxFQUEwRSxNQUExRSxFQUFrRixLQUFsRjtBQUNBLFNBQUtaLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixFQUFpQ08sTUFBakMsR0FBMEMsS0FBMUM7QUFDQSxTQUFLUixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsS0FBekIsRUFBZ0NPLE1BQWhDLEdBQXlDLElBQXpDO0FBQ0EsU0FBS3JDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS3NDLFlBQUwsQ0FBa0IxQyxFQUFFLENBQUM4QyxTQUFyQixFQUFnQ0MsSUFBaEMsQ0FBcUMsY0FBckM7QUFDQSxTQUFLQyxZQUFMLENBQWtCLFlBQVk7QUFDMUIsV0FBS2YsSUFBTCxDQUFVZ0IsT0FBVjtBQUNILEtBRkQsRUFFRyxDQUZIO0FBR0g7QUFwRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNMaXZlOiBmYWxzZSxcclxuICAgICAgICBib2R5OiBjYy5SaWdpZEJvZHksXHJcbiAgICAgICAgbWF4U3BlZWQ6IDYwLFxyXG4gICAgICAgIG5hbWVGaXNoOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgYXJyTmFtZUZpc2g6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgZmxhZzogY2MuU3ByaXRlLFxyXG4gICAgICAgIGFyckZsYWc6IFtjYy5TcHJpdGVGcmFtZV0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tTmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yYW5kb21OYW1lID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgwLCB0aGlzLmFyck5hbWVGaXNoLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5uYW1lRmlzaC5zcHJpdGVGcmFtZSA9IHRoaXMuYXJyTmFtZUZpc2hbdGhpcy5yYW5kb21OYW1lXTtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5kb21GbGFnID0gMDtcclxuICAgICAgICB0aGlzLnJhbmRvbUZsYWcgPSBjYy5tYXRoLnJhbmRvbVJhbmdlSW50KDAsIHRoaXMuYXJyRmxhZy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuZmxhZy5zcHJpdGVGcmFtZSA9IHRoaXMuYXJyRmxhZ1t0aGlzLnJhbmRvbUZsYWddO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmRvbUNoYW5nZVNwZWVkID0gMztcclxuICAgICAgICB0aGlzLnJhbmRvbVZlY1ggPSAwO1xyXG4gICAgICAgIHRoaXMucmFuZG9tVmVjWSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc0xpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmFuZG9tVmVsb2NpdHkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21WZWxvY2l0eSgpO1xyXG4gICAgICAgIH0sIHRoaXMucmFuZG9tQ2hhbmdlU3BlZWQsIDIwLCAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmFuZG9tVmVsb2NpdHkoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb21DaGFuZ2VTcGVlZCA9IGNjLm1hdGgucmFuZG9tUmFuZ2VJbnQoMiwgNSk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21WZWNYID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgtdGhpcy5tYXhTcGVlZCwgdGhpcy5tYXhTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5yYW5kb21WZWNZID0gY2MubWF0aC5yYW5kb21SYW5nZUludCgtdGhpcy5tYXhTcGVlZCwgdGhpcy5tYXhTcGVlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHRoaXMucmFuZG9tVmVjWCwgdGhpcy5yYW5kb21WZWNZKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb2R5XCIpLmFuZ2xlID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbih0aGlzLnJhbmRvbVZlY1kgLyB0aGlzLnJhbmRvbVZlY1gpKTtcclxuICAgICAgICBpZiAodGhpcy5yYW5kb21WZWNYIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb2R5XCIpLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvZHlcIikuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpZSgpIHtcclxuICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZsYWdcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQXRrXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYml0ZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQm9keVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEaWVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzTGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheShcIkVuZW15RGllQW5pbVwiKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgMilcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
