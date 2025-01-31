System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, UITransform, Vec2, Vec3, GameInfo, BlackHole, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, JoyStick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlackHole(extras) {
    _reporterNs.report("BlackHole", "./BlackHole", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      BlackHole = _unresolved_3.BlackHole;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30ac6irbQBJfYSeVRJe4rb2", "JoyStick", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = JoyStick
       * DateTime = Wed Jan 01 2025 10:19:33 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = JoyStick.ts
       * FileBasenameNoExtension = JoyStick
       * URL = db://assets/Scripts/GamePlay/JoyStick.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("JoyStick", JoyStick = (_dec = ccclass('JoyStick'), _dec2 = property(_crd && BlackHole === void 0 ? (_reportPossibleCrUseOfBlackHole({
        error: Error()
      }), BlackHole) : BlackHole), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class JoyStick extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "BlackHole", _descriptor, this);

          _defineProperty(this, "currentTouchPos", null);

          _initializerDefineProperty(this, "max_r", _descriptor2, this);

          _initializerDefineProperty(this, "stick", _descriptor3, this);
        }

        start() {
          this.initProps();
          this.registerEvent();
        }

        initProps() {
          this.max_r.active = false;
          this.stick.active = false;
        }

        registerEvent() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        }

        touchStart(event) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch) return;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching = true;
          this.toggleJoystickUI();
          this.currentTouchPos = this.getLocalTouchPos(event);
          this.max_r.setPosition(this.currentTouchPos);
          this.stick.setPosition(this.currentTouchPos);
          this.BlackHole.bonceAnim();
        }

        touchMove(event) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch) return;
          this.currentTouchPos = this.getLocalTouchPos(event);
          const distance = this.currentTouchPos.clone().subtract(this.max_r.position),
                max_r_ratio = this.max_r.getComponent(UITransform).width / 2; // convert stick to max_r ratio

          if (distance.length() > max_r_ratio) {
            distance.normalize().multiplyScalar(max_r_ratio);
            this.currentTouchPos = this.max_r.position.clone().add(distance);
          }

          this.stick.setPosition(this.currentTouchPos);
          this.BlackHole.radian = this.getRadian();
        }

        touchEnd() {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isTouching = false;
          this.toggleJoystickUI();
        }

        toggleJoystickUI() {
          this.max_r.active = !this.max_r.active;
          this.stick.active = !this.stick.active;
        }

        getLocalTouchPos(event) {
          let result = new Vec3();
          const PROJECT_DESIGN_WIDTH = 320,
                PROJECT_DESIGN_HEIGHT = 480,
                screenPos = event.getUILocation(),
                x = screenPos.x - PROJECT_DESIGN_WIDTH / 2,
                y = screenPos.y - PROJECT_DESIGN_HEIGHT / 2,
                z = 0;
          result = new Vec3(x, y, z);
          return result;
        }

        getRadian() {
          let result = null;
          let directionVector;
          let max_r_pos = this.max_r.getPosition();
          let newPos = new Vec2(max_r_pos.x, max_r_pos.y);
          directionVector = this.stick.getPosition().subtract(new Vec3(newPos.x, newPos.y, 0));
          result = Math.atan2(directionVector.y, directionVector.x);
          return result;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BlackHole", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "max_r", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stick", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=JoyStick.js.map