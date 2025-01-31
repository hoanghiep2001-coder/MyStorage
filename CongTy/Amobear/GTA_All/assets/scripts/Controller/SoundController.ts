import { _decorator, AudioClip, AudioSource, Component, log, Node } from 'cc';
import Singleton from '../Others/Singleton';

const { ccclass, property } = _decorator;


@ccclass('SoundController')
export class SoundController extends Singleton<SoundController> {

    public sounds: AudioSource[] = [];

    constructor() {
        super();
        SoundController._instance = this;
    }


    protected onLoad(): void {

    }


    protected start(): void {
        this.sounds = this.node.getComponentsInChildren(AudioSource);

        window.gameReady && window.gameReady();

    }


    public playSound(soundName: string): void {
        // if (Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
        let result = this.sounds.find(sound => sound.node.name === soundName);
        result.volume = 1;
        result.play();
        // }
    }


    public muteSound(soundName: string, isMuted: boolean): void {
        let result = this.sounds.find(sound => sound.node.name === soundName);
        if (isMuted) result.volume = 0;
        else result.volume = 1;
    }


    public stopSound(soundName: string): void {
        let result = this.sounds.find(sound => sound.node.name === soundName);
        result.stop();
    }


    public stopAllSound(): void {
        this.sounds.forEach(sound => sound.stop());
    }
}