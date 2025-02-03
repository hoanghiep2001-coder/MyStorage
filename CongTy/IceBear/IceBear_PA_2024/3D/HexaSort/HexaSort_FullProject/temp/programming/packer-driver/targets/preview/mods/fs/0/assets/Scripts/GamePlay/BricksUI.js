System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Camera, Component, instantiate, Label, log, Node, Prefab, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, BricksUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c714eeX+yVHxqfCyfKeZ50B", "BricksUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BricksUI", BricksUI = (_dec = ccclass('BricksUI'), _dec2 = property(Node), _dec3 = property(Camera), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = (_class2 = (_temp = class BricksUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Canvas", _descriptor, this);

          _initializerDefineProperty(this, "Camera", _descriptor2, this);

          _initializerDefineProperty(this, "PointContainer", _descriptor3, this);

          _initializerDefineProperty(this, "UnlockBrickPoint", _descriptor4, this);

          _defineProperty(this, "BrickNodes", []);
        }

        start() {
          var birckNodes = this.node.children.filter(node => node.name.includes("Node_"));
          this.BrickNodes = birckNodes;
          this.BrickNodes.forEach((brick, index) => {
            var brickSilver = brick.getChildByName("Silver");
            var brickWhite = brick.getChildByName("White");
            var brickBlack = brick.getChildByName("Black");
            var canOpenNode = brick.getChildByName("CanOpen");
            brickWhite.active = false;

            if (canOpenNode) {
              brickSilver.active = true;
              brickBlack.active = false;
            } else {
              brickSilver.active = false;
              var UnlockBrickPointNode = instantiate(this.UnlockBrickPoint);
              UnlockBrickPointNode.parent = this.PointContainer;
              var pointToUnlockNode = brick.children.find(child => child.name.includes("IsOpen"));
              var pointToUnlock = pointToUnlockNode.name.match(/\d+/)[0];
              var label = UnlockBrickPointNode.getComponentInChildren(Label);
              UnlockBrickPointNode.name = "pointToUnlock_" + pointToUnlock;
              log(pointToUnlock);
              label.string = String(pointToUnlock);
              this.setUnlockPointPos(brick.worldPosition, UnlockBrickPointNode);
              this.schedule(() => {
                this.setUnlockPointPos(brick.worldPosition, UnlockBrickPointNode);
              }, 0.1);
            }
          });
        }

        setUnlockPointPos(brickWorldPos, UnlockBrickPointNode) {
          var out = new Vec3();
          var wpos = brickWorldPos;
          this.Camera.convertToUINode(wpos, this.Canvas, out);
          UnlockBrickPointNode.position = new Vec3(out.x, out.y, out.z);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PointContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "UnlockBrickPoint", [_dec5], {
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
//# sourceMappingURL=BricksUI.js.map