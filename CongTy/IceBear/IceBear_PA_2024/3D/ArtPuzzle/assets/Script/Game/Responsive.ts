
import { _decorator, Component, math, Node, Tween, tween, view, Animation, screen, log, Widget, Camera, Vec3 } from 'cc';
import { GamePlay } from './GamePlay';
import { Constants } from '../Data/constants';
import { UIController } from './UIController';
const { ccclass, property } = _decorator;


@ccclass('Responsive')
export class Responsive extends Component {

    @property(Node)
    UI: Node = null;
    @property(Node)
    Armo: Node = null;
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

        this.UIController.Aim.setScale(0.5, 0.5, 0.5);
        this.UIController.Combo.node.setScale(0.2, 0.2, 0.2);
        this.UIController.Text_1.setScale(0.8,0.8,0.8);
        this.UIController.Text_wrong.setScale(0.4,0.4, 0.4);
        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    


        // if (screen.windowSize.height / screen.windowSize.width > 0.55) {
        //     // Ip 6 / 6Plus / 7 / 7 Plus
        //     this.UI.setScale(new Vec3(0.35, 0.35, 0.35))
        //     // this.UI.setPosition(new Vec3(0, -30, 0))
    
        //     this.Armo.setScale(new Vec3(0.5, 0.5, 0.5))
        //     this.Armo.setPosition(new Vec3(50, -40, 0))
    
        //     console.log(1);
        // } else {

        //     // IpX
        //     this.UI.setScale(new Vec3(0.3, 0.3, 0.3))
        //     // this.UI.setPosition(new Vec3(0, -30, 0))
    
        //     this.Armo.setScale(new Vec3(0.5, 0.5, 0.5))
        //     this.Armo.setPosition(new Vec3(50, -40, 0))
    
        //     console.log(2);
        // }

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.UIController.Aim.setScale(0.5, 0.5, 0.5);
        this.UIController.Combo.node.setScale(0.2, 0.2, 0.2);
        this.UIController.Text_1.setScale(0.7,0.7,0.7);
        this.UIController.Text_wrong.setScale(0.4,0.4, 0.4);
        // this.UI.setScale(new Vec3(0.35, 0.35, 0.35))
        // this.UI.setPosition(new Vec3(0, -20, 0))

        // this.Armo.setScale(new Vec3(0.5, 0.5, 0.5))
        // this.Armo.setPosition(new Vec3(35, -40, 0))
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
        this.UIController.Aim.setScale(0.2, 0.2, 0.2);
        this.UIController.Combo.node.setScale(0.1, 0.1, 0.1);
        this.UIController.Text_1.setScale(0.35,0.35, 0.35);
        this.UIController.Text_wrong.setScale(0.3,0.3, 0.3);
        // this.UI.setScale(new Vec3(1, 1, 1))
        // this.UI.setPosition(new Vec3(0, 0, 0))

        // this.Armo.setScale(new Vec3(1, 1, 1))
        // this.Armo.setPosition(new Vec3(0, 0, 0))

        console.log(4);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.UIController.Aim.setScale(0.2, 0.2, 0.2);
        this.UIController.Combo.node.setScale(0.1, 0.1, 0.1);
        this.UIController.Text_1.setScale(0.4,0.4, 0.4);
        this.UIController.Text_wrong.setScale(0.3,0.3, 0.3);
        // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
        //     // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
        //     //     // mobile mode applovin

        //     //     return;
        //     // }

        //     // Iphone 6 / 6 plus / 7 / 7 Plus

        //     console.log(5);
        // } else {
        //     // Ipad
        //     console.log(6);
        // }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

