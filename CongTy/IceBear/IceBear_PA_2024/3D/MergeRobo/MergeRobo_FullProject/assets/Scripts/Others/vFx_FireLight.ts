import { _decorator, Component, easing, log, Node, ParticleSystem2D, tween, Vec2, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;

 
@ccclass('vFx_FireLight')
export class vFx_FireLight extends Component {

    PS_fireLight: ParticleSystem2D = null;

    currentSideIsLeft: boolean = true;


    protected start(): void {
        this.PS_fireLight = this.node.getComponentInChildren(ParticleSystem2D);
    }


    public updateDirectionFireLightVfx(touchPos: Vec3): void {
        if(touchPos.x > GameInfo.touchPos.x) {
            this.smoothGravity(true);
            this.currentSideIsLeft = true;
        }

        else {
            this.smoothGravity(false);
            this.currentSideIsLeft = false;
        }
    }


    private smoothGravity(isLeft: boolean): void {
        if(isLeft === this.currentSideIsLeft) return;

        // log("switch Side vFx")

        let number = isLeft ? -500 : 500;

        tween(this.PS_fireLight)
        .to(0.2, {gravity: new Vec2(number, 200)}, {easing: easing.smooth})
        .start();
    }


}

