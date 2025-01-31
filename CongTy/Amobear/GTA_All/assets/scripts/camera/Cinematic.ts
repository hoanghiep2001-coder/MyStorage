import { _decorator, Component, game, log, Node, Tween, tween, Vec3, view } from 'cc';
import { CharacterController } from '../CharacterController';
import { JoystickController } from '../joystick/JoystickController';
import { GameInfo } from '../CONST/GameInfo';
import { SoundController } from '../Controller/SoundController';
const { ccclass, property } = _decorator;
declare var window;


@ccclass('Cinematic')
export class Cinematic extends Component {
    @property(Node)
    mainCamera: Node = null;
    @property(Node)
    subCamera: Node = null;
    @property(Node)
    subCamera2: Node = null;
    @property(Node)
    subCamera3: Node = null;
    @property(Node)
    joyStickCtrl: Node = null;
    @property(Node)
    pointCtrl: Node = null;


    @property(CharacterController)
    charCtrl: CharacterController = null;

    
    // Tutorial
    @property(Node)
    tutorial3D: Node = null;
    @property(Node)
    tutorialUI1: Node = null;
    @property(Node)
    tutorialUI2: Node = null;
    @property(Node)
    tutorialUI3: Node = null;
    @property(Node)
    mainChar: Node = null;

    // Landscape
    @property(Node)
    joyStickCtrl2: Node = null;
    @property(Node)
    pointCtrl2: Node = null;

    @property(Node)
    tutorialUI5: Node = null;
    @property(Node)
    tutorialUI6: Node = null;

    @property(Node)
    landscapeUI: Node = null;
    @property(Node)
    portraitUI: Node = null;

    @property(Node)
    cta: Node = null;


    private tweenThen!: Tween<Node>;
    private tweenThen2!: Tween<Node>;
    private tweenThen3!: Tween<Node>;
    isPlayCinema2 = false;


    onCarButtonFlag: boolean = false;

    // onLoad() {
    //     window.gameReady && window.gameReady();
    // }

    start() {
        // this.scheduleOnce(this.playIntro, 1);
        game.frameRate = 60;

        this.tutorial3D.active = true;
        // this.tutorialUI1.active = true;
        // this.tutorialUI3.active = true;
    }

    update(dt: number) {
        if (this.charCtrl.isCheckpoint == true && this.isPlayCinema2 == false) {
            this.isPlayCinema2 = true;

            this.pointCtrl.active = false;
            this.joyStickCtrl.getComponent(JoystickController).enabled = false;
            this.pointCtrl2.active = false;
            this.joyStickCtrl2.getComponent(JoystickController).enabled = false;

            this.playIntro();
        }

        // Check Device orientation
        // var frameSize = view.getVisibleSize();
        // if (frameSize.height > frameSize.width) {
        //     // portrait
        //     this.portraitUI.active = true;
        //     this.landscapeUI.active = false;
        // }
        // else if (frameSize.height < frameSize.width) {
        //     // landscape
        //     this.portraitUI.active = false;
        //     this.landscapeUI.active = true;
        // }

        GameInfo.isOnMotobike && !this.onCarButtonFlag && this.onCarButton();

        if(GameInfo.currentOption === 8 || GameInfo.currentOption === 9)  {
            if(GameInfo.GTA_PA_08.isHitBrakeBtn || GameInfo.GTA_PA_08.isHitBrakeBtnFlag) {
                this.subCamera2.active = false;
                this.mainCamera.active = true;
            }
        }

        // if (this.cta.active == true) {
        //     this.scheduleOnce(this.endGameSchedule, 5);
        // }
    }

    onCarButton() {
        this.onCarButtonFlag = true;

        log("switch camera");

        this.tutorialUI2.active = false;
        this.tutorialUI5.active = false;
        this.subCamera2.active = true;
        this.scheduleOnce(this.playIntro2, 0.2);
    }

    playIntro() {
        log("play intro 1");

        let move = tween().to(1, { position: new Vec3(656.447, 28.438, -151.239) });

        this.tweenThen = tween(this.subCamera)
            .delay(0.3)
            .call(() => {
                this.tutorialUI2.active = true;
                this.tutorialUI5.active = true;
            })
            .start();
    }

    playIntro2() {
        log("play intro 2");

        let rotate = tween().to(1, { eulerAngles: new Vec3(7.1, 180, 0) }, { easing: 'smooth' });
        let move = tween().to(0.7, { position: new Vec3(670.813, 23.697, -102.513) }, { easing: 'smooth' });

        this.tweenThen2 = tween(this.subCamera2)
            .then(move)
            .delay(0.3)
            .call(() => {
                SoundController.Instance(SoundController).playSound("HeyYouSound");
                this.scheduleOnce(() => {
                    if((GameInfo.currentOption === 8 || GameInfo.currentOption === 9)) {
                        GameInfo.GTA_PA_08.isRidingMoto = true;
                    }
                    // SoundController.Instance(SoundController).playSound("CarBrmmSound");
                }, 1)
            }) 
            .start();
    }
}