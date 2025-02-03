const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesContainer extends cc.Component {
    @property(cc.Node)
    BG: cc.Node = null;
    @property(cc.Node)
    hideMask: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;

    @property(cc.Node)
    Tutorial: cc.Node = null;

    @property([cc.ParticleSystem])
    PS: cc.ParticleSystem[] = [];

    Tubes: cc.Node[] = [];

    time: cc.Node = null;

    hand: cc.Node = null;

    logo: cc.Node = null;
    
    text: cc.Node = null;

    btn_Play: cc.Node = null;

    CTA: cc.Node = null;

    CTA_button: cc.Node = null;

    CTA_button_tryAgain: cc.Node = null;
    
    CTA_button_Next: cc.Node = null;

    CTA_overlay: cc.Node = null;

    FX_Star: cc.ParticleSystem = null;

    FX_Confetti: cc.ParticleSystem = null;


    protected start(): void {
        this.time = this.UI.getChildByName("time_tab1");

        this.UI.getChildByName("MainContent").getChildByName("TubeController").children.forEach((child) => {
            if(child.name.includes("Bottle")) this.Tubes.push(child);
        });

        this.hand = this.UI.getChildByName("hand");

        this.CTA = this.UI.getChildByName("CTA");

        this.CTA_button = this.CTA.getChildByName("button");
        this.CTA_button_tryAgain = this.CTA_button.getChildByName("TRY AGAIN");
        this.CTA_button_Next = this.CTA_button.getChildByName("NEXT");

        this.CTA_overlay = this.CTA.getChildByName("Overlay");

        this.FX_Star = this.UI.getChildByName("StarFX").getComponent(cc.ParticleSystem);

        this.FX_Confetti = this.UI.getChildByName("ConfettiBase").children[0].getComponent(cc.ParticleSystem);
    }
}
