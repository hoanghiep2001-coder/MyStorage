
import { _decorator, BoxCollider, Camera, Collider, Component, easing, Graphics, ICollisionEvent, log, Node, ParticleSystem, ParticleSystem2D, screen, tween, Vec3 } from 'cc';
import { DinoPaths_InitPropsInterfaces } from '../Utils/Interfaces';
import { GameInfo } from '../Const/GameInfo';
import { IronSource } from '../AdHelper/IronSource';
type GameController = import("./GameController").GameController;
const { ccclass, property } = _decorator;


@ccclass('UIGameController')
export class UIGameController extends Component {

    @property(Node)
    GameControllerNode: Node = null;
    GameController: GameController = null;

    @property(Camera)
    Camera3D: Camera = null;

    @property(Node)
    Canvas: Node = null;

    @property(Node)
    OpeningBg: Node = null;

    @property(Node)
    Tut: Node = null;


    @property(Node)
    CTA: Node = null;
    
    @property(ParticleSystem2D)
    Ps_Galaxy: ParticleSystem2D = null;
    @property(ParticleSystem2D)
    Ps_Star: ParticleSystem2D = null;

    // 3D
    @property(Node)
    DinoTouch: Node = null;
    DinoPaths: Node[] = [];
    DinoPaths_InitProps: DinoPaths_InitPropsInterfaces[] = [];

    @property(Node)
    MainGamePlay: Node = null;

    @property(Node)
    Egg: Node = null;

    @property(Node)
    Dino_Current: Node = null;
    @property(Node)
    Dino_Model: Node = null;
    @property(Node)
    Dino_Hint: Node = null;
    @property(Node)
    Dino_Temp: Node = null;

    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";


    protected start(): void {
        this.init();

        this.activeTweenForBtnCTA();

        this.handleRotate();

        this.registerEvent();
    }


    private init(): void {
        this.GameController = this.GameControllerNode.getComponent("GameController") as GameController;

        let dinoTempPos = this.Dino_Temp.getPosition();

        this.DinoPaths = this.DinoTouch.children;
        this.DinoPaths.forEach((path, index) => {

            // lưu lại vị trí đầu tiên (lúc đã rơi thành từng mảnh)
            let state: DinoPaths_InitPropsInterfaces = {
                position: path.getPosition(),
                scale: path.getScale(),
                rotation: path.getRotation()
            }

            this.DinoPaths_InitProps.push(state);

            path.setPosition(dinoTempPos);

        });

    }


    public registerEvent(): void {
        let overlay = this.CTA.getChildByName("Overlay");
        let btn = this.CTA.getChildByName("Btn");

        // applovin & mtg
        // overlay.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);

        btn.on(Node.EventType.TOUCH_START, this.GameController.installHandle, this);
    }


    private activeTweenForBtnCTA(): void {
        let btn = this.CTA.getChildByName("Btn");
        tween(btn)
        .repeatForever(
           tween(btn)
                .to(0.5, { scale: new Vec3(0.8, 0.8, 0.8) })
                .to(0.5, { scale:  new Vec3(0.75, 0.75, 0.75)}, { easing: easing.elasticOut})
        ).start();
    }


    private handleRotate(): void {
        if (screen.windowSize.width > screen.windowSize.height) {
            this.isRotate = true;
            this.setHorizontal();
        } else {
            this.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {
        if (screen.windowSize.height / screen.windowSize.width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX();
        } else {
            this.setHorizontalForTablet();
        }
    }


    private setHorizontalForIpX(): void {
        if (this.HORIZONTAL_IPX === this.device) {
            return;
        }

        log("hr ipx");
        this.device = this.HORIZONTAL_IPX;

        this.OpeningBg.setScale(new Vec3(0.6, 0.6, 1));

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.OpeningBg.setScale(new Vec3(0.6, 0.6, 1));

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            log("hr ip 6");

            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {

            log("hr ipad");

            // Ipad

        }

    }


    private setVertical(): void {
        if (screen.windowSize.width / screen.windowSize.height < 0.5) {
            this.setIphoneX();
        } else {
            this.setMobile();
        }
    }

    private setIphoneX(): void {
        if (this.VERTICAL_IPX === this.device) {
            return;
        }

        log("vt ipx");
        this.device = this.VERTICAL_IPX;

        this.OpeningBg.setScale(new Vec3(0.5, 0.5, 1));
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.OpeningBg.setScale(new Vec3(0.5, 0.5, 1));

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // Iphone 6 / 6 plus / 7 / 7 Plus

            log("vt ip 6");

        } else {
            // Ipad

            log("vt ipad");
        }
    }


    protected update(dt: number): void {

        if((GameInfo.isWin || GameInfo.isLose) && !GameInfo.IsShowPopupInstall) {
            GameInfo.IsShowPopupInstall = true;
            this.CTA.active = true;
        }

        this.handleRotate();
        
    }

}