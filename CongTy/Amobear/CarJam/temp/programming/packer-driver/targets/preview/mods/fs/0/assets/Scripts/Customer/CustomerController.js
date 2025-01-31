System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, easing, instantiate, math, Node, Prefab, SkeletalAnimation, tween, Vec3, GameInfo, CustomerBehavior, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, CustomerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameInfo(extras) {
    _reporterNs.report("GameInfo", "../Const/GameInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomerBehavior(extras) {
    _reporterNs.report("CustomerBehavior", "./CustomerBehavior", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      easing = _cc.easing;
      instantiate = _cc.instantiate;
      math = _cc.math;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      SkeletalAnimation = _cc.SkeletalAnimation;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameInfo = _unresolved_2.GameInfo;
    }, function (_unresolved_3) {
      CustomerBehavior = _unresolved_3.CustomerBehavior;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb2b8yS1oVPBrEtpBOl+Z+I", "CustomerController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CustomerController", CustomerController = (_dec = ccclass('CustomerController'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property([Node]), _dec(_class = (_class2 = (_temp = class CustomerController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "customer", _descriptor, this);

          _initializerDefineProperty(this, "spawnPos", _descriptor2, this);

          _initializerDefineProperty(this, "posStops", _descriptor3, this);

          _defineProperty(this, "CurrentIndexCustomer", 1);

          _defineProperty(this, "flag", false);

          _defineProperty(this, "randomFirstGame", 5);

          _defineProperty(this, "colorList", []);

          _defineProperty(this, "timer", 0);

          _defineProperty(this, "interval", 0.1);
        }

        start() {
          this.initQueue();

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 9) {
            this.initializeColorList();
          }

          this.createCustomer((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).customerQueue[0].position, 0);
        }

        initQueue() {
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentQueue = 333;
          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 9) (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentQueue = 30;
        }

        initializeColorList() {
          this.colorList = [];

          for (var i = 0; i < 10; i++) {
            this.colorList.push(0, 1, 3);
          }

          this.colorList = this.shuffleArray(this.colorList);
        }

        shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }

          return array;
        }

        createCustomer(startPos, queueIndex) {
          var customerNode = instantiate(this.customer);
          var customerBehavior = customerNode.getComponent(_crd && CustomerBehavior === void 0 ? (_reportPossibleCrUseOfCustomerBehavior({
            error: Error()
          }), CustomerBehavior) : CustomerBehavior);
          var random = this.getCustomerColorID();
          customerBehavior.customerColorID = random;
          customerBehavior.customerID = this.CurrentIndexCustomer; // log("curent customer:", this.CurrentIndexCustomer);

          this.CurrentIndexCustomer += 1;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentQueue -= 1; // Đặt vị trí và thuộc tính ban đầu

          customerNode.setPosition(startPos);
          customerNode.parent = this.node;
          (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentCustomers.push(customerNode); // Bắt đầu di chuyển khách hàng

          this.moveCustomerToNext(customerNode, queueIndex);
        }

        getCustomerColorID() {
          // spawn in Red color in first step
          if (this.CurrentIndexCustomer === 1 || this.CurrentIndexCustomer === 2 || this.CurrentIndexCustomer === 3) return 5; // just spawn 6 color in option 6 (dont set blue_light car yet)

          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 6) {
            if (this.CurrentIndexCustomer >= 60) return math.randomRangeInt(0, 4);
            return math.randomRangeInt(0, 7); // use for forced user lose
          } // full color in option 7
          else if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentOption === 7) {
              return math.randomRangeInt(0, 8);
            } // if current option = 8. just spawn 5 color;
            else if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentOption === 8) {
                var newArrColorID = [7, 2, 5, 1, 0]; // forced player lose;

                if (this.CurrentIndexCustomer >= 60) {
                  newArrColorID = [7, 2, 1];
                }

                return this.getRandomValueFromArray(newArrColorID);
              } // if current option = 9. just spawn 3 color;


          if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).currentOption === 9) {
            return this.colorList.pop();
          }
        }

        getRandomValueFromArray(arr) {
          var randomIndex = Math.floor(Math.random() * arr.length);
          return arr[randomIndex];
        }

        moveCustomerToNext(customer, currentIndex) {
          var nextIndex = currentIndex + 1; // // Kiểm tra nếu còn vị trí tiếp theo

          var nextPosition = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).customerQueue[nextIndex]; // // Chỉ di chuyển nếu vị trí tiếp theo trống

          if (nextPosition && !nextPosition.isReady) {
            tween(customer).to(0.1, {
              position: nextPosition.position,
              eulerAngles: new Vec3(0, nextPosition.rotate, 0)
            }, {
              easing: easing.smooth
            }).call(() => {
              // Cập nhật trạng thái vị trí
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).customerQueue[currentIndex].isReady = false; // Tiếp tục di chuyển đến vị trí tiếp theo

              this.moveCustomerToNext(customer, nextIndex);
              var customerBehavior = customer.getComponent(_crd && CustomerBehavior === void 0 ? (_reportPossibleCrUseOfCustomerBehavior({
                error: Error()
              }), CustomerBehavior) : CustomerBehavior);

              if (!(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).customerQueue[(_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).customerQueue.length - 1].isReady && customerBehavior.customerID === 1) {
                this.createCustomer((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).customerQueue[0].position, 0);
              }
            }).start();
          } else {
            // Nếu khách hàng đến vị trí cuối cùng
            customer.getComponent(SkeletalAnimation).play("idle");
            (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).customerQueue[currentIndex].isReady = true;
          }
        }

        clearFixMoveCustomer(customer, currentIndex) {
          var nextIndex = currentIndex + 1; // // Kiểm tra nếu còn vị trí tiếp theo

          var nextPosition = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).customerQueue[nextIndex]; // // Chỉ di chuyển nếu vị trí tiếp theo trống

          if (nextPosition && !nextPosition.isReady) {
            tween(customer).to(0.1, {
              position: nextPosition.position,
              eulerAngles: new Vec3(0, nextPosition.rotate, 0)
            }, {
              easing: easing.smooth
            }).call(() => {
              // Cập nhật trạng thái vị trí
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).customerQueue[nextIndex].isReady = true;
              customer.getComponent(SkeletalAnimation).play("idle");
              this.flag = false;
            }).start();
          }
        }

        update(dt) {
          if (this.flag || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isLose || (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
            error: Error()
          }), GameInfo) : GameInfo).isWin) return;
          this.timer += dt;

          if (this.timer >= this.interval) {
            this.timer = 0;
            var firstCumtomer = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).currentCustomers[0].getComponent(_crd && CustomerBehavior === void 0 ? (_reportPossibleCrUseOfCustomerBehavior({
              error: Error()
            }), CustomerBehavior) : CustomerBehavior);
            var firstCustomerColorID = firstCumtomer.customerColorID;
            var result = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
              error: Error()
            }), GameInfo) : GameInfo).carStops.find(stop => stop.isReady === true && stop.colorID === firstCustomerColorID);

            if (result) {
              this.flag = true;
              firstCumtomer.goalPoint = result.id - 1;
              firstCumtomer.goalPos = this.posStops[result.id - 1].position;
              if (result.id - 1 > 3) firstCumtomer.eulerAngle = -180;
              firstCumtomer.moveToGoal();
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).customerQueue[15].isReady = false; // assign false to all queue

              for (var index = 0; index < (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).customerQueue.length; index++) {
                var queue = (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).customerQueue[index];
                queue.isReady = false;
              }

              ;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentCustomers.splice(0, 1);
              this.clearFixMoveCustomer((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentCustomers[0], 14);
              var maxIndex = 14;
              (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentCustomers.forEach((customer, index) => {
                var currentIndex = maxIndex - index; // Tính chỉ số ngược từ 14 về 0

                this.clearFixMoveCustomer(customer, currentIndex);
              });
              if ((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).currentQueue !== 0) this.createCustomer((_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                error: Error()
              }), GameInfo) : GameInfo).customerQueue[0].position, 0);else this.scheduleOnce(() => {
                (_crd && GameInfo === void 0 ? (_reportPossibleCrUseOfGameInfo({
                  error: Error()
                }), GameInfo) : GameInfo).isWin = true;
              }, 2.5);
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "customer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spawnPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "posStops", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CustomerController.js.map