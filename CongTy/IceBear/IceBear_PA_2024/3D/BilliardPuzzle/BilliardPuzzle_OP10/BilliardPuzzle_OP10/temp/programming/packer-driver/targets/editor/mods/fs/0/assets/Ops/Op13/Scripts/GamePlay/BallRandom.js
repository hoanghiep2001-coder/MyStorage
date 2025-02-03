System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Material, MeshRenderer, Node, Utility, Ball, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class4, _class5, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp2, _crd, ccclass, property, MapMaterialNode, BallRandom;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtility(extras) {
    _reporterNs.report("Utility", "../Utility3D/Utility", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./Ball", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Utility = _unresolved_2.default;
    }, function (_unresolved_3) {
      Ball = _unresolved_3.Ball;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4974UZpOxI/LvOX6xF6iKn", "BallRandom", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      MapMaterialNode = (_dec = ccclass('MapMaterialNode'), _dec2 = property(Material), _dec3 = property(Node), _dec4 = property(Number), _dec(_class = (_class2 = (_temp = class MapMaterialNode {
        constructor() {
          _initializerDefineProperty(this, "material", _descriptor, this);

          _initializerDefineProperty(this, "ballUI", _descriptor2, this);

          _initializerDefineProperty(this, "index", _descriptor3, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ballUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "index", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class);

      _export("BallRandom", BallRandom = (_dec5 = ccclass('BallRandom'), _dec6 = property(Material), _dec7 = property(Material), _dec8 = property(MeshRenderer), _dec9 = property(MeshRenderer), _dec10 = property(MeshRenderer), _dec11 = property(MeshRenderer), _dec12 = property(MapMaterialNode), _dec5(_class4 = (_class5 = (_temp2 = class BallRandom extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "smallBallMaterial", _descriptor4, this);

          _initializerDefineProperty(this, "bigBallMaterial", _descriptor5, this);

          _initializerDefineProperty(this, "meshBall8", _descriptor6, this);

          _initializerDefineProperty(this, "meshBall11", _descriptor7, this);

          _initializerDefineProperty(this, "meshBall15", _descriptor8, this);

          _initializerDefineProperty(this, "meshBall", _descriptor9, this);

          _initializerDefineProperty(this, "map", _descriptor10, this);
        }

        start() {
          this.meshBall8.node.parent.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
            error: Error()
          }), Ball) : Ball).Init(this.map[7].index, this.map[7].ballUI);
          var randomIndexSmallMaterialBall = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).RandomRangeInteger(0, this.smallBallMaterial.length - 1);
          var randomIndexBigMaterialBall = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).RandomRangeInteger(0, this.bigBallMaterial.length - 1);
          var materialSmall = this.smallBallMaterial[randomIndexSmallMaterialBall];
          var materialBig = this.bigBallMaterial[randomIndexBigMaterialBall];
          var x = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
            error: Error()
          }), Utility) : Utility).RandomRangeFloat(0, 10);

          if (x % 2 == 0) {
            this.meshBall11.setMaterial(materialSmall, 0);
            var proPerMeshBall11 = this.GetProper(materialSmall);
            this.meshBall11.node.parent.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).Init(proPerMeshBall11.index, proPerMeshBall11.ballUI);
            this.meshBall15.setMaterial(materialBig, 0);
            var proPerMeshBall15 = this.GetProper(materialBig);
            this.meshBall15.node.parent.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).Init(proPerMeshBall15.index, proPerMeshBall15.ballUI);
          } else {
            this.meshBall11.setMaterial(materialBig, 0);
            var proPerMeshBall11 = this.GetProper(materialBig);
            this.meshBall11.node.parent.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).Init(proPerMeshBall11.index, proPerMeshBall11.ballUI);
            this.meshBall15.setMaterial(materialSmall, 0);
            var proPerMeshBall15 = this.GetProper(materialSmall);
            this.meshBall15.node.parent.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).Init(proPerMeshBall15.index, proPerMeshBall15.ballUI);
          }

          this.bigBallMaterial.splice(randomIndexBigMaterialBall, 1);
          this.smallBallMaterial.splice(randomIndexSmallMaterialBall, 1);
          let mergedArrayMaterial = this.smallBallMaterial.concat(this.bigBallMaterial);
          mergedArrayMaterial = this.shuffleArray(mergedArrayMaterial);

          for (let i = 0; i < mergedArrayMaterial.length; i++) {
            var randomIndexBall = (_crd && Utility === void 0 ? (_reportPossibleCrUseOfUtility({
              error: Error()
            }), Utility) : Utility).RandomRangeInteger(0, this.meshBall.length - 1);
            var ball = this.meshBall[randomIndexBall];
            ball.setMaterial(mergedArrayMaterial[i], 0);
            var prop = this.GetProper(mergedArrayMaterial[i]);
            ball.node.parent.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).Init(prop.index, prop.ballUI);
            this.meshBall.splice(randomIndexBall, 1);
          } // [3]

        }

        GetProper(mat) {
          for (let i = 0; i < this.map.length; i++) {
            if (mat == this.map[i].material) {
              return this.map[i];
            }
          }
        }

        shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi vị trí của phần tử
          }

          return array;
        }

      }, _temp2), (_descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "smallBallMaterial", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "bigBallMaterial", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "meshBall8", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "meshBall11", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "meshBall15", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "meshBall", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "map", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BallRandom.js.map