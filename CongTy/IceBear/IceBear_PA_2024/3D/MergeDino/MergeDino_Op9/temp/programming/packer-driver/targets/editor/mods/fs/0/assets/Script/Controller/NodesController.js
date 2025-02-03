System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Camera, Component, Node, ParticleSystem, SkeletalAnimation, Vec3, Constants, CharacterControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp, _crd, ccclass, property, NodesController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterControl(extras) {
    _reporterNs.report("CharacterControl", "./CharacterControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      Node = _cc.Node;
      ParticleSystem = _cc.ParticleSystem;
      SkeletalAnimation = _cc.SkeletalAnimation;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      CharacterControl = _unresolved_3.CharacterControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d10beQtB81Cg6A6SV/C935H", "NodesController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodesController", NodesController = (_dec = ccclass('NodesController'), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(ParticleSystem), _dec9 = property(ParticleSystem), _dec10 = property([Node]), _dec11 = property([Node]), _dec12 = property([Node]), _dec13 = property([Node]), _dec14 = property([Node]), _dec15 = property([Node]), _dec16 = property([Node]), _dec17 = property([Node]), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec(_class = (_class2 = (_temp = class NodesController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Camera", _descriptor, this);

          _initializerDefineProperty(this, "hint_1", _descriptor2, this);

          _initializerDefineProperty(this, "hint_2", _descriptor3, this);

          _initializerDefineProperty(this, "hint_3", _descriptor4, this);

          _initializerDefineProperty(this, "point", _descriptor5, this);

          _initializerDefineProperty(this, "hideMask", _descriptor6, this);

          _initializerDefineProperty(this, "FX_Merge", _descriptor7, this);

          _initializerDefineProperty(this, "FX_Merge_2", _descriptor8, this);

          _initializerDefineProperty(this, "dinoLines", _descriptor9, this);

          _initializerDefineProperty(this, "points_1", _descriptor10, this);

          _initializerDefineProperty(this, "points_2", _descriptor11, this);

          _initializerDefineProperty(this, "unitsStep1", _descriptor12, this);

          _initializerDefineProperty(this, "unitstep2", _descriptor13, this);

          _initializerDefineProperty(this, "dinoLevels", _descriptor14, this);

          _initializerDefineProperty(this, "dinosStep1", _descriptor15, this);

          _initializerDefineProperty(this, "dinosStep2", _descriptor16, this);

          _initializerDefineProperty(this, "Boss", _descriptor17, this);

          _initializerDefineProperty(this, "MainCharacter_1", _descriptor18, this);

          _initializerDefineProperty(this, "targetNode", _descriptor19, this);

          _initializerDefineProperty(this, "MainCharacter_2", _descriptor20, this);

          _initializerDefineProperty(this, "Text_Tap", _descriptor21, this);

          _initializerDefineProperty(this, "Fail", _descriptor22, this);

          _defineProperty(this, "isSaveOnceFlag", false);
        }

        start() {
          this.init();
        }

        init() {
          this.Text_Tap.active = false;
          this.Fail.active = false;
          this.hint_2.active = false;
          this.hint_3.active = false;
          this.setupForUtils();
          this.saveUnitsInitPos();
        }

        setupForUtils() {
          // step 1
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMergeStep1States = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMergeStep1States.map(() => false);
          let pointsCopy = [...this.points_1];
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_1 = pointsCopy;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).point = this.point;
          this.dinoLines.forEach(line => line.active = false);
          let copyDinoLines = this.dinoLines.slice(0, 8);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dino_lines = copyDinoLines; // --------------------------------
          // step 2

          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMergeStep2States = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).isMergeStep2States.map(() => false);
          let pointsCopy2 = [...this.points_2];
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_2 = pointsCopy2;
          let copyDinoLines_2 = this.dinoLines.slice(8, 14);
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dino_lines_2 = copyDinoLines_2;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dino_lines_2.forEach(line => line.active = false);
        }

        saveUnitsInitPos() {
          if (this.isSaveOnceFlag) {
            return;
          } // Other Units


          this.isSaveOnceFlag = true;
          let dinosStep1Pos = [];
          let dinosStep2Pos = [];
          let unitsStep1Pos = [];
          let unitsStep2Pos = [];

          for (let i = 0; i < this.unitsStep1.length; i++) {
            let unitPos = this.unitsStep1[i].getPosition();
            let dino = this.unitsStep1[i].getChildByName("Comp");
            let pos = dino.getPosition();
            dinosStep1Pos.push(pos);
            unitsStep1Pos.push(unitPos);
          }

          ;

          for (let i = 0; i < this.unitstep2.length; i++) {
            let unitPos = this.unitstep2[i].getPosition();
            let dino = this.unitstep2[i].getChildByName("Comp");
            let pos = dino.getPosition();
            dinosStep2Pos.push(pos);
            unitsStep2Pos.push(unitPos);
          }

          ;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dinosStep1InitPos = dinosStep1Pos;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dinosStep2InitPos = dinosStep2Pos;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).unitsStep1InitPos = unitsStep1Pos;
          (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).unitsStep2InitPos = unitsStep2Pos; // --------------------------------------------
        }

        replay() {
          this.unitsStep1.forEach((unit, index) => {
            unit.setPosition((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).unitsStep1InitPos[index]);
            unit.setScale(new Vec3(8, 8, 8));
            unit.active = true;
          });
          this.dinosStep1.forEach((dino, index) => {
            dino.getComponent(SkeletalAnimation).play("Idle_1");
            dino.setPosition((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dinosStep1InitPos[index]);
            dino.setScale(new Vec3(0.08, 0.08, 0.08));
            dino.active = true;
          });
          this.unitstep2.forEach((unit, index) => {
            unit.setPosition((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).unitsStep2InitPos[index]);
            unit.setScale(new Vec3(8, 8, 8));
            unit.active = true;
          });
          this.dinosStep2.forEach((dino, index) => {
            dino.getComponent(SkeletalAnimation).play("Idle_1");
            dino.setPosition((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dinosStep2InitPos[index]);
            dino.setScale(new Vec3(0.08, 0.08, 0.08));
            dino.active = true;
          });
          this.MainCharacter_1.active = false;
          this.MainCharacter_1.getComponent(_crd && CharacterControl === void 0 ? (_reportPossibleCrUseOfCharacterControl({
            error: Error()
          }), CharacterControl) : CharacterControl).level.active = false;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hint_1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hint_2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hint_3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "point", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hideMask", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "FX_Merge", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "FX_Merge_2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "dinoLines", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "points_1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "points_2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "unitsStep1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "unitstep2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "dinoLevels", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "dinosStep1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "dinosStep2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Boss", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "MainCharacter_1", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "MainCharacter_2", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Text_Tap", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Fail", [_dec23], {
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
//# sourceMappingURL=NodesController.js.map