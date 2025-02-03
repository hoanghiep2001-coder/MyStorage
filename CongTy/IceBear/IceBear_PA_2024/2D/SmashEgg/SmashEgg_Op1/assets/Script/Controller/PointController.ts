import { GameController } from "./GameController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PointCollider extends cc.Component {
    
    @property(GameController)
    GameController: GameController = null;
    @property(cc.RigidBody)
    rigidbody: cc.RigidBody = null;
    

    protected start(): void {
        this.beginContact();
    }


    private beginContact(): void {
        this.rigidbody.onBeginContact = (c,s,o) => {
            if(o.tag === 0) {
                this.GameController.installHandle();
                window.isTouchWall = true;
            }
        }
    }


    protected update(dt: number): void {
        this.node.setPosition(window.PointPos)
    }

}
