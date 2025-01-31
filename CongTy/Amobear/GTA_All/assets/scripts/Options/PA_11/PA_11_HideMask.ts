
import { _decorator, Camera, Component, easing, EventTouch, geometry, log, Node, PhysicsSystem, tween, Vec2, Vec3 } from 'cc';

import { GameInfo } from '../../CONST/GameInfo';
import { SoundController } from '../../Controller/SoundController';
import { PA_11_UI } from './PA_11_UI';
import { PA_11_Character } from './PA_11_Character';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_10_HideMask
 * DateTime = Wed Dec 25 2024 18:00:18 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_10_HideMask.ts
 * FileBasenameNoExtension = PA_10_HideMask
 * URL = db://assets/scripts/Options/PA_10/PA_10_HideMask.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PA_11_HideMask')
export class PA_11_HideMask extends Component {
    @property(Camera)
    Cam_3D: Camera = null;

    @property(PA_11_Character)
    PA_11_Character: PA_11_Character = null;

    @property(PA_11_UI)
    PA_11_UI: PA_11_UI = null;


    pos: Vec3 = null;


    protected start(): void {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }


    private onTouchStart(touchPos: EventTouch): void {
        if(!GameInfo.isCanTouch || GameInfo.GTA_PA_11.isCharacterDead) return;

        log("show aiming UI");
        
        GameInfo.isCanTouch = false;

        GameInfo.isTouching = true;

        this.PA_11_UI.Text_MoreEnemy.active = false;

        this.PA_11_UI.tutorials.forEach(tut => tut.active = false);

        this.PA_11_UI.Aim.active = true;
        
        tween(this.Cam_3D)
        .to(0.3, { fov: 33 }, { easing: easing.smooth })
        .start();
        
        const screenPos = touchPos.getUILocation();
        this.pos = this.convertToLocalLocation(screenPos);
        this.PA_11_UI.Aim.setPosition(this.pos);
        
        this.PA_11_Character.setAimingAnim();

    }


    private onTouchMove(event: EventTouch): void {
        // this.PA_11_Character.setAimingAnim();
        const screenPos = event.getUILocation();
        this.pos = this.convertToLocalLocation(screenPos);
        this.PA_11_UI.Aim.setPosition(this.pos);
    }


    private onTouchEnd(touchPos: EventTouch): void {
        if(!GameInfo.isTouching || GameInfo.GTA_PA_11.isCharacterDead) return;

        GameInfo.isTouching = false;

        this.PA_11_Character.setCrouchAnim();

        this.getRaycastResult(touchPos);

        tween(this.Cam_3D)
            .to(0.3, { fov: 45 }, { easing: easing.smooth })
            .start();

        this.PA_11_UI.Aim.active = false;

        this.PA_11_UI.setAimOriginPos();

        this.shoot();
    }


    private getRaycastResult(touchPos: EventTouch): void {
        let ray = new geometry.Ray();
        this.Cam_3D.screenPointToRay(touchPos.getLocationX(), touchPos.getLocationY(), ray);
        // The following parameters are optional
        const mask = 0xffffffff;
        const maxDistance = 10000000;
        const queryTrigger = true;

        if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            const collider = raycastClosestResult.collider;

            if (collider.node.name.includes("Grimace")
            ) {
                GameInfo.GTA_PA_11.currentEnemyKilled += 1;

                GameInfo.GTA_PA_11.currentEnemyKilled >= 2 && this.PA_11_UI.activeSpineCombo();

                const grimaceIndex = this.getTrailingNumber(collider.node.name);

                const fireBall_Vfx = this.PA_11_UI.node.getChildByName(`FireBall_${grimaceIndex}`)

                fireBall_Vfx.active = true;
                collider.node.active = false;
                SoundController.Instance(SoundController).playSound("BoomSound");
            }
        }
    }


    private convertToLocalLocation(value: Vec2): Vec3 {
        const localX = value.x - 960 - this.node.getPosition().x;
        const localY = value.y - 540 - this.node.getPosition().y;
        const result = new Vec3(localX, localY, 0);
        return result;
    }


    private shoot(): void {
        this.scheduleOnce(() => {
            GameInfo.isCanTouch = true;
        }, 0.5);
        SoundController.Instance(SoundController).playSound("K98Sound");
    }


    private getTrailingNumber(string: string): number {
        const match = string.match(/\d+$/);
        return match ? parseInt(match[0], 10) : null;
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
