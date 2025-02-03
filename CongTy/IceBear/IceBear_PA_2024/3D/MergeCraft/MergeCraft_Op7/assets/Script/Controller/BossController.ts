import { _decorator, Component, Node, SkeletalAnimation } from 'cc';
import { Constants } from '../Data/Constant';
const { ccclass, property } = _decorator;

 
@ccclass('BossController')
export class BossController extends Component {

    isFight: boolean = false;
    isFight_2: boolean = false;
    isIdle: boolean = false;
    isIdle_2: boolean = false;

    protected start(): void {
        this.getComponent(SkeletalAnimation).play("idle");
    }
}

