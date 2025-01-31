import { _decorator, Camera, Component, Director, director, easing, Game, game, Node, ParticleSystem, Skeleton, sp, tween, Vec3 } from 'cc';
import { GameInfo } from '../../CONST/GameInfo';
import { SoundController } from '../../Controller/SoundController';
const { ccclass, property } = _decorator;


@ccclass('PA_11_UI')
export class PA_11_UI extends Component {

    isActiveRotateCamera: boolean = false;
    @property(Camera)
    MainCam: Camera = null;

    @property(Node)
    Aim: Node = null;

    @property(sp.Skeleton)
    Spine_Combo: sp.Skeleton = null;


    @property([Node])
    tutorials: Node[] = [];

    @property(Node)
    lightning_FX: Node = null;

    @property(Node)
    Text_MoreEnemy: Node = null;

    // @property([Node])
    // Grimaces: Node[] = [];
    // @property([ParticleSystem])
    // explosionFXs: ParticleSystem[] = [];


    Aim_originPos: Vec3 = null;

    @property(Node)
    UI_Blink: Node = null;

    @property(Node)
    Health: Node = null;

    isShowCTA: boolean = false;
    @property(Node)
    CTA: Node = null;


    protected start(): void {
        this.Aim_originPos = this.Aim.getPosition();
    }


    public setAimOriginPos(): void {
        this.Aim.setPosition(this.Aim_originPos);
    }


    public activeSpineCombo(): void {
        this.Spine_Combo.node.active = true;
        this.Spine_Combo._defaultSkinIndex = GameInfo.GTA_PA_11.currentEnemyKilled - 1;
        this.Spine_Combo.setAnimation(0, "action", false);
    }

    

    private activeCTA(): void {
        this.isShowCTA = true;
        this.UI_Blink.active = true;
        this.Aim.active = false;
        this.CTA.active = true;
        this.lightning_FX.active = false;

        SoundController.Instance(SoundController).stopAllSound();
    }


    private handleRotateCamera(): void {
        this.isActiveRotateCamera = true;

        this.Text_MoreEnemy.active = true;

        const newPos = new Vec3(657.569, 22.552, -145.062);
        const newRotateEuleurs = new Vec3(-15, 213.141, 0);

        GameInfo.isCanTouch = false;

        this.Health.active = true;

        tween(this.MainCam.node)
        .to(1.5, {position: newPos, eulerAngles: newRotateEuleurs}, {easing: easing.smooth})
        .call(() => {
            GameInfo.GTA_PA_11.isDoneRotateCamera = true;
        })
        .start();
    }


    protected update(dt: number): void {
        GameInfo.GTA_PA_11.currentEnemyKilled >= 2 && !this.isActiveRotateCamera && this.handleRotateCamera();
        GameInfo.GTA_PA_11.isShowInstallPopup && !this.isShowCTA && this.activeCTA();
    }

}


