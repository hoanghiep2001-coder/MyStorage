import { _decorator, Camera, Component, easing, Node, tween, Vec3 } from 'cc';
import { GameInfo } from '../../../CONST/GameInfo';
import { TimeCount } from '../Others/TimeCount';
const { ccclass, property } = _decorator;
/**
 * Predefined variables
 * Name = CameraController
 * DateTime = Sat Dec 28 2024 14:11:22 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = CameraController.ts
 * FileBasenameNoExtension = CameraController
 * URL = db://assets/Script/Controller/CameraController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('PA_30_CameraController')
export class PA_30_CameraController extends Component {

    @property(TimeCount)
    TimeCount: TimeCount = null;


    ORIGINAL_POS: Vec3 = new Vec3(-11.4, 8.972, 11.4);
    ORIGINAL_EULER: Vec3 = new Vec3(-15, -45, 0);
    ORIGINAL_FOV: number = 45;

    
    boxToTarget: Node = null;
    target: Node = null;
    public followDistance: number = 1.1; // Khoảng cách từ camera đến needle
    public followHeight: number = 1.1; // Chiều cao của camera so với needle
    private _targetPos: Vec3 = new Vec3();

    isReadyToLookAt: boolean = false;

    isShowFullBox: boolean = false;

    isCombackOriginalPos: boolean = false;


    protected start(): void {
        // this.originalPos = this.node.getPosition();
    }


    public handleTweenToTable(): void {
        const tablePos: Vec3 = new Vec3(0.338, 9.477, -0.31),
            newEuler: Vec3 = new Vec3(-90, -5, 0);

        tween(this.node)
            .to(2, { eulerAngles: newEuler, position: tablePos }, { easing: easing.smooth })
            .call(() => GameInfo.isCanTouch = true)
            .start();
    }


    public handleGoToBox(boxWorldPos: Vec3): void {
        const newEuler = new Vec3(-45, -5, 0);
        const cameraComp = this.getComponent(Camera);
        const currentFov: number = cameraComp.fov;

        tween(this.node)
        .to(1, {worldPosition: new Vec3(boxWorldPos.x, boxWorldPos.y + 3, boxWorldPos.z + 3),
                eulerAngles: newEuler
        }, {easing: easing.smooth})
        .start();

        tween(cameraComp)
        .delay(0.5)
        .to(0.3, { fov: currentFov - 18 }, { easing: easing.smooth })
        .call(() => {
            this.isReadyToLookAt = true;
            this.TimeCount.node.active = true;
        })
        .start();
    }


    private handleLookAt(): void {
        if (!this.target || !this.isReadyToLookAt) return;

        // Lấy vị trí hiện tại của needle
        this.target.getWorldPosition(this._targetPos);

        // Tính toán vị trí camera (phía sau needle)
        const cameraPos = new Vec3(
            this._targetPos.x,
            this._targetPos.y + this.followHeight,
            this._targetPos.z + this.followDistance
        );

        // Di chuyển camera đến vị trí mới
        this.node.setWorldPosition(cameraPos);

        // Hướng camera đến needle
        this.node.lookAt(this._targetPos);
    }


    private combackOriginalPos(): void {
        this.isCombackOriginalPos = true;

        this.target = null;

        const cameraComp = this.getComponent(Camera);

        tween(cameraComp)
        .to(0.3, {fov: this.ORIGINAL_FOV}, {easing: easing.smooth})
        .start();

        tween(this.node)
        .delay(0.3)
        .to(0.5, {position: this.ORIGINAL_POS, eulerAngles: this.ORIGINAL_EULER}, {easing: easing.smooth})
        .start();
    }


    private showFullBox(): void {
        if(this.isShowFullBox) return;
        this.isShowFullBox = true;

        let needleTarget = this.target.getPosition();

        tween(this.target)
        .to(0.3, {position: new Vec3(needleTarget.x, needleTarget.y - 10, needleTarget.z)}, {easing: easing.smooth})
        .start();

        this.target = null;
        this.isReadyToLookAt = false;

        const cameraComp = this.getComponent(Camera);
        const targetWorldPos = this.boxToTarget.worldPosition;
        const newWorldPos = new Vec3(targetWorldPos.x, targetWorldPos.y + 3, targetWorldPos.z)
        const newEuler = new Vec3(-90, -5, 0)

        tween(cameraComp)
        .to(0.3, {fov: this.ORIGINAL_FOV}, {easing: easing.smooth})
        .start();

        tween(this.node)
        .delay(0.3)
        .to(0.5, {worldPosition: newWorldPos, eulerAngles: newEuler}, {easing: easing.smooth})
        .call(() => GameInfo.Squid_PA_30.isDetachCandy = true)
        .start();
    }


    protected update(dt: number): void {
        this.handleLookAt();
        if(GameInfo.Squid_PA_30.isDoneDrawCandy && !GameInfo.Squid_PA_30.isTimeOver) this.showFullBox();
        if(GameInfo.Squid_PA_30.isTimeOver && !this.isCombackOriginalPos) this.combackOriginalPos();
        if(GameInfo.Squid_PA_30.isDoneAllStep && !this.isCombackOriginalPos) this.combackOriginalPos();
    }
}
