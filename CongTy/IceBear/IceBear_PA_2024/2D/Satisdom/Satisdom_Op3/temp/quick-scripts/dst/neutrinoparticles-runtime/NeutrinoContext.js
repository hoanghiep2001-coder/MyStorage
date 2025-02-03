
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5500GPiiNIKKYfuHMFpUCR', 'NeutrinoContext');
// NeutrinoContext.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Neutrino = require("./neutrinoparticles.js/neutrinoparticles.umd");
var _a = cc._decorator, ccclass = _a.ccclass, mixins = _a.mixins;
var materialDescs = [
    { uuid: '97KN8e0flOjpWQPC0zIOoR', name: 'NeutrinoNormal' },
    { uuid: 'c5T9A8r8FHY5DeeJSjTP0k', name: 'NeutrinoNormalPremul' },
    { uuid: '369MNzEcVL3Jj5UF9gvCfR', name: 'NeutrinoAdd' },
    { uuid: 'baTMgpxLlFqrJF04VcDxPF', name: 'NeutrinoAddPremul' },
    { uuid: 'a74/Nyb0dDYrv5zAZoAlVP', name: 'NeutrinoMultiply' },
    { uuid: '04mmqJExZKjqgZH4ovqGK7', name: 'NeutrinoMultiplyPremul' },
];
var materialsBundleName = 'neutrinoparticles-materials';
var NeutrinoContext = /** @class */ (function () {
    function NeutrinoContext() {
        this.neutrinoContext = new Neutrino.Context();
        this.materials = new Array(materialDescs.length);
        this._materialsLeftToLoad = this.materials.length;
        this._bundlesLeftToLoad = 0;
        this._noiseGenerationStep = null;
        this._noiseGenerated = false;
        this._texturesBundle = null;
        cc.EventTarget.call(this);
        if (CC_DEV) {
            this._startLoadingForDev();
        }
        else {
            this._startLoadingForBuild();
        }
    }
    NeutrinoContext_1 = NeutrinoContext;
    NeutrinoContext.instance = function () {
        if (!this._singleInstance) {
            this._singleInstance = new NeutrinoContext_1();
        }
        return this._singleInstance;
    };
    NeutrinoContext.prototype.loaded = function () {
        return this._materialsLeftToLoad === 0 && this._bundlesLeftToLoad === 0;
    };
    NeutrinoContext.prototype.startNoiseTextureGeneration = function () {
        if (this._noiseGenerated) {
            return;
        }
        var _this = this;
        var noiseGenerator = new this.neutrinoContext.NoiseGenerator();
        var timerId;
        this._noiseGenerationStep = function () {
            for (var i = 0; i < 100; ++i) {
                if (noiseGenerator.step()) {
                    clearInterval(timerId);
                    _this._noiseGenerationStep = null;
                    _this._noiseGenerated = true;
                    noiseGenerator = null;
                    break;
                }
            }
        };
        timerId = setInterval(this._noiseGenerationStep, 0);
    };
    NeutrinoContext.prototype.ensureNoiseTextureIsGenerated = function () {
        if (this._noiseGenerated) {
            return;
        }
        if (!this._noiseGenerationStep) {
            this.startNoiseTextureGeneration();
        }
        while (this._noiseGenerationStep) {
            this._noiseGenerationStep();
        }
    };
    NeutrinoContext.prototype.texturesBundle = function () {
        return this._texturesBundle;
    };
    NeutrinoContext.prototype._startLoadingForDev = function () {
        var _this = this;
        var _loop_1 = function (matIndex) {
            var _matIndex = matIndex;
            cc.assetManager.loadAny(materialDescs[matIndex].uuid, function (err, material) {
                if (err) {
                    cc.error("NeutrinoContext: can't load material with UUID='" + materialDescs[_matIndex].uuid + "'. " + err);
                    return;
                }
                _this._materialLoaded(material, _matIndex);
            });
        };
        for (var matIndex = 0; matIndex < this.materials.length; ++matIndex) {
            _loop_1(matIndex);
        }
    };
    NeutrinoContext.prototype._startLoadingForBuild = function () {
        var _this_1 = this;
        var _this = this;
        ++this._bundlesLeftToLoad;
        cc.assetManager.loadBundle(materialsBundleName, function (err, bundle) {
            if (err) {
                cc.error("NeutrinoContext: failed to load bundle '" + materialsBundleName + "'. " + err);
                return;
            }
            --_this_1._bundlesLeftToLoad;
            var _loop_2 = function (matIndex) {
                var _matIndex = matIndex;
                bundle.load(materialDescs[matIndex].name, function (err, material) {
                    if (err) {
                        cc.error("NeutrinoContext: can't load material '" + materialDescs[_matIndex].name + "'. " + err);
                        return;
                    }
                    _this._materialLoaded(material, _matIndex);
                });
            };
            for (var matIndex = 0; matIndex < _this_1.materials.length; ++matIndex) {
                _loop_2(matIndex);
            }
        });
        ++this._bundlesLeftToLoad;
        var texturesBundleName = 'neutrinoparticles/textures';
        cc.assetManager.loadBundle(texturesBundleName, function (err, bundle) {
            if (err) {
                cc.error("NeutrinoContext: failed to load bundle '" + texturesBundleName + "'");
                return;
            }
            cc.log("NeutrinoContext: Loaded bundle " + texturesBundleName);
            --_this_1._bundlesLeftToLoad;
            _this_1._texturesBundle = bundle;
            _this_1._checkAndEmitLoadedStatus();
        });
    };
    NeutrinoContext.prototype._materialLoaded = function (material, index) {
        this.materials[index] = material;
        --this._materialsLeftToLoad;
        this._checkAndEmitLoadedStatus();
    };
    NeutrinoContext.prototype._checkAndEmitLoadedStatus = function () {
        if (this.loaded()) {
            this.emit('loaded');
        }
    };
    var NeutrinoContext_1;
    NeutrinoContext = NeutrinoContext_1 = __decorate([
        ccclass('NeutrinoContext'),
        mixins(cc.EventTarget)
    ], NeutrinoContext);
    return NeutrinoContext;
}());
exports.default = NeutrinoContext;
cc.game.once(cc.game.EVENT_GAME_INITED, function () {
    NeutrinoContext.instance().startNoiseTextureGeneration();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Db250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXlFO0FBRW5FLElBQUEsS0FBb0IsRUFBRSxDQUFDLFVBQVUsRUFBaEMsT0FBTyxhQUFBLEVBQUUsTUFBTSxZQUFpQixDQUFDO0FBRXhDLElBQU0sYUFBYSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFO0lBQzVELEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRTtDQUNyRSxDQUFDO0FBRUYsSUFBTSxtQkFBbUIsR0FBRyw2QkFBNkIsQ0FBQztBQUkxRDtJQVdJO1FBVkEsb0JBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxjQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR3BDLHlCQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdDLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2Qix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFHM0IsRUFBRSxDQUFDLFdBQVcsQ0FB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QUFDLEdBQUcsQ0FBQyxvQ0FBa0Msa0JBQW9CLENBQUMsQ0FBQztZQUUvRCxFQUFFLE9BQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUMxQixPQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUM5QixPQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx5Q0FBZSxHQUF2QixVQUF3QixRQUFRLEVBQUUsS0FBSztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUM1QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU8sbURBQXlCLEdBQWpDO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7SUE5SWdCLGVBQWU7UUFGbkMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQzFCLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO09BQ0YsZUFBZSxDQStJbkM7SUFBRCxzQkFBQztDQS9JRCxBQStJQyxJQUFBO2tCQS9Jb0IsZUFBZTtBQWlKcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtJQUNwQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE5ldXRyaW5vIGZyb20gJy4vbmV1dHJpbm9wYXJ0aWNsZXMuanMvbmV1dHJpbm9wYXJ0aWNsZXMudW1kJztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBtaXhpbnN9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IG1hdGVyaWFsRGVzY3MgPSBbXHJcbiAgICB7IHV1aWQ6ICc5N0tOOGUwZmxPanBXUVBDMHpJT29SJywgbmFtZTogJ05ldXRyaW5vTm9ybWFsJyB9LFxyXG4gICAgeyB1dWlkOiAnYzVUOUE4cjhGSFk1RGVlSlNqVFAwaycsIG5hbWU6ICdOZXV0cmlub05vcm1hbFByZW11bCcgfSxcclxuICAgIHsgdXVpZDogJzM2OU1OekVjVkwzSmo1VUY5Z3ZDZlInLCBuYW1lOiAnTmV1dHJpbm9BZGQnIH0sXHJcbiAgICB7IHV1aWQ6ICdiYVRNZ3B4TGxGcXJKRjA0VmNEeFBGJywgbmFtZTogJ05ldXRyaW5vQWRkUHJlbXVsJyB9LFxyXG4gICAgeyB1dWlkOiAnYTc0L055YjBkRFlydjV6QVpvQWxWUCcsIG5hbWU6ICdOZXV0cmlub011bHRpcGx5JyB9LFxyXG4gICAgeyB1dWlkOiAnMDRtbXFKRXhaS2pxZ1pING92cUdLNycsIG5hbWU6ICdOZXV0cmlub011bHRpcGx5UHJlbXVsJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgbWF0ZXJpYWxzQnVuZGxlTmFtZSA9ICduZXV0cmlub3BhcnRpY2xlcy1tYXRlcmlhbHMnO1xyXG5cclxuQGNjY2xhc3MoJ05ldXRyaW5vQ29udGV4dCcpXHJcbkBtaXhpbnMoY2MuRXZlbnRUYXJnZXQpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldXRyaW5vQ29udGV4dCB7XHJcbiAgICBuZXV0cmlub0NvbnRleHQgPSBuZXcgTmV1dHJpbm8uQ29udGV4dCgpO1xyXG4gICAgbWF0ZXJpYWxzID0gbmV3IEFycmF5KG1hdGVyaWFsRGVzY3MubGVuZ3RoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2luZ2xlSW5zdGFuY2U6IE5ldXRyaW5vQ29udGV4dDtcclxuICAgIHByaXZhdGUgX21hdGVyaWFsc0xlZnRUb0xvYWQgPSB0aGlzLm1hdGVyaWFscy5sZW5ndGg7XHJcbiAgICBwcml2YXRlIF9idW5kbGVzTGVmdFRvTG9hZCA9IDA7XHJcbiAgICBwcml2YXRlIF9ub2lzZUdlbmVyYXRpb25TdGVwID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25vaXNlR2VuZXJhdGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF90ZXh0dXJlc0J1bmRsZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIGNjLkV2ZW50VGFyZ2V0LmNhbGwodGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChDQ19ERVYpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nRm9yRGV2KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nRm9yQnVpbGQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlKCkgOiBOZXV0cmlub0NvbnRleHQge1xyXG4gICAgICAgIGlmICghdGhpcy5fc2luZ2xlSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2luZ2xlSW5zdGFuY2UgPSBuZXcgTmV1dHJpbm9Db250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaW5nbGVJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hdGVyaWFsc0xlZnRUb0xvYWQgPT09IDAgJiYgdGhpcy5fYnVuZGxlc0xlZnRUb0xvYWQgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ub2lzZUdlbmVyYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBub2lzZUdlbmVyYXRvciA9IG5ldyB0aGlzLm5ldXRyaW5vQ29udGV4dC5Ob2lzZUdlbmVyYXRvcigpO1xyXG4gICAgICAgIGxldCB0aW1lcklkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX25vaXNlR2VuZXJhdGlvblN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2lzZUdlbmVyYXRvci5zdGVwKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbm9pc2VHZW5lcmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vaXNlR2VuZXJhdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbCh0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnN1cmVOb2lzZVRleHR1cmVJc0dlbmVyYXRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fbm9pc2VHZW5lcmF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9ub2lzZUdlbmVyYXRpb25TdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25vaXNlR2VuZXJhdGlvblN0ZXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dHVyZXNCdW5kbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVzQnVuZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0TG9hZGluZ0ZvckRldigpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzOyAgICAgICAgXHJcblxyXG4gICAgICAgIGZvciAobGV0IG1hdEluZGV4ID0gMDsgbWF0SW5kZXggPCB0aGlzLm1hdGVyaWFscy5sZW5ndGg7ICsrbWF0SW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IF9tYXRJbmRleCA9IG1hdEluZGV4O1xyXG5cclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRBbnkobWF0ZXJpYWxEZXNjc1ttYXRJbmRleF0udXVpZCwgKGVyciwgbWF0ZXJpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgTmV1dHJpbm9Db250ZXh0OiBjYW4ndCBsb2FkIG1hdGVyaWFsIHdpdGggVVVJRD0nJHttYXRlcmlhbERlc2NzW19tYXRJbmRleF0udXVpZH0nLiAke2Vycn1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fbWF0ZXJpYWxMb2FkZWQobWF0ZXJpYWwsIF9tYXRJbmRleCk7XHJcbiAgICAgICAgICAgIH0pOyAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydExvYWRpbmdGb3JCdWlsZCgpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzOyAgXHJcblxyXG4gICAgICAgICsrdGhpcy5fYnVuZGxlc0xlZnRUb0xvYWQ7XHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUobWF0ZXJpYWxzQnVuZGxlTmFtZSwgKGVyciwgYnVuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBOZXV0cmlub0NvbnRleHQ6IGZhaWxlZCB0byBsb2FkIGJ1bmRsZSAnJHttYXRlcmlhbHNCdW5kbGVOYW1lfScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAtLXRoaXMuX2J1bmRsZXNMZWZ0VG9Mb2FkO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbWF0SW5kZXggPSAwOyBtYXRJbmRleCA8IHRoaXMubWF0ZXJpYWxzLmxlbmd0aDsgKyttYXRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9tYXRJbmRleCA9IG1hdEluZGV4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBidW5kbGUubG9hZChtYXRlcmlhbERlc2NzW21hdEluZGV4XS5uYW1lLCAoZXJyLCBtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYE5ldXRyaW5vQ29udGV4dDogY2FuJ3QgbG9hZCBtYXRlcmlhbCAnJHttYXRlcmlhbERlc2NzW19tYXRJbmRleF0ubmFtZX0nLiAke2Vycn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbWF0ZXJpYWxMb2FkZWQobWF0ZXJpYWwsIF9tYXRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICArK3RoaXMuX2J1bmRsZXNMZWZ0VG9Mb2FkO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVzQnVuZGxlTmFtZSA9ICduZXV0cmlub3BhcnRpY2xlcy90ZXh0dXJlcyc7XHJcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUodGV4dHVyZXNCdW5kbGVOYW1lLCAoZXJyLCBidW5kbGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYE5ldXRyaW5vQ29udGV4dDogZmFpbGVkIHRvIGxvYWQgYnVuZGxlICcke3RleHR1cmVzQnVuZGxlTmFtZX0nYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhgTmV1dHJpbm9Db250ZXh0OiBMb2FkZWQgYnVuZGxlICR7dGV4dHVyZXNCdW5kbGVOYW1lfWApO1xyXG5cclxuICAgICAgICAgICAgLS10aGlzLl9idW5kbGVzTGVmdFRvTG9hZDtcclxuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZXNCdW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQW5kRW1pdExvYWRlZFN0YXR1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21hdGVyaWFsTG9hZGVkKG1hdGVyaWFsLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzW2luZGV4XSA9IG1hdGVyaWFsO1xyXG4gICAgICAgIC0tdGhpcy5fbWF0ZXJpYWxzTGVmdFRvTG9hZDtcclxuICAgICAgICB0aGlzLl9jaGVja0FuZEVtaXRMb2FkZWRTdGF0dXMoKTsgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tBbmRFbWl0TG9hZGVkU3RhdHVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbG9hZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jYy5nYW1lLm9uY2UoY2MuZ2FtZS5FVkVOVF9HQU1FX0lOSVRFRCwgKCkgPT4ge1xyXG4gICAgTmV1dHJpbm9Db250ZXh0Lmluc3RhbmNlKCkuc3RhcnROb2lzZVRleHR1cmVHZW5lcmF0aW9uKCk7XHJcbn0pOyJdfQ==