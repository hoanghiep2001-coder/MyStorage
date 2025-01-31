System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, Color, Component, easing, instantiate, Label, log, math, Node, Prefab, tween, GameInfo, SoundController, CONST, GameController, LogicGamePlay, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp, _crd, ccclass, property, UIGameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "./SoundController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONST(extras) {
    _reporterNs.report("CONST", "../Const/CONST", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogicGamePlay(extras) {
    _reporterNs.report("LogicGamePlay", "../Others/HandleLogicGamePlay", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Color = _cc.Color;
      Component = _cc.Component;
      easing = _cc.easing;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      log = _cc.log;
      math = _cc.math;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      SoundController = _unresolved_3.SoundController;
    }, function (_unresolved_4) {
      CONST = _unresolved_4.CONST;
    }, function (_unresolved_5) {
      GameController = _unresolved_5.GameController;
    }, function (_unresolved_6) {
      LogicGamePlay = _unresolved_6.LogicGamePlay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eae0aGAa2xB+78k4FQWX5Oc", "UIGameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = UIGameController
       * DateTime = Mon Aug 26 2024 14:14:13 GMT+0700 (Indochina Time)
       * Author = hoanghiep2001
       * FileBasename = UIGameController.ts
       * FileBasenameNoExtension = UIGameController
       * URL = db://assets/Scripts/Controller/UIGameController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("UIGameController", UIGameController = (_dec = ccclass('UIGameController'), _dec2 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property([Node]), _dec23 = property([Prefab]), _dec(_class = (_class2 = (_temp = class UIGameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "Canvas", _descriptor2, this);

          _initializerDefineProperty(this, "TouchArea", _descriptor3, this);

          _initializerDefineProperty(this, "TouchArea_GiveTheChange", _descriptor4, this);

          _initializerDefineProperty(this, "TouchArea_Banking", _descriptor5, this);

          _initializerDefineProperty(this, "BankingLabel", _descriptor6, this);

          _initializerDefineProperty(this, "PcScreen_Change", _descriptor7, this);

          _initializerDefineProperty(this, "PcScreen_Give", _descriptor8, this);

          _initializerDefineProperty(this, "PcScreen_Receive", _descriptor9, this);

          _initializerDefineProperty(this, "PcScreen_TotalLabel", _descriptor10, this);

          _initializerDefineProperty(this, "PcScreen_ReceiveLabel", _descriptor11, this);

          _initializerDefineProperty(this, "PcScreen_ChangeLabel", _descriptor12, this);

          _initializerDefineProperty(this, "PcScreen_GiveLabel", _descriptor13, this);

          _initializerDefineProperty(this, "Btn_Ok", _descriptor14, this);

          _initializerDefineProperty(this, "Btn_Reset", _descriptor15, this);

          _initializerDefineProperty(this, "Btn_OkBanking", _descriptor16, this);

          _initializerDefineProperty(this, "Emoji", _descriptor17, this);

          _initializerDefineProperty(this, "Tut_1", _descriptor18, this);

          _initializerDefineProperty(this, "Tut_2", _descriptor19, this);

          _initializerDefineProperty(this, "Desk", _descriptor20, this);

          _initializerDefineProperty(this, "Items", _descriptor21, this);

          _defineProperty(this, "ItemPositions", []);

          _initializerDefineProperty(this, "GiveMoney", _descriptor22, this);

          _defineProperty(this, "moneyGiveBackInstantiated", []);
        }

        // @property(Node)
        // CTA: Node = null;
        start() {
          this.TouchArea_Banking.active = false;
          this.TouchArea_GiveTheChange.active = false;
          this.registerEvent();
          this.Desk.children.forEach((child, index) => {
            child.name.includes("Point_") && this.ItemPositions.push(child.getPosition());
          });
        }

        registerEvent() {
          this.Btn_Ok.on(Node.EventType.TOUCH_START, this.btnBehaviorTouchStart, this);
          this.Btn_Reset.on(Node.EventType.TOUCH_START, this.btnBehaviorTouchStart, this);
          this.Btn_OkBanking.on(Node.EventType.TOUCH_START, this.btnBankingTouchStart, this);
        }

        btnBehaviorTouchStart(e) {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch) return;

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentFailedClick >= 3 || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall) {
            this.GameController.installHandle();
            return;
          }

          let target = e.target;
          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.clickSound);

          if (target.name === "btn_reset") {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentDollarGive = 0;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCenGive = 0;
            this.deleteMoneyOnTheDesk();
          } else {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = false;
            let result = (_crd && LogicGamePlay === void 0 ? (_reportPossibleCrUseOfLogicGamePlay({
              error: Error()
            }), LogicGamePlay) : LogicGamePlay).CheckGameResult(),
                emoji_haha = this.Emoji.getChildByName("Haha"),
                emoji_angry = this.Emoji.getChildByName("Angry");
            log("check Game Result: ", result);
            this.Emoji.getComponent(Animation).play();

            if (result) {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).completePayment = true;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentSuccessClick += 1;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentTotalCost = 0;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentReceive = 0;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentDollarGive = 0;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentCenGive = 0;
              emoji_haha.active = true;
              this.TouchArea_GiveTheChange.active = false;
              this.deleteMoneyOnTheDesk();
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                error: Error()
              }), CONST) : CONST).SoundTrack.winSound);
            } else {
              emoji_angry.active = true;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentFailedClick += 1;
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                error: Error()
              }), CONST) : CONST).SoundTrack.loseSound);
            }

            this.scheduleOnce(() => {
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).isCanTouch = true;
              emoji_haha.active = false;
              emoji_angry.active = false;
            }, 1.5);
          }
        }

        btnBankingTouchStart() {
          if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch) return;

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentFailedClick >= 3 || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).IsShowPopupInstall) {
            this.GameController.installHandle();
            return;
          }

          (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
            error: Error()
          }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
            error: Error()
          }), CONST) : CONST).SoundTrack.clickSound);
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentDollarGive = 0;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGive = 0;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isCanTouch = false;
          let result = (_crd && LogicGamePlay === void 0 ? (_reportPossibleCrUseOfLogicGamePlay({
            error: Error()
          }), LogicGamePlay) : LogicGamePlay).CheckGameResult(),
              emoji_haha = this.Emoji.getChildByName("Haha"),
              emoji_angry = this.Emoji.getChildByName("Angry");
          log("check Game Result: ", result);
          this.Emoji.getComponent(Animation).play(); // if the money is correct then done step

          if (result) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).completePayment = true;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentSuccessClick += 1;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentTotalCost = 0;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentReceive = 0;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentDollarGive = 0;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCenGive = 0;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentBankingInput = ``;
            emoji_haha.active = true;
            this.TouchArea_GiveTheChange.active = false;
            this.TouchArea_Banking.active = false;
            this.deleteMoneyOnTheDesk();
            (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
              error: Error()
            }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
              error: Error()
            }), CONST) : CONST).SoundTrack.winSound);
          } // else angry
          else {
              emoji_angry.active = true;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentBankingInput = ``;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentFailedClick += 1;
              (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                error: Error()
              }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                error: Error()
              }), CONST) : CONST).SoundTrack.loseSound);
            }

          this.scheduleOnce(() => {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
            emoji_haha.active = false;
            emoji_angry.active = false;
          }, 1.5);
        }

        updateTotalLabel() {
          let dollar = null;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentTotalCost < 10) dollar = `0${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentTotalCost}`;else dollar = `${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentTotalCost}`;
          this.PcScreen_TotalLabel.string = `$${dollar}.00`;
        }

        updateReceiveLabel() {
          let dollar = null;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentReceive < 10) dollar = `0${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentReceive}`;else dollar = `${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentReceive}`;
          this.PcScreen_ReceiveLabel.string = `$${dollar}.00`;
        }

        updateChangeLabel() {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentChange = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentReceive - (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentTotalCost;
          let dollar = String((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentReceive - (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentTotalCost);

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentReceive > 0) {
            if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentChange < 10) dollar = `0${Number((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentReceive - (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentTotalCost)}`;else dollar = `${Number((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentReceive - (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentTotalCost)}`;
          }

          if (Number(dollar) <= 0) dollar = `00`;
          this.PcScreen_ChangeLabel.string = `$${dollar}.00`;
        }

        updateGiveLabel() {
          let dollar = null;
          let cen = null;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentDollarGive < 10) dollar = `0${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentDollarGive}`;else dollar = `${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentDollarGive}`;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGive < 10) cen = `0${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGive}`;else cen = `${(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGive}`;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentDollarGive === (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentChange && (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGive === 0) this.PcScreen_GiveLabel.color = new Color(60, 253, 52, 255);else this.PcScreen_GiveLabel.color = new Color(253, 68, 52, 255);
          this.PcScreen_GiveLabel.string = `$${dollar}.${cen}`;
        }

        updatePcScreen() {
          this.updateTotalLabel();
          this.updateReceiveLabel();
          this.updateChangeLabel();
          this.updateGiveLabel();
        }

        updatebankingLabel() {
          this.BankingLabel.string = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentBankingInput;
        }

        updateItemOnDesk() {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isNPCDoneMove) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isNPCDoneMove = false;
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).isCanTouch = true;
            this.PcScreen_Change.active = true;
            this.PcScreen_Give.active = true;
            this.PcScreen_Receive.active = true;

            switch ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentSuccessClick) {
              case 1:
                (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).currentItems = 1;
                this.Items[0].active = true;
                (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                  error: Error()
                }), CONST) : CONST).SoundTrack.placeSound);
                this.scheduleOnce(() => this.Tut_2.active = true, 0.5);
                break;

              case 2:
                (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).currentItems = 2;
                this.Items[1].active = true;
                (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                  error: Error()
                }), CONST) : CONST).SoundTrack.placeSound);
                this.scheduleOnce(() => {
                  this.Items[2].active = true;
                  (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                    error: Error()
                  }), CONST) : CONST).SoundTrack.placeSound);
                  this.Tut_2.active = true;
                }, 0.5);
                break;

              case 3:
                (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).currentItems = 3;
                this.Items[3].active = true;
                (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                  error: Error()
                }), CONST) : CONST).SoundTrack.placeSound);
                this.scheduleOnce(() => {
                  this.Items[4].active = true;
                  (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                    error: Error()
                  }), CONST) : CONST).SoundTrack.placeSound);
                }, 0.3);
                this.scheduleOnce(() => {
                  this.Items[5].active = true;
                  (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                    error: Error()
                  }), CONST) : CONST).SoundTrack.placeSound);
                  this.Tut_2.active = true;
                }, 0.5);
                break;

              case 4:
                (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).currentItems = 2;
                this.Items[6].active = true;
                (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                  error: Error()
                }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                  error: Error()
                }), CONST) : CONST).SoundTrack.placeSound);
                this.scheduleOnce(() => {
                  this.Items[7].active = true;
                  (_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).Instance(_crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
                    error: Error()
                  }), SoundController) : SoundController).PlaySound((_crd && CONST === void 0 ? (_reportPossibleCrUseOfCONST({
                    error: Error()
                  }), CONST) : CONST).SoundTrack.placeSound);
                  this.Tut_2.active = true;
                }, 0.5);
                break;

              default:
                break;
            }
          }
        }

        updateMoneyGiveBackOnDesk() {
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentDollarGiveBack !== (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).lastDollarGiveBack) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).lastDollarGiveBack += 1;
            let randomPos = math.randomRangeInt(1, 6);
            let moneyGiveBack = instantiate(this.GiveMoney[0]);
            let x = this.ItemPositions[0].x;
            let y = this.ItemPositions[0].y;
            let z = this.ItemPositions[0].z;
            moneyGiveBack.setPosition(x, y, z);
            moneyGiveBack.parent = this.Desk;
            this.moneyGiveBackInstantiated.push(moneyGiveBack);
            tween(moneyGiveBack).to(0.15, {
              position: this.ItemPositions[randomPos]
            }, {
              easing: easing.smooth
            }).start();
          }

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCenGiveBack !== (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).lastCenGiveBack) {
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).lastCenGiveBack += 1;
            let randomPos = math.randomRangeInt(1, 6);
            let moneyGiveBack = instantiate(this.GiveMoney[1]);
            let x = this.ItemPositions[0].x;
            let y = this.ItemPositions[0].y;
            let z = this.ItemPositions[0].z;
            moneyGiveBack.setPosition(x, y, z);
            moneyGiveBack.parent = this.Desk;
            this.moneyGiveBackInstantiated.push(moneyGiveBack);
            tween(moneyGiveBack).to(0.15, {
              position: this.ItemPositions[randomPos]
            }, {
              easing: easing.smooth
            }).start();
          }
        }

        deleteMoneyOnTheDesk() {
          for (let index = 0; index < this.moneyGiveBackInstantiated.length; index++) {
            const element = this.moneyGiveBackInstantiated[index];
            element.removeFromParent();
            element.active = false;
          }

          this.moneyGiveBackInstantiated = [];
        }

        update(dt) {
          this.updatePcScreen();
          this.updatebankingLabel();
          this.updateItemOnDesk();
          this.updateMoneyGiveBackOnDesk(); // if((GameInfo.isWin || GameInfo.isLose) && !GameInfo.IsShowPopupInstall) this.showCTATextContent();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Canvas", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "TouchArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "TouchArea_GiveTheChange", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "TouchArea_Banking", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "BankingLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "PcScreen_Change", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "PcScreen_Give", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "PcScreen_Receive", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "PcScreen_TotalLabel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "PcScreen_ReceiveLabel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "PcScreen_ChangeLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "PcScreen_GiveLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Btn_Ok", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Btn_Reset", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Btn_OkBanking", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Emoji", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Tut_1", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Tut_2", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Desk", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Items", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "GiveMoney", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
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
//# sourceMappingURL=UIGameController.js.map