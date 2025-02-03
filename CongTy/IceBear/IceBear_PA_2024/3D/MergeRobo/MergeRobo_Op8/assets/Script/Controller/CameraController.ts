import { _decorator, Component, log, math, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('CameraController')
export class CameraController extends Component {

    protected start(): void {
        // this.initCamera();

        // this.scheduleOnce(() => this.activeTweenCameraStep1(), 1);
        // log(this.node.getWorldRotation())
        // x: -0.42896666549203716, y: 0, z: 0, w: 0.9033203196522498
    }


    private initCamera(): void {
        this.node.setPosition(0, -6.625, 14.593);
        this.node.setWorldRotation(math.quat(-0.42896666549203716,  0,  0,  0.9033203196522498))
        // this.node.setRotationFromEuler(-50.804, 0, 0);
    }


    private activeTweenCameraStep1(): void {
        tween(this.node)
            .to(
                1,
                {
                    position: new Vec3(-0.23, -11.587, 5.744),
                    worldRotation: math.quat(-315, 180, 0)
                }
            ).start();
    }

}

