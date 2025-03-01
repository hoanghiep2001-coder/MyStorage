
import { UI_Controller } from "../Controller/UI_Controller";
// import { VideoController } from "../Controller/VideoController";
import { Constants } from "../Data/Constant";

const { ccclass, property } = _decorator;
import { _decorator, Component, Vec3, screen, Node } from 'cc';

@ccclass
export default class Responsive extends Component {

    // @property(VideoController)
    // VideoController: VideoController = null;
    @property(UI_Controller)
    UI_Controller: UI_Controller = null;

    @property(Node)
    Skiing_container: Node = null;
    @property(Node)
    Skiing_BtnLeft: Node = null;
    @property(Node)
    Skiing_BtnUp: Node = null;

    // state
    device: string = "";
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
        if(screen.windowSize.height / screen.windowSize.width < 0.65) {
            // Iphone 6 / 6 plus / 7 / 7 Plus / X
            this.setHorizontalForIpX(); 
        } else {
            this.setHorizontalForTablet();
        }
    }

    private setHorizontalForIpX(): void {
        if(this.HORIZONTAL_IPX === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_IPX;

        // this.btn_Next.y = -125;
        // this.btn_Next.scale = 0.5;

        // this.tutorial.scale = 1;
        // this.tutorial.y = 0;
        // if(screen.windowSize.height / screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }

        // this.VideoController.Video.node.setScale(0.5, 0.5, 0.5);
        
        // this.UI_Controller.icon.active = true;
        // this.UI_Controller.logo.active = true;

        this.Skiing_container.setScale(0.5,0.5,1);
        this.Skiing_container.setPosition(0,0,0);

        if(screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            // this.UI_Controller.icon.setPosition(new Vec3(210, 0, 0))
            // this.UI_Controller.icon.setScale(new Vec3(0.35 , 0.35, 0.35))

            // this.UI_Controller.logo.setPosition(new Vec3(-215, 0, 0))
            // this.UI_Controller.logo.setScale(new Vec3(0.22 , 0.22, 0.22))
            this.Skiing_BtnLeft.setPosition(-450, -247, 0);
            this.Skiing_BtnUp.setPosition(450, -247, 0);
        } else {
            // IpX
            // this.UI_Controller.icon.setPosition(new Vec3(210, 0, 0))
            // this.UI_Controller.icon.setScale(new Vec3(0.35 , 0.35, 0.35))

            // this.UI_Controller.logo.setPosition(new Vec3(-215, 0, 0))
            // this.UI_Controller.logo.setScale(new Vec3(0.22 , 0.22, 0.22))
            this.Skiing_BtnLeft.setPosition(-600, -247, 0);
            this.Skiing_BtnUp.setPosition(600, -247, 0);
        }
        
    }

    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.Skiing_BtnLeft.setPosition(-400, -270, 0);
        this.Skiing_BtnUp.setPosition(400, -270, 0);

        this.Skiing_container.setScale(0.5,0.5,1);
        this.Skiing_container.setPosition(0,0,0);
    
        // this.btn_Next.y = -125;
        // this.btn_Next.scale = 0.5;
        // this.VideoController.Video.node.setScale(0.4, 0.4, 0.5);

        // this.UI_Controller.icon.active = true;
        // this.UI_Controller.logo.active = true;

        // this.UI_Controller.icon.setPosition(new Vec3(170, 0, 0))
        // this.UI_Controller.icon.setScale(new Vec3(0.3 , 0.3, 0.3))

        // this.UI_Controller.logo.setPosition(new Vec3(-170, 0, 0))
        // this.UI_Controller.logo.setScale(new Vec3(0.2 , 0.2, 0.2))

        // this.tutorial.scale = 1;
        // this.tutorial.y = 0;
        // horizontal google
        // if(screen.windowSize.width / screen.windowSize.height <= 1.2 && screen.windowSize.width / screen.windowSize.height >= 1.2) {

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
        if(this.VERTICAL_IPX === this.device) {
            return;
        }

        this.device = this.VERTICAL_IPX;

        // this.VideoController.Video.node.setScale(1.5, 1.5, 0.5);
        // this.UI_Controller.icon.active = false;
        // this.UI_Controller.logo.active = false;


        this.Skiing_container.setScale(0.8,0.8,1);
        this.Skiing_container.setPosition(100,-200,0);
        this.Skiing_BtnLeft.setPosition(-330, -300, 0);
        this.Skiing_BtnUp.setPosition(80, -300, 0);

        // this.btn_Next.y = -250;
        // this.btn_Next.scale = 0.6;

        // this.tutorial.scale = 1.3;
        // this.tutorial.y = -220;

    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }   

        this.device = this.VERTICAL_MOBILE;           

        if(screen.windowSize.width / screen.windowSize.height < 0.7) {

            if (screen.windowSize.width / screen.windowSize.height >= 0.6 && screen.windowSize.width / screen.windowSize.height < 0.62) {
                // mobile mode applovin
                this.Skiing_container.setScale(0.7,0.7,1);
                this.Skiing_container.setPosition(60,-140,0);
                this.Skiing_BtnLeft.setPosition(-350, -280, 0);
                this.Skiing_BtnUp.setPosition(180, -280, 0);
                return;
            }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.Skiing_container.setScale(0.7,0.7,1);
            this.Skiing_container.setPosition(60,-140,0);
            this.Skiing_BtnLeft.setPosition(-350, -300, 0);
            this.Skiing_BtnUp.setPosition(180, -300, 0);

            // this.VideoController.Video.node.setScale(1, 1, 0.5);
            // this.UI_Controller.icon.active = false;
            // this.UI_Controller.logo.active = false;
        } else {    

            // if(screen.windowSize.width / screen.windowSize.height < 8.5 
            // && screen.windowSize.width / screen.windowSize.height > 8.3) {

            //     return;
            // }

            // Ipad
            // this.Skiing_BtnLeft.setPosition(-450, -247, 0);
            // this.Skiing_BtnUp.setPosition(450, -247, 0);
    
            // this.Skiing_container.setScale(0.5,0.5,1);
            // this.Skiing_container.setPosition(0,0,0);

            this.Skiing_container.setScale(0.7,0.7,1);
            this.Skiing_container.setPosition(60,-30,0);
            this.Skiing_BtnLeft.setPosition(-350, -320, 0);
            this.Skiing_BtnUp.setPosition(180, -320, 0);
            // this.btn_Next.y = -200;
            // this.btn_Next.scale = 0.6;

            // this.tutorial.scale = 1.1;
            // this.tutorial.y = -200;
            // this.VideoController.Video.node.setScale(0.9, 0.9, 0.5);
            // this.UI_Controller.icon.active = false;
            // this.UI_Controller.logo.active = false;
 
        }
        
    }

    protected update(dt: number): void {
        this.handleRotate();
    }

}
