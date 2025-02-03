import { _decorator, Component, Node, UITransform, ParticleSystem, tween } from 'cc';
import { GameController } from './GameController';
import { AudioManager } from '../Plugin/AudioManager';
import { Constants } from '../Data/Constant';
import { NodesController } from './NodesController';
const { ccclass, property } = _decorator;
@ccclass('GamePlay')
export class GamePlay extends Component {

    // Script
    @property(NodesController)
    NodesController: NodesController = null;
    @property(GameController)
    GameController: GameController = null;
    @property(AudioManager)
    AudioManager: AudioManager = null;


    // state
    isMergeStep: boolean = false;
    isMergeFlag: boolean = false;
    dino1: Node = null;
    dino2: Node = null;

    protected onLoad(): void {

    }


    protected start(): void {
        this.AudioManager.playSound(Constants.SoundTrack.bgSound);
        this.unActiveUI();
        this.unActiveDinos();
    }


    private unActiveUI(): void {
        this.NodesController.hint_2.active = false;
        this.NodesController.hint_3.active = false;
    }


    private unActiveDinos(): void {
        this.NodesController.Rex.active = false;
        this.NodesController.Rex2.active = false;
        for (let index = 1; index < this.NodesController.Dinos.length; index++) {
            const dino = this.NodesController.Dinos[index];
            dino.active = false;
        }
    }


    public handleBuyDino(): void {
        Constants.countClick += 1;
        Constants.Money = Constants.Money - Constants.DinoPrice;
        this.NodesController.Label_Money.string = `${Constants.Money}`;
        Constants.DinoPrice += 200;
        this.NodesController.Label_Price.string = `${Constants.DinoPrice}`;
        if (Constants.countClick >= 3) {
            Constants.isDoneAddDino = true;
            this.NodesController.hint_1.active = false;
            this.NodesController.hint_2.active = true;
        }
    }


    public showDino(): void {
        this.AudioManager.playSound(Constants.SoundTrack.Dino_ScreamSound);
        this.NodesController.Dinos[Constants.countClick].active = true;
    }


    private showMergeStep(): void {
        this.NodesController.Btn_AddDino.active = false;
        this.NodesController.Label_Money.node.parent.active = false;
    }


    public checkMergeDino(): void {
        Constants.isDoneMerge1 ? this.handleStep2() : this.handleStep1();
    }


    private handleStep1(): void {
        for (let index = 0; index < this.NodesController.dinoPoints.length; index++) {
            const node = this.NodesController.dinoPoints[index];
            const bdx = node.getComponent(UITransform).getBoundingBox();
            const pointBdx = this.NodesController.point.getComponent(UITransform).getBoundingBox();
            const dinoLine1 = this.NodesController.DinoLines[0];
            const dinoLine2 = this.NodesController.DinoLines[1];
            if (pointBdx.intersects(bdx) && !this.NodesController.DinoLines[index].active) {
                if (!Constants.dinoChoosen) Constants.dinoChoosen = index + 1;
                this.AudioManager.playSound(Constants.SoundTrack.Dino_ChooseSound);
                this.NodesController.DinoLines[index].active = true;
                dinoLine1.active && dinoLine2.active && this.setDoneMerge();
            }
        }
    }


    private handleStep2(): void {
        for (let index = 0; index < this.NodesController.dinoPoints2.length; index++) {
            const node = this.NodesController.dinoPoints2[index];
            const bdx = node.getComponent(UITransform).getBoundingBox();
            const pointBdx = this.NodesController.point.getComponent(UITransform).getBoundingBox();
            const dinoLine1 = this.NodesController.DinoLines2[0];
            const dinoLine2 = this.NodesController.DinoLines2[1];
            if (pointBdx.intersects(bdx) && !this.NodesController.DinoLines2[index].active) {
                if (!Constants.dinoChoosen) Constants.dinoChoosen = index + 1;
                this.AudioManager.playSound(Constants.SoundTrack.Dino_ChooseSound);
                this.NodesController.DinoLines2[index].active = true;
                dinoLine1.active && dinoLine2.active && this.setDoneMerge();
            }
        }
    }


    private setDoneMerge(): void {
        Constants.isMerged = true;
        this.NodesController.hint_2.active = false;
    }


    public unActiveDinoLines(): void {
        for (let index = 0; index < this.NodesController.DinoLines.length; index++) {
            const node = this.NodesController.DinoLines[index];
            node.active = false;
        }
    }


    private mergeDino(): void {
        this.AudioManager.playSound(Constants.SoundTrack.Dino_FightSound);
        this.isMergeFlag = true;
        let firstDino;
        let secondDino;
        if (Constants.isDoneMerge1) {
            firstDino = this.NodesController.Dinos[2];
            secondDino = this.NodesController.Dinos[3];
        } else {
            firstDino = this.NodesController.Dinos[0];
            secondDino = this.NodesController.Dinos[1];
        }


        switch (Constants.dinoChoosen) {
            case 1:
                this.setMergeAnim(firstDino, secondDino);
                break;
            case 2:
                this.setMergeAnim(secondDino, firstDino);
                break;
            default:
                break;
        }
    }


    private setMergeAnim(firstDino: Node, secondDino: Node): void {
        let dino2Pos = secondDino.getPosition();
        tween(firstDino)
            .to(0.3, { position: dino2Pos })
            .call(() => {
                this.AudioManager.playSound(Constants.SoundTrack.Dino_MergeSound);
                firstDino.active = false;
                secondDino.active = false;
                this.activeRex(dino2Pos);
                Constants.isMerged = false;
                this.isMergeFlag = false;
                Constants.dinoChoosen = null;
            })
            .start();
    }


    private activeRex(dino2Pos): void {
        if(Constants.isDoneMerge1) {
            this.NodesController.Rex2.setPosition(dino2Pos);
            this.NodesController.Rex2.active = true;
            this.NodesController.Rex2.getChildByName("Merge FX").getChildByName("Cube").getComponent(ParticleSystem).play();
            // this.NodesController.hint_2.active = true;
            Constants.isDonePA = true;
        } else {
            this.NodesController.Rex.setPosition(dino2Pos);
            this.NodesController.Rex.active = true;
            this.NodesController.FX_Merge.node.getChildByName("Cube").getComponent(ParticleSystem).play();
            this.NodesController.hint_3.active = true;
            Constants.isDoneMerge1 = true;
        }
       
    }


    protected update(dt: number): void {
        Constants.isDoneAddDino && !this.isMergeStep && this.showMergeStep();
        Constants.isMerged && !this.isMergeFlag && this.mergeDino();
    }
}
