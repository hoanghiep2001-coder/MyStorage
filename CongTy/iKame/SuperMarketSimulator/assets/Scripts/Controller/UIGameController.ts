
import { _decorator, Animation, Color, Component, easing, Event, EventTouch, Graphics, instantiate, Label, log, math, Node, Prefab, tween, Vec3 } from 'cc';
import { GameInfo } from '../Const/GameInfo';
import { SoundController } from './SoundController';
import { CONST } from '../Const/CONST';
import { GameController } from './GameController';
import { LogicGamePlay } from '../Others/HandleLogicGamePlay';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UIGameController
 * DateTime = Mon Aug 26 2024 14:14:13 GMT+0700 (Indochina Time)
 * Author = hoanghiep2001
 * FileBasename = UIGameController.ts
 * FileBasenameNoExtension = UIGameController
 * URL = db://assets/Scripts/Controller/UIGameController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass('UIGameController')
export class UIGameController extends Component {

    @property(GameController)
    GameController: GameController = null;

    @property(Node)
    Canvas: Node = null;

    @property(Node)
    TouchArea: Node = null;

    @property(Node)
    TouchArea_GiveTheChange: Node = null;

    @property(Node)
    TouchArea_Banking: Node = null;

    @property(Label)
    BankingLabel: Label = null;

    @property(Node)
    PcScreen_Change: Node = null;
    @property(Node)
    PcScreen_Give: Node = null;
    @property(Node)
    PcScreen_Receive: Node = null;

    @property(Label)
    PcScreen_TotalLabel: Label = null;

    @property(Label)
    PcScreen_ReceiveLabel: Label = null;

    @property(Label)
    PcScreen_ChangeLabel: Label = null;

    @property(Label)
    PcScreen_GiveLabel: Label = null;

    @property(Node)
    Btn_Ok: Node = null;

    @property(Node)
    Btn_Reset: Node = null;

    @property(Node)
    Btn_OkBanking: Node = null;

    @property(Node)
    Emoji: Node = null;

    @property(Node)
    Tut_1: Node = null;

    @property(Node)
    Tut_2: Node = null;

    // 3D
    @property(Node)
    Desk: Node = null;

    @property([Node])
    Items: Node[] = [];

    ItemPositions: Vec3[] = [];

    @property([Prefab])
    GiveMoney: Prefab[] = [];

    moneyGiveBackInstantiated: Node[] = [];

    // @property(Node)
    // CTA: Node = null;



    protected start(): void {

        this.TouchArea_Banking.active = false;
        this.TouchArea_GiveTheChange.active = false;

        this.registerEvent();

        this.Desk.children.forEach((child, index) => {
            child.name.includes("Point_") && this.ItemPositions.push(child.getPosition());
        });
    }


    public registerEvent(): void {
        this.Btn_Ok.on(Node.EventType.TOUCH_START, this.btnBehaviorTouchStart, this);
        this.Btn_Reset.on(Node.EventType.TOUCH_START, this.btnBehaviorTouchStart, this);
        this.Btn_OkBanking.on(Node.EventType.TOUCH_START, this.btnBankingTouchStart, this);
    }


    private btnBehaviorTouchStart(e: EventTouch): void {
        if (!GameInfo.isCanTouch) return;

        if (GameInfo.currentFailedClick >= 3 || GameInfo.IsShowPopupInstall) {
            this.GameController.installHandle();
            return;
        }

        let target: Node = e.target;

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.clickSound);

        if (target.name === "btn_reset") {
            GameInfo.currentDollarGive = 0;
            GameInfo.currentCenGive = 0;
            this.deleteMoneyOnTheDesk();
        }

