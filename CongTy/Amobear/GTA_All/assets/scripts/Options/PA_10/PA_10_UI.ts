import { _decorator, Component, Director, director, Game, game, Node, ParticleSystem, Vec3 } from 'cc';
import { GameInfo } from '../../CONST/GameInfo';
import { SoundController } from '../../Controller/SoundController';
const { ccclass, property } = _decorator;


@ccclass('PA_10_UI')
export class PA_10_UI extends Component {

    @property(Node)
    Aim: Node = null;

    @property([Node])
    tutorials: Node[] = [];

    @property(Node)
    lightning_FX: Node = null;
    @property([ParticleSystem])
    explosionFXs: ParticleSystem[] = [];


    Aim_originPos: Vec3 = null;

    @property(Node)
    UI_Blink: Node = null;

    isShowCTA: boolean = false;
    @property(Node)
    CTA: Node = null;


    protected start(): void {
        this.Aim_originPos = this.Aim.getPosition();
    }


    public setAimOriginPos(): void {
        this.Aim.setPosition(this.Aim_originPos);
    }


    private activeCTA(): void {
        this.isShowCTA = true;
        this.UI_Blink.active = true;
        this.CTA.active = true;
        this.lightning_FX.active = false;

        SoundController.Instance(SoundController).stopAllSound();
    }


    protected update(dt: number): void {
        GameInfo.GTA_PA_10.isShowInstallPopup && !this.isShowCTA && this.activeCTA();
    }

}

