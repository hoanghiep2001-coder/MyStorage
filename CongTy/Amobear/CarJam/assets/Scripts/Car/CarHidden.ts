
import { _decorator, Component, easing, log, Node, tween, Vec3 } from 'cc';
import { CarBehavior } from './CarBehavior';
import { GameInfo } from '../Const/GameInfo';
import { CarSkin } from './CarSkin';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
const { ccclass, property } = _decorator;


@ccclass('CarHidden')
export class CarHidden extends Component {

    @property([CarBehavior])
    blockedCars: CarBehavior[] = [];

    isTransformed: boolean = false;


    protected start(): void {

    }


    private bounceAnim(): void {
        let currentScale: Vec3 = this.node.getScale(),
            newScale: Vec3 = new Vec3(currentScale.x + 0.1, currentScale.y + 0.1, currentScale.z + 0.1);
        tween(this.node)
            .to(0.1, { scale: newScale }, { easing: easing.smooth })
            .to(0.1, { scale: currentScale }, { easing: easing.smooth })
            .start();
    }


    private transformRandomCarColor(): void {
        this.isTransformed = true;

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.unlockHiddenCarSound)

        this.bounceAnim();

        const colorCarArr = this.getCarColorArr();

        let carColor = this.getRandomString(colorCarArr);

        const carSkinComp = this.getComponent(CarSkin);

        carSkinComp.CarColor = carColor;

        carSkinComp.setCarProperties();

        // hide Black Hidden Color
        this.node.getChildByName("base").getChildByName("Black").active = false;

        const carColorNode = this.node.getChildByName("base").getChildByName(carColor);
        carColorNode.active = true;
        carSkinComp.car_Top = carColorNode.getChildByName("Top");
    }


    private getCarColorArr(): string[] {
        let strings: string[] = [];

        switch (GameInfo.currentOption) {
            case 7:
                strings = ["Blue", "Green", "Orange", "Pink", "Purple", "Red", "Yellow", "Blue_light"];
                break;
            case 8:
                strings = ["Blue", "Green", "Orange", "Red", "Blue_light"];
                break;
            default:
                break;
        }

        return strings;
    }


    private getRandomString(array: string[]): string {
        // if (!Array.isArray(array) || array.length === 0) {
        //     throw new Error("Input must be a non-empty array.");
        // }
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }


    protected update(dt: number): void {
        if (this.blockedCars.every(car => car.stopID) && !this.isTransformed) this.transformRandomCarColor();
    }

}

