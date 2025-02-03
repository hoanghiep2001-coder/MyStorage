
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

        this.GamePlay.video.node.setScale(0.15, 0.15, 0.15);
        this.UIController.Btn_Left.setPosition(-43.6, -5, 0);
        this.UIController.Btn_Left.setScale(0.5, 0.5, 0.5);
        this.UIController.Btn_Right.setPosition(50.223, -5, 0);
        this.UIController.Btn_Right.setScale(0.5, 0.5, 0.5);

        this.GamePlay.CTA_icon.active = false;
        this.GamePlay.CTA_logo.setScale(0.2, 0.2, 0.2);
        this.GamePlay.CTA_logo.setPosition(0, 10, 0);
        this.GamePlay.CTA_btn.setPosition(0, -50, 0);
        this.GamePlay.CTA_btn.setScale(0.22, 0.22, 0.22);


        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    
        

        if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus

            console.log(1);
        } else {
            // IpX

            console.log(2);
        }

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.GamePlay.video.node.setScale(0.15, 0.15, 0.15);
        this.UIController.Btn_Left.setPosition(-43.6, -2.567, 0);
        this.UIController.Btn_Left.setScale(0.5, 0.5, 0.5);
        this.UIController.Btn_Right.setPosition(50.223, -2.567, 0);
        this.UIController.Btn_Right.setScale(0.5, 0.5, 0.5);

        this.GamePlay.CTA_icon.active = false;
        this.GamePlay.CTA_logo.setScale(0.2, 0.2, 0.2);
        this.GamePlay.CTA_logo.setPosition(0, 10, 0);
        this.GamePlay.CTA_btn.setPosition(0, -50, 0);
        this.GamePlay.CTA_btn.setScale(0.22, 0.22, 0.22);

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

        this.GamePlay.video.node.setScale(0.35, 0.35, 0.35);
        this.UIController.Btn_Left.setPosition(-100, -50, 0);
        this.UIController.Btn_Left.setScale(1, 1, 1);
        this.UIController.Btn_Right.setPosition(100, -50, 0);
        this.UIController.Btn_Right.setScale(1, 1, 1);

        this.GamePlay.CTA_icon.active = true;
        this.GamePlay.CTA_icon.setScale(0.6, 0.6, 0.6);
        this.GamePlay.CTA_icon.setPosition(0, 160, 0);
        this.GamePlay.CTA_logo.setScale(0.35, 0.35, 0.35);
        this.GamePlay.CTA_logo.setPosition(0, -10, 0);
        this.GamePlay.CTA_btn.setPosition(0, -160, 0);
        this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
        console.log(4);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
            //     // mobile mode applovin

            //     return;
            // }

            // Iphone 6 / 6 plus / 7 / 7 Plus

            this.GamePlay.video.node.setScale(0.35, 0.35, 0.35);
            this.UIController.Btn_Left.setPosition(-100, -50, 0);
            this.UIController.Btn_Left.setScale(1, 1, 1);
            this.UIController.Btn_Right.setPosition(100, -50, 0);
            this.UIController.Btn_Right.setScale(1, 1, 1);
            
            this.GamePlay.CTA_icon.active = true;
            this.GamePlay.CTA_icon.setScale(0.6, 0.6, 0.6);
            this.GamePlay.CTA_icon.setPosition(0, 160, 0);
            this.GamePlay.CTA_logo.setScale(0.35, 0.35, 0.35);
            this.GamePlay.CTA_logo.setPosition(0, -10, 0);
            this.GamePlay.CTA_btn.setPosition(0, -160, 0);
            this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);

            console.log(5);


        } else {
            // Ipad
            this.GamePlay.video.node.setScale(0.35, 0.35, 0.35);
            this.UIController.Btn_Left.setPosition(-100, -50, 0);
            this.UIController.Btn_Left.setScale(1, 1, 1);
            this.UIController.Btn_Right.setPosition(100, -50, 0);
            this.UIController.Btn_Right.setScale(1, 1, 1);
            
            this.GamePlay.CTA_icon.active = true;
            this.GamePlay.CTA_icon.setScale(0.5, 0.5, 0.5);
            this.GamePlay.CTA_icon.setPosition(0, 140, 0);
            this.GamePlay.CTA_logo.setScale(0.3, 0.3, 0.3);
            this.GamePlay.CTA_logo.setPosition(0, -10, 0);
            this.GamePlay.CTA_btn.setPosition(0, -140, 0);
            this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
            console.log(6);
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

