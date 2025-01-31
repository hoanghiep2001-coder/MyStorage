
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/lcc-ui-sorting-group/engine-extend/node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0c38KI25NEaKsqDjvCBZ0V', 'node');
// lcc-ui-sorting-group/engine-extend/node.ts

//@ts-ignore
var nodeMemPool = require('./trans-pool/index').NodeMemPool;
if (!('sortingPriority' in cc.Node.prototype)) {
    Object.defineProperty(cc.Node.prototype, 'sortingPriority', {
        get: function () {
            return this._sortingPriority;
        },
        set: function (value) {
            this._sortingPriority = value;
            // console.log(`sortingPriority ${this.name} ${value}`);
            if (CC_JSB) {
                this._sortingPriorityProxy[0] = value;
            }
        },
        enumerable: true
    });
    Object.defineProperty(cc.Node.prototype, 'sortingEnabled', {
        get: function () {
            return this._sortingEnabled;
        },
        set: function (value) {
            this._sortingEnabled = value;
            // console.log(`sortingEnabled ${this.name} ${value}`);
            if (CC_JSB) {
                this._sortingEnabledProxy[0] = value ? 1 : 0;
            }
        },
        enumerable: true
    });
}
if (CC_JSB) {
    //@ts-ignore
    cc.Node.prototype._initDataFromPool = function () {
        if (!this._spaceInfo) {
            if (CC_EDITOR || CC_TEST) {
                this._spaceInfo = {
                    trs: new Float64Array(10),
                    localMat: new Float64Array(16),
                    worldMat: new Float64Array(16),
                };
            }
            else {
                this._spaceInfo = nodeMemPool.pop();
            }
        }
        var spaceInfo = this._spaceInfo;
        this._matrix = cc.mat4(spaceInfo.localMat);
        cc.Mat4.identity(this._matrix);
        this._worldMatrix = cc.mat4(spaceInfo.worldMat);
        cc.Mat4.identity(this._worldMatrix);
        this._localMatDirty = 0xffff;
        this._worldMatDirty = true;
        this._sortingPriorityProxy = spaceInfo.sortingPriority;
        this._sortingEnabledProxy = spaceInfo.sortingEnabled;
        var trs = this._trs = spaceInfo.trs;
        trs[0] = 0; // position.x
        trs[1] = 0; // position.y
        trs[2] = 0; // position.z
        trs[3] = 0; // rotation.x
        trs[4] = 0; // rotation.y
        trs[5] = 0; // rotation.z
        trs[6] = 1; // rotation.w
        trs[7] = 1; // scale.x
        trs[8] = 1; // scale.y
        trs[9] = 1; // scale.z
    };
    //@ts-ignore
    cc.Node.prototype._backDataIntoPool = function () {
        if (!(CC_EDITOR || CC_TEST)) {
            // push back to pool
            nodeMemPool.push(this._spaceInfo);
            this._sortingPriorityProxy = null;
            this._sortingEnabledProxy = null;
            this._matrix = null;
            this._worldMatrix = null;
            this._trs = null;
            this._spaceInfo = null;
        }
    };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbGNjLXVpLXNvcnRpbmctZ3JvdXBcXGVuZ2luZS1leHRlbmRcXG5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsWUFBWTtBQUNaLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQTtBQTJCN0QsSUFBRyxDQUFDLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQztJQUN6QyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1FBQ3hELEdBQUcsRUFBRTtZQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7UUFDRCxHQUFHLEVBQUUsVUFBUyxLQUFLO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5Qix3REFBd0Q7WUFDeEQsSUFBRyxNQUFNLEVBQUM7Z0JBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN6QztRQUNMLENBQUM7UUFDRCxVQUFVLEVBQUUsSUFBSTtLQUNuQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFO1FBQ3ZELEdBQUcsRUFBRTtZQUNELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsR0FBRyxFQUFFLFVBQVMsS0FBSztZQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLHVEQUF1RDtZQUN2RCxJQUFHLE1BQU0sRUFBQztnQkFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRDtR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Q0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNMLENBQUMsQ0FBQTtDQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vQHRzLWlnbm9yZVxyXG5jb25zdCBub2RlTWVtUG9vbCA9IHJlcXVpcmUoJy4vdHJhbnMtcG9vbC9pbmRleCcpLk5vZGVNZW1Qb29sXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBjYyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE5vZGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaOkuW6j+S8mOWFiOe6pyAtIHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBfc29ydGluZ1ByaW9yaXR5Om51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5o6S5bqP5LyY5YWI57qnXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc29ydGluZ1ByaW9yaXR5Om51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5o6S5bqP5LyY5L2/6IO9IC0gcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9zb3J0aW5nRW5hYmxlZDpib29sZWFuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmjpLluo/kvJjkvb/og71cclxuICAgICAgICAgKi9cclxuICAgICAgICBzb3J0aW5nRW5hYmxlZDpib29sZWFuO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZighKCdzb3J0aW5nUHJpb3JpdHknIGluIGNjLk5vZGUucHJvdG90eXBlKSl7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2MuTm9kZS5wcm90b3R5cGUsICdzb3J0aW5nUHJpb3JpdHknLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zb3J0aW5nUHJpb3JpdHk7IFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkgeyBcclxuICAgICAgICAgICAgdGhpcy5fc29ydGluZ1ByaW9yaXR5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzb3J0aW5nUHJpb3JpdHkgJHt0aGlzLm5hbWV9ICR7dmFsdWV9YCk7XHJcbiAgICAgICAgICAgIGlmKENDX0pTQil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0aW5nUHJpb3JpdHlQcm94eVswXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2MuTm9kZS5wcm90b3R5cGUsICdzb3J0aW5nRW5hYmxlZCcsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkgeyBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvcnRpbmdFbmFibGVkOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHsgXHJcbiAgICAgICAgICAgIHRoaXMuX3NvcnRpbmdFbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzb3J0aW5nRW5hYmxlZCAke3RoaXMubmFtZX0gJHt2YWx1ZX1gKTtcclxuICAgICAgICAgICAgaWYoQ0NfSlNCKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRpbmdFbmFibGVkUHJveHlbMF0gPSB2YWx1ZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5cclxuaWYoQ0NfSlNCKXtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY2MuTm9kZS5wcm90b3R5cGUuX2luaXREYXRhRnJvbVBvb2wgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICghdGhpcy5fc3BhY2VJbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChDQ19FRElUT1IgfHwgQ0NfVEVTVCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3BhY2VJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyczogbmV3IEZsb2F0NjRBcnJheSgxMCksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxNYXQ6IG5ldyBGbG9hdDY0QXJyYXkoMTYpLFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkTWF0OiBuZXcgRmxvYXQ2NEFycmF5KDE2KSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcGFjZUluZm8gPSBub2RlTWVtUG9vbC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNwYWNlSW5mbyA9IHRoaXMuX3NwYWNlSW5mbztcclxuICAgICAgICB0aGlzLl9tYXRyaXggPSBjYy5tYXQ0KHNwYWNlSW5mby5sb2NhbE1hdCk7XHJcbiAgICAgICAgY2MuTWF0NC5pZGVudGl0eSh0aGlzLl9tYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuX3dvcmxkTWF0cml4ID0gY2MubWF0NChzcGFjZUluZm8ud29ybGRNYXQpO1xyXG4gICAgICAgIGNjLk1hdDQuaWRlbnRpdHkodGhpcy5fd29ybGRNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuX2xvY2FsTWF0RGlydHkgPSAweGZmZmY7XHJcbiAgICAgICAgdGhpcy5fd29ybGRNYXREaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc29ydGluZ1ByaW9yaXR5UHJveHkgPSBzcGFjZUluZm8uc29ydGluZ1ByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuX3NvcnRpbmdFbmFibGVkUHJveHkgPSBzcGFjZUluZm8uc29ydGluZ0VuYWJsZWQ7XHJcblxyXG4gICAgICAgIGxldCB0cnMgPSB0aGlzLl90cnMgPSBzcGFjZUluZm8udHJzO1xyXG4gICAgICAgIHRyc1swXSA9IDA7IC8vIHBvc2l0aW9uLnhcclxuICAgICAgICB0cnNbMV0gPSAwOyAvLyBwb3NpdGlvbi55XHJcbiAgICAgICAgdHJzWzJdID0gMDsgLy8gcG9zaXRpb24uelxyXG4gICAgICAgIHRyc1szXSA9IDA7IC8vIHJvdGF0aW9uLnhcclxuICAgICAgICB0cnNbNF0gPSAwOyAvLyByb3RhdGlvbi55XHJcbiAgICAgICAgdHJzWzVdID0gMDsgLy8gcm90YXRpb24uelxyXG4gICAgICAgIHRyc1s2XSA9IDE7IC8vIHJvdGF0aW9uLndcclxuICAgICAgICB0cnNbN10gPSAxOyAvLyBzY2FsZS54XHJcbiAgICAgICAgdHJzWzhdID0gMTsgLy8gc2NhbGUueVxyXG4gICAgICAgIHRyc1s5XSA9IDE7IC8vIHNjYWxlLnpcclxuICAgIH1cclxuXHJcbiAgICAvL0B0cy1pZ25vcmVcclxuICAgIGNjLk5vZGUucHJvdG90eXBlLl9iYWNrRGF0YUludG9Qb29sID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCEoQ0NfRURJVE9SIHx8IENDX1RFU1QpKSB7XHJcbiAgICAgICAgICAgIC8vIHB1c2ggYmFjayB0byBwb29sXHJcbiAgICAgICAgICAgIG5vZGVNZW1Qb29sLnB1c2godGhpcy5fc3BhY2VJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5fc29ydGluZ1ByaW9yaXR5UHJveHkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zb3J0aW5nRW5hYmxlZFByb3h5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fbWF0cml4ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fd29ybGRNYXRyaXggPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl90cnMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zcGFjZUluZm8gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=