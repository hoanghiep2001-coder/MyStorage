import { _decorator, Component, game, log, Node, screen, view } from 'cc';
import { SoundController } from './SoundController';
import { CONST } from '../Const/CONST';
import { GameInfo } from '../Const/GameInfo';
import { IronSource } from '../AdHelper/IronSource';
const { ccclass, property } = _decorator;


@ccclass('GameController')
export class GameController extends Component {


    private onFinish(): void {
        window.gameEnd && window.gameEnd();
    }


    protected start(): void {
        window.gameReady && window.gameReady();

        // this.handleOrientation();

        // view.setResizeCallback(() => {
        //     this.handleOrientation();
        // });

        // SoundController.Instance(SoundController).PlaySound(CONST.SoundTrack.bgSound);
    }


    // private handleOrientation(): void {
    //     if (screen.windowSize.width > screen.windowSize.height) {
    //         this.rotatePopup.active = false;
    //         GameInfo.isCanTouch = true;
    //     } else {
    //         this.rotatePopup.active = true;
    //         GameInfo.isCanTouch = false;
    //     }
    // }


    public installHandle(): void {
        // IronSource.handleMuteSoundIronSource();
        console.log("install");

        IronSource.isEndGame = true;
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
                mraid.open("https://play.google.com/store/apps/details?id=com.bus.sort.color.car.parkingjam");
                return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/app/id6689494845?mt=8");
                return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.bus.sort.color.car.parkingjam");
            return;
        }
        // If ad network is mindwork. window alway avaiable so skip undefined check
        window.install && window.install();
    }


}
