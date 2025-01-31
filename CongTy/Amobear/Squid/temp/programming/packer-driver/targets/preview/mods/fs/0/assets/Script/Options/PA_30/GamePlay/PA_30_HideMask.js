System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, geometry, Node, PhysicsSystem, GameInfo, GameController, BoxBehavior, PA_30_CameraController, HayChonGiaDung, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, PA_30_HideMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../../Controller/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxBehavior(extras) {
    _reporterNs.report("BoxBehavior", "../Box/BoxBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPA_30_CameraController(extras) {
    _reporterNs.report("PA_30_CameraController", "../Controller/PA_30_CameraController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHayChonGiaDung(extras) {
    _reporterNs.report("HayChonGiaDung", "../Others/HayChonGiaDung", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      geometry = _cc.geometry;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      GameController = _unresolved_3.GameController;
    }, function (_unresolved_4) {
      BoxBehavior = _unresolved_4.BoxBehavior;
    }, function (_unresolved_5) {
      PA_30_CameraController = _unresolved_5.PA_30_CameraController;
    }, function (_unresolved_6) {
      HayChonGiaDung = _unresolved_6.HayChonGiaDung;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0cc3bmcUlJI66L1wOAMQg6o", "PA_30_HideMask", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = PA_30_HideMask
       * DateTime = Sat Dec 28 2024 14:36:14 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = PA_30_HideMask.ts
       * FileBasenameNoExtension = PA_30_HideMask
       * URL = db://assets/Script/Options/PA_30/GamePlay/PA_30_HideMask.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("PA_30_HideMask", PA_30_HideMask = (_dec = ccclass('PA_30_HideMask'), _dec2 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec3 = property(Camera), _dec4 = property(_crd && HayChonGiaDung === void 0 ? (_reportPossibleCrUseOfHayChonGiaDung({
        error: Error()
      }), HayChonGiaDung) : HayChonGiaDung), _dec(_class = (_class2 = (_temp = class PA_30_HideMask extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "Cam_3D", _descriptor2, this);

          _initializerDefineProperty(this, "HayChonGiaDung", _descriptor3, this);

          _defineProperty(this, "isChooseBox", false);

          _defineProperty(this, "isPlayingDetachCandy", false);

          _defineProperty(this, "boxChoosen", null);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          // let test: Node = null;
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        touchStart(event) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch || !(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsPlaying) return; // IronSource.handleIronSourcePlaySound();

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isToStore || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall) {
            // applovin, mtg
            // this.GameController.installHandle();
            return;
          }

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.isDetachCandy) {
            this.HayChonGiaDung.boxChoosen = this.boxChoosen;
            var detachResult = this.HayChonGiaDung.getCurrentRollResult();
            if (!detachResult) this.HayChonGiaDung.wrong();else this.HayChonGiaDung.nextDetach();
            return;
          }

          if (this.isChooseBox) {
            if (!this.isPlayingDetachCandy) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).Squid_PA_30.isStartPlaying = true;
              this.isPlayingDetachCandy = true;
              this.boxChoosen.setAnimDetachCandyState("play"); // this.
            }

            this.boxChoosen.setAnimDetachCandyState("resume");
            return;
          }

          this.getRaycastResult(event);
        }

        getRaycastResult(touchPos) {
          var ray = new geometry.Ray();
          this.Cam_3D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray); // The following parameters are optional

          var mask = 0xffffffff;
          var maxDistance = 10000000;
          var queryTrigger = true;

          if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            var raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            var collider = raycastClosestResult.collider;

            if (collider.node.name.includes("Box")) {
              this.isChooseBox = true;
              var boxWorldPos = collider.node.worldPosition;
              var boxBehavior = collider.getComponent(_crd && BoxBehavior === void 0 ? (_reportPossibleCrUseOfBoxBehavior({
                error: Error()
              }), BoxBehavior) : BoxBehavior);
              var cameraController = this.Cam_3D.getComponent(_crd && PA_30_CameraController === void 0 ? (_reportPossibleCrUseOfPA_30_CameraController({
                error: Error()
              }), PA_30_CameraController) : PA_30_CameraController);
              this.boxChoosen = boxBehavior;
              boxBehavior.activeUnBoxAnim();
              cameraController.target = boxBehavior.needle;
              cameraController.handleGoToBox(boxWorldPos);
              cameraController.boxToTarget = this.boxChoosen.node; // const boxIndex = Utils.getTrailingNumber(collider.node.name);
              // collider.getComponent(animation)
            }
          }
        }

        touchEnd() {
          if (this.isChooseBox) {
            this.boxChoosen.setAnimDetachCandyState("pause"); // this.boxChoosen.KeoSao.getComponent(Animation).pause()

            return;
          }
        }

        createLine() {// let needleworldPos = this.boxChoosen.needle.getPosition();
          // let newLine = instantiate(this.Line);
          // newLine.setRotationFromEuler(-90,0,0);
          // newLine.setScale(0.44, 0.44, 0.7049 * 0.44 / 100);
          // newLine.setPosition(needleworldPos.x + 0.08, needleworldPos.y + 0.24, needleworldPos.z + 0.13);
          // newLine.parent = this.boxChoosen.node;
          // log(newLine.getPosition())
          // GameInfo.Squid_PA_30.lineRenderPoints.push(this.boxChoosen.needle.worldPosition);
        } // protected update(dt: number): void {
        // if(GameInfo.Squid_PA_30.isDetachCandy) this.createLine();
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Cam_3D", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "HayChonGiaDung", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PA_30_HideMask.js.map