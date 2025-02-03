import { _decorator, Component, easing, Graphics, Label, log, Node, tween, UITransform, Vec3 } from 'cc';
import { RoboBehavior } from '../Robo/RoboBehavior';
import { RoboAnim } from '../Robo/RoboAnim';
import { GameInfo } from '../Const/GameInfo';
import { RoboController } from '../Controller/RoboController';
import { RoboLevel } from '../Robo/RoboLevel';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;


/**
 * Predefined variables
 * Name = HandleLogicGamePlay
 * DateTime = Tue Aug 27 2024 15:51:28 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = HandleLogicGamePlay.ts
 * FileBasenameNoExtension = HandleLogicGamePlay
 * URL = db://assets/Scripts/Others/HandleLogicGamePlay.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
*/


// Intersect Step -------------------
const HandleIntersectsPoints = (mergePoints: Node[], point: Node) => {
    let pointBdx = point.getComponent(UITransform).getBoundingBox();

    for (let index = 0; index < mergePoints.length; index++) {
        const mergePoint = mergePoints[index];
        const mergePointBdx = mergePoint.getComponent(UITransform).getBoundingBox();
        const roboChoosen = GameInfo.playerStartGameRobo[index].getComponent(RoboBehavior);

        if (pointBdx.intersects(mergePointBdx) && !roboChoosen.isPickup) {
            GameInfo.lastPosOfTouchEnd = GameInfo.playerStartGameRobo[index].parent.getPosition();

            GameInfo.lastPointOfTouchEndRobo = GameInfo.playerStartGameRobo[index].parent;

            log("last point: ----", GameInfo.lastPointOfTouchEndRobo.name, "----")

            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.chooseSound);

            roboChoosen.switchAnim(RoboAnim.Pickup);
        }
    }
}
// -------------------


// draw Graphics Step -------------------
const HandleDrawGraphics = (moveTo: Vec3, LineTo: Vec3, graphics: Graphics): void => {
    graphics.moveTo(moveTo.x, moveTo.y);
    graphics.lineTo(LineTo.x, LineTo.y);
    graphics.stroke();
    log("Drawing");
}


const HandleClearGraphics = (graphics: Graphics): void => {
    graphics.clear();
    log("Clear Graphics");
}
// -------------------


// Merge Step -------------------
const mergeRobo = () => {
    GameInfo.isCanTouch = false;

    // get the parent of all chosen robo
    let roboChoosenArr = GameInfo.playerStartGameRobo.filter((robo, index) => {
        return robo.getComponent(RoboBehavior).isPickup;
    });

    let isAllChosen = GameInfo.playerStartGameRobo.every((robo, index) => {
        return robo.getComponent(RoboBehavior).isPickup;
    });

    GameInfo.playerStartGameRobo = GameInfo.playerStartGameRobo.filter(
        robo => !robo.getComponent(RoboBehavior).isPickup
    );

    log("roboChoosenArr:", roboChoosenArr)


    // move to last touchend Merge Point
    roboChoosenArr.forEach((robo, index) =>
        tween(robo.parent)
            .to(0.5, { position: GameInfo.lastPosOfTouchEnd }, { easing: easing.smooth })
            .call(() => {

                // get Robo index name
                let roboIndexName = null;
                let match = robo.name.match(/\d+/);
                if (match) roboIndexName = parseInt(match[0], 10);

                // get UI Level Component
                let UI_RoboLevel = GameInfo.playerRoboLevelArr[roboIndexName - 1];

                UI_RoboLevel.getComponent(RoboLevel).variableIsSet = false;

                // remove Robo & UI Level Robo
                robo.active = false;
                UI_RoboLevel.active = false;
                UI_RoboLevel.getComponent(Label).string = "";
                UI_RoboLevel.destroy();
                // robo.destroy();
            })
            .start()
    );

    // settimeout to show robo merged
    setTimeout(() => {
        GameInfo.mergeCount += 1; 

        let level: number = GameInfo.currentOption === 13 ? 1 : 3;

        RoboController.Instance(RoboController).spawnRoboLevel_2(roboChoosenArr.length * level);

        log("spawn Robo Lv2");

        // xóa các điểm mergePoint tương ứng với robo được merge
        if (GameInfo.mergeCount <= 1)
            for (let index = 0; index < roboChoosenArr.length; index++) {
                const robo = roboChoosenArr[index];
                let roboIndexName = null;
                let match = robo.name.match(/\d+/);
                if (match) roboIndexName = parseInt(match[0], 10);

                GameInfo.UI_MergePoint[roboIndexName - 1].active = false;
            }

        GameInfo.UI_MergePoint = GameInfo.UI_MergePoint.filter(
            point => point.active
        );

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.mergeSound);

        // nếu tất cả robo đều đã được chọn
        if(isAllChosen) {
            GameInfo.isCanTouch = false;
            GameInfo.isReadyToFight = true;
            return;
        }

        // nếu là op 13 thì cho merge 1 lần là đánh luôn
        if(GameInfo.currentOption === 13) {
            GameInfo.isCanTouch = false;
            GameInfo.isReadyToFight = true;
            return;
        }
 
        // nếu sau lần merge đầu tiên mà vẫn còn robo thì vẫn cho vẽ tiếp
        if (GameInfo.mergeCount === 1 && roboChoosenArr.length >= 2) {
            GameInfo.isCanTouch = true;
        } else {
            GameInfo.isCanTouch = false;
            GameInfo.isReadyToFight = true;
        }

    }, 500);
}

const resetRobos = () => {
    log("Choose Fail");

    GameInfo.isCanTouch = true;

    GameInfo.playerStartGameRobo.forEach(
        robo => {
            robo.getComponent(RoboBehavior).switchAnim(RoboAnim.Idle);
            robo.getComponent(RoboBehavior).isPickup = false;
        }
    );

}
// -------------------


export class LogicGamePlay {
    static HandleIntersectsPoints = HandleIntersectsPoints;

    static HandleDrawGraphics = HandleDrawGraphics;

    static HandleClearGraphics = HandleClearGraphics;

    static mergeRobo = mergeRobo;

    static resetRobos = resetRobos;
}

