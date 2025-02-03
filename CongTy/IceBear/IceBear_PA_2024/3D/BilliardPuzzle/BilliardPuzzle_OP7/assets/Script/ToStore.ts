
import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;
import { Responsive } from "./Responsive";
@ccclass('ToStore')
export class ToStore extends Component {

    @property(Responsive)
    Responsive: Responsive;

    start() {
        window.gameReady && window.gameReady();
    }

    onFinish() {
        window.gameEnd && window.gameEnd();
    }

    installHandle() {

        this.Responsive.PauseAudio();
        console.log('store');
        
        this.onFinish();
        if (typeof playableSDK != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }

        // If ad network is google ads
        if (typeof ExitApi != "undefined") {
            ExitApi.exit();
            return;
        }

        // If ad netwrok is ironsources
        if (typeof dapi != "undefined") {
            dapi.openStoreUrl();
            return;
        }

        // If ad network support MRAID 2.0
        if (typeof mraid != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open(
                    "https://play.google.com/store/apps/details?id=com.an.shootingball.billiards3d"
                );
                return;
            }

            if (
                cc.sys.os == cc.sys.OS_IOS ||
                cc.sys.os == cc.sys.IPHONE ||
                cc.sys.os == cc.sys.IPAD
            ) {
                mraid.open("https://itunes.apple.com/us/app/id6450196613?mt=8");
                return;
            }

            mraid.open(
                "https://play.google.com/store/apps/details?id=com.an.shootingball.billiards3d"
            );
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();

    }
}

