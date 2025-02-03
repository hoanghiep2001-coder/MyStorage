System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Node, _decorator, Component, misc, log, EventManager, Global, GameManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ControllCue;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../Utility3D/Observer/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Utility3D/Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Utility3D/GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      misc = _cc.misc;
      log = _cc.log;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Global = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd7d4DnR0ZDoJbH7twNcFAt", "ControllCue", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ControllCue = (_dec = ccclass('ControllCue'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class ControllCue extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cueUI", _descriptor, this);

          _initializerDefineProperty(this, "cue", _descriptor2, this);

          _initializerDefineProperty(this, "guide", _descriptor3, this);

          _defineProperty(this, "isDragging", false);

          _defineProperty(this, "startY", 0);

          _defineProperty(this, "startYCueUIPos", 0);

          _defineProperty(this, "startXCuePos", 0);

          _defineProperty(this, "power", 0);

          _defineProperty(this, "boolFirstShoot", false);
        }

        onEnable() {
          this.onRegisterEvent();
        }

        onRegisterEvent() {
          this.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onMouseUp, this);
          this.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
        }

        onMouseDown(event) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).startingShoot) return;
          this.guide.active = false;
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).touchPowerBar = true;
          this.isDragging = true;
          this.startY = event.getLocationY();
          this.startYCueUIPos = this.cueUI.position.y;
          this.startXCuePos = this.cue.position.x;
        }

        onMouseMove(event) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).endGame) return;
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).startingShoot) return;
          if (!this.isDragging) return;
          let delta = event.getLocationY() - this.startY;
          delta *= 1.1;

          if (delta < 0) {
            this.power = Math.abs(delta / 407.954);
          } else {
            this.power = 0;
          }

          if (this.power == 0) return;
          this.power = this.power <= 0.1 ? 0.1 : this.power;
          this.power = this.power >= 1 ? 1 : this.power;
          let newY = this.startYCueUIPos + delta;
          newY = misc.clampf(newY, -418, -10.046);
          this.cueUI.setPosition(0, newY, 0);
          let newX = this.startXCuePos + delta * 0.00037994386;
          newX = misc.clampf(newX, -0.310, -0.155);
          this.cue.setPosition(newX, 0, 0);
        }

        onMouseUp(event) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).startingShoot) return;
          this.isDragging = false;
          if (this.power != 0) (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.emit((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).StartShoot, this.power);
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).shootCount -= 1;

          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).shootCount <= 0) {
            (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).isToStore = true;
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).Instance(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).ShowEndcard();
          }

          this.cueUI.setPosition(0, -10.046, 0);
          this.power = 0;
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).touchPowerBar = false;
          log("Shoot!");
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cueUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "guide", [_dec4], {
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
//# sourceMappingURL=ControllCue.js.map