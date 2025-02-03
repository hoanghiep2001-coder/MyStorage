import { GameController } from "./GameController";



const { ccclass, property } = cc._decorator;
 
@ccclass
export class Level2Controller extends cc.Component {

    @property(GameController)
    GameController: GameController = null;
    @property([cc.Node])
    Lobsters: cc.Node[] = [];

    
    protected start(): void {
        // this.Lobsters.forEach(lobster => lobster.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this));
    }

}

