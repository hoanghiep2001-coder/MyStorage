
import { _decorator, Component, math, Node, Tween, tween, view, Animation, Vec3, UITransform, screen } from 'cc';
import { GamePlay } from './GamePlay';

const { ccclass, property } = _decorator;
 
@ccclass('Responsive')
export class Responsive extends Component {
    
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

    private handleRotate(): void {
        if (screen.windowSize.width > screen.windowSize.height) {
            this.GamePlay.isRotate = true;
            this.GamePlay.setDevice = "Tablet";
            this.setHorizontal();
        } else {
            this.GamePlay.isRotate = false;
            this.GamePlay.setDevice = "Mobile";
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
        this.GamePlay.Camera.fov = 50;

        this.GamePlay.background1.setScale(new math.Vec3(0.6, 0.6, 1));
        this.GamePlay.background2.setScale(new math.Vec3(0.6, 0.6, 1));

        this.GamePlay.SelectOption_Container.setPosition(new math.Vec3(-160, -200, 0));
        this.GamePlay.SelectOption_Container.setScale(new math.Vec3(1.1, 1.1, 1.1));

        this.GamePlay.character.setScale(750, 750, 750);
        this.GamePlay.character.setPosition(2.5, -6.4, 47);

        this.GamePlay.doll.setScale(0.32, 0.32, 0.32);
        this.GamePlay.doll.setPosition(165, 235, 0);
    }

    private setHorizontalForTablet(): void {
        if(this.HORIZONTAL_TABLET === this.device) {
            return;
        }

        this.device = this.HORIZONTAL_TABLET;

        this.GamePlay.Camera.fov = 50;

        this.GamePlay.background1.setScale(new math.Vec3(0.6, 0.6, 1));
        this.GamePlay.background2.setScale(new math.Vec3(0.6, 0.6, 1));

        this.GamePlay.SelectOption_Container.setPosition(new math.Vec3(-160, -190, 0));
        this.GamePlay.SelectOption_Container.setScale(new math.Vec3(1.1, 1.1, 1.1));

        this.GamePlay.character.setScale(750, 750, 750);
        this.GamePlay.character.setPosition(2.5, -6.4, 47);

        this.GamePlay.doll.setScale(0.32, 0.32, 0.32);
        this.GamePlay.doll.setPosition(165, 235, 0);
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

        this.GamePlay.Camera.fov = 60;

        this.GamePlay.background1.setScale(new math.Vec3(0.5, 0.65, 1));
        this.GamePlay.background2.setScale(new math.Vec3(0.5, 0.65, 1));

        this.GamePlay.SelectOption_Container.setPosition(new math.Vec3(-160, -300, 0));
        this.GamePlay.SelectOption_Container.setScale(new math.Vec3(1, 1, 1));

        this.GamePlay.character.setScale(780, 780, 780);
        this.GamePlay.character.setPosition(0, -6.4, 47);

        this.GamePlay.doll.setScale(0.43, 0.43, 0.43);
        this.GamePlay.doll.setPosition(165, 315, 0);
    }

    private setMobile(): void {
        if(this.VERTICAL_MOBILE === this.device) {
            return;
        }

        this.device = this.VERTICAL_MOBILE;

        this.GamePlay.doll.setScale(0.41, 0.41, 0.41);
        this.GamePlay.doll.setPosition(165, 305, 0);

        this.GamePlay.character.setScale(780, 780, 780);
        this.GamePlay.character.setPosition(0, -6.4, 47);

        if(screen.windowSize.height / screen.windowSize.width > 1.5) {
            // Iphone 6 / 6 Plus / 7 / 7 Plus
            this.GamePlay.Camera.fov = 60;

            this.GamePlay.background1.setScale(new math.Vec3(0.5, 0.65, 1));
            this.GamePlay.background2.setScale(new math.Vec3(0.5, 0.65, 1));

            this.GamePlay.SelectOption_Container.setPosition(new math.Vec3(-160, -240, 0));
            this.GamePlay.SelectOption_Container.setScale(new math.Vec3(1, 1, 1));
        } else {


            this.GamePlay.Camera.fov = 60;

            this.GamePlay.doll.setScale(0.35, 0.35, 0.35);
            this.GamePlay.doll.setPosition(165, 255, 0);

            this.GamePlay.background1.setScale(new math.Vec3(0.5, 0.65, 1));
            this.GamePlay.background2.setScale(new math.Vec3(0.5, 0.65, 1));

            this.GamePlay.SelectOption_Container.setPosition(new math.Vec3(-160, -200, 0));
            this.GamePlay.SelectOption_Container.setScale(new math.Vec3(1, 1, 1));
        }
    }

    protected update(dt: number): void {
        this.handleRotate();
    }
}

