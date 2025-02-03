
import { _decorator, Component, Node, RigidBody, Vec3, Sprite, tween, v2, screen, misc, view, Vec2, AudioClip, AudioSource, Animation } from 'cc';
const { ccclass, property } = _decorator;
import { ToStore } from './ToStore';
import { Responsive } from './Responsive';
@ccclass('Main')
export class Main extends Component {

    @property(Node)
    Cube: Node = null;
    @property(ToStore)
    ToStore: ToStore;
    @property(Responsive)
    Responsive: Responsive;
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

    // 

    @property(AudioClip)
    Collider_Ball_Audio: AudioClip = null;

    @property(AudioClip)
    Win_Audio: AudioClip = null;

    @property(AudioClip)
    Lose_Audio: AudioClip = null;

    touchStartPos: Vec2 = v2(0, 0);
    touchStartPosBarForce: Vec2 = v2(0, 0);
    forceSet: number = 0;
    flagStatusBall_00: boolean = false;
    flagStatusBall_09: boolean = false;
    previousPosition_01: Vec2 = v2(0, 0);
    previousPosition_02: Vec2 = v2(0, 0);
    posBall_00: Vec2 = v2(0, 0);
    posBall_09: Vec2 = v2(0, 0);
    flagStart: boolean = false;
    loadScene: boolean = false;
    onLoad() {
        this.ApplyEvent();
        this.posBall_00 = this.Ball_00.getPosition().clone();
        this.posBall_09 = this.Ball_09.getPosition().clone();
        this.previousPosition_01 = this.posBall_00;
        this.previousPosition_02 = this.posBall_09;
    }

    StartAudioId(audioId) {
        let audioSource = this.node.addComponent(AudioSource);
        audioSource.clip = audioId;
        audioSource.loop = false;
        audioSource.play();
    }

    ApplyEvent() {
        // this.that.on(Node.EventType.TOUCH_START, this.AddForce, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.AngleCube, this);
        this.node.on(Node.EventType.TOUCH_START, this.TouchStart, this);
        this.Store.on(Node.EventType.TOUCH_START, this.TouchStartToStore, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_MOVE, this.SetBarForce, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_START, this.SetBarForceDelta, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_END, this.SetBarForceEnd, this);
        this.Bar_Force_Interact.on(Node.EventType.TOUCH_CANCEL, this.SetBarForceEnd, this);
    }
    TouchStart(event) {
        this.Responsive.StartAudio();
        this.touchStartPos = event.getLocation();
    }

    TouchStartToStore() {
       this.ToStore.installHandle();
    }

    hasNodeStopped(dt) {
        if (this.flagStart) {
            const velocity = new Vec2(this.Ball_00.getPosition().x - this.previousPosition_01.x, this.Ball_00.getPosition().y - this.previousPosition_01.y).mag() / dt;
            this.previousPosition_01 = this.Ball_00.getPosition().clone();
            const velocity2 = new Vec2(this.Ball_09.getPosition().x - this.previousPosition_02.x, this.Ball_09.getPosition().y - this.previousPosition_02.y).mag() / dt;
            this.previousPosition_02 = this.Ball_09.getPosition().clone();
            if (velocity == 0 && velocity2 == 0) {
                this.FnEnd();
            }
        };
    }

    FnEnd() {
        if (this.flagStatusBall_00) {
            this.CaseFalse();
        } else {
            if (this.flagStatusBall_09) {
                this.CaseWin();
            } else {
                this.CaseFalse();
            }
        }
    }

    CaseWin() {
        this.View_CTA.active = true;
    }

    CaseFalse() {
        this.scheduleOnce(() => {
            cc.director.loadScene('scene_02', () => {
                console.log(`Đã tải scen02`);
            });
        }, 1.5); //

    }

    SetBarForceDelta(event) {
        this.touchStartPosBarForce = event.getLocation();
    }

    PercentFn() {
        const percent = -this.forceSet / 400 * 100;
        const forceReturn = 0.1 + (percent / 100) * (0.05 - 0.1);
        return forceReturn;
    }

    SetBarForceEnd() {
        this.StartAudioId(this.Collider_Ball_Audio);
        const percent = this.PercentFn();
        tween(this.Bar_Force_Interact)
            .to(0.02, { position: new Vec3(0, 0, 0) })
            .start();
        this.Bar_Force_View.getComponent(Sprite).fillRange = 0;
        this.AddForce(percent);
    }

    SetBarForce(event) {
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
        this.Cube._parent.setRotationFromEuler(0, this.Cube._parent._euler.y - deltaX, 0);
        this.touchStartPos = touchPos;
    }

    AddForce(percent) {
        this.Cube._parent._children[1].active = false;
        tween(this.Cube)
            .to(percent, { position: new Vec3(0, 0, 1) })
            .call(() => {
                this.Cube.active = false;
                this.flagStart = true;
            })
            .start();
    }

    update(dt) {
        const screenSize = view.getVisibleSize();
        this.Bar_Force.setPosition(screenSize.x / 2.4, this.Bar_Force.getPosition().y, 0);
        this.hasNodeStopped(dt)
    }
}

