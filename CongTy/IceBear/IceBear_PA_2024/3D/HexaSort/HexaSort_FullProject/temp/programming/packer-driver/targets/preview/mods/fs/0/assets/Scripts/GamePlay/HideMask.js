System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, IronSource, GameInfo, Utility, UIGameController, GameController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, HideMask;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIronSource(extras) {
    _reporterNs.report("IronSource", "../AdHelper/IronSource", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utils/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIGameController(extras) {
    _reporterNs.report("UIGameController", "../Controller/UIGameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../Controller/GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      IronSource = _unresolved_2.IronSource;
    }, function (_unresolved_3) {
      GameInfo = _unresolved_3.GameInfo;
    }, function (_unresolved_4) {
      Utility = _unresolved_4.Utility;
    }, function (_unresolved_5) {
      UIGameController = _unresolved_5.UIGameController;
    }, function (_unresolved_6) {
      GameController = _unresolved_6.GameController;
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
      }), GameController) : GameController), _dec(_class = (_class2 = (_temp = class HideMask extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "UIGameController", _descriptor, this);

          _initializerDefineProperty(this, "GameController", _descriptor2, this);
        }

        init() {}

        start() {
          this.init();
          this.registerEvent();
        }

        registerEvent() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        touchStart(event) {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isToStore) {
            this.GameController.installHandle();
            return;
          }

          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch || (_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
            error: Error()
          }), IronSource) : IronSource).isEndGame) return; // IronSource.handleIronSourcePlaySound();

          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching = true;
          var touchPos = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).convertToLocalLocation(event.getUILocation(), this.node);
          this.UIGameController.Cursor.setPosition(touchPos);
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).touchPos = touchPos; // this.UIGameController.Tutorial.active = false;
        }

        touchMove(event) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch || (_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
            error: Error()
          }), IronSource) : IronSource).isEndGame || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isToStore) return;
          this.UIGameController.Cursor.setPosition((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).touchPos);
          var touchPos = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).convertToLocalLocation(event.getUILocation(), this.node);
          this.UIGameController.Cursor.setPosition(touchPos); // LogicGamePlay.HandleIntersectsPoints(GameInfo.UI_MergePoint , this.UIGameController.Point);

          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).touchPos = touchPos;
        }

        touchEnd() {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch || (_crd && IronSource === void 0 ? (_reportPossibleCrUseOfIronSource({
            error: Error()
          }), IronSource) : IronSource).isEndGame || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isToStore) return;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching = false; // this.UIGameController.Point.active = false;
          // LogicGamePlay.HandleClearGraphics(this.UIGameController.Graphics);
          // let roboChoosenArr = GameInfo.playerStartGameRobo.filter(robo => {
          //     if(robo.getComponent(RoboBehavior).isPickup) return robo;
          // });
          // if(roboChoosenArr.length >= 2) LogicGamePlay.mergeRobo();
          // else LogicGamePlay.resetRobos();
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HideMask.js.map