// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameInfo from "../Const/GameInfo";
import { SoundController } from "./SoundController";

const { ccclass, property } = cc._decorator;

@ccclass
export class GameController extends cc.Component {

    protected start(): void {
        window.gameReady && window.gameReady();
    }


    public installHandle(): void {

        SoundController.Instance(SoundController).stopAllSound();

        window.gameEnd && window.gameEnd();



        //If ad network is tiktok
        if (typeof (playableSDK) != "undefined") {
            window.playableSDK.openAppStore();
            return;
        }

        // If ad network is google ads
        if (typeof (ExitApi) != "undefined") {
            cc.log("Call exit api")
            ExitApi.exit();
            return;
        }

        // If ad netwrok is ironsources
        if (typeof (dapi) != "undefined") {
            cc.log("Call dapi");
            dapi.openStoreUrl();
            return;
        }

        // If ad network support MRAID 2.0
        if (typeof (mraid) != "undefined") {
            if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID) {
                mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish");
                return;
            }

            if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD) {
                mraid.open("https://itunes.apple.com/us/com.fishio.hungryfish?mt=8");
                return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.fishio.hungryfish");
            return;
        }


        const linkStore = 'https://play.google.com/store/apps/details?id=com.fishio.hungryfish';

        // Nếu không, sử dụng cách mở URL thông thường
        if (typeof window !== 'undefined') {
            window.open(linkStore, '_blank'); // Mở link trong tab mới
            return;
        }


        // If ad network is mindword. window alway avaiable so skip undefined check
        window.install && window.install();
    }

}
