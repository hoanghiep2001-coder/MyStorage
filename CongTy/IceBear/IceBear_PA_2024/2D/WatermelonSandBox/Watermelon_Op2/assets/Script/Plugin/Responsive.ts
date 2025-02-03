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

        this.NodeContainer.Bg.scale = 1.1;

        this.NodeContainer.Hand.setPosition(-350, 0);
        this.NodeContainer.Hand.angle = -90;

        this.NodeContainer.Step2_Frames[0].setPosition(250, 60);
        this.NodeContainer.Step2_Frames[1].setPosition(250, -40);
        this.NodeContainer.Step2_Frames[2].setPosition(250, -140);
        
        this.NodeContainer.Step2_Gun1.setPosition(250, 60);
        this.NodeContainer.Step2_Gun2.setPosition(250, -40);
        this.NodeContainer.Step2_kimtiem.setPosition(250, -140);

        this.NodeContainer.Step2_Frames[0].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[1].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[2].setScale(0.5, 0.5);
        
        this.NodeContainer.Step2_Gun1.setScale(-0.23, 0.23);
        this.NodeContainer.Step2_Gun2.setScale(0.15, 0.15);
        this.NodeContainer.Step2_kimtiem.setScale(0.5, 0.5);
    }

    
    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.NodeContainer.Bg.scale = 1;

        this.NodeContainer.Hand.setPosition(-350, 0);
        this.NodeContainer.Hand.angle = -90;

        this.NodeContainer.Step2_Frames[0].setPosition(250, 60);
        this.NodeContainer.Step2_Frames[1].setPosition(250, -40);
        this.NodeContainer.Step2_Frames[2].setPosition(250, -140);
        
        this.NodeContainer.Step2_Gun1.setPosition(250, 60);
        this.NodeContainer.Step2_Gun2.setPosition(250, -40);
        this.NodeContainer.Step2_kimtiem.setPosition(250, -140);

        this.NodeContainer.Step2_Frames[0].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[1].setScale(0.5, 0.5);
        this.NodeContainer.Step2_Frames[2].setScale(0.5, 0.5);
        
        this.NodeContainer.Step2_Gun1.setScale(-0.23, 0.23);
        this.NodeContainer.Step2_Gun2.setScale(0.15, 0.15);
        this.NodeContainer.Step2_kimtiem.setScale(0.5, 0.5);
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
        this.NodeContainer.Bg.scale = 0.8;

        this.NodeContainer.Hand.setPosition(0, 330);
        this.NodeContainer.Hand.angle = 180;

        this.NodeContainer.Step2_Frames[0].setPosition(-100, -280);
        this.NodeContainer.Step2_Frames[1].setPosition(0, -280);
        this.NodeContainer.Step2_Frames[2].setPosition(100, -280);
        
        this.NodeContainer.Step2_Gun1.setPosition(-100, -280);
        this.NodeContainer.Step2_Gun2.setPosition(100, -280);
        this.NodeContainer.Step2_kimtiem.setPosition(0, -280);

        this.NodeContainer.Step2_Frames[0].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[1].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[2].setScale(0.35, 0.35);
        
        this.NodeContainer.Step2_Gun1.setScale(-0.19, 0.19);
        this.NodeContainer.Step2_Gun2.setScale(0.12, 0.12);
        this.NodeContainer.Step2_kimtiem.setScale(0.45, 0.45);
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;
        let width = cc.view.getFrameSize().width;
        let height = cc.view.getFrameSize().height;

        this.NodeContainer.Bg.scale = 0.8;

        this.NodeContainer.Hand.setPosition(0, 330);
        this.NodeContainer.Hand.angle = 180;

        this.NodeContainer.Step2_Frames[0].setPosition(-100, -250);
        this.NodeContainer.Step2_Frames[1].setPosition(0, -250);
        this.NodeContainer.Step2_Frames[2].setPosition(100, -250);
        
        this.NodeContainer.Step2_Gun1.setPosition(-100, -250);
        this.NodeContainer.Step2_Gun2.setPosition(100, -250);
        this.NodeContainer.Step2_kimtiem.setPosition(0, -250);

        this.NodeContainer.Step2_Frames[0].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[1].setScale(0.35, 0.35);
        this.NodeContainer.Step2_Frames[2].setScale(0.35, 0.35);
        
        this.NodeContainer.Step2_Gun1.setScale(-0.19, 0.19);
        this.NodeContainer.Step2_Gun2.setScale(0.12, 0.12);
        this.NodeContainer.Step2_kimtiem.setScale(0.45, 0.45);

        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                return;
            }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   

        } else {

        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
