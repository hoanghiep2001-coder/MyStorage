System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ScrollViewComponent, Prefab, WidgetComponent, UITransformComponent, Enum, Vec3, log, Size, PoolManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, menu, property, disallowMultiple, requireComponent, SCROLL_NUM, SCROLL_TYPE, reuseList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./poolManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ScrollViewComponent = _cc.ScrollViewComponent;
      Prefab = _cc.Prefab;
      WidgetComponent = _cc.WidgetComponent;
      UITransformComponent = _cc.UITransformComponent;
      Enum = _cc.Enum;
      Vec3 = _cc.Vec3;
      log = _cc.log;
      Size = _cc.Size;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "812b6JqAhNGr5CjTot0F6Ww", "reuseList", undefined);

      ({
        ccclass,
        menu,
        property,
        disallowMultiple,
        requireComponent
      } = _decorator);
      SCROLL_NUM = Enum({
        /**
         * !#en Items arranged from top to bottom.
         * !#zh 从上到下排列
         * @property {Number} TOP_TO_BOTTOM
         */
        TOP_TO_BOTTOM: 0,

        /**
         * !#en Items arranged from left to right.
         * !#zh 从左往右排列
         * @property {Number} LEFT_TO_RIGHT
         */
        LEFT_TO_RIGHT: 1
      });
      SCROLL_TYPE = Enum({
        /**
         * !#en Items arranged from top to bottom.
         * !#zh 从上到下滑动
         * @property {Number} 上下滑动
         */
        //'上下滑动' = SCROLL_NUM.TOP_TO_BOTTOM,
        //TOP_TO_BOTTOM: 0,
        '上下滑动': 0,

        /**
         * !#en Items arranged from left to right.
         * !#zh 从左往右滑动
         * @property {Number} 左右滑动
         */
        //'左右滑动' = SCROLL_NUM.LEFT_TO_RIGHT,
        //LEFT_TO_RIGHT: 1
        '左右滑动': 1
      });

      _export("reuseList", reuseList = (_dec = ccclass("reuseList"), _dec2 = menu('自定义组件/reuseList'), _dec3 = requireComponent(ScrollViewComponent), _dec4 = property({
        tooltip: '选择滚动类型',
        displayName: '滚动类型',
        type: SCROLL_TYPE
      }), _dec5 = property({
        tooltip: '容器内左边距'
      }), _dec6 = property({
        tooltip: '容器内上边距'
      }), _dec7 = property({
        tooltip: '子节点之间的水平间距'
      }), _dec8 = property({
        tooltip: '子节点之间的垂直间距'
      }), _dec9 = property({
        tooltip: '子节点的Prefab',
        type: Prefab
      }), _dec10 = property({
        tooltip: 'prefab缩放大小'
      }), _dec11 = property({
        tooltip: '子节点大小可变'
      }), _dec(_class = _dec2(_class = _dec3(_class = disallowMultiple(_class = (_class2 = (_temp = class reuseList extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "updateTimer", 0);

          _defineProperty(this, "updateInterval", 0.2);

          _defineProperty(this, "datas", []);

          _defineProperty(this, "scrollView", void 0);

          _defineProperty(this, "content", void 0);

          _defineProperty(this, "isChange", void 0);

          _defineProperty(this, "positions", void 0);

          _defineProperty(this, "count", void 0);

          _defineProperty(this, "_scrollType", void 0);

          _initializerDefineProperty(this, "scrollType", _descriptor, this);

          _initializerDefineProperty(this, "paddingLeft", _descriptor2, this);

          _initializerDefineProperty(this, "paddingTop", _descriptor3, this);

          _initializerDefineProperty(this, "spacingX", _descriptor4, this);

          _initializerDefineProperty(this, "spacingY", _descriptor5, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor6, this);

          _initializerDefineProperty(this, "prefabScale", _descriptor7, this);

          _initializerDefineProperty(this, "variableSizeOfChild", _descriptor8, this);
        }

        onLoad() {
          var _this$content$getComp;

          this.scrollView = this.node.getComponent(ScrollViewComponent);
          this.content = this.scrollView.content;
          (_this$content$getComp = this.content.getComponent(UITransformComponent)) === null || _this$content$getComp === void 0 ? void 0 : _this$content$getComp.setAnchorPoint(0, 1);
          var widgetComponent = this.content.getComponent(WidgetComponent);

          if (!widgetComponent) {
            widgetComponent = this.content.addComponent(WidgetComponent);
          }

          widgetComponent.top = 0;
          widgetComponent.bottom = 0;
          widgetComponent.isAlignLeft = true;
          widgetComponent.isAlignTop = true;
          widgetComponent.isAlignRight = false;
          widgetComponent.isAlignBottom = false;
          widgetComponent.isAlignVerticalCenter = false;
          widgetComponent.isAlignHorizontalCenter = false;
          widgetComponent.updateAlignment();

          if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
            this.scrollView.vertical = true;
            this.scrollView.horizontal = false;
          } else if (this.scrollType === SCROLL_NUM.LEFT_TO_RIGHT) {
            this.scrollView.vertical = false;
            this.scrollView.horizontal = true;
          }
        }

        start() {}

        onEnable() {
          if (!this.variableSizeOfChild) return;
          this.content.on(Node.EventType.CHILD_ADDED, this.doLayout, this);
          this.content.on(Node.EventType.CHILD_REMOVED, this.doLayout, this);
        }

        onDisable() {
          if (!this.variableSizeOfChild) return;
          this.content.off(Node.EventType.CHILD_ADDED, this.doLayout, this);
          this.content.off(Node.EventType.CHILD_REMOVED, this.doLayout, this);
        }
        /**
         * 初始化列表数据
         * @param {Array} datas 列表数据
         * @method init
         */


        init(datas) {
          var _this$node$getCompone;

          this.isChange = true;
          this.positions = [];
          this.datas = datas instanceof Array ? datas : [];
          var size = (_this$node$getCompone = this.node.getComponent(UITransformComponent)) === null || _this$node$getCompone === void 0 ? void 0 : _this$node$getCompone.contentSize;

          if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
            this.count = Math.floor((size.width - this.paddingLeft) / (this.getPrefabWidth() + this.spacingX));
          } else {
            this.count = Math.floor((size.width - this.paddingTop) / (this.getPrefabHeight() + this.spacingY));
          }

          this.count = this.count > 0 ? this.count : 1;
          var i = 0;

          for (; i < this.datas.length; i++) {
            var widthIndex = void 0;
            var heightIndex = void 0;

            if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
              widthIndex = i % this.count;
              heightIndex = Math.floor(i / this.count);
            } else {
              widthIndex = Math.floor(i / this.count);
              heightIndex = i % this.count;
            }

            var width = this.getPrefabWidth();
            var height = this.getPrefabHeight();
            this.positions.push(new Vec3(this.paddingLeft + this.spacingX * widthIndex + width * (widthIndex + 1 / 2), -(this.paddingTop + this.spacingY * heightIndex + height * (heightIndex + 1 / 2)), 0));
          } // 设置节点大小


          var sizeWidth = this.getPrefabWidth();
          var sizeHeight = this.getPrefabHeight();

          if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
            var _this$content$getComp2;

            var sizeHeightIndex = Math.ceil(i / this.count);
            (_this$content$getComp2 = this.content.getComponent(UITransformComponent)) === null || _this$content$getComp2 === void 0 ? void 0 : _this$content$getComp2.setContentSize(new Size(size.width, this.paddingTop + this.spacingY * sizeHeightIndex + sizeHeight * sizeHeightIndex));
          } else {
            var _this$content$getComp3;

            var sizeWidthIndex = Math.ceil(i / this.count);
            (_this$content$getComp3 = this.content.getComponent(UITransformComponent)) === null || _this$content$getComp3 === void 0 ? void 0 : _this$content$getComp3.setContentSize(new Size(this.paddingLeft + this.spacingX * sizeWidthIndex + sizeWidth * sizeWidthIndex, size.height));
          }
        }
        /**
         * 处理节点
         */


        handleNode() {
          var child;
          var num = [];

          for (var i = 0; i < this.datas.length; i++) {
            var viewPos = this.getPositionInView(this.positions[i]);

            if (this.isOverBorder(viewPos)) {
              child = this.content.getChildByName(String(i));

              if (child) {
                // 超出边缘删除节点
                this.remove(child);
              }
            } else {
              num.push(i);
              child = this.content.getChildByName(String(i));

              if (!child) {
                // 可视范围内显示节点
                this.create(child, i);
              } else if (this.isChange) {
                this.node.emit('show', {
                  index: i,
                  node: child,
                  data: this.datas[i]
                });
                child.setPosition(this.positions[i]);
                child.name = String(i);
              }
            }
          } // 清除多余节点


          if (this.isChange) {
            var {
              children
            } = this.content;
            log("num" + num);

            for (var _i = 0; _i < children.length;) {
              child = children[_i];

              if (num.indexOf(parseInt(child.name)) === -1) {
                log("remove" + child.name);
                this.remove(child);
              } else {
                _i++;
              }
            }
          }

          this.isChange = false;
        }

        update(dt) {
          this.updateTimer += dt;

          if (this.updateTimer < this.updateInterval) {
            return; // we don't need to do the math every frame
          }

          this.updateTimer = 0;
          this.handleNode();
        }
        /**
         * 获取子节点高
         */


        getPrefabHeight() {
          var _this$itemPrefab$data;

          return ((_this$itemPrefab$data = this.itemPrefab.data.getComponent(UITransformComponent)) === null || _this$itemPrefab$data === void 0 ? void 0 : _this$itemPrefab$data.height) * this.prefabScale;
        }
        /**
         * 获取子节点宽
         */


        getPrefabWidth() {
          var _this$itemPrefab$data2;

          return ((_this$itemPrefab$data2 = this.itemPrefab.data.getComponent(UITransformComponent)) === null || _this$itemPrefab$data2 === void 0 ? void 0 : _this$itemPrefab$data2.width) * this.prefabScale;
        }
        /**
         * 获取子节点的位置
         */


        getPositionInView(position) {
          var _this$content$getComp4, _this$node$getCompone2;

          // get item position in scrollview's node space
          var worldPos = (_this$content$getComp4 = this.content.getComponent(UITransformComponent)) === null || _this$content$getComp4 === void 0 ? void 0 : _this$content$getComp4.convertToWorldSpaceAR(position);
          var viewPos = (_this$node$getCompone2 = this.node.getComponent(UITransformComponent)) === null || _this$node$getCompone2 === void 0 ? void 0 : _this$node$getCompone2.convertToNodeSpaceAR(worldPos);
          return viewPos;
        }

        onDestory() {
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.clearPool(this.itemPrefab.data.name);
        }
        /**
         *
         * @param {*} child
         * @param {*} index
         */


        create(child, index) {
          child = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.getNode(this.itemPrefab, this.content);
          if (this.variableSizeOfChild) child.on(Node.EventType.SIZE_CHANGED, this.doLayout, this);
          child.setScale(this.prefabScale, this.prefabScale, this.prefabScale);
          child.setPosition(this.positions[index]);
          child.name = String(index);
          this.node.emit('show', {
            index,
            node: child,
            data: this.datas[index]
          });
        }
        /**
         * 移除子节点
         * @param {cc.Node} child
         */


        remove(child) {
          if (this.variableSizeOfChild) child.off(Node.EventType.SIZE_CHANGED, this._doLayoutDirty, this);
          (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).instance.putNode(child);
        }
        /**
         * 获取当前位置是否超出
         * @param {cc.v2} viewPos
         */


        isOverBorder(viewPos) {
          var _this$node$getCompone3;

          var size = (_this$node$getCompone3 = this.node.getComponent(UITransformComponent)) === null || _this$node$getCompone3 === void 0 ? void 0 : _this$node$getCompone3.contentSize;
          var {
            height
          } = size;
          var itemHeight = this.getPrefabHeight();
          var {
            width
          } = size;
          var itemWidth = this.getPrefabWidth();
          var borderHeight = height / 2 + itemHeight / 2;
          var borderWidth = width + itemWidth / 2;

          if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
            return viewPos.y > borderHeight || viewPos.y < -borderHeight;
          }

          return viewPos.x > borderWidth;
        }

        doLayout() {
          var _this$node$getCompone4;

          if (!this.datas.length) return;
          var size = (_this$node$getCompone4 = this.node.getComponent(UITransformComponent)) === null || _this$node$getCompone4 === void 0 ? void 0 : _this$node$getCompone4.contentSize;
          var i = 0;
          var curWidth = this.paddingLeft;
          var curHeight = this.paddingTop;
          var width;
          var height;
          this.positions = [];

          for (; i < this.datas.length; i++) {
            var child = this.content.getChildByName(String(i));
            width = this.getPrefabWidth();
            height = this.getPrefabHeight();

            if (child) {
              var _child$getComponent, _child$getComponent2;

              width = (_child$getComponent = child.getComponent(UITransformComponent)) === null || _child$getComponent === void 0 ? void 0 : _child$getComponent.width;
              height = (_child$getComponent2 = child.getComponent(UITransformComponent)) === null || _child$getComponent2 === void 0 ? void 0 : _child$getComponent2.height;
            }

            if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
              if (i % this.count === 0) {
                curWidth = this.paddingLeft + width / 2;
                if (i === 0) curHeight += height / 2;else curHeight += height / 2 + this.spacingY;
              }
            } else if (i % this.count === 0) {
              curHeight = this.paddingTop + height / 2;
              if (i === 0) curWidth += width / 2;else curWidth += width / 2 + this.spacingY;
            }

            this.positions.push(new Vec3(curWidth, -curHeight, 0));

            if (child && this.positions[i] !== child.getPosition()) {
              child.setPosition(this.positions[i]);
            }

            if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
              curWidth += width + this.spacingX;
              if ((i + 1) % this.count === 0) curHeight += height / 2;
            } else {
              curHeight += height + this.spacingY;
              if ((i + 1) % this.count === 0) curWidth += width / 2;
            }
          }

          if (this.scrollType === SCROLL_NUM.TOP_TO_BOTTOM) {
            var _this$content$getComp5;

            (_this$content$getComp5 = this.content.getComponent(UITransformComponent)) === null || _this$content$getComp5 === void 0 ? void 0 : _this$content$getComp5.setContentSize(new Size(size.width, curHeight));
          } else {
            var _this$content$getComp6;

            (_this$content$getComp6 = this.content.getComponent(UITransformComponent)) === null || _this$content$getComp6 === void 0 ? void 0 : _this$content$getComp6.setContentSize(new Size(curWidth, size.height));
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SCROLL_NUM.TOP_TO_BOTTOM;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "paddingLeft", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spacingX", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefabScale", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "variableSizeOfChild", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      ;
      /**
       * 子节点显示监听事件，通过 this.node.on('show', callback, this); 进行监听。
       * @event show
       * @param {Object} obj 返回节点信息对象
       *        {number} obj.index  节点索引
       *        {cc.Node} obj.node  节点
       *        {Object} obj.data  节点信息
       * @example
       * this.node.on('show', callback, this);
       * const callback = (obj) => {
       *     const index = detail.index; //  节点索引
       *     const node = detail.node; // 节点
       *     const data = detail.data; // 节点信息
       * }
       * this.node.off('show', callback, this);
       */

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=reuseList.js.map