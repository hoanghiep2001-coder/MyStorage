
import { _decorator, CCString, Component, easing, log, Node, ParticleSystem, tween, Vec3 } from 'cc';
import { CarBehavior } from './CarBehavior';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;


@ccclass('CarSkin')
export class CarSkin extends Component {

    @property(Node)
    car_Top: Node = null;

    @property(CCString)
    CarColor: string = "";

    @property(CCString)
    CarStyle: string = "";

    colorCustomer: string = null;

    CarColorId: number = null;

    CarSeats: number = null;

    customerSeats: Node[] = [];

    currentCarSeat: number = 0;

    actuallySeat: number = 0;

    isDone: boolean = false;

    fxBounce: ParticleSystem = null;


    protected start(): void {
        this.unActiveCustomerSeats();
        this.setCarProperties();
    }


    public setCarProperties(): void {
        switch (this.CarColor) {
            case "Blue":
                this.colorCustomer = "Blue";
                this.CarColorId = 0;
                break;
            case "Green":
                this.colorCustomer = "Green";
                this.CarColorId = 1;
                break;
            case "Orange":
                this.colorCustomer = "Orange";
                this.CarColorId = 2;
                break;
            case "Pink":
                this.colorCustomer = "Pink";
                this.CarColorId = 3;
                break;
            case "Purple":
                this.colorCustomer = "Purple";
                this.CarColorId = 4;
                break;
            case "Red":
                this.colorCustomer = "Red";
                this.CarColorId = 5;
                break;
            case "Yellow":
                this.colorCustomer = "Yellow";
                this.CarColorId = 6;
                break;
            case "Blue_light":
                this.colorCustomer = "Blue_light";
                this.CarColorId = 7;
                break;
            default:
                break;
        }

        switch (this.CarStyle) {
            case "Car":
                this.CarSeats = 4;
                break;
            case "Van":
                this.CarSeats = 6;
                break;
            case "Bus":
                this.CarSeats = 10;
                break;
            default:
                break;
        }
    }


    private bounceAnim(): void {
        this.fxBounce.play();
        let currentScale: Vec3 = this.node.getScale(),
            newScale: Vec3 = new Vec3(currentScale.x + 0.08, currentScale.y + 0.08, currentScale.z + 0.08);
        tween(this.node)
            .to(0.1, { scale: newScale }, { easing: easing.smooth })
            .to(0.1, { scale: currentScale }, { easing: easing.smooth })
            .start();
    }


    public activeCustomerSeat(index: number): void {
        if (this.isDone) return;

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.LoadCustomer);

        this.bounceAnim();

        this.customerSeats[index].active = true;
        this.customerSeats[index].getChildByName(this.colorCustomer).active = true;

        if (index + 1 === this.CarSeats) {
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.Happy);
            this.isDone = true;
            this.getComponent(CarBehavior).handleDoneFullCustomer();
        }
    }


    private unActiveCustomerSeats(): void {
        let customerSeatsNode = this.node.getChildByName("CustomerSeats")
        this.customerSeats = customerSeatsNode.children;
        this.customerSeats.forEach(seat => seat.active = false);
    }
}

