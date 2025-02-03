import GamePlay from "../Controller/GamePlay";
import NodesContainer from "../Controller/NodesContainer";
import { Constants } from "../Data/constants";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    @property(NodesContainer)
    NodesContainer: NodesContainer = null;

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

    public handleRotate(): void {
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

        this.NodesContainer.main.scale = 0.55;
        this.NodesContainer.main.setPosition(0, -50);

        let logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        logoWidget.isAlignHorizontalCenter = false;
        logoWidget.isAlignLeft = true;
        logoWidget.isAlignTop = true;
        logoWidget.top = 20;
        logoWidget.left = 20;
        this.NodesContainer.logo.scale = 0.7;

        this.NodesContainer.text.scale = 0.6;
        this.NodesContainer.text.setPosition(0, -175);

        let btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        btnPlayWidget.isAlignTop = false;
        btnPlayWidget.isAlignLeft = false;
        btnPlayWidget.isAlignRight = true;
        btnPlayWidget.isAlignBottom = true;
        btnPlayWidget.right = 15;
        btnPlayWidget.bottom = 15;
        this.NodesContainer.btn_Play.scale = 0.6;

        if(cc.view.getFrameSize().height / cc.view.getFrameSize().width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            this.NodesContainer.BG.scale = 0.4;
        } else {
            // IpX
            this.NodesContainer.BG.scale = 0.5;
        }

    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.NodesContainer.BG.scale = 0.3;

        this.NodesContainer.main.scale = 0.45;
        this.NodesContainer.main.setPosition(0, -50);

        let logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        logoWidget.isAlignLeft = false;
        logoWidget.isAlignTop = false;
        logoWidget.isAlignHorizontalCenter = true;
        this.NodesContainer.logo.scale = 0.5;

        this.NodesContainer.text.scale = 0.5;
        this.NodesContainer.text.setPosition(0, -175);

        let btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        btnPlayWidget.isAlignTop = false;
        btnPlayWidget.isAlignLeft = false;
        btnPlayWidget.isAlignRight = true;
        btnPlayWidget.isAlignBottom = true;
        btnPlayWidget.right = 10;
        btnPlayWidget.bottom = 10;
        this.NodesContainer.btn_Play.scale = 0.4;
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

        this.NodesContainer.BG.scale = 0.27;

        this.NodesContainer.main.scale = 0.4;
        this.NodesContainer.main.setPosition(0, -50);

        let logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        logoWidget.isAlignLeft = false;
        logoWidget.isAlignTop = false;
        logoWidget.isAlignHorizontalCenter = true;
        this.NodesContainer.logo.scale = 0.5;

        this.NodesContainer.text.scale = 0.4;
        this.NodesContainer.text.setPosition(0, -175);

        let btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
        btnPlayWidget.isAlignTop = false;
        btnPlayWidget.isAlignLeft = false;
        btnPlayWidget.isAlignRight = true;
        btnPlayWidget.isAlignBottom = true;
        btnPlayWidget.right = 10;
        btnPlayWidget.bottom = 10;
        this.NodesContainer.btn_Play.scale = 0.4;

        // ----------------------
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
            this.NodesContainer.BG.scale = 0.2;

            this.NodesContainer.main.scale = 0.4;
            this.NodesContainer.main.setPosition(0, -50);

            let logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            logoWidget.isAlignLeft = false;
            logoWidget.isAlignTop = false;
            logoWidget.isAlignHorizontalCenter = true;
            this.NodesContainer.logo.scale = 0.5;

            this.NodesContainer.text.scale = 0.5;
            this.NodesContainer.text.setPosition(0, -175);

            let btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            btnPlayWidget.isAlignTop = false;
            btnPlayWidget.isAlignLeft = false;
            btnPlayWidget.isAlignRight = true;
            btnPlayWidget.isAlignBottom = true;
            btnPlayWidget.right = 10;
            btnPlayWidget.bottom = 10;
            this.NodesContainer.btn_Play.scale = 0.4;
        } else {
            this.NodesContainer.BG.scale = 0.2;

            this.NodesContainer.main.scale = 0.4;
            this.NodesContainer.main.setPosition(0, -60);

            let logoWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            logoWidget.isAlignLeft = false;
            logoWidget.isAlignTop = false;
            logoWidget.isAlignHorizontalCenter = true;
            this.NodesContainer.logo.scale = 0.5;

            this.NodesContainer.text.scale = 0.5;
            this.NodesContainer.text.setPosition(0, -175);

            let btnPlayWidget = this.NodesContainer.btn_Play.getComponent(cc.Widget);
            btnPlayWidget.isAlignTop = false;
            btnPlayWidget.isAlignLeft = false;
            btnPlayWidget.isAlignRight = true;
            btnPlayWidget.isAlignBottom = true;
            btnPlayWidget.right = 10;
            btnPlayWidget.bottom = 10;
            this.NodesContainer.btn_Play.scale = 0.4;
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
