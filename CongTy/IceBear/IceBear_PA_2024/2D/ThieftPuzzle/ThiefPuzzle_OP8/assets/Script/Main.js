
cc.Class({
    extends: cc.Component,

    properties: {

        Res: require('Res'),
        Hand: cc.Node,
        RestrictedArea: cc.Node,
        ViewEnd: cc.Node,
        Enable_Click: cc.Node,
        Body_01: cc.Node,
        Body_02: cc.Node,
        Round: cc.Node,
        AreaWin: cc.Node,
        HandFake: cc.Node,
        Graphics: cc.Node,
        GraphicBackup: cc.Node,
        PosStart: cc.Node,
        HandGuild: cc.Node,
        GuildGmame: cc.Node,
        LuckyMoney: cc.Node,
        PointCollider: cc.Node,

        // 

        Rope_Audio: cc.AudioClip,

        Fight_Audio: cc.AudioClip,

        Aaaa_Audio: cc.AudioClip,

        Hahah_Audio: cc.AudioClip,
    },

    onLoad() {
        let physics_manager = cc.director.getPhysicsManager();
        physics_manager.enabled = true;
        physics_manager.gravity = cc.v2(0, 0);
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_pairBit |
        //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_joinBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        let screenW = cc.winSize.width;
        let screenH = cc.winSize.height;

        // if (screenW < screenH) {
        //     this.lineWidth = 2;
        // } else {
        //     this.lineWidth = 10;
        // }

        this.ColorWinStatus = new cc.Color().fromHEX("#8DFAFF");

        this.ColorWaitStatus = new cc.Color().fromHEX("#000000");

        this.ColorLoseStatus = new cc.Color().fromHEX("#ff0000");

        this.ColorLine = this.ColorWaitStatus;

        this.lineWidth;

        this.FlagAudio_Rope = null;

        this.Backup = null;

        this.isCollider = false;

        this.FlagAdd = false;

        this.FlagbackupStatus = null;

        this.countCollider = 0;

        this.FlagStatus = false;

        this.FlagMove = false;

        this.Fllow_Current = 1;

        this.FlagAudio_Rope = null;

        this.ArrPoint = [];

        this.ArrPointEdit = [];

        this.flagPhysic = true;

        this.lerpFactor = 0.05;

        this.flagDoneOne = false;

        this.threshold = 1000;

        this.BackupPosMove = null;
    },

    start() {
        // this.AddCollider(this.PointCollider);
    },

    AddCollider(node) {
        let myCollider = node.getComponent(cc.Collider);
        if (myCollider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    },

    calculateDistanceBetweenPoints(point1, point2) {
        // Sử dụng phương trình khoảng cách Euclid
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const roundedDistance = Math.round(distance);
        return roundedDistance * 8;
    },

    onTouchStart() {
        this.Res.StartAudio();
    },

    onTouchMove(event) {
        if(this.Res.Flag_Done) return;
        this.Res.StartAudio();
        this.HandGuild.active = false;
        const touchPos = event.getLocation().subSelf(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2));
        // const newPosition = this.node.convertToNodeSpaceAR(touchPos);
        if (this.FlagAudio_Rope == null) {
            if (this.Res.ironSourceSoundState) {
                this.FlagAudio_Rope = cc.audioEngine.play(this.Rope_Audio, false, 1);
            }
            setTimeout(() => {
                this.FlagAudio_Rope = null;
            }, 1500);
        }
        this.BackupPosMove = this.Hand.position;
        this.Hand.position = this.lerp(this.Hand.position, touchPos, this.lerpFactor);
        this.HandFake.active = false;
        this.isCheckDone();
        this.isOverlappingNodeB();
        this.DragMove();
        this.checkApproximatelyCollinear();
        this.checkPop();
    },

    lerp(start, end, t) {
        return start.mul(1 - t).add(end.mul(t));
    },

    isOverlappingNodeB() {
        this.RestrictedArea._children.forEach(element => {
            const rect1 = this.Hand.getBoundingBoxToWorld();
            const rect2 = element.getBoundingBoxToWorld();
            if (rect1.intersects(rect2)) {
                if(element._name == 'y') {
                    this.Hand.setPosition(this.BackupPosMove.x, this.Hand.y);
                }else{
                    this.Hand.setPosition(this.Hand.x, this.BackupPosMove.y);
                }
            }
        });
    },

    isCheckDone() {
        const rect1 = this.Hand.getBoundingBoxToWorld();
        const rect2 = this.AreaWin.getBoundingBoxToWorld();
        if (rect2.intersects(rect1)) {
            this.FlagStatus = "Round";
        } else {
            this.FlagStatus = false;
        }
    },

    adjustPosition(nodeA, nodeB) {
        const number = 100;
        const direction = cc.v2(nodeB.x - nodeA.x, nodeB.y - nodeA.y).normalize();
        const distance = nodeA.width / number + nodeB.width / number;
        const newPosition = cc.v2(nodeA.x - direction.x * distance, nodeA.y - direction.y * distance);
        // Update the position of nodeA
        this.Hand.setPosition(newPosition);
    },

    onTouchEnd() {
        if (this.FlagStatus == "Round") {
            if (this.ArrPoint.length == 0) {
                this.ViewEnd.active = true;
                return;
            }
            this.GuildGmame.active = false;
            this.FlagMove = true;
            this.RestrictedArea.active = false;
            this.Round.active = false;
            const posStart = this.PosStart.getPosition();
            this.LuckyMoney.setPosition(this.Hand.getPosition());
            this.Move(this.Hand, true);
            this.Move(this.LuckyMoney, false);
            this.Enable_Click = true;
        } else if (this.FlagStatus == "God") {
            return;
        }

    },

    onMoveComplete() {
        if (!this.flagDoneOne) {
            this.flagDoneOne = true;
            this.DoneFn();
        }
    },

    Move(nodeMove, flagPop) {
        const actions = [];
        for (let i = this.ArrPointEdit.length - 1; i > 0; i--) {
            const startPos = this.ArrPointEdit[i];
            const moveSpeed = 500;
            const endPos = this.ArrPointEdit[i - 1];
            const distance = startPos.sub(endPos).mag();
            const moveDuration = distance / moveSpeed;

            const moveAction = cc.moveTo(moveDuration, endPos);

            const scaleXAction = cc.callFunc(() => {
                if (i != this.ArrPointEdit.length - 1 && flagPop) {
                    this.ArrPoint.pop();
                }
            });
            const spawnAction = cc.spawn(moveAction, scaleXAction);
            actions.push(spawnAction);
        }
        let onComplete = cc.callFunc(this.onMoveComplete, this);
        // Tạo sequence từ các action di chuyển và thay đổi scaleX
        const sequence = cc.sequence(actions, onComplete);
        var moveWithCallback = cc.sequence(sequence, onComplete);
        // Áp dụng sequence vào node
        nodeMove.runAction(moveWithCallback);

    },

    DragMove() {
        const graphics = this.Graphics.getComponent(cc.Graphics);
        graphics.clear();
        const posStart = this.PosStart.getPosition();
        const posEnd = this.Hand.getPosition();
        let ArrPosNew = [];
        if (this.ArrPoint.length > 0) {
            this.ArrPoint.forEach(element => {
                ArrPosNew.push(element.position);
            });
        }
        ArrPosNew.unshift(posStart);
        ArrPosNew.push(posEnd);
        this.ArrPointEdit = ArrPosNew;
        for (let i = 0; i < ArrPosNew.length - 1; i++) {
            graphics.strokeColor = this.ColorLine;
            // graphics.lineWidth = 3;
            graphics.moveTo(ArrPosNew[i].x, ArrPosNew[i].y);
            graphics.lineTo(ArrPosNew[i + 1].x, ArrPosNew[i + 1].y);
            graphics.stroke();
        }
        const index = ArrPosNew.length;
        this.DirectionVector(ArrPosNew[index - 2], ArrPosNew[index - 1]);
    },

    DirectionVector(posStart, posEnd) {
        let x1 = posStart.x;
        let y1 = posStart.y;
        let x2 = posEnd.x;
        let y2 = posEnd.y;
        let angle = this.calculateAngle(x1, y1, x2, y2);
        this.Hand.angle = angle + 140;
    },

    checkApproximatelyCollinear() {
        // Kiểm tra xem ba điểm có gần đúng thẳng hàng hay không với ngưỡng là 5 (hoặc số khác tùy chọn)
        const threshold = 200;
        let isApproximatelyCollinear;
        let isSpace;
        let isSpace2;
        this.PointCollider._children.forEach(element => {
            if (this.ArrPoint.length > 0) {
                if (element._id == this.ArrPoint[this.ArrPoint.length - 1]._id) {
                    return;
                }
            }
            const index = this.ArrPointEdit.length;
            const pointA = this.ArrPointEdit[index - 1];
            const pointB = this.ArrPointEdit[index - 2];
            const pointC = this.ArrPointEdit[index - 2];
            const pointD = this.ArrPointEdit[index - 1];

            const deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
            isApproximatelyCollinear = deviation < this.threshold;
            const Space1 = this.calculateDistanceBetweenPoints(pointA, pointB);
            const Space2 = this.calculateDistanceBetweenPoints(pointA, element);
            const Space3 = this.calculateDistanceBetweenPoints(pointC, pointD);
            const Space4 = this.calculateDistanceBetweenPoints(pointC, element);

            isSpace = Space1 > Space2;
            isSpace2 = Space3 > Space4;
            if (this.ArrPoint.length == 0) {
                this.Backup = null;
            }
            // Nếu trạng thái trước đó là không thẳng hàng và hiện tại là thẳng hàng
            if (this.Backup != null) {
                if (this.Backup._id == element._id) return;
            }

            if (isSpace && isSpace2) {
                if (isApproximatelyCollinear && !this.isCollider) {
                    if (this.ArrPoint.length == 0) {
                        this.ArrPoint.push(element);
                        this.Backup = element;
                        this.FlagAdd = true;
                        this.FlagbackupStatus = true;
                        this.countCollider = 0;
                    } else {
                        if (element._id != this.Backup._id) {
                            this.FlagAdd = true;
                            this.countCollider = 0;
                            this.ArrPoint.push(element);
                            this.Backup = element;
                        }
                    }
                }
            }

        });
    },

    checkPop() {
        if (this.FlagMove) return;
        const index = this.ArrPointEdit.length;
        if (index <= 2) return;
        const threshold = 200;
        let isApproximatelyCollinear;
        const graphics = this.GraphicBackup.getComponent(cc.Graphics);
        let ArrPosNew = [];
        graphics.clear();
        const posStart = this.ArrPointEdit[index - 3];
        const posEnd = this.ArrPointEdit[index - 1];
        ArrPosNew.unshift(posStart);
        ArrPosNew.push(posEnd);
        for (let i = 0; i < ArrPosNew.length - 1; i++) {
            graphics.moveTo(ArrPosNew[i].x, ArrPosNew[i].y);
            graphics.lineTo(ArrPosNew[i + 1].x, ArrPosNew[i + 1].y);
            graphics.stroke();
        }
        const pointA = posStart;
        const pointB = posEnd;
        const pointC = this.ArrPoint[this.ArrPoint.length - 1];
        const element = pointC;

        if (this.ArrPoint.length > 0) {
            if (element._id == this.ArrPoint[this.ArrPoint.length - 1]._id) {
                const deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
                isApproximatelyCollinear = deviation < this.threshold;
                const Space1 = this.calculateDistanceBetweenPoints(pointA, pointB);
                const Space2 = this.calculateDistanceBetweenPoints(pointA, element);
                const isSpace = Space1 > Space2;
                let status;
                if (isSpace) {
                    if (isApproximatelyCollinear) {
                        status = true;
                    } else {
                        status = false;
                    }
                    if (this.FlagbackupStatus != status) {
                        this.FlagbackupStatus = status;
                        if (!status) {
                            ++this.countCollider;
                            if (this.countCollider >= 2) {
                                this.isCollider = false;
                                this.countCollider = 1;
                                this.ArrPoint.pop();
                            }
                        }
                    }
                }
            }
        }

    },

    calculateDistanceBetweenPoints(point1, point2) {
        // Sử dụng phương trình khoảng cách Euclid
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const roundedDistance = Math.round(distance);
        return roundedDistance;
    },

    DirectionVectorPhysics(posStart, posEnd) {
        let x1 = posStart.x;
        let y1 = posStart.y;
        let x2 = posEnd.x;
        let y2 = posEnd.y;
        let angle = this.calculateAngle(x1, y1, x2, y2);
        return angle;
    },

    calculateAngle(x1, y1, x2, y2) {
        // Tính hệ số góc của đoạn thẳng nối hai điểm
        let deltaY = y2 - y1;
        let deltaX = x2 - x1;

        // Tính arctangent của hệ số góc và chuyển đổi từ radian sang độ
        let angleInRadians = Math.atan2(deltaY, deltaX);

        // Chuyển đổi radian sang độ
        let angleInDegrees = angleInRadians * (180 / Math.PI);

        // Đảm bảo góc luôn nằm trong khoảng từ 0 đến 360 độ
        angleInDegrees = (angleInDegrees + 360) % 360;

        return angleInDegrees;
    },

    DoneFn() {
        this.Res.Flag_Done = true;
        if (this.Res.ironSourceSoundState) {
            if (this.Res.FlagAudiohaha) {
                this.Res.FlagAudiohaha = false;
                cc.audioEngine.play(this.Hahah_Audio, false, 1);
            }
        }
        this.Body_01.active = false;
        this.Body_02.active = true;
        this.Hand.active = false;
        this.Round.active = false;
        this.GuildGmame.active = false;
        this.LuckyMoney.active = false;
        setTimeout(() => {
            this.ViewEnd.active = true;
        }, 1000);
    },
    update(dt) {

        if (!this.FlagMove) {
            if (this.FlagStatus == "Round") {
                this.ColorLine = this.ColorWinStatus;
            } else if (this.FlagStatus == false) {
                this.ColorLine = this.ColorWaitStatus;
            } else if (this.FlagStatus == "God") {
                this.ColorLine = this.ColorLoseStatus;
            }
        }

        if (this.FlagMove) {
            this.DragMove();
        }

        if (this.Res.Flag_Done) {
            if (!this.flagDoneOne) {
                this.flagDoneOne = true;
                this.DoneFn();
            }
        }

        let screenW = cc.winSize.width;
        let screenH = cc.winSize.height;
        if (screenW < screenH) {
            this.threshold = 400;
        } else {
            this.lineWidth = 2000;
        }

    },
});
