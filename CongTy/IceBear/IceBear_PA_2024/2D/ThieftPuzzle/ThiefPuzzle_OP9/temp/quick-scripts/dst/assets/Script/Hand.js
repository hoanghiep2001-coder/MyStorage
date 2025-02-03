
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Hand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3697cH7HvJKfaxYpx5bnrPE', 'Hand');
// Script/Hand.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Main: require('Main'),
    Res: require('Res')
  },
  onLoad: function onLoad() {},
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    var _this = this;

    if (otherCollider.node._name == 'Round') {
      this.Main.FlagStatus = "Round";
    }

    if (otherCollider.node._name == 'man1') {
      this.Main.FlagStatus = "God";
      this.Res.FlagMove = false;
      this.Res.FlagStatus = 'Lose';
      setTimeout(function () {
        _this.Res.Flag_Done = true;
      }, 500);
    }
  } // onEndContact(contact, selfCollider, otherCollider) {
  //     if(otherCollider.node._name == 'Round') {
  //         this.Main.FlagStatus = false;
  //     }
  //     if(otherCollider.node._name == 'god') {
  //         this.Main.FlagStatus = false;
  //     }
  // }
  // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIYW5kLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTWFpbiIsInJlcXVpcmUiLCJSZXMiLCJvbkxvYWQiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwibm9kZSIsIl9uYW1lIiwiRmxhZ1N0YXR1cyIsIkZsYWdNb3ZlIiwic2V0VGltZW91dCIsIkZsYWdfRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRUMsT0FBTyxDQUFDLE1BQUQsQ0FESjtBQUVUQyxJQUFBQSxHQUFHLEVBQUVELE9BQU8sQ0FBQyxLQUFEO0FBRkgsR0FIUDtBQVFMRSxFQUFBQSxNQVJLLG9CQVFLLENBRVQsQ0FWSTtBQVlMQyxFQUFBQSxjQVpLLDBCQVlVQyxPQVpWLEVBWW1CQyxZQVpuQixFQVlpQ0MsYUFaakMsRUFZZ0Q7QUFBQTs7QUFDakQsUUFBR0EsYUFBYSxDQUFDQyxJQUFkLENBQW1CQyxLQUFuQixJQUE0QixPQUEvQixFQUF3QztBQUNwQyxXQUFLVCxJQUFMLENBQVVVLFVBQVYsR0FBdUIsT0FBdkI7QUFDSDs7QUFFRCxRQUFHSCxhQUFhLENBQUNDLElBQWQsQ0FBbUJDLEtBQW5CLElBQTRCLE1BQS9CLEVBQXVDO0FBQ25DLFdBQUtULElBQUwsQ0FBVVUsVUFBVixHQUF1QixLQUF2QjtBQUNBLFdBQUtSLEdBQUwsQ0FBU1MsUUFBVCxHQUFvQixLQUFwQjtBQUNBLFdBQUtULEdBQUwsQ0FBU1EsVUFBVCxHQUFzQixNQUF0QjtBQUNBRSxNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLFFBQUEsS0FBSSxDQUFDVixHQUFMLENBQVNXLFNBQVQsR0FBcUIsSUFBckI7QUFDSCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUFDSixHQXpCSSxDQTBCTDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBcENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgTWFpbjogcmVxdWlyZSgnTWFpbicpLFxyXG4gICAgICAgUmVzOiByZXF1aXJlKCdSZXMnKSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIubm9kZS5fbmFtZSA9PSAnUm91bmQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbi5GbGFnU3RhdHVzID0gXCJSb3VuZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5vZGUuX25hbWUgPT0gJ21hbjEnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTWFpbi5GbGFnU3RhdHVzID0gXCJHb2RcIjtcclxuICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ01vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5SZXMuRmxhZ1N0YXR1cyA9ICdMb3NlJztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlcy5GbGFnX0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBvbkVuZENvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICAvLyAgICAgaWYob3RoZXJDb2xsaWRlci5ub2RlLl9uYW1lID09ICdSb3VuZCcpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5NYWluLkZsYWdTdGF0dXMgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgaWYob3RoZXJDb2xsaWRlci5ub2RlLl9uYW1lID09ICdnb2QnKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuTWFpbi5GbGFnU3RhdHVzID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19