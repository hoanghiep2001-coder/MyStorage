System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, screen, view, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, JoyStick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      screen = _cc.screen;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3658qOQadEYZt80EqPpq5n", "JoyStick", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JoyStick", JoyStick = (_dec = ccclass("JoyStick"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class JoyStick extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "stick", _descriptor, this);
        }

        start() {
          console.log(this.node.position);
        }

        onLoad() {
          this.node.on(cc.Node.EventType.TOUCH_START, this.stickStart, this);
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this.stickMove, this);
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.stickEnd, this);
          this.node.on(cc.Node.EventType.TOUCH_END, this.stickEnd, this);
        }

        stickStart(event) {
          var screen = event.getUILocation();
          var pos = this.convertToLocalLocation(screen);
          this.stick.setPosition(pos);
        }

        stickMove(event) {
          console.log(event.getUILocation());
        }

        stickEnd(event) {
          this.node.setPosition(0, 0, 0);
        }

        convertToLocalLocation(value) {
          var width = view.getFrameSize().width;
          var height = view.getFrameSize().height;
          var screenX = screen.windowSize.width;
          var screenY = screen.windowSize.height;
          var localX = value.x * width / screenX - width / 2;
          var localY = value.y * height / screenY - height / 2;
          var result = new cc.Vec3(localX, localY, 0);
          return result;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=JoyStick.js.map