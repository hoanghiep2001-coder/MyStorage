
import { _decorator, Component, log, Node, ParticleSystem, SkeletalAnimation } from 'cc';
import { RoboAnim } from './RoboAnim';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RoboBehavior
 * DateTime = Tue Aug 27 2024 15:02:02 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = RoboBehavior.ts
 * FileBasenameNoExtension = RoboBehavior
 * URL = db://assets/Scripts/Robo/RoboBehavior.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('RoboBehavior')
export class RoboBehavior extends Component {

    isPickup: boolean = false;
    roboBase: Node = null;

    @property(ParticleSystem)
    PS_Smoke: ParticleSystem = null;

    @property([ParticleSystem])
    PS_Fires: ParticleSystem[] = [];
    
    protected start(): void {
        this.roboBase = this.node.getChildByName("Robo_Base");

        this.node.name.includes("Robo_Second") && this.PS_Smoke.play();

        // this.node.name.includes("Robo_Third") 
    }
    

    public switchAnim(animName: string): void {
        this.isPickup = true;
        this.roboBase.getComponent(SkeletalAnimation).play(animName);
    }


    // private setupBossPos

}


