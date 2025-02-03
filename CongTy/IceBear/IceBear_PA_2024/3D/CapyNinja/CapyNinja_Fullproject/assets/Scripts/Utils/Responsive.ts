import { Camera, Component, Node, Quat, Vec3, Widget, _decorator, log, screen, view } from "cc";
const { ccclass, property } = _decorator;



@ccclass
export default class Responsive extends Component {

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
            this.isRotate = true;
            this.setHorizontal();
        } else {
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

        log("hr ipx");
        this.device = this.HORIZONTAL_IPX;

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            log("hr ip 6");

            // Iphone 6 / 6 plus / 7 / 7 Plus

        } else {    

            log("hr ipad");

            // Ipad

        }

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
        
    }

    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // Iphone 6 / 6 plus / 7 / 7 Plus
            
            log("vt ip 6");

        } else {
            // Ipad
            
            log("vt ipad");
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
