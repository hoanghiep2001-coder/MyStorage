import { Constants } from "../Data/constants";
import { GameOption } from "../Data/GameOption";
import { GameController } from "./GameController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PointCollider extends cc.Component {
    
    @property(GameController)
    GameController: GameController = null;
    @property(cc.RigidBody)
    rigidbody: cc.RigidBody = null;

    clearFixArea: cc.Node = null;

    protected start(): void {
        this.beginContact();

        GameOption.currentOption === 16 && this.initClearFixAreaOp16();
    }


    private initClearFixAreaOp16(): void {
        this.clearFixArea = this.node.parent.getChildByName("ClearFixArea");
    }


    private checkCollideClearAreaOp16(): void {
        let nodeBdx = this.node.getBoundingBox();
        let clearFixAreaBdx = this.clearFixArea.getBoundingBox();

        if(nodeBdx.intersects(clearFixAreaBdx)) {
                GameOption.Op16.isPointTouchClearFixArea = true;
        }
    }


    private beginContact(): void {
        this.rigidbody.onBeginContact = (c,s,o) => {
            if(o.tag === 0 || o.tag === 8) {
                window.isTouchWall = true;
            }

        }
    }


    protected update(dt: number): void {
        GameOption.currentOption === 16 && this.checkCollideClearAreaOp16();
        this.node.setPosition(window.PointPos)
    }

}
