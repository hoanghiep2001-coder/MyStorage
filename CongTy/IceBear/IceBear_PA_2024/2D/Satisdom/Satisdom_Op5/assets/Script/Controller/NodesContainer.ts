const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;

    Plate: cc.Node = null;

    DragArea: cc.Node = null;

    Lobsters: cc.Node[] = [];

    CorrectLobsterAreas: cc.Node[] = [];

    DemoLobsters: cc.Node[] = [];

    main: cc.Node = null;

    time: cc.Node = null;

    hand: cc.Node = null;

    logo: cc.Node = null;
    
    text: cc.Node = null;

    btn_Play: cc.Node = null;
    
    NextFlow: cc.Node = null;

    CTA: cc.Node = null;

    CTA_button: cc.Node = null;

    CTA_button_tryAgain: cc.Node = null;

    CTA_button_Next: cc.Node = null;

    CTA_overlay: cc.Node = null;

    FX_Star: cc.ParticleSystem = null;

    FX_Confetti: cc.ParticleSystem = null;

    Flow2: cc.Node = null;

    Flow2_SpineNode: cc.Node = null;




    protected start(): void {
        this.time = this.UI.getChildByName("time_tab1");

        this.hand = this.UI.getChildByName("hand");

        this.Plate = this.UI.getChildByName("Plate");

        this.DragArea = this.UI.getChildByName("DragArea");

        this.DragArea.children.forEach(item => {
            if (item.name.includes("Lobster")) this.Lobsters.push(item)
            else this.CorrectLobsterAreas.push(item);
        });

        this.DemoLobsters = this.UI.getChildByName("Demo").children;

        this.CTA = this.UI.getChildByName("CTA");

        this.CTA_button = this.CTA.getChildByName("button");

        this.CTA_button_tryAgain = this.CTA_button.getChildByName("TRY AGAIN");

        this.CTA_button_Next = this.CTA_button.getChildByName("NEXT");

        this.CTA_overlay = this.CTA.getChildByName("Overlay");

        this.FX_Star = this.UI.getChildByName("StarFX").getComponent(cc.ParticleSystem);

        this.FX_Confetti = this.UI.getChildByName("ConfettiBase").children[0].getComponent(cc.ParticleSystem);

        this.NextFlow = this.UI.getChildByName("NextFlow");

        this.Flow2 = this.UI.getChildByName("Flow2");

        this.Flow2_SpineNode = this.Flow2.getChildByName("SpineNode");
    }
}
