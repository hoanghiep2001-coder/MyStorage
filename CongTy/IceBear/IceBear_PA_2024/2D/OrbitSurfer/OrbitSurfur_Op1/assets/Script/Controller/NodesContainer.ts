const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;


    main: cc.Node = null;
    logo: cc.Node = null;
    text: cc.Node = null;
    btn_Play: cc.Node = null;

    protected start(): void {
        // this.main = this.UI.getChildByName("main");
        this.logo = this.UI.getChildByName("logo");
        this.text = this.UI.getChildByName("text");
    }
}
