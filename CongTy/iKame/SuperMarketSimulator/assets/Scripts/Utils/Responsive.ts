import { Camera, Component, Node, Quat, Vec3, Widget, _decorator, log, screen, view } from "cc";
import { UIGameController } from "../Controller/UIGameController";
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

        this.device = this.HORIZONTAL_IPX;

        // IP X
        if(screen.windowSize.height / screen.windowSize.width < 0.47) {
            this.UIGameController.TouchArea_GiveTheChange.setPosition(330, 130, 0);
            this.UIGameController.TouchArea_GiveTheChange.setScale(1.75, 1.75, 1.75);

            this.UIGameController.TouchArea_Banking.setPosition(330, 130, 0);
            this.UIGameController.TouchArea_Banking.setScale(1.75, 1.75, 1.75);
        }
        
        // IP 6 / 7 / 8
        else {
            this.UIGameController.TouchArea_GiveTheChange.setPosition(250, 63, 0);
            this.UIGameController.TouchArea_GiveTheChange.setScale(1.4, 1.4, 1.4);

            this.UIGameController.TouchArea_Banking.setPosition(250, 63, 0);
            this.UIGameController.TouchArea_Banking.setScale(1.4, 1.4, 1.4);
        }
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.UIGameController.TouchArea_GiveTheChange.setPosition(205, 2, 0);
        this.UIGameController.TouchArea_GiveTheChange.setScale(1.1, 1.1, 1.1);

        this.UIGameController.TouchArea_Banking.setPosition(205, 2, 0);
        this.UIGameController.TouchArea_Banking.setScale(1.1, 1.1, 1.1);

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
        
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // Iphone 6 / 6 plus / 7 / 7 Plus
            
 

        } else {
            // Ipad
            
        }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
