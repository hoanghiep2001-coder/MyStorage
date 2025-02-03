System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Collider, Animation, Vec3, Camera, Label, Prefab, instantiate, Main, AudioManager, Constants, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, Ball;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMain(extras) {
    _reporterNs.report("Main", "./Main", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./Plugin/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Data/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Collider = _cc.Collider;
      Animation = _cc.Animation;
      Vec3 = _cc.Vec3;
      Camera = _cc.Camera;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Main = _unresolved_2.Main;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19e47EHJJFPfa6vQgioWiK1", "MainBall", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec2 = property(_crd && Main === void 0 ? (_reportPossibleCrUseOfMain({
        error: Error()
      }), Main) : Main), _dec3 = property(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
        error: Error()
      }), AudioManager) : AudioManager), _dec4 = property(Camera), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Node), _dec(_class = (_class2 = (_temp = class Ball extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Main", _descriptor, this);

          _initializerDefineProperty(this, "AudioManager", _descriptor2, this);

          _initializerDefineProperty(this, "Camera", _descriptor3, this);

          _initializerDefineProperty(this, "Canvas", _descriptor4, this);

          _initializerDefineProperty(this, "combo_collideTable", _descriptor5, this);

          _initializerDefineProperty(this, "cube", _descriptor6, this);

          _defineProperty(this, "audioId", null);

          _defineProperty(this, "comboCollide", 0);
        }

        FixedPositionX() {
          var pos = this.node.position;
          this.node.setPosition(pos.x, 0, pos.z);
        }

        start() {
          var myCollider = this.node.getComponent(Collider);
          myCollider.on("onCollisionEnter", target => {
            var isPhysic = target.otherCollider.node;

            if (isPhysic.name.indexOf('hole') != -1) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isLose = true;
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.LoseSound);
              this.node.active = false;
            }

            if (isPhysic.name.indexOf('Cube') != -1) {
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.hitSound);
              this.scheduleOnce(() => {
                (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).isLose = true;
              }, 2);
            }

            if (isPhysic.name.indexOf('collider_table') != -1) {
              !(_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isLose && this.activeComboCollideTable(isPhysic);
              this.AudioManager.playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).SoundTrack.collideWallSound);
            }
          });
        }

        activeComboCollideTable(physicNode) {
          this.comboCollide += 1;
          var out = new Vec3();
          var wpos = physicNode.worldPosition;
          this.Camera.convertToUINode(wpos, this.Canvas, out);
          var node = instantiate(this.combo_collideTable);
          var label = node.getChildByName("Label").getComponent(Label);
          label.string = String(this.comboCollide);
          node.parent = this.Canvas;
          node.position = out;
          node.getComponent(Animation).play("CollideCombo");
        }

        update() {
          // this.label.string = String(this.comboCollide);
          var thisPos = this.node.getPosition();
          this.cube.setPosition(thisPos.x, 0.55, thisPos.z + 0.02); // this.FixedPositionX();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Main", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AudioManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Canvas", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "combo_collideTable", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cube", [_dec7], {
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
//# sourceMappingURL=MainBall.js.map