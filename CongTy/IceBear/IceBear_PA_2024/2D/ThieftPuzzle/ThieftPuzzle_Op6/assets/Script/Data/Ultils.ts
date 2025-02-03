import { Constants } from "./constants";

const { ccclass, property } = cc._decorator;

const rotateDefault = (basePoint: cc.Vec2): number => {
    let thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    let directionVector = thisPos.sub(Constants.pointA_Pos);
    const rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    const rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
}

const rotateWithPoint = (basePoint: cc.Vec2): number => {
    let thisPos = new cc.Vec2(basePoint.x, basePoint.y);
    let directionVector = thisPos.sub(Constants.newPoint);
    const rotationRadians = Math.atan2(directionVector.y, directionVector.x);
    const rotationDegrees = cc.misc.radiansToDegrees(rotationRadians);
    return rotationDegrees + 20;
}


// const checkConditionOfPoint1 = (hand: cc.Node, point: cc.Node): boolean => {
//     let boudingBox = hand.getBoundingBox();
//     let result = false;

//     if (
//         (boudingBox.intersects(point.getBoundingBox()) && Constants.newPoint !== point.getPosition())
//     ) {
//         Constants.isTouchPoint1 = true;
//         result = true;
//     }

//     return result;
// }

// const checkConditionWithPoint = (hand: cc.Node, point: cc.Node, oldPoint: cc.Node, index: number): boolean => {
//     let boudingBox = hand.getBoundingBox();
//     let result = false;

//     if (
//         boudingBox.intersects(point.getBoundingBox())
//         && Constants.newPoint !== point.getPosition()
//     ) {
//         result = true;
//     }

//     return result;
// }


const checkTouchCondition1 = (hand: cc.Node, point: cc.Node, graphic: cc.Graphics, pointCompare: cc.Node): void => {
    if (hand.x > pointCompare.x && hand.y > pointCompare.y) {
        return;
    }


    if(hand.x < point.x &&  !Constants.isTouchPoint2) {
            Constants.isDrawPoint1 = false;
            Constants.isTouchPoint1 = false;
            Constants.newPoint = Constants.pointA_Pos;
            graphic.clear();
            return;
    }

    if (hand.x > point.x && hand.y > point.y && !Constants.isTouchPoint1) {
        Constants.isTouchPoint1 = true;
        Constants.newPoint = point.getPosition();
    }
}

// const checkTouchCondition2 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x > newPoint.x && hand.y < newPoint.y && Constants.isTouchPoint1) {
//         Constants.isTouchPoint2 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }

// const checkTouchCondition3 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x < newPoint.x && hand.y < newPoint.y && Constants.isTouchPoint1 && !Constants.isTouchPoint3) {
//         Constants.isTouchPoint3 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }

// const checkTouchCondition4 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node): void => {
//     if (hand.x < newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1 && Constants.isTouchPoint3 && !Constants.isTouchPoint4) {
//         Constants.isTouchPoint4 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }

// const checkTouchCondition5 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node, graphic: cc.Graphics): void => {
//     if (hand.x < newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1 && Constants.isTouchPoint4 && !Constants.isTouchPoint5) {
//         Constants.isTouchPoint5 = true;
//         Constants.oldPoint = oldPoint.getPosition();
//         Constants.newPoint = newPoint.getPosition();
//     }
// }

const checkTouchCondition6 = (hand: cc.Node, newPoint: cc.Node, oldPoint: cc.Node, graphics: cc.Graphics): void => {
    if(!Constants.isTouchPoint2  && !Constants.isTouchPoint3 && !Constants.isTouchPoint4) {
        if (hand.x < newPoint.x  && Constants.isTouchPoint1) {
            graphics.clear();
            Constants.isDrawPoint6 = false;
            Constants.isTouchPoint6 = false;
            return;
        }
    
        if (hand.x > newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1) {
            Constants.isTouchPoint6 = true;
            Constants.oldPoint = oldPoint.getPosition();
            Constants.newPoint = newPoint.getPosition();
        }
    } 
    
    
    if (Constants.isTouchPoint2  && Constants.isTouchPoint3 && Constants.isTouchPoint4) {
        if (hand.x < newPoint.x) {
            graphics.clear();
            Constants.isDrawPoint6 = false;
            Constants.isTouchPoint6 = false;
            Constants.oldPoint = Constants.point4Pos; 
            Constants.newPoint = Constants.point1Pos;
            return;
        }

        if (hand.x > newPoint.x && hand.y > newPoint.y && Constants.isTouchPoint1) {
            Constants.isTouchPoint6 = true;
            Constants.oldPoint = oldPoint.getPosition();
            Constants.newPoint = newPoint.getPosition();
        }
    }
}

