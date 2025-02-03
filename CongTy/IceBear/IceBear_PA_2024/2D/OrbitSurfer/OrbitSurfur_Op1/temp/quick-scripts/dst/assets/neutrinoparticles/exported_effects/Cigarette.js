
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/neutrinoparticles/exported_effects/Cigarette.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9da2I2VIFIyYJlJGUWj0Xb', 'Cigarette');
// neutrinoparticles/exported_effects/Cigarette.js

"use strict";

// 605a5edc-3474-4363-92c1-bed3260c9644
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Cigarette'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Cigarette'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Cigarette(ctx) {
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
          this.
          /**/
          update(this.Ud, Ab, Mc);
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
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
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
      rotation);else this.updateFlex(
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
    rotation) {
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
      dt - updatedTime + this.Cd >= this.Dd) {
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
          this.od[i].Id(this.Dd, hc, frameRotation);
          this.Rb = cc;
        }

        updatedTime += this.Dd - this.Cd;
        this.Cd = 0.0;
        this.Rb = cc + this.Dd;
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
        this.
        /**/
        update(this.Ud, this.Ab, this.Mc);
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

    this.textures = ['smoke01_white_blurred.png'];
    this.materials = [0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 1000;

    function Emitter_DefaultEmitter() {
      var _1,
          _2 = [],
          _2i,
          _2s = [],
          _3 = [],
          _5,
          _6 = [],
          _6i,
          _6s = [],
          _7 = [],
          _9,
          _11,
          _12,
          _13 = [],
          _13i0,
          _13s0 = [],
          _13i1,
          _13s1 = [],
          _13i2,
          _13s2 = [],
          _14,
          _14i0,
          _14s0 = [],
          _15 = [],
          _15a = [],
          _15i = [],
          _16 = [],
          _16fs = [],
          _16vs = [],
          _16rw = [],
          _16rwn = [],
          _16rwl,
          _16v = [],
          _16p = [],
          _16dtl,
          _16dtp,
          _16df,
          _16fsd = [],
          _17,
          _18,
          _18i0,
          _18s0 = [],
          _19,
          _20,
          _20i0,
          _20s0 = [];

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._2 = [[[-4.67432, 2.25574], [4.79819, 2.25574], [4.79819, 2.25574]]];
        Bd._6 = [[[-3.14021, -46.509], [8.87581, -46.3798], [8.87581, -46.3798]]];
        Bd._13 = [[[0, 300, 300]], [[-800, -604.339, -467.578, -364.595, -284.193, -220.208, -168.805, -127.398, -94.1339, -67.6183, -46.7594, -30.6685, -18.5932, -9.86816, -3.87458, 0, 0]], [[0, 0, 0]]];
        Bd._14 = [[[200, 292.426, 364.042, 419.226, 461.403, 493.309, 517.178, 534.853, 547.883, 557.584, 565.086, 571.366, 577.283, 583.592, 590.964, 600, 600]]];
        Bd._18 = [[[0.5, 0.572555, 0.703337, 0.891427, 1.13639, 1.43827, 1.79756, 2.21527, 2.69291, 3.23262, 3.83719, 4.51023, 5.25633, 6.08134, 6.9927, 8, 8]]];
        Bd._20 = [[[0, 0.1, 0.1], [0.1, 0, 0]]];
        Bd.jd = 1000;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 100;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 100;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i = Db.kb(_1);
        ctx.V(_2s, 0, (_2i - 0) * 1);
        Db.lb(_2, Bd._2[_2s[0]], _2s[1]);
        ctx.W(_3, _2[0], _2[1], 0);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.Ab, Xb._4);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i = Db.kb(_5);
        ctx.V(_6s, 0, (_6i - 0) * 1);
        Db.lb(_6, Bd._6[_6s[0]], _6s[1]);
        ctx.W(_7, _6[0], _6[1], 0);
        Xb._8 = [];
        ctx.rb(Xb._8, _7, Bd.Mc);
        ctx.c(Xb._8, Bd.ad, Xb._8);
        _9 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._10 = _9;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i = Db.kb(_1);
        ctx.V(_2s, 0, (_2i - 0) * 1);
        Db.lb(_2, Bd._2[_2s[0]], _2s[1]);
        ctx.W(_3, _2[0], _2[1], 0);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.Ab, Xb._4);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i = Db.kb(_5);
        ctx.V(_6s, 0, (_6i - 0) * 1);
        Db.lb(_6, Bd._6[_6s[0]], _6s[1]);
        ctx.W(_7, _6[0], _6[1], 0);
        Xb._8 = [];
        ctx.rb(Xb._8, _7, Bd.Mc);
        ctx.c(Xb._8, Bd.ad, Xb._8);
        _9 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._10 = _9;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        _11 = 3;
        _12 = Xb._ / _11;
        _13i0 = _12 < 0 ? 0 : _12 > 1 ? 1 : _12;
        ctx.V(_13s0, 0, (_13i0 - 0) * 1);
        _13i1 = _12 < 0 ? 0 : _12 > 1 ? 1 : _12;
        ctx.V(_13s1, 0, (_13i1 - 0) * 15);
        _13i2 = _12 < 0 ? 0 : _12 > 1 ? 1 : _12;
        ctx.V(_13s2, 0, (_13i2 - 0) * 1);
        ctx.W(_13, Db.nb(Bd._13[0][_13s0[0]], _13s0[1]), Db.nb(Bd._13[1][_13s1[0]], _13s1[1]), Db.nb(Bd._13[2][_13s2[0]], _13s2[1]));
        _14i0 = _12 < 0 ? 0 : _12 > 1 ? 1 : _12;
        ctx.V(_14s0, 0, (_14i0 - 0) * 15);
        _14 = Db.nb(Bd._14[0][_14s0[0]], _14s0[1]);
        ctx.u(_15a, [100, 50, 30], Bd.Ld.Rb);
        ctx.c(_15a, _15a, Xb._4);
        ctx.u(_15i, _15a, 1.0 / 1000);
        ctx.xb(_15, _15i);
        ctx.k(_15, _15, [0.0078125, 0.0078125, 0.0078125]);
        ctx.c(_15, _15, [-1, -1, -1]);
        ctx.u(_15, _15, _14);
        ctx.T(_16fs, _13);
        ctx.c(_16fs, _16fs, _15);
        ctx.T(_16vs, [0, 0, 0]);
        _16dtl = Qb;
        ctx.T(_16v, Xb._8);
        ctx.T(_16p, Xb._4);

        while (_16dtl > 0.0001) {
          _16dtp = _16dtl;
          ctx.T(_16fsd, _16fs);
          ctx.g(_16rw, _16vs, _16v);
          _16rwl = ctx.P(_16rw);

          if (_16rwl > 0.0001) {
            _16rwl = Math.sqrt(_16rwl);
            ctx.w(_16rwn, _16rw, _16rwl);
            _16df = 0.01 * 1 * _16rwl;
            if (_16df * _16dtp > 0.2) _16dtp = 0.2 / _16df;
            ctx.c(_16fsd, _16fsd, ctx.v(_16rwn, _16rwl * _16df));
          }

          ctx.c(_16v, _16v, ctx.v(_16fsd, _16dtp));
          ctx.c(_16p, _16p, ctx.v(_16v, _16dtp));
          _16dtl -= _16dtp;
        }

        ctx.T(Xb._4, _16p);
        ctx.T(Xb._8, _16v);
        ctx.T(Xb.Ab, Xb._4);
        _17 = 30;
        _11 = 3;
        _12 = Xb._ / _11;
        _18i0 = _12 < 0 ? 0 : _12 > 1 ? 1 : _12;
        ctx.V(_18s0, 0, (_18i0 - 0) * 15);
        _18 = Db.nb(Bd._18[0][_18s0[0]], _18s0[1]);
        _19 = _17 * _18;
        _20i0 = _12 < 0 ? 0 : _12 > 1 ? 1 : _12;
        _20i0 < 0.1 ? ctx.V(_20s0, 0, (_20i0 - 0) * 10) : ctx.V(_20s0, 1, (_20i0 - 0.1) * 1.11111);
        _20 = Db.nb(Bd._20[0][_20s0[0]], _20s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._10;
        ctx.V(Xb.Nd, _19, _19);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = _20;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _11 = 3;
        if (Xb._ > _11) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 0;

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

  return Cigarette;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbmV1dHJpbm9wYXJ0aWNsZXNcXGV4cG9ydGVkX2VmZmVjdHNcXENpZ2FyZXR0ZS5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJOZXV0cmlub0VmZmVjdCIsIm5hbWVzcGFjZSIsIl9fbGFzdF9fIiwic2VsZiIsIkNpZ2FyZXR0ZSIsImN0eCIsIkRiIiwibmUiLCJMZCIsIkJkIiwid2UiLCJwZSIsImxlbmd0aCIsIkxjIiwicHJvdG90eXBlIiwiRWMiLCJGYyIsInhlIiwiZmUiLCJBYiIsIlhiIiwiR2MiLCJpYiIsIk1kIiwiSGMiLCJNYXRoIiwiY29zIiwiSWMiLCJzaW4iLCJ5ZSIsIkFlIiwiTmQiLCJ6ZSIsInRyYW5zZm9ybSIsInEiLCJNYyIsInoyIiwieHkiLCJ3eiIsIlBjIiwiZ2UiLCJ2YyIsIkJlIiwib2MiLCJPZCIsIkRlIiwiZmxvb3IiLCJRYyIsIlJjIiwiRWUiLCJzbGljZSIsImRmIiwiYWJzIiwiZWYiLCJzYXZlIiwidHJhbnNsYXRlIiwiUGQiLCJnbG9iYWxBbHBoYSIsImdmIiwiWWUiLCJUYyIsIlplIiwiVWMiLCJhZiIsImJmIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZHJhd0ltYWdlIiwiaW1hZ2UiLCJ4IiwieSIsImZpbGxTdHlsZSIsImZmIiwiZmlsbFJlY3QiLCJjZiIsInJlc3RvcmUiLCJIZCIsIm1hdGVyaWFscyIsIm1vZGVsIiwicmVuZGVyU3R5bGVzIiwicmVuZGVyU3R5bGVJbmRleCIsIm1hdGVyaWFsSW5kZXgiLCJ0ZXh0dXJlRGVzY3MiLCJ0ZXh0dXJlSW5kaWNlcyIsIndpZHRoIiwiaGVpZ2h0IiwiU2MiLCJrZCIsImEiLCJiIiwiVmMiLCJXYiIsInRjIiwic29ydCIsIm9lIiwidmVydGV4IiwicG9zaXRpb24iLCJjb2xvciIsInRleENvb3JkcyIsInFlIiwic2UiLCJyZSIsInRlIiwicmVuZGVyQnVmZmVyIiwiQ2UiLCJ2MCIsInYxIiwidjIiLCJ2MyIsIkZlIiwiR2UiLCJzIiwiYyIsIkhlIiwiSWUiLCJKZSIsIktlIiwidSIsInJnYiIsInYiLCJQZSIsIlFlIiwiUmUiLCJTZSIsIldlIiwidGV4dHVyZXNSZW1hcCIsIlVlIiwiVmUiLCJiZWZvcmVRdWFkIiwicHVzaFZlcnRleCIsIl9fbGFzdFJlbmRlckNhbGwiLCJSZW5kZXJDYWxsIiwibGFzdFJlbmRlckNhbGwiLCJudW1JbmRpY2VzIiwicHVzaFJlbmRlckNhbGwiLCJzdGFydEluZGV4IiwidWUiLCJmb3JFYWNoIiwiZGVwdGgiLCJIIiwibGQiLCJ2ZSIsIlZiIiwiRWIiLCJGYiIsIkdiIiwiSGIiLCJJYiIsIktiIiwiTGIiLCJNYiIsIk5iIiwiT2IiLCJKZCIsIklkIiwiUWIiLCJQYiIsIlJiIiwic3lzdGVtVGltZSIsIlNiIiwiaWMiLCJ6YiIsIlRiIiwiVWIiLCJkaXNhY3RpdmF0ZSIsImFiIiwiQmIiLCJzbGVycHEiLCJwcmV2Um90YXRpb24iLCJKYiIsInNjIiwicG9wIiwidW5zaGlmdCIsIlliIiwiWmIiLCJUIiwiVSIsImFjIiwiYmMiLCJjYyIsImRjIiwic3lzdGVtVGltZUJlZm9yZUZyYW1lIiwic3lzdGVtVGltZUFmdGVyRnJhbWUiLCJlYyIsIk8iLCJoIiwiZmMiLCJyZCIsImhjIiwiamMiLCJrYyIsIlgiLCJtYyIsIktjIiwibmMiLCJpIiwicGMiLCJBZCIsInNkIiwiZmQiLCJnZCIsInFjIiwicmMiLCJqZSIsInVjIiwibWQiLCJuZCIsInB1c2giLCJ4YyIsIndjIiwiYWN0aXZhdGUiLCJ5YyIsIkdkIiwiRWQiLCJ6YyIsIkFjIiwiQ2MiLCJXYyIsImNvbnN0cnVjdCIsIlljIiwiYWQiLCJkZCIsInZkIiwiZWQiLCJ1ZCIsImpkIiwiaWQiLCJoZCIsIndkIiwiWmMiLCJwYXVzZWRfIiwiZ2VuZXJhdG9yc1BhdXNlZF8iLCJXIiwiYXBwbHkiLCJUZCIsInNoaWZ0IiwiZyIsInciLCJ4ZCIsInJlYWR5IiwiYWN0aXZhdGVkIiwic3BsaWNlIiwicGF1c2UiLCJ1bnBhdXNlIiwicGF1c2VkIiwicGF1c2VHZW5lcmF0b3JzIiwidW5wYXVzZUdlbmVyYXRvcnMiLCJnZW5lcmF0b3JzUGF1c2VkIiwiZ2V0TnVtUGFydGljbGVzIiwia2UiLCJDYiIsIl9pbml0Iiwib3B0aW9ucyIsIm9kIiwicGQiLCJjb25jYXQiLCJuYW1lIiwiQ2QiLCJxZCIsIl9wcmVzaW1OZWVkZWQiLCJwYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwicGF1c2VBbGxFbWl0dGVycyIsInplcm9VcGRhdGUiLCJ1cGRhdGUiLCJVZCIsInJlc3RhcnQiLCJyb3RhdGlvbiIsImR0IiwiRGQiLCJ1cGRhdGVGaXhlZCIsInVwZGF0ZUZsZXgiLCJ1cGRhdGVkVGltZSIsImZyYW1lUm90YXRpb24iLCJlcXVhbHYzXyIsImVxdWFscV8iLCJyZXNldFBvc2l0aW9uIiwic2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzIiwidmFsdWUiLCJwcm9wTmFtZSIsIkFycmF5IiwiUyIsInVucGF1c2VBbGxFbWl0dGVycyIsImFyZUFsbEVtaXR0ZXJzUGF1c2VkIiwidW5wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzIiwiYXJlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnNQYXVzZWQiLCJudW1QYXJ0aWNsZXMiLCJsZSIsImNhbGwiLCJpbmRpY2VzIiwidmVyRGlzcCIsIlhlIiwiaW5pdGlhbGl6ZSIsIl9fbnVtSW5kaWNlcyIsImZpbGxHZW9tZXRyeUJ1ZmZlcnMiLCJjYW1lcmFSaWdodCIsImNhbWVyYVVwIiwiY2FtZXJhRGlyIiwiY2xlYW51cCIsIm1lIiwiZHJhdyIsImNvbnRleHQiLCJjYW1lcmEiLCJjcmVhdGVXR0xJbnN0YW5jZSIsImNyZWF0ZUNhbnZhczJESW5zdGFuY2UiLCJ0ZXh0dXJlcyIsIkVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIiLCJfMSIsIl8yIiwiXzJpIiwiXzJzIiwiXzMiLCJfNSIsIl82IiwiXzZpIiwiXzZzIiwiXzciLCJfOSIsIl8xMSIsIl8xMiIsIl8xMyIsIl8xM2kwIiwiXzEzczAiLCJfMTNpMSIsIl8xM3MxIiwiXzEzaTIiLCJfMTNzMiIsIl8xNCIsIl8xNGkwIiwiXzE0czAiLCJfMTUiLCJfMTVhIiwiXzE1aSIsIl8xNiIsIl8xNmZzIiwiXzE2dnMiLCJfMTZydyIsIl8xNnJ3biIsIl8xNnJ3bCIsIl8xNnYiLCJfMTZwIiwiXzE2ZHRsIiwiXzE2ZHRwIiwiXzE2ZGYiLCJfMTZmc2QiLCJfMTciLCJfMTgiLCJfMThpMCIsIl8xOHMwIiwiXzE5IiwiXzIwIiwiXzIwaTAiLCJfMjBzMCIsIl8iLCJyYW5kIiwia2IiLCJWIiwibGIiLCJfNCIsInJiIiwiXzgiLCJfMTAiLCJuYiIsInhiIiwiayIsIlAiLCJzcXJ0IiwicmFuZG9tIiwiciIsInBhdGgiLCJpbmRleEludCIsImxlcnAiLCJZIiwiZnVuY1ZhbHVlcyIsIm5leHRJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQyxXQUFVQSxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUN0QixNQUFJLE9BQU9DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0MsTUFBUCxLQUFrQixXQUFyRCxFQUFrRTtBQUM5REEsSUFBQUEsTUFBTSxDQUFDRCxPQUFQLEdBQWlCRCxPQUFPLEVBQXhCO0FBQ0gsR0FGRCxNQUVPLElBQUksT0FBT0csTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsTUFBTSxDQUFDQyxHQUEzQyxFQUFnRDtBQUNuREQsSUFBQUEsTUFBTSxDQUFDLENBQUMsU0FBRCxDQUFELEVBQWMsVUFBVUYsT0FBVixFQUFtQjtBQUNuQyxPQUFDRixJQUFJLENBQUNNLGNBQUwsR0FBc0JKLE9BQXZCLEVBQWdDLFdBQWhDLElBQStDRCxPQUFPLEVBQXREO0FBQ0gsS0FGSyxDQUFOO0FBR0gsR0FKTSxNQUlBO0FBQ0gsUUFBSU0sU0FBUyxHQUFJUCxJQUFJLENBQUNNLGNBQUwsS0FBd0JOLElBQUksQ0FBQ00sY0FBTCxHQUFzQixFQUE5QyxDQUFqQjtBQUNBQyxJQUFBQSxTQUFTLENBQUNDLFFBQVYsR0FBcUJELFNBQVMsQ0FBQyxXQUFELENBQVQsR0FBeUJOLE9BQU8sRUFBckQ7QUFDSDtBQUNKLENBWEEsRUFXQyxPQUFPUSxJQUFQLEtBQWdCLFdBQWhCLEdBQThCQSxJQUE5QixTQVhELEVBVzRDLFlBQVk7QUFFekQsV0FBU0MsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7QUFDdkIsUUFBSUMsRUFBRSxHQUFHLElBQVQ7O0FBRUEsUUFBSUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBVUMsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0FBQzFCLFdBQUtELEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVUEsRUFBVjs7QUFFQSxVQUFJLEtBQUtBLEVBQUwsQ0FBUUMsRUFBUixDQUFXQyxFQUFYLENBQWNDLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDN0IsYUFBS0YsRUFBTCxHQUFVLEtBQUtELEVBQUwsQ0FBUUMsRUFBUixDQUFXQyxFQUFYLENBQWMsQ0FBZCxDQUFWO0FBRUEsYUFBS0UsRUFBTCxHQUFVLENBQUNOLEVBQUUsQ0FBQ08sU0FBSCxDQUFhQyxFQUFkLEVBQ1RSLEVBQUUsQ0FBQ08sU0FBSCxDQUFhRSxFQURKLEVBQ1EsS0FBS04sRUFBTCxDQUFRTyxFQURoQixDQUFWO0FBRUEsT0FMRCxNQU9DLEtBQUtQLEVBQUwsR0FBVSxJQUFWO0FBQ0QsS0FaRDs7QUFjQUgsSUFBQUEsRUFBRSxDQUFDTyxTQUFILEdBQWU7QUFDZEMsTUFBQUEsRUFBRSxFQUFFLFlBQVVHLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0I7QUFDekIsWUFBSUMsRUFBRSxHQUFHaEIsR0FBRyxDQUFDaUIsRUFBSixDQUFPRixFQUFFLENBQUNHLEVBQVYsQ0FBVDtBQUNBLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNMLEVBQVQsQ0FBVDtBQUNBLFlBQUlNLEVBQUUsR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVNQLEVBQVQsQ0FBVDtBQUNBLFlBQUlRLEVBQUUsR0FBR3hCLEdBQUcsQ0FBQ3lCLEVBQUosQ0FBT1YsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixDQUFQLENBQVQ7QUFDQSxZQUFJQyxFQUFFLEdBQUczQixHQUFHLENBQUN5QixFQUFKLENBQU9WLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBUCxDQUFUO0FBQ0FiLFFBQUFBLEVBQUU7QUFBQztBQUFJZSxRQUFBQSxTQUFQLENBQWlCSixFQUFFLEdBQUdMLEVBQXRCLEVBQTBCSyxFQUFFLEdBQUdGLEVBQS9CLEVBQW1DSyxFQUFFLEdBQUcsQ0FBQ0wsRUFBekMsRUFBNkNLLEVBQUUsR0FBR1IsRUFBbEQsRUFBc0RMLEVBQUUsQ0FBQyxDQUFELENBQXhELEVBQTZEQSxFQUFFLENBQUMsQ0FBRCxDQUEvRDtBQUNBLE9BUmE7QUFVZEgsTUFBQUEsRUFBRSxFQUFFLFlBQVVFLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0I7QUFDekIsWUFBSWMsQ0FBQyxHQUFHZCxFQUFFLENBQUNlLEVBQVg7QUFDQSxZQUFJQyxFQUFFLEdBQUcsTUFBTUYsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUF2QjtBQUNBLFlBQUlHLEVBQUUsR0FBRyxNQUFNSCxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0EsWUFBSUksRUFBRSxHQUFHLE1BQU1KLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBdkI7QUFDQSxZQUFJTCxFQUFFLEdBQUd4QixHQUFHLENBQUN5QixFQUFKLENBQU9WLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBUCxDQUFUO0FBQ0EsWUFBSUMsRUFBRSxHQUFHM0IsR0FBRyxDQUFDeUIsRUFBSixDQUFPVixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQVAsQ0FBVDtBQUNBYixRQUFBQSxFQUFFO0FBQUM7QUFBSWUsUUFBQUEsU0FBUCxDQUNDSixFQUFFLElBQUksTUFBTSxNQUFNSyxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXBCLEdBQTBCRSxFQUE5QixDQURILEVBRUNQLEVBQUUsSUFBSVEsRUFBRSxHQUFHQyxFQUFULENBRkgsRUFHQ04sRUFBRSxJQUFJTSxFQUFFLEdBQUdELEVBQVQsQ0FISCxFQUlDTCxFQUFFLElBQUksTUFBTUUsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEdBQW9CRSxFQUFwQixHQUF5QixHQUE3QixDQUpILEVBS0NqQixFQUFFLENBQUMsQ0FBRCxDQUxILEVBS1FBLEVBQUUsQ0FBQyxDQUFELENBTFY7QUFNQSxPQXZCYTtBQXlCZG9CLE1BQUFBLEVBQUUsRUFBRSxZQUFVckIsRUFBVixFQUFjRSxFQUFkLEVBQWtCb0IsRUFBbEIsRUFBc0I7QUFDekJwQixRQUFBQSxFQUFFLENBQUNxQixFQUFILENBQU12QixFQUFOLEVBQVUsQ0FBQyxDQUFYLEVBQWNzQixFQUFkOztBQUVBLFlBQUksS0FBSzlCLEVBQVQsRUFBYTtBQUVaLGNBQUksS0FBS2dDLEVBQUwsSUFBVyxJQUFYLElBQW1CLENBQUN0QixFQUFFLENBQUN1QixFQUEzQixFQUErQjtBQUU5QixnQkFBSXZCLEVBQUUsQ0FBQ3dCLEVBQUgsR0FBUSxLQUFaLEVBQW1CO0FBQ2xCLGtCQUFJQyxFQUFFLEdBQUdwQixJQUFJLENBQUNxQixLQUFMLENBQVcxQixFQUFFLENBQUMyQixFQUFILEdBQVEsS0FBS3JDLEVBQUwsQ0FBUXNDLEVBQTNCLENBQVQ7QUFDQSxrQkFBSUMsRUFBRSxHQUFHeEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBRUEsa0JBQUk3QixFQUFFLEdBQUdDLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNK0IsS0FBTixFQUFUO0FBQ0Esa0JBQUluQixFQUFFLEdBQUdYLEVBQUUsQ0FBQ1csRUFBSCxDQUFNbUIsS0FBTixFQUFUOztBQUNBLGtCQUFJLENBQUNWLEVBQUQsSUFBT0EsRUFBRTtBQUFDO0FBQUlQLGNBQUFBLFNBQVAsQ0FBaUJkLEVBQWpCLEVBQXFCWSxFQUFyQixDQUFYLEVBQXFDO0FBRXBDLG9CQUFJb0IsRUFBRSxHQUFHMUIsSUFBSSxDQUFDMkIsR0FBTCxDQUFTckIsRUFBRSxDQUFDLENBQUQsQ0FBWCxDQUFUO0FBQ0Esb0JBQUlzQixFQUFFLEdBQUc1QixJQUFJLENBQUMyQixHQUFMLENBQVNyQixFQUFFLENBQUMsQ0FBRCxDQUFYLENBQVQ7O0FBRUEsb0JBQUlvQixFQUFFLEdBQUcsS0FBTCxJQUFjRSxFQUFFLEdBQUcsS0FBdkIsRUFBOEI7QUFDN0JuQyxrQkFBQUEsRUFBRSxDQUFDb0MsSUFBSDtBQUNBLHVCQUFLekMsRUFBTCxDQUFRSyxFQUFSLEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCO0FBRUFGLGtCQUFBQSxFQUFFLENBQUNxQyxTQUFILENBQWEsQ0FBQ0osRUFBRCxHQUFNL0IsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBbkIsRUFBNkIsQ0FBQ0gsRUFBRCxJQUFPLElBQUlqQyxFQUFFLENBQUNvQyxFQUFILENBQU0sQ0FBTixDQUFYLENBQTdCO0FBQ0F0QyxrQkFBQUEsRUFBRSxDQUFDdUMsV0FBSCxJQUFrQnJDLEVBQUUsQ0FBQ3dCLEVBQXJCOztBQUVBLHNCQUFJeEIsRUFBRSxDQUFDc0MsRUFBSCxDQUFNLENBQU4sSUFBVyxLQUFYLElBQW9CdEMsRUFBRSxDQUFDc0MsRUFBSCxDQUFNLENBQU4sSUFBVyxLQUEvQixJQUF3Q3RDLEVBQUUsQ0FBQ3NDLEVBQUgsQ0FBTSxDQUFOLElBQVcsS0FBdkQsRUFBOEQ7QUFDN0Qsd0JBQUlQLEVBQUUsSUFBSSxDQUFOLElBQVdFLEVBQUUsSUFBSSxDQUFyQixFQUF3QjtBQUN2QiwwQkFBSU0sRUFBRSxHQUFHUixFQUFFLEdBQUcsS0FBS1MsRUFBVixHQUFlVCxFQUFmLEdBQW9CLEtBQUtTLEVBQWxDO0FBQ0EsMEJBQUlDLEVBQUUsR0FBR1IsRUFBRSxHQUFHLEtBQUtTLEVBQVYsR0FBZVQsRUFBZixHQUFvQixLQUFLUyxFQUFsQztBQUVBekQsc0JBQUFBLEdBQUcsQ0FBQzBELEVBQUosQ0FBT0osRUFBUCxFQUFXRSxFQUFYO0FBRUF4RCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPQyx3QkFBUCxHQUFrQyxNQUFsQztBQUNBNUQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0UsU0FBUCxDQUFpQixLQUFLeEIsRUFBTCxDQUFReUIsS0FBekIsRUFDQyxLQUFLekIsRUFBTCxDQUFRMEIsQ0FBUixHQUFZLEtBQUtSLEVBQUwsR0FBVWYsRUFEdkIsRUFDMkIsS0FBS0gsRUFBTCxDQUFRMkIsQ0FBUixHQUFZLEtBQUtQLEVBQUwsR0FBVWIsRUFEakQsRUFFQyxLQUFLVyxFQUZOLEVBRVUsS0FBS0UsRUFGZixFQUdDLENBSEQsRUFHSSxDQUhKLEVBR09ILEVBSFAsRUFHV0UsRUFIWDtBQUtBeEQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0Msd0JBQVAsR0FBa0MsVUFBbEM7QUFDQTVELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9NLFNBQVAsR0FBbUJqRSxHQUFHLENBQUNrRSxFQUFKLENBQU9uRCxFQUFFLENBQUNzQyxFQUFWLENBQW5CO0FBQ0FyRCxzQkFBQUEsR0FBRyxDQUFDMkQsRUFBSixDQUFPUSxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCYixFQUF0QixFQUEwQkUsRUFBMUI7QUFFQXhELHNCQUFBQSxHQUFHLENBQUMyRCxFQUFKLENBQU9DLHdCQUFQLEdBQWtDLGtCQUFsQztBQUNBNUQsc0JBQUFBLEdBQUcsQ0FBQzJELEVBQUosQ0FBT0UsU0FBUCxDQUFpQixLQUFLeEIsRUFBTCxDQUFReUIsS0FBekIsRUFDQyxLQUFLekIsRUFBTCxDQUFRMEIsQ0FBUixHQUFZLEtBQUtSLEVBQUwsR0FBVWYsRUFEdkIsRUFDMkIsS0FBS0gsRUFBTCxDQUFRMkIsQ0FBUixHQUFZLEtBQUtQLEVBQUwsR0FBVWIsRUFEakQsRUFFQyxLQUFLVyxFQUZOLEVBRVUsS0FBS0UsRUFGZixFQUdDLENBSEQsRUFHSSxDQUhKLEVBR09ILEVBSFAsRUFHV0UsRUFIWDtBQUtBM0Msc0JBQUFBLEVBQUUsQ0FBQ2dELFNBQUgsQ0FBYTdELEdBQUcsQ0FBQ29FLEVBQWpCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCZCxFQUEzQixFQUErQkUsRUFBL0IsRUFBbUMsQ0FBbkMsRUFBc0MsQ0FBdEMsRUFBeUNWLEVBQXpDLEVBQTZDRSxFQUE3QztBQUNBO0FBQ0QsbUJBekJELE1BMEJLO0FBQ0puQyxvQkFBQUEsRUFBRSxDQUFDZ0QsU0FBSCxDQUFhLEtBQUt4QixFQUFMLENBQVF5QixLQUFyQixFQUNDLEtBQUt6QixFQUFMLENBQVEwQixDQUFSLEdBQVksS0FBS1IsRUFBTCxHQUFVZixFQUR2QixFQUMyQixLQUFLSCxFQUFMLENBQVEyQixDQUFSLEdBQVksS0FBS1AsRUFBTCxHQUFVYixFQURqRCxFQUVDLEtBQUtXLEVBRk4sRUFFVSxLQUFLRSxFQUZmLEVBRW1CLENBRm5CLEVBRXNCLENBRnRCLEVBRXlCWCxFQUZ6QixFQUU2QkUsRUFGN0I7QUFHQTs7QUFFRG5DLGtCQUFBQSxFQUFFLENBQUN3RCxPQUFIO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRDs7QUFFRHRELFFBQUFBLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTXZCLEVBQU4sRUFBVSxDQUFWLEVBQWFzQixFQUFiO0FBQ0EsT0ExRmE7QUE0RmRtQyxNQUFBQSxFQUFFLEVBQUUsWUFBVXpELEVBQVYsRUFBY3NCLEVBQWQsRUFBa0I7QUFDckJ0QixRQUFBQSxFQUFFLENBQUNvQyxJQUFIOztBQUVBLFlBQUksS0FBSzVDLEVBQVQsRUFBYTtBQUNaUSxVQUFBQSxFQUFFLENBQUMrQyx3QkFBSCxHQUE4QixLQUFLekQsRUFBTCxDQUFRb0UsU0FBUixDQUFrQixLQUFLcEUsRUFBTDtBQUFRO0FBQUlxRSxVQUFBQSxLQUFaLENBQWtCQyxZQUFsQixDQUErQixLQUFLcEUsRUFBTCxDQUFRcUUsZ0JBQXZDLEVBQXlEQyxhQUEzRSxDQUE5QjtBQUNBLGVBQUt0QyxFQUFMLEdBQVUsS0FBS2xDLEVBQUwsQ0FBUXlFLFlBQVIsQ0FBcUIsS0FBS3pFLEVBQUw7QUFBUTtBQUFJcUUsVUFBQUEsS0FBWixDQUFrQkMsWUFBbEIsQ0FBK0IsS0FBS3BFLEVBQUwsQ0FBUXFFLGdCQUF2QyxFQUF5REcsY0FBekQsQ0FBd0UsQ0FBeEUsQ0FBckIsQ0FBVjtBQUNBLFNBSEQsTUFJSztBQUNKLGVBQUt4QyxFQUFMLEdBQVUsSUFBVjtBQUNBOztBQUVELFlBQUksS0FBS0EsRUFBVCxFQUFhO0FBQ1osZUFBS2tCLEVBQUwsR0FBVSxLQUFLbEIsRUFBTCxDQUFReUMsS0FBUixHQUFnQixLQUFLekUsRUFBTCxDQUFRc0MsRUFBbEM7QUFDQSxlQUFLYyxFQUFMLEdBQVUsS0FBS3BCLEVBQUwsQ0FBUTBDLE1BQVIsR0FBaUIsS0FBSzFFLEVBQUwsQ0FBUTJFLEVBQW5DO0FBQ0E7O0FBRUQsaUJBQVNDLEVBQVQsQ0FBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQ2pCLGNBQUlELENBQUMsQ0FBQ3BFLEVBQUYsQ0FBSyxDQUFMLElBQVVxRSxDQUFDLENBQUNyRSxFQUFGLENBQUssQ0FBTCxDQUFkLEVBQ0MsT0FBTyxDQUFQO0FBQ0QsY0FBSW9FLENBQUMsQ0FBQ3BFLEVBQUYsQ0FBSyxDQUFMLElBQVVxRSxDQUFDLENBQUNyRSxFQUFGLENBQUssQ0FBTCxDQUFkLEVBQ0MsT0FBTyxDQUFDLENBQVI7QUFDRCxpQkFBTyxDQUFQO0FBQ0E7O0FBRUQsZ0JBQVEsS0FBS1YsRUFBTCxDQUFRZ0YsRUFBaEI7QUFDQyxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHLEtBQUtqRixFQUFMLENBQVFrRixFQUFSLENBQVcvRSxNQUFqQyxFQUF5QyxFQUFFOEUsRUFBM0MsRUFBK0M7QUFDOUMsbUJBQUtuRCxFQUFMLENBQVFyQixFQUFSLEVBQVksS0FBS1QsRUFBTCxDQUFRa0YsRUFBUixDQUFXRCxFQUFYLENBQVosRUFBNEJsRCxFQUE1QjtBQUNBOztBQUNEOztBQUNELGVBQUssQ0FBTDtBQUNDLGlCQUFLLElBQUlrRCxFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQXpCLEVBQWlDOEUsRUFBRSxLQUFLLENBQXhDLEdBQTRDO0FBQzNDLG1CQUFLbkQsRUFBTCxDQUFRckIsRUFBUixFQUFZLEtBQUtULEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFaLEVBQTRCbEQsRUFBNUI7QUFDQTs7QUFDRDs7QUFDRCxlQUFLLENBQUw7QUFDQyxpQkFBSy9CLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0MsSUFBWCxDQUFnQk4sRUFBaEI7O0FBRUEsaUJBQUssSUFBSUksRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLakYsRUFBTCxDQUFRa0YsRUFBUixDQUFXL0UsTUFBakMsRUFBeUMsRUFBRThFLEVBQTNDLEVBQStDO0FBQzlDLG1CQUFLbkQsRUFBTCxDQUFRckIsRUFBUixFQUFZLEtBQUtULEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFaLEVBQTRCbEQsRUFBNUI7QUFDQTs7QUFDRDtBQWpCRjs7QUFvQkF0QixRQUFBQSxFQUFFLENBQUN3RCxPQUFIO0FBQ0E7QUF6SWEsS0FBZjs7QUE0SUEsUUFBSW1CLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVyRixFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFFMUIsV0FBS0QsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsV0FBS0MsRUFBTCxHQUFVQSxFQUFWO0FBRUEsVUFBSSxLQUFLQSxFQUFMLENBQVFDLEVBQVIsQ0FBV0MsRUFBWCxDQUFjQyxNQUFkLEdBQXVCLENBQTNCLEVBQ0MsS0FBS0YsRUFBTCxHQUFVLEtBQUtELEVBQUwsQ0FBUUMsRUFBUixDQUFXQyxFQUFYLENBQWMsQ0FBZCxDQUFWLENBREQsS0FHQyxLQUFLRCxFQUFMLEdBQVUsSUFBVjtBQUVELFdBQUtvRixNQUFMLEdBQWMsQ0FDYjtBQUFFO0FBQUlDLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BRGEsRUFFYjtBQUFFO0FBQUlGLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BRmEsRUFHYjtBQUFFO0FBQUlGLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BSGEsRUFJYjtBQUFFO0FBQUlGLFFBQUFBLFFBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjs7QUFBaUM7QUFBSUMsUUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUE1Qzs7QUFBMEQ7QUFBSUMsUUFBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFEO0FBQXpFLE9BSmEsQ0FBZDtBQUtBLEtBZkQ7O0FBaUJBSixJQUFBQSxFQUFFLENBQUMvRSxTQUFILEdBQWU7QUFDZG9GLE1BQUFBLEVBQUUsRUFBRSxZQUFVOUUsRUFBVixFQUFjK0UsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxZQUExQixFQUF3QztBQUMzQ2xGLFFBQUFBLEVBQUUsQ0FBQ21GLEVBQUgsQ0FBTSxDQUFDLENBQVAsRUFBVUosRUFBVixFQUFjQyxFQUFkLEVBQWtCQyxFQUFsQixFQUFzQkMsWUFBdEI7O0FBRUEsWUFBSSxLQUFLNUYsRUFBVCxFQUFhO0FBRVosY0FBSSxDQUFDVSxFQUFFLENBQUN1QixFQUFSLEVBQVk7QUFFWCxnQkFBSTZELEVBQUUsR0FBRyxLQUFLVixNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsZ0JBQUlXLEVBQUUsR0FBRyxLQUFLWCxNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsZ0JBQUlZLEVBQUUsR0FBRyxLQUFLWixNQUFMLENBQVksQ0FBWixDQUFUO0FBQ0EsZ0JBQUlhLEVBQUUsR0FBRyxLQUFLYixNQUFMLENBQVksQ0FBWixDQUFUO0FBRUEsZ0JBQUljLEVBQUUsR0FBRyxFQUFUO0FBQUEsZ0JBQWFDLEVBQUUsR0FBRyxFQUFsQjs7QUFFQSxnQkFBSSxLQUFLbkcsRUFBTCxDQUFRTyxFQUFSLElBQWMsQ0FBbEIsRUFBcUI7QUFDcEIsa0JBQUlzRSxDQUFDLEdBQUdsRixHQUFHLENBQUNpQixFQUFKLENBQU9GLEVBQUUsQ0FBQ0csRUFBVixDQUFSO0FBQ0Esa0JBQUl1RixDQUFDLEdBQUcsQ0FBQ3JGLElBQUksQ0FBQ0csR0FBTCxDQUFTMkQsQ0FBVCxDQUFUO0FBQ0Esa0JBQUl3QixDQUFDLEdBQUd0RixJQUFJLENBQUNDLEdBQUwsQ0FBUzZELENBQVQsQ0FBUjtBQUVBcUIsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFZLENBQVIsR0FBWVgsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVSxDQUE1QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFULEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVksQ0FBUixHQUFZWCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFVLENBQTVCO0FBQ0FGLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVQsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRWSxDQUFSLEdBQVlYLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVUsQ0FBNUI7QUFFQUQsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQUNWLEVBQUUsQ0FBQyxDQUFELENBQUgsR0FBU1csQ0FBVCxHQUFhVixFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFXLENBQTdCO0FBQ0FGLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFDVixFQUFFLENBQUMsQ0FBRCxDQUFILEdBQVNXLENBQVQsR0FBYVYsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVyxDQUE3QjtBQUNBRixjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBQ1YsRUFBRSxDQUFDLENBQUQsQ0FBSCxHQUFTVyxDQUFULEdBQWFWLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVcsQ0FBN0I7QUFDQSxhQVpELE1BYUs7QUFDSixrQkFBSTdFLENBQUMsR0FBR2QsRUFBRSxDQUFDZSxFQUFYO0FBQ0Esa0JBQUlDLEVBQUUsR0FBRyxNQUFNRixDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0Esa0JBQUlHLEVBQUUsR0FBRyxNQUFNSCxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBQ0Esa0JBQUlJLEVBQUUsR0FBRyxNQUFNSixDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQXZCO0FBRUEwRSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsTUFBTSxNQUFNMUUsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUEwQkUsRUFBbEM7QUFDQXdFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUXZFLEVBQUUsR0FBR0MsRUFBYjtBQUNBc0UsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLE1BQU0xRSxDQUFDLENBQUMsQ0FBRCxDQUFQLEdBQWFBLENBQUMsQ0FBQyxDQUFELENBQWQsR0FBb0IsTUFBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUExQztBQUVBMkUsY0FBQUEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFReEUsRUFBRSxHQUFHQyxFQUFiO0FBQ0F1RSxjQUFBQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsTUFBTSxNQUFNM0UsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUEwQkUsRUFBbEM7QUFDQXlFLGNBQUFBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxNQUFNM0UsQ0FBQyxDQUFDLENBQUQsQ0FBUCxHQUFhQSxDQUFDLENBQUMsQ0FBRCxDQUFkLEdBQW9CLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVAsR0FBYUEsQ0FBQyxDQUFDLENBQUQsQ0FBMUM7QUFDQTs7QUFFRCxnQkFBSThFLEVBQUUsR0FBRyxFQUFUO0FBQUEsZ0JBQWFDLEVBQUUsR0FBRyxFQUFsQjtBQUFBLGdCQUFzQkMsRUFBRSxHQUFHLEVBQTNCO0FBQUEsZ0JBQStCQyxFQUFFLEdBQUcsRUFBcEM7QUFDQTlHLFlBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTUosRUFBTixFQUFVSixFQUFWLEVBQWMsQ0FBQ3hGLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sQ0FBRCxHQUFZWCxFQUFFLENBQUNvQyxFQUFILENBQU0sQ0FBTixDQUExQjtBQUNBbkQsWUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNSCxFQUFOLEVBQVVMLEVBQVYsRUFBY3hGLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sS0FBWSxNQUFNWCxFQUFFLENBQUNvQyxFQUFILENBQU0sQ0FBTixDQUFsQixDQUFkO0FBQ0FuRCxZQUFBQSxHQUFHLENBQUMrRyxDQUFKLENBQU1GLEVBQU4sRUFBVUwsRUFBVixFQUFjLENBQUN6RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLENBQUQsR0FBWVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBMUI7QUFDQW5ELFlBQUFBLEdBQUcsQ0FBQytHLENBQUosQ0FBTUQsRUFBTixFQUFVTixFQUFWLEVBQWN6RixFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEtBQVksTUFBTVgsRUFBRSxDQUFDb0MsRUFBSCxDQUFNLENBQU4sQ0FBbEIsQ0FBZDtBQUVBbkQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNUCxFQUFFO0FBQUM7QUFBSVQsWUFBQUEsUUFBYixFQUF1QmlCLEVBQXZCLEVBQTJCRSxFQUEzQjtBQUNBN0csWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNUCxFQUFFO0FBQUM7QUFBSVQsWUFBQUEsUUFBYixFQUF1QlMsRUFBRTtBQUFDO0FBQUlULFlBQUFBLFFBQTlCLEVBQXdDM0UsRUFBRSxDQUFDRCxFQUEzQztBQUNBZCxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1OLEVBQUU7QUFBQztBQUFJVixZQUFBQSxRQUFiLEVBQXVCaUIsRUFBdkIsRUFBMkJHLEVBQTNCO0FBQ0E5RyxZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU1OLEVBQUU7QUFBQztBQUFJVixZQUFBQSxRQUFiLEVBQXVCVSxFQUFFO0FBQUM7QUFBSVYsWUFBQUEsUUFBOUIsRUFBd0MzRSxFQUFFLENBQUNELEVBQTNDO0FBQ0FkLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUwsRUFBRTtBQUFDO0FBQUlYLFlBQUFBLFFBQWIsRUFBdUJrQixFQUF2QixFQUEyQkUsRUFBM0I7QUFDQTlHLFlBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTUwsRUFBRTtBQUFDO0FBQUlYLFlBQUFBLFFBQWIsRUFBdUJXLEVBQUU7QUFBQztBQUFJWCxZQUFBQSxRQUE5QixFQUF3QzNFLEVBQUUsQ0FBQ0QsRUFBM0M7QUFDQWQsWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNSixFQUFFO0FBQUM7QUFBSVosWUFBQUEsUUFBYixFQUF1QmtCLEVBQXZCLEVBQTJCQyxFQUEzQjtBQUNBN0csWUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNSixFQUFFO0FBQUM7QUFBSVosWUFBQUEsUUFBYixFQUF1QlksRUFBRTtBQUFDO0FBQUlaLFlBQUFBLFFBQTlCLEVBQXdDM0UsRUFBRSxDQUFDRCxFQUEzQztBQUVBO0FBQ0Msa0JBQUlrRyxHQUFHLEdBQUdoSCxHQUFHLENBQUNpSCxDQUFKLENBQU1sRyxFQUFFLENBQUNzQyxFQUFULEVBQWEsR0FBYixDQUFWO0FBQ0E4QyxjQUFBQSxFQUFFO0FBQUM7QUFBSVIsY0FBQUEsS0FBUCxHQUFlUyxFQUFFO0FBQUM7QUFBSVQsY0FBQUEsS0FBUCxHQUFlVSxFQUFFO0FBQUM7QUFBSVYsY0FBQUEsS0FBUCxHQUFlVyxFQUFFO0FBQUM7QUFBSVgsY0FBQUEsS0FBUCxHQUFlLENBQUNxQixHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVNBLEdBQUcsQ0FBQyxDQUFELENBQVosRUFBaUJBLEdBQUcsQ0FBQyxDQUFELENBQXBCLEVBQXlCakcsRUFBRSxDQUFDd0IsRUFBSCxHQUFRLEdBQWpDLENBQTVEO0FBQ0E7QUFFRDtBQUNDLGtCQUFJQyxFQUFFLEdBQUdwQixJQUFJLENBQUNxQixLQUFMLENBQVcxQixFQUFFLENBQUMyQixFQUFILEdBQVEsS0FBS3JDLEVBQUwsQ0FBUXNDLEVBQTNCLENBQVQ7QUFDQSxrQkFBSUMsRUFBRSxHQUFHeEIsSUFBSSxDQUFDcUIsS0FBTCxDQUFXMUIsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLEtBQUtyQyxFQUFMLENBQVFzQyxFQUEzQixDQUFUO0FBRUEsa0JBQUl1RSxFQUFKLEVBQVFDLEVBQVIsRUFBWUMsRUFBWixFQUFnQkMsRUFBaEI7QUFFQSxrQkFBSUMsRUFBRSxHQUFHLEtBQUtuSCxFQUFMLENBQVFvSCxhQUFSLENBQXNCLEtBQUtwSCxFQUFMO0FBQVE7QUFBSXFFLGNBQUFBLEtBQVosQ0FBa0JDLFlBQWxCLENBQStCLEtBQUtwRSxFQUFMLENBQVFxRSxnQkFBdkMsRUFBeURHLGNBQXpELENBQXdFLENBQXhFLENBQXRCLENBQVQ7O0FBQ0Esa0JBQUl5QyxFQUFKLEVBQVE7QUFDUCxvQkFBSUUsRUFBRSxHQUFHRixFQUFFLENBQUN4QyxLQUFILEdBQVcsS0FBS3pFLEVBQUwsQ0FBUXNDLEVBQTVCO0FBQ0Esb0JBQUk4RSxFQUFFLEdBQUdILEVBQUUsQ0FBQ3ZDLE1BQUgsR0FBWSxLQUFLMUUsRUFBTCxDQUFRMkUsRUFBN0I7QUFFQSxvQkFBSWtDLEVBQUUsR0FBR0ksRUFBRSxDQUFDdkQsQ0FBSCxHQUFPdkIsRUFBRSxHQUFHZ0YsRUFBckI7QUFDQSxvQkFBSUwsRUFBRSxHQUFHRCxFQUFFLEdBQUdNLEVBQWQ7QUFDQSxvQkFBSUosRUFBRSxHQUFJRSxFQUFFLENBQUN0RCxDQUFILEdBQU9zRCxFQUFFLENBQUN2QyxNQUFWLEdBQW1CbkMsRUFBRSxHQUFHNkUsRUFBbEM7QUFDQSxvQkFBSUosRUFBRSxHQUFHRCxFQUFFLEdBQUdLLEVBQWQ7QUFDQSxlQVJELE1BUU87QUFDTixvQkFBSUQsRUFBRSxHQUFHLE1BQU0sS0FBS25ILEVBQUwsQ0FBUXNDLEVBQXZCO0FBQ0Esb0JBQUk4RSxFQUFFLEdBQUcsTUFBTSxLQUFLcEgsRUFBTCxDQUFRMkUsRUFBdkI7QUFFQSxvQkFBSWtDLEVBQUUsR0FBRzFFLEVBQUUsR0FBR2dGLEVBQWQ7QUFDQSxvQkFBSUwsRUFBRSxHQUFHRCxFQUFFLEdBQUdNLEVBQWQ7QUFDQSxvQkFBSUosRUFBRSxHQUFJLE1BQU14RSxFQUFFLEdBQUc2RSxFQUFyQjtBQUNBLG9CQUFJSixFQUFFLEdBQUdELEVBQUUsR0FBR0ssRUFBZDtBQUNBOztBQUVEdEIsY0FBQUEsRUFBRTtBQUFDO0FBQUlQLGNBQUFBLFNBQVAsQ0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ3NCLEVBQUQsRUFBS0csRUFBTCxDQUF0QjtBQUNBakIsY0FBQUEsRUFBRTtBQUFDO0FBQUlSLGNBQUFBLFNBQVAsQ0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ3NCLEVBQUQsRUFBS0UsRUFBTCxDQUF0QjtBQUNBZixjQUFBQSxFQUFFO0FBQUM7QUFBSVQsY0FBQUEsU0FBUCxDQUFpQixDQUFqQixJQUFzQixDQUFDdUIsRUFBRCxFQUFLQyxFQUFMLENBQXRCO0FBQ0FkLGNBQUFBLEVBQUU7QUFBQztBQUFJVixjQUFBQSxTQUFQLENBQWlCLENBQWpCLElBQXNCLENBQUN1QixFQUFELEVBQUtFLEVBQUwsQ0FBdEI7QUFDQTs7QUFFRCxnQkFBSXBCLFlBQVksQ0FBQ3lCLFVBQWpCLEVBQTZCO0FBQzVCekIsY0FBQUEsWUFBWSxDQUFDeUIsVUFBYixDQUF3QixLQUFLckgsRUFBTCxDQUFRcUUsZ0JBQWhDO0FBQ0E7O0FBRUR1QixZQUFBQSxZQUFZLENBQUMwQixVQUFiLENBQXdCeEIsRUFBeEI7QUFDQUYsWUFBQUEsWUFBWSxDQUFDMEIsVUFBYixDQUF3QnZCLEVBQXhCO0FBQ0FILFlBQUFBLFlBQVksQ0FBQzBCLFVBQWIsQ0FBd0J0QixFQUF4QjtBQUNBSixZQUFBQSxZQUFZLENBQUMwQixVQUFiLENBQXdCckIsRUFBeEI7O0FBRUEsZ0JBQUksQ0FBQ0wsWUFBWSxDQUFDMkIsZ0JBQWxCLEVBQW9DO0FBQ25DM0IsY0FBQUEsWUFBWSxDQUFDMkIsZ0JBQWIsR0FBZ0MsSUFBSTVILEdBQUcsQ0FBQzZILFVBQVIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS3hILEVBQUwsQ0FBUXFFLGdCQUFqQyxDQUFoQztBQUNBLGFBRkQsTUFFTztBQUNOLGtCQUFJb0QsY0FBYyxHQUFHN0IsWUFBWSxDQUFDMkIsZ0JBQWxDOztBQUVBLGtCQUFJRSxjQUFjLENBQUNwRCxnQkFBZixJQUFtQyxLQUFLckUsRUFBTCxDQUFRcUUsZ0JBQS9DLEVBQWlFO0FBQ2hFb0QsZ0JBQUFBLGNBQWMsQ0FBQ0MsVUFBZixJQUE2QixDQUE3QjtBQUNBLGVBRkQsTUFFTztBQUNOOUIsZ0JBQUFBLFlBQVksQ0FBQytCLGNBQWIsQ0FBNEJGLGNBQTVCO0FBQ0E3QixnQkFBQUEsWUFBWSxDQUFDMkIsZ0JBQWIsR0FBZ0MsSUFBSTVILEdBQUcsQ0FBQzZILFVBQVIsQ0FDL0JDLGNBQWMsQ0FBQ0csVUFBZixHQUE0QkgsY0FBYyxDQUFDQyxVQURaLEVBRS9CLENBRitCLEVBRTVCLEtBQUsxSCxFQUFMLENBQVFxRSxnQkFGb0IsQ0FBaEM7QUFHQTtBQUNEO0FBQ0Q7QUFDRDs7QUFFRDNELFFBQUFBLEVBQUUsQ0FBQ21GLEVBQUgsQ0FBTSxDQUFOLEVBQVNKLEVBQVQsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJDLFlBQXJCO0FBQ0EsT0F6SGE7QUEySGRpQyxNQUFBQSxFQUFFLEVBQUUsWUFBVXBDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLFlBQXRCLEVBQW9DO0FBQ3ZDLGdCQUFRLEtBQUs3RixFQUFMLENBQVFnRixFQUFoQjtBQUNDLGVBQUssQ0FBTDtBQUNDLGlCQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQWpDLEVBQXlDLEVBQUU4RSxFQUEzQyxFQUErQztBQUM5QyxtQkFBS1EsRUFBTCxDQUFRLEtBQUt6RixFQUFMLENBQVFrRixFQUFSLENBQVdELEVBQVgsQ0FBUixFQUF3QlMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsWUFBcEM7QUFDQTs7QUFDRDs7QUFFRCxlQUFLLENBQUw7QUFDQyxpQkFBSyxJQUFJWixFQUFFLEdBQUcsS0FBS2pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBVy9FLE1BQXpCLEVBQWlDOEUsRUFBRSxLQUFLLENBQXhDLEdBQTRDO0FBQzNDLG1CQUFLUSxFQUFMLENBQVEsS0FBS3pGLEVBQUwsQ0FBUWtGLEVBQVIsQ0FBV0QsRUFBWCxDQUFSLEVBQXdCUyxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0NDLEVBQWhDLEVBQW9DQyxZQUFwQztBQUNBOztBQUNEOztBQUVELGVBQUssQ0FBTDtBQUNDLGlCQUFLN0YsRUFBTCxDQUFRa0YsRUFBUixDQUFXNkMsT0FBWCxDQUFtQixVQUFVcEgsRUFBVixFQUFjO0FBQ2hDQSxjQUFBQSxFQUFFLENBQUNxSCxLQUFILEdBQVdwSSxHQUFHLENBQUNxSSxDQUFKLENBQU1yQyxFQUFOLEVBQVVqRixFQUFFLENBQUNELEVBQWIsQ0FBWDtBQUNBLGFBRkQ7QUFJQSxpQkFBS1YsRUFBTCxDQUFRa0YsRUFBUixDQUFXQyxJQUFYLENBQWdCLFVBQVVMLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUMvQixrQkFBSUQsQ0FBQyxDQUFDa0QsS0FBRixHQUFVakQsQ0FBQyxDQUFDaUQsS0FBaEIsRUFDQyxPQUFPLENBQVA7QUFDRCxrQkFBSWxELENBQUMsQ0FBQ2tELEtBQUYsR0FBVWpELENBQUMsQ0FBQ2lELEtBQWhCLEVBQ0MsT0FBTyxDQUFDLENBQVI7QUFDRCxxQkFBTyxDQUFQO0FBQ0EsYUFORDtBQVFBLGlCQUFLaEksRUFBTCxDQUFRa0YsRUFBUixDQUFXNkMsT0FBWCxDQUFtQixVQUFVcEgsRUFBVixFQUFjO0FBQ2hDLG1CQUFLOEUsRUFBTCxDQUFROUUsRUFBUixFQUFZK0UsRUFBWixFQUFnQkMsRUFBaEIsRUFBb0JDLEVBQXBCLEVBQXdCQyxZQUF4QjtBQUNBLGFBRkQsRUFFRyxJQUZIO0FBR0E7QUE3QkY7QUErQkE7QUEzSmEsS0FBZjs7QUE4SkEsUUFBSXFDLEVBQUUsR0FBRyxTQUFMQSxFQUFLLENBQVVuSSxFQUFWLEVBQWNFLEVBQWQsRUFBa0JrSSxFQUFsQixFQUFzQjtBQUM5QixVQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNBLFdBQUtySSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLRSxFQUFMLEdBQVVBLEVBQVYsQ0FIOEIsQ0FLOUI7O0FBRUEsZUFBU29JLEVBQVQsR0FBYztBQUNiLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxJQUFWO0FBQ0EsYUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUVBUCxRQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU0ySSxFQUFOLENBQVMsSUFBVCxFQVJhLENBUUc7O0FBRWhCLGFBQUtDLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGVBQUtDLEVBQUwsR0FBVSxLQUFLUCxFQUFmO0FBQ0EsZUFBS0QsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUhEOztBQUtBLGFBQUtPLEVBQUw7QUFDQTs7QUFFRFIsTUFBQUEsRUFBRSxDQUFDaEksU0FBSCxHQUFlO0FBQ2QwSSxRQUFBQSxFQUFFLEVBQUUsY0FBWTtBQUNmLGVBQUtGLEVBQUw7QUFDQSxTQUhhO0FBS2RHLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWN2SSxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0I7QUFDekIwRyxVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU1pSixFQUFOLENBQVNELEVBQVQsRUFBYWIsRUFBYixFQUFpQixJQUFqQixFQUR5QixDQUNEOztBQUV4QixjQUFJZSxFQUFFLEdBQUdmLEVBQUUsQ0FBQ2UsRUFBWjtBQUNBLGNBQUlDLFVBQVUsR0FBR3JKLEVBQUUsQ0FBQ29KLEVBQXBCO0FBQ0EsY0FBSUUsRUFBRSxHQUFHSixFQUFUO0FBQ0EsY0FBSUssRUFBRSxHQUFHLENBQVQ7O0FBRUEsY0FBSSxLQUFLQyxFQUFMLEdBQVUsUUFBZCxFQUF3QjtBQUV2QixnQkFBSUMsRUFBRSxHQUFHLEtBQUtWLEVBQUwsR0FBVUcsRUFBRSxHQUFHLEtBQUtNLEVBQTdCOztBQUVBLG1CQUFPQyxFQUFFLElBQUksR0FBYixFQUFrQjtBQUNqQixrQkFBSUMsRUFBRSxHQUFHLEtBQUtGLEVBQUwsR0FBVSxLQUFWLEdBQWtCLEdBQWxCLEdBQXdCLENBQUMsTUFBTSxLQUFLVCxFQUFaLElBQWtCLEtBQUtTLEVBQXhEO0FBQ0FGLGNBQUFBLEVBQUUsSUFBSUksRUFBTjtBQUNBTixjQUFBQSxFQUFFLElBQUlNLEVBQU47QUFDQUwsY0FBQUEsVUFBVSxJQUFJSyxFQUFkOztBQUVBLGtCQUFJLEtBQUtqQixFQUFMLElBQVcsSUFBWCxJQUFtQlcsRUFBRSxHQUFHLEtBQUtYLEVBQWpDLEVBQXFDO0FBQ3BDSixnQkFBQUEsRUFBRSxDQUFDc0IsV0FBSDtBQUNBO0FBQ0E7O0FBRUR0QixjQUFBQSxFQUFFLENBQUNlLEVBQUgsR0FBUUEsRUFBUjtBQUNBcEosY0FBQUEsRUFBRSxDQUFDb0osRUFBSCxHQUFRQyxVQUFSO0FBRUEsa0JBQUkxSSxFQUFFLElBQUl1SSxFQUFFLEdBQUcsQ0FBZixFQUNDckosR0FBRyxDQUFDK0osRUFBSixDQUFPdkIsRUFBRSxDQUFDMUgsRUFBVixFQUFjQSxFQUFkLEVBQWtCMEgsRUFBRSxDQUFDd0IsRUFBckIsRUFBeUJQLEVBQUUsR0FBR0osRUFBOUI7QUFFRCxrQkFBSXZILEVBQUUsSUFBSXVILEVBQUUsR0FBRyxDQUFmLEVBQ0NySixHQUFHLENBQUNpSyxNQUFKLENBQVd6QixFQUFFLENBQUMxRyxFQUFkLEVBQWtCQSxFQUFsQixFQUFzQjBHLEVBQUUsQ0FBQzBCLFlBQXpCLEVBQXVDVCxFQUFFLEdBQUdKLEVBQTVDLEVBbEJnQixDQW9CakI7O0FBQ0EsbUJBQUtOLEVBQUwsR0FBVSxLQUFLb0IsRUFBZjs7QUFFQSxtQkFBSyxJQUFJOUUsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLOEUsRUFBM0IsRUFBK0IsRUFBRTlFLEVBQWpDLEVBQXFDO0FBQ3BDLG9CQUFJbUQsRUFBRSxDQUFDNEIsRUFBSCxDQUFNN0osTUFBTixJQUFnQixDQUFwQixFQUNDO0FBRUQsb0JBQUksS0FBSzRKLEVBQUwsSUFBVyxDQUFmLEVBQ0MsS0FBS3JCLEVBQUwsR0FBVSxDQUFWLENBREQsS0FHQyxLQUFLQSxFQUFMLEdBQVV6RCxFQUFFLElBQUksS0FBSzhFLEVBQUwsR0FBVSxDQUFkLENBQVo7QUFFRCxvQkFBSXBKLEVBQUUsR0FBR3lILEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTUMsR0FBTixFQUFUO0FBQ0E3QixnQkFBQUEsRUFBRSxDQUFDbEQsRUFBSCxDQUFNZ0YsT0FBTixDQUFjdkosRUFBZDtBQUVBLG9CQUFJc0UsRUFBRSxJQUFJLENBQVYsRUFDQ3RFLEVBQUUsQ0FBQ3dKLEVBQUgsR0FERCxLQUdDeEosRUFBRSxDQUFDeUosRUFBSDtBQUVEekosZ0JBQUFBLEVBQUUsQ0FBQ3FJLEVBQUgsQ0FBTUssRUFBTjtBQUNBLGtCQUFFQyxFQUFGO0FBQ0E7O0FBRUQsbUJBQUtSLEVBQUwsR0FBVSxHQUFWO0FBQ0FVLGNBQUFBLEVBQUUsSUFBSSxHQUFOOztBQUVBLGtCQUFJLEtBQUtmLEVBQUwsSUFBVyxJQUFYLElBQW1CLEVBQUUsS0FBS0gsRUFBUCxJQUFhLEtBQUtHLEVBQXpDLEVBQTZDO0FBQzVDTCxnQkFBQUEsRUFBRSxDQUFDc0IsV0FBSDtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxpQkFBS1osRUFBTCxHQUFVVSxFQUFWO0FBQ0E7O0FBQ0RMLFVBQUFBLEVBQUUsSUFBSUUsRUFBTjtBQUNBakIsVUFBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVFBLEVBQVI7QUFFQSxjQUFJekksRUFBSixFQUNDZCxHQUFHLENBQUN5SyxDQUFKLENBQU1qQyxFQUFFLENBQUMxSCxFQUFULEVBQWFBLEVBQWI7QUFFRCxjQUFJZ0IsRUFBSixFQUNDOUIsR0FBRyxDQUFDMEssQ0FBSixDQUFNbEMsRUFBRSxDQUFDMUcsRUFBVCxFQUFhQSxFQUFiO0FBRUQsaUJBQU80SCxFQUFQO0FBQ0E7QUFsRmEsT0FBZixDQXpCOEIsQ0E4RzlCOztBQUVBLGVBQVNpQixFQUFULEdBQWM7QUFDYixhQUFLaEMsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLRyxFQUFMLEdBQVUsQ0FBVjtBQUNBLGFBQUtDLEVBQUwsR0FBVSxDQUFWO0FBRUFQLFFBQUFBLEVBQUUsQ0FBQ25JLEVBQUgsQ0FBTTJJLEVBQU4sQ0FBUyxJQUFULEVBTGEsQ0FLRzs7QUFFaEIsYUFBS0MsRUFBTCxHQUFVLFlBQVk7QUFDckIsZUFBSzJCLEVBQUwsR0FBVSxLQUFLakMsRUFBZjtBQUNBLFNBRkQ7O0FBSUEsYUFBS00sRUFBTDtBQUNBOztBQUVEMEIsTUFBQUEsRUFBRSxDQUFDbEssU0FBSCxHQUFlO0FBQ2QwSSxRQUFBQSxFQUFFLEVBQUUsY0FBWTtBQUNmLGVBQUtGLEVBQUw7QUFDQSxTQUhhO0FBS2RHLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWN2SSxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0I7QUFDekIwRyxVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU1pSixFQUFOLENBQVNELEVBQVQsRUFBYWIsRUFBYixFQUFpQixJQUFqQixFQUR5QixDQUNEOztBQUV4QixjQUFJcUMsRUFBRSxHQUFHckMsRUFBRSxDQUFDZSxFQUFaO0FBQ0EsY0FBSXVCLEVBQUUsR0FBR0QsRUFBRSxHQUFHeEIsRUFBZDtBQUNBLGNBQUkwQixxQkFBcUIsR0FBRzVLLEVBQUUsQ0FBQ29KLEVBQS9CO0FBQ0EsY0FBSXlCLG9CQUFvQixHQUFHRCxxQkFBcUIsR0FBRzFCLEVBQW5EO0FBQ0EsY0FBSTRCLEVBQUUsR0FBR25LLEVBQUUsR0FBR2QsR0FBRyxDQUFDa0wsQ0FBSixDQUFNbEwsR0FBRyxDQUFDbUwsQ0FBSixDQUFNckssRUFBTixFQUFVMEgsRUFBRSxDQUFDd0IsRUFBYixDQUFOLENBQUgsR0FBNkIsQ0FBeEM7QUFDQSxjQUFJTixFQUFFLEdBQUcsQ0FBVDs7QUFFQSxjQUFJdUIsRUFBRSxHQUFHLFFBQVQsRUFBbUI7QUFDbEIsZ0JBQUlHLEVBQUUsR0FBR0gsRUFBRSxHQUFHLEtBQUtJLEVBQW5CO0FBQ0EsZ0JBQUl6QixFQUFFLEdBQUcsS0FBS2dCLEVBQUwsR0FBVVEsRUFBbkI7QUFFQSxnQkFBSUUsRUFBRSxHQUFHRixFQUFFLEdBQUcsS0FBTCxHQUNSLE1BQU0sS0FBS1IsRUFESCxHQUNRLENBQUMsTUFBTSxLQUFLQSxFQUFaLElBQWtCUSxFQURuQztBQUdBLGdCQUFJRyxFQUFFLEdBQUcsRUFBVDs7QUFFQSxtQkFBTzNCLEVBQUUsR0FBRyxHQUFaLEVBQWlCO0FBQ2hCLGtCQUFJNEIsRUFBRSxHQUFHWCxFQUFFLEdBQUdTLEVBQUUsR0FBR2pDLEVBQW5CO0FBRUEsa0JBQUl2SSxFQUFKLEVBQ0NkLEdBQUcsQ0FBQytKLEVBQUosQ0FBT3dCLEVBQVAsRUFBVy9DLEVBQUUsQ0FBQ3dCLEVBQWQsRUFBa0JsSixFQUFsQixFQUFzQndLLEVBQXRCO0FBRUQ5QyxjQUFBQSxFQUFFLENBQUNlLEVBQUgsR0FBUWlDLEVBQVI7QUFDQXhMLGNBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTWpDLEVBQUUsQ0FBQzFILEVBQVQsRUFBYXlLLEVBQWI7QUFDQXBMLGNBQUFBLEVBQUUsQ0FBQ29KLEVBQUgsR0FBUXZKLEdBQUcsQ0FBQ3lMLENBQUosQ0FBTVYscUJBQU4sRUFBNkJDLG9CQUE3QixFQUFtRE0sRUFBbkQsQ0FBUixDQVJnQixDQVVoQjs7QUFDQSxtQkFBS3ZDLEVBQUwsR0FBVSxLQUFLb0IsRUFBZjs7QUFFQSxtQkFBSyxJQUFJOUUsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLOEUsRUFBM0IsRUFBK0IsRUFBRTlFLEVBQWpDLEVBQXFDO0FBQ3BDLG9CQUFJbUQsRUFBRSxDQUFDNEIsRUFBSCxDQUFNN0osTUFBTixJQUFnQixDQUFwQixFQUNDO0FBRUQsb0JBQUksS0FBSzRKLEVBQUwsSUFBVyxDQUFmLEVBQ0MsS0FBS3JCLEVBQUwsR0FBVSxDQUFWLENBREQsS0FHQyxLQUFLQSxFQUFMLEdBQVV6RCxFQUFFLElBQUksS0FBSzhFLEVBQUwsR0FBVSxDQUFkLENBQVo7QUFFRCxvQkFBSXBKLEVBQUUsR0FBR3lILEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTUMsR0FBTixFQUFUO0FBQ0E3QixnQkFBQUEsRUFBRSxDQUFDbEQsRUFBSCxDQUFNZ0YsT0FBTixDQUFjdkosRUFBZDtBQUVBLG9CQUFJc0UsRUFBRSxJQUFJLENBQVYsRUFDQ3RFLEVBQUUsQ0FBQ3dKLEVBQUgsR0FERCxLQUdDeEosRUFBRSxDQUFDeUosRUFBSDtBQUVEekosZ0JBQUFBLEVBQUUsQ0FBQ3FJLEVBQUgsQ0FBTUMsRUFBRSxJQUFJLE1BQU1pQyxFQUFWLENBQVI7QUFDQSxrQkFBRTVCLEVBQUY7QUFDQTs7QUFFRDRCLGNBQUFBLEVBQUUsSUFBSSxNQUFNRixFQUFaO0FBQ0F4QixjQUFBQSxFQUFFLElBQUksR0FBTjtBQUNBOztBQUVELGlCQUFLZ0IsRUFBTCxHQUFVaEIsRUFBVjtBQUNBOztBQUVEcEIsVUFBQUEsRUFBRSxDQUFDZSxFQUFILEdBQVF1QixFQUFSO0FBRUEsY0FBSWhLLEVBQUosRUFDQ2QsR0FBRyxDQUFDeUssQ0FBSixDQUFNakMsRUFBRSxDQUFDMUgsRUFBVCxFQUFhQSxFQUFiO0FBRUQsY0FBSWdCLEVBQUosRUFDQzlCLEdBQUcsQ0FBQzBLLENBQUosQ0FBTWxDLEVBQUUsQ0FBQzFHLEVBQVQsRUFBYUEsRUFBYjtBQUVELGlCQUFPNEgsRUFBUDtBQUNBO0FBMUVhLE9BQWYsQ0E5SDhCLENBMk05Qjs7QUFFQSxlQUFTZ0MsRUFBVCxHQUFjO0FBQ2IsYUFBSzVLLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS3FDLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS3pCLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBSzJCLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBS3NJLEVBQUwsR0FBVSxFQUFWO0FBQ0E7O0FBRURELE1BQUFBLEVBQUUsQ0FBQ2pMLFNBQUgsR0FBZTtBQUNkbUwsUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZixlQUFLdEosRUFBTCxHQUFVLEtBQVY7O0FBRUEsZUFBSyxJQUFJdUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDtBQUNBQyxZQUFBQSxFQUFFLENBQUMxTCxFQUFILENBQU0rSSxFQUFOLENBQVMsS0FBS3JJLEVBQWQsRUFBa0IsSUFBbEI7QUFFQSxnQkFBSWdMLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNQyxFQUFWLEVBQ0NGLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTTBKLFdBQU47QUFDRDtBQUNELFNBWGE7QUFhZFMsUUFBQUEsRUFBRSxFQUFFLGNBQVk7QUFDZi9CLFVBQUFBLEVBQUUsQ0FBQ25JLEVBQUgsQ0FBTTRMLEVBQU4sQ0FBU3pELEVBQVQsRUFBYSxJQUFiLEVBRGUsQ0FDSzs7QUFDcEIsZUFBS29ELEVBQUw7QUFDQSxTQWhCYTtBQWtCZHBCLFFBQUFBLEVBQUUsRUFBRSxjQUFZO0FBQ2ZoQyxVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU02TCxFQUFOLENBQVMxRCxFQUFULEVBQWEsSUFBYixFQURlLENBQ0s7O0FBQ3BCLGVBQUtvRCxFQUFMO0FBQ0EsU0FyQmE7QUF1QmR4QyxRQUFBQSxFQUFFLEVBQUUsWUFBVUMsRUFBVixFQUFjO0FBQ2pCYixVQUFBQSxFQUFFLENBQUNuSSxFQUFILENBQU04TCxFQUFOLENBQVM5QyxFQUFULEVBQWFiLEVBQWIsRUFBaUIsSUFBakIsRUFEaUIsQ0FDTzs7QUFFeEIsZUFBSzRELEVBQUwsQ0FBUS9DLEVBQVI7QUFDQSxTQTNCYTtBQTZCZHlDLFFBQUFBLEVBQUUsRUFBRSxZQUFVTyxFQUFWLEVBQWM7QUFDakIsaUJBQU8sS0FBS1YsRUFBTCxDQUFRVSxFQUFSLEVBQVlqTSxFQUFuQjtBQUNBLFNBL0JhO0FBaUNkZ00sUUFBQUEsRUFBRSxFQUFFLFlBQVUvQyxFQUFWLEVBQWM7QUFDakIsZUFBSyxJQUFJd0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQ3NMLENBQUMsRUFBckMsRUFBeUM7QUFDeEMsaUJBQUtGLEVBQUwsQ0FBUUUsQ0FBUixFQUFXekwsRUFBWCxDQUFjZ0osRUFBZCxDQUFpQkMsRUFBakIsRUFBcUIsS0FBS3ZJLEVBQTFCLEVBQThCLElBQTlCO0FBQ0E7QUFDRCxTQXJDYTtBQXVDZHdMLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDckIsZUFBS2IsRUFBTCxDQUFRYyxJQUFSLENBQWE7QUFDWnJNLFlBQUFBLEVBQUUsRUFBRSxJQUFJa0ksRUFBSixDQUFPbkksRUFBUCxFQUFXb00sRUFBWCxFQUFlaEUsRUFBZixDQURRO0FBRVp3RCxZQUFBQSxFQUFFLEVBQUVTO0FBRlEsV0FBYjtBQUlBLFNBNUNhO0FBOENkcEssUUFBQUEsRUFBRSxFQUFFLFlBQVV2QixFQUFWLEVBQWM2TCxFQUFkLEVBQWtCdkssRUFBbEIsRUFBc0I7QUFDekIsZUFBSyxJQUFJMEosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsZ0JBQUlDLEVBQUUsR0FBRyxLQUFLSCxFQUFMLENBQVFFLENBQVIsQ0FBVDtBQUVBLGdCQUFJYSxFQUFFLElBQUlaLEVBQUUsQ0FBQ0MsRUFBSCxDQUFNVyxFQUFoQixFQUNDWixFQUFFLENBQUMxTCxFQUFILENBQU1rRSxFQUFOLENBQVN6RCxFQUFULEVBQWFzQixFQUFiO0FBQ0Q7QUFDRCxTQXJEYTtBQXVEZCtELFFBQUFBLEVBQUUsRUFBRSxZQUFVd0csRUFBVixFQUFjNUcsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCQyxZQUExQixFQUF3QztBQUMzQyxlQUFLLElBQUk0RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtGLEVBQUwsQ0FBUXBMLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxnQkFBSUMsRUFBRSxHQUFHLEtBQUtILEVBQUwsQ0FBUUUsQ0FBUixDQUFUO0FBRUEsZ0JBQUlhLEVBQUUsSUFBSVosRUFBRSxDQUFDQyxFQUFILENBQU1XLEVBQWhCLEVBQ0NaLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTThILEVBQU4sQ0FBU3BDLEVBQVQsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJDLFlBQXJCO0FBQ0Q7QUFDRCxTQTlEYTtBQWdFZDBHLFFBQUFBLEVBQUUsRUFBRSxZQUFVOUwsRUFBVixFQUFjO0FBQ2pCLGVBQUt5QixFQUFMLEdBQVUsSUFBVjs7QUFDQSxlQUFLLElBQUl1SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtGLEVBQUwsQ0FBUXBMLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxnQkFBSUMsRUFBRSxHQUFHLEtBQUtILEVBQUwsQ0FBUUUsQ0FBUixDQUFUOztBQUVBLGdCQUFJQyxFQUFFLENBQUNDLEVBQUgsQ0FBTUMsRUFBVixFQUFjO0FBQ2JGLGNBQUFBLEVBQUUsQ0FBQzFMLEVBQUgsQ0FBTXdNLFFBQU47QUFDQWQsY0FBQUEsRUFBRSxDQUFDMUwsRUFBSCxDQUFNZ0osRUFBTixDQUFTLENBQVQ7QUFDQSxhQUhELE1BS0MwQyxFQUFFLENBQUMxTCxFQUFILENBQU0wSixXQUFOO0FBQ0Q7QUFDRCxTQTVFYTtBQThFZCtDLFFBQUFBLEVBQUUsRUFBRSxZQUFVQyxFQUFWLEVBQWM7QUFDakIsZUFBSyxJQUFJakIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRixFQUFMLENBQVFwTCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsaUJBQUtGLEVBQUwsQ0FBUUUsQ0FBUixFQUFXekwsRUFBWCxDQUFjMk0sRUFBZCxDQUFpQkQsRUFBakI7QUFDQTtBQUNEO0FBbEZhLE9BQWYsQ0FyTjhCLENBMFM5Qjs7QUFFQSxlQUFTRSxFQUFULEdBQWMsQ0FDYjs7QUFFREEsTUFBQUEsRUFBRSxDQUFDdk0sU0FBSCxDQUFhd00sRUFBYixHQUFrQixVQUFVbE0sRUFBVixFQUFjO0FBQy9CLGVBQU95SCxFQUFFLENBQUNuSSxFQUFILENBQU02TSxFQUFOLENBQVMxRSxFQUFULEVBQWF6SCxFQUFiLEVBQWlCLElBQWpCLENBQVAsQ0FEK0IsQ0FDQTtBQUMvQixPQUZELENBL1M4QixDQW1UOUI7OztBQUVBLFdBQUtELEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS2tKLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS2xJLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBS29JLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxXQUFLNUUsRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLOEUsRUFBTCxHQUFVLEVBQVY7QUFDQSxXQUFLK0MsRUFBTCxHQUFVLElBQUlILEVBQUosRUFBVjtBQUNBLFdBQUtJLFNBQUwsR0FBaUIsSUFBSTdFLEVBQUosQ0FBTyxLQUFLcEksRUFBWixFQUFnQixJQUFoQixDQUFqQjtBQUNBLFdBQUtrTixFQUFMLEdBQVUsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVSxFQUFWOztBQUVBLFdBQUtDLEVBQUwsR0FBVSxZQUFZO0FBQ3JCLGFBQUtDLEVBQUwsR0FBVSxJQUFJL0UsRUFBSixFQUFWO0FBQ0EsT0FGRDs7QUFJQSxXQUFLZ0YsRUFBTCxHQUFVLFlBQVk7QUFDckIsYUFBS0QsRUFBTCxHQUFVLElBQUk3QyxFQUFKLEVBQVY7QUFDQSxPQUZEOztBQUlBLFdBQUt0SyxFQUFMLENBQVFxTixFQUFSLENBQVcsSUFBWCxFQXhVOEIsQ0F3VVo7O0FBRWxCLFdBQUssSUFBSXJJLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUcsS0FBS3NJLEVBQTNCLEVBQStCLEVBQUV0SSxFQUFqQyxFQUFxQztBQUNwQyxZQUFJdEUsRUFBRSxHQUFHLElBQUkySyxFQUFKLEVBQVQ7O0FBRUEsYUFBSyxJQUFJa0MsRUFBRSxHQUFHLENBQWQsRUFBaUJBLEVBQUUsR0FBRyxLQUFLUCxFQUFMLENBQVE5TSxNQUE5QixFQUFzQyxFQUFFcU4sRUFBeEMsRUFBNEM7QUFDM0MsY0FBSUMsRUFBRSxHQUFHLEtBQUtSLEVBQUwsQ0FBUU8sRUFBUixDQUFUO0FBQ0E3TSxVQUFBQSxFQUFFLENBQUN1TCxFQUFILENBQU11QixFQUFFLENBQUM1TixFQUFULEVBQWE0TixFQUFFLENBQUM5QixFQUFoQjtBQUNBOztBQUVELGFBQUszQixFQUFMLENBQVFxQyxJQUFSLENBQWExTCxFQUFiO0FBQ0E7O0FBRUQsV0FBS2tJLEVBQUwsR0FBVSxVQUFVbkksRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUUzQjlCLFFBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWCxFQUFlQSxFQUFFLEdBQUdBLEVBQUgsR0FBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF6QjtBQUNBZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBS1QsRUFBWCxFQUFlLEtBQUtsSixFQUFwQjtBQUNBZCxRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQXpCO0FBQ0E5QixRQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBS1IsWUFBWCxFQUF5QixLQUFLcEksRUFBOUI7QUFFQSxhQUFLeUgsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLdUUsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS0MsaUJBQUwsR0FBeUIsS0FBekI7QUFDQWpPLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTSxLQUFLWixFQUFYLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUNBLE9BYkQ7QUFjQSxLQW5XRDs7QUFxV0FoRixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWEwSSxFQUFiLEdBQWtCLFVBQVVySSxFQUFWLEVBQWNnQixFQUFkLEVBQWtCO0FBQ25DLFdBQUttSCxFQUFMLENBQVFuSSxFQUFSLEVBQVlnQixFQUFaO0FBRUEsV0FBS3NJLEVBQUwsQ0FBUXFDLElBQVIsQ0FBYTBCLEtBQWIsQ0FBbUIsS0FBSy9ELEVBQXhCLEVBQTRCLEtBQUs5RSxFQUFqQztBQUNBLFdBQUtBLEVBQUwsQ0FBUS9FLE1BQVIsR0FBaUIsQ0FBakI7QUFFQSxXQUFLaU4sRUFBTCxDQUFRckUsRUFBUjtBQUNBLEtBUEQ7O0FBU0FiLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYTJJLEVBQWIsR0FBa0IsVUFBVUMsRUFBVixFQUFjdkksRUFBZCxFQUFrQmdCLEVBQWxCLEVBQXNCO0FBRXZDLFVBQUksS0FBS2tNLE9BQVQsRUFDQTtBQUNDLGFBQUtJLEVBQUwsQ0FBUXROLEVBQVIsRUFBWWdCLEVBQVo7QUFDQTtBQUNBOztBQUVELFdBQUtnTSxFQUFMLEdBQVUsS0FBS3ZFLEVBQWY7O0FBRUEsVUFBSXpJLEVBQUosRUFBUTtBQUNQZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBS1QsRUFBWCxFQUFlLEtBQUtsSixFQUFwQjs7QUFDQSxZQUFJdUksRUFBRSxHQUFHLE1BQVQsRUFBaUI7QUFDaEIsY0FBSWdGLEtBQUssR0FBRyxFQUFaO0FBQ0FyTyxVQUFBQSxHQUFHLENBQUNzTyxDQUFKLENBQU1ELEtBQU4sRUFBYXZOLEVBQWIsRUFBaUIsS0FBS2tKLEVBQXRCO0FBQ0FoSyxVQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzZDLEVBQVgsRUFBZWUsS0FBZjtBQUNBck8sVUFBQUEsR0FBRyxDQUFDdU8sQ0FBSixDQUFNLEtBQUtqQixFQUFYLEVBQWUsS0FBS0EsRUFBcEIsRUFBd0JqRSxFQUF4QjtBQUNBLFNBTEQsTUFNSztBQUNKckosVUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNLEtBQUtaLEVBQVgsRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCO0FBQ0E7QUFDRCxPQVhELE1BWUs7QUFDSnROLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTSxLQUFLWixFQUFYLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQjtBQUNBOztBQUVELFVBQUl4TCxFQUFKLEVBQ0E7QUFDQzlCLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLUixZQUFYLEVBQXlCLEtBQUtwSSxFQUE5QjtBQUNBOztBQUVELFVBQUk0SCxFQUFKOztBQUVBLFVBQUksS0FBS3FFLEVBQUwsSUFBVyxDQUFDLEtBQUtFLGlCQUFyQixFQUF3QztBQUN2Q3ZFLFFBQUFBLEVBQUUsR0FBRyxLQUFLOEQsRUFBTCxDQUFRcEUsRUFBUixDQUFXQyxFQUFYLEVBQWV2SSxFQUFmLEVBQW1CZ0IsRUFBbkIsQ0FBTDtBQUNBLE9BRkQsTUFHSztBQUNKLFlBQUloQixFQUFKLEVBQ0NkLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWCxFQUFlQSxFQUFmO0FBRUQsWUFBSWdCLEVBQUosRUFDQzlCLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWCxFQUFlQSxFQUFmO0FBRUQ0SCxRQUFBQSxFQUFFLEdBQUcsQ0FBTDtBQUNBLGFBQUtILEVBQUwsSUFBV0YsRUFBWDtBQUNBOztBQUVELFdBQUssSUFBSWhFLEVBQUUsR0FBR3FFLEVBQWQsRUFBa0JyRSxFQUFFLEdBQUcsS0FBS0MsRUFBTCxDQUFRL0UsTUFBL0IsR0FBd0M7QUFDdkMsWUFBSVEsRUFBRSxHQUFHLEtBQUt1RSxFQUFMLENBQVFELEVBQVIsQ0FBVDs7QUFFQSxZQUFJLENBQUN0RSxFQUFFLENBQUN1QixFQUFSLEVBQVk7QUFDWHZCLFVBQUFBLEVBQUUsQ0FBQ3FJLEVBQUgsQ0FBTUMsRUFBTjs7QUFFQSxjQUFJLEtBQUs4RCxFQUFMLENBQVFGLEVBQVIsQ0FBVyxLQUFLM0gsRUFBTCxDQUFRRCxFQUFSLENBQVgsQ0FBSixFQUE2QjtBQUM1QnRFLFlBQUFBLEVBQUUsQ0FBQzRMLEVBQUg7QUFFQSxnQkFBSSxLQUFLNkIsRUFBTCxDQUFRbkosRUFBUixDQUFKLEVBQ0M7QUFDRDtBQUNELFNBVEQsTUFVSztBQUNKdEUsVUFBQUEsRUFBRSxDQUFDcUwsRUFBSCxDQUFNL0MsRUFBTjtBQUVBLGNBQUksS0FBS21GLEVBQUwsQ0FBUW5KLEVBQVIsQ0FBSixFQUNDO0FBQ0Q7O0FBRUQsVUFBRUEsRUFBRjtBQUNBO0FBQ0QsS0FyRUQ7O0FBdUVBaUQsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhK04sRUFBYixHQUFrQixVQUFVbkMsRUFBVixFQUFjO0FBQy9CLFVBQUl0TCxFQUFFLEdBQUcsS0FBS3VFLEVBQUwsQ0FBUStHLEVBQVIsQ0FBVDtBQUVBLFVBQUlvQyxLQUFLLEdBQUcsSUFBWjs7QUFFQSxXQUFLLElBQUliLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUc3TSxFQUFFLENBQUM0SyxFQUFILENBQU1wTCxNQUE1QixFQUFvQyxFQUFFcU4sRUFBdEMsRUFBMEM7QUFDekMsWUFBSXhOLEVBQUUsR0FBR1csRUFBRSxDQUFDNEssRUFBSCxDQUFNaUMsRUFBTixFQUFVeE4sRUFBbkI7O0FBRUEsWUFBSUEsRUFBRSxDQUFDc08sU0FBSCxNQUFrQnRPLEVBQUUsQ0FBQ2tGLEVBQUgsQ0FBTS9FLE1BQU4sR0FBZSxDQUFyQyxFQUF3QztBQUN2Q2tPLFVBQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0E7QUFDQTtBQUNEOztBQUVELFVBQUlBLEtBQUosRUFBVztBQUNWLGFBQUtyRSxFQUFMLENBQVFxQyxJQUFSLENBQWEsS0FBS25ILEVBQUwsQ0FBUStHLEVBQVIsQ0FBYjtBQUNBLGFBQUsvRyxFQUFMLENBQVFxSixNQUFSLENBQWV0QyxFQUFmLEVBQW1CLENBQW5CO0FBQ0EsZUFBTyxJQUFQO0FBQ0E7O0FBRUQsYUFBTyxLQUFQO0FBQ0EsS0FyQkQ7O0FBdUJBL0QsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhNkQsRUFBYixHQUFrQixVQUFVekQsRUFBVixFQUFjc0IsRUFBZCxFQUFrQjtBQUNuQyxXQUFLaUwsU0FBTCxDQUFlOUksRUFBZixDQUFrQnpELEVBQWxCLEVBQXNCc0IsRUFBdEI7QUFDQSxLQUZEOztBQUlBbUcsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFheUgsRUFBYixHQUFrQixVQUFVcEMsRUFBVixFQUFjQyxFQUFkLEVBQWtCQyxFQUFsQixFQUFzQkMsWUFBdEIsRUFBb0M7QUFDckQsV0FBS21ILFNBQUwsQ0FBZWxGLEVBQWYsQ0FBa0JwQyxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJDLEVBQTFCLEVBQThCQyxZQUE5QjtBQUNBLEtBRkQ7O0FBSUFxQyxJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWEyTixFQUFiLEdBQWtCLFVBQVV0TixFQUFWLEVBQWNnQixFQUFkLEVBQWtCO0FBQ25DLFdBQUtnTSxFQUFMLEdBQVUsS0FBS3ZFLEVBQWY7O0FBRUEsVUFBSXpJLEVBQUosRUFBUTtBQUNQZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBS1QsRUFBWCxFQUFlLEtBQUtsSixFQUFwQjtBQUNBZCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVgsRUFBZUEsRUFBZjtBQUNBOztBQUVELFVBQUlnQixFQUFKLEVBQVE7QUFDUDlCLFFBQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLUixZQUFYLEVBQXlCLEtBQUtwSSxFQUE5QjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEssQ0FBSixDQUFNLEtBQUs1SSxFQUFYLEVBQWVBLEVBQWY7QUFDQTtBQUNELEtBWkQ7O0FBY0F3RyxJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWE2TCxFQUFiLEdBQWtCLFVBQVVDLEVBQVYsRUFBY0MsRUFBZCxFQUFrQjtBQUNuQyxXQUFLYSxFQUFMLENBQVFaLElBQVIsQ0FBYTtBQUFFeE0sUUFBQUEsRUFBRSxFQUFFc00sRUFBTjtBQUFVUixRQUFBQSxFQUFFLEVBQUVTO0FBQWQsT0FBYjtBQUNBLEtBRkQ7O0FBSUFsRSxJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSW1PLElBQUFBLEtBQWpCLEdBQXlCLFlBQVk7QUFDcEMsV0FBS1osT0FBTCxHQUFlLElBQWY7QUFDQSxLQUZEOztBQUlBMUYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUlvTyxJQUFBQSxPQUFqQixHQUEyQixZQUFZO0FBQ3RDLFdBQUtiLE9BQUwsR0FBZSxLQUFmO0FBQ0EsS0FGRDs7QUFJQTFGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJcU8sSUFBQUEsTUFBakIsR0FBMEIsWUFBWTtBQUNyQyxhQUFPLEtBQUtkLE9BQVo7QUFDQSxLQUZEOztBQUlBMUYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUlzTyxJQUFBQSxlQUFqQixHQUFtQyxZQUFZO0FBQzlDLFdBQUtkLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsS0FGRDs7QUFJQTNGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUg7QUFBYTtBQUFJdU8sSUFBQUEsaUJBQWpCLEdBQXFDLFlBQVk7QUFDaEQsV0FBS2YsaUJBQUwsR0FBeUIsS0FBekI7QUFDQSxLQUZEOztBQUlBM0YsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSDtBQUFhO0FBQUl3TyxJQUFBQSxnQkFBakIsR0FBb0MsWUFBWTtBQUMvQyxhQUFPLEtBQUtoQixpQkFBWjtBQUNBLEtBRkQ7O0FBSUEzRixJQUFBQSxFQUFFLENBQUM3SCxTQUFILENBQWFtTSxRQUFiLEdBQXdCLFlBQVk7QUFDbkMsV0FBS21CLEVBQUwsR0FBVSxJQUFWO0FBQ0EsS0FGRDs7QUFJQXpGLElBQUFBLEVBQUUsQ0FBQzdILFNBQUgsQ0FBYXFKLFdBQWIsR0FBMkIsWUFBWTtBQUN0QyxXQUFLaUUsRUFBTCxHQUFVLEtBQVY7QUFDQSxLQUZEOztBQUlBekYsSUFBQUEsRUFBRSxDQUFDN0gsU0FBSCxDQUFhaU8sU0FBYixHQUF5QixZQUFZO0FBQ3BDLGFBQU8sS0FBS1gsRUFBWjtBQUNBLEtBRkQ7O0FBSUF6RixJQUFBQSxFQUFFLENBQUM3SCxTQUFIO0FBQWE7QUFBSXlPLElBQUFBLGVBQWpCLEdBQW1DLFlBQVk7QUFDOUMsYUFBTyxLQUFLNUosRUFBTCxDQUFRL0UsTUFBZjtBQUNBLEtBRkQ7O0FBSUEsUUFBSTRPLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQVk7QUFDcEIsVUFBSUMsRUFBRSxHQUFHLElBQVQ7O0FBRUEsV0FBS0MsS0FBTCxHQUFhLFVBQVVoUCxFQUFWLEVBQWNTLEVBQWQsRUFBa0JnQixFQUFsQixFQUFzQnlHLEVBQXRCLEVBQTBCK0csT0FBMUIsRUFBbUM7QUFDL0M7QUFBSztBQUFJOUssUUFBQUEsS0FBVCxHQUFpQm5FLEVBQWpCO0FBRUEsYUFBS1MsRUFBTCxHQUFVLEVBQVY7QUFDQSxhQUFLZ0IsRUFBTCxHQUFVLEVBQVYsQ0FKK0MsQ0FNL0M7O0FBRUEsYUFBS3lOLEVBQUwsR0FBVSxFQUFWOztBQUVBLGFBQUtDLEVBQUwsR0FBVSxVQUFVakQsRUFBVixFQUFjO0FBQ3ZCLGNBQUluTSxFQUFFLEdBQUcsSUFBSWtJLEVBQUosQ0FBTyxJQUFQLEVBQWFpRSxFQUFiLEVBQWlCaEUsRUFBakIsQ0FBVDtBQUNBbkksVUFBQUEsRUFBRSxDQUFDNkksRUFBSCxDQUFNLEtBQUtuSSxFQUFYLEVBQWUsS0FBS2dCLEVBQXBCO0FBQ0EsZUFBSyxJQUFJMk4sTUFBSixDQUFXbEQsRUFBRSxDQUFDbUQsSUFBZCxDQUFMLElBQTRCdFAsRUFBNUI7QUFDQSxlQUFLbVAsRUFBTCxDQUFROUMsSUFBUixDQUFhck0sRUFBYjtBQUNBLFNBTEQ7O0FBT0EsYUFBSzZJLEVBQUwsR0FBVSxVQUFVbkksRUFBVixFQUFjZ0IsRUFBZCxFQUFrQjtBQUMzQixlQUFLNk4sRUFBTCxHQUFVLEdBQVY7QUFDQSxlQUFLcEcsRUFBTCxHQUFVLEdBQVY7QUFDQXZKLFVBQUFBLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWCxFQUFlQSxFQUFFLEdBQUdBLEVBQUgsR0FBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF6QjtBQUNBZCxVQUFBQSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVgsRUFBZUEsRUFBRSxHQUFHQSxFQUFILEdBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQXpCO0FBQ0EsU0FMRDs7QUFPQSxhQUFLbUgsRUFBTCxDQUFRbkksRUFBUixFQUFZZ0IsRUFBWjtBQUNBO0FBQUs7QUFBSTBDLFFBQUFBLEtBQVQsQ0FBZW9MLEVBQWYsQ0FBa0IsSUFBbEIsRUF6QitDLENBeUJ0Qjs7QUFFekIsYUFBS0MsYUFBTCxHQUFxQixJQUFyQjs7QUFFQSxZQUFJUCxPQUFPLENBQUNMLGdCQUFaLEVBQThCO0FBQzdCO0FBQUs7QUFBSWEsVUFBQUEsNEJBQVQ7QUFDQTs7QUFFRCxZQUFJUixPQUFPLENBQUNSLE1BQVosRUFBb0I7QUFDbkI7QUFBSztBQUFJaUIsVUFBQUEsZ0JBQVQ7QUFDQSxTQUZELE1BRU87QUFDTixlQUFLQyxVQUFMO0FBQ0E7QUFBSztBQUFJQyxVQUFBQSxNQUFULENBQWdCLEtBQUtDLEVBQXJCLEVBQXlCcFAsRUFBekIsRUFBNkJnQixFQUE3QjtBQUNBLGVBQUsrTixhQUFMLEdBQXFCLEtBQXJCO0FBQ0E7QUFDRCxPQXhDRDtBQXlDQSxLQTVDRDs7QUE4Q0FWLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJMFAsSUFBQUEsT0FBakIsR0FBMkI7QUFBVTtBQUFJekssSUFBQUEsUUFBZDtBQUF3QjtBQUFJMEssSUFBQUEsUUFBNUI7QUFBc0M7QUFBSWQsSUFBQUEsT0FBMUMsRUFBbUQ7QUFFN0UsV0FBS3JHLEVBQUw7QUFBUTtBQUFJdkQsTUFBQUEsUUFBUTtBQUFHO0FBQUlBLE1BQUFBLFFBQVAsR0FBa0IsS0FBSzVFLEVBQTNDO0FBQStDO0FBQUlzUCxNQUFBQSxRQUFRO0FBQUc7QUFBSUEsTUFBQUEsUUFBUCxHQUFrQixLQUFLdE8sRUFBbEY7QUFDQSxXQUFLK04sYUFBTCxHQUFxQixJQUFyQjs7QUFFQSxXQUFLLElBQUloRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsYUFBSzBELEVBQUwsQ0FBUTFELENBQVIsRUFBVzFDLEVBQVgsQ0FBYyxLQUFLckksRUFBbkIsRUFBdUIsS0FBS2dCLEVBQTVCO0FBQ0E7O0FBRUQsV0FBSytOLGFBQUwsR0FBcUIsSUFBckI7O0FBRUEsVUFBSVAsT0FBTyxJQUFJQSxPQUFPLENBQUNMLGdCQUF2QixFQUF5QztBQUN4QztBQUFLO0FBQUlhLFFBQUFBLDRCQUFUO0FBQ0E7O0FBRUQsVUFBSVIsT0FBTyxJQUFJQSxPQUFPLENBQUNSLE1BQXZCLEVBQStCO0FBQzlCO0FBQUs7QUFBSWlCLFFBQUFBLGdCQUFUO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBS0MsVUFBTDtBQUNBO0FBQUs7QUFBSUMsUUFBQUEsTUFBVCxDQUFnQixLQUFLQyxFQUFyQixFQUF5QixLQUFLcFAsRUFBOUIsRUFBa0MsS0FBS2dCLEVBQXZDO0FBQ0EsYUFBSytOLGFBQUwsR0FBcUIsS0FBckI7QUFDQTtBQUNELEtBdEJEOztBQXdCQVYsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSCxDQUFhdVAsVUFBYixHQUEwQixZQUFZO0FBQ3JDLFdBQUssSUFBSW5FLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXekMsRUFBWCxDQUFjLENBQWQsRUFBaUIsS0FBS3RJLEVBQXRCLEVBQTBCLEtBQUtnQixFQUEvQjtBQUNBO0FBQ0QsS0FKRDs7QUFNQXFOLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJd1AsSUFBQUEsTUFBakIsR0FBMEI7QUFBVTtBQUFJSSxJQUFBQSxFQUFkO0FBQWtCO0FBQUkzSyxJQUFBQSxRQUF0QjtBQUFnQztBQUFJMEssSUFBQUEsUUFBcEMsRUFBOEM7QUFDdkUsVUFBSSxLQUFLRSxFQUFMLEdBQVUsR0FBZCxFQUNDLEtBQUtDLFdBQUw7QUFBaUI7QUFBSUYsTUFBQUEsRUFBckI7QUFBeUI7QUFBSTNLLE1BQUFBLFFBQTdCO0FBQXVDO0FBQUkwSyxNQUFBQSxRQUEzQyxFQURELEtBR0MsS0FBS0ksVUFBTDtBQUFnQjtBQUFJSCxNQUFBQSxFQUFwQjtBQUF3QjtBQUFJM0ssTUFBQUEsUUFBNUI7QUFBc0M7QUFBSTBLLE1BQUFBLFFBQTFDO0FBQ0QsS0FMRDs7QUFPQWpCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUgsQ0FBYThQLFdBQWIsR0FBMkI7QUFBVTtBQUFJRixJQUFBQSxFQUFkO0FBQWtCO0FBQUkzSyxJQUFBQSxRQUF0QjtBQUFnQztBQUFJMEssSUFBQUEsUUFBcEMsRUFBOEM7QUFDeEUsVUFBSUssV0FBVyxHQUFHLEdBQWxCO0FBQ0EsVUFBSW5GLEVBQUUsR0FBRyxFQUFUO0FBQ0F0TCxNQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU1hLEVBQU4sRUFBVSxLQUFLeEssRUFBZjtBQUNBLFVBQUk0UCxhQUFhLEdBQUcsRUFBcEI7QUFDQTFRLE1BQUFBLEdBQUcsQ0FBQzBLLENBQUosQ0FBTWdHLGFBQU4sRUFBcUIsS0FBSzVPLEVBQTFCO0FBRUE7QUFBSTtBQUFJNEQsTUFBQUEsUUFBUSxJQUFJMUYsR0FBRyxDQUFDMlEsUUFBSjtBQUFhO0FBQUlqTCxNQUFBQSxRQUFqQixFQUEyQixLQUFLNUUsRUFBaEMsQ0FBcEI7QUFDQztBQUFJNEUsUUFBQUEsUUFBUSxHQUFHLElBQVg7QUFFTDtBQUFJO0FBQUkwSyxNQUFBQSxRQUFRLElBQUlwUSxHQUFHLENBQUM0USxPQUFKO0FBQVk7QUFBSVIsTUFBQUEsUUFBaEIsRUFBMEIsS0FBS3RPLEVBQS9CLENBQXBCO0FBQ0M7QUFBSXNPLFFBQUFBLFFBQVEsR0FBRyxJQUFYOztBQUVMO0FBQVE7QUFBSUMsTUFBQUEsRUFBRSxHQUFHSSxXQUFWLEdBQXlCLEtBQUtkLEVBQTlCLElBQW9DLEtBQUtXLEVBQWhELEVBQW9EO0FBQ25ELFlBQUl6RixFQUFFLEdBQUcsS0FBS3RCLEVBQWQ7QUFFQTtBQUFJO0FBQUk3RCxRQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUMrSixFQUFKLENBQU91QixFQUFQLEVBQVcsS0FBS3hLLEVBQWhCO0FBQW9CO0FBQUk0RSxRQUFBQSxRQUF4QixFQUFrQytLLFdBQVc7QUFBRztBQUFJSixRQUFBQSxFQUFwRDtBQUVEO0FBQUk7QUFBSUQsUUFBQUEsUUFBUixFQUNDcFEsR0FBRyxDQUFDaUssTUFBSixDQUFXeUcsYUFBWCxFQUEwQixLQUFLNU8sRUFBL0I7QUFBbUM7QUFBSXNPLFFBQUFBLFFBQXZDLEVBQWlESyxXQUFXO0FBQUc7QUFBSUosUUFBQUEsRUFBbkU7O0FBRUQsYUFBSyxJQUFJeEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGVBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVd6QyxFQUFYLENBQWMsS0FBS2tILEVBQW5CLEVBQXVCaEYsRUFBdkIsRUFBMkJvRixhQUEzQjtBQUVBLGVBQUtuSCxFQUFMLEdBQVVzQixFQUFWO0FBQ0E7O0FBRUQ0RixRQUFBQSxXQUFXLElBQUksS0FBS0gsRUFBTCxHQUFVLEtBQUtYLEVBQTlCO0FBQ0EsYUFBS0EsRUFBTCxHQUFVLEdBQVY7QUFDQSxhQUFLcEcsRUFBTCxHQUFVc0IsRUFBRSxHQUFHLEtBQUt5RixFQUFwQjtBQUNBOztBQUVEO0FBQUk7QUFBSTVLLE1BQUFBLFFBQVIsRUFDQzFGLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWDtBQUFlO0FBQUk0RSxNQUFBQSxRQUFuQjtBQUVEO0FBQUk7QUFBSTBLLE1BQUFBLFFBQVIsRUFDQ3BRLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWDtBQUFlO0FBQUlzTyxNQUFBQSxRQUFuQjtBQUVELFdBQUtULEVBQUw7QUFBVztBQUFJVSxNQUFBQSxFQUFFLEdBQUdJLFdBQXBCO0FBQ0EsS0F4Q0Q7O0FBMENBdEIsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSCxDQUFhK1AsVUFBYixHQUEwQjtBQUFVO0FBQUlILElBQUFBLEVBQWQ7QUFBa0I7QUFBSTNLLElBQUFBLFFBQXRCO0FBQWdDO0FBQUkwSyxJQUFBQSxRQUFwQyxFQUE4QztBQUN2RSxVQUFJdkYsRUFBRSxHQUFHLEtBQUt0QixFQUFkOztBQUVBLFdBQUssSUFBSXNDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUixFQUFXekMsRUFBWDtBQUFjO0FBQUlpSCxRQUFBQSxFQUFsQjtBQUFzQjtBQUFJM0ssUUFBQUEsUUFBMUI7QUFBb0M7QUFBSTBLLFFBQUFBLFFBQXhDO0FBQ0EsYUFBSzdHLEVBQUwsR0FBVXNCLEVBQVY7QUFDQTs7QUFFRCxXQUFLdEIsRUFBTCxHQUFVc0IsRUFBRTtBQUFHO0FBQUl3RixNQUFBQSxFQUFuQjtBQUVBO0FBQUk7QUFBSTNLLE1BQUFBLFFBQVIsRUFDQzFGLEdBQUcsQ0FBQ3lLLENBQUosQ0FBTSxLQUFLM0osRUFBWDtBQUFlO0FBQUk0RSxNQUFBQSxRQUFuQjtBQUVEO0FBQUk7QUFBSTBLLE1BQUFBLFFBQVIsRUFDQ3BRLEdBQUcsQ0FBQzBLLENBQUosQ0FBTSxLQUFLNUksRUFBWDtBQUFlO0FBQUlzTyxNQUFBQSxRQUFuQjtBQUNELEtBZkQ7O0FBaUJBakIsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUlvUSxJQUFBQSxhQUFqQixHQUFpQztBQUFVO0FBQUluTCxJQUFBQSxRQUFkO0FBQXdCO0FBQUkwSyxJQUFBQSxRQUE1QixFQUFzQztBQUV0RTtBQUFJO0FBQUkxSyxNQUFBQSxRQUFSLEVBQ0MxRixHQUFHLENBQUN5SyxDQUFKLENBQU0sS0FBSzNKLEVBQVg7QUFBZTtBQUFJNEUsTUFBQUEsUUFBbkI7QUFFRDtBQUFJO0FBQUkwSyxNQUFBQSxRQUFSLEVBQ0NwUSxHQUFHLENBQUMwSyxDQUFKLENBQU0sS0FBSzVJLEVBQVg7QUFBZTtBQUFJc08sTUFBQUEsUUFBbkI7O0FBRUQsV0FBSyxJQUFJdkUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVd1QyxFQUFYLENBQWMsS0FBS3ROLEVBQW5CLEVBQXVCLEtBQUtnQixFQUE1QjtBQUNBO0FBQ0QsS0FYRDs7QUFhQXFOLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJcVEsSUFBQUEsd0JBQWpCLEdBQTRDO0FBQVU7QUFBSXBCLElBQUFBLElBQWQ7QUFBb0I7QUFBSXFCLElBQUFBLEtBQXhCLEVBQStCO0FBQzFFLFVBQUlDLFFBQVEsR0FBRyxJQUFJdkIsTUFBSjtBQUFXO0FBQUlDLE1BQUFBLElBQWYsQ0FBZjs7QUFFQTtBQUFJO0FBQUlxQixNQUFBQSxLQUFLLFlBQVlFLEtBQXpCLEVBQWdDO0FBQy9CO0FBQUk7QUFBSUYsUUFBQUEsS0FBSyxDQUFDeFEsTUFBTixJQUFnQixDQUF4QixFQUEyQjtBQUMxQixlQUFLLElBQUlzTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEM3TCxZQUFBQSxHQUFHLENBQUNrUixDQUFKLENBQU0sS0FBSzNCLEVBQUwsQ0FBUTFELENBQVIsRUFBV21GLFFBQVgsQ0FBTjtBQUE0QjtBQUFJRCxZQUFBQSxLQUFoQztBQUNBO0FBQ0QsU0FKRCxNQUtLO0FBQ0osZUFBSyxJQUFJbEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDN0wsWUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNLEtBQUs4RSxFQUFMLENBQVExRCxDQUFSLEVBQVdtRixRQUFYLENBQU47QUFBNEI7QUFBSUQsWUFBQUEsS0FBaEM7QUFDQTtBQUNEO0FBQ0QsT0FYRCxNQVlLO0FBQ0osYUFBSyxJQUFJbEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGVBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVdtRixRQUFYO0FBQXVCO0FBQUlELFVBQUFBLEtBQTNCO0FBQ0E7QUFDRDtBQUNELEtBcEJEOztBQXNCQTVCLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJc1AsSUFBQUEsZ0JBQWpCLEdBQW9DLFlBQVc7QUFDOUMsV0FBSyxJQUFJbEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSO0FBQVc7QUFBSStDLFFBQUFBLEtBQWY7QUFDQTtBQUNELEtBSkQ7O0FBTUFPLElBQUFBLEVBQUUsQ0FBQzFPLFNBQUg7QUFBYTtBQUFJMFEsSUFBQUEsa0JBQWpCLEdBQXNDLFlBQVk7QUFDakQsV0FBSyxJQUFJdEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSO0FBQVc7QUFBSWdELFFBQUFBLE9BQWY7QUFDQTs7QUFDRCxXQUFLbUIsVUFBTDs7QUFFQSxVQUFJLEtBQUtILGFBQVQsRUFBd0I7QUFDdkI7QUFBSztBQUFJSSxRQUFBQSxNQUFULENBQWdCLEtBQUtDLEVBQXJCLEVBQXlCLEtBQUtwUCxFQUE5QixFQUFrQyxLQUFLZ0IsRUFBdkM7QUFDQSxhQUFLK04sYUFBTCxHQUFxQixLQUFyQjtBQUNBO0FBQ0QsS0FWRDs7QUFZQVYsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUkyUSxJQUFBQSxvQkFBakIsR0FBd0MsWUFBWTtBQUNuRCxXQUFLLElBQUl2RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsWUFBSSxDQUFDLEtBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVdpRCxNQUFYLEVBQUwsRUFDQyxPQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDQSxLQU5EOztBQVFBSyxJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSXFQLElBQUFBLDRCQUFqQixHQUFnRCxZQUFZO0FBQzNELFdBQUssSUFBSWpFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUjtBQUFXO0FBQUlrRCxRQUFBQSxlQUFmO0FBQ0E7QUFDRCxLQUpEOztBQU1BSSxJQUFBQSxFQUFFLENBQUMxTyxTQUFIO0FBQWE7QUFBSTRRLElBQUFBLDhCQUFqQixHQUFrRCxZQUFZO0FBQzdELFdBQUssSUFBSXhGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzBELEVBQUwsQ0FBUWhQLE1BQTVCLEVBQW9DLEVBQUVzTCxDQUF0QyxFQUF5QztBQUN4QyxhQUFLMEQsRUFBTCxDQUFRMUQsQ0FBUjtBQUFXO0FBQUltRCxRQUFBQSxpQkFBZjtBQUNBO0FBQ0QsS0FKRDs7QUFNQUcsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUk2USxJQUFBQSxnQ0FBakIsR0FBb0QsWUFBWTtBQUMvRCxXQUFLLElBQUl6RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUswRCxFQUFMLENBQVFoUCxNQUE1QixFQUFvQyxFQUFFc0wsQ0FBdEMsRUFBeUM7QUFDeEMsWUFBSSxDQUFDLEtBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVdvRCxnQkFBWCxFQUFMLEVBQ0MsT0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0EsS0FORDs7QUFRQUUsSUFBQUEsRUFBRSxDQUFDMU8sU0FBSDtBQUFhO0FBQUl5TyxJQUFBQSxlQUFqQixHQUFtQyxZQUFXO0FBQzdDLFVBQUlxQyxZQUFZLEdBQUcsQ0FBbkI7O0FBRUEsV0FBSyxJQUFJMUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDMEYsUUFBQUEsWUFBWSxJQUFJLEtBQUtoQyxFQUFMLENBQVExRCxDQUFSLEVBQVdxRCxlQUFYLEVBQWhCO0FBQ0E7O0FBRUQsYUFBT3FDLFlBQVA7QUFDQSxLQVJEOztBQVdBLFFBQUlDLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQVk7QUFDcEIsV0FBS25DLEtBQUwsR0FBYSxVQUFVaFAsRUFBVixFQUFjUyxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0JtRSxZQUF0QixFQUFvQ3FKLE9BQXBDLEVBQTZDO0FBQ3pEa0MsUUFBQUEsRUFBRSxDQUFDL1EsU0FBSCxDQUFhNE8sS0FBYixDQUFtQm9DLElBQW5CLENBQXdCLElBQXhCLEVBQThCcFIsRUFBOUIsRUFBa0NTLEVBQWxDLEVBQXNDZ0IsRUFBdEMsRUFBMEMwRCxFQUExQyxFQUE4QzhKLE9BQTlDOztBQUVBLGFBQUsvSCxhQUFMLEdBQXFCLEVBQXJCO0FBRUEsWUFBSW1LLE9BQU8sR0FBRyxFQUFkO0FBRUE7QUFDQyxjQUFJQyxPQUFKOztBQUNBLGVBQUssSUFBSXRNLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUc7QUFBSztBQUFJYixVQUFBQSxLQUFULENBQWVvTixFQUFyQyxFQUF5QyxFQUFFdk0sRUFBM0MsRUFBK0M7QUFDOUNzTSxZQUFBQSxPQUFPLEdBQUd0TSxFQUFFLEdBQUcsQ0FBZjtBQUNBcU0sWUFBQUEsT0FBTyxDQUFDakYsSUFBUixDQUFha0YsT0FBTyxHQUFHLENBQXZCLEVBQTBCQSxPQUFPLEdBQUcsQ0FBcEMsRUFBdUNBLE9BQU8sR0FBRyxDQUFqRCxFQUFvREEsT0FBTyxHQUFHLENBQTlELEVBQWlFQSxPQUFPLEdBQUcsQ0FBM0UsRUFBOEVBLE9BQU8sR0FBRyxDQUF4RjtBQUNBO0FBQ0Q7QUFFRCxhQUFLMUwsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxhQUFLQSxZQUFMLENBQWtCNEwsVUFBbEIsQ0FBNkI7QUFBSztBQUFJck4sUUFBQUEsS0FBVCxDQUFlb04sRUFBZixHQUFvQixDQUFqRCxFQUFvRCxDQUFDLENBQUQsQ0FBcEQsRUFBeURGLE9BQXpELEVBQWtFO0FBQUs7QUFBSWxOLFFBQUFBLEtBQVQsQ0FBZW9OLEVBQWpGO0FBQ0EsYUFBSzNMLFlBQUwsQ0FBa0I2TCxZQUFsQixHQUFpQyxDQUFqQztBQUNBLE9BbEJEO0FBbUJBLEtBcEJEOztBQXNCQU4sSUFBQUEsRUFBRSxDQUFDL1EsU0FBSCxHQUFlLElBQUkwTyxFQUFKLEVBQWY7O0FBRUFxQyxJQUFBQSxFQUFFLENBQUMvUSxTQUFIO0FBQWE7QUFBSXNSLElBQUFBLG1CQUFqQixHQUF1QztBQUFVO0FBQUlDLElBQUFBLFdBQWQ7QUFBMkI7QUFBSUMsSUFBQUEsUUFBL0I7QUFBeUM7QUFBSUMsSUFBQUEsU0FBN0MsRUFBd0Q7QUFDOUYsV0FBS2pNLFlBQUwsQ0FBa0JrTSxPQUFsQjtBQUNBLFdBQUtsTSxZQUFMLENBQWtCMkIsZ0JBQWxCLEdBQXFDLElBQXJDO0FBRUEsV0FBSzJILEVBQUwsQ0FBUXBILE9BQVIsQ0FBZ0IsVUFBVS9ILEVBQVYsRUFBYztBQUM3QkEsUUFBQUEsRUFBRSxDQUFDOEgsRUFBSDtBQUFNO0FBQUk4SixRQUFBQSxXQUFWO0FBQXVCO0FBQUlDLFFBQUFBLFFBQTNCO0FBQXFDO0FBQUlDLFFBQUFBLFNBQXpDLEVBQW9ELEtBQUtqTSxZQUF6RDtBQUNBLE9BRkQsRUFFRyxJQUZIO0FBSUEsVUFBSSxLQUFLQSxZQUFMLENBQWtCMkIsZ0JBQXRCLEVBQ0MsS0FBSzNCLFlBQUwsQ0FBa0IrQixjQUFsQixDQUFpQyxLQUFLL0IsWUFBTCxDQUFrQjJCLGdCQUFuRDtBQUNELEtBVkQ7O0FBWUEsUUFBSXdLLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQVk7QUFDcEIsV0FBSy9DLEtBQUwsR0FBYSxVQUFVaFAsRUFBVixFQUFjUyxFQUFkLEVBQWtCZ0IsRUFBbEIsRUFBc0J3TixPQUF0QixFQUErQjtBQUMzQzhDLFFBQUFBLEVBQUUsQ0FBQzNSLFNBQUgsQ0FBYTRPLEtBQWIsQ0FBbUJvQyxJQUFuQixDQUF3QixJQUF4QixFQUE4QnBSLEVBQTlCLEVBQWtDUyxFQUFsQyxFQUFzQ2dCLEVBQXRDLEVBQTBDNUIsRUFBMUMsRUFBOENvUCxPQUE5Qzs7QUFFQSxhQUFLL0ssU0FBTCxHQUFpQixFQUFqQjtBQUNBO0FBQUs7QUFBSUMsUUFBQUEsS0FBVCxDQUFlRCxTQUFmLENBQXlCNEQsT0FBekIsQ0FBaUMsVUFBVTRJLEtBQVYsRUFBaUI7QUFDakQsZUFBS3hNLFNBQUwsQ0FBZWtJLElBQWYsQ0FBb0IsQ0FBQyxhQUFELEVBQWdCLFNBQWhCLEVBQTJCLFVBQTNCLEVBQXVDc0UsS0FBdkMsQ0FBcEI7QUFDQSxTQUZELEVBRUcsSUFGSDtBQUlBO0FBQUs7QUFBSW5NLFFBQUFBLFlBQVQsR0FBd0IsRUFBeEI7QUFDQSxPQVREO0FBVUEsS0FYRDs7QUFhQXdOLElBQUFBLEVBQUUsQ0FBQzNSLFNBQUgsR0FBZSxJQUFJME8sRUFBSixFQUFmOztBQUVBaUQsSUFBQUEsRUFBRSxDQUFDM1IsU0FBSDtBQUFhO0FBQUk0UixJQUFBQSxJQUFqQixHQUF3QjtBQUFVO0FBQUlDLElBQUFBLE9BQWQ7QUFBdUI7QUFBSUMsSUFBQUEsTUFBM0IsRUFBbUM7QUFDMUQsV0FBSyxJQUFJMUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMEQsRUFBTCxDQUFRaFAsTUFBNUIsRUFBb0MsRUFBRXNMLENBQXRDLEVBQXlDO0FBQ3hDLGFBQUswRCxFQUFMLENBQVExRCxDQUFSLEVBQVd2SCxFQUFYO0FBQWM7QUFBSWdPLFFBQUFBLE9BQWxCO0FBQTJCO0FBQUlDLFFBQUFBLE1BQS9CO0FBQ0E7QUFDRCxLQUpEOztBQU1BLFNBQUtDLGlCQUFMLEdBQXlCO0FBQVU7QUFBSTlNLElBQUFBLFFBQWQ7QUFBd0I7QUFBSTBLLElBQUFBLFFBQTVCO0FBQXNDO0FBQUluSyxJQUFBQSxZQUExQztBQUF3RDtBQUFJcUosSUFBQUEsT0FBNUQsRUFBcUU7QUFDN0YsVUFBSW5QLEVBQUUsR0FBRyxJQUFJcVIsRUFBSixFQUFUOztBQUNBclIsTUFBQUEsRUFBRSxDQUFDa1AsS0FBSCxDQUFTLElBQVQ7QUFBZTtBQUFJM0osTUFBQUEsUUFBbkI7QUFBNkI7QUFBSTBLLE1BQUFBLFFBQWpDO0FBQTJDO0FBQUluSyxNQUFBQSxZQUEvQztBQUE2RDtBQUFJcUosTUFBQUEsT0FBTyxJQUFJLEVBQTVFOztBQUNBLGFBQU9uUCxFQUFQO0FBQ0EsS0FKRDs7QUFNQSxTQUFLc1Msc0JBQUwsR0FBOEI7QUFBVTtBQUFJL00sSUFBQUEsUUFBZDtBQUF3QjtBQUFJMEssSUFBQUEsUUFBNUI7QUFBc0M7QUFBSWQsSUFBQUEsT0FBMUMsRUFBbUQ7QUFDaEYsVUFBSW5QLEVBQUUsR0FBRyxJQUFJaVMsRUFBSixFQUFUOztBQUNBalMsTUFBQUEsRUFBRSxDQUFDa1AsS0FBSCxDQUFTLElBQVQ7QUFBZTtBQUFJM0osTUFBQUEsUUFBbkI7QUFBNkI7QUFBSTBLLE1BQUFBLFFBQWpDO0FBQTJDO0FBQUlkLE1BQUFBLE9BQU8sSUFBSSxFQUExRDs7QUFDQSxhQUFPblAsRUFBUDtBQUNBLEtBSkQ7O0FBS0EsU0FBS3VTLFFBQUwsR0FBZ0IsQ0FBQywyQkFBRCxDQUFoQjtBQUNBLFNBQUtuTyxTQUFMLEdBQWlCLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFNBQUtFLFlBQUwsR0FBb0IsQ0FBQztBQUFDRSxNQUFBQSxhQUFhLEVBQUMsQ0FBZjtBQUFpQkUsTUFBQUEsY0FBYyxFQUFDLENBQUMsQ0FBRDtBQUFoQyxLQUFELENBQXBCO0FBQ0EsU0FBSytNLEVBQUwsR0FBVSxJQUFWOztBQUVBLGFBQVNlLHNCQUFULEdBQWtDO0FBRWpDLFVBQUlDLEVBQUo7QUFBQSxVQUFRQyxFQUFFLEdBQUcsRUFBYjtBQUFBLFVBQWlCQyxHQUFqQjtBQUFBLFVBQXNCQyxHQUFHLEdBQUcsRUFBNUI7QUFBQSxVQUFnQ0MsRUFBRSxHQUFHLEVBQXJDO0FBQUEsVUFBeUNDLEVBQXpDO0FBQUEsVUFBNkNDLEVBQUUsR0FBRyxFQUFsRDtBQUFBLFVBQXNEQyxHQUF0RDtBQUFBLFVBQTJEQyxHQUFHLEdBQUcsRUFBakU7QUFBQSxVQUFxRUMsRUFBRSxHQUFHLEVBQTFFO0FBQUEsVUFBOEVDLEVBQTlFO0FBQUEsVUFBa0ZDLEdBQWxGO0FBQUEsVUFBdUZDLEdBQXZGO0FBQUEsVUFBNEZDLEdBQUcsR0FBRyxFQUFsRztBQUFBLFVBQXNHQyxLQUF0RztBQUFBLFVBQTZHQyxLQUFLLEdBQUcsRUFBckg7QUFBQSxVQUF5SEMsS0FBekg7QUFBQSxVQUFnSUMsS0FBSyxHQUFHLEVBQXhJO0FBQUEsVUFBNElDLEtBQTVJO0FBQUEsVUFBbUpDLEtBQUssR0FBRyxFQUEzSjtBQUFBLFVBQStKQyxHQUEvSjtBQUFBLFVBQW9LQyxLQUFwSztBQUFBLFVBQTJLQyxLQUFLLEdBQUcsRUFBbkw7QUFBQSxVQUF1TEMsR0FBRyxHQUFDLEVBQTNMO0FBQUEsVUFBK0xDLElBQUksR0FBQyxFQUFwTTtBQUFBLFVBQXdNQyxJQUFJLEdBQUMsRUFBN007QUFBQSxVQUFpTkMsR0FBRyxHQUFDLEVBQXJOO0FBQUEsVUFBeU5DLEtBQUssR0FBQyxFQUEvTjtBQUFBLFVBQW1PQyxLQUFLLEdBQUMsRUFBek87QUFBQSxVQUE2T0MsS0FBSyxHQUFDLEVBQW5QO0FBQUEsVUFBdVBDLE1BQU0sR0FBQyxFQUE5UDtBQUFBLFVBQWtRQyxNQUFsUTtBQUFBLFVBQTBRQyxJQUFJLEdBQUMsRUFBL1E7QUFBQSxVQUFtUkMsSUFBSSxHQUFDLEVBQXhSO0FBQUEsVUFBNFJDLE1BQTVSO0FBQUEsVUFBb1NDLE1BQXBTO0FBQUEsVUFBNFNDLEtBQTVTO0FBQUEsVUFBbVRDLE1BQU0sR0FBQyxFQUExVDtBQUFBLFVBQThUQyxHQUE5VDtBQUFBLFVBQW1VQyxHQUFuVTtBQUFBLFVBQXdVQyxLQUF4VTtBQUFBLFVBQStVQyxLQUFLLEdBQUcsRUFBdlY7QUFBQSxVQUEyVkMsR0FBM1Y7QUFBQSxVQUFnV0MsR0FBaFc7QUFBQSxVQUFxV0MsS0FBclc7QUFBQSxVQUE0V0MsS0FBSyxHQUFHLEVBQXBYOztBQUNBLFdBQUtuVixFQUFMLEdBQVUsQ0FBQztBQUFDTSxRQUFBQSxFQUFFLEVBQUMsQ0FBSjtBQUFNK0IsUUFBQUEsRUFBRSxFQUFDLENBQVQ7QUFBV3FDLFFBQUFBLEVBQUUsRUFBQyxDQUFkO0FBQWdCTixRQUFBQSxnQkFBZ0IsRUFBQztBQUFqQyxPQUFELENBQVY7QUFDQSxXQUFLZ0wsSUFBTCxHQUFZLGdCQUFaOztBQUVBLFdBQUtoQyxFQUFMLEdBQVUsVUFBU3ROLEVBQVQsRUFBYTtBQUN0QkEsUUFBQUEsRUFBRSxDQUFDbU4sRUFBSDtBQUNBbk4sUUFBQUEsRUFBRSxDQUFDeVMsRUFBSCxHQUFRLENBQ1AsQ0FBQyxDQUFDLENBQUMsT0FBRixFQUFVLE9BQVYsQ0FBRCxFQUFvQixDQUFDLE9BQUQsRUFBUyxPQUFULENBQXBCLEVBQXNDLENBQUMsT0FBRCxFQUFTLE9BQVQsQ0FBdEMsQ0FETyxDQUFSO0FBR0F6UyxRQUFBQSxFQUFFLENBQUM4UyxFQUFILEdBQVEsQ0FDUCxDQUFDLENBQUMsQ0FBQyxPQUFGLEVBQVUsQ0FBQyxNQUFYLENBQUQsRUFBb0IsQ0FBQyxPQUFELEVBQVMsQ0FBQyxPQUFWLENBQXBCLEVBQXVDLENBQUMsT0FBRCxFQUFTLENBQUMsT0FBVixDQUF2QyxDQURPLENBQVI7QUFHQTlTLFFBQUFBLEVBQUUsQ0FBQ3FULEdBQUgsR0FBUyxDQUNSLENBQ0MsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFPLEdBQVAsQ0FERCxDQURRLEVBSVIsQ0FDQyxDQUFDLENBQUMsR0FBRixFQUFNLENBQUMsT0FBUCxFQUFlLENBQUMsT0FBaEIsRUFBd0IsQ0FBQyxPQUF6QixFQUFpQyxDQUFDLE9BQWxDLEVBQTBDLENBQUMsT0FBM0MsRUFBbUQsQ0FBQyxPQUFwRCxFQUE0RCxDQUFDLE9BQTdELEVBQXFFLENBQUMsT0FBdEUsRUFBOEUsQ0FBQyxPQUEvRSxFQUF1RixDQUFDLE9BQXhGLEVBQWdHLENBQUMsT0FBakcsRUFBeUcsQ0FBQyxPQUExRyxFQUFrSCxDQUFDLE9BQW5ILEVBQTJILENBQUMsT0FBNUgsRUFBb0ksQ0FBcEksRUFBc0ksQ0FBdEksQ0FERCxDQUpRLEVBT1IsQ0FDQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQURELENBUFEsQ0FBVDtBQVdBclQsUUFBQUEsRUFBRSxDQUFDNFQsR0FBSCxHQUFTLENBQ1IsQ0FDQyxDQUFDLEdBQUQsRUFBSyxPQUFMLEVBQWEsT0FBYixFQUFxQixPQUFyQixFQUE2QixPQUE3QixFQUFxQyxPQUFyQyxFQUE2QyxPQUE3QyxFQUFxRCxPQUFyRCxFQUE2RCxPQUE3RCxFQUFxRSxPQUFyRSxFQUE2RSxPQUE3RSxFQUFxRixPQUFyRixFQUE2RixPQUE3RixFQUFxRyxPQUFyRyxFQUE2RyxPQUE3RyxFQUFxSCxHQUFySCxFQUF5SCxHQUF6SCxDQURELENBRFEsQ0FBVDtBQUtBNVQsUUFBQUEsRUFBRSxDQUFDK1UsR0FBSCxHQUFTLENBQ1IsQ0FDQyxDQUFDLEdBQUQsRUFBSyxRQUFMLEVBQWMsUUFBZCxFQUF1QixRQUF2QixFQUFnQyxPQUFoQyxFQUF3QyxPQUF4QyxFQUFnRCxPQUFoRCxFQUF3RCxPQUF4RCxFQUFnRSxPQUFoRSxFQUF3RSxPQUF4RSxFQUFnRixPQUFoRixFQUF3RixPQUF4RixFQUFnRyxPQUFoRyxFQUF3RyxPQUF4RyxFQUFnSCxNQUFoSCxFQUF1SCxDQUF2SCxFQUF5SCxDQUF6SCxDQURELENBRFEsQ0FBVDtBQUtBL1UsUUFBQUEsRUFBRSxDQUFDbVYsR0FBSCxHQUFTLENBQ1IsQ0FDQyxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sR0FBUCxDQURELEVBRUMsQ0FBQyxHQUFELEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FGRCxDQURRLENBQVQ7QUFNQW5WLFFBQUFBLEVBQUUsQ0FBQ3VOLEVBQUgsR0FBUSxJQUFSO0FBQ0F2TixRQUFBQSxFQUFFLENBQUNnRixFQUFILEdBQVEsQ0FBUjtBQUNBLE9BckNEOztBQXVDQSxXQUFLNEQsRUFBTCxHQUFVLFVBQVN3RSxFQUFULEVBQWE7QUFDdEJBLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUSxHQUFSO0FBQ0E2RCxRQUFBQSxFQUFFLENBQUM3RSxFQUFILEdBQVEsQ0FBUjtBQUNBNkUsUUFBQUEsRUFBRSxDQUFDckQsRUFBSCxHQUFRLENBQVI7QUFDQSxPQUpEOztBQU1BLFdBQUtiLEVBQUwsR0FBVSxVQUFTRCxFQUFULEVBQWFqSixFQUFiLEVBQWlCb04sRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQzdELEVBQUgsR0FBUSxHQUFSO0FBQ0EsT0FGRDs7QUFJQSxXQUFLc0MsRUFBTCxHQUFVLFVBQVM3TCxFQUFULEVBQWFXLEVBQWIsRUFBaUI7QUFDMUJBLFFBQUFBLEVBQUUsQ0FBQzJVLENBQUgsR0FBTyxHQUFQO0FBQ0E5QyxRQUFBQSxFQUFFLEdBQUcsSUFBSXhTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNd1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVQ7QUFDQTdDLFFBQUFBLEdBQUcsR0FBRzdTLEVBQUUsQ0FBQzJWLEVBQUgsQ0FBTWhELEVBQU4sQ0FBTjtBQUNBNVMsUUFBQUEsR0FBRyxDQUFDNlYsQ0FBSixDQUFNOUMsR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLENBQXBCO0FBQ0E3UyxRQUFBQSxFQUFFLENBQUM2VixFQUFILENBQU1qRCxFQUFOLEVBQVV6UyxFQUFFLENBQUN5UyxFQUFILENBQU1FLEdBQUcsQ0FBQyxDQUFELENBQVQsQ0FBVixFQUF5QkEsR0FBRyxDQUFDLENBQUQsQ0FBNUI7QUFDQS9TLFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTThFLEVBQU4sRUFBVUgsRUFBRSxDQUFDLENBQUQsQ0FBWixFQUFpQkEsRUFBRSxDQUFDLENBQUQsQ0FBbkIsRUFBd0IsQ0FBeEI7QUFDQTlSLFFBQUFBLEVBQUUsQ0FBQ2dWLEVBQUgsR0FBUSxFQUFSO0FBQ0EvVixRQUFBQSxHQUFHLENBQUNnVyxFQUFKLENBQU9qVixFQUFFLENBQUNnVixFQUFWLEVBQWMvQyxFQUFkLEVBQWtCNVMsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ2dWLEVBQVQsRUFBYTNWLEVBQUUsQ0FBQ1UsRUFBaEIsRUFBb0JDLEVBQUUsQ0FBQ2dWLEVBQXZCO0FBQ0E5QyxRQUFBQSxFQUFFLEdBQUcsSUFBSTdTLEVBQUUsQ0FBQ0QsRUFBSCxDQUFNd1YsSUFBTixNQUFnQixJQUFJLENBQXBCLENBQVQ7QUFDQXhDLFFBQUFBLEdBQUcsR0FBR2xULEVBQUUsQ0FBQzJWLEVBQUgsQ0FBTTNDLEVBQU4sQ0FBTjtBQUNBalQsUUFBQUEsR0FBRyxDQUFDNlYsQ0FBSixDQUFNekMsR0FBTixFQUFVLENBQVYsRUFBWSxDQUFDRCxHQUFHLEdBQUMsQ0FBTCxJQUFRLENBQXBCO0FBQ0FsVCxRQUFBQSxFQUFFLENBQUM2VixFQUFILENBQU01QyxFQUFOLEVBQVU5UyxFQUFFLENBQUM4UyxFQUFILENBQU1FLEdBQUcsQ0FBQyxDQUFELENBQVQsQ0FBVixFQUF5QkEsR0FBRyxDQUFDLENBQUQsQ0FBNUI7QUFDQXBULFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTW1GLEVBQU4sRUFBVUgsRUFBRSxDQUFDLENBQUQsQ0FBWixFQUFpQkEsRUFBRSxDQUFDLENBQUQsQ0FBbkIsRUFBd0IsQ0FBeEI7QUFDQW5TLFFBQUFBLEVBQUUsQ0FBQ2tWLEVBQUgsR0FBUSxFQUFSO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUNnVyxFQUFKLENBQU9qVixFQUFFLENBQUNrVixFQUFWLEVBQWM1QyxFQUFkLEVBQWtCalQsRUFBRSxDQUFDMEIsRUFBckI7QUFDQTlCLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTTNGLEVBQUUsQ0FBQ2tWLEVBQVQsRUFBYTdWLEVBQUUsQ0FBQ2tOLEVBQWhCLEVBQW9Cdk0sRUFBRSxDQUFDa1YsRUFBdkI7QUFDQTNDLFFBQUFBLEVBQUUsR0FBRyxJQUFJbFQsRUFBRSxDQUFDRCxFQUFILENBQU13VixJQUFOLE1BQWdCLE1BQU0sQ0FBdEIsQ0FBVDtBQUNBNVUsUUFBQUEsRUFBRSxDQUFDbVYsR0FBSCxHQUFTNUMsRUFBVDtBQUNBdFQsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2dWLEVBQWhCO0FBQ0EsT0FyQkQ7O0FBdUJBLFdBQUs3SixFQUFMLEdBQVUsVUFBUzlMLEVBQVQsRUFBYVcsRUFBYixFQUFpQjtBQUMxQkEsUUFBQUEsRUFBRSxDQUFDMlUsQ0FBSCxHQUFPLEdBQVA7QUFDQTlDLFFBQUFBLEVBQUUsR0FBRyxJQUFJeFMsRUFBRSxDQUFDRCxFQUFILENBQU13VixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBN0MsUUFBQUEsR0FBRyxHQUFHN1MsRUFBRSxDQUFDMlYsRUFBSCxDQUFNaEQsRUFBTixDQUFOO0FBQ0E1UyxRQUFBQSxHQUFHLENBQUM2VixDQUFKLENBQU05QyxHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxDQUFMLElBQVEsQ0FBcEI7QUFDQTdTLFFBQUFBLEVBQUUsQ0FBQzZWLEVBQUgsQ0FBTWpELEVBQU4sRUFBVXpTLEVBQUUsQ0FBQ3lTLEVBQUgsQ0FBTUUsR0FBRyxDQUFDLENBQUQsQ0FBVCxDQUFWLEVBQXlCQSxHQUFHLENBQUMsQ0FBRCxDQUE1QjtBQUNBL1MsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNOEUsRUFBTixFQUFVSCxFQUFFLENBQUMsQ0FBRCxDQUFaLEVBQWlCQSxFQUFFLENBQUMsQ0FBRCxDQUFuQixFQUF3QixDQUF4QjtBQUNBOVIsUUFBQUEsRUFBRSxDQUFDZ1YsRUFBSCxHQUFRLEVBQVI7QUFDQS9WLFFBQUFBLEdBQUcsQ0FBQ2dXLEVBQUosQ0FBT2pWLEVBQUUsQ0FBQ2dWLEVBQVYsRUFBYy9DLEVBQWQsRUFBa0I1UyxFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDZ1YsRUFBVCxFQUFhM1YsRUFBRSxDQUFDVSxFQUFoQixFQUFvQkMsRUFBRSxDQUFDZ1YsRUFBdkI7QUFDQTlDLFFBQUFBLEVBQUUsR0FBRyxJQUFJN1MsRUFBRSxDQUFDRCxFQUFILENBQU13VixJQUFOLE1BQWdCLElBQUksQ0FBcEIsQ0FBVDtBQUNBeEMsUUFBQUEsR0FBRyxHQUFHbFQsRUFBRSxDQUFDMlYsRUFBSCxDQUFNM0MsRUFBTixDQUFOO0FBQ0FqVCxRQUFBQSxHQUFHLENBQUM2VixDQUFKLENBQU16QyxHQUFOLEVBQVUsQ0FBVixFQUFZLENBQUNELEdBQUcsR0FBQyxDQUFMLElBQVEsQ0FBcEI7QUFDQWxULFFBQUFBLEVBQUUsQ0FBQzZWLEVBQUgsQ0FBTTVDLEVBQU4sRUFBVTlTLEVBQUUsQ0FBQzhTLEVBQUgsQ0FBTUUsR0FBRyxDQUFDLENBQUQsQ0FBVCxDQUFWLEVBQXlCQSxHQUFHLENBQUMsQ0FBRCxDQUE1QjtBQUNBcFQsUUFBQUEsR0FBRyxDQUFDa08sQ0FBSixDQUFNbUYsRUFBTixFQUFVSCxFQUFFLENBQUMsQ0FBRCxDQUFaLEVBQWlCQSxFQUFFLENBQUMsQ0FBRCxDQUFuQixFQUF3QixDQUF4QjtBQUNBblMsUUFBQUEsRUFBRSxDQUFDa1YsRUFBSCxHQUFRLEVBQVI7QUFDQWpXLFFBQUFBLEdBQUcsQ0FBQ2dXLEVBQUosQ0FBT2pWLEVBQUUsQ0FBQ2tWLEVBQVYsRUFBYzVDLEVBQWQsRUFBa0JqVCxFQUFFLENBQUMwQixFQUFyQjtBQUNBOUIsUUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNM0YsRUFBRSxDQUFDa1YsRUFBVCxFQUFhN1YsRUFBRSxDQUFDa04sRUFBaEIsRUFBb0J2TSxFQUFFLENBQUNrVixFQUF2QjtBQUNBM0MsUUFBQUEsRUFBRSxHQUFHLElBQUlsVCxFQUFFLENBQUNELEVBQUgsQ0FBTXdWLElBQU4sTUFBZ0IsTUFBTSxDQUF0QixDQUFUO0FBQ0E1VSxRQUFBQSxFQUFFLENBQUNtVixHQUFILEdBQVM1QyxFQUFUO0FBQ0F0VCxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNELEVBQVQsRUFBYUMsRUFBRSxDQUFDZ1YsRUFBaEI7QUFDQSxPQXJCRDs7QUF1QkEsV0FBSzVKLEVBQUwsR0FBVSxVQUFTOUMsRUFBVCxFQUFhakosRUFBYixFQUFpQlcsRUFBakIsRUFBcUI7QUFDOUJBLFFBQUFBLEVBQUUsQ0FBQzJVLENBQUgsSUFBUXJNLEVBQVI7QUFDQWtLLFFBQUFBLEdBQUcsR0FBRyxDQUFOO0FBQ0FDLFFBQUFBLEdBQUcsR0FBSXpTLEVBQUUsQ0FBQzJVLENBQUgsR0FBT25DLEdBQWQ7QUFDQUcsUUFBQUEsS0FBSyxHQUFFRixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0F4VCxRQUFBQSxHQUFHLENBQUM2VixDQUFKLENBQU1sQyxLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsQ0FBeEI7QUFDQUUsUUFBQUEsS0FBSyxHQUFFSixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0F4VCxRQUFBQSxHQUFHLENBQUM2VixDQUFKLENBQU1oQyxLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsRUFBeEI7QUFDQUUsUUFBQUEsS0FBSyxHQUFFTixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0F4VCxRQUFBQSxHQUFHLENBQUM2VixDQUFKLENBQU05QixLQUFOLEVBQVksQ0FBWixFQUFjLENBQUNELEtBQUssR0FBQyxDQUFQLElBQVUsQ0FBeEI7QUFDQTlULFFBQUFBLEdBQUcsQ0FBQ2tPLENBQUosQ0FBTXVGLEdBQU4sRUFBV3hULEVBQUUsQ0FBQ2tXLEVBQUgsQ0FBTS9WLEVBQUUsQ0FBQ3FULEdBQUgsQ0FBTyxDQUFQLEVBQVVFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBWCxFQUErQzFULEVBQUUsQ0FBQ2tXLEVBQUgsQ0FBTS9WLEVBQUUsQ0FBQ3FULEdBQUgsQ0FBTyxDQUFQLEVBQVVJLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBL0MsRUFBbUY1VCxFQUFFLENBQUNrVyxFQUFILENBQU0vVixFQUFFLENBQUNxVCxHQUFILENBQU8sQ0FBUCxFQUFVTSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQU4sRUFBMEJBLEtBQUssQ0FBQyxDQUFELENBQS9CLENBQW5GO0FBQ0FFLFFBQUFBLEtBQUssR0FBRVQsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVNBLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFRQSxHQUF4QjtBQUNBeFQsUUFBQUEsR0FBRyxDQUFDNlYsQ0FBSixDQUFNM0IsS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxJQUFVLEVBQXhCO0FBQ0FELFFBQUFBLEdBQUcsR0FBRy9ULEVBQUUsQ0FBQ2tXLEVBQUgsQ0FBTS9WLEVBQUUsQ0FBQzRULEdBQUgsQ0FBTyxDQUFQLEVBQVVFLEtBQUssQ0FBQyxDQUFELENBQWYsQ0FBTixFQUEwQkEsS0FBSyxDQUFDLENBQUQsQ0FBL0IsQ0FBTjtBQUNBbFUsUUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNcU4sSUFBTixFQUFZLENBQUMsR0FBRCxFQUFLLEVBQUwsRUFBUSxFQUFSLENBQVosRUFBeUJoVSxFQUFFLENBQUNELEVBQUgsQ0FBTW9KLEVBQS9CO0FBQ0F2SixRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU0wTixJQUFOLEVBQVlBLElBQVosRUFBa0JyVCxFQUFFLENBQUNnVixFQUFyQjtBQUNBL1YsUUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNc04sSUFBTixFQUFZRCxJQUFaLEVBQWtCLE1BQU0sSUFBeEI7QUFDQXBVLFFBQUFBLEdBQUcsQ0FBQ29XLEVBQUosQ0FBT2pDLEdBQVAsRUFBWUUsSUFBWjtBQUNBclUsUUFBQUEsR0FBRyxDQUFDcVcsQ0FBSixDQUFNbEMsR0FBTixFQUFXQSxHQUFYLEVBQWdCLENBQUMsU0FBRCxFQUFXLFNBQVgsRUFBcUIsU0FBckIsQ0FBaEI7QUFDQW5VLFFBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTXlOLEdBQU4sRUFBV0EsR0FBWCxFQUFnQixDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsQ0FBTCxFQUFPLENBQUMsQ0FBUixDQUFoQjtBQUNBblUsUUFBQUEsR0FBRyxDQUFDK0csQ0FBSixDQUFNb04sR0FBTixFQUFXQSxHQUFYLEVBQWdCSCxHQUFoQjtBQUNBaFUsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNOEosS0FBTixFQUFhZCxHQUFiO0FBQ0F6VCxRQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU02TixLQUFOLEVBQWFBLEtBQWIsRUFBb0JKLEdBQXBCO0FBQ0FuVSxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0rSixLQUFOLEVBQWEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBYjtBQUNBTSxRQUFBQSxNQUFNLEdBQUd6TCxFQUFUO0FBQ0FySixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU1tSyxJQUFOLEVBQVk3VCxFQUFFLENBQUNrVixFQUFmO0FBQ0FqVyxRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU1vSyxJQUFOLEVBQVk5VCxFQUFFLENBQUNnVixFQUFmOztBQUNBLGVBQU9qQixNQUFNLEdBQUcsTUFBaEIsRUFBd0I7QUFDdkJDLFVBQUFBLE1BQU0sR0FBR0QsTUFBVDtBQUNBOVUsVUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNd0ssTUFBTixFQUFjVixLQUFkO0FBQ0F2VSxVQUFBQSxHQUFHLENBQUNzTyxDQUFKLENBQU1tRyxLQUFOLEVBQWFELEtBQWIsRUFBb0JJLElBQXBCO0FBQ0FELFVBQUFBLE1BQU0sR0FBRzNVLEdBQUcsQ0FBQ3NXLENBQUosQ0FBTTdCLEtBQU4sQ0FBVDs7QUFDQSxjQUFJRSxNQUFNLEdBQUcsTUFBYixFQUFxQjtBQUNwQkEsWUFBQUEsTUFBTSxHQUFHdlQsSUFBSSxDQUFDbVYsSUFBTCxDQUFVNUIsTUFBVixDQUFUO0FBQ0EzVSxZQUFBQSxHQUFHLENBQUN1TyxDQUFKLENBQU1tRyxNQUFOLEVBQWNELEtBQWQsRUFBcUJFLE1BQXJCO0FBQ0FLLFlBQUFBLEtBQUssR0FBRyxPQUFPLENBQVAsR0FBV0wsTUFBbkI7QUFDQSxnQkFBSUssS0FBSyxHQUFHRCxNQUFSLEdBQWlCLEdBQXJCLEVBQ0NBLE1BQU0sR0FBRyxNQUFNQyxLQUFmO0FBQ0RoVixZQUFBQSxHQUFHLENBQUMwRyxDQUFKLENBQU11TyxNQUFOLEVBQWNBLE1BQWQsRUFBc0JqVixHQUFHLENBQUNpSCxDQUFKLENBQU15TixNQUFOLEVBQWNDLE1BQU0sR0FBR0ssS0FBdkIsQ0FBdEI7QUFDQTs7QUFDRGhWLFVBQUFBLEdBQUcsQ0FBQzBHLENBQUosQ0FBTWtPLElBQU4sRUFBWUEsSUFBWixFQUFrQjVVLEdBQUcsQ0FBQ2lILENBQUosQ0FBTWdPLE1BQU4sRUFBY0YsTUFBZCxDQUFsQjtBQUNBL1UsVUFBQUEsR0FBRyxDQUFDMEcsQ0FBSixDQUFNbU8sSUFBTixFQUFZQSxJQUFaLEVBQWtCN1UsR0FBRyxDQUFDaUgsQ0FBSixDQUFNMk4sSUFBTixFQUFZRyxNQUFaLENBQWxCO0FBQ0FELFVBQUFBLE1BQU0sSUFBSUMsTUFBVjtBQUNBOztBQUNEL1UsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDZ1YsRUFBVCxFQUFhbEIsSUFBYjtBQUNBN1UsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDa1YsRUFBVCxFQUFhckIsSUFBYjtBQUNBNVUsUUFBQUEsR0FBRyxDQUFDeUssQ0FBSixDQUFNMUosRUFBRSxDQUFDRCxFQUFULEVBQWFDLEVBQUUsQ0FBQ2dWLEVBQWhCO0FBQ0FiLFFBQUFBLEdBQUcsR0FBRyxFQUFOO0FBQ0EzQixRQUFBQSxHQUFHLEdBQUcsQ0FBTjtBQUNBQyxRQUFBQSxHQUFHLEdBQUl6UyxFQUFFLENBQUMyVSxDQUFILEdBQU9uQyxHQUFkO0FBQ0E2QixRQUFBQSxLQUFLLEdBQUU1QixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBU0EsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVFBLEdBQXhCO0FBQ0F4VCxRQUFBQSxHQUFHLENBQUM2VixDQUFKLENBQU1SLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLENBQVAsSUFBVSxFQUF4QjtBQUNBRCxRQUFBQSxHQUFHLEdBQUdsVixFQUFFLENBQUNrVyxFQUFILENBQU0vVixFQUFFLENBQUMrVSxHQUFILENBQU8sQ0FBUCxFQUFVRSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQU4sRUFBMEJBLEtBQUssQ0FBQyxDQUFELENBQS9CLENBQU47QUFDQUMsUUFBQUEsR0FBRyxHQUFJSixHQUFHLEdBQUdDLEdBQWI7QUFDQUssUUFBQUEsS0FBSyxHQUFFaEMsR0FBRyxHQUFDLENBQUosR0FBTSxDQUFOLEdBQVNBLEdBQUcsR0FBQyxDQUFKLEdBQU0sQ0FBTixHQUFRQSxHQUF4QjtBQUNBZ0MsUUFBQUEsS0FBSyxHQUFDLEdBQU4sR0FBVXhWLEdBQUcsQ0FBQzZWLENBQUosQ0FBTUosS0FBTixFQUFZLENBQVosRUFBYyxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxJQUFVLEVBQXhCLENBQVYsR0FBc0N4VixHQUFHLENBQUM2VixDQUFKLENBQU1KLEtBQU4sRUFBWSxDQUFaLEVBQWMsQ0FBQ0QsS0FBSyxHQUFDLEdBQVAsSUFBWSxPQUExQixDQUF0QztBQUNBRCxRQUFBQSxHQUFHLEdBQUd0VixFQUFFLENBQUNrVyxFQUFILENBQU0vVixFQUFFLENBQUNtVixHQUFILENBQU8sQ0FBUCxFQUFVRSxLQUFLLENBQUMsQ0FBRCxDQUFmLENBQU4sRUFBMEJBLEtBQUssQ0FBQyxDQUFELENBQS9CLENBQU47QUFDQXpWLFFBQUFBLEdBQUcsQ0FBQ2tSLENBQUosQ0FBTW5RLEVBQUUsQ0FBQ29DLEVBQVQsRUFBWSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBQVo7QUFDQXBDLFFBQUFBLEVBQUUsQ0FBQ0csRUFBSCxHQUFRSCxFQUFFLENBQUNtVixHQUFYO0FBQ0FsVyxRQUFBQSxHQUFHLENBQUM2VixDQUFKLENBQU05VSxFQUFFLENBQUNXLEVBQVQsRUFBWTRULEdBQVosRUFBZ0JBLEdBQWhCO0FBQ0F0VixRQUFBQSxHQUFHLENBQUN5SyxDQUFKLENBQU0xSixFQUFFLENBQUNzQyxFQUFULEVBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBWjtBQUNBdEMsUUFBQUEsRUFBRSxDQUFDd0IsRUFBSCxHQUFRZ1QsR0FBUjtBQUNBeFUsUUFBQUEsRUFBRSxDQUFDMkIsRUFBSCxHQUFRLENBQVI7QUFDQSxPQS9ERDs7QUFpRUEsV0FBS3dLLEVBQUwsR0FBVSxVQUFTOU0sRUFBVCxFQUFhVyxFQUFiLEVBQWlCb00sRUFBakIsRUFBcUI7QUFDOUJvRyxRQUFBQSxHQUFHLEdBQUcsQ0FBTjtBQUNBLFlBQUl4UyxFQUFFLENBQUMyVSxDQUFILEdBQU9uQyxHQUFYLEVBQWdCLE9BQU8sSUFBUDtBQUNoQixlQUFPLEtBQVA7QUFDQSxPQUpEO0FBT0E7O0FBRUQsU0FBSzNELEVBQUwsR0FBVSxVQUFTelAsRUFBVCxFQUFhO0FBQ3RCQSxNQUFBQSxFQUFFLENBQUNtUSxFQUFILEdBQVEsU0FBUjtBQUNBblEsTUFBQUEsRUFBRSxDQUFDK1AsRUFBSCxHQUFRLENBQVI7O0FBQ0EvUCxNQUFBQSxFQUFFLENBQUN3VixJQUFILEdBQVUsWUFBVztBQUFFLGVBQU92VSxJQUFJLENBQUNvVixNQUFMLEVBQVA7QUFBdUIsT0FBOUM7O0FBQ0FyVyxNQUFBQSxFQUFFLENBQUNxUCxFQUFILENBQU0sSUFBSW1ELHNCQUFKLEVBQU47QUFDQSxLQUxEOztBQU1DLFNBQUtpRCxFQUFMLEdBQVUsVUFBVTNPLENBQVYsRUFBYTtBQUFLLGFBQVFBLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBVixHQUFnQkEsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUFWLEdBQWNBLENBQXBDO0FBQTJDLEtBQXZFOztBQUVBLFNBQUs2TyxFQUFMLEdBQVUsVUFBVVcsQ0FBVixFQUFhQyxJQUFiLEVBQW1CckssRUFBbkIsRUFBdUI7QUFBSyxVQUFJc0ssUUFBUSxHQUFHdlYsSUFBSSxDQUFDcUIsS0FBTCxDQUFXNEosRUFBWCxDQUFmO0FBQWtDLFVBQUl1SyxJQUFJLEdBQUd2SyxFQUFFLEdBQUdzSyxRQUFoQjtBQUE2QjNXLE1BQUFBLEdBQUcsQ0FBQzZXLENBQUosQ0FBTUosQ0FBTixFQUFTQyxJQUFJLENBQUNDLFFBQUQsQ0FBYixFQUF5QkQsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBWixDQUE3QixFQUE2Q0MsSUFBN0M7QUFBdUQsS0FBNUo7O0FBRUEsU0FBS1QsRUFBTCxHQUFVLFVBQVNXLFVBQVQsRUFBcUJ6SyxFQUFyQixFQUF5QjtBQUFLLFVBQUlzSyxRQUFRLEdBQUd2VixJQUFJLENBQUNxQixLQUFMLENBQVc0SixFQUFYLENBQWY7QUFBa0MsVUFBSTBLLE9BQU8sR0FBR0osUUFBUSxHQUFHLENBQXpCO0FBQStCLGFBQU8zVyxHQUFHLENBQUN5TCxDQUFKLENBQU1xTCxVQUFVLENBQUNILFFBQUQsQ0FBaEIsRUFBNEJHLFVBQVUsQ0FBQ0MsT0FBRCxDQUF0QyxFQUFpRDFLLEVBQUUsR0FBR3NLLFFBQXRELENBQVA7QUFBMkUsS0FBcEw7QUFHRDs7QUFFRCxTQUFPNVcsU0FBUDtBQUNDLENBejFDQSxDQUFEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyA2MDVhNWVkYy0zNDc0LTQzNjMtOTJjMS1iZWQzMjYwYzk2NDRcclxuXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgICAgICAgICAocm9vdC5OZXV0cmlub0VmZmVjdCA9IGV4cG9ydHMpWydDaWdhcmV0dGUnXSA9IGZhY3RvcnkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IChyb290Lk5ldXRyaW5vRWZmZWN0IHx8IChyb290Lk5ldXRyaW5vRWZmZWN0ID0ge30pKTtcclxuICAgICAgICBuYW1lc3BhY2UuX19sYXN0X18gPSBuYW1lc3BhY2VbJ0NpZ2FyZXR0ZSddID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5mdW5jdGlvbiBDaWdhcmV0dGUoY3R4KSB7XHJcblx0dmFyIERiID0gdGhpcztcclxuXHJcblx0dmFyIG5lID0gZnVuY3Rpb24gKExkLCBCZCkge1xyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy53ZSA9IHRoaXMuQmQud2UucGVbMF07XHJcblxyXG5cdFx0XHR0aGlzLkxjID0gW25lLnByb3RvdHlwZS5FYyxcclxuXHRcdFx0XHRuZS5wcm90b3R5cGUuRmNdW3RoaXMud2UueGVdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdG5lLnByb3RvdHlwZSA9IHtcclxuXHRcdEVjOiBmdW5jdGlvbiAoZmUsIEFiLCBYYikge1xyXG5cdFx0XHR2YXIgR2MgPSBjdHguaWIoWGIuTWQpO1xyXG5cdFx0XHR2YXIgSGMgPSBNYXRoLmNvcyhHYyk7XHJcblx0XHRcdHZhciBJYyA9IE1hdGguc2luKEdjKTtcclxuXHRcdFx0dmFyIHllID0gY3R4LkFlKFhiLk5kWzBdKTtcclxuXHRcdFx0dmFyIHplID0gY3R4LkFlKFhiLk5kWzFdKTtcclxuXHRcdFx0ZmUuLyoqL3RyYW5zZm9ybSh5ZSAqIEhjLCB5ZSAqIEljLCB6ZSAqIC1JYywgemUgKiBIYywgQWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0RmM6IGZ1bmN0aW9uIChmZSwgQWIsIFhiKSB7XHJcblx0XHRcdHZhciBxID0gWGIuTWM7XHJcblx0XHRcdHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdFx0XHR2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHRcdFx0dmFyIHd6ID0gMi4wICogcVszXSAqIHFbMl07XHJcblx0XHRcdHZhciB5ZSA9IGN0eC5BZShYYi5OZFswXSk7XHJcblx0XHRcdHZhciB6ZSA9IGN0eC5BZShYYi5OZFsxXSk7XHJcblx0XHRcdGZlLi8qKi90cmFuc2Zvcm0oXHJcblx0XHRcdFx0eWUgKiAoMS4wIC0gMi4wICogcVsxXSAqIHFbMV0gLSB6MiksXHJcblx0XHRcdFx0eWUgKiAoeHkgKyB3eiksXHJcblx0XHRcdFx0emUgKiAod3ogLSB4eSksXHJcblx0XHRcdFx0emUgKiAoMi4wICogcVswXSAqIHFbMF0gKyB6MiAtIDEuMCksXHJcblx0XHRcdFx0QWJbMF0sIEFiWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0UGM6IGZ1bmN0aW9uIChmZSwgWGIsIGdlKSB7XHJcblx0XHRcdFhiLnZjKGZlLCAtMSwgZ2UpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuQmUgIT0gbnVsbCAmJiAhWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoWGIuT2QgPiAwLjAwMSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBBYiA9IFhiLkFiLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdHZhciBOZCA9IFhiLk5kLnNsaWNlKCk7XHJcblx0XHRcdFx0XHRcdGlmICghZ2UgfHwgZ2UuLyoqL3RyYW5zZm9ybShBYiwgTmQpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBkZiA9IE1hdGguYWJzKE5kWzBdKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZWYgPSBNYXRoLmFicyhOZFsxXSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkZiA+IDAuMDAxICYmIGVmID4gMC4wMDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZlLnNhdmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuTGMoZmUsIEFiLCBYYik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUudHJhbnNsYXRlKC1kZiAqIFhiLlBkWzBdLCAtZWYgKiAoMSAtIFhiLlBkWzFdKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRmZS5nbG9iYWxBbHBoYSAqPSBYYi5PZDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoWGIuZ2ZbMF0gPCAwLjk5OSB8fCBYYi5nZlsxXSA8IDAuOTk5IHx8IFhiLmdmWzJdIDwgMC45OTkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRmID49IDEgJiYgZWYgPj0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBZZSA9IGRmIDwgdGhpcy5UYyA/IGRmIDogdGhpcy5UYztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgWmUgPSBlZiA8IHRoaXMuVWMgPyBlZiA6IHRoaXMuVWM7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5hZihZZSwgWmUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJjb3B5XCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5CZS54ICsgdGhpcy5UYyAqIERlLCB0aGlzLkJlLnkgKyB0aGlzLlVjICogRWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLlRjLCB0aGlzLlVjLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0MCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibXVsdGlwbHlcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFN0eWxlID0gY3R4LmZmKFhiLmdmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdHguYmYuZmlsbFJlY3QoMCwgMCwgWWUsIFplKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3R4LmJmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24tYXRvcFwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0eC5iZi5kcmF3SW1hZ2UodGhpcy5CZS5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5UYywgdGhpcy5VYyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDAsIDAsIFllLCBaZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZShjdHguY2YsIDAsIDAsIFllLCBaZSwgMCwgMCwgZGYsIGVmKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZlLmRyYXdJbWFnZSh0aGlzLkJlLmltYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuQmUueCArIHRoaXMuVGMgKiBEZSwgdGhpcy5CZS55ICsgdGhpcy5VYyAqIEVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuVGMsIHRoaXMuVWMsIDAsIDAsIGRmLCBlZik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZmUucmVzdG9yZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0WGIudmMoZmUsIDEsIGdlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0SGQ6IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdFx0ZmUuc2F2ZSgpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMud2UpIHtcclxuXHRcdFx0XHRmZS5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSB0aGlzLkxkLm1hdGVyaWFsc1t0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS5tYXRlcmlhbEluZGV4XTtcclxuXHRcdFx0XHR0aGlzLkJlID0gdGhpcy5MZC50ZXh0dXJlRGVzY3NbdGhpcy5MZC4vKiovbW9kZWwucmVuZGVyU3R5bGVzW3RoaXMud2UucmVuZGVyU3R5bGVJbmRleF0udGV4dHVyZUluZGljZXNbMF1dO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuQmUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5CZSkge1xyXG5cdFx0XHRcdHRoaXMuVGMgPSB0aGlzLkJlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHR0aGlzLlVjID0gdGhpcy5CZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBrZChhLCBiKSB7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPiBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKGEuQWJbMl0gPCBiLkFiWzJdKVxyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdGZvciAodmFyIFdiID0gdGhpcy5CZC50Yy5sZW5ndGg7IFdiLS0gPiAwOykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlBjKGZlLCB0aGlzLkJkLnRjW1diXSwgZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5zb3J0KGtkKTtcclxuXHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5QYyhmZSwgdGhpcy5CZC50Y1tXYl0sIGdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmZS5yZXN0b3JlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgb2UgPSBmdW5jdGlvbiAoTGQsIEJkKSB7XHJcblxyXG5cdFx0dGhpcy5MZCA9IExkO1xyXG5cdFx0dGhpcy5CZCA9IEJkO1xyXG5cclxuXHRcdGlmICh0aGlzLkJkLndlLnBlLmxlbmd0aCA+IDApXHJcblx0XHRcdHRoaXMud2UgPSB0aGlzLkJkLndlLnBlWzBdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLndlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnZlcnRleCA9IFtcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9LFxyXG5cdFx0XHR7IC8qKi9wb3NpdGlvbjogWzAuMCwgMC4wLCAwLjBdLCAvKiovY29sb3I6IFswLCAwLCAwLCAwXSwgLyoqL3RleENvb3JkczogW1swLjAsIDAuMF1dIH0sXHJcblx0XHRcdHsgLyoqL3Bvc2l0aW9uOiBbMC4wLCAwLjAsIDAuMF0sIC8qKi9jb2xvcjogWzAsIDAsIDAsIDBdLCAvKiovdGV4Q29vcmRzOiBbWzAuMCwgMC4wXV0gfSxcclxuXHRcdFx0eyAvKiovcG9zaXRpb246IFswLjAsIDAuMCwgMC4wXSwgLyoqL2NvbG9yOiBbMCwgMCwgMCwgMF0sIC8qKi90ZXhDb29yZHM6IFtbMC4wLCAwLjBdXSB9XTtcclxuXHR9XHJcblxyXG5cdG9lLnByb3RvdHlwZSA9IHtcclxuXHRcdHFlOiBmdW5jdGlvbiAoWGIsIHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRYYi5DZSgtMSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLndlKSB7XHJcblxyXG5cdFx0XHRcdGlmICghWGIub2MpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgdjAgPSB0aGlzLnZlcnRleFswXTtcclxuXHRcdFx0XHRcdHZhciB2MSA9IHRoaXMudmVydGV4WzFdO1xyXG5cdFx0XHRcdFx0dmFyIHYyID0gdGhpcy52ZXJ0ZXhbMl07XHJcblx0XHRcdFx0XHR2YXIgdjMgPSB0aGlzLnZlcnRleFszXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgRmUgPSBbXSwgR2UgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy53ZS54ZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHZhciBhID0gY3R4LmliKFhiLk1kKTtcclxuXHRcdFx0XHRcdFx0dmFyIHMgPSAtTWF0aC5zaW4oYSk7XHJcblx0XHRcdFx0XHRcdHZhciBjID0gTWF0aC5jb3MoYSk7XHJcblxyXG5cdFx0XHRcdFx0XHRGZVswXSA9IHNlWzBdICogYyArIHJlWzBdICogcztcclxuXHRcdFx0XHRcdFx0RmVbMV0gPSBzZVsxXSAqIGMgKyByZVsxXSAqIHM7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gc2VbMl0gKiBjICsgcmVbMl0gKiBzO1xyXG5cclxuXHRcdFx0XHRcdFx0R2VbMF0gPSAtc2VbMF0gKiBzICsgcmVbMF0gKiBjO1xyXG5cdFx0XHRcdFx0XHRHZVsxXSA9IC1zZVsxXSAqIHMgKyByZVsxXSAqIGM7XHJcblx0XHRcdFx0XHRcdEdlWzJdID0gLXNlWzJdICogcyArIHJlWzJdICogYztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgcSA9IFhiLk1jO1xyXG5cdFx0XHRcdFx0XHR2YXIgejIgPSAyLjAgKiBxWzJdICogcVsyXTtcclxuXHRcdFx0XHRcdFx0dmFyIHh5ID0gMi4wICogcVswXSAqIHFbMV07XHJcblx0XHRcdFx0XHRcdHZhciB3eiA9IDIuMCAqIHFbM10gKiBxWzJdO1xyXG5cclxuXHRcdFx0XHRcdFx0RmVbMF0gPSAxLjAgLSAyLjAgKiBxWzFdICogcVsxXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRGZVsxXSA9IHh5ICsgd3o7XHJcblx0XHRcdFx0XHRcdEZlWzJdID0gMi4wICogcVswXSAqIHFbMl0gLSAyLjAgKiBxWzNdICogcVsxXTtcclxuXHJcblx0XHRcdFx0XHRcdEdlWzBdID0geHkgLSB3ejtcclxuXHRcdFx0XHRcdFx0R2VbMV0gPSAxLjAgLSAyLjAgKiBxWzBdICogcVswXSAtIHoyO1xyXG5cdFx0XHRcdFx0XHRHZVsyXSA9IDIuMCAqIHFbMV0gKiBxWzJdICsgMi4wICogcVszXSAqIHFbMF07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dmFyIEhlID0gW10sIEllID0gW10sIEplID0gW10sIEtlID0gW107XHJcblx0XHRcdFx0XHRjdHgudShIZSwgRmUsIC1YYi5OZFswXSAqIFhiLlBkWzBdKTtcclxuXHRcdFx0XHRcdGN0eC51KEllLCBGZSwgWGIuTmRbMF0gKiAoMS4wIC0gWGIuUGRbMF0pKTtcclxuXHRcdFx0XHRcdGN0eC51KEplLCBHZSwgLVhiLk5kWzFdICogWGIuUGRbMV0pO1xyXG5cdFx0XHRcdFx0Y3R4LnUoS2UsIEdlLCBYYi5OZFsxXSAqICgxLjAgLSBYYi5QZFsxXSkpO1xyXG5cclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgSGUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYwLi8qKi9wb3NpdGlvbiwgdjAuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIEhlLCBLZSk7XHJcblx0XHRcdFx0XHRjdHguYyh2MS4vKiovcG9zaXRpb24sIHYxLi8qKi9wb3NpdGlvbiwgWGIuQWIpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCBJZSwgS2UpO1xyXG5cdFx0XHRcdFx0Y3R4LmModjIuLyoqL3Bvc2l0aW9uLCB2Mi4vKiovcG9zaXRpb24sIFhiLkFiKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgSWUsIEplKTtcclxuXHRcdFx0XHRcdGN0eC5jKHYzLi8qKi9wb3NpdGlvbiwgdjMuLyoqL3Bvc2l0aW9uLCBYYi5BYik7XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgcmdiID0gY3R4LnYoWGIuZ2YsIDI1NSk7XHJcblx0XHRcdFx0XHRcdHYwLi8qKi9jb2xvciA9IHYxLi8qKi9jb2xvciA9IHYyLi8qKi9jb2xvciA9IHYzLi8qKi9jb2xvciA9IFtyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdLCBYYi5PZCAqIDI1NV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgRGUgPSBNYXRoLmZsb29yKFhiLlFjICUgdGhpcy53ZS5SYyk7XHJcblx0XHRcdFx0XHRcdHZhciBFZSA9IE1hdGguZmxvb3IoWGIuUWMgLyB0aGlzLndlLlJjKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBQZSwgUWUsIFJlLCBTZTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBXZSA9IHRoaXMuTGQudGV4dHVyZXNSZW1hcFt0aGlzLkxkLi8qKi9tb2RlbC5yZW5kZXJTdHlsZXNbdGhpcy53ZS5yZW5kZXJTdHlsZUluZGV4XS50ZXh0dXJlSW5kaWNlc1swXV07XHJcblx0XHRcdFx0XHRcdGlmIChXZSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBVZSA9IFdlLndpZHRoIC8gdGhpcy53ZS5SYztcclxuXHRcdFx0XHRcdFx0XHR2YXIgVmUgPSBXZS5oZWlnaHQgLyB0aGlzLndlLlNjO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgUGUgPSBXZS54ICsgRGUgKiBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUWUgPSBQZSArIFVlO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBSZSA9IChXZS55ICsgV2UuaGVpZ2h0IC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgVWUgPSAxLjAgLyB0aGlzLndlLlJjO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBWZSA9IDEuMCAvIHRoaXMud2UuU2M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBQZSA9IERlICogVWU7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFFlID0gUGUgKyBVZTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgUmUgPSAoMS4wIC0gRWUgKiBWZSk7XHJcblx0XHRcdFx0XHRcdFx0dmFyIFNlID0gUmUgLSBWZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0djAuLyoqL3RleENvb3Jkc1swXSA9IFtQZSwgU2VdO1xyXG5cdFx0XHRcdFx0XHR2MS4vKiovdGV4Q29vcmRzWzBdID0gW1BlLCBSZV07XHJcblx0XHRcdFx0XHRcdHYyLi8qKi90ZXhDb29yZHNbMF0gPSBbUWUsIFJlXTtcclxuXHRcdFx0XHRcdFx0djMuLyoqL3RleENvb3Jkc1swXSA9IFtRZSwgU2VdO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCkge1xyXG5cdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIuYmVmb3JlUXVhZCh0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYwKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYxKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYyKTtcclxuXHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5wdXNoVmVydGV4KHYzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIXJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsKSB7XHJcblx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKDAsIDYsIHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgbGFzdFJlbmRlckNhbGwgPSByZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsYXN0UmVuZGVyQ2FsbC5yZW5kZXJTdHlsZUluZGV4ID09IHRoaXMud2UucmVuZGVyU3R5bGVJbmRleCkge1xyXG5cdFx0XHRcdFx0XHRcdGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMgKz0gNjtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZW5kZXJCdWZmZXIucHVzaFJlbmRlckNhbGwobGFzdFJlbmRlckNhbGwpO1xyXG5cdFx0XHRcdFx0XHRcdHJlbmRlckJ1ZmZlci5fX2xhc3RSZW5kZXJDYWxsID0gbmV3IGN0eC5SZW5kZXJDYWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFzdFJlbmRlckNhbGwuc3RhcnRJbmRleCArIGxhc3RSZW5kZXJDYWxsLm51bUluZGljZXMsXHJcblx0XHRcdFx0XHRcdFx0XHQ2LCB0aGlzLndlLnJlbmRlclN0eWxlSW5kZXgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRYYi5DZSgxLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1ZTogZnVuY3Rpb24gKHNlLCByZSwgdGUsIHJlbmRlckJ1ZmZlcikge1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMuQmQuVmMpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy5CZC50Yy5sZW5ndGg7ICsrV2IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRmb3IgKHZhciBXYiA9IHRoaXMuQmQudGMubGVuZ3RoOyBXYi0tID4gMDspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5xZSh0aGlzLkJkLnRjW1diXSwgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHR0aGlzLkJkLnRjLmZvckVhY2goZnVuY3Rpb24gKFhiKSB7XHJcblx0XHRcdFx0XHRcdFhiLmRlcHRoID0gY3R4LkgodGUsIFhiLkFiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuQmQudGMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5kZXB0aCA8IGIuZGVwdGgpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdGlmIChhLmRlcHRoID4gYi5kZXB0aClcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5CZC50Yy5mb3JFYWNoKGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnFlKFhiLCBzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdFx0XHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFyIGxkID0gZnVuY3Rpb24gKExkLCB3ZSwgdmUpIHtcclxuXHRcdHZhciBWYiA9IHRoaXM7XHJcblx0XHR0aGlzLkxkID0gTGQ7XHJcblx0XHR0aGlzLndlID0gd2U7XHJcblxyXG5cdFx0Ly8gRWJcclxuXHJcblx0XHRmdW5jdGlvbiBFYigpIHtcclxuXHRcdFx0dGhpcy5GYiA9IDA7XHJcblx0XHRcdHRoaXMuR2IgPSAxO1xyXG5cdFx0XHR0aGlzLkhiID0gbnVsbDtcclxuXHRcdFx0dGhpcy5JYiA9IG51bGw7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuT2IgPSB0aGlzLkdiO1xyXG5cdFx0XHRcdHRoaXMuRmIgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0RWIucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIFJiID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWUgPSBMZC5SYjtcclxuXHRcdFx0XHR2YXIgU2IgPSBRYjtcclxuXHRcdFx0XHR2YXIgaWMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy56YiA+IDAuMDAwMDAxKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIFRiID0gdGhpcy5PYiArIFFiICogdGhpcy56YjtcclxuXHJcblx0XHRcdFx0XHR3aGlsZSAoVGIgPj0gMS4wKSB7XHJcblx0XHRcdFx0XHRcdHZhciBVYiA9IHRoaXMuemIgPCAwLjAwMSA/IDAuMCA6ICgxLjAgLSB0aGlzLk9iKSAvIHRoaXMuemI7XHJcblx0XHRcdFx0XHRcdFNiIC09IFViO1xyXG5cdFx0XHRcdFx0XHRSYiArPSBVYjtcclxuXHRcdFx0XHRcdFx0c3lzdGVtVGltZSArPSBVYjtcclxuXHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLkhiICE9IG51bGwgJiYgUmIgPiB0aGlzLkhiKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHRcdFx0XHRcdFx0TGQuUmIgPSBzeXN0ZW1UaW1lO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKEFiICYmIFFiID4gMClcclxuXHRcdFx0XHRcdFx0XHRjdHguYWIoVmIuQWIsIEFiLCBWYi5CYiwgU2IgLyBRYik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoTWMgJiYgUWIgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdGN0eC5zbGVycHEoVmIuTWMsIE1jLCBWYi5wcmV2Um90YXRpb24sIFNiIC8gUWIpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFNiKTtcclxuXHRcdFx0XHRcdFx0XHQrK2ljO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLk9iID0gMC4wO1xyXG5cdFx0XHRcdFx0XHRUYiAtPSAxLjA7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5JYiAhPSBudWxsICYmICsrdGhpcy5GYiA+PSB0aGlzLkliKSB7XHJcblx0XHRcdFx0XHRcdFx0VmIuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuT2IgPSBUYjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0UmIgKz0gU2I7XHJcblx0XHRcdFx0VmIuUmIgPSBSYjtcclxuXHJcblx0XHRcdFx0aWYgKEFiKVxyXG5cdFx0XHRcdFx0Y3R4LlQoVmIuQWIsIEFiKTtcclxuXHJcblx0XHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdFx0Y3R4LlUoVmIuTWMsIE1jKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGljO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWNcclxuXHJcblx0XHRmdW5jdGlvbiBhYygpIHtcclxuXHRcdFx0dGhpcy5HYiA9IDE7XHJcblx0XHRcdHRoaXMuS2IgPSAwO1xyXG5cdFx0XHR0aGlzLkxiID0gMTtcclxuXHJcblx0XHRcdFZiLndlLk1iKHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuYmMgPSB0aGlzLkdiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0YWMucHJvdG90eXBlID0ge1xyXG5cdFx0XHRKZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoaXMuTmIoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cdFx0XHRcdFZiLndlLlBiKFFiLCBWYiwgdGhpcyk7IC8vIElNUExcclxuXHJcblx0XHRcdFx0dmFyIGNjID0gVmIuUmI7XHJcblx0XHRcdFx0dmFyIGRjID0gY2MgKyBRYjtcclxuXHRcdFx0XHR2YXIgc3lzdGVtVGltZUJlZm9yZUZyYW1lID0gTGQuUmI7XHJcblx0XHRcdFx0dmFyIHN5c3RlbVRpbWVBZnRlckZyYW1lID0gc3lzdGVtVGltZUJlZm9yZUZyYW1lICsgUWI7XHJcblx0XHRcdFx0dmFyIGVjID0gQWIgPyBjdHguTyhjdHguaChBYiwgVmIuQmIpKSA6IDA7XHJcblx0XHRcdFx0dmFyIGljID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKGVjID4gMC4wMDAwMDEpIHtcclxuXHRcdFx0XHRcdHZhciBmYyA9IGVjIC8gdGhpcy5yZDtcclxuXHRcdFx0XHRcdHZhciBUYiA9IHRoaXMuYmMgKyBmYztcclxuXHJcblx0XHRcdFx0XHR2YXIgaGMgPSBmYyA8IDAuMDAxID9cclxuXHRcdFx0XHRcdFx0MS4wIC0gdGhpcy5iYyA6ICgxLjAgLSB0aGlzLmJjKSAvIGZjO1xyXG5cclxuXHRcdFx0XHRcdHZhciBqYyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHdoaWxlIChUYiA+IDEuMCkge1xyXG5cdFx0XHRcdFx0XHR2YXIga2MgPSBjYyArIGhjICogUWI7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRcdFx0Y3R4LmFiKGpjLCBWYi5CYiwgQWIsIGhjKTtcclxuXHJcblx0XHRcdFx0XHRcdFZiLlJiID0ga2M7XHJcblx0XHRcdFx0XHRcdGN0eC5UKFZiLkFiLCBqYyk7XHJcblx0XHRcdFx0XHRcdExkLlJiID0gY3R4Llgoc3lzdGVtVGltZUJlZm9yZUZyYW1lLCBzeXN0ZW1UaW1lQWZ0ZXJGcmFtZSwgaGMpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gZm9yIHRoZSBmdXR1cmUgd2hlbiBKYiB3b3VsZCBiZSBleHRlcm5hbFxyXG5cdFx0XHRcdFx0XHR0aGlzLkxiID0gdGhpcy5KYjtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLkpiOyArK1diKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKFZiLnNjLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLkpiID09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gMDtcclxuXHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLktiID0gV2IgLyAodGhpcy5KYiAtIDEpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgWGIgPSBWYi5zYy5wb3AoKTtcclxuXHRcdFx0XHRcdFx0XHRWYi50Yy51bnNoaWZ0KFhiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKFdiID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRYYi5ZYigpO1xyXG5cdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFhiLlpiKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFhiLklkKFFiICogKDEuMCAtIGhjKSk7XHJcblx0XHRcdFx0XHRcdFx0KytpYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aGMgKz0gMS4wIC8gZmM7XHJcblx0XHRcdFx0XHRcdFRiIC09IDEuMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLmJjID0gVGI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRWYi5SYiA9IGRjO1xyXG5cclxuXHRcdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0XHRjdHguVChWYi5BYiwgQWIpO1xyXG5cclxuXHRcdFx0XHRpZiAoTWMpXHJcblx0XHRcdFx0XHRjdHguVShWYi5NYywgTWMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gaWM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtY1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1jKCkge1xyXG5cdFx0XHR0aGlzLkFiID0gW107XHJcblx0XHRcdHRoaXMuUGQgPSBbXTtcclxuXHRcdFx0dGhpcy5OZCA9IFtdO1xyXG5cdFx0XHR0aGlzLmdmID0gW107XHJcblx0XHRcdHRoaXMuS2MgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRtYy5wcm90b3R5cGUgPSB7XHJcblx0XHRcdG5jOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdHZhciBwYyA9IHRoaXMuS2NbaV07XHJcblx0XHRcdFx0XHRwYy5CZC5KZCh0aGlzLkFiLCBudWxsKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocGMuQWQuc2QpXHJcblx0XHRcdFx0XHRcdHBjLkJkLmRpc2FjdGl2YXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0WWI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRWYi53ZS5mZChWYiwgdGhpcyk7IC8vIElNUExcclxuXHRcdFx0XHR0aGlzLm5jKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRaYjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFZiLndlLmdkKFZiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0XHRcdHRoaXMubmMoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdElkOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRWYi53ZS5xYyhRYiwgVmIsIHRoaXMpOyAvLyBJTVBMXHJcblxyXG5cdFx0XHRcdHRoaXMucmMoUWIpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cGM6IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLktjW2plXS5CZDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJjOiBmdW5jdGlvbiAoUWIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuS2MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMuS2NbaV0uQmQuSWQoUWIsIHRoaXMuQWIsIG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVjOiBmdW5jdGlvbiAobWQsIG5kKSB7XHJcblx0XHRcdFx0dGhpcy5LYy5wdXNoKHtcclxuXHRcdFx0XHRcdEJkOiBuZXcgbGQoTGQsIG1kLCB2ZSksXHJcblx0XHRcdFx0XHRBZDogbmRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHZjOiBmdW5jdGlvbiAoZmUsIHhjLCBnZSkge1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5LYy5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdFx0dmFyIHBjID0gdGhpcy5LY1tpXTtcclxuXHJcblx0XHRcdFx0XHRpZiAoeGMgPT0gcGMuQWQueGMpXHJcblx0XHRcdFx0XHRcdHBjLkJkLkhkKGZlLCBnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Q2U6IGZ1bmN0aW9uICh4Yywgc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmICh4YyA9PSBwYy5BZC54YylcclxuXHRcdFx0XHRcdFx0cGMuQmQudWUoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR3YzogZnVuY3Rpb24gKGZlKSB7XHJcblx0XHRcdFx0dGhpcy5vYyA9IHRydWU7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR2YXIgcGMgPSB0aGlzLktjW2ldO1xyXG5cclxuXHRcdFx0XHRcdGlmIChwYy5BZC5zZCkge1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5hY3RpdmF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRwYy5CZC5JZCgwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0cGMuQmQuZGlzYWN0aXZhdGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR5YzogZnVuY3Rpb24gKEdkKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLktjLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0XHR0aGlzLktjW2ldLkJkLkVkKEdkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB6Y1xyXG5cclxuXHRcdGZ1bmN0aW9uIHpjKCkge1xyXG5cdFx0fVxyXG5cclxuXHRcdHpjLnByb3RvdHlwZS5BYyA9IGZ1bmN0aW9uIChYYikge1xyXG5cdFx0XHRyZXR1cm4gVmIud2UuQ2MoVmIsIFhiLCB0aGlzKTsgLy8gSU1QTFxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxkIEFkXHJcblxyXG5cdFx0dGhpcy5BYiA9IFtdO1xyXG5cdFx0dGhpcy5CYiA9IFtdO1xyXG5cdFx0dGhpcy5NYyA9IFtdO1xyXG5cdFx0dGhpcy5wcmV2Um90YXRpb24gPSBbXTtcclxuXHRcdHRoaXMudGMgPSBbXTtcclxuXHRcdHRoaXMuc2MgPSBbXTtcclxuXHRcdHRoaXMuV2MgPSBuZXcgemMoKTtcclxuXHRcdHRoaXMuY29uc3RydWN0ID0gbmV3IHZlKHRoaXMuTGQsIHRoaXMpO1xyXG5cdFx0dGhpcy5ZYyA9IFtdO1xyXG5cdFx0dGhpcy5hZCA9IFtdO1xyXG5cclxuXHRcdHRoaXMuZGQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMudmQgPSBuZXcgRWIoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGlzLnZkID0gbmV3IGFjKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy53ZS51ZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdGZvciAodmFyIFdiID0gMDsgV2IgPCB0aGlzLmpkOyArK1diKSB7XHJcblx0XHRcdHZhciBYYiA9IG5ldyBtYygpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaWQgPSAwOyBpZCA8IHRoaXMuWWMubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdFx0dmFyIGhkID0gdGhpcy5ZY1tpZF07XHJcblx0XHRcdFx0WGIudWMoaGQuRGIsIGhkLkFkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zYy5wdXNoKFhiKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cclxuXHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIgPyBBYiA6IFswLCAwLCAwXSk7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5wcmV2Um90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0dGhpcy53ZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5aYyA9IHRydWU7XHJcblx0XHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLkpkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cclxuXHRcdHRoaXMuc2MucHVzaC5hcHBseSh0aGlzLnNjLCB0aGlzLnRjKTtcclxuXHRcdHRoaXMudGMubGVuZ3RoID0gMDtcclxuXHJcblx0XHR0aGlzLnZkLkpkKCk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuSWQgPSBmdW5jdGlvbiAoUWIsIEFiLCBNYykge1xyXG5cclxuXHRcdGlmICh0aGlzLnBhdXNlZF8pXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuVGQoQWIsIE1jKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMud2QgPSB0aGlzLlJiO1xyXG5cclxuXHRcdGlmIChBYikge1xyXG5cdFx0XHRjdHguVCh0aGlzLkJiLCB0aGlzLkFiKTtcclxuXHRcdFx0aWYgKFFiID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0dmFyIHNoaWZ0ID0gW107XHJcblx0XHRcdFx0Y3R4Lmcoc2hpZnQsIEFiLCB0aGlzLkJiKTtcclxuXHRcdFx0XHRjdHguVCh0aGlzLmFkLCBzaGlmdCk7XHJcblx0XHRcdFx0Y3R4LncodGhpcy5hZCwgdGhpcy5hZCwgUWIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGN0eC5XKHRoaXMuYWQsIDAsIDAsIDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y3R4LlcodGhpcy5hZCwgMCwgMCwgMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguVSh0aGlzLnByZXZSb3RhdGlvbiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGljO1xyXG5cclxuXHRcdGlmICh0aGlzLlpjICYmICF0aGlzLmdlbmVyYXRvcnNQYXVzZWRfKSB7XHJcblx0XHRcdGljID0gdGhpcy52ZC5JZChRYiwgQWIsIE1jKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAoQWIpXHJcblx0XHRcdFx0Y3R4LlQodGhpcy5BYiwgQWIpO1xyXG5cclxuXHRcdFx0aWYgKE1jKVxyXG5cdFx0XHRcdGN0eC5VKHRoaXMuTWMsIE1jKTtcclxuXHJcblx0XHRcdGljID0gMDtcclxuXHRcdFx0dGhpcy5SYiArPSBRYjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciBXYiA9IGljOyBXYiA8IHRoaXMudGMubGVuZ3RoOykge1xyXG5cdFx0XHR2YXIgWGIgPSB0aGlzLnRjW1diXTtcclxuXHJcblx0XHRcdGlmICghWGIub2MpIHtcclxuXHRcdFx0XHRYYi5JZChRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLldjLkFjKHRoaXMudGNbV2JdKSkge1xyXG5cdFx0XHRcdFx0WGIud2MoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy54ZChXYikpXHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRYYi5yYyhRYik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnhkKFdiKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQrK1diO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGxkLnByb3RvdHlwZS54ZCA9IGZ1bmN0aW9uIChqZSkge1xyXG5cdFx0dmFyIFhiID0gdGhpcy50Y1tqZV07XHJcblxyXG5cdFx0dmFyIHJlYWR5ID0gdHJ1ZTtcclxuXHJcblx0XHRmb3IgKHZhciBpZCA9IDA7IGlkIDwgWGIuS2MubGVuZ3RoOyArK2lkKSB7XHJcblx0XHRcdHZhciBCZCA9IFhiLktjW2lkXS5CZDtcclxuXHJcblx0XHRcdGlmIChCZC5hY3RpdmF0ZWQoKSB8fCBCZC50Yy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0cmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChyZWFkeSkge1xyXG5cdFx0XHR0aGlzLnNjLnB1c2godGhpcy50Y1tqZV0pO1xyXG5cdFx0XHR0aGlzLnRjLnNwbGljZShqZSwgMSk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5IZCA9IGZ1bmN0aW9uIChmZSwgZ2UpIHtcclxuXHRcdHRoaXMuY29uc3RydWN0LkhkKGZlLCBnZSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUudWUgPSBmdW5jdGlvbiAoc2UsIHJlLCB0ZSwgcmVuZGVyQnVmZmVyKSB7XHJcblx0XHR0aGlzLmNvbnN0cnVjdC51ZShzZSwgcmUsIHRlLCByZW5kZXJCdWZmZXIpO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLlRkID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0dGhpcy53ZCA9IHRoaXMuUmI7XHJcblxyXG5cdFx0aWYgKEFiKSB7XHJcblx0XHRcdGN0eC5UKHRoaXMuQmIsIHRoaXMuQWIpO1xyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCBBYik7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKE1jKSB7XHJcblx0XHRcdGN0eC5VKHRoaXMucHJldlJvdGF0aW9uLCB0aGlzLk1jKTtcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgTWMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLnVjID0gZnVuY3Rpb24gKG1kLCBuZCkge1xyXG5cdFx0dGhpcy5ZYy5wdXNoKHsgRGI6IG1kLCBBZDogbmQgfSk7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL3BhdXNlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5wYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGF1c2VkXyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYXVzZWRfO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS4vKiovdW5wYXVzZUdlbmVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdlbmVyYXRvcnNQYXVzZWRfID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRsZC5wcm90b3R5cGUuLyoqL2dlbmVyYXRvcnNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0b3JzUGF1c2VkXztcclxuXHR9XHJcblxyXG5cdGxkLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuWmMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmRpc2FjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5aYyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLmFjdGl2YXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLlpjO1xyXG5cdH1cclxuXHJcblx0bGQucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50Yy5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHR2YXIga2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgQ2IgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgdmUsIG9wdGlvbnMpIHtcclxuXHRcdFx0dGhpcy4vKiovbW9kZWwgPSB3ZTtcclxuXHJcblx0XHRcdHRoaXMuQWIgPSBbXTtcclxuXHRcdFx0dGhpcy5NYyA9IFtdO1xyXG5cclxuXHRcdFx0Ly8ga2UgQWRcclxuXHJcblx0XHRcdHRoaXMub2QgPSBbXTtcclxuXHJcblx0XHRcdHRoaXMucGQgPSBmdW5jdGlvbiAobWQpIHtcclxuXHRcdFx0XHR2YXIgQmQgPSBuZXcgbGQodGhpcywgbWQsIHZlKTtcclxuXHRcdFx0XHRCZC5OYih0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdFx0XHR0aGlzW1wiX1wiLmNvbmNhdChtZC5uYW1lKV0gPSBCZDtcclxuXHRcdFx0XHR0aGlzLm9kLnB1c2goQmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLk5iID0gZnVuY3Rpb24gKEFiLCBNYykge1xyXG5cdFx0XHRcdHRoaXMuQ2QgPSAwLjA7XHJcblx0XHRcdFx0dGhpcy5SYiA9IDAuMDtcclxuXHRcdFx0XHRjdHguVCh0aGlzLkFiLCBBYiA/IEFiIDogWzAsIDAsIDBdKTtcclxuXHRcdFx0XHRjdHguVSh0aGlzLk1jLCBNYyA/IE1jIDogWzAsIDAsIDAsIDFdKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5OYihBYiwgTWMpO1xyXG5cdFx0XHR0aGlzLi8qKi9tb2RlbC5xZCh0aGlzKTsgLy8gSU1QTFxyXG5cclxuXHRcdFx0dGhpcy5fcHJlc2ltTmVlZGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zLmdlbmVyYXRvcnNQYXVzZWQpIHtcclxuXHRcdFx0XHR0aGlzLi8qKi9wYXVzZUdlbmVyYXRvcnNJbkFsbEVtaXR0ZXJzKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHRcdHRoaXMuLyoqL3BhdXNlQWxsRW1pdHRlcnMoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgQWIsIE1jKTtcclxuXHRcdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9yZXN0YXJ0ID0gZnVuY3Rpb24gKC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucykge1xyXG5cclxuXHRcdHRoaXMuTmIoLyoqL3Bvc2l0aW9uID8gLyoqL3Bvc2l0aW9uIDogdGhpcy5BYiwgLyoqL3JvdGF0aW9uID8gLyoqL3JvdGF0aW9uIDogdGhpcy5NYyk7XHJcblx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSB0cnVlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkpkKHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IHRydWU7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZW5lcmF0b3JzUGF1c2VkKSB7XHJcblx0XHRcdHRoaXMuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBhdXNlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi9wYXVzZUFsbEVtaXR0ZXJzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnplcm9VcGRhdGUoKTtcclxuXHRcdFx0dGhpcy4vKiovdXBkYXRlKHRoaXMuVWQsIHRoaXMuQWIsIHRoaXMuTWMpO1xyXG5cdFx0XHR0aGlzLl9wcmVzaW1OZWVkZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS56ZXJvVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9kLmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdHRoaXMub2RbaV0uSWQoMCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VwZGF0ZSA9IGZ1bmN0aW9uICgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKSB7XHJcblx0XHRpZiAodGhpcy5EZCA+IDAuMClcclxuXHRcdFx0dGhpcy51cGRhdGVGaXhlZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy51cGRhdGVGbGV4KC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZpeGVkID0gZnVuY3Rpb24gKC8qKi9kdCwgLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24pIHtcclxuXHRcdHZhciB1cGRhdGVkVGltZSA9IDAuMDtcclxuXHRcdHZhciBoYyA9IFtdO1xyXG5cdFx0Y3R4LlQoaGMsIHRoaXMuQWIpO1xyXG5cdFx0dmFyIGZyYW1lUm90YXRpb24gPSBbXTtcclxuXHRcdGN0eC5VKGZyYW1lUm90YXRpb24sIHRoaXMuTWMpO1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24gJiYgY3R4LmVxdWFsdjNfKC8qKi9wb3NpdGlvbiwgdGhpcy5BYikpXHJcblx0XHRcdC8qKi9wb3NpdGlvbiA9IG51bGw7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbiAmJiBjdHguZXF1YWxxXygvKiovcm90YXRpb24sIHRoaXMuTWMpKVxyXG5cdFx0XHQvKiovcm90YXRpb24gPSBudWxsO1xyXG5cclxuXHRcdHdoaWxlICgoLyoqL2R0IC0gdXBkYXRlZFRpbWUpICsgdGhpcy5DZCA+PSB0aGlzLkRkKSB7XHJcblx0XHRcdHZhciBjYyA9IHRoaXMuUmI7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRcdGN0eC5hYihoYywgdGhpcy5BYiwgLyoqL3Bvc2l0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRpZiAoLyoqL3JvdGF0aW9uKVxyXG5cdFx0XHRcdGN0eC5zbGVycHEoZnJhbWVSb3RhdGlvbiwgdGhpcy5NYywgLyoqL3JvdGF0aW9uLCB1cGRhdGVkVGltZSAvIC8qKi9kdCk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHR0aGlzLm9kW2ldLklkKHRoaXMuRGQsIGhjLCBmcmFtZVJvdGF0aW9uKTtcclxuXHJcblx0XHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVkVGltZSArPSB0aGlzLkRkIC0gdGhpcy5DZDtcclxuXHRcdFx0dGhpcy5DZCA9IDAuMDtcclxuXHRcdFx0dGhpcy5SYiA9IGNjICsgdGhpcy5EZDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblxyXG5cdFx0dGhpcy5DZCArPSAvKiovZHQgLSB1cGRhdGVkVGltZTtcclxuXHR9XHJcblx0XHJcblx0a2UucHJvdG90eXBlLnVwZGF0ZUZsZXggPSBmdW5jdGlvbiAoLyoqL2R0LCAvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cdFx0dmFyIGNjID0gdGhpcy5SYjtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5JZCgvKiovZHQsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uKTtcclxuXHRcdFx0dGhpcy5SYiA9IGNjO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuUmIgPSBjYyArIC8qKi9kdDtcclxuXHJcblx0XHRpZiAoLyoqL3Bvc2l0aW9uKVxyXG5cdFx0XHRjdHguVCh0aGlzLkFiLCAvKiovcG9zaXRpb24pO1xyXG5cclxuXHRcdGlmICgvKiovcm90YXRpb24pXHJcblx0XHRcdGN0eC5VKHRoaXMuTWMsIC8qKi9yb3RhdGlvbik7XHJcblx0fVxyXG5cdFxyXG5cdGtlLnByb3RvdHlwZS4vKiovcmVzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgvKiovcG9zaXRpb24sIC8qKi9yb3RhdGlvbikge1xyXG5cclxuXHRcdGlmICgvKiovcG9zaXRpb24pXHJcblx0XHRcdGN0eC5UKHRoaXMuQWIsIC8qKi9wb3NpdGlvbik7XHJcblxyXG5cdFx0aWYgKC8qKi9yb3RhdGlvbilcclxuXHRcdFx0Y3R4LlUodGhpcy5NYywgLyoqL3JvdGF0aW9uKTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS5UZCh0aGlzLkFiLCB0aGlzLk1jKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGtlLnByb3RvdHlwZS4vKiovc2V0UHJvcGVydHlJbkFsbEVtaXR0ZXJzID0gZnVuY3Rpb24gKC8qKi9uYW1lLCAvKiovdmFsdWUpIHtcclxuXHRcdHZhciBwcm9wTmFtZSA9IFwiX1wiLmNvbmNhdCgvKiovbmFtZSk7XHJcblxyXG5cdFx0aWYgKC8qKi92YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdGlmICgvKiovdmFsdWUubGVuZ3RoID09IDIpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5TKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0XHRcdGN0eC5UKHRoaXMub2RbaV1bcHJvcE5hbWVdLCAvKiovdmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRcdHRoaXMub2RbaV1bcHJvcE5hbWVdID0gLyoqL3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi9wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi91bnBhdXNlQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovdW5wYXVzZSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy56ZXJvVXBkYXRlKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuX3ByZXNpbU5lZWRlZCkge1xyXG5cdFx0XHR0aGlzLi8qKi91cGRhdGUodGhpcy5VZCwgdGhpcy5BYiwgdGhpcy5NYyk7XHJcblx0XHRcdHRoaXMuX3ByZXNpbU5lZWRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVBbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0ucGF1c2VkKCkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3BhdXNlR2VuZXJhdG9yc0luQWxsRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2QubGVuZ3RoOyArK2kpIHtcclxuXHRcdFx0dGhpcy5vZFtpXS4vKiovcGF1c2VHZW5lcmF0b3JzKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRrZS5wcm90b3R5cGUuLyoqL3VucGF1c2VHZW5lcmF0b3JzSW5BbGxFbWl0dGVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLi8qKi91bnBhdXNlR2VuZXJhdG9ycygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9hcmVHZW5lcmF0b3JzSW5BbGxFbWl0dGVyc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRpZiAoIXRoaXMub2RbaV0uZ2VuZXJhdG9yc1BhdXNlZCgpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0a2UucHJvdG90eXBlLi8qKi9nZXROdW1QYXJ0aWNsZXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBudW1QYXJ0aWNsZXMgPSAwO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHRudW1QYXJ0aWNsZXMgKz0gdGhpcy5vZFtpXS5nZXROdW1QYXJ0aWNsZXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVtUGFydGljbGVzO1xyXG5cdH1cclxuXHJcblxyXG5cdHZhciBsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuX2luaXQgPSBmdW5jdGlvbiAod2UsIEFiLCBNYywgcmVuZGVyQnVmZmVyLCBvcHRpb25zKSB7XHJcblx0XHRcdGxlLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG9lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMudGV4dHVyZXNSZW1hcCA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIGluZGljZXMgPSBbXTtcclxuXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgdmVyRGlzcDtcclxuXHRcdFx0XHRmb3IgKHZhciBXYiA9IDA7IFdiIDwgdGhpcy4vKiovbW9kZWwuWGU7ICsrV2IpIHtcclxuXHRcdFx0XHRcdHZlckRpc3AgPSBXYiAqIDQ7XHJcblx0XHRcdFx0XHRpbmRpY2VzLnB1c2godmVyRGlzcCArIDAsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMSwgdmVyRGlzcCArIDEsIHZlckRpc3AgKyAzLCB2ZXJEaXNwICsgMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlciA9IHJlbmRlckJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZW5kZXJCdWZmZXIuaW5pdGlhbGl6ZSh0aGlzLi8qKi9tb2RlbC5YZSAqIDQsIFsyXSwgaW5kaWNlcywgdGhpcy4vKiovbW9kZWwuWGUpO1xyXG5cdFx0XHR0aGlzLnJlbmRlckJ1ZmZlci5fX251bUluZGljZXMgPSAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGUucHJvdG90eXBlID0gbmV3IGtlKCk7XHJcblxyXG5cdGxlLnByb3RvdHlwZS4vKiovZmlsbEdlb21ldHJ5QnVmZmVycyA9IGZ1bmN0aW9uICgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpcikge1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuY2xlYW51cCgpO1xyXG5cdFx0dGhpcy5yZW5kZXJCdWZmZXIuX19sYXN0UmVuZGVyQ2FsbCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vZC5mb3JFYWNoKGZ1bmN0aW9uIChCZCkge1xyXG5cdFx0XHRCZC51ZSgvKiovY2FtZXJhUmlnaHQsIC8qKi9jYW1lcmFVcCwgLyoqL2NhbWVyYURpciwgdGhpcy5yZW5kZXJCdWZmZXIpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpXHJcblx0XHRcdHRoaXMucmVuZGVyQnVmZmVyLnB1c2hSZW5kZXJDYWxsKHRoaXMucmVuZGVyQnVmZmVyLl9fbGFzdFJlbmRlckNhbGwpO1xyXG5cdH1cclxuXHJcblx0dmFyIG1lID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5faW5pdCA9IGZ1bmN0aW9uICh3ZSwgQWIsIE1jLCBvcHRpb25zKSB7XHJcblx0XHRcdG1lLnByb3RvdHlwZS5faW5pdC5jYWxsKHRoaXMsIHdlLCBBYiwgTWMsIG5lLCBvcHRpb25zKTtcclxuXHJcblx0XHRcdHRoaXMubWF0ZXJpYWxzID0gW107XHJcblx0XHRcdHRoaXMuLyoqL21vZGVsLm1hdGVyaWFscy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMubWF0ZXJpYWxzLnB1c2goWydzb3VyY2Utb3ZlcicsICdsaWdodGVyJywgJ211bHRpcGx5J11bdmFsdWVdKTtcclxuXHRcdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0XHR0aGlzLi8qKi90ZXh0dXJlRGVzY3MgPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG1lLnByb3RvdHlwZSA9IG5ldyBrZSgpO1xyXG5cclxuXHRtZS5wcm90b3R5cGUuLyoqL2RyYXcgPSBmdW5jdGlvbiAoLyoqL2NvbnRleHQsIC8qKi9jYW1lcmEpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vZC5sZW5ndGg7ICsraSkge1xyXG5cdFx0XHR0aGlzLm9kW2ldLkhkKC8qKi9jb250ZXh0LCAvKiovY2FtZXJhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuY3JlYXRlV0dMSW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9yZW5kZXJCdWZmZXIsIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbGUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovcmVuZGVyQnVmZmVyLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cclxuXHR0aGlzLmNyZWF0ZUNhbnZhczJESW5zdGFuY2UgPSBmdW5jdGlvbiAoLyoqL3Bvc2l0aW9uLCAvKiovcm90YXRpb24sIC8qKi9vcHRpb25zKSB7XHJcblx0XHR2YXIgTGQgPSBuZXcgbWUoKTtcclxuXHRcdExkLl9pbml0KHRoaXMsIC8qKi9wb3NpdGlvbiwgLyoqL3JvdGF0aW9uLCAvKiovb3B0aW9ucyB8fCB7fSk7XHJcblx0XHRyZXR1cm4gTGQ7XHJcblx0fVxyXG5cdHRoaXMudGV4dHVyZXMgPSBbJ3Ntb2tlMDFfd2hpdGVfYmx1cnJlZC5wbmcnXTtcclxuXHR0aGlzLm1hdGVyaWFscyA9IFswXTtcclxuXHR0aGlzLnJlbmRlclN0eWxlcyA9IFt7bWF0ZXJpYWxJbmRleDowLHRleHR1cmVJbmRpY2VzOlswXX1dO1xyXG5cdHRoaXMuWGUgPSAxMDAwO1xyXG5cclxuXHRmdW5jdGlvbiBFbWl0dGVyX0RlZmF1bHRFbWl0dGVyKCkge1xyXG5cclxuXHRcdHZhciBfMSwgXzIgPSBbXSwgXzJpLCBfMnMgPSBbXSwgXzMgPSBbXSwgXzUsIF82ID0gW10sIF82aSwgXzZzID0gW10sIF83ID0gW10sIF85LCBfMTEsIF8xMiwgXzEzID0gW10sIF8xM2kwLCBfMTNzMCA9IFtdLCBfMTNpMSwgXzEzczEgPSBbXSwgXzEzaTIsIF8xM3MyID0gW10sIF8xNCwgXzE0aTAsIF8xNHMwID0gW10sIF8xNT1bXSwgXzE1YT1bXSwgXzE1aT1bXSwgXzE2PVtdLCBfMTZmcz1bXSwgXzE2dnM9W10sIF8xNnJ3PVtdLCBfMTZyd249W10sIF8xNnJ3bCwgXzE2dj1bXSwgXzE2cD1bXSwgXzE2ZHRsLCBfMTZkdHAsIF8xNmRmLCBfMTZmc2Q9W10sIF8xNywgXzE4LCBfMThpMCwgXzE4czAgPSBbXSwgXzE5LCBfMjAsIF8yMGkwLCBfMjBzMCA9IFtdO1xyXG5cdFx0dGhpcy5wZSA9IFt7eGU6MCxSYzoxLFNjOjEscmVuZGVyU3R5bGVJbmRleDowfV07XHJcblx0XHR0aGlzLm5hbWUgPSBcIkRlZmF1bHRFbWl0dGVyXCI7XHJcblxyXG5cdFx0dGhpcy51ZCA9IGZ1bmN0aW9uKEJkKSB7XHJcblx0XHRcdEJkLmRkKCk7XHJcblx0XHRcdEJkLl8yID0gW1xyXG5cdFx0XHRcdFtbLTQuNjc0MzIsMi4yNTU3NF0sWzQuNzk4MTksMi4yNTU3NF0sWzQuNzk4MTksMi4yNTU3NF1dXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl82ID0gW1xyXG5cdFx0XHRcdFtbLTMuMTQwMjEsLTQ2LjUwOV0sWzguODc1ODEsLTQ2LjM3OThdLFs4Ljg3NTgxLC00Ni4zNzk4XV1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuXzEzID0gW1xyXG5cdFx0XHRcdFtcclxuXHRcdFx0XHRcdFswLDMwMCwzMDBdXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbLTgwMCwtNjA0LjMzOSwtNDY3LjU3OCwtMzY0LjU5NSwtMjg0LjE5MywtMjIwLjIwOCwtMTY4LjgwNSwtMTI3LjM5OCwtOTQuMTMzOSwtNjcuNjE4MywtNDYuNzU5NCwtMzAuNjY4NSwtMTguNTkzMiwtOS44NjgxNiwtMy44NzQ1OCwwLDBdXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwwLDBdXHJcblx0XHRcdFx0XVxyXG5cdFx0XHRdO1xyXG5cdFx0XHRCZC5fMTQgPSBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0WzIwMCwyOTIuNDI2LDM2NC4wNDIsNDE5LjIyNiw0NjEuNDAzLDQ5My4zMDksNTE3LjE3OCw1MzQuODUzLDU0Ny44ODMsNTU3LjU4NCw1NjUuMDg2LDU3MS4zNjYsNTc3LjI4Myw1ODMuNTkyLDU5MC45NjQsNjAwLDYwMF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8xOCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMC41LDAuNTcyNTU1LDAuNzAzMzM3LDAuODkxNDI3LDEuMTM2MzksMS40MzgyNywxLjc5NzU2LDIuMjE1MjcsMi42OTI5MSwzLjIzMjYyLDMuODM3MTksNC41MTAyMyw1LjI1NjMzLDYuMDgxMzQsNi45OTI3LDgsOF1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF07XHJcblx0XHRcdEJkLl8yMCA9IFtcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHRbMCwwLjEsMC4xXSxcclxuXHRcdFx0XHRcdFswLjEsMCwwXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0XTtcclxuXHRcdFx0QmQuamQgPSAxMDAwO1xyXG5cdFx0XHRCZC5WYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5NYiA9IGZ1bmN0aW9uKHZkKSB7XHJcblx0XHRcdHZkLnpiID0gMTAwO1xyXG5cdFx0XHR2ZC5HYiA9IDE7XHJcblx0XHRcdHZkLkpiID0gMTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlBiID0gZnVuY3Rpb24oUWIsIEJkLCB2ZCkge1xyXG5cdFx0XHR2ZC56YiA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdF8xID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF8yaSA9IERiLmtiKF8xKTtcclxuXHRcdFx0Y3R4LlYoXzJzLDAsKF8yaS0wKSoxKTtcclxuXHRcdFx0RGIubGIoXzIsIEJkLl8yW18yc1swXV0sIF8yc1sxXSk7XHJcblx0XHRcdGN0eC5XKF8zLCBfMlswXSwgXzJbMV0sIDApO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzQsIF8zLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl80LCBCZC5BYiwgWGIuXzQpO1xyXG5cdFx0XHRfNSA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRfNmkgPSBEYi5rYihfNSk7XHJcblx0XHRcdGN0eC5WKF82cywwLChfNmktMCkqMSk7XHJcblx0XHRcdERiLmxiKF82LCBCZC5fNltfNnNbMF1dLCBfNnNbMV0pO1xyXG5cdFx0XHRjdHguVyhfNywgXzZbMF0sIF82WzFdLCAwKTtcclxuXHRcdFx0WGIuXzggPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl84LCBfNywgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fOCwgQmQuYWQsIFhiLl84KTtcclxuXHRcdFx0XzkgPSAwICsgQmQuTGQucmFuZCgpICogKDM2MCAtIDApO1xyXG5cdFx0XHRYYi5fMTAgPSBfOTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl80KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmdkID0gZnVuY3Rpb24oQmQsIFhiKSB7XHJcblx0XHRcdFhiLl8gPSAwLjA7XHJcblx0XHRcdF8xID0gMCArIEJkLkxkLnJhbmQoKSAqICgxIC0gMCk7XHJcblx0XHRcdF8yaSA9IERiLmtiKF8xKTtcclxuXHRcdFx0Y3R4LlYoXzJzLDAsKF8yaS0wKSoxKTtcclxuXHRcdFx0RGIubGIoXzIsIEJkLl8yW18yc1swXV0sIF8yc1sxXSk7XHJcblx0XHRcdGN0eC5XKF8zLCBfMlswXSwgXzJbMV0sIDApO1xyXG5cdFx0XHRYYi5fNCA9IFtdO1xyXG5cdFx0XHRjdHgucmIoWGIuXzQsIF8zLCBCZC5NYyk7XHJcblx0XHRcdGN0eC5jKFhiLl80LCBCZC5BYiwgWGIuXzQpO1xyXG5cdFx0XHRfNSA9IDAgKyBCZC5MZC5yYW5kKCkgKiAoMSAtIDApO1xyXG5cdFx0XHRfNmkgPSBEYi5rYihfNSk7XHJcblx0XHRcdGN0eC5WKF82cywwLChfNmktMCkqMSk7XHJcblx0XHRcdERiLmxiKF82LCBCZC5fNltfNnNbMF1dLCBfNnNbMV0pO1xyXG5cdFx0XHRjdHguVyhfNywgXzZbMF0sIF82WzFdLCAwKTtcclxuXHRcdFx0WGIuXzggPSBbXTtcclxuXHRcdFx0Y3R4LnJiKFhiLl84LCBfNywgQmQuTWMpO1xyXG5cdFx0XHRjdHguYyhYYi5fOCwgQmQuYWQsIFhiLl84KTtcclxuXHRcdFx0XzkgPSAwICsgQmQuTGQucmFuZCgpICogKDM2MCAtIDApO1xyXG5cdFx0XHRYYi5fMTAgPSBfOTtcclxuXHRcdFx0Y3R4LlQoWGIuQWIsIFhiLl80KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnFjID0gZnVuY3Rpb24oUWIsIEJkLCBYYikge1xyXG5cdFx0XHRYYi5fICs9IFFiO1xyXG5cdFx0XHRfMTEgPSAzO1xyXG5cdFx0XHRfMTIgPSAoWGIuXyAvIF8xMSk7XHJcblx0XHRcdF8xM2kwPShfMTI8MD8wOihfMTI+MT8xOl8xMikpO1xyXG5cdFx0XHRjdHguVihfMTNzMCwwLChfMTNpMC0wKSoxKTtcclxuXHRcdFx0XzEzaTE9KF8xMjwwPzA6KF8xMj4xPzE6XzEyKSk7XHJcblx0XHRcdGN0eC5WKF8xM3MxLDAsKF8xM2kxLTApKjE1KTtcclxuXHRcdFx0XzEzaTI9KF8xMjwwPzA6KF8xMj4xPzE6XzEyKSk7XHJcblx0XHRcdGN0eC5WKF8xM3MyLDAsKF8xM2kyLTApKjEpO1xyXG5cdFx0XHRjdHguVyhfMTMsIERiLm5iKEJkLl8xM1swXVtfMTNzMFswXV0sXzEzczBbMV0pLERiLm5iKEJkLl8xM1sxXVtfMTNzMVswXV0sXzEzczFbMV0pLERiLm5iKEJkLl8xM1syXVtfMTNzMlswXV0sXzEzczJbMV0pKTtcclxuXHRcdFx0XzE0aTA9KF8xMjwwPzA6KF8xMj4xPzE6XzEyKSk7XHJcblx0XHRcdGN0eC5WKF8xNHMwLDAsKF8xNGkwLTApKjE1KTtcclxuXHRcdFx0XzE0ID0gRGIubmIoQmQuXzE0WzBdW18xNHMwWzBdXSxfMTRzMFsxXSk7XHJcblx0XHRcdGN0eC51KF8xNWEsIFsxMDAsNTAsMzBdLCBCZC5MZC5SYik7XHJcblx0XHRcdGN0eC5jKF8xNWEsIF8xNWEsIFhiLl80KTtcclxuXHRcdFx0Y3R4LnUoXzE1aSwgXzE1YSwgMS4wIC8gMTAwMCk7IFxyXG5cdFx0XHRjdHgueGIoXzE1LCBfMTVpKTtcclxuXHRcdFx0Y3R4LmsoXzE1LCBfMTUsIFswLjAwNzgxMjUsMC4wMDc4MTI1LDAuMDA3ODEyNV0pO1xyXG5cdFx0XHRjdHguYyhfMTUsIF8xNSwgWy0xLC0xLC0xXSk7XHJcblx0XHRcdGN0eC51KF8xNSwgXzE1LCBfMTQpO1xyXG5cdFx0XHRjdHguVChfMTZmcywgXzEzKTtcclxuXHRcdFx0Y3R4LmMoXzE2ZnMsIF8xNmZzLCBfMTUpO1xyXG5cdFx0XHRjdHguVChfMTZ2cywgWzAsMCwwXSk7XHJcblx0XHRcdF8xNmR0bCA9IFFiO1xyXG5cdFx0XHRjdHguVChfMTZ2LCBYYi5fOCk7XHJcblx0XHRcdGN0eC5UKF8xNnAsIFhiLl80KTtcclxuXHRcdFx0d2hpbGUgKF8xNmR0bCA+IDAuMDAwMSkge1xyXG5cdFx0XHRcdF8xNmR0cCA9IF8xNmR0bDtcclxuXHRcdFx0XHRjdHguVChfMTZmc2QsIF8xNmZzKTtcclxuXHRcdFx0XHRjdHguZyhfMTZydywgXzE2dnMsIF8xNnYpO1xyXG5cdFx0XHRcdF8xNnJ3bCA9IGN0eC5QKF8xNnJ3KTtcclxuXHRcdFx0XHRpZiAoXzE2cndsID4gMC4wMDAxKSB7XHJcblx0XHRcdFx0XHRfMTZyd2wgPSBNYXRoLnNxcnQoXzE2cndsKTtcclxuXHRcdFx0XHRcdGN0eC53KF8xNnJ3biwgXzE2cncsIF8xNnJ3bCk7XHJcblx0XHRcdFx0XHRfMTZkZiA9IDAuMDEgKiAxICogXzE2cndsO1xyXG5cdFx0XHRcdFx0aWYgKF8xNmRmICogXzE2ZHRwID4gMC4yKSBcclxuXHRcdFx0XHRcdFx0XzE2ZHRwID0gMC4yIC8gXzE2ZGY7XHJcblx0XHRcdFx0XHRjdHguYyhfMTZmc2QsIF8xNmZzZCwgY3R4LnYoXzE2cnduLCBfMTZyd2wgKiBfMTZkZikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjdHguYyhfMTZ2LCBfMTZ2LCBjdHgudihfMTZmc2QsIF8xNmR0cCkpO1xyXG5cdFx0XHRcdGN0eC5jKF8xNnAsIF8xNnAsIGN0eC52KF8xNnYsIF8xNmR0cCkpO1xyXG5cdFx0XHRcdF8xNmR0bCAtPSBfMTZkdHA7XHJcblx0XHRcdH1cclxuXHRcdFx0Y3R4LlQoWGIuXzQsIF8xNnApO1xyXG5cdFx0XHRjdHguVChYYi5fOCwgXzE2dik7XHJcblx0XHRcdGN0eC5UKFhiLkFiLCBYYi5fNCk7XHJcblx0XHRcdF8xNyA9IDMwO1xyXG5cdFx0XHRfMTEgPSAzO1xyXG5cdFx0XHRfMTIgPSAoWGIuXyAvIF8xMSk7XHJcblx0XHRcdF8xOGkwPShfMTI8MD8wOihfMTI+MT8xOl8xMikpO1xyXG5cdFx0XHRjdHguVihfMThzMCwwLChfMThpMC0wKSoxNSk7XHJcblx0XHRcdF8xOCA9IERiLm5iKEJkLl8xOFswXVtfMThzMFswXV0sXzE4czBbMV0pO1xyXG5cdFx0XHRfMTkgPSAoXzE3ICogXzE4KTtcclxuXHRcdFx0XzIwaTA9KF8xMjwwPzA6KF8xMj4xPzE6XzEyKSk7XHJcblx0XHRcdF8yMGkwPDAuMT9jdHguVihfMjBzMCwwLChfMjBpMC0wKSoxMCk6Y3R4LlYoXzIwczAsMSwoXzIwaTAtMC4xKSoxLjExMTExKTtcclxuXHRcdFx0XzIwID0gRGIubmIoQmQuXzIwWzBdW18yMHMwWzBdXSxfMjBzMFsxXSk7XHJcblx0XHRcdGN0eC5TKFhiLlBkLFswLjUsMC41XSk7XHJcblx0XHRcdFhiLk1kID0gWGIuXzEwO1xyXG5cdFx0XHRjdHguVihYYi5OZCxfMTksXzE5KTtcclxuXHRcdFx0Y3R4LlQoWGIuZ2YsWzEsMSwxXSk7XHJcblx0XHRcdFhiLk9kID0gXzIwO1xyXG5cdFx0XHRYYi5RYyA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5DYyA9IGZ1bmN0aW9uKEJkLCBYYiwgV2MpIHtcclxuXHRcdFx0XzExID0gMztcclxuXHRcdFx0aWYgKFhiLl8gPiBfMTEpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdHRoaXMucWQgPSBmdW5jdGlvbihMZCkge1xyXG5cdFx0TGQuRGQgPSAwLjAzMzMzMzM7XHJcblx0XHRMZC5VZCA9IDA7XHJcblx0XHRMZC5yYW5kID0gZnVuY3Rpb24oKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpOyB9O1xyXG5cdFx0TGQucGQobmV3IEVtaXR0ZXJfRGVmYXVsdEVtaXR0ZXIoKSk7XHJcblx0fVxyXG5cdFx0dGhpcy5rYiA9IGZ1bmN0aW9uICh2KSB7IFx0XHRcdHJldHVybiAodiA8IDApID8gMCA6ICgodiA+IDEpID8gMSA6IHYpOyBcdFx0fVxyXG5cclxuXHRcdHRoaXMubGIgPSBmdW5jdGlvbiAociwgcGF0aCwgamUpIHsgXHRcdFx0dmFyIGluZGV4SW50ID0gTWF0aC5mbG9vcihqZSk7IFx0XHRcdHZhciBsZXJwID0gamUgLSBpbmRleEludDsgXHRcdFx0Y3R4LlkociwgcGF0aFtpbmRleEludF0sIHBhdGhbaW5kZXhJbnQgKyAxXSwgbGVycCk7IFx0XHR9XHJcblxyXG5cdFx0dGhpcy5uYiA9IGZ1bmN0aW9uKGZ1bmNWYWx1ZXMsIGplKSB7IFx0XHRcdHZhciBpbmRleEludCA9IE1hdGguZmxvb3IoamUpOyBcdFx0XHR2YXIgbmV4dEludCA9IGluZGV4SW50ICsgMTsgXHRcdFx0cmV0dXJuIGN0eC5YKGZ1bmNWYWx1ZXNbaW5kZXhJbnRdLCBmdW5jVmFsdWVzW25leHRJbnRdLCBqZSAtIGluZGV4SW50KTsgXHRcdH1cclxuXHJcblxyXG59XHJcblxyXG5yZXR1cm4gQ2lnYXJldHRlO1xyXG59KSk7XHJcbiJdfQ==