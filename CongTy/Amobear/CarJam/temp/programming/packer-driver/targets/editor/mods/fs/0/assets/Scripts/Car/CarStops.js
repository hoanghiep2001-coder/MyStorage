System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, GameInfo, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, CarStops;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarSkin(extras) {
    _reporterNs.report("CarSkin", "./CarSkin", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1922fOJWDZMRp4O0GKv7em2", "CarStops", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarStops", CarStops = (_dec = ccclass('CarStops'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property([Node]), _dec(_class = (_class2 = (_temp = class CarStops extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "turnLeftPoint", _descriptor, this);

          _initializerDefineProperty(this, "turnRightPoint", _descriptor2, this);

          _initializerDefineProperty(this, "Down_turnleftPoint", _descriptor3, this);

          _initializerDefineProperty(this, "donePoint", _descriptor4, this);

          _initializerDefineProperty(this, "CarStops", _descriptor5, this);

          _defineProperty(this, "CarStopsState", [{
            id: 1,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }, {
            id: 2,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }, {
            id: 3,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }, {
            id: 4,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }, {
            id: 5,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }, {
            id: 6,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }, {
            id: 7,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }, {
            id: 8,
            state: false,
            isReady: false,
            colorID: null,
            carSkin: null
          }]);
        }

        updateStopStates(stopPoint, carSkin) {
          // set stop color ID
          this.CarStopsState[stopPoint.id - 1].colorID = carSkin.CarColorId;
          this.CarStopsState[stopPoint.id - 1].carSkin = carSkin; // assign to GameInfo Vars

          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).carStops = this.CarStopsState; // console.log(GameInfo.carStops);
        }

        start() {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "turnLeftPoint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "turnRightPoint", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Down_turnleftPoint", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "donePoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "CarStops", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CarStops.js.map