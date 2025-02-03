System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Global, eventDispatcher;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b75bRUgpNMTbYl0mZkug4L", "Global", undefined);

      Global = {
        touchPos: null,
        startTouch: false,
        startingShoot: false,
        firstShoot: false,
        endGame: false,
        isDefaultBallFall: false,
        ActiveRb: "ActiveRb",
        SpawnPotedBall: "SpawnPotedBall",
        StartShoot: "StartShoot",
        ResetGame: "ResetGame",
        touchPowerBar: false,
        shootCount: 4,
        isToStore: false
      };

      _export("default", Global);

      _export("eventDispatcher", eventDispatcher = new EventTarget());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Global.js.map