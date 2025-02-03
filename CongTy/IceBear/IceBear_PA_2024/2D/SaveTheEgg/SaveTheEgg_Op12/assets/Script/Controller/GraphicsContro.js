import { StateForJs } from "../Data/StateForJS";

cc.Class({
    extends: cc.Component,

    properties: {
        graphics: null,
        line_point: [cc.Vec2],
    },


    onLoad() {
        this.node.width = 5000;
        this.node.height = 5000;
        this.graphics = this.getComponent(cc.Graphics);
        this.currentDrawTime = 0;
    },


    start() {
        window.PointPos = cc.v2(-60, 65);
        this.onTouch();
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


    touch_start(event) {
        if (!StateForJs.isCanDraw || StateForJs.isToStore) {
            return;
        }

        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        window.isStartDraw = true;
        window.PointPos = pos;
        this.graphics.moveTo(pos.x, pos.y);
        this.line_point.push(cc.v2(pos.x, pos.y));
    },


    touch_move(event) {
        if (!StateForJs.isCanDraw || StateForJs.isToStore) {
            return;
        }

        this.currentDrawTime += 1;

        // if(window.currentLv === 2 && this.currentDrawTime >= 8) {
        //     window.changeEggRigidbodyType = true;
        //     window.stopDrawSound = true;
        //     this.touch_end();
        //     return;
        // }

        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        window.PointPos = pos;
        this.graphics.lineTo(pos.x, pos.y);
        this.line_point.push(cc.v2(pos.x, pos.y));

        this.updateStrokeColor();
        this.graphics.stroke();
    },


    touch_end(event) {
        if (window.isTouchWall) {
            StateForJs.isCanDraw = true;
            // window.isTouchWall = false;
            window.isDraw = false;
            this.line_point = [];
            this.graphics.clear();
            return;
        }

        if (!StateForJs.isCanDraw || StateForJs.isToStore) {
            return;
        }

        // Rút gọn đường vẽ
        let simplifiedPoints = this.simplifyPath(this.line_point, 4);  // Sử dụng độ tolerance phù hợp
        StateForJs.isCanDraw = false;
        window.isDraw = true;
        window.isTouchWall = false;
        this.createRigibody(simplifiedPoints);
        this.offTouch();
    },


    updateStrokeColor() {
        if (window.isTouchWall) {
            this.graphics.strokeColor = cc.Color.RED;
        } else {
            this.graphics.strokeColor = cc.Color.BLACK;
        }
    },


    createRigibody(simplifiedPoints) {
        this.rigibodyLogic = this.addComponent(cc.RigidBody);
        this.rigibodyLogic.gravityScale = 0.4;

        this.physicsLine = this.addComponent("MyPhysicsCollider");
        this.physicsLine.lineWidth = 7;
        this.physicsLine.points = simplifiedPoints;  // Sử dụng điểm đã rút gọn
        this.physicsLine.friction = 0;
        this.physicsLine.density = 0;
        this.physicsLine.tag = 4;
        this.physicsLine.apply();
    },


    simplifyPath(points, tolerance) {
        if (points.length < 3) return points;

        let sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;
        points = this.simplifyDouglasPeucker(points, sqTolerance);

        return points;
    },


    simplifyDouglasPeucker(points, sqTolerance) {
        let len = points.length,
            ArrayConstructor = typeof Uint8Array !== 'undefined' ? Uint8Array : Array,
            markers = new ArrayConstructor(len),
            first = 0,
            last = len - 1,
            stack = [],
            newPoints = [],
            i, maxSqDist, sqDist, index;

        markers[first] = markers[last] = 1;

        while (last) {
            maxSqDist = 0;

            for (i = first + 1; i < last; i++) {
                sqDist = this.getSqSegDist(points[i], points[first], points[last]);

                if (sqDist > maxSqDist) {
                    index = i;
                    maxSqDist = sqDist;
                }
            }

            if (maxSqDist > sqTolerance) {
                markers[index] = 1;
                stack.push(first, index, index, last);
            }

            last = stack.pop();
            first = stack.pop();
        }

        for (i = 0; i < len; i++) {
            if (markers[i]) {
                newPoints.push(points[i]);
            }
        }

        return newPoints;
    },


    getSqSegDist(p, p1, p2) {
        let x = p1.x,
            y = p1.y,
            dx = p2.x - x,
            dy = p2.y - y;

        if (dx !== 0 || dy !== 0) {
            let t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);

            if (t > 1) {
                x = p2.x;
                y = p2.y;
            } else if (t > 0) {
                x += dx * t;
                y += dy * t;
            }
        }

        dx = p.x - x;
        dy = p.y - y;

        return dx * dx + dy * dy;
    },

    checkIsCanDraw(lastPoint, nowPoint) {
        return lastPoint.sub(nowPoint).mag() >= 20;
    },
});
