import { _decorator, Component, Node, Camera, SkeletalAnimation } from 'cc';
const { ccclass, property } = _decorator;
import { GameController } from './GameController';
import { AudioManager } from './AudioManager';
import { Constants } from '../Data/constants';
import { UIController } from './UIController';

@ccclass('GamePlay')
export class GamePlay extends Component {
    // Component
    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(Camera)
    Camera: Camera = null;

    @property(Node)
    Container_3D: Node = null;

    Dogs: Node[] = [];
    currentIndex: number = 0;


    protected start(): void {
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);

        this.Container_3D.getChildByName("Dogs")
        .children
        .forEach(dog => dog.name.includes("Dog") && this.Dogs.push(dog));

        this.schedule(() => {
            this.randomDog();
        }, 1);
    }


    private randomDog(): void {
        
        this.currentIndex += 1;

        if(this.currentIndex >= this.Dogs.length) {
            this.currentIndex = 0;
        }

        this.Dogs.forEach(dog => {
            dog.active = false;
        });        

        let activeCat = this.Dogs[this.currentIndex];
        activeCat.active = true;
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }

        Constants.ironSource.isPlayBgSound = true;
    }


    protected update(dt: number): void {
        // ironsource
        // this.handleMuteSoundIronSource();
    }
}
