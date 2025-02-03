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
        this.getComponent(SkeletalAnimation).play("Idle_2");
    }


    private fight(): void {
        this.isFight = true;
        this.getComponent(SkeletalAnimation).play("Atk_1");
    }


    private fightStep2(): void {
        this.isFight_2 = true;
        this.getComponent(SkeletalAnimation).play("Atk_1");
    }


    private idle(): void {
        this.isIdle = true;
        this.getComponent(SkeletalAnimation).play("Idle_2");
    }

    private idleStep2(): void {
        this.isIdle_2 = true;
        this.getComponent(SkeletalAnimation).play("Idle_2");
    }


    protected update(dt: number): void {
        Constants.isCharacterCollideBoos && !this.isFight && this.fight();
        Constants.isCharacter_2CollideBoos && !this.isFight_2 && this.fightStep2();
        Constants.isDoneStep1 && !this.isIdle && this.idle();
        Constants.isDoneStep2 && !this.isIdle_2 && this.idleStep2();
    }
}

