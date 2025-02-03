
import { _decorator, Component, math, Node, Tween, tween, view, Animation, screen, log, Widget, Vec3 } from 'cc';
import { GamePlay } from './GamePlay';
import { Constants } from '../Data/constants';
import { UIController } from './UIController';
const { ccclass, property } = _decorator;


@ccclass('Responsive')
export class Responsive extends Component {

    @property(GamePlay)
    GamePlay: GamePlay = null;
    @property(UIController)
    UIController: UIController = null;


    // state
    device: string = "";
    isRotate: boolean = false;
    hint_Pos_X: number;
    hint_Pos_Y: number;

    hand: Node = null;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";


    protected onLoad(): void {

    }


    protected start(): void {

    }


    private handleRotate(): void {
        if (screen.windowSize.width > screen.windowSize.height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
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
        this.device = this.HORIZONTAL_IPX;

        this.UIController.Layer_1.active = false;
        this.UIController.Layer_2.active = false;

        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    


        if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            // this.GamePlay.video.node.scale = new Vec3(0.665, 0.665, 0.665);

            console.log(1);
        } else {
            // IpX
            // this.GamePlay.video.node.scale = new Vec3(0.665, 0.665, 0.665);
            console.log(2);
        }
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        this.UIController.Layer_1.active = false;
        this.UIController.Layer_2.active = false;

        console.log(3);

        // horizontal google
        // if(cc.screen.windowSize.width / cc.screen.windowSize.height <= 1.2 && cc.screen.windowSize.width / cc.screen.windowSize.height >= 1.2) {

        //     return;
        // }
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

        this.device = this.VERTICAL_IPX;
        // this.UIController.Layer_1.setPosition(new Vec3(0, 420, 0));
        // this.UIController.Layer_2.setPosition(new Vec3(0, -420, 0));
        this.UIController.Layer_1.active = true;
        this.UIController.Layer_2.active = true;
        this.UIController.Layer_1.setPosition(new Vec3(0, 415, 0));
        this.UIController.Layer_2.setPosition(new Vec3(0, -422, 0));
        console.log(4);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        let width = screen.windowSize.width;
        let height = screen.windowSize.height;

        if (width / height < 0.7) {
            this.UIController.Layer_1.active = true;
            this.UIController.Layer_2.active = true;

            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                this.UIController.Layer_1.setPosition(new Vec3(0, 414, 0));
                this.UIController.Layer_2.setPosition(new Vec3(0, -422.5, 0));
                return;
            }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.UIController.Layer_1.setPosition(new Vec3(0, 424, 0));
            this.UIController.Layer_2.setPosition(new Vec3(0, -424, 0));
            console.log(5);
        } else {
            this.UIController.Layer_1.active = false;
            this.UIController.Layer_2.active = false;
            // Ipad
            // this.UIController.Layer_1.setPosition(new Vec3(0, 400, 0));
            // this.UIController.Layer_2.setPosition(new Vec3(0, -400, 0));
            console.log(6);
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

