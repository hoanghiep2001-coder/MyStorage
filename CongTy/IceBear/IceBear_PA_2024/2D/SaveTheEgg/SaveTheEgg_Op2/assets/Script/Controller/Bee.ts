import { Constants } from "../Data/constants";
import AudioManager from "../Plugin/AudioManager";
// import * as PF from "pathfinding";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Bee extends cc.Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    @property(cc.RigidBody)
    rigidBody: cc.RigidBody = null;

    isCollide: boolean = false;
    initPos: cc.Vec2 = null;

    protected start(): void {
        this.beginContact();
        this.initPos = this.node.getPosition();
        // let grid = new PF.Grid(100, 100);
        // console.log(grid);
    }


    private createPathFinding(): void {
        // let grid = new PF.Grid(10, 10);
        // console.log(PF.Grid(100, 100));

    }


    private beginContact(): void {
        this.rigidBody.onBeginContact = (c, s, o) => {
        
            if (o.tag === 4) {
                console.log("collide");     
                // this.isCollide = true;
                // this.jumpBack();
            }

            if (o.tag === 3) {
                if(this.isCollide) {
                    return;
                }

                this.AudioManager.playSound(Constants.SoundTrack.stingSound)
                this.isCollide = true;
                Constants.isHit = true;
                // let random = Math.floor(Math.random() * 3) + 1;
                // console.log(random);

                // if(random === 1) {
                //     targetPosition = Constants.Char_Point1;
                // } else if (random === 2) {
                //     targetPosition = Constants.Char_Point2;
                // } else {
                //     targetPosition = Constants.Char_Point3;
                // }
                // switch (random) {
                //     case 1:
                //         targetPosition = Constants.Char_Point1;
                //         break;
                //     case 2:
                //         targetPosition = Constants.Char_Point2;
                //         break;
                //     case 3:
                //         targetPosition = Constants.Char_Point3;
                //         break;
                //     default:
                //         break;
                // }

                // let currentPosition = this.node.getPosition();
                // currentPosition.lerp(targetPosition, 0.5, currentPosition);
                // this.node.setPosition(currentPosition);
            }
        }
    }


    private jumpBack(): void {
        let targetPosition = new cc.Vec2(this.initPos.x, this.initPos.y)
        let currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.02, currentPosition);
        this.node.setPosition(currentPosition);
    }


    private attack(): void {
        let targetPosition = Constants.CharacterPos;
        let currentPosition = this.node.getPosition();
        currentPosition.lerp(targetPosition, 0.015, currentPosition);
        this.node.setPosition(currentPosition);
    }


    protected update(dt: number): void {
        if (window.isDraw && !this.isCollide) {
            this.attack();
        }
    }

}
