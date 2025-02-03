System.register(["__unresolved_0"], function (_export2, _context2) {
  "use strict";

  var _loader, _cjsExports, __cjsMetaURL;

  _export2("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context2.meta.url, function (exports, _require, module, __filename, __dirname) {
        let require = _loader.createRequireWithReqMap({}, _require);

        (function () {
          System.register("chunks:///_virtual/Constant.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function (o) {
            "use strict";

            var n, e, t;
            return {
              setters: [function (o) {
                n = o.defineProperty;
              }, function (o) {
                e = o.cclegacy, t = o._decorator;
              }],
              execute: function () {
                e._RF.push({}, "003cf7+IiVN57yGe89L8QSt", "Constant", void 0);

                var i;
                t.ccclass, t.property;
                !function (o) {
                  o.bgSound = "bgSound", o.Dino_AttkSound = "Dino_AttkSound", o.Dino_LoseSound = "Dino_LoseSound", o.Dino_ScreamSound = "Dino_ScreamSound", o.Dino_MergeSound = "Dino_MergeSound", o.Dino_FightSound = "Dino_FightSound", o.Dino_ChooseSound = "Dino_ChooseSound";
                }(i || (i = {}));
                var u = o("Constants", function () {});
                n(u, "isPlayGame", !1), n(u, "isPlaySound", !1), n(u, "isRotate", !1), n(u, "toStore", !1), n(u, "isTouching", !1), n(u, "isCanTouch", !0), n(u, "isDoneAddDino", !1), n(u, "isMerged", !1), n(u, "isDonePA", !1), n(u, "isDoneMerge1", !1), n(u, "countClick", 0), n(u, "DinoPrice", 100), n(u, "Money", 1e3), n(u, "dinoChoosen", null), n(u, "Event", {
                  touchStart: "touchstart",
                  touchMove: "touchmove",
                  touchEnd: "touchend",
                  touchCancel: "touchcancel"
                }), n(u, "SoundTrack", i), n(u, "ironSource", {
                  SoundState: !0,
                  State: 1,
                  isEndGame: !1,
                  isPlayBgSound: !1
                }), n(u, "Responsive", {
                  HORIZONTAL_IPX: "horizontal_IPX",
                  HORIZONTAL_TABLET: "horizontal_Tablet",
                  VERTICAL_IPX: "vertical_IPX",
                  VERTICAL_MOBILE: "vertical_Mobile"
                }), e._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/GameController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts", "./AudioManager.ts"], function (e) {
            "use strict";

            var o, n, i, t, s, a, r, c, l;
            return {
              setters: [function (e) {
                o = e.applyDecoratedDescriptor, n = e.inheritsLoose, i = e.initializerDefineProperty, t = e.assertThisInitialized;
              }, function (e) {
                s = e.cclegacy, a = e._decorator, r = e.Component;
              }, function (e) {
                c = e.Constants;
              }, function (e) {
                l = e.AudioManager;
              }],
              execute: function () {
                var d, p, u, y, f;

                s._RF.push({}, "068c9ERAfJF1b4+fsWryUsH", "GameController", void 0);

                var m = a.ccclass,
                    g = a.property;
                e("GameController", (d = m("GameController"), p = g(l), d((f = o((y = function (e) {
                  function o() {
                    for (var o, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];

                    return o = e.call.apply(e, [this].concat(s)) || this, i(t(o), "AudioManager", f, t(o)), o;
                  }

                  n(o, e);
                  var s = o.prototype;
                  return s.onLoad = function () {}, s.start = function () {
                    window.gameReady && window.gameReady();
                  }, s.onFinish = function () {
                    window.gameEnd && window.gameEnd();
                  }, s.installHandle = function () {
                    if (console.log("install"), c.ironSource.isEndGame = !0, this.AudioManager.stopAllSound(), window.gameEnd && window.gameEnd(), "undefined" == typeof playableSDK) {
                      if ("undefined" == typeof ExitApi) {
                        if ("undefined" == typeof dapi) return "undefined" != typeof mraid ? cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.ANDROID ? void mraid.open("https://play.google.com/store/apps/details?id=com.mergemaster.dinosaurs") : cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.IPHONE || cc.sys.os == cc.sys.IPAD ? void mraid.open("https://itunes.apple.com/us/app/id1627953728?mt=8") : void mraid.open("https://play.google.com/store/apps/details?id=com.mergemaster.dinosaurs") : void (window.install && window.install());
                        dapi.openStoreUrl();
                      } else ExitApi.exit();
                    } else window.playableSDK.openAppStore();
                  }, o;
                }(r)).prototype, "AudioManager", [p], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), u = y)) || u));

                s._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/Utils.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts"], function (e) {
            "use strict";

            var t, n, i, o, s, r;
            return {
              setters: [function (e) {
                t = e.defineProperty;
              }, function (e) {
                n = e.cclegacy, i = e.UITransform, o = e.tween, s = e.Vec3;
              }, function (e) {
                r = e.Constants;
              }],
              execute: function () {
                n._RF.push({}, "3b82aot4D1GfItUeLUV/DVb", "Utils", void 0);

                var c = {
                  checkMergeFirstStep: function () {
                    for (var e = 0; e < r.points_1.length; e++) {
                      var t = r.points_1[e].getComponent(i).getBoundingBox(),
                          n = r.point.getComponent(i).getBoundingBox();

                      if (t.intersects(n)) {
                        if (r.isMergeStep1States[e]) break;
                        r.isMergeStep1States[e] = !0, r.dino_lines[e].active = !0, r.isMergeStep1States.every(function (e) {
                          return !0 === e;
                        }) && (r.isDoneMergeStep1 = !0);
                        break;
                      }
                    }
                  },
                  checkMergeSecondStep: function () {
                    for (var e = 0; e < r.points_2.length; e++) {
                      var t = r.points_2[e].getComponent(i).getBoundingBox(),
                          n = r.point.getComponent(i).getBoundingBox();

                      if (t.intersects(n)) {
                        if (r.isMergeStep2States[e]) break;
                        r.isMergeStep2States[e] = !0, r.dino_lines_2[e].active = !0, r.isMergeStep2States.every(function (e) {
                          return !0 === e;
                        }) && (r.isDoneMergeStep2 = !0);
                        break;
                      }
                    }
                  }
                },
                    a = {
                  mergeDinoStep1: function (e) {
                    o(e).to(.4, {
                      position: new s(-1.1, -15.535, 9.208),
                      scale: new s(0, 0, 0)
                    }).call(function () {
                      e.active = !1;
                    }).start();
                  },
                  mergeDinoStep2: function (e) {
                    o(e).to(.4, {
                      position: new s(1.582, -15.535, 9.208),
                      scale: new s(0, 0, 0)
                    }).call(function () {
                      e.active = !1;
                    }).start();
                  }
                },
                    p = e("Utils", function () {});
                t(p, "TouchArea", c), t(p, "GamePlay", a), n._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/RangerControl.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function (e) {
            "use strict";

            var i, t, n, o, s, r, a, c, d, l, h;
            return {
              setters: [function (e) {
                i = e.inheritsLoose, t = e.defineProperty, n = e.assertThisInitialized;
              }, function (e) {
                o = e.cclegacy, s = e._decorator, r = e.SkeletalAnimation, a = e.RigidBody, c = e.BoxCollider, d = e.ERigidBodyType, l = e.math, h = e.Component;
              }],
              execute: function () {
                var y;

                o._RF.push({}, "51538WFcw1P6baoyBNVdquG", "RangerControl", void 0);

                var g = s.ccclass;
                s.property, e("RangerControl", g("RangerControl")(y = function (e) {
                  function o() {
                    for (var i, o = arguments.length, s = new Array(o), r = 0; r < o; r++) s[r] = arguments[r];

                    return i = e.call.apply(e, [this].concat(s)) || this, t(n(i), "isRun", !1), t(n(i), "isFight", !1), t(n(i), "rigidbody", void 0), t(n(i), "collider", void 0), i;
                  }

                  i(o, e);
                  var s = o.prototype;
                  return s.start = function () {
                    var e = this;
                    this.getComponent(r).play("Idle_1"), this.rigidbody = this.node.getComponent(a), this.collider = this.node.getComponent(c), this.collider.on("onCollisionEnter", function (i) {
                      "Rex" === i.otherCollider.node.name && "Unit_9" !== i.selfCollider.node.name && (e.rigidbody.type = d.STATIC, e.isFight = !0, e.die()), "Unit_9" === i.selfCollider.node.name && (e.rigidbody.type = d.STATIC, e.isFight = !0, e.die());
                    });
                  }, s.die = function () {
                    var e = this;
                    this.node.getComponent(r).play("Die"), this.scheduleOnce(function () {
                      e.node.active = !1, e.node.getComponent(r).stop();
                    }, 1.5);
                  }, s.Run = function () {
                    switch (this.rigidbody.type = d.DYNAMIC, this.node.parent.name) {
                      case "Unit_9":
                        this.rigidbody.setLinearVelocity(new l.Vec3(-3, 0, -12));
                        break;

                      case "Unit_10":
                      case "Unit_11":
                      case "Unit_12":
                        this.rigidbody.setLinearVelocity(new l.Vec3(-10, 0, -12));
                        break;

                      case "Unit_13":
                      case "Unit_14":
                        this.rigidbody.setLinearVelocity(new l.Vec3(-5, 0, -12));
                    }

                    this.isRun || (this.isRun = !0, this.getComponent(r).play("Run"));
                  }, s.runStep2 = function () {
                    switch (this.rigidbody.type = d.DYNAMIC, this.node.parent.name) {
                      case "Unit_1":
                        this.rigidbody.setLinearVelocity(new l.Vec3(12, 0, -13));
                        break;

                      case "Unit_2":
                      case "Unit_3":
                      case "Unit_4":
                        this.rigidbody.setLinearVelocity(new l.Vec3(10, 0, -13));
                        break;

                      case "Unit_5":
                      case "Unit_6":
                        this.rigidbody.setLinearVelocity(new l.Vec3(5, 0, -13));
                        break;

                      case "Unit_7":
                      case "Unit_8":
                        this.rigidbody.setLinearVelocity(new l.Vec3(11, 0, -13));
                    }

                    this.isRun || (this.isRun = !0, this.getComponent(r).play("Run"));
                  }, o;
                }(h)) || y);

                o._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/TouchAreaController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts", "./AudioManager.ts", "./GameController.ts", "./NodesController.ts", "./IronSource.ts", "./GamePlay.ts"], function (e) {
            "use strict";

            var o, t, n, i, r, l, s, a, u, c, h, d, p, C, f, y;
            return {
              setters: [function (e) {
                o = e.applyDecoratedDescriptor, t = e.inheritsLoose, n = e.initializerDefineProperty, i = e.assertThisInitialized, r = e.defineProperty;
              }, function (e) {
                l = e.cclegacy, s = e._decorator, a = e.Node, u = e.Vec3, c = e.Component;
              }, function (e) {
                h = e.Constants;
              }, function (e) {
                d = e.AudioManager;
              }, function (e) {
                p = e.GameController;
              }, function (e) {
                C = e.NodesController;
              }, function (e) {
                f = e.IronSource;
              }, function (e) {
                y = e.GamePlay;
              }],
              execute: function () {
                var T, g, m, v, A, M, b, G, E, N, P, S, D;

                l._RF.push({}, "6c960lg0NRGuppywOJ0wWQL", "TouchAreaController", void 0);

                var _ = s.ccclass,
                    w = s.property;
                e("TouchAreaController", (T = _("TouchAreaController"), g = w(f), m = w(y), v = w(d), A = w(C), M = w(p), T((E = o((G = function (e) {
                  function o() {
                    for (var o, t = arguments.length, l = new Array(t), s = 0; s < t; s++) l[s] = arguments[s];

                    return o = e.call.apply(e, [this].concat(l)) || this, n(i(o), "IronSource", E, i(o)), n(i(o), "GamePlay", N, i(o)), n(i(o), "AudioManager", P, i(o)), n(i(o), "NodesController", S, i(o)), n(i(o), "GameController", D, i(o)), r(i(o), "pos", null), r(i(o), "isDoneMergeStep1", !1), r(i(o), "isDoneMergeStep2", !1), o;
                  }

                  t(o, e);
                  var l = o.prototype;
                  return l.start = function () {
                    this.registerEvent();
                  }, l.registerEvent = function () {
                    this.NodesController.hideMask.on(a.EventType.TOUCH_START, this.touchStart, this), this.NodesController.hideMask.on(a.EventType.TOUCH_MOVE, this.touchMove, this), this.NodesController.hideMask.on(a.EventType.TOUCH_END, this.touchEnd, this), this.NodesController.hideMask.on(a.EventType.TOUCH_CANCEL, this.touchEnd, this), this.NodesController.Btn_AddDino.on(a.EventType.TOUCH_START, this.BtnTouchStart, this), this.NodesController.Btn_Install.on(a.EventType.TOUCH_START, this.GameController.installHandle, this);
                  }, l.touchStart = function () {
                    h.isDonePA && this.GameController.installHandle(), h.isCanTouch && !h.ironSource.isEndGame && (h.isTouching = !0);
                  }, l.touchMove = function (e, o) {
                    if (h.isCanTouch) {
                      var t = e.getUILocation();
                      this.pos = this.convertToLocalLocation(t), this.NodesController.point.setPosition(this.pos), h.isDoneAddDino && !h.isMerged && this.GamePlay.checkMergeDino();
                    }
                  }, l.touchEnd = function () {
                    h.isCanTouch && (h.isTouching = !1, !h.isMerged && this.GamePlay.unActiveDinoLines());
                  }, l.convertToLocalLocation = function (e) {
                    var o = e.x - 160 - this.node.getPosition().x,
                        t = e.y - 240 - this.node.getPosition().y;
                    return new u(o, t, 0);
                  }, l.BtnTouchStart = function () {
                    h.countClick <= 3 && this.GamePlay.handleBuyDino(), h.countClick <= 3 && this.GamePlay.showDino();
                  }, o;
                }(c)).prototype, "IronSource", [g], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), N = o(G.prototype, "GamePlay", [m], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), P = o(G.prototype, "AudioManager", [v], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), S = o(G.prototype, "NodesController", [A], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), D = o(G.prototype, "GameController", [M], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), b = G)) || b));

                l._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/CharacterControl.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts", "./AudioManager.ts"], function (t) {
            "use strict";

            var i, e, n, o, r, a, s, u, l, c, d, p, h, y;
            return {
              setters: [function (t) {
                i = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized, r = t.defineProperty;
              }, function (t) {
                a = t.cclegacy, s = t._decorator, u = t.Node, l = t.SkeletalAnimation, c = t.ERigidBodyType, d = t.math, p = t.Component;
              }, function (t) {
                h = t.Constants;
              }, function (t) {
                y = t.AudioManager;
              }],
              execute: function () {
                var g, f, C, v, b, R, m;

                a._RF.push({}, "7c0ab6OlgNN8Ju8uLqdS5KA", "CharacterControl", void 0);

                var A = s.ccclass,
                    D = s.property;
                t("CharacterControl", (g = A("CharacterControl"), f = D(y), C = D(u), g((R = i((b = function (t) {
                  function i() {
                    for (var i, e = arguments.length, a = new Array(e), s = 0; s < e; s++) a[s] = arguments[s];

                    return i = t.call.apply(t, [this].concat(a)) || this, n(o(i), "AudioManager", R, o(i)), n(o(i), "level", m, o(i)), r(o(i), "isRun", !1), r(o(i), "isFight", !1), r(o(i), "isFight_2", !1), r(o(i), "rigidbody", void 0), r(o(i), "collider", void 0), r(o(i), "isCollide", !1), i;
                  }

                  e(i, t);
                  var a = i.prototype;
                  return a.onLoad = function () {
                    this.level.active = !1, this.node.active = !1;
                  }, a.start = function () {
                    this.getComponent(l).play("Idle_2");
                  }, a.die = function () {
                    this.getComponent(l).play("Die"), "Rap" === this.node.name ? h.isDoneStep1 = !0 : h.isDoneStep2 = !0, this.AudioManager.stopSound(h.SoundTrack.Dino_AttkSound);
                  }, a.Run = function () {
                    this.rigidbody.type = c.DYNAMIC, this.rigidbody.setLinearVelocity(new d.Vec3(2, 0, -8)), this.isRun || (this.isRun = !0, this.getComponent(l).play("Run"));
                  }, a.runStep2 = function () {
                    this.rigidbody.type = c.DYNAMIC, this.rigidbody.setLinearVelocity(new d.Vec3(-3, 0, -8)), this.isRun || (this.isRun = !0, this.getComponent(l).play("Run"));
                  }, i;
                }(p)).prototype, "AudioManager", [f], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), m = i(b.prototype, "level", [C], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), v = b)) || v));

                a._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/Responsive.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts", "./NodesController.ts"], function (t) {
            "use strict";

            var o, e, n, s, l, i, r, d, a, h, C, c;
            return {
              setters: [function (t) {
                o = t.applyDecoratedDescriptor, e = t.inheritsLoose, n = t.initializerDefineProperty, s = t.assertThisInitialized, l = t.defineProperty;
              }, function (t) {
                i = t.cclegacy, r = t._decorator, d = t.screen, a = t.Widget, h = t.Component;
              }, function (t) {
                C = t.Constants;
              }, function (t) {
                c = t.NodesController;
              }],
              execute: function () {
                var _, N, g, p, I;

                i._RF.push({}, "96cd1/50FZEdpbn/o5xig83", "Responsive", void 0);

                var B = r.ccclass,
                    w = r.property;
                t("Responsive", (_ = B("Responsive"), N = w(c), _((I = o((p = function (t) {
                  function o() {
                    for (var o, e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];

                    return o = t.call.apply(t, [this].concat(i)) || this, n(s(o), "NodesController", I, s(o)), l(s(o), "device", ""), l(s(o), "isRotate", !1), l(s(o), "HORIZONTAL_IPX", "horizontal_IPX"), l(s(o), "HORIZONTAL_TABLET", "horizontal_Tablet"), l(s(o), "VERTICAL_IPX", "vertical_IPX"), l(s(o), "VERTICAL_MOBILE", "vertical_Mobile"), o;
                  }

                  e(o, t);
                  var i = o.prototype;
                  return i.onLoad = function () {}, i.start = function () {}, i.handleRotate = function () {
                    d.windowSize.width > d.windowSize.height ? (C.isRotate = !0, this.setHorizontal()) : (C.isRotate = !1, this.setVertical());
                  }, i.setHorizontal = function () {
                    d.windowSize.height / d.windowSize.width < .65 ? this.setHorizontalForIpX() : this.setHorizontalForTablet();
                  }, i.setHorizontalForIpX = function () {
                    this.HORIZONTAL_IPX !== this.device && (this.device = this.HORIZONTAL_IPX, this.NodesController.Camera.fov = 50, this.NodesController.Btn_AddDino.setPosition(0, -180, 0), this.NodesController.Btn_AddDino.setScale(.22, .22, .22), this.NodesController.Label_Money.node.parent.setPosition(0, 200, 0), this.NodesController.Label_Money.node.parent.setScale(.22, .22, .22), this.NodesController.Btn_Install.setScale(.5, .5, .5), this.NodesController.Btn_Install.getComponent(a).isAlignHorizontalCenter = !1, this.NodesController.Btn_Install.getComponent(a).isAlignRight = !0, this.NodesController.Btn_Install.getComponent(a).isAbsoluteRight = !0, d.windowSize.height / d.windowSize.width > .55 ? (this.NodesController.Btn_Install.getComponent(a).bottom = 0, this.NodesController.Btn_Install.getComponent(a).right = -270, d.windowSize.height / d.windowSize.width >= .6 && (this.NodesController.Btn_Install.getComponent(a).bottom = 0, this.NodesController.Btn_Install.getComponent(a).right = -240), console.log(1)) : (this.NodesController.Btn_Install.getComponent(a).bottom = 0, this.NodesController.Btn_Install.getComponent(a).right = -355, console.log(2)));
                  }, i.setHorizontalForTablet = function () {
                    this.HORIZONTAL_TABLET !== this.device && (this.device = this.HORIZONTAL_TABLET, this.NodesController.Camera.fov = 60, this.NodesController.Btn_AddDino.setPosition(0, -180, 0), this.NodesController.Btn_AddDino.setScale(.22, .22, .22), this.NodesController.Label_Money.node.parent.setPosition(0, 200, 0), this.NodesController.Label_Money.node.parent.setScale(.22, .22, .22), this.NodesController.Btn_Install.setScale(.5, .5, .5), this.NodesController.Btn_Install.getComponent(a).isAlignHorizontalCenter = !1, this.NodesController.Btn_Install.getComponent(a).isAlignRight = !0, this.NodesController.Btn_Install.getComponent(a).isAbsoluteRight = !0, this.NodesController.Btn_Install.getComponent(a).right = -160, this.NodesController.Btn_Install.getComponent(a).bottom = 0, console.log(3));
                  }, i.setVertical = function () {
                    d.windowSize.width / d.windowSize.height < .5 ? this.setIphoneX() : this.setMobile();
                  }, i.setIphoneX = function () {
                    this.VERTICAL_IPX !== this.device && (this.device = this.VERTICAL_IPX, this.NodesController.Camera.fov = 60, this.NodesController.Btn_AddDino.setPosition(0, -210, 0), this.NodesController.Btn_AddDino.setScale(.22, .22, .22), this.NodesController.Label_Money.node.parent.setPosition(0, 250, 0), this.NodesController.Label_Money.node.parent.setScale(.22, .22, .22), this.NodesController.Btn_Install.setScale(.5, .5, .5), this.NodesController.Btn_Install.getComponent(a).isAlignHorizontalCenter = !0, this.NodesController.Btn_Install.getComponent(a).isAlignRight = !1, this.NodesController.Btn_Install.getComponent(a).bottom = -100, console.log(4));
                  }, i.setMobile = function () {
                    if (this.VERTICAL_MOBILE !== this.device) if (this.device = this.VERTICAL_MOBILE, this.NodesController.Camera.fov = 60, this.NodesController.Btn_Install.getComponent(a).isAlignHorizontalCenter = !0, this.NodesController.Btn_Install.getComponent(a).isAlignRight = !1, d.windowSize.width / d.windowSize.height < .7) {
                      if (d.windowSize.width / d.windowSize.height >= .6 && d.windowSize.width / d.windowSize.height < .62) return this.NodesController.Btn_AddDino.setPosition(0, -170, 0), this.NodesController.Btn_AddDino.setScale(.2, .2, .2), this.NodesController.Label_Money.node.parent.setPosition(0, 220, 0), this.NodesController.Label_Money.node.parent.setScale(.22, .22, .22), this.NodesController.Btn_Install.setScale(.4, .4, .4), void (this.NodesController.Btn_Install.getComponent(a).bottom = -25);
                      this.NodesController.Btn_AddDino.setPosition(0, -190, 0), this.NodesController.Btn_AddDino.setScale(.2, .2, .2), this.NodesController.Label_Money.node.parent.setPosition(0, 220, 0), this.NodesController.Label_Money.node.parent.setScale(.22, .22, .22), this.NodesController.Btn_Install.setScale(.4, .4, .4), this.NodesController.Btn_Install.getComponent(a).isAbsoluteRight = !1, this.NodesController.Btn_Install.getComponent(a).bottom = -45, console.log(5);
                    } else this.NodesController.Btn_AddDino.setPosition(0, -180, 0), this.NodesController.Btn_AddDino.setScale(.2, .2, .2), this.NodesController.Label_Money.node.parent.setPosition(0, 200, 0), this.NodesController.Label_Money.node.parent.setScale(.22, .22, .22), this.NodesController.Btn_Install.setScale(.35, .35, .35), this.NodesController.Btn_Install.getComponent(a).right = -20, this.NodesController.Btn_Install.getComponent(a).bottom = 0, console.log(6);
                  }, i.update = function (t) {
                    this.handleRotate();
                  }, o;
                }(h)).prototype, "NodesController", [N], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), g = p)) || g));

                i._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/IronSource.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts", "./AudioManager.ts"], function (o) {
            "use strict";

            var n, r, e, t, u, a, i, c, S;
            return {
              setters: [function (o) {
                n = o.applyDecoratedDescriptor, r = o.inheritsLoose, e = o.initializerDefineProperty, t = o.assertThisInitialized;
              }, function (o) {
                u = o.cclegacy, a = o._decorator, i = o.Component;
              }, function (o) {
                c = o.Constants;
              }, function (o) {
                S = o.AudioManager;
              }],
              execute: function () {
                var s, d, l, p, g;

                u._RF.push({}, "9e7afRzdixF9ayAvRwivwpz", "IronSource", void 0);

                var f = a.ccclass,
                    y = a.property;
                o("IronSource", (s = f("IronSource"), d = y(S), s((g = n((p = function (o) {
                  function n() {
                    for (var n, r = arguments.length, u = new Array(r), a = 0; a < r; a++) u[a] = arguments[a];

                    return n = o.call.apply(o, [this].concat(u)) || this, e(t(n), "AudioManager", g, t(n)), n;
                  }

                  r(n, o);
                  var u = n.prototype;
                  return u.handleIronSourcePlaySound = function () {
                    c.ironSource.isPlayBgSound || (c.ironSource.SoundState && this.AudioManager.playSound(c.SoundTrack.bgSound), c.ironSource.isPlayBgSound = !0);
                  }, u.handleMuteSoundIronSource = function () {
                    c.ironSource.State = parseInt(localStorage.getItem("cocosSoundState"), 10), c.ironSource.State && (1 !== c.ironSource.State || c.ironSource.SoundState || c.ironSource.isEndGame || (c.ironSource.SoundState = !0, this.AudioManager.playSound(c.SoundTrack.bgSound)), 2 === c.ironSource.State && c.ironSource.SoundState && (c.ironSource.SoundState = !1, this.AudioManager.stopAllSound()));
                  }, n;
                }(i)).prototype, "AudioManager", [d], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), l = p)) || l));

                u._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/BossController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function (t) {
            "use strict";

            var e, i, n, o, s, r, l;
            return {
              setters: [function (t) {
                e = t.inheritsLoose, i = t.defineProperty, n = t.assertThisInitialized;
              }, function (t) {
                o = t.cclegacy, s = t._decorator, r = t.SkeletalAnimation, l = t.Component;
              }],
              execute: function () {
                var c;

                o._RF.push({}, "c38f329EN1D9YpLdfC+d21z", "BossController", void 0);

                var p = s.ccclass;
                s.property, t("BossController", p("BossController")(c = function (t) {
                  function o() {
                    for (var e, o = arguments.length, s = new Array(o), r = 0; r < o; r++) s[r] = arguments[r];

                    return e = t.call.apply(t, [this].concat(s)) || this, i(n(e), "isFight", !1), i(n(e), "isFight_2", !1), i(n(e), "isIdle", !1), i(n(e), "isIdle_2", !1), e;
                  }

                  e(o, t);
                  var s = o.prototype;
                  return s.start = function () {
                    this.getComponent(r).play("Idle_2");
                  }, s.fight = function () {
                    this.isFight = !0, this.getComponent(r).play("Atk_1");
                  }, s.fightStep2 = function () {
                    this.isFight_2 = !0, this.getComponent(r).play("Atk_1");
                  }, s.idle = function () {
                    this.isIdle = !0, this.getComponent(r).play("Idle_2");
                  }, s.idleStep2 = function () {
                    this.isIdle_2 = !0, this.getComponent(r).play("Idle_2");
                  }, o;
                }(l)) || c);

                o._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/NodesController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], function (e) {
            "use strict";

            var n, i, r, t, l, o, a, u, c, b, p, f;
            return {
              setters: [function (e) {
                n = e.applyDecoratedDescriptor, i = e.inheritsLoose, r = e.initializerDefineProperty, t = e.assertThisInitialized, l = e.defineProperty;
              }, function (e) {
                o = e.cclegacy, a = e._decorator, u = e.Camera, c = e.Node, b = e.ParticleSystem, p = e.Label, f = e.Component;
              }],
              execute: function () {
                var s, y, g, m, d, _, z, w, h, D, L, C, P, v, M, B, R, x, F, N, A, S, k, I, H, X, j, O, Q, T, V, q, E, G, J, K, U, W, Y;

                o._RF.push({}, "d10beQtB81Cg6A6SV/C935H", "NodesController", void 0);

                var Z = a.ccclass,
                    $ = a.property;
                e("NodesController", (s = Z("NodesController"), y = $(u), g = $(c), m = $(c), d = $(c), _ = $(c), z = $([c]), w = $([c]), h = $(c), D = $(b), L = $(c), C = $(c), P = $(p), v = $(p), M = $([c]), B = $([c]), R = $([c]), x = $(c), F = $(c), s((S = n((A = function (e) {
                  function n() {
                    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];

                    return n = e.call.apply(e, [this].concat(o)) || this, r(t(n), "Camera", S, t(n)), r(t(n), "hint_1", k, t(n)), r(t(n), "hint_2", I, t(n)), r(t(n), "hint_3", H, t(n)), r(t(n), "point", X, t(n)), r(t(n), "dinoPoints", j, t(n)), r(t(n), "dinoPoints2", O, t(n)), r(t(n), "hideMask", Q, t(n)), r(t(n), "FX_Merge", T, t(n)), r(t(n), "Btn_Install", V, t(n)), r(t(n), "Btn_AddDino", q, t(n)), r(t(n), "Label_Price", E, t(n)), r(t(n), "Label_Money", G, t(n)), r(t(n), "Dinos", J, t(n)), r(t(n), "DinoLines", K, t(n)), r(t(n), "DinoLines2", U, t(n)), r(t(n), "Rex", W, t(n)), r(t(n), "Rex2", Y, t(n)), l(t(n), "isSaveOnceFlag", !1), n;
                  }

                  return i(n, e), n;
                }(f)).prototype, "Camera", [y], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), k = n(A.prototype, "hint_1", [g], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), I = n(A.prototype, "hint_2", [m], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), H = n(A.prototype, "hint_3", [d], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), X = n(A.prototype, "point", [_], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), j = n(A.prototype, "dinoPoints", [z], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  }
                }), O = n(A.prototype, "dinoPoints2", [w], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  }
                }), Q = n(A.prototype, "hideMask", [h], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), T = n(A.prototype, "FX_Merge", [D], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), V = n(A.prototype, "Btn_Install", [L], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), q = n(A.prototype, "Btn_AddDino", [C], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), E = n(A.prototype, "Label_Price", [P], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), G = n(A.prototype, "Label_Money", [v], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), J = n(A.prototype, "Dinos", [M], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  }
                }), K = n(A.prototype, "DinoLines", [B], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  }
                }), U = n(A.prototype, "DinoLines2", [R], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  }
                }), W = n(A.prototype, "Rex", [x], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), Y = n(A.prototype, "Rex2", [F], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), N = A)) || N));

                o._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/GamePlay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts", "./AudioManager.ts", "./GameController.ts", "./NodesController.ts"], function (e) {
            "use strict";

            var o, n, t, i, r, s, l, a, d, c, h, u, g, C, p;
            return {
              setters: [function (e) {
                o = e.applyDecoratedDescriptor, n = e.inheritsLoose, t = e.initializerDefineProperty, i = e.assertThisInitialized, r = e.defineProperty;
              }, function (e) {
                s = e.cclegacy, l = e._decorator, a = e.UITransform, d = e.tween, c = e.ParticleSystem, h = e.Component;
              }, function (e) {
                u = e.Constants;
              }, function (e) {
                g = e.AudioManager;
              }, function (e) {
                C = e.GameController;
              }, function (e) {
                p = e.NodesController;
              }],
              execute: function () {
                var D, N, v, f, M, y, m, S, A;

                s._RF.push({}, "d6ba26BX9VFWrvN11awPr8L", "GamePlay", void 0);

                var P = l.ccclass,
                    _ = l.property;
                e("GamePlay", (D = P("GamePlay"), N = _(p), v = _(C), f = _(g), D((m = o((y = function (e) {
                  function o() {
                    for (var o, n = arguments.length, s = new Array(n), l = 0; l < n; l++) s[l] = arguments[l];

                    return o = e.call.apply(e, [this].concat(s)) || this, t(i(o), "NodesController", m, i(o)), t(i(o), "GameController", S, i(o)), t(i(o), "AudioManager", A, i(o)), r(i(o), "isMergeStep", !1), r(i(o), "isMergeFlag", !1), r(i(o), "dino1", null), r(i(o), "dino2", null), o;
                  }

                  n(o, e);
                  var s = o.prototype;
                  return s.onLoad = function () {}, s.start = function () {
                    this.AudioManager.playSound(u.SoundTrack.bgSound), this.unActiveUI(), this.unActiveDinos();
                  }, s.unActiveUI = function () {
                    this.NodesController.hint_2.active = !1, this.NodesController.hint_3.active = !1;
                  }, s.unActiveDinos = function () {
                    this.NodesController.Rex.active = !1, this.NodesController.Rex2.active = !1;

                    for (var e = 1; e < this.NodesController.Dinos.length; e++) {
                      this.NodesController.Dinos[e].active = !1;
                    }
                  }, s.handleBuyDino = function () {
                    u.countClick += 1, u.Money = u.Money - u.DinoPrice, this.NodesController.Label_Money.string = "" + u.Money, u.DinoPrice += 200, this.NodesController.Label_Price.string = "" + u.DinoPrice, u.countClick >= 3 && (u.isDoneAddDino = !0, this.NodesController.hint_1.active = !1, this.NodesController.hint_2.active = !0);
                  }, s.showDino = function () {
                    this.AudioManager.playSound(u.SoundTrack.Dino_ScreamSound), this.NodesController.Dinos[u.countClick].active = !0;
                  }, s.showMergeStep = function () {
                    this.NodesController.Btn_AddDino.active = !1, this.NodesController.Label_Money.node.parent.active = !1;
                  }, s.checkMergeDino = function () {
                    u.isDoneMerge1 ? this.handleStep2() : this.handleStep1();
                  }, s.handleStep1 = function () {
                    for (var e = 0; e < this.NodesController.dinoPoints.length; e++) {
                      var o = this.NodesController.dinoPoints[e].getComponent(a).getBoundingBox(),
                          n = this.NodesController.point.getComponent(a).getBoundingBox(),
                          t = this.NodesController.DinoLines[0],
                          i = this.NodesController.DinoLines[1];
                      n.intersects(o) && !this.NodesController.DinoLines[e].active && (u.dinoChoosen || (u.dinoChoosen = e + 1), this.AudioManager.playSound(u.SoundTrack.Dino_ChooseSound), this.NodesController.DinoLines[e].active = !0, t.active && i.active && this.setDoneMerge());
                    }
                  }, s.handleStep2 = function () {
                    for (var e = 0; e < this.NodesController.dinoPoints2.length; e++) {
                      var o = this.NodesController.dinoPoints2[e].getComponent(a).getBoundingBox(),
                          n = this.NodesController.point.getComponent(a).getBoundingBox(),
                          t = this.NodesController.DinoLines2[0],
                          i = this.NodesController.DinoLines2[1];
                      n.intersects(o) && !this.NodesController.DinoLines2[e].active && (u.dinoChoosen || (u.dinoChoosen = e + 1), this.AudioManager.playSound(u.SoundTrack.Dino_ChooseSound), this.NodesController.DinoLines2[e].active = !0, t.active && i.active && this.setDoneMerge());
                    }
                  }, s.setDoneMerge = function () {
                    u.isMerged = !0, this.NodesController.hint_2.active = !1;
                  }, s.unActiveDinoLines = function () {
                    for (var e = 0; e < this.NodesController.DinoLines.length; e++) {
                      this.NodesController.DinoLines[e].active = !1;
                    }
                  }, s.mergeDino = function () {
                    var e, o;

                    switch (this.AudioManager.playSound(u.SoundTrack.Dino_FightSound), this.isMergeFlag = !0, u.isDoneMerge1 ? (e = this.NodesController.Dinos[2], o = this.NodesController.Dinos[3]) : (e = this.NodesController.Dinos[0], o = this.NodesController.Dinos[1]), u.dinoChoosen) {
                      case 1:
                        this.setMergeAnim(e, o);
                        break;

                      case 2:
                        this.setMergeAnim(o, e);
                    }
                  }, s.setMergeAnim = function (e, o) {
                    var n = this,
                        t = o.getPosition();
                    d(e).to(.3, {
                      position: t
                    }).call(function () {
                      n.AudioManager.playSound(u.SoundTrack.Dino_MergeSound), e.active = !1, o.active = !1, n.activeRex(t), u.isMerged = !1, n.isMergeFlag = !1, u.dinoChoosen = null;
                    }).start();
                  }, s.activeRex = function (e) {
                    u.isDoneMerge1 ? (this.NodesController.Rex2.setPosition(e), this.NodesController.Rex2.active = !0, this.NodesController.Rex2.getChildByName("Merge FX").getChildByName("Cube").getComponent(c).play(), u.isDonePA = !0) : (this.NodesController.Rex.setPosition(e), this.NodesController.Rex.active = !0, this.NodesController.FX_Merge.node.getChildByName("Cube").getComponent(c).play(), this.NodesController.hint_3.active = !0, u.isDoneMerge1 = !0);
                  }, s.update = function (e) {
                    u.isDoneAddDino && !this.isMergeStep && this.showMergeStep(), u.isMerged && !this.isMergeFlag && this.mergeDino();
                  }, o;
                }(h)).prototype, "NodesController", [N], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), S = o(y.prototype, "GameController", [v], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), A = o(y.prototype, "AudioManager", [f], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), M = y)) || M));

                s._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/AudioManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Constant.ts"], function (o) {
            "use strict";

            var n, e, i, t, u, a, s, r, S;
            return {
              setters: [function (o) {
                n = o.applyDecoratedDescriptor, e = o.inheritsLoose, i = o.initializerDefineProperty, t = o.assertThisInitialized;
              }, function (o) {
                u = o.cclegacy, a = o._decorator, s = o.AudioSource, r = o.Component;
              }, function (o) {
                S = o.Constants;
              }],
              execute: function () {
                var d, c, l, D, _, h, p, b, g, k, f, m, y, A, M, v, C;

                u._RF.push({}, "dd163zuMEBDDa1UHoAitHH9", "AudioManager", void 0);

                var w = a.ccclass,
                    L = a.property;
                o("AudioManager", (d = w("AudioManager"), c = L(s), l = L(s), D = L(s), _ = L(s), h = L(s), p = L(s), b = L(s), d((f = n((k = function (o) {
                  function n() {
                    for (var n, e = arguments.length, u = new Array(e), a = 0; a < e; a++) u[a] = arguments[a];

                    return n = o.call.apply(o, [this].concat(u)) || this, i(t(n), "bgSound", f, t(n)), i(t(n), "Dino_AttkSound", m, t(n)), i(t(n), "Dino_LoseSound", y, t(n)), i(t(n), "Dino_ScreamSound", A, t(n)), i(t(n), "Dino_MergeSound", M, t(n)), i(t(n), "Dino_FightSound", v, t(n)), i(t(n), "Dino_ChooseSound", C, t(n)), n;
                  }

                  e(n, o);
                  var u = n.prototype;
                  return u.playSound = function (o) {
                    if (S.ironSource.SoundState) switch (o) {
                      case "bgSound":
                        this.bgSound.play();
                        break;

                      case "Dino_AttkSound":
                        this.Dino_AttkSound.play();
                        break;

                      case "Dino_LoseSound":
                        this.Dino_LoseSound.play();
                        break;

                      case "Dino_ScreamSound":
                        this.Dino_ScreamSound.play();
                        break;

                      case "Dino_MergeSound":
                        this.Dino_MergeSound.play();
                        break;

                      case "Dino_FightSound":
                        this.Dino_FightSound.play();
                        break;

                      case "Dino_ChooseSound":
                        this.Dino_ChooseSound.play();
                    }
                  }, u.switchVolume = function (o, n) {
                    switch (o) {
                      case "bgSound":
                        this.bgSound.volume = n;
                        break;

                      case "Dino_AttkSound":
                        this.Dino_AttkSound.volume = n;
                        break;

                      case "Dino_LoseSound":
                        this.Dino_LoseSound.volume = n;
                        break;

                      case "Dino_ScreamSound":
                        this.Dino_ScreamSound.volume = n;
                        break;

                      case "Dino_MergeSound":
                        this.Dino_MergeSound.volume = n;
                        break;

                      case "Dino_FightSound":
                        this.Dino_FightSound.volume = n;
                        break;

                      case "Dino_ChooseSound":
                        this.Dino_ChooseSound.volume = n;
                    }
                  }, u.pauseSound = function (o) {
                    switch (o) {
                      case "bgSound":
                        this.bgSound.pause();
                        break;

                      case "Dino_AttkSound":
                        this.Dino_AttkSound.pause();
                        break;

                      case "Dino_LoseSound":
                        this.Dino_LoseSound.pause();
                        break;

                      case "Dino_ScreamSound":
                        this.Dino_ScreamSound.pause();
                        break;

                      case "Dino_MergeSound":
                        this.Dino_MergeSound.pause();
                        break;

                      case "Dino_FightSound":
                        this.Dino_FightSound.pause();
                        break;

                      case "Dino_ChooseSound":
                        this.Dino_ChooseSound.pause();
                    }
                  }, u.stopSound = function (o) {
                    switch (o) {
                      case "bgSound":
                        this.bgSound.stop();
                        break;

                      case "Dino_AttkSound":
                        this.Dino_AttkSound.stop();
                        break;

                      case "Dino_LoseSound":
                        this.Dino_LoseSound.stop();
                        break;

                      case "Dino_ScreamSound":
                        this.Dino_ScreamSound.stop();
                        break;

                      case "Dino_MergeSound":
                        this.Dino_MergeSound.stop();
                        break;

                      case "Dino_FightSound":
                        this.Dino_FightSound.stop();
                        break;

                      case "Dino_ChooseSound":
                        this.Dino_ChooseSound.stop();
                    }
                  }, u.stopAllSound = function () {
                    this.bgSound.stop(), this.Dino_AttkSound.stop(), this.Dino_LoseSound.stop(), this.Dino_ScreamSound.stop(), this.Dino_MergeSound.stop(), this.Dino_ChooseSound.stop();
                  }, n;
                }(r)).prototype, "bgSound", [c], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), m = n(k.prototype, "Dino_AttkSound", [l], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), y = n(k.prototype, "Dino_LoseSound", [D], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), A = n(k.prototype, "Dino_ScreamSound", [_], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), M = n(k.prototype, "Dino_MergeSound", [h], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), v = n(k.prototype, "Dino_FightSound", [p], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), C = n(k.prototype, "Dino_ChooseSound", [b], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  }
                }), g = k)) || g));

                u._RF.pop();
              }
            };
          });
          System.register("chunks:///_virtual/main", ["./Constant.ts", "./AudioManager.ts", "./GameController.ts", "./Utils.ts", "./RangerControl.ts", "./NodesController.ts", "./IronSource.ts", "./GamePlay.ts", "./TouchAreaController.ts", "./CharacterControl.ts", "./Responsive.ts", "./BossController.ts"], function () {
            "use strict";

            return {
              setters: [null, null, null, null, null, null, null, null, null, null, null, null],
              execute: function () {}
            };
          });

          (function (r) {
            r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
          })(function (mid, cid) {
            System.register(mid, [cid], function (_export, _context) {
              return {
                setters: [function (_m) {
                  var _exportObj = {};

                  for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                  }

                  _export(_exportObj);
                }],
                execute: function () {}
              };
            });
          });
        })();

        _export2("default", _cjsExports = module.exports);
      });

      _export2("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);
    }
  };
});
//# sourceMappingURL=index.js.map