import { _decorator, Animation, BoxCollider, Camera, Collider, Component, easing, EventTouch, geometry, log, Node, physics, PhysicsSystem, RigidBody, tween, UIOpacity, Vec2, Vec3 } from 'cc';
import { IronSource } from '../AdHelper/IronSource';
import { GameInfo } from '../Const/GameInfo';

type UIGameController = import("../Controller/UIGameController").UIGameController;
type GameController = import("../Controller/GameController").GameController;

const { ccclass, property } = _decorator;

@ccclass('HideMask')
export class HideMask extends Component {

    @property(Node)
    SoundControllerNode: Node = null;

    @property(Node)
    GameControllerNode: Node = null;
    GameController: GameController = null;

    @property(Node)
    UIGameControllerNode: Node = null;
    UIGameController: UIGameController = null;

    basePos: Vec2 = null;
    touchPos: Vec2 = null;
    oldPos: Vec2 = null;

    currentTouchPath: number = null;

    private touchDown: boolean = false;

    selectNode: Node = null;

    target: Node = null;

    isSuccess: boolean = false;


    protected start(): void {
        this.init();
        this.registerEvent();
    }


    private init(): void {
        this.UIGameController = this.UIGameControllerNode.getComponent("UIGameController") as UIGameController;
        this.GameController = this.GameControllerNode.getComponent("GameController") as GameController;
    }


    private registerEvent(): void {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    }


    private touchStart(event: EventTouch): void {
        if (!GameInfo.isCanTouch) return;

        if (GameInfo.isToStore) {
            // this.SoundControllerNode.getComponent("SoundController").StopAllSound();
            this.GameController.installHandle();
            return;
        }

        IronSource.handleIronSourcePlaySound(
            this.SoundControllerNode.getComponent("SoundController").PlaySound("bgSound")
        )

        GameInfo.isTouching = true;

        if (GameInfo.IsPlaying) {
            this.touchPos = event.touch.getLocation();

            this.basePos = this.touchPos;

            this.SoundControllerNode.getComponent("SoundController").PlaySound("clickSound");

            this.selectNode = this.getRayClickResult(this.UIGameController.Camera3D, this.touchPos);

            if (this.selectNode) {
                this.selectNode.setRotationFromEuler(new Vec3(16.947, -4.44, -1.356));
                this.selectNode.setScale(new Vec3(2.5, 2.5, 2.5));

                let toy_04 = this.UIGameController.Dino_Hint.getChildByName("toy_04");

                switch (this.selectNode.name) {
                    case "dino_Tail":
                        this.currentTouchPath = 0;
                        this.target = toy_04.getChildByName("tail");
                        this.target.active = true;
                        break;
                    case "dino_Body":
                        this.currentTouchPath = 1;
                        this.target = toy_04.getChildByName("body");
                        this.target.active = true;
                        break;
                    case "dino_Head":
                        this.currentTouchPath = 2;
                        this.target = toy_04.getChildByName("HEad");
                        this.target.active = true;
                        break;
                    case "dino_BackLeg":
                        this.currentTouchPath = 3;
                        this.target = toy_04.getChildByName("backleg");
                        this.target.active = true;
                        break;
                    case "dino_FrontLeg":
                        this.currentTouchPath = 4;
                        this.target = toy_04.getChildByName("frontlEg");
                        this.target.active = true;
                        break;
                    default:
                        break;
                }

            }

            log("selected: ", this.selectNode);
            log("target: ", this.target);
        }

        else {
            GameInfo.IsPlaying = true;
            GameInfo.isCanTouch = false;

            this.SoundControllerNode.getComponent("SoundController").PlaySound("openEggSound");

            this.UIGameController.Tut.active = false;
            this.UIGameController.Ps_Galaxy.resetSystem();
            this.UIGameController.Egg.getComponent(Animation).play("egg_dragon_GiftBox");

            // stop particle galaxy
            this.scheduleOnce(() => {
                this.UIGameController.Ps_Galaxy.stopSystem();

                // hide opening BG
                this.UIGameController.OpeningBg.getComponent(Animation).play("OpeningBg_HideAnim");
            }, 1);

            // hide egg and show paths of dino
            this.scheduleOnce(() => {
                this.UIGameController.Egg.active = false;

                this.SoundControllerNode.getComponent("SoundController").PlaySound("showItemSound");

                this.UIGameController.DinoPaths.forEach((path, index) => {
                    // anim rơi ra thành các mảnh
                    tween(path)
                        .to(0.5,
                            { position: this.UIGameController.DinoPaths_InitProps[index].position },
                            { easing: easing.smooth }
                        )
                        .start();
                });
            }, 1.5)

            // show dino Hint
            this.scheduleOnce(() => {
                this.UIGameController.MainGamePlay.active = true;

                GameInfo.isCanTouch = true;
            }, 2);

        }
        this.touchDown = true;
    }


