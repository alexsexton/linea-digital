/* globals jQuery, Modernizr */
'use strict';

jQuery(function ($) {
  // ## Navigation
  var $navHandler = $('.site-nav--trigger');
  var $subnavHandler = $('.nav-subnav--handler');
  var bodyOpenClasses = ['subnav--open', 'site-nav--open']; // ## Mobile nav trigger

  $navHandler.on('click', function (e) {
    e.preventDefault();
    var navBodyOpenClass = 'site-nav--open';
    $('body').toggleClass(navBodyOpenClass);
    $('*').removeClass('is-open');
  }); // ## Sub Nav

  $subnavHandler.each(function (i) {
    var $this = $(this);
    var $subnav = $this.next();
    var subNavOpenClass = 'c-subnav--open';
    var subNavBodyOpenClass = 'subnav--open';
    $navHandler.on('click', function (e) {
      e.preventDefault();
      var isOpen = $subnav.hasClass(subNavOpenClass);

      if (isOpen) {
        $subnav.removeClass(subNavOpenClass);
      }

      var hasClass = $('body').hasClass(subNavBodyOpenClass);

      if (hasClass) {
        $('body').removeClass(subNavBodyOpenClass);
      }
    });
    $this.on('click', function (e) {
      e.preventDefault();
      $('body').removeClass(bodyOpenClasses);
      var isOpen = $subnav.hasClass(subNavOpenClass); // remove all open subnav classes, therefore closing any that are open

      $('.' + subNavOpenClass).removeClass(subNavOpenClass); // if the corresponding subnav was closed already, user intends to open it

      if (!isOpen) {
        $subnav.addClass(subNavOpenClass);
        $('body').addClass(subNavBodyOpenClass);
      }
    });
  }).bind(); // ## Swap image on hover

  var productImageHover = function () {
    if (!Modernizr.touchevents) {
      $(document).on('mouseenter mouseleave', '.c-image-thumbnail--hover img', function () {
        var swapImg = this.getAttribute('data-swap-src');
        var img = this.getAttribute('src');
        $(this).attr('src', swapImg);
        $(this).attr('data-swap-src', img);
      }, function () {
        var swapImg = this.getAttribute('data-swap-src');
        var img = this.getAttribute('src');
        $(this).attr('src', swapImg);
        $(this).attr('data-swap-src', img);
      });
    }
  }; // Call on resize


  $(window).resize(function () {
    productImageHover();
  }); // Call functions on ready

  productImageHover();
}); // ## Add loaded class once everything has loaded

jQuery(document).ready(function ($) {
  $('html').addClass('loaded');
});
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-csstransitions-supports-svg-touchevents-mq-setclasses !*/
!function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }

  function o() {
    var e, t, n, o, s, i, a;

    for (var l in C) if (C.hasOwnProperty(l)) {
      if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());

      for (o = r(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), S.push((o ? "" : "no-") + a.join("-"));
    }
  }

  function s(e) {
    var t = x.className,
        n = Modernizr._config.classPrefix || "";

    if (T && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), T ? x.className.baseVal = t : x.className = t);
  }

  function i() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }

  function a() {
    var e = t.body;
    return e || (e = i(T ? "svg" : "body"), e.fake = !0), e;
  }

  function l(e, n, r, o) {
    var s,
        l,
        u,
        f,
        c = "modernizr",
        p = i("div"),
        d = a();
    if (parseInt(r, 10)) for (; r--;) u = i("div"), u.id = o ? o[r] : c + (r + 1), p.appendChild(u);
    return s = i("style"), s.type = "text/css", s.id = "s" + c, (d.fake ? d : p).appendChild(s), d.appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), p.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(d)), l = n(p, e), d.fake ? (d.parentNode.removeChild(d), x.style.overflow = f, x.offsetHeight) : p.parentNode.removeChild(p), !!l;
  }

  function u(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function f(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function c(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function p(e, t, n) {
    var o;

    for (var s in e) if (e[s] in t) return n === !1 ? e[s] : (o = t[e[s]], r(o, "function") ? c(o, n || t) : o);

    return !1;
  }

  function d(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function m(t, n, r) {
    var o;

    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var s = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (s) {
        var i = s.error ? "error" : "log";
        s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];

    return o;
  }

  function v(t, r) {
    var o = t.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) if (e.CSS.supports(d(t[o]), r)) return !0;

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var s = []; o--;) s.push("(" + d(t[o]) + ":" + r + ")");

      return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == m(e, null, "position");
      });
    }

    return n;
  }

  function h(e, t, o, s) {
    function a() {
      c && (delete k.style, delete k.modElem);
    }

    if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
      var l = v(e, o);
      if (!r(l, "undefined")) return l;
    }

    for (var c, p, d, m, h, g = ["modernizr", "tspan", "samp"]; !k.style && g.length;) c = !0, k.modElem = i(g.shift()), k.style = k.modElem.style;

    for (d = e.length, p = 0; d > p; p++) if (m = e[p], h = k.style[m], u(m, "-") && (m = f(m)), k.style[m] !== n) {
      if (s || r(o, "undefined")) return a(), "pfx" == t ? m : !0;

      try {
        k.style[m] = o;
      } catch (y) {}

      if (k.style[m] != h) return a(), "pfx" == t ? m : !0;
    }

    return a(), !1;
  }

  function g(e, t, n, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + P.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined") ? h(a, t, o, s) : (a = (e + " " + N.join(i + " ") + i).split(" "), p(a, t, n));
  }

  function y(e, t, r) {
    return g(e, n, n, t, r);
  }

  var S = [],
      C = [],
      w = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function (e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function (e, t, n) {
      C.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function (e) {
      C.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function () {};

  Modernizr.prototype = w, Modernizr = new Modernizr(), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);

  var _ = "CSS" in e && "supports" in e.CSS,
      b = "supportsCSS" in e;

  Modernizr.addTest("supports", _ || b);

  var x = t.documentElement,
      T = "svg" === x.nodeName.toLowerCase(),
      z = function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function (e) {
      var n = t(e);
      return n && n.matches || !1;
    } : function (t) {
      var n = !1;
      return l("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
      }), n;
    };
  }();

  w.mq = z;
  var E = "Moz O ms Webkit",
      P = w._config.usePrefixes ? E.split(" ") : [];
  w._cssomPrefixes = P;
  var N = w._config.usePrefixes ? E.toLowerCase().split(" ") : [];
  w._domPrefixes = N;
  var j = {
    elem: i("modernizr")
  };

  Modernizr._q.push(function () {
    delete j.elem;
  });

  var k = {
    style: j.elem.style
  };
  Modernizr._q.unshift(function () {
    delete k.style;
  }), w.testAllProps = g, w.testAllProps = y, Modernizr.addTest("csstransforms3d", function () {
    return !!y("perspective", "1px", !0);
  }), Modernizr.addTest("csstransitions", y("transition", "all", !0));
  var q = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  w._prefixes = q;
  var A = w.testStyles = l;
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;else {
      var r = ["@media (", q.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      A(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  }), o(), s(S), delete w.addTest, delete w.addAsyncTest;

  for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();

  e.Modernizr = Modernizr;
}(window, document);