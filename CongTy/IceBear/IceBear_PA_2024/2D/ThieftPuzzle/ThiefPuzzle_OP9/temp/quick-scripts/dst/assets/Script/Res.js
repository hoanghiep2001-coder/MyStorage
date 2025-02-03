
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Res.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e90f1APAVhH8bcUjVWiuutU', 'Res');
// Script/Res.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    ViewNgang: cc.Node,
    ViewDoc: cc.Node,
    viewDocGirlRigidbody: cc.Node,
    viewNgangGirlRigidbody: cc.Node,
    ClickStoreOverlay_1: cc.Node,
    ClickStoreOverlay_2: cc.Node,
    ClickStoreNode: cc.Node,
    ToStore: require('ToStore'),
    // hiep config
    girl_doc: cc.Node,
    round_doc: cc.Node,
    hand_doc: cc.Node,
    // 
    AudioBg: cc.AudioClip,
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical",
    device: "",
    isRotate: false
  },
  onLoad: function onLoad() {
    // mtg & applovin
    // this.ClickStoreOverlay_1.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
    // this.ClickStoreOverlay_2.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
    this.ClickStoreNode.on(cc.Node.EventType.TOUCH_START, this.ToStoreFn, this);
    this.FlagAudio = true;
    this.ironSourceState = 1;
    this.ironSourceSoundState = true;
    this.isEndGame = false;
    this.Flag_Done = false;
    this.FlagAudiohaha = true;
    this.FlagMove = true;
    this.FlagStatus = false; // this.StartAudio();
  },
  ToStoreFn: function ToStoreFn() {
    this.ToStore.installHandle();
  },
  StartAudio: function StartAudio() {
    if (this.FlagAudio) {
      if (this.ironSourceSoundState) {
        this.FlagAudio = false;
        cc.audioEngine.play(this.AudioBg, true, 0.8);
      }
    }
  },
  update: function update(dt) {
    var screenW = cc.winSize.width;
    var screenH = cc.winSize.height;

    if (screenW < screenH) {
      if (this.VERTICAL === this.device) {
        return;
      }

      this.device = this.VERTICAL; // this.viewNgangGirlRigidbody.getComponent(cc.RigidBody).enabled = false;

      this.ViewDoc.active = true;
      this.ViewNgang.active = false;

      if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
        // IPX
        this.ViewDoc.scale = 0.8;
        this.girl_doc.y = -192;
        this.round_doc.x = -70;
        this.hand_doc.x = 129;
        this.hand_doc.y = 85;
      } // this.viewDocGirlRigidbody.getComponent(cc.RigidBody).enabled = true;

    } else {
      if (this.HORIZONTAL === this.device) {
        return;
      }

      this.device = this.HORIZONTAL; // this.viewDocGirlRigidbody.getComponent(cc.RigidBody).enabled = false;

      this.ViewDoc.active = false;
      this.ViewNgang.active = true; // this.viewNgangGirlRigidbody.getComponent(cc.RigidBody).enabled = true;
    }

    this.ironSourceState = parseInt(localStorage.getItem("cocosSoundState"), 10);

    if (this.ironSourceState) {
      if (this.ironSourceState === 1 && !this.ironSourceSoundState && !this.isEndGame) {
        this.ironSourceSoundState = true;
        cc.audioEngine.play(this.AudioBg, true, 1);
      }

      if (this.ironSourceState === 2 && this.ironSourceSoundState) {
        this.ironSourceSoundState = false;
        cc.audioEngine.stopAll();
      }
    }

    if (this.Flag_Done) {
      this.ClickStoreNode.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxSZXMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJWaWV3TmdhbmciLCJOb2RlIiwiVmlld0RvYyIsInZpZXdEb2NHaXJsUmlnaWRib2R5Iiwidmlld05nYW5nR2lybFJpZ2lkYm9keSIsIkNsaWNrU3RvcmVPdmVybGF5XzEiLCJDbGlja1N0b3JlT3ZlcmxheV8yIiwiQ2xpY2tTdG9yZU5vZGUiLCJUb1N0b3JlIiwicmVxdWlyZSIsImdpcmxfZG9jIiwicm91bmRfZG9jIiwiaGFuZF9kb2MiLCJBdWRpb0JnIiwiQXVkaW9DbGlwIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiZGV2aWNlIiwiaXNSb3RhdGUiLCJvbkxvYWQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiVG9TdG9yZUZuIiwiRmxhZ0F1ZGlvIiwiaXJvblNvdXJjZVN0YXRlIiwiaXJvblNvdXJjZVNvdW5kU3RhdGUiLCJpc0VuZEdhbWUiLCJGbGFnX0RvbmUiLCJGbGFnQXVkaW9oYWhhIiwiRmxhZ01vdmUiLCJGbGFnU3RhdHVzIiwiaW5zdGFsbEhhbmRsZSIsIlN0YXJ0QXVkaW8iLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ1cGRhdGUiLCJkdCIsInNjcmVlblciLCJ3aW5TaXplIiwid2lkdGgiLCJzY3JlZW5IIiwiaGVpZ2h0IiwiYWN0aXZlIiwidmlldyIsImdldEZyYW1lU2l6ZSIsInNjYWxlIiwieSIsIngiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9wQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRE47QUFFUkMsSUFBQUEsT0FBTyxFQUFFTixFQUFF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NkIsSUFBN0I7QUFDSDtBQUNKO0FBL0dJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFZpZXdOZ2FuZzogY2MuTm9kZSxcclxuICAgICAgICBWaWV3RG9jOiBjYy5Ob2RlLFxyXG4gICAgICAgIHZpZXdEb2NHaXJsUmlnaWRib2R5OiBjYy5Ob2RlLFxyXG4gICAgICAgIHZpZXdOZ2FuZ0dpcmxSaWdpZGJvZHk6IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIENsaWNrU3RvcmVPdmVybGF5XzE6IGNjLk5vZGUsXHJcbiAgICAgICAgQ2xpY2tTdG9yZU92ZXJsYXlfMjogY2MuTm9kZSxcclxuICAgICAgICBDbGlja1N0b3JlTm9kZTogY2MuTm9kZSxcclxuICAgICAgICBUb1N0b3JlOiByZXF1aXJlKCdUb1N0b3JlJyksXHJcblxyXG4gICAgICAgIC8vIGhpZXAgY29uZmlnXHJcbiAgICAgICAgZ2lybF9kb2M6IGNjLk5vZGUsXHJcbiAgICAgICAgcm91bmRfZG9jOiBjYy5Ob2RlLFxyXG4gICAgICAgIGhhbmRfZG9jOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICAvLyBcclxuICAgICAgICBBdWRpb0JnOiBjYy5BdWRpb0NsaXAsXHJcblxyXG4gICAgICAgIEhPUklaT05UQUw6IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgIFZFUlRJQ0FMOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgZGV2aWNlOiBcIlwiLFxyXG4gICAgICAgIGlzUm90YXRlOiBmYWxzZSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBtdGcgJiBhcHBsb3ZpblxyXG4gICAgICAgIC8vIHRoaXMuQ2xpY2tTdG9yZU92ZXJsYXlfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5Ub1N0b3JlRm4sIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuQ2xpY2tTdG9yZU92ZXJsYXlfMi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5Ub1N0b3JlRm4sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkNsaWNrU3RvcmVOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLlRvU3RvcmVGbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5GbGFnQXVkaW8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXJvblNvdXJjZVN0YXRlID0gMTtcclxuICAgICAgICB0aGlzLmlyb25Tb3VyY2VTb3VuZFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzRW5kR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuRmxhZ19Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GbGFnQXVkaW9oYWhhID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkZsYWdNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkZsYWdTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLlN0YXJ0QXVkaW8oKTtcclxuICAgIH0sXHJcblxyXG4gICAgVG9TdG9yZUZuKCkge1xyXG4gICAgICAgIHRoaXMuVG9TdG9yZS5pbnN0YWxsSGFuZGxlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFN0YXJ0QXVkaW8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuRmxhZ0F1ZGlvKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlyb25Tb3VyY2VTb3VuZFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkZsYWdBdWRpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkF1ZGlvQmcsIHRydWUsIDAuOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGxldCBzY3JlZW5XID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgc2NyZWVuSCA9IGNjLndpblNpemUuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoc2NyZWVuVyA8IHNjcmVlbkgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuVkVSVElDQUwgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuVkVSVElDQUw7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmlld05nYW5nR2lybFJpZ2lkYm9keS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuVmlld0RvYy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlZpZXdOZ2FuZy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCA8IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSVBYXHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZXdEb2Muc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpcmxfZG9jLnkgPSAtMTkyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZF9kb2MueCA9IC03MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZF9kb2MueCA9IDEyOTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZF9kb2MueSA9IDg1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnZpZXdEb2NHaXJsUmlnaWRib2R5LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkhPUklaT05UQUwgPT09IHRoaXMuZGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRldmljZSA9IHRoaXMuSE9SSVpPTlRBTDtcclxuICAgICAgICAgICAgLy8gdGhpcy52aWV3RG9jR2lybFJpZ2lkYm9keS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuVmlld0RvYy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5WaWV3TmdhbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy52aWV3TmdhbmdHaXJsUmlnaWRib2R5LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pcm9uU291cmNlU3RhdGUgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvY29zU291bmRTdGF0ZVwiKSwgMTApXHJcbiAgICAgICAgaWYgKHRoaXMuaXJvblNvdXJjZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlyb25Tb3VyY2VTdGF0ZSA9PT0gMSAmJiAhdGhpcy5pcm9uU291cmNlU291bmRTdGF0ZSAmJiAhdGhpcy5pc0VuZEdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXJvblNvdXJjZVNvdW5kU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkF1ZGlvQmcsIHRydWUsIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pcm9uU291cmNlU3RhdGUgPT09IDIgJiYgdGhpcy5pcm9uU291cmNlU291bmRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pcm9uU291cmNlU291bmRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5GbGFnX0RvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5DbGlja1N0b3JlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=