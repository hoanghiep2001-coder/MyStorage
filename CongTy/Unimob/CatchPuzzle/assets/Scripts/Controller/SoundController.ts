// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Singleton from "../Plugin/Singleton";

const {ccclass, property} = cc._decorator;

@ccclass
export class SoundController extends Singleton<SoundController> {


    public sounds: cc.AudioSource[] = [];

    constructor() {
        super();
        SoundController._instance = this;
    }


    protected onLoad(): void {

    }


    protected start(): void {
        this.sounds = this.node.getComponentsInChildren(cc.AudioSource);
    }


    public playSound(soundName: string): void {
        let result = this.sounds.find(sound => sound.node.name === soundName);
        result.play();
    }


    // public muteSound(soundName: string, isMuted: boolean): void {
    //     let result = this.sounds.find(sound => sound.node.name === soundName);
    // }


    public stopSound(soundName: string): void {
        let result = this.sounds.find(sound => sound.node.name === soundName);
        result.stop();
    }


    public stopAllSound(): void {
        this.sounds.forEach(sound => sound.stop());
    }


}
