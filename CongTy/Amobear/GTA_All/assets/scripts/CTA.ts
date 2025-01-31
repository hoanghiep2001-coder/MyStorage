import { _decorator, Component, easing, Enum, Input, input, Node, tween, Vec3, view } from 'cc';
import { SoundController } from './Controller/SoundController';
import { GameInfo } from './CONST/GameInfo';
import { GameController } from './Controller/GameController';
const { ccclass, property } = _decorator;
// declare var ExitApi;
// declare var mraid;
// declare var dapi;
// declare var window;
// declare var FbPlayableAd;

// enum AdNetworks {
//     GoogleAds,
//     ironSource,
//     UnityAds,
//     AppLovin,
//     Mintegral,
//     FbAds
// }


@ccclass('CTA')
export class CTA extends Component {
    // @property({
    //     type: Enum(AdNetworks)    // call Enum
    // })
    // myNetwork: AdNetworks = AdNetworks.UnityAds;

    @property(GameController)
    GameController: GameController = null;

    @property(Node)
    Icon: Node = null;

    @property(Node)
    btn: Node = null;


    start() {
        tween(this.btn)
        .repeatForever(
            tween(this.btn)
                .to(0.5, { scale: new Vec3(0.5, 0.5, 0.5) })
                .to(0.5, { scale: new Vec3(0.45, 0.45, 0.45) }, { easing: easing.elasticOut })
        ).start();

        // SoundController.Instance(SoundController).playSound("BassSound");

        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
    }


    onTouchStart() {
        this.GameController.installHandle();
        // window.gameEnd && window.gameEnd();

        /****
         * ----------------------------------------------
         *                                              |
         *                                              |
         *                 Hiệp Dương                   |
         *                                              |
         *                                              |
         * ----------------------------------------------
        ****/

        // const linkStore = 'https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas';

        // // Nếu môi trường hỗ trợ mraid
        // if (typeof mraid !== 'undefined') {
        //     mraid.open(linkStore);
        // }
        // // Nếu không, sử dụng cách mở URL thông thường
        // else if (typeof window !== 'undefined') {
        //     window.open(linkStore, '_blank'); // Mở link trong tab mới
        // }
        // // Thêm fallback nếu cần
        // else {
        //     console.log('Không thể mở Google Play Store. Link:', linkStore);
        // }


        /****
         * ----------------------------------------------
         *                                              |
         *                                              |
         *                  Dev cũ                      |
         *                                              |
         *                                              |
         * ----------------------------------------------
        ****/
        // switch (this.myNetwork) {
        //     case AdNetworks.AppLovin:
        //     case AdNetworks.UnityAds:
        //         mraid.open('https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas');
        //         console.log('AppLovin & UnityAds');
        //         break;
        //     case AdNetworks.GoogleAds:
        //         ExitApi.exit('https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas');
        //         console.log('GoogleAds');
        //         break;
        //     case AdNetworks.Mintegral:
        //         window.install && window.install('https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas');
        //         console.log('Mintegral');
        //         break;
        //     case AdNetworks.ironSource:
        //         dapi.openStoreUrl('https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas');
        //         console.log('ironSource');
        //         break;
        //     case AdNetworks.FbAds:
        //         FbPlayableAd.onCTAClick('https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas');
        //         console.log('FacebookAds');
        //         break;
        //     default:
        //         mraid.open('https://play.google.com/store/apps/details?id=com.real.gangster.crime.city.vegas');
        //         console.log('AppLovin & UnityAds');
        //         break;
        // }
    }
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
