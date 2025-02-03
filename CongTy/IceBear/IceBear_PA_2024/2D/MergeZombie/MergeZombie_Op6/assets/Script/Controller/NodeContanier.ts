
const { ccclass, property } = cc._decorator;

@ccclass
export default class NodeContainer extends cc.Component {

    @property(cc.Node)
    GamePlay: cc.Node = null;
    

    // BG
    @property(cc.Node)
    BG_1: cc.Node = null;
    @property(cc.Node)
    BG_2: cc.Node = null;

    // UI
    @property(cc.Node)
    UIContainer: cc.Node = null;

    @property(cc.Node)
    Card_1: cc.Node = null;
    @property(cc.Node)
    Card_2: cc.Node = null;
    
    @property(cc.Node)
    HideMask: cc.Node = null;
    @property(cc.Node)
    CardWhite: cc.Node = null;
    @property(cc.Node)
    Text: cc.Node = null;

    @property(cc.ParticleSystem)
    PS_Blink: cc.ParticleSystem = null;
}
