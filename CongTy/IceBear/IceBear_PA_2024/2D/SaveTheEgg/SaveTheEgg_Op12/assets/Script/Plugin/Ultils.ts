import { GameOption } from "../Data/GameOption";

const { ccclass, property } = cc._decorator;

const decreaseRevive = (reviveCount: number): number => {
    let result: number = null;
    result = reviveCount - 1;
    return result;
}

export class Ultils {

    static decreaseRevive: typeof decreaseRevive = decreaseRevive

}