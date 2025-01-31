System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, geometry, log, Node, PhysicsSystem, GameInfo, UIGameController, CONST, GameController, SoundController, CarBehavior, CarEnabledClick, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, HideMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIGameController(extras) {
    _reporterNs.report("UIGameController", "../Controller/UIGameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../Const/CONST", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../Controller/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../Controller/SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarBehavior(extras) {
    _reporterNs.report("CarBehavior", "../Car/CarBehavior", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarEnabledClick(extras) {
    _reporterNs.report("CarEnabledClick", "../Car/CarEnabledClick", _context.meta, extras);
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
      log = _cc.log;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      UIGameController = _unresolved_3.UIGameController;
    }, function (_unresolved_4) {
      CONST = _unresolved_4.CONST;
    }, function (_unresolved_5) {
      GameController = _unresolved_5.GameController;
    }, function (_unresolved_6) {
      SoundController = _unresolved_6.SoundController;
    }, function (_unresolved_7) {
      CarBehavior = _unresolved_7.CarBehavior;
    }, function (_unresolved_8) {
      CarEnabledClick = _unresolved_8.CarEnabledClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6c022SKolJ0LFO1LunLlqP", "HideMask", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HideMask", HideMask = (_dec = ccclass('HideMask'), _dec2 = property(_crd && UIGameController === void 0 ? (_reportPossibleCrUseOfUIGameController({
        error: Error()
      }), UIGameController) : UIGameController), _dec3 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec4 = property(Camera), _dec(_class = (_class2 = (_temp = class HideMask extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "UIGameController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);

          _initializerDefineProperty(this, "Cam_3D", _descriptor3, this);
        }

        init() {}

        start() {
          this.init();
          this.registerEvent();
        }

        registerEvent() {
          // let test: Node = null;
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        }

        touchStart(event) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch) return; // IronSource.handleIronSourcePlaySound();

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isToStore || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall) {
            // applovin, mtg
            this.GameController.installHandle();
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

            if (collider.node.name.includes("Car") || collider.node.name.includes("Van") || collider.node.name.includes("Bus")) {
              var _collider$getComponen;

              // can't click on car has enabledClick in name
              if ((_collider$getComponen = collider.getComponent(_crd && CarEnabledClick === void 0 ? (_reportPossibleCrUseOfCarEnabledClick({
                error: Error()
              }), CarEnabledClick) : CarEnabledClick)) === null || _collider$getComponen === void 0 ? void 0 : _collider$getComponen.isCarEnabledClick) {
                log("click blocked");
                return;
              }

              ;
              this.UIGameController.Tut_1.active = false;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).isTouching = true;
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                error: Error()
              }), CONST) : CONST).SoundTrack.clickSound);
              var CarBehaviorComp = collider.node.getComponent(_crd && CarBehavior === void 0 ? (_reportPossibleCrUseOfCarBehavior({
                error: Error()
              }), CarBehavior) : CarBehavior);
              CarBehaviorComp.setMoveBehavior();
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "UIGameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Cam_3D", [_dec4], {
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
//# sourceMappingURL=HideMask.js.map