import { Camera, Component, Node, Quat, Vec3, Widget, _decorator, log, screen, view } from "cc";
import { UIGameController } from "../Controller/UIGameController";
import { GameInfo } from "../Const/GameInfo";
const { ccclass, property } = _decorator;



@ccclass
export default class Responsive extends Component {

    @property(UIGameController)
    UIGameController: UIGameController = null;


    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";


    protected start(): void {
        this.handleRotate();
    }


    private handleRotate(): void {
        if (screen.windowSize.width > screen.windowSize.height) {
            GameInfo.isRotate = true;
            this.isRotate = true;
            this.setHorizontal();
        } else {
            GameInfo.isRotate = false;
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

        this.device = this.HORIZONTAL_IPX;

        // IP X
        if (screen.windowSize.height / screen.windowSize.width < 0.47) {
            this.UIGameController.Tut_1.setPosition(0, -30, 0);

            GameInfo.queueLabelCalPosX = 16;
            GameInfo.queueLabelCalPosY = 158;

            this.UIGameController.QueueLabel.node.scale = new Vec3(0.42, 0.42, 0.42);
        }

        // IP 6 / 7 / 8
        else {
            this.UIGameController.Tut_1.setPosition(0, -30, 0);

            GameInfo.queueLabelCalPosX = 16;
            GameInfo.queueLabelCalPosY = 158;

            this.UIGameController.QueueLabel.node.scale = new Vec3(0.42, 0.42, 0.42);
        }
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        GameInfo.queueLabelCalPosX = 16;
        GameInfo.queueLabelCalPosY = 158;

        this.UIGameController.Tut_1.setPosition(0, -30, 0);

        this.UIGameController.QueueLabel.node.scale = new Vec3(0.42, 0.42, 0.42);
        // if (screen.windowSize.width / screen.windowSize.height < 0.7) {

        //     // Iphone 6 / 6 plus / 7 / 7 Plus

        // } else {    

        //     // Ipad
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

        log("vt ipx");
        this.device = this.VERTICAL_IPX;

        this.UIGameController.Tut_1.setPosition(0, 30, 0);

        GameInfo.queueLabelCalPosX = 24;
        GameInfo.queueLabelCalPosY = 222;

        this.UIGameController.QueueLabel.node.scale = new Vec3(0.5, 0.5, 0.5)
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        let width = screen.windowSize.width;
        let height = screen.windowSize.height;

        if (height / width > 1.5) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                this.UIGameController.Tut_1.setPosition(0, -15, 0);

                GameInfo.queueLabelCalPosX = 19;
                GameInfo.queueLabelCalPosY = 175;

                this.UIGameController.QueueLabel.node.scale = new Vec3(0.48, 0.48, 0.48)

                return;
            }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.UIGameController.Tut_1.setPosition(0, 0, 0);

            GameInfo.queueLabelCalPosX = 19;
            GameInfo.queueLabelCalPosY = 183;

            this.UIGameController.QueueLabel.node.scale = new Vec3(0.5, 0.5, 0.5)

        } else {
            this.UIGameController.Tut_1.setPosition(0, -30, 0);

            GameInfo.queueLabelCalPosX = 18;
            GameInfo.queueLabelCalPosY = 158;

            this.UIGameController.QueueLabel.node.scale = new Vec3(0.48, 0.48, 0.48)
        }

        // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus

        //     this.UIGameController.Tut_1.setPosition(0,-10,0);

        // } else {
        //     // Ipad
        //     this.UIGameController.Tut_1.setPosition(0,-30,0);
        // }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
