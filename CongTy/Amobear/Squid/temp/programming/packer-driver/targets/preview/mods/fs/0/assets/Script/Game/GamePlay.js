System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, GamePlay;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6ba26BX9VFWrvN11awPr8L", "GamePlay", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamePlay", GamePlay = (_dec = ccclass('GamePlay'), _dec(_class = class GamePlay extends Component {
        // @property()
        onLoad() {}

        start() {} // public startGame(): void {
        //     GameInfo.IsPlaying = true;
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GamePlay.js.map