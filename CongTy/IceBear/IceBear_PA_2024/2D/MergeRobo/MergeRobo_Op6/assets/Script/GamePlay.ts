import AudioManager from "./AudioManager";
import { Constants } from "./constants";
import { GameController } from "./GameController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    // Component
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;

    // Node
    @property(cc.Node)
    StepOne: cc.Node = null;
    @property(cc.Node)
    StepTwo: cc.Node = null;
    @property(cc.Node)
    StepThree: cc.Node = null;
    @property(cc.Node)
    text: cc.Node = null;
    @property(cc.Node)
    Bg1: cc.Node = null;
    @property(cc.Node)
    HideMask: cc.Node = null;
    @property(cc.Node)
    Card_StepThree: cc.Node = null;

    // Array
    @property([cc.Node])
    Hint_Arrows: cc.Node[] = [];
    @property([cc.Node])
    Cards: cc.Node[] = [];
    @property([cc.Node])
    Cards_Opend: cc.Node[] = [];

    // Effects
    @property([cc.ParticleSystem])
    BlinkEffects: cc.ParticleSystem[] = [];

    // SpriteFame
    @property(cc.SpriteFrame)
    card1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    card2: cc.SpriteFrame = null;

    // State
    isRotate: boolean = false;
    IsFirstCardOpen: boolean = false;
    IsSecondCardOpen: boolean = false;
    isPlayBgSound: boolean = false;

    CardFakePosition: cc.Vec2 = null;
    CardFakeSecondPosition: cc.Vec2 = null;

    OverLord: cc.Node = null;
    pickedCard: string = null;


    protected onLoad(): void {
        this.Cards_Opend.forEach(card => {
            card.opacity = 0;
        });
    }


    protected start(): void {
        // this.AudioManager.playSound(Constants.SoundTrack.introSound);

        this.Hint_Arrows.forEach(hint => hint.getComponent(cc.Animation).play());

        this.registerEvent();
    }


    private registerEvent(): void {
        // ironSource
        this.Bg1.on(cc.Node.EventType.TOUCH_START, this.handleBgTouchStart, this)

        this.Cards.forEach((card, index) => {
            card.on(cc.Node.EventType.TOUCH_START, () => this.handleCardTouchStart(card, index), this);
        });

        this.Card_StepThree.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        // mtg & applovin
        // this.HideMask.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private handleBgTouchStart(): void {
        if (this.isPlayBgSound) {
            return;
        }

        this.isPlayBgSound = true;
        this.AudioManager.playSound(Constants.SoundTrack.introSound);
    }


    private handleCardTouchStart(card: cc.Node, index: number): void {
        if(this.IsSecondCardOpen) return;

        let currentCard = card;

        if (this.pickedCard !== currentCard.name) {
            !this.IsFirstCardOpen
                ? this.handleStepOne(index)
                : this.handleShowStepTwo(index);
        }

        this.pickedCard = currentCard._name;

        this.handlePlaySoundIronSource();
    }


    private handleStepOne(index: number): void {
        this.AudioManager.playSound(Constants.SoundTrack.mergeSound);

        this.IsFirstCardOpen = true;

        if (index === 0) {
            this.Hint_Arrows[0].active = false;
        }        

        if (index === 1) {
            this.Hint_Arrows[1].active = false;
        }

        let blinkEffect = this.Cards[index].getComponentInChildren(cc.ParticleSystem);

        blinkEffect.resetSystem();

        let cardRobo = this.Cards[index].getChildByName("card_picked");

        cardRobo.getComponent(cc.Sprite).spriteFrame = this.card1;

        cardRobo.getComponent(cc.Animation).play("Card_OpenAnim");
    }


    private handleShowStepTwo(index: number): void {

        this.IsSecondCardOpen = true;

        this.AudioManager.playSound(Constants.SoundTrack.mergeSound);

        this.Hint_Arrows.forEach(hint => hint.active = false);

        let blinkEffect = this.Cards[index].getComponentInChildren(cc.ParticleSystem);

        blinkEffect.resetSystem();

        let cardRobo = this.Cards[index].getChildByName("card_picked");

        cardRobo.getComponent(cc.Sprite).spriteFrame = this.card2;

        cardRobo.getComponent(cc.Animation).play("Card_OpenAnim");

        if (this.IsFirstCardOpen && this.IsSecondCardOpen) {
            this.scheduleOnce(() => {
                this.StepOne.getComponent(cc.Animation).play("Anim_Fade");
                this.mergeCard()
            }, 1);
        }
    }


    private mergeCard(): void {

        let MergingScene = this.StepTwo.getChildByName("Merging");
        let spine_speedLine = this.StepTwo.getChildByName("speedLine_1");
        let fx_Fusion = MergingScene.getChildByName("FX_Fusion");
        let cardWhite = MergingScene.getChildByName("card_white");
        let card1 = MergingScene.getChildByName("Card1");
        let card2 = MergingScene.getChildByName("Card2");
        let cardFusion = MergingScene.getChildByName("Card_fusion");
        let FX_Blink = cardFusion.getChildByName("FX_Blink");
        let FX_Flame = cardFusion.getChildByName("FX_Flame");

        fx_Fusion.active = true;

        cc.tween(this.StepTwo)
        .to(0.5, {opacity: 255})
        .call(() => fusion())
        .start();


        const fusion = () => {
            this.scheduleOnce(() => {
                this.AudioManager.stopSound(Constants.SoundTrack.introSound);

                this.AudioManager.playSound(Constants.SoundTrack.tuhuSound);
    
                MergingScene.getComponent(cc.Animation).play();
        
                this.scheduleOnce(() => {
                    spine_speedLine.getComponent(sp.Skeleton).timeScale = 1.1;

                    this.AudioManager.playSound(Constants.SoundTrack.FusionSound);
        
                    cardWhite.active = true;
        
                    card1.active = false;
        
                    card2.active = false;
    
                    fx_Fusion.active = false;
                }, 1);
        
                this.scheduleOnce(() => {
                    cardFusion.opacity = 255;

                    cardWhite.active = false;

                    cc.tween(cardFusion)
                    .to(0.5, {scale: 0.55}, {easing: cc.easing.elasticOut})
                    .call(() => {FX_Flame.active = true;})
                    .start();

                    console.log("Done Fusion");
                }, 4)

                this.scheduleOnce(() => {
                    this.AudioManager.playSound(Constants.SoundTrack.MergingSound)
                }, 4.5);

                this.scheduleOnce(() => {FX_Flame.active = false;}, 6.5);

                this.scheduleOnce(() => {
                    this.showStepThree();
                }, 7);
            }, 1)
        }
    }


    private showStepThree(): void {
        cc.tween(this.StepTwo)
        .to(0.5, {opacity: 0})
        .start();

        this.StepThree.active = true;

        cc.tween(this.StepThree)
        .to(0.5, {opacity: 255})
        .start();
    }



    private handlePlaySoundIronSource(): void {
        if (this.isPlayBgSound) {
            return;
        }

        this.isPlayBgSound = true;

        !this.IsSecondCardOpen 
        ? this.AudioManager.playSound(Constants.SoundTrack.introSound)
        : this.AudioManager.playSound(Constants.SoundTrack.MergingSound);
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
                !this.IsSecondCardOpen 
                ? this.AudioManager.playSound(Constants.SoundTrack.introSound)
                : this.AudioManager.playSound(Constants.SoundTrack.MergingSound);
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                cc.audioEngine.stopAll()
            }
        }
    }


    protected update(dt: number): void {
        // ironsource
        this.handleMuteSoundIronSource();
    }
}
