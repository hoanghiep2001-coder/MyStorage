System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, math, view, GamePlay, JoyStick, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Responsive;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGamePlay(extras) {
    _reporterNs.report("GamePlay", "./GamePlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoyStick(extras) {
    _reporterNs.report("JoyStick", "./JoyStick", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      math = _cc.math;
      view = _cc.view;
    }, function (_unresolved_2) {
      GamePlay = _unresolved_2.GamePlay;
    }, function (_unresolved_3) {
      JoyStick = _unresolved_3.JoyStick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96cd1/50FZEdpbn/o5xig83", "Responsive", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Responsive", Responsive = (_dec = ccclass('Responsive'), _dec2 = property(_crd && GamePlay === void 0 ? (_reportPossibleCrUseOfGamePlay({
        error: Error()
      }), GamePlay) : GamePlay), _dec3 = property(_crd && JoyStick === void 0 ? (_reportPossibleCrUseOfJoyStick({
        error: Error()
      }), JoyStick) : JoyStick), _dec(_class = (_class2 = (_temp = class Responsive extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GamePlay", _descriptor, this);

          _initializerDefineProperty(this, "JoyStick", _descriptor2, this);

          _defineProperty(this, "isRotate", false);
        }

        start() {}

        handleRotate() {
          if (view.getFrameSize().width > view.getFrameSize().height) {
            this.isRotate = true;
            this.setHorizontal();
          } else {
            this.isRotate = false;
            this.setVertical();
          }
        }

        setHorizontal() {
          this.GamePlay.text_90Per.setPosition(new math.Vec3(0, -180, 0));
          this.GamePlay.text_90Per.setScale(new math.Vec3(0.45, 0.45, 0.45));
          this.GamePlay.text.setPosition(new math.Vec3(0, -10.505, 12.8));
          this.GamePlay.text.setScale(new math.Vec3(3.5, 0.8, 0.33));
          this.GamePlay.Spine_Blast.setScale(new math.Vec3(0.25, 0.25, 0.25));
          this.GamePlay.Spine_Blast.setPosition(new math.Vec3(0, 25, 0));
          this.GamePlay.Spine_Blast2.setPosition(new math.Vec3(-10, 15, 0));
          this.GamePlay.Spine_Blast2.setScale(new math.Vec3(0.15, 0.15, 0.15));
          this.GamePlay.Spine_Blast3.setPosition(new math.Vec3(10, 15, 0));
          this.GamePlay.Spine_Blast3.setScale(new math.Vec3(0.15, 0.15, 0.15));
          this.GamePlay.Camera.fov = 50;
          this.JoyStick.isRotate = true;
          this.GamePlay.PointRobos[0].setPosition(new math.Vec3(-105, 17, 0));
          this.GamePlay.PointRobos[1].setPosition(new math.Vec3(-48, 17, 0));
          this.GamePlay.PointRobos[2].setPosition(new math.Vec3(2, 12, 0));
          this.GamePlay.PointRobos[3].setPosition(new math.Vec3(1, -41, 0));
          this.GamePlay.PointRobos[4].setPosition(new math.Vec3(-1, -111, 0));
          this.GamePlay.PointRobos[5].setPosition(new math.Vec3(-58, -110, 0));
          this.GamePlay.PointRobos[6].setPosition(new math.Vec3(-122, -111, 0));
          this.GamePlay.PointRobos[7].setPosition(new math.Vec3(-117, -46, 0));
        }

        setVertical() {
          this.GamePlay.text.setPosition(new math.Vec3(0, -11.605, 13.392));
          this.GamePlay.text.setScale(new math.Vec3(2.5, 0.4, 0.33));
          this.GamePlay.Spine_Blast.setPosition(new math.Vec3(0, 75, 0));
          this.GamePlay.Spine_Blast.setScale(new math.Vec3(0.6, 0.6, 0.6));
          this.GamePlay.Spine_Blast2.setPosition(new math.Vec3(-30, 65, 0));
          this.GamePlay.Spine_Blast2.setScale(new math.Vec3(0.45, 0.45, 0.45));
          this.GamePlay.Spine_Blast3.setPosition(new math.Vec3(20, 65, 0));
          this.GamePlay.Spine_Blast3.setScale(new math.Vec3(0.45, 0.45, 0.45));
          this.JoyStick.isRotate = false;
          this.GamePlay.PointRobos[0].setPosition(new math.Vec3(-105, 17, 0));
          this.GamePlay.PointRobos[1].setPosition(new math.Vec3(-48, 17, 0));
          this.GamePlay.PointRobos[2].setPosition(new math.Vec3(2, 12, 0));
          this.GamePlay.PointRobos[3].setPosition(new math.Vec3(1, -41, 0));
          this.GamePlay.PointRobos[4].setPosition(new math.Vec3(-1, -126, 0));
          this.GamePlay.PointRobos[5].setPosition(new math.Vec3(-58, -125, 0));
          this.GamePlay.PointRobos[6].setPosition(new math.Vec3(-122, -126, 0));
          this.GamePlay.PointRobos[7].setPosition(new math.Vec3(-117, -46, 0));

          if (view.getFrameSize().width / view.getFrameSize().height < 0.5) {
            // Iphone X
            this.GamePlay.text_90Per.setPosition(new math.Vec3(0, -250, 0));
            this.GamePlay.text_90Per.setScale(new math.Vec3(0.4, 0.4, 0.4));
            this.GamePlay.Camera.fov = 64;
          } else {
            // Other Mobile
            this.GamePlay.text_90Per.setPosition(new math.Vec3(0, -208, 0));
            this.GamePlay.text_90Per.setScale(new math.Vec3(0.4, 0.4, 0.4));
            this.GamePlay.Camera.fov = 58;
          }
        }

        update(deltaTime) {
          this.handleRotate();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GamePlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "JoyStick", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Responsive.js.map