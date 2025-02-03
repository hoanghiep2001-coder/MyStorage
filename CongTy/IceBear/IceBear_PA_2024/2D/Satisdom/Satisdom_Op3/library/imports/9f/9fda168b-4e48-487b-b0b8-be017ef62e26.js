"use strict";
cc._RF.push(module, '9fda1aLTkhIe7C4vgF+9i4m', 'Cresent_stars');
// neutrinoparticles/exported_effects/Cresent_stars.js

"use strict";

// 61feb278-e894-487c-bddd-efc42879561a
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Cresent_stars'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Cresent_stars'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Cresent_stars(ctx) {
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

    this.textures = ['star_glow_white.png', 'Beam.png'];
    this.materials = [0, 1];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }, {
      materialIndex: 1,
      textureIndices: [1]
    }];
    this.Xe = 200;

    function Emitter_Stars() {
      var _2s = [[9.97468, 9.93443], [19.9494, 19.8689], [29.9241, 19.8689], [19.9494, 9.93443], [49.8734, 39.7377], [19.9494, 29.8033], [49.8734, 69.541], [49.8734, 79.4754], [99.7468, 149.016], [9.97468, 19.8689], [19.9494, 39.7377], [99.7468, 79.4754], [29.9241, 39.7377], [29.9241, 29.8033], [49.8734, 29.8033]],
          _1,
          _2Srch,
          _2 = [],
          _3 = [],
          _6,
          _8,
          _10,
          _11,
          _11i0,
          _11s0 = [],
          _13,
          _14,
          _14i0,
          _14s0 = [],
          _15;

      this.pe = [{
        xe: 0,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "Stars";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._11 = [[[1, 1, 1], [0.4, 0.4, 0.4]]];
        Bd._14 = [[[0, 1.2, 1.2], [1.2, 1, 1], [1, 1, 1], [1, 1.2, 1.2], [1.2, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 1.54;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 1.54;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2Srch = this._2f(_1 * 685903);
        ctx.yb(_2, -6 + _2Srch[0] % 79 * 9.97468, 14 + Math.floor(_2Srch[0] / 79) * 9.93443, _2s[_2Srch[1]], Bd.Ld.rand);
        ctx.W(_3, _2[0], _2[1], 0);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.Ab, Xb._4);
        Xb._5 = 0;
        _6 = 10 + Bd.Ld.rand() * (30 - 10);
        Xb._7 = _6;
        _8 = 4.5 + Bd.Ld.rand() * (5 - 4.5);
        Xb._9 = _8;
        _10 = 0 + Bd.Ld.rand() * (1 - 0);
        _11i0 = _10 < 0 ? 0 : _10 > 1 ? 1 : _10;
        _11i0 < 0.5 ? ctx.V(_11s0, 0, (_11i0 - 0) * 2) : ctx.V(_11s0, 1, (_11i0 - 0.5) * 2);
        _11 = Db.nb(Bd._11[0][_11s0[0]], _11s0[1]);
        Xb._12 = _11;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2Srch = this._2f(_1 * 685903);
        ctx.yb(_2, -6 + _2Srch[0] % 79 * 9.97468, 14 + Math.floor(_2Srch[0] / 79) * 9.93443, _2s[_2Srch[1]], Bd.Ld.rand);
        ctx.W(_3, _2[0], _2[1], 0);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.Ab, Xb._4);
        Xb._5 = 0;
        _6 = 10 + Bd.Ld.rand() * (30 - 10);
        Xb._7 = _6;
        _8 = 4.5 + Bd.Ld.rand() * (5 - 4.5);
        Xb._9 = _8;
        _10 = 0 + Bd.Ld.rand() * (1 - 0);
        _11i0 = _10 < 0 ? 0 : _10 > 1 ? 1 : _10;
        _11i0 < 0.5 ? ctx.V(_11s0, 0, (_11i0 - 0) * 2) : ctx.V(_11s0, 1, (_11i0 - 0.5) * 2);
        _11 = Db.nb(Bd._11[0][_11s0[0]], _11s0[1]);
        Xb._12 = _11;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(Xb.Ab, Xb._4);
        _13 = Xb._ / Xb._9;
        _14i0 = _13 < 0 ? 0 : _13 > 1 ? 1 : _13;
        _14i0 < 0.922191 ? _14i0 < 0.0752853 ? _14i0 < 0.056 ? ctx.V(_14s0, 0, (_14i0 - 0) * 17.8571) : ctx.V(_14s0, 1, (_14i0 - 0.056) * 51.853) : ctx.V(_14s0, 2, (_14i0 - 0.0752853) * 1.18077) : _14i0 < 0.955714 ? ctx.V(_14s0, 3, (_14i0 - 0.922191) * 29.8297) : ctx.V(_14s0, 4, (_14i0 - 0.955714) * 22.5806);
        _14 = Db.nb(Bd._14[0][_14s0[0]], _14s0[1]);
        _15 = Xb._7 * _14;
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._5;
        ctx.V(Xb.Nd, _15, _15);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = Xb._12;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._9) return true;
        return false;
      };

      this._2f = function (i) {
        return i < 327665 ? i < 175365 ? i < 121741 ? i < 58848 ? i < 20647 ? i < 7849 ? i < 302 ? i < 53 ? i < 19 ? [320, 0] : [399, 0] : i < 152 ? [478, 0] : [557, 0] : i < 2757 ? i < 1613 ? i < 375 ? i < 310 ? [85, 0] : [86, 0] : i < 1103 ? i < 641 ? i < 419 ? [163, 0] : [164, 0] : i < 849 ? [242, 0] : [243, 0] : [165, 9] : i < 1738 ? i < 1683 ? [87, 0] : [88, 0] : i < 2247 ? i < 1993 ? [166, 0] : [167, 0] : [245, 3] : i < 5811 ? i < 4282 ? i < 3773 ? [321, 1] : i < 4027 ? [323, 0] : [402, 0] : i < 5301 ? i < 4791 ? i < 4537 ? [479, 0] : [480, 0] : [558, 3] : [481, 9] : i < 6829 ? i < 6319 ? [324, 3] : [403, 3] : [482, 1] : i < 10456 ? i < 9006 ? i < 8319 ? i < 8050 ? [636, 0] : i < 8071 ? [714, 0] : [715, 0] : i < 8648 ? i < 8393 ? [793, 0] : [794, 0] : i < 8751 ? [872, 0] : [873, 0] : i < 9740 ? i < 9373 ? i < 9118 ? [951, 0] : [952, 0] : i < 9485 ? [1030, 0] : [1031, 0] : i < 10102 ? i < 9847 ? [1109, 0] : [1110, 0] : i < 10201 ? [1188, 0] : [1189, 0] : i < 15547 ? i < 13509 ? i < 11983 ? i < 11474 ? i < 10965 ? i < 10711 ? [637, 0] : [638, 0] : i < 11220 ? [716, 0] : [717, 0] : i < 11728 ? [639, 0] : [718, 0] : i < 13000 ? i < 12491 ? [795, 3] : i < 12746 ? [874, 0] : [875, 0] : i < 13254 ? [797, 0] : [876, 0] : i < 14529 ? [640, 1] : i < 15037 ? [798, 3] : [877, 3] : [953, 4] : i < 38465 ? i < 29193 ? i < 24103 ? i < 22591 ? i < 21063 ? i < 20878 ? i < 20741 ? [89, 0] : [90, 0] : [91, 0] : i < 22083 ? [168, 1] : [170, 9] : i < 23083 ? i < 22614 ? i < 22594 ? [13, 0] : [14, 0] : i < 22834 ? [92, 0] : [93, 0] : [171, 1] : i < 27157 ? i < 25629 ? i < 25121 ? i < 24611 ? [326, 3] : [405, 3] : [328, 9] : i < 26649 ? [484, 1] : [486, 9] : i < 28174 ? i < 27665 ? [329, 3] : i < 27919 ? [408, 0] : [409, 0] : i < 28683 ? i < 28428 ? [487, 0] : [488, 0] : [566, 3] : i < 33371 ? i < 31686 ? i < 30156 ? i < 29822 ? i < 29314 ? i < 29243 ? [15, 0] : [16, 0] : [94, 3] : i < 29902 ? [17, 0] : [96, 0] : [173, 2] : i < 32351 ? i < 31843 ? i < 31764 ? [18, 0] : [19, 0] : [97, 3] : [176, 1] : i < 36428 ? i < 34898 ? i < 34389 ? i < 33879 ? [331, 3] : [410, 3] : i < 34643 ? [333, 0] : [412, 0] : [489, 2] : i < 37446 ? i < 36936 ? [334, 3] : [413, 3] : i < 37955 ? i < 37701 ? [492, 0] : [493, 0] : [571, 3] : i < 48655 ? i < 43556 ? i < 41520 ? i < 39993 ? i < 39485 ? [642, 1] : [644, 9] : i < 41012 ? i < 40502 ? i < 40247 ? [800, 0] : [801, 0] : [879, 3] : [802, 9] : i < 42539 ? i < 42029 ? i < 41774 ? [645, 0] : [646, 0] : [724, 3] : i < 43047 ? [803, 3] : i < 43301 ? [882, 0] : [883, 0] : i < 46615 ? i < 45085 ? i < 44576 ? [958, 1] : i < 44830 ? [960, 0] : [1039, 0] : [1116, 2] : [961, 10] : i < 53748 ? i < 51711 ? i < 50184 ? i < 49674 ? i < 49164 ? i < 48909 ? [647, 0] : [648, 0] : [726, 3] : [649, 9] : i < 51202 ? i < 50692 ? [805, 3] : [884, 3] : i < 51456 ? [807, 0] : [886, 0] : i < 52730 ? i < 52220 ? i < 51966 ? [650, 0] : [651, 0] : [729, 3] : i < 53238 ? [808, 3] : [887, 3] : [963, 4] : i < 83554 ? i < 71909 ? i < 61709 ? i < 60276 ? i < 59559 ? i < 59204 ? i < 58949 ? [1267, 0] : [1268, 0] : i < 59304 ? [1346, 0] : [1347, 0] : i < 59918 ? i < 59663 ? [1425, 0] : [1426, 0] : i < 60021 ? [1504, 0] : [1505, 0] : i < 60993 ? i < 60634 ? i < 60379 ? [1583, 0] : [1584, 0] : i < 60738 ? [1662, 0] : [1663, 0] : i < 61350 ? i < 61095 ? [1741, 0] : [1742, 0] : i < 61454 ? [1820, 0] : [1821, 0] : [1269, 7] : i < 74659 ? i < 73426 ? i < 72642 ? i < 72269 ? i < 72014 ? [1899, 0] : [1900, 0] : i < 72388 ? [1978, 0] : [1979, 0] : i < 73027 ? i < 72773 ? [2057, 0] : [2058, 0] : i < 73172 ? [2136, 0] : [2137, 0] : i < 74241 ? i < 73832 ? i < 73578 ? [2215, 0] : [2216, 0] : i < 73987 ? [2294, 0] : [2295, 0] : i < 74405 ? [2373, 0] : [2374, 0] : i < 79744 ? i < 77710 ? i < 76186 ? i < 75677 ? i < 75169 ? [1901, 3] : [1980, 3] : i < 75932 ? [1903, 0] : [1982, 0] : [2059, 2] : i < 78728 ? i < 78220 ? [1904, 3] : [1983, 3] : [2062, 1] : [2217, 14] : i < 103952 ? i < 93752 ? i < 88652 ? i < 86612 ? i < 85083 ? i < 84574 ? [1274, 1] : i < 84829 ? [1276, 0] : [1355, 0] : i < 86103 ? [1432, 1] : i < 86358 ? [1434, 0] : [1513, 0] : [1277, 10] : [1590, 4] : [1279, 7] : i < 112846 ? i < 109036 ? i < 107002 ? i < 105478 ? i < 104970 ? i < 104462 ? [1906, 3] : [1985, 3] : [1908, 9] : [2064, 2] : i < 108020 ? i < 107512 ? [1909, 3] : [1988, 3] : [2067, 1] : [2222, 14] : i < 117931 ? i < 115897 ? i < 114373 ? i < 113864 ? i < 113356 ? [1911, 3] : [1990, 3] : i < 114119 ? [1913, 0] : [1992, 0] : [2069, 2] : i < 116915 ? i < 116407 ? [1914, 3] : [1993, 3] : [2072, 1] : [2227, 14] : i < 166590 ? i < 156441 ? i < 139592 ? i < 130850 ? i < 125755 ? i < 124204 ? i < 122674 ? i < 122381 ? i < 121873 ? i < 121811 ? [20, 0] : [21, 0] : [99, 3] : i < 122420 ? [22, 0] : [101, 0] : [178, 2] : i < 124735 ? i < 124236 ? i < 124225 ? [23, 0] : [24, 0] : i < 124488 ? [102, 0] : [103, 0] : [181, 1] : i < 128812 ? i < 127282 ? i < 126773 ? i < 126263 ? [336, 3] : [415, 3] : i < 127027 ? [338, 0] : [417, 0] : [494, 2] : i < 129830 ? i < 129320 ? [339, 3] : [418, 3] : [497, 1] : i < 134512 ? i < 133130 ? i < 131606 ? i < 131362 ? i < 130872 ? [25, 3] : i < 131116 ? [104, 0] : [105, 0] : i < 131373 ? [27, 0] : [106, 0] : [183, 2] : i < 133496 ? i < 133133 ? [28, 0] : i < 133340 ? [107, 0] : [108, 0] : [186, 1] : [341, 4] : i < 149716 ? i < 144685 ? i < 142648 ? i < 141121 ? i < 140611 ? i < 140101 ? i < 139847 ? [652, 0] : [653, 0] : [731, 3] : [654, 9] : i < 142139 ? i < 141629 ? [810, 3] : [889, 3] : i < 142393 ? [812, 0] : [891, 0] : i < 143667 ? i < 143157 ? i < 142902 ? [655, 0] : [656, 0] : [734, 3] : i < 144175 ? [813, 3] : [892, 3] : i < 147745 ? [968, 12] : i < 148765 ? [971, 1] : i < 149274 ? i < 149020 ? [1129, 0] : [1130, 0] : i < 149529 ? [1208, 0] : [1209, 0] : i < 154796 ? [657, 4] : i < 156001 ? i < 155897 ? i < 155654 ? i < 155304 ? [973, 3] : i < 155552 ? [1052, 0] : [1053, 0] : i < 155892 ? [975, 0] : [1054, 0] : i < 156000 ? [1131, 0] : [1210, 0] : i < 156437 ? i < 156228 ? [976, 0] : [977, 0] : [1055, 3] : i < 162484 ? i < 157934 ? i < 157838 ? i < 156533 ? i < 156520 ? [109, 0] : [110, 0] : i < 157510 ? i < 157002 ? i < 156787 ? [188, 0] : [189, 0] : [267, 3] : i < 157592 ? [190, 0] : [269, 0] : i < 157839 ? [191, 0] : [270, 0] : i < 160982 ? [346, 12] : i < 161619 ? i < 161246 ? i < 161215 ? [349, 0] : [350, 0] : i < 161500 ? [428, 0] : [429, 0] : i < 162047 ? i < 161873 ? [507, 0] : [508, 0] : i < 162301 ? [586, 0] : [587, 0] : i < 166342 ? i < 165443 ? i < 164008 ? [662, 2] : i < 165021 ? i < 164516 ? [820, 3] : i < 164770 ? [899, 0] : [900, 0] : i < 165275 ? [822, 0] : [901, 0] : i < 166159 ? i < 165844 ? i < 165697 ? [665, 0] : [666, 0] : i < 166094 ? [744, 0] : [745, 0] : i < 166326 ? i < 166322 ? [823, 0] : [824, 0] : [902, 0] : i < 166585 ? i < 166508 ? [978, 0] : [979, 0] : [980, 0] : i < 172715 ? i < 170274 ? i < 169644 ? i < 168120 ? [1284, 2] : i < 169140 ? [1442, 1] : i < 169395 ? [1444, 0] : [1523, 0] : i < 170151 ? i < 169956 ? i < 169897 ? [1287, 0] : [1288, 0] : i < 170150 ? [1366, 0] : [1367, 0] : i < 170250 ? [1445, 0] : [1524, 0] : i < 172714 ? i < 171623 ? i < 171294 ? [1600, 1] : i < 171491 ? [1602, 0] : [1681, 0] : i < 172632 ? i < 172132 ? i < 171878 ? [1758, 0] : [1759, 0] : i < 172387 ? [1837, 0] : [1838, 0] : i < 172696 ? [1760, 0] : [1839, 0] : [1603, 0] : i < 174386 ? i < 173619 ? i < 173618 ? i < 173186 ? i < 172970 ? [1916, 0] : [1917, 0] : i < 173440 ? [1995, 0] : [1996, 0] : [1918, 0] : i < 174020 ? i < 173873 ? [2074, 0] : [2075, 0] : i < 174274 ? [2153, 0] : [2154, 0] : i < 175042 ? i < 174720 ? i < 174640 ? [2232, 0] : [2233, 0] : i < 174974 ? [2311, 0] : [2312, 0] : i < 175296 ? [2390, 0] : [2391, 0] : i < 288692 ? i < 239867 ? i < 201767 ? i < 189249 ? i < 179089 ? i < 177111 ? i < 176226 ? i < 175791 ? i < 175537 ? [2452, 0] : [2453, 0] : i < 175972 ? [2531, 0] : [2532, 0] : i < 176662 ? i < 176408 ? [2610, 0] : [2611, 0] : i < 176857 ? [2689, 0] : [2690, 0] : i < 177139 ? i < 177117 ? [2846, 0] : [2925, 9] : i < 178094 ? i < 177609 ? i < 177355 ? [2768, 0] : [2769, 0] : i < 177840 ? [2847, 0] : [2848, 0] : i < 178589 ? i < 178335 ? [2926, 0] : [2927, 0] : i < 178835 ? [3005, 0] : [3006, 0] : [2454, 7] : i < 192877 ? i < 191290 ? i < 189293 ? i < 189271 ? [3083, 9] : [3241, 9] : i < 190291 ? i < 189792 ? i < 189538 ? [3084, 0] : [3085, 0] : i < 190037 ? [3163, 0] : [3164, 0] : i < 190791 ? i < 190537 ? [3242, 0] : [3243, 0] : i < 191036 ? [3321, 0] : [3322, 0] : i < 191361 ? i < 191332 ? i < 191308 ? [3399, 0] : [3478, 0] : [3557, 0] : i < 192369 ? i < 191865 ? i < 191611 ? [3400, 0] : [3401, 0] : i < 192115 ? [3479, 0] : [3480, 0] : [3558, 3] : [3086, 6] : [2459, 8] : i < 258831 ? i < 254147 ? i < 243977 ? i < 242010 ? i < 239978 ? i < 239923 ? i < 239894 ? [3636, 0] : [3715, 0] : i < 239950 ? [3794, 0] : [3873, 0] : [3637, 10] : i < 242057 ? i < 242049 ? i < 242033 ? [3952, 0] : [4031, 0] : [4110, 0] : i < 243064 ? i < 242561 ? i < 242307 ? [3953, 0] : [3954, 0] : i < 242810 ? [4032, 0] : [4033, 0] : i < 243545 ? i < 243290 ? [4111, 0] : [4112, 0] : i < 243722 ? [4190, 0] : [4191, 0] : i < 249057 ? [3639, 4] : i < 252111 ? i < 250581 ? [3955, 2] : [4113, 2] : i < 253127 ? [3958, 1] : [4116, 1] : i < 254643 ? i < 254634 ? i < 254476 ? i < 254225 ? [4269, 0] : [4270, 0] : i < 254480 ? [4348, 0] : [4349, 0] : [4428, 0] : i < 256939 ? i < 256172 ? i < 255662 ? i < 255153 ? [4271, 3] : i < 255407 ? [4350, 0] : [4351, 0] : [4273, 9] : i < 256579 ? i < 256545 ? i < 256306 ? [4429, 0] : [4430, 0] : [4509, 0] : i < 256833 ? [4431, 0] : [4510, 0] : i < 257959 ? [4274, 1] : i < 258469 ? [4432, 3] : i < 258633 ? [4511, 0] : [4512, 0] : i < 279171 ? i < 269001 ? i < 263911 ? [3644, 4] : i < 266965 ? i < 265435 ? [3960, 2] : [4118, 2] : i < 267981 ? [3963, 1] : [4121, 1] : i < 274081 ? [3649, 4] : i < 277135 ? i < 275605 ? [3965, 2] : [4123, 2] : i < 278151 ? [3968, 1] : [4126, 1] : i < 283907 ? i < 283904 ? i < 282059 ? i < 280701 ? [4276, 2] : i < 281624 ? i < 281211 ? [4434, 3] : i < 281419 ? [4513, 0] : [4514, 0] : i < 281879 ? [4436, 0] : [4515, 0] : i < 283079 ? [4279, 1] : i < 283589 ? [4437, 3] : i < 283752 ? [4516, 0] : [4517, 0] : [4592, 0] : i < 288690 ? i < 286730 ? i < 285437 ? [4281, 2] : i < 286280 ? i < 285947 ? [4439, 3] : i < 286103 ? [4518, 0] : [4519, 0] : i < 286535 ? [4441, 0] : [4520, 0] : i < 287750 ? [4284, 1] : i < 288260 ? [4442, 3] : i < 288473 ? [4521, 0] : [4522, 0] : [4601, 0] : i < 298820 ? i < 291277 ? i < 289982 ? i < 289337 ? i < 289013 ? i < 288946 ? [2469, 0] : [2470, 0] : i < 289267 ? [2548, 0] : [2549, 0] : i < 289658 ? i < 289591 ? [2627, 0] : [2628, 0] : i < 289912 ? [2706, 0] : [2707, 0] : i < 290626 ? i < 290303 ? i < 290236 ? [2785, 0] : [2786, 0] : i < 290557 ? [2864, 0] : [2865, 0] : i < 290948 ? i < 290880 ? [2943, 0] : [2944, 0] : i < 291202 ? [3022, 0] : [3023, 0] : i < 297685 ? i < 293888 ? i < 293597 ? i < 292145 ? i < 292132 ? i < 291654 ? i < 291531 ? [3101, 0] : [3102, 0] : i < 291908 ? [3180, 0] : [3181, 0] : [3182, 0] : i < 293161 ? [3259, 1] : i < 293343 ? [3261, 0] : [3340, 0] : i < 293618 ? [3262, 0] : i < 293835 ? [3341, 0] : [3342, 0] : i < 296174 ? [3417, 13] : i < 297177 ? i < 296669 ? i < 296428 ? [3420, 0] : [3421, 0] : [3499, 3] : [3578, 3] : i < 298805 ? i < 298128 ? i < 298126 ? i < 297762 ? [3422, 0] : i < 298012 ? [3501, 0] : [3502, 0] : [3503, 0] : i < 298636 ? [3580, 3] : [3582, 0] : [3583, 0] : i < 327047 ? i < 318661 ? i < 308990 ? i < 303900 ? [3654, 4] : i < 306954 ? i < 305424 ? [3970, 2] : [4128, 2] : i < 307970 ? [3973, 1] : [4131, 1] : i < 313572 ? i < 312038 ? [3659, 12] : i < 312593 ? i < 312227 ? i < 312217 ? [3662, 0] : [3663, 0] : i < 312481 ? [3741, 0] : [3742, 0] : i < 313064 ? i < 312847 ? [3820, 0] : [3821, 0] : [3899, 3] : i < 316626 ? i < 315096 ? [3975, 2] : [4133, 2] : i < 317642 ? [3978, 1] : i < 318152 ? [4136, 3] : i < 318407 ? [4215, 0] : [4216, 0] : i < 323535 ? i < 323531 ? i < 321616 ? i < 320191 ? [4286, 2] : i < 321146 ? i < 320701 ? [4444, 3] : i < 320928 ? [4523, 0] : [4524, 0] : i < 321401 ? [4446, 0] : [4525, 0] : i < 322636 ? [4289, 1] : i < 323146 ? [4447, 3] : i < 323344 ? [4526, 0] : [4527, 0] : [4602, 3] : i < 326101 ? i < 325065 ? [4291, 2] : i < 325839 ? i < 325574 ? i < 325320 ? [4449, 0] : [4450, 0] : i < 325733 ? [4528, 0] : [4529, 0] : i < 326072 ? [4451, 0] : [4530, 0] : i < 326941 ? i < 326589 ? i < 326356 ? [4294, 0] : [4295, 0] : i < 326838 ? [4373, 0] : [4374, 0] : i < 327045 ? [4452, 0] : [4453, 0] : i < 327636 ? i < 327111 ? i < 327055 ? [3822, 0] : [3901, 0] : i < 327379 ? i < 327227 ? [3980, 0] : [4059, 0] : i < 327531 ? [4138, 0] : [4217, 0] : [4296, 0] : i < 508426 ? i < 378623 ? i < 368181 ? i < 333171 ? i < 330802 ? i < 328068 ? i < 327726 ? [207, 0] : i < 327825 ? [285, 0] : [286, 0] : i < 328783 ? i < 328287 ? i < 328121 ? [363, 0] : [442, 0] : i < 328320 ? i < 328299 ? [520, 0] : [599, 0] : i < 328545 ? [521, 0] : [600, 0] : i < 329786 ? i < 329278 ? i < 329024 ? [364, 0] : [365, 0] : [443, 3] : [522, 1] : i < 333110 ? i < 331257 ? i < 331205 ? i < 330814 ? [678, 0] : i < 331039 ? [679, 0] : [758, 0] : [837, 0] : i < 332273 ? [680, 1] : i < 332768 ? i < 332514 ? [838, 0] : [839, 0] : i < 332867 ? [917, 0] : [918, 0] : [997, 0] : i < 350301 ? i < 341342 ? i < 336262 ? i < 334759 ? i < 333317 ? i < 333202 ? i < 333173 ? [129, 0] : [130, 0] : [131, 0] : i < 334251 ? i < 333743 ? i < 333499 ? [208, 0] : [209, 0] : [287, 3] : [210, 9] : i < 335246 ? i < 334795 ? i < 334765 ? [53, 0] : [54, 0] : i < 335002 ? [132, 0] : [133, 0] : [211, 1] : [366, 4] : i < 345221 ? i < 343702 ? i < 342178 ? i < 341917 ? i < 341411 ? i < 341382 ? [55, 0] : [56, 0] : i < 341663 ? [134, 0] : [135, 0] : i < 341930 ? [57, 0] : [136, 0] : [213, 2] : i < 344205 ? i < 343722 ? i < 343713 ? [58, 0] : [59, 0] : i < 343966 ? [137, 0] : [138, 0] : [216, 1] : [371, 4] : i < 358023 ? i < 355381 ? [682, 4] : i < 356363 ? i < 356327 ? i < 355854 ? i < 355809 ? i < 355563 ? [998, 0] : [999, 0] : i < 355811 ? [1077, 0] : [1078, 0] : i < 356108 ? [1000, 0] : [1079, 0] : [1158, 0] : i < 357379 ? [1001, 1] : i < 357842 ? i < 357588 ? [1159, 0] : [1160, 0] : i < 357861 ? [1238, 0] : [1239, 0] : i < 363103 ? [687, 4] : i < 366149 ? i < 364627 ? [1003, 2] : i < 365641 ? i < 365135 ? [1161, 3] : i < 365387 ? [1240, 0] : [1241, 0] : [1163, 9] : [1006, 10] : i < 375158 ? i < 368182 ? [1318, 0] : i < 371859 ? i < 369827 ? i < 369062 ? i < 368554 ? i < 368491 ? i < 368261 ? [1319, 0] : [1320, 0] : [1399, 0] : [1321, 9] : i < 369319 ? i < 369170 ? [1478, 0] : [1557, 0] : [1479, 9] : [1322, 10] : i < 373126 ? i < 372615 ? i < 372107 ? i < 372003 ? [1636, 0] : [1715, 0] : [1637, 9] : i < 372662 ? i < 372658 ? [1794, 0] : [1873, 0] : i < 372914 ? [1795, 0] : [1874, 0] : [1638, 10] : i < 377336 ? i < 375384 ? i < 375366 ? i < 375297 ? [1953, 0] : [2032, 0] : [2111, 0] : i < 376400 ? [1954, 1] : i < 376893 ? i < 376639 ? [2112, 0] : [2113, 0] : i < 377082 ? [2191, 0] : [2192, 0] : i < 377339 ? [2427, 0] : i < 378156 ? i < 377741 ? i < 377487 ? [2270, 0] : [2271, 0] : i < 377902 ? [2349, 0] : [2350, 0] : i < 378369 ? [2428, 0] : [2429, 0] : i < 442741 ? i < 416469 ? i < 396149 ? i < 387403 ? i < 382323 ? i < 380845 ? i < 379321 ? i < 379092 ? i < 378629 ? i < 378627 ? [60, 0] : [61, 0] : i < 378862 ? [139, 0] : [140, 0] : i < 379095 ? [62, 0] : [141, 0] : [218, 2] : i < 381307 ? i < 380850 ? i < 380847 ? [63, 0] : [64, 0] : i < 381080 ? [142, 0] : [143, 0] : [221, 1] : [376, 4] : i < 391069 ? i < 389619 ? i < 388095 ? i < 387865 ? i < 387408 ? i < 387405 ? [65, 0] : [66, 0] : i < 387637 ? [144, 0] : [145, 0] : i < 387868 ? [67, 0] : [146, 0] : [223, 2] : i < 390053 ? i < 389621 ? [68, 0] : i < 389841 ? [147, 0] : [148, 0] : [226, 1] : [381, 4] : [692, 11] : i < 427454 ? i < 424722 ? i < 419642 ? i < 418563 ? i < 417039 ? i < 416874 ? i < 416676 ? [149, 0] : [150, 0] : [151, 0] : [228, 2] : i < 418672 ? i < 418658 ? [152, 0] : [153, 0] : i < 419134 ? i < 418926 ? [231, 0] : [232, 0] : [310, 3] : [386, 4] : i < 425024 ? i < 424771 ? [233, 0] : i < 424993 ? [312, 0] : [313, 0] : i < 426026 ? i < 425960 ? i < 425453 ? i < 425278 ? [391, 0] : [392, 0] : i < 425707 ? [470, 0] : [471, 0] : i < 425961 ? [393, 0] : [472, 0] : i < 427042 ? [549, 1] : i < 427213 ? [551, 0] : i < 427441 ? [630, 0] : [631, 0] : i < 437614 ? [702, 7] : i < 440510 ? i < 439137 ? i < 438630 ? [707, 1] : i < 438894 ? i < 438871 ? [709, 0] : [710, 0] : i < 439124 ? [788, 0] : [789, 0] : i < 440153 ? [865, 1] : i < 440349 ? [867, 0] : [946, 0] : i < 441783 ? i < 441526 ? [1023, 1] : i < 441672 ? [1025, 0] : [1104, 0] : i < 442694 ? i < 442283 ? i < 442037 ? [1181, 0] : [1182, 0] : i < 442537 ? [1260, 0] : [1261, 0] : i < 442739 ? [1183, 0] : [1262, 0] : i < 480841 ? [1324, 8] : i < 495029 ? i < 491001 ? [1334, 7] : i < 492593 ? i < 491566 ? i < 491241 ? i < 491222 ? [1339, 0] : [1340, 0] : i < 491488 ? [1418, 0] : [1419, 0] : i < 492533 ? i < 492028 ? i < 491820 ? [1497, 0] : [1498, 0] : i < 492282 ? [1576, 0] : [1577, 0] : i < 492542 ? [1499, 0] : [1578, 0] : i < 493804 ? i < 493609 ? [1655, 1] : i < 493698 ? [1657, 0] : [1736, 0] : i < 494820 ? [1813, 1] : i < 494923 ? [1815, 0] : [1894, 0] : i < 503919 ? [1966, 6] : i < 506398 ? i < 505144 ? i < 504935 ? [1971, 1] : i < 505038 ? [1973, 0] : [2052, 0] : i < 506160 ? [2129, 1] : i < 506271 ? [2131, 0] : [2210, 0] : i < 507922 ? [2287, 5] : i < 508244 ? i < 508075 ? [2289, 0] : [2368, 0] : [2447, 0] : i < 569553 ? i < 528401 ? i < 508561 ? i < 508443 ? [3603, 0] : [3604, 0] : i < 515555 ? i < 508569 ? [3056, 0] : i < 511295 ? i < 509264 ? i < 508757 ? i < 508623 ? [2506, 0] : [2585, 0] : i < 508800 ? i < 508758 ? [2663, 0] : [2742, 0] : i < 509012 ? [2664, 0] : [2743, 0] : i < 510279 ? i < 509771 ? i < 509517 ? [2507, 0] : [2508, 0] : [2586, 3] : [2665, 1] : i < 513523 ? i < 512186 ? i < 511678 ? i < 511433 ? [2821, 0] : i < 511445 ? [2899, 0] : [2900, 0] : [2822, 9] : i < 513015 ? i < 512543 ? i < 512289 ? [2978, 0] : [2979, 0] : i < 512761 ? [3057, 0] : [3058, 0] : [2980, 9] : [2823, 10] : i < 519511 ? i < 516741 ? i < 515575 ? [3370, 0] : i < 515900 ? i < 515676 ? [3135, 0] : i < 515684 ? [3213, 0] : [3214, 0] : i < 516256 ? i < 516002 ? [3292, 0] : [3293, 0] : i < 516487 ? [3371, 0] : [3372, 0] : i < 517987 ? i < 517258 ? i < 516844 ? i < 516742 ? [3448, 0] : i < 516747 ? [3526, 0] : [3527, 0] : i < 517006 ? [3449, 0] : [3528, 0] : i < 517733 ? i < 517479 ? [3605, 0] : [3606, 0] : [3607, 0] : [3450, 5] : [3136, 6] : i < 540097 ? i < 536892 ? i < 528494 ? i < 528444 ? i < 528411 ? [3994, 0] : [4073, 0] : i < 528480 ? [4152, 0] : [4231, 0] : i < 531882 ? i < 529898 ? i < 528791 ? i < 528528 ? [3759, 0] : i < 528567 ? [3681, 0] : [3760, 0] : i < 529390 ? i < 529010 ? i < 528807 ? [3837, 0] : [3838, 0] : i < 529136 ? [3916, 0] : [3917, 0] : [3839, 9] : i < 530866 ? i < 530358 ? i < 530104 ? [3682, 0] : [3683, 0] : [3761, 3] : [3840, 1] : i < 534856 ? i < 533362 ? i < 532854 ? i < 532354 ? i < 532100 ? [3995, 0] : [3996, 0] : i < 532600 ? [4074, 0] : [4075, 0] : [3997, 9] : i < 534346 ? i < 533864 ? i < 533609 ? [4153, 0] : [4154, 0] : i < 534091 ? [4232, 0] : [4233, 0] : [4155, 9] : i < 535872 ? [3998, 1] : [4156, 1] : i < 538316 ? i < 538053 ? i < 537543 ? i < 537295 ? i < 537041 ? [4311, 0] : [4312, 0] : i < 537324 ? [4390, 0] : [4391, 0] : [4313, 9] : i < 538099 ? [4470, 0] : i < 538303 ? [4471, 0] : [4550, 0] : i < 539336 ? [4314, 1] : i < 539845 ? i < 539590 ? [4472, 0] : [4473, 0] : i < 539936 ? [4551, 0] : [4552, 0] : i < 560437 ? i < 550267 ? i < 545177 ? [3684, 4] : i < 548231 ? i < 546701 ? [4000, 2] : [4158, 2] : i < 549247 ? [4003, 1] : [4161, 1] : i < 555347 ? [3689, 4] : i < 558401 ? i < 556871 ? [4005, 2] : [4163, 2] : i < 559417 ? [4008, 1] : [4166, 1] : i < 565179 ? i < 563322 ? i < 561967 ? [4316, 2] : i < 562876 ? i < 562477 ? [4474, 3] : i < 562672 ? [4553, 0] : [4554, 0] : i < 563131 ? [4476, 0] : [4555, 0] : i < 564342 ? [4319, 1] : i < 564852 ? [4477, 3] : i < 565029 ? [4556, 0] : [4557, 0] : i < 567831 ? i < 566709 ? [4321, 2] : i < 567471 ? i < 567219 ? [4479, 3] : i < 567353 ? [4558, 0] : [4559, 0] : i < 567726 ? [4481, 0] : [4560, 0] : i < 568851 ? [4324, 1] : i < 569361 ? [4482, 3] : i < 569460 ? [4561, 0] : [4562, 0] : i < 637380 ? i < 607653 ? [2509, 8] : i < 623639 ? i < 617813 ? [2519, 7] : i < 620704 ? i < 619230 ? i < 618829 ? [2524, 1] : i < 619018 ? [2526, 0] : i < 619229 ? [2605, 0] : [2606, 0] : i < 620246 ? [2682, 1] : i < 620471 ? i < 620468 ? [2684, 0] : [2685, 0] : i < 620702 ? [2763, 0] : [2764, 0] : i < 622183 ? i < 621720 ? [2840, 1] : i < 621951 ? i < 621948 ? [2842, 0] : [2843, 0] : i < 622181 ? [2921, 0] : [2922, 0] : i < 623199 ? [2998, 1] : i < 623423 ? i < 623420 ? [3000, 0] : [3001, 0] : [3079, 0] : i < 632529 ? [3151, 6] : i < 635311 ? i < 633932 ? i < 633545 ? [3156, 1] : i < 633745 ? [3158, 0] : [3237, 0] : i < 634948 ? [3314, 1] : i < 635131 ? [3316, 0] : [3395, 0] : i < 636835 ? [3472, 5] : i < 637198 ? i < 637018 ? [3474, 0] : [3553, 0] : [3632, 0] : i < 665496 ? i < 657720 ? i < 647550 ? i < 642460 ? [3694, 4] : i < 645514 ? i < 643984 ? [4010, 2] : [4168, 2] : i < 646530 ? [4013, 1] : [4171, 1] : i < 652630 ? [3699, 4] : i < 655684 ? i < 654154 ? [4015, 2] : [4173, 2] : i < 656700 ? [4018, 1] : [4176, 1] : i < 661785 ? i < 660225 ? i < 659250 ? [4326, 2] : i < 659920 ? i < 659760 ? [4484, 3] : i < 659849 ? [4563, 0] : [4564, 0] : i < 660174 ? [4486, 0] : [4565, 0] : i < 661245 ? [4329, 1] : i < 661744 ? i < 661497 ? [4487, 0] : [4488, 0] : i < 661770 ? [4566, 0] : [4567, 0] : i < 664020 ? i < 663315 ? [4331, 2] : i < 663793 ? i < 663782 ? i < 663552 ? [4489, 0] : [4490, 0] : i < 663790 ? [4568, 0] : [4569, 0] : i < 664018 ? [4491, 0] : [4570, 0] : i < 665040 ? [4334, 1] : i < 665492 ? i < 665262 ? [4492, 0] : [4493, 0] : [4571, 3] : i < 681134 ? i < 675666 ? i < 670576 ? [3704, 4] : i < 673630 ? i < 672100 ? [4020, 2] : [4178, 2] : i < 674646 ? [4023, 1] : [4181, 1] : i < 678364 ? i < 677021 ? i < 676682 ? [3709, 1] : i < 676855 ? [3711, 0] : [3790, 0] : i < 678037 ? [3867, 1] : i < 678194 ? [3869, 0] : [3948, 0] : i < 679793 ? i < 679380 ? [4025, 1] : i < 679580 ? [4027, 0] : i < 679790 ? [4106, 0] : [4107, 0] : i < 680812 ? i < 680303 ? [4183, 3] : i < 680558 ? [4262, 0] : [4263, 0] : i < 681006 ? i < 681005 ? [4185, 0] : [4186, 0] : [4264, 0] : i < 685014 ? i < 683536 ? i < 682664 ? [4336, 2] : i < 683228 ? i < 683164 ? i < 682911 ? [4494, 0] : [4495, 0] : i < 683181 ? [4573, 0] : [4574, 0] : i < 683481 ? [4496, 0] : [4575, 0] : i < 684556 ? [4339, 1] : i < 684981 ? i < 684798 ? [4497, 0] : [4498, 0] : i < 685011 ? [4576, 0] : [4577, 0] : i < 685848 ? i < 685817 ? i < 685499 ? i < 685269 ? [4341, 0] : [4342, 0] : i < 685738 ? [4420, 0] : [4421, 0] : [4343, 0] : [4499, 0];
      };
    }

    function Emitter_Beams() {
      var _1,
          _2,
          _2i0,
          _2s0 = [],
          _3 = [[], []],
          _3i,
          _3s = [],
          _4 = [],
          _6,
          _8,
          _9,
          _10 = [],
          _13 = [],
          _14 = [],
          _14i = [],
          _12,
          _15,
          _16 = [],
          _16i0,
          _16s0 = [],
          _16i1,
          _16s1 = [],
          _17,
          _18,
          _18i0,
          _18s0 = [];

      this.pe = [{
        xe: 1,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 1
      }];
      this.name = "Beams";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._2 = [[[0, 0.173445, 0.269864, 0.33595, 0.385367, 0.424532, 0.457227, 0.486062, 0.513119, 0.540314, 0.569696, 0.603822, 0.646457, 0.704302, 0.793306, 1, 1]]];
        Bd._3 = [[[[465.551, 205.306], [-0.867493, -0.497449]], [[460.957, 202.671], [-0.893092, -0.449874]], [[456.227, 200.289], [-0.919747, -0.392511]], [[451.357, 198.21], [-0.945303, -0.326193]], [[446.351, 196.483], [-0.967222, -0.253934]], [[441.229, 195.138], [-0.983565, -0.180552]], [[436.021, 194.182], [-0.993774, -0.111417]], [[430.759, 193.592], [-0.998717, -0.0506409]], [[425.47, 193.324], [-1, -0.000227616]], [[420.174, 193.323], [-0.999209, 0.0397553]], [[414.882, 193.533], [-0.99752, 0.0703776]], [[409.599, 193.906], [-0.99565, 0.0931676]], [[404.325, 194.399], [-0.993968, 0.109671]], [[399.061, 194.98], [-0.992624, 0.12123]], [[393.803, 195.622], [-0.991648, 0.12897]], [[388.551, 196.306], [-0.991648, 0.12897]], [[388.551, 196.306], [-0.991648, 0.12897]]], [[[388.551, 196.306], [-0.984638, 0.174607]], [[382.725, 197.339], [-0.966844, 0.255368]], [[377.005, 198.85], [-0.944354, 0.328931]], [[371.417, 200.796], [-0.91838, 0.395701]], [[365.983, 203.137], [-0.889861, 0.456232]], [[360.717, 205.837], [-0.859405, 0.511295]], [[355.632, 208.863], [-0.827406, 0.561604]], [[350.735, 212.186], [-0.794009, 0.607907]], [[346.037, 215.783], [-0.759265, 0.650782]], [[341.544, 219.634], [-0.723005, 0.690843]], [[337.265, 223.722], [-0.684993, 0.728549]], [[333.212, 228.034], [-0.644844, 0.764315]], [[329.396, 232.557], [-0.602041, 0.798465]], [[325.833, 237.282], [-0.555936, 0.831225]], [[322.543, 242.201], [-0.50569, 0.862715]], [[319.551, 247.306], [-0.50569, 0.862715]], [[319.551, 247.306], [-0.50569, 0.862715]]], [[[319.551, 247.306], [-0.45124, 0.892403]], [[316.702, 252.94], [-0.396702, 0.917947]], [[314.197, 258.736], [-0.343474, 0.939162]], [[312.028, 264.666], [-0.291539, 0.956559]], [[310.187, 270.706], [-0.240765, 0.970584]], [[308.667, 276.835], [-0.19094, 0.981602]], [[307.461, 283.033], [-0.14189, 0.989883]], [[306.565, 289.283], [-0.0933151, 0.995637]], [[305.976, 295.57], [-0.0449856, 0.998988]], [[305.692, 301.878], [0.00342659, 0.999994]], [[305.714, 308.193], [0.0521727, 0.998638]], [[306.043, 314.498], [0.101591, 0.994826]], [[306.685, 320.78], [0.151961, 0.988387]], [[307.644, 327.021], [0.203581, 0.979058]], [[308.93, 333.203], [0.25675, 0.966478]], [[310.551, 339.306], [0.25675, 0.966478]], [[310.551, 339.306], [0.25675, 0.966478]]], [[[310.551, 339.306], [0.318603, 0.947888]], [[312.314, 344.551], [0.384028, 0.923321]], [[314.439, 349.66], [0.443926, 0.896063]], [[316.895, 354.618], [0.498661, 0.866797]], [[319.655, 359.415], [0.548806, 0.83595]], [[322.692, 364.041], [0.594867, 0.803824]], [[325.984, 368.489], [0.637368, 0.770559]], [[329.511, 372.754], [0.676778, 0.736187]], [[333.256, 376.828], [0.713526, 0.700628]], [[337.205, 380.705], [0.747964, 0.66374]], [[341.344, 384.378], [0.780407, 0.625272]], [[345.663, 387.838], [0.811092, 0.584918]], [[350.152, 391.075], [0.840202, 0.542273]], [[354.801, 394.076], [0.867825, 0.49687]], [[359.604, 396.826], [0.893982, 0.448102]], [[364.551, 399.306], [0.893982, 0.448102]], [[364.551, 399.306], [0.893982, 0.448102]]], [[[364.551, 399.306], [0.924438, 0.381332]], [[369.445, 401.324], [0.950752, 0.309953]], [[374.479, 402.965], [0.967973, 0.251052]], [[379.604, 404.295], [0.979645, 0.200738]], [[384.791, 405.357], [0.987706, 0.156325]], [[390.021, 406.185], [0.993253, 0.115966]], [[395.281, 406.799], [0.996933, 0.0782654]], [[400.56, 407.214], [0.999111, 0.0421459]], [[405.85, 407.437], [0.999978, 0.00668527]], [[411.145, 407.472], [0.99958, -0.0289834]], [[416.438, 407.319], [0.997836, -0.0657463]], [[421.722, 406.971], [0.994517, -0.10458]], [[426.988, 406.417], [0.989186, -0.146667]], [[432.226, 405.64], [0.98109, -0.193554]], [[437.421, 404.615], [0.968913, -0.247403]], [[442.551, 403.306], [0.968913, -0.247403]], [[442.551, 403.306], [0.968913, -0.247403]]]];
        Bd._16 = [[[1, 1, 1]], [[0, 0.229511, 0.43425, 0.61081, 0.755889, 0.866518, 0.940316, 0.975727, 0.97219, 0.930204, 0.851269, 0.737719, 0.592492, 0.418874, 0.220266, 0, 0]]];
        Bd._18 = [[[0, 0.2, 0.2], [0.2, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 25;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 25;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i0 = _1 < 0 ? 0 : _1 > 1 ? 1 : _1;
        ctx.V(_2s0, 0, (_2i0 - 0) * 15);
        _2 = Db.nb(Bd._2[0][_2s0[0]], _2s0[1]);
        _3i = Db.kb(_2);
        _3i < 0.618116 ? _3i < 0.395441 ? _3i < 0.186762 ? ctx.V(_3s, 0, (_3i - 0) * 80.3161) : ctx.V(_3s, 1, (_3i - 0.186762) * 71.8809) : ctx.V(_3s, 2, (_3i - 0.395441) * 67.3625) : _3i < 0.81327 ? ctx.V(_3s, 3, (_3i - 0.618116) * 76.8624) : ctx.V(_3s, 4, (_3i - 0.81327) * 80.33);
        Db.mb(_3, Bd._3[_3s[0]], _3s[1]);
        ctx.W(_4, _3[0][0], _3[0][1], 0);
        Xb._5 = [];
        ctx.rb(Xb._5, _4, Bd.Mc);
        ctx.c(Xb._5, Bd.Ab, Xb._5);
        _6 = ctx.jb(Math.atan2(_3[1][1], _3[1][0]));
        Xb._7 = _6;
        _8 = 20 + Bd.Ld.rand() * (30 - 20);
        _9 = 120 + Bd.Ld.rand() * (150 - 120);
        ctx.V(_10, _8, _9);
        Xb._11 = [];
        ctx.S(Xb._11, _10);
        ctx.T(Xb.Ab, Xb._5);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2i0 = _1 < 0 ? 0 : _1 > 1 ? 1 : _1;
        ctx.V(_2s0, 0, (_2i0 - 0) * 15);
        _2 = Db.nb(Bd._2[0][_2s0[0]], _2s0[1]);
        _3i = Db.kb(_2);
        _3i < 0.618116 ? _3i < 0.395441 ? _3i < 0.186762 ? ctx.V(_3s, 0, (_3i - 0) * 80.3161) : ctx.V(_3s, 1, (_3i - 0.186762) * 71.8809) : ctx.V(_3s, 2, (_3i - 0.395441) * 67.3625) : _3i < 0.81327 ? ctx.V(_3s, 3, (_3i - 0.618116) * 76.8624) : ctx.V(_3s, 4, (_3i - 0.81327) * 80.33);
        Db.mb(_3, Bd._3[_3s[0]], _3s[1]);
        ctx.W(_4, _3[0][0], _3[0][1], 0);
        Xb._5 = [];
        ctx.rb(Xb._5, _4, Bd.Mc);
        ctx.c(Xb._5, Bd.Ab, Xb._5);
        _6 = ctx.jb(Math.atan2(_3[1][1], _3[1][0]));
        Xb._7 = _6;
        _8 = 20 + Bd.Ld.rand() * (30 - 20);
        _9 = 120 + Bd.Ld.rand() * (150 - 120);
        ctx.V(_10, _8, _9);
        Xb._11 = [];
        ctx.S(Xb._11, _10);
        ctx.T(Xb.Ab, Xb._5);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(Xb.Ab, Xb._5);
        ctx.W(_13, 0, 0, 1);
        ctx.Q(_14i, _13);
        ctx.qb(_14, _14i, Xb._7);
        _12 = 2;
        _15 = Xb._ / _12;
        _16i0 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        ctx.V(_16s0, 0, (_16i0 - 0) * 1);
        _16i1 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        ctx.V(_16s1, 0, (_16i1 - 0) * 15);
        ctx.V(_16, Db.nb(Bd._16[0][_16s0[0]], _16s0[1]), Db.nb(Bd._16[1][_16s1[0]], _16s1[1]));
        _17 = ctx.j(Xb._11, _16);
        _18i0 = _15 < 0 ? 0 : _15 > 1 ? 1 : _15;
        _18i0 < 0.5 ? ctx.V(_18s0, 0, (_18i0 - 0) * 2) : ctx.V(_18s0, 1, (_18i0 - 0.5) * 2);
        _18 = Db.nb(Bd._18[0][_18s0[0]], _18s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.12]);
        ctx.U(Xb.Mc, _14);
        ctx.S(Xb.Nd, _17);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = _18;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _12 = 2;
        if (Xb._ > _12) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 7;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_Stars());
      Ld.pd(new Emitter_Beams());
    };

    this.kb = function (v) {
      return v < 0 ? 0 : v > 1 ? 1 : v;
    };

    this.mb = function (r, path, je) {
      var indexInt = Math.floor(je);
      var lerp = je - indexInt;
      ctx.Y(r[0], path[indexInt][0], path[indexInt + 1][0], lerp);
      ctx.Y(r[1], path[indexInt][1], path[indexInt + 1][1], lerp);
    };

    this.nb = function (funcValues, je) {
      var indexInt = Math.floor(je);
      var nextInt = indexInt + 1;
      return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt);
    };
  }

  return Cresent_stars;
});

cc._RF.pop();