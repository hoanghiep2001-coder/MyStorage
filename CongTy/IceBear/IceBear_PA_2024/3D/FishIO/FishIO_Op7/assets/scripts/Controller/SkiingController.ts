
import { _decorator, Animation, Component, Node, ParticleSystem2D, UITransform, Vec3 } from 'cc';
import { Constants } from '../Data/Constant';
import { AudioManager } from './AudioManager';
const { ccclass, property } = _decorator;

@ccclass('SkiingController')
export class SkiingController extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;


    // control
    @property(Node)
    Button_Left: Node = null;
    @property(Node)
    Button_Up: Node = null;

    // character
    @property(Node)
    Character: Node = null;
    @property(Node)
    Character_skateBoard: Node = null;
    @property(Node)
    Character_default: Node = null;
    @property(Node)
    Character_Lose: Node = null;
    @property(Node)
    Shark: Node = null;

    // UI
    @property(Node)
    SkateBoard: Node = null;
    @property(Node)
    SharkHunt: Node = null;
    @property(Node)
    FlagPoint: Node = null;
    @property(Node)
    FlagJumpPoint: Node = null;
    @property(Node)
    readyJumpPoint: Node = null;

    // effect
    @property(ParticleSystem2D)
    PS_FunSui: ParticleSystem2D = null;


    // state
    flag: boolean = false;
    flagMove: boolean = false;
    flagJump: boolean = false;
    flagCanJump: boolean = false;
    jumpTime: number = 0; // Thời gian nhảy
    jumpHeight: number = 200;


    protected start(): void {

        if (Constants.forceReplay) {
            this.node.active = false;
            return;
        } 
        // ironsource
        // else {
        //     this.AudioManager.playSound(Constants.SoundTrack.Skiing_BgSound);
        // };
    }


    private isIntersectsFlagPoint(): boolean {
        let characterBdx = this.Character.getComponent(UITransform).getBoundingBox();
        let flagPointBdx = this.FlagPoint.getComponent(UITransform).getBoundingBox();
        if (characterBdx.intersects(flagPointBdx)) return true;
        return false;
    }


    private setIsCompleteVideo(): void {
        this.flagMove = true;
        this.flag = true;
        this.SharkHunt.active = false;
        this.Character_default.active = false;
        this.Character_Lose.active = true;
        this.Character.getComponent(Animation).play("Skiing_CharAnim");
        this.AudioManager.playSound(Constants.SoundTrack.Skiing_ScreamSound);
        this.scheduleOnce(() => {
            this.PS_FunSui.resetSystem();
            this.AudioManager.playSound(Constants.SoundTrack.Skiing_EatSound);
            // this.SkateBoard.active = false;
            // this.Character_Lose.active = false;
        }, 0.3);
        this.scheduleOnce(() => {
            Constants.isCompleteVideo = true;
            this.node.active = false;
            this.AudioManager.stopSound(Constants.SoundTrack.Skiing_BgSound);
        }, 1);
    }


    private characterMove(dt: number): void {
        let characterOldPos = new Vec3();
        this.Character.getPosition(characterOldPos);
        let targetPos = new Vec3(characterOldPos.x + (dt * 4000), characterOldPos.y, characterOldPos.z);
        let newPos = new Vec3();
        Vec3.lerp(newPos, characterOldPos, targetPos, dt * 5); // Sử dụng lerp để tạo chuyển động mượt mà
        this.Character.setPosition(newPos);
    }


    private isIntersectsReadyJumpPoint(dt: number): boolean {
        if(!this.readyJumpPoint.active) return false;
        let characterBdx = this.Character.getComponent(UITransform).getBoundingBox();
        let flagPointBdx = this.readyJumpPoint.getComponent(UITransform).getBoundingBox();
        if (characterBdx.intersects(flagPointBdx)) {
            this.getComponent(Animation).play("Skiing_HintJump");
            this.readyJumpPoint.active = false;
            Constants.isCanClickBtnLeft = false;
            Constants.isClickBtnLeft = false;
            return true;
        }
    }


    private isIntersectsFlagJumpPoint(dt): boolean {
        let characterBdx = this.Character.getComponent(UITransform).getBoundingBox();
        let flagPointBdx = this.FlagJumpPoint.getComponent(UITransform).getBoundingBox();
        if (characterBdx.intersects(flagPointBdx)) {
            Constants.isOnGround = true; // Nên cập nhật ở đây
            Constants.isJumping = false;
            this.flagCanJump = false;
            return true;
        } else {
            Constants.isOnGround = false;
            Constants.isCanClick = true;
            Constants.isJumping = true;
            this.flagCanJump = true;
            this.characterFall(dt);
            return false;
        }
    }



    private characterJump(dt: number): void {
        Constants.isJumping = true;
        let characterOldPos =  this.Character.getPosition();
        this.Character.setPosition(characterOldPos.x, characterOldPos.y + (dt * 1400), characterOldPos.z);
    }

    private characterFall(dt: number): void {
        let characterOldPos = new Vec3();
        this.Character.getPosition(characterOldPos);
        let targetPos = new Vec3(characterOldPos.x, characterOldPos.y - (dt * 8000), characterOldPos.z);
        let newPos = new Vec3();
        Vec3.lerp(newPos, characterOldPos, targetPos, dt * 5); // Sử dụng lerp để tạo chuyển động mượt mà
        this.Character.setPosition(newPos);
    }


    protected update(dt: number): void {
        !this.flagMove && Constants.isClickBtnLeft && this.characterMove(dt);
        !this.flagJump && Constants.isClickBtnJump && this.characterJump(dt);
        !this.flag && this.isIntersectsFlagPoint() && this.setIsCompleteVideo();
        Constants.isClickBtnLeft && this.isIntersectsFlagJumpPoint(dt);
        Constants.isClickBtnLeft && this.isIntersectsReadyJumpPoint(dt);
    }
}

