"use strict";
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