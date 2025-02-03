import { _decorator, Animation, AudioSource, Camera, Component, DirectionalLight, EventTouch, log, math, Node, ParticleSystem, ParticleSystem2D, SkeletalAnimation, UITransformComponent } from 'cc';
import { GameController } from './GameController';
import { AudioManager } from './AudioManager';
const { ccclass, property } = _decorator;
@ccclass('GamePlay')
export class GamePlay extends Component {
    // Camera
    @property(Camera)
    Camera: Camera = null;
    @property(DirectionalLight)
    DirectionalLight: DirectionalLight = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;

    // Node 2D
    @property(Node)
    background1: Node = null;
    @property(Node)
    background2: Node = null;

    @property(Node)
    doll: Node = null;
    @property(Node)
    Text: Node = null;

    @property(Node)
    SelectOption_Container: Node = null;
    @property(Node)
    OpenScene_Container: Node = null;
    @property(Node)
    Pose_Container: Node = null;
    @property(Node)
    BarBieSmile_Container: Node = null;

    @property(Node)
    Hand_HintPose: Node = null;
    @property(Node)
    Hand_ChooseClothe: Node = null;

    @property(Node)
    line: Node = null;
    @property(Node)
    hideMask: Node = null;

    // Node 3D
    @property(Node)
    Container_3D: Node = null;
    @property(Node)
    character: Node = null;
    @property(Node)
    clothe_Default: Node = null;

    @property(Node)
    iconhair: Node = null;
    @property(Node)
    icondress: Node = null;
    @property(Node)
    iconshoe: Node = null;

    // Array
    @property([Node])
    Clothes: Node[] = [];
    @property([Node])
    Items: Node[] = [];
    @property([Node])
    icon_Dress: Node[] = [];
    @property([Node])
    Icon_shoes: Node[] = [];
    @property([Node])
    Icon_Hairs: Node[] = [];
    @property([Node])
    Shoes: Node[] = [];



    // Effect
    @property(ParticleSystem)
    confeltti: ParticleSystem = null;
    @property(ParticleSystem)
    confeltti2: ParticleSystem = null;

    // @property(ParticleSystem)
    // particle: ParticleSystem = null;
    @property(ParticleSystem2D)
    effect2D: ParticleSystem2D = null;

    // state
    isRotate: boolean = false;
    isPlayBgSound: boolean = false;
    step: number = 1;
    isShowShoe: boolean = false;
    isShowHair: boolean = false;

    protected onLoad(): void {
        this.Container_3D.active = false;
    }

    protected start(): void {
        this.AudioManager.bgSound.play();

        this.handleOpenScene();

        // this.debug3D();

        this.registerEvent();

        this.iconhair.active = false;
        this.iconshoe.active = false;
    }


    private debug3D(): void {
        this.Container_3D.active = true;
        this.DirectionalLight.illuminance = 2;
    }


    private handleOpenScene(): void {
        this.OpenScene_Container.getComponent(Animation).play("OpenScene_Anim");

        this.scheduleOnce(() => {
            this.AudioManager.manSmileSound.play();
        }, 0.5);

        this.scheduleOnce(() => {
            this.AudioManager.hmmSound.play();
        }, 1.5);

        this.scheduleOnce(() => {
            this.AudioManager.crySound.play();
        }, 3);

        this.scheduleOnce(() => {
            this.SelectOption_Container.getComponent(Animation).play("SelectOption_Anim");
            this.Container_3D.active = true;
            this.DirectionalLight.illuminance = 2.2;
            // this.character.getComponent(SkeletalAnimation).play("Fs_Man_idle_looking_IP");

            this.Hand_ChooseClothe.getComponent(Animation).play("Hint_HandAnim");
        }, 5.5);
    }

    private registerEvent(): void {
        this.Items.forEach((item, index) => {
            item.on(Node.EventType.TOUCH_START, () => {
                this.handlePickItem(index)
            }, this);
        });

        // ironsource
        // this.hideMask.on(Node.EventType.TOUCH_END, this.handleTouchEnd, this);

        // mtg & applovin
        //   this.hideMask.on(Node.EventType.TOUCH_START, this.handleInstall, this);
    }


    private handleTouchEnd(): void {
        if (this.isPlayBgSound) {
            return;
        }

        this.isPlayBgSound = true;
        this.AudioManager.bgSound.play();
    }


    private handlePickItem(index: number): void {
        if(this.step >= 3) {
            this.handleInstall();
            return;
        }


        this.step += 1;
      

        if(this.step <= 2) {
            this.icondress.active = false;
            this.iconshoe.active = false;
            this.Clothes.forEach((clothe => clothe.active = false));
            this.Clothes[index].active = true;
        }

        if(this.step <= 3 && this.step > 2) {
            this.iconshoe.active = false;
            this.iconhair.active = false;
            this.Shoes.forEach((clothe => clothe.active = false));
            this.Shoes[index].active = true;
        }

        this.confeltti.play();
        this.confeltti2.play();
        this.AudioManager.clickSound.play();
        this.AudioManager.fireWorkSound.play();
        this.Hand_ChooseClothe.active = false;

        if(this.step >= 2 && !this.isShowShoe) {
            this.isShowShoe = true;
            this.icondress.active = false;
            this.iconshoe.active = true;
            this.icon_Dress.forEach((dress => dress.active = false));
            this.Icon_shoes.forEach((shoe => shoe.active = true));
        }

        // mtg & applovin
        if(this.step >= 3 && !this.isShowHair) {
            this.isShowHair = true;
            this.iconshoe.active = false;
            this.iconhair.active = true;
            this.Icon_shoes.forEach((dress => dress.active = false));
            this.Icon_Hairs.forEach((shoe => shoe.active = true));
            // this.hideMask.on(Node.EventType.TOUCH_START, this.handleInstall, this);
        }

        this.scheduleOnce(() => {
            this.AudioManager.hahaSound.play();
        }, 1)
    }


    private handleDressUp(id: number): void {
        this.AudioManager.clickSound.play();
        this.AudioManager.fireWorkSound.play();
        // this.clothe_Default.active = false;
        // this.Clothes[id].active = true;
        this.effect2D.resetSystem();
        // this.particle.play();

        // this.confeltti.play();
        // this.confeltti2.play();
        // this.character.getComponent(SkeletalAnimation).play("Fs_Man_idle_cry_IP");

        this.SelectOption_Container.active = false;

        this.BarBieSmile_Container.getComponent(Animation).play("BarbieSmile_Anim");

        this.scheduleOnce(() => {
            this.AudioManager.hahaSound.play();
            this.handlePose();
        }, 1)
    }

    private handlePose(): void {
        this.Camera.getComponent(Animation).play("Camra3D_Anim");

        this.scheduleOnce(() => {
            this.Pose_Container.getComponent(Animation).play("SelectOption_Anim");
        }, 0.7)

        this.scheduleOnce(() => {
            this.Hand_HintPose.getComponent(Animation).play("Hand_PoseAnim");

            // others
            this.line.on(Node.EventType.TOUCH_START, this.handleInstall, this);

            // mtg & applovin
            // this.hideMask.on(Node.EventType.TOUCH_START, this.handleInstall, this);
        }, 1.3)
    }


    private handleInstall(): void {
        this.AudioManager.bgSound.stop();
        this.GameController.installHandle();
    }


    protected update(dt: number): void {

    }
}
