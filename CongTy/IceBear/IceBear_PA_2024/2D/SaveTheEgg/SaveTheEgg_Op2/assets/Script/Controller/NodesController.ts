import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesController extends cc.Component {
    // Component
    @property([sp.Skeleton])
    Spine_Bees: sp.Skeleton[] = [];
    @property(sp.Skeleton)
    Spine_Character: sp.Skeleton = null;


    // Node
    @property([cc.Node])
    FakeCharacters: cc.Node[] = [];
    @property(cc.Node)
    HideMask: cc.Node = null;
    @property(cc.Node)
    LineContainer: cc.Node = null;
    @property(cc.Node)
    point_checkCollide: cc.Node = null;
    @property(cc.Node)
    Environment: cc.Node = null;

    @property(cc.Node)
    CTA: cc.Node = null;
    @property(cc.Node)
    CTA_logo: cc.Node = null;
    @property(cc.Node)
    CTA_button: cc.Node = null;
    @property(cc.Node)
    CTA_Overlay: cc.Node = null;
    @property(cc.Node)
    Hint: cc.Node = null;

    // PreFab
    @property(cc.Prefab)
    Prefab_Graphics: cc.Prefab = null;

    protected start(): void {
        Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
        Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
        Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
    }
}
