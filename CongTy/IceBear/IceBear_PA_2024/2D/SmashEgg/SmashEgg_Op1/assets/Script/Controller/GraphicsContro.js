import { StateForJs } from "../Data/StateForJS";
cc.Class({
    extends: cc.Component,

    properties: {
        graphics: null,
        line_point: [cc.Vec2],
        isCanDraw: true,
    },

    onLoad() {
        this.node.width = 320;
        this.node.height = 480;
        this.graphics = this.getComponent(cc.Graphics);
    },

    start() {


        // StateForJs.isCanDraw = true;
        window.PointPos = cc.v2(-50,100);
        window.isLineStop = false;
        this.isActiveLineLogic = false;
        this.onTouch();
    },


    update() {
        if(this.rigibodyLogic && this.isActiveLineLogic) {
            if(this.rigibodyLogic.linearVelocity.x === 0 && this.rigibodyLogic.linearVelocity.y === 0) {
                window.isLineStop = true;
            }
        }
    },


    onTouch() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
    },
    offTouch() {
        this.node.off(cc.Node.EventType.TOUCH_START);
        this.node.off(cc.Node.EventType.TOUCH_MOVE);
        this.node.off(cc.Node.EventType.TOUCH_END);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL);
    },
    touch_start: function (event) {
        if (!this.isCanDraw || window.isWin) {
            return;
        }

        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        window.isStartDraw = true;
        window.PointPos = pos;
        this.graphics.moveTo(pos.x, pos.y);
        this.line_point.push(cc.v2(pos.x, pos.y));
    },
    touch_move: function (event) {
        if (!this.isCanDraw || window.isWin) {
            return;
        }

        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        window.PointPos = pos;
        this.graphics.lineTo(pos.x, pos.y);
        this.line_point.push(cc.v2(pos.x, pos.y));

        if(window.isTouchWall) {
            this.graphics.strokeColor = cc.Color.RED
        } else {
            this.graphics.strokeColor = cc.Color.BLACK
        }

        this.graphics.stroke();
    },
    touch_end: function (event) {
        if(window.isTouchWall) {
            StateForJs.isCanDraw = true;
            window.isTouchWall = false;
            this.line_point = [];
            this.graphics.clear();
            return;
        }

        if (!this.isCanDraw || window.isWin) {
            return;
        }

        
        this.isCanDraw = false;
        window.isDraw = true;
        window.isTouchWall = false
        this.createRigibody();
        this.offTouch();
    },
    createRigibody: function () {
        this.rigibodyLogic = this.addComponent(cc.RigidBody);
        this.rigibodyLogic.gravityScale = 10;

        this.physicsLine = this.addComponent("MyPhysicsCollider");
        this.physicsLine.lineWidth = 9;
        this.physicsLine.points = this.line_point;
        this.physicsLine.friction = 0;
        this.physicsLine.density = 0;
        this.physicsLine.tag = 5;
        this.physicsLine.apply();

        this.scheduleOnce(() => {
            this.isActiveLineLogic = true;
        }, 0.3);
    },


    applyContact() {
        this.rigibodyLogic.onBeginContact = (c,s,o) => {
            
        }
    },


    checkIsCanDraw: function (lastPoint, nowPoint) {
        return lastPoint.sub(nowPoint).mag() >= 20;
    },

});
