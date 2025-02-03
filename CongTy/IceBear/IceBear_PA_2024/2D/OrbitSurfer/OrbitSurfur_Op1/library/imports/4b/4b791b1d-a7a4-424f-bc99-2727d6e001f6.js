"use strict";
cc._RF.push(module, '4b791sdp6RCT7yZJyfW4AH2', 'Pink_stars');
// neutrinoparticles/exported_effects/Pink_stars.js

"use strict";

// 551728d4-de55-401b-b9c6-dd3a4d320d95
(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      (root.NeutrinoEffect = exports)['Pink_stars'] = factory();
    });
  } else {
    var namespace = root.NeutrinoEffect || (root.NeutrinoEffect = {});
    namespace.__last__ = namespace['Pink_stars'] = factory();
  }
})(typeof self !== 'undefined' ? self : void 0, function () {
  function Pink_stars(ctx) {
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

    this.textures = ['star_glow_white.png'];
    this.materials = [0];
    this.renderStyles = [{
      materialIndex: 0,
      textureIndices: [0]
    }];
    this.Xe = 100;

    function Emitter_DefaultEmitter() {
      var _2s = [[9.75862, 9.76667], [19.5172, 9.76667], [19.5172, 19.5333], [29.2759, 19.5333], [39.0345, 19.5333], [68.3103, 39.0667], [39.0345, 39.0667], [29.2759, 9.76667], [9.75862, 19.5333]],
          _1,
          _2Srch,
          _2 = [],
          _3 = [],
          _5 = [],
          _7,
          _9,
          _10 = [],
          _10i0,
          _10s0 = [],
          _10i1,
          _10s1 = [],
          _10i2,
          _10s2 = [],
          _12,
          _14,
          _16 = [],
          _17,
          _18,
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
        Bd._10 = [[[1, 1, 1]], [[1, 0, 0]], [[0.3, 0.7, 0.7]]];
        Bd._20 = [[[0, 1, 1], [1, 1, 1], [1, 0, 0]]];
        Bd.jd = 100;
        Bd.Vc = 0;
      };

      this.Mb = function (vd) {
        vd.zb = 1;
        vd.Gb = 1;
        vd.Jb = 1;
      };

      this.Pb = function (Qb, Bd, vd) {
        vd.zb = 1;
      };

      this.fd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2Srch = this._2f(_1 * 137397);
        ctx.yb(_2, -143 + _2Srch[0] % 29 * 9.75862, -148 + Math.floor(_2Srch[0] / 29) * 9.76667, _2s[_2Srch[1]], Bd.Ld.rand);
        ctx.W(_3, _2[0], _2[1], 0);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.Ab, Xb._4);
        ctx.randv3gen(_5, 10, Bd.Ld.rand);
        Xb._6 = [];
        ctx.rb(Xb._6, _5, Bd.Mc);
        ctx.c(Xb._6, Bd.ad, Xb._6);
        _7 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._8 = _7;
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10i1 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s1, 0, (_10i1 - 0) * 1);
        _10i2 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s2, 0, (_10i2 - 0) * 1);
        ctx.W(_10, Db.nb(Bd._10[0][_10s0[0]], _10s0[1]), Db.nb(Bd._10[1][_10s1[0]], _10s1[1]), Db.nb(Bd._10[2][_10s2[0]], _10s2[1]));
        Xb._11 = [];
        ctx.T(Xb._11, _10);
        _12 = 20 + Bd.Ld.rand() * (50 - 20);
        Xb._13 = _12;
        _14 = -40 + Bd.Ld.rand() * (40 - -40);
        Xb._15 = _14;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.gd = function (Bd, Xb) {
        Xb._ = 0.0;
        _1 = 0 + Bd.Ld.rand() * (1 - 0);
        _2Srch = this._2f(_1 * 137397);
        ctx.yb(_2, -143 + _2Srch[0] % 29 * 9.75862, -148 + Math.floor(_2Srch[0] / 29) * 9.76667, _2s[_2Srch[1]], Bd.Ld.rand);
        ctx.W(_3, _2[0], _2[1], 0);
        Xb._4 = [];
        ctx.rb(Xb._4, _3, Bd.Mc);
        ctx.c(Xb._4, Bd.Ab, Xb._4);
        ctx.randv3gen(_5, 10, Bd.Ld.rand);
        Xb._6 = [];
        ctx.rb(Xb._6, _5, Bd.Mc);
        ctx.c(Xb._6, Bd.ad, Xb._6);
        _7 = 0 + Bd.Ld.rand() * (360 - 0);
        Xb._8 = _7;
        _9 = 0 + Bd.Ld.rand() * (1 - 0);
        _10i0 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s0, 0, (_10i0 - 0) * 1);
        _10i1 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s1, 0, (_10i1 - 0) * 1);
        _10i2 = _9 < 0 ? 0 : _9 > 1 ? 1 : _9;
        ctx.V(_10s2, 0, (_10i2 - 0) * 1);
        ctx.W(_10, Db.nb(Bd._10[0][_10s0[0]], _10s0[1]), Db.nb(Bd._10[1][_10s1[0]], _10s1[1]), Db.nb(Bd._10[2][_10s2[0]], _10s2[1]));
        Xb._11 = [];
        ctx.T(Xb._11, _10);
        _12 = 20 + Bd.Ld.rand() * (50 - 20);
        Xb._13 = _12;
        _14 = -40 + Bd.Ld.rand() * (40 - -40);
        Xb._15 = _14;
        ctx.T(Xb.Ab, Xb._4);
      };

      this.qc = function (Qb, Bd, Xb) {
        Xb._ += Qb;
        ctx.T(_16, Xb._6);
        ctx.u(_16, _16, Qb);
        ctx.c(_16, _16, Xb._4);
        ctx.T(Xb._4, _16);
        _17 = Xb._8 + Qb * Xb._15;
        Xb._8 = _17;
        ctx.T(Xb.Ab, Xb._4);
        _18 = 5;
        _19 = Xb._ / _18;
        _20i0 = _19 < 0 ? 0 : _19 > 1 ? 1 : _19;
        _20i0 < 0.6 ? _20i0 < 0.3 ? ctx.V(_20s0, 0, (_20i0 - 0) * 3.33333) : ctx.V(_20s0, 1, (_20i0 - 0.3) * 3.33333) : ctx.V(_20s0, 2, (_20i0 - 0.6) * 2.5);
        _20 = Db.nb(Bd._20[0][_20s0[0]], _20s0[1]);
        ctx.S(Xb.Pd, [0.5, 0.5]);
        Xb.Md = Xb._8;
        ctx.V(Xb.Nd, Xb._13, Xb._13);
        ctx.T(Xb.gf, Xb._11);
        Xb.Od = _20;
        Xb.Qc = 0;
      };

      this.Cc = function (Bd, Xb, Wc) {
        _18 = 5;
        if (Xb._ > _18) return true;
        return false;
      };

      this._2f = function (i) {
        return i < 59943 ? i < 35228 ? i < 10991 ? i < 3045 ? i < 4 ? [94, 0] : i < 219 ? i < 28 ? [177, 0] : i < 41 ? [205, 0] : [206, 0] : i < 1086 ? i < 359 ? i < 229 ? [149, 0] : [150, 0] : i < 585 ? i < 410 ? [122, 0] : [123, 0] : i < 831 ? [151, 0] : [152, 0] : i < 2027 ? i < 1518 ? i < 1264 ? [178, 0] : [179, 0] : i < 1772 ? [207, 0] : [208, 0] : i < 2537 ? [180, 1] : [209, 1] : i < 3871 ? i < 3451 ? i < 3176 ? i < 3086 ? [95, 0] : [96, 0] : i < 3304 ? [97, 0] : [98, 0] : i < 3741 ? i < 3599 ? [99, 0] : [100, 0] : [101, 0] : i < 7932 ? i < 5895 ? i < 4875 ? i < 4365 ? i < 4111 ? [124, 0] : [125, 0] : [153, 1] : [126, 2] : i < 6913 ? i < 6405 ? [182, 1] : [211, 1] : i < 7423 ? [184, 1] : i < 7677 ? [213, 0] : [214, 0] : i < 9462 ? [128, 3] : i < 10481 ? i < 9972 ? [186, 1] : i < 10227 ? [215, 0] : [216, 0] : [188, 8] : i < 22764 ? i < 15644 ? i < 13197 ? i < 11862 ? i < 11011 ? [262, 0] : i < 11376 ? i < 11124 ? [234, 0] : [235, 0] : i < 11608 ? [263, 0] : [264, 0] : i < 12178 ? i < 11975 ? [291, 0] : i < 11981 ? [319, 0] : [320, 0] : i < 12688 ? [292, 1] : i < 12942 ? [321, 0] : [322, 0] : i < 14119 ? i < 13781 ? i < 13468 ? i < 13230 ? [348, 0] : [349, 0] : i < 13528 ? [377, 0] : [378, 0] : i < 13865 ? [406, 0] : [407, 0] : i < 15136 ? i < 14627 ? [350, 1] : i < 14881 ? [379, 0] : [380, 0] : [408, 1] : i < 19714 ? i < 17677 ? i < 16660 ? [236, 2] : i < 17168 ? [238, 1] : i < 17422 ? [267, 0] : [268, 0] : i < 18695 ? i < 18187 ? [294, 1] : [323, 1] : i < 19205 ? [296, 1] : i < 19459 ? [325, 0] : [326, 0] : i < 21239 ? i < 20731 ? i < 20222 ? [352, 1] : i < 20476 ? [381, 0] : [382, 0] : [410, 1] : i < 22256 ? i < 21747 ? [354, 1] : i < 22001 ? [383, 0] : [384, 0] : [412, 1] : i < 29889 ? i < 26835 ? i < 24796 ? [240, 4] : i < 25816 ? [298, 2] : i < 26326 ? [300, 1] : i < 26580 ? [329, 0] : [330, 0] : i < 28360 ? i < 27851 ? [244, 2] : i < 28105 ? [246, 0] : [275, 0] : i < 29379 ? i < 28870 ? [302, 1] : i < 29125 ? [331, 0] : [332, 0] : [304, 8] : i < 32940 ? i < 31415 ? i < 30907 ? i < 30397 ? [356, 1] : [385, 1] : [414, 1] : i < 32432 ? i < 31923 ? [358, 1] : i < 32177 ? [387, 0] : [388, 0] : [416, 1] : i < 34466 ? i < 33957 ? i < 33448 ? [360, 1] : i < 33703 ? [389, 0] : [390, 0] : i < 34211 ? [362, 0] : [391, 0] : [418, 7] : i < 41634 ? i < 41292 ? i < 35400 ? i < 35384 ? i < 35328 ? [102, 0] : [103, 0] : [104, 0] : i < 39320 ? i < 37283 ? i < 36414 ? i < 35904 ? i < 35655 ? [131, 0] : [132, 0] : [160, 1] : i < 36773 ? i < 36632 ? [133, 0] : [134, 0] : [162, 1] : i < 38301 ? i < 37793 ? [189, 1] : [218, 1] : i < 38811 ? [191, 1] : i < 39066 ? [220, 0] : [221, 0] : i < 39799 ? i < 39763 ? i < 39361 ? i < 39360 ? [135, 0] : [136, 0] : i < 39606 ? [164, 0] : [165, 0] : [166, 0] : i < 40817 ? i < 40308 ? i < 40054 ? [193, 0] : [194, 0] : i < 40563 ? [222, 0] : [223, 0] : i < 41038 ? [195, 0] : [224, 0] : i < 41357 ? [196, 0] : i < 41586 ? [225, 0] : [226, 0] : i < 54097 ? i < 48758 ? i < 45703 ? i < 43667 ? i < 42650 ? [247, 2] : i < 43158 ? [249, 1] : i < 43413 ? [278, 0] : [279, 0] : i < 44685 ? i < 44177 ? [305, 1] : [334, 1] : i < 45195 ? [307, 1] : [336, 1] : i < 47228 ? i < 46720 ? i < 46211 ? [251, 1] : i < 46466 ? [280, 0] : [281, 0] : [253, 8] : [309, 3] : i < 51808 ? i < 50283 ? i < 49775 ? i < 49266 ? [363, 1] : i < 49520 ? [392, 0] : [393, 0] : [421, 1] : i < 51300 ? i < 50791 ? [365, 1] : i < 51046 ? [394, 0] : [395, 0] : [423, 1] : i < 53335 ? i < 52826 ? i < 52316 ? [367, 1] : [396, 1] : i < 53080 ? [369, 0] : [398, 0] : [425, 7] : i < 56889 ? i < 55222 ? i < 55070 ? i < 54562 ? i < 54351 ? [254, 0] : [255, 0] : [283, 1] : i < 55084 ? [256, 0] : i < 55221 ? [285, 0] : [286, 0] : i < 56240 ? i < 55732 ? [312, 1] : [341, 1] : i < 56513 ? i < 56475 ? [314, 0] : [315, 0] : i < 56767 ? [343, 0] : [344, 0] : i < 59874 ? i < 58414 ? i < 57906 ? i < 57397 ? [370, 1] : i < 57651 ? [399, 0] : [400, 0] : [428, 1] : i < 59369 ? i < 58870 ? i < 58668 ? [372, 0] : [373, 0] : i < 59125 ? [401, 0] : [402, 0] : i < 59623 ? [430, 0] : [431, 0] : i < 59894 ? i < 59875 ? [374, 0] : [403, 0] : [432, 0] : i < 103724 ? i < 88289 ? i < 74059 ? i < 67359 ? i < 63295 ? i < 61649 ? i < 60633 ? i < 60287 ? i < 60033 ? [435, 0] : [436, 0] : i < 60379 ? [464, 0] : [465, 0] : [437, 2] : i < 62279 ? i < 61984 ? i < 61730 ? [493, 0] : [494, 0] : i < 62026 ? [522, 0] : [523, 0] : [495, 2] : [439, 6] : i < 69995 ? i < 68816 ? i < 67800 ? i < 67605 ? i < 67367 ? [551, 0] : [552, 0] : [581, 0] : [553, 2] : i < 68992 ? i < 68943 ? [610, 0] : [639, 0] : i < 69500 ? [611, 1] : i < 69741 ? [640, 0] : [641, 0] : [555, 6] : i < 81172 ? i < 78123 ? [443, 6] : i < 79647 ? [447, 3] : i < 80663 ? [505, 2] : i < 80917 ? [507, 0] : [536, 0] : i < 85238 ? i < 83205 ? i < 82189 ? i < 81680 ? [559, 1] : i < 81934 ? [588, 0] : [589, 0] : [561, 2] : i < 84222 ? i < 83713 ? [617, 1] : i < 83967 ? [646, 0] : [647, 0] : [619, 2] : i < 86763 ? i < 86254 ? [563, 2] : i < 86508 ? [565, 0] : [594, 0] : i < 87780 ? i < 87271 ? [621, 1] : i < 87526 ? [650, 0] : [651, 0] : i < 88034 ? [623, 0] : [652, 0] : i < 93176 ? i < 88976 ? i < 88936 ? i < 88292 ? [668, 0] : i < 88701 ? i < 88447 ? [669, 0] : [670, 0] : i < 88725 ? [698, 0] : [699, 0] : [728, 0] : i < 92754 ? i < 91010 ? i < 89993 ? i < 89484 ? [671, 1] : i < 89738 ? [700, 0] : [701, 0] : i < 90501 ? [673, 1] : i < 90755 ? [702, 0] : [703, 0] : i < 91737 ? i < 91490 ? i < 91236 ? [729, 0] : [730, 0] : i < 91532 ? [758, 0] : [759, 0] : i < 92245 ? [731, 1] : i < 92499 ? [760, 0] : [761, 0] : i < 92778 ? [788, 0] : i < 93149 ? i < 92917 ? [789, 0] : [790, 0] : i < 93150 ? [818, 0] : [819, 0] : i < 100296 ? i < 97244 ? i < 95210 ? i < 94193 ? i < 93684 ? [675, 1] : i < 93938 ? [704, 0] : [705, 0] : i < 94701 ? [677, 1] : i < 94955 ? [706, 0] : [707, 0] : i < 96227 ? i < 95718 ? [733, 1] : i < 95972 ? [762, 0] : [763, 0] : i < 96735 ? [735, 1] : i < 96989 ? [764, 0] : [765, 0] : i < 98770 ? i < 98261 ? i < 97752 ? [679, 1] : i < 98007 ? [708, 0] : [709, 0] : i < 98515 ? [681, 0] : [710, 0] : i < 99787 ? i < 99278 ? [737, 1] : i < 99533 ? [766, 0] : [767, 0] : i < 100041 ? [739, 0] : [768, 0] : i < 102058 ? i < 101070 ? i < 100804 ? [791, 1] : i < 100901 ? [820, 0] : [821, 0] : i < 102029 ? i < 101578 ? [793, 1] : i < 101790 ? [822, 0] : [823, 0] : i < 102037 ? [851, 0] : [852, 0] : i < 103579 ? i < 103073 ? i < 102566 ? [795, 1] : i < 102819 ? [824, 0] : [825, 0] : i < 103327 ? [797, 0] : [826, 0] : i < 103669 ? i < 103617 ? [853, 0] : [854, 0] : [855, 0] : i < 126103 ? i < 117950 ? i < 110836 ? [450, 5] : i < 114901 ? i < 112869 ? i < 111852 ? [566, 2] : i < 112360 ? [568, 1] : i < 112615 ? [597, 0] : [598, 0] : [624, 4] : i < 116425 ? [570, 3] : i < 117441 ? [628, 2] : i < 117695 ? [630, 0] : [659, 0] : i < 122300 ? i < 122012 ? i < 119981 ? i < 118966 ? [457, 2] : i < 119473 ? i < 119220 ? [459, 0] : [460, 0] : [488, 1] : i < 120997 ? [515, 2] : i < 121505 ? [517, 1] : i < 121759 ? [546, 0] : [547, 0] : i < 122156 ? i < 122080 ? [461, 0] : [490, 0] : i < 122232 ? [519, 0] : [548, 0] : i < 126038 ? i < 124294 ? i < 123316 ? [573, 2] : i < 123816 ? i < 123570 ? [575, 0] : [576, 0] : i < 124070 ? [604, 0] : [605, 0] : i < 125310 ? [631, 2] : i < 125725 ? i < 125564 ? [633, 0] : [634, 0] : i < 125977 ? [662, 0] : [663, 0] : i < 126087 ? [577, 0] : [606, 0] : i < 135773 ? i < 133203 ? i < 130171 ? i < 128137 ? i < 127120 ? i < 126611 ? [682, 1] : i < 126865 ? [711, 0] : [712, 0] : i < 127628 ? [684, 1] : i < 127883 ? [713, 0] : [714, 0] : i < 129154 ? i < 128645 ? [740, 1] : i < 128899 ? [769, 0] : [770, 0] : i < 129662 ? [742, 1] : i < 129917 ? [771, 0] : [772, 0] : i < 131696 ? i < 131187 ? [686, 2] : i < 131441 ? [688, 0] : [717, 0] : i < 132713 ? i < 132204 ? [744, 1] : i < 132459 ? [773, 0] : [774, 0] : i < 132967 ? [746, 0] : [775, 0] : i < 135188 ? i < 134281 ? i < 134213 ? i < 133711 ? [798, 1] : i < 133964 ? [827, 0] : [828, 0] : i < 134258 ? [856, 0] : [857, 0] : i < 135179 ? i < 134789 ? [800, 1] : i < 135010 ? [829, 0] : [830, 0] : i < 135187 ? [858, 0] : [859, 0] : i < 135728 ? i < 135630 ? i < 135439 ? [802, 0] : [803, 0] : i < 135716 ? [831, 0] : [832, 0] : [804, 0] : i < 137000 ? i < 136766 ? i < 136281 ? [689, 1] : i < 136535 ? [718, 0] : [719, 0] : i < 136950 ? i < 136946 ? [691, 0] : [692, 0] : [720, 0] : i < 137323 ? i < 137243 ? [747, 0] : [748, 0] : [776, 0];
      };
    }

    this.qd = function (Ld) {
      Ld.Dd = 0.0333333;
      Ld.Ud = 5;

      Ld.rand = function () {
        return Math.random();
      };

      Ld.pd(new Emitter_DefaultEmitter());
    };

    this.nb = function (funcValues, je) {
      var indexInt = Math.floor(je);
      var nextInt = indexInt + 1;
      return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt);
    };
  }

  return Pink_stars;
});

cc._RF.pop();