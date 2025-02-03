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
        this.device = this.HORIZONTAL_IPX;

        this.NodesController.Camera.fov = 50;
        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }    
        this.NodesController.hint_1.getComponent(Animation).stop();
        this.NodesController.hint_1.active = false;
        this.NodesController.hint_1.setScale(new Vec3(0.9, 0.9, 0.9));
        this.NodesController.hint_1.setPosition(new Vec3(-10, 0, 0));
        if(!Constants.isDoneMergeStep1) {
            this.NodesController.hint_1.active = true;
            this.NodesController.hint_1.getComponent(Animation).play();
        }

        this.NodesController.hint_2.getComponent(Animation).stop();
        this.NodesController.hint_2.active = false;
        this.NodesController.hint_2.setScale(new Vec3(0.85, 0.85, 0.85));
        this.NodesController.hint_2.setPosition(new Vec3(115, 0, 0));
        if(Constants.isDoneMergeStep1 && !Constants.isDoneMergeStep2 && Constants.isFailStep1) {
            this.NodesController.hint_2.active = true;
            this.NodesController.hint_2.getComponent(Animation).play();
        }

        this.NodesController.hint_3.getComponent(Animation).stop();
        this.NodesController.hint_3.active = false;
        this.NodesController.hint_3.setScale(new Vec3(0.95, 0.95, 0.95));
        this.NodesController.hint_3.setPosition(new Vec3(0, 0, 0));
        if(Constants.isDoneMergeStep2 && Constants.isFailStep2) {
            this.NodesController.hint_3.active = true;
            this.NodesController.hint_3.getComponent(Animation).play();
        }
        // if (screen.windowSize.height / screen.windowSize.width > 0.55) {
        //     // Ip 6 / 6Plus / 7 / 7 Plus

        //     console.log(1);
        // } else {
        //     // IpX

        //     console.log(2);
        // }
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.NodesController.Camera.fov = 60;

        this.NodesController.hint_1.getComponent(Animation).stop();
        this.NodesController.hint_1.active = false;
        this.NodesController.hint_1.setScale(new Vec3(0.9, 0.9, 0.9));
        this.NodesController.hint_1.setPosition(new Vec3(0, 0, 0));
        if(!Constants.isDoneMergeStep1) {
            this.NodesController.hint_1.active = true;
            this.NodesController.hint_1.getComponent(Animation).play();
        }
        
        this.NodesController.hint_2.getComponent(Animation).stop();
        this.NodesController.hint_2.active = false;
        this.NodesController.hint_2.setScale(new Vec3(0.7, 0.7, 0.7));
        this.NodesController.hint_2.setPosition(new Vec3(100, 0, 0));
        if(Constants.isDoneMergeStep1 && !Constants.isDoneMergeStep2 && Constants.isFailStep1) {
            this.NodesController.hint_2.active = true;
            this.NodesController.hint_2.getComponent(Animation).play();
        }

        this.NodesController.hint_3.getComponent(Animation).stop();
        this.NodesController.hint_3.active = false;
        this.NodesController.hint_3.setScale(new Vec3(0.8, 0.8, 0.8));
        this.NodesController.hint_3.setPosition(new Vec3(0, 0, 0));
        if(Constants.isDoneMergeStep2 && Constants.isFailStep2) {
            this.NodesController.hint_3.active = true;
            this.NodesController.hint_3.getComponent(Animation).play();
        }

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

        this.NodesController.hint_1.getComponent(Animation).stop();
        this.NodesController.hint_1.active = false;
        this.NodesController.hint_1.setScale(new Vec3(1, 1, 1));
        this.NodesController.hint_1.setPosition(new Vec3(-10, 0, 0));
        if(!Constants.isDoneMergeStep1) {
            this.NodesController.hint_1.active = true;
            this.NodesController.hint_1.getComponent(Animation).play();
        }

        this.NodesController.hint_2.getComponent(Animation).stop();
        this.NodesController.hint_2.active = false;
        this.NodesController.hint_2.setScale(new Vec3(0.85, 0.85, 0.85));
        this.NodesController.hint_2.setPosition(new Vec3(135, 0, 0));
        if(Constants.isDoneMergeStep1 && !Constants.isDoneMergeStep2 && Constants.isFailStep1) {
            this.NodesController.hint_2.active = true;
            this.NodesController.hint_2.getComponent(Animation).play();
        }

        this.NodesController.hint_3.getComponent(Animation).stop();
        this.NodesController.hint_3.active = false;
        this.NodesController.hint_3.setScale(new Vec3(1, 1, 1));
        this.NodesController.hint_3.setPosition(new Vec3(0, 0, 0));
        if(Constants.isDoneMergeStep2 && Constants.isFailStep2) {
            this.NodesController.hint_3.active = true;
            this.NodesController.hint_3.getComponent(Animation).play();
        }
        console.log(4);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.NodesController.Camera.fov = 60;

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
            //     // mobile mode applovin

            //     return;
            // }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.NodesController.hint_1.getComponent(Animation).stop();
            this.NodesController.hint_1.active = false;
            this.NodesController.hint_1.setScale(new Vec3(0.9, 0.9, 0.9));
            this.NodesController.hint_1.setPosition(new Vec3(0, 0, 0));
            if(!Constants.isDoneMergeStep1) {
                this.NodesController.hint_1.active = true;
                this.NodesController.hint_1.getComponent(Animation).play();
            }
            
            this.NodesController.hint_2.getComponent(Animation).stop();
            this.NodesController.hint_2.active = false;
            this.NodesController.hint_2.setScale(new Vec3(0.85, 0.85, 0.85));
            this.NodesController.hint_2.setPosition(new Vec3(118, 0, 0));
            if(Constants.isDoneMergeStep1 && !Constants.isDoneMergeStep2 && Constants.isFailStep1) {
                this.NodesController.hint_2.active = true;
                this.NodesController.hint_2.getComponent(Animation).play();
            }

            this.NodesController.hint_3.getComponent(Animation).stop();
            this.NodesController.hint_3.active = false;
            this.NodesController.hint_3.setScale(new Vec3(0.9, 0.9, 0.9));
            this.NodesController.hint_3.setPosition(new Vec3(0, 0, 0));
            if(Constants.isDoneMergeStep2 && Constants.isFailStep2) {
                this.NodesController.hint_3.active = true;
                this.NodesController.hint_3.getComponent(Animation).play();
            }
            console.log(5);
        } else {
            // Ipad
            this.NodesController.hint_1.getComponent(Animation).stop();
            this.NodesController.hint_1.active = false;
            this.NodesController.hint_1.setScale(new Vec3(0.9, 0.9, 0.9));
            this.NodesController.hint_1.setPosition(new Vec3(0, 0, 0));
            if(!Constants.isDoneMergeStep1) {
                this.NodesController.hint_1.active = true;
                this.NodesController.hint_1.getComponent(Animation).play();
            }
            
            this.NodesController.hint_2.getComponent(Animation).stop();
            this.NodesController.hint_2.active = false;
            this.NodesController.hint_2.setScale(new Vec3(0.7, 0.7, 0.7));
            this.NodesController.hint_2.setPosition(new Vec3(100, 0, 0));
            if(Constants.isDoneMergeStep1 && !Constants.isDoneMergeStep2 && Constants.isFailStep1) {
                this.NodesController.hint_2.active = true;
                this.NodesController.hint_2.getComponent(Animation).play();
            }

            this.NodesController.hint_3.getComponent(Animation).stop();
            this.NodesController.hint_3.active = false;
            this.NodesController.hint_3.setScale(new Vec3(0.8, 0.8, 0.8));
            this.NodesController.hint_3.setPosition(new Vec3(0, 0, 0));
            if(Constants.isDoneMergeStep2 && Constants.isFailStep2) {
                this.NodesController.hint_3.active = true;
                this.NodesController.hint_3.getComponent(Animation).play();
            }
            console.log(6);
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

