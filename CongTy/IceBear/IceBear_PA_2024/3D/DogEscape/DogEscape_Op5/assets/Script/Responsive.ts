

import { _decorator, Component, math, Node, screen } from 'cc';
import { GamePlay } from './GamePlay';
const { ccclass, property } = _decorator;
 
@ccclass('Responsive')
export class Responsive extends Component {
    
    @property(GamePlay)
    GamePlay: GamePlay = null;
    
    // state
    device: string = "";
    isRotate: boolean = false;

    HORIZONTAL_IPX: string = "horizontal_IPX";
    HORIZONTAL_TABLET: string = "horizontal_Tablet";
    VERTICAL_IPX: string = "vertical_IPX";
    VERTICAL_MOBILE: string = "vertical_Mobile";
    
    
    protected start(): void {
      
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

        this.GamePlay.GlowChair.setPosition(100, 105, 0);

        this.GamePlay.MoneyContainer.setPosition(new math.Vec3(0, 200, 0));
        this.GamePlay.itemBar.setPosition(new math.Vec3(0, -165, 0));
        this.GamePlay.itemBar.setScale(new math.Vec3(1.1, 1.1, 1.1));
        this.GamePlay.camera.fov = 35;
    }

    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.GamePlay.GlowChair.setPosition(100, 100, 0);

        this.GamePlay.itemBar.setScale(new math.Vec3(1.1, 1.1, 1.1));   
        this.GamePlay.MoneyContainer.setPosition(new math.Vec3(0, 200, 0));
        this.GamePlay.itemBar.setPosition(new math.Vec3(0, -165, 0));
        this.GamePlay.camera.fov = 35;
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

        this.GamePlay.GlowChair.setPosition(98, 210, 0);

        this.GamePlay.MoneyContainer.setPosition(new math.Vec3(0, 255, 0));
        this.GamePlay.itemBar.setPosition(new math.Vec3(0, -250, 0));
        this.GamePlay.itemBar.setScale(new math.Vec3(1, 1, 1));
        this.GamePlay.camera.fov = 55;
    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.GamePlay.GlowChair.setPosition(100, 175, 0);

        if(screen.windowSize.height / screen.windowSize.width > 1.5) {
            if (screen.windowSize.width / screen.windowSize.height >= 0.6 && screen.windowSize.width / screen.windowSize.height < 0.62) {
                // mobile mode applovin
                this.GamePlay.MoneyContainer.setPosition(new math.Vec3(0, 225, 0));
                this.GamePlay.itemBar.setScale(new math.Vec3(1, 1, 1));
                this.GamePlay.itemBar.setPosition(new math.Vec3(0, -195, 0));
                this.GamePlay.camera.fov = 45;
                return;
            }

            // Iphone 6 / 6 Plus / 7 / 7 Plus
            this.GamePlay.MoneyContainer.setPosition(new math.Vec3(0, 225, 0));
            this.GamePlay.itemBar.setScale(new math.Vec3(1, 1, 1));
            this.GamePlay.itemBar.setPosition(new math.Vec3(0, -215, 0));
            this.GamePlay.camera.fov = 45;
        } else {
            this.GamePlay.GlowChair.setPosition(80, 140, 0);

            this.GamePlay.MoneyContainer.setPosition(new math.Vec3(0, 200, 0));
            this.GamePlay.itemBar.setScale(new math.Vec3(1, 1, 1));
            this.GamePlay.itemBar.setPosition(new math.Vec3(0, -175, 0));
            this.GamePlay.camera.fov = 45;
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

