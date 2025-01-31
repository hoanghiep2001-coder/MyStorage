
import { _decorator, Component, Node, screen, view } from 'cc';
import { SoundController } from './SoundController';
import { CONST } from '../Const/CONST';
import { GameInfo } from '../Const/GameInfo';
const { ccclass, property } = _decorator;


@ccclass('GameController')
export class GameController extends Component {

    @property(Node)
    rotatePopup: Node = null;


    private onFinish(): void {
        window.gameEnd && window.gameEnd();
    }


    protected start(): void {
        window.gameReady && window.gameReady();

        this.handleOrientation();

        view.setResizeCallback(() => {
            this.handleOrientation();
        });

        SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
    }


    private handleOrientation(): void {
        if (screen.windowSize.width > screen.windowSize.height) {
            this.rotatePopup.active = false;
            GameInfo.isCanTouch = true;
        } else {
            this.rotatePopup.active = true;
            GameInfo.isCanTouch = false;
        }
    }


    public installHandle(): void {
        console.log("install");

        // IronSource.isEndGame = true;
        GameInfo.IsShowPopupInstall = true;
        SoundController.Instance(SoundController).StopAllSound();
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
                mraid.open("https://play.google.com/store/apps/details?id=com.ig.supermarket.manager.simulator");
                return;
            }

            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6475570212?mt=8");
            //     return;
            // }

            mraid.open("https://play.google.com/store/apps/details?id=com.ig.supermarket.manager.simulator");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    }

    // update (deltaTime: number) {
    //     // [4]
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
