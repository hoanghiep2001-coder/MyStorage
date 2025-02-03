
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/NeutrinoComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe372iH4fZOBLxITCZbQxJ2', 'NeutrinoComponent');
// NeutrinoComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var NeutrinoSettings_1 = require("./NeutrinoSettings");
var NeutrinoContext_1 = require("./NeutrinoContext");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// Cached temporary values.
var _gnwprMat0 = new cc.Mat4();
var _gnwprMat1 = new cc.Mat4();
var _gnwprQuat0 = new cc.Quat();
var _gnwprVec0 = new cc.Vec3();
var _uWPM = new cc.Mat4();
var _nwpos = [0, 0, 0, 0];
var _nwrot = [0, 0, 0, 0];
function propertyValueToNpValue(value) {
    if (value instanceof cc.Vec2) {
        return [value.x, value.y];
    }
    else if (value instanceof cc.Vec3) {
        return [value.x, value.y, value.z];
    }
    else {
        return value;
    }
}
var NeutrinoComponent = /** @class */ (function (_super) {
    __extends(NeutrinoComponent, _super);
    function NeutrinoComponent() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.context = null;
        _this_1._neutrinoEffectModel = null;
        _this_1._neutrinoEffect = null;
        _this_1._spriteFrames = null;
        _this_1._emitterPropsOnStart = {};
        _this_1._texturesRemap = null;
        _this_1._waitingForContext = false;
        _this_1._resetInProgress = false;
        _this_1._numTexturesLoading = 0;
        _this_1._errorOnLoad = false;
        _this_1._worldScale = new cc.Vec3();
        _this_1._destructed = false;
        _this_1._serialized = false;
        _this_1._worldParentId = '';
        _this_1._texturesPrefixPath = '';
        _this_1._spriteAtlas = null;
        _this_1._pausedOnStart = false;
        _this_1._pausedGeneratorsOnStart = false;
        // If true, the component will be destroyed when the effect is empty.
        _this_1.destroyWhenEmpty = false;
        // If true, the node of the component will be destroyed when the effect is empty.
        _this_1.destroyNodeWhenEmpty = false;
        return _this_1;
    }
    Object.defineProperty(NeutrinoComponent.prototype, "worldParent", {
        get: function () {
            return this._findWorldParent();
        },
        set: function (value) {
            this._worldParentId = value ? value.uuid : '';
            this._waitForContextAndReset();
            if (CC_EDITOR) {
                var settings = NeutrinoSettings_1.default.instance();
                if (settings) {
                    settings.defaultWorldParent = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "texturesPrefixPath", {
        get: function () {
            return this._texturesPrefixPath;
        },
        set: function (value) {
            this._texturesPrefixPath = value;
            this._waitForContextAndReset();
            if (CC_EDITOR) {
                var settings = NeutrinoSettings_1.default.instance();
                if (settings) {
                    settings.defaultTexturesPrefixPath = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "spriteAtlas", {
        get: function () {
            return this._spriteAtlas;
        },
        set: function (value) {
            this._spriteAtlas = value;
            this._waitForContextAndReset();
            if (CC_EDITOR) {
                var settings = NeutrinoSettings_1.default.instance();
                if (settings) {
                    settings.defaultSpriteAtlas = value;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "pausedOnStart", {
        get: function () {
            return this._pausedOnStart;
        },
        set: function (value) {
            this._pausedOnStart = value;
            this._waitForContextAndReset();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeutrinoComponent.prototype, "pausedGeneratorsOnStart", {
        get: function () {
            return this._pausedGeneratorsOnStart;
        },
        set: function (value) {
            this._pausedGeneratorsOnStart = value;
            this._waitForContextAndReset();
        },
        enumerable: false,
        configurable: true
    });
    NeutrinoComponent.prototype.resetInEditor = function () {
        this._waitForContextAndReset();
    };
    NeutrinoComponent.prototype.onLoad = function () {
        this.context = NeutrinoContext_1.default.instance();
        this.context.ensureNoiseTextureIsGenerated();
        if (!this._serialized) {
            this._serialized = true;
            var settings = NeutrinoSettings_1.default.instance();
            if (settings) {
                this._texturesPrefixPath = settings.defaultTexturesPrefixPath;
                this._spriteAtlas = settings.defaultSpriteAtlas;
                if (settings.defaultWorldParent) {
                    this._worldParentId = settings.defaultWorldParent.uuid;
                }
            }
        }
        this._waitForContextAndReset();
    };
    NeutrinoComponent.prototype.onDestroy = function () {
        if (this._spriteFrames) {
            this._spriteFrames.forEach(function (spriteFrame) {
                if (spriteFrame) {
                    spriteFrame.decRef();
                }
            });
            this._spriteFrames.length = 0;
        }
        if (this._waitingForContext) {
            this.context.off('loaded', this._reset, this);
        }
        this._destructed = true;
    };
    NeutrinoComponent.prototype.update = function (dt) {
        if (!this._neutrinoEffect) {
            return;
        }
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect.update(dt, _nwpos, _nwrot);
        var worldParent = this.worldParent;
        if (worldParent) {
            worldParent.getWorldMatrix(_uWPM);
            this.materials.forEach(function (material) {
                material.setProperty('worldParentMat', _uWPM);
            });
        }
        else {
            this.materials.forEach(function (material) {
                material.setProperty('worldParentMat', cc.Mat4.IDENTITY);
            });
        }
        if (!CC_EDITOR && !this.paused()) {
            if (this.destroyWhenEmpty || this.destroyNodeWhenEmpty) {
                var empty = (this.getNumParticles() === 0);
                if (empty) {
                    if (this.destroyNodeWhenEmpty) {
                        this.node.destroy();
                    }
                    else {
                        this.destroy();
                    }
                }
            }
        }
    };
    /**
     * The component is fully loaded and ready to render.
     * @method ready
     * @return {Boolean} - true if the component is ready to render.
     */
    NeutrinoComponent.prototype.ready = function () {
        return this._neutrinoEffect !== null;
    };
    /**
     * Restarts the effect. Current position and rotation of the node is used
     * to start simulating the effect.
     * @method restart
     */
    NeutrinoComponent.prototype.restart = function () {
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect.restart(_nwpos, _nwrot);
    };
    /**
     * Effect jumps to the current position and rotation of the node without trail
     * effect. Usually used as subsequent call of changing position and rotation.
     * In other words teleports the effect to current position of the node.
     * @method resetPositionRotation
     */
    NeutrinoComponent.prototype.resetPositionRotation = function () {
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect.resetPosition(_nwpos, _nwrot);
    };
    /**
     * Pauses the effect. If effect is not loaded yet, it will be started paused.
     * All particles are frozen when the effect is paused.
     * @method pause
     */
    NeutrinoComponent.prototype.pause = function () {
        if (this.ready()) {
            this._neutrinoEffect.pauseAllEmitters();
        }
        this._pausedOnStart = true;
    };
    /**
     * Unpauses the effect. If the effect is not loaded yet, is will be started unpaused.
     * All particles continues to simulate when the effect is unpaused.
     * @method unpause
     */
    NeutrinoComponent.prototype.unpause = function () {
        if (this.ready()) {
            this._neutrinoEffect.unpauseAllEmitters();
        }
        this._pausedOnStart = false;
    };
    /**
     * Returns true if the effect is paused.
     * @method paused
     * @return {Boolean} - true, if the effect is paused.
     */
    NeutrinoComponent.prototype.paused = function () {
        if (this.ready()) {
            return this._neutrinoEffect.areAllEmittersPaused();
        }
        else {
            return this._pausedOnStart;
        }
    };
    /**
     * Pauses generators. If the effect is not loaded yet, it will be started with paused
     * generators. When generators are paused, no new particles are created, however
     * all created particles continue to simulate.
     * @method pauseGenerators
     */
    NeutrinoComponent.prototype.pauseGenerators = function () {
        if (this.ready()) {
            this._neutrinoEffect.pauseGeneratorsInAllEmitters();
        }
        this._pausedGeneratorsOnStart = true;
    };
    /**
     * Unpauses generators. If the effect is not loaded yet, it will be started with unpaused
     * generators. When generators are unpaused, they generate new particles when
     * necessary.
     * @method unpauseGenerators
     */
    NeutrinoComponent.prototype.unpauseGenerators = function () {
        if (this.ready()) {
            this._neutrinoEffect.unpauseGeneratorsInAllEmitters();
        }
        this._pausedGeneratorsOnStart = false;
    };
    /**
     * Returns true, if generators in the effect are paused.
     * @method generatorsPaused
     * @return {Boolean} - true, if generators are paused
     */
    NeutrinoComponent.prototype.generatorsPaused = function () {
        if (this.ready()) {
            return this._neutrinoEffect.areGeneratorsInAllEmittersPaused();
        }
        else {
            return this._pausedGeneratorsOnStart;
        }
    };
    /**
     * Sets emitter property in all standalone emitters in the effect.
     * @method setPropertyInAllEmitters
     * @param {string} name Name of the property to change.
     * @param {Number | cc.Vec2 | cc.Vec3} value Value of the property.
     * @example
     * effect.setPropertyInAllEmitters('Color', new cc.Vec3(1, 0, 0));
     */
    NeutrinoComponent.prototype.setPropertyInAllEmitters = function (name, value) {
        var npValue = propertyValueToNpValue(value);
        if (this.ready()) {
            this._neutrinoEffect.setPropertyInAllEmitters(name, npValue);
        }
        else {
            this._emitterPropsOnStart[name] = npValue;
        }
    };
    /**
     * Returns a number of active particles in the effect. You can use it to find out if the
     * effect is finished playing.
     * @return {Number} Number of active particles in the effect.
     */
    NeutrinoComponent.prototype.getNumParticles = function () {
        if (this._neutrinoEffect) {
            return this._neutrinoEffect.getNumParticles();
        }
        return 0;
    };
    /**
     * This method is an override of RenderComponent._checkBacth (thank you guys for great spelling!)
     * Here we ignore materials and just check cullingMask. The rest of materials
     * check will be in NeutrinoAssembler.fillBuffers().
     */
    NeutrinoComponent.prototype._checkBacth = function (renderer, cullingMask) {
        if (renderer.cullingMask !== cullingMask) {
            renderer._flush();
            renderer.cullingMask = cullingMask;
        }
        // NeutrinoComponent don't use renderer.node and it can be unchanged.
        // Setting up this property should be done due to consistency with
        // other components and their behavior. However, it will break Spine
        // integration which doesn't expect that attached components will change
        // the renderer.node.
        //renderer.node = renderer._dummyNode;
    };
    NeutrinoComponent.prototype._waitForContextAndReset = function () {
        if (!this.context) {
            return;
        }
        if (!this.context.loaded()) {
            this._waitingForContext = true;
            this.context.once('loaded', this._reset, this);
            return;
        }
        this._reset();
    };
    /**
     * Resets the component: tries to recreate NeutrinoEffect and reload all resources.
     */
    NeutrinoComponent.prototype._reset = function () {
        if (this._resetInProgress || this._destructed) {
            return;
        }
        this._waitingForContext = false;
        var EffectClass = this.getEffectClass();
        if (!EffectClass) {
            cc.error(this.__classname__ + ": you shouldn't use NeutrinoComponent by itself. Use generated effect classes instead.");
            return;
        }
        this._resetInProgress = true;
        this._errorOnLoad = false;
        this._neutrinoEffectModel = new EffectClass(this.context.neutrinoContext);
        this._neutrinoEffect = null;
        // Load textures.
        var numTextures = this._neutrinoEffectModel.textures.length;
        this._spriteFrames = new Array(numTextures);
        this._numTexturesLoading = this._spriteFrames.length;
        for (var texIndex = 0; texIndex < numTextures; ++texIndex) {
            var texturePath = this._texturesPrefixPath + this._neutrinoEffectModel.textures[texIndex];
            var texturePathNoExt = texturePath.replace(/\.[^/.]+$/, "");
            if (this.spriteAtlas) {
                var spriteFrame = this.spriteAtlas.getSpriteFrame(texturePathNoExt);
                if (spriteFrame) {
                    spriteFrame.addRef();
                    this._spriteFrames[texIndex] = spriteFrame;
                    --this._numTexturesLoading;
                }
                else {
                    cc.warn(this.__classname__ + ": Can't load sprite '" + texturePathNoExt + "' from sprite atlas. Will try to load single texture.");
                    this._loadTexture(texIndex, texturePathNoExt);
                }
            }
            else {
                this._loadTexture(texIndex, texturePathNoExt);
            }
        }
        if (this._numTexturesLoading === 0) {
            // TODO: deffer this to the end of the frame
            this._onTexturesLoaded();
        }
    };
    /**
     * Requests standalone texture for load.
     */
    NeutrinoComponent.prototype._loadTexture = function (texIndex, texturePath) {
        var _this_1 = this;
        var _this = this;
        var texturesDb = this.getTexturesDatabase();
        var textureDesc = texturesDb.find(function (tex) { return tex.path === texturePath; });
        var textureLoadFinished = function () {
            --_this._numTexturesLoading;
            if (_this._numTexturesLoading === 0) {
                _this._onTexturesLoaded();
            }
        };
        if (!textureDesc) {
            cc.error(this.__classname__ + ": Can't find texture '" + texturePath + ".");
            this._errorOnLoad = true;
            textureLoadFinished();
            return;
        }
        if (CC_DEV) {
            cc.assetManager.loadAny(textureDesc.uuid, function (err, spriteFrame) {
                if (_this_1._destructed) {
                    return;
                }
                if (err) {
                    cc.error(_this.__classname__ + ": Can't load texture '" + texturePath + "'. " + err);
                    _this._errorOnLoad = true;
                }
                else if (!spriteFrame) {
                    // Redundant check to remove error on multiple reloading in row.
                    cc.warn(_this.__classname__ + ": Loading flow wrong behavior found #1 (don't worry about it)");
                    _this._errorOnLoad = true;
                }
                else {
                    if (spriteFrame instanceof cc.Texture2D) {
                        spriteFrame = new cc.SpriteFrame(spriteFrame);
                    }
                    spriteFrame.addRef();
                    if (!_this._spriteFrames) {
                        // Redundant check to remove error on multiple reloading in row.
                        cc.warn(_this.__classname__ + ": Loading flow wrong behavior found #2 (don't worry about it)");
                        _this._errorOnLoad = true;
                    }
                    else {
                        _this._spriteFrames[texIndex] = spriteFrame;
                    }
                }
                textureLoadFinished();
            });
        }
        else {
            this.context.texturesBundle().load(textureDesc.path, cc.SpriteFrame, function (err, spriteFrame) {
                if (_this_1._destructed) {
                    return;
                }
                if (err) {
                    cc.error(_this.__classname__ + ": Can't load sprite frame '" + texturePath + "'. " + err);
                    _this._errorOnLoad = true;
                }
                else {
                    spriteFrame.addRef();
                    _this._spriteFrames[texIndex] = spriteFrame;
                }
                textureLoadFinished();
            });
        }
    };
    /**
     * When everything is loaded - create neutrino effect.
     */
    NeutrinoComponent.prototype._onTexturesLoaded = function () {
        var _this_1 = this;
        if (this._errorOnLoad) {
            this._resetInProgress = false;
            return;
        }
        this.materials.length = 0;
        var materialsSetupError = false;
        this._neutrinoEffectModel.renderStyles.forEach(function (renderStyle, renderStyleIndex) {
            var texIndex = renderStyle.textureIndices[0];
            var spriteFrame = _this_1._spriteFrames[texIndex];
            if (!spriteFrame) {
                // Redundant check to remove error on multiple reloading in row.
                cc.warn(_this_1.__classname__ + ": Loading flow wrong behavior found #3 (don't worry about it)");
                materialsSetupError = true;
                return;
            }
            var texture = spriteFrame.getTexture();
            if (!texture) {
                // Redundant check to remove error on multiple reloading in row.
                cc.warn(_this_1.__classname__ + ": Loading flow wrong behavior found #4 (don't worry about it)");
                materialsSetupError = true;
                return;
            }
            var materialIndex = _this_1._neutrinoEffectModel.materials[renderStyle.materialIndex];
            var material = _this_1.context.materials[materialIndex * 2 +
                (texture.hasPremultipliedAlpha() ? 1 : 0)];
            if (!material) {
                // Redundant check to remove error on multiple reloading in row.
                cc.warn(_this_1.__classname__ + ": Loading flow wrong behavior found #5 (don't worry about it)");
                materialsSetupError = true;
                return;
            }
            var matVar = _this_1.setMaterial(renderStyleIndex, material);
            matVar.setProperty('texture', texture);
        }, this);
        if (materialsSetupError) {
            this._resetInProgress = false;
            return;
        }
        this._initTexturesRemap();
        this._getNeutrinoWorldPositionRotation(_nwpos, _nwrot);
        this._neutrinoEffect = this._neutrinoEffectModel.createWGLInstance(_nwpos, _nwrot, this._assembler, {
            paused: this._pausedOnStart,
            generatorsPaused: this._pausedGeneratorsOnStart
        });
        this._neutrinoEffect.texturesRemap = this._texturesRemap;
        for (var prop in this._emitterPropsOnStart) {
            this._neutrinoEffect.setPropertyInAllEmitters(prop, this._emitterPropsOnStart[prop]);
        }
        this._emitterPropsOnStart = {};
        this._resetInProgress = false;
    };
    /**
     * In case some of textures are placed on atlases we need to prepare remapping structure for
     * neutrinoparticles.js.
     */
    NeutrinoComponent.prototype._initTexturesRemap = function () {
        var remapNeeded = false;
        for (var texIndex = 0; texIndex < this._spriteFrames.length; ++texIndex) {
            var spriteFrame = this._spriteFrames[texIndex];
            if (spriteFrame.uv[6] !== 1 ||
                spriteFrame.uv[0] !== 0 ||
                spriteFrame.uv[7] !== 0 ||
                spriteFrame.uv[1] !== 1) {
                remapNeeded = true;
                break;
            }
        }
        if (!remapNeeded) {
            this._texturesRemap = [];
            return;
        }
        this._texturesRemap = new Array(this._spriteFrames.length);
        for (var texIndex = 0; texIndex < this._spriteFrames.length; ++texIndex) {
            var spriteFrame = this._spriteFrames[texIndex];
            this._texturesRemap[texIndex] = new this.context.neutrinoContext.SubRect(spriteFrame.uv[0], 1 - spriteFrame.uv[1], spriteFrame.uv[6] - spriteFrame.uv[0], spriteFrame.uv[1] - spriteFrame.uv[7]);
        }
    };
    NeutrinoComponent.prototype._getNeutrinoWorldPositionRotation = function (position, rotation) {
        var worldMatrix = _gnwprMat0;
        var worldRotation = _gnwprQuat0;
        var worldPosition = _gnwprVec0;
        var worldScale = this._worldScale;
        this.node.getWorldMatrix(worldMatrix);
        var worldParent = this.worldParent;
        if (worldParent) {
            var worldParentMatrix = _gnwprMat1;
            worldParent.getWorldMatrix(worldParentMatrix);
            cc.Mat4.invert(worldParentMatrix, worldParentMatrix);
            cc.Mat4.multiply(worldMatrix, worldParentMatrix, worldMatrix);
        }
        cc.Mat4.getRotation(worldRotation, worldMatrix);
        worldMatrix.getTranslation(worldPosition);
        worldMatrix.getScale(worldScale);
        position[0] = worldPosition.x / worldScale.x;
        position[1] = worldPosition.y / worldScale.y;
        position[2] = worldPosition.z / worldScale.z;
        rotation[0] = worldRotation.x;
        rotation[1] = worldRotation.y;
        rotation[2] = worldRotation.z;
        rotation[3] = worldRotation.w;
    };
    NeutrinoComponent.prototype._findWorldParent = function () {
        var node = this.node;
        do {
            if (node.uuid == this._worldParentId) {
                return node;
            }
            node = node.parent;
        } while (node);
        return null;
    };
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_serialized", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_worldParentId", void 0);
    __decorate([
        property(cc.Node)
    ], NeutrinoComponent.prototype, "worldParent", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_texturesPrefixPath", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "texturesPrefixPath", null);
    __decorate([
        property(cc.SpriteAtlas)
    ], NeutrinoComponent.prototype, "_spriteAtlas", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], NeutrinoComponent.prototype, "spriteAtlas", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_pausedOnStart", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "pausedOnStart", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "_pausedGeneratorsOnStart", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "pausedGeneratorsOnStart", null);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "destroyWhenEmpty", void 0);
    __decorate([
        property
    ], NeutrinoComponent.prototype, "destroyNodeWhenEmpty", void 0);
    NeutrinoComponent = __decorate([
        ccclass
    ], NeutrinoComponent);
    return NeutrinoComponent;
}(cc.RenderComponent));
exports.default = NeutrinoComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcTmV1dHJpbm9Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUUxQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQywyQkFBMkI7QUFDM0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDNUIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTVCLFNBQVMsc0JBQXNCLENBQUMsS0FBaUM7SUFDN0QsSUFBSSxLQUFLLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRTtRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7U0FBTSxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FB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Q0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM5QixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sNENBQWdCLEdBQXhCO1FBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixHQUFHO1lBQ0MsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFFRCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0QixRQUFRLElBQUksRUFBRTtRQUVmLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUF4bUJEO1FBREMsUUFBUTswREFDbUI7SUFHNUI7UUFEQyxRQUFROzZEQUNtQjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUdqQjtJQWVEO1FBREMsUUFBUTtrRUFDd0I7SUFHakM7UUFEQyxRQUFROytEQUdSO0lBZUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyREFDb0I7SUFHN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3REFHeEI7SUFlRDtRQURDLFFBQVE7NkRBQ3NCO0lBRy9CO1FBREMsUUFBUTswREFHUjtJQVFEO1FBREMsUUFBUTt1RUFDd0I7SUFHakM7UUFEQyxRQUFRO29FQUdSO0lBU0Q7UUFEQyxRQUFROytEQUNnQjtJQUl6QjtRQURDLFFBQVE7bUVBQ29CO0lBaEhILGlCQUFpQjtRQUQ5QyxPQUFPO09BQ3NCLGlCQUFpQixDQThuQjlDO0lBQUQsd0JBQUM7Q0E5bkJELEFBOG5CQyxDQTluQnVELEVBQUUsQ0FBQyxlQUFlLEdBOG5CekU7a0JBOW5CNkIsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ldXRyaW5vU2V0dGluZ3MgZnJvbSAnLi9OZXV0cmlub1NldHRpbmdzJztcclxuaW1wb3J0IE5ldXRyaW5vQ29udGV4dCBmcm9tICcuL05ldXRyaW5vQ29udGV4dCc7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8vIENhY2hlZCB0ZW1wb3JhcnkgdmFsdWVzLlxyXG5jb25zdCBfZ253cHJNYXQwID0gbmV3IGNjLk1hdDQoKTtcclxuY29uc3QgX2dud3ByTWF0MSA9IG5ldyBjYy5NYXQ0KCk7XHJcbmNvbnN0IF9nbndwclF1YXQwID0gbmV3IGNjLlF1YXQoKTtcclxuY29uc3QgX2dud3ByVmVjMCA9IG5ldyBjYy5WZWMzKCk7XHJcbmNvbnN0IF91V1BNID0gbmV3IGNjLk1hdDQoKTtcclxuY29uc3QgX253cG9zID0gWzAsIDAsIDAsIDBdO1xyXG5jb25zdCBfbndyb3QgPSBbMCwgMCwgMCwgMF07XHJcblxyXG5mdW5jdGlvbiBwcm9wZXJ0eVZhbHVlVG9OcFZhbHVlKHZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUueCwgdmFsdWUueV07XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMykge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUueCwgdmFsdWUueSwgdmFsdWUuel07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTmV1dHJpbm9Db21wb25lbnQgZXh0ZW5kcyBjYy5SZW5kZXJDb21wb25lbnQge1xyXG4gICAgY29udGV4dDogTmV1dHJpbm9Db250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9uZXV0cmlub0VmZmVjdE1vZGVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25ldXRyaW5vRWZmZWN0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3Nwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9lbWl0dGVyUHJvcHNPblN0YXJ0ID0ge307XHJcbiAgICBwcml2YXRlIF90ZXh0dXJlc1JlbWFwID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3dhaXRpbmdGb3JDb250ZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzZXRJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9udW1UZXh0dXJlc0xvYWRpbmc6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9lcnJvck9uTG9hZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3dvcmxkU2NhbGUgPSBuZXcgY2MuVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfZGVzdHJ1Y3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfc2VyaWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfd29ybGRQYXJlbnRJZCA9ICcnO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2V0IHdvcmxkUGFyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maW5kV29ybGRQYXJlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd29ybGRQYXJlbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl93b3JsZFBhcmVudElkID0gdmFsdWUgPyB2YWx1ZS51dWlkIDogJyc7XHJcbiAgICAgICAgdGhpcy5fd2FpdEZvckNvbnRleHRBbmRSZXNldCgpO1xyXG5cclxuICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gTmV1dHJpbm9TZXR0aW5ncy5pbnN0YW5jZSgpO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmRlZmF1bHRXb3JsZFBhcmVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZXNQcmVmaXhQYXRoID0gJyc7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBnZXQgdGV4dHVyZXNQcmVmaXhQYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlc1ByZWZpeFBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRleHR1cmVzUHJlZml4UGF0aCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVzUHJlZml4UGF0aCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IE5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0VGV4dHVyZXNQcmVmaXhQYXRoID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgcHJpdmF0ZSBfc3ByaXRlQXRsYXM6IGNjLlNwcml0ZUF0bGFzID0gIG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxyXG4gICAgZ2V0IHNwcml0ZUF0bGFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVBdGxhcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3ByaXRlQXRsYXModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVBdGxhcyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKENDX0VESVRPUikge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IE5ldXRyaW5vU2V0dGluZ3MuaW5zdGFuY2UoKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kZWZhdWx0U3ByaXRlQXRsYXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX3BhdXNlZE9uU3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGdldCBwYXVzZWRPblN0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRPblN0YXJ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgcGF1c2VkT25TdGFydCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlZE9uU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl93YWl0Rm9yQ29udGV4dEFuZFJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBfcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGdldCBwYXVzZWRHZW5lcmF0b3JzT25TdGFydCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBhdXNlZEdlbmVyYXRvcnNPblN0YXJ0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkR2VuZXJhdG9yc09uU3RhcnQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl93YWl0Rm9yQ29udGV4dEFuZFJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdHJ1ZSwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGRlc3Ryb3llZCB3aGVuIHRoZSBlZmZlY3QgaXMgZW1wdHkuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlc3Ryb3lXaGVuRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBJZiB0cnVlLCB0aGUgbm9kZSBvZiB0aGUgY29tcG9uZW50IHdpbGwgYmUgZGVzdHJveWVkIHdoZW4gdGhlIGVmZmVjdCBpcyBlbXB0eS5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZGVzdHJveU5vZGVXaGVuRW1wdHkgPSBmYWxzZTtcclxuXHJcbiAgICByZXNldEluRWRpdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gTmV1dHJpbm9Db250ZXh0Lmluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmVuc3VyZU5vaXNlVGV4dHVyZUlzR2VuZXJhdGVkKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fc2VyaWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBOZXV0cmlub1NldHRpbmdzLmluc3RhbmNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzUHJlZml4UGF0aCA9IHNldHRpbmdzLmRlZmF1bHRUZXh0dXJlc1ByZWZpeFBhdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVBdGxhcyA9IHNldHRpbmdzLmRlZmF1bHRTcHJpdGVBdGxhcztcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5kZWZhdWx0V29ybGRQYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93b3JsZFBhcmVudElkID0gc2V0dGluZ3MuZGVmYXVsdFdvcmxkUGFyZW50LnV1aWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nwcml0ZUZyYW1lcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXMuZm9yRWFjaCgoc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmRlY1JlZigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3dhaXRpbmdGb3JDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5vZmYoJ2xvYWRlZCcsIHRoaXMuX3Jlc2V0LCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2Rlc3RydWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbmV1dHJpbm9FZmZlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZ2V0TmV1dHJpbm9Xb3JsZFBvc2l0aW9uUm90YXRpb24oX253cG9zLCBfbndyb3QpO1xyXG4gICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0LnVwZGF0ZShkdCwgX253cG9zLCBfbndyb3QpO1xyXG5cclxuICAgICAgICBjb25zdCB3b3JsZFBhcmVudCA9IHRoaXMud29ybGRQYXJlbnQ7XHJcbiAgICAgICAgaWYgKHdvcmxkUGFyZW50KSB7XHJcbiAgICAgICAgICAgIHdvcmxkUGFyZW50LmdldFdvcmxkTWF0cml4KF91V1BNKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnd29ybGRQYXJlbnRNYXQnLCBfdVdQTSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLmZvckVhY2goKG1hdGVyaWFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eSgnd29ybGRQYXJlbnRNYXQnLCBjYy5NYXQ0LklERU5USVRZKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUNDX0VESVRPUiAmJiAhdGhpcy5wYXVzZWQoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXN0cm95V2hlbkVtcHR5IHx8IHRoaXMuZGVzdHJveU5vZGVXaGVuRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5ID0gKHRoaXMuZ2V0TnVtUGFydGljbGVzKCkgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVzdHJveU5vZGVXaGVuRW1wdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IGlzIGZ1bGx5IGxvYWRlZCBhbmQgcmVhZHkgdG8gcmVuZGVyLlxyXG4gICAgICogQG1ldGhvZCByZWFkeVxyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gLSB0cnVlIGlmIHRoZSBjb21wb25lbnQgaXMgcmVhZHkgdG8gcmVuZGVyLlxyXG4gICAgICovXHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmV1dHJpbm9FZmZlY3QgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN0YXJ0cyB0aGUgZWZmZWN0LiBDdXJyZW50IHBvc2l0aW9uIGFuZCByb3RhdGlvbiBvZiB0aGUgbm9kZSBpcyB1c2VkXHJcbiAgICAgKiB0byBzdGFydCBzaW11bGF0aW5nIHRoZSBlZmZlY3QuXHJcbiAgICAgKiBAbWV0aG9kIHJlc3RhcnRcclxuICAgICAqLyAgIFxyXG4gICAgcmVzdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9nZXROZXV0cmlub1dvcmxkUG9zaXRpb25Sb3RhdGlvbihfbndwb3MsIF9ud3JvdCk7XHJcbiAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QucmVzdGFydChfbndwb3MsIF9ud3JvdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFZmZlY3QganVtcHMgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb24gYW5kIHJvdGF0aW9uIG9mIHRoZSBub2RlIHdpdGhvdXQgdHJhaWxcclxuICAgICAqIGVmZmVjdC4gVXN1YWxseSB1c2VkIGFzIHN1YnNlcXVlbnQgY2FsbCBvZiBjaGFuZ2luZyBwb3NpdGlvbiBhbmQgcm90YXRpb24uXHJcbiAgICAgKiBJbiBvdGhlciB3b3JkcyB0ZWxlcG9ydHMgdGhlIGVmZmVjdCB0byBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBub2RlLlxyXG4gICAgICogQG1ldGhvZCByZXNldFBvc2l0aW9uUm90YXRpb25cclxuICAgICAqL1xyXG4gICAgcmVzZXRQb3NpdGlvblJvdGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX2dldE5ldXRyaW5vV29ybGRQb3NpdGlvblJvdGF0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5yZXNldFBvc2l0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlcyB0aGUgZWZmZWN0LiBJZiBlZmZlY3QgaXMgbm90IGxvYWRlZCB5ZXQsIGl0IHdpbGwgYmUgc3RhcnRlZCBwYXVzZWQuXHJcbiAgICAgKiBBbGwgcGFydGljbGVzIGFyZSBmcm96ZW4gd2hlbiB0aGUgZWZmZWN0IGlzIHBhdXNlZC5cclxuICAgICAqIEBtZXRob2QgcGF1c2VcclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BhdXNlZE9uU3RhcnQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5wYXVzZXMgdGhlIGVmZmVjdC4gSWYgdGhlIGVmZmVjdCBpcyBub3QgbG9hZGVkIHlldCwgaXMgd2lsbCBiZSBzdGFydGVkIHVucGF1c2VkLlxyXG4gICAgICogQWxsIHBhcnRpY2xlcyBjb250aW51ZXMgdG8gc2ltdWxhdGUgd2hlbiB0aGUgZWZmZWN0IGlzIHVucGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCB1bnBhdXNlXHJcbiAgICAgKi9cclxuICAgIHVucGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC51bnBhdXNlQWxsRW1pdHRlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkT25TdGFydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBlZmZlY3QgaXMgcGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCBwYXVzZWRcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IC0gdHJ1ZSwgaWYgdGhlIGVmZmVjdCBpcyBwYXVzZWQuXHJcbiAgICAgKi9cclxuICAgIHBhdXNlZCgpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmV1dHJpbm9FZmZlY3QuYXJlQWxsRW1pdHRlcnNQYXVzZWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkT25TdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXVzZXMgZ2VuZXJhdG9ycy4gSWYgdGhlIGVmZmVjdCBpcyBub3QgbG9hZGVkIHlldCwgaXQgd2lsbCBiZSBzdGFydGVkIHdpdGggcGF1c2VkXHJcbiAgICAgKiBnZW5lcmF0b3JzLiBXaGVuIGdlbmVyYXRvcnMgYXJlIHBhdXNlZCwgbm8gbmV3IHBhcnRpY2xlcyBhcmUgY3JlYXRlZCwgaG93ZXZlclxyXG4gICAgICogYWxsIGNyZWF0ZWQgcGFydGljbGVzIGNvbnRpbnVlIHRvIHNpbXVsYXRlLlxyXG4gICAgICogQG1ldGhvZCBwYXVzZUdlbmVyYXRvcnNcclxuICAgICAqL1xyXG4gICAgcGF1c2VHZW5lcmF0b3JzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wYXVzZWRHZW5lcmF0b3JzT25TdGFydCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnBhdXNlcyBnZW5lcmF0b3JzLiBJZiB0aGUgZWZmZWN0IGlzIG5vdCBsb2FkZWQgeWV0LCBpdCB3aWxsIGJlIHN0YXJ0ZWQgd2l0aCB1bnBhdXNlZFxyXG4gICAgICogZ2VuZXJhdG9ycy4gV2hlbiBnZW5lcmF0b3JzIGFyZSB1bnBhdXNlZCwgdGhleSBnZW5lcmF0ZSBuZXcgcGFydGljbGVzIHdoZW5cclxuICAgICAqIG5lY2Vzc2FyeS4gXHJcbiAgICAgKiBAbWV0aG9kIHVucGF1c2VHZW5lcmF0b3JzXHJcbiAgICAgKi9cclxuICAgIHVucGF1c2VHZW5lcmF0b3JzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3QudW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BhdXNlZEdlbmVyYXRvcnNPblN0YXJ0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUsIGlmIGdlbmVyYXRvcnMgaW4gdGhlIGVmZmVjdCBhcmUgcGF1c2VkLlxyXG4gICAgICogQG1ldGhvZCBnZW5lcmF0b3JzUGF1c2VkXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAtIHRydWUsIGlmIGdlbmVyYXRvcnMgYXJlIHBhdXNlZFxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0b3JzUGF1c2VkKCkgOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5yZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXV0cmlub0VmZmVjdC5hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWRHZW5lcmF0b3JzT25TdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGVtaXR0ZXIgcHJvcGVydHkgaW4gYWxsIHN0YW5kYWxvbmUgZW1pdHRlcnMgaW4gdGhlIGVmZmVjdC5cclxuICAgICAqIEBtZXRob2Qgc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBjaGFuZ2UuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlciB8IGNjLlZlYzIgfCBjYy5WZWMzfSB2YWx1ZSBWYWx1ZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogZWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycygnQ29sb3InLCBuZXcgY2MuVmVjMygxLCAwLCAwKSk7XHJcbiAgICAgKi9cclxuICAgIHNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuVmVjMykge1xyXG4gICAgICAgIGNvbnN0IG5wVmFsdWUgPSBwcm9wZXJ0eVZhbHVlVG9OcFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVhZHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC5zZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMobmFtZSwgbnBWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZW1pdHRlclByb3BzT25TdGFydFtuYW1lXSA9IG5wVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBudW1iZXIgb2YgYWN0aXZlIHBhcnRpY2xlcyBpbiB0aGUgZWZmZWN0LiBZb3UgY2FuIHVzZSBpdCB0byBmaW5kIG91dCBpZiB0aGVcclxuICAgICAqIGVmZmVjdCBpcyBmaW5pc2hlZCBwbGF5aW5nLlxyXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBOdW1iZXIgb2YgYWN0aXZlIHBhcnRpY2xlcyBpbiB0aGUgZWZmZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXROdW1QYXJ0aWNsZXMoKSA6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX25ldXRyaW5vRWZmZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZXV0cmlub0VmZmVjdC5nZXROdW1QYXJ0aWNsZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFuIG92ZXJyaWRlIG9mIFJlbmRlckNvbXBvbmVudC5fY2hlY2tCYWN0aCAodGhhbmsgeW91IGd1eXMgZm9yIGdyZWF0IHNwZWxsaW5nISlcclxuICAgICAqIEhlcmUgd2UgaWdub3JlIG1hdGVyaWFscyBhbmQganVzdCBjaGVjayBjdWxsaW5nTWFzay4gVGhlIHJlc3Qgb2YgbWF0ZXJpYWxzXHJcbiAgICAgKiBjaGVjayB3aWxsIGJlIGluIE5ldXRyaW5vQXNzZW1ibGVyLmZpbGxCdWZmZXJzKCkuXHJcbiAgICAgKi9cclxuICAgIF9jaGVja0JhY3RoIChyZW5kZXJlciwgY3VsbGluZ01hc2spIHtcclxuICAgICAgICBpZiAocmVuZGVyZXIuY3VsbGluZ01hc2sgIT09IGN1bGxpbmdNYXNrKSB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLl9mbHVzaCgpO1xyXG4gICAgICAgICAgICByZW5kZXJlci5jdWxsaW5nTWFzayA9IGN1bGxpbmdNYXNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTmV1dHJpbm9Db21wb25lbnQgZG9uJ3QgdXNlIHJlbmRlcmVyLm5vZGUgYW5kIGl0IGNhbiBiZSB1bmNoYW5nZWQuXHJcbiAgICAgICAgLy8gU2V0dGluZyB1cCB0aGlzIHByb3BlcnR5IHNob3VsZCBiZSBkb25lIGR1ZSB0byBjb25zaXN0ZW5jeSB3aXRoXHJcbiAgICAgICAgLy8gb3RoZXIgY29tcG9uZW50cyBhbmQgdGhlaXIgYmVoYXZpb3IuIEhvd2V2ZXIsIGl0IHdpbGwgYnJlYWsgU3BpbmVcclxuICAgICAgICAvLyBpbnRlZ3JhdGlvbiB3aGljaCBkb2Vzbid0IGV4cGVjdCB0aGF0IGF0dGFjaGVkIGNvbXBvbmVudHMgd2lsbCBjaGFuZ2VcclxuICAgICAgICAvLyB0aGUgcmVuZGVyZXIubm9kZS5cclxuICAgICAgICBcclxuICAgICAgICAvL3JlbmRlcmVyLm5vZGUgPSByZW5kZXJlci5fZHVtbXlOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dhaXRGb3JDb250ZXh0QW5kUmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQubG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2FpdGluZ0ZvckNvbnRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQub25jZSgnbG9hZGVkJywgdGhpcy5fcmVzZXQsIHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRzIHRoZSBjb21wb25lbnQ6IHRyaWVzIHRvIHJlY3JlYXRlIE5ldXRyaW5vRWZmZWN0IGFuZCByZWxvYWQgYWxsIHJlc291cmNlcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfcmVzZXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc2V0SW5Qcm9ncmVzcyB8fCB0aGlzLl9kZXN0cnVjdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dhaXRpbmdGb3JDb250ZXh0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBFZmZlY3RDbGFzcyA9IHRoaXMuZ2V0RWZmZWN0Q2xhc3MoKTtcclxuXHJcbiAgICAgICAgaWYgKCFFZmZlY3RDbGFzcykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgJHt0aGlzLl9fY2xhc3NuYW1lX199OiB5b3Ugc2hvdWxkbid0IHVzZSBOZXV0cmlub0NvbXBvbmVudCBieSBpdHNlbGYuIFVzZSBnZW5lcmF0ZWQgZWZmZWN0IGNsYXNzZXMgaW5zdGVhZC5gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVzZXRJblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9lcnJvck9uTG9hZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdE1vZGVsID0gbmV3IEVmZmVjdENsYXNzKHRoaXMuY29udGV4dC5uZXV0cmlub0NvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0ID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2FkIHRleHR1cmVzLlxyXG4gICAgICAgIGNvbnN0IG51bVRleHR1cmVzID0gdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC50ZXh0dXJlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlRnJhbWVzID0gbmV3IEFycmF5KG51bVRleHR1cmVzKTtcclxuICAgICAgICB0aGlzLl9udW1UZXh0dXJlc0xvYWRpbmcgPSB0aGlzLl9zcHJpdGVGcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0ZXhJbmRleCA9IDA7IHRleEluZGV4IDwgbnVtVGV4dHVyZXM7ICsrdGV4SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZVBhdGggPSB0aGlzLl90ZXh0dXJlc1ByZWZpeFBhdGggKyB0aGlzLl9uZXV0cmlub0VmZmVjdE1vZGVsLnRleHR1cmVzW3RleEluZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZVBhdGhOb0V4dCA9IHRleHR1cmVQYXRoLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZUF0bGFzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUodGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS5hZGRSZWYoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS10aGlzLl9udW1UZXh0dXJlc0xvYWRpbmc7ICAgIFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke3RoaXMuX19jbGFzc25hbWVfX306IENhbid0IGxvYWQgc3ByaXRlICcke3RleHR1cmVQYXRoTm9FeHR9JyBmcm9tIHNwcml0ZSBhdGxhcy4gV2lsbCB0cnkgdG8gbG9hZCBzaW5nbGUgdGV4dHVyZS5gKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZSh0ZXhJbmRleCwgdGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZSh0ZXhJbmRleCwgdGV4dHVyZVBhdGhOb0V4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9udW1UZXh0dXJlc0xvYWRpbmcgPT09IDApIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogZGVmZmVyIHRoaXMgdG8gdGhlIGVuZCBvZiB0aGUgZnJhbWVcclxuICAgICAgICAgICAgdGhpcy5fb25UZXh0dXJlc0xvYWRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlcXVlc3RzIHN0YW5kYWxvbmUgdGV4dHVyZSBmb3IgbG9hZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfbG9hZFRleHR1cmUodGV4SW5kZXg6IG51bWJlciwgdGV4dHVyZVBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZXNEYiA9IHRoaXMuZ2V0VGV4dHVyZXNEYXRhYmFzZSgpO1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVEZXNjID0gdGV4dHVyZXNEYi5maW5kKHRleCA9PiB0ZXgucGF0aCA9PT0gdGV4dHVyZVBhdGgpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZEZpbmlzaGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAtLV90aGlzLl9udW1UZXh0dXJlc0xvYWRpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX251bVRleHR1cmVzTG9hZGluZyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX29uVGV4dHVyZXNMb2FkZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghdGV4dHVyZURlc2MpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogQ2FuJ3QgZmluZCB0ZXh0dXJlICcke3RleHR1cmVQYXRofS5gKTtcclxuICAgICAgICAgICAgdGhpcy5fZXJyb3JPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZXh0dXJlTG9hZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChDQ19ERVYpIHtcclxuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRBbnkodGV4dHVyZURlc2MudXVpZCwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZXN0cnVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgJHtfdGhpcy5fX2NsYXNzbmFtZV9ffTogQ2FuJ3QgbG9hZCB0ZXh0dXJlICcke3RleHR1cmVQYXRofScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke190aGlzLl9fY2xhc3NuYW1lX199OiBMb2FkaW5nIGZsb3cgd3JvbmcgYmVoYXZpb3IgZm91bmQgIzEgKGRvbid0IHdvcnJ5IGFib3V0IGl0KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSBpbnN0YW5jZW9mIGNjLlRleHR1cmUyRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShzcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9zcHJpdGVGcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkdW5kYW50IGNoZWNrIHRvIHJlbW92ZSBlcnJvciBvbiBtdWx0aXBsZSByZWxvYWRpbmcgaW4gcm93LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGAke190aGlzLl9fY2xhc3NuYW1lX199OiBMb2FkaW5nIGZsb3cgd3JvbmcgYmVoYXZpb3IgZm91bmQgIzIgKGRvbid0IHdvcnJ5IGFib3V0IGl0KWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZXJyb3JPbkxvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlTG9hZEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC50ZXh0dXJlc0J1bmRsZSgpLmxvYWQodGV4dHVyZURlc2MucGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVzdHJ1Y3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYCR7X3RoaXMuX19jbGFzc25hbWVfX306IENhbid0IGxvYWQgc3ByaXRlIGZyYW1lICcke3RleHR1cmVQYXRofScuICR7ZXJyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9lcnJvck9uTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRleHR1cmVMb2FkRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZCAtIGNyZWF0ZSBuZXV0cmlubyBlZmZlY3QuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX29uVGV4dHVyZXNMb2FkZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Vycm9yT25Mb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFscy5sZW5ndGggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtYXRlcmlhbHNTZXR1cEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC5yZW5kZXJTdHlsZXMuZm9yRWFjaCgocmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4SW5kZXggPSByZW5kZXJTdHlsZS50ZXh0dXJlSW5kaWNlc1swXTtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoIXNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWR1bmRhbnQgY2hlY2sgdG8gcmVtb3ZlIGVycm9yIG9uIG11bHRpcGxlIHJlbG9hZGluZyBpbiByb3cuXHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKGAke3RoaXMuX19jbGFzc25hbWVfX306IExvYWRpbmcgZmxvdyB3cm9uZyBiZWhhdmlvciBmb3VuZCAjMyAoZG9uJ3Qgd29ycnkgYWJvdXQgaXQpYCk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbHNTZXR1cEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRleHR1cmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogTG9hZGluZyBmbG93IHdyb25nIGJlaGF2aW9yIGZvdW5kICM0IChkb24ndCB3b3JyeSBhYm91dCBpdClgKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1NldHVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbEluZGV4ID0gdGhpcy5fbmV1dHJpbm9FZmZlY3RNb2RlbC5tYXRlcmlhbHNbcmVuZGVyU3R5bGUubWF0ZXJpYWxJbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5jb250ZXh0Lm1hdGVyaWFsc1ttYXRlcmlhbEluZGV4ICogMiArXHJcbiAgICAgICAgICAgICAgICAodGV4dHVyZS5oYXNQcmVtdWx0aXBsaWVkQWxwaGEoKSA/IDEgOiAwKV07XHJcbiAgICAgICAgICAgIGlmICghbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlZHVuZGFudCBjaGVjayB0byByZW1vdmUgZXJyb3Igb24gbXVsdGlwbGUgcmVsb2FkaW5nIGluIHJvdy5cclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5fX2NsYXNzbmFtZV9ffTogTG9hZGluZyBmbG93IHdyb25nIGJlaGF2aW9yIGZvdW5kICM1IChkb24ndCB3b3JyeSBhYm91dCBpdClgKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsc1NldHVwRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdFZhciA9IHRoaXMuc2V0TWF0ZXJpYWwocmVuZGVyU3R5bGVJbmRleCwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBtYXRWYXIuc2V0UHJvcGVydHkoJ3RleHR1cmUnLCB0ZXh0dXJlKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGVyaWFsc1NldHVwRXJyb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRJblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRUZXh0dXJlc1JlbWFwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2dldE5ldXRyaW5vV29ybGRQb3NpdGlvblJvdGF0aW9uKF9ud3BvcywgX253cm90KTtcclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdCA9IHRoaXMuX25ldXRyaW5vRWZmZWN0TW9kZWwuY3JlYXRlV0dMSW5zdGFuY2UoXHJcbiAgICAgICAgICAgIF9ud3BvcywgX253cm90LCB0aGlzLl9hc3NlbWJsZXIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdXNlZDogdGhpcy5fcGF1c2VkT25TdGFydCxcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRvcnNQYXVzZWQ6IHRoaXMuX3BhdXNlZEdlbmVyYXRvcnNPblN0YXJ0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9uZXV0cmlub0VmZmVjdC50ZXh0dXJlc1JlbWFwID0gdGhpcy5fdGV4dHVyZXNSZW1hcDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLl9lbWl0dGVyUHJvcHNPblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25ldXRyaW5vRWZmZWN0LnNldFByb3BlcnR5SW5BbGxFbWl0dGVycyhwcm9wLCBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VtaXR0ZXJQcm9wc09uU3RhcnRbcHJvcF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZW1pdHRlclByb3BzT25TdGFydCA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9yZXNldEluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluIGNhc2Ugc29tZSBvZiB0ZXh0dXJlcyBhcmUgcGxhY2VkIG9uIGF0bGFzZXMgd2UgbmVlZCB0byBwcmVwYXJlIHJlbWFwcGluZyBzdHJ1Y3R1cmUgZm9yXHJcbiAgICAgKiBuZXV0cmlub3BhcnRpY2xlcy5qcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdFRleHR1cmVzUmVtYXAoKSB7XHJcbiAgICAgICAgbGV0IHJlbWFwTmVlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgdGV4SW5kZXggPSAwOyB0ZXhJbmRleCA8IHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGg7ICsrdGV4SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUudXZbNl0gIT09IDEgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLnV2WzBdICE9PSAwIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS51dls3XSAhPT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUudXZbMV0gIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1hcE5lZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlbWFwTmVlZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzUmVtYXAgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZXNSZW1hcCA9IG5ldyBBcnJheSh0aGlzLl9zcHJpdGVGcmFtZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGV4SW5kZXggPSAwOyB0ZXhJbmRleCA8IHRoaXMuX3Nwcml0ZUZyYW1lcy5sZW5ndGg7ICsrdGV4SW5kZXgpIFxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3ByaXRlRnJhbWUgPSB0aGlzLl9zcHJpdGVGcmFtZXNbdGV4SW5kZXhdO1xyXG5cclxuXHRcdFx0dGhpcy5fdGV4dHVyZXNSZW1hcFt0ZXhJbmRleF0gPSBuZXcgdGhpcy5jb250ZXh0Lm5ldXRyaW5vQ29udGV4dC5TdWJSZWN0KFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUudXZbMF0sIDEgLSBzcHJpdGVGcmFtZS51dlsxXSxcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLnV2WzZdIC0gc3ByaXRlRnJhbWUudXZbMF0sXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS51dlsxXSAtIHNwcml0ZUZyYW1lLnV2WzddKTtcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXROZXV0cmlub1dvcmxkUG9zaXRpb25Sb3RhdGlvbihwb3NpdGlvbjogbnVtYmVyW10sIHJvdGF0aW9uOiBudW1iZXJbXSkge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gX2dud3ByTWF0MDtcclxuICAgICAgICBjb25zdCB3b3JsZFJvdGF0aW9uID1fZ253cHJRdWF0MDtcclxuICAgICAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gX2dud3ByVmVjMDtcclxuICAgICAgICBjb25zdCB3b3JsZFNjYWxlID0gdGhpcy5fd29ybGRTY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldFdvcmxkTWF0cml4KHdvcmxkTWF0cml4KTtcclxuXHJcbiAgICAgICAgY29uc3Qgd29ybGRQYXJlbnQgPSB0aGlzLndvcmxkUGFyZW50O1xyXG4gICAgICAgIGlmICh3b3JsZFBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFBhcmVudE1hdHJpeCA9IF9nbndwck1hdDE7XHJcbiAgICAgICAgICAgIHdvcmxkUGFyZW50LmdldFdvcmxkTWF0cml4KHdvcmxkUGFyZW50TWF0cml4KTtcclxuICAgICAgICAgICAgY2MuTWF0NC5pbnZlcnQod29ybGRQYXJlbnRNYXRyaXgsIHdvcmxkUGFyZW50TWF0cml4KTtcclxuICAgICAgICAgICAgY2MuTWF0NC5tdWx0aXBseSh3b3JsZE1hdHJpeCwgd29ybGRQYXJlbnRNYXRyaXgsIHdvcmxkTWF0cml4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLk1hdDQuZ2V0Um90YXRpb24od29ybGRSb3RhdGlvbiwgd29ybGRNYXRyaXgpO1xyXG4gICAgICAgIHdvcmxkTWF0cml4LmdldFRyYW5zbGF0aW9uKHdvcmxkUG9zaXRpb24pO1xyXG4gICAgICAgIHdvcmxkTWF0cml4LmdldFNjYWxlKHdvcmxkU2NhbGUpO1xyXG5cclxuICAgICAgICBwb3NpdGlvblswXSA9IHdvcmxkUG9zaXRpb24ueCAvIHdvcmxkU2NhbGUueDtcclxuICAgICAgICBwb3NpdGlvblsxXSA9IHdvcmxkUG9zaXRpb24ueSAvIHdvcmxkU2NhbGUueTtcclxuICAgICAgICBwb3NpdGlvblsyXSA9IHdvcmxkUG9zaXRpb24ueiAvIHdvcmxkU2NhbGUuejtcclxuICAgICAgICByb3RhdGlvblswXSA9IHdvcmxkUm90YXRpb24ueDtcclxuICAgICAgICByb3RhdGlvblsxXSA9IHdvcmxkUm90YXRpb24ueTtcclxuICAgICAgICByb3RhdGlvblsyXSA9IHdvcmxkUm90YXRpb24uejtcclxuICAgICAgICByb3RhdGlvblszXSA9IHdvcmxkUm90YXRpb24udztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9maW5kV29ybGRQYXJlbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUudXVpZCA9PSB0aGlzLl93b3JsZFBhcmVudElkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgIH0gd2hpbGUgKG5vZGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBnZXRFZmZlY3RDbGFzcygpOiBhbnk7XHJcbiAgICBhYnN0cmFjdCBnZXRUZXh0dXJlc0RhdGFiYXNlKCkgOiBhbnk7XHJcbn1cclxuXHJcbiJdfQ==