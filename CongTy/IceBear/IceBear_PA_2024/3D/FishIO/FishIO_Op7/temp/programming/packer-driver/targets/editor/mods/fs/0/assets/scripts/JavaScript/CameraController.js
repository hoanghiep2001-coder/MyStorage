System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        let require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          cc.Class({
            extends: cc.Component,
            properties: {
              player: cc.Node,
              hideMask: cc.Node
            },

            start() {},

            update(dt) {
              let targetPosition = this.player.getPosition();
              targetPosition.y = cc.misc.clampf(targetPosition.y, -100, 450);
              targetPosition.x = cc.misc.clampf(targetPosition.x, -500, 420);
              let currentPosition = this.node.getPosition();
              currentPosition.lerp(targetPosition, 0.2, currentPosition);
              this.node.setPosition(currentPosition);
              this.hideMask.setPosition(currentPosition);
            }

          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=CameraController.js.map