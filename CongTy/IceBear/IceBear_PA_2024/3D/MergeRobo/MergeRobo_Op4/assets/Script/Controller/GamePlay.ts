import { _decorator, Animation, AudioSource, Camera, view, Vec2, Component, EventTouch, Graphics, log, math, Node, PhysicsSystem, quat, RigidBody, SkeletalAnimation, Skeleton, Vec3, UITransform, ParticleSystem, PrivateNode, tween } from 'cc';
import { CharacterControl } from './CharacterControl';
import { RangerControl } from './RangerControl';
import { GameController } from './GameController';
import { TouchAreaController } from './TouchAreaController';
import { AudioManager } from '../Plugin/AudioManager';
import { Constants } from '../Data/Constant';
import { NodesController } from './NodesController';
import { Utils } from '../Plugin/Utils';
const { ccclass, property } = _decorator;
@ccclass('GamePlay')
export class GamePlay extends Component {

    // Script
    @property(NodesController)
    NodesController: NodesController = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;


    // state
    isMergeStep1Flag: boolean = false;
    isMergeStep2Flag: boolean = false;
    isFailStep1Flag: boolean = false;
    isFailStep2Flag: boolean = false;


    protected onLoad(): void {
       
    }


    protected start(): void {
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.AudioManager.switchVolume(Constants.SoundTrack.bgSound, 0.5);
    }


    private handleMergeStep1(): void {
        Constants.isCanTouch = false;
        this.isMergeStep1Flag = true;

        this.NodesController.Camera.getComponent(Animation).play();
        this.NodesController.dinoLevels.forEach(level => level.active = false);
        this.scheduleOnce(() => {
            this.NodesController.FX_Merge.play();
        }, 1);

        this.scheduleOnce(() => {
            this.NodesController.unitsStep1.forEach(unit => Utils.GamePlay.mergeDinoStep1(unit));
            this.NodesController.MainCharacter_1.active = true;
            tween(this.NodesController.MainCharacter_1)
            .to(0.5, {scale: new Vec3(1, 1, 1)})
            .start();
            this.AudioManager.playSound(Constants.SoundTrack.Dino_MergeSound);
        }, 2);
        
        this.scheduleOnce(() => {
            this.NodesController.MainCharacter_1.getComponent(CharacterControl).level.active = true;
            this.AudioManager.playSound(Constants.SoundTrack.Dino_ScreamSound);
        }, 2.5);
        
        this.scheduleOnce(() => {
            this.NodesController.dinoLevels.forEach(level => level.active = true);
            Constants.isCanTouch = true;
        }, 4);
        
        this.scheduleOnce(() => {
            Constants.isFightStep1 = true;
            this.AudioManager.playSound(Constants.SoundTrack.Dino_FightSound);
        }, 5);
    }

    private handleMergeStep2(): void {
        Constants.isCanTouch = false;
        this.isMergeStep2Flag = true;

        this.NodesController.Camera.getComponent(Animation).play();
        this.NodesController.dinoLevels.forEach(level => level.active = false);
        this.scheduleOnce(() => {
            this.NodesController.FX_Merge_2.play();
        }, 1);

        this.scheduleOnce(() => {
            this.NodesController.unitstep2.forEach(unit => Utils.GamePlay.mergeDinoStep2(unit));
            this.NodesController.MainCharacter_2.active = true;
            tween(this.NodesController.MainCharacter_2)
            .to(0.5, {scale: new Vec3(1, 1, 1)})
            .start();
            this.AudioManager.playSound(Constants.SoundTrack.Dino_MergeSound);
        }, 2);
        
        this.scheduleOnce(() => {
            this.NodesController.MainCharacter_2.getComponent(CharacterControl).level.active = true;
            this.NodesController.MainCharacter_1.getComponent(CharacterControl).level.active = true;
            this.AudioManager.playSound(Constants.SoundTrack.Dino_ScreamSound);
        }, 2.5);

        this.scheduleOnce(() => {
            this.NodesController.dinoLevels.forEach(level => level.active = true);
            Constants.isStartStep2 = true;
            Constants.isCanTouch = true;
        }, 4);

        this.scheduleOnce(() => {
            Constants.isFightStep2 = true;
            this.AudioManager.playSound(Constants.SoundTrack.Dino_FightSound);
        }, 5);
    }


    private setupStep2(): void {
        console.log("setup step2");
        
        this.isFailStep1Flag = true;
        this.NodesController.Fail.active = true;
        this.AudioManager.playSound(Constants.SoundTrack.Dino_LoseSound);
        this.NodesController.dinoLines.forEach(line => line.active = false);

        this.scheduleOnce(() => {
            this.NodesController.replay()
        }, 2)

        this.scheduleOnce(() => {
            this.NodesController.hint_2.active = true;
        }, 2.5)
    }


    private setupStep3(): void {
        console.log("setup step3");

        this.isFailStep2Flag = true;
        this.NodesController.Fail.active = true;
        this.AudioManager.playSound(Constants.SoundTrack.Dino_LoseSound);
        this.NodesController.dinoLines.forEach(line => line.active = false);

        this.scheduleOnce(() => {
            // this.NodesController.unitstep2.forEach(unit => Utils.GamePlay.mergeDinoStep2(unit));
            this.NodesController.MainCharacter_2.active = false;
            this.NodesController.replay();
        }, 2)

        this.scheduleOnce(() => {
            this.NodesController.hint_3.active = true;
        }, 2.5)
    }


    protected update(dt: number): void {
        Constants.isDoneMergeStep1 && !this.isMergeStep1Flag && this.handleMergeStep1();
        Constants.isDoneMergeStep2 && !this.isMergeStep2Flag && this.handleMergeStep2();
        Constants.isFailStep1 && !this.isFailStep1Flag && this.setupStep2();
        Constants.isFailStep2 && !this.isFailStep2Flag && this.setupStep3();
    }
}
