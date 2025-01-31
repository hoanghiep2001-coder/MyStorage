import { _decorator, Component, easing, Node, SkeletalAnimation, tween, Vec3 } from 'cc';
import { GameInfo } from '../../CONST/GameInfo';
import { SoundController } from '../../Controller/SoundController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_10_Character
 * DateTime = Wed Dec 25 2024 09:21:14 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_10_Character.ts
 * FileBasenameNoExtension = PA_10_Character
 * URL = db://assets/scripts/Options/PA_10/PA_10_Character.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PA_11_Character')
export class PA_11_Character extends Component {

    isRotateCharacter: boolean = false;
    isAiming: boolean = false;
    isDead: boolean = false;


    protected start(): void {
        
    }


    public setAimingAnim(): void {
        if(this.isAiming) return;
        this.isAiming = true;
        this.node.getComponent(SkeletalAnimation).play("Character_StandUp");
    }


    public setCrouchAnim(): void {
        this.isAiming = false;
        this.node.getComponent(SkeletalAnimation).play("Character_Crouch");
    }


    private handleRotateCharacter(): void {
        this.isRotateCharacter = true;

        const newEuleurs = new Vec3(0, 30, 0);
        const newPos = new Vec3(672.076, 8.114, -126.065)

        this.node.getComponent(SkeletalAnimation).play("main_run");

        tween(this.node)
        .to(0.3, {eulerAngles: newEuleurs, position: newPos}, {easing: easing.smooth})
        .call(() => {
            this.setCrouchAnim();
            GameInfo.isCanTouch = true;
        })
        .start();
    }


    private dead(): void {
        this.isDead = true;
        this.node.getComponent(SkeletalAnimation).play("Death");
        SoundController.Instance(SoundController).playSound("DeadSound");

        this.scheduleOnce(() => {
            GameInfo.GTA_PA_11.isShowInstallPopup = true;
        }, 1.5)
    }


    protected update(dt: number): void {
        GameInfo.GTA_PA_11.isDoneRotateCamera && !this.isRotateCharacter && this.handleRotateCharacter()
        GameInfo.GTA_PA_11.isCharacterDead && !this.isDead && this.dead();
    }

}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
