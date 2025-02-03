import NodeContainer from "../Controller/NodeContanier";
import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    @property(NodeContainer)
    NodeContainer: NodeContainer = null;


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
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (width > height) {
            Constants.isRotate = true;
            this.setHorizontal();
        } else {
            Constants.isRotate = false;
            this.setVertical();
        }
    }


    private setHorizontal(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (height / width < 0.65) {
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
        this.NodeContainer.BG_1.active = false;
        this.NodeContainer.BG_2.active = true;

        this.NodeContainer.Card_1.scale = 0.45;
        this.NodeContainer.Card_2.scale = 0.45;
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        this.NodeContainer.BG_1.active = false;
        this.NodeContainer.BG_2.active = true;

        this.NodeContainer.Card_1.scale = 0.45;
        this.NodeContainer.Card_2.scale = 0.45;
    }


    private setVertical(): void {
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;
        if (width / height < 0.5) {
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
        
        this.NodeContainer.BG_1.active = true;
        this.NodeContainer.BG_2.active = false;

        this.NodeContainer.Card_1.scale = 0.4;
        this.NodeContainer.Card_2.scale = 0.4;
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;

        this.NodeContainer.BG_1.active = true;
        this.NodeContainer.BG_2.active = false;

        this.NodeContainer.Card_1.scale = 0.4;
        this.NodeContainer.Card_2.scale = 0.4;
        if (height / width > 1.5) {
            // if (width / height >= 0.6 && width / height < 0.62) {
            //     // mobile mode applovin

            //     return;
            // }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   

        } else {

        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
