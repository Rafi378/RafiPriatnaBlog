(function() {
  var n = this,
    aa = function(a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b
    },
    ba = function(a) {
      return "number" == typeof a
    },
    ca = function(a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    },
    da = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    ea = function(a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function() {
        return a.apply(b,
          arguments)
      }
    },
    p = function(a, b, c) {
      p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
      return p.apply(null, arguments)
    },
    q = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
      }
    },
    fa = Date.now || function() {
      return +new Date
    },
    u = function(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Y = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.ta = function(a, c, f) {
        for (var d = Array(arguments.length -
            2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
      }
    };
  var ga = (new Date).getTime();
  var v = function(a) {
      a = parseFloat(a);
      return isNaN(a) || 1 < a || 0 > a ? 0 : a
    },
    z = function(a) {
      a = parseFloat(a);
      return isNaN(a) ? 0 : a
    },
    A = function(a, b) {
      var c = parseInt(a, 10);
      return isNaN(c) ? b : c
    },
    ha = function(a, b) {
      return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
    },
    ia = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,
    ja = function(a, b) {
      if (!a) return b;
      var c = a.match(ia);
      return c ? c[0] : b
    };
  var ka = A("100", -1),
    la = A("100", 0),
    ma = v("0.04"),
    na = v("0.04"),
    pa = v("0.05"),
    qa = A("468", 0),
    ra = z("0.55"),
    sa = z("2.72"),
    ta =
    v("0.05"),
    ua = A("468", 0),
    va = z("0.5"),
    wa = z(""),
    xa = A("468", 0),
    ya = z("0.82"),
    za = z("3.82"),
    Aa = z("0.96"),
    Ba = z("3.74"),
    Ca = v("0.02"),
    Da = v("0.001"),
    Ea = v("0.0"),
    Fa = v("0.1");
  var Ga = function() {
      return "r20161004"
    },
    Ha = ha("false", !1),
    Ia = ha("false", !1),
    Ja = ha("true", !1),
    Ka = Ja || !Ia,
    La = ha("true", !0);
  var Ma = document,
    B = window;
  var Na = String.prototype.trim ? function(a) {
      return a.trim()
    } : function(a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    },
    Va = function(a) {
      if (!Oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Sa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ta, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ua, "&#0;"));
      return a
    },
    Pa = /&/g,
    Qa = /</g,
    Ra = />/g,
    Sa = /"/g,
    Ta = /'/g,
    Ua = /\x00/g,
    Oa = /[\x00&<>"']/,
    Wa = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "<"
    },
    Xa = {
      "'": "\\'"
    },
    Ya = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    },
    Za = function(a) {
      return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
      })
    };
  var $a = function(a) {
    $a[" "](a);
    return a
  };
  $a[" "] = function() {};
  var bb = function(a, b) {
    var c = ab;
    Object.prototype.hasOwnProperty.call(c, a) || (c[a] = b(a))
  };
  var cb = function(a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            $a(a.foo);
            b = !0;
            break a
          } catch (c) {}
          b = !1
        }
        return b
      } catch (c) {
        return !1
      }
    },
    db = function(a, b) {
      return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    },
    fb = function(a, b) {
      if (!(1E-4 > Math.random())) {
        var c = Math.random();
        if (c < b) return c = eb(window), a[Math.floor(c * a.length)]
      }
      return null
    },
    eb = function(a) {
      try {
        var b = new Uint32Array(1);
        a.crypto.getRandomValues(b);
        return b[0] / 65536 / 65536
      } catch (c) {
        return Math.random()
      }
    },
    gb = function(a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a,
        c) && b.call(void 0, a[c], c, a)
    },
    hb = function(a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
      return 0 < c ? c : 4294967296 + c
    },
    ib = /^([0-9.]+)px$/,
    jb = /^(-?[0-9.]{1,30})$/,
    kb = function(a) {
      return jb.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    },
    lb = function(a) {
      return (a = ib.exec(a)) ? +a[1] : null
    };
  var mb = function(a, b) {
      this.j = a;
      this.l = b
    },
    nb = function(a, b, c) {
      this.url = a;
      this.j = b;
      this.J = !!c;
      this.depth = ba(void 0) ? void 0 : null
    };
  var ob = function(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
  };
  var pb = function(a, b, c, d, e) {
      this.w = c || 4E3;
      this.m = a || "&";
      this.A = b || ",$";
      this.s = void 0 !== d ? d : "trn";
      this.C = e || null;
      this.v = !1;
      this.l = {};
      this.B = 0;
      this.j = []
    },
    qb = function(a, b) {
      var c = {};
      c[a] = b;
      return [c]
    },
    D = function(a, b, c, d) {
      a.j.push(b);
      a.l[b] = qb(c, d)
    },
    tb = function(a, b, c, d) {
      b = b + "//" + c + d;
      var e = rb(a) - d.length - 0;
      if (0 > e) return "";
      a.j.sort(function(a, b) {
        return a - b
      });
      d = null;
      c = "";
      for (var f = 0; f < a.j.length; f++)
        for (var g = a.j[f], k = a.l[g], h = 0; h < k.length; h++) {
          if (!e) {
            d = null == d ? g : d;
            break
          }
          var l = sb(k[h], a.m, a.A);
          if (l) {
            l = c + l;
            if (e >= l.length) {
              e -= l.length;
              b += l;
              c = a.m;
              break
            } else a.v && (c = e, l[c - 1] == a.m && --c, b += l.substr(0, c), c = a.m, e = 0);
            d = null == d ? g : d
          }
        }
      f = "";
      a.s && null != d && (f = c + a.s + "=" + (a.C || d));
      return b + f + ""
    },
    rb = function(a) {
      if (!a.s) return a.w;
      var b = 1,
        c;
      for (c in a.l) b = c.length > b ? c.length : b;
      return a.w - a.s.length - b - a.m.length - 1
    },
    sb = function(a, b, c, d, e) {
      var f = [];
      gb(a, function(a, k) {
        var g = ub(a, b, c, d, e);
        g && f.push(k + "=" + g)
      });
      return f.join(b)
    },
    ub = function(a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (d = d || 0, d < c.length) {
          for (var f = [], g = 0; g < a.length; g++) f.push(ub(a[g], b, c, d + 1, e));
          return f.join(c[d])
        }
      } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(sb(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a))
    };
  var wb = function(a, b, c, d, e, f) {
      if ((d ? a.v : Math.random()) < (e || a.j)) try {
        var g;
        c instanceof pb ? g = c : (g = new pb, gb(c, function(a, b) {
          var c = g,
            d = c.B++,
            e = qb(b, a);
          c.j.push(d);
          c.l[d] = e
        }));
        var k = tb(g, a.s, a.l, a.m + b + "&");
        k && ("undefined" === typeof f ? vb(k) : vb(k, f))
      } catch (h) {}
    },
    vb = function(a, b) {
      n.google_image_requests || (n.google_image_requests = []);
      var c = n.document.createElement("img");
      if (b) {
        var d = function(a) {
          b(a);
          a = d;
          c.removeEventListener ? c.removeEventListener("load", a, !1) : c.detachEvent && c.detachEvent("onload", a);
          a = d;
          c.removeEventListener ?
            c.removeEventListener("error", a, !1) : c.detachEvent && c.detachEvent("onerror", a)
        };
        ob(c, "load", d);
        ob(c, "error", d)
      }
      c.src = a;
      n.google_image_requests.push(c)
    };
  var xb = function(a, b, c) {
      this.v = a;
      this.A = b;
      this.m = c;
      this.l = null;
      this.w = this.j;
      this.s = !1
    },
    yb = function(a, b, c) {
      this.message = a;
      this.j = b || "";
      this.l = c || -1
    },
    Ab = function(a, b, c, d, e, f) {
      var g;
      try {
        g = c()
      } catch (l) {
        var k = a.m;
        try {
          var h = zb(l),
            k = (f || a.w).call(a, b, h, void 0, d)
        } catch (m) {
          a.j("pAR", m)
        }
        if (!k) throw l;
      } finally {
        if (e) try {
          e()
        } catch (l) {}
      }
      return g
    },
    G = function(a, b, c) {
      var d = E;
      return function() {
        for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
        return Ab(d, a, function() {
          return b.apply(void 0, e)
        }, void 0, c)
      }
    };
  xb.prototype.j = function(a, b, c, d, e) {
    try {
      var f = e || this.A,
        g = new pb;
      g.v = !0;
      D(g, 1, "context", a);
      b instanceof yb || (b = zb(b));
      D(g, 2, "msg", b.message.substring(0, 512));
      b.j && D(g, 3, "file", b.j);
      0 < b.l && D(g, 4, "line", b.l.toString());
      b = {};
      if (this.l) try {
        this.l(b)
      } catch (r) {}
      if (d) try {
        d(b)
      } catch (r) {}
      d = [b];
      g.j.push(5);
      g.l[5] = d;
      var k;
      e = n;
      d = [];
      var h, l = null;
      do {
        b = e;
        cb(b) ? (h = b.location.href, l = b.document && b.document.referrer || null) : (h = l, l = null);
        d.push(new nb(h || "", b));
        try {
          e = b.parent
        } catch (r) {
          e = null
        }
      } while (e && b != e);
      h = 0;
      for (var m =
          d.length - 1; h <= m; ++h) d[h].depth = m - h;
      b = n;
      if (b.location && b.location.ancestorOrigins && b.location.ancestorOrigins.length == d.length - 1)
        for (h = 1; h < d.length; ++h) {
          var t = d[h];
          t.url || (t.url = b.location.ancestorOrigins[h - 1] || "", t.J = !0)
        }
      for (var x = new nb(n.location.href, n, !1), y = d.length - 1, m = y; 0 <= m; --m) {
        var w = d[m];
        if (w.url && !w.J) {
          x = w;
          break
        }
      }
      var w = null,
        C = d.length && d[y].url;
      0 != x.depth && C && (w = d[y]);
      k = new mb(x, w);
      k.l && D(g, 6, "top", k.l.url || "");
      D(g, 7, "url", k.j.url || "");
      wb(this.v, f, g, this.s, c)
    } catch (r) {
      try {
        wb(this.v, f, {
          context: "ecmserr",
          rctx: a,
          msg: Bb(r),
          url: k.j.url
        }, this.s, c)
      } catch (K) {}
    }
    return this.m
  };
  var zb = function(a) {
      return new yb(Bb(a), a.fileName, a.lineNumber)
    },
    Bb = function(a) {
      var b = a.toString();
      a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
      a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
      if (a.stack) {
        a = a.stack;
        var c = b;
        try {
          -1 == a.indexOf(c) && (a = c + "\n" + a);
          for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
          b = a.replace(/\n */g, "\n")
        } catch (e) {
          b = c
        }
      }
      return b
    };
  var Cb = Array.prototype.forEach ? function(a, b, c) {
      Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Db = Array.prototype.map ? function(a, b, c) {
      return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
      for (var d = a.length, e = Array(d), f = "string" == typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
      return e
    };
  var H;
  a: {
    var Eb = n.navigator;
    if (Eb) {
      var Fb = Eb.userAgent;
      if (Fb) {
        H = Fb;
        break a
      }
    }
    H = ""
  }
  var I = function(a) {
    return -1 != H.indexOf(a)
  };
  var Gb = I("Opera"),
    J = I("Trident") || I("MSIE"),
    Hb = I("Edge"),
    Ib = I("Gecko") && !(-1 != H.toLowerCase().indexOf("webkit") && !I("Edge")) && !(I("Trident") || I("MSIE")) && !I("Edge"),
    Jb = -1 != H.toLowerCase().indexOf("webkit") && !I("Edge"),
    Kb = function() {
      var a = n.document;
      return a ? a.documentMode : void 0
    },
    Lb;
  a: {
    var Mb = "",
      Nb = function() {
        var a = H;
        if (Ib) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Hb) return /Edge\/([\d\.]+)/.exec(a);
        if (J) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Jb) return /WebKit\/(\S+)/.exec(a);
        if (Gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();Nb && (Mb = Nb ? Nb[1] : "");
    if (J) {
      var Ob = Kb();
      if (null != Ob && Ob > parseFloat(Mb)) {
        Lb = String(Ob);
        break a
      }
    }
    Lb = Mb
  }
  var Pb = Lb,
    ab = {},
    Qb = function(a) {
      bb(a, function() {
        for (var b = 0, c = Na(String(Pb)).split("."), d = Na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
            k = d[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
            if (0 == g[0].length && 0 == k[0].length) break;
            b = Ya(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Ya(0 == g[2].length, 0 == k[2].length) || Ya(g[2], k[2]);
            g = g[3];
            k = k[3]
          } while (0 == b)
        }
        return 0 <= b
      })
    },
    Rb;
  var Sb = n.document;
  Rb = Sb && J ? Kb() || ("CSS1Compat" == Sb.compatMode ? parseInt(Pb, 10) : 5) : void 0;
  var Tb;
  if (!(Tb = !Ib && !J)) {
    var Ub;
    if (Ub = J) Ub = 9 <= Number(Rb);
    Tb = Ub
  }
  Tb || Ib && Qb("1.9.1");
  J && Qb("9");
  var Vb = Object.prototype.hasOwnProperty,
    Wb = function(a, b) {
      for (var c in a) Vb.call(a, c) && b.call(void 0, a[c], c, a)
    },
    Xb = function(a) {
      return !(!a || !a.call) && "function" === typeof a
    },
    Yb = function(a, b) {
      for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
    },
    M = function(a, b) {
      if (a.indexOf) {
        var c = a.indexOf(b);
        return 0 < c || 0 === c
      }
      for (c = 0; c < a.length; c++)
        if (a[c] === b) return !0;
      return !1
    },
    Zb = function(a) {
      a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    },
    $b = /(^| )adsbygoogle($| )/,
    ac = {
      "http://googleads.g.doubleclick.net": !0,
      "http://pagead2.googlesyndication.com": !0,
      "https://googleads.g.doubleclick.net": !0,
      "https://pagead2.googlesyndication.com": !0
    },
    bc = /\.google\.com(:\d+)?$/,
    cc = function(a) {
      a = Ha && a.google_top_window || a.top;
      return cb(a) ? a : null
    };
  var dc, E, ec, fc = [],
    gc = 1E-4 > Math.random(),
    hc = !(!B.performance || !B.performance.now);
  dc = new function() {
    this.s = "http:" === B.location.protocol ? "http:" : "https:";
    this.l = "pagead2.googlesyndication.com";
    this.m = "/pagead/gen_204?id=";
    this.j = .01;
    this.v = Math.random()
  };
  E = new xb(dc, "jserror", !0);
  var jc = function() {
      var a = [ic];
      E.l = function(b) {
        Cb(a, function(a) {
          a(b)
        })
      }
    },
    lc = function(a, b, c, d) {
      if (gc) {
        var e = hc ? B.performance.now() : fa();
        Ab(E, a, c, d, void 0, b);
        b = Math.round((hc ? B.performance.now() : fa()) - e);
        fc.push(a + "." + b);
        ec || (ec = B.setTimeout(kc, 500))
      } else Ab(E, a, c, d, void 0, b)
    },
    mc = E.j,
    kc = function() {
      fc.length && (wb(dc, "execution_time", {
        data: fc.join(","),
        nav_api: hc ? 1 : 0
      }, !0, gc ? 1 : 0), fc = [], B.clearTimeout(ec), ec = void 0)
    };
  var nc = function(a, b, c) {
      lc("files::getSrc", mc, function() {
        if ("https:" == B.location.protocol && "http" == c) throw c = "https", Error("Requested url " + a + b);
      });
      return [c, "://", a, b].join("")
    },
    oc = function(a, b, c) {
      c || (c = Ka ? "https" : "http");
      return nc(a, b, c)
    };
  var pc = I("Safari") && !((I("Chrome") || I("CriOS")) && !I("Edge") || I("Coast") || I("Opera") || I("Edge") || I("Silk") || I("Android")) && !(I("iPhone") && !I("iPod") && !I("iPad") || I("iPad") || I("iPod"));
  var qc = null,
    rc = null,
    sc = Ib || Jb && !pc || Gb || "function" == typeof n.btoa,
    tc = function(a, b) {
      var c;
      if (sc && !b) c = n.btoa(a);
      else {
        c = [];
        for (var d = 0, e = 0; e < a.length; e++) {
          for (var f = a.charCodeAt(e); 255 < f;) c[d++] = f & 255, f >>= 8;
          c[d++] = f
        }
        if (!qc)
          for (qc = {}, rc = {}, d = 0; 65 > d; d++) qc[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d), rc[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(d);
        d = b ? rc : qc;
        e = [];
        for (f = 0; f < c.length; f += 3) {
          var g = c[f],
            k = f + 1 < c.length,
            h = k ? c[f + 1] : 0,
            l = f +
            2 < c.length,
            m = l ? c[f + 2] : 0,
            t = g >> 2,
            g = (g & 3) << 4 | h >> 4,
            h = (h & 15) << 2 | m >> 6,
            m = m & 63;
          l || (m = 64, k || (h = 64));
          e.push(d[t], d[g], d[h], d[m])
        }
        c = e.join("")
      }
      return c
    };
  var uc = function(a) {
    return eval("(" + a + ")")
  };
  var N = function() {},
    vc = "function" == typeof Uint8Array,
    xc = function(a, b, c) {
      a.j = null;
      b || (b = []);
      a.A = void 0;
      a.s = -1;
      a.l = b;
      a: {
        if (a.l.length) {
          b = a.l.length - 1;
          var d = a.l[b];
          if (d && "object" == typeof d && "array" != aa(d) && !(vc && d instanceof Uint8Array)) {
            a.v = b - a.s;
            a.m = d;
            break a
          }
        }
        a.v = Number.MAX_VALUE
      }
      a.w = {};
      if (c)
        for (b = 0; b < c.length; b++) d = c[b], d < a.v ? (d += a.s, a.l[d] = a.l[d] || wc) : a.m[d] = a.m[d] || wc
    },
    wc = [],
    O = function(a, b) {
      if (b < a.v) {
        var c = b + a.s,
          d = a.l[c];
        return d === wc ? a.l[c] = [] : d
      }
      d = a.m[b];
      return d === wc ? a.m[b] = [] : d
    },
    yc = function(a,
      b, c) {
      a.j || (a.j = {});
      if (!a.j[c]) {
        var d = O(a, c);
        d && (a.j[c] = new b(d))
      }
      return a.j[c]
    },
    Ac = function(a) {
      if (a.j)
        for (var b in a.j) {
          var c = a.j[b];
          if ("array" == aa(c))
            for (var d = 0; d < c.length; d++) c[d] && zc(c[d]);
          else c && zc(c)
        }
    },
    zc = function(a) {
      Ac(a);
      return a.l
    };
  N.prototype.toString = function() {
    Ac(this);
    return this.l.toString()
  };
  N.prototype.clone = function() {
    return new this.constructor(Bc(zc(this)))
  };
  var Bc = function(a) {
    var b;
    if ("array" == aa(a)) {
      for (var c = Array(a.length), d = 0; d < a.length; d++) null != (b = a[d]) && (c[d] = "object" == typeof b ? Bc(b) : b);
      return c
    }
    if (vc && a instanceof Uint8Array) return new Uint8Array(a);
    c = {};
    for (d in a) null != (b = a[d]) && (c[d] = "object" == typeof b ? Bc(b) : b);
    return c
  };
  var Dc = function(a) {
    xc(this, a, Cc)
  };
  u(Dc, N);
  var Cc = [4],
    Ec = function(a) {
      xc(this, a, null)
    };
  u(Ec, N);
  var Fc = function(a) {
    xc(this, a, null)
  };
  u(Fc, N);
  var Hc = function(a) {
    xc(this, a, Gc)
  };
  u(Hc, N);
  var Gc = [6, 7, 9];
  var Jc = function(a) {
    xc(this, a, Ic)
  };
  u(Jc, N);
  var Ic = [1, 2, 5],
    Kc = function(a) {
      xc(this, a, null)
    };
  u(Kc, N);
  var Lc = {
    google_tag_origin: "qs"
  };
  var Mc = null,
    Nc = function() {
      if (!Mc) {
        for (var a = window, b = a, c = 0; a && a != a.parent;)
          if (a = a.parent, c++, cb(a)) b = a;
          else break;
        Mc = b
      }
      return Mc
    };
  var Oc = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
    full_page: 6
  };
  var P = function(a) {
    a = a.document;
    return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
  };
  var Pc = function() {
    return !(I("iPad") || I("Android") && !I("Mobile") || I("Silk")) && (I("iPod") || I("iPhone") || I("Android") || I("IEMobile"))
  };
  var Qc = function(a) {
    var b = ["adsbygoogle-placeholder"];
    a = a.className ? a.className.split(/\s+/) : [];
    for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
    for (d = 0; d < b.length; ++d)
      if (!c[b[d]]) return !1;
    return !0
  };
  var Rc = function(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = Za(d.ua);
      a[e] = d.value
    }
  };
  var Sc = function(a, b) {
    var c = a.length;
    if (null != c)
      for (var d = 0; d < c; d++) b.call(void 0, a[d], d)
  };
  var Tc = function(a, b, c, d) {
      this.s = a;
      this.l = b;
      this.m = c;
      this.j = d
    },
    Uc = function(a, b) {
      if (null == a.j) return b;
      switch (a.j) {
        case 1:
          return b.slice(1);
        case 2:
          return b.slice(0, b.length - 1);
        case 3:
          return b.slice(1, b.length - 1);
        case 0:
          return b;
        default:
          throw Error("Unknown ignore mode: " + a.j);
      }
    },
    Wc = function(a) {
      var b = [];
      Sc(a.getElementsByTagName("p"), function(a) {
        100 <= Vc(a) && b.push(a)
      });
      return b
    },
    Vc = function(a) {
      if (3 == a.nodeType) return a.length;
      if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
      var b = 0;
      Sc(a.childNodes, function(a) {
        b +=
          Vc(a)
      });
      return b
    },
    Xc = function(a) {
      return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };
  var Yc = {
      1: 1,
      2: 2,
      3: 3,
      0: 0
    },
    Zc = function(a) {
      return null != a ? Yc[a] : a
    },
    $c = {
      1: 0,
      2: 1,
      3: 2,
      4: 3
    };
  var ad = function(a, b) {
      if (!a) return !1;
      var c = db(a, b);
      if (!c) return !1;
      c = c.cssFloat || c.styleFloat;
      return "left" == c || "right" == c
    },
    bd = function(a) {
      for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
      return a ? a : null
    },
    cd = function(a) {
      return !!a.nextSibling || !!a.parentNode && cd(a.parentNode)
    };
  var dd = {
    "120x1": !0,
    "160x1": !0,
    "180x1": !0,
    "200x1": !0,
    "468x15": !0,
    "728x15": !0
  };
  var fd = function() {
      this.l = new ed(this);
      this.j = 0
    },
    gd = function(a) {
      if (0 != a.j) throw Error("Already resolved/rejected.");
    },
    ed = function(a) {
      this.j = a
    };
  ed.prototype.then = function(a, b) {
    if (this.l) throw Error("Then functions already set.");
    this.l = a;
    this.m = b;
    hd(this)
  };
  var hd = function(a) {
    switch (a.j.j) {
      case 0:
        break;
      case 1:
        a.l && a.l(a.j.s);
        break;
      case 2:
        a.m && a.m(a.j.m);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  };
  var id = function(a) {
      this.exception = a
    },
    jd = function(a, b, c, d) {
      this.l = a;
      this.m = b;
      this.v = c;
      this.j = d
    };
  jd.prototype.start = function() {
    this.s()
  };
  jd.prototype.s = function() {
    try {
      switch (this.l.document.readyState) {
        case "complete":
        case "interactive":
          kd(this.m, !0);
          ld(this);
          break;
        default:
          var a = this.m;
          kd(a, !1);
          a.l ? ld(this) : this.l.setTimeout(p(this.s, this), this.v)
      }
    } catch (b) {
      ld(this, b)
    }
  };
  var ld = function(a, b) {
    try {
      var c = a.j,
        d = new id(b);
      gd(c);
      c.j = 1;
      c.s = d;
      hd(c.l)
    } catch (e) {
      c = a.j, gd(c), c.j = 2, c.m = e, hd(c.l)
    }
  };
  var md = function(a, b) {
    a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
    wb(dc, "ama", b, !0, .01, void 0)
  };
  var nd = function(a, b) {
      this.j = n;
      this.v = a;
      this.m = b;
      this.s = Lc;
      this.l = !1
    },
    kd = function(a, b) {
      if (!a.l) {
        var c;
        c = a.m;
        c.j || (c.j = {});
        if (!c.j[1]) {
          for (var d = O(c, 1), e = [], f = 0; f < d.length; f++) e[f] = new Hc(d[f]);
          c.j[1] = e
        }
        d = c.j[1];
        d == wc && (d = c.j[1] = []);
        c = d;
        for (d = 0; d < c.length; d++)
          if (e = c[d], 1 == O(e, 8) && (f = yc(e, Fc, 4)) && 2 == O(f, 1) && od(a, e, b)) {
            a.l = !0;
            (window.google_ama_state = window.google_ama_state || {}).placement = d;
            break
          }
      }
    },
    od = function(a, b, c) {
      if (1 != O(b, 8)) return !1;
      var d = yc(b, Dc, 1);
      if (!d) return !1;
      var e;
      e = O(d, 7);
      if (O(d, 1) || O(d,
          3) || 0 < O(d, 4).length) {
        var f = O(d, 3),
          g = O(d, 1),
          k = O(d, 4);
        e = O(d, 2);
        var h = O(d, 5),
          l = Zc(O(d, 6)),
          m = "";
        g && (m += g);
        f && (m += "#" + Xc(f));
        if (k)
          for (f = 0; f < k.length; f++) m += "." + Xc(k[f]);
        e = (k = m) ? new Tc(k, e, h, l) : null
      } else e = e ? new Tc(e, O(d, 2), O(d, 5), Zc(O(d, 6))) : null;
      if (!e) return !1;
      h = [];
      try {
        h = a.j.document.querySelectorAll(e.s)
      } catch (y) {}
      if (h.length) {
        l = h.length;
        if (0 < l) {
          k = Array(l);
          for (m = 0; m < l; m++) k[m] = h[m];
          h = k
        } else h = [];
        ba(e.l) && (l = e.l, 0 > l && (l += h.length), h = 0 <= l && l < h.length ? [h[l]] : []);
        if (ba(e.m)) {
          l = [];
          for (k = 0; k < h.length; k++) m =
            Wc(h[k]), f = e.m, 0 > f && (f += m.length), 0 <= f && f < m.length && l.push(m[f]);
          h = l
        }
        e = h = Uc(e, h)
      } else e = [];
      if (0 == e.length) return !1;
      e = e[0];
      h = O(d, 2);
      d = O(b, 2);
      d = $c[d];
      d = void 0 !== d ? d : null;
      if (!(l = null == d)) {
        a: {
          l = a.j;
          if (null != h) switch (d) {
            case 0:
              h = ad(bd(e), l);
              break a;
            case 3:
              h = ad(e, l);
              break a;
            case 2:
              h = e.lastChild;
              h = ad(h ? 1 == h.nodeType ? h : bd(h) : null, l);
              break a
          }
          h = !1
        }
        if (c = !h && !(!c && 2 == d && !cd(e))) c = 1 == d || 2 == d ? e : e.parentNode,
        c = !(c && ("INS" != c.tagName || !Qc(c)) && 0 >= c.offsetWidth);l = !c
      }
      if (l) return !1;
      b = yc(b, Ec, 3);
      h = {};
      b && (h.L = O(b, 1),
        h.I = O(b, 2), h.U = !!O(b, 3));
      b = a.j;
      c = a.s;
      l = a.v;
      k = b.document;
      a = k.createElement("div");
      m = a.style;
      m.textAlign = "center";
      m.width = "100%";
      m.height = "auto";
      m.clear = h.U ? "both" : "none";
      h.W && Rc(m, h.W);
      k = k.createElement("ins");
      m = k.style;
      m.display = "block";
      m.margin = "auto";
      m.backgroundColor = "transparent";
      h.L && (m.marginTop = h.L);
      h.I && (m.marginBottom = h.I);
      h.T && Rc(m, h.T);
      a.appendChild(k);
      k.setAttribute("data-ad-format", "auto");
      h = ["ama-quickstart"];
      a.className = "googlepublisherpluginad";
      k.className = "adsbygoogle";
      k.setAttribute("data-ad-client",
        l);
      h.length && k.setAttribute("data-ad-channel", h.join("+"));
      var t;
      a: {
        try {
          switch (d) {
            case 0:
              e.parentNode && e.parentNode.insertBefore(a, e);
              break;
            case 3:
              if (t = e.parentNode) {
                var x = e.nextSibling;
                if (x && x.parentNode != t)
                  for (; x && 8 == x.nodeType;) x = x.nextSibling;
                t.insertBefore(a, x)
              }
              break;
            case 1:
              e.insertBefore(a, e.firstChild);
              break;
            case 2:
              e.appendChild(a)
          }
          "INS" == e.tagName && Qc(e) && (e.style.display = "block");
          k.setAttribute("data-adsbygoogle-status", "reserved");
          t = {
            element: k
          };
          c && (t.params = c);
          (b.adsbygoogle = b.adsbygoogle || []).push(t)
        } catch (y) {
          a && a.parentNode && a.parentNode.removeChild(a);
          t = !1;
          break a
        }
        t = !0
      }
      return t ? !0 : !1
    };
  var pd = function(a) {
      md(a, {
        atf: 1
      })
    },
    qd = function(a, b) {
      (a.google_ama_state = a.google_ama_state || {}).exception = b;
      md(a, {
        atf: 0
      })
    };
  var rd = function() {
      this.wasPlaTagProcessed = !1;
      this.wasReactiveAdConfigReceived = {};
      this.wasReactiveAdCreated = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledByReactiveTag = {};
      this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
      this.reactiveTypeDisabledByPublisher = {};
      this.debugCard = null;
      this.debugCardRequested = !1;
      this.interstitialJSRefactorExperiment = 0;
      this.messageValidationEnabled = this.vignetteNmoScaledExperimentAndEligible =
        this.vignetteNmoScaledExperiment = this.floatingNmoOrientationExperimentAndEligible = this.floatingNmoOrientationExperiment = this.floatingNmoScaledExperimentAndEligible = this.floatingNmoScaledExperiment = !1;
      this.grappleTagStatusService = null
    },
    sd = function(a) {
      a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new rd);
      return a.google_reactive_ads_global_state
    };
  var td = function(a, b) {
    this.start = a < b ? a : b;
    this.j = a < b ? b : a
  };
  td.prototype.clone = function() {
    return new td(this.start, this.j)
  };
  var ud = function() {
    var a;
    try {
      a = parseInt(B.localStorage.getItem("google_experiment_mod"), 10)
    } catch (b) {
      return null
    }
    if (0 <= a && 1E3 > a) return a;
    a = Math.floor(1E3 * eb(B));
    try {
      return B.localStorage.setItem("google_experiment_mod", "" + a), a
    } catch (b) {
      return null
    }
  };
  var vd = {
      u: "10573511",
      o: "10573512"
    },
    wd = {
      u: "10573507",
      o: "10573508"
    },
    xd = {
      u: "10583695",
      o: "10583696"
    },
    yd = {
      u: "10573695",
      o: "10573696"
    },
    zd = {
      u: "10593695",
      o: "10593696"
    },
    Ad = {
      u: "408130",
      o: "408131"
    },
    Bd = {
      u: "408135",
      o: "408136"
    },
    Q = {
      da: {},
      sa: {
        u: "453848102",
        o: "453848103"
      },
      la: {
        u: "24819308",
        o: "24819309",
        aa: "24819320",
        fa: "24819321"
      },
      ka: {
        u: "24819330",
        o: "24819331"
      },
      ha: {
        u: "86724438",
        o: "86724439"
      },
      F: {
        u: "10573597",
        o: "10573598"
      },
      G: {
        u: "10573581",
        o: "10573582"
      },
      ea: {
        u: "26835105",
        o: "26835106"
      },
      D: {
        u: "20040000",
        o: "20040001"
      },
      ba: {
        u: "20040016",
        o: "20040017"
      },
      ca: {
        Z: "314159230",
        ja: "314159231"
      },
      ia: {
        oa: "27285692",
        qa: "27285712",
        pa: "27285713"
      },
      ma: {
        u: "27415010",
        o: "27415011"
      },
      ga: {
        u: "1091300",
        o: "1091301"
      },
      R: {
        u: "62710000",
        o: "62710001"
      }
    };
  var Cd = function(a) {
    a = sd(a);
    return !!a && a.vignetteNmoScaledExperimentAndEligible
  };
  var Dd = function(a) {
      return (a = a.google_ad_modifications) ? a.eids || [] : []
    },
    Ed = function(a) {
      return (a = a.google_ad_modifications) ? a.loeids || [] : []
    },
    Fd = function(a, b, c) {
      if (!a) return null;
      for (var d = 0; d < a.length; ++d)
        if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
      return null
    };
  var Gd = function(a) {
      this.j = a;
      a.google_iframe_oncopy || (a.google_iframe_oncopy = {
        handlers: {},
        upd: p(this.s, this)
      });
      this.m = a.google_iframe_oncopy
    },
    Hd = function(a, b) {
      var c = new RegExp("\\b" + a + "=(\\d+)"),
        d = c.exec(b);
      d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
      return b
    };
  Gd.prototype.set = function(a, b) {
    this.m.handlers[a] = b;
    this.j.addEventListener && this.j.addEventListener("load", p(this.l, this, a), !1)
  };
  Gd.prototype.l = function(a) {
    a = this.j.document.getElementById(a);
    try {
      var b = a.contentWindow.document;
      if (a.onload && b && (!b.body || !b.body.firstChild)) a.onload()
    } catch (c) {}
  };
  Gd.prototype.s = function(a, b) {
    var c = Hd("rx", a),
      d;
    a: {
      if (a && (d = a.match("dt=([^&]+)")) && 2 == d.length) {
        d = d[1];
        break a
      }
      d = ""
    }
    d = (new Date).getTime() - d;
    c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= d ? "M" : 0 <= d ? d : "-M"));
    this.set(b, c);
    return c
  };
  var Id = Va("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
  var Jd = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    Kd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
    Ld = function() {},
    Nd = function(a, b, c) {
      switch (typeof b) {
        case "string":
          Md(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "undefined":
          c.push("null");
          break;
        case "object":
          if (null == b) {
            c.push("null");
            break
          }
          if (b instanceof Array || void 0 !=
            b.length && b.splice) {
            var d = b.length;
            c.push("[");
            for (var e = "", f = 0; f < d; f++) c.push(e), Nd(a, b[f], c), e = ",";
            c.push("]");
            break
          }
          c.push("{");
          d = "";
          for (e in b) b.hasOwnProperty(e) && (f = b[e], "function" != typeof f && (c.push(d), Md(e, c), c.push(":"), Nd(a, f, c), d = ","));
          c.push("}");
          break;
        case "function":
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    },
    Md = function(a, b) {
      b.push('"');
      b.push(a.replace(Kd, function(a) {
        if (a in Jd) return Jd[a];
        var b = a.charCodeAt(0),
          c = "\\u";
        16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
        return Jd[a] =
          c + b.toString(16)
      }));
      b.push('"')
    };
  var Od = {
      google_ad_modifications: !0,
      google_analytics_domain_name: !0,
      google_analytics_uacct: !0
    },
    Pd = function(a) {
      a.google_page_url && (a.google_page_url = String(a.google_page_url));
      var b = [];
      Wb(a, function(a, d) {
        if (null != a) {
          var c;
          try {
            var f = [];
            Nd(new Ld, a, f);
            c = f.join("")
          } catch (g) {}
          c && (c = c.replace(/\//g, "\\$&"), Yb(b, d, "=", c, ";"))
        }
      });
      return b.join("")
    };
  var Qd = function(a) {
    if (!a) return "";
    (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
    return a
  };
  Ib || Jb || J && Qb(11);
  var Rd = function(a, b, c) {
    var d = ["<iframe"],
      e;
    for (e in a) a.hasOwnProperty(e) && Yb(d, e + "=" + a[e]);
    d.push('style="left:0;position:absolute;top:0;"');
    d.push("></iframe>");
    a = a.id;
    b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
    return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
  };
  var Sd = null;
  var R = function(a) {
      this.s = [];
      this.l = a || window;
      this.j = 0;
      this.m = null;
      this.B = 0
    },
    Td, Ud = function(a) {
      try {
        return a.sz()
      } catch (b) {
        return !1
      }
    },
    Vd = function(a) {
      return !!a && ("object" === typeof a || "function" === typeof a) && Ud(a) && Xb(a.nq) && Xb(a.nqa) && Xb(a.al) && Xb(a.rl)
    },
    Wd = function() {
      if (Td && Ud(Td)) return Td;
      var a = Nc(),
        b = a.google_jobrunner;
      return Vd(b) ? Td = b : a.google_jobrunner = Td = new R(a)
    },
    Xd = function(a, b) {
      Wd().nq(a, b)
    },
    Yd = function(a, b) {
      Wd().nqa(a, b)
    };
  R.prototype.C = function(a, b) {
    0 != this.j || 0 != this.s.length || b && b != window ? this.v(a, b) : (this.j = 2, this.A(new Zd(a, window)))
  };
  R.prototype.v = function(a, b) {
    this.s.push(new Zd(a, b || this.l));
    $d(this)
  };
  R.prototype.N = function(a) {
    this.j = 1;
    if (a) {
      var b = p(this.w, this, !0);
      this.m = this.l.setTimeout(G("sjr::timeout", b, void 0), a)
    }
  };
  R.prototype.w = function(a) {
    a && ++this.B;
    1 == this.j && (null != this.m && (this.l.clearTimeout(this.m), this.m = null), this.j = 0);
    $d(this)
  };
  R.prototype.O = function() {
    return !(!window || !Array)
  };
  R.prototype.M = function() {
    return this.B
  };
  var $d = function(a) {
    var b = p(a.P, a);
    a.l.setTimeout(G("sjr::tryrun", b, void 0), 0)
  };
  R.prototype.P = function() {
    if (0 == this.j && this.s.length) {
      var a = this.s.shift();
      this.j = 2;
      var b = p(this.A, this, a);
      a.j.setTimeout(G("sjr::run", b, void 0), 0);
      $d(this)
    }
  };
  R.prototype.A = function(a) {
    this.j = 0;
    a.l()
  };
  R.prototype.nq = R.prototype.C;
  R.prototype.nqa = R.prototype.v;
  R.prototype.al = R.prototype.N;
  R.prototype.rl = R.prototype.w;
  R.prototype.sz = R.prototype.O;
  R.prototype.tc = R.prototype.M;
  var Zd = function(a, b) {
    this.l = a;
    this.j = b
  };
  var S = function(a) {
    this.name = "TagError";
    this.message = a || "";
    Error.captureStackTrace ? Error.captureStackTrace(this, S) : this.stack = Error().stack || ""
  };
  u(S, Error);
  var ae = function() {
      var a = Ja ? "https" : "http",
        b = $a("script"),
        c;
      a: {
        if (Ha) try {
          var d = B.google_cafe_host || B.top.google_cafe_host;
          if (d) {
            c = d;
            break a
          }
        } catch (e) {}
        c = ja("", "pagead2.googlesyndication.com")
      }
      return ["<", b, ' src="', oc(c, ["/pagead/js/", Ga(), "/r20160727/show_ads_impl.js"].join(""), a), '"></', b, ">"].join("")
    },
    be = function(a, b, c, d) {
      return function() {
        var e = !1;
        d && Wd().al(3E4);
        try {
          var f = a.document.getElementById(b).contentWindow;
          if (cb(f)) {
            var g = a.document.getElementById(b).contentWindow,
              k = g.document;
            k.body && k.body.firstChild || (/Firefox/.test(navigator.userAgent) ? k.open("text/html", "replace") : k.open(), g.google_async_iframe_close = !0, k.write(c))
          } else {
            for (var h = a.document.getElementById(b).contentWindow, f = c, f = String(f), g = ['"'], k = 0; k < f.length; k++) {
              var l = f.charAt(k),
                m = l.charCodeAt(0),
                t = k + 1,
                x;
              if (!(x = Wa[l])) {
                var y;
                if (31 < m && 127 > m) y = l;
                else {
                  var w = l;
                  if (w in Xa) y =
                    Xa[w];
                  else if (w in Wa) y = Xa[w] = Wa[w];
                  else {
                    var C = void 0,
                      r = w.charCodeAt(0);
                    if (31 < r && 127 > r) C = w;
                    else {
                      if (256 > r) {
                        if (C = "\\x", 16 > r || 256 < r) C += "0"
                      } else C = "\\u", 4096 > r && (C += "0");
                      C += r.toString(16).toUpperCase()
                    }
                    y = Xa[w] = C
                  }
                }
                x = y
              }
              g[t] = x
            }
            g.push('"');
            h.location.replace("javascript:" + g.join(""))
          }
          e = !0
        } catch (K) {
          h = Nc().google_jobrunner, Vd(h) && h.rl()
        }
        e && (e = Hd("google_async_rrc", c), (new Gd(a)).set(b, be(a, b, e, !1)))
      }
    },
    ce = function(a) {
      var b = ["<iframe"];
      Wb(a, function(a, d) {
        null != a && b.push(" " + d + '="' + Va(a) + '"')
      });
      b.push("></iframe>");
      return b.join("")
    },
    ee = function(a, b, c) {
      de(a, b, c, function(a, b, f) {
        a = a.document;
        for (var d = b.id, e = 0; !d || a.getElementById(d);) d = "aswift_" + e++;
        b.id = d;
        b.name = d;
        d = Number(f.google_ad_width);
        e = Number(f.google_ad_height);
        16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = Rd(b, d, e), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = Rd(b, d, e), c.innerHTML = f);
        return b.id
      })
    },
    de = function(a, b, c, d) {
      var e = $a("script"),
        f = {},
        g = b.google_ad_height;
      f.width = '"' + b.google_ad_width + '"';
      f.height = '"' + g + '"';
      f.frameborder = '"0"';
      f.marginwidth = '"0"';
      f.marginheight = '"0"';
      f.vspace = '"0"';
      f.hspace = '"0"';
      f.allowtransparency = '"true"';
      f.scrolling = '"no"';
      f.allowfullscreen = '"true"';
      f.onload = '"' + Id + '"';
      d = d(a, f, b);
      g = b.google_ad_output;
      (f = b.google_ad_format) || "html" != g && null != g || (f = b.google_ad_width + "x" + b.google_ad_height);
      g = !b.google_ad_slot || b.google_override_format || !dd[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
      f && g ? f = f.toLowerCase() : f = "";
      b.google_ad_format = f;
      if (!ba(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
        for (var f = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height], g = [], k = 0, h = c; h && 25 > k; h = h.parentNode, ++k) g.push(9 !== h.nodeType && h.id || "");
        (g = g.join()) && f.push(g);
        b.google_ad_unit_key = hb(f.join(":")).toString();
        f = [];
        for (g = 0; c && 25 > g; ++g) {
          k = (k = 9 !== c.nodeType && c.id) ? "/" + k : "";
          a: {
            if (c && c.nodeName && c.parentElement)
              for (var h = c.nodeName.toString().toLowerCase(), l = c.parentElement.childNodes, m = 0, t = 0; t < l.length; ++t) {
                var x = l[t];
                if (x.nodeName && x.nodeName.toString().toLowerCase() === h) {
                  if (c ===
                    x) {
                    h = "." + m;
                    break a
                  }++m
                }
              }
            h = ""
          }
          f.push((c.nodeName && c.nodeName.toString().toLowerCase()) + k + h);
          c = c.parentElement
        }
        c = f.join() + ":";
        f = a;
        g = [];
        if (f) try {
          for (var y = f.parent, k = 0; y && y !== f && 25 > k; ++k) {
            for (var w = y.frames, h = 0; h < w.length; ++h)
              if (f === w[h]) {
                g.push(h);
                break
              }
            f = y;
            y = f.parent
          }
        } catch (oa) {}
        b.google_ad_dom_fingerprint = hb(c + g.join()).toString()
      }
      var y = Pd(b),
        C;
      a: {
        try {
          if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
            var r = window.encodeURIComponent(window.JSON.stringify(b)),
              K;
            try {
              K = tc(r)
            } catch (oa) {
              K =
                "#" + tc(r, !0)
            }
            C = K;
            break a
          }
        } catch (oa) {
          E.j("sblob", oa, void 0, void 0)
        }
        C = ""
      }
      var F;
      b = b.google_ad_client;
      if (!Sd) b: {
        K = [n.top];r = [];
        for (w = 0; c = K[w++];) {
          r.push(c);
          try {
            if (c.frames)
              for (var L = c.frames.length, f = 0; f < L && 1024 > K.length; ++f) K.push(c.frames[f])
          } catch (oa) {}
        }
        for (L = 0; L < r.length; L++) try {
          if (F = r[L].frames.google_esf) {
            Sd = F;
            break b
          }
        } catch (oa) {}
        Sd = null
      }
      Sd ? F = "" : (F = {
        style: "display:none"
      }, /[^a-z0-9-]/.test(b) ? F = "" : (F["data-ad-client"] = Qd(b), F.id = "google_esf", F.name = "google_esf", F.src = oc(ja("",
        "googleads.g.doubleclick.net"), ["/pagead/html/", Ga(), "/r20160727/zrt_lookup.html"].join("")), F = ce(F)));
      L = ga;
      b = (new Date).getTime();
      r = a.google_unique_id;
      C = ["<!doctype html><html><body>", F, "<", e, ">", y, "google_show_ads_impl=true;google_unique_id=", "number" === typeof r ? r : 0, ';google_async_iframe_id="', d, '";google_start_time=', L, ";", C ? 'google_pub_vars = "' + C + '";' : "", "google_bpp=", b > L ? b - L : 1, ";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",
        e, ">", ae(), "</body></html>"
      ].join("");
      (a.document.getElementById(d) ? Xd : Yd)(be(a, d, C, !0))
    },
    fe = function(a, b) {
      var c = navigator;
      if (a && b && c) {
        var c = a.document,
          d = Qd(b);
        if (!/[^a-z0-9-]/.test(d)) {
          var e = Na("r20160810");
          e && (e += "/");
          e = oc("pagead2.googlesyndication.com", "/pub-config/" + e + d + ".js");
          d = c.createElement("script");
          d.src = e;
          (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }
      }
    };
  var T = function(a, b) {
    this.s = a;
    this.m = b
  };
  T.prototype.minWidth = function() {
    return this.s
  };
  T.prototype.height = function() {
    return this.m
  };
  T.prototype.j = function(a) {
    return 300 < a && 300 < this.m ? this.s : 1200 < a ? 1200 : Math.round(a)
  };
  T.prototype.l = function(a) {
    return this.j(a) + "x" + this.height()
  };
  var ge = {
      rectangle: 1,
      horizontal: 2,
      vertical: 4
    },
    U = function(a, b, c) {
      T.call(this, a, b);
      this.X = c
    };
  u(U, T);
  var he = function(a) {
      return function(b) {
        return !!(b.X & a)
      }
    },
    V = [new U(970, 1, 2), new U(728, 1, 2), new U(468, 60, 2), new U(336, 280, 1), new U(320, 100, 2), new U(320, 50, 2), new U(300, 0, 4), new U(300, 250, 1), new U(250, 250, 1), new U(234, 60, 2), new U(200, 200, 1), new U(180, 150, 1), new U(160, 0, 4), new U(125, 125, 1), new U(120, 0, 4), new U(120, 240, 4)];
  var ie = function(a, b) {
      for (var c = ["width", "height"], d = 0; d < c.length; d++) {
        var e = "google_ad_" + c[d];
        if (!b.hasOwnProperty(e)) {
          var f;
          f = lb(a[c[d]]);
          f = null === f ? null : Math.round(f);
          null != f && (b[e] = f)
        }
      }
    },
    je = function(a, b) {
      var c = a;
      do {
        var d = db(c, b);
        if (d && "fixed" == d.position) return !1
      } while (c = c.parentElement);
      return !0
    },
    ke = function(a) {
      var b = 0,
        c;
      for (c in ge) - 1 != a.indexOf(c) && (b |= ge[c]);
      return b
    };
  var le = function(a, b, c) {
      if (a.style) {
        var d = lb(a.style[c]);
        if (d) return d
      }
      if (a = db(a, b))
        if (d = lb(a[c])) return d;
      return null
    },
    me = function(a) {
      return function(b) {
        return b.minWidth() <= a
      }
    },
    oe = function(a, b, c) {
      var d = a && ne(c, b);
      return function(a) {
        return !(d && 250 <= a.height())
      }
    },
    ne = function(a, b) {
      var c;
      try {
        var d = b.document.documentElement.getBoundingClientRect(),
          e = a.getBoundingClientRect();
        c = {
          x: e.left - d.left,
          y: e.top - d.top
        }
      } catch (f) {
        c = null
      }
      return (c ? c.y : 0) < P(b).clientHeight - 100
    },
    pe = function(a, b) {
      var c = b,
        d = Infinity;
      do {
        var e =
          le(c, a, "height");
        e && (d = Math.min(d, e));
        (e = le(c, a, "maxHeight")) && (d = Math.min(d, e))
      } while ((c = c.parentElement) && "HTML" != c.tagName);
      return d
    };
  var qe = function(a) {
      return function(b) {
        for (var c = a.length - 1; 0 <= c; --c)
          if (!a[c](b)) return !1;
        return !0
      }
    },
    re = function(a, b, c) {
      for (var d = a.length, e = null, f = 0; f < d; ++f) {
        var g = a[f];
        if (b(g)) {
          if (!c || c(g)) return g;
          null === e && (e = g)
        }
      }
      return e
    };
  var se = [V[6], V[12], V[3], V[0], V[7], V[14], V[1], V[8], V[10], V[4], V[15], V[2], V[11], V[5], V[13], V[9]],
    ve = function(a, b, c, d, e) {
      var f = "auto" == b ? .25 >= a / Math.min(1200, P(c).clientWidth) ? 4 : 3 : ke(b);
      e = e || {};
      e.google_responsive_formats = f;
      e = Pc() && !ne(d, c) && (e.google_safe_for_responsive_override = je(d, c)) && !M(Ed(c), Q.F.u);
      b = (e ? se : V).slice(0);
      M(Ed(c), Q.G.o) && te(b);
      var g = 488 > P(c).clientWidth,
        f = [me(a), ue(g), oe(g, c, d), he(f)],
        g = [];
      if (e) {
        var k = pe(c, d);
        g.push(function(a) {
          return a.height() <= k
        })
      }
      c = re(b, qe(f), qe(g));
      if (!c) throw new S("adsbygoogle.push() error: No slot size for availableWidth=" +
        a);
      return c
    },
    te = function(a) {
      for (var b = a.length - 1; 0 < b; b--) {
        var c = Math.floor(Math.random() * (b + 1)),
          d = a[b];
        a[b] = a[c];
        a[c] = d
      }
    },
    ue = function(a) {
      return function(b) {
        return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
      }
    };
  var we = {
      ra: "google_content_recommendation_ui_type",
      $: "google_content_recommendation_columns_num",
      na: "google_content_recommendation_rows_num"
    },
    W = function(a, b) {
      T.call(this, a, b)
    };
  u(W, T);
  W.prototype.j = function(a) {
    return Math.min(1200, Math.round(a))
  };
  var xe = function(a) {
      var b = 0;
      Wb(we, function(c) {
        null != a[c] && ++b
      });
      if (0 == b) return !1;
      if (3 == b) return !0;
      throw new S("adsbygoogle.push() error: Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
    },
    ye = function(a) {
      switch (a) {
        case "image_stacked":
          return ya;
        case "image_sidebyside":
          return za;
        case "image_card_stacked":
          return Aa;
        case "image_card_sidebyside":
          return Ba;
        default:
          throw new S("adsbygoogle.push() error: Unrecognized layout: " +
            a);
      }
    };
  var X = function(a, b) {
    T.call(this, a, b)
  };
  u(X, T);
  X.prototype.j = function() {
    return this.minWidth()
  };
  X.prototype.l = function(a) {
    return X.Y.l.call(this, a) + "_0ads_al"
  };
  var ze = [new X(728, 15), new X(468, 15), new X(200, 1), new X(180, 1), new X(160, 1), new X(120, 1)],
    Ae = function(a) {
      var b = re(ze, me(a));
      if (!b) throw new S("adsbygoogle.push() error: No link unit size for width=" + a + "px");
      return b
    };
  var Be = function(a, b) {
      var c = b.google_ad_format;
      if ("autorelaxed" == c) return M(Dd(a), xd.o) ? 6 : M(Dd(a), yd.o) ? 7 : xe(b) ? 9 : M(Dd(a), zd.o) ? 11 : 5;
      if ("auto" == c || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(c)) return 1;
      if ("link" == c) return M(Dd(a), Ad.o) ? 10 : M(Dd(a), Bd.o) ? 12 : 4;
      if ("fluid" == c) return 8
    },
    Ce = function(a, b, c, d, e) {
      var f = d.google_ad_format;
      switch (a) {
        default:
          case 1:
          return ve(b, f, e, c, d);
        case 5:
            return 1200 <= b ? new W(1200, 0) : 468 <= b ? new W(b, Math.floor(.5 * b)) : new W(b, Math.floor(3.44 * b));
        case 6:
            return b >=
            qa ? new W(b, Math.floor(b * ra)) : new W(b, Math.floor(b * sa));
        case 7:
            return b >= ua ? new W(b, Math.floor(b * va)) : new W(b, Math.floor(b * wa));
        case 9:
            e = d.google_content_recommendation_ui_type.split(",");f = Db(d.google_content_recommendation_columns_num.split(","), Number);a = Db(d.google_content_recommendation_rows_num.split(","), Number);a: {
            if (e.length == f.length && f.length == a.length) {
              if (1 == e.length) {
                c = 0;
                break a
              }
              if (2 == e.length) {
                c = b < xa ? 0 : 1;
                break a
              }
              throw new S("adsbygoogle.push() error: The size of element (" + e.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num, data-matched-content-rows-num is wrong.");
            }
            throw new S("adsbygoogle.push() error: The size of element (" + e.length + "," + f.length + "," + a.length + ") specified in tag data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num does not match.");
          }
          e = Na(e[c]);f = f[c];a = a[c];d.google_content_recommendation_ui_type = e;d.google_content_recommendation_columns_num = f;d.google_content_recommendation_rows_num = a;d = ye(e);
          if (isNaN(f) || 0 == f) throw new S("adsbygoogle.push() error: Wrong value for data-matched-content-columns-num");
          if (isNaN(a) || 0 == a) throw new S("adsbygoogle.push() error: Wrong value for data-matched-content-rows-num");d = Math.floor((b - 8 * f - 8) / f / d * a + 8 * a + 8);
          if (1500 < b) throw new S("adsbygoogle.push() error: Calculated slot width is too large: " + b);
          if (1500 < d) throw new S("adsbygoogle.push() error: Calculated slot height is too large: " + d);
          return new W(b, d);
        case 11:
            return 1200 <= b ? new W(1200, 0) : 850 <= b ? new W(b, Math.floor(.5 * b)) : 550 <= b ? new W(b, Math.floor(.6 * b)) : 468 <= b ? new W(b, Math.floor(.7 * b)) : new W(b, Math.floor(3.44 *
            b));
        case 4:
            return Ae(b);
        case 10:
            return d = Ae(b), new X(Math.min(b, 1200), d.height());
        case 12:
            return d = pe(e, c), a = Ae(b), b = Math.min(b, 1200), a = a.height(), d = Math.max(a, d), new X(b, Math.min(d, 15 == a ? 30 : 130));
        case 8:
            return new T(b, 300 >= b ? 150 : 0 >= b ? 250 : 350)
      }
    };
  var De = null,
    Ie = function() {
      var a = window,
        b = Ee;
      if (void 0 === a.google_dre) {
        var c = "";
        a.postMessage && cc(a) && Pc() && (c = fb(["20050000", "20050001"], Ea)) && (a.google_ad_modifications = a.google_ad_modifications || {}, a.google_ad_modifications.eids = a.google_ad_modifications.eids || [], a.google_ad_modifications.eids.push(c));
        a.google_dre = c;
        "20050001" == a.google_dre && (De = G("dr::mh", q(Fe, a, b), q(Ge, a)), ob(a.top, "message", De), a.setTimeout(G("dr::to", q(He, a, !0, b), q(Ge, a)), 2E3), a.google_drc = 0, a.google_q = a.google_q || {}, a.google_q.tags =
          a.google_q.tags || [])
      }
    },
    Je = function(a) {
      "20050001" == n.google_dre && (a.params = a.params || {}, a.params.google_delay_requests_delay = 0, a.params.google_delay_requests_count = n.google_drc++, a.V = fa())
    },
    Ke = function(a) {
      if ("20050001" == n.google_dre) {
        var b = fa() - a.V;
        a.params.google_delay_requests_delay = b
      }
    },
    Fe = function(a, b, c) {
      var d;
      if (d = c && "afb" == c.data) c = c.origin, d = !!ac[c] || Ha && bc.test(c);
      d && He(a, !1, b)
    },
    Ge = function(a) {
      a.google_q.tags = void 0
    },
    He = function(a, b, c) {
      if (a.google_q && a.google_q.tags) {
        var d = a.google_q.tags;
        Ge(a);
        d.length && (b && wb(dc, "drt", {
          va: d.length,
          duration: 2E3
        }, !0, 1, void 0), c(d))
      }
    };
  var ic = function(a) {
    a.shv = Ga()
  };
  E.m = !Ha;
  var Le = new function() {
    this.j = new td(100, 199)
  };
  var Y = function(a, b) {
      b && a.push(b)
    },
    Z = function(a, b, c) {
      return B.location && B.location.hash == "#google_plle_" + c ? c : fb([b, c], a)
    };
  var Me = !1,
    Ne = 0,
    Oe = !1,
    Pe = !1,
    Qe = function(a) {
      return $b.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    },
    Se = function(a, b) {
      var c = window;
      a.setAttribute("data-adsbygoogle-status", "done");
      Re(a, b, c)
    },
    Re = function(a, b, c) {
      Te(a, b, c);
      if (!Ue(a, b, c)) {
        if (b.google_reactive_ads_config) {
          if (Me) throw new S("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");
          Me = !0
        } else b.google_ama || Zb(c);
        Oe || (Oe = !0, fe(c, b.google_ad_client));
        Wb(Od, function(a, d) {
          b[d] = b[d] || c[d]
        });
        b.google_loader_used =
          "aa";
        b.google_reactive_tag_first = 1 === Ne;
        var d = b.google_ad_output;
        if (d && "html" != d) throw new S("adsbygoogle.push() error: No support for google_ad_output=" + d);
        lc("aa::load", mc, function() {
          ee(c, b, a)
        })
      }
    },
    Ue = function(a, b, c) {
      var d = b.google_reactive_ads_config;
      if (d) var e = d.page_level_pubvars,
        f = (ca(e) ? e : {}).google_tag_origin;
      if (b.google_ama) return !1;
      var g = b.google_ad_slot,
        e = c.google_ad_modifications;
      !e || Fd(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (g = Fd(e.ad_blacklist,
        g)) ? {
        H: !0,
        K: g.space_collapsing || f
      } : e.remove_ads_by_default ? {
        H: !0,
        K: f
      } : null);
      if (e && e.H && "on" != b.google_adtest) return "slot" == e.K && (null !== kb(a.getAttribute("width")) && a.setAttribute("width", 0), null !== kb(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
      if ((e = db(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
      a = 1 === b.google_reactive_ad_format || 8 === b.google_reactive_ad_format;
      c = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
      return La && a && c ? (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0) : !1
    },
    Te = function(a, b, c) {
      for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        if (/data-/.test(g.name)) {
          var k = g.name.replace("data-matched-content", "google_content_recommendation").replace("data",
            "google").replace(/-/g, "_");
          if (!b.hasOwnProperty(k)) {
            var h;
            h = k;
            var g = g.value,
              l = {
                google_reactive_ad_format: A,
                google_allow_expandable_ads: ha
              };
            h = l.hasOwnProperty(h) ? l[h](g, null) : g;
            null === h || (b[k] = h)
          }
        }
      }
      b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format ? (b.google_ad_width = P(c).clientWidth, b.google_ad_height = 50, a.style.display = "none") : 1 == b.google_reactive_ad_format ? (b.google_ad_width = 320, b.google_ad_height = 50, a.style.display = "none") : 8 == b.google_reactive_ad_format ? (d = Cd(c) ? c.screen.width ||
        0 : P(c).clientWidth || 0, b.google_ad_width = d, c = Cd(c) ? c.screen.height || 0 : P(c).clientHeight || 0, b.google_ad_height = c, a.style.display = "none") : 9 == b.google_reactive_ad_format ? (b.google_ad_width = P(c).clientWidth || 0, b.google_ad_height = P(c).clientHeight || 0, a.style.display = "none") : (e = Be(c, b)) ? (b.google_auto_format = b.google_ad_format, d = a.offsetWidth, c = Ce(e, d, a, b, c), b.google_ad_width = c.j(d), e = b.google_ad_height = c.height(), a.style.height = e + "px", b.google_ad_resizable = !0, b.google_ad_format = c.l(d), b.google_override_format =
        1, b.google_loader_features_used = 128) : !jb.test(b.google_ad_width) && !ib.test(a.style.width) || !jb.test(b.google_ad_height) && !ib.test(a.style.height) ? (c = db(a, c), a.style.width = c.width, a.style.height = c.height, ie(c, b), b.google_ad_width || (b.google_ad_width = a.offsetWidth), b.google_ad_height || (b.google_ad_height = a.offsetHeight), b.google_loader_features_used = 256) : (ie(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (c = a.style.width, a.style.width = "100%",
        d = a.offsetWidth, a.style.width = c, b.google_available_width = d))
    },
    Ve = function(a) {
      for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
        var e = d;
        if (Qe(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
      }
      return null
    },
    Xe = function(a) {
      if (!Pe) {
        Pe = !0;
        var b;
        try {
          b = n.localStorage.getItem("google_ama_config")
        } catch (g) {
          b = null
        }
        var c;
        try {
          c = b ? new Jc(uc(b)) : null
        } catch (g) {
          c = null
        }
        if (c)
          if (b = yc(c, Kc, 3), !b || O(b, 1) <= fa()) try {
            n.localStorage.removeItem("google_ama_config")
          } catch (g) {
            md(n, {
              lserr: 1
            })
          } else {
            try {
              var d;
              if (d = !n.google_noqs) a: {
                var e = O(c, 5);
                for (b = 0; b < e.length; b++)
                  if (1 == e[b]) {
                    d = !0;
                    break a
                  }
                d = !1
              }
              if (d) {
                var f = new fd;
                (new jd(n, new nd(a, c), 100, f)).start();
                f.l.then(q(pd, n), q(qd, n))
              }
            } catch (g) {
              md(n, {
                atf: -1
              })
            }
            c = We();
            n.document.documentElement.appendChild(c);
            Se(c, {
              google_ama: !0,
              google_ad_client: a
            })
          }
      }
    },
    Ee = function(a) {
      if (a && a.shift) try {
        for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;) Ye(b), --c
      } catch (d) {
        throw window.setTimeout(Ze, 0), d;
      }
    },
    We = function() {
      var a = document.createElement("ins");
      a.className =
        "adsbygoogle";
      a.style.display = "none";
      return a
    },
    $e = function(a, b) {
      var c = {};
      Wb(Oc, function(b, d) {
        a.hasOwnProperty(d) && (c[d] = a[d])
      });
      ca(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
      var d = We();
      b ? Ma.body.appendChild(d) : Ma.documentElement.appendChild(d);
      Se(d, {
        google_reactive_ads_config: c,
        google_ad_client: a.google_ad_client
      })
    },
    af = function(a) {
      var b = cc(window);
      if (!b) throw new S("adsbygoogle.push() error: Page-level tag does not work inside iframes.");
      sd(b).wasPlaTagProcessed = !0;
      var b =
        M(Ed(B), Q.D.o),
        c = !b;
      Ma.body || b ? $e(a, c) : ob(Ma, "DOMContentLoaded", G("aa:reactiveTag", function() {
        $e(a, c)
      }, void 0))
    },
    bf = function(a, b, c, d) {
      return 0 == b.message.indexOf("TagError") ? (E.s = !0, E.j(a, b, .1, d, "puberror"), !1) : E.j(a, b, c, d)
    },
    cf = function(a, b, c, d) {
      return 0 == b.message.indexOf("TagError") ? !1 : E.j(a, b, c, d)
    },
    Ye = function(a) {
      var b = {};
      lc("aa::hqe", bf, function() {
        df(a, b)
      }, function(c) {
        c.client = c.client || b.google_ad_client || a.google_ad_client;
        c.slotname = c.slotname || b.google_ad_slot;
        c.tag_origin = c.tag_origin || b.google_tag_origin
      })
    },
    df = function(a, b) {
      ga = (new Date).getTime();
      if (n.google_q && n.google_q.tags) Je(a), n.google_q.tags.push(a);
      else {
        var c;
        a: {
          if (a.enable_page_level_ads) {
            if ("string" == typeof a.google_ad_client) {
              c = !0;
              break a
            }
            throw new S("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");
          }
          c = !1
        }
        if (c) 0 === Ne && (Ne = 1), Xe(a.google_ad_client), af(a);
        else {
          0 === Ne && (Ne = 2);
          n.google_q ? Ke(a) : (Ie(), Je(a));
          c = a.element;
          var d = a.params;
          d && Wb(d, function(a, c) {
            b[c] = a
          });
          if (c) {
            if (!Qe(c) && (c.id ? c = Ve(c.id) : c = null, !c)) throw new S("adsbygoogle.push() error: 'element' has already been filled.");
            if (!("innerHTML" in c)) throw new S("adsbygoogle.push() error: 'element' is not a good DOM element.");
          } else if (c = Ve(), !c) throw new S("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");
          Se(c, b)
        }
      }
    },
    Ze = function() {
      jc();
      lc("aa::main", cf, ef)
    },
    ef = function() {
      var a = B.google_ad_modifications = B.google_ad_modifications || {};
      if (!a.plle) {
        a.plle = !0;
        var b = a.eids = a.eids || [],
          a = a.loeids = a.loeids || [],
          c, d, e, f;
        c = Q.F;
        d = c.o;
        if (!B.location || B.location.hash != "#google_plle_" +
          d) {
          d = [c.u, d];
          e = new td(ka, ka + la - 1);
          var g;
          (g = 0 >= la || la % d.length) || (g = Le.j, g = !(g.start <= e.start && g.j >= e.j));
          g ? d = null : (g = ud(), d = null !== g && e.start <= g && e.j >= g ? d[(g - ka) % d.length] : null)
        }
        e = d;
        Y(a, e);
        d = wd;
        e == c.u ? f = d.u : e == c.o ? f = d.o : f = "";
        Y(b, f);
        c = xd;
        Y(b, Z(pa, c.u, c.o));
        c = yd;
        Y(b, Z(ta, c.u, c.o));
        c = Ad;
        Y(b, Z(ma, c.u, c.o));
        c = Bd;
        Y(b, Z(na, c.u, c.o));
        c = zd;
        Y(b, Z(Ca, c.u, c.o));
        c = Q.G;
        e = Z(Da, c.u, c.o);
        Y(a, e);
        d = vd;
        e == c.u ? f = d.u : e == c.o ? f = d.o : f = "";
        Y(b, f);
        Ma.body || (c = Q.D, Y(a, Z(Fa, c.u, c.o)));
        c = Q.R;
        e = Z(0, c.u, c.o);
        Y(a, e)
      }
      b = window.adsbygoogle;
      Ee(b);
      if (!b || !b.loaded) {
        window.adsbygoogle = {
          push: Ye,
          loaded: !0
        };
        b && ff(b.onload);
        try {
          Object.defineProperty(window.adsbygoogle, "onload", {
            set: ff
          })
        } catch (k) {}
      }
    },
    ff = function(a) {
      Xb(a) && window.setTimeout(a, 0)
    };
  Ze();
}).call(this);
