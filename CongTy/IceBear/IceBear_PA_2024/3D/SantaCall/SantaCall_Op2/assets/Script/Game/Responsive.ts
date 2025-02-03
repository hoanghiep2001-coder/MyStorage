
import { _decorator, Component, math, Node, Tween, tween, view, Animation, screen, log, Widget } from 'cc';
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


    @property(Node)
    layer: Node = null;


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


        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    

        this.layer.active = false;
        if(Constants.isFirstClick) {
            this.layer.active = true;
        }
        

        this.GamePlay.btn_accept.setPosition(45, -45, 0);
        this.GamePlay.btn_accept.setScale(0.42, 0.42, 0.42);
        this.GamePlay.btn_decline.setPosition(-45, -45, 0);
        this.GamePlay.btn_decline.setScale(0.42, 0.42, 0.42);


        this.UIController.background.setScale(0.3, 0.3, 0.3);
        this.UIController.Effect.setScale(0.3, 0.3, 0.3);
        this.UIController.hand.active = false;

        this.UIController.avt_name.setPosition(0, -15, 0);
        this.UIController.avt_name.setScale(0.22, 0.22, 0.22);
        this.UIController.avatar.setPosition(0, 30, 0);
        this.UIController.avatar.setScale(0.17, 0.17, 0.17);

        this.UIController.time.node.setScale(0.18, 0.18, 0.18);
        this.UIController.time.getComponent(Widget).left = 5;
        this.UIController.time.getComponent(Widget).top = 5;

        this.UIController.icons.setScale(0.22, 0.22, 0.22);
        this.UIController.icons.getComponent(Widget).right = 5;
        this.UIController.icons.getComponent(Widget).top = 8;


        if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            this.GamePlay.video.node.setScale(0.45, 0.45, 0.45);
            
            this.GamePlay.btn_accept.setPosition(45, -52, 0);
            this.GamePlay.btn_decline.setPosition(-45, -52, 0);    
            
            this.GamePlay.CTA_icon.setScale(0.17, 0.17, 0.17);
            this.GamePlay.CTA_icon.setPosition(0, 35, 0);
            this.GamePlay.CTA_btn.setScale(0.2, 0.2, 0.2);
            this.GamePlay.CTA_btn.setPosition(0, -45, 0);

            console.log(1);
        } else {
            // IpX
            this.GamePlay.video.node.setScale(0.4, 0.4, 0.4);

            this.GamePlay.CTA_icon.setScale(0.15, 0.15, 0.15);
            this.GamePlay.CTA_icon.setPosition(0, 20, 0);
            this.GamePlay.CTA_btn.setScale(0.15, 0.15, 0.15);
            this.GamePlay.CTA_btn.setPosition(0, -40, 0);

            console.log(2);
        }

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;


        this.layer.active = false;
        if(Constants.isFirstClick) {
            this.layer.active = true;
        }

        this.GamePlay.video.node.setScale(0.6, 0.6, 0.6);
        this.UIController.hand.active = false;

        this.GamePlay.btn_accept.setPosition(45, -75, 0);
        this.GamePlay.btn_accept.setScale(0.6, 0.6, 0.6);
        this.GamePlay.btn_decline.setPosition(-45, -75, 0);
        this.GamePlay.btn_decline.setScale(0.6, 0.6, 0.6);


        this.UIController.background.setScale(0.3, 0.3, 0.3);
        this.UIController.Effect.setScale(0.3, 0.3, 0.3);

        this.UIController.avt_name.setPosition(0, -5, 0);
        this.UIController.avt_name.setScale(0.3, 0.3, 0.3);
        this.UIController.avatar.setPosition(0, 60, 0);
        this.UIController.avatar.setScale(0.25, 0.25, 0.25);

        this.UIController.time.node.setScale(0.18, 0.18, 0.18);
        this.UIController.time.getComponent(Widget).left = 5;
        this.UIController.time.getComponent(Widget).top = 5;

        this.UIController.icons.setScale(0.22, 0.22, 0.22);
        this.UIController.icons.getComponent(Widget).right = 5;
        this.UIController.icons.getComponent(Widget).top = 8;

        this.GamePlay.CTA_icon.setScale(0.17, 0.17, 0.17);
        this.GamePlay.CTA_icon.setPosition(0, 35, 0);
        this.GamePlay.CTA_btn.setScale(0.2, 0.2, 0.2);
        this.GamePlay.CTA_btn.setPosition(0, -45, 0);

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

        this.layer.active = false;

        this.GamePlay.video.node.setScale(1.1, 1.1, 1.1);
        this.GamePlay.btn_accept.setPosition(80, -210, 0);
        this.GamePlay.btn_accept.setScale(1, 1, 1);
        this.GamePlay.btn_decline.setPosition(-80, -210, 0);
        this.GamePlay.btn_decline.setScale(1, 1, 1);


        this.UIController.background.setScale(1, 1, 1);
        this.UIController.Effect.setScale(1, 1, 1);
        this.UIController.hand.active = true;
        this.UIController.avt_name.setPosition(0, -70, 0);
        this.UIController.avt_name.setScale(0.6, 0.6, 0.6);
        this.UIController.avatar.setPosition(0, 65, 0);
        this.UIController.avatar.setScale(0.5, 0.5, 0.5);

        this.UIController.time.node.setScale(0.4, 0.4, 0.4);
        this.UIController.time.getComponent(Widget).left = 12;
        this.UIController.time.getComponent(Widget).top = 10;

        this.UIController.icons.setScale(0.45, 0.45, 0.45);
        this.UIController.icons.getComponent(Widget).right = 5;
        this.UIController.icons.getComponent(Widget).top = 12;

        this.GamePlay.CTA_icon.setScale(0.35, 0.35, 0.35);
        this.GamePlay.CTA_icon.setPosition(0, 80, 0);
        this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
        this.GamePlay.CTA_btn.setPosition(0, -125, 0);

        console.log(4);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        this.layer.active = false;

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
            //     // mobile mode applovin

            //     return;
            // }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            
            this.GamePlay.video.node.setScale(1.35, 1.35, 1.35);
            // this.GamePlay.video.node.setScale(0.9, 0.9, 0.9);
            this.UIController.hand.active = false;
            this.GamePlay.btn_accept.setPosition(80, -210, 0);
            this.GamePlay.btn_accept.setScale(1, 1, 1);
            this.GamePlay.btn_decline.setPosition(-80, -210, 0);
            this.GamePlay.btn_decline.setScale(1, 1, 1);
    
    
            this.UIController.background.setScale(1, 1, 1);
            this.UIController.Effect.setScale(1, 1, 1);
    
            this.UIController.avt_name.setPosition(0, -70, 0);
            this.UIController.avt_name.setScale(0.6, 0.6, 0.6);
            this.UIController.avatar.setPosition(0, 65, 0);
            this.UIController.avatar.setScale(0.5, 0.5, 0.5);
    
            this.UIController.time.node.setScale(0.4, 0.4, 0.4);
            this.UIController.time.getComponent(Widget).left = 10;
            this.UIController.time.getComponent(Widget).top = 10;
    
            this.UIController.icons.setScale(0.5, 0.5, 0.5);
            this.UIController.icons.getComponent(Widget).right = 5;
            this.UIController.icons.getComponent(Widget).top = 15;


            this.GamePlay.CTA_icon.setScale(0.35, 0.35, 0.35);
            this.GamePlay.CTA_icon.setPosition(0, 80, 0);
            this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
            this.GamePlay.CTA_btn.setPosition(0, -125, 0);

            console.log(5);
        } else {
            // Ipad

            this.GamePlay.video.node.setScale(1.13, 1.13, 1.13);
            // this.GamePlay.video.node.setScale(0.8, 0.8, 0.8);
            this.UIController.hand.active = false;

            this.GamePlay.btn_accept.setPosition(80, -160, 0);
            this.GamePlay.btn_accept.setScale(0.85, 0.85, 0.85);
            this.GamePlay.btn_decline.setPosition(-80, -160, 0);
            this.GamePlay.btn_decline.setScale(0.85, 0.85, 0.85);
    
    
            this.UIController.background.setScale(1, 1, 1);
            this.UIController.Effect.setScale(1, 1, 1);
    
            this.UIController.avt_name.setPosition(0, -70, 0);
            this.UIController.avt_name.setScale(0.6, 0.6, 0.6);
            this.UIController.avatar.setPosition(0, 65, 0);
            this.UIController.avatar.setScale(0.5, 0.5, 0.5);
    
            this.UIController.time.node.setScale(0.4, 0.4, 0.4);
            this.UIController.time.getComponent(Widget).left = 10;
            this.UIController.time.getComponent(Widget).top = 10;
    
            this.UIController.icons.setScale(0.5, 0.5, 0.5);
            this.UIController.icons.getComponent(Widget).right = 5;
            this.UIController.icons.getComponent(Widget).top = 15;

            this.GamePlay.CTA_icon.setScale(0.35, 0.35, 0.35);
            this.GamePlay.CTA_icon.setPosition(0, 80, 0);
            this.GamePlay.CTA_btn.setScale(0.45, 0.45, 0.45);
            this.GamePlay.CTA_btn.setPosition(0, -125, 0);

            console.log(6);
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

