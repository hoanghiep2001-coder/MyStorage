
import { _decorator, Component, Node, SkeletalAnimation } from 'cc';
import { GameInfo } from '../../CONST/GameInfo';
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
 
@ccclass('PA_10_Character')
export class PA_10_Character extends Component {

    isAiming: boolean = false;


    protected start(): void {
        
    }


    public setAimingAnim(): void {
        this.node.getComponent(SkeletalAnimation).play("Character_StandUp");
    }


    public setCrouchAnim(): void {
        this.node.getComponent(SkeletalAnimation).play("Character_Crouch");
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
