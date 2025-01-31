System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, easing, instantiate, Node, Prefab, tween, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, AutoSpawnBricks;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a7cbhMN8lPqI982fzsbw9z", "AutoSpawnBricks", undefined);

      // import { BrickController } from '../Controller/BrickController';
      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoSpawnBricks", AutoSpawnBricks = (_dec = ccclass('AutoSpawnBricks'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = (_temp = class AutoSpawnBricks extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "SpawnContainer", _descriptor, this);

          _initializerDefineProperty(this, "Bricks", _descriptor2, this);

          _initializerDefineProperty(this, "BrickCollide", _descriptor3, this);

          _defineProperty(this, "Points", []);

          _defineProperty(this, "isCallingTween", false);

          _defineProperty(this, "isPointsHaveBricks", [false, false, false]);
        }

        start() {
          this.Points = this.node.children;
        }

        spawnBricks(random, colors) {
          this.isCallingTween = true;
          var brickCollide = instantiate(this.BrickCollide);
          var temp = 0;

          for (var index = 0; index < random; index++) {
            var bricks = instantiate(this.Bricks);
            temp = index;
            bricks.setPosition(0, temp * 0.3, temp * -0.1);
            bricks.children[colors].active = true;
            bricks.parent = brickCollide;
          }

          ;
          brickCollide.parent = this.SpawnContainer;
          brickCollide.setPosition(this.Points[this.Points.length - 1].getPosition());

          if (!this.isPointsHaveBricks[0]) {
            this.moveToPoint(brickCollide, 0);
          } else if (!this.isPointsHaveBricks[1]) {
            this.moveToPoint(brickCollide, 1);
          } else {
            this.moveToPoint(brickCollide, 2);
          }

          ;
        }

        moveToPoint(brickCollide, numberOfPoint) {
          tween(brickCollide).to(0.5, {
            position: this.Points[numberOfPoint].getPosition()
          }, {
            easing: easing.smooth
          }).call(() => {
            this.isPointsHaveBricks[numberOfPoint] = true;
            this.isCallingTween = false;
          }).start();
        }

        isCanSpawnBricks() {
          var reuslt = this.isPointsHaveBricks.find(point => point === false);
          if (String(reuslt) === "undefined") reuslt = false;else reuslt = true;
          return reuslt;
        }

        update(dt) {
          if (this.isCanSpawnBricks() && !this.isCallingTween) {
            var random = 7;
            var colors = 3;
            this.spawnBricks(random, colors);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SpawnContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Bricks", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BrickCollide", [_dec4], {
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
//# sourceMappingURL=AutoSpawnBricks.js.map