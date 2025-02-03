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
        var require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          cc.Class({
            extends: cc.Component,
            properties: {
              gc: cc.Node,
              player: cc.Node,
              bgWarning: cc.Node,
              timeShowWarning: 8,
              boss: cc.Node,
              bgMove: cc.Node,
              isIronSource: cc.Boolean,
              reload: cc.Node
            },

            onLoad() {
              cc.director.getPhysicsManager().enabled = true;
              var collisionManager = cc.director.getCollisionManager();
              collisionManager.enabled = true; // collisionManager.enabledDebugDraw = true;
              // collisionManager.enabledDrawBoundingBox = true

              this.gameController = this.gc.getComponent("GameController");
              this.isPlayBgMusic = false;
            },

            showBoss() {},

            start() {
              this.isPlayBgMusic = true;
            },

            handleReplayGame() {
              if (!this.player.getComponent("PlayerController").forceReplay) {
                return;
              }

              this.player.getComponent("PlayerController").forceReplay = false;
              this.reload.getComponent(cc.Animation).play("Reload_Anim");
              this.scheduleOnce(() => {
                // cc.audioEngine.stopAll();
                cc.director.loadScene("Game_NoIntro");
              }, 1);
            },

            update(dt) {
              if (this.player.getComponent("PlayerController").forceReplay) {
                this.handleReplayGame();
              }
            }

          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=GamePlay.js.map