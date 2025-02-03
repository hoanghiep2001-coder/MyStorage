import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeContainer extends cc.Component {
    @property(cc.Node)
    GamePlay: cc.Node = null;
    @property(cc.Node)
    UI: cc.Node = null;

    // Bg
    @property(cc.Node)
    Bg: cc.Node = null;
    @property(cc.Node)
    HideMask: cc.Node = null;

    // UI
    @property(cc.Node)
    btn_Active: cc.Node = null;
    @property(cc.Node)
    PlayerBase: cc.Node = null;
    @property(cc.Node)
    Hand: cc.Node = null;
    @property(cc.Node)
    CTA: cc.Node = null;
    @property(cc.Node)
    CTA_btnDownload: cc.Node = null;

    // Step 1
    Step1: cc.Node = null;
    Step1_Btn_Active: cc.Node = null;
    Step1_btn_KimTiem: cc.Node = null;
    Step1_character: cc.Node = null;

    // Step 2
    Step2: cc.Node = null;
    Step2_Options: cc.Node = null;
    Step2_Gun1: cc.Node = null;
    Step2_kimtiem: cc.Node = null;
    Step2_Gun2: cc.Node = null;
    Step2_AimingCharacter: cc.Node = null;
    Step2_Btn_Active: cc.Node = null;

    Step2_Hole1: cc.Node = null;
    Step2_Hole2: cc.Node = null;
    Step2_Hole3: cc.Node = null;
    Step2_Holes: cc.Node[] = [];
    Step2_TempHoles: cc.Node[] = [];
    Step2_Frames: cc.Node[] = [];

    // overlay
    overlay: cc.Node = null;


    protected start(): void {
        // init variables for step 1
        this.Step1 = this.UI.getChildByName("Step1");

        this.Step1_Btn_Active = this.btn_Active.getChildByName("btn");
        this.Step1_btn_KimTiem = this.PlayerBase.getChildByName("Btn_KimTiem");
        this.Step1_character = this.PlayerBase.getChildByName("character");
        this.overlay = this.UI.getChildByName("Overlay");


        // init variables for step 2
        this.Step2 = this.UI.getChildByName("Step2");
        this.Step2_Options = this.Step2.getChildByName("PlayerBase").getChildByName("Options");
        this.Step2_AimingCharacter = this.Step2_Options.getChildByName("AimingCharacter");
        this.Step2_Btn_Active = this.Step2.getChildByName("Btn_Active").getChildByName("btn");

        this.Step2_Gun1 = this.Step2_Options.getChildByName("Gun1");
        this.Step2_Gun2 = this.Step2_Options.getChildByName("Gun2");
        this.Step2_kimtiem = this.Step2_Options.getChildByName("kimtiem");
        this.Step2_Hole1 = this.Step2_Options.getChildByName("Hole1");
        this.Step2_Hole2 = this.Step2_Options.getChildByName("Hole2");
        this.Step2_Hole3 = this.Step2_Options.getChildByName("Hole3");

        this.Step2_Holes.push(this.Step2_Hole1, this.Step2_Hole2, this.Step2_Hole3);
        this.Step2_TempHoles.push(this.Step2_Hole1, this.Step2_Hole2, this.Step2_Hole3);

        this.Step2_Options.children.filter((node) => {
            let isFrame = node.name.startsWith("frame");
            isFrame ? this.Step2_Frames.push(node) : ""
        })  
    }
}
