System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, RigidBody, Vec3, EventManager, Global, Utility, DefaultBall, GameManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, Cue;

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

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utility3D/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefaultBall(extras) {
    _reporterNs.report("DefaultBall", "./DefaultBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "../Utility3D/GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      Global = _unresolved_3.default;
    }, function (_unresolved_4) {
      Utility = _unresolved_4.default;
    }, function (_unresolved_5) {
      DefaultBall = _unresolved_5.DefaultBall;
    }, function (_unresolved_6) {
      GameManager = _unresolved_6.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "785c5N/wClOk4NILvzMSbGn", "Cue", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Cue
       * DateTime = Tue May 21 2024 16:34:37 GMT+0700 (Indochina Time)
       * Author = PhongDNRocket123
       * FileBasename = Cue.ts
       * FileBasenameNoExtension = Cue
       * URL = db://assets/Scripts/GamePlay/Cue.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("Cue", Cue = (_dec = ccclass('Cue'), _dec2 = property(RigidBody), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class Cue extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "defaultBall", _descriptor, this);

          _initializerDefineProperty(this, "pointShoot", _descriptor2, this);

          _initializerDefineProperty(this, "checkPoint", _descriptor3, this);

          _initializerDefineProperty(this, "joystick", _descriptor4, this);

          _initializerDefineProperty(this, "line", _descriptor5, this);

          _defineProperty(this, "basePower", 250);

          _defineProperty(this, "boolStartShoot", false);

          _defineProperty(this, "boolFirstShoot", false);

          _defineProperty(this, "shootCount", 0);

          _defineProperty(this, "countToEndcard", 0);
        }

        onEnable() {}

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.on((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).StartShoot, this.StartShoot, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).instance.on((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).ResetGame, this.ResetCue, this);
        }

        StartShoot(power) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).endGame) return;
          this.shootCount += 1;
          (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).Instance(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager).guide.active = false;
          this.defaultBall.getComponent(_crd && DefaultBall === void 0 ? (_reportPossibleCrUseOfDefaultBall({
            error: Error()
          }), DefaultBall) : DefaultBall).prePos = this.defaultBall.node.getWorldPosition();
          this.node.children[0].children[0].active = false;
          this.joystick.active = false;
          this.line.active = false;
          var dir = this.pointShoot.getWorldPosition().subtract(this.defaultBall.node.getWorldPosition()).normalize();
          dir.y = 0;
          dir = dir.normalize();
          this.defaultBall.applyForce(dir.multiplyScalar(this.basePower * power), this.defaultBall.node.getPosition());
          this.basePower = 100;
          this.scheduleOnce(() => {
            this.boolFirstShoot = true;
            this.boolStartShoot = true;
            (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).startingShoot = true;
          }, 0.1);
        }

        SetPos() {
          this.countToEndcard += 1;

          if (this.countToEndcard == 5) {
            (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).Instance(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
              error: Error()
            }), GameManager) : GameManager).btnAll.active = true; //   Global.endGame = true;
          }

          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).startingShoot = false;
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).firstShoot = true;
          this.line.active = true;
          this.node.setPosition(new Vec3(-0.155, 0, 0));
          this.node.children[0].children[0].active = true;
          this.node.parent.setWorldPosition(this.defaultBall.node.getWorldPosition());
          this.joystick.active = true;

          if (!(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDefaultBallFall) {
            this.node.parent.setRotationFromEuler(0, (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).RandomRangeFloat(-30, 30), 1);
          }

          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isDefaultBallFall = false;
        }

        update(dt) {
          if ((_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).endGame) return; //log("joystick3 " + this.node.parent.getWorldPosition().x);
          //  log("ball " + this.defaultBall.node.getWorldPosition());
          //  log("cue " + this.node.children[0].children[0].getPosition());

          if (!this.defaultBall.node.getComponent(_crd && DefaultBall === void 0 ? (_reportPossibleCrUseOfDefaultBall({
            error: Error()
          }), DefaultBall) : DefaultBall).checkMoving() && this.boolFirstShoot) {
            if (this.boolStartShoot) {
              this.boolStartShoot = false;
              this.scheduleOnce(() => {
                this.SetPos();
              }, 1);
            } //log("notmoving");

          }
        }

        ResetCue() {
          if (this.shootCount <= 1) {
            this.shootCount = 0;
            (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).firstShoot = false;
            (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).startingShoot = false;
            this.basePower = 250;
          }

          this.checkPoint.active = true; //this.basePower = 200;

          this.boolStartShoot = false;
          this.boolFirstShoot = false;
          (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).startingShoot = false;
          this.line.active = true;
          this.node.parent.setWorldRotationFromEuler(0, 0, 0);
          this.node.setPosition(new Vec3(-0.155, 0, 0));
          this.node.children[0].children[0].active = true;
          this.node.parent.setWorldPosition(this.defaultBall.node.getWorldPosition());
          this.joystick.active = true;
          this.unscheduleAllCallbacks();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultBall", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pointShoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "checkPoint", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "joystick", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec6], {
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
//# sourceMappingURL=Cue.js.map