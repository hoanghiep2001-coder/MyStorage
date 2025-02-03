import GamePlay from "../Controller/GamePlay";
import { TouchAreaController } from "../Controller/TouchAreaController";
import { Constants } from "../Data/constants";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {
    @property(TouchAreaController)
    TouchAreaController: TouchAreaController = null;
    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(cc.Node)
    background: cc.Node = null;

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
        this.background.scale = 0.6;

        this.GamePlay.UI_Hrz.opacity = 255;
        this.GamePlay.UI_Vtc.opacity = 0;

        this.GamePlay.Character.scale = 1.3;
        this.GamePlay.Character.x = 152;
        this.GamePlay.Character.y = -140;

        this.TouchAreaController.HideMask.x = -55;
        this.TouchAreaController.HideMask.y = -95;
    }

    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;
        this.background.scale = 0.4;

        this.GamePlay.UI_Hrz.opacity = 255;
        this.GamePlay.UI_Vtc.opacity = 0;

        this.GamePlay.Character.scale = 1.3;
        this.GamePlay.Character.x = 152;
        this.GamePlay.Character.y = -140;
        this.TouchAreaController.HideMask.x = -65;
        this.TouchAreaController.HideMask.y = -120;
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
        this.GamePlay.UI_Hrz.opacity = 0;
        this.GamePlay.UI_Vtc.opacity = 255;
        this.background.scale = 0.4;

        this.GamePlay.Character.scale = 1;
        this.GamePlay.Character.x = 0;
        this.GamePlay.Character.y = -235;
        this.TouchAreaController.HideMask.x = 45;
        this.TouchAreaController.HideMask.y = 16;
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
            this.GamePlay.UI_Hrz.opacity = 0;
            this.GamePlay.UI_Vtc.opacity = 255;
            this.background.scale = 0.4;

            this.GamePlay.Character.scale = 1;
            this.GamePlay.Character.x = 0;
            this.GamePlay.Character.y = -235;
            this.TouchAreaController.HideMask.x = 45;
            this.TouchAreaController.HideMask.y = 16;
        } else {
            this.GamePlay.UI_Hrz.opacity = 0;
            this.GamePlay.UI_Vtc.opacity = 255;
            this.background.scale = 0.4;
            
            this.GamePlay.Character.scale = 1;
            this.GamePlay.Character.x = 0;
            this.GamePlay.Character.y = -235;
            this.TouchAreaController.HideMask.x = 45;
            this.TouchAreaController.HideMask.y = 16;
        }

    }


    protected update(dt: number): void {
        this.handleRotate();
    }
}
