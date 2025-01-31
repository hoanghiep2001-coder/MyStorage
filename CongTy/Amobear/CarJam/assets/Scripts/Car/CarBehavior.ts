import { _decorator, CCBoolean, CCFloat, Collider, Component, easing, ERigidBodyType, ICollisionEvent, log, math, Node, ParticleSystem, Quat, RigidBody, tween, Vec3 } from 'cc';
import { CarStops } from './CarStops';
import * as Interface from "../Const/interface";
import { GameInfo } from '../Const/GameInfo';
import { CarSkin } from './CarSkin';
import { SoundController } from '../Controller/SoundController';
import { CONST } from '../Const/CONST';
import { CustomerBehavior } from '../Customer/CustomerBehavior';
const { ccclass, property } = _decorator;


@ccclass('CarBehavior')
export class CarBehavior extends Component {
    vFX_smoke: ParticleSystem = null;
    vFX_impact: ParticleSystem = null;

    stopID: number = null;
    roadStopsPoint: Node = null;
    eulerAnglesY: number = 0;
    isCanMove: boolean = false;
    speed: number = 50;
    rigidBody: RigidBody = null;
    collider: Collider = null;
    side: string = null;
    donePoint: Node = null;

    isTranspoter: boolean = false;

    targetQuat: Quat = new Quat();
    currentQuat: Quat = new Quat();

    targetNode: Node = null;


    protected onLoad(): void {
        this.collider = this.getComponent(Collider);
        this.rigidBody = this.node.getComponent(RigidBody);
    }