const checkTouchCondition7 = (hand: cc.Node): void => {
    if(Constants.isTouchPoint1) {
        if(hand.x < Constants.point5Pos.x) {
            Constants.oldPoint = Constants.pointA_Pos;
            Constants.newPoint = Constants.point1Pos;
        }
    }
}

const checkTouchCondition8 = (hand: cc.Node, graphic: cc.Graphics): void => {
    if(Constants.isTouchPoint1 && Constants.isTouchPoint6) {
        if(hand.x < Constants.point6Pos.x && Constants.isTouchPoint7) {
            graphic.clear();
            Constants.isTouchPoint7 = false;
            Constants.isDrawPoint7 = false;
            Constants.oldPoint = Constants.point1Pos;
            Constants.newPoint = Constants.point5Pos;
            return;
        }

        if(hand.x > Constants.point6Pos.x) {
            Constants.isTouchPoint7 = true;
            Constants.oldPoint = Constants.point5Pos;
            Constants.newPoint = Constants.point6Pos;
        }
    }
}

const checkTouchCondition9 = (boudingbox: cc.Rect, hand: cc.Node): void => {
    if(Constants.isTouchPoint1 && boudingbox.intersects(hand.getBoundingBox())) {
        Constants.isTouchFence = true;
    } else {
        Constants.isTouchFence = false;
    }
}


const checkTouchPoint = (fence: cc.Node, hand: cc.Node, fenceLeft: cc.Node): void => {
    let f_BoudingBox = fence.getBoundingBox();
    let fl_BoudingBox = fenceLeft.getBoundingBox();
    let h_BoudingBox = hand.getBoundingBox();
    let checkPosX = Constants.currentPosition.x - cc.winSize.width / 2;
    let checkPosY = Constants.currentPosition.y - cc.winSize.height / 2;


    // // touch point 7 
    // if(Constants.isTouchPoint7) {
    //     if(checkPosX < Constants.point6Pos.x) {
    //         return;
    //     }

    //     if(checkPosX < Constants.point6Pos.x && checkPosY > Constants.point6Pos.y) {
    //         Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //         // Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //         return;
    //     }
    //     Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    //     Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
    //     return;
    // }


    // // touch point 6
    if(Constants.isTouchPoint6 && f_BoudingBox.intersects(h_BoudingBox)) {
        if(checkPosY < Constants.point7Pos.y) {
            return;
        }

        Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
        Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }


    // touch fence
    if(f_BoudingBox.intersects(h_BoudingBox)) {
        if(Constants.fencePoint.y > checkPosY) {
            return;
        }
       
        if(Constants.fencePoint.y < checkPosY && Constants.point2Pos.x > checkPosX) {
            Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
            Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }

        Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }


    // touch point 3 && 4
    if(h_BoudingBox.intersects(Constants.point3Bdb) || h_BoudingBox.intersects(Constants.point4Bdb)) {
        if(checkPosY < Constants.point3Pos.y && checkPosX < Constants.point3Pos.x) {
            Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
            Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        } 

        Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
        return;
    }


    // tooouch fence Left
    if(fl_BoudingBox.intersects(h_BoudingBox)) {
        if(checkPosX <  fenceLeft.x) {
            Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
            Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
            return;
        }

        Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
        return;
    }


    Constants.currentLocalPosition.x = Constants.currentPosition.x - cc.winSize.width / 2;
    Constants.currentLocalPosition.y = Constants.currentPosition.y - cc.winSize.height / 2;
}


const Hand = {
    rotateDefault: rotateDefault,
    rotateWithPoint: rotateWithPoint,
    // checkCondition1: checkConditionOfPoint1,
    // checkConditionWithPoint: checkConditionWithPoint,
}
const TouchArea = {
    checkTouchCondition1: checkTouchCondition1,
    // checkTouchCondition2: checkTouchCondition2,
    // checkTouchCondition3: checkTouchCondition3,
    // checkTouchCondition4: checkTouchCondition4,
    // checkTouchCondition5: checkTouchCondition5,
    checkTouchCondition6: checkTouchCondition6,
    checkTouchCondition7: checkTouchCondition7,
    checkTouchCondition8: checkTouchCondition8,
    // checkTouchCondition9: checkTouchCondition9,
    checkTouchPoint: checkTouchPoint,
}

export class Ultils {

    static Hand: typeof Hand = Hand;
    static TouchArea: typeof TouchArea = TouchArea;

}