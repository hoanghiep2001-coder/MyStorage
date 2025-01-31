import { _decorator, Component, log, Node } from 'cc';
import { SoundController } from './SoundController';
const { ccclass, property } = _decorator;

 
@ccclass('GameController')
export class GameController extends Component {
    protected start(): void {
        window.gameReady && window.gameReady();
    }


    public installHandle(): void {
        log("install")
        SoundController.Instance(SoundController).stopAllSound();
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
                mraid.open("https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas");
                return;
            }

            // if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
            //     mraid.open("https://itunes.apple.com/us/app/id6689494845?mt=8");
            //     return;
            // }

            mraid.open("https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    }
}
