"use strict";
cc._RF.push(module, '5011fRH0vRIq6Bm4n9IwqHD', 'Main');
// Script/Main.js

"use strict";

var _cc$Class;

cc.Class((_cc$Class = {
  "extends": cc.Component,
  properties: {
    Res: require('Res'),
    Hand: cc.Node,
    posFall: cc.Node,
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
    hint: cc.Node,
    // 
    Rope_Audio: cc.AudioClip,
    Fight_Audio: cc.AudioClip,
    Aaaa_Audio: cc.AudioClip,
    Hahah_Audio: cc.AudioClip
  },
  onLoad: function onLoad() {
    var physics_manager = cc.director.getPhysicsManager();
    physics_manager.enabled = true;
    physics_manager.gravity = cc.v2(0, 0); // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
    //     cc.PhysicsManager.DrawBits.e_pairBit |
    //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
    //     cc.PhysicsManager.DrawBits.e_joinBit |
    //     cc.PhysicsManager.DrawBits.e_shapeBit

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    var screenW = cc.winSize.width;
    var screenH = cc.winSize.height; // if (screenW < screenH) {
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
  start: function start() {// this.AddCollider(this.PointCollider);
  },
  AddCollider: function AddCollider(node) {
    var myCollider = node.getComponent(cc.Collider);

    if (myCollider) {
      collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
      collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
      collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
      collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
    }
  },
  calculateDistanceBetweenPoints: function calculateDistanceBetweenPoints(point1, point2) {
    // Sử dụng phương trình khoảng cách Euclid
    var dx = point2.x - point1.x;
    var dy = point2.y - point1.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var roundedDistance = Math.round(distance);
    return roundedDistance * 8;
  },
  onTouchStart: function onTouchStart() {
    this.Res.StartAudio();
  },
  onTouchMove: function onTouchMove(event) {
    var _this = this;

    if (!this.Res.FlagMove) return;
    if (this.Res.Flag_Done) return;
    this.Res.StartAudio();
    this.HandGuild.active = false;
    this.hint.active = false;
    var touchPos = event.getLocation().subSelf(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2)); // const newPosition = this.node.convertToNodeSpaceAR(touchPos);

    if (this.FlagAudio_Rope == null) {
      if (this.Res.ironSourceSoundState) {
        this.FlagAudio_Rope = cc.audioEngine.play(this.Rope_Audio, false, 1);
      }

      setTimeout(function () {
        _this.FlagAudio_Rope = null;
      }, 1000);
    }

    this.BackupPosMove = this.Hand.position;
    this.Hand.position = this.lerp(this.Hand.position, touchPos, this.lerpFactor);
    this.HandFake.active = false;
    this.isCheckDone();
    this.isOverlappingNodeB();
    this.DragMove();
    this.checkApproximatelyCollinear();
    this.checkPop();
    this.checkFalse();
  },
  lerp: function lerp(start, end, t) {
    return start.mul(1 - t).add(end.mul(t));
  },
  isOverlappingNodeB: function isOverlappingNodeB() {
    var _this2 = this;

    if (this.FlagMove) return;

    this.RestrictedArea._children.forEach(function (element) {
      var rect1 = _this2.Hand.getBoundingBoxToWorld();

      var rect2 = element.getBoundingBoxToWorld();

      if (rect1.intersects(rect2)) {
        // if(element._name == 'y') {
        //     this.Hand.setPosition(this.BackupPosMove.x, this.Hand.y);
        // }else{
        //     this.Hand.setPosition(this.Hand.x, this.BackupPosMove.y);
        // }
        _this2.adjustPosition(_this2.Hand, element);
      }
    });
  },
  isCheckDone: function isCheckDone() {
    var rect1 = this.Hand.getBoundingBoxToWorld();
    var rect2 = this.AreaWin.getBoundingBoxToWorld();

    if (rect2.intersects(rect1)) {// this.FlagStatus = "Round";
    }
  },
  adjustPosition: function adjustPosition(nodeA, nodeB) {
    var number = 20;
    var direction = cc.v2(nodeB.x - nodeA.x, nodeB.y - nodeA.y).normalize();
    var distance = nodeA.width / number + nodeB.width / number;
    var newPosition = cc.v2(nodeA.x - direction.x * distance, nodeA.y - direction.y * distance); // Update the position of nodeA

    this.Hand.setPosition(newPosition);
  },
  onTouchEnd: function onTouchEnd() {
    if (this.FlagStatus == "Round") {
      if (this.ArrPoint.length == 0) {
        this.ViewEnd.active = true;
        return;
      }

      this.GuildGmame.active = false;
      this.FlagMove = true;
      this.RestrictedArea.active = false;
      this.Round.active = false;
      var posStart = this.PosStart.getPosition();
      this.LuckyMoney.setPosition(this.Hand.getPosition());
      this.Move(this.Hand, true);
      this.Move(this.LuckyMoney, false);
      this.Enable_Click = true;
    } else if (this.FlagStatus == "God") {
      return;
    }
  },
  onMoveComplete: function onMoveComplete() {
    if (!this.flagDoneOne) {
      this.flagDoneOne = true;
      this.Res.FlagStatus = 'Win';
      this.DoneFn();
    }
  },
  Move: function Move(nodeMove, flagPop) {
    var _this3 = this;

    var actions = [];

    var _loop = function _loop(i) {
      var startPos = _this3.ArrPointEdit[i];
      var moveSpeed = 500;
      var endPos = _this3.ArrPointEdit[i - 1];
      var distance = startPos.sub(endPos).mag();
      var moveDuration = distance / moveSpeed;
      var moveAction = cc.moveTo(moveDuration, endPos);
      var scaleXAction = cc.callFunc(function () {
        if (i != _this3.ArrPointEdit.length - 1 && flagPop) {
          _this3.ArrPoint.pop();
        }
      });
      var spawnAction = cc.spawn(moveAction, scaleXAction);
      actions.push(spawnAction);
    };

    for (var i = this.ArrPointEdit.length - 1; i > 0; i--) {
      _loop(i);
    }

    var onComplete = cc.callFunc(this.onMoveComplete, this); // Tạo sequence từ các action di chuyển và thay đổi scaleX

    var sequence = cc.sequence(actions, onComplete);
    var moveWithCallback = cc.sequence(sequence, onComplete); // Áp dụng sequence vào node

    nodeMove.runAction(moveWithCallback);
  },
  DragMove: function DragMove() {
    var graphics = this.Graphics.getComponent(cc.Graphics);
    graphics.clear();
    var posStart = this.PosStart.getPosition();
    var posEnd = this.Hand.getPosition();
    var ArrPosNew = [];

    if (this.ArrPoint.length > 0) {
      this.ArrPoint.forEach(function (element) {
        ArrPosNew.push(element.position);
      });
    }

    ArrPosNew.unshift(posStart);
    ArrPosNew.push(posEnd);
    this.ArrPointEdit = ArrPosNew;

    for (var i = 0; i < ArrPosNew.length - 1; i++) {
      graphics.strokeColor = this.ColorLine; // graphics.lineWidth = 3;

      graphics.moveTo(ArrPosNew[i].x, ArrPosNew[i].y);
      graphics.lineTo(ArrPosNew[i + 1].x, ArrPosNew[i + 1].y);
      graphics.stroke();
    }

    var index = ArrPosNew.length;
    this.DirectionVector(ArrPosNew[index - 2], ArrPosNew[index - 1]);
  },
  DirectionVector: function DirectionVector(posStart, posEnd) {
    var x1 = posStart.x;
    var y1 = posStart.y;
    var x2 = posEnd.x;
    var y2 = posEnd.y;
    var angle = this.calculateAngle(x1, y1, x2, y2);
    this.Hand.angle = angle + 30;
  },
  checkApproximatelyCollinear: function checkApproximatelyCollinear() {
    var _this4 = this;

    // Kiểm tra xem ba điểm có gần đúng thẳng hàng hay không với ngưỡng là 5 (hoặc số khác tùy chọn)
    var threshold = 200;
    var isApproximatelyCollinear;
    var isSpace;
    var isSpace2;

    this.PointCollider._children.forEach(function (element) {
      if (_this4.ArrPoint.length > 0) {
        if (element._id == _this4.ArrPoint[_this4.ArrPoint.length - 1]._id) {
          return;
        }
      }

      var index = _this4.ArrPointEdit.length;
      var pointA = _this4.ArrPointEdit[index - 1];
      var pointB = _this4.ArrPointEdit[index - 2];
      var pointC = _this4.ArrPointEdit[index - 2];
      var pointD = _this4.ArrPointEdit[index - 1];
      var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
      isApproximatelyCollinear = deviation < _this4.threshold;

      var Space1 = _this4.calculateDistanceBetweenPoints(pointA, pointB);

      var Space2 = _this4.calculateDistanceBetweenPoints(pointA, element);

      var Space3 = _this4.calculateDistanceBetweenPoints(pointC, pointD);

      var Space4 = _this4.calculateDistanceBetweenPoints(pointC, element);

      isSpace = Space1 > Space2;
      isSpace2 = Space3 > Space4;

      if (_this4.ArrPoint.length == 0) {
        _this4.Backup = null;
      } // Nếu trạng thái trước đó là không thẳng hàng và hiện tại là thẳng hàng


      if (_this4.Backup != null) {
        if (_this4.Backup._id == element._id) return;
      }

      if (isSpace && isSpace2) {
        if (isApproximatelyCollinear && !_this4.isCollider) {
          if (_this4.ArrPoint.length == 0) {
            _this4.ArrPoint.push(element);

            _this4.Backup = element;
            _this4.FlagAdd = true;
            _this4.FlagbackupStatus = true;
            _this4.countCollider = 0;
          } else {
            if (element._id != _this4.Backup._id) {
              _this4.FlagAdd = true;
              _this4.countCollider = 0;

              _this4.ArrPoint.push(element);

              _this4.Backup = element;
            }
          }
        }
      }
    });
  },
  checkPop: function checkPop() {
    if (this.FlagMove) return;
    var index = this.ArrPointEdit.length;
    if (index <= 2) return;
    var threshold = 200;
    var isApproximatelyCollinear;
    var graphics = this.GraphicBackup.getComponent(cc.Graphics);
    var ArrPosNew = [];
    graphics.clear();
    var posStart = this.ArrPointEdit[index - 3];
    var posEnd = this.ArrPointEdit[index - 1];
    ArrPosNew.unshift(posStart);
    ArrPosNew.push(posEnd);

    for (var i = 0; i < ArrPosNew.length - 1; i++) {
      graphics.moveTo(ArrPosNew[i].x, ArrPosNew[i].y);
      graphics.lineTo(ArrPosNew[i + 1].x, ArrPosNew[i + 1].y);
      graphics.stroke();
    }

    var pointA = posStart;
    var pointB = posEnd;
    var pointC = this.ArrPoint[this.ArrPoint.length - 1];
    var element = pointC;

    if (this.ArrPoint.length > 0) {
      if (element._id == this.ArrPoint[this.ArrPoint.length - 1]._id) {
        var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
        isApproximatelyCollinear = deviation < this.threshold;
        var Space1 = this.calculateDistanceBetweenPoints(pointA, pointB);
        var Space2 = this.calculateDistanceBetweenPoints(pointA, element);
        var isSpace = Space1 > Space2;
        var status;

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
  checkFalse: function checkFalse() {
    var _this5 = this;

    if (this.ArrPointEdit.length > 2) {
      var isApproximatelyCollinear;
      var isSpace;
      var isSpace2;

      this.posFall._children.forEach(function (element) {
        var index = _this5.ArrPointEdit.length;
        var pointA = _this5.ArrPointEdit[index - 1];
        var pointB = _this5.ArrPointEdit[index - 2];
        var pointC = _this5.ArrPointEdit[index - 2];
        var pointD = _this5.ArrPointEdit[index - 1];
        var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
        isApproximatelyCollinear = deviation < _this5.threshold;

        var Space1 = _this5.calculateDistanceBetweenPoints(pointA, pointB);

        var Space2 = _this5.calculateDistanceBetweenPoints(pointA, element);

        var Space3 = _this5.calculateDistanceBetweenPoints(pointC, pointD);

        var Space4 = _this5.calculateDistanceBetweenPoints(pointC, element);

        isSpace = Space1 > Space2;
        isSpace2 = Space3 > Space4;

        if (isSpace && isSpace2) {
          if (isApproximatelyCollinear) {
            _this5.FlagStatus = "God";
            _this5.Res.FlagMove = false;
            _this5.Res.FlagStatus = 'Lose';
            setTimeout(function () {
              _this5.Res.Flag_Done = true;
            }, 500);
          }
        }
      });
    } else {
      var _isApproximatelyCollinear;

      var posStart = this.PosStart.getPosition();
      var posEnd = this.Hand.getPosition();
      var pointA = posStart;
      var pointB = posEnd;

      this.posFall._children.forEach(function (element) {
        var deviation = Math.abs((element.y - pointA.y) * (pointB.x - pointA.x) - (element.x - pointA.x) * (pointB.y - pointA.y));
        _isApproximatelyCollinear = deviation < _this5.threshold;

        var Space1 = _this5.calculateDistanceBetweenPoints(pointA, pointB);

        var Space2 = _this5.calculateDistanceBetweenPoints(pointA, element);

        var isSpace = Space1 > Space2;

        if (isSpace) {
          if (_isApproximatelyCollinear) {
            _this5.FlagStatus = "God";
            _this5.Res.FlagMove = false;
            _this5.Res.FlagStatus = 'Lose';
            setTimeout(function () {
              _this5.Res.Flag_Done = true;
            }, 500);
          }
        }
      });
    }
  }
}, _cc$Class["calculateDistanceBetweenPoints"] = function calculateDistanceBetweenPoints(point1, point2) {
  // Sử dụng phương trình khoảng cách Euclid
  var dx = point2.x - point1.x;
  var dy = point2.y - point1.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  var roundedDistance = Math.round(distance);
  return roundedDistance;
}, _cc$Class.DirectionVectorPhysics = function DirectionVectorPhysics(posStart, posEnd) {
  var x1 = posStart.x;
  var y1 = posStart.y;
  var x2 = posEnd.x;
  var y2 = posEnd.y;
  var angle = this.calculateAngle(x1, y1, x2, y2);
  return angle;
}, _cc$Class.calculateAngle = function calculateAngle(x1, y1, x2, y2) {
  // Tính hệ số góc của đoạn thẳng nối hai điểm
  var deltaY = y2 - y1;
  var deltaX = x2 - x1; // Tính arctangent của hệ số góc và chuyển đổi từ radian sang độ

  var angleInRadians = Math.atan2(deltaY, deltaX); // Chuyển đổi radian sang độ

  var angleInDegrees = angleInRadians * (180 / Math.PI); // Đảm bảo góc luôn nằm trong khoảng từ 0 đến 360 độ

  angleInDegrees = (angleInDegrees + 360) % 360;
  return angleInDegrees;
}, _cc$Class.DoneFn = function DoneFn() {
  var _this6 = this;

  this.Graphics.active = false;
  this.Res.Flag_Done = true;

  if (this.Res.FlagStatus == 'Win') {
    this.Body_02._children[0].active = true;

    if (this.Res.ironSourceSoundState) {
      if (this.Res.FlagAudiohaha) {
        this.Res.FlagAudiohaha = false;
        cc.audioEngine.play(this.Hahah_Audio, false, 1);
      }
    }
  } else {
    if (this.Res.ironSourceSoundState) {
      if (this.Res.FlagAudiohaha) {
        this.Res.FlagAudiohaha = false;
        cc.audioEngine.play(this.Aaaa_Audio, false, 1);
        cc.audioEngine.play(this.Fight_Audio, false, 1);
      }
    }

    this.Body_02._children[1].active = true;
  }

  this.Body_01.active = false;
  this.Body_02.active = true;
  this.Hand.active = false;
  this.Round.active = false;
  this.GuildGmame.active = false;
  this.LuckyMoney.active = false;
  setTimeout(function () {
    _this6.ViewEnd.active = true;
  }, 1500);
}, _cc$Class.update = function update(dt) {
  if (!this.FlagMove) {
    if (this.FlagStatus == "Round") {
      console.log("hehe"); // this.ColorLine = this.ColorWinStatus;
    } else if (this.FlagStatus == false) {
      this.ColorLine = this.ColorWaitStatus;
    } else if (this.FlagStatus == "God") {
      this.ColorLine = this.ColorLoseStatus;
      this.DragMove();
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

  var screenW = cc.winSize.width;
  var screenH = cc.winSize.height;

  if (screenW < screenH) {
    this.threshold = 200;
  } else {
    this.threshold = 400;
  }
}, _cc$Class));

cc._RF.pop();