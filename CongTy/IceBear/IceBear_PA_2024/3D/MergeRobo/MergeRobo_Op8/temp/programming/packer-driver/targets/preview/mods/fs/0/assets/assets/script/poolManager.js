System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NodePool, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, PoolManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      NodePool = _cc.NodePool;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ab18eiROtP74hqpvF/iLEM", "poolManager", undefined);

      // Learn TypeScript:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
      // Learn Attribute:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
      // Learn life-cycle callbacks:
      //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
      //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
      ({
        ccclass,
        property
      } = _decorator);

      _export("default", PoolManager = (_dec = ccclass("PoolManager"), _dec(_class = (_temp = _class2 = class PoolManager {
        constructor() {
          _defineProperty(this, "dictPool", {});
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new PoolManager();
          return this._instance;
        }

        /**
         * 预生成对象池
         * @param prefabList    需要预生成对象池的预制体或节点
         * @param nodeNum       对象池节点数量,默认是1
         * @method prePool
         */
        prePool(prefabList, nodeNum) {
          if (nodeNum === void 0) {
            nodeNum = 1;
          }

          for (var i = 0; i < prefabList.length; i++) {
            var obj = prefabList[i];
            var {
              name
            } = obj;
            var pool = new NodePool();
            this.dictPool[name] = pool;

            for (var j = 0; j < nodeNum; j++) {
              var node = cc.instantiate(obj);
              pool.put(node);
            }
          }
        }
        /**
         * 根据预设从对象池中获取对应节点
         */


        getNode(prefab, parent) {
          var name = prefab.name; //@ts-ignore

          if (!prefab.position) {
            //@ts-ignore
            name = prefab.data.name;
          }

          var node = null;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            var pool = this.dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = cc.instantiate(prefab);
            }
          } else {
            //没有对应对象池，创建他！
            var _pool = new cc.NodePool();

            this.dictPool[name] = _pool;
            node = cc.instantiate(prefab);
          }

          node.parent = parent;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         */


        putNode(node) {
          var name = node.name;
          var pool = null;

          if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this.dictPool[name];
          } else {
            //没有对应对象池，创建他！
            pool = new cc.NodePool();
            this.dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */


        clearPool(name) {
          if (this.dictPool.hasOwnProperty(name)) {
            var pool = this.dictPool[name];
            pool.clear();
          }
        }
        /**
         * 清除全部对象池
         * @method clearAllPool
         */


        clearAllPool() {
          var keys = Object.keys(this.dictPool);
          keys.forEach(element => {
            var pool = this.dictPool[element];
            pool.clear();
          });
          this.dictPool = {};
        } // update (dt) {}


      }, _defineProperty(_class2, "_instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=poolManager.js.map