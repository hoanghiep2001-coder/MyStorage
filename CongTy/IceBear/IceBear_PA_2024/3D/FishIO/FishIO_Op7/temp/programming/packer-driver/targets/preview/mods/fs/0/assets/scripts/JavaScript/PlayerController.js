System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _req, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _req = _unresolved_.__cjsMetaURL;
    }, function (_unresolved_2) {
      _loader = _unresolved_2.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "../Data/Constant": _req
        }, _require);

        (function () {
          var {
            Constants
          } = require("../Data/Constant");

          cc.Class({
            extends: cc.Component,
            properties: {
              speed: 150,
              score: 0,
              isLive: true,
              isMove: false,
              isLevelUp: false,
              isLevel3: false,
              isReplay: false,
              forceReplay: false,
              trackEnTry: sp.spine.trackEnTry,
              eater: cc.Node,
              dieBg: cc.Node,
              JoyStick: cc.Node,
              powerController: cc.Node,
              touchArea: cc.Node,
              Mouth: cc.Node,
              spineFish: sp.Skeleton,
              targetPosition: cc.Vec2,
              gc: cc.Node,
              rigidBody: cc.RigidBody,
              collide: cc.CircleCollider,
              transformSound: cc.AudioClip
            },

            start() {
              this.JoyStickComponent = this.JoyStick.getComponent("JoyStick");
              this.gameController = this.gc.getComponent("GameController");

              this.rigidBody.onBeginContact = (contact, selfCollider, otherCollider) => {
                if (otherCollider.tag == 4 && this.isLive) {
                  this.scheduleOnce(() => {
                    if (Constants.ironSource.SoundState) {
                      cc.audioEngine.play(this.transformSound, false, 1);
                    }
                  }, 0.7);
                  this.powerController.getComponent("PowerController").handlePowerUp(this.node, otherCollider.node);
                  this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
                  this.scheduleOnce(() => {
                    this.isLevelUp = true;
                  }, 2);
                }

                if (otherCollider.tag == 8 && this.isLive) {
                  this.scheduleOnce(() => {
                    if (Constants.ironSource.SoundState) {
                      cc.audioEngine.play(this.transformSound, false, 1);
                    }
                  }, 0.7);
                  this.rigidBody.linearVelocity = new cc.Vec2(0, 0);
                  this.isLevel3 = true;
                  this.powerController.getComponent("PowerController").handlePowerUpLv2(this.node, otherCollider.node);
                }

                ;
              };
            },

            onCollisionEnter(other, self) {
              if (other.tag == 3) {
                if (this.isLive && !this.isLevelUp && !this.powerController.getComponent("PowerController").isTransforming) {
                  this.isLive = false;
                  this.eater = other.node;
                  this.handleUpTime();
                  this.handleDie(other);
                  this.dieBg.getComponent(cc.Animation).play("Die_Anim");
                  this.collide.destroy();
                  this.rigidBody.destroy();
                }
              }

              if (other.tag == 10) {
                if (this.isLive && !this.isLevel3) {
                  this.isLive = false;
                  this.eater = other.node;
                  this.handleUpTime();
                  this.handleDie(other);
                  this.dieBg.getComponent(cc.Animation).play("Die_Anim");
                  this.collide.destroy();
                  this.rigidBody.destroy();
                }
              }
            },

            handleUpTime() {
              var spine = this.eater.getChildByName("Body").getChildByName("Spine_Fish").getComponent(sp.Skeleton);
              this.trackEnTry = spine.setAnimation(0, "eat", false);
              spine.timeScale = 1.5;
            },

            die() {
              this.node.getChildByName("Body").active = false;
              this.node.getChildByName("Die").active = true;
              this.getComponent(cc.Animation).play("EnemyDieAnim");
              this.isLive = false; // FINISH
              // this.scheduleOnce(function(){
              //   this.gameController.showPopupInstall();
              // },1)
            },

            handleDie(other) {
              if (this.isLive && !this.isReplay) {
                return;
              }

              this.node.getChildByName("Body").active = false;
              this.isReplay = true;

              if (Constants.ironSource.SoundState) {
                this.gameController.playAudio(this.gameController.audioBossAtk);
              }

              this.scheduleOnce(() => {
                this.forceReplay = true;
                this.isReplay = false;
                this.die();
                this.node.getChildByName("Atk").getComponent(sp.Skeleton).setAnimation(0, "bite", false);
              }, 1);
            },

            handleMoveToEater() {
              if (this.isReplay) {
                var currentPosition = this.node.getPosition();
                var targetPos = this.eater.getPosition();
                currentPosition.lerp(targetPos, 0.09, currentPosition);
                this.node.setPosition(currentPosition);
              }
            },

            move() {
              if (this.isMove && this.isLive) {
                // const currentPosition = this.node.getPosition();
                this.targetPosition = this.touchArea.getComponent("TouchArea").positionTouch;
                var direction = this.targetPosition.sub(this.node.position).normalize();
                var velocity;
                this.isLevelUp ? velocity = direction.mul(this.speed + 100) : velocity = direction.mul(this.speed + 20);
                this.rigidBody.linearVelocity = velocity;
              }
            },

            update(dt) {
              this.handleMoveToEater();
            }

          });
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=PlayerController.js.map