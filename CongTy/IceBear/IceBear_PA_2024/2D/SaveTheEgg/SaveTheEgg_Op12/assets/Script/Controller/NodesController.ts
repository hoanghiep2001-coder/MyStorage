import { Constants } from "../Data/constants";
import { GameOption } from "../Data/GameOption";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NodesController extends cc.Component {
    // Component
    @property([sp.Skeleton])
    Spine_Bees: sp.Skeleton[] = [];
    @property(sp.Skeleton)
    Spine_Character: sp.Skeleton = null;


    // Node
    @property(cc.Node)
    EggController: cc.Node = null;

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
    CTA_TryAgain: cc.Node = null;
    @property(cc.Node)
    CTA_PlayNow: cc.Node = null;

    @property(cc.Node)
    Hint: cc.Node = null;

    @property(cc.ParticleSystem)
    PS_Confetti: cc.ParticleSystem = null;

    // PreFab
    @property(cc.Prefab)
    Prefab_Graphics: cc.Prefab = null;


    // Op15
    @property(cc.Node)
    Op15_HatchButton: cc.Node = null;
    @property(cc.Node)
    Op15_Egg: cc.Node = null;
    @property(cc.Node)
    Op15_FireWork: cc.Node = null;

    protected start(): void {
        // Nếu Op hiện tại ko phải 15 thì mới khởi tạo điểm tấn công cho các con ong.
        if(GameOption.currentOption !== 15) {
            Constants.Char_Point1 = this.FakeCharacters[0].getPosition();
            Constants.Char_Point2 = this.FakeCharacters[1].getPosition();
            Constants.Char_Point3 = this.FakeCharacters[2].getPosition();
        }
    }
}
