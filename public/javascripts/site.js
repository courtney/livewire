window.Modernizr = function (h, e, o) {
  function n(a, b) {
    return ("" + a).indexOf(b) !== -1
  }
  function r(a, b) {
    for (var d in a) if (i[a[d]] !== o && (!b || b(a[d], s))) return !0
  }
  function k(a, b) {
    var d = a.charAt(0).toUpperCase() + a.substr(1);
    d = (a + " " + t.join(d + " ") + d).split(" ");
    return !!r(d, b)
  }
  function D() {
    f.input = function (a) {
      for (var b = 0, d = a.length; b < d; b++) w[a[b]] = !! (a[b] in g);
      return w
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
    f.inputtypes = function (a) {
      for (var b = 0, d, c = a.length; b < c; b++) {
        g.setAttribute("type", a[b]);
        if (d = g.type !== "text") g.value = x, /^range$/.test(g.type) && g.style.WebkitAppearance !== o ? (j.appendChild(g), d = e.defaultView, d = d.getComputedStyle && d.getComputedStyle(g, null).WebkitAppearance !== "textfield" && g.offsetHeight !== 0, j.removeChild(g)) : /^(search|tel)$/.test(g.type) || (d = /^(url|email)$/.test(g.type) ? g.checkValidity && g.checkValidity() === !1 : g.value != x);
        y[a[b]] = !! d
      }
      return y
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))
  }
  var f = {},
    j = e.documentElement,
    s = e.createElement("modernizr"),
    i = s.style,
    g = e.createElement("input"),
    x = ":)",
    z = Object.prototype.toString,
    l = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
    t = "Webkit Moz O ms Khtml".split(" "),
    p = {
      svg: "http://www.w3.org/2000/svg"
    },
    c = {},
    y = {},
    w = {},
    A = [],
    q, B = function (a) {
      var b = document.createElement("style"),
        d = e.createElement("div");
      b.textContent = a + "{#modernizr{height:3px}}";
      (e.head || e.getElementsByTagName("head")[0]).appendChild(b);
      d.id = "modernizr";
      j.appendChild(d);
      a = d.offsetHeight === 3;
      b.parentNode.removeChild(b);
      d.parentNode.removeChild(d);
      return !!a
    },
    m = function () {
      var a = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img"
      };
      return function (b, d) {
        d = d || document.createElement(a[b] || "div");
        b = "on" + b;
        var c = b in d;
        c || (d.setAttribute || (d = document.createElement("div")), d.setAttribute && d.removeAttribute && (d.setAttribute(b, ""), c = typeof d[b] == "function", typeof d[b] != "undefined" && (d[b] = o), d.removeAttribute(b)));
        return c
      }
    }(),
    u = {}.hasOwnProperty,
    C;
  C = typeof u !== "undefined" && typeof u.call !== "undefined" ?
  function (a, b) {
    return u.call(a, b)
  } : function (a, b) {
    return b in a && typeof a.constructor.prototype[b] === "undefined"
  };
  c.flexbox = function () {
    var a = e.createElement("div"),
      b = e.createElement("div");
    (function (a, b, d, c) {
      b += ":";
      a.style.cssText = (b + l.join(d + ";" + b)).slice(0, -b.length) + (c || "")
    })(a, "display", "box", "width:42px;padding:0;");
    b.style.cssText = l.join("box-flex:1;") + "width:10px;";
    a.appendChild(b);
    j.appendChild(a);
    var d = b.offsetWidth === 42;
    a.removeChild(b);
    j.removeChild(a);
    return d
  };
  c.canvas = function () {
    var a = e.createElement("canvas");
    return !(!a.getContext || !a.getContext("2d"))
  };
  c.canvastext = function () {
    return !!(f.canvas && typeof e.createElement("canvas").getContext("2d").fillText == "function")
  };
  c.webgl = function () {
    var a = e.createElement("canvas");
    try {
      if (a.getContext("webgl")) return !0
    } catch (b) {}
    try {
      if (a.getContext("experimental-webgl")) return !0
    } catch (d) {}
    return !1
  };
  c.touch = function () {
    return "ontouchstart" in h || B("@media (" + l.join("touch-enabled),(") + "modernizr)")
  };
  c.geolocation = function () {
    return !!navigator.geolocation
  };
  c.postmessage = function () {
    return !!h.postMessage
  };
  c.websqldatabase = function () {
    return !!h.openDatabase
  };
  c.indexedDB = function () {
    for (var a = -1, b = t.length; ++a < b;) {
      var d = t[a].toLowerCase();
      if (h[d + "_indexedDB"] || h[d + "IndexedDB"]) return !0
    }
    return !1
  };
  c.hashchange = function () {
    return m("hashchange", h) && (document.documentMode === o || document.documentMode > 7)
  };
  c.history = function () {
    return !(!h.history || !history.pushState)
  };
  c.draganddrop = function () {
    return m("drag") && m("dragstart") && m("dragenter") && m("dragover") && m("dragleave") && m("dragend") && m("drop")
  };
  c.websockets = function () {
    return "WebSocket" in h
  };
  c.rgba = function () {
    i.cssText = "background-color:rgba(150,255,150,.5)";
    return n(i.backgroundColor, "rgba")
  };
  c.hsla = function () {
    i.cssText = "background-color:hsla(120,40%,100%,.5)";
    return n(i.backgroundColor, "rgba") || n(i.backgroundColor, "hsla")
  };
  c.multiplebgs = function () {
    i.cssText = "background:url(//:),url(//:),red url(//:)";
    return /(url\s*\(.*?){3}/.test(i.background)
  };
  c.backgroundsize = function () {
    return k("backgroundSize")
  };
  c.borderimage = function () {
    return k("borderImage")
  };
  c.borderradius = function () {
    return k("borderRadius", "", function (a) {
      return n(a, "orderRadius")
    })
  };
  c.boxshadow = function () {
    return k("boxShadow")
  };
  c.textshadow = function () {
    return e.createElement("div").style.textShadow === ""
  };
  c.opacity = function () {
    var a = l.join("opacity:.5;") + "";
    i.cssText = a;
    return n(i.opacity, "0.5")
  };
  c.cssanimations = function () {
    return k("animationName")
  };
  c.csscolumns = function () {
    return k("columnCount")
  };
  c.cssgradients = function () {
    var a = ("background-image:" + l.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + l.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
    i.cssText = a;
    return n(i.backgroundImage, "gradient")
  };
  c.cssreflections = function () {
    return k("boxReflect")
  };
  c.csstransforms = function () {
    return !!r(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])
  };
  c.csstransforms3d = function () {
    var a = !! r(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
    a && (a = B("@media (" + l.join("transform-3d),(") + "modernizr)"));
    return a
  };
  c.csstransitions = function () {
    return k("transitionProperty")
  };
  c.fontface = function () {
    var a, b = e.head || e.getElementsByTagName("head")[0] || j,
      d = e.createElement("style"),
      c = e.implementation || {
        hasFeature: function () {
          return !1
        }
      };
    d.type = "text/css";
    b.insertBefore(d, b.firstChild);
    a = d.sheet || d.styleSheet;
    b = c.hasFeature("CSS2", "") ?
    function (b) {
      if (!a || !b) return !1;
      var c = !1;
      try {
        a.insertRule(b, 0), c = !/unknown/i.test(a.cssRules[0].cssText), a.deleteRule(a.cssRules.length - 1)
      } catch (d) {}
      return c
    } : function (b) {
      if (!a || !b) return !1;
      a.cssText = b;
      return a.cssText.length !== 0 && !/unknown/i.test(a.cssText) && a.cssText.replace(/\r+|\n+/g, "").indexOf(b.split(" ")[0]) === 0
    };
    f._fontfaceready = function (a) {
      a(f.fontface)
    };
    return b('@font-face { font-family: "font"; src: "font.ttf"; }')
  };
  c.video = function () {
    var a = e.createElement("video"),
      b = !! a.canPlayType;
    if (b) b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"'), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"') || a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"');
    return b
  };
  c.audio = function () {
    var a = e.createElement("audio"),
      b = !! a.canPlayType;
    if (b) b = new Boolean(b), b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"'), b.mp3 = a.canPlayType("audio/mpeg;"), b.wav = a.canPlayType('audio/wav; codecs="1"'), b.m4a = a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;");
    return b
  };
  c.localstorage = function () {
    try {
      return "localStorage" in h && h.localStorage !== null
    } catch (a) {
      return !1
    }
  };
  c.sessionstorage = function () {
    try {
      return "sessionStorage" in h && h.sessionStorage !== null
    } catch (a) {
      return !1
    }
  };
  c.webWorkers = function () {
    return !!h.Worker
  };
  c.applicationcache = function () {
    return !!h.applicationCache
  };
  c.svg = function () {
    return !!e.createElementNS && !! e.createElementNS(p.svg, "svg").createSVGRect
  };
  c.inlinesvg = function () {
    var a = document.createElement("div");
    a.innerHTML = "<svg/>";
    return (a.firstChild && a.firstChild.namespaceURI) == p.svg
  };
  c.smil = function () {
    return !!e.createElementNS && /SVG/.test(z.call(e.createElementNS(p.svg, "animate")))
  };
  c.svgclippaths = function () {
    return !!e.createElementNS && /SVG/.test(z.call(e.createElementNS(p.svg, "clipPath")))
  };
  for (var v in c) C(c, v) && (q = v.toLowerCase(), f[q] = c[v](), A.push((f[q] ? "" : "no-") + q));
  f.input || D();
  f.crosswindowmessaging = f.postmessage;
  f.historymanagement = f.history;
  f.addTest = function (a, b) {
    a = a.toLowerCase();
    if (!f[a]) return b = !! b(), j.className += " " + (b ? "" : "no-") + a, f[a] = b, f
  };
  i.cssText = "";
  s = g = null;
  h.attachEvent &&
  function () {
    var a = e.createElement("div");
    a.innerHTML = "<elem></elem>";
    return a.childNodes.length !== 1
  }() &&
  function (a, b) {
    function c(a) {
      for (var b = -1; ++b < g;) a.createElement(f[b])
    }
    function e(a, b) {
      for (var c = a.length, d = -1, f, g = []; ++d < c;) f = a[d], b = f.media || b, g.push(e(f.imports, b)), g.push(f.cssText);
      return g.join("")
    }
    var f = "abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),
      g = f.length,
      h = RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)", "gi"),
      i = RegExp("\\b(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)\\b(?!.*[;}])", "gi"),
      j = b.createDocumentFragment(),
      k = b.documentElement,
      m = k.firstChild,
      l = b.createElement("style"),
      n = b.createElement("body");
    l.media = "all";
    c(b);
    c(j);
    a.attachEvent("onbeforeprint", function () {
      for (var a = -1; ++a < g;) for (var c = b.getElementsByTagName(f[a]), d = c.length, o = -1; ++o < d;) c[o].className.indexOf("iepp_") < 0 && (c[o].className += " iepp_" + f[a]);
      m.insertBefore(l, m.firstChild);
      l.styleSheet.cssText = e(b.styleSheets, "all").replace(i, ".iepp_$1");
      j.appendChild(b.body);
      k.appendChild(n);
      n.innerHTML = j.firstChild.innerHTML.replace(h, "<$1bdo")
    });
    a.attachEvent("onafterprint", function () {
      n.innerHTML = "";
      k.removeChild(n);
      m.removeChild(l);
      k.appendChild(j.firstChild)
    })
  }(this, document);
  f._enableHTML5 = !0;
  f._version = "1.6";
  j.className = j.className.replace(/\bno-js\b/, "") + " js";
  j.className += " " + A.join(" ");
  return f
}(this, this.document);