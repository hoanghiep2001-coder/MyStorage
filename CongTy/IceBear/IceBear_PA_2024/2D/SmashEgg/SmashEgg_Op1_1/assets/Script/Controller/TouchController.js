import { StateForJs } from "../Data/StateForJS";

cc.Class({
    extends: cc.Component,


    properties: {
        graphics: cc.Prefab,
        nodesController: cc.Node,
        audioManager: cc.Node,
        gameController: cc.Node,
        gamePlay: cc.Node,
    },


    onLoad() {
        window.isDraw = false;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touch_start, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this);
    },


    start() {
        this.createGraphics();
    },


    touch_start() {
        // toStore
        // this.gameController.getComponent("GameController").installHandle();

        if(window.isWin) {
            this.gameController.getComponent("GameController").installHandle();
        }

        this.gamePlay.getComponent("GamePlay").handleIronSourcePlaySound();
        this.audioManager.getComponent("AudioManager").playSound("drawSound");
        this.audioManager.getComponent("AudioManager").drawSound.loop = true;
        this.nodesController.getComponent("NodesController").hint.active = false;
        this.nodesController.getComponent("NodesController").text_draw.active = false;
    },


    touch_end: function (event) {
        if(!StateForJs.isCanDraw || window.isWin) {
            this.offEvent();
            this.createGraphics();
        }
        this.audioManager.getComponent("AudioManager").stopSound("drawSound");
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
