
import { _decorator, Component, Node, SkeletalAnimation } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
const { ccclass, property } = _decorator;

 
@ccclass('MainCharacter')
export class MainCharacter extends Component {

    isDie: boolean = false;
    isWin: boolean = false;


    protected start(): void {
        
    }


    private die(): void {
        this.isDie = true;
        this.node.getComponent(SkeletalAnimation).play("Die");
        this.scheduleOnce(() => GameInfo.IsShowPopupInstall = true, 1.5);
    }


    private win(): void {
        this.isWin = true;
        this.node.getComponent(SkeletalAnimation).play("Dance");
    }


    protected update(dt: number): void {
        if(GameInfo.isLose && !this.isDie) this.die();
        if(GameInfo.isWin && !this.isWin) this.win();
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
