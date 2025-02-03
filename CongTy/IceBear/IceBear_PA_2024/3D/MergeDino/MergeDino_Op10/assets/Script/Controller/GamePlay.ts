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


    protected onLoad(): void {
       
    }


    protected start(): void {
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
    }



    protected update(dt: number): void {
     
    }
}
