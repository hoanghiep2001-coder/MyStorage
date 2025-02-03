
import { _decorator, Component, math, Node, Tween, tween, view, Animation, screen, log, Widget, Camera, Vec3 } from 'cc';
import { GamePlay } from './GamePlay';
import { Constants } from '../Data/constants';
import { UIController } from './UIController';
const { ccclass, property } = _decorator;


@ccclass('Responsive')
export class Responsive extends Component {

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


        this.UIController.textTap.setScale(0.4, 0.4, 0.4);
        this.UIController.textTap.setPosition(0, -200, 0);

        this.UIController.textChoose.setScale(0.28, 0.28, 0.28);
        this.UIController.textChoose.getComponent(Widget).top = -20;
        let textChoose_text = this.UIController.textChoose.getChildByName("text_Choose");
        textChoose_text.setPosition(0, -150, 0);

        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    

        // if (screen.windowSize.height / screen.windowSize.width > 0.55) {
        //     // Ip 6 / 6Plus / 7 / 7 Plus

        //     console.log(1);
        // } else {

        //     // IpX

        //     console.log(2);
        // }

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;


        // horizontal google
        // if(cc.screen.windowSize.width / cc.screen.windowSize.height <= 1.2 && cc.screen.windowSize.width / cc.screen.windowSize.height >= 1.2) {

        //     return;
        // }

        this.UIController.textTap.setScale(0.4, 0.4, 0.4);
        this.UIController.textTap.setPosition(0, -200, 0);

        this.UIController.textChoose.setScale(0.28, 0.28, 0.28);
        this.UIController.textChoose.getComponent(Widget).top = -20;
        let textChoose_text = this.UIController.textChoose.getChildByName("text_Choose");
        textChoose_text.setPosition(0, -150, 0);

        console.log(3);

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

        this.UIController.textTap.setScale(0.4, 0.4, 0.4);
        this.UIController.textTap.setPosition(0, -250, 0);

        this.UIController.textChoose.setScale(0.28, 0.28, 0.28);
        this.UIController.textChoose.getComponent(Widget).top = -45;
        let textChoose_text = this.UIController.textChoose.getChildByName("text_Choose");
        textChoose_text.setPosition(0, -150, 0);

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

            this.UIController.textTap.setScale(0.4, 0.4, 0.4);
            this.UIController.textTap.setPosition(0, -220, 0);
    
            this.UIController.textChoose.setScale(0.28, 0.28, 0.28);
            this.UIController.textChoose.getComponent(Widget).top = -40;
            let textChoose_text = this.UIController.textChoose.getChildByName("text_Choose");
            textChoose_text.setPosition(0, -150, 0);

            console.log(5);
        } else {
            // Ipad

            this.UIController.textTap.setScale(0.4, 0.4, 0.4);
            this.UIController.textTap.setPosition(0, -200, 0);
    
            this.UIController.textChoose.setScale(0.28, 0.28, 0.28);
            this.UIController.textChoose.getComponent(Widget).top = -20;
            let textChoose_text = this.UIController.textChoose.getChildByName("text_Choose");
            textChoose_text.setPosition(0, -150, 0);

            console.log(6);
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

