
import { _decorator, Collider, Component, Node, ITriggerEvent, ICollisionEvent, log } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('PA_08_Moto')
export class PA_08_Moto extends Component {
    
    @property(Node)
    checkPoint_1: Node = null;


    @property(Collider)
    collider: Collider = null;


    protected start(): void {
        // this.collider.on('onCollisionEnter', (target: ICollisionEvent) => {
        //     if (target.otherCollider.node.name == 'Checkpoint Collider_1') {
        //         console.log("Check point!");
        
        //         // disable tutorial
        //         this.checkPoint_1.active = false;
        //     }
        // });

        // this.collider.on('onTriggerEnter', (target: ITriggerEvent) => {
        //     if (target.otherCollider.node.name == 'Checkpoint Collider_1') {
        //         console.log("Check point!");
        
        //         // disable tutorial
        //         this.checkPoint_1.active = false;
        //     }
        // });
    }

}

