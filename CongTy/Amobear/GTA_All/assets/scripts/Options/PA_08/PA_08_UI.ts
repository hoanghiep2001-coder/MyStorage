import { _decorator, Component, easing, log, Node, ParticleSystem, tween, Vec3 } from 'cc';
import { SoundController } from '../../Controller/SoundController';
import { GameInfo } from '../../CONST/GameInfo';

const { ccclass, property } = _decorator;


@ccclass('PA_08_UI')
export class PA_08_UI extends Component {

    @property(Node)
    mainCam: Node = null;

    @property(Node)
    Camera_3: Node = null;

    @property(Node)
    UI_Blink: Node = null;

    @property(Node)
    moto_2: Node = null;

    @property([Node])
    policeCars: Node[] = [];

    @property(Node)
    checkPoint_1: Node = null;

    @property([Node])
    UI_MoveCar: Node[] = [];

    @property([Node])
    Tut_1s: Node[] = [];


    @property(Node)
    CTA: Node = null;


    isActiveCheckPoint_1: boolean = false;
    isActiveTut_1: boolean = false;
    isActiveCinematic: boolean = false;


    protected start(): void {

    }


    private activeCheckPoint_1(): void {
        this.isActiveCheckPoint_1 = true;
        this.checkPoint_1.active = true;
        this.UI_MoveCar.forEach(ui => ui.active = true);
    }
    

    private activeTut_1(): void {
        this.UI_MoveCar.forEach(ui => ui.active = false);
        this.Tut_1s.forEach((item) => item.active = true);
        this.isActiveTut_1 = true;
        SoundController.Instance(SoundController).playSound("PoliceSirenSound");
    }


    private activeCinematic(): void {
        this.Tut_1s.forEach(tut => tut.active = false);
        this.mainCam.active = false;
        this.Camera_3.active = true;
        this.isActiveCinematic = true;

        SoundController.Instance(SoundController).playSound("brakeSound");

        this.scheduleOnce(() => {
            tween(this.policeCars[0])
            .to(0.5, {position: this.moto_2.position}, {easing: easing.smooth})
            .call(() => {
                this.UI_Blink.active = true;
                let vfx_fireBall = this.policeCars[0].getChildByName("FireBall");
                vfx_fireBall.active = true;
                SoundController.Instance(SoundController).playSound("BoomSound");
            })
            .start(); 
            
            tween(this.policeCars[1])
            .to(0.5, {position: this.moto_2.position}, {easing: easing.smooth})
            .call(() => {
                let vfx_fireBall = this.policeCars[1].getChildByName("FireBall");
                vfx_fireBall.active = true;
                SoundController.Instance(SoundController).playSound("BoomSound");
                SoundController.Instance(SoundController).stopSound("PoliceSirenSound");

                this.scheduleOnce(() => {
                    this.CTA.active = true;
                }, 1.5);
            })
            .start();   
        }, 0.5)
        // tween(this.moto_2)
        // .to(0.5, {position: new Vec3(675.776, 8.014, -64.671)}, {easing: easing.smooth})
        // .call(() => {
  
        // })
        // .start();
    }


    protected update(dt: number): void {
        if (GameInfo.GTA_PA_08.isRidingMoto
            && !this.isActiveCheckPoint_1
        )
            this.activeCheckPoint_1();

        if (GameInfo.GTA_PA_08.isTouchCheckPointFlag
            && !this.isActiveTut_1
        )
            this.activeTut_1();

        if(GameInfo.GTA_PA_08.isHitDogeCopsBtn && !this.isActiveCinematic) this.activeCinematic();

    }




}

