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
        this.getComponent(SkeletalAnimation).play("muscle");
    }


    private fight(): void {
        this.isFight = true;
        this.getComponent(SkeletalAnimation).play("atk");
    }


    private fightStep2(): void {
        this.isFight_2 = true;
        this.getComponent(SkeletalAnimation).play("atk");
    }


    private idle(): void {
        this.isIdle = true;
        this.getComponent(SkeletalAnimation).play("dancing");
    }

    private idleStep2(): void {
        this.isIdle_2 = true;
        this.getComponent(SkeletalAnimation).play("dancing");
    }


    protected update(dt: number): void {
        Constants.isCharacterCollideBoos && !this.isFight && this.fight();
        Constants.isCharacter_2CollideBoos && !this.isFight_2 && this.fightStep2();
        Constants.isDoneStep1 && !this.isIdle && this.idle();
        Constants.isDoneStep2 && !this.isIdle_2 && this.idleStep2();
    }
}

