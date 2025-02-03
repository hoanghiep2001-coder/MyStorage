"use strict";
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