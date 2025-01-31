System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, log, EasyControllerEvent, CharacterController, CTA, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, JoystickController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEasyControllerEvent(extras) {
    _reporterNs.report("EasyControllerEvent", "./EasyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCharacterController(extras) {
    _reporterNs.report("CharacterController", "../CharacterController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCTA(extras) {
    _reporterNs.report("CTA", "../CTA", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      log = _cc.log;
    }, function (_unresolved_2) {
      EasyControllerEvent = _unresolved_2.EasyControllerEvent;
    }, function (_unresolved_3) {
      CharacterController = _unresolved_3.CharacterController;
    }, function (_unresolved_4) {
      CTA = _unresolved_4.CTA;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2614svhFNN0o6X9g3i7BoB", "JoystickController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoystickController", JoystickController = (_dec = ccclass('JoystickController'), _dec2 = property(_crd && CharacterController === void 0 ? (_reportPossibleCrUseOfCharacterController({
        error: Error()
      }), CharacterController) : CharacterController), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(_crd && CTA === void 0 ? (_reportPossibleCrUseOfCTA({
        error: Error()
      }), CTA) : CTA), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = class JoystickController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "charCtrl", _descriptor, this);

          _defineProperty(this, "_ctrlRoot", null);

          _defineProperty(this, "_ctrlPointer", null);

          _defineProperty(this, "_checkerCamera", null);

          _defineProperty(this, "_cameraSensitivity", 0.1);

          _defineProperty(this, "_distanceOfTwoTouchPoint", 0);

          _defineProperty(this, "_movementTouch", null);

          _defineProperty(this, "_cameraTouchA", null);

          _defineProperty(this, "_cameraTouchB", null);

          _defineProperty(this, "_scene", null);

          _initializerDefineProperty(this, "tutorialUI1", _descriptor2, this);

          _initializerDefineProperty(this, "tutorialUI4", _descriptor3, this);

          _initializerDefineProperty(this, "cta", _descriptor4, this);

          _initializerDefineProperty(this, "tutorial3D", _descriptor5, this);

          _defineProperty(this, "hasStarted", false);

          _defineProperty(this, "isScheduled", false);

          _defineProperty(this, "playAd", false);
        }

        start() {// let checkerCamera = this.node.getChildByName('camera_checker').getComponent(UITransform);
          // checkerCamera.node.on(Input.EventType.TOUCH_START, this.onTouchStart_CameraCtrl, this);
          // checkerCamera.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_CameraCtrl, this);
          // checkerCamera.node.on(Input.EventType.TOUCH_END, this.onTouchUp_CameraCtrl, this);
          // checkerCamera.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_CameraCtrl, this);
          // let checkerMovement = this.node.getChildByName('movement_checker').getComponent(UITransform);
          // checkerMovement.node.on(Input.EventType.TOUCH_START, this.onTouchStart_Movement, this);
          // checkerMovement.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove_Movement, this);
          // checkerMovement.node.on(Input.EventType.TOUCH_END, this.onTouchUp_Movement, this);
          // checkerMovement.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchUp_Movement, this);
          // this._checkerCamera = checkerCamera;
          // this._ctrlRoot = this.node.getChildByName('ctrl').getComponent(UITransform);
          // this._ctrlRoot.node.active = true;
          // this._ctrlPointer = this._ctrlRoot.node.getChildByName('pointer');
          // this._scene = director.getScene();
        }

        update(dt) {// if (this.hasStarted == true && this.charCtrl.isCheckpoint == false) {
          //     this.unschedule(this.showTutSchedule);
          // } else if (this.hasStarted == false && this.charCtrl.isCheckpoint == false && this.tutorialUI1.active == false) {
          //     this.scheduleOnce(this.showTutSchedule, 3);
          // }
          // if (this.playAd == true && this.tutorial3D.active == true) {
          //     this.scheduleOnce(this.endGameSchedule, 10);
          // }
          // else if (this.playAd == true && this.tutorial3D.active == false) {
          //     this.unschedule(this.endGameSchedule);
          // }
        }
        /****
         * ----------------------------------------------
         *                                              |
         *                                              |
         *            1.Character Movement              |
         *                                              |
         *                                              |
         * ----------------------------------------------
         ****/


        onTouchStart_Movement(event) {
          let touches = event.getTouches();
          log("alo");

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let x = touch.getUILocationX();
            let y = touch.getUILocationY();

            if (!this._movementTouch) {
              //we sub halfWidth,halfHeight here.
              //because, the touch event use left bottom as zero point(0,0), ui node use the center of screen as zero point(0,0)
              //this._ctrlRoot.setPosition(x - halfWidth, y - halfHeight, 0);
              let halfWidth = this._checkerCamera.width / 2;
              let halfHeight = this._checkerCamera.height / 2; // this._ctrlRoot.node.active = true;
              // this._ctrlRoot.node.setPosition(x - halfWidth, y - halfHeight, 0);

              this._ctrlPointer.setPosition(0, 0, 0);

              this._movementTouch = touch;
            }
          }

          this.playAd = true;
        }

        onTouchMove_Movement(event) {
          // tutorial
          this.tutorialUI1.active = false;
          this.tutorialUI4.active = false;
          this.hasStarted = true;
          let touches = event.getTouches();

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];

            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              let halfWidth = this._checkerCamera.width / 2;
              let halfHeight = this._checkerCamera.height / 2;
              let x = touch.getUILocationX();
              let y = touch.getUILocationY();
              let pos = this._ctrlRoot.node.position;
              let ox = x - halfWidth - pos.x;
              let oy = y - halfHeight - pos.y;
              let len = Math.sqrt(ox * ox + oy * oy);

              if (len <= 0) {
                return;
              }

              let dirX = ox / len;
              let dirY = oy / len;
              let radius = this._ctrlRoot.width / 2;

              if (len > radius) {
                len = radius;
                ox = dirX * radius;
                oy = dirY * radius;
              }

              this._ctrlPointer.setPosition(ox, oy, 0); // degree 0 ~ 360 based on x axis.


              let degree = Math.atan(dirY / dirX) / Math.PI * 180;

              if (dirX < 0) {
                degree += 180;
              } else {
                degree += 360;
              }

              this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                error: Error()
              }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, degree, len / radius);
            }
          }
        }

        onTouchUp_Movement(event) {
          // check tut callback
          this.hasStarted = false;
          log("Check");
          let touches = event.getTouches();

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];

            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                error: Error()
              }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP);

              this._movementTouch = null; // this._ctrlRoot.node.active = true;

              this._ctrlPointer.setPosition(Vec3.ZERO);
            }
          }
        }

        showTutSchedule() {
          this.tutorialUI1.active = true;
          this.tutorialUI4.active = true;
        }

        endGameSchedule() {// if (this.cta.node.active == false)
          // this.cta.node.active = true;
          // this.cta.onTouchStart();
          // window.gameEnd && window.gameEnd();
        }
        /****
         * ----------------------------------------------
         *                                              |
         *                                              |
         *            2.Camera Rotation Zone            |
         *                                              |
         *                                              |
         * ----------------------------------------------
         ****/


        getDistOfTwoTouchPoints() {
          let touchA = this._cameraTouchA;
          let touchB = this._cameraTouchB;

          if (!touchA || !touchB) {
            return 0;
          }

          let dx = touchA.getLocationX() - touchB.getLocationX();
          let dy = touchB.getLocationY() - touchB.getLocationY();
          return Math.sqrt(dx * dx + dy * dy);
        }

        onTouchStart_CameraCtrl(event) {
          let touches = event.getAllTouches();
          this._cameraTouchA = null;
          this._cameraTouchB = null;

          for (let i = touches.length - 1; i >= 0; i--) {
            let touch = touches[i];

            if (this._movementTouch && touch.getID() == this._movementTouch.getID()) {
              continue;
            }

            if (this._cameraTouchA == null) {
              this._cameraTouchA = touches[i];
            } else if (this._cameraTouchB == null) {
              this._cameraTouchB = touches[i];
              break;
            }
          }

          this._distanceOfTwoTouchPoint = this.getDistOfTwoTouchPoints();
        }

        onTouchMove_CameraCtrl(event) {
          let touches = event.getTouches();

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let touchID = touch.getID(); //only one touch, do camera rotate.

            if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              let dt = touch.getDelta();
              let rx = dt.y * this._cameraSensitivity;
              let ry = -dt.x * this._cameraSensitivity;

              this._scene.emit((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
                error: Error()
              }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, rx, ry);
            }
          }
        }

        onTouchUp_CameraCtrl(event) {
          let touches = event.getAllTouches();
          let hasTouchA = false;
          let hasTouchB = false;

          for (let i = 0; i < touches.length; ++i) {
            let touch = touches[i];
            let touchID = touch.getID();

            if (this._cameraTouchA && touchID == this._cameraTouchA.getID()) {
              hasTouchA = true;
            } else if (this._cameraTouchB && touchID == this._cameraTouchB.getID()) {
              hasTouchB = true;
            }
          }

          if (!hasTouchA) {
            this._cameraTouchA = null;
          }

          if (!hasTouchB) {
            this._cameraTouchB = null;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "charCtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tutorialUI4", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cta", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tutorial3D", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=JoystickController.js.map