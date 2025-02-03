System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, AudioClip, Button, director, CCFloat, v3, screen, JoyStick, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _temp, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfJoyStick(extras) {
    _reporterNs.report("JoyStick", "./JoyStick", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      AudioClip = _cc.AudioClip;
      Button = _cc.Button;
      director = _cc.director;
      CCFloat = _cc.CCFloat;
      v3 = _cc.v3;
      screen = _cc.screen;
    }, function (_unresolved_2) {
      JoyStick = _unresolved_2.JoyStick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab7fdcqdMJBlbVEI/I8YoiE", "Game", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass("Game"), _dec2 = property(_crd && JoyStick === void 0 ? (_reportPossibleCrUseOfJoyStick({
        error: Error()
      }), JoyStick) : JoyStick), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(CCFloat), _dec19 = property(CCFloat), _dec20 = property(AudioClip), _dec21 = property(AudioClip), _dec22 = property(AudioClip), _dec23 = property(AudioClip), _dec24 = property(AudioClip), _dec(_class = (_class2 = (_temp = class Game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "JoyStickComponent", _descriptor, this);

          _initializerDefineProperty(this, "Cat", _descriptor2, this);

          _initializerDefineProperty(this, "Door", _descriptor3, this);

          _initializerDefineProperty(this, "Boss", _descriptor4, this);

          _initializerDefineProperty(this, "canvas2D", _descriptor5, this);

          _initializerDefineProperty(this, "icon", _descriptor6, this);

          _initializerDefineProperty(this, "navigate", _descriptor7, this);

          _initializerDefineProperty(this, "text", _descriptor8, this);

          _initializerDefineProperty(this, "title", _descriptor9, this);

          _initializerDefineProperty(this, "joyStick", _descriptor10, this);

          _initializerDefineProperty(this, "tryBtn", _descriptor11, this);

          _initializerDefineProperty(this, "hideMask", _descriptor12, this);

          _initializerDefineProperty(this, "loadMap", _descriptor13, this);

          _initializerDefineProperty(this, "fail", _descriptor14, this);

          _initializerDefineProperty(this, "mask", _descriptor15, this);

          _initializerDefineProperty(this, "camera", _descriptor16, this);

          _initializerDefineProperty(this, "step", _descriptor17, this);

          _initializerDefineProperty(this, "_realHeight", _descriptor18, this);

          _initializerDefineProperty(this, "_realWidth", _descriptor19, this);

          _initializerDefineProperty(this, "bg", _descriptor20, this);

          _initializerDefineProperty(this, "click", _descriptor21, this);

          _initializerDefineProperty(this, "lose", _descriptor22, this);

          _initializerDefineProperty(this, "win", _descriptor23, this);

          _initializerDefineProperty(this, "catSound", _descriptor24, this);

          _defineProperty(this, "meowSoundState", null);

          _defineProperty(this, "ironSourceState", 1);

          _defineProperty(this, "ironSourceSoundState", true);

          _defineProperty(this, "isEndGame", false);

          _defineProperty(this, "endGame", false);
        }

        start() {
          // this.catSound.setLoop(true);
          // this.catSound.play();
          // this.bg.setLoop(true);
          // this.bg.play();
          this.Cat.active = true;
          this.canvas2D.active = true;
          this.text.active = true;
          this.navigate.active = true;
          this.title.active = true;
          this.icon.active = true;
          this.hideMask.node.active = false;
          this.tryBtn.node.active = false;
          this.loadMap.active = false;
          this.fail.active = false;
          this.scheduleOnce(() => {
            this.canvas2D.on(Node.EventType.TOUCH_START, this.managerScene, this);
            this.canvas2D.on(Node.EventType.TOUCH_END, this.handleIronSourceSound, this);
          }, 0.5);
        }

        onLoad() {}

        handleIronSourceSound() {
          if (this.isPlayBgSound) {
            return;
          }

          if (this.ironSourceSoundState) {
            this.catSound.setLoop(true);
            this.catSound.play();
            this.bg.setLoop(true);
            this.bg.play();
          }

          this.isPlayBgSound = true;
        }

        managerScene(e) {
          this.step++;

          if (this.step === 2) {
            var pos = e.getUILocation();
            var localPos = new Vec3(pos.x - 160, pos.y - 240, 0);

            if (this.ironSourceSoundState) {
              this.click.play();
            }

            this.JoyStickComponent.node.setPosition(localPos);
            this.JoyStickComponent.stick.setPosition(localPos);
            this.text.active = false;
            this.navigate.active = false;
          }

          if (this.step > 0) {
            if (this.endGame) {
              this.step = -9999;

              if (this.ironSourceSoundState) {
                this.win.play();
              }

              this.joyStick.active = false;
              this.loadMap.active = true;
              this.isEndGame = true;
              setTimeout(() => {
                director.loadScene("CatEscapeNext");
              }, 1000);
            }
          }
        }

        handleEndGame() {
          if (this.step > 0) {
            if (this.endGame) {
              this.step = -9999;

              if (this.ironSourceSoundState) {
                this.win.play();
              }

              this.joyStick.active = false;
              this.loadMap.active = true;
              this.isEndGame = true;
              setTimeout(() => {
                director.loadScene("CatEscapeNext");
              }, 1000);
            }
          }
        }

        update(deltaTime) {
          // ironsource
          // this.ironSourceState = parseInt(localStorage.getItem("cocosSoundState"), 10)
          // if (this.ironSourceState) {
          //     if (this.ironSourceState === 1 && !this.ironSourceSoundState && !this.isEndGame) {
          //         this.ironSourceSoundState = true;
          //         this.bg.play();
          //         this.catSound.play();
          //     }
          //     if (this.ironSourceState === 2 && this.ironSourceSoundState) {
          //         this.ironSourceSoundState = false;
          //         this.bg.stop();
          //         this.catSound.stop();
          //     }
          // }
          // if (this.endGame === false) {
          //   const x = Vec3.distance(this.Cat.getPosition(), this.Door.getPosition());
          //   const y = Vec3.distance(this.Cat.getPosition(), this.Boss.getPosition());
          //   if (x <= 1.5) {
          //     console.log("end");
          //     this.bg.stop();
          //     this.catSound.stop();
          //     this.Cat.active = false;
          //     this.Boss.active = false;
          //     this.endGame = true;
          //     this.managerScene();
          //   }
          // }
          if (screen.windowSize.width > screen.windowSize.height) {
            this.camera.setPosition(v3(-14.8, 24, 0));
            this._realHeight = 480;
            this._realWidth = 320 * (screen.windowSize.width / screen.windowSize.height); // console.log(this._realWidth);

            this.icon.setPosition((this._realWidth - 320) / 2 + 160, 0, 0);
            this.title.setPosition((320 - this._realWidth) / 2 - 160, 0, 0);
            this.icon.setScale(0.9, 0.9, 0.9);
            this.title.setScale(0.35, 0.35, 0.35);
          } else {
            this.camera.setPosition(v3(-13, 24, 0));

            if (screen.windowSize.height / screen.windowSize.width < 1.4) {
              this._realWidth = 370;
            } else {
              this._realWidth = 320;
            }

            this._realHeight = this._realWidth * (screen.windowSize.height / screen.windowSize.width);
            this.title.y = (this._realHeight - 480) / 2 + 207;
            this.icon.y = (this._realHeight - 480) / 2 + 207;
            this.icon.setPosition(56, 207 + (this._realHeight - 480) / 2, 0);
            this.title.setPosition(-40, 207 + (this._realHeight - 480) / 2, 0);
            this.icon.setScale(0.25, 0.25, 0.25);
            this.title.setScale(0.2, 0.2, 0.2);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "JoyStickComponent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Cat", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Door", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Boss", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "canvas2D", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "navigate", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "joyStick", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "tryBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "loadMap", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "fail", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "step", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "_realHeight", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "_realWidth", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "click", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "lose", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "catSound", [_dec24], {
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
//# sourceMappingURL=Game.js.map