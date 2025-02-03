
import { _decorator, Component, Node, ParticleSystem } from 'cc';
import { Constants } from '../Data/Constant';
import AudioManager from '../Plugin/AudioManager';
const { ccclass, property } = _decorator;

@ccclass('LaserController')
export class LaserController extends Component {
    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(Node)
    wallLaser_1: Node = null;
    @property(Node)
    wallLaser_2: Node = null;
    @property(Node)
    Laser: Node = null;

    @property(Node)
    LaserBtn_Red: Node = null;
    @property(Node)
    LaserBtn_Blue: Node = null;
    @property(Node)
    wallLaserBtn_Red: Node = null;
    @property(Node)
    wallLaserBtn_Blue: Node = null;

    @property([ParticleSystem])
    Fx_Lightning: ParticleSystem[] = [];


    laserFlag: boolean = false;
    wallLaserFlag: boolean = false;


    protected onLoad(): void {
        if (this.LaserBtn_Blue) {
            this.LaserBtn_Blue.active = false;
            this.LaserBtn_Red.active = true;
            this.wallLaserBtn_Blue.active = true;
            this.wallLaserBtn_Red.active = false;
        }
        if (this.Laser) {
            this.Laser.active = false;
        }

        this.Fx_Lightning.forEach(fx => {
            fx.node.active = false;
        });
    }


    protected start(): void {
        this.schedule(() => {
            if(Constants.isForceActiveLaser) return;
            this.activeLaser();
            this.scheduleOnce(() => {this.unActiveLaser()}, 1);
        }, 3);
    }


    public activeLaser(): void {
        Constants.laser = true;
        this.laserFlag = true;
        this.wallLaser_1.active = true;
        this.wallLaser_2.active = true;
        this.Laser.active = true;
        this.AudioManager.playSound(Constants.SoundTrack.electricSound);
        this.Fx_Lightning.forEach(fx => {
            fx.node.active = true;
            fx.play();
        })
    }


    public unActiveLaser(): void {
        Constants.laser = false;
        this.laserFlag = false;
        this.wallLaser_1.active = false;
        this.wallLaser_2.active = false;
        this.Laser.active = false;
        this.AudioManager.pauseSound(Constants.SoundTrack.electricSound);
        this.Fx_Lightning.forEach(fx => {
            fx.node.active = false;
            fx.play();
        })
    }


    // private activeLaser(): void {
    //     if (Constants.wallLaser) {
    //         this.wallLaserBtn_Blue.active = true;
    //         this.wallLaserBtn_Red.active = false;
    //         this.wallLaser_1.active = true;
    //         this.wallLaser_2.active = true;
    //     } else {
    //         this.wallLaserBtn_Red.active = true;
    //         this.wallLaserBtn_Blue.active = false;
    //         this.wallLaser_1.active = false;
    //         this.wallLaser_2.active = false;
    //     }

    //     if (Constants.laser) {
    //         if (this.laserFlag) {
    //             return;
    //         }

    //         this.laserFlag = true;
    //         this.LaserBtn_Blue.active = true;
    //         this.LaserBtn_Red.active = false;
    //         this.Laser.active = true;
    //         this.AudioManager.playSound(Constants.SoundTrack.electricSound);
    //         this.Fx_Lightning.forEach(fx => {
    //             fx.node.active = true;
    //             fx.play();
    //         })
    //     } else {

    //         if (!this.laserFlag) {
    //             return;
    //         }

    //         this.laserFlag = false;
    //         this.LaserBtn_Red.active = true;
    //         this.LaserBtn_Blue.active = false;
    //         this.Laser.active = false;
    //         this.AudioManager.stopSound(Constants.SoundTrack.electricSound);
    //         this.Fx_Lightning.forEach(fx => {
    //             fx.node.active = false;
    //             fx.stop();
    //         })
    //     }
    // }


    // protected update(dt: number): void {
    //     !Constants.ironSource.isEndGame && this.LaserBtn_Blue && this.activeLaser();
    // }
}

