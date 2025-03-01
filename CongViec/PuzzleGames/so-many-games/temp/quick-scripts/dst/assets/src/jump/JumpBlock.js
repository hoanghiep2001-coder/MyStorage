
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/jump/JumpBlock.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f59bXfwKJPCLY3438CoYsJ', 'JumpBlock');
// src/jump/JumpBlock.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var Block = /** @class */ (function () {
    function Block(head, length) {
        this.head = head;
        this.length = length;
    }
    Object.defineProperty(Block.prototype, "tail", {
        get: function () {
            return this.head + this.length - 1;
        },
        enumerable: false,
        configurable: true
    });
    return Block;
}());
exports.Block = Block;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxqdW1wXFxKdW1wQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQVFJLGVBQW1CLElBQVcsRUFBQyxNQUFhO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFQRCxzQkFBVyx1QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBTUwsWUFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmxvY2t7XHJcblxyXG4gICAgcHVibGljIGhlYWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgdGFpbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkK3RoaXMubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGhlYWQ6bnVtYmVyLGxlbmd0aDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWQgPSBoZWFkO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==