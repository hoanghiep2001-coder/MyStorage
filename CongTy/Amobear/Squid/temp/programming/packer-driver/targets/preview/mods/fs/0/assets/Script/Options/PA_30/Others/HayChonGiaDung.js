System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, log, Node, tween, Vec3, GameInfo, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, HayChonGiaDung;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../../../CONST/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxBehavior(extras) {
    _reporterNs.report("BoxBehavior", "../Box/BoxBehavior", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      log = _cc.log;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7b39W3zSVJsrD4mn7hjKyH", "HayChonGiaDung", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HayChonGiaDung", HayChonGiaDung = (_dec = ccclass('HayChonGiaDung'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class HayChonGiaDung extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Roll", _descriptor, this);

          _defineProperty(this, "icon_roll", null);

          _defineProperty(this, "meters", []);

          _defineProperty(this, "boxChoosen", null);

          _defineProperty(this, "currentTween", null);

          _defineProperty(this, "trueSteps1", [40, -40]);

          _defineProperty(this, "trueSteps2", [40, -55]);

          _defineProperty(this, "trueSteps3", [40, -14, -41, -80]);

          _defineProperty(this, "trueSteps4", [40, -55]);
        }

        start() {
          this.Roll.children.forEach(child => {
            if (child.name.includes("meter")) this.meters.push(child);else this.icon_roll = child;
          });
          this.meters.forEach(meter => meter.active = false);
          this.meters[0].active = true;
          this.activeHayChonGiaDung();
        }

        getCurrentRollResult() {
          var result = false;
          this.currentTween.stop();
          var currentRotate = this.icon_roll.eulerAngles.z;

          switch ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.detachCandySteps) {
            case 1:
              if (currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0]) {
                this.boxChoosen.moveDetachedCandy();
                return true;
              } else return false;

              break;

            case 2:
              if (currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0]) {
                this.boxChoosen.moveDetachedCandy();
                return true;
              } else return false;

              break;

            case 3:
              if (currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0] || currentRotate >= this.trueSteps1[3] && currentRotate <= this.trueSteps1[2]) {
                this.boxChoosen.moveDetachedCandy();
                return true;
              } else return false;

              break;

            case 4:
              if (currentRotate >= this.trueSteps1[1] && currentRotate <= this.trueSteps1[0]) {
                this.boxChoosen.moveDetachedCandy();
                return true;
              } else return false;

              break;

            default:
              break;
          }

          return result;
        }

        wrong() {
          log("wrong!");
          var currentPos = this.node.getPosition();
          var currentScale = this.node.getScale();
          tween(this.node).to(0.1, {
            position: new Vec3(currentPos.x + 5, currentPos.y, currentPos.z),
            scale: new Vec3(currentScale.x + 0.03, currentScale.y + 0.03)
          }, {
            easing: easing.smooth
          }).to(0.1, {
            position: currentPos,
            scale: currentScale
          }, {
            easing: easing.smooth
          }).call(() => this.activeHayChonGiaDung()).start();
        }

        nextDetach() {
          log("correct!");
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.detachCandySteps += 1;

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).Squid_PA_30.detachCandySteps >= 5) {
            this.node.active = false;
            this.destroy();
          }

          for (var index = 0; index < this.meters.length; index++) {
            var element = this.meters[index];
            element.active = false;
            if (index === (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).Squid_PA_30.detachCandySteps - 1) element.active = true;
          }

          this.activeHayChonGiaDung();
        }

        activeHayChonGiaDung() {
          var startRotation = new Vec3(0, 0, 80); // Bắt đầu từ 80 độ

          var endRotation = new Vec3(0, 0, -80);
          this.currentTween = tween(this.icon_roll).repeatForever(tween(this.icon_roll).to(1, {
            eulerAngles: endRotation
          }, {
            easing: easing.smooth
          }) // Xoay từ 80 -> -80 trong 1 giây
          .to(1, {
            eulerAngles: startRotation
          }, {
            easing: easing.smooth
          })).start();
        } // protected update(dt: number): void {
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Roll", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
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
//# sourceMappingURL=HayChonGiaDung.js.map