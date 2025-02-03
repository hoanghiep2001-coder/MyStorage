
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Bubbles.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6051d0j6x9B67kIhP3xZfta', 'Bubbles');
// neutrinoparticles/exported_effects/Bubbles.js

"use strict";

// 9a91e6ea-8ef8-44a6-9cb9-0d84d4365ad7
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Bubbles'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Bubbles'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Bubbles(ctx) {
    var Db = this;

    var ne = function ne(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;

      if (this.Bd.we.pe.length > 0) {
        this.we = this.Bd.we.pe[0];
        this.Lc = [ne.prototype.Ec, ne.prototype.Fc][this.we.xe];
      } else this.we = null;
    };

    ne.prototype = {
      Ec: function Ec(fe, Ab, Xb) {
        var Gc = ctx.ib(Xb.Md);
        var Hc = Math.cos(Gc);
        var Ic = Math.sin(Gc);
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * Hc, ye * Ic, ze * -Ic, ze * Hc, Ab[0], Ab[1]);
      },
      Fc: function Fc(fe, Ab, Xb) {
        var q = Xb.Mc;
        var z2 = 2.0 * q[2] * q[2];
        var xy = 2.0 * q[0] * q[1];
        var wz = 2.0 * q[3] * q[2];
        var ye = ctx.Ae(Xb.Nd[0]);
        var ze = ctx.Ae(Xb.Nd[1]);
        fe.
        /**/
        transform(ye * (1.0 - 2.0 * q[1] * q[1] - z2), ye * (xy + wz), ze * (wz - xy), ze * (2.0 * q[0] * q[0] + z2 - 1.0), Ab[0], Ab[1]);
      },
      Pc: function Pc(fe, Xb, ge) {
        Xb.vc(fe, -1, ge);

        if (this.we) {
          if (this.Be != null && !Xb.oc) {
            if (Xb.Od > 0.001) {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Ab = Xb.Ab.slice();
              var Nd = Xb.Nd.slice();

              if (!ge || ge.
              /**/
              transform(Ab, Nd)) {
                var df = Math.abs(Nd[0]);
                var ef = Math.abs(Nd[1]);

                if (df > 0.001 && ef > 0.001) {
                  fe.save();
                  this.Lc(fe, Ab, Xb);
                  fe.translate(-df * Xb.Pd[0], -ef * (1 - Xb.Pd[1]));
                  fe.globalAlpha *= Xb.Od;

                  if (Xb.gf[0] < 0.999 || Xb.gf[1] < 0.999 || Xb.gf[2] < 0.999) {
                    if (df >= 1 && ef >= 1) {
                      var Ye = df < this.Tc ? df : this.Tc;
                      var Ze = ef < this.Uc ? ef : this.Uc;
                      ctx.af(Ye, Ze);
                      ctx.bf.globalCompositeOperation = "copy";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "multiply";
                      ctx.bf.fillStyle = ctx.ff(Xb.gf);
                      ctx.bf.fillRect(0, 0, Ye, Ze);
                      ctx.bf.globalCompositeOperation = "destination-atop";
                      ctx.bf.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, Ye, Ze);
                      fe.drawImage(ctx.cf, 0, 0, Ye, Ze, 0, 0, df, ef);
                    }
                  } else {
                    fe.drawImage(this.Be.image, this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee, this.Tc, this.Uc, 0, 0, df, ef);
                  }

                  fe.restore();
                }
              }
            }
          }
        }

        Xb.vc(fe, 1, ge);
      },
      Hd: function Hd(fe, ge) {
        fe.save();

        if (this.we) {
          fe.globalCompositeOperation = this.Ld.materials[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].materialIndex];
          this.Be = this.Ld.textureDescs[this.Ld.
          /**/
          model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];
        } else {
          this.Be = null;
        }

        if (this.Be) {
          this.Tc = this.Be.width / this.we.Rc;
          this.Uc = this.Be.height / this.we.Sc;
        }

        function kd(a, b) {
          if (a.Ab[2] > b.Ab[2]) return 1;
          if (a.Ab[2] < b.Ab[2]) return -1;
          return 0;
        }

        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;

          case 2:
            this.Bd.tc.sort(kd);

            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.Pc(fe, this.Bd.tc[Wb], ge);
            }

            break;
        }

        fe.restore();
      }
    };

    var oe = function oe(Ld, Bd) {
      this.Ld = Ld;
      this.Bd = Bd;
      if (this.Bd.we.pe.length > 0) this.we = this.Bd.we.pe[0];else this.we = null;
      this.vertex = [{
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }, {
        /**/
        position: [0.0, 0.0, 0.0],

        /**/
        color: [0, 0, 0, 0],

        /**/
        texCoords: [[0.0, 0.0]]
      }];
    };

    oe.prototype = {
      qe: function qe(Xb, se, re, te, renderBuffer) {
        Xb.Ce(-1, se, re, te, renderBuffer);

        if (this.we) {
          if (!Xb.oc) {
            var v0 = this.vertex[0];
            var v1 = this.vertex[1];
            var v2 = this.vertex[2];
            var v3 = this.vertex[3];
            var Fe = [],
                Ge = [];

            if (this.we.xe == 0) {
              var a = ctx.ib(Xb.Md);
              var s = -Math.sin(a);
              var c = Math.cos(a);
              Fe[0] = se[0] * c + re[0] * s;
              Fe[1] = se[1] * c + re[1] * s;
              Fe[2] = se[2] * c + re[2] * s;
              Ge[0] = -se[0] * s + re[0] * c;
              Ge[1] = -se[1] * s + re[1] * c;
              Ge[2] = -se[2] * s + re[2] * c;
            } else {
              var q = Xb.Mc;
              var z2 = 2.0 * q[2] * q[2];
              var xy = 2.0 * q[0] * q[1];
              var wz = 2.0 * q[3] * q[2];
              Fe[0] = 1.0 - 2.0 * q[1] * q[1] - z2;
              Fe[1] = xy + wz;
              Fe[2] = 2.0 * q[0] * q[2] - 2.0 * q[3] * q[1];
              Ge[0] = xy - wz;
              Ge[1] = 1.0 - 2.0 * q[0] * q[0] - z2;
              Ge[2] = 2.0 * q[1] * q[2] + 2.0 * q[3] * q[0];
            }

            var He = [],
                Ie = [],
                Je = [],
                Ke = [];
            ctx.u(He, Fe, -Xb.Nd[0] * Xb.Pd[0]);
            ctx.u(Ie, Fe, Xb.Nd[0] * (1.0 - Xb.Pd[0]));
            ctx.u(Je, Ge, -Xb.Nd[1] * Xb.Pd[1]);
            ctx.u(Ke, Ge, Xb.Nd[1] * (1.0 - Xb.Pd[1]));
            ctx.c(v0.
            /**/
            position, He, Je);
            ctx.c(v0.
            /**/
            position, v0.
            /**/
            position, Xb.Ab);
            ctx.c(v1.
            /**/
            position, He, Ke);
            ctx.c(v1.
            /**/
            position, v1.
            /**/
            position, Xb.Ab);
            ctx.c(v2.
            /**/
            position, Ie, Ke);
            ctx.c(v2.
            /**/
            position, v2.
            /**/
            position, Xb.Ab);
            ctx.c(v3.
            /**/
            position, Ie, Je);
            ctx.c(v3.
            /**/
            position, v3.
            /**/
            position, Xb.Ab);
            {
              var rgb = ctx.v(Xb.gf, 255);
              v0.
              /**/
              color = v1.
              /**/
              color = v2.
              /**/
              color = v3.
              /**/
              color = [rgb[0], rgb[1], rgb[2], Xb.Od * 255];
            }
            {
              var De = Math.floor(Xb.Qc % this.we.Rc);
              var Ee = Math.floor(Xb.Qc / this.we.Rc);
              var Pe, Qe, Re, Se;
              var We = this.Ld.texturesRemap[this.Ld.
              /**/
              model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];

              if (We) {
                var Ue = We.width / this.we.Rc;
                var Ve = We.height / this.we.Sc;
                var Pe = We.x + De * Ue;
                var Qe = Pe + Ue;
                var Re = We.y + We.height - Ee * Ve;
                var Se = Re - Ve;
              } else {
                var Ue = 1.0 / this.we.Rc;
                var Ve = 1.0 / this.we.Sc;
                var Pe = De * Ue;
                var Qe = Pe + Ue;
                var Re = 1.0 - Ee * Ve;
                var Se = Re - Ve;
              }

              v0.
              /**/
              texCoords[0] = [Pe, Se];
              v1.
              /**/
              texCoords[0] = [Pe, Re];
              v2.
              /**/
              texCoords[0] = [Qe, Re];
              v3.
              /**/
              texCoords[0] = [Qe, Se];
            }

            if (renderBuffer.beforeQuad) {
              renderBuffer.beforeQuad(this.we.renderStyleIndex);
            }

            renderBuffer.pushVertex(v0);
            renderBuffer.pushVertex(v1);
            renderBuffer.pushVertex(v2);
            renderBuffer.pushVertex(v3);

            if (!renderBuffer.__lastRenderCall) {
              renderBuffer.__lastRenderCall = new ctx.RenderCall(0, 6, this.we.renderStyleIndex);
            } else {
              var lastRenderCall = renderBuffer.__lastRenderCall;

              if (lastRenderCall.renderStyleIndex == this.we.renderStyleIndex) {
                lastRenderCall.numIndices += 6;
              } else {
                renderBuffer.pushRenderCall(lastRenderCall);
                renderBuffer.__lastRenderCall = new ctx.RenderCall(lastRenderCall.startIndex + lastRenderCall.numIndices, 6, this.we.renderStyleIndex);
              }
            }
          }
        }

        Xb.Ce(1, se, re, te, renderBuffer);
      },
      ue: function ue(se, re, te, renderBuffer) {
        switch (this.Bd.Vc) {
          case 0:
            for (var Wb = 0; Wb < this.Bd.tc.length; ++Wb) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 1:
            for (var Wb = this.Bd.tc.length; Wb-- > 0;) {
              this.qe(this.Bd.tc[Wb], se, re, te, renderBuffer);
            }

            break;

          case 2:
            this.Bd.tc.forEach(function (Xb) {
              Xb.depth = ctx.H(te, Xb.Ab);
            });
            this.Bd.tc.sort(function (a, b) {
              if (a.depth < b.depth) return 1;
              if (a.depth > b.depth) return -1;
              return 0;
            });
            this.Bd.tc.forEach(function (Xb) {
              this.qe(Xb, se, re, te, renderBuffer);
            }, this);
            break;
        }
      }
    };

    var ld = function ld(Ld, we, ve) {
      var Vb = this;
      this.Ld = Ld;
      this.we = we; // Eb

      function Eb() {
        this.Fb = 0;
        this.Gb = 1;
        this.Hb = null;
        this.Ib = null;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.Ob = this.Gb;
          this.Fb = 0;
        };

        this.Nb();
      }

      Eb.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var Rb = Vb.Rb;
          var systemTime = Ld.Rb;
          var Sb = Qb;
          var ic = 0;

          if (this.zb > 0.000001) {
            var Tb = this.Ob + Qb * this.zb;

            while (Tb >= 1.0) {
              var Ub = this.zb < 0.001 ? 0.0 : (1.0 - this.Ob) / this.zb;
              Sb -= Ub;
              Rb += Ub;
              systemTime += Ub;

              if (this.Hb != null && Rb > this.Hb) {
                Vb.disactivate();
                break;
              }

              Vb.Rb = Rb;
              Ld.Rb = systemTime;
              if (Ab && Qb > 0) ctx.ab(Vb.Ab, Ab, Vb.Bb, Sb / Qb);
              if (Mc && Qb > 0) ctx.slerpq(Vb.Mc, Mc, Vb.prevRotation, Sb / Qb); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Sb);
                ++ic;
              }

              this.Ob = 0.0;
              Tb -= 1.0;

              if (this.Ib != null && ++this.Fb >= this.Ib) {
                Vb.disactivate();
                break;
              }
            }

            this.Ob = Tb;
          }

          Rb += Sb;
          Vb.Rb = Rb;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // ac

      function ac() {
        this.Gb = 1;
        this.Kb = 0;
        this.Lb = 1;
        Vb.we.Mb(this); // IMPL

        this.Nb = function () {
          this.bc = this.Gb;
        };

        this.Nb();
      }

      ac.prototype = {
        Jd: function Jd() {
          this.Nb();
        },
        Id: function Id(Qb, Ab, Mc) {
          Vb.we.Pb(Qb, Vb, this); // IMPL

          var cc = Vb.Rb;
          var dc = cc + Qb;
          var systemTimeBeforeFrame = Ld.Rb;
          var systemTimeAfterFrame = systemTimeBeforeFrame + Qb;
          var ec = Ab ? ctx.O(ctx.h(Ab, Vb.Bb)) : 0;
          var ic = 0;

          if (ec > 0.000001) {
            var fc = ec / this.rd;
            var Tb = this.bc + fc;
            var hc = fc < 0.001 ? 1.0 - this.bc : (1.0 - this.bc) / fc;
            var jc = [];

            while (Tb > 1.0) {
              var kc = cc + hc * Qb;
              if (Ab) ctx.ab(jc, Vb.Bb, Ab, hc);
              Vb.Rb = kc;
              ctx.T(Vb.Ab, jc);
              Ld.Rb = ctx.X(systemTimeBeforeFrame, systemTimeAfterFrame, hc); // for the future when Jb would be external

              this.Lb = this.Jb;

              for (var Wb = 0; Wb < this.Jb; ++Wb) {
                if (Vb.sc.length == 0) break;
                if (this.Jb == 1) this.Kb = 0;else this.Kb = Wb / (this.Jb - 1);
                var Xb = Vb.sc.pop();
                Vb.tc.unshift(Xb);
                if (Wb == 0) Xb.Yb();else Xb.Zb();
                Xb.Id(Qb * (1.0 - hc));
                ++ic;
              }

              hc += 1.0 / fc;
              Tb -= 1.0;
            }

            this.bc = Tb;
          }

          Vb.Rb = dc;
          if (Ab) ctx.T(Vb.Ab, Ab);
          if (Mc) ctx.U(Vb.Mc, Mc);
          return ic;
        }
      }; // mc

      function mc() {
        this.Ab = [];
        this.Pd = [];
        this.Nd = [];
        this.gf = [];
        this.Kc = [];
      }

      mc.prototype = {
        nc: function nc() {
          this.oc = false;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            pc.Bd.Jd(this.Ab, null);
            if (pc.Ad.sd) pc.Bd.disactivate();
          }
        },
        Yb: function Yb() {
          Vb.we.fd(Vb, this); // IMPL

          this.nc();
        },
        Zb: function Zb() {
          Vb.we.gd(Vb, this); // IMPL

          this.nc();
        },
        Id: function Id(Qb) {
          Vb.we.qc(Qb, Vb, this); // IMPL

          this.rc(Qb);
        },
        pc: function pc(je) {
          return this.Kc[je].Bd;
        },
        rc: function rc(Qb) {
          for (var i = 0; i < this.Kc.length; i++) {
            this.Kc[i].Bd.Id(Qb, this.Ab, null);
          }
        },
        uc: function uc(md, nd) {
          this.Kc.push({
            Bd: new ld(Ld, md, ve),
            Ad: nd
          });
        },
        vc: function vc(fe, xc, ge) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.Hd(fe, ge);
          }
        },
        Ce: function Ce(xc, se, re, te, renderBuffer) {
          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];
            if (xc == pc.Ad.xc) pc.Bd.ue(se, re, te, renderBuffer);
          }
        },
        wc: function wc(fe) {
          this.oc = true;

          for (var i = 0; i < this.Kc.length; ++i) {
            var pc = this.Kc[i];

            if (pc.Ad.sd) {
              pc.Bd.activate();
              pc.Bd.Id(0);
            } else pc.Bd.disactivate();
          }
        },
        yc: function yc(Gd) {
          for (var i = 0; i < this.Kc.length; ++i) {
            this.Kc[i].Bd.Ed(Gd);
          }
        }
      }; // zc

      function zc() {}

      zc.prototype.Ac = function (Xb) {
        return Vb.we.Cc(Vb, Xb, this); // IMPL
      }; // ld Ad


      this.Ab = [];
      this.Bb = [];
      this.Mc = [];
      this.prevRotation = [];
      this.tc = [];
      this.sc = [];
      this.Wc = new zc();
      this.construct = new ve(this.Ld, this);
      this.Yc = [];
      this.ad = [];

      this.dd = function () {
        this.vd = new Eb();
      };

      this.ed = function () {
        this.vd = new ac();
      };

      this.we.ud(this); // IMPL

      for (var Wb = 0; Wb < this.jd; ++Wb) {
        var Xb = new mc();

        for (var id = 0; id < this.Yc.length; ++id) {
          var hd = this.Yc[id];
          Xb.uc(hd.Db, hd.Ad);
        }

        this.sc.push(Xb);
      }

      this.Nb = function (Ab, Mc) {
        ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
        ctx.T(this.Bb, this.Ab);
        ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        ctx.U(this.prevRotation, this.Mc);
        this.Rb = 0.0;
        this.wd = 0.0;
        this.Zc = true;
        this.paused_ = false;
        this.generatorsPaused_ = false;
        ctx.W(this.ad, 0, 0, 0);
      };
    };

    ld.prototype.Jd = function (Ab, Mc) {
      this.Nb(Ab, Mc);
      this.sc.push.apply(this.sc, this.tc);
      this.tc.length = 0;
      this.vd.Jd();
    };

    ld.prototype.Id = function (Qb, Ab, Mc) {
      if (this.paused_) {
        this.Td(Ab, Mc);
        return;
      }

      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);

        if (Qb > 0.0001) {
          var shift = [];
          ctx.g(shift, Ab, this.Bb);
          ctx.T(this.ad, shift);
          ctx.w(this.ad, this.ad, Qb);
        } else {
          ctx.W(this.ad, 0, 0, 0);
        }
      } else {
        ctx.W(this.ad, 0, 0, 0);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
      }

      var ic;

      if (this.Zc && !this.generatorsPaused_) {
        ic = this.vd.Id(Qb, Ab, Mc);
      } else {
        if (Ab) ctx.T(this.Ab, Ab);
        if (Mc) ctx.U(this.Mc, Mc);
        ic = 0;
        this.Rb += Qb;
      }

      for (var Wb = ic; Wb < this.tc.length;) {
        var Xb = this.tc[Wb];

        if (!Xb.oc) {
          Xb.Id(Qb);

          if (this.Wc.Ac(this.tc[Wb])) {
            Xb.wc();
            if (this.xd(Wb)) continue;
          }
        } else {
          Xb.rc(Qb);
          if (this.xd(Wb)) continue;
        }

        ++Wb;
      }
    };

    ld.prototype.xd = function (je) {
      var Xb = this.tc[je];
      var ready = true;

      for (var id = 0; id < Xb.Kc.length; ++id) {
        var Bd = Xb.Kc[id].Bd;

        if (Bd.activated() || Bd.tc.length > 0) {
          ready = false;
          break;
        }
      }

      if (ready) {
        this.sc.push(this.tc[je]);
        this.tc.splice(je, 1);
        return true;
      }

      return false;
    };

    ld.prototype.Hd = function (fe, ge) {
      this.construct.Hd(fe, ge);
    };

    ld.prototype.ue = function (se, re, te, renderBuffer) {
      this.construct.ue(se, re, te, renderBuffer);
    };

    ld.prototype.Td = function (Ab, Mc) {
      this.wd = this.Rb;

      if (Ab) {
        ctx.T(this.Bb, this.Ab);
        ctx.T(this.Ab, Ab);
      }

      if (Mc) {
        ctx.U(this.prevRotation, this.Mc);
        ctx.U(this.Mc, Mc);
      }
    };

    ld.prototype.uc = function (md, nd) {
      this.Yc.push({
        Db: md,
        Ad: nd
      });
    };

    ld.prototype.
    /**/
    pause = function () {
      this.paused_ = true;
    };

    ld.prototype.
    /**/
    unpause = function () {
      this.paused_ = false;
    };

    ld.prototype.
    /**/
    paused = function () {
      return this.paused_;
    };

    ld.prototype.
    /**/
    pauseGenerators = function () {
      this.generatorsPaused_ = true;
    };

    ld.prototype.
    /**/
    unpauseGenerators = function () {
      this.generatorsPaused_ = false;
    };

    ld.prototype.
    /**/
    generatorsPaused = function () {
      return this.generatorsPaused_;
    };

    ld.prototype.activate = function () {
      this.Zc = true;
    };

    ld.prototype.disactivate = function () {
      this.Zc = false;
    };

    ld.prototype.activated = function () {
      return this.Zc;
    };

    ld.prototype.
    /**/
    getNumParticles = function () {
      return this.tc.length;
    };

    var ke = function ke() {
      var Cb = this;

      this._init = function (we, Ab, Mc, ve, options) {
        this.
        /**/
        model = we;
        this.Ab = [];
        this.Mc = []; // ke Ad

        this.od = [];

        this.pd = function (md) {
          var Bd = new ld(this, md, ve);
          Bd.Nb(this.Ab, this.Mc);
          this["_".concat(md.name)] = Bd;
          this.od.push(Bd);
        };

        this.Nb = function (Ab, Mc) {
          this.Cd = 0.0;
          this.Rb = 0.0;
          ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
          ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
        };

        this.Nb(Ab, Mc);
        this.
        /**/
        model.qd(this); // IMPL

        this._presimNeeded = true;

        if (options.generatorsPaused) {
          this.
          /**/
          pauseGeneratorsInAllEmitters();
        }

        if (options.paused) {
          this.
          /**/
          pauseAllEmitters();
        } else {
          this.zeroUpdate();
          this.updateFixed(this.Ud, Ab, Mc, this.presimFrameTime);
          this._presimNeeded = false;
        }
      };
    };

    ke.prototype.
    /**/
    restart = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      this.Nb(
      /**/
      position ?
      /**/
      position : this.Ab,
      /**/
      rotation ?
      /**/
      rotation : this.Mc);
      this._presimNeeded = true;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Jd(this.Ab, this.Mc);
      }

      this._presimNeeded = true;

      if (options && options.generatorsPaused) {
        this.
        /**/
        pauseGeneratorsInAllEmitters();
      }

      if (options && options.paused) {
        this.
        /**/
        pauseAllEmitters();
      } else {
        this.zeroUpdate();
        this.updateFixed(this.Ud, this.Ab, this.Mc, this.presimFrameTime);
        this._presimNeeded = false;
      }
    };

    ke.prototype.zeroUpdate = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(0, this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    update = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      if (this.Dd > 0.0) this.updateFixed(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation, this.Dd);else this.updateFlex(
      /**/
      dt,
      /**/
      position,
      /**/
      rotation);
    };

    ke.prototype.updateFixed = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation,
    /**/
    frameTime) {
      var updatedTime = 0.0;
      var hc = [];
      ctx.T(hc, this.Ab);
      var frameRotation = [];
      ctx.U(frameRotation, this.Mc);
      if (
      /**/
      position && ctx.equalv3_(
      /**/
      position, this.Ab))
        /**/
        position = null;
      if (
      /**/
      rotation && ctx.equalq_(
      /**/
      rotation, this.Mc))
        /**/
        rotation = null;

      while (
      /**/
      dt - updatedTime + this.Cd >=
      /**/
      frameTime) {
        var cc = this.Rb;
        if (
        /**/
        position) ctx.ab(hc, this.Ab,
        /**/
        position, updatedTime /
        /**/
        dt);
        if (
        /**/
        rotation) ctx.slerpq(frameRotation, this.Mc,
        /**/
        rotation, updatedTime /
        /**/
        dt);

        for (var i = 0; i < this.od.length; ++i) {
          this.od[i].Id(
          /**/
          frameTime, hc, frameRotation);
          this.Rb = cc;
        }

        updatedTime +=
        /**/
        frameTime - this.Cd;
        this.Cd = 0.0;
        this.Rb = cc +
        /**/
        frameTime;
      }

      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
      this.Cd +=
      /**/
      dt - updatedTime;
    };

    ke.prototype.updateFlex = function (
    /**/
    dt,
    /**/
    position,
    /**/
    rotation) {
      var cc = this.Rb;

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Id(
        /**/
        dt,
        /**/
        position,
        /**/
        rotation);
        this.Rb = cc;
      }

      this.Rb = cc +
      /**/
      dt;
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);
    };

    ke.prototype.
    /**/
    resetPosition = function (
    /**/
    position,
    /**/
    rotation) {
      if (
      /**/
      position) ctx.T(this.Ab,
      /**/
      position);
      if (
      /**/
      rotation) ctx.U(this.Mc,
      /**/
      rotation);

      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Td(this.Ab, this.Mc);
      }
    };

    ke.prototype.
    /**/
    setPropertyInAllEmitters = function (
    /**/
    name,
    /**/
    value) {
      var propName = "_".concat(
      /**/
      name);

      if (
      /**/
      value instanceof Array) {
        if (
        /**/
        value.length == 2) {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.S(this.od[i][propName],
            /**/
            value);
          }
        } else {
          for (var i = 0; i < this.od.length; ++i) {
            ctx.T(this.od[i][propName],
            /**/
            value);
          }
        }
      } else {
        for (var i = 0; i < this.od.length; ++i) {
          this.od[i][propName] =
          /**/
          value;
        }
      }
    };

    ke.prototype.
    /**/
    pauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pause();
      }
    };

    ke.prototype.
    /**/
    unpauseAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpause();
      }

      this.zeroUpdate();

      if (this._presimNeeded) {
        this.updateFixed(this.Ud, this.Ab, this.Mc, this.presimFrameTime);
        this._presimNeeded = false;
      }
    };

    ke.prototype.
    /**/
    areAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].paused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    pauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        pauseGenerators();
      }
    };

    ke.prototype.
    /**/
    unpauseGeneratorsInAllEmitters = function () {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].
        /**/
        unpauseGenerators();
      }
    };

    ke.prototype.
    /**/
    areGeneratorsInAllEmittersPaused = function () {
      for (var i = 0; i < this.od.length; ++i) {
        if (!this.od[i].generatorsPaused()) return false;
      }

      return true;
    };

    ke.prototype.
    /**/
    getNumParticles = function () {
      var numParticles = 0;

      for (var i = 0; i < this.od.length; ++i) {
        numParticles += this.od[i].getNumParticles();
      }

      return numParticles;
    };

    var le = function le() {
      this._init = function (we, Ab, Mc, renderBuffer, options) {
        le.prototype._init.call(this, we, Ab, Mc, oe, options);

        this.texturesRemap = [];
        var indices = [];
        {
          var verDisp;

          for (var Wb = 0; Wb < this.
          /**/
          model.Xe; ++Wb) {
            verDisp = Wb * 4;
            indices.push(verDisp + 0, verDisp + 3, verDisp + 1, verDisp + 1, verDisp + 3, verDisp + 2);
          }
        }
        this.renderBuffer = renderBuffer;
        this.renderBuffer.initialize(this.
        /**/
        model.Xe * 4, [2], indices, this.
        /**/
        model.Xe);
        this.renderBuffer.__numIndices = 0;
      };
    };

    le.prototype = new ke();

    le.prototype.
    /**/
    fillGeometryBuffers = function (
    /**/
    cameraRight,
    /**/
    cameraUp,
    /**/
    cameraDir) {
      this.renderBuffer.cleanup();
      this.renderBuffer.__lastRenderCall = null;
      this.od.forEach(function (Bd) {
        Bd.ue(
        /**/
        cameraRight,
        /**/
        cameraUp,
        /**/
        cameraDir, this.renderBuffer);
      }, this);
      if (this.renderBuffer.__lastRenderCall) this.renderBuffer.pushRenderCall(this.renderBuffer.__lastRenderCall);
    };

    var me = function me() {
      this._init = function (we, Ab, Mc, options) {
        me.prototype._init.call(this, we, Ab, Mc, ne, options);

        this.materials = [];
        this.
        /**/
        model.materials.forEach(function (value) {
          this.materials.push(['source-over', 'lighter', 'multiply'][value]);
        }, this);
        this.
        /**/
        textureDescs = [];
      };
    };

    me.prototype = new ke();

    me.prototype.
    /**/
    draw = function (
    /**/
    context,
    /**/
    camera) {
      for (var i = 0; i < this.od.length; ++i) {
        this.od[i].Hd(
        /**/
        context,
        /**/
        camera);
      }
    };

    this.createWGLInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    renderBuffer,
    /**/
    options) {
      var Ld = new le();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      renderBuffer,
      /**/
      options || {});

      return Ld;
    };

    this.createCanvas2DInstance = function (
    /**/
    position,
    /**/
    rotation,
    /**/
    options) {
      var Ld = new me();

      Ld._init(this,
      /**/
      position,
      /**/
      rotation,
      /**/
      options || {});

      return Ld;
    };

    this.textures = ['blurable_bubble.png'];
    this.materials = [0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 600;

    function Emitter_DefaultEmitter() {
      var _1,
          _3,
          _4 = [],
          _4i,
          _4s = [],
          _5,
          _6 = [],
          _9,
          _9i0,
          _9s0 = [],
          _11,
          _11i0,
          _11s0 = [],
          _12,
          _13,
          _14 = [],
          _14a = [],
          _14i = [],
          _15,
          _15i0,
          _15s0 = [],
          _16 = [],
          _16a = [],
          _16i = [],
          _17 = [],
          _17fs = [],
          _17vs = [],
          _17rw = [],
          _17rwn = [],
          _17rwl,
          _17v = [],
          _17p = [],
          _17dtl,
          _17dtp,
          _17df,
          _17fsd = [],
          _19,
          _19i0,
          _19s0 = [],
          _20,
          _21,
          _21i0,
          _21s0 = [],
          _18,
          _22,
          _23,
          _23i0,
          _23s0 = [],
          _24,
          _25,
          _25i0,
          _25s0 = [];

      this.pe = [{
        xe: 0,
        Rc: 8,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._4 = [[[-69.7778, 597.194], [-11.7124, 597.628], [46.354, 597.847], [104.423, 597.967], [162.495, 598.028], [220.562, 598.054], [278.633, 598.057], [336.702, 598.048], [394.77, 598.035], [452.839, 598.026], [510.91, 598.03], [568.977, 598.055], [627.048, 598.117], [685.118, 598.236], [743.184, 598.456], [801.25, 598.889], [801.25, 598.889]]];
        Bd._9 = [[[5.07027, 15.7745, 15.7745]]];
        Bd._11 = [[[4, 2, 2]]];
        Bd._15 = [[[0, 4.3328, 25.796, 65.888, 125.577, 204.724, 301.348, 411.012, 526.867, 640.732, 744.903, 833.676, 903.891, 954.566, 986.181, 1000, 1000]]];
        Bd._19 = [[[2.50205, 1, 1], [1, 1.31557, 1.31557]]];
        Bd._21 = [[[0.583734, 1, 1], [1, 0.757178, 0.757178]]];
        Bd._23 = [[[0, 1, 1], [1, 1, 1], [1, 0, 0]]];
        Bd._25 = [[[7.68724, 0, 0], [0, 7.74979, 7.74979]]];
        Bd.jd = 600;
        Bd.Vc = 2;
      };

      this.Mb = function (vd) {
        vd.zb = 60;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 60;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._2 = _1;
        _3 = 0 + Bd.Ld.rand() * (1 - 0);
        _4i = Db.kb(_3);
        ctx.V(_4s, 0, (_4i - 0) * 15);
        Db.lb(_4, Bd._4[_4s[0]], _4s[1]);
        _5 = -400 + Bd.Ld.rand() * (400 - -400);
        ctx.W(_6, _4[0], _4[1], _5);
        Xb._7 = [];
        ctx.T(Xb._7, _6);
        Xb._8 = [];
        ctx.T(Xb._8, [0, 0, 0]);
        _9i0 = Xb._2 < 0 ? 0 : Xb._2 > 1 ? 1 : Xb._2;
        ctx.V(_9s0, 0, (_9i0 - 0) * 1);
        _9 = Db.nb(Bd._9[0][_9s0[0]], _9s0[1]);
        Xb._10 = _9;
        ctx.T(Xb.Ab, Xb._7);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._2 = _1;
        _3 = 0 + Bd.Ld.rand() * (1 - 0);
        _4i = Db.kb(_3);
        ctx.V(_4s, 0, (_4i - 0) * 15);
        Db.lb(_4, Bd._4[_4s[0]], _4s[1]);
        _5 = -400 + Bd.Ld.rand() * (400 - -400);
        ctx.W(_6, _4[0], _4[1], _5);
        Xb._7 = [];
        ctx.T(Xb._7, _6);
        Xb._8 = [];
        ctx.T(Xb._8, [0, 0, 0]);
        _9i0 = Xb._2 < 0 ? 0 : Xb._2 > 1 ? 1 : Xb._2;
        ctx.V(_9s0, 0, (_9i0 - 0) * 1);
        _9 = Db.nb(Bd._9[0][_9s0[0]], _9s0[1]);
        Xb._10 = _9;
        ctx.T(Xb.Ab, Xb._7);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        _11i0 = Xb._2 < 0 ? 0 : Xb._2 > 1 ? 1 : Xb._2;
        ctx.V(_11s0, 0, (_11i0 - 0) * 1);
        _11 = Db.nb(Bd._11[0][_11s0[0]], _11s0[1]);
        _12 = ctx.d(Xb._7, ctx.v([0, 40, -200], Bd.Rb));
        _13 = ctx.d(Xb._7, ctx.v([0, 200, -50], Bd.Rb));
        ctx.u(_14a, [0, 0, 0], Bd.Ld.Rb);
        ctx.c(_14a, _14a, _13);
        ctx.u(_14i, _14a, 1.0 / 5000);
        ctx.xb(_14, _14i);
        ctx.k(_14, _14, [0.0078125, 0.0078125, 0.0078125]);
        ctx.c(_14, _14, [-1, -1, -1]);
        ctx.u(_14, _14, 1);
        _15i0 = _14[2] < -1 ? -1 : _14[2] > 1 ? 1 : _14[2];
        ctx.V(_15s0, 0, (_15i0 - -1) * 7.5);
        _15 = Db.nb(Bd._15[0][_15s0[0]], _15s0[1]);
        ctx.u(_16a, [0, 0, 0], Bd.Ld.Rb);
        ctx.c(_16a, _16a, _12);
        ctx.u(_16i, _16a, 1.0 / 1000);
        ctx.xb(_16, _16i);
        ctx.k(_16, _16, [0.0078125, 0.0078125, 0.0078125]);
        ctx.c(_16, _16, [-1, -1, -1]);
        ctx.u(_16, _16, _15);
        ctx.T(_17fs, [0, -100, 0]);
        ctx.c(_17fs, _17fs, _16);
        ctx.T(_17vs, [0, 0, 0]);
        _17dtl = Qb;
        ctx.T(_17v, Xb._8);
        ctx.T(_17p, Xb._7);

        while (_17dtl > 0.0001) {
          _17dtp = _17dtl;
          ctx.T(_17fsd, _17fs);
          ctx.g(_17rw, _17vs, _17v);
          _17rwl = ctx.P(_17rw);

          if (_17rwl > 0.0001) {
            _17rwl = Math.sqrt(_17rwl);
            ctx.w(_17rwn, _17rw, _17rwl);
            _17df = 0.01 * _11 * _17rwl;
            if (_17df * _17dtp > 0.2) _17dtp = 0.2 / _17df;
            ctx.c(_17fsd, _17fsd, ctx.v(_17rwn, _17rwl * _17df));
          }

          ctx.c(_17v, _17v, ctx.v(_17fsd, _17dtp));
          ctx.c(_17p, _17p, ctx.v(_17v, _17dtp));
          _17dtl -= _17dtp;
        }

        ctx.T(Xb._7, _17p);
        ctx.T(Xb._8, _17v);
        ctx.T(Xb.Ab, Xb._7);
        _19i0 = Xb._7[2] < -400 ? -400 : Xb._7[2] > 400 ? 400 : Xb._7[2];
        _19i0 < 1 ? ctx.V(_19s0, 0, (_19i0 - -400) * 0.00249377) : ctx.V(_19s0, 1, (_19i0 - 1) * 0.00250627);
        _19 = Db.nb(Bd._19[0][_19s0[0]], _19s0[1]);
        _20 = Xb._10 * _19;
        _21i0 = Xb._7[2] < -400 ? -400 : Xb._7[2] > 400 ? 400 : Xb._7[2];
        _21i0 < 0 ? ctx.V(_21s0, 0, (_21i0 - -400) * 0.0025) : ctx.V(_21s0, 1, (_21i0 - 0) * 0.0025);
        _21 = Db.nb(Bd._21[0][_21s0[0]], _21s0[1]);
        _18 = 10;
        _22 = Xb._ / _18;
        _23i0 = _22 < 0 ? 0 : _22 > 1 ? 1 : _22;
        _23i0 < 0.9 ? _23i0 < 0.1 ? ctx.V(_23s0, 0, (_23i0 - 0) * 10) : ctx.V(_23s0, 1, (_23i0 - 0.1) * 1.25) : ctx.V(_23s0, 2, (_23i0 - 0.9) * 10);
        _23 = Db.nb(Bd._23[0][_23s0[0]], _23s0[1]);
        _24 = _21 * _23;
        _25i0 = Xb._7[2] < -400 ? -400 : Xb._7[2] > 400 ? 400 : Xb._7[2];
        _25i0 < 0 ? ctx.V(_25s0, 0, (_25i0 - -400) * 0.0025) : ctx.V(_25s0, 1, (_25i0 - 0) * 0.0025);
        _25 = Db.nb(Bd._25[0][_25s0[0]], _25s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = 0;
        ctx.V(Xb.Nd, _20, _20);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = _24;
        Xb.Qc = _25 < 0 ? 0 : _25 >= 8 ? 7 : _25;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _18 = 10;
        if (Xb._ > _18) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 15;
      Ld.presimFrameTime = 0.1;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_DefaultEmitter());
    };

    this.kb = function (v) {
      return v < 0 ? 0 : v > 1 ? 1 : v;
    };

    this.lb = function (r, path, je) {
      var indexInt = Math.floor(je);
      var lerp = je - indexInt;
      ctx.Y(r, path[indexInt], path[indexInt + 1], lerp);
    };

    this.nb = function (funcValues, je) {
      var indexInt = Math.floor(je);
      var nextInt = indexInt + 1;
      return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt);
    };
  }

  return Bubbles;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXEJ1YmJsZXMuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiTmV1dHJpbm9FZmZlY3QiLCJuYW1lc3BhY2UiLCJfX2xhc3RfXyIsInNlbGYiLCJCdWJibGVzIiwiY3R4IiwiRGIiLCJuZSIsIkxkIiwiQmQiLCJ3ZSIsInBlIiwibGVuZ3RoIiwiTGMiLCJwcm90b3R5cGUiLCJFYyIsIkZjIiwieGUiLCJmZSIsIkFiIiwiWGIiLCJHYyIsImliIiwiTWQiLCJIYyIsIk1hdGgiLCJjb3MiLCJJYyIsInNpbiIsInllIiwiQWUiLCJOZCIsInplIiwidHJhbnNmb3JtIiwicSIsIk1jIiwiejIiLCJ4eSIsInd6IiwiUGMiLCJnZSIsInZjIiwiQmUiLCJvYyIsIk9kIiwiRGUiLCJmbG9vciIsIlFjIiwiUmMiLCJFZSIsInNsaWNlIiwiZGYiLCJhYnMiLCJlZiIsInNhdmUiLCJ0cmFuc2xhdGUiLCJQZCIsImdsb2JhbEFscGhhIiwiZ2YiLCJZZSIsIlRjIiwiWmUiLCJVYyIsImFmIiwiYmYiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJkcmF3SW1hZ2UiLCJpbWFnZSIsIngiLCJ5IiwiZmlsbFN0eWxlIiwiZmYiLCJmaWxsUmVjdCIsImNmIiwicmVzdG9yZSIsIkhkIiwibWF0ZXJpYWxzIiwibW9kZWwiLCJyZW5kZXJTdHlsZXMiLCJyZW5kZXJTdHlsZUluZGV4IiwibWF0ZXJpYWxJbmRleCIsInRleHR1cmVEZXNjcyIsInRleHR1cmVJbmRpY2VzIiwid2lkdGgiLCJoZWlnaHQiLCJTYyIsImtkIiwiYSIsImIiLCJWYyIsIldiIiwidGMiLCJzb3J0Iiwib2UiLCJ2ZXJ0ZXgiLCJwb3NpdGlvbiIsImNvbG9yIiwidGV4Q29vcmRzIiwicWUiLCJzZSIsInJlIiwidGUiLCJyZW5kZXJCdWZmZXIiLCJDZSIsInYwIiwidjEiLCJ2MiIsInYzIiwiRmUiLCJHZSIsInMiLCJjIiwiSGUiLCJJZSIsIkplIiwiS2UiLCJ1IiwicmdiIiwidiIsIlBlIiwiUWUiLCJSZSIsIlNlIiwiV2UiLCJ0ZXh0dXJlc1JlbWFwIiwiVWUiLCJWZSIsImJlZm9yZVF1YWQiLCJwdXNoVmVydGV4IiwiX19sYXN0UmVuZGVyQ2FsbCIsIlJlbmRlckNhbGwiLCJsYXN0UmVuZGVyQ2FsbCIsIm51bUluZGljZXMiLCJwdXNoUmVuZGVyQ2FsbCIsInN0YXJ0SW5kZXgiLCJ1ZSIsImZvckVhY2giLCJkZXB0aCIsIkgiLCJsZCIsInZlIiwiVmIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiS2IiLCJMYiIsIk1iIiwiTmIiLCJPYiIsIkpkIiwiSWQiLCJRYiIsIlBiIiwiUmIiLCJzeXN0ZW1UaW1lIiwiU2IiLCJpYyIsInpiIiwiVGIiLCJVYiIsImRpc2FjdGl2YXRlIiwiYWIiLCJCYiIsInNsZXJwcSIsInByZXZSb3RhdGlvbiIsIkpiIiwic2MiLCJwb3AiLCJ1bnNoaWZ0IiwiWWIiLCJaYiIsIlQiLCJVIiwiYWMiLCJiYyIsImNjIiwiZGMiLCJzeXN0ZW1UaW1lQmVmb3JlRnJhbWUiLCJzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSIsImVjIiwiTyIsImgiLCJmYyIsInJkIiwiaGMiLCJqYyIsImtjIiwiWCIsIm1jIiwiS2MiLCJuYyIsImkiLCJwYyIsIkFkIiwic2QiLCJmZCIsImdkIiwicWMiLCJyYyIsImplIiwidWMiLCJtZCIsIm5kIiwicHVzaCIsInhjIiwid2MiLCJhY3RpdmF0ZSIsInljIiwiR2QiLCJFZCIsInpjIiwiQWMiLCJDYyIsIldjIiwiY29uc3RydWN0IiwiWWMiLCJhZCIsImRkIiwidmQiLCJlZCIsInVkIiwiamQiLCJpZCIsImhkIiwid2QiLCJaYyIsInBhdXNlZF8iLCJnZW5lcmF0b3JzUGF1c2VkXyIsIlciLCJhcHBseSIsIlRkIiwic2hpZnQiLCJnIiwidyIsInhkIiwicmVhZHkiLCJhY3RpdmF0ZWQiLCJzcGxpY2UiLCJwYXVzZSIsInVucGF1c2UiLCJwYXVzZWQiLCJwYXVzZUdlbmVyYXRvcnMiLCJ1bnBhdXNlR2VuZXJhdG9ycyIsImdlbmVyYXRvcnNQYXVzZWQiLCJnZXROdW1QYXJ0aWNsZXMiLCJrZSIsIkNiIiwiX2luaXQiLCJvcHRpb25zIiwib2QiLCJwZCIsImNvbmNhdCIsIm5hbWUiLCJDZCIsInFkIiwiX3ByZXNpbU5lZWRlZCIsInBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMiLCJwYXVzZUFsbEVtaXR0ZXJzIiwiemVyb1VwZGF0ZSIsInVwZGF0ZUZpeGVkIiwiVWQiLCJwcmVzaW1GcmFtZVRpbWUiLCJyZXN0YXJ0Iiwicm90YXRpb24iLCJ1cGRhdGUiLCJkdCIsIkRkIiwidXBkYXRlRmxleCIsImZyYW1lVGltZSIsInVwZGF0ZWRUaW1lIiwiZnJhbWVSb3RhdGlvbiIsImVxdWFsdjNfIiwiZXF1YWxxXyIsInJlc2V0UG9zaXRpb24iLCJzZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMiLCJ2YWx1ZSIsInByb3BOYW1lIiwiQXJyYXkiLCJTIiwidW5wYXVzZUFsbEVtaXR0ZXJzIiwiYXJlQWxsRW1pdHRlcnNQYXVzZWQiLCJ1bnBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMiLCJhcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCIsIm51bVBhcnRpY2xlcyIsImxlIiwiY2FsbCIsImluZGljZXMiLCJ2ZXJEaXNwIiwiWGUiLCJpbml0aWFsaXplIiwiX19udW1JbmRpY2VzIiwiZmlsbEdlb21ldHJ5QnVmZmVycyIsImNhbWVyYVJpZ2h0IiwiY2FtZXJhVXAiLCJjYW1lcmFEaXIiLCJjbGVhbnVwIiwibWUiLCJkcmF3IiwiY29udGV4dCIsImNhbWVyYSIsImNyZWF0ZVdHTEluc3RhbmNlIiwiY3JlYXRlQ2FudmFzMkRJbnN0YW5jZSIsInRleHR1cmVzIiwiRW1pdHRlcl9EZWZhdWx0RW1pdHRlciIsIl8xIiwiXzMiLCJfNCIsIl80aSIsIl80cyIsIl81IiwiXzYiLCJfOSIsIl85aTAiLCJfOXMwIiwiXzExIiwiXzExaTAiLCJfMTFzMCIsIl8xMiIsIl8xMyIsIl8xNCIsIl8xNGEiLCJfMTRpIiwiXzE1IiwiXzE1aTAiLCJfMTVzMCIsIl8xNiIsIl8xNmEiLCJfMTZpIiwiXzE3IiwiXzE3ZnMiLCJfMTd2cyIsIl8xN3J3IiwiXzE3cnduIiwiXzE3cndsIiwiXzE3diIsIl8xN3AiLCJfMTdkdGwiLCJfMTdkdHAiLCJfMTdkZiIsIl8xN2ZzZCIsIl8xOSIsIl8xOWkwIiwiXzE5czAiLCJfMjAiLCJfMjEiLCJfMjFpMCIsIl8yMXMwIiwiXzE4IiwiXzIyIiwiXzIzIiwiXzIzaTAiLCJfMjNzMCIsIl8yNCIsIl8yNSIsIl8yNWkwIiwiXzI1czAiLCJfIiwicmFuZCIsIl8yIiwia2IiLCJWIiwibGIiLCJfNyIsIl84IiwibmIiLCJfMTAiLCJkIiwieGIiLCJrIiwiUCIsInNxcnQiLCJyYW5kb20iLCJyIiwicGF0aCIsImluZGV4SW50IiwibGVycCIsIlkiLCJmdW5jVmFsdWVzIiwibmV4dEludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdDLFdBQVVBLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3RCLE1BQUksT0FBT0MsT0FBUCxLQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFdBQXJELEVBQWtFO0FBQzlEQSxJQUFBQSxNQUFNLENBQUNELE9BQVAsR0FBaUJELE9BQU8sRUFBeEI7QUFDSCxHQUZELE1BRU8sSUFBSSxPQUFPRyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxNQUFNLENBQUNDLEdBQTNDLEVBQWdEO0FBQ25ERCxJQUFBQSxNQUFNLENBQUMsQ0FBQyxTQUFELENBQUQsRUFBYyxVQUFVRixPQUFWLEVBQW1CO0FBQ25DLE9BQUNGLElBQUksQ0FBQ00sY0FBTCxHQUFzQkosT0FBdkIsRUFBZ0MsU0FBaEMsSUFBNkNELE9BQU8sRUFBcEQ7QUFDSCxLQUZLLENBQU47QUFHSCxHQUpNLE1BSUE7QUFDSCxRQUFJTSxTQUFTLEdBQUlQLElBQUksQ0FBQ00sY0FBTCxLQUF3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QUUsQ0FBQ3FQLEVBQUgsQ0FBTSxJQUFJcUQsc0JBQUosRUFBTjtBQUNBLEtBTkQ7O0FBT0MsU0FBS3dELEVBQUwsR0FBVSxVQUFVcFAsQ0FBVixFQUFhO0FBQUssYUFBUUEsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUFWLEdBQWdCQSxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQVYsR0FBY0EsQ0FBcEM7QUFBMkMsS0FBdkU7O0FBRUEsU0FBS3NQLEVBQUwsR0FBVSxVQUFVVyxDQUFWLEVBQWFDLElBQWIsRUFBbUI5SyxFQUFuQixFQUF1QjtBQUFLLFVBQUkrSyxRQUFRLEdBQUdoVyxJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSWdMLElBQUksR0FBR2hMLEVBQUUsR0FBRytLLFFBQWhCO0FBQTZCcFgsTUFBQUEsR0FBRyxDQUFDc1gsQ0FBSixDQUFNSixDQUFOLEVBQVNDLElBQUksQ0FBQ0MsUUFBRCxDQUFiLEVBQXlCRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFaLENBQTdCLEVBQTZDQyxJQUE3QztBQUF1RCxLQUE1Sjs7QUFFQSxTQUFLWCxFQUFMLEdBQVUsVUFBU2EsVUFBVCxFQUFxQmxMLEVBQXJCLEVBQXlCO0FBQUssVUFBSStLLFFBQVEsR0FBR2hXLElBQUksQ0FBQ3FCLEtBQUwsQ0FBVzRKLEVBQVgsQ0FBZjtBQUFrQyxVQUFJbUwsT0FBTyxHQUFHSixRQUFRLEdBQUcsQ0FBekI7QUFBK0IsYUFBT3BYLEdBQUcsQ0FBQ3lMLENBQUosQ0FBTThMLFVBQVUsQ0FBQ0gsUUFBRCxDQUFoQixFQUE0QkcsVUFBVSxDQUFDQyxPQUFELENBQXRDLEVBQWlEbkwsRUFBRSxHQUFHK0ssUUFBdEQsQ0FBUDtBQUEyRSxLQUFwTDtBQUdEOztBQUVELFNBQU9yWCxPQUFQO0FBQ0MsQ0F6MkNBLENBQUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDlhOTFlNmVhLThlZjgtNDRhNi05Y2I5LTBkODRkNDM2NWFkN1xyXG5cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydleHBvcnRzJ10sIGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgICAgICAgICAgIChyb290Lk5ldXRyaW5vRWZmZWN0ID0gZXhwb3J0cylbJ0J1YmJsZXMnXSA9IGZhY3RvcnkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IChyb290Lk5ldXRyaW5vRWZmZWN0IHx8IChyb290Lk5ldXRyaW5vRWZmZWN0ID0ge30pKTtcclxuICAgICAgICBuYW1lc3BhY2UuX19sYXN0X18gPSBuYW1lc3BhY2VbJ0J1YmJsZXMnXSA9IGZhY3RvcnkoKTtcclxuICAgIH1cclxufSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xyXG5cclxuZnVuY3Rpb24gQnViYmxlcyhjdHgpIHtcclxuXHR2YXIgRGIgPSB0aGlzO1xyXG5cclxuXHR2YXIgbmUgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLkJkID0gQmQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuQmQud2UucGUubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLndlID0gdGhpcy5CZC53ZS5wZVswXTtcclxuXHJcblx0XHRcdHRoaXMuTGMgPSBbbmUucHJvdG90eXBlLkVjLFxyXG5cdFx0XHRcdG5lLnByb3RvdHlwZS5GY11bdGhpcy53ZS54ZV07XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMud2UgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0bmUucHJvdG90eXBlID0ge1xyXG5cdFx0RWM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBHYyA9IGN0eC5pYihYYi5NZCk7XHJcblx0XHRcdHZhciBIYyA9IE1hdGguY29zKEdjKTtcclxuXHRcdFx0dmFyIEljID0gTWF0aC5zaW4oR2MpO1xyXG5cdFx0XHR2YXIgeWUgPSBjdHguQWUoWGIuTmRbMF0pO1xyXG5cdFx0XHR2YXIgemUgPSBjdHguQWUoWGIuTmRbMV0pO1xyXG5cdFx0XHRmZS4vKiovdHJhbnNmb3JtKHllICogSGMsIHllICogSWMsIHplICogLUljLCB6ZSAqIEhjLCBBYlswXSwgQWJbMV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRGYzogZnVuY3Rpb24gKGZlLCBBYiwgWGIpIHtcclxuXHRcdFx0dmFyIHEgPSBYYi5NYztcclxuXHRcdFx0dmFyIHoyID0gMi4wICogcVsyXSAqIHFbMl07XHJcblx0XHRcdHZhciB4eSA9IDIuMCAqIHFbMF0gKiBxWzFdO1xyXG5cdFx0XHR2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybShcclxuXHRcdFx0XHR5ZSAqICgxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyKSxcclxuXHRcdFx0XHR5ZSAqICh4eSArIHd6KSxcclxuXHRcdFx0XHR6ZSAqICh3eiAtIHh5KSxcclxuXHRcdFx0XHR6ZSAqICgyLjAgKiBxWzBdICogcVswXSArIHoyIC0gMS4wKSxcclxuXHRcdFx0XHRBYlswXSwgQWJbMV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRQYzogZnVuY3Rpb24gKGZlLCBYYiwgZ2UpIHtcclxuXHRcdFx0WGIudmMoZmUsIC0xLCBnZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5CZSAhPSBudWxsICYmICFYYi5vYykge1xyXG5cclxuXHRcdFx0XHRcdGlmIChYYi5PZCA+IDAuMDAxKSB7XHJcblx0XHRcdFx0XHRcdHZhciBEZSA9IE1hdGguZmxvb3IoWGIuUWMgJSB0aGlzLndlLlJjKTtcclxuXHRcdFx0XHRcdFx0dmFyIEVlID0gTWF0aC5mbG9vcihYYi5RYyAvIHRoaXMud2UuUmMpO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIEFiID0gWGIuQWIuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0dmFyIE5kID0gWGIuTmQuc2xpY2UoKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFnZSB8fCBnZS4vKiovdHJhbnNmb3JtKEFiLCBOZCkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGRmID0gTWF0aC5hYnMoTmRbMF0pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBlZiA9IE1hdGguYWJzKE5kWzFdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRmID4gMC4wMDEgJiYgZWYgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmUuc2F2ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5MYyhmZSwgQWIsIFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmZS50cmFuc2xhdGUoLWRmICogWGIuUGRbMF0sIC1lZiAqICgxIC0gWGIuUGRbMV0pKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLmdsb2JhbEFscGhhICo9IFhiLk9kO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChYYi5nZlswXSA8IDAuOTk5IHx8IFhiLmdmWzFdIDwgMC45OTkgfHwgWGIuZ2ZbMl0gPCAwLjk5OSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGYgPj0gMSAmJiBlZiA+PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIFllID0gZGYgPCB0aGlzLlRjID8gZGYgOiB0aGlzLlRjO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBaZSA9IGVmIDwgdGhpcy5VYyA/IGVmIDogdGhpcy5VYztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmFmKFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImNvcHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJtdWx0aXBseVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5maWxsU3R5bGUgPSBjdHguZmYoWGIuZ2YpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5maWxsUmVjdCgwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1hdG9wXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmUuZHJhd0ltYWdlKGN0eC5jZiwgMCwgMCwgWWUsIFplLCAwLCAwLCBkZiwgZWYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmUuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYywgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi52YyhmZSwgMSwgZ2UpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRIZDogZnVuY3Rpb24gKGZlLCBnZSkge1xyXG5cdFx0XHRmZS5zYXZlKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cdFx0XHRcdGZlLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IHRoaXMuTGQubWF0ZXJpYWxzW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLm1hdGVyaWFsSW5kZXhdO1xyXG5cdFx0XHRcdHRoaXMuQmUgPSB0aGlzLkxkLnRleHR1cmVEZXNjc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5CZSA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLkJlKSB7XHJcblx0XHRcdFx0dGhpcy5UYyA9IHRoaXMuQmUud2lkdGggLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdHRoaXMuVWMgPSB0aGlzLkJlLmhlaWdodCAvIHRoaXMud2UuU2M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIGtkKGEsIGIpIHtcclxuXHRcdFx0XHRpZiAoYS5BYlsyXSA+IGIuQWJbMl0pXHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRpZiAoYS5BYlsyXSA8IGIuQWJbMl0pXHJcblx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXRjaCAodGhpcy5CZC5WYykge1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSB0aGlzLkJkLnRjLmxlbmd0aDsgV2ItLSA+IDA7KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLnNvcnQoa2QpO1xyXG5cclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZlLnJlc3RvcmUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBvZSA9IGZ1bmN0aW9uIChMZCwgQmQpIHtcclxuXHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLkJkID0gQmQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuQmQud2UucGUubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMud2UgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMudmVydGV4ID0gW1xyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH1dO1xyXG5cdH1cclxuXHJcblx0b2UucHJvdG90eXBlID0ge1xyXG5cdFx0cWU6IGZ1bmN0aW9uIChYYiwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFhiLkNlKC0xLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKCFYYi5vYykge1xyXG5cclxuXHRcdFx0XHRcdHZhciB2MCA9IHRoaXMudmVydGV4WzBdO1xyXG5cdFx0XHRcdFx0dmFyIHYxID0gdGhpcy52ZXJ0ZXhbMV07XHJcblx0XHRcdFx0XHR2YXIgdjIgPSB0aGlzLnZlcnRleFsyXTtcclxuXHRcdFx0XHRcdHZhciB2MyA9IHRoaXMudmVydGV4WzNdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBGZSA9IFtdLCBHZSA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLndlLnhlID09IDApIHtcclxuXHRcdFx0XHRcdFx0dmFyIGEgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHRcdFx0XHR2YXIgcyA9IC1NYXRoLnNpbihhKTtcclxuXHRcdFx0XHRcdFx0dmFyIGMgPSBNYXRoLmNvcyhhKTtcclxuXHJcblx0XHRcdFx0XHRcdEZlWzBdID0gc2VbMF0gKiBjICsgcmVbMF0gKiBzO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHNlWzFdICogYyArIHJlWzFdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMl0gPSBzZVsyXSAqIGMgKyByZVsyXSAqIHM7XHJcblxyXG5cdFx0XHRcdFx0XHRHZVswXSA9IC1zZVswXSAqIHMgKyByZVswXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzFdID0gLXNlWzFdICogcyArIHJlWzFdICogYztcclxuXHRcdFx0XHRcdFx0R2VbMl0gPSAtc2VbMl0gKiBzICsgcmVbMl0gKiBjO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdFx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHRcdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0XHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IDEuMCAtIDIuMCAqIHFbMV0gKiBxWzFdIC0gejI7XHJcblx0XHRcdFx0XHRcdEZlWzFdID0geHkgKyB3ejtcclxuXHRcdFx0XHRcdFx0RmVbMl0gPSAyLjAgKiBxWzBdICogcVsyXSAtIDIuMCAqIHFbM10gKiBxWzFdO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSB4eSAtIHd6O1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IDEuMCAtIDIuMCAqIHFbMF0gKiBxWzBdIC0gejI7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gMi4wICogcVsxXSAqIHFbMl0gKyAyLjAgKiBxWzNdICogcVswXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgSGUgPSBbXSwgSWUgPSBbXSwgSmUgPSBbXSwgS2UgPSBbXTtcclxuXHRcdFx0XHRcdGN0eC51KEhlLCBGZSwgLVhiLk5kWzBdICogWGIuUGRbMF0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSWUsIEZlLCBYYi5OZFswXSAqICgxLjAgLSBYYi5QZFswXSkpO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSmUsIEdlLCAtWGIuTmRbMV0gKiBYYi5QZFsxXSk7XHJcblx0XHRcdFx0XHRjdHgudShLZSwgR2UsIFhiLk5kWzFdICogKDEuMCAtIFhiLlBkWzFdKSk7XHJcblxyXG5cdFx0XHRcdFx0Y3R4LmModjAuLyoqL3Bvc2l0aW9uLCBIZSwgSmUpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjAuLyoqL3Bvc2l0aW9uLCB2MC4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYxLi8qKi9wb3NpdGlvbiwgSGUsIEtlKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYxLi8qKi9wb3NpdGlvbiwgdjEuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2Mi4vKiovcG9zaXRpb24sIEllLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2Mi4vKiovcG9zaXRpb24sIHYyLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjMuLyoqL3Bvc2l0aW9uLCBJZSwgSmUpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjMuLyoqL3Bvc2l0aW9uLCB2My4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciByZ2IgPSBjdHgudihYYi5nZiwgMjU1KTtcclxuXHRcdFx0XHRcdFx0djAuLyoqL2NvbG9yID0gdjEuLyoqL2NvbG9yID0gdjIuLyoqL2NvbG9yID0gdjMuLyoqL2NvbG9yID0gW3JnYlswXSwgcmdiWzFdLCByZ2JbMl0sIFhiLk9kICogMjU1XTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciBEZSA9IE1hdGguZmxvb3IoWGIuUWMgJSB0aGlzLndlLlJjKTtcclxuXHRcdFx0XHRcdFx0dmFyIEVlID0gTWF0aC5mbG9vcihYYi5RYyAvIHRoaXMud2UuUmMpO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIFBlLCBRZSwgUmUsIFNlO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIFdlID0gdGhpcy5MZC50ZXh0dXJlc1JlbWFwW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLnRleHR1cmVJbmRpY2VzWzBdXTtcclxuXHRcdFx0XHRcdFx0aWYgKFdlKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFVlID0gV2Uud2lkdGggLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IFdlLmhlaWdodCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IFdlLnggKyBEZSAqIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBRZSA9IFBlICsgVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFJlID0gKFdlLnkgKyBXZS5oZWlnaHQgLSBFZSAqIFZlKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2UgPSBSZSAtIFZlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IDEuMCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFZlID0gMS4wIC8gdGhpcy53ZS5TYztcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFBlID0gRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9ICgxLjAgLSBFZSAqIFZlKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgU2UgPSBSZSAtIFZlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR2MC4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBTZV07XHJcblx0XHRcdFx0XHRcdHYxLi8qKi90ZXhDb29yZHNbMF0gPSBbUGUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djIuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgUmVdO1xyXG5cdFx0XHRcdFx0XHR2My4vKiovdGV4Q29vcmRzWzBdID0gW1FlLCBTZV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJlbmRlckJ1ZmZlci5iZWZvcmVRdWFkKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5iZWZvcmVRdWFkKHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjApO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjEpO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjIpO1xyXG5cdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hWZXJ0ZXgodjMpO1xyXG5cclxuXHRcdFx0XHRcdGlmICghcmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpIHtcclxuXHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBuZXcgY3R4LlJlbmRlckNhbGwoMCwgNiwgdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBsYXN0UmVuZGVyQ2FsbCA9IHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxhc3RSZW5kZXJDYWxsLnJlbmRlclN0eWxlSW5kZXggPT0gdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwubnVtSW5kaWNlcyArPSA2O1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoUmVuZGVyQ2FsbChsYXN0UmVuZGVyQ2FsbCk7XHJcblx0XHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBuZXcgY3R4LlJlbmRlckNhbGwoXHJcblx0XHRcdFx0XHRcdFx0XHRsYXN0UmVuZGVyQ2FsbC5zdGFydEluZGV4ICsgbGFzdFJlbmRlckNhbGwubnVtSW5kaWNlcyxcclxuXHRcdFx0XHRcdFx0XHRcdDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFhiLkNlKDEsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVlOiBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdHN3aXRjaCAodGhpcy5CZC5WYykge1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkJkLnRjLmxlbmd0aDsgKytXYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKHRoaXMuQmQudGNbV2JdLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKHRoaXMuQmQudGNbV2JdLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuZm9yRWFjaChmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0XHRcdFx0WGIuZGVwdGggPSBjdHguSCh0ZSwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoIDwgYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRcdFx0aWYgKGEuZGVwdGggPiBiLmRlcHRoKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgbGQgPSBmdW5jdGlvbiAoTGQsIHdlLCB2ZSkge1xyXG5cdFx0dmFyIFZiID0gdGhpcztcclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMud2UgPSB3ZTtcclxuXHJcblx0XHQvLyBFYlxyXG5cclxuXHRcdGZ1bmN0aW9uIEViKCkge1xyXG5cdFx0XHR0aGlzLkZiID0gMDtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuSGIgPSBudWxsO1xyXG5cdFx0XHR0aGlzLkliID0gbnVsbDtcclxuXHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdHRoaXMuTGIgPSAxO1xyXG5cclxuXHRcdFx0VmIud2UuTWIodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5PYiA9IHRoaXMuR2I7XHJcblx0XHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRFYi5wcm90b3R5cGUgPSB7XHJcblx0XHRcdEpkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblx0XHRcdFx0VmIud2UuUGIoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR2YXIgUmIgPSBWYi5SYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZSA9IExkLlJiO1xyXG5cdFx0XHRcdHZhciBTYiA9IFFiO1xyXG5cdFx0XHRcdHZhciBpYyA9IDA7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnpiID4gMC4wMDAwMDEpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgVGIgPSB0aGlzLk9iICsgUWIgKiB0aGlzLnpiO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+PSAxLjApIHtcclxuXHRcdFx0XHRcdFx0dmFyIFViID0gdGhpcy56YiA8IDAuMDAxID8gMC4wIDogKDEuMCAtIHRoaXMuT2IpIC8gdGhpcy56YjtcclxuXHRcdFx0XHRcdFx0U2IgLT0gVWI7XHJcblx0XHRcdFx0XHRcdFJiICs9IFViO1xyXG5cdFx0XHRcdFx0XHRzeXN0ZW1UaW1lICs9IFViO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuSGIgIT0gbnVsbCAmJiBSYiA+IHRoaXMuSGIpIHtcclxuXHRcdFx0XHRcdFx0XHRWYi5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRWYi5SYiA9IFJiO1xyXG5cdFx0XHRcdFx0XHRMZC5SYiA9IHN5c3RlbVRpbWU7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5hYihWYi5BYiwgQWIsIFZiLkJiLCBTYiAvIFFiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChNYyAmJiBRYiA+IDApXHJcblx0XHRcdFx0XHRcdFx0Y3R4LnNsZXJwcShWYi5NYywgTWMsIFZiLnByZXZSb3RhdGlvbiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgdGhlIGZ1dHVyZSB3aGVuIEpiIHdvdWxkIGJlIGV4dGVybmFsXHJcblx0XHRcdFx0XHRcdHRoaXMuTGIgPSB0aGlzLkpiO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuSmI7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoVmIuc2MubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuSmIgPT0gMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSBXYiAvICh0aGlzLkpiIC0gMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBYYiA9IFZiLnNjLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFZiLnRjLnVuc2hpZnQoWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoV2IgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlliKCk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWmIoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0WGIuSWQoU2IpO1xyXG5cdFx0XHRcdFx0XHRcdCsraWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuT2IgPSAwLjA7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkliICE9IG51bGwgJiYgKyt0aGlzLkZiID49IHRoaXMuSWIpIHtcclxuXHRcdFx0XHRcdFx0XHRWYi5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5PYiA9IFRiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRSYiArPSBTYjtcclxuXHRcdFx0XHRWYi5SYiA9IFJiO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY1xyXG5cclxuXHRcdGZ1bmN0aW9uIGFjKCkge1xyXG5cdFx0XHR0aGlzLkdiID0gMTtcclxuXHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdHRoaXMuTGIgPSAxO1xyXG5cclxuXHRcdFx0VmIud2UuTWIodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5iYyA9IHRoaXMuR2I7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRhYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdEpkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblx0XHRcdFx0VmIud2UuUGIoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR2YXIgY2MgPSBWYi5SYjtcclxuXHRcdFx0XHR2YXIgZGMgPSBjYyArIFFiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lQmVmb3JlRnJhbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUFmdGVyRnJhbWUgPSBzeXN0ZW1UaW1lQmVmb3JlRnJhbWUgKyBRYjtcclxuXHRcdFx0XHR2YXIgZWMgPSBBYiA/IGN0eC5PKGN0eC5oKEFiLCBWYi5CYikpIDogMDtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAoZWMgPiAwLjAwMDAwMSkge1xyXG5cdFx0XHRcdFx0dmFyIGZjID0gZWMgLyB0aGlzLnJkO1xyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5iYyArIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBoYyA9IGZjIDwgMC4wMDEgP1xyXG5cdFx0XHRcdFx0XHQxLjAgLSB0aGlzLmJjIDogKDEuMCAtIHRoaXMuYmMpIC8gZmM7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGpjID0gW107XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKFRiID4gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBrYyA9IGNjICsgaGMgKiBRYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoamMsIFZiLkJiLCBBYiwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBrYztcclxuXHRcdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIGpjKTtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBjdHguWChzeXN0ZW1UaW1lQmVmb3JlRnJhbWUsIHN5c3RlbVRpbWVBZnRlckZyYW1lLCBoYyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgdGhlIGZ1dHVyZSB3aGVuIEpiIHdvdWxkIGJlIGV4dGVybmFsXHJcblx0XHRcdFx0XHRcdHRoaXMuTGIgPSB0aGlzLkpiO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuSmI7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoVmIuc2MubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuSmIgPT0gMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuS2IgPSBXYiAvICh0aGlzLkpiIC0gMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBYYiA9IFZiLnNjLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRcdFZiLnRjLnVuc2hpZnQoWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoV2IgPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlliKCk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWmIoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0WGIuSWQoUWIgKiAoMS4wIC0gaGMpKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRoYyArPSAxLjAgLyBmYztcclxuXHRcdFx0XHRcdFx0VGIgLT0gMS4wO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuYmMgPSBUYjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFZiLlJiID0gZGM7XHJcblxyXG5cdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBBYik7XHJcblxyXG5cdFx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRcdGN0eC5VKFZiLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1jXHJcblxyXG5cdFx0ZnVuY3Rpb24gbWMoKSB7XHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5QZCA9IFtdO1xyXG5cdFx0XHR0aGlzLk5kID0gW107XHJcblx0XHRcdHRoaXMuZ2YgPSBbXTtcclxuXHRcdFx0dGhpcy5LYyA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1jLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0bmM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLm9jID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHRcdFx0XHRcdHBjLkJkLkpkKHRoaXMuQWIsIG51bGwpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZClcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRZYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmZkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFpiOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0VmIud2UuZ2QoVmIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHRcdFx0dGhpcy5uYygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0SWQ6IGZ1bmN0aW9uIChRYikge1xyXG5cdFx0XHRcdFZiLndlLnFjKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dGhpcy5yYyhRYik7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRwYzogZnVuY3Rpb24gKGplKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuS2NbamVdLkJkO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmM6IGZ1bmN0aW9uIChRYikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5LY1tpXS5CZC5JZChRYiwgdGhpcy5BYiwgbnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dWM6IGZ1bmN0aW9uIChtZCwgbmQpIHtcclxuXHRcdFx0XHR0aGlzLktjLnB1c2goe1xyXG5cdFx0XHRcdFx0QmQ6IG5ldyBsZChMZCwgbWQsIHZlKSxcclxuXHRcdFx0XHRcdEFkOiBuZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dmM6IGZ1bmN0aW9uIChmZSwgeGMsIGdlKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQuSGQoZmUsIGdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRDZTogZnVuY3Rpb24gKHhjLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhjID09IHBjLkFkLnhjKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHdjOiBmdW5jdGlvbiAoZmUpIHtcclxuXHRcdFx0XHR0aGlzLm9jID0gdHJ1ZTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHBjLkFkLnNkKSB7XHJcblx0XHRcdFx0XHRcdHBjLkJkLmFjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdHBjLkJkLklkKDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHljOiBmdW5jdGlvbiAoR2QpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuRWQoR2QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHpjXHJcblxyXG5cdFx0ZnVuY3Rpb24gemMoKSB7XHJcblx0XHR9XHJcblxyXG5cdFx0emMucHJvdG90eXBlLkFjID0gZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdHJldHVybiBWYi53ZS5DYyhWYiwgWGIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbGQgQWRcclxuXHJcblx0XHR0aGlzLkFiID0gW107XHJcblx0XHR0aGlzLkJiID0gW107XHJcblx0XHR0aGlzLk1jID0gW107XHJcblx0XHR0aGlzLnByZXZSb3RhdGlvbiA9IFtdO1xyXG5cdFx0dGhpcy50YyA9IFtdO1xyXG5cdFx0dGhpcy5zYyA9IFtdO1xyXG5cdFx0dGhpcy5XYyA9IG5ldyB6YygpO1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QgPSBuZXcgdmUodGhpcy5MZCwgdGhpcyk7XHJcblx0XHR0aGlzLlljID0gW107XHJcblx0XHR0aGlzLmFkID0gW107XHJcblxyXG5cdFx0dGhpcy5kZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy52ZCA9IG5ldyBFYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgYWMoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLndlLnVkKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuamQ7ICsrV2IpIHtcclxuXHRcdFx0dmFyIFhiID0gbmV3IG1jKCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgdGhpcy5ZYy5sZW5ndGg7ICsraWQpIHtcclxuXHRcdFx0XHR2YXIgaGQgPSB0aGlzLlljW2lkXTtcclxuXHRcdFx0XHRYYi51YyhoZC5EYiwgaGQuQWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjLnB1c2goWGIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jID8gTWMgOiBbMCwgMCwgMCwgMV0pO1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblxyXG5cdFx0XHR0aGlzLlJiID0gMC4wO1xyXG5cdFx0XHR0aGlzLndkID0gMC4wO1xyXG5cdFx0XHR0aGlzLlpjID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5wYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSBmYWxzZTtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSmQgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHR0aGlzLk5iKEFiLCBNYyk7XHJcblxyXG5cdFx0dGhpcy5zYy5wdXNoLmFwcGx5KHRoaXMuc2MsIHRoaXMudGMpO1xyXG5cdFx0dGhpcy50Yy5sZW5ndGggPSAwO1xyXG5cclxuXHRcdHRoaXMudmQuSmQoKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5JZCA9IGZ1bmN0aW9uIChRYiwgQWIsIE1jKSB7XHJcblxyXG5cdFx0aWYgKHRoaXMucGF1c2VkXylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5UZChBYiwgTWMpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRpZiAoUWIgPiAwLjAwMDEpIHtcclxuXHRcdFx0XHR2YXIgc2hpZnQgPSBbXTtcclxuXHRcdFx0XHRjdHguZyhzaGlmdCwgQWIsIHRoaXMuQmIpO1xyXG5cdFx0XHRcdGN0eC5UKHRoaXMuYWQsIHNoaWZ0KTtcclxuXHRcdFx0XHRjdHgudyh0aGlzLmFkLCB0aGlzLmFkLCBRYik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoTWMpXHJcblx0XHR7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaWM7XHJcblxyXG5cdFx0aWYgKHRoaXMuWmMgJiYgIXRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8pIHtcclxuXHRcdFx0aWMgPSB0aGlzLnZkLklkKFFiLCBBYiwgTWMpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblxyXG5cdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cclxuXHRcdFx0aWMgPSAwO1xyXG5cdFx0XHR0aGlzLlJiICs9IFFiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gaWM7IFdiIDwgdGhpcy50Yy5sZW5ndGg7KSB7XHJcblx0XHRcdHZhciBYYiA9IHRoaXMudGNbV2JdO1xyXG5cclxuXHRcdFx0aWYgKCFYYi5vYykge1xyXG5cdFx0XHRcdFhiLklkKFFiKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuV2MuQWModGhpcy50Y1tXYl0pKSB7XHJcblx0XHRcdFx0XHRYYi53YygpO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFhiLnJjKFFiKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMueGQoV2IpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCsrV2I7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0bGQucHJvdG90eXBlLnhkID0gZnVuY3Rpb24gKGplKSB7XHJcblx0XHR2YXIgWGIgPSB0aGlzLnRjW2plXTtcclxuXHJcblx0XHR2YXIgcmVhZHkgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGlkID0gMDsgaWQgPCBYYi5LYy5sZW5ndGg7ICsraWQpIHtcclxuXHRcdFx0dmFyIEJkID0gWGIuS2NbaWRdLkJkO1xyXG5cclxuXHRcdFx0aWYgKEJkLmFjdGl2YXRlZCgpIHx8IEJkLnRjLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRyZWFkeSA9IGZhbHNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHJlYWR5KSB7XHJcblx0XHRcdHRoaXMuc2MucHVzaCh0aGlzLnRjW2plXSk7XHJcblx0XHRcdHRoaXMudGMuc3BsaWNlKGplLCAxKTtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkhkID0gZnVuY3Rpb24gKGZlLCBnZSkge1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QuSGQoZmUsIGdlKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS51ZSA9IGZ1bmN0aW9uIChzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LnVlKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuVGQgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHR0aGlzLndkID0gdGhpcy5SYjtcclxuXHJcblx0XHRpZiAoQWIpIHtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoTWMpIHtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWMgPSBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHR0aGlzLlljLnB1c2goeyBEYjogbWQsIEFkOiBuZCB9KTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnBhdXNlZF8gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi91bnBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhdXNlZF87XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi91bnBhdXNlR2VuZXJhdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF8gPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovZ2VuZXJhdG9yc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdlbmVyYXRvcnNQYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuZGlzYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLlpjID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuYWN0aXZhdGVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuWmM7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dldE51bVBhcnRpY2xlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRjLmxlbmd0aDtcclxuXHR9XHJcblxyXG5cdHZhciBrZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBDYiA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCB2ZSwgb3B0aW9ucykge1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbCA9IHdlO1xyXG5cclxuXHRcdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0XHR0aGlzLk1jID0gW107XHJcblxyXG5cdFx0XHQvLyBrZSBBZFxyXG5cclxuXHRcdFx0dGhpcy5vZCA9IFtdO1xyXG5cclxuXHRcdFx0dGhpcy5wZCA9IGZ1bmN0aW9uIChtZCkge1xyXG5cdFx0XHRcdHZhciBCZCA9IG5ldyBsZCh0aGlzLCBtZCwgdmUpO1xyXG5cdFx0XHRcdEJkLk5iKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHRcdHRoaXNbXCJfXCIuY29uY2F0KG1kLm5hbWUpXSA9IEJkO1xyXG5cdFx0XHRcdHRoaXMub2QucHVzaChCZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIgPSBmdW5jdGlvbiAoQWIsIE1jKSB7XHJcblx0XHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0XHR0aGlzLlJiID0gMC4wO1xyXG5cdFx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiID8gQWIgOiBbMCwgMCwgMF0pO1xyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jID8gTWMgOiBbMCwgMCwgMCwgMV0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKEFiLCBNYyk7XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLnFkKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuZ2VuZXJhdG9yc1BhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMucGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy4vKiovcGF1c2VBbGxFbWl0dGVycygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlRml4ZWQodGhpcy5VZCwgQWIsIE1jLCB0aGlzLnByZXNpbUZyYW1lVGltZSk7XHJcblx0XHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzdGFydCA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMpIHtcclxuXHJcblx0XHR0aGlzLk5iKC8qKi9wb3NpdGlvbiA/IC8qKi9wb3NpdGlvbiA6IHRoaXMuQWIsIC8qKi9yb3RhdGlvbiA/IC8qKi9yb3RhdGlvbiA6IHRoaXMuTWMpO1xyXG5cdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5KZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2VuZXJhdG9yc1BhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wYXVzZWQpIHtcclxuXHRcdFx0dGhpcy4vKiovcGF1c2VBbGxFbWl0dGVycygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblx0XHRcdHRoaXMudXBkYXRlRml4ZWQodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYywgdGhpcy5wcmVzaW1GcmFtZVRpbWUpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS56ZXJvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoMCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VwZGF0ZSA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHRpZiAodGhpcy5EZCA+IDAuMClcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCB0aGlzLkRkKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy51cGRhdGVGbGV4KC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZpeGVkID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9mcmFtZVRpbWUpIHtcclxuXHRcdHZhciB1cGRhdGVkVGltZSA9IDAuMDtcclxuXHRcdHZhciBoYyA9IFtdO1xyXG5cdFx0Y3R4LlQoaGMsIHRoaXMuQWIpO1xyXG5cdFx0dmFyIGZyYW1lUm90YXRpb24gPSBbXTtcclxuXHRcdGN0eC5VKGZyYW1lUm90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24gJiYgY3R4LmVxdWFsdjNfKC8qKi9wb3NpdGlvbiwgdGhpcy5BYikpXHJcblx0XHRcdC8qKi9wb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbiAmJiBjdHguZXF1YWxxXygvKiovcm90YXRpb24sIHRoaXMuTWMpKVxyXG5cdFx0XHQvKiovcm90YXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHdoaWxlICgoLyoqL2R0IC0gdXBkYXRlZFRpbWUpICsgdGhpcy5DZCA+PSAvKiovZnJhbWVUaW1lKSB7XHJcblx0XHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRcdGN0eC5hYihoYywgdGhpcy5BYiwgLyoqL3Bvc2l0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRcdGN0eC5zbGVycHEoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYywgLyoqL3JvdGF0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldLklkKC8qKi9mcmFtZVRpbWUsIGhjLCBmcmFtZVJvdGF0aW9uKTtcclxuXHJcblx0XHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVkVGltZSArPSAvKiovZnJhbWVUaW1lIC0gdGhpcy5DZDtcclxuXHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5SYiA9IGNjICsgLyoqL2ZyYW1lVGltZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0dGhpcy5DZCArPSAvKiovZHQgLSB1cGRhdGVkVGltZTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS51cGRhdGVGbGV4ID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbik7XHJcblx0XHRcdHRoaXMuUmIgPSBjYztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlJiID0gY2MgKyAvKiovZHQ7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXNldFBvc2l0aW9uID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbilcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgLyoqL3Bvc2l0aW9uKTtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCAvKiovcm90YXRpb24pO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLlRkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9zZXRQcm9wZXJ0eUluQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoLyoqL25hbWUsIC8qKi92YWx1ZSkge1xyXG5cdFx0dmFyIHByb3BOYW1lID0gXCJfXCIuY29uY2F0KC8qKi9uYW1lKTtcclxuXHJcblx0XHRpZiAoLyoqL3ZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0aWYgKC8qKi92YWx1ZS5sZW5ndGggPT0gMikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0Y3R4LlModGhpcy5vZFtpXVtwcm9wTmFtZV0sIC8qKi92YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0Y3R4LlQodGhpcy5vZFtpXVtwcm9wTmFtZV0sIC8qKi92YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0dGhpcy5vZFtpXVtwcm9wTmFtZV0gPSAvKiovdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovcGF1c2VBbGxFbWl0dGVycyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3BhdXNlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VBbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHJcblx0XHRpZiAodGhpcy5fcHJlc2ltTmVlZGVkKSB7XHJcblx0XHRcdHRoaXMudXBkYXRlRml4ZWQodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYywgdGhpcy5wcmVzaW1GcmFtZVRpbWUpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovYXJlQWxsRW1pdHRlcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9kW2ldLnBhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3BhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZUdlbmVyYXRvcnMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovYXJlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9kW2ldLmdlbmVyYXRvcnNQYXVzZWQoKSlcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovZ2V0TnVtUGFydGljbGVzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgbnVtUGFydGljbGVzID0gMDtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0bnVtUGFydGljbGVzICs9IHRoaXMub2RbaV0uZ2V0TnVtUGFydGljbGVzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bVBhcnRpY2xlcztcclxuXHR9XHJcblxyXG5cclxuXHR2YXIgbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIHJlbmRlckJ1ZmZlciwgb3B0aW9ucykge1xyXG5cdFx0XHRsZS5wcm90b3R5cGUuX2luaXQuY2FsbCh0aGlzLCB3ZSwgQWIsIE1jLCBvZSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHR0aGlzLnRleHR1cmVzUmVtYXAgPSBbXTtcclxuXHJcblx0XHRcdHZhciBpbmRpY2VzID0gW107XHJcblxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHZlckRpc3A7XHJcblx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuLyoqL21vZGVsLlhlOyArK1diKSB7XHJcblx0XHRcdFx0XHR2ZXJEaXNwID0gV2IgKiA0O1xyXG5cdFx0XHRcdFx0aW5kaWNlcy5wdXNoKHZlckRpc3AgKyAwLCB2ZXJEaXNwICsgMywgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAxLCB2ZXJEaXNwICsgMywgdmVyRGlzcCArIDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIgPSByZW5kZXJCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLmluaXRpYWxpemUodGhpcy4vKiovbW9kZWwuWGUgKiA0LCBbMl0sIGluZGljZXMsIHRoaXMuLyoqL21vZGVsLlhlKTtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19udW1JbmRpY2VzID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxlLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRsZS5wcm90b3R5cGUuLyoqL2ZpbGxHZW9tZXRyeUJ1ZmZlcnMgPSBmdW5jdGlvbiAoLyoqL2NhbWVyYVJpZ2h0LCAvKiovY2FtZXJhVXAsIC8qKi9jYW1lcmFEaXIpIHtcclxuXHRcdHRoaXMucmVuZGVyQnVmZmVyLmNsZWFudXAoKTtcclxuXHRcdHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub2QuZm9yRWFjaChmdW5jdGlvbiAoQmQpIHtcclxuXHRcdFx0QmQudWUoLyoqL2NhbWVyYVJpZ2h0LCAvKiovY2FtZXJhVXAsIC8qKi9jYW1lcmFEaXIsIHRoaXMucmVuZGVyQnVmZmVyKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKVxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5wdXNoUmVuZGVyQ2FsbCh0aGlzLnJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKTtcclxuXHR9XHJcblxyXG5cdHZhciBtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgb3B0aW9ucykge1xyXG5cdFx0XHRtZS5wcm90b3R5cGUuX2luaXQuY2FsbCh0aGlzLCB3ZSwgQWIsIE1jLCBuZSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHR0aGlzLm1hdGVyaWFscyA9IFtdO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5tYXRlcmlhbHMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0XHR0aGlzLm1hdGVyaWFscy5wdXNoKFsnc291cmNlLW92ZXInLCAnbGlnaHRlcicsICdtdWx0aXBseSddW3ZhbHVlXSk7XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdFx0dGhpcy4vKiovdGV4dHVyZURlc2NzID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtZS5wcm90b3R5cGUgPSBuZXcga2UoKTtcclxuXHJcblx0bWUucHJvdG90eXBlLi8qKi9kcmF3ID0gZnVuY3Rpb24gKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5IZCgvKiovY29udGV4dCwgLyoqL2NhbWVyYSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZVdHTEluc3RhbmNlID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucykge1xyXG5cdFx0dmFyIExkID0gbmV3IGxlKCk7XHJcblx0XHRMZC5faW5pdCh0aGlzLCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL3JlbmRlckJ1ZmZlciwgLyoqL29wdGlvbnMgfHwge30pO1xyXG5cdFx0cmV0dXJuIExkO1xyXG5cdH1cclxuXHJcblx0dGhpcy5jcmVhdGVDYW52YXMyREluc3RhbmNlID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cdFx0dmFyIExkID0gbmV3IG1lKCk7XHJcblx0XHRMZC5faW5pdCh0aGlzLCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL29wdGlvbnMgfHwge30pO1xyXG5cdFx0cmV0dXJuIExkO1xyXG5cdH1cclxuXHR0aGlzLnRleHR1cmVzID0gWydibHVyYWJsZV9idWJibGUucG5nJ107XHJcblx0dGhpcy5tYXRlcmlhbHMgPSBbMF07XHJcblx0dGhpcy5yZW5kZXJTdHlsZXMgPSBbe21hdGVyaWFsSW5kZXg6MCx0ZXh0dXJlSW5kaWNlczpbMF19XTtcclxuXHR0aGlzLlhlID0gNjAwO1xyXG5cclxuXHRmdW5jdGlvbiBFbWl0dGVyX0RlZmF1bHRFbWl0dGVyKCkge1xyXG5cclxuXHRcdHZhciBfMSwgXzMsIF80ID0gW10sIF80aSwgXzRzID0gW10sIF81LCBfNiA9IFtdLCBfOSwgXzlpMCwgXzlzMCA9IFtdLCBfMTEsIF8xMWkwLCBfMTFzMCA9IFtdLCBfMTIsIF8xMywgXzE0PVtdLCBfMTRhPVtdLCBfMTRpPVtdLCBfMTUsIF8xNWkwLCBfMTVzMCA9IFtdLCBfMTY9W10sIF8xNmE9W10sIF8xNmk9W10sIF8xNz1bXSwgXzE3ZnM9W10sIF8xN3ZzPVtdLCBfMTdydz1bXSwgXzE3cnduPVtdLCBfMTdyd2wsIF8xN3Y9W10sIF8xN3A9W10sIF8xN2R0bCwgXzE3ZHRwLCBfMTdkZiwgXzE3ZnNkPVtdLCBfMTksIF8xOWkwLCBfMTlzMCA9IFtdLCBfMjAsIF8yMSwgXzIxaTAsIF8yMXMwID0gW10sIF8xOCwgXzIyLCBfMjMsIF8yM2kwLCBfMjNzMCA9IFtdLCBfMjQsIF8yNSwgXzI1aTAsIF8yNXMwID0gW107XHJcblx0XHR0aGlzLnBlID0gW3t4ZTowLFJjOjgsU2M6MSxyZW5kZXJTdHlsZUluZGV4OjB9XTtcclxuXHRcdHRoaXMubmFtZSA9IFwiRGVmYXVsdEVtaXR0ZXJcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuZGQoKTtcclxuXHRcdFx0QmQuXzQgPSBbXHJcblx0XHRcdFx0W1stNjkuNzc3OCw1OTcuMTk0XSxbLTExLjcxMjQsNTk3LjYyOF0sWzQ2LjM1NCw1OTcuODQ3XSxbMTA0LjQyMyw1OTcuOTY3XSxbMTYyLjQ5NSw1OTguMDI4XSxbMjIwLjU2Miw1OTguMDU0XSxbMjc4LjYzMyw1OTguMDU3XSxbMzM2LjcwMiw1OTguMDQ4XSxbMzk0Ljc3LDU5OC4wMzVdLFs0NTIuODM5LDU5OC4wMjZdLFs1MTAuOTEsNTk4LjAzXSxbNTY4Ljk3Nyw1OTguMDU1XSxbNjI3LjA0OCw1OTguMTE3XSxbNjg1LjExOCw1OTguMjM2XSxbNzQzLjE4NCw1OTguNDU2XSxbODAxLjI1LDU5OC44ODldLFs4MDEuMjUsNTk4Ljg4OV1dXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl85ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFs1LjA3MDI3LDE1Ljc3NDUsMTUuNzc0NV1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8xMSA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbNCwyLDJdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTUgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsNC4zMzI4LDI1Ljc5Niw2NS44ODgsMTI1LjU3NywyMDQuNzI0LDMwMS4zNDgsNDExLjAxMiw1MjYuODY3LDY0MC43MzIsNzQ0LjkwMyw4MzMuNjc2LDkwMy44OTEsOTU0LjU2Niw5ODYuMTgxLDEwMDAsMTAwMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8xOSA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMi41MDIwNSwxLDFdLFxyXG5cdFx0XHRcdFx0WzEsMS4zMTU1NywxLjMxNTU3XVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuXzIxID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLjU4MzczNCwxLDFdLFxyXG5cdFx0XHRcdFx0WzEsMC43NTcxNzgsMC43NTcxNzhdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMjMgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsMSwxXSxcclxuXHRcdFx0XHRcdFsxLDEsMV0sXHJcblx0XHRcdFx0XHRbMSwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMjUgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzcuNjg3MjQsMCwwXSxcclxuXHRcdFx0XHRcdFswLDcuNzQ5NzksNy43NDk3OV1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gNjAwO1xyXG5cdFx0XHRCZC5WYyA9IDI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNjA7XHJcblx0XHRcdHZkLkdiID0gMTtcclxuXHRcdFx0dmQuSmIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUGIgPSBmdW5jdGlvbihRYiwgQmQsIHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNjA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRfMSA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRYYi5fMiA9IF8xO1xyXG5cdFx0XHRfMyA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRfNGkgPSBEYi5rYihfMyk7XHJcblx0XHRcdGN0eC5WKF80cywwLChfNGktMCkqMTUpO1xyXG5cdFx0XHREYi5sYihfNCwgQmQuXzRbXzRzWzBdXSwgXzRzWzFdKTtcclxuXHRcdFx0XzUgPSAtNDAwICsgQmQuTGQucmFuZCgpICogKDQwMCAtIC00MDApO1xyXG5cdFx0XHRjdHguVyhfNiwgXzRbMF0sIF80WzFdLCBfNSk7XHJcblx0XHRcdFhiLl83ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl83LCBfNik7XHJcblx0XHRcdFhiLl84ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl84LCBbMCwwLDBdKTtcclxuXHRcdFx0XzlpMD0oWGIuXzI8MD8wOihYYi5fMj4xPzE6WGIuXzIpKTtcclxuXHRcdFx0Y3R4LlYoXzlzMCwwLChfOWkwLTApKjEpO1xyXG5cdFx0XHRfOSA9IERiLm5iKEJkLl85WzBdW185czBbMF1dLF85czBbMV0pO1xyXG5cdFx0XHRYYi5fMTAgPSBfOTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl83KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdF8xID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdFhiLl8yID0gXzE7XHJcblx0XHRcdF8zID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF80aSA9IERiLmtiKF8zKTtcclxuXHRcdFx0Y3R4LlYoXzRzLDAsKF80aS0wKSoxNSk7XHJcblx0XHRcdERiLmxiKF80LCBCZC5fNFtfNHNbMF1dLCBfNHNbMV0pO1xyXG5cdFx0XHRfNSA9IC00MDAgKyBCZC5MZC5yYW5kKCkgKiAoNDAwIC0gLTQwMCk7XHJcblx0XHRcdGN0eC5XKF82LCBfNFswXSwgXzRbMV0sIF81KTtcclxuXHRcdFx0WGIuXzcgPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzcsIF82KTtcclxuXHRcdFx0WGIuXzggPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzgsIFswLDAsMF0pO1xyXG5cdFx0XHRfOWkwPShYYi5fMjwwPzA6KFhiLl8yPjE/MTpYYi5fMikpO1xyXG5cdFx0XHRjdHguVihfOXMwLDAsKF85aTAtMCkqMSk7XHJcblx0XHRcdF85ID0gRGIubmIoQmQuXzlbMF1bXzlzMFswXV0sXzlzMFsxXSk7XHJcblx0XHRcdFhiLl8xMCA9IF85O1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucWMgPSBmdW5jdGlvbihRYiwgQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gKz0gUWI7XHJcblx0XHRcdF8xMWkwPShYYi5fMjwwPzA6KFhiLl8yPjE/MTpYYi5fMikpO1xyXG5cdFx0XHRjdHguVihfMTFzMCwwLChfMTFpMC0wKSoxKTtcclxuXHRcdFx0XzExID0gRGIubmIoQmQuXzExWzBdW18xMXMwWzBdXSxfMTFzMFsxXSk7XHJcblx0XHRcdF8xMiA9IGN0eC5kKFhiLl83LCBjdHgudihbMCwgNDAsIC0yMDBdLCBCZC5SYikpO1xyXG5cdFx0XHRfMTMgPSBjdHguZChYYi5fNywgY3R4LnYoWzAsIDIwMCwgLTUwXSwgQmQuUmIpKTtcclxuXHRcdFx0Y3R4LnUoXzE0YSwgWzAsMCwwXSwgQmQuTGQuUmIpO1xyXG5cdFx0XHRjdHguYyhfMTRhLCBfMTRhLCBfMTMpO1xyXG5cdFx0XHRjdHgudShfMTRpLCBfMTRhLCAxLjAgLyA1MDAwKTtcclxuXHRcdFx0Y3R4LnhiKF8xNCwgXzE0aSk7XHJcblx0XHRcdGN0eC5rKF8xNCwgXzE0LCBbMC4wMDc4MTI1LDAuMDA3ODEyNSwwLjAwNzgxMjVdKTtcclxuXHRcdFx0Y3R4LmMoXzE0LCBfMTQsIFstMSwtMSwtMV0pO1xyXG5cdFx0XHRjdHgudShfMTQsIF8xNCwgMSk7XHJcblx0XHRcdF8xNWkwPShfMTRbMl08LTE/LTE6KF8xNFsyXT4xPzE6XzE0WzJdKSk7XHJcblx0XHRcdGN0eC5WKF8xNXMwLDAsKF8xNWkwLSAtMSkqNy41KTtcclxuXHRcdFx0XzE1ID0gRGIubmIoQmQuXzE1WzBdW18xNXMwWzBdXSxfMTVzMFsxXSk7XHJcblx0XHRcdGN0eC51KF8xNmEsIFswLDAsMF0sIEJkLkxkLlJiKTtcclxuXHRcdFx0Y3R4LmMoXzE2YSwgXzE2YSwgXzEyKTtcclxuXHRcdFx0Y3R4LnUoXzE2aSwgXzE2YSwgMS4wIC8gMTAwMCk7XHJcblx0XHRcdGN0eC54YihfMTYsIF8xNmkpO1xyXG5cdFx0XHRjdHguayhfMTYsIF8xNiwgWzAuMDA3ODEyNSwwLjAwNzgxMjUsMC4wMDc4MTI1XSk7XHJcblx0XHRcdGN0eC5jKF8xNiwgXzE2LCBbLTEsLTEsLTFdKTtcclxuXHRcdFx0Y3R4LnUoXzE2LCBfMTYsIF8xNSk7XHJcblx0XHRcdGN0eC5UKF8xN2ZzLCBbMCwtMTAwLDBdKTtcclxuXHRcdFx0Y3R4LmMoXzE3ZnMsIF8xN2ZzLCBfMTYpO1xyXG5cdFx0XHRjdHguVChfMTd2cywgWzAsMCwwXSk7XHJcblx0XHRcdF8xN2R0bCA9IFFiO1xyXG5cdFx0XHRjdHguVChfMTd2LCBYYi5fOCk7XHJcblx0XHRcdGN0eC5UKF8xN3AsIFhiLl83KTtcclxuXHRcdFx0d2hpbGUgKF8xN2R0bCA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdF8xN2R0cCA9IF8xN2R0bDtcclxuXHRcdFx0XHRjdHguVChfMTdmc2QsIF8xN2ZzKTtcclxuXHRcdFx0XHRjdHguZyhfMTdydywgXzE3dnMsIF8xN3YpO1xyXG5cdFx0XHRcdF8xN3J3bCA9IGN0eC5QKF8xN3J3KTtcclxuXHRcdFx0XHRpZiAoXzE3cndsID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0XHRfMTdyd2wgPSBNYXRoLnNxcnQoXzE3cndsKTtcclxuXHRcdFx0XHRcdGN0eC53KF8xN3J3biwgXzE3cncsIF8xN3J3bCk7XHJcblx0XHRcdFx0XHRfMTdkZiA9IDAuMDEgKiBfMTEgKiBfMTdyd2w7XHJcblx0XHRcdFx0XHRpZiAoXzE3ZGYgKiBfMTdkdHAgPiAwLjIpXHJcblx0XHRcdFx0XHRcdF8xN2R0cCA9IDAuMiAvIF8xN2RmO1xyXG5cdFx0XHRcdFx0Y3R4LmMoXzE3ZnNkLCBfMTdmc2QsIGN0eC52KF8xN3J3biwgXzE3cndsICogXzE3ZGYpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y3R4LmMoXzE3diwgXzE3diwgY3R4LnYoXzE3ZnNkLCBfMTdkdHApKTtcclxuXHRcdFx0XHRjdHguYyhfMTdwLCBfMTdwLCBjdHgudihfMTd2LCBfMTdkdHApKTtcclxuXHRcdFx0XHRfMTdkdGwgLT0gXzE3ZHRwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGN0eC5UKFhiLl83LCBfMTdwKTtcclxuXHRcdFx0Y3R4LlQoWGIuXzgsIF8xN3YpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzcpO1xyXG5cdFx0XHRfMTlpMD0oWGIuXzdbMl08LTQwMD8tNDAwOihYYi5fN1syXT40MDA/NDAwOlhiLl83WzJdKSk7XHJcblx0XHRcdF8xOWkwPDE/Y3R4LlYoXzE5czAsMCwoXzE5aTAtIC00MDApKjAuMDAyNDkzNzcpOmN0eC5WKF8xOXMwLDEsKF8xOWkwLTEpKjAuMDAyNTA2MjcpO1xyXG5cdFx0XHRfMTkgPSBEYi5uYihCZC5fMTlbMF1bXzE5czBbMF1dLF8xOXMwWzFdKTtcclxuXHRcdFx0XzIwID0gKFhiLl8xMCAqIF8xOSk7XHJcblx0XHRcdF8yMWkwPShYYi5fN1syXTwtNDAwPy00MDA6KFhiLl83WzJdPjQwMD80MDA6WGIuXzdbMl0pKTtcclxuXHRcdFx0XzIxaTA8MD9jdHguVihfMjFzMCwwLChfMjFpMC0gLTQwMCkqMC4wMDI1KTpjdHguVihfMjFzMCwxLChfMjFpMC0wKSowLjAwMjUpO1xyXG5cdFx0XHRfMjEgPSBEYi5uYihCZC5fMjFbMF1bXzIxczBbMF1dLF8yMXMwWzFdKTtcclxuXHRcdFx0XzE4ID0gMTA7XHJcblx0XHRcdF8yMiA9IChYYi5fIC8gXzE4KTtcclxuXHRcdFx0XzIzaTA9KF8yMjwwPzA6KF8yMj4xPzE6XzIyKSk7XHJcblx0XHRcdF8yM2kwPDAuOT9fMjNpMDwwLjE/Y3R4LlYoXzIzczAsMCwoXzIzaTAtMCkqMTApOmN0eC5WKF8yM3MwLDEsKF8yM2kwLTAuMSkqMS4yNSk6Y3R4LlYoXzIzczAsMiwoXzIzaTAtMC45KSoxMCk7XHJcblx0XHRcdF8yMyA9IERiLm5iKEJkLl8yM1swXVtfMjNzMFswXV0sXzIzczBbMV0pO1xyXG5cdFx0XHRfMjQgPSAoXzIxICogXzIzKTtcclxuXHRcdFx0XzI1aTA9KFhiLl83WzJdPC00MDA/LTQwMDooWGIuXzdbMl0+NDAwPzQwMDpYYi5fN1syXSkpO1xyXG5cdFx0XHRfMjVpMDwwP2N0eC5WKF8yNXMwLDAsKF8yNWkwLSAtNDAwKSowLjAwMjUpOmN0eC5WKF8yNXMwLDEsKF8yNWkwLTApKjAuMDAyNSk7XHJcblx0XHRcdF8yNSA9IERiLm5iKEJkLl8yNVswXVtfMjVzMFswXV0sXzI1czBbMV0pO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IDA7XHJcblx0XHRcdGN0eC5WKFhiLk5kLF8yMCxfMjApO1xyXG5cdFx0XHRjdHguVChYYi5nZixbMSwxLDFdKTtcclxuXHRcdFx0WGIuT2QgPSBfMjQ7XHJcblx0XHRcdFhiLlFjID0gKF8yNSA8IDApID8gMCA6ICgoXzI1ID49IDgpID8gNyA6IF8yNSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzE4ID0gMTA7XHJcblx0XHRcdGlmIChYYi5fID4gXzE4KSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHR0aGlzLnFkID0gZnVuY3Rpb24oTGQpIHtcclxuXHRcdExkLkRkID0gMC4wMzMzMzMzO1xyXG5cdFx0TGQuVWQgPSAxNTtcclxuXHRcdExkLnByZXNpbUZyYW1lVGltZSA9IDAuMTtcclxuXHRcdExkLnJhbmQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCk7IH07XHJcblx0XHRMZC5wZChuZXcgRW1pdHRlcl9EZWZhdWx0RW1pdHRlcigpKTtcclxuXHR9XHJcblx0XHR0aGlzLmtiID0gZnVuY3Rpb24gKHYpIHsgXHRcdFx0cmV0dXJuICh2IDwgMCkgPyAwIDogKCh2ID4gMSkgPyAxIDogdik7IFx0XHR9XHJcblxyXG5cdFx0dGhpcy5sYiA9IGZ1bmN0aW9uIChyLCBwYXRoLCBqZSkgeyBcdFx0XHR2YXIgaW5kZXhJbnQgPSBNYXRoLmZsb29yKGplKTsgXHRcdFx0dmFyIGxlcnAgPSBqZSAtIGluZGV4SW50OyBcdFx0XHRjdHguWShyLCBwYXRoW2luZGV4SW50XSwgcGF0aFtpbmRleEludCArIDFdLCBsZXJwKTsgXHRcdH1cclxuXHJcblx0XHR0aGlzLm5iID0gZnVuY3Rpb24oZnVuY1ZhbHVlcywgamUpIHsgXHRcdFx0dmFyIGluZGV4SW50ID0gTWF0aC5mbG9vcihqZSk7IFx0XHRcdHZhciBuZXh0SW50ID0gaW5kZXhJbnQgKyAxOyBcdFx0XHRyZXR1cm4gY3R4LlgoZnVuY1ZhbHVlc1tpbmRleEludF0sIGZ1bmNWYWx1ZXNbbmV4dEludF0sIGplIC0gaW5kZXhJbnQpOyBcdFx0fVxyXG5cclxuXHJcbn1cclxuXHJcbnJldHVybiBCdWJibGVzO1xyXG59KSk7Il19