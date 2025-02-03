import { _decorator, Component, math, Node, Tween, tween, view, Animation, screen, log, Widget, Vec3 } from 'cc';
import { Constants } from '../Data/Constant';
import { NodesController } from '../Controller/NodesController';
const { ccclass, property } = _decorator;


@ccclass('Responsive')
export class Responsive extends Component {

    @property(NodesController)
    NodesController: NodesController = null;

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

        let width = screen.windowSize.width;
        let height = screen.windowSize.height;

        this.device = this.HORIZONTAL_IPX;

        this.NodesController.Camera.fov = 50;

        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    

        if (width / height > 0.55) {
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

        this.NodesController.Camera.fov = 60;
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

        this.NodesController.Camera.fov = 60;
        console.log(4);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        let width = screen.windowSize.width;
        let height = screen.windowSize.height;

        this.device = this.VERTICAL_MOBILE;

        this.NodesController.Camera.fov = 60;

        if (width / height < 0.7) {
            if (width / height >= 0.6 && width / height < 0.62) {
                // mobile mode applovin
                return;
            }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            console.log(5);
        } else {
            // Ipad
            console.log(6);
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

