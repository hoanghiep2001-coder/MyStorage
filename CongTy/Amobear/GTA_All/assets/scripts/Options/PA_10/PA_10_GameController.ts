
import { _decorator, Component, Director, director, Game, game, log, Node, view } from 'cc';
import { SoundController } from '../../Controller/SoundController';
import { GameInfo } from '../../CONST/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PA_10_UI
 * DateTime = Wed Dec 25 2024 09:20:50 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = PA_10_UI.ts
 * FileBasenameNoExtension = PA_10_UI
 * URL = db://assets/scripts/Options/PA_10/PA_10_UI.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

const getOrCreateSlomoPolyfill = (() => {
    let polyfill: undefined | { multiplier: number; };

    return () => {
        if (!polyfill) {
            const polyfill_ = { multiplier: 1.0 };
            const tick = Director.prototype.tick;
            Director.prototype.tick = function (dt: number, ...args) {
                tick.call(this, dt * polyfill_.multiplier, ...args);
            };
            polyfill = polyfill_;
        }
        return polyfill;
    };
})();


@ccclass('PA_10_GameController')
export class PA_10_GameController extends Component {


    StartSlowMotionRate: number = 0.3;

    isActiveSlomotion: boolean = false;


    protected start(): void {

        // SoundController.Instance(SoundController).playSound("WarSfx");

        // this.schedule(() => {
        //     if(GameInfo.GTA_PA_10.currentEnemyKilled >= 2) return;
        //     SoundController.Instance(SoundController).playSound("BulletHittRock");
        // }, 2)
    }


    private activeSlowMotion(): void {
        if (this.isActiveSlomotion) return;
        this.isActiveSlomotion = true;
        this.slowMotionEffect(this.StartSlowMotionRate);
    }


    private slowMotionEffect(multiplier: number): void {
        getOrCreateSlomoPolyfill().multiplier = multiplier;
    }


    protected update(dt: number): void {
        if (GameInfo.GTA_PA_10.currentEnemyKilled >= 2 && !GameInfo.GTA_PA_10.isShowInstallPopup) {
            this.activeSlowMotion();
            if (this.StartSlowMotionRate >= 1) {
                GameInfo.GTA_PA_10.isShowInstallPopup = true;
                return;
            }
            this.slowMotionEffect(this.StartSlowMotionRate += 0.0036)
        }

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
