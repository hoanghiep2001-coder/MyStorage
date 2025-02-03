// a50525bd-0911-446f-ba47-766d19c87bfc


(function (root, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(['exports'], function (exports) {
            (root.NeutrinoEffect = exports)['Logo_shine'] = factory();
        });
    } else {
        var namespace = (root.NeutrinoEffect || (root.NeutrinoEffect = {}));
        namespace.__last__ = namespace['Logo_shine'] = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

function Logo_shine(ctx) {
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
	this.textures = ['glow_point_04_gold.png'];
	this.materials = [1];
	this.renderStyles = [{materialIndex:0,textureIndices:[0]}];
	this.Xe = 300;

	function Emitter_DefaultEmitter() {

		var _1 = [[], []], _1i, _1s = [], _2 = [], _4=[], _6, _8, _9, _9i0, _9s0 = [];
		this.pe = [{xe:0,Rc:1,Sc:1,renderStyleIndex:0}];
		this.name = "DefaultEmitter";

		this.ud = function(Bd) {
			Bd.dd();
			Bd._1 = [
				[[[192.163,217.192],[-0.252142,-0.96769]],[[188.829,204.396],[-0.0519096,-0.998652]],[[188.142,191.187],[0.127871,-0.991791]],[[189.834,178.064],[0.280902,-0.959737]],[[193.552,165.361],[0.411142,-0.911571]],[[198.995,153.293],[0.411142,-0.911571]],[[198.995,153.293],[0.411142,-0.911571]]],
				[[[198.995,153.293],[0.520385,-0.853932]],[[206.451,141.058],[0.615076,-0.788468]],[[215.264,129.76],[0.714162,-0.69998]],[[225.493,119.734],[0.827338,-0.561705]],[[237.332,111.697],[0.946186,-0.323624]],[[250.837,107.078],[0.946186,-0.323624]],[[250.837,107.078],[0.946186,-0.323624]]],
				[[[213.462,237.688],[0.999953,-0.00971585]],[[225.79,237.568],[0.939135,-0.343548]],[[237.422,233.313],[0.824412,-0.56599]],[[247.642,226.297],[0.674537,-0.738241]],[[256.005,217.144],[0.49077,-0.871289]],[[262.09,206.341],[0.49077,-0.871289]],[[262.09,206.341],[0.49077,-0.871289]]],
				[[[286.604,185.444],[0.443372,-0.896338]],[[289.647,179.293],[0.635064,-0.77246]],[[294.002,173.995],[0.780686,-0.624923]],[[299.363,169.704],[0.850064,-0.526679]],[[305.205,166.084],[0.870589,-0.492012]],[[311.19,162.702],[0.870589,-0.492012]],[[311.19,162.702],[0.870589,-0.492012]]],
				[[[321.567,160.929],[0.766263,-0.642527]],[[322.918,159.797],[0.894037,-0.447993]],[[324.499,159.005],[0.950085,-0.311992]],[[326.18,158.453],[0.986214,-0.165474]],[[327.924,158.16],[0.978088,0.208193]],[[329.605,158.518],[0.978088,0.208193]],[[329.605,158.518],[0.978088,0.208193]]],
				[[[279.772,220.005],[0.670124,0.742249]],[[283.911,224.59],[0.993328,0.115326]],[[290.185,225.318],[0.953046,-0.302827]],[[296.247,223.392],[0.815115,-0.579299]],[[301.439,219.702],[0.635763,-0.771884]],[[305.492,214.781],[0.635763,-0.771884]],[[305.492,214.781],[0.635763,-0.771884]]],
				[[[314.334,219.603],[0.999761,-0.0218497]],[[317.773,219.528],[0.937033,-0.349241]],[[320.998,218.326],[0.810742,-0.585404]],[[323.795,216.307],[0.699959,-0.714183]],[[326.213,213.84],[0.632786,-0.774326]],[[328.399,211.164],[0.632786,-0.774326]],[[328.399,211.164],[0.632786,-0.774326]]],
				[[[349.372,174.388],[0.511842,-0.859079]],[[351.594,170.658],[0.512035,-0.858964]],[[353.817,166.929],[0.548427,-0.836199]],[[356.197,163.299],[0.629623,-0.776901]],[[358.928,159.93],[0.853635,-0.520871]],[[362.559,157.714],[0.853635,-0.520871]],[[362.559,157.714],[0.853635,-0.520871]]],
				[[[345.465,208.154],[0.666784,0.745251]],[[348.089,211.087],[0.980283,-0.197599]],[[351.963,210.306],[0.784425,-0.620223]],[[355.147,207.789],[0.66399,-0.747742]],[[357.846,204.749],[0.566034,-0.824382]],[[360.148,201.397],[0.566034,-0.824382]],[[360.148,201.397],[0.566034,-0.824382]]],
				[[[375.578,159.172],[0.638858,-0.769325]],[[378.491,155.664],[0.733855,-0.679306]],[[381.84,152.564],[0.795709,-0.60568]],[[385.472,149.799],[0.857526,-0.51444]],[[389.384,147.452],[0.970717,-0.240224]],[[393.728,146.378],[0.970717,-0.240224]],[[393.728,146.378],[0.970717,-0.240224]]],
				[[[378.886,185.78],[-0.0847285,0.996404]],[[378.294,192.745],[0.192523,0.981292]],[[379.626,199.534],[0.959622,0.281291]],[[385.783,201.338],[0.888677,-0.458534]],[[391.976,198.143],[0.793074,-0.609125]],[[397.522,193.883],[0.793074,-0.609125]],[[397.522,193.883],[0.793074,-0.609125]]],
				[[[416.812,154.499],[0.561831,-0.827252]],[[420.401,149.215],[0.583795,-0.811901]],[[424.128,144.032],[0.734402,-0.678715]],[[428.806,139.709],[0.886438,-0.462847]],[[434.454,136.76],[0.9597,-0.281028]],[[440.579,134.966],[0.9597,-0.281028]],[[440.579,134.966],[0.9597,-0.281028]]],
				[[[449.981,125.601],[0.3722,-0.928152]],[[459.542,101.76],[0.3722,-0.928152]],[[459.542,101.76],[0.3722,-0.928152]]],
				[[[411.588,191.472],[0.814718,0.579858]],[[415.295,194.11],[0.993304,-0.115528]],[[420.164,193.544],[0.930791,-0.365553]],[[424.742,191.746],[0.827012,-0.562184]],[[428.805,188.984],[0.589487,-0.807778]],[[431.682,185.042],[0.589487,-0.807778]],[[431.682,185.042],[0.589487,-0.807778]]],
				[[[439.71,185.864],[0.957622,0.288027]],[[445.514,187.61],[0.894915,-0.446236]],[[451.127,184.811],[0.727242,-0.686381]],[[455.721,180.475],[0.61986,-0.784713]],[[459.641,175.513],[0.535664,-0.844431]],[[463.028,170.172],[0.535664,-0.844431]],[[463.028,170.172],[0.535664,-0.844431]]],
				[[[468.253,150.882],[0.645942,-0.763386]],[[485.935,129.985],[0.645942,-0.763386]],[[485.935,129.985],[0.645942,-0.763386]]],
				[[[474.683,225.631],[0.329247,-0.944244]],[[479.06,213.077],[0.359034,-0.933325]],[[483.833,200.67],[0.443913,-0.89607]],[[489.731,188.764],[0.579685,-0.814841]],[[497.428,177.945],[0.708033,-0.706179]],[[506.833,168.565],[0.708033,-0.706179]],[[506.833,168.565],[0.708033,-0.706179]]],
				[[[502.562,139.611],[-0.0873843,-0.996175]],[[500.552,116.704],[-0.0873843,-0.996175]],[[500.552,116.704],[-0.0873843,-0.996175]]]
			];
			Bd._9 = [
				[
					[0,0.00880292,0.0327106,0.068627,0.114084,0.167018,0.225633,0.28828,0.353372,0.419294,0.484302,0.546392,0.6031,0.651173,0.685944,0.7,0.7],
					[0.7,0.686087,0.652041,0.605248,0.550153,0.489768,0.426335,0.361666,0.297346,0.234865,0.175729,0.121562,0.0742341,0.0360289,0.00991322,0,0],
					[0,0,0]
				]
			];
			Bd.jd = 300;
			Bd.Vc = 0;
		}

		this.Mb = function(vd) {
			vd.zb = 5;
			vd.Gb = 1;
			vd.Jb = 50;
			vd.Ib = 1;
		}

		this.Pb = function(Qb, Bd, vd) {
			vd.zb = 5;
		}

		this.fd = function(Bd, Xb) {
			Xb._ = 0.0;
			_1i = Db.kb(Bd.vd.Kb);
			_1i<0.537425?_1i<0.39144?_1i<0.321904?_1i<0.222077?_1i<0.106679?ctx.V(_1s,0,(_1i-0)*46.8696):ctx.V(_1s,1,(_1i-0.106679)*43.3284):ctx.V(_1s,2,(_1i-0.222077)*50.0863):_1i<0.37727?ctx.V(_1s,3,(_1i-0.321904)*90.3088):ctx.V(_1s,4,(_1i-0.37727)*352.864):_1i<0.470196?_1i<0.442393?ctx.V(_1s,5,(_1i-0.39144)*98.1287):ctx.V(_1s,6,(_1i-0.442393)*179.839):_1i<0.50505?ctx.V(_1s,7,(_1i-0.470196)*143.457):ctx.V(_1s,8,(_1i-0.50505)*154.439):_1i<0.761176?_1i<0.68079?_1i<0.629358?_1i<0.57407?ctx.V(_1s,9,(_1i-0.537425)*136.445):ctx.V(_1s,10,(_1i-0.57407)*90.4352):ctx.V(_1s,11,(_1i-0.629358)*97.2151):_1i<0.722212?ctx.V(_1s,12,(_1i-0.68079)*24.1419):ctx.V(_1s,13,(_1i-0.722212)*128.322):_1i<0.855788?_1i<0.811645?ctx.V(_1s,14,(_1i-0.761176)*99.0712):ctx.V(_1s,15,(_1i-0.811645)*22.6535):_1i<0.96292?ctx.V(_1s,16,(_1i-0.855788)*46.6716):ctx.V(_1s,17,(_1i-0.96292)*26.9684);
			Db.mb(_1, Bd._1[_1s[0]], _1s[1]);
			ctx.W(_2, _1[0][0], _1[0][1], 0);
			Xb._3 = [];
			ctx.T(Xb._3, _2);
			ctx.ub(_4, [0,0], -135, 200, _1[0]);
			Xb._5 = _4[0];
			_6 = ctx.jb(Math.atan2(_1[1][1], _1[1][0]));
			Xb._7 = _6;
			ctx.T(Xb.Ab, Xb._3);
		}

		this.gd = function(Bd, Xb) {
			Xb._ = 0.0;
			_1i = Db.kb(Bd.vd.Kb);
			_1i<0.537425?_1i<0.39144?_1i<0.321904?_1i<0.222077?_1i<0.106679?ctx.V(_1s,0,(_1i-0)*46.8696):ctx.V(_1s,1,(_1i-0.106679)*43.3284):ctx.V(_1s,2,(_1i-0.222077)*50.0863):_1i<0.37727?ctx.V(_1s,3,(_1i-0.321904)*90.3088):ctx.V(_1s,4,(_1i-0.37727)*352.864):_1i<0.470196?_1i<0.442393?ctx.V(_1s,5,(_1i-0.39144)*98.1287):ctx.V(_1s,6,(_1i-0.442393)*179.839):_1i<0.50505?ctx.V(_1s,7,(_1i-0.470196)*143.457):ctx.V(_1s,8,(_1i-0.50505)*154.439):_1i<0.761176?_1i<0.68079?_1i<0.629358?_1i<0.57407?ctx.V(_1s,9,(_1i-0.537425)*136.445):ctx.V(_1s,10,(_1i-0.57407)*90.4352):ctx.V(_1s,11,(_1i-0.629358)*97.2151):_1i<0.722212?ctx.V(_1s,12,(_1i-0.68079)*24.1419):ctx.V(_1s,13,(_1i-0.722212)*128.322):_1i<0.855788?_1i<0.811645?ctx.V(_1s,14,(_1i-0.761176)*99.0712):ctx.V(_1s,15,(_1i-0.811645)*22.6535):_1i<0.96292?ctx.V(_1s,16,(_1i-0.855788)*46.6716):ctx.V(_1s,17,(_1i-0.96292)*26.9684);
			Db.mb(_1, Bd._1[_1s[0]], _1s[1]);
			ctx.W(_2, _1[0][0], _1[0][1], 0);
			Xb._3 = [];
			ctx.T(Xb._3, _2);
			ctx.ub(_4, [0,0], -135, 200, _1[0]);
			Xb._5 = _4[0];
			_6 = ctx.jb(Math.atan2(_1[1][1], _1[1][0]));
			Xb._7 = _6;
			ctx.T(Xb.Ab, Xb._3);
		}

		this.qc = function(Qb, Bd, Xb) {
			Xb._ += Qb;
			ctx.T(Xb.Ab, Xb._3);
			_8 = ((Bd.Rb * 2) + Xb._5);
			_9i0=(_8<0?(3-((0-_8)%3)):(_8>3?(0+((_8-0)%3)):_8));
			_9i0<0.2?_9i0<0.1?ctx.V(_9s0,0,(_9i0-0)*150):ctx.V(_9s0,1,(_9i0-0.1)*150):ctx.V(_9s0,2,(_9i0-0.2)*0.357143);
			_9 = Db.nb(Bd._9[0][_9s0[0]],_9s0[1]);
			ctx.S(Xb.Pd,[0.5,0.5]);
			Xb.Md = Xb._7;
			ctx.S(Xb.Nd,[30,10]);
			ctx.T(Xb.gf,[1,1,1]);
			Xb.Od = _9;
			Xb.Qc = 0;
		}

		this.Cc = function(Bd, Xb, Wc) {
			if (0 > 1) return true;
			return false;
		}


	}

	this.qd = function(Ld) {
		Ld.Dd = 0.0333333;
		Ld.Ud = 0;
		Ld.rand = function() { return Math.random(); };
		Ld.pd(new Emitter_DefaultEmitter());
	}
		this.kb = function (v) { 			return (v < 0) ? 0 : ((v > 1) ? 1 : v); 		}

		this.mb = function(r, path, je) { 			var indexInt = Math.floor(je); 			var lerp = je - indexInt; 			ctx.Y(r[0], path[indexInt][0], path[indexInt + 1][0], lerp); 			ctx.Y(r[1], path[indexInt][1], path[indexInt + 1][1], lerp); 		}

		this.nb = function(funcValues, je) { 			var indexInt = Math.floor(je); 			var nextInt = indexInt + 1; 			return ctx.X(funcValues[indexInt], funcValues[nextInt], je - indexInt); 		}


}

return Logo_shine;
}));
