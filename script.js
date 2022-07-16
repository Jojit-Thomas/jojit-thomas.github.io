parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    L4bL: [
      function (require, module, exports) {
        var e = document.querySelector("#wrapper"),
          t = document.querySelector("body"),
          c = document.querySelector("#loader"),
          o = document.querySelector("#hamburger"),
          n = document.querySelector(".mobile-menu"),
          i = document.querySelectorAll(".mobile-menu li a"),
          r = document.querySelector(".header"),
          l = document.querySelectorAll(".reveal"),
          s = document.querySelector("#year"),
          a = 0;
        function d() {
          setTimeout(function () {
            c.classList.add("hide"),
              setTimeout(function () {
                e.classList.add("show");
              }, 1);
          }, 0);//3e3
        }
        function u() {
          var e = window.pageYOffset;
          e > a ? r.classList.add("active") : r.classList.remove("active"),
            (a = e);
        }
        function m() {
          for (var e = 0; e < l.length; e++) {
            var t = window.innerHeight;
            l[e].getBoundingClientRect().top < t - 120
              ? l[e].classList.add("active")
              : l[e].classList.remove("active");
          }
        }
        function v() {
          o.classList.toggle("active"), n.classList.toggle("active");
        }
        d(),
          i.forEach(function (e) {
            e.addEventListener("click", function () {
              v(), t.classList.remove("hide-scroll");
            });
          }),
          o.addEventListener("click", function () {
            v(), t.classList.toggle("hide-scroll");
          }),
          window.addEventListener("scroll", u),
          window.addEventListener("scroll", m),
          (s.innerText = new Date().getFullYear());
      },
      {},
    ],
  },
  {},
  ["L4bL"],
  null
);
