"use strict";
cc._RF.push(module, 'd1a0fqspAlJ8ovPBXDHJoJh', 'Sparks burst');
// neutrinoparticles/exported_effects/Sparks burst.js

"use strict";

// 13ce42a2-420f-4b86-8911-dfffe6aadb52
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Sparks_burst'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Sparks_burst'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Sparks_burst(ctx) {
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

    this.textures = ['sphere_orange.png'];
    this.materials = [1];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 3000;

    function Emitter_DefaultEmitter() {
      var _1,
          _3 = [],
          _5,
          _6,
          _6i0,
          _6s0 = [],
          _7 = [],
          _7i,
          _7s = [],
          _8 = [],
          _9,
          _10,
          _10i0,
          _10s0 = [],
          _11,
          _13,
          _15 = [],
          _17 = [],
          _19,
          _21 = [],
          _22,
          _22i0,
          _22s0 = [],
          _23,
          _24,
          _24i0,
          _24s0 = [],
          _25,
          _26 = [],
          _26fs = [],
          _26vs = [],
          _26rw = [],
          _26rwn = [],
          _26rwl,
          _26v = [],
          _26p = [],
          _26dtl,
          _26dtp,
          _26df,
          _26fsd = [],
          _27 = [],
          _27x = [],
          _27y = [],
          _27z = [],
          _28 = [],
          _29,
          _30 = [],
          _30i0,
          _30s0 = [],
          _30i1,
          _30s1 = [],
          _31,
          _32,
          _32i0,
          _32s0 = [],
          _33,
          _33i0,
          _33s0 = [],
          _34,
          _34i0,
          _34s0 = [],
          _35,
          _36;

      this.pe = [{
        xe: 1,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._6 = [[[0, 0.220665, 0.318587, 0.379215, 0.420794, 0.451183, 0.474816, 0.494688, 0.513163, 0.532418, 0.554793, 0.583229, 0.622079, 0.679108, 0.772734, 1, 1]]];
        Bd._7 = [[[60, -293], [183, -219], [183, -219]]];
        Bd._10 = [[[0.3, 1, 1]]];
        Bd._22 = [[[0, 0.0129444, 0.0491835, 0.104924, 0.176478, 0.260245, 0.35269, 0.450322, 0.54968, 0.647311, 0.739756, 0.823523, 0.895077, 0.950817, 0.987056, 1, 1], [1, 0.987056, 0.950816, 0.895075, 0.823522, 0.739755, 0.647311, 0.549678, 0.450321, 0.352688, 0.260244, 0.176477, 0.104924, 0.0491832, 0.0129438, 0, 0]]];
        Bd._24 = [[[0, 0.0129445, 0.0491834, 0.104923, 0.176477, 0.260245, 0.352688, 0.45032, 0.549679, 0.647311, 0.739757, 0.823523, 0.895077, 0.950817, 0.987056, 1, 1]]];
        Bd._30 = [[[1, 1.08235, 1.31293, 1.66757, 2.12282, 2.65577, 3.24394, 3.86511, 4.49725, 5.11842, 5.70659, 6.23954, 6.69479, 7.04943, 7.27999, 7.36235, 7.36235]], [[1, 1, 1]]];
        Bd._32 = [[[0, 1, 1], [1, 0.376401, 0.376401], [0.376401, 0.8, 0.8], [0.8, 0.1, 0.1], [0.1, 1, 1], [1, 0, 0]]];
        Bd._33 = [[[0, 0.34799, 0.516906, 0.631629, 0.71686, 0.782823, 0.834936, 0.876485, 0.90965, 0.935968, 0.956581, 0.972371, 0.984046, 0.992201, 0.997357, 1, 1]]];
        Bd._34 = [[[1, 0.997975, 0.991373, 0.980075, 0.96386, 0.942401, 0.91523, 0.881707, 0.840947, 0.791711, 0.7322, 0.659677, 0.569629, 0.453644, 0.292056, 0, 0]]];
        Bd.jd = 1000;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 0.3;
        vd.Gb = 1;
        vd.Jb = 500;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 0.3;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 1 + Bd.Ld.rand() * (3 - 1);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i0 = _5 < 0 ? 0 : _5 > 1 ? 1 : _5;
        ctx.V(_6s0, 0, (_6i0 - 0) * 15);
        _6 = Db.nb(Bd._6[0][_6s0[0]], _6s0[1]);
        _7i = Db.kb(_6);
        ctx.V(_7s, 0, (_7i - 0) * 1);
        Db.lb(_7, Bd._7[_7s[0]], _7s[1]);
        ctx.W(_8, _7[0], _7[1], 0);
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10 = Db.nb(Bd._10[0][_10s0[0]], _10s0[1]);
        _11 = ctx.v(ctx.v(_8, _10), 10);
        Xb._12 = [];
        ctx.T(Xb._12, _11);
        _13 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._14 = _13;
        ctx.randv3gen(_15, 300, Bd.Ld.rand);
        Xb._16 = [];
        ctx.T(Xb._16, _15);
        ctx.randv3gen(_17, 300, Bd.Ld.rand);
        Xb._18 = [];
        ctx.T(Xb._18, _17);
        _19 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._20 = _19;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 1 + Bd.Ld.rand() * (3 - 1);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i0 = _5 < 0 ? 0 : _5 > 1 ? 1 : _5;
        ctx.V(_6s0, 0, (_6i0 - 0) * 15);
        _6 = Db.nb(Bd._6[0][_6s0[0]], _6s0[1]);
        _7i = Db.kb(_6);
        ctx.V(_7s, 0, (_7i - 0) * 1);
        Db.lb(_7, Bd._7[_7s[0]], _7s[1]);
        ctx.W(_8, _7[0], _7[1], 0);
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10 = Db.nb(Bd._10[0][_10s0[0]], _10s0[1]);
        _11 = ctx.v(ctx.v(_8, _10), 10);
        Xb._12 = [];
        ctx.T(Xb._12, _11);
        _13 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._14 = _13;
        ctx.randv3gen(_15, 300, Bd.Ld.rand);
        Xb._16 = [];
        ctx.T(Xb._16, _15);
        ctx.randv3gen(_17, 300, Bd.Ld.rand);
        Xb._18 = [];
        ctx.T(Xb._18, _17);
        _19 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._20 = _19;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_21, 0, 150, 0);
        _22i0 = Xb._ < 0.000502169 ? 0.000502169 : Xb._ > 1 ? 0.000502169 + (Xb._ - 0.000502169) % 0.999498 : Xb._;
        _22i0 < 0.5 ? ctx.V(_22s0, 0, (_22i0 - 0.000502169) * 30.0302) : ctx.V(_22s0, 1, (_22i0 - 0.5) * 30);
        _22 = Db.nb(Bd._22[0][_22s0[0]], _22s0[1]);
        _23 = Xb._ / Xb._2;
        _24i0 = _23 < 0.000502169 ? 0.000502169 : _23 > 1 ? 1 : _23;
        ctx.V(_24s0, 0, (_24i0 - 0.000502169) * 15.0075);
        _24 = Db.nb(Bd._24[0][_24s0[0]], _24s0[1]);
        _25 = ctx.v(ctx.bb(Xb._16, Xb._18, _22), _24);
        ctx.T(_26fs, _21);
        ctx.c(_26fs, _26fs, _25);
        ctx.T(_26vs, [0, 0, 0]);
        _26dtl = Qb;
        ctx.T(_26v, Xb._12);
        ctx.T(_26p, Xb._4);

        while (_26dtl > 0.0001) {
          _26dtp = _26dtl;
          ctx.T(_26fsd, _26fs);
          ctx.g(_26rw, _26vs, _26v);
          _26rwl = ctx.P(_26rw);

          if (_26rwl > 0.0001) {
            _26rwl = Math.sqrt(_26rwl);
            ctx.w(_26rwn, _26rw, _26rwl);
            _26df = 0.01 * Xb._14 * _26rwl;
            if (_26df * _26dtp > 0.2) _26dtp = 0.2 / _26df;
            ctx.c(_26fsd, _26fsd, ctx.v(_26rwn, _26rwl * _26df));
          }

          ctx.c(_26v, _26v, ctx.v(_26fsd, _26dtp));
          ctx.c(_26p, _26p, ctx.v(_26v, _26dtp));
          _26dtl -= _26dtp;
        }

        ctx.T(Xb._4, _26p);
        ctx.T(Xb._12, _26v);
        ctx.T(Xb.Ab, Xb._4);
        ctx.Q(_27z, [0, 0, 1]);
        ctx.I(_27y, _27z, Xb._12);
        ctx.Q(_27y, _27y);
        ctx.I(_27x, _27y, _27z);
        ctx.pb(_27, _27x, _27y, _27z);
        ctx.V(_28, 3, 3);
        _29 = ctx.O(Xb._12);
        _30i0 = _29 < 0 ? 0 : _29 > 200 ? 200 : _29;
        ctx.V(_30s0, 0, (_30i0 - 0) * 0.075);
        _30i1 = _29 < 0 ? 0 : _29 > 1 ? 1 : _29;
        ctx.V(_30s1, 0, (_30i1 - 0) * 1);
        ctx.V(_30, Db.nb(Bd._30[0][_30s0[0]], _30s0[1]), Db.nb(Bd._30[1][_30s1[0]], _30s1[1]));
        _31 = Xb._ + Xb._20;
        _32i0 = _31 < 0 ? 0 : _31 > 1 ? 0 + (_31 - 0) % 1 : _31;
        _32i0 < 0.5 ? _32i0 < 0.4 ? _32i0 < 0.256169 ? ctx.V(_32s0, 0, (_32i0 - 0) * 3.90367) : ctx.V(_32s0, 1, (_32i0 - 0.256169) * 6.95262) : ctx.V(_32s0, 2, (_32i0 - 0.4) * 10) : _32i0 < 0.8 ? _32i0 < 0.623069 ? ctx.V(_32s0, 3, (_32i0 - 0.5) * 8.12552) : ctx.V(_32s0, 4, (_32i0 - 0.623069) * 5.65192) : ctx.V(_32s0, 5, (_32i0 - 0.8) * 5);
        _32 = Db.nb(Bd._32[0][_32s0[0]], _32s0[1]);
        _23 = Xb._ / Xb._2;
        _33i0 = _23 < 0 ? 0 : _23 > 1 ? 1 : _23;
        ctx.V(_33s0, 0, (_33i0 - 0) * 15);
        _33 = Db.nb(Bd._33[0][_33s0[0]], _33s0[1]);
        _34i0 = _23 < 0 ? 0 : _23 > 1 ? 1 : _23;
        ctx.V(_34s0, 0, (_34i0 - 0) * 15);
        _34 = Db.nb(Bd._34[0][_34s0[0]], _34s0[1]);
        _35 = ctx.r(ctx.r(_30, ctx.X(1, _32, _33)), _34);
        _36 = ctx.j(_28, _35);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        ctx.U(Xb.Mc, _27);
        ctx.S(Xb.Nd, _36);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = 1;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._2) return true;
        return false;
      };
    }

    function Emitter_DefaultEmitter1() {
      var _1,
          _3 = [],
          _5,
          _6,
          _6i0,
          _6s0 = [],
          _7 = [],
          _7i,
          _7s = [],
          _8 = [],
          _9,
          _10,
          _10i0,
          _10s0 = [],
          _11,
          _13,
          _15 = [],
          _17 = [],
          _19,
          _21 = [],
          _22,
          _22i0,
          _22s0 = [],
          _23,
          _24,
          _24i0,
          _24s0 = [],
          _25,
          _26 = [],
          _26fs = [],
          _26vs = [],
          _26rw = [],
          _26rwn = [],
          _26rwl,
          _26v = [],
          _26p = [],
          _26dtl,
          _26dtp,
          _26df,
          _26fsd = [],
          _27 = [],
          _27x = [],
          _27y = [],
          _27z = [],
          _28 = [],
          _29,
          _30 = [],
          _30i0,
          _30s0 = [],
          _30i1,
          _30s1 = [],
          _31,
          _32,
          _32i0,
          _32s0 = [],
          _33,
          _33i0,
          _33s0 = [],
          _34,
          _34i0,
          _34s0 = [],
          _35,
          _36;

      this.pe = [{
        xe: 1,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter1";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._6 = [[[0, 0.220665, 0.318587, 0.379215, 0.420794, 0.451183, 0.474816, 0.494688, 0.513163, 0.532418, 0.554793, 0.583229, 0.622079, 0.679108, 0.772734, 1, 1]]];
        Bd._7 = [[[242, -383], [321, -275], [321, -275]]];
        Bd._10 = [[[0.3, 1, 1]]];
        Bd._22 = [[[0, 0.0129444, 0.0491835, 0.104924, 0.176478, 0.260245, 0.35269, 0.450322, 0.54968, 0.647311, 0.739756, 0.823523, 0.895077, 0.950817, 0.987056, 1, 1], [1, 0.987056, 0.950816, 0.895075, 0.823522, 0.739755, 0.647311, 0.549678, 0.450321, 0.352688, 0.260244, 0.176477, 0.104924, 0.0491832, 0.0129438, 0, 0]]];
        Bd._24 = [[[0, 0.0129445, 0.0491834, 0.104923, 0.176477, 0.260245, 0.352688, 0.45032, 0.549679, 0.647311, 0.739757, 0.823523, 0.895077, 0.950817, 0.987056, 1, 1]]];
        Bd._30 = [[[1, 1.08235, 1.31293, 1.66757, 2.12282, 2.65577, 3.24394, 3.86511, 4.49725, 5.11842, 5.70659, 6.23954, 6.69479, 7.04943, 7.27999, 7.36235, 7.36235]], [[1, 1, 1]]];
        Bd._32 = [[[0, 1, 1], [1, 0.376401, 0.376401], [0.376401, 0.8, 0.8], [0.8, 0.1, 0.1], [0.1, 1, 1], [1, 0, 0]]];
        Bd._33 = [[[0, 0.34799, 0.516906, 0.631629, 0.71686, 0.782823, 0.834936, 0.876485, 0.90965, 0.935968, 0.956581, 0.972371, 0.984046, 0.992201, 0.997357, 1, 1]]];
        Bd._34 = [[[1, 0.997975, 0.991373, 0.980075, 0.96386, 0.942401, 0.91523, 0.881707, 0.840947, 0.791711, 0.7322, 0.659677, 0.569629, 0.453644, 0.292056, 0, 0]]];
        Bd.jd = 1000;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 0.3;
        vd.Gb = 1;
        vd.Jb = 500;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 0.3;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 1 + Bd.Ld.rand() * (3 - 1);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i0 = _5 < 0 ? 0 : _5 > 1 ? 1 : _5;
        ctx.V(_6s0, 0, (_6i0 - 0) * 15);
        _6 = Db.nb(Bd._6[0][_6s0[0]], _6s0[1]);
        _7i = Db.kb(_6);
        ctx.V(_7s, 0, (_7i - 0) * 1);
        Db.lb(_7, Bd._7[_7s[0]], _7s[1]);
        ctx.W(_8, _7[0], _7[1], 0);
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10 = Db.nb(Bd._10[0][_10s0[0]], _10s0[1]);
        _11 = ctx.v(ctx.v(_8, _10), 10);
        Xb._12 = [];
        ctx.T(Xb._12, _11);
        _13 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._14 = _13;
        ctx.randv3gen(_15, 300, Bd.Ld.rand);
        Xb._16 = [];
        ctx.T(Xb._16, _15);
        ctx.randv3gen(_17, 300, Bd.Ld.rand);
        Xb._18 = [];
        ctx.T(Xb._18, _17);
        _19 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._20 = _19;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 1 + Bd.Ld.rand() * (3 - 1);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i0 = _5 < 0 ? 0 : _5 > 1 ? 1 : _5;
        ctx.V(_6s0, 0, (_6i0 - 0) * 15);
        _6 = Db.nb(Bd._6[0][_6s0[0]], _6s0[1]);
        _7i = Db.kb(_6);
        ctx.V(_7s, 0, (_7i - 0) * 1);
        Db.lb(_7, Bd._7[_7s[0]], _7s[1]);
        ctx.W(_8, _7[0], _7[1], 0);
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10 = Db.nb(Bd._10[0][_10s0[0]], _10s0[1]);
        _11 = ctx.v(ctx.v(_8, _10), 10);
        Xb._12 = [];
        ctx.T(Xb._12, _11);
        _13 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._14 = _13;
        ctx.randv3gen(_15, 300, Bd.Ld.rand);
        Xb._16 = [];
        ctx.T(Xb._16, _15);
        ctx.randv3gen(_17, 300, Bd.Ld.rand);
        Xb._18 = [];
        ctx.T(Xb._18, _17);
        _19 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._20 = _19;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_21, 0, 150, 0);
        _22i0 = Xb._ < 0.000502169 ? 0.000502169 : Xb._ > 1 ? 0.000502169 + (Xb._ - 0.000502169) % 0.999498 : Xb._;
        _22i0 < 0.5 ? ctx.V(_22s0, 0, (_22i0 - 0.000502169) * 30.0302) : ctx.V(_22s0, 1, (_22i0 - 0.5) * 30);
        _22 = Db.nb(Bd._22[0][_22s0[0]], _22s0[1]);
        _23 = Xb._ / Xb._2;
        _24i0 = _23 < 0.000502169 ? 0.000502169 : _23 > 1 ? 1 : _23;
        ctx.V(_24s0, 0, (_24i0 - 0.000502169) * 15.0075);
        _24 = Db.nb(Bd._24[0][_24s0[0]], _24s0[1]);
        _25 = ctx.v(ctx.bb(Xb._16, Xb._18, _22), _24);
        ctx.T(_26fs, _21);
        ctx.c(_26fs, _26fs, _25);
        ctx.T(_26vs, [0, 0, 0]);
        _26dtl = Qb;
        ctx.T(_26v, Xb._12);
        ctx.T(_26p, Xb._4);

        while (_26dtl > 0.0001) {
          _26dtp = _26dtl;
          ctx.T(_26fsd, _26fs);
          ctx.g(_26rw, _26vs, _26v);
          _26rwl = ctx.P(_26rw);

          if (_26rwl > 0.0001) {
            _26rwl = Math.sqrt(_26rwl);
            ctx.w(_26rwn, _26rw, _26rwl);
            _26df = 0.01 * Xb._14 * _26rwl;
            if (_26df * _26dtp > 0.2) _26dtp = 0.2 / _26df;
            ctx.c(_26fsd, _26fsd, ctx.v(_26rwn, _26rwl * _26df));
          }

          ctx.c(_26v, _26v, ctx.v(_26fsd, _26dtp));
          ctx.c(_26p, _26p, ctx.v(_26v, _26dtp));
          _26dtl -= _26dtp;
        }

        ctx.T(Xb._4, _26p);
        ctx.T(Xb._12, _26v);
        ctx.T(Xb.Ab, Xb._4);
        ctx.Q(_27z, [0, 0, 1]);
        ctx.I(_27y, _27z, Xb._12);
        ctx.Q(_27y, _27y);
        ctx.I(_27x, _27y, _27z);
        ctx.pb(_27, _27x, _27y, _27z);
        ctx.V(_28, 3, 3);
        _29 = ctx.O(Xb._12);
        _30i0 = _29 < 0 ? 0 : _29 > 200 ? 200 : _29;
        ctx.V(_30s0, 0, (_30i0 - 0) * 0.075);
        _30i1 = _29 < 0 ? 0 : _29 > 1 ? 1 : _29;
        ctx.V(_30s1, 0, (_30i1 - 0) * 1);
        ctx.V(_30, Db.nb(Bd._30[0][_30s0[0]], _30s0[1]), Db.nb(Bd._30[1][_30s1[0]], _30s1[1]));
        _31 = Xb._ + Xb._20;
        _32i0 = _31 < 0 ? 0 : _31 > 1 ? 0 + (_31 - 0) % 1 : _31;
        _32i0 < 0.5 ? _32i0 < 0.4 ? _32i0 < 0.256169 ? ctx.V(_32s0, 0, (_32i0 - 0) * 3.90367) : ctx.V(_32s0, 1, (_32i0 - 0.256169) * 6.95262) : ctx.V(_32s0, 2, (_32i0 - 0.4) * 10) : _32i0 < 0.8 ? _32i0 < 0.623069 ? ctx.V(_32s0, 3, (_32i0 - 0.5) * 8.12552) : ctx.V(_32s0, 4, (_32i0 - 0.623069) * 5.65192) : ctx.V(_32s0, 5, (_32i0 - 0.8) * 5);
        _32 = Db.nb(Bd._32[0][_32s0[0]], _32s0[1]);
        _23 = Xb._ / Xb._2;
        _33i0 = _23 < 0 ? 0 : _23 > 1 ? 1 : _23;
        ctx.V(_33s0, 0, (_33i0 - 0) * 15);
        _33 = Db.nb(Bd._33[0][_33s0[0]], _33s0[1]);
        _34i0 = _23 < 0 ? 0 : _23 > 1 ? 1 : _23;
        ctx.V(_34s0, 0, (_34i0 - 0) * 15);
        _34 = Db.nb(Bd._34[0][_34s0[0]], _34s0[1]);
        _35 = ctx.r(ctx.r(_30, ctx.X(1, _32, _33)), _34);
        _36 = ctx.j(_28, _35);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        ctx.U(Xb.Mc, _27);
        ctx.S(Xb.Nd, _36);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = 1;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._2) return true;
        return false;
      };
    }

    function Emitter_DefaultEmitter2() {
      var _1,
          _3 = [],
          _5,
          _6,
          _6i0,
          _6s0 = [],
          _7 = [],
          _7i,
          _7s = [],
          _8 = [],
          _9,
          _10,
          _10i0,
          _10s0 = [],
          _11,
          _13,
          _15 = [],
          _17 = [],
          _19,
          _21 = [],
          _22,
          _22i0,
          _22s0 = [],
          _23,
          _24,
          _24i0,
          _24s0 = [],
          _25,
          _26 = [],
          _26fs = [],
          _26vs = [],
          _26rw = [],
          _26rwn = [],
          _26rwl,
          _26v = [],
          _26p = [],
          _26dtl,
          _26dtp,
          _26df,
          _26fsd = [],
          _27 = [],
          _27x = [],
          _27y = [],
          _27z = [],
          _28 = [],
          _29,
          _30 = [],
          _30i0,
          _30s0 = [],
          _30i1,
          _30s1 = [],
          _31,
          _32,
          _32i0,
          _32s0 = [],
          _33,
          _33i0,
          _33s0 = [],
          _34,
          _34i0,
          _34s0 = [],
          _35,
          _36;

      this.pe = [{
        xe: 1,
        Rc: 1,
        Sc: 1,
        renderStyleIndex: 0
      }];
      this.name = "DefaultEmitter2";

      this.ud = function (Bd) {
        Bd.dd();
        Bd._6 = [[[0, 0.220665, 0.318587, 0.379215, 0.420794, 0.451183, 0.474816, 0.494688, 0.513163, 0.532418, 0.554793, 0.583229, 0.622079, 0.679108, 0.772734, 1, 1]]];
        Bd._7 = [[[165, -150], [210, -78], [210, -78]]];
        Bd._10 = [[[0.3, 1, 1]]];
        Bd._22 = [[[0, 0.0129444, 0.0491835, 0.104924, 0.176478, 0.260245, 0.35269, 0.450322, 0.54968, 0.647311, 0.739756, 0.823523, 0.895077, 0.950817, 0.987056, 1, 1], [1, 0.987056, 0.950816, 0.895075, 0.823522, 0.739755, 0.647311, 0.549678, 0.450321, 0.352688, 0.260244, 0.176477, 0.104924, 0.0491832, 0.0129438, 0, 0]]];
        Bd._24 = [[[0, 0.0129445, 0.0491834, 0.104923, 0.176477, 0.260245, 0.352688, 0.45032, 0.549679, 0.647311, 0.739757, 0.823523, 0.895077, 0.950817, 0.987056, 1, 1]]];
        Bd._30 = [[[1, 1.08235, 1.31293, 1.66757, 2.12282, 2.65577, 3.24394, 3.86511, 4.49725, 5.11842, 5.70659, 6.23954, 6.69479, 7.04943, 7.27999, 7.36235, 7.36235]], [[1, 1, 1]]];
        Bd._32 = [[[0, 1, 1], [1, 0.376401, 0.376401], [0.376401, 0.8, 0.8], [0.8, 0.1, 0.1], [0.1, 1, 1], [1, 0, 0]]];
        Bd._33 = [[[0, 0.34799, 0.516906, 0.631629, 0.71686, 0.782823, 0.834936, 0.876485, 0.90965, 0.935968, 0.956581, 0.972371, 0.984046, 0.992201, 0.997357, 1, 1]]];
        Bd._34 = [[[1, 0.997975, 0.991373, 0.980075, 0.96386, 0.942401, 0.91523, 0.881707, 0.840947, 0.791711, 0.7322, 0.659677, 0.569629, 0.453644, 0.292056, 0, 0]]];
        Bd.jd = 1000;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 0.3;
        vd.Gb = 1;
        vd.Jb = 500;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 0.3;
      };

      this.fd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 1 + Bd.Ld.rand() * (3 - 1);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i0 = _5 < 0 ? 0 : _5 > 1 ? 1 : _5;
        ctx.V(_6s0, 0, (_6i0 - 0) * 15);
        _6 = Db.nb(Bd._6[0][_6s0[0]], _6s0[1]);
        _7i = Db.kb(_6);
        ctx.V(_7s, 0, (_7i - 0) * 1);
        Db.lb(_7, Bd._7[_7s[0]], _7s[1]);
        ctx.W(_8, _7[0], _7[1], 0);
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10 = Db.nb(Bd._10[0][_10s0[0]], _10s0[1]);
        _11 = ctx.v(ctx.v(_8, _10), 10);
        Xb._12 = [];
        ctx.T(Xb._12, _11);
        _13 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._14 = _13;
        ctx.randv3gen(_15, 300, Bd.Ld.rand);
        Xb._16 = [];
        ctx.T(Xb._16, _15);
        ctx.randv3gen(_17, 300, Bd.Ld.rand);
        Xb._18 = [];
        ctx.T(Xb._18, _17);
        _19 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._20 = _19;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.gd = function (Bd, Xb) {
        Xb.Mc = [];
        Xb._ = 0.0;
        _1 = 1 + Bd.Ld.rand() * (3 - 1);
        Xb._2 = _1;
        ctx.W(_3, 0, 0, 0);
        Xb._4 = [];
        ctx.c(Xb._4, Bd.Ab, _3);
        _5 = 0 + Bd.Ld.rand() * (1 - 0);
        _6i0 = _5 < 0 ? 0 : _5 > 1 ? 1 : _5;
        ctx.V(_6s0, 0, (_6i0 - 0) * 15);
        _6 = Db.nb(Bd._6[0][_6s0[0]], _6s0[1]);
        _7i = Db.kb(_6);
        ctx.V(_7s, 0, (_7i - 0) * 1);
        Db.lb(_7, Bd._7[_7s[0]], _7s[1]);
        ctx.W(_8, _7[0], _7[1], 0);
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10 = Db.nb(Bd._10[0][_10s0[0]], _10s0[1]);
        _11 = ctx.v(ctx.v(_8, _10), 10);
        Xb._12 = [];
        ctx.T(Xb._12, _11);
        _13 = 1 + Bd.Ld.rand() * (4 - 1);
        Xb._14 = _13;
        ctx.randv3gen(_15, 300, Bd.Ld.rand);
        Xb._16 = [];
        ctx.T(Xb._16, _15);
        ctx.randv3gen(_17, 300, Bd.Ld.rand);
        Xb._18 = [];
        ctx.T(Xb._18, _17);
        _19 = 0 + Bd.Ld.rand() * (1 - 0);
        Xb._20 = _19;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.W(_21, 0, 150, 0);
        _22i0 = Xb._ < 0.000502169 ? 0.000502169 : Xb._ > 1 ? 0.000502169 + (Xb._ - 0.000502169) % 0.999498 : Xb._;
        _22i0 < 0.5 ? ctx.V(_22s0, 0, (_22i0 - 0.000502169) * 30.0302) : ctx.V(_22s0, 1, (_22i0 - 0.5) * 30);
        _22 = Db.nb(Bd._22[0][_22s0[0]], _22s0[1]);
        _23 = Xb._ / Xb._2;
        _24i0 = _23 < 0.000502169 ? 0.000502169 : _23 > 1 ? 1 : _23;
        ctx.V(_24s0, 0, (_24i0 - 0.000502169) * 15.0075);
        _24 = Db.nb(Bd._24[0][_24s0[0]], _24s0[1]);
        _25 = ctx.v(ctx.bb(Xb._16, Xb._18, _22), _24);
        ctx.T(_26fs, _21);
        ctx.c(_26fs, _26fs, _25);
        ctx.T(_26vs, [0, 0, 0]);
        _26dtl = Qb;
        ctx.T(_26v, Xb._12);
        ctx.T(_26p, Xb._4);

        while (_26dtl > 0.0001) {
          _26dtp = _26dtl;
          ctx.T(_26fsd, _26fs);
          ctx.g(_26rw, _26vs, _26v);
          _26rwl = ctx.P(_26rw);

          if (_26rwl > 0.0001) {
            _26rwl = Math.sqrt(_26rwl);
            ctx.w(_26rwn, _26rw, _26rwl);
            _26df = 0.01 * Xb._14 * _26rwl;
            if (_26df * _26dtp > 0.2) _26dtp = 0.2 / _26df;
            ctx.c(_26fsd, _26fsd, ctx.v(_26rwn, _26rwl * _26df));
          }

          ctx.c(_26v, _26v, ctx.v(_26fsd, _26dtp));
          ctx.c(_26p, _26p, ctx.v(_26v, _26dtp));
          _26dtl -= _26dtp;
        }

        ctx.T(Xb._4, _26p);
        ctx.T(Xb._12, _26v);
        ctx.T(Xb.Ab, Xb._4);
        ctx.Q(_27z, [0, 0, 1]);
        ctx.I(_27y, _27z, Xb._12);
        ctx.Q(_27y, _27y);
        ctx.I(_27x, _27y, _27z);
        ctx.pb(_27, _27x, _27y, _27z);
        ctx.V(_28, 3, 3);
        _29 = ctx.O(Xb._12);
        _30i0 = _29 < 0 ? 0 : _29 > 200 ? 200 : _29;
        ctx.V(_30s0, 0, (_30i0 - 0) * 0.075);
        _30i1 = _29 < 0 ? 0 : _29 > 1 ? 1 : _29;
        ctx.V(_30s1, 0, (_30i1 - 0) * 1);
        ctx.V(_30, Db.nb(Bd._30[0][_30s0[0]], _30s0[1]), Db.nb(Bd._30[1][_30s1[0]], _30s1[1]));
        _31 = Xb._ + Xb._20;
        _32i0 = _31 < 0 ? 0 : _31 > 1 ? 0 + (_31 - 0) % 1 : _31;
        _32i0 < 0.5 ? _32i0 < 0.4 ? _32i0 < 0.256169 ? ctx.V(_32s0, 0, (_32i0 - 0) * 3.90367) : ctx.V(_32s0, 1, (_32i0 - 0.256169) * 6.95262) : ctx.V(_32s0, 2, (_32i0 - 0.4) * 10) : _32i0 < 0.8 ? _32i0 < 0.623069 ? ctx.V(_32s0, 3, (_32i0 - 0.5) * 8.12552) : ctx.V(_32s0, 4, (_32i0 - 0.623069) * 5.65192) : ctx.V(_32s0, 5, (_32i0 - 0.8) * 5);
        _32 = Db.nb(Bd._32[0][_32s0[0]], _32s0[1]);
        _23 = Xb._ / Xb._2;
        _33i0 = _23 < 0 ? 0 : _23 > 1 ? 1 : _23;
        ctx.V(_33s0, 0, (_33i0 - 0) * 15);
        _33 = Db.nb(Bd._33[0][_33s0[0]], _33s0[1]);
        _34i0 = _23 < 0 ? 0 : _23 > 1 ? 1 : _23;
        ctx.V(_34s0, 0, (_34i0 - 0) * 15);
        _34 = Db.nb(Bd._34[0][_34s0[0]], _34s0[1]);
        _35 = ctx.r(ctx.r(_30, ctx.X(1, _32, _33)), _34);
        _36 = ctx.j(_28, _35);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        ctx.U(Xb.Mc, _27);
        ctx.S(Xb.Nd, _36);
        ctx.T(Xb.gf, [1, 1, 1]);
        Xb.Od = 1;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        if (Xb._ > Xb._2) return true;
        return false;
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0166667;
      Ld.Ud = 0;
      Ld.presimFrameTime = 0.1;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_DefaultEmitter());
      Ld.pd(new Emitter_DefaultEmitter1());
      Ld.pd(new Emitter_DefaultEmitter2());
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

  return Sparks_burst;
});

cc._RF.pop();