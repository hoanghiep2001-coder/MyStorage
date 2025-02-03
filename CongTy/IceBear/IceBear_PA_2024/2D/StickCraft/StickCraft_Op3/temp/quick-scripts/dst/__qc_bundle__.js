
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Character/AnimNameStick');
require('./assets/Script/Character/ArcherCombos');
require('./assets/Script/Character/ArrowStick');
require('./assets/Script/Character/AttackBoxStick');
require('./assets/Script/Character/HealthBar');
require('./assets/Script/Character/HitCombos');
require('./assets/Script/Character/Player3D');
require('./assets/Script/Const/CONST');
require('./assets/Script/Const/GameInfo');
require('./assets/Script/Controllers/AudioManager');
require('./assets/Script/Controllers/CameraController');
require('./assets/Script/Controllers/GameController');
require('./assets/Script/Controllers/UIGameController');
require('./assets/Script/Enemy/DetectPlayer');
require('./assets/Script/Enemy/EnemyBehavior');
require('./assets/Script/Enemy/EnemyBullet');
require('./assets/Script/Enemy/EnemyCollisionAttack');
require('./assets/Script/Enemy/HealthBarEnemy');
require('./assets/Script/Helper/CustomButtonAction');
require('./assets/Script/Helper/GameEnum');
require('./assets/Script/Helper/MoveInput');
require('./assets/Script/Others/ArrowRatation');
require('./assets/Script/Others/ButtonAttack');
require('./assets/Script/Others/ButtonInstall');
require('./assets/Script/Others/DropItem');
require('./assets/Script/Others/HandTutorial');
require('./assets/Script/Others/PopupInstall');
require('./assets/Script/Others/Portal');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/AttackBoxStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5cab3lV9FL3JPzR1b7qO2N', 'AttackBoxStick');
// Script/Character/AttackBoxStick.js

"use strict";

var AudioManager = require("AudioManager");

