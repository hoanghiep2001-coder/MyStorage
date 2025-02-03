// c3ebcd02-0d7c-41bb-b884-16930ec48c46


(function (root, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(['exports'], function (exports) {
            (root.NeutrinoEffect = exports)['Fireworks02'] = factory();
        });
    } else {
        var namespace = (root.NeutrinoEffect || (root.NeutrinoEffect = {}));
        namespace.__last__ = namespace['Fireworks02'] = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

function Fireworks02(ctx) {
	var Db = this;

	var ne = function (Ld, Bd) {
		this.Ld = Ld;
		this.Bd = Bd;

		if (this.Bd.we.pe.length > 0) {
			this.we = this.Bd.we.pe[0];

			this.Lc = [ne.prototype.Ec,
				ne.prototype.Fc][this.we.xe];
		}
		else
			this.we = null;
	}

	ne.prototype = {
		Ec: function (fe, Ab, Xb) {
			var Gc = ctx.ib(Xb.Md);
			var Hc = Math.cos(Gc);
			var Ic = Math.sin(Gc);
			var ye = ctx.Ae(Xb.Nd[0]);
			var ze = ctx.Ae(Xb.Nd[1]);
			fe./**/transform(ye * Hc, ye * Ic, ze * -Ic, ze * Hc, Ab[0], Ab[1]);
		},

		Fc: function (fe, Ab, Xb) {
			var q = Xb.Mc;
			var z2 = 2.0 * q[2] * q[2];
			var xy = 2.0 * q[0] * q[1];
			var wz = 2.0 * q[3] * q[2];
			var ye = ctx.Ae(Xb.Nd[0]);
			var ze = ctx.Ae(Xb.Nd[1]);
			fe./**/transform(
				ye * (1.0 - 2.0 * q[1] * q[1] - z2),
				ye * (xy + wz),
				ze * (wz - xy),
				ze * (2.0 * q[0] * q[0] + z2 - 1.0),
				Ab[0], Ab[1]);
		},

		Pc: function (fe, Xb, ge) {
			Xb.vc(fe, -1, ge);

			if (this.we) {

				if (this.Be != null && !Xb.oc) {

					if (Xb.Od > 0.001) {
						var De = Math.floor(Xb.Qc % this.we.Rc);
						var Ee = Math.floor(Xb.Qc / this.we.Rc);

						var Ab = Xb.Ab.slice();
						var Nd = Xb.Nd.slice();
						if (!ge || ge./**/transform(Ab, Nd)) {

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
										ctx.bf.drawImage(this.Be.image,
											this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee,
											this.Tc, this.Uc,
											0, 0, Ye, Ze);

										ctx.bf.globalCompositeOperation = "multiply";
										ctx.bf.fillStyle = ctx.ff(Xb.gf);
										ctx.bf.fillRect(0, 0, Ye, Ze);

										ctx.bf.globalCompositeOperation = "destination-atop";
										ctx.bf.drawImage(this.Be.image,
											this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee,
											this.Tc, this.Uc,
											0, 0, Ye, Ze);

										fe.drawImage(ctx.cf, 0, 0, Ye, Ze, 0, 0, df, ef);
									}
								}
								else {
									fe.drawImage(this.Be.image,
										this.Be.x + this.Tc * De, this.Be.y + this.Uc * Ee,
										this.Tc, this.Uc, 0, 0, df, ef);
								}

								fe.restore();
							}
						}
					}
				}
			}

			Xb.vc(fe, 1, ge);
		},

		Hd: function (fe, ge) {
			fe.save();

			if (this.we) {
				fe.globalCompositeOperation = this.Ld.materials[this.Ld./**/model.renderStyles[this.we.renderStyleIndex].materialIndex];
				this.Be = this.Ld.textureDescs[this.Ld./**/model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];
			}
			else {
				this.Be = null;
			}

			if (this.Be) {
				this.Tc = this.Be.width / this.we.Rc;
				this.Uc = this.Be.height / this.we.Sc;
			}

			function kd(a, b) {
				if (a.Ab[2] > b.Ab[2])
					return 1;
				if (a.Ab[2] < b.Ab[2])
					return -1;
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
	}

	var oe = function (Ld, Bd) {

		this.Ld = Ld;
		this.Bd = Bd;

		if (this.Bd.we.pe.length > 0)
			this.we = this.Bd.we.pe[0];
		else
			this.we = null;

		this.vertex = [
			{ /**/position: [0.0, 0.0, 0.0], /**/color: [0, 0, 0, 0], /**/texCoords: [[0.0, 0.0]] },
			{ /**/position: [0.0, 0.0, 0.0], /**/color: [0, 0, 0, 0], /**/texCoords: [[0.0, 0.0]] },
			{ /**/position: [0.0, 0.0, 0.0], /**/color: [0, 0, 0, 0], /**/texCoords: [[0.0, 0.0]] },
			{ /**/position: [0.0, 0.0, 0.0], /**/color: [0, 0, 0, 0], /**/texCoords: [[0.0, 0.0]] }];
	}

	oe.prototype = {
		qe: function (Xb, se, re, te, renderBuffer) {
			Xb.Ce(-1, se, re, te, renderBuffer);

			if (this.we) {

				if (!Xb.oc) {

					var v0 = this.vertex[0];
					var v1 = this.vertex[1];
					var v2 = this.vertex[2];
					var v3 = this.vertex[3];

					var Fe = [], Ge = [];

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
					}
					else {
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

					var He = [], Ie = [], Je = [], Ke = [];
					ctx.u(He, Fe, -Xb.Nd[0] * Xb.Pd[0]);
					ctx.u(Ie, Fe, Xb.Nd[0] * (1.0 - Xb.Pd[0]));
					ctx.u(Je, Ge, -Xb.Nd[1] * Xb.Pd[1]);
					ctx.u(Ke, Ge, Xb.Nd[1] * (1.0 - Xb.Pd[1]));

					ctx.c(v0./**/position, He, Je);
					ctx.c(v0./**/position, v0./**/position, Xb.Ab);
					ctx.c(v1./**/position, He, Ke);
					ctx.c(v1./**/position, v1./**/position, Xb.Ab);
					ctx.c(v2./**/position, Ie, Ke);
					ctx.c(v2./**/position, v2./**/position, Xb.Ab);
					ctx.c(v3./**/position, Ie, Je);
					ctx.c(v3./**/position, v3./**/position, Xb.Ab);

					{
						var rgb = ctx.v(Xb.gf, 255);
						v0./**/color = v1./**/color = v2./**/color = v3./**/color = [rgb[0], rgb[1], rgb[2], Xb.Od * 255];
					}

					{
						var De = Math.floor(Xb.Qc % this.we.Rc);
						var Ee = Math.floor(Xb.Qc / this.we.Rc);

						var Pe, Qe, Re, Se;

						var We = this.Ld.texturesRemap[this.Ld./**/model.renderStyles[this.we.renderStyleIndex].textureIndices[0]];
						if (We) {
							var Ue = We.width / this.we.Rc;
							var Ve = We.height / this.we.Sc;

							var Pe = We.x + De * Ue;
							var Qe = Pe + Ue;
							var Re = (We.y + We.height - Ee * Ve);
							var Se = Re - Ve;
						} else {
							var Ue = 1.0 / this.we.Rc;
							var Ve = 1.0 / this.we.Sc;

							var Pe = De * Ue;
							var Qe = Pe + Ue;
							var Re = (1.0 - Ee * Ve);
							var Se = Re - Ve;
						}

						v0./**/texCoords[0] = [Pe, Se];
						v1./**/texCoords[0] = [Pe, Re];
						v2./**/texCoords[0] = [Qe, Re];
						v3./**/texCoords[0] = [Qe, Se];
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
							renderBuffer.__lastRenderCall = new ctx.RenderCall(
								lastRenderCall.startIndex + lastRenderCall.numIndices,
								6, this.we.renderStyleIndex);
						}
					}
				}
			}

			Xb.Ce(1, se, re, te, renderBuffer);
		},

		ue: function (se, re, te, renderBuffer) {
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
						if (a.depth < b.depth)
							return 1;
						if (a.depth > b.depth)
							return -1;
						return 0;
					});

					this.Bd.tc.forEach(function (Xb) {
						this.qe(Xb, se, re, te, renderBuffer);
					}, this);
					break;
			}
		}
	}

	var ld = function (Ld, we, ve) {
		var Vb = this;
		this.Ld = Ld;
		this.we = we;

		// Eb

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
			}

			this.Nb();
		}

		Eb.prototype = {
			Jd: function () {
				this.Nb();
			},

			Id: function (Qb, Ab, Mc) {
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

						if (Ab && Qb > 0)
							ctx.ab(Vb.Ab, Ab, Vb.Bb, Sb / Qb);

						if (Mc && Qb > 0)
							ctx.slerpq(Vb.Mc, Mc, Vb.prevRotation, Sb / Qb);

						// for the future when Jb would be external
						this.Lb = this.Jb;

						for (var Wb = 0; Wb < this.Jb; ++Wb) {
							if (Vb.sc.length == 0)
								break;

							if (this.Jb == 1)
								this.Kb = 0;
							else
								this.Kb = Wb / (this.Jb - 1);

							var Xb = Vb.sc.pop();
							Vb.tc.unshift(Xb);

							if (Wb == 0)
								Xb.Yb();
							else
								Xb.Zb();

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

				if (Ab)
					ctx.T(Vb.Ab, Ab);

				if (Mc)
					ctx.U(Vb.Mc, Mc);

				return ic;
			}
		}

		// ac

		function ac() {
			this.Gb = 1;
			this.Kb = 0;
			this.Lb = 1;

			Vb.we.Mb(this); // IMPL

			this.Nb = function () {
				this.bc = this.Gb;
			}

			this.Nb();
		}

		ac.prototype = {
			Jd: function () {
				this.Nb();
			},

			Id: function (Qb, Ab, Mc) {
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

					var hc = fc < 0.001 ?
						1.0 - this.bc : (1.0 - this.bc) / fc;

					var jc = [];

					while (Tb > 1.0) {
						var kc = cc + hc * Qb;

						if (Ab)
							ctx.ab(jc, Vb.Bb, Ab, hc);

						Vb.Rb = kc;
						ctx.T(Vb.Ab, jc);
						Ld.Rb = ctx.X(systemTimeBeforeFrame, systemTimeAfterFrame, hc);

						// for the future when Jb would be external
						this.Lb = this.Jb;

						for (var Wb = 0; Wb < this.Jb; ++Wb) {
							if (Vb.sc.length == 0)
								break;

							if (this.Jb == 1)
								this.Kb = 0;
							else
								this.Kb = Wb / (this.Jb - 1);

							var Xb = Vb.sc.pop();
							Vb.tc.unshift(Xb);

							if (Wb == 0)
								Xb.Yb();
							else
								Xb.Zb();

							Xb.Id(Qb * (1.0 - hc));
							++ic;
						}

						hc += 1.0 / fc;
						Tb -= 1.0;
					}

					this.bc = Tb;
				}

				Vb.Rb = dc;

				if (Ab)
					ctx.T(Vb.Ab, Ab);

				if (Mc)
					ctx.U(Vb.Mc, Mc);

				return ic;
			}
		}

		// mc

		function mc() {
			this.Ab = [];
			this.Pd = [];
			this.Nd = [];
			this.gf = [];
			this.Kc = [];
		}

		mc.prototype = {
			nc: function () {
				this.oc = false;

				for (var i = 0; i < this.Kc.length; ++i) {
					var pc = this.Kc[i];
					pc.Bd.Jd(this.Ab, null);

					if (pc.Ad.sd)
						pc.Bd.disactivate();
				}
			},

			Yb: function () {
				Vb.we.fd(Vb, this); // IMPL
				this.nc();
			},

			Zb: function () {
				Vb.we.gd(Vb, this); // IMPL
				this.nc();
			},

			Id: function (Qb) {
				Vb.we.qc(Qb, Vb, this); // IMPL

				this.rc(Qb);
			},

			pc: function (je) {
				return this.Kc[je].Bd;
			},

			rc: function (Qb) {
				for (var i = 0; i < this.Kc.length; i++) {
					this.Kc[i].Bd.Id(Qb, this.Ab, null);
				}
			},

			uc: function (md, nd) {
				this.Kc.push({
					Bd: new ld(Ld, md, ve),
					Ad: nd
				});
			},

			vc: function (fe, xc, ge) {
				for (var i = 0; i < this.Kc.length; ++i) {
					var pc = this.Kc[i];

					if (xc == pc.Ad.xc)
						pc.Bd.Hd(fe, ge);
				}
			},

			Ce: function (xc, se, re, te, renderBuffer) {
				for (var i = 0; i < this.Kc.length; ++i) {
					var pc = this.Kc[i];

					if (xc == pc.Ad.xc)
						pc.Bd.ue(se, re, te, renderBuffer);
				}
			},

			wc: function (fe) {
				this.oc = true;
				for (var i = 0; i < this.Kc.length; ++i) {
					var pc = this.Kc[i];

					if (pc.Ad.sd) {
						pc.Bd.activate();
						pc.Bd.Id(0);
					}
					else
						pc.Bd.disactivate();
				}
			},

			yc: function (Gd) {
				for (var i = 0; i < this.Kc.length; ++i) {
					this.Kc[i].Bd.Ed(Gd);
				}
			}
		}

		// zc

		function zc() {
		}

		zc.prototype.Ac = function (Xb) {
			return Vb.we.Cc(Vb, Xb, this); // IMPL
		}

		// ld Ad

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
		}

		this.ed = function () {
			this.vd = new ac();
		}

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
		}
	}

	ld.prototype.Jd = function (Ab, Mc) {
		this.Nb(Ab, Mc);

		this.sc.push.apply(this.sc, this.tc);
		this.tc.length = 0;

		this.vd.Jd();
	}

	ld.prototype.Id = function (Qb, Ab, Mc) {

		if (this.paused_)
		{
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
			}
			else {
				ctx.W(this.ad, 0, 0, 0);
			}
		}
		else {
			ctx.W(this.ad, 0, 0, 0);
		}

		if (Mc)
		{
			ctx.U(this.prevRotation, this.Mc);
		}

		var ic;

		if (this.Zc && !this.generatorsPaused_) {
			ic = this.vd.Id(Qb, Ab, Mc);
		}
		else {
			if (Ab)
				ctx.T(this.Ab, Ab);

			if (Mc)
				ctx.U(this.Mc, Mc);

			ic = 0;
			this.Rb += Qb;
		}

		for (var Wb = ic; Wb < this.tc.length;) {
			var Xb = this.tc[Wb];

			if (!Xb.oc) {
				Xb.Id(Qb);

				if (this.Wc.Ac(this.tc[Wb])) {
					Xb.wc();

					if (this.xd(Wb))
						continue;
				}
			}
			else {
				Xb.rc(Qb);

				if (this.xd(Wb))
					continue;
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
	}

	ld.prototype.Hd = function (fe, ge) {
		this.construct.Hd(fe, ge);
	}

	ld.prototype.ue = function (se, re, te, renderBuffer) {
		this.construct.ue(se, re, te, renderBuffer);
	}

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
	}

	ld.prototype.uc = function (md, nd) {
		this.Yc.push({ Db: md, Ad: nd });
	}

	ld.prototype./**/pause = function () {
		this.paused_ = true;
	}

	ld.prototype./**/unpause = function () {
		this.paused_ = false;
	}

	ld.prototype./**/paused = function () {
		return this.paused_;
	}

	ld.prototype./**/pauseGenerators = function () {
		this.generatorsPaused_ = true;
	}

	ld.prototype./**/unpauseGenerators = function () {
		this.generatorsPaused_ = false;
	}

	ld.prototype./**/generatorsPaused = function () {
		return this.generatorsPaused_;
	}

	ld.prototype.activate = function () {
		this.Zc = true;
	}

	ld.prototype.disactivate = function () {
		this.Zc = false;
	}

	ld.prototype.activated = function () {
		return this.Zc;
	}

	ld.prototype./**/getNumParticles = function () {
		return this.tc.length;
	}

	var ke = function () {
		var Cb = this;

		this._init = function (we, Ab, Mc, ve, options) {
			this./**/model = we;

			this.Ab = [];
			this.Mc = [];

			// ke Ad

			this.od = [];

			this.pd = function (md) {
				var Bd = new ld(this, md, ve);
				Bd.Nb(this.Ab, this.Mc);
				this["_".concat(md.name)] = Bd;
				this.od.push(Bd);
			}

			this.Nb = function (Ab, Mc) {
				this.Cd = 0.0;
				this.Rb = 0.0;
				ctx.T(this.Ab, Ab ? Ab : [0, 0, 0]);
				ctx.U(this.Mc, Mc ? Mc : [0, 0, 0, 1]);
			}

			this.Nb(Ab, Mc);
			this./**/model.qd(this); // IMPL

			this._presimNeeded = true;

			if (options.generatorsPaused) {
				this./**/pauseGeneratorsInAllEmitters();
			}

			if (options.paused) {
				this./**/pauseAllEmitters();
			} else {
				this.zeroUpdate();
				this.updateFixed(this.Ud, Ab, Mc, this.presimFrameTime);
				this._presimNeeded = false;
			}
		}
	}

	ke.prototype./**/restart = function (/**/position, /**/rotation, /**/options) {

		this.Nb(/**/position ? /**/position : this.Ab, /**/rotation ? /**/rotation : this.Mc);
		this._presimNeeded = true;

		for (var i = 0; i < this.od.length; ++i) {
			this.od[i].Jd(this.Ab, this.Mc);
		}

		this._presimNeeded = true;

		if (options && options.generatorsPaused) {
			this./**/pauseGeneratorsInAllEmitters();
		}

		if (options && options.paused) {
			this./**/pauseAllEmitters();
		} else {
			this.zeroUpdate();
			this.updateFixed(this.Ud, this.Ab, this.Mc, this.presimFrameTime);
			this._presimNeeded = false;
		}
	}

	ke.prototype.zeroUpdate = function () {
		for (var i = 0; i < this.od.length; ++i) {
			this.od[i].Id(0, this.Ab, this.Mc);
		}
	}

	ke.prototype./**/update = function (/**/dt, /**/position, /**/rotation) {
		if (this.Dd > 0.0)
			this.updateFixed(/**/dt, /**/position, /**/rotation, this.Dd);
		else
			this.updateFlex(/**/dt, /**/position, /**/rotation);
	}

	ke.prototype.updateFixed = function (/**/dt, /**/position, /**/rotation, /**/frameTime) {
		var updatedTime = 0.0;
		var hc = [];
		ctx.T(hc, this.Ab);
		var frameRotation = [];
		ctx.U(frameRotation, this.Mc);

		if (/**/position && ctx.equalv3_(/**/position, this.Ab))
			/**/position = null;

		if (/**/rotation && ctx.equalq_(/**/rotation, this.Mc))
			/**/rotation = null;

		while ((/**/dt - updatedTime) + this.Cd >= /**/frameTime) {
			var cc = this.Rb;

			if (/**/position)
				ctx.ab(hc, this.Ab, /**/position, updatedTime / /**/dt);

			if (/**/rotation)
				ctx.slerpq(frameRotation, this.Mc, /**/rotation, updatedTime / /**/dt);

			for (var i = 0; i < this.od.length; ++i) {
				this.od[i].Id(/**/frameTime, hc, frameRotation);

				this.Rb = cc;
			}

			updatedTime += /**/frameTime - this.Cd;
			this.Cd = 0.0;
			this.Rb = cc + /**/frameTime;
		}

		if (/**/position)
			ctx.T(this.Ab, /**/position);

		if (/**/rotation)
			ctx.U(this.Mc, /**/rotation);

		this.Cd += /**/dt - updatedTime;
	}

	ke.prototype.updateFlex = function (/**/dt, /**/position, /**/rotation) {
		var cc = this.Rb;

		for (var i = 0; i < this.od.length; ++i) {
			this.od[i].Id(/**/dt, /**/position, /**/rotation);
			this.Rb = cc;
		}

		this.Rb = cc + /**/dt;

		if (/**/position)
			ctx.T(this.Ab, /**/position);

		if (/**/rotation)
			ctx.U(this.Mc, /**/rotation);
	}

	ke.prototype./**/resetPosition = function (/**/position, /**/rotation) {

		if (/**/position)
			ctx.T(this.Ab, /**/position);

		if (/**/rotation)
			ctx.U(this.Mc, /**/rotation);

		for (var i = 0; i < this.od.length; ++i) {
			this.od[i].Td(this.Ab, this.Mc);
		}
	}

	ke.prototype./**/setPropertyInAllEmitters = function (/**/name, /**/value) {
		var propName = "_".concat(/**/name);

		if (/**/value instanceof Array) {
			if (/**/value.length == 2) {
				for (var i = 0; i < this.od.length; ++i) {
					ctx.S(this.od[i][propName], /**/value);
				}
			}
			else {
				for (var i = 0; i < this.od.length; ++i) {
					ctx.T(this.od[i][propName], /**/value);
				}
			}
		}
		else {
			for (var i = 0; i < this.od.length; ++i) {
				this.od[i][propName] = /**/value;
			}
		}
	}

	ke.prototype./**/pauseAllEmitters = function() {
		for (var i = 0; i < this.od.length; ++i) {
			this.od[i]./**/pause();
		}
	}

	ke.prototype./**/unpauseAllEmitters = function () {
		for (var i = 0; i < this.od.length; ++i) {
			this.od[i]./**/unpause();
		}
		this.zeroUpdate();

		if (this._presimNeeded) {
			this.updateFixed(this.Ud, this.Ab, this.Mc, this.presimFrameTime);
			this._presimNeeded = false;
		}
	}

	ke.prototype./**/areAllEmittersPaused = function () {
		for (var i = 0; i < this.od.length; ++i) {
			if (!this.od[i].paused())
				return false;
		}
		return true;
	}

	ke.prototype./**/pauseGeneratorsInAllEmitters = function () {
		for (var i = 0; i < this.od.length; ++i) {
			this.od[i]./**/pauseGenerators();
		}
	}

	ke.prototype./**/unpauseGeneratorsInAllEmitters = function () {
		for (var i = 0; i < this.od.length; ++i) {
			this.od[i]./**/unpauseGenerators();
		}
	}

	ke.prototype./**/areGeneratorsInAllEmittersPaused = function () {
		for (var i = 0; i < this.od.length; ++i) {
			if (!this.od[i].generatorsPaused())
				return false;
		}
		return true;
	}

	ke.prototype./**/getNumParticles = function() {
		var numParticles = 0;

		for (var i = 0; i < this.od.length; ++i) {
			numParticles += this.od[i].getNumParticles();
		}

		return numParticles;
	}


	var le = function () {
		this._init = function (we, Ab, Mc, renderBuffer, options) {
			le.prototype._init.call(this, we, Ab, Mc, oe, options);

			this.texturesRemap = [];

			var indices = [];

			{
				var verDisp;
				for (var Wb = 0; Wb < this./**/model.Xe; ++Wb) {
					verDisp = Wb * 4;
					indices.push(verDisp + 0, verDisp + 3, verDisp + 1, verDisp + 1, verDisp + 3, verDisp + 2);
				}
			}

			this.renderBuffer = renderBuffer;
			this.renderBuffer.initialize(this./**/model.Xe * 4, [2], indices, this./**/model.Xe);
			this.renderBuffer.__numIndices = 0;
		}
	}

	le.prototype = new ke();

	le.prototype./**/fillGeometryBuffers = function (/**/cameraRight, /**/cameraUp, /**/cameraDir) {
		this.renderBuffer.cleanup();
		this.renderBuffer.__lastRenderCall = null;

		this.od.forEach(function (Bd) {
			Bd.ue(/**/cameraRight, /**/cameraUp, /**/cameraDir, this.renderBuffer);
		}, this);

		if (this.renderBuffer.__lastRenderCall)
			this.renderBuffer.pushRenderCall(this.renderBuffer.__lastRenderCall);
	}

	var me = function () {
		this._init = function (we, Ab, Mc, options) {
			me.prototype._init.call(this, we, Ab, Mc, ne, options);

			this.materials = [];
			this./**/model.materials.forEach(function (value) {
				this.materials.push(['source-over', 'lighter', 'multiply'][value]);
			}, this);

			this./**/textureDescs = [];
		}
	}

	me.prototype = new ke();

	me.prototype./**/draw = function (/**/context, /**/camera) {
		for (var i = 0; i < this.od.length; ++i) {
			this.od[i].Hd(/**/context, /**/camera);
		}
	}

	this.createWGLInstance = function (/**/position, /**/rotation, /**/renderBuffer, /**/options) {
		var Ld = new le();
		Ld._init(this, /**/position, /**/rotation, /**/renderBuffer, /**/options || {});
		return Ld;
	}

	this.createCanvas2DInstance = function (/**/position, /**/rotation, /**/options) {
		var Ld = new me();
		Ld._init(this, /**/position, /**/rotation, /**/options || {});
		return Ld;
	}
	this.textures = ['fx/fireworks/sparks5x3_long.png','fx/fireworks/stars4x1_white.png'];
	this.materials = [1,0];
	this.renderStyles = [{materialIndex:0,textureIndices:[0]},{materialIndex:1,textureIndices:[1]}];
	this.Xe = 90300;

	function Emitter_Stripe_child() {

		var _1 = [], _5 = [], _7 = [], _9 = [], _10=[], _10fs=[], _10vs=[], _10rw=[], _10rwn=[], _10rwl, _10v=[], _10p=[], _10dtl, _10dtp, _10df, _10fsd=[], _12=[], _12i=[], _13, _11, _14, _15, _15i0, _15s0 = [], _16, _17, _17i0, _17s0 = [], _18, _18i0, _18s0 = [], _19;
		this.pe = [{xe:1,Rc:5,Sc:3,renderStyleIndex:0}];
		this.name = "Stripe_child";

		this.ud = function(Bd) {
			Bd._Rotation = [0,0,0,1];
			Bd._Texture = 0;
			Bd.ed();
			Bd._15 = [
				[
					[0.48177,0.934782,0.982708,0.96819,0.923457,0.860987,0.787211,0.706007,0.619964,0.530944,0.440381,0.349431,0.259076,0.170188,0.0835716,0,0]
				]
			];
			Bd._17 = [
				[
					[1,1,1],
					[1,0,0]
				]
			];
			Bd._18 = [
				[
					[5,4.99872,4.99458,4.98671,4.97402,4.95508,4.92796,4.89001,4.83749,4.76485,4.66351,4.5192,4.30565,3.96616,3.3344,0,0]
				]
			];
			Bd.jd = 300;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.rd = 2;
			vd.Gb = 1;
			vd.Jb = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			vd.rd = 2;
		}

		this.fd = function(Bd, Xb) {
			Xb.Mc=[];
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
		}

		this.gd = function(Bd, Xb) {
			Xb.Mc=[];
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
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._ += Qb;
			ctx.W(_9, 0, 50, 0);
			ctx.T(_10fs, _9);
			ctx.T(_10vs, [0,0,0]);
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
					if (_10df * _10dtp > 0.2)
						_10dtp = 0.2 / _10df;
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
			_14 = (Xb._ / _11);
			_15i0=(_14<0?0:(_14>1?1:_14));
			ctx.V(_15s0,0,(_15i0-0)*15);
			_15 = Db.nb(Bd._15[0][_15s0[0]],_15s0[1]);
			_16 = (_13 * _15);
			_17i0=(_14<0?0:(_14>1?1:_14));
			_17i0<0.7?ctx.V(_17s0,0,(_17i0-0)*1.42857):ctx.V(_17s0,1,(_17i0-0.7)*3.33333);
			_17 = Db.nb(Bd._17[0][_17s0[0]],_17s0[1]);
			_18i0=(_14<0?0:(_14>1?(0+((_14-0)%1)):_14));
			ctx.V(_18s0,0,(_18i0-0)*15);
			_18 = Db.nb(Bd._18[0][_18s0[0]],_18s0[1]);
			_19 = ((Bd._Texture * 5) + _18);
			ctx.S(Xb.Pd,[0.5,0.5]);
			ctx.U(Xb.Mc, _12);
			ctx.V(Xb.Nd,_16,_16);
			ctx.T(Xb.gf,[1,1,1]);
			Xb.Od = _17;
			Xb.Qc = (_19 < 0) ? 0 : ((_19 >= 15) ? 14 : _19);
		}

		this.Cc = function(Bd, Xb, Wc) {
			_11 = 1;
			if (Xb._ > _11) return true;
			return false;
		}


	}

	function Emitter_Stripe_parent() {

		var _, _i0, _s0 = [], _2 = [], _4, _6 = [], _8=[], _8x=[], _8y=[], _8z=[], _9, _9i0, _9s0 = [], _10 = [], _11=[], _11fs=[], _11vs=[], _11rw=[], _11rwn=[], _11rwl, _11v=[], _11p=[], _11dtl, _11dtp, _11df, _11fsd=[], _12;
		this.pe = [];
		this.name = "Stripe_parent";

		this.ud = function(Bd) {
			Bd._Texture = 0;
			Bd._ = [
				[
					[0,0,0],
					[5,5,5]
				]
			];
			Bd.dd();
			Bd.uc(new Emitter_Stripe_child(), { xc: 1, sd: false });
			Bd._9 = [
				[
					[0,0.201485,0.578107,1.01262,1.40576,1.70529,1.89569,1.97991,1.96774,1.87042,1.69852,1.46129,1.16666,0.821281,0.430806,0,0]
				]
			];
			Bd.jd = 100;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.zb = 5;
			vd.Gb = 0.94;
			vd.Jb = 50;
			vd.Ib = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			_i0=(Bd.Rb<0?0:(Bd.Rb>1?1:Bd.Rb));
			_i0<0.14741?ctx.V(_s0,0,(_i0-0)*6.78378):ctx.V(_s0,1,(_i0-0.14741)*1.1729);
			_ = Db.nb(Bd._[0][_s0[0]],_s0[1]);
			vd.zb = _;
		}

		this.fd = function(Bd, Xb) {
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
			ctx.Q(_8z, [0,0,1]);
			ctx.I(_8x, Xb._7, _8z);
			ctx.Q(_8x, _8x);
			ctx.I(_8y, _8z, _8x);
			ctx.pb(_8, _8x, _8y, _8z);
			Xb.pc(0)._Rotation = _8;
			Xb.pc(0)._Texture = Bd._Texture;
		}

		this.gd = function(Bd, Xb) {
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
			ctx.Q(_8z, [0,0,1]);
			ctx.I(_8x, Xb._7, _8z);
			ctx.Q(_8x, _8x);
			ctx.I(_8y, _8z, _8x);
			ctx.pb(_8, _8x, _8y, _8z);
			Xb.pc(0)._Rotation = _8;
			Xb.pc(0)._Texture = Bd._Texture;
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._1 += Qb;
			_9i0=(Bd.Rb<0?0:(Bd.Rb>1?1:Bd.Rb));
			ctx.V(_9s0,0,(_9i0-0)*15);
			_9 = Db.nb(Bd._9[0][_9s0[0]],_9s0[1]);
			ctx.W(_10, 0, 100, 0);
			ctx.T(_11fs, _10);
			ctx.T(_11vs, [0,0,0]);
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
					if (_11df * _11dtp > 0.2)
						_11dtp = 0.2 / _11df;
					ctx.c(_11fsd, _11fsd, ctx.v(_11rwn, _11rwl * _11df));
				}
				ctx.c(_11v, _11v, ctx.v(_11fsd, _11dtp));
				ctx.c(_11p, _11p, ctx.v(_11v, _11dtp));
				_11dtl -= _11dtp;
			}
			ctx.T(Xb._3, _11p);
			ctx.T(Xb._7, _11v);
			ctx.T(Xb.Ab, Xb._3);
			ctx.Q(_8z, [0,0,1]);
			ctx.I(_8x, Xb._7, _8z);
			ctx.Q(_8x, _8x);
			ctx.I(_8y, _8z, _8x);
			ctx.pb(_8, _8x, _8y, _8z);
			Xb.pc(0)._Rotation = _8;
			Xb.pc(0)._Texture = Bd._Texture;
		}

		this.Cc = function(Bd, Xb, Wc) {
			_12 = 1.2;
			if (Xb._1 > _12) return true;
			return false;
		}


	}

	function Emitter_Sparks() {

		var _1 = [], _3 = [], _6, _8, _10, _12 = [], _13=[], _13fs=[], _13vs=[], _13rw=[], _13rwn=[], _13rwl, _13v=[], _13p=[], _13dtl, _13dtp, _13df, _13fsd=[], _14, _15, _15i0, _15s0 = [], _16;
		this.pe = [{xe:0,Rc:4,Sc:1,renderStyleIndex:1}];
		this.name = "Sparks";

		this.ud = function(Bd) {
			Bd._Texture = 0;
			Bd.dd();
			Bd._15 = [
				[
					[1,0,0],
					[0,1,1],
					[1,0,0],
					[0,0.7,0.7],
					[0.7,0.2,0.2],
					[0.2,0.838202,0.838202],
					[0.838202,0.4,0.4],
					[0.4,1,1],
					[1,0,0],
					[0,0.6,0.6],
					[0.6,0,0]
				]
			];
			Bd.jd = 100;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.zb = 1;
			vd.Gb = 1;
			vd.Jb = 80;
			vd.Ib = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			vd.zb = 1;
		}

		this.fd = function(Bd, Xb) {
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
		}

		this.gd = function(Bd, Xb) {
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
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._ += Qb;
			ctx.W(_12, 0, 100, 0);
			ctx.T(_13fs, _12);
			ctx.T(_13vs, [0,0,0]);
			ctx.u(_13v, _13fs, Qb);
			ctx.c(_13v, _13v, Xb._4);
			ctx.u(_13p, _13v, Qb);
			ctx.c(_13p, _13p, Xb._2);
			ctx.T(Xb._2, _13p);
			ctx.T(Xb._4, _13v);
			ctx.T(Xb.Ab, Xb._2);
			_14 = (Xb._ / Xb._11);
			_15i0=(_14<0?0:(_14>1?1:_14));
			_15i0<0.531495?_15i0<0.3?_15i0<0.16726?_15i0<0.1?ctx.V(_15s0,0,(_15i0-0)*10):ctx.V(_15s0,1,(_15i0-0.1)*14.8677):ctx.V(_15s0,2,(_15i0-0.16726)*7.53351):_15i0<0.464218?_15i0<0.353203?ctx.V(_15s0,3,(_15i0-0.3)*18.796):ctx.V(_15s0,4,(_15i0-0.353203)*9.00779):ctx.V(_15s0,5,(_15i0-0.464218)*14.864):_15i0<0.9?_15i0<0.7?_15i0<0.641996?ctx.V(_15s0,6,(_15i0-0.531495)*9.04964):ctx.V(_15s0,7,(_15i0-0.641996)*17.2403):ctx.V(_15s0,8,(_15i0-0.7)*5):_15i0<0.942044?ctx.V(_15s0,9,(_15i0-0.9)*23.7848):ctx.V(_15s0,10,(_15i0-0.942044)*17.2544);
			_15 = Db.nb(Bd._15[0][_15s0[0]],_15s0[1]);
			_16 = (Xb._9 * _15);
			ctx.S(Xb.Pd,[0.5,0.5]);
			Xb.Md = Xb._5;
			ctx.V(Xb.Nd,_16,_16);
			ctx.T(Xb.gf,[1,1,1]);
			Xb.Od = 1;
			Xb.Qc = (Xb._7 < 0) ? 0 : ((Xb._7 >= 4) ? 3 : Xb._7);
		}

		this.Cc = function(Bd, Xb, Wc) {
			if (Xb._ > Xb._11) return true;
			return false;
		}


	}

	function Emitter_Fireworks_parent() {

		var _, _i0, _s0 = [], _2, _3 = [], _3i, _3s = [], _4 = [], _4i, _4s = [], _5, _6 = [], _7 = [], _10, _11, _11i0, _11s0 = [], _13;
		this.pe = [];
		this.name = "Fireworks_parent";

		this.ud = function(Bd) {
			Bd._ = [
				[
					[1.72379,1.72379,1.72379],
					[0,0,0]
				]
			];
			Bd.dd();
			Bd._3 = [
				[[-438,1],[-440,-296],[-440,-296]]
			];
			Bd._4 = [
				[[327,3],[326,-285],[326,-285]]
			];
			Bd._11 = [
				[
					[0,0,0],
					[1,1,1],
					[2,2,2]
				]
			];
			Bd.uc(new Emitter_Stripe_parent(), { xc: 1, sd: false });
			Bd.uc(new Emitter_Sparks(), { xc: 1, sd: false });
			Bd.jd = 3;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.zb = 5;
			vd.Gb = 1;
			vd.Jb = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			_i0=(Bd.Ld.Rb<0?0:(Bd.Ld.Rb>5.99432?(0+((Bd.Ld.Rb-0)%5.99432)):Bd.Ld.Rb));
			_i0<1.50077?ctx.V(_s0,0,(_i0-0)*0.666323):ctx.V(_s0,1,(_i0-1.50077)*0.222541);
			_ = Db.nb(Bd._[0][_s0[0]],_s0[1]);
			vd.zb = _;
		}

		this.fd = function(Bd, Xb) {
			Xb._1 = 0.0;
			_2 = 0 + Bd.Ld.rand() * (1 - 0);
			_3i = Db.kb(_2);
			ctx.V(_3s,0,(_3i-0)*1);
			Db.lb(_3, Bd._3[_3s[0]], _3s[1]);
			_4i = Db.kb(_2);
			ctx.V(_4s,0,(_4i-0)*1);
			Db.lb(_4, Bd._4[_4s[0]], _4s[1]);
			_5 = 0 + Bd.Ld.rand() * (1 - 0);
			ctx.Y(_6, _3, _4, _5);
			ctx.W(_7, _6[0], _6[1], 0);
			Xb._8 = [];
			ctx.rb(Xb._8, _7, Bd.Mc);
			ctx.c(Xb._8, Bd.Ab, Xb._8);
			Xb._9 = 0;
			_10 = 0 + Bd.Ld.rand() * (1 - 0);
			_11i0=(_10<0?0:(_10>1?1:_10));
			_11i0<0.710626?_11i0<0.388302?ctx.V(_11s0,0,(_11i0-0)*2.57531):ctx.V(_11s0,1,(_11i0-0.388302)*3.10247):ctx.V(_11s0,2,(_11i0-0.710626)*3.45573);
			_11 = Db.nb(Bd._11[0][_11s0[0]],_11s0[1]);
			Xb._12 = _11;
			ctx.T(Xb.Ab, Xb._8);
			Xb.pc(0)._Texture = Xb._12;
			Xb.pc(1)._Texture = Xb._12;
		}

		this.gd = function(Bd, Xb) {
			Xb._1 = 0.0;
			_2 = 0 + Bd.Ld.rand() * (1 - 0);
			_3i = Db.kb(_2);
			ctx.V(_3s,0,(_3i-0)*1);
			Db.lb(_3, Bd._3[_3s[0]], _3s[1]);
			_4i = Db.kb(_2);
			ctx.V(_4s,0,(_4i-0)*1);
			Db.lb(_4, Bd._4[_4s[0]], _4s[1]);
			_5 = 0 + Bd.Ld.rand() * (1 - 0);
			ctx.Y(_6, _3, _4, _5);
			ctx.W(_7, _6[0], _6[1], 0);
			Xb._8 = [];
			ctx.rb(Xb._8, _7, Bd.Mc);
			ctx.c(Xb._8, Bd.Ab, Xb._8);
			Xb._9 = 0;
			_10 = 0 + Bd.Ld.rand() * (1 - 0);
			_11i0=(_10<0?0:(_10>1?1:_10));
			_11i0<0.710626?_11i0<0.388302?ctx.V(_11s0,0,(_11i0-0)*2.57531):ctx.V(_11s0,1,(_11i0-0.388302)*3.10247):ctx.V(_11s0,2,(_11i0-0.710626)*3.45573);
			_11 = Db.nb(Bd._11[0][_11s0[0]],_11s0[1]);
			Xb._12 = _11;
			ctx.T(Xb.Ab, Xb._8);
			Xb.pc(0)._Texture = Xb._12;
			Xb.pc(1)._Texture = Xb._12;
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._1 += Qb;
			ctx.T(Xb.Ab, Xb._8);
			Xb.pc(0)._Texture = Xb._12;
			Xb.pc(1)._Texture = Xb._12;
		}

		this.Cc = function(Bd, Xb, Wc) {
			_13 = 2;
			if (Xb._1 > _13) return true;
			return false;
		}


	}

	this.qd = function(Ld) {
		Ld.Dd = 0.0333333;
		Ld.Ud = 0;
		Ld.presimFrameTime = 0.1;
		Ld.rand = function() { return Math.random(); };
		Ld.pd(new Emitter_Fireworks_parent());
	}
		this.kb = function (v) { 			return (v < 0) ? 0 : ((v > 1) ? 1 : v); 		}

		this.lb = function (r, path, je) { 			var indexInt = Math.floor(je); 			var lerp = je - indexInt; 			ctx.Y(r, path[indexInt], path[indexInt + 1], lerp); 		}

		this.nb = function(funcValues, je) { 			var indexInt = Math.floor(je); 			var nextInt = indexInt + 1; 			return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt); 		}


}

return Fireworks02;
}));