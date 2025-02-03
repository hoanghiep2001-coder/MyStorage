System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Constants, _decorator, Component, Node, Label, sp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6863ZXiKJEuaUBIhBV46mf", "PlayerMount", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Player = (_dec = property(Node), _dec2 = property(Node), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(Node), _dec6 = property(Label), ccclass(_class = (_class2 = (_temp = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "Player", _descriptor2, this);

          _initializerDefineProperty(this, "Spine_Fish", _descriptor3, this);

          _initializerDefineProperty(this, "Spine_Bite", _descriptor4, this);

          _initializerDefineProperty(this, "TouchArea", _descriptor5, this);

          _initializerDefineProperty(this, "Level", _descriptor6, this);

          _defineProperty(this, "isLevelUp", false);

          _defineProperty(this, "isDoneAnim", true);

          _defineProperty(this, "score", 20);

          _defineProperty(this, "trackEntry", null);
        }

        start() {}

        onCollisionEnter(other, self) {
          if (other.tag == 1 && this.TouchArea.getComponent("TouchArea").isTouched) {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).ironSource.SoundState) {
              this.GameController.getComponent("GameController").playAudio(this.GameController.getComponent("GameController").audioEat);
            }

            this.handleEatFishLv1(other);
          }

          if (other.tag == 3 && this.TouchArea.getComponent("TouchArea").isTouched) {
            if (this.Player.getComponent("PlayerController").isLevelUp) {
              if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).ironSource.SoundState) {
                this.GameController.getComponent("GameController").playAudio(this.GameController.getComponent("GameController").audioEat);
              }

              this.handleEatFishLv2(other);
            }
          }
        }

        handleEatFishLv1(other) {
          if (this.TouchArea.getComponent("TouchArea").isTouched) {
            this.score += 5;

            if (other.getComponent("Enemy").isLive) {
              other.getComponent("Enemy").die(); // this.Spine_Bite.node.active = true;
              // this.Spine_Bite.node.setPosition(other.node.getPosition());
              // this.Spine_Bite.setAnimation(0, "bite", false);
            }
          }
        }

        handleEatFishLv2(other) {
          if (this.TouchArea.getComponent("TouchArea").isTouched) {
            this.score += 800;

            if (other.getComponent("Enemy").isLive) {
              other.getComponent("Enemy").die(); // this.Spine_Bite.node.active = true;
              // this.Spine_Bite.node.setPosition(other.node.getPosition());
              // this.Spine_Bite.setAnimation(0, "bite", false);
            }
          }
        }

        update(dt) {
          this.Level.string = String(this.score);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Spine_Fish", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Spine_Bite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "TouchArea", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Level", [_dec6], {
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
//# sourceMappingURL=PlayerMount.js.map