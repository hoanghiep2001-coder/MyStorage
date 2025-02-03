
import { _decorator, Component, math, Node, Tween, tween, view, Animation, screen, log } from 'cc';
import { GamePlay } from './GamePlay';
import { Constants } from '../Data/constants';
const { ccclass, property } = _decorator;


@ccclass('Responsive')
export class Responsive extends Component {

    @property(Node)
    TopBG: Node = null;
    @property(Node)
    BotBG: Node = null;
    @property(GamePlay)
    GamePlay: GamePlay = null;

    // state
    device: string = "";
    isRotate: boolean = false;
    hint_Pos_X: number;
    hint_Pos_Y: number;

    hand: Node = null;

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


        // if(cc.screen.windowSize.height / cc.screen.windowSize.width >= 0.6) {
        //     // Applovin horizontal

        //     return;
        // }
        this.TopBG.active = false;
        this.BotBG.active = false;
        // this.TopBG.setPosition(0, 300, 0);
        // this.BotBG.setPosition(0, -300, 0);

        if (screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            console.log(1);
            this.GamePlay.video.node.setScale(0.67, 0.67, 0.67);
            this.GamePlay.video.node.setPosition(0, 0, 0);

        } else {
            // IpX
            console.log(2);
            this.GamePlay.video.node.setScale(0.8, 0.8, 0.8);
            this.GamePlay.video.node.setPosition(0, -50, 0);
        }

    }


    private setHorizontalForTablet(): void {
        if (this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.TopBG.active = false;
        this.BotBG.active = false;

        this.GamePlay.video.node.setScale(0.6, 0.6, 0.6);
        this.TopBG.setPosition(0, 300, 0);
        this.BotBG.setPosition(0, -300, 0);

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

        this.TopBG.active = true;
        this.BotBG.active = true;

        this.GamePlay.video.node.setScale(0.6, 0.6, 0.6);
        this.GamePlay.video.node.setPosition(0, 0, 0);

        this.TopBG.setPosition(0, 331, 0);
        this.BotBG.setPosition(0, -331, 0);

        // 332 335 345 

        console.log(4);
    }


    private setMobile(): void {
        if (this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        if (screen.windowSize.width / screen.windowSize.height < 0.7) {
            // if (cc.screen.windowSize.width / cc.screen.windowSize.height >= 0.6 && cc.screen.windowSize.width / cc.screen.windowSize.height < 0.62) {
            //     // mobile mode applovin

            //     return;
            // }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.TopBG.active = false;
            this.BotBG.active = false;

            this.GamePlay.video.node.setScale(0.68, 0.68, 0.68);
            this.GamePlay.video.node.setPosition(0, 0, 0);

            console.log(5);
        } else {
            // Ipad
            this.TopBG.active = false;
            this.BotBG.active = false;
            this.GamePlay.video.node.setScale(0.6, 0.6, 0.6);
            this.GamePlay.video.node.setPosition(0, 0, 0);
            console.log(6);
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

