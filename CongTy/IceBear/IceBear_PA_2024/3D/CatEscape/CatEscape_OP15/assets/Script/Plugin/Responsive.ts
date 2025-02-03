import { Constants } from "../Data/Constant";

const { ccclass, property } = _decorator;
import { _decorator, Component, CircleCollider2D, Node, Prefab,Animation,Camera,Label, instantiate, RigidBody2D, Vec2, Vec3, toRadian, math, Skeleton, sp, tween, EventTouch, screen } from 'cc';
import { Game } from "../Game/Game";

@ccclass
export default class Responsive extends Component {

    @property(Node)
    Gradient: Node = null;
    @property(Game)
    Game: Game = null;

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

        this.Game.clock.setPosition(0, 210 , 0);
        if(!Constants.ironSource.isEndGame) {
            this.Game.title.active = true;
            this.Game.icon.active = true;
        }

        if(screen.windowSize.height / screen.windowSize.width > 0.55) {
            // Ip 6 / 6Plus / 7 / 7 Plus
            this.Gradient.setScale(55, 0.2, 1);
            this.Gradient.setPosition(0, 210, 0);
        } else {
            // IpX
            this.Gradient.setScale(65, 0.2, 1);
            this.Gradient.setPosition(0, 210, 0);
        }
    }

    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        if(!Constants.ironSource.isEndGame) {
            this.Game.title.active = true;
            this.Game.icon.active = true;
        }
        this.Gradient.setScale(50, 0.2, 1);
        this.Gradient.setPosition(0, 220, 0);
        this.Game.clock.setPosition(0, 210 , 0);
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

        this.Game.title.active = false;
        this.Game.icon.active = false;
        this.Gradient.setScale(50, 0.2, 1);
        this.Gradient.setPosition(0, 310, 0);
        this.Game.clock.setPosition(0, 280 , 0);
    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }   

        this.device = this.VERTICAL_MOBILE;           

        if(screen.windowSize.width / screen.windowSize.height < 0.7) {

            if (screen.windowSize.width / screen.windowSize.height >= 0.6 && screen.windowSize.width / screen.windowSize.height < 0.62) {
                // mobile mode applovin

                this.Game.title.active = false;
                this.Game.icon.active = false;
                this.Gradient.setScale(50, 0.2, 1);
                this.Gradient.setPosition(0, 240, 0);
                this.Game.clock.setPosition(0, 225 , 0);
                return;
            }

            // Iphone 6 / 6 plus / 7 / 7 Plus
            this.Game.title.active = false;
            this.Game.icon.active = false;
            this.Gradient.setScale(50, 0.2, 1);
            this.Gradient.setPosition(0, 240, 0);
            this.Game.clock.setPosition(0, 250 , 0);
        } else {    

            // Ipad
            this.Game.title.active = false;
            this.Game.icon.active = false;
            this.Gradient.setScale(50, 0.2, 1);
            this.Gradient.setPosition(0, 220, 0);
            this.Game.clock.setPosition(0, 210 , 0);
        }
        
    }

    protected update(dt: number): void {
        this.handleRotate();
    }

}
