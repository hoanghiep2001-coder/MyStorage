
import { _decorator, Animation, AnimationState, Component, easing, log, Material, MeshRenderer, Node, tween, Vec3 } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BoxBehavior
 * DateTime = Sat Dec 28 2024 14:56:02 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = BoxBehavior.ts
 * FileBasenameNoExtension = BoxBehavior
 * URL = db://assets/Script/Options/PA_30/Box/BoxBehavior.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */


@ccclass('BoxBehavior')
export class BoxBehavior extends Component {

    @property(Material)
    Mat_ColorBlack: Material = null;

    @property(Node)
    KeoSao: Node = null;
    SaoNetDut: Node = null;

    @property(Node)
    needle: Node = null;
    needleCollideNode: Node = null;

    @property(Node)
    LineContainer: Node = null;
    Lines: Node[] = [];

    @property(Node)
    left_candy: Node = null;
    @property(Node)
    right_candy: Node = null;
    @property(Node)
    up_candy: Node = null;
    @property(Node)
    bot_candy: Node = null;

    currentDetachAnim: AnimationState = null;
    currentDetachDuration: number = null;


    protected start(): void {
        this.needleCollideNode = this.needle.children[0];
        this.SaoNetDut = this.KeoSao.getChildByName("SaoNetDut");

        this.currentDetachDuration = this.KeoSao.getComponent(Animation).clips[0].duration;

        this.Lines = this.LineContainer.children;
        for (let index = 0; index < this.Lines.length; index++) {
            const element = this.Lines[index];
            element.getComponent(MeshRenderer).material = this.Mat_ColorBlack;
            element.active = false;
        }
    }


    public activeUnBoxAnim(): void {
        this.getComponent(Animation).play();
    }


    public setAnimDetachCandyState(animState: string): void {
        const anim = this.KeoSao.getComponent(Animation);
        switch (animState) {
            case "play":
                this.currentDetachAnim = anim.getState("KeoSao_Anim");
                anim.play();
                break;
            case "resume":
                anim.resume();
                break;
            case "pause":
                anim.pause();
                break;
            default:
                break;
        }
    }


    public moveDetachedCandy(): void {
        switch (GameInfo.Squid_PA_30.detachCandySteps) {
            case 1:
                tween(this.left_candy)
                    .to(0.2, { position: new Vec3(0.37, -0.383, 0) }, { easing: easing.smooth })
                    .start();
                break;
            case 2:
                tween(this.right_candy)
                    .to(0.2, { position: new Vec3(-0.377, -0.312, 0) }, { easing: easing.smooth })
                    .start();
                break;
            case 3:
                tween(this.up_candy)
                    .to(0.2, { position: new Vec3(-0.389, 0.486, 0) }, { easing: easing.smooth })
                    .start();
                break;
            case 4:
                GameInfo.Squid_PA_30.isDoneAllStep = true;
                GameInfo.isWin = true;

                tween(this.bot_candy)
                    .to(0.2, { position: new Vec3(0.416, 0.368, 0) }, { easing: easing.smooth })
                    .start();

                    this.scheduleOnce(() => GameInfo.IsShowPopupInstall = true, 2);
                break;
            default:
                break;
        }
    }


    protected update(dt: number): void {
        if (this.currentDetachAnim && !GameInfo.Squid_PA_30.isDoneDrawCandy) {
            if (this.currentDetachAnim.current >= 10) {
                GameInfo.Squid_PA_30.isDoneDrawCandy = true;
                this.SaoNetDut.active = false;
            };
        }
    }
}

