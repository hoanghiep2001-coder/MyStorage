
import { _decorator, Component, instantiate, log, math, Node, Prefab, UITransform } from 'cc';
import { CarBehavior } from './CarBehavior';
import { CarSkin } from './CarSkin';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;


@ccclass('CarTransporter')
export class CarTransporter extends Component {

    @property(Prefab)
    Car_Trans_4Seat: Prefab = null;
    @property(Prefab)
    Van_Trans_6Seat: Prefab = null;
    @property(Prefab)
    Bus_Trans_10Seat: Prefab = null;

    @property(Node)
    spawnPoint: Node = null;

    @property(Node)
    slide: Node = null;

    @property(Node)
    destroyPoint: Node = null;

    currentIndexCar: number = 1;

    transpoterCarsArr: Node[] = [];

    currentTimeOut: number = 0;

    protected start(): void {
        // this.spawnCar();
    }


    private spawnCar(): void {
        // this.schedule(() => {
            if (GameInfo.IsShowPopupInstall || GameInfo.isLose) return;

            let randomCar = math.randomRangeInt(0, 3);
            let newCar: Node = null;
            switch (randomCar) {
                case 0:
                    newCar = instantiate(this.Car_Trans_4Seat);
                    break;
                case 1:
                    newCar = instantiate(this.Van_Trans_6Seat);
                    break;
                case 2:
                    newCar = instantiate(this.Bus_Trans_10Seat);
                    break;
                default:
                    break;
            }

            // log("new Transporter Car:", this.currentIndexCar);

            this.currentIndexCar += 1;

            // Chuyển đổi vị trí spawnPoint từ world space sang local space của slide
            const worldPosition = this.spawnPoint.worldPosition; // Lấy vị trí toàn cục
            const worldMatrix = this.slide.getWorldMatrix(); // Ma trận thế giới của slide

            const localPosition = new math.Vec3();
            math.Mat4.invert(worldMatrix, worldMatrix); // Đảo ngược ma trận thế giới
            math.Vec3.transformMat4(localPosition, worldPosition, worldMatrix); // Chuyển đổi từ world space sang local space

            newCar.setPosition(localPosition); // Gán vị trí local
            newCar.parent = this.slide; // Đặt parent là slide
            this.removePhysicsForTranspoterCar(newCar);

            let randomColor: number = 0;

            if (GameInfo.currentOption === 6) randomColor = math.randomRangeInt(0, 7);
            else randomColor = math.randomRangeInt(0, 8);

            let carColorNode = newCar.getChildByName("base").children[randomColor];
            let carSkin = newCar.getComponent(CarSkin);
            carColorNode.active = true;
            carSkin.CarColor = carColorNode.name;
            carSkin.car_Top = carColorNode.getChildByName("Top");

            this.transpoterCarsArr.push(newCar);
        // }, 1.3);
    }


    private removePhysicsForTranspoterCar(newCar: Node): void {
        // this.scheduleOnce(() => {
        //     let carBehavior = newCar.getComponent(CarBehavior)
        //     if (!carBehavior.isCanMove) carBehavior.removeRigidbody();

        //     this.scheduleOnce(() => {
        //         if (carBehavior.isTranspoter) return;
        //         this.transpoterCarsArr.splice(0, 1);
        //         newCar.active = false;
        //         newCar.destroy();
        //         // log("Car Trans Destroyed");
        //     }, 1)
        // }, 6.5)
    }


    protected update(dt: number): void {
        let currentSlidePos = this.slide.position;
        this.slide.setPosition(currentSlidePos.x + 0.025, currentSlidePos.y, currentSlidePos.z);

        this.currentTimeOut += dt;
        if(this.currentTimeOut >= 1.6) {
            this.currentTimeOut = 0;
            this.spawnCar();
        }
    }
}

