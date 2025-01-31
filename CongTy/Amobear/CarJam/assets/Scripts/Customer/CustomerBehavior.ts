import { _decorator, Component, easing, log, math, Node, SkeletalAnimation, tween, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { CarBehavior } from '../Car/CarBehavior';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;


@ccclass('CustomerBehavior')
export class CustomerBehavior extends Component {

    customerID: number = null;
    customerColorID: number = null;

    goalPoint: number = null;
    isCanMove: boolean = false;
    goalPos: Vec3 = null;

    eulerAngle: number = 0;

    @property([Node])
    CustomerColors: Node[] = [];


    protected start(): void {
        this.CustomerColors[this.customerColorID].active = true;
    }


    public moveToGoal(): void {
        this.getComponent(SkeletalAnimation).play("run");

        // this.node.setRotationFromEuler(new math.Vec3(0, this.eulerAngle, 0))
        let carSkin = GameInfo.carStops[this.goalPoint].carSkin;
        carSkin.actuallySeat += 1;

        if(carSkin.actuallySeat > carSkin.CarSeats) {
            this.node.active = false;
            this.destroy();
            return;
        }

        tween(this.node)
        .to(0.3, {position: this.goalPos, eulerAngles: new Vec3(0, this.eulerAngle, 0)}, {easing: easing.smooth})
        .call(() => {

            carSkin.activeCustomerSeat(carSkin.currentCarSeat);
            carSkin.currentCarSeat += 1;

            this.node.active = false;
            this.destroy();
        })
        .start();
    } 
}
