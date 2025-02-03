System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Utils, _crd, TouchArea, GamePlay;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Utils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b82aot4D1GfItUeLUV/DVb", "Utils", undefined);

      // const checkMergeFirstStep = (): void => {
      //     for (let i = 0; i < Constants.points_1.length; i++) {
      //         let currentNode = Constants.points_1[i];
      //         let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
      //         let pointBdx = Constants.point.getComponent(UITransform).getBoundingBox();
      //         if (nodeBdx.intersects(pointBdx)) {
      //             if (Constants.isMergeStep1States[i]) {
      //                 break;
      //             }
      //             Constants.isMergeStep1States[i] = true;
      //             Constants.dino_lines[i].active = true;
      //             if (Constants.isMergeStep1States.every(state => state === true)) {
      //                 Constants.isDoneMergeStep1 = true;
      //             }
      //             break;
      //         }
      //     }
      // }
      // const checkMergeSecondStep = (): void => {
      //     for (let i = 0; i < Constants.points_2.length; i++) {
      //         let currentNode = Constants.points_2[i];
      //         let nodeBdx = currentNode.getComponent(UITransform).getBoundingBox();
      //         let pointBdx = Constants.point.getComponent(UITransform).getBoundingBox();
      //         if (nodeBdx.intersects(pointBdx)) {
      //             if (Constants.isMergeStep2States[i]) {
      //                 break;
      //             }
      //             Constants.isMergeStep2States[i] = true;
      //             Constants.dino_lines_2[i].active = true;
      //             if (Constants.isMergeStep2States.every(state => state === true)) {
      //                 Constants.isDoneMergeStep2 = true;
      //             }
      //             break;
      //         }
      //     }
      // }
      // const mergeDinoStep1 = (dino): void => {
      //     tween(dino)
      //         .to(0.4, {
      //             position: new Vec3(-1.1, -15.535, 9.208),
      //             scale: new Vec3(0, 0, 0)
      //         })
      //         .call(() => {
      //             dino.active = false;
      //         })
      //         .start();
      // }
      // const mergeDinoStep2 = (dino): void => {
      //     tween(dino)
      //         .to(0.4, {
      //             position: new Vec3(1.582, -15.535, 9.208),
      //             scale: new Vec3(0, 0, 0)
      //         })
      //         .call(() => {
      //             dino.active = false;
      //         })
      //         .start();
      // }
      TouchArea = {// checkMergeFirstStep: checkMergeFirstStep,
        // checkMergeSecondStep: checkMergeSecondStep,
      };
      GamePlay = {// mergeDinoStep1: mergeDinoStep1,
        // mergeDinoStep2: mergeDinoStep2,
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