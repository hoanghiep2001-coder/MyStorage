System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, Node, tween, Vec3, GameController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, CTA;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./Controller/GameController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45ecbzLGwZPCKDihMz/ATK4", "CTA", undefined);

      ({
        ccclass,
        property
      } = _decorator); // declare var ExitApi;
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

      _export("CTA", CTA = (_dec = ccclass('CTA'), _dec2 = property(_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
        error: Error()
      }), GameController) : GameController), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class CTA extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "GameController", _descriptor, this);

          _initializerDefineProperty(this, "Icon", _descriptor2, this);

          _initializerDefineProperty(this, "btn", _descriptor3, this);
        }

        start() {
          tween(this.btn).repeatForever(tween(this.btn).to(0.5, {
            scale: new Vec3(0.5, 0.5, 0.5)
          }).to(0.5, {
            scale: new Vec3(0.45, 0.45, 0.45)
          }, {
            easing: easing.elasticOut
          })).start(); // SoundController.Instance(SoundController).playSound("BassSound");

          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart() {
          this.GameController.installHandle(); // window.gameEnd && window.gameEnd();

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

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GameController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=CTA.js.map