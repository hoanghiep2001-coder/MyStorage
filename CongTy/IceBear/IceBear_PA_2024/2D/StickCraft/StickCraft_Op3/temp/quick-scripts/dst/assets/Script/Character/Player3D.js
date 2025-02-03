
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/Player3D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '194dbv9v4JFZq1r8Vnip+gZ', 'Player3D');
// Script/Character/Player3D.js

"use strict";

var _require = require("GameEnum"),
    EnFacing = _require.EnFacing,
    EnWeapon = _require.EnWeapon,
    EnStickMode = _require.EnStickMode,
    EnStickState = _require.EnStickState;

var CONST = require("CONST");

var GameInfo = require("GameInfo");

var AnimNameStick = require("AnimNameStick");

var HitCombos = require("HitCombos");

var ArcherCombos = require("ArcherCombos");

var HealthBar = require("HealthBar");

var ButtonAttack = require("ButtonAttack");

var AudioManager = require("AudioManager");

cc.Class({
  "extends": cc.Component,
  properties: {
    Speed: {
      "default": 7
    },
    HealthBar: HealthBar,
    // Particle effect
    DustParticle: cc.ParticleSystem3D,
    DashParticle: cc.ParticleSystem3D,
    BloodParticle: cc.ParticleSystem3D,
    // Action Button Input
    CustomeMoveBG: cc.Node,
    ButtonLeft: cc.Node,
    ButtonRight: cc.Node,
    ButtonAttack: cc.Node,
    ButtonJump: cc.Node,
    ButtonDash: cc.Node,
    // DhHiepp
    fakeSword: cc.Node,
    AudioManager: AudioManager,
    gameController: cc.Node // Button Weapon Side
    // ButtonSword: cc.Node,
    // ButtonArcher: cc.Node,

  },
  onLoad: function onLoad() {
    var _this = this;

    // Init Variable
    window.isUsingFist = true;
    this._originScaleX = 1;
    GameInfo.InputMoveHorizontal = 0;
    this._onTheGround = false;
    this._jumpCount = 0;
    this._isDashing = false;
    this._velocityMaxX = 120;
    this._velocityMaxY = 120;
    this._runForce = 3500;
    this._jumpForce = 21000;
    this._jumpForce2 = 25000;
    this._dashForce = 10000;
    this._runForceOnAttack = 300;
    this._velocityMaxXOnAttack = 25;
    this._checkPoint = this.node.getPosition();
    this._isDeath = false;
    this._isHasSword = false;
    this._isHasArcher = false;
    this._numDeath = 0;
    this._lastInputMoveHorizontal = 0;
    this._isWin = false;
    this.initEventAction(); // Set default variable

    this._originScaleX = this.node.scaleX; // this.PopupInstall.active = false;

    this._skeleton = this.getComponentInChildren(sp.Skeleton);
    this._rigidBody = this.node.getComponent(cc.RigidBody);
    this._hitCombos = this.getComponent(HitCombos);
    this._archerCombos = this.getComponent(ArcherCombos);

    this._skeleton.setStartListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";
      if (GameInfo.StickMode == EnStickMode.Archer) _this._archerCombos.onStartAnimation(animationName);else _this._hitCombos.onStartAnimation(animationName);
    });

    this._skeleton.setCompleteListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";
      if (GameInfo.StickMode == EnStickMode.Archer) _this._archerCombos.onCompleteAnimation(animationName);else _this._hitCombos.onCompleteAnimation(animationName);
    });

    this.setMixAnimation();
    this.changeWeapon(EnWeapon.None);
    this.HealthBar.init(CONST.StickMaxHP);
  },
  initEventAction: function initEventAction() {
    // Init Events
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this); // Event Button Move Left

    this.ButtonLeft.on(cc.Node.EventType.TOUCH_START, function (event) {
      if (this._isDeath) return;
      GameInfo.InputMoveHorizontal = -1;
      this.flip();
      this._tickHaft = 0;
      cc.tween(this.ButtonLeft).to(0.2, {
        scale: 0.9
      }, this).start();
      this._lastInputMoveHorizontal = -1; // ironsource
      // this.gameController.getComponent("GameController").handleIronSourcePlaySound();
    }, this);
    this.ButtonLeft.on(cc.Node.EventType.TOUCH_END, function (event) {
      GameInfo.InputMoveHorizontal = 0;
      cc.tween(this.ButtonLeft).to(0.2, {
        scale: 1
      }, this).start();
    }, this);
    this.ButtonLeft.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      GameInfo.InputMoveHorizontal = 0;
      cc.tween(this.ButtonLeft).to(0.2, {
        scale: 1
      }, this).start();
    }, this); // Event Button Move Right

    this.ButtonRight.on(cc.Node.EventType.TOUCH_START, function (event) {
      if (this._isDeath) return;
      GameInfo.InputMoveHorizontal = 1;
      this._tickHaft = 0;
      this.flip();
      cc.tween(this.ButtonRight).to(0.2, {
        scale: 0.9
      }, this).start();
      this._lastInputMoveHorizontal = 1; // this.gameController.getComponent("GameController").handleIronSourcePlaySound();
    }, this);
    this.ButtonRight.on(cc.Node.EventType.TOUCH_END, function (event) {
      GameInfo.InputMoveHorizontal = 0;
      cc.tween(this.ButtonRight).to(0.2, {
        scale: 1
      }, this).start();
    }, this);
    this.ButtonRight.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      GameInfo.InputMoveHorizontal = 0;
      cc.tween(this.ButtonRight).to(0.2, {
        scale: 1
      }, this).start();
    }, this); // this.CustomeMoveBG.on(cc.Node.EventType.TOUCH_START, function(event){
    //     GameInfo.InputMoveHorizontal = this._lastInputMoveHorizontal;
    // }, this);
    // this.CustomeMoveBG.on(cc.Node.EventType.TOUCH_CANCEL, function(event){
    //     GameInfo.InputMoveHorizontal = 0;
    // }, this);
    // Event Button Attack

    this.ButtonAttack.on(cc.Node.EventType.TOUCH_START, function (event) {
      // this.gameController.getComponent("GameController").handleIronSourcePlaySound();
      this.attack();
      cc.tween(this.ButtonAttack).to(0.2, {
        scale: 0.9
      }, this).start();
    }, this);
    this.ButtonJump.on(cc.Node.EventType.TOUCH_START, function (event) {
      // this.gameController.getComponent("GameController").handleIronSourcePlaySound();
      this.jump();
      cc.tween(this.ButtonJump).to(0.2, {
        scale: 0.9
      }, this).start();
    }, this);
    this.ButtonDash.on(cc.Node.EventType.TOUCH_START, function (event) {
      // this.gameController.getComponent("GameController").handleIronSourcePlaySound();
      this.dash();
      cc.tween(this.ButtonDash).to(0.2, {
        scale: 0.9
      }, this).start();
    }, this);
    this.ButtonAttack.on(cc.Node.EventType.TOUCH_END, function (event) {
      this.attack();
      cc.tween(this.ButtonAttack).to(0.2, {
        scale: 1
      }, this).start();
    }, this);
    this.ButtonJump.on(cc.Node.EventType.TOUCH_END, function (event) {
      this.jump();
      cc.tween(this.ButtonJump).to(0.2, {
        scale: 1
      }, this).start();
    }, this);
    this.ButtonDash.on(cc.Node.EventType.TOUCH_END, function (event) {
      this.dash();
      cc.tween(this.ButtonDash).to(0.2, {
        scale: 1
      }, this).start();
    }, this); // Event Change Weapon
    // this.ButtonSword.on(cc.Node.EventType.TOUCH_START, function(event){
    //     this.changeWeaponButton(EnWeapon.Sword);
    // }, this);
    // this.ButtonArcher.on(cc.Node.EventType.TOUCH_START, function(event){
    //     this.changeWeaponButton(EnWeapon.Archer);
    // }, this);
  },
  setMixAnimation: function setMixAnimation() {
    this.setMix(AnimNameStick.NormalIdle, AnimNameStick.NormalRun);
    this.setMix(AnimNameStick.NormalIdle, AnimNameStick.NormalJumpB);
    this.setMix(AnimNameStick.NormalIdle, AnimNameStick.NormalJumpC);
    this.setMix(AnimNameStick.NormalIdle, AnimNameStick.NormalDashA);
    this.setMix(AnimNameStick.NormalRun, AnimNameStick.NormalJumpB);
    this.setMix(AnimNameStick.NormalRun, AnimNameStick.NormalJumpC);
    this.setMix(AnimNameStick.NormalRun, AnimNameStick.NormalDashA);
    this.setMix(AnimNameStick.NormalDashA, AnimNameStick.NormalJumpB);
    this.setMix(AnimNameStick.NormalDashA, AnimNameStick.NormalJumpC);
    this.setMix(AnimNameStick.NormalJumpB, AnimNameStick.NormalJumpC); // Mix Sword Anim

    this.setMix(AnimNameStick.SwordIdle, AnimNameStick.SwordRun);
    this.setMix(AnimNameStick.SwordIdle, AnimNameStick.SwordJumpB);
    this.setMix(AnimNameStick.SwordIdle, AnimNameStick.SwordJumpC);
    this.setMix(AnimNameStick.SwordIdle, AnimNameStick.SwordDashA);
    this.setMix(AnimNameStick.SwordRun, AnimNameStick.SwordJumpB);
    this.setMix(AnimNameStick.SwordRun, AnimNameStick.SwordJumpC);
    this.setMix(AnimNameStick.SwordRun, AnimNameStick.SwordDashA);
    this.setMix(AnimNameStick.SwordDashA, AnimNameStick.SwordJumpB);
    this.setMix(AnimNameStick.SwordDashA, AnimNameStick.SwordJumpC);
    this.setMix(AnimNameStick.SwordJumpB, AnimNameStick.SwordJumpC); // Mix Archer Anim

    this.setMix(AnimNameStick.ArcherIdle, AnimNameStick.ArcherRun);
    this.setMix(AnimNameStick.ArcherIdle, AnimNameStick.ArcherJumpB);
    this.setMix(AnimNameStick.ArcherIdle, AnimNameStick.ArcherJumpC);
    this.setMix(AnimNameStick.ArcherIdle, AnimNameStick.ArcherDashA);
    this.setMix(AnimNameStick.ArcherRun, AnimNameStick.ArcherJumpB);
    this.setMix(AnimNameStick.ArcherRun, AnimNameStick.ArcherJumpC);
    this.setMix(AnimNameStick.ArcherRun, AnimNameStick.ArcherDashA);
    this.setMix(AnimNameStick.ArcherDashA, AnimNameStick.ArcherJumpB);
    this.setMix(AnimNameStick.ArcherDashA, AnimNameStick.ArcherJumpC);
    this.setMix(AnimNameStick.ArcherJumpB, AnimNameStick.ArcherJumpC);
  },
  start: function start() {
    GameInfo.StickState = EnStickState.Idle;

    this._skeleton.setAnimation(0, AnimNameStick.NormalIdle, true);

    this._currentState = EnStickState.Idle;
  },
  onKeyPressed: function onKeyPressed(event) {
    var key_code = event.keyCode;

    switch (key_code) {
      case cc.macro.KEY.left:
      case cc.macro.KEY.a:
        if (this._isDeath) return;
        GameInfo.InputMoveHorizontal = -1;
        this._tickHaft = 0;
        this.flip();
        break;

      case cc.macro.KEY.right:
      case cc.macro.KEY.d:
        if (this._isDeath) return;
        GameInfo.InputMoveHorizontal = 1;
        this._tickHaft = 0;
        this.flip();
        break;

      case cc.macro.KEY.up:
      case cc.macro.KEY.w:
        this.jump();
        break;

      case cc.macro.KEY.space:
        this.dash();
        break;

      case cc.macro.KEY.l:
        this.attack();
        break;
    }
  },
  onKeyReleased: function onKeyReleased(event) {
    var key_code = event.keyCode;

    switch (key_code) {
      case cc.macro.KEY.left:
      case cc.macro.KEY.a:
      case cc.macro.KEY.right:
      case cc.macro.KEY.d:
        GameInfo.InputMoveHorizontal = 0;
        break;
    }
  },
  changeWeaponButton: function changeWeaponButton(weaponType) {
    if (weaponType == EnWeapon.Sword) {
      if (GameInfo.StickMode == EnStickMode.Sword) {
        this.changeWeapon(EnWeapon.None);
      } else {
        if (this._isHasSword) {
          this.changeWeapon(EnWeapon.Sword);
        } else {
          cc.log("No Sword Found!!!");
        }
      }
    } else if (weaponType == EnWeapon.Archer) {
      if (GameInfo.StickMode == EnStickMode.Archer) {
        this.changeWeapon(EnWeapon.None);
      } else {
        if (this._isHasArcher) {
          this.changeWeapon(EnWeapon.Archer);
        } else {
          cc.log("No Sword Found!!!");
        }
      }
    }
  },
  attack: function attack() {
    if (this._isDeath) return;

    if (GameInfo.StickMode == EnStickMode.Archer) {
      this._archerCombos.onClick();
    } else {
      this._hitCombos.onClick();
    }
  },
  jump: function jump() {
    // Jump
    if (this._isDeath) return;
    if (this._isDashing) return;

    if (this._onTheGround) {
      var velocity = this._rigidBody.linearVelocity;
      this._rigidBody.linearVelocity = cc.v2(velocity.x, -100); // console.log("First Jump");

      this._rigidBody.applyForceToCenter(cc.v2(0, this._jumpForce), true);

      this._onTheGround = false;
      this.DustParticle.play();
      this.scheduleOnce(function () {
        this._jumpCount = 1;
      }, 0.15);
      return;
    }

    if (!this._onTheGround && this._jumpCount == 1) {
      var _velocity = this._rigidBody.linearVelocity;
      this._rigidBody.linearVelocity = cc.v2(_velocity.x, -100); // console.log("Second Jump " + velocity);

      this._rigidBody.applyForceToCenter(cc.v2(0, this._jumpForce2), true);

      this._onTheGround = false;
      this._jumpCount = 0;
      this.DustParticle.play();
      return;
    }
  },
  dash: function dash() {
    // Dash
    if (this._isDeath) return;
    this.AudioManager.dashSound.play();
    this._isDashing = true;

    this._rigidBody.applyForceToCenter(cc.v2(this._dashForce * 3 * this.node.scaleX, 0), true);

    this._rigidBody.gravityScale = 0.5;
    this.DashParticle.play();
    this.scheduleOnce(function () {
      this._isDashing = false;
      this._rigidBody.gravityScale = 1;
      var velocity = this._rigidBody.linearVelocity;
      this._rigidBody.linearVelocity = cc.v2(0, velocity.y);
    }, 0.25);
  },
  flip: function flip() {
    this.node.scaleX = this._originScaleX * GameInfo.InputMoveHorizontal;
  },
  update: function update(dt) {
    if (this._isDeath) return;

    if (GameInfo.TotalEnemyAlive <= 1) {
      this.updateAnimation();
      this.showPopupInstall();
      GameInfo.isWin = true;
      this._isWin = true;
      this._isDeath = true;
      this.win();
    }

    var linearVelocity = this._rigidBody.linearVelocity; // this.node.x += this.Speed * 10 * dt * GameInfo.InputMoveHorizontal;
    // cc.log("Is Attack Combo: ", this._hitCombos.IsOnAttackCombo);

    if (this._hitCombos.IsOnAttackCombo || this._archerCombos.IsOnAttacking) {
      // Force Slow when on attack combo
      if (!this._isDashing && GameInfo.InputMoveHorizontal > 0 && linearVelocity.x < this._velocityMaxXOnAttack || GameInfo.InputMoveHorizontal < 0 && linearVelocity.x > -this._velocityMaxXOnAttack) {
        this._rigidBody.applyForceToCenter(cc.v2(GameInfo.InputMoveHorizontal * this._runForceOnAttack, 0), true);
      }
    } else {
      // Force Normal when on attack combo
      if (!this._isDashing && GameInfo.InputMoveHorizontal > 0 && linearVelocity.x < this._velocityMaxX || GameInfo.InputMoveHorizontal < 0 && linearVelocity.x > -this._velocityMaxX) {
        this._rigidBody.applyForceToCenter(cc.v2(GameInfo.InputMoveHorizontal * this._runForce, 0), true);
      }
    }

    if (linearVelocity.x > 0.01 || linearVelocity.x < -0.01) {
      GameInfo.StickState = EnStickState.Run;

      if (this._tickHaft <= 0) {
        this.DustParticle.play();
        this._tickHaft = 0.5;
      }

      this._tickHaft -= dt;
    }

    if (linearVelocity.y > 0.01) GameInfo.StickState = EnStickState.JumpUp;else if (linearVelocity.y < -0.01) GameInfo.StickState = EnStickState.JumpDown;
    if (this._isDashing) GameInfo.StickState = EnStickState.DashA;

    if (linearVelocity.x <= 0.01 && linearVelocity.x >= -0.01 && linearVelocity.y <= 0.01 && linearVelocity.y >= -0.01) {
      GameInfo.StickState = EnStickState.Idle;
      this.AudioManager.runSound.stop();
    }

    this.updateAnimation(); // if(!this._isWin && GameInfo.TotalEnemyAlive <= 0){
    //     this._isWin = true;
    //     this.win();
    // }
  },
  updateAnimation: function updateAnimation() {
    if (this._currentState == GameInfo.StickState) return;
    if (this._hitCombos.IsOnAttackCombo) return;
    if (this._isDeath) return;

    switch (GameInfo.StickState) {
      case EnStickState.Idle:
        if (GameInfo.StickMode == EnStickMode.Sword) {
          this._skeleton.setAnimation(0, AnimNameStick.SwordIdle, true);
        } else if (GameInfo.StickMode == EnStickMode.Archer) {
          this._skeleton.setAnimation(0, AnimNameStick.ArcherIdle, true);
        } else {
          this._skeleton.setAnimation(0, AnimNameStick.NormalIdle, true);
        }

        break;

      case EnStickState.Run:
        if (GameInfo.StickMode == EnStickMode.Sword) {
          this.AudioManager.runSound.play();

          this._skeleton.setAnimation(0, AnimNameStick.SwordRun, true);
        } else if (GameInfo.StickMode == EnStickMode.Archer) {
          this.AudioManager.runSound.play();

          this._skeleton.setAnimation(0, AnimNameStick.ArcherRun, true);
        } else {
          this.AudioManager.runSound.play();

          this._skeleton.setAnimation(0, AnimNameStick.NormalRun, true);
        }

        break;

      case EnStickState.JumpUp:
        if (GameInfo.StickMode == EnStickMode.Sword) {
          this.AudioManager.dashSound.play();

          this._skeleton.setAnimation(0, AnimNameStick.SwordJumpB, true);
        } else if (GameInfo.StickMode == EnStickMode.Archer) {
          this.AudioManager.dashSound.play();

          this._skeleton.setAnimation(0, AnimNameStick.ArcherJumpB, true);
        } else {
          this.AudioManager.dashSound.play();

          this._skeleton.setAnimation(0, AnimNameStick.NormalJumpB, true);
        }

        break;

      case EnStickState.JumpDown:
        if (GameInfo.StickMode == EnStickMode.Sword) {
          this._skeleton.setAnimation(0, AnimNameStick.SwordJumpC, true);
        } else if (GameInfo.StickMode == EnStickMode.Archer) {
          this._skeleton.setAnimation(0, AnimNameStick.ArcherJumpC, true);
        } else {
          this._skeleton.setAnimation(0, AnimNameStick.NormalJumpC, true);
        }

        break;

      case EnStickState.DashA:
        if (GameInfo.StickMode == EnStickMode.Sword) {
          this._skeleton.setAnimation(0, AnimNameStick.SwordDashA, true);
        } else if (GameInfo.StickMode == EnStickMode.Archer) {
          this._skeleton.setAnimation(0, AnimNameStick.ArcherDashA, true);
        } else {
          this._skeleton.setAnimation(0, AnimNameStick.NormalDashA, true);
        }

        break;

      case EnStickState.DashA:
        if (GameInfo.StickMode == EnStickMode.Sword) {
          this._skeleton.setAnimation(0, AnimNameStick.SwordDashA, true);
        } else if (GameInfo.StickMode == EnStickMode.Archer) {
          this._skeleton.setAnimation(0, AnimNameStick.ArcherDashA, true);
        } else {
          this._skeleton.setAnimation(0, AnimNameStick.NormalDashA, true);
        }

        break;
    }

    this._currentState = GameInfo.StickState;
  },
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    // console.log("Begin Contact: " + selfCollider.tag);
    if (selfCollider.tag == 2) {
      this._onTheGround = true;
    }
  },
  setMix: function setMix(anim1, anim2) {
    this._skeleton.setMix(anim1, anim2, 0.1);
  },
  changeWeapon: function changeWeapon(weaponId) {
    if (weaponId == EnWeapon.None) {
      GameInfo.StickMode = EnStickMode.Normal;
    } else if (weaponId == EnWeapon.Sword) {
      GameInfo.StickMode = EnStickMode.Sword;
      this._isHasSword = true;
      this.ButtonAttack.getComponent(ButtonAttack).setSword();
      window.isUsingSword = true;
      window.isUsingArrow = false;
      window.isUsingFist = false;
      this.AudioManager.getItemSound.play();
      this.fakeSword.active = true;
    } else if (weaponId == EnWeapon.Archer) {
      GameInfo.StickMode = EnStickMode.Archer;
      this._isHasArcher = true;
      window.isUsingSword = false;
      window.isUsingArrow = true;
      window.isUsingFist = false;
      this.ButtonAttack.getComponent(ButtonAttack).setArcher();
      this.AudioManager.getItemSound.play();
      this.fakeSword.active = false;
    }

    this.changeFightMode();
  },
  changeFightMode: function changeFightMode() {
    cc.log("Fight Mode ", GameInfo.StickMode);
    this._currentState = EnStickState.None;

    if (GameInfo.StickMode == EnStickMode.Archer) {
      this._archerCombos.enabled = true;
      this._hitCombos.enabled = false;
    } else {
      this._archerCombos.enabled = false;
      this._hitCombos.enabled = true;
    }
  },
  checkNearestEnemy: function checkNearestEnemy(enemyNode, distance) {
    this._archerCombos.checkNearestEnemy(enemyNode, distance);
  },
  removeNearestEnemy: function removeNearestEnemy(enemyNode) {
    this._archerCombos.removeNearestEnemy(enemyNode);
  },
  hit: function hit(damp) {
    // console.log("Hit Player ", damp);
    if (this._isDeath) return;
    this.HealthBar.decrement(damp);
    this.BloodParticle.play();

    if (!this.HealthBar.isAlive()) {
      this.die();
    }
  },
  die: function die() {
    this._isDeath = true;
    this.node.getComponent(cc.BoxCollider).enabled = false;

    if (GameInfo.StickMode == EnStickMode.Sword) {
      this._skeleton.setAnimation(0, AnimNameStick.SwordDie, false);
    } else if (GameInfo.StickMode == EnStickMode.Archer) {
      this._skeleton.setAnimation(0, AnimNameStick.ArcherDie, false);
    } else {
      this._skeleton.setAnimation(0, AnimNameStick.NormalDie, false);
    }

    GameInfo.isLose = true;
    this.showPopupInstall(); // if(this._numDeath < CONST.NumDeathShowInstall){
    //     this.scheduleOnce(function(){
    //         this.respawn();
    //     }, 2);
    //     this._numDeath += 1;
    // } else {
    //     GameInfo.isLose = true;
    //     this.showPopupInstall();
    // }
  },
  respawn: function respawn() {
    this._isDeath = false;
    this.node.scaleX = 1;
    this.node.getComponent(cc.BoxCollider).enabled = true;
    this.node.setPosition(this._checkPoint.x, this._checkPoint.y);
    this.HealthBar.init(CONST.StickMaxHP);

    if (GameInfo.StickMode == EnStickMode.Sword) {
      this._skeleton.setAnimation(0, AnimNameStick.SwordIdle, true);
    } else if (GameInfo.StickMode == EnStickMode.Archer) {
      this._skeleton.setAnimation(0, AnimNameStick.ArcherIdle, true);
    } else {
      this._skeleton.setAnimation(0, AnimNameStick.NormalIdle, true);
    }
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Trap") {
      console.log("Fall Trap");
      this.die();
    }
  },
  win: function win() {
    this._isDeath = true;
    this.node.getComponent(cc.BoxCollider).enabled = false;

    this._skeleton.setAnimation(0, AnimNameStick.ArcherIdle, true);

    GameInfo.isWin = true;
    this.showPopupInstall();
  },
  showPopupInstall: function showPopupInstall() {
    this.AudioManager.runSound.stop();
    this.AudioManager.winSound.play();
    console.log("Call Window End - Popup Instakk");
    window.gameEnd && window.gameEnd();
    this.scheduleOnce(function () {
      GameInfo.IsShowPopupInstall = true;
    }, 2);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXFBsYXllcjNELmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbkZhY2luZyIsIkVuV2VhcG9uIiwiRW5TdGlja01vZGUiLCJFblN0aWNrU3RhdGUiLCJDT05TVCIsIkdhbWVJbmZvIiwiQW5pbU5hbWVTdGljayIsIkhpdENvbWJvcyIsIkFyY2hlckNvbWJvcyIsIkhlYWx0aEJhciIsIkJ1dHRvbkF0dGFjayIsIkF1ZGlvTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiU3BlZWQiLCJEdXN0UGFydGljbGUiLCJQYXJ0aWNsZVN5c3RlbTNEIiwiRGFzaFBhcnRpY2xlIiwiQmxvb2RQYXJ0aWNsZSIsIkN1c3RvbWVNb3ZlQkciLCJOb2RlIiwiQnV0dG9uTGVmdCIsIkJ1dHRvblJpZ2h0IiwiQnV0dG9uSnVtcCIsIkJ1dHRvbkRhc2giLCJmYWtlU3dvcmQiLCJnYW1lQ29udHJvbGxlciIsIm9uTG9hZCIsIndpbmRvdyIsImlzVXNpbmdGaXN0IiwiX29yaWdpblNjYWxlWCIsIklucHV0TW92ZUhvcml6b250YWwiLCJfb25UaGVHcm91bmQiLCJfanVtcENvdW50IiwiX2lzRGFzaGluZyIsIl92ZWxvY2l0eU1heFgiLCJfdmVsb2NpdHlNYXhZIiwiX3J1bkZvcmNlIiwiX2p1bXBGb3JjZSIsIl9qdW1wRm9yY2UyIiwiX2Rhc2hGb3JjZSIsIl9ydW5Gb3JjZU9uQXR0YWNrIiwiX3ZlbG9jaXR5TWF4WE9uQXR0YWNrIiwiX2NoZWNrUG9pbnQiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJfaXNEZWF0aCIsIl9pc0hhc1N3b3JkIiwiX2lzSGFzQXJjaGVyIiwiX251bURlYXRoIiwiX2xhc3RJbnB1dE1vdmVIb3Jpem9udGFsIiwiX2lzV2luIiwiaW5pdEV2ZW50QWN0aW9uIiwic2NhbGVYIiwiX3NrZWxldG9uIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsInNwIiwiU2tlbGV0b24iLCJfcmlnaWRCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiX2hpdENvbWJvcyIsIl9hcmNoZXJDb21ib3MiLCJzZXRTdGFydExpc3RlbmVyIiwidHJhY2tFbnRyeSIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb24iLCJuYW1lIiwiU3RpY2tNb2RlIiwiQXJjaGVyIiwib25TdGFydEFuaW1hdGlvbiIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJvbkNvbXBsZXRlQW5pbWF0aW9uIiwic2V0TWl4QW5pbWF0aW9uIiwiY2hhbmdlV2VhcG9uIiwiTm9uZSIsImluaXQiLCJTdGlja01heEhQIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleVByZXNzZWQiLCJLRVlfVVAiLCJvbktleVJlbGVhc2VkIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsImZsaXAiLCJfdGlja0hhZnQiLCJ0d2VlbiIsInRvIiwic2NhbGUiLCJzdGFydCIsIlRPVUNIX0VORCIsIlRPVUNIX0NBTkNFTCIsImF0dGFjayIsImp1bXAiLCJkYXNoIiwic2V0TWl4IiwiTm9ybWFsSWRsZSIsIk5vcm1hbFJ1biIsIk5vcm1hbEp1bXBCIiwiTm9ybWFsSnVtcEMiLCJOb3JtYWxEYXNoQSIsIlN3b3JkSWRsZSIsIlN3b3JkUnVuIiwiU3dvcmRKdW1wQiIsIlN3b3JkSnVtcEMiLCJTd29yZERhc2hBIiwiQXJjaGVySWRsZSIsIkFyY2hlclJ1biIsIkFyY2hlckp1bXBCIiwiQXJjaGVySnVtcEMiLCJBcmNoZXJEYXNoQSIsIlN0aWNrU3RhdGUiLCJJZGxlIiwic2V0QW5pbWF0aW9uIiwiX2N1cnJlbnRTdGF0ZSIsImtleV9jb2RlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwibGVmdCIsImEiLCJyaWdodCIsImQiLCJ1cCIsInciLCJzcGFjZSIsImwiLCJjaGFuZ2VXZWFwb25CdXR0b24iLCJ3ZWFwb25UeXBlIiwiU3dvcmQiLCJsb2ciLCJvbkNsaWNrIiwidmVsb2NpdHkiLCJsaW5lYXJWZWxvY2l0eSIsInYyIiwieCIsImFwcGx5Rm9yY2VUb0NlbnRlciIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJkYXNoU291bmQiLCJncmF2aXR5U2NhbGUiLCJ5IiwidXBkYXRlIiwiZHQiLCJUb3RhbEVuZW15QWxpdmUiLCJ1cGRhdGVBbmltYXRpb24iLCJzaG93UG9wdXBJbnN0YWxsIiwiaXNXaW4iLCJ3aW4iLCJJc09uQXR0YWNrQ29tYm8iLCJJc09uQXR0YWNraW5nIiwiUnVuIiwiSnVtcFVwIiwiSnVtcERvd24iLCJEYXNoQSIsInJ1blNvdW5kIiwic3RvcCIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJ0YWciLCJhbmltMSIsImFuaW0yIiwid2VhcG9uSWQiLCJOb3JtYWwiLCJzZXRTd29yZCIsImlzVXNpbmdTd29yZCIsImlzVXNpbmdBcnJvdyIsImdldEl0ZW1Tb3VuZCIsImFjdGl2ZSIsInNldEFyY2hlciIsImNoYW5nZUZpZ2h0TW9kZSIsImVuYWJsZWQiLCJjaGVja05lYXJlc3RFbmVteSIsImVuZW15Tm9kZSIsImRpc3RhbmNlIiwicmVtb3ZlTmVhcmVzdEVuZW15IiwiaGl0IiwiZGFtcCIsImRlY3JlbWVudCIsImlzQWxpdmUiLCJkaWUiLCJCb3hDb2xsaWRlciIsIlN3b3JkRGllIiwiQXJjaGVyRGllIiwiTm9ybWFsRGllIiwiaXNMb3NlIiwicmVzcGF3biIsInNldFBvc2l0aW9uIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImdyb3VwIiwiY29uc29sZSIsIndpblNvdW5kIiwiZ2FtZUVuZCIsIklzU2hvd1BvcHVwSW5zdGFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUEwREEsT0FBTyxDQUFDLFVBQUQsQ0FBakU7QUFBQSxJQUFRQyxRQUFSLFlBQVFBLFFBQVI7QUFBQSxJQUFrQkMsUUFBbEIsWUFBa0JBLFFBQWxCO0FBQUEsSUFBNEJDLFdBQTVCLFlBQTRCQSxX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LENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRW5GYWNpbmcsIEVuV2VhcG9uLCBFblN0aWNrTW9kZSwgRW5TdGlja1N0YXRlIH0gPSByZXF1aXJlKFwiR2FtZUVudW1cIik7XHJcbmNvbnN0IENPTlNUID0gcmVxdWlyZShcIkNPTlNUXCIpO1xyXG52YXIgR2FtZUluZm8gPSByZXF1aXJlKFwiR2FtZUluZm9cIik7XHJcbnZhciBBbmltTmFtZVN0aWNrID0gcmVxdWlyZShcIkFuaW1OYW1lU3RpY2tcIik7XHJcbnZhciBIaXRDb21ib3MgPSByZXF1aXJlKFwiSGl0Q29tYm9zXCIpO1xyXG52YXIgQXJjaGVyQ29tYm9zID0gcmVxdWlyZShcIkFyY2hlckNvbWJvc1wiKTtcclxudmFyIEhlYWx0aEJhciA9IHJlcXVpcmUoXCJIZWFsdGhCYXJcIik7XHJcbnZhciBCdXR0b25BdHRhY2sgPSByZXF1aXJlKFwiQnV0dG9uQXR0YWNrXCIpO1xyXG52YXIgQXVkaW9NYW5hZ2VyID0gcmVxdWlyZShcIkF1ZGlvTWFuYWdlclwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgU3BlZWQgOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiA3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSGVhbHRoQmFyOiBIZWFsdGhCYXIsXHJcblxyXG4gICAgICAgIC8vIFBhcnRpY2xlIGVmZmVjdFxyXG4gICAgICAgIER1c3RQYXJ0aWNsZTogY2MuUGFydGljbGVTeXN0ZW0zRCxcclxuICAgICAgICBEYXNoUGFydGljbGU6IGNjLlBhcnRpY2xlU3lzdGVtM0QsXHJcbiAgICAgICAgQmxvb2RQYXJ0aWNsZTogY2MuUGFydGljbGVTeXN0ZW0zRCxcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uIEJ1dHRvbiBJbnB1dFxyXG4gICAgICAgIEN1c3RvbWVNb3ZlQkc6IGNjLk5vZGUsXHJcbiAgICAgICAgQnV0dG9uTGVmdDogY2MuTm9kZSxcclxuICAgICAgICBCdXR0b25SaWdodDogY2MuTm9kZSxcclxuICAgICAgICBCdXR0b25BdHRhY2s6IGNjLk5vZGUsXHJcbiAgICAgICAgQnV0dG9uSnVtcDogY2MuTm9kZSxcclxuICAgICAgICBCdXR0b25EYXNoOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICAvLyBEaEhpZXBwXHJcbiAgICAgICAgZmFrZVN3b3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyLFxyXG4gICAgICAgIGdhbWVDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIC8vIEJ1dHRvbiBXZWFwb24gU2lkZVxyXG4gICAgICAgIC8vIEJ1dHRvblN3b3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIC8vIEJ1dHRvbkFyY2hlcjogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyBJbml0IFZhcmlhYmxlXHJcbiAgICAgICAgd2luZG93LmlzVXNpbmdGaXN0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3JpZ2luU2NhbGVYID0gMTtcclxuICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMDtcclxuICAgICAgICB0aGlzLl9vblRoZUdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2p1bXBDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5faXNEYXNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5TWF4WCA9IDEyMDtcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eU1heFkgPSAxMjA7XHJcblxyXG4gICAgICAgIHRoaXMuX3J1bkZvcmNlID0gMzUwMDtcclxuICAgICAgICB0aGlzLl9qdW1wRm9yY2UgPSAyMTAwMDtcclxuICAgICAgICB0aGlzLl9qdW1wRm9yY2UyID0gMjUwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2Rhc2hGb3JjZSA9IDEwMDAwO1xyXG5cclxuICAgICAgICB0aGlzLl9ydW5Gb3JjZU9uQXR0YWNrID0gMzAwO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5TWF4WE9uQXR0YWNrID0gMjU7XHJcblxyXG4gICAgICAgIHRoaXMuX2NoZWNrUG9pbnQgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNEZWF0aCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9pc0hhc1N3b3JkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzSGFzQXJjaGVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX251bURlYXRoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fbGFzdElucHV0TW92ZUhvcml6b250YWwgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1dpbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudEFjdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhcmlhYmxlXHJcbiAgICAgICAgdGhpcy5fb3JpZ2luU2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5Qb3B1cEluc3RhbGwuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLl9yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5faGl0Q29tYm9zID0gdGhpcy5nZXRDb21wb25lbnQoSGl0Q29tYm9zKTtcclxuICAgICAgICB0aGlzLl9hcmNoZXJDb21ib3MgPSB0aGlzLmdldENvbXBvbmVudChBcmNoZXJDb21ib3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRTdGFydExpc3RlbmVyKHRyYWNrRW50cnkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IHRyYWNrRW50cnkuYW5pbWF0aW9uID8gdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5BcmNoZXIpIHRoaXMuX2FyY2hlckNvbWJvcy5vblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuX2hpdENvbWJvcy5vblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcclxuICAgICAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcikgdGhpcy5fYXJjaGVyQ29tYm9zLm9uQ29tcGxldGVBbmltYXRpb24oYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5faGl0Q29tYm9zLm9uQ29tcGxldGVBbmltYXRpb24oYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWl4QW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLk5vbmUpO1xyXG5cclxuICAgICAgICB0aGlzLkhlYWx0aEJhci5pbml0KENPTlNULlN0aWNrTWF4SFApO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0RXZlbnRBY3Rpb24oKXtcclxuICAgICAgICAvLyBJbml0IEV2ZW50c1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleVByZXNzZWQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlSZWxlYXNlZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IEJ1dHRvbiBNb3ZlIExlZnRcclxuICAgICAgICB0aGlzLkJ1dHRvbkxlZnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcCgpO1xyXG4gICAgICAgICAgICB0aGlzLl90aWNrSGFmdCA9IDA7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uTGVmdCkudG8oMC4yLCB7c2NhbGUgOiAwLjl9LCB0aGlzKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGFzdElucHV0TW92ZUhvcml6b250YWwgPSAtMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uTGVmdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uTGVmdCkudG8oMC4yLCB7c2NhbGUgOiAxfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5CdXR0b25MZWZ0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMDtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5CdXR0b25MZWZ0KS50bygwLjIsIHtzY2FsZSA6IDF9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBCdXR0b24gTW92ZSBSaWdodFxyXG4gICAgICAgIHRoaXMuQnV0dG9uUmlnaHQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fdGlja0hhZnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZsaXAoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5CdXR0b25SaWdodCkudG8oMC4yLCB7c2NhbGUgOiAwLjl9LCB0aGlzKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGFzdElucHV0TW92ZUhvcml6b250YWwgPSAxO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5CdXR0b25SaWdodC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uUmlnaHQpLnRvKDAuMiwge3NjYWxlIDogMX0sIHRoaXMpLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uUmlnaHQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgPSAwO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLkJ1dHRvblJpZ2h0KS50bygwLjIsIHtzY2FsZSA6IDF9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkN1c3RvbWVNb3ZlQkcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IHRoaXMuX2xhc3RJbnB1dE1vdmVIb3Jpem9udGFsO1xyXG4gICAgICAgIC8vIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkN1c3RvbWVNb3ZlQkcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgPSAwO1xyXG4gICAgICAgIC8vIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBCdXR0b24gQXR0YWNrXHJcbiAgICAgICAgdGhpcy5CdXR0b25BdHRhY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uQXR0YWNrKS50bygwLjIsIHtzY2FsZSA6IDAuOX0sIHRoaXMpLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uSnVtcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uSnVtcCkudG8oMC4yLCB7c2NhbGUgOiAwLjl9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkJ1dHRvbkRhc2gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLkJ1dHRvbkRhc2gpLnRvKDAuMiwge3NjYWxlIDogMC45fSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5CdXR0b25BdHRhY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uQXR0YWNrKS50bygwLjIsIHtzY2FsZSA6IDF9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkJ1dHRvbkp1bXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLkJ1dHRvbkp1bXApLnRvKDAuMiwge3NjYWxlIDogMX0sIHRoaXMpLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uRGFzaC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uRGFzaCkudG8oMC4yLCB7c2NhbGUgOiAxfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEV2ZW50IENoYW5nZSBXZWFwb25cclxuICAgICAgICAvLyB0aGlzLkJ1dHRvblN3b3JkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2hhbmdlV2VhcG9uQnV0dG9uKEVuV2VhcG9uLlN3b3JkKTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5CdXR0b25BcmNoZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGFuZ2VXZWFwb25CdXR0b24oRW5XZWFwb24uQXJjaGVyKTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0TWl4QW5pbWF0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxJZGxlLCBBbmltTmFtZVN0aWNrLk5vcm1hbFJ1bik7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxJZGxlLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbElkbGUsIEFuaW1OYW1lU3RpY2suTm9ybWFsSnVtcEMpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suTm9ybWFsSWRsZSwgQW5pbU5hbWVTdGljay5Ob3JtYWxEYXNoQSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suTm9ybWFsUnVuLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbFJ1biwgQW5pbU5hbWVTdGljay5Ob3JtYWxKdW1wQyk7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxSdW4sIEFuaW1OYW1lU3RpY2suTm9ybWFsRGFzaEEpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBDKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxKdW1wQiwgQW5pbU5hbWVTdGljay5Ob3JtYWxKdW1wQyk7XHJcblxyXG4gICAgICAgIC8vIE1peCBTd29yZCBBbmltXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZElkbGUsIEFuaW1OYW1lU3RpY2suU3dvcmRSdW4pO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRJZGxlLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRJZGxlLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEMpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRJZGxlLCBBbmltTmFtZVN0aWNrLlN3b3JkRGFzaEEpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLlN3b3JkUnVuLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRSdW4sIEFuaW1OYW1lU3RpY2suU3dvcmRKdW1wQyk7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZFJ1biwgQW5pbU5hbWVTdGljay5Td29yZERhc2hBKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZERhc2hBLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmREYXNoQSwgQW5pbU5hbWVTdGljay5Td29yZEp1bXBDKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZEp1bXBCLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEMpO1xyXG5cclxuICAgICAgICAvLyBNaXggQXJjaGVyIEFuaW1cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIEFuaW1OYW1lU3RpY2suQXJjaGVyUnVuKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVySWRsZSwgQW5pbU5hbWVTdGljay5BcmNoZXJKdW1wQyk7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5BcmNoZXJJZGxlLCBBbmltTmFtZVN0aWNrLkFyY2hlckRhc2hBKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5BcmNoZXJSdW4sIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVyUnVuLCBBbmltTmFtZVN0aWNrLkFyY2hlckp1bXBDKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlclJ1biwgQW5pbU5hbWVTdGljay5BcmNoZXJEYXNoQSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVyRGFzaEEsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVyRGFzaEEsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEMpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlckp1bXBCLCBBbmltTmFtZVN0aWNrLkFyY2hlckp1bXBDKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIEdhbWVJbmZvLlN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGUuSWRsZTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suTm9ybWFsSWRsZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gRW5TdGlja1N0YXRlLklkbGU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5UHJlc3NlZChldmVudCl7XHJcblxyXG4gICAgICAgIGxldCBrZXlfY29kZSA9IGV2ZW50LmtleUNvZGU7XHJcblxyXG4gICAgICAgIHN3aXRjaChrZXlfY29kZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGlja0hhZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpY2tIYWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxpcCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhc2goKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2soKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5UmVsZWFzZWQoZXZlbnQpe1xyXG5cclxuICAgICAgICBsZXQga2V5X2NvZGUgPSBldmVudC5rZXlDb2RlO1xyXG5cclxuICAgICAgICBzd2l0Y2goa2V5X2NvZGUpe1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VXZWFwb25CdXR0b24od2VhcG9uVHlwZSl7XHJcbiAgICAgICAgaWYod2VhcG9uVHlwZSA9PSBFbldlYXBvbi5Td29yZCl7XHJcbiAgICAgICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5Td29yZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVdlYXBvbihFbldlYXBvbi5Ob25lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lzSGFzU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLlN3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiTm8gU3dvcmQgRm91bmQhISFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYod2VhcG9uVHlwZSA9PSBFbldlYXBvbi5BcmNoZXIpe1xyXG4gICAgICAgICAgICBpZihHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLk5vbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5faXNIYXNBcmNoZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLkFyY2hlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIk5vIFN3b3JkIEZvdW5kISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdHRhY2soKXtcclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX2FyY2hlckNvbWJvcy5vbkNsaWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faGl0Q29tYm9zLm9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGp1bXAoKXtcclxuICAgICAgICAvLyBKdW1wXHJcbiAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9pc0Rhc2hpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5fb25UaGVHcm91bmQpe1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZlbG9jaXR5LngsIC0xMDApO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJGaXJzdCBKdW1wXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkuYXBwbHlGb3JjZVRvQ2VudGVyKCBjYy52MigwLHRoaXMuX2p1bXBGb3JjZSkgLCB0cnVlICk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uVGhlR3JvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkR1c3RQYXJ0aWNsZS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2p1bXBDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDAuMTUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fb25UaGVHcm91bmQgJiYgdGhpcy5fanVtcENvdW50ID09IDEpe1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZlbG9jaXR5LngsIC0xMDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZWNvbmQgSnVtcCBcIiArIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlciggY2MudjIoMCx0aGlzLl9qdW1wRm9yY2UyKSAsIHRydWUgKTtcclxuICAgICAgICAgICAgdGhpcy5fb25UaGVHcm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fanVtcENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuRHVzdFBhcnRpY2xlLnBsYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGFzaCgpe1xyXG4gICAgICAgIC8vIERhc2hcclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuZGFzaFNvdW5kLnBsYXkoKTtcclxuICAgICAgICB0aGlzLl9pc0Rhc2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JpZ2lkQm9keS5hcHBseUZvcmNlVG9DZW50ZXIoIGNjLnYyKHRoaXMuX2Rhc2hGb3JjZSAqIDMgKiB0aGlzLm5vZGUuc2NhbGVYLCAwKSAsIHRydWUgKTtcclxuICAgICAgICB0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMC41O1xyXG5cclxuICAgICAgICB0aGlzLkRhc2hQYXJ0aWNsZS5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Rhc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgdmVsb2NpdHkueSk7XHJcbiAgICAgICAgfSwgMC4yNSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZsaXAoKXtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5fb3JpZ2luU2NhbGVYICogR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbDtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzRGVhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoR2FtZUluZm8uVG90YWxFbmVteUFsaXZlIDw9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UG9wdXBJbnN0YWxsKCk7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5faXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0RlYXRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBsZXQgbGluZWFyVmVsb2NpdHkgPSB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS54ICs9IHRoaXMuU3BlZWQgKiAxMCAqIGR0ICogR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbDtcclxuICAgICAgICAvLyBjYy5sb2coXCJJcyBBdHRhY2sgQ29tYm86IFwiLCB0aGlzLl9oaXRDb21ib3MuSXNPbkF0dGFja0NvbWJvKTtcclxuICAgICAgICBpZih0aGlzLl9oaXRDb21ib3MuSXNPbkF0dGFja0NvbWJvIHx8IHRoaXMuX2FyY2hlckNvbWJvcy5Jc09uQXR0YWNraW5nKXtcclxuICAgICAgICAgICAgLy8gRm9yY2UgU2xvdyB3aGVuIG9uIGF0dGFjayBjb21ib1xyXG4gICAgICAgICAgICBpZiggKCF0aGlzLl9pc0Rhc2hpbmcgJiYgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA+IDAgJiYgbGluZWFyVmVsb2NpdHkueCA8IHRoaXMuX3ZlbG9jaXR5TWF4WE9uQXR0YWNrKSB8fCAoR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA8IDAgJiYgbGluZWFyVmVsb2NpdHkueCA+IC10aGlzLl92ZWxvY2l0eU1heFhPbkF0dGFjaykgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5hcHBseUZvcmNlVG9DZW50ZXIoIGNjLnYyKEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgKiB0aGlzLl9ydW5Gb3JjZU9uQXR0YWNrLCAwKSAsIHRydWUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZvcmNlIE5vcm1hbCB3aGVuIG9uIGF0dGFjayBjb21ib1xyXG4gICAgICAgICAgICBpZiggKCF0aGlzLl9pc0Rhc2hpbmcgJiYgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA+IDAgJiYgbGluZWFyVmVsb2NpdHkueCA8IHRoaXMuX3ZlbG9jaXR5TWF4WCkgfHwgKEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgPCAwICYmIGxpbmVhclZlbG9jaXR5LnggPiAtdGhpcy5fdmVsb2NpdHlNYXhYKSApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlciggY2MudjIoR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCAqIHRoaXMuX3J1bkZvcmNlLCAwKSAsIHRydWUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobGluZWFyVmVsb2NpdHkueCA+IDAuMDEgfHwgbGluZWFyVmVsb2NpdHkueCA8IC0wLjAxKXtcclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5SdW47XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX3RpY2tIYWZ0IDw9IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EdXN0UGFydGljbGUucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGlja0hhZnQgPSAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3RpY2tIYWZ0IC09IGR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobGluZWFyVmVsb2NpdHkueSA+IDAuMDEpICBHYW1lSW5mby5TdGlja1N0YXRlID0gRW5TdGlja1N0YXRlLkp1bXBVcDtcclxuICAgICAgICBlbHNlIGlmKGxpbmVhclZlbG9jaXR5LnkgPCAtMC4wMSkgIEdhbWVJbmZvLlN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGUuSnVtcERvd247XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX2lzRGFzaGluZykgIEdhbWVJbmZvLlN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGUuRGFzaEE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobGluZWFyVmVsb2NpdHkueCA8PSAwLjAxICYmIGxpbmVhclZlbG9jaXR5LnggPj0gLTAuMDFcclxuICAgICAgICAmJiBsaW5lYXJWZWxvY2l0eS55IDw9IDAuMDEgJiYgbGluZWFyVmVsb2NpdHkueSA+PSAtMC4wMSkge1xyXG5cclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5ydW5Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBpZighdGhpcy5faXNXaW4gJiYgR2FtZUluZm8uVG90YWxFbmVteUFsaXZlIDw9IDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9pc1dpbiA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMud2luKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVBbmltYXRpb24oKXtcclxuICAgICAgICBpZih0aGlzLl9jdXJyZW50U3RhdGUgPT0gIEdhbWVJbmZvLlN0aWNrU3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5faGl0Q29tYm9zLklzT25BdHRhY2tDb21ibykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCggR2FtZUluZm8uU3RpY2tTdGF0ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgRW5TdGlja1N0YXRlLklkbGU6XHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLlN3b3JkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Td29yZElkbGUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJJZGxlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suTm9ybWFsSWRsZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFblN0aWNrU3RhdGUuUnVuOlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5Td29yZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucnVuU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkUnVuLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucnVuU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlclJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnJ1blNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Ob3JtYWxSdW4sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5TdGlja1N0YXRlLkp1bXBVcDpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmRhc2hTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suU3dvcmRKdW1wQiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5BcmNoZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmRhc2hTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5kYXNoU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuU3RpY2tTdGF0ZS5KdW1wRG93bjpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJKdW1wQywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBDLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuU3RpY2tTdGF0ZS5EYXNoQTpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkRGFzaEEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJEYXNoQSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuU3RpY2tTdGF0ZS5EYXNoQTpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkRGFzaEEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJEYXNoQSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gIEdhbWVJbmZvLlN0aWNrU3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJCZWdpbiBDb250YWN0OiBcIiArIHNlbGZDb2xsaWRlci50YWcpO1xyXG4gICAgICAgIGlmKHNlbGZDb2xsaWRlci50YWcgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuX29uVGhlR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldE1peChhbmltMSwgYW5pbTIpe1xyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNldE1peChhbmltMSwgYW5pbTIsIDAuMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZVdlYXBvbih3ZWFwb25JZCl7XHJcbiAgICAgICAgaWYgKHdlYXBvbklkID09IEVuV2VhcG9uLk5vbmUpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5TdGlja01vZGUgPSBFblN0aWNrTW9kZS5Ob3JtYWw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3ZWFwb25JZCA9PSBFbldlYXBvbi5Td29yZCl7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLlN0aWNrTW9kZSA9IEVuU3RpY2tNb2RlLlN3b3JkO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0hhc1N3b3JkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5CdXR0b25BdHRhY2suZ2V0Q29tcG9uZW50KEJ1dHRvbkF0dGFjaykuc2V0U3dvcmQoKTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdTd29yZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5pc1VzaW5nQXJyb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdGaXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmdldEl0ZW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmFrZVN3b3JkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3ZWFwb25JZCA9PSBFbldlYXBvbi5BcmNoZXIpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5TdGlja01vZGUgPSBFblN0aWNrTW9kZS5BcmNoZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzSGFzQXJjaGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdTd29yZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aW5kb3cuaXNVc2luZ0Fycm93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdGaXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQnV0dG9uQXR0YWNrLmdldENvbXBvbmVudChCdXR0b25BdHRhY2spLnNldEFyY2hlcigpO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5nZXRJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZha2VTd29yZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VGaWdodE1vZGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlRmlnaHRNb2RlKCl7XHJcbiAgICAgICAgY2MubG9nKFwiRmlnaHQgTW9kZSBcIiwgR2FtZUluZm8uU3RpY2tNb2RlKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBFblN0aWNrU3RhdGUuTm9uZTtcclxuXHJcbiAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX2FyY2hlckNvbWJvcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5faGl0Q29tYm9zLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hcmNoZXJDb21ib3MuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9oaXRDb21ib3MuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGVja05lYXJlc3RFbmVteShlbmVteU5vZGUsIGRpc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5fYXJjaGVyQ29tYm9zLmNoZWNrTmVhcmVzdEVuZW15KGVuZW15Tm9kZSwgZGlzdGFuY2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVOZWFyZXN0RW5lbXkoZW5lbXlOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5fYXJjaGVyQ29tYm9zLnJlbW92ZU5lYXJlc3RFbmVteShlbmVteU5vZGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaXQoZGFtcCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIaXQgUGxheWVyIFwiLCBkYW1wKTtcclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLmRlY3JlbWVudChkYW1wKTtcclxuXHJcbiAgICAgICAgdGhpcy5CbG9vZFBhcnRpY2xlLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuSGVhbHRoQmFyLmlzQWxpdmUoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkaWUoKXtcclxuICAgICAgICB0aGlzLl9pc0RlYXRoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLlN3b3JkKXtcclxuICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suU3dvcmREaWUsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5BcmNoZXIpe1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJEaWUsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Ob3JtYWxEaWUsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdhbWVJbmZvLmlzTG9zZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wdXBJbnN0YWxsKCk7XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMuX251bURlYXRoIDwgQ09OU1QuTnVtRGVhdGhTaG93SW5zdGFsbCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlc3Bhd24oKTtcclxuICAgICAgICAvLyAgICAgfSwgMik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX251bURlYXRoICs9IDE7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgR2FtZUluZm8uaXNMb3NlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zaG93UG9wdXBJbnN0YWxsKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICByZXNwYXduKCl7XHJcbiAgICAgICAgdGhpcy5faXNEZWF0aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9jaGVja1BvaW50LngsIHRoaXMuX2NoZWNrUG9pbnQueSk7XHJcblxyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLmluaXQoQ09OU1QuU3RpY2tNYXhIUCk7XHJcblxyXG4gICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Td29yZElkbGUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbElkbGUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlRyYXBcIil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFsbCBUcmFwXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHdpbigpe1xyXG4gICAgICAgIHRoaXMuX2lzRGVhdGggPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIHRydWUpO1xyXG5cclxuICAgICAgICBHYW1lSW5mby5pc1dpbiA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1BvcHVwSW5zdGFsbCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93UG9wdXBJbnN0YWxsKCl7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucnVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLndpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGwgV2luZG93IEVuZCAtIFBvcHVwIEluc3Rha2tcIik7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgR2FtZUluZm8uSXNTaG93UG9wdXBJbnN0YWxsID0gdHJ1ZTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==