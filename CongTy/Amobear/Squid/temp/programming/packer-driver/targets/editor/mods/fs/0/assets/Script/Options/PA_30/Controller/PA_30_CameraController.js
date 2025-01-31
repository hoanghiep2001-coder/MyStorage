System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, easing, tween, Vec3, GameInfo, TimeCount, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PA_30_CameraController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeCount(extras) {
    _reporterNs.report("TimeCount", "../Others/TimeCount", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      easing = _cc.easing;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      TimeCount = _unresolved_3.TimeCount;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57b003YX65FA4X9b9otAlLg", "PA_30_CameraController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CameraController
       * DateTime = Sat Dec 28 2024 14:11:22 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = CameraController.ts
       * FileBasenameNoExtension = CameraController
       * URL = db://assets/Script/Controller/CameraController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_30_CameraController", PA_30_CameraController = (_dec = ccclass('PA_30_CameraController'), _dec2 = property(_crd && TimeCount === void 0 ? (_reportPossibleCrUseOfTimeCount({
        error: Error()
      }), TimeCount) : TimeCount), _dec(_class = (_class2 = (_temp = class PA_30_CameraController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "TimeCount", _descriptor, this);

          _defineProperty(this, "ORIGINAL_POS", new Vec3(-11.4, 8.972, 11.4));

          _defineProperty(this, "ORIGINAL_EULER", new Vec3(-15, -45, 0));

          _defineProperty(this, "ORIGINAL_FOV", 45);

          _defineProperty(this, "boxToTarget", null);

          _defineProperty(this, "target", null);

          _defineProperty(this, "followDistance", 1.1);

          _defineProperty(this, "followHeight", 1.1);

          _defineProperty(this, "_targetPos", new Vec3());

          _defineProperty(this, "isReadyToLookAt", false);

          _defineProperty(this, "isShowFullBox", false);

          _defineProperty(this, "isCombackOriginalPos", false);
        }

        start() {// this.originalPos = this.node.getPosition();
        }

        handleTweenToTable() {
          const tablePos = new Vec3(0.338, 9.477, -0.31),
                newEuler = new Vec3(-90, -5, 0);
          tween(this.node).to(2, {
            eulerAngles: newEuler,
            position: tablePos
          }, {
            easing: easing.smooth
          }).call(() => (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = true).start();
        }

        handleGoToBox(boxWorldPos) {
          const newEuler = new Vec3(-45, -5, 0);
          const cameraComp = this.getComponent(Camera);
          const currentFov = cameraComp.fov;
          tween(this.node).to(1, {
            worldPosition: new Vec3(boxWorldPos.x, boxWorldPos.y + 3, boxWorldPos.z + 3),
            eulerAngles: newEuler
          }, {
            easing: easing.smooth
          }).start();
          tween(cameraComp).delay(0.5).to(0.3, {
            fov: currentFov - 18
          }, {
            easing: easing.smooth
          }).call(() => {
            this.isReadyToLookAt = true;
            this.TimeCount.node.active = true;
          }).start();
        }

        handleLookAt() {
          if (!this.target || !this.isReadyToLookAt) return; // Lấy vị trí hiện tại của needle

          this.target.getWorldPosition(this._targetPos); // Tính toán vị trí camera (phía sau needle)

          const cameraPos = new Vec3(this._targetPos.x, this._targetPos.y + this.followHeight, this._targetPos.z + this.followDistance); // Di chuyển camera đến vị trí mới

          this.node.setWorldPosition(cameraPos); // Hướng camera đến needle

          this.node.lookAt(this._targetPos);
        }

        combackOriginalPos() {
          this.isCombackOriginalPos = true;
          this.target = null;
          const cameraComp = this.getComponent(Camera);
          tween(cameraComp).to(0.3, {
            fov: this.ORIGINAL_FOV
          }, {
            easing: easing.smooth
          }).start();
          tween(this.node).delay(0.3).to(0.5, {
            position: this.ORIGINAL_POS,
            eulerAngles: this.ORIGINAL_EULER
          }, {
            easing: easing.smooth
          }).start();
        }

        showFullBox() {
          if (this.isShowFullBox) return;
          this.isShowFullBox = true;
          let needleTarget = this.target.getPosition();
          tween(this.target).to(0.3, {
            position: new Vec3(needleTarget.x, needleTarget.y - 10, needleTarget.z)
          }, {
            easing: easing.smooth
          }).start();
          this.target = null;
          this.isReadyToLookAt = false;
          const cameraComp = this.getComponent(Camera);
          const targetWorldPos = this.boxToTarget.worldPosition;
          const newWorldPos = new Vec3(targetWorldPos.x, targetWorldPos.y + 3, targetWorldPos.z);
          const newEuler = new Vec3(-90, -5, 0);
          tween(cameraComp).to(0.3, {
            fov: this.ORIGINAL_FOV
          }, {
            easing: easing.smooth
          }).start();
          tween(this.node).delay(0.3).to(0.5, {
            worldPosition: newWorldPos,
            eulerAngles: newEuler
          }, {
            easing: easing.smooth
          }).call(() => (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isDetachCandy = true).start();
        }

        update(dt) {
          this.handleLookAt();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isDoneDrawCandy && !(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isTimeOver) this.showFullBox();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isTimeOver && !this.isCombackOriginalPos) this.combackOriginalPos();
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isDoneAllStep && !this.isCombackOriginalPos) this.combackOriginalPos();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "TimeCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PA_30_CameraController.js.map