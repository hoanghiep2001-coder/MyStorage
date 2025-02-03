
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/neutrinoparticles-runtime/neutrinoparticles.js/neutrinoparticles.umd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab558HOKv9Bq5K2NwBWDZL+', 'neutrinoparticles.umd');
// neutrinoparticles.js/neutrinoparticles.umd.js

"use strict";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.Neutrino = {}));
})(void 0, function (exports) {
  'use strict';

  function Context() {
    var ctx = this;

    this.equalv3_ = function (a, b) {
      return a[0] == b[0] && a[1] == b[1] && a[2] == b[2];
    };

    this.equalq_ = function (a, b) {
      return a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3];
    };

    this.a = function (r, a, b) {
      r[0] = a[0] + b[0];
      r[1] = a[1] + b[1];
    };

    this.b = function (a, b) {
      return [a[0] + b[0], a[1] + b[1]];
    };

    this.y = function (r, a, s) {
      r[0] = a[0] + s;
      r[1] = a[1] + s;
    };

    this.z = function (a, s) {
      return [a[0] + s, a[1] + s];
    };

    this.c = function (r, a, b) {
      r[0] = a[0] + b[0];
      r[1] = a[1] + b[1];
      r[2] = a[2] + b[2];
    };

    this.d = function (a, b) {
      return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
    };

    this.C = function (r, a, s) {
      r[0] = a[0] + s;
      r[1] = a[1] + s;
      r[2] = a[2] + s;
    };

    this.D = function (a, s) {
      return [a[0] + s, a[1] + s, a[2] + s];
    };

    this.addq = function (r, a, b) {
      r[0] = a[0] + b[0];
      r[1] = a[1] + b[1];
      r[2] = a[2] + b[2];
      r[3] = a[3] + b[3];
    };

    this.addq_ = function (a, b) {
      return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
    };

    this.e = function (r, a, b) {
      r[0] = a[0] - b[0];
      r[1] = a[1] - b[1];
    };

    this.f = function (a, b) {
      return [a[0] - b[0], a[1] - b[1]];
    };

    this.A = function (r, a, s) {
      r[0] = a[0] - s;
      r[1] = a[1] - s;
    };

    this.B = function (a, s) {
      return [a[0] - s, a[1] - s];
    };

    this.nf = function (r, s, a) {
      r[0] = s - a[0];
      r[1] = s - a[1];
    };

    this.of = function (s, a) {
      return [s - a[0], s - a[1]];
    };

    this.g = function (r, a, b) {
      r[0] = a[0] - b[0];
      r[1] = a[1] - b[1];
      r[2] = a[2] - b[2];
    };

    this.h = function (a, b) {
      return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
    };

    this.E = function (r, a, s) {
      r[0] = a[0] - s;
      r[1] = a[1] - s;
      r[2] = a[2] - s;
    };

    this.F = function (a, s) {
      return [a[0] - s, a[1] - s, a[2] - s];
    };

    this.rf = function (r, s, a) {
      r[0] = s - a[0];
      r[1] = s - a[1];
      r[2] = s - a[2];
    };

    this.sf = function (s, a) {
      return [s - a[0], s - a[1], s - a[2]];
    };

    this.i = function (r, a, b) {
      r[0] = a[0] * b[0];
      r[1] = a[1] * b[1];
    };

    this.j = function (a, b) {
      return [a[0] * b[0], a[1] * b[1]];
    };

    this.k = function (r, a, b) {
      r[0] = a[0] * b[0];
      r[1] = a[1] * b[1];
      r[2] = a[2] * b[2];
    };

    this.l = function (a, b) {
      return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
    };

    this.m = function (r, a, b) {
      r[0] = a[0] / b[0];
      r[1] = a[1] / b[1];
    };

    this.n = function (a, b) {
      return [a[0] / b[0], a[1] / b[1]];
    };

    this.o = function (r, a, b) {
      r[0] = a[0] / b[0];
      r[1] = a[1] / b[1];
      r[2] = a[2] / b[2];
    };

    this.p = function (a, b) {
      return [a[0] / b[0], a[1] / b[1], a[2] / b[2]];
    };

    this.H = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    };

    this.dotq_ = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    };

    this.q = function (r, a, s) {
      r[0] = a[0] * s;
      r[1] = a[1] * s;
    };

    this.r = function (a, s) {
      return [a[0] * s, a[1] * s];
    };

    this.s = function (r, a, s) {
      r[0] = a[0] / s;
      r[1] = a[1] / s;
    };

    this.t = function (a, s) {
      return [a[0] / s, a[1] / s];
    };

    this.u = function (r, a, s) {
      r[0] = a[0] * s;
      r[1] = a[1] * s;
      r[2] = a[2] * s;
    };

    this.v = function (a, s) {
      return [a[0] * s, a[1] * s, a[2] * s];
    };

    this.w = function (r, a, s) {
      r[0] = a[0] / s;
      r[1] = a[1] / s;
      r[2] = a[2] / s;
    };

    this.x = function (a, s) {
      return [a[0] / s, a[1] / s, a[2] / s];
    };

    this.y = function (r, a, s) {
      r[0] = a[0] + s;
      r[1] = a[1] + s;
    };

    this.z = function (a, s) {
      return [a[0] + s, a[1] + s];
    };

    this.A = function (r, a, s) {
      r[0] = a[0] - s;
      r[1] = a[1] - s;
    };

    this.B = function (a, s) {
      return [a[0] - s, a[1] - s];
    };

    this.G = function (a, b) {
      return a[0] * b[0] + a[1] * b[1];
    };

    this.H = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    };

    this.I = function (r, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];
      r[0] = ay * bz - az * by;
      r[1] = az * bx - ax * bz;
      r[2] = ax * by - ay * bx;
    };

    this.J = function (a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];
      return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx];
    };

    this.K = function (a) {
      return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
    };

    this.L = function (a) {
      return a[0] * a[0] + a[1] * a[1];
    };

    this.M = function (r, a) {
      ctx.q(r, a, 1.0 / ctx.K(a));
    };

    this.N = function (a) {
      return ctx.r(a, 1.0 / ctx.K(a));
    };

    this.O = function (a) {
      return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
    };

    this.P = function (a) {
      return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    };

    this.Q = function (r, a) {
      ctx.u(r, a, 1.0 / ctx.O(a));
    };

    this.R = function (a) {
      return ctx.v(a, 1.0 / ctx.O(a));
    };

    this.S = function (r, a) {
      r[0] = a[0];
      r[1] = a[1];
    };

    this.T = function (r, a) {
      r[0] = a[0];
      r[1] = a[1];
      r[2] = a[2];
    };

    this.U = function (r, a) {
      r[0] = a[0];
      r[1] = a[1];
      r[2] = a[2];
      r[3] = a[3];
    };

    this.V = function (r, x, y) {
      r[0] = x;
      r[1] = y;
    };

    this.W = function (r, x, y, z) {
      r[0] = x;
      r[1] = y;
      r[2] = z;
    };

    this.X = function (a, b, i) {
      return a + (b - a) * i;
    };

    this.Y = function (r, a, b, i) {
      r[0] = a[0] + (b[0] - a[0]) * i;
      r[1] = a[1] + (b[1] - a[1]) * i;
    };

    this.Z = function (a, b, i) {
      return [a[0] + (b[0] - a[0]) * i, a[1] + (b[1] - a[1]) * i];
    };

    this.ab = function (r, a, b, i) {
      r[0] = a[0] + (b[0] - a[0]) * i;
      r[1] = a[1] + (b[1] - a[1]) * i;
      r[2] = a[2] + (b[2] - a[2]) * i;
    };

    this.bb = function (a, b, i) {
      return [a[0] + (b[0] - a[0]) * i, a[1] + (b[1] - a[1]) * i, a[2] + (b[2] - a[2]) * i];
    };

    this.slerpq = function (r, x, y, a) {
      var cosTheta = ctx.dotq_(x, y);
      var z = [];

      if (cosTheta < 0) {
        ctx.negq(z, y);
        cosTheta = -cosTheta;
      } else {
        ctx.U(z, y);
      }

      if (1.0 - cosTheta < Number.EPSILON) {
        r[0] = ctx.X(x[0], y[0], a);
        r[1] = ctx.X(x[1], y[1], a);
        r[2] = ctx.X(x[2], y[2], a);
        r[3] = ctx.X(x[3], y[3], a);
      } else {
        var Md = ctx.acos_(cosTheta);
        ctx.mulqscalar(r, ctx.addq_(ctx.mulqscalar_(x, ctx.sin_((1.0 - a) * Md)), ctx.mulqscalar_(z, ctx.sin_(a * Md))), 1.0 / ctx.sin_(Md));
      }
    };

    this.slerpq_ = function (x, y, a) {
      var r = [];
      slerpq(r, x, y, a);
      return r;
    }; //trigonometry


    this.acos_ = function (a) {
      return Math.acos(a);
    };

    this.sin_ = function (a) {
      return Math.sin(a);
    };

    this.cos_ = function (a) {
      return Math.cos(a);
    }; // random


    this.taus88 = function (seed) {
      if (!seed) seed = 0;
      var value0, value1, value2;

      this.seed = function (s0) {
        s0 &= 0xFFFFFFFF;
        value0 = s0 < 2 ? s0 + 2 : s0;
        value1 = s0 < 8 ? s0 + 8 : s0;
        value2 = s0 < 16 ? s0 + 16 : s0;
      };

      this.rand = function () {
        var b = ((value0 << 13 ^ value0) & 0xFFFFFFFF) >>> 19;
        value0 = ((value0 & 0xFFFFFFFE) << 12 ^ b) >>> 0;
        b = ((value1 << 2 ^ value1) & 0xFFFFFFFF) >>> 25;
        value1 = ((value1 & 0xFFFFFFF8) << 4 ^ b) >>> 0;
        b = ((value2 << 3 ^ value2) & 0xFFFFFFFF) >>> 11;
        value2 = ((value2 & 0xFFFFFFF0) << 17 ^ b) >>> 0;
        var engine = (value0 ^ value1 ^ value2) >>> 0;
        return engine / 4294967296.0;
      };

      this.seed(seed);
    };

    this.cb = function (r, radius) {
      this.randv2gen(r, radius, function () {
        return Math.random();
      });
    };

    this.randv2gen = function (r, radius, gen) {
      var Md = gen() * Math.PI * 2.0;
      r[0] = radius * ctx.cos_(Md);
      r[1] = radius * ctx.sin_(Md);
    };

    this.db = function (r, radius) {
      this.randv3gen(r, radius, function () {
        return Math.random();
      });
    };

    this.randv3gen = function (r, radius, gen) {
      var theta = gen() * Math.PI * 2.0;
      var z = -1.0 + gen() * 2.0;
      var sqrtInvZ2 = radius * Math.sqrt(1.0 - z * z);
      r[0] = sqrtInvZ2 * ctx.cos_(theta);
      r[1] = sqrtInvZ2 * ctx.sin_(theta);
      r[2] = radius * z;
    };

    this.yb = function (r, x, y, Nd, gen) {
      var dispx = x + gen() * Nd[0];
      var dispy = y + gen() * Nd[1];
      ctx.V(r, dispx, dispy);
    };

    this.eb = function (r, a) {
      ctx.V(-a[0], -a[1]);
    };

    this.fb = function (a) {
      return [-a[0], -a[1]];
    };

    this.gb = function (r, a) {
      ctx.W(-a[0], -a[1], -a[2]);
    };

    this.hb = function (a) {
      return [-a[0], -a[1], -a[2]];
    };

    this.negq = function (r, a) {
      r[0] = -a[0];
      r[1] = -a[1];
      r[2] = -a[2];
      r[3] = -a[3];
    };

    this.negq_ = function (a) {
      return [-a[0], -a[1], -a[2], -a[3]];
    };

    this.ib = function (degrees) {
      return degrees / 180.0 * Math.PI;
    };

    this.jb = function (radians) {
      return radians / Math.PI * 180.0;
    };

    this.Ae = function (value) {
      return value < 0 ? -1 : 1;
    };

    this.ob = function (x, y, z, q) {
      var x2 = 2.0 * q[0] * q[0];
      var y2 = 2.0 * q[1] * q[1];
      var z2 = 2.0 * q[2] * q[2];
      var xy = 2.0 * q[0] * q[1];
      var xz = 2.0 * q[0] * q[2];
      var yz = 2.0 * q[1] * q[2];
      var wz = 2.0 * q[3] * q[2];
      var wy = 2.0 * q[3] * q[1];
      var wx = 2.0 * q[3] * q[0];
      x[0] = 1.0 - y2 - z2;
      x[1] = xy + wz;
      x[2] = xz - wy;
      y[0] = xy - wz;
      y[1] = 1.0 - x2 - z2;
      y[2] = yz + wx;
      z[0] = xz + wy;
      z[1] = yz - wx;
      z[2] = 1.0 - x2 - y2;
    };

    this.pb = function (q, x, y, z) {
      var tr = x[0] + y[1] + z[2];

      if (tr > 0) {
        var S = Math.sqrt(tr + 1.0) * 2;
        q[3] = 0.25 * S;
        q[0] = (y[2] - z[1]) / S;
        q[1] = (z[0] - x[2]) / S;
        q[2] = (x[1] - y[0]) / S;
      } else if (x[0] > y[1] & x[0] > z[2]) {
        var S = Math.sqrt(1.0 + x[0] - y[1] - z[2]) * 2;
        q[3] = (y[2] - z[1]) / S;
        q[0] = 0.25 * S;
        q[1] = (x[1] + y[0]) / S;
        q[2] = (z[0] + x[2]) / S;
      } else if (y[1] > z[2]) {
        var S = Math.sqrt(1.0 + y[1] - x[0] - z[2]) * 2;
        q[3] = (z[0] - x[2]) / S;
        q[0] = (x[1] + y[0]) / S;
        q[1] = 0.25 * S;
        q[2] = (y[2] + z[1]) / S;
      } else {
        var S = Math.sqrt(1.0 + z[2] - x[0] - y[1]) * 2;
        q[3] = (x[1] - y[0]) / S;
        q[0] = (z[0] + x[2]) / S;
        q[1] = (y[2] + z[1]) / S;
        q[2] = 0.25 * S;
      }
    };

    this.
    /**/
    axes2quat = this.pb;

    this.qb = function (q, x, a) {
      var ha = ctx.ib(a) * 0.5,
          s = Math.sin(ha);
      q[0] = x[0] * s;
      q[1] = x[1] * s;
      q[2] = x[2] * s;
      q[3] = Math.cos(ha);
    };

    this.
    /**/
    axisangle2quat = this.qb;

    this.axisangle2quat_ = function (x, a) {
      var ha = ctx.ib(a) * 0.5,
          s = Math.sin(ha);
      return [x[0] * s, x[1] * s, x[2] * s, ctx.cos_(ha)];
    };

    this.
    /**/
    axisangle2quat_ = this.axisangle2quat_;

    this.rb = function (r, v, q) {
      var x = v[0];
      var y = v[1];
      var z = v[2];
      var qx = q[0];
      var qy = q[1];
      var qz = q[2];
      var qw = q[3];
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;
      r[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      r[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      r[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    };

    this.sb = function (r, a, b) {
      var qax = a[0],
          qay = a[1],
          qaz = a[2],
          qaw = a[3];
      var qbx = b[0],
          qby = b[1],
          qbz = b[2],
          qbw = b[3];
      r[0] = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      r[1] = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      r[2] = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      r[3] = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    };

    this.mulqscalar = function (r, a, s) {
      r[0] = a[0] * s;
      r[1] = a[1] * s;
      r[2] = a[2] * s;
      r[3] = a[3] * s;
    };

    this.mulqscalar_ = function (a, s) {
      return [a[0] * s, a[1] * s, a[2] * s, a[3] * s];
    };

    this.tb = function (r, Hf, degree, scale, v) {
      var rad = ctx.ib(degree);
      var cos = Math.cos(rad) * scale;
      var sin = Math.sin(rad) * scale;
      r[0] = Hf[0] + cos * v[0] - sin * v[1];
      r[1] = Hf[1] + sin * v[0] + cos * v[1];
    };

    this.ub = function (r, Hf, degree, scale, v) {
      var rad = ctx.ib(degree);
      var cos = Math.cos(rad) / scale;
      var sin = Math.sin(rad) / scale;
      r[0] = cos * v[0] + sin * v[1] - Hf[0] * cos - Hf[1] * sin;
      r[1] = cos * v[1] - sin * v[0] + Hf[0] * sin - Hf[1] * cos;
    };

    this.vb = function (val) {
      if (val < 0) return Math.floor(ctx.yd - 1 + val % ctx.yd);else return Math.floor(val % ctx.yd);
    };

    function colorCompToHex_(c) {
      return c < 16 ? "0" + c.toString(16) : c.toString(16);
    }

    this.ff = function (rgb) {
      return "#" + colorCompToHex_(Math.floor(rgb[0] * 255)) + colorCompToHex_(Math.floor(rgb[1] * 255)) + colorCompToHex_(Math.floor(rgb[2] * 255));
    };

    this.tf = function (vf, xf, yf, a, b, zf) {
      var ca = ctx.f(a, vf);
      var cb = ctx.f(b, vf);
      var wf = ctx.r(xf, yf);

      if (ca[0] < -wf[0] && cb[0] < -wf[0] || ca[0] > wf[0] && cb[0] > wf[0] || ca[1] < -wf[1] && cb[1] < -wf[1] || ca[1] > wf[1] && cb[1] > wf[1]) {
        return false;
      }

      if (ca[0] <= wf[0] && ca[0] >= -wf[0] && ca[1] <= wf[1] && ca[1] >= -wf[1]) return true;
      if (zf < 0.000001) return false;
      if (cb[0] <= wf[0] && cb[0] >= -wf[0] && cb[1] <= wf[1] && cb[1] >= -wf[1]) return true;
      var Af = ctx.f(b, a);
      ctx.s(Af, Af, zf);
      var Bf = [-Af[1], Af[0]];
      var Cf = Math.abs(ctx.G(Bf, cb));

      if (Math.abs(ctx.G(Bf, wf)) >= Cf) {
        var Df = [-xf[1], xf[0]];

        if (ctx.G(Df, ca) * ctx.G(Df, cb) <= 0.0) {
          return true;
        }
      } else if (Math.abs(ctx.G(Bf, [wf[0], -wf[1]])) >= Cf) {
        var _Df = [xf[1], xf[0]];

        if (ctx.G(_Df, ca) * ctx.G(_Df, cb) <= 0.0) {
          return true;
        }
      }

      return false;
    };

    this.uf = function (vf, xf, yf, a, b, zf, Ef) {
      var ca = ctx.f(a, vf);
      var cb = ctx.f(b, vf);
      var wf = ctx.r(xf, yf);
      if (zf < 0.000001) return false;

      if (ca[0] < -wf[0] && cb[0] < -wf[0] || ca[0] > wf[0] && cb[0] > wf[0] || ca[1] < -wf[1] && cb[1] < -wf[1] || ca[1] > wf[1] && cb[1] > wf[1]) {
        return false;
      }

      var Af = ctx.f(b, a);
      ctx.s(Af, Af, zf);
      var Bf = [-Af[1], Af[0]];
      var Cf = Math.abs(ctx.G(Bf, cb));

      if (Ef) {
        if (Math.abs(ctx.G(Bf, wf)) >= Cf) {
          var Df = [-xf[1], xf[0]];

          if (ctx.G(Df, ca) * ctx.G(Df, cb) <= 0.0) {
            return true;
          }
        }
      } else {
        if (Math.abs(ctx.G(Bf, [wf[0], -wf[1]])) >= Cf) {
          var _Df2 = [xf[1], xf[0]];

          if (ctx.G(_Df2, ca) * ctx.G(_Df2, cb) <= 0.0) {
            return true;
          }
        }
      }

      return false;
    };

    this.wb = function (r, x, y, z) {
      var rgbDisp = 3 * (y * ctx.yd + x);
      var view = ctx.zd[z];
      r[0] = view.getUint8(rgbDisp);
      r[1] = view.getUint8(rgbDisp + 1);
      r[2] = view.getUint8(rgbDisp + 2);
    };

    this.xb = function (r, Hf) {
      if (ctx.zd == null) {
        ctx.W(r, 128, 128, 128);
        return;
      }

      var scaledPosX = Hf[0] * ctx.yd;
      var scaledPosY = Hf[1] * ctx.yd;
      var scaledPosZ = Hf[2] * ctx.yd;
      var floorX = Math.floor(scaledPosX);
      var floorY = Math.floor(scaledPosY);
      var floorZ = Math.floor(scaledPosZ);
      var fracX = scaledPosX - floorX;
      var fracY = scaledPosY - floorY;
      var fracZ = scaledPosZ - floorZ;
      var noiseX = ctx.vb(floorX);
      var noiseX1 = ctx.vb(floorX + 1);
      var noiseY = ctx.vb(floorY);
      var noiseY1 = ctx.vb(floorY + 1);
      var noiseZ = ctx.vb(floorZ);
      var noiseZ1 = ctx.vb(floorZ + 1);
      var value000 = [],
          value001 = [],
          value010 = [],
          value011 = [],
          value100 = [],
          value101 = [],
          value110 = [],
          value111 = [];
      ctx.wb(value000, noiseX, noiseY, noiseZ);
      ctx.wb(value001, noiseX, noiseY, noiseZ1);
      ctx.wb(value010, noiseX, noiseY1, noiseZ);
      ctx.wb(value011, noiseX, noiseY1, noiseZ1);
      ctx.wb(value100, noiseX1, noiseY, noiseZ);
      ctx.wb(value101, noiseX1, noiseY, noiseZ1);
      ctx.wb(value110, noiseX1, noiseY1, noiseZ);
      ctx.wb(value111, noiseX1, noiseY1, noiseZ1);
      var value00 = [],
          value01 = [],
          value10 = [],
          value11 = [];
      ctx.ab(value00, value000, value001, fracZ);
      ctx.ab(value01, value010, value011, fracZ);
      ctx.ab(value10, value100, value101, fracZ);
      ctx.ab(value11, value110, value111, fracZ);
      var value0 = [],
          value1 = [];
      ctx.ab(value0, value00, value01, fracY);
      ctx.ab(value1, value10, value11, fracY);
      ctx.ab(r, value0, value1, fracX);
    };

    this.ImageDesc = function (image, x, y, width, height) {
      this.image = image;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    };

    this.RenderCall = function (startIndex, numIndices, renderStyleIndex) {
      this.startIndex = startIndex;
      this.numIndices = numIndices;
      this.renderStyleIndex = renderStyleIndex;
    };

    this.SubRect = function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    };

    this.Camera2D = function () {};

    this.Camera2D.prototype.tb = function (Hf, Nd) {
      return true;
    };

    this.Camera3D = function (
    /**/
    screenSize,
    /**/
    horizAngle) {
      this.Qd = ctx.r(
      /**/
      screenSize, 0.5);
      this.z = -(
      /**/
      screenSize[0] * 0.5) / Math.tan(ctx.ib(
      /**/
      horizAngle * 0.5));
    };

    this.Camera3D.prototype.
    /**/
    transform = function (
    /**/
    pos,
    /**/
    size) {
      if (
      /**/
      pos[2] < this.z) return false;
      var scale = -this.z / (
      /**/
      pos[2] - this.z);
      ctx.a(
      /**/
      pos, ctx.r(ctx.f(
      /**/
      pos, this.Qd), scale), this.Qd);
      ctx.q(
      /**/
      size,
      /**/
      size, scale);
      return true;
    };

    this.zd = null;
    this.yd = 0;

    this.initializeNoise = function (path, onloadcallback, onfailcallback) {
      if (!path) {
        alert("path should be defined");
      }

      if (this.zd != null) {
        onloadcallback();
        return;
      }

      if (path == null || path == undefined) path = this.defaultPath;
      var request = new XMLHttpRequest();
      request.open("GET", path + "neutrinoparticles.noise.bin", true);
      request.responseType = "arraybuffer";
      request.ctx = this;

      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          if (request.status >= 200 && request.status < 300 || request.status == 304) {
            var zd = request.response;
            var ctx = request.ctx;
            var view = new DataView(zd, 0, 4);
            var planeSize = view.getUint32(0, true);
            ctx.zd = [];
            ctx.yd = planeSize;

            for (var planeIndex = 0; planeIndex < planeSize; ++planeIndex) {
              ctx.zd[planeIndex] = new DataView(zd, 4
              /*Nd*/
              + 3 * planeSize * planeSize * planeIndex);
            }

            if (onloadcallback) onloadcallback();
          } else {
            if (onfailcallback) onfailcallback();
          }
        }
      };

      request.send();
    };

    this.NoiseGenerator = function () {
      var catmullRom_ = function catmullRom_(p0, p1, p2, p3, t) {
        return 0.5 * (2.0 * p1 + (-p0 + p2) * t + (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3) * t * t + (-p0 + 3.0 * p1 - 3.0 * p2 + p3) * (t * t * t));
      };

      var catmullRomv3_ = function catmullRomv3_(p0, p1, p2, p3, t) {
        return [catmullRom_(p0[0], p1[0], p2[0], p3[0], t), catmullRom_(p0[1], p1[1], p2[1], p3[1], t), catmullRom_(p0[2], p1[2], p2[2], p3[2], t)];
      };

      var clamp_ = function clamp_(a, from, to) {
        return a < from ? from : a > to ? to : a;
      };

      var imageSize = 64;
      var image = [];
      var tempBuffer = [];
      var tausGenerator = new ctx.taus88(120); // 120 - hardcoded starting seed

      var rand = function rand() {
        return tausGenerator.rand();
      };

      var amp = 0.7; // hardcoded amplitude of perlin zd

      var fadeDegree = 1.2; // hardcoded fade degree of each octave

      var prevStep = imageSize;
      var step, Nd, octSize, octSize2, octMaskSize, octPixels, octZ, octY; // mix step variables

      var numMixStepIterations = 0;
      var mixStepIteration = 0;

      for (var i = prevStep >>> 1; i > 0; i >>>= 1) {
        var _octSize = Math.floor(imageSize / i);

        numMixStepIterations += _octSize * _octSize;
      }

      var States = {
        INITIAL_FILL: 0,
        MIX_STEP_INIT: 1,
        MIX_STEP_PROCESS: 2,
        SCALING: 3,
        DATA_VIEWS: 4,
        FINISHED: 5
      };
      var Progress = {
        INIT: 0.01,
        MIX: 0.9,
        SCALING: 0.95,
        DATA_VIEWS: 1.0
      };
      var state = States.INITIAL_FILL;
      this.progress = 0.0;

      var initialFill = function initialFill() {
        for (var z = 0; z < imageSize; ++z) {
          var imageZ = image[z] = [];

          for (var y = 0; y < imageSize; ++y) {
            var imageZY = imageZ[y] = [];

            for (var x = 0; x < imageSize; ++x) {
              var imageZYX = imageZY[x] = [0.0, 0.0, 0.0];
            }
          }
        }

        state = States.MIX_STEP_INIT;
        this.progress = Progress.INIT;
      };

      var mixStepInit = function mixStepInit() {
        step = prevStep >>> 1;
        Nd = imageSize;
        octSize = Math.floor(Nd / step);
        octSize2 = octSize * octSize;
        octMaskSize = Math.max(octSize - 1, 1);
        octPixels = octSize * octSize * octSize;
        octZ = 0;
        octY = 0;

        for (var i = 0; i < octPixels; ++i) {
          tempBuffer[i] = []; // order is inverted to satisfy c++ obsolete order

          tempBuffer[i][2] = rand() * 2.0 - 1.0;
          tempBuffer[i][1] = rand() * 2.0 - 1.0;
          tempBuffer[i][0] = rand() * 2.0 - 1.0;
        }

        state = States.MIX_STEP_PROCESS;
      };

      var mixStepProcess = function mixStepProcess() {
        for (var octX = 0; octX < octSize; ++octX) {
          var octZ0 = octZ - 1 >>> 0 & octMaskSize;
          var octZ1 = octZ >>> 0 & octMaskSize;
          var octZ2 = octZ + 1 >>> 0 & octMaskSize;
          var octZ3 = octZ + 2 >>> 0 & octMaskSize;
          var octY0 = octY - 1 >>> 0 & octMaskSize;
          var octY1 = octY >>> 0 & octMaskSize;
          var octY2 = octY + 1 >>> 0 & octMaskSize;
          var octY3 = octY + 2 >>> 0 & octMaskSize;
          var octX0 = octX - 1 >>> 0 & octMaskSize;
          var octX1 = octX >>> 0 & octMaskSize;
          var octX2 = octX + 1 >>> 0 & octMaskSize;
          var octX3 = octX + 2 >>> 0 & octMaskSize;
          var values = //zyx
          [[[tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ0 * octSize2 + octY3 * octSize + octX3]]], [[tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ1 * octSize2 + octY3 * octSize + octX3]]], [[tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ2 * octSize2 + octY3 * octSize + octX3]]], [[tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY0 * octSize + octX3]], [tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY1 * octSize + octX3]], [tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY2 * octSize + octX3]], [tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX0], tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX1], tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX2], tempBuffer[octZ3 * octSize2 + octY3 * octSize + octX3]]]];

          for (var inZ = 0; inZ < step; ++inZ) {
            var interpZ = inZ / step;
            var imageZ = octZ * step + inZ;
            var valuesP = //yx
            [[catmullRomv3_(values[0][0][0], values[1][0][0], values[2][0][0], values[3][0][0], interpZ), catmullRomv3_(values[0][0][1], values[1][0][1], values[2][0][1], values[3][0][1], interpZ), catmullRomv3_(values[0][0][2], values[1][0][2], values[2][0][2], values[3][0][2], interpZ), catmullRomv3_(values[0][0][3], values[1][0][3], values[2][0][3], values[3][0][3], interpZ)], [catmullRomv3_(values[0][1][0], values[1][1][0], values[2][1][0], values[3][1][0], interpZ), catmullRomv3_(values[0][1][1], values[1][1][1], values[2][1][1], values[3][1][1], interpZ), catmullRomv3_(values[0][1][2], values[1][1][2], values[2][1][2], values[3][1][2], interpZ), catmullRomv3_(values[0][1][3], values[1][1][3], values[2][1][3], values[3][1][3], interpZ)], [catmullRomv3_(values[0][2][0], values[1][2][0], values[2][2][0], values[3][2][0], interpZ), catmullRomv3_(values[0][2][1], values[1][2][1], values[2][2][1], values[3][2][1], interpZ), catmullRomv3_(values[0][2][2], values[1][2][2], values[2][2][2], values[3][2][2], interpZ), catmullRomv3_(values[0][2][3], values[1][2][3], values[2][2][3], values[3][2][3], interpZ)], [catmullRomv3_(values[0][2][0], values[1][3][0], values[2][3][0], values[3][3][0], interpZ), catmullRomv3_(values[0][2][1], values[1][3][1], values[2][3][1], values[3][3][1], interpZ), catmullRomv3_(values[0][2][2], values[1][3][2], values[2][3][2], values[3][3][2], interpZ), catmullRomv3_(values[0][2][3], values[1][3][3], values[2][3][3], values[3][3][3], interpZ)]];

            for (var inY = 0; inY < step; ++inY) {
              var interpY = inY / step;
              var imageY = octY * step + inY;
              var value0 = catmullRomv3_(valuesP[0][0], valuesP[1][0], valuesP[2][0], valuesP[3][0], interpY);
              var value1 = catmullRomv3_(valuesP[0][1], valuesP[1][1], valuesP[2][1], valuesP[3][1], interpY);
              var value2 = catmullRomv3_(valuesP[0][2], valuesP[1][2], valuesP[2][2], valuesP[3][2], interpY);
              var value3 = catmullRomv3_(valuesP[0][3], valuesP[1][3], valuesP[2][3], valuesP[3][3], interpY);

              for (var inX = 0; inX < step; ++inX) {
                var interpX = inX / step;
                var imageX = octX * step + inX;
                var octResult = catmullRomv3_(value0, value1, value2, value3, interpX);
                var result = ctx.d(ctx.v(octResult, amp), image[imageZ][imageY][imageX]);
                var clampedResult = [clamp_(result[0], -1.0, 1.0), clamp_(result[1], -1.0, 1.0), clamp_(result[2], -1.0, 1.0)];
                image[imageZ][imageY][imageX] = clampedResult;
              }
            }
          }
        }

        mixStepIteration++;
        this.progress = Progress.INIT + (Progress.MIX - Progress.INIT) * (mixStepIteration / numMixStepIterations);
        octY++;

        if (octY >= octSize) {
          octY = 0;
          octZ++;

          if (octZ >= octSize) {
            octZ = 0;
            prevStep = step;
            amp = Math.pow(amp, fadeDegree);

            if (prevStep <= 1) {
              state = States.SCALING;
              this.progress = Progress.MIX;
            } else {
              state = States.MIX_STEP_INIT;
            }
          }
        }
      }; // hardcoded scaling of the image to make it more symethric


      var scaling = function scaling() {
        var low = [-1.0, -1.0, -1.0];
        var high = [0.5, 0.7, 1.0];

        for (var z = 0; z < imageSize; ++z) {
          var imageZ = image[z];

          for (var y = 0; y < imageSize; ++y) {
            var imageZY = imageZ[y];

            for (var x = 0; x < imageSize; ++x) {
              var imageZYX = imageZY[x];
              imageZYX[0] = ctx.X(low[0], high[0], imageZYX[0] * 0.5 + 0.5);
              imageZYX[1] = ctx.X(low[1], high[1], imageZYX[1] * 0.5 + 0.5);
              imageZYX[2] = ctx.X(low[2], high[2], imageZYX[2] * 0.5 + 0.5);
            }
          }
        }

        state = States.DATA_VIEWS;
        this.progress = Progress.SCALING;
      }; // filling zd DataViews


      var dataViews = function dataViews() {
        ctx.yd = imageSize;
        ctx.zd = [];

        for (var z = 0; z < imageSize; ++z) {
          var imageZ = image[z];
          var plane = new ArrayBuffer(imageSize * imageSize * 3);
          var view = new DataView(plane);

          for (var y = 0; y < imageSize; ++y) {
            var imageZY = imageZ[y];

            for (var x = 0; x < imageSize; ++x) {
              var imageZYX = imageZY[x];
              var rgbOffset = (y * imageSize + x) * 3;
              view.setUint8(rgbOffset + 0, Math.floor(clamp_(256.0 * (imageZYX[0] * 0.5 + 0.5) - 0.5, 0.0, 255.0)));
              view.setUint8(rgbOffset + 1, Math.floor(clamp_(256.0 * (imageZYX[1] * 0.5 + 0.5) - 0.5, 0.0, 255.0)));
              view.setUint8(rgbOffset + 2, Math.floor(clamp_(256.0 * (imageZYX[2] * 0.5 + 0.5) - 0.5, 0.0, 255.0)));
            }
          }

          ctx.zd[z] = view;
        }

        state = States.FINISHED;
        this.progress = Progress.DATA_VIEWS;
      };

      this.step = function () {
        switch (state) {
          case States.INITIAL_FILL:
            initialFill.call(this);
            break;

          case States.MIX_STEP_INIT:
            mixStepInit.call(this);
            break;

          case States.MIX_STEP_PROCESS:
            mixStepProcess.call(this);
            break;

          case States.SCALING:
            scaling.call(this);
            break;

          case States.DATA_VIEWS:
            dataViews.call(this);
            break;
        }

        return state == States.FINISHED;
      };
    };

    this.cf = document.createElement('canvas');
    this.cf.width = 0;
    this.cf.height = 0;
    this.bf = this.cf.getContext('2d');

    this.af = function (minWidth, minHeight) {
      if (this.cf.width < minWidth || this.cf.height < minHeight) {
        this.cf.width = minWidth;
        this.cf.height = minHeight;
        this.bf = this.cf.getContext('2d');
      }
    };

    this.effects = [];

    this.loadEffect = function (effectFilePath, onSuccessFunc, onFailFunc) {
      if (this.effects[effectFilePath] != undefined) {
        var effectModel = this.effects[effectFilePath];

        if (effectModel instanceof Array) {
          effectModel[effectModel.length] = [onSuccessFunc, onFailFunc];
          return;
        }

        onSuccessFunc(effectModel);
        return;
      }

      this.effects[effectFilePath] = [[onSuccessFunc, onFailFunc]];
      var request = new XMLHttpRequest();
      request.open("GET", effectFilePath, true);
      request.responseType = "text";
      request.ctx = this;

      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          var callbacks = this.ctx.effects[effectFilePath];

          if (request.status >= 200 && request.status < 300 || request.status == 304) {
            var evalText = "(function(ctx) {\n" + request.responseText + "\nreturn new NeutrinoEffect(ctx);\n})(this.ctx);";
            var effectModel = eval(evalText);
            this.ctx.effects[effectFilePath] = effectModel;
            callbacks.forEach(function (callback) {
              callback[0](effectModel);
            });
          } else {
            callbacks.forEach(function (callback) {
              callback[1]();
            });
          }
        }
      };

      request.send();
    };

    this.removeEffect = function (effectFilePath) {
      delete this.effects[effectFilePath];
    };
  }

  exports.Context = Context;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
}); //# sourceMappingURL=neutrinoparticles.umd.js.map

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzXFxuZXV0cmlub3BhcnRpY2xlc1xccnVudGltZVxcbmV1dHJpbm9wYXJ0aWNsZXMuanNcXG5ldXRyaW5vcGFydGljbGVzLnVtZC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInNlbGYiLCJOZXV0cmlubyIsIkNvbnRleHQiLCJjdHgiLCJlcXVhbHYzXyIsImEiLCJiIiwiZXF1YWxxXyIsInIiLCJ5IiwicyIsInoiLCJjIiwiZCIsIkMiLCJEIiwiYWRkcSIsImFkZHFfIiwiZSIsImYiLCJBIiwiQiIsIm5mIiwib2YiLCJnIiwiaCIsIkUiLCJGIiwicmYiLCJzZiIsImkiLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwiSCIsImRvdHFfIiwicSIsInQiLCJ1IiwidiIsInciLCJ4IiwiRyIsIkkiLCJheCIsImF5IiwiYXoiLCJieCIsImJ5IiwiYnoiLCJKIiwiSyIsIk1hdGgiLCJzcXJ0IiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwiYWIiLCJiYiIsInNsZXJwcSIsImNvc1RoZXRhIiwibmVncSIsIk51bWJlciIsIkVQU0lMT04iLCJNZCIsImFjb3NfIiwibXVscXNjYWxhciIsIm11bHFzY2FsYXJfIiwic2luXyIsInNsZXJwcV8iLCJhY29zIiwic2luIiwiY29zXyIsImNvcyIsInRhdXM4OCIsInNlZWQiLCJ2YWx1ZTAiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJzMCIsInJhbmQiLCJlbmdpbmUiLCJjYiIsInJhZGl1cyIsInJhbmR2MmdlbiIsInJhbmRvbSIsImdlbiIsIlBJIiwiZGIiLCJyYW5kdjNnZW4iLCJ0aGV0YSIsInNxcnRJbnZaMiIsInliIiwiTmQiLCJkaXNweCIsImRpc3B5IiwiZWIiLCJmYiIsImdiIiwiaGIiLCJuZWdxXyIsImliIiwiZGVncmVlcyIsImpiIiwicmFkaWFucyIsIkFlIiwidmFsdWUiLCJvYiIsIngyIiwieTIiLCJ6MiIsInh5IiwieHoiLCJ5eiIsInd6Iiwid3kiLCJ3eCIsInBiIiwidHIiLCJheGVzMnF1YXQiLCJxYiIsImhhIiwiYXhpc2FuZ2xlMnF1YXQiLCJheGlzYW5nbGUycXVhdF8iLCJyYiIsInF4IiwicXkiLCJxeiIsInF3IiwiaXgiLCJpeSIsIml6IiwiaXciLCJzYiIsInFheCIsInFheSIsInFheiIsInFhdyIsInFieCIsInFieSIsInFieiIsInFidyIsInRiIiwiSGYiLCJkZWdyZWUiLCJzY2FsZSIsInJhZCIsInViIiwidmIiLCJ2YWwiLCJmbG9vciIsInlkIiwiY29sb3JDb21wVG9IZXhfIiwidG9TdHJpbmciLCJmZiIsInJnYiIsInRmIiwidmYiLCJ4ZiIsInlmIiwiemYiLCJjYSIsIndmIiwiQWYiLCJCZiIsIkNmIiwiYWJzIiwiRGYiLCJfRGYiLCJ1ZiIsIkVmIiwiX0RmMiIsIndiIiwicmdiRGlzcCIsInZpZXciLCJ6ZCIsImdldFVpbnQ4IiwieGIiLCJzY2FsZWRQb3NYIiwic2NhbGVkUG9zWSIsInNjYWxlZFBvc1oiLCJmbG9vclgiLCJmbG9vclkiLCJmbG9vcloiLCJmcmFjWCIsImZyYWNZIiwiZnJhY1oiLCJub2lzZVgiLCJub2lzZVgxIiwibm9pc2VZIiwibm9pc2VZMSIsIm5vaXNlWiIsIm5vaXNlWjEiLCJ2YWx1ZTAwMCIsInZhbHVlMDAxIiwidmFsdWUwMTAiLCJ2YWx1ZTAxMSIsInZhbHVlMTAwIiwidmFsdWUxMDEiLCJ2YWx1ZTExMCIsInZhbHVlMTExIiwidmFsdWUwMCIsInZhbHVlMDEiLCJ2YWx1ZTEwIiwidmFsdWUxMSIsIkltYWdlRGVzYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJSZW5kZXJDYWxsIiwic3RhcnRJbmRleCIsIm51bUluZGljZXMiLCJyZW5kZXJTdHlsZUluZGV4IiwiU3ViUmVjdCIsIkNhbWVyYTJEIiwicHJvdG90eXBlIiwiQ2FtZXJhM0QiLCJzY3JlZW5TaXplIiwiaG9yaXpBbmdsZSIsIlFkIiwidGFuIiwidHJhbnNmb3JtIiwicG9zIiwic2l6ZSIsImluaXRpYWxpemVOb2lzZSIsInBhdGgiLCJvbmxvYWRjYWxsYmFjayIsIm9uZmFpbGNhbGxiYWNrIiwiYWxlcnQiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UGF0aCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJEYXRhVmlldyIsInBsYW5lU2l6ZSIsImdldFVpbnQzMiIsInBsYW5lSW5kZXgiLCJzZW5kIiwiTm9pc2VHZW5lcmF0b3IiLCJjYXRtdWxsUm9tXyIsInAwIiwicDEiLCJwMiIsInAzIiwiY2F0bXVsbFJvbXYzXyIsImNsYW1wXyIsImZyb20iLCJ0byIsImltYWdlU2l6ZSIsInRlbXBCdWZmZXIiLCJ0YXVzR2VuZXJhdG9yIiwiYW1wIiwiZmFkZURlZ3JlZSIsInByZXZTdGVwIiwic3RlcCIsIm9jdFNpemUiLCJvY3RTaXplMiIsIm9jdE1hc2tTaXplIiwib2N0UGl4ZWxzIiwib2N0WiIsIm9jdFkiLCJudW1NaXhTdGVwSXRlcmF0aW9ucyIsIm1peFN0ZXBJdGVyYXRpb24iLCJfb2N0U2l6ZSIsIlN0YXRlcyIsIklOSVRJQUxfRklMTCIsIk1JWF9TVEVQX0lOSVQiLCJNSVhfU1RFUF9QUk9DRVNTIiwiU0NBTElORyIsIkRBVEFfVklFV1MiLCJGSU5JU0hFRCIsIlByb2dyZXNzIiwiSU5JVCIsIk1JWCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJpbml0aWFsRmlsbCIsImltYWdlWiIsImltYWdlWlkiLCJpbWFnZVpZWCIsIm1peFN0ZXBJbml0IiwibWF4IiwibWl4U3RlcFByb2Nlc3MiLCJvY3RYIiwib2N0WjAiLCJvY3RaMSIsIm9jdFoyIiwib2N0WjMiLCJvY3RZMCIsIm9jdFkxIiwib2N0WTIiLCJvY3RZMyIsIm9jdFgwIiwib2N0WDEiLCJvY3RYMiIsIm9jdFgzIiwidmFsdWVzIiwiaW5aIiwiaW50ZXJwWiIsInZhbHVlc1AiLCJpblkiLCJpbnRlcnBZIiwiaW1hZ2VZIiwidmFsdWUzIiwiaW5YIiwiaW50ZXJwWCIsImltYWdlWCIsIm9jdFJlc3VsdCIsInJlc3VsdCIsImNsYW1wZWRSZXN1bHQiLCJwb3ciLCJzY2FsaW5nIiwibG93IiwiaGlnaCIsImRhdGFWaWV3cyIsInBsYW5lIiwiQXJyYXlCdWZmZXIiLCJyZ2JPZmZzZXQiLCJzZXRVaW50OCIsImNhbGwiLCJjZiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJmIiwiZ2V0Q29udGV4dCIsImFmIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJlZmZlY3RzIiwibG9hZEVmZmVjdCIsImVmZmVjdEZpbGVQYXRoIiwib25TdWNjZXNzRnVuYyIsIm9uRmFpbEZ1bmMiLCJlZmZlY3RNb2RlbCIsIkFycmF5IiwibGVuZ3RoIiwiY2FsbGJhY2tzIiwiZXZhbFRleHQiLCJyZXNwb25zZVRleHQiLCJldmFsIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwicmVtb3ZlRWZmZWN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsV0FBVUEsTUFBVixFQUFrQkMsT0FBbEIsRUFBMkI7QUFDM0IsU0FBT0MsT0FBUCxLQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFdBQWpELEdBQStERixPQUFPLENBQUNDLE9BQUQsQ0FBdEUsR0FDQSxPQUFPRSxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxNQUFNLENBQUNDLEdBQXZDLEdBQTZDRCxNQUFNLENBQUMsQ0FBQyxTQUFELENBQUQsRUFBY0gsT0FBZCxDQUFuRCxJQUNDRCxNQUFNLEdBQUdBLE1BQU0sSUFBSU0sSUFBbkIsRUFBeUJMLE9BQU8sQ0FBQ0QsTUFBTSxDQUFDTyxRQUFQLEdBQWtCLEVBQW5CLENBRGpDLENBREE7QUFHQSxDQUpBLFVBSVEsVUFBVUwsT0FBVixFQUFtQjtBQUFFOztBQUU3QixXQUFTTSxPQUFULEdBQW1CO0FBQ2pCLFFB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QixJQUF5Qk4sT0FBTyxDQUFDTSxNQUFSLEdBQWlCLEdBQTFDLElBQWlETixPQUFPLENBQUNNLE1BQVIsSUFBa0IsR0FBdkUsRUFBNEU7QUFFMUUsZ0JBQUkwRyxRQUFRLEdBQUcsdUJBQ2ZoSCxPQUFPLENBQUNpSCxZQURPLEdBRWYsa0RBRkE7QUFHQSxnQkFBSUwsV0FBVyxHQUFHTSxJQUFJLENBQUNGLFFBQUQsQ0FBdEI7QUFDQSxpQkFBS3BXLEdBQUwsQ0FBUzJWLE9BQVQsQ0FBaUJFLGNBQWpCLElBQW1DRyxXQUFuQztBQUVBRyxZQUFBQSxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBVUMsUUFBVixFQUFvQjtBQUNwQ0EsY0FBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUixXQUFaO0FBQ0QsYUFGRDtBQUlELFdBWkQsTUFZTztBQUNMRyxZQUFBQSxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsVUFBVUMsUUFBVixFQUFvQjtBQUNwQ0EsY0FBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNELGFBRkQ7QUFHRDtBQUNGO0FBQ0YsT0F0QkQ7O0FBd0JBcEgsTUFBQUEsT0FBTyxDQUFDWSxJQUFSO0FBQ0QsS0E5Q0Q7O0FBZ0RBLFNBQUt5RyxZQUFMLEdBQW9CLFVBQVVaLGNBQVYsRUFBMEI7QUFDNUMsYUFBTyxLQUFLRixPQUFMLENBQWFFLGNBQWIsQ0FBUDtBQUNELEtBRkQ7QUFHRDs7QUFFRHBXLEVBQUFBLE9BQU8sQ0FBQ00sT0FBUixHQUFrQkEsT0FBbEI7QUFFQTJXLEVBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQmxYLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU4SCxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUE3QztBQUVBLENBN3lDQSxDQUFELEVBOHlDQSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcclxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcclxuXHQoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLk5ldXRyaW5vID0ge30pKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHRmdW5jdGlvbiBDb250ZXh0KCkge1xyXG5cdCAgdmFyIGN0eCA9IHRoaXM7XHJcblxyXG5cdCAgdGhpcy5lcXVhbHYzXyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0ICAgIHJldHVybiBhWzBdID09IGJbMF0gJiYgYVsxXSA9PSBiWzFdICYmIGFbMl0gPT0gYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5lcXVhbHFfID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gPT0gYlswXSAmJiBhWzFdID09IGJbMV0gJiYgYVsyXSA9PSBiWzJdICYmIGFbM10gPT0gYlszXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5hID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSArIGJbMV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuYiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIGJbMF0sIGFbMV0gKyBiWzFdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy55ID0gZnVuY3Rpb24gKHIsIGEsIHMpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBzO1xyXG5cdCAgICByWzFdID0gYVsxXSArIHM7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMueiA9IGZ1bmN0aW9uIChhLCBzKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIHMsIGFbMV0gKyBzXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5jID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSArIGJbMV07XHJcblx0ICAgIHJbMl0gPSBhWzJdICsgYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5kID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5DID0gZnVuY3Rpb24gKHIsIGEsIHMpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBzO1xyXG5cdCAgICByWzFdID0gYVsxXSArIHM7XHJcblx0ICAgIHJbMl0gPSBhWzJdICsgcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5EID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgcywgYVsxXSArIHMsIGFbMl0gKyBzXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5hZGRxID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSArIGJbMV07XHJcblx0ICAgIHJbMl0gPSBhWzJdICsgYlsyXTtcclxuXHQgICAgclszXSA9IGFbM10gKyBiWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmFkZHFfID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgYlswXSwgYVsxXSArIGJbMV0sIGFbMl0gKyBiWzJdLCBhWzNdICsgYlszXV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuZSA9IGZ1bmN0aW9uIChyLCBhLCBiKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdIC0gYlswXTtcclxuXHQgICAgclsxXSA9IGFbMV0gLSBiWzFdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmYgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLSBiWzBdLCBhWzFdIC0gYlsxXV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuQSA9IGZ1bmN0aW9uIChyLCBhLCBzKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdIC0gcztcclxuXHQgICAgclsxXSA9IGFbMV0gLSBzO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkIgPSBmdW5jdGlvbiAoYSwgcykge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLSBzLCBhWzFdIC0gc107XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMubmYgPSBmdW5jdGlvbiAociwgcywgYSkge1xyXG5cdCAgICByWzBdID0gcyAtIGFbMF07XHJcblx0ICAgIHJbMV0gPSBzIC0gYVsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5vZiA9IGZ1bmN0aW9uIChzLCBhKSB7XHJcblx0ICAgIHJldHVybiBbcyAtIGFbMF0sIHMgLSBhWzFdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5nID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgclswXSA9IGFbMF0gLSBiWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXSAtIGJbMV07XHJcblx0ICAgIHJbMl0gPSBhWzJdIC0gYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5oID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5FID0gZnVuY3Rpb24gKHIsIGEsIHMpIHtcclxuXHQgICAgclswXSA9IGFbMF0gLSBzO1xyXG5cdCAgICByWzFdID0gYVsxXSAtIHM7XHJcblx0ICAgIHJbMl0gPSBhWzJdIC0gcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5GID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC0gcywgYVsxXSAtIHMsIGFbMl0gLSBzXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yZiA9IGZ1bmN0aW9uIChyLCBzLCBhKSB7XHJcblx0ICAgIHJbMF0gPSBzIC0gYVswXTtcclxuXHQgICAgclsxXSA9IHMgLSBhWzFdO1xyXG5cdCAgICByWzJdID0gcyAtIGFbMl07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuc2YgPSBmdW5jdGlvbiAocywgYSkge1xyXG5cdCAgICByZXR1cm4gW3MgLSBhWzBdLCBzIC0gYVsxXSwgcyAtIGFbMl1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmkgPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAqIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdICogYlsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5qID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICogYlswXSwgYVsxXSAqIGJbMV1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmsgPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAqIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdICogYlsxXTtcclxuXHQgICAgclsyXSA9IGFbMl0gKiBiWzJdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmwgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gKiBiWzBdLCBhWzFdICogYlsxXSwgYVsyXSAqIGJbMl1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLm0gPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAvIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gYlsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5uID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC8gYlswXSwgYVsxXSAvIGJbMV1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLm8gPSBmdW5jdGlvbiAociwgYSwgYikge1xyXG5cdCAgICByWzBdID0gYVswXSAvIGJbMF07XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gYlsxXTtcclxuXHQgICAgclsyXSA9IGFbMl0gLyBiWzJdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnAgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLyBiWzBdLCBhWzFdIC8gYlsxXSwgYVsyXSAvIGJbMl1dO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkggPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmRvdHFfID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnEgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAqIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdICogcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICogcywgYVsxXSAqIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnMgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAvIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy50ID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC8gcywgYVsxXSAvIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnUgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAqIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdICogcztcclxuXHQgICAgclsyXSA9IGFbMl0gKiBzO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnYgPSBmdW5jdGlvbiAoYSwgcykge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gKiBzLCBhWzFdICogcywgYVsyXSAqIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLncgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAvIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdIC8gcztcclxuXHQgICAgclsyXSA9IGFbMl0gLyBzO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnggPSBmdW5jdGlvbiAoYSwgcykge1xyXG5cdCAgICByZXR1cm4gW2FbMF0gLyBzLCBhWzFdIC8gcywgYVsyXSAvIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnkgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSArIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdICsgcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy56ID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdICsgcywgYVsxXSArIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkEgPSBmdW5jdGlvbiAociwgYSwgcykge1xyXG5cdCAgICByWzBdID0gYVswXSAtIHM7XHJcblx0ICAgIHJbMV0gPSBhWzFdIC0gcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5CID0gZnVuY3Rpb24gKGEsIHMpIHtcclxuXHQgICAgcmV0dXJuIFthWzBdIC0gcywgYVsxXSAtIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkcgPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5IID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5JID0gZnVuY3Rpb24gKHIsIGEsIGIpIHtcclxuXHQgICAgdmFyIGF4ID0gYVswXSxheSA9IGFbMV0sYXogPSBhWzJdO1xyXG5cdCAgICB2YXIgYnggPSBiWzBdLGJ5ID0gYlsxXSxieiA9IGJbMl07XHJcblxyXG5cdCAgICByWzBdID0gYXkgKiBieiAtIGF6ICogYnk7XHJcblx0ICAgIHJbMV0gPSBheiAqIGJ4IC0gYXggKiBiejtcclxuXHQgICAgclsyXSA9IGF4ICogYnkgLSBheSAqIGJ4O1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkogPSBmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICB2YXIgYXggPSBhWzBdLGF5ID0gYVsxXSxheiA9IGFbMl07XHJcblx0ICAgIHZhciBieCA9IGJbMF0sYnkgPSBiWzFdLGJ6ID0gYlsyXTtcclxuXHJcblx0ICAgIHJldHVybiBbYXkgKiBieiAtIGF6ICogYnksXHJcblx0ICAgIGF6ICogYnggLSBheCAqIGJ6LFxyXG5cdCAgICBheCAqIGJ5IC0gYXkgKiBieF07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuSyA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTCA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBhWzBdICogYVswXSArIGFbMV0gKiBhWzFdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLk0gPSBmdW5jdGlvbiAociwgYSkge1xyXG5cdCAgICBjdHgucShyLCBhLCAxLjAgLyBjdHguSyhhKSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTiA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBjdHgucihhLCAxLjAgLyBjdHguSyhhKSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTyA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBNYXRoLnNxcnQoYVswXSAqIGFbMF0gKyBhWzFdICogYVsxXSArIGFbMl0gKiBhWzJdKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5QID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5RID0gZnVuY3Rpb24gKHIsIGEpIHtcclxuXHQgICAgY3R4LnUociwgYSwgMS4wIC8gY3R4Lk8oYSkpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLlIgPSBmdW5jdGlvbiAoYSkge1xyXG5cdCAgICByZXR1cm4gY3R4LnYoYSwgMS4wIC8gY3R4Lk8oYSkpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLlMgPSBmdW5jdGlvbiAociwgYSkge1xyXG5cdCAgICByWzBdID0gYVswXTtcclxuXHQgICAgclsxXSA9IGFbMV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuVCA9IGZ1bmN0aW9uIChyLCBhKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXTtcclxuXHQgICAgclsyXSA9IGFbMl07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuVSA9IGZ1bmN0aW9uIChyLCBhKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdO1xyXG5cdCAgICByWzFdID0gYVsxXTtcclxuXHQgICAgclsyXSA9IGFbMl07XHJcblx0ICAgIHJbM10gPSBhWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLlYgPSBmdW5jdGlvbiAociwgeCwgeSkge1xyXG5cdCAgICByWzBdID0geDtcclxuXHQgICAgclsxXSA9IHk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuVyA9IGZ1bmN0aW9uIChyLCB4LCB5LCB6KSB7XHJcblx0ICAgIHJbMF0gPSB4O1xyXG5cdCAgICByWzFdID0geTtcclxuXHQgICAgclsyXSA9IHo7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuWCA9IGZ1bmN0aW9uIChhLCBiLCBpKSB7XHJcblx0ICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuWSA9IGZ1bmN0aW9uIChyLCBhLCBiLCBpKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdICsgKGJbMF0gLSBhWzBdKSAqIGk7XHJcblx0ICAgIHJbMV0gPSBhWzFdICsgKGJbMV0gLSBhWzFdKSAqIGk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuWiA9IGZ1bmN0aW9uIChhLCBiLCBpKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIChiWzBdIC0gYVswXSkgKiBpLFxyXG5cdCAgICBhWzFdICsgKGJbMV0gLSBhWzFdKSAqIGldO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmFiID0gZnVuY3Rpb24gKHIsIGEsIGIsIGkpIHtcclxuXHQgICAgclswXSA9IGFbMF0gKyAoYlswXSAtIGFbMF0pICogaTtcclxuXHQgICAgclsxXSA9IGFbMV0gKyAoYlsxXSAtIGFbMV0pICogaTtcclxuXHQgICAgclsyXSA9IGFbMl0gKyAoYlsyXSAtIGFbMl0pICogaTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5iYiA9IGZ1bmN0aW9uIChhLCBiLCBpKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSArIChiWzBdIC0gYVswXSkgKiBpLFxyXG5cdCAgICBhWzFdICsgKGJbMV0gLSBhWzFdKSAqIGksXHJcblx0ICAgIGFbMl0gKyAoYlsyXSAtIGFbMl0pICogaV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuc2xlcnBxID0gZnVuY3Rpb24gKHIsIHgsIHksIGEpIHtcclxuXHQgICAgdmFyIGNvc1RoZXRhID0gY3R4LmRvdHFfKHgsIHkpO1xyXG5cclxuXHQgICAgdmFyIHogPSBbXTtcclxuXHJcblx0ICAgIGlmIChjb3NUaGV0YSA8IDApIHtcclxuXHQgICAgICBjdHgubmVncSh6LCB5KTtcclxuXHQgICAgICBjb3NUaGV0YSA9IC1jb3NUaGV0YTtcclxuXHQgICAgfSBlbHNlXHJcblx0ICAgIHtcclxuXHQgICAgICBjdHguVSh6LCB5KTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKDEuMCAtIGNvc1RoZXRhIDwgTnVtYmVyLkVQU0lMT04pIHtcclxuXHQgICAgICByWzBdID0gY3R4LlgoeFswXSwgeVswXSwgYSk7XHJcblx0ICAgICAgclsxXSA9IGN0eC5YKHhbMV0sIHlbMV0sIGEpO1xyXG5cdCAgICAgIHJbMl0gPSBjdHguWCh4WzJdLCB5WzJdLCBhKTtcclxuXHQgICAgICByWzNdID0gY3R4LlgoeFszXSwgeVszXSwgYSk7XHJcblx0ICAgIH0gZWxzZVxyXG5cdCAgICB7XHJcblx0ICAgICAgdmFyIE1kID0gY3R4LmFjb3NfKGNvc1RoZXRhKTtcclxuXHJcblx0ICAgICAgY3R4Lm11bHFzY2FsYXIociwgY3R4LmFkZHFfKGN0eC5tdWxxc2NhbGFyXyh4LCBjdHguc2luXygoMS4wIC0gYSkgKiBNZCkpLCBjdHgubXVscXNjYWxhcl8oeiwgY3R4LnNpbl8oYSAqIE1kKSkpLFxyXG5cdCAgICAgIDEuMCAvIGN0eC5zaW5fKE1kKSk7XHJcblx0ICAgIH1cclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5zbGVycHFfID0gZnVuY3Rpb24gKHgsIHksIGEpIHtcclxuXHQgICAgdmFyIHIgPSBbXTtcclxuXHQgICAgc2xlcnBxKHIsIHgsIHksIGEpO1xyXG5cdCAgICByZXR1cm4gcjtcclxuXHQgIH07XHJcblxyXG5cdCAgLy90cmlnb25vbWV0cnlcclxuXHJcblx0ICB0aGlzLmFjb3NfID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIE1hdGguYWNvcyhhKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5zaW5fID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIE1hdGguc2luKGEpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmNvc18gPSBmdW5jdGlvbiAoYSkge1xyXG5cdCAgICByZXR1cm4gTWF0aC5jb3MoYSk7XHJcblx0ICB9O1xyXG5cclxuXHQgIC8vIHJhbmRvbVxyXG5cclxuXHQgIHRoaXMudGF1czg4ID0gZnVuY3Rpb24gKHNlZWQpXHJcblx0ICB7XHJcblx0ICAgIGlmICghc2VlZClcclxuXHQgICAgc2VlZCA9IDA7XHJcblxyXG5cdCAgICB2YXIgdmFsdWUwLCB2YWx1ZTEsIHZhbHVlMjtcclxuXHJcblx0ICAgIHRoaXMuc2VlZCA9IGZ1bmN0aW9uIChzMCkge1xyXG5cdCAgICAgIHMwICY9IDB4RkZGRkZGRkY7XHJcblxyXG5cdCAgICAgIHZhbHVlMCA9IHMwIDwgMiA/IHMwICsgMiA6IHMwO1xyXG5cdCAgICAgIHZhbHVlMSA9IHMwIDwgOCA/IHMwICsgOCA6IHMwO1xyXG5cdCAgICAgIHZhbHVlMiA9IHMwIDwgMTYgPyBzMCArIDE2IDogczA7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB0aGlzLnJhbmQgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgdmFyIGIgPSAoKHZhbHVlMCA8PCAxMyBeIHZhbHVlMCkgJiAweEZGRkZGRkZGKSA+Pj4gMTk7XHJcblx0ICAgICAgdmFsdWUwID0gKCh2YWx1ZTAgJiAweEZGRkZGRkZFKSA8PCAxMiBeIGIpID4+PiAwO1xyXG5cclxuXHQgICAgICBiID0gKCh2YWx1ZTEgPDwgMiBeIHZhbHVlMSkgJiAweEZGRkZGRkZGKSA+Pj4gMjU7XHJcblx0ICAgICAgdmFsdWUxID0gKCh2YWx1ZTEgJiAweEZGRkZGRkY4KSA8PCA0IF4gYikgPj4+IDA7XHJcblxyXG5cdCAgICAgIGIgPSAoKHZhbHVlMiA8PCAzIF4gdmFsdWUyKSAmIDB4RkZGRkZGRkYpID4+PiAxMTtcclxuXHQgICAgICB2YWx1ZTIgPSAoKHZhbHVlMiAmIDB4RkZGRkZGRjApIDw8IDE3IF4gYikgPj4+IDA7XHJcblxyXG5cdCAgICAgIHZhciBlbmdpbmUgPSAodmFsdWUwIF4gdmFsdWUxIF4gdmFsdWUyKSA+Pj4gMDtcclxuXHQgICAgICByZXR1cm4gZW5naW5lIC8gNDI5NDk2NzI5Ni4wO1xyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgdGhpcy5zZWVkKHNlZWQpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmNiID0gZnVuY3Rpb24gKHIsIHJhZGl1cykge1xyXG5cdCAgICB0aGlzLnJhbmR2MmdlbihyLCByYWRpdXMsIGZ1bmN0aW9uICgpIHtyZXR1cm4gTWF0aC5yYW5kb20oKTt9KTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yYW5kdjJnZW4gPSBmdW5jdGlvbiAociwgcmFkaXVzLCBnZW4pIHtcclxuXHQgICAgdmFyIE1kID0gZ2VuKCkgKiBNYXRoLlBJICogMi4wO1xyXG5cdCAgICByWzBdID0gcmFkaXVzICogY3R4LmNvc18oTWQpO1xyXG5cdCAgICByWzFdID0gcmFkaXVzICogY3R4LnNpbl8oTWQpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmRiID0gZnVuY3Rpb24gKHIsIHJhZGl1cykge1xyXG5cdCAgICB0aGlzLnJhbmR2M2dlbihyLCByYWRpdXMsIGZ1bmN0aW9uICgpIHtyZXR1cm4gTWF0aC5yYW5kb20oKTt9KTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yYW5kdjNnZW4gPSBmdW5jdGlvbiAociwgcmFkaXVzLCBnZW4pIHtcclxuXHQgICAgdmFyIHRoZXRhID0gZ2VuKCkgKiBNYXRoLlBJICogMi4wO1xyXG5cdCAgICB2YXIgeiA9IC0xLjAgKyBnZW4oKSAqIDIuMDtcclxuXHQgICAgdmFyIHNxcnRJbnZaMiA9IHJhZGl1cyAqIE1hdGguc3FydCgxLjAgLSB6ICogeik7XHJcblx0ICAgIHJbMF0gPSBzcXJ0SW52WjIgKiBjdHguY29zXyh0aGV0YSk7XHJcblx0ICAgIHJbMV0gPSBzcXJ0SW52WjIgKiBjdHguc2luXyh0aGV0YSk7XHJcblx0ICAgIHJbMl0gPSByYWRpdXMgKiB6O1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnliID0gZnVuY3Rpb24gKHIsIHgsIHksIE5kLCBnZW4pIHtcclxuXHQgICAgdmFyIGRpc3B4ID0geCArIGdlbigpICogTmRbMF07XHJcblx0ICAgIHZhciBkaXNweSA9IHkgKyBnZW4oKSAqIE5kWzFdO1xyXG5cdCAgICBjdHguVihyLCBkaXNweCwgZGlzcHkpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmViID0gZnVuY3Rpb24gKHIsIGEpIHtcclxuXHQgICAgY3R4LlYoLWFbMF0sIC1hWzFdKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5mYiA9IGZ1bmN0aW9uIChhKSB7XHJcblx0ICAgIHJldHVybiBbLWFbMF0sIC1hWzFdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5nYiA9IGZ1bmN0aW9uIChyLCBhKSB7XHJcblx0ICAgIGN0eC5XKC1hWzBdLCAtYVsxXSwgLWFbMl0pO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLmhiID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIFstYVswXSwgLWFbMV0sIC1hWzJdXTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5uZWdxID0gZnVuY3Rpb24gKHIsIGEpIHtcclxuXHQgICAgclswXSA9IC1hWzBdO1xyXG5cdCAgICByWzFdID0gLWFbMV07XHJcblx0ICAgIHJbMl0gPSAtYVsyXTtcclxuXHQgICAgclszXSA9IC1hWzNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLm5lZ3FfID0gZnVuY3Rpb24gKGEpIHtcclxuXHQgICAgcmV0dXJuIFstYVswXSwgLWFbMV0sIC1hWzJdLCAtYVszXV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuaWIgPSBmdW5jdGlvbiAoZGVncmVlcykge1xyXG5cdCAgICByZXR1cm4gZGVncmVlcyAvIDE4MC4wICogTWF0aC5QSTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5qYiA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XHJcblx0ICAgIHJldHVybiByYWRpYW5zIC8gTWF0aC5QSSAqIDE4MC4wO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkFlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0ICAgIHJldHVybiB2YWx1ZSA8IDAgPyAtMSA6IDE7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMub2IgPSBmdW5jdGlvbiAoeCwgeSwgeiwgcSkge1xyXG5cdCAgICB2YXIgeDIgPSAyLjAgKiBxWzBdICogcVswXTtcclxuXHQgICAgdmFyIHkyID0gMi4wICogcVsxXSAqIHFbMV07XHJcblx0ICAgIHZhciB6MiA9IDIuMCAqIHFbMl0gKiBxWzJdO1xyXG5cdCAgICB2YXIgeHkgPSAyLjAgKiBxWzBdICogcVsxXTtcclxuXHQgICAgdmFyIHh6ID0gMi4wICogcVswXSAqIHFbMl07XHJcblx0ICAgIHZhciB5eiA9IDIuMCAqIHFbMV0gKiBxWzJdO1xyXG5cdCAgICB2YXIgd3ogPSAyLjAgKiBxWzNdICogcVsyXTtcclxuXHQgICAgdmFyIHd5ID0gMi4wICogcVszXSAqIHFbMV07XHJcblx0ICAgIHZhciB3eCA9IDIuMCAqIHFbM10gKiBxWzBdO1xyXG5cclxuXHQgICAgeFswXSA9IDEuMCAtIHkyIC0gejI7XHJcblx0ICAgIHhbMV0gPSB4eSArIHd6O1xyXG5cdCAgICB4WzJdID0geHogLSB3eTtcclxuXHJcblx0ICAgIHlbMF0gPSB4eSAtIHd6O1xyXG5cdCAgICB5WzFdID0gMS4wIC0geDIgLSB6MjtcclxuXHQgICAgeVsyXSA9IHl6ICsgd3g7XHJcblxyXG5cdCAgICB6WzBdID0geHogKyB3eTtcclxuXHQgICAgelsxXSA9IHl6IC0gd3g7XHJcblx0ICAgIHpbMl0gPSAxLjAgLSB4MiAtIHkyO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnBiID0gZnVuY3Rpb24gKHEsIHgsIHksIHopIHtcclxuXHQgICAgdmFyIHRyID0geFswXSArIHlbMV0gKyB6WzJdO1xyXG5cclxuXHQgICAgaWYgKHRyID4gMCkge1xyXG5cdCAgICAgIHZhciBTID0gTWF0aC5zcXJ0KHRyICsgMS4wKSAqIDI7XHJcblx0ICAgICAgcVszXSA9IDAuMjUgKiBTO1xyXG5cdCAgICAgIHFbMF0gPSAoeVsyXSAtIHpbMV0pIC8gUztcclxuXHQgICAgICBxWzFdID0gKHpbMF0gLSB4WzJdKSAvIFM7XHJcblx0ICAgICAgcVsyXSA9ICh4WzFdIC0geVswXSkgLyBTO1xyXG5cdCAgICB9IGVsc2UgaWYgKHhbMF0gPiB5WzFdICYgeFswXSA+IHpbMl0pIHtcclxuXHQgICAgICB2YXIgUyA9IE1hdGguc3FydCgxLjAgKyB4WzBdIC0geVsxXSAtIHpbMl0pICogMjtcclxuXHQgICAgICBxWzNdID0gKHlbMl0gLSB6WzFdKSAvIFM7XHJcblx0ICAgICAgcVswXSA9IDAuMjUgKiBTO1xyXG5cdCAgICAgIHFbMV0gPSAoeFsxXSArIHlbMF0pIC8gUztcclxuXHQgICAgICBxWzJdID0gKHpbMF0gKyB4WzJdKSAvIFM7XHJcblx0ICAgIH0gZWxzZSBpZiAoeVsxXSA+IHpbMl0pIHtcclxuXHQgICAgICB2YXIgUyA9IE1hdGguc3FydCgxLjAgKyB5WzFdIC0geFswXSAtIHpbMl0pICogMjtcclxuXHQgICAgICBxWzNdID0gKHpbMF0gLSB4WzJdKSAvIFM7XHJcblx0ICAgICAgcVswXSA9ICh4WzFdICsgeVswXSkgLyBTO1xyXG5cdCAgICAgIHFbMV0gPSAwLjI1ICogUztcclxuXHQgICAgICBxWzJdID0gKHlbMl0gKyB6WzFdKSAvIFM7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgdmFyIFMgPSBNYXRoLnNxcnQoMS4wICsgelsyXSAtIHhbMF0gLSB5WzFdKSAqIDI7XHJcblx0ICAgICAgcVszXSA9ICh4WzFdIC0geVswXSkgLyBTO1xyXG5cdCAgICAgIHFbMF0gPSAoelswXSArIHhbMl0pIC8gUztcclxuXHQgICAgICBxWzFdID0gKHlbMl0gKyB6WzFdKSAvIFM7XHJcblx0ICAgICAgcVsyXSA9IDAuMjUgKiBTO1xyXG5cdCAgICB9XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuIC8qKi9heGVzMnF1YXQgPSB0aGlzLnBiO1xyXG5cclxuXHQgIHRoaXMucWIgPSBmdW5jdGlvbiAocSwgeCwgYSkge1xyXG5cdCAgICB2YXIgaGEgPSBjdHguaWIoYSkgKiAwLjUscyA9IE1hdGguc2luKGhhKTtcclxuXHQgICAgcVswXSA9IHhbMF0gKiBzO1xyXG5cdCAgICBxWzFdID0geFsxXSAqIHM7XHJcblx0ICAgIHFbMl0gPSB4WzJdICogcztcclxuXHQgICAgcVszXSA9IE1hdGguY29zKGhhKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy4gLyoqL2F4aXNhbmdsZTJxdWF0ID0gdGhpcy5xYjtcclxuXHJcblx0ICB0aGlzLmF4aXNhbmdsZTJxdWF0XyA9IGZ1bmN0aW9uICh4LCBhKSB7XHJcblx0ICAgIHZhciBoYSA9IGN0eC5pYihhKSAqIDAuNSxzID0gTWF0aC5zaW4oaGEpO1xyXG5cdCAgICByZXR1cm4gW3hbMF0gKiBzLCB4WzFdICogcywgeFsyXSAqIHMsIGN0eC5jb3NfKGhhKV07XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuIC8qKi9heGlzYW5nbGUycXVhdF8gPSB0aGlzLmF4aXNhbmdsZTJxdWF0XztcclxuXHJcblx0ICB0aGlzLnJiID0gZnVuY3Rpb24gKHIsIHYsIHEpIHtcclxuXHQgICAgdmFyIHggPSB2WzBdO1xyXG5cdCAgICB2YXIgeSA9IHZbMV07XHJcblx0ICAgIHZhciB6ID0gdlsyXTtcclxuXHJcblx0ICAgIHZhciBxeCA9IHFbMF07XHJcblx0ICAgIHZhciBxeSA9IHFbMV07XHJcblx0ICAgIHZhciBxeiA9IHFbMl07XHJcblx0ICAgIHZhciBxdyA9IHFbM107XHJcblxyXG5cdCAgICB2YXIgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XHJcblx0ICAgIHZhciBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcclxuXHQgICAgdmFyIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xyXG5cdCAgICB2YXIgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6O1xyXG5cclxuXHQgICAgclswXSA9IGl4ICogcXcgKyBpdyAqIC1xeCArIGl5ICogLXF6IC0gaXogKiAtcXk7XHJcblx0ICAgIHJbMV0gPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6O1xyXG5cdCAgICByWzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5zYiA9IGZ1bmN0aW9uIChyLCBhLCBiKSB7XHJcblx0ICAgIHZhciBxYXggPSBhWzBdLHFheSA9IGFbMV0scWF6ID0gYVsyXSxxYXcgPSBhWzNdO1xyXG5cdCAgICB2YXIgcWJ4ID0gYlswXSxxYnkgPSBiWzFdLHFieiA9IGJbMl0scWJ3ID0gYlszXTtcclxuXHJcblx0ICAgIHJbMF0gPSBxYXggKiBxYncgKyBxYXcgKiBxYnggKyBxYXkgKiBxYnogLSBxYXogKiBxYnk7XHJcblx0ICAgIHJbMV0gPSBxYXkgKiBxYncgKyBxYXcgKiBxYnkgKyBxYXogKiBxYnggLSBxYXggKiBxYno7XHJcblx0ICAgIHJbMl0gPSBxYXogKiBxYncgKyBxYXcgKiBxYnogKyBxYXggKiBxYnkgLSBxYXkgKiBxYng7XHJcblx0ICAgIHJbM10gPSBxYXcgKiBxYncgLSBxYXggKiBxYnggLSBxYXkgKiBxYnkgLSBxYXogKiBxYno7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMubXVscXNjYWxhciA9IGZ1bmN0aW9uIChyLCBhLCBzKSB7XHJcblx0ICAgIHJbMF0gPSBhWzBdICogcztcclxuXHQgICAgclsxXSA9IGFbMV0gKiBzO1xyXG5cdCAgICByWzJdID0gYVsyXSAqIHM7XHJcblx0ICAgIHJbM10gPSBhWzNdICogcztcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5tdWxxc2NhbGFyXyA9IGZ1bmN0aW9uIChhLCBzKSB7XHJcblx0ICAgIHJldHVybiBbYVswXSAqIHMsIGFbMV0gKiBzLCBhWzJdICogcywgYVszXSAqIHNdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnRiID0gZnVuY3Rpb24gKHIsIEhmLCBkZWdyZWUsIHNjYWxlLCB2KSB7XHJcblx0ICAgIHZhciByYWQgPSBjdHguaWIoZGVncmVlKTtcclxuXHQgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCkgKiBzY2FsZTtcclxuXHQgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCkgKiBzY2FsZTtcclxuXHQgICAgclswXSA9IEhmWzBdICsgY29zICogdlswXSAtIHNpbiAqIHZbMV07XHJcblx0ICAgIHJbMV0gPSBIZlsxXSArIHNpbiAqIHZbMF0gKyBjb3MgKiB2WzFdO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnViID0gZnVuY3Rpb24gKHIsIEhmLCBkZWdyZWUsIHNjYWxlLCB2KSB7XHJcblx0ICAgIHZhciByYWQgPSBjdHguaWIoZGVncmVlKTtcclxuXHQgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCkgLyBzY2FsZTtcclxuXHQgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCkgLyBzY2FsZTtcclxuXHJcblx0ICAgIHJbMF0gPSBjb3MgKiB2WzBdICsgc2luICogdlsxXSAtIEhmWzBdICogY29zIC0gSGZbMV0gKiBzaW47XHJcblx0ICAgIHJbMV0gPSBjb3MgKiB2WzFdIC0gc2luICogdlswXSArIEhmWzBdICogc2luIC0gSGZbMV0gKiBjb3M7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMudmIgPSBmdW5jdGlvbiAodmFsKSB7XHJcblx0ICAgIGlmICh2YWwgPCAwKVxyXG5cdCAgICByZXR1cm4gTWF0aC5mbG9vcihjdHgueWQgLSAxICsgdmFsICUgY3R4LnlkKTtlbHNlXHJcblxyXG5cdCAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwgJSBjdHgueWQpO1xyXG5cdCAgfTtcclxuXHJcblx0ICBmdW5jdGlvbiBjb2xvckNvbXBUb0hleF8oYykge1xyXG5cdCAgICByZXR1cm4gYyA8IDE2ID8gXCIwXCIgKyBjLnRvU3RyaW5nKDE2KSA6IGMudG9TdHJpbmcoMTYpO1xyXG5cdCAgfVxyXG5cclxuXHQgIHRoaXMuZmYgPSBmdW5jdGlvbiAocmdiKSB7XHJcblx0ICAgIHJldHVybiBcIiNcIiArXHJcblx0ICAgIGNvbG9yQ29tcFRvSGV4XyhNYXRoLmZsb29yKHJnYlswXSAqIDI1NSkpICtcclxuXHQgICAgY29sb3JDb21wVG9IZXhfKE1hdGguZmxvb3IocmdiWzFdICogMjU1KSkgK1xyXG5cdCAgICBjb2xvckNvbXBUb0hleF8oTWF0aC5mbG9vcihyZ2JbMl0gKiAyNTUpKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy50ZiA9IGZ1bmN0aW9uICh2ZiwgeGYsIHlmLCBhLCBiLCB6Zikge1xyXG5cdCAgICB2YXIgY2EgPSBjdHguZihhLCB2Zik7XHJcblx0ICAgIHZhciBjYiA9IGN0eC5mKGIsIHZmKTtcclxuXHJcblx0ICAgIHZhciB3ZiA9IGN0eC5yKHhmLCB5Zik7XHJcblxyXG5cdCAgICBpZiAoY2FbMF0gPCAtd2ZbMF0gJiYgY2JbMF0gPCAtd2ZbMF0gfHxcclxuXHQgICAgY2FbMF0gPiB3ZlswXSAmJiBjYlswXSA+IHdmWzBdIHx8XHJcblx0ICAgIGNhWzFdIDwgLXdmWzFdICYmIGNiWzFdIDwgLXdmWzFdIHx8XHJcblx0ICAgIGNhWzFdID4gd2ZbMV0gJiYgY2JbMV0gPiB3ZlsxXSlcclxuXHQgICAge1xyXG5cdCAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgaWYgKGNhWzBdIDw9IHdmWzBdICYmIGNhWzBdID49IC13ZlswXSAmJiBjYVsxXSA8PSB3ZlsxXSAmJiBjYVsxXSA+PSAtd2ZbMV0pXHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cclxuXHQgICAgaWYgKHpmIDwgMC4wMDAwMDEpXHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHJcblx0ICAgIGlmIChjYlswXSA8PSB3ZlswXSAmJiBjYlswXSA+PSAtd2ZbMF0gJiYgY2JbMV0gPD0gd2ZbMV0gJiYgY2JbMV0gPj0gLXdmWzFdKVxyXG5cdCAgICByZXR1cm4gdHJ1ZTtcclxuXHJcblx0ICAgIHZhciBBZiA9IGN0eC5mKGIsIGEpO2N0eC5zKEFmLCBBZiwgemYpO1xyXG5cdCAgICB2YXIgQmYgPSBbLUFmWzFdLCBBZlswXV07XHJcblx0ICAgIHZhciBDZiA9IE1hdGguYWJzKGN0eC5HKEJmLCBjYikpO1xyXG5cclxuXHQgICAgaWYgKE1hdGguYWJzKGN0eC5HKEJmLCB3ZikpID49IENmKSB7XHJcblx0ICAgICAgdmFyIERmID0gWy14ZlsxXSwgeGZbMF1dO1xyXG5cdCAgICAgIGlmIChjdHguRyhEZiwgY2EpICogY3R4LkcoRGYsIGNiKSA8PSAwLjApIHtcclxuXHQgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfSBlbHNlIGlmIChNYXRoLmFicyhjdHguRyhCZiwgW3dmWzBdLCAtd2ZbMV1dKSkgPj0gQ2YpIHtcclxuXHQgICAgICB2YXIgX0RmID0gW3hmWzFdLCB4ZlswXV07XHJcblx0ICAgICAgaWYgKGN0eC5HKF9EZiwgY2EpICogY3R4LkcoX0RmLCBjYikgPD0gMC4wKSB7XHJcblx0ICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy51ZiA9IGZ1bmN0aW9uICh2ZiwgeGYsIHlmLCBhLCBiLCB6ZiwgRWYpIHtcclxuXHQgICAgdmFyIGNhID0gY3R4LmYoYSwgdmYpO1xyXG5cdCAgICB2YXIgY2IgPSBjdHguZihiLCB2Zik7XHJcblxyXG5cdCAgICB2YXIgd2YgPSBjdHgucih4ZiwgeWYpO1xyXG5cclxuXHQgICAgaWYgKHpmIDwgMC4wMDAwMDEpXHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHJcblx0ICAgIGlmIChjYVswXSA8IC13ZlswXSAmJiBjYlswXSA8IC13ZlswXSB8fFxyXG5cdCAgICBjYVswXSA+IHdmWzBdICYmIGNiWzBdID4gd2ZbMF0gfHxcclxuXHQgICAgY2FbMV0gPCAtd2ZbMV0gJiYgY2JbMV0gPCAtd2ZbMV0gfHxcclxuXHQgICAgY2FbMV0gPiB3ZlsxXSAmJiBjYlsxXSA+IHdmWzFdKVxyXG5cdCAgICB7XHJcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgQWYgPSBjdHguZihiLCBhKTtjdHgucyhBZiwgQWYsIHpmKTtcclxuXHQgICAgdmFyIEJmID0gWy1BZlsxXSwgQWZbMF1dO1xyXG5cdCAgICB2YXIgQ2YgPSBNYXRoLmFicyhjdHguRyhCZiwgY2IpKTtcclxuXHJcblx0ICAgIGlmIChFZikge1xyXG5cdCAgICAgIGlmIChNYXRoLmFicyhjdHguRyhCZiwgd2YpKSA+PSBDZikge1xyXG5cdCAgICAgICAgdmFyIERmID0gWy14ZlsxXSwgeGZbMF1dO1xyXG5cdCAgICAgICAgaWYgKGN0eC5HKERmLCBjYSkgKiBjdHguRyhEZiwgY2IpIDw9IDAuMCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0ICAgICAgaWYgKE1hdGguYWJzKGN0eC5HKEJmLCBbd2ZbMF0sIC13ZlsxXV0pKSA+PSBDZikge1xyXG5cdCAgICAgICAgdmFyIF9EZjIgPSBbeGZbMV0sIHhmWzBdXTtcclxuXHQgICAgICAgIGlmIChjdHguRyhfRGYyLCBjYSkgKiBjdHguRyhfRGYyLCBjYikgPD0gMC4wKSB7XHJcblx0ICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLndiID0gZnVuY3Rpb24gKHIsIHgsIHksIHopIHtcclxuXHQgICAgdmFyIHJnYkRpc3AgPSAzICogKHkgKiBjdHgueWQgKyB4KTtcclxuXHQgICAgdmFyIHZpZXcgPSBjdHguemRbel07XHJcblxyXG5cdCAgICByWzBdID0gdmlldy5nZXRVaW50OChyZ2JEaXNwKTtcclxuXHQgICAgclsxXSA9IHZpZXcuZ2V0VWludDgocmdiRGlzcCArIDEpO1xyXG5cdCAgICByWzJdID0gdmlldy5nZXRVaW50OChyZ2JEaXNwICsgMik7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMueGIgPSBmdW5jdGlvbiAociwgSGYpIHtcclxuXHQgICAgaWYgKGN0eC56ZCA9PSBudWxsKSB7XHJcblx0ICAgICAgY3R4LlcociwgMTI4LCAxMjgsIDEyOCk7XHJcblx0ICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICB2YXIgc2NhbGVkUG9zWCA9IEhmWzBdICogY3R4LnlkO1xyXG5cdCAgICB2YXIgc2NhbGVkUG9zWSA9IEhmWzFdICogY3R4LnlkO1xyXG5cdCAgICB2YXIgc2NhbGVkUG9zWiA9IEhmWzJdICogY3R4LnlkO1xyXG5cclxuXHQgICAgdmFyIGZsb29yWCA9IE1hdGguZmxvb3Ioc2NhbGVkUG9zWCk7XHJcblx0ICAgIHZhciBmbG9vclkgPSBNYXRoLmZsb29yKHNjYWxlZFBvc1kpO1xyXG5cdCAgICB2YXIgZmxvb3JaID0gTWF0aC5mbG9vcihzY2FsZWRQb3NaKTtcclxuXHJcblx0ICAgIHZhciBmcmFjWCA9IHNjYWxlZFBvc1ggLSBmbG9vclg7XHJcblx0ICAgIHZhciBmcmFjWSA9IHNjYWxlZFBvc1kgLSBmbG9vclk7XHJcblx0ICAgIHZhciBmcmFjWiA9IHNjYWxlZFBvc1ogLSBmbG9vclo7XHJcblxyXG5cdCAgICB2YXIgbm9pc2VYID0gY3R4LnZiKGZsb29yWCk7XHJcblx0ICAgIHZhciBub2lzZVgxID0gY3R4LnZiKGZsb29yWCArIDEpO1xyXG5cdCAgICB2YXIgbm9pc2VZID0gY3R4LnZiKGZsb29yWSk7XHJcblx0ICAgIHZhciBub2lzZVkxID0gY3R4LnZiKGZsb29yWSArIDEpO1xyXG5cdCAgICB2YXIgbm9pc2VaID0gY3R4LnZiKGZsb29yWik7XHJcblx0ICAgIHZhciBub2lzZVoxID0gY3R4LnZiKGZsb29yWiArIDEpO1xyXG5cclxuXHQgICAgdmFyIHZhbHVlMDAwID0gW10sdmFsdWUwMDEgPSBbXSx2YWx1ZTAxMCA9IFtdLHZhbHVlMDExID0gW10sXHJcblx0ICAgIHZhbHVlMTAwID0gW10sdmFsdWUxMDEgPSBbXSx2YWx1ZTExMCA9IFtdLHZhbHVlMTExID0gW107XHJcblxyXG5cdCAgICBjdHgud2IodmFsdWUwMDAsIG5vaXNlWCwgbm9pc2VZLCBub2lzZVopO1xyXG5cdCAgICBjdHgud2IodmFsdWUwMDEsIG5vaXNlWCwgbm9pc2VZLCBub2lzZVoxKTtcclxuXHQgICAgY3R4LndiKHZhbHVlMDEwLCBub2lzZVgsIG5vaXNlWTEsIG5vaXNlWik7XHJcblx0ICAgIGN0eC53Yih2YWx1ZTAxMSwgbm9pc2VYLCBub2lzZVkxLCBub2lzZVoxKTtcclxuXHQgICAgY3R4LndiKHZhbHVlMTAwLCBub2lzZVgxLCBub2lzZVksIG5vaXNlWik7XHJcblx0ICAgIGN0eC53Yih2YWx1ZTEwMSwgbm9pc2VYMSwgbm9pc2VZLCBub2lzZVoxKTtcclxuXHQgICAgY3R4LndiKHZhbHVlMTEwLCBub2lzZVgxLCBub2lzZVkxLCBub2lzZVopO1xyXG5cdCAgICBjdHgud2IodmFsdWUxMTEsIG5vaXNlWDEsIG5vaXNlWTEsIG5vaXNlWjEpO1xyXG5cclxuXHQgICAgdmFyIHZhbHVlMDAgPSBbXSx2YWx1ZTAxID0gW10sdmFsdWUxMCA9IFtdLHZhbHVlMTEgPSBbXTtcclxuXHQgICAgY3R4LmFiKHZhbHVlMDAsIHZhbHVlMDAwLCB2YWx1ZTAwMSwgZnJhY1opO1xyXG5cdCAgICBjdHguYWIodmFsdWUwMSwgdmFsdWUwMTAsIHZhbHVlMDExLCBmcmFjWik7XHJcblx0ICAgIGN0eC5hYih2YWx1ZTEwLCB2YWx1ZTEwMCwgdmFsdWUxMDEsIGZyYWNaKTtcclxuXHQgICAgY3R4LmFiKHZhbHVlMTEsIHZhbHVlMTEwLCB2YWx1ZTExMSwgZnJhY1opO1xyXG5cclxuXHQgICAgdmFyIHZhbHVlMCA9IFtdLHZhbHVlMSA9IFtdO1xyXG5cdCAgICBjdHguYWIodmFsdWUwLCB2YWx1ZTAwLCB2YWx1ZTAxLCBmcmFjWSk7XHJcblx0ICAgIGN0eC5hYih2YWx1ZTEsIHZhbHVlMTAsIHZhbHVlMTEsIGZyYWNZKTtcclxuXHJcblx0ICAgIGN0eC5hYihyLCB2YWx1ZTAsIHZhbHVlMSwgZnJhY1gpO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLkltYWdlRGVzYyA9IGZ1bmN0aW9uIChpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdCAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblx0ICAgIHRoaXMueCA9IHg7XHJcblx0ICAgIHRoaXMueSA9IHk7XHJcblx0ICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHQgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuUmVuZGVyQ2FsbCA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBudW1JbmRpY2VzLCByZW5kZXJTdHlsZUluZGV4KSB7XHJcblx0ICAgIHRoaXMuc3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcblx0ICAgIHRoaXMubnVtSW5kaWNlcyA9IG51bUluZGljZXM7XHJcblx0ICAgIHRoaXMucmVuZGVyU3R5bGVJbmRleCA9IHJlbmRlclN0eWxlSW5kZXg7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuU3ViUmVjdCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0ICAgIHRoaXMueCA9IHg7XHJcblx0ICAgIHRoaXMueSA9IHk7XHJcblx0ICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHQgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuQ2FtZXJhMkQgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuQ2FtZXJhMkQucHJvdG90eXBlLnRiID0gZnVuY3Rpb24gKEhmLCBOZCkge1xyXG5cdCAgICByZXR1cm4gdHJ1ZTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5DYW1lcmEzRCA9IGZ1bmN0aW9uICggLyoqL3NjcmVlblNpemUsIC8qKi9ob3JpekFuZ2xlKSB7XHJcblx0ICAgIHRoaXMuUWQgPSBjdHguciggLyoqL3NjcmVlblNpemUsIDAuNSk7XHJcblx0ICAgIHRoaXMueiA9IC0oIC8qKi9zY3JlZW5TaXplWzBdICogMC41KSAvIE1hdGgudGFuKGN0eC5pYiggLyoqL2hvcml6QW5nbGUgKiAwLjUpKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5DYW1lcmEzRC5wcm90b3R5cGUuIC8qKi90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoIC8qKi9wb3MsIC8qKi9zaXplKSB7XHJcblx0ICAgIGlmICggLyoqL3Bvc1syXSA8IHRoaXMueilcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHQgICAgdmFyIHNjYWxlID0gLXRoaXMueiAvICggLyoqL3Bvc1syXSAtIHRoaXMueik7XHJcblx0ICAgIGN0eC5hKCAvKiovcG9zLCBjdHgucihjdHguZiggLyoqL3BvcywgdGhpcy5RZCksIHNjYWxlKSwgdGhpcy5RZCk7XHJcblx0ICAgIGN0eC5xKCAvKiovc2l6ZSwgLyoqL3NpemUsIHNjYWxlKTtcclxuXHJcblx0ICAgIHJldHVybiB0cnVlO1xyXG5cdCAgfTtcclxuXHJcblx0ICB0aGlzLnpkID0gbnVsbDtcclxuXHQgIHRoaXMueWQgPSAwO1xyXG5cclxuXHQgIHRoaXMuaW5pdGlhbGl6ZU5vaXNlID0gZnVuY3Rpb24gKHBhdGgsIG9ubG9hZGNhbGxiYWNrLCBvbmZhaWxjYWxsYmFjaykge1xyXG5cclxuXHQgICAgaWYgKCFwYXRoKSB7XHJcblx0ICAgICAgYWxlcnQoXCJwYXRoIHNob3VsZCBiZSBkZWZpbmVkXCIpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZiAodGhpcy56ZCAhPSBudWxsKSB7XHJcblx0ICAgICAgb25sb2FkY2FsbGJhY2soKTtcclxuXHQgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGlmIChwYXRoID09IG51bGwgfHwgcGF0aCA9PSB1bmRlZmluZWQpXHJcblx0ICAgIHBhdGggPSB0aGlzLmRlZmF1bHRQYXRoO1xyXG5cclxuXHQgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHQgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIHBhdGggKyBcIm5ldXRyaW5vcGFydGljbGVzLm5vaXNlLmJpblwiLCB0cnVlKTtcclxuXHQgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XHJcblx0ICAgIHJlcXVlc3QuY3R4ID0gdGhpcztcclxuXHQgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcblx0ICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwIHx8IHJlcXVlc3Quc3RhdHVzID09IDMwNCkge1xyXG5cdCAgICAgICAgICB2YXIgemQgPSByZXF1ZXN0LnJlc3BvbnNlO1xyXG5cdCAgICAgICAgICB2YXIgY3R4ID0gcmVxdWVzdC5jdHg7XHJcblxyXG5cdCAgICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyh6ZCwgMCwgNCk7XHJcblx0ICAgICAgICAgIHZhciBwbGFuZVNpemUgPSB2aWV3LmdldFVpbnQzMigwLCB0cnVlKTtcclxuXHJcblx0ICAgICAgICAgIGN0eC56ZCA9IFtdO1xyXG5cdCAgICAgICAgICBjdHgueWQgPSBwbGFuZVNpemU7XHJcblxyXG5cdCAgICAgICAgICBmb3IgKHZhciBwbGFuZUluZGV4ID0gMDsgcGxhbmVJbmRleCA8IHBsYW5lU2l6ZTsgKytwbGFuZUluZGV4KSB7XHJcblx0ICAgICAgICAgICAgY3R4LnpkW3BsYW5lSW5kZXhdID0gbmV3IERhdGFWaWV3KHpkLFxyXG5cdCAgICAgICAgICAgIDQgLypOZCovICsgMyAqIHBsYW5lU2l6ZSAqIHBsYW5lU2l6ZSAqIHBsYW5lSW5kZXgpO1xyXG5cdCAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICBpZiAob25sb2FkY2FsbGJhY2spXHJcblx0ICAgICAgICAgIG9ubG9hZGNhbGxiYWNrKCk7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICBpZiAob25mYWlsY2FsbGJhY2spXHJcblx0ICAgICAgICAgIG9uZmFpbGNhbGxiYWNrKCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgcmVxdWVzdC5zZW5kKCk7XHJcblx0ICB9O1xyXG5cclxuXHQgIHRoaXMuTm9pc2VHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdCAgICB2YXIgY2F0bXVsbFJvbV8gPSBmdW5jdGlvbiBjYXRtdWxsUm9tXyhwMCwgcDEsIHAyLCBwMywgdCkge1xyXG5cdCAgICAgIHJldHVybiAwLjUgKiAoMi4wICogcDEgKyAoLXAwICsgcDIpICogdCArICgyLjAgKiBwMCAtIDUuMCAqIHAxICsgNC4wICogcDIgLSBwMykgKiB0ICogdCArXHJcblx0ICAgICAgKC1wMCArIDMuMCAqIHAxIC0gMy4wICogcDIgKyBwMykgKiAodCAqIHQgKiB0KSk7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB2YXIgY2F0bXVsbFJvbXYzXyA9IGZ1bmN0aW9uIGNhdG11bGxSb212M18ocDAsIHAxLCBwMiwgcDMsIHQpIHtcclxuXHQgICAgICByZXR1cm4gW1xyXG5cdCAgICAgIGNhdG11bGxSb21fKHAwWzBdLCBwMVswXSwgcDJbMF0sIHAzWzBdLCB0KSxcclxuXHQgICAgICBjYXRtdWxsUm9tXyhwMFsxXSwgcDFbMV0sIHAyWzFdLCBwM1sxXSwgdCksXHJcblx0ICAgICAgY2F0bXVsbFJvbV8ocDBbMl0sIHAxWzJdLCBwMlsyXSwgcDNbMl0sIHQpXTtcclxuXHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB2YXIgY2xhbXBfID0gZnVuY3Rpb24gY2xhbXBfKGEsIGZyb20sIHRvKSB7XHJcblx0ICAgICAgcmV0dXJuIGEgPCBmcm9tID8gZnJvbSA6IGEgPiB0byA/IHRvIDogYTtcclxuXHQgICAgfTtcclxuXHJcblx0ICAgIHZhciBpbWFnZVNpemUgPSA2NDtcclxuXHQgICAgdmFyIGltYWdlID0gW107XHJcblx0ICAgIHZhciB0ZW1wQnVmZmVyID0gW107XHJcblx0ICAgIHZhciB0YXVzR2VuZXJhdG9yID0gbmV3IGN0eC50YXVzODgoMTIwKTsgLy8gMTIwIC0gaGFyZGNvZGVkIHN0YXJ0aW5nIHNlZWRcclxuXHQgICAgdmFyIHJhbmQgPSBmdW5jdGlvbiByYW5kKCkge3JldHVybiB0YXVzR2VuZXJhdG9yLnJhbmQoKTt9O1xyXG5cdCAgICB2YXIgYW1wID0gMC43OyAvLyBoYXJkY29kZWQgYW1wbGl0dWRlIG9mIHBlcmxpbiB6ZFxyXG5cdCAgICB2YXIgZmFkZURlZ3JlZSA9IDEuMjsgLy8gaGFyZGNvZGVkIGZhZGUgZGVncmVlIG9mIGVhY2ggb2N0YXZlXHJcblx0ICAgIHZhciBwcmV2U3RlcCA9IGltYWdlU2l6ZTtcclxuXHJcblx0ICAgIHZhciBzdGVwLCBOZCwgb2N0U2l6ZSwgb2N0U2l6ZTIsIG9jdE1hc2tTaXplLCBvY3RQaXhlbHMsIG9jdFosIG9jdFk7IC8vIG1peCBzdGVwIHZhcmlhYmxlc1xyXG5cclxuXHQgICAgdmFyIG51bU1peFN0ZXBJdGVyYXRpb25zID0gMDtcclxuXHQgICAgdmFyIG1peFN0ZXBJdGVyYXRpb24gPSAwO1xyXG5cclxuXHQgICAgZm9yICh2YXIgaSA9IHByZXZTdGVwID4+PiAxOyBpID4gMDsgaSA+Pj49IDEpIHtcclxuXHQgICAgICB2YXIgX29jdFNpemUgPSBNYXRoLmZsb29yKGltYWdlU2l6ZSAvIGkpO1xyXG5cdCAgICAgIG51bU1peFN0ZXBJdGVyYXRpb25zICs9IF9vY3RTaXplICogX29jdFNpemU7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHZhciBTdGF0ZXMgPSB7XHJcblx0ICAgICAgSU5JVElBTF9GSUxMOiAwLFxyXG5cdCAgICAgIE1JWF9TVEVQX0lOSVQ6IDEsXHJcblx0ICAgICAgTUlYX1NURVBfUFJPQ0VTUzogMixcclxuXHQgICAgICBTQ0FMSU5HOiAzLFxyXG5cdCAgICAgIERBVEFfVklFV1M6IDQsXHJcblx0ICAgICAgRklOSVNIRUQ6IDUgfTtcclxuXHJcblxyXG5cdCAgICB2YXIgUHJvZ3Jlc3MgPSB7XHJcblx0ICAgICAgSU5JVDogMC4wMSxcclxuXHQgICAgICBNSVg6IDAuOSxcclxuXHQgICAgICBTQ0FMSU5HOiAwLjk1LFxyXG5cdCAgICAgIERBVEFfVklFV1M6IDEuMCB9O1xyXG5cclxuXHJcblx0ICAgIHZhciBzdGF0ZSA9IFN0YXRlcy5JTklUSUFMX0ZJTEw7XHJcblxyXG5cdCAgICB0aGlzLnByb2dyZXNzID0gMC4wO1xyXG5cclxuXHQgICAgdmFyIGluaXRpYWxGaWxsID0gZnVuY3Rpb24gaW5pdGlhbEZpbGwoKSB7XHJcblx0ICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBpbWFnZVNpemU7ICsreikge1xyXG5cdCAgICAgICAgdmFyIGltYWdlWiA9IGltYWdlW3pdID0gW107XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBpbWFnZVNpemU7ICsreSkge1xyXG5cdCAgICAgICAgICB2YXIgaW1hZ2VaWSA9IGltYWdlWlt5XSA9IFtdO1xyXG5cclxuXHQgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBpbWFnZVNpemU7ICsreCkge1xyXG5cdCAgICAgICAgICAgIHZhciBpbWFnZVpZWCA9IGltYWdlWllbeF0gPSBbMC4wLCAwLjAsIDAuMF07XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHN0YXRlID0gU3RhdGVzLk1JWF9TVEVQX0lOSVQ7XHJcblx0ICAgICAgdGhpcy5wcm9ncmVzcyA9IFByb2dyZXNzLklOSVQ7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB2YXIgbWl4U3RlcEluaXQgPSBmdW5jdGlvbiBtaXhTdGVwSW5pdCgpIHtcclxuXHJcblx0ICAgICAgc3RlcCA9IHByZXZTdGVwID4+PiAxO1xyXG5cdCAgICAgIE5kID0gaW1hZ2VTaXplO1xyXG5cdCAgICAgIG9jdFNpemUgPSBNYXRoLmZsb29yKE5kIC8gc3RlcCk7XHJcblx0ICAgICAgb2N0U2l6ZTIgPSBvY3RTaXplICogb2N0U2l6ZTtcclxuXHQgICAgICBvY3RNYXNrU2l6ZSA9IE1hdGgubWF4KG9jdFNpemUgLSAxLCAxKTtcclxuXHQgICAgICBvY3RQaXhlbHMgPSBvY3RTaXplICogb2N0U2l6ZSAqIG9jdFNpemU7XHJcblx0ICAgICAgb2N0WiA9IDA7XHJcblx0ICAgICAgb2N0WSA9IDA7XHJcblxyXG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2N0UGl4ZWxzOyArK2kpIHtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbaV0gPSBbXTtcclxuXHQgICAgICAgIC8vIG9yZGVyIGlzIGludmVydGVkIHRvIHNhdGlzZnkgYysrIG9ic29sZXRlIG9yZGVyXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW2ldWzJdID0gcmFuZCgpICogMi4wIC0gMS4wO1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltpXVsxXSA9IHJhbmQoKSAqIDIuMCAtIDEuMDtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbaV1bMF0gPSByYW5kKCkgKiAyLjAgLSAxLjA7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBzdGF0ZSA9IFN0YXRlcy5NSVhfU1RFUF9QUk9DRVNTO1xyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgdmFyIG1peFN0ZXBQcm9jZXNzID0gZnVuY3Rpb24gbWl4U3RlcFByb2Nlc3MoKSB7XHJcblx0ICAgICAgZm9yICh2YXIgb2N0WCA9IDA7IG9jdFggPCBvY3RTaXplOyArK29jdFgpIHtcclxuXHQgICAgICAgIHZhciBvY3RaMCA9IG9jdFogLSAxID4+PiAwICYgb2N0TWFza1NpemU7XHJcblx0ICAgICAgICB2YXIgb2N0WjEgPSBvY3RaID4+PiAwICYgb2N0TWFza1NpemU7XHJcblx0ICAgICAgICB2YXIgb2N0WjIgPSBvY3RaICsgMSA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cdCAgICAgICAgdmFyIG9jdFozID0gb2N0WiArIDIgPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHJcblx0ICAgICAgICB2YXIgb2N0WTAgPSBvY3RZIC0gMSA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cdCAgICAgICAgdmFyIG9jdFkxID0gb2N0WSA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cdCAgICAgICAgdmFyIG9jdFkyID0gb2N0WSArIDEgPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHQgICAgICAgIHZhciBvY3RZMyA9IG9jdFkgKyAyID4+PiAwICYgb2N0TWFza1NpemU7XHJcblxyXG5cdCAgICAgICAgdmFyIG9jdFgwID0gb2N0WCAtIDEgPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHQgICAgICAgIHZhciBvY3RYMSA9IG9jdFggPj4+IDAgJiBvY3RNYXNrU2l6ZTtcclxuXHQgICAgICAgIHZhciBvY3RYMiA9IG9jdFggKyAxID4+PiAwICYgb2N0TWFza1NpemU7XHJcblx0ICAgICAgICB2YXIgb2N0WDMgPSBvY3RYICsgMiA+Pj4gMCAmIG9jdE1hc2tTaXplO1xyXG5cclxuXHQgICAgICAgIHZhciB2YWx1ZXMgPSAvL3p5eFxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFowICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjAgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMCAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDNdXV0sXHJcblxyXG5cclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMCAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjEgKiBvY3RTaXplMiArIG9jdFkxICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMSAqIG9jdFNpemUyICsgb2N0WTIgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoxICogb2N0U2l6ZTIgKyBvY3RZMyAqIG9jdFNpemUgKyBvY3RYM11dXSxcclxuXHJcblxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkwICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMiAqIG9jdFNpemUyICsgb2N0WTEgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFoyICogb2N0U2l6ZTIgKyBvY3RZMiAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjIgKiBvY3RTaXplMiArIG9jdFkzICogb2N0U2l6ZSArIG9jdFgzXV1dLFxyXG5cclxuXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTAgKiBvY3RTaXplICsgb2N0WDNdXSxcclxuXHJcblx0ICAgICAgICBbXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMF0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMV0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYMl0sXHJcblx0ICAgICAgICB0ZW1wQnVmZmVyW29jdFozICogb2N0U2l6ZTIgKyBvY3RZMSAqIG9jdFNpemUgKyBvY3RYM11dLFxyXG5cclxuXHQgICAgICAgIFtcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgwXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgxXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgyXSxcclxuXHQgICAgICAgIHRlbXBCdWZmZXJbb2N0WjMgKiBvY3RTaXplMiArIG9jdFkyICogb2N0U2l6ZSArIG9jdFgzXV0sXHJcblxyXG5cdCAgICAgICAgW1xyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDBdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDFdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDJdLFxyXG5cdCAgICAgICAgdGVtcEJ1ZmZlcltvY3RaMyAqIG9jdFNpemUyICsgb2N0WTMgKiBvY3RTaXplICsgb2N0WDNdXV1dO1xyXG5cclxuXHJcblxyXG5cclxuXHQgICAgICAgIGZvciAodmFyIGluWiA9IDA7IGluWiA8IHN0ZXA7ICsraW5aKSB7XHJcblx0ICAgICAgICAgIHZhciBpbnRlcnBaID0gaW5aIC8gc3RlcDtcclxuXHQgICAgICAgICAgdmFyIGltYWdlWiA9IG9jdFogKiBzdGVwICsgaW5aO1xyXG5cclxuXHQgICAgICAgICAgdmFyIHZhbHVlc1AgPSAvL3l4XHJcblx0ICAgICAgICAgIFtcclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVswXVswXSwgdmFsdWVzWzFdWzBdWzBdLCB2YWx1ZXNbMl1bMF1bMF0sIHZhbHVlc1szXVswXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzBdWzFdLCB2YWx1ZXNbMV1bMF1bMV0sIHZhbHVlc1syXVswXVsxXSwgdmFsdWVzWzNdWzBdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMF1bMl0sIHZhbHVlc1sxXVswXVsyXSwgdmFsdWVzWzJdWzBdWzJdLCB2YWx1ZXNbM11bMF1bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVswXVszXSwgdmFsdWVzWzFdWzBdWzNdLCB2YWx1ZXNbMl1bMF1bM10sIHZhbHVlc1szXVswXVszXSwgaW50ZXJwWildLFxyXG5cclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsxXVswXSwgdmFsdWVzWzFdWzFdWzBdLCB2YWx1ZXNbMl1bMV1bMF0sIHZhbHVlc1szXVsxXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzFdWzFdLCB2YWx1ZXNbMV1bMV1bMV0sIHZhbHVlc1syXVsxXVsxXSwgdmFsdWVzWzNdWzFdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMV1bMl0sIHZhbHVlc1sxXVsxXVsyXSwgdmFsdWVzWzJdWzFdWzJdLCB2YWx1ZXNbM11bMV1bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsxXVszXSwgdmFsdWVzWzFdWzFdWzNdLCB2YWx1ZXNbMl1bMV1bM10sIHZhbHVlc1szXVsxXVszXSwgaW50ZXJwWildLFxyXG5cclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVswXSwgdmFsdWVzWzFdWzJdWzBdLCB2YWx1ZXNbMl1bMl1bMF0sIHZhbHVlc1szXVsyXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzJdWzFdLCB2YWx1ZXNbMV1bMl1bMV0sIHZhbHVlc1syXVsyXVsxXSwgdmFsdWVzWzNdWzJdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMl1bMl0sIHZhbHVlc1sxXVsyXVsyXSwgdmFsdWVzWzJdWzJdWzJdLCB2YWx1ZXNbM11bMl1bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVszXSwgdmFsdWVzWzFdWzJdWzNdLCB2YWx1ZXNbMl1bMl1bM10sIHZhbHVlc1szXVsyXVszXSwgaW50ZXJwWildLFxyXG5cclxuXHQgICAgICAgICAgW1xyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVswXSwgdmFsdWVzWzFdWzNdWzBdLCB2YWx1ZXNbMl1bM11bMF0sIHZhbHVlc1szXVszXVswXSwgaW50ZXJwWiksXHJcblx0ICAgICAgICAgIGNhdG11bGxSb212M18odmFsdWVzWzBdWzJdWzFdLCB2YWx1ZXNbMV1bM11bMV0sIHZhbHVlc1syXVszXVsxXSwgdmFsdWVzWzNdWzNdWzFdLCBpbnRlcnBaKSxcclxuXHQgICAgICAgICAgY2F0bXVsbFJvbXYzXyh2YWx1ZXNbMF1bMl1bMl0sIHZhbHVlc1sxXVszXVsyXSwgdmFsdWVzWzJdWzNdWzJdLCB2YWx1ZXNbM11bM11bMl0sIGludGVycFopLFxyXG5cdCAgICAgICAgICBjYXRtdWxsUm9tdjNfKHZhbHVlc1swXVsyXVszXSwgdmFsdWVzWzFdWzNdWzNdLCB2YWx1ZXNbMl1bM11bM10sIHZhbHVlc1szXVszXVszXSwgaW50ZXJwWildXTtcclxuXHJcblxyXG5cclxuXHQgICAgICAgICAgZm9yICh2YXIgaW5ZID0gMDsgaW5ZIDwgc3RlcDsgKytpblkpIHtcclxuXHQgICAgICAgICAgICB2YXIgaW50ZXJwWSA9IGluWSAvIHN0ZXA7XHJcblx0ICAgICAgICAgICAgdmFyIGltYWdlWSA9IG9jdFkgKiBzdGVwICsgaW5ZO1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgdmFsdWUwID0gY2F0bXVsbFJvbXYzXyh2YWx1ZXNQWzBdWzBdLCB2YWx1ZXNQWzFdWzBdLCB2YWx1ZXNQWzJdWzBdLFxyXG5cdCAgICAgICAgICAgIHZhbHVlc1BbM11bMF0sIGludGVycFkpO1xyXG5cdCAgICAgICAgICAgIHZhciB2YWx1ZTEgPSBjYXRtdWxsUm9tdjNfKHZhbHVlc1BbMF1bMV0sIHZhbHVlc1BbMV1bMV0sIHZhbHVlc1BbMl1bMV0sXHJcblx0ICAgICAgICAgICAgdmFsdWVzUFszXVsxXSwgaW50ZXJwWSk7XHJcblx0ICAgICAgICAgICAgdmFyIHZhbHVlMiA9IGNhdG11bGxSb212M18odmFsdWVzUFswXVsyXSwgdmFsdWVzUFsxXVsyXSwgdmFsdWVzUFsyXVsyXSxcclxuXHQgICAgICAgICAgICB2YWx1ZXNQWzNdWzJdLCBpbnRlcnBZKTtcclxuXHQgICAgICAgICAgICB2YXIgdmFsdWUzID0gY2F0bXVsbFJvbXYzXyh2YWx1ZXNQWzBdWzNdLCB2YWx1ZXNQWzFdWzNdLCB2YWx1ZXNQWzJdWzNdLFxyXG5cdCAgICAgICAgICAgIHZhbHVlc1BbM11bM10sIGludGVycFkpO1xyXG5cclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpblggPSAwOyBpblggPCBzdGVwOyArK2luWCkge1xyXG5cdCAgICAgICAgICAgICAgdmFyIGludGVycFggPSBpblggLyBzdGVwO1xyXG5cdCAgICAgICAgICAgICAgdmFyIGltYWdlWCA9IG9jdFggKiBzdGVwICsgaW5YO1xyXG5cclxuXHQgICAgICAgICAgICAgIHZhciBvY3RSZXN1bHQgPSBjYXRtdWxsUm9tdjNfKHZhbHVlMCwgdmFsdWUxLCB2YWx1ZTIsIHZhbHVlMywgaW50ZXJwWCk7XHJcblx0ICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY3R4LmQoY3R4LnYob2N0UmVzdWx0LCBhbXApLCBpbWFnZVtpbWFnZVpdW2ltYWdlWV1baW1hZ2VYXSk7XHJcblx0ICAgICAgICAgICAgICB2YXIgY2xhbXBlZFJlc3VsdCA9IFtcclxuXHQgICAgICAgICAgICAgIGNsYW1wXyhyZXN1bHRbMF0sIC0xLjAsIDEuMCksXHJcblx0ICAgICAgICAgICAgICBjbGFtcF8ocmVzdWx0WzFdLCAtMS4wLCAxLjApLFxyXG5cdCAgICAgICAgICAgICAgY2xhbXBfKHJlc3VsdFsyXSwgLTEuMCwgMS4wKV07XHJcblxyXG5cclxuXHQgICAgICAgICAgICAgIGltYWdlW2ltYWdlWl1baW1hZ2VZXVtpbWFnZVhdID0gY2xhbXBlZFJlc3VsdDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIG1peFN0ZXBJdGVyYXRpb24rKztcclxuXHQgICAgICB0aGlzLnByb2dyZXNzID0gUHJvZ3Jlc3MuSU5JVCArIChQcm9ncmVzcy5NSVggLSBQcm9ncmVzcy5JTklUKSAqIChtaXhTdGVwSXRlcmF0aW9uIC8gbnVtTWl4U3RlcEl0ZXJhdGlvbnMpO1xyXG5cclxuXHQgICAgICBvY3RZKys7XHJcblx0ICAgICAgaWYgKG9jdFkgPj0gb2N0U2l6ZSkge1xyXG5cdCAgICAgICAgb2N0WSA9IDA7XHJcblx0ICAgICAgICBvY3RaKys7XHJcblx0ICAgICAgICBpZiAob2N0WiA+PSBvY3RTaXplKSB7XHJcblx0ICAgICAgICAgIG9jdFogPSAwO1xyXG5cclxuXHQgICAgICAgICAgcHJldlN0ZXAgPSBzdGVwO1xyXG5cdCAgICAgICAgICBhbXAgPSBNYXRoLnBvdyhhbXAsIGZhZGVEZWdyZWUpO1xyXG5cclxuXHQgICAgICAgICAgaWYgKHByZXZTdGVwIDw9IDEpIHtcclxuXHQgICAgICAgICAgICBzdGF0ZSA9IFN0YXRlcy5TQ0FMSU5HO1xyXG5cdCAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBQcm9ncmVzcy5NSVg7XHJcblx0ICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgc3RhdGUgPSBTdGF0ZXMuTUlYX1NURVBfSU5JVDtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfTtcclxuXHJcblx0ICAgIC8vIGhhcmRjb2RlZCBzY2FsaW5nIG9mIHRoZSBpbWFnZSB0byBtYWtlIGl0IG1vcmUgc3ltZXRocmljXHJcblx0ICAgIHZhciBzY2FsaW5nID0gZnVuY3Rpb24gc2NhbGluZygpIHtcclxuXHQgICAgICB2YXIgbG93ID0gWy0xLjAsIC0xLjAsIC0xLjBdO1xyXG5cdCAgICAgIHZhciBoaWdoID0gWzAuNSwgMC43LCAxLjBdO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IGltYWdlU2l6ZTsgKyt6KSB7XHJcblx0ICAgICAgICB2YXIgaW1hZ2VaID0gaW1hZ2Vbel07XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBpbWFnZVNpemU7ICsreSkge1xyXG5cdCAgICAgICAgICB2YXIgaW1hZ2VaWSA9IGltYWdlWlt5XTtcclxuXHJcblx0ICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgaW1hZ2VTaXplOyArK3gpIHtcclxuXHQgICAgICAgICAgICB2YXIgaW1hZ2VaWVggPSBpbWFnZVpZW3hdO1xyXG5cdCAgICAgICAgICAgIGltYWdlWllYWzBdID0gY3R4LlgobG93WzBdLCBoaWdoWzBdLCBpbWFnZVpZWFswXSAqIDAuNSArIDAuNSk7XHJcblx0ICAgICAgICAgICAgaW1hZ2VaWVhbMV0gPSBjdHguWChsb3dbMV0sIGhpZ2hbMV0sIGltYWdlWllYWzFdICogMC41ICsgMC41KTtcclxuXHQgICAgICAgICAgICBpbWFnZVpZWFsyXSA9IGN0eC5YKGxvd1syXSwgaGlnaFsyXSwgaW1hZ2VaWVhbMl0gKiAwLjUgKyAwLjUpO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBzdGF0ZSA9IFN0YXRlcy5EQVRBX1ZJRVdTO1xyXG5cdCAgICAgIHRoaXMucHJvZ3Jlc3MgPSBQcm9ncmVzcy5TQ0FMSU5HO1xyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgLy8gZmlsbGluZyB6ZCBEYXRhVmlld3NcclxuXHQgICAgdmFyIGRhdGFWaWV3cyA9IGZ1bmN0aW9uIGRhdGFWaWV3cygpIHtcclxuXHQgICAgICBjdHgueWQgPSBpbWFnZVNpemU7XHJcblx0ICAgICAgY3R4LnpkID0gW107XHJcblxyXG5cdCAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgaW1hZ2VTaXplOyArK3opIHtcclxuXHQgICAgICAgIHZhciBpbWFnZVogPSBpbWFnZVt6XTtcclxuXHJcblx0ICAgICAgICB2YXIgcGxhbmUgPSBuZXcgQXJyYXlCdWZmZXIoaW1hZ2VTaXplICogaW1hZ2VTaXplICogMyk7XHJcblx0ICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhwbGFuZSk7XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBpbWFnZVNpemU7ICsreSkge1xyXG5cdCAgICAgICAgICB2YXIgaW1hZ2VaWSA9IGltYWdlWlt5XTtcclxuXHJcblx0ICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgaW1hZ2VTaXplOyArK3gpIHtcclxuXHQgICAgICAgICAgICB2YXIgaW1hZ2VaWVggPSBpbWFnZVpZW3hdO1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgcmdiT2Zmc2V0ID0gKHkgKiBpbWFnZVNpemUgKyB4KSAqIDM7XHJcblx0ICAgICAgICAgICAgdmlldy5zZXRVaW50OChyZ2JPZmZzZXQgKyAwLFxyXG5cdCAgICAgICAgICAgIE1hdGguZmxvb3IoY2xhbXBfKDI1Ni4wICogKGltYWdlWllYWzBdICogMC41ICsgMC41KSAtIDAuNSwgMC4wLCAyNTUuMCkpKTtcclxuXHQgICAgICAgICAgICB2aWV3LnNldFVpbnQ4KHJnYk9mZnNldCArIDEsXHJcblx0ICAgICAgICAgICAgTWF0aC5mbG9vcihjbGFtcF8oMjU2LjAgKiAoaW1hZ2VaWVhbMV0gKiAwLjUgKyAwLjUpIC0gMC41LCAwLjAsIDI1NS4wKSkpO1xyXG5cdCAgICAgICAgICAgIHZpZXcuc2V0VWludDgocmdiT2Zmc2V0ICsgMixcclxuXHQgICAgICAgICAgICBNYXRoLmZsb29yKGNsYW1wXygyNTYuMCAqIChpbWFnZVpZWFsyXSAqIDAuNSArIDAuNSkgLSAwLjUsIDAuMCwgMjU1LjApKSk7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBjdHguemRbel0gPSB2aWV3O1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgc3RhdGUgPSBTdGF0ZXMuRklOSVNIRUQ7XHJcblx0ICAgICAgdGhpcy5wcm9ncmVzcyA9IFByb2dyZXNzLkRBVEFfVklFV1M7XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICB0aGlzLnN0ZXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgc3dpdGNoIChzdGF0ZSkge1xyXG5cdCAgICAgICAgY2FzZSBTdGF0ZXMuSU5JVElBTF9GSUxMOmluaXRpYWxGaWxsLmNhbGwodGhpcyk7YnJlYWs7XHJcblx0ICAgICAgICBjYXNlIFN0YXRlcy5NSVhfU1RFUF9JTklUOm1peFN0ZXBJbml0LmNhbGwodGhpcyk7YnJlYWs7XHJcblx0ICAgICAgICBjYXNlIFN0YXRlcy5NSVhfU1RFUF9QUk9DRVNTOm1peFN0ZXBQcm9jZXNzLmNhbGwodGhpcyk7YnJlYWs7XHJcblx0ICAgICAgICBjYXNlIFN0YXRlcy5TQ0FMSU5HOnNjYWxpbmcuY2FsbCh0aGlzKTticmVhaztcclxuXHQgICAgICAgIGNhc2UgU3RhdGVzLkRBVEFfVklFV1M6ZGF0YVZpZXdzLmNhbGwodGhpcyk7YnJlYWs7fVxyXG5cclxuXHJcblx0ICAgICAgcmV0dXJuIHN0YXRlID09IFN0YXRlcy5GSU5JU0hFRDtcclxuXHQgICAgfTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5jZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdCAgdGhpcy5jZi53aWR0aCA9IDA7XHJcblx0ICB0aGlzLmNmLmhlaWdodCA9IDA7XHJcblx0ICB0aGlzLmJmID0gdGhpcy5jZi5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHQgIHRoaXMuYWYgPSBmdW5jdGlvbiAobWluV2lkdGgsIG1pbkhlaWdodCkge1xyXG5cdCAgICBpZiAodGhpcy5jZi53aWR0aCA8IG1pbldpZHRoIHx8IHRoaXMuY2YuaGVpZ2h0IDwgbWluSGVpZ2h0KSB7XHJcblx0ICAgICAgdGhpcy5jZi53aWR0aCA9IG1pbldpZHRoO1xyXG5cdCAgICAgIHRoaXMuY2YuaGVpZ2h0ID0gbWluSGVpZ2h0O1xyXG5cdCAgICAgIHRoaXMuYmYgPSB0aGlzLmNmLmdldENvbnRleHQoJzJkJyk7XHJcblx0ICAgIH1cclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5lZmZlY3RzID0gW107XHJcblxyXG5cdCAgdGhpcy5sb2FkRWZmZWN0ID0gZnVuY3Rpb24gKGVmZmVjdEZpbGVQYXRoLCBvblN1Y2Nlc3NGdW5jLCBvbkZhaWxGdW5jKSB7XHJcblxyXG5cdCAgICBpZiAodGhpcy5lZmZlY3RzW2VmZmVjdEZpbGVQYXRoXSAhPSB1bmRlZmluZWQpIHtcclxuXHJcblx0ICAgICAgdmFyIGVmZmVjdE1vZGVsID0gdGhpcy5lZmZlY3RzW2VmZmVjdEZpbGVQYXRoXTtcclxuXHJcblx0ICAgICAgaWYgKGVmZmVjdE1vZGVsIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHQgICAgICAgIGVmZmVjdE1vZGVsW2VmZmVjdE1vZGVsLmxlbmd0aF0gPSBbb25TdWNjZXNzRnVuYywgb25GYWlsRnVuY107XHJcblx0ICAgICAgICByZXR1cm47XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBvblN1Y2Nlc3NGdW5jKGVmZmVjdE1vZGVsKTtcclxuXHQgICAgICByZXR1cm47XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHRoaXMuZWZmZWN0c1tlZmZlY3RGaWxlUGF0aF0gPSBbW29uU3VjY2Vzc0Z1bmMsIG9uRmFpbEZ1bmNdXTtcclxuXHJcblx0ICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0ICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBlZmZlY3RGaWxlUGF0aCwgdHJ1ZSk7XHJcblx0ICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJ0ZXh0XCI7XHJcblx0ICAgIHJlcXVlc3QuY3R4ID0gdGhpcztcclxuXHQgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcblx0ICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jdHguZWZmZWN0c1tlZmZlY3RGaWxlUGF0aF07XHJcblxyXG5cdCAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDMwMCB8fCByZXF1ZXN0LnN0YXR1cyA9PSAzMDQpIHtcclxuXHJcblx0ICAgICAgICAgIHZhciBldmFsVGV4dCA9IFwiKGZ1bmN0aW9uKGN0eCkge1xcblwiICtcclxuXHQgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgK1xyXG5cdCAgICAgICAgICBcIlxcbnJldHVybiBuZXcgTmV1dHJpbm9FZmZlY3QoY3R4KTtcXG59KSh0aGlzLmN0eCk7XCI7XHJcblx0ICAgICAgICAgIHZhciBlZmZlY3RNb2RlbCA9IGV2YWwoZXZhbFRleHQpO1xyXG5cdCAgICAgICAgICB0aGlzLmN0eC5lZmZlY3RzW2VmZmVjdEZpbGVQYXRoXSA9IGVmZmVjdE1vZGVsO1xyXG5cclxuXHQgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblx0ICAgICAgICAgICAgY2FsbGJhY2tbMF0oZWZmZWN0TW9kZWwpO1xyXG5cdCAgICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuXHQgICAgICAgICAgICBjYWxsYmFja1sxXSgpO1xyXG5cdCAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHQgIH07XHJcblxyXG5cdCAgdGhpcy5yZW1vdmVFZmZlY3QgPSBmdW5jdGlvbiAoZWZmZWN0RmlsZVBhdGgpIHtcclxuXHQgICAgZGVsZXRlIHRoaXMuZWZmZWN0c1tlZmZlY3RGaWxlUGF0aF07XHJcblx0ICB9O1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0cy5Db250ZXh0ID0gQ29udGV4dDtcclxuXHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbn0pKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5ldXRyaW5vcGFydGljbGVzLnVtZC5qcy5tYXBcclxuIl19