
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Fireworks02.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08769ZLqc9Nu6D6l7xZB5mo', 'Fireworks02');
// neutrinoparticles/exported_effects/Fireworks02.js

"use strict";

// c3ebcd02-0d7c-41bb-b884-16930ec48c46
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Fireworks02'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Fireworks02'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Fireworks02(ctx) {
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

    this.textures = ['fx/fireworks/sparks5x3_long.png', 'fx/fireworks/stars4x1_white.png'];
    this.materials = [1, 0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }, {
      materialIndex: 1,
      textureIndices: [1]
    }];
    this.Xe = 90300;

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
        Bd._17 = [[[1, 1, 1], [1, 0, 0]]];
        Bd._18 = [[[5, 4.99872, 4.99458, 4.98671, 4.97402, 4.95508, 4.92796, 4.89001, 4.83749, 4.76485, 4.66351, 4.5192, 4.30565, 3.96616, 3.3344, 0, 0]]];
        Bd.jd = 300;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.rd = 2;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.rd = 2;
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
        _17i0 < 0.7 ? ctx.V(_17s0, 0, (_17i0 - 0) * 1.42857) : ctx.V(_17s0, 1, (_17i0 - 0.7) * 3.33333);
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
      var _,
          _i0,
          _s0 = [],
          _2 = [],
          _4,
          _6 = [],
          _8 = [],
          _8x = [],
          _8y = [],
          _8z = [],
          _9,
          _9i0,
          _9s0 = [],
          _10 = [],
          _11 = [],
          _11fs = [],
          _11vs = [],
          _11rw = [],
          _11rwn = [],
          _11rwl,
          _11v = [],
          _11p = [],
          _11dtl,
          _11dtp,
          _11df,
          _11fsd = [],
          _12;

      this.pe = [];
      this.name = "Stripe_parent";

      this.ud = function (Bd) {
        Bd._Texture = 0;
        Bd._ = [[[0, 0, 0], [5, 5, 5]]];
        Bd.dd();
        Bd.uc(new Emitter_Stripe_child(), {
          xc: 1,
          sd: false
        });
        Bd._9 = [[[0, 0.201485, 0.578107, 1.01262, 1.40576, 1.70529, 1.89569, 1.97991, 1.96774, 1.87042, 1.69852, 1.46129, 1.16666, 0.821281, 0.430806, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 5;
        vd.Gb = 0.94;
        vd.Jb = 50;
        vd.Ib = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        _i0 = Bd.Rb < 0 ? 0 : Bd.Rb > 1 ? 1 : Bd.Rb;
        _i0 < 0.14741 ? ctx.V(_s0, 0, (_i0 - 0) * 6.78378) : ctx.V(_s0, 1, (_i0 - 0.14741) * 1.1729);
        _ = Db.nb(Bd._[0][_s0[0]], _s0[1]);
        vd.zb = _;
      };

      this.fd = function (Bd, Xb) {
        Xb._1 = 0.0;
        ctx.W(_2, 0, 0, 0);
        Xb._3 = [];
        ctx.rb(Xb._3, _2, Bd.Mc);
        ctx.c(Xb._3, Bd.Ab, Xb._3);
        _4 = 0 + Bd.Ld.rand() * (5 - 0);
        Xb._5 = _4;
        ctx.randv3gen(_6, 1000, Bd.Ld.rand);
        Xb._7 = [];
        ctx.rb(Xb._7, _6, Bd.Mc);
        ctx.c(Xb._7, Bd.ad, Xb._7);
        ctx.T(Xb.Ab, Xb._3);
        ctx.Q(_8z, [0, 0, 1]);
        ctx.I(_8x, Xb._7, _8z);
        ctx.Q(_8x, _8x);
        ctx.I(_8y, _8z, _8x);
        ctx.pb(_8, _8x, _8y, _8z);
        Xb.pc(0)._Rotation = _8;
        Xb.pc(0)._Texture = Bd._Texture;
      };

      this.gd = function (Bd, Xb) {
        Xb._1 = 0.0;
        ctx.W(_2, 0, 0, 0);
        Xb._3 = [];
        ctx.rb(Xb._3, _2, Bd.Mc);
        ctx.c(Xb._3, Bd.Ab, Xb._3);
        _4 = 0 + Bd.Ld.rand() * (5 - 0);
        Xb._5 = _4;
        ctx.randv3gen(_6, 1000, Bd.Ld.rand);
        Xb._7 = [];
        ctx.rb(Xb._7, _6, Bd.Mc);
        ctx.c(Xb._7, Bd.ad, Xb._7);
        ctx.T(Xb.Ab, Xb._3);
        ctx.Q(_8z, [0, 0, 1]);
        ctx.I(_8x, Xb._7, _8z);
        ctx.Q(_8x, _8x);
        ctx.I(_8y, _8z, _8x);
        ctx.pb(_8, _8x, _8y, _8z);
        Xb.pc(0)._Rotation = _8;
        Xb.pc(0)._Texture = Bd._Texture;
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._1 += Qb;
        _9i0 = Bd.Rb < 0 ? 0 : Bd.Rb > 1 ? 1 : Bd.Rb;
        ctx.V(_9s0, 0, (_9i0 - 0) * 15);
        _9 = Db.nb(Bd._9[0][_9s0[0]], _9s0[1]);
        ctx.W(_10, 0, 100, 0);
        ctx.T(_11fs, _10);
        ctx.T(_11vs, [0, 0, 0]);
        _11dtl = Qb;
        ctx.T(_11v, Xb._7);
        ctx.T(_11p, Xb._3);

        while (_11dtl > 0.0001) {
          _11dtp = _11dtl;
          ctx.T(_11fsd, _11fs);
          ctx.g(_11rw, _11vs, _11v);
          _11rwl = ctx.P(_11rw);

          if (_11rwl > 0.0001) {
            _11rwl = Math.sqrt(_11rwl);
            ctx.w(_11rwn, _11rw, _11rwl);
            _11df = 0.01 * _9 * _11rwl;
            if (_11df * _11dtp > 0.2) _11dtp = 0.2 / _11df;
            ctx.c(_11fsd, _11fsd, ctx.v(_11rwn, _11rwl * _11df));
          }

          ctx.c(_11v, _11v, ctx.v(_11fsd, _11dtp));
          ctx.c(_11p, _11p, ctx.v(_11v, _11dtp));
          _11dtl -= _11dtp;
        }

        ctx.T(Xb._3, _11p);
        ctx.T(Xb._7, _11v);
        ctx.T(Xb.Ab, Xb._3);
        ctx.Q(_8z, [0, 0, 1]);
        ctx.I(_8x, Xb._7, _8z);
        ctx.Q(_8x, _8x);
        ctx.I(_8y, _8z, _8x);
        ctx.pb(_8, _8x, _8y, _8z);
        Xb.pc(0)._Rotation = _8;
        Xb.pc(0)._Texture = Bd._Texture;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _12 = 1.2;
        if (Xb._1 > _12) return true;
        return false;
      };
    }

    function Emitter_Sparks() {
      var _1 = [],
          _3 = [],
          _6,
          _8,
          _10,
          _12 = [],
          _13 = [],
          _13fs = [],
          _13vs = [],
          _13rw = [],
          _13rwn = [],
          _13rwl,
          _13v = [],
          _13p = [],
          _13dtl,
          _13dtp,
          _13df,
          _13fsd = [],
          _14,
          _15,
          _15i0,
          _15s0 = [],
          _16;

      this.pe = [{
        xe: 0,
        Rc: 4,
        Sc: 1,
        renderStyleIndex: 1
      }];
      this.name = "Sparks";

      this.ud = function (Bd) {
        Bd._Texture = 0;
        Bd.dd();
        Bd._15 = [[[1, 0, 0], [0, 1, 1], [1, 0, 0], [0, 0.7, 0.7], [0.7, 0.2, 0.2], [0.2, 0.838202, 0.838202], [0.838202, 0.4, 0.4], [0.4, 1, 1], [1, 0, 0], [0, 0.6, 0.6], [0.6, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 1;
        vd.Gb = 1;
        vd.Jb = 80;
        vd.Ib = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 1;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        ctx.randv3gen(_3, 100, Bd.Ld.rand);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.ad, Xb._4);
        Xb._5 = 0;
        _6 = 0 + Bd.Ld.rand() * (4 - 0);
        Xb._7 = _6;
        _8 = 10 + Bd.Ld.rand() * (20 - 10);
        Xb._9 = _8;
        _10 = 1 + Bd.Ld.rand() * (2 - 1);
        Xb._11 = _10;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        ctx.W(_1, 0, 0, 0);
        Xb._2 = [];
        ctx.rb(Xb._2, _1, Bd.Mc);
        ctx.c(Xb._2, Bd.Ab, Xb._2);
        ctx.randv3gen(_3, 100, Bd.Ld.rand);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.ad, Xb._4);
        Xb._5 = 0;
        _6 = 0 + Bd.Ld.rand() * (4 - 0);
        Xb._7 = _6;
        _8 = 10 + Bd.Ld.rand() * (20 - 10);
        Xb._9 = _8;
        _10 = 1 + Bd.Ld.rand() * (2 - 1);
        Xb._11 = _10;
        ctx.T(Xb.Ab, Xb._2);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_12, 0, 100, 0);
        ctx.T(_13fs, _12);
        ctx.T(_13vs, [0, 0, 0]);
        ctx.u(_13v, _13fs, Qb);
        ctx.c(_13v, _13v, Xb._4);
        ctx.u(_13p, _13v, Qb);
        ctx.c(_13p, _13p, Xb._2);
        ctx.T(Xb._2, _13p);
        ctx.T(Xb._4, _13v);
        ctx.T(Xb.Ab, Xb._2);
        _14 = Xb._ / Xb._11;
        _15i0 = _14 < 0 ? 0 : _14 > 1 ? 1 : _14;
        _15i0 < 0.531495 ? _15i0 < 0.3 ? _15i0 < 0.16726 ? _15i0 < 0.1 ? ctx.V(_15s0, 0, (_15i0 - 0) * 10) : ctx.V(_15s0, 1, (_15i0 - 0.1) * 14.8677) : ctx.V(_15s0, 2, (_15i0 - 0.16726) * 7.53351) : _15i0 < 0.464218 ? _15i0 < 0.353203 ? ctx.V(_15s0, 3, (_15i0 - 0.3) * 18.796) : ctx.V(_15s0, 4, (_15i0 - 0.353203) * 9.00779) : ctx.V(_15s0, 5, (_15i0 - 0.464218) * 14.864) : _15i0 < 0.9 ? _15i0 < 0.7 ? _15i0 < 0.641996 ? ctx.V(_15s0, 6, (_15i0 - 0.531495) * 9.04964) : ctx.V(_15s0, 7, (_15i0 - 0.641996) * 17.2403) : ctx.V(_15s0, 8, (_15i0 - 0.7) * 5) : _15i0 < 0.942044 ? ctx.V(_15s0, 9, (_15i0 - 0.9) * 23.7848) : ctx.V(_15s0, 10, (_15i0 - 0.942044) * 17.2544);
        _15 = Db.nb(Bd._15[0][_15s0[0]], _15s0[1]);
        _16 = Xb._9 * _15;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._5;
        ctx.V(Xb.Nd, _16, _16);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = 1;
        Xb.Qc = Xb._7 < 0 ? 0 : Xb._7 >= 4 ? 3 : Xb._7;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._11) return true;
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
        Bd._ = [[[1.72379, 1.72379, 1.72379], [0, 0, 0]]];
        Bd.dd();
        Bd._3 = [[[-438, 1], [-440, -296], [-440, -296]]];
        Bd._4 = [[[327, 3], [326, -285], [326, -285]]];
        Bd._11 = [[[0, 0, 0], [1, 1, 1], [2, 2, 2]]];
        Bd.uc(new Emitter_Stripe_parent(), {
          xc: 1,
          sd: false
        });
        Bd.uc(new Emitter_Sparks(), {
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

  return Fireworks02;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXEZpcmV3b3JrczAyLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIk5ldXRyaW5vRWZmZWN0IiwibmFtZXNwYWNlIiwiX19sYXN0X18iLCJzZWxmIiwiRmlyZXdvcmtzMDIiLCJjdHgiLCJEYiIsIm5lIiwiTGQiLCJCZCIsIndlIiwicGUiLCJsZW5ndGgiLCJMYyIsInByb3RvdHlwZSIsIkVjIiwiRmMiLCJ4ZSIsImZlIiwiQWIiLCJYYiIsIkdjIiwiaWIiLCJNZCIsIkhjIiwiTWF0aCIsImNvcyIsIkljIiwic2luIiwieWUiLCJBZSIsIk5kIiwiemUiLCJ0cmFuc2Zvcm0iLCJxIiwiTWMiLCJ6MiIsInh5Iiwid3oiLCJQYyIsImdlIiwidmMiLCJCZSIsIm9jIiwiT2QiLCJEZSIsImZsb29yIiwiUWMiLCJSYyIsIkVlIiwic2xpY2UiLCJkZiIsImFicyIsImVmIiwic2F2ZSIsInRyYW5zbGF0ZSIsIlBkIiwiZ2xvYmFsQWxwaGEiLCJnZiIsIlllIiwiVGMiLCJaZSIsIlVjIiwiYWYiLCJiZiIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImRyYXdJbWFnZSIsImltYWdlIiwieCIsInkiLCJmaWxsU3R5bGUiLCJmZiIsImZpbGxSZWN0IiwiY2YiLCJyZXN0b3JlIiwiSGQiLCJtYXRlcmlhbHMiLCJtb2RlbCIsInJlbmRlclN0eWxlcyIsInJlbmRlclN0eWxlSW5kZXgiLCJtYXRlcmlhbEluZGV4IiwidGV4dHVyZURlc2NzIiwidGV4dHVyZUluZGljZXMiLCJ3aWR0aCIsImhlaWdodCIsIlNjIiwia2QiLCJhIiwiYiIsIlZjIiwiV2IiLCJ0YyIsInNvcnQiLCJvZSIsInZlcnRleCIsInBvc2l0aW9uIiwiY29sb3IiLCJ0ZXhDb29yZHMiLCJxZSIsInNlIiwicmUiLCJ0ZSIsInJlbmRlckJ1ZmZlciIsIkNlIiwidjAiLCJ2MSIsInYyIiwidjMiLCJGZSIsIkdlIiwicyIsImMiLCJIZSIsIkllIiwiSmUiLCJLZSIsInUiLCJyZ2IiLCJ2IiwiUGUiLCJRZSIsIlJlIiwiU2UiLCJXZSIsInRleHR1cmVzUmVtYXAiLCJVZSIsIlZlIiwiYmVmb3JlUXVhZCIsInB1c2hWZXJ0ZXgiLCJfX2xhc3RSZW5kZXJDYWxsIiwiUmVuZGVyQ2FsbCIsImxhc3RSZW5kZXJDYWxsIiwibnVtSW5kaWNlcyIsInB1c2hSZW5kZXJDYWxsIiwic3RhcnRJbmRleCIsInVlIiwiZm9yRWFjaCIsImRlcHRoIiwiSCIsImxkIiwidmUiLCJWYiIsIkViIiwiRmIiLCJHYiIsIkhiIiwiSWIiLCJLYiIsIkxiIiwiTWIiLCJOYiIsIk9iIiwiSmQiLCJJZCIsIlFiIiwiUGIiLCJSYiIsInN5c3RlbVRpbWUiLCJTYiIsImljIiwiemIiLCJUYiIsIlViIiwiZGlzYWN0aXZhdGUiLCJhYiIsIkJiIiwic2xlcnBxIiwicHJldlJvdGF0aW9uIiwiSmIiLCJzYyIsInBvcCIsInVuc2hpZnQiLCJZYiIsIlpiIiwiVCIsIlUiLCJhYyIsImJjIiwiY2MiLCJkYyIsInN5c3RlbVRpbWVCZWZvcmVGcmFtZSIsInN5c3RlbVRpbWVBZnRlckZyYW1lIiwiZWMiLCJPIiwiaCIsImZjIiwicmQiLCJoYyIsImpjIiwia2MiLCJYIiwibWMiLCJLYyIsIm5jIiwiaSIsInBjIiwiQWQiLCJzZCIsImZkIiwiZ2QiLCJxYyIsInJjIiwiamUiLCJ1YyIsIm1kIiwibmQiLCJwdXNoIiwieGMiLCJ3YyIsImFjdGl2YXRlIiwieWMiLCJHZCIsIkVkIiwiemMiLCJBYyIsIkNjIiwiV2MiLCJjb25zdHJ1Y3QiLCJZYyIsImFkIiwiZGQiLCJ2ZCIsImVkIiwidWQiLCJqZCIsImlkIiwiaGQiLCJ3ZCIsIlpjIiwicGF1c2VkXyIsImdlbmVyYXRvcnNQYXVzZWRfIiwiVyIsImFwcGx5IiwiVGQiLCJzaGlmdCIsImciLCJ3IiwieGQiLCJyZWFkeSIsImFjdGl2YXRlZCIsInNwbGljZSIsInBhdXNlIiwidW5wYXVzZSIsInBhdXNlZCIsInBhdXNlR2VuZXJhdG9ycyIsInVucGF1c2VHZW5lcmF0b3JzIiwiZ2VuZXJhdG9yc1BhdXNlZCIsImdldE51bVBhcnRpY2xlcyIsImtlIiwiQ2IiLCJfaW5pdCIsIm9wdGlvbnMiLCJvZCIsInBkIiwiY29uY2F0IiwibmFtZSIsIkNkIiwicWQiLCJfcHJlc2ltTmVlZGVkIiwicGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsInBhdXNlQWxsRW1pdHRlcnMiLCJ6ZXJvVXBkYXRlIiwidXBkYXRlRml4ZWQiLCJVZCIsInByZXNpbUZyYW1lVGltZSIsInJlc3RhcnQiLCJyb3RhdGlvbiIsInVwZGF0ZSIsImR0IiwiRGQiLCJ1cGRhdGVGbGV4IiwiZnJhbWVUaW1lIiwidXBkYXRlZFRpbWUiLCJmcmFtZVJvdGF0aW9uIiwiZXF1YWx2M18iLCJlcXVhbHFfIiwicmVzZXRQb3NpdGlvbiIsInNldFByb3BlcnR5SW5BbGxFbWl0dGVycyIsInZhbHVlIiwicHJvcE5hbWUiLCJBcnJheSIsIlMiLCJ1bnBhdXNlQWxsRW1pdHRlcnMiLCJhcmVBbGxFbWl0dGVyc1BhdXNlZCIsInVucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyIsImFyZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzUGF1c2VkIiwibnVtUGFydGljbGVzIiwibGUiLCJjYWxsIiwiaW5kaWNlcyIsInZlckRpc3AiLCJYZSIsImluaXRpYWxpemUiLCJfX251bUluZGljZXMiLCJmaWxsR2VvbWV0cnlCdWZmZXJzIiwiY2FtZXJhUmlnaHQiLCJjYW1lcmFVcCIsImNhbWVyYURpciIsImNsZWFudXAiLCJtZSIsImRyYXciLCJjb250ZXh0IiwiY2FtZXJhIiwiY3JlYXRlV0dMSW5zdGFuY2UiLCJjcmVhdGVDYW52YXMyREluc3RhbmNlIiwidGV4dHVyZXMiLCJFbWl0dGVyX1N0cmlwZV9jaGlsZCIsIl8xIiwiXzUiLCJfNyIsIl85IiwiXzEwIiwiXzEwZnMiLCJfMTB2cyIsIl8xMHJ3IiwiXzEwcnduIiwiXzEwcndsIiwiXzEwdiIsIl8xMHAiLCJfMTBkdGwiLCJfMTBkdHAiLCJfMTBkZiIsIl8xMGZzZCIsIl8xMiIsIl8xMmkiLCJfMTMiLCJfMTEiLCJfMTQiLCJfMTUiLCJfMTVpMCIsIl8xNXMwIiwiXzE2IiwiXzE3IiwiXzE3aTAiLCJfMTdzMCIsIl8xOCIsIl8xOGkwIiwiXzE4czAiLCJfMTkiLCJfUm90YXRpb24iLCJfVGV4dHVyZSIsIl8iLCJfMiIsIl8zIiwiXzQiLCJyYW5kdjNnZW4iLCJyYW5kIiwiXzYiLCJfOCIsIlAiLCJzcXJ0IiwiUSIsInFiIiwiViIsIm5iIiwiRW1pdHRlcl9TdHJpcGVfcGFyZW50IiwiX2kwIiwiX3MwIiwiXzh4IiwiXzh5IiwiXzh6IiwiXzlpMCIsIl85czAiLCJfMTFmcyIsIl8xMXZzIiwiXzExcnciLCJfMTFyd24iLCJfMTFyd2wiLCJfMTF2IiwiXzExcCIsIl8xMWR0bCIsIl8xMWR0cCIsIl8xMWRmIiwiXzExZnNkIiwicmIiLCJJIiwicGIiLCJFbWl0dGVyX1NwYXJrcyIsIl8xM2ZzIiwiXzEzdnMiLCJfMTNydyIsIl8xM3J3biIsIl8xM3J3bCIsIl8xM3YiLCJfMTNwIiwiXzEzZHRsIiwiXzEzZHRwIiwiXzEzZGYiLCJfMTNmc2QiLCJFbWl0dGVyX0ZpcmV3b3Jrc19wYXJlbnQiLCJfM2kiLCJfM3MiLCJfNGkiLCJfNHMiLCJfMTFpMCIsIl8xMXMwIiwia2IiLCJsYiIsIlkiLCJyYW5kb20iLCJyIiwicGF0aCIsImluZGV4SW50IiwibGVycCIsImZ1bmNWYWx1ZXMiLCJuZXh0SW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0MsV0FBVUEsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBckQsRUFBa0U7QUFDOURBLElBQUFBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFpQkQsT0FBTyxFQUF4QjtBQUNILEdBRkQsTUFFTyxJQUFJLE9BQU9HLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBM0MsRUFBZ0Q7QUFDbkRELElBQUFBLE1BQU0sQ0FBQyxDQUFDLFNBQUQsQ0FBRCxFQUFjLFVBQVVGLE9BQVYsRUFBbUI7QUFDbkMsT0FBQ0YsSUFBSSxDQUFDTSxjQUFMLEdBQXNCSixPQUF2QixFQUFnQyxhQUFoQyxJQUFpREQsT0FBTyxFQUF4RDtBQUNILEtBRkssQ0FBTjtBQUdILEdBSk0sTUFJQTtBQUNILFFBQUlNLFNBQVMsR0FBSVAsSUFBSSxDQUFDTSxjQUFMLEtBQXdCTixJQUFJLENBQUNNLGNBQUwsR0FBc0IsRUFBOUMsQ0FBakI7QUFDQUMsSUFBQUEsU0FBUyxDQUFDQyxRQUFWLEdBQXFCRCxTQUFTLENBQUMsYUFBRCxDQUFULEdBQTJCTixPQUFPLEVBQXZEO0FBQ0g7QUFDSixDQVhBLEVBV0MsT0FBT1EsSUFBUCxLQUFnQixXQUFoQixHQUE4QkEsSUFBOUIsU0FYRCxFQVc0QyxZQUFZO0FBRXpELFdBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3pCLFFBQUlDLEVBQUUsR0FBRyxJQUFUOztBQUVBLFFBQUlDLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUMxQixXQUFLRCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7O0FBRUEsVUFBSSxLQUFLQSxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzdCLGFBQUtGLEVBQUwsR0FBVSxLQUFLRCxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjLENBQWQsQ0FBVjtBQUVBLGFBQUtFLEVBQUwsR0FBVSxDQUFDTixFQUFFLENBQUNPLFNBQUgsQ0FBYUMsRUFBZCxFQUNUUixFQUFFLENBQUNPLFNBQUgsQ0FBYUUsRUFESixFQUNRLEtBQUtOLEVBQUwsQ0FBUU8sRUFEaEIsQ0FBVjtBQUVBLE9BTEQsTUFPQyxLQUFLUCxFQUFMLEdBQVUsSUFBVjtBQUNELEtBWkQ7O0FBY0FILElBQUFBLEVBQUUsQ0FBQ08sU0FBSCxHQUFlO0FBQ2RDLE1BQUFBLEVBQUUsRUFBRSxZQUFVRyxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3pCLFlBQUlDLEVBQUUsR0FBR2hCLEdBQUcsQ0FBQ2lCLEVBQUosQ0FBT0YsRUFBRSxDQUFDRyxFQUFWLENBQVQ7QUFDQSxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTTCxFQUFULENBQVQ7QUFDQSxZQUFJTSxFQUFFLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTUCxFQUFULENBQVQ7QUFDQSxZQUFJUSxFQUFFLEdBQUd4QixHQUFHLENBQUN5QixFQUFKLENBQU9WLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBUCxDQUFUO0FBQ0EsWUFBSUMsRUFBRSxHQUFHM0IsR0FBRyxDQUFDeUIsRUFBSixDQUFPVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQVAsQ0FBVDtBQUNBYixRQUFBQSxFQUFFO0FBQUM7QUFBSWUsUUFBQUEsU0FBUCxDQUFpQkosRUFBRSxHQUFHTCxFQUF0QixFQUEwQkssRUFBRSxHQUFHRixFQUEvQixFQUFtQ0ssRUFBRSxHQUFHLENBQUNMLEVBQXpDLEVBQTZDSyxFQUFFLEdBQUdSLEVBQWxELEVBQXNETCxFQUFFLENBQUMsQ0FBRCxDQUF4RCxFQUE2REEsRUFBRSxDQUFDLENBQUQsQ0FBL0Q7QUFDQSxPQVJhO0FBVWRILE1BQUFBLEVBQUUsRUFBRSxZQUFVRSxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3pCLFlBQUljLENBQUMsR0FBR2QsRUFBRSxDQUFDZSxFQUFYO0FBQ0EsWUFBSUMsRUFBRSxHQUFHLE1BQU1GLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBdkI7QUFDQSxZQUFJRyxFQUFFLEdBQUcsTUFBTUgsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLFlBQUlJLEVBQUUsR0FBRyxNQUFNSixDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0EsWUFBSUwsRUFBRSxHQUFHeEIsR0FBRyxDQUFDeUIsRUFBSixDQUFPVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQVAsQ0FBVDtBQUNBLFlBQUlDLEVBQUUsR0FBRzNCLEdBQUcsQ0FBQ3lCLEVBQUosQ0FBT1YsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixDQUFQLENBQVQ7QUFDQWIsUUFBQUEsRUFBRTtBQUFDO0FBQUllLFFBQUFBLFNBQVAsQ0FDQ0osRUFBRSxJQUFJLE1BQU0sTUFBTUssQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUEwQkUsRUFBOUIsQ0FESCxFQUVDUCxFQUFFLElBQUlRLEVBQUUsR0FBR0MsRUFBVCxDQUZILEVBR0NOLEVBQUUsSUFBSU0sRUFBRSxHQUFHRCxFQUFULENBSEgsRUFJQ0wsRUFBRSxJQUFJLE1BQU1FLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxHQUFvQkUsRUFBcEIsR0FBeUIsR0FBN0IsQ0FKSCxFQUtDakIsRUFBRSxDQUFDLENBQUQsQ0FMSCxFQUtRQSxFQUFFLENBQUMsQ0FBRCxDQUxWO0FBTUEsT0F2QmE7QUF5QmRvQixNQUFBQSxFQUFFLEVBQUUsWUFBVXJCLEVBQVYsRUFBY0UsRUFBZCxFQUFrQm9CLEVBQWxCLEVBQXNCO0FBQ3pCcEIsUUFBQUEsRUFBRSxDQUFDcUIsRUFBSCxDQUFNdkIsRUFBTixFQUFVLENBQUMsQ0FBWCxFQUFjc0IsRUFBZDs7QUFFQSxZQUFJLEtBQUs5QixFQUFULEVBQWE7QUFFWixjQUFJLEtBQUtnQyxFQUFMLElBQVcsSUFBWCxJQUFtQixDQUFDdEIsRUFBRSxDQUFDdUIsRUFBM0IsRUFBK0I7QUFFOUIsZ0JBQUl2QixFQUFFLENBQUN3QixFQUFILEdBQVEsS0FBWixFQUFtQjtBQUNsQixrQkFBSUMsRUFBRSxHQUFHcEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBQ0Esa0JBQUlDLEVBQUUsR0FBR3hCLElBQUksQ0FBQ3FCLEtBQUwsQ0FBVzFCLEVBQUUsQ0FBQzJCLEVBQUgsR0FBUSxLQUFLckMsRUFBTCxDQUFRc0MsRUFBM0IsQ0FBVDtBQUVBLGtCQUFJN0IsRUFBRSxHQUFHQyxFQUFFLENBQUNELEVBQUgsQ0FBTStCLEtBQU4sRUFBVDtBQUNBLGtCQUFJbkIsRUFBRSxHQUFHWCxFQUFFLENBQUNXLEVBQUgsQ0FBTW1CLEtBQU4sRUFBVDs7QUFDQSxrQkFBSSxDQUFDVixFQUFELElBQU9BLEVBQUU7QUFBQztBQUFJUCxjQUFBQSxTQUFQLENBQWlCZCxFQUFqQixFQUFxQlksRUFBckIsQ0FBWCxFQUFxQztBQUVwQyxvQkFBSW9CLEVBQUUsR0FBRzFCLElBQUksQ0FBQzJCLEdBQUwsQ0FBU3JCLEVBQUUsQ0FBQyxDQUFELENBQVgsQ0FBVDtBQUNBLG9CQUFJc0IsRUFBRSxHQUFHNUIsSUFBSSxDQUFDMkIsR0FBTCxDQUFTckIsRUFBRSxDQUFDLENBQUQsQ0FBWCxDQUFUOztBQUVBLG9CQUFJb0IsRUFBRSxHQUFHLEtBQUwsSUFBY0UsRUFBRSxHQUFHLEtBQXZCLEVBQThCO0FBQzdCbkMsa0JBQUFBLEVBQUUsQ0FBQ29DLElBQUg7QUFDQSx1QkFBS3pDLEVBQUwsQ0FBUUssRUFBUixFQUFZQyxFQUFaLEVBQWdCQyxFQUFoQjtBQUVBRixrQkFBQUEsRUFBRSxDQUFDcUMsU0FBSCxDQUFhLENBQUNKLEVBQUQsR0FBTS9CLEVBQUUsQ0FBQ29DLEVBQUgsQ0FBTSxDQUFOLENBQW5CLEVBQTZCLENBQUNILEVBQUQsSUFBTyxJQUFJakMsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBWCxDQUE3QjtBQUNBdEMsa0JBQUFBLEVBQUUsQ0FBQ3VDLFdBQUgsSUFBa0JyQyxFQUFFLENBQUN3QixFQUFyQjs7QUFFQSxzQkFBSXhCLEVBQUUsQ0FBQ3NDLEVBQUgsQ0FBTSxDQUFOLElBQVcsS0FBWCxJQUFvQnRDLEVBQUUsQ0FBQ3NDLEVBQUgsQ0FBTSxDQUFOLElBQVcsS0FBL0IsSUFBd0N0QyxFQUFFLENBQUNzQyxFQUFILENBQU0sQ0FBTixJQUFXLEtBQXZELEVBQThEO0FBQzdELHdCQUFJUCxFQUFFLElBQUksQ0FBTixJQUFXRSxFQUFFLElBQUksQ0FBckIsRUFBd0I7QUFDdkIsMEJBQUlNLEVBQUUsR0FBR1IsRUFBRSxHQUFHLEtBQUtTLEVBQVYsR0FBZVQsRUFBZixHQUFvQixLQUFLUyxFQUFsQztBQUNBLDBCQUFJQyxFQUFFLEdBQUdSLEVBQUUsR0FBRyxLQUFLUyxFQUFWLEdBQWVULEVBQWYsR0FBb0IsS0FBS1MsRUFBbEM7QUFFQXpELHNCQUFBQSxHQUFHLENBQUMwRCxFQUFKLENBQU9KLEVBQVAsRUFBV0UsRUFBWDtBQUVBeEQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0Msd0JBQVAsR0FBa0MsTUFBbEM7QUFDQTVELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9FLFNBQVAsQ0FBaUIsS0FBS3hCLEVBQUwsQ0FBUXlCLEtBQXpCLEVBQ0MsS0FBS3pCLEVBQUwsQ0FBUTBCLENBQVIsR0FBWSxLQUFLUixFQUFMLEdBQVVmLEVBRHZCLEVBQzJCLEtBQUtILEVBQUwsQ0FBUTJCLENBQVIsR0FBWSxLQUFLUCxFQUFMLEdBQVViLEVBRGpELEVBRUMsS0FBS1csRUFGTixFQUVVLEtBQUtFLEVBRmYsRUFHQyxDQUhELEVBR0ksQ0FISixFQUdPSCxFQUhQLEVBR1dFLEVBSFg7QUFLQXhELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9DLHdCQUFQLEdBQWtDLFVBQWxDO0FBQ0E1RCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPTSxTQUFQLEdBQW1CakUsR0FBRyxDQUFDa0UsRUFBSixDQUFPbkQsRUFBRSxDQUFDc0MsRUFBVixDQUFuQjtBQUNBckQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT1EsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQmIsRUFBdEIsRUFBMEJFLEVBQTFCO0FBRUF4RCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPQyx3QkFBUCxHQUFrQyxrQkFBbEM7QUFDQTVELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9FLFNBQVAsQ0FBaUIsS0FBS3hCLEVBQUwsQ0FBUXlCLEtBQXpCLEVBQ0MsS0FBS3pCLEVBQUwsQ0FBUTBCLENBQVIsR0FBWSxLQUFLUixFQUFMLEdBQVVmLEVBRHZCLEVBQzJCLEtBQUtILEVBQUwsQ0FBUTJCLENBQVIsR0FBWSxLQUFLUCxFQUFMLEdBQVViLEVBRGpELEVBRUMsS0FBS1csRUFGTixFQUVVLEtBQUtFLEVBRmYsRUFHQyxDQUhELEVBR0ksQ0FISixFQUdPSCxFQUhQLEVBR1dFLEVBSFg7QUFLQTNDLHNCQUFBQSxFQUFFLENBQUNnRCxTQUFILENBQWE3RCxHQUFHLENBQUNvRSxFQUFqQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQmQsRUFBM0IsRUFBK0JFLEVBQS9CLEVBQW1DLENBQW5DLEVBQXNDLENBQXRDLEVBQXlDVixFQUF6QyxFQUE2Q0UsRUFBN0M7QUFDQTtBQUNELG1CQXpCRCxNQTBCSztBQUNKbkMsb0JBQUFBLEVBQUUsQ0FBQ2dELFNBQUgsQ0FBYSxLQUFLeEIsRUFBTCxDQUFReUIsS0FBckIsRUFDQyxLQUFLekIsRUFBTCxDQUFRMEIsQ0FBUixHQUFZLEtBQUtSLEVBQUwsR0FBVWYsRUFEdkIsRUFDMkIsS0FBS0gsRUFBTCxDQUFRMkIsQ0FBUixHQUFZLEtBQUtQLEVBQUwsR0FBVWIsRUFEakQsRUFFQyxLQUFLVyxFQUZOLEVBRVUsS0FBS0UsRUFGZixFQUVtQixDQUZuQixFQUVzQixDQUZ0QixFQUV5QlgsRUFGekIsRUFFNkJFLEVBRjdCO0FBR0E7O0FBRURuQyxrQkFBQUEsRUFBRSxDQUFDd0QsT0FBSDtBQUNBO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7O0FBRUR0RCxRQUFBQSxFQUFFLENBQUNxQixFQUFILENBQU12QixFQUFOLEVBQVUsQ0FBVixFQUFhc0IsRUFBYjtBQUNBLE9BMUZhO0FBNEZkbUMsTUFBQUEsRUFBRSxFQUFFLFlBQVV6RCxFQUFWLEVBQWNzQixFQUFkLEVBQWtCO0FBQ3JCdEIsUUFBQUEsRUFBRSxDQUFDb0MsSUFBSDs7QUFFQSxZQUFJLEtBQUs1QyxFQUFULEVBQWE7QUFDWlEsVUFBQUEsRUFBRSxDQUFDK0Msd0JBQUgsR0FBOEIsS0FBS3pELEVBQUwsQ0FBUW9FLFNBQVIsQ0FBa0IsS0FBS3BFLEVBQUw7QUFBUTtBQUFJcUUsVUFBQUEsS0FBWixDQUFrQkMsWUFBbEIsQ0FBK0IsS0FBS3BFLEVBQUwsQ0FBUXFFLGdCQUF2QyxFQUF5REMsYUFBM0UsQ0FBOUI7QUFDQSxlQUFLdEMsRUFBTCxHQUFVLEtBQUtsQyxFQUFMLENBQVF5RSxZQUFSLENBQXFCLEtBQUt6RSxFQUFMO0FBQVE7QUFBSXFFLFVBQUFBLEtBQVosQ0FBa0JDLFlBQWxCLENBQStCLEtBQUtwRSxFQUFMLENBQVFxRSxnQkFBdkMsRUFBeURHLGNBQXpELENBQXdFLENBQXhFLENBQXJCLENBQVY7QUFDQSxTQUhELE1BSUs7QUFDSixlQUFLeEMsRUFBTCxHQUFVLElBQVY7QUFDQTs7QUFFRCxZQUFJLEtBQUtBLEVBQVQsRUFBYTtBQUNaLGVBQUtrQixFQUFMLEdBQVUsS0FBS2xCLEVBQUwsQ0FBUXlDLEtBQVIsR0FBZ0IsS0FBS3pFLEVBQUwsQ0FBUXNDLEVBQWxDO0FBQ0EsZUFBS2MsRUFBTCxHQUFVLEtBQUtwQixFQUFMLENBQVEwQyxNQUFSLEdBQWlCLEtBQUsxRSxFQUFMLENBQVEyRSxFQUFuQztBQUNBOztBQUVELGlCQUFTQyxFQUFULENBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUNqQixjQUFJRCxDQUFDLENBQUNwRSxFQUFGLENBQUssQ0FBTCxJQUFVcUUsQ0FBQyxDQUFDckUsRUFBRixDQUFLLENBQUwsQ0FBZCxFQUNDLE9BQU8sQ0FBUDtBQUNELGNBQUlvRSxDQUFDLENBQUNwRSxFQUFGLENBQUssQ0FBTCxJQUFVcUUsQ0FBQyxDQUFDckUsRUFBRixDQUFLLENBQUwsQ0FBZCxFQUNDLE9BQU8sQ0FBQyxDQUFSO0FBQ0QsaUJBQU8sQ0FBUDtBQUNBOztBQUVELGdCQUFRLEtBQUtWLEVBQUwsQ0FBUWdGLEVBQWhCO0FBQ0MsZUFBSyxDQUFMO0FBQ0MsaUJBQUssSUFBSUMsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLakYsRUFBTCxDQUFRa0YsRUFBUixDQUFXL0UsTUFBakMsRUFBeUMsRUFBRThFLEVBQTNDLEVBQStDO0FBQzlDLG1CQUFLbkQsRUFBTCxDQUFRckIsRUFBUixFQUFZLEtBQUtULEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFaLEVBQTRCbEQsRUFBNUI7QUFDQTs7QUFDRDs7QUFDRCxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJa0QsRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUF6QixFQUFpQzhFLEVBQUUsS0FBSyxDQUF4QyxHQUE0QztBQUMzQyxtQkFBS25ELEVBQUwsQ0FBUXJCLEVBQVIsRUFBWSxLQUFLVCxFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBWixFQUE0QmxELEVBQTVCO0FBQ0E7O0FBQ0Q7O0FBQ0QsZUFBSyxDQUFMO0FBQ0MsaUJBQUsvQixFQUFMLENBQVFrRixFQUFSLENBQVdDLElBQVgsQ0FBZ0JOLEVBQWhCOztBQUVBLGlCQUFLLElBQUlJLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQWpDLEVBQXlDLEVBQUU4RSxFQUEzQyxFQUErQztBQUM5QyxtQkFBS25ELEVBQUwsQ0FBUXJCLEVBQVIsRUFBWSxLQUFLVCxFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBWixFQUE0QmxELEVBQTVCO0FBQ0E7O0FBQ0Q7QUFqQkY7O0FBb0JBdEIsUUFBQUEsRUFBRSxDQUFDd0QsT0FBSDtBQUNBO0FBeklhLEtBQWY7O0FBNElBLFFBQUltQixFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFVckYsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0FBRTFCLFdBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUVBLFVBQUksS0FBS0EsRUFBTCxDQUFRQyxFQUFSLENBQVdDLEVBQVgsQ0FBY0MsTUFBZCxHQUF1QixDQUEzQixFQUNDLEtBQUtGLEVBQUwsR0FBVSxLQUFLRCxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjLENBQWQsQ0FBVixDQURELEtBR0MsS0FBS0QsRUFBTCxHQUFVLElBQVY7QUFFRCxXQUFLb0YsTUFBTCxHQUFjLENBQ2I7QUFBRTtBQUFJQyxRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQURhLEVBRWI7QUFBRTtBQUFJRixRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQUZhLEVBR2I7QUFBRTtBQUFJRixRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQUhhLEVBSWI7QUFBRTtBQUFJRixRQUFBQSxRQUFRLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7O0FBQWlDO0FBQUlDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBNUM7O0FBQTBEO0FBQUlDLFFBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBRDtBQUF6RSxPQUphLENBQWQ7QUFLQSxLQWZEOztBQWlCQUosSUFBQUEsRUFBRSxDQUFDL0UsU0FBSCxHQUFlO0FBQ2RvRixNQUFBQSxFQUFFLEVBQUUsWUFBVTlFLEVBQVYsRUFBYytFLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsWUFBMUIsRUFBd0M7QUFDM0NsRixRQUFBQSxFQUFFLENBQUNtRixFQUFILENBQU0sQ0FBQyxDQUFQLEVBQVVKLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLFlBQXRCOztBQUVBLFlBQUksS0FBSzVGLEVBQVQsRUFBYTtBQUVaLGNBQUksQ0FBQ1UsRUFBRSxDQUFDdUIsRUFBUixFQUFZO0FBRVgsZ0JBQUk2RCxFQUFFLEdBQUcsS0FBS1YsTUFBTCxDQUFZLENBQVosQ0FBVDtBQUNBLGdCQUFJVyxFQUFFLEdBQUcsS0FBS1gsTUFBTCxDQUFZLENBQVosQ0FBVDtBQUNBLGdCQUFJWSxFQUFFLEdBQUcsS0FBS1osTUFBTCxDQUFZLENBQVosQ0FBVDtBQUNBLGdCQUFJYSxFQUFFLEdBQUcsS0FBS2IsTUFBTCxDQUFZLENBQVosQ0FBVDtBQUVBLGdCQUFJYyxFQUFFLEdBQUcsRUFBVDtBQUFBLGdCQUFhQyxFQUFFLEdBQUcsRUFBbEI7O0FBRUEsZ0JBQUksS0FBS25HLEVBQUwsQ0FBUU8sRUFBUixJQUFjLENBQWxCLEVBQXFCO0FBQ3BCLGtCQUFJc0UsQ0FBQyxHQUFHbEYsR0FBRyxDQUFDaUIsRUFBSixDQUFPRixFQUFFLENBQUNHLEVBQVYsQ0FBUjtBQUNBLGtCQUFJdUYsQ0FBQyxHQUFHLENBQUNyRixJQUFJLENBQUNHLEdBQUwsQ0FBUzJELENBQVQsQ0FBVDtBQUNBLGtCQUFJd0IsQ0FBQyxHQUFHdEYsSUFBSSxDQUFDQyxHQUFMLENBQVM2RCxDQUFULENBQVI7QUFFQXFCLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRWSxDQUFSLEdBQVlYLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVUsQ0FBNUI7QUFDQUYsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFZLENBQVIsR0FBWVgsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVSxDQUE1QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFULEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVksQ0FBUixHQUFZWCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFVLENBQTVCO0FBRUFELGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFDVixFQUFFLENBQUMsQ0FBRCxDQUFILEdBQVNXLENBQVQsR0FBYVYsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVyxDQUE3QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBQ1YsRUFBRSxDQUFDLENBQUQsQ0FBSCxHQUFTVyxDQUFULEdBQWFWLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVcsQ0FBN0I7QUFDQUYsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQUNWLEVBQUUsQ0FBQyxDQUFELENBQUgsR0FBU1csQ0FBVCxHQUFhVixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFXLENBQTdCO0FBQ0EsYUFaRCxNQWFLO0FBQ0osa0JBQUk3RSxDQUFDLEdBQUdkLEVBQUUsQ0FBQ2UsRUFBWDtBQUNBLGtCQUFJQyxFQUFFLEdBQUcsTUFBTUYsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLGtCQUFJRyxFQUFFLEdBQUcsTUFBTUgsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLGtCQUFJSSxFQUFFLEdBQUcsTUFBTUosQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUVBMEUsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLE1BQU0sTUFBTTFFLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsR0FBMEJFLEVBQWxDO0FBQ0F3RSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVF2RSxFQUFFLEdBQUdDLEVBQWI7QUFDQXNFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxNQUFNMUUsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEdBQW9CLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBMUM7QUFFQTJFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUXhFLEVBQUUsR0FBR0MsRUFBYjtBQUNBdUUsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLE1BQU0sTUFBTTNFLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsR0FBMEJFLEVBQWxDO0FBQ0F5RSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsTUFBTTNFLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBZCxHQUFvQixNQUFNQSxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQTFDO0FBQ0E7O0FBRUQsZ0JBQUk4RSxFQUFFLEdBQUcsRUFBVDtBQUFBLGdCQUFhQyxFQUFFLEdBQUcsRUFBbEI7QUFBQSxnQkFBc0JDLEVBQUUsR0FBRyxFQUEzQjtBQUFBLGdCQUErQkMsRUFBRSxHQUFHLEVBQXBDO0FBQ0E5RyxZQUFBQSxHQUFHLENBQUMrRyxDQUFKLENBQU1KLEVBQU4sRUFBVUosRUFBVixFQUFjLENBQUN4RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQUQsR0FBWVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBMUI7QUFDQW5ELFlBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTUgsRUFBTixFQUFVTCxFQUFWLEVBQWN4RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEtBQVksTUFBTVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBbEIsQ0FBZDtBQUNBbkQsWUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNRixFQUFOLEVBQVVMLEVBQVYsRUFBYyxDQUFDekYsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixDQUFELEdBQVlYLEVBQUUsQ0FBQ29DLEVBQUgsQ0FBTSxDQUFOLENBQTFCO0FBQ0FuRCxZQUFBQSxHQUFHLENBQUMrRyxDQUFKLENBQU1ELEVBQU4sRUFBVU4sRUFBVixFQUFjekYsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixLQUFZLE1BQU1YLEVBQUUsQ0FBQ29DLEVBQUgsQ0FBTSxDQUFOLENBQWxCLENBQWQ7QUFFQW5ELFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTVAsRUFBRTtBQUFDO0FBQUlULFlBQUFBLFFBQWIsRUFBdUJpQixFQUF2QixFQUEyQkUsRUFBM0I7QUFDQTdHLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTVAsRUFBRTtBQUFDO0FBQUlULFlBQUFBLFFBQWIsRUFBdUJTLEVBQUU7QUFBQztBQUFJVCxZQUFBQSxRQUE5QixFQUF3QzNFLEVBQUUsQ0FBQ0QsRUFBM0M7QUFDQWQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNTixFQUFFO0FBQUM7QUFBSVYsWUFBQUEsUUFBYixFQUF1QmlCLEVBQXZCLEVBQTJCRyxFQUEzQjtBQUNBOUcsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNTixFQUFFO0FBQUM7QUFBSVYsWUFBQUEsUUFBYixFQUF1QlUsRUFBRTtBQUFDO0FBQUlWLFlBQUFBLFFBQTlCLEVBQXdDM0UsRUFBRSxDQUFDRCxFQUEzQztBQUNBZCxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1MLEVBQUU7QUFBQztBQUFJWCxZQUFBQSxRQUFiLEVBQXVCa0IsRUFBdkIsRUFBMkJFLEVBQTNCO0FBQ0E5RyxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1MLEVBQUU7QUFBQztBQUFJWCxZQUFBQSxRQUFiLEVBQXVCVyxFQUFFO0FBQUM7QUFBSVgsWUFBQUEsUUFBOUIsRUFBd0MzRSxFQUFFLENBQUNELEVBQTNDO0FBQ0FkLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUosRUFBRTtBQUFDO0FBQUlaLFlBQUFBLFFBQWIsRUFBdUJrQixFQUF2QixFQUEyQkMsRUFBM0I7QUFDQTdHLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUosRUFBRTtBQUFDO0FBQUlaLFlBQUFBLFFBQWIsRUFBdUJZLEVBQUU7QUFBQztBQUFJWixZQUFBQSxRQUE5QixFQUF3QzNFLEVBQUUsQ0FBQ0QsRUFBM0M7QUFFQTtBQUNDLGtCQUFJa0csR0FBRyxHQUFHaEgsR0FBRyxDQUFDaUgsQ0FBSixDQUFNbEcsRUFBRSxDQUFDc0MsRUFBVCxFQUFhLEdBQWIsQ0FBVjtBQUNBOEMsY0FBQUEsRUFBRTtBQUFDO0FBQUlSLGNBQUFBLEtBQVAsR0FBZVMsRUFBRTtBQUFDO0FBQUlULGNBQUFBLEtBQVAsR0FBZVUsRUFBRTtBQUFDO0FBQUlWLGNBQUFBLEtBQVAsR0FBZVcsRUFBRTtBQUFDO0FBQUlYLGNBQUFBLEtBQVAsR0FBZSxDQUFDcUIsR0FBRyxDQUFDLENBQUQsQ0FBSixFQUFTQSxHQUFHLENBQUMsQ0FBRCxDQUFaLEVBQWlCQSxHQUFHLENBQUMsQ0FBRCxDQUFwQixFQUF5QmpHLEVBQUUsQ0FBQ3dCLEVBQUgsR0FBUSxHQUFqQyxDQUE1RDtBQUNBO0FBRUQ7QUFDQyxrQkFBSUMsRUFBRSxHQUFHcEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBQ0Esa0JBQUlDLEVBQUUsR0FBR3hCLElBQUksQ0FBQ3FCLEtBQUwsQ0FBVzFCLEVBQUUsQ0FBQzJCLEVBQUgsR0FBUSxLQUFLckMsRUFBTCxDQUFRc0MsRUFBM0IsQ0FBVDtBQUVBLGtCQUFJdUUsRUFBSixFQUFRQyxFQUFSLEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCO0FBRUEsa0JBQUlDLEVBQUUsR0FBRyxLQUFLbkgsRUFBTCxDQUFRb0gsYUFBUixDQUFzQixLQUFLcEgsRUFBTDtBQUFRO0FBQUlxRSxjQUFBQSxLQUFaLENBQWtCQyxZQUFsQixDQUErQixLQUFLcEUsRUFBTCxDQUFRcUUsZ0JBQXZDLEVBQXlERyxjQUF6RCxDQUF3RSxDQUF4RSxDQUF0QixDQUFUOztBQUNBLGtCQUFJeUMsRUFBSixFQUFRO0FBQ1Asb0JBQUlFLEVBQUUsR0FBR0YsRUFBRSxDQUFDeEMsS0FBSCxHQUFXLEtBQUt6RSxFQUFMLENBQVFzQyxFQUE1QjtBQUNBLG9CQUFJOEUsRUFBRSxHQUFHSCxFQUFFLENBQUN2QyxNQUFILEdBQVksS0FBSzFFLEVBQUwsQ0FBUTJFLEVBQTdCO0FBRUEsb0JBQUlrQyxFQUFFLEdBQUdJLEVBQUUsQ0FBQ3ZELENBQUgsR0FBT3ZCLEVBQUUsR0FBR2dGLEVBQXJCO0FBQ0Esb0JBQUlMLEVBQUUsR0FBR0QsRUFBRSxHQUFHTSxFQUFkO0FBQ0Esb0JBQUlKLEVBQUUsR0FBSUUsRUFBRSxDQUFDdEQsQ0FBSCxHQUFPc0QsRUFBRSxDQUFDdkMsTUFBVixHQUFtQm5DLEVBQUUsR0FBRzZFLEVBQWxDO0FBQ0Esb0JBQUlKLEVBQUUsR0FBR0QsRUFBRSxHQUFHSyxFQUFkO0FBQ0EsZUFSRCxNQVFPO0FBQ04sb0JBQUlELEVBQUUsR0FBRyxNQUFNLEtBQUtuSCxFQUFMLENBQVFzQyxFQUF2QjtBQUNBLG9CQUFJOEUsRUFBRSxHQUFHLE1BQU0sS0FBS3BILEVBQUwsQ0FBUTJFLEVBQXZCO0FBRUEsb0JBQUlrQyxFQUFFLEdBQUcxRSxFQUFFLEdBQUdnRixFQUFkO0FBQ0Esb0JBQUlMLEVBQUUsR0FBR0QsRUFBRSxHQUFHTSxFQUFkO0FBQ0Esb0JBQUlKLEVBQUUsR0FBSSxNQUFNeEUsRUFBRSxHQUFHNkUsRUFBckI7QUFDQSxvQkFBSUosRUFBRSxHQUFHRCxFQUFFLEdBQUdLLEVBQWQ7QUFDQTs7QUFFRHRCLGNBQUFBLEVBQUU7QUFBQztBQUFJUCxjQUFBQSxTQUFQLENBQWlCLENBQWpCLElBQXNCLENBQUNzQixFQUFELEVBQUtHLEVBQUwsQ0FBdEI7QUFDQWpCLGNBQUFBLEVBQUU7QUFBQztBQUFJUixjQUFBQSxTQUFQLENBQWlCLENBQWpCLElBQXNCLENBQUNzQixFQUFELEVBQUtFLEVBQUwsQ0FBdEI7QUFDQWYsY0FBQUEsRUFBRTtBQUFDO0FBQUlULGNBQUFBLFNBQVAsQ0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ3VCLEVBQUQsRUFBS0MsRUFBTCxDQUF0QjtBQUNBZCxjQUFBQSxFQUFFO0FBQUM7QUFBSVYsY0FBQUEsU0FBUCxDQUFpQixDQUFqQixJQUFzQixDQUFDdUIsRUFBRCxFQUFLRSxFQUFMLENBQXRCO0FBQ0E7O0FBRUQsZ0JBQUlwQixZQUFZLENBQUN5QixVQUFqQixFQUE2QjtBQUM1QnpCLGNBQUFBLFlBQVksQ0FBQ3lCLFVBQWIsQ0FBd0IsS0FBS3JILEVBQUwsQ0FBUXFFLGdCQUFoQztBQUNBOztBQUVEdUIsWUFBQUEsWUFBWSxDQUFDMEIsVUFBYixDQUF3QnhCLEVBQXhCO0FBQ0FGLFlBQUFBLFlBQVksQ0FBQzBCLFVBQWIsQ0FBd0J2QixFQUF4QjtBQUNBSCxZQUFBQSxZQUFZLENBQUMwQixVQUFiLENBQXdCdEIsRUFBeEI7QUFDQUosWUFBQUEsWUFBWSxDQUFDMEIsVUFBYixDQUF3QnJCLEVBQXhCOztBQUVBLGdCQUFJLENBQUNMLFlBQVksQ0FBQzJCLGdCQUFsQixFQUFvQztBQUNuQzNCLGNBQUFBLFlBQVksQ0FBQzJCLGdCQUFiLEdBQWdDLElBQUk1SCxHQUFHLENBQUM2SCxVQUFSLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUt4SCxFQUFMLENBQVFxRSxnQkFBakMsQ0FBaEM7QUFDQSxhQUZELE1BRU87QUFDTixrQkFBSW9ELGNBQWMsR0FBRzdCLFlBQVksQ0FBQzJCLGdCQUFsQzs7QUFFQSxrQkFBSUUsY0FBYyxDQUFDcEQsZ0JBQWYsSUFBbUMsS0FBS3JFLEVBQUwsQ0FBUXFFLGdCQUEvQyxFQUFpRTtBQUNoRW9ELGdCQUFBQSxjQUFjLENBQUNDLFVBQWYsSUFBNkIsQ0FBN0I7QUFDQSxlQUZELE1BRU87QUFDTjlCLGdCQUFBQSxZQUFZLENBQUMrQixjQUFiLENBQTRCRixjQUE1QjtBQUNBN0IsZ0JBQUFBLFlBQVksQ0FBQzJCLGdCQUFiLEdBQWdDLElBQUk1SCxHQUFHLENBQUM2SCxVQUFSLENBQy9CQyxjQUFjLENBQUNHLFVBQWYsR0FBNEJILGNBQWMsQ0FBQ0MsVUFEWixFQUUvQixDQUYrQixFQUU1QixLQUFLMUgsRUFBTCxDQUFRcUUsZ0JBRm9CLENBQWhDO0FBR0E7QUFDRDtBQUNEO0FBQ0Q7O0FBRUQzRCxRQUFBQSxFQUFFLENBQUNtRixFQUFILENBQU0sQ0FBTixFQUFTSixFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxZQUFyQjtBQUNBLE9BekhhO0FBMkhkaUMsTUFBQUEsRUFBRSxFQUFFLFlBQVVwQyxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxZQUF0QixFQUFvQztBQUN2QyxnQkFBUSxLQUFLN0YsRUFBTCxDQUFRZ0YsRUFBaEI7QUFDQyxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUFqQyxFQUF5QyxFQUFFOEUsRUFBM0MsRUFBK0M7QUFDOUMsbUJBQUtRLEVBQUwsQ0FBUSxLQUFLekYsRUFBTCxDQUFRa0YsRUFBUixDQUFXRCxFQUFYLENBQVIsRUFBd0JTLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQ0MsRUFBaEMsRUFBb0NDLFlBQXBDO0FBQ0E7O0FBQ0Q7O0FBRUQsZUFBSyxDQUFMO0FBQ0MsaUJBQUssSUFBSVosRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUF6QixFQUFpQzhFLEVBQUUsS0FBSyxDQUF4QyxHQUE0QztBQUMzQyxtQkFBS1EsRUFBTCxDQUFRLEtBQUt6RixFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBUixFQUF3QlMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsWUFBcEM7QUFDQTs7QUFDRDs7QUFFRCxlQUFLLENBQUw7QUFDQyxpQkFBSzdGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVzZDLE9BQVgsQ0FBbUIsVUFBVXBILEVBQVYsRUFBYztBQUNoQ0EsY0FBQUEsRUFBRSxDQUFDcUgsS0FBSCxHQUFXcEksR0FBRyxDQUFDcUksQ0FBSixDQUFNckMsRUFBTixFQUFVakYsRUFBRSxDQUFDRCxFQUFiLENBQVg7QUFDQSxhQUZEO0FBSUEsaUJBQUtWLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0MsSUFBWCxDQUFnQixVQUFVTCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDL0Isa0JBQUlELENBQUMsQ0FBQ2tELEtBQUYsR0FBVWpELENBQUMsQ0FBQ2lELEtBQWhCLEVBQ0MsT0FBTyxDQUFQO0FBQ0Qsa0JBQUlsRCxDQUFDLENBQUNrRCxLQUFGLEdBQVVqRCxDQUFDLENBQUNpRCxLQUFoQixFQUNDLE9BQU8sQ0FBQyxDQUFSO0FBQ0QscUJBQU8sQ0FBUDtBQUNBLGFBTkQ7QUFRQSxpQkFBS2hJLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVzZDLE9BQVgsQ0FBbUIsVUFBVXBILEVBQVYsRUFBYztBQUNoQyxtQkFBSzhFLEVBQUwsQ0FBUTlFLEVBQVIsRUFBWStFLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QkMsWUFBeEI7QUFDQSxhQUZELEVBRUcsSUFGSDtBQUdBO0FBN0JGO0FBK0JBO0FBM0phLEtBQWY7O0FBOEpBLFFBQUlxQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFVbkksRUFBVixFQUFjRSxFQUFkLEVBQWtCa0ksRUFBbEIsRUFBc0I7QUFDOUIsVUFBSUMsRUFBRSxHQUFHLElBQVQ7QUFDQSxXQUFLckksRUFBTCxHQUFVQSxFQUFWO0FBQ0EsV0FBS0UsRUFBTCxHQUFVQSxFQUFWLENBSDhCLENBSzlCOztBQUVBLGVBQVNvSSxFQUFULEdBQWM7QUFDYixhQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLElBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLENBQVY7QUFFQVAsUUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNMkksRUFBTixDQUFTLElBQVQsRUFSYSxDQVFHOztBQUVoQixhQUFLQyxFQUFMLEdBQVUsWUFBWTtBQUNyQixlQUFLQyxFQUFMLEdBQVUsS0FBS1AsRUFBZjtBQUNBLGVBQUtELEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FIRDs7QUFLQSxhQUFLTyxFQUFMO0FBQ0E7O0FBRURSLE1BQUFBLEVBQUUsQ0FBQ2hJLFNBQUgsR0FBZTtBQUNkMEksUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZixlQUFLRixFQUFMO0FBQ0EsU0FIYTtBQUtkRyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjdkksRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCO0FBQ3pCMEcsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNaUosRUFBTixDQUFTRCxFQUFULEVBQWFiLEVBQWIsRUFBaUIsSUFBakIsRUFEeUIsQ0FDRDs7QUFFeEIsY0FBSWUsRUFBRSxHQUFHZixFQUFFLENBQUNlLEVBQVo7QUFDQSxjQUFJQyxVQUFVLEdBQUdySixFQUFFLENBQUNvSixFQUFwQjtBQUNBLGNBQUlFLEVBQUUsR0FBR0osRUFBVDtBQUNBLGNBQUlLLEVBQUUsR0FBRyxDQUFUOztBQUVBLGNBQUksS0FBS0MsRUFBTCxHQUFVLFFBQWQsRUFBd0I7QUFFdkIsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLVixFQUFMLEdBQVVHLEVBQUUsR0FBRyxLQUFLTSxFQUE3Qjs7QUFFQSxtQkFBT0MsRUFBRSxJQUFJLEdBQWIsRUFBa0I7QUFDakIsa0JBQUlDLEVBQUUsR0FBRyxLQUFLRixFQUFMLEdBQVUsS0FBVixHQUFrQixHQUFsQixHQUF3QixDQUFDLE1BQU0sS0FBS1QsRUFBWixJQUFrQixLQUFLUyxFQUF4RDtBQUNBRixjQUFBQSxFQUFFLElBQUlJLEVBQU47QUFDQU4sY0FBQUEsRUFBRSxJQUFJTSxFQUFOO0FBQ0FMLGNBQUFBLFVBQVUsSUFBSUssRUFBZDs7QUFFQSxrQkFBSSxLQUFLakIsRUFBTCxJQUFXLElBQVgsSUFBbUJXLEVBQUUsR0FBRyxLQUFLWCxFQUFqQyxFQUFxQztBQUNwQ0osZ0JBQUFBLEVBQUUsQ0FBQ3NCLFdBQUg7QUFDQTtBQUNBOztBQUVEdEIsY0FBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVFBLEVBQVI7QUFDQXBKLGNBQUFBLEVBQUUsQ0FBQ29KLEVBQUgsR0FBUUMsVUFBUjtBQUVBLGtCQUFJMUksRUFBRSxJQUFJdUksRUFBRSxHQUFHLENBQWYsRUFDQ3JKLEdBQUcsQ0FBQytKLEVBQUosQ0FBT3ZCLEVBQUUsQ0FBQzFILEVBQVYsRUFBY0EsRUFBZCxFQUFrQjBILEVBQUUsQ0FBQ3dCLEVBQXJCLEVBQXlCUCxFQUFFLEdBQUdKLEVBQTlCO0FBRUQsa0JBQUl2SCxFQUFFLElBQUl1SCxFQUFFLEdBQUcsQ0FBZixFQUNDckosR0FBRyxDQUFDaUssTUFBSixDQUFXekIsRUFBRSxDQUFDMUcsRUFBZCxFQUFrQkEsRUFBbEIsRUFBc0IwRyxFQUFFLENBQUMwQixZQUF6QixFQUF1Q1QsRUFBRSxHQUFHSixFQUE1QyxFQWxCZ0IsQ0FvQmpCOztBQUNBLG1CQUFLTixFQUFMLEdBQVUsS0FBS29CLEVBQWY7O0FBRUEsbUJBQUssSUFBSTlFLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBSzhFLEVBQTNCLEVBQStCLEVBQUU5RSxFQUFqQyxFQUFxQztBQUNwQyxvQkFBSW1ELEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTTdKLE1BQU4sSUFBZ0IsQ0FBcEIsRUFDQztBQUVELG9CQUFJLEtBQUs0SixFQUFMLElBQVcsQ0FBZixFQUNDLEtBQUtyQixFQUFMLEdBQVUsQ0FBVixDQURELEtBR0MsS0FBS0EsRUFBTCxHQUFVekQsRUFBRSxJQUFJLEtBQUs4RSxFQUFMLEdBQVUsQ0FBZCxDQUFaO0FBRUQsb0JBQUlwSixFQUFFLEdBQUd5SCxFQUFFLENBQUM0QixFQUFILENBQU1DLEdBQU4sRUFBVDtBQUNBN0IsZ0JBQUFBLEVBQUUsQ0FBQ2xELEVBQUgsQ0FBTWdGLE9BQU4sQ0FBY3ZKLEVBQWQ7QUFFQSxvQkFBSXNFLEVBQUUsSUFBSSxDQUFWLEVBQ0N0RSxFQUFFLENBQUN3SixFQUFILEdBREQsS0FHQ3hKLEVBQUUsQ0FBQ3lKLEVBQUg7QUFFRHpKLGdCQUFBQSxFQUFFLENBQUNxSSxFQUFILENBQU1LLEVBQU47QUFDQSxrQkFBRUMsRUFBRjtBQUNBOztBQUVELG1CQUFLUixFQUFMLEdBQVUsR0FBVjtBQUNBVSxjQUFBQSxFQUFFLElBQUksR0FBTjs7QUFFQSxrQkFBSSxLQUFLZixFQUFMLElBQVcsSUFBWCxJQUFtQixFQUFFLEtBQUtILEVBQVAsSUFBYSxLQUFLRyxFQUF6QyxFQUE2QztBQUM1Q0wsZ0JBQUFBLEVBQUUsQ0FBQ3NCLFdBQUg7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsaUJBQUtaLEVBQUwsR0FBVVUsRUFBVjtBQUNBOztBQUNETCxVQUFBQSxFQUFFLElBQUlFLEVBQU47QUFDQWpCLFVBQUFBLEVBQUUsQ0FBQ2UsRUFBSCxHQUFRQSxFQUFSO0FBRUEsY0FBSXpJLEVBQUosRUFDQ2QsR0FBRyxDQUFDeUssQ0FBSixDQUFNakMsRUFBRSxDQUFDMUgsRUFBVCxFQUFhQSxFQUFiO0FBRUQsY0FBSWdCLEVBQUosRUFDQzlCLEdBQUcsQ0FBQzBLLENBQUosQ0FBTWxDLEVBQUUsQ0FBQzFHLEVBQVQsRUFBYUEsRUFBYjtBQUVELGlCQUFPNEgsRUFBUDtBQUNBO0FBbEZhLE9BQWYsQ0F6QjhCLENBOEc5Qjs7QUFFQSxlQUFTaUIsRUFBVCxHQUFjO0FBQ2IsYUFBS2hDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0csRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUVBUCxRQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU0ySSxFQUFOLENBQVMsSUFBVCxFQUxhLENBS0c7O0FBRWhCLGFBQUtDLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGVBQUsyQixFQUFMLEdBQVUsS0FBS2pDLEVBQWY7QUFDQSxTQUZEOztBQUlBLGFBQUtNLEVBQUw7QUFDQTs7QUFFRDBCLE1BQUFBLEVBQUUsQ0FBQ2xLLFNBQUgsR0FBZTtBQUNkMEksUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZixlQUFLRixFQUFMO0FBQ0EsU0FIYTtBQUtkRyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjdkksRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCO0FBQ3pCMEcsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNaUosRUFBTixDQUFTRCxFQUFULEVBQWFiLEVBQWIsRUFBaUIsSUFBakIsRUFEeUIsQ0FDRDs7QUFFeEIsY0FBSXFDLEVBQUUsR0FBR3JDLEVBQUUsQ0FBQ2UsRUFBWjtBQUNBLGNBQUl1QixFQUFFLEdBQUdELEVBQUUsR0FBR3hCLEVBQWQ7QUFDQSxjQUFJMEIscUJBQXFCLEdBQUc1SyxFQUFFLENBQUNvSixFQUEvQjtBQUNBLGNBQUl5QixvQkFBb0IsR0FBR0QscUJBQXFCLEdBQUcxQixFQUFuRDtBQUNBLGNBQUk0QixFQUFFLEdBQUduSyxFQUFFLEdBQUdkLEdBQUcsQ0FBQ2tMLENBQUosQ0FBTWxMLEdBQUcsQ0FBQ21MLENBQUosQ0FBTXJLLEVBQU4sRUFBVTBILEVBQUUsQ0FBQ3dCLEVBQWIsQ0FBTixDQUFILEdBQTZCLENBQXhDO0FBQ0EsY0FBSU4sRUFBRSxHQUFHLENBQVQ7O0FBRUEsY0FBSXVCLEVBQUUsR0FBRyxRQUFULEVBQW1CO0FBQ2xCLGdCQUFJRyxFQUFFLEdBQUdILEVBQUUsR0FBRyxLQUFLSSxFQUFuQjtBQUNBLGdCQUFJekIsRUFBRSxHQUFHLEtBQUtnQixFQUFMLEdBQVVRLEVBQW5CO0FBRUEsZ0JBQUlFLEVBQUUsR0FBR0YsRUFBRSxHQUFHLEtBQUwsR0FDUixNQUFNLEtBQUtSLEVBREgsR0FDUSxDQUFDLE1BQU0sS0FBS0EsRUFBWixJQUFrQlEsRUFEbkM7QUFHQSxnQkFBSUcsRUFBRSxHQUFHLEVBQVQ7O0FBRUEsbUJBQU8zQixFQUFFLEdBQUcsR0FBWixFQUFpQjtBQUNoQixrQkFBSTRCLEVBQUUsR0FBR1gsRUFBRSxHQUFHUyxFQUFFLEdBQUdqQyxFQUFuQjtBQUVBLGtCQUFJdkksRUFBSixFQUNDZCxHQUFHLENBQUMrSixFQUFKLENBQU93QixFQUFQLEVBQVcvQyxFQUFFLENBQUN3QixFQUFkLEVBQWtCbEosRUFBbEIsRUFBc0J3SyxFQUF0QjtBQUVEOUMsY0FBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVFpQyxFQUFSO0FBQ0F4TCxjQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU1qQyxFQUFFLENBQUMxSCxFQUFULEVBQWF5SyxFQUFiO0FBQ0FwTCxjQUFBQSxFQUFFLENBQUNvSixFQUFILEdBQVF2SixHQUFHLENBQUN5TCxDQUFKLENBQU1WLHFCQUFOLEVBQTZCQyxvQkFBN0IsRUFBbURNLEVBQW5ELENBQVIsQ0FSZ0IsQ0FVaEI7O0FBQ0EsbUJBQUt2QyxFQUFMLEdBQVUsS0FBS29CLEVBQWY7O0FBRUEsbUJBQUssSUFBSTlFLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBSzhFLEVBQTNCLEVBQStCLEVBQUU5RSxFQUFqQyxFQUFxQztBQUNwQyxvQkFBSW1ELEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTTdKLE1BQU4sSUFBZ0IsQ0FBcEIsRUFDQztBQUVELG9CQUFJLEtBQUs0SixFQUFMLElBQVcsQ0FBZixFQUNDLEtBQUtyQixFQUFMLEdBQVUsQ0FBVixDQURELEtBR0MsS0FBS0EsRUFBTCxHQUFVekQsRUFBRSxJQUFJLEtBQUs4RSxFQUFMLEdBQVUsQ0FBZCxDQUFaO0FBRUQsb0JBQUlwSixFQUFFLEdBQUd5SCxFQUFFLENBQUM0QixFQUFILENBQU1DLEdBQU4sRUFBVDtBQUNBN0IsZ0JBQUFBLEVBQUUsQ0FBQ2xELEVBQUgsQ0FBTWdGLE9BQU4sQ0FBY3ZKLEVBQWQ7QUFFQSxvQkFBSXNFLEVBQUUsSUFBSSxDQUFWLEVBQ0N0RSxFQUFFLENBQUN3SixFQUFILEdBREQsS0FHQ3hKLEVBQUUsQ0FBQ3lKLEVBQUg7QUFFRHpKLGdCQUFBQSxFQUFFLENBQUNxSSxFQUFILENBQU1DLEVBQUUsSUFBSSxNQUFNaUMsRUFBVixDQUFSO0FBQ0Esa0JBQUU1QixFQUFGO0FBQ0E7O0FBRUQ0QixjQUFBQSxFQUFFLElBQUksTUFBTUYsRUFBWjtBQUNBeEIsY0FBQUEsRUFBRSxJQUFJLEdBQU47QUFDQTs7QUFFRCxpQkFBS2dCLEVBQUwsR0FBVWhCLEVBQVY7QUFDQTs7QUFFRHBCLFVBQUFBLEVBQUUsQ0FBQ2UsRUFBSCxHQUFRdUIsRUFBUjtBQUVBLGNBQUloSyxFQUFKLEVBQ0NkLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTWpDLEVBQUUsQ0FBQzFILEVBQVQsRUFBYUEsRUFBYjtBQUVELGNBQUlnQixFQUFKLEVBQ0M5QixHQUFHLENBQUMwSyxDQUFKLENBQU1sQyxFQUFFLENBQUMxRyxFQUFULEVBQWFBLEVBQWI7QUFFRCxpQkFBTzRILEVBQVA7QUFDQTtBQTFFYSxPQUFmLENBOUg4QixDQTJNOUI7O0FBRUEsZUFBU2dDLEVBQVQsR0FBYztBQUNiLGFBQUs1SyxFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUtxQyxFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUt6QixFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUsyQixFQUFMLEdBQVUsRUFBVjtBQUNBLGFBQUtzSSxFQUFMLEdBQVUsRUFBVjtBQUNBOztBQUVERCxNQUFBQSxFQUFFLENBQUNqTCxTQUFILEdBQWU7QUFDZG1MLFFBQUFBLEVBQUUsRUFBRSxjQUFZO0FBQ2YsZUFBS3RKLEVBQUwsR0FBVSxLQUFWOztBQUVBLGVBQUssSUFBSXVKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGdCQUFJQyxFQUFFLEdBQUcsS0FBS0gsRUFBTCxDQUFRRSxDQUFSLENBQVQ7QUFDQUMsWUFBQUEsRUFBRSxDQUFDMUwsRUFBSCxDQUFNK0ksRUFBTixDQUFTLEtBQUtySSxFQUFkLEVBQWtCLElBQWxCO0FBRUEsZ0JBQUlnTCxFQUFFLENBQUNDLEVBQUgsQ0FBTUMsRUFBVixFQUNDRixFQUFFLENBQUMxTCxFQUFILENBQU0wSixXQUFOO0FBQ0Q7QUFDRCxTQVhhO0FBYWRTLFFBQUFBLEVBQUUsRUFBRSxjQUFZO0FBQ2YvQixVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU00TCxFQUFOLENBQVN6RCxFQUFULEVBQWEsSUFBYixFQURlLENBQ0s7O0FBQ3BCLGVBQUtvRCxFQUFMO0FBQ0EsU0FoQmE7QUFrQmRwQixRQUFBQSxFQUFFLEVBQUUsY0FBWTtBQUNmaEMsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNNkwsRUFBTixDQUFTMUQsRUFBVCxFQUFhLElBQWIsRUFEZSxDQUNLOztBQUNwQixlQUFLb0QsRUFBTDtBQUNBLFNBckJhO0FBdUJkeEMsUUFBQUEsRUFBRSxFQUFFLFlBQVVDLEVBQVYsRUFBYztBQUNqQmIsVUFBQUEsRUFBRSxDQUFDbkksRUFBSCxDQUFNOEwsRUFBTixDQUFTOUMsRUFBVCxFQUFhYixFQUFiLEVBQWlCLElBQWpCLEVBRGlCLENBQ087O0FBRXhCLGVBQUs0RCxFQUFMLENBQVEvQyxFQUFSO0FBQ0EsU0EzQmE7QUE2QmR5QyxRQUFBQSxFQUFFLEVBQUUsWUFBVU8sRUFBVixFQUFjO0FBQ2pCLGlCQUFPLEtBQUtWLEVBQUwsQ0FBUVUsRUFBUixFQUFZak0sRUFBbkI7QUFDQSxTQS9CYTtBQWlDZGdNLFFBQUFBLEVBQUUsRUFBRSxZQUFVL0MsRUFBVixFQUFjO0FBQ2pCLGVBQUssSUFBSXdDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0NzTCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3hDLGlCQUFLRixFQUFMLENBQVFFLENBQVIsRUFBV3pMLEVBQVgsQ0FBY2dKLEVBQWQsQ0FBaUJDLEVBQWpCLEVBQXFCLEtBQUt2SSxFQUExQixFQUE4QixJQUE5QjtBQUNBO0FBQ0QsU0FyQ2E7QUF1Q2R3TCxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0FBQ3JCLGVBQUtiLEVBQUwsQ0FBUWMsSUFBUixDQUFhO0FBQ1pyTSxZQUFBQSxFQUFFLEVBQUUsSUFBSWtJLEVBQUosQ0FBT25JLEVBQVAsRUFBV29NLEVBQVgsRUFBZWhFLEVBQWYsQ0FEUTtBQUVad0QsWUFBQUEsRUFBRSxFQUFFUztBQUZRLFdBQWI7QUFJQSxTQTVDYTtBQThDZHBLLFFBQUFBLEVBQUUsRUFBRSxZQUFVdkIsRUFBVixFQUFjNkwsRUFBZCxFQUFrQnZLLEVBQWxCLEVBQXNCO0FBQ3pCLGVBQUssSUFBSTBKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGdCQUFJQyxFQUFFLEdBQUcsS0FBS0gsRUFBTCxDQUFRRSxDQUFSLENBQVQ7QUFFQSxnQkFBSWEsRUFBRSxJQUFJWixFQUFFLENBQUNDLEVBQUgsQ0FBTVcsRUFBaEIsRUFDQ1osRUFBRSxDQUFDMUwsRUFBSCxDQUFNa0UsRUFBTixDQUFTekQsRUFBVCxFQUFhc0IsRUFBYjtBQUNEO0FBQ0QsU0FyRGE7QUF1RGQrRCxRQUFBQSxFQUFFLEVBQUUsWUFBVXdHLEVBQVYsRUFBYzVHLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsWUFBMUIsRUFBd0M7QUFDM0MsZUFBSyxJQUFJNEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDtBQUVBLGdCQUFJYSxFQUFFLElBQUlaLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNVyxFQUFoQixFQUNDWixFQUFFLENBQUMxTCxFQUFILENBQU04SCxFQUFOLENBQVNwQyxFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxZQUFyQjtBQUNEO0FBQ0QsU0E5RGE7QUFnRWQwRyxRQUFBQSxFQUFFLEVBQUUsWUFBVTlMLEVBQVYsRUFBYztBQUNqQixlQUFLeUIsRUFBTCxHQUFVLElBQVY7O0FBQ0EsZUFBSyxJQUFJdUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDs7QUFFQSxnQkFBSUMsRUFBRSxDQUFDQyxFQUFILENBQU1DLEVBQVYsRUFBYztBQUNiRixjQUFBQSxFQUFFLENBQUMxTCxFQUFILENBQU13TSxRQUFOO0FBQ0FkLGNBQUFBLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTWdKLEVBQU4sQ0FBUyxDQUFUO0FBQ0EsYUFIRCxNQUtDMEMsRUFBRSxDQUFDMUwsRUFBSCxDQUFNMEosV0FBTjtBQUNEO0FBQ0QsU0E1RWE7QUE4RWQrQyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjO0FBQ2pCLGVBQUssSUFBSWpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsRUFBTCxDQUFRcEwsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGlCQUFLRixFQUFMLENBQVFFLENBQVIsRUFBV3pMLEVBQVgsQ0FBYzJNLEVBQWQsQ0FBaUJELEVBQWpCO0FBQ0E7QUFDRDtBQWxGYSxPQUFmLENBck44QixDQTBTOUI7O0FBRUEsZUFBU0UsRUFBVCxHQUFjLENBQ2I7O0FBRURBLE1BQUFBLEVBQUUsQ0FBQ3ZNLFNBQUgsQ0FBYXdNLEVBQWIsR0FBa0IsVUFBVWxNLEVBQVYsRUFBYztBQUMvQixlQUFPeUgsRUFBRSxDQUFDbkksRUFBSCxDQUFNNk0sRUFBTixDQUFTMUUsRUFBVCxFQUFhekgsRUFBYixFQUFpQixJQUFqQixDQUFQLENBRCtCLENBQ0E7QUFDL0IsT0FGRCxDQS9TOEIsQ0FtVDlCOzs7QUFFQSxXQUFLRCxFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtrSixFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtsSSxFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtvSSxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsV0FBSzVFLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBSzhFLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBSytDLEVBQUwsR0FBVSxJQUFJSCxFQUFKLEVBQVY7QUFDQSxXQUFLSSxTQUFMLEdBQWlCLElBQUk3RSxFQUFKLENBQU8sS0FBS3BJLEVBQVosRUFBZ0IsSUFBaEIsQ0FBakI7QUFDQSxXQUFLa04sRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVUsRUFBVjs7QUFFQSxXQUFLQyxFQUFMLEdBQVUsWUFBWTtBQUNyQixhQUFLQyxFQUFMLEdBQVUsSUFBSS9FLEVBQUosRUFBVjtBQUNBLE9BRkQ7O0FBSUEsV0FBS2dGLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGFBQUtELEVBQUwsR0FBVSxJQUFJN0MsRUFBSixFQUFWO0FBQ0EsT0FGRDs7QUFJQSxXQUFLdEssRUFBTCxDQUFRcU4sRUFBUixDQUFXLElBQVgsRUF4VThCLENBd1VaOztBQUVsQixXQUFLLElBQUlySSxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHLEtBQUtzSSxFQUEzQixFQUErQixFQUFFdEksRUFBakMsRUFBcUM7QUFDcEMsWUFBSXRFLEVBQUUsR0FBRyxJQUFJMkssRUFBSixFQUFUOztBQUVBLGFBQUssSUFBSWtDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS1AsRUFBTCxDQUFROU0sTUFBOUIsRUFBc0MsRUFBRXFOLEVBQXhDLEVBQTRDO0FBQzNDLGNBQUlDLEVBQUUsR0FBRyxLQUFLUixFQUFMLENBQVFPLEVBQVIsQ0FBVDtBQUNBN00sVUFBQUEsRUFBRSxDQUFDdUwsRUFBSCxDQUFNdUIsRUFBRSxDQUFDNU4sRUFBVCxFQUFhNE4sRUFBRSxDQUFDOUIsRUFBaEI7QUFDQTs7QUFFRCxhQUFLM0IsRUFBTCxDQUFRcUMsSUFBUixDQUFhMUwsRUFBYjtBQUNBOztBQUVELFdBQUtrSSxFQUFMLEdBQVUsVUFBVW5JLEVBQVYsRUFBY2dCLEVBQWQsRUFBa0I7QUFFM0I5QixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBekI7QUFDQWQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUtULEVBQVgsRUFBZSxLQUFLbEosRUFBcEI7QUFDQWQsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYLEVBQWVBLEVBQUUsR0FBR0EsRUFBSCxHQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF6QjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUtSLFlBQVgsRUFBeUIsS0FBS3BJLEVBQTlCO0FBRUEsYUFBS3lILEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS3VFLEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLElBQVY7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLGFBQUtDLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0FqTyxRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU0sS0FBS1osRUFBWCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7QUFDQSxPQWJEO0FBY0EsS0FuV0Q7O0FBcVdBaEYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhMEksRUFBYixHQUFrQixVQUFVckksRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUNuQyxXQUFLbUgsRUFBTCxDQUFRbkksRUFBUixFQUFZZ0IsRUFBWjtBQUVBLFdBQUtzSSxFQUFMLENBQVFxQyxJQUFSLENBQWEwQixLQUFiLENBQW1CLEtBQUsvRCxFQUF4QixFQUE0QixLQUFLOUUsRUFBakM7QUFDQSxXQUFLQSxFQUFMLENBQVEvRSxNQUFSLEdBQWlCLENBQWpCO0FBRUEsV0FBS2lOLEVBQUwsQ0FBUXJFLEVBQVI7QUFDQSxLQVBEOztBQVNBYixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWEySSxFQUFiLEdBQWtCLFVBQVVDLEVBQVYsRUFBY3ZJLEVBQWQsRUFBa0JnQixFQUFsQixFQUFzQjtBQUV2QyxVQUFJLEtBQUtrTSxPQUFULEVBQ0E7QUFDQyxhQUFLSSxFQUFMLENBQVF0TixFQUFSLEVBQVlnQixFQUFaO0FBQ0E7QUFDQTs7QUFFRCxXQUFLZ00sRUFBTCxHQUFVLEtBQUt2RSxFQUFmOztBQUVBLFVBQUl6SSxFQUFKLEVBQVE7QUFDUGQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUtULEVBQVgsRUFBZSxLQUFLbEosRUFBcEI7O0FBQ0EsWUFBSXVJLEVBQUUsR0FBRyxNQUFULEVBQWlCO0FBQ2hCLGNBQUlnRixLQUFLLEdBQUcsRUFBWjtBQUNBck8sVUFBQUEsR0FBRyxDQUFDc08sQ0FBSixDQUFNRCxLQUFOLEVBQWF2TixFQUFiLEVBQWlCLEtBQUtrSixFQUF0QjtBQUNBaEssVUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUs2QyxFQUFYLEVBQWVlLEtBQWY7QUFDQXJPLFVBQUFBLEdBQUcsQ0FBQ3VPLENBQUosQ0FBTSxLQUFLakIsRUFBWCxFQUFlLEtBQUtBLEVBQXBCLEVBQXdCakUsRUFBeEI7QUFDQSxTQUxELE1BTUs7QUFDSnJKLFVBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTSxLQUFLWixFQUFYLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUNBO0FBQ0QsT0FYRCxNQVlLO0FBQ0p0TixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU0sS0FBS1osRUFBWCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckI7QUFDQTs7QUFFRCxVQUFJeEwsRUFBSixFQUNBO0FBQ0M5QixRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBS1IsWUFBWCxFQUF5QixLQUFLcEksRUFBOUI7QUFDQTs7QUFFRCxVQUFJNEgsRUFBSjs7QUFFQSxVQUFJLEtBQUtxRSxFQUFMLElBQVcsQ0FBQyxLQUFLRSxpQkFBckIsRUFBd0M7QUFDdkN2RSxRQUFBQSxFQUFFLEdBQUcsS0FBSzhELEVBQUwsQ0FBUXBFLEVBQVIsQ0FBV0MsRUFBWCxFQUFldkksRUFBZixFQUFtQmdCLEVBQW5CLENBQUw7QUFDQSxPQUZELE1BR0s7QUFDSixZQUFJaEIsRUFBSixFQUNDZCxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBZjtBQUVELFlBQUlnQixFQUFKLEVBQ0M5QixHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVgsRUFBZUEsRUFBZjtBQUVENEgsUUFBQUEsRUFBRSxHQUFHLENBQUw7QUFDQSxhQUFLSCxFQUFMLElBQVdGLEVBQVg7QUFDQTs7QUFFRCxXQUFLLElBQUloRSxFQUFFLEdBQUdxRSxFQUFkLEVBQWtCckUsRUFBRSxHQUFHLEtBQUtDLEVBQUwsQ0FBUS9FLE1BQS9CLEdBQXdDO0FBQ3ZDLFlBQUlRLEVBQUUsR0FBRyxLQUFLdUUsRUFBTCxDQUFRRCxFQUFSLENBQVQ7O0FBRUEsWUFBSSxDQUFDdEUsRUFBRSxDQUFDdUIsRUFBUixFQUFZO0FBQ1h2QixVQUFBQSxFQUFFLENBQUNxSSxFQUFILENBQU1DLEVBQU47O0FBRUEsY0FBSSxLQUFLOEQsRUFBTCxDQUFRRixFQUFSLENBQVcsS0FBSzNILEVBQUwsQ0FBUUQsRUFBUixDQUFYLENBQUosRUFBNkI7QUFDNUJ0RSxZQUFBQSxFQUFFLENBQUM0TCxFQUFIO0FBRUEsZ0JBQUksS0FBSzZCLEVBQUwsQ0FBUW5KLEVBQVIsQ0FBSixFQUNDO0FBQ0Q7QUFDRCxTQVRELE1BVUs7QUFDSnRFLFVBQUFBLEVBQUUsQ0FBQ3FMLEVBQUgsQ0FBTS9DLEVBQU47QUFFQSxjQUFJLEtBQUttRixFQUFMLENBQVFuSixFQUFSLENBQUosRUFDQztBQUNEOztBQUVELFVBQUVBLEVBQUY7QUFDQTtBQUNELEtBckVEOztBQXVFQWlELElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYStOLEVBQWIsR0FBa0IsVUFBVW5DLEVBQVYsRUFBYztBQUMvQixVQUFJdEwsRUFBRSxHQUFHLEtBQUt1RSxFQUFMLENBQVErRyxFQUFSLENBQVQ7QUFFQSxVQUFJb0MsS0FBSyxHQUFHLElBQVo7O0FBRUEsV0FBSyxJQUFJYixFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHN00sRUFBRSxDQUFDNEssRUFBSCxDQUFNcEwsTUFBNUIsRUFBb0MsRUFBRXFOLEVBQXRDLEVBQTBDO0FBQ3pDLFlBQUl4TixFQUFFLEdBQUdXLEVBQUUsQ0FBQzRLLEVBQUgsQ0FBTWlDLEVBQU4sRUFBVXhOLEVBQW5COztBQUVBLFlBQUlBLEVBQUUsQ0FBQ3NPLFNBQUgsTUFBa0J0TyxFQUFFLENBQUNrRixFQUFILENBQU0vRSxNQUFOLEdBQWUsQ0FBckMsRUFBd0M7QUFDdkNrTyxVQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxVQUFJQSxLQUFKLEVBQVc7QUFDVixhQUFLckUsRUFBTCxDQUFRcUMsSUFBUixDQUFhLEtBQUtuSCxFQUFMLENBQVErRyxFQUFSLENBQWI7QUFDQSxhQUFLL0csRUFBTCxDQUFRcUosTUFBUixDQUFldEMsRUFBZixFQUFtQixDQUFuQjtBQUNBLGVBQU8sSUFBUDtBQUNBOztBQUVELGFBQU8sS0FBUDtBQUNBLEtBckJEOztBQXVCQS9ELElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYTZELEVBQWIsR0FBa0IsVUFBVXpELEVBQVYsRUFBY3NCLEVBQWQsRUFBa0I7QUFDbkMsV0FBS2lMLFNBQUwsQ0FBZTlJLEVBQWYsQ0FBa0J6RCxFQUFsQixFQUFzQnNCLEVBQXRCO0FBQ0EsS0FGRDs7QUFJQW1HLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYXlILEVBQWIsR0FBa0IsVUFBVXBDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLFlBQXRCLEVBQW9DO0FBQ3JELFdBQUttSCxTQUFMLENBQWVsRixFQUFmLENBQWtCcEMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxFQUExQixFQUE4QkMsWUFBOUI7QUFDQSxLQUZEOztBQUlBcUMsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhMk4sRUFBYixHQUFrQixVQUFVdE4sRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUNuQyxXQUFLZ00sRUFBTCxHQUFVLEtBQUt2RSxFQUFmOztBQUVBLFVBQUl6SSxFQUFKLEVBQVE7QUFDUGQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUtULEVBQVgsRUFBZSxLQUFLbEosRUFBcEI7QUFDQWQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUszSixFQUFYLEVBQWVBLEVBQWY7QUFDQTs7QUFFRCxVQUFJZ0IsRUFBSixFQUFRO0FBQ1A5QixRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBS1IsWUFBWCxFQUF5QixLQUFLcEksRUFBOUI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWCxFQUFlQSxFQUFmO0FBQ0E7QUFDRCxLQVpEOztBQWNBd0csSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhNkwsRUFBYixHQUFrQixVQUFVQyxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDbkMsV0FBS2EsRUFBTCxDQUFRWixJQUFSLENBQWE7QUFBRXhNLFFBQUFBLEVBQUUsRUFBRXNNLEVBQU47QUFBVVIsUUFBQUEsRUFBRSxFQUFFUztBQUFkLE9BQWI7QUFDQSxLQUZEOztBQUlBbEUsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUltTyxJQUFBQSxLQUFqQixHQUF5QixZQUFZO0FBQ3BDLFdBQUtaLE9BQUwsR0FBZSxJQUFmO0FBQ0EsS0FGRDs7QUFJQTFGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJb08sSUFBQUEsT0FBakIsR0FBMkIsWUFBWTtBQUN0QyxXQUFLYixPQUFMLEdBQWUsS0FBZjtBQUNBLEtBRkQ7O0FBSUExRixJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSXFPLElBQUFBLE1BQWpCLEdBQTBCLFlBQVk7QUFDckMsYUFBTyxLQUFLZCxPQUFaO0FBQ0EsS0FGRDs7QUFJQTFGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJc08sSUFBQUEsZUFBakIsR0FBbUMsWUFBWTtBQUM5QyxXQUFLZCxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLEtBRkQ7O0FBSUEzRixJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSXVPLElBQUFBLGlCQUFqQixHQUFxQyxZQUFZO0FBQ2hELFdBQUtmLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0EsS0FGRDs7QUFJQTNGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJd08sSUFBQUEsZ0JBQWpCLEdBQW9DLFlBQVk7QUFDL0MsYUFBTyxLQUFLaEIsaUJBQVo7QUFDQSxLQUZEOztBQUlBM0YsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhbU0sUUFBYixHQUF3QixZQUFZO0FBQ25DLFdBQUttQixFQUFMLEdBQVUsSUFBVjtBQUNBLEtBRkQ7O0FBSUF6RixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWFxSixXQUFiLEdBQTJCLFlBQVk7QUFDdEMsV0FBS2lFLEVBQUwsR0FBVSxLQUFWO0FBQ0EsS0FGRDs7QUFJQXpGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYWlPLFNBQWIsR0FBeUIsWUFBWTtBQUNwQyxhQUFPLEtBQUtYLEVBQVo7QUFDQSxLQUZEOztBQUlBekYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUl5TyxJQUFBQSxlQUFqQixHQUFtQyxZQUFZO0FBQzlDLGFBQU8sS0FBSzVKLEVBQUwsQ0FBUS9FLE1BQWY7QUFDQSxLQUZEOztBQUlBLFFBQUk0TyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFZO0FBQ3BCLFVBQUlDLEVBQUUsR0FBRyxJQUFUOztBQUVBLFdBQUtDLEtBQUwsR0FBYSxVQUFVaFAsRUFBVixFQUFjUyxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0J5RyxFQUF0QixFQUEwQitHLE9BQTFCLEVBQW1DO0FBQy9DO0FBQUs7QUFBSTlLLFFBQUFBLEtBQVQsR0FBaUJuRSxFQUFqQjtBQUVBLGFBQUtTLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS2dCLEVBQUwsR0FBVSxFQUFWLENBSitDLENBTS9DOztBQUVBLGFBQUt5TixFQUFMLEdBQVUsRUFBVjs7QUFFQSxhQUFLQyxFQUFMLEdBQVUsVUFBVWpELEVBQVYsRUFBYztBQUN2QixjQUFJbk0sRUFBRSxHQUFHLElBQUlrSSxFQUFKLENBQU8sSUFBUCxFQUFhaUUsRUFBYixFQUFpQmhFLEVBQWpCLENBQVQ7QUFDQW5JLFVBQUFBLEVBQUUsQ0FBQzZJLEVBQUgsQ0FBTSxLQUFLbkksRUFBWCxFQUFlLEtBQUtnQixFQUFwQjtBQUNBLGVBQUssSUFBSTJOLE1BQUosQ0FBV2xELEVBQUUsQ0FBQ21ELElBQWQsQ0FBTCxJQUE0QnRQLEVBQTVCO0FBQ0EsZUFBS21QLEVBQUwsQ0FBUTlDLElBQVIsQ0FBYXJNLEVBQWI7QUFDQSxTQUxEOztBQU9BLGFBQUs2SSxFQUFMLEdBQVUsVUFBVW5JLEVBQVYsRUFBY2dCLEVBQWQsRUFBa0I7QUFDM0IsZUFBSzZOLEVBQUwsR0FBVSxHQUFWO0FBQ0EsZUFBS3BHLEVBQUwsR0FBVSxHQUFWO0FBQ0F2SixVQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBekI7QUFDQWQsVUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYLEVBQWVBLEVBQUUsR0FBR0EsRUFBSCxHQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF6QjtBQUNBLFNBTEQ7O0FBT0EsYUFBS21ILEVBQUwsQ0FBUW5JLEVBQVIsRUFBWWdCLEVBQVo7QUFDQTtBQUFLO0FBQUkwQyxRQUFBQSxLQUFULENBQWVvTCxFQUFmLENBQWtCLElBQWxCLEVBekIrQyxDQXlCdEI7O0FBRXpCLGFBQUtDLGFBQUwsR0FBcUIsSUFBckI7O0FBRUEsWUFBSVAsT0FBTyxDQUFDTCxnQkFBWixFQUE4QjtBQUM3QjtBQUFLO0FBQUlhLFVBQUFBLDRCQUFUO0FBQ0E7O0FBRUQsWUFBSVIsT0FBTyxDQUFDUixNQUFaLEVBQW9CO0FBQ25CO0FBQUs7QUFBSWlCLFVBQUFBLGdCQUFUO0FBQ0EsU0FGRCxNQUVPO0FBQ04sZUFBS0MsVUFBTDtBQUNBLGVBQUtDLFdBQUwsQ0FBaUIsS0FBS0MsRUFBdEIsRUFBMEJwUCxFQUExQixFQUE4QmdCLEVBQTlCLEVBQWtDLEtBQUtxTyxlQUF2QztBQUNBLGVBQUtOLGFBQUwsR0FBcUIsS0FBckI7QUFDQTtBQUNELE9BeENEO0FBeUNBLEtBNUNEOztBQThDQVYsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUkyUCxJQUFBQSxPQUFqQixHQUEyQjtBQUFVO0FBQUkxSyxJQUFBQSxRQUFkO0FBQXdCO0FBQUkySyxJQUFBQSxRQUE1QjtBQUFzQztBQUFJZixJQUFBQSxPQUExQyxFQUFtRDtBQUU3RSxXQUFLckcsRUFBTDtBQUFRO0FBQUl2RCxNQUFBQSxRQUFRO0FBQUc7QUFBSUEsTUFBQUEsUUFBUCxHQUFrQixLQUFLNUUsRUFBM0M7QUFBK0M7QUFBSXVQLE1BQUFBLFFBQVE7QUFBRztBQUFJQSxNQUFBQSxRQUFQLEdBQWtCLEtBQUt2TyxFQUFsRjtBQUNBLFdBQUsrTixhQUFMLEdBQXFCLElBQXJCOztBQUVBLFdBQUssSUFBSWhFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXMUMsRUFBWCxDQUFjLEtBQUtySSxFQUFuQixFQUF1QixLQUFLZ0IsRUFBNUI7QUFDQTs7QUFFRCxXQUFLK04sYUFBTCxHQUFxQixJQUFyQjs7QUFFQSxVQUFJUCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0wsZ0JBQXZCLEVBQXlDO0FBQ3hDO0FBQUs7QUFBSWEsUUFBQUEsNEJBQVQ7QUFDQTs7QUFFRCxVQUFJUixPQUFPLElBQUlBLE9BQU8sQ0FBQ1IsTUFBdkIsRUFBK0I7QUFDOUI7QUFBSztBQUFJaUIsUUFBQUEsZ0JBQVQ7QUFDQSxPQUZELE1BRU87QUFDTixhQUFLQyxVQUFMO0FBQ0EsYUFBS0MsV0FBTCxDQUFpQixLQUFLQyxFQUF0QixFQUEwQixLQUFLcFAsRUFBL0IsRUFBbUMsS0FBS2dCLEVBQXhDLEVBQTRDLEtBQUtxTyxlQUFqRDtBQUNBLGFBQUtOLGFBQUwsR0FBcUIsS0FBckI7QUFDQTtBQUNELEtBdEJEOztBQXdCQVYsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSCxDQUFhdVAsVUFBYixHQUEwQixZQUFZO0FBQ3JDLFdBQUssSUFBSW5FLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXekMsRUFBWCxDQUFjLENBQWQsRUFBaUIsS0FBS3RJLEVBQXRCLEVBQTBCLEtBQUtnQixFQUEvQjtBQUNBO0FBQ0QsS0FKRDs7QUFNQXFOLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJNlAsSUFBQUEsTUFBakIsR0FBMEI7QUFBVTtBQUFJQyxJQUFBQSxFQUFkO0FBQWtCO0FBQUk3SyxJQUFBQSxRQUF0QjtBQUFnQztBQUFJMkssSUFBQUEsUUFBcEMsRUFBOEM7QUFDdkUsVUFBSSxLQUFLRyxFQUFMLEdBQVUsR0FBZCxFQUNDLEtBQUtQLFdBQUw7QUFBaUI7QUFBSU0sTUFBQUEsRUFBckI7QUFBeUI7QUFBSTdLLE1BQUFBLFFBQTdCO0FBQXVDO0FBQUkySyxNQUFBQSxRQUEzQyxFQUFxRCxLQUFLRyxFQUExRCxFQURELEtBR0MsS0FBS0MsVUFBTDtBQUFnQjtBQUFJRixNQUFBQSxFQUFwQjtBQUF3QjtBQUFJN0ssTUFBQUEsUUFBNUI7QUFBc0M7QUFBSTJLLE1BQUFBLFFBQTFDO0FBQ0QsS0FMRDs7QUFPQWxCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUgsQ0FBYXdQLFdBQWIsR0FBMkI7QUFBVTtBQUFJTSxJQUFBQSxFQUFkO0FBQWtCO0FBQUk3SyxJQUFBQSxRQUF0QjtBQUFnQztBQUFJMkssSUFBQUEsUUFBcEM7QUFBOEM7QUFBSUssSUFBQUEsU0FBbEQsRUFBNkQ7QUFDdkYsVUFBSUMsV0FBVyxHQUFHLEdBQWxCO0FBQ0EsVUFBSXJGLEVBQUUsR0FBRyxFQUFUO0FBQ0F0TCxNQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU1hLEVBQU4sRUFBVSxLQUFLeEssRUFBZjtBQUNBLFVBQUk4UCxhQUFhLEdBQUcsRUFBcEI7QUFDQTVRLE1BQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTWtHLGFBQU4sRUFBcUIsS0FBSzlPLEVBQTFCO0FBRUE7QUFBSTtBQUFJNEQsTUFBQUEsUUFBUSxJQUFJMUYsR0FBRyxDQUFDNlEsUUFBSjtBQUFhO0FBQUluTCxNQUFBQSxRQUFqQixFQUEyQixLQUFLNUUsRUFBaEMsQ0FBcEI7QUFDQztBQUFJNEUsUUFBQUEsUUFBUSxHQUFHLElBQVg7QUFFTDtBQUFJO0FBQUkySyxNQUFBQSxRQUFRLElBQUlyUSxHQUFHLENBQUM4USxPQUFKO0FBQVk7QUFBSVQsTUFBQUEsUUFBaEIsRUFBMEIsS0FBS3ZPLEVBQS9CLENBQXBCO0FBQ0M7QUFBSXVPLFFBQUFBLFFBQVEsR0FBRyxJQUFYOztBQUVMO0FBQVE7QUFBSUUsTUFBQUEsRUFBRSxHQUFHSSxXQUFWLEdBQXlCLEtBQUtoQixFQUE5QjtBQUFvQztBQUFJZSxNQUFBQSxTQUEvQyxFQUEwRDtBQUN6RCxZQUFJN0YsRUFBRSxHQUFHLEtBQUt0QixFQUFkO0FBRUE7QUFBSTtBQUFJN0QsUUFBQUEsUUFBUixFQUNDMUYsR0FBRyxDQUFDK0osRUFBSixDQUFPdUIsRUFBUCxFQUFXLEtBQUt4SyxFQUFoQjtBQUFvQjtBQUFJNEUsUUFBQUEsUUFBeEIsRUFBa0NpTCxXQUFXO0FBQUc7QUFBSUosUUFBQUEsRUFBcEQ7QUFFRDtBQUFJO0FBQUlGLFFBQUFBLFFBQVIsRUFDQ3JRLEdBQUcsQ0FBQ2lLLE1BQUosQ0FBVzJHLGFBQVgsRUFBMEIsS0FBSzlPLEVBQS9CO0FBQW1DO0FBQUl1TyxRQUFBQSxRQUF2QyxFQUFpRE0sV0FBVztBQUFHO0FBQUlKLFFBQUFBLEVBQW5FOztBQUVELGFBQUssSUFBSTFFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxlQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXekMsRUFBWDtBQUFjO0FBQUlzSCxVQUFBQSxTQUFsQixFQUE2QnBGLEVBQTdCLEVBQWlDc0YsYUFBakM7QUFFQSxlQUFLckgsRUFBTCxHQUFVc0IsRUFBVjtBQUNBOztBQUVEOEYsUUFBQUEsV0FBVztBQUFJO0FBQUlELFFBQUFBLFNBQVMsR0FBRyxLQUFLZixFQUFwQztBQUNBLGFBQUtBLEVBQUwsR0FBVSxHQUFWO0FBQ0EsYUFBS3BHLEVBQUwsR0FBVXNCLEVBQUU7QUFBRztBQUFJNkYsUUFBQUEsU0FBbkI7QUFDQTs7QUFFRDtBQUFJO0FBQUloTCxNQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVg7QUFBZTtBQUFJNEUsTUFBQUEsUUFBbkI7QUFFRDtBQUFJO0FBQUkySyxNQUFBQSxRQUFSLEVBQ0NyUSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVg7QUFBZTtBQUFJdU8sTUFBQUEsUUFBbkI7QUFFRCxXQUFLVixFQUFMO0FBQVc7QUFBSVksTUFBQUEsRUFBRSxHQUFHSSxXQUFwQjtBQUNBLEtBeENEOztBQTBDQXhCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUgsQ0FBYWdRLFVBQWIsR0FBMEI7QUFBVTtBQUFJRixJQUFBQSxFQUFkO0FBQWtCO0FBQUk3SyxJQUFBQSxRQUF0QjtBQUFnQztBQUFJMkssSUFBQUEsUUFBcEMsRUFBOEM7QUFDdkUsVUFBSXhGLEVBQUUsR0FBRyxLQUFLdEIsRUFBZDs7QUFFQSxXQUFLLElBQUlzQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVIsRUFBV3pDLEVBQVg7QUFBYztBQUFJbUgsUUFBQUEsRUFBbEI7QUFBc0I7QUFBSTdLLFFBQUFBLFFBQTFCO0FBQW9DO0FBQUkySyxRQUFBQSxRQUF4QztBQUNBLGFBQUs5RyxFQUFMLEdBQVVzQixFQUFWO0FBQ0E7O0FBRUQsV0FBS3RCLEVBQUwsR0FBVXNCLEVBQUU7QUFBRztBQUFJMEYsTUFBQUEsRUFBbkI7QUFFQTtBQUFJO0FBQUk3SyxNQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVg7QUFBZTtBQUFJNEUsTUFBQUEsUUFBbkI7QUFFRDtBQUFJO0FBQUkySyxNQUFBQSxRQUFSLEVBQ0NyUSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVg7QUFBZTtBQUFJdU8sTUFBQUEsUUFBbkI7QUFDRCxLQWZEOztBQWlCQWxCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJc1EsSUFBQUEsYUFBakIsR0FBaUM7QUFBVTtBQUFJckwsSUFBQUEsUUFBZDtBQUF3QjtBQUFJMkssSUFBQUEsUUFBNUIsRUFBc0M7QUFFdEU7QUFBSTtBQUFJM0ssTUFBQUEsUUFBUixFQUNDMUYsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUszSixFQUFYO0FBQWU7QUFBSTRFLE1BQUFBLFFBQW5CO0FBRUQ7QUFBSTtBQUFJMkssTUFBQUEsUUFBUixFQUNDclEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYO0FBQWU7QUFBSXVPLE1BQUFBLFFBQW5COztBQUVELFdBQUssSUFBSXhFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXdUMsRUFBWCxDQUFjLEtBQUt0TixFQUFuQixFQUF1QixLQUFLZ0IsRUFBNUI7QUFDQTtBQUNELEtBWEQ7O0FBYUFxTixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSXVRLElBQUFBLHdCQUFqQixHQUE0QztBQUFVO0FBQUl0QixJQUFBQSxJQUFkO0FBQW9CO0FBQUl1QixJQUFBQSxLQUF4QixFQUErQjtBQUMxRSxVQUFJQyxRQUFRLEdBQUcsSUFBSXpCLE1BQUo7QUFBVztBQUFJQyxNQUFBQSxJQUFmLENBQWY7O0FBRUE7QUFBSTtBQUFJdUIsTUFBQUEsS0FBSyxZQUFZRSxLQUF6QixFQUFnQztBQUMvQjtBQUFJO0FBQUlGLFFBQUFBLEtBQUssQ0FBQzFRLE1BQU4sSUFBZ0IsQ0FBeEIsRUFBMkI7QUFDMUIsZUFBSyxJQUFJc0wsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDN0wsWUFBQUEsR0FBRyxDQUFDb1IsQ0FBSixDQUFNLEtBQUs3QixFQUFMLENBQVExRCxDQUFSLEVBQVdxRixRQUFYLENBQU47QUFBNEI7QUFBSUQsWUFBQUEsS0FBaEM7QUFDQTtBQUNELFNBSkQsTUFLSztBQUNKLGVBQUssSUFBSXBGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QzdMLFlBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLOEUsRUFBTCxDQUFRMUQsQ0FBUixFQUFXcUYsUUFBWCxDQUFOO0FBQTRCO0FBQUlELFlBQUFBLEtBQWhDO0FBQ0E7QUFDRDtBQUNELE9BWEQsTUFZSztBQUNKLGFBQUssSUFBSXBGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxlQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXcUYsUUFBWDtBQUF1QjtBQUFJRCxVQUFBQSxLQUEzQjtBQUNBO0FBQ0Q7QUFDRCxLQXBCRDs7QUFzQkE5QixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSXNQLElBQUFBLGdCQUFqQixHQUFvQyxZQUFXO0FBQzlDLFdBQUssSUFBSWxFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUjtBQUFXO0FBQUkrQyxRQUFBQSxLQUFmO0FBQ0E7QUFDRCxLQUpEOztBQU1BTyxJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSTRRLElBQUFBLGtCQUFqQixHQUFzQyxZQUFZO0FBQ2pELFdBQUssSUFBSXhGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUjtBQUFXO0FBQUlnRCxRQUFBQSxPQUFmO0FBQ0E7O0FBQ0QsV0FBS21CLFVBQUw7O0FBRUEsVUFBSSxLQUFLSCxhQUFULEVBQXdCO0FBQ3ZCLGFBQUtJLFdBQUwsQ0FBaUIsS0FBS0MsRUFBdEIsRUFBMEIsS0FBS3BQLEVBQS9CLEVBQW1DLEtBQUtnQixFQUF4QyxFQUE0QyxLQUFLcU8sZUFBakQ7QUFDQSxhQUFLTixhQUFMLEdBQXFCLEtBQXJCO0FBQ0E7QUFDRCxLQVZEOztBQVlBVixJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSTZRLElBQUFBLG9CQUFqQixHQUF3QyxZQUFZO0FBQ25ELFdBQUssSUFBSXpGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxZQUFJLENBQUMsS0FBSzBELEVBQUwsQ0FBUTFELENBQVIsRUFBV2lELE1BQVgsRUFBTCxFQUNDLE9BQU8sS0FBUDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNBLEtBTkQ7O0FBUUFLLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJcVAsSUFBQUEsNEJBQWpCLEdBQWdELFlBQVk7QUFDM0QsV0FBSyxJQUFJakUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSO0FBQVc7QUFBSWtELFFBQUFBLGVBQWY7QUFDQTtBQUNELEtBSkQ7O0FBTUFJLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJOFEsSUFBQUEsOEJBQWpCLEdBQWtELFlBQVk7QUFDN0QsV0FBSyxJQUFJMUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSO0FBQVc7QUFBSW1ELFFBQUFBLGlCQUFmO0FBQ0E7QUFDRCxLQUpEOztBQU1BRyxJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSStRLElBQUFBLGdDQUFqQixHQUFvRCxZQUFZO0FBQy9ELFdBQUssSUFBSTNGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxZQUFJLENBQUMsS0FBSzBELEVBQUwsQ0FBUTFELENBQVIsRUFBV29ELGdCQUFYLEVBQUwsRUFDQyxPQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDQSxLQU5EOztBQVFBRSxJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSXlPLElBQUFBLGVBQWpCLEdBQW1DLFlBQVc7QUFDN0MsVUFBSXVDLFlBQVksR0FBRyxDQUFuQjs7QUFFQSxXQUFLLElBQUk1RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEM0RixRQUFBQSxZQUFZLElBQUksS0FBS2xDLEVBQUwsQ0FBUTFELENBQVIsRUFBV3FELGVBQVgsRUFBaEI7QUFDQTs7QUFFRCxhQUFPdUMsWUFBUDtBQUNBLEtBUkQ7O0FBV0EsUUFBSUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBWTtBQUNwQixXQUFLckMsS0FBTCxHQUFhLFVBQVVoUCxFQUFWLEVBQWNTLEVBQWQsRUFBa0JnQixFQUFsQixFQUFzQm1FLFlBQXRCLEVBQW9DcUosT0FBcEMsRUFBNkM7QUFDekRvQyxRQUFBQSxFQUFFLENBQUNqUixTQUFILENBQWE0TyxLQUFiLENBQW1Cc0MsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJ0UixFQUE5QixFQUFrQ1MsRUFBbEMsRUFBc0NnQixFQUF0QyxFQUEwQzBELEVBQTFDLEVBQThDOEosT0FBOUM7O0FBRUEsYUFBSy9ILGFBQUwsR0FBcUIsRUFBckI7QUFFQSxZQUFJcUssT0FBTyxHQUFHLEVBQWQ7QUFFQTtBQUNDLGNBQUlDLE9BQUo7O0FBQ0EsZUFBSyxJQUFJeE0sRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRztBQUFLO0FBQUliLFVBQUFBLEtBQVQsQ0FBZXNOLEVBQXJDLEVBQXlDLEVBQUV6TSxFQUEzQyxFQUErQztBQUM5Q3dNLFlBQUFBLE9BQU8sR0FBR3hNLEVBQUUsR0FBRyxDQUFmO0FBQ0F1TSxZQUFBQSxPQUFPLENBQUNuRixJQUFSLENBQWFvRixPQUFPLEdBQUcsQ0FBdkIsRUFBMEJBLE9BQU8sR0FBRyxDQUFwQyxFQUF1Q0EsT0FBTyxHQUFHLENBQWpELEVBQW9EQSxPQUFPLEdBQUcsQ0FBOUQsRUFBaUVBLE9BQU8sR0FBRyxDQUEzRSxFQUE4RUEsT0FBTyxHQUFHLENBQXhGO0FBQ0E7QUFDRDtBQUVELGFBQUs1TCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLGFBQUtBLFlBQUwsQ0FBa0I4TCxVQUFsQixDQUE2QjtBQUFLO0FBQUl2TixRQUFBQSxLQUFULENBQWVzTixFQUFmLEdBQW9CLENBQWpELEVBQW9ELENBQUMsQ0FBRCxDQUFwRCxFQUF5REYsT0FBekQsRUFBa0U7QUFBSztBQUFJcE4sUUFBQUEsS0FBVCxDQUFlc04sRUFBakY7QUFDQSxhQUFLN0wsWUFBTCxDQUFrQitMLFlBQWxCLEdBQWlDLENBQWpDO0FBQ0EsT0FsQkQ7QUFtQkEsS0FwQkQ7O0FBc0JBTixJQUFBQSxFQUFFLENBQUNqUixTQUFILEdBQWUsSUFBSTBPLEVBQUosRUFBZjs7QUFFQXVDLElBQUFBLEVBQUUsQ0FBQ2pSLFNBQUg7QUFBYTtBQUFJd1IsSUFBQUEsbUJBQWpCLEdBQXVDO0FBQVU7QUFBSUMsSUFBQUEsV0FBZDtBQUEyQjtBQUFJQyxJQUFBQSxRQUEvQjtBQUF5QztBQUFJQyxJQUFBQSxTQUE3QyxFQUF3RDtBQUM5RixXQUFLbk0sWUFBTCxDQUFrQm9NLE9BQWxCO0FBQ0EsV0FBS3BNLFlBQUwsQ0FBa0IyQixnQkFBbEIsR0FBcUMsSUFBckM7QUFFQSxXQUFLMkgsRUFBTCxDQUFRcEgsT0FBUixDQUFnQixVQUFVL0gsRUFBVixFQUFjO0FBQzdCQSxRQUFBQSxFQUFFLENBQUM4SCxFQUFIO0FBQU07QUFBSWdLLFFBQUFBLFdBQVY7QUFBdUI7QUFBSUMsUUFBQUEsUUFBM0I7QUFBcUM7QUFBSUMsUUFBQUEsU0FBekMsRUFBb0QsS0FBS25NLFlBQXpEO0FBQ0EsT0FGRCxFQUVHLElBRkg7QUFJQSxVQUFJLEtBQUtBLFlBQUwsQ0FBa0IyQixnQkFBdEIsRUFDQyxLQUFLM0IsWUFBTCxDQUFrQitCLGNBQWxCLENBQWlDLEtBQUsvQixZQUFMLENBQWtCMkIsZ0JBQW5EO0FBQ0QsS0FWRDs7QUFZQSxRQUFJMEssRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBWTtBQUNwQixXQUFLakQsS0FBTCxHQUFhLFVBQVVoUCxFQUFWLEVBQWNTLEVBQWQsRUFBa0JnQixFQUFsQixFQUFzQndOLE9BQXRCLEVBQStCO0FBQzNDZ0QsUUFBQUEsRUFBRSxDQUFDN1IsU0FBSCxDQUFhNE8sS0FBYixDQUFtQnNDLElBQW5CLENBQXdCLElBQXhCLEVBQThCdFIsRUFBOUIsRUFBa0NTLEVBQWxDLEVBQXNDZ0IsRUFBdEMsRUFBMEM1QixFQUExQyxFQUE4Q29QLE9BQTlDOztBQUVBLGFBQUsvSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0E7QUFBSztBQUFJQyxRQUFBQSxLQUFULENBQWVELFNBQWYsQ0FBeUI0RCxPQUF6QixDQUFpQyxVQUFVOEksS0FBVixFQUFpQjtBQUNqRCxlQUFLMU0sU0FBTCxDQUFla0ksSUFBZixDQUFvQixDQUFDLGFBQUQsRUFBZ0IsU0FBaEIsRUFBMkIsVUFBM0IsRUFBdUN3RSxLQUF2QyxDQUFwQjtBQUNBLFNBRkQsRUFFRyxJQUZIO0FBSUE7QUFBSztBQUFJck0sUUFBQUEsWUFBVCxHQUF3QixFQUF4QjtBQUNBLE9BVEQ7QUFVQSxLQVhEOztBQWFBME4sSUFBQUEsRUFBRSxDQUFDN1IsU0FBSCxHQUFlLElBQUkwTyxFQUFKLEVBQWY7O0FBRUFtRCxJQUFBQSxFQUFFLENBQUM3UixTQUFIO0FBQWE7QUFBSThSLElBQUFBLElBQWpCLEdBQXdCO0FBQVU7QUFBSUMsSUFBQUEsT0FBZDtBQUF1QjtBQUFJQyxJQUFBQSxNQUEzQixFQUFtQztBQUMxRCxXQUFLLElBQUk1RyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVIsRUFBV3ZILEVBQVg7QUFBYztBQUFJa08sUUFBQUEsT0FBbEI7QUFBMkI7QUFBSUMsUUFBQUEsTUFBL0I7QUFDQTtBQUNELEtBSkQ7O0FBTUEsU0FBS0MsaUJBQUwsR0FBeUI7QUFBVTtBQUFJaE4sSUFBQUEsUUFBZDtBQUF3QjtBQUFJMkssSUFBQUEsUUFBNUI7QUFBc0M7QUFBSXBLLElBQUFBLFlBQTFDO0FBQXdEO0FBQUlxSixJQUFBQSxPQUE1RCxFQUFxRTtBQUM3RixVQUFJblAsRUFBRSxHQUFHLElBQUl1UixFQUFKLEVBQVQ7O0FBQ0F2UixNQUFBQSxFQUFFLENBQUNrUCxLQUFILENBQVMsSUFBVDtBQUFlO0FBQUkzSixNQUFBQSxRQUFuQjtBQUE2QjtBQUFJMkssTUFBQUEsUUFBakM7QUFBMkM7QUFBSXBLLE1BQUFBLFlBQS9DO0FBQTZEO0FBQUlxSixNQUFBQSxPQUFPLElBQUksRUFBNUU7O0FBQ0EsYUFBT25QLEVBQVA7QUFDQSxLQUpEOztBQU1BLFNBQUt3UyxzQkFBTCxHQUE4QjtBQUFVO0FBQUlqTixJQUFBQSxRQUFkO0FBQXdCO0FBQUkySyxJQUFBQSxRQUE1QjtBQUFzQztBQUFJZixJQUFBQSxPQUExQyxFQUFtRDtBQUNoRixVQUFJblAsRUFBRSxHQUFHLElBQUltUyxFQUFKLEVBQVQ7O0FBQ0FuUyxNQUFBQSxFQUFFLENBQUNrUCxLQUFILENBQVMsSUFBVDtBQUFlO0FBQUkzSixNQUFBQSxRQUFuQjtBQUE2QjtBQUFJMkssTUFBQUEsUUFBakM7QUFBMkM7QUFBSWYsTUFBQUEsT0FBTyxJQUFJLEVBQTFEOztBQUNBLGFBQU9uUCxFQUFQO0FBQ0EsS0FKRDs7QUFLQSxTQUFLeVMsUUFBTCxHQUFnQixDQUFDLGlDQUFELEVBQW1DLGlDQUFuQyxDQUFoQjtBQUNBLFNBQUtyTyxTQUFMLEdBQWlCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBakI7QUFDQSxTQUFLRSxZQUFMLEdBQW9CLENBQUM7QUFBQ0UsTUFBQUEsYUFBYSxFQUFDLENBQWY7QUFBaUJFLE1BQUFBLGNBQWMsRUFBQyxDQUFDLENBQUQ7QUFBaEMsS0FBRCxFQUFzQztBQUFDRixNQUFBQSxhQUFhLEVBQUMsQ0FBZjtBQUFpQkUsTUFBQUEsY0FBYyxFQUFDLENBQUMsQ0FBRDtBQUFoQyxLQUF0QyxDQUFwQjtBQUNBLFNBQUtpTixFQUFMLEdBQVUsS0FBVjs7QUFFQSxhQUFTZSxvQkFBVCxHQUFnQztBQUUvQixVQUFJQyxFQUFFLEdBQUcsRUFBVDtBQUFBLFVBQWFDLEVBQUUsR0FBRyxFQUFsQjtBQUFBLFVBQXNCQyxFQUFFLEdBQUcsRUFBM0I7QUFBQSxVQUErQkMsRUFBRSxHQUFHLEVBQXBDO0FBQUEsVUFBd0NDLEdBQUcsR0FBQyxFQUE1QztBQUFBLFVBQWdEQyxLQUFLLEdBQUMsRUFBdEQ7QUFBQSxVQUEwREMsS0FBSyxHQUFDLEVBQWhFO0FBQUEsVUFBb0VDLEtBQUssR0FBQyxFQUExRTtBQUFBLFVBQThFQyxNQUFNLEdBQUMsRUFBckY7QUFBQSxVQUF5RkMsTUFBekY7QUFBQSxVQUFpR0MsSUFBSSxHQUFDLEVBQXRHO0FBQUEsVUFBMEdDLElBQUksR0FBQyxFQUEvRztBQUFBLFVBQW1IQyxNQUFuSDtBQUFBLFVBQTJIQyxNQUEzSDtBQUFBLFVBQW1JQyxLQUFuSTtBQUFBLFVBQTBJQyxNQUFNLEdBQUMsRUFBako7QUFBQSxVQUFxSkMsR0FBRyxHQUFDLEVBQXpKO0FBQUEsVUFBNkpDLElBQUksR0FBQyxFQUFsSztBQUFBLFVBQXNLQyxHQUF0SztBQUFBLFVBQTJLQyxHQUEzSztBQUFBLFVBQWdMQyxHQUFoTDtBQUFBLFVBQXFMQyxHQUFyTDtBQUFBLFVBQTBMQyxLQUExTDtBQUFBLFVBQWlNQyxLQUFLLEdBQUcsRUFBek07QUFBQSxVQUE2TUMsR0FBN007QUFBQSxVQUFrTkMsR0FBbE47QUFBQSxVQUF1TkMsS0FBdk47QUFBQSxVQUE4TkMsS0FBSyxHQUFHLEVBQXRPO0FBQUEsVUFBME9DLEdBQTFPO0FBQUEsVUFBK09DLEtBQS9PO0FBQUEsVUFBc1BDLEtBQUssR0FBRyxFQUE5UDtBQUFBLFVBQWtRQyxHQUFsUTs7QUFDQSxXQUFLdlUsRUFBTCxHQUFVLENBQUM7QUFBQ00sUUFBQUEsRUFBRSxFQUFDLENBQUo7QUFBTStCLFFBQUFBLEVBQUUsRUFBQyxDQUFUO0FBQVdxQyxRQUFBQSxFQUFFLEVBQUMsQ0FBZDtBQUFnQk4sUUFBQUEsZ0JBQWdCLEVBQUM7QUFBakMsT0FBRCxDQUFWO0FBQ0EsV0FBS2dMLElBQUwsR0FBWSxjQUFaOztBQUVBLFdBQUtoQyxFQUFMLEdBQVUsVUFBU3ROLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDMFUsU0FBSCxHQUFlLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFmO0FBQ0ExVSxRQUFBQSxFQUFFLENBQUMyVSxRQUFILEdBQWMsQ0FBZDtBQUNBM1UsUUFBQUEsRUFBRSxDQUFDcU4sRUFBSDtBQUNBck4sUUFBQUEsRUFBRSxDQUFDK1QsR0FBSCxHQUFTLENBQ1IsQ0FDQyxDQUFDLE9BQUQsRUFBUyxRQUFULEVBQWtCLFFBQWxCLEVBQTJCLE9BQTNCLEVBQW1DLFFBQW5DLEVBQTRDLFFBQTVDLEVBQXFELFFBQXJELEVBQThELFFBQTlELEVBQXVFLFFBQXZFLEVBQWdGLFFBQWhGLEVBQXlGLFFBQXpGLEVBQWtHLFFBQWxHLEVBQTJHLFFBQTNHLEVBQW9ILFFBQXBILEVBQTZILFNBQTdILEVBQXVJLENBQXZJLEVBQXlJLENBQXpJLENBREQsQ0FEUSxDQUFUO0FBS0EvVCxRQUFBQSxFQUFFLENBQUNtVSxHQUFILEdBQVMsQ0FDUixDQUNDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBREQsRUFFQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUZELENBRFEsQ0FBVDtBQU1BblUsUUFBQUEsRUFBRSxDQUFDc1UsR0FBSCxHQUFTLENBQ1IsQ0FDQyxDQUFDLENBQUQsRUFBRyxPQUFILEVBQVcsT0FBWCxFQUFtQixPQUFuQixFQUEyQixPQUEzQixFQUFtQyxPQUFuQyxFQUEyQyxPQUEzQyxFQUFtRCxPQUFuRCxFQUEyRCxPQUEzRCxFQUFtRSxPQUFuRSxFQUEyRSxPQUEzRSxFQUFtRixNQUFuRixFQUEwRixPQUExRixFQUFrRyxPQUFsRyxFQUEwRyxNQUExRyxFQUFpSCxDQUFqSCxFQUFtSCxDQUFuSCxDQURELENBRFEsQ0FBVDtBQUtBdFUsUUFBQUEsRUFBRSxDQUFDdU4sRUFBSCxHQUFRLEdBQVI7QUFDQXZOLFFBQUFBLEVBQUUsQ0FBQ2dGLEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0F0QkQ7O0FBd0JBLFdBQUs0RCxFQUFMLEdBQVUsVUFBU3dFLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDbkMsRUFBSCxHQUFRLENBQVI7QUFDQW1DLFFBQUFBLEVBQUUsQ0FBQzdFLEVBQUgsR0FBUSxDQUFSO0FBQ0E2RSxRQUFBQSxFQUFFLENBQUNyRCxFQUFILEdBQVEsQ0FBUjtBQUNBLE9BSkQ7O0FBTUEsV0FBS2IsRUFBTCxHQUFVLFVBQVNELEVBQVQsRUFBYWpKLEVBQWIsRUFBaUJvTixFQUFqQixFQUFxQjtBQUM5QkEsUUFBQUEsRUFBRSxDQUFDbkMsRUFBSCxHQUFRLENBQVI7QUFDQSxPQUZEOztBQUlBLFdBQUtZLEVBQUwsR0FBVSxVQUFTN0wsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUNlLEVBQUgsR0FBTSxFQUFOO0FBQ0FmLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsR0FBTyxHQUFQO0FBQ0FoVixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU00RSxFQUFOLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ2tVLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUNrVSxFQUFULEVBQWE3VSxFQUFFLENBQUNVLEVBQWhCLEVBQW9CZ1MsRUFBcEI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ21VLEVBQUgsR0FBUSxDQUFSO0FBQ0FuVSxRQUFBQSxFQUFFLENBQUNvVSxFQUFILEdBQVEsRUFBUjtBQUNBblYsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNM0osRUFBRSxDQUFDb1UsRUFBVCxFQUFhL1UsRUFBRSxDQUFDMFUsU0FBaEI7QUFDQTlVLFFBQUFBLEdBQUcsQ0FBQ29WLFNBQUosQ0FBY3JDLEVBQWQsRUFBa0IsQ0FBbEIsRUFBcUIzUyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQTNCO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUN1VSxFQUFILEdBQVEsRUFBUjtBQUNBdFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDdVUsRUFBVCxFQUFhdkMsRUFBYjtBQUNBL1MsUUFBQUEsR0FBRyxDQUFDb1YsU0FBSixDQUFjcEMsRUFBZCxFQUFrQixFQUFsQixFQUFzQjVTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBNUI7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ3dVLEVBQUgsR0FBUSxFQUFSO0FBQ0F2VixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUN3VSxFQUFULEVBQWF2QyxFQUFiO0FBQ0FoVCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDa1UsRUFBaEI7QUFDQSxPQWhCRDs7QUFrQkEsV0FBSy9JLEVBQUwsR0FBVSxVQUFTOUwsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUNlLEVBQUgsR0FBTSxFQUFOO0FBQ0FmLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsR0FBTyxHQUFQO0FBQ0FoVixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU00RSxFQUFOLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ2tVLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUNrVSxFQUFULEVBQWE3VSxFQUFFLENBQUNVLEVBQWhCLEVBQW9CZ1MsRUFBcEI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ21VLEVBQUgsR0FBUSxDQUFSO0FBQ0FuVSxRQUFBQSxFQUFFLENBQUNvVSxFQUFILEdBQVEsRUFBUjtBQUNBblYsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNM0osRUFBRSxDQUFDb1UsRUFBVCxFQUFhL1UsRUFBRSxDQUFDMFUsU0FBaEI7QUFDQTlVLFFBQUFBLEdBQUcsQ0FBQ29WLFNBQUosQ0FBY3JDLEVBQWQsRUFBa0IsQ0FBbEIsRUFBcUIzUyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQTNCO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUN1VSxFQUFILEdBQVEsRUFBUjtBQUNBdFYsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDdVUsRUFBVCxFQUFhdkMsRUFBYjtBQUNBL1MsUUFBQUEsR0FBRyxDQUFDb1YsU0FBSixDQUFjcEMsRUFBZCxFQUFrQixFQUFsQixFQUFzQjVTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBNUI7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ3dVLEVBQUgsR0FBUSxFQUFSO0FBQ0F2VixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUN3VSxFQUFULEVBQWF2QyxFQUFiO0FBQ0FoVCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDa1UsRUFBaEI7QUFDQSxPQWhCRDs7QUFrQkEsV0FBSzlJLEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsSUFBUTNMLEVBQVI7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTStFLEVBQU4sRUFBVSxDQUFWLEVBQWEsRUFBYixFQUFpQixDQUFqQjtBQUNBalQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMEksS0FBTixFQUFhRixFQUFiO0FBQ0FqVCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0ySSxLQUFOLEVBQWEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBYjtBQUNBTSxRQUFBQSxNQUFNLEdBQUdySyxFQUFUO0FBQ0FySixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0rSSxJQUFOLEVBQVl6UyxFQUFFLENBQUN3VSxFQUFmO0FBQ0F2VixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU1nSixJQUFOLEVBQVkxUyxFQUFFLENBQUNrVSxFQUFmOztBQUNBLGVBQU92QixNQUFNLEdBQUcsTUFBaEIsRUFBd0I7QUFDdkJDLFVBQUFBLE1BQU0sR0FBR0QsTUFBVDtBQUNBMVQsVUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNb0osTUFBTixFQUFjVixLQUFkO0FBQ0FuVCxVQUFBQSxHQUFHLENBQUNzTyxDQUFKLENBQU0rRSxLQUFOLEVBQWFELEtBQWIsRUFBb0JJLElBQXBCO0FBQ0FELFVBQUFBLE1BQU0sR0FBR3ZULEdBQUcsQ0FBQ3dWLENBQUosQ0FBTW5DLEtBQU4sQ0FBVDs7QUFDQSxjQUFJRSxNQUFNLEdBQUcsTUFBYixFQUFxQjtBQUNwQkEsWUFBQUEsTUFBTSxHQUFHblMsSUFBSSxDQUFDcVUsSUFBTCxDQUFVbEMsTUFBVixDQUFUO0FBQ0F2VCxZQUFBQSxHQUFHLENBQUN1TyxDQUFKLENBQU0rRSxNQUFOLEVBQWNELEtBQWQsRUFBcUJFLE1BQXJCO0FBQ0FLLFlBQUFBLEtBQUssR0FBRyxPQUFPLENBQVAsR0FBV0wsTUFBbkI7QUFDQSxnQkFBSUssS0FBSyxHQUFHRCxNQUFSLEdBQWlCLEdBQXJCLEVBQ0NBLE1BQU0sR0FBRyxNQUFNQyxLQUFmO0FBQ0Q1VCxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1tTixNQUFOLEVBQWNBLE1BQWQsRUFBc0I3VCxHQUFHLENBQUNpSCxDQUFKLENBQU1xTSxNQUFOLEVBQWNDLE1BQU0sR0FBR0ssS0FBdkIsQ0FBdEI7QUFDQTs7QUFDRDVULFVBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTThNLElBQU4sRUFBWUEsSUFBWixFQUFrQnhULEdBQUcsQ0FBQ2lILENBQUosQ0FBTTRNLE1BQU4sRUFBY0YsTUFBZCxDQUFsQjtBQUNBM1QsVUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNK00sSUFBTixFQUFZQSxJQUFaLEVBQWtCelQsR0FBRyxDQUFDaUgsQ0FBSixDQUFNdU0sSUFBTixFQUFZRyxNQUFaLENBQWxCO0FBQ0FELFVBQUFBLE1BQU0sSUFBSUMsTUFBVjtBQUNBOztBQUNEM1QsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDa1UsRUFBVCxFQUFheEIsSUFBYjtBQUNBelQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDd1UsRUFBVCxFQUFhL0IsSUFBYjtBQUNBeFQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0FqVixRQUFBQSxHQUFHLENBQUMwVixDQUFKLENBQU0zQixJQUFOLEVBQVloVCxFQUFFLENBQUN1VSxFQUFmO0FBQ0F0VixRQUFBQSxHQUFHLENBQUMyVixFQUFKLENBQU83QixHQUFQLEVBQVlDLElBQVosRUFBa0JoVCxFQUFFLENBQUNtVSxFQUFyQjtBQUNBbEIsUUFBQUEsR0FBRyxHQUFHLENBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFHLENBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFJblQsRUFBRSxDQUFDaVUsQ0FBSCxHQUFPZixHQUFkO0FBQ0FHLFFBQUFBLEtBQUssR0FBRUYsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVNBLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFRQSxHQUF4QjtBQUNBbFUsUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNdkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxJQUFVLEVBQXhCO0FBQ0FELFFBQUFBLEdBQUcsR0FBR2xVLEVBQUUsQ0FBQzRWLEVBQUgsQ0FBTXpWLEVBQUUsQ0FBQytULEdBQUgsQ0FBTyxDQUFQLEVBQVVFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBTjtBQUNBQyxRQUFBQSxHQUFHLEdBQUlOLEdBQUcsR0FBR0csR0FBYjtBQUNBSyxRQUFBQSxLQUFLLEdBQUVOLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFTQSxHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBUUEsR0FBeEI7QUFDQU0sUUFBQUEsS0FBSyxHQUFDLEdBQU4sR0FBVXhVLEdBQUcsQ0FBQzRWLENBQUosQ0FBTW5CLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLENBQVAsSUFBVSxPQUF4QixDQUFWLEdBQTJDeFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNbkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsR0FBUCxJQUFZLE9BQTFCLENBQTNDO0FBQ0FELFFBQUFBLEdBQUcsR0FBR3RVLEVBQUUsQ0FBQzRWLEVBQUgsQ0FBTXpWLEVBQUUsQ0FBQ21VLEdBQUgsQ0FBTyxDQUFQLEVBQVVFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBTjtBQUNBRSxRQUFBQSxLQUFLLEdBQUVULEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFTQSxHQUFHLEdBQUMsQ0FBSixHQUFPLElBQUcsQ0FBQ0EsR0FBRyxHQUFDLENBQUwsSUFBUSxDQUFsQixHQUFzQkEsR0FBdEM7QUFDQWxVLFFBQUFBLEdBQUcsQ0FBQzRWLENBQUosQ0FBTWhCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLENBQVAsSUFBVSxFQUF4QjtBQUNBRCxRQUFBQSxHQUFHLEdBQUd6VSxFQUFFLENBQUM0VixFQUFILENBQU16VixFQUFFLENBQUNzVSxHQUFILENBQU8sQ0FBUCxFQUFVRSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQU4sRUFBMEJBLEtBQUssQ0FBQyxDQUFELENBQS9CLENBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFLelUsRUFBRSxDQUFDMlUsUUFBSCxHQUFjLENBQWYsR0FBb0JMLEdBQTNCO0FBQ0ExVSxRQUFBQSxHQUFHLENBQUNvUixDQUFKLENBQU1yUSxFQUFFLENBQUNvQyxFQUFULEVBQVksQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFaO0FBQ0FuRCxRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0zSixFQUFFLENBQUNlLEVBQVQsRUFBYWdTLEdBQWI7QUFDQTlULFFBQUFBLEdBQUcsQ0FBQzRWLENBQUosQ0FBTTdVLEVBQUUsQ0FBQ1csRUFBVCxFQUFZNFMsR0FBWixFQUFnQkEsR0FBaEI7QUFDQXRVLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ3NDLEVBQVQsRUFBWSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFaO0FBQ0F0QyxRQUFBQSxFQUFFLENBQUN3QixFQUFILEdBQVFnUyxHQUFSO0FBQ0F4VCxRQUFBQSxFQUFFLENBQUMyQixFQUFILEdBQVNtUyxHQUFHLEdBQUcsQ0FBUCxHQUFZLENBQVosR0FBa0JBLEdBQUcsSUFBSSxFQUFSLEdBQWMsRUFBZCxHQUFtQkEsR0FBNUM7QUFDQSxPQWxERDs7QUFvREEsV0FBSzNILEVBQUwsR0FBVSxVQUFTOU0sRUFBVCxFQUFhVyxFQUFiLEVBQWlCb00sRUFBakIsRUFBcUI7QUFDOUI4RyxRQUFBQSxHQUFHLEdBQUcsQ0FBTjtBQUNBLFlBQUlsVCxFQUFFLENBQUNpVSxDQUFILEdBQU9mLEdBQVgsRUFBZ0IsT0FBTyxJQUFQO0FBQ2hCLGVBQU8sS0FBUDtBQUNBLE9BSkQ7QUFPQTs7QUFFRCxhQUFTNkIscUJBQVQsR0FBaUM7QUFFaEMsVUFBSWQsQ0FBSjtBQUFBLFVBQU9lLEdBQVA7QUFBQSxVQUFZQyxHQUFHLEdBQUcsRUFBbEI7QUFBQSxVQUFzQmYsRUFBRSxHQUFHLEVBQTNCO0FBQUEsVUFBK0JFLEVBQS9CO0FBQUEsVUFBbUNHLEVBQUUsR0FBRyxFQUF4QztBQUFBLFVBQTRDQyxFQUFFLEdBQUMsRUFBL0M7QUFBQSxVQUFtRFUsR0FBRyxHQUFDLEVBQXZEO0FBQUEsVUFBMkRDLEdBQUcsR0FBQyxFQUEvRDtBQUFBLFVBQW1FQyxHQUFHLEdBQUMsRUFBdkU7QUFBQSxVQUEyRWxELEVBQTNFO0FBQUEsVUFBK0VtRCxJQUEvRTtBQUFBLFVBQXFGQyxJQUFJLEdBQUcsRUFBNUY7QUFBQSxVQUFnR25ELEdBQUcsR0FBRyxFQUF0RztBQUFBLFVBQTBHZSxHQUFHLEdBQUMsRUFBOUc7QUFBQSxVQUFrSHFDLEtBQUssR0FBQyxFQUF4SDtBQUFBLFVBQTRIQyxLQUFLLEdBQUMsRUFBbEk7QUFBQSxVQUFzSUMsS0FBSyxHQUFDLEVBQTVJO0FBQUEsVUFBZ0pDLE1BQU0sR0FBQyxFQUF2SjtBQUFBLFVBQTJKQyxNQUEzSjtBQUFBLFVBQW1LQyxJQUFJLEdBQUMsRUFBeEs7QUFBQSxVQUE0S0MsSUFBSSxHQUFDLEVBQWpMO0FBQUEsVUFBcUxDLE1BQXJMO0FBQUEsVUFBNkxDLE1BQTdMO0FBQUEsVUFBcU1DLEtBQXJNO0FBQUEsVUFBNE1DLE1BQU0sR0FBQyxFQUFuTjtBQUFBLFVBQXVObEQsR0FBdk47O0FBQ0EsV0FBS3hULEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS29QLElBQUwsR0FBWSxlQUFaOztBQUVBLFdBQUtoQyxFQUFMLEdBQVUsVUFBU3ROLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDMlUsUUFBSCxHQUFjLENBQWQ7QUFDQTNVLFFBQUFBLEVBQUUsQ0FBQzRVLENBQUgsR0FBTyxDQUNOLENBQ0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FERCxFQUVDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBRkQsQ0FETSxDQUFQO0FBTUE1VSxRQUFBQSxFQUFFLENBQUNtTixFQUFIO0FBQ0FuTixRQUFBQSxFQUFFLENBQUNrTSxFQUFILENBQU0sSUFBSXVHLG9CQUFKLEVBQU4sRUFBa0M7QUFBRW5HLFVBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNWLFVBQUFBLEVBQUUsRUFBRTtBQUFiLFNBQWxDO0FBQ0E1TCxRQUFBQSxFQUFFLENBQUM2UyxFQUFILEdBQVEsQ0FDUCxDQUNDLENBQUMsQ0FBRCxFQUFHLFFBQUgsRUFBWSxRQUFaLEVBQXFCLE9BQXJCLEVBQTZCLE9BQTdCLEVBQXFDLE9BQXJDLEVBQTZDLE9BQTdDLEVBQXFELE9BQXJELEVBQTZELE9BQTdELEVBQXFFLE9BQXJFLEVBQTZFLE9BQTdFLEVBQXFGLE9BQXJGLEVBQTZGLE9BQTdGLEVBQXFHLFFBQXJHLEVBQThHLFFBQTlHLEVBQXVILENBQXZILEVBQXlILENBQXpILENBREQsQ0FETyxDQUFSO0FBS0E3UyxRQUFBQSxFQUFFLENBQUN1TixFQUFILEdBQVEsR0FBUjtBQUNBdk4sUUFBQUEsRUFBRSxDQUFDZ0YsRUFBSCxHQUFRLENBQVI7QUFDQSxPQWpCRDs7QUFtQkEsV0FBSzRELEVBQUwsR0FBVSxVQUFTd0UsRUFBVCxFQUFhO0FBQ3RCQSxRQUFBQSxFQUFFLENBQUM3RCxFQUFILEdBQVEsQ0FBUjtBQUNBNkQsUUFBQUEsRUFBRSxDQUFDN0UsRUFBSCxHQUFRLElBQVI7QUFDQTZFLFFBQUFBLEVBQUUsQ0FBQ3JELEVBQUgsR0FBUSxFQUFSO0FBQ0FxRCxRQUFBQSxFQUFFLENBQUMzRSxFQUFILEdBQVEsQ0FBUjtBQUNBLE9BTEQ7O0FBT0EsV0FBS1MsRUFBTCxHQUFVLFVBQVNELEVBQVQsRUFBYWpKLEVBQWIsRUFBaUJvTixFQUFqQixFQUFxQjtBQUM5QnVJLFFBQUFBLEdBQUcsR0FBRTNWLEVBQUUsQ0FBQ21KLEVBQUgsR0FBTSxDQUFOLEdBQVEsQ0FBUixHQUFXbkosRUFBRSxDQUFDbUosRUFBSCxHQUFNLENBQU4sR0FBUSxDQUFSLEdBQVVuSixFQUFFLENBQUNtSixFQUE3QjtBQUNBd00sUUFBQUEsR0FBRyxHQUFDLE9BQUosR0FBWS9WLEdBQUcsQ0FBQzRWLENBQUosQ0FBTUksR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLE9BQXBCLENBQVosR0FBeUMvVixHQUFHLENBQUM0VixDQUFKLENBQU1JLEdBQU4sRUFBVSxDQUFWLEVBQVksQ0FBQ0QsR0FBRyxHQUFDLE9BQUwsSUFBYyxNQUExQixDQUF6QztBQUNBZixRQUFBQSxDQUFDLEdBQUcvVSxFQUFFLENBQUM0VixFQUFILENBQU16VixFQUFFLENBQUM0VSxDQUFILENBQUssQ0FBTCxFQUFRZ0IsR0FBRyxDQUFDLENBQUQsQ0FBWCxDQUFOLEVBQXNCQSxHQUFHLENBQUMsQ0FBRCxDQUF6QixDQUFKO0FBQ0F4SSxRQUFBQSxFQUFFLENBQUM3RCxFQUFILEdBQVFxTCxDQUFSO0FBQ0EsT0FMRDs7QUFPQSxXQUFLL0ksRUFBTCxHQUFVLFVBQVM3TCxFQUFULEVBQWFXLEVBQWIsRUFBaUI7QUFDMUJBLFFBQUFBLEVBQUUsQ0FBQytSLEVBQUgsR0FBUSxHQUFSO0FBQ0E5UyxRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU0rRyxFQUFOLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQWxVLFFBQUFBLEVBQUUsQ0FBQ21VLEVBQUgsR0FBUSxFQUFSO0FBQ0FsVixRQUFBQSxHQUFHLENBQUNpWCxFQUFKLENBQU9sVyxFQUFFLENBQUNtVSxFQUFWLEVBQWNELEVBQWQsRUFBa0I3VSxFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDbVUsRUFBVCxFQUFhOVUsRUFBRSxDQUFDVSxFQUFoQixFQUFvQkMsRUFBRSxDQUFDbVUsRUFBdkI7QUFDQUMsUUFBQUEsRUFBRSxHQUFHLElBQUkvVSxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsSUFBSSxDQUFwQixDQUFUO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNnUyxFQUFILEdBQVFvQyxFQUFSO0FBQ0FuVixRQUFBQSxHQUFHLENBQUNvVixTQUFKLENBQWNFLEVBQWQsRUFBa0IsSUFBbEIsRUFBd0JsVixFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQTlCO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNpUyxFQUFILEdBQVEsRUFBUjtBQUNBaFQsUUFBQUEsR0FBRyxDQUFDaVgsRUFBSixDQUFPbFcsRUFBRSxDQUFDaVMsRUFBVixFQUFjc0MsRUFBZCxFQUFrQmxWLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUNpUyxFQUFULEVBQWE1UyxFQUFFLENBQUNrTixFQUFoQixFQUFvQnZNLEVBQUUsQ0FBQ2lTLEVBQXZCO0FBQ0FoVCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDbVUsRUFBaEI7QUFDQWxWLFFBQUFBLEdBQUcsQ0FBQzBWLENBQUosQ0FBTVMsR0FBTixFQUFXLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQVg7QUFDQW5XLFFBQUFBLEdBQUcsQ0FBQ2tYLENBQUosQ0FBTWpCLEdBQU4sRUFBV2xWLEVBQUUsQ0FBQ2lTLEVBQWQsRUFBa0JtRCxHQUFsQjtBQUNBblcsUUFBQUEsR0FBRyxDQUFDMFYsQ0FBSixDQUFNTyxHQUFOLEVBQVdBLEdBQVg7QUFDQWpXLFFBQUFBLEdBQUcsQ0FBQ2tYLENBQUosQ0FBTWhCLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkYsR0FBaEI7QUFDQWpXLFFBQUFBLEdBQUcsQ0FBQ21YLEVBQUosQ0FBTzVCLEVBQVAsRUFBV1UsR0FBWCxFQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCO0FBQ0FwVixRQUFBQSxFQUFFLENBQUMrSyxFQUFILENBQU0sQ0FBTixFQUFTZ0osU0FBVCxHQUFxQlMsRUFBckI7QUFDQXhVLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CM1UsRUFBRSxDQUFDMlUsUUFBdkI7QUFDQSxPQXBCRDs7QUFzQkEsV0FBSzdJLEVBQUwsR0FBVSxVQUFTOUwsRUFBVCxFQUFhVyxFQUFiLEVBQWlCO0FBQzFCQSxRQUFBQSxFQUFFLENBQUMrUixFQUFILEdBQVEsR0FBUjtBQUNBOVMsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNK0csRUFBTixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCO0FBQ0FsVSxRQUFBQSxFQUFFLENBQUNtVSxFQUFILEdBQVEsRUFBUjtBQUNBbFYsUUFBQUEsR0FBRyxDQUFDaVgsRUFBSixDQUFPbFcsRUFBRSxDQUFDbVUsRUFBVixFQUFjRCxFQUFkLEVBQWtCN1UsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ21VLEVBQVQsRUFBYTlVLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ21VLEVBQXZCO0FBQ0FDLFFBQUFBLEVBQUUsR0FBRyxJQUFJL1UsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDZ1MsRUFBSCxHQUFRb0MsRUFBUjtBQUNBblYsUUFBQUEsR0FBRyxDQUFDb1YsU0FBSixDQUFjRSxFQUFkLEVBQWtCLElBQWxCLEVBQXdCbFYsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUE5QjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDaVMsRUFBSCxHQUFRLEVBQVI7QUFDQWhULFFBQUFBLEdBQUcsQ0FBQ2lYLEVBQUosQ0FBT2xXLEVBQUUsQ0FBQ2lTLEVBQVYsRUFBY3NDLEVBQWQsRUFBa0JsVixFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDaVMsRUFBVCxFQUFhNVMsRUFBRSxDQUFDa04sRUFBaEIsRUFBb0J2TSxFQUFFLENBQUNpUyxFQUF2QjtBQUNBaFQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ21VLEVBQWhCO0FBQ0FsVixRQUFBQSxHQUFHLENBQUMwVixDQUFKLENBQU1TLEdBQU4sRUFBVyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFYO0FBQ0FuVyxRQUFBQSxHQUFHLENBQUNrWCxDQUFKLENBQU1qQixHQUFOLEVBQVdsVixFQUFFLENBQUNpUyxFQUFkLEVBQWtCbUQsR0FBbEI7QUFDQW5XLFFBQUFBLEdBQUcsQ0FBQzBWLENBQUosQ0FBTU8sR0FBTixFQUFXQSxHQUFYO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUNrWCxDQUFKLENBQU1oQixHQUFOLEVBQVdDLEdBQVgsRUFBZ0JGLEdBQWhCO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUNtWCxFQUFKLENBQU81QixFQUFQLEVBQVdVLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQjtBQUNBcFYsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2dKLFNBQVQsR0FBcUJTLEVBQXJCO0FBQ0F4VSxRQUFBQSxFQUFFLENBQUMrSyxFQUFILENBQU0sQ0FBTixFQUFTaUosUUFBVCxHQUFvQjNVLEVBQUUsQ0FBQzJVLFFBQXZCO0FBQ0EsT0FwQkQ7O0FBc0JBLFdBQUs1SSxFQUFMLEdBQVUsVUFBUzlDLEVBQVQsRUFBYWpKLEVBQWIsRUFBaUJXLEVBQWpCLEVBQXFCO0FBQzlCQSxRQUFBQSxFQUFFLENBQUMrUixFQUFILElBQVN6SixFQUFUO0FBQ0ErTSxRQUFBQSxJQUFJLEdBQUVoVyxFQUFFLENBQUNtSixFQUFILEdBQU0sQ0FBTixHQUFRLENBQVIsR0FBV25KLEVBQUUsQ0FBQ21KLEVBQUgsR0FBTSxDQUFOLEdBQVEsQ0FBUixHQUFVbkosRUFBRSxDQUFDbUosRUFBOUI7QUFDQXZKLFFBQUFBLEdBQUcsQ0FBQzRWLENBQUosQ0FBTVMsSUFBTixFQUFXLENBQVgsRUFBYSxDQUFDRCxJQUFJLEdBQUMsQ0FBTixJQUFTLEVBQXRCO0FBQ0FuRCxRQUFBQSxFQUFFLEdBQUdoVCxFQUFFLENBQUM0VixFQUFILENBQU16VixFQUFFLENBQUM2UyxFQUFILENBQU0sQ0FBTixFQUFTb0QsSUFBSSxDQUFDLENBQUQsQ0FBYixDQUFOLEVBQXdCQSxJQUFJLENBQUMsQ0FBRCxDQUE1QixDQUFMO0FBQ0FyVyxRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU1nRixHQUFOLEVBQVcsQ0FBWCxFQUFjLEdBQWQsRUFBbUIsQ0FBbkI7QUFDQWxULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTZMLEtBQU4sRUFBYXBELEdBQWI7QUFDQWxULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTThMLEtBQU4sRUFBYSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFiO0FBQ0FNLFFBQUFBLE1BQU0sR0FBR3hOLEVBQVQ7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTWtNLElBQU4sRUFBWTVWLEVBQUUsQ0FBQ2lTLEVBQWY7QUFDQWhULFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTW1NLElBQU4sRUFBWTdWLEVBQUUsQ0FBQ21VLEVBQWY7O0FBQ0EsZUFBTzJCLE1BQU0sR0FBRyxNQUFoQixFQUF3QjtBQUN2QkMsVUFBQUEsTUFBTSxHQUFHRCxNQUFUO0FBQ0E3VyxVQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU11TSxNQUFOLEVBQWNWLEtBQWQ7QUFDQXRXLFVBQUFBLEdBQUcsQ0FBQ3NPLENBQUosQ0FBTWtJLEtBQU4sRUFBYUQsS0FBYixFQUFvQkksSUFBcEI7QUFDQUQsVUFBQUEsTUFBTSxHQUFHMVcsR0FBRyxDQUFDd1YsQ0FBSixDQUFNZ0IsS0FBTixDQUFUOztBQUNBLGNBQUlFLE1BQU0sR0FBRyxNQUFiLEVBQXFCO0FBQ3BCQSxZQUFBQSxNQUFNLEdBQUd0VixJQUFJLENBQUNxVSxJQUFMLENBQVVpQixNQUFWLENBQVQ7QUFDQTFXLFlBQUFBLEdBQUcsQ0FBQ3VPLENBQUosQ0FBTWtJLE1BQU4sRUFBY0QsS0FBZCxFQUFxQkUsTUFBckI7QUFDQUssWUFBQUEsS0FBSyxHQUFHLE9BQU85RCxFQUFQLEdBQVl5RCxNQUFwQjtBQUNBLGdCQUFJSyxLQUFLLEdBQUdELE1BQVIsR0FBaUIsR0FBckIsRUFDQ0EsTUFBTSxHQUFHLE1BQU1DLEtBQWY7QUFDRC9XLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTXNRLE1BQU4sRUFBY0EsTUFBZCxFQUFzQmhYLEdBQUcsQ0FBQ2lILENBQUosQ0FBTXdQLE1BQU4sRUFBY0MsTUFBTSxHQUFHSyxLQUF2QixDQUF0QjtBQUNBOztBQUNEL1csVUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNaVEsSUFBTixFQUFZQSxJQUFaLEVBQWtCM1csR0FBRyxDQUFDaUgsQ0FBSixDQUFNK1AsTUFBTixFQUFjRixNQUFkLENBQWxCO0FBQ0E5VyxVQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1rUSxJQUFOLEVBQVlBLElBQVosRUFBa0I1VyxHQUFHLENBQUNpSCxDQUFKLENBQU0wUCxJQUFOLEVBQVlHLE1BQVosQ0FBbEI7QUFDQUQsVUFBQUEsTUFBTSxJQUFJQyxNQUFWO0FBQ0E7O0FBQ0Q5VyxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNtVSxFQUFULEVBQWEwQixJQUFiO0FBQ0E1VyxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNpUyxFQUFULEVBQWEyRCxJQUFiO0FBQ0EzVyxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDbVUsRUFBaEI7QUFDQWxWLFFBQUFBLEdBQUcsQ0FBQzBWLENBQUosQ0FBTVMsR0FBTixFQUFXLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQVg7QUFDQW5XLFFBQUFBLEdBQUcsQ0FBQ2tYLENBQUosQ0FBTWpCLEdBQU4sRUFBV2xWLEVBQUUsQ0FBQ2lTLEVBQWQsRUFBa0JtRCxHQUFsQjtBQUNBblcsUUFBQUEsR0FBRyxDQUFDMFYsQ0FBSixDQUFNTyxHQUFOLEVBQVdBLEdBQVg7QUFDQWpXLFFBQUFBLEdBQUcsQ0FBQ2tYLENBQUosQ0FBTWhCLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkYsR0FBaEI7QUFDQWpXLFFBQUFBLEdBQUcsQ0FBQ21YLEVBQUosQ0FBTzVCLEVBQVAsRUFBV1UsR0FBWCxFQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCO0FBQ0FwVixRQUFBQSxFQUFFLENBQUMrSyxFQUFILENBQU0sQ0FBTixFQUFTZ0osU0FBVCxHQUFxQlMsRUFBckI7QUFDQXhVLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CM1UsRUFBRSxDQUFDMlUsUUFBdkI7QUFDQSxPQXRDRDs7QUF3Q0EsV0FBSzdILEVBQUwsR0FBVSxVQUFTOU0sRUFBVCxFQUFhVyxFQUFiLEVBQWlCb00sRUFBakIsRUFBcUI7QUFDOUIyRyxRQUFBQSxHQUFHLEdBQUcsR0FBTjtBQUNBLFlBQUkvUyxFQUFFLENBQUMrUixFQUFILEdBQVFnQixHQUFaLEVBQWlCLE9BQU8sSUFBUDtBQUNqQixlQUFPLEtBQVA7QUFDQSxPQUpEO0FBT0E7O0FBRUQsYUFBU3NELGNBQVQsR0FBMEI7QUFFekIsVUFBSXRFLEVBQUUsR0FBRyxFQUFUO0FBQUEsVUFBYW9DLEVBQUUsR0FBRyxFQUFsQjtBQUFBLFVBQXNCSSxFQUF0QjtBQUFBLFVBQTBCQyxFQUExQjtBQUFBLFVBQThCckMsR0FBOUI7QUFBQSxVQUFtQ1ksR0FBRyxHQUFHLEVBQXpDO0FBQUEsVUFBNkNFLEdBQUcsR0FBQyxFQUFqRDtBQUFBLFVBQXFEcUQsS0FBSyxHQUFDLEVBQTNEO0FBQUEsVUFBK0RDLEtBQUssR0FBQyxFQUFyRTtBQUFBLFVBQXlFQyxLQUFLLEdBQUMsRUFBL0U7QUFBQSxVQUFtRkMsTUFBTSxHQUFDLEVBQTFGO0FBQUEsVUFBOEZDLE1BQTlGO0FBQUEsVUFBc0dDLElBQUksR0FBQyxFQUEzRztBQUFBLFVBQStHQyxJQUFJLEdBQUMsRUFBcEg7QUFBQSxVQUF3SEMsTUFBeEg7QUFBQSxVQUFnSUMsTUFBaEk7QUFBQSxVQUF3SUMsS0FBeEk7QUFBQSxVQUErSUMsTUFBTSxHQUFDLEVBQXRKO0FBQUEsVUFBMEo3RCxHQUExSjtBQUFBLFVBQStKQyxHQUEvSjtBQUFBLFVBQW9LQyxLQUFwSztBQUFBLFVBQTJLQyxLQUFLLEdBQUcsRUFBbkw7QUFBQSxVQUF1TEMsR0FBdkw7O0FBQ0EsV0FBS2hVLEVBQUwsR0FBVSxDQUFDO0FBQUNNLFFBQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU0rQixRQUFBQSxFQUFFLEVBQUMsQ0FBVDtBQUFXcUMsUUFBQUEsRUFBRSxFQUFDLENBQWQ7QUFBZ0JOLFFBQUFBLGdCQUFnQixFQUFDO0FBQWpDLE9BQUQsQ0FBVjtBQUNBLFdBQUtnTCxJQUFMLEdBQVksUUFBWjs7QUFFQSxXQUFLaEMsRUFBTCxHQUFVLFVBQVN0TixFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQzJVLFFBQUgsR0FBYyxDQUFkO0FBQ0EzVSxRQUFBQSxFQUFFLENBQUNtTixFQUFIO0FBQ0FuTixRQUFBQSxFQUFFLENBQUMrVCxHQUFILEdBQVMsQ0FDUixDQUNDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBREQsRUFFQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUZELEVBR0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FIRCxFQUlDLENBQUMsQ0FBRCxFQUFHLEdBQUgsRUFBTyxHQUFQLENBSkQsRUFLQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxDQUxELEVBTUMsQ0FBQyxHQUFELEVBQUssUUFBTCxFQUFjLFFBQWQsQ0FORCxFQU9DLENBQUMsUUFBRCxFQUFVLEdBQVYsRUFBYyxHQUFkLENBUEQsRUFRQyxDQUFDLEdBQUQsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQVJELEVBU0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FURCxFQVVDLENBQUMsQ0FBRCxFQUFHLEdBQUgsRUFBTyxHQUFQLENBVkQsRUFXQyxDQUFDLEdBQUQsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQVhELENBRFEsQ0FBVDtBQWVBL1QsUUFBQUEsRUFBRSxDQUFDdU4sRUFBSCxHQUFRLEdBQVI7QUFDQXZOLFFBQUFBLEVBQUUsQ0FBQ2dGLEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0FwQkQ7O0FBc0JBLFdBQUs0RCxFQUFMLEdBQVUsVUFBU3dFLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDN0QsRUFBSCxHQUFRLENBQVI7QUFDQTZELFFBQUFBLEVBQUUsQ0FBQzdFLEVBQUgsR0FBUSxDQUFSO0FBQ0E2RSxRQUFBQSxFQUFFLENBQUNyRCxFQUFILEdBQVEsRUFBUjtBQUNBcUQsUUFBQUEsRUFBRSxDQUFDM0UsRUFBSCxHQUFRLENBQVI7QUFDQSxPQUxEOztBQU9BLFdBQUtTLEVBQUwsR0FBVSxVQUFTRCxFQUFULEVBQWFqSixFQUFiLEVBQWlCb04sRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUSxDQUFSO0FBQ0EsT0FGRDs7QUFJQSxXQUFLc0MsRUFBTCxHQUFVLFVBQVM3TCxFQUFULEVBQWFXLEVBQWIsRUFBaUI7QUFDMUJBLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsR0FBTyxHQUFQO0FBQ0FoVixRQUFBQSxHQUFHLENBQUNrTyxDQUFKLENBQU00RSxFQUFOLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQS9SLFFBQUFBLEVBQUUsQ0FBQ2tVLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVixRQUFBQSxHQUFHLENBQUNpWCxFQUFKLENBQU9sVyxFQUFFLENBQUNrVSxFQUFWLEVBQWNuQyxFQUFkLEVBQWtCMVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ2tVLEVBQVQsRUFBYTdVLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ2tVLEVBQXZCO0FBQ0FqVixRQUFBQSxHQUFHLENBQUNvVixTQUFKLENBQWNGLEVBQWQsRUFBa0IsR0FBbEIsRUFBdUI5VSxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQTdCO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNvVSxFQUFILEdBQVEsRUFBUjtBQUNBblYsUUFBQUEsR0FBRyxDQUFDaVgsRUFBSixDQUFPbFcsRUFBRSxDQUFDb1UsRUFBVixFQUFjRCxFQUFkLEVBQWtCOVUsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ29VLEVBQVQsRUFBYS9VLEVBQUUsQ0FBQ2tOLEVBQWhCLEVBQW9Cdk0sRUFBRSxDQUFDb1UsRUFBdkI7QUFDQXBVLFFBQUFBLEVBQUUsQ0FBQ2dTLEVBQUgsR0FBUSxDQUFSO0FBQ0F1QyxRQUFBQSxFQUFFLEdBQUcsSUFBSWxWLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVQ7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ2lTLEVBQUgsR0FBUXNDLEVBQVI7QUFDQUMsUUFBQUEsRUFBRSxHQUFHLEtBQUtuVixFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsS0FBSyxFQUFyQixDQUFWO0FBQ0F0VSxRQUFBQSxFQUFFLENBQUNrUyxFQUFILEdBQVFzQyxFQUFSO0FBQ0FyQyxRQUFBQSxHQUFHLEdBQUcsSUFBSTlTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVY7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ2tULEdBQUgsR0FBU2YsR0FBVDtBQUNBbFQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2tVLEVBQWhCO0FBQ0EsT0FsQkQ7O0FBb0JBLFdBQUsvSSxFQUFMLEdBQVUsVUFBUzlMLEVBQVQsRUFBYVcsRUFBYixFQUFpQjtBQUMxQkEsUUFBQUEsRUFBRSxDQUFDaVUsQ0FBSCxHQUFPLEdBQVA7QUFDQWhWLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTTRFLEVBQU4sRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQjtBQUNBL1IsUUFBQUEsRUFBRSxDQUFDa1UsRUFBSCxHQUFRLEVBQVI7QUFDQWpWLFFBQUFBLEdBQUcsQ0FBQ2lYLEVBQUosQ0FBT2xXLEVBQUUsQ0FBQ2tVLEVBQVYsRUFBY25DLEVBQWQsRUFBa0IxUyxFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDa1UsRUFBVCxFQUFhN1UsRUFBRSxDQUFDVSxFQUFoQixFQUFvQkMsRUFBRSxDQUFDa1UsRUFBdkI7QUFDQWpWLFFBQUFBLEdBQUcsQ0FBQ29WLFNBQUosQ0FBY0YsRUFBZCxFQUFrQixHQUFsQixFQUF1QjlVLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBN0I7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ29VLEVBQUgsR0FBUSxFQUFSO0FBQ0FuVixRQUFBQSxHQUFHLENBQUNpWCxFQUFKLENBQU9sVyxFQUFFLENBQUNvVSxFQUFWLEVBQWNELEVBQWQsRUFBa0I5VSxFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDb1UsRUFBVCxFQUFhL1UsRUFBRSxDQUFDa04sRUFBaEIsRUFBb0J2TSxFQUFFLENBQUNvVSxFQUF2QjtBQUNBcFUsUUFBQUEsRUFBRSxDQUFDZ1MsRUFBSCxHQUFRLENBQVI7QUFDQXVDLFFBQUFBLEVBQUUsR0FBRyxJQUFJbFYsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDaVMsRUFBSCxHQUFRc0MsRUFBUjtBQUNBQyxRQUFBQSxFQUFFLEdBQUcsS0FBS25WLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixLQUFLLEVBQXJCLENBQVY7QUFDQXRVLFFBQUFBLEVBQUUsQ0FBQ2tTLEVBQUgsR0FBUXNDLEVBQVI7QUFDQXJDLFFBQUFBLEdBQUcsR0FBRyxJQUFJOVMsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVjtBQUNBdFUsUUFBQUEsRUFBRSxDQUFDa1QsR0FBSCxHQUFTZixHQUFUO0FBQ0FsVCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDa1UsRUFBaEI7QUFDQSxPQWxCRDs7QUFvQkEsV0FBSzlJLEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQ2lVLENBQUgsSUFBUTNMLEVBQVI7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTTRGLEdBQU4sRUFBVyxDQUFYLEVBQWMsR0FBZCxFQUFtQixDQUFuQjtBQUNBOVQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNNE0sS0FBTixFQUFhdkQsR0FBYjtBQUNBOVQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNNk0sS0FBTixFQUFhLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQWI7QUFDQXRYLFFBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTTJRLElBQU4sRUFBWUwsS0FBWixFQUFtQmhPLEVBQW5CO0FBQ0FySixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1nUixJQUFOLEVBQVlBLElBQVosRUFBa0IzVyxFQUFFLENBQUNvVSxFQUFyQjtBQUNBblYsUUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNNFEsSUFBTixFQUFZRCxJQUFaLEVBQWtCck8sRUFBbEI7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTWlSLElBQU4sRUFBWUEsSUFBWixFQUFrQjVXLEVBQUUsQ0FBQ2tVLEVBQXJCO0FBQ0FqVixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNrVSxFQUFULEVBQWEwQyxJQUFiO0FBQ0EzWCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNvVSxFQUFULEVBQWF1QyxJQUFiO0FBQ0ExWCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDa1UsRUFBaEI7QUFDQWYsUUFBQUEsR0FBRyxHQUFJblQsRUFBRSxDQUFDaVUsQ0FBSCxHQUFPalUsRUFBRSxDQUFDa1QsR0FBakI7QUFDQUcsUUFBQUEsS0FBSyxHQUFFRixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0FFLFFBQUFBLEtBQUssR0FBQyxRQUFOLEdBQWVBLEtBQUssR0FBQyxHQUFOLEdBQVVBLEtBQUssR0FBQyxPQUFOLEdBQWNBLEtBQUssR0FBQyxHQUFOLEdBQVVwVSxHQUFHLENBQUM0VixDQUFKLENBQU12QixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsRUFBeEIsQ0FBVixHQUFzQ3BVLEdBQUcsQ0FBQzRWLENBQUosQ0FBTXZCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLEdBQVAsSUFBWSxPQUExQixDQUFwRCxHQUF1RnBVLEdBQUcsQ0FBQzRWLENBQUosQ0FBTXZCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLE9BQVAsSUFBZ0IsT0FBOUIsQ0FBakcsR0FBd0lBLEtBQUssR0FBQyxRQUFOLEdBQWVBLEtBQUssR0FBQyxRQUFOLEdBQWVwVSxHQUFHLENBQUM0VixDQUFKLENBQU12QixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxHQUFQLElBQVksTUFBMUIsQ0FBZixHQUFpRHBVLEdBQUcsQ0FBQzRWLENBQUosQ0FBTXZCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLFFBQVAsSUFBaUIsT0FBL0IsQ0FBaEUsR0FBd0dwVSxHQUFHLENBQUM0VixDQUFKLENBQU12QixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxRQUFQLElBQWlCLE1BQS9CLENBQS9QLEdBQXNTQSxLQUFLLEdBQUMsR0FBTixHQUFVQSxLQUFLLEdBQUMsR0FBTixHQUFVQSxLQUFLLEdBQUMsUUFBTixHQUFlcFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNdkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsUUFBUCxJQUFpQixPQUEvQixDQUFmLEdBQXVEcFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNdkIsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsUUFBUCxJQUFpQixPQUEvQixDQUFqRSxHQUF5R3BVLEdBQUcsQ0FBQzRWLENBQUosQ0FBTXZCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLEdBQVAsSUFBWSxDQUExQixDQUFuSCxHQUFnSkEsS0FBSyxHQUFDLFFBQU4sR0FBZXBVLEdBQUcsQ0FBQzRWLENBQUosQ0FBTXZCLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLEdBQVAsSUFBWSxPQUExQixDQUFmLEdBQWtEcFUsR0FBRyxDQUFDNFYsQ0FBSixDQUFNdkIsS0FBTixFQUFZLEVBQVosRUFBZSxDQUFDRCxLQUFLLEdBQUMsUUFBUCxJQUFpQixPQUFoQyxDQUF4ZTtBQUNBRCxRQUFBQSxHQUFHLEdBQUdsVSxFQUFFLENBQUM0VixFQUFILENBQU16VixFQUFFLENBQUMrVCxHQUFILENBQU8sQ0FBUCxFQUFVRSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQU4sRUFBMEJBLEtBQUssQ0FBQyxDQUFELENBQS9CLENBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFJdlQsRUFBRSxDQUFDa1MsRUFBSCxHQUFRa0IsR0FBZjtBQUNBblUsUUFBQUEsR0FBRyxDQUFDb1IsQ0FBSixDQUFNclEsRUFBRSxDQUFDb0MsRUFBVCxFQUFZLENBQUMsR0FBRCxFQUFLLEdBQUwsQ0FBWjtBQUNBcEMsUUFBQUEsRUFBRSxDQUFDRyxFQUFILEdBQVFILEVBQUUsQ0FBQ2dTLEVBQVg7QUFDQS9TLFFBQUFBLEdBQUcsQ0FBQzRWLENBQUosQ0FBTTdVLEVBQUUsQ0FBQ1csRUFBVCxFQUFZNFMsR0FBWixFQUFnQkEsR0FBaEI7QUFDQXRVLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ3NDLEVBQVQsRUFBWSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFaO0FBQ0F0QyxRQUFBQSxFQUFFLENBQUN3QixFQUFILEdBQVEsQ0FBUjtBQUNBeEIsUUFBQUEsRUFBRSxDQUFDMkIsRUFBSCxHQUFTM0IsRUFBRSxDQUFDaVMsRUFBSCxHQUFRLENBQVQsR0FBYyxDQUFkLEdBQW9CalMsRUFBRSxDQUFDaVMsRUFBSCxJQUFTLENBQVYsR0FBZSxDQUFmLEdBQW1CalMsRUFBRSxDQUFDaVMsRUFBakQ7QUFDQSxPQXZCRDs7QUF5QkEsV0FBSzlGLEVBQUwsR0FBVSxVQUFTOU0sRUFBVCxFQUFhVyxFQUFiLEVBQWlCb00sRUFBakIsRUFBcUI7QUFDOUIsWUFBSXBNLEVBQUUsQ0FBQ2lVLENBQUgsR0FBT2pVLEVBQUUsQ0FBQ2tULEdBQWQsRUFBbUIsT0FBTyxJQUFQO0FBQ25CLGVBQU8sS0FBUDtBQUNBLE9BSEQ7QUFNQTs7QUFFRCxhQUFTK0Qsd0JBQVQsR0FBb0M7QUFFbkMsVUFBSWhELENBQUo7QUFBQSxVQUFPZSxHQUFQO0FBQUEsVUFBWUMsR0FBRyxHQUFHLEVBQWxCO0FBQUEsVUFBc0JmLEVBQXRCO0FBQUEsVUFBMEJDLEVBQUUsR0FBRyxFQUEvQjtBQUFBLFVBQW1DK0MsR0FBbkM7QUFBQSxVQUF3Q0MsR0FBRyxHQUFHLEVBQTlDO0FBQUEsVUFBa0QvQyxFQUFFLEdBQUcsRUFBdkQ7QUFBQSxVQUEyRGdELEdBQTNEO0FBQUEsVUFBZ0VDLEdBQUcsR0FBRyxFQUF0RTtBQUFBLFVBQTBFckYsRUFBMUU7QUFBQSxVQUE4RXVDLEVBQUUsR0FBRyxFQUFuRjtBQUFBLFVBQXVGdEMsRUFBRSxHQUFHLEVBQTVGO0FBQUEsVUFBZ0dFLEdBQWhHO0FBQUEsVUFBcUdlLEdBQXJHO0FBQUEsVUFBMEdvRSxLQUExRztBQUFBLFVBQWlIQyxLQUFLLEdBQUcsRUFBekg7QUFBQSxVQUE2SHRFLEdBQTdIOztBQUNBLFdBQUsxVCxFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtvUCxJQUFMLEdBQVksa0JBQVo7O0FBRUEsV0FBS2hDLEVBQUwsR0FBVSxVQUFTdE4sRUFBVCxFQUFhO0FBQ3RCQSxRQUFBQSxFQUFFLENBQUM0VSxDQUFILEdBQU8sQ0FDTixDQUNDLENBQUMsT0FBRCxFQUFTLE9BQVQsRUFBaUIsT0FBakIsQ0FERCxFQUVDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBRkQsQ0FETSxDQUFQO0FBTUE1VSxRQUFBQSxFQUFFLENBQUNtTixFQUFIO0FBQ0FuTixRQUFBQSxFQUFFLENBQUM4VSxFQUFILEdBQVEsQ0FDUCxDQUFDLENBQUMsQ0FBQyxHQUFGLEVBQU0sQ0FBTixDQUFELEVBQVUsQ0FBQyxDQUFDLEdBQUYsRUFBTSxDQUFDLEdBQVAsQ0FBVixFQUFzQixDQUFDLENBQUMsR0FBRixFQUFNLENBQUMsR0FBUCxDQUF0QixDQURPLENBQVI7QUFHQTlVLFFBQUFBLEVBQUUsQ0FBQytVLEVBQUgsR0FBUSxDQUNQLENBQUMsQ0FBQyxHQUFELEVBQUssQ0FBTCxDQUFELEVBQVMsQ0FBQyxHQUFELEVBQUssQ0FBQyxHQUFOLENBQVQsRUFBb0IsQ0FBQyxHQUFELEVBQUssQ0FBQyxHQUFOLENBQXBCLENBRE8sQ0FBUjtBQUdBL1UsUUFBQUEsRUFBRSxDQUFDNlQsR0FBSCxHQUFTLENBQ1IsQ0FDQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQURELEVBRUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FGRCxFQUdDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBSEQsQ0FEUSxDQUFUO0FBT0E3VCxRQUFBQSxFQUFFLENBQUNrTSxFQUFILENBQU0sSUFBSXdKLHFCQUFKLEVBQU4sRUFBbUM7QUFBRXBKLFVBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNWLFVBQUFBLEVBQUUsRUFBRTtBQUFiLFNBQW5DO0FBQ0E1TCxRQUFBQSxFQUFFLENBQUNrTSxFQUFILENBQU0sSUFBSThLLGNBQUosRUFBTixFQUE0QjtBQUFFMUssVUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU1YsVUFBQUEsRUFBRSxFQUFFO0FBQWIsU0FBNUI7QUFDQTVMLFFBQUFBLEVBQUUsQ0FBQ3VOLEVBQUgsR0FBUSxDQUFSO0FBQ0F2TixRQUFBQSxFQUFFLENBQUNnRixFQUFILEdBQVEsQ0FBUjtBQUNBLE9BekJEOztBQTJCQSxXQUFLNEQsRUFBTCxHQUFVLFVBQVN3RSxFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUSxDQUFSO0FBQ0E2RCxRQUFBQSxFQUFFLENBQUM3RSxFQUFILEdBQVEsQ0FBUjtBQUNBNkUsUUFBQUEsRUFBRSxDQUFDckQsRUFBSCxHQUFRLENBQVI7QUFDQSxPQUpEOztBQU1BLFdBQUtiLEVBQUwsR0FBVSxVQUFTRCxFQUFULEVBQWFqSixFQUFiLEVBQWlCb04sRUFBakIsRUFBcUI7QUFDOUJ1SSxRQUFBQSxHQUFHLEdBQUUzVixFQUFFLENBQUNELEVBQUgsQ0FBTW9KLEVBQU4sR0FBUyxDQUFULEdBQVcsQ0FBWCxHQUFjbkosRUFBRSxDQUFDRCxFQUFILENBQU1vSixFQUFOLEdBQVMsT0FBVCxHQUFrQixJQUFHLENBQUNuSixFQUFFLENBQUNELEVBQUgsQ0FBTW9KLEVBQU4sR0FBUyxDQUFWLElBQWEsT0FBbEMsR0FBNENuSixFQUFFLENBQUNELEVBQUgsQ0FBTW9KLEVBQXJFO0FBQ0F3TSxRQUFBQSxHQUFHLEdBQUMsT0FBSixHQUFZL1YsR0FBRyxDQUFDNFYsQ0FBSixDQUFNSSxHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxDQUFMLElBQVEsUUFBcEIsQ0FBWixHQUEwQy9WLEdBQUcsQ0FBQzRWLENBQUosQ0FBTUksR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsT0FBTCxJQUFjLFFBQTFCLENBQTFDO0FBQ0FmLFFBQUFBLENBQUMsR0FBRy9VLEVBQUUsQ0FBQzRWLEVBQUgsQ0FBTXpWLEVBQUUsQ0FBQzRVLENBQUgsQ0FBSyxDQUFMLEVBQVFnQixHQUFHLENBQUMsQ0FBRCxDQUFYLENBQU4sRUFBc0JBLEdBQUcsQ0FBQyxDQUFELENBQXpCLENBQUo7QUFDQXhJLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUXFMLENBQVI7QUFDQSxPQUxEOztBQU9BLFdBQUsvSSxFQUFMLEdBQVUsVUFBUzdMLEVBQVQsRUFBYVcsRUFBYixFQUFpQjtBQUMxQkEsUUFBQUEsRUFBRSxDQUFDK1IsRUFBSCxHQUFRLEdBQVI7QUFDQW1DLFFBQUFBLEVBQUUsR0FBRyxJQUFJN1UsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBNEMsUUFBQUEsR0FBRyxHQUFHaFksRUFBRSxDQUFDc1ksRUFBSCxDQUFNdEQsRUFBTixDQUFOO0FBQ0FqVixRQUFBQSxHQUFHLENBQUM0VixDQUFKLENBQU1zQyxHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxDQUFMLElBQVEsQ0FBcEI7QUFDQWhZLFFBQUFBLEVBQUUsQ0FBQ3VZLEVBQUgsQ0FBTXRELEVBQU4sRUFBVTlVLEVBQUUsQ0FBQzhVLEVBQUgsQ0FBTWdELEdBQUcsQ0FBQyxDQUFELENBQVQsQ0FBVixFQUF5QkEsR0FBRyxDQUFDLENBQUQsQ0FBNUI7QUFDQUMsUUFBQUEsR0FBRyxHQUFHbFksRUFBRSxDQUFDc1ksRUFBSCxDQUFNdEQsRUFBTixDQUFOO0FBQ0FqVixRQUFBQSxHQUFHLENBQUM0VixDQUFKLENBQU13QyxHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxDQUFMLElBQVEsQ0FBcEI7QUFDQWxZLFFBQUFBLEVBQUUsQ0FBQ3VZLEVBQUgsQ0FBTXJELEVBQU4sRUFBVS9VLEVBQUUsQ0FBQytVLEVBQUgsQ0FBTWlELEdBQUcsQ0FBQyxDQUFELENBQVQsQ0FBVixFQUF5QkEsR0FBRyxDQUFDLENBQUQsQ0FBNUI7QUFDQXJGLFFBQUFBLEVBQUUsR0FBRyxJQUFJM1MsRUFBRSxDQUFDRCxFQUFILENBQU1rVixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBclYsUUFBQUEsR0FBRyxDQUFDeVksQ0FBSixDQUFNbkQsRUFBTixFQUFVSixFQUFWLEVBQWNDLEVBQWQsRUFBa0JwQyxFQUFsQjtBQUNBL1MsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNOEUsRUFBTixFQUFVc0MsRUFBRSxDQUFDLENBQUQsQ0FBWixFQUFpQkEsRUFBRSxDQUFDLENBQUQsQ0FBbkIsRUFBd0IsQ0FBeEI7QUFDQXZVLFFBQUFBLEVBQUUsQ0FBQ3dVLEVBQUgsR0FBUSxFQUFSO0FBQ0F2VixRQUFBQSxHQUFHLENBQUNpWCxFQUFKLENBQU9sVyxFQUFFLENBQUN3VSxFQUFWLEVBQWN2QyxFQUFkLEVBQWtCNVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ3dVLEVBQVQsRUFBYW5WLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ3dVLEVBQXZCO0FBQ0F4VSxRQUFBQSxFQUFFLENBQUNrUyxFQUFILEdBQVEsQ0FBUjtBQUNBQyxRQUFBQSxHQUFHLEdBQUcsSUFBSTlTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVY7QUFDQWdELFFBQUFBLEtBQUssR0FBRW5GLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFTQSxHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBUUEsR0FBeEI7QUFDQW1GLFFBQUFBLEtBQUssR0FBQyxRQUFOLEdBQWVBLEtBQUssR0FBQyxRQUFOLEdBQWVyWSxHQUFHLENBQUM0VixDQUFKLENBQU0wQyxLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsT0FBeEIsQ0FBZixHQUFnRHJZLEdBQUcsQ0FBQzRWLENBQUosQ0FBTTBDLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLFFBQVAsSUFBaUIsT0FBL0IsQ0FBL0QsR0FBdUdyWSxHQUFHLENBQUM0VixDQUFKLENBQU0wQyxLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxRQUFQLElBQWlCLE9BQS9CLENBQXZHO0FBQ0FwRSxRQUFBQSxHQUFHLEdBQUdoVSxFQUFFLENBQUM0VixFQUFILENBQU16VixFQUFFLENBQUM2VCxHQUFILENBQU8sQ0FBUCxFQUFVcUUsS0FBSyxDQUFDLENBQUQsQ0FBZixDQUFOLEVBQTBCQSxLQUFLLENBQUMsQ0FBRCxDQUEvQixDQUFOO0FBQ0F2WCxRQUFBQSxFQUFFLENBQUMrUyxHQUFILEdBQVNHLEdBQVQ7QUFDQWpVLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ0QsRUFBVCxFQUFhQyxFQUFFLENBQUN3VSxFQUFoQjtBQUNBeFUsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBL1MsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBLE9BeEJEOztBQTBCQSxXQUFLNUgsRUFBTCxHQUFVLFVBQVM5TCxFQUFULEVBQWFXLEVBQWIsRUFBaUI7QUFDMUJBLFFBQUFBLEVBQUUsQ0FBQytSLEVBQUgsR0FBUSxHQUFSO0FBQ0FtQyxRQUFBQSxFQUFFLEdBQUcsSUFBSTdVLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVQ7QUFDQTRDLFFBQUFBLEdBQUcsR0FBR2hZLEVBQUUsQ0FBQ3NZLEVBQUgsQ0FBTXRELEVBQU4sQ0FBTjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNc0MsR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLENBQXBCO0FBQ0FoWSxRQUFBQSxFQUFFLENBQUN1WSxFQUFILENBQU10RCxFQUFOLEVBQVU5VSxFQUFFLENBQUM4VSxFQUFILENBQU1nRCxHQUFHLENBQUMsQ0FBRCxDQUFULENBQVYsRUFBeUJBLEdBQUcsQ0FBQyxDQUFELENBQTVCO0FBQ0FDLFFBQUFBLEdBQUcsR0FBR2xZLEVBQUUsQ0FBQ3NZLEVBQUgsQ0FBTXRELEVBQU4sQ0FBTjtBQUNBalYsUUFBQUEsR0FBRyxDQUFDNFYsQ0FBSixDQUFNd0MsR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLENBQXBCO0FBQ0FsWSxRQUFBQSxFQUFFLENBQUN1WSxFQUFILENBQU1yRCxFQUFOLEVBQVUvVSxFQUFFLENBQUMrVSxFQUFILENBQU1pRCxHQUFHLENBQUMsQ0FBRCxDQUFULENBQVYsRUFBeUJBLEdBQUcsQ0FBQyxDQUFELENBQTVCO0FBQ0FyRixRQUFBQSxFQUFFLEdBQUcsSUFBSTNTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNa1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVQ7QUFDQXJWLFFBQUFBLEdBQUcsQ0FBQ3lZLENBQUosQ0FBTW5ELEVBQU4sRUFBVUosRUFBVixFQUFjQyxFQUFkLEVBQWtCcEMsRUFBbEI7QUFDQS9TLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTThFLEVBQU4sRUFBVXNDLEVBQUUsQ0FBQyxDQUFELENBQVosRUFBaUJBLEVBQUUsQ0FBQyxDQUFELENBQW5CLEVBQXdCLENBQXhCO0FBQ0F2VSxRQUFBQSxFQUFFLENBQUN3VSxFQUFILEdBQVEsRUFBUjtBQUNBdlYsUUFBQUEsR0FBRyxDQUFDaVgsRUFBSixDQUFPbFcsRUFBRSxDQUFDd1UsRUFBVixFQUFjdkMsRUFBZCxFQUFrQjVTLEVBQUUsQ0FBQzBCLEVBQXJCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0zRixFQUFFLENBQUN3VSxFQUFULEVBQWFuVixFQUFFLENBQUNVLEVBQWhCLEVBQW9CQyxFQUFFLENBQUN3VSxFQUF2QjtBQUNBeFUsUUFBQUEsRUFBRSxDQUFDa1MsRUFBSCxHQUFRLENBQVI7QUFDQUMsUUFBQUEsR0FBRyxHQUFHLElBQUk5UyxFQUFFLENBQUNELEVBQUgsQ0FBTWtWLElBQU4sTUFBZ0IsSUFBSSxDQUFwQixDQUFWO0FBQ0FnRCxRQUFBQSxLQUFLLEdBQUVuRixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0FtRixRQUFBQSxLQUFLLEdBQUMsUUFBTixHQUFlQSxLQUFLLEdBQUMsUUFBTixHQUFlclksR0FBRyxDQUFDNFYsQ0FBSixDQUFNMEMsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxJQUFVLE9BQXhCLENBQWYsR0FBZ0RyWSxHQUFHLENBQUM0VixDQUFKLENBQU0wQyxLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxRQUFQLElBQWlCLE9BQS9CLENBQS9ELEdBQXVHclksR0FBRyxDQUFDNFYsQ0FBSixDQUFNMEMsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsUUFBUCxJQUFpQixPQUEvQixDQUF2RztBQUNBcEUsUUFBQUEsR0FBRyxHQUFHaFUsRUFBRSxDQUFDNFYsRUFBSCxDQUFNelYsRUFBRSxDQUFDNlQsR0FBSCxDQUFPLENBQVAsRUFBVXFFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBTjtBQUNBdlgsUUFBQUEsRUFBRSxDQUFDK1MsR0FBSCxHQUFTRyxHQUFUO0FBQ0FqVSxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDd1UsRUFBaEI7QUFDQXhVLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CaFUsRUFBRSxDQUFDK1MsR0FBdkI7QUFDQS9TLFFBQUFBLEVBQUUsQ0FBQytLLEVBQUgsQ0FBTSxDQUFOLEVBQVNpSixRQUFULEdBQW9CaFUsRUFBRSxDQUFDK1MsR0FBdkI7QUFDQSxPQXhCRDs7QUEwQkEsV0FBSzNILEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQytSLEVBQUgsSUFBU3pKLEVBQVQ7QUFDQXJKLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTTFKLEVBQUUsQ0FBQ0QsRUFBVCxFQUFhQyxFQUFFLENBQUN3VSxFQUFoQjtBQUNBeFUsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBL1MsUUFBQUEsRUFBRSxDQUFDK0ssRUFBSCxDQUFNLENBQU4sRUFBU2lKLFFBQVQsR0FBb0JoVSxFQUFFLENBQUMrUyxHQUF2QjtBQUNBLE9BTEQ7O0FBT0EsV0FBSzVHLEVBQUwsR0FBVSxVQUFTOU0sRUFBVCxFQUFhVyxFQUFiLEVBQWlCb00sRUFBakIsRUFBcUI7QUFDOUI2RyxRQUFBQSxHQUFHLEdBQUcsQ0FBTjtBQUNBLFlBQUlqVCxFQUFFLENBQUMrUixFQUFILEdBQVFrQixHQUFaLEVBQWlCLE9BQU8sSUFBUDtBQUNqQixlQUFPLEtBQVA7QUFDQSxPQUpEO0FBT0E7O0FBRUQsU0FBS3BFLEVBQUwsR0FBVSxVQUFTelAsRUFBVCxFQUFhO0FBQ3RCQSxNQUFBQSxFQUFFLENBQUNxUSxFQUFILEdBQVEsU0FBUjtBQUNBclEsTUFBQUEsRUFBRSxDQUFDK1AsRUFBSCxHQUFRLENBQVI7QUFDQS9QLE1BQUFBLEVBQUUsQ0FBQ2dRLGVBQUgsR0FBcUIsR0FBckI7O0FBQ0FoUSxNQUFBQSxFQUFFLENBQUNrVixJQUFILEdBQVUsWUFBVztBQUFFLGVBQU9qVSxJQUFJLENBQUNzWCxNQUFMLEVBQVA7QUFBdUIsT0FBOUM7O0FBQ0F2WSxNQUFBQSxFQUFFLENBQUNxUCxFQUFILENBQU0sSUFBSXdJLHdCQUFKLEVBQU47QUFDQSxLQU5EOztBQU9DLFNBQUtPLEVBQUwsR0FBVSxVQUFVdFIsQ0FBVixFQUFhO0FBQUssYUFBUUEsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUFWLEdBQWdCQSxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQVYsR0FBY0EsQ0FBcEM7QUFBMkMsS0FBdkU7O0FBRUEsU0FBS3VSLEVBQUwsR0FBVSxVQUFVRyxDQUFWLEVBQWFDLElBQWIsRUFBbUJ2TSxFQUFuQixFQUF1QjtBQUFLLFVBQUl3TSxRQUFRLEdBQUd6WCxJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSXlNLElBQUksR0FBR3pNLEVBQUUsR0FBR3dNLFFBQWhCO0FBQTZCN1ksTUFBQUEsR0FBRyxDQUFDeVksQ0FBSixDQUFNRSxDQUFOLEVBQVNDLElBQUksQ0FBQ0MsUUFBRCxDQUFiLEVBQXlCRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFaLENBQTdCLEVBQTZDQyxJQUE3QztBQUF1RCxLQUE1Sjs7QUFFQSxTQUFLakQsRUFBTCxHQUFVLFVBQVNrRCxVQUFULEVBQXFCMU0sRUFBckIsRUFBeUI7QUFBSyxVQUFJd00sUUFBUSxHQUFHelgsSUFBSSxDQUFDcUIsS0FBTCxDQUFXNEosRUFBWCxDQUFmO0FBQWtDLFVBQUkyTSxPQUFPLEdBQUdILFFBQVEsR0FBRyxDQUF6QjtBQUErQixhQUFPN1ksR0FBRyxDQUFDeUwsQ0FBSixDQUFNc04sVUFBVSxDQUFDRixRQUFELENBQWhCLEVBQTRCRSxVQUFVLENBQUNDLE9BQUQsQ0FBdEMsRUFBaUQzTSxFQUFFLEdBQUd3TSxRQUF0RCxDQUFQO0FBQTJFLEtBQXBMO0FBR0Q7O0FBRUQsU0FBTzlZLFdBQVA7QUFDQyxDQTFwREEsQ0FBRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYzNlYmNkMDItMGQ3Yy00MWJiLWI4ODQtMTY5MzBlYzQ4YzQ2XHJcblxyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICAgICAgICAgICAgKHJvb3QuTmV1dHJpbm9FZmZlY3QgPSBleHBvcnRzKVsnRmlyZXdvcmtzMDInXSA9IGZhY3RvcnkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IChyb290Lk5ldXRyaW5vRWZmZWN0IHx8IChyb290Lk5ldXRyaW5vRWZmZWN0ID0ge30pKTtcclxuICAgICAgICBuYW1lc3BhY2UuX19sYXN0X18gPSBuYW1lc3BhY2VbJ0ZpcmV3b3JrczAyJ10gPSBmYWN0b3J5KCk7XHJcbiAgICB9XHJcbn0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuXHJcbmZ1bmN0aW9uIEZpcmV3b3JrczAyKGN0eCkge1xyXG5cdHZhciBEYiA9IHRoaXM7XHJcblxyXG5cdHZhciBuZSA9IGZ1bmN0aW9uIChMZCwgQmQpIHtcclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMuQmQgPSBCZDtcclxuXHJcblx0XHRpZiAodGhpcy5CZC53ZS5wZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cclxuXHRcdFx0dGhpcy5MYyA9IFtuZS5wcm90b3R5cGUuRWMsXHJcblx0XHRcdFx0bmUucHJvdG90eXBlLkZjXVt0aGlzLndlLnhlXTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy53ZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRuZS5wcm90b3R5cGUgPSB7XHJcblx0XHRFYzogZnVuY3Rpb24gKGZlLCBBYiwgWGIpIHtcclxuXHRcdFx0dmFyIEdjID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0dmFyIEhjID0gTWF0aC5jb3MoR2MpO1xyXG5cdFx0XHR2YXIgSWMgPSBNYXRoLnNpbihHYyk7XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oeWUgKiBIYywgeWUgKiBJYywgemUgKiAtSWMsIHplICogSGMsIEFiWzBdLCBBYlsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdEZjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeWUgPSBjdHguQWUoWGIuTmRbMF0pO1xyXG5cdFx0XHR2YXIgemUgPSBjdHguQWUoWGIuTmRbMV0pO1xyXG5cdFx0XHRmZS4vKiovdHJhbnNmb3JtKFxyXG5cdFx0XHRcdHllICogKDEuMCAtIDIuMCAqIHFbMV0gKiBxWzFdIC0gejIpLFxyXG5cdFx0XHRcdHllICogKHh5ICsgd3opLFxyXG5cdFx0XHRcdHplICogKHd6IC0geHkpLFxyXG5cdFx0XHRcdHplICogKDIuMCAqIHFbMF0gKiBxWzBdICsgejIgLSAxLjApLFxyXG5cdFx0XHRcdEFiWzBdLCBBYlsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdFBjOiBmdW5jdGlvbiAoZmUsIFhiLCBnZSkge1xyXG5cdFx0XHRYYi52YyhmZSwgLTEsIGdlKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLkJlICE9IG51bGwgJiYgIVhiLm9jKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKFhiLk9kID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0dmFyIERlID0gTWF0aC5mbG9vcihYYi5RYyAlIHRoaXMud2UuUmMpO1xyXG5cdFx0XHRcdFx0XHR2YXIgRWUgPSBNYXRoLmZsb29yKFhiLlFjIC8gdGhpcy53ZS5SYyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgQWIgPSBYYi5BYi5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgTmQgPSBYYi5OZC5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIWdlIHx8IGdlLi8qKi90cmFuc2Zvcm0oQWIsIE5kKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgZGYgPSBNYXRoLmFicyhOZFswXSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGVmID0gTWF0aC5hYnMoTmRbMV0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZGYgPiAwLjAwMSAmJiBlZiA+IDAuMDAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5zYXZlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLkxjKGZlLCBBYiwgWGIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZlLnRyYW5zbGF0ZSgtZGYgKiBYYi5QZFswXSwgLWVmICogKDEgLSBYYi5QZFsxXSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmUuZ2xvYmFsQWxwaGEgKj0gWGIuT2Q7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFhiLmdmWzBdIDwgMC45OTkgfHwgWGIuZ2ZbMV0gPCAwLjk5OSB8fCBYYi5nZlsyXSA8IDAuOTk5KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChkZiA+PSAxICYmIGVmID49IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWWUgPSBkZiA8IHRoaXMuVGMgPyBkZiA6IHRoaXMuVGM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIFplID0gZWYgPCB0aGlzLlVjID8gZWYgOiB0aGlzLlVjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYWYoWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiY29weVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcIm11bHRpcGx5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmZpbGxTdHlsZSA9IGN0eC5mZihYYi5nZik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmZpbGxSZWN0KDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLWF0b3BcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZHJhd0ltYWdlKHRoaXMuQmUuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQwLCAwLCBZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmZS5kcmF3SW1hZ2UoY3R4LmNmLCAwLCAwLCBZZSwgWmUsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZS5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLkJlLnggKyB0aGlzLlRjICogRGUsIHRoaXMuQmUueSArIHRoaXMuVWMgKiBFZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLCAwLCAwLCBkZiwgZWYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZlLnJlc3RvcmUoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFhiLnZjKGZlLCAxLCBnZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdEhkOiBmdW5jdGlvbiAoZmUsIGdlKSB7XHJcblx0XHRcdGZlLnNhdmUoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblx0XHRcdFx0ZmUuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gdGhpcy5MZC5tYXRlcmlhbHNbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0ubWF0ZXJpYWxJbmRleF07XHJcblx0XHRcdFx0dGhpcy5CZSA9IHRoaXMuTGQudGV4dHVyZURlc2NzW3RoaXMuTGQuLyoqL21vZGVsLnJlbmRlclN0eWxlc1t0aGlzLndlLnJlbmRlclN0eWxlSW5kZXhdLnRleHR1cmVJbmRpY2VzWzBdXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLkJlID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuQmUpIHtcclxuXHRcdFx0XHR0aGlzLlRjID0gdGhpcy5CZS53aWR0aCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0dGhpcy5VYyA9IHRoaXMuQmUuaGVpZ2h0IC8gdGhpcy53ZS5TYztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24ga2QoYSwgYikge1xyXG5cdFx0XHRcdGlmIChhLkFiWzJdID4gYi5BYlsyXSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChhLkFiWzJdIDwgYi5BYlsyXSlcclxuXHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpdGNoICh0aGlzLkJkLlZjKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChrZCk7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuUGMoZmUsIHRoaXMuQmQudGNbV2JdLCBnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIG9lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cclxuXHRcdHRoaXMuTGQgPSBMZDtcclxuXHRcdHRoaXMuQmQgPSBCZDtcclxuXHJcblx0XHRpZiAodGhpcy5CZC53ZS5wZS5sZW5ndGggPiAwKVxyXG5cdFx0XHR0aGlzLndlID0gdGhpcy5CZC53ZS5wZVswXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy53ZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy52ZXJ0ZXggPSBbXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfV07XHJcblx0fVxyXG5cclxuXHRvZS5wcm90b3R5cGUgPSB7XHJcblx0XHRxZTogZnVuY3Rpb24gKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0WGIuQ2UoLTEsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblxyXG5cdFx0XHRpZiAodGhpcy53ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAoIVhiLm9jKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHYwID0gdGhpcy52ZXJ0ZXhbMF07XHJcblx0XHRcdFx0XHR2YXIgdjEgPSB0aGlzLnZlcnRleFsxXTtcclxuXHRcdFx0XHRcdHZhciB2MiA9IHRoaXMudmVydGV4WzJdO1xyXG5cdFx0XHRcdFx0dmFyIHYzID0gdGhpcy52ZXJ0ZXhbM107XHJcblxyXG5cdFx0XHRcdFx0dmFyIEZlID0gW10sIEdlID0gW107XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMud2UueGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgYSA9IGN0eC5pYihYYi5NZCk7XHJcblx0XHRcdFx0XHRcdHZhciBzID0gLU1hdGguc2luKGEpO1xyXG5cdFx0XHRcdFx0XHR2YXIgYyA9IE1hdGguY29zKGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSBzZVswXSAqIGMgKyByZVswXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzFdID0gc2VbMV0gKiBjICsgcmVbMV0gKiBzO1xyXG5cdFx0XHRcdFx0XHRGZVsyXSA9IHNlWzJdICogYyArIHJlWzJdICogcztcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0gLXNlWzBdICogcyArIHJlWzBdICogYztcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAtc2VbMV0gKiBzICsgcmVbMV0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IC1zZVsyXSAqIHMgKyByZVsyXSAqIGM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIHEgPSBYYi5NYztcclxuXHRcdFx0XHRcdFx0dmFyIHoyID0gMi4wICogcVsyXSAqIHFbMl07XHJcblx0XHRcdFx0XHRcdHZhciB4eSA9IDIuMCAqIHFbMF0gKiBxWzFdO1xyXG5cdFx0XHRcdFx0XHR2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHJcblx0XHRcdFx0XHRcdEZlWzBdID0gMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MjtcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSB4eSArIHd6O1xyXG5cdFx0XHRcdFx0XHRGZVsyXSA9IDIuMCAqIHFbMF0gKiBxWzJdIC0gMi4wICogcVszXSAqIHFbMV07XHJcblxyXG5cdFx0XHRcdFx0XHRHZVswXSA9IHh5IC0gd3o7XHJcblx0XHRcdFx0XHRcdEdlWzFdID0gMS4wIC0gMi4wICogcVswXSAqIHFbMF0gLSB6MjtcclxuXHRcdFx0XHRcdFx0R2VbMl0gPSAyLjAgKiBxWzFdICogcVsyXSArIDIuMCAqIHFbM10gKiBxWzBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBIZSA9IFtdLCBJZSA9IFtdLCBKZSA9IFtdLCBLZSA9IFtdO1xyXG5cdFx0XHRcdFx0Y3R4LnUoSGUsIEZlLCAtWGIuTmRbMF0gKiBYYi5QZFswXSk7XHJcblx0XHRcdFx0XHRjdHgudShJZSwgRmUsIFhiLk5kWzBdICogKDEuMCAtIFhiLlBkWzBdKSk7XHJcblx0XHRcdFx0XHRjdHgudShKZSwgR2UsIC1YYi5OZFsxXSAqIFhiLlBkWzFdKTtcclxuXHRcdFx0XHRcdGN0eC51KEtlLCBHZSwgWGIuTmRbMV0gKiAoMS4wIC0gWGIuUGRbMV0pKTtcclxuXHJcblx0XHRcdFx0XHRjdHguYyh2MC4vKiovcG9zaXRpb24sIEhlLCBKZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MC4vKiovcG9zaXRpb24sIHYwLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjEuLyoqL3Bvc2l0aW9uLCBIZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjEuLyoqL3Bvc2l0aW9uLCB2MS4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYyLi8qKi9wb3NpdGlvbiwgSWUsIEtlKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYyLi8qKi9wb3NpdGlvbiwgdjIuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2My4vKiovcG9zaXRpb24sIEllLCBKZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2My4vKiovcG9zaXRpb24sIHYzLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIHJnYiA9IGN0eC52KFhiLmdmLCAyNTUpO1xyXG5cdFx0XHRcdFx0XHR2MC4vKiovY29sb3IgPSB2MS4vKiovY29sb3IgPSB2Mi4vKiovY29sb3IgPSB2My4vKiovY29sb3IgPSBbcmdiWzBdLCByZ2JbMV0sIHJnYlsyXSwgWGIuT2QgKiAyNTVdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIERlID0gTWF0aC5mbG9vcihYYi5RYyAlIHRoaXMud2UuUmMpO1xyXG5cdFx0XHRcdFx0XHR2YXIgRWUgPSBNYXRoLmZsb29yKFhiLlFjIC8gdGhpcy53ZS5SYyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgUGUsIFFlLCBSZSwgU2U7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgV2UgPSB0aGlzLkxkLnRleHR1cmVzUmVtYXBbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHRcdFx0XHRpZiAoV2UpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSBXZS53aWR0aCAvIHRoaXMud2UuUmM7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFZlID0gV2UuaGVpZ2h0IC8gdGhpcy53ZS5TYztcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFBlID0gV2UueCArIERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoV2UueSArIFdlLmhlaWdodCAtIEVlICogVmUpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBTZSA9IFJlIC0gVmU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFVlID0gMS4wIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSAxLjAgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBEZSAqIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBRZSA9IFBlICsgVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFJlID0gKDEuMCAtIEVlICogVmUpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBTZSA9IFJlIC0gVmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHYwLi8qKi90ZXhDb29yZHNbMF0gPSBbUGUsIFNlXTtcclxuXHRcdFx0XHRcdFx0djEuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgUmVdO1xyXG5cdFx0XHRcdFx0XHR2Mi4vKiovdGV4Q29vcmRzWzBdID0gW1FlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYzLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFNlXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAocmVuZGVyQnVmZmVyLmJlZm9yZVF1YWQpIHtcclxuXHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLmJlZm9yZVF1YWQodGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2MCk7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2MSk7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2Mik7XHJcblx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFZlcnRleCh2Myk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG5ldyBjdHguUmVuZGVyQ2FsbCgwLCA2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxhc3RSZW5kZXJDYWxsID0gcmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGw7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGFzdFJlbmRlckNhbGwucmVuZGVyU3R5bGVJbmRleCA9PSB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRsYXN0UmVuZGVyQ2FsbC5udW1JbmRpY2VzICs9IDY7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKGxhc3RSZW5kZXJDYWxsKTtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG5ldyBjdHguUmVuZGVyQ2FsbChcclxuXHRcdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLnN0YXJ0SW5kZXggKyBsYXN0UmVuZGVyQ2FsbC5udW1JbmRpY2VzLFxyXG5cdFx0XHRcdFx0XHRcdFx0NiwgdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIuQ2UoMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dWU6IGZ1bmN0aW9uIChzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpIHtcclxuXHRcdFx0c3dpdGNoICh0aGlzLkJkLlZjKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSAwOyBXYiA8IHRoaXMuQmQudGMubGVuZ3RoOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUodGhpcy5CZC50Y1tXYl0sIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgV2IgPSB0aGlzLkJkLnRjLmxlbmd0aDsgV2ItLSA+IDA7KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucWUodGhpcy5CZC50Y1tXYl0sIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHRYYi5kZXB0aCA9IGN0eC5IKHRlLCBYYi5BYik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGEuZGVwdGggPCBiLmRlcHRoKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA+IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuZm9yRWFjaChmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZShYYiwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhciBsZCA9IGZ1bmN0aW9uIChMZCwgd2UsIHZlKSB7XHJcblx0XHR2YXIgVmIgPSB0aGlzO1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy53ZSA9IHdlO1xyXG5cclxuXHRcdC8vIEViXHJcblxyXG5cdFx0ZnVuY3Rpb24gRWIoKSB7XHJcblx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR0aGlzLkdiID0gMTtcclxuXHRcdFx0dGhpcy5IYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuSWIgPSBudWxsO1xyXG5cdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0dGhpcy5MYiA9IDE7XHJcblxyXG5cdFx0XHRWYi53ZS5NYih0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk9iID0gdGhpcy5HYjtcclxuXHRcdFx0XHR0aGlzLkZiID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdEViLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0SmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk5iKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHRcdFx0XHRWYi53ZS5QYihRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHZhciBSYiA9IFZiLlJiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIFNiID0gUWI7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuemIgPiAwLjAwMDAwMSkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuT2IgKyBRYiAqIHRoaXMuemI7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKFRiID49IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgVWIgPSB0aGlzLnpiIDwgMC4wMDEgPyAwLjAgOiAoMS4wIC0gdGhpcy5PYikgLyB0aGlzLnpiO1xyXG5cdFx0XHRcdFx0XHRTYiAtPSBVYjtcclxuXHRcdFx0XHRcdFx0UmIgKz0gVWI7XHJcblx0XHRcdFx0XHRcdHN5c3RlbVRpbWUgKz0gVWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5IYiAhPSBudWxsICYmIFJiID4gdGhpcy5IYikge1xyXG5cdFx0XHRcdFx0XHRcdFZiLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0gUmI7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gc3lzdGVtVGltZTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChBYiAmJiBRYiA+IDApXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKFZiLkFiLCBBYiwgVmIuQmIsIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKE1jICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguc2xlcnBxKFZiLk1jLCBNYywgVmIucHJldlJvdGF0aW9uLCBTYiAvIFFiKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGZvciB0aGUgZnV0dXJlIHdoZW4gSmIgd291bGQgYmUgZXh0ZXJuYWxcclxuXHRcdFx0XHRcdFx0dGhpcy5MYiA9IHRoaXMuSmI7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5KYjsgKytXYikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChWYi5zYy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5KYiA9PSAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IFdiIC8gKHRoaXMuSmIgLSAxKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFhiID0gVmIuc2MucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0VmIudGMudW5zaGlmdChYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChXYiA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWWIoKTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5aYigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRYYi5JZChTYik7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5PYiA9IDAuMDtcclxuXHRcdFx0XHRcdFx0VGIgLT0gMS4wO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuSWIgIT0gbnVsbCAmJiArK3RoaXMuRmIgPj0gdGhpcy5JYikge1xyXG5cdFx0XHRcdFx0XHRcdFZiLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLk9iID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFJiICs9IFNiO1xyXG5cdFx0XHRcdFZiLlJiID0gUmI7XHJcblxyXG5cdFx0XHRcdGlmIChBYilcclxuXHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBBYik7XHJcblxyXG5cdFx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRcdGN0eC5VKFZiLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBpYztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFjXHJcblxyXG5cdFx0ZnVuY3Rpb24gYWMoKSB7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0dGhpcy5MYiA9IDE7XHJcblxyXG5cdFx0XHRWYi53ZS5NYih0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLmJjID0gdGhpcy5HYjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFjLnByb3RvdHlwZSA9IHtcclxuXHRcdFx0SmQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLk5iKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHRcdFx0XHRWYi53ZS5QYihRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHZhciBjYyA9IFZiLlJiO1xyXG5cdFx0XHRcdHZhciBkYyA9IGNjICsgUWI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVCZWZvcmVGcmFtZSA9IExkLlJiO1xyXG5cdFx0XHRcdHZhciBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSA9IHN5c3RlbVRpbWVCZWZvcmVGcmFtZSArIFFiO1xyXG5cdFx0XHRcdHZhciBlYyA9IEFiID8gY3R4Lk8oY3R4LmgoQWIsIFZiLkJiKSkgOiAwO1xyXG5cdFx0XHRcdHZhciBpYyA9IDA7XHJcblxyXG5cdFx0XHRcdGlmIChlYyA+IDAuMDAwMDAxKSB7XHJcblx0XHRcdFx0XHR2YXIgZmMgPSBlYyAvIHRoaXMucmQ7XHJcblx0XHRcdFx0XHR2YXIgVGIgPSB0aGlzLmJjICsgZmM7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGhjID0gZmMgPCAwLjAwMSA/XHJcblx0XHRcdFx0XHRcdDEuMCAtIHRoaXMuYmMgOiAoMS4wIC0gdGhpcy5iYykgLyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgamMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPiAxLjApIHtcclxuXHRcdFx0XHRcdFx0dmFyIGtjID0gY2MgKyBoYyAqIFFiO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5hYihqYywgVmIuQmIsIEFiLCBoYyk7XHJcblxyXG5cdFx0XHRcdFx0XHRWYi5SYiA9IGtjO1xyXG5cdFx0XHRcdFx0XHRjdHguVChWYi5BYiwgamMpO1xyXG5cdFx0XHRcdFx0XHRMZC5SYiA9IGN0eC5YKHN5c3RlbVRpbWVCZWZvcmVGcmFtZSwgc3lzdGVtVGltZUFmdGVyRnJhbWUsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIGZvciB0aGUgZnV0dXJlIHdoZW4gSmIgd291bGQgYmUgZXh0ZXJuYWxcclxuXHRcdFx0XHRcdFx0dGhpcy5MYiA9IHRoaXMuSmI7XHJcblxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5KYjsgKytXYikge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChWYi5zYy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5KYiA9PSAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IDA7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5LYiA9IFdiIC8gKHRoaXMuSmIgLSAxKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIFhiID0gVmIuc2MucG9wKCk7XHJcblx0XHRcdFx0XHRcdFx0VmIudGMudW5zaGlmdChYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChXYiA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0WGIuWWIoKTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5aYigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRYYi5JZChRYiAqICgxLjAgLSBoYykpO1xyXG5cdFx0XHRcdFx0XHRcdCsraWM7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGhjICs9IDEuMCAvIGZjO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5iYyA9IFRiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0VmIuUmIgPSBkYztcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWNcclxuXHJcblx0XHRmdW5jdGlvbiBtYygpIHtcclxuXHRcdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0XHR0aGlzLlBkID0gW107XHJcblx0XHRcdHRoaXMuTmQgPSBbXTtcclxuXHRcdFx0dGhpcy5nZiA9IFtdO1xyXG5cdFx0XHR0aGlzLktjID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0bWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRuYzogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMub2MgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cdFx0XHRcdFx0cGMuQmQuSmQodGhpcy5BYiwgbnVsbCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHBjLkFkLnNkKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5kaXNhY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFliOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0VmIud2UuZmQoVmIsIHRoaXMpOyAvLyBJTVBMXHJcblx0XHRcdFx0dGhpcy5uYygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WmI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5nZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRJZDogZnVuY3Rpb24gKFFiKSB7XHJcblx0XHRcdFx0VmIud2UucWMoUWIsIFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0XHR0aGlzLnJjKFFiKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHBjOiBmdW5jdGlvbiAoamUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5LY1tqZV0uQmQ7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyYzogZnVuY3Rpb24gKFFiKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLklkKFFiLCB0aGlzLkFiLCBudWxsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1YzogZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0XHRcdHRoaXMuS2MucHVzaCh7XHJcblx0XHRcdFx0XHRCZDogbmV3IGxkKExkLCBtZCwgdmUpLFxyXG5cdFx0XHRcdFx0QWQ6IG5kXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR2YzogZnVuY3Rpb24gKGZlLCB4YywgZ2UpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHhjID09IHBjLkFkLnhjKVxyXG5cdFx0XHRcdFx0XHRwYy5CZC5IZChmZSwgZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdENlOiBmdW5jdGlvbiAoeGMsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLnVlKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0d2M6IGZ1bmN0aW9uIChmZSkge1xyXG5cdFx0XHRcdHRoaXMub2MgPSB0cnVlO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpIHtcclxuXHRcdFx0XHRcdFx0cGMuQmQuYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0cGMuQmQuSWQoMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0eWM6IGZ1bmN0aW9uIChHZCkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dGhpcy5LY1tpXS5CZC5FZChHZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gemNcclxuXHJcblx0XHRmdW5jdGlvbiB6YygpIHtcclxuXHRcdH1cclxuXHJcblx0XHR6Yy5wcm90b3R5cGUuQWMgPSBmdW5jdGlvbiAoWGIpIHtcclxuXHRcdFx0cmV0dXJuIFZiLndlLkNjKFZiLCBYYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdH1cclxuXHJcblx0XHQvLyBsZCBBZFxyXG5cclxuXHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdHRoaXMuQmIgPSBbXTtcclxuXHRcdHRoaXMuTWMgPSBbXTtcclxuXHRcdHRoaXMucHJldlJvdGF0aW9uID0gW107XHJcblx0XHR0aGlzLnRjID0gW107XHJcblx0XHR0aGlzLnNjID0gW107XHJcblx0XHR0aGlzLldjID0gbmV3IHpjKCk7XHJcblx0XHR0aGlzLmNvbnN0cnVjdCA9IG5ldyB2ZSh0aGlzLkxkLCB0aGlzKTtcclxuXHRcdHRoaXMuWWMgPSBbXTtcclxuXHRcdHRoaXMuYWQgPSBbXTtcclxuXHJcblx0XHR0aGlzLmRkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IEViKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5lZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy52ZCA9IG5ldyBhYygpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2UudWQodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5qZDsgKytXYikge1xyXG5cdFx0XHR2YXIgWGIgPSBuZXcgbWMoKTtcclxuXHJcblx0XHRcdGZvciAodmFyIGlkID0gMDsgaWQgPCB0aGlzLlljLmxlbmd0aDsgKytpZCkge1xyXG5cdFx0XHRcdHZhciBoZCA9IHRoaXMuWWNbaWRdO1xyXG5cdFx0XHRcdFhiLnVjKGhkLkRiLCBoZC5BZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2MucHVzaChYYik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5OYiA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiID8gQWIgOiBbMCwgMCwgMF0pO1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMgPyBNYyA6IFswLCAwLCAwLCAxXSk7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHJcblx0XHRcdHRoaXMuUmIgPSAwLjA7XHJcblx0XHRcdHRoaXMud2QgPSAwLjA7XHJcblx0XHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnBhdXNlZF8gPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5KZCA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdHRoaXMuTmIoQWIsIE1jKTtcclxuXHJcblx0XHR0aGlzLnNjLnB1c2guYXBwbHkodGhpcy5zYywgdGhpcy50Yyk7XHJcblx0XHR0aGlzLnRjLmxlbmd0aCA9IDA7XHJcblxyXG5cdFx0dGhpcy52ZC5KZCgpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLklkID0gZnVuY3Rpb24gKFFiLCBBYiwgTWMpIHtcclxuXHJcblx0XHRpZiAodGhpcy5wYXVzZWRfKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLlRkKEFiLCBNYyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLndkID0gdGhpcy5SYjtcclxuXHJcblx0XHRpZiAoQWIpIHtcclxuXHRcdFx0Y3R4LlQodGhpcy5CYiwgdGhpcy5BYik7XHJcblx0XHRcdGlmIChRYiA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdHZhciBzaGlmdCA9IFtdO1xyXG5cdFx0XHRcdGN0eC5nKHNoaWZ0LCBBYiwgdGhpcy5CYik7XHJcblx0XHRcdFx0Y3R4LlQodGhpcy5hZCwgc2hpZnQpO1xyXG5cdFx0XHRcdGN0eC53KHRoaXMuYWQsIHRoaXMuYWQsIFFiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRjdHguVyh0aGlzLmFkLCAwLCAwLCAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChNYylcclxuXHRcdHtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpYztcclxuXHJcblx0XHRpZiAodGhpcy5aYyAmJiAhdGhpcy5nZW5lcmF0b3JzUGF1c2VkXykge1xyXG5cdFx0XHRpYyA9IHRoaXMudmQuSWQoUWIsIEFiLCBNYyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdGN0eC5UKHRoaXMuQWIsIEFiKTtcclxuXHJcblx0XHRcdGlmIChNYylcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyk7XHJcblxyXG5cdFx0XHRpYyA9IDA7XHJcblx0XHRcdHRoaXMuUmIgKz0gUWI7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICh2YXIgV2IgPSBpYzsgV2IgPCB0aGlzLnRjLmxlbmd0aDspIHtcclxuXHRcdFx0dmFyIFhiID0gdGhpcy50Y1tXYl07XHJcblxyXG5cdFx0XHRpZiAoIVhiLm9jKSB7XHJcblx0XHRcdFx0WGIuSWQoUWIpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5XYy5BYyh0aGlzLnRjW1diXSkpIHtcclxuXHRcdFx0XHRcdFhiLndjKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMueGQoV2IpKVxyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0WGIucmMoUWIpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0KytXYjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRsZC5wcm90b3R5cGUueGQgPSBmdW5jdGlvbiAoamUpIHtcclxuXHRcdHZhciBYYiA9IHRoaXMudGNbamVdO1xyXG5cclxuXHRcdHZhciByZWFkeSA9IHRydWU7XHJcblxyXG5cdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IFhiLktjLmxlbmd0aDsgKytpZCkge1xyXG5cdFx0XHR2YXIgQmQgPSBYYi5LY1tpZF0uQmQ7XHJcblxyXG5cdFx0XHRpZiAoQmQuYWN0aXZhdGVkKCkgfHwgQmQudGMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHJlYWR5ID0gZmFsc2U7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocmVhZHkpIHtcclxuXHRcdFx0dGhpcy5zYy5wdXNoKHRoaXMudGNbamVdKTtcclxuXHRcdFx0dGhpcy50Yy5zcGxpY2UoamUsIDEpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSGQgPSBmdW5jdGlvbiAoZmUsIGdlKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC5IZChmZSwgZ2UpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVlID0gZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0dGhpcy5jb25zdHJ1Y3QudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5UZCA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChNYykge1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS51YyA9IGZ1bmN0aW9uIChtZCwgbmQpIHtcclxuXHRcdHRoaXMuWWMucHVzaCh7IERiOiBtZCwgQWQ6IG5kIH0pO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3VucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLnBhdXNlZF8gPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovcGF1c2VHZW5lcmF0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZW5lcmF0b3JzUGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZW5lcmF0b3JzUGF1c2VkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2VuZXJhdG9yc1BhdXNlZF87XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLlpjID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5kaXNhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5aYztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovZ2V0TnVtUGFydGljbGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGMubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0dmFyIGtlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIENiID0gdGhpcztcclxuXHJcblx0XHR0aGlzLl9pbml0ID0gZnVuY3Rpb24gKHdlLCBBYiwgTWMsIHZlLCBvcHRpb25zKSB7XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsID0gd2U7XHJcblxyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuTWMgPSBbXTtcclxuXHJcblx0XHRcdC8vIGtlIEFkXHJcblxyXG5cdFx0XHR0aGlzLm9kID0gW107XHJcblxyXG5cdFx0XHR0aGlzLnBkID0gZnVuY3Rpb24gKG1kKSB7XHJcblx0XHRcdFx0dmFyIEJkID0gbmV3IGxkKHRoaXMsIG1kLCB2ZSk7XHJcblx0XHRcdFx0QmQuTmIodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdFx0dGhpc1tcIl9cIi5jb25jYXQobWQubmFtZSldID0gQmQ7XHJcblx0XHRcdFx0dGhpcy5vZC5wdXNoKEJkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYiA9IGZ1bmN0aW9uIChBYiwgTWMpIHtcclxuXHRcdFx0XHR0aGlzLkNkID0gMC4wO1xyXG5cdFx0XHRcdHRoaXMuUmIgPSAwLjA7XHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdFx0Y3R4LlUodGhpcy5NYywgTWMgPyBNYyA6IFswLCAwLCAwLCAxXSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuTmIoQWIsIE1jKTtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwucWQodGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdFx0dGhpcy4vKiovcGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAob3B0aW9ucy5wYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVGaXhlZCh0aGlzLlVkLCBBYiwgTWMsIHRoaXMucHJlc2ltRnJhbWVUaW1lKTtcclxuXHRcdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXN0YXJ0ID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cclxuXHRcdHRoaXMuTmIoLyoqL3Bvc2l0aW9uID8gLyoqL3Bvc2l0aW9uIDogdGhpcy5BYiwgLyoqL3JvdGF0aW9uID8gLyoqL3JvdGF0aW9uIDogdGhpcy5NYyk7XHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkpkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCh0aGlzLlVkLCB0aGlzLkFiLCB0aGlzLk1jLCB0aGlzLnByZXNpbUZyYW1lVGltZSk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnplcm9VcGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgwLCB0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdXBkYXRlID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdGlmICh0aGlzLkRkID4gMC4wKVxyXG5cdFx0XHR0aGlzLnVwZGF0ZUZpeGVkKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIHRoaXMuRGQpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnVwZGF0ZUZsZXgoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUudXBkYXRlRml4ZWQgPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbiwgLyoqL2ZyYW1lVGltZSkge1xyXG5cdFx0dmFyIHVwZGF0ZWRUaW1lID0gMC4wO1xyXG5cdFx0dmFyIGhjID0gW107XHJcblx0XHRjdHguVChoYywgdGhpcy5BYik7XHJcblx0XHR2YXIgZnJhbWVSb3RhdGlvbiA9IFtdO1xyXG5cdFx0Y3R4LlUoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblxyXG5cdFx0aWYgKC8qKi9wb3NpdGlvbiAmJiBjdHguZXF1YWx2M18oLyoqL3Bvc2l0aW9uLCB0aGlzLkFiKSlcclxuXHRcdFx0LyoqL3Bvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHRpZiAoLyoqL3JvdGF0aW9uICYmIGN0eC5lcXVhbHFfKC8qKi9yb3RhdGlvbiwgdGhpcy5NYykpXHJcblx0XHRcdC8qKi9yb3RhdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0d2hpbGUgKCgvKiovZHQgLSB1cGRhdGVkVGltZSkgKyB0aGlzLkNkID49IC8qKi9mcmFtZVRpbWUpIHtcclxuXHRcdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdFx0Y3R4LmFiKGhjLCB0aGlzLkFiLCAvKiovcG9zaXRpb24sIHVwZGF0ZWRUaW1lIC8gLyoqL2R0KTtcclxuXHJcblx0XHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdFx0Y3R4LnNsZXJwcShmcmFtZVJvdGF0aW9uLCB0aGlzLk1jLCAvKiovcm90YXRpb24sIHVwZGF0ZWRUaW1lIC8gLyoqL2R0KTtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV0uSWQoLyoqL2ZyYW1lVGltZSwgaGMsIGZyYW1lUm90YXRpb24pO1xyXG5cclxuXHRcdFx0XHR0aGlzLlJiID0gY2M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZWRUaW1lICs9IC8qKi9mcmFtZVRpbWUgLSB0aGlzLkNkO1xyXG5cdFx0XHR0aGlzLkNkID0gMC4wO1xyXG5cdFx0XHR0aGlzLlJiID0gY2MgKyAvKiovZnJhbWVUaW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHR0aGlzLkNkICs9IC8qKi9kdCAtIHVwZGF0ZWRUaW1lO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZsZXggPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUmIgPSBjYyArIC8qKi9kdDtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3Jlc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uVGQodGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3NldFByb3BlcnR5SW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgvKiovbmFtZSwgLyoqL3ZhbHVlKSB7XHJcblx0XHR2YXIgcHJvcE5hbWUgPSBcIl9cIi5jb25jYXQoLyoqL25hbWUpO1xyXG5cclxuXHRcdGlmICgvKiovdmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRpZiAoLyoqL3ZhbHVlLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHRjdHguUyh0aGlzLm9kW2ldW3Byb3BOYW1lXSwgLyoqL3ZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHRjdHguVCh0aGlzLm9kW2ldW3Byb3BOYW1lXSwgLyoqL3ZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldW3Byb3BOYW1lXSA9IC8qKi92YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9wYXVzZUFsbEVtaXR0ZXJzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovdW5wYXVzZUFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uLyoqL3VucGF1c2UoKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuemVyb1VwZGF0ZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLl9wcmVzaW1OZWVkZWQpIHtcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCh0aGlzLlVkLCB0aGlzLkFiLCB0aGlzLk1jLCB0aGlzLnByZXNpbUZyYW1lVGltZSk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVBbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0ucGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0uZ2VuZXJhdG9yc1BhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBudW1QYXJ0aWNsZXMgPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRudW1QYXJ0aWNsZXMgKz0gdGhpcy5vZFtpXS5nZXROdW1QYXJ0aWNsZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVtUGFydGljbGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdHZhciBsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgcmVuZGVyQnVmZmVyLCBvcHRpb25zKSB7XHJcblx0XHRcdGxlLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG9lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZXNSZW1hcCA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgdmVyRGlzcDtcclxuXHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy4vKiovbW9kZWwuWGU7ICsrV2IpIHtcclxuXHRcdFx0XHRcdHZlckRpc3AgPSBXYiAqIDQ7XHJcblx0XHRcdFx0XHRpbmRpY2VzLnB1c2godmVyRGlzcCArIDAsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlciA9IHJlbmRlckJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuaW5pdGlhbGl6ZSh0aGlzLi8qKi9tb2RlbC5YZSAqIDQsIFsyXSwgaW5kaWNlcywgdGhpcy4vKiovbW9kZWwuWGUpO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX251bUluZGljZXMgPSAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdGxlLnByb3RvdHlwZS4vKiovZmlsbEdlb21ldHJ5QnVmZmVycyA9IGZ1bmN0aW9uICgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpcikge1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuY2xlYW51cCgpO1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vZC5mb3JFYWNoKGZ1bmN0aW9uIChCZCkge1xyXG5cdFx0XHRCZC51ZSgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpciwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpO1xyXG5cdH1cclxuXHJcblx0dmFyIG1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCBvcHRpb25zKSB7XHJcblx0XHRcdG1lLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG5lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMubWF0ZXJpYWxzID0gW107XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLm1hdGVyaWFscy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goWydzb3VyY2Utb3ZlcicsICdsaWdodGVyJywgJ211bHRpcGx5J11bdmFsdWVdKTtcclxuXHRcdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0XHR0aGlzLi8qKi90ZXh0dXJlRGVzY3MgPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRtZS5wcm90b3R5cGUuLyoqL2RyYXcgPSBmdW5jdGlvbiAoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkhkKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlV0dMSW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbGUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZUNhbnZhczJESW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbWUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cdHRoaXMudGV4dHVyZXMgPSBbJ2Z4L2ZpcmV3b3Jrcy9zcGFya3M1eDNfbG9uZy5wbmcnLCdmeC9maXJld29ya3Mvc3RhcnM0eDFfd2hpdGUucG5nJ107XHJcblx0dGhpcy5tYXRlcmlhbHMgPSBbMSwwXTtcclxuXHR0aGlzLnJlbmRlclN0eWxlcyA9IFt7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlswXX0se21hdGVyaWFsSW5kZXg6MSx0ZXh0dXJlSW5kaWNlczpbMV19XTtcclxuXHR0aGlzLlhlID0gOTAzMDA7XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfU3RyaXBlX2NoaWxkKCkge1xyXG5cclxuXHRcdHZhciBfMSA9IFtdLCBfNSA9IFtdLCBfNyA9IFtdLCBfOSA9IFtdLCBfMTA9W10sIF8xMGZzPVtdLCBfMTB2cz1bXSwgXzEwcnc9W10sIF8xMHJ3bj1bXSwgXzEwcndsLCBfMTB2PVtdLCBfMTBwPVtdLCBfMTBkdGwsIF8xMGR0cCwgXzEwZGYsIF8xMGZzZD1bXSwgXzEyPVtdLCBfMTJpPVtdLCBfMTMsIF8xMSwgXzE0LCBfMTUsIF8xNWkwLCBfMTVzMCA9IFtdLCBfMTYsIF8xNywgXzE3aTAsIF8xN3MwID0gW10sIF8xOCwgXzE4aTAsIF8xOHMwID0gW10sIF8xOTtcclxuXHRcdHRoaXMucGUgPSBbe3hlOjEsUmM6NSxTYzozLHJlbmRlclN0eWxlSW5kZXg6MH1dO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJTdHJpcGVfY2hpbGRcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuX1JvdGF0aW9uID0gWzAsMCwwLDFdO1xyXG5cdFx0XHRCZC5fVGV4dHVyZSA9IDA7XHJcblx0XHRcdEJkLmVkKCk7XHJcblx0XHRcdEJkLl8xNSA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMC40ODE3NywwLjkzNDc4MiwwLjk4MjcwOCwwLjk2ODE5LDAuOTIzNDU3LDAuODYwOTg3LDAuNzg3MjExLDAuNzA2MDA3LDAuNjE5OTY0LDAuNTMwOTQ0LDAuNDQwMzgxLDAuMzQ5NDMxLDAuMjU5MDc2LDAuMTcwMTg4LDAuMDgzNTcxNiwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTcgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzEsMSwxXSxcclxuXHRcdFx0XHRcdFsxLDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8xOCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbNSw0Ljk5ODcyLDQuOTk0NTgsNC45ODY3MSw0Ljk3NDAyLDQuOTU1MDgsNC45Mjc5Niw0Ljg5MDAxLDQuODM3NDksNC43NjQ4NSw0LjY2MzUxLDQuNTE5Miw0LjMwNTY1LDMuOTY2MTYsMy4zMzQ0LDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gMzAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnJkID0gMjtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0dmQucmQgPSAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuTWM9W107XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdGN0eC5XKF8xLCAwLCAwLCAwKTtcclxuXHRcdFx0WGIuXzIgPSBbXTtcclxuXHRcdFx0Y3R4LmMoWGIuXzIsIEJkLkFiLCBfMSk7XHJcblx0XHRcdFhiLl8zID0gMDtcclxuXHRcdFx0WGIuXzQgPSBbXTtcclxuXHRcdFx0Y3R4LlUoWGIuXzQsIEJkLl9Sb3RhdGlvbik7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzUsIDEsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fNiA9IFtdO1xyXG5cdFx0XHRjdHguVChYYi5fNiwgXzUpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF83LCAxMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl84ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl84LCBfNyk7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5NYz1bXTtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzEsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fMiA9IFtdO1xyXG5cdFx0XHRjdHguYyhYYi5fMiwgQmQuQWIsIF8xKTtcclxuXHRcdFx0WGIuXzMgPSAwO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHguVShYYi5fNCwgQmQuX1JvdGF0aW9uKTtcclxuXHRcdFx0Y3R4LnJhbmR2M2dlbihfNSwgMSwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl82ID0gW107XHJcblx0XHRcdGN0eC5UKFhiLl82LCBfNSk7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzcsIDEwLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzggPSBbXTtcclxuXHRcdFx0Y3R4LlQoWGIuXzgsIF83KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fICs9IFFiO1xyXG5cdFx0XHRjdHguVyhfOSwgMCwgNTAsIDApO1xyXG5cdFx0XHRjdHguVChfMTBmcywgXzkpO1xyXG5cdFx0XHRjdHguVChfMTB2cywgWzAsMCwwXSk7XHJcblx0XHRcdF8xMGR0bCA9IFFiO1xyXG5cdFx0XHRjdHguVChfMTB2LCBYYi5fOCk7XHJcblx0XHRcdGN0eC5UKF8xMHAsIFhiLl8yKTtcclxuXHRcdFx0d2hpbGUgKF8xMGR0bCA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdF8xMGR0cCA9IF8xMGR0bDtcclxuXHRcdFx0XHRjdHguVChfMTBmc2QsIF8xMGZzKTtcclxuXHRcdFx0XHRjdHguZyhfMTBydywgXzEwdnMsIF8xMHYpO1xyXG5cdFx0XHRcdF8xMHJ3bCA9IGN0eC5QKF8xMHJ3KTtcclxuXHRcdFx0XHRpZiAoXzEwcndsID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0XHRfMTByd2wgPSBNYXRoLnNxcnQoXzEwcndsKTtcclxuXHRcdFx0XHRcdGN0eC53KF8xMHJ3biwgXzEwcncsIF8xMHJ3bCk7XHJcblx0XHRcdFx0XHRfMTBkZiA9IDAuMDEgKiAxICogXzEwcndsO1xyXG5cdFx0XHRcdFx0aWYgKF8xMGRmICogXzEwZHRwID4gMC4yKVxyXG5cdFx0XHRcdFx0XHRfMTBkdHAgPSAwLjIgLyBfMTBkZjtcclxuXHRcdFx0XHRcdGN0eC5jKF8xMGZzZCwgXzEwZnNkLCBjdHgudihfMTByd24sIF8xMHJ3bCAqIF8xMGRmKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN0eC5jKF8xMHYsIF8xMHYsIGN0eC52KF8xMGZzZCwgXzEwZHRwKSk7XHJcblx0XHRcdFx0Y3R4LmMoXzEwcCwgXzEwcCwgY3R4LnYoXzEwdiwgXzEwZHRwKSk7XHJcblx0XHRcdFx0XzEwZHRsIC09IF8xMGR0cDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjdHguVChYYi5fMiwgXzEwcCk7XHJcblx0XHRcdGN0eC5UKFhiLl84LCBfMTB2KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdFx0Y3R4LlEoXzEyaSwgWGIuXzYpO1xyXG5cdFx0XHRjdHgucWIoXzEyLCBfMTJpLCBYYi5fMyk7XHJcblx0XHRcdF8xMyA9IDc7XHJcblx0XHRcdF8xMSA9IDE7XHJcblx0XHRcdF8xNCA9IChYYi5fIC8gXzExKTtcclxuXHRcdFx0XzE1aTA9KF8xNDwwPzA6KF8xND4xPzE6XzE0KSk7XHJcblx0XHRcdGN0eC5WKF8xNXMwLDAsKF8xNWkwLTApKjE1KTtcclxuXHRcdFx0XzE1ID0gRGIubmIoQmQuXzE1WzBdW18xNXMwWzBdXSxfMTVzMFsxXSk7XHJcblx0XHRcdF8xNiA9IChfMTMgKiBfMTUpO1xyXG5cdFx0XHRfMTdpMD0oXzE0PDA/MDooXzE0PjE/MTpfMTQpKTtcclxuXHRcdFx0XzE3aTA8MC43P2N0eC5WKF8xN3MwLDAsKF8xN2kwLTApKjEuNDI4NTcpOmN0eC5WKF8xN3MwLDEsKF8xN2kwLTAuNykqMy4zMzMzMyk7XHJcblx0XHRcdF8xNyA9IERiLm5iKEJkLl8xN1swXVtfMTdzMFswXV0sXzE3czBbMV0pO1xyXG5cdFx0XHRfMThpMD0oXzE0PDA/MDooXzE0PjE/KDArKChfMTQtMCklMSkpOl8xNCkpO1xyXG5cdFx0XHRjdHguVihfMThzMCwwLChfMThpMC0wKSoxNSk7XHJcblx0XHRcdF8xOCA9IERiLm5iKEJkLl8xOFswXVtfMThzMFswXV0sXzE4czBbMV0pO1xyXG5cdFx0XHRfMTkgPSAoKEJkLl9UZXh0dXJlICogNSkgKyBfMTgpO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRjdHguVShYYi5NYywgXzEyKTtcclxuXHRcdFx0Y3R4LlYoWGIuTmQsXzE2LF8xNik7XHJcblx0XHRcdGN0eC5UKFhiLmdmLFsxLDEsMV0pO1xyXG5cdFx0XHRYYi5PZCA9IF8xNztcclxuXHRcdFx0WGIuUWMgPSAoXzE5IDwgMCkgPyAwIDogKChfMTkgPj0gMTUpID8gMTQgOiBfMTkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF8xMSA9IDE7XHJcblx0XHRcdGlmIChYYi5fID4gXzExKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBFbWl0dGVyX1N0cmlwZV9wYXJlbnQoKSB7XHJcblxyXG5cdFx0dmFyIF8sIF9pMCwgX3MwID0gW10sIF8yID0gW10sIF80LCBfNiA9IFtdLCBfOD1bXSwgXzh4PVtdLCBfOHk9W10sIF84ej1bXSwgXzksIF85aTAsIF85czAgPSBbXSwgXzEwID0gW10sIF8xMT1bXSwgXzExZnM9W10sIF8xMXZzPVtdLCBfMTFydz1bXSwgXzExcnduPVtdLCBfMTFyd2wsIF8xMXY9W10sIF8xMXA9W10sIF8xMWR0bCwgXzExZHRwLCBfMTFkZiwgXzExZnNkPVtdLCBfMTI7XHJcblx0XHR0aGlzLnBlID0gW107XHJcblx0XHR0aGlzLm5hbWUgPSBcIlN0cmlwZV9wYXJlbnRcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuX1RleHR1cmUgPSAwO1xyXG5cdFx0XHRCZC5fID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLDAsMF0sXHJcblx0XHRcdFx0XHRbNSw1LDVdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5kZCgpO1xyXG5cdFx0XHRCZC51YyhuZXcgRW1pdHRlcl9TdHJpcGVfY2hpbGQoKSwgeyB4YzogMSwgc2Q6IGZhbHNlIH0pO1xyXG5cdFx0XHRCZC5fOSA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwwLjIwMTQ4NSwwLjU3ODEwNywxLjAxMjYyLDEuNDA1NzYsMS43MDUyOSwxLjg5NTY5LDEuOTc5OTEsMS45Njc3NCwxLjg3MDQyLDEuNjk4NTIsMS40NjEyOSwxLjE2NjY2LDAuODIxMjgxLDAuNDMwODA2LDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNTtcclxuXHRcdFx0dmQuR2IgPSAwLjk0O1xyXG5cdFx0XHR2ZC5KYiA9IDUwO1xyXG5cdFx0XHR2ZC5JYiA9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0X2kwPShCZC5SYjwwPzA6KEJkLlJiPjE/MTpCZC5SYikpO1xyXG5cdFx0XHRfaTA8MC4xNDc0MT9jdHguVihfczAsMCwoX2kwLTApKjYuNzgzNzgpOmN0eC5WKF9zMCwxLChfaTAtMC4xNDc0MSkqMS4xNzI5KTtcclxuXHRcdFx0XyA9IERiLm5iKEJkLl9bMF1bX3MwWzBdXSxfczBbMV0pO1xyXG5cdFx0XHR2ZC56YiA9IF87XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzIsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fMyA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzMsIF8yLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl8zLCBCZC5BYiwgWGIuXzMpO1xyXG5cdFx0XHRfNCA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoNSAtIDApO1xyXG5cdFx0XHRYYi5fNSA9IF80O1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF82LCAxMDAwLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzcgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl83LCBfNiwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fNywgQmQuYWQsIFhiLl83KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8zKTtcclxuXHRcdFx0Y3R4LlEoXzh6LCBbMCwwLDFdKTtcclxuXHRcdFx0Y3R4LkkoXzh4LCBYYi5fNywgXzh6KTtcclxuXHRcdFx0Y3R4LlEoXzh4LCBfOHgpO1xyXG5cdFx0XHRjdHguSShfOHksIF84eiwgXzh4KTtcclxuXHRcdFx0Y3R4LnBiKF84LCBfOHgsIF84eSwgXzh6KTtcclxuXHRcdFx0WGIucGMoMCkuX1JvdGF0aW9uID0gXzg7XHJcblx0XHRcdFhiLnBjKDApLl9UZXh0dXJlID0gQmQuX1RleHR1cmU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzIsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fMyA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzMsIF8yLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl8zLCBCZC5BYiwgWGIuXzMpO1xyXG5cdFx0XHRfNCA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoNSAtIDApO1xyXG5cdFx0XHRYYi5fNSA9IF80O1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF82LCAxMDAwLCBCZC5MZC5yYW5kKTtcclxuXHRcdFx0WGIuXzcgPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl83LCBfNiwgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fNywgQmQuYWQsIFhiLl83KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8zKTtcclxuXHRcdFx0Y3R4LlEoXzh6LCBbMCwwLDFdKTtcclxuXHRcdFx0Y3R4LkkoXzh4LCBYYi5fNywgXzh6KTtcclxuXHRcdFx0Y3R4LlEoXzh4LCBfOHgpO1xyXG5cdFx0XHRjdHguSShfOHksIF84eiwgXzh4KTtcclxuXHRcdFx0Y3R4LnBiKF84LCBfOHgsIF84eSwgXzh6KTtcclxuXHRcdFx0WGIucGMoMCkuX1JvdGF0aW9uID0gXzg7XHJcblx0XHRcdFhiLnBjKDApLl9UZXh0dXJlID0gQmQuX1RleHR1cmU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5xYyA9IGZ1bmN0aW9uKFFiLCBCZCwgWGIpIHtcclxuXHRcdFx0WGIuXzEgKz0gUWI7XHJcblx0XHRcdF85aTA9KEJkLlJiPDA/MDooQmQuUmI+MT8xOkJkLlJiKSk7XHJcblx0XHRcdGN0eC5WKF85czAsMCwoXzlpMC0wKSoxNSk7XHJcblx0XHRcdF85ID0gRGIubmIoQmQuXzlbMF1bXzlzMFswXV0sXzlzMFsxXSk7XHJcblx0XHRcdGN0eC5XKF8xMCwgMCwgMTAwLCAwKTtcclxuXHRcdFx0Y3R4LlQoXzExZnMsIF8xMCk7XHJcblx0XHRcdGN0eC5UKF8xMXZzLCBbMCwwLDBdKTtcclxuXHRcdFx0XzExZHRsID0gUWI7XHJcblx0XHRcdGN0eC5UKF8xMXYsIFhiLl83KTtcclxuXHRcdFx0Y3R4LlQoXzExcCwgWGIuXzMpO1xyXG5cdFx0XHR3aGlsZSAoXzExZHRsID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0XzExZHRwID0gXzExZHRsO1xyXG5cdFx0XHRcdGN0eC5UKF8xMWZzZCwgXzExZnMpO1xyXG5cdFx0XHRcdGN0eC5nKF8xMXJ3LCBfMTF2cywgXzExdik7XHJcblx0XHRcdFx0XzExcndsID0gY3R4LlAoXzExcncpO1xyXG5cdFx0XHRcdGlmIChfMTFyd2wgPiAwLjAwMDEpIHtcclxuXHRcdFx0XHRcdF8xMXJ3bCA9IE1hdGguc3FydChfMTFyd2wpO1xyXG5cdFx0XHRcdFx0Y3R4LncoXzExcnduLCBfMTFydywgXzExcndsKTtcclxuXHRcdFx0XHRcdF8xMWRmID0gMC4wMSAqIF85ICogXzExcndsO1xyXG5cdFx0XHRcdFx0aWYgKF8xMWRmICogXzExZHRwID4gMC4yKVxyXG5cdFx0XHRcdFx0XHRfMTFkdHAgPSAwLjIgLyBfMTFkZjtcclxuXHRcdFx0XHRcdGN0eC5jKF8xMWZzZCwgXzExZnNkLCBjdHgudihfMTFyd24sIF8xMXJ3bCAqIF8xMWRmKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGN0eC5jKF8xMXYsIF8xMXYsIGN0eC52KF8xMWZzZCwgXzExZHRwKSk7XHJcblx0XHRcdFx0Y3R4LmMoXzExcCwgXzExcCwgY3R4LnYoXzExdiwgXzExZHRwKSk7XHJcblx0XHRcdFx0XzExZHRsIC09IF8xMWR0cDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjdHguVChYYi5fMywgXzExcCk7XHJcblx0XHRcdGN0eC5UKFhiLl83LCBfMTF2KTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8zKTtcclxuXHRcdFx0Y3R4LlEoXzh6LCBbMCwwLDFdKTtcclxuXHRcdFx0Y3R4LkkoXzh4LCBYYi5fNywgXzh6KTtcclxuXHRcdFx0Y3R4LlEoXzh4LCBfOHgpO1xyXG5cdFx0XHRjdHguSShfOHksIF84eiwgXzh4KTtcclxuXHRcdFx0Y3R4LnBiKF84LCBfOHgsIF84eSwgXzh6KTtcclxuXHRcdFx0WGIucGMoMCkuX1JvdGF0aW9uID0gXzg7XHJcblx0XHRcdFhiLnBjKDApLl9UZXh0dXJlID0gQmQuX1RleHR1cmU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzEyID0gMS4yO1xyXG5cdFx0XHRpZiAoWGIuXzEgPiBfMTIpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIEVtaXR0ZXJfU3BhcmtzKCkge1xyXG5cclxuXHRcdHZhciBfMSA9IFtdLCBfMyA9IFtdLCBfNiwgXzgsIF8xMCwgXzEyID0gW10sIF8xMz1bXSwgXzEzZnM9W10sIF8xM3ZzPVtdLCBfMTNydz1bXSwgXzEzcnduPVtdLCBfMTNyd2wsIF8xM3Y9W10sIF8xM3A9W10sIF8xM2R0bCwgXzEzZHRwLCBfMTNkZiwgXzEzZnNkPVtdLCBfMTQsIF8xNSwgXzE1aTAsIF8xNXMwID0gW10sIF8xNjtcclxuXHRcdHRoaXMucGUgPSBbe3hlOjAsUmM6NCxTYzoxLHJlbmRlclN0eWxlSW5kZXg6MX1dO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJTcGFya3NcIjtcclxuXHJcblx0XHR0aGlzLnVkID0gZnVuY3Rpb24oQmQpIHtcclxuXHRcdFx0QmQuX1RleHR1cmUgPSAwO1xyXG5cdFx0XHRCZC5kZCgpO1xyXG5cdFx0XHRCZC5fMTUgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzEsMCwwXSxcclxuXHRcdFx0XHRcdFswLDEsMV0sXHJcblx0XHRcdFx0XHRbMSwwLDBdLFxyXG5cdFx0XHRcdFx0WzAsMC43LDAuN10sXHJcblx0XHRcdFx0XHRbMC43LDAuMiwwLjJdLFxyXG5cdFx0XHRcdFx0WzAuMiwwLjgzODIwMiwwLjgzODIwMl0sXHJcblx0XHRcdFx0XHRbMC44MzgyMDIsMC40LDAuNF0sXHJcblx0XHRcdFx0XHRbMC40LDEsMV0sXHJcblx0XHRcdFx0XHRbMSwwLDBdLFxyXG5cdFx0XHRcdFx0WzAsMC42LDAuNl0sXHJcblx0XHRcdFx0XHRbMC42LDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmpkID0gMTAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMTtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDgwO1xyXG5cdFx0XHR2ZC5JYiA9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0dmQuemIgPSAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXyA9IDAuMDtcclxuXHRcdFx0Y3R4LlcoXzEsIDAsIDAsIDApO1xyXG5cdFx0XHRYYi5fMiA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzIsIF8xLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl8yLCBCZC5BYiwgWGIuXzIpO1xyXG5cdFx0XHRjdHgucmFuZHYzZ2VuKF8zLCAxMDAsIEJkLkxkLnJhbmQpO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzQsIF8zLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl80LCBCZC5hZCwgWGIuXzQpO1xyXG5cdFx0XHRYYi5fNSA9IDA7XHJcblx0XHRcdF82ID0gMCArIEJkLkxkLnJhbmQoKSAqICg0IC0gMCk7XHJcblx0XHRcdFhiLl83ID0gXzY7XHJcblx0XHRcdF84ID0gMTAgKyBCZC5MZC5yYW5kKCkgKiAoMjAgLSAxMCk7XHJcblx0XHRcdFhiLl85ID0gXzg7XHJcblx0XHRcdF8xMCA9IDEgKyBCZC5MZC5yYW5kKCkgKiAoMiAtIDEpO1xyXG5cdFx0XHRYYi5fMTEgPSBfMTA7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fMik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fID0gMC4wO1xyXG5cdFx0XHRjdHguVyhfMSwgMCwgMCwgMCk7XHJcblx0XHRcdFhiLl8yID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fMiwgXzEsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzIsIEJkLkFiLCBYYi5fMik7XHJcblx0XHRcdGN0eC5yYW5kdjNnZW4oXzMsIDEwMCwgQmQuTGQucmFuZCk7XHJcblx0XHRcdFhiLl80ID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fNCwgXzMsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzQsIEJkLmFkLCBYYi5fNCk7XHJcblx0XHRcdFhiLl81ID0gMDtcclxuXHRcdFx0XzYgPSAwICsgQmQuTGQucmFuZCgpICogKDQgLSAwKTtcclxuXHRcdFx0WGIuXzcgPSBfNjtcclxuXHRcdFx0XzggPSAxMCArIEJkLkxkLnJhbmQoKSAqICgyMCAtIDEwKTtcclxuXHRcdFx0WGIuXzkgPSBfODtcclxuXHRcdFx0XzEwID0gMSArIEJkLkxkLnJhbmQoKSAqICgyIC0gMSk7XHJcblx0XHRcdFhiLl8xMSA9IF8xMDtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl8yKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fICs9IFFiO1xyXG5cdFx0XHRjdHguVyhfMTIsIDAsIDEwMCwgMCk7XHJcblx0XHRcdGN0eC5UKF8xM2ZzLCBfMTIpO1xyXG5cdFx0XHRjdHguVChfMTN2cywgWzAsMCwwXSk7XHJcblx0XHRcdGN0eC51KF8xM3YsIF8xM2ZzLCBRYik7XHJcblx0XHRcdGN0eC5jKF8xM3YsIF8xM3YsIFhiLl80KTtcclxuXHRcdFx0Y3R4LnUoXzEzcCwgXzEzdiwgUWIpO1xyXG5cdFx0XHRjdHguYyhfMTNwLCBfMTNwLCBYYi5fMik7XHJcblx0XHRcdGN0eC5UKFhiLl8yLCBfMTNwKTtcclxuXHRcdFx0Y3R4LlQoWGIuXzQsIF8xM3YpO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzIpO1xyXG5cdFx0XHRfMTQgPSAoWGIuXyAvIFhiLl8xMSk7XHJcblx0XHRcdF8xNWkwPShfMTQ8MD8wOihfMTQ+MT8xOl8xNCkpO1xyXG5cdFx0XHRfMTVpMDwwLjUzMTQ5NT9fMTVpMDwwLjM/XzE1aTA8MC4xNjcyNj9fMTVpMDwwLjE/Y3R4LlYoXzE1czAsMCwoXzE1aTAtMCkqMTApOmN0eC5WKF8xNXMwLDEsKF8xNWkwLTAuMSkqMTQuODY3Nyk6Y3R4LlYoXzE1czAsMiwoXzE1aTAtMC4xNjcyNikqNy41MzM1MSk6XzE1aTA8MC40NjQyMTg/XzE1aTA8MC4zNTMyMDM/Y3R4LlYoXzE1czAsMywoXzE1aTAtMC4zKSoxOC43OTYpOmN0eC5WKF8xNXMwLDQsKF8xNWkwLTAuMzUzMjAzKSo5LjAwNzc5KTpjdHguVihfMTVzMCw1LChfMTVpMC0wLjQ2NDIxOCkqMTQuODY0KTpfMTVpMDwwLjk/XzE1aTA8MC43P18xNWkwPDAuNjQxOTk2P2N0eC5WKF8xNXMwLDYsKF8xNWkwLTAuNTMxNDk1KSo5LjA0OTY0KTpjdHguVihfMTVzMCw3LChfMTVpMC0wLjY0MTk5NikqMTcuMjQwMyk6Y3R4LlYoXzE1czAsOCwoXzE1aTAtMC43KSo1KTpfMTVpMDwwLjk0MjA0ND9jdHguVihfMTVzMCw5LChfMTVpMC0wLjkpKjIzLjc4NDgpOmN0eC5WKF8xNXMwLDEwLChfMTVpMC0wLjk0MjA0NCkqMTcuMjU0NCk7XHJcblx0XHRcdF8xNSA9IERiLm5iKEJkLl8xNVswXVtfMTVzMFswXV0sXzE1czBbMV0pO1xyXG5cdFx0XHRfMTYgPSAoWGIuXzkgKiBfMTUpO1xyXG5cdFx0XHRjdHguUyhYYi5QZCxbMC41LDAuNV0pO1xyXG5cdFx0XHRYYi5NZCA9IFhiLl81O1xyXG5cdFx0XHRjdHguVihYYi5OZCxfMTYsXzE2KTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsWzEsMSwxXSk7XHJcblx0XHRcdFhiLk9kID0gMTtcclxuXHRcdFx0WGIuUWMgPSAoWGIuXzcgPCAwKSA/IDAgOiAoKFhiLl83ID49IDQpID8gMyA6IFhiLl83KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLkNjID0gZnVuY3Rpb24oQmQsIFhiLCBXYykge1xyXG5cdFx0XHRpZiAoWGIuXyA+IFhiLl8xMSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gRW1pdHRlcl9GaXJld29ya3NfcGFyZW50KCkge1xyXG5cclxuXHRcdHZhciBfLCBfaTAsIF9zMCA9IFtdLCBfMiwgXzMgPSBbXSwgXzNpLCBfM3MgPSBbXSwgXzQgPSBbXSwgXzRpLCBfNHMgPSBbXSwgXzUsIF82ID0gW10sIF83ID0gW10sIF8xMCwgXzExLCBfMTFpMCwgXzExczAgPSBbXSwgXzEzO1xyXG5cdFx0dGhpcy5wZSA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGaXJld29ya3NfcGFyZW50XCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLl8gPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzEuNzIzNzksMS43MjM3OSwxLjcyMzc5XSxcclxuXHRcdFx0XHRcdFswLDAsMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl8zID0gW1xyXG5cdFx0XHRcdFtbLTQzOCwxXSxbLTQ0MCwtMjk2XSxbLTQ0MCwtMjk2XV1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuXzQgPSBbXHJcblx0XHRcdFx0W1szMjcsM10sWzMyNiwtMjg1XSxbMzI2LC0yODVdXVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTEgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzAsMCwwXSxcclxuXHRcdFx0XHRcdFsxLDEsMV0sXHJcblx0XHRcdFx0XHRbMiwyLDJdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC51YyhuZXcgRW1pdHRlcl9TdHJpcGVfcGFyZW50KCksIHsgeGM6IDEsIHNkOiBmYWxzZSB9KTtcclxuXHRcdFx0QmQudWMobmV3IEVtaXR0ZXJfU3BhcmtzKCksIHsgeGM6IDEsIHNkOiBmYWxzZSB9KTtcclxuXHRcdFx0QmQuamQgPSAzO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gNTtcclxuXHRcdFx0dmQuR2IgPSAxO1xyXG5cdFx0XHR2ZC5KYiA9IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5QYiA9IGZ1bmN0aW9uKFFiLCBCZCwgdmQpIHtcclxuXHRcdFx0X2kwPShCZC5MZC5SYjwwPzA6KEJkLkxkLlJiPjUuOTk0MzI/KDArKChCZC5MZC5SYi0wKSU1Ljk5NDMyKSk6QmQuTGQuUmIpKTtcclxuXHRcdFx0X2kwPDEuNTAwNzc/Y3R4LlYoX3MwLDAsKF9pMC0wKSowLjY2NjMyMyk6Y3R4LlYoX3MwLDEsKF9pMC0xLjUwMDc3KSowLjIyMjU0MSk7XHJcblx0XHRcdF8gPSBEYi5uYihCZC5fWzBdW19zMFswXV0sX3MwWzFdKTtcclxuXHRcdFx0dmQuemIgPSBfO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZmQgPSBmdW5jdGlvbihCZCwgWGIpIHtcclxuXHRcdFx0WGIuXzEgPSAwLjA7XHJcblx0XHRcdF8yID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF8zaSA9IERiLmtiKF8yKTtcclxuXHRcdFx0Y3R4LlYoXzNzLDAsKF8zaS0wKSoxKTtcclxuXHRcdFx0RGIubGIoXzMsIEJkLl8zW18zc1swXV0sIF8zc1sxXSk7XHJcblx0XHRcdF80aSA9IERiLmtiKF8yKTtcclxuXHRcdFx0Y3R4LlYoXzRzLDAsKF80aS0wKSoxKTtcclxuXHRcdFx0RGIubGIoXzQsIEJkLl80W180c1swXV0sIF80c1sxXSk7XHJcblx0XHRcdF81ID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdGN0eC5ZKF82LCBfMywgXzQsIF81KTtcclxuXHRcdFx0Y3R4LlcoXzcsIF82WzBdLCBfNlsxXSwgMCk7XHJcblx0XHRcdFhiLl84ID0gW107XHJcblx0XHRcdGN0eC5yYihYYi5fOCwgXzcsIEJkLk1jKTtcclxuXHRcdFx0Y3R4LmMoWGIuXzgsIEJkLkFiLCBYYi5fOCk7XHJcblx0XHRcdFhiLl85ID0gMDtcclxuXHRcdFx0XzEwID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF8xMWkwPShfMTA8MD8wOihfMTA+MT8xOl8xMCkpO1xyXG5cdFx0XHRfMTFpMDwwLjcxMDYyNj9fMTFpMDwwLjM4ODMwMj9jdHguVihfMTFzMCwwLChfMTFpMC0wKSoyLjU3NTMxKTpjdHguVihfMTFzMCwxLChfMTFpMC0wLjM4ODMwMikqMy4xMDI0Nyk6Y3R4LlYoXzExczAsMiwoXzExaTAtMC43MTA2MjYpKjMuNDU1NzMpO1xyXG5cdFx0XHRfMTEgPSBEYi5uYihCZC5fMTFbMF1bXzExczBbMF1dLF8xMXMwWzFdKTtcclxuXHRcdFx0WGIuXzEyID0gXzExO1xyXG5cdFx0XHRjdHguVChYYi5BYiwgWGIuXzgpO1xyXG5cdFx0XHRYYi5wYygwKS5fVGV4dHVyZSA9IFhiLl8xMjtcclxuXHRcdFx0WGIucGMoMSkuX1RleHR1cmUgPSBYYi5fMTI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5nZCA9IGZ1bmN0aW9uKEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSA9IDAuMDtcclxuXHRcdFx0XzIgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0XzNpID0gRGIua2IoXzIpO1xyXG5cdFx0XHRjdHguVihfM3MsMCwoXzNpLTApKjEpO1xyXG5cdFx0XHREYi5sYihfMywgQmQuXzNbXzNzWzBdXSwgXzNzWzFdKTtcclxuXHRcdFx0XzRpID0gRGIua2IoXzIpO1xyXG5cdFx0XHRjdHguVihfNHMsMCwoXzRpLTApKjEpO1xyXG5cdFx0XHREYi5sYihfNCwgQmQuXzRbXzRzWzBdXSwgXzRzWzFdKTtcclxuXHRcdFx0XzUgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0Y3R4LlkoXzYsIF8zLCBfNCwgXzUpO1xyXG5cdFx0XHRjdHguVyhfNywgXzZbMF0sIF82WzFdLCAwKTtcclxuXHRcdFx0WGIuXzggPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl84LCBfNywgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fOCwgQmQuQWIsIFhiLl84KTtcclxuXHRcdFx0WGIuXzkgPSAwO1xyXG5cdFx0XHRfMTAgPSAwICsgQmQuTGQucmFuZCgpICogKDEgLSAwKTtcclxuXHRcdFx0XzExaTA9KF8xMDwwPzA6KF8xMD4xPzE6XzEwKSk7XHJcblx0XHRcdF8xMWkwPDAuNzEwNjI2P18xMWkwPDAuMzg4MzAyP2N0eC5WKF8xMXMwLDAsKF8xMWkwLTApKjIuNTc1MzEpOmN0eC5WKF8xMXMwLDEsKF8xMWkwLTAuMzg4MzAyKSozLjEwMjQ3KTpjdHguVihfMTFzMCwyLChfMTFpMC0wLjcxMDYyNikqMy40NTU3Myk7XHJcblx0XHRcdF8xMSA9IERiLm5iKEJkLl8xMVswXVtfMTFzMFswXV0sXzExczBbMV0pO1xyXG5cdFx0XHRYYi5fMTIgPSBfMTE7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fOCk7XHJcblx0XHRcdFhiLnBjKDApLl9UZXh0dXJlID0gWGIuXzEyO1xyXG5cdFx0XHRYYi5wYygxKS5fVGV4dHVyZSA9IFhiLl8xMjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fMSArPSBRYjtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl84KTtcclxuXHRcdFx0WGIucGMoMCkuX1RleHR1cmUgPSBYYi5fMTI7XHJcblx0XHRcdFhiLnBjKDEpLl9UZXh0dXJlID0gWGIuXzEyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuQ2MgPSBmdW5jdGlvbihCZCwgWGIsIFdjKSB7XHJcblx0XHRcdF8xMyA9IDI7XHJcblx0XHRcdGlmIChYYi5fMSA+IF8xMykgcmV0dXJuIHRydWU7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5xZCA9IGZ1bmN0aW9uKExkKSB7XHJcblx0XHRMZC5EZCA9IDAuMDMzMzMzMztcclxuXHRcdExkLlVkID0gMDtcclxuXHRcdExkLnByZXNpbUZyYW1lVGltZSA9IDAuMTtcclxuXHRcdExkLnJhbmQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCk7IH07XHJcblx0XHRMZC5wZChuZXcgRW1pdHRlcl9GaXJld29ya3NfcGFyZW50KCkpO1xyXG5cdH1cclxuXHRcdHRoaXMua2IgPSBmdW5jdGlvbiAodikgeyBcdFx0XHRyZXR1cm4gKHYgPCAwKSA/IDAgOiAoKHYgPiAxKSA/IDEgOiB2KTsgXHRcdH1cclxuXHJcblx0XHR0aGlzLmxiID0gZnVuY3Rpb24gKHIsIHBhdGgsIGplKSB7IFx0XHRcdHZhciBpbmRleEludCA9IE1hdGguZmxvb3IoamUpOyBcdFx0XHR2YXIgbGVycCA9IGplIC0gaW5kZXhJbnQ7IFx0XHRcdGN0eC5ZKHIsIHBhdGhbaW5kZXhJbnRdLCBwYXRoW2luZGV4SW50ICsgMV0sIGxlcnApOyBcdFx0fVxyXG5cclxuXHRcdHRoaXMubmIgPSBmdW5jdGlvbihmdW5jVmFsdWVzLCBqZSkgeyBcdFx0XHR2YXIgaW5kZXhJbnQgPSBNYXRoLmZsb29yKGplKTsgXHRcdFx0dmFyIG5leHRJbnQgPSBpbmRleEludCArIDE7IFx0XHRcdHJldHVybiBjdHguWChmdW5jVmFsdWVzW2luZGV4SW50XSwgZnVuY1ZhbHVlc1tuZXh0SW50XSwgamUgLSBpbmRleEludCk7IFx0XHR9XHJcblxyXG5cclxufVxyXG5cclxucmV0dXJuIEZpcmV3b3JrczAyO1xyXG59KSk7Il19