System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, RigidBody, BoxCollider, ERigidBodyType, math, AudioManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BulletController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
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
      BoxCollider = _cc.BoxCollider;
      ERigidBodyType = _cc.ERigidBodyType;
      math = _cc.math;
    }, function (_unresolved_2) {
      AudioManager = _unresolved_2.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c4f1wD5ydNW7BhKClncpMY", "BulletController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletController", BulletController = (_dec = ccclass('BulletController'), _dec2 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class BulletController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "AudioManager", _descriptor, this);

          _initializerDefineProperty(this, "GamePlay", _descriptor2, this);

          _defineProperty(this, "isRun", false);

          _defineProperty(this, "isDoneFight", false);

          _defineProperty(this, "rigidbody", void 0);

          _defineProperty(this, "collider", void 0);
        }

        start() {
          // this.node.active = false;
          this.rigidbody = this.getComponent(RigidBody);
          this.collider = this.getComponent(BoxCollider);
          this.collider.on("onCollisionEnter", e => {
            if (e.otherCollider.node.name === "Merged_BanBan") {
              this.isRun = false;
              this.isDoneFight = true;
              this.rigidbody.type = ERigidBodyType.STATIC;
              this.node.active = false;
              this.GamePlay.getComponent("GamePlay").countingBoomBullet++;
              this.GamePlay.getComponent("GamePlay").handleRunSpineBlast();
              this.AudioManager.blastSound.play();
            }
          });
        }

        Run() {
          this.rigidbody.setLinearVelocity(new math.Vec3(0, 0, 5));
        }

        update(dt) {
          if (this.isRun) this.Run();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GamePlay", [_dec3], {
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
//# sourceMappingURL=BulletController.js.map