cc.Class({
  "extends": cc.Component,
  properties: {
    AudioManager: AudioManager
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  onEnable: function onEnable() {
    this.scheduleOnce(function () {
      this.disableCollision();
    }, 0.15);
  },
  // update (dt) {},
  disableCollision: function disableCollision() {
    this.node.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    cc.log("Attack Box Stick: ", other.node.group);
    window.isUsingSword && this.AudioManager.bladeSound.play();
    window.isUsingFist && this.AudioManager.hitSound.play();

    if (other.node.group == "Enemy") {
      console.log("Hit Enemy");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEF0dGFja0JveFN0aWNrLmpzIl0sIm5hbWVzIjpbIkF1ZGlvTWFuYWdlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Iiwib25FbmFibGUiLCJzY2hlZHVsZU9uY2UiLCJkaXNhYmxlQ29sbGlzaW9uIiwibm9kZSIsImFjdGl2ZSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJsb2ciLCJncm91cCIsIndpbmRvdyIsImlzVXNpbmdTd29yZCIsImJsYWRlU291bmQiLCJwbGF5IiwiaXNVc2luZ0Zpc3QiLCJoaXRTb3VuZCIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JMLElBQUFBLFlBQVksRUFBRUE7QUFETixHQUhQO0FBT0w7QUFFQTtBQUVBTSxFQUFBQSxLQVhLLG1CQVdJLENBRVIsQ0FiSTtBQWVMQyxFQUFBQSxRQWZLLHNCQWVNO0FBQ1AsU0FBS0MsWUFBTCxDQUFrQixZQUFXO0FBQ3pCLFdBQUtDLGdCQUFMO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFHSCxHQW5CSTtBQXFCTDtBQUVBQSxFQUFBQSxnQkF2QkssOEJBdUJhO0FBQ2QsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0F6Qkk7QUEyQkxDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQ1osSUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8sb0JBQVAsRUFBOEJGLEtBQUssQ0FBQ0gsSUFBTixDQUFXTSxLQUF6QztBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFlBQVAsSUFBdUIsS0FBS2xCLFlBQUwsQ0FBa0JtQixVQUFsQixDQUE2QkMsSUFBN0IsRUFBdkI7QUFDQUgsSUFBQUEsTUFBTSxDQUFDSSxXQUFQLElBQXNCLEtBQUtyQixZQUFMLENBQWtCc0IsUUFBbEIsQ0FBMkJGLElBQTNCLEVBQXRCOztBQUNBLFFBQUdQLEtBQUssQ0FBQ0gsSUFBTixDQUFXTSxLQUFYLElBQW9CLE9BQXZCLEVBQStCO0FBQzNCTyxNQUFBQSxPQUFPLENBQUNSLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7QUFDSjtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQXVkaW9NYW5hZ2VyID0gcmVxdWlyZShcIkF1ZGlvTWFuYWdlclwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyOiBBdWRpb01hbmFnZXIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkVuYWJsZSAoKXtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQ29sbGlzaW9uKCk7XHJcbiAgICAgICAgfSwgMC4xNSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGRpc2FibGVDb2xsaXNpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGNjLmxvZyhcIkF0dGFjayBCb3ggU3RpY2s6IFwiICwgb3RoZXIubm9kZS5ncm91cCk7XHJcbiAgICAgICAgd2luZG93LmlzVXNpbmdTd29yZCAmJiB0aGlzLkF1ZGlvTWFuYWdlci5ibGFkZVNvdW5kLnBsYXkoKTtcclxuICAgICAgICB3aW5kb3cuaXNVc2luZ0Zpc3QgJiYgdGhpcy5BdWRpb01hbmFnZXIuaGl0U291bmQucGxheSgpO1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJFbmVteVwiKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaXQgRW5lbXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controllers/CameraController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '334a5xuWkJMG7HmI+HE3sDk', 'CameraController');
// Script/Controllers/CameraController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Player_Node: cc.Node,
    BG_Layer_Back: cc.Node,
    BG_Layer_Mid: cc.Node,
    BG_Layer_Cloud: cc.Node
  },
  start: function start() {},
  update: function update(dt) {
    var target_position = this.Player_Node.getPosition();
    target_position.y = cc.misc.clampf(target_position.y, 0, 220); // Move Camera to offset halft size

    target_position.x -= 240;
    target_position.y -= 160;
    var current_position = this.node.getPosition();
    current_position.lerp(target_position, 0.1, current_position);
    this.node.setPosition(current_position);
    this.BG_Layer_Back.setPosition(current_position.x, current_position.y);
    this.BG_Layer_Cloud.setPosition(current_position.x / 2, current_position.y / 2);
    this.BG_Layer_Mid.setPosition(current_position.x / 4, current_position.y / 4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyc1xcQ2FtZXJhQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlBsYXllcl9Ob2RlIiwiTm9kZSIsIkJHX0xheWVyX0JhY2siLCJCR19MYXllcl9NaWQiLCJCR19MYXllcl9DbG91ZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ0YXJnZXRfcG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInkiLCJtaXNjIiwiY2xhbXBmIiwieCIsImN1cnJlbnRfcG9zaXRpb24iLCJub2RlIiwibGVycCIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsV0FBVyxFQUFDSixFQUFFLENBQUNLLElBRlA7QUFJUkMsSUFBQUEsYUFBYSxFQUFDTixFQUFFLENBQUNLLElBSlQ7QUFNUkUsSUFBQUEsWUFBWSxFQUFDUCxFQUFFLENBQUNLLElBTlI7QUFRUkcsSUFBQUEsY0FBYyxFQUFDUixFQUFFLENBQUNLO0FBUlYsR0FIUDtBQWVMSSxFQUFBQSxLQWZLLG1CQWVFLENBRU4sQ0FqQkk7QUFtQkxDLEVBQUFBLE1BbkJLLGtCQW1CR0MsRUFuQkgsRUFtQk87QUFDUixRQUFJQyxlQUFlLEdBQUcsS0FBS1IsV0FBTCxDQUFpQlMsV0FBakIsRUFBdEI7QUFDQUQsSUFBQUEsZUFBZSxDQUFDRSxDQUFoQixHQUFvQmQsRUFBRSxDQUFDZSxJQUFILENBQVFDLE1BQVIsQ0FBZUosZUFBZSxDQUFDRSxDQUEvQixFQUFpQyxDQUFqQyxFQUFtQyxHQUFuQyxDQUFwQixDQUZRLENBSVI7O0FBQ0FGLElBQUFBLGVBQWUsQ0FBQ0ssQ0FBaEIsSUFBc0IsR0FBdEI7QUFDQUwsSUFBQUEsZUFBZSxDQUFDRSxDQUFoQixJQUFzQixHQUF0QjtBQUVBLFFBQUlJLGdCQUFnQixHQUFHLEtBQUtDLElBQUwsQ0FBVU4sV0FBVixFQUF2QjtBQUVBSyxJQUFBQSxnQkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBdUJSLGVBQXZCLEVBQXlDLEdBQXpDLEVBQStDTSxnQkFBL0M7QUFFQSxTQUFLQyxJQUFMLENBQVVFLFdBQVYsQ0FBc0JILGdCQUF0QjtBQUVBLFNBQUtaLGFBQUwsQ0FBbUJlLFdBQW5CLENBQStCSCxnQkFBZ0IsQ0FBQ0QsQ0FBaEQsRUFBa0RDLGdCQUFnQixDQUFDSixDQUFuRTtBQUVBLFNBQUtOLGNBQUwsQ0FBb0JhLFdBQXBCLENBQWdDSCxnQkFBZ0IsQ0FBQ0QsQ0FBakIsR0FBbUIsQ0FBbkQsRUFBcURDLGdCQUFnQixDQUFDSixDQUFqQixHQUFtQixDQUF4RTtBQUVBLFNBQUtQLFlBQUwsQ0FBa0JjLFdBQWxCLENBQThCSCxnQkFBZ0IsQ0FBQ0QsQ0FBakIsR0FBbUIsQ0FBakQsRUFBbURDLGdCQUFnQixDQUFDSixDQUFqQixHQUFtQixDQUF0RTtBQUVIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBQbGF5ZXJfTm9kZTpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBCR19MYXllcl9CYWNrOmNjLk5vZGUsXHJcblxyXG4gICAgICAgIEJHX0xheWVyX01pZDpjYy5Ob2RlLFxyXG5cclxuICAgICAgICBCR19MYXllcl9DbG91ZDpjYy5Ob2RlLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKXtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0X3Bvc2l0aW9uID0gdGhpcy5QbGF5ZXJfTm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHRhcmdldF9wb3NpdGlvbi55ID0gY2MubWlzYy5jbGFtcGYodGFyZ2V0X3Bvc2l0aW9uLnksMCwyMjApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vdmUgQ2FtZXJhIHRvIG9mZnNldCBoYWxmdCBzaXplXHJcbiAgICAgICAgdGFyZ2V0X3Bvc2l0aW9uLnggIC09IDI0MDtcclxuICAgICAgICB0YXJnZXRfcG9zaXRpb24ueSAgLT0gMTYwO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudF9wb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBjdXJyZW50X3Bvc2l0aW9uLmxlcnAoIHRhcmdldF9wb3NpdGlvbiAsIDAuMSAsIGN1cnJlbnRfcG9zaXRpb24gKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGN1cnJlbnRfcG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLkJHX0xheWVyX0JhY2suc2V0UG9zaXRpb24oY3VycmVudF9wb3NpdGlvbi54LGN1cnJlbnRfcG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIHRoaXMuQkdfTGF5ZXJfQ2xvdWQuc2V0UG9zaXRpb24oY3VycmVudF9wb3NpdGlvbi54LzIsY3VycmVudF9wb3NpdGlvbi55LzIpO1xyXG5cclxuICAgICAgICB0aGlzLkJHX0xheWVyX01pZC5zZXRQb3NpdGlvbihjdXJyZW50X3Bvc2l0aW9uLngvNCxjdXJyZW50X3Bvc2l0aW9uLnkvNCk7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Const/GameInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df8a8sDuWhGnrd4GJVRRNO6', 'GameInfo');
// Script/Const/GameInfo.js

"use strict";

var _require = require("GameEnum"),
    EnStickState = _require.EnStickState,
    EnStickMode = _require.EnStickMode;

var GameInfo = {
  IsPlaying: false,
  TotalEnemy: 0,
  TotalEnemyAlive: 0,
  StickState: EnStickState.Idle,
  StickMode: EnStickMode.Normal,
  // Button Action
  InputAttackDown: false,
  InputJumpDown: false,
  InputDashDown: false,
  InputMoveHorizontal: 0,
  GamePause: false,
  TutorialDoneStage1: false,
  TutorialStartStage2: false,
  TutorialDoneStage2: false,
  IsShowPopupInstall: false,
  isLose: false,
  isWin: false
};
module.exports = GameInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb25zdFxcR2FtZUluZm8uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkVuU3RpY2tTdGF0ZSIsIkVuU3RpY2tNb2RlIiwiR2FtZUluZm8iLCJJc1BsYXlpbmciLCJUb3RhbEVuZW15IiwiVG90YWxFbmVteUFsaXZlIiwiU3RpY2tTdGF0ZSIsIklkbGUiLCJTdGlja01vZGUiLCJOb3JtYWwiLCJJbnB1dEF0dGFja0Rvd24iLCJJbnB1dEp1bXBEb3duIiwiSW5wdXREYXNoRG93biIsIklucHV0TW92ZUhvcml6b250YWwiLCJHYW1lUGF1c2UiLCJUdXRvcmlhbERvbmVTdGFnZTEiLCJUdXRvcmlhbFN0YXJ0U3RhZ2UyIiwiVHV0b3JpYWxEb25lU3RhZ2UyIiwiSXNTaG93UG9wdXBJbnN0YWxsIiwiaXNMb3NlIiwiaXNXaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQW9DQSxPQUFPLENBQUMsVUFBRCxDQUEzQztBQUFBLElBQU9DLFlBQVAsWUFBT0EsWUFBUDtBQUFBLElBQXFCQyxXQUFyQixZQUFxQkEsV0FBckI7O0FBRUEsSUFBSUMsUUFBUSxHQUFHO0FBQ1hDLEVBQUFBLFNBQVMsRUFBRyxLQUREO0FBRVhDLEVBQUFBLFVBQVUsRUFBRSxDQUZEO0FBR1hDLEVBQUFBLGVBQWUsRUFBRSxDQUhOO0FBSVhDLEVBQUFBLFVBQVUsRUFBRU4sWUFBWSxDQUFDTyxJQUpkO0FBS1hDLEVBQUFBLFNBQVMsRUFBRVAsV0FBVyxDQUFDUSxNQUxaO0FBT1g7QUFDQUMsRUFBQUEsZUFBZSxFQUFFLEtBUk47QUFTWEMsRUFBQUEsYUFBYSxFQUFFLEtBVEo7QUFVWEMsRUFBQUEsYUFBYSxFQUFFLEtBVko7QUFXWEMsRUFBQUEsbUJBQW1CLEVBQUUsQ0FYVjtBQWFYQyxFQUFBQSxTQUFTLEVBQUUsS0FiQTtBQWNYQyxFQUFBQSxrQkFBa0IsRUFBRSxLQWRUO0FBZVhDLEVBQUFBLG1CQUFtQixFQUFFLEtBZlY7QUFnQlhDLEVBQUFBLGtCQUFrQixFQUFFLEtBaEJUO0FBa0JYQyxFQUFBQSxrQkFBa0IsRUFBRSxLQWxCVDtBQW1CWEMsRUFBQUEsTUFBTSxFQUFHLEtBbkJFO0FBb0JYQyxFQUFBQSxLQUFLLEVBQUc7QUFwQkcsQ0FBZjtBQXVCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtFblN0aWNrU3RhdGUsIEVuU3RpY2tNb2RlfSA9IHJlcXVpcmUoXCJHYW1lRW51bVwiKTtcclxuXHJcbnZhciBHYW1lSW5mbyA9IHtcclxuICAgIElzUGxheWluZyA6IGZhbHNlLFxyXG4gICAgVG90YWxFbmVteTogMCxcclxuICAgIFRvdGFsRW5lbXlBbGl2ZTogMCxcclxuICAgIFN0aWNrU3RhdGU6IEVuU3RpY2tTdGF0ZS5JZGxlLFxyXG4gICAgU3RpY2tNb2RlOiBFblN0aWNrTW9kZS5Ob3JtYWwsXHJcblxyXG4gICAgLy8gQnV0dG9uIEFjdGlvblxyXG4gICAgSW5wdXRBdHRhY2tEb3duOiBmYWxzZSxcclxuICAgIElucHV0SnVtcERvd246IGZhbHNlLFxyXG4gICAgSW5wdXREYXNoRG93bjogZmFsc2UsXHJcbiAgICBJbnB1dE1vdmVIb3Jpem9udGFsOiAwLFxyXG5cclxuICAgIEdhbWVQYXVzZTogZmFsc2UsXHJcbiAgICBUdXRvcmlhbERvbmVTdGFnZTE6IGZhbHNlLFxyXG4gICAgVHV0b3JpYWxTdGFydFN0YWdlMjogZmFsc2UsXHJcbiAgICBUdXRvcmlhbERvbmVTdGFnZTI6IGZhbHNlLFxyXG5cclxuICAgIElzU2hvd1BvcHVwSW5zdGFsbDogZmFsc2UsXHJcbiAgICBpc0xvc2U6ICBmYWxzZSxcclxuICAgIGlzV2luOiAgZmFsc2UsXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZUluZm87Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2357ctsWpNgY0wztQs7dLX', 'EnemyBehavior');
// Script/Enemy/EnemyBehavior.js

"use strict";

var _require = require("GameEnum"),
    EnStickMode = _require.EnStickMode,
    EnFacing = _require.EnFacing,
    EnEnemies = _require.EnEnemies,
    EnEnemyState = _require.EnEnemyState;

var DetectPlayer = require("DetectPlayer");

var Player3D = require("Player3D");

var EnemyBullet = require("EnemyBullet");

var HealthBarEnemy = require("HealthBarEnemy");

var GameController = require("GameController");

var GameInfo = require("GameInfo");

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {
    Player: Player3D,
    HealthBar: HealthBarEnemy,
    EnemyId: {
      "default": EnEnemies.None,
      type: EnEnemies
    },
    Speed: {
      "default": 2,
      type: cc.Float
    },
    NodePointA: {
      "default": null,
      type: cc.Node,
      serializable: true
    },
    NodePointB: {
      "default": null,
      type: cc.Node,
      serializable: true
    },
    Facing: {
      "default": EnFacing.Left,
      type: EnFacing
    },
    CollistionDetectPlayer: DetectPlayer,
    MaxHeath: 100,
    BaseAttack: 10,
    FrequenceAttack: 2,
    PrefabBullet: cc.Prefab,
    NodeBarrel: cc.Node,
    CollisionAttack: cc.Node,
    // Particle Effect
    BloodParticle: cc.ParticleSystem3D
  },
  onLoad: function onLoad() {
    var _this = this;

    if (this.NodePointA != null) {
      this._pointA = this.node.convertToWorldSpaceAR(this.NodePointA.getPosition()).x;
      this.NodePointA.active = false;
    } else {
      this._pointA = 0;
    }

    if (this.NodePointB != null) {
      this._pointB = this.node.convertToWorldSpaceAR(this.NodePointB.getPosition()).x;
      this.NodePointB.active = false;
    } else {
      this._pointB = 0;
    } // console.log("Log Move Two Point: " + this._pointA + " " + this._pointB);
    // Get Component Animator


    this._skeleton = this.getComponentInChildren(sp.Skeleton);
    this._stopMove = false;
    this._isDetectPlayer = false;
    this._tick = 0;
    this._waitFrequencyAttack = false;
    this.Speed = CONST.ZombieSpeed;
    this.FrequenceAttack = CONST.ZombieFrequenceAttack;
    if (this.EnemyId == EnEnemies.Zombie) this.HealthBar.init(CONST.ZombieMaxHP);else this.HealthBar.init(CONST.PoisonVineMaxHP);

    this._skeleton.setStartListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      _this.onStartAnimation(animationName);
    });

    this._skeleton.setCompleteListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      _this.onCompleteAnimation(animationName);
    });
  },
  onStartAnimation: function onStartAnimation(animationName) {
    if (animationName == "atk") {}
  },
  onCompleteAnimation: function onCompleteAnimation(animationName) {
    if (animationName == "atk") {
      this.endAttack();
    }
  },
  start: function start() {
    if (this.Speed > 0 && !GameInfo.GamePause) {
      this._skeleton.setAnimation(0, "walk", true);

      this._currentState = EnEnemyState.Walk;
      this._state = EnEnemyState.Walk;
    } else {
      this._skeleton.setAnimation(0, "idle", true);

      this._currentState = EnEnemyState.Idle;
      this._state = EnEnemyState.Idle;
    }
  },
  update: function update(dt) {
    if (GameInfo.GamePause) {
      this._state = EnEnemyState.Idle;
      this.updateAnimationState();
      return;
    }

    this.moveBettweenTwoPoint(dt);
    this.detectPlayer(dt);
    this.calculateDistancePlayer();
    this.updateAnimationState();
  },
  updateAnimationState: function updateAnimationState() {
    if (this._currentState != this._state) {
      if (this._state == EnEnemyState.Walk) {
        this._skeleton.setAnimation(0, "walk", true);
      } else if (this._state == EnEnemyState.Idle) {
        this._skeleton.setAnimation(0, "idle", true);
      }

      this._currentState = this._state;
    }
  },
  moveBettweenTwoPoint: function moveBettweenTwoPoint(dt) {
    if (GameInfo.GamePause) return;
    if (this.Speed <= 0 || this._stopMove) return;
    if (this.Facing == EnFacing.Right) this.newPosX = this.node.getPosition().x + 1 * this.Speed * 10 * dt;else this.newPosX = this.node.getPosition().x + -1 * this.Speed * 10 * dt;
    this.node.setPosition(this.newPosX, this.node.getPosition().y);

    if (this.node.getPosition().x >= this._pointB && this.Facing == EnFacing.Right || this.node.getPosition().x <= this._pointA && this.Facing == EnFacing.Left) {
      this.flip();
    }

    this._state = EnEnemyState.Walk;
  },
  flip: function flip() {
    if (this.Facing == EnFacing.Left) {
      this.Facing = EnFacing.Right;
      this.node.scale = cc.v2(-1, 1);
    } else {
      this.Facing = EnFacing.Left;
      this.node.scale = cc.v2(1, 1);
    }
  },
  detectPlayer: function detectPlayer(dt) {
    if (this.CollistionDetectPlayer.IsDetectPlayer && !this._isDetectPlayer) {
      this._isDetectPlayer = true;
      this._stopMove = true;
      this.actionWhenDetectPlayer();
    }

    if (!this.CollistionDetectPlayer.IsDetectPlayer && this._isDetectPlayer) {
      this._isDetectPlayer = false;
      this._stopMove = false;
      if (this.Speed > 0) this._state = EnEnemyState.Walk;else this._state = EnEnemyState.Idle;
    }

    if (this._isDetectPlayer) {
      if (!this._waitFrequencyAttack) {
        this.actionWhenDetectPlayer();
      } else {}
    }
  },
  actionWhenDetectPlayer: function actionWhenDetectPlayer() {
    // console.log("Call Attack ==>", this._waitFrequencyAttack);
    if (this._waitFrequencyAttack) return;
    this._waitFrequencyAttack = true;
    this.faceToPlayer();

    this._skeleton.setAnimation(0, "atk", false);

    if (this.EnemyId == EnEnemies.Zombie) {
      this.meleeAttack();
    } else if (this.EnemyId == EnEnemies.PoisonVine) {
      this.archerAttack();
    }

    this.scheduleOnce(function () {
      this._waitFrequencyAttack = false;
    }, this.FrequenceAttack);
  },
  faceToPlayer: function faceToPlayer() {
    if (!this.isFacingWithPlayer()) {
      this.flip();
    }
  },
  isFacingWithPlayer: function isFacingWithPlayer() {
    if (this.Player.node.getPosition().x < this.node.getPosition().x && this.Facing == EnFacing.Right || this.Player.node.getPosition().x > this.node.getPosition().x && this.Facing == EnFacing.Left) {
      return false;
    }

    return true;
  },
  meleeAttack: function meleeAttack() {
    // console.log("Melee Attack");
    this.scheduleOnce(function () {
      this.CollisionAttack.active = true;
    }, 0.3);
  },
  archerAttack: function archerAttack() {
    // console.log("Archer Attack");
    this.scheduleOnce(function () {
      if (!this.HealthBar.isAlive()) return;
      this.createBullet();
    }, 0.3);
  },
  createBullet: function createBullet() {
    var bullet = cc.instantiate(this.PrefabBullet);
    this.node.parent.addChild(bullet);
    bullet.position = this.node.convertToWorldSpaceAR(this.NodeBarrel.getPosition());
    var bulletLogic = bullet.getComponent(EnemyBullet);
    var dir = 1;
    if (this.Facing == EnFacing.Left) dir = -1;
    bulletLogic.Launch(this.BaseAttack, dir); // console.log("Create Bullet: " + bullet.getPosition());
  },
  isPlayerFacing: function isPlayerFacing() {
    if (this.Player.node.x < this.node.x && this.Player.node.scaleX > 0 || this.Player.node.x > this.node.x && this.Player.node.scaleX < 0) {
      return true;
    }

    return false;
  },
  calculateDistancePlayer: function calculateDistancePlayer() {
    if (!this.HealthBar.isAlive()) return;
    if (GameInfo.StickMode != EnStickMode.Archer) return;
    if (!this.isPlayerFacing()) return;
    var distance = Math.abs(this.node.x - this.Player.node.x);

    if (distance < CONST.MaxDistanceEnemyArcher) {
      this.Player.checkNearestEnemy(this.node, distance);
    } else {
      this.Player.removeNearestEnemy(this.node);
    }
  },
  hit: function hit() {
    if (!this.HealthBar.isAlive()) return;
    var damp = CONST.StickBaseAttack;
    this.HealthBar.decrement(damp);
    this.BloodParticle.play();
    if (!GameInfo.TutorialDoneStage1) GameInfo.TutorialDoneStage1 = true;else if (GameInfo.TutorialStartStage2 && !GameInfo.TutorialDoneStage2) GameInfo.TutorialDoneStage2 = true;

    if (!this.HealthBar.isAlive()) {
      this.die();
    }
  },
  die: function die() {
    this.effectDie();
    this.scheduleOnce(function () {
      GameInfo.TotalEnemyAlive -= 1;
      this.node.destroy();
    }, 1);
    this.Player.removeNearestEnemy(this.node);
  },
  effectDie: function effectDie() {
    this.HealthBar.node.active = false;
    var rd = this.node.getComponent(cc.RigidBody);
    rd.type = cc.RigidBodyType.Dynamic;
    rd.gravityScale = 0.1;
    rd.fixedRotation = false;
    cc.tween(this.node).to(0.5, {
      angle: 90 * this.getSidePlayer()
    }).start();
    rd.applyForceToCenter(cc.v2((Math.random() * 30 + 120) * 250 * this.getSidePlayer(), (Math.random() * 20 + 50) * 250), true);
  },
  getSidePlayer: function getSidePlayer() {
    if (this.Player.node.x > this.node.x) return -1;
    return 1;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "BoxPlayer") {
      this.hit();
    }
  },
  endAttack: function endAttack() {
    if (this.Speed <= 0 || this._stopMove) {
      this._state = EnEnemyState.Idle;

      this._skeleton.setAnimation(0, "idle", true);
    } else {
      this._state = EnEnemyState.Walk;

      this._skeleton.setAnimation(0, "walk", true);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlCZWhhdmlvci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRW5TdGlja01vZGUiLCJFbkZhY2luZyIsIkVuRW5lbWllcyIsIkVuRW5lbXlTdGF0ZSIsIkRldGVjdFBsYXllciIsIlBsYXllcjNEIiwiRW5lbXlCdWxsZXQiLCJIZWFsdGhCYXJFbmVteSIsIkdhbWVDb250cm9sbGVyIiwiR2FtZUluZm8iLCJDT05TVCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUGxheWVyIiwiSGVhbHRoQmFyIiwiRW5lbXlJZCIsIk5vbmUiLCJ0eXBlIiwiU3BlZWQiLCJGbG9hdCIsIk5vZGVQb2ludEEiLCJOb2RlIiwic2VyaWFsaXphYmxlIiwiTm9kZVBvaW50QiIsIkZhY2luZyIsIkxlZnQiLCJDb2xsaXN0aW9uRGV0ZWN0UGxheWVyIiwiTWF4SGVhdGgiLCJCYXNlQXR0YWNrIiwiRnJlcXVlbmNlQXR0YWNrIiwiUHJlZmFiQnVsbGV0IiwiUHJlZmFiIiwiTm9kZUJhcnJlbCIsIkNvbGxpc2lvbkF0dGFjayIsIkJsb29kUGFydGljbGUiLCJQYXJ0aWNsZVN5c3RlbTNEIiwib25Mb2FkIiwiX3BvaW50QSIsIm5vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJnZXRQb3NpdGlvbiIsIngiLCJhY3RpdmUiLCJfcG9pbnRCIiwiX3NrZWxldG9uIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsInNwIiwiU2tlbGV0b24iLCJfc3RvcE1vdmUiLCJfaXNEZXRlY3RQbGF5ZXIiLCJfdGljayIsIl93YWl0RnJlcXVlbmN5QXR0YWNrIiwiWm9tYmllU3BlZWQiLCJab21iaWVGcmVxdWVuY2VBdHRhY2siLCJab21iaWUiLCJpbml0IiwiWm9tYmllTWF4SFAiLCJQb2lzb25WaW5lTWF4SFAiLCJzZXRTdGFydExpc3RlbmVyIiwidHJhY2tFbnRyeSIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb24iLCJuYW1lIiwib25TdGFydEFuaW1hdGlvbiIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJvbkNvbXBsZXRlQW5pbWF0aW9uIiwiZW5kQXR0YWNrIiwic3RhcnQiLCJHYW1lUGF1c2UiLCJzZXRBbmltYXRpb24iLCJfY3VycmVudFN0YXRlIiwiV2FsayIsIl9zdGF0ZSIsIklkbGUiLCJ1cGRhdGUiLCJkdCIsInVwZGF0ZUFuaW1hdGlvblN0YXRlIiwibW92ZUJldHR3ZWVuVHdvUG9pbnQiLCJkZXRlY3RQbGF5ZXIiLCJjYWxjdWxhdGVEaXN0YW5jZVBsYXllciIsIlJpZ2h0IiwibmV3UG9zWCIsInNldFBvc2l0aW9uIiwieSIsImZsaXAiLCJzY2FsZSIsInYyIiwiSXNEZXRlY3RQbGF5ZXIiLCJhY3Rpb25XaGVuRGV0ZWN0UGxheWVyIiwiZmFjZVRvUGxheWVyIiwibWVsZWVBdHRhY2siLCJQb2lzb25WaW5lIiwiYXJjaGVyQXR0YWNrIiwic2NoZWR1bGVPbmNlIiwiaXNGYWNpbmdXaXRoUGxheWVyIiwiaXNBbGl2ZSIsImNyZWF0ZUJ1bGxldCIsImJ1bGxldCIsImluc3RhbnRpYXRlIiwicGFyZW50IiwiYWRkQ2hpbGQiLCJwb3NpdGlvbiIsImJ1bGxldExvZ2ljIiwiZ2V0Q29tcG9uZW50IiwiZGlyIiwiTGF1bmNoIiwiaXNQbGF5ZXJGYWNpbmciLCJzY2FsZVgiLCJTdGlja01vZGUiLCJBcmNoZXIiLCJkaXN0YW5jZSIsIk1hdGgiLCJhYnMiLCJNYXhEaXN0YW5jZUVuZW15QXJjaGVyIiwiY2hlY2tOZWFyZXN0RW5lbXkiLCJyZW1vdmVOZWFyZXN0RW5lbXkiLCJoaXQiLCJkYW1wIiwiU3RpY2tCYXNlQXR0YWNrIiwiZGVjcmVtZW50IiwicGxheSIsIlR1dG9yaWFsRG9uZVN0YWdlMSIsIlR1dG9yaWFsU3RhcnRTdGFnZTIiLCJUdXRvcmlhbERvbmVTdGFnZTIiLCJkaWUiLCJlZmZlY3REaWUiLCJUb3RhbEVuZW15QWxpdmUiLCJkZXN0cm95IiwicmQiLCJSaWdpZEJvZHkiLCJSaWdpZEJvZHlUeXBlIiwiRHluYW1pYyIsImdyYXZpdHlTY2FsZSIsImZpeGVkUm90YXRpb24iLCJ0d2VlbiIsInRvIiwiYW5nbGUiLCJnZXRTaWRlUGxheWVyIiwiYXBwbHlGb3JjZVRvQ2VudGVyIiwicmFuZG9tIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQTBEQSxPQUFPLENBQUMsVUFBRCxDQUFqRTtBQUFBLElBQVFDLFdBQVIsWUFBUUEsV0FBUjtBQUFBLElBQXFCQyxRQUFyQixZQUFxQkEsUUFBckI7QUFBQSxJQUErQkMsU0FBL0IsWUFBK0JBLFNBQS9CO0FBQUEsSUFBMENDLFlBQTFDLFlBQTBDQSxZQUExQzs7QUFDQSxJQUFJQyxZQUFZLEdBQUdMLE9BQU8sQ0FBQyxjQUFELENBQTFCOztBQUNBLElBQUlNLFFBQVEsR0FBR04sT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBSU8sV0FBVyxHQUFHUCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJUSxjQUFjLEdBQUdSLE9BQU8sQ0FBQyxnQkFBRCxDQUE1Qjs7QUFDQSxJQUFJUyxjQUFjLEdBQUdULE9BQU8sQ0FBQyxnQkFBRCxDQUE1Qjs7QUFDQSxJQUFNVSxRQUFRLEdBQUdWLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUNBLElBQU1XLEtBQUssR0FBR1gsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBRUFZLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUVWLFFBREE7QUFFUlcsSUFBQUEsU0FBUyxFQUFFVCxjQUZIO0FBR1JVLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTZixTQUFTLENBQUNnQixJQURkO0FBRUxDLE1BQUFBLElBQUksRUFBRWpCO0FBRkQsS0FIRDtBQU9Sa0IsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsQ0FETjtB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S0FBSyxDQUFDdkcsSUFBTixDQUFXeUcsS0FBWCxJQUFvQixXQUF2QixFQUFtQztBQUMvQixXQUFLM0IsR0FBTDtBQUNIO0FBQ0osR0E3VUk7QUErVUxsRCxFQUFBQSxTQS9VSyx1QkErVU07QUFDUCxRQUFHLEtBQUtoRCxLQUFMLElBQWMsQ0FBZCxJQUFtQixLQUFLOEIsU0FBM0IsRUFBcUM7QUFDakMsV0FBS3dCLE1BQUwsR0FBY3ZFLFlBQVksQ0FBQ3dFLElBQTNCOztBQUNBLFdBQUs3QixTQUFMLENBQWV5QixZQUFmLENBQTRCLENBQTVCLEVBQStCLE1BQS9CLEVBQXVDLElBQXZDO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsV0FBS0csTUFBTCxHQUFjdkUsWUFBWSxDQUFDc0UsSUFBM0I7O0FBQ0EsV0FBSzNCLFNBQUwsQ0FBZXlCLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0IsTUFBL0IsRUFBdUMsSUFBdkM7QUFDSDtBQUNKO0FBdlZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRW5TdGlja01vZGUsIEVuRmFjaW5nLCBFbkVuZW1pZXMsIEVuRW5lbXlTdGF0ZX0gPSByZXF1aXJlKFwiR2FtZUVudW1cIik7XHJcbnZhciBEZXRlY3RQbGF5ZXIgPSByZXF1aXJlKFwiRGV0ZWN0UGxheWVyXCIpO1xyXG52YXIgUGxheWVyM0QgPSByZXF1aXJlKFwiUGxheWVyM0RcIik7XHJcbnZhciBFbmVteUJ1bGxldCA9IHJlcXVpcmUoXCJFbmVteUJ1bGxldFwiKTtcclxudmFyIEhlYWx0aEJhckVuZW15ID0gcmVxdWlyZShcIkhlYWx0aEJhckVuZW15XCIpO1xyXG52YXIgR2FtZUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiR2FtZUNvbnRyb2xsZXJcIik7XHJcbmNvbnN0IEdhbWVJbmZvID0gcmVxdWlyZShcIkdhbWVJbmZvXCIpO1xyXG5jb25zdCBDT05TVCA9IHJlcXVpcmUoXCJDT05TVFwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgUGxheWVyOiBQbGF5ZXIzRCxcclxuICAgICAgICBIZWFsdGhCYXI6IEhlYWx0aEJhckVuZW15LFxyXG4gICAgICAgIEVuZW15SWQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogRW5FbmVtaWVzLk5vbmUsXHJcbiAgICAgICAgICAgIHR5cGU6IEVuRW5lbWllc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU3BlZWQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMixcclxuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXRcclxuICAgICAgICB9LFxyXG4gICAgICAgIE5vZGVQb2ludEE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTm9kZVBvaW50Qjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBGYWNpbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogRW5GYWNpbmcuTGVmdCxcclxuICAgICAgICAgICAgdHlwZTogRW5GYWNpbmcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBDb2xsaXN0aW9uRGV0ZWN0UGxheWVyOiBEZXRlY3RQbGF5ZXIsXHJcbiAgICAgICAgTWF4SGVhdGg6IDEwMCxcclxuICAgICAgICBCYXNlQXR0YWNrOiAxMCxcclxuICAgICAgICBGcmVxdWVuY2VBdHRhY2s6IDIsXHJcbiAgICAgICAgUHJlZmFiQnVsbGV0OiBjYy5QcmVmYWIsXHJcbiAgICAgICAgTm9kZUJhcnJlbDogY2MuTm9kZSxcclxuICAgICAgICBDb2xsaXNpb25BdHRhY2s6IGNjLk5vZGUsXHJcblxyXG4gICAgICAgIC8vIFBhcnRpY2xlIEVmZmVjdFxyXG4gICAgICAgIEJsb29kUGFydGljbGU6IGNjLlBhcnRpY2xlU3lzdGVtM0QsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5Ob2RlUG9pbnRBICE9IG51bGwpe1xyXG4gICAgICAgICAgIHRoaXMuX3BvaW50QSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5Ob2RlUG9pbnRBLmdldFBvc2l0aW9uKCkpLng7XHJcbiAgICAgICAgICAgdGhpcy5Ob2RlUG9pbnRBLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50QSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLk5vZGVQb2ludEIgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50QiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5Ob2RlUG9pbnRCLmdldFBvc2l0aW9uKCkpLng7XHJcbiAgICAgICAgICAgIHRoaXMuTm9kZVBvaW50Qi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludEIgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMb2cgTW92ZSBUd28gUG9pbnQ6IFwiICsgdGhpcy5fcG9pbnRBICsgXCIgXCIgKyB0aGlzLl9wb2ludEIpO1xyXG5cclxuICAgICAgICAvLyBHZXQgQ29tcG9uZW50IEFuaW1hdG9yXHJcbiAgICAgICAgdGhpcy5fc2tlbGV0b24gPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xyXG5cclxuICAgICAgICB0aGlzLl9zdG9wTW92ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9pc0RldGVjdFBsYXllciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl90aWNrID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fd2FpdEZyZXF1ZW5jeUF0dGFjayA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLlNwZWVkID0gQ09OU1QuWm9tYmllU3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuRnJlcXVlbmNlQXR0YWNrID0gQ09OU1QuWm9tYmllRnJlcXVlbmNlQXR0YWNrO1xyXG5cclxuICAgICAgICBpZih0aGlzLkVuZW15SWQgPT0gRW5FbmVtaWVzLlpvbWJpZSkgdGhpcy5IZWFsdGhCYXIuaW5pdChDT05TVC5ab21iaWVNYXhIUCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLkhlYWx0aEJhci5pbml0KENPTlNULlBvaXNvblZpbmVNYXhIUCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNldFN0YXJ0TGlzdGVuZXIodHJhY2tFbnRyeSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5vblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlQW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpe1xyXG4gICAgICAgIGlmKGFuaW1hdGlvbk5hbWUgPT0gXCJhdGtcIil7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Db21wbGV0ZUFuaW1hdGlvbihhbmltYXRpb25OYW1lKXtcclxuICAgICAgICBpZihhbmltYXRpb25OYW1lID09IFwiYXRrXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmVuZEF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLlNwZWVkID4gMCAmJiAhR2FtZUluZm8uR2FtZVBhdXNlKXtcclxuICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwid2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gRW5FbmVteVN0YXRlLldhbGs7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gRW5FbmVteVN0YXRlLldhbGs7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gRW5FbmVteVN0YXRlLklkbGU7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gRW5FbmVteVN0YXRlLklkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoR2FtZUluZm8uR2FtZVBhdXNlKXtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBFbkVuZW15U3RhdGUuSWRsZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmltYXRpb25TdGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlQmV0dHdlZW5Ud29Qb2ludChkdCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGV0ZWN0UGxheWVyKGR0KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVEaXN0YW5jZVBsYXllcigpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvblN0YXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUFuaW1hdGlvblN0YXRlKCl7XHJcbiAgICAgICAgaWYodGhpcy5fY3VycmVudFN0YXRlICE9IHRoaXMuX3N0YXRlKXtcclxuICAgICAgICAgICAgaWYodGhpcy5fc3RhdGUgPT0gRW5FbmVteVN0YXRlLldhbGspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwid2Fsa1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3N0YXRlID09IEVuRW5lbXlTdGF0ZS5JZGxlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IHRoaXMuX3N0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbW92ZUJldHR3ZWVuVHdvUG9pbnQgKGR0KSB7XHJcbiAgICAgICAgaWYoR2FtZUluZm8uR2FtZVBhdXNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmKHRoaXMuU3BlZWQgPD0gMCB8fCB0aGlzLl9zdG9wTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5GYWNpbmcgPT0gRW5GYWNpbmcuUmlnaHQpXHJcbiAgICAgICAgICAgIHRoaXMubmV3UG9zWCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggKyAxICogdGhpcy5TcGVlZCAqIDEwICogZHQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5ld1Bvc1ggPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgLTEgKiB0aGlzLlNwZWVkICogMTAgKiBkdDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5uZXdQb3NYLCB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55KTtcclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ID49IHRoaXMuX3BvaW50QiAmJiB0aGlzLkZhY2luZyA9PSBFbkZhY2luZy5SaWdodCB8fFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54IDw9IHRoaXMuX3BvaW50QSAmJiB0aGlzLkZhY2luZyA9PSBFbkZhY2luZy5MZWZ0KSl7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBFbkVuZW15U3RhdGUuV2FsaztcclxuICAgIH0sXHJcblxyXG4gICAgZmxpcCAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5GYWNpbmcgPT0gRW5GYWNpbmcuTGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMuRmFjaW5nID0gRW5GYWNpbmcuUmlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IGNjLnYyKC0xLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkZhY2luZyA9IEVuRmFjaW5nLkxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IGNjLnYyKDEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGV0ZWN0UGxheWVyIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuQ29sbGlzdGlvbkRldGVjdFBsYXllci5Jc0RldGVjdFBsYXllciAmJiAhdGhpcy5faXNEZXRlY3RQbGF5ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0RldGVjdFBsYXllciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3BNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25XaGVuRGV0ZWN0UGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5Db2xsaXN0aW9uRGV0ZWN0UGxheWVyLklzRGV0ZWN0UGxheWVyICYmIHRoaXMuX2lzRGV0ZWN0UGxheWVyKXtcclxuICAgICAgICAgICAgdGhpcy5faXNEZXRlY3RQbGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcE1vdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuU3BlZWQgPiAwKSB0aGlzLl9zdGF0ZSA9IEVuRW5lbXlTdGF0ZS5XYWxrO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuX3N0YXRlID0gRW5FbmVteVN0YXRlLklkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLl9pc0RldGVjdFBsYXllcil7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl93YWl0RnJlcXVlbmN5QXR0YWNrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uV2hlbkRldGVjdFBsYXllcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFjdGlvbldoZW5EZXRlY3RQbGF5ZXIoKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNhbGwgQXR0YWNrID09PlwiLCB0aGlzLl93YWl0RnJlcXVlbmN5QXR0YWNrKTtcclxuICAgICAgICBpZih0aGlzLl93YWl0RnJlcXVlbmN5QXR0YWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX3dhaXRGcmVxdWVuY3lBdHRhY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmZhY2VUb1BsYXllcigpO1xyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcImF0a1wiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuRW5lbXlJZCA9PSBFbkVuZW1pZXMuWm9tYmllKXtcclxuICAgICAgICAgICAgdGhpcy5tZWxlZUF0dGFjaygpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLkVuZW15SWQgPT0gRW5FbmVtaWVzLlBvaXNvblZpbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmFyY2hlckF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhaXRGcmVxdWVuY3lBdHRhY2sgPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzLkZyZXF1ZW5jZUF0dGFjayk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZhY2VUb1BsYXllcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRmFjaW5nV2l0aFBsYXllcigpKXtcclxuICAgICAgICAgICAgdGhpcy5mbGlwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpc0ZhY2luZ1dpdGhQbGF5ZXIoKXtcclxuICAgICAgICBpZih0aGlzLlBsYXllci5ub2RlLmdldFBvc2l0aW9uKCkueCA8IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggJiYgdGhpcy5GYWNpbmcgPT0gRW5GYWNpbmcuUmlnaHRcclxuICAgICAgICB8fCB0aGlzLlBsYXllci5ub2RlLmdldFBvc2l0aW9uKCkueCA+IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnggJiYgdGhpcy5GYWNpbmcgPT0gRW5GYWNpbmcuTGVmdCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBtZWxlZUF0dGFjaygpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTWVsZWUgQXR0YWNrXCIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLkNvbGxpc2lvbkF0dGFjay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIDAuMyk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBhcmNoZXJBdHRhY2soKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFyY2hlciBBdHRhY2tcIik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLkhlYWx0aEJhci5pc0FsaXZlKCkpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoKTtcclxuICAgICAgICB9LCAwLjMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVCdWxsZXQoKXtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5QcmVmYWJCdWxsZXQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcclxuXHJcbiAgICAgICAgYnVsbGV0LnBvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLk5vZGVCYXJyZWwuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIGxldCBidWxsZXRMb2dpYyA9IGJ1bGxldC5nZXRDb21wb25lbnQoRW5lbXlCdWxsZXQpO1xyXG5cclxuICAgICAgICBsZXQgZGlyID0gMTtcclxuICAgICAgICBpZih0aGlzLkZhY2luZyA9PSBFbkZhY2luZy5MZWZ0KSBkaXIgPSAtMTtcclxuXHJcbiAgICAgICAgYnVsbGV0TG9naWMuTGF1bmNoKHRoaXMuQmFzZUF0dGFjaywgZGlyKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJDcmVhdGUgQnVsbGV0OiBcIiArIGJ1bGxldC5nZXRQb3NpdGlvbigpKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNQbGF5ZXJGYWNpbmcoKXtcclxuICAgICAgICBpZiAodGhpcy5QbGF5ZXIubm9kZS54IDwgdGhpcy5ub2RlLnggJiYgdGhpcy5QbGF5ZXIubm9kZS5zY2FsZVggPiAwXHJcbiAgICAgICAgICAgIHx8IHRoaXMuUGxheWVyLm5vZGUueCA+IHRoaXMubm9kZS54ICYmIHRoaXMuUGxheWVyLm5vZGUuc2NhbGVYIDwgMCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYWxjdWxhdGVEaXN0YW5jZVBsYXllcigpe1xyXG4gICAgICAgIGlmKCF0aGlzLkhlYWx0aEJhci5pc0FsaXZlKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlICE9IEVuU3RpY2tNb2RlLkFyY2hlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZighdGhpcy5pc1BsYXllckZhY2luZygpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMubm9kZS54IC0gdGhpcy5QbGF5ZXIubm9kZS54KTtcclxuXHJcbiAgICAgICAgaWYoZGlzdGFuY2UgPCBDT05TVC5NYXhEaXN0YW5jZUVuZW15QXJjaGVyKXtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIuY2hlY2tOZWFyZXN0RW5lbXkodGhpcy5ub2RlLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5QbGF5ZXIucmVtb3ZlTmVhcmVzdEVuZW15KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBoaXQoKXtcclxuICAgICAgICBpZighdGhpcy5IZWFsdGhCYXIuaXNBbGl2ZSgpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBkYW1wID0gQ09OU1QuU3RpY2tCYXNlQXR0YWNrO1xyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLmRlY3JlbWVudChkYW1wKTtcclxuXHJcbiAgICAgICAgdGhpcy5CbG9vZFBhcnRpY2xlLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYoIUdhbWVJbmZvLlR1dG9yaWFsRG9uZVN0YWdlMSkgR2FtZUluZm8uVHV0b3JpYWxEb25lU3RhZ2UxID0gdHJ1ZTtcclxuICAgICAgICBlbHNlIGlmKEdhbWVJbmZvLlR1dG9yaWFsU3RhcnRTdGFnZTIgJiYgIUdhbWVJbmZvLlR1dG9yaWFsRG9uZVN0YWdlMikgR2FtZUluZm8uVHV0b3JpYWxEb25lU3RhZ2UyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuSGVhbHRoQmFyLmlzQWxpdmUoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkaWUoKXtcclxuICAgICAgICB0aGlzLmVmZmVjdERpZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBHYW1lSW5mby5Ub3RhbEVuZW15QWxpdmUgLT0gMTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5QbGF5ZXIucmVtb3ZlTmVhcmVzdEVuZW15KHRoaXMubm9kZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGVmZmVjdERpZSgpe1xyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJkID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHJkLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XHJcbiAgICAgICAgcmQuZ3Jhdml0eVNjYWxlID0gMC4xO1xyXG4gICAgICAgIHJkLmZpeGVkUm90YXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC50byAoMC41LCB7YW5nbGU6IDkwICogdGhpcy5nZXRTaWRlUGxheWVyKCl9KVxyXG4gICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICByZC5hcHBseUZvcmNlVG9DZW50ZXIoIGNjLnYyKChNYXRoLnJhbmRvbSgpICogMzAgKyAxMjApICogMjUwICogdGhpcy5nZXRTaWRlUGxheWVyKCksIChNYXRoLnJhbmRvbSgpICogMjAgKyA1MCkgKiAyNTApLCB0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2lkZVBsYXllcigpe1xyXG4gICAgICAgIGlmKHRoaXMuUGxheWVyLm5vZGUueCA+IHRoaXMubm9kZS54KSByZXR1cm4gLTE7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJCb3hQbGF5ZXJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbmRBdHRhY2soKXtcclxuICAgICAgICBpZih0aGlzLlNwZWVkIDw9IDAgfHwgdGhpcy5fc3RvcE1vdmUpe1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IEVuRW5lbXlTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gRW5FbmVteVN0YXRlLldhbGs7XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcIndhbGtcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/GameEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15701YENilEgLfGYzImXtGW', 'GameEnum');
// Script/Helper/GameEnum.js

"use strict";

var EnEnemies = cc.Enum({
  None: 0,
  Zombie: 1,
  PoisonVine: 2
});
var EnFacing = cc.Enum({
  Left: 0,
  Right: 1
});
var EnGameState = cc.Enum({});
var EnWeapon = cc.Enum({
  None: 0,
  Sword: 1,
  Archer: 2
});
var EnStickMode = cc.Enum({
  Normal: 0,
  Sword: 1,
  Archer: 2
});
var EnStickState = cc.Enum({
  None: 100,
  Idle: 0,
  Run: 1,
  JumpStart: 2,
  JumpUp: 3,
  JumpDown: 4,
  JumpLanded: 5,
  DashA: 6,
  DashB: 7,
  Attack1: 8,
  Attack2: 9,
  Attack3: 10,
  Attack4: 11,
  Win: 12
});
var EnEnemyState = cc.Enum({
  Idle: 0,
  Walk: 1,
  Attack: 2
});
module.exports.EnEnemies = EnEnemies;
module.exports.EnFacing = EnFacing;
module.exports.EnGameState = EnGameState;
module.exports.EnWeapon = EnWeapon;
module.exports.EnStickState = EnStickState;
module.exports.EnStickMode = EnStickMode;
module.exports.EnEnemyState = EnEnemyState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXEdhbWVFbnVtLmpzIl0sIm5hbWVzIjpbIkVuRW5lbWllcyIsImNjIiwiRW51bSIsIk5vbmUiLCJab21iaWUiLCJQb2lzb25WaW5lIiwiRW5GYWNpbmciLCJMZWZ0IiwiUmlnaHQiLCJFbkdhbWVTdGF0ZSIsIkVuV2VhcG9uIiwiU3dvcmQiLCJBcmNoZXIiLCJFblN0aWNrTW9kZSIsIk5vcm1hbCIsIkVuU3RpY2tTdGF0ZSIsIklkbGUiLCJSdW4iLCJKdW1wU3RhcnQiLCJKdW1wVXAiLCJKdW1wRG93biIsIkp1bXBMYW5kZWQiLCJEYXNoQSIsIkRhc2hCIiwiQXR0YWNrMSIsIkF0dGFjazIiLCJBdHRhY2szIiwiQXR0YWNrNCIsIldpbiIsIkVuRW5lbXlTdGF0ZSIsIldhbGsiLCJBdHRhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDcEJDLEVBQUFBLElBQUksRUFBRSxDQURjO0FBRXBCQyxFQUFBQSxNQUFNLEVBQUUsQ0FGWTtBQUdwQkMsRUFBQUEsVUFBVSxFQUFFO0FBSFEsQ0FBUixDQUFoQjtBQU1BLElBQUlDLFFBQVEsR0FBR0wsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDckJLLEVBQUFBLElBQUksRUFBRSxDQURlO0FBRXJCQyxFQUFBQSxLQUFLLEVBQUU7QUFGYyxDQUFSLENBQWY7QUFLQSxJQUFJQyxXQUFXLEdBQUdSLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRLEVBQVIsQ0FBbEI7QUFJQSxJQUFJUSxRQUFRLEdBQUdULEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ25CQyxFQUFBQSxJQUFJLEVBQUUsQ0FEYTtBQUVuQlEsRUFBQUEsS0FBSyxFQUFFLENBRlk7QUFHbkJDLEVBQUFBLE1BQU0sRUFBRTtBQUhXLENBQVIsQ0FBZjtBQU1BLElBQUlDLFdBQVcsR0FBR1osRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDdEJZLEVBQUFBLE1BQU0sRUFBRSxDQURjO0FBRXRCSCxFQUFBQSxLQUFLLEVBQUUsQ0FGZTtBQUd0QkMsRUFBQUEsTUFBTSxFQUFFO0FBSGMsQ0FBUixDQUFsQjtBQU1BLElBQUlHLFlBQVksR0FBR2QsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDdkJDLEVBQUFBLElBQUksRUFBRSxHQURpQjtBQUV2QmEsRUFBQUEsSUFBSSxFQUFFLENBRmlCO0FBR3ZCQyxFQUFBQSxHQUFHLEVBQUUsQ0FIa0I7QUFLdkJDLEVBQUFBLFNBQVMsRUFBRSxDQUxZO0FBTXZCQyxFQUFBQSxNQUFNLEVBQUUsQ0FOZTtBQU92QkMsRUFBQUEsUUFBUSxFQUFFLENBUGE7QUFRdkJDLEVBQUFBLFVBQVUsRUFBRSxDQVJXO0FBVXZCQyxFQUFBQSxLQUFLLEVBQUUsQ0FWZ0I7QUFXdkJDLEVBQUFBLEtBQUssRUFBRSxDQVhnQjtBQWF2QkMsRUFBQUEsT0FBTyxFQUFFLENBYmM7QUFjdkJDLEVBQUFBLE9BQU8sRUFBRSxDQWRjO0FBZXZCQyxFQUFBQSxPQUFPLEVBQUUsRUFmYztBQWdCdkJDLEVBQUFBLE9BQU8sRUFBRSxFQWhCYztBQWtCdkJDLEVBQUFBLEdBQUcsRUFBRTtBQWxCa0IsQ0FBUixDQUFuQjtBQXFCQSxJQUFJQyxZQUFZLEdBQUc1QixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN2QmMsRUFBQUEsSUFBSSxFQUFFLENBRGlCO0FBRXZCYyxFQUFBQSxJQUFJLEVBQUUsQ0FGaUI7QUFHdkJDLEVBQUFBLE1BQU0sRUFBRTtBQUhlLENBQVIsQ0FBbkI7QUFNQUMsTUFBTSxDQUFDQyxPQUFQLENBQWVqQyxTQUFmLEdBQTJCQSxTQUEzQjtBQUNBZ0MsTUFBTSxDQUFDQyxPQUFQLENBQWUzQixRQUFmLEdBQTBCQSxRQUExQjtBQUNBMEIsTUFBTSxDQUFDQyxPQUFQLENBQWV4QixXQUFmLEdBQTZCQSxXQUE3QjtBQUNBdUIsTUFBTSxDQUFDQyxPQUFQLENBQWV2QixRQUFmLEdBQTBCQSxRQUExQjtBQUNBc0IsTUFBTSxDQUFDQyxPQUFQLENBQWVsQixZQUFmLEdBQThCQSxZQUE5QjtBQUNBaUIsTUFBTSxDQUFDQyxPQUFQLENBQWVwQixXQUFmLEdBQTZCQSxXQUE3QjtBQUNBbUIsTUFBTSxDQUFDQyxPQUFQLENBQWVKLFlBQWYsR0FBOEJBLFlBQTlCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRW5FbmVtaWVzID0gY2MuRW51bSh7XHJcbiAgICBOb25lOiAwLFxyXG4gICAgWm9tYmllOiAxLFxyXG4gICAgUG9pc29uVmluZTogMlxyXG59KTtcclxuXHJcbnZhciBFbkZhY2luZyA9IGNjLkVudW0oe1xyXG4gIExlZnQ6IDAsXHJcbiAgUmlnaHQ6IDEsXHJcbn0pO1xyXG5cclxudmFyIEVuR2FtZVN0YXRlID0gY2MuRW51bSh7XHJcbiAgICBcclxufSk7XHJcblxyXG52YXIgRW5XZWFwb24gPSBjYy5FbnVtKHtcclxuICAgIE5vbmU6IDAsXHJcbiAgICBTd29yZDogMSxcclxuICAgIEFyY2hlcjogMlxyXG59KTtcclxuXHJcbnZhciBFblN0aWNrTW9kZSA9IGNjLkVudW0oe1xyXG4gICAgTm9ybWFsOiAwLFxyXG4gICAgU3dvcmQ6IDEsXHJcbiAgICBBcmNoZXI6IDJcclxufSk7XHJcblxyXG52YXIgRW5TdGlja1N0YXRlID0gY2MuRW51bSh7XHJcbiAgICBOb25lOiAxMDAsXHJcbiAgICBJZGxlOiAwLFxyXG4gICAgUnVuOiAxLFxyXG5cclxuICAgIEp1bXBTdGFydDogMixcclxuICAgIEp1bXBVcDogMyxcclxuICAgIEp1bXBEb3duOiA0LFxyXG4gICAgSnVtcExhbmRlZDogNSxcclxuXHJcbiAgICBEYXNoQTogNixcclxuICAgIERhc2hCOiA3LFxyXG5cclxuICAgIEF0dGFjazE6IDgsXHJcbiAgICBBdHRhY2syOiA5LFxyXG4gICAgQXR0YWNrMzogMTAsXHJcbiAgICBBdHRhY2s0OiAxMSxcclxuXHJcbiAgICBXaW46IDEyLFxyXG59KTtcclxuXHJcbnZhciBFbkVuZW15U3RhdGUgPSBjYy5FbnVtKHtcclxuICAgIElkbGU6IDAsXHJcbiAgICBXYWxrOiAxLFxyXG4gICAgQXR0YWNrOiAyXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuRW5FbmVtaWVzID0gRW5FbmVtaWVzO1xyXG5tb2R1bGUuZXhwb3J0cy5FbkZhY2luZyA9IEVuRmFjaW5nO1xyXG5tb2R1bGUuZXhwb3J0cy5FbkdhbWVTdGF0ZSA9IEVuR2FtZVN0YXRlO1xyXG5tb2R1bGUuZXhwb3J0cy5FbldlYXBvbiA9IEVuV2VhcG9uO1xyXG5tb2R1bGUuZXhwb3J0cy5FblN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGU7XHJcbm1vZHVsZS5leHBvcnRzLkVuU3RpY2tNb2RlID0gRW5TdGlja01vZGU7XHJcbm1vZHVsZS5leHBvcnRzLkVuRW5lbXlTdGF0ZSA9IEVuRW5lbXlTdGF0ZTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/ButtonInstall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d8c3IIqOtKo5jLX4Dr7AFZ', 'ButtonInstall');
// Script/Others/ButtonInstall.js

"use strict";

var AudioManager = require("AudioManager");

var GameInfo = require("../Const/GameInfo");

cc.Class({
  "extends": cc.Component,
  properties: {
    // DhHiep
    hideMask: cc.Node,
    AudioManager: AudioManager,
    CTA_win: cc.Node,
    CTA_lose: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    // mtg && applovin
    this.hideMask.on(cc.Node.EventType.TOUCH_START, this.installHandle, this);
    if (GameInfo.isLose) this.CTA_win.active = false;
    if (GameInfo.isWin) this.CTA_lose.active = false;
    cc.tween(this.node).repeatForever(cc.tween(this.node).to(0.5, {
      scale: 0.9
    }).to(0.5, {
      scale: 1
    }, {
      easing: 'elasticOut'
    })).start();
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      cc.tween(this.node).to(0.2, {
        scale: 0.9
      }, this).start();
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
      cc.tween(this.node).to(0.2, {
        scale: 1
      }, this).start();
    }, this);
  },
  // update (dt) {},
  installHandle: function installHandle() {
    // Handle for google playable ads
    cc.log("Click Install Handle");
    this.AudioManager.stopAllSound(); //If ad network is tiktok

    if (typeof playableSDK != "undefined") {
      window.playableSDK.openAppStore();
      return;
    } // If ad network is google ads


    if (typeof ExitApi != "undefined") {
      ExitApi.exit();
      return;
    } // If ad netwrok is ironsources


    if (typeof dapi != "undefined") {
      dapi.openStoreUrl();
      return;
    } // If ad network support MRAID 2.0


    if (typeof mraid != "undefined") {
      if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
        mraid.open("https://play.google.com/store/apps/details?id=com.stickman.craftman");
        return;
      }

      if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
        mraid.open("https://itunes.apple.com/us/app/id1629824246?mt=8");
        return;
      }

      mraid.open("https://play.google.com/store/apps/details?id=com.stickman.craftman");
      return;
    } // If ad network is mindwork. window alway avaiable so skip undefined check


    window.install && window.install();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXEJ1dHRvbkluc3RhbGwuanMiXSwibmFtZXMiOlsiQXVkaW9NYW5hZ2VyIiwicmVxdWlyZSIsIkdhbWVJbmZvIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoaWRlTWFzayIsIk5vZGUiLCJDVEFfd2luIiwiQ1RBX2xvc2UiLCJzdGFydCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJpbnN0YWxsSGFuZGxlIiwiaXNMb3NlIiwiYWN0aXZlIiwiaXNXaW4iLCJ0d2VlbiIsIm5vZGUiLCJyZXBlYXRGb3JldmVyIiwidG8iLCJzY2FsZSIsImVhc2luZyIsIk1PVVNFX0RPV04iLCJldmVudCIsIk1PVVNFX1VQIiwibG9nIiwic3RvcEFsbFNvdW5kIiwicGxheWFibGVTREsiLCJ3aW5kb3ciLCJvcGVuQXBwU3RvcmUiLCJFeGl0QXBpIiwiZXhpdCIsImRhcGkiLCJvcGVuU3RvcmVVcmwiLCJtcmFpZCIsInN5cyIsIm9zIiwiT1NfQU5EUk9JRCIsIkFORFJPSUQiLCJvcGVuIiwiT1NfSU9TIiwiSVBIT05FIiwiSVBBRCIsImluc3RhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFDQSxJQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxtQkFBRCxDQUF4Qjs7QUFDQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLLElBRkw7QUFHUlIsSUFBQUEsWUFBWSxFQUFFQSxZQUhOO0FBS1JTLElBQUFBLE9BQU8sRUFBRU4sRUFBRSxDQUFDSyxJQUxKO0FBTVJFLElBQUFBLFFBQVEsRUFBRVAsRUFBRSxDQUFDSztBQU5MLEdBSFA7QUFZTDtBQUVBO0FB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SCxDQUFPQyxFQUFQLElBQWFwQyxFQUFFLENBQUNtQyxHQUFILENBQU9NLE1BQWxELElBQTREekMsRUFBRSxDQUFDbUMsR0FBSCxDQUFPQyxFQUFQLElBQWFwQyxFQUFFLENBQUNtQyxHQUFILENBQU9PLElBQXBGLEVBQTBGO0FBQ3RGUixRQUFBQSxLQUFLLENBQUNLLElBQU4sQ0FBVyxtREFBWDtBQUNBO0FBQ0g7O0FBRURMLE1BQUFBLEtBQUssQ0FBQ0ssSUFBTixDQUFXLHFFQUFYO0FBQ0E7QUFDSCxLQXZDVyxDQXdDWjs7O0FBQ0FYLElBQUFBLE1BQU0sQ0FBQ2UsT0FBUCxJQUFrQmYsTUFBTSxDQUFDZSxPQUFQLEVBQWxCO0FBQ0g7QUFsRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCJBdWRpb01hbmFnZXJcIik7XHJcbmNvbnN0IEdhbWVJbmZvID0gcmVxdWlyZShcIi4uL0NvbnN0L0dhbWVJbmZvXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIERoSGllcFxyXG4gICAgICAgIGhpZGVNYXNrOiBjYy5Ob2RlLFxyXG4gICAgICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyLFxyXG5cclxuICAgICAgICBDVEFfd2luOiBjYy5Ob2RlLFxyXG4gICAgICAgIENUQV9sb3NlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gbXRnICYmIGFwcGxvdmluXHJcbiAgICAgICAgdGhpcy5oaWRlTWFzay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5pbnN0YWxsSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICBpZihHYW1lSW5mby5pc0xvc2UpIHRoaXMuQ1RBX3dpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZihHYW1lSW5mby5pc1dpbikgdGhpcy5DVEFfbG9zZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwLjkgfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCcgfSlcclxuICAgICAgICAgICAgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yLCB7IHNjYWxlOiAwLjkgfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIsIHsgc2NhbGU6IDEgfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgaW5zdGFsbEhhbmRsZSgpIHtcclxuICAgICAgICAvLyBIYW5kbGUgZm9yIGdvb2dsZSBwbGF5YWJsZSBhZHNcclxuICAgICAgICBjYy5sb2coXCJDbGljayBJbnN0YWxsIEhhbmRsZVwiKTtcclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5zdG9wQWxsU291bmQoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvL0lmIGFkIG5ldHdvcmsgaXMgdGlrdG9rXHJcbiAgICAgICAgaWYgKHR5cGVvZiAocGxheWFibGVTREspICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgd2luZG93LnBsYXlhYmxlU0RLLm9wZW5BcHBTdG9yZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIGlzIGdvb2dsZSBhZHNcclxuICAgICAgICBpZiAodHlwZW9mIChFeGl0QXBpKSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIEV4aXRBcGkuZXhpdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3cm9rIGlzIGlyb25zb3VyY2VzXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGFwaSkgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBkYXBpLm9wZW5TdG9yZVVybCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhZCBuZXR3b3JrIHN1cHBvcnQgTVJBSUQgMi4wXHJcbiAgICAgICAgaWYgKHR5cGVvZiAobXJhaWQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCB8fCBjYy5zeXMub3MgPT0gY2Muc3lzLkFORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgIG1yYWlkLm9wZW4oXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnN0aWNrbWFuLmNyYWZ0bWFuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEhPTkUgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5JUEFEKSB7XHJcbiAgICAgICAgICAgICAgICBtcmFpZC5vcGVuKFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9pZDE2Mjk4MjQyNDY/bXQ9OFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbXJhaWQub3BlbihcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uc3RpY2ttYW4uY3JhZnRtYW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYWQgbmV0d29yayBpcyBtaW5kd29yay4gd2luZG93IGFsd2F5IGF2YWlhYmxlIHNvIHNraXAgdW5kZWZpbmVkIGNoZWNrXHJcbiAgICAgICAgd2luZG93Lmluc3RhbGwgJiYgd2luZG93Lmluc3RhbGwoKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/AnimNameStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfa3aZszu9AEpvBXHeNICFo', 'AnimNameStick');
// Script/Character/AnimNameStick.js

"use strict";

var AnimNameStick = {
  // Normal Move
  NormalIdle: "1_/idle active",
  NormalRun: "1_/run",
  NormalWalk: "1_/walk normal",
  NormalJumpA: "1_/jump A",
  NormalJumpB: "1_/jump B",
  NormalJumpC: "1_/jump C",
  NormalJumpD: "1_/jump D",
  NormalDashA: "1_/dash A",
  // Normal Attack
  NormalJab1: "1_/jab single",
  // NormalKick1: "1_/reverse kick",
  // NormalKick2: "1_/salto kick",
  NormalKick1: "1_/kick low",
  NormalKick2: "1_/reverse kick",
  NormalDie: "1_/die A",
  NormalWin: "1_/Happy",
  // Sword Move
  SwordIdle: "2_Sword/idle fight pose",
  SwordRun: "2_Sword/run",
  SwordWalk: "2_Sword/walk normal",
  SwordJumpA: "2_Sword/jump A",
  SwordJumpB: "2_Sword/jump B",
  SwordJumpC: "2_Sword/jump C",
  SwordJumpD: "2_Sword/jump D",
  SwordDashA: "2_Sword/dash A2",
  // Sword Attack
  SwordAtk1: "2_Sword/slash",
  SwordAtk2: "2_Sword/slash2",
  SwordAtk3: "2_Sword/slash3",
  SwordDie: "2_Sword/die A",
  // Archer Move
  ArcherIdle: "Bow/idle active bow",
  ArcherRun: "Bow/Run Bow",
  ArcherWalk: "Bow/walk Archer",
  ArcherJumpA: "Bow/Jump Bow A",
  ArcherJumpB: "Bow/Jump Bow B",
  ArcherJumpC: "Bow/Jump Bow C",
  ArcherJumpD: "Bow/Jump Bow D",
  ArcherDashA: "Bow/Dash Bow A",
  // Archer Attack
  ArcherAngleStraight: "1_/arrow straight",
  ArcherAngleUp: "1_/arrow up",
  ArcherDie: "1_/die A"
};
module.exports = AnimNameStick;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEFuaW1OYW1lU3RpY2suanMiXSwibmFtZXMiOlsiQW5pbU5hbWVTdGljayIsIk5vcm1hbElkbGUiLCJOb3JtYWxSdW4iLCJOb3JtYWxXYWxrIiwiTm9ybWFsSnVtcEEiLCJOb3JtYWxKdW1wQiIsIk5vcm1hbEp1bXBDIiwiTm9ybWFsSnVtcEQiLCJOb3JtYWxEYXNoQSIsIk5vcm1hbEphYjEiLCJOb3JtYWxLaWNrMSIsIk5vcm1hbEtpY2syIiwiTm9ybWFsRGllIiwiTm9ybWFsV2luIiwiU3dvcmRJZGxlIiwiU3dvcmRSdW4iLCJTd29yZFdhbGsiLCJTd29yZEp1bXBBIiwiU3dvcmRKdW1wQiIsIlN3b3JkSnVtcEMiLCJTd29yZEp1bXBEIiwiU3dvcmREYXNoQSIsIlN3b3JkQXRrMSIsIlN3b3JkQXRrMiIsIlN3b3JkQXRrMyIsIlN3b3JkRGllIiwiQXJjaGVySWRsZSIsIkFyY2hlclJ1biIsIkFyY2hlcldhbGsiLCJBcmNoZXJKdW1wQSIsIkFyY2hlckp1bXBCIiwiQXJjaGVySnVtcEMiLCJBcmNoZXJKdW1wRCIsIkFyY2hlckRhc2hBIiwiQXJjaGVyQW5nbGVTdHJhaWdodCIsIkFyY2hlckFuZ2xlVXAiLCJBcmNoZXJEaWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBRztBQUNoQjtBQUNBQyxFQUFBQSxVQUFVLEVBQUUsZ0JBRkk7QUFHaEJDLEVBQUFBLFNBQVMsRUFBRSxRQUhLO0FBSWhCQyxFQUFBQSxVQUFVLEVBQUUsZ0JBSkk7QUFLaEJDLEVBQUFBLFdBQVcsRUFBRSxXQUxHO0FBTWhCQyxFQUFBQSxXQUFXLEVBQUUsV0FORztBQU9oQkMsRUFBQUEsV0FBVyxFQUFFLFdBUEc7QUFRaEJDLEVBQUFBLFdBQVcsRUFBRSxXQVJHO0FBU2hCQyxFQUFBQSxXQUFXLEVBQUUsV0FURztBQVVoQjtBQUNBQyxFQUFBQSxVQUFVLEVBQUUsZUFYSTtBQVloQjtBQUNBO0FBQ0FDLEVBQUFBLFdBQVcsRUFBRSxhQWRHO0FBZWhCQyxFQUFBQSxXQUFXLEVBQUUsaUJBZkc7QUFnQmhCQyxFQUFBQSxTQUFTLEVBQUUsVUFoQks7QUFrQmhCQyxFQUFBQSxTQUFTLEVBQUUsVUFsQks7QUFvQmhCO0FBQ0FDLEVBQUFBLFNBQVMsRUFBRSx5QkFyQks7QUFzQmhCQyxFQUFBQSxRQUFRLEVBQUUsYUF0Qk07QUF1QmhCQyxFQUFBQSxTQUFTLEVBQUUscUJBdkJLO0FBd0JoQkMsRUFBQUEsVUFBVSxFQUFFLGdCQXhCSTtBQXlCaEJDLEVBQUFBLFVBQVUsRUFBRSxnQkF6Qkk7QUEwQmhCQyxFQUFBQSxVQUFVLEVBQUUsZ0JBMUJJO0FBMkJoQkMsRUFBQUEsVUFBVSxFQUFFLGdCQTNCSTtBQTRCaEJDLEVBQUFBLFVBQVUsRUFBRSxpQkE1Qkk7QUE2QmhCO0FBQ0FDLEVBQUFBLFNBQVMsRUFBRSxlQTlCSztBQStCaEJDLEVBQUFBLFNBQVMsRUFBRSxnQkEvQks7QUFnQ2hCQyxFQUFBQSxTQUFTLEVBQUUsZ0JBaENLO0FBaUNoQkMsRUFBQUEsUUFBUSxFQUFFLGVBakNNO0FBbUNoQjtBQUNBQyxFQUFBQSxVQUFVLEVBQUUscUJBcENJO0FBcUNoQkMsRUFBQUEsU0FBUyxFQUFFLGFBckNLO0FBc0NoQkMsRUFBQUEsVUFBVSxFQUFFLGlCQXRDSTtBQXVDaEJDLEVBQUFBLFdBQVcsRUFBRSxnQkF2Q0c7QUF3Q2hCQyxFQUFBQSxXQUFXLEVBQUUsZ0JBeENHO0FBeUNoQkMsRUFBQUEsV0FBVyxFQUFFLGdCQXpDRztBQTBDaEJDLEVBQUFBLFdBQVcsRUFBRSxnQkExQ0c7QUEyQ2hCQyxFQUFBQSxXQUFXLEVBQUUsZ0JBM0NHO0FBNENoQjtBQUNBQyxFQUFBQSxtQkFBbUIsRUFBRSxtQkE3Q0w7QUE4Q2hCQyxFQUFBQSxhQUFhLEVBQUUsYUE5Q0M7QUErQ2hCQyxFQUFBQSxTQUFTLEVBQUU7QUEvQ0ssQ0FBcEI7QUFrREFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRDLGFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQW5pbU5hbWVTdGljayA9IHtcclxuICAgIC8vIE5vcm1hbCBNb3ZlXHJcbiAgICBOb3JtYWxJZGxlOiBcIjFfL2lkbGUgYWN0aXZlXCIsXHJcbiAgICBOb3JtYWxSdW46IFwiMV8vcnVuXCIsXHJcbiAgICBOb3JtYWxXYWxrOiBcIjFfL3dhbGsgbm9ybWFsXCIsXHJcbiAgICBOb3JtYWxKdW1wQTogXCIxXy9qdW1wIEFcIixcclxuICAgIE5vcm1hbEp1bXBCOiBcIjFfL2p1bXAgQlwiLFxyXG4gICAgTm9ybWFsSnVtcEM6IFwiMV8vanVtcCBDXCIsXHJcbiAgICBOb3JtYWxKdW1wRDogXCIxXy9qdW1wIERcIixcclxuICAgIE5vcm1hbERhc2hBOiBcIjFfL2Rhc2ggQVwiLFxyXG4gICAgLy8gTm9ybWFsIEF0dGFja1xyXG4gICAgTm9ybWFsSmFiMTogXCIxXy9qYWIgc2luZ2xlXCIsXHJcbiAgICAvLyBOb3JtYWxLaWNrMTogXCIxXy9yZXZlcnNlIGtpY2tcIixcclxuICAgIC8vIE5vcm1hbEtpY2syOiBcIjFfL3NhbHRvIGtpY2tcIixcclxuICAgIE5vcm1hbEtpY2sxOiBcIjFfL2tpY2sgbG93XCIsXHJcbiAgICBOb3JtYWxLaWNrMjogXCIxXy9yZXZlcnNlIGtpY2tcIixcclxuICAgIE5vcm1hbERpZTogXCIxXy9kaWUgQVwiLFxyXG5cclxuICAgIE5vcm1hbFdpbjogXCIxXy9IYXBweVwiLFxyXG5cclxuICAgIC8vIFN3b3JkIE1vdmVcclxuICAgIFN3b3JkSWRsZTogXCIyX1N3b3JkL2lkbGUgZmlnaHQgcG9zZVwiLFxyXG4gICAgU3dvcmRSdW46IFwiMl9Td29yZC9ydW5cIixcclxuICAgIFN3b3JkV2FsazogXCIyX1N3b3JkL3dhbGsgbm9ybWFsXCIsXHJcbiAgICBTd29yZEp1bXBBOiBcIjJfU3dvcmQvanVtcCBBXCIsXHJcbiAgICBTd29yZEp1bXBCOiBcIjJfU3dvcmQvanVtcCBCXCIsXHJcbiAgICBTd29yZEp1bXBDOiBcIjJfU3dvcmQvanVtcCBDXCIsXHJcbiAgICBTd29yZEp1bXBEOiBcIjJfU3dvcmQvanVtcCBEXCIsXHJcbiAgICBTd29yZERhc2hBOiBcIjJfU3dvcmQvZGFzaCBBMlwiLFxyXG4gICAgLy8gU3dvcmQgQXR0YWNrXHJcbiAgICBTd29yZEF0azE6IFwiMl9Td29yZC9zbGFzaFwiLFxyXG4gICAgU3dvcmRBdGsyOiBcIjJfU3dvcmQvc2xhc2gyXCIsXHJcbiAgICBTd29yZEF0azM6IFwiMl9Td29yZC9zbGFzaDNcIixcclxuICAgIFN3b3JkRGllOiBcIjJfU3dvcmQvZGllIEFcIixcclxuICAgIFxyXG4gICAgLy8gQXJjaGVyIE1vdmVcclxuICAgIEFyY2hlcklkbGU6IFwiQm93L2lkbGUgYWN0aXZlIGJvd1wiLFxyXG4gICAgQXJjaGVyUnVuOiBcIkJvdy9SdW4gQm93XCIsXHJcbiAgICBBcmNoZXJXYWxrOiBcIkJvdy93YWxrIEFyY2hlclwiLFxyXG4gICAgQXJjaGVySnVtcEE6IFwiQm93L0p1bXAgQm93IEFcIixcclxuICAgIEFyY2hlckp1bXBCOiBcIkJvdy9KdW1wIEJvdyBCXCIsXHJcbiAgICBBcmNoZXJKdW1wQzogXCJCb3cvSnVtcCBCb3cgQ1wiLFxyXG4gICAgQXJjaGVySnVtcEQ6IFwiQm93L0p1bXAgQm93IERcIixcclxuICAgIEFyY2hlckRhc2hBOiBcIkJvdy9EYXNoIEJvdyBBXCIsXHJcbiAgICAvLyBBcmNoZXIgQXR0YWNrXHJcbiAgICBBcmNoZXJBbmdsZVN0cmFpZ2h0OiBcIjFfL2Fycm93IHN0cmFpZ2h0XCIsXHJcbiAgICBBcmNoZXJBbmdsZVVwOiBcIjFfL2Fycm93IHVwXCIsXHJcbiAgICBBcmNoZXJEaWU6IFwiMV8vZGllIEFcIixcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBbmltTmFtZVN0aWNrO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/HealthBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fb2cKNQxpGIL4KnJRuJdAo', 'HealthBar');
// Script/Character/HealthBar.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    FillSprite: cc.Sprite,
    HealthText: {
      "default": null,
      type: cc.Label,
      serializable: true
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// this._maxHP = 0;
    // this._currentHP = 0;
  },
  start: function start() {},
  update: function update(dt) {// this.updateHealthText();
  },
  init: function init(hp) {
    this._maxHP = hp;
    this._currentHP = hp;
    this.FillSprite.fillStart = 1;
    this.FillSprite.fillRange = -1;
    this.updateHealthText();
  },
  setHP: function setHP(hp) {
    this._currentHP = hp; // this.FillSprite.fillStart = this._currentHP / this._maxHP;

    cc.tween(this.FillSprite).to(0.25, {
      fillStart: this._currentHP / this._maxHP
    }).start();
    this.updateHealthText();
  },
  decrement: function decrement(damp) {
    var currentHp = this._currentHP - damp;
    if (currentHp < 0) currentHp = 0;
    this.setHP(currentHp);
  },
  updateHealthText: function updateHealthText() {
    if (this.HealthText == null) return;
    this.HealthText.string = this._currentHP + "/" + this._maxHP;
  },
  isAlive: function isAlive() {
    return this._currentHP > 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEhlYWx0aEJhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkZpbGxTcHJpdGUiLCJTcHJpdGUiLCJIZWFsdGhUZXh0IiwidHlwZSIsIkxhYmVsIiwic2VyaWFsaXphYmxlIiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImluaXQiLCJocCIsIl9tYXhIUCIsIl9jdXJyZW50SFAiLCJmaWxsU3RhcnQiLCJmaWxsUmFuZ2UiLCJ1cGRhdGVIZWFsdGhUZXh0Iiwic2V0SFAiLCJ0d2VlbiIsInRvIiwiZGVjcmVtZW50IiwiZGFtcCIsImN1cnJlbnRIcCIsInN0cmluZyIsImlzQWxpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssTUFEUDtBQUVSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUSxLQUZEO0FBR1JDLE1BQUFBLFlBQVksRUFBRTtBQUhOO0FBRkosR0FIUDtBQVlMO0FBRUFDLEVBQUFBLE1BZEssb0JBY0ssQ0FDTjtBQUNBO0FBQ0gsR0FqQkk7QUFtQkxDLEVBQUFBLEtBbkJLLG1CQW1CSSxDQUVSLENBckJJO0FBdUJMQyxFQUFBQSxNQXZCSyxrQkF1QkdDLEVBdkJILEVBdUJPLENBQ1I7QUFDSCxHQXpCSTtBQTJCTEMsRUFBQUEsSUEzQkssZ0JBMkJBQyxFQTNCQSxFQTJCRztBQUNKLFNBQUtDLE1BQUwsR0FBY0QsRUFBZDtBQUNBLFNBQUtFLFVBQUwsR0FBa0JGLEVBQWxCO0FBRUEsU0FBS1gsVUFBTCxDQUFnQmMsU0FBaEIsR0FBNEIsQ0FBNUI7QUFDQSxTQUFLZCxVQUFMLENBQWdCZSxTQUFoQixHQUE0QixDQUFDLENBQTdCO0FBRUEsU0FBS0MsZ0JBQUw7QUFDSCxHQW5DSTtBQXFDTEMsRUFBQUEsS0FyQ0ssaUJBcUNDTixFQXJDRCxFQXFDSTtBQUNMLFNBQUtFLFVBQUwsR0FBa0JGLEVBQWxCLENBREssQ0FHTDs7QUFDQWYsSUFBQUEsRUFBRSxDQUFDc0IsS0FBSCxDQUFTLEtBQUtsQixVQUFkLEVBQ0NtQixFQURELENBQ0ssSUFETCxFQUNXO0FBQUNMLE1BQUFBLFNBQVMsRUFBRSxLQUFLRCxVQUFMLEdBQWtCLEtBQUtEO0FBQW5DLEtBRFgsRUFFQ0wsS0FGRDtBQUlBLFNBQUtTLGdCQUFMO0FBQ0gsR0E5Q0k7QUFnRExJLEVBQUFBLFNBaERLLHFCQWdES0MsSUFoREwsRUFnRFU7QUFDWCxRQUFJQyxTQUFTLEdBQUcsS0FBS1QsVUFBTCxHQUFrQlEsSUFBbEM7QUFDQSxRQUFHQyxTQUFTLEdBQUcsQ0FBZixFQUFrQkEsU0FBUyxHQUFHLENBQVo7QUFDbEIsU0FBS0wsS0FBTCxDQUFXSyxTQUFYO0FBQ0gsR0FwREk7QUFzRExOLEVBQUFBLGdCQXRESyw4QkFzRGE7QUFDZCxRQUFHLEtBQUtkLFVBQUwsSUFBbUIsSUFBdEIsRUFBNEI7QUFDNUIsU0FBS0EsVUFBTCxDQUFnQnFCLE1BQWhCLEdBQTBCLEtBQUtWLFVBQU4sR0FBb0IsR0FBcEIsR0FBMkIsS0FBS0QsTUFBekQ7QUFDSCxHQXpESTtBQTJETFksRUFBQUEsT0EzREsscUJBMkRJO0FBQ0wsV0FBTyxLQUFLWCxVQUFMLEdBQWtCLENBQXpCO0FBQ0g7QUE3REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBGaWxsU3ByaXRlOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgSGVhbHRoVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLl9tYXhIUCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5fY3VycmVudEhQID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVIZWFsdGhUZXh0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQoaHApe1xyXG4gICAgICAgIHRoaXMuX21heEhQID0gaHA7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEhQID0gaHA7XHJcblxyXG4gICAgICAgIHRoaXMuRmlsbFNwcml0ZS5maWxsU3RhcnQgPSAxO1xyXG4gICAgICAgIHRoaXMuRmlsbFNwcml0ZS5maWxsUmFuZ2UgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGhUZXh0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEhQKGhwKXtcclxuICAgICAgICB0aGlzLl9jdXJyZW50SFAgPSBocDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5GaWxsU3ByaXRlLmZpbGxTdGFydCA9IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuRmlsbFNwcml0ZSlcclxuICAgICAgICAudG8gKDAuMjUsIHtmaWxsU3RhcnQ6IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGhUZXh0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlY3JlbWVudChkYW1wKXtcclxuICAgICAgICBsZXQgY3VycmVudEhwID0gdGhpcy5fY3VycmVudEhQIC0gZGFtcDtcclxuICAgICAgICBpZihjdXJyZW50SHAgPCAwKSBjdXJyZW50SHAgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0SFAoY3VycmVudEhwKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlSGVhbHRoVGV4dCgpe1xyXG4gICAgICAgIGlmKHRoaXMuSGVhbHRoVGV4dCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5IZWFsdGhUZXh0LnN0cmluZyA9ICh0aGlzLl9jdXJyZW50SFApICsgXCIvXCIgKyAodGhpcy5fbWF4SFApO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0FsaXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRIUCA+IDA7XHJcbiAgICB9XHJcbiAgICBcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXFBsYXllcjNELmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbkZhY2luZyIsIkVuV2VhcG9uIiwiRW5TdGlja01vZGUiLCJFblN0aWNrU3RhdGUiLCJDT05TVCIsIkdhbWVJbmZvIiwiQW5pbU5hbWVTdGljayIsIkhpdENvbWJvcyIsIkFyY2hlckNvbWJvcyIsIkhlYWx0aEJhciIsIkJ1dHRvbkF0dGFjayIsIkF1ZGlvTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiU3BlZWQiLCJEdXN0UGFydGljbGUiLCJQYXJ0aWNsZVN5c3RlbTNEIiwiRGFzaFBhcnRpY2xlIiwiQmxvb2RQYXJ0aWNsZSIsIkN1c3RvbWVNb3ZlQkciLCJOb2RlIiwiQnV0dG9uTGVmdCIsIkJ1dHRvblJpZ2h0IiwiQnV0dG9uSnVtcCIsIkJ1dHRvbkRhc2giLCJmYWtlU3dvcmQiLCJnYW1lQ29udHJvbGxlciIsIm9uTG9hZCIsIndpbmRvdyIsImlzVXNpbmdGaXN0IiwiX29yaWdpblNjYWxlWCIsIklucHV0TW92ZUhvcml6b250YWwiLCJfb25UaGVHcm91bmQiLCJfanVtcENvdW50IiwiX2lzRGFzaGluZyIsIl92ZWxvY2l0eU1heFgiLCJfdmVsb2NpdHlNYXhZIiwiX3J1bkZvcmNlIiwiX2p1bXBGb3JjZSIsIl9qdW1wRm9yY2UyIiwiX2Rhc2hGb3JjZSIsIl9ydW5Gb3JjZU9uQXR0YWNrIiwiX3ZlbG9jaXR5TWF4WE9uQXR0YWNrIiwiX2NoZWNrUG9pbnQiLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJfaXNEZWF0aCIsIl9pc0hhc1N3b3JkIiwiX2lzSGFzQXJjaGVyIiwiX251bURlYXRoIiwiX2xhc3RJbnB1dE1vdmVIb3Jpem9udGFsIiwiX2lzV2luIiwiaW5pdEV2ZW50QWN0aW9uIiwic2NhbGVYIiwiX3NrZWxldG9uIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsInNwIiwiU2tlbGV0b24iLCJfcmlnaWRCb2R5IiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiX2hpdENvbWJvcyIsIl9hcmNoZXJDb21ib3MiLCJzZXRTdGFydExpc3RlbmVyIiwidHJhY2tFbnRyeSIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb24iLCJuYW1lIiwiU3RpY2tNb2RlIiwiQXJjaGVyIiwib25TdGFydEFuaW1hdGlvbiIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJvbkNvbXBsZXRlQW5pbWF0aW9uIiwic2V0TWl4QW5pbWF0aW9uIiwiY2hhbmdlV2VhcG9uIiwiTm9uZSIsImluaXQiLCJTdGlja01heEhQIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleVByZXNzZWQiLCJLRVlfVVAiLCJvbktleVJlbGVhc2VkIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsImZsaXAiLCJfdGlja0hhZnQiLCJ0d2VlbiIsInRvIiwic2NhbGUiLCJzdGFydCIsIlRPVUNIX0VORCIsIlRPVUNIX0NBTkNFTCIsImF0dGFjayIsImp1bXAiLCJkYXNoIiwic2V0TWl4IiwiTm9ybWFsSWRsZSIsIk5vcm1hbFJ1biIsIk5vcm1hbEp1bXBCIiwiTm9ybWFsSnVtcEMiLCJOb3JtYWxEYXNoQSIsIlN3b3JkSWRsZSIsIlN3b3JkUnVuIiwiU3dvcmRKdW1wQiIsIlN3b3JkSnVtcEMiLCJTd29yZERhc2hBIiwiQXJjaGVySWRsZSIsIkFyY2hlclJ1biIsIkFyY2hlckp1bXBCIiwiQXJjaGVySnVtcEMiLCJBcmNoZXJEYXNoQSIsIlN0aWNrU3RhdGUiLCJJZGxlIiwic2V0QW5pbWF0aW9uIiwiX2N1cnJlbnRTdGF0ZSIsImtleV9jb2RlIiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwibGVmdCIsImEiLCJyaWdodCIsImQiLCJ1cCIsInciLCJzcGFjZSIsImwiLCJjaGFuZ2VXZWFwb25CdXR0b24iLCJ3ZWFwb25UeXBlIiwiU3dvcmQiLCJsb2ciLCJvbkNsaWNrIiwidmVsb2NpdHkiLCJsaW5lYXJWZWxvY2l0eSIsInYyIiwieCIsImFwcGx5Rm9yY2VUb0NlbnRlciIsInBsYXkiLCJzY2hlZHVsZU9uY2UiLCJkYXNoU291bmQiLCJncmF2aXR5U2NhbGUiLCJ5IiwidXBkYXRlIiwiZHQiLCJUb3RhbEVuZW15QWxpdmUiLCJ1cGRhdGVBbmltYXRpb24iLCJzaG93UG9wdXBJbnN0YWxsIiwiaXNXaW4iLCJ3aW4iLCJJc09uQXR0YWNrQ29tYm8iLCJJc09uQXR0YWNraW5nIiwiUnVuIiwiSnVtcFVwIiwiSnVtcERvd24iLCJEYXNoQSIsInJ1blNvdW5kIiwic3RvcCIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJ0YWciLCJhbmltMSIsImFuaW0yIiwid2VhcG9uSWQiLCJOb3JtYWwiLCJzZXRTd29yZCIsImlzVXNpbmdTd29yZCIsImlzVXNpbmdBcnJvdyIsImdldEl0ZW1Tb3VuZCIsImFjdGl2ZSIsInNldEFyY2hlciIsImNoYW5nZUZpZ2h0TW9kZSIsImVuYWJsZWQiLCJjaGVja05lYXJlc3RFbmVteSIsImVuZW15Tm9kZSIsImRpc3RhbmNlIiwicmVtb3ZlTmVhcmVzdEVuZW15IiwiaGl0IiwiZGFtcCIsImRlY3JlbWVudCIsImlzQWxpdmUiLCJkaWUiLCJCb3hDb2xsaWRlciIsIlN3b3JkRGllIiwiQXJjaGVyRGllIiwiTm9ybWFsRGllIiwiaXNMb3NlIiwicmVzcGF3biIsInNldFBvc2l0aW9uIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImdyb3VwIiwiY29uc29sZSIsIndpblNvdW5kIiwiZ2FtZUVuZCIsIklzU2hvd1BvcHVwSW5zdGFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUEwREEsT0FBTyxDQUFDLFVBQUQsQ0FBakU7QUFBQSxJQUFRQyxRQUFSLFlBQVFBLFFBQVI7QUFBQSxJQUFrQkMsUUFBbEIsWUFBa0JBLFFBQWxCO0FBQUEsSUFBNEJDLFdBQTVCLFlBQTRCQSxXQUE1QjtBQUFBLElBQXlDQyxZQUF6QyxZQUF5Q0EsWUFBekM7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHTCxPQUFPLENBQUMsT0FBRCxDQUFyQjs7QUFDQSxJQUFJTSxRQUFRLEdBQUdOLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlPLGFBQWEsR0FBR1AsT0FBTyxDQUFDLGVBQUQsQ0FBM0I7O0FBQ0EsSUFBSVEsU0FBUyxHQUFHUixPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJUyxZQUFZLEdBQUdULE9BQU8sQ0FBQyxjQUFELENBQTFCOztBQUNBLElBQUlVLFNBQVMsR0FBR1YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSVcsWUFBWSxHQUFHWCxPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFDQSxJQUFJWSxZQUFZLEdBQUdaLE9BQU8sQ0FBQyxjQUFELENBQTFCOztBQUVBYSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFHO0FBQ0osaUJBQVU7QUFETixLQURBO0FBSVJQLElBQUFBLFNBQVMsRUFBRUEsU0FKSDtBQU1SO0FBQ0FRLElBQUFBLFlBQVksRUFBRUwsRUFBRSxDQUFDTSxnQkFQVDtBQVFSQyxJQUFBQSxZQUFZLEVBQUVQLEVBQUUsQ0FBQ00sZ0JBUlQ7QUFTUkUsSUFBQUEsYUFBYSxFQUFFUixFQUFFLENBQUNNLGdCQVRWO0FBV1I7QUFDQUcsSUFBQUEsYUFBYSxFQUFFVCxFQUFFLENBQUNVLElBWlY7QUFhUkMsSUFBQUEsVUFBVSxFQUFFWCxFQUFFLENBQUNVLElBYlA7QUFjUkUsSUFBQUEsV0FBVyxFQUFFWixFQUFFLENBQUNVLElBZFI7QUFlUlosSUFBQUEsWUFBWSxFQUFFRSxFQUFFLENBQUNVLElBZlQ7QUFnQlJHLElBQUFBLFVBQVUsRUFBRWIsRUFBRSxDQUFDVSxJQWhCUDtBQWlCUkksSUFBQUEsVUFBVSxFQUFFZCxFQUFFLENBQUNVLElBakJQO0FBbUJSO0FBQ0FLLElBQUFBLFNBQVMsRUFBRWYsRUFBRSxDQUFDVSxJQXBCTjtBQXFCUlgsSUFBQUEsWUFBWSxFQUFFQSxZQXJCTjtBQXNCUmlCLElBQUFBLGNBQWMsRUFBRWhCLEVBQUUsQ0FBQ1UsSUF0QlgsQ0F1QlI7QUFDQTtBQUNBOztBQXpCUSxHQUhQO0FBK0JMTyxFQUFBQSxNQS9CSyxvQkErQks7QUFBQTs7QUFDTjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFdBQVAsR0FBcUIsSUFBckI7QUFFQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EzQixJQUFBQSxRQUFRLENBQUM0QixtQkFBVCxHQUErQixDQUEvQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUVBLFNBQUtDLGFBQUwsR0FBcUIsR0FBckI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEdBQXJCO0FBRUEsU0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBRUEsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUVBLFNBQUtDLGlCQUFMLEdBQXlCLEdBQXpCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsRUFBN0I7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtDLElBQUwsQ0FBVUMsV0FBVixFQUFuQjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBRUEsU0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUVBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxTQUFLQyx3QkFBTCxHQUFnQyxDQUFoQztBQUVBLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBRUEsU0FBS0MsZUFBTCxHQXBDTSxDQXNDTjs7QUFDQSxTQUFLdEIsYUFBTCxHQUFxQixLQUFLYyxJQUFMLENBQVVTLE1BQS9CLENBdkNNLENBeUNOOztBQUVBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0Msc0JBQUwsQ0FBNEJDLEVBQUUsQ0FBQ0MsUUFBL0IsQ0FBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUtkLElBQUwsQ0FBVWUsWUFBVixDQUF1QmpELEVBQUUsQ0FBQ2tELFNBQTFCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLRixZQUFMLENBQWtCdEQsU0FBbEIsQ0FBbEI7QUFDQSxTQUFLeUQsYUFBTCxHQUFxQixLQUFLSCxZQUFMLENBQWtCckQsWUFBbEIsQ0FBckI7O0FBRUEsU0FBS2dELFNBQUwsQ0FBZVMsZ0JBQWYsQ0FBZ0MsVUFBQUMsVUFBVSxFQUFJO0FBQzFDLFVBQUlDLGFBQWEsR0FBR0QsVUFBVSxDQUFDRSxTQUFYLEdBQXVCRixVQUFVLENBQUNFLFNBQVgsQ0FBcUJDLElBQTVDLEdBQW1ELEVBQXZFO0FBQ0EsVUFBR2hFLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxRSxNQUFyQyxFQUE2QyxLQUFJLENBQUNQLGFBQUwsQ0FBbUJRLGdCQUFuQixDQUFvQ0wsYUFBcEMsRUFBN0MsS0FDSyxLQUFJLENBQUNKLFVBQUwsQ0FBZ0JTLGdCQUFoQixDQUFpQ0wsYUFBakM7QUFDUixLQUpEOztBQU1BLFNBQUtYLFNBQUwsQ0FBZWlCLG1CQUFmLENBQW1DLFVBQUNQLFVBQUQsRUFBZ0I7QUFDL0MsVUFBSUMsYUFBYSxHQUFHRCxVQUFVLENBQUNFLFNBQVgsR0FBdUJGLFVBQVUsQ0FBQ0UsU0FBWCxDQUFxQkMsSUFBNUMsR0FBbUQsRUFBdkU7QUFDQSxVQUFHaEUsUUFBUSxDQUFDaUUsU0FBVCxJQUFzQnBFLFdBQVcsQ0FBQ3FFLE1BQXJDLEVBQTZDLEtBQUksQ0FBQ1AsYUFBTCxDQUFtQlUsbUJBQW5CLENBQXVDUCxhQUF2QyxFQUE3QyxLQUNLLEtBQUksQ0FBQ0osVUFBTCxDQUFnQlcsbUJBQWhCLENBQW9DUCxhQUFwQztBQUNSLEtBSkQ7O0FBTUEsU0FBS1EsZUFBTDtBQUVBLFNBQUtDLFlBQUwsQ0FBa0IzRSxRQUFRLENBQUM0RSxJQUEzQjtBQUVBLFNBQUtwRSxTQUFMLENBQWVxRSxJQUFmLENBQW9CMUUsS0FBSyxDQUFDMkUsVUFBMUI7QUFDSCxHQWhHSTtBQWtHTHpCLEVBQUFBLGVBbEdLLDZCQWtHWTtBQUNiO0FBQ0ExQyxJQUFBQSxFQUFFLENBQUNvRSxXQUFILENBQWVDLEVBQWYsQ0FBa0JyRSxFQUFFLENBQUNzRSxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUtDLFlBQTFELEVBQXdFLElBQXhFO0FBQ0F6RSxJQUFBQSxFQUFFLENBQUNvRSxXQUFILENBQWVDLEVBQWYsQ0FBa0JyRSxFQUFFLENBQUNzRSxXQUFILENBQWVDLFNBQWYsQ0FBeUJHLE1BQTNDLEVBQW1ELEtBQUtDLGFBQXhELEVBQXVFLElBQXZFLEVBSGEsQ0FLYjs7QUFDQSxTQUFLaEUsVUFBTCxDQUFnQjBELEVBQWhCLENBQW1CckUsRUFBRSxDQUFDVSxJQUFILENBQVE2RCxTQUFSLENBQWtCSyxXQUFyQyxFQUFrRCxVQUFTQyxLQUFULEVBQWU7QUFDN0QsVUFBRyxLQUFLekMsUUFBUixFQUFrQjtBQUNsQjNDLE1BQUFBLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQUMsQ0FBaEM7QUFDQSxXQUFLeUQsSUFBTDtBQUNBLFdBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQS9FLE1BQUFBLEVBQUUsQ0FBQ2dGLEtBQUgsQ0FBUyxLQUFLckUsVUFBZCxFQUEwQnNFLEVBQTFCLENBQTZCLEdBQTdCLEVBQWtDO0FBQUNDLFFBQUFBLEtBQUssRUFBRztBQUFULE9BQWxDLEVBQWlELElBQWpELEVBQXVEQyxLQUF2RDtBQUVBLFdBQUszQyx3QkFBTCxHQUFnQyxDQUFDLENBQWpDLENBUDZELENBUzdEO0FBQ0E7QUFDSCxLQVhELEVBV0csSUFYSDtBQWFBLFNBQUs3QixVQUFMLENBQWdCMEQsRUFBaEIsQ0FBbUJyRSxFQUFFLENBQUNVLElBQUgsQ0FBUTZELFNBQVIsQ0FBa0JhLFNBQXJDLEVBQWdELFVBQVNQLEtBQVQsRUFBZTtBQUMzRHBGLE1BQUFBLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQS9CO0FBQ0FyQixNQUFBQSxFQUFFLENBQUNnRixLQUFILENBQVMsS0FBS3JFLFVBQWQsRUFBMEJzRSxFQUExQixDQUE2QixHQUE3QixFQUFrQztBQUFDQyxRQUFBQSxLQUFLLEVBQUc7QUFBVCxPQUFsQyxFQUErQyxJQUEvQyxFQUFxREMsS0FBckQ7QUFDSCxLQUhELEVBR0csSUFISDtBQUtBLFNBQUt4RSxVQUFMLENBQWdCMEQsRUFBaEIsQ0FBbUJyRSxFQUFFLENBQUNVLElBQUgsQ0FBUTZELFNBQVIsQ0FBa0JjLFlBQXJDLEVBQW1ELFVBQVNSLEtBQVQsRUFBZTtBQUM5RHBGLE1BQUFBLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQS9CO0FBQ0FyQixNQUFBQSxFQUFFLENBQUNnRixLQUFILENBQVMsS0FBS3JFLFVBQWQsRUFBMEJzRSxFQUExQixDQUE2QixHQUE3QixFQUFrQztBQUFDQyxRQUFBQSxLQUFLLEVBQUc7QUFBVCxPQUFsQyxFQUErQyxJQUEvQyxFQUFxREMsS0FBckQ7QUFDSCxLQUhELEVBR0csSUFISCxFQXhCYSxDQTZCYjs7QUFDQSxTQUFLdkUsV0FBTCxDQUFpQnlELEVBQWpCLENBQW9CckUsRUFBRSxDQUFDVSxJQUFILENBQVE2RCxTQUFSLENBQWtCSyxXQUF0QyxFQUFtRCxVQUFTQyxLQUFULEVBQWU7QUFDOUQsVUFBRyxLQUFLekMsUUFBUixFQUFrQjtBQUNsQjNDLE1BQUFBLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQS9CO0FBQ0EsV0FBSzBELFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxXQUFLRCxJQUFMO0FBQ0E5RSxNQUFBQSxFQUFFLENBQUNnRixLQUFILENBQVMsS0FBS3BFLFdBQWQsRUFBMkJxRSxFQUEzQixDQUE4QixHQUE5QixFQUFtQztBQUFDQyxRQUFBQSxLQUFLLEVBQUc7QUFBVCxPQUFuQyxFQUFrRCxJQUFsRCxFQUF3REMsS0FBeEQ7QUFFQSxXQUFLM0Msd0JBQUwsR0FBZ0MsQ0FBaEMsQ0FQOEQsQ0FROUQ7QUFDSCxLQVRELEVBU0csSUFUSDtBQVdBLFNBQUs1QixXQUFMLENBQWlCeUQsRUFBakIsQ0FBb0JyRSxFQUFFLENBQUNVLElBQUgsQ0FBUTZELFNBQVIsQ0FBa0JhLFNBQXRDLEVBQWlELFVBQVNQLEtBQVQsRUFBZTtBQUM1RHBGLE1BQUFBLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQS9CO0FBQ0FyQixNQUFBQSxFQUFFLENBQUNnRixLQUFILENBQVMsS0FBS3BFLFdBQWQsRUFBMkJxRSxFQUEzQixDQUE4QixHQUE5QixFQUFtQztBQUFDQyxRQUFBQSxLQUFLLEVBQUc7QUFBVCxPQUFuQyxFQUFnRCxJQUFoRCxFQUFzREMsS0FBdEQ7QUFDSCxLQUhELEVBR0csSUFISDtBQUtBLFNBQUt2RSxXQUFMLENBQWlCeUQsRUFBakIsQ0FBb0JyRSxFQUFFLENBQUNVLElBQUgsQ0FBUTZELFNBQVIsQ0FBa0JjLFlBQXRDLEVBQW9ELFVBQVNSLEtBQVQsRUFBZTtBQUMvRHBGLE1BQUFBLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQS9CO0FBQ0FyQixNQUFBQSxFQUFFLENBQUNnRixLQUFILENBQVMsS0FBS3BFLFdBQWQsRUFBMkJxRSxFQUEzQixDQUE4QixHQUE5QixFQUFtQztBQUFDQyxRQUFBQSxLQUFLLEVBQUc7QUFBVCxPQUFuQyxFQUFnRCxJQUFoRCxFQUFzREMsS0FBdEQ7QUFDSCxLQUhELEVBR0csSUFISCxFQTlDYSxDQW1EYjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxTQUFLckYsWUFBTCxDQUFrQnVFLEVBQWxCLENBQXFCckUsRUFBRSxDQUFDVSxJQUFILENBQVE2RCxTQUFSLENBQWtCSyxXQUF2QyxFQUFvRCxVQUFTQyxLQUFULEVBQWU7QUFDL0Q7QUFDQSxXQUFLUyxNQUFMO0FBQ0F0RixNQUFBQSxFQUFFLENBQUNnRixLQUFILENBQVMsS0FBS2xGLFlBQWQsRUFBNEJtRixFQUE1QixDQUErQixHQUEvQixFQUFvQztBQUFDQyxRQUFBQSxLQUFLLEVBQUc7QUFBVCxPQUFwQyxFQUFtRCxJQUFuRCxFQUF5REMsS0FBekQ7QUFDSCxLQUpELEVBSUcsSUFKSDtBQU1BLFNBQUt0RSxVQUFMLENBQWdCd0QsRUFBaEIsQ0FBbUJyRSxFQUFFLENBQUNVLElBQUgsQ0FBUTZELFNBQVIsQ0FBa0JLLFdBQXJDLEVBQWtELFVBQVNDLEtBQVQsRUFBZTtBQUM3RDtBQUNBLFdBQUtVLElBQUw7QUFDQXZGLE1BQUFBLEVBQUUsQ0FBQ2dGLEtBQUgsQ0FBUyxLQUFLbkUsVUFBZCxFQUEwQm9FLEVBQTFCLENBQTZCLEdBQTdCLEVBQWtDO0FBQUNDLFFBQUFBLEtBQUssRUFBRztBQUFULE9BQWxDLEVBQWlELElBQWpELEVBQXVEQyxLQUF2RDtBQUNILEtBSkQsRUFJRyxJQUpIO0FBTUEsU0FBS3JFLFVBQUwsQ0FBZ0J1RCxFQUFoQixDQUFtQnJFLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRNkQsU0FBUixDQUFrQkssV0FBckMsRUFBa0QsVUFBU0MsS0FBVCxFQUFlO0FBQzdEO0FBQ0EsV0FBS1csSUFBTDtBQUNBeEYsTUFBQUEsRUFBRSxDQUFDZ0YsS0FBSCxDQUFTLEtBQUtsRSxVQUFkLEVBQTBCbUUsRUFBMUIsQ0FBNkIsR0FBN0IsRUFBa0M7QUFBQ0MsUUFBQUEsS0FBSyxFQUFHO0FBQVQsT0FBbEMsRUFBaUQsSUFBakQsRUFBdURDLEtBQXZEO0FBQ0gsS0FKRCxFQUlHLElBSkg7QUFNQSxTQUFLckYsWUFBTCxDQUFrQnVFLEVBQWxCLENBQXFCckUsRUFBRSxDQUFDVSxJQUFILENBQVE2RCxTQUFSLENBQWtCYSxTQUF2QyxFQUFrRCxVQUFTUCxLQUFULEVBQWU7QUFDN0QsV0FBS1MsTUFBTDtBQUNBdEYsTUFBQUEsRUFBRSxDQUFDZ0YsS0FBSCxDQUFTLEtBQUtsRixZQUFkLEVBQTRCbUYsRUFBNUIsQ0FBK0IsR0FBL0IsRUFBb0M7QUFBQ0MsUUFBQUEsS0FBSyxFQUFHO0FBQVQsT0FBcEMsRUFBaUQsSUFBakQsRUFBdURDLEtBQXZEO0FBQ0gsS0FIRCxFQUdHLElBSEg7QUFLQSxTQUFLdEUsVUFBTCxDQUFnQndELEVBQWhCLENBQW1CckUsRUFBRSxDQUFDVSxJQUFILENBQVE2RCxTQUFSLENBQWtCYSxTQUFyQyxFQUFnRCxVQUFTUCxLQUFULEVBQWU7QUFDM0QsV0FBS1UsSUFBTDtBQUNBdkYsTUFBQUEsRUFBRSxDQUFDZ0YsS0FBSCxDQUFTLEtBQUtuRSxVQUFkLEVBQTBCb0UsRUFBMUIsQ0FBNkIsR0FBN0IsRUFBa0M7QUFBQ0MsUUFBQUEsS0FBSyxFQUFHO0FBQVQsT0FBbEMsRUFBK0MsSUFBL0MsRUFBcURDLEtBQXJEO0FBQ0gsS0FIRCxFQUdHLElBSEg7QUFLQSxTQUFLckUsVUFBTCxDQUFnQnVELEVBQWhCLENBQW1CckUsRUFBRSxDQUFDVSxJQUFILENBQVE2RCxTQUFSLENBQWtCYSxTQUFyQyxFQUFnRCxVQUFTUCxLQUFULEVBQWU7QUFDM0QsV0FBS1csSUFBTDtBQUNBeEYsTUFBQUEsRUFBRSxDQUFDZ0YsS0FBSCxDQUFTLEtBQUtsRSxVQUFkLEVBQTBCbUUsRUFBMUIsQ0FBNkIsR0FBN0IsRUFBa0M7QUFBQ0MsUUFBQUEsS0FBSyxFQUFHO0FBQVQsT0FBbEMsRUFBK0MsSUFBL0MsRUFBcURDLEtBQXJEO0FBQ0gsS0FIRCxFQUdHLElBSEgsRUF4RmEsQ0E4RmI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDSCxHQXhNSTtBQTBNTHBCLEVBQUFBLGVBMU1LLDZCQTBNWTtBQUNiLFNBQUswQixNQUFMLENBQVkvRixhQUFhLENBQUNnRyxVQUExQixFQUFzQ2hHLGFBQWEsQ0FBQ2lHLFNBQXBEO0FBQ0EsU0FBS0YsTUFBTCxDQUFZL0YsYUFBYSxDQUFDZ0csVUFBMUIsRUFBc0NoRyxhQUFhLENBQUNrRyxXQUFwRDtBQUNBLFNBQUtILE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQ2dHLFVBQTFCLEVBQXNDaEcsYUFBYSxDQUFDbUcsV0FBcEQ7QUFDQSxTQUFLSixNQUFMLENBQVkvRixhQUFhLENBQUNnRyxVQUExQixFQUFzQ2hHLGFBQWEsQ0FBQ29HLFdBQXBEO0FBRUEsU0FBS0wsTUFBTCxDQUFZL0YsYUFBYSxDQUFDaUcsU0FBMUIsRUFBcUNqRyxhQUFhLENBQUNrRyxXQUFuRDtBQUNBLFNBQUtILE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQ2lHLFNBQTFCLEVBQXFDakcsYUFBYSxDQUFDbUcsV0FBbkQ7QUFDQSxTQUFLSixNQUFMLENBQVkvRixhQUFhLENBQUNpRyxTQUExQixFQUFxQ2pHLGFBQWEsQ0FBQ29HLFdBQW5EO0FBRUEsU0FBS0wsTUFBTCxDQUFZL0YsYUFBYSxDQUFDb0csV0FBMUIsRUFBdUNwRyxhQUFhLENBQUNrRyxXQUFyRDtBQUNBLFNBQUtILE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQ29HLFdBQTFCLEVBQXVDcEcsYUFBYSxDQUFDbUcsV0FBckQ7QUFFQSxTQUFLSixNQUFMLENBQVkvRixhQUFhLENBQUNrRyxXQUExQixFQUF1Q2xHLGFBQWEsQ0FBQ21HLFdBQXJELEVBYmEsQ0FlYjs7QUFDQSxTQUFLSixNQUFMLENBQVkvRixhQUFhLENBQUNxRyxTQUExQixFQUFxQ3JHLGFBQWEsQ0FBQ3NHLFFBQW5EO0FBQ0EsU0FBS1AsTUFBTCxDQUFZL0YsYUFBYSxDQUFDcUcsU0FBMUIsRUFBcUNyRyxhQUFhLENBQUN1RyxVQUFuRDtBQUNBLFNBQUtSLE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQ3FHLFNBQTFCLEVBQXFDckcsYUFBYSxDQUFDd0csVUFBbkQ7QUFDQSxTQUFLVCxNQUFMLENBQVkvRixhQUFhLENBQUNxRyxTQUExQixFQUFxQ3JHLGFBQWEsQ0FBQ3lHLFVBQW5EO0FBRUEsU0FBS1YsTUFBTCxDQUFZL0YsYUFBYSxDQUFDc0csUUFBMUIsRUFBb0N0RyxhQUFhLENBQUN1RyxVQUFsRDtBQUNBLFNBQUtSLE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQ3NHLFFBQTFCLEVBQW9DdEcsYUFBYSxDQUFDd0csVUFBbEQ7QUFDQSxTQUFLVCxNQUFMLENBQVkvRixhQUFhLENBQUNzRyxRQUExQixFQUFvQ3RHLGFBQWEsQ0FBQ3lHLFVBQWxEO0FBRUEsU0FBS1YsTUFBTCxDQUFZL0YsYUFBYSxDQUFDeUcsVUFBMUIsRUFBc0N6RyxhQUFhLENBQUN1RyxVQUFwRDtBQUNBLFNBQUtSLE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQ3lHLFVBQTFCLEVBQXNDekcsYUFBYSxDQUFDd0csVUFBcEQ7QUFFQSxTQUFLVCxNQUFMLENBQVkvRixhQUFhLENBQUN1RyxVQUExQixFQUFzQ3ZHLGFBQWEsQ0FBQ3dHLFVBQXBELEVBNUJhLENBOEJiOztBQUNBLFNBQUtULE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQzBHLFVBQTFCLEVBQXNDMUcsYUFBYSxDQUFDMkcsU0FBcEQ7QUFDQSxTQUFLWixNQUFMLENBQVkvRixhQUFhLENBQUMwRyxVQUExQixFQUFzQzFHLGFBQWEsQ0FBQzRHLFdBQXBEO0FBQ0EsU0FBS2IsTUFBTCxDQUFZL0YsYUFBYSxDQUFDMEcsVUFBMUIsRUFBc0MxRyxhQUFhLENBQUM2RyxXQUFwRDtBQUNBLFNBQUtkLE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQzBHLFVBQTFCLEVBQXNDMUcsYUFBYSxDQUFDOEcsV0FBcEQ7QUFFQSxTQUFLZixNQUFMLENBQVkvRixhQUFhLENBQUMyRyxTQUExQixFQUFxQzNHLGFBQWEsQ0FBQzRHLFdBQW5EO0FBQ0EsU0FBS2IsTUFBTCxDQUFZL0YsYUFBYSxDQUFDMkcsU0FBMUIsRUFBcUMzRyxhQUFhLENBQUM2RyxXQUFuRDtBQUNBLFNBQUtkLE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQzJHLFNBQTFCLEVBQXFDM0csYUFBYSxDQUFDOEcsV0FBbkQ7QUFFQSxTQUFLZixNQUFMLENBQVkvRixhQUFhLENBQUM4RyxXQUExQixFQUF1QzlHLGFBQWEsQ0FBQzRHLFdBQXJEO0FBQ0EsU0FBS2IsTUFBTCxDQUFZL0YsYUFBYSxDQUFDOEcsV0FBMUIsRUFBdUM5RyxhQUFhLENBQUM2RyxXQUFyRDtBQUVBLFNBQUtkLE1BQUwsQ0FBWS9GLGFBQWEsQ0FBQzRHLFdBQTFCLEVBQXVDNUcsYUFBYSxDQUFDNkcsV0FBckQ7QUFDSCxHQXRQSTtBQXdQTHBCLEVBQUFBLEtBeFBLLG1CQXdQSTtBQUNMMUYsSUFBQUEsUUFBUSxDQUFDZ0gsVUFBVCxHQUFzQmxILFlBQVksQ0FBQ21ILElBQW5DOztBQUVBLFNBQUs5RCxTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDZ0csVUFBN0MsRUFBeUQsSUFBekQ7O0FBQ0EsU0FBS2tCLGFBQUwsR0FBcUJySCxZQUFZLENBQUNtSCxJQUFsQztBQUNILEdBN1BJO0FBK1BMakMsRUFBQUEsWUEvUEssd0JBK1BRSSxLQS9QUixFQStQYztBQUVmLFFBQUlnQyxRQUFRLEdBQUdoQyxLQUFLLENBQUNpQyxPQUFyQjs7QUFFQSxZQUFPRCxRQUFQO0FBRUksV0FBSzdHLEVBQUUsQ0FBQytHLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxJQUFsQjtBQUNBLFdBQUtqSCxFQUFFLENBQUMrRyxLQUFILENBQVNDLEdBQVQsQ0FBYUUsQ0FBbEI7QUFDSSxZQUFHLEtBQUs5RSxRQUFSLEVBQWtCO0FBQ2xCM0MsUUFBQUEsUUFBUSxDQUFDNEIsbUJBQVQsR0FBK0IsQ0FBQyxDQUFoQztBQUNBLGFBQUswRCxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsYUFBS0QsSUFBTDtBQUNKOztBQUVBLFdBQUs5RSxFQUFFLENBQUMrRyxLQUFILENBQVNDLEdBQVQsQ0FBYUcsS0FBbEI7QUFDQSxXQUFLbkgsRUFBRSxDQUFDK0csS0FBSCxDQUFTQyxHQUFULENBQWFJLENBQWxCO0FBQ0ksWUFBRyxLQUFLaEYsUUFBUixFQUFrQjtBQUNsQjNDLFFBQUFBLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQS9CO0FBQ0EsYUFBSzBELFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLRCxJQUFMO0FBQ0o7O0FBRUEsV0FBSzlFLEVBQUUsQ0FBQytHLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSyxFQUFsQjtBQUNBLFdBQUtySCxFQUFFLENBQUMrRyxLQUFILENBQVNDLEdBQVQsQ0FBYU0sQ0FBbEI7QUFDSSxhQUFLL0IsSUFBTDtBQUNKOztBQUVBLFdBQUt2RixFQUFFLENBQUMrRyxLQUFILENBQVNDLEdBQVQsQ0FBYU8sS0FBbEI7QUFDSSxhQUFLL0IsSUFBTDtBQUNKOztBQUVBLFdBQUt4RixFQUFFLENBQUMrRyxLQUFILENBQVNDLEdBQVQsQ0FBYVEsQ0FBbEI7QUFDSSxhQUFLbEMsTUFBTDtBQUNKO0FBN0JKO0FBaUNILEdBcFNJO0FBc1NMWCxFQUFBQSxhQXRTSyx5QkFzU1NFLEtBdFNULEVBc1NlO0FBRWhCLFFBQUlnQyxRQUFRLEdBQUdoQyxLQUFLLENBQUNpQyxPQUFyQjs7QUFFQSxZQUFPRCxRQUFQO0FBRUksV0FBSzdHLEVBQUUsQ0FBQytHLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxJQUFsQjtBQUNBLFdBQUtqSCxFQUFFLENBQUMrRyxLQUFILENBQVNDLEdBQVQsQ0FBYUUsQ0FBbEI7QUFDQSxXQUFLbEgsRUFBRSxDQUFDK0csS0FBSCxDQUFTQyxHQUFULENBQWFHLEtBQWxCO0FBQ0EsV0FBS25ILEVBQUUsQ0FBQytHLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSSxDQUFsQjtBQUNJM0gsUUFBQUEsUUFBUSxDQUFDNEIsbUJBQVQsR0FBK0IsQ0FBL0I7QUFDSjtBQVBKO0FBU0gsR0FuVEk7QUFxVExvRyxFQUFBQSxrQkFyVEssOEJBcVRjQyxVQXJUZCxFQXFUeUI7QUFDMUIsUUFBR0EsVUFBVSxJQUFJckksUUFBUSxDQUFDc0ksS0FBMUIsRUFBZ0M7QUFDNUIsVUFBR2xJLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxSSxLQUFyQyxFQUEyQztBQUN2QyxhQUFLM0QsWUFBTCxDQUFrQjNFLFFBQVEsQ0FBQzRFLElBQTNCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBRyxLQUFLNUIsV0FBUixFQUFvQjtBQUNoQixlQUFLMkIsWUFBTCxDQUFrQjNFLFFBQVEsQ0FBQ3NJLEtBQTNCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gzSCxVQUFBQSxFQUFFLENBQUM0SCxHQUFILENBQU8sbUJBQVA7QUFDSDtBQUNKO0FBQ0osS0FWRCxNQVVPLElBQUdGLFVBQVUsSUFBSXJJLFFBQVEsQ0FBQ3NFLE1BQTFCLEVBQWlDO0FBQ3BDLFVBQUdsRSxRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUUsTUFBckMsRUFBNEM7QUFDeEMsYUFBS0ssWUFBTCxDQUFrQjNFLFFBQVEsQ0FBQzRFLElBQTNCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBRyxLQUFLM0IsWUFBUixFQUFxQjtBQUNqQixlQUFLMEIsWUFBTCxDQUFrQjNFLFFBQVEsQ0FBQ3NFLE1BQTNCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gzRCxVQUFBQSxFQUFFLENBQUM0SCxHQUFILENBQU8sbUJBQVA7QUFDSDtBQUNKO0FBQ0o7QUFDSixHQTNVSTtBQTZVTHRDLEVBQUFBLE1BN1VLLG9CQTZVRztBQUNKLFFBQUcsS0FBS2xELFFBQVIsRUFBa0I7O0FBRWxCLFFBQUczQyxRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUUsTUFBckMsRUFBNEM7QUFDeEMsV0FBS1AsYUFBTCxDQUFtQnlFLE9BQW5CO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBSzFFLFVBQUwsQ0FBZ0IwRSxPQUFoQjtBQUNIO0FBQ0osR0FyVkk7QUF1Vkx0QyxFQUFBQSxJQXZWSyxrQkF1VkM7QUFDRjtBQUNBLFFBQUcsS0FBS25ELFFBQVIsRUFBa0I7QUFFbEIsUUFBRyxLQUFLWixVQUFSLEVBQW9COztBQUVwQixRQUFHLEtBQUtGLFlBQVIsRUFBcUI7QUFDakIsVUFBSXdHLFFBQVEsR0FBRyxLQUFLOUUsVUFBTCxDQUFnQitFLGNBQS9CO0FBQ0EsV0FBSy9FLFVBQUwsQ0FBZ0IrRSxjQUFoQixHQUFpQy9ILEVBQUUsQ0FBQ2dJLEVBQUgsQ0FBTUYsUUFBUSxDQUFDRyxDQUFmLEVBQWtCLENBQUMsR0FBbkIsQ0FBakMsQ0FGaUIsQ0FJakI7O0FBQ0EsV0FBS2pGLFVBQUwsQ0FBZ0JrRixrQkFBaEIsQ0FBb0NsSSxFQUFFLENBQUNnSSxFQUFILENBQU0sQ0FBTixFQUFRLEtBQUtwRyxVQUFiLENBQXBDLEVBQStELElBQS9EOztBQUNBLFdBQUtOLFlBQUwsR0FBb0IsS0FBcEI7QUFFQSxXQUFLakIsWUFBTCxDQUFrQjhILElBQWxCO0FBRUEsV0FBS0MsWUFBTCxDQUFrQixZQUFXO0FBQ3pCLGFBQUs3RyxVQUFMLEdBQWtCLENBQWxCO0FBQ0gsT0FGRCxFQUVHLElBRkg7QUFHQTtBQUNIOztBQUVELFFBQUcsQ0FBQyxLQUFLRCxZQUFOLElBQXNCLEtBQUtDLFVBQUwsSUFBbUIsQ0FBNUMsRUFBOEM7QUFDMUMsVUFBSXVHLFNBQVEsR0FBRyxLQUFLOUUsVUFBTCxDQUFnQitFLGNBQS9CO0FBQ0EsV0FBSy9FLFVBQUwsQ0FBZ0IrRSxjQUFoQixHQUFpQy9ILEVBQUUsQ0FBQ2dJLEVBQUgsQ0FBTUYsU0FBUSxDQUFDRyxDQUFmLEVBQWtCLENBQUMsR0FBbkIsQ0FBakMsQ0FGMEMsQ0FJMUM7O0FBQ0EsV0FBS2pGLFVBQUwsQ0FBZ0JrRixrQkFBaEIsQ0FBb0NsSSxFQUFFLENBQUNnSSxFQUFILENBQU0sQ0FBTixFQUFRLEtBQUtuRyxXQUFiLENBQXBDLEVBQWdFLElBQWhFOztBQUNBLFdBQUtQLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBRUEsV0FBS2xCLFlBQUwsQ0FBa0I4SCxJQUFsQjtBQUNBO0FBQ0g7QUFDSixHQXpYSTtBQTJYTDNDLEVBQUFBLElBM1hLLGtCQTJYQztBQUNGO0FBQ0EsUUFBRyxLQUFLcEQsUUFBUixFQUFrQjtBQUNsQixTQUFLckMsWUFBTCxDQUFrQnNJLFNBQWxCLENBQTRCRixJQUE1QjtBQUNBLFNBQUszRyxVQUFMLEdBQWtCLElBQWxCOztBQUNBLFNBQUt3QixVQUFMLENBQWdCa0Ysa0JBQWhCLENBQW9DbEksRUFBRSxDQUFDZ0ksRUFBSCxDQUFNLEtBQUtsRyxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUtJLElBQUwsQ0FBVVMsTUFBdEMsRUFBOEMsQ0FBOUMsQ0FBcEMsRUFBdUYsSUFBdkY7O0FBQ0EsU0FBS0ssVUFBTCxDQUFnQnNGLFlBQWhCLEdBQStCLEdBQS9CO0FBRUEsU0FBSy9ILFlBQUwsQ0FBa0I0SCxJQUFsQjtBQUVBLFNBQUtDLFlBQUwsQ0FBa0IsWUFBVztBQUN6QixXQUFLNUcsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUt3QixVQUFMLENBQWdCc0YsWUFBaEIsR0FBK0IsQ0FBL0I7QUFDQSxVQUFJUixRQUFRLEdBQUcsS0FBSzlFLFVBQUwsQ0FBZ0IrRSxjQUEvQjtBQUNBLFdBQUsvRSxVQUFMLENBQWdCK0UsY0FBaEIsR0FBaUMvSCxFQUFFLENBQUNnSSxFQUFILENBQU0sQ0FBTixFQUFTRixRQUFRLENBQUNTLENBQWxCLENBQWpDO0FBQ0gsS0FMRCxFQUtHLElBTEg7QUFNSCxHQTNZSTtBQTZZTHpELEVBQUFBLElBN1lLLGtCQTZZQztBQUNGLFNBQUs1QyxJQUFMLENBQVVTLE1BQVYsR0FBbUIsS0FBS3ZCLGFBQUwsR0FBcUIzQixRQUFRLENBQUM0QixtQkFBakQ7QUFDSCxHQS9ZSTtBQWlaTG1ILEVBQUFBLE1BalpLLGtCQWlaR0MsRUFqWkgsRUFpWk87QUFDUixRQUFHLEtBQUtyRyxRQUFSLEVBQWtCOztBQUVsQixRQUFHM0MsUUFBUSxDQUFDaUosZUFBVCxJQUE0QixDQUEvQixFQUFrQztBQUM5QixXQUFLQyxlQUFMO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDQW5KLE1BQUFBLFFBQVEsQ0FBQ29KLEtBQVQsR0FBaUIsSUFBakI7QUFDQSxXQUFLcEcsTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLTCxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBSzBHLEdBQUw7QUFDSDs7QUFFRCxRQUFJZixjQUFjLEdBQUcsS0FBSy9FLFVBQUwsQ0FBZ0IrRSxjQUFyQyxDQVpRLENBY1I7QUFDQTs7QUFDQSxRQUFHLEtBQUs1RSxVQUFMLENBQWdCNEYsZUFBaEIsSUFBbUMsS0FBSzNGLGFBQUwsQ0FBbUI0RixhQUF6RCxFQUF1RTtBQUNuRTtBQUNBLFVBQUssQ0FBQyxLQUFLeEgsVUFBTixJQUFvQi9CLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLENBQW5ELElBQXdEMEcsY0FBYyxDQUFDRSxDQUFmLEdBQW1CLEtBQUtqRyxxQkFBakYsSUFBNEd2QyxRQUFRLENBQUM0QixtQkFBVCxHQUErQixDQUEvQixJQUFvQzBHLGNBQWMsQ0FBQ0UsQ0FBZixHQUFtQixDQUFDLEtBQUtqRyxxQkFBN0ssRUFBcU07QUFDak0sYUFBS2dCLFVBQUwsQ0FBZ0JrRixrQkFBaEIsQ0FBb0NsSSxFQUFFLENBQUNnSSxFQUFILENBQU12SSxRQUFRLENBQUM0QixtQkFBVCxHQUErQixLQUFLVSxpQkFBMUMsRUFBNkQsQ0FBN0QsQ0FBcEMsRUFBc0csSUFBdEc7QUFDSDtBQUNKLEtBTEQsTUFLTztBQUNIO0FBQ0EsVUFBSyxDQUFDLEtBQUtQLFVBQU4sSUFBb0IvQixRQUFRLENBQUM0QixtQkFBVCxHQUErQixDQUFuRCxJQUF3RDBHLGNBQWMsQ0FBQ0UsQ0FBZixHQUFtQixLQUFLeEcsYUFBakYsSUFBb0doQyxRQUFRLENBQUM0QixtQkFBVCxHQUErQixDQUEvQixJQUFvQzBHLGNBQWMsQ0FBQ0UsQ0FBZixHQUFtQixDQUFDLEtBQUt4RyxhQUFySyxFQUFxTDtBQUNqTCxhQUFLdUIsVUFBTCxDQUFnQmtGLGtCQUFoQixDQUFvQ2xJLEVBQUUsQ0FBQ2dJLEVBQUgsQ0FBTXZJLFFBQVEsQ0FBQzRCLG1CQUFULEdBQStCLEtBQUtNLFNBQTFDLEVBQXFELENBQXJELENBQXBDLEVBQThGLElBQTlGO0FBQ0g7QUFDSjs7QUFFRCxRQUFHb0csY0FBYyxDQUFDRSxDQUFmLEdBQW1CLElBQW5CLElBQTJCRixjQUFjLENBQUNFLENBQWYsR0FBbUIsQ0FBQyxJQUFsRCxFQUF1RDtBQUNuRHhJLE1BQUFBLFFBQVEsQ0FBQ2dILFVBQVQsR0FBc0JsSCxZQUFZLENBQUMwSixHQUFuQzs7QUFDQSxVQUFHLEtBQUtsRSxTQUFMLElBQWtCLENBQXJCLEVBQXVCO0FBQ25CLGFBQUsxRSxZQUFMLENBQWtCOEgsSUFBbEI7QUFDQSxhQUFLcEQsU0FBTCxHQUFpQixHQUFqQjtBQUNIOztBQUVELFdBQUtBLFNBQUwsSUFBa0IwRCxFQUFsQjtBQUNIOztBQUVELFFBQUdWLGNBQWMsQ0FBQ1EsQ0FBZixHQUFtQixJQUF0QixFQUE2QjlJLFFBQVEsQ0FBQ2dILFVBQVQsR0FBc0JsSCxZQUFZLENBQUMySixNQUFuQyxDQUE3QixLQUNLLElBQUduQixjQUFjLENBQUNRLENBQWYsR0FBbUIsQ0FBQyxJQUF2QixFQUE4QjlJLFFBQVEsQ0FBQ2dILFVBQVQsR0FBc0JsSCxZQUFZLENBQUM0SixRQUFuQztBQUVuQyxRQUFHLEtBQUszSCxVQUFSLEVBQXFCL0IsUUFBUSxDQUFDZ0gsVUFBVCxHQUFzQmxILFlBQVksQ0FBQzZKLEtBQW5DOztBQUVyQixRQUFHckIsY0FBYyxDQUFDRSxDQUFmLElBQW9CLElBQXBCLElBQTRCRixjQUFjLENBQUNFLENBQWYsSUFBb0IsQ0FBQyxJQUFqRCxJQUNBRixjQUFjLENBQUNRLENBQWYsSUFBb0IsSUFEcEIsSUFDNEJSLGNBQWMsQ0FBQ1EsQ0FBZixJQUFvQixDQUFDLElBRHBELEVBQzBEO0FBRXREOUksTUFBQUEsUUFBUSxDQUFDZ0gsVUFBVCxHQUFzQmxILFlBQVksQ0FBQ21ILElBQW5DO0FBQ0EsV0FBSzNHLFlBQUwsQ0FBa0JzSixRQUFsQixDQUEyQkMsSUFBM0I7QUFDSDs7QUFFRCxTQUFLWCxlQUFMLEdBbERRLENBb0RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsR0F6Y0k7QUEyY0xBLEVBQUFBLGVBM2NLLDZCQTJjWTtBQUNiLFFBQUcsS0FBSy9CLGFBQUwsSUFBdUJuSCxRQUFRLENBQUNnSCxVQUFuQyxFQUErQztBQUUvQyxRQUFHLEtBQUt0RCxVQUFMLENBQWdCNEYsZUFBbkIsRUFBb0M7QUFFcEMsUUFBRyxLQUFLM0csUUFBUixFQUFrQjs7QUFFbEIsWUFBUTNDLFFBQVEsQ0FBQ2dILFVBQWpCO0FBQ0ksV0FBS2xILFlBQVksQ0FBQ21ILElBQWxCO0FBQ0ksWUFBSWpILFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxSSxLQUF0QyxFQUE0QztBQUN4QyxlQUFLL0UsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ3FHLFNBQTdDLEVBQXdELElBQXhEO0FBQ0gsU0FGRCxNQUVPLElBQUl0RyxRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUUsTUFBdEMsRUFBNkM7QUFDaEQsZUFBS2YsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQzBHLFVBQTdDLEVBQXlELElBQXpEO0FBQ0gsU0FGTSxNQUVBO0FBQ0gsZUFBS3hELFNBQUwsQ0FBZStELFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JqSCxhQUFhLENBQUNnRyxVQUE3QyxFQUF5RCxJQUF6RDtBQUNIOztBQUNEOztBQUNKLFdBQUtuRyxZQUFZLENBQUMwSixHQUFsQjtBQUNJLFlBQUl4SixRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUksS0FBdEMsRUFBNEM7QUFDeEMsZUFBSzVILFlBQUwsQ0FBa0JzSixRQUFsQixDQUEyQmxCLElBQTNCOztBQUNBLGVBQUt2RixTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDc0csUUFBN0MsRUFBdUQsSUFBdkQ7QUFDSCxTQUhELE1BR08sSUFBSXZHLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxRSxNQUF0QyxFQUE2QztBQUNoRCxlQUFLNUQsWUFBTCxDQUFrQnNKLFFBQWxCLENBQTJCbEIsSUFBM0I7O0FBQ0EsZUFBS3ZGLFNBQUwsQ0FBZStELFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JqSCxhQUFhLENBQUMyRyxTQUE3QyxFQUF3RCxJQUF4RDtBQUNILFNBSE0sTUFHQTtBQUNILGVBQUt0RyxZQUFMLENBQWtCc0osUUFBbEIsQ0FBMkJsQixJQUEzQjs7QUFDQSxlQUFLdkYsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ2lHLFNBQTdDLEVBQXdELElBQXhEO0FBQ0g7O0FBQ0Q7O0FBQ0osV0FBS3BHLFlBQVksQ0FBQzJKLE1BQWxCO0FBQ0ksWUFBSXpKLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxSSxLQUF0QyxFQUE0QztBQUN4QyxlQUFLNUgsWUFBTCxDQUFrQnNJLFNBQWxCLENBQTRCRixJQUE1Qjs7QUFDQSxlQUFLdkYsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ3VHLFVBQTdDLEVBQXlELElBQXpEO0FBQ0gsU0FIRCxNQUdPLElBQUl4RyxRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUUsTUFBdEMsRUFBNkM7QUFDaEQsZUFBSzVELFlBQUwsQ0FBa0JzSSxTQUFsQixDQUE0QkYsSUFBNUI7O0FBQ0EsZUFBS3ZGLFNBQUwsQ0FBZStELFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JqSCxhQUFhLENBQUM0RyxXQUE3QyxFQUEwRCxJQUExRDtBQUNILFNBSE0sTUFHQTtBQUNILGVBQUt2RyxZQUFMLENBQWtCc0ksU0FBbEIsQ0FBNEJGLElBQTVCOztBQUNBLGVBQUt2RixTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDa0csV0FBN0MsRUFBMEQsSUFBMUQ7QUFDSDs7QUFDRDs7QUFDSixXQUFLckcsWUFBWSxDQUFDNEosUUFBbEI7QUFDSSxZQUFJMUosUUFBUSxDQUFDaUUsU0FBVCxJQUFzQnBFLFdBQVcsQ0FBQ3FJLEtBQXRDLEVBQTRDO0FBQ3hDLGVBQUsvRSxTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDd0csVUFBN0MsRUFBeUQsSUFBekQ7QUFDSCxTQUZELE1BRU8sSUFBSXpHLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxRSxNQUF0QyxFQUE2QztBQUNoRCxlQUFLZixTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDNkcsV0FBN0MsRUFBMEQsSUFBMUQ7QUFDSCxTQUZNLE1BRUE7QUFDSCxlQUFLM0QsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ21HLFdBQTdDLEVBQTBELElBQTFEO0FBQ0g7O0FBQ0Q7O0FBQ0osV0FBS3RHLFlBQVksQ0FBQzZKLEtBQWxCO0FBQ0ksWUFBSTNKLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxSSxLQUF0QyxFQUE0QztBQUN4QyxlQUFLL0UsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ3lHLFVBQTdDLEVBQXlELElBQXpEO0FBQ0gsU0FGRCxNQUVPLElBQUkxRyxRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUUsTUFBdEMsRUFBNkM7QUFDaEQsZUFBS2YsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQzhHLFdBQTdDLEVBQTBELElBQTFEO0FBQ0gsU0FGTSxNQUVBO0FBQ0gsZUFBSzVELFNBQUwsQ0FBZStELFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JqSCxhQUFhLENBQUNvRyxXQUE3QyxFQUEwRCxJQUExRDtBQUNIOztBQUNEOztBQUNKLFdBQUt2RyxZQUFZLENBQUM2SixLQUFsQjtBQUNJLFlBQUkzSixRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUksS0FBdEMsRUFBNEM7QUFDeEMsZUFBSy9FLFNBQUwsQ0FBZStELFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JqSCxhQUFhLENBQUN5RyxVQUE3QyxFQUF5RCxJQUF6RDtBQUNILFNBRkQsTUFFTyxJQUFJMUcsUUFBUSxDQUFDaUUsU0FBVCxJQUFzQnBFLFdBQVcsQ0FBQ3FFLE1BQXRDLEVBQTZDO0FBQ2hELGVBQUtmLFNBQUwsQ0FBZStELFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JqSCxhQUFhLENBQUM4RyxXQUE3QyxFQUEwRCxJQUExRDtBQUNILFNBRk0sTUFFQTtBQUNILGVBQUs1RCxTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDb0csV0FBN0MsRUFBMEQsSUFBMUQ7QUFDSDs7QUFDRDtBQTVEUjs7QUErREEsU0FBS2MsYUFBTCxHQUFzQm5ILFFBQVEsQ0FBQ2dILFVBQS9CO0FBQ0gsR0FsaEJJO0FBb2hCTDhDLEVBQUFBLGNBcGhCSywwQkFvaEJVQyxPQXBoQlYsRUFvaEJtQkMsWUFwaEJuQixFQW9oQmlDQyxhQXBoQmpDLEVBb2hCK0M7QUFDaEQ7QUFDQSxRQUFHRCxZQUFZLENBQUNFLEdBQWIsSUFBb0IsQ0FBdkIsRUFBeUI7QUFDckIsV0FBS3JJLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLEdBemhCSTtBQTJoQkxtRSxFQUFBQSxNQTNoQkssa0JBMmhCRW1FLEtBM2hCRixFQTJoQlNDLEtBM2hCVCxFQTJoQmU7QUFDaEIsU0FBS2pILFNBQUwsQ0FBZTZDLE1BQWYsQ0FBc0JtRSxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0MsR0FBcEM7QUFDSCxHQTdoQkk7QUEraEJMN0YsRUFBQUEsWUEvaEJLLHdCQStoQlE4RixRQS9oQlIsRUEraEJpQjtBQUNsQixRQUFJQSxRQUFRLElBQUl6SyxRQUFRLENBQUM0RSxJQUF6QixFQUE4QjtBQUMxQnhFLE1BQUFBLFFBQVEsQ0FBQ2lFLFNBQVQsR0FBcUJwRSxXQUFXLENBQUN5SyxNQUFqQztBQUNILEtBRkQsTUFFTyxJQUFJRCxRQUFRLElBQUl6SyxRQUFRLENBQUNzSSxLQUF6QixFQUErQjtBQUNsQ2xJLE1BQUFBLFFBQVEsQ0FBQ2lFLFNBQVQsR0FBcUJwRSxXQUFXLENBQUNxSSxLQUFqQztBQUNBLFdBQUt0RixXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBS3ZDLFlBQUwsQ0FBa0JtRCxZQUFsQixDQUErQm5ELFlBQS9CLEVBQTZDa0ssUUFBN0M7QUFDQTlJLE1BQUFBLE1BQU0sQ0FBQytJLFlBQVAsR0FBc0IsSUFBdEI7QUFDQS9JLE1BQUFBLE1BQU0sQ0FBQ2dKLFlBQVAsR0FBc0IsS0FBdEI7QUFDQWhKLE1BQUFBLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixLQUFyQjtBQUNBLFdBQUtwQixZQUFMLENBQWtCb0ssWUFBbEIsQ0FBK0JoQyxJQUEvQjtBQUNBLFdBQUtwSCxTQUFMLENBQWVxSixNQUFmLEdBQXdCLElBQXhCO0FBQ0gsS0FUTSxNQVNBLElBQUlOLFFBQVEsSUFBSXpLLFFBQVEsQ0FBQ3NFLE1BQXpCLEVBQWdDO0FBQ25DbEUsTUFBQUEsUUFBUSxDQUFDaUUsU0FBVCxHQUFxQnBFLFdBQVcsQ0FBQ3FFLE1BQWpDO0FBQ0EsV0FBS3JCLFlBQUwsR0FBb0IsSUFBcEI7QUFDQXBCLE1BQUFBLE1BQU0sQ0FBQytJLFlBQVAsR0FBc0IsS0FBdEI7QUFDQS9JLE1BQUFBLE1BQU0sQ0FBQ2dKLFlBQVAsR0FBc0IsSUFBdEI7QUFDQWhKLE1BQUFBLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixLQUFyQjtBQUNBLFdBQUtyQixZQUFMLENBQWtCbUQsWUFBbEIsQ0FBK0JuRCxZQUEvQixFQUE2Q3VLLFNBQTdDO0FBQ0EsV0FBS3RLLFlBQUwsQ0FBa0JvSyxZQUFsQixDQUErQmhDLElBQS9CO0FBQ0EsV0FBS3BILFNBQUwsQ0FBZXFKLE1BQWYsR0FBd0IsS0FBeEI7QUFDSDs7QUFFRCxTQUFLRSxlQUFMO0FBQ0gsR0F2akJJO0FBeWpCTEEsRUFBQUEsZUF6akJLLDZCQXlqQlk7QUFDYnRLLElBQUFBLEVBQUUsQ0FBQzRILEdBQUgsQ0FBTyxhQUFQLEVBQXNCbkksUUFBUSxDQUFDaUUsU0FBL0I7QUFDQSxTQUFLa0QsYUFBTCxHQUFxQnJILFlBQVksQ0FBQzBFLElBQWxDOztBQUVBLFFBQUd4RSxRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUUsTUFBckMsRUFBNEM7QUFDeEMsV0FBS1AsYUFBTCxDQUFtQm1ILE9BQW5CLEdBQTZCLElBQTdCO0FBQ0EsV0FBS3BILFVBQUwsQ0FBZ0JvSCxPQUFoQixHQUEwQixLQUExQjtBQUNILEtBSEQsTUFHTztBQUNILFdBQUtuSCxhQUFMLENBQW1CbUgsT0FBbkIsR0FBNkIsS0FBN0I7QUFDQSxXQUFLcEgsVUFBTCxDQUFnQm9ILE9BQWhCLEdBQTBCLElBQTFCO0FBQ0g7QUFDSixHQXBrQkk7QUFza0JMQyxFQUFBQSxpQkF0a0JLLDZCQXNrQmFDLFNBdGtCYixFQXNrQndCQyxRQXRrQnhCLEVBc2tCa0M7QUFDbkMsU0FBS3RILGFBQUwsQ0FBbUJvSCxpQkFBbkIsQ0FBcUNDLFNBQXJDLEVBQWdEQyxRQUFoRDtBQUNILEdBeGtCSTtBQTBrQkxDLEVBQUFBLGtCQTFrQkssOEJBMGtCY0YsU0Exa0JkLEVBMGtCeUI7QUFDMUIsU0FBS3JILGFBQUwsQ0FBbUJ1SCxrQkFBbkIsQ0FBc0NGLFNBQXRDO0FBQ0gsR0E1a0JJO0FBOGtCTEcsRUFBQUEsR0E5a0JLLGVBOGtCREMsSUE5a0JDLEVBOGtCSTtBQUNMO0FBQ0EsUUFBRyxLQUFLekksUUFBUixFQUFrQjtBQUVsQixTQUFLdkMsU0FBTCxDQUFlaUwsU0FBZixDQUF5QkQsSUFBekI7QUFFQSxTQUFLckssYUFBTCxDQUFtQjJILElBQW5COztBQUVBLFFBQUcsQ0FBQyxLQUFLdEksU0FBTCxDQUFla0wsT0FBZixFQUFKLEVBQTZCO0FBQ3pCLFdBQUtDLEdBQUw7QUFDSDtBQUNKLEdBemxCSTtBQTJsQkxBLEVBQUFBLEdBM2xCSyxpQkEybEJBO0FBQ0QsU0FBSzVJLFFBQUwsR0FBZ0IsSUFBaEI7QUFFQSxTQUFLRixJQUFMLENBQVVlLFlBQVYsQ0FBdUJqRCxFQUFFLENBQUNpTCxXQUExQixFQUF1Q1YsT0FBdkMsR0FBaUQsS0FBakQ7O0FBRUEsUUFBSTlLLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxSSxLQUF0QyxFQUE0QztBQUN4QyxXQUFLL0UsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ3dMLFFBQTdDLEVBQXVELEtBQXZEO0FBQ0gsS0FGRCxNQUVPLElBQUl6TCxRQUFRLENBQUNpRSxTQUFULElBQXNCcEUsV0FBVyxDQUFDcUUsTUFBdEMsRUFBNkM7QUFDaEQsV0FBS2YsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ3lMLFNBQTdDLEVBQXdELEtBQXhEO0FBQ0gsS0FGTSxNQUVBO0FBQ0gsV0FBS3ZJLFNBQUwsQ0FBZStELFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0JqSCxhQUFhLENBQUMwTCxTQUE3QyxFQUF3RCxLQUF4RDtBQUNIOztBQUVEM0wsSUFBQUEsUUFBUSxDQUFDNEwsTUFBVCxHQUFrQixJQUFsQjtBQUNBLFNBQUt6QyxnQkFBTCxHQWRDLENBZ0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBcm5CSTtBQXVuQkwwQyxFQUFBQSxPQXZuQksscUJBdW5CSTtBQUNMLFNBQUtsSixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVUyxNQUFWLEdBQW1CLENBQW5CO0FBQ0EsU0FBS1QsSUFBTCxDQUFVZSxZQUFWLENBQXVCakQsRUFBRSxDQUFDaUwsV0FBMUIsRUFBdUNWLE9BQXZDLEdBQWlELElBQWpEO0FBQ0EsU0FBS3JJLElBQUwsQ0FBVXFKLFdBQVYsQ0FBc0IsS0FBS3RKLFdBQUwsQ0FBaUJnRyxDQUF2QyxFQUEwQyxLQUFLaEcsV0FBTCxDQUFpQnNHLENBQTNEO0FBRUEsU0FBSzFJLFNBQUwsQ0FBZXFFLElBQWYsQ0FBb0IxRSxLQUFLLENBQUMyRSxVQUExQjs7QUFFQSxRQUFJMUUsUUFBUSxDQUFDaUUsU0FBVCxJQUFzQnBFLFdBQVcsQ0FBQ3FJLEtBQXRDLEVBQTRDO0FBQ3hDLFdBQUsvRSxTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDcUcsU0FBN0MsRUFBd0QsSUFBeEQ7QUFDSCxLQUZELE1BRU8sSUFBSXRHLFFBQVEsQ0FBQ2lFLFNBQVQsSUFBc0JwRSxXQUFXLENBQUNxRSxNQUF0QyxFQUE2QztBQUNoRCxXQUFLZixTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDMEcsVUFBN0MsRUFBeUQsSUFBekQ7QUFDSCxLQUZNLE1BRUE7QUFDSCxXQUFLeEQsU0FBTCxDQUFlK0QsWUFBZixDQUE0QixDQUE1QixFQUErQmpILGFBQWEsQ0FBQ2dHLFVBQTdDLEVBQXlELElBQXpEO0FBQ0g7QUFDSixHQXRvQkk7QUF3b0JMOEYsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUdELEtBQUssQ0FBQ3ZKLElBQU4sQ0FBV3lKLEtBQVgsSUFBb0IsTUFBdkIsRUFBOEI7QUFDMUJDLE1BQUFBLE9BQU8sQ0FBQ2hFLEdBQVIsQ0FBWSxXQUFaO0FBRUEsV0FBS29ELEdBQUw7QUFDSDtBQUNKLEdBOW9CSTtBQWdwQkxsQyxFQUFBQSxHQWhwQkssaUJBZ3BCQTtBQUNELFNBQUsxRyxRQUFMLEdBQWdCLElBQWhCO0FBRUEsU0FBS0YsSUFBTCxDQUFVZSxZQUFWLENBQXVCakQsRUFBRSxDQUFDaUwsV0FBMUIsRUFBdUNWLE9BQXZDLEdBQWlELEtBQWpEOztBQUVBLFNBQUszSCxTQUFMLENBQWUrRCxZQUFmLENBQTRCLENBQTVCLEVBQStCakgsYUFBYSxDQUFDMEcsVUFBN0MsRUFBeUQsSUFBekQ7O0FBRUEzRyxJQUFBQSxRQUFRLENBQUNvSixLQUFULEdBQWlCLElBQWpCO0FBRUEsU0FBS0QsZ0JBQUw7QUFDSCxHQTFwQkk7QUE0cEJMQSxFQUFBQSxnQkE1cEJLLDhCQTRwQmE7QUFDZCxTQUFLN0ksWUFBTCxDQUFrQnNKLFFBQWxCLENBQTJCQyxJQUEzQjtBQUNBLFNBQUt2SixZQUFMLENBQWtCOEwsUUFBbEIsQ0FBMkIxRCxJQUEzQjtBQUNBeUQsSUFBQUEsT0FBTyxDQUFDaEUsR0FBUixDQUFZLGlDQUFaO0FBQ0ExRyxJQUFBQSxNQUFNLENBQUM0SyxPQUFQLElBQWtCNUssTUFBTSxDQUFDNEssT0FBUCxFQUFsQjtBQUVBLFNBQUsxRCxZQUFMLENBQWtCLFlBQVU7QUFDeEIzSSxNQUFBQSxRQUFRLENBQUNzTSxrQkFBVCxHQUE4QixJQUE5QjtBQUNILEtBRkQsRUFFRyxDQUZIO0FBR0g7QUFycUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRW5GYWNpbmcsIEVuV2VhcG9uLCBFblN0aWNrTW9kZSwgRW5TdGlja1N0YXRlIH0gPSByZXF1aXJlKFwiR2FtZUVudW1cIik7XHJcbmNvbnN0IENPTlNUID0gcmVxdWlyZShcIkNPTlNUXCIpO1xyXG52YXIgR2FtZUluZm8gPSByZXF1aXJlKFwiR2FtZUluZm9cIik7XHJcbnZhciBBbmltTmFtZVN0aWNrID0gcmVxdWlyZShcIkFuaW1OYW1lU3RpY2tcIik7XHJcbnZhciBIaXRDb21ib3MgPSByZXF1aXJlKFwiSGl0Q29tYm9zXCIpO1xyXG52YXIgQXJjaGVyQ29tYm9zID0gcmVxdWlyZShcIkFyY2hlckNvbWJvc1wiKTtcclxudmFyIEhlYWx0aEJhciA9IHJlcXVpcmUoXCJIZWFsdGhCYXJcIik7XHJcbnZhciBCdXR0b25BdHRhY2sgPSByZXF1aXJlKFwiQnV0dG9uQXR0YWNrXCIpO1xyXG52YXIgQXVkaW9NYW5hZ2VyID0gcmVxdWlyZShcIkF1ZGlvTWFuYWdlclwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgU3BlZWQgOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOiA3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSGVhbHRoQmFyOiBIZWFsdGhCYXIsXHJcblxyXG4gICAgICAgIC8vIFBhcnRpY2xlIGVmZmVjdFxyXG4gICAgICAgIER1c3RQYXJ0aWNsZTogY2MuUGFydGljbGVTeXN0ZW0zRCxcclxuICAgICAgICBEYXNoUGFydGljbGU6IGNjLlBhcnRpY2xlU3lzdGVtM0QsXHJcbiAgICAgICAgQmxvb2RQYXJ0aWNsZTogY2MuUGFydGljbGVTeXN0ZW0zRCxcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uIEJ1dHRvbiBJbnB1dFxyXG4gICAgICAgIEN1c3RvbWVNb3ZlQkc6IGNjLk5vZGUsXHJcbiAgICAgICAgQnV0dG9uTGVmdDogY2MuTm9kZSxcclxuICAgICAgICBCdXR0b25SaWdodDogY2MuTm9kZSxcclxuICAgICAgICBCdXR0b25BdHRhY2s6IGNjLk5vZGUsXHJcbiAgICAgICAgQnV0dG9uSnVtcDogY2MuTm9kZSxcclxuICAgICAgICBCdXR0b25EYXNoOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICAvLyBEaEhpZXBwXHJcbiAgICAgICAgZmFrZVN3b3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIEF1ZGlvTWFuYWdlcjogQXVkaW9NYW5hZ2VyLFxyXG4gICAgICAgIGdhbWVDb250cm9sbGVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIC8vIEJ1dHRvbiBXZWFwb24gU2lkZVxyXG4gICAgICAgIC8vIEJ1dHRvblN3b3JkOiBjYy5Ob2RlLFxyXG4gICAgICAgIC8vIEJ1dHRvbkFyY2hlcjogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyBJbml0IFZhcmlhYmxlXHJcbiAgICAgICAgd2luZG93LmlzVXNpbmdGaXN0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3JpZ2luU2NhbGVYID0gMTtcclxuICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMDtcclxuICAgICAgICB0aGlzLl9vblRoZUdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2p1bXBDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5faXNEYXNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5TWF4WCA9IDEyMDtcclxuICAgICAgICB0aGlzLl92ZWxvY2l0eU1heFkgPSAxMjA7XHJcblxyXG4gICAgICAgIHRoaXMuX3J1bkZvcmNlID0gMzUwMDtcclxuICAgICAgICB0aGlzLl9qdW1wRm9yY2UgPSAyMTAwMDtcclxuICAgICAgICB0aGlzLl9qdW1wRm9yY2UyID0gMjUwMDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2Rhc2hGb3JjZSA9IDEwMDAwO1xyXG5cclxuICAgICAgICB0aGlzLl9ydW5Gb3JjZU9uQXR0YWNrID0gMzAwO1xyXG4gICAgICAgIHRoaXMuX3ZlbG9jaXR5TWF4WE9uQXR0YWNrID0gMjU7XHJcblxyXG4gICAgICAgIHRoaXMuX2NoZWNrUG9pbnQgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNEZWF0aCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9pc0hhc1N3b3JkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzSGFzQXJjaGVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX251bURlYXRoID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fbGFzdElucHV0TW92ZUhvcml6b250YWwgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1dpbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudEFjdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCBkZWZhdWx0IHZhcmlhYmxlXHJcbiAgICAgICAgdGhpcy5fb3JpZ2luU2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5Qb3B1cEluc3RhbGwuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uID0gdGhpcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLl9yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5faGl0Q29tYm9zID0gdGhpcy5nZXRDb21wb25lbnQoSGl0Q29tYm9zKTtcclxuICAgICAgICB0aGlzLl9hcmNoZXJDb21ib3MgPSB0aGlzLmdldENvbXBvbmVudChBcmNoZXJDb21ib3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRTdGFydExpc3RlbmVyKHRyYWNrRW50cnkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IHRyYWNrRW50cnkuYW5pbWF0aW9uID8gdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5BcmNoZXIpIHRoaXMuX2FyY2hlckNvbWJvcy5vblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuX2hpdENvbWJvcy5vblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25OYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcclxuICAgICAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcikgdGhpcy5fYXJjaGVyQ29tYm9zLm9uQ29tcGxldGVBbmltYXRpb24oYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5faGl0Q29tYm9zLm9uQ29tcGxldGVBbmltYXRpb24oYW5pbWF0aW9uTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWl4QW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLk5vbmUpO1xyXG5cclxuICAgICAgICB0aGlzLkhlYWx0aEJhci5pbml0KENPTlNULlN0aWNrTWF4SFApO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0RXZlbnRBY3Rpb24oKXtcclxuICAgICAgICAvLyBJbml0IEV2ZW50c1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleVByZXNzZWQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlSZWxlYXNlZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IEJ1dHRvbiBNb3ZlIExlZnRcclxuICAgICAgICB0aGlzLkJ1dHRvbkxlZnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcCgpO1xyXG4gICAgICAgICAgICB0aGlzLl90aWNrSGFmdCA9IDA7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uTGVmdCkudG8oMC4yLCB7c2NhbGUgOiAwLjl9LCB0aGlzKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGFzdElucHV0TW92ZUhvcml6b250YWwgPSAtMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlyb25zb3VyY2VcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uTGVmdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uTGVmdCkudG8oMC4yLCB7c2NhbGUgOiAxfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5CdXR0b25MZWZ0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMDtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5CdXR0b25MZWZ0KS50bygwLjIsIHtzY2FsZSA6IDF9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBCdXR0b24gTW92ZSBSaWdodFxyXG4gICAgICAgIHRoaXMuQnV0dG9uUmlnaHQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fdGlja0hhZnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZsaXAoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5CdXR0b25SaWdodCkudG8oMC4yLCB7c2NhbGUgOiAwLjl9LCB0aGlzKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGFzdElucHV0TW92ZUhvcml6b250YWwgPSAxO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5CdXR0b25SaWdodC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IDA7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uUmlnaHQpLnRvKDAuMiwge3NjYWxlIDogMX0sIHRoaXMpLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uUmlnaHQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgPSAwO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLkJ1dHRvblJpZ2h0KS50bygwLjIsIHtzY2FsZSA6IDF9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkN1c3RvbWVNb3ZlQkcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IHRoaXMuX2xhc3RJbnB1dE1vdmVIb3Jpem9udGFsO1xyXG4gICAgICAgIC8vIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLkN1c3RvbWVNb3ZlQkcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgPSAwO1xyXG4gICAgICAgIC8vIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBCdXR0b24gQXR0YWNrXHJcbiAgICAgICAgdGhpcy5CdXR0b25BdHRhY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uQXR0YWNrKS50bygwLjIsIHtzY2FsZSA6IDAuOX0sIHRoaXMpLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uSnVtcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVDb250cm9sbGVyLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpLmhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKTtcclxuICAgICAgICAgICAgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uSnVtcCkudG8oMC4yLCB7c2NhbGUgOiAwLjl9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkJ1dHRvbkRhc2gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lQ29udHJvbGxlci5nZXRDb21wb25lbnQoXCJHYW1lQ29udHJvbGxlclwiKS5oYW5kbGVJcm9uU291cmNlUGxheVNvdW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLkJ1dHRvbkRhc2gpLnRvKDAuMiwge3NjYWxlIDogMC45fSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5CdXR0b25BdHRhY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uQXR0YWNrKS50bygwLjIsIHtzY2FsZSA6IDF9LCB0aGlzKS5zdGFydCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkJ1dHRvbkp1bXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcCgpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLkJ1dHRvbkp1bXApLnRvKDAuMiwge3NjYWxlIDogMX0sIHRoaXMpLnN0YXJ0KCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnV0dG9uRGFzaC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuQnV0dG9uRGFzaCkudG8oMC4yLCB7c2NhbGUgOiAxfSwgdGhpcykuc3RhcnQoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEV2ZW50IENoYW5nZSBXZWFwb25cclxuICAgICAgICAvLyB0aGlzLkJ1dHRvblN3b3JkLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2hhbmdlV2VhcG9uQnV0dG9uKEVuV2VhcG9uLlN3b3JkKTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5CdXR0b25BcmNoZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAvLyAgICAgdGhpcy5jaGFuZ2VXZWFwb25CdXR0b24oRW5XZWFwb24uQXJjaGVyKTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0TWl4QW5pbWF0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxJZGxlLCBBbmltTmFtZVN0aWNrLk5vcm1hbFJ1bik7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxJZGxlLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbElkbGUsIEFuaW1OYW1lU3RpY2suTm9ybWFsSnVtcEMpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suTm9ybWFsSWRsZSwgQW5pbU5hbWVTdGljay5Ob3JtYWxEYXNoQSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suTm9ybWFsUnVuLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbFJ1biwgQW5pbU5hbWVTdGljay5Ob3JtYWxKdW1wQyk7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxSdW4sIEFuaW1OYW1lU3RpY2suTm9ybWFsRGFzaEEpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBDKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Ob3JtYWxKdW1wQiwgQW5pbU5hbWVTdGljay5Ob3JtYWxKdW1wQyk7XHJcblxyXG4gICAgICAgIC8vIE1peCBTd29yZCBBbmltXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZElkbGUsIEFuaW1OYW1lU3RpY2suU3dvcmRSdW4pO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRJZGxlLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRJZGxlLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEMpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRJZGxlLCBBbmltTmFtZVN0aWNrLlN3b3JkRGFzaEEpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLlN3b3JkUnVuLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmRSdW4sIEFuaW1OYW1lU3RpY2suU3dvcmRKdW1wQyk7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZFJ1biwgQW5pbU5hbWVTdGljay5Td29yZERhc2hBKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZERhc2hBLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suU3dvcmREYXNoQSwgQW5pbU5hbWVTdGljay5Td29yZEp1bXBDKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5Td29yZEp1bXBCLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEMpO1xyXG5cclxuICAgICAgICAvLyBNaXggQXJjaGVyIEFuaW1cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIEFuaW1OYW1lU3RpY2suQXJjaGVyUnVuKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVySWRsZSwgQW5pbU5hbWVTdGljay5BcmNoZXJKdW1wQyk7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5BcmNoZXJJZGxlLCBBbmltTmFtZVN0aWNrLkFyY2hlckRhc2hBKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaXgoQW5pbU5hbWVTdGljay5BcmNoZXJSdW4sIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVyUnVuLCBBbmltTmFtZVN0aWNrLkFyY2hlckp1bXBDKTtcclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlclJ1biwgQW5pbU5hbWVTdGljay5BcmNoZXJEYXNoQSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVyRGFzaEEsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KEFuaW1OYW1lU3RpY2suQXJjaGVyRGFzaEEsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEMpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1peChBbmltTmFtZVN0aWNrLkFyY2hlckp1bXBCLCBBbmltTmFtZVN0aWNrLkFyY2hlckp1bXBDKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIEdhbWVJbmZvLlN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGUuSWRsZTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suTm9ybWFsSWRsZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gRW5TdGlja1N0YXRlLklkbGU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5UHJlc3NlZChldmVudCl7XHJcblxyXG4gICAgICAgIGxldCBrZXlfY29kZSA9IGV2ZW50LmtleUNvZGU7XHJcblxyXG4gICAgICAgIHN3aXRjaChrZXlfY29kZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGlja0hhZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGlwKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpY2tIYWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxpcCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnVwOlxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhc2goKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2soKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5UmVsZWFzZWQoZXZlbnQpe1xyXG5cclxuICAgICAgICBsZXQga2V5X2NvZGUgPSBldmVudC5rZXlDb2RlO1xyXG5cclxuICAgICAgICBzd2l0Y2goa2V5X2NvZGUpe1xyXG5cclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICBHYW1lSW5mby5JbnB1dE1vdmVIb3Jpem9udGFsID0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VXZWFwb25CdXR0b24od2VhcG9uVHlwZSl7XHJcbiAgICAgICAgaWYod2VhcG9uVHlwZSA9PSBFbldlYXBvbi5Td29yZCl7XHJcbiAgICAgICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5Td29yZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVdlYXBvbihFbldlYXBvbi5Ob25lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lzSGFzU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLlN3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiTm8gU3dvcmQgRm91bmQhISFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYod2VhcG9uVHlwZSA9PSBFbldlYXBvbi5BcmNoZXIpe1xyXG4gICAgICAgICAgICBpZihHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLk5vbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5faXNIYXNBcmNoZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlV2VhcG9uKEVuV2VhcG9uLkFyY2hlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIk5vIFN3b3JkIEZvdW5kISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhdHRhY2soKXtcclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX2FyY2hlckNvbWJvcy5vbkNsaWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faGl0Q29tYm9zLm9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGp1bXAoKXtcclxuICAgICAgICAvLyBKdW1wXHJcbiAgICAgICAgaWYodGhpcy5faXNEZWF0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9pc0Rhc2hpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5fb25UaGVHcm91bmQpe1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZlbG9jaXR5LngsIC0xMDApO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJGaXJzdCBKdW1wXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkuYXBwbHlGb3JjZVRvQ2VudGVyKCBjYy52MigwLHRoaXMuX2p1bXBGb3JjZSkgLCB0cnVlICk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uVGhlR3JvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkR1c3RQYXJ0aWNsZS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2p1bXBDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIH0sIDAuMTUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fb25UaGVHcm91bmQgJiYgdGhpcy5fanVtcENvdW50ID09IDEpe1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZlbG9jaXR5LngsIC0xMDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZWNvbmQgSnVtcCBcIiArIHZlbG9jaXR5KTtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlciggY2MudjIoMCx0aGlzLl9qdW1wRm9yY2UyKSAsIHRydWUgKTtcclxuICAgICAgICAgICAgdGhpcy5fb25UaGVHcm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fanVtcENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuRHVzdFBhcnRpY2xlLnBsYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGFzaCgpe1xyXG4gICAgICAgIC8vIERhc2hcclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuZGFzaFNvdW5kLnBsYXkoKTtcclxuICAgICAgICB0aGlzLl9pc0Rhc2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JpZ2lkQm9keS5hcHBseUZvcmNlVG9DZW50ZXIoIGNjLnYyKHRoaXMuX2Rhc2hGb3JjZSAqIDMgKiB0aGlzLm5vZGUuc2NhbGVYLCAwKSAsIHRydWUgKTtcclxuICAgICAgICB0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gMC41O1xyXG5cclxuICAgICAgICB0aGlzLkRhc2hQYXJ0aWNsZS5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Rhc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgdmVsb2NpdHkueSk7XHJcbiAgICAgICAgfSwgMC4yNSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZsaXAoKXtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5fb3JpZ2luU2NhbGVYICogR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbDtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzRGVhdGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoR2FtZUluZm8uVG90YWxFbmVteUFsaXZlIDw9IDEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UG9wdXBJbnN0YWxsKCk7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5faXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0RlYXRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBsZXQgbGluZWFyVmVsb2NpdHkgPSB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS54ICs9IHRoaXMuU3BlZWQgKiAxMCAqIGR0ICogR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbDtcclxuICAgICAgICAvLyBjYy5sb2coXCJJcyBBdHRhY2sgQ29tYm86IFwiLCB0aGlzLl9oaXRDb21ib3MuSXNPbkF0dGFja0NvbWJvKTtcclxuICAgICAgICBpZih0aGlzLl9oaXRDb21ib3MuSXNPbkF0dGFja0NvbWJvIHx8IHRoaXMuX2FyY2hlckNvbWJvcy5Jc09uQXR0YWNraW5nKXtcclxuICAgICAgICAgICAgLy8gRm9yY2UgU2xvdyB3aGVuIG9uIGF0dGFjayBjb21ib1xyXG4gICAgICAgICAgICBpZiggKCF0aGlzLl9pc0Rhc2hpbmcgJiYgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA+IDAgJiYgbGluZWFyVmVsb2NpdHkueCA8IHRoaXMuX3ZlbG9jaXR5TWF4WE9uQXR0YWNrKSB8fCAoR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA8IDAgJiYgbGluZWFyVmVsb2NpdHkueCA+IC10aGlzLl92ZWxvY2l0eU1heFhPbkF0dGFjaykgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5hcHBseUZvcmNlVG9DZW50ZXIoIGNjLnYyKEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgKiB0aGlzLl9ydW5Gb3JjZU9uQXR0YWNrLCAwKSAsIHRydWUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEZvcmNlIE5vcm1hbCB3aGVuIG9uIGF0dGFjayBjb21ib1xyXG4gICAgICAgICAgICBpZiggKCF0aGlzLl9pc0Rhc2hpbmcgJiYgR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCA+IDAgJiYgbGluZWFyVmVsb2NpdHkueCA8IHRoaXMuX3ZlbG9jaXR5TWF4WCkgfHwgKEdhbWVJbmZvLklucHV0TW92ZUhvcml6b250YWwgPCAwICYmIGxpbmVhclZlbG9jaXR5LnggPiAtdGhpcy5fdmVsb2NpdHlNYXhYKSApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmFwcGx5Rm9yY2VUb0NlbnRlciggY2MudjIoR2FtZUluZm8uSW5wdXRNb3ZlSG9yaXpvbnRhbCAqIHRoaXMuX3J1bkZvcmNlLCAwKSAsIHRydWUgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobGluZWFyVmVsb2NpdHkueCA+IDAuMDEgfHwgbGluZWFyVmVsb2NpdHkueCA8IC0wLjAxKXtcclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5SdW47XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX3RpY2tIYWZ0IDw9IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EdXN0UGFydGljbGUucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGlja0hhZnQgPSAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3RpY2tIYWZ0IC09IGR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobGluZWFyVmVsb2NpdHkueSA+IDAuMDEpICBHYW1lSW5mby5TdGlja1N0YXRlID0gRW5TdGlja1N0YXRlLkp1bXBVcDtcclxuICAgICAgICBlbHNlIGlmKGxpbmVhclZlbG9jaXR5LnkgPCAtMC4wMSkgIEdhbWVJbmZvLlN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGUuSnVtcERvd247XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX2lzRGFzaGluZykgIEdhbWVJbmZvLlN0aWNrU3RhdGUgPSBFblN0aWNrU3RhdGUuRGFzaEE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobGluZWFyVmVsb2NpdHkueCA8PSAwLjAxICYmIGxpbmVhclZlbG9jaXR5LnggPj0gLTAuMDFcclxuICAgICAgICAmJiBsaW5lYXJWZWxvY2l0eS55IDw9IDAuMDEgJiYgbGluZWFyVmVsb2NpdHkueSA+PSAtMC4wMSkge1xyXG5cclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5ydW5Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBpZighdGhpcy5faXNXaW4gJiYgR2FtZUluZm8uVG90YWxFbmVteUFsaXZlIDw9IDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9pc1dpbiA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMud2luKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVBbmltYXRpb24oKXtcclxuICAgICAgICBpZih0aGlzLl9jdXJyZW50U3RhdGUgPT0gIEdhbWVJbmZvLlN0aWNrU3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5faGl0Q29tYm9zLklzT25BdHRhY2tDb21ibykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCggR2FtZUluZm8uU3RpY2tTdGF0ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgRW5TdGlja1N0YXRlLklkbGU6XHJcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLlN3b3JkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Td29yZElkbGUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJJZGxlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suTm9ybWFsSWRsZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFblN0aWNrU3RhdGUuUnVuOlxyXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5Td29yZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucnVuU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkUnVuLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucnVuU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlclJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnJ1blNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Ob3JtYWxSdW4sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW5TdGlja1N0YXRlLkp1bXBVcDpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmRhc2hTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suU3dvcmRKdW1wQiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5BcmNoZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmRhc2hTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suQXJjaGVySnVtcEIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5kYXNoU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBCLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuU3RpY2tTdGF0ZS5KdW1wRG93bjpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkSnVtcEMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJKdW1wQywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbEp1bXBDLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuU3RpY2tTdGF0ZS5EYXNoQTpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkRGFzaEEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJEYXNoQSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVuU3RpY2tTdGF0ZS5EYXNoQTpcclxuICAgICAgICAgICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkRGFzaEEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJEYXNoQSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbERhc2hBLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gIEdhbWVJbmZvLlN0aWNrU3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJCZWdpbiBDb250YWN0OiBcIiArIHNlbGZDb2xsaWRlci50YWcpO1xyXG4gICAgICAgIGlmKHNlbGZDb2xsaWRlci50YWcgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuX29uVGhlR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldE1peChhbmltMSwgYW5pbTIpe1xyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNldE1peChhbmltMSwgYW5pbTIsIDAuMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZVdlYXBvbih3ZWFwb25JZCl7XHJcbiAgICAgICAgaWYgKHdlYXBvbklkID09IEVuV2VhcG9uLk5vbmUpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5TdGlja01vZGUgPSBFblN0aWNrTW9kZS5Ob3JtYWw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3ZWFwb25JZCA9PSBFbldlYXBvbi5Td29yZCl7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLlN0aWNrTW9kZSA9IEVuU3RpY2tNb2RlLlN3b3JkO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0hhc1N3b3JkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5CdXR0b25BdHRhY2suZ2V0Q29tcG9uZW50KEJ1dHRvbkF0dGFjaykuc2V0U3dvcmQoKTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdTd29yZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5pc1VzaW5nQXJyb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdGaXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmdldEl0ZW1Tb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmFrZVN3b3JkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3ZWFwb25JZCA9PSBFbldlYXBvbi5BcmNoZXIpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5TdGlja01vZGUgPSBFblN0aWNrTW9kZS5BcmNoZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzSGFzQXJjaGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdTd29yZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aW5kb3cuaXNVc2luZ0Fycm93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2luZG93LmlzVXNpbmdGaXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQnV0dG9uQXR0YWNrLmdldENvbXBvbmVudChCdXR0b25BdHRhY2spLnNldEFyY2hlcigpO1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5nZXRJdGVtU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZha2VTd29yZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VGaWdodE1vZGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlRmlnaHRNb2RlKCl7XHJcbiAgICAgICAgY2MubG9nKFwiRmlnaHQgTW9kZSBcIiwgR2FtZUluZm8uU3RpY2tNb2RlKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSBFblN0aWNrU3RhdGUuTm9uZTtcclxuXHJcbiAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX2FyY2hlckNvbWJvcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5faGl0Q29tYm9zLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hcmNoZXJDb21ib3MuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9oaXRDb21ib3MuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGVja05lYXJlc3RFbmVteShlbmVteU5vZGUsIGRpc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5fYXJjaGVyQ29tYm9zLmNoZWNrTmVhcmVzdEVuZW15KGVuZW15Tm9kZSwgZGlzdGFuY2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVOZWFyZXN0RW5lbXkoZW5lbXlOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5fYXJjaGVyQ29tYm9zLnJlbW92ZU5lYXJlc3RFbmVteShlbmVteU5vZGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaXQoZGFtcCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJIaXQgUGxheWVyIFwiLCBkYW1wKTtcclxuICAgICAgICBpZih0aGlzLl9pc0RlYXRoKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLmRlY3JlbWVudChkYW1wKTtcclxuXHJcbiAgICAgICAgdGhpcy5CbG9vZFBhcnRpY2xlLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuSGVhbHRoQmFyLmlzQWxpdmUoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGllKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkaWUoKXtcclxuICAgICAgICB0aGlzLl9pc0RlYXRoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLlN3b3JkKXtcclxuICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suU3dvcmREaWUsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5BcmNoZXIpe1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJEaWUsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Ob3JtYWxEaWUsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdhbWVJbmZvLmlzTG9zZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93UG9wdXBJbnN0YWxsKCk7XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMuX251bURlYXRoIDwgQ09OU1QuTnVtRGVhdGhTaG93SW5zdGFsbCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlc3Bhd24oKTtcclxuICAgICAgICAvLyAgICAgfSwgMik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX251bURlYXRoICs9IDE7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgR2FtZUluZm8uaXNMb3NlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zaG93UG9wdXBJbnN0YWxsKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICByZXNwYXduKCl7XHJcbiAgICAgICAgdGhpcy5faXNEZWF0aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9jaGVja1BvaW50LngsIHRoaXMuX2NoZWNrUG9pbnQueSk7XHJcblxyXG4gICAgICAgIHRoaXMuSGVhbHRoQmFyLmluaXQoQ09OU1QuU3RpY2tNYXhIUCk7XHJcblxyXG4gICAgICAgIGlmIChHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Td29yZElkbGUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcil7XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbElkbGUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlRyYXBcIil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFsbCBUcmFwXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHdpbigpe1xyXG4gICAgICAgIHRoaXMuX2lzRGVhdGggPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlcklkbGUsIHRydWUpO1xyXG5cclxuICAgICAgICBHYW1lSW5mby5pc1dpbiA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1BvcHVwSW5zdGFsbCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93UG9wdXBJbnN0YWxsKCl7XHJcbiAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIucnVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLndpblNvdW5kLnBsYXkoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGwgV2luZG93IEVuZCAtIFBvcHVwIEluc3Rha2tcIik7XHJcbiAgICAgICAgd2luZG93LmdhbWVFbmQgJiYgd2luZG93LmdhbWVFbmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgR2FtZUluZm8uSXNTaG93UG9wdXBJbnN0YWxsID0gdHJ1ZTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Const/CONST.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0535cB2EtCyIpC33q8mUek', 'CONST');
// Script/Const/CONST.js

"use strict";

var IronSource = {
  // ironsource 
  SoundState: true,
  State: 1,
  isEndGame: false,
  isPlayBgSound: false
};
var CONST = {
  StickMaxHP: 600,
  StickBaseAttack: 150,
  ZombieSpeed: 5,
  ZombieFrequenceAttack: 2,
  ZombieMaxHP: 200,
  ZombieBaseAttack: 60,
  PoisonVineMaxHP: 300,
  PoisonVineBaseAttack: 50,
  TotalEnemyInGame: 8,
  MaxDistanceEnemyArcher: 400,
  StickArrowSpeed: 40,
  NumDeathShowInstall: 1,
  NumEnemyForStartStage2: 5,
  IronSource: IronSource
};
module.exports = CONST;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb25zdFxcQ09OU1QuanMiXSwibmFtZXMiOlsiSXJvblNvdXJjZSIsIlNvdW5kU3RhdGUiLCJTdGF0ZSIsImlzRW5kR2FtZSIsImlzUGxheUJnU291bmQiLCJDT05TVCIsIlN0aWNrTWF4SFAiLCJTdGlja0Jhc2VBdHRhY2siLCJab21iaWVTcGVlZCIsIlpvbWJpZUZyZXF1ZW5jZUF0dGFjayIsIlpvbWJpZU1heEhQIiwiWm9tYmllQmFzZUF0dGFjayIsIlBvaXNvblZpbmVNYXhIUCIsIlBvaXNvblZpbmVCYXNlQXR0YWNrIiwiVG90YWxFbmVteUluR2FtZSIsIk1heERpc3RhbmNlRW5lbXlBcmNoZXIiLCJTdGlja0Fycm93U3BlZWQiLCJOdW1EZWF0aFNob3dJbnN0YWxsIiwiTnVtRW5lbXlGb3JTdGFydFN0YWdlMiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2Y7QUFDQUMsRUFBQUEsVUFBVSxFQUFFLElBRkc7QUFHZkMsRUFBQUEsS0FBSyxFQUFFLENBSFE7QUFJZkMsRUFBQUEsU0FBUyxFQUFFLEtBSkk7QUFLZkMsRUFBQUEsYUFBYSxFQUFFO0FBTEEsQ0FBbkI7QUFRQSxJQUFJQyxLQUFLLEdBQUc7QUFDUkMsRUFBQUEsVUFBVSxFQUFFLEdBREo7QUFFUkMsRUFBQUEsZUFBZSxFQUFFLEdBRlQ7QUFJUkMsRUFBQUEsV0FBVyxFQUFFLENBSkw7QUFLUkMsRUFBQUEscUJBQXFCLEVBQUUsQ0FMZjtBQU1SQyxFQUFBQSxXQUFXLEVBQUUsR0FOTDtBQU9SQyxFQUFBQSxnQkFBZ0IsRUFBRSxFQVBWO0FBU1JDLEVBQUFBLGVBQWUsRUFBRSxHQVRUO0FBVVJDLEVBQUFBLG9CQUFvQixFQUFFLEVBVmQ7QUFZUkMsRUFBQUEsZ0JBQWdCLEVBQUUsQ0FaVjtBQWFSQyxFQUFBQSxzQkFBc0IsRUFBRSxHQWJoQjtBQWVSQyxFQUFBQSxlQUFlLEVBQUUsRUFmVDtBQWlCUkMsRUFBQUEsbUJBQW1CLEVBQUUsQ0FqQmI7QUFrQlJDLEVBQUFBLHNCQUFzQixFQUFFLENBbEJoQjtBQW1CUmxCLEVBQUFBLFVBQVUsRUFBRUE7QUFuQkosQ0FBWjtBQXNCQW1CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsS0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElyb25Tb3VyY2UgPSB7XHJcbiAgICAvLyBpcm9uc291cmNlIFxyXG4gICAgU291bmRTdGF0ZTogdHJ1ZSxcclxuICAgIFN0YXRlOiAxLFxyXG4gICAgaXNFbmRHYW1lOiBmYWxzZSxcclxuICAgIGlzUGxheUJnU291bmQ6IGZhbHNlLFxyXG59XHJcblxyXG52YXIgQ09OU1QgPSB7XHJcbiAgICBTdGlja01heEhQOiA2MDAsXHJcbiAgICBTdGlja0Jhc2VBdHRhY2s6IDE1MCxcclxuXHJcbiAgICBab21iaWVTcGVlZDogNSxcclxuICAgIFpvbWJpZUZyZXF1ZW5jZUF0dGFjazogMixcclxuICAgIFpvbWJpZU1heEhQOiAyMDAsXHJcbiAgICBab21iaWVCYXNlQXR0YWNrOiA2MCxcclxuXHJcbiAgICBQb2lzb25WaW5lTWF4SFA6IDMwMCxcclxuICAgIFBvaXNvblZpbmVCYXNlQXR0YWNrOiA1MCxcclxuXHJcbiAgICBUb3RhbEVuZW15SW5HYW1lOiA4LFxyXG4gICAgTWF4RGlzdGFuY2VFbmVteUFyY2hlcjogNDAwLFxyXG5cclxuICAgIFN0aWNrQXJyb3dTcGVlZDogNDAsXHJcblxyXG4gICAgTnVtRGVhdGhTaG93SW5zdGFsbDogMSxcclxuICAgIE51bUVuZW15Rm9yU3RhcnRTdGFnZTI6IDUsXHJcbiAgICBJcm9uU291cmNlOiBJcm9uU291cmNlLFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENPTlNUOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/HitCombos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32158LqwuVHXLm0PyOOKAvA', 'HitCombos');
// Script/Character/HitCombos.js

"use strict";

var _require = require("GameEnum"),
    EnStickState = _require.EnStickState,
    EnStickMode = _require.EnStickMode;

var AnimNameStick = require("AnimNameStick");

var GameInfo = require("GameInfo");

cc.Class({
  "extends": cc.Component,
  properties: {
    AttackBox: cc.Node,
    IsOnAttackCombo: {
      get: function get() {
        return this._isOnAttackCombo;
      }
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._maxTimeDelayCombos = 1;
    this._maxAttackCombos = 3;
    this._noOfClicks = 0;
    this._isOnAttackCombo = false;
    this._lastClickedTime = new Date();
    this._rigidBody = this.node.getComponent(cc.RigidBody);
    this._skeleton = this.getComponentInChildren(sp.Skeleton);
  },
  start: function start() {},
  // update (dt) {},
  onStartAnimation: function onStartAnimation(animationName) {
    if (GameInfo.StickMode == EnStickMode.Archer) return; // cc.log("animation name start ", animationName, this._noOfClicks);

    if (animationName == AnimNameStick.NormalJab1) {
      this.activeAttackBox(0.15);
    } else if (animationName == AnimNameStick.NormalKick1) {
      this.activeAttackBox(0.15);
    } else if (animationName == AnimNameStick.NormalKick2) {
      this.activeAttackBox(0.15);
    } // Check animation name sword
    else if (animationName == AnimNameStick.SwordAtk1) {
      this.activeAttackBox(0.15);
    } else if (animationName == AnimNameStick.SwordAtk2) {
      this.activeAttackBox(0.15);
    } else if (animationName == AnimNameStick.SwordAtk3) {
      this.activeAttackBox(0.15);
    }
  },
  activeAttackBox: function activeAttackBox(delayTime) {
    this.scheduleOnce(function () {
      this.AttackBox.active = true;
    }, delayTime);
  },
  onCompleteAnimation: function onCompleteAnimation(animationName) {
    if (GameInfo.StickMode == EnStickMode.Archer) return; // cc.log("animation name end ", animationName, this._noOfClicks);

    if (animationName == AnimNameStick.NormalJab1) {
      if (this._noOfClicks <= 1) {
        this.cancelAttack();
      } else {
        this.speedUpAnim(); // cc.log("Run Attack 2 Normal Kick");

        this._skeleton.setAnimation(0, AnimNameStick.NormalKick1, false);
      }
    } else if (animationName == AnimNameStick.NormalKick1) {
      if (this._noOfClicks <= 2) {
        this.cancelAttack();
      } else {
        this.speedUpAnim();

        this._skeleton.setAnimation(0, AnimNameStick.NormalKick2, false);
      }
    } else if (animationName == AnimNameStick.NormalKick2) {
      this.cancelAttack();
    } // Check animation name sword
    else if (animationName == AnimNameStick.SwordAtk1) {
      if (this._noOfClicks <= 1) {
        this.cancelAttack();
      } else {
        this.speedUpAnim();

        this._skeleton.setAnimation(0, AnimNameStick.SwordAtk2, false);
      }
    } else if (animationName == AnimNameStick.SwordAtk2) {
      if (this._noOfClicks <= 2) {
        this.cancelAttack();
      } else {
        this.speedUpAnim();

        this._skeleton.setAnimation(0, AnimNameStick.SwordAtk3, false);
      }
    } else if (animationName == AnimNameStick.SwordAtk3) {
      this.cancelAttack();
    }
  },
  onClick: function onClick() {
    if (GameInfo.StickMode == EnStickMode.Archer) return;
    this._lastClickedTime = new Date();
    this._noOfClicks += 1;

    if (this._noOfClicks == 1) {
      this.callFirstSkill();
    }

    if (this._noOfClicks > this._maxAttackCombos) this._noOfClicks = this._maxAttackCombos;
    this._isOnAttackCombo = true; // cc.log("On Click No Of Click ", this._noOfClicks);
  },
  callFirstSkill: function callFirstSkill() {
    // console.log("Call First Skill");
    if (GameInfo.StickMode == EnStickMode.Sword) {
      this._skeleton.setAnimation(0, AnimNameStick.SwordAtk1, false);

      this.speedUpAnim();
    } else {
      this._skeleton.setAnimation(0, AnimNameStick.NormalJab1, false);

      this.speedUpAnim();
    }
  },
  cancelAttack: function cancelAttack() {
    this.resetSpeedAnim();
    this._isOnAttackCombo = false;
    this._noOfClicks = 0;
    var linearVelocity = this._rigidBody.linearVelocity;

    if (linearVelocity.x > 0.01 || linearVelocity.x < -0.01) {
      GameInfo.StickState = EnStickState.Run;

      if (GameInfo.StickMode == EnStickMode.Sword) {
        this._skeleton.setAnimation(0, AnimNameStick.SwordRun, false);
      } else {
        this._skeleton.setAnimation(0, AnimNameStick.NormalRun, true);
      }
    } else {
      GameInfo.StickState = EnStickState.Idle;

      if (GameInfo.StickMode == EnStickMode.Sword) {
        this._skeleton.setAnimation(0, AnimNameStick.SwordIdle, false);
      } else {
        this._skeleton.setAnimation(0, AnimNameStick.NormalIdle, true);
      }
    }
  },
  speedUpAnim: function speedUpAnim() {
    this._skeleton.timeScale = 1.5;
  },
  resetSpeedAnim: function resetSpeedAnim() {
    this._skeleton.timeScale = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEhpdENvbWJvcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRW5TdGlja1N0YXRlIiwiRW5TdGlja01vZGUiLCJBbmltTmFtZVN0aWNrIiwiR2FtZUluZm8iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkF0dGFja0JveCIsIk5vZGUiLCJJc09uQXR0YWNrQ29tYm8iLCJnZXQiLCJfaXNPbkF0dGFja0NvbWJvIiwib25Mb2FkIiwiX21heFRpbWVEZWxheUNvbWJvcyIsIl9tYXhBdHRhY2tDb21ib3MiLCJfbm9PZkNsaWNrcyIsIl9sYXN0Q2xpY2tlZFRpbWUiLCJEYXRlIiwiX3JpZ2lkQm9keSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJfc2tlbGV0b24iLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwic3AiLCJTa2VsZXRvbiIsInN0YXJ0Iiwib25TdGFydEFuaW1hdGlvbiIsImFuaW1hdGlvbk5hbWUiLCJTdGlja01vZGUiLCJBcmNoZXIiLCJOb3JtYWxKYWIxIiwiYWN0aXZlQXR0YWNrQm94IiwiTm9ybWFsS2ljazEiLCJOb3JtYWxLaWNrMiIsIlN3b3JkQXRrMSIsIlN3b3JkQXRrMiIsIlN3b3JkQXRrMyIsImRlbGF5VGltZSIsInNjaGVkdWxlT25jZSIsImFjdGl2ZSIsIm9uQ29tcGxldGVBbmltYXRpb24iLCJjYW5jZWxBdHRhY2siLCJzcGVlZFVwQW5pbSIsInNldEFuaW1hdGlvbiIsIm9uQ2xpY2siLCJjYWxsRmlyc3RTa2lsbCIsIlN3b3JkIiwicmVzZXRTcGVlZEFuaW0iLCJsaW5lYXJWZWxvY2l0eSIsIngiLCJTdGlja1N0YXRlIiwiUnVuIiwiU3dvcmRSdW4iLCJOb3JtYWxSdW4iLCJJZGxlIiwiU3dvcmRJZGxlIiwiTm9ybWFsSWRsZSIsInRpbWVTY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxlQUFzQ0EsT0FBTyxD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a01vZGUgfSA9IHJlcXVpcmUoXCJHYW1lRW51bVwiKTtcclxudmFyIEFuaW1OYW1lU3RpY2sgPSByZXF1aXJlKFwiQW5pbU5hbWVTdGlja1wiKTtcclxudmFyIEdhbWVJbmZvID0gcmVxdWlyZShcIkdhbWVJbmZvXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBBdHRhY2tCb3g6IGNjLk5vZGUsXHJcbiAgICAgICAgSXNPbkF0dGFja0NvbWJvOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtyZXR1cm4gdGhpcy5faXNPbkF0dGFja0NvbWJvO31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5fbWF4VGltZURlbGF5Q29tYm9zID0gMTtcclxuICAgICAgICB0aGlzLl9tYXhBdHRhY2tDb21ib3MgPSAzO1xyXG4gICAgICAgIHRoaXMuX25vT2ZDbGlja3MgPSAwO1xyXG4gICAgICAgIHRoaXMuX2lzT25BdHRhY2tDb21ibyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2xhc3RDbGlja2VkVGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLl9za2VsZXRvbiA9IHRoaXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIG9uU3RhcnRBbmltYXRpb24oYW5pbWF0aW9uTmFtZSl7XHJcbiAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLkFyY2hlcikgcmV0dXJuO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcImFuaW1hdGlvbiBuYW1lIHN0YXJ0IFwiLCBhbmltYXRpb25OYW1lLCB0aGlzLl9ub09mQ2xpY2tzKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suTm9ybWFsSmFiMSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQXR0YWNrQm94KDAuMTUpO1xyXG4gICAgICAgIH0gZWxzZSBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suTm9ybWFsS2ljazEpe1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja0JveCgwLjE1KTtcclxuICAgICAgICB9IGVsc2UgaWYoYW5pbWF0aW9uTmFtZSA9PSBBbmltTmFtZVN0aWNrLk5vcm1hbEtpY2syKXtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVBdHRhY2tCb3goMC4xNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENoZWNrIGFuaW1hdGlvbiBuYW1lIHN3b3JkXHJcbiAgICAgICAgZWxzZSBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suU3dvcmRBdGsxKXtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVBdHRhY2tCb3goMC4xNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGFuaW1hdGlvbk5hbWUgPT0gQW5pbU5hbWVTdGljay5Td29yZEF0azIpe1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUF0dGFja0JveCgwLjE1KTtcclxuICAgICAgICB9IGVsc2UgaWYoYW5pbWF0aW9uTmFtZSA9PSBBbmltTmFtZVN0aWNrLlN3b3JkQXRrMyl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQXR0YWNrQm94KDAuMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgYWN0aXZlQXR0YWNrQm94KGRlbGF5VGltZSl7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXR0YWNrQm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSwgZGVsYXlUaW1lKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Db21wbGV0ZUFuaW1hdGlvbihhbmltYXRpb25OYW1lKXtcclxuICAgICAgICBpZihHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuQXJjaGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhcImFuaW1hdGlvbiBuYW1lIGVuZCBcIiwgYW5pbWF0aW9uTmFtZSwgdGhpcy5fbm9PZkNsaWNrcyk7XHJcbiAgICAgICAgaWYoYW5pbWF0aW9uTmFtZSA9PSBBbmltTmFtZVN0aWNrLk5vcm1hbEphYjEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9ub09mQ2xpY2tzIDw9IDEpe1xyXG4gICAgICAgICAgICAgICB0aGlzLmNhbmNlbEF0dGFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFVwQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwiUnVuIEF0dGFjayAyIE5vcm1hbCBLaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suTm9ybWFsS2ljazEsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suTm9ybWFsS2ljazEpe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9ub09mQ2xpY2tzIDw9IDIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxBdHRhY2soKTtcclxuICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkVXBBbmltKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Ob3JtYWxLaWNrMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suTm9ybWFsS2ljazIpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbEF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDaGVjayBhbmltYXRpb24gbmFtZSBzd29yZFxyXG4gICAgICAgIGVsc2UgaWYoYW5pbWF0aW9uTmFtZSA9PSBBbmltTmFtZVN0aWNrLlN3b3JkQXRrMSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX25vT2ZDbGlja3MgPD0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEF0dGFjaygpO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRVcEFuaW0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkQXRrMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suU3dvcmRBdGsyKXtcclxuICAgICAgICAgICAgaWYodGhpcy5fbm9PZkNsaWNrcyA8PSAyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQXR0YWNrKCk7XHJcbiAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFVwQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suU3dvcmRBdGszLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKGFuaW1hdGlvbk5hbWUgPT0gQW5pbU5hbWVTdGljay5Td29yZEF0azMpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbEF0dGFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSA9PSBFblN0aWNrTW9kZS5BcmNoZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fbGFzdENsaWNrZWRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLl9ub09mQ2xpY2tzICs9IDE7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX25vT2ZDbGlja3MgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEZpcnN0U2tpbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX25vT2ZDbGlja3MgPiB0aGlzLl9tYXhBdHRhY2tDb21ib3MpIHRoaXMuX25vT2ZDbGlja3MgPSB0aGlzLl9tYXhBdHRhY2tDb21ib3M7XHJcbiAgICAgICAgdGhpcy5faXNPbkF0dGFja0NvbWJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gY2MubG9nKFwiT24gQ2xpY2sgTm8gT2YgQ2xpY2sgXCIsIHRoaXMuX25vT2ZDbGlja3MpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYWxsRmlyc3RTa2lsbCgpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ2FsbCBGaXJzdCBTa2lsbFwiKTtcclxuICAgICAgICBpZihHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Td29yZEF0azEsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFVwQW5pbSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLk5vcm1hbEphYjEsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFVwQW5pbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2FuY2VsQXR0YWNrKCl7XHJcbiAgICAgICAgdGhpcy5yZXNldFNwZWVkQW5pbSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9pc09uQXR0YWNrQ29tYm8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9ub09mQ2xpY2tzID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVhclZlbG9jaXR5ID0gdGhpcy5fcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGlmIChsaW5lYXJWZWxvY2l0eS54ID4gMC4wMSB8fCBsaW5lYXJWZWxvY2l0eS54IDwgLTAuMDEpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5TdGlja1N0YXRlID0gRW5TdGlja1N0YXRlLlJ1bjtcclxuICAgICAgICAgICAgaWYoR2FtZUluZm8uU3RpY2tNb2RlID09IEVuU3RpY2tNb2RlLlN3b3JkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLlN3b3JkUnVuLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Ob3JtYWxSdW4sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICBpZihHYW1lSW5mby5TdGlja01vZGUgPT0gRW5TdGlja01vZGUuU3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suU3dvcmRJZGxlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5Ob3JtYWxJZGxlLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3BlZWRVcEFuaW0oKXtcclxuICAgICAgICB0aGlzLl9za2VsZXRvbi50aW1lU2NhbGUgPSAxLjU7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0U3BlZWRBbmltKCl7XHJcbiAgICAgICAgdGhpcy5fc2tlbGV0b24udGltZVNjYWxlID0gMTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controllers/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b971rSQ9pBYKEyKcsXS1Zx', 'GameController');
// Script/Controllers/GameController.js

"use strict";

var GameInfo = require("GameInfo");

var AudioManager = require("AudioManager");

var CONST = require("../Const/CONST");

cc.Class({
  "extends": cc.Component,
  properties: {
    InstallPopup: cc.Node,
    ChangeYourOrientation: cc.Node,
    AudioManager: AudioManager // Dhhiep

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true; // manager.enabledDebugDraw = true;

    var physics_manager = cc.director.getPhysicsManager();
    physics_manager.enabled = true;
    physics_manager.gravity = cc.v2(0, -2000);
    this._changeOrientation = false;
    this._lastOrientationIsLandscape = true;
  },
  start: function start() {
    var _this = this;

    // this.InstallPopup.active = false;
    window.gameReady && window.gameReady();
    this.AudioManager.bgSound.play();
    this.handleYourOrientation();
    cc.view.setResizeCallback(function () {
      _this.handleYourOrientation();
    });
  },
  handleIronSourcePlaySound: function handleIronSourcePlaySound() {
    if (CONST.IronSource.isPlayBgSound) {
      return;
    }

    if (CONST.IronSource.SoundState) {
      this.AudioManager.bgSound.play();
    }

    CONST.IronSource.isPlayBgSound = true;
  },
  handleMuteSoundIronSource: function handleMuteSoundIronSource() {
    CONST.IronSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10);

    if (CONST.IronSource.State) {
      if (CONST.IronSource.State === 1 && !CONST.IronSource.SoundState && !CONST.IronSource.isEndGame) {
        CONST.IronSource.SoundState = true;
        this.AudioManager.bgSound.play();
      }

      if (CONST.IronSource.State === 2 && CONST.IronSource.SoundState) {
        CONST.IronSource.SoundState = false;
        this.AudioManager.stopAllSound();
      }
    }
  },
  showPopupInstall: function showPopupInstall() {
    this.InstallPopup.active = true;
    this.InstallPopup.setPosition(0, 0);
  },
  // node build-inline.js unity
  handleYourOrientation: function handleYourOrientation() {
    if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
      this.ChangeYourOrientation.active = false;
      GameInfo.GamePause = false;
    } else {
      this.ChangeYourOrientation.active = true;
      GameInfo.GamePause = true;
    }
  },
  update: function update(dt) {
    if (window.isHitArrow) {
      window.isHitArrow = false;
      this.AudioManager.hitBowSound.play();
    } // ironsource
    // this.handleMuteSoundIronSource();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyc1xcR2FtZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiR2FtZUluZm8iLCJyZXF1aXJlIiwiQXVkaW9NYW5hZ2VyIiwiQ09OU1QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkluc3RhbGxQb3B1cCIsIk5vZGUiLCJDaGFuZ2VZb3VyT3JpZW50YXRpb24iLCJvbkxvYWQiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInBoeXNpY3NfbWFuYWdlciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZ3Jhdml0eSIsInYyIiwiX2NoYW5nZU9yaWVudGF0aW9uIiwiX2xhc3RPcmllbnRhdGlvbklzTGFuZHNjYXBlIiwic3RhcnQiLCJ3aW5kb3ciLCJnYW1lUmVhZHkiLCJiZ1NvdW5kIiwicGxheSIsImhhbmRsZVlvdXJPcmllbnRhdGlvbiIsInZpZXciLCJzZXRSZXNpemVDYWxsYmFjayIsImhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQiLCJJcm9uU291cmNlIiwiaXNQbGF5QmdTb3VuZCIsIlNvdW5kU3RhdGUiLCJoYW5kbGVNdXRlU291bmRJcm9uU291cmNlIiwiU3RhdGUiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpc0VuZEdhbWUiLCJzdG9wQWxsU291bmQiLCJzaG93UG9wdXBJbnN0YWxsIiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJnZXRGcmFtZVNpemUiLCJ3aWR0aCIsImhlaWdodCIsIkdhbWVQYXVzZSIsInVwZGF0ZSIsImR0IiwiaXNIaXRBcnJvdyIsImhpdEJvd1NvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUE1Qjs7QUFDQSxJQUFNRSxL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QW1FYTtBQUNkLFNBQUtqQyxZQUFMLENBQWtCa0MsTUFBbEIsR0FBMkIsSUFBM0I7QUFDQSxTQUFLbEMsWUFBTCxDQUFrQm1DLFdBQWxCLENBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBQ0gsR0F0RUk7QUF1RVQ7QUFDSWhCLEVBQUFBLHFCQXhFSyxtQ0F3RWtCO0FBQ25CLFFBQUd2QixFQUFFLENBQUN3QixJQUFILENBQVFnQixZQUFSLEdBQXVCQyxLQUF2QixHQUErQnpDLEVBQUUsQ0FBQ3dCLElBQUgsQ0FBUWdCLFlBQVIsR0FBdUJFLE1BQXpELEVBQWdFO0FBQzVELFdBQUtwQyxxQkFBTCxDQUEyQmdDLE1BQTNCLEdBQW9DLEtBQXBDO0FBQ0ExQyxNQUFBQSxRQUFRLENBQUMrQyxTQUFULEdBQXFCLEtBQXJCO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsV0FBS3JDLHFCQUFMLENBQTJCZ0MsTUFBM0IsR0FBb0MsSUFBcEM7QUFDQTFDLE1BQUFBLFFBQVEsQ0FBQytDLFNBQVQsR0FBcUIsSUFBckI7QUFDSDtBQUNKLEdBaEZJO0FBbUZMQyxFQUFBQSxNQW5GSyxrQkFtRkdDLEVBbkZILEVBbUZPO0FBQ1IsUUFBRzFCLE1BQU0sQ0FBQzJCLFVBQVYsRUFBc0I7QUFDbEIzQixNQUFBQSxNQUFNLENBQUMyQixVQUFQLEdBQW9CLEtBQXBCO0FBQ0EsV0FBS2hELFlBQUwsQ0FBa0JpRCxXQUFsQixDQUE4QnpCLElBQTlCO0FBQ0gsS0FKTyxDQU1SO0FBQ0E7O0FBQ0g7QUEzRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZUluZm8gPSByZXF1aXJlKFwiR2FtZUluZm9cIik7XHJcbmNvbnN0IEF1ZGlvTWFuYWdlciA9IHJlcXVpcmUoXCJBdWRpb01hbmFnZXJcIik7XHJcbmNvbnN0IENPTlNUID0gcmVxdWlyZShcIi4uL0NvbnN0L0NPTlNUXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBJbnN0YWxsUG9wdXA6IGNjLk5vZGUsXHJcbiAgICAgICAgQ2hhbmdlWW91ck9yaWVudGF0aW9uOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICBBdWRpb01hbmFnZXI6IEF1ZGlvTWFuYWdlcixcclxuICAgICAgICAvLyBEaGhpZXBcclxuICAgIH0sXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHBoeXNpY3NfbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKClcclxuICAgICAgICBwaHlzaWNzX21hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGh5c2ljc19tYW5hZ2VyLmdyYXZpdHkgPSBjYy52MiAoMCwgLTIwMDApO1xyXG5cclxuICAgICAgICB0aGlzLl9jaGFuZ2VPcmllbnRhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2xhc3RPcmllbnRhdGlvbklzTGFuZHNjYXBlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuSW5zdGFsbFBvcHVwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5nYW1lUmVhZHkgJiYgd2luZG93LmdhbWVSZWFkeSgpO1xyXG5cclxuICAgICAgICB0aGlzLkF1ZGlvTWFuYWdlci5iZ1NvdW5kLnBsYXkoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVlvdXJPcmllbnRhdGlvbigpO1xyXG5cclxuICAgICAgICBjYy52aWV3LnNldFJlc2l6ZUNhbGxiYWNrICgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVlvdXJPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgIGhhbmRsZUlyb25Tb3VyY2VQbGF5U291bmQoKSB7XHJcbiAgICAgICAgaWYgKENPTlNULklyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmIChDT05TVC5Jcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIENPTlNULklyb25Tb3VyY2UuaXNQbGF5QmdTb3VuZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpIHtcclxuICAgICAgICBDT05TVC5Jcm9uU291cmNlLlN0YXRlID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2Nvc1NvdW5kU3RhdGVcIiksIDEwKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKENPTlNULklyb25Tb3VyY2UuU3RhdGUpIHtcclxuICAgICAgICAgIGlmIChDT05TVC5Jcm9uU291cmNlLlN0YXRlID09PSAxICYmICFDT05TVC5Jcm9uU291cmNlLlNvdW5kU3RhdGUgJiYgIUNPTlNULklyb25Tb3VyY2UuaXNFbmRHYW1lKSB7XHJcbiAgICAgICAgICAgIENPTlNULklyb25Tb3VyY2UuU291bmRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLmJnU291bmQucGxheSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICBpZiAoQ09OU1QuSXJvblNvdXJjZS5TdGF0ZSA9PT0gMiAmJiBDT05TVC5Jcm9uU291cmNlLlNvdW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgQ09OU1QuSXJvblNvdXJjZS5Tb3VuZFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQXVkaW9NYW5hZ2VyLnN0b3BBbGxTb3VuZCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICBzaG93UG9wdXBJbnN0YWxsKCl7XHJcbiAgICAgICAgdGhpcy5JbnN0YWxsUG9wdXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkluc3RhbGxQb3B1cC5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgIH0sXHJcbi8vIG5vZGUgYnVpbGQtaW5saW5lLmpzIHVuaXR5XHJcbiAgICBoYW5kbGVZb3VyT3JpZW50YXRpb24oKXtcclxuICAgICAgICBpZihjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLkNoYW5nZVlvdXJPcmllbnRhdGlvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgR2FtZUluZm8uR2FtZVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5DaGFuZ2VZb3VyT3JpZW50YXRpb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgR2FtZUluZm8uR2FtZVBhdXNlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYod2luZG93LmlzSGl0QXJyb3cpIHtcclxuICAgICAgICAgICAgd2luZG93LmlzSGl0QXJyb3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5BdWRpb01hbmFnZXIuaGl0Qm93U291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaXJvbnNvdXJjZVxyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlTXV0ZVNvdW5kSXJvblNvdXJjZSgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyCollisionAttack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c1e5m3SxlExru99RiMp/tN', 'EnemyCollisionAttack');
// Script/Enemy/EnemyCollisionAttack.js

"use strict";

var Player3D = require("Player3D");

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {},
  onEnable: function onEnable() {
    this.scheduleOnce(function () {
      this.disableCollision();
    }, 0.15);
  },
  disableCollision: function disableCollision() {
    this.node.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      other.getComponent(Player3D).hit(CONST.ZombieBaseAttack);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlDb2xsaXNpb25BdHRhY2suanMiXSwibmFtZXMiOlsiUGxheWVyM0QiLCJyZXF1aXJlIiwiQ09OU1QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJvbkVuYWJsZSIsInNjaGVkdWxlT25jZSIsImRpc2FibGVDb2xsaXNpb24iLCJub2RlIiwiYWN0aXZlIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImdyb3VwIiwiZ2V0Q29tcG9uZW50IiwiaGl0IiwiWm9tYmllQmFzZUF0dGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDLE9BQUQsQ0FBckI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0ssQ0FFVCxDQVRJO0FBV0xDLEVBQUFBLEtBWEssbUJBV0ksQ0FFUixDQWJJO0FBZUxDLEVBQUFBLE1BZkssa0JBZUdDLEVBZkgsRUFlTyxDQUVYLENBakJJO0FBbUJMQyxFQUFBQSxRQW5CSyxzQkFtQk07QUFDUCxTQUFLQyxZQUFMLENBQWtCLFlBQVc7QUFDekIsV0FBS0MsZ0JBQUw7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUdILEdBdkJJO0FBeUJMQSxFQUFBQSxnQkF6QkssOEJBeUJhO0FBQ2QsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0EzQkk7QUE2QkxDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxRQUFHRCxLQUFLLENBQUNILElBQU4sQ0FBV0ssS0FBWCxJQUFvQixRQUF2QixFQUFnQztBQUM1QkYsTUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1CcEIsUUFBbkIsRUFBNkJxQixHQUE3QixDQUFpQ25CLEtBQUssQ0FBQ29CLGdCQUF2QztBQUNIO0FBQ0o7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllcjNEID0gcmVxdWlyZShcIlBsYXllcjNEXCIpO1xyXG5jb25zdCBDT05TVCA9IHJlcXVpcmUoXCJDT05TVFwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVDb2xsaXNpb24oKTtcclxuICAgICAgICB9LCAwLjE1KTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzYWJsZUNvbGxpc2lvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlBsYXllclwiKXtcclxuICAgICAgICAgICAgb3RoZXIuZ2V0Q29tcG9uZW50KFBsYXllcjNEKS5oaXQoQ09OU1QuWm9tYmllQmFzZUF0dGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controllers/UIGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '943a1fcjPZA0Lh/rcxbUNcu', 'UIGameController');
// Script/Controllers/UIGameController.js

"use strict";

var CONST = require("CONST");

var GameInfo = require("GameInfo");

cc.Class({
  "extends": cc.Component,
  properties: {
    FollowCamera: cc.Node,
    // Btn Move
    ButtonMoveLeft: {
      "default": null,
      type: cc.Button,
      serializable: true
    },
    ButtonMoveRight: {
      "default": null,
      type: cc.Button,
      serializable: true
    },
    // Btn Attack
    ButtonAttack: {
      "default": null,
      type: cc.Button,
      serializable: true
    },
    ButtonJump: {
      "default": null,
      type: cc.Button,
      serializable: true
    },
    ButtonDash: {
      "default": null,
      type: cc.Button,
      serializable: true
    },
    // Button Weapon
    ButtonWeaponSword: {
      "default": null,
      type: cc.Button,
      serializable: true
    },
    ButtonWeaponArcher: {
      "default": null,
      type: cc.Button,
      serializable: true
    },
    // Info
    EnemyLiveText: {
      "default": null,
      type: cc.Label,
      serializable: true
    },
    StickLifeText: {
      "default": null,
      type: cc.Label,
      serializable: true
    },
    HandTutorialSword: cc.Node,
    HandTutorialArcher: cc.Node,
    MessageText: cc.Label,
    TempWall: cc.Node,
    InstallPopup: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    GameInfo.TotalEnemy = CONST.TotalEnemyInGame;
    GameInfo.TotalEnemyAlive = GameInfo.TotalEnemy;
    this._tutorialDoneStage1Called = false;
    this._tutorialStartStage2Called = false;
    this._tutorialDoneStage2Called = false;
    this._isShowedPopupInstall = false;
    GameInfo.GamePause = true;
    this.scheduleOnce(function () {
      if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
        GameInfo.GamePause = false;
      } else {
        GameInfo.GamePause = true;
      }
    }, 3);
  },
  start: function start() {
    this.InstallPopup.active = false;
  },
  update: function update(dt) {
    this.node.setPosition(this.FollowCamera.getPosition());
    this.EnemyLiveText.string = GameInfo.TotalEnemy - GameInfo.TotalEnemyAlive + "/" + GameInfo.TotalEnemy;

    if (!GameInfo.TutorialStartStage2) {
      if (GameInfo.TotalEnemy - GameInfo.TotalEnemyAlive >= CONST.NumEnemyForStartStage2) {
        GameInfo.TutorialStartStage2 = true;
      }
    }

    if (!this._tutorialDoneStage1Called && GameInfo.TutorialDoneStage1) {
      this._tutorialDoneStage1Called = true;
      this.callWhenStage1Done();
    }

    if (!this._tutorialStartStage2Called && GameInfo.TutorialStartStage2) {
      this._tutorialStartStage2Called = true;
      this.callWhenStage2Start();
    } // cc.log(GameInfo.TutorialDoneStage2);


    if (!this._tutorialDoneStage2Called && GameInfo.TutorialDoneStage2) {
      this._tutorialDoneStage2Called = true;
      this.callWhenStage2Done();
    }

    if (!this._isShowedPopupInstall && GameInfo.IsShowPopupInstall) {
      this._isShowedPopupInstall = true;
      this.showPopupInstall();
    }
  },
  callWhenStage1Done: function callWhenStage1Done() {
    cc.log("Stage 1 Done");
    this.MessageText.node.active = false;
  },
  callWhenStage2Start: function callWhenStage2Start() {
    cc.log("Stage 2 Start");
    this.TempWall.active = false;
    this.MessageText.node.active = true;
    this.MessageText.string = "CHANGE YOUR WEAPON!"; // GameInfo.GamePause = true;
    // this.scheduleOnce(function() {
    //     GameInfo.GamePause = false;
    // }, 3);
  },
  callWhenStage2Done: function callWhenStage2Done() {
    cc.log("Stage 2 Done");
    this.MessageText.node.active = false;
  },
  showPopupInstall: function showPopupInstall() {
    this.InstallPopup.active = true;
    this.InstallPopup.setPosition(0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyc1xcVUlHYW1lQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDT05TVCIsInJlcXVpcmUiLCJHYW1lSW5mbyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiRm9sbG93Q2FtZXJhIiwiTm9kZSIsIkJ1dHRvbk1vdmVMZWZ0IiwidHlwZSIsIkJ1dHRvbiIsInNlcmlhbGl6YWJsZSIsIkJ1dHRvbk1vdmVSaWdodCIsIkJ1dHRvbkF0dGFjayIsIkJ1dHRvbkp1bXAiLCJCdXR0b25EYXNoIiwiQnV0dG9uV2VhcG9uU3dvcmQiLCJCdXR0b25XZWFwb25BcmNoZXIiLCJFbmVteUxpdmVUZXh0IiwiTGFiZWwiLCJTdGlja0xpZmVUZXh0IiwiSGFuZFR1dG9yaWFsU3dvcmQiLCJIYW5kVHV0b3JpYWxBcmNoZXIiLCJNZXNzYWdlVGV4dCIsIlRlbXBXYWxsIiwiSW5zdGFsbFBvcHVwIiwib25Mb2FkIiwiVG90YWxFbmVteSIsIlRvdGFsRW5lbXlJbkdhbWUiLCJUb3RhbEVuZW15QWxpdmUiLCJfdHV0b3JpYWxEb25lU3RhZ2UxQ2FsbGVkIiwiX3R1dG9yaWFsU3RhcnRTdGFnZTJDYWxsZWQiLCJfdHV0b3JpYWxEb25lU3RhZ2UyQ2FsbGVkIiwiX2lzU2hvd2VkUG9wdXBJbnN0YWxsIiwiR2FtZVBhdXNlIiwic2NoZWR1bGVPbmNlIiwidmlldyIsImdldEZyYW1lU2l6ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnQiLCJhY3RpdmUiLCJ1cGRhdGUiLCJkdCIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwic3RyaW5nIiwiVHV0b3JpYWxTdGFydFN0YWdlMiIsIk51bUVuZW15Rm9yU3RhcnRTdGFnZTIiLCJUdXRvcmlhbERvbmVTdGFnZTEiLCJjYWxsV2hlblN0YWdlMURvbmUiLCJjYWxsV2hlblN0YWdlMlN0YXJ0IiwiVHV0b3JpYWxEb25lU3RhZ2UyIiwiY2FsbFdoZW5TdGFnZTJEb25lIiwiSXNTaG93UG9wdXBJbnN0YWxsIiwic2hvd1BvcHVwSW5zdGFsbCIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxZQUFZLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEVDtBQUdSO0FBQ0FDLElBQUFBLGNBQWMsRUFBRTtBQUNaLGlCQUFTLElBREc7QUFFWkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRLE1BRkc7QUFHWkMsTUFBQUEsWUFBWSxFQUFFO0FBSEYsS0FKUjtBQVNSQyxJQUFBQSxlQUFlLEVBQUU7QUFDYixpQkFBUyxJQURJO0FBRWJILE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUSxNQUZJO0FBR2JDLE1BQUFBLFlBQVksRUFBRTtBQUhELEtBVFQ7QUFjUjtBQUNBRSxJQUFBQSxZQUFZLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZKLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUSxNQUZDO0FBR1ZDLE1BQUFBLFlBQVksRUFBRTtBQUhKLEtBZk47QUFvQlJHLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkwsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRLE1BRkQ7QUFHUkMsTUFBQUEsWUFBWSxFQUFFO0FBSE4sS0FwQko7QUF5QlJJLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUk4sTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRLE1BRkQ7QUFHUkMsTUFBQUEsWUFBWSxFQUFFO0FBSE4sS0F6Qko7QUErQlI7QUFDQUssSUFBQUEsaUJBQWlCLEVBQUU7QUFDZixpQkFBUyxJQURNO0FBRWZQLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUSxNQUZNO0FBR2ZDLE1BQUFBLFlBQVksRUFBRTtBQUhDLEtBaENYO0FBcUNSTSxJQUFBQSxrQkFBa0IsRUFBRTtBQUNoQixpQkFBUyxJQURPO0FBRWhCUixNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ1EsTUFGTztBQUdoQkMsTUFBQUEsWUFBWSxFQUFFO0FBSEUsS0FyQ1o7QUEyQ1I7QUFDQU8sSUFBQUEsYUFBYSxFQUFFO0FBQ1gsaUJBQVMsSUFERTtBQUVYVCxNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ2lCLEtBRkU7QUFHWFIsTUFBQUEsWUFBWSxFQUFFO0FBSEgsS0E1Q1A7QUFpRFJTLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLElBREU7QUFFWFgsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNpQixLQUZFO0FBR1hSLE1BQUFBLFlBQVksRUFBRTtBQUhILEtBakRQO0FBdURSVSxJQUFBQSxpQkFBaUIsRUFBRW5CLEVBQUUsQ0FBQ0ssSUF2RGQ7QUF3RFJlLElBQUFBLGtCQUFrQixFQUFFcEIsRUFBRSxDQUFDSyxJQXhEZjtBQTBEUmdCLElBQUFBLFdBQVcsRUFBRXJCLEVBQUUsQ0FBQ2lCLEtBMURSO0FBNERSSyxJQUFBQSxRQUFRLEVBQUV0QixFQUFFLENBQUNLLElBNURMO0FBOERSa0IsSUFBQUEsWUFBWSxFQUFFdkIsRUFBRSxDQUFDSztBQTlEVCxHQUhQO0FBb0VMO0FBRUFtQixFQUFBQSxNQXRFSyxvQkFzRUs7QUFDTnpCLElBQUFBLFFBQVEsQ0FBQzBCLFVBQVQsR0FBc0I1QixLQUFLLENBQUM2QixnQkFBNUI7QUFDQTNCLElBQUFBLFFBQVEsQ0FBQzRCLGVBQVQsR0FBMkI1QixRQUFRLENBQUMwQixVQUFwQztBQUVBLFNBQUtHLHlCQUFMLEdBQWlDLEtBQWpDO0FBQ0EsU0FBS0MsMEJBQUwsR0FBa0MsS0FBbEM7QUFDQSxTQUFLQyx5QkFBTCxHQUFpQyxLQUFqQztBQUVBLFNBQUtDLHFCQUFMLEdBQTZCLEtBQTdCO0FBRUFoQyxJQUFBQSxRQUFRLENBQUNpQyxTQUFULEdBQXFCLElBQXJCO0FBRUEsU0FBS0MsWUFBTCxDQUFrQixZQUFXO0FBQ3pCLFVBQUdqQyxFQUFFLENBQUNrQyxJQUFILENBQVFDLFlBQVIsR0FBdUJDLEtBQXZCLEdBQStCcEMsRUFBRSxDQUFDa0MsSUFBSCxDQUFRQyxZQUFSLEdBQXVCRSxNQUF6RCxFQUFnRTtBQUM1RHRDLFFBQUFBLFFBQVEsQ0FBQ2lDLFNBQVQsR0FBcUIsS0FBckI7QUFDSCxPQUZELE1BRU87QUFDSGpDLFFBQUFBLFFBQVEsQ0FBQ2lDLFNBQVQsR0FBcUIsSUFBckI7QUFDSDtBQUNKLEtBTkQsRUFNRyxDQU5IO0FBT0gsR0F6Rkk7QUEyRkxNLEVBQUFBLEtBM0ZLLG1CQTJGSTtBQUNMLFNBQUtmLFlBQUwsQ0FBa0JnQixNQUFsQixHQUEyQixLQUEzQjtBQUNILEdBN0ZJO0FBK0ZMQyxFQUFBQSxNQS9GSyxrQkErRkdDLEVBL0ZILEVBK0ZPO0FBQ1IsU0FBS0MsSUFBTCxDQUFVQyxXQUFWLENBQXNCLEtBQUt2QyxZQUFMLENBQWtCd0MsV0FBbEIsRUFBdEI7QUFFQSxTQUFLNUIsYUFBTCxDQUFtQjZCLE1BQW5CLEdBQTZCOUMsUUFBUSxDQUFDMEIsVUFBVCxHQUFzQjFCLFFBQVEsQ0FBQzRCLGVBQWhDLEdBQW1ELEdBQW5ELEdBQXlENUIsUUFBUSxDQUFDMEIsVUFBOUY7O0FBRUEsUUFBRyxDQUFDMUIsUUFBUSxDQUFDK0MsbUJBQWIsRUFBaUM7QUFDN0IsVUFBRy9DLFFBQVEsQ0FBQzBCLFVBQVQsR0FBc0IxQixRQUFRLENBQUM0QixlQUEvQixJQUFrRDlCLEtBQUssQ0FBQ2tELHNCQUEzRCxFQUFrRjtBQUM5RWhELFFBQUFBLFFBQVEsQ0FBQytDLG1CQUFULEdBQStCLElBQS9CO0FBQ0g7QUFDSjs7QUFFRCxRQUFHLENBQUMsS0FBS2xCLHlCQUFOLElBQW1DN0IsUUFBUSxDQUFDaUQsa0JBQS9DLEVBQWtFO0FBQzlELFdBQUtwQix5QkFBTCxHQUFpQyxJQUFqQztBQUNBLFdBQUtxQixrQkFBTDtBQUNIOztBQUVELFFBQUcsQ0FBQyxLQUFLcEIsMEJBQU4sSUFBb0M5QixRQUFRLENBQUMrQyxtQkFBaEQsRUFBb0U7QUFDaEUsV0FBS2pCLDBCQUFMLEdBQWtDLElBQWxDO0FBQ0EsV0FBS3FCLG1CQUFMO0FBQ0gsS0FuQk8sQ0FxQlI7OztBQUNBLFFBQUcsQ0FBQyxLQUFLcEIseUJBQU4sSUFBbUMvQixRQUFRLENBQUNvRCxrQkFBL0MsRUFBa0U7QUFDOUQsV0FBS3JCLHlCQUFMLEdBQWlDLElBQWpDO0FBQ0EsV0FBS3NCLGtCQUFMO0FBQ0g7O0FBRUQsUUFBRyxDQUFDLEtBQUtyQixxQkFBTixJQUErQmhDLFFBQVEsQ0FBQ3NELGtCQUEzQyxFQUE4RDtBQUMxRCxXQUFLdEIscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxXQUFLdUIsZ0JBQUw7QUFDSDtBQUNKLEdBOUhJO0FBZ0lMTCxFQUFBQSxrQkFoSUssZ0NBZ0llO0FBQ2hCakQsSUFBQUEsRUFBRSxDQUFDdUQsR0FBSCxDQUFPLGNBQVA7QUFDQSxTQUFLbEMsV0FBTCxDQUFpQnFCLElBQWpCLENBQXNCSCxNQUF0QixHQUErQixLQUEvQjtBQUNILEdBbklJO0FBcUlMVyxFQUFBQSxtQkFySUssaUNBcUlnQjtBQUNqQmxELElBQUFBLEVBQUUsQ0FBQ3VELEdBQUgsQ0FBTyxlQUFQO0FBQ0EsU0FBS2pDLFFBQUwsQ0FBY2lCLE1BQWQsR0FBdUIsS0FBdkI7QUFFQSxTQUFLbEIsV0FBTCxDQUFpQnFCLElBQWpCLENBQXNCSCxNQUF0QixHQUErQixJQUEvQjtBQUNBLFNBQUtsQixXQUFMLENBQWlCd0IsTUFBakIsR0FBMEIscUJBQTFCLENBTGlCLENBT2pCO0FBRUE7QUFDQTtBQUNBO0FBQ0gsR0FqSkk7QUFtSkxPLEVBQUFBLGtCQW5KSyxnQ0FtSmU7QUFDaEJwRCxJQUFBQSxFQUFFLENBQUN1RCxHQUFILENBQU8sY0FBUDtBQUNBLFNBQUtsQyxXQUFMLENBQWlCcUIsSUFBakIsQ0FBc0JILE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0F0Skk7QUF3SkxlLEVBQUFBLGdCQXhKSyw4QkF3SmE7QUFDZCxTQUFLL0IsWUFBTCxDQUFrQmdCLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsU0FBS2hCLFlBQUwsQ0FBa0JvQixXQUFsQixDQUE4QixDQUE5QixFQUFpQyxDQUFqQztBQUNIO0FBM0pJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENPTlNUID0gcmVxdWlyZShcIkNPTlNUXCIpO1xyXG5jb25zdCBHYW1lSW5mbyA9IHJlcXVpcmUoXCJHYW1lSW5mb1wiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgRm9sbG93Q2FtZXJhOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICAvLyBCdG4gTW92ZVxyXG4gICAgICAgIEJ1dHRvbk1vdmVMZWZ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQnV0dG9uTW92ZVJpZ2h0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gQnRuIEF0dGFja1xyXG4gICAgICAgIEJ1dHRvbkF0dGFjazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJ1dHRvbkp1bXA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCdXR0b25EYXNoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQnV0dG9uIFdlYXBvblxyXG4gICAgICAgIEJ1dHRvbldlYXBvblN3b3JkOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQnV0dG9uV2VhcG9uQXJjaGVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIEluZm9cclxuICAgICAgICBFbmVteUxpdmVUZXh0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTdGlja0xpZmVUZXh0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgSGFuZFR1dG9yaWFsU3dvcmQ6IGNjLk5vZGUsXHJcbiAgICAgICAgSGFuZFR1dG9yaWFsQXJjaGVyOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICBNZXNzYWdlVGV4dDogY2MuTGFiZWwsXHJcblxyXG4gICAgICAgIFRlbXBXYWxsOiBjYy5Ob2RlLFxyXG5cclxuICAgICAgICBJbnN0YWxsUG9wdXA6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgR2FtZUluZm8uVG90YWxFbmVteSA9IENPTlNULlRvdGFsRW5lbXlJbkdhbWU7XHJcbiAgICAgICAgR2FtZUluZm8uVG90YWxFbmVteUFsaXZlID0gR2FtZUluZm8uVG90YWxFbmVteTtcclxuXHJcbiAgICAgICAgdGhpcy5fdHV0b3JpYWxEb25lU3RhZ2UxQ2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fdHV0b3JpYWxTdGFydFN0YWdlMkNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3R1dG9yaWFsRG9uZVN0YWdlMkNhbGxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9pc1Nob3dlZFBvcHVwSW5zdGFsbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBHYW1lSW5mby5HYW1lUGF1c2UgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA+IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIEdhbWVJbmZvLkdhbWVQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgR2FtZUluZm8uR2FtZVBhdXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5JbnN0YWxsUG9wdXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5Gb2xsb3dDYW1lcmEuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgIHRoaXMuRW5lbXlMaXZlVGV4dC5zdHJpbmcgPSAoR2FtZUluZm8uVG90YWxFbmVteSAtIEdhbWVJbmZvLlRvdGFsRW5lbXlBbGl2ZSkgKyBcIi9cIiArIEdhbWVJbmZvLlRvdGFsRW5lbXk7XHJcblxyXG4gICAgICAgIGlmKCFHYW1lSW5mby5UdXRvcmlhbFN0YXJ0U3RhZ2UyKXtcclxuICAgICAgICAgICAgaWYoR2FtZUluZm8uVG90YWxFbmVteSAtIEdhbWVJbmZvLlRvdGFsRW5lbXlBbGl2ZSA+PSBDT05TVC5OdW1FbmVteUZvclN0YXJ0U3RhZ2UyKXtcclxuICAgICAgICAgICAgICAgIEdhbWVJbmZvLlR1dG9yaWFsU3RhcnRTdGFnZTIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fdHV0b3JpYWxEb25lU3RhZ2UxQ2FsbGVkICYmIEdhbWVJbmZvLlR1dG9yaWFsRG9uZVN0YWdlMSl7XHJcbiAgICAgICAgICAgIHRoaXMuX3R1dG9yaWFsRG9uZVN0YWdlMUNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbFdoZW5TdGFnZTFEb25lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighdGhpcy5fdHV0b3JpYWxTdGFydFN0YWdlMkNhbGxlZCAmJiBHYW1lSW5mby5UdXRvcmlhbFN0YXJ0U3RhZ2UyKXtcclxuICAgICAgICAgICAgdGhpcy5fdHV0b3JpYWxTdGFydFN0YWdlMkNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbFdoZW5TdGFnZTJTdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2MubG9nKEdhbWVJbmZvLlR1dG9yaWFsRG9uZVN0YWdlMik7XHJcbiAgICAgICAgaWYoIXRoaXMuX3R1dG9yaWFsRG9uZVN0YWdlMkNhbGxlZCAmJiBHYW1lSW5mby5UdXRvcmlhbERvbmVTdGFnZTIpe1xyXG4gICAgICAgICAgICB0aGlzLl90dXRvcmlhbERvbmVTdGFnZTJDYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxXaGVuU3RhZ2UyRG9uZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuX2lzU2hvd2VkUG9wdXBJbnN0YWxsICYmIEdhbWVJbmZvLklzU2hvd1BvcHVwSW5zdGFsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzU2hvd2VkUG9wdXBJbnN0YWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93UG9wdXBJbnN0YWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjYWxsV2hlblN0YWdlMURvbmUoKXtcclxuICAgICAgICBjYy5sb2coXCJTdGFnZSAxIERvbmVcIik7XHJcbiAgICAgICAgdGhpcy5NZXNzYWdlVGV4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYWxsV2hlblN0YWdlMlN0YXJ0KCl7XHJcbiAgICAgICAgY2MubG9nKFwiU3RhZ2UgMiBTdGFydFwiKTtcclxuICAgICAgICB0aGlzLlRlbXBXYWxsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLk1lc3NhZ2VUZXh0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk1lc3NhZ2VUZXh0LnN0cmluZyA9IFwiQ0hBTkdFIFlPVVIgV0VBUE9OIVwiO1xyXG5cclxuICAgICAgICAvLyBHYW1lSW5mby5HYW1lUGF1c2UgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgR2FtZUluZm8uR2FtZVBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfSwgMyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbGxXaGVuU3RhZ2UyRG9uZSgpe1xyXG4gICAgICAgIGNjLmxvZyhcIlN0YWdlIDIgRG9uZVwiKTtcclxuICAgICAgICB0aGlzLk1lc3NhZ2VUZXh0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dQb3B1cEluc3RhbGwoKXtcclxuICAgICAgICB0aGlzLkluc3RhbGxQb3B1cC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuSW5zdGFsbFBvcHVwLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/EnemyBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '724e8+Zs8VHWZBHLkR6Rzc9', 'EnemyBullet');
// Script/Enemy/EnemyBullet.js

"use strict";

var Player3D = require("Player3D");

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {
    DampFactor: 1
  },
  onLoad: function onLoad() {
    this._isLanching = false;
    this._direction = 0;
    this._speed = 15;
  },
  start: function start() {
    this._isLanching = true;
  },
  Launch: function Launch(baseDamp, direction) {
    this._direction = direction;
    this._baseDamp = baseDamp;
    this.node.scaleX = direction;
  },
  update: function update(dt) {
    if (!this._isLanching) return;
    this.node.setPosition(this.node.getPosition().x + this._speed * 10 * this._direction * dt, this.node.getPosition().y);
  },
  hitPlayer: function hitPlayer() {
    console.log("Bullet Hit Player");
    this.node.destroy();
  },
  hitPlatform: function hitPlatform() {
    this._isLanching = false;
    this.node.destroy();
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      other.getComponent(Player3D).hit(CONST.PoisonVineBaseAttack);
      this.hitPlayer();
    } else if (other.node.group == "Solid") {
      this.hitPlatform();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRW5lbXlCdWxsZXQuanMiXSwibmFtZXMiOlsiUGxheWVyM0QiLCJyZXF1aXJlIiwiQ09OU1QiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkRhbXBGYWN0b3IiLCJvbkxvYWQiLCJfaXNMYW5jaGluZyIsIl9kaXJlY3Rpb24iLCJfc3BlZWQiLCJzdGFydCIsIkxhdW5jaCIsImJhc2VEYW1wIiwiZGlyZWN0aW9uIiwiX2Jhc2VEYW1wIiwibm9kZSIsInNjYWxlWCIsInVwZGF0ZSIsImR0Iiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsIngiLCJ5IiwiaGl0UGxheWVyIiwiY29uc29sZSIsImxvZyIsImRlc3Ryb3kiLCJoaXRQbGF0Zm9ybSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJncm91cCIsImdldENvbXBvbmVudCIsImhpdCIsIlBvaXNvblZpbmVCYXNlQXR0YWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsT0FBRCxDQUFyQjs7QUFFQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQURKLEdBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBRUEsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0k7QUFDTCxTQUFLSCxXQUFMLEdBQW1CLElBQW5CO0FBQ0gsR0FoQkk7QUFrQkxJLEVBQUFBLE1BbEJLLGtCQWtCRUMsUUFsQkYsRUFrQllDLFNBbEJaLEVBa0JzQjtBQUN2QixTQUFLTCxVQUFMLEdBQWtCSyxTQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJGLFFBQWpCO0FBRUEsU0FBS0csSUFBTCxDQUFVQyxNQUFWLEdBQW1CSCxTQUFuQjtBQUNILEdBdkJJO0FBeUJMSSxFQUFBQSxNQXpCSyxrQkF5QkdDLEVBekJILEVBeUJPO0FBQ1IsUUFBRyxDQUFDLEtBQUtYLFdBQVQsRUFBc0I7QUFFdEIsU0FBS1EsSUFBTCxDQUFVSSxXQUFWLENBQXNCLEtBQUtKLElBQUwsQ0FBVUssV0FBVixHQUF3QkMsQ0FBeEIsR0FBNEIsS0FBS1osTUFBTCxHQUFjLEVBQWQsR0FBbUIsS0FBS0QsVUFBeEIsR0FBcUNVLEVBQXZGLEVBQTJGLEtBQUtILElBQUwsQ0FBVUssV0FBVixHQUF3QkUsQ0FBbkg7QUFDSCxHQTdCSTtBQStCTEMsRUFBQUEsU0EvQkssdUJBK0JNO0FBQ1BDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsU0FBS1YsSUFBTCxDQUFVVyxPQUFWO0FBQ0gsR0FsQ0k7QUFvQ0xDLEVBQUFBLFdBcENLLHlCQW9DUTtBQUNULFNBQUtwQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS1EsSUFBTCxDQUFVVyxPQUFWO0FBQ0gsR0F2Q0k7QUF5Q0xFLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUVyQyxRQUFHRCxLQUFLLENBQUNkLElBQU4sQ0FBV2dCLEtBQVgsSUFBb0IsUUFBdkIsRUFBZ0M7QUFDNUJGLE1BQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQmxDLFFBQW5CLEVBQTZCbUMsR0FBN0IsQ0FBaUNqQyxLQUFLLENBQUNrQyxvQkFBdkM7QUFDQSxXQUFLWCxTQUFMO0FBQ0gsS0FIRCxNQUdPLElBQUdNLEtBQUssQ0FBQ2QsSUFBTixDQUFXZ0IsS0FBWCxJQUFvQixPQUF2QixFQUErQjtBQUNsQyxXQUFLSixXQUFMO0FBQ0g7QUFFSjtBQWxESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUGxheWVyM0QgPSByZXF1aXJlKFwiUGxheWVyM0RcIik7XHJcbmNvbnN0IENPTlNUID0gcmVxdWlyZShcIkNPTlNUXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBEYW1wRmFjdG9yOiAxLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuX2lzTGFuY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9zcGVlZCA9IDE1O1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5faXNMYW5jaGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIExhdW5jaChiYXNlRGFtcCwgZGlyZWN0aW9uKXtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5fYmFzZURhbXAgPSBiYXNlRGFtcDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IGRpcmVjdGlvbjtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLl9pc0xhbmNoaW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS54ICsgdGhpcy5fc3BlZWQgKiAxMCAqIHRoaXMuX2RpcmVjdGlvbiAqIGR0LCB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKS55KTtcclxuICAgIH0sXHJcblxyXG4gICAgaGl0UGxheWVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCdWxsZXQgSGl0IFBsYXllclwiKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaXRQbGF0Zm9ybSgpe1xyXG4gICAgICAgIHRoaXMuX2lzTGFuY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiUGxheWVyXCIpe1xyXG4gICAgICAgICAgICBvdGhlci5nZXRDb21wb25lbnQoUGxheWVyM0QpLmhpdChDT05TVC5Qb2lzb25WaW5lQmFzZUF0dGFjayk7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0UGxheWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJTb2xpZFwiKXtcclxuICAgICAgICAgICAgdGhpcy5oaXRQbGF0Zm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/CustomButtonAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7acebqphMtAR5w2MXkyjGdp', 'CustomButtonAction');
// Script/Helper/CustomButtonAction.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // Mouse Event
    this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      cc.log("On Mouse Down");
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
      cc.log("On Mouse Up");
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
      cc.log("On Mouse Leave");
    }, this); // Touch Event

    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      cc.log("On Touch Start");
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      cc.log("On Touch End");
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      cc.log("On Touch Cancel");
    }, this);
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXEN1c3RvbUJ1dHRvbkFjdGlvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwiZXZlbnQiLCJsb2ciLCJNT1VTRV9VUCIsIk1PVVNFX0xFQVZFIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9FTkQiLCJUT1VDSF9DQU5DRUwiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ047QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFVBQVNDLEtBQVQsRUFBZTtBQUN0RFYsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8sZUFBUDtBQUNILEtBRkQsRUFFRyxJQUZIO0FBSUEsU0FBS04sSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCSSxRQUEvQixFQUF5QyxVQUFTRixLQUFULEVBQWU7QUFDcERWLE1BQUFBLEVBQUUsQ0FBQ1csR0FBSCxDQUFPLGFBQVA7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUlBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkssV0FBL0IsRUFBNEMsVUFBU0gsS0FBVCxFQUFlO0FBQ3ZEVixNQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxnQkFBUDtBQUNILEtBRkQsRUFFRyxJQUZILEVBVk0sQ0FlTjs7QUFDQSxTQUFLTixJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JNLFdBQS9CLEVBQTRDLFVBQVNKLEtBQVQsRUFBZTtBQUN2RFYsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8sZ0JBQVA7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUlBLFNBQUtOLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQk8sU0FBL0IsRUFBMEMsVUFBU0wsS0FBVCxFQUFlO0FBQ3JEVixNQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBTyxjQUFQO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFJQSxTQUFLTixJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JRLFlBQS9CLEVBQTZDLFVBQVNOLEtBQVQsRUFBZTtBQUN4RFYsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU8saUJBQVA7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUdILEdBcENJO0FBc0NMTSxFQUFBQSxLQXRDSyxtQkFzQ0ksQ0FFUixDQXhDSSxDQTBDTDs7QUExQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8gTW91c2UgRXZlbnRcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJPbiBNb3VzZSBEb3duXCIpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgY2MubG9nKFwiT24gTW91c2UgVXBcIik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJPbiBNb3VzZSBMZWF2ZVwiKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIk9uIFRvdWNoIFN0YXJ0XCIpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIk9uIFRvdWNoIEVuZFwiKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5sb2coXCJPbiBUb3VjaCBDYW5jZWxcIik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/ButtonAttack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31d41R95AxKe5DUXPKHmp27', 'ButtonAttack');
// Script/Others/ButtonAttack.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Icon: cc.Sprite,
    SwordSprite: cc.SpriteFrame,
    ArcherSprite: cc.SpriteFrame
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  setSword: function setSword() {
    this.Icon.spriteFrame = this.SwordSprite;
  },
  setArcher: function setArcher() {
    this.Icon.spriteFrame = this.ArcherSprite;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXEJ1dHRvbkF0dGFjay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkljb24iLCJTcHJpdGUiLCJTd29yZFNwcml0ZSIsIlNwcml0ZUZyYW1lIiwiQXJjaGVyU3ByaXRlIiwic3RhcnQiLCJzZXRTd29yZCIsInNwcml0ZUZyYW1lIiwic2V0QXJjaGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFSixFQUFFLENBQUNLLE1BREQ7QUFFUkMsSUFBQUEsV0FBVyxFQUFFTixFQUFFLENBQUNPLFdBRlI7QUFHUkMsSUFBQUEsWUFBWSxFQUFFUixFQUFFLENBQUNPO0FBSFQsR0FIUDtBQVNMO0FBRUE7QUFFQUUsRUFBQUEsS0FiSyxtQkFhSSxDQUVSLENBZkk7QUFpQkw7QUFFQUMsRUFBQUEsUUFuQkssc0JBbUJLO0FBQ04sU0FBS04sSUFBTCxDQUFVTyxXQUFWLEdBQXdCLEtBQUtMLFdBQTdCO0FBQ0gsR0FyQkk7QUF1QkxNLEVBQUFBLFNBdkJLLHVCQXVCTTtBQUNQLFNBQUtSLElBQUwsQ0FBVU8sV0FBVixHQUF3QixLQUFLSCxZQUE3QjtBQUNIO0FBekJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEljb246IGNjLlNwcml0ZSxcclxuICAgICAgICBTd29yZFNwcml0ZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgQXJjaGVyU3ByaXRlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2V0U3dvcmQoKXtcclxuICAgICAgICB0aGlzLkljb24uc3ByaXRlRnJhbWUgPSB0aGlzLlN3b3JkU3ByaXRlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBcmNoZXIoKXtcclxuICAgICAgICB0aGlzLkljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkFyY2hlclNwcml0ZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/DetectPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2c04dzmqdFwJkeq9miBlhk', 'DetectPlayer');
// Script/Enemy/DetectPlayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    IsDetectPlayer: false
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.IsDetectPlayer = true;
  },
  onCollisionExit: function onCollisionExit(other, self) {
    this.IsDetectPlayer = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcRGV0ZWN0UGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiSXNEZXRlY3RQbGF5ZXIiLCJzdGFydCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJvbkNvbGxpc2lvbkV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUU7QUFEUixHQUhQO0FBT0w7QUFFQUMsRUFBQUEsS0FUSyxtQkFTSSxDQUVSLENBWEk7QUFhTDtBQUVBQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsU0FBS0osY0FBTCxHQUFzQixJQUF0QjtBQUNILEdBakJJO0FBbUJMSyxFQUFBQSxlQUFlLEVBQUUseUJBQVVGLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3BDLFNBQUtKLGNBQUwsR0FBc0IsS0FBdEI7QUFDSDtBQXJCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIElzRGV0ZWN0UGxheWVyOiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5Jc0RldGVjdFBsYXllciA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5Jc0RldGVjdFBsYXllciA9IGZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/DropItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcc2bp5e4hPqYagHCPiUZww', 'DropItem');
// Script/Others/DropItem.js

"use strict";

var Player3D = require("Player3D");

var GameInfo = require("GameInfo");

var EnWeapon = require("GameEnum").EnWeapon;

cc.Class({
  "extends": cc.Component,
  properties: {
    weaponType: {
      "default": EnWeapon.None,
      type: EnWeapon
    },
    weaponIcon: {
      "default": null,
      type: cc.Sprite,
      serializable: true
    }
  },
  onLoad: function onLoad() {},
  start: function start() {
    cc.tween(this.weaponIcon.node).repeatForever(cc.tween().to(1, {
      position: cc.v2(0, 7)
    }).to(1, {
      position: cc.v2(0, 0)
    })).start();
  },
  // update (dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      this.collectWeapon(other.node.getComponent(Player3D));
    }
  },
  collectWeapon: function collectWeapon(player) {
    console.log("Player collect weapon: " + this.weaponType);
    player.changeWeapon(this.weaponType);

    if (this.weaponType == EnWeapon.Sword) {
      GameInfo.TutorialDoneStage1 = true;
    }

    if (this.weaponType == EnWeapon.Archer) {
      GameInfo.TutorialDoneStage2 = true;
    }

    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXERyb3BJdGVtLmpzIl0sIm5hbWVzIjpbIlBsYXllcjNEIiwicmVxdWlyZSIsIkdhbWVJbmZvIiwiRW5XZWFwb24iLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIndlYXBvblR5cGUiLCJOb25lIiwidHlwZSIsIndlYXBvbkljb24iLCJTcHJpdGUiLCJzZXJpYWxpemFibGUiLCJvbkxvYWQiLCJzdGFydCIsInR3ZWVuIiwibm9kZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsInBvc2l0aW9uIiwidjIiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ3JvdXAiLCJjb2xsZWN0V2VhcG9uIiwiZ2V0Q29tcG9uZW50IiwicGxheWVyIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVdlYXBvbiIsIlN3b3JkIiwiVHV0b3JpYWxEb25lU3RhZ2UxIiwiQXJjaGVyIiwiVHV0b3JpYWxEb25lU3RhZ2UyIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBRCxDQUFQLENBQW9CRSxRQUFuQzs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTTCxRQUFRLENBQUNNLElBRFY7QUFFUkMsTUFBQUEsSUFBSSxFQUFFUDtBQUZFLEtBREo7QUFLUlEsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSRCxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ1EsTUFGRDtBQUdSQyxNQUFBQSxZQUFZLEVBQUU7QUFITjtBQUxKLEdBSFA7QUFlTEMsRUFBQUEsTUFmSyxvQkFlSyxDQUFFLENBZlA7QUFpQkxDLEVBQUFBLEtBakJLLG1CQWlCSTtBQUNMWCxJQUFBQSxFQUFFLENBQUNZLEtBQUgsQ0FBUyxLQUFLTCxVQUFMLENBQWdCTSxJQUF6QixFQUNDQyxhQURELENBRUlkLEVBQUUsQ0FBQ1ksS0FBSCxHQUFXRyxFQUFYLENBQWMsQ0FBZCxFQUFpQjtBQUFDQyxNQUFBQSxRQUFRLEVBQUdoQixFQUFFLENBQUNpQixFQUFILENBQU0sQ0FBTixFQUFTLENBQVQ7QUFBWixLQUFqQixFQUNDRixFQURELENBQ0ksQ0FESixFQUNPO0FBQUNDLE1BQUFBLFFBQVEsRUFBR2hCLEVBQUUsQ0FBQ2lCLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVDtBQUFaLEtBRFAsQ0FGSixFQUlDTixLQUpEO0FBS0gsR0F2Qkk7QUF5Qkw7QUFFQU8sRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUdELEtBQUssQ0FBQ04sSUFBTixDQUFXUSxLQUFYLElBQW9CLFFBQXZCLEVBQWdDO0FBQzVCLFdBQUtDLGFBQUwsQ0FBbUJILEtBQUssQ0FBQ04sSUFBTixDQUFXVSxZQUFYLENBQXdCM0IsUUFBeEIsQ0FBbkI7QUFDSDtBQUNKLEdBL0JJO0FBaUNMMEIsRUFBQUEsYUFqQ0sseUJBaUNTRSxNQWpDVCxFQWlDZ0I7QUFDakJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUE0QixLQUFLdEIsVUFBN0M7QUFDQW9CLElBQUFBLE1BQU0sQ0FBQ0csWUFBUCxDQUFvQixLQUFLdkIsVUFBekI7O0FBRUEsUUFBRyxLQUFLQSxVQUFMLElBQW1CTCxRQUFRLENBQUM2QixLQUEvQixFQUFxQztBQUNqQzlCLE1BQUFBLFFBQVEsQ0FBQytCLGtCQUFULEdBQThCLElBQTlCO0FBQ0g7O0FBRUQsUUFBRyxLQUFLekIsVUFBTCxJQUFtQkwsUUFBUSxDQUFDK0IsTUFBL0IsRUFBc0M7QUFDbENoQyxNQUFBQSxRQUFRLENBQUNpQyxrQkFBVCxHQUE4QixJQUE5QjtBQUNIOztBQUVELFNBQUtsQixJQUFMLENBQVVtQixPQUFWO0FBQ0g7QUE5Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBsYXllcjNEID0gcmVxdWlyZShcIlBsYXllcjNEXCIpO1xyXG5jb25zdCBHYW1lSW5mbyA9IHJlcXVpcmUoXCJHYW1lSW5mb1wiKTtcclxudmFyIEVuV2VhcG9uID0gcmVxdWlyZShcIkdhbWVFbnVtXCIpLkVuV2VhcG9uO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB3ZWFwb25UeXBlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IEVuV2VhcG9uLk5vbmUsXHJcbiAgICAgICAgICAgIHR5cGU6IEVuV2VhcG9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2VhcG9uSWNvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLCAgICAgICBcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsIFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy53ZWFwb25JY29uLm5vZGUpXHJcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMSwge3Bvc2l0aW9uIDogY2MudjIoMCwgNyl9KVxyXG4gICAgICAgICAgICAudG8oMSwge3Bvc2l0aW9uIDogY2MudjIoMCwgMCl9KSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlBsYXllclwiKXtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0V2VhcG9uKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFBsYXllcjNEKSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29sbGVjdFdlYXBvbihwbGF5ZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIGNvbGxlY3Qgd2VhcG9uOiBcIiArIHRoaXMud2VhcG9uVHlwZSk7XHJcbiAgICAgICAgcGxheWVyLmNoYW5nZVdlYXBvbih0aGlzLndlYXBvblR5cGUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLndlYXBvblR5cGUgPT0gRW5XZWFwb24uU3dvcmQpe1xyXG4gICAgICAgICAgICBHYW1lSW5mby5UdXRvcmlhbERvbmVTdGFnZTEgPSB0cnVlOyAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy53ZWFwb25UeXBlID09IEVuV2VhcG9uLkFyY2hlcil7XHJcbiAgICAgICAgICAgIEdhbWVJbmZvLlR1dG9yaWFsRG9uZVN0YWdlMiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/ArcherCombos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ec3fro7rBMe4WVh+sEg+pY', 'ArcherCombos');
// Script/Character/ArcherCombos.js

"use strict";

var _require = require("GameEnum"),
    EnStickState = _require.EnStickState,
    EnStickMode = _require.EnStickMode;

var CONST = require("CONST");

var AnimNameStick = require("AnimNameStick");

var GameInfo = require("GameInfo");

var ArrowStick = require("ArrowStick");

cc.Class({
  "extends": cc.Component,
  properties: {
    PrefabArrow: {
      "default": null,
      type: cc.Prefab
    },
    NodeBow: {
      "default": null,
      type: cc.Node
    },
    IsOnAttacking: {
      get: function get() {
        return this._isAttacking;
      }
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._nearestEnemyNode = null;
    this._nearestEnemyDistance = CONST.MaxDistanceEnemyArcher;
    this._rigidBody = this.node.getComponent(cc.RigidBody);
    this._skeleton = this.getComponentInChildren(sp.Skeleton);
  },
  onStartAnimation: function onStartAnimation(animationName) {
    if (GameInfo.StickMode != EnStickMode.Archer) return;

    if (animationName == AnimNameStick.ArcherAngleStraight) {
      this.scheduleOnce(function () {
        this.fire(0);
      }, 0.15);
    } else if (animationName == AnimNameStick.ArcherAngleUp) {
      this.scheduleOnce(function () {
        this.fire(1);
      }, 0.15);
    }
  },
  onCompleteAnimation: function onCompleteAnimation(animationName) {
    if (animationName == AnimNameStick.ArcherAngleStraight) {} else if (animationName == AnimNameStick.ArcherAngleUp) {}
  },
  start: function start() {},
  // update (dt) {},
  onClick: function onClick() {
    if (GameInfo.StickMode != EnStickMode.Archer) return;
    if (this._isAttacking) return; // cc.log("On Click ", this._nearestEnemyNode);

    if (this._nearestEnemyNode != null && this.isPlayerFacing(this._nearestEnemyNode)) {
      cc.log(this._nearestEnemyNode.name, this.isPlayerFacing(this._nearestEnemyNode));

      var dir = this._nearestEnemyNode.getPosition().sub(this.node.getPosition()); // cc.log("Check Nearest Enemy ", this._nearestEnemyNode.getPosition(), this.node.getPosition(), dir);


      dir = dir.normalize(); // cc.log("Normalize Dir ", dir);

      this._angle = this.convertRad2Deg(Math.atan2(dir.y, Math.abs(dir.x)));
      this._dir = dir; // cc.log("Archer Fire ", this._angle, this._dir);

      var animNameAtk = AnimNameStick.ArcherAngleStraight;
      if (this._angle > 20) animNameAtk = AnimNameStick.ArcherAngleUp;

      this._skeleton.setAnimation(0, animNameAtk, false);
    } else {
      this._angle = 0;
      this._dir = cc.v2(1 * this.node.scaleX, 0);

      this._skeleton.setAnimation(0, AnimNameStick.ArcherAngleStraight, false);
    }

    this._stickSignWhenClick = this.node.scaleX;
    this._isFired = false;
    this._isAttacking = true;
    this.scheduleOnce(function () {
      this.endAttack();
    }, 0.5);
    cc.log("archer mode click fire");
  },
  convertRad2Deg: function convertRad2Deg(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
  },
  fire: function fire(type) {
    this._isFired = true; // Angle Straight

    if (type == 0) {
      this.createArrow(type);
    } // Angle Up
    else if (type == 1) {
      this.createArrow(type);
    }
  },
  createArrow: function createArrow(type) {
    var arrowObj = cc.instantiate(this.PrefabArrow);
    this.node.parent.addChild(arrowObj);
    arrowObj.position = this.node.convertToWorldSpaceAR(this.NodeBow.getPosition());

    if (this.node.scaleX != this._stickSignWhenClick) {
      this._dir = cc.v2(this._dir.x * -1, this._dir.y);
    }

    var arrowLogic = arrowObj.getComponent(ArrowStick);
    arrowLogic.Launch(this._dir);
  },
  checkNearestEnemy: function checkNearestEnemy(enemyNode, distance) {
    if (distance < this._nearestEnemyDistance) {
      this._nearestEnemyDistance = distance;
      this.setNearestEnemy(enemyNode);
    }
  },
  setNearestEnemy: function setNearestEnemy(enemyNode) {
    this._nearestEnemyNode = enemyNode;
  },
  removeNearestEnemy: function removeNearestEnemy(enemyNode) {
    if (this._nearestEnemyNode == enemyNode) {
      this._nearestEnemyNode = null;
      this._nearestEnemyDistance = CONST.MaxDistanceEnemyArcher;
    }
  },
  endAttack: function endAttack() {
    // this.resetSpeedAnim();
    this._isAttacking = false;
    var linearVelocity = this._rigidBody.linearVelocity;

    if (linearVelocity.x > 0.01 || linearVelocity.x < -0.01) {
      GameInfo.StickState = EnStickState.Run;

      this._skeleton.setAnimation(0, AnimNameStick.ArcherRun, true);
    } else {
      GameInfo.StickState = EnStickState.Idle;

      this._skeleton.setAnimation(0, AnimNameStick.ArcherIdle, true);
    }
  },
  isPlayerFacing: function isPlayerFacing(enemyNode) {
    if (this.node.x < enemyNode.x && this.node.scaleX > 0 || this.node.x > enemyNode.x && this.node.scaleX < 0) {
      return true;
    }

    return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEFyY2hlckNvbWJvcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRW5TdGlja1N0YXRlIiwiRW5TdGlja01vZGUiLCJDT05TVCIsIkFuaW1OYW1lU3RpY2siLCJHYW1lSW5mbyIsIkFycm93U3RpY2siLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlByZWZhYkFycm93IiwidHlwZSIsIlByZWZhYiIsIk5vZGVCb3ciLCJOb2RlIiwiSXNPbkF0dGFja2luZyIsImdldCIsIl9pc0F0dGFja2luZyIsIm9uTG9hZCIsIl9uZWFyZXN0RW5lbXlOb2RlIiwiX25lYXJlc3RFbmVteURpc3RhbmNlIiwiTWF4RGlzdGFuY2VFbmVteUFyY2hlciIsIl9yaWdpZEJvZHkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUmlnaWRCb2R5IiwiX3NrZWxldG9uIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsInNwIiwiU2tlbGV0b24iLCJvblN0YXJ0QW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsIlN0aWNrTW9kZSIsIkFyY2hlciIsIkFyY2hlckFuZ2xlU3RyYWlnaHQiLCJzY2hlZHVsZU9uY2UiLCJmaXJlIiwiQXJjaGVyQW5nbGVVcCIsIm9uQ29tcGxldGVBbmltYXRpb24iLCJzdGFydCIsIm9uQ2xpY2siLCJpc1BsYXllckZhY2luZyIsImxvZyIsIm5hbWUiLCJkaXIiLCJnZXRQb3NpdGlvbiIsInN1YiIsIm5vcm1hbGl6ZSIsIl9hbmdsZSIsImNvbnZlcnRSYWQyRGVnIiwiTWF0aCIsImF0YW4yIiwieSIsImFicyIsIngiLCJfZGlyIiwiYW5pbU5hbWVBdGsiLCJzZXRBbmltYXRpb24iLCJ2MiIsInNjYWxlWCIsIl9zdGlja1NpZ25XaGVuQ2xpY2siLCJfaXNGaXJlZCIsImVuZEF0dGFjayIsInJhZGlhbnMiLCJwaSIsIlBJIiwiY3JlYXRlQXJyb3ciLCJhcnJvd09iaiIsImluc3RhbnRpYXRlIiwicGFyZW50IiwiYWRkQ2hpbGQiLCJwb3NpdGlvbiIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsImFycm93TG9naWMiLCJMYXVuY2giLCJjaGVja05lYXJlc3RFbmVteSIsImVuZW15Tm9kZSIsImRpc3RhbmNlIiwic2V0TmVhcmVzdEVuZW15IiwicmVtb3ZlTmVhcmVzdEVuZW15IiwibGluZWFyVmVsb2NpdHkiLCJTdGlja1N0YXRlIiwiUnVuIiwiQXJjaGVyUnVuIiwiSWRsZSIsIkFyY2hlcklkbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZUFBc0NBLE9BQU8sQ0FBQyxVQUFELENBQTdDO0FBQUEsSUFBUUMsWUFBUixZQUFRQSxZQUFSO0FBQUEsSUFBc0JDLFdBQXRCLFlBQXNCQSxXQUF0Qjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdILE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUNBLElBQUlJLGFBQWEsR0FBR0osT0FBTyxDQUFDLGVBQUQsQ0FBM0I7O0FBQ0EsSUFBSUssUUFBUSxHQUFHTCxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJTSxVQUFVLEdBQUdOLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUVBTyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsSUFEQTtBQUVUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQURMO0FBS1JDLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTLElBREo7QUFFTEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0FBRkosS0FMRDtBQVNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWEMsTUFBQUEsR0FEVyxpQkFDTDtBQUFDLGVBQU8sS0FBS0MsWUFBWjtBQUEwQjtBQUR0QjtBQVRQLEdBSFA7QUFpQkw7QUFFQUMsRUFBQUEsTUFuQkssb0JBbUJLO0FBQ04sU0FBS0MsaUJBQUws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bkIsSUFBMkIwQixjQUFjLENBQUMxQixDQUFmLEdBQW1CLENBQUMsSUFBbkQsRUFBd0Q7QUFDcERsRCxNQUFBQSxRQUFRLENBQUM2RSxVQUFULEdBQXNCakYsWUFBWSxDQUFDa0YsR0FBbkM7O0FBQ0EsV0FBS3hELFNBQUwsQ0FBZStCLFlBQWYsQ0FBNEIsQ0FBNUIsRUFBK0J0RCxhQUFhLENBQUNnRixTQUE3QyxFQUF3RCxJQUF4RDtBQUNILEtBSEQsTUFHTztBQUNIL0UsTUFBQUEsUUFBUSxDQUFDNkUsVUFBVCxHQUFzQmpGLFlBQVksQ0FBQ29GLElBQW5DOztBQUNBLFdBQUsxRCxTQUFMLENBQWUrQixZQUFmLENBQTRCLENBQTVCLEVBQStCdEQsYUFBYSxDQUFDa0YsVUFBN0MsRUFBeUQsSUFBekQ7QUFDSDtBQUNKLEdBbEtJO0FBb0tMNUMsRUFBQUEsY0FwS0ssMEJBb0tVbUMsU0FwS1YsRUFvS29CO0FBQ3JCLFFBQUksS0FBS3JELElBQUwsQ0FBVStCLENBQVYsR0FBY3NCLFNBQVMsQ0FBQ3RCLENBQXhCLElBQTZCLEtBQUsvQixJQUFMLENBQVVvQyxNQUFWLEdBQW1CLENBQWhELElBQ0csS0FBS3BDLElBQUwsQ0FBVStCLENBQVYsR0FBY3NCLFNBQVMsQ0FBQ3RCLENBQXhCLElBQTZCLEtBQUsvQixJQUFMLENBQVVvQyxNQUFWLEdBQW1CLENBRHZELEVBQ3lEO0FBQ3JELGFBQU8sSUFBUDtBQUNIOztBQUVELFdBQU8sS0FBUDtBQUNIO0FBM0tJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgRW5TdGlja1N0YXRlLCBFblN0aWNrTW9kZSB9ID0gcmVxdWlyZShcIkdhbWVFbnVtXCIpO1xyXG5jb25zdCBDT05TVCA9IHJlcXVpcmUoXCJDT05TVFwiKTtcclxudmFyIEFuaW1OYW1lU3RpY2sgPSByZXF1aXJlKFwiQW5pbU5hbWVTdGlja1wiKTtcclxudmFyIEdhbWVJbmZvID0gcmVxdWlyZShcIkdhbWVJbmZvXCIpO1xyXG52YXIgQXJyb3dTdGljayA9IHJlcXVpcmUoXCJBcnJvd1N0aWNrXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBQcmVmYWJBcnJvdzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIE5vZGVCb3c6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSXNPbkF0dGFja2luZzoge1xyXG4gICAgICAgICAgICBnZXQoKSB7cmV0dXJuIHRoaXMuX2lzQXR0YWNraW5nO31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5fbmVhcmVzdEVuZW15Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbmVhcmVzdEVuZW15RGlzdGFuY2UgPSBDT05TVC5NYXhEaXN0YW5jZUVuZW15QXJjaGVyO1xyXG5cclxuICAgICAgICB0aGlzLl9yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5fc2tlbGV0b24gPSB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblN0YXJ0QW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpe1xyXG4gICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSAhPSBFblN0aWNrTW9kZS5BcmNoZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoYW5pbWF0aW9uTmFtZSA9PSBBbmltTmFtZVN0aWNrLkFyY2hlckFuZ2xlU3RyYWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZSgwKTtcclxuICAgICAgICAgICAgfSwgMC4xNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFuaW1hdGlvbk5hbWUgPT0gQW5pbU5hbWVTdGljay5BcmNoZXJBbmdsZVVwKXtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmUoMSk7XHJcbiAgICAgICAgICAgIH0sIDAuMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Db21wbGV0ZUFuaW1hdGlvbihhbmltYXRpb25OYW1lKXtcclxuICAgICAgICBpZihhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVTdHJhaWdodCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChhbmltYXRpb25OYW1lID09IEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVVcCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIGlmKEdhbWVJbmZvLlN0aWNrTW9kZSAhPSBFblN0aWNrTW9kZS5BcmNoZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5faXNBdHRhY2tpbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY2MubG9nKFwiT24gQ2xpY2sgXCIsIHRoaXMuX25lYXJlc3RFbmVteU5vZGUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9uZWFyZXN0RW5lbXlOb2RlICE9IG51bGwgJiYgdGhpcy5pc1BsYXllckZhY2luZyh0aGlzLl9uZWFyZXN0RW5lbXlOb2RlKSl7XHJcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLl9uZWFyZXN0RW5lbXlOb2RlLm5hbWUsIHRoaXMuaXNQbGF5ZXJGYWNpbmcodGhpcy5fbmVhcmVzdEVuZW15Tm9kZSkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpciA9IHRoaXMuX25lYXJlc3RFbmVteU5vZGUuZ2V0UG9zaXRpb24oKS5zdWIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCJDaGVjayBOZWFyZXN0IEVuZW15IFwiLCB0aGlzLl9uZWFyZXN0RW5lbXlOb2RlLmdldFBvc2l0aW9uKCksIHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLCBkaXIpO1xyXG4gICAgICAgICAgICBkaXIgPSBkaXIubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIk5vcm1hbGl6ZSBEaXIgXCIsIGRpcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9hbmdsZSA9IHRoaXMuY29udmVydFJhZDJEZWcoTWF0aC5hdGFuMihkaXIueSwgTWF0aC5hYnMoZGlyLngpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpciA9IGRpcjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIkFyY2hlciBGaXJlIFwiLCB0aGlzLl9hbmdsZSwgdGhpcy5fZGlyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbmltTmFtZUF0ayA9IEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVTdHJhaWdodDtcclxuICAgICAgICAgICAgaWYodGhpcy5fYW5nbGUgPiAyMCkgYW5pbU5hbWVBdGsgPSBBbmltTmFtZVN0aWNrLkFyY2hlckFuZ2xlVXA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYW5pbU5hbWVBdGssIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmdsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpciA9IGNjLnYyKDEgKiB0aGlzLm5vZGUuc2NhbGVYLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1OYW1lU3RpY2suQXJjaGVyQW5nbGVTdHJhaWdodCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RpY2tTaWduV2hlbkNsaWNrID0gdGhpcy5ub2RlLnNjYWxlWDtcclxuXHJcbiAgICAgICAgdGhpcy5faXNGaXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzQXR0YWNraW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQXR0YWNrKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgICAgICBcclxuICAgICAgICBjYy5sb2coXCJhcmNoZXIgbW9kZSBjbGljayBmaXJlXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb252ZXJ0UmFkMkRlZyhyYWRpYW5zKXtcclxuICAgICAgICB2YXIgcGkgPSBNYXRoLlBJO1xyXG4gICAgICAgIHJldHVybiByYWRpYW5zICogKDE4MC9waSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpcmUodHlwZSl7XHJcbiAgICAgICAgdGhpcy5faXNGaXJlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIEFuZ2xlIFN0cmFpZ2h0XHJcbiAgICAgICAgaWYodHlwZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBcnJvdyh0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW5nbGUgVXBcclxuICAgICAgICBlbHNlIGlmKHR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQXJyb3codHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVBcnJvdyh0eXBlKXtcclxuICAgICAgICBsZXQgYXJyb3dPYmogPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYkFycm93KTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGFycm93T2JqKTtcclxuXHJcbiAgICAgICAgYXJyb3dPYmoucG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuTm9kZUJvdy5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnNjYWxlWCAhPSAgdGhpcy5fc3RpY2tTaWduV2hlbkNsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5fZGlyID0gY2MudjIodGhpcy5fZGlyLnggKiAtMSwgdGhpcy5fZGlyLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFycm93TG9naWMgPSBhcnJvd09iai5nZXRDb21wb25lbnQoQXJyb3dTdGljayk7XHJcbiAgICAgICAgYXJyb3dMb2dpYy5MYXVuY2godGhpcy5fZGlyKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tOZWFyZXN0RW5lbXkoZW5lbXlOb2RlLCBkaXN0YW5jZSl7XHJcbiAgICAgICAgaWYoZGlzdGFuY2UgPCB0aGlzLl9uZWFyZXN0RW5lbXlEaXN0YW5jZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX25lYXJlc3RFbmVteURpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmVhcmVzdEVuZW15KGVuZW15Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXROZWFyZXN0RW5lbXkoZW5lbXlOb2RlKXtcclxuICAgICAgICB0aGlzLl9uZWFyZXN0RW5lbXlOb2RlID0gZW5lbXlOb2RlO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVOZWFyZXN0RW5lbXkoZW5lbXlOb2RlKXtcclxuICAgICAgICBpZih0aGlzLl9uZWFyZXN0RW5lbXlOb2RlID09IGVuZW15Tm9kZSl7XHJcbiAgICAgICAgICAgIHRoaXMuX25lYXJlc3RFbmVteU5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9uZWFyZXN0RW5lbXlEaXN0YW5jZSA9IENPTlNULk1heERpc3RhbmNlRW5lbXlBcmNoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbmRBdHRhY2soKXtcclxuICAgICAgICAvLyB0aGlzLnJlc2V0U3BlZWRBbmltKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzQXR0YWNraW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBsaW5lYXJWZWxvY2l0eSA9IHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICBpZiAobGluZWFyVmVsb2NpdHkueCA+IDAuMDEgfHwgbGluZWFyVmVsb2NpdHkueCA8IC0wLjAxKXtcclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5SdW47XHJcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltTmFtZVN0aWNrLkFyY2hlclJ1biwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZUluZm8uU3RpY2tTdGF0ZSA9IEVuU3RpY2tTdGF0ZS5JZGxlO1xyXG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbU5hbWVTdGljay5BcmNoZXJJZGxlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzUGxheWVyRmFjaW5nKGVuZW15Tm9kZSl7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS54IDwgZW5lbXlOb2RlLnggJiYgdGhpcy5ub2RlLnNjYWxlWCA+IDBcclxuICAgICAgICAgICAgfHwgdGhpcy5ub2RlLnggPiBlbmVteU5vZGUueCAmJiB0aGlzLm5vZGUuc2NhbGVYIDwgMCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/Portal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3fd3eVtg49LYIaXQUDhjPp2', 'Portal');
// Script/Others/Portal.js

"use strict";

var GameInfo = require("GameInfo");

var Player3D = require("Player3D");

cc.Class({
  "extends": cc.Component,
  properties: {
    StoneCover: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._isOpen = false;
  },
  start: function start() {},
  update: function update(dt) {
    if (this._isOpen) return;

    if (GameInfo.TotalEnemyAlive <= 0) {
      this._isOpen = true;
      this.openDoor();
    }
  },
  openDoor: function openDoor() {
    this.StoneCover.active = false;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Player") {
      this.playerEnterPortal(other);
    }
  },
  playerEnterPortal: function playerEnterPortal(playerNode) {
    console.log("Player Enter Portal " + GameInfo.TotalEnemyAlive);

    if (GameInfo.TotalEnemyAlive > 0) {
      console.log("You need kill more enemy!");
    } else {
      console.log("YOU WIN"); // Show End of Game

      playerNode.getComponent(Player3D).win();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXFBvcnRhbC5qcyJdLCJuYW1lcyI6WyJHYW1lSW5mbyIsInJlcXVpcmUiLCJQbGF5ZXIzRCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiU3RvbmVDb3ZlciIsIk5vZGUiLCJvbkxvYWQiLCJfaXNPcGVuIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIlRvdGFsRW5lbXlBbGl2ZSIsIm9wZW5Eb29yIiwiYWN0aXZlIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsIm5vZGUiLCJncm91cCIsInBsYXllckVudGVyUG9ydGFsIiwicGxheWVyTm9kZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21wb25lbnQiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLO0FBRFAsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNILEdBWEk7QUFhTEMsRUFBQUEsS0FiSyxtQkFhSSxDQUVSLENBZkk7QUFpQkxDLEVBQUFBLE1BakJLLGtCQWlCR0MsRUFqQkgsRUFpQk87QUFDUixRQUFHLEtBQUtILE9BQVIsRUFBaUI7O0FBRWpCLFFBQUdWLFFBQVEsQ0FBQ2MsZUFBVCxJQUE0QixDQUEvQixFQUFpQztBQUM3QixXQUFLSixPQUFMLEdBQWUsSUFBZjtBQUNBLFdBQUtLLFFBQUw7QUFDSDtBQUNKLEdBeEJJO0FBMEJMQSxFQUFBQSxRQTFCSyxzQkEwQks7QUFDTixTQUFLUixVQUFMLENBQWdCUyxNQUFoQixHQUF5QixLQUF6QjtBQUNILEdBNUJJO0FBOEJMQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVdDLEtBQVgsSUFBb0IsUUFBdkIsRUFBZ0M7QUFDNUIsV0FBS0MsaUJBQUwsQ0FBdUJKLEtBQXZCO0FBQ0g7QUFDSixHQWxDSTtBQW9DTEksRUFBQUEsaUJBcENLLDZCQW9DYUMsVUFwQ2IsRUFvQ3dCO0FBQ3pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBeUJ6QixRQUFRLENBQUNjLGVBQTlDOztBQUNBLFFBQUdkLFFBQVEsQ0FBQ2MsZUFBVCxHQUEyQixDQUE5QixFQUFnQztBQUM1QlUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDSCxLQUZELE1BRU87QUFDSEQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQURHLENBRUg7O0FBQ0FGLE1BQUFBLFVBQVUsQ0FBQ0csWUFBWCxDQUF3QnhCLFFBQXhCLEVBQWtDeUIsR0FBbEM7QUFDSDtBQUNKO0FBN0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWVJbmZvID0gcmVxdWlyZShcIkdhbWVJbmZvXCIpO1xyXG52YXIgUGxheWVyM0QgPSByZXF1aXJlKFwiUGxheWVyM0RcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFN0b25lQ292ZXI6IGNjLk5vZGVcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuX2lzT3BlbikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihHYW1lSW5mby5Ub3RhbEVuZW15QWxpdmUgPD0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkRvb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5Eb29yKCl7XHJcbiAgICAgICAgdGhpcy5TdG9uZUNvdmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiUGxheWVyXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckVudGVyUG9ydGFsKG90aGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXllckVudGVyUG9ydGFsKHBsYXllck5vZGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIEVudGVyIFBvcnRhbCBcIiArIEdhbWVJbmZvLlRvdGFsRW5lbXlBbGl2ZSk7XHJcbiAgICAgICAgaWYoR2FtZUluZm8uVG90YWxFbmVteUFsaXZlID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IG5lZWQga2lsbCBtb3JlIGVuZW15IVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIllPVSBXSU5cIik7XHJcbiAgICAgICAgICAgIC8vIFNob3cgRW5kIG9mIEdhbWVcclxuICAgICAgICAgICAgcGxheWVyTm9kZS5nZXRDb21wb25lbnQoUGxheWVyM0QpLndpbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/HandTutorial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e28fbQo9BVHNLWxmVSNJWkz', 'HandTutorial');
// Script/Others/HandTutorial.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Hand: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    cc.tween(this.Hand).repeatForever(cc.tween().to(1, {
      position: cc.v2(0, 20)
    }).to(1, {
      position: cc.v2(0, 0)
    })).start();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXEhhbmRUdXRvcmlhbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkhhbmQiLCJOb2RlIiwic3RhcnQiLCJ0d2VlbiIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsInBvc2l0aW9uIiwidjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdJO0FBQ0xOLElBQUFBLEVBQUUsQ0FBQ08sS0FBSCxDQUFTLEtBQUtILElBQWQsRUFDQ0ksYUFERCxDQUVJUixFQUFFLENBQUNPLEtBQUgsR0FBV0UsRUFBWCxDQUFjLENBQWQsRUFBaUI7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEVBQVMsRUFBVDtBQUFYLEtBQWpCLEVBQ0NGLEVBREQsQ0FDSSxDQURKLEVBQ087QUFBQ0MsTUFBQUEsUUFBUSxFQUFFVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBVDtBQUFYLEtBRFAsQ0FGSixFQUlDTCxLQUpEO0FBS0gsR0FqQkksQ0FtQkw7O0FBbkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEhhbmQ6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5IYW5kKVxyXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKDEsIHtwb3NpdGlvbjogY2MudjIoMCwgMjApfSlcclxuICAgICAgICAgICAgLnRvKDEsIHtwb3NpdGlvbjogY2MudjIoMCwgMCl9KSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy/HealthBarEnemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9845K/gYlJtr3Brfor2Gf6', 'HealthBarEnemy');
// Script/Enemy/HealthBarEnemy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    FillSprite: cc.Sprite
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // this._maxHP = 0;
    // this._currentHP = 0;
    this.nodeParent = this.node.parent.parent;
  },
  start: function start() {},
  update: function update(dt) {
    if (this.nodeParent.scaleX < 0) this.node.scaleX = -1;else this.node.scaleX = 1;
  },
  init: function init(hp) {
    this._maxHP = hp;
    this._currentHP = hp;
    this.FillSprite.fillStart = 1;
    this.FillSprite.fillRange = -1;
  },
  setHP: function setHP(hp) {
    cc.log("Enemy Set HP ", hp);
    this._currentHP = hp; // this.FillSprite.fillStart = this._currentHP / this._maxHP;

    cc.tween(this.FillSprite).to(0.25, {
      fillStart: this._currentHP / this._maxHP
    }).start();
  },
  decrement: function decrement(damp) {
    cc.log("Health Bar Enemy ", damp);
    var currentHp = this._currentHP - damp;
    if (currentHp < 0) currentHp = 0;
    this.setHP(currentHp);
  },
  isAlive: function isAlive() {
    return this._currentHP > 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteVxcSGVhbHRoQmFyRW5lbXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJGaWxsU3ByaXRlIiwiU3ByaXRlIiwib25Mb2FkIiwibm9kZVBhcmVudCIsIm5vZGUiLCJwYXJlbnQiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwic2NhbGVYIiwiaW5pdCIsImhwIiwiX21heEhQIiwiX2N1cnJlbnRIUCIsImZpbGxTdGFydCIsImZpbGxSYW5nZSIsInNldEhQIiwibG9nIiwidHdlZW4iLCJ0byIsImRlY3JlbWVudCIsImRhbXAiLCJjdXJyZW50SHAiLCJpc0FsaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLO0FBRFAsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTjtBQUNBO0FBRUEsU0FBS0MsVUFBTCxHQUFrQixLQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJBLE1BQW5DO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7QUFvQkxDLEVBQUFBLE1BcEJLLGtCQW9CR0MsRUFwQkgsRUFvQk87QUFDUixRQUFHLEtBQUtMLFVBQUwsQ0FBZ0JNLE1BQWhCLEdBQXlCLENBQTVCLEVBQStCLEtBQUtMLElBQUwsQ0FBVUssTUFBVixHQUFtQixDQUFDLENBQXBCLENBQS9CLEtBQ0ssS0FBS0wsSUFBTCxDQUFVSyxNQUFWLEdBQW1CLENBQW5CO0FBQ1IsR0F2Qkk7QUF5QkxDLEVBQUFBLElBekJLLGdCQXlCQUMsRUF6QkEsRUF5Qkc7QUFDSixTQUFLQyxNQUFMLEdBQWNELEVBQWQ7QUFDQSxTQUFLRSxVQUFMLEdBQWtCRixFQUFsQjtBQUVBLFNBQUtYLFVBQUwsQ0FBZ0JjLFNBQWhCLEdBQTRCLENBQTVCO0FBQ0EsU0FBS2QsVUFBTCxDQUFnQmUsU0FBaEIsR0FBNEIsQ0FBQyxDQUE3QjtBQUNILEdBL0JJO0FBaUNMQyxFQUFBQSxLQWpDSyxpQkFpQ0NMLEVBakNELEVBaUNJO0FBQ0xmLElBQUFBLEVBQUUsQ0FBQ3FCLEdBQUgsQ0FBTyxlQUFQLEVBQXdCTixFQUF4QjtBQUNBLFNBQUtFLFVBQUwsR0FBa0JGLEVBQWxCLENBRkssQ0FHTDs7QUFDQWYsSUFBQUEsRUFBRSxDQUFDc0IsS0FBSCxDQUFTLEtBQUtsQixVQUFkLEVBQ0NtQixFQURELENBQ0ssSUFETCxFQUNXO0FBQUNMLE1BQUFBLFNBQVMsRUFBRSxLQUFLRCxVQUFMLEdBQWtCLEtBQUtEO0FBQW5DLEtBRFgsRUFFQ04sS0FGRDtBQUdILEdBeENJO0FBMENMYyxFQUFBQSxTQTFDSyxxQkEwQ0tDLElBMUNMLEVBMENVO0FBQ1h6QixJQUFBQSxFQUFFLENBQUNxQixHQUFILENBQU8sbUJBQVAsRUFBNEJJLElBQTVCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtULFVBQUwsR0FBa0JRLElBQWxDO0FBQ0EsUUFBR0MsU0FBUyxHQUFHLENBQWYsRUFBa0JBLFNBQVMsR0FBRyxDQUFaO0FBQ2xCLFNBQUtOLEtBQUwsQ0FBV00sU0FBWDtBQUNILEdBL0NJO0FBaURMQyxFQUFBQSxPQWpESyxxQkFpREk7QUFDTCxXQUFPLEtBQUtWLFVBQUwsR0FBa0IsQ0FBekI7QUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEZpbGxTcHJpdGU6IGNjLlNwcml0ZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLl9tYXhIUCA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5fY3VycmVudEhQID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlUGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMubm9kZVBhcmVudC5zY2FsZVggPCAwKSB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgZWxzZSB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChocCl7XHJcbiAgICAgICAgdGhpcy5fbWF4SFAgPSBocDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50SFAgPSBocDtcclxuXHJcbiAgICAgICAgdGhpcy5GaWxsU3ByaXRlLmZpbGxTdGFydCA9IDE7XHJcbiAgICAgICAgdGhpcy5GaWxsU3ByaXRlLmZpbGxSYW5nZSA9IC0xO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRIUChocCl7XHJcbiAgICAgICAgY2MubG9nKFwiRW5lbXkgU2V0IEhQIFwiLCBocCk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEhQID0gaHA7XHJcbiAgICAgICAgLy8gdGhpcy5GaWxsU3ByaXRlLmZpbGxTdGFydCA9IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuRmlsbFNwcml0ZSlcclxuICAgICAgICAudG8gKDAuMjUsIHtmaWxsU3RhcnQ6IHRoaXMuX2N1cnJlbnRIUCAvIHRoaXMuX21heEhQfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVjcmVtZW50KGRhbXApe1xyXG4gICAgICAgIGNjLmxvZyhcIkhlYWx0aCBCYXIgRW5lbXkgXCIsIGRhbXApO1xyXG4gICAgICAgIGxldCBjdXJyZW50SHAgPSB0aGlzLl9jdXJyZW50SFAgLSBkYW1wO1xyXG4gICAgICAgIGlmKGN1cnJlbnRIcCA8IDApIGN1cnJlbnRIcCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRIUChjdXJyZW50SHApO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc0FsaXZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRIUCA+IDA7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controllers/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccbfdQ+oHFPALFErHTl9lRY', 'AudioManager');
// Script/Controllers/AudioManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bgSound: cc.AudioSource,
    hitSound: cc.AudioSource,
    dieSound: cc.AudioSource,
    getItemSound: cc.AudioSource,
    dashSound: cc.AudioSource,
    winSound: cc.AudioSource,
    runSound: cc.AudioSource,
    bladeSound: cc.AudioSource,
    bowSound: cc.AudioSource,
    hitBowSound: cc.AudioSource
  },
  stopAllSound: function stopAllSound() {
    this.bgSound.stop();
    this.hitSound.stop();
    this.dieSound.stop();
    this.getItemSound.stop();
    this.dashSound.stop();
    this.winSound.stop();
    this.runSound.stop();
    this.bladeSound.stop();
    this.bowSound.stop();
    this.hitBowSound.stop();
  },
  start: function start() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb250cm9sbGVyc1xcQXVkaW9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmdTb3VuZCIsIkF1ZGlvU291cmNlIiwiaGl0U291bmQiLCJkaWVTb3VuZCIsImdldEl0ZW1Tb3VuZCIsImRhc2hTb3VuZCIsIndpblNvdW5kIiwicnVuU291bmQiLCJibGFkZVNvdW5kIiwiYm93U291bmQiLCJoaXRCb3dTb3VuZCIsInN0b3BBbGxTb3VuZCIsInN0b3AiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxXQURKO0FBRVJDLElBQUFBLFFBQVEsRUFBRU4sRUFBRSxDQUFDSyxXQUZMO0FBR1JFLElBQUFBLFFBQVEsRUFBRVAsRUFBRSxDQUFDSyxXQUhMO0FBSVJHLElBQUFBLFlBQVksRUFBRVIsRUFBRSxDQUFDSyxXQUpUO0FBS1JJLElBQUFBLFNBQVMsRUFBRVQsRUFBRSxDQUFDSyxXQUxOO0FBTVJLLElBQUFBLFFBQVEsRUFBRVYsRUFBRSxDQUFDSyxXQU5MO0FBT1JNLElBQUFBLFFBQVEsRUFBRVgsRUFBRSxDQUFDSyxXQVBMO0FBUVJPLElBQUFBLFVBQVUsRUFBRVosRUFBRSxDQUFDSyxXQVJQO0FBU1JRLElBQUFBLFFBQVEsRUFBRWIsRUFBRSxDQUFDSyxXQVRMO0FBVVJTLElBQUFBLFdBQVcsRUFBRWQsRUFBRSxDQUFDSztBQVZSLEdBSFA7QUFpQkxVLEVBQUFBLFlBakJLLDBCQWlCVTtBQUNYLFNBQUtYLE9BQUwsQ0FBYVksSUFBYjtBQUNBLFNBQUtWLFFBQUwsQ0FBY1UsSUFBZDtBQUNBLFNBQUtULFFBQUwsQ0FBY1MsSUFBZDtBQUNBLFNBQUtSLFlBQUwsQ0FBa0JRLElBQWxCO0FBQ0EsU0FBS1AsU0FBTCxDQUFlTyxJQUFmO0FBQ0EsU0FBS04sUUFBTCxDQUFjTSxJQUFkO0FBQ0EsU0FBS0wsUUFBTCxDQUFjSyxJQUFkO0FBQ0EsU0FBS0osVUFBTCxDQUFnQkksSUFBaEI7QUFDQSxTQUFLSCxRQUFMLENBQWNHLElBQWQ7QUFDQSxTQUFLRixXQUFMLENBQWlCRSxJQUFqQjtBQUNILEdBNUJJO0FBK0JMQyxFQUFBQSxLQS9CSyxtQkErQkcsQ0FFUDtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZ1NvdW5kOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICBoaXRTb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICAgICAgZGllU291bmQ6IGNjLkF1ZGlvU291cmNlLFxyXG4gICAgICAgIGdldEl0ZW1Tb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICAgICAgZGFzaFNvdW5kOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICB3aW5Tb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICAgICAgcnVuU291bmQ6IGNjLkF1ZGlvU291cmNlLFxyXG4gICAgICAgIGJsYWRlU291bmQ6IGNjLkF1ZGlvU291cmNlLFxyXG4gICAgICAgIGJvd1NvdW5kOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICBoaXRCb3dTb3VuZDogY2MuQXVkaW9Tb3VyY2UsXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdG9wQWxsU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5iZ1NvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmhpdFNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmRpZVNvdW5kLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmdldEl0ZW1Tb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5kYXNoU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMud2luU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMucnVuU291bmQuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuYmxhZGVTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5ib3dTb3VuZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5oaXRCb3dTb3VuZC5zdG9wKCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Character/ArrowStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '505761rl/pJ/o3Grk5BfFAd', 'ArrowStick');
// Script/Character/ArrowStick.js

"use strict";

var CONST = require("CONST");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this._isLanching = false;
    this._speed = CONST.StickArrowSpeed;
    this._normalize = cc.v2(0, 0);
  },
  start: function start() {},
  Launch: function Launch(normalize) {
    this._isLanching = true;
    this._normalize = normalize;
    this.node.angle = 1 * this.convertRad2Deg(Math.atan2(this._normalize.y, this._normalize.x));
    cc.log(this._speed, this.node.angle);
  },
  update: function update(dt) {
    if (!this._isLanching) return;
    this.node.setPosition(this.node.x + this._normalize.x * this._speed * 10 * dt, this.node.y + this._normalize.y * this._speed * 10 * dt);
  },
  hitEnemy: function hitEnemy() {
    console.log("Arrow Hit Enemy"); // enemy.hit();

    this.node.destroy();
  },
  hitPlatform: function hitPlatform() {
    console.log("Arrow Hit Platform");
    this._isLanching = false;
    this.node.destroy();
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == "Enemy") {
      this.hitEnemy();
      window.isHitArrow = true;
    } else if (other.node.group == "Solid") {
      this.hitPlatform();
    }
  },
  convertRad2Deg: function convertRad2Deg(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDaGFyYWN0ZXJcXEFycm93U3RpY2suanMiXSwibmFtZXMiOlsiQ09OU1QiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJfaXNMYW5jaGluZyIsIl9zcGVlZCIsIlN0aWNrQXJyb3dTcGVlZCIsIl9ub3JtYWxpemUiLCJ2MiIsInN0YXJ0IiwiTGF1bmNoIiwibm9ybWFsaXplIiwibm9kZSIsImFuZ2xlIiwiY29udmVydFJhZDJEZWciLCJNYXRoIiwiYXRhbjIiLCJ5IiwieCIsImxvZyIsInVwZGF0ZSIsImR0Iiwic2V0UG9zaXRpb24iLCJoaXRFbmVteSIsImNvbnNvbGUiLCJkZXN0cm95IiwiaGl0UGxhdGZvcm0iLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ3JvdXAiLCJ3aW5kb3ciLCJpc0hpdEFycm93IiwicmFkaWFucyIsInBpIiwiUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFyQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBY1IsS0FBSyxDQUFDUyxlQUFwQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JSLEVBQUUsQ0FBQ1MsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQWxCO0FBQ0gsR0FiSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7QUFxQkxDLEVBQUFBLE1BckJLLGtCQXFCRUMsU0FyQkYsRUFxQlk7QUFDYixTQUFLUCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0csVUFBTCxHQUFrQkksU0FBbEI7QUFFQSxTQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0IsSUFBSSxLQUFLQyxjQUFMLENBQW9CQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLVCxVQUFMLENBQWdCVSxDQUEzQixFQUE4QixLQUFLVixVQUFMLENBQWdCVyxDQUE5QyxDQUFwQixDQUF0QjtBQUVBbkIsSUFBQUEsRUFBRSxDQUFDb0IsR0FBSCxDQUFPLEtBQUtkLE1BQVosRUFBb0IsS0FBS08sSUFBTCxDQUFVQyxLQUE5QjtBQUNILEdBNUJJO0FBK0JMTyxFQUFBQSxNQS9CSyxrQkErQkdDLEVBL0JILEVBK0JPO0FBQ1IsUUFBRyxDQUFDLEtBQUtqQixXQUFULEVBQXNCO0FBRXRCLFNBQUtRLElBQUwsQ0FBVVUsV0FBVixDQUFzQixLQUFLVixJQUFMLENBQVVNLENBQVYsR0FBYyxLQUFLWCxVQUFMLENBQWdCVyxDQUFoQixHQUFvQixLQUFLYixNQUF6QixHQUFrQyxFQUFsQyxHQUF1Q2dCLEVBQTNFLEVBQStFLEtBQUtULElBQUwsQ0FBVUssQ0FBVixHQUFjLEtBQUtWLFVBQUwsQ0FBZ0JVLENBQWhCLEdBQW9CLEtBQUtaLE1BQXpCLEdBQWtDLEVBQWxDLEdBQXVDZ0IsRUFBcEk7QUFDSCxHQW5DSTtBQXNDTEUsRUFBQUEsUUF0Q0ssc0JBc0NLO0FBQ05DLElBQUFBLE9BQU8sQ0FBQ0wsR0FBUixDQUFZLGlCQUFaLEVBRE0sQ0FFTjs7QUFDQSxTQUFLUCxJQUFMLENBQVVhLE9BQVY7QUFDSCxHQTFDSTtBQTZDTEMsRUFBQUEsV0E3Q0sseUJBNkNRO0FBQ1RGLElBQUFBLE9BQU8sQ0FBQ0wsR0FBUixDQUFZLG9CQUFaO0FBQ0EsU0FBS2YsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtRLElBQUwsQ0FBVWEsT0FBVjtBQUNILEdBakRJO0FBb0RMRSxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBR0QsS0FBSyxDQUFDaEIsSUFBTixDQUFXa0IsS0FBWCxJQUFvQixPQUF2QixFQUErQjtBQUMzQixXQUFLUCxRQUFMO0FBQ0FRLE1BQUFBLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUFwQjtBQUNILEtBSEQsTUFHTyxJQUFHSixLQUFLLENBQUNoQixJQUFOLENBQVdrQixLQUFYLElBQW9CLE9BQXZCLEVBQStCO0FBQ2xDLFdBQUtKLFdBQUw7QUFDSDtBQUNKLEdBM0RJO0FBOERMWixFQUFBQSxjQTlESywwQkE4RFVtQixPQTlEVixFQThEa0I7QUFDbkIsUUFBSUMsRUFBRSxHQUFHbkIsSUFBSSxDQUFDb0IsRUFBZDtBQUNBLFdBQU9GLE9BQU8sSUFBSSxNQUFJQyxFQUFSLENBQWQ7QUFDSDtBQWpFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05TVCA9IHJlcXVpcmUoXCJDT05TVFwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5faXNMYW5jaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gQ09OU1QuU3RpY2tBcnJvd1NwZWVkO1xyXG4gICAgICAgIHRoaXMuX25vcm1hbGl6ZSA9IGNjLnYyKDAsMCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBMYXVuY2gobm9ybWFsaXplKXtcclxuICAgICAgICB0aGlzLl9pc0xhbmNoaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9ub3JtYWxpemUgPSBub3JtYWxpemU7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IDEgKiB0aGlzLmNvbnZlcnRSYWQyRGVnKE1hdGguYXRhbjIodGhpcy5fbm9ybWFsaXplLnksIHRoaXMuX25vcm1hbGl6ZS54KSk7XHJcblxyXG4gICAgICAgIGNjLmxvZyh0aGlzLl9zcGVlZCwgdGhpcy5ub2RlLmFuZ2xlKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5faXNMYW5jaGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnggKyB0aGlzLl9ub3JtYWxpemUueCAqIHRoaXMuX3NwZWVkICogMTAgKiBkdCwgdGhpcy5ub2RlLnkgKyB0aGlzLl9ub3JtYWxpemUueSAqIHRoaXMuX3NwZWVkICogMTAgKiBkdCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBoaXRFbmVteSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXJyb3cgSGl0IEVuZW15XCIpO1xyXG4gICAgICAgIC8vIGVuZW15LmhpdCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBoaXRQbGF0Zm9ybSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXJyb3cgSGl0IFBsYXRmb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuX2lzTGFuY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIkVuZW15XCIpe1xyXG4gICAgICAgICAgICB0aGlzLmhpdEVuZW15KCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5pc0hpdEFycm93ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIlNvbGlkXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmhpdFBsYXRmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgY29udmVydFJhZDJEZWcocmFkaWFucyl7XHJcbiAgICAgICAgdmFyIHBpID0gTWF0aC5QSTtcclxuICAgICAgICByZXR1cm4gcmFkaWFucyAqICgxODAvcGkpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/PopupInstall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6dff9Yxt61PyrkiHsAfR5h2', 'PopupInstall');
// Script/Others/PopupInstall.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXFBvcHVwSW5zdGFsbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJLENBRVIsQ0EzQkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/MoveInput.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59e4ba51R5CiKEFwHH+L0Im', 'MoveInput');
// Script/Helper/MoveInput.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXE1vdmVJbnB1dC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJJLENBRVIsQ0EzQkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Others/ArrowRatation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c1f091xItG7Y/LEed3IQ/F', 'ArrowRatation');
// Script/Others/ArrowRatation.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    cc.tween(this.node).repeatForever(cc.tween(this.node).to(0.5, {
      opacity: 0
    }).to(0.5, {
      opacity: 255
    }, {
      easing: 'elasticOut'
    })).start();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlcnNcXEFycm93UmF0YXRpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInR3ZWVuIiwibm9kZSIsInJlcGVhdEZvcmV2ZXIiLCJ0byIsIm9wYWNpdHkiLCJlYXNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5Qkk7QUFDTEosSUFBQUEsRUFBRSxDQUFDSyxLQUFILENBQVMsS0FBS0MsSUFBZCxFQUNDQyxhQURELENBRUlQLEVBQUUsQ0FBQ0ssS0FBSCxDQUFTLEtBQUtDLElBQWQsRUFDQ0UsRUFERCxDQUNJLEdBREosRUFDUztBQUFDQyxNQUFBQSxPQUFPLEVBQUc7QUFBWCxLQURULEVBRUNELEVBRkQsQ0FFSSxHQUZKLEVBRVM7QUFBQ0MsTUFBQUEsT0FBTyxFQUFHO0FBQVgsS0FGVCxFQUUwQjtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUYxQixDQUZKLEVBS0VOLEtBTEY7QUFNSCxHQWhDSSxDQWtDTDs7QUFsQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7b3BhY2l0eSA6IDB9KVxyXG4gICAgICAgICAgICAudG8oMC41LCB7b3BhY2l0eSA6IDI1NX0sIHsgZWFzaW5nOiAnZWxhc3RpY091dCd9KVxyXG4gICAgICAgICkuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
