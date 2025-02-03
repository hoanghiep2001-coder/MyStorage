
import GamePlay from "./GamePlay";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Responsive extends cc.Component {

    // Component
    @property(GamePlay)
    GamePlay: GamePlay = null;

    @property(cc.Node)
    Bg2: cc.Node = null;

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
            this.isRotate = true;
            this.setHorizontal();
        } else {
            this.isRotate = false;
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

        this.GamePlay.Bg1.scale = 0.4;

        this.GamePlay.Cards.forEach(card => card.scale = 0.3);

        this.GamePlay.Cards[0].x = -140;
        this.GamePlay.Cards[0].y = 45;

        this.GamePlay.Cards[1].x = 140;
        this.GamePlay.Cards[1].y = -120;

        this.GamePlay.Cards[2].x = 0;
        this.GamePlay.Cards[2].y = 45;

        this.GamePlay.Cards[3].x = 140;
        this.GamePlay.Cards[3].y = 45;

        this.GamePlay.Cards[4].x = -140;
        this.GamePlay.Cards[4].y = -120;

        this.GamePlay.Cards[5].x = 0;
        this.GamePlay.Cards[5].y = -120;

        this.GamePlay.text.y = 180;
        this.GamePlay.text.scale = 0.4;

        // this.Bg2.scale = 0.3;
    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.GamePlay.Bg1.scale = 0.4;

        this.GamePlay.Cards.forEach(card => card.scale = 0.3);

        this.GamePlay.Cards[0].x = -140;
        this.GamePlay.Cards[0].y = 45;

        this.GamePlay.Cards[1].x = 140;
        this.GamePlay.Cards[1].y = -120;

        this.GamePlay.Cards[2].x = 0;
        this.GamePlay.Cards[2].y = 45;

        this.GamePlay.Cards[3].x = 140;
        this.GamePlay.Cards[3].y = 45;

        this.GamePlay.Cards[4].x = -140;
        this.GamePlay.Cards[4].y = -120;

        this.GamePlay.Cards[5].x = 0;
        this.GamePlay.Cards[5].y = -120;


        this.GamePlay.text.scale = 0.4;
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

        this.GamePlay.Bg1.scale = 0.6;

        this.GamePlay.Cards.forEach(card => card.scale = 0.25);

        this.GamePlay.Cards[0].x = -55;
        this.GamePlay.Cards[0].y = 70;

        this.GamePlay.Cards[1].x = 55;
        this.GamePlay.Cards[1].y = -80;

        this.GamePlay.Cards[2].x = 55;
        this.GamePlay.Cards[2].y = 70;

        this.GamePlay.Cards[3].x = -55;
        this.GamePlay.Cards[3].y = -80;

        this.GamePlay.Cards[4].x = -55;
        this.GamePlay.Cards[4].y = -230;

        this.GamePlay.Cards[5].x = 55;
        this.GamePlay.Cards[5].y = -230;

  
        this.GamePlay.text.scale = 0.3;
        this.GamePlay.text.y = 200;

    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;


        if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 0.7) {
            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.GamePlay.Bg1.scale = 0.5;

            this.GamePlay.Cards.forEach(card => card.scale = 0.2);

            this.GamePlay.Cards[0].x = -55;
            this.GamePlay.Cards[0].y = 70;

            this.GamePlay.Cards[1].x = 55;
            this.GamePlay.Cards[1].y = -50;

            this.GamePlay.Cards[2].x = 55;
            this.GamePlay.Cards[2].y = 70;

            this.GamePlay.Cards[3].x = -55;
            this.GamePlay.Cards[3].y = -50;

            this.GamePlay.Cards[4].x = -55;
            this.GamePlay.Cards[4].y = -170;

            this.GamePlay.Cards[5].x = 55;
            this.GamePlay.Cards[5].y = -170;

            this.GamePlay.text.scale = 0.3;

        } else {
            // Ipad
            this.GamePlay.Bg1.scale = 0.4;

            this.GamePlay.Cards.forEach(card => card.scale = 0.2);

            this.GamePlay.Cards[0].x = -55;
            this.GamePlay.Cards[0].y = 70;

            this.GamePlay.Cards[1].x = 55;
            this.GamePlay.Cards[1].y = -50;

            this.GamePlay.Cards[2].x = 55;
            this.GamePlay.Cards[2].y = 70;

            this.GamePlay.Cards[3].x = -55;
            this.GamePlay.Cards[3].y = -50;

            this.GamePlay.Cards[4].x = -55;
            this.GamePlay.Cards[4].y = -170;

            this.GamePlay.Cards[5].x = 55;
            this.GamePlay.Cards[5].y = -170;

            this.GamePlay.text.scale = 0.3;

        }

    }


    protected update(dt: number): void {
        this.handleRotate();
    }

}
