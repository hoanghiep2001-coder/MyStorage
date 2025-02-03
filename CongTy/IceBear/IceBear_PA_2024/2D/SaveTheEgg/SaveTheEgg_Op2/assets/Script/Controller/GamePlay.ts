import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
import { GameController } from "./GameController";
import NodesController from "./NodesController";
// import * as PF from "pathfinding";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlay extends cc.Component {

    // Script
    @property(NodesController)
    NodesController: NodesController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;
    @property(GameController)
    GameController: GameController = null;


    // Component


    // Node
    @property(cc.Graphics)
    graphic: cc.Graphics = null;
    pathFinding_Grid: any = null;
    pathFinding_Nodes: any = [];

    // State
    curentPosition: cc.Vec2 = null;
    currentHint: cc.Node = null;
    currentPencil: cc.Graphics = null;
    curerntPoint: cc.Node = null;
    isHit: boolean = false;
    isHint: boolean = false;


    protected onLoad(): void {
        let physics = cc.director.getPhysicsManager();
        physics.enabled = true;
        // physics.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit
    }


    protected start(): void {
        this.NodesController.CTA.active = false;

        // this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.handleGamePlay();
        Constants.isCanTouch = true;

        // Path Finding
        // this.drawGrid();
        // this.checkGridCollide();
        // -------------------
    }


    // private drawGrid(): void {
    //     this.pathFinding_Grid = new PF.Grid(400, 400);
    //     this.pathFinding_Nodes = this.pathFinding_Grid.nodes;
    //     this.graphic.node.y = -400 / 2;
    //     this.graphic.node.x = -400 / 2;

    //     console.log(this.pathFinding_Grid);
        
    //     // Đặt màu và độ dày của đường vẽ
    //     this.graphic.strokeColor = cc.Color.BLACK;
    //     this.graphic.lineWidth = 4;

    //     // Vẽ lưới
    //     for (let i = 0; i <= 400; i += 5) {
    //         // Vẽ dòng ngang
    //         this.graphic.moveTo(0, i);
    //         this.graphic.lineTo(400, i);

    //         // Vẽ dòng dọc
    //         this.graphic.moveTo(i, 0);
    //         this.graphic.lineTo(i, 400);
    //     }

    //     // Áp dụng các đường vẽ
    //     this.graphic.stroke();
    // }


    // private checkGridCollide(): void {
    //     let environmentColliders: cc.PhysicsPolygonCollider = this.NodesController.Environment.getComponent(cc.PhysicsPolygonCollider);
    //     let points = environmentColliders.points;

    //     this.pathFinding_Nodes.forEach(node => {
    //         if (this.isPointInPolygon(node, points)) {
    //             console.log('Node va chạm:', node);
    //         } else {
    //             console.log("0 va");
    //         }
    //     });
    // }


    // private isPointInPolygon(point, polygon): boolean {
    //     let x = point.x, y = point.y;
    
    //     let inside = false;
    //     for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    //         let xi = polygon[i].x, yi = polygon[i].y;
    //         let xj = polygon[j].x, yj = polygon[j].y;
    
    //         let intersect = ((yi > y) !== (yj > y))
    //             && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    //         if (intersect) inside = !inside;
    //     }
    
    //     return inside;
    // }


    private handleGamePlay(): void {
        Constants.CharacterPos = this.NodesController.Spine_Character.node.getPosition()
        this.registerEvent();
    }


    private registerEvent(): void {

    }


    public handleIronSourcePlaySound(): void {
        if (Constants.ironSource.isPlayBgSound) {
            return;
        }

        if (Constants.ironSource.SoundState) {
            this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        }

        Constants.ironSource.isPlayBgSound = true;
    }


    private handleMuteSoundIronSource(): void {
        Constants.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10)

        if (Constants.ironSource.State) {
            if (Constants.ironSource.State === 1 && !Constants.ironSource.SoundState && !Constants.ironSource.isEndGame) {
                Constants.ironSource.SoundState = true;
                this.AudioManager.playSound(Constants.SoundTrack.bgSound);
            }

            if (Constants.ironSource.State === 2 && Constants.ironSource.SoundState) {
                Constants.ironSource.SoundState = false;
                this.AudioManager.stopAllSound();
            }
        }
    }


    private characterHit(): void {
        this.isHit = true;
        this.NodesController.Spine_Character.setAnimation(0, "being_hit", true);
        this.AudioManager.playSound(Constants.SoundTrack.crySound);

        this.scheduleOnce(() => {
            this.NodesController.CTA.active = true;
            this.NodesController.CTA.getComponent(cc.Animation).play("CTA_Anim");
            this.AudioManager.playSound(Constants.SoundTrack.loseSound);

            this.NodesController.CTA_button.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);

            // mtg & applovin
            // this.NodesController.CTA_Overlay.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
        }, 1)
    }


    private unactiveHint(): void {
        this.isHint = true;
        this.handleIronSourcePlaySound();
        this.NodesController.Hint.active = false;
    }


    protected update(dt: number): void {
        // this.handleMuteSoundIronSource();
        Constants.isHit && !this.isHit && this.characterHit();
        window.isStartDraw && !this.isHint && this.unactiveHint();

        this.handleMuteSoundIronSource();
    }
}
