import { Constants } from "./constants";

const { ccclass, property } = cc._decorator;


const checkCollideBubblePoints = (bdx: cc.Rect): void => {
    for (let i = 0; i < Constants.cleanHair_Points.length; i++) {
        let currentNode = Constants.cleanHair_Points[i];
        if (currentNode.getBoundingBox().intersects(bdx)) {
            Constants.isTouchCleanHair = true;
            for (let j = 0; j < Constants.cleanHair_PointsStatus.length; j++) {
                if (!Constants.cleanHair_PointsStatus[j]) {
                    Constants.cleanHair_PointsStatus[j] = true;
                    Constants.cleanHair_Points.splice(i, 1);

                    Constants.spine_Bubbles[i].setAnimation(0, "action03_only_bubble", false);
                    Constants.spine_Bubbles.splice(i, 1);

                    if (Constants.cleanHair_PointsStatus.every(status => status === true)) {
                        Constants.isDoneCleanHair = true;
                    }
                    break;
                }
            }
            break;
        }
    }
}

const checkCollideMaggot = (bdx: cc.Rect, maggot: cc.Rect): void => {
    if(bdx.intersects(maggot)) {
        Constants.isTouchMaggot = true;
    }
}

const TouchArea = {
    // checkCollideBubblePoints: checkCollideBubblePoints,
    // checkCollideMaggot: checkCollideMaggot
}

export class Ultils {

   static TouchArea: typeof TouchArea = TouchArea;

}