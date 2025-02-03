System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Animation, Button, view, Label, Sprite, AudioClip, AudioSource, screen, tween, v3, Responsive, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _temp, _crd, ccclass, property, Canva_control;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Button = _cc.Button;
      view = _cc.view;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      screen = _cc.screen;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Responsive = _unresolved_2.Responsive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94452KcAFxONq5rlfmp+3LG", "Canva_control", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Canva_control", Canva_control = (_dec = ccclass('Canva_control'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(_crd && Responsive === void 0 ? (_reportPossibleCrUseOfResponsive({
        error: Error()
      }), Responsive) : Responsive), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Button), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(AudioClip), _dec37 = property(AudioClip), _dec(_class = (_class2 = (_temp = class Canva_control extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "CointS_Ngang", _descriptor, this);

          _initializerDefineProperty(this, "GrCoint", _descriptor2, this);

          _initializerDefineProperty(this, "GrCoint1", _descriptor3, this);

          _initializerDefineProperty(this, "GrCoint2", _descriptor4, this);

          _initializerDefineProperty(this, "CointS_Doc", _descriptor5, this);

          _initializerDefineProperty(this, "Hand1_doc", _descriptor6, this);

          _initializerDefineProperty(this, "Hand1_Ngang", _descriptor7, this);

          _initializerDefineProperty(this, "Hand2_doc", _descriptor8, this);

          _initializerDefineProperty(this, "Hand2_Ngang", _descriptor9, this);

          _initializerDefineProperty(this, "Hand3_doc", _descriptor10, this);

          _initializerDefineProperty(this, "Hand3_Ngang", _descriptor11, this);

          _initializerDefineProperty(this, "Responsive", _descriptor12, this);

          _initializerDefineProperty(this, "Bet", _descriptor13, this);

          _initializerDefineProperty(this, "BeginViewBet", _descriptor14, this);

          _initializerDefineProperty(this, "BeginViewNgang", _descriptor15, this);

          _initializerDefineProperty(this, "BetNode", _descriptor16, this);

          _initializerDefineProperty(this, "BeginView", _descriptor17, this);

          _initializerDefineProperty(this, "BeginView_Ngang", _descriptor18, this);

          _initializerDefineProperty(this, "ButtonBetEnd", _descriptor19, this);

          _initializerDefineProperty(this, "ButtonBetEnd_ngang", _descriptor20, this);

          _initializerDefineProperty(this, "ViewEnd", _descriptor21, this);

          _initializerDefineProperty(this, "Lable_end", _descriptor22, this);

          _initializerDefineProperty(this, "Lable_end_ngang", _descriptor23, this);

          _initializerDefineProperty(this, "MainGame", _descriptor24, this);

          _initializerDefineProperty(this, "SliderButon", _descriptor25, this);

          _initializerDefineProperty(this, "LableShowCoin", _descriptor26, this);

          _initializerDefineProperty(this, "SliderShowCoin", _descriptor27, this);

          _initializerDefineProperty(this, "ButtonBetSub", _descriptor28, this);

          _initializerDefineProperty(this, "ChangeAvt", _descriptor29, this);

          _initializerDefineProperty(this, "CardLeft", _descriptor30, this);

          _initializerDefineProperty(this, "CardRight", _descriptor31, this);

          _initializerDefineProperty(this, "CardLeft_ngang", _descriptor32, this);

          _initializerDefineProperty(this, "CardRight_Ngang", _descriptor33, this);

          _initializerDefineProperty(this, "LefFocus", _descriptor34, this);

          _initializerDefineProperty(this, "ClickStart_Audio", _descriptor35, this);

          _initializerDefineProperty(this, "Click_auido", _descriptor36, this);

          _defineProperty(this, "FlagButtonBet", false);

          _defineProperty(this, "backupCoint", 0);

          _defineProperty(this, "Coint", 0);

          _defineProperty(this, "CointEnd", 1000);

          _defineProperty(this, "intervalID", null);

          _defineProperty(this, "FlagOne", true);

          _defineProperty(this, "FlagActivehand2", true);

          _defineProperty(this, "FlagActivehand3", false);

          _defineProperty(this, "SetIntervalId", null);

          _defineProperty(this, "FlagRunOneIncree", true);
        }

        onLoad() {
          this.SliderButon.node.on(Node.EventType.TOUCH_MOVE, this.TouchMoveButtonSlider, this);
          this.SliderButon.node.on(Node.EventType.TOUCH_START, this.TouchStartButtonSlider, this);
        }

        ShowBet() {
          setTimeout(() => {
            this.BeginViewBet.active = true;
          }, 500);
        }

        Nonehand1() {
          this.Hand1_doc.active = false;
          this.Hand1_Ngang.active = false;
        }

        Nonehand2() {
          this.FlagActivehand2 = false;
          this.Hand2_Ngang.active = false;
          this.Hand2_doc.active = false;
        }

        Nonehand3() {
          this.FlagActivehand3 = false;
          this.Hand3_Ngang.active = false;
          this.Hand3_doc.active = false;
        }

        ButtonRight() {
          let Audio = this.node.addComponent(AudioSource);
          Audio.clip = this.Click_auido;
          Audio.loop = false;
          Audio.play();
          this.Responsive.StartAudio();
          this.Nonehand1();
          this.BeginView.getComponent(Animation).play('Card1');
          this.BeginView_Ngang.getComponent(Animation).play('index');
          this.CardLeft.getComponent(Animation).stop();
          this.CardRight.getComponent(Animation).stop();
          this.CardRight_Ngang.getComponent(Animation).stop();
          this.CardLeft_ngang.getComponent(Animation).stop();
          this.ShowBet();
        }

        ButtonLeft() {
          let Audio = this.node.addComponent(AudioSource);
          Audio.clip = this.Click_auido;
          Audio.loop = false;
          Audio.play();
          this.Responsive.StartAudio();
          this.Nonehand1();
          this.BeginView_Ngang.getComponent(Animation).play('index1');
          this.BeginView.getComponent(Animation).play('Card2');
          this.CardLeft.getComponent(Animation).stop();
          this.CardRight.getComponent(Animation).stop();
          this.CardRight_Ngang.getComponent(Animation).stop();
          this.CardLeft_ngang.getComponent(Animation).stop();
          this.ChangeAvt.active = true;
          this.ShowBet();
        }

        TouchStartButtonSlider() {
          let Audio = this.node.addComponent(AudioSource);
          Audio.clip = this.Click_auido;
          Audio.loop = false;
          Audio.play();
          this.Nonehand2();
        }

        moveInEllipse(node) {
          // let price = this.nodeClick._children[1]._children[0].getComponent(Label).string;
          // let ShowCoinCurrent = this.ShowCoin.getComponent(Label).string;
          let ScreenW = screen.windowSize.x;
          let ScreenH = screen.windowSize.y;
          let duration = 0.3;
          let PosX;
          let PosY;

          if (ScreenW < ScreenH) {
            PosX = 94.567;
            PosY = 100;
          } else {
            PosX = 281.031;
            PosY = 50;
          }

          tween(node).to(duration, {
            position: v3(PosX, PosY, 0)
          }).call(() => {
            node.active = false;

            if (this.FlagRunOneIncree) {
              this.FlagRunOneIncree = false;
              this.increaseCoint();
            }

            node.setPosition(-289.461, 390);

            if (ScreenW < ScreenH) {
              tween(this.CointS_Doc).to(duration, {
                scale: v3(0.4, 0.4, 0.4)
              }).call(() => {
                tween(this.CointS_Doc).to(0.05, {
                  scale: v3(0.417, 0.417, 0.417)
                }).start();
              }).start();
            } else {
              tween(this.CointS_Ngang).to(duration, {
                scale: v3(0.6, 0.6, 0.6)
              }).call(() => {
                tween(this.CointS_Ngang).to(0.05, {
                  scale: v3(0.692, 0.692, 0.692)
                }).start();
              }).start();
            }
          }).start();
        }

        TouchMoveButtonSlider(event) {
          let screenW = screen.windowSize.x;
          let screenH = screen.windowSize.y;
          let positionMouse = event.getUILocation();
          let localX = positionMouse.x - view.getVisibleSize().width / 2;
          this.FlagActivehand3 = true;

          if (screenW < screenH) {
            if (localX >= -128 && localX <= 128) {
              let fill;
              let percent = (localX - -128) / (128 - -128) * 100;
              fill = percent / 100 * 1;
              this.Coint = percent / 100 * 1000;
              this.Coint = Math.round(this.Coint);

              if (this.Coint <= 10) {
                this.Coint = 1;
              } else if (this.Coint >= 990) {
                this.Coint = 1000;
              }

              this.SliderShowCoin.getComponent(Sprite).fillStart = 1 - fill;
              this.SliderButon.node.setPosition(localX, -50);
              this.LableShowCoin.getComponent(Label).string = this.Coint;
            }
          } else {
            localX = localX - 200;

            if (localX >= -250 && localX <= 250) {
              let fill;
              let percent = (localX - -250) / (250 - -250) * 100;
              fill = percent / 100 * 1;
              this.Coint = percent / 100 * 1000;
              this.Coint = Math.round(this.Coint);

              if (this.Coint <= 10) {
                this.Coint = 1;
              } else if (this.Coint >= 990) {
                this.Coint = 1000;
              }

              this.SliderShowCoin.getComponent(Sprite).fillStart = 1 - fill;
              this.SliderButon.node.setPosition(localX, -70);
              this.LableShowCoin.getComponent(Label).string = this.Coint;
            }
          }

          this.ButtonBetSub.active = false;
          this.FlagButtonBet = true;
        }

        ClickButtonBet() {
          if (this.FlagButtonBet) {
            let Audio = this.node.addComponent(AudioSource);
            Audio.clip = this.ClickStart_Audio;
            Audio.loop = false;
            Audio.play();
            this.Responsive.FlagResponsiveViewBegin = false;
            this.BeginView.active = false;
            this.BeginViewNgang.active = false;
            this.BeginViewBet.active = false;
            this.backupCoint = this.Coint;
            setTimeout(() => {
              this.LefFocus.getComponent(Animation).play();
            }, 500);
            setTimeout(() => {
              this.MainGame.getComponent(Animation).play();
            }, 1000);
          }
        }

        increaseCoint() {
          let increase = 1;

          if (this.backupCoint >= 100) {
            increase = 10;
          } else if (this.backupCoint >= 50) {
            increase = 5;
          }

          this.intervalID = setInterval(() => {
            if (this.CointEnd < 1000 + this.backupCoint) {
              this.CointEnd += increase;
              this.Lable_end.getComponent(Label).string = this.CointEnd;
              this.Lable_end_ngang.getComponent(Label).string = this.CointEnd;
            } else {
              this.Lable_end.getComponent(Label).string = this.backupCoint + 1000;
              this.Lable_end_ngang.getComponent(Label).string = this.backupCoint + 1000;
              clearInterval(this.SetIntervalId);
              clearInterval(this.intervalID);
              this.ButtonBetEnd.active = true;
              this.ButtonBetEnd_ngang.active = true;
            }
          }, 20);
        }

        update() {
          let screenW = screen.windowSize.x;
          let screenH = screen.windowSize.y;

          if (this.FlagOne) {
            if (this.CointEnd >= 1000 + this.backupCoint) {
              this.FlagOne = false;
              clearInterval(this.intervalID);
              clearInterval(this.SetIntervalId);
              this.Lable_end.getComponent(Label).string = this.backupCoint + 1000;
              this.Lable_end_ngang.getComponent(Label).string = this.backupCoint + 1000;
            }
          }

          if (this.FlagActivehand2) {
            if (screenW < screenH) {
              this.Hand2_Ngang.active = false;
              this.Hand2_doc.active = true;
            } else {
              this.Hand2_Ngang.active = true;
              this.Hand2_doc.active = false;
            }
          }

          if (this.FlagActivehand3) {
            if (screenW < screenH) {
              this.Hand3_Ngang.active = false;
              this.Hand3_doc.active = true;
            } else {
              this.Hand3_Ngang.active = true;
              this.Hand3_doc.active = false;
            }
          }

          if (screenW < screenH) {
            this.GrCoint._children.forEach(element => {
              element.setScale(1, 1, 1);
            });

            this.GrCoint1._children.forEach(element => {
              element.setScale(1, 1, 1);
            });

            this.GrCoint2._children.forEach(element => {
              element.setScale(1, 1, 1);
            });
          } else {
            this.GrCoint._children.forEach(element => {
              element.setScale(1.8, 1.8, 1.8);
            });

            this.GrCoint1._children.forEach(element => {
              element.setScale(1.8, 1.8, 1.8);
            });

            this.GrCoint2._children.forEach(element => {
              element.setScale(1.8, 1.8, 1.8);
            });
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CointS_Ngang", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "GrCoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "GrCoint1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "GrCoint2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "CointS_Doc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Hand1_doc", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Hand1_Ngang", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Hand2_doc", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Hand2_Ngang", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Hand3_doc", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Hand3_Ngang", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Responsive", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Bet", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "BeginViewBet", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "BeginViewNgang", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "BetNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "BeginView", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "BeginView_Ngang", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "ButtonBetEnd", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "ButtonBetEnd_ngang", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "ViewEnd", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Lable_end", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Lable_end_ngang", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "MainGame", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "SliderButon", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "LableShowCoin", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "SliderShowCoin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "ButtonBetSub", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "ChangeAvt", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "CardLeft", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "CardRight", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "CardLeft_ngang", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "CardRight_Ngang", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "LefFocus", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "ClickStart_Audio", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Click_auido", [_dec37], {
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
//# sourceMappingURL=Canva_control.js.map