        else {
            GameInfo.isCanTouch = false;

            let result: boolean = LogicGamePlay.CheckGameResult(),
                emoji_haha: Node = this.Emoji.getChildByName("Haha"),
                emoji_angry: Node = this.Emoji.getChildByName("Angry");
            log("check Game Result: ", result);

            this.Emoji.getComponent(Animation).play();

            if (result) {
                GameInfo.completePayment = true;
                GameInfo.currentSuccessClick += 1;
                GameInfo.currentTotalCost = 0;
                GameInfo.currentReceive = 0;
                GameInfo.currentDollarGive = 0;
                GameInfo.currentCenGive = 0;
                emoji_haha.active = true;
                this.TouchArea_GiveTheChange.active = false;
                this.deleteMoneyOnTheDesk();
                SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.winSound);
            }
            else {
                emoji_angry.active = true;
                GameInfo.currentFailedClick += 1;
                SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.loseSound);
            }

            this.scheduleOnce(() => {
                GameInfo.isCanTouch = true;
                emoji_haha.active = false;
                emoji_angry.active = false;
            }, 1.5);
        }
    }


    private btnBankingTouchStart(): void {
        if (!GameInfo.isCanTouch) return;

        if (GameInfo.currentFailedClick >= 3 || GameInfo.IsShowPopupInstall) {
            this.GameController.installHandle();
            return;
        }

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.clickSound);

        GameInfo.currentDollarGive = 0;

        GameInfo.currentCenGive = 0;

        GameInfo.isCanTouch = false;

        let result: boolean = LogicGamePlay.CheckGameResult(),
            emoji_haha: Node = this.Emoji.getChildByName("Haha"),
            emoji_angry: Node = this.Emoji.getChildByName("Angry");
        log("check Game Result: ", result);

        this.Emoji.getComponent(Animation).play();

        // if the money is correct then done step
        if (result) {
            GameInfo.completePayment = true;
            GameInfo.currentSuccessClick += 1;
            GameInfo.currentTotalCost = 0;
            GameInfo.currentReceive = 0;
            GameInfo.currentDollarGive = 0;
            GameInfo.currentCenGive = 0;
            GameInfo.currentBankingInput = ``;
            emoji_haha.active = true;
            this.TouchArea_GiveTheChange.active = false;
            this.TouchArea_Banking.active = false;
            this.deleteMoneyOnTheDesk();
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.winSound);
        }

        // else angry
        else {
            emoji_angry.active = true;
            GameInfo.currentBankingInput = ``;
            GameInfo.currentFailedClick += 1;
            SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.loseSound);
        }

        this.scheduleOnce(() => {
            GameInfo.isCanTouch = true;
            emoji_haha.active = false;
            emoji_angry.active = false;
        }, 1.5);

    }


    private updateTotalLabel(): void {
        let dollar: string = null;

        if (GameInfo.currentTotalCost < 10) dollar = `0${GameInfo.currentTotalCost}`;
        else dollar = `${GameInfo.currentTotalCost}`;

        this.PcScreen_TotalLabel.string = `$${dollar}.00`;
    }


    private updateReceiveLabel(): void {
        let dollar: string = null;

        if (GameInfo.currentReceive < 10) dollar = `0${GameInfo.currentReceive}`;
        else dollar = `${GameInfo.currentReceive}`;

        this.PcScreen_ReceiveLabel.string = `$${dollar}.00`;
    }


    private updateChangeLabel(): void {
        GameInfo.currentChange = GameInfo.currentReceive - GameInfo.currentTotalCost;
        let dollar: string = String(GameInfo.currentReceive - GameInfo.currentTotalCost);

        if (GameInfo.currentReceive > 0) {
            if (GameInfo.currentChange < 10) dollar = `0${Number(GameInfo.currentReceive - GameInfo.currentTotalCost)}`;
            else dollar = `${Number(GameInfo.currentReceive - GameInfo.currentTotalCost)}`;
        }

        if (Number(dollar) <= 0) dollar = `00`;

        this.PcScreen_ChangeLabel.string = `$${dollar}.00`;
    }


    private updateGiveLabel(): void {
        let dollar: string = null;
        let cen: string = null;

        if (GameInfo.currentDollarGive < 10) dollar = `0${GameInfo.currentDollarGive}`;
        else dollar = `${GameInfo.currentDollarGive}`;
        if (GameInfo.currentCenGive < 10) cen = `0${GameInfo.currentCenGive}`;
        else cen = `${GameInfo.currentCenGive}`;

        if (GameInfo.currentDollarGive === GameInfo.currentChange
            && GameInfo.currentCenGive === 0) this.PcScreen_GiveLabel.color = new Color(60, 253, 52, 255);
        else this.PcScreen_GiveLabel.color = new Color(253, 68, 52, 255);

        this.PcScreen_GiveLabel.string = `$${dollar}.${cen}`;
    }


    private updatePcScreen(): void {
        this.updateTotalLabel();
        this.updateReceiveLabel();
        this.updateChangeLabel();
        this.updateGiveLabel();
    }


    private updatebankingLabel(): void {
        this.BankingLabel.string = GameInfo.currentBankingInput;
    }


    private updateItemOnDesk(): void {
        if (GameInfo.isNPCDoneMove) {

            GameInfo.isNPCDoneMove = false;

            GameInfo.isCanTouch = true;

            this.PcScreen_Change.active = true;

            this.PcScreen_Give.active = true;

            this.PcScreen_Receive.active = true;

            switch (GameInfo.currentSuccessClick) {
                case 1:
                    GameInfo.currentItems = 1;
                    this.Items[0].active = true;
                    SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);
                    this.scheduleOnce(() => this.Tut_2.active = true, 0.5);
                    break;
                case 2:
                    GameInfo.currentItems = 2;
                    this.Items[1].active = true;
                    SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);

                    this.scheduleOnce(() => {
                        this.Items[2].active = true;
                        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);
                        this.Tut_2.active = true;
                    }, 0.5)
                    break;
                case 3:
                    GameInfo.currentItems = 3;
                    this.Items[3].active = true;
                    SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);

                    this.scheduleOnce(() => {
                        this.Items[4].active = true;
                        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);
                    }, 0.3);

                    this.scheduleOnce(() => {
                        this.Items[5].active = true;
                        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);
                        this.Tut_2.active = true;
                    }, 0.5);
                    break;
                case 4:
                    GameInfo.currentItems = 2;
                    this.Items[6].active = true;
                    SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);

                    this.scheduleOnce(() => {
                        this.Items[7].active = true;
                        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.placeSound);
                        this.Tut_2.active = true;
                    }, 0.5)
                    break;
                default:
                    break;
            }
        }
    }


    private updateMoneyGiveBackOnDesk(): void {
        if (GameInfo.currentDollarGiveBack !== GameInfo.lastDollarGiveBack) {
            GameInfo.lastDollarGiveBack += 1;

            let randomPos = math.randomRangeInt(1, 6);

            let moneyGiveBack = instantiate(this.GiveMoney[0]);

            let x = this.ItemPositions[0].x;
            let y = this.ItemPositions[0].y;
            let z = this.ItemPositions[0].z;

            moneyGiveBack.setPosition(x, y, z);
            moneyGiveBack.parent = this.Desk;
            this.moneyGiveBackInstantiated.push(moneyGiveBack);

            tween(moneyGiveBack)
                .to(0.15, { position: this.ItemPositions[randomPos] }, { easing: easing.smooth })
                .start();
        }

        if (GameInfo.currentCenGiveBack !== GameInfo.lastCenGiveBack) {
            GameInfo.lastCenGiveBack += 1;

            let randomPos = math.randomRangeInt(1, 6);

            let moneyGiveBack = instantiate(this.GiveMoney[1]);

            let x = this.ItemPositions[0].x;
            let y = this.ItemPositions[0].y;
            let z = this.ItemPositions[0].z;

            moneyGiveBack.setPosition(x, y, z);
            moneyGiveBack.parent = this.Desk;
            this.moneyGiveBackInstantiated.push(moneyGiveBack);

            tween(moneyGiveBack)
                .to(0.15, { position: this.ItemPositions[randomPos] }, { easing: easing.smooth })
                .start();
        }
    }


    private deleteMoneyOnTheDesk(): void {
        for (let index = 0; index < this.moneyGiveBackInstantiated.length; index++) {
            const element = this.moneyGiveBackInstantiated[index];
            element.removeFromParent();
            element.active = false;
        }
        this.moneyGiveBackInstantiated = [];
    }


    protected update(dt: number): void {

        this.updatePcScreen();

        this.updatebankingLabel();

        this.updateItemOnDesk();

        this.updateMoneyGiveBackOnDesk();

        // if((GameInfo.isWin || GameInfo.isLose) && !GameInfo.IsShowPopupInstall) this.showCTATextContent();
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
