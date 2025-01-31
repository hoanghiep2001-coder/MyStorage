import { _decorator, Component, easing, game, instantiate, log, math, Node, Prefab, SkeletalAnimation, tween, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import * as Interface from "../Const/interface";
import { CustomerBehavior } from './CustomerBehavior';
const { ccclass, property } = _decorator;


@ccclass('CustomerController')
export class CustomerController extends Component {

    @property(Prefab)
    customer: Prefab = null;

    @property(Node)
    spawnPos: Node = null;

    @property([Node])
    posStops: Node[] = [];

    CurrentIndexCustomer: number = 1;

    flag: boolean = false;

    randomFirstGame: number = 5;

    private colorList: number[] = [];


    private timer = 0;
    private interval = 0.1;


    protected start(): void {
        this.initQueue();

        if (GameInfo.currentOption === 9) {
            this.initializeColorList();
        }

        this.createCustomer(GameInfo.customerQueue[0].position, 0);
    }


    private initQueue(): void {
        GameInfo.currentQueue = 333;

        if (GameInfo.currentOption === 9) GameInfo.currentQueue = 30;
    }


    private initializeColorList(): void {
        this.colorList = [];
        for (let i = 0; i < 10; i++) {
            this.colorList.push(0, 1, 3);
        }
        this.colorList = this.shuffleArray(this.colorList);
    }


    private shuffleArray(array: number[]): number[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    private createCustomer(startPos: Vec3, queueIndex: number): void {
        const customerNode = instantiate(this.customer);
        const customerBehavior = customerNode.getComponent(CustomerBehavior);

        const random = this.getCustomerColorID();

        customerBehavior.customerColorID = random;
        customerBehavior.customerID = this.CurrentIndexCustomer;

        // log("curent customer:", this.CurrentIndexCustomer);

        this.CurrentIndexCustomer += 1;

        GameInfo.currentQueue -= 1;

        // Đặt vị trí và thuộc tính ban đầu
        customerNode.setPosition(startPos);
        customerNode.parent = this.node;

        GameInfo.currentCustomers.push(customerNode);

        // Bắt đầu di chuyển khách hàng
        this.moveCustomerToNext(customerNode, queueIndex);
    }


    private getCustomerColorID(): number {
        // spawn in Red color in first step
        if (this.CurrentIndexCustomer === 1
            || this.CurrentIndexCustomer === 2
            || this.CurrentIndexCustomer === 3)
            return 5;

        // just spawn 6 color in option 6 (dont set blue_light car yet)
        if (GameInfo.currentOption === 6) {
            if (this.CurrentIndexCustomer >= 60) return math.randomRangeInt(0, 4);
            return math.randomRangeInt(0, 7);
            // use for forced user lose
        }

        // full color in option 7
        else if (GameInfo.currentOption === 7) {
            return math.randomRangeInt(0, 8);
        }

        // if current option = 8. just spawn 5 color;
        else if (GameInfo.currentOption === 8) {
            let newArrColorID = [7, 2, 5, 1, 0];

            // forced player lose;
            if (this.CurrentIndexCustomer >= 60) {
                newArrColorID = [7, 2, 1];
            }

            return this.getRandomValueFromArray(newArrColorID);
        }

        // if current option = 9. just spawn 3 color;
        if (GameInfo.currentOption === 9) {
            return this.colorList.pop();
        }
    }


    private getRandomValueFromArray(arr: number[]): number {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }


    private moveCustomerToNext(customer: Node, currentIndex: number): void {
        const nextIndex = currentIndex + 1;

        // // Kiểm tra nếu còn vị trí tiếp theo
        const nextPosition = GameInfo.customerQueue[nextIndex];

        // // Chỉ di chuyển nếu vị trí tiếp theo trống
        if (nextPosition && !nextPosition.isReady) {
            tween(customer)
                .to(0.1, { position: nextPosition.position, eulerAngles: new Vec3(0, nextPosition.rotate, 0) }, { easing: easing.smooth })
                .call(() => {
                    // Cập nhật trạng thái vị trí
                    GameInfo.customerQueue[currentIndex].isReady = false;

                    // Tiếp tục di chuyển đến vị trí tiếp theo
                    this.moveCustomerToNext(customer, nextIndex);

                    const customerBehavior = customer.getComponent(CustomerBehavior);

                    if (!GameInfo.customerQueue[GameInfo.customerQueue.length - 1].isReady && customerBehavior.customerID === 1) {
                        this.createCustomer(GameInfo.customerQueue[0].position, 0)
                    }
                })
                .start();
        }
        else {
            // Nếu khách hàng đến vị trí cuối cùng
            customer.getComponent(SkeletalAnimation).play("idle");
            GameInfo.customerQueue[currentIndex].isReady = true;
        }
    }


    private clearFixMoveCustomer(customer: Node, currentIndex: number): void {
        const nextIndex = currentIndex + 1;

        // // Kiểm tra nếu còn vị trí tiếp theo
        const nextPosition = GameInfo.customerQueue[nextIndex];

        // // Chỉ di chuyển nếu vị trí tiếp theo trống
        if (nextPosition && !nextPosition.isReady) {
            tween(customer)
                .to(0.1, { position: nextPosition.position, eulerAngles: new Vec3(0, nextPosition.rotate, 0) }, { easing: easing.smooth })
                .call(() => {
                    // Cập nhật trạng thái vị trí
                    GameInfo.customerQueue[nextIndex].isReady = true;
                    customer.getComponent(SkeletalAnimation).play("idle");
                    this.flag = false;
                })
                .start();
        }
    }


    protected update(dt: number): void {
        if (this.flag || GameInfo.isLose || GameInfo.isWin) return;

        this.timer += dt;
        if (this.timer >= this.interval) {
            this.timer = 0;


            let firstCumtomer = GameInfo.currentCustomers[0].getComponent(CustomerBehavior);
            let firstCustomerColorID = firstCumtomer.customerColorID;
            let result = GameInfo.carStops.find(stop => stop.isReady === true && stop.colorID === firstCustomerColorID);

            if (result) {
                this.flag = true;

                firstCumtomer.goalPoint = result.id - 1;
                firstCumtomer.goalPos = this.posStops[result.id - 1].position;

                if (result.id - 1 > 3) firstCumtomer.eulerAngle = -180;

                firstCumtomer.moveToGoal();
                GameInfo.customerQueue[15].isReady = false;

                // assign false to all queue
                for (let index = 0; index < GameInfo.customerQueue.length; index++) {
                    const queue = GameInfo.customerQueue[index];
                    queue.isReady = false;
                };

                GameInfo.currentCustomers.splice(0, 1);

                this.clearFixMoveCustomer(GameInfo.currentCustomers[0], 14);

                const maxIndex = 14;
                GameInfo.currentCustomers.forEach((customer, index) => {
                    const currentIndex = maxIndex - index // Tính chỉ số ngược từ 14 về 0
                    this.clearFixMoveCustomer(customer, currentIndex);
                });

                if (GameInfo.currentQueue !== 0) this.createCustomer(GameInfo.customerQueue[0].position, 0);
                else this.scheduleOnce(() => {
                    GameInfo.isWin = true;
                }, 2.5)
            }
        }


    }
}


