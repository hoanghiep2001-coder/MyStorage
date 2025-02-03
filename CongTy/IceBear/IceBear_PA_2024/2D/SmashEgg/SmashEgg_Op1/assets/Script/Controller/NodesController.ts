import { Constants } from "../Data/constants";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesController extends cc.Component {
    // Component


    // Node
    @property(cc.Node)
    HideMask: cc.Node = null;
    @property(cc.Node)
    point_checkCollide: cc.Node = null;
    @property(cc.Node)
    Environment: cc.Node = null;

    // UI
    @property(cc.Node)
    hint: cc.Node = null;
    @property(cc.Node)
    text_draw: cc.Node = null;
    @property(cc.Node)
    text_eggcelent: cc.Node = null;
    @property(cc.Node)
    text_tryAgain: cc.Node = null;

    @property([cc.Node])
    eggs: cc.Node[] = [];

    // CTA
    @property(cc.Node)
    CTA: cc.Node = null;
    @property(cc.Node)
    CTA_logo: cc.Node = null;
    @property(cc.Node)
    CTA_button: cc.Node = null;
    @property(cc.Node)
    CTA_Overlay: cc.Node = null;

    // PreFab
    @property(cc.Prefab)
    Prefab_Graphics: cc.Prefab = null;

    // protected start(): void {
    //     Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
    //     Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
    //     Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
    // }
}
