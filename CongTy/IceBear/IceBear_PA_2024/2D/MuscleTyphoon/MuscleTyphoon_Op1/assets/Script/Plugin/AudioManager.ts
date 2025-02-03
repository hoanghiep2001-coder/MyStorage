import { Constants } from "../Data/constants";
const { ccclass, property } = cc._decorator;


@ccclass
export default class AudioManager extends cc.Component {

    // sound 
    @property(cc.AudioSource)
    bgSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    woaAnimeSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    openBookSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    showItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    pickItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    waoGameSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    swtichItemSound: cc.AudioSource = null;
    @property(cc.AudioSource)
    chickFunSound: cc.AudioSource = null;

    @property(cc.AudioSource)
    Fx_Bonus1: cc.AudioSource = null;
    @property(cc.AudioSource)
    Fx_Bonus2: cc.AudioSource = null;
    @property(cc.AudioSource)
    Fx_Bonus3: cc.AudioSource = null;
    @property(cc.AudioSource)
    Fx_Bonus4: cc.AudioSource = null;

    @property(cc.AudioSource)
    Fx_Lose: cc.AudioSource = null;

    public playSound(soundName: string): void {

        if (Constants.ironSource.SoundState) {
            switch (soundName) {
                case "bgSound":
                    this.bgSound.play();
                    break;
                    case "chickFunSound":
                        this.chickFunSound.play();
                        break;
                case "woaAnimeSound":
                    this.woaAnimeSound.play();
                    break;
                    case "Fx_Lose":
                        this.Fx_Lose.play();
                        break;
                case "Fx_Bonus1":
                    this.Fx_Bonus1.play();
                    break;
                case "Fx_Bonus2":
                    this.Fx_Bonus2.play();
                    break;
                case "Fx_Bonus3":
                    this.Fx_Bonus3.play();
                    break;
                case "Fx_Bonus4":
                    this.Fx_Bonus4.play();
                    break;
                case "openBookSound":
                    this.openBookSound.play();
                    break;
                case "showItemSound":
                    this.showItemSound.play();
                    break;
                case "pickItemSound":
                    this.pickItemSound.play();
                    break;
                case "waoGameSound":
                    this.waoGameSound.play();
                    break;
                case "swtichItemSound":
                    this.swtichItemSound.play();
                    break;
                default:
                    break;
            }
        }
    }

    public stopSound(soundName: string): void {
        switch (soundName) {
            case "bgSound":
                this.bgSound.stop();
                break;
            case "woaAnimeSound":
                this.woaAnimeSound.stop();
                break;
                case "chickFunSound":
                    this.chickFunSound.stop();
                    break;
                case "Fx_Lose":
                    this.Fx_Lose.stop();
                    break;
            case "openBookSound":
                this.openBookSound.stop();
                break;
                case "Fx_Bonus1":
                    this.Fx_Bonus1.stop();
                    break;
                case "Fx_Bonus2":
                    this.Fx_Bonus2.stop();
                    break;
                case "Fx_Bonus3":
                    this.Fx_Bonus3.stop();
                    break;
                case "Fx_Bonus4":
                    this.Fx_Bonus4.stop();
                    break;
            case "showItemSound":
                this.showItemSound.stop();
                break;
            case "pickItemSound":
                this.pickItemSound.stop();
                break;
            case "waoGameSound":
                this.waoGameSound.stop();
                break;
            case "swtichItemSound":
                this.swtichItemSound.stop();
                break;
            default:
                break;
        }
    }


    public stopAllSoundExceptBgSound(): void {
        this.showItemSound.stop();
        this.woaAnimeSound.stop(); 
        this.openBookSound.stop(); 
        this.pickItemSound.stop();
        this.Fx_Lose.stop();
        this.waoGameSound.stop(); 
        this.swtichItemSound.stop();
        this.Fx_Bonus1.stop();
        this.Fx_Bonus2.stop();
        this.Fx_Bonus3.stop();
        this.Fx_Bonus4.stop();
        
    }


    public stopAllSound(): void {
        this.bgSound.stop();
        this.chickFunSound.stop();
        this.Fx_Lose.stop();
        this.showItemSound.stop();
        this.woaAnimeSound.stop(); this.openBookSound.stop(); this.pickItemSound.stop();
        this.waoGameSound.stop(); this.swtichItemSound.stop();
        this.Fx_Bonus1.stop();
        this.Fx_Bonus2.stop();
        this.Fx_Bonus3.stop();
        this.Fx_Bonus4.stop();
    }
}
