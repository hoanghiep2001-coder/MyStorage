System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, AudioClip, AudioSource, Main, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, Ball;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMain(extras) {
    _reporterNs.report("Main", "./Main", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Main = _unresolved_2.Main;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19e47EHJJFPfa6vQgioWiK1", "Ball", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec2 = property(_crd && Main === void 0 ? (_reportPossibleCrUseOfMain({
        error: Error()
      }), Main) : Main), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec(_class = (_class2 = (_temp = class Ball extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Main", _descriptor, this);

          _initializerDefineProperty(this, "Bling", _descriptor2, this);

          _initializerDefineProperty(this, "Round_Red", _descriptor3, this);

          _initializerDefineProperty(this, "Gr_Hole", _descriptor4, this);

          _initializerDefineProperty(this, "Ef_combo", _descriptor5, this);

          _initializerDefineProperty(this, "Collider_Table_Audio", _descriptor6, this);

          _initializerDefineProperty(this, "Collider_01_Audio", _descriptor7, this);

          _initializerDefineProperty(this, "Collider_Ball_Audio", _descriptor8, this);

          _defineProperty(this, "audioId", null);
        }

        FixedPositionX() {
          const pos = this.node.position;
          this.node.setPosition(pos.x, 0, pos.z);
        }

        StartAudioId(audioId) {
          this.audioId = this.node.addComponent(AudioSource);
          this.audioId.clip = audioId;
          this.audioId.loop = false;
          this.audioId.play();
        }

        start() {// let myCollider = this.node.getComponent(Collider);
          // myCollider.on("onCollisionEnter", (target: ICollisionEvent) => {
          //     const isPhysic = target.otherCollider.node;
          //     if (isPhysic._name.indexOf('hole') != -1) {
          //         if (this.node._name == 'Ball_09') {
          //             this.StartAudioId(this.Win_Audio);
          //             this.activeHole(isPhysic._name);
          //         } else {
          //             this.activeRoundRedHole(isPhysic._name);
          //         }
          //         console.log(isPhysic._name);
          //         this.node.active = false;
          //     }
          //     if (isPhysic._name.indexOf('collider_table') != -1) {
          //         this.StartAudioId(this.Collider_Table_Audio);
          //     }
          //     if (isPhysic._name.indexOf('Ball_09') != -1) {
          //         this.StartAudioId(this.Collider_01_Audio);
          //     }
          // })
        } // activeHole(key) {
        //     this.StartAudioId(this.Main.StartAudioId(this.Main.Win_Audio));
        //     this.Gr_Hole._children.forEach(element => {
        //         if (element._name == key) {
        //             this.Ef_combo.active = true;
        //             this.Bling.setPosition(element.getPosition());
        //             this.Bling.active = true;
        //             this.Main.flagStatusBall_09 = true;
        //             this.Bling.getComponent(Animation).play();
        //         }
        //     });
        // }
        // activeRoundRedHole(key) {
        //     this.StartAudioId(this.Main.StartAudioId(this.Main.Lose_Audio));
        //     this.Gr_Hole._children.forEach(element => {
        //         if (element._name == key) {
        //             this.Round_Red.setPosition(element.getPosition());
        //             this.Round_Red.active = true;
        //             this.Main.flagStatusBall_00 = true;
        //             this.Bling.getComponent(Animation).play();
        //         }
        //     });
        // }


        update() {
          this.FixedPositionX();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Main", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Bling", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Round_Red", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Gr_Hole", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Ef_combo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Collider_Table_Audio", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Collider_01_Audio", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Collider_Ball_Audio", [_dec9], {
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
//# sourceMappingURL=Ball.js.map