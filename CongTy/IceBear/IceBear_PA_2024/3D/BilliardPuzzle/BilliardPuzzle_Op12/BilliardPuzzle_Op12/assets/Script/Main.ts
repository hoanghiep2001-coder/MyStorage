
import { _decorator, Component, Node, RigidBody, Vec3, Sprite, tween, v2, screen, misc, view, Vec2, AudioClip, AudioSource, Animation, EventTouch, BoxCollider, log, v3, UITransform, sp, Label, geometry, PhysicsSystem } from 'cc';
const { ccclass, property } = _decorator;
import { ToStore } from './ToStore';
import { Responsive } from './Responsive';
import { Constants } from './Data/Constant';
import { AudioManager } from './Plugin/AudioManager';
import { IronSource } from './Plugin/IronSource';


@ccclass('Main')
export class Main extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(IronSource)
    IronSource: IronSource = null;
    @property(ToStore)
    ToStore: ToStore;
    @property(Responsive)
    Responsive: Responsive;


    @property(Node)
    Cube: Node = null;
    @property(Node)
    hint: Node = null;
    @property(Node)
    View_CTA: Node = null;
    @property(Node)
    Bar_Force: Node = null;
    @property(Node)
    Bar_Force_Interact: Node = null;
    @property(Node)
    Bar_Force_View: Node = null;
    @property(Node)
    Hand_01: Node = null;
    @property(Node)
    Hand_02: Node = null;
    @property(Node)
    Crosshair: Node = null;
    @property(Node)
    Ball_00: Node = null;
    @property(Node)
    Ball_09: Node = null;
    @property(Node)
    Head: Node = null;
    @property(Node)
    Store: Node = null;
    @property(Node)
    Enable: Node = null;
    @property(Node)
    PoolbackText: Node = null;
    // @property(Label)
    // ShootingTurn: Label = null;
    @property(sp.Skeleton)
    Combo: sp.Skeleton = null;


    touchStartPos: Vec2 = v2(0, 0);
    touchStartPosBarForce: Vec2 = v2(0, 0);
    forceSet: number = 0;
    flagStatusBall_00: boolean = false;
    flagStatusBall_09: boolean = false;
    previousPosition_01: any = v2(0, 0);
    previousPosition_02: any = v2(0, 0);
    posBall_00: any = v2(0, 0);
    posBall_09: any = v2(0, 0);
    flagStart: boolean = false;
    flagShowCube: boolean = false;
    loadScene: boolean = false;
    isActiveCTA: boolean = false;


    onLoad() {
        // ironsource
        // Constants.isLose && this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        Constants.isLose = false;
        this.ApplyEvent();
        this.posBall_00 = this.Ball_00.getPosition().clone();
        this.posBall_09 = this.Ball_09.getPosition().clone();
        this.previousPosition_01 = this.posBall_00;
        this.previousPosition_02 = this.posBall_09;
    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.bgSound)
        this.Cube.getComponent(BoxCollider).enabled = true;
    }


    ApplyEvent() {
        this.node.on(Node.EventType.TOUCH_MOVE, this.AngleCube, this);
        this.node.on(Node.EventType.TOUCH_START, this.TouchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.TouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.TouchEnd, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_START, this.SetBarForceDelta, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_MOVE, this.SetBarForce, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_END, this.SetBarForceEnd, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_CANCEL, this.SetBarForceEnd, this);
    }


    TouchStart(event) {
        // mtg & applovin
        this.isActiveCTA && this.ToStore.installHandle();

        this.touchStartPos = event.getLocation();
        this.IronSource.handleIronSourcePlaySound();
        this.AudioManager.playSound(Constants.SoundTrack.AngleSound);
        this.PoolbackText.active = false;
    }


    private TouchEnd(): void {
        this.AudioManager.stopSound(Constants.SoundTrack.AngleSound)
    }


    TouchStartToStore() {
        this.ToStore.installHandle();
    }


    hasNodeStopped(dt: number) {
        if (this.flagStart) {
            let velocity = new Vec3();
            this.Ball_00.getComponent("Ball").getComponent(RigidBody).getLinearVelocity(velocity);
            const velocityMagnitudeSquared = velocity.lengthSqr();
            const stopThresholdSquared = 0.01 * 0.01;
            const isStopping = velocityMagnitudeSquared < stopThresholdSquared;

            isStopping && this.activeCTA();
            // isStopping && !Constants.isPlaying && !Constants.isLose && this.FnEnd();
        };
    }


    FnEnd() {
        Constants.isMainBallStoped = true;
        this.Cube.active = true;
        this.hint.active = true;
        this.Bar_Force_Interact.setPosition(0, 0, 0);
        this.Bar_Force_View.getComponent(Sprite).fillRange = 0;
        this.Cube.getComponent(BoxCollider).enabled = false;
    }


    SetBarForceDelta(event) {
        this.isActiveCTA && this.ToStore.installHandle();

        Constants.isPlaying = true;
        this.Cube.getComponent(BoxCollider).enabled = true;
        this.touchStartPosBarForce = event.getLocation();
        this.AudioManager.playSound(Constants.SoundTrack.AngleSound)
    }


    PercentFn() {
        const percent = -this.forceSet / 400 * 100;
        const forceReturn = 0.1 + (percent / 100) * (0.05 - 0.1);
        return forceReturn;
    }


    SetBarForceEnd() {
        if (Constants.ironSource.isEndGame) {
            return;
        }

        this.scheduleOnce(() => {
            Constants.isPlaying = false;
        }, 1)

        Constants.playedCount += 1;
        // Constants.shootingTurn -= 1;
        Constants.isPlayFirstTime = true;
        this.AudioManager.stopSound(Constants.SoundTrack.AngleSound);
        const percent = this.PercentFn();
        this.AddForce(percent);
        this.forceSet = 0;
        this.touchStartPosBarForce = v2(0, 0);
    }


    SetBarForce(event: EventTouch) {
        if (Constants.ironSource.isEndGame) {
            return;
        }

        this.Hand_02.active = false;
        const touchPos = event.getLocation();
        const deltaY = (touchPos.y - this.touchStartPosBarForce.y);
        const posY = this.Bar_Force_Interact.getPosition().y + deltaY;

        if (posY < -400 || posY > 0) {
            return;
        }
        this.Bar_Force_Interact.setPosition(0, posY, 0);

        this.forceSet = posY;
        const fillrange = posY / 440;
        this.Bar_Force_View.getComponent(Sprite).fillRange = fillrange;
        this.touchStartPosBarForce = touchPos;
    }


    AngleCube(event) {
        this.Enable.active = false;
        this.Hand_01.active = false;
        this.Crosshair.active = false;
        this.Hand_02.active = true;
        const touchPos = event.getLocation();
        const deltaX = (touchPos.x - this.touchStartPos.x);
        this.Cube.parent.setRotationFromEuler(0, this.Cube.parent.eulerAngles.y - deltaX, 0);
        this.touchStartPos = touchPos;
    }


    private AddForce(percent: number): void {
        this.hint.active = false;
        tween(this.Cube)
            .to(percent, { position: new Vec3(0, 0, this.caculateForce(percent)) })
            .call(() => {
                this.scheduleOnce(() => {
                    this.Cube.setPosition(0, 0, 1.3);
                    this.flagShowCube = true;
                }, 0.5)
                this.Cube.active = false;
                this.flagStart = true;
            })
            .start();
    }


    private caculateForce(number: number): number {
        let result: number;
        result = 1.2;

        return result;
    }


    private showCombo(): void {
        if (Constants.scoreCount > Constants.comboCount) {
            Constants.comboCount += 1;
            switch (Constants.comboCount) {
                case 1:
                    this.Combo.setSkin("Combo 1");
                    this.Combo.setAnimation(0, "action", false);
                    break;
                case 2:
                    this.Combo.setSkin("Combo 2");
                    this.Combo.setAnimation(0, "action", false);
                    this.AudioManager.playSound(Constants.SoundTrack.woaSound1)
                    break;
                case 3:
                    this.Combo.setSkin("Combo 3");
                    this.Combo.setAnimation(0, "action", false);
                    this.AudioManager.playSound(Constants.SoundTrack.woaSound2)
                    break;
                case 4:
                    this.Combo.setSkin("Combo 4");
                    this.Combo.setAnimation(0, "action", false);
                    this.AudioManager.playSound(Constants.SoundTrack.woaSound1)
                    break;
                case 5:
                    this.Combo.setSkin("Combo 5");
                    this.Combo.setAnimation(0, "action", false);
                    this.AudioManager.playSound(Constants.SoundTrack.woaSound2)
                    break;
                case 6:
                    this.Combo.setSkin("Combo 6");
                    this.Combo.setAnimation(0, "action", false);
                    this.AudioManager.playSound(Constants.SoundTrack.woaSound1)
                    break;
                case 7:
                    this.Combo.setSkin("Combo 7");
                    this.Combo.setAnimation(0, "action", false);
                    this.AudioManager.playSound(Constants.SoundTrack.woaSound2)
                    break;
                default:
                    break;
            }
        }
    }


    private activeCTA(): void {
        this.isActiveCTA = true;

        this.node.off(Node.EventType.TOUCH_MOVE);
        this.node.off(Node.EventType.TOUCH_START);
        this.node.off(Node.EventType.TOUCH_END);
        this.node.off(Node.EventType.TOUCH_CANCEL);
        this.Bar_Force_Interact.off(Node.EventType.TOUCH_START);
        this.Bar_Force_Interact.off(Node.EventType.TOUCH_MOVE);
        this.Bar_Force_Interact.off(Node.EventType.TOUCH_END);
        this.Bar_Force_Interact.off(Node.EventType.TOUCH_CANCEL);

        let vertical = this.View_CTA.getChildByName("_ver");
        let horizontal = this.View_CTA.getChildByName("_hor");

        let Ver_BtnTryAgain = vertical.getChildByName("btn_tryagain");
        let Ver_BtnContinue = vertical.getChildByName("btn_continue");
        Ver_BtnTryAgain.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);
        Ver_BtnContinue.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);

        let Hor_BtnTryAgain = horizontal.getChildByName("Node").getChildByName("btn_tryagain");
        let Hor_BtnContinue = horizontal.getChildByName("Node").getChildByName("btn_continue");
        Hor_BtnTryAgain.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);
        Hor_BtnContinue.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);

        // mtg & applovin
        // let Ver_Overlay = vertical.getChildByName("SpriteSplash");
        // let Hor_Overlay = horizontal.getChildByName("SpriteSplash-001");
        // Ver_Overlay.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);
        // Hor_Overlay.on(Node.EventType.TOUCH_START, this.ToStore.installHandle, this);


        if(Constants.isWin) {
            Ver_BtnTryAgain.active = false;
            Hor_BtnTryAgain.active = false;
            Ver_BtnContinue.active = true;
            Hor_BtnContinue.active = true;
        } else {
            Ver_BtnTryAgain.active = true;
            Hor_BtnTryAgain.active = true;
            Ver_BtnContinue.active = false;
            Hor_BtnContinue.active = false;
        }

        this.scheduleOnce(() => {this.View_CTA.active = true;}, 1)
        
    }


    update(dt) {
        const screenSize = view.getVisibleSize();
        this.Bar_Force.setPosition(screenSize.x / 2.4, this.Bar_Force.getPosition().y, 0);

        Constants.isLose && !this.isActiveCTA && this.activeCTA();
        Constants.isWin && !this.isActiveCTA && this.activeCTA();
        !Constants.ironSource.isEndGame && this.showCombo();
        !Constants.ironSource.isEndGame && this.hasNodeStopped(dt);

        // ironsource
        this.IronSource.handleMuteSoundIronSource();
    }
}

