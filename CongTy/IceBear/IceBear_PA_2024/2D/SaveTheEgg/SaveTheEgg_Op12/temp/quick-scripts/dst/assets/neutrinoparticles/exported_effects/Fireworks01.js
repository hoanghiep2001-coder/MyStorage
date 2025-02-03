
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Fireworks01.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a177579ldA+rfTscjwOEOq', 'Fireworks01');
// neutrinoparticles/exported_effects/Fireworks01.js

"use strict";

// b27726ce-45eb-46cf-8709-409a1454ec2d
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Fireworks01'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Fireworks01'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Fireworks01(ctx) {
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

    this.textures = ['fx/fireworks/sparks5x3_long.png', 'fx/fireworks/sparks2x3_violet.png'];
    this.materials = [1, 0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }, {
      materialIndex: 1,
      textureIndices: [1]
    }];
    this.Xe = 90600;

    function Emitter_Stripe_child() {
      var _1 = [],
          _5 = [],
          _7 = [],
          _9 = [],
          _10 = [],
          _10fs = [],
          _10vs = [],
          _10rw = [],
          _10rwn = [],
          _10rwl,
          _10v = [],
          _10p = [],
          _10dtl,
          _10dtp,
          _10df,
          _10fsd = [],
          _12 = [],
          _12i = [],
          _13,
          _11,
          _14,
          _15,
          _15i0,
          _15s0 = [],
          _16,
          _17,
          _17i0,
          _17s0 = [],
          _18,
          _18i0,
          _18s0 = [],
          _19;

      this.pe = [{
        xe: 1,
        Rc: 5,
        Sc: 3,
        renderStyleIndex: 0
      }];
      this.name = "Stripe_child";

      this.ud = function (Bd) {
        Bd._Rotation = [0, 0, 0, 1];
        Bd._Texture = 0;
        Bd.ed();
        Bd._15 = [[[0.48177, 0.934782, 0.982708, 0.96819, 0.923457, 0.860987, 0.787211, 0.706007, 0.619964, 0.530944, 0.440381, 0.349431, 0.259076, 0.170188, 0.0835716, 0, 0]]];
        Bd._17 = [[[1, 0, 0]]];
        Bd._18 = [[[0, 2.0657, 2.78929, 3.28572, 3.66181, 3.95916, 4.1992, 4.39469, 4.55401, 4.68298, 4.78584, 4.86582, 4.92541, 4.96661, 4.99103, 5, 5]]];
        Bd.jd = 300;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.rd = 1;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.rd = 1;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        Xb._3 = 0;
        Xb._4 = [];
        ctx.U(Xb._4, Bd._Rotation);
        ctx.randv3gen(_5, 1, Bd.Ld.rand);
        Xb._6 = [];
        ctx.T(Xb._6, _5);
        ctx.randv3gen(_7, 10, Bd.Ld.rand);
        Xb._8 = [];
        ctx.T(Xb._8, _7);
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.c(Xb._2, Bd.Ab, _1);
        Xb._3 = 0;
        Xb._4 = [];
        ctx.U(Xb._4, Bd._Rotation);
        ctx.randv3gen(_5, 1, Bd.Ld.rand);
        Xb._6 = [];
        ctx.T(Xb._6, _5);
        ctx.randv3gen(_7, 10, Bd.Ld.rand);
        Xb._8 = [];
        ctx.T(Xb._8, _7);
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_9, 0, 50, 0);
        ctx.T(_10fs, _9);
        ctx.T(_10vs, [0, 0, 0]);
        _10dtl = Qb;
        ctx.T(_10v, Xb._8);
        ctx.T(_10p, Xb._2);

        while (_10dtl > 0.0001) {
          _10dtp = _10dtl;
          ctx.T(_10fsd, _10fs);
          ctx.g(_10rw, _10vs, _10v);
          _10rwl = ctx.P(_10rw);

          if (_10rwl > 0.0001) {
            _10rwl = Math.sqrt(_10rwl);
            ctx.w(_10rwn, _10rw, _10rwl);
            _10df = 0.01 * 1 * _10rwl;
            if (_10df * _10dtp > 0.2) _10dtp = 0.2 / _10df;
            ctx.c(_10fsd, _10fsd, ctx.v(_10rwn, _10rwl * _10df));
          }

          ctx.c(_10v, _10v, ctx.v(_10fsd, _10dtp));
          ctx.c(_10p, _10p, ctx.v(_10v, _10dtp));
          _10dtl -= _10dtp;
        }

        ctx.T(Xb._2, _10p);
        ctx.T(Xb._8, _10v);
        ctx.T(Xb.Ab, Xb._2);
        ctx.Q(_12i, Xb._6);
        ctx.qb(_12, _12i, Xb._3);
        _13 = 7;
        _11 = 1;
        _14 = Xb._ / _11;
        _15i0 = _14 < 0 ? 0 : _14 > 1 ? 1 : _14;
        ctx.V(_15s0, 0, (_15i0 - 0) * 15);
        _15 = Db.nb(Bd._15[0][_15s0[0]], _15s0[1]);
        _16 = _13 * _15;
        _17i0 = _14 < 0 ? 0 : _14 > 1 ? 1 : _14;
        ctx.V(_17s0, 0, (_17i0 - 0) * 1);
        _17 = Db.nb(Bd._17[0][_17s0[0]], _17s0[1]);
        _18i0 = _14 < 0 ? 0 : _14 > 1 ? 0 + (_14 - 0) % 1 : _14;
        ctx.V(_18s0, 0, (_18i0 - 0) * 15);
        _18 = Db.nb(Bd._18[0][_18s0[0]], _18s0[1]);
        _19 = Bd._Texture * 5 + _18;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        ctx.U(Xb.Mc, _12);
        ctx.V(Xb.Nd, _16, _16);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = _17;
        Xb.Qc = _19 < 0 ? 0 : _19 >= 15 ? 14 : _19;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _11 = 1;
        if (Xb._ > _11) return true;
        return false;
      };
    }

    function Emitter_Stripe_parent() {
      var _1 = [],
          _3,
          _5 = [],
          _7 = [],
          _7x = [],
          _7y = [],
          _7z = [],
          _8,
          _8i0,
          _8s0 = [],
          _9 = [],
          _10 = [],
          _10fs = [],
          _10vs = [],
          _10rw = [],
          _10rwn = [],
          _10rwl,
          _10v = [],
          _10p = [],
          _10dtl,
          _10dtp,
          _10df,
          _10fsd = [],
          _11;

      this.pe = [];
      this.name = "Stripe_parent";

      this.ud = function (Bd) {
        Bd._Texture = 0;
        Bd.dd();
        Bd.uc(new Emitter_Stripe_child(), {
          xc: 1,
          sd: false
        });
        Bd._8 = [[[0, 0.0314964, 0.136246, 0.328507, 0.59644, 0.890682, 1.16035, 1.38407, 1.56152, 1.69908, 1.80373, 1.88132, 1.93649, 1.97287, 1.9933, 2, 2]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 5;
        vd.Gb = 0.94;
        vd.Jb = 60;
        vd.Ib = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 5;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, -0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        _3 = 0 + Bd.Ld.rand() * (5 - 0);
        Xb._4 = _3;
        ctx.randv3gen(_5, 1000, Bd.Ld.rand);
        Xb._6 = [];
        ctx.rb(Xb._6, _5, Bd.Mc);
        ctx.c(Xb._6, Bd.ad, Xb._6);
        ctx.T(Xb.Ab, Xb._2);
        ctx.Q(_7z, [0, 0, 1]);
        ctx.I(_7x, Xb._6, _7z);
        ctx.Q(_7x, _7x);
        ctx.I(_7y, _7z, _7x);
        ctx.pb(_7, _7x, _7y, _7z);
        Xb.pc(0)._Rotation = _7;
        Xb.pc(0)._Texture = Bd._Texture;
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, -0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        _3 = 0 + Bd.Ld.rand() * (5 - 0);
        Xb._4 = _3;
        ctx.randv3gen(_5, 1000, Bd.Ld.rand);
        Xb._6 = [];
        ctx.rb(Xb._6, _5, Bd.Mc);
        ctx.c(Xb._6, Bd.ad, Xb._6);
        ctx.T(Xb.Ab, Xb._2);
        ctx.Q(_7z, [0, 0, 1]);
        ctx.I(_7x, Xb._6, _7z);
        ctx.Q(_7x, _7x);
        ctx.I(_7y, _7z, _7x);
        ctx.pb(_7, _7x, _7y, _7z);
        Xb.pc(0)._Rotation = _7;
        Xb.pc(0)._Texture = Bd._Texture;
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        _8i0 = Bd.Rb < 0 ? 0 : Bd.Rb > 1 ? 1 : Bd.Rb;
        ctx.V(_8s0, 0, (_8i0 - 0) * 15);
        _8 = Db.nb(Bd._8[0][_8s0[0]], _8s0[1]);
        ctx.W(_9, 0, 100, 0);
        ctx.T(_10fs, _9);
        ctx.T(_10vs, [0, 0, 0]);
        _10dtl = Qb;
        ctx.T(_10v, Xb._6);
        ctx.T(_10p, Xb._2);

        while (_10dtl > 0.0001) {
          _10dtp = _10dtl;
          ctx.T(_10fsd, _10fs);
          ctx.g(_10rw, _10vs, _10v);
          _10rwl = ctx.P(_10rw);

          if (_10rwl > 0.0001) {
            _10rwl = Math.sqrt(_10rwl);
            ctx.w(_10rwn, _10rw, _10rwl);
            _10df = 0.01 * _8 * _10rwl;
            if (_10df * _10dtp > 0.2) _10dtp = 0.2 / _10df;
            ctx.c(_10fsd, _10fsd, ctx.v(_10rwn, _10rwl * _10df));
          }

          ctx.c(_10v, _10v, ctx.v(_10fsd, _10dtp));
          ctx.c(_10p, _10p, ctx.v(_10v, _10dtp));
          _10dtl -= _10dtp;
        }

        ctx.T(Xb._2, _10p);
        ctx.T(Xb._6, _10v);
        ctx.T(Xb.Ab, Xb._2);
        ctx.Q(_7z, [0, 0, 1]);
        ctx.I(_7x, Xb._6, _7z);
        ctx.Q(_7x, _7x);
        ctx.I(_7y, _7z, _7x);
        ctx.pb(_7, _7x, _7y, _7z);
        Xb.pc(0)._Rotation = _7;
        Xb.pc(0)._Texture = Bd._Texture;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _11 = 1;
        if (Xb._ > _11) return true;
        return false;
      };
    }

    function Emitter_Sparks() {
      var _,
          _i0,
          _s0 = [],
          _2 = [],
          _4,
          _6,
          _8,
          _10,
          _12 = [],
          _14 = [],
          _15,
          _16,
          _17,
          _17i0,
          _17s0 = [],
          _18,
          _19;

      this.pe = [{
        xe: 0,
        Rc: 2,
        Sc: 3,
        renderStyleIndex: 1
      }];
      this.name = "Sparks";

      this.ud = function (Bd) {
        Bd._Texture = 0;
        Bd._ = [[[0, 0, 0], [2, 2, 2]]];
        Bd.dd();
        Bd._17 = [[[0, 0.149709, 0.460975, 0.803237, 1.08303, 1.29919, 1.46717, 1.59926, 1.7039, 1.7869, 1.85236, 1.90328, 1.94194, 1.97007, 1.98906, 2, 2], [2, 1.66994, 1.37363, 1.11535, 0.895215, 0.710443, 0.556908, 0.430206, 0.326245, 0.241465, 0.172875, 0.118, 0.0748067, 0.0416215, 0.0170665, 0, 0], [0, 0.822571, 0.822571], [0.822571, 0.230368, 0.230368], [0.230368, 0.7, 0.7], [0.7, 0, 0], [0, 0.6, 0.6], [0.6, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 5;
        vd.Gb = 1;
        vd.Jb = 100;
        vd.Ib = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        _i0 = Bd.Rb < 0 ? 0 : Bd.Rb > 2 ? 2 : Bd.Rb;
        _i0 < 0.9 ? ctx.V(_s0, 0, (_i0 - 0) * 1.11111) : ctx.V(_s0, 1, (_i0 - 0.9) * 0.909091);
        _ = Db.nb(Bd._[0][_s0[0]], _s0[1]);
        vd.zb = _;
      };

      this.fd = function (Bd, Xb) {
        Xb._1 = 0.0;
        ctx.randv3gen(_2, 300, Bd.Ld.rand);
        Xb._3 = [];
        ctx.rb(Xb._3, _2, Bd.Mc);
        ctx.c(Xb._3, Bd.Ab, Xb._3);
        _4 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._5 = _4;
        _6 = 0 + Bd.Ld.rand() * (2 - 0);
        Xb._7 = _6;
        _8 = 20 + Bd.Ld.rand() * (40 - 20);
        Xb._9 = _8;
        _10 = 1.5 + Bd.Ld.rand() * (3 - 1.5);
        Xb._11 = _10;
        ctx.W(_12, 0, 20, 0);
        Xb._13 = [];
        ctx.rb(Xb._13, _12, Bd.Mc);
        ctx.c(Xb._13, Bd.ad, Xb._13);
        ctx.T(Xb.Ab, Xb._3);
      };

      this.gd = function (Bd, Xb) {
        Xb._1 = 0.0;
        ctx.randv3gen(_2, 300, Bd.Ld.rand);
        Xb._3 = [];
        ctx.rb(Xb._3, _2, Bd.Mc);
        ctx.c(Xb._3, Bd.Ab, Xb._3);
        _4 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._5 = _4;
        _6 = 0 + Bd.Ld.rand() * (2 - 0);
        Xb._7 = _6;
        _8 = 20 + Bd.Ld.rand() * (40 - 20);
        Xb._9 = _8;
        _10 = 1.5 + Bd.Ld.rand() * (3 - 1.5);
        Xb._11 = _10;
        ctx.W(_12, 0, 20, 0);
        Xb._13 = [];
        ctx.rb(Xb._13, _12, Bd.Mc);
        ctx.c(Xb._13, Bd.ad, Xb._13);
        ctx.T(Xb.Ab, Xb._3);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._1 += Qb;
        ctx.T(_14, Xb._13);
        ctx.u(_14, _14, Qb);
        ctx.c(_14, _14, Xb._3);
        ctx.T(Xb._3, _14);
        _15 = Xb._5 + Qb * 90;
        Xb._5 = _15;
        ctx.T(Xb.Ab, Xb._3);
        _16 = Xb._1 / Xb._11;
        _17i0 = _16 < 0 ? 0 : _16 > 1 ? 1 : _16;
        _17i0 < 0.744689 ? _17i0 < 0.6 ? _17i0 < 0.0577704 ? ctx.V(_17s0, 0, (_17i0 - 0) * 259.648) : ctx.V(_17s0, 1, (_17i0 - 0.0577704) * 27.6636) : _17i0 < 0.631187 ? ctx.V(_17s0, 2, (_17i0 - 0.6) * 32.0646) : ctx.V(_17s0, 3, (_17i0 - 0.631187) * 8.81045) : _17i0 < 0.9 ? _17i0 < 0.772 ? ctx.V(_17s0, 4, (_17i0 - 0.744689) * 36.6147) : ctx.V(_17s0, 5, (_17i0 - 0.772) * 7.8125) : _17i0 < 0.942044 ? ctx.V(_17s0, 6, (_17i0 - 0.9) * 23.7848) : ctx.V(_17s0, 7, (_17i0 - 0.942044) * 17.2544);
        _17 = Db.nb(Bd._17[0][_17s0[0]], _17s0[1]);
        _18 = Xb._9 * _17;
        _19 = Bd._Texture * 2 + Xb._7;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._5;
        ctx.V(Xb.Nd, _18, _18);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = 1;
        Xb.Qc = _19 < 0 ? 0 : _19 >= 6 ? 5 : _19;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._1 > Xb._11) return true;
        return false;
      };
    }

    function Emitter_Splash() {
      var _1 = [],
          _5,
          _4,
          _6,
          _7,
          _7i0,
          _7s0 = [],
          _8,
          _9;

      this.pe = [{
        xe: 0,
        Rc: 5,
        Sc: 3,
        renderStyleIndex: 0
      }];
      this.name = "Splash";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._7 = [[[0, 1, 1], [1, 0.990835, 0.969351, 0.938093, 0.898586, 0.851781, 0.798265, 0.738368, 0.672217, 0.599762, 0.520766, 0.43479, 0.341128, 0.238703, 0.125869, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 5;
        vd.Gb = 1;
        vd.Jb = 1;
        vd.Ib = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 5;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        Xb._3 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        Xb._3 = 0;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(Xb.Ab, Xb._2);
        _5 = 300;
        _4 = 0.3;
        _6 = Xb._ / _4;
        _7i0 = _6 < 0 ? 0 : _6 > 1 ? 1 : _6;
        _7i0 < 0.1 ? ctx.V(_7s0, 0, (_7i0 - 0) * 10) : ctx.V(_7s0, 1, (_7i0 - 0.1) * 16.6667);
        _7 = Db.nb(Bd._7[0][_7s0[0]], _7s0[1]);
        _8 = _5 * _7;
        _9 = 0;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._3;
        ctx.V(Xb.Nd, _8, _8);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = 1;
        Xb.Qc = _9 < 0 ? 0 : _9 >= 15 ? 14 : _9;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _4 = 0.3;
        if (Xb._ > _4) return true;
        return false;
      };
    }

    function Emitter_Fireworks_parent() {
      var _,
          _i0,
          _s0 = [],
          _2,
          _3 = [],
          _3i,
          _3s = [],
          _4 = [],
          _4i,
          _4s = [],
          _5,
          _6 = [],
          _7 = [],
          _10,
          _11,
          _11i0,
          _11s0 = [],
          _13;

      this.pe = [];
      this.name = "Fireworks_parent";

      this.ud = function (Bd) {
        Bd._ = [[[1.47301, 1.47301, 1.47301], [0, 0, 0]]];
        Bd.dd();
        Bd._3 = [[[-383.168, 98.272], [-383.168, -101.728], [-383.168, -101.728]]];
        Bd._4 = [[[405.632, 91.36], [405.632, -108.64], [405.632, -108.64]]];
        Bd._11 = [[[0, 0, 0], [1, 1, 1], [2, 2, 2]]];
        Bd.uc(new Emitter_Stripe_parent(), {
          xc: 1,
          sd: false
        });
        Bd.uc(new Emitter_Sparks(), {
          xc: 1,
          sd: false
        });
        Bd.uc(new Emitter_Splash(), {
          xc: 1,
          sd: false
        });
        Bd.jd = 3;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 5;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        _i0 = Bd.Ld.Rb < 0 ? 0 : Bd.Ld.Rb > 5.99432 ? 0 + (Bd.Ld.Rb - 0) % 5.99432 : Bd.Ld.Rb;
        _i0 < 1.50077 ? ctx.V(_s0, 0, (_i0 - 0) * 0.666323) : ctx.V(_s0, 1, (_i0 - 1.50077) * 0.222541);
        _ = Db.nb(Bd._[0][_s0[0]], _s0[1]);
        vd.zb = _;
      };

      this.fd = function (Bd, Xb) {
        Xb._1 = 0.0;
        _2 = 0 + Bd.Ld.rand() * (1 - 0);
        _3i = Db.kb(_2);
        ctx.V(_3s, 0, (_3i - 0) * 1);
        Db.lb(_3, Bd._3[_3s[0]], _3s[1]);
        _4i = Db.kb(_2);
        ctx.V(_4s, 0, (_4i - 0) * 1);
        Db.lb(_4, Bd._4[_4s[0]], _4s[1]);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        ctx.Y(_6, _3, _4, _5);
        ctx.W(_7, _6[0], _6[1], 0);
        Xb._8 = [];
        ctx.rb(Xb._8, _7, Bd.Mc);
        ctx.c(Xb._8, Bd.Ab, Xb._8);
        Xb._9 = 0;
        _10 = 0 + Bd.Ld.rand() * (1 - 0);
        _11i0 = _10 < 0 ? 0 : _10 > 1 ? 1 : _10;
        _11i0 < 0.710626 ? _11i0 < 0.388302 ? ctx.V(_11s0, 0, (_11i0 - 0) * 2.57531) : ctx.V(_11s0, 1, (_11i0 - 0.388302) * 3.10247) : ctx.V(_11s0, 2, (_11i0 - 0.710626) * 3.45573);
        _11 = Db.nb(Bd._11[0][_11s0[0]], _11s0[1]);
        Xb._12 = _11;
        ctx.T(Xb.Ab, Xb._8);
        Xb.pc(0)._Texture = Xb._12;
        Xb.pc(1)._Texture = Xb._12;
      };

      this.gd = function (Bd, Xb) {
        Xb._1 = 0.0;
        _2 = 0 + Bd.Ld.rand() * (1 - 0);
        _3i = Db.kb(_2);
        ctx.V(_3s, 0, (_3i - 0) * 1);
        Db.lb(_3, Bd._3[_3s[0]], _3s[1]);
        _4i = Db.kb(_2);
        ctx.V(_4s, 0, (_4i - 0) * 1);
        Db.lb(_4, Bd._4[_4s[0]], _4s[1]);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        ctx.Y(_6, _3, _4, _5);
        ctx.W(_7, _6[0], _6[1], 0);
        Xb._8 = [];
        ctx.rb(Xb._8, _7, Bd.Mc);
        ctx.c(Xb._8, Bd.Ab, Xb._8);
        Xb._9 = 0;
        _10 = 0 + Bd.Ld.rand() * (1 - 0);
        _11i0 = _10 < 0 ? 0 : _10 > 1 ? 1 : _10;
        _11i0 < 0.710626 ? _11i0 < 0.388302 ? ctx.V(_11s0, 0, (_11i0 - 0) * 2.57531) : ctx.V(_11s0, 1, (_11i0 - 0.388302) * 3.10247) : ctx.V(_11s0, 2, (_11i0 - 0.710626) * 3.45573);
        _11 = Db.nb(Bd._11[0][_11s0[0]], _11s0[1]);
        Xb._12 = _11;
        ctx.T(Xb.Ab, Xb._8);
        Xb.pc(0)._Texture = Xb._12;
        Xb.pc(1)._Texture = Xb._12;
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._1 += Qb;
        ctx.T(Xb.Ab, Xb._8);
        Xb.pc(0)._Texture = Xb._12;
        Xb.pc(1)._Texture = Xb._12;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _13 = 2;
        if (Xb._1 > _13) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 0;
      Ld.presimFrameTime = 0.1;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_Fireworks_parent());
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

  return Fireworks01;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXEZpcmV3b3JrczAxLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIk5ldXRyaW5vRWZmZWN0IiwibmFtZXNwYWNlIiwiX19sYXN0X18iLCJzZWxmIiwiRmlyZXdvcmtzMDEiLCJjdHgiLCJEYiIsIm5lIiwiTGQiLCJCZCIsIndlIiwicGUiLCJsZW5ndGgiLCJMYyIsInByb3RvdHlwZSIsIkVjIiwiRmMiLCJ4ZSIsImZlIiwiQWIiLCJYYiIsIkdjIiwiaWIiLCJNZCIsIkhjIiwiTWF0aCIsImNvcyIsIkljIiwic2luIiwieWUiLCJBZSIsIk5kIiwiemUiLCJ0cmFuc2Zvcm0iLCJxIiwiTWMiLCJ6MiIsInh5Iiwid3oiLCJQYyIsImdlIiwidmMiLCJCZSIsIm9jIiwiT2QiLCJEZSIsImZsb29yIiwiUWMiLCJSYyIsIkVlIiwic2xpY2UiLCJkZiIsImFicyIsImVmIiwic2F2ZSIsInRyYW5zbGF0ZSIsIlBkIiwiZ2xvYmFsQWxwaGEiLCJnZiIsIlllIiwiVGMiLCJaZSIsIlVjIiwiYWYiLCJiZiIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRyYXdJbWFnZSIsImltYWdlIiwieCIsInkiLCJmaWxsU3R5bGUiLCJmZiIsImZpbGxSZWN0IiwiY2YiLCJyZXN0b3JlIiwiSGQiLCJtYXRlcmlhbHMiLCJtb2RlbCIsInJlbmRlclN0eWxlcyIsInJlbmRlclN0eWxlSW5kZXgiLCJtYXRlcmlhbEluZGV4IiwidGV4dHVyZURlc2NzIiwidGV4dHVyZUluZGljZXMiLCJ3aWR0aCIsImhlaWdodCIsIlNjIiwia2QiLCJhIiwiYiIsIlZjIiwiV2IiLCJ0YyIsInNvcnQiLCJvZSIsInZlcnRleCIsInBvc2l0aW9uIiwiY29sb3IiLCJ0ZXhDb29yZHMiLCJxZSIsInNlIiwicmUiLCJ0ZSIsInJlbmRlckJ1ZmZlciIsIkNlIiwidjAiLCJ2MSIsInYyIiwidjMiLCJGZSIsIkdlIiwicyIsImMiLCJIZSIsIkllIiwiSmUiLCJLZSIsInUiLCJyZ2IiLCJ2IiwiUGUiLCJRZSIsIlJlIiwiU2UiLCJXZSIsInRleHR1cmVzUmVtYXAiLCJVZSIsIlZlIiwiYmVmb3JlUXVhZCIsInB1c2hWZXJ0ZXgiLCJfX2xhc3RSZW5kZXJDYWxsIiwiUmVuZGVyQ2FsbCIsImxhc3RSZW5kZXJDYWxsIiwibnVtSW5kaWNlcyIsInB1c2hSZW5kZXJDYWxsIiwic3RhcnRJbmRleCIsInVlIiwiZm9yRWFjaCIsImRlcHRoIiwiSCIsImxkIiwidmUiLCJWYiIsIkViIiwiRmIiLCJHYiIsIkhiIiwiSWIiLCJLYiIsIkxiIiwiTWIiLCJOYiIsIk9iIiwiSmQiLCJJZCIsIlFiIiwiUGIiLCJSYiIsInN5c3RlbVRpbWUiLCJTYiIsImljIiwiemIiLCJUYiIsIlViIiwiZGlzYWN0aXZhdGUiLCJhYiIsIkJiIiwic2xlcnBxIiwicHJldlJvdGF0aW9uIiwiSmIiLCJzYyIsInBvcCIsInVuc2hpZnQiLCJZYiIsIlpiIiwiVCIsIlUiLCJhYyIsImJjIiwiY2MiLCJkYyIsInN5c3RlbVRpbWVCZWZvcmVGcmFtZSIsInN5c3RlbVRpbWVBZnRlckZyYW1lIiwiZWMiLCJPIiwiaCIsImZjIiwicmQiLCJoYyIsImpjIiwia2MiLCJYIiwibWMiLCJLYyIsIm5jIiwiaSIsInBjIiwiQWQiLCJzZCIsImZkIiwiZ2QiLCJxYyIsInJjIiwiamUiLCJ1YyIsIm1kIiwibmQiLCJwdXNoIiwieGMiLCJ3YyIsImFjdGl2YXRlIiwieWMiLCJHZCIsIkVkIiwiemMiLCJBYyIsIkNjIiwiV2MiLCJjb25zdHJ1Y3QiLCJZYyIsImFkIiwiZGQiLCJ2ZCIsImVkIiwidWQiLCJqZCIsImlkIiwiaGQiLCJ3ZCIsIlpjIiwicGF1c2VkXyIsImdlbmVyYXRvcnNQYXVzZWRfIiwiVyIsImFwcGx5IiwiVGQiLCJzaGlmdCIsImciLCJ3IiwieGQiLCJyZWFkeSIsImFjdGl2YXRlZCIsInNwbGljZSIsInBhdXNlIiwidW5wYXVzZSIsInBhdXNlZCIsInBhdXNlR2VuZXJhdG9ycyIsInVucGF1c2VHZW5lcmF0b3JzIiwiZ2VuZXJhdG9yc1BhdXNlZCIsImdldE51bVBhcnRpY2xlcyIsImtlIiwiQ2IiLCJfaW5pdCIsIm9wdGlvbnMiLCJvZCIsInBkIiwiY29uY2F0IiwibmFtZSIsIkNkIiwicWQiLCJfcHJlc2ltTmVlZGVkIiwicGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsInBhdXNlQWxsRW1pdHRlcnMiLCJ6ZXJvVXBkYXRlIiwidXBkYXRlRml4ZWQiLCJVZCIsInByZXNpbUZyYW1lVGltZSIsInJlc3RhcnQiLCJyb3RhdGlvbiIsInVwZGF0ZSIsImR0IiwiRGQiLCJ1cGRhdGVGbGV4IiwiZnJhbWVUaW1lIiwidXBkYXRlZFRpbWUiLCJmcmFtZVJvdGF0aW9uIiwiZXF1YWx2M18iLCJlcXVhbHFfIiwicmVzZXRQb3NpdGlvbiIsInNldFByb3BlcnR5SW5BbGxFbWl0dGVycyIsInZhbHVlIiwicHJvcE5hbWUiLCJBcnJheSIsIlMiLCJ1bnBhdXNlQWxsRW1pdHRlcnMiLCJhcmVBbGxFbWl0dGVyc1BhdXNlZCIsInVucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsImFyZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzUGF1c2VkIiwibnVtUGFydGljbGVzIiwibGUiLCJjYWxsIiwiaW5kaWNlcyIsInZlckRpc3AiLCJYZSIsImluaXRpYWxpemUiLCJfX251bUluZGljZXMiLCJmaWxsR2VvbWV0cnlCdWZmZXJzIiwiY2FtZXJhUmlnaHQiLCJjYW1lcmFVcCIsImNhbWVyYURpciIsImNsZWFudXAiLCJtZSIsImRyYXciLCJjb250ZXh0IiwiY2FtZXJhIiwiY3JlYXRlV0dMSW5zdGFuY2UiLCJjcmVhdGVDYW52YXMyREluc3RhbmNlIiwidGV4dHVyZXMiLCJFbWl0dGVyX1N0cmlwZV9jaGlsZCIsIl8xIiwiXzUiLCJfNyIsIl85IiwiXzEwIiwiXzEwZnMiLCJfMTB2cyIsIl8xMHJ3IiwiXzEwcnduIiwiXzEwcndsIiwiXzEwdiIsIl8xMHAiLCJfMTBkdGwiLCJfMTBkdHAiLCJfMTBkZiIsIl8xMGZzZCIsIl8xMiIsIl8xMmkiLCJfMTMiLCJfMTEiLCJfMTQiLCJfMTUiLCJfMTVpMCIsIl8xNXMwIiwiXzE2IiwiXzE3IiwiXzE3aTAiLCJfMTdzMCIsIl8xOCIsIl8xOGkwIiwiXzE4czAiLCJfMTkiLCJfUm90YXRpb24iLCJfVGV4dHVyZSIsIl8iLCJfMiIsIl8zIiwiXzQiLCJyYW5kdjNnZW4iLCJyYW5kIiwiXzYiLCJfOCIsIlAiLCJzcXJ0IiwiUSIsInFiIiwiViIsIm5iIiwiRW1pdHRlcl9TdHJpcGVfcGFyZW50IiwiXzd4IiwiXzd5IiwiXzd6IiwiXzhpMCIsIl84czAiLCJyYiIsIkkiLCJwYiIsIkVtaXR0ZXJfU3BhcmtzIiwiX2kwIiwiX3MwIiwiRW1pdHRlcl9TcGxhc2giLCJfN2kwIiwiXzdzMCIsIkVtaXR0ZXJfRmlyZXdvcmtzX3BhcmVudCIsIl8zaSIsIl8zcyIsIl80aSIsIl80cyIsIl8xMWkwIiwiXzExczAiLCJrYiIsImxiIiwiWSIsInJhbmRvbSIsInIiLCJwYXRoIiwiaW5kZXhJbnQiLCJsZXJwIiwiZnVuY1ZhbHVlcyIsIm5leHRJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQyxXQUFVQSxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUN0QixNQUFJLE9BQU9DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0MsTUFBUCxLQUFrQixXQUFyRCxFQUFrRTtBQUM5REEsSUFBQUEsTUFBTSxDQUFDRCxPQUFQLEdBQWlCRCxPQUFPLEVBQXhCO0FBQ0gsR0FGRCxNQUVPLElBQUksT0FBT0csTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsTUFBTSxDQUFDQyxHQUEzQyxFQUFnRDtBQUNuREQsSUFBQUEsTUFBTSxDQUFDLENBQUMsU0FBRCxDQUFELEVBQWMsVUFBVUYsT0FBVixFQUFtQjtBQUNuQyxPQUFDRixJQUFJLENBQUNNLGNBQUwsR0FBc0JKLE9BQXZCLEVBQWdDLGFBQWhDLElBQWlERCxPQUFPLEVBQXhEO0FBQ0gsS0FGSyxDQUFOO0FBR0gsR0FKTSxNQUlBO0FBQ0gsUUFBSU0sU0FBUyxHQUFJUCxJQUFJLENBQUNNLGNBQUwsS0FBd0JOLElBQUksQ0FBQ00sY0FBTCxHQUFzQixFQUE5QyxDQUFqQjtBQUNBQyxJQUFBQSxTQUFTLENBQUNDLFFBQVYsR0FBcUJELFNBQVMsQ0FBQyxhQUFELENBQVQsR0FBMkJOLE9BQU8sRUFBdkQ7QUFDSDtBQUNKLENBWEEsRUFXQyxPQUFPUSxJQUFQLEtBQWdCLFdBQWhCLEdBQThCQSxJQUE5QixTQVhELEVBVzRDLFlBQVk7QUFFekQsV0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDekIsUUFBSUMsRUFBRSxHQUFHLElBQVQ7O0FBRUEsUUFBSUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBVUMsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0FBQzFCLFdBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVUEsRUFBVjs7QUFFQSxVQUFJLEtBQUtBLEVBQUwsQ0FBUUMsRUFBUixDQUFXQyxFQUFYLENBQWNDLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDN0IsYUFBS0YsRUFBTCxHQUFVLEtBQUtELEVBQUwsQ0FBUUMsRUFBUixDQUFXQyxFQUFYLENBQWMsQ0FBZCxDQUFWO0FBRUEsYUFBS0UsRUFBTCxHQUFVLENBQUNOLEVBQUUsQ0FBQ08sU0FBSCxDQUFhQyxFQUFkLEVBQ1RSLEVBQUUsQ0FBQ08sU0FBSCxDQUFhRSxFQURKLEVBQ1EsS0FBS04sRUFBTCxDQUFRTyxFQURoQixDQUFWO0FBRUEsT0FMRCxNQU9DLEtBQUtQLEVBQUwsR0FBVSxJQUFWO0FBQ0QsS0FaRDs7QUFjQUgsSUFBQUEsRUFBRSxDQUFDTyxTQUFILEdBQWU7QUFDZEMsTUFBQUEsRUFBRSxFQUFFLFlBQVVHLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0I7QUFDekIsWUFBSUMsRUFBRSxHQUFHaEIsR0FBRyxDQUFDaUIsRUFBSixDQUFPRixFQUFFLENBQUNHLEVBQVYsQ0FBVDtBQUNBLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNMLEVBQVQsQ0FBVDtBQUNBLFlBQUlNLEVBQUUsR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVNQLEVBQVQsQ0FBVDtBQUNBLFlBQUlRLEVBQUUsR0FBR3hCLEdBQUcsQ0FBQ3lCLEVBQUosQ0FBT1YsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixDQUFQLENBQVQ7QUFDQSxZQUFJQyxFQUFFLEdBQUczQixHQUFHLENBQUN5QixFQUFKLENBQU9WLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBUCxDQUFUO0FBQ0FiLFFBQUFBLEVBQUU7QUFBQztBQUFJZSxRQUFBQSxTQUFQLENBQWlCSixFQUFFLEdBQUdMLEVBQXRCLEVBQTBCSyxFQUFFLEdBQUdGLEVBQS9CLEVBQW1DSyxFQUFFLEdBQUcsQ0FBQ0wsRUFBekMsRUFBNkNLLEVBQUUsR0FBR1IsRUFBbEQsRUFBc0RMLEVBQUUsQ0FBQyxDQUFELENBQXhELEVBQTZEQSxFQUFFLENBQUMsQ0FBRCxDQUEvRDtBQUNBLE9BUmE7QUFVZEgsTUFBQUEsRUFBRSxFQUFFLFlBQVVFLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0I7QUFDekIsWUFBSWMsQ0FBQyxHQUFHZCxFQUFFLENBQUNlLEVBQVg7QUFDQSxZQUFJQyxFQUFFLEdBQUcsTUFBTUYsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLFlBQUlHLEVBQUUsR0FBRyxNQUFNSCxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0EsWUFBSUksRUFBRSxHQUFHLE1BQU1KLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBdkI7QUFDQSxZQUFJTCxFQUFFLEdBQUd4QixHQUFHLENBQUN5QixFQUFKLENBQU9WLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBUCxDQUFUO0FBQ0EsWUFBSUMsRUFBRSxHQUFHM0IsR0FBRyxDQUFDeUIsRUFBSixDQUFPVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQVAsQ0FBVDtBQUNBYixRQUFBQSxFQUFFO0FBQUM7QUFBSWUsUUFBQUEsU0FBUCxDQUNDSixFQUFFLElBQUksTUFBTSxNQUFNSyxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXBCLEdBQTBCRSxFQUE5QixDQURILEVBRUNQLEVBQUUsSUFBSVEsRUFBRSxHQUFHQyxFQUFULENBRkgsRUFHQ04sRUFBRSxJQUFJTSxFQUFFLEdBQUdELEVBQVQsQ0FISCxFQUlDTCxFQUFFLElBQUksTUFBTUUsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEdBQW9CRSxFQUFwQixHQUF5QixHQUE3QixDQUpILEVBS0NqQixFQUFFLENBQUMsQ0FBRCxDQUxILEVBS1FBLEVBQUUsQ0FBQyxDQUFELENBTFY7QUFNQSxPQXZCYTtBQXlCZG9CLE1BQUFBLEVBQUUsRUFBRSxZQUFVckIsRUFBVixFQUFjRSxFQUFkLEVBQWtCb0IsRUFBbEIsRUFBc0I7QUFDekJwQixRQUFBQSxFQUFFLENBQUNxQixFQUFILENBQU12QixFQUFOLEVBQVUsQ0FBQyxDQUFYLEVBQWNzQixFQUFkOztBQUVBLFlBQUksS0FBSzlCLEVBQVQsRUFBYTtBQUVaLGNBQUksS0FBS2dDLEVBQUwsSUFBVyxJQUFYLElBQW1CLENBQUN0QixFQUFFLENBQUN1QixFQUEzQixFQUErQjtBQUU5QixnQkFBSXZCLEVBQUUsQ0FBQ3dCLEVBQUgsR0FBUSxLQUFaLEVBQW1CO0FBQ2xCLGtCQUFJQyxFQUFFLEdBQUdwQixJQUFJLENBQUNxQixLQUFMLENBQVcxQixFQUFFLENBQUMyQixFQUFILEdBQVEsS0FBS3JDLEVBQUwsQ0FBUXNDLEVBQTNCLENBQVQ7QUFDQSxrQkFBSUMsRUFBRSxHQUFHeEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBRUEsa0JBQUk3QixFQUFFLEdBQUdDLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNK0IsS0FBTixFQUFUO0FBQ0Esa0JBQUluQixFQUFFLEdBQUdYLEVBQUUsQ0FBQ1csRUFBSCxDQUFNbUIsS0FBTixFQUFUOztBQUNBLGtCQUFJLENBQUNWLEVBQUQsSUFBT0EsRUFBRTtBQUFDO0FBQUlQLGNBQUFBLFNBQVAsQ0FBaUJkLEVBQWpCLEVBQXFCWSxFQUFyQixDQUFYLEVBQXFDO0FBRXBDLG9CQUFJb0IsRUFBRSxHQUFHMUIsSUFBSSxDQUFDMkIsR0FBTCxDQUFTckIsRUFBRSxDQUFDLENBQUQsQ0FBWCxDQUFUO0FBQ0Esb0JBQUlzQixFQUFFLEdBQUc1QixJQUFJLENBQUMyQixHQUFMLENBQVNyQixFQUFFLENBQUMsQ0FBRCxDQUFYLENBQVQ7O0FBRUEsb0JBQUlvQixFQUFFLEdBQUcsS0FBTCxJQUFjRSxFQUFFLEdBQUcsS0FBdkIsRUFBOEI7QUFDN0JuQyxrQkFBQUEsRUFBRSxDQUFDb0MsSUFBSDtBQUNBLHVCQUFLekMsRUFBTCxDQUFRSyxFQUFSLEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCO0FBRUFGLGtCQUFBQSxFQUFFLENBQUNxQyxTQUFILENBQWEsQ0FBQ0osRUFBRCxHQUFNL0IsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBbkIsRUFBNkIsQ0FBQ0gsRUFBRCxJQUFPLElBQUlqQyxFQUFFLENBQUNvQyxFQUFILENBQU0sQ0FBTixDQUFYLENBQTdCO0FBQ0F0QyxrQkFBQUEsRUFBRSxDQUFDdUMsV0FBSCxJQUFrQnJDLEVBQUUsQ0FBQ3dCLEVBQXJCOztBQUVBLHNCQUFJeEIsRUFBRSxDQUFDc0MsRUFBSCxDQUFNLENBQU4sSUFBVyxLQUFYLElBQW9CdEMsRUFBRSxDQUFDc0MsRUFBSCxDQUFNLENBQU4sSUFBVyxLQUEvQixJQUF3Q3RDLEVBQUUsQ0FBQ3NDLEVBQUgsQ0FBTSxDQUFOLElBQVcsS0FBdkQsRUFBOEQ7QUFDN0Qsd0JBQUlQLEVBQUUsSUFBSSxDQUFOLElBQVdFLEVBQUUsSUFBSSxDQUFyQixFQUF3QjtBQUN2QiwwQkFBSU0sRUFBRSxHQUFHUixFQUFFLEdBQUcsS0FBS1MsRUFBVixHQUFlVCxFQUFmLEdBQW9CLEtBQUtTLEVBQWxDO0FBQ0EsMEJBQUlDLEVBQUUsR0FBR1IsRUFBRSxHQUFHLEtBQUtTLEVBQVYsR0FBZVQsRUFBZixHQUFvQixLQUFLUyxFQUFsQztBQUVBekQsc0JBQUFBLEdBQUcsQ0FBQzBELEVBQUosQ0FBT0osRUFBUCxFQUFXRSxFQUFYO0FBRUF4RCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPQyx3QkFBUCxHQUFrQyxNQUFsQztBQUNBNUQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0UsU0FBUCxDQUFpQixLQUFLeEIsRUFBTCxDQUFReUIsS0FBekIsRUFDQyxLQUFLekIsRUFBTCxDQUFRMEIsQ0FBUixHQUFZLEtBQUtSLEVBQUwsR0FBVWYsRUFEdkIsRUFDMkIsS0FBS0gsRUFBTCxDQUFRMkIsQ0FBUixHQUFZLEtBQUtQLEVBQUwsR0FBVWIsRUFEakQsRUFFQyxLQUFLVyxFQUZOLEVBRVUsS0FBS0UsRUFGZixFQUdDLENBSEQsRUFHSSxDQUhKLEVBR09ILEVBSFAsRUFHV0UsRUFIWDtBQUtBeEQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0Msd0JBQVAsR0FBa0MsVUFBbEM7QUFDQTVELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9NLFNBQVAsR0FBbUJqRSxHQUFHLENBQUNrRSxFQUFKLENBQU9uRCxFQUFFLENBQUNzQyxFQUFWLENBQW5CO0FBQ0FyRCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPUSxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCYixFQUF0QixFQUEwQkUsRUFBMUI7QUFFQXhELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9DLHdCQUFQLEdBQWtDLGtCQUFsQztBQUNBNUQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0UsU0FBUCxDQUFpQixLQUFLeEIsRUFBTCxDQUFReUIsS0FBekIsRUFDQyxLQUFLekIsRUFBTCxDQUFRMEIsQ0FBUixHQUFZLEtBQUtSLEVBQUwsR0FBVWYsRUFEdkIsRUFDMkIsS0FBS0gsRUFBTCxDQUFRMkIsQ0FBUixHQUFZLEtBQUtQLEVBQUwsR0FBVWIsRUFEakQsRUFFQyxLQUFLVyxFQUZOLEVBRVUsS0FBS0UsRUFGZixFQUdDLENBSEQsRUFHSSxDQUhKLEVBR09ILEVBSFAsRUFHV0UsRUFIWDtBQUtBM0Msc0JBQUFBLEVBQUUsQ0FBQ2dELFNBQUgsQ0FBYTdELEdBQUcsQ0FBQ29FLEVBQWpCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCZCxFQUEzQixFQUErQkUsRUFBL0IsRUFBbUMsQ0FBbkMsRUFBc0MsQ0FBdEMsRUFBeUNWLEVBQXpDLEVBQTZDRSxFQUE3QztBQUNBO0FBQ0QsbUJBekJELE1BMEJLO0FBQ0puQyxvQkFBQUEsRUFBRSxDQUFDZ0QsU0FBSCxDQUFhLEtBQUt4QixFQUFMLENBQVF5QixLQUFyQixFQUNDLEtBQUt6QixFQUFMLENBQVEwQixDQUFSLEdBQVksS0FBS1IsRUFBTCxHQUFVZixFQUR2QixFQUMyQixLQUFLSCxFQUFMLENBQVEyQixDQUFSLEdBQVksS0FBS1AsRUFBTCxHQUFVYixFQURqRCxFQUVDLEtBQUtXLEVBRk4sRUFFVSxLQUFLRSxFQUZmLEVBRW1CLENBRm5CLEVBRXNCLENBRnRCLEVBRXlCWCxFQUZ6QixFQUU2QkUsRUFGN0I7QUFHQTs7QUFFRG5DLGtCQUFBQSxFQUFFLENBQUN3RCxPQUFIO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRDs7QUFFRHRELFFBQUFBLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTXZCLEVBQU4sRUFBVSxDQUFWLEVBQWFzQixFQUFiO0FBQ0EsT0ExRmE7QUE0RmRtQyxNQUFBQSxFQUFFLEVBQUUsWUFBVXpELEVBQVYsRUFBY3NCLEVBQWQsRUFBa0I7QUFDckJ0QixRQUFBQSxFQUFFLENBQUNvQyxJQUFIOztBQUVBLFlBQUksS0FBSzVDLEVBQVQsRUFBYTtBQUNaUSxVQUFBQSxFQUFFLENBQUMrQyx3QkFBSCxHQUE4QixLQUFLekQsRUFBTCxDQUFRb0UsU0FBUixDQUFrQixLQUFLcEUsRUFBTDtBQUFRO0FBQUlxRSxVQUFBQSxLQUFaLENBQWtCQyxZQUFsQixDQUErQixLQUFLcEUsRUFBTCxDQUFRcUUsZ0JBQXZDLEVBQXlEQyxhQUEzRSxDQUE5QjtBQUNBLGVBQUt0QyxFQUFMLEdBQVUsS0FBS2xDLEVBQUwsQ0FBUXlFLFlBQVIsQ0FBcUIsS0FBS3pFLEVBQUw7QUFBUTtBQUFJcUUsVUFBQUEsS0FBWixDQUFrQkMsWUFBbEIsQ0FBK0IsS0FBS3BFLEVBQUwsQ0FBUXFFLGdCQUF2QyxFQUF5REcsY0FBekQsQ0FBd0UsQ0FBeEUsQ0FBckIsQ0FBVjtBQUNBLFNBSEQsTUFJSztBQUNKLGVBQUt4QyxFQUFMLEdBQVUsSUFBVjtBQUNBOztBQUVELFlBQUksS0FBS0EsRUFBVCxFQUFhO0FBQ1osZUFBS2tCLEVBQUwsR0FBVSxLQUFLbEIsRUFBTCxDQUFReUMsS0FBUixHQUFnQixLQUFLekUsRUFBTCxDQUFRc0MsRUFBbEM7QUFDQSxlQUFLYyxFQUFMLEdBQVUsS0FBS3BCLEVBQUwsQ0FBUTBDLE1BQVIsR0FBaUIsS0FBSzFFLEVBQUwsQ0FBUTJFLEVBQW5DO0FBQ0E7O0FBRUQsaUJBQVNDLEVBQVQsQ0FBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQ2pCLGNBQUlELENBQUMsQ0FBQ3BFLEVBQUYsQ0FBSyxDQUFMLElBQVVxRSxDQUFDLENBQUNyRSxFQUFGLENBQUssQ0FBTCxDQUFkLEVBQ0MsT0FBTyxDQUFQO0FBQ0QsY0FBSW9FLENBQUMsQ0FBQ3BFLEVBQUYsQ0FBSyxDQUFMLElBQVVxRSxDQUFDLENBQUNyRSxFQUFGLENBQUssQ0FBTCxDQUFkLEVBQ0MsT0FBTyxDQUFDLENBQVI7QUFDRCxpQkFBTyxDQUFQO0FBQ0E7O0FBRUQsZ0JBQVEsS0FBS1YsRUFBTCxDQUFRZ0YsRUFBaEI7QUFDQyxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUFqQyxFQUF5QyxFQUFFOEUsRUFBM0MsRUFBK0M7QUFDOUMsbUJBQUtuRCxFQUFMLENBQVFyQixFQUFSLEVBQVksS0FBS1QsRUFBTCxDQUFRa0YsRUFBUixDQUFXRCxFQUFYLENBQVosRUFBNEJsRCxFQUE1QjtBQUNBOztBQUNEOztBQUNELGVBQUssQ0FBTDtBQUNDLGlCQUFLLElBQUlrRCxFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQXpCLEVBQWlDOEUsRUFBRSxLQUFLLENBQXhDLEdBQTRDO0FBQzNDLG1CQUFLbkQsRUFBTCxDQUFRckIsRUFBUixFQUFZLEtBQUtULEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFaLEVBQTRCbEQsRUFBNUI7QUFDQTs7QUFDRDs7QUFDRCxlQUFLLENBQUw7QUFDQyxpQkFBSy9CLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0MsSUFBWCxDQUFnQk4sRUFBaEI7O0FBRUEsaUJBQUssSUFBSUksRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLakYsRUFBTCxDQUFRa0YsRUFBUixDQUFXL0UsTUFBakMsRUFBeUMsRUFBRThFLEVBQTNDLEVBQStDO0FBQzlDLG1CQUFLbkQsRUFBTCxDQUFRckIsRUFBUixFQUFZLEtBQUtULEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFaLEVBQTRCbEQsRUFBNUI7QUFDQTs7QUFDRDtBQWpCRjs7QUFvQkF0QixRQUFBQSxFQUFFLENBQUN3RCxPQUFIO0FBQ0E7QUF6SWEsS0FBZjs7QUE0SUEsUUFBSW1CLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVyRixFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFFMUIsV0FBS0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsV0FBS0MsRUFBTCxHQUFVQSxFQUFWO0FBRUEsVUFBSSxLQUFLQSxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQ0MsS0FBS0YsRUFBTCxHQUFVLEtBQUtELEVBQUwsQ0FBUUMsRUFBUixDQUFXQyxFQUFYLENBQWMsQ0FBZCxDQUFWLENBREQsS0FHQyxLQUFLRCxFQUFMLEdBQVUsSUFBVjtBQUVELFdBQUtvRixNQUFMLEdBQWMsQ0FDYjtBQUFFO0FBQUlDLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BRGEsRUFFYjtBQUFFO0FBQUlGLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BRmEsRUFHYjtBQUFFO0FBQUlGLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BSGEsRUFJYjtBQUFFO0FBQUlGLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BSmEsQ0FBZDtBQUtBLEtBZkQ7O0FBaUJBSixJQUFBQSxFQUFFLENBQUMvRSxTQUFILEdBQWU7QUFDZG9GLE1BQUFBLEVBQUUsRUFBRSxZQUFVOUUsRUFBVixFQUFjK0UsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxZQUExQixFQUF3QztBQUMzQ2xGLFFBQUFBLEVBQUUsQ0FBQ21GLEVBQUgsQ0FBTSxDQUFDLENBQVAsRUFBVUosRUFBVixFQUFjQyxFQUFkLEVBQWtCQyxFQUFsQixFQUFzQkMsWUFBdEI7O0FBRUEsWUFBSSxLQUFLNUYsRUFBVCxFQUFhO0FBRVosY0FBSSxDQUFDVSxFQUFFLENBQUN1QixFQUFSLEVBQVk7QUFFWCxnQkFBSTZELEVBQUUsR0FBRyxLQUFLVixNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsZ0JBQUlXLEVBQUUsR0FBRyxLQUFLWCxNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsZ0JBQUlZLEVBQUUsR0FBRyxLQUFLWixNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsZ0JBQUlhLEVBQUUsR0FBRyxLQUFLYixNQUFMLENBQVksQ0FBWixDQUFUO0FBRUEsZ0JBQUljLEVBQUUsR0FBRyxFQUFUO0FBQUEsZ0JBQWFDLEVBQUUsR0FBRyxFQUFsQjs7QUFFQSxnQkFBSSxLQUFLbkcsRUFBTCxDQUFRTyxFQUFSLElBQWMsQ0FBbEIsRUFBcUI7QUFDcEIsa0JBQUlzRSxDQUFDLEdBQUdsRixHQUFHLENBQUNpQixFQUFKLENBQU9GLEVBQUUsQ0FBQ0csRUFBVixDQUFSO0FBQ0Esa0JBQUl1RixDQUFDLEdBQUcsQ0FBQ3JGLElBQUksQ0FBQ0csR0FBTCxDQUFTMkQsQ0FBVCxDQUFUO0FBQ0Esa0JBQUl3QixDQUFDLEdBQUd0RixJQUFJLENBQUNDLEdBQUwsQ0FBUzZELENBQVQsQ0FBUjtBQUVBcUIsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFZLENBQVIsR0FBWVgsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVSxDQUE1QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFULEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVksQ0FBUixHQUFZWCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFVLENBQTVCO0FBQ0FGLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRWSxDQUFSLEdBQVlYLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVUsQ0FBNUI7QUFFQUQsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQUNWLEVBQUUsQ0FBQyxDQUFELENBQUgsR0FBU1csQ0FBVCxHQUFhVixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFXLENBQTdCO0FBQ0FGLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFDVixFQUFFLENBQUMsQ0FBRCxDQUFILEdBQVNXLENBQVQsR0FBYVYsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVyxDQUE3QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBQ1YsRUFBRSxDQUFDLENBQUQsQ0FBSCxHQUFTVyxDQUFULEdBQWFWLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVcsQ0FBN0I7QUFDQSxhQVpELE1BYUs7QUFDSixrQkFBSTdFLENBQUMsR0FBR2QsRUFBRSxDQUFDZSxFQUFYO0FBQ0Esa0JBQUlDLEVBQUUsR0FBRyxNQUFNRixDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0Esa0JBQUlHLEVBQUUsR0FBRyxNQUFNSCxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0Esa0JBQUlJLEVBQUUsR0FBRyxNQUFNSixDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBRUEwRSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsTUFBTSxNQUFNMUUsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUEwQkUsRUFBbEM7QUFDQXdFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUXZFLEVBQUUsR0FBR0MsRUFBYjtBQUNBc0UsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLE1BQU0xRSxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQWQsR0FBb0IsTUFBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUExQztBQUVBMkUsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFReEUsRUFBRSxHQUFHQyxFQUFiO0FBQ0F1RSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsTUFBTSxNQUFNM0UsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUEwQkUsRUFBbEM7QUFDQXlFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxNQUFNM0UsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEdBQW9CLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBMUM7QUFDQTs7QUFFRCxnQkFBSThFLEVBQUUsR0FBRyxFQUFUO0FBQUEsZ0JBQWFDLEVBQUUsR0FBRyxFQUFsQjtBQUFBLGdCQUFzQkMsRUFBRSxHQUFHLEVBQTNCO0FBQUEsZ0JBQStCQyxFQUFFLEdBQUcsRUFBcEM7QUFDQTlHLFlBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTUosRUFBTixFQUFVSixFQUFWLEVBQWMsQ0FBQ3hGLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBRCxHQUFZWCxFQUFFLENBQUNvQyxFQUFILENBQU0sQ0FBTixDQUExQjtBQUNBbkQsWUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNSCxFQUFOLEVBQVVMLEVBQVYsRUFBY3hGLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sS0FBWSxNQUFNWCxFQUFFLENBQUNvQyxFQUFILENBQU0sQ0FBTixDQUFsQixDQUFkO0FBQ0FuRCxZQUFBQSxHQUFHLENBQUMrRyxDQUFKLENBQU1GLEVBQU4sRUFBVUwsRUFBVixFQUFjLENBQUN6RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQUQsR0FBWVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBMUI7QUFDQW5ELFlBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTUQsRUFBTixFQUFVTixFQUFWLEVBQWN6RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEtBQVksTUFBTVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBbEIsQ0FBZDtBQUVBbkQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNUCxFQUFFO0FBQUM7QUFBSVQsWUFBQUEsUUFBYixFQUF1QmlCLEVBQXZCLEVBQTJCRSxFQUEzQjtBQUNBN0csWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNUCxFQUFFO0FBQUM7QUFBSVQsWUFBQUEsUUFBYixFQUF1QlMsRUFBRTtBQUFDO0FBQUlULFlBQUFBLFFBQTlCLEVBQXdDM0UsRUFBRSxDQUFDRCxFQUEzQztBQUNBZCxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1OLEVBQUU7QUFBQztBQUFJVixZQUFBQSxRQUFiLEVBQXVCaUIsRUFBdkIsRUFBMkJHLEVBQTNCO0FBQ0E5RyxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1OLEVBQUU7QUFBQztBQUFJVixZQUFBQSxRQUFiLEVBQXVCVSxFQUFFO0FBQUM7QUFBSVYsWUFBQUEsUUFBOUIsRUFBd0MzRSxFQUFFLENBQUNELEVBQTNDO0FBQ0FkLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUwsRUFBRTtBQUFDO0FBQUlYLFlBQUFBLFFBQWIsRUFBdUJrQixFQUF2QixFQUEyQkUsRUFBM0I7QUFDQTlHLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUwsRUFBRTtBQUFDO0FBQUlYLFlBQUFBLFFBQWIsRUFBdUJXLEVBQUU7QUFBQztBQUFJWCxZQUFBQSxRQUE5QixFQUF3QzNFLEVBQUUsQ0FBQ0QsRUFBM0M7QUFDQWQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNSixFQUFFO0FBQUM7QUFBSVosWUFBQUEsUUFBYixFQUF1QmtCLEVBQXZCLEVBQTJCQyxFQUEzQjtBQUNBN0csWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNSixFQUFFO0FBQUM7QUFBSVosWUFBQUEsUUFBYixFQUF1QlksRUFBRTtBQUFDO0FBQUlaLFlBQUFBLFFBQTlCLEVBQXdDM0UsRUFBRSxDQUFDRCxFQUEzQztBQUVBO0FBQ0Msa0JBQUlrRyxHQUFHLEdBQUdoSCxHQUFHLENBQUNpSCxDQUFKLENBQU1sRyxFQUFFLENBQUNzQyxFQUFULEVBQWEsR0FBYixDQUFWO0FBQ0E4QyxjQUFBQSxFQUFFO0FBQUM7QUFBSVIsY0FBQUEsS0FBUCxHQUFlUyxFQUFFO0FBQUM7QUFBSVQsY0FBQUEsS0FBUCxHQUFlVSxFQUFFO0FBQUM7QUFBSVYsY0FBQUEsS0FBUCxHQUFlVyxFQUFFO0FBQUM7QUFBSVgsY0FBQUEsS0FBUCxHQUFlLENBQUNxQixHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVNBLEdBQUcsQ0FBQyxDQUFELENBQVosRUFBaUJBLEdBQUcsQ0FBQyxDQUFELENBQXBCLEVBQXlCakcsRUFBRSxDQUFDd0IsRUFBSCxHQUFRLEdBQWpDLENBQTVEO0FBQ0E7QUFFRDtBQUNDLGtCQUFJQyxFQUFFLEdBQUdwQixJQUFJLENBQUNxQixLQUFMLENBQVcxQixFQUFFLENBQUMyQixFQUFILEdBQVEsS0FBS3JDLEVBQUwsQ0FBUXNDLEVBQTNCLENBQVQ7QUFDQSxrQkFBSUMsRUFBRSxHQUFHeEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBRUEsa0JBQUl1RSxFQUFKLEVBQVFDLEVBQVIsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEI7QUFFQSxrQkFBSUMsRUFBRSxHQUFHLEtBQUtuSCxFQUFMLENBQVFvSCxhQUFSLENBQXNCLEtBQUtwSCxFQUFMO0FBQVE7QUFBSXFFLGNBQUFBLEtBQVosQ0FBa0JDLFlBQWxCLENBQStCLEtBQUtwRSxFQUFMLENBQVFxRSxnQkFBdkMsRUFBeURHLGNBQXpELENBQXdFLENBQXhFLENBQXRCLENBQVQ7O0FBQ0Esa0JBQUl5QyxFQUFKLEVBQVE7QUFDUCxvQkFBSUUsRUFBRSxHQUFHRixFQUFFLENBQUN4QyxLQUFILEdBQVcsS0FBS3pFLEVBQUwsQ0FBUXNDLEVBQTVCO0FBQ0Esb0JBQUk4RSxFQUFFLEdBQUdILEVBQUUsQ0FBQ3ZDLE1BQUgsR0FBWSxLQUFLMUUsRUFBTCxDQUFRMkUsRUFBN0I7QUFFQSxvQkFBSWtDLEVBQUUsR0FBR0ksRUFBRSxDQUFDdkQsQ0FBSCxHQUFPdkIsRUFBRSxHQUFHZ0YsRUFBckI7QUFDQSxvQkFBSUwsRUFBRSxHQUFHRCxFQUFFLEdBQUdNLEVBQWQ7QUFDQSxvQkFBSUosRUFBRSxHQUFJRSxFQUFFLENBQUN0RCxDQUFILEdBQU9zRCxFQUFFLENBQUN2QyxNQUFWLEdBQW1CbkMsRUFBRSxHQUFHNkUsRUFBbEM7QUFDQSxvQkFBSUosRUFBRSxHQUFHRCxFQUFFLEdBQUdLLEVBQWQ7QUFDQSxlQVJELE1BUU87QUFDTixvQkFBSUQsRUFBRSxHQUFHLE1BQU0sS0FBS25ILEVBQUwsQ0FBUXNDLEVBQXZCO0FBQ0Esb0JBQUk4RSxFQUFFLEdBQUcsTUFBTSxLQUFLcEgsRUFBTCxDQUFRMkUsRUFBdkI7QUFFQSxvQkFBSWtDLEVBQUUsR0FBRzFFLEVBQUUsR0FBR2dGLEVBQWQ7QUFDQSxvQkFBSUwsRUFBRSxHQUFHRCxFQUFFLEdBQUdNLEVBQWQ7QUFDQSxvQkFBSUosRUFBRSxHQUFJLE1BQU14RSxFQUFFLEdBQUc2RSxFQUFyQjtBQUNBLG9CQUFJSixFQUFFLEdBQUdELEVBQUUsR0FBR0ssRUFBZDtBQUNBOztBQUVEdEIsY0FBQUEsRUFBRTtBQUFDO0FBQUlQLGNBQUFBLFNBQVAsQ0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ3NCLEVBQUQsRUFBS0csRUFBTCxDQUF0QjtBQUNBakIsY0FBQUEsRUFBRTtBQUFDO0FBQUlSLGNBQUFBLFNBQVAsQ0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ3NCLEVBQUQsRUFBS0UsRUFBTCxDQUF0QjtBQUNBZixjQUFBQSxFQUFFO0FBQUM7QUFBSVQsY0FBQUEsU0FBUCxDQUFpQixDQUFqQixJQUFzQixDQUFDdUIsRUFBRCxFQUFLQyxFQUFMLENBQXRCO0FBQ0FkLGNBQUFBLEVBQUU7QUFBQztBQUFJVixjQUFBQSxTQUFQLENBQWlCLENBQWpCLElBQXNCLENBQUN1QixFQUFELEVBQUtFLEVBQUwsQ0FBdEI7QUFDQTs7QUFFRCxnQkFBSXBCLFlBQVksQ0FBQ3lCLFVBQWpCLEVBQTZCO0FBQzVCekIsY0FBQUEsWUFBWSxDQUFDeUIsVUFBYixDQUF3QixLQUFLckgsRUFBTCxDQUFRcUUsZ0JBQWhDO0FBQ0E7O0FBRUR1QixZQUFBQSxZQUFZLENBQUMwQixVQUFiLENBQXdCeEIsRUFBeEI7QUFDQUYsWUFBQUEsWUFBWSxDQUFDMEIsVUFBYixDQUF3QnZCLEVBQXhCO0FBQ0FILFlBQUFBLFlBQVksQ0FBQzBCLFVBQWIsQ0FBd0J0QixFQUF4QjtBQUNBSixZQUFBQSxZQUFZLENBQUMwQixVQUFiLENBQXdCckIsRUFBeEI7O0FBRUEsZ0JBQUksQ0FBQ0wsWUFBWSxDQUFDMkIsZ0JBQWxCLEVBQW9DO0FBQ25DM0IsY0FBQUEsWUFBWSxDQUFDMkIsZ0JBQWIsR0FBZ0MsSUFBSTVILEdBQUcsQ0FBQzZILFVBQVIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS3hILEVBQUwsQ0FBUXFFLGdCQUFqQyxDQUFoQztBQUNBLGFBRkQsTUFFTztBQUNOLGtCQUFJb0QsY0FBYyxHQUFHN0IsWUFBWSxDQUFDMkIsZ0JBQWxDOztBQUVBLGtCQUFJRSxjQUFjLENBQUNwRCxnQkFBZixJQUFtQyxLQUFLckUsRUFBTCxDQUFRcUUsZ0JBQS9DLEVBQWlFO0FBQ2hFb0QsZ0JBQUFBLGNBQWMsQ0FBQ0MsVUFBZixJQUE2QixDQUE3QjtBQUNBLGVBRkQsTUFFTztBQUNOOUIsZ0JBQUFBLFlBQVksQ0FBQytCLGNBQWIsQ0FBNEJGLGNBQTVCO0FBQ0E3QixnQkFBQUEsWUFBWSxDQUFDMkIsZ0JBQWIsR0FBZ0MsSUFBSTVILEdBQUcsQ0FBQzZILFVBQVIsQ0FDL0JDLGNBQWMsQ0FBQ0csVUFBZixHQUE0QkgsY0FBYyxDQUFDQyxVQURaLEVBRS9CLENBRitCLEVBRTVCLEtBQUsxSCxFQUFMLENBQVFxRSxnQkFGb0IsQ0FBaEM7QUFHQTtBQUNEO0FBQ0Q7QUFDRDs7QUFFRDNELFFBQUFBLEVBQUUsQ0FBQ21GLEVBQUgsQ0FBTSxDQUFOLEVBQVNKLEVBQVQsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJDLFlBQXJCO0FBQ0EsT0F6SGE7QUEySGRpQyxNQUFBQSxFQUFFLEVBQUUsWUFBVXBDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLFlBQXRCLEVBQW9DO0FBQ3ZDLGdCQUFRLEtBQUs3RixFQUFMLENBQVFnRixFQUFoQjtBQUNDLGVBQUssQ0FBTDtBQUNDLGlCQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQWpDLEVBQXlDLEVBQUU4RSxFQUEzQyxFQUErQztBQUM5QyxtQkFBS1EsRUFBTCxDQUFRLEtBQUt6RixFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBUixFQUF3QlMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsWUFBcEM7QUFDQTs7QUFDRDs7QUFFRCxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJWixFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQXpCLEVBQWlDOEUsRUFBRSxLQUFLLENBQXhDLEdBQTRDO0FBQzNDLG1CQUFLUSxFQUFMLENBQVEsS0FBS3pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFSLEVBQXdCUyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0NDLEVBQWhDLEVBQW9DQyxZQUFwQztBQUNBOztBQUNEOztBQUVELGVBQUssQ0FBTDtBQUNDLGlCQUFLN0YsRUFBTCxDQUFRa0YsRUFBUixDQUFXNkMsT0FBWCxDQUFtQixVQUFVcEgsRUFBVixFQUFjO0FBQ2hDQSxjQUFBQSxFQUFFLENBQUNxSCxLQUFILEdBQVdwSSxHQUFHLENBQUNxSSxDQUFKLENBQU1yQyxFQUFOLEVBQVVqRixFQUFFLENBQUNELEVBQWIsQ0FBWDtBQUNBLGFBRkQ7QUFJQSxpQkFBS1YsRUFBTCxDQUFRa0YsRUFBUixDQUFXQyxJQUFYLENBQWdCLFVBQVVMLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUMvQixrQkFBSUQsQ0FBQyxDQUFDa0QsS0FBRixHQUFVakQsQ0FBQyxDQUFDaUQsS0FBaEIsRUFDQyxPQUFPLENBQVA7QUFDRCxrQkFBSWxELENBQUMsQ0FBQ2tELEtBQUYsR0FBVWpELENBQUMsQ0FBQ2lELEtBQWhCLEVBQ0MsT0FBTyxDQUFDLENBQVI7QUFDRCxxQkFBTyxDQUFQO0FBQ0EsYUFORDtBQVFBLGlCQUFLaEksRUFBTCxDQUFRa0YsRUFBUixDQUFXNkMsT0FBWCxDQUFtQixVQUFVcEgsRUFBVixFQUFjO0FBQ2hDLG1CQUFLOEUsRUFBTCxDQUFROUUsRUFBUixFQUFZK0UsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLEVBQXBCLEVBQXdCQyxZQUF4QjtBQUNBLGFBRkQsRUFFRyxJQUZIO0FBR0E7QUE3QkY7QUErQkE7QUEzSmEsS0FBZjs7QUE4SkEsUUFBSXFDLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVuSSxFQUFWLEVBQWNFLEVBQWQsRUFBa0JrSSxFQUFsQixFQUFzQjtBQUM5QixVQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNBLFdBQUtySSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLRSxFQUFMLEdBQVVBLEVBQVYsQ0FIOEIsQ0FLOUI7O0FBRUEsZUFBU29JLEVBQVQsR0FBYztBQUNiLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxJQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUVBUCxRQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU0ySSxFQUFOLENBQVMsSUFBVCxFQVJhLENBUUc7O0FBRWhCLGFBQUtDLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGVBQUtDLEVBQUwsR0FBVSxLQUFLUCxFQUFmO0FBQ0EsZUFBS0QsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUhEOztBQUtBLGFBQUtPLEVBQUw7QUFDQTs7QUFFRFIsTUFBQUEsRUFBRSxDQUFDaEksU0FBSCxHQUFlO0FBQ2QwSSxRQUFBQSxFQUFFLEVBQUUsY0FBWTtBQUNmLGVBQUtGLEVBQUw7QUFDQSxTQUhhO0FBS2RHLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWN2SSxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0I7QUFDekIwRyxVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU1pSixFQUFOLENBQVNELEVBQVQsRUFBYWIsRUFBYixFQUFpQixJQUFqQixFQUR5QixDQUNEOztBQUV4QixjQUFJZSxFQUFFLEdBQUdmLEVBQUUsQ0FBQ2UsRUFBWjtBQUNBLGNBQUlDLFVBQVUsR0FBR3JKLEVBQUUsQ0FBQ29KLEVBQXBCO0FBQ0EsY0FBSUUsRUFBRSxHQUFHSixFQUFUO0FBQ0EsY0FBSUssRUFBRSxHQUFHLENBQVQ7O0FBRUEsY0FBSSxLQUFLQyxFQUFMLEdBQVUsUUFBZCxFQUF3QjtBQUV2QixnQkFBSUMsRUFBRSxHQUFHLEtBQUtWLEVBQUwsR0FBVUcsRUFBRSxHQUFHLEtBQUtNLEVBQTdCOztBQUVBLG1CQUFPQyxFQUFFLElBQUksR0FBYixFQUFrQjtBQUNqQixrQkFBSUMsRUFBRSxHQUFHLEtBQUtGLEVBQUwsR0FBVSxLQUFWLEdBQWtCLEdBQWxCLEdBQXdCLENBQUMsTUFBTSxLQUFLVCxFQUFaLElBQWtCLEtBQUtTLEVBQXhEO0FBQ0FGLGNBQUFBLEVBQUUsSUFBSUksRUFBTjtBQUNBTixjQUFBQSxFQUFFLElBQUlNLEVBQU47QUFDQUwsY0FBQUEsVUFBVSxJQUFJSyxFQUFkOztBQUVBLGtCQUFJLEtBQUtqQixFQUFMLElBQVcsSUFBWCxJQUFtQlcsRUFBRSxHQUFHLEtBQUtYLEVBQWpDLEVBQXFDO0FBQ3BDSixnQkFBQUEsRUFBRSxDQUFDc0IsV0FBSDtBQUNBO0FBQ0E7O0FBRUR0QixjQUFBQSxFQUFFLENBQUNlLEVBQUgsR0FBUUEsRUFBUjtBQUNBcEosY0FBQUEsRUFBRSxDQUFDb0osRUFBSCxHQUFRQyxVQUFSO0FBRUEsa0JBQUkxSSxFQUFFLElBQUl1SSxFQUFFLEdBQUcsQ0FBZixFQUNDckosR0FBRyxDQUFDK0osRUFBSixDQUFPdkIsRUFBRSxDQUFDMUgsRUFBVixFQUFjQSxFQUFkLEVBQWtCMEgsRUFBRSxDQUFDd0IsRUFBckIsRUFBeUJQLEVBQUUsR0FBR0osRUFBOUI7QUFFRCxrQkFBSXZILEVBQUUsSUFBSXVILEVBQUUsR0FBRyxDQUFmLEVBQ0NySixHQUFHLENBQUNpSyxNQUFKLENBQVd6QixFQUFFLENBQUMxRyxFQUFkLEVBQWtCQSxFQUFsQixFQUFzQjBHLEVBQUUsQ0FBQzBCLFlBQXpCLEVBQXVDVCxFQUFFLEdBQUdKLEVBQTVDLEVBbEJnQixDQW9CakI7O0FBQ0EsbUJBQUtOLEVBQUwsR0FBVSxLQUFLb0IsRUFBZjs7QUFFQSxtQkFBSyxJQUFJOUUsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLOEUsRUFBM0IsRUFBK0IsRUFBRTlFLEVBQWpDLEVBQXFDO0FBQ3BDLG9CQUFJbUQsRUFBRSxDQUFDNEIsRUFBSCxDQUFNN0osTUFBTixJQUFnQixDQUFwQixFQUNDO0FBRUQsb0JBQUksS0FBSzRKLEVBQUwsSUFBVyxDQUFmLEVBQ0MsS0FBS3JCLEVBQUwsR0FBVSxDQUFWLENBREQsS0FHQyxLQUFLQSxFQUFMLEdBQVV6RCxFQUFFLElBQUksS0FBSzhFLEVBQUwsR0FBVSxDQUFkLENBQVo7QUFFRCxvQkFBSXBKLEVBQUUsR0FBR3lILEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTUMsR0FBTixFQUFUO0FBQ0E3QixnQkFBQUEsRUFBRSxDQUFDbEQsRUFBSCxDQUFNZ0YsT0FBTixDQUFjdkosRUFBZDtBQUVBLG9CQUFJc0UsRUFBRSxJQUFJLENBQVYsRUFDQ3RFLEVBQUUsQ0FBQ3dKLEVBQUgsR0FERCxLQUdDeEosRUFBRSxDQUFDeUosRUFBSDtBQUVEekosZ0JBQUFBLEVBQUUsQ0FBQ3FJLEVBQUgsQ0FBTUssRUFBTjtBQUNBLGtCQUFFQyxFQUFGO0FBQ0E7O0FBRUQsbUJBQUtSLEVBQUwsR0FBVSxHQUFWO0FBQ0FVLGNBQUFBLEVBQUUsSUFBSSxHQUFOOztBQUVBLGtCQUFJLEtBQUtmLEVBQUwsSUFBVyxJQUFYLElBQW1CLEVBQUUsS0FBS0gsRUFBUCxJQUFhLEtBQUtHLEVBQXpDLEVBQTZDO0FBQzVDTCxnQkFBQUEsRUFBRSxDQUFDc0IsV0FBSDtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxpQkFBS1osRUFBTCxHQUFVVSxFQUFWO0FBQ0E7O0FBQ0RMLFVBQUFBLEVBQUUsSUFBSUUsRUFBTjtBQUNBakIsVUFBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVFBLEVBQVI7QUFFQSxjQUFJekksRUFBSixFQUNDZCxHQUFHLENBQUN5SyxDQUFKLENBQU1qQyxFQUFFLENBQUMxSCxFQUFULEVBQWFBLEVBQWI7QUFFRCxjQUFJZ0IsRUFBSixFQUNDOUIsR0FBRyxDQUFDMEssQ0FBSixDQUFNbEMsRUFBRSxDQUFDMUcsRUFBVCxFQUFhQSxFQUFiO0FBRUQsaUJBQU80SCxFQUFQO0FBQ0E7QUFsRmEsT0FBZixDQXpCOEIsQ0E4RzlCOztBQUVBLGVBQVNpQixFQUFULEdBQWM7QUFDYixhQUFLaEMsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLRyxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBRUFQLFFBQUFBLEVBQUUsQ0FBQ25JLEVBQUgsQ0FBTTJJLEVBQU4sQ0FBUyxJQUFULEVBTGEsQ0FLRzs7QUFFaEIsYUFBS0MsRUFBTCxHQUFVLFlBQVk7QUFDckIsZUFBSzJCLEVBQUwsR0FBVSxLQUFLakMsRUFBZjtBQUNBLFNBRkQ7O0FBSUEsYUFBS00sRUFBTDtBQUNBOztBQUVEMEIsTUFBQUEsRUFBRSxDQUFDbEssU0FBSCxHQUFlO0FBQ2QwSSxRQUFBQSxFQUFFLEVBQUUsY0FBWTtBQUNmLGVBQUtGLEVBQUw7QUFDQSxTQUhhO0FBS2RHLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWN2SSxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0I7QUFDekIwRyxVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU1pSixFQUFOLENBQVNELEVBQVQsRUFBYWIsRUFBYixFQUFpQixJQUFqQixFQUR5QixDQUNEOztBQUV4QixjQUFJcUMsRUFBRSxHQUFHckMsRUFBRSxDQUFDZSxFQUFaO0FBQ0EsY0FBSXVCLEVBQUUsR0FBR0QsRUFBRSxHQUFHeEIsRUFBZDtBQUNBLGNBQUkwQixxQkFBcUIsR0FBRzVLLEVBQUUsQ0FBQ29KLEVBQS9CO0FBQ0EsY0FBSXlCLG9CQUFvQixHQUFHRCxxQkFBcUIsR0FBRzFCLEVBQW5EO0FBQ0EsY0FBSTRCLEVBQUUsR0FBR25LLEVBQUUsR0FBR2QsR0FBRyxDQUFDa0wsQ0FBSixDQUFNbEwsR0FBRyxDQUFDbUwsQ0FBSixDQUFNckssRUFBTixFQUFVMEgsRUFBRSxDQUFDd0IsRUFBYixDQUFOLENBQUgsR0FBNkIsQ0FBeEM7QUFDQSxjQUFJTixFQUFFLEdBQUcsQ0FBVDs7QUFFQSxjQUFJdUIsRUFBRSxHQUFHLFFBQVQsRUFBbUI7QUFDbEIsZ0JBQUlHLEVBQUUsR0FBR0gsRUFBRSxHQUFHLEtBQUtJLEVBQW5CO0FBQ0EsZ0JBQUl6QixFQUFFLEdBQUcsS0FBS2dCLEVBQUwsR0FBVVEsRUFBbkI7QUFFQSxnQkFBSUUsRUFBRSxHQUFHRixFQUFFLEdBQUcsS0FBTCxHQUNSLE1BQU0sS0FBS1IsRUFESCxHQUNRLENBQUMsTUFBTSxLQUFLQSxFQUFaLElBQWtCUSxFQURuQztBQUdBLGdCQUFJRyxFQUFFLEdBQUcsRUFBVDs7QUFFQSxtQkFBTzNCLEVBQUUsR0FBRyxHQUFaLEVBQWlCO0FBQ2hCLGtCQUFJNEIsRUFBRSxHQUFHWCxFQUFFLEdBQUdTLEVBQUUsR0FBR2pDLEVBQW5CO0FBRUEsa0JBQUl2SSxFQUFKLEVBQ0NkLEdBQUcsQ0FBQytKLEVBQUosQ0FBT3dCLEVBQVAsRUFBVy9DLEVBQUUsQ0FBQ3dCLEVBQWQsRUFBa0JsSixFQUFsQixFQUFzQndLLEVBQXRCO0FBRUQ5QyxjQUFBQSxFQUFFLENBQUNlLEVBQUgsR0FBUWlDLEVBQVI7QUFDQXhMLGNBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTWpDLEVBQUUsQ0FBQzFILEVBQVQsRUFBYXlLLEVBQWI7QUFDQXBMLGNBQUFBLEVBQUUsQ0FBQ29KLEVBQUgsR0FBUXZKLEdBQUcsQ0FBQ3lMLENBQUosQ0FBTVYscUJBQU4sRUFBNkJDLG9CQUE3QixFQUFtRE0sRUFBbkQsQ0FBUixDQVJnQixDQVVoQjs7QUFDQSxtQkFBS3ZDLEVBQUwsR0FBVSxLQUFLb0IsRUFBZjs7QUFFQSxtQkFBSyxJQUFJOUUsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLOEUsRUFBM0IsRUFBK0IsRUFBRTlFLEVBQWpDLEVBQXFDO0FBQ3BDLG9CQUFJbUQsRUFBRSxDQUFDNEIsRUFBSCxDQUFNN0osTUFBTixJQUFnQixDQUFwQixFQUNDO0FBRUQsb0JBQUksS0FBSzRKLEVBQUwsSUFBVyxDQUFmLEVBQ0MsS0FBS3JCLEVBQUwsR0FBVSxDQUFWLENBREQsS0FHQyxLQUFLQSxFQUFMLEdBQVV6RCxFQUFFLElBQUksS0FBSzhFLEVBQUwsR0FBVSxDQUFkLENBQVo7QUFFRCxvQkFBSXBKLEVBQUUsR0FBR3lILEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTUMsR0FBTixFQUFUO0FBQ0E3QixnQkFBQUEsRUFBRSxDQUFDbEQsRUFBSCxDQUFNZ0YsT0FBTixDQUFjdkosRUFBZDtBQUVBLG9CQUFJc0UsRUFBRSxJQUFJLENBQVYsRUFDQ3RFLEVBQUUsQ0FBQ3dKLEVBQUgsR0FERCxLQUdDeEosRUFBRSxDQUFDeUosRUFBSDtBQUVEekosZ0JBQUFBLEVBQUUsQ0FBQ3FJLEVBQUgsQ0FBTUMsRUFBRSxJQUFJLE1BQU1pQyxFQUFWLENBQVI7QUFDQSxrQkFBRTVCLEVBQUY7QUFDQTs7QUFFRDRCLGNBQUFBLEVBQUUsSUFBSSxNQUFNRixFQUFaO0FBQ0F4QixjQUFBQSxFQUFFLElBQUksR0FBTjtBQUNBOztBQUVELGlCQUFLZ0IsRUFBTCxHQUFVaEIsRUFBVjtBQUNBOztBQUVEcEIsVUFBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVF1QixFQUFSO0FBRUEsY0FBSWhLLEVBQUosRUFDQ2QsR0FBRyxDQUFDeUssQ0FBSixDQUFNakMsRUFBRSxDQUFDMUgsRUFBVCxFQUFhQSxFQUFiO0FBRUQsY0FBSWdCLEVBQUosRUFDQzlCLEdBQUcsQ0FBQzBLLENBQUosQ0FBTWxDLEVBQUUsQ0FBQzFHLEVBQVQsRUFBYUEsRUFBYjtBQUVELGlCQUFPNEgsRUFBUDtBQUNBO0FBMUVhLE9BQWYsQ0E5SDhCLENBMk05Qjs7QUFFQSxlQUFTZ0MsRUFBVCxHQUFjO0FBQ2IsYUFBSzVLLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS3FDLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS3pCLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBSzJCLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS3NJLEVBQUwsR0FBVSxFQUFWO0FBQ0E7O0FBRURELE1BQUFBLEVBQUUsQ0FBQ2pMLFNBQUgsR0FBZTtBQUNkbUwsUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZixlQUFLdEosRUFBTCxHQUFVLEtBQVY7O0FBRUEsZUFBSyxJQUFJdUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDtBQUNBQyxZQUFBQSxFQUFFLENBQUMxTCxFQUFILENBQU0rSSxFQUFOLENBQVMsS0FBS3JJLEVBQWQsRUFBa0IsSUFBbEI7QUFFQSxnQkFBSWdMLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNQyxFQUFWLEVBQ0NGLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTTBKLFdBQU47QUFDRDtBQUNELFNBWGE7QUFhZFMsUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZi9CLFVBQUFBLEVBQUUsQ0FBQ25JLEVBQUgsQ0FBTTRMLEVBQU4sQ0FBU3pELEVBQVQsRUFBYSxJQUFiLEVBRGUsQ0FDSzs7QUFDcEIsZUFBS29ELEVBQUw7QUFDQSxTQWhCYTtBQWtCZHBCLFFBQUFBLEVBQUUsRUFBRSxjQUFZO0FBQ2ZoQyxVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU02TCxFQUFOLENBQVMxRCxFQUFULEVBQWEsSUFBYixFQURlLENBQ0s7O0FBQ3BCLGVBQUtvRCxFQUFMO0FBQ0EsU0FyQmE7QUF1QmR4QyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjO0FBQ2pCYixVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU04TCxFQUFOLENBQVM5QyxFQUFULEVBQWFiLEVBQWIsRUFBaUIsSUFBakIsRUFEaUIsQ0FDTzs7QUFFeEIsZUFBSzRELEVBQUwsQ0FBUS9DLEVBQVI7QUFDQSxTQTNCYTtBQTZCZHlDLFFBQUFBLEVBQUUsRUFBRSxZQUFVTyxFQUFWLEVBQWM7QUFDakIsaUJBQU8sS0FBS1YsRUFBTCxDQUFRVSxFQUFSLEVBQVlqTSxFQUFuQjtBQUNBLFNBL0JhO0FBaUNkZ00sUUFBQUEsRUFBRSxFQUFFLFlBQVUvQyxFQUFWLEVBQWM7QUFDakIsZUFBSyxJQUFJd0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQ3NMLENBQUMsRUFBckMsRUFBeUM7QUFDeEMsaUJBQUtGLEVBQUwsQ0FBUUUsQ0FBUixFQUFXekwsRUFBWCxDQUFjZ0osRUFBZCxDQUFpQkMsRUFBakIsRUFBcUIsS0FBS3ZJLEVBQTFCLEVBQThCLElBQTlCO0FBQ0E7QUFDRCxTQXJDYTtBQXVDZHdMLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDckIsZUFBS2IsRUFBTCxDQUFRYyxJQUFSLENBQWE7QUFDWnJNLFlBQUFBLEVBQUUsRUFBRSxJQUFJa0ksRUFBSixDQUFPbkksRUFBUCxFQUFXb00sRUFBWCxFQUFlaEUsRUFBZixDQURRO0FBRVp3RCxZQUFBQSxFQUFFLEVBQUVTO0FBRlEsV0FBYjtBQUlBLFNBNUNhO0FBOENkcEssUUFBQUEsRUFBRSxFQUFFLFlBQVV2QixFQUFWLEVBQWM2TCxFQUFkLEVBQWtCdkssRUFBbEIsRUFBc0I7QUFDekIsZUFBSyxJQUFJMEosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDtBQUVBLGdCQUFJYSxFQUFFLElBQUlaLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNVyxFQUFoQixFQUNDWixFQUFFLENBQUMxTCxFQUFILENBQU1rRSxFQUFOLENBQVN6RCxFQUFULEVBQWFzQixFQUFiO0FBQ0Q7QUFDRCxTQXJEYTtBQXVEZCtELFFBQUFBLEVBQUUsRUFBRSxZQUFVd0csRUFBVixFQUFjNUcsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxZQUExQixFQUF3QztBQUMzQyxlQUFLLElBQUk0RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtGLEVBQUwsQ0FBUXBMLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxnQkFBSUMsRUFBRSxHQUFHLEtBQUtILEVBQUwsQ0FBUUUsQ0FBUixDQUFUO0FBRUEsZ0JBQUlhLEVBQUUsSUFBSVosRUFBRSxDQUFDQyxFQUFILENBQU1XLEVBQWhCLEVBQ0NaLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTThILEVBQU4sQ0FBU3BDLEVBQVQsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJDLFlBQXJCO0FBQ0Q7QUFDRCxTQTlEYTtBQWdFZDBHLFFBQUFBLEVBQUUsRUFBRSxZQUFVOUwsRUFBVixFQUFjO0FBQ2pCLGVBQUt5QixFQUFMLEdBQVUsSUFBVjs7QUFDQSxlQUFLLElBQUl1SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtGLEVBQUwsQ0FBUXBMLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxnQkFBSUMsRUFBRSxHQUFHLEtBQUtILEVBQUwsQ0FBUUUsQ0FBUixDQUFUOztBQUVBLGdCQUFJQyxFQUFFLENBQUNDLEVBQUgsQ0FBTUMsRUFBVixFQUFjO0FBQ2JGLGNBQUFBLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTXdNLFFBQU47QUFDQWQsY0FBQUEsRUFBRSxDQUFDMUwsRUFBSCxDQUFNZ0osRUFBTixDQUFTLENBQVQ7QUFDQSxhQUhELE1BS0MwQyxFQUFFLENBQUMxTCxFQUFILENBQU0wSixXQUFOO0FBQ0Q7QUFDRCxTQTVFYTtBQThFZCtDLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWM7QUFDakIsZUFBSyxJQUFJakIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsaUJBQUtGLEVBQUwsQ0FBUUUsQ0FBUixFQUFXekwsRUFBWCxDQUFjMk0sRUFBZCxDQUFpQkQsRUFBakI7QUFDQTtBQUNEO0FBbEZhLE9BQWYsQ0FyTjhCLENBMFM5Qjs7QUFFQSxlQUFTRSxFQUFULEdBQWMsQ0FDYjs7QUFFREEsTUFBQUEsRUFBRSxDQUFDdk0sU0FBSCxDQUFhd00sRUFBYixHQUFrQixVQUFVbE0sRUFBVixFQUFjO0FBQy9CLGVBQU95SCxFQUFFLENBQUNuSSxFQUFILENBQU02TSxFQUFOLENBQVMxRSxFQUFULEVBQWF6SCxFQUFiLEVBQWlCLElBQWpCLENBQVAsQ0FEK0IsQ0FDQTtBQUMvQixPQUZELENBL1M4QixDQW1UOUI7OztBQUVBLFdBQUtELEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS2tKLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS2xJLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS29JLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxXQUFLNUUsRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLOEUsRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLK0MsRUFBTCxHQUFVLElBQUlILEVBQUosRUFBVjtBQUNBLFdBQUtJLFNBQUwsR0FBaUIsSUFBSTdFLEVBQUosQ0FBTyxLQUFLcEksRUFBWixFQUFnQixJQUFoQixDQUFqQjtBQUNBLFdBQUtrTixFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVSxFQUFWOztBQUVBLFdBQUtDLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGFBQUtDLEVBQUwsR0FBVSxJQUFJL0UsRUFBSixFQUFWO0FBQ0EsT0FGRDs7QUFJQSxXQUFLZ0YsRUFBTCxHQUFVLFlBQVk7QUFDckIsYUFBS0QsRUFBTCxHQUFVLElBQUk3QyxFQUFKLEVBQVY7QUFDQSxPQUZEOztBQUlBLFdBQUt0SyxFQUFMLENBQVFxTixFQUFSLENBQVcsSUFBWCxFQXhVOEIsQ0F3VVo7O0FBRWxCLFdBQUssSUFBSXJJLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS3NJLEVBQTNCLEVBQStCLEVBQUV0SSxFQUFqQyxFQUFxQztBQUNwQyxZQUFJdEUsRUFBRSxHQUFHLElBQUkySyxFQUFKLEVBQVQ7O0FBRUEsYUFBSyxJQUFJa0MsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLUCxFQUFMLENBQVE5TSxNQUE5QixFQUFzQyxFQUFFcU4sRUFBeEMsRUFBNEM7QUFDM0MsY0FBSUMsRUFBRSxHQUFHLEtBQUtSLEVBQUwsQ0FBUU8sRUFBUixDQUFUO0FBQ0E3TSxVQUFBQSxFQUFFLENBQUN1TCxFQUFILENBQU11QixFQUFFLENBQUM1TixFQUFULEVBQWE0TixFQUFFLENBQUM5QixFQUFoQjtBQUNBOztBQUVELGFBQUszQixFQUFMLENBQVFxQyxJQUFSLENBQWExTCxFQUFiO0FBQ0E7O0FBRUQsV0FBS2tJLEVBQUwsR0FBVSxVQUFVbkksRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUUzQjlCLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWCxFQUFlQSxFQUFFLEdBQUdBLEVBQUgsR0FBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF6QjtBQUNBZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBS1QsRUFBWCxFQUFlLEtBQUtsSixFQUFwQjtBQUNBZCxRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQXpCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBS1IsWUFBWCxFQUF5QixLQUFLcEksRUFBOUI7QUFFQSxhQUFLeUgsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLdUUsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS0MsaUJBQUwsR0FBeUIsS0FBekI7QUFDQWpPLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTSxLQUFLWixFQUFYLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUNBLE9BYkQ7QUFjQSxLQW5XRDs7QUFxV0FoRixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWEwSSxFQUFiLEdBQWtCLFVBQVVySSxFQUFWLEVBQWNnQixFQUFkLEVBQWtCO0FBQ25DLFdBQUttSCxFQUFMLENBQVFuSSxFQUFSLEVBQVlnQixFQUFaO0FBRUEsV0FBS3NJLEVBQUwsQ0FBUXFDLElBQVIsQ0FBYTBCLEtBQWIsQ0FBbUIsS0FBSy9ELEVBQXhCLEVBQTRCLEtBQUs5RSxFQUFqQztBQUNBLFdBQUtBLEVBQUwsQ0FBUS9FLE1BQVIsR0FBaUIsQ0FBakI7QUFFQSxXQUFLaU4sRUFBTCxDQUFRckUsRUFBUjtBQUNBLEtBUEQ7O0FBU0FiLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYTJJLEVBQWIsR0FBa0IsVUFBVUMsRUFBVixFQUFjdkksRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCO0FBRXZDLFVBQUksS0FBS2tNLE9BQVQsRUFDQTtBQUNDLGFBQUtJLEVBQUwsQ0FBUXROLEVBQVIsRUFBWWdCLEVBQVo7QUFDQTtBQUNBOztBQUVELFdBQUtnTSxFQUFMLEdBQVUsS0FBS3ZFLEVBQWY7O0FBRUEsVUFBSXpJLEVBQUosRUFBUTtBQUNQZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBS1QsRUFBWCxFQUFlLEtBQUtsSixFQUFwQjs7QUFDQSxZQUFJdUksRUFBRSxHQUFHLE1BQVQsRUFBaUI7QUFDaEIsY0FBSWdGLEtBQUssR0FBRyxFQUFaO0FBQ0FyTyxVQUFBQSxHQUFHLENBQUNzTyxDQUFKLENBQU1ELEtBQU4sRUFBYXZOLEVBQWIsRUFBaUIsS0FBS2tKLEVBQXRCO0FBQ0FoSyxVQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzZDLEVBQVgsRUFBZWUsS0FBZjtBQUNBck8sVUFBQUEsR0FBRyxDQUFDdU8sQ0FBSixDQUFNLEtBQUtqQixFQUFYLEVBQWUsS0FBS0EsRUFBcEIsRUFBd0JqRSxFQUF4QjtBQUNBLFNBTEQsTUFNSztBQUNKckosVUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNLEtBQUtaLEVBQVgsRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCO0FBQ0E7QUFDRCxPQVhELE1BWUs7QUFDSnROLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTSxLQUFLWixFQUFYLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUNBOztBQUVELFVBQUl4TCxFQUFKLEVBQ0E7QUFDQzlCLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLUixZQUFYLEVBQXlCLEtBQUtwSSxFQUE5QjtBQUNBOztBQUVELFVBQUk0SCxFQUFKOztBQUVBLFVBQUksS0FBS3FFLEVBQUwsSUFBVyxDQUFDLEtBQUtFLGlCQUFyQixFQUF3QztBQUN2Q3ZFLFFBQUFBLEVBQUUsR0FBRyxLQUFLOEQsRUFBTCxDQUFRcEUsRUFBUixDQUFXQyxFQUFYLEVBQWV2SSxFQUFmLEVBQW1CZ0IsRUFBbkIsQ0FBTDtBQUNBLE9BRkQsTUFHSztBQUNKLFlBQUloQixFQUFKLEVBQ0NkLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWCxFQUFlQSxFQUFmO0FBRUQsWUFBSWdCLEVBQUosRUFDQzlCLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWCxFQUFlQSxFQUFmO0FBRUQ0SCxRQUFBQSxFQUFFLEdBQUcsQ0FBTDtBQUNBLGFBQUtILEVBQUwsSUFBV0YsRUFBWDtBQUNBOztBQUVELFdBQUssSUFBSWhFLEVBQUUsR0FBR3FFLEVBQWQsRUFBa0JyRSxFQUFFLEdBQUcsS0FBS0MsRUFBTCxDQUFRL0UsTUFBL0IsR0FBd0M7QUFDdkMsWUFBSVEsRUFBRSxHQUFHLEtBQUt1RSxFQUFMLENBQVFELEVBQVIsQ0FBVDs7QUFFQSxZQUFJLENBQUN0RSxFQUFFLENBQUN1QixFQUFSLEVBQVk7QUFDWHZCLFVBQUFBLEVBQUUsQ0FBQ3FJLEVBQUgsQ0FBTUMsRUFBTjs7QUFFQSxjQUFJLEtBQUs4RCxFQUFMLENBQVFGLEVBQVIsQ0FBVyxLQUFLM0gsRUFBTCxDQUFRRCxFQUFSLENBQVgsQ0FBSixFQUE2QjtBQUM1QnRFLFlBQUFBLEVBQUUsQ0FBQzRMLEVBQUg7QUFFQSxnQkFBSSxLQUFLNkIsRUFBTCxDQUFRbkosRUFBUixDQUFKLEVBQ0M7QUFDRDtBQUNELFNBVEQsTUFVSztBQUNKdEUsVUFBQUEsRUFBRSxDQUFDcUwsRUFBSCxDQUFNL0MsRUFBTjtBQUVBLGNBQUksS0FBS21GLEVBQUwsQ0FBUW5KLEVBQVIsQ0FBSixFQUNDO0FBQ0Q7O0FBRUQsVUFBRUEsRUFBRjtBQUNBO0FBQ0QsS0FyRUQ7O0FBdUVBaUQsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhK04sRUFBYixHQUFrQixVQUFVbkMsRUFBVixFQUFjO0FBQy9CLFVBQUl0TCxFQUFFLEdBQUcsS0FBS3VFLEVBQUwsQ0FBUStHLEVBQVIsQ0FBVDtBQUVBLFVBQUlvQyxLQUFLLEdBQUcsSUFBWjs7QUFFQSxXQUFLLElBQUliLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUc3TSxFQUFFLENBQUM0SyxFQUFILENBQU1wTCxNQUE1QixFQUFvQyxFQUFFcU4sRUFBdEMsRUFBMEM7QUFDekMsWUFBSXhOLEVBQUUsR0FBR1csRUFBRSxDQUFDNEssRUFBSCxDQUFNaUMsRUFBTixFQUFVeE4sRUFBbkI7O0FBRUEsWUFBSUEsRUFBRSxDQUFDc08sU0FBSCxNQUFrQnRPLEVBQUUsQ0FBQ2tGLEVBQUgsQ0FBTS9FLE1BQU4sR0FBZSxDQUFyQyxFQUF3QztBQUN2Q2tPLFVBQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0E7QUFDQTtBQUNEOztBQUVELFVBQUlBLEtBQUosRUFBVztBQUNWLGFBQUtyRSxFQUFMLENBQVFxQyxJQUFSLENBQWEsS0FBS25ILEVBQUwsQ0FBUStHLEVBQVIsQ0FBYjtBQUNBLGFBQUsvRyxFQUFMLENBQVFxSixNQUFSLENBQWV0QyxFQUFmLEVBQW1CLENBQW5CO0FBQ0EsZUFBTyxJQUFQO0FBQ0E7O0FBRUQsYUFBTyxLQUFQO0FBQ0EsS0FyQkQ7O0FBdUJBL0QsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhNkQsRUFBYixHQUFrQixVQUFVekQsRUFBVixFQUFjc0IsRUFBZCxFQUFrQjtBQUNuQyxXQUFLaUwsU0FBTCxDQUFlOUksRUFBZixDQUFrQnpELEVBQWxCLEVBQXNCc0IsRUFBdEI7QUFDQSxLQUZEOztBQUlBbUcsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFheUgsRUFBYixHQUFrQixVQUFVcEMsRUFBVixFQUFjQyxFQUFkLEVBQWtCQyxFQUFsQixFQUFzQkMsWUFBdEIsRUFBb0M7QUFDckQsV0FBS21ILFNBQUwsQ0FBZWxGLEVBQWYsQ0FBa0JwQyxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCQyxZQUE5QjtBQUNBLEtBRkQ7O0FBSUFxQyxJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWEyTixFQUFiLEdBQWtCLFVBQVV0TixFQUFWLEVBQWNnQixFQUFkLEVBQWtCO0FBQ25DLFdBQUtnTSxFQUFMLEdBQVUsS0FBS3ZFLEVBQWY7O0FBRUEsVUFBSXpJLEVBQUosRUFBUTtBQUNQZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBS1QsRUFBWCxFQUFlLEtBQUtsSixFQUFwQjtBQUNBZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBZjtBQUNBOztBQUVELFVBQUlnQixFQUFKLEVBQVE7QUFDUDlCLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLUixZQUFYLEVBQXlCLEtBQUtwSSxFQUE5QjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYLEVBQWVBLEVBQWY7QUFDQTtBQUNELEtBWkQ7O0FBY0F3RyxJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWE2TCxFQUFiLEdBQWtCLFVBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUNuQyxXQUFLYSxFQUFMLENBQVFaLElBQVIsQ0FBYTtBQUFFeE0sUUFBQUEsRUFBRSxFQUFFc00sRUFBTjtBQUFVUixRQUFBQSxFQUFFLEVBQUVTO0FBQWQsT0FBYjtBQUNBLEtBRkQ7O0FBSUFsRSxJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSW1PLElBQUFBLEtBQWpCLEdBQXlCLFlBQVk7QUFDcEMsV0FBS1osT0FBTCxHQUFlLElBQWY7QUFDQSxLQUZEOztBQUlBMUYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUlvTyxJQUFBQSxPQUFqQixHQUEyQixZQUFZO0FBQ3RDLFdBQUtiLE9BQUwsR0FBZSxLQUFmO0FBQ0EsS0FGRDs7QUFJQTFGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJcU8sSUFBQUEsTUFBakIsR0FBMEIsWUFBWTtBQUNyQyxhQUFPLEtBQUtkLE9BQVo7QUFDQSxLQUZEOztBQUlBMUYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUlzTyxJQUFBQSxlQUFqQixHQUFtQyxZQUFZO0FBQzlDLFdBQUtkLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsS0FGRDs7QUFJQTNGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJdU8sSUFBQUEsaUJBQWpCLEdBQXFDLFlBQVk7QUFDaEQsV0FBS2YsaUJBQUwsR0FBeUIsS0FBekI7QUFDQSxLQUZEOztBQUlBM0YsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUl3TyxJQUFBQSxnQkFBakIsR0FBb0MsWUFBWTtBQUMvQyxhQUFPLEtBQUtoQixpQkFBWjtBQUNBLEtBRkQ7O0FBSUEzRixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWFtTSxRQUFiLEdBQXdCLFlBQVk7QUFDbkMsV0FBS21CLEVBQUwsR0FBVSxJQUFWO0FBQ0EsS0FGRDs7QUFJQXpGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYXFKLFdBQWIsR0FBMkIsWUFBWTtBQUN0QyxXQUFLaUUsRUFBTCxHQUFVLEtBQVY7QUFDQSxLQUZEOztBQUlBekYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhaU8sU0FBYixHQUF5QixZQUFZO0FBQ3BDLGFBQU8sS0FBS1gsRUFBWjtBQUNBLEtBRkQ7O0FBSUF6RixJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSXlPLElBQUFBLGVBQWpCLEdBQW1DLFlBQVk7QUFDOUMsYUFBTyxLQUFLNUosRUFBTCxDQUFRL0UsTUFBZjtBQUNBLEtBRkQ7O0FBSUEsUUFBSTRPLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQVk7QUFDcEIsVUFBSUMsRUFBRSxHQUFHLElBQVQ7O0FBRUEsV0FBS0MsS0FBTCxHQUFhLFVBQVVoUCxFQUFWLEVBQWNTLEVBQWQsRUFBa0JnQixFQUFsQixFQUFzQnlHLEVBQXRCLEVBQTBCK0csT0FBMUIsRUFBbUM7QUFDL0M7QUFBSztBQUFJOUssUUFBQUEsS0FBVCxHQUFpQm5FLEVBQWpCO0FBRUEsYUFBS1MsRUFBTCxHQUFVLEVBQVY7QUFDQSxhQUFLZ0IsRUFBTCxHQUFVLEVBQVYsQ0FKK0MsQ0FNL0M7O0FBRUEsYUFBS3lOLEVBQUwsR0FBVSxFQUFWOztBQUVBLGFBQUtDLEVBQUwsR0FBVSxVQUFVakQsRUFBVixFQUFjO0FBQ3ZCLGNBQUluTSxFQUFFLEdBQUcsSUFBSWtJLEVBQUosQ0FBTyxJQUFQLEVBQWFpRSxFQUFiLEVBQWlCaEUsRUFBakIsQ0FBVDtBQUNBbkksVUFBQUEsRUFBRSxDQUFDNkksRUFBSCxDQUFNLEtBQUtuSSxFQUFYLEVBQWUsS0FBS2dCLEVBQXBCO0FBQ0EsZUFBSyxJQUFJMk4sTUFBSixDQUFXbEQsRUFBRSxDQUFDbUQsSUFBZCxDQUFMLElBQTRCdFAsRUFBNUI7QUFDQSxlQUFLbVAsRUFBTCxDQUFROUMsSUFBUixDQUFhck0sRUFBYjtBQUNBLFNBTEQ7O0FBT0EsYUFBSzZJLEVBQUwsR0FBVSxVQUFVbkksRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUMzQixlQUFLNk4sRUFBTCxHQUFVLEdBQVY7QUFDQSxlQUFLcEcsRUFBTCxHQUFVLEdBQVY7QUFDQXZKLFVBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWCxFQUFlQSxFQUFFLEdBQUdBLEVBQUgsR0FBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF6QjtBQUNBZCxVQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQXpCO0FBQ0EsU0FMRDs7QUFPQSxhQUFLbUgsRUFBTCxDQUFRbkksRUFBUixFQUFZZ0IsRUFBWjtBQUNBO0FBQUs7QUFBSTBDLFFBQUFBLEtBQVQsQ0FBZW9MLEVBQWYsQ0FBa0IsSUFBbEIsRUF6QitDLENBeUJ0Qjs7QUFFekIsYUFBS0MsYUFBTCxHQUFxQixJQUFyQjs7QUFFQSxZQUFJUCxPQUFPLENBQUNMLGdCQUFaLEVBQThCO0FBQzdCO0FBQUs7QUFBSWEsVUFBQUEsNEJBQVQ7QUFDQTs7QUFFRCxZQUFJUixPQUFPLENBQUNSLE1BQVosRUFBb0I7QUFDbkI7QUFBSztBQUFJaUIsVUFBQUEsZ0JBQVQ7QUFDQSxTQUZELE1BRU87QUFDTixlQUFLQyxVQUFMO0FBQ0EsZUFBS0MsV0FBTCxDQUFpQixLQUFLQyxFQUF0QixFQUEwQnBQLEVBQTFCLEVBQThCZ0IsRUFBOUIsRUFBa0MsS0FBS3FPLGVBQXZDO0FBQ0EsZUFBS04sYUFBTCxHQUFxQixLQUFyQjtBQUNBO0FBQ0QsT0F4Q0Q7QUF5Q0EsS0E1Q0Q7O0FBOENBVixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSTJQLElBQUFBLE9BQWpCLEdBQTJCO0FBQVU7QUFBSTFLLElBQUFBLFFBQWQ7QUFBd0I7QUFBSTJLLElBQUFBLFFBQTVCO0FBQXNDO0FBQUlmLElBQUFBLE9BQTFDLEVBQW1EO0FBRTdFLFdBQUtyRyxFQUFMO0FBQVE7QUFBSXZELE1BQUFBLFFBQVE7QUFBRztBQUFJQSxNQUFBQSxRQUFQLEdBQWtCLEtBQUs1RSxFQUEzQztBQUErQztBQUFJdVAsTUFBQUEsUUFBUTtBQUFHO0FBQUlBLE1BQUFBLFFBQVAsR0FBa0IsS0FBS3ZPLEVBQWxGO0FBQ0EsV0FBSytOLGFBQUwsR0FBcUIsSUFBckI7O0FBRUEsV0FBSyxJQUFJaEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVcxQyxFQUFYLENBQWMsS0FBS3JJLEVBQW5CLEVBQXVCLEtBQUtnQixFQUE1QjtBQUNBOztBQUVELFdBQUsrTixhQUFMLEdBQXFCLElBQXJCOztBQUVBLFVBQUlQLE9BQU8sSUFBSUEsT0FBTyxDQUFDTCxnQkFBdkIsRUFBeUM7QUFDeEM7QUFBSztBQUFJYSxRQUFBQSw0QkFBVDtBQUNBOztBQUVELFVBQUlSLE9BQU8sSUFBSUEsT0FBTyxDQUFDUixNQUF2QixFQUErQjtBQUM5QjtBQUFLO0FBQUlpQixRQUFBQSxnQkFBVDtBQUNBLE9BRkQsTUFFTztBQUNOLGFBQUtDLFVBQUw7QUFDQSxhQUFLQyxXQUFMLENBQWlCLEtBQUtDLEVBQXRCLEVBQTBCLEtBQUtwUCxFQUEvQixFQUFtQyxLQUFLZ0IsRUFBeEMsRUFBNEMsS0FBS3FPLGVBQWpEO0FBQ0EsYUFBS04sYUFBTCxHQUFxQixLQUFyQjtBQUNBO0FBQ0QsS0F0QkQ7O0FBd0JBVixJQUFBQSxFQUFFLENBQUMxTyxTQUFILENBQWF1UCxVQUFiLEdBQTBCLFlBQVk7QUFDckMsV0FBSyxJQUFJbkUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVd6QyxFQUFYLENBQWMsQ0FBZCxFQUFpQixLQUFLdEksRUFBdEIsRUFBMEIsS0FBS2dCLEVBQS9CO0FBQ0E7QUFDRCxLQUpEOztBQU1BcU4sSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUk2UCxJQUFBQSxNQUFqQixHQUEwQjtBQUFVO0FBQUlDLElBQUFBLEVBQWQ7QUFBa0I7QUFBSTdLLElBQUFBLFFBQXRCO0FBQWdDO0FBQUkySyxJQUFBQSxRQUFwQyxFQUE4QztBQUN2RSxVQUFJLEtBQUtHLEVBQUwsR0FBVSxHQUFkLEVBQ0MsS0FBS1AsV0FBTDtBQUFpQjtBQUFJTSxNQUFBQSxFQUFyQjtBQUF5QjtBQUFJN0ssTUFBQUEsUUFBN0I7QUFBdUM7QUFBSTJLLE1BQUFBLFFBQTNDLEVBQXFELEtBQUtHLEVBQTFELEVBREQsS0FHQyxLQUFLQyxVQUFMO0FBQWdCO0FBQUlGLE1BQUFBLEVBQXBCO0FBQXdCO0FBQUk3SyxNQUFBQSxRQUE1QjtBQUFzQztBQUFJMkssTUFBQUEsUUFBMUM7QUFDRCxLQUxEOztBQU9BbEIsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSCxDQUFhd1AsV0FBYixHQUEyQjtBQUFVO0FBQUlNLElBQUFBLEVBQWQ7QUFBa0I7QUFBSTdLLElBQUFBLFFBQXRCO0FBQWdDO0FBQUkySyxJQUFBQSxRQUFwQztBQUE4QztBQUFJSyxJQUFBQSxTQUFsRCxFQUE2RDtBQUN2RixVQUFJQyxXQUFXLEdBQUcsR0FBbEI7QUFDQSxVQUFJckYsRUFBRSxHQUFHLEVBQVQ7QUFDQXRMLE1BQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTWEsRUFBTixFQUFVLEtBQUt4SyxFQUFmO0FBQ0EsVUFBSThQLGFBQWEsR0FBRyxFQUFwQjtBQUNBNVEsTUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNa0csYUFBTixFQUFxQixLQUFLOU8sRUFBMUI7QUFFQTtBQUFJO0FBQUk0RCxNQUFBQSxRQUFRLElBQUkxRixHQUFHLENBQUM2USxRQUFKO0FBQWE7QUFBSW5MLE1BQUFBLFFBQWpCLEVBQTJCLEtBQUs1RSxFQUFoQyxDQUFwQjtBQUNDO0FBQUk0RSxRQUFBQSxRQUFRLEdBQUcsSUFBWDtBQUVMO0FBQUk7QUFBSTJLLE1BQUFBLFFBQVEsSUFBSXJRLEdBQUcsQ0FBQzhRLE9BQUo7QUFBWTtBQUFJVCxNQUFBQSxRQUFoQixFQUEwQixLQUFLdk8sRUFBL0IsQ0FBcEI7QUFDQztBQUFJdU8sUUFBQUEsUUFBUSxHQUFHLElBQVg7O0FBRUw7QUFBUTtBQUFJRSxNQUFBQSxFQUFFLEdBQUdJLFdBQVYsR0FBeUIsS0FBS2hCLEVBQTlCO0FBQW9DO0FBQUllLE1BQUFBLFNBQS9DLEVBQTBEO0FBQ3pELFlBQUk3RixFQUFFLEdBQUcsS0FBS3RCLEVBQWQ7QUFFQTtBQUFJO0FBQUk3RCxRQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUMrSixFQUFKLENBQU91QixFQUFQLEVBQVcsS0FBS3hLLEVBQWhCO0FBQW9CO0FBQUk0RSxRQUFBQSxRQUF4QixFQUFrQ2lMLFdBQVc7QUFBRztBQUFJSixRQUFBQSxFQUFwRDtBQUVEO0FBQUk7QUFBSUYsUUFBQUEsUUFBUixFQUNDclEsR0FBRyxDQUFDaUssTUFBSixDQUFXMkcsYUFBWCxFQUEwQixLQUFLOU8sRUFBL0I7QUFBbUM7QUFBSXVPLFFBQUFBLFFBQXZDLEVBQWlETSxXQUFXO0FBQUc7QUFBSUosUUFBQUEsRUFBbkU7O0FBRUQsYUFBSyxJQUFJMUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGVBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVd6QyxFQUFYO0FBQWM7QUFBSXNILFVBQUFBLFNBQWxCLEVBQTZCcEYsRUFBN0IsRUFBaUNzRixhQUFqQztBQUVBLGVBQUtySCxFQUFMLEdBQVVzQixFQUFWO0FBQ0E7O0FBRUQ4RixRQUFBQSxXQUFXO0FBQUk7QUFBSUQsUUFBQUEsU0FBUyxHQUFHLEtBQUtmLEVBQXBDO0FBQ0EsYUFBS0EsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLcEcsRUFBTCxHQUFVc0IsRUFBRTtBQUFHO0FBQUk2RixRQUFBQSxTQUFuQjtBQUNBOztBQUVEO0FBQUk7QUFBSWhMLE1BQUFBLFFBQVIsRUFDQzFGLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWDtBQUFlO0FBQUk0RSxNQUFBQSxRQUFuQjtBQUVEO0FBQUk7QUFBSTJLLE1BQUFBLFFBQVIsRUFDQ3JRLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWDtBQUFlO0FBQUl1TyxNQUFBQSxRQUFuQjtBQUVELFdBQUtWLEVBQUw7QUFBVztBQUFJWSxNQUFBQSxFQUFFLEdBQUdJLFdBQXBCO0FBQ0EsS0F4Q0Q7O0FBMENBeEIsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSCxDQUFhZ1EsVUFBYixHQUEwQjtBQUFVO0FBQUlGLElBQUFBLEVBQWQ7QUFBa0I7QUFBSTdLLElBQUFBLFFBQXRCO0FBQWdDO0FBQUkySyxJQUFBQSxRQUFwQyxFQUE4QztBQUN2RSxVQUFJeEYsRUFBRSxHQUFHLEtBQUt0QixFQUFkOztBQUVBLFdBQUssSUFBSXNDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXekMsRUFBWDtBQUFjO0FBQUltSCxRQUFBQSxFQUFsQjtBQUFzQjtBQUFJN0ssUUFBQUEsUUFBMUI7QUFBb0M7QUFBSTJLLFFBQUFBLFFBQXhDO0FBQ0EsYUFBSzlHLEVBQUwsR0FBVXNCLEVBQVY7QUFDQTs7QUFFRCxXQUFLdEIsRUFBTCxHQUFVc0IsRUFBRTtBQUFHO0FBQUkwRixNQUFBQSxFQUFuQjtBQUVBO0FBQUk7QUFBSTdLLE1BQUFBLFFBQVIsRUFDQzFGLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWDtBQUFlO0FBQUk0RSxNQUFBQSxRQUFuQjtBQUVEO0FBQUk7QUFBSTJLLE1BQUFBLFFBQVIsRUFDQ3JRLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWDtBQUFlO0FBQUl1TyxNQUFBQSxRQUFuQjtBQUNELEtBZkQ7O0FBaUJBbEIsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUlzUSxJQUFBQSxhQUFqQixHQUFpQztBQUFVO0FBQUlyTCxJQUFBQSxRQUFkO0FBQXdCO0FBQUkySyxJQUFBQSxRQUE1QixFQUFzQztBQUV0RTtBQUFJO0FBQUkzSyxNQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVg7QUFBZTtBQUFJNEUsTUFBQUEsUUFBbkI7QUFFRDtBQUFJO0FBQUkySyxNQUFBQSxRQUFSLEVBQ0NyUSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVg7QUFBZTtBQUFJdU8sTUFBQUEsUUFBbkI7O0FBRUQsV0FBSyxJQUFJeEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVd1QyxFQUFYLENBQWMsS0FBS3ROLEVBQW5CLEVBQXVCLEtBQUtnQixFQUE1QjtBQUNBO0FBQ0QsS0FYRDs7QUFhQXFOLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJdVEsSUFBQUEsd0JBQWpCLEdBQTRDO0FBQVU7QUFBSXRCLElBQUFBLElBQWQ7QUFBb0I7QUFBSXVCLElBQUFBLEtBQXhCLEVBQStCO0FBQzFFLFVBQUlDLFFBQVEsR0FBRyxJQUFJekIsTUFBSjtBQUFXO0FBQUlDLE1BQUFBLElBQWYsQ0FBZjs7QUFFQTtBQUFJO0FBQUl1QixNQUFBQSxLQUFLLFlBQVlFLEtBQXpCLEVBQWdDO0FBQy9CO0FBQUk7QUFBSUYsUUFBQUEsS0FBSyxDQUFDMVEsTUFBTixJQUFnQixDQUF4QixFQUEyQjtBQUMxQixlQUFLLElBQUlzTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEM3TCxZQUFBQSxHQUFHLENBQUNvUixDQUFKLENBQU0sS0FBSzdCLEVBQUwsQ0FBUTFELENBQVIsRUFBV3FGLFFBQVgsQ0FBTjtBQUE0QjtBQUFJRCxZQUFBQSxLQUFoQztBQUNBO0FBQ0QsU0FKRCxNQUtLO0FBQ0osZUFBSyxJQUFJcEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDN0wsWUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUs4RSxFQUFMLENBQVExRCxDQUFSLEVBQVdxRixRQUFYLENBQU47QUFBNEI7QUFBSUQsWUFBQUEsS0FBaEM7QUFDQTtBQUNEO0FBQ0QsT0FYRCxNQVlLO0FBQ0osYUFBSyxJQUFJcEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGVBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVdxRixRQUFYO0FBQXVCO0FBQUlELFVBQUFBLEtBQTNCO0FBQ0E7QUFDRDtBQUNELEtBcEJEOztBQXNCQTlCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJc1AsSUFBQUEsZ0JBQWpCLEdBQW9DLFlBQVc7QUFDOUMsV0FBSyxJQUFJbEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSO0FBQVc7QUFBSStDLFFBQUFBLEtBQWY7QUFDQTtBQUNELEtBSkQ7O0FBTUFPLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJNFEsSUFBQUEsa0JBQWpCLEdBQXNDLFlBQVk7QUFDakQsV0FBSyxJQUFJeEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSO0FBQVc7QUFBSWdELFFBQUFBLE9BQWY7QUFDQTs7QUFDRCxXQUFLbUIsVUFBTDs7QUFFQSxVQUFJLEtBQUtILGFBQVQsRUFBd0I7QUFDdkIsYUFBS0ksV0FBTCxDQUFpQixLQUFLQyxFQUF0QixFQUEwQixLQUFLcFAsRUFBL0IsRUFBbUMsS0FBS2dCLEVBQXhDLEVBQTRDLEtBQUtxTyxlQUFqRDtBQUNBLGFBQUtOLGFBQUwsR0FBcUIsS0FBckI7QUFDQTtBQUNELEtBVkQ7O0FBWUFWLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJNlEsSUFBQUEsb0JBQWpCLEdBQXdDLFlBQVk7QUFDbkQsV0FBSyxJQUFJekYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLFlBQUksQ0FBQyxLQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXaUQsTUFBWCxFQUFMLEVBQ0MsT0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0EsS0FORDs7QUFRQUssSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUlxUCxJQUFBQSw0QkFBakIsR0FBZ0QsWUFBWTtBQUMzRCxXQUFLLElBQUlqRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVI7QUFBVztBQUFJa0QsUUFBQUEsZUFBZjtBQUNBO0FBQ0QsS0FKRDs7QUFNQUksSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUk4USxJQUFBQSw4QkFBakIsR0FBa0QsWUFBWTtBQUM3RCxXQUFLLElBQUkxRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVI7QUFBVztBQUFJbUQsUUFBQUEsaUJBQWY7QUFDQTtBQUNELEtBSkQ7O0FBTUFHLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJK1EsSUFBQUEsZ0NBQWpCLEdBQW9ELFlBQVk7QUFDL0QsV0FBSyxJQUFJM0YsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLFlBQUksQ0FBQyxLQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXb0QsZ0JBQVgsRUFBTCxFQUNDLE9BQU8sS0FBUDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNBLEtBTkQ7O0FBUUFFLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJeU8sSUFBQUEsZUFBakIsR0FBbUMsWUFBVztBQUM3QyxVQUFJdUMsWUFBWSxHQUFHLENBQW5COztBQUVBLFdBQUssSUFBSTVGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QzRGLFFBQUFBLFlBQVksSUFBSSxLQUFLbEMsRUFBTCxDQUFRMUQsQ0FBUixFQUFXcUQsZUFBWCxFQUFoQjtBQUNBOztBQUVELGFBQU91QyxZQUFQO0FBQ0EsS0FSRDs7QUFXQSxRQUFJQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFZO0FBQ3BCLFdBQUtyQyxLQUFMLEdBQWEsVUFBVWhQLEVBQVYsRUFBY1MsRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCbUUsWUFBdEIsRUFBb0NxSixPQUFwQyxFQUE2QztBQUN6RG9DLFFBQUFBLEVBQUUsQ0FBQ2pSLFNBQUgsQ0FBYTRPLEtBQWIsQ0FBbUJzQyxJQUFuQixDQUF3QixJQUF4QixFQUE4QnRSLEVBQTlCLEVBQWtDUyxFQUFsQyxFQUFzQ2dCLEVBQXRDLEVBQTBDMEQsRUFBMUMsRUFBOEM4SixPQUE5Qzs7QUFFQSxhQUFLL0gsYUFBTCxHQUFxQixFQUFyQjtBQUVBLFlBQUlxSyxPQUFPLEdBQUcsRUFBZDtBQUVBO0FBQ0MsY0FBSUMsT0FBSjs7QUFDQSxlQUFLLElBQUl4TSxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHO0FBQUs7QUFBSWIsVUFBQUEsS0FBVCxDQUFlc04sRUFBckMsRUFBeUMsRUFBRXpNLEVBQTNDLEVBQStDO0FBQzlDd00sWUFBQUEsT0FBTyxHQUFHeE0sRUFBRSxHQUFHLENBQWY7QUFDQXVNLFlBQUFBLE9BQU8sQ0FBQ25GLElBQVIsQ0FBYW9GLE9BQU8sR0FBRyxDQUF2QixFQUEwQkEsT0FBTyxHQUFHLENBQXBDLEVBQXVDQSxPQUFPLEdBQUcsQ0FBakQsRUFBb0RBLE9BQU8sR0FBRyxDQUE5RCxFQUFpRUEsT0FBTyxHQUFHLENBQTNFLEVBQThFQSxPQUFPLEdBQUcsQ0FBeEY7QUFDQTtBQUNEO0FBRUQsYUFBSzVMLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsYUFBS0EsWUFBTCxDQUFrQjhMLFVBQWxCLENBQTZCO0FBQUs7QUFBSXZOLFFBQUFBLEtBQVQsQ0FBZXNOLEVBQWYsR0FBb0IsQ0FBakQsRUFBb0QsQ0FBQyxDQUFELENBQXBELEVBQXlERixPQUF6RCxFQUFrRTtBQUFLO0FBQUlwTixRQUFBQSxLQUFULENBQWVzTixFQUFqRjtBQUNBLGFBQUs3TCxZQUFMLENBQWtCK0wsWUFBbEIsR0FBaUMsQ0FBakM7QUFDQSxPQWxCRDtBQW1CQSxLQXBCRDs7QUFzQkFOLElBQUFBLEVBQUUsQ0FBQ2pSLFNBQUgsR0FBZSxJQUFJME8sRUFBSixFQUFmOztBQUVBdUMsSUFBQUEsRUFBRSxDQUFDalIsU0FBSDtBQUFhO0FBQUl3UixJQUFBQSxtQkFBakIsR0FBdUM7QUFBVTtBQUFJQyxJQUFBQSxXQUFkO0FBQTJCO0FBQUlDLElBQUFBLFFBQS9CO0FBQXlDO0FBQUlDLElBQUFBLFNBQTdDLEVBQXdEO0FBQzlGLFdBQUtuTSxZQUFMLENBQWtCb00sT0FBbEI7QUFDQSxXQUFLcE0sWUFBTCxDQUFrQjJCLGdCQUFsQixHQUFxQyxJQUFyQztBQUVBLFdBQUsySCxFQUFMLENBQVFwSCxPQUFSLENBQWdCLFVBQVUvSCxFQUFWLEVBQWM7QUFDN0JBLFFBQUFBLEVBQUUsQ0FBQzhILEVBQUg7QUFBTTtBQUFJZ0ssUUFBQUEsV0FBVjtBQUF1QjtBQUFJQyxRQUFBQSxRQUEzQjtBQUFxQztBQUFJQyxRQUFBQSxTQUF6QyxFQUFvRCxLQUFLbk0sWUFBekQ7QUFDQSxPQUZELEVBRUcsSUFGSDtBQUlBLFVBQUksS0FBS0EsWUFBTCxDQUFrQjJCLGdCQUF0QixFQUNDLEtBQUszQixZQUFMLENBQWtCK0IsY0FBbEIsQ0FBaUMsS0FBSy9CLFlBQUwsQ0FBa0IyQixnQkFBbkQ7QUFDRCxLQVZEOztBQVlBLFFBQUkwSyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFZO0FBQ3BCLFdBQUtqRCxLQUFMLEdBQWEsVUFBVWhQLEVBQVYsRUFBY1MsRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCd04sT0FBdEIsRUFBK0I7QUFDM0NnRCxRQUFBQSxFQUFFLENBQUM3UixTQUFILENBQWE0TyxLQUFiLENBQW1Cc0MsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJ0UixFQUE5QixFQUFrQ1MsRUFBbEMsRUFBc0NnQixFQUF0QyxFQUEwQzVCLEVBQTFDLEVBQThDb1AsT0FBOUM7O0FBRUEsYUFBSy9LLFNBQUwsR0FBaUIsRUFBakI7QUFDQTtBQUFLO0FBQUlDLFFBQUFBLEtBQVQsQ0FBZUQsU0FBZixDQUF5QjRELE9BQXpCLENBQWlDLFVBQVU4SSxLQUFWLEVBQWlCO0FBQ2pELGVBQUsxTSxTQUFMLENBQWVrSSxJQUFmLENBQW9CLENBQUMsYUFBRCxFQUFnQixTQUFoQixFQUEyQixVQUEzQixFQUF1Q3dFLEtBQXZDLENBQXBCO0FBQ0EsU0FGRCxFQUVHLElBRkg7QUFJQTtBQUFLO0FBQUlyTSxRQUFBQSxZQUFULEdBQXdCLEVBQXhCO0FBQ0EsT0FURDtBQVVBLEtBWEQ7O0FBYUEwTixJQUFBQSxFQUFFLENBQUM3UixTQUFILEdBQWUsSUFBSTBPLEVBQUosRUFBZjs7QUFFQW1ELElBQUFBLEVBQUUsQ0FBQzdSLFNBQUg7QUFBYTtBQUFJOFIsSUFBQUEsSUFBakIsR0FBd0I7QUFBVTtBQUFJQyxJQUFBQSxPQUFkO0FBQXVCO0FBQUlDLElBQUFBLE1BQTNCLEVBQW1DO0FBQzFELFdBQUssSUFBSTVHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXdkgsRUFBWDtBQUFjO0FBQUlrTyxRQUFBQSxPQUFsQjtBQUEyQjtBQUFJQyxRQUFBQSxNQUEvQjtBQUNBO0FBQ0QsS0FKRDs7QUFNQSxTQUFLQyxpQkFBTCxHQUF5QjtBQUFVO0FBQUloTixJQUFBQSxRQUFkO0FBQXdCO0FBQUkySyxJQUFBQSxRQUE1QjtBQUFzQztBQUFJcEssSUFBQUEsWUFBMUM7QUFBd0Q7QUFBSXFKLElBQUFBLE9BQTVELEVBQXFFO0FBQzdGLFVBQUluUCxFQUFFLEdBQUcsSUFBSXVSLEVBQUosRUFBVDs7QUFDQXZSLE1BQUFBLEVBQUUsQ0FBQ2tQLEtBQUgsQ0FBUyxJQUFUO0FBQWU7QUFBSTNKLE1BQUFBLFFBQW5CO0FBQTZCO0FBQUkySyxNQUFBQSxRQUFqQztBQUEyQztBQUFJcEssTUFBQUEsWUFBL0M7QUFBNkQ7QUFBSXFKLE1BQUFBLE9BQU8sSUFBSSxFQUE1RTs7QUFDQSxhQUFPblAsRUFBUDtBQUNBLEtBSkQ7O0FBTUEsU0FBS3dTLHNCQUFMLEdBQThCO0FBQVU7QUFBSWpOLElBQUFBLFFBQWQ7QUFBd0I7QUFBSTJLLElBQUFBLFFBQTVCO0FBQXNDO0FBQUlmLElBQUFBLE9BQTFDLEVBQW1EO0FBQ2hGLFVBQUluUCxFQUFFLEdBQUcsSUFBSW1TLEVBQUosRUFBVDs7QUFDQW5TLE1BQUFBLEVBQUUsQ0FBQ2tQLEtBQUgsQ0FBUyxJQUFUO0FBQWU7QUFBSTNKLE1BQUFBLFFBQW5CO0FBQTZCO0FBQUkySyxNQUFBQSxRQUFqQztBQUEyQztBQUFJZixNQUFBQSxPQUFPLElBQUksRUFBMUQ7O0FBQ0EsYUFBT25QLEVBQVA7QUFDQSxLQUpEOztBQUtBLFNBQUt5UyxRQUFMLEdBQWdCLENBQUMsaUNBQUQsRUFBbUMsbUNBQW5DLENBQWhCO0FBQ0EsU0FBS3JPLFNBQUwsR0FBaUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFqQjtBQUNBLFNBQUtFLFlBQUwsR0FBb0IsQ0FBQztBQUFDRSxNQUFBQSxhQUFhLEVBQUMsQ0FBZjtBQUFpQkUsTUFBQUEsY0FBYyxFQUFDLENBQUMsQ0FBRDtBQUFoQyxLQUFELEVBQXNDO0FBQUNGLE1BQUFBLGFBQWEsRUFBQyxDQUFmO0FBQWlCRSxNQUFBQSxjQUFjLEVBQUMsQ0FBQyxDQUFEO0FBQWhDLEtBQXRDLENBQXBCO0FBQ0EsU0FBS2lOLEVBQUwsR0FBVSxLQUFWOztBQUVBLGFBQVNlLG9CQUFULEdBQWdDO0FBRS9CLFVBQUlDLEVBQUUsR0FBRyxFQUFUO0FBQUEsVUFBYUMsRUFBRSxHQUFHLEVBQWxCO0FBQUEsVUFBc0JDLEVBQUUsR0FBRyxFQUEzQjtBQUFBLFVBQStCQyxFQUFFLEdBQUcsRUFBcEM7QUFBQSxVQUF3Q0MsR0FBRyxHQUFDLEVBQTVDO0FBQUEsVUFBZ0RDLEtBQUssR0FBQyxFQUF0RDtBQUFBLFVBQTBEQyxLQUFLLEdBQUMsRUFBaEU7QUFBQSxVQUFvRUMsS0FBSyxHQUFDLEVBQTFFO0FBQUEsVUFBOEVDLE1BQU0sR0FBQyxFQUFyRjtBQUFBLFVBQXlGQyxNQUF6RjtBQUFBLFVBQWlHQyxJQUFJLEdBQUMsRUFBdEc7QUFBQSxVQUEwR0MsSUFBSSxHQUFDLEVBQS9HO0FBQUEsVUFBbUhDLE1BQW5IO0FBQUEsVUFBMkhDLE1BQTNIO0FBQUEsVUFBbUlDLEtBQW5JO0FBQUEsVUFBMElDLE1BQU0sR0FBQyxFQUFqSjtBQUFBLFVBQXFKQyxHQUFHLEdBQUMsRUFBeko7QUFBQSxVQUE2SkMsSUFBSSxHQUFDLEVBQWxLO0FBQUEsVUFBc0tDLEdBQXRLO0FBQUEsVUFBMktDLEdBQTNLO0FBQUEsVUFBZ0xDLEdBQWhMO0FBQUEsVUFBcUxDLEdBQXJMO0FBQUEsVUFBMExDLEtBQTFMO0FBQUEsVUFBaU1DLEtBQUssR0FBRyxFQUF6TTtBQUFBLFVBQTZNQyxHQUE3TTtBQUFBLFVBQWtOQyxHQUFsTjtBQUFBLFVBQXVOQyxLQUF2TjtBQUFBLFVBQThOQyxLQUFLLEdBQUcsRUFBdE87QUFBQSxVQUEwT0MsR0FBMU87QUFBQSxVQUErT0MsS0FBL087QUFBQSxVQUFzUEMsS0FBSyxHQUFHLEVBQTlQO0FBQUEsVUFBa1FDLEdBQWxROztBQUNBLFdBQUt2VSxFQUFMLEdBQVUsQ0FBQztBQUFDTSxRQUFBQSxFQUFFLEVBQUMsQ0FBSjtBQUFNK0IsUUFBQUEsRUFBRSxFQUFDLENBQVQ7QUFBV3FDLFFBQUFBLEVBQUUsRUFBQyxDQUFkO0FBQWdCTixRQUFBQSxnQkFBZ0IsRUFBQztBQUFqQyxPQUFELENBQVY7QUFDQSxXQUFLZ0wsSUFBTCxHQUFZLGNBQVo7O0FBRUEsV0FBS2hDLEVBQUwsR0FBVSxVQUFTdE4sRUFBVCxFQUFhO0FBQ3RCQSxRQUFBQSxFQUFFLENBQUMwVSxTQUFILEdBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQWY7QUFDQTFVLFFBQUFBLEVBQUUsQ0FBQzJVLFFBQUgsR0FBYyxDQUFkO0FBQ0EzVSxRQUFBQSxFQUFFLENBQUNxTixFQUFIO0FBQ0FyTixRQUFBQSxFQUFFLENBQUMrVCxHQUFILEdBQVMsQ0FDUixDQUNDLENBQUMsT0FBRCxFQUFTLFFBQVQsRUFBa0IsUUFBbEIsRUFBMkIsT0FBM0IsRUFBbUMsUUFBbkMsRUFBNEMsUUFBNUMsRUFBcUQsUUFBckQsRUFBOEQsUUFBOUQsRUFBdUUsUUFBdkUsRUFBZ0YsUUFBaEYsRUFBeUYsUUFBekYsRUFBa0csUUFBbEcsRUFBMkcsUUFBM0csRUFBb0gsUUFBcEgsRUFBNkgsU0FBN0gsRUFBdUksQ0FBdkksRUFBeUksQ0FBekksQ0FERCxDQURRLENBQVQ7QUFLQS9ULFFBQUFBLEVBQUUsQ0FBQ21VLEdBQUgsR0FBUyxDQUNSLENBQ0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FERCxDQURRLENBQVQ7QUFLQW5VLFFBQUFBLEVBQUUsQ0FBQ3NVLEdBQUgsR0FBUyxDQUNSLENBQ0MsQ0FBQyxDQUFELEVBQUcsTUFBSCxFQUFVLE9BQVYsRUFBa0IsT0FBbEIsRUFBMEIsT0FBMUIsRUFBa0MsT0FBbEMsRUFBMEMsTUFBMUMsRUFBaUQsT0FBakQsRUFBeUQsT0FBekQsRUFBaUUsT0FBakUsRUFBeUUsT0FBekUsRUFBaUYsT0FBakYsRUFBeUYsT0FBekYsRUFBaUcsT0FBakcsRUFBeUcsT0FBekcsRUFBaUgsQ0FBakgsRUFBbUgsQ0FBbkgsQ0FERCxDQURRLENBQVQ7QUFLQXRVLFFBQUFBLEVBQUUsQ0FBQ3VOLEVBQUgsR0FBUSxHQUFSO0FBQ0F2TixRQUFBQSxFQUFFLENBQUNnRixFQUFILEdBQVEsQ0FBUjtBQUNBLE9BckJEOztBQXVCQSxXQUFLNEQsRUFBTCxHQUFVLFVBQVN3RSxFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQ25DLEVBQUgsR0FBUSxDQUFSO0FBQ0FtQyxRQUFBQSxFQUFFLENBQUM3RSxFQUFILEdBQVEsQ0FBUjtBQUNBNkUsUUFBQUEsRUFBRSxDQUFDckQsRUFBSCxHQUFRLENBQVI7QUFDQSxPQUpEOztBQU1BLFdBQUtiLEVBQUwsR0FBVSxVQUFTRCxFQUFULEVBQWFqSixFQUFiLEVBQWlCb04sRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQ25DLEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0FGRDs7QUFJQSxXQUFLWSxFQUFMLEdBQVUsVUFBUzdMLEVBQVQsRUFBYVcsRUFBYixFQUFpQjtBQUMxQkEsUUFBQUEsRUFBRSxDQUFDZSxFQUFILEdBQU0sRUFBTjtBQUNBZixRQUFBQSxFQUFFLENBQUNpVSxDQUFILEdBQU8sR0FBUDtBQUNBaFYsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNNEUsRUFBTixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCO0FBQ0EvUixRQUFBQSxFQUFFLENBQUNrVSxFQUFILEdBQVEsRUFBUjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDa1UsRUFBVCxFQUFhN1UsRUFBRSxDQUFDVSxFQUFoQixFQUFvQmdTLEVBQXBCO0FBQ0EvUixRQUFBQSxFQUFFLENBQUNtVSxFQUFILEdBQVEsQ0FBUjtBQUNBblUsUUFBQUEsRUFBRSxDQUFDb1UsRUFBSCxHQUFRLEVBQVI7QUFDQW5WLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTTNKLEVBQUUsQ0FBQ29VLEVBQVQsRUFBYS9VLEVBQUUsQ0FBQzBVLFNBQWhCO0FBQ0E5VSxRQUFBQSxHQUFHLENBQUNvVixTQUFKLENBQWNyQyxFQUFkLEVBQWtCLENBQWxCLEVBQXFCM1MsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUEzQjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDdVUsRUFBSCxHQUFRLEVBQVI7QUFDQXRWLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ3VVLEVBQVQsRUFBYXZDLEVBQWI7QUFDQS9TLFFBQUFBLEdBQUcsQ0FBQ29WLFNBQUosQ0FBY3BDLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0I1UyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQTVCO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUN3VSxFQUFILEdBQVEsRUFBUjtBQUNBdlYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDd1UsRUFBVCxFQUFhdkMsRUFBYjtBQUNBaFQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0EsT0FoQkQ7O0FBa0JBLFdBQUsvSSxFQUFMLEdBQVUsVUFBUzlMLEVBQVQsRUFBYVcsRUFBYixFQUFpQjtBQUMxQkEsUUFBQUEsRUFBRSxDQUFDZSxFQUFILEdBQU0sRUFBTjtBQUNBZixRQUFBQSxFQUFFLENBQUNpVSxDQUFILEdBQU8sR0FBUDtBQUNBaFYsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNNEUsRUFBTixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCO0FBQ0EvUixRQUFBQSxFQUFFLENBQUNrVSxFQUFILEdBQVEsRUFBUjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDa1UsRUFBVCxFQUFhN1UsRUFBRSxDQUFDVSxFQUFoQixFQUFvQmdTLEVBQXBCO0FBQ0EvUixRQUFBQSxFQUFFLENBQUNtVSxFQUFILEdBQVEsQ0FBUjtBQUNBblUsUUFBQUEsRUFBRSxDQUFDb1UsRUFBSCxHQUFRLEVBQVI7QUFDQW5WLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTTNKLEVBQUUsQ0FBQ29VLEVBQVQsRUFBYS9VLEVBQUUsQ0FBQzBVLFNBQWhCO0FBQ0E5VSxRQUFBQSxHQUFHLENBQUNvVixTQUFKLENBQWNyQyxFQUFkLEVBQWtCLENBQWxCLEVBQXFCM1MsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUEzQjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDdVUsRUFBSCxHQUFRLEVBQVI7QUFDQXRWLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ3VVLEVBQVQsRUFBYXZDLEVBQWI7QUFDQS9TLFFBQUFBLEdBQUcsQ0FBQ29WLFNBQUosQ0FBY3BDLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0I1UyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQTVCO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUN3VSxFQUFILEdBQVEsRUFBUjtBQUNBdlYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDd1UsRUFBVCxFQUFhdkMsRUFBYjtBQUNBaFQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0EsT0FoQkQ7O0FBa0JBLFdBQUs5SSxFQUFMLEdBQVUsVUFBUzlDLEVBQVQsRUFBYWpKLEVBQWIsRUFBaUJXLEVBQWpCLEVBQXFCO0FBQzlCQSxRQUFBQSxFQUFFLENBQUNpVSxDQUFILElBQVEzTCxFQUFSO0FBQ0FySixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU0rRSxFQUFOLEVBQVUsQ0FBVixFQUFhLEVBQWIsRUFBaUIsQ0FBakI7QUFDQWpULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTBJLEtBQU4sRUFBYUYsRUFBYjtBQUNBalQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMkksS0FBTixFQUFhLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQWI7QUFDQU0sUUFBQUEsTUFBTSxHQUFHckssRUFBVDtBQUNBckosUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNK0ksSUFBTixFQUFZelMsRUFBRSxDQUFDd1UsRUFBZjtBQUNBdlYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNZ0osSUFBTixFQUFZMVMsRUFBRSxDQUFDa1UsRUFBZjs7QUFDQSxlQUFPdkIsTUFBTSxHQUFHLE1BQWhCLEVBQXdCO0FBQ3ZCQyxVQUFBQSxNQUFNLEdBQUdELE1BQVQ7QUFDQTFULFVBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTW9KLE1BQU4sRUFBY1YsS0FBZDtBQUNBblQsVUFBQUEsR0FBRyxDQUFDc08sQ0FBSixDQUFNK0UsS0FBTixFQUFhRCxLQUFiLEVBQW9CSSxJQUFwQjtBQUNBRCxVQUFBQSxNQUFNLEdBQUd2VCxHQUFHLENBQUN3VixDQUFKLENBQU1uQyxLQUFOLENBQVQ7O0FBQ0EsY0FBSUUsTUFBTSxHQUFHLE1BQWIsRUFBcUI7QUFDcEJBLFlBQUFBLE1BQU0sR0FBR25TLElBQUksQ0FBQ3FVLElBQUwsQ0FBVWxDLE1BQVYsQ0FBVDtBQUNBdlQsWUFBQUEsR0FBRyxDQUFDdU8sQ0FBSixDQUFNK0UsTUFBTixFQUFjRCxLQUFkLEVBQXFCRSxNQUFyQjtBQUNBSyxZQUFBQSxLQUFLLEdBQUcsT0FBTyxDQUFQLEdBQVdMLE1BQW5CO0FBQ0EsZ0JBQUlLLEtBQUssR0FBR0QsTUFBUixHQUFpQixHQUFyQixFQUNDQSxNQUFNLEdBQUcsTUFBTUMsS0FBZjtBQUNENVQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNbU4sTUFBTixFQUFjQSxNQUFkLEVBQXNCN1QsR0FBRyxDQUFDaUgsQ0FBSixDQUFNcU0sTUFBTixFQUFjQyxNQUFNLEdBQUdLLEtBQXZCLENBQXRCO0FBQ0E7O0FBQ0Q1VCxVQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU04TSxJQUFOLEVBQVlBLElBQVosRUFBa0J4VCxHQUFHLENBQUNpSCxDQUFKLENBQU00TSxNQUFOLEVBQWNGLE1BQWQsQ0FBbEI7QUFDQTNULFVBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTStNLElBQU4sRUFBWUEsSUFBWixFQUFrQnpULEdBQUcsQ0FBQ2lILENBQUosQ0FBTXVNLElBQU4sRUFBWUcsTUFBWixDQUFsQjtBQUNBRCxVQUFBQSxNQUFNLElBQUlDLE1BQVY7QUFDQTs7QUFDRDNULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ2tVLEVBQVQsRUFBYXhCLElBQWI7QUFDQXpULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ3dVLEVBQVQsRUFBYS9CLElBQWI7QUFDQXhULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ0QsRUFBVCxFQUFhQyxFQUFFLENBQUNrVSxFQUFoQjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDMFYsQ0FBSixDQUFNM0IsSUFBTixFQUFZaFQsRUFBRSxDQUFDdVUsRUFBZjtBQUNBdFYsUUFBQUEsR0FBRyxDQUFDMlYsRUFBSixDQUFPN0IsR0FBUCxFQUFZQyxJQUFaLEVBQWtCaFQsRUFBRSxDQUFDbVUsRUFBckI7QUFDQWxCLFFBQUFBLEdBQUcsR0FBRyxDQUFOO0FBQ0FDLFFBQUFBLEdBQUcsR0FBRyxDQUFOO0FBQ0FDLFFBQUFBLEdBQUcsR0FBSW5ULEVBQUUsQ0FBQ2lVLENBQUgsR0FBT2YsR0FBZDtBQUNBRyxRQUFBQSxLQUFLLEdBQUVGLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFTQSxHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBUUEsR0FBeEI7QUFDQWxVLFFBQUFBLEdBQUcsQ0FBQzRWLENBQUosQ0FBTXZCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLENBQVAsSUFBVSxFQUF4QjtBQUNBRCxRQUFBQSxHQUFHLEdBQUdsVSxFQUFFLENBQUM0VixFQUFILENBQU16VixFQUFFLENBQUMrVCxHQUFILENBQU8sQ0FBUCxFQUFVRSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQU4sRUFBMEJBLEtBQUssQ0FBQyxDQUFELENBQS9CLENBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFJTixHQUFHLEdBQUdHLEdBQWI7QUFDQUssUUFBQUEsS0FBSyxHQUFFTixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0FsVSxRQUFBQSxHQUFHLENBQUM0VixDQUFKLENBQU1uQixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsQ0FBeEI7QUFDQUQsUUFBQUEsR0FBRyxHQUFHdFUsRUFBRSxDQUFDNFYsRUFBSCxDQUFNelYsRUFBRSxDQUFDbVUsR0FBSCxDQUFPLENBQVAsRUFBVUUsS0FBSyxDQUFDLENBQUQsQ0FBZixDQUFOLEVBQTBCQSxLQUFLLENBQUMsQ0FBRCxDQUEvQixDQUFOO0FBQ0FFLFFBQUFBLEtBQUssR0FBRVQsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVNBLEdBQUcsR0FBQyxDQUFKLEdBQU8sSUFBRyxDQUFDQSxHQUFHLEdBQUMsQ0FBTCxJQUFRLENBQWxCLEdBQXNCQSxHQUF0QztBQUNBbFUsUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNaEIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxJQUFVLEVBQXhCO0FBQ0FELFFBQUFBLEdBQUcsR0FBR3pVLEVBQUUsQ0FBQzRWLEVBQUgsQ0FBTXpWLEVBQUUsQ0FBQ3NVLEdBQUgsQ0FBTyxDQUFQLEVBQVVFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBTjtBQUNBQyxRQUFBQSxHQUFHLEdBQUt6VSxFQUFFLENBQUMyVSxRQUFILEdBQWMsQ0FBZixHQUFvQkwsR0FBM0I7QUFDQTFVLFFBQUFBLEdBQUcsQ0FBQ29SLENBQUosQ0FBTXJRLEVBQUUsQ0FBQ29DLEVBQVQsRUFBWSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQVo7QUFDQW5ELFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTTNKLEVBQUUsQ0FBQ2UsRUFBVCxFQUFhZ1MsR0FBYjtBQUNBOVQsUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNN1UsRUFBRSxDQUFDVyxFQUFULEVBQVk0UyxHQUFaLEVBQWdCQSxHQUFoQjtBQUNBdFUsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDc0MsRUFBVCxFQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQVo7QUFDQXRDLFFBQUFBLEVBQUUsQ0FBQ3dCLEVBQUgsR0FBUWdTLEdBQVI7QUFDQXhULFFBQUFBLEVBQUUsQ0FBQzJCLEVBQUgsR0FBU21TLEdBQUcsR0FBRyxDQUFQLEdBQVksQ0FBWixHQUFrQkEsR0FBRyxJQUFJLEVBQVIsR0FBYyxFQUFkLEdBQW1CQSxHQUE1QztBQUNBLE9BbEREOztBQW9EQSxXQUFLM0gsRUFBTCxHQUFVLFVBQVM5TSxFQUFULEVBQWFXLEVBQWIsRUFBaUJvTSxFQUFqQixFQUFxQjtBQUM5QjhHLFFBQUFBLEdBQUcsR0FBRyxDQUFOO0FBQ0EsWUFBSWxULEVBQUUsQ0FBQ2lVLENBQUgsR0FBT2YsR0FBWCxFQUFnQixPQUFPLElBQVA7QUFDaEIsZUFBTyxLQUFQO0FBQ0EsT0FKRDtBQU9BOztBQUVELGFBQVM2QixxQkFBVCxHQUFpQztBQUVoQyxVQUFJaEQsRUFBRSxHQUFHLEVBQVQ7QUFBQSxVQUFhb0MsRUFBYjtBQUFBLFVBQWlCbkMsRUFBRSxHQUFHLEVBQXRCO0FBQUEsVUFBMEJDLEVBQUUsR0FBQyxFQUE3QjtBQUFBLFVBQWlDK0MsR0FBRyxHQUFDLEVBQXJDO0FBQUEsVUFBeUNDLEdBQUcsR0FBQyxFQUE3QztBQUFBLFVBQWlEQyxHQUFHLEdBQUMsRUFBckQ7QUFBQSxVQUF5RFYsRUFBekQ7QUFBQSxVQUE2RFcsSUFBN0Q7QUFBQSxVQUFtRUMsSUFBSSxHQUFHLEVBQTFFO0FBQUEsVUFBOEVsRCxFQUFFLEdBQUcsRUFBbkY7QUFBQSxVQUF1RkMsR0FBRyxHQUFDLEVBQTNGO0FBQUEsVUFBK0ZDLEtBQUssR0FBQyxFQUFyRztBQUFBLFVBQXlHQyxLQUFLLEdBQUMsRUFBL0c7QUFBQSxVQUFtSEMsS0FBSyxHQUFDLEVBQXpIO0FBQUEsVUFBNkhDLE1BQU0sR0FBQyxFQUFwSTtBQUFBLFVBQXdJQyxNQUF4STtBQUFBLFVBQWdKQyxJQUFJLEdBQUMsRUFBcko7QUFBQSxVQUF5SkMsSUFBSSxHQUFDLEVBQTlKO0FBQUEsVUFBa0tDLE1BQWxLO0FBQUEsVUFBMEtDLE1BQTFLO0FBQUEsVUFBa0xDLEtBQWxMO0FBQUEsVUFBeUxDLE1BQU0sR0FBQyxFQUFoTTtBQUFBLFVBQW9NSSxHQUFwTTs7QUFDQSxXQUFLM1QsRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLb1AsSUFBTCxHQUFZLGVBQVo7O0FBRUEsV0FBS2hDLEVBQUwsR0FBVSxVQUFTdE4sRUFBVCxFQUFhO0FBQ3RCQSxRQUFBQSxFQUFFLENBQUMyVSxRQUFILEdBQWMsQ0FBZDtBQUNBM1UsUUFBQUEsRUFBRSxDQUFDbU4sRUFBSDtBQUNBbk4sUUFBQUEsRUFBRSxDQUFDa00sRUFBSCxDQUFNLElBQUl1RyxvQkFBSixFQUFOLEVBQWtDO0FBQUVuRyxVQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTVixVQUFBQSxFQUFFLEVBQUU7QUFBYixTQUFsQztBQUNBNUwsUUFBQUEsRUFBRSxDQUFDbVYsRUFBSCxHQUFRLENBQ1AsQ0FDQyxDQUFDLENBQUQsRUFBRyxTQUFILEVBQWEsUUFBYixFQUFzQixRQUF0QixFQUErQixPQUEvQixFQUF1QyxRQUF2QyxFQUFnRCxPQUFoRCxFQUF3RCxPQUF4RCxFQUFnRSxPQUFoRSxFQUF3RSxPQUF4RSxFQUFnRixPQUFoRixFQUF3RixPQUF4RixFQUFnRyxPQUFoRyxFQUF3RyxPQUF4RyxFQUFnSCxNQUFoSCxFQUF1SCxDQUF2SCxFQUF5SCxDQUF6SCxDQURELENBRE8sQ0FBUjtBQUtBblYsUUFBQUEsRUFBRSxDQUFDdU4sRUFBSCxHQUFRLEdBQVI7QUFDQXZOLFFBQUFBLEVBQUUsQ0FBQ2dGLEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0FYRDs7QUFhQSxXQUFLNEQsRUFBTCxHQUFVLFVBQVN3RSxFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUSxDQUFSO0FBQ0E2RCxRQUFBQSxFQUFFLENBQUM3RSxFQUFILEdBQVEsSUFBUjtBQUNBNkUsUUFBQUEsRUFBRSxDQUFDckQsRUFBSCxHQUFRLEVBQVI7QUFDQXFELFFBQUFBLEVBQUUsQ0FBQzNFLEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0FMRDs7QUFPQSxXQUFLUyxFQUFMLEdBQVUsVUFBU0QsRUFBVCxFQUFhakosRUFBYixFQUFpQm9OLEVBQWpCLEVBQXFCO0FBQzlCQSxRQUFBQSxFQUFFLENBQUM3RCxFQUFILEdBQVEsQ0FBUjtBQUNBLE9BRkQ7O0FBSUEsV0FBS3NDLEVBQUwsR0FBVSxVQUFTN0wsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUNpVSxDQUFILEdBQU8sR0FBUDtBQUNBaFYsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNNEUsRUFBTixFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsRUFBaUIsQ0FBakI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ2tVLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVixRQUFBQSxHQUFHLENBQUNvVyxFQUFKLENBQU9yVixFQUFFLENBQUNrVSxFQUFWLEVBQWNuQyxFQUFkLEVBQWtCMVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ2tVLEVBQVQsRUFBYTdVLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ2tVLEVBQXZCO0FBQ0FDLFFBQUFBLEVBQUUsR0FBRyxJQUFJOVUsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDb1UsRUFBSCxHQUFRRCxFQUFSO0FBQ0FsVixRQUFBQSxHQUFHLENBQUNvVixTQUFKLENBQWNyQyxFQUFkLEVBQWtCLElBQWxCLEVBQXdCM1MsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUE5QjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDdVUsRUFBSCxHQUFRLEVBQVI7QUFDQXRWLFFBQUFBLEdBQUcsQ0FBQ29XLEVBQUosQ0FBT3JWLEVBQUUsQ0FBQ3VVLEVBQVYsRUFBY3ZDLEVBQWQsRUFBa0IzUyxFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDdVUsRUFBVCxFQUFhbFYsRUFBRSxDQUFDa04sRUFBaEIsRUFBb0J2TSxFQUFFLENBQUN1VSxFQUF2QjtBQUNBdFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0FqVixRQUFBQSxHQUFHLENBQUMwVixDQUFKLENBQU1PLEdBQU4sRUFBVyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFYO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUNxVyxDQUFKLENBQU1OLEdBQU4sRUFBV2hWLEVBQUUsQ0FBQ3VVLEVBQWQsRUFBa0JXLEdBQWxCO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUMwVixDQUFKLENBQU1LLEdBQU4sRUFBV0EsR0FBWDtBQUNBL1YsUUFBQUEsR0FBRyxDQUFDcVcsQ0FBSixDQUFNTCxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JGLEdBQWhCO0FBQ0EvVixRQUFBQSxHQUFHLENBQUNzVyxFQUFKLENBQU90RCxFQUFQLEVBQVcrQyxHQUFYLEVBQWdCQyxHQUFoQixFQUFxQkMsR0FBckI7QUFDQWxWLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNnSixTQUFULEdBQXFCOUIsRUFBckI7QUFDQWpTLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CM1UsRUFBRSxDQUFDMlUsUUFBdkI7QUFDQSxPQXBCRDs7QUFzQkEsV0FBSzdJLEVBQUwsR0FBVSxVQUFTOUwsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUNpVSxDQUFILEdBQU8sR0FBUDtBQUNBaFYsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNNEUsRUFBTixFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsRUFBaUIsQ0FBakI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ2tVLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVixRQUFBQSxHQUFHLENBQUNvVyxFQUFKLENBQU9yVixFQUFFLENBQUNrVSxFQUFWLEVBQWNuQyxFQUFkLEVBQWtCMVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ2tVLEVBQVQsRUFBYTdVLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ2tVLEVBQXZCO0FBQ0FDLFFBQUFBLEVBQUUsR0FBRyxJQUFJOVUsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDb1UsRUFBSCxHQUFRRCxFQUFSO0FBQ0FsVixRQUFBQSxHQUFHLENBQUNvVixTQUFKLENBQWNyQyxFQUFkLEVBQWtCLElBQWxCLEVBQXdCM1MsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUE5QjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDdVUsRUFBSCxHQUFRLEVBQVI7QUFDQXRWLFFBQUFBLEdBQUcsQ0FBQ29XLEVBQUosQ0FBT3JWLEVBQUUsQ0FBQ3VVLEVBQVYsRUFBY3ZDLEVBQWQsRUFBa0IzUyxFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDdVUsRUFBVCxFQUFhbFYsRUFBRSxDQUFDa04sRUFBaEIsRUFBb0J2TSxFQUFFLENBQUN1VSxFQUF2QjtBQUNBdFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0FqVixRQUFBQSxHQUFHLENBQUMwVixDQUFKLENBQU1PLEdBQU4sRUFBVyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFYO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUNxVyxDQUFKLENBQU1OLEdBQU4sRUFBV2hWLEVBQUUsQ0FBQ3VVLEVBQWQsRUFBa0JXLEdBQWxCO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUMwVixDQUFKLENBQU1LLEdBQU4sRUFBV0EsR0FBWDtBQUNBL1YsUUFBQUEsR0FBRyxDQUFDcVcsQ0FBSixDQUFNTCxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JGLEdBQWhCO0FBQ0EvVixRQUFBQSxHQUFHLENBQUNzVyxFQUFKLENBQU90RCxFQUFQLEVBQVcrQyxHQUFYLEVBQWdCQyxHQUFoQixFQUFxQkMsR0FBckI7QUFDQWxWLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNnSixTQUFULEdBQXFCOUIsRUFBckI7QUFDQWpTLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CM1UsRUFBRSxDQUFDMlUsUUFBdkI7QUFDQSxPQXBCRDs7QUFzQkEsV0FBSzVJLEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsSUFBUTNMLEVBQVI7QUFDQTZNLFFBQUFBLElBQUksR0FBRTlWLEVBQUUsQ0FBQ21KLEVBQUgsR0FBTSxDQUFOLEdBQVEsQ0FBUixHQUFXbkosRUFBRSxDQUFDbUosRUFBSCxHQUFNLENBQU4sR0FBUSxDQUFSLEdBQVVuSixFQUFFLENBQUNtSixFQUE5QjtBQUNBdkosUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNTyxJQUFOLEVBQVcsQ0FBWCxFQUFhLENBQUNELElBQUksR0FBQyxDQUFOLElBQVMsRUFBdEI7QUFDQVgsUUFBQUEsRUFBRSxHQUFHdFYsRUFBRSxDQUFDNFYsRUFBSCxDQUFNelYsRUFBRSxDQUFDbVYsRUFBSCxDQUFNLENBQU4sRUFBU1ksSUFBSSxDQUFDLENBQUQsQ0FBYixDQUFOLEVBQXdCQSxJQUFJLENBQUMsQ0FBRCxDQUE1QixDQUFMO0FBQ0FuVyxRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU0rRSxFQUFOLEVBQVUsQ0FBVixFQUFhLEdBQWIsRUFBa0IsQ0FBbEI7QUFDQWpULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTBJLEtBQU4sRUFBYUYsRUFBYjtBQUNBalQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMkksS0FBTixFQUFhLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQWI7QUFDQU0sUUFBQUEsTUFBTSxHQUFHckssRUFBVDtBQUNBckosUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNK0ksSUFBTixFQUFZelMsRUFBRSxDQUFDdVUsRUFBZjtBQUNBdFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNZ0osSUFBTixFQUFZMVMsRUFBRSxDQUFDa1UsRUFBZjs7QUFDQSxlQUFPdkIsTUFBTSxHQUFHLE1BQWhCLEVBQXdCO0FBQ3ZCQyxVQUFBQSxNQUFNLEdBQUdELE1BQVQ7QUFDQTFULFVBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTW9KLE1BQU4sRUFBY1YsS0FBZDtBQUNBblQsVUFBQUEsR0FBRyxDQUFDc08sQ0FBSixDQUFNK0UsS0FBTixFQUFhRCxLQUFiLEVBQW9CSSxJQUFwQjtBQUNBRCxVQUFBQSxNQUFNLEdBQUd2VCxHQUFHLENBQUN3VixDQUFKLENBQU1uQyxLQUFOLENBQVQ7O0FBQ0EsY0FBSUUsTUFBTSxHQUFHLE1BQWIsRUFBcUI7QUFDcEJBLFlBQUFBLE1BQU0sR0FBR25TLElBQUksQ0FBQ3FVLElBQUwsQ0FBVWxDLE1BQVYsQ0FBVDtBQUNBdlQsWUFBQUEsR0FBRyxDQUFDdU8sQ0FBSixDQUFNK0UsTUFBTixFQUFjRCxLQUFkLEVBQXFCRSxNQUFyQjtBQUNBSyxZQUFBQSxLQUFLLEdBQUcsT0FBTzJCLEVBQVAsR0FBWWhDLE1BQXBCO0FBQ0EsZ0JBQUlLLEtBQUssR0FBR0QsTUFBUixHQUFpQixHQUFyQixFQUNDQSxNQUFNLEdBQUcsTUFBTUMsS0FBZjtBQUNENVQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNbU4sTUFBTixFQUFjQSxNQUFkLEVBQXNCN1QsR0FBRyxDQUFDaUgsQ0FBSixDQUFNcU0sTUFBTixFQUFjQyxNQUFNLEdBQUdLLEtBQXZCLENBQXRCO0FBQ0E7O0FBQ0Q1VCxVQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU04TSxJQUFOLEVBQVlBLElBQVosRUFBa0J4VCxHQUFHLENBQUNpSCxDQUFKLENBQU00TSxNQUFOLEVBQWNGLE1BQWQsQ0FBbEI7QUFDQTNULFVBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTStNLElBQU4sRUFBWUEsSUFBWixFQUFrQnpULEdBQUcsQ0FBQ2lILENBQUosQ0FBTXVNLElBQU4sRUFBWUcsTUFBWixDQUFsQjtBQUNBRCxVQUFBQSxNQUFNLElBQUlDLE1BQVY7QUFDQTs7QUFDRDNULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ2tVLEVBQVQsRUFBYXhCLElBQWI7QUFDQXpULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ3VVLEVBQVQsRUFBYTlCLElBQWI7QUFDQXhULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ0QsRUFBVCxFQUFhQyxFQUFFLENBQUNrVSxFQUFoQjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDMFYsQ0FBSixDQUFNTyxHQUFOLEVBQVcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBWDtBQUNBalcsUUFBQUEsR0FBRyxDQUFDcVcsQ0FBSixDQUFNTixHQUFOLEVBQVdoVixFQUFFLENBQUN1VSxFQUFkLEVBQWtCVyxHQUFsQjtBQUNBalcsUUFBQUEsR0FBRyxDQUFDMFYsQ0FBSixDQUFNSyxHQUFOLEVBQVdBLEdBQVg7QUFDQS9WLFFBQUFBLEdBQUcsQ0FBQ3FXLENBQUosQ0FBTUwsR0FBTixFQUFXQyxHQUFYLEVBQWdCRixHQUFoQjtBQUNBL1YsUUFBQUEsR0FBRyxDQUFDc1csRUFBSixDQUFPdEQsRUFBUCxFQUFXK0MsR0FBWCxFQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCO0FBQ0FsVixRQUFBQSxFQUFFLENBQUMrSyxFQUFILENBQU0sQ0FBTixFQUFTZ0osU0FBVCxHQUFxQjlCLEVBQXJCO0FBQ0FqUyxRQUFBQSxFQUFFLENBQUMrSyxFQUFILENBQU0sQ0FBTixFQUFTaUosUUFBVCxHQUFvQjNVLEVBQUUsQ0FBQzJVLFFBQXZCO0FBQ0EsT0F0Q0Q7O0FBd0NBLFdBQUs3SCxFQUFMLEdBQVUsVUFBUzlNLEVBQVQsRUFBYVcsRUFBYixFQUFpQm9NLEVBQWpCLEVBQXFCO0FBQzlCOEcsUUFBQUEsR0FBRyxHQUFHLENBQU47QUFDQSxZQUFJbFQsRUFBRSxDQUFDaVUsQ0FBSCxHQUFPZixHQUFYLEVBQWdCLE9BQU8sSUFBUDtBQUNoQixlQUFPLEtBQVA7QUFDQSxPQUpEO0FBT0E7O0FBRUQsYUFBU3NDLGNBQVQsR0FBMEI7QUFFekIsVUFBSXZCLENBQUo7QUFBQSxVQUFPd0IsR0FBUDtBQUFBLFVBQVlDLEdBQUcsR0FBRyxFQUFsQjtBQUFBLFVBQXNCeEIsRUFBRSxHQUFHLEVBQTNCO0FBQUEsVUFBK0JFLEVBQS9CO0FBQUEsVUFBbUNHLEVBQW5DO0FBQUEsVUFBdUNDLEVBQXZDO0FBQUEsVUFBMkNyQyxHQUEzQztBQUFBLFVBQWdEWSxHQUFHLEdBQUcsRUFBdEQ7QUFBQSxVQUEwREksR0FBRyxHQUFDLEVBQTlEO0FBQUEsVUFBa0VDLEdBQWxFO0FBQUEsVUFBdUVHLEdBQXZFO0FBQUEsVUFBNEVDLEdBQTVFO0FBQUEsVUFBaUZDLEtBQWpGO0FBQUEsVUFBd0ZDLEtBQUssR0FBRyxFQUFoRztBQUFBLFVBQW9HQyxHQUFwRztBQUFBLFVBQXlHRyxHQUF6Rzs7QUFDQSxXQUFLdlUsRUFBTCxHQUFVLENBQUM7QUFBQ00sUUFBQUEsRUFBRSxFQUFDLENBQUo7QUFBTStCLFFBQUFBLEVBQUUsRUFBQyxDQUFUO0FBQVdxQyxRQUFBQSxFQUFFLEVBQUMsQ0FBZDtBQUFnQk4sUUFBQUEsZ0JBQWdCLEVBQUM7QUFBakMsT0FBRCxDQUFWO0FBQ0EsV0FBS2dMLElBQUwsR0FBWSxRQUFaOztBQUVBLFdBQUtoQyxFQUFMLEdBQVUsVUFBU3ROLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDMlUsUUFBSCxHQUFjLENBQWQ7QUFDQTNVLFFBQUFBLEVBQUUsQ0FBQzRVLENBQUgsR0FBTyxDQUNOLENBQ0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FERCxFQUVDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBRkQsQ0FETSxDQUFQO0FBTUE1VSxRQUFBQSxFQUFFLENBQUNtTixFQUFIO0FBQ0FuTixRQUFBQSxFQUFFLENBQUNtVSxHQUFILEdBQVMsQ0FDUixDQUNDLENBQUMsQ0FBRCxFQUFHLFFBQUgsRUFBWSxRQUFaLEVBQXFCLFFBQXJCLEVBQThCLE9BQTlCLEVBQXNDLE9BQXRDLEVBQThDLE9BQTlDLEVBQXNELE9BQXRELEVBQThELE1BQTlELEVBQXFFLE1BQXJFLEVBQTRFLE9BQTVFLEVBQW9GLE9BQXBGLEVBQTRGLE9BQTVGLEVBQW9HLE9BQXBHLEVBQTRHLE9BQTVHLEVBQW9ILENBQXBILEVBQXNILENBQXRILENBREQsRUFFQyxDQUFDLENBQUQsRUFBRyxPQUFILEVBQVcsT0FBWCxFQUFtQixPQUFuQixFQUEyQixRQUEzQixFQUFvQyxRQUFwQyxFQUE2QyxRQUE3QyxFQUFzRCxRQUF0RCxFQUErRCxRQUEvRCxFQUF3RSxRQUF4RSxFQUFpRixRQUFqRixFQUEwRixLQUExRixFQUFnRyxTQUFoRyxFQUEwRyxTQUExRyxFQUFvSCxTQUFwSCxFQUE4SCxDQUE5SCxFQUFnSSxDQUFoSSxDQUZELEVBR0MsQ0FBQyxDQUFELEVBQUcsUUFBSCxFQUFZLFFBQVosQ0FIRCxFQUlDLENBQUMsUUFBRCxFQUFVLFFBQVYsRUFBbUIsUUFBbkIsQ0FKRCxFQUtDLENBQUMsUUFBRCxFQUFVLEdBQVYsRUFBYyxHQUFkLENBTEQsRUFNQyxDQUFDLEdBQUQsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQU5ELEVBT0MsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFPLEdBQVAsQ0FQRCxFQVFDLENBQUMsR0FBRCxFQUFLLENBQUwsRUFBTyxDQUFQLENBUkQsQ0FEUSxDQUFUO0FBWUFuVSxRQUFBQSxFQUFFLENBQUN1TixFQUFILEdBQVEsR0FBUjtBQUNBdk4sUUFBQUEsRUFBRSxDQUFDZ0YsRUFBSCxHQUFRLENBQVI7QUFDQSxPQXZCRDs7QUF5QkEsV0FBSzRELEVBQUwsR0FBVSxVQUFTd0UsRUFBVCxFQUFhO0FBQ3RCQSxRQUFBQSxFQUFFLENBQUM3RCxFQUFILEdBQVEsQ0FBUjtBQUNBNkQsUUFBQUEsRUFBRSxDQUFDN0UsRUFBSCxHQUFRLENBQVI7QUFDQTZFLFFBQUFBLEVBQUUsQ0FBQ3JELEVBQUgsR0FBUSxHQUFSO0FBQ0FxRCxRQUFBQSxFQUFFLENBQUMzRSxFQUFILEdBQVEsQ0FBUjtBQUNBLE9BTEQ7O0FBT0EsV0FBS1MsRUFBTCxHQUFVLFVBQVNELEVBQVQsRUFBYWpKLEVBQWIsRUFBaUJvTixFQUFqQixFQUFxQjtBQUM5QmdKLFFBQUFBLEdBQUcsR0FBRXBXLEVBQUUsQ0FBQ21KLEVBQUgsR0FBTSxDQUFOLEdBQVEsQ0FBUixHQUFXbkosRUFBRSxDQUFDbUosRUFBSCxHQUFNLENBQU4sR0FBUSxDQUFSLEdBQVVuSixFQUFFLENBQUNtSixFQUE3QjtBQUNBaU4sUUFBQUEsR0FBRyxHQUFDLEdBQUosR0FBUXhXLEdBQUcsQ0FBQzRWLENBQUosQ0FBTWEsR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLE9BQXBCLENBQVIsR0FBcUN4VyxHQUFHLENBQUM0VixDQUFKLENBQU1hLEdBQU4sRUFBVSxDQUFWLEVBQVksQ0FBQ0QsR0FBRyxHQUFDLEdBQUwsSUFBVSxRQUF0QixDQUFyQztBQUNBeEIsUUFBQUEsQ0FBQyxHQUFHL1UsRUFBRSxDQUFDNFYsRUFBSCxDQUFNelYsRUFBRSxDQUFDNFUsQ0FBSCxDQUFLLENBQUwsRUFBUXlCLEdBQUcsQ0FBQyxDQUFELENBQVgsQ0FBTixFQUFzQkEsR0FBRyxDQUFDLENBQUQsQ0FBekIsQ0FBSjtBQUNBakosUUFBQUEsRUFBRSxDQUFDN0QsRUFBSCxHQUFRcUwsQ0FBUjtBQUNBLE9BTEQ7O0FBT0EsV0FBSy9JLEVBQUwsR0FBVSxVQUFTN0wsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUMrUixFQUFILEdBQVEsR0FBUjtBQUNBOVMsUUFBQUEsR0FBRyxDQUFDb1YsU0FBSixDQUFjSCxFQUFkLEVBQWtCLEdBQWxCLEVBQXVCN1UsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUE3QjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDbVUsRUFBSCxHQUFRLEVBQVI7QUFDQWxWLFFBQUFBLEdBQUcsQ0FBQ29XLEVBQUosQ0FBT3JWLEVBQUUsQ0FBQ21VLEVBQVYsRUFBY0QsRUFBZCxFQUFrQjdVLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUNtVSxFQUFULEVBQWE5VSxFQUFFLENBQUNVLEVBQWhCLEVBQW9CQyxFQUFFLENBQUNtVSxFQUF2QjtBQUNBQyxRQUFBQSxFQUFFLEdBQUcsSUFBSS9VLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixNQUFNLENBQXRCLENBQVQ7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ2dTLEVBQUgsR0FBUW9DLEVBQVI7QUFDQUcsUUFBQUEsRUFBRSxHQUFHLElBQUlsVixFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsSUFBSSxDQUFwQixDQUFUO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNpUyxFQUFILEdBQVFzQyxFQUFSO0FBQ0FDLFFBQUFBLEVBQUUsR0FBRyxLQUFLblYsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLEtBQUssRUFBckIsQ0FBVjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDa1MsRUFBSCxHQUFRc0MsRUFBUjtBQUNBckMsUUFBQUEsR0FBRyxHQUFHLE1BQU05UyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsSUFBSSxHQUFwQixDQUFaO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNrVCxHQUFILEdBQVNmLEdBQVQ7QUFDQWxULFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTTRGLEdBQU4sRUFBVyxDQUFYLEVBQWMsRUFBZCxFQUFrQixDQUFsQjtBQUNBL1MsUUFBQUEsRUFBRSxDQUFDaVQsR0FBSCxHQUFTLEVBQVQ7QUFDQWhVLFFBQUFBLEdBQUcsQ0FBQ29XLEVBQUosQ0FBT3JWLEVBQUUsQ0FBQ2lULEdBQVYsRUFBZUYsR0FBZixFQUFvQjFULEVBQUUsQ0FBQzBCLEVBQXZCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUNpVCxHQUFULEVBQWM1VCxFQUFFLENBQUNrTixFQUFqQixFQUFxQnZNLEVBQUUsQ0FBQ2lULEdBQXhCO0FBQ0FoVSxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDbVUsRUFBaEI7QUFDQSxPQW5CRDs7QUFxQkEsV0FBS2hKLEVBQUwsR0FBVSxVQUFTOUwsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUMrUixFQUFILEdBQVEsR0FBUjtBQUNBOVMsUUFBQUEsR0FBRyxDQUFDb1YsU0FBSixDQUFjSCxFQUFkLEVBQWtCLEdBQWxCLEVBQXVCN1UsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUE3QjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDbVUsRUFBSCxHQUFRLEVBQVI7QUFDQWxWLFFBQUFBLEdBQUcsQ0FBQ29XLEVBQUosQ0FBT3JWLEVBQUUsQ0FBQ21VLEVBQVYsRUFBY0QsRUFBZCxFQUFrQjdVLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUNtVSxFQUFULEVBQWE5VSxFQUFFLENBQUNVLEVBQWhCLEVBQW9CQyxFQUFFLENBQUNtVSxFQUF2QjtBQUNBQyxRQUFBQSxFQUFFLEdBQUcsSUFBSS9VLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixNQUFNLENBQXRCLENBQVQ7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ2dTLEVBQUgsR0FBUW9DLEVBQVI7QUFDQUcsUUFBQUEsRUFBRSxHQUFHLElBQUlsVixFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsSUFBSSxDQUFwQixDQUFUO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNpUyxFQUFILEdBQVFzQyxFQUFSO0FBQ0FDLFFBQUFBLEVBQUUsR0FBRyxLQUFLblYsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLEtBQUssRUFBckIsQ0FBVjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDa1MsRUFBSCxHQUFRc0MsRUFBUjtBQUNBckMsUUFBQUEsR0FBRyxHQUFHLE1BQU05UyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsSUFBSSxHQUFwQixDQUFaO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNrVCxHQUFILEdBQVNmLEdBQVQ7QUFDQWxULFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTTRGLEdBQU4sRUFBVyxDQUFYLEVBQWMsRUFBZCxFQUFrQixDQUFsQjtBQUNBL1MsUUFBQUEsRUFBRSxDQUFDaVQsR0FBSCxHQUFTLEVBQVQ7QUFDQWhVLFFBQUFBLEdBQUcsQ0FBQ29XLEVBQUosQ0FBT3JWLEVBQUUsQ0FBQ2lULEdBQVYsRUFBZUYsR0FBZixFQUFvQjFULEVBQUUsQ0FBQzBCLEVBQXZCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUNpVCxHQUFULEVBQWM1VCxFQUFFLENBQUNrTixFQUFqQixFQUFxQnZNLEVBQUUsQ0FBQ2lULEdBQXhCO0FBQ0FoVSxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDbVUsRUFBaEI7QUFDQSxPQW5CRDs7QUFxQkEsV0FBSy9JLEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQytSLEVBQUgsSUFBU3pKLEVBQVQ7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTXlKLEdBQU4sRUFBV25ULEVBQUUsQ0FBQ2lULEdBQWQ7QUFDQWhVLFFBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTW1OLEdBQU4sRUFBV0EsR0FBWCxFQUFnQjdLLEVBQWhCO0FBQ0FySixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU13TixHQUFOLEVBQVdBLEdBQVgsRUFBZ0JuVCxFQUFFLENBQUNtVSxFQUFuQjtBQUNBbFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDbVUsRUFBVCxFQUFhaEIsR0FBYjtBQUNBQyxRQUFBQSxHQUFHLEdBQUdwVCxFQUFFLENBQUNnUyxFQUFILEdBQVExSixFQUFFLEdBQUcsRUFBbkI7QUFDQXRJLFFBQUFBLEVBQUUsQ0FBQ2dTLEVBQUgsR0FBUW9CLEdBQVI7QUFDQW5VLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ0QsRUFBVCxFQUFhQyxFQUFFLENBQUNtVSxFQUFoQjtBQUNBWixRQUFBQSxHQUFHLEdBQUl2VCxFQUFFLENBQUMrUixFQUFILEdBQVEvUixFQUFFLENBQUNrVCxHQUFsQjtBQUNBTyxRQUFBQSxLQUFLLEdBQUVGLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFTQSxHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBUUEsR0FBeEI7QUFDQUUsUUFBQUEsS0FBSyxHQUFDLFFBQU4sR0FBZUEsS0FBSyxHQUFDLEdBQU4sR0FBVUEsS0FBSyxHQUFDLFNBQU4sR0FBZ0J4VSxHQUFHLENBQUM0VixDQUFKLENBQU1uQixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsT0FBeEIsQ0FBaEIsR0FBaUR4VSxHQUFHLENBQUM0VixDQUFKLENBQU1uQixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxTQUFQLElBQWtCLE9BQWhDLENBQTNELEdBQW9HQSxLQUFLLEdBQUMsUUFBTixHQUFleFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNbkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsR0FBUCxJQUFZLE9BQTFCLENBQWYsR0FBa0R4VSxHQUFHLENBQUM0VixDQUFKLENBQU1uQixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxRQUFQLElBQWlCLE9BQS9CLENBQXJLLEdBQTZNQSxLQUFLLEdBQUMsR0FBTixHQUFVQSxLQUFLLEdBQUMsS0FBTixHQUFZeFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNbkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsUUFBUCxJQUFpQixPQUEvQixDQUFaLEdBQW9EeFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNbkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsS0FBUCxJQUFjLE1BQTVCLENBQTlELEdBQWtHQSxLQUFLLEdBQUMsUUFBTixHQUFleFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNbkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsR0FBUCxJQUFZLE9BQTFCLENBQWYsR0FBa0R4VSxHQUFHLENBQUM0VixDQUFKLENBQU1uQixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxRQUFQLElBQWlCLE9BQS9CLENBQWpXO0FBQ0FELFFBQUFBLEdBQUcsR0FBR3RVLEVBQUUsQ0FBQzRWLEVBQUgsQ0FBTXpWLEVBQUUsQ0FBQ21VLEdBQUgsQ0FBTyxDQUFQLEVBQVVFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBTjtBQUNBQyxRQUFBQSxHQUFHLEdBQUkzVCxFQUFFLENBQUNrUyxFQUFILEdBQVFzQixHQUFmO0FBQ0FNLFFBQUFBLEdBQUcsR0FBS3pVLEVBQUUsQ0FBQzJVLFFBQUgsR0FBYyxDQUFmLEdBQW9CaFUsRUFBRSxDQUFDaVMsRUFBOUI7QUFDQWhULFFBQUFBLEdBQUcsQ0FBQ29SLENBQUosQ0FBTXJRLEVBQUUsQ0FBQ29DLEVBQVQsRUFBWSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQVo7QUFDQXBDLFFBQUFBLEVBQUUsQ0FBQ0csRUFBSCxHQUFRSCxFQUFFLENBQUNnUyxFQUFYO0FBQ0EvUyxRQUFBQSxHQUFHLENBQUM0VixDQUFKLENBQU03VSxFQUFFLENBQUNXLEVBQVQsRUFBWWdULEdBQVosRUFBZ0JBLEdBQWhCO0FBQ0ExVSxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNzQyxFQUFULEVBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBWjtBQUNBdEMsUUFBQUEsRUFBRSxDQUFDd0IsRUFBSCxHQUFRLENBQVI7QUFDQXhCLFFBQUFBLEVBQUUsQ0FBQzJCLEVBQUgsR0FBU21TLEdBQUcsR0FBRyxDQUFQLEdBQVksQ0FBWixHQUFrQkEsR0FBRyxJQUFJLENBQVIsR0FBYSxDQUFiLEdBQWlCQSxHQUExQztBQUNBLE9BckJEOztBQXVCQSxXQUFLM0gsRUFBTCxHQUFVLFVBQVM5TSxFQUFULEVBQWFXLEVBQWIsRUFBaUJvTSxFQUFqQixFQUFxQjtBQUM5QixZQUFJcE0sRUFBRSxDQUFDK1IsRUFBSCxHQUFRL1IsRUFBRSxDQUFDa1QsR0FBZixFQUFvQixPQUFPLElBQVA7QUFDcEIsZUFBTyxLQUFQO0FBQ0EsT0FIRDtBQU1BOztBQUVELGFBQVN5QyxjQUFULEdBQTBCO0FBRXpCLFVBQUk1RCxFQUFFLEdBQUcsRUFBVDtBQUFBLFVBQWFDLEVBQWI7QUFBQSxVQUFpQm9DLEVBQWpCO0FBQUEsVUFBcUJHLEVBQXJCO0FBQUEsVUFBeUJ0QyxFQUF6QjtBQUFBLFVBQTZCMkQsSUFBN0I7QUFBQSxVQUFtQ0MsSUFBSSxHQUFHLEVBQTFDO0FBQUEsVUFBOENyQixFQUE5QztBQUFBLFVBQWtEdEMsRUFBbEQ7O0FBQ0EsV0FBSzNTLEVBQUwsR0FBVSxDQUFDO0FBQUNNLFFBQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU0rQixRQUFBQSxFQUFFLEVBQUMsQ0FBVDtBQUFXcUMsUUFBQUEsRUFBRSxFQUFDLENBQWQ7QUFBZ0JOLFFBQUFBLGdCQUFnQixFQUFDO0FBQWpDLE9BQUQsQ0FBVjtBQUNBLFdBQUtnTCxJQUFMLEdBQVksUUFBWjs7QUFFQSxXQUFLaEMsRUFBTCxHQUFVLFVBQVN0TixFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQ21OLEVBQUg7QUFDQW5OLFFBQUFBLEVBQUUsQ0FBQzRTLEVBQUgsR0FBUSxDQUNQLENBQ0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FERCxFQUVDLENBQUMsQ0FBRCxFQUFHLFFBQUgsRUFBWSxRQUFaLEVBQXFCLFFBQXJCLEVBQThCLFFBQTlCLEVBQXVDLFFBQXZDLEVBQWdELFFBQWhELEVBQXlELFFBQXpELEVBQWtFLFFBQWxFLEVBQTJFLFFBQTNFLEVBQW9GLFFBQXBGLEVBQTZGLE9BQTdGLEVBQXFHLFFBQXJHLEVBQThHLFFBQTlHLEVBQXVILFFBQXZILEVBQWdJLENBQWhJLEVBQWtJLENBQWxJLENBRkQsQ0FETyxDQUFSO0FBTUE1UyxRQUFBQSxFQUFFLENBQUN1TixFQUFILEdBQVEsR0FBUjtBQUNBdk4sUUFBQUEsRUFBRSxDQUFDZ0YsRUFBSCxHQUFRLENBQVI7QUFDQSxPQVZEOztBQVlBLFdBQUs0RCxFQUFMLEdBQVUsVUFBU3dFLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDN0QsRUFBSCxHQUFRLENBQVI7QUFDQTZELFFBQUFBLEVBQUUsQ0FBQzdFLEVBQUgsR0FBUSxDQUFSO0FBQ0E2RSxRQUFBQSxFQUFFLENBQUNyRCxFQUFILEdBQVEsQ0FBUjtBQUNBcUQsUUFBQUEsRUFBRSxDQUFDM0UsRUFBSCxHQUFRLENBQVI7QUFDQSxPQUxEOztBQU9BLFdBQUtTLEVBQUwsR0FBVSxVQUFTRCxFQUFULEVBQWFqSixFQUFiLEVBQWlCb04sRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0FGRDs7QUFJQSxXQUFLc0MsRUFBTCxHQUFVLFVBQVM3TCxFQUFULEVBQWFXLEVBQWIsRUFBaUI7QUFDMUJBLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsR0FBTyxHQUFQO0FBQ0FoVixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU00RSxFQUFOLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ2tVLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVixRQUFBQSxHQUFHLENBQUNvVyxFQUFKLENBQU9yVixFQUFFLENBQUNrVSxFQUFWLEVBQWNuQyxFQUFkLEVBQWtCMVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ2tVLEVBQVQsRUFBYTdVLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ2tVLEVBQXZCO0FBQ0FsVSxRQUFBQSxFQUFFLENBQUNtVSxFQUFILEdBQVEsQ0FBUjtBQUNBbFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0EsT0FSRDs7QUFVQSxXQUFLL0ksRUFBTCxHQUFVLFVBQVM5TCxFQUFULEVBQWFXLEVBQWIsRUFBaUI7QUFDMUJBLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsR0FBTyxHQUFQO0FBQ0FoVixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU00RSxFQUFOLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ2tVLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVixRQUFBQSxHQUFHLENBQUNvVyxFQUFKLENBQU9yVixFQUFFLENBQUNrVSxFQUFWLEVBQWNuQyxFQUFkLEVBQWtCMVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ2tVLEVBQVQsRUFBYTdVLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ2tVLEVBQXZCO0FBQ0FsVSxRQUFBQSxFQUFFLENBQUNtVSxFQUFILEdBQVEsQ0FBUjtBQUNBbFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0EsT0FSRDs7QUFVQSxXQUFLOUksRUFBTCxHQUFVLFVBQVM5QyxFQUFULEVBQWFqSixFQUFiLEVBQWlCVyxFQUFqQixFQUFxQjtBQUM5QkEsUUFBQUEsRUFBRSxDQUFDaVUsQ0FBSCxJQUFRM0wsRUFBUjtBQUNBckosUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0FsQyxRQUFBQSxFQUFFLEdBQUcsR0FBTDtBQUNBb0MsUUFBQUEsRUFBRSxHQUFHLEdBQUw7QUFDQUcsUUFBQUEsRUFBRSxHQUFJdlUsRUFBRSxDQUFDaVUsQ0FBSCxHQUFPRyxFQUFiO0FBQ0F3QixRQUFBQSxJQUFJLEdBQUVyQixFQUFFLEdBQUMsQ0FBSCxHQUFLLENBQUwsR0FBUUEsRUFBRSxHQUFDLENBQUgsR0FBSyxDQUFMLEdBQU9BLEVBQXJCO0FBQ0FxQixRQUFBQSxJQUFJLEdBQUMsR0FBTCxHQUFTM1csR0FBRyxDQUFDNFYsQ0FBSixDQUFNZ0IsSUFBTixFQUFXLENBQVgsRUFBYSxDQUFDRCxJQUFJLEdBQUMsQ0FBTixJQUFTLEVBQXRCLENBQVQsR0FBbUMzVyxHQUFHLENBQUM0VixDQUFKLENBQU1nQixJQUFOLEVBQVcsQ0FBWCxFQUFhLENBQUNELElBQUksR0FBQyxHQUFOLElBQVcsT0FBeEIsQ0FBbkM7QUFDQTNELFFBQUFBLEVBQUUsR0FBRy9TLEVBQUUsQ0FBQzRWLEVBQUgsQ0FBTXpWLEVBQUUsQ0FBQzRTLEVBQUgsQ0FBTSxDQUFOLEVBQVM0RCxJQUFJLENBQUMsQ0FBRCxDQUFiLENBQU4sRUFBd0JBLElBQUksQ0FBQyxDQUFELENBQTVCLENBQUw7QUFDQXJCLFFBQUFBLEVBQUUsR0FBSXhDLEVBQUUsR0FBR0MsRUFBWDtBQUNBQyxRQUFBQSxFQUFFLEdBQUcsQ0FBTDtBQUNBalQsUUFBQUEsR0FBRyxDQUFDb1IsQ0FBSixDQUFNclEsRUFBRSxDQUFDb0MsRUFBVCxFQUFZLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBWjtBQUNBcEMsUUFBQUEsRUFBRSxDQUFDRyxFQUFILEdBQVFILEVBQUUsQ0FBQ21VLEVBQVg7QUFDQWxWLFFBQUFBLEdBQUcsQ0FBQzRWLENBQUosQ0FBTTdVLEVBQUUsQ0FBQ1csRUFBVCxFQUFZNlQsRUFBWixFQUFlQSxFQUFmO0FBQ0F2VixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNzQyxFQUFULEVBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBWjtBQUNBdEMsUUFBQUEsRUFBRSxDQUFDd0IsRUFBSCxHQUFRLENBQVI7QUFDQXhCLFFBQUFBLEVBQUUsQ0FBQzJCLEVBQUgsR0FBU3VRLEVBQUUsR0FBRyxDQUFOLEdBQVcsQ0FBWCxHQUFpQkEsRUFBRSxJQUFJLEVBQVAsR0FBYSxFQUFiLEdBQWtCQSxFQUExQztBQUNBLE9BakJEOztBQW1CQSxXQUFLL0YsRUFBTCxHQUFVLFVBQVM5TSxFQUFULEVBQWFXLEVBQWIsRUFBaUJvTSxFQUFqQixFQUFxQjtBQUM5QmdJLFFBQUFBLEVBQUUsR0FBRyxHQUFMO0FBQ0EsWUFBSXBVLEVBQUUsQ0FBQ2lVLENBQUgsR0FBT0csRUFBWCxFQUFlLE9BQU8sSUFBUDtBQUNmLGVBQU8sS0FBUDtBQUNBLE9BSkQ7QUFPQTs7QUFFRCxhQUFTMEIsd0JBQVQsR0FBb0M7QUFFbkMsVUFBSTdCLENBQUo7QUFBQSxVQUFPd0IsR0FBUDtBQUFBLFVBQVlDLEdBQUcsR0FBRyxFQUFsQjtBQUFBLFVBQXNCeEIsRUFBdEI7QUFBQSxVQUEwQkMsRUFBRSxHQUFHLEVBQS9CO0FBQUEsVUFBbUM0QixHQUFuQztBQUFBLFVBQXdDQyxHQUFHLEdBQUcsRUFBOUM7QUFBQSxVQUFrRDVCLEVBQUUsR0FBRyxFQUF2RDtBQUFBLFVBQTJENkIsR0FBM0Q7QUFBQSxVQUFnRUMsR0FBRyxHQUFHLEVBQXRFO0FBQUEsVUFBMEVsRSxFQUExRTtBQUFBLFVBQThFdUMsRUFBRSxHQUFHLEVBQW5GO0FBQUEsVUFBdUZ0QyxFQUFFLEdBQUcsRUFBNUY7QUFBQSxVQUFnR0UsR0FBaEc7QUFBQSxVQUFxR2UsR0FBckc7QUFBQSxVQUEwR2lELEtBQTFHO0FBQUEsVUFBaUhDLEtBQUssR0FBRyxFQUF6SDtBQUFBLFVBQTZIbkQsR0FBN0g7O0FBQ0EsV0FBSzFULEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS29QLElBQUwsR0FBWSxrQkFBWjs7QUFFQSxXQUFLaEMsRUFBTCxHQUFVLFVBQVN0TixFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQzRVLENBQUgsR0FBTyxDQUNOLENBQ0MsQ0FBQyxPQUFELEVBQVMsT0FBVCxFQUFpQixPQUFqQixDQURELEVBRUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FGRCxDQURNLENBQVA7QUFNQTVVLFFBQUFBLEVBQUUsQ0FBQ21OLEVBQUg7QUFDQW5OLFFBQUFBLEVBQUUsQ0FBQzhVLEVBQUgsR0FBUSxDQUNQLENBQUMsQ0FBQyxDQUFDLE9BQUYsRUFBVSxNQUFWLENBQUQsRUFBbUIsQ0FBQyxDQUFDLE9BQUYsRUFBVSxDQUFDLE9BQVgsQ0FBbkIsRUFBdUMsQ0FBQyxDQUFDLE9BQUYsRUFBVSxDQUFDLE9BQVgsQ0FBdkMsQ0FETyxDQUFSO0FBR0E5VSxRQUFBQSxFQUFFLENBQUMrVSxFQUFILEdBQVEsQ0FDUCxDQUFDLENBQUMsT0FBRCxFQUFTLEtBQVQsQ0FBRCxFQUFpQixDQUFDLE9BQUQsRUFBUyxDQUFDLE1BQVYsQ0FBakIsRUFBbUMsQ0FBQyxPQUFELEVBQVMsQ0FBQyxNQUFWLENBQW5DLENBRE8sQ0FBUjtBQUdBL1UsUUFBQUEsRUFBRSxDQUFDNlQsR0FBSCxHQUFTLENBQ1IsQ0FDQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQURELEVBRUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FGRCxFQUdDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBSEQsQ0FEUSxDQUFUO0FBT0E3VCxRQUFBQSxFQUFFLENBQUNrTSxFQUFILENBQU0sSUFBSXdKLHFCQUFKLEVBQU4sRUFBbUM7QUFBRXBKLFVBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNWLFVBQUFBLEVBQUUsRUFBRTtBQUFiLFNBQW5DO0FBQ0E1TCxRQUFBQSxFQUFFLENBQUNrTSxFQUFILENBQU0sSUFBSWlLLGNBQUosRUFBTixFQUE0QjtBQUFFN0osVUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU1YsVUFBQUEsRUFBRSxFQUFFO0FBQWIsU0FBNUI7QUFDQTVMLFFBQUFBLEVBQUUsQ0FBQ2tNLEVBQUgsQ0FBTSxJQUFJb0ssY0FBSixFQUFOLEVBQTRCO0FBQUVoSyxVQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTVixVQUFBQSxFQUFFLEVBQUU7QUFBYixTQUE1QjtBQUNBNUwsUUFBQUEsRUFBRSxDQUFDdU4sRUFBSCxHQUFRLENBQVI7QUFDQXZOLFFBQUFBLEVBQUUsQ0FBQ2dGLEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0ExQkQ7O0FBNEJBLFdBQUs0RCxFQUFMLEdBQVUsVUFBU3dFLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDN0QsRUFBSCxHQUFRLENBQVI7QUFDQTZELFFBQUFBLEVBQUUsQ0FBQzdFLEVBQUgsR0FBUSxDQUFSO0FBQ0E2RSxRQUFBQSxFQUFFLENBQUNyRCxFQUFILEdBQVEsQ0FBUjtBQUNBLE9BSkQ7O0FBTUEsV0FBS2IsRUFBTCxHQUFVLFVBQVNELEVBQVQsRUFBYWpKLEVBQWIsRUFBaUJvTixFQUFqQixFQUFxQjtBQUM5QmdKLFFBQUFBLEdBQUcsR0FBRXBXLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNb0osRUFBTixHQUFTLENBQVQsR0FBVyxDQUFYLEdBQWNuSixFQUFFLENBQUNELEVBQUgsQ0FBTW9KLEVBQU4sR0FBUyxPQUFULEdBQWtCLElBQUcsQ0FBQ25KLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNb0osRUFBTixHQUFTLENBQVYsSUFBYSxPQUFsQyxHQUE0Q25KLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNb0osRUFBckU7QUFDQWlOLFFBQUFBLEdBQUcsR0FBQyxPQUFKLEdBQVl4VyxHQUFHLENBQUM0VixDQUFKLENBQU1hLEdBQU4sRUFBVSxDQUFWLEVBQVksQ0FBQ0QsR0FBRyxHQUFDLENBQUwsSUFBUSxRQUFwQixDQUFaLEdBQTBDeFcsR0FBRyxDQUFDNFYsQ0FBSixDQUFNYSxHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxPQUFMLElBQWMsUUFBMUIsQ0FBMUM7QUFDQXhCLFFBQUFBLENBQUMsR0FBRy9VLEVBQUUsQ0FBQzRWLEVBQUgsQ0FBTXpWLEVBQUUsQ0FBQzRVLENBQUgsQ0FBSyxDQUFMLEVBQVF5QixHQUFHLENBQUMsQ0FBRCxDQUFYLENBQU4sRUFBc0JBLEdBQUcsQ0FBQyxDQUFELENBQXpCLENBQUo7QUFDQWpKLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUXFMLENBQVI7QUFDQSxPQUxEOztBQU9BLFdBQUsvSSxFQUFMLEdBQVUsVUFBUzdMLEVBQVQsRUFBYVcsRUFBYixFQUFpQjtBQUMxQkEsUUFBQUEsRUFBRSxDQUFDK1IsRUFBSCxHQUFRLEdBQVI7QUFDQW1DLFFBQUFBLEVBQUUsR0FBRyxJQUFJN1UsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBeUIsUUFBQUEsR0FBRyxHQUFHN1csRUFBRSxDQUFDbVgsRUFBSCxDQUFNbkMsRUFBTixDQUFOO0FBQ0FqVixRQUFBQSxHQUFHLENBQUM0VixDQUFKLENBQU1tQixHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxDQUFMLElBQVEsQ0FBcEI7QUFDQTdXLFFBQUFBLEVBQUUsQ0FBQ29YLEVBQUgsQ0FBTW5DLEVBQU4sRUFBVTlVLEVBQUUsQ0FBQzhVLEVBQUgsQ0FBTTZCLEdBQUcsQ0FBQyxDQUFELENBQVQsQ0FBVixFQUF5QkEsR0FBRyxDQUFDLENBQUQsQ0FBNUI7QUFDQUMsUUFBQUEsR0FBRyxHQUFHL1csRUFBRSxDQUFDbVgsRUFBSCxDQUFNbkMsRUFBTixDQUFOO0FBQ0FqVixRQUFBQSxHQUFHLENBQUM0VixDQUFKLENBQU1xQixHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxDQUFMLElBQVEsQ0FBcEI7QUFDQS9XLFFBQUFBLEVBQUUsQ0FBQ29YLEVBQUgsQ0FBTWxDLEVBQU4sRUFBVS9VLEVBQUUsQ0FBQytVLEVBQUgsQ0FBTThCLEdBQUcsQ0FBQyxDQUFELENBQVQsQ0FBVixFQUF5QkEsR0FBRyxDQUFDLENBQUQsQ0FBNUI7QUFDQWxFLFFBQUFBLEVBQUUsR0FBRyxJQUFJM1MsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBclYsUUFBQUEsR0FBRyxDQUFDc1gsQ0FBSixDQUFNaEMsRUFBTixFQUFVSixFQUFWLEVBQWNDLEVBQWQsRUFBa0JwQyxFQUFsQjtBQUNBL1MsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNOEUsRUFBTixFQUFVc0MsRUFBRSxDQUFDLENBQUQsQ0FBWixFQUFpQkEsRUFBRSxDQUFDLENBQUQsQ0FBbkIsRUFBd0IsQ0FBeEI7QUFDQXZVLFFBQUFBLEVBQUUsQ0FBQ3dVLEVBQUgsR0FBUSxFQUFSO0FBQ0F2VixRQUFBQSxHQUFHLENBQUNvVyxFQUFKLENBQU9yVixFQUFFLENBQUN3VSxFQUFWLEVBQWN2QyxFQUFkLEVBQWtCNVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ3dVLEVBQVQsRUFBYW5WLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ3dVLEVBQXZCO0FBQ0F4VSxRQUFBQSxFQUFFLENBQUNrUyxFQUFILEdBQVEsQ0FBUjtBQUNBQyxRQUFBQSxHQUFHLEdBQUcsSUFBSTlTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVY7QUFDQTZCLFFBQUFBLEtBQUssR0FBRWhFLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFTQSxHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBUUEsR0FBeEI7QUFDQWdFLFFBQUFBLEtBQUssR0FBQyxRQUFOLEdBQWVBLEtBQUssR0FBQyxRQUFOLEdBQWVsWCxHQUFHLENBQUM0VixDQUFKLENBQU11QixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsT0FBeEIsQ0FBZixHQUFnRGxYLEdBQUcsQ0FBQzRWLENBQUosQ0FBTXVCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLFFBQVAsSUFBaUIsT0FBL0IsQ0FBL0QsR0FBdUdsWCxHQUFHLENBQUM0VixDQUFKLENBQU11QixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxRQUFQLElBQWlCLE9BQS9CLENBQXZHO0FBQ0FqRCxRQUFBQSxHQUFHLEdBQUdoVSxFQUFFLENBQUM0VixFQUFILENBQU16VixFQUFFLENBQUM2VCxHQUFILENBQU8sQ0FBUCxFQUFVa0QsS0FBSyxDQUFDLENBQUQsQ0FBZixDQUFOLEVBQTBCQSxLQUFLLENBQUMsQ0FBRCxDQUEvQixDQUFOO0FBQ0FwVyxRQUFBQSxFQUFFLENBQUMrUyxHQUFILEdBQVNHLEdBQVQ7QUFDQWpVLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ0QsRUFBVCxFQUFhQyxFQUFFLENBQUN3VSxFQUFoQjtBQUNBeFUsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBL1MsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBLE9BeEJEOztBQTBCQSxXQUFLNUgsRUFBTCxHQUFVLFVBQVM5TCxFQUFULEVBQWFXLEVBQWIsRUFBaUI7QUFDMUJBLFFBQUFBLEVBQUUsQ0FBQytSLEVBQUgsR0FBUSxHQUFSO0FBQ0FtQyxRQUFBQSxFQUFFLEdBQUcsSUFBSTdVLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVQ7QUFDQXlCLFFBQUFBLEdBQUcsR0FBRzdXLEVBQUUsQ0FBQ21YLEVBQUgsQ0FBTW5DLEVBQU4sQ0FBTjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNbUIsR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLENBQXBCO0FBQ0E3VyxRQUFBQSxFQUFFLENBQUNvWCxFQUFILENBQU1uQyxFQUFOLEVBQVU5VSxFQUFFLENBQUM4VSxFQUFILENBQU02QixHQUFHLENBQUMsQ0FBRCxDQUFULENBQVYsRUFBeUJBLEdBQUcsQ0FBQyxDQUFELENBQTVCO0FBQ0FDLFFBQUFBLEdBQUcsR0FBRy9XLEVBQUUsQ0FBQ21YLEVBQUgsQ0FBTW5DLEVBQU4sQ0FBTjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNcUIsR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLENBQXBCO0FBQ0EvVyxRQUFBQSxFQUFFLENBQUNvWCxFQUFILENBQU1sQyxFQUFOLEVBQVUvVSxFQUFFLENBQUMrVSxFQUFILENBQU04QixHQUFHLENBQUMsQ0FBRCxDQUFULENBQVYsRUFBeUJBLEdBQUcsQ0FBQyxDQUFELENBQTVCO0FBQ0FsRSxRQUFBQSxFQUFFLEdBQUcsSUFBSTNTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVQ7QUFDQXJWLFFBQUFBLEdBQUcsQ0FBQ3NYLENBQUosQ0FBTWhDLEVBQU4sRUFBVUosRUFBVixFQUFjQyxFQUFkLEVBQWtCcEMsRUFBbEI7QUFDQS9TLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTThFLEVBQU4sRUFBVXNDLEVBQUUsQ0FBQyxDQUFELENBQVosRUFBaUJBLEVBQUUsQ0FBQyxDQUFELENBQW5CLEVBQXdCLENBQXhCO0FBQ0F2VSxRQUFBQSxFQUFFLENBQUN3VSxFQUFILEdBQVEsRUFBUjtBQUNBdlYsUUFBQUEsR0FBRyxDQUFDb1csRUFBSixDQUFPclYsRUFBRSxDQUFDd1UsRUFBVixFQUFjdkMsRUFBZCxFQUFrQjVTLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUN3VSxFQUFULEVBQWFuVixFQUFFLENBQUNVLEVBQWhCLEVBQW9CQyxFQUFFLENBQUN3VSxFQUF2QjtBQUNBeFUsUUFBQUEsRUFBRSxDQUFDa1MsRUFBSCxHQUFRLENBQVI7QUFDQUMsUUFBQUEsR0FBRyxHQUFHLElBQUk5UyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsSUFBSSxDQUFwQixDQUFWO0FBQ0E2QixRQUFBQSxLQUFLLEdBQUVoRSxHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0FnRSxRQUFBQSxLQUFLLEdBQUMsUUFBTixHQUFlQSxLQUFLLEdBQUMsUUFBTixHQUFlbFgsR0FBRyxDQUFDNFYsQ0FBSixDQUFNdUIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxJQUFVLE9BQXhCLENBQWYsR0FBZ0RsWCxHQUFHLENBQUM0VixDQUFKLENBQU11QixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxRQUFQLElBQWlCLE9BQS9CLENBQS9ELEdBQXVHbFgsR0FBRyxDQUFDNFYsQ0FBSixDQUFNdUIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsUUFBUCxJQUFpQixPQUEvQixDQUF2RztBQUNBakQsUUFBQUEsR0FBRyxHQUFHaFUsRUFBRSxDQUFDNFYsRUFBSCxDQUFNelYsRUFBRSxDQUFDNlQsR0FBSCxDQUFPLENBQVAsRUFBVWtELEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBTjtBQUNBcFcsUUFBQUEsRUFBRSxDQUFDK1MsR0FBSCxHQUFTRyxHQUFUO0FBQ0FqVSxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDd1UsRUFBaEI7QUFDQXhVLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CaFUsRUFBRSxDQUFDK1MsR0FBdkI7QUFDQS9TLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CaFUsRUFBRSxDQUFDK1MsR0FBdkI7QUFDQSxPQXhCRDs7QUEwQkEsV0FBSzNILEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQytSLEVBQUgsSUFBU3pKLEVBQVQ7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ0QsRUFBVCxFQUFhQyxFQUFFLENBQUN3VSxFQUFoQjtBQUNBeFUsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBL1MsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBLE9BTEQ7O0FBT0EsV0FBSzVHLEVBQUwsR0FBVSxVQUFTOU0sRUFBVCxFQUFhVyxFQUFiLEVBQWlCb00sRUFBakIsRUFBcUI7QUFDOUI2RyxRQUFBQSxHQUFHLEdBQUcsQ0FBTjtBQUNBLFlBQUlqVCxFQUFFLENBQUMrUixFQUFILEdBQVFrQixHQUFaLEVBQWlCLE9BQU8sSUFBUDtBQUNqQixlQUFPLEtBQVA7QUFDQSxPQUpEO0FBT0E7O0FBRUQsU0FBS3BFLEVBQUwsR0FBVSxVQUFTelAsRUFBVCxFQUFhO0FBQ3RCQSxNQUFBQSxFQUFFLENBQUNxUSxFQUFILEdBQVEsU0FBUjtBQUNBclEsTUFBQUEsRUFBRSxDQUFDK1AsRUFBSCxHQUFRLENBQVI7QUFDQS9QLE1BQUFBLEVBQUUsQ0FBQ2dRLGVBQUgsR0FBcUIsR0FBckI7O0FBQ0FoUSxNQUFBQSxFQUFFLENBQUNrVixJQUFILEdBQVUsWUFBVztBQUFFLGVBQU9qVSxJQUFJLENBQUNtVyxNQUFMLEVBQVA7QUFBdUIsT0FBOUM7O0FBQ0FwWCxNQUFBQSxFQUFFLENBQUNxUCxFQUFILENBQU0sSUFBSXFILHdCQUFKLEVBQU47QUFDQSxLQU5EOztBQU9DLFNBQUtPLEVBQUwsR0FBVSxVQUFVblEsQ0FBVixFQUFhO0FBQUssYUFBUUEsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUFWLEdBQWdCQSxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQVYsR0FBY0EsQ0FBcEM7QUFBMkMsS0FBdkU7O0FBRUEsU0FBS29RLEVBQUwsR0FBVSxVQUFVRyxDQUFWLEVBQWFDLElBQWIsRUFBbUJwTCxFQUFuQixFQUF1QjtBQUFLLFVBQUlxTCxRQUFRLEdBQUd0VyxJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSXNMLElBQUksR0FBR3RMLEVBQUUsR0FBR3FMLFFBQWhCO0FBQTZCMVgsTUFBQUEsR0FBRyxDQUFDc1gsQ0FBSixDQUFNRSxDQUFOLEVBQVNDLElBQUksQ0FBQ0MsUUFBRCxDQUFiLEVBQXlCRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFaLENBQTdCLEVBQTZDQyxJQUE3QztBQUF1RCxLQUE1Sjs7QUFFQSxTQUFLOUIsRUFBTCxHQUFVLFVBQVMrQixVQUFULEVBQXFCdkwsRUFBckIsRUFBeUI7QUFBSyxVQUFJcUwsUUFBUSxHQUFHdFcsSUFBSSxDQUFDcUIsS0FBTCxDQUFXNEosRUFBWCxDQUFmO0FBQWtDLFVBQUl3TCxPQUFPLEdBQUdILFFBQVEsR0FBRyxDQUF6QjtBQUErQixhQUFPMVgsR0FBRyxDQUFDeUwsQ0FBSixDQUFNbU0sVUFBVSxDQUFDRixRQUFELENBQWhCLEVBQTRCRSxVQUFVLENBQUNDLE9BQUQsQ0FBdEMsRUFBaUR4TCxFQUFFLEdBQUdxTCxRQUF0RCxDQUFQO0FBQTJFLEtBQXBMO0FBR0Q7O0FBRUQsU0FBTzNYLFdBQVA7QUFDQyxDQXB1REEsQ0FBRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYjI3NzI2Y2UtNDVlYi00NmNmLTg3MDktNDA5YTE0NTRlYzJkXHJcblxyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICAgICAgICAgICAgKHJvb3QuTmV1dHJpbm9FZmZlY3QgPSBleHBvcnRzKVsnRmlyZXdvcmtzMDEnXSA9IGZhY3RvcnkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IChyb290Lk5ldXRyaW5vRWZmZWN0IHx8IChyb290Lk5ldXRyaW5vRWZmZWN0ID0ge30pKTtcclxuICAgICAgICBuYW1lc3BhY2UuX19sYXN0X18gPSBuYW1lc3BhY2VbJ0ZpcmV3b3JrczAxJ10gPSBmYWN0b3J5KCk7XHJcbiAgICB9XHJcbn0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbmZ1bmN0aW9uIEZpcmV3b3JrczAxKGN0eCkge1xyXG5cdHZhciBEYiA9IHRoaXM7XHJcblxyXG5cdHZhciBuZSA9IGZ1bmN0aW9uIChMZCwgQmQpIHtcclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMuQmQgPSBCZDtcclxuXHJcblx0XHRpZiAodGhpcy5CZC53ZS5wZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cclxuXHRcdFx0dGhpcy5MYyA9IFtuZS5wcm90b3R5cGUuRWMsXHJcblx0XHRcdFx0bmUucHJvdG90eXBlLkZjXVt0aGlzLndlLnhlXTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy53ZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRuZS5wcm90b3R5cGUgPSB7XHJcblx0XHRFYzogZnVuY3Rpb24gKGZlLCBBYiwgWGIpIHtcclxuXHRcdFx0dmFyIEdjID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0dmFyIEhjID0gTWF0aC5jb3MoR2MpO1xyXG5cdFx0XHR2YXIgSWMgPSBNYXRoLnNpbihHYyk7XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oeWUgKiBIYywgeWUgKiBJYywgemUgKiAtSWMsIHplICogSGMsIEFiWzBdLCBBYlsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdEZjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeWUgPSBjdHguQWUoWGIuTmRbMF0pO1xyXG5cdFx0XHR2YXIgemUgPSBjdHguQWUoWGIuTmRbMV0pO1xyXG5cdFx0XHRmZS4vKiovdHJhbnNmb3JtKFxyXG5cdFx0XHRcdHllICogKDEuMCAtIDIuMCAqIHFbMV0gKiBxWzFdIC0gejIpLFxyXG5cdFx0XHRcdHllICogKHh5ICsgd3opLFxyXG5cdFx0XHRcdHplICogKHd6IC0geHkpLFxyXG5cdFx0XHRcdHplICogKDIuMCAqIHFbMF0gKiBxWzBdICsgejIgLSAxLjApLFxyXG5cdFx0XHRcdEFiWzBdLCBBYlsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdFBjOiBmdW5jdGlvbiAoZmUsIFhiLCBnZSkge1xyXG5cdFx0XHRYYi52YyhmZSwgLTEsIGdlKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLkJlICE9IG51bGwgJiYgIVhiLm9jKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKFhiLk9kID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0dmFyIERlID0gTWF0aC5mbG9vcihYYi5RYyAlIHRoaXMud2UuUmMpO1xyXG5cdFx0XHRcdFx0XHR2YXIgRWUgPSBNYXRoLmZsb29yKFhiLlFjIC8gdGhpcy53ZS5SYyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgQWIgPSBYYi5BYi5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgTmQgPSBYYi5OZC5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIWdlIHx8IGdlLi8qKi90cmFuc2Zvcm0oQWIsIE5kKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgZGYgPSBNYXRoLmFicyhOZFswXSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGVmID0gTWF0aC5hYnMoTmRbMV0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGYgPiAwLjAwMSAmJiBlZiA+IDAuMDAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5zYXZlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLkxjKGZlLCBBYiwgWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZlLnRyYW5zbGF0ZSgtZGYgKiBYYi5QZFswXSwgLWVmICogKDEgLSBYYi5QZFsxXSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmUuZ2xvYmFsQWxwaGEgKj0gWGIuT2Q7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFhiLmdmWzBdIDwgMC45OTkgfHwgWGIuZ2ZbMV0gPCAwLjk5OSB8fCBYYi5nZlsyXSA8IDAuOTk5KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChkZiA+PSAxICYmIGVmID49IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWWUgPSBkZiA8IHRoaXMuVGMgPyBkZiA6IHRoaXMuVGM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIFplID0gZWYgPCB0aGlzLlVjID8gZWYgOiB0aGlzLlVjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYWYoWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiY29weVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcIm11bHRpcGx5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmZpbGxTdHlsZSA9IGN0eC5mZihYYi5nZik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmZpbGxSZWN0KDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLWF0b3BcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmZS5kcmF3SW1hZ2UoY3R4LmNmLCAwLCAwLCBZZSwgWmUsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZS5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLCAwLCAwLCBkZiwgZWYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZlLnJlc3RvcmUoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFhiLnZjKGZlLCAxLCBnZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdEhkOiBmdW5jdGlvbiAoZmUsIGdlKSB7XHJcblx0XHRcdGZlLnNhdmUoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblx0XHRcdFx0ZmUuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdGhpcy5MZC5tYXRlcmlhbHNbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0ubWF0ZXJpYWxJbmRleF07XHJcblx0XHRcdFx0dGhpcy5CZSA9IHRoaXMuTGQudGV4dHVyZURlc2NzW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLnRleHR1cmVJbmRpY2VzWzBdXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLkJlID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuQmUpIHtcclxuXHRcdFx0XHR0aGlzLlRjID0gdGhpcy5CZS53aWR0aCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0dGhpcy5VYyA9IHRoaXMuQmUuaGVpZ2h0IC8gdGhpcy53ZS5TYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24ga2QoYSwgYikge1xyXG5cdFx0XHRcdGlmIChhLkFiWzJdID4gYi5BYlsyXSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChhLkFiWzJdIDwgYi5BYlsyXSlcclxuXHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpdGNoICh0aGlzLkJkLlZjKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChrZCk7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIG9lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMuQmQgPSBCZDtcclxuXHJcblx0XHRpZiAodGhpcy5CZC53ZS5wZS5sZW5ndGggPiAwKVxyXG5cdFx0XHR0aGlzLndlID0gdGhpcy5CZC53ZS5wZVswXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy53ZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy52ZXJ0ZXggPSBbXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfV07XHJcblx0fVxyXG5cclxuXHRvZS5wcm90b3R5cGUgPSB7XHJcblx0XHRxZTogZnVuY3Rpb24gKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0WGIuQ2UoLTEsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAoIVhiLm9jKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHYwID0gdGhpcy52ZXJ0ZXhbMF07XHJcblx0XHRcdFx0XHR2YXIgdjEgPSB0aGlzLnZlcnRleFsxXTtcclxuXHRcdFx0XHRcdHZhciB2MiA9IHRoaXMudmVydGV4WzJdO1xyXG5cdFx0XHRcdFx0dmFyIHYzID0gdGhpcy52ZXJ0ZXhbM107XHJcblxyXG5cdFx0XHRcdFx0dmFyIEZlID0gW10sIEdlID0gW107XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMud2UueGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgYSA9IGN0eC5pYihYYi5NZCk7XHJcblx0XHRcdFx0XHRcdHZhciBzID0gLU1hdGguc2luKGEpO1xyXG5cdFx0XHRcdFx0XHR2YXIgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSBzZVswXSAqIGMgKyByZVswXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzFdID0gc2VbMV0gKiBjICsgcmVbMV0gKiBzO1xyXG5cdFx0XHRcdFx0XHRGZVsyXSA9IHNlWzJdICogYyArIHJlWzJdICogcztcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0gLXNlWzBdICogcyArIHJlWzBdICogYztcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAtc2VbMV0gKiBzICsgcmVbMV0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IC1zZVsyXSAqIHMgKyByZVsyXSAqIGM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIHEgPSBYYi5NYztcclxuXHRcdFx0XHRcdFx0dmFyIHoyID0gMi4wICogcVsyXSAqIHFbMl07XHJcblx0XHRcdFx0XHRcdHZhciB4eSA9IDIuMCAqIHFbMF0gKiBxWzFdO1xyXG5cdFx0XHRcdFx0XHR2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHJcblx0XHRcdFx0XHRcdEZlWzBdID0gMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MjtcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSB4eSArIHd6O1xyXG5cdFx0XHRcdFx0XHRGZVsyXSA9IDIuMCAqIHFbMF0gKiBxWzJdIC0gMi4wICogcVszXSAqIHFbMV07XHJcblxyXG5cdFx0XHRcdFx0XHRHZVswXSA9IHh5IC0gd3o7XHJcblx0XHRcdFx0XHRcdEdlWzFdID0gMS4wIC0gMi4wICogcVswXSAqIHFbMF0gLSB6MjtcclxuXHRcdFx0XHRcdFx0R2VbMl0gPSAyLjAgKiBxWzFdICogcVsyXSArIDIuMCAqIHFbM10gKiBxWzBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBIZSA9IFtdLCBJZSA9IFtdLCBKZSA9IFtdLCBLZSA9IFtdO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSGUsIEZlLCAtWGIuTmRbMF0gKiBYYi5QZFswXSk7XHJcblx0XHRcdFx0XHRjdHgudShJZSwgRmUsIFhiLk5kWzBdICogKDEuMCAtIFhiLlBkWzBdKSk7XHJcblx0XHRcdFx0XHRjdHgudShKZSwgR2UsIC1YYi5OZFsxXSAqIFhiLlBkWzFdKTtcclxuXHRcdFx0XHRcdGN0eC51KEtlLCBHZSwgWGIuTmRbMV0gKiAoMS4wIC0gWGIuUGRbMV0pKTtcclxuXHJcblx0XHRcdFx0XHRjdHguYyh2MC4vKiovcG9zaXRpb24sIEhlLCBKZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MC4vKiovcG9zaXRpb24sIHYwLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjEuLyoqL3Bvc2l0aW9uLCBIZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjEuLyoqL3Bvc2l0aW9uLCB2MS4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYyLi8qKi9wb3NpdGlvbiwgSWUsIEtlKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYyLi8qKi9wb3NpdGlvbiwgdjIuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2My4vKiovcG9zaXRpb24sIEllLCBKZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2My4vKiovcG9zaXRpb24sIHYzLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIHJnYiA9IGN0eC52KFhiLmdmLCAyNTUpO1xyXG5cdFx0XHRcdFx0XHR2MC4vKiovY29sb3IgPSB2MS4vKiovY29sb3IgPSB2Mi4vKiovY29sb3IgPSB2My4vKiovY29sb3IgPSBbcmdiWzBdLCByZ2JbMV0sIHJnYlsyXSwgWGIuT2QgKiAyNTVdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIERlID0gTWF0aC5mbG9vcihYYi5RYyAlIHRoaXMud2UuUmMpO1xyXG5cdFx0XHRcdFx0XHR2YXIgRWUgPSBNYXRoLmZsb29yKFhiLlFjIC8gdGhpcy53ZS5SYyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgUGUsIFFlLCBSZSwgU2U7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgV2UgPSB0aGlzLkxkLnRleHR1cmVzUmVtYXBbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHRcdFx0XHRpZiAoV2UpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSBXZS53aWR0aCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFZlID0gV2UuaGVpZ2h0IC8gdGhpcy53ZS5TYztcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFBlID0gV2UueCArIERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoV2UueSArIFdlLmhlaWdodCAtIEVlICogVmUpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBTZSA9IFJlIC0gVmU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFVlID0gMS4wIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSAxLjAgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBEZSAqIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBRZSA9IFBlICsgVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFJlID0gKDEuMCAtIEVlICogVmUpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBTZSA9IFJlIC0gVmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHYwLi8qKi90ZXhDb29yZHNbMF0gPSBbUGUsIFNlXTtcclxuXHRcdFx0XHRcdFx0djEuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgUmVdO1xyXG5cdFx0XHRcdFx0XHR2Mi4vKiovdGV4Q29vcmRzWzBdID0gW1FlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYzLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFNlXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAocmVuZGVyQnVmZmVyLmJlZm9yZVF1YWQpIHtcclxuXHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLmJlZm9yZVF1YWQodGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2MCk7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2MSk7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2Mik7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2Myk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG5ldyBjdHguUmVuZGVyQ2FsbCgwLCA2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxhc3RSZW5kZXJDYWxsID0gcmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGw7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGFzdFJlbmRlckNhbGwucmVuZGVyU3R5bGVJbmRleCA9PSB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRsYXN0UmVuZGVyQ2FsbC5udW1JbmRpY2VzICs9IDY7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKGxhc3RSZW5kZXJDYWxsKTtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG5ldyBjdHguUmVuZGVyQ2FsbChcclxuXHRcdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLnN0YXJ0SW5kZXggKyBsYXN0UmVuZGVyQ2FsbC5udW1JbmRpY2VzLFxyXG5cdFx0XHRcdFx0XHRcdFx0NiwgdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIuQ2UoMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dWU6IGZ1bmN0aW9uIChzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0c3dpdGNoICh0aGlzLkJkLlZjKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUodGhpcy5CZC50Y1tXYl0sIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSB0aGlzLkJkLnRjLmxlbmd0aDsgV2ItLSA+IDA7KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUodGhpcy5CZC50Y1tXYl0sIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHRYYi5kZXB0aCA9IGN0eC5IKHRlLCBYYi5BYik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGEuZGVwdGggPCBiLmRlcHRoKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA+IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuZm9yRWFjaChmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZShYYiwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBsZCA9IGZ1bmN0aW9uIChMZCwgd2UsIHZlKSB7XHJcblx0XHR2YXIgVmIgPSB0aGlzO1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy53ZSA9IHdlO1xyXG5cclxuXHRcdC8vIEViXHJcblxyXG5cdFx0ZnVuY3Rpb24gRWIoKSB7XHJcblx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR0aGlzLkdiID0gMTtcclxuXHRcdFx0dGhpcy5IYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuSWIgPSBudWxsO1xyXG5cdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0dGhpcy5MYiA9IDE7XHJcblxyXG5cdFx0XHRWYi53ZS5NYih0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk9iID0gdGhpcy5HYjtcclxuXHRcdFx0XHR0aGlzLkZiID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdEViLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0SmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk5iKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHRcdFx0XHRWYi53ZS5QYihRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHZhciBSYiA9IFZiLlJiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIFNiID0gUWI7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuemIgPiAwLjAwMDAwMSkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuT2IgKyBRYiAqIHRoaXMuemI7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKFRiID49IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgVWIgPSB0aGlzLnpiIDwgMC4wMDEgPyAwLjAgOiAoMS4wIC0gdGhpcy5PYikgLyB0aGlzLnpiO1xyXG5cdFx0XHRcdFx0XHRTYiAtPSBVYjtcclxuXHRcdFx0XHRcdFx0UmIgKz0gVWI7XHJcblx0XHRcdFx0XHRcdHN5c3RlbVRpbWUgKz0gVWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5IYiAhPSBudWxsICYmIFJiID4gdGhpcy5IYikge1xyXG5cdFx0XHRcdFx0XHRcdFZiLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0gUmI7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gc3lzdGVtVGltZTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChBYiAmJiBRYiA+IDApXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKFZiLkFiLCBBYiwgVmIuQmIsIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKE1jICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguc2xlcnBxKFZiLk1jLCBNYywgVmIucHJldlJvdGF0aW9uLCBTYiAvIFFiKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGZvciB0aGUgZnV0dXJlIHdoZW4gSmIgd291bGQgYmUgZXh0ZXJuYWxcclxuXHRcdFx0XHRcdFx0dGhpcy5MYiA9IHRoaXMuSmI7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5KYjsgKytXYikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChWYi5zYy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5KYiA9PSAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IFdiIC8gKHRoaXMuSmIgLSAxKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFhiID0gVmIuc2MucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0VmIudGMudW5zaGlmdChYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChXYiA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWWIoKTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5aYigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRYYi5JZChTYik7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5PYiA9IDAuMDtcclxuXHRcdFx0XHRcdFx0VGIgLT0gMS4wO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuSWIgIT0gbnVsbCAmJiArK3RoaXMuRmIgPj0gdGhpcy5JYikge1xyXG5cdFx0XHRcdFx0XHRcdFZiLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLk9iID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFJiICs9IFNiO1xyXG5cdFx0XHRcdFZiLlJiID0gUmI7XHJcblxyXG5cdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBBYik7XHJcblxyXG5cdFx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRcdGN0eC5VKFZiLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFjXHJcblxyXG5cdFx0ZnVuY3Rpb24gYWMoKSB7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0dGhpcy5MYiA9IDE7XHJcblxyXG5cdFx0XHRWYi53ZS5NYih0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmJjID0gdGhpcy5HYjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFjLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0SmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk5iKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHRcdFx0XHRWYi53ZS5QYihRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHZhciBjYyA9IFZiLlJiO1xyXG5cdFx0XHRcdHZhciBkYyA9IGNjICsgUWI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVCZWZvcmVGcmFtZSA9IExkLlJiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSA9IHN5c3RlbVRpbWVCZWZvcmVGcmFtZSArIFFiO1xyXG5cdFx0XHRcdHZhciBlYyA9IEFiID8gY3R4Lk8oY3R4LmgoQWIsIFZiLkJiKSkgOiAwO1xyXG5cdFx0XHRcdHZhciBpYyA9IDA7XHJcblxyXG5cdFx0XHRcdGlmIChlYyA+IDAuMDAwMDAxKSB7XHJcblx0XHRcdFx0XHR2YXIgZmMgPSBlYyAvIHRoaXMucmQ7XHJcblx0XHRcdFx0XHR2YXIgVGIgPSB0aGlzLmJjICsgZmM7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGhjID0gZmMgPCAwLjAwMSA/XHJcblx0XHRcdFx0XHRcdDEuMCAtIHRoaXMuYmMgOiAoMS4wIC0gdGhpcy5iYykgLyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgamMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPiAxLjApIHtcclxuXHRcdFx0XHRcdFx0dmFyIGtjID0gY2MgKyBoYyAqIFFiO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5hYihqYywgVmIuQmIsIEFiLCBoYyk7XHJcblxyXG5cdFx0XHRcdFx0XHRWYi5SYiA9IGtjO1xyXG5cdFx0XHRcdFx0XHRjdHguVChWYi5BYiwgamMpO1xyXG5cdFx0XHRcdFx0XHRMZC5SYiA9IGN0eC5YKHN5c3RlbVRpbWVCZWZvcmVGcmFtZSwgc3lzdGVtVGltZUFmdGVyRnJhbWUsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGZvciB0aGUgZnV0dXJlIHdoZW4gSmIgd291bGQgYmUgZXh0ZXJuYWxcclxuXHRcdFx0XHRcdFx0dGhpcy5MYiA9IHRoaXMuSmI7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5KYjsgKytXYikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChWYi5zYy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5KYiA9PSAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IFdiIC8gKHRoaXMuSmIgLSAxKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFhiID0gVmIuc2MucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0VmIudGMudW5zaGlmdChYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChXYiA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWWIoKTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5aYigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRYYi5JZChRYiAqICgxLjAgLSBoYykpO1xyXG5cdFx0XHRcdFx0XHRcdCsraWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGhjICs9IDEuMCAvIGZjO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5iYyA9IFRiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0VmIuUmIgPSBkYztcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWNcclxuXHJcblx0XHRmdW5jdGlvbiBtYygpIHtcclxuXHRcdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0XHR0aGlzLlBkID0gW107XHJcblx0XHRcdHRoaXMuTmQgPSBbXTtcclxuXHRcdFx0dGhpcy5nZiA9IFtdO1xyXG5cdFx0XHR0aGlzLktjID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0bWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRuYzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMub2MgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cdFx0XHRcdFx0cGMuQmQuSmQodGhpcy5BYiwgbnVsbCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHBjLkFkLnNkKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFliOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0VmIud2UuZmQoVmIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHRcdFx0dGhpcy5uYygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WmI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5nZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiKSB7XHJcblx0XHRcdFx0VmIud2UucWMoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR0aGlzLnJjKFFiKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHBjOiBmdW5jdGlvbiAoamUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5LY1tqZV0uQmQ7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyYzogZnVuY3Rpb24gKFFiKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLklkKFFiLCB0aGlzLkFiLCBudWxsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1YzogZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0XHRcdHRoaXMuS2MucHVzaCh7XHJcblx0XHRcdFx0XHRCZDogbmV3IGxkKExkLCBtZCwgdmUpLFxyXG5cdFx0XHRcdFx0QWQ6IG5kXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR2YzogZnVuY3Rpb24gKGZlLCB4YywgZ2UpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhjID09IHBjLkFkLnhjKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5IZChmZSwgZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdENlOiBmdW5jdGlvbiAoeGMsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLnVlKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0d2M6IGZ1bmN0aW9uIChmZSkge1xyXG5cdFx0XHRcdHRoaXMub2MgPSB0cnVlO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpIHtcclxuXHRcdFx0XHRcdFx0cGMuQmQuYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0cGMuQmQuSWQoMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0eWM6IGZ1bmN0aW9uIChHZCkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dGhpcy5LY1tpXS5CZC5FZChHZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gemNcclxuXHJcblx0XHRmdW5jdGlvbiB6YygpIHtcclxuXHRcdH1cclxuXHJcblx0XHR6Yy5wcm90b3R5cGUuQWMgPSBmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0cmV0dXJuIFZiLndlLkNjKFZiLCBYYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdH1cclxuXHJcblx0XHQvLyBsZCBBZFxyXG5cclxuXHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdHRoaXMuQmIgPSBbXTtcclxuXHRcdHRoaXMuTWMgPSBbXTtcclxuXHRcdHRoaXMucHJldlJvdGF0aW9uID0gW107XHJcblx0XHR0aGlzLnRjID0gW107XHJcblx0XHR0aGlzLnNjID0gW107XHJcblx0XHR0aGlzLldjID0gbmV3IHpjKCk7XHJcblx0XHR0aGlzLmNvbnN0cnVjdCA9IG5ldyB2ZSh0aGlzLkxkLCB0aGlzKTtcclxuXHRcdHRoaXMuWWMgPSBbXTtcclxuXHRcdHRoaXMuYWQgPSBbXTtcclxuXHJcblx0XHR0aGlzLmRkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IEViKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5lZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy52ZCA9IG5ldyBhYygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2UudWQodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5qZDsgKytXYikge1xyXG5cdFx0XHR2YXIgWGIgPSBuZXcgbWMoKTtcclxuXHJcblx0XHRcdGZvciAodmFyIGlkID0gMDsgaWQgPCB0aGlzLlljLmxlbmd0aDsgKytpZCkge1xyXG5cdFx0XHRcdHZhciBoZCA9IHRoaXMuWWNbaWRdO1xyXG5cdFx0XHRcdFhiLnVjKGhkLkRiLCBoZC5BZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2MucHVzaChYYik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5OYiA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiID8gQWIgOiBbMCwgMCwgMF0pO1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMgPyBNYyA6IFswLCAwLCAwLCAxXSk7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHJcblx0XHRcdHRoaXMuUmIgPSAwLjA7XHJcblx0XHRcdHRoaXMud2QgPSAwLjA7XHJcblx0XHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnBhdXNlZF8gPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5KZCA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdHRoaXMuTmIoQWIsIE1jKTtcclxuXHJcblx0XHR0aGlzLnNjLnB1c2guYXBwbHkodGhpcy5zYywgdGhpcy50Yyk7XHJcblx0XHR0aGlzLnRjLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0dGhpcy52ZC5KZCgpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLklkID0gZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHJcblx0XHRpZiAodGhpcy5wYXVzZWRfKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLlRkKEFiLCBNYyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLndkID0gdGhpcy5SYjtcclxuXHJcblx0XHRpZiAoQWIpIHtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGlmIChRYiA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdHZhciBzaGlmdCA9IFtdO1xyXG5cdFx0XHRcdGN0eC5nKHNoaWZ0LCBBYiwgdGhpcy5CYik7XHJcblx0XHRcdFx0Y3R4LlQodGhpcy5hZCwgc2hpZnQpO1xyXG5cdFx0XHRcdGN0eC53KHRoaXMuYWQsIHRoaXMuYWQsIFFiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChNYylcclxuXHRcdHtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpYztcclxuXHJcblx0XHRpZiAodGhpcy5aYyAmJiAhdGhpcy5nZW5lcmF0b3JzUGF1c2VkXykge1xyXG5cdFx0XHRpYyA9IHRoaXMudmQuSWQoUWIsIEFiLCBNYyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiKTtcclxuXHJcblx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRpYyA9IDA7XHJcblx0XHRcdHRoaXMuUmIgKz0gUWI7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICh2YXIgV2IgPSBpYzsgV2IgPCB0aGlzLnRjLmxlbmd0aDspIHtcclxuXHRcdFx0dmFyIFhiID0gdGhpcy50Y1tXYl07XHJcblxyXG5cdFx0XHRpZiAoIVhiLm9jKSB7XHJcblx0XHRcdFx0WGIuSWQoUWIpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5XYy5BYyh0aGlzLnRjW1diXSkpIHtcclxuXHRcdFx0XHRcdFhiLndjKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMueGQoV2IpKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0WGIucmMoUWIpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0KytXYjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRsZC5wcm90b3R5cGUueGQgPSBmdW5jdGlvbiAoamUpIHtcclxuXHRcdHZhciBYYiA9IHRoaXMudGNbamVdO1xyXG5cclxuXHRcdHZhciByZWFkeSA9IHRydWU7XHJcblxyXG5cdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IFhiLktjLmxlbmd0aDsgKytpZCkge1xyXG5cdFx0XHR2YXIgQmQgPSBYYi5LY1tpZF0uQmQ7XHJcblxyXG5cdFx0XHRpZiAoQmQuYWN0aXZhdGVkKCkgfHwgQmQudGMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHJlYWR5ID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocmVhZHkpIHtcclxuXHRcdFx0dGhpcy5zYy5wdXNoKHRoaXMudGNbamVdKTtcclxuXHRcdFx0dGhpcy50Yy5zcGxpY2UoamUsIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSGQgPSBmdW5jdGlvbiAoZmUsIGdlKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC5IZChmZSwgZ2UpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVlID0gZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5UZCA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChNYykge1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS51YyA9IGZ1bmN0aW9uIChtZCwgbmQpIHtcclxuXHRcdHRoaXMuWWMucHVzaCh7IERiOiBtZCwgQWQ6IG5kIH0pO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3VucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnBhdXNlZF8gPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2VHZW5lcmF0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZW5lcmF0b3JzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF87XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLlpjID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5kaXNhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5aYztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovZ2V0TnVtUGFydGljbGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGMubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0dmFyIGtlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIENiID0gdGhpcztcclxuXHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIHZlLCBvcHRpb25zKSB7XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsID0gd2U7XHJcblxyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuTWMgPSBbXTtcclxuXHJcblx0XHRcdC8vIGtlIEFkXHJcblxyXG5cdFx0XHR0aGlzLm9kID0gW107XHJcblxyXG5cdFx0XHR0aGlzLnBkID0gZnVuY3Rpb24gKG1kKSB7XHJcblx0XHRcdFx0dmFyIEJkID0gbmV3IGxkKHRoaXMsIG1kLCB2ZSk7XHJcblx0XHRcdFx0QmQuTmIodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdFx0dGhpc1tcIl9cIi5jb25jYXQobWQubmFtZSldID0gQmQ7XHJcblx0XHRcdFx0dGhpcy5vZC5wdXNoKEJkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdFx0XHR0aGlzLkNkID0gMC4wO1xyXG5cdFx0XHRcdHRoaXMuUmIgPSAwLjA7XHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdFx0Y3R4LlUodGhpcy5NYywgTWMgPyBNYyA6IFswLCAwLCAwLCAxXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoQWIsIE1jKTtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwucWQodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy4vKiovcGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5wYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVGaXhlZCh0aGlzLlVkLCBBYiwgTWMsIHRoaXMucHJlc2ltRnJhbWVUaW1lKTtcclxuXHRcdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXN0YXJ0ID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cclxuXHRcdHRoaXMuTmIoLyoqL3Bvc2l0aW9uID8gLyoqL3Bvc2l0aW9uIDogdGhpcy5BYiwgLyoqL3JvdGF0aW9uID8gLyoqL3JvdGF0aW9uIDogdGhpcy5NYyk7XHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkpkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCh0aGlzLlVkLCB0aGlzLkFiLCB0aGlzLk1jLCB0aGlzLnByZXNpbUZyYW1lVGltZSk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnplcm9VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgwLCB0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdXBkYXRlID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdGlmICh0aGlzLkRkID4gMC4wKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZUZpeGVkKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIHRoaXMuRGQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnVwZGF0ZUZsZXgoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUudXBkYXRlRml4ZWQgPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL2ZyYW1lVGltZSkge1xyXG5cdFx0dmFyIHVwZGF0ZWRUaW1lID0gMC4wO1xyXG5cdFx0dmFyIGhjID0gW107XHJcblx0XHRjdHguVChoYywgdGhpcy5BYik7XHJcblx0XHR2YXIgZnJhbWVSb3RhdGlvbiA9IFtdO1xyXG5cdFx0Y3R4LlUoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbiAmJiBjdHguZXF1YWx2M18oLyoqL3Bvc2l0aW9uLCB0aGlzLkFiKSlcclxuXHRcdFx0LyoqL3Bvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uICYmIGN0eC5lcXVhbHFfKC8qKi9yb3RhdGlvbiwgdGhpcy5NYykpXHJcblx0XHRcdC8qKi9yb3RhdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0d2hpbGUgKCgvKiovZHQgLSB1cGRhdGVkVGltZSkgKyB0aGlzLkNkID49IC8qKi9mcmFtZVRpbWUpIHtcclxuXHRcdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdFx0Y3R4LmFiKGhjLCB0aGlzLkFiLCAvKiovcG9zaXRpb24sIHVwZGF0ZWRUaW1lIC8gLyoqL2R0KTtcclxuXHJcblx0XHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdFx0Y3R4LnNsZXJwcShmcmFtZVJvdGF0aW9uLCB0aGlzLk1jLCAvKiovcm90YXRpb24sIHVwZGF0ZWRUaW1lIC8gLyoqL2R0KTtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV0uSWQoLyoqL2ZyYW1lVGltZSwgaGMsIGZyYW1lUm90YXRpb24pO1xyXG5cclxuXHRcdFx0XHR0aGlzLlJiID0gY2M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZWRUaW1lICs9IC8qKi9mcmFtZVRpbWUgLSB0aGlzLkNkO1xyXG5cdFx0XHR0aGlzLkNkID0gMC4wO1xyXG5cdFx0XHR0aGlzLlJiID0gY2MgKyAvKiovZnJhbWVUaW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHR0aGlzLkNkICs9IC8qKi9kdCAtIHVwZGF0ZWRUaW1lO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZsZXggPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUmIgPSBjYyArIC8qKi9kdDtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3Jlc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uVGQodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3NldFByb3BlcnR5SW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgvKiovbmFtZSwgLyoqL3ZhbHVlKSB7XHJcblx0XHR2YXIgcHJvcE5hbWUgPSBcIl9cIi5jb25jYXQoLyoqL25hbWUpO1xyXG5cclxuXHRcdGlmICgvKiovdmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRpZiAoLyoqL3ZhbHVlLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHRjdHguUyh0aGlzLm9kW2ldW3Byb3BOYW1lXSwgLyoqL3ZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHRjdHguVCh0aGlzLm9kW2ldW3Byb3BOYW1lXSwgLyoqL3ZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldW3Byb3BOYW1lXSA9IC8qKi92YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9wYXVzZUFsbEVtaXR0ZXJzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdW5wYXVzZUFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3VucGF1c2UoKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9wcmVzaW1OZWVkZWQpIHtcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCh0aGlzLlVkLCB0aGlzLkFiLCB0aGlzLk1jLCB0aGlzLnByZXNpbUZyYW1lVGltZSk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVBbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0ucGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0uZ2VuZXJhdG9yc1BhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBudW1QYXJ0aWNsZXMgPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRudW1QYXJ0aWNsZXMgKz0gdGhpcy5vZFtpXS5nZXROdW1QYXJ0aWNsZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVtUGFydGljbGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdHZhciBsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgcmVuZGVyQnVmZmVyLCBvcHRpb25zKSB7XHJcblx0XHRcdGxlLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG9lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZXNSZW1hcCA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgdmVyRGlzcDtcclxuXHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy4vKiovbW9kZWwuWGU7ICsrV2IpIHtcclxuXHRcdFx0XHRcdHZlckRpc3AgPSBXYiAqIDQ7XHJcblx0XHRcdFx0XHRpbmRpY2VzLnB1c2godmVyRGlzcCArIDAsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlciA9IHJlbmRlckJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuaW5pdGlhbGl6ZSh0aGlzLi8qKi9tb2RlbC5YZSAqIDQsIFsyXSwgaW5kaWNlcywgdGhpcy4vKiovbW9kZWwuWGUpO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX251bUluZGljZXMgPSAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdGxlLnByb3RvdHlwZS4vKiovZmlsbEdlb21ldHJ5QnVmZmVycyA9IGZ1bmN0aW9uICgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpcikge1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuY2xlYW51cCgpO1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vZC5mb3JFYWNoKGZ1bmN0aW9uIChCZCkge1xyXG5cdFx0XHRCZC51ZSgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpciwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpO1xyXG5cdH1cclxuXHJcblx0dmFyIG1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCBvcHRpb25zKSB7XHJcblx0XHRcdG1lLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG5lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMubWF0ZXJpYWxzID0gW107XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLm1hdGVyaWFscy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goWydzb3VyY2Utb3ZlcicsICdsaWdodGVyJywgJ211bHRpcGx5J11bdmFsdWVdKTtcclxuXHRcdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0XHR0aGlzLi8qKi90ZXh0dXJlRGVzY3MgPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRtZS5wcm90b3R5cGUuLyoqL2RyYXcgPSBmdW5jdGlvbiAoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkhkKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlV0dMSW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbGUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZUNhbnZhczJESW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbWUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cdHRoaXMudGV4dHVyZXMgPSBbJ2Z4L2ZpcmV3b3Jrcy9zcGFya3M1eDNfbG9uZy5wbmcnLCdmeC9maXJld29ya3Mvc3BhcmtzMngzX3Zpb2xldC5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFsxLDBdO1xyXG5cdHRoaXMucmVuZGVyU3R5bGVzID0gW3ttYXRlcmlhbEluZGV4OjAsdGV4dHVyZUluZGljZXM6WzBdfSx7bWF0ZXJpYWxJbmRleDoxLHRleHR1cmVJbmRpY2VzOlsxXX1dO1xyXG5cdHRoaXMuWGUgPSA5MDYwMDtcclxuXHJcblx0ZnVuY3Rpb24gRW1pdHRlcl9TdHJpcGVfY2hpbGQoKSB7XHJcblxyXG5cdFx0dmFyIF8xID0gW10sIF81ID0gW10sIF83ID0gW10sIF85ID0gW10sIF8xMD1bXSwgXzEwZnM9W10sIF8xMHZzPVtdLCBfMTBydz1bXSwgXzEwcnduPVtdLCBfMTByd2wsIF8xMHY9W10sIF8xMHA9W10sIF8xMGR0bCwgXzEwZHRwLCBfMTBkZiwgXzEwZnNkPVtdLCBfMTI9W10sIF8xMmk9W10sIF8xMywgXzExLCBfMTQsIF8xNSwgXzE1aTAsIF8xNXMwID0gW10sIF8xNiwgXzE3LCBfMTdpMCwgXzE3czAgPSBbXSwgXzE4LCBfMThpMCwgXzE4czAgPSBbXSwgXzE5O1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MSxSYzo1LFNjOjMscmVuZGVyU3R5bGVJbmRleDowfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIlN0cmlwZV9jaGlsZFwiO1xyXG5cclxuXHRcdHRoaXMudWQgPSBmdW5jdGlvbihCZCkge1xyXG5cdFx0XHRCZC5fUm90YXRpb24gPSBbMCwwLDAsMV07XHJcblx0XHRcdEJkLl9UZXh0dXJlID0gMDtcclxuXHRcdFx0QmQuZWQoKTtcclxuXHRcdFx0QmQuXzE1ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLjQ4MTc3LDAuOTM0NzgyLDAuOTgyNzA4LDAuOTY4MTksMC45MjM0NTcsMC44NjA5ODcsMC43ODcyMTEsMC43MDYwMDcsMC42MTk5NjQsMC41MzA5NDQsMC40NDAzODEsMC4zNDk0MzEsMC4yNTkwNzYsMC4xNzAxODgsMC4wODM1NzE2LDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8xNyA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMSwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTggPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsMi4wNjU3LDIuNzg5MjksMy4yODU3MiwzLjY2MTgxLDMuOTU5MTYsNC4xOTkyLDQuMzk0NjksNC41NTQwMSw0LjY4Mjk4LDQuNzg1ODQsNC44NjU4Miw0LjkyNTQxLDQuOTY2NjEsNC45OTEwMyw1LDVdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5qZCA9IDMwMDtcclxuXHRcdFx0QmQuVmMgPSAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuTWIgPSBmdW5jdGlvbih2ZCkge1xyXG5cdFx0XHR2ZC5yZCA9IDE7XHJcblx0XHRcdHZkLkdiID0gMTtcclxuXHRcdFx0dmQuSmIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUGIgPSBmdW5jdGlvbihRYiwgQmQsIHZkKSB7XHJcblx0XHRcdHZkLnJkID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLk1jPVtdO1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgXzEpO1xyXG5cdFx0XHRYYi5fMyA9IDA7XHJcblx0XHRcdFhiLl80ID0gW107XHJcblx0XHRcdGN0eC5VKFhiLl80LCBCZC5fUm90YXRpb24pO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF81LCAxLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzYgPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzYsIF81KTtcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfNywgMTAsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fOCA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fOCwgXzcpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2QgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuTWM9W107XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LmMoWGIuXzIsIEJkLkFiLCBfMSk7XHJcblx0XHRcdFhiLl8zID0gMDtcclxuXHRcdFx0WGIuXzQgPSBbXTtcclxuXHRcdFx0Y3R4LlUoWGIuXzQsIEJkLl9Sb3RhdGlvbik7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzUsIDEsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fNiA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fNiwgXzUpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF83LCAxMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl84ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl84LCBfNyk7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyArPSBRYjtcclxuXHRcdFx0Y3R4LlcoXzksIDAsIDUwLCAwKTtcclxuXHRcdFx0Y3R4LlQoXzEwZnMsIF85KTtcclxuXHRcdFx0Y3R4LlQoXzEwdnMsIFswLDAsMF0pO1xyXG5cdFx0XHRfMTBkdGwgPSBRYjtcclxuXHRcdFx0Y3R4LlQoXzEwdiwgWGIuXzgpO1xyXG5cdFx0XHRjdHguVChfMTBwLCBYYi5fMik7XHJcblx0XHRcdHdoaWxlIChfMTBkdGwgPiAwLjAwMDEpIHtcclxuXHRcdFx0XHRfMTBkdHAgPSBfMTBkdGw7XHJcblx0XHRcdFx0Y3R4LlQoXzEwZnNkLCBfMTBmcyk7XHJcblx0XHRcdFx0Y3R4LmcoXzEwcncsIF8xMHZzLCBfMTB2KTtcclxuXHRcdFx0XHRfMTByd2wgPSBjdHguUChfMTBydyk7XHJcblx0XHRcdFx0aWYgKF8xMHJ3bCA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdFx0XzEwcndsID0gTWF0aC5zcXJ0KF8xMHJ3bCk7XHJcblx0XHRcdFx0XHRjdHgudyhfMTByd24sIF8xMHJ3LCBfMTByd2wpO1xyXG5cdFx0XHRcdFx0XzEwZGYgPSAwLjAxICogMSAqIF8xMHJ3bDtcclxuXHRcdFx0XHRcdGlmIChfMTBkZiAqIF8xMGR0cCA+IDAuMilcclxuXHRcdFx0XHRcdFx0XzEwZHRwID0gMC4yIC8gXzEwZGY7XHJcblx0XHRcdFx0XHRjdHguYyhfMTBmc2QsIF8xMGZzZCwgY3R4LnYoXzEwcnduLCBfMTByd2wgKiBfMTBkZikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguYyhfMTB2LCBfMTB2LCBjdHgudihfMTBmc2QsIF8xMGR0cCkpO1xyXG5cdFx0XHRcdGN0eC5jKF8xMHAsIF8xMHAsIGN0eC52KF8xMHYsIF8xMGR0cCkpO1xyXG5cdFx0XHRcdF8xMGR0bCAtPSBfMTBkdHA7XHJcblx0XHRcdH1cclxuXHRcdFx0Y3R4LlQoWGIuXzIsIF8xMHApO1xyXG5cdFx0XHRjdHguVChYYi5fOCwgXzEwdik7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHRcdGN0eC5RKF8xMmksIFhiLl82KTtcclxuXHRcdFx0Y3R4LnFiKF8xMiwgXzEyaSwgWGIuXzMpO1xyXG5cdFx0XHRfMTMgPSA3O1xyXG5cdFx0XHRfMTEgPSAxO1xyXG5cdFx0XHRfMTQgPSAoWGIuXyAvIF8xMSk7XHJcblx0XHRcdF8xNWkwPShfMTQ8MD8wOihfMTQ+MT8xOl8xNCkpO1xyXG5cdFx0XHRjdHguVihfMTVzMCwwLChfMTVpMC0wKSoxNSk7XHJcblx0XHRcdF8xNSA9IERiLm5iKEJkLl8xNVswXVtfMTVzMFswXV0sXzE1czBbMV0pO1xyXG5cdFx0XHRfMTYgPSAoXzEzICogXzE1KTtcclxuXHRcdFx0XzE3aTA9KF8xNDwwPzA6KF8xND4xPzE6XzE0KSk7XHJcblx0XHRcdGN0eC5WKF8xN3MwLDAsKF8xN2kwLTApKjEpO1xyXG5cdFx0XHRfMTcgPSBEYi5uYihCZC5fMTdbMF1bXzE3czBbMF1dLF8xN3MwWzFdKTtcclxuXHRcdFx0XzE4aTA9KF8xNDwwPzA6KF8xND4xPygwKygoXzE0LTApJTEpKTpfMTQpKTtcclxuXHRcdFx0Y3R4LlYoXzE4czAsMCwoXzE4aTAtMCkqMTUpO1xyXG5cdFx0XHRfMTggPSBEYi5uYihCZC5fMThbMF1bXzE4czBbMF1dLF8xOHMwWzFdKTtcclxuXHRcdFx0XzE5ID0gKChCZC5fVGV4dHVyZSAqIDUpICsgXzE4KTtcclxuXHRcdFx0Y3R4LlMoWGIuUGQsWzAuNSwwLjVdKTtcclxuXHRcdFx0Y3R4LlUoWGIuTWMsIF8xMik7XHJcblx0XHRcdGN0eC5WKFhiLk5kLF8xNixfMTYpO1xyXG5cdFx0XHRjdHguVChYYi5nZixbMSwxLDFdKTtcclxuXHRcdFx0WGIuT2QgPSBfMTc7XHJcblx0XHRcdFhiLlFjID0gKF8xOSA8IDApID8gMCA6ICgoXzE5ID49IDE1KSA/IDE0IDogXzE5KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLkNjID0gZnVuY3Rpb24oQmQsIFhiLCBXYykge1xyXG5cdFx0XHRfMTEgPSAxO1xyXG5cdFx0XHRpZiAoWGIuXyA+IF8xMSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gRW1pdHRlcl9TdHJpcGVfcGFyZW50KCkge1xyXG5cclxuXHRcdHZhciBfMSA9IFtdLCBfMywgXzUgPSBbXSwgXzc9W10sIF83eD1bXSwgXzd5PVtdLCBfN3o9W10sIF84LCBfOGkwLCBfOHMwID0gW10sIF85ID0gW10sIF8xMD1bXSwgXzEwZnM9W10sIF8xMHZzPVtdLCBfMTBydz1bXSwgXzEwcnduPVtdLCBfMTByd2wsIF8xMHY9W10sIF8xMHA9W10sIF8xMGR0bCwgXzEwZHRwLCBfMTBkZiwgXzEwZnNkPVtdLCBfMTE7XHJcblx0XHR0aGlzLnBlID0gW107XHJcblx0XHR0aGlzLm5hbWUgPSBcIlN0cmlwZV9wYXJlbnRcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuX1RleHR1cmUgPSAwO1xyXG5cdFx0XHRCZC5kZCgpO1xyXG5cdFx0XHRCZC51YyhuZXcgRW1pdHRlcl9TdHJpcGVfY2hpbGQoKSwgeyB4YzogMSwgc2Q6IGZhbHNlIH0pO1xyXG5cdFx0XHRCZC5fOCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwwLjAzMTQ5NjQsMC4xMzYyNDYsMC4zMjg1MDcsMC41OTY0NCwwLjg5MDY4MiwxLjE2MDM1LDEuMzg0MDcsMS41NjE1MiwxLjY5OTA4LDEuODAzNzMsMS44ODEzMiwxLjkzNjQ5LDEuOTcyODcsMS45OTMzLDIsMl1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNTtcclxuXHRcdFx0dmQuR2IgPSAwLjk0O1xyXG5cdFx0XHR2ZC5KYiA9IDYwO1xyXG5cdFx0XHR2ZC5JYiA9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0dmQuemIgPSA1O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzEsIDAsIC0wLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8yLCBfMSwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIFhiLl8yKTtcclxuXHRcdFx0XzMgPSAwICsgQmQuTGQucmFuZCgpICogKDUgLSAwKTtcclxuXHRcdFx0WGIuXzQgPSBfMztcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfNSwgMTAwMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl82ID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fNiwgXzUsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzYsIEJkLmFkLCBYYi5fNik7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHRcdGN0eC5RKF83eiwgWzAsMCwxXSk7XHJcblx0XHRcdGN0eC5JKF83eCwgWGIuXzYsIF83eik7XHJcblx0XHRcdGN0eC5RKF83eCwgXzd4KTtcclxuXHRcdFx0Y3R4LkkoXzd5LCBfN3osIF83eCk7XHJcblx0XHRcdGN0eC5wYihfNywgXzd4LCBfN3ksIF83eik7XHJcblx0XHRcdFhiLnBjKDApLl9Sb3RhdGlvbiA9IF83O1xyXG5cdFx0XHRYYi5wYygwKS5fVGV4dHVyZSA9IEJkLl9UZXh0dXJlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2QgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzEsIDAsIC0wLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8yLCBfMSwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIFhiLl8yKTtcclxuXHRcdFx0XzMgPSAwICsgQmQuTGQucmFuZCgpICogKDUgLSAwKTtcclxuXHRcdFx0WGIuXzQgPSBfMztcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfNSwgMTAwMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl82ID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fNiwgXzUsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzYsIEJkLmFkLCBYYi5fNik7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHRcdGN0eC5RKF83eiwgWzAsMCwxXSk7XHJcblx0XHRcdGN0eC5JKF83eCwgWGIuXzYsIF83eik7XHJcblx0XHRcdGN0eC5RKF83eCwgXzd4KTtcclxuXHRcdFx0Y3R4LkkoXzd5LCBfN3osIF83eCk7XHJcblx0XHRcdGN0eC5wYihfNywgXzd4LCBfN3ksIF83eik7XHJcblx0XHRcdFhiLnBjKDApLl9Sb3RhdGlvbiA9IF83O1xyXG5cdFx0XHRYYi5wYygwKS5fVGV4dHVyZSA9IEJkLl9UZXh0dXJlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucWMgPSBmdW5jdGlvbihRYiwgQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gKz0gUWI7XHJcblx0XHRcdF84aTA9KEJkLlJiPDA/MDooQmQuUmI+MT8xOkJkLlJiKSk7XHJcblx0XHRcdGN0eC5WKF84czAsMCwoXzhpMC0wKSoxNSk7XHJcblx0XHRcdF84ID0gRGIubmIoQmQuXzhbMF1bXzhzMFswXV0sXzhzMFsxXSk7XHJcblx0XHRcdGN0eC5XKF85LCAwLCAxMDAsIDApO1xyXG5cdFx0XHRjdHguVChfMTBmcywgXzkpO1xyXG5cdFx0XHRjdHguVChfMTB2cywgWzAsMCwwXSk7XHJcblx0XHRcdF8xMGR0bCA9IFFiO1xyXG5cdFx0XHRjdHguVChfMTB2LCBYYi5fNik7XHJcblx0XHRcdGN0eC5UKF8xMHAsIFhiLl8yKTtcclxuXHRcdFx0d2hpbGUgKF8xMGR0bCA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdF8xMGR0cCA9IF8xMGR0bDtcclxuXHRcdFx0XHRjdHguVChfMTBmc2QsIF8xMGZzKTtcclxuXHRcdFx0XHRjdHguZyhfMTBydywgXzEwdnMsIF8xMHYpO1xyXG5cdFx0XHRcdF8xMHJ3bCA9IGN0eC5QKF8xMHJ3KTtcclxuXHRcdFx0XHRpZiAoXzEwcndsID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0XHRfMTByd2wgPSBNYXRoLnNxcnQoXzEwcndsKTtcclxuXHRcdFx0XHRcdGN0eC53KF8xMHJ3biwgXzEwcncsIF8xMHJ3bCk7XHJcblx0XHRcdFx0XHRfMTBkZiA9IDAuMDEgKiBfOCAqIF8xMHJ3bDtcclxuXHRcdFx0XHRcdGlmIChfMTBkZiAqIF8xMGR0cCA+IDAuMilcclxuXHRcdFx0XHRcdFx0XzEwZHRwID0gMC4yIC8gXzEwZGY7XHJcblx0XHRcdFx0XHRjdHguYyhfMTBmc2QsIF8xMGZzZCwgY3R4LnYoXzEwcnduLCBfMTByd2wgKiBfMTBkZikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguYyhfMTB2LCBfMTB2LCBjdHgudihfMTBmc2QsIF8xMGR0cCkpO1xyXG5cdFx0XHRcdGN0eC5jKF8xMHAsIF8xMHAsIGN0eC52KF8xMHYsIF8xMGR0cCkpO1xyXG5cdFx0XHRcdF8xMGR0bCAtPSBfMTBkdHA7XHJcblx0XHRcdH1cclxuXHRcdFx0Y3R4LlQoWGIuXzIsIF8xMHApO1xyXG5cdFx0XHRjdHguVChYYi5fNiwgXzEwdik7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHRcdGN0eC5RKF83eiwgWzAsMCwxXSk7XHJcblx0XHRcdGN0eC5JKF83eCwgWGIuXzYsIF83eik7XHJcblx0XHRcdGN0eC5RKF83eCwgXzd4KTtcclxuXHRcdFx0Y3R4LkkoXzd5LCBfN3osIF83eCk7XHJcblx0XHRcdGN0eC5wYihfNywgXzd4LCBfN3ksIF83eik7XHJcblx0XHRcdFhiLnBjKDApLl9Sb3RhdGlvbiA9IF83O1xyXG5cdFx0XHRYYi5wYygwKS5fVGV4dHVyZSA9IEJkLl9UZXh0dXJlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF8xMSA9IDE7XHJcblx0XHRcdGlmIChYYi5fID4gXzExKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBFbWl0dGVyX1NwYXJrcygpIHtcclxuXHJcblx0XHR2YXIgXywgX2kwLCBfczAgPSBbXSwgXzIgPSBbXSwgXzQsIF82LCBfOCwgXzEwLCBfMTIgPSBbXSwgXzE0PVtdLCBfMTUsIF8xNiwgXzE3LCBfMTdpMCwgXzE3czAgPSBbXSwgXzE4LCBfMTk7XHJcblx0XHR0aGlzLnBlID0gW3t4ZTowLFJjOjIsU2M6MyxyZW5kZXJTdHlsZUluZGV4OjF9XTtcclxuXHRcdHRoaXMubmFtZSA9IFwiU3BhcmtzXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLl9UZXh0dXJlID0gMDtcclxuXHRcdFx0QmQuXyA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwwLDBdLFxyXG5cdFx0XHRcdFx0WzIsMiwyXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuZGQoKTtcclxuXHRcdFx0QmQuXzE3ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLDAuMTQ5NzA5LDAuNDYwOTc1LDAuODAzMjM3LDEuMDgzMDMsMS4yOTkxOSwxLjQ2NzE3LDEuNTk5MjYsMS43MDM5LDEuNzg2OSwxLjg1MjM2LDEuOTAzMjgsMS45NDE5NCwxLjk3MDA3LDEuOTg5MDYsMiwyXSxcclxuXHRcdFx0XHRcdFsyLDEuNjY5OTQsMS4zNzM2MywxLjExNTM1LDAuODk1MjE1LDAuNzEwNDQzLDAuNTU2OTA4LDAuNDMwMjA2LDAuMzI2MjQ1LDAuMjQxNDY1LDAuMTcyODc1LDAuMTE4LDAuMDc0ODA2NywwLjA0MTYyMTUsMC4wMTcwNjY1LDAsMF0sXHJcblx0XHRcdFx0XHRbMCwwLjgyMjU3MSwwLjgyMjU3MV0sXHJcblx0XHRcdFx0XHRbMC44MjI1NzEsMC4yMzAzNjgsMC4yMzAzNjhdLFxyXG5cdFx0XHRcdFx0WzAuMjMwMzY4LDAuNywwLjddLFxyXG5cdFx0XHRcdFx0WzAuNywwLDBdLFxyXG5cdFx0XHRcdFx0WzAsMC42LDAuNl0sXHJcblx0XHRcdFx0XHRbMC42LDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNTtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDEwMDtcclxuXHRcdFx0dmQuSWIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUGIgPSBmdW5jdGlvbihRYiwgQmQsIHZkKSB7XHJcblx0XHRcdF9pMD0oQmQuUmI8MD8wOihCZC5SYj4yPzI6QmQuUmIpKTtcclxuXHRcdFx0X2kwPDAuOT9jdHguVihfczAsMCwoX2kwLTApKjEuMTExMTEpOmN0eC5WKF9zMCwxLChfaTAtMC45KSowLjkwOTA5MSk7XHJcblx0XHRcdF8gPSBEYi5uYihCZC5fWzBdW19zMFswXV0sX3MwWzFdKTtcclxuXHRcdFx0dmQuemIgPSBfO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXzEgPSAwLjA7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzIsIDMwMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl8zID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fMywgXzIsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzMsIEJkLkFiLCBYYi5fMyk7XHJcblx0XHRcdF80ID0gMCArIEJkLkxkLnJhbmQoKSAqICgzNjAgLSAwKTtcclxuXHRcdFx0WGIuXzUgPSBfNDtcclxuXHRcdFx0XzYgPSAwICsgQmQuTGQucmFuZCgpICogKDIgLSAwKTtcclxuXHRcdFx0WGIuXzcgPSBfNjtcclxuXHRcdFx0XzggPSAyMCArIEJkLkxkLnJhbmQoKSAqICg0MCAtIDIwKTtcclxuXHRcdFx0WGIuXzkgPSBfODtcclxuXHRcdFx0XzEwID0gMS41ICsgQmQuTGQucmFuZCgpICogKDMgLSAxLjUpO1xyXG5cdFx0XHRYYi5fMTEgPSBfMTA7XHJcblx0XHRcdGN0eC5XKF8xMiwgMCwgMjAsIDApO1xyXG5cdFx0XHRYYi5fMTMgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8xMywgXzEyLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl8xMywgQmQuYWQsIFhiLl8xMyk7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSA9IDAuMDtcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfMiwgMzAwLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzMgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8zLCBfMiwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fMywgQmQuQWIsIFhiLl8zKTtcclxuXHRcdFx0XzQgPSAwICsgQmQuTGQucmFuZCgpICogKDM2MCAtIDApO1xyXG5cdFx0XHRYYi5fNSA9IF80O1xyXG5cdFx0XHRfNiA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMiAtIDApO1xyXG5cdFx0XHRYYi5fNyA9IF82O1xyXG5cdFx0XHRfOCA9IDIwICsgQmQuTGQucmFuZCgpICogKDQwIC0gMjApO1xyXG5cdFx0XHRYYi5fOSA9IF84O1xyXG5cdFx0XHRfMTAgPSAxLjUgKyBCZC5MZC5yYW5kKCkgKiAoMyAtIDEuNSk7XHJcblx0XHRcdFhiLl8xMSA9IF8xMDtcclxuXHRcdFx0Y3R4LlcoXzEyLCAwLCAyMCwgMCk7XHJcblx0XHRcdFhiLl8xMyA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzEzLCBfMTIsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzEzLCBCZC5hZCwgWGIuXzEzKTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8zKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSArPSBRYjtcclxuXHRcdFx0Y3R4LlQoXzE0LCBYYi5fMTMpO1xyXG5cdFx0XHRjdHgudShfMTQsIF8xNCwgUWIpO1xyXG5cdFx0XHRjdHguYyhfMTQsIF8xNCwgWGIuXzMpO1xyXG5cdFx0XHRjdHguVChYYi5fMywgXzE0KTtcclxuXHRcdFx0XzE1ID0gWGIuXzUgKyBRYiAqIDkwO1xyXG5cdFx0XHRYYi5fNSA9IF8xNTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8zKTtcclxuXHRcdFx0XzE2ID0gKFhiLl8xIC8gWGIuXzExKTtcclxuXHRcdFx0XzE3aTA9KF8xNjwwPzA6KF8xNj4xPzE6XzE2KSk7XHJcblx0XHRcdF8xN2kwPDAuNzQ0Njg5P18xN2kwPDAuNj9fMTdpMDwwLjA1Nzc3MDQ/Y3R4LlYoXzE3czAsMCwoXzE3aTAtMCkqMjU5LjY0OCk6Y3R4LlYoXzE3czAsMSwoXzE3aTAtMC4wNTc3NzA0KSoyNy42NjM2KTpfMTdpMDwwLjYzMTE4Nz9jdHguVihfMTdzMCwyLChfMTdpMC0wLjYpKjMyLjA2NDYpOmN0eC5WKF8xN3MwLDMsKF8xN2kwLTAuNjMxMTg3KSo4LjgxMDQ1KTpfMTdpMDwwLjk/XzE3aTA8MC43NzI/Y3R4LlYoXzE3czAsNCwoXzE3aTAtMC43NDQ2ODkpKjM2LjYxNDcpOmN0eC5WKF8xN3MwLDUsKF8xN2kwLTAuNzcyKSo3LjgxMjUpOl8xN2kwPDAuOTQyMDQ0P2N0eC5WKF8xN3MwLDYsKF8xN2kwLTAuOSkqMjMuNzg0OCk6Y3R4LlYoXzE3czAsNywoXzE3aTAtMC45NDIwNDQpKjE3LjI1NDQpO1xyXG5cdFx0XHRfMTcgPSBEYi5uYihCZC5fMTdbMF1bXzE3czBbMF1dLF8xN3MwWzFdKTtcclxuXHRcdFx0XzE4ID0gKFhiLl85ICogXzE3KTtcclxuXHRcdFx0XzE5ID0gKChCZC5fVGV4dHVyZSAqIDIpICsgWGIuXzcpO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl81O1xyXG5cdFx0XHRjdHguVihYYi5OZCxfMTgsXzE4KTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsWzEsMSwxXSk7XHJcblx0XHRcdFhiLk9kID0gMTtcclxuXHRcdFx0WGIuUWMgPSAoXzE5IDwgMCkgPyAwIDogKChfMTkgPj0gNikgPyA1IDogXzE5KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLkNjID0gZnVuY3Rpb24oQmQsIFhiLCBXYykge1xyXG5cdFx0XHRpZiAoWGIuXzEgPiBYYi5fMTEpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfU3BsYXNoKCkge1xyXG5cclxuXHRcdHZhciBfMSA9IFtdLCBfNSwgXzQsIF82LCBfNywgXzdpMCwgXzdzMCA9IFtdLCBfOCwgXzk7XHJcblx0XHR0aGlzLnBlID0gW3t4ZTowLFJjOjUsU2M6MyxyZW5kZXJTdHlsZUluZGV4OjB9XTtcclxuXHRcdHRoaXMubmFtZSA9IFwiU3BsYXNoXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl83ID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLDEsMV0sXHJcblx0XHRcdFx0XHRbMSwwLjk5MDgzNSwwLjk2OTM1MSwwLjkzODA5MywwLjg5ODU4NiwwLjg1MTc4MSwwLjc5ODI2NSwwLjczODM2OCwwLjY3MjIxNywwLjU5OTc2MiwwLjUyMDc2NiwwLjQzNDc5LDAuMzQxMTI4LDAuMjM4NzAzLDAuMTI1ODY5LDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNTtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDE7XHJcblx0XHRcdHZkLkliID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fMiwgXzEsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzIsIEJkLkFiLCBYYi5fMik7XHJcblx0XHRcdFhiLl8zID0gMDtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl8yLCBfMSwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIFhiLl8yKTtcclxuXHRcdFx0WGIuXzMgPSAwO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucWMgPSBmdW5jdGlvbihRYiwgQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gKz0gUWI7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHRcdF81ID0gMzAwO1xyXG5cdFx0XHRfNCA9IDAuMztcclxuXHRcdFx0XzYgPSAoWGIuXyAvIF80KTtcclxuXHRcdFx0XzdpMD0oXzY8MD8wOihfNj4xPzE6XzYpKTtcclxuXHRcdFx0XzdpMDwwLjE/Y3R4LlYoXzdzMCwwLChfN2kwLTApKjEwKTpjdHguVihfN3MwLDEsKF83aTAtMC4xKSoxNi42NjY3KTtcclxuXHRcdFx0XzcgPSBEYi5uYihCZC5fN1swXVtfN3MwWzBdXSxfN3MwWzFdKTtcclxuXHRcdFx0XzggPSAoXzUgKiBfNyk7XHJcblx0XHRcdF85ID0gMDtcclxuXHRcdFx0Y3R4LlMoWGIuUGQsWzAuNSwwLjVdKTtcclxuXHRcdFx0WGIuTWQgPSBYYi5fMztcclxuXHRcdFx0Y3R4LlYoWGIuTmQsXzgsXzgpO1xyXG5cdFx0XHRjdHguVChYYi5nZixbMSwxLDFdKTtcclxuXHRcdFx0WGIuT2QgPSAxO1xyXG5cdFx0XHRYYi5RYyA9IChfOSA8IDApID8gMCA6ICgoXzkgPj0gMTUpID8gMTQgOiBfOSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzQgPSAwLjM7XHJcblx0XHRcdGlmIChYYi5fID4gXzQpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfRmlyZXdvcmtzX3BhcmVudCgpIHtcclxuXHJcblx0XHR2YXIgXywgX2kwLCBfczAgPSBbXSwgXzIsIF8zID0gW10sIF8zaSwgXzNzID0gW10sIF80ID0gW10sIF80aSwgXzRzID0gW10sIF81LCBfNiA9IFtdLCBfNyA9IFtdLCBfMTAsIF8xMSwgXzExaTAsIF8xMXMwID0gW10sIF8xMztcclxuXHRcdHRoaXMucGUgPSBbXTtcclxuXHRcdHRoaXMubmFtZSA9IFwiRmlyZXdvcmtzX3BhcmVudFwiO1xyXG5cclxuXHRcdHRoaXMudWQgPSBmdW5jdGlvbihCZCkge1xyXG5cdFx0XHRCZC5fID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFsxLjQ3MzAxLDEuNDczMDEsMS40NzMwMV0sXHJcblx0XHRcdFx0XHRbMCwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5kZCgpO1xyXG5cdFx0XHRCZC5fMyA9IFtcclxuXHRcdFx0XHRbWy0zODMuMTY4LDk4LjI3Ml0sWy0zODMuMTY4LC0xMDEuNzI4XSxbLTM4My4xNjgsLTEwMS43MjhdXVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fNCA9IFtcclxuXHRcdFx0XHRbWzQwNS42MzIsOTEuMzZdLFs0MDUuNjMyLC0xMDguNjRdLFs0MDUuNjMyLC0xMDguNjRdXVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTEgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsMCwwXSxcclxuXHRcdFx0XHRcdFsxLDEsMV0sXHJcblx0XHRcdFx0XHRbMiwyLDJdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC51YyhuZXcgRW1pdHRlcl9TdHJpcGVfcGFyZW50KCksIHsgeGM6IDEsIHNkOiBmYWxzZSB9KTtcclxuXHRcdFx0QmQudWMobmV3IEVtaXR0ZXJfU3BhcmtzKCksIHsgeGM6IDEsIHNkOiBmYWxzZSB9KTtcclxuXHRcdFx0QmQudWMobmV3IEVtaXR0ZXJfU3BsYXNoKCksIHsgeGM6IDEsIHNkOiBmYWxzZSB9KTtcclxuXHRcdFx0QmQuamQgPSAzO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNTtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0X2kwPShCZC5MZC5SYjwwPzA6KEJkLkxkLlJiPjUuOTk0MzI/KDArKChCZC5MZC5SYi0wKSU1Ljk5NDMyKSk6QmQuTGQuUmIpKTtcclxuXHRcdFx0X2kwPDEuNTAwNzc/Y3R4LlYoX3MwLDAsKF9pMC0wKSowLjY2NjMyMyk6Y3R4LlYoX3MwLDEsKF9pMC0xLjUwMDc3KSowLjIyMjU0MSk7XHJcblx0XHRcdF8gPSBEYi5uYihCZC5fWzBdW19zMFswXV0sX3MwWzFdKTtcclxuXHRcdFx0dmQuemIgPSBfO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXzEgPSAwLjA7XHJcblx0XHRcdF8yID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF8zaSA9IERiLmtiKF8yKTtcclxuXHRcdFx0Y3R4LlYoXzNzLDAsKF8zaS0wKSoxKTtcclxuXHRcdFx0RGIubGIoXzMsIEJkLl8zW18zc1swXV0sIF8zc1sxXSk7XHJcblx0XHRcdF80aSA9IERiLmtiKF8yKTtcclxuXHRcdFx0Y3R4LlYoXzRzLDAsKF80aS0wKSoxKTtcclxuXHRcdFx0RGIubGIoXzQsIEJkLl80W180c1swXV0sIF80c1sxXSk7XHJcblx0XHRcdF81ID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdGN0eC5ZKF82LCBfMywgXzQsIF81KTtcclxuXHRcdFx0Y3R4LlcoXzcsIF82WzBdLCBfNlsxXSwgMCk7XHJcblx0XHRcdFhiLl84ID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fOCwgXzcsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzgsIEJkLkFiLCBYYi5fOCk7XHJcblx0XHRcdFhiLl85ID0gMDtcclxuXHRcdFx0XzEwID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF8xMWkwPShfMTA8MD8wOihfMTA+MT8xOl8xMCkpO1xyXG5cdFx0XHRfMTFpMDwwLjcxMDYyNj9fMTFpMDwwLjM4ODMwMj9jdHguVihfMTFzMCwwLChfMTFpMC0wKSoyLjU3NTMxKTpjdHguVihfMTFzMCwxLChfMTFpMC0wLjM4ODMwMikqMy4xMDI0Nyk6Y3R4LlYoXzExczAsMiwoXzExaTAtMC43MTA2MjYpKjMuNDU1NzMpO1xyXG5cdFx0XHRfMTEgPSBEYi5uYihCZC5fMTFbMF1bXzExczBbMF1dLF8xMXMwWzFdKTtcclxuXHRcdFx0WGIuXzEyID0gXzExO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzgpO1xyXG5cdFx0XHRYYi5wYygwKS5fVGV4dHVyZSA9IFhiLl8xMjtcclxuXHRcdFx0WGIucGMoMSkuX1RleHR1cmUgPSBYYi5fMTI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSA9IDAuMDtcclxuXHRcdFx0XzIgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0XzNpID0gRGIua2IoXzIpO1xyXG5cdFx0XHRjdHguVihfM3MsMCwoXzNpLTApKjEpO1xyXG5cdFx0XHREYi5sYihfMywgQmQuXzNbXzNzWzBdXSwgXzNzWzFdKTtcclxuXHRcdFx0XzRpID0gRGIua2IoXzIpO1xyXG5cdFx0XHRjdHguVihfNHMsMCwoXzRpLTApKjEpO1xyXG5cdFx0XHREYi5sYihfNCwgQmQuXzRbXzRzWzBdXSwgXzRzWzFdKTtcclxuXHRcdFx0XzUgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0Y3R4LlkoXzYsIF8zLCBfNCwgXzUpO1xyXG5cdFx0XHRjdHguVyhfNywgXzZbMF0sIF82WzFdLCAwKTtcclxuXHRcdFx0WGIuXzggPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl84LCBfNywgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fOCwgQmQuQWIsIFhiLl84KTtcclxuXHRcdFx0WGIuXzkgPSAwO1xyXG5cdFx0XHRfMTAgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0XzExaTA9KF8xMDwwPzA6KF8xMD4xPzE6XzEwKSk7XHJcblx0XHRcdF8xMWkwPDAuNzEwNjI2P18xMWkwPDAuMzg4MzAyP2N0eC5WKF8xMXMwLDAsKF8xMWkwLTApKjIuNTc1MzEpOmN0eC5WKF8xMXMwLDEsKF8xMWkwLTAuMzg4MzAyKSozLjEwMjQ3KTpjdHguVihfMTFzMCwyLChfMTFpMC0wLjcxMDYyNikqMy40NTU3Myk7XHJcblx0XHRcdF8xMSA9IERiLm5iKEJkLl8xMVswXVtfMTFzMFswXV0sXzExczBbMV0pO1xyXG5cdFx0XHRYYi5fMTIgPSBfMTE7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fOCk7XHJcblx0XHRcdFhiLnBjKDApLl9UZXh0dXJlID0gWGIuXzEyO1xyXG5cdFx0XHRYYi5wYygxKS5fVGV4dHVyZSA9IFhiLl8xMjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSArPSBRYjtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl84KTtcclxuXHRcdFx0WGIucGMoMCkuX1RleHR1cmUgPSBYYi5fMTI7XHJcblx0XHRcdFhiLnBjKDEpLl9UZXh0dXJlID0gWGIuXzEyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF8xMyA9IDI7XHJcblx0XHRcdGlmIChYYi5fMSA+IF8xMykgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5xZCA9IGZ1bmN0aW9uKExkKSB7XHJcblx0XHRMZC5EZCA9IDAuMDMzMzMzMztcclxuXHRcdExkLlVkID0gMDtcclxuXHRcdExkLnByZXNpbUZyYW1lVGltZSA9IDAuMTtcclxuXHRcdExkLnJhbmQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCk7IH07XHJcblx0XHRMZC5wZChuZXcgRW1pdHRlcl9GaXJld29ya3NfcGFyZW50KCkpO1xyXG5cdH1cclxuXHRcdHRoaXMua2IgPSBmdW5jdGlvbiAodikgeyBcdFx0XHRyZXR1cm4gKHYgPCAwKSA/IDAgOiAoKHYgPiAxKSA/IDEgOiB2KTsgXHRcdH1cclxuXHJcblx0XHR0aGlzLmxiID0gZnVuY3Rpb24gKHIsIHBhdGgsIGplKSB7IFx0XHRcdHZhciBpbmRleEludCA9IE1hdGguZmxvb3IoamUpOyBcdFx0XHR2YXIgbGVycCA9IGplIC0gaW5kZXhJbnQ7IFx0XHRcdGN0eC5ZKHIsIHBhdGhbaW5kZXhJbnRdLCBwYXRoW2luZGV4SW50ICsgMV0sIGxlcnApOyBcdFx0fVxyXG5cclxuXHRcdHRoaXMubmIgPSBmdW5jdGlvbihmdW5jVmFsdWVzLCBqZSkgeyBcdFx0XHR2YXIgaW5kZXhJbnQgPSBNYXRoLmZsb29yKGplKTsgXHRcdFx0dmFyIG5leHRJbnQgPSBpbmRleEludCArIDE7IFx0XHRcdHJldHVybiBjdHguWChmdW5jVmFsdWVzW2luZGV4SW50XSwgZnVuY1ZhbHVlc1tuZXh0SW50XSwgamUgLSBpbmRleEludCk7IFx0XHR9XHJcblxyXG5cclxufVxyXG5cclxucmV0dXJuIEZpcmV3b3JrczAxO1xyXG59KSk7Il19