    protected start(): void {
        this.currentQuat = this.node.rotation;
        this.targetQuat = this.node.rotation;
        this.eulerAnglesY = this.node.eulerAngles.y;

        const fxChildrens = this.initVfx();

        let currentPos: Vec3 = this.node.getPosition();

        this.collider.on("onCollisionEnter", (e: ICollisionEvent) => {

            // transporter Car
            if (e.otherCollider.node.name.includes("RmRigidbodyPoint") && !this.isCanMove) {
                this.removeRigidbody();
                this.scheduleOnce(() => {
                    log("destroy")
                    
                    this.node.active = false;
                    this.node.destroy();
                }, 1);
            }

            // transporter Car
            if (e.otherCollider.node.name.includes("DestroyPoint")) {
                log("destroy")
                this.node.active = false;
                this.node.destroy();
            }


            // handle Car in op 9
            if (e.otherCollider.node.name.includes("enabledClick")) {
                GameInfo.activeVibration = true;
                SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.Impact);

                this.vFX_impact.play();
                fxChildrens.forEach(fx => fx.getComponent(ParticleSystem));
                return;
            }


            // handle turn back
            if (e.otherCollider.node.name.includes("Car")
                || e.otherCollider.node.name.includes("Van")
                || e.otherCollider.node.name.includes("Bus")
            ) {
                log(this.node.name, "collided");

                this.node.setRotationFromEuler(new Vec3(0, this.eulerAnglesY, 0));

                SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.Impact);

                this.vFX_impact.play();
                fxChildrens.forEach(fx => fx.getComponent(ParticleSystem));
                this.isCanMove = false;
                this.turnBack(currentPos);
            }


            // handle run to Result
            if (e.otherCollider.node.name.includes("PointA")
            ) {
                if (!this.node.name.includes("Destroyer")) this.removeRigidbody();
                else {
                    this.rigidBody.type = ERigidBodyType.STATIC;
                    this.isCanMove = false;
                }
                let CarStopsComp: CarStops = this.node.parent.parent.getChildByName("CarStops").getComponent(CarStops);
                this.handleGoToTurnPoint(CarStopsComp);
            }

            if (e.otherCollider.node.name.includes("PointB")) {
                this.isTranspoter = true;
                this.removeRigidbody();

                if (!this.node.name.includes("Destroyer")) {
                    this.node.setScale(1.5, 1.5, 1.5);

                    // Lưu lại world position trước khi thay đổi parent
                    const worldPos = this.node.getWorldPosition();

                    // Thay đổi parent
                    this.node.parent = this.node.parent.parent.parent.parent.getChildByName("Cars");

                    // Thiết lập lại world position
                    this.node.setWorldPosition(worldPos);
                }


                // Các logic khác
                let CarStopsComp: CarStops = this.node.parent.parent.getChildByName("CarStops").getComponent(CarStops);
                this.handleGoToTurnPoint(CarStopsComp);
            }
        });
    }


    private initVfx(): Node[] {
        this.vFX_smoke= this.node.getChildByName("VFX_Smoke").getComponent(ParticleSystem);
        this.vFX_smoke.node.active = false;

        let vfxNode = this.node.getChildByName("VFX_Impact2");
        this.getComponent(CarSkin).fxBounce = vfxNode.children[2].getComponent(ParticleSystem);
        let fxChildrens = vfxNode.children;
        fxChildrens.splice(2, 1);
        this.vFX_impact = vfxNode.getComponent(ParticleSystem);

        return fxChildrens;
    }


    public setMoveBehavior(): void {
        this.rigidBody.type = ERigidBodyType.DYNAMIC;
        this.isCanMove = true;
    }


    private turnBack(posTurnBack: Vec3): void {
        this.targetNode = null;
        if (!this.node.name.includes("Trans")) this.rigidBody.type = ERigidBodyType.STATIC;

        this.node.setRotationFromEuler(new Vec3(0, this.eulerAnglesY, 0));
        tween(this.node)
            .to(0.2, { position: posTurnBack }, { easing: easing.smooth })
            .start();
    }


    private applyforce(): void {
        switch (this.eulerAnglesY) {
            //sang trái
            case 90:
                this.side = "left";
                this.rigidBody.setLinearVelocity(new math.Vec3(this.speed, 0, 0));
                break;
            // nửa trái
            case 45:
                this.side = "half-left";
                this.rigidBody.setLinearVelocity(new math.Vec3(this.speed, 0, this.speed));
                break;
            // sang phải
            case -90:
                this.side = "right";
                this.rigidBody.setLinearVelocity(new math.Vec3(-this.speed, 0, 0));
                break;
            // nửa phải
            case -45:
                this.side = "half-right";
                this.rigidBody.setLinearVelocity(new math.Vec3(-this.speed, 0, this.speed));
                break;
            // lên trên
            case 0:
                this.side = "up";
                this.rigidBody.setLinearVelocity(new math.Vec3(0, 0, this.speed));
                break;
            // xuống dưới
            case 180:
                this.side = "down";
                this.rigidBody.setLinearVelocity(new math.Vec3(0, 0, -this.speed));
                break;
            default:
                break;
        }
    }


    public removeRigidbody(): void {
        this.isCanMove = false;
        this.rigidBody.enabled = false;
        this.collider.enabled = false;
        // this.rigidBody.destroy();
        // this.collider.destroy();
    }


    private handleGoToTurnPoint(CarStopsComp: CarStops): void {
        GameInfo.isCanTouch = false;

        this.vFX_smoke.node.active = true;

        let stopPoint: Interface.CarStopsState = CarStopsComp.CarStopsState.find(state => state.state === false);
        stopPoint.state = true;
        this.stopID = stopPoint.id;

        let carSkin = this.getComponent(CarSkin);
        CarStopsComp.updateStopStates(stopPoint, carSkin);

        switch (this.side) {
            case "left":
                this.targetNode = CarStopsComp.turnRightPoint;
                // Quat.fromEuler(this.targetQuat, 0, 0, 0);

                tween(this.node)
                    .to(0.3, { position: CarStopsComp.turnRightPoint.position }, { easing: easing.smooth })
                    .call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint))
                    .start();

                break;
            case "half-left":
                this.targetNode = CarStopsComp.turnRightPoint;
                // Quat.fromEuler(this.targetQuat, 0, 0, 0);

                tween(this.node)
                    .to(0.3, { position: CarStopsComp.turnRightPoint.position }, { easing: easing.smooth })
                    .call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint))
                    .start();
                break;
            case "right":
                this.targetNode = CarStopsComp.turnLeftPoint;
                // Quat.fromEuler(this.targetQuat, 0, 0, 0);

                tween(this.node)
                    .to(0.3, { position: CarStopsComp.turnLeftPoint.position }, { easing: easing.smooth })
                    .call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint))
                    .start();
                break;
            case "half-right":
                this.targetNode = CarStopsComp.turnLeftPoint;
                // Quat.fromEuler(this.targetQuat, 0, 0, 0);
                tween(this.node)
                    .to(0.3, { position: CarStopsComp.turnLeftPoint.position }, { easing: easing.smooth })
                    .call(() => this.handleGoToRoadStopPoint(CarStopsComp, stopPoint))
                    .start();
                break;
            case "up":
                this.node.setRotationFromEuler(new math.Vec3(0, 0, 0));
                this.handleGoToRoadStopPoint(CarStopsComp, stopPoint)
                break;
            case "down":
                this.targetNode = CarStopsComp.Down_turnleftPoint;
                // Quat.fromEuler(this.targetQuat, 0, -90, 0);

                tween(this.node)
                    .to(0.35, { position: CarStopsComp.Down_turnleftPoint.position }, { easing: easing.smooth })
                    .call(() => {
                        this.targetNode = CarStopsComp.turnLeftPoint;
                        // Quat.fromEuler(this.targetQuat, 0, 0, 0);

                        tween(this.node)
                            .to(0.5, { position: CarStopsComp.turnLeftPoint.position }, { easing: easing.smooth })
                            .call(() => {
                                this.handleGoToRoadStopPoint(CarStopsComp, stopPoint);
                            })
                            .start();
                    })
                    .start();
                break;
            default:
                break;
        }
    }


    private handleGoToRoadStopPoint(CarStopsComp: CarStops, stopPoint: Interface.CarStopsState): void {
        this.roadStopsPoint = CarStopsComp.node.getChildByName(`RoadStop_${stopPoint.id}`);
        this.donePoint = CarStopsComp.donePoint;
        let stopPointNode: Node = CarStopsComp.CarStops[stopPoint.id - 1];


        let euler: number = -90;
        if (this.side.includes("right")) euler = 90;
        else if (this.side.includes("up")) {
            if (stopPoint.id === 1 || stopPoint.id === 2 || stopPoint.id === 3 || stopPoint.id === 4) euler = 90;
            if (stopPoint.id === 5 || stopPoint.id === 6 || stopPoint.id === 7 || stopPoint.id === 8) euler = -90;
        }

        this.targetNode = this.roadStopsPoint;
        Quat.fromEuler(this.targetQuat, 0, euler, 0);

        tween(this.node)
            .to(0.3, { position: this.roadStopsPoint.position }, { easing: easing.smooth })
            .call(() => this.handleGoToStopPoint(CarStopsComp, stopPointNode, stopPoint))
            .start();
    }


    private handleGoToStopPoint(CarStopsComp: CarStops, stopPointNode: Node, stopPoint: Interface.CarStopsState): void {
        this.targetNode = stopPointNode;

        this.vFX_smoke.node.active = false;

        tween(this.node)
            .to(0.3, { position: stopPointNode.position }, { easing: easing.smooth })
            .call(() => {
                this.targetNode = null;
                Quat.fromEuler(this.targetQuat, 0, 31, 0);
                this.getComponent(CarSkin).car_Top.active = false;
                stopPoint.isReady = true;
                GameInfo.isCanTouch = true;
                GameInfo.IsPlaying = true;

                let firstCumtomer = GameInfo.currentCustomers[0].getComponent(CustomerBehavior);
                let firstCustomerColorID = firstCumtomer.customerColorID;

                if (GameInfo.carStops.every(stop => stop.isReady === true && stop.colorID !== firstCustomerColorID) && GameInfo.IsPlaying) {
                    GameInfo.isLose = true;
                }
            })
            .start();
    }


    public handleDoneFullCustomer(): void {
        this.targetNode = null;
        
        GameInfo.carStops[this.stopID - 1].carSkin = null;
        GameInfo.carStops[this.stopID - 1].isReady = false;
        GameInfo.carStops[this.stopID - 1].state = false;
        GameInfo.carStops[this.stopID - 1].colorID = null;

        tween(this.node)
            .to(0.25, { position: this.roadStopsPoint.position }, { easing: easing.smooth })
            .call(() => gotoDonePoint())
            .start();

        const gotoDonePoint = () => {
            this.vFX_smoke.node.active = true;
            
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.carMoveToPlace);

            this.node.setRotationFromEuler(new math.Vec3(0, -90, 0));
            tween(this.node)
                .to(1, { position: this.donePoint.position }, { easing: easing.smooth })
                .call(() => {
                    this.node.active = false;
                    this.destroy();
                })
                .start();
        }
    }


    private updateRotation(dt: number): void {
        if (!this.targetNode) return;

        const currentPos = this.node.worldPosition.clone();
        const targetPos = this.targetNode.worldPosition.clone();

        const direction = new Vec3();
        Vec3.subtract(direction, targetPos, currentPos);
        direction.normalize(); // Chuẩn hóa vector

        Quat.fromViewUp(this.targetQuat, direction, Vec3.UP);
        this.currentQuat = this.node.rotation;

        // Nội suy giữa quaternion hiện tại và quaternion mục tiêu
        Quat.slerp(this.currentQuat, this.currentQuat, this.targetQuat, 0.1 * dt);

        // Cập nhật góc quay cho Node
        this.node.setRotation(this.currentQuat);
    }


    protected update(dt: number): void {
        this.updateRotation(dt);

        this.isCanMove && this.applyforce();
    }
}


