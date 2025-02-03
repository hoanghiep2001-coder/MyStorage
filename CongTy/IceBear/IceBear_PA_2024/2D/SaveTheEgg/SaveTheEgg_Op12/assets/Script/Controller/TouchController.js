import { StateForJs } from "../Data/StateForJS";

cc.Class({
    extends: cc.Component,

    properties: {
        graphics: cc.Prefab,
        nodesController: cc.Node,
        audioManager: cc.Node,
        GamePlay: cc.Node,
        GameController: cc.Node,
        EggController: cc.Node,
    },


    onLoad() {
        window.isDraw = false;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
    },


    start() {
        StateForJs.isCanDraw = true;
        this.createGraphics();
        this.isChangeEggRigidbodyType = false;
    },


    touch_start: function () {
            if(window.isToStore) {
                this.GameController.getComponent("GameController").installHandle();
                return;
            }

        // if(window.isLoseGame || StateForJs.isToStore) {
        //     this.GameController.getComponent("GameController").installHandle();
        //     return;
        // }

        this.audioManager.getComponent("AudioManager").playSound("drawSound");
        this.audioManager.getComponent("AudioManager").drawSound.loop = true;
    },


    touch_end: function (event) {
        if(window.isToStore) {
            // this.GameController.getComponent("GameController").installHandle();
            return;
        }

        if (StateForJs.isToStore || window.isTouchWall) {
            this.audioManager.getComponent("AudioManager").stopSound("drawSound");
            window.isTouchWall = false;
            return;
        }

        if (!StateForJs.isCanDraw) {
            this.offEvent();
            this.EggController.getComponent("EggController").changeRigidbodyType();
            this.createGraphics();
        }

        this.audioManager.getComponent("AudioManager").stopSound("drawSound");

        this.scheduleOnce(() => {
            if (window.isReplayGame) {
                return;
            }

            if (!window.isLoseGame) this.GamePlay.getComponent("GamePlay").winGame();
        }, StateForJs.timeToWin);
    },


    offEvent() {
        this.node.off(cc.Node.EventType.TOUCH_START);
        this.node.off(cc.Node.EventType.TOUCH_END);
    },


    createGraphics() {
        var graphics_node = cc.instantiate(this.graphics);
        graphics_node.x = 0;
        this.node.addChild(graphics_node);
    },
});
