
import { _decorator, Component, Node } from 'cc';
import { Constants } from '../Data/Constant';
import { AudioManager } from '../Plugin/AudioManager';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {

    @property(AudioManager)
    AudioManager: AudioManager = null;

    protected onLoad(): void {

    }

    protected start(): void {
        window.gameReady && window.gameReady();
    }

    private onFinish(): void {
        window.gameEnd && window.gameEnd();
    }

    public installHandle(): void {
        console.log("install");

        Constants.ironSource.isEndGame = true;
        this.AudioManager.stopAllSound();
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
                mraid.open("https://play.google.com/store/apps/details?id=com.mergemaster.dinosaurs");
                return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id1627953728?mt=8");
                return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.mergemaster.dinosaurs");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    }
}

