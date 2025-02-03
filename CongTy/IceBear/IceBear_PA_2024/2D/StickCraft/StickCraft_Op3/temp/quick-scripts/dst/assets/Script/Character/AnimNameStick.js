
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