System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UITransform, Vec3, tween, Constants, Utils, _crd, checkMergeFirstStep, checkMergeSecondStep, mergeDinoStep1, mergeDinoStep2, TouchArea, GamePlay;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../Data/Constant", _context.meta, extras);
  }

  _export("Utils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89b79dqTnBGxaF+QPlffySS", "Utils", undefined);

      checkMergeFirstStep = () => {
        for (var i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
          error: Error()
        }), Constants) : Constants).points_1.length; i++) {
          var currentNode = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_1[i];
          var nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
          var pointBdx = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).point.getComponent(UITransform).getBoundingBox();

          if (nodeBdx.intersects(pointBdx)) {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep1States[i]) {
              break;
            }

            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep1States[i] = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dino_lines[i].active = true;

            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep1States.every(state => state === true)) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isDoneMergeStep1 = true;
            }

            break;
          }
        }
      };

      checkMergeSecondStep = () => {
        for (var i = 0; i < (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
          error: Error()
        }), Constants) : Constants).points_2.length; i++) {
          var currentNode = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).points_2[i];
          var nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
          var pointBdx = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).point.getComponent(UITransform).getBoundingBox();

          if (nodeBdx.intersects(pointBdx)) {
            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep2States[i]) {
              break;
            }

            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep2States[i] = true;
            (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dino_lines_2[i].active = true;

            if ((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).isMergeStep2States.every(state => state === true)) {
              (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).isDoneMergeStep2 = true;
            }

            break;
          }
        }
      };

      mergeDinoStep1 = dino => {
        tween(dino).to(0.4, {
          position: new Vec3(-1.1, -15.535, 9.208),
          scale: new Vec3(0, 0, 0)
        }).call(() => {
          dino.active = false;
        }).start();
      };

      mergeDinoStep2 = dino => {
        tween(dino).to(0.4, {
          position: new Vec3(1.582, -15.535, 9.208),
          scale: new Vec3(0, 0, 0)
        }).call(() => {
          dino.active = false;
        }).start();
      };

      TouchArea = {
        checkMergeFirstStep: checkMergeFirstStep,
        checkMergeSecondStep: checkMergeSecondStep
      };
      GamePlay = {
        mergeDinoStep1: mergeDinoStep1,
        mergeDinoStep2: mergeDinoStep2
      };

      _export("Utils", Utils = class Utils {});

      _defineProperty(Utils, "TouchArea", TouchArea);

      _defineProperty(Utils, "GamePlay", GamePlay);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Utils.js.map