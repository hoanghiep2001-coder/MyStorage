System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, sys, _dec, _class, _crd, ccclass, property, AdsManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ddd61noBMpG1aVpcMjRI/dv", "AdsManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = AdsManager
       * DateTime = Tue May 14 2024 16:41:51 GMT+0700 (Indochina Time)
       * Author = PhongDNRocket123
       * FileBasename = AdsManager.ts
       * FileBasenameNoExtension = AdsManager
       * URL = db://assets/Scripts/AdsManager.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("AdsManager", AdsManager = (_dec = ccclass('AdsManager'), _dec(_class = class AdsManager extends Component {
        onLoad() {}

        start() {
          window.gameReady && window.gameReady();
        }

        installHandle() {
          console.log("install");
          window.gameEnd && window.gameEnd(); //If ad network is tiktok

          if (typeof playableSDK != "undefined") {
            window.playableSDK.openAppStore();
            return;
          } // If ad network is google ads


          if (typeof ExitApi != "undefined") {
            ExitApi.exit();
            return;
          } // If ad netwrok is ironsources


          if (typeof dapi != "undefined") {
            dapi.openStoreUrl();
            return;
          } // If ad network support MRAID 2.0


          if (typeof mraid != "undefined") {
            if (sys.os == sys.OS_ANDROID || sys.os == sys.ANDROID) {
              mraid.open("https://play.google.com/store/apps/details?id=com.an.shootingball.billiards3d");
              return;
            }

            if (sys.os == sys.OS_IOS || sys.os == sys.IPHONE || sys.os == sys.IPAD) {
              mraid.open("https://itunes.apple.com/us/app/id6450196613?mt=8");
              return;
            }

            mraid.open("https://play.google.com/store/apps/details?id=com.an.shootingball.billiards3d");
            return;
          } // If ad network is mindwork. window alway avaiable so skip undefined check


          window.install && window.install();
        }

      }) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AdsManager.js.map