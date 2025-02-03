System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, assetManager, Prefab, SkeletalAnimation, ParticleSystemComponent, AnimationComponent, Item, PoolManager, reuseList, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, ChooseUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./item", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreuseList(extras) {
    _reporterNs.report("reuseList", "./reuseList", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
      Prefab = _cc.Prefab;
      SkeletalAnimation = _cc.SkeletalAnimation;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_unresolved_2) {
      Item = _unresolved_2.Item;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      reuseList = _unresolved_4.reuseList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f90af/QOtATZP2HfxhmdHe", "chooseUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChooseUI", ChooseUI = (_dec = ccclass('ChooseUI'), _dec2 = property(Node), _dec3 = property(_crd && reuseList === void 0 ? (_reportPossibleCrUseOfreuseList({
        error: Error()
      }), reuseList) : reuseList), _dec4 = property(), _dec(_class = (_class2 = (_temp = class ChooseUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "gridView", _descriptor2, this);

          _initializerDefineProperty(this, "resouceType", _descriptor3, this);

          _defineProperty(this, "path", void 0);
        }

        start() {
          // [3]
          this.path = this._getAllPrefabPaths();
          let key = Object.keys(this.path).sort();
          this.gridView.init(key);
          if (key.length) this.showFBX(key[0]);
        }

        onEnable() {
          this.gridView.node.on('show', this.initItem, this);
        }

        onDisable() {
          this.gridView.node.off('show', this.initItem, this);
        }

        initItem(detail) {
          let index = detail.index;
          let node = detail.node;
          let content = detail.data;
          node.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
            error: Error()
          }), Item) : Item).show(this, content);
        }

        _getAllPrefabPaths() {
          var _assetManager$resourc;

          const paths = {};
          const added = [];
          const pathToUuid = (_assetManager$resourc = assetManager.resources) === null || _assetManager$resourc === void 0 ? void 0 : _assetManager$resourc.config.paths._map;
          const resPaths = Object.keys(pathToUuid);
          const {
            length
          } = resPaths;

          for (let i = 0; i < length; i += 1) {
            const aliasPath = resPaths[i];
            const aliasArr = aliasPath.split('/');
            const name = aliasArr[0];
            if (name !== this.resouceType) continue;
            const entryObj = pathToUuid[aliasPath];
            let entry = entryObj;
            let getTarget = false;

            if (entryObj.constructor === Array) {
              const {
                length: entryLength
              } = entryObj;

              for (let j = 0; j < entryLength; j += 1) {
                entry = entryObj[j]; // 同名的资源中不会出现同类型的资源，因此只要检测到 prefab 立即跳出循环

                if (entry && entry.ctor && entry.ctor === Prefab) {
                  if (this.resouceType !== 'model' && aliasArr.length === 4) break; //排除fbx

                  let resourceName = aliasArr[1];

                  if (this.resouceType !== 'model') {
                    resourceName = aliasArr[2];
                  }

                  if (added.indexOf(resourceName) > -1) {
                    console.error(`[panelManager] ${resourceName} of ${aliasPath} clash with ${paths[resourceName]}`);
                  } else {
                    paths[resourceName] = aliasPath;
                    added.push(resourceName);
                  }

                  break;
                }
              }
            }
          }

          return paths;
        }

        showFBX(txt) {
          var _assetManager$getBund;

          if (this.target.children.length) (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.putNode(this.target.children[0]);
          (_assetManager$getBund = assetManager.getBundle('resources')) === null || _assetManager$getBund === void 0 ? void 0 : _assetManager$getBund.load(this.path[txt], Prefab, (err, prefab) => {
            var _node$getComponent, _node$getComponent2, _node$getComponent3, _node$getComponent4, _node$getComponent5;

            if (err) return;
            let node = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, this.target);
            node.setScale(1, 1, 1);
            (_node$getComponent = node.getComponent(SkeletalAnimation)) === null || _node$getComponent === void 0 ? void 0 : _node$getComponent.play();
            (_node$getComponent2 = node.getComponent(AnimationComponent)) === null || _node$getComponent2 === void 0 ? void 0 : _node$getComponent2.play();
            (_node$getComponent3 = node.getComponent(ParticleSystemComponent)) === null || _node$getComponent3 === void 0 ? void 0 : _node$getComponent3.clear();
            (_node$getComponent4 = node.getComponent(ParticleSystemComponent)) === null || _node$getComponent4 === void 0 ? void 0 : _node$getComponent4.stop();
            (_node$getComponent5 = node.getComponent(ParticleSystemComponent)) === null || _node$getComponent5 === void 0 ? void 0 : _node$getComponent5.play();
            let arrParticle = node.getComponentsInChildren(ParticleSystemComponent);
            arrParticle.forEach(item => {
              item === null || item === void 0 ? void 0 : item.clear();
              item === null || item === void 0 ? void 0 : item.stop();
              item.loop = true;
              item === null || item === void 0 ? void 0 : item.play();
            });
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gridView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resouceType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 'model';
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=chooseUI.js.map