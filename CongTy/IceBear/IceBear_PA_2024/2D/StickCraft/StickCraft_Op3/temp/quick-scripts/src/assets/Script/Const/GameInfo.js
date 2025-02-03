"use strict";
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