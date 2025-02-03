
import { _decorator, Component, log, Node } from 'cc';
type SoundController = import("./SoundController").SoundController;
import { IronSource } from '../AdHelper/IronSource';
const { ccclass, property } = _decorator;

 
@ccclass('GameController')
export class GameController extends Component {

    // @property(Node)
    SoundControllerNode: Node = null;


    private onFinish(): void {
        window.gameEnd && window.gameEnd();
    }


    protected start(): void {
        window.gameReady && window.gameReady();

        this.SoundControllerNode = this.node.parent.getChildByName("SoundController")
    }


    public installHandle(): void {
        console.log("install");

        // IronSource.isEndGame = true;

        // let soundController = this.SoundControllerNode.getComponent("SoundController") as SoundController;
        // soundController.StopAllSound();

        window.gameEnd && window.gameEnd();

        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }

        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            ExitApi.exit();
            return;
        }

        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            dapi.openStoreUrl();
            return;
        }

        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.an.superegg.surprisetoy3d");
                return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6566175382?mt=8");
                return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.an.superegg.surprisetoy3d");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    }


    // protected update(dt: number): void {
        // let iS: number = IronSource.handleMuteSoundIronSource();

        // if(iS == 1) {
        //     let soundController = this.SoundControllerNode.getComponent("SoundController") as SoundController;
        //     soundController.PlaySound("bgSound");
        // } else {
        //     let soundController = this.SoundControllerNode.getComponent("SoundController") as SoundController;
        //     soundController.StopAllSound();
        // }
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
