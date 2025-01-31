import { _decorator, Component, Node, screen } from 'cc';
import { GameInfo } from '../../CONST/GameInfo';
const { ccclass, property } = _decorator;

@ccclass('PA_10_Responsive')
export class PA_10_Responsive extends Component {

    @property(Node)
    Tut: Node = null;
    @property(Node)
    CTA: Node = null;

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
            this.CTA.setScale(2.2, 2.2, 2.2);
            this.Tut.setPosition(0,0,0);
            this.Tut.setScale(1,1,1);
        }

        // IP 6 / 7 / 8
        else {
            this.CTA.setScale(2.2, 2.2, 2.2);
            this.Tut.setPosition(0,0,0);
            this.Tut.setScale(1,1,1);
        }
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.CTA.setScale(2.2, 2.2, 2.2);
        this.Tut.setPosition(0,0,0);
        this.Tut.setScale(1,1,1);
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

        this.device = this.VERTICAL_IPX;
        
        this.CTA.setScale(4.4, 4.4, 2.2);
        this.Tut.setPosition(0,0,0);
        this.Tut.setScale(2,2,1);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        let width = screen.windowSize.width;
        let height = screen.windowSize.height;

        if (height / width > 1.5) {
            // if (width / height >= 0.6 && width / height < 0.62) {
            //     // mobile mode applovin

            //     return;
            // }

            // Iphone 6 / 6 Plus / 7 / 7 Plus   
            this.CTA.setScale(4.4,4.4, 2.2);
            this.Tut.setPosition(0,0,0);
            this.Tut.setScale(2,2,1);
        } else {
            this.CTA.setScale(4.4,4.4, 2.2);
            this.Tut.setPosition(0,0,0);
            this.Tut.setScale(2,2,1);
        }

        // if (screen.windowSize.width / screen.windowSize.height < 0.7) {
        //     // Iphone 6 / 6 plus / 7 / 7 Plus

        // } else {
        //     // Ipad
        // }
    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
