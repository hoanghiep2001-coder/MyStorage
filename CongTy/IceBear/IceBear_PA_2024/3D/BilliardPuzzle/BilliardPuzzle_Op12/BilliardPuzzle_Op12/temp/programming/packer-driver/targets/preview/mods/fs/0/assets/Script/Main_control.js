System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Animation, sp, AudioClip, AudioSource, Canva_control, Responsive, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp, _crd, ccclass, property, Main_control;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCanva_control(extras) {
    _reporterNs.report("Canva_control", "./Canva_control", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResponsive(extras) {
    _reporterNs.report("Responsive", "./Responsive", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      sp = _cc.sp;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Canva_control = _unresolved_2.Canva_control;
    }, function (_unresolved_3) {
      Responsive = _unresolved_3.Responsive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af16e19cWpMDZzCyOVPB1Bt", "Main_control", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Main_control", Main_control = (_dec = ccclass('Main_control'), _dec2 = property(_crd && Canva_control === void 0 ? (_reportPossibleCrUseOfCanva_control({
        error: Error()
      }), Canva_control) : Canva_control), _dec3 = property(_crd && Responsive === void 0 ? (_reportPossibleCrUseOfResponsive({
        error: Error()
      }), Responsive) : Responsive), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(AudioClip), _dec19 = property(AudioClip), _dec20 = property(AudioClip), _dec21 = property(AudioClip), _dec22 = property(AudioClip), _dec23 = property(AudioClip), _dec(_class = (_class2 = (_temp = class Main_control extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Canva_control", _descriptor, this);

          _initializerDefineProperty(this, "Responsive", _descriptor2, this);

          _initializerDefineProperty(this, "ComboShow", _descriptor3, this);

          _initializerDefineProperty(this, "ViewEnd", _descriptor4, this);

          _initializerDefineProperty(this, "ComboShow2", _descriptor5, this);

          _initializerDefineProperty(this, "ComboShow3", _descriptor6, this);

          _initializerDefineProperty(this, "ComboShow4", _descriptor7, this);

          _initializerDefineProperty(this, "ComboShow5", _descriptor8, this);

          _initializerDefineProperty(this, "ComboShow6", _descriptor9, this);

          _initializerDefineProperty(this, "ComboShow7", _descriptor10, this);

          _initializerDefineProperty(this, "ComboShow8", _descriptor11, this);

          _initializerDefineProperty(this, "hole1", _descriptor12, this);

          _initializerDefineProperty(this, "hole2", _descriptor13, this);

          _initializerDefineProperty(this, "hole3", _descriptor14, this);

          _initializerDefineProperty(this, "hole4", _descriptor15, this);

          _initializerDefineProperty(this, "hole5", _descriptor16, this);

          _initializerDefineProperty(this, "Hit_Audio", _descriptor17, this);

          _initializerDefineProperty(this, "Showtext", _descriptor18, this);

          _initializerDefineProperty(this, "Clear_audio", _descriptor19, this);

          _initializerDefineProperty(this, "Breaking_BallAudio", _descriptor20, this);

          _initializerDefineProperty(this, "ColiiderAudio", _descriptor21, this);

          _initializerDefineProperty(this, "amazingAuido", _descriptor22, this);
        }

        start() {// PhysicsSystem.instance.enable = true;
          // PhysicsSystem.instance.gravity = new Vec3(0, -100, 0);
        }

        StartGraviti() {
          this.node.getComponent(Animation).play('index');
        }

        HoleLight(key) {
          var audioSource = this.node.addComponent(AudioSource);
          audioSource.clip = this.Hit_Audio;
          audioSource.loop = false;
          audioSource.play();

          if (key == '1') {
            this.hole1.getComponent(Animation).play();
          } else if (key == '2') {
            this.hole2.getComponent(Animation).play();
          } else if (key == '3') {
            this.hole3.getComponent(Animation).play();
          } else if (key == '4') {
            this.hole4.getComponent(Animation).play();
          } else if (key == '5') {
            this.hole5.getComponent(Animation).play();
          }
        }

        Combo(key) {
          var audioSource = this.node.addComponent(AudioSource);
          audioSource.clip = this.Showtext;
          audioSource.loop = false;
          audioSource.play();

          if (key == '2') {
            this.ComboShow.active = true;
            this.ComboShow.getComponent(sp.Skeleton).animation = 'action';
          } else if (key == '3') {
            this.ComboShow.active = false;
            this.ComboShow2.active = true;
            this.ComboShow2.getComponent(sp.Skeleton).animation = 'action';
          } else if (key == '4') {
            this.ComboShow2.active = false;
            this.ComboShow3.active = true;
            this.ComboShow3.getComponent(sp.Skeleton).animation = 'action';
          } else if (key == '5') {
            this.ComboShow3.active = false;
            this.ComboShow4.active = true;
            this.ComboShow4.getComponent(sp.Skeleton).animation = 'action';
          } else if (key == '6') {
            this.ComboShow4.active = false;
            this.ComboShow5.active = true;
            this.ComboShow5.getComponent(sp.Skeleton).animation = 'action';
          } else if (key == '7') {
            this.ComboShow5.active = false;
            this.ComboShow6.active = true;
            this.ComboShow6.getComponent(sp.Skeleton).animation = 'action';
          } else if (key == '8') {
            this.ComboShow6.active = false;
            this.ComboShow7.active = true;
            this.ComboShow7.getComponent(sp.Skeleton).animation = 'action';
          }
        }

        Clearning() {
          var audioSource = this.node.addComponent(AudioSource);
          audioSource.clip = this.Clear_audio;
          audioSource.loop = false;
          audioSource.play();
        }

        Breaking_Ball() {
          var audioSource = this.node.addComponent(AudioSource);
          audioSource.clip = this.Breaking_BallAudio;
          audioSource.loop = false;
          audioSource.play();
        }

        ColiiderAudioFn() {
          var audioSource = this.node.addComponent(AudioSource);
          audioSource.clip = this.ColiiderAudio;
          audioSource.loop = false;
          audioSource.play();
        }

        amazingAuidoFn() {
          var audioSource = this.node.addComponent(AudioSource);
          audioSource.clip = this.amazingAuido;
          audioSource.loop = false;
          audioSource.play();
        }

        ViewEndFn() {
          // setTimeout(() => {
          //     this.ViewEnd.active = true;
          // }, 1000);
          setTimeout(() => {
            this.Responsive.FlagResponsiveViewEnd = true;
          }, 1000);
          setTimeout(() => {
            var i = 0;
            this.Canva_control.SetIntervalId = setInterval(() => {
              this.Canva_control.moveInEllipse(this.Canva_control.GrCoint._children[i]);
              this.Canva_control.moveInEllipse(this.Canva_control.GrCoint1._children[i]);
              this.Canva_control.moveInEllipse(this.Canva_control.GrCoint2._children[i]);

              if (i < 10) {
                i++;
              } else {
                i = 0;
              }

              this.Canva_control.GrCoint._children[i].active = true;
              this.Canva_control.GrCoint1._children[i].active = true;
              this.Canva_control.GrCoint2._children[i].active = true;
            }, 100);
          }, 1500);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Canva_control", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Responsive", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ViewEnd", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow4", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow5", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow6", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow7", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ComboShow8", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "hole1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "hole2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "hole3", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "hole4", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "hole5", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Hit_Audio", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Showtext", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Clear_audio", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Breaking_BallAudio", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "ColiiderAudio", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "amazingAuido", [_dec23], {
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
//# sourceMappingURL=Main_control.js.map