// 78a367cf-bd30-4753-8df5-44cd96862db7


(function (root, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(['exports'], function (exports) {
            (root.NeutrinoEffect = exports)['Frame01'] = factory();
        });
    } else {
        var namespace = (root.NeutrinoEffect || (root.NeutrinoEffect = {}));
        namespace.__last__ = namespace['Frame01'] = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

function Frame01(ctx) {
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
				this./**/update(this.Ud, Ab, Mc);
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
			this./**/update(this.Ud, this.Ab, this.Mc);
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
			this.updateFixed(/**/dt, /**/position, /**/rotation);
		else
			this.updateFlex(/**/dt, /**/position, /**/rotation);
	}

	ke.prototype.updateFixed = function (/**/dt, /**/position, /**/rotation) {
		var updatedTime = 0.0;
		var hc = [];
		ctx.T(hc, this.Ab);
		var frameRotation = [];
		ctx.U(frameRotation, this.Mc);

		if (/**/position && ctx.equalv3_(/**/position, this.Ab))
			/**/position = null;

		if (/**/rotation && ctx.equalq_(/**/rotation, this.Mc))
			/**/rotation = null;

		while ((/**/dt - updatedTime) + this.Cd >= this.Dd) {
			var cc = this.Rb;

			if (/**/position)
				ctx.ab(hc, this.Ab, /**/position, updatedTime / /**/dt);

			if (/**/rotation)
				ctx.slerpq(frameRotation, this.Mc, /**/rotation, updatedTime / /**/dt);

			for (var i = 0; i < this.od.length; ++i) {
				this.od[i].Id(this.Dd, hc, frameRotation);

				this.Rb = cc;
			}

			updatedTime += this.Dd - this.Cd;
			this.Cd = 0.0;
			this.Rb = cc + this.Dd;
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
			this./**/update(this.Ud, this.Ab, this.Mc);
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
	this.textures = ['fire5x1.png'];
	this.materials = [1];
	this.renderStyles = [{materialIndex:0,textureIndices:[0]}];
	this.Xe = 80000;

	function Emitter_Fire() {

		var _1 = [], _4, _6, _8 = [], _10 = [], _11=[], _11a=[], _11i=[], _12=[], _12fs=[], _12vs=[], _12rw=[], _12rwn=[], _12rwl, _12v=[], _12p=[], _12dtl, _12dtp, _12df, _12fsd=[], _13, _15, _14, _16, _17, _17i0, _17s0 = [], _18, _19, _19i0, _19s0 = [];
		this.pe = [{xe:0,Rc:5,Sc:1,renderStyleIndex:0}];
		this.name = "Fire";

		this.ud = function(Bd) {
			Bd.ed();
			Bd._17 = [
				[
					[1,1.33476,1.52189,1.6464,1.73598,1.80316,1.8547,1.89467,1.92574,1.94973,1.96795,1.98139,1.99078,1.99672,1.99967,2,2],
					[2,1.99385,1.9826,1.96663,1.94623,1.92166,1.89315,1.86087,1.82496,1.78554,1.74271,1.69654,1.64706,1.5943,1.53827,1.47895,1.47895]
				]
			];
			Bd._19 = [
				[
					[0,0.3,0.3],
					[0.3,0.29495,0.285762,0.272856,0.256716,0.237864,0.216832,0.194137,0.170264,0.145648,0.120673,0.0956644,0.0708935,0.0465815,0.0229046,0,0]
				]
			];
			Bd.jd = 400;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.rd = 3;
			vd.Gb = 1;
			vd.Jb = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			vd.rd = 3;
		}

		this.fd = function(Bd, Xb) {
			Xb._ = 0.0;
			ctx.W(_1, 0, 0, 0);
			Xb._2 = [];
			ctx.rb(Xb._2, _1, Bd.Mc);
			ctx.c(Xb._2, Bd.Ab, Xb._2);
			Xb._3 = 0;
			_4 = -90 + Bd.Ld.rand() * (90 - -90);
			Xb._5 = _4;
			_6 = 0 + Bd.Ld.rand() * (5 - 0);
			Xb._7 = _6;
			ctx.randv3gen(_8, 500, Bd.Ld.rand);
			Xb._9 = [];
			ctx.rb(Xb._9, _8, Bd.Mc);
			ctx.c(Xb._9, Bd.ad, Xb._9);
			ctx.T(Xb.Ab, Xb._2);
		}

		this.gd = function(Bd, Xb) {
			Xb._ = 0.0;
			ctx.W(_1, 0, 0, 0);
			Xb._2 = [];
			ctx.rb(Xb._2, _1, Bd.Mc);
			ctx.c(Xb._2, Bd.Ab, Xb._2);
			Xb._3 = 0;
			_4 = -90 + Bd.Ld.rand() * (90 - -90);
			Xb._5 = _4;
			_6 = 0 + Bd.Ld.rand() * (5 - 0);
			Xb._7 = _6;
			ctx.randv3gen(_8, 500, Bd.Ld.rand);
			Xb._9 = [];
			ctx.rb(Xb._9, _8, Bd.Mc);
			ctx.c(Xb._9, Bd.ad, Xb._9);
			ctx.T(Xb.Ab, Xb._2);
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._ += Qb;
			ctx.W(_10, 0, -40, 0);
			ctx.u(_11a, [100,50,30], Bd.Ld.Rb);
			ctx.c(_11a, _11a, Xb._2);
			ctx.u(_11i, _11a, 1.0 / 1000); 
			ctx.xb(_11, _11i);
			ctx.k(_11, _11, [0.0078125,0.0078125,0.0078125]);
			ctx.c(_11, _11, [-1,-1,-1]);
			ctx.u(_11, _11, 200);
			ctx.T(_12fs, _10);
			ctx.c(_12fs, _12fs, _11);
			ctx.T(_12vs, [0,0,0]);
			_12dtl = Qb;
			ctx.T(_12v, Xb._9);
			ctx.T(_12p, Xb._2);
			while (_12dtl > 0.0001) {
				_12dtp = _12dtl;
				ctx.T(_12fsd, _12fs);
				ctx.g(_12rw, _12vs, _12v);
				_12rwl = ctx.P(_12rw);
				if (_12rwl > 0.0001) {
					_12rwl = Math.sqrt(_12rwl);
					ctx.w(_12rwn, _12rw, _12rwl);
					_12df = 0.01 * 5 * _12rwl;
					if (_12df * _12dtp > 0.2) 
						_12dtp = 0.2 / _12df;
					ctx.c(_12fsd, _12fsd, ctx.v(_12rwn, _12rwl * _12df));
				}
				ctx.c(_12v, _12v, ctx.v(_12fsd, _12dtp));
				ctx.c(_12p, _12p, ctx.v(_12v, _12dtp));
				_12dtl -= _12dtp;
			}
			ctx.T(Xb._2, _12p);
			_13 = Xb._3 + Qb * Xb._5;
			Xb._3 = _13;
			ctx.T(Xb._9, _12v);
			ctx.T(Xb.Ab, Xb._2);
			_15 = 40;
			_14 = 1.5;
			_16 = (Xb._ / _14);
			_17i0=(_16<0?0:(_16>1?1:_16));
			_17i0<0.2?ctx.V(_17s0,0,(_17i0-0)*75):ctx.V(_17s0,1,(_17i0-0.2)*18.75);
			_17 = Db.nb(Bd._17[0][_17s0[0]],_17s0[1]);
			_18 = (_15 * _17);
			_19i0=(_16<0?0:(_16>1?1:_16));
			_19i0<0.1?ctx.V(_19s0,0,(_19i0-0)*10):ctx.V(_19s0,1,(_19i0-0.1)*16.6667);
			_19 = Db.nb(Bd._19[0][_19s0[0]],_19s0[1]);
			ctx.S(Xb.Pd,[0.5,0.5]);
			Xb.Md = Xb._3;
			ctx.V(Xb.Nd,_18,_18);
			ctx.T(Xb.gf,[1,1,1]);
			Xb.Od = _19;
			Xb.Qc = (Xb._7 < 0) ? 0 : ((Xb._7 >= 5) ? 4 : Xb._7);
		}

		this.Cc = function(Bd, Xb, Wc) {
			_14 = 1.5;
			if (Xb._ > _14) return true;
			return false;
		}


	}

	function Emitter_Parent() {

		var _1 = [], _5, _6, _7, _7i0, _7s0 = [], _8 = [[], []], _8i, _8s = [], _9 = [], _10op0=[], _11;
		this.pe = [];
		this.name = "Parent";

		this.ud = function(Bd) {
			Bd.dd();
			Bd._7 = [
				[
					[0,0.0117496,0.0466775,0.102761,0.177104,0.265983,0.364997,0.469323,0.574031,0.67441,0.766245,0.846003,0.910921,0.958999,0.98893,1,1]
				]
			];
			Bd._8 = [
				[[[0,0],[-0.9995,-0.0316064]],[[-26.7184,-0.844894],[-0.996564,-0.0828236]],[[-53.3584,-3.05892],[-0.990966,-0.13411]],[[-79.8489,-6.64395],[-0.982259,-0.18753]],[[-106.106,-11.6569],[-0.969559,-0.244859]],[[-132.023,-18.2022],[-0.95145,-0.307802]],[[-157.455,-26.4296],[-0.92579,-0.378038]],[[-182.2,-36.5337],[-0.889432,-0.457067]],[[-205.97,-48.749],[-0.837982,-0.545698]],[[-228.362,-63.3307],[-0.765904,-0.642954]],[[-248.824,-80.5077],[-0.667742,-0.744393]],[[-266.659,-100.39],[-0.541315,-0.84082]],[[-281.114,-122.843],[-0.391976,-0.919975]],[[-291.581,-147.409],[-0.233422,-0.972376]],[[-297.814,-173.377],[-0.0818197,-0.996647]],[[-300,-200],[-0.0818197,-0.996647]],[[-300,-200],[-0.0818197,-0.996647]]],
				[[[-300,-200],[0.0251703,-0.999683]],[[-299.62,-215.091],[0.0997301,-0.995015]],[[-298.115,-230.112],[0.176327,-0.984332]],[[-295.453,-244.971],[0.255065,-0.966924]],[[-291.602,-259.567],[0.335746,-0.941953]],[[-286.534,-273.786],[0.417774,-0.908551]],[[-280.228,-287.5],[0.500079,-0.86598]],[[-272.68,-300.571],[0.581067,-0.813855]],[[-263.91,-312.855],[0.658737,-0.752373]],[[-253.967,-324.211],[0.730885,-0.682501]],[[-242.936,-334.512],[0.795455,-0.606013]],[[-230.93,-343.659],[0.850934,-0.525272]],[[-218.086,-351.587],[0.896557,-0.442929]],[[-204.553,-358.272],[0.932385,-0.361466]],[[-190.479,-363.729],[0.959138,-0.28294]],[[-176,-368],[0.959138,-0.28294]],[[-176,-368],[0.959138,-0.28294]]]
			];
			Bd.uc(new Emitter_Fire(), { xc: 1, sd: false });
			Bd.jd = 100;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.zb = 0.3;
			vd.Gb = 1;
			vd.Jb = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			vd.zb = 0.3;
		}

		this.fd = function(Bd, Xb) {
			Xb._ = 0.0;
			ctx.W(_1, 0, 0, 0);
			Xb._2 = [];
			ctx.c(Xb._2, Bd.Ab, _1);
			Xb._3 = [];
			ctx.U(Xb._3, Bd.Mc);
			Xb._4 = 0;
			_5 = 1;
			_6 = (Xb._ / _5);
			_7i0=(_6<0?0:(_6>1?1:_6));
			ctx.V(_7s0,0,(_7i0-0)*15);
			_7 = Db.nb(Bd._7[0][_7s0[0]],_7s0[1]);
			_8i = Db.kb(_7);
			_8i<0.639019?ctx.V(_8s,0,(_8i-0)*23.4735):ctx.V(_8s,1,(_8i-0.639019)*41.5534);
			Db.mb(_8, Bd._8[_8s[0]], _8s[1]);
			ctx.W(_9, _8[0][0], _8[0][1], 0);
			ctx.rb(_10op0, _9, Xb._3);
			ctx.c(_10op0, _10op0, [0,0,0]);
			_11 = ctx.d(Xb._2, _10op0);
			ctx.T(Xb.Ab, _11);
		}

		this.gd = function(Bd, Xb) {
			Xb._ = 0.0;
			ctx.W(_1, 0, 0, 0);
			Xb._2 = [];
			ctx.c(Xb._2, Bd.Ab, _1);
			Xb._3 = [];
			ctx.U(Xb._3, Bd.Mc);
			Xb._4 = 0;
			_5 = 1;
			_6 = (Xb._ / _5);
			_7i0=(_6<0?0:(_6>1?1:_6));
			ctx.V(_7s0,0,(_7i0-0)*15);
			_7 = Db.nb(Bd._7[0][_7s0[0]],_7s0[1]);
			_8i = Db.kb(_7);
			_8i<0.639019?ctx.V(_8s,0,(_8i-0)*23.4735):ctx.V(_8s,1,(_8i-0.639019)*41.5534);
			Db.mb(_8, Bd._8[_8s[0]], _8s[1]);
			ctx.W(_9, _8[0][0], _8[0][1], 0);
			ctx.rb(_10op0, _9, Xb._3);
			ctx.c(_10op0, _10op0, [0,0,0]);
			_11 = ctx.d(Xb._2, _10op0);
			ctx.T(Xb.Ab, _11);
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._ += Qb;
			_5 = 1;
			_6 = (Xb._ / _5);
			_7i0=(_6<0?0:(_6>1?1:_6));
			ctx.V(_7s0,0,(_7i0-0)*15);
			_7 = Db.nb(Bd._7[0][_7s0[0]],_7s0[1]);
			_8i = Db.kb(_7);
			_8i<0.639019?ctx.V(_8s,0,(_8i-0)*23.4735):ctx.V(_8s,1,(_8i-0.639019)*41.5534);
			Db.mb(_8, Bd._8[_8s[0]], _8s[1]);
			ctx.W(_9, _8[0][0], _8[0][1], 0);
			ctx.rb(_10op0, _9, Xb._3);
			ctx.c(_10op0, _10op0, [0,0,0]);
			_11 = ctx.d(Xb._2, _10op0);
			ctx.T(Xb.Ab, _11);
		}

		this.Cc = function(Bd, Xb, Wc) {
			_5 = 1;
			if (Xb._ > _5) return true;
			return false;
		}


	}

	function Emitter_Parent_Right() {

		var _1 = [], _5, _6, _7, _7i0, _7s0 = [], _8 = [[], []], _8i, _8s = [], _9 = [], _10op0=[], _11;
		this.pe = [];
		this.name = "Parent_Right";

		this.ud = function(Bd) {
			Bd.dd();
			Bd._7 = [
				[
					[0,0.0117496,0.0466775,0.102761,0.177104,0.265983,0.364997,0.469323,0.574031,0.67441,0.766245,0.846003,0.910921,0.958999,0.98893,1,1]
				]
			];
			Bd._8 = [
				[[[0,0],[0.999481,-0.0322049]],[[26.8349,-0.864663],[0.99652,-0.0833514]],[[53.5913,-3.10264],[0.991035,-0.133602]],[[80.2005,-6.68983],[0.982663,-0.185399]],[[106.584,-11.6677],[0.970597,-0.240711]],[[132.644,-18.1305],[0.953503,-0.301383]],[[158.243,-26.2219],[0.929323,-0.369269]],[[183.191,-36.1352],[0.894953,-0.446161]],[[207.215,-48.1117],[0.845881,-0.533372]],[[229.918,-62.4271],[0.776052,-0.630669]],[[250.742,-79.35],[0.678774,-0.734347]],[[268.951,-99.0496],[0.550002,-0.835163]],[[283.701,-121.448],[0.393851,-0.919174]],[[294.263,-146.096],[0.225187,-0.974316]],[[300.302,-172.227],[0.0632915,-0.997995]],[[302,-199],[0.0632915,-0.997995]],[[302,-199],[0.0632915,-0.997995]]],
				[[[302,-199],[-0.0507817,-0.99871]],[[301.229,-214.158],[-0.127924,-0.991784]],[[299.288,-229.211],[-0.203513,-0.979072]],[[296.199,-244.072],[-0.278249,-0.960509]],[[291.975,-258.65],[-0.352656,-0.935753]],[[286.623,-272.853],[-0.427019,-0.904243]],[[280.142,-286.577],[-0.501334,-0.865254]],[[272.533,-299.709],[-0.575214,-0.818003]],[[263.803,-312.123],[-0.647828,-0.761787]],[[253.972,-323.684],[-0.717845,-0.696202]],[[243.078,-334.25],[-0.783493,-0.6214]],[[231.188,-343.68],[-0.842755,-0.538297]],[[218.4,-351.848],[-0.893688,-0.448689]],[[204.838,-358.657],[-0.934821,-0.355119]],[[190.652,-364.046],[-0.965464,-0.260538]],[[176,-368],[-0.965464,-0.260538]],[[176,-368],[-0.965464,-0.260538]]]
			];
			Bd.uc(new Emitter_Fire(), { xc: 1, sd: false });
			Bd.jd = 100;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.zb = 0.3;
			vd.Gb = 1;
			vd.Jb = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			vd.zb = 0.3;
		}

		this.fd = function(Bd, Xb) {
			Xb._ = 0.0;
			ctx.W(_1, 0, 0, 0);
			Xb._2 = [];
			ctx.c(Xb._2, Bd.Ab, _1);
			Xb._3 = [];
			ctx.U(Xb._3, Bd.Mc);
			Xb._4 = 0;
			_5 = 1;
			_6 = (Xb._ / _5);
			_7i0=(_6<0?0:(_6>1?1:_6));
			ctx.V(_7s0,0,(_7i0-0)*15);
			_7 = Db.nb(Bd._7[0][_7s0[0]],_7s0[1]);
			_8i = Db.kb(_7);
			_8i<0.638775?ctx.V(_8s,0,(_8i-0)*23.4825):ctx.V(_8s,1,(_8i-0.638775)*41.5253);
			Db.mb(_8, Bd._8[_8s[0]], _8s[1]);
			ctx.W(_9, _8[0][0], _8[0][1], 0);
			ctx.rb(_10op0, _9, Xb._3);
			ctx.c(_10op0, _10op0, [0,0,0]);
			_11 = ctx.d(Xb._2, _10op0);
			ctx.T(Xb.Ab, _11);
		}

		this.gd = function(Bd, Xb) {
			Xb._ = 0.0;
			ctx.W(_1, 0, 0, 0);
			Xb._2 = [];
			ctx.c(Xb._2, Bd.Ab, _1);
			Xb._3 = [];
			ctx.U(Xb._3, Bd.Mc);
			Xb._4 = 0;
			_5 = 1;
			_6 = (Xb._ / _5);
			_7i0=(_6<0?0:(_6>1?1:_6));
			ctx.V(_7s0,0,(_7i0-0)*15);
			_7 = Db.nb(Bd._7[0][_7s0[0]],_7s0[1]);
			_8i = Db.kb(_7);
			_8i<0.638775?ctx.V(_8s,0,(_8i-0)*23.4825):ctx.V(_8s,1,(_8i-0.638775)*41.5253);
			Db.mb(_8, Bd._8[_8s[0]], _8s[1]);
			ctx.W(_9, _8[0][0], _8[0][1], 0);
			ctx.rb(_10op0, _9, Xb._3);
			ctx.c(_10op0, _10op0, [0,0,0]);
			_11 = ctx.d(Xb._2, _10op0);
			ctx.T(Xb.Ab, _11);
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._ += Qb;
			_5 = 1;
			_6 = (Xb._ / _5);
			_7i0=(_6<0?0:(_6>1?1:_6));
			ctx.V(_7s0,0,(_7i0-0)*15);
			_7 = Db.nb(Bd._7[0][_7s0[0]],_7s0[1]);
			_8i = Db.kb(_7);
			_8i<0.638775?ctx.V(_8s,0,(_8i-0)*23.4825):ctx.V(_8s,1,(_8i-0.638775)*41.5253);
			Db.mb(_8, Bd._8[_8s[0]], _8s[1]);
			ctx.W(_9, _8[0][0], _8[0][1], 0);
			ctx.rb(_10op0, _9, Xb._3);
			ctx.c(_10op0, _10op0, [0,0,0]);
			_11 = ctx.d(Xb._2, _10op0);
			ctx.T(Xb.Ab, _11);
		}

		this.Cc = function(Bd, Xb, Wc) {
			_5 = 1;
			if (Xb._ > _5) return true;
			return false;
		}


	}

	this.qd = function(Ld) {
		Ld.Dd = 0.0333333;
		Ld.Ud = 0;
		Ld.rand = function() { return Math.random(); };
		Ld.pd(new Emitter_Parent());
		Ld.pd(new Emitter_Parent_Right());
	}
		this.kb = function (v) { 			return (v < 0) ? 0 : ((v > 1) ? 1 : v); 		}

		this.mb = function(r, path, je) { 			var indexInt = Math.floor(je); 			var lerp = je - indexInt; 			ctx.Y(r[0], path[indexInt][0], path[indexInt + 1][0], lerp); 			ctx.Y(r[1], path[indexInt][1], path[indexInt + 1][1], lerp); 		}

		this.nb = function(funcValues, je) { 			var indexInt = Math.floor(je); 			var nextInt = indexInt + 1; 			return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt); 		}


}

return Frame01;
}));
