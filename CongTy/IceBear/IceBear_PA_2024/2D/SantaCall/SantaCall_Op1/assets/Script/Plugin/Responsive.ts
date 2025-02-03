import GamePlay from "../Controller/GamePlay";
import { TouchAreaController } from "../Controller/TouchAreaController";
import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {
    @property(TouchAreaController)
    TouchAreaController: TouchAreaController = null;
    @property(GamePlay)
    GamePlay: GamePlay = null;

    // state
    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";


    protected onLoad(): void {

    }


    protected start(): void {

    }


    private handleRotate(): void {
        if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {
        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width < 0.65) {
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

        this.GamePlay.UI_avatar.y = 100;
        this.GamePlay.UI_icons.getComponent(cc.Widget).right = 20;
        this.GamePlay.UI_icons.getComponent(cc.Widget).top = 15;
        this.GamePlay.UI_icons.scale = 0.6;
        this.GamePlay.UI_time.getComponent(cc.Widget).left = 20;
        this.GamePlay.UI_time.getComponent(cc.Widget).top = 10;
        this.GamePlay.UI_time.node.scale = 0.45;
        this.GamePlay.UI_name.node.y = -30;

        this.TouchAreaController.btn_accept.x = 75;
        this.TouchAreaController.btn_accept.y = -170;
        this.TouchAreaController.btn_accept.scale = 0.45;
        this.TouchAreaController.btn_decline.x = -75;
        this.TouchAreaController.btn_decline.y = -170;
        this.TouchAreaController.btn_decline.scale = 0.45;
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.GamePlay.UI_avatar.y = 100;
        this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
        this.GamePlay.UI_icons.getComponent(cc.Widget).top = 8;
        this.GamePlay.UI_icons.scale = 0.4;
        this.GamePlay.UI_time.getComponent(cc.Widget).left = 10;
        this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
        this.GamePlay.UI_time.node.scale = 0.3;
        this.GamePlay.UI_name.node.y = -30;

        this.TouchAreaController.btn_accept.x = 65;
        this.TouchAreaController.btn_accept.y = -170;
        this.TouchAreaController.btn_accept.scale = 0.45;
        this.TouchAreaController.btn_decline.x = -65;
        this.TouchAreaController.btn_decline.y = -170;
        this.TouchAreaController.btn_decline.scale = 0.45;
    }


    private setVertical(): void {
        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.5) {
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

        this.GamePlay.UI_avatar.y = 100;
        this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
        this.GamePlay.UI_icons.getComponent(cc.Widget).top = 8;
        this.GamePlay.UI_icons.scale = 0.32;
        this.GamePlay.UI_time.getComponent(cc.Widget).left = 12;
        this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
        this.GamePlay.UI_time.node.scale = 0.24;
        this.GamePlay.UI_name.node.y = -30;

        this.TouchAreaController.btn_accept.x = 65;
        this.TouchAreaController.btn_accept.y = -170;
        this.TouchAreaController.btn_accept.scale = 0.4;
        this.TouchAreaController.btn_decline.x = -65;
        this.TouchAreaController.btn_decline.y = -170;
        this.TouchAreaController.btn_decline.scale = 0.4;
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        if (cc.view.getFrameSize().height / cc.view.getFrameSize().width > 1.5) {
            // if (cc.view.getFrameSize().width / cc.view.getFrameSize().height >= 0.6 && cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.62) {
            //     // mobile mode applovin
            //     return;
            // }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.GamePlay.UI_avatar.y = 100;
            this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
            this.GamePlay.UI_icons.getComponent(cc.Widget).top = 10;
            this.GamePlay.UI_icons.scale = 0.5;
            this.GamePlay.UI_time.getComponent(cc.Widget).left = 10;
            this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
            this.GamePlay.UI_time.node.scale = 0.35;
            this.GamePlay.UI_name.node.y = -30;

            this.TouchAreaController.btn_accept.x = 75;
            this.TouchAreaController.btn_accept.y = -170;
            this.TouchAreaController.btn_accept.scale = 0.42;
            this.TouchAreaController.btn_decline.x = -75;
            this.TouchAreaController.btn_decline.y = -170;
            this.TouchAreaController.btn_decline.scale = 0.42;
        } else {

            // tablet
            this.GamePlay.UI_avatar.y = 100;
            this.GamePlay.UI_icons.getComponent(cc.Widget).right = 10;
            this.GamePlay.UI_icons.getComponent(cc.Widget).top = 8;
            this.GamePlay.UI_icons.scale = 0.4;
            this.GamePlay.UI_time.getComponent(cc.Widget).left = 10;
            this.GamePlay.UI_time.getComponent(cc.Widget).top = 5;
            this.GamePlay.UI_time.node.scale = 0.3;
            this.GamePlay.UI_name.node.y = -30;
    
            this.TouchAreaController.btn_accept.x = 65;
            this.TouchAreaController.btn_accept.y = -170;
            this.TouchAreaController.btn_accept.scale = 0.45;
            this.TouchAreaController.btn_decline.x = -65;
            this.TouchAreaController.btn_decline.y = -170;
            this.TouchAreaController.btn_decline.scale = 0.45;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
