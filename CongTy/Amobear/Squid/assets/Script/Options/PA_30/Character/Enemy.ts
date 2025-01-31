
import { _decorator, Component, Node, SkeletalAnimation, Vec3 } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Enemy
 * DateTime = Mon Dec 30 2024 14:50:44 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = Enemy.ts
 * FileBasenameNoExtension = Enemy
 * URL = db://assets/Script/Options/PA_30/Character/Enemy.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Enemy')
export class Enemy extends Component {

    @property(Node)
    socketNode: Node = null;

    isShootAnimActived: boolean = false;


    protected start(): void {
        
    }


    private activeShootAnim(): void {
        this.isShootAnimActived = true;
        this.getComponent(SkeletalAnimation).play("Shoot");

        this.socketNode.setPosition(new Vec3(0.04, -0.167,0.189))
        this.socketNode.setRotationFromEuler(new Vec3(-103.067, -81.254,  36.231))

        this.scheduleOnce(() => {
            GameInfo.isLose = true;
        }, 1.5);
    }


    protected update(dt: number): void {
        if(GameInfo.Squid_PA_30.isTimeOver && !this.isShootAnimActived) this.activeShootAnim();
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
