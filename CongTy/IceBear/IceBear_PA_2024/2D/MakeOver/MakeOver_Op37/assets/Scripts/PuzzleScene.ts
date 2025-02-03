import { CONST } from "./Const/CONST";
import GameInfo from "./Const/GameInfo";
import { GameController } from "./Controller/GameController";
import { SoundController } from "./Controller/SoundController";
import { STATE } from "./PuzzleConstants";
import { PuzzleBoard } from "./PuzzlueBoard";

const { ccclass, property } = cc._decorator;

@ccclass
export class PuzzleScene extends cc.Component {
    @property(GameController)
    GameController: GameController = null;

    @property(cc.Node)
    btnHint: cc.Node = null;
    @property(PuzzleBoard)
    private board: PuzzleBoard = null;
    @property(cc.Node)
    private winPanel: cc.Node = null;

    private level: number = 3;
    public state: STATE = STATE.NONE;

    start() {
        this.addListeners();
        this.board.init(this);
        this.startGame();
    }

    private startGame() {
        // this.winPanel.active = false;
        this.state = STATE.START;
        this.board.reset(this.level);
    }

    private overGame() {
        // this.winPanel.opacity = 255;
        this.winPanel.active = true;
        this.state = STATE.OVER;

        this.btnHint.children.forEach(child => {
            child.color = cc.color(255, 184, 0, 255);
        });

        cc.tween(this.winPanel)
            .to(0.5, { opacity: 255 }, { easing: cc.easing.smooth })
            .call(() => {
                let label = this.btnHint.getComponentInChildren(cc.Label);
                label.string = 'DOWNLOAD';
                label.node.color = cc.color(255, 255, 255, 255);
                label.node.scale = 0.8;
                this.btnHint.on(cc.Node.EventType.TOUCH_START, this.GameController.installHandle, this);
            })
            .start();


        cc.tween(this.btnHint)
            .repeatForever(
                cc.tween(this.btnHint)
                    .to(0.5, { scale: 1 }, { easing: cc.easing.smooth })
                    .to(0.5, { scale: 1.06 }, { easing: cc.easing.elasticOut })
            ).start();
    }

    public onBoardTouch(x: number, y: number) {
        if (this.state = STATE.START) {
            let isMove = this.board.movePiece(x, y);
            if (!isMove) {
                cc.log("wrong");
                SoundController.Instance(SoundController).playSound(CONST.SoundTrack.wrongSound);
            } else {
                SoundController.Instance(SoundController).playSound(CONST.SoundTrack.slideSound);

                if (this.board.judgeWin()) {
                    this.overGame();
                }
            }
        }
    }

    public onBtnLevelEasy() {
        this.level = 3;
        this.startGame();
    }

    public onBtnLevelNormal() {
        this.level = 5;
        this.startGame();
    }

    public onBtnLevelHard() {
        this.level = 10;
        this.startGame();
    }

    onBtnRestart() {
        this.startGame();
    }

    private addListeners() {
        this.btnHint.on(cc.Node.EventType.TOUCH_START, this.activeHint, this);
    }

    private activeHint(): void {
        console.log("Check");

        if (!GameInfo.isCanTouch) return;

        GameInfo.isCanTouch = false;

        this.winPanel.getComponent(cc.Animation).play();

        this.scheduleOnce(() => GameInfo.isCanTouch = true, 1.1);

        SoundController.Instance(SoundController).playSound(CONST.SoundTrack.clickBtnSound);
    }

    private removeListeners() {

    }

}
