System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _class, _crd, ccclass, property, JoyStick;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b527dcJMxKEoPfEXZGc7dj", "JoyStick", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoyStick", JoyStick = ccclass(_class = class JoyStick extends Component {// @property(PhysicsCircleCollider)
        // Player_PhysicCircleCollide: PhysicsCircleCollider = null;
        // @property(Node)
        // Player: Node = null;
        // @property(EnemiesController)
        // EnemiesController: EnemiesController = null;
        // // @property(Label)
        // // Player_Level: Label = null;
        // // @property(Node)
        // // HideMask: Node = null;
        // // @property(Node)
        // // stick: Node = null;
        // // @property(Node)
        // // heart: Node = null;
        // startPos: Vec2 = new Vec2(0,0);
        // // joyStick_Max: number = 50;
        // // joyStick_Vector: Vec2 = v2();
        // isTouch: boolean = false;
        // angle: number = null;
        // angleMove: number | null = null;
        // radian: number = null;
        // currentPos: Vec2 = null;
        // setTimeOut: any;
        // start() {
        //   // let canvas: Camera = null;
        //   // tween(canvas)
        //   // .to(1, {zoomRatio: 0.5})
        //   // canvas.designResolution = siz
        //   // this.Player = this.Player_PhysicCircleCollide.getComponent("PlayerController");
        //   // this.HideMask.on(Node.EventType.TOUCH_START, this.stickStart, this);
        //   // this.HideMask.on(Node.EventType.TOUCH_MOVE, this.stickMove, this);
        //   // this.HideMask.on(Node.EventType.TOUCH_CANCEL, this.stickEnd, this);
        //   // this.HideMask.on(Node.EventType.TOUCH_END, this.stickEnd, this);
        // }
        // onLoad() {
        // }
        // public handleFixCircleCldFishes(): void {
        //   // this.EnemiesController.Fishes_Lv1.forEach(fish => {
        //   //   fish.getComponent(PhysicsCircleCollider).radius = 5;
        //   // })
        //   // this.EnemiesController.Fishes_Lv2.forEach(fish => {
        //   //   fish.getComponent(PhysicsCircleCollider).radius = 5;
        //   // })
        // }
        // public stickStart(event: EventTouch): void {
        //   this.isTouch = true;
        //   this.currentPos = event.getLocation();
        //   // this.joyStick_Vector = this.node.convertToNodeSpaceAR(this.currentPos);
        //   // this.setLimitStickVector(this.joyStick_Vector);
        //   // this.stick.setPosition(this.joyStick_Vector);
        //   this.node.x = this.currentPos.x - winSize.width / 2;
        //   this.node.y = this.currentPos.y - winSize.height / 2;
        //   this.Player_PhysicCircleCollide.radius = 24;
        // }
        // public stickEnd(event: Touch) {
        //   this.isTouch = false;
        //   this.Player.getComponent("PlayerController").isMove = false;
        //   this.Player_PhysicCircleCollide.radius = 40;
        //   if(this.Player.getComponent("PlayerController").isLive) {
        //     this.Player.getComponent(RigidBody).linearVelocity = new Vec2(0, 0);
        //   }
        //   // this.EnemiesController.Fishes_Lv1.forEach(fish => {
        //   //   fish.getComponent(PhysicsCircleCollider).radius = 27;
        //   // })
        //   // this.EnemiesController.Fishes_Lv2.forEach(fish => {
        //   //   fish.getComponent(PhysicsCircleCollider).radius = 34;
        //   // })
        // }
        // protected update(dt: number): void {
        //   // this.handleRotatePlayer();
        //   // console.log(this.Player_PhysicCircleCollide.radius);
        // }
      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=JoyStick.js.map