
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