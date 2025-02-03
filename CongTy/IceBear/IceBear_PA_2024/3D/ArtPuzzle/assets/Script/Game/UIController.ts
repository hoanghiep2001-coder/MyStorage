
import { _decorator, Camera, Component, Label, log, Material, Node, ScrollView, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    @property(Camera)
    Camera3D: Camera = null;
    @property(Camera)
    Camera2D: Camera = null;
    
    @property(Node)
    Canvas: Node = null;

    // 3D
    @property(Node)
    Container3D: Node = null;

    // 2D
    @property(Node)
    HideMask: Node = null;
    @property(Node)
    UI: Node = null;

    Warpper: Node = null;
    Tutorial: Node = null;
    Base_Wrapper: Node = null;
    Progress: Node = null;
    ScrollView: ScrollView = null;

    ImpactArea: Node = null;
    Items: Node[] = [];
    Hints: Node[] = [];

    @property([Material])
    Materials: Material[] = [];
    @property([Material])
    HintMaterials: Material[] = [];

    protected start(): void {
        this.Tutorial = this.UI.getChildByName("Tutorial");

        this.Warpper = this.UI.getChildByName("Wrapper");

        this.Base_Wrapper = this.UI.getChildByName("Base_Wrapper");

        this.Progress = this.Warpper.getChildByName("Progress").getChildByName("img_progress");

        this.ScrollView = this.UI.getChildByName("ScrollView").getComponent(ScrollView);

        this.Hints = this.Warpper.getChildByName("Hint").children;
        
        this.Items = this.ScrollView.node.getChildByName("View").getChildByName("content").children;
        
        this.ImpactArea = this.UI.getChildByName("ImpactArea");

        // this.Step1Items = this.Warpper.getChildByName("Decor").getChildByName("Step1").children;

        // this.Step2Items = this.Warpper.getChildByName("Decor").getChildByName("Step2").children;

        // this.Step1Items = step1Arr.sort((a, b) => {
        //     return parseInt(a.name) - parseInt(b.name);
        // }).map(node => node);
        
    }
}

