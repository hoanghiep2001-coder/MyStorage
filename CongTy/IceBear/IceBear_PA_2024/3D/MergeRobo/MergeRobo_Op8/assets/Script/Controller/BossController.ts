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
        this.playMuscleAnim();
    }


    public playMuscleAnim(): void {
        this.getComponent(SkeletalAnimation).play("muscle");
    }


    public playDanceAnim(): void {
        this.getComponent(SkeletalAnimation).play("dancing");
    }


    private fight(): void {
        this.isFight = true;
        this.getComponent(SkeletalAnimation).play("atk");
    }


    private idle(): void {
        this.isIdle = true;
        this.getComponent(SkeletalAnimation).play("dancing");
    }


    protected update(dt: number): void {
        Constants.isCharacterCollideBoos && !this.isFight && this.fight();
        Constants.isDoneStep1 && !this.isIdle && this.idle();
    }
}

