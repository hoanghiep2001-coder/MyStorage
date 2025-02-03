import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeContainer extends cc.Component {

    @property(cc.Node)
    GamePlay: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;
    @property(cc.Node)
    Scratchable: cc.Node = null;


    // Bg
    @property(cc.Node)
    Bg_2: cc.Node = null;
    @property(cc.Node)
    HideMask: cc.Node = null;
    

    // UI
    @property(cc.Node)
    CTA: cc.Node = null;

    Btn_1: cc.Node = null;
    Hand: cc.Node = null;
    Hint_Circle: cc.Node = null;


    // Character Path
    Doll: cc.Node = null;
    Doll_Face: sp.Skeleton = null;
    Doll_Mask: cc.Node = null;
    Doll_Bandage: cc.Node = null;


    // Flow
    Flow1: cc.Node = null;
    Flow2: cc.Node = null;


    // Tools
    ToolArea: cc.Node = null;
    Flow1_Tool: cc.Node = null;
    Flow1_ToolHead: cc.Node = null;

    Flow2_spineTool: cc.Node = null;
    Flow2_Tool: cc.Node = null;
    Flow2_ToolHead: cc.Node = null;

    // Area
    Flow1_Areas: cc.Node[] = [];
    Flow1_Acnes: cc.Node[] = [];


    // CTA
    CTA_Btn: cc.Node = null;
    CTA_icon: cc.Node = null;
    CTA_logo: cc.Node = null;
    CTA_overlay: cc.Node = null;


    initPosTool_Flow1: cc.Vec2 = null;


    protected start(): void {
        this.Hand = this.UI.getChildByName("hand2");
        
        this.Doll = this.UI.getChildByName("Doll");
        this.Doll_Face = this.Doll.getChildByName("Gal").getComponent(sp.Skeleton);
        this.Doll_Mask = this.Doll.getChildByName("Doll_Mask");
        this.Doll_Bandage = this.Doll.getChildByName("bandage");
        
        this.Flow1 = this.UI.getChildByName("Flow_1");
        this.Flow1_Tool = this.Flow1.getChildByName("Tool");
        this.Flow1_ToolHead = this.Flow1.getChildByName("ToolHead");
        
        this.Hint_Circle = this.Flow1.getChildByName("Hint_2");
        
        this.Flow1.children.forEach(child => {
            if(child.name.includes("AcneArea")) this.Flow1_Areas.push(child);
        });

        this.Flow1_Acnes = this.Doll.getChildByName("Nose").children;

        this.Flow2 = this.UI.getChildByName("Flow_2");
        this.Flow2_spineTool = this.Flow2.getChildByName("spine_cream");
        this.Flow2_ToolHead = this.Flow2.getChildByName("MaskPoint");
        this.Flow2_Tool = this.Flow2.getChildByName("ToolCream");

        this.CTA_Btn = this.CTA.getChildByName("btnNext");
        this.CTA_logo = this.CTA.getChildByName("logo");
        this.CTA_icon = this.CTA.getChildByName("icon");
        this.CTA_overlay = this.CTA.getChildByName("Overlay");

        this.init();
    }


    private init(): void {
        this.initPosTool_Flow1 = this.Flow1_Tool.getPosition();

        this.ToolArea = this.Flow1_Tool;
    }
}