    private touchMove(event: EventTouch): void {
        if (!GameInfo.isCanTouch || IronSource.isEndGame || GameInfo.isToStore) return;

        this.touchPos = event.touch.getLocation();

        if (this.selectNode) {
            // Tính toán khoảng cách giữa điểm hiện tại và điểm gốc
            let deltaX = this.touchPos.x - this.basePos.x;
            let deltaY = this.touchPos.y - this.basePos.y;

            let selectNodePos = this.selectNode.getPosition();

            // Di chuyển đối tượng theo trục X và Y dựa trên khoảng cách tính được
            this.selectNode.setPosition(
                selectNodePos.x + deltaX / 2000,
                selectNodePos.y + deltaY / 2000,
                selectNodePos.z
            );

            // nếu chạm vào gần điểm đích
            if (this.target) {
                // log(this.areVec3Close(this.selectNode.getPosition(), this.target.getPosition()))
                if (this.areVec3Close(this.selectNode.getPosition(), this.target.getPosition()) && !this.isSuccess) {


                    this.SoundControllerNode.getComponent("SoundController").PlaySound("congratSound");

                    this.UIGameController.Ps_Star.resetSystem();

                    let toy_04 = this.UIGameController.Dino_Current.getChildByName("toy_04");

                    this.isSuccess = true;

                    GameInfo.doneCount += 1;

                    this.selectNode.active = false;
                    this.touchEnd();

                    // active true path of dino
                    let currentPath = toy_04.children.find((path => path.name === this.target.name));
                    currentPath.active = true;
                    this.target.active = false;
                    this.target = null;
                }
            }
        }
    }


    private touchEnd(): void {
        if (!GameInfo.isCanTouch || IronSource.isEndGame || GameInfo.isToStore) return;

        // GameInfo.isCanTouch = false;
        GameInfo.isTouching = false;

        
        if (GameInfo.doneCount === 5) {
            this.UIGameController.Dino_Hint.active = false;
            this.UIGameController.Dino_Model.active = false;
            this.UIGameController.Dino_Current.getComponent(Animation).play("Dino_Win");

            GameInfo.isToStore = true;
            GameInfo.isWin = true;
            this.SoundControllerNode.getComponent("SoundController").PlaySound("winSound");
        }


        if (!this.isSuccess) {
            tween(this.selectNode)
                .to(0.5,
                    {
                        position: this.UIGameController.DinoPaths_InitProps[this.currentTouchPath].position,
                        rotation: this.UIGameController.DinoPaths_InitProps[this.currentTouchPath].rotation,
                        scale: this.UIGameController.DinoPaths_InitProps[this.currentTouchPath].scale
                    },
                    { easing: easing.smooth }
                )
                .call(() => {
                    GameInfo.isCanTouch = true;
                    this.selectNode = null;
                })
                .start();

            // unActive hint of dino
            let toy_04 = this.UIGameController.Dino_Hint.getChildByName("toy_04");
            toy_04.children.forEach(path => path.active = false);
        }

        else {
            this.selectNode = null;
            GameInfo.isCanTouch = true;
            this.isSuccess = false;
        }
    }


    private getRayClickResult(Camera3D: Camera, touchPos: Vec2): Node | null {
        let ray = new geometry.Ray();
        // Get a ray from the screen that is directed to the screen based on the point clicked
        Camera3D.screenPointToRay(touchPos.x, touchPos.y, ray);

        const mask = 0xffffffff;
        const maxDistance = 10000000000000;
        const queryTrigger = true;

        if (PhysicsSystem.instance.raycastClosest(ray, mask, maxDistance, queryTrigger)) {
            const rayResult = PhysicsSystem.instance.raycastClosestResult;
            const hitNode = rayResult.collider.node;
            return hitNode;
        }

        else return null;
    }


    private areVec3Close(vec1: Vec3, vec2: Vec3, epsilon = 108) {
        if (this.target.name === "frontlEg") {
            epsilon = 112
        }

        if (this.target.name === "HEad") {
            epsilon = 109
        }

        if (this.target.name === "backleg") {
            epsilon = 107
        }

        if (this.target.name === "tail") {
            epsilon = 108
        }

        if (this.target.name === "body") {
            epsilon = 107.5
        }

        // log(epsilon)
        return vec1.subtract(vec2).length() < epsilon;
    }
}
