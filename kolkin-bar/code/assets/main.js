(function () {
  "use strict";
  var Mu = { exports: {} },
    va = {};
  var yf;
  function N0() {
    if (yf) return va;
    yf = 1;
    var i = Symbol.for("react.transitional.element"),
      l = Symbol.for("react.fragment");
    function u(o, c, d) {
      var h = null;
      if (
        (d !== void 0 && (h = "" + d),
        c.key !== void 0 && (h = "" + c.key),
        "key" in c)
      ) {
        d = {};
        for (var p in c) p !== "key" && (d[p] = c[p]);
      } else d = c;
      return (
        (c = d.ref),
        { $$typeof: i, type: o, key: h, ref: c !== void 0 ? c : null, props: d }
      );
    }
    return (va.Fragment = l), (va.jsx = u), (va.jsxs = u), va;
  }
  var gf;
  function O0() {
    return gf || ((gf = 1), (Mu.exports = N0())), Mu.exports;
  }
  var b = O0(),
    Du = { exports: {} },
    lt = {};
  var vf;
  function V0() {
    if (vf) return lt;
    vf = 1;
    var i = Symbol.for("react.transitional.element"),
      l = Symbol.for("react.portal"),
      u = Symbol.for("react.fragment"),
      o = Symbol.for("react.strict_mode"),
      c = Symbol.for("react.profiler"),
      d = Symbol.for("react.consumer"),
      h = Symbol.for("react.context"),
      p = Symbol.for("react.forward_ref"),
      g = Symbol.for("react.suspense"),
      m = Symbol.for("react.memo"),
      v = Symbol.for("react.lazy"),
      x = Symbol.for("react.activity"),
      T = Symbol.iterator;
    function N(E) {
      return E === null || typeof E != "object"
        ? null
        : ((E = (T && E[T]) || E["@@iterator"]),
          typeof E == "function" ? E : null);
    }
    var j = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      U = {};
    function H(E, L, Z) {
      (this.props = E),
        (this.context = L),
        (this.refs = U),
        (this.updater = Z || j);
    }
    (H.prototype.isReactComponent = {}),
      (H.prototype.setState = function (E, L) {
        if (typeof E != "object" && typeof E != "function" && E != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, E, L, "setState");
      }),
      (H.prototype.forceUpdate = function (E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate");
      });
    function X() {}
    X.prototype = H.prototype;
    function q(E, L, Z) {
      (this.props = E),
        (this.context = L),
        (this.refs = U),
        (this.updater = Z || j);
    }
    var G = (q.prototype = new X());
    (G.constructor = q), _(G, H.prototype), (G.isPureReactComponent = !0);
    var et = Array.isArray;
    function it() {}
    var K = { H: null, A: null, T: null, S: null },
      Q = Object.prototype.hasOwnProperty;
    function at(E, L, Z) {
      var P = Z.ref;
      return {
        $$typeof: i,
        type: E,
        key: L,
        ref: P !== void 0 ? P : null,
        props: Z,
      };
    }
    function I(E, L) {
      return at(E.type, L, E.props);
    }
    function pt(E) {
      return typeof E == "object" && E !== null && E.$$typeof === i;
    }
    function vt(E) {
      var L = { "=": "=0", ":": "=2" };
      return (
        "$" +
        E.replace(/[=:]/g, function (Z) {
          return L[Z];
        })
      );
    }
    var ee = /\/+/g;
    function kt(E, L) {
      return typeof E == "object" && E !== null && E.key != null
        ? vt("" + E.key)
        : L.toString(36);
    }
    function Lt(E) {
      switch (E.status) {
        case "fulfilled":
          return E.value;
        case "rejected":
          throw E.reason;
        default:
          switch (
            (typeof E.status == "string"
              ? E.then(it, it)
              : ((E.status = "pending"),
                E.then(
                  function (L) {
                    E.status === "pending" &&
                      ((E.status = "fulfilled"), (E.value = L));
                  },
                  function (L) {
                    E.status === "pending" &&
                      ((E.status = "rejected"), (E.reason = L));
                  },
                )),
            E.status)
          ) {
            case "fulfilled":
              return E.value;
            case "rejected":
              throw E.reason;
          }
      }
      throw E;
    }
    function R(E, L, Z, P, st) {
      var ct = typeof E;
      (ct === "undefined" || ct === "boolean") && (E = null);
      var Tt = !1;
      if (E === null) Tt = !0;
      else
        switch (ct) {
          case "bigint":
          case "string":
          case "number":
            Tt = !0;
            break;
          case "object":
            switch (E.$$typeof) {
              case i:
              case l:
                Tt = !0;
                break;
              case v:
                return (Tt = E._init), R(Tt(E._payload), L, Z, P, st);
            }
        }
      if (Tt)
        return (
          (st = st(E)),
          (Tt = P === "" ? "." + kt(E, 0) : P),
          et(st)
            ? ((Z = ""),
              Tt != null && (Z = Tt.replace(ee, "$&/") + "/"),
              R(st, L, Z, "", function (Ua) {
                return Ua;
              }))
            : st != null &&
              (pt(st) &&
                (st = I(
                  st,
                  Z +
                    (st.key == null || (E && E.key === st.key)
                      ? ""
                      : ("" + st.key).replace(ee, "$&/") + "/") +
                    Tt,
                )),
              L.push(st)),
          1
        );
      Tt = 0;
      var ce = P === "" ? "." : P + ":";
      if (et(E))
        for (var Ht = 0; Ht < E.length; Ht++)
          (P = E[Ht]), (ct = ce + kt(P, Ht)), (Tt += R(P, L, Z, ct, st));
      else if (((Ht = N(E)), typeof Ht == "function"))
        for (E = Ht.call(E), Ht = 0; !(P = E.next()).done; )
          (P = P.value), (ct = ce + kt(P, Ht++)), (Tt += R(P, L, Z, ct, st));
      else if (ct === "object") {
        if (typeof E.then == "function") return R(Lt(E), L, Z, P, st);
        throw (
          ((L = String(E)),
          Error(
            "Objects are not valid as a React child (found: " +
              (L === "[object Object]"
                ? "object with keys {" + Object.keys(E).join(", ") + "}"
                : L) +
              "). If you meant to render a collection of children, use an array instead.",
          ))
        );
      }
      return Tt;
    }
    function k(E, L, Z) {
      if (E == null) return E;
      var P = [],
        st = 0;
      return (
        R(E, P, "", "", function (ct) {
          return L.call(Z, ct, st++);
        }),
        P
      );
    }
    function J(E) {
      if (E._status === -1) {
        var L = E._result;
        (L = L()),
          L.then(
            function (Z) {
              (E._status === 0 || E._status === -1) &&
                ((E._status = 1), (E._result = Z));
            },
            function (Z) {
              (E._status === 0 || E._status === -1) &&
                ((E._status = 2), (E._result = Z));
            },
          ),
          E._status === -1 && ((E._status = 0), (E._result = L));
      }
      if (E._status === 1) return E._result.default;
      throw E._result;
    }
    var ot =
        typeof reportError == "function"
          ? reportError
          : function (E) {
              if (
                typeof window == "object" &&
                typeof window.ErrorEvent == "function"
              ) {
                var L = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof E == "object" &&
                    E !== null &&
                    typeof E.message == "string"
                      ? String(E.message)
                      : String(E),
                  error: E,
                });
                if (!window.dispatchEvent(L)) return;
              } else if (
                typeof process == "object" &&
                typeof process.emit == "function"
              ) {
                process.emit("uncaughtException", E);
                return;
              }
              console.error(E);
            },
      yt = {
        map: k,
        forEach: function (E, L, Z) {
          k(
            E,
            function () {
              L.apply(this, arguments);
            },
            Z,
          );
        },
        count: function (E) {
          var L = 0;
          return (
            k(E, function () {
              L++;
            }),
            L
          );
        },
        toArray: function (E) {
          return (
            k(E, function (L) {
              return L;
            }) || []
          );
        },
        only: function (E) {
          if (!pt(E))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return E;
        },
      };
    return (
      (lt.Activity = x),
      (lt.Children = yt),
      (lt.Component = H),
      (lt.Fragment = u),
      (lt.Profiler = c),
      (lt.PureComponent = q),
      (lt.StrictMode = o),
      (lt.Suspense = g),
      (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
      (lt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (E) {
          return K.H.useMemoCache(E);
        },
      }),
      (lt.cache = function (E) {
        return function () {
          return E.apply(null, arguments);
        };
      }),
      (lt.cacheSignal = function () {
        return null;
      }),
      (lt.cloneElement = function (E, L, Z) {
        if (E == null)
          throw Error(
            "The argument must be a React element, but you passed " + E + ".",
          );
        var P = _({}, E.props),
          st = E.key;
        if (L != null)
          for (ct in (L.key !== void 0 && (st = "" + L.key), L))
            !Q.call(L, ct) ||
              ct === "key" ||
              ct === "__self" ||
              ct === "__source" ||
              (ct === "ref" && L.ref === void 0) ||
              (P[ct] = L[ct]);
        var ct = arguments.length - 2;
        if (ct === 1) P.children = Z;
        else if (1 < ct) {
          for (var Tt = Array(ct), ce = 0; ce < ct; ce++)
            Tt[ce] = arguments[ce + 2];
          P.children = Tt;
        }
        return at(E.type, st, P);
      }),
      (lt.createContext = function (E) {
        return (
          (E = {
            $$typeof: h,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (E.Provider = E),
          (E.Consumer = { $$typeof: d, _context: E }),
          E
        );
      }),
      (lt.createElement = function (E, L, Z) {
        var P,
          st = {},
          ct = null;
        if (L != null)
          for (P in (L.key !== void 0 && (ct = "" + L.key), L))
            Q.call(L, P) &&
              P !== "key" &&
              P !== "__self" &&
              P !== "__source" &&
              (st[P] = L[P]);
        var Tt = arguments.length - 2;
        if (Tt === 1) st.children = Z;
        else if (1 < Tt) {
          for (var ce = Array(Tt), Ht = 0; Ht < Tt; Ht++)
            ce[Ht] = arguments[Ht + 2];
          st.children = ce;
        }
        if (E && E.defaultProps)
          for (P in ((Tt = E.defaultProps), Tt))
            st[P] === void 0 && (st[P] = Tt[P]);
        return at(E, ct, st);
      }),
      (lt.createRef = function () {
        return { current: null };
      }),
      (lt.forwardRef = function (E) {
        return { $$typeof: p, render: E };
      }),
      (lt.isValidElement = pt),
      (lt.lazy = function (E) {
        return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: J };
      }),
      (lt.memo = function (E, L) {
        return { $$typeof: m, type: E, compare: L === void 0 ? null : L };
      }),
      (lt.startTransition = function (E) {
        var L = K.T,
          Z = {};
        K.T = Z;
        try {
          var P = E(),
            st = K.S;
          st !== null && st(Z, P),
            typeof P == "object" &&
              P !== null &&
              typeof P.then == "function" &&
              P.then(it, ot);
        } catch (ct) {
          ot(ct);
        } finally {
          L !== null && Z.types !== null && (L.types = Z.types), (K.T = L);
        }
      }),
      (lt.unstable_useCacheRefresh = function () {
        return K.H.useCacheRefresh();
      }),
      (lt.use = function (E) {
        return K.H.use(E);
      }),
      (lt.useActionState = function (E, L, Z) {
        return K.H.useActionState(E, L, Z);
      }),
      (lt.useCallback = function (E, L) {
        return K.H.useCallback(E, L);
      }),
      (lt.useContext = function (E) {
        return K.H.useContext(E);
      }),
      (lt.useDebugValue = function () {}),
      (lt.useDeferredValue = function (E, L) {
        return K.H.useDeferredValue(E, L);
      }),
      (lt.useEffect = function (E, L) {
        return K.H.useEffect(E, L);
      }),
      (lt.useEffectEvent = function (E) {
        return K.H.useEffectEvent(E);
      }),
      (lt.useId = function () {
        return K.H.useId();
      }),
      (lt.useImperativeHandle = function (E, L, Z) {
        return K.H.useImperativeHandle(E, L, Z);
      }),
      (lt.useInsertionEffect = function (E, L) {
        return K.H.useInsertionEffect(E, L);
      }),
      (lt.useLayoutEffect = function (E, L) {
        return K.H.useLayoutEffect(E, L);
      }),
      (lt.useMemo = function (E, L) {
        return K.H.useMemo(E, L);
      }),
      (lt.useOptimistic = function (E, L) {
        return K.H.useOptimistic(E, L);
      }),
      (lt.useReducer = function (E, L, Z) {
        return K.H.useReducer(E, L, Z);
      }),
      (lt.useRef = function (E) {
        return K.H.useRef(E);
      }),
      (lt.useState = function (E) {
        return K.H.useState(E);
      }),
      (lt.useSyncExternalStore = function (E, L, Z) {
        return K.H.useSyncExternalStore(E, L, Z);
      }),
      (lt.useTransition = function () {
        return K.H.useTransition();
      }),
      (lt.version = "19.2.8"),
      lt
    );
  }
  var xf;
  function Cu() {
    return xf || ((xf = 1), (Du.exports = V0())), Du.exports;
  }
  var Y = Cu(),
    wu = { exports: {} },
    xa = {},
    ju = { exports: {} },
    zu = {};
  var bf;
  function _0() {
    return (
      bf ||
        ((bf = 1),
        (function (i) {
          function l(R, k) {
            var J = R.length;
            R.push(k);
            t: for (; 0 < J; ) {
              var ot = (J - 1) >>> 1,
                yt = R[ot];
              if (0 < c(yt, k)) (R[ot] = k), (R[J] = yt), (J = ot);
              else break t;
            }
          }
          function u(R) {
            return R.length === 0 ? null : R[0];
          }
          function o(R) {
            if (R.length === 0) return null;
            var k = R[0],
              J = R.pop();
            if (J !== k) {
              R[0] = J;
              t: for (var ot = 0, yt = R.length, E = yt >>> 1; ot < E; ) {
                var L = 2 * (ot + 1) - 1,
                  Z = R[L],
                  P = L + 1,
                  st = R[P];
                if (0 > c(Z, J))
                  P < yt && 0 > c(st, Z)
                    ? ((R[ot] = st), (R[P] = J), (ot = P))
                    : ((R[ot] = Z), (R[L] = J), (ot = L));
                else if (P < yt && 0 > c(st, J))
                  (R[ot] = st), (R[P] = J), (ot = P);
                else break t;
              }
            }
            return k;
          }
          function c(R, k) {
            var J = R.sortIndex - k.sortIndex;
            return J !== 0 ? J : R.id - k.id;
          }
          if (
            ((i.unstable_now = void 0),
            typeof performance == "object" &&
              typeof performance.now == "function")
          ) {
            var d = performance;
            i.unstable_now = function () {
              return d.now();
            };
          } else {
            var h = Date,
              p = h.now();
            i.unstable_now = function () {
              return h.now() - p;
            };
          }
          var g = [],
            m = [],
            v = 1,
            x = null,
            T = 3,
            N = !1,
            j = !1,
            _ = !1,
            U = !1,
            H = typeof setTimeout == "function" ? setTimeout : null,
            X = typeof clearTimeout == "function" ? clearTimeout : null,
            q = typeof setImmediate < "u" ? setImmediate : null;
          function G(R) {
            for (var k = u(m); k !== null; ) {
              if (k.callback === null) o(m);
              else if (k.startTime <= R)
                o(m), (k.sortIndex = k.expirationTime), l(g, k);
              else break;
              k = u(m);
            }
          }
          function et(R) {
            if (((_ = !1), G(R), !j))
              if (u(g) !== null) (j = !0), it || ((it = !0), vt());
              else {
                var k = u(m);
                k !== null && Lt(et, k.startTime - R);
              }
          }
          var it = !1,
            K = -1,
            Q = 5,
            at = -1;
          function I() {
            return U ? !0 : !(i.unstable_now() - at < Q);
          }
          function pt() {
            if (((U = !1), it)) {
              var R = i.unstable_now();
              at = R;
              var k = !0;
              try {
                t: {
                  (j = !1), _ && ((_ = !1), X(K), (K = -1)), (N = !0);
                  var J = T;
                  try {
                    e: {
                      for (
                        G(R), x = u(g);
                        x !== null && !(x.expirationTime > R && I());

                      ) {
                        var ot = x.callback;
                        if (typeof ot == "function") {
                          (x.callback = null), (T = x.priorityLevel);
                          var yt = ot(x.expirationTime <= R);
                          if (
                            ((R = i.unstable_now()), typeof yt == "function")
                          ) {
                            (x.callback = yt), G(R), (k = !0);
                            break e;
                          }
                          x === u(g) && o(g), G(R);
                        } else o(g);
                        x = u(g);
                      }
                      if (x !== null) k = !0;
                      else {
                        var E = u(m);
                        E !== null && Lt(et, E.startTime - R), (k = !1);
                      }
                    }
                    break t;
                  } finally {
                    (x = null), (T = J), (N = !1);
                  }
                  k = void 0;
                }
              } finally {
                k ? vt() : (it = !1);
              }
            }
          }
          var vt;
          if (typeof q == "function")
            vt = function () {
              q(pt);
            };
          else if (typeof MessageChannel < "u") {
            var ee = new MessageChannel(),
              kt = ee.port2;
            (ee.port1.onmessage = pt),
              (vt = function () {
                kt.postMessage(null);
              });
          } else
            vt = function () {
              H(pt, 0);
            };
          function Lt(R, k) {
            K = H(function () {
              R(i.unstable_now());
            }, k);
          }
          (i.unstable_IdlePriority = 5),
            (i.unstable_ImmediatePriority = 1),
            (i.unstable_LowPriority = 4),
            (i.unstable_NormalPriority = 3),
            (i.unstable_Profiling = null),
            (i.unstable_UserBlockingPriority = 2),
            (i.unstable_cancelCallback = function (R) {
              R.callback = null;
            }),
            (i.unstable_forceFrameRate = function (R) {
              0 > R || 125 < R
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : (Q = 0 < R ? Math.floor(1e3 / R) : 5);
            }),
            (i.unstable_getCurrentPriorityLevel = function () {
              return T;
            }),
            (i.unstable_next = function (R) {
              switch (T) {
                case 1:
                case 2:
                case 3:
                  var k = 3;
                  break;
                default:
                  k = T;
              }
              var J = T;
              T = k;
              try {
                return R();
              } finally {
                T = J;
              }
            }),
            (i.unstable_requestPaint = function () {
              U = !0;
            }),
            (i.unstable_runWithPriority = function (R, k) {
              switch (R) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  R = 3;
              }
              var J = T;
              T = R;
              try {
                return k();
              } finally {
                T = J;
              }
            }),
            (i.unstable_scheduleCallback = function (R, k, J) {
              var ot = i.unstable_now();
              switch (
                (typeof J == "object" && J !== null
                  ? ((J = J.delay),
                    (J = typeof J == "number" && 0 < J ? ot + J : ot))
                  : (J = ot),
                R)
              ) {
                case 1:
                  var yt = -1;
                  break;
                case 2:
                  yt = 250;
                  break;
                case 5:
                  yt = 1073741823;
                  break;
                case 4:
                  yt = 1e4;
                  break;
                default:
                  yt = 5e3;
              }
              return (
                (yt = J + yt),
                (R = {
                  id: v++,
                  callback: k,
                  priorityLevel: R,
                  startTime: J,
                  expirationTime: yt,
                  sortIndex: -1,
                }),
                J > ot
                  ? ((R.sortIndex = J),
                    l(m, R),
                    u(g) === null &&
                      R === u(m) &&
                      (_ ? (X(K), (K = -1)) : (_ = !0), Lt(et, J - ot)))
                  : ((R.sortIndex = yt),
                    l(g, R),
                    j || N || ((j = !0), it || ((it = !0), vt()))),
                R
              );
            }),
            (i.unstable_shouldYield = I),
            (i.unstable_wrapCallback = function (R) {
              var k = T;
              return function () {
                var J = T;
                T = k;
                try {
                  return R.apply(this, arguments);
                } finally {
                  T = J;
                }
              };
            });
        })(zu)),
      zu
    );
  }
  var Sf;
  function B0() {
    return Sf || ((Sf = 1), (ju.exports = _0())), ju.exports;
  }
  var Ru = { exports: {} },
    ue = {};
  var Tf;
  function U0() {
    if (Tf) return ue;
    Tf = 1;
    var i = Cu();
    function l(g) {
      var m = "https://react.dev/errors/" + g;
      if (1 < arguments.length) {
        m += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var v = 2; v < arguments.length; v++)
          m += "&args[]=" + encodeURIComponent(arguments[v]);
      }
      return (
        "Minified React error #" +
        g +
        "; visit " +
        m +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function u() {}
    var o = {
        d: {
          f: u,
          r: function () {
            throw Error(l(522));
          },
          D: u,
          C: u,
          L: u,
          m: u,
          X: u,
          S: u,
          M: u,
        },
        p: 0,
        findDOMNode: null,
      },
      c = Symbol.for("react.portal");
    function d(g, m, v) {
      var x =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: c,
        key: x == null ? null : "" + x,
        children: g,
        containerInfo: m,
        implementation: v,
      };
    }
    var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(g, m) {
      if (g === "font") return "";
      if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return (
      (ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
      (ue.createPortal = function (g, m) {
        var v =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
          throw Error(l(299));
        return d(g, m, null, v);
      }),
      (ue.flushSync = function (g) {
        var m = h.T,
          v = o.p;
        try {
          if (((h.T = null), (o.p = 2), g)) return g();
        } finally {
          (h.T = m), (o.p = v), o.d.f();
        }
      }),
      (ue.preconnect = function (g, m) {
        typeof g == "string" &&
          (m
            ? ((m = m.crossOrigin),
              (m =
                typeof m == "string"
                  ? m === "use-credentials"
                    ? m
                    : ""
                  : void 0))
            : (m = null),
          o.d.C(g, m));
      }),
      (ue.prefetchDNS = function (g) {
        typeof g == "string" && o.d.D(g);
      }),
      (ue.preinit = function (g, m) {
        if (typeof g == "string" && m && typeof m.as == "string") {
          var v = m.as,
            x = p(v, m.crossOrigin),
            T = typeof m.integrity == "string" ? m.integrity : void 0,
            N = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
          v === "style"
            ? o.d.S(
                g,
                typeof m.precedence == "string" ? m.precedence : void 0,
                { crossOrigin: x, integrity: T, fetchPriority: N },
              )
            : v === "script" &&
              o.d.X(g, {
                crossOrigin: x,
                integrity: T,
                fetchPriority: N,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
              });
        }
      }),
      (ue.preinitModule = function (g, m) {
        if (typeof g == "string")
          if (typeof m == "object" && m !== null) {
            if (m.as == null || m.as === "script") {
              var v = p(m.as, m.crossOrigin);
              o.d.M(g, {
                crossOrigin: v,
                integrity:
                  typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
              });
            }
          } else m == null && o.d.M(g);
      }),
      (ue.preload = function (g, m) {
        if (
          typeof g == "string" &&
          typeof m == "object" &&
          m !== null &&
          typeof m.as == "string"
        ) {
          var v = m.as,
            x = p(v, m.crossOrigin);
          o.d.L(g, v, {
            crossOrigin: x,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            type: typeof m.type == "string" ? m.type : void 0,
            fetchPriority:
              typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
            referrerPolicy:
              typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
            imageSrcSet:
              typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
            imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
            media: typeof m.media == "string" ? m.media : void 0,
          });
        }
      }),
      (ue.preloadModule = function (g, m) {
        if (typeof g == "string")
          if (m) {
            var v = p(m.as, m.crossOrigin);
            o.d.m(g, {
              as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            });
          } else o.d.m(g);
      }),
      (ue.requestFormReset = function (g) {
        o.d.r(g);
      }),
      (ue.unstable_batchedUpdates = function (g, m) {
        return g(m);
      }),
      (ue.useFormState = function (g, m, v) {
        return h.H.useFormState(g, m, v);
      }),
      (ue.useFormStatus = function () {
        return h.H.useHostTransitionStatus();
      }),
      (ue.version = "19.2.8"),
      ue
    );
  }
  var Af;
  function L0() {
    if (Af) return Ru.exports;
    Af = 1;
    function i() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
        } catch (l) {
          console.error(l);
        }
    }
    return i(), (Ru.exports = U0()), Ru.exports;
  }
  var Ef;
  function H0() {
    if (Ef) return xa;
    Ef = 1;
    var i = B0(),
      l = Cu(),
      u = L0();
    function o(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          e += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function c(t) {
      return !(
        !t ||
        (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
      );
    }
    function d(t) {
      var e = t,
        n = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
        while (t);
      }
      return e.tag === 3 ? n : null;
    }
    function h(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (
          (e === null &&
            ((t = t.alternate), t !== null && (e = t.memoizedState)),
          e !== null)
        )
          return e.dehydrated;
      }
      return null;
    }
    function p(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (
          (e === null &&
            ((t = t.alternate), t !== null && (e = t.memoizedState)),
          e !== null)
        )
          return e.dehydrated;
      }
      return null;
    }
    function g(t) {
      if (d(t) !== t) throw Error(o(188));
    }
    function m(t) {
      var e = t.alternate;
      if (!e) {
        if (((e = d(t)), e === null)) throw Error(o(188));
        return e !== t ? null : t;
      }
      for (var n = t, a = e; ; ) {
        var s = n.return;
        if (s === null) break;
        var r = s.alternate;
        if (r === null) {
          if (((a = s.return), a !== null)) {
            n = a;
            continue;
          }
          break;
        }
        if (s.child === r.child) {
          for (r = s.child; r; ) {
            if (r === n) return g(s), t;
            if (r === a) return g(s), e;
            r = r.sibling;
          }
          throw Error(o(188));
        }
        if (n.return !== a.return) (n = s), (a = r);
        else {
          for (var f = !1, y = s.child; y; ) {
            if (y === n) {
              (f = !0), (n = s), (a = r);
              break;
            }
            if (y === a) {
              (f = !0), (a = s), (n = r);
              break;
            }
            y = y.sibling;
          }
          if (!f) {
            for (y = r.child; y; ) {
              if (y === n) {
                (f = !0), (n = r), (a = s);
                break;
              }
              if (y === a) {
                (f = !0), (a = r), (n = s);
                break;
              }
              y = y.sibling;
            }
            if (!f) throw Error(o(189));
          }
        }
        if (n.alternate !== a) throw Error(o(190));
      }
      if (n.tag !== 3) throw Error(o(188));
      return n.stateNode.current === n ? t : e;
    }
    function v(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (((e = v(t)), e !== null)) return e;
        t = t.sibling;
      }
      return null;
    }
    var x = Object.assign,
      T = Symbol.for("react.element"),
      N = Symbol.for("react.transitional.element"),
      j = Symbol.for("react.portal"),
      _ = Symbol.for("react.fragment"),
      U = Symbol.for("react.strict_mode"),
      H = Symbol.for("react.profiler"),
      X = Symbol.for("react.consumer"),
      q = Symbol.for("react.context"),
      G = Symbol.for("react.forward_ref"),
      et = Symbol.for("react.suspense"),
      it = Symbol.for("react.suspense_list"),
      K = Symbol.for("react.memo"),
      Q = Symbol.for("react.lazy"),
      at = Symbol.for("react.activity"),
      I = Symbol.for("react.memo_cache_sentinel"),
      pt = Symbol.iterator;
    function vt(t) {
      return t === null || typeof t != "object"
        ? null
        : ((t = (pt && t[pt]) || t["@@iterator"]),
          typeof t == "function" ? t : null);
    }
    var ee = Symbol.for("react.client.reference");
    function kt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === ee ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case _:
          return "Fragment";
        case H:
          return "Profiler";
        case U:
          return "StrictMode";
        case et:
          return "Suspense";
        case it:
          return "SuspenseList";
        case at:
          return "Activity";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case j:
            return "Portal";
          case q:
            return t.displayName || "Context";
          case X:
            return (t._context.displayName || "Context") + ".Consumer";
          case G:
            var e = t.render;
            return (
              (t = t.displayName),
              t ||
                ((t = e.displayName || e.name || ""),
                (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
              t
            );
          case K:
            return (
              (e = t.displayName || null), e !== null ? e : kt(t.type) || "Memo"
            );
          case Q:
            (e = t._payload), (t = t._init);
            try {
              return kt(t(e));
            } catch {}
        }
      return null;
    }
    var Lt = Array.isArray,
      R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      k = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      J = { pending: !1, data: null, method: null, action: null },
      ot = [],
      yt = -1;
    function E(t) {
      return { current: t };
    }
    function L(t) {
      0 > yt || ((t.current = ot[yt]), (ot[yt] = null), yt--);
    }
    function Z(t, e) {
      yt++, (ot[yt] = t.current), (t.current = e);
    }
    var P = E(null),
      st = E(null),
      ct = E(null),
      Tt = E(null);
    function ce(t, e) {
      switch ((Z(ct, e), Z(st, t), Z(P, null), e.nodeType)) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? e0(t) : 0;
          break;
        default:
          if (((t = e.tagName), (e = e.namespaceURI)))
            (e = e0(e)), (t = n0(e, t));
          else
            switch (t) {
              case "svg":
                t = 1;
                break;
              case "math":
                t = 2;
                break;
              default:
                t = 0;
            }
      }
      L(P), Z(P, t);
    }
    function Ht() {
      L(P), L(st), L(ct);
    }
    function Ua(t) {
      t.memoizedState !== null && Z(Tt, t);
      var e = P.current,
        n = n0(e, t.type);
      e !== n && (Z(st, t), Z(P, n));
    }
    function us(t) {
      st.current === t && (L(P), L(st)),
        Tt.current === t && (L(Tt), (Dl._currentValue = J));
    }
    var Po, Rm;
    function li(t) {
      if (Po === void 0)
        try {
          throw Error();
        } catch (n) {
          var e = n.stack.trim().match(/\n( *(at )?)/);
          (Po = (e && e[1]) || ""),
            (Rm =
              -1 <
              n.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < n.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : "");
        }
      return (
        `
` +
        Po +
        t +
        Rm
      );
    }
    var $o = !1;
    function Io(t, e) {
      if (!t || $o) return "";
      $o = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function () {
            try {
              if (e) {
                var B = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(B.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(B, []);
                  } catch (z) {
                    var w = z;
                  }
                  Reflect.construct(t, [], B);
                } else {
                  try {
                    B.call();
                  } catch (z) {
                    w = z;
                  }
                  t.call(B.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  w = z;
                }
                (B = t()) &&
                  typeof B.catch == "function" &&
                  B.catch(function () {});
              }
            } catch (z) {
              if (z && w && typeof z.stack == "string")
                return [z.stack, w.stack];
            }
            return [null, null];
          },
        };
        a.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var s = Object.getOwnPropertyDescriptor(
          a.DetermineComponentFrameRoot,
          "name",
        );
        s &&
          s.configurable &&
          Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var r = a.DetermineComponentFrameRoot(),
          f = r[0],
          y = r[1];
        if (f && y) {
          var S = f.split(`
`),
            C = y.split(`
`);
          for (
            s = a = 0;
            a < S.length && !S[a].includes("DetermineComponentFrameRoot");

          )
            a++;
          for (
            ;
            s < C.length && !C[s].includes("DetermineComponentFrameRoot");

          )
            s++;
          if (a === S.length || s === C.length)
            for (
              a = S.length - 1, s = C.length - 1;
              1 <= a && 0 <= s && S[a] !== C[s];

            )
              s--;
          for (; 1 <= a && 0 <= s; a--, s--)
            if (S[a] !== C[s]) {
              if (a !== 1 || s !== 1)
                do
                  if ((a--, s--, 0 > s || S[a] !== C[s])) {
                    var O =
                      `
` + S[a].replace(" at new ", " at ");
                    return (
                      t.displayName &&
                        O.includes("<anonymous>") &&
                        (O = O.replace("<anonymous>", t.displayName)),
                      O
                    );
                  }
                while (1 <= a && 0 <= s);
              break;
            }
        }
      } finally {
        ($o = !1), (Error.prepareStackTrace = n);
      }
      return (n = t ? t.displayName || t.name : "") ? li(n) : "";
    }
    function a2(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return li(t.type);
        case 16:
          return li("Lazy");
        case 13:
          return t.child !== e && e !== null
            ? li("Suspense Fallback")
            : li("Suspense");
        case 19:
          return li("SuspenseList");
        case 0:
        case 15:
          return Io(t.type, !1);
        case 11:
          return Io(t.type.render, !1);
        case 1:
          return Io(t.type, !0);
        case 31:
          return li("Activity");
        default:
          return "";
      }
    }
    function Nm(t) {
      try {
        var e = "",
          n = null;
        do (e += a2(t, n)), (n = t), (t = t.return);
        while (t);
        return e;
      } catch (a) {
        return (
          `
Error generating stack: ` +
          a.message +
          `
` +
          a.stack
        );
      }
    }
    var tr = Object.prototype.hasOwnProperty,
      er = i.unstable_scheduleCallback,
      nr = i.unstable_cancelCallback,
      l2 = i.unstable_shouldYield,
      s2 = i.unstable_requestPaint,
      be = i.unstable_now,
      u2 = i.unstable_getCurrentPriorityLevel,
      Om = i.unstable_ImmediatePriority,
      Vm = i.unstable_UserBlockingPriority,
      os = i.unstable_NormalPriority,
      o2 = i.unstable_LowPriority,
      _m = i.unstable_IdlePriority,
      r2 = i.log,
      c2 = i.unstable_setDisableYieldValue,
      La = null,
      Se = null;
    function Cn(t) {
      if (
        (typeof r2 == "function" && c2(t),
        Se && typeof Se.setStrictMode == "function")
      )
        try {
          Se.setStrictMode(La, t);
        } catch {}
    }
    var Te = Math.clz32 ? Math.clz32 : d2,
      f2 = Math.log,
      h2 = Math.LN2;
    function d2(t) {
      return (t >>>= 0), t === 0 ? 32 : (31 - ((f2(t) / h2) | 0)) | 0;
    }
    var rs = 256,
      cs = 262144,
      fs = 4194304;
    function si(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return t;
      }
    }
    function hs(t, e, n) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var s = 0,
        r = t.suspendedLanes,
        f = t.pingedLanes;
      t = t.warmLanes;
      var y = a & 134217727;
      return (
        y !== 0
          ? ((a = y & ~r),
            a !== 0
              ? (s = si(a))
              : ((f &= y),
                f !== 0
                  ? (s = si(f))
                  : n || ((n = y & ~t), n !== 0 && (s = si(n)))))
          : ((y = a & ~r),
            y !== 0
              ? (s = si(y))
              : f !== 0
                ? (s = si(f))
                : n || ((n = a & ~t), n !== 0 && (s = si(n)))),
        s === 0
          ? 0
          : e !== 0 &&
              e !== s &&
              (e & r) === 0 &&
              ((r = s & -s),
              (n = e & -e),
              r >= n || (r === 32 && (n & 4194048) !== 0))
            ? e
            : s
      );
    }
    function Ha(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function m2(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Bm() {
      var t = fs;
      return (fs <<= 1), (fs & 62914560) === 0 && (fs = 4194304), t;
    }
    function ir(t) {
      for (var e = [], n = 0; 31 > n; n++) e.push(t);
      return e;
    }
    function qa(t, e) {
      (t.pendingLanes |= e),
        e !== 268435456 &&
          ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
    }
    function p2(t, e, n, a, s, r) {
      var f = t.pendingLanes;
      (t.pendingLanes = n),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.warmLanes = 0),
        (t.expiredLanes &= n),
        (t.entangledLanes &= n),
        (t.errorRecoveryDisabledLanes &= n),
        (t.shellSuspendCounter = 0);
      var y = t.entanglements,
        S = t.expirationTimes,
        C = t.hiddenUpdates;
      for (n = f & ~n; 0 < n; ) {
        var O = 31 - Te(n),
          B = 1 << O;
        (y[O] = 0), (S[O] = -1);
        var w = C[O];
        if (w !== null)
          for (C[O] = null, O = 0; O < w.length; O++) {
            var z = w[O];
            z !== null && (z.lane &= -536870913);
          }
        n &= ~B;
      }
      a !== 0 && Um(t, a, 0),
        r !== 0 &&
          s === 0 &&
          t.tag !== 0 &&
          (t.suspendedLanes |= r & ~(f & ~e));
    }
    function Um(t, e, n) {
      (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
      var a = 31 - Te(e);
      (t.entangledLanes |= e),
        (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930));
    }
    function Lm(t, e) {
      var n = (t.entangledLanes |= e);
      for (t = t.entanglements; n; ) {
        var a = 31 - Te(n),
          s = 1 << a;
        (s & e) | (t[a] & e) && (t[a] |= e), (n &= ~s);
      }
    }
    function Hm(t, e) {
      var n = e & -e;
      return (
        (n = (n & 42) !== 0 ? 1 : ar(n)),
        (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
      );
    }
    function ar(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function lr(t) {
      return (
        (t &= -t),
        2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
      );
    }
    function qm() {
      var t = k.p;
      return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : M0(t.type));
    }
    function Ym(t, e) {
      var n = k.p;
      try {
        return (k.p = t), e();
      } finally {
        k.p = n;
      }
    }
    var wn = Math.random().toString(36).slice(2),
      ne = "__reactFiber$" + wn,
      he = "__reactProps$" + wn,
      Vi = "__reactContainer$" + wn,
      sr = "__reactEvents$" + wn,
      y2 = "__reactListeners$" + wn,
      g2 = "__reactHandles$" + wn,
      Gm = "__reactResources$" + wn,
      Ya = "__reactMarker$" + wn;
    function ur(t) {
      delete t[ne], delete t[he], delete t[sr], delete t[y2], delete t[g2];
    }
    function _i(t) {
      var e = t[ne];
      if (e) return e;
      for (var n = t.parentNode; n; ) {
        if ((e = n[Vi] || n[ne])) {
          if (
            ((n = e.alternate),
            e.child !== null || (n !== null && n.child !== null))
          )
            for (t = r0(t); t !== null; ) {
              if ((n = t[ne])) return n;
              t = r0(t);
            }
          return e;
        }
        (t = n), (n = t.parentNode);
      }
      return null;
    }
    function Bi(t) {
      if ((t = t[ne] || t[Vi])) {
        var e = t.tag;
        if (
          e === 5 ||
          e === 6 ||
          e === 13 ||
          e === 31 ||
          e === 26 ||
          e === 27 ||
          e === 3
        )
          return t;
      }
      return null;
    }
    function Ga(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(o(33));
    }
    function Ui(t) {
      var e = t[Gm];
      return (
        e ||
          (e = t[Gm] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        e
      );
    }
    function Pt(t) {
      t[Ya] = !0;
    }
    var Xm = new Set(),
      km = {};
    function ui(t, e) {
      Li(t, e), Li(t + "Capture", e);
    }
    function Li(t, e) {
      for (km[t] = e, t = 0; t < e.length; t++) Xm.add(e[t]);
    }
    var v2 = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
      ),
      Zm = {},
      Km = {};
    function x2(t) {
      return tr.call(Km, t)
        ? !0
        : tr.call(Zm, t)
          ? !1
          : v2.test(t)
            ? (Km[t] = !0)
            : ((Zm[t] = !0), !1);
    }
    function ds(t, e, n) {
      if (x2(e))
        if (n === null) t.removeAttribute(e);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var a = e.toLowerCase().slice(0, 5);
              if (a !== "data-" && a !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          t.setAttribute(e, "" + n);
        }
    }
    function ms(t, e, n) {
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + n);
      }
    }
    function ln(t, e, n, a) {
      if (a === null) t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(n);
            return;
        }
        t.setAttributeNS(e, n, "" + a);
      }
    }
    function Ne(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Qm(t) {
      var e = t.type;
      return (
        (t = t.nodeName) &&
        t.toLowerCase() === "input" &&
        (e === "checkbox" || e === "radio")
      );
    }
    function b2(t, e, n) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (
        !t.hasOwnProperty(e) &&
        typeof a < "u" &&
        typeof a.get == "function" &&
        typeof a.set == "function"
      ) {
        var s = a.get,
          r = a.set;
        return (
          Object.defineProperty(t, e, {
            configurable: !0,
            get: function () {
              return s.call(this);
            },
            set: function (f) {
              (n = "" + f), r.call(this, f);
            },
          }),
          Object.defineProperty(t, e, { enumerable: a.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (f) {
              n = "" + f;
            },
            stopTracking: function () {
              (t._valueTracker = null), delete t[e];
            },
          }
        );
      }
    }
    function or(t) {
      if (!t._valueTracker) {
        var e = Qm(t) ? "checked" : "value";
        t._valueTracker = b2(t, e, "" + t[e]);
      }
    }
    function Jm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var n = e.getValue(),
        a = "";
      return (
        t && (a = Qm(t) ? (t.checked ? "true" : "false") : t.value),
        (t = a),
        t !== n ? (e.setValue(t), !0) : !1
      );
    }
    function ps(t) {
      if (
        ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
      )
        return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var S2 = /[\n"\\]/g;
    function Oe(t) {
      return t.replace(S2, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function rr(t, e, n, a, s, r, f, y) {
      (t.name = ""),
        f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean"
          ? (t.type = f)
          : t.removeAttribute("type"),
        e != null
          ? f === "number"
            ? ((e === 0 && t.value === "") || t.value != e) &&
              (t.value = "" + Ne(e))
            : t.value !== "" + Ne(e) && (t.value = "" + Ne(e))
          : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
        e != null
          ? cr(t, f, Ne(e))
          : n != null
            ? cr(t, f, Ne(n))
            : a != null && t.removeAttribute("value"),
        s == null && r != null && (t.defaultChecked = !!r),
        s != null &&
          (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean"
          ? (t.name = "" + Ne(y))
          : t.removeAttribute("name");
    }
    function Fm(t, e, n, a, s, r, f, y) {
      if (
        (r != null &&
          typeof r != "function" &&
          typeof r != "symbol" &&
          typeof r != "boolean" &&
          (t.type = r),
        e != null || n != null)
      ) {
        if (!((r !== "submit" && r !== "reset") || e != null)) {
          or(t);
          return;
        }
        (n = n != null ? "" + Ne(n) : ""),
          (e = e != null ? "" + Ne(e) : n),
          y || e === t.value || (t.value = e),
          (t.defaultValue = e);
      }
      (a = a ?? s),
        (a = typeof a != "function" && typeof a != "symbol" && !!a),
        (t.checked = y ? t.checked : !!a),
        (t.defaultChecked = !!a),
        f != null &&
          typeof f != "function" &&
          typeof f != "symbol" &&
          typeof f != "boolean" &&
          (t.name = f),
        or(t);
    }
    function cr(t, e, n) {
      (e === "number" && ps(t.ownerDocument) === t) ||
        t.defaultValue === "" + n ||
        (t.defaultValue = "" + n);
    }
    function Hi(t, e, n, a) {
      if (((t = t.options), e)) {
        e = {};
        for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
        for (n = 0; n < t.length; n++)
          (s = e.hasOwnProperty("$" + t[n].value)),
            t[n].selected !== s && (t[n].selected = s),
            s && a && (t[n].defaultSelected = !0);
      } else {
        for (n = "" + Ne(n), e = null, s = 0; s < t.length; s++) {
          if (t[s].value === n) {
            (t[s].selected = !0), a && (t[s].defaultSelected = !0);
            return;
          }
          e !== null || t[s].disabled || (e = t[s]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Wm(t, e, n) {
      if (
        e != null &&
        ((e = "" + Ne(e)), e !== t.value && (t.value = e), n == null)
      ) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = n != null ? "" + Ne(n) : "";
    }
    function Pm(t, e, n, a) {
      if (e == null) {
        if (a != null) {
          if (n != null) throw Error(o(92));
          if (Lt(a)) {
            if (1 < a.length) throw Error(o(93));
            a = a[0];
          }
          n = a;
        }
        n == null && (n = ""), (e = n);
      }
      (n = Ne(e)),
        (t.defaultValue = n),
        (a = t.textContent),
        a === n && a !== "" && a !== null && (t.value = a),
        or(t);
    }
    function qi(t, e) {
      if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
          n.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var T2 = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
      ),
    );
    function $m(t, e, n) {
      var a = e.indexOf("--") === 0;
      n == null || typeof n == "boolean" || n === ""
        ? a
          ? t.setProperty(e, "")
          : e === "float"
            ? (t.cssFloat = "")
            : (t[e] = "")
        : a
          ? t.setProperty(e, n)
          : typeof n != "number" || n === 0 || T2.has(e)
            ? e === "float"
              ? (t.cssFloat = n)
              : (t[e] = ("" + n).trim())
            : (t[e] = n + "px");
    }
    function Im(t, e, n) {
      if (e != null && typeof e != "object") throw Error(o(62));
      if (((t = t.style), n != null)) {
        for (var a in n)
          !n.hasOwnProperty(a) ||
            (e != null && e.hasOwnProperty(a)) ||
            (a.indexOf("--") === 0
              ? t.setProperty(a, "")
              : a === "float"
                ? (t.cssFloat = "")
                : (t[a] = ""));
        for (var s in e)
          (a = e[s]), e.hasOwnProperty(s) && n[s] !== a && $m(t, s, a);
      } else for (var r in e) e.hasOwnProperty(r) && $m(t, r, e[r]);
    }
    function fr(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var A2 = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      E2 =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ys(t) {
      return E2.test("" + t)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : t;
    }
    function sn() {}
    var hr = null;
    function dr(t) {
      return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
      );
    }
    var Yi = null,
      Gi = null;
    function tp(t) {
      var e = Bi(t);
      if (e && (t = e.stateNode)) {
        var n = t[he] || null;
        t: switch (((t = e.stateNode), e.type)) {
          case "input":
            if (
              (rr(
                t,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (e = n.name),
              n.type === "radio" && e != null)
            ) {
              for (n = t; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  'input[name="' + Oe("" + e) + '"][type="radio"]',
                ),
                  e = 0;
                e < n.length;
                e++
              ) {
                var a = n[e];
                if (a !== t && a.form === t.form) {
                  var s = a[he] || null;
                  if (!s) throw Error(o(90));
                  rr(
                    a,
                    s.value,
                    s.defaultValue,
                    s.defaultValue,
                    s.checked,
                    s.defaultChecked,
                    s.type,
                    s.name,
                  );
                }
              }
              for (e = 0; e < n.length; e++)
                (a = n[e]), a.form === t.form && Jm(a);
            }
            break t;
          case "textarea":
            Wm(t, n.value, n.defaultValue);
            break t;
          case "select":
            (e = n.value), e != null && Hi(t, !!n.multiple, e, !1);
        }
      }
    }
    var mr = !1;
    function ep(t, e, n) {
      if (mr) return t(e, n);
      mr = !0;
      try {
        var a = t(e);
        return a;
      } finally {
        if (
          ((mr = !1),
          (Yi !== null || Gi !== null) &&
            (iu(), Yi && ((e = Yi), (t = Gi), (Gi = Yi = null), tp(e), t)))
        )
          for (e = 0; e < t.length; e++) tp(t[e]);
      }
    }
    function Xa(t, e) {
      var n = t.stateNode;
      if (n === null) return null;
      var a = n[he] || null;
      if (a === null) return null;
      n = a[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) ||
            ((t = t.type),
            (a = !(
              t === "button" ||
              t === "input" ||
              t === "select" ||
              t === "textarea"
            ))),
            (t = !a);
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (n && typeof n != "function") throw Error(o(231, e, typeof n));
      return n;
    }
    var un = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      pr = !1;
    if (un)
      try {
        var ka = {};
        Object.defineProperty(ka, "passive", {
          get: function () {
            pr = !0;
          },
        }),
          window.addEventListener("test", ka, ka),
          window.removeEventListener("test", ka, ka);
      } catch {
        pr = !1;
      }
    var jn = null,
      yr = null,
      gs = null;
    function np() {
      if (gs) return gs;
      var t,
        e = yr,
        n = e.length,
        a,
        s = "value" in jn ? jn.value : jn.textContent,
        r = s.length;
      for (t = 0; t < n && e[t] === s[t]; t++);
      var f = n - t;
      for (a = 1; a <= f && e[n - a] === s[r - a]; a++);
      return (gs = s.slice(t, 1 < a ? 1 - a : void 0));
    }
    function vs(t) {
      var e = t.keyCode;
      return (
        "charCode" in t
          ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
          : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
      );
    }
    function xs() {
      return !0;
    }
    function ip() {
      return !1;
    }
    function de(t) {
      function e(n, a, s, r, f) {
        (this._reactName = n),
          (this._targetInst = s),
          (this.type = a),
          (this.nativeEvent = r),
          (this.target = f),
          (this.currentTarget = null);
        for (var y in t)
          t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(r) : r[y]));
        return (
          (this.isDefaultPrevented = (
            r.defaultPrevented != null
              ? r.defaultPrevented
              : r.returnValue === !1
          )
            ? xs
            : ip),
          (this.isPropagationStopped = ip),
          this
        );
      }
      return (
        x(e.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n &&
              (n.preventDefault
                ? n.preventDefault()
                : typeof n.returnValue != "unknown" && (n.returnValue = !1),
              (this.isDefaultPrevented = xs));
          },
          stopPropagation: function () {
            var n = this.nativeEvent;
            n &&
              (n.stopPropagation
                ? n.stopPropagation()
                : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
              (this.isPropagationStopped = xs));
          },
          persist: function () {},
          isPersistent: xs,
        }),
        e
      );
    }
    var oi = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
          return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      bs = de(oi),
      Za = x({}, oi, { view: 0, detail: 0 }),
      M2 = de(Za),
      gr,
      vr,
      Ka,
      Ss = x({}, Za, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: br,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
          return t.relatedTarget === void 0
            ? t.fromElement === t.srcElement
              ? t.toElement
              : t.fromElement
            : t.relatedTarget;
        },
        movementX: function (t) {
          return "movementX" in t
            ? t.movementX
            : (t !== Ka &&
                (Ka && t.type === "mousemove"
                  ? ((gr = t.screenX - Ka.screenX),
                    (vr = t.screenY - Ka.screenY))
                  : (vr = gr = 0),
                (Ka = t)),
              gr);
        },
        movementY: function (t) {
          return "movementY" in t ? t.movementY : vr;
        },
      }),
      ap = de(Ss),
      D2 = x({}, Ss, { dataTransfer: 0 }),
      C2 = de(D2),
      w2 = x({}, Za, { relatedTarget: 0 }),
      xr = de(w2),
      j2 = x({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      z2 = de(j2),
      R2 = x({}, oi, {
        clipboardData: function (t) {
          return "clipboardData" in t ? t.clipboardData : window.clipboardData;
        },
      }),
      N2 = de(R2),
      O2 = x({}, oi, { data: 0 }),
      lp = de(O2),
      V2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      _2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      B2 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function U2(t) {
      var e = this.nativeEvent;
      return e.getModifierState
        ? e.getModifierState(t)
        : (t = B2[t])
          ? !!e[t]
          : !1;
    }
    function br() {
      return U2;
    }
    var L2 = x({}, Za, {
        key: function (t) {
          if (t.key) {
            var e = V2[t.key] || t.key;
            if (e !== "Unidentified") return e;
          }
          return t.type === "keypress"
            ? ((t = vs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
            : t.type === "keydown" || t.type === "keyup"
              ? _2[t.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: br,
        charCode: function (t) {
          return t.type === "keypress" ? vs(t) : 0;
        },
        keyCode: function (t) {
          return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
        },
        which: function (t) {
          return t.type === "keypress"
            ? vs(t)
            : t.type === "keydown" || t.type === "keyup"
              ? t.keyCode
              : 0;
        },
      }),
      H2 = de(L2),
      q2 = x({}, Ss, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      sp = de(q2),
      Y2 = x({}, Za, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: br,
      }),
      G2 = de(Y2),
      X2 = x({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      k2 = de(X2),
      Z2 = x({}, Ss, {
        deltaX: function (t) {
          return "deltaX" in t
            ? t.deltaX
            : "wheelDeltaX" in t
              ? -t.wheelDeltaX
              : 0;
        },
        deltaY: function (t) {
          return "deltaY" in t
            ? t.deltaY
            : "wheelDeltaY" in t
              ? -t.wheelDeltaY
              : "wheelDelta" in t
                ? -t.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      K2 = de(Z2),
      Q2 = x({}, oi, { newState: 0, oldState: 0 }),
      J2 = de(Q2),
      F2 = [9, 13, 27, 32],
      Sr = un && "CompositionEvent" in window,
      Qa = null;
    un && "documentMode" in document && (Qa = document.documentMode);
    var W2 = un && "TextEvent" in window && !Qa,
      up = un && (!Sr || (Qa && 8 < Qa && 11 >= Qa)),
      op = " ",
      rp = !1;
    function cp(t, e) {
      switch (t) {
        case "keyup":
          return F2.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function fp(t) {
      return (
        (t = t.detail), typeof t == "object" && "data" in t ? t.data : null
      );
    }
    var Xi = !1;
    function P2(t, e) {
      switch (t) {
        case "compositionend":
          return fp(e);
        case "keypress":
          return e.which !== 32 ? null : ((rp = !0), op);
        case "textInput":
          return (t = e.data), t === op && rp ? null : t;
        default:
          return null;
      }
    }
    function $2(t, e) {
      if (Xi)
        return t === "compositionend" || (!Sr && cp(t, e))
          ? ((t = np()), (gs = yr = jn = null), (Xi = !1), t)
          : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(e.ctrlKey || e.altKey || e.metaKey) ||
            (e.ctrlKey && e.altKey)
          ) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return up && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var I2 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function hp(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!I2[t.type] : e === "textarea";
    }
    function dp(t, e, n, a) {
      Yi ? (Gi ? Gi.push(a) : (Gi = [a])) : (Yi = a),
        (e = cu(e, "onChange")),
        0 < e.length &&
          ((n = new bs("onChange", "change", null, n, a)),
          t.push({ event: n, listeners: e }));
    }
    var Ja = null,
      Fa = null;
    function tT(t) {
      Fg(t, 0);
    }
    function Ts(t) {
      var e = Ga(t);
      if (Jm(e)) return t;
    }
    function mp(t, e) {
      if (t === "change") return e;
    }
    var pp = !1;
    if (un) {
      var Tr;
      if (un) {
        var Ar = "oninput" in document;
        if (!Ar) {
          var yp = document.createElement("div");
          yp.setAttribute("oninput", "return;"),
            (Ar = typeof yp.oninput == "function");
        }
        Tr = Ar;
      } else Tr = !1;
      pp = Tr && (!document.documentMode || 9 < document.documentMode);
    }
    function gp() {
      Ja && (Ja.detachEvent("onpropertychange", vp), (Fa = Ja = null));
    }
    function vp(t) {
      if (t.propertyName === "value" && Ts(Fa)) {
        var e = [];
        dp(e, Fa, t, dr(t)), ep(tT, e);
      }
    }
    function eT(t, e, n) {
      t === "focusin"
        ? (gp(), (Ja = e), (Fa = n), Ja.attachEvent("onpropertychange", vp))
        : t === "focusout" && gp();
    }
    function nT(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Ts(Fa);
    }
    function iT(t, e) {
      if (t === "click") return Ts(e);
    }
    function aT(t, e) {
      if (t === "input" || t === "change") return Ts(e);
    }
    function lT(t, e) {
      return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
    }
    var Ae = typeof Object.is == "function" ? Object.is : lT;
    function Wa(t, e) {
      if (Ae(t, e)) return !0;
      if (
        typeof t != "object" ||
        t === null ||
        typeof e != "object" ||
        e === null
      )
        return !1;
      var n = Object.keys(t),
        a = Object.keys(e);
      if (n.length !== a.length) return !1;
      for (a = 0; a < n.length; a++) {
        var s = n[a];
        if (!tr.call(e, s) || !Ae(t[s], e[s])) return !1;
      }
      return !0;
    }
    function xp(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function bp(t, e) {
      var n = xp(t);
      t = 0;
      for (var a; n; ) {
        if (n.nodeType === 3) {
          if (((a = t + n.textContent.length), t <= e && a >= e))
            return { node: n, offset: e - t };
          t = a;
        }
        t: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break t;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = xp(n);
      }
    }
    function Sp(t, e) {
      return t && e
        ? t === e
          ? !0
          : t && t.nodeType === 3
            ? !1
            : e && e.nodeType === 3
              ? Sp(t, e.parentNode)
              : "contains" in t
                ? t.contains(e)
                : t.compareDocumentPosition
                  ? !!(t.compareDocumentPosition(e) & 16)
                  : !1
        : !1;
    }
    function Tp(t) {
      t =
        t != null &&
        t.ownerDocument != null &&
        t.ownerDocument.defaultView != null
          ? t.ownerDocument.defaultView
          : window;
      for (var e = ps(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var n = typeof e.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) t = e.contentWindow;
        else break;
        e = ps(t.document);
      }
      return e;
    }
    function Er(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return (
        e &&
        ((e === "input" &&
          (t.type === "text" ||
            t.type === "search" ||
            t.type === "tel" ||
            t.type === "url" ||
            t.type === "password")) ||
          e === "textarea" ||
          t.contentEditable === "true")
      );
    }
    var sT = un && "documentMode" in document && 11 >= document.documentMode,
      ki = null,
      Mr = null,
      Pa = null,
      Dr = !1;
    function Ap(t, e, n) {
      var a =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Dr ||
        ki == null ||
        ki !== ps(a) ||
        ((a = ki),
        "selectionStart" in a && Er(a)
          ? (a = { start: a.selectionStart, end: a.selectionEnd })
          : ((a = (
              (a.ownerDocument && a.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (a = {
              anchorNode: a.anchorNode,
              anchorOffset: a.anchorOffset,
              focusNode: a.focusNode,
              focusOffset: a.focusOffset,
            })),
        (Pa && Wa(Pa, a)) ||
          ((Pa = a),
          (a = cu(Mr, "onSelect")),
          0 < a.length &&
            ((e = new bs("onSelect", "select", null, e, n)),
            t.push({ event: e, listeners: a }),
            (e.target = ki))));
    }
    function ri(t, e) {
      var n = {};
      return (
        (n[t.toLowerCase()] = e.toLowerCase()),
        (n["Webkit" + t] = "webkit" + e),
        (n["Moz" + t] = "moz" + e),
        n
      );
    }
    var Zi = {
        animationend: ri("Animation", "AnimationEnd"),
        animationiteration: ri("Animation", "AnimationIteration"),
        animationstart: ri("Animation", "AnimationStart"),
        transitionrun: ri("Transition", "TransitionRun"),
        transitionstart: ri("Transition", "TransitionStart"),
        transitioncancel: ri("Transition", "TransitionCancel"),
        transitionend: ri("Transition", "TransitionEnd"),
      },
      Cr = {},
      Ep = {};
    un &&
      ((Ep = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Zi.animationend.animation,
        delete Zi.animationiteration.animation,
        delete Zi.animationstart.animation),
      "TransitionEvent" in window || delete Zi.transitionend.transition);
    function ci(t) {
      if (Cr[t]) return Cr[t];
      if (!Zi[t]) return t;
      var e = Zi[t],
        n;
      for (n in e) if (e.hasOwnProperty(n) && n in Ep) return (Cr[t] = e[n]);
      return t;
    }
    var Mp = ci("animationend"),
      Dp = ci("animationiteration"),
      Cp = ci("animationstart"),
      uT = ci("transitionrun"),
      oT = ci("transitionstart"),
      rT = ci("transitioncancel"),
      wp = ci("transitionend"),
      jp = new Map(),
      wr =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    wr.push("scrollEnd");
    function Ze(t, e) {
      jp.set(t, e), ui(e, [t]);
    }
    var As =
        typeof reportError == "function"
          ? reportError
          : function (t) {
              if (
                typeof window == "object" &&
                typeof window.ErrorEvent == "function"
              ) {
                var e = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof t == "object" &&
                    t !== null &&
                    typeof t.message == "string"
                      ? String(t.message)
                      : String(t),
                  error: t,
                });
                if (!window.dispatchEvent(e)) return;
              } else if (
                typeof process == "object" &&
                typeof process.emit == "function"
              ) {
                process.emit("uncaughtException", t);
                return;
              }
              console.error(t);
            },
      Ve = [],
      Ki = 0,
      jr = 0;
    function Es() {
      for (var t = Ki, e = (jr = Ki = 0); e < t; ) {
        var n = Ve[e];
        Ve[e++] = null;
        var a = Ve[e];
        Ve[e++] = null;
        var s = Ve[e];
        Ve[e++] = null;
        var r = Ve[e];
        if (((Ve[e++] = null), a !== null && s !== null)) {
          var f = a.pending;
          f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
            (a.pending = s);
        }
        r !== 0 && zp(n, s, r);
      }
    }
    function Ms(t, e, n, a) {
      (Ve[Ki++] = t),
        (Ve[Ki++] = e),
        (Ve[Ki++] = n),
        (Ve[Ki++] = a),
        (jr |= a),
        (t.lanes |= a),
        (t = t.alternate),
        t !== null && (t.lanes |= a);
    }
    function zr(t, e, n, a) {
      return Ms(t, e, n, a), Ds(t);
    }
    function fi(t, e) {
      return Ms(t, null, null, e), Ds(t);
    }
    function zp(t, e, n) {
      t.lanes |= n;
      var a = t.alternate;
      a !== null && (a.lanes |= n);
      for (var s = !1, r = t.return; r !== null; )
        (r.childLanes |= n),
          (a = r.alternate),
          a !== null && (a.childLanes |= n),
          r.tag === 22 &&
            ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
          (t = r),
          (r = r.return);
      return t.tag === 3
        ? ((r = t.stateNode),
          s &&
            e !== null &&
            ((s = 31 - Te(n)),
            (t = r.hiddenUpdates),
            (a = t[s]),
            a === null ? (t[s] = [e]) : a.push(e),
            (e.lane = n | 536870912)),
          r)
        : null;
    }
    function Ds(t) {
      if (50 < xl) throw ((xl = 0), (Hc = null), Error(o(185)));
      for (var e = t.return; e !== null; ) (t = e), (e = t.return);
      return t.tag === 3 ? t.stateNode : null;
    }
    var Qi = {};
    function cT(t, e, n, a) {
      (this.tag = t),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = e),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = a),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Ee(t, e, n, a) {
      return new cT(t, e, n, a);
    }
    function Rr(t) {
      return (t = t.prototype), !(!t || !t.isReactComponent);
    }
    function on(t, e) {
      var n = t.alternate;
      return (
        n === null
          ? ((n = Ee(t.tag, e, t.key, t.mode)),
            (n.elementType = t.elementType),
            (n.type = t.type),
            (n.stateNode = t.stateNode),
            (n.alternate = t),
            (t.alternate = n))
          : ((n.pendingProps = e),
            (n.type = t.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = t.flags & 65011712),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies =
          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        (n.refCleanup = t.refCleanup),
        n
      );
    }
    function Rp(t, e) {
      t.flags &= 65011714;
      var n = t.alternate;
      return (
        n === null
          ? ((t.childLanes = 0),
            (t.lanes = e),
            (t.child = null),
            (t.subtreeFlags = 0),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.dependencies = null),
            (t.stateNode = null))
          : ((t.childLanes = n.childLanes),
            (t.lanes = n.lanes),
            (t.child = n.child),
            (t.subtreeFlags = 0),
            (t.deletions = null),
            (t.memoizedProps = n.memoizedProps),
            (t.memoizedState = n.memoizedState),
            (t.updateQueue = n.updateQueue),
            (t.type = n.type),
            (e = n.dependencies),
            (t.dependencies =
              e === null
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext })),
        t
      );
    }
    function Cs(t, e, n, a, s, r) {
      var f = 0;
      if (((a = t), typeof t == "function")) Rr(t) && (f = 1);
      else if (typeof t == "string")
        f = pA(t, n, P.current)
          ? 26
          : t === "html" || t === "head" || t === "body"
            ? 27
            : 5;
      else
        t: switch (t) {
          case at:
            return (
              (t = Ee(31, n, e, s)), (t.elementType = at), (t.lanes = r), t
            );
          case _:
            return hi(n.children, s, r, e);
          case U:
            (f = 8), (s |= 24);
            break;
          case H:
            return (
              (t = Ee(12, n, e, s | 2)), (t.elementType = H), (t.lanes = r), t
            );
          case et:
            return (
              (t = Ee(13, n, e, s)), (t.elementType = et), (t.lanes = r), t
            );
          case it:
            return (
              (t = Ee(19, n, e, s)), (t.elementType = it), (t.lanes = r), t
            );
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case q:
                  f = 10;
                  break t;
                case X:
                  f = 9;
                  break t;
                case G:
                  f = 11;
                  break t;
                case K:
                  f = 14;
                  break t;
                case Q:
                  (f = 16), (a = null);
                  break t;
              }
            (f = 29),
              (n = Error(o(130, t === null ? "null" : typeof t, ""))),
              (a = null);
        }
      return (
        (e = Ee(f, n, e, s)),
        (e.elementType = t),
        (e.type = a),
        (e.lanes = r),
        e
      );
    }
    function hi(t, e, n, a) {
      return (t = Ee(7, t, a, e)), (t.lanes = n), t;
    }
    function Nr(t, e, n) {
      return (t = Ee(6, t, null, e)), (t.lanes = n), t;
    }
    function Np(t) {
      var e = Ee(18, null, null, 0);
      return (e.stateNode = t), e;
    }
    function Or(t, e, n) {
      return (
        (e = Ee(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = n),
        (e.stateNode = {
          containerInfo: t.containerInfo,
          pendingChildren: null,
          implementation: t.implementation,
        }),
        e
      );
    }
    var Op = new WeakMap();
    function _e(t, e) {
      if (typeof t == "object" && t !== null) {
        var n = Op.get(t);
        return n !== void 0
          ? n
          : ((e = { value: t, source: e, stack: Nm(e) }), Op.set(t, e), e);
      }
      return { value: t, source: e, stack: Nm(e) };
    }
    var Ji = [],
      Fi = 0,
      ws = null,
      $a = 0,
      Be = [],
      Ue = 0,
      zn = null,
      Ie = 1,
      tn = "";
    function rn(t, e) {
      (Ji[Fi++] = $a), (Ji[Fi++] = ws), (ws = t), ($a = e);
    }
    function Vp(t, e, n) {
      (Be[Ue++] = Ie), (Be[Ue++] = tn), (Be[Ue++] = zn), (zn = t);
      var a = Ie;
      t = tn;
      var s = 32 - Te(a) - 1;
      (a &= ~(1 << s)), (n += 1);
      var r = 32 - Te(e) + s;
      if (30 < r) {
        var f = s - (s % 5);
        (r = (a & ((1 << f) - 1)).toString(32)),
          (a >>= f),
          (s -= f),
          (Ie = (1 << (32 - Te(e) + s)) | (n << s) | a),
          (tn = r + t);
      } else (Ie = (1 << r) | (n << s) | a), (tn = t);
    }
    function Vr(t) {
      t.return !== null && (rn(t, 1), Vp(t, 1, 0));
    }
    function _r(t) {
      for (; t === ws; )
        (ws = Ji[--Fi]), (Ji[Fi] = null), ($a = Ji[--Fi]), (Ji[Fi] = null);
      for (; t === zn; )
        (zn = Be[--Ue]),
          (Be[Ue] = null),
          (tn = Be[--Ue]),
          (Be[Ue] = null),
          (Ie = Be[--Ue]),
          (Be[Ue] = null);
    }
    function _p(t, e) {
      (Be[Ue++] = Ie),
        (Be[Ue++] = tn),
        (Be[Ue++] = zn),
        (Ie = e.id),
        (tn = e.overflow),
        (zn = t);
    }
    var ie = null,
      Rt = null,
      gt = !1,
      Rn = null,
      Le = !1,
      Br = Error(o(519));
    function Nn(t) {
      var e = Error(
        o(
          418,
          1 < arguments.length && arguments[1] !== void 0 && arguments[1]
            ? "text"
            : "HTML",
          "",
        ),
      );
      throw (Ia(_e(e, t)), Br);
    }
    function Bp(t) {
      var e = t.stateNode,
        n = t.type,
        a = t.memoizedProps;
      switch (((e[ne] = t), (e[he] = a), n)) {
        case "dialog":
          ht("cancel", e), ht("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ht("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Sl.length; n++) ht(Sl[n], e);
          break;
        case "source":
          ht("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ht("error", e), ht("load", e);
          break;
        case "details":
          ht("toggle", e);
          break;
        case "input":
          ht("invalid", e),
            Fm(
              e,
              a.value,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
              !0,
            );
          break;
        case "select":
          ht("invalid", e);
          break;
        case "textarea":
          ht("invalid", e), Pm(e, a.value, a.defaultValue, a.children);
      }
      (n = a.children),
        (typeof n != "string" &&
          typeof n != "number" &&
          typeof n != "bigint") ||
        e.textContent === "" + n ||
        a.suppressHydrationWarning === !0 ||
        Ig(e.textContent, n)
          ? (a.popover != null && (ht("beforetoggle", e), ht("toggle", e)),
            a.onScroll != null && ht("scroll", e),
            a.onScrollEnd != null && ht("scrollend", e),
            a.onClick != null && (e.onclick = sn),
            (e = !0))
          : (e = !1),
        e || Nn(t, !0);
    }
    function Up(t) {
      for (ie = t.return; ie; )
        switch (ie.tag) {
          case 5:
          case 31:
          case 13:
            Le = !1;
            return;
          case 27:
          case 3:
            Le = !0;
            return;
          default:
            ie = ie.return;
        }
    }
    function Wi(t) {
      if (t !== ie) return !1;
      if (!gt) return Up(t), (gt = !0), !1;
      var e = t.tag,
        n;
      if (
        ((n = e !== 3 && e !== 27) &&
          ((n = e === 5) &&
            ((n = t.type),
            (n =
              !(n !== "form" && n !== "button") ||
              tf(t.type, t.memoizedProps))),
          (n = !n)),
        n && Rt && Nn(t),
        Up(t),
        e === 13)
      ) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
          throw Error(o(317));
        Rt = o0(t);
      } else if (e === 31) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
          throw Error(o(317));
        Rt = o0(t);
      } else
        e === 27
          ? ((e = Rt),
            Kn(t.type) ? ((t = sf), (sf = null), (Rt = t)) : (Rt = e))
          : (Rt = ie ? qe(t.stateNode.nextSibling) : null);
      return !0;
    }
    function di() {
      (Rt = ie = null), (gt = !1);
    }
    function Ur() {
      var t = Rn;
      return (
        t !== null &&
          (ge === null ? (ge = t) : ge.push.apply(ge, t), (Rn = null)),
        t
      );
    }
    function Ia(t) {
      Rn === null ? (Rn = [t]) : Rn.push(t);
    }
    var Lr = E(null),
      mi = null,
      cn = null;
    function On(t, e, n) {
      Z(Lr, e._currentValue), (e._currentValue = n);
    }
    function fn(t) {
      (t._currentValue = Lr.current), L(Lr);
    }
    function Hr(t, e, n) {
      for (; t !== null; ) {
        var a = t.alternate;
        if (
          ((t.childLanes & e) !== e
            ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
            : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
          t === n)
        )
          break;
        t = t.return;
      }
    }
    function qr(t, e, n, a) {
      var s = t.child;
      for (s !== null && (s.return = t); s !== null; ) {
        var r = s.dependencies;
        if (r !== null) {
          var f = s.child;
          r = r.firstContext;
          t: for (; r !== null; ) {
            var y = r;
            r = s;
            for (var S = 0; S < e.length; S++)
              if (y.context === e[S]) {
                (r.lanes |= n),
                  (y = r.alternate),
                  y !== null && (y.lanes |= n),
                  Hr(r.return, n, t),
                  a || (f = null);
                break t;
              }
            r = y.next;
          }
        } else if (s.tag === 18) {
          if (((f = s.return), f === null)) throw Error(o(341));
          (f.lanes |= n),
            (r = f.alternate),
            r !== null && (r.lanes |= n),
            Hr(f, n, t),
            (f = null);
        } else f = s.child;
        if (f !== null) f.return = s;
        else
          for (f = s; f !== null; ) {
            if (f === t) {
              f = null;
              break;
            }
            if (((s = f.sibling), s !== null)) {
              (s.return = f.return), (f = s);
              break;
            }
            f = f.return;
          }
        s = f;
      }
    }
    function Pi(t, e, n, a) {
      t = null;
      for (var s = e, r = !1; s !== null; ) {
        if (!r) {
          if ((s.flags & 524288) !== 0) r = !0;
          else if ((s.flags & 262144) !== 0) break;
        }
        if (s.tag === 10) {
          var f = s.alternate;
          if (f === null) throw Error(o(387));
          if (((f = f.memoizedProps), f !== null)) {
            var y = s.type;
            Ae(s.pendingProps.value, f.value) ||
              (t !== null ? t.push(y) : (t = [y]));
          }
        } else if (s === Tt.current) {
          if (((f = s.alternate), f === null)) throw Error(o(387));
          f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
            (t !== null ? t.push(Dl) : (t = [Dl]));
        }
        s = s.return;
      }
      t !== null && qr(e, t, n, a), (e.flags |= 262144);
    }
    function js(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
        t = t.next;
      }
      return !1;
    }
    function pi(t) {
      (mi = t),
        (cn = null),
        (t = t.dependencies),
        t !== null && (t.firstContext = null);
    }
    function ae(t) {
      return Lp(mi, t);
    }
    function zs(t, e) {
      return mi === null && pi(t), Lp(t, e);
    }
    function Lp(t, e) {
      var n = e._currentValue;
      if (((e = { context: e, memoizedValue: n, next: null }), cn === null)) {
        if (t === null) throw Error(o(308));
        (cn = e),
          (t.dependencies = { lanes: 0, firstContext: e }),
          (t.flags |= 524288);
      } else cn = cn.next = e;
      return n;
    }
    var fT =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var t = [],
                e = (this.signal = {
                  aborted: !1,
                  addEventListener: function (n, a) {
                    t.push(a);
                  },
                });
              this.abort = function () {
                (e.aborted = !0),
                  t.forEach(function (n) {
                    return n();
                  });
              };
            },
      hT = i.unstable_scheduleCallback,
      dT = i.unstable_NormalPriority,
      Zt = {
        $$typeof: q,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Yr() {
      return { controller: new fT(), data: new Map(), refCount: 0 };
    }
    function tl(t) {
      t.refCount--,
        t.refCount === 0 &&
          hT(dT, function () {
            t.controller.abort();
          });
    }
    var el = null,
      Gr = 0,
      $i = 0,
      Ii = null;
    function mT(t, e) {
      if (el === null) {
        var n = (el = []);
        (Gr = 0),
          ($i = Zc()),
          (Ii = {
            status: "pending",
            value: void 0,
            then: function (a) {
              n.push(a);
            },
          });
      }
      return Gr++, e.then(Hp, Hp), e;
    }
    function Hp() {
      if (--Gr === 0 && el !== null) {
        Ii !== null && (Ii.status = "fulfilled");
        var t = el;
        (el = null), ($i = 0), (Ii = null);
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function pT(t, e) {
      var n = [],
        a = {
          status: "pending",
          value: null,
          reason: null,
          then: function (s) {
            n.push(s);
          },
        };
      return (
        t.then(
          function () {
            (a.status = "fulfilled"), (a.value = e);
            for (var s = 0; s < n.length; s++) (0, n[s])(e);
          },
          function (s) {
            for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
              (0, n[s])(void 0);
          },
        ),
        a
      );
    }
    var qp = R.S;
    R.S = function (t, e) {
      (Ag = be()),
        typeof e == "object" &&
          e !== null &&
          typeof e.then == "function" &&
          mT(t, e),
        qp !== null && qp(t, e);
    };
    var yi = E(null);
    function Xr() {
      var t = yi.current;
      return t !== null ? t : zt.pooledCache;
    }
    function Rs(t, e) {
      e === null ? Z(yi, yi.current) : Z(yi, e.pool);
    }
    function Yp() {
      var t = Xr();
      return t === null ? null : { parent: Zt._currentValue, pool: t };
    }
    var ta = Error(o(460)),
      kr = Error(o(474)),
      Ns = Error(o(542)),
      Os = { then: function () {} };
    function Gp(t) {
      return (t = t.status), t === "fulfilled" || t === "rejected";
    }
    function Xp(t, e, n) {
      switch (
        ((n = t[n]),
        n === void 0 ? t.push(e) : n !== e && (e.then(sn, sn), (e = n)),
        e.status)
      ) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw ((t = e.reason), Zp(t), t);
        default:
          if (typeof e.status == "string") e.then(sn, sn);
          else {
            if (((t = zt), t !== null && 100 < t.shellSuspendCounter))
              throw Error(o(482));
            (t = e),
              (t.status = "pending"),
              t.then(
                function (a) {
                  if (e.status === "pending") {
                    var s = e;
                    (s.status = "fulfilled"), (s.value = a);
                  }
                },
                function (a) {
                  if (e.status === "pending") {
                    var s = e;
                    (s.status = "rejected"), (s.reason = a);
                  }
                },
              );
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw ((t = e.reason), Zp(t), t);
          }
          throw ((vi = e), ta);
      }
    }
    function gi(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (n) {
        throw n !== null && typeof n == "object" && typeof n.then == "function"
          ? ((vi = n), ta)
          : n;
      }
    }
    var vi = null;
    function kp() {
      if (vi === null) throw Error(o(459));
      var t = vi;
      return (vi = null), t;
    }
    function Zp(t) {
      if (t === ta || t === Ns) throw Error(o(483));
    }
    var ea = null,
      nl = 0;
    function Vs(t) {
      var e = nl;
      return (nl += 1), ea === null && (ea = []), Xp(ea, t, e);
    }
    function il(t, e) {
      (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
    }
    function _s(t, e) {
      throw e.$$typeof === T
        ? Error(o(525))
        : ((t = Object.prototype.toString.call(e)),
          Error(
            o(
              31,
              t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t,
            ),
          ));
    }
    function Kp(t) {
      function e(M, A) {
        if (t) {
          var D = M.deletions;
          D === null ? ((M.deletions = [A]), (M.flags |= 16)) : D.push(A);
        }
      }
      function n(M, A) {
        if (!t) return null;
        for (; A !== null; ) e(M, A), (A = A.sibling);
        return null;
      }
      function a(M) {
        for (var A = new Map(); M !== null; )
          M.key !== null ? A.set(M.key, M) : A.set(M.index, M), (M = M.sibling);
        return A;
      }
      function s(M, A) {
        return (M = on(M, A)), (M.index = 0), (M.sibling = null), M;
      }
      function r(M, A, D) {
        return (
          (M.index = D),
          t
            ? ((D = M.alternate),
              D !== null
                ? ((D = D.index), D < A ? ((M.flags |= 67108866), A) : D)
                : ((M.flags |= 67108866), A))
            : ((M.flags |= 1048576), A)
        );
      }
      function f(M) {
        return t && M.alternate === null && (M.flags |= 67108866), M;
      }
      function y(M, A, D, V) {
        return A === null || A.tag !== 6
          ? ((A = Nr(D, M.mode, V)), (A.return = M), A)
          : ((A = s(A, D)), (A.return = M), A);
      }
      function S(M, A, D, V) {
        var tt = D.type;
        return tt === _
          ? O(M, A, D.props.children, V, D.key)
          : A !== null &&
              (A.elementType === tt ||
                (typeof tt == "object" &&
                  tt !== null &&
                  tt.$$typeof === Q &&
                  gi(tt) === A.type))
            ? ((A = s(A, D.props)), il(A, D), (A.return = M), A)
            : ((A = Cs(D.type, D.key, D.props, null, M.mode, V)),
              il(A, D),
              (A.return = M),
              A);
      }
      function C(M, A, D, V) {
        return A === null ||
          A.tag !== 4 ||
          A.stateNode.containerInfo !== D.containerInfo ||
          A.stateNode.implementation !== D.implementation
          ? ((A = Or(D, M.mode, V)), (A.return = M), A)
          : ((A = s(A, D.children || [])), (A.return = M), A);
      }
      function O(M, A, D, V, tt) {
        return A === null || A.tag !== 7
          ? ((A = hi(D, M.mode, V, tt)), (A.return = M), A)
          : ((A = s(A, D)), (A.return = M), A);
      }
      function B(M, A, D) {
        if (
          (typeof A == "string" && A !== "") ||
          typeof A == "number" ||
          typeof A == "bigint"
        )
          return (A = Nr("" + A, M.mode, D)), (A.return = M), A;
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case N:
              return (
                (D = Cs(A.type, A.key, A.props, null, M.mode, D)),
                il(D, A),
                (D.return = M),
                D
              );
            case j:
              return (A = Or(A, M.mode, D)), (A.return = M), A;
            case Q:
              return (A = gi(A)), B(M, A, D);
          }
          if (Lt(A) || vt(A))
            return (A = hi(A, M.mode, D, null)), (A.return = M), A;
          if (typeof A.then == "function") return B(M, Vs(A), D);
          if (A.$$typeof === q) return B(M, zs(M, A), D);
          _s(M, A);
        }
        return null;
      }
      function w(M, A, D, V) {
        var tt = A !== null ? A.key : null;
        if (
          (typeof D == "string" && D !== "") ||
          typeof D == "number" ||
          typeof D == "bigint"
        )
          return tt !== null ? null : y(M, A, "" + D, V);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case N:
              return D.key === tt ? S(M, A, D, V) : null;
            case j:
              return D.key === tt ? C(M, A, D, V) : null;
            case Q:
              return (D = gi(D)), w(M, A, D, V);
          }
          if (Lt(D) || vt(D)) return tt !== null ? null : O(M, A, D, V, null);
          if (typeof D.then == "function") return w(M, A, Vs(D), V);
          if (D.$$typeof === q) return w(M, A, zs(M, D), V);
          _s(M, D);
        }
        return null;
      }
      function z(M, A, D, V, tt) {
        if (
          (typeof V == "string" && V !== "") ||
          typeof V == "number" ||
          typeof V == "bigint"
        )
          return (M = M.get(D) || null), y(A, M, "" + V, tt);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case N:
              return (
                (M = M.get(V.key === null ? D : V.key) || null), S(A, M, V, tt)
              );
            case j:
              return (
                (M = M.get(V.key === null ? D : V.key) || null), C(A, M, V, tt)
              );
            case Q:
              return (V = gi(V)), z(M, A, D, V, tt);
          }
          if (Lt(V) || vt(V))
            return (M = M.get(D) || null), O(A, M, V, tt, null);
          if (typeof V.then == "function") return z(M, A, D, Vs(V), tt);
          if (V.$$typeof === q) return z(M, A, D, zs(A, V), tt);
          _s(A, V);
        }
        return null;
      }
      function F(M, A, D, V) {
        for (
          var tt = null, xt = null, $ = A, rt = (A = 0), mt = null;
          $ !== null && rt < D.length;
          rt++
        ) {
          $.index > rt ? ((mt = $), ($ = null)) : (mt = $.sibling);
          var bt = w(M, $, D[rt], V);
          if (bt === null) {
            $ === null && ($ = mt);
            break;
          }
          t && $ && bt.alternate === null && e(M, $),
            (A = r(bt, A, rt)),
            xt === null ? (tt = bt) : (xt.sibling = bt),
            (xt = bt),
            ($ = mt);
        }
        if (rt === D.length) return n(M, $), gt && rn(M, rt), tt;
        if ($ === null) {
          for (; rt < D.length; rt++)
            ($ = B(M, D[rt], V)),
              $ !== null &&
                ((A = r($, A, rt)),
                xt === null ? (tt = $) : (xt.sibling = $),
                (xt = $));
          return gt && rn(M, rt), tt;
        }
        for ($ = a($); rt < D.length; rt++)
          (mt = z($, M, rt, D[rt], V)),
            mt !== null &&
              (t &&
                mt.alternate !== null &&
                $.delete(mt.key === null ? rt : mt.key),
              (A = r(mt, A, rt)),
              xt === null ? (tt = mt) : (xt.sibling = mt),
              (xt = mt));
        return (
          t &&
            $.forEach(function (Pn) {
              return e(M, Pn);
            }),
          gt && rn(M, rt),
          tt
        );
      }
      function nt(M, A, D, V) {
        if (D == null) throw Error(o(151));
        for (
          var tt = null,
            xt = null,
            $ = A,
            rt = (A = 0),
            mt = null,
            bt = D.next();
          $ !== null && !bt.done;
          rt++, bt = D.next()
        ) {
          $.index > rt ? ((mt = $), ($ = null)) : (mt = $.sibling);
          var Pn = w(M, $, bt.value, V);
          if (Pn === null) {
            $ === null && ($ = mt);
            break;
          }
          t && $ && Pn.alternate === null && e(M, $),
            (A = r(Pn, A, rt)),
            xt === null ? (tt = Pn) : (xt.sibling = Pn),
            (xt = Pn),
            ($ = mt);
        }
        if (bt.done) return n(M, $), gt && rn(M, rt), tt;
        if ($ === null) {
          for (; !bt.done; rt++, bt = D.next())
            (bt = B(M, bt.value, V)),
              bt !== null &&
                ((A = r(bt, A, rt)),
                xt === null ? (tt = bt) : (xt.sibling = bt),
                (xt = bt));
          return gt && rn(M, rt), tt;
        }
        for ($ = a($); !bt.done; rt++, bt = D.next())
          (bt = z($, M, rt, bt.value, V)),
            bt !== null &&
              (t &&
                bt.alternate !== null &&
                $.delete(bt.key === null ? rt : bt.key),
              (A = r(bt, A, rt)),
              xt === null ? (tt = bt) : (xt.sibling = bt),
              (xt = bt));
        return (
          t &&
            $.forEach(function (DA) {
              return e(M, DA);
            }),
          gt && rn(M, rt),
          tt
        );
      }
      function Ct(M, A, D, V) {
        if (
          (typeof D == "object" &&
            D !== null &&
            D.type === _ &&
            D.key === null &&
            (D = D.props.children),
          typeof D == "object" && D !== null)
        ) {
          switch (D.$$typeof) {
            case N:
              t: {
                for (var tt = D.key; A !== null; ) {
                  if (A.key === tt) {
                    if (((tt = D.type), tt === _)) {
                      if (A.tag === 7) {
                        n(M, A.sibling),
                          (V = s(A, D.props.children)),
                          (V.return = M),
                          (M = V);
                        break t;
                      }
                    } else if (
                      A.elementType === tt ||
                      (typeof tt == "object" &&
                        tt !== null &&
                        tt.$$typeof === Q &&
                        gi(tt) === A.type)
                    ) {
                      n(M, A.sibling),
                        (V = s(A, D.props)),
                        il(V, D),
                        (V.return = M),
                        (M = V);
                      break t;
                    }
                    n(M, A);
                    break;
                  } else e(M, A);
                  A = A.sibling;
                }
                D.type === _
                  ? ((V = hi(D.props.children, M.mode, V, D.key)),
                    (V.return = M),
                    (M = V))
                  : ((V = Cs(D.type, D.key, D.props, null, M.mode, V)),
                    il(V, D),
                    (V.return = M),
                    (M = V));
              }
              return f(M);
            case j:
              t: {
                for (tt = D.key; A !== null; ) {
                  if (A.key === tt)
                    if (
                      A.tag === 4 &&
                      A.stateNode.containerInfo === D.containerInfo &&
                      A.stateNode.implementation === D.implementation
                    ) {
                      n(M, A.sibling),
                        (V = s(A, D.children || [])),
                        (V.return = M),
                        (M = V);
                      break t;
                    } else {
                      n(M, A);
                      break;
                    }
                  else e(M, A);
                  A = A.sibling;
                }
                (V = Or(D, M.mode, V)), (V.return = M), (M = V);
              }
              return f(M);
            case Q:
              return (D = gi(D)), Ct(M, A, D, V);
          }
          if (Lt(D)) return F(M, A, D, V);
          if (vt(D)) {
            if (((tt = vt(D)), typeof tt != "function")) throw Error(o(150));
            return (D = tt.call(D)), nt(M, A, D, V);
          }
          if (typeof D.then == "function") return Ct(M, A, Vs(D), V);
          if (D.$$typeof === q) return Ct(M, A, zs(M, D), V);
          _s(M, D);
        }
        return (typeof D == "string" && D !== "") ||
          typeof D == "number" ||
          typeof D == "bigint"
          ? ((D = "" + D),
            A !== null && A.tag === 6
              ? (n(M, A.sibling), (V = s(A, D)), (V.return = M), (M = V))
              : (n(M, A), (V = Nr(D, M.mode, V)), (V.return = M), (M = V)),
            f(M))
          : n(M, A);
      }
      return function (M, A, D, V) {
        try {
          nl = 0;
          var tt = Ct(M, A, D, V);
          return (ea = null), tt;
        } catch ($) {
          if ($ === ta || $ === Ns) throw $;
          var xt = Ee(29, $, null, M.mode);
          return (xt.lanes = V), (xt.return = M), xt;
        }
      };
    }
    var xi = Kp(!0),
      Qp = Kp(!1),
      Vn = !1;
    function Zr(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Kr(t, e) {
      (t = t.updateQueue),
        e.updateQueue === t &&
          (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null,
          });
    }
    function _n(t) {
      return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function Bn(t, e, n) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (((a = a.shared), (St & 2) !== 0)) {
        var s = a.pending;
        return (
          s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
          (a.pending = e),
          (e = Ds(t)),
          zp(t, null, n),
          e
        );
      }
      return Ms(t, a, e, n), Ds(t);
    }
    function al(t, e, n) {
      if (
        ((e = e.updateQueue),
        e !== null && ((e = e.shared), (n & 4194048) !== 0))
      ) {
        var a = e.lanes;
        (a &= t.pendingLanes), (n |= a), (e.lanes = n), Lm(t, n);
      }
    }
    function Qr(t, e) {
      var n = t.updateQueue,
        a = t.alternate;
      if (a !== null && ((a = a.updateQueue), n === a)) {
        var s = null,
          r = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var f = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            r === null ? (s = r = f) : (r = r.next = f), (n = n.next);
          } while (n !== null);
          r === null ? (s = r = e) : (r = r.next = e);
        } else s = r = e;
        (n = {
          baseState: a.baseState,
          firstBaseUpdate: s,
          lastBaseUpdate: r,
          shared: a.shared,
          callbacks: a.callbacks,
        }),
          (t.updateQueue = n);
        return;
      }
      (t = n.lastBaseUpdate),
        t === null ? (n.firstBaseUpdate = e) : (t.next = e),
        (n.lastBaseUpdate = e);
    }
    var Jr = !1;
    function ll() {
      if (Jr) {
        var t = Ii;
        if (t !== null) throw t;
      }
    }
    function sl(t, e, n, a) {
      Jr = !1;
      var s = t.updateQueue;
      Vn = !1;
      var r = s.firstBaseUpdate,
        f = s.lastBaseUpdate,
        y = s.shared.pending;
      if (y !== null) {
        s.shared.pending = null;
        var S = y,
          C = S.next;
        (S.next = null), f === null ? (r = C) : (f.next = C), (f = S);
        var O = t.alternate;
        O !== null &&
          ((O = O.updateQueue),
          (y = O.lastBaseUpdate),
          y !== f &&
            (y === null ? (O.firstBaseUpdate = C) : (y.next = C),
            (O.lastBaseUpdate = S)));
      }
      if (r !== null) {
        var B = s.baseState;
        (f = 0), (O = C = S = null), (y = r);
        do {
          var w = y.lane & -536870913,
            z = w !== y.lane;
          if (z ? (dt & w) === w : (a & w) === w) {
            w !== 0 && w === $i && (Jr = !0),
              O !== null &&
                (O = O.next =
                  {
                    lane: 0,
                    tag: y.tag,
                    payload: y.payload,
                    callback: null,
                    next: null,
                  });
            t: {
              var F = t,
                nt = y;
              w = e;
              var Ct = n;
              switch (nt.tag) {
                case 1:
                  if (((F = nt.payload), typeof F == "function")) {
                    B = F.call(Ct, B, w);
                    break t;
                  }
                  B = F;
                  break t;
                case 3:
                  F.flags = (F.flags & -65537) | 128;
                case 0:
                  if (
                    ((F = nt.payload),
                    (w = typeof F == "function" ? F.call(Ct, B, w) : F),
                    w == null)
                  )
                    break t;
                  B = x({}, B, w);
                  break t;
                case 2:
                  Vn = !0;
              }
            }
            (w = y.callback),
              w !== null &&
                ((t.flags |= 64),
                z && (t.flags |= 8192),
                (z = s.callbacks),
                z === null ? (s.callbacks = [w]) : z.push(w));
          } else
            (z = {
              lane: w,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null,
            }),
              O === null ? ((C = O = z), (S = B)) : (O = O.next = z),
              (f |= w);
          if (((y = y.next), y === null)) {
            if (((y = s.shared.pending), y === null)) break;
            (z = y),
              (y = z.next),
              (z.next = null),
              (s.lastBaseUpdate = z),
              (s.shared.pending = null);
          }
        } while (!0);
        O === null && (S = B),
          (s.baseState = S),
          (s.firstBaseUpdate = C),
          (s.lastBaseUpdate = O),
          r === null && (s.shared.lanes = 0),
          (Yn |= f),
          (t.lanes = f),
          (t.memoizedState = B);
      }
    }
    function Jp(t, e) {
      if (typeof t != "function") throw Error(o(191, t));
      t.call(e);
    }
    function Fp(t, e) {
      var n = t.callbacks;
      if (n !== null)
        for (t.callbacks = null, t = 0; t < n.length; t++) Jp(n[t], e);
    }
    var na = E(null),
      Bs = E(0);
    function Wp(t, e) {
      (t = bn), Z(Bs, t), Z(na, e), (bn = t | e.baseLanes);
    }
    function Fr() {
      Z(Bs, bn), Z(na, na.current);
    }
    function Wr() {
      (bn = Bs.current), L(na), L(Bs);
    }
    var Me = E(null),
      He = null;
    function Un(t) {
      var e = t.alternate;
      Z(qt, qt.current & 1),
        Z(Me, t),
        He === null &&
          (e === null || na.current !== null || e.memoizedState !== null) &&
          (He = t);
    }
    function Pr(t) {
      Z(qt, qt.current), Z(Me, t), He === null && (He = t);
    }
    function Pp(t) {
      t.tag === 22
        ? (Z(qt, qt.current), Z(Me, t), He === null && (He = t))
        : Ln();
    }
    function Ln() {
      Z(qt, qt.current), Z(Me, Me.current);
    }
    function De(t) {
      L(Me), He === t && (He = null), L(qt);
    }
    var qt = E(0);
    function Us(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var n = e.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || lf(n)))
            return e;
        } else if (
          e.tag === 19 &&
          (e.memoizedProps.revealOrder === "forwards" ||
            e.memoizedProps.revealOrder === "backwards" ||
            e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
            e.memoizedProps.revealOrder === "together")
        ) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
      return null;
    }
    var hn = 0,
      ut = null,
      Mt = null,
      Kt = null,
      Ls = !1,
      ia = !1,
      bi = !1,
      Hs = 0,
      ul = 0,
      aa = null,
      yT = 0;
    function Bt() {
      throw Error(o(321));
    }
    function $r(t, e) {
      if (e === null) return !1;
      for (var n = 0; n < e.length && n < t.length; n++)
        if (!Ae(t[n], e[n])) return !1;
      return !0;
    }
    function Ir(t, e, n, a, s, r) {
      return (
        (hn = r),
        (ut = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (R.H = t === null || t.memoizedState === null ? Vy : mc),
        (bi = !1),
        (r = n(a, s)),
        (bi = !1),
        ia && (r = Ip(e, n, a, s)),
        $p(t),
        r
      );
    }
    function $p(t) {
      R.H = cl;
      var e = Mt !== null && Mt.next !== null;
      if (
        ((hn = 0), (Kt = Mt = ut = null), (Ls = !1), (ul = 0), (aa = null), e)
      )
        throw Error(o(300));
      t === null ||
        Qt ||
        ((t = t.dependencies), t !== null && js(t) && (Qt = !0));
    }
    function Ip(t, e, n, a) {
      ut = t;
      var s = 0;
      do {
        if ((ia && (aa = null), (ul = 0), (ia = !1), 25 <= s))
          throw Error(o(301));
        if (((s += 1), (Kt = Mt = null), t.updateQueue != null)) {
          var r = t.updateQueue;
          (r.lastEffect = null),
            (r.events = null),
            (r.stores = null),
            r.memoCache != null && (r.memoCache.index = 0);
        }
        (R.H = _y), (r = e(n, a));
      } while (ia);
      return r;
    }
    function gT() {
      var t = R.H,
        e = t.useState()[0];
      return (
        (e = typeof e.then == "function" ? ol(e) : e),
        (t = t.useState()[0]),
        (Mt !== null ? Mt.memoizedState : null) !== t && (ut.flags |= 1024),
        e
      );
    }
    function tc() {
      var t = Hs !== 0;
      return (Hs = 0), t;
    }
    function ec(t, e, n) {
      (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
    }
    function nc(t) {
      if (Ls) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), (t = t.next);
        }
        Ls = !1;
      }
      (hn = 0), (Kt = Mt = ut = null), (ia = !1), (ul = Hs = 0), (aa = null);
    }
    function fe() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return Kt === null ? (ut.memoizedState = Kt = t) : (Kt = Kt.next = t), Kt;
    }
    function Yt() {
      if (Mt === null) {
        var t = ut.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Mt.next;
      var e = Kt === null ? ut.memoizedState : Kt.next;
      if (e !== null) (Kt = e), (Mt = t);
      else {
        if (t === null)
          throw ut.alternate === null ? Error(o(467)) : Error(o(310));
        (Mt = t),
          (t = {
            memoizedState: Mt.memoizedState,
            baseState: Mt.baseState,
            baseQueue: Mt.baseQueue,
            queue: Mt.queue,
            next: null,
          }),
          Kt === null ? (ut.memoizedState = Kt = t) : (Kt = Kt.next = t);
      }
      return Kt;
    }
    function qs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ol(t) {
      var e = ul;
      return (
        (ul += 1),
        aa === null && (aa = []),
        (t = Xp(aa, t, e)),
        (e = ut),
        (Kt === null ? e.memoizedState : Kt.next) === null &&
          ((e = e.alternate),
          (R.H = e === null || e.memoizedState === null ? Vy : mc)),
        t
      );
    }
    function Ys(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return ol(t);
        if (t.$$typeof === q) return ae(t);
      }
      throw Error(o(438, String(t)));
    }
    function ic(t) {
      var e = null,
        n = ut.updateQueue;
      if ((n !== null && (e = n.memoCache), e == null)) {
        var a = ut.alternate;
        a !== null &&
          ((a = a.updateQueue),
          a !== null &&
            ((a = a.memoCache),
            a != null &&
              (e = {
                data: a.data.map(function (s) {
                  return s.slice();
                }),
                index: 0,
              })));
      }
      if (
        (e == null && (e = { data: [], index: 0 }),
        n === null && ((n = qs()), (ut.updateQueue = n)),
        (n.memoCache = e),
        (n = e.data[e.index]),
        n === void 0)
      )
        for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = I;
      return e.index++, n;
    }
    function dn(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Gs(t) {
      var e = Yt();
      return ac(e, Mt, t);
    }
    function ac(t, e, n) {
      var a = t.queue;
      if (a === null) throw Error(o(311));
      a.lastRenderedReducer = n;
      var s = t.baseQueue,
        r = a.pending;
      if (r !== null) {
        if (s !== null) {
          var f = s.next;
          (s.next = r.next), (r.next = f);
        }
        (e.baseQueue = s = r), (a.pending = null);
      }
      if (((r = t.baseState), s === null)) t.memoizedState = r;
      else {
        e = s.next;
        var y = (f = null),
          S = null,
          C = e,
          O = !1;
        do {
          var B = C.lane & -536870913;
          if (B !== C.lane ? (dt & B) === B : (hn & B) === B) {
            var w = C.revertLane;
            if (w === 0)
              S !== null &&
                (S = S.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: C.action,
                    hasEagerState: C.hasEagerState,
                    eagerState: C.eagerState,
                    next: null,
                  }),
                B === $i && (O = !0);
            else if ((hn & w) === w) {
              (C = C.next), w === $i && (O = !0);
              continue;
            } else
              (B = {
                lane: 0,
                revertLane: C.revertLane,
                gesture: null,
                action: C.action,
                hasEagerState: C.hasEagerState,
                eagerState: C.eagerState,
                next: null,
              }),
                S === null ? ((y = S = B), (f = r)) : (S = S.next = B),
                (ut.lanes |= w),
                (Yn |= w);
            (B = C.action),
              bi && n(r, B),
              (r = C.hasEagerState ? C.eagerState : n(r, B));
          } else
            (w = {
              lane: B,
              revertLane: C.revertLane,
              gesture: C.gesture,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              S === null ? ((y = S = w), (f = r)) : (S = S.next = w),
              (ut.lanes |= B),
              (Yn |= B);
          C = C.next;
        } while (C !== null && C !== e);
        if (
          (S === null ? (f = r) : (S.next = y),
          !Ae(r, t.memoizedState) && ((Qt = !0), O && ((n = Ii), n !== null)))
        )
          throw n;
        (t.memoizedState = r),
          (t.baseState = f),
          (t.baseQueue = S),
          (a.lastRenderedState = r);
      }
      return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
    }
    function lc(t) {
      var e = Yt(),
        n = e.queue;
      if (n === null) throw Error(o(311));
      n.lastRenderedReducer = t;
      var a = n.dispatch,
        s = n.pending,
        r = e.memoizedState;
      if (s !== null) {
        n.pending = null;
        var f = (s = s.next);
        do (r = t(r, f.action)), (f = f.next);
        while (f !== s);
        Ae(r, e.memoizedState) || (Qt = !0),
          (e.memoizedState = r),
          e.baseQueue === null && (e.baseState = r),
          (n.lastRenderedState = r);
      }
      return [r, a];
    }
    function ty(t, e, n) {
      var a = ut,
        s = Yt(),
        r = gt;
      if (r) {
        if (n === void 0) throw Error(o(407));
        n = n();
      } else n = e();
      var f = !Ae((Mt || s).memoizedState, n);
      if (
        (f && ((s.memoizedState = n), (Qt = !0)),
        (s = s.queue),
        oc(iy.bind(null, a, s, t), [t]),
        s.getSnapshot !== e || f || (Kt !== null && Kt.memoizedState.tag & 1))
      ) {
        if (
          ((a.flags |= 2048),
          la(9, { destroy: void 0 }, ny.bind(null, a, s, n, e), null),
          zt === null)
        )
          throw Error(o(349));
        r || (hn & 127) !== 0 || ey(a, e, n);
      }
      return n;
    }
    function ey(t, e, n) {
      (t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        (e = ut.updateQueue),
        e === null
          ? ((e = qs()), (ut.updateQueue = e), (e.stores = [t]))
          : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
    }
    function ny(t, e, n, a) {
      (e.value = n), (e.getSnapshot = a), ay(e) && ly(t);
    }
    function iy(t, e, n) {
      return n(function () {
        ay(e) && ly(t);
      });
    }
    function ay(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var n = e();
        return !Ae(t, n);
      } catch {
        return !0;
      }
    }
    function ly(t) {
      var e = fi(t, 2);
      e !== null && ve(e, t, 2);
    }
    function sc(t) {
      var e = fe();
      if (typeof t == "function") {
        var n = t;
        if (((t = n()), bi)) {
          Cn(!0);
          try {
            n();
          } finally {
            Cn(!1);
          }
        }
      }
      return (
        (e.memoizedState = e.baseState = t),
        (e.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dn,
          lastRenderedState: t,
        }),
        e
      );
    }
    function sy(t, e, n, a) {
      return (t.baseState = n), ac(t, Mt, typeof a == "function" ? a : dn);
    }
    function vT(t, e, n, a, s) {
      if (Zs(t)) throw Error(o(485));
      if (((t = e.action), t !== null)) {
        var r = {
          payload: s,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (f) {
            r.listeners.push(f);
          },
        };
        R.T !== null ? n(!0) : (r.isTransition = !1),
          a(r),
          (n = e.pending),
          n === null
            ? ((r.next = e.pending = r), uy(e, r))
            : ((r.next = n.next), (e.pending = n.next = r));
      }
    }
    function uy(t, e) {
      var n = e.action,
        a = e.payload,
        s = t.state;
      if (e.isTransition) {
        var r = R.T,
          f = {};
        R.T = f;
        try {
          var y = n(s, a),
            S = R.S;
          S !== null && S(f, y), oy(t, e, y);
        } catch (C) {
          uc(t, e, C);
        } finally {
          r !== null && f.types !== null && (r.types = f.types), (R.T = r);
        }
      } else
        try {
          (r = n(s, a)), oy(t, e, r);
        } catch (C) {
          uc(t, e, C);
        }
    }
    function oy(t, e, n) {
      n !== null && typeof n == "object" && typeof n.then == "function"
        ? n.then(
            function (a) {
              ry(t, e, a);
            },
            function (a) {
              return uc(t, e, a);
            },
          )
        : ry(t, e, n);
    }
    function ry(t, e, n) {
      (e.status = "fulfilled"),
        (e.value = n),
        cy(e),
        (t.state = n),
        (e = t.pending),
        e !== null &&
          ((n = e.next),
          n === e
            ? (t.pending = null)
            : ((n = n.next), (e.next = n), uy(t, n)));
    }
    function uc(t, e, n) {
      var a = t.pending;
      if (((t.pending = null), a !== null)) {
        a = a.next;
        do (e.status = "rejected"), (e.reason = n), cy(e), (e = e.next);
        while (e !== a);
      }
      t.action = null;
    }
    function cy(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function fy(t, e) {
      return e;
    }
    function hy(t, e) {
      if (gt) {
        var n = zt.formState;
        if (n !== null) {
          t: {
            var a = ut;
            if (gt) {
              if (Rt) {
                e: {
                  for (var s = Rt, r = Le; s.nodeType !== 8; ) {
                    if (!r) {
                      s = null;
                      break e;
                    }
                    if (((s = qe(s.nextSibling)), s === null)) {
                      s = null;
                      break e;
                    }
                  }
                  (r = s.data), (s = r === "F!" || r === "F" ? s : null);
                }
                if (s) {
                  (Rt = qe(s.nextSibling)), (a = s.data === "F!");
                  break t;
                }
              }
              Nn(a);
            }
            a = !1;
          }
          a && (e = n[0]);
        }
      }
      return (
        (n = fe()),
        (n.memoizedState = n.baseState = e),
        (a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fy,
          lastRenderedState: e,
        }),
        (n.queue = a),
        (n = Ry.bind(null, ut, a)),
        (a.dispatch = n),
        (a = sc(!1)),
        (r = dc.bind(null, ut, !1, a.queue)),
        (a = fe()),
        (s = { state: e, dispatch: null, action: t, pending: null }),
        (a.queue = s),
        (n = vT.bind(null, ut, s, r, n)),
        (s.dispatch = n),
        (a.memoizedState = t),
        [e, n, !1]
      );
    }
    function dy(t) {
      var e = Yt();
      return my(e, Mt, t);
    }
    function my(t, e, n) {
      if (
        ((e = ac(t, e, fy)[0]),
        (t = Gs(dn)[0]),
        typeof e == "object" && e !== null && typeof e.then == "function")
      )
        try {
          var a = ol(e);
        } catch (f) {
          throw f === ta ? Ns : f;
        }
      else a = e;
      e = Yt();
      var s = e.queue,
        r = s.dispatch;
      return (
        n !== e.memoizedState &&
          ((ut.flags |= 2048),
          la(9, { destroy: void 0 }, xT.bind(null, s, n), null)),
        [a, r, t]
      );
    }
    function xT(t, e) {
      t.action = e;
    }
    function py(t) {
      var e = Yt(),
        n = Mt;
      if (n !== null) return my(e, n, t);
      Yt(), (e = e.memoizedState), (n = Yt());
      var a = n.queue.dispatch;
      return (n.memoizedState = t), [e, a, !1];
    }
    function la(t, e, n, a) {
      return (
        (t = { tag: t, create: n, deps: a, inst: e, next: null }),
        (e = ut.updateQueue),
        e === null && ((e = qs()), (ut.updateQueue = e)),
        (n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
        t
      );
    }
    function yy() {
      return Yt().memoizedState;
    }
    function Xs(t, e, n, a) {
      var s = fe();
      (ut.flags |= t),
        (s.memoizedState = la(
          1 | e,
          { destroy: void 0 },
          n,
          a === void 0 ? null : a,
        ));
    }
    function ks(t, e, n, a) {
      var s = Yt();
      a = a === void 0 ? null : a;
      var r = s.memoizedState.inst;
      Mt !== null && a !== null && $r(a, Mt.memoizedState.deps)
        ? (s.memoizedState = la(e, r, n, a))
        : ((ut.flags |= t), (s.memoizedState = la(1 | e, r, n, a)));
    }
    function gy(t, e) {
      Xs(8390656, 8, t, e);
    }
    function oc(t, e) {
      ks(2048, 8, t, e);
    }
    function bT(t) {
      ut.flags |= 4;
      var e = ut.updateQueue;
      if (e === null) (e = qs()), (ut.updateQueue = e), (e.events = [t]);
      else {
        var n = e.events;
        n === null ? (e.events = [t]) : n.push(t);
      }
    }
    function vy(t) {
      var e = Yt().memoizedState;
      return (
        bT({ ref: e, nextImpl: t }),
        function () {
          if ((St & 2) !== 0) throw Error(o(440));
          return e.impl.apply(void 0, arguments);
        }
      );
    }
    function xy(t, e) {
      return ks(4, 2, t, e);
    }
    function by(t, e) {
      return ks(4, 4, t, e);
    }
    function Sy(t, e) {
      if (typeof e == "function") {
        t = t();
        var n = e(t);
        return function () {
          typeof n == "function" ? n() : e(null);
        };
      }
      if (e != null)
        return (
          (t = t()),
          (e.current = t),
          function () {
            e.current = null;
          }
        );
    }
    function Ty(t, e, n) {
      (n = n != null ? n.concat([t]) : null), ks(4, 4, Sy.bind(null, e, t), n);
    }
    function rc() {}
    function Ay(t, e) {
      var n = Yt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      return e !== null && $r(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
    }
    function Ey(t, e) {
      var n = Yt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      if (e !== null && $r(e, a[1])) return a[0];
      if (((a = t()), bi)) {
        Cn(!0);
        try {
          t();
        } finally {
          Cn(!1);
        }
      }
      return (n.memoizedState = [a, e]), a;
    }
    function cc(t, e, n) {
      return n === void 0 || ((hn & 1073741824) !== 0 && (dt & 261930) === 0)
        ? (t.memoizedState = e)
        : ((t.memoizedState = n), (t = Mg()), (ut.lanes |= t), (Yn |= t), n);
    }
    function My(t, e, n, a) {
      return Ae(n, e)
        ? n
        : na.current !== null
          ? ((t = cc(t, n, a)), Ae(t, e) || (Qt = !0), t)
          : (hn & 42) === 0 || ((hn & 1073741824) !== 0 && (dt & 261930) === 0)
            ? ((Qt = !0), (t.memoizedState = n))
            : ((t = Mg()), (ut.lanes |= t), (Yn |= t), e);
    }
    function Dy(t, e, n, a, s) {
      var r = k.p;
      k.p = r !== 0 && 8 > r ? r : 8;
      var f = R.T,
        y = {};
      (R.T = y), dc(t, !1, e, n);
      try {
        var S = s(),
          C = R.S;
        if (
          (C !== null && C(y, S),
          S !== null && typeof S == "object" && typeof S.then == "function")
        ) {
          var O = pT(S, a);
          rl(t, e, O, je(t));
        } else rl(t, e, a, je(t));
      } catch (B) {
        rl(t, e, { then: function () {}, status: "rejected", reason: B }, je());
      } finally {
        (k.p = r),
          f !== null && y.types !== null && (f.types = y.types),
          (R.T = f);
      }
    }
    function ST() {}
    function fc(t, e, n, a) {
      if (t.tag !== 5) throw Error(o(476));
      var s = Cy(t).queue;
      Dy(
        t,
        s,
        e,
        J,
        n === null
          ? ST
          : function () {
              return wy(t), n(a);
            },
      );
    }
    function Cy(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: J,
        baseState: J,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dn,
          lastRenderedState: J,
        },
        next: null,
      };
      var n = {};
      return (
        (e.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: dn,
            lastRenderedState: n,
          },
          next: null,
        }),
        (t.memoizedState = e),
        (t = t.alternate),
        t !== null && (t.memoizedState = e),
        e
      );
    }
    function wy(t) {
      var e = Cy(t);
      e.next === null && (e = t.alternate.memoizedState),
        rl(t, e.next.queue, {}, je());
    }
    function hc() {
      return ae(Dl);
    }
    function jy() {
      return Yt().memoizedState;
    }
    function zy() {
      return Yt().memoizedState;
    }
    function TT(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var n = je();
            t = _n(n);
            var a = Bn(e, t, n);
            a !== null && (ve(a, e, n), al(a, e, n)),
              (e = { cache: Yr() }),
              (t.payload = e);
            return;
        }
        e = e.return;
      }
    }
    function AT(t, e, n) {
      var a = je();
      (n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Zs(t)
          ? Ny(e, n)
          : ((n = zr(t, e, n, a)), n !== null && (ve(n, t, a), Oy(n, e, a)));
    }
    function Ry(t, e, n) {
      var a = je();
      rl(t, e, n, a);
    }
    function rl(t, e, n, a) {
      var s = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Zs(t)) Ny(e, s);
      else {
        var r = t.alternate;
        if (
          t.lanes === 0 &&
          (r === null || r.lanes === 0) &&
          ((r = e.lastRenderedReducer), r !== null)
        )
          try {
            var f = e.lastRenderedState,
              y = r(f, n);
            if (((s.hasEagerState = !0), (s.eagerState = y), Ae(y, f)))
              return Ms(t, e, s, 0), zt === null && Es(), !1;
          } catch {}
        if (((n = zr(t, e, s, a)), n !== null))
          return ve(n, t, a), Oy(n, e, a), !0;
      }
      return !1;
    }
    function dc(t, e, n, a) {
      if (
        ((a = {
          lane: 2,
          revertLane: Zc(),
          gesture: null,
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Zs(t))
      ) {
        if (e) throw Error(o(479));
      } else (e = zr(t, n, a, 2)), e !== null && ve(e, t, 2);
    }
    function Zs(t) {
      var e = t.alternate;
      return t === ut || (e !== null && e === ut);
    }
    function Ny(t, e) {
      ia = Ls = !0;
      var n = t.pending;
      n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (t.pending = e);
    }
    function Oy(t, e, n) {
      if ((n & 4194048) !== 0) {
        var a = e.lanes;
        (a &= t.pendingLanes), (n |= a), (e.lanes = n), Lm(t, n);
      }
    }
    var cl = {
      readContext: ae,
      use: Ys,
      useCallback: Bt,
      useContext: Bt,
      useEffect: Bt,
      useImperativeHandle: Bt,
      useLayoutEffect: Bt,
      useInsertionEffect: Bt,
      useMemo: Bt,
      useReducer: Bt,
      useRef: Bt,
      useState: Bt,
      useDebugValue: Bt,
      useDeferredValue: Bt,
      useTransition: Bt,
      useSyncExternalStore: Bt,
      useId: Bt,
      useHostTransitionStatus: Bt,
      useFormState: Bt,
      useActionState: Bt,
      useOptimistic: Bt,
      useMemoCache: Bt,
      useCacheRefresh: Bt,
    };
    cl.useEffectEvent = Bt;
    var Vy = {
        readContext: ae,
        use: Ys,
        useCallback: function (t, e) {
          return (fe().memoizedState = [t, e === void 0 ? null : e]), t;
        },
        useContext: ae,
        useEffect: gy,
        useImperativeHandle: function (t, e, n) {
          (n = n != null ? n.concat([t]) : null),
            Xs(4194308, 4, Sy.bind(null, e, t), n);
        },
        useLayoutEffect: function (t, e) {
          return Xs(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
          Xs(4, 2, t, e);
        },
        useMemo: function (t, e) {
          var n = fe();
          e = e === void 0 ? null : e;
          var a = t();
          if (bi) {
            Cn(!0);
            try {
              t();
            } finally {
              Cn(!1);
            }
          }
          return (n.memoizedState = [a, e]), a;
        },
        useReducer: function (t, e, n) {
          var a = fe();
          if (n !== void 0) {
            var s = n(e);
            if (bi) {
              Cn(!0);
              try {
                n(e);
              } finally {
                Cn(!1);
              }
            }
          } else s = e;
          return (
            (a.memoizedState = a.baseState = s),
            (t = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: t,
              lastRenderedState: s,
            }),
            (a.queue = t),
            (t = t.dispatch = AT.bind(null, ut, t)),
            [a.memoizedState, t]
          );
        },
        useRef: function (t) {
          var e = fe();
          return (t = { current: t }), (e.memoizedState = t);
        },
        useState: function (t) {
          t = sc(t);
          var e = t.queue,
            n = Ry.bind(null, ut, e);
          return (e.dispatch = n), [t.memoizedState, n];
        },
        useDebugValue: rc,
        useDeferredValue: function (t, e) {
          var n = fe();
          return cc(n, t, e);
        },
        useTransition: function () {
          var t = sc(!1);
          return (
            (t = Dy.bind(null, ut, t.queue, !0, !1)),
            (fe().memoizedState = t),
            [!1, t]
          );
        },
        useSyncExternalStore: function (t, e, n) {
          var a = ut,
            s = fe();
          if (gt) {
            if (n === void 0) throw Error(o(407));
            n = n();
          } else {
            if (((n = e()), zt === null)) throw Error(o(349));
            (dt & 127) !== 0 || ey(a, e, n);
          }
          s.memoizedState = n;
          var r = { value: n, getSnapshot: e };
          return (
            (s.queue = r),
            gy(iy.bind(null, a, r, t), [t]),
            (a.flags |= 2048),
            la(9, { destroy: void 0 }, ny.bind(null, a, r, n, e), null),
            n
          );
        },
        useId: function () {
          var t = fe(),
            e = zt.identifierPrefix;
          if (gt) {
            var n = tn,
              a = Ie;
            (n = (a & ~(1 << (32 - Te(a) - 1))).toString(32) + n),
              (e = "_" + e + "R_" + n),
              (n = Hs++),
              0 < n && (e += "H" + n.toString(32)),
              (e += "_");
          } else (n = yT++), (e = "_" + e + "r_" + n.toString(32) + "_");
          return (t.memoizedState = e);
        },
        useHostTransitionStatus: hc,
        useFormState: hy,
        useActionState: hy,
        useOptimistic: function (t) {
          var e = fe();
          e.memoizedState = e.baseState = t;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (e.queue = n),
            (e = dc.bind(null, ut, !0, n)),
            (n.dispatch = e),
            [t, e]
          );
        },
        useMemoCache: ic,
        useCacheRefresh: function () {
          return (fe().memoizedState = TT.bind(null, ut));
        },
        useEffectEvent: function (t) {
          var e = fe(),
            n = { impl: t };
          return (
            (e.memoizedState = n),
            function () {
              if ((St & 2) !== 0) throw Error(o(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      mc = {
        readContext: ae,
        use: Ys,
        useCallback: Ay,
        useContext: ae,
        useEffect: oc,
        useImperativeHandle: Ty,
        useInsertionEffect: xy,
        useLayoutEffect: by,
        useMemo: Ey,
        useReducer: Gs,
        useRef: yy,
        useState: function () {
          return Gs(dn);
        },
        useDebugValue: rc,
        useDeferredValue: function (t, e) {
          var n = Yt();
          return My(n, Mt.memoizedState, t, e);
        },
        useTransition: function () {
          var t = Gs(dn)[0],
            e = Yt().memoizedState;
          return [typeof t == "boolean" ? t : ol(t), e];
        },
        useSyncExternalStore: ty,
        useId: jy,
        useHostTransitionStatus: hc,
        useFormState: dy,
        useActionState: dy,
        useOptimistic: function (t, e) {
          var n = Yt();
          return sy(n, Mt, t, e);
        },
        useMemoCache: ic,
        useCacheRefresh: zy,
      };
    mc.useEffectEvent = vy;
    var _y = {
      readContext: ae,
      use: Ys,
      useCallback: Ay,
      useContext: ae,
      useEffect: oc,
      useImperativeHandle: Ty,
      useInsertionEffect: xy,
      useLayoutEffect: by,
      useMemo: Ey,
      useReducer: lc,
      useRef: yy,
      useState: function () {
        return lc(dn);
      },
      useDebugValue: rc,
      useDeferredValue: function (t, e) {
        var n = Yt();
        return Mt === null ? cc(n, t, e) : My(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = lc(dn)[0],
          e = Yt().memoizedState;
        return [typeof t == "boolean" ? t : ol(t), e];
      },
      useSyncExternalStore: ty,
      useId: jy,
      useHostTransitionStatus: hc,
      useFormState: py,
      useActionState: py,
      useOptimistic: function (t, e) {
        var n = Yt();
        return Mt !== null
          ? sy(n, Mt, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: ic,
      useCacheRefresh: zy,
    };
    _y.useEffectEvent = vy;
    function pc(t, e, n, a) {
      (e = t.memoizedState),
        (n = n(a, e)),
        (n = n == null ? e : x({}, e, n)),
        (t.memoizedState = n),
        t.lanes === 0 && (t.updateQueue.baseState = n);
    }
    var yc = {
      enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var a = je(),
          s = _n(a);
        (s.payload = e),
          n != null && (s.callback = n),
          (e = Bn(t, s, a)),
          e !== null && (ve(e, t, a), al(e, t, a));
      },
      enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var a = je(),
          s = _n(a);
        (s.tag = 1),
          (s.payload = e),
          n != null && (s.callback = n),
          (e = Bn(t, s, a)),
          e !== null && (ve(e, t, a), al(e, t, a));
      },
      enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = je(),
          a = _n(n);
        (a.tag = 2),
          e != null && (a.callback = e),
          (e = Bn(t, a, n)),
          e !== null && (ve(e, t, n), al(e, t, n));
      },
    };
    function By(t, e, n, a, s, r, f) {
      return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == "function"
          ? t.shouldComponentUpdate(a, r, f)
          : e.prototype && e.prototype.isPureReactComponent
            ? !Wa(n, a) || !Wa(s, r)
            : !0
      );
    }
    function Uy(t, e, n, a) {
      (t = e.state),
        typeof e.componentWillReceiveProps == "function" &&
          e.componentWillReceiveProps(n, a),
        typeof e.UNSAFE_componentWillReceiveProps == "function" &&
          e.UNSAFE_componentWillReceiveProps(n, a),
        e.state !== t && yc.enqueueReplaceState(e, e.state, null);
    }
    function Si(t, e) {
      var n = e;
      if ("ref" in e) {
        n = {};
        for (var a in e) a !== "ref" && (n[a] = e[a]);
      }
      if ((t = t.defaultProps)) {
        n === e && (n = x({}, n));
        for (var s in t) n[s] === void 0 && (n[s] = t[s]);
      }
      return n;
    }
    function Ly(t) {
      As(t);
    }
    function Hy(t) {
      console.error(t);
    }
    function qy(t) {
      As(t);
    }
    function Ks(t, e) {
      try {
        var n = t.onUncaughtError;
        n(e.value, { componentStack: e.stack });
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }
    function Yy(t, e, n) {
      try {
        var a = t.onCaughtError;
        a(n.value, {
          componentStack: n.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null,
        });
      } catch (s) {
        setTimeout(function () {
          throw s;
        });
      }
    }
    function gc(t, e, n) {
      return (
        (n = _n(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Ks(t, e);
        }),
        n
      );
    }
    function Gy(t) {
      return (t = _n(t)), (t.tag = 3), t;
    }
    function Xy(t, e, n, a) {
      var s = n.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var r = a.value;
        (t.payload = function () {
          return s(r);
        }),
          (t.callback = function () {
            Yy(e, n, a);
          });
      }
      var f = n.stateNode;
      f !== null &&
        typeof f.componentDidCatch == "function" &&
        (t.callback = function () {
          Yy(e, n, a),
            typeof s != "function" &&
              (Gn === null ? (Gn = new Set([this])) : Gn.add(this));
          var y = a.stack;
          this.componentDidCatch(a.value, {
            componentStack: y !== null ? y : "",
          });
        });
    }
    function ET(t, e, n, a, s) {
      if (
        ((n.flags |= 32768),
        a !== null && typeof a == "object" && typeof a.then == "function")
      ) {
        if (
          ((e = n.alternate),
          e !== null && Pi(e, n, s, !0),
          (n = Me.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                He === null
                  ? au()
                  : n.alternate === null && Ut === 0 && (Ut = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = s),
                a === Os
                  ? (n.flags |= 16384)
                  : ((e = n.updateQueue),
                    e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                    Gc(t, a, s)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                a === Os
                  ? (n.flags |= 16384)
                  : ((e = n.updateQueue),
                    e === null
                      ? ((e = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([a]),
                        }),
                        (n.updateQueue = e))
                      : ((n = e.retryQueue),
                        n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                    Gc(t, a, s)),
                !1
              );
          }
          throw Error(o(435, n.tag));
        }
        return Gc(t, a, s), au(), !1;
      }
      if (gt)
        return (
          (e = Me.current),
          e !== null
            ? ((e.flags & 65536) === 0 && (e.flags |= 256),
              (e.flags |= 65536),
              (e.lanes = s),
              a !== Br && ((t = Error(o(422), { cause: a })), Ia(_e(t, n))))
            : (a !== Br && ((e = Error(o(423), { cause: a })), Ia(_e(e, n))),
              (t = t.current.alternate),
              (t.flags |= 65536),
              (s &= -s),
              (t.lanes |= s),
              (a = _e(a, n)),
              (s = gc(t.stateNode, a, s)),
              Qr(t, s),
              Ut !== 4 && (Ut = 2)),
          !1
        );
      var r = Error(o(520), { cause: a });
      if (
        ((r = _e(r, n)),
        vl === null ? (vl = [r]) : vl.push(r),
        Ut !== 4 && (Ut = 2),
        e === null)
      )
        return !0;
      (a = _e(a, n)), (n = e);
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (t = s & -s),
              (n.lanes |= t),
              (t = gc(n.stateNode, a, t)),
              Qr(n, t),
              !1
            );
          case 1:
            if (
              ((e = n.type),
              (r = n.stateNode),
              (n.flags & 128) === 0 &&
                (typeof e.getDerivedStateFromError == "function" ||
                  (r !== null &&
                    typeof r.componentDidCatch == "function" &&
                    (Gn === null || !Gn.has(r)))))
            )
              return (
                (n.flags |= 65536),
                (s &= -s),
                (n.lanes |= s),
                (s = Gy(s)),
                Xy(s, t, n, a),
                Qr(n, s),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var vc = Error(o(461)),
      Qt = !1;
    function le(t, e, n, a) {
      e.child = t === null ? Qp(e, null, n, a) : xi(e, t.child, n, a);
    }
    function ky(t, e, n, a, s) {
      n = n.render;
      var r = e.ref;
      if ("ref" in a) {
        var f = {};
        for (var y in a) y !== "ref" && (f[y] = a[y]);
      } else f = a;
      return (
        pi(e),
        (a = Ir(t, e, n, f, r, s)),
        (y = tc()),
        t !== null && !Qt
          ? (ec(t, e, s), mn(t, e, s))
          : (gt && y && Vr(e), (e.flags |= 1), le(t, e, a, s), e.child)
      );
    }
    function Zy(t, e, n, a, s) {
      if (t === null) {
        var r = n.type;
        return typeof r == "function" &&
          !Rr(r) &&
          r.defaultProps === void 0 &&
          n.compare === null
          ? ((e.tag = 15), (e.type = r), Ky(t, e, r, a, s))
          : ((t = Cs(n.type, null, a, e, e.mode, s)),
            (t.ref = e.ref),
            (t.return = e),
            (e.child = t));
      }
      if (((r = t.child), !Dc(t, s))) {
        var f = r.memoizedProps;
        if (
          ((n = n.compare),
          (n = n !== null ? n : Wa),
          n(f, a) && t.ref === e.ref)
        )
          return mn(t, e, s);
      }
      return (
        (e.flags |= 1),
        (t = on(r, a)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t)
      );
    }
    function Ky(t, e, n, a, s) {
      if (t !== null) {
        var r = t.memoizedProps;
        if (Wa(r, a) && t.ref === e.ref)
          if (((Qt = !1), (e.pendingProps = a = r), Dc(t, s)))
            (t.flags & 131072) !== 0 && (Qt = !0);
          else return (e.lanes = t.lanes), mn(t, e, s);
      }
      return xc(t, e, n, a, s);
    }
    function Qy(t, e, n, a) {
      var s = a.children,
        r = t !== null ? t.memoizedState : null;
      if (
        (t === null &&
          e.stateNode === null &&
          (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        a.mode === "hidden")
      ) {
        if ((e.flags & 128) !== 0) {
          if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
            for (a = e.child = t.child, s = 0; a !== null; )
              (s = s | a.lanes | a.childLanes), (a = a.sibling);
            a = s & ~r;
          } else (a = 0), (e.child = null);
          return Jy(t, e, r, n, a);
        }
        if ((n & 536870912) !== 0)
          (e.memoizedState = { baseLanes: 0, cachePool: null }),
            t !== null && Rs(e, r !== null ? r.cachePool : null),
            r !== null ? Wp(e, r) : Fr(),
            Pp(e);
        else
          return (
            (a = e.lanes = 536870912),
            Jy(t, e, r !== null ? r.baseLanes | n : n, n, a)
          );
      } else
        r !== null
          ? (Rs(e, r.cachePool), Wp(e, r), Ln(), (e.memoizedState = null))
          : (t !== null && Rs(e, null), Fr(), Ln());
      return le(t, e, s, n), e.child;
    }
    function fl(t, e) {
      return (
        (t !== null && t.tag === 22) ||
          e.stateNode !== null ||
          (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        e.sibling
      );
    }
    function Jy(t, e, n, a, s) {
      var r = Xr();
      return (
        (r = r === null ? null : { parent: Zt._currentValue, pool: r }),
        (e.memoizedState = { baseLanes: n, cachePool: r }),
        t !== null && Rs(e, null),
        Fr(),
        Pp(e),
        t !== null && Pi(t, e, a, !0),
        (e.childLanes = s),
        null
      );
    }
    function Qs(t, e) {
      return (
        (e = Fs({ mode: e.mode, children: e.children }, t.mode)),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function Fy(t, e, n) {
      return (
        xi(e, t.child, null, n),
        (t = Qs(e, e.pendingProps)),
        (t.flags |= 2),
        De(e),
        (e.memoizedState = null),
        t
      );
    }
    function MT(t, e, n) {
      var a = e.pendingProps,
        s = (e.flags & 128) !== 0;
      if (((e.flags &= -129), t === null)) {
        if (gt) {
          if (a.mode === "hidden")
            return (t = Qs(e, a)), (e.lanes = 536870912), fl(null, t);
          if (
            (Pr(e),
            (t = Rt)
              ? ((t = u0(t, Le)),
                (t = t !== null && t.data === "&" ? t : null),
                t !== null &&
                  ((e.memoizedState = {
                    dehydrated: t,
                    treeContext: zn !== null ? { id: Ie, overflow: tn } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Np(t)),
                  (n.return = e),
                  (e.child = n),
                  (ie = e),
                  (Rt = null)))
              : (t = null),
            t === null)
          )
            throw Nn(e);
          return (e.lanes = 536870912), null;
        }
        return Qs(e, a);
      }
      var r = t.memoizedState;
      if (r !== null) {
        var f = r.dehydrated;
        if ((Pr(e), s))
          if (e.flags & 256) (e.flags &= -257), (e = Fy(t, e, n));
          else if (e.memoizedState !== null)
            (e.child = t.child), (e.flags |= 128), (e = null);
          else throw Error(o(558));
        else if (
          (Qt || Pi(t, e, n, !1), (s = (n & t.childLanes) !== 0), Qt || s)
        ) {
          if (
            ((a = zt),
            a !== null && ((f = Hm(a, n)), f !== 0 && f !== r.retryLane))
          )
            throw ((r.retryLane = f), fi(t, f), ve(a, t, f), vc);
          au(), (e = Fy(t, e, n));
        } else
          (t = r.treeContext),
            (Rt = qe(f.nextSibling)),
            (ie = e),
            (gt = !0),
            (Rn = null),
            (Le = !1),
            t !== null && _p(e, t),
            (e = Qs(e, a)),
            (e.flags |= 4096);
        return e;
      }
      return (
        (t = on(t.child, { mode: a.mode, children: a.children })),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function Js(t, e) {
      var n = e.ref;
      if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object") throw Error(o(284));
        (t === null || t.ref !== n) && (e.flags |= 4194816);
      }
    }
    function xc(t, e, n, a, s) {
      return (
        pi(e),
        (n = Ir(t, e, n, a, void 0, s)),
        (a = tc()),
        t !== null && !Qt
          ? (ec(t, e, s), mn(t, e, s))
          : (gt && a && Vr(e), (e.flags |= 1), le(t, e, n, s), e.child)
      );
    }
    function Wy(t, e, n, a, s, r) {
      return (
        pi(e),
        (e.updateQueue = null),
        (n = Ip(e, a, n, s)),
        $p(t),
        (a = tc()),
        t !== null && !Qt
          ? (ec(t, e, r), mn(t, e, r))
          : (gt && a && Vr(e), (e.flags |= 1), le(t, e, n, r), e.child)
      );
    }
    function Py(t, e, n, a, s) {
      if ((pi(e), e.stateNode === null)) {
        var r = Qi,
          f = n.contextType;
        typeof f == "object" && f !== null && (r = ae(f)),
          (r = new n(a, r)),
          (e.memoizedState =
            r.state !== null && r.state !== void 0 ? r.state : null),
          (r.updater = yc),
          (e.stateNode = r),
          (r._reactInternals = e),
          (r = e.stateNode),
          (r.props = a),
          (r.state = e.memoizedState),
          (r.refs = {}),
          Zr(e),
          (f = n.contextType),
          (r.context = typeof f == "object" && f !== null ? ae(f) : Qi),
          (r.state = e.memoizedState),
          (f = n.getDerivedStateFromProps),
          typeof f == "function" &&
            (pc(e, n, f, a), (r.state = e.memoizedState)),
          typeof n.getDerivedStateFromProps == "function" ||
            typeof r.getSnapshotBeforeUpdate == "function" ||
            (typeof r.UNSAFE_componentWillMount != "function" &&
              typeof r.componentWillMount != "function") ||
            ((f = r.state),
            typeof r.componentWillMount == "function" && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == "function" &&
              r.UNSAFE_componentWillMount(),
            f !== r.state && yc.enqueueReplaceState(r, r.state, null),
            sl(e, a, r, s),
            ll(),
            (r.state = e.memoizedState)),
          typeof r.componentDidMount == "function" && (e.flags |= 4194308),
          (a = !0);
      } else if (t === null) {
        r = e.stateNode;
        var y = e.memoizedProps,
          S = Si(n, y);
        r.props = S;
        var C = r.context,
          O = n.contextType;
        (f = Qi), typeof O == "object" && O !== null && (f = ae(O));
        var B = n.getDerivedStateFromProps;
        (O =
          typeof B == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function"),
          (y = e.pendingProps !== y),
          O ||
            (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
              typeof r.componentWillReceiveProps != "function") ||
            ((y || C !== f) && Uy(e, r, a, f)),
          (Vn = !1);
        var w = e.memoizedState;
        (r.state = w),
          sl(e, a, r, s),
          ll(),
          (C = e.memoizedState),
          y || w !== C || Vn
            ? (typeof B == "function" &&
                (pc(e, n, B, a), (C = e.memoizedState)),
              (S = Vn || By(e, n, S, a, w, C, f))
                ? (O ||
                    (typeof r.UNSAFE_componentWillMount != "function" &&
                      typeof r.componentWillMount != "function") ||
                    (typeof r.componentWillMount == "function" &&
                      r.componentWillMount(),
                    typeof r.UNSAFE_componentWillMount == "function" &&
                      r.UNSAFE_componentWillMount()),
                  typeof r.componentDidMount == "function" &&
                    (e.flags |= 4194308))
                : (typeof r.componentDidMount == "function" &&
                    (e.flags |= 4194308),
                  (e.memoizedProps = a),
                  (e.memoizedState = C)),
              (r.props = a),
              (r.state = C),
              (r.context = f),
              (a = S))
            : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
              (a = !1));
      } else {
        (r = e.stateNode),
          Kr(t, e),
          (f = e.memoizedProps),
          (O = Si(n, f)),
          (r.props = O),
          (B = e.pendingProps),
          (w = r.context),
          (C = n.contextType),
          (S = Qi),
          typeof C == "object" && C !== null && (S = ae(C)),
          (y = n.getDerivedStateFromProps),
          (C =
            typeof y == "function" ||
            typeof r.getSnapshotBeforeUpdate == "function") ||
            (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
              typeof r.componentWillReceiveProps != "function") ||
            ((f !== B || w !== S) && Uy(e, r, a, S)),
          (Vn = !1),
          (w = e.memoizedState),
          (r.state = w),
          sl(e, a, r, s),
          ll();
        var z = e.memoizedState;
        f !== B ||
        w !== z ||
        Vn ||
        (t !== null && t.dependencies !== null && js(t.dependencies))
          ? (typeof y == "function" && (pc(e, n, y, a), (z = e.memoizedState)),
            (O =
              Vn ||
              By(e, n, O, a, w, z, S) ||
              (t !== null && t.dependencies !== null && js(t.dependencies)))
              ? (C ||
                  (typeof r.UNSAFE_componentWillUpdate != "function" &&
                    typeof r.componentWillUpdate != "function") ||
                  (typeof r.componentWillUpdate == "function" &&
                    r.componentWillUpdate(a, z, S),
                  typeof r.UNSAFE_componentWillUpdate == "function" &&
                    r.UNSAFE_componentWillUpdate(a, z, S)),
                typeof r.componentDidUpdate == "function" && (e.flags |= 4),
                typeof r.getSnapshotBeforeUpdate == "function" &&
                  (e.flags |= 1024))
              : (typeof r.componentDidUpdate != "function" ||
                  (f === t.memoizedProps && w === t.memoizedState) ||
                  (e.flags |= 4),
                typeof r.getSnapshotBeforeUpdate != "function" ||
                  (f === t.memoizedProps && w === t.memoizedState) ||
                  (e.flags |= 1024),
                (e.memoizedProps = a),
                (e.memoizedState = z)),
            (r.props = a),
            (r.state = z),
            (r.context = S),
            (a = O))
          : (typeof r.componentDidUpdate != "function" ||
              (f === t.memoizedProps && w === t.memoizedState) ||
              (e.flags |= 4),
            typeof r.getSnapshotBeforeUpdate != "function" ||
              (f === t.memoizedProps && w === t.memoizedState) ||
              (e.flags |= 1024),
            (a = !1));
      }
      return (
        (r = a),
        Js(t, e),
        (a = (e.flags & 128) !== 0),
        r || a
          ? ((r = e.stateNode),
            (n =
              a && typeof n.getDerivedStateFromError != "function"
                ? null
                : r.render()),
            (e.flags |= 1),
            t !== null && a
              ? ((e.child = xi(e, t.child, null, s)),
                (e.child = xi(e, null, n, s)))
              : le(t, e, n, s),
            (e.memoizedState = r.state),
            (t = e.child))
          : (t = mn(t, e, s)),
        t
      );
    }
    function $y(t, e, n, a) {
      return di(), (e.flags |= 256), le(t, e, n, a), e.child;
    }
    var bc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Sc(t) {
      return { baseLanes: t, cachePool: Yp() };
    }
    function Tc(t, e, n) {
      return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= we), t;
    }
    function Iy(t, e, n) {
      var a = e.pendingProps,
        s = !1,
        r = (e.flags & 128) !== 0,
        f;
      if (
        ((f = r) ||
          (f =
            t !== null && t.memoizedState === null
              ? !1
              : (qt.current & 2) !== 0),
        f && ((s = !0), (e.flags &= -129)),
        (f = (e.flags & 32) !== 0),
        (e.flags &= -33),
        t === null)
      ) {
        if (gt) {
          if (
            (s ? Un(e) : Ln(),
            (t = Rt)
              ? ((t = u0(t, Le)),
                (t = t !== null && t.data !== "&" ? t : null),
                t !== null &&
                  ((e.memoizedState = {
                    dehydrated: t,
                    treeContext: zn !== null ? { id: Ie, overflow: tn } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Np(t)),
                  (n.return = e),
                  (e.child = n),
                  (ie = e),
                  (Rt = null)))
              : (t = null),
            t === null)
          )
            throw Nn(e);
          return lf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        }
        var y = a.children;
        return (
          (a = a.fallback),
          s
            ? (Ln(),
              (s = e.mode),
              (y = Fs({ mode: "hidden", children: y }, s)),
              (a = hi(a, s, n, null)),
              (y.return = e),
              (a.return = e),
              (y.sibling = a),
              (e.child = y),
              (a = e.child),
              (a.memoizedState = Sc(n)),
              (a.childLanes = Tc(t, f, n)),
              (e.memoizedState = bc),
              fl(null, a))
            : (Un(e), Ac(e, y))
        );
      }
      var S = t.memoizedState;
      if (S !== null && ((y = S.dehydrated), y !== null)) {
        if (r)
          e.flags & 256
            ? (Un(e), (e.flags &= -257), (e = Ec(t, e, n)))
            : e.memoizedState !== null
              ? (Ln(), (e.child = t.child), (e.flags |= 128), (e = null))
              : (Ln(),
                (y = a.fallback),
                (s = e.mode),
                (a = Fs({ mode: "visible", children: a.children }, s)),
                (y = hi(y, s, n, null)),
                (y.flags |= 2),
                (a.return = e),
                (y.return = e),
                (a.sibling = y),
                (e.child = a),
                xi(e, t.child, null, n),
                (a = e.child),
                (a.memoizedState = Sc(n)),
                (a.childLanes = Tc(t, f, n)),
                (e.memoizedState = bc),
                (e = fl(null, a)));
        else if ((Un(e), lf(y))) {
          if (((f = y.nextSibling && y.nextSibling.dataset), f)) var C = f.dgst;
          (f = C),
            (a = Error(o(419))),
            (a.stack = ""),
            (a.digest = f),
            Ia({ value: a, source: null, stack: null }),
            (e = Ec(t, e, n));
        } else if (
          (Qt || Pi(t, e, n, !1), (f = (n & t.childLanes) !== 0), Qt || f)
        ) {
          if (
            ((f = zt),
            f !== null && ((a = Hm(f, n)), a !== 0 && a !== S.retryLane))
          )
            throw ((S.retryLane = a), fi(t, a), ve(f, t, a), vc);
          af(y) || au(), (e = Ec(t, e, n));
        } else
          af(y)
            ? ((e.flags |= 192), (e.child = t.child), (e = null))
            : ((t = S.treeContext),
              (Rt = qe(y.nextSibling)),
              (ie = e),
              (gt = !0),
              (Rn = null),
              (Le = !1),
              t !== null && _p(e, t),
              (e = Ac(e, a.children)),
              (e.flags |= 4096));
        return e;
      }
      return s
        ? (Ln(),
          (y = a.fallback),
          (s = e.mode),
          (S = t.child),
          (C = S.sibling),
          (a = on(S, { mode: "hidden", children: a.children })),
          (a.subtreeFlags = S.subtreeFlags & 65011712),
          C !== null
            ? (y = on(C, y))
            : ((y = hi(y, s, n, null)), (y.flags |= 2)),
          (y.return = e),
          (a.return = e),
          (a.sibling = y),
          (e.child = a),
          fl(null, a),
          (a = e.child),
          (y = t.child.memoizedState),
          y === null
            ? (y = Sc(n))
            : ((s = y.cachePool),
              s !== null
                ? ((S = Zt._currentValue),
                  (s = s.parent !== S ? { parent: S, pool: S } : s))
                : (s = Yp()),
              (y = { baseLanes: y.baseLanes | n, cachePool: s })),
          (a.memoizedState = y),
          (a.childLanes = Tc(t, f, n)),
          (e.memoizedState = bc),
          fl(t.child, a))
        : (Un(e),
          (n = t.child),
          (t = n.sibling),
          (n = on(n, { mode: "visible", children: a.children })),
          (n.return = e),
          (n.sibling = null),
          t !== null &&
            ((f = e.deletions),
            f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
          (e.child = n),
          (e.memoizedState = null),
          n);
    }
    function Ac(t, e) {
      return (
        (e = Fs({ mode: "visible", children: e }, t.mode)),
        (e.return = t),
        (t.child = e)
      );
    }
    function Fs(t, e) {
      return (t = Ee(22, t, null, e)), (t.lanes = 0), t;
    }
    function Ec(t, e, n) {
      return (
        xi(e, t.child, null, n),
        (t = Ac(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
      );
    }
    function tg(t, e, n) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), Hr(t.return, e, n);
    }
    function Mc(t, e, n, a, s, r) {
      var f = t.memoizedState;
      f === null
        ? (t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: s,
            treeForkCount: r,
          })
        : ((f.isBackwards = e),
          (f.rendering = null),
          (f.renderingStartTime = 0),
          (f.last = a),
          (f.tail = n),
          (f.tailMode = s),
          (f.treeForkCount = r));
    }
    function eg(t, e, n) {
      var a = e.pendingProps,
        s = a.revealOrder,
        r = a.tail;
      a = a.children;
      var f = qt.current,
        y = (f & 2) !== 0;
      if (
        (y ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
        Z(qt, f),
        le(t, e, a, n),
        (a = gt ? $a : 0),
        !y && t !== null && (t.flags & 128) !== 0)
      )
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && tg(t, n, e);
          else if (t.tag === 19) tg(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      switch (s) {
        case "forwards":
          for (n = e.child, s = null; n !== null; )
            (t = n.alternate),
              t !== null && Us(t) === null && (s = n),
              (n = n.sibling);
          (n = s),
            n === null
              ? ((s = e.child), (e.child = null))
              : ((s = n.sibling), (n.sibling = null)),
            Mc(e, !1, s, n, r, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, s = e.child, e.child = null; s !== null; ) {
            if (((t = s.alternate), t !== null && Us(t) === null)) {
              e.child = s;
              break;
            }
            (t = s.sibling), (s.sibling = n), (n = s), (s = t);
          }
          Mc(e, !0, n, null, r, a);
          break;
        case "together":
          Mc(e, !1, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function mn(t, e, n) {
      if (
        (t !== null && (e.dependencies = t.dependencies),
        (Yn |= e.lanes),
        (n & e.childLanes) === 0)
      )
        if (t !== null) {
          if ((Pi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
        } else return null;
      if (t !== null && e.child !== t.child) throw Error(o(153));
      if (e.child !== null) {
        for (
          t = e.child, n = on(t, t.pendingProps), e.child = n, n.return = e;
          t.sibling !== null;

        )
          (t = t.sibling),
            (n = n.sibling = on(t, t.pendingProps)),
            (n.return = e);
        n.sibling = null;
      }
      return e.child;
    }
    function Dc(t, e) {
      return (t.lanes & e) !== 0
        ? !0
        : ((t = t.dependencies), !!(t !== null && js(t)));
    }
    function DT(t, e, n) {
      switch (e.tag) {
        case 3:
          ce(e, e.stateNode.containerInfo),
            On(e, Zt, t.memoizedState.cache),
            di();
          break;
        case 27:
        case 5:
          Ua(e);
          break;
        case 4:
          ce(e, e.stateNode.containerInfo);
          break;
        case 10:
          On(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return (e.flags |= 128), Pr(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null)
            return a.dehydrated !== null
              ? (Un(e), (e.flags |= 128), null)
              : (n & e.child.childLanes) !== 0
                ? Iy(t, e, n)
                : (Un(e), (t = mn(t, e, n)), t !== null ? t.sibling : null);
          Un(e);
          break;
        case 19:
          var s = (t.flags & 128) !== 0;
          if (
            ((a = (n & e.childLanes) !== 0),
            a || (Pi(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
            s)
          ) {
            if (a) return eg(t, e, n);
            e.flags |= 128;
          }
          if (
            ((s = e.memoizedState),
            s !== null &&
              ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
            Z(qt, qt.current),
            a)
          )
            break;
          return null;
        case 22:
          return (e.lanes = 0), Qy(t, e, n, e.pendingProps);
        case 24:
          On(e, Zt, t.memoizedState.cache);
      }
      return mn(t, e, n);
    }
    function ng(t, e, n) {
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps) Qt = !0;
        else {
          if (!Dc(t, n) && (e.flags & 128) === 0) return (Qt = !1), DT(t, e, n);
          Qt = (t.flags & 131072) !== 0;
        }
      else (Qt = !1), gt && (e.flags & 1048576) !== 0 && Vp(e, $a, e.index);
      switch (((e.lanes = 0), e.tag)) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (((t = gi(e.elementType)), (e.type = t), typeof t == "function"))
              Rr(t)
                ? ((a = Si(t, a)), (e.tag = 1), (e = Py(null, e, t, a, n)))
                : ((e.tag = 0), (e = xc(null, e, t, a, n)));
            else {
              if (t != null) {
                var s = t.$$typeof;
                if (s === G) {
                  (e.tag = 11), (e = ky(null, e, t, a, n));
                  break t;
                } else if (s === K) {
                  (e.tag = 14), (e = Zy(null, e, t, a, n));
                  break t;
                }
              }
              throw ((e = kt(t) || t), Error(o(306, e, "")));
            }
          }
          return e;
        case 0:
          return xc(t, e, e.type, e.pendingProps, n);
        case 1:
          return (a = e.type), (s = Si(a, e.pendingProps)), Py(t, e, a, s, n);
        case 3:
          t: {
            if ((ce(e, e.stateNode.containerInfo), t === null))
              throw Error(o(387));
            a = e.pendingProps;
            var r = e.memoizedState;
            (s = r.element), Kr(t, e), sl(e, a, null, n);
            var f = e.memoizedState;
            if (
              ((a = f.cache),
              On(e, Zt, a),
              a !== r.cache && qr(e, [Zt], n, !0),
              ll(),
              (a = f.element),
              r.isDehydrated)
            )
              if (
                ((r = { element: a, isDehydrated: !1, cache: f.cache }),
                (e.updateQueue.baseState = r),
                (e.memoizedState = r),
                e.flags & 256)
              ) {
                e = $y(t, e, a, n);
                break t;
              } else if (a !== s) {
                (s = _e(Error(o(424)), e)), Ia(s), (e = $y(t, e, a, n));
                break t;
              } else
                for (
                  t = e.stateNode.containerInfo,
                    t.nodeType === 9
                      ? (t = t.body)
                      : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                    Rt = qe(t.firstChild),
                    ie = e,
                    gt = !0,
                    Rn = null,
                    Le = !0,
                    n = Qp(e, null, a, n),
                    e.child = n;
                  n;

                )
                  (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            else {
              if ((di(), a === s)) {
                e = mn(t, e, n);
                break t;
              }
              le(t, e, a, n);
            }
            e = e.child;
          }
          return e;
        case 26:
          return (
            Js(t, e),
            t === null
              ? (n = d0(e.type, null, e.pendingProps, null))
                ? (e.memoizedState = n)
                : gt ||
                  ((n = e.type),
                  (t = e.pendingProps),
                  (a = fu(ct.current).createElement(n)),
                  (a[ne] = e),
                  (a[he] = t),
                  se(a, n, t),
                  Pt(a),
                  (e.stateNode = a))
              : (e.memoizedState = d0(
                  e.type,
                  t.memoizedProps,
                  e.pendingProps,
                  t.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Ua(e),
            t === null &&
              gt &&
              ((a = e.stateNode = c0(e.type, e.pendingProps, ct.current)),
              (ie = e),
              (Le = !0),
              (s = Rt),
              Kn(e.type) ? ((sf = s), (Rt = qe(a.firstChild))) : (Rt = s)),
            le(t, e, e.pendingProps.children, n),
            Js(t, e),
            t === null && (e.flags |= 4194304),
            e.child
          );
        case 5:
          return (
            t === null &&
              gt &&
              ((s = a = Rt) &&
                ((a = nA(a, e.type, e.pendingProps, Le)),
                a !== null
                  ? ((e.stateNode = a),
                    (ie = e),
                    (Rt = qe(a.firstChild)),
                    (Le = !1),
                    (s = !0))
                  : (s = !1)),
              s || Nn(e)),
            Ua(e),
            (s = e.type),
            (r = e.pendingProps),
            (f = t !== null ? t.memoizedProps : null),
            (a = r.children),
            tf(s, r) ? (a = null) : f !== null && tf(s, f) && (e.flags |= 32),
            e.memoizedState !== null &&
              ((s = Ir(t, e, gT, null, null, n)), (Dl._currentValue = s)),
            Js(t, e),
            le(t, e, a, n),
            e.child
          );
        case 6:
          return (
            t === null &&
              gt &&
              ((t = n = Rt) &&
                ((n = iA(n, e.pendingProps, Le)),
                n !== null
                  ? ((e.stateNode = n), (ie = e), (Rt = null), (t = !0))
                  : (t = !1)),
              t || Nn(e)),
            null
          );
        case 13:
          return Iy(t, e, n);
        case 4:
          return (
            ce(e, e.stateNode.containerInfo),
            (a = e.pendingProps),
            t === null ? (e.child = xi(e, null, a, n)) : le(t, e, a, n),
            e.child
          );
        case 11:
          return ky(t, e, e.type, e.pendingProps, n);
        case 7:
          return le(t, e, e.pendingProps, n), e.child;
        case 8:
          return le(t, e, e.pendingProps.children, n), e.child;
        case 12:
          return le(t, e, e.pendingProps.children, n), e.child;
        case 10:
          return (
            (a = e.pendingProps),
            On(e, e.type, a.value),
            le(t, e, a.children, n),
            e.child
          );
        case 9:
          return (
            (s = e.type._context),
            (a = e.pendingProps.children),
            pi(e),
            (s = ae(s)),
            (a = a(s)),
            (e.flags |= 1),
            le(t, e, a, n),
            e.child
          );
        case 14:
          return Zy(t, e, e.type, e.pendingProps, n);
        case 15:
          return Ky(t, e, e.type, e.pendingProps, n);
        case 19:
          return eg(t, e, n);
        case 31:
          return MT(t, e, n);
        case 22:
          return Qy(t, e, n, e.pendingProps);
        case 24:
          return (
            pi(e),
            (a = ae(Zt)),
            t === null
              ? ((s = Xr()),
                s === null &&
                  ((s = zt),
                  (r = Yr()),
                  (s.pooledCache = r),
                  r.refCount++,
                  r !== null && (s.pooledCacheLanes |= n),
                  (s = r)),
                (e.memoizedState = { parent: a, cache: s }),
                Zr(e),
                On(e, Zt, s))
              : ((t.lanes & n) !== 0 && (Kr(t, e), sl(e, null, null, n), ll()),
                (s = t.memoizedState),
                (r = e.memoizedState),
                s.parent !== a
                  ? ((s = { parent: a, cache: a }),
                    (e.memoizedState = s),
                    e.lanes === 0 &&
                      (e.memoizedState = e.updateQueue.baseState = s),
                    On(e, Zt, a))
                  : ((a = r.cache),
                    On(e, Zt, a),
                    a !== s.cache && qr(e, [Zt], n, !0))),
            le(t, e, e.pendingProps.children, n),
            e.child
          );
        case 29:
          throw e.pendingProps;
      }
      throw Error(o(156, e.tag));
    }
    function pn(t) {
      t.flags |= 4;
    }
    function Cc(t, e, n, a, s) {
      if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
        if (((t.flags |= 16777216), (s & 335544128) === s))
          if (t.stateNode.complete) t.flags |= 8192;
          else if (jg()) t.flags |= 8192;
          else throw ((vi = Os), kr);
      } else t.flags &= -16777217;
    }
    function ig(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
        t.flags &= -16777217;
      else if (((t.flags |= 16777216), !v0(e)))
        if (jg()) t.flags |= 8192;
        else throw ((vi = Os), kr);
    }
    function Ws(t, e) {
      e !== null && (t.flags |= 4),
        t.flags & 16384 &&
          ((e = t.tag !== 22 ? Bm() : 536870912), (t.lanes |= e), (ra |= e));
    }
    function hl(t, e) {
      if (!gt)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
              e.alternate !== null && (n = e), (e = e.sibling);
            n === null ? (t.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = t.tail;
            for (var a = null; n !== null; )
              n.alternate !== null && (a = n), (n = n.sibling);
            a === null
              ? e || t.tail === null
                ? (t.tail = null)
                : (t.tail.sibling = null)
              : (a.sibling = null);
        }
    }
    function Nt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        a = 0;
      if (e)
        for (var s = t.child; s !== null; )
          (n |= s.lanes | s.childLanes),
            (a |= s.subtreeFlags & 65011712),
            (a |= s.flags & 65011712),
            (s.return = t),
            (s = s.sibling);
      else
        for (s = t.child; s !== null; )
          (n |= s.lanes | s.childLanes),
            (a |= s.subtreeFlags),
            (a |= s.flags),
            (s.return = t),
            (s = s.sibling);
      return (t.subtreeFlags |= a), (t.childLanes = n), e;
    }
    function CT(t, e, n) {
      var a = e.pendingProps;
      switch ((_r(e), e.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Nt(e), null;
        case 1:
          return Nt(e), null;
        case 3:
          return (
            (n = e.stateNode),
            (a = null),
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            fn(Zt),
            Ht(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (t === null || t.child === null) &&
              (Wi(e)
                ? pn(e)
                : t === null ||
                  (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                  ((e.flags |= 1024), Ur())),
            Nt(e),
            null
          );
        case 26:
          var s = e.type,
            r = e.memoizedState;
          return (
            t === null
              ? (pn(e),
                r !== null ? (Nt(e), ig(e, r)) : (Nt(e), Cc(e, s, null, a, n)))
              : r
                ? r !== t.memoizedState
                  ? (pn(e), Nt(e), ig(e, r))
                  : (Nt(e), (e.flags &= -16777217))
                : ((t = t.memoizedProps),
                  t !== a && pn(e),
                  Nt(e),
                  Cc(e, s, t, a, n)),
            null
          );
        case 27:
          if (
            (us(e),
            (n = ct.current),
            (s = e.type),
            t !== null && e.stateNode != null)
          )
            t.memoizedProps !== a && pn(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(o(166));
              return Nt(e), null;
            }
            (t = P.current),
              Wi(e) ? Bp(e) : ((t = c0(s, a, n)), (e.stateNode = t), pn(e));
          }
          return Nt(e), null;
        case 5:
          if ((us(e), (s = e.type), t !== null && e.stateNode != null))
            t.memoizedProps !== a && pn(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(o(166));
              return Nt(e), null;
            }
            if (((r = P.current), Wi(e))) Bp(e);
            else {
              var f = fu(ct.current);
              switch (r) {
                case 1:
                  r = f.createElementNS("http://www.w3.org/2000/svg", s);
                  break;
                case 2:
                  r = f.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    s,
                  );
                  break;
                default:
                  switch (s) {
                    case "svg":
                      r = f.createElementNS("http://www.w3.org/2000/svg", s);
                      break;
                    case "math":
                      r = f.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        s,
                      );
                      break;
                    case "script":
                      (r = f.createElement("div")),
                        (r.innerHTML = "<script><\/script>"),
                        (r = r.removeChild(r.firstChild));
                      break;
                    case "select":
                      (r =
                        typeof a.is == "string"
                          ? f.createElement("select", { is: a.is })
                          : f.createElement("select")),
                        a.multiple
                          ? (r.multiple = !0)
                          : a.size && (r.size = a.size);
                      break;
                    default:
                      r =
                        typeof a.is == "string"
                          ? f.createElement(s, { is: a.is })
                          : f.createElement(s);
                  }
              }
              (r[ne] = e), (r[he] = a);
              t: for (f = e.child; f !== null; ) {
                if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
                else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                  (f.child.return = f), (f = f.child);
                  continue;
                }
                if (f === e) break t;
                for (; f.sibling === null; ) {
                  if (f.return === null || f.return === e) break t;
                  f = f.return;
                }
                (f.sibling.return = f.return), (f = f.sibling);
              }
              e.stateNode = r;
              t: switch ((se(r, s, a), s)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break t;
                case "img":
                  a = !0;
                  break t;
                default:
                  a = !1;
              }
              a && pn(e);
            }
          }
          return (
            Nt(e),
            Cc(
              e,
              e.type,
              t === null ? null : t.memoizedProps,
              e.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && pn(e);
          else {
            if (typeof a != "string" && e.stateNode === null)
              throw Error(o(166));
            if (((t = ct.current), Wi(e))) {
              if (
                ((t = e.stateNode),
                (n = e.memoizedProps),
                (a = null),
                (s = ie),
                s !== null)
              )
                switch (s.tag) {
                  case 27:
                  case 5:
                    a = s.memoizedProps;
                }
              (t[ne] = e),
                (t = !!(
                  t.nodeValue === n ||
                  (a !== null && a.suppressHydrationWarning === !0) ||
                  Ig(t.nodeValue, n)
                )),
                t || Nn(e, !0);
            } else
              (t = fu(t).createTextNode(a)), (t[ne] = e), (e.stateNode = t);
          }
          return Nt(e), null;
        case 31:
          if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
            if (((a = Wi(e)), n !== null)) {
              if (t === null) {
                if (!a) throw Error(o(318));
                if (
                  ((t = e.memoizedState),
                  (t = t !== null ? t.dehydrated : null),
                  !t)
                )
                  throw Error(o(557));
                t[ne] = e;
              } else
                di(),
                  (e.flags & 128) === 0 && (e.memoizedState = null),
                  (e.flags |= 4);
              Nt(e), (t = !1);
            } else
              (n = Ur()),
                t !== null &&
                  t.memoizedState !== null &&
                  (t.memoizedState.hydrationErrors = n),
                (t = !0);
            if (!t) return e.flags & 256 ? (De(e), e) : (De(e), null);
            if ((e.flags & 128) !== 0) throw Error(o(558));
          }
          return Nt(e), null;
        case 13:
          if (
            ((a = e.memoizedState),
            t === null ||
              (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
          ) {
            if (((s = Wi(e)), a !== null && a.dehydrated !== null)) {
              if (t === null) {
                if (!s) throw Error(o(318));
                if (
                  ((s = e.memoizedState),
                  (s = s !== null ? s.dehydrated : null),
                  !s)
                )
                  throw Error(o(317));
                s[ne] = e;
              } else
                di(),
                  (e.flags & 128) === 0 && (e.memoizedState = null),
                  (e.flags |= 4);
              Nt(e), (s = !1);
            } else
              (s = Ur()),
                t !== null &&
                  t.memoizedState !== null &&
                  (t.memoizedState.hydrationErrors = s),
                (s = !0);
            if (!s) return e.flags & 256 ? (De(e), e) : (De(e), null);
          }
          return (
            De(e),
            (e.flags & 128) !== 0
              ? ((e.lanes = n), e)
              : ((n = a !== null),
                (t = t !== null && t.memoizedState !== null),
                n &&
                  ((a = e.child),
                  (s = null),
                  a.alternate !== null &&
                    a.alternate.memoizedState !== null &&
                    a.alternate.memoizedState.cachePool !== null &&
                    (s = a.alternate.memoizedState.cachePool.pool),
                  (r = null),
                  a.memoizedState !== null &&
                    a.memoizedState.cachePool !== null &&
                    (r = a.memoizedState.cachePool.pool),
                  r !== s && (a.flags |= 2048)),
                n !== t && n && (e.child.flags |= 8192),
                Ws(e, e.updateQueue),
                Nt(e),
                null)
          );
        case 4:
          return Ht(), t === null && Fc(e.stateNode.containerInfo), Nt(e), null;
        case 10:
          return fn(e.type), Nt(e), null;
        case 19:
          if ((L(qt), (a = e.memoizedState), a === null)) return Nt(e), null;
          if (((s = (e.flags & 128) !== 0), (r = a.rendering), r === null))
            if (s) hl(a, !1);
            else {
              if (Ut !== 0 || (t !== null && (t.flags & 128) !== 0))
                for (t = e.child; t !== null; ) {
                  if (((r = Us(t)), r !== null)) {
                    for (
                      e.flags |= 128,
                        hl(a, !1),
                        t = r.updateQueue,
                        e.updateQueue = t,
                        Ws(e, t),
                        e.subtreeFlags = 0,
                        t = n,
                        n = e.child;
                      n !== null;

                    )
                      Rp(n, t), (n = n.sibling);
                    return (
                      Z(qt, (qt.current & 1) | 2),
                      gt && rn(e, a.treeForkCount),
                      e.child
                    );
                  }
                  t = t.sibling;
                }
              a.tail !== null &&
                be() > eu &&
                ((e.flags |= 128), (s = !0), hl(a, !1), (e.lanes = 4194304));
            }
          else {
            if (!s)
              if (((t = Us(r)), t !== null)) {
                if (
                  ((e.flags |= 128),
                  (s = !0),
                  (t = t.updateQueue),
                  (e.updateQueue = t),
                  Ws(e, t),
                  hl(a, !0),
                  a.tail === null &&
                    a.tailMode === "hidden" &&
                    !r.alternate &&
                    !gt)
                )
                  return Nt(e), null;
              } else
                2 * be() - a.renderingStartTime > eu &&
                  n !== 536870912 &&
                  ((e.flags |= 128), (s = !0), hl(a, !1), (e.lanes = 4194304));
            a.isBackwards
              ? ((r.sibling = e.child), (e.child = r))
              : ((t = a.last),
                t !== null ? (t.sibling = r) : (e.child = r),
                (a.last = r));
          }
          return a.tail !== null
            ? ((t = a.tail),
              (a.rendering = t),
              (a.tail = t.sibling),
              (a.renderingStartTime = be()),
              (t.sibling = null),
              (n = qt.current),
              Z(qt, s ? (n & 1) | 2 : n & 1),
              gt && rn(e, a.treeForkCount),
              t)
            : (Nt(e), null);
        case 22:
        case 23:
          return (
            De(e),
            Wr(),
            (a = e.memoizedState !== null),
            t !== null
              ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
              : a && (e.flags |= 8192),
            a
              ? (n & 536870912) !== 0 &&
                (e.flags & 128) === 0 &&
                (Nt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
              : Nt(e),
            (n = e.updateQueue),
            n !== null && Ws(e, n.retryQueue),
            (n = null),
            t !== null &&
              t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (n = t.memoizedState.cachePool.pool),
            (a = null),
            e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (a = e.memoizedState.cachePool.pool),
            a !== n && (e.flags |= 2048),
            t !== null && L(yi),
            null
          );
        case 24:
          return (
            (n = null),
            t !== null && (n = t.memoizedState.cache),
            e.memoizedState.cache !== n && (e.flags |= 2048),
            fn(Zt),
            Nt(e),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, e.tag));
    }
    function wT(t, e) {
      switch ((_r(e), e.tag)) {
        case 1:
          return (
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 3:
          return (
            fn(Zt),
            Ht(),
            (t = e.flags),
            (t & 65536) !== 0 && (t & 128) === 0
              ? ((e.flags = (t & -65537) | 128), e)
              : null
          );
        case 26:
        case 27:
        case 5:
          return us(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if ((De(e), e.alternate === null)) throw Error(o(340));
            di();
          }
          return (
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 13:
          if (
            (De(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
          ) {
            if (e.alternate === null) throw Error(o(340));
            di();
          }
          return (
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 19:
          return L(qt), null;
        case 4:
          return Ht(), null;
        case 10:
          return fn(e.type), null;
        case 22:
        case 23:
          return (
            De(e),
            Wr(),
            t !== null && L(yi),
            (t = e.flags),
            t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
          );
        case 24:
          return fn(Zt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ag(t, e) {
      switch ((_r(e), e.tag)) {
        case 3:
          fn(Zt), Ht();
          break;
        case 26:
        case 27:
        case 5:
          us(e);
          break;
        case 4:
          Ht();
          break;
        case 31:
          e.memoizedState !== null && De(e);
          break;
        case 13:
          De(e);
          break;
        case 19:
          L(qt);
          break;
        case 10:
          fn(e.type);
          break;
        case 22:
        case 23:
          De(e), Wr(), t !== null && L(yi);
          break;
        case 24:
          fn(Zt);
      }
    }
    function dl(t, e) {
      try {
        var n = e.updateQueue,
          a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var s = a.next;
          n = s;
          do {
            if ((n.tag & t) === t) {
              a = void 0;
              var r = n.create,
                f = n.inst;
              (a = r()), (f.destroy = a);
            }
            n = n.next;
          } while (n !== s);
        }
      } catch (y) {
        Et(e, e.return, y);
      }
    }
    function Hn(t, e, n) {
      try {
        var a = e.updateQueue,
          s = a !== null ? a.lastEffect : null;
        if (s !== null) {
          var r = s.next;
          a = r;
          do {
            if ((a.tag & t) === t) {
              var f = a.inst,
                y = f.destroy;
              if (y !== void 0) {
                (f.destroy = void 0), (s = e);
                var S = n,
                  C = y;
                try {
                  C();
                } catch (O) {
                  Et(s, S, O);
                }
              }
            }
            a = a.next;
          } while (a !== r);
        }
      } catch (O) {
        Et(e, e.return, O);
      }
    }
    function lg(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var n = t.stateNode;
        try {
          Fp(e, n);
        } catch (a) {
          Et(t, t.return, a);
        }
      }
    }
    function sg(t, e, n) {
      (n.props = Si(t.type, t.memoizedProps)), (n.state = t.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (a) {
        Et(t, e, a);
      }
    }
    function ml(t, e) {
      try {
        var n = t.ref;
        if (n !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var a = t.stateNode;
              break;
            case 30:
              a = t.stateNode;
              break;
            default:
              a = t.stateNode;
          }
          typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
        }
      } catch (s) {
        Et(t, e, s);
      }
    }
    function en(t, e) {
      var n = t.ref,
        a = t.refCleanup;
      if (n !== null)
        if (typeof a == "function")
          try {
            a();
          } catch (s) {
            Et(t, e, s);
          } finally {
            (t.refCleanup = null),
              (t = t.alternate),
              t != null && (t.refCleanup = null);
          }
        else if (typeof n == "function")
          try {
            n(null);
          } catch (s) {
            Et(t, e, s);
          }
        else n.current = null;
    }
    function ug(t) {
      var e = t.type,
        n = t.memoizedProps,
        a = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && a.focus();
            break t;
          case "img":
            n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
        }
      } catch (s) {
        Et(t, t.return, s);
      }
    }
    function wc(t, e, n) {
      try {
        var a = t.stateNode;
        WT(a, t.type, n, e), (a[he] = e);
      } catch (s) {
        Et(t, t.return, s);
      }
    }
    function og(t) {
      return (
        t.tag === 5 ||
        t.tag === 3 ||
        t.tag === 26 ||
        (t.tag === 27 && Kn(t.type)) ||
        t.tag === 4
      );
    }
    function jc(t) {
      t: for (;;) {
        for (; t.sibling === null; ) {
          if (t.return === null || og(t.return)) return null;
          t = t.return;
        }
        for (
          t.sibling.return = t.return, t = t.sibling;
          t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

        ) {
          if (
            (t.tag === 27 && Kn(t.type)) ||
            t.flags & 2 ||
            t.child === null ||
            t.tag === 4
          )
            continue t;
          (t.child.return = t), (t = t.child);
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function zc(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6)
        (t = t.stateNode),
          e
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(t, e)
            : ((e =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === "HTML"
                    ? n.ownerDocument.body
                    : n),
              e.appendChild(t),
              (n = n._reactRootContainer),
              n != null || e.onclick !== null || (e.onclick = sn));
      else if (
        a !== 4 &&
        (a === 27 && Kn(t.type) && ((n = t.stateNode), (e = null)),
        (t = t.child),
        t !== null)
      )
        for (zc(t, e, n), t = t.sibling; t !== null; )
          zc(t, e, n), (t = t.sibling);
    }
    function Ps(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6)
        (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
      else if (
        a !== 4 &&
        (a === 27 && Kn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
      )
        for (Ps(t, e, n), t = t.sibling; t !== null; )
          Ps(t, e, n), (t = t.sibling);
    }
    function rg(t) {
      var e = t.stateNode,
        n = t.memoizedProps;
      try {
        for (var a = t.type, s = e.attributes; s.length; )
          e.removeAttributeNode(s[0]);
        se(e, a, n), (e[ne] = t), (e[he] = n);
      } catch (r) {
        Et(t, t.return, r);
      }
    }
    var yn = !1,
      Jt = !1,
      Rc = !1,
      cg = typeof WeakSet == "function" ? WeakSet : Set,
      $t = null;
    function jT(t, e) {
      if (((t = t.containerInfo), ($c = vu), (t = Tp(t)), Er(t))) {
        if ("selectionStart" in t)
          var n = { start: t.selectionStart, end: t.selectionEnd };
        else
          t: {
            n = ((n = t.ownerDocument) && n.defaultView) || window;
            var a = n.getSelection && n.getSelection();
            if (a && a.rangeCount !== 0) {
              n = a.anchorNode;
              var s = a.anchorOffset,
                r = a.focusNode;
              a = a.focusOffset;
              try {
                n.nodeType, r.nodeType;
              } catch {
                n = null;
                break t;
              }
              var f = 0,
                y = -1,
                S = -1,
                C = 0,
                O = 0,
                B = t,
                w = null;
              e: for (;;) {
                for (
                  var z;
                  B !== n || (s !== 0 && B.nodeType !== 3) || (y = f + s),
                    B !== r || (a !== 0 && B.nodeType !== 3) || (S = f + a),
                    B.nodeType === 3 && (f += B.nodeValue.length),
                    (z = B.firstChild) !== null;

                )
                  (w = B), (B = z);
                for (;;) {
                  if (B === t) break e;
                  if (
                    (w === n && ++C === s && (y = f),
                    w === r && ++O === a && (S = f),
                    (z = B.nextSibling) !== null)
                  )
                    break;
                  (B = w), (w = B.parentNode);
                }
                B = z;
              }
              n = y === -1 || S === -1 ? null : { start: y, end: S };
            } else n = null;
          }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (
        Ic = { focusedElem: t, selectionRange: n }, vu = !1, $t = e;
        $t !== null;

      )
        if (
          ((e = $t), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
        )
          (t.return = e), ($t = t);
        else
          for (; $t !== null; ) {
            switch (((e = $t), (r = e.alternate), (t = e.flags), e.tag)) {
              case 0:
                if (
                  (t & 4) !== 0 &&
                  ((t = e.updateQueue),
                  (t = t !== null ? t.events : null),
                  t !== null)
                )
                  for (n = 0; n < t.length; n++)
                    (s = t[n]), (s.ref.impl = s.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((t & 1024) !== 0 && r !== null) {
                  (t = void 0),
                    (n = e),
                    (s = r.memoizedProps),
                    (r = r.memoizedState),
                    (a = n.stateNode);
                  try {
                    var F = Si(n.type, s);
                    (t = a.getSnapshotBeforeUpdate(F, r)),
                      (a.__reactInternalSnapshotBeforeUpdate = t);
                  } catch (nt) {
                    Et(n, n.return, nt);
                  }
                }
                break;
              case 3:
                if ((t & 1024) !== 0) {
                  if (
                    ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                  )
                    nf(t);
                  else if (n === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        nf(t);
                        break;
                      default:
                        t.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((t & 1024) !== 0) throw Error(o(163));
            }
            if (((t = e.sibling), t !== null)) {
              (t.return = e.return), ($t = t);
              break;
            }
            $t = e.return;
          }
    }
    function fg(t, e, n) {
      var a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          vn(t, n), a & 4 && dl(5, n);
          break;
        case 1:
          if ((vn(t, n), a & 4))
            if (((t = n.stateNode), e === null))
              try {
                t.componentDidMount();
              } catch (f) {
                Et(n, n.return, f);
              }
            else {
              var s = Si(n.type, e.memoizedProps);
              e = e.memoizedState;
              try {
                t.componentDidUpdate(
                  s,
                  e,
                  t.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (f) {
                Et(n, n.return, f);
              }
            }
          a & 64 && lg(n), a & 512 && ml(n, n.return);
          break;
        case 3:
          if ((vn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
            if (((e = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }
            try {
              Fp(t, e);
            } catch (f) {
              Et(n, n.return, f);
            }
          }
          break;
        case 27:
          e === null && a & 4 && rg(n);
        case 26:
        case 5:
          vn(t, n), e === null && a & 4 && ug(n), a & 512 && ml(n, n.return);
          break;
        case 12:
          vn(t, n);
          break;
        case 31:
          vn(t, n), a & 4 && mg(t, n);
          break;
        case 13:
          vn(t, n),
            a & 4 && pg(t, n),
            a & 64 &&
              ((t = n.memoizedState),
              t !== null &&
                ((t = t.dehydrated),
                t !== null && ((n = LT.bind(null, n)), aA(t, n))));
          break;
        case 22:
          if (((a = n.memoizedState !== null || yn), !a)) {
            (e = (e !== null && e.memoizedState !== null) || Jt), (s = yn);
            var r = Jt;
            (yn = a),
              (Jt = e) && !r
                ? xn(t, n, (n.subtreeFlags & 8772) !== 0)
                : vn(t, n),
              (yn = s),
              (Jt = r);
          }
          break;
        case 30:
          break;
        default:
          vn(t, n);
      }
    }
    function hg(t) {
      var e = t.alternate;
      e !== null && ((t.alternate = null), hg(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 && ((e = t.stateNode), e !== null && ur(e)),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
    }
    var Ot = null,
      me = !1;
    function gn(t, e, n) {
      for (n = n.child; n !== null; ) dg(t, e, n), (n = n.sibling);
    }
    function dg(t, e, n) {
      if (Se && typeof Se.onCommitFiberUnmount == "function")
        try {
          Se.onCommitFiberUnmount(La, n);
        } catch {}
      switch (n.tag) {
        case 26:
          Jt || en(n, e),
            gn(t, e, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
          break;
        case 27:
          Jt || en(n, e);
          var a = Ot,
            s = me;
          Kn(n.type) && ((Ot = n.stateNode), (me = !1)),
            gn(t, e, n),
            Al(n.stateNode),
            (Ot = a),
            (me = s);
          break;
        case 5:
          Jt || en(n, e);
        case 6:
          if (
            ((a = Ot),
            (s = me),
            (Ot = null),
            gn(t, e, n),
            (Ot = a),
            (me = s),
            Ot !== null)
          )
            if (me)
              try {
                (Ot.nodeType === 9
                  ? Ot.body
                  : Ot.nodeName === "HTML"
                    ? Ot.ownerDocument.body
                    : Ot
                ).removeChild(n.stateNode);
              } catch (r) {
                Et(n, e, r);
              }
            else
              try {
                Ot.removeChild(n.stateNode);
              } catch (r) {
                Et(n, e, r);
              }
          break;
        case 18:
          Ot !== null &&
            (me
              ? ((t = Ot),
                l0(
                  t.nodeType === 9
                    ? t.body
                    : t.nodeName === "HTML"
                      ? t.ownerDocument.body
                      : t,
                  n.stateNode,
                ),
                ga(t))
              : l0(Ot, n.stateNode));
          break;
        case 4:
          (a = Ot),
            (s = me),
            (Ot = n.stateNode.containerInfo),
            (me = !0),
            gn(t, e, n),
            (Ot = a),
            (me = s);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Hn(2, n, e), Jt || Hn(4, n, e), gn(t, e, n);
          break;
        case 1:
          Jt ||
            (en(n, e),
            (a = n.stateNode),
            typeof a.componentWillUnmount == "function" && sg(n, e, a)),
            gn(t, e, n);
          break;
        case 21:
          gn(t, e, n);
          break;
        case 22:
          (Jt = (a = Jt) || n.memoizedState !== null), gn(t, e, n), (Jt = a);
          break;
        default:
          gn(t, e, n);
      }
    }
    function mg(t, e) {
      if (
        e.memoizedState === null &&
        ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
      ) {
        t = t.dehydrated;
        try {
          ga(t);
        } catch (n) {
          Et(e, e.return, n);
        }
      }
    }
    function pg(t, e) {
      if (
        e.memoizedState === null &&
        ((t = e.alternate),
        t !== null &&
          ((t = t.memoizedState),
          t !== null && ((t = t.dehydrated), t !== null)))
      )
        try {
          ga(t);
        } catch (n) {
          Et(e, e.return, n);
        }
    }
    function zT(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new cg()), e;
        case 22:
          return (
            (t = t.stateNode),
            (e = t._retryCache),
            e === null && (e = t._retryCache = new cg()),
            e
          );
        default:
          throw Error(o(435, t.tag));
      }
    }
    function $s(t, e) {
      var n = zT(t);
      e.forEach(function (a) {
        if (!n.has(a)) {
          n.add(a);
          var s = HT.bind(null, t, a);
          a.then(s, s);
        }
      });
    }
    function pe(t, e) {
      var n = e.deletions;
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            r = t,
            f = e,
            y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Kn(y.type)) {
                  (Ot = y.stateNode), (me = !1);
                  break t;
                }
                break;
              case 5:
                (Ot = y.stateNode), (me = !1);
                break t;
              case 3:
              case 4:
                (Ot = y.stateNode.containerInfo), (me = !0);
                break t;
            }
            y = y.return;
          }
          if (Ot === null) throw Error(o(160));
          dg(r, f, s),
            (Ot = null),
            (me = !1),
            (r = s.alternate),
            r !== null && (r.return = null),
            (s.return = null);
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; ) yg(e, t), (e = e.sibling);
    }
    var Ke = null;
    function yg(t, e) {
      var n = t.alternate,
        a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          pe(e, t),
            ye(t),
            a & 4 && (Hn(3, t, t.return), dl(3, t), Hn(5, t, t.return));
          break;
        case 1:
          pe(e, t),
            ye(t),
            a & 512 && (Jt || n === null || en(n, n.return)),
            a & 64 &&
              yn &&
              ((t = t.updateQueue),
              t !== null &&
                ((a = t.callbacks),
                a !== null &&
                  ((n = t.shared.hiddenCallbacks),
                  (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
          break;
        case 26:
          var s = Ke;
          if (
            (pe(e, t),
            ye(t),
            a & 512 && (Jt || n === null || en(n, n.return)),
            a & 4)
          ) {
            var r = n !== null ? n.memoizedState : null;
            if (((a = t.memoizedState), n === null))
              if (a === null)
                if (t.stateNode === null) {
                  t: {
                    (a = t.type),
                      (n = t.memoizedProps),
                      (s = s.ownerDocument || s);
                    e: switch (a) {
                      case "title":
                        (r = s.getElementsByTagName("title")[0]),
                          (!r ||
                            r[Ya] ||
                            r[ne] ||
                            r.namespaceURI === "http://www.w3.org/2000/svg" ||
                            r.hasAttribute("itemprop")) &&
                            ((r = s.createElement(a)),
                            s.head.insertBefore(
                              r,
                              s.querySelector("head > title"),
                            )),
                          se(r, a, n),
                          (r[ne] = t),
                          Pt(r),
                          (a = r);
                        break t;
                      case "link":
                        var f = y0("link", "href", s).get(a + (n.href || ""));
                        if (f) {
                          for (var y = 0; y < f.length; y++)
                            if (
                              ((r = f[y]),
                              r.getAttribute("href") ===
                                (n.href == null || n.href === ""
                                  ? null
                                  : n.href) &&
                                r.getAttribute("rel") ===
                                  (n.rel == null ? null : n.rel) &&
                                r.getAttribute("title") ===
                                  (n.title == null ? null : n.title) &&
                                r.getAttribute("crossorigin") ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              f.splice(y, 1);
                              break e;
                            }
                        }
                        (r = s.createElement(a)),
                          se(r, a, n),
                          s.head.appendChild(r);
                        break;
                      case "meta":
                        if (
                          (f = y0("meta", "content", s).get(
                            a + (n.content || ""),
                          ))
                        ) {
                          for (y = 0; y < f.length; y++)
                            if (
                              ((r = f[y]),
                              r.getAttribute("content") ===
                                (n.content == null ? null : "" + n.content) &&
                                r.getAttribute("name") ===
                                  (n.name == null ? null : n.name) &&
                                r.getAttribute("property") ===
                                  (n.property == null ? null : n.property) &&
                                r.getAttribute("http-equiv") ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                r.getAttribute("charset") ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              f.splice(y, 1);
                              break e;
                            }
                        }
                        (r = s.createElement(a)),
                          se(r, a, n),
                          s.head.appendChild(r);
                        break;
                      default:
                        throw Error(o(468, a));
                    }
                    (r[ne] = t), Pt(r), (a = r);
                  }
                  t.stateNode = a;
                } else g0(s, t.type, t.stateNode);
              else t.stateNode = p0(s, a, t.memoizedProps);
            else
              r !== a
                ? (r === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : r.count--,
                  a === null
                    ? g0(s, t.type, t.stateNode)
                    : p0(s, a, t.memoizedProps))
                : a === null &&
                  t.stateNode !== null &&
                  wc(t, t.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          pe(e, t),
            ye(t),
            a & 512 && (Jt || n === null || en(n, n.return)),
            n !== null && a & 4 && wc(t, t.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (
            (pe(e, t),
            ye(t),
            a & 512 && (Jt || n === null || en(n, n.return)),
            t.flags & 32)
          ) {
            s = t.stateNode;
            try {
              qi(s, "");
            } catch (F) {
              Et(t, t.return, F);
            }
          }
          a & 4 &&
            t.stateNode != null &&
            ((s = t.memoizedProps), wc(t, s, n !== null ? n.memoizedProps : s)),
            a & 1024 && (Rc = !0);
          break;
        case 6:
          if ((pe(e, t), ye(t), a & 4)) {
            if (t.stateNode === null) throw Error(o(162));
            (a = t.memoizedProps), (n = t.stateNode);
            try {
              n.nodeValue = a;
            } catch (F) {
              Et(t, t.return, F);
            }
          }
          break;
        case 3:
          if (
            ((mu = null),
            (s = Ke),
            (Ke = hu(e.containerInfo)),
            pe(e, t),
            (Ke = s),
            ye(t),
            a & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              ga(e.containerInfo);
            } catch (F) {
              Et(t, t.return, F);
            }
          Rc && ((Rc = !1), gg(t));
          break;
        case 4:
          (a = Ke),
            (Ke = hu(t.stateNode.containerInfo)),
            pe(e, t),
            ye(t),
            (Ke = a);
          break;
        case 12:
          pe(e, t), ye(t);
          break;
        case 31:
          pe(e, t),
            ye(t),
            a & 4 &&
              ((a = t.updateQueue),
              a !== null && ((t.updateQueue = null), $s(t, a)));
          break;
        case 13:
          pe(e, t),
            ye(t),
            t.child.flags & 8192 &&
              (t.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (tu = be()),
            a & 4 &&
              ((a = t.updateQueue),
              a !== null && ((t.updateQueue = null), $s(t, a)));
          break;
        case 22:
          s = t.memoizedState !== null;
          var S = n !== null && n.memoizedState !== null,
            C = yn,
            O = Jt;
          if (
            ((yn = C || s),
            (Jt = O || S),
            pe(e, t),
            (Jt = O),
            (yn = C),
            ye(t),
            a & 8192)
          )
            t: for (
              e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (n === null || S || yn || Jt || Ti(t)),
                n = null,
                e = t;
              ;

            ) {
              if (e.tag === 5 || e.tag === 26) {
                if (n === null) {
                  S = n = e;
                  try {
                    if (((r = S.stateNode), s))
                      (f = r.style),
                        typeof f.setProperty == "function"
                          ? f.setProperty("display", "none", "important")
                          : (f.display = "none");
                    else {
                      y = S.stateNode;
                      var B = S.memoizedProps.style,
                        w =
                          B != null && B.hasOwnProperty("display")
                            ? B.display
                            : null;
                      y.style.display =
                        w == null || typeof w == "boolean"
                          ? ""
                          : ("" + w).trim();
                    }
                  } catch (F) {
                    Et(S, S.return, F);
                  }
                }
              } else if (e.tag === 6) {
                if (n === null) {
                  S = e;
                  try {
                    S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                  } catch (F) {
                    Et(S, S.return, F);
                  }
                }
              } else if (e.tag === 18) {
                if (n === null) {
                  S = e;
                  try {
                    var z = S.stateNode;
                    s ? s0(z, !0) : s0(S.stateNode, !1);
                  } catch (F) {
                    Et(S, S.return, F);
                  }
                }
              } else if (
                ((e.tag !== 22 && e.tag !== 23) ||
                  e.memoizedState === null ||
                  e === t) &&
                e.child !== null
              ) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break t;
                n === e && (n = null), (e = e.return);
              }
              n === e && (n = null),
                (e.sibling.return = e.return),
                (e = e.sibling);
            }
          a & 4 &&
            ((a = t.updateQueue),
            a !== null &&
              ((n = a.retryQueue),
              n !== null && ((a.retryQueue = null), $s(t, n))));
          break;
        case 19:
          pe(e, t),
            ye(t),
            a & 4 &&
              ((a = t.updateQueue),
              a !== null && ((t.updateQueue = null), $s(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          pe(e, t), ye(t);
      }
    }
    function ye(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var n, a = t.return; a !== null; ) {
            if (og(a)) {
              n = a;
              break;
            }
            a = a.return;
          }
          if (n == null) throw Error(o(160));
          switch (n.tag) {
            case 27:
              var s = n.stateNode,
                r = jc(t);
              Ps(t, r, s);
              break;
            case 5:
              var f = n.stateNode;
              n.flags & 32 && (qi(f, ""), (n.flags &= -33));
              var y = jc(t);
              Ps(t, y, f);
              break;
            case 3:
            case 4:
              var S = n.stateNode.containerInfo,
                C = jc(t);
              zc(t, C, S);
              break;
            default:
              throw Error(o(161));
          }
        } catch (O) {
          Et(t, t.return, O);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function gg(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          gg(e),
            e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
            (t = t.sibling);
        }
    }
    function vn(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; ) fg(t, e.alternate, e), (e = e.sibling);
    }
    function Ti(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Hn(4, e, e.return), Ti(e);
            break;
          case 1:
            en(e, e.return);
            var n = e.stateNode;
            typeof n.componentWillUnmount == "function" && sg(e, e.return, n),
              Ti(e);
            break;
          case 27:
            Al(e.stateNode);
          case 26:
          case 5:
            en(e, e.return), Ti(e);
            break;
          case 22:
            e.memoizedState === null && Ti(e);
            break;
          case 30:
            Ti(e);
            break;
          default:
            Ti(e);
        }
        t = t.sibling;
      }
    }
    function xn(t, e, n) {
      for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate,
          s = t,
          r = e,
          f = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            xn(s, r, n), dl(4, r);
            break;
          case 1:
            if (
              (xn(s, r, n),
              (a = r),
              (s = a.stateNode),
              typeof s.componentDidMount == "function")
            )
              try {
                s.componentDidMount();
              } catch (C) {
                Et(a, a.return, C);
              }
            if (((a = r), (s = a.updateQueue), s !== null)) {
              var y = a.stateNode;
              try {
                var S = s.shared.hiddenCallbacks;
                if (S !== null)
                  for (
                    s.shared.hiddenCallbacks = null, s = 0;
                    s < S.length;
                    s++
                  )
                    Jp(S[s], y);
              } catch (C) {
                Et(a, a.return, C);
              }
            }
            n && f & 64 && lg(r), ml(r, r.return);
            break;
          case 27:
            rg(r);
          case 26:
          case 5:
            xn(s, r, n), n && a === null && f & 4 && ug(r), ml(r, r.return);
            break;
          case 12:
            xn(s, r, n);
            break;
          case 31:
            xn(s, r, n), n && f & 4 && mg(s, r);
            break;
          case 13:
            xn(s, r, n), n && f & 4 && pg(s, r);
            break;
          case 22:
            r.memoizedState === null && xn(s, r, n), ml(r, r.return);
            break;
          case 30:
            break;
          default:
            xn(s, r, n);
        }
        e = e.sibling;
      }
    }
    function Nc(t, e) {
      var n = null;
      t !== null &&
        t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (n = t.memoizedState.cachePool.pool),
        (t = null),
        e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (t = e.memoizedState.cachePool.pool),
        t !== n && (t != null && t.refCount++, n != null && tl(n));
    }
    function Oc(t, e) {
      (t = null),
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        (e = e.memoizedState.cache),
        e !== t && (e.refCount++, t != null && tl(t));
    }
    function Qe(t, e, n, a) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) vg(t, e, n, a), (e = e.sibling);
    }
    function vg(t, e, n, a) {
      var s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Qe(t, e, n, a), s & 2048 && dl(9, e);
          break;
        case 1:
          Qe(t, e, n, a);
          break;
        case 3:
          Qe(t, e, n, a),
            s & 2048 &&
              ((t = null),
              e.alternate !== null && (t = e.alternate.memoizedState.cache),
              (e = e.memoizedState.cache),
              e !== t && (e.refCount++, t != null && tl(t)));
          break;
        case 12:
          if (s & 2048) {
            Qe(t, e, n, a), (t = e.stateNode);
            try {
              var r = e.memoizedProps,
                f = r.id,
                y = r.onPostCommit;
              typeof y == "function" &&
                y(
                  f,
                  e.alternate === null ? "mount" : "update",
                  t.passiveEffectDuration,
                  -0,
                );
            } catch (S) {
              Et(e, e.return, S);
            }
          } else Qe(t, e, n, a);
          break;
        case 31:
          Qe(t, e, n, a);
          break;
        case 13:
          Qe(t, e, n, a);
          break;
        case 23:
          break;
        case 22:
          (r = e.stateNode),
            (f = e.alternate),
            e.memoizedState !== null
              ? r._visibility & 2
                ? Qe(t, e, n, a)
                : pl(t, e)
              : r._visibility & 2
                ? Qe(t, e, n, a)
                : ((r._visibility |= 2),
                  sa(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
            s & 2048 && Nc(f, e);
          break;
        case 24:
          Qe(t, e, n, a), s & 2048 && Oc(e.alternate, e);
          break;
        default:
          Qe(t, e, n, a);
      }
    }
    function sa(t, e, n, a, s) {
      for (
        s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
        e !== null;

      ) {
        var r = t,
          f = e,
          y = n,
          S = a,
          C = f.flags;
        switch (f.tag) {
          case 0:
          case 11:
          case 15:
            sa(r, f, y, S, s), dl(8, f);
            break;
          case 23:
            break;
          case 22:
            var O = f.stateNode;
            f.memoizedState !== null
              ? O._visibility & 2
                ? sa(r, f, y, S, s)
                : pl(r, f)
              : ((O._visibility |= 2), sa(r, f, y, S, s)),
              s && C & 2048 && Nc(f.alternate, f);
            break;
          case 24:
            sa(r, f, y, S, s), s && C & 2048 && Oc(f.alternate, f);
            break;
          default:
            sa(r, f, y, S, s);
        }
        e = e.sibling;
      }
    }
    function pl(t, e) {
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) {
          var n = t,
            a = e,
            s = a.flags;
          switch (a.tag) {
            case 22:
              pl(n, a), s & 2048 && Nc(a.alternate, a);
              break;
            case 24:
              pl(n, a), s & 2048 && Oc(a.alternate, a);
              break;
            default:
              pl(n, a);
          }
          e = e.sibling;
        }
    }
    var yl = 8192;
    function ua(t, e, n) {
      if (t.subtreeFlags & yl)
        for (t = t.child; t !== null; ) xg(t, e, n), (t = t.sibling);
    }
    function xg(t, e, n) {
      switch (t.tag) {
        case 26:
          ua(t, e, n),
            t.flags & yl &&
              t.memoizedState !== null &&
              yA(n, Ke, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          ua(t, e, n);
          break;
        case 3:
        case 4:
          var a = Ke;
          (Ke = hu(t.stateNode.containerInfo)), ua(t, e, n), (Ke = a);
          break;
        case 22:
          t.memoizedState === null &&
            ((a = t.alternate),
            a !== null && a.memoizedState !== null
              ? ((a = yl), (yl = 16777216), ua(t, e, n), (yl = a))
              : ua(t, e, n));
          break;
        default:
          ua(t, e, n);
      }
    }
    function bg(t) {
      var e = t.alternate;
      if (e !== null && ((t = e.child), t !== null)) {
        e.child = null;
        do (e = t.sibling), (t.sibling = null), (t = e);
        while (t !== null);
      }
    }
    function gl(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ($t = a), Tg(a, t);
          }
        bg(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) Sg(t), (t = t.sibling);
    }
    function Sg(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          gl(t), t.flags & 2048 && Hn(9, t, t.return);
          break;
        case 3:
          gl(t);
          break;
        case 12:
          gl(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null &&
          e._visibility & 2 &&
          (t.return === null || t.return.tag !== 13)
            ? ((e._visibility &= -3), Is(t))
            : gl(t);
          break;
        default:
          gl(t);
      }
    }
    function Is(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ($t = a), Tg(a, t);
          }
        bg(t);
      }
      for (t = t.child; t !== null; ) {
        switch (((e = t), e.tag)) {
          case 0:
          case 11:
          case 15:
            Hn(8, e, e.return), Is(e);
            break;
          case 22:
            (n = e.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Is(e));
            break;
          default:
            Is(e);
        }
        t = t.sibling;
      }
    }
    function Tg(t, e) {
      for (; $t !== null; ) {
        var n = $t;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Hn(8, n, e);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var a = n.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            tl(n.memoizedState.cache);
        }
        if (((a = n.child), a !== null)) (a.return = n), ($t = a);
        else
          t: for (n = t; $t !== null; ) {
            a = $t;
            var s = a.sibling,
              r = a.return;
            if ((hg(a), a === n)) {
              $t = null;
              break t;
            }
            if (s !== null) {
              (s.return = r), ($t = s);
              break t;
            }
            $t = r;
          }
      }
    }
    var RT = {
        getCacheForType: function (t) {
          var e = ae(Zt),
            n = e.data.get(t);
          return n === void 0 && ((n = t()), e.data.set(t, n)), n;
        },
        cacheSignal: function () {
          return ae(Zt).controller.signal;
        },
      },
      NT = typeof WeakMap == "function" ? WeakMap : Map,
      St = 0,
      zt = null,
      ft = null,
      dt = 0,
      At = 0,
      Ce = null,
      qn = !1,
      oa = !1,
      Vc = !1,
      bn = 0,
      Ut = 0,
      Yn = 0,
      Ai = 0,
      _c = 0,
      we = 0,
      ra = 0,
      vl = null,
      ge = null,
      Bc = !1,
      tu = 0,
      Ag = 0,
      eu = 1 / 0,
      nu = null,
      Gn = null,
      Wt = 0,
      Xn = null,
      ca = null,
      Sn = 0,
      Uc = 0,
      Lc = null,
      Eg = null,
      xl = 0,
      Hc = null;
    function je() {
      return (St & 2) !== 0 && dt !== 0 ? dt & -dt : R.T !== null ? Zc() : qm();
    }
    function Mg() {
      if (we === 0)
        if ((dt & 536870912) === 0 || gt) {
          var t = cs;
          (cs <<= 1), (cs & 3932160) === 0 && (cs = 262144), (we = t);
        } else we = 536870912;
      return (t = Me.current), t !== null && (t.flags |= 32), we;
    }
    function ve(t, e, n) {
      ((t === zt && (At === 2 || At === 9)) ||
        t.cancelPendingCommit !== null) &&
        (fa(t, 0), kn(t, dt, we, !1)),
        qa(t, n),
        ((St & 2) === 0 || t !== zt) &&
          (t === zt &&
            ((St & 2) === 0 && (Ai |= n), Ut === 4 && kn(t, dt, we, !1)),
          nn(t));
    }
    function Dg(t, e, n) {
      if ((St & 6) !== 0) throw Error(o(327));
      var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ha(t, e),
        s = a ? _T(t, e) : Yc(t, e, !0),
        r = a;
      do {
        if (s === 0) {
          oa && !a && kn(t, e, 0, !1);
          break;
        } else {
          if (((n = t.current.alternate), r && !OT(n))) {
            (s = Yc(t, e, !1)), (r = !1);
            continue;
          }
          if (s === 2) {
            if (((r = e), t.errorRecoveryDisabledLanes & r)) var f = 0;
            else
              (f = t.pendingLanes & -536870913),
                (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
            if (f !== 0) {
              e = f;
              t: {
                var y = t;
                s = vl;
                var S = y.current.memoizedState.isDehydrated;
                if (
                  (S && (fa(y, f).flags |= 256), (f = Yc(y, f, !1)), f !== 2)
                ) {
                  if (Vc && !S) {
                    (y.errorRecoveryDisabledLanes |= r), (Ai |= r), (s = 4);
                    break t;
                  }
                  (r = ge),
                    (ge = s),
                    r !== null &&
                      (ge === null ? (ge = r) : ge.push.apply(ge, r));
                }
                s = f;
              }
              if (((r = !1), s !== 2)) continue;
            }
          }
          if (s === 1) {
            fa(t, 0), kn(t, e, 0, !0);
            break;
          }
          t: {
            switch (((a = t), (r = s), r)) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                kn(a, e, we, !qn);
                break t;
              case 2:
                ge = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((e & 62914560) === e && ((s = tu + 300 - be()), 10 < s)) {
              if ((kn(a, e, we, !qn), hs(a, 0, !0) !== 0)) break t;
              (Sn = e),
                (a.timeoutHandle = i0(
                  Cg.bind(
                    null,
                    a,
                    n,
                    ge,
                    nu,
                    Bc,
                    e,
                    we,
                    Ai,
                    ra,
                    qn,
                    r,
                    "Throttled",
                    -0,
                    0,
                  ),
                  s,
                ));
              break t;
            }
            Cg(a, n, ge, nu, Bc, e, we, Ai, ra, qn, r, null, -0, 0);
          }
        }
        break;
      } while (!0);
      nn(t);
    }
    function Cg(t, e, n, a, s, r, f, y, S, C, O, B, w, z) {
      if (
        ((t.timeoutHandle = -1),
        (B = e.subtreeFlags),
        B & 8192 || (B & 16785408) === 16785408)
      ) {
        (B = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: sn,
        }),
          xg(e, r, B);
        var F =
          (r & 62914560) === r
            ? tu - be()
            : (r & 4194048) === r
              ? Ag - be()
              : 0;
        if (((F = gA(B, F)), F !== null)) {
          (Sn = r),
            (t.cancelPendingCommit = F(
              _g.bind(null, t, e, r, n, a, s, f, y, S, O, B, null, w, z),
            )),
            kn(t, r, f, !C);
          return;
        }
      }
      _g(t, e, r, n, a, s, f, y, S);
    }
    function OT(t) {
      for (var e = t; ; ) {
        var n = e.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          e.flags & 16384 &&
          ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var a = 0; a < n.length; a++) {
            var s = n[a],
              r = s.getSnapshot;
            s = s.value;
            try {
              if (!Ae(r(), s)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
          (n.return = e), (e = n);
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      }
      return !0;
    }
    function kn(t, e, n, a) {
      (e &= ~_c),
        (e &= ~Ai),
        (t.suspendedLanes |= e),
        (t.pingedLanes &= ~e),
        a && (t.warmLanes |= e),
        (a = t.expirationTimes);
      for (var s = e; 0 < s; ) {
        var r = 31 - Te(s),
          f = 1 << r;
        (a[r] = -1), (s &= ~f);
      }
      n !== 0 && Um(t, n, e);
    }
    function iu() {
      return (St & 6) === 0 ? (bl(0), !1) : !0;
    }
    function qc() {
      if (ft !== null) {
        if (At === 0) var t = ft.return;
        else (t = ft), (cn = mi = null), nc(t), (ea = null), (nl = 0), (t = ft);
        for (; t !== null; ) ag(t.alternate, t), (t = t.return);
        ft = null;
      }
    }
    function fa(t, e) {
      var n = t.timeoutHandle;
      n !== -1 && ((t.timeoutHandle = -1), IT(n)),
        (n = t.cancelPendingCommit),
        n !== null && ((t.cancelPendingCommit = null), n()),
        (Sn = 0),
        qc(),
        (zt = t),
        (ft = n = on(t.current, null)),
        (dt = e),
        (At = 0),
        (Ce = null),
        (qn = !1),
        (oa = Ha(t, e)),
        (Vc = !1),
        (ra = we = _c = Ai = Yn = Ut = 0),
        (ge = vl = null),
        (Bc = !1),
        (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0)
        for (t = t.entanglements, a &= e; 0 < a; ) {
          var s = 31 - Te(a),
            r = 1 << s;
          (e |= t[s]), (a &= ~r);
        }
      return (bn = e), Es(), n;
    }
    function wg(t, e) {
      (ut = null),
        (R.H = cl),
        e === ta || e === Ns
          ? ((e = kp()), (At = 3))
          : e === kr
            ? ((e = kp()), (At = 4))
            : (At =
                e === vc
                  ? 8
                  : e !== null &&
                      typeof e == "object" &&
                      typeof e.then == "function"
                    ? 6
                    : 1),
        (Ce = e),
        ft === null && ((Ut = 1), Ks(t, _e(e, t.current)));
    }
    function jg() {
      var t = Me.current;
      return t === null
        ? !0
        : (dt & 4194048) === dt
          ? He === null
          : (dt & 62914560) === dt || (dt & 536870912) !== 0
            ? t === He
            : !1;
    }
    function zg() {
      var t = R.H;
      return (R.H = cl), t === null ? cl : t;
    }
    function Rg() {
      var t = R.A;
      return (R.A = RT), t;
    }
    function au() {
      (Ut = 4),
        qn || ((dt & 4194048) !== dt && Me.current !== null) || (oa = !0),
        ((Yn & 134217727) === 0 && (Ai & 134217727) === 0) ||
          zt === null ||
          kn(zt, dt, we, !1);
    }
    function Yc(t, e, n) {
      var a = St;
      St |= 2;
      var s = zg(),
        r = Rg();
      (zt !== t || dt !== e) && ((nu = null), fa(t, e)), (e = !1);
      var f = Ut;
      t: do
        try {
          if (At !== 0 && ft !== null) {
            var y = ft,
              S = Ce;
            switch (At) {
              case 8:
                qc(), (f = 6);
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                Me.current === null && (e = !0);
                var C = At;
                if (((At = 0), (Ce = null), ha(t, y, S, C), n && oa)) {
                  f = 0;
                  break t;
                }
                break;
              default:
                (C = At), (At = 0), (Ce = null), ha(t, y, S, C);
            }
          }
          VT(), (f = Ut);
          break;
        } catch (O) {
          wg(t, O);
        }
      while (!0);
      return (
        e && t.shellSuspendCounter++,
        (cn = mi = null),
        (St = a),
        (R.H = s),
        (R.A = r),
        ft === null && ((zt = null), (dt = 0), Es()),
        f
      );
    }
    function VT() {
      for (; ft !== null; ) Ng(ft);
    }
    function _T(t, e) {
      var n = St;
      St |= 2;
      var a = zg(),
        s = Rg();
      zt !== t || dt !== e
        ? ((nu = null), (eu = be() + 500), fa(t, e))
        : (oa = Ha(t, e));
      t: do
        try {
          if (At !== 0 && ft !== null) {
            e = ft;
            var r = Ce;
            e: switch (At) {
              case 1:
                (At = 0), (Ce = null), ha(t, e, r, 1);
                break;
              case 2:
              case 9:
                if (Gp(r)) {
                  (At = 0), (Ce = null), Og(e);
                  break;
                }
                (e = function () {
                  (At !== 2 && At !== 9) || zt !== t || (At = 7), nn(t);
                }),
                  r.then(e, e);
                break t;
              case 3:
                At = 7;
                break t;
              case 4:
                At = 5;
                break t;
              case 7:
                Gp(r)
                  ? ((At = 0), (Ce = null), Og(e))
                  : ((At = 0), (Ce = null), ha(t, e, r, 7));
                break;
              case 5:
                var f = null;
                switch (ft.tag) {
                  case 26:
                    f = ft.memoizedState;
                  case 5:
                  case 27:
                    var y = ft;
                    if (f ? v0(f) : y.stateNode.complete) {
                      (At = 0), (Ce = null);
                      var S = y.sibling;
                      if (S !== null) ft = S;
                      else {
                        var C = y.return;
                        C !== null ? ((ft = C), lu(C)) : (ft = null);
                      }
                      break e;
                    }
                }
                (At = 0), (Ce = null), ha(t, e, r, 5);
                break;
              case 6:
                (At = 0), (Ce = null), ha(t, e, r, 6);
                break;
              case 8:
                qc(), (Ut = 6);
                break t;
              default:
                throw Error(o(462));
            }
          }
          BT();
          break;
        } catch (O) {
          wg(t, O);
        }
      while (!0);
      return (
        (cn = mi = null),
        (R.H = a),
        (R.A = s),
        (St = n),
        ft !== null ? 0 : ((zt = null), (dt = 0), Es(), Ut)
      );
    }
    function BT() {
      for (; ft !== null && !l2(); ) Ng(ft);
    }
    function Ng(t) {
      var e = ng(t.alternate, t, bn);
      (t.memoizedProps = t.pendingProps), e === null ? lu(t) : (ft = e);
    }
    function Og(t) {
      var e = t,
        n = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Wy(n, e, e.pendingProps, e.type, void 0, dt);
          break;
        case 11:
          e = Wy(n, e, e.pendingProps, e.type.render, e.ref, dt);
          break;
        case 5:
          nc(e);
        default:
          ag(n, e), (e = ft = Rp(e, bn)), (e = ng(n, e, bn));
      }
      (t.memoizedProps = t.pendingProps), e === null ? lu(t) : (ft = e);
    }
    function ha(t, e, n, a) {
      (cn = mi = null), nc(e), (ea = null), (nl = 0);
      var s = e.return;
      try {
        if (ET(t, s, e, n, dt)) {
          (Ut = 1), Ks(t, _e(n, t.current)), (ft = null);
          return;
        }
      } catch (r) {
        if (s !== null) throw ((ft = s), r);
        (Ut = 1), Ks(t, _e(n, t.current)), (ft = null);
        return;
      }
      e.flags & 32768
        ? (gt || a === 1
            ? (t = !0)
            : oa || (dt & 536870912) !== 0
              ? (t = !1)
              : ((qn = t = !0),
                (a === 2 || a === 9 || a === 3 || a === 6) &&
                  ((a = Me.current),
                  a !== null && a.tag === 13 && (a.flags |= 16384))),
          Vg(e, t))
        : lu(e);
    }
    function lu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Vg(e, qn);
          return;
        }
        t = e.return;
        var n = CT(e.alternate, e, bn);
        if (n !== null) {
          ft = n;
          return;
        }
        if (((e = e.sibling), e !== null)) {
          ft = e;
          return;
        }
        ft = e = t;
      } while (e !== null);
      Ut === 0 && (Ut = 5);
    }
    function Vg(t, e) {
      do {
        var n = wT(t.alternate, t);
        if (n !== null) {
          (n.flags &= 32767), (ft = n);
          return;
        }
        if (
          ((n = t.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !e && ((t = t.sibling), t !== null))
        ) {
          ft = t;
          return;
        }
        ft = t = n;
      } while (t !== null);
      (Ut = 6), (ft = null);
    }
    function _g(t, e, n, a, s, r, f, y, S) {
      t.cancelPendingCommit = null;
      do su();
      while (Wt !== 0);
      if ((St & 6) !== 0) throw Error(o(327));
      if (e !== null) {
        if (e === t.current) throw Error(o(177));
        if (
          ((r = e.lanes | e.childLanes),
          (r |= jr),
          p2(t, n, r, f, y, S),
          t === zt && ((ft = zt = null), (dt = 0)),
          (ca = e),
          (Xn = t),
          (Sn = n),
          (Uc = r),
          (Lc = s),
          (Eg = a),
          (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
            ? ((t.callbackNode = null),
              (t.callbackPriority = 0),
              qT(os, function () {
                return qg(), null;
              }))
            : ((t.callbackNode = null), (t.callbackPriority = 0)),
          (a = (e.flags & 13878) !== 0),
          (e.subtreeFlags & 13878) !== 0 || a)
        ) {
          (a = R.T), (R.T = null), (s = k.p), (k.p = 2), (f = St), (St |= 4);
          try {
            jT(t, e, n);
          } finally {
            (St = f), (k.p = s), (R.T = a);
          }
        }
        (Wt = 1), Bg(), Ug(), Lg();
      }
    }
    function Bg() {
      if (Wt === 1) {
        Wt = 0;
        var t = Xn,
          e = ca,
          n = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || n) {
          (n = R.T), (R.T = null);
          var a = k.p;
          k.p = 2;
          var s = St;
          St |= 4;
          try {
            yg(e, t);
            var r = Ic,
              f = Tp(t.containerInfo),
              y = r.focusedElem,
              S = r.selectionRange;
            if (
              f !== y &&
              y &&
              y.ownerDocument &&
              Sp(y.ownerDocument.documentElement, y)
            ) {
              if (S !== null && Er(y)) {
                var C = S.start,
                  O = S.end;
                if ((O === void 0 && (O = C), "selectionStart" in y))
                  (y.selectionStart = C),
                    (y.selectionEnd = Math.min(O, y.value.length));
                else {
                  var B = y.ownerDocument || document,
                    w = (B && B.defaultView) || window;
                  if (w.getSelection) {
                    var z = w.getSelection(),
                      F = y.textContent.length,
                      nt = Math.min(S.start, F),
                      Ct = S.end === void 0 ? nt : Math.min(S.end, F);
                    !z.extend && nt > Ct && ((f = Ct), (Ct = nt), (nt = f));
                    var M = bp(y, nt),
                      A = bp(y, Ct);
                    if (
                      M &&
                      A &&
                      (z.rangeCount !== 1 ||
                        z.anchorNode !== M.node ||
                        z.anchorOffset !== M.offset ||
                        z.focusNode !== A.node ||
                        z.focusOffset !== A.offset)
                    ) {
                      var D = B.createRange();
                      D.setStart(M.node, M.offset),
                        z.removeAllRanges(),
                        nt > Ct
                          ? (z.addRange(D), z.extend(A.node, A.offset))
                          : (D.setEnd(A.node, A.offset), z.addRange(D));
                    }
                  }
                }
              }
              for (B = [], z = y; (z = z.parentNode); )
                z.nodeType === 1 &&
                  B.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
              for (
                typeof y.focus == "function" && y.focus(), y = 0;
                y < B.length;
                y++
              ) {
                var V = B[y];
                (V.element.scrollLeft = V.left), (V.element.scrollTop = V.top);
              }
            }
            (vu = !!$c), (Ic = $c = null);
          } finally {
            (St = s), (k.p = a), (R.T = n);
          }
        }
        (t.current = e), (Wt = 2);
      }
    }
    function Ug() {
      if (Wt === 2) {
        Wt = 0;
        var t = Xn,
          e = ca,
          n = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || n) {
          (n = R.T), (R.T = null);
          var a = k.p;
          k.p = 2;
          var s = St;
          St |= 4;
          try {
            fg(t, e.alternate, e);
          } finally {
            (St = s), (k.p = a), (R.T = n);
          }
        }
        Wt = 3;
      }
    }
    function Lg() {
      if (Wt === 4 || Wt === 3) {
        (Wt = 0), s2();
        var t = Xn,
          e = ca,
          n = Sn,
          a = Eg;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? (Wt = 5)
          : ((Wt = 0), (ca = Xn = null), Hg(t, t.pendingLanes));
        var s = t.pendingLanes;
        if (
          (s === 0 && (Gn = null),
          lr(n),
          (e = e.stateNode),
          Se && typeof Se.onCommitFiberRoot == "function")
        )
          try {
            Se.onCommitFiberRoot(
              La,
              e,
              void 0,
              (e.current.flags & 128) === 128,
            );
          } catch {}
        if (a !== null) {
          (e = R.T), (s = k.p), (k.p = 2), (R.T = null);
          try {
            for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
              var y = a[f];
              r(y.value, { componentStack: y.stack });
            }
          } finally {
            (R.T = e), (k.p = s);
          }
        }
        (Sn & 3) !== 0 && su(),
          nn(t),
          (s = t.pendingLanes),
          (n & 261930) !== 0 && (s & 42) !== 0
            ? t === Hc
              ? xl++
              : ((xl = 0), (Hc = t))
            : (xl = 0),
          bl(0);
      }
    }
    function Hg(t, e) {
      (t.pooledCacheLanes &= e) === 0 &&
        ((e = t.pooledCache), e != null && ((t.pooledCache = null), tl(e)));
    }
    function su() {
      return Bg(), Ug(), Lg(), qg();
    }
    function qg() {
      if (Wt !== 5) return !1;
      var t = Xn,
        e = Uc;
      Uc = 0;
      var n = lr(Sn),
        a = R.T,
        s = k.p;
      try {
        (k.p = 32 > n ? 32 : n), (R.T = null), (n = Lc), (Lc = null);
        var r = Xn,
          f = Sn;
        if (((Wt = 0), (ca = Xn = null), (Sn = 0), (St & 6) !== 0))
          throw Error(o(331));
        var y = St;
        if (
          ((St |= 4),
          Sg(r.current),
          vg(r, r.current, f, n),
          (St = y),
          bl(0, !1),
          Se && typeof Se.onPostCommitFiberRoot == "function")
        )
          try {
            Se.onPostCommitFiberRoot(La, r);
          } catch {}
        return !0;
      } finally {
        (k.p = s), (R.T = a), Hg(t, e);
      }
    }
    function Yg(t, e, n) {
      (e = _e(n, e)),
        (e = gc(t.stateNode, e, 2)),
        (t = Bn(t, e, 2)),
        t !== null && (qa(t, 2), nn(t));
    }
    function Et(t, e, n) {
      if (t.tag === 3) Yg(t, t, n);
      else
        for (; e !== null; ) {
          if (e.tag === 3) {
            Yg(e, t, n);
            break;
          } else if (e.tag === 1) {
            var a = e.stateNode;
            if (
              typeof e.type.getDerivedStateFromError == "function" ||
              (typeof a.componentDidCatch == "function" &&
                (Gn === null || !Gn.has(a)))
            ) {
              (t = _e(n, t)),
                (n = Gy(2)),
                (a = Bn(e, n, 2)),
                a !== null && (Xy(n, a, e, t), qa(a, 2), nn(a));
              break;
            }
          }
          e = e.return;
        }
    }
    function Gc(t, e, n) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new NT();
        var s = new Set();
        a.set(e, s);
      } else (s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s));
      s.has(n) ||
        ((Vc = !0), s.add(n), (t = UT.bind(null, t, e, n)), e.then(t, t));
    }
    function UT(t, e, n) {
      var a = t.pingCache;
      a !== null && a.delete(e),
        (t.pingedLanes |= t.suspendedLanes & n),
        (t.warmLanes &= ~n),
        zt === t &&
          (dt & n) === n &&
          (Ut === 4 || (Ut === 3 && (dt & 62914560) === dt && 300 > be() - tu)
            ? (St & 2) === 0 && fa(t, 0)
            : (_c |= n),
          ra === dt && (ra = 0)),
        nn(t);
    }
    function Gg(t, e) {
      e === 0 && (e = Bm()), (t = fi(t, e)), t !== null && (qa(t, e), nn(t));
    }
    function LT(t) {
      var e = t.memoizedState,
        n = 0;
      e !== null && (n = e.retryLane), Gg(t, n);
    }
    function HT(t, e) {
      var n = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode,
            s = t.memoizedState;
          s !== null && (n = s.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      a !== null && a.delete(e), Gg(t, n);
    }
    function qT(t, e) {
      return er(t, e);
    }
    var uu = null,
      da = null,
      Xc = !1,
      ou = !1,
      kc = !1,
      Zn = 0;
    function nn(t) {
      t !== da &&
        t.next === null &&
        (da === null ? (uu = da = t) : (da = da.next = t)),
        (ou = !0),
        Xc || ((Xc = !0), GT());
    }
    function bl(t, e) {
      if (!kc && ou) {
        kc = !0;
        do
          for (var n = !1, a = uu; a !== null; ) {
            if (t !== 0) {
              var s = a.pendingLanes;
              if (s === 0) var r = 0;
              else {
                var f = a.suspendedLanes,
                  y = a.pingedLanes;
                (r = (1 << (31 - Te(42 | t) + 1)) - 1),
                  (r &= s & ~(f & ~y)),
                  (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0);
              }
              r !== 0 && ((n = !0), Kg(a, r));
            } else
              (r = dt),
                (r = hs(
                  a,
                  a === zt ? r : 0,
                  a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
                )),
                (r & 3) === 0 || Ha(a, r) || ((n = !0), Kg(a, r));
            a = a.next;
          }
        while (n);
        kc = !1;
      }
    }
    function YT() {
      Xg();
    }
    function Xg() {
      ou = Xc = !1;
      var t = 0;
      Zn !== 0 && $T() && (t = Zn);
      for (var e = be(), n = null, a = uu; a !== null; ) {
        var s = a.next,
          r = kg(a, e);
        r === 0
          ? ((a.next = null),
            n === null ? (uu = s) : (n.next = s),
            s === null && (da = n))
          : ((n = a), (t !== 0 || (r & 3) !== 0) && (ou = !0)),
          (a = s);
      }
      (Wt !== 0 && Wt !== 5) || bl(t), Zn !== 0 && (Zn = 0);
    }
    function kg(t, e) {
      for (
        var n = t.suspendedLanes,
          a = t.pingedLanes,
          s = t.expirationTimes,
          r = t.pendingLanes & -62914561;
        0 < r;

      ) {
        var f = 31 - Te(r),
          y = 1 << f,
          S = s[f];
        S === -1
          ? ((y & n) === 0 || (y & a) !== 0) && (s[f] = m2(y, e))
          : S <= e && (t.expiredLanes |= y),
          (r &= ~y);
      }
      if (
        ((e = zt),
        (n = dt),
        (n = hs(
          t,
          t === e ? n : 0,
          t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
        )),
        (a = t.callbackNode),
        n === 0 ||
          (t === e && (At === 2 || At === 9)) ||
          t.cancelPendingCommit !== null)
      )
        return (
          a !== null && a !== null && nr(a),
          (t.callbackNode = null),
          (t.callbackPriority = 0)
        );
      if ((n & 3) === 0 || Ha(t, n)) {
        if (((e = n & -n), e === t.callbackPriority)) return e;
        switch ((a !== null && nr(a), lr(n))) {
          case 2:
          case 8:
            n = Vm;
            break;
          case 32:
            n = os;
            break;
          case 268435456:
            n = _m;
            break;
          default:
            n = os;
        }
        return (
          (a = Zg.bind(null, t)),
          (n = er(n, a)),
          (t.callbackPriority = e),
          (t.callbackNode = n),
          e
        );
      }
      return (
        a !== null && a !== null && nr(a),
        (t.callbackPriority = 2),
        (t.callbackNode = null),
        2
      );
    }
    function Zg(t, e) {
      if (Wt !== 0 && Wt !== 5)
        return (t.callbackNode = null), (t.callbackPriority = 0), null;
      var n = t.callbackNode;
      if (su() && t.callbackNode !== n) return null;
      var a = dt;
      return (
        (a = hs(
          t,
          t === zt ? a : 0,
          t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
        )),
        a === 0
          ? null
          : (Dg(t, a, e),
            kg(t, be()),
            t.callbackNode != null && t.callbackNode === n
              ? Zg.bind(null, t)
              : null)
      );
    }
    function Kg(t, e) {
      if (su()) return null;
      Dg(t, e, !0);
    }
    function GT() {
      tA(function () {
        (St & 6) !== 0 ? er(Om, YT) : Xg();
      });
    }
    function Zc() {
      if (Zn === 0) {
        var t = $i;
        t === 0 && ((t = rs), (rs <<= 1), (rs & 261888) === 0 && (rs = 256)),
          (Zn = t);
      }
      return Zn;
    }
    function Qg(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean"
        ? null
        : typeof t == "function"
          ? t
          : ys("" + t);
    }
    function Jg(t, e) {
      var n = e.ownerDocument.createElement("input");
      return (
        (n.name = e.name),
        (n.value = e.value),
        t.id && n.setAttribute("form", t.id),
        e.parentNode.insertBefore(n, e),
        (t = new FormData(t)),
        n.parentNode.removeChild(n),
        t
      );
    }
    function XT(t, e, n, a, s) {
      if (e === "submit" && n && n.stateNode === s) {
        var r = Qg((s[he] || null).action),
          f = a.submitter;
        f &&
          ((e = (e = f[he] || null)
            ? Qg(e.formAction)
            : f.getAttribute("formAction")),
          e !== null && ((r = e), (f = null)));
        var y = new bs("action", "action", null, a, s);
        t.push({
          event: y,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (a.defaultPrevented) {
                  if (Zn !== 0) {
                    var S = f ? Jg(s, f) : new FormData(s);
                    fc(
                      n,
                      { pending: !0, data: S, method: s.method, action: r },
                      null,
                      S,
                    );
                  }
                } else
                  typeof r == "function" &&
                    (y.preventDefault(),
                    (S = f ? Jg(s, f) : new FormData(s)),
                    fc(
                      n,
                      { pending: !0, data: S, method: s.method, action: r },
                      r,
                      S,
                    ));
              },
              currentTarget: s,
            },
          ],
        });
      }
    }
    for (var Kc = 0; Kc < wr.length; Kc++) {
      var Qc = wr[Kc],
        kT = Qc.toLowerCase(),
        ZT = Qc[0].toUpperCase() + Qc.slice(1);
      Ze(kT, "on" + ZT);
    }
    Ze(Mp, "onAnimationEnd"),
      Ze(Dp, "onAnimationIteration"),
      Ze(Cp, "onAnimationStart"),
      Ze("dblclick", "onDoubleClick"),
      Ze("focusin", "onFocus"),
      Ze("focusout", "onBlur"),
      Ze(uT, "onTransitionRun"),
      Ze(oT, "onTransitionStart"),
      Ze(rT, "onTransitionCancel"),
      Ze(wp, "onTransitionEnd"),
      Li("onMouseEnter", ["mouseout", "mouseover"]),
      Li("onMouseLeave", ["mouseout", "mouseover"]),
      Li("onPointerEnter", ["pointerout", "pointerover"]),
      Li("onPointerLeave", ["pointerout", "pointerover"]),
      ui(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " ",
        ),
      ),
      ui(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " ",
        ),
      ),
      ui("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      ui(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" "),
      ),
      ui(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" "),
      ),
      ui(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(
          " ",
        ),
      );
    var Sl =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      KT = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(Sl),
      );
    function Fg(t, e) {
      e = (e & 4) !== 0;
      for (var n = 0; n < t.length; n++) {
        var a = t[n],
          s = a.event;
        a = a.listeners;
        t: {
          var r = void 0;
          if (e)
            for (var f = a.length - 1; 0 <= f; f--) {
              var y = a[f],
                S = y.instance,
                C = y.currentTarget;
              if (((y = y.listener), S !== r && s.isPropagationStopped()))
                break t;
              (r = y), (s.currentTarget = C);
              try {
                r(s);
              } catch (O) {
                As(O);
              }
              (s.currentTarget = null), (r = S);
            }
          else
            for (f = 0; f < a.length; f++) {
              if (
                ((y = a[f]),
                (S = y.instance),
                (C = y.currentTarget),
                (y = y.listener),
                S !== r && s.isPropagationStopped())
              )
                break t;
              (r = y), (s.currentTarget = C);
              try {
                r(s);
              } catch (O) {
                As(O);
              }
              (s.currentTarget = null), (r = S);
            }
        }
      }
    }
    function ht(t, e) {
      var n = e[sr];
      n === void 0 && (n = e[sr] = new Set());
      var a = t + "__bubble";
      n.has(a) || (Wg(e, t, 2, !1), n.add(a));
    }
    function Jc(t, e, n) {
      var a = 0;
      e && (a |= 4), Wg(n, t, a, e);
    }
    var ru = "_reactListening" + Math.random().toString(36).slice(2);
    function Fc(t) {
      if (!t[ru]) {
        (t[ru] = !0),
          Xm.forEach(function (n) {
            n !== "selectionchange" &&
              (KT.has(n) || Jc(n, !1, t), Jc(n, !0, t));
          });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[ru] || ((e[ru] = !0), Jc("selectionchange", !1, e));
      }
    }
    function Wg(t, e, n, a) {
      switch (M0(e)) {
        case 2:
          var s = bA;
          break;
        case 8:
          s = SA;
          break;
        default:
          s = ff;
      }
      (n = s.bind(null, e, n, t)),
        (s = void 0),
        !pr ||
          (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
          (s = !0),
        a
          ? s !== void 0
            ? t.addEventListener(e, n, { capture: !0, passive: s })
            : t.addEventListener(e, n, !0)
          : s !== void 0
            ? t.addEventListener(e, n, { passive: s })
            : t.addEventListener(e, n, !1);
    }
    function Wc(t, e, n, a, s) {
      var r = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
        t: for (;;) {
          if (a === null) return;
          var f = a.tag;
          if (f === 3 || f === 4) {
            var y = a.stateNode.containerInfo;
            if (y === s) break;
            if (f === 4)
              for (f = a.return; f !== null; ) {
                var S = f.tag;
                if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                  return;
                f = f.return;
              }
            for (; y !== null; ) {
              if (((f = _i(y)), f === null)) return;
              if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
                a = r = f;
                continue t;
              }
              y = y.parentNode;
            }
          }
          a = a.return;
        }
      ep(function () {
        var C = r,
          O = dr(n),
          B = [];
        t: {
          var w = jp.get(t);
          if (w !== void 0) {
            var z = bs,
              F = t;
            switch (t) {
              case "keypress":
                if (vs(n) === 0) break t;
              case "keydown":
              case "keyup":
                z = H2;
                break;
              case "focusin":
                (F = "focus"), (z = xr);
                break;
              case "focusout":
                (F = "blur"), (z = xr);
                break;
              case "beforeblur":
              case "afterblur":
                z = xr;
                break;
              case "click":
                if (n.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                z = ap;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = C2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = G2;
                break;
              case Mp:
              case Dp:
              case Cp:
                z = z2;
                break;
              case wp:
                z = k2;
                break;
              case "scroll":
              case "scrollend":
                z = M2;
                break;
              case "wheel":
                z = K2;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = N2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = sp;
                break;
              case "toggle":
              case "beforetoggle":
                z = J2;
            }
            var nt = (e & 4) !== 0,
              Ct = !nt && (t === "scroll" || t === "scrollend"),
              M = nt ? (w !== null ? w + "Capture" : null) : w;
            nt = [];
            for (var A = C, D; A !== null; ) {
              var V = A;
              if (
                ((D = V.stateNode),
                (V = V.tag),
                (V !== 5 && V !== 26 && V !== 27) ||
                  D === null ||
                  M === null ||
                  ((V = Xa(A, M)), V != null && nt.push(Tl(A, V, D))),
                Ct)
              )
                break;
              A = A.return;
            }
            0 < nt.length &&
              ((w = new z(w, F, null, n, O)),
              B.push({ event: w, listeners: nt }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (
              ((w = t === "mouseover" || t === "pointerover"),
              (z = t === "mouseout" || t === "pointerout"),
              w &&
                n !== hr &&
                (F = n.relatedTarget || n.fromElement) &&
                (_i(F) || F[Vi]))
            )
              break t;
            if (
              (z || w) &&
              ((w =
                O.window === O
                  ? O
                  : (w = O.ownerDocument)
                    ? w.defaultView || w.parentWindow
                    : window),
              z
                ? ((F = n.relatedTarget || n.toElement),
                  (z = C),
                  (F = F ? _i(F) : null),
                  F !== null &&
                    ((Ct = d(F)),
                    (nt = F.tag),
                    F !== Ct || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                    (F = null))
                : ((z = null), (F = C)),
              z !== F)
            ) {
              if (
                ((nt = ap),
                (V = "onMouseLeave"),
                (M = "onMouseEnter"),
                (A = "mouse"),
                (t === "pointerout" || t === "pointerover") &&
                  ((nt = sp),
                  (V = "onPointerLeave"),
                  (M = "onPointerEnter"),
                  (A = "pointer")),
                (Ct = z == null ? w : Ga(z)),
                (D = F == null ? w : Ga(F)),
                (w = new nt(V, A + "leave", z, n, O)),
                (w.target = Ct),
                (w.relatedTarget = D),
                (V = null),
                _i(O) === C &&
                  ((nt = new nt(M, A + "enter", F, n, O)),
                  (nt.target = D),
                  (nt.relatedTarget = Ct),
                  (V = nt)),
                (Ct = V),
                z && F)
              )
                e: {
                  for (nt = QT, M = z, A = F, D = 0, V = M; V; V = nt(V)) D++;
                  V = 0;
                  for (var tt = A; tt; tt = nt(tt)) V++;
                  for (; 0 < D - V; ) (M = nt(M)), D--;
                  for (; 0 < V - D; ) (A = nt(A)), V--;
                  for (; D--; ) {
                    if (M === A || (A !== null && M === A.alternate)) {
                      nt = M;
                      break e;
                    }
                    (M = nt(M)), (A = nt(A));
                  }
                  nt = null;
                }
              else nt = null;
              z !== null && Pg(B, w, z, nt, !1),
                F !== null && Ct !== null && Pg(B, Ct, F, nt, !0);
            }
          }
          t: {
            if (
              ((w = C ? Ga(C) : window),
              (z = w.nodeName && w.nodeName.toLowerCase()),
              z === "select" || (z === "input" && w.type === "file"))
            )
              var xt = mp;
            else if (hp(w))
              if (pp) xt = aT;
              else {
                xt = nT;
                var $ = eT;
              }
            else
              (z = w.nodeName),
                !z ||
                z.toLowerCase() !== "input" ||
                (w.type !== "checkbox" && w.type !== "radio")
                  ? C && fr(C.elementType) && (xt = mp)
                  : (xt = iT);
            if (xt && (xt = xt(t, C))) {
              dp(B, xt, n, O);
              break t;
            }
            $ && $(t, w, C),
              t === "focusout" &&
                C &&
                w.type === "number" &&
                C.memoizedProps.value != null &&
                cr(w, "number", w.value);
          }
          switch ((($ = C ? Ga(C) : window), t)) {
            case "focusin":
              (hp($) || $.contentEditable === "true") &&
                ((ki = $), (Mr = C), (Pa = null));
              break;
            case "focusout":
              Pa = Mr = ki = null;
              break;
            case "mousedown":
              Dr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Dr = !1), Ap(B, n, O);
              break;
            case "selectionchange":
              if (sT) break;
            case "keydown":
            case "keyup":
              Ap(B, n, O);
          }
          var rt;
          if (Sr)
            t: {
              switch (t) {
                case "compositionstart":
                  var mt = "onCompositionStart";
                  break t;
                case "compositionend":
                  mt = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  mt = "onCompositionUpdate";
                  break t;
              }
              mt = void 0;
            }
          else
            Xi
              ? cp(t, n) && (mt = "onCompositionEnd")
              : t === "keydown" &&
                n.keyCode === 229 &&
                (mt = "onCompositionStart");
          mt &&
            (up &&
              n.locale !== "ko" &&
              (Xi || mt !== "onCompositionStart"
                ? mt === "onCompositionEnd" && Xi && (rt = np())
                : ((jn = O),
                  (yr = "value" in jn ? jn.value : jn.textContent),
                  (Xi = !0))),
            ($ = cu(C, mt)),
            0 < $.length &&
              ((mt = new lp(mt, t, null, n, O)),
              B.push({ event: mt, listeners: $ }),
              rt
                ? (mt.data = rt)
                : ((rt = fp(n)), rt !== null && (mt.data = rt)))),
            (rt = W2 ? P2(t, n) : $2(t, n)) &&
              ((mt = cu(C, "onBeforeInput")),
              0 < mt.length &&
                (($ = new lp("onBeforeInput", "beforeinput", null, n, O)),
                B.push({ event: $, listeners: mt }),
                ($.data = rt))),
            XT(B, t, C, n, O);
        }
        Fg(B, e);
      });
    }
    function Tl(t, e, n) {
      return { instance: t, listener: e, currentTarget: n };
    }
    function cu(t, e) {
      for (var n = e + "Capture", a = []; t !== null; ) {
        var s = t,
          r = s.stateNode;
        if (
          ((s = s.tag),
          (s !== 5 && s !== 26 && s !== 27) ||
            r === null ||
            ((s = Xa(t, n)),
            s != null && a.unshift(Tl(t, s, r)),
            (s = Xa(t, e)),
            s != null && a.push(Tl(t, s, r))),
          t.tag === 3)
        )
          return a;
        t = t.return;
      }
      return [];
    }
    function QT(t) {
      if (t === null) return null;
      do t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Pg(t, e, n, a, s) {
      for (var r = e._reactName, f = []; n !== null && n !== a; ) {
        var y = n,
          S = y.alternate,
          C = y.stateNode;
        if (((y = y.tag), S !== null && S === a)) break;
        (y !== 5 && y !== 26 && y !== 27) ||
          C === null ||
          ((S = C),
          s
            ? ((C = Xa(n, r)), C != null && f.unshift(Tl(n, C, S)))
            : s || ((C = Xa(n, r)), C != null && f.push(Tl(n, C, S)))),
          (n = n.return);
      }
      f.length !== 0 && t.push({ event: e, listeners: f });
    }
    var JT = /\r\n?/g,
      FT = /\u0000|\uFFFD/g;
    function $g(t) {
      return (typeof t == "string" ? t : "" + t)
        .replace(
          JT,
          `
`,
        )
        .replace(FT, "");
    }
    function Ig(t, e) {
      return (e = $g(e)), $g(t) === e;
    }
    function Dt(t, e, n, a, s, r) {
      switch (n) {
        case "children":
          typeof a == "string"
            ? e === "body" || (e === "textarea" && a === "") || qi(t, a)
            : (typeof a == "number" || typeof a == "bigint") &&
              e !== "body" &&
              qi(t, "" + a);
          break;
        case "className":
          ms(t, "class", a);
          break;
        case "tabIndex":
          ms(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ms(t, n, a);
          break;
        case "style":
          Im(t, a, r);
          break;
        case "data":
          if (e !== "object") {
            ms(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (e !== "a" || n !== "href")) {
            t.removeAttribute(n);
            break;
          }
          if (
            a == null ||
            typeof a == "function" ||
            typeof a == "symbol" ||
            typeof a == "boolean"
          ) {
            t.removeAttribute(n);
            break;
          }
          (a = ys("" + a)), t.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          } else
            typeof r == "function" &&
              (n === "formAction"
                ? (e !== "input" && Dt(t, e, "name", s.name, s, null),
                  Dt(t, e, "formEncType", s.formEncType, s, null),
                  Dt(t, e, "formMethod", s.formMethod, s, null),
                  Dt(t, e, "formTarget", s.formTarget, s, null))
                : (Dt(t, e, "encType", s.encType, s, null),
                  Dt(t, e, "method", s.method, s, null),
                  Dt(t, e, "target", s.target, s, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(n);
            break;
          }
          (a = ys("" + a)), t.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (t.onclick = sn);
          break;
        case "onScroll":
          a != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          a != null && ht("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
            if (((n = a.__html), n != null)) {
              if (s.children != null) throw Error(o(60));
              t.innerHTML = n;
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (
            a == null ||
            typeof a == "function" ||
            typeof a == "boolean" ||
            typeof a == "symbol"
          ) {
            t.removeAttribute("xlink:href");
            break;
          }
          (n = ys("" + a)),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol"
            ? t.setAttribute(n, "" + a)
            : t.removeAttribute(n);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol"
            ? t.setAttribute(n, "")
            : t.removeAttribute(n);
          break;
        case "capture":
        case "download":
          a === !0
            ? t.setAttribute(n, "")
            : a !== !1 &&
                a != null &&
                typeof a != "function" &&
                typeof a != "symbol"
              ? t.setAttribute(n, a)
              : t.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null &&
          typeof a != "function" &&
          typeof a != "symbol" &&
          !isNaN(a) &&
          1 <= a
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          isNaN(a)
            ? t.removeAttribute(n)
            : t.setAttribute(n, a);
          break;
        case "popover":
          ht("beforetoggle", t), ht("toggle", t), ds(t, "popover", a);
          break;
        case "xlinkActuate":
          ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          ln(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          ln(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          ln(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          ln(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          ds(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== "o" && n[0] !== "O") ||
            (n[1] !== "n" && n[1] !== "N")) &&
            ((n = A2.get(n) || n), ds(t, n, a));
      }
    }
    function Pc(t, e, n, a, s, r) {
      switch (n) {
        case "style":
          Im(t, a, r);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
            if (((n = a.__html), n != null)) {
              if (s.children != null) throw Error(o(60));
              t.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof a == "string"
            ? qi(t, a)
            : (typeof a == "number" || typeof a == "bigint") && qi(t, "" + a);
          break;
        case "onScroll":
          a != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          a != null && ht("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = sn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!km.hasOwnProperty(n))
            t: {
              if (
                n[0] === "o" &&
                n[1] === "n" &&
                ((s = n.endsWith("Capture")),
                (e = n.slice(2, s ? n.length - 7 : void 0)),
                (r = t[he] || null),
                (r = r != null ? r[n] : null),
                typeof r == "function" && t.removeEventListener(e, r, s),
                typeof a == "function")
              ) {
                typeof r != "function" &&
                  r !== null &&
                  (n in t
                    ? (t[n] = null)
                    : t.hasAttribute(n) && t.removeAttribute(n)),
                  t.addEventListener(e, a, s);
                break t;
              }
              n in t
                ? (t[n] = a)
                : a === !0
                  ? t.setAttribute(n, "")
                  : ds(t, n, a);
            }
      }
    }
    function se(t, e, n) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ht("error", t), ht("load", t);
          var a = !1,
            s = !1,
            r;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var f = n[r];
              if (f != null)
                switch (r) {
                  case "src":
                    a = !0;
                    break;
                  case "srcSet":
                    s = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(o(137, e));
                  default:
                    Dt(t, e, r, f, n, null);
                }
            }
          s && Dt(t, e, "srcSet", n.srcSet, n, null),
            a && Dt(t, e, "src", n.src, n, null);
          return;
        case "input":
          ht("invalid", t);
          var y = (r = f = s = null),
            S = null,
            C = null;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var O = n[a];
              if (O != null)
                switch (a) {
                  case "name":
                    s = O;
                    break;
                  case "type":
                    f = O;
                    break;
                  case "checked":
                    S = O;
                    break;
                  case "defaultChecked":
                    C = O;
                    break;
                  case "value":
                    r = O;
                    break;
                  case "defaultValue":
                    y = O;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (O != null) throw Error(o(137, e));
                    break;
                  default:
                    Dt(t, e, a, O, n, null);
                }
            }
          Fm(t, r, y, S, C, f, s, !1);
          return;
        case "select":
          ht("invalid", t), (a = f = r = null);
          for (s in n)
            if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
              switch (s) {
                case "value":
                  r = y;
                  break;
                case "defaultValue":
                  f = y;
                  break;
                case "multiple":
                  a = y;
                default:
                  Dt(t, e, s, y, n, null);
              }
          (e = r),
            (n = f),
            (t.multiple = !!a),
            e != null ? Hi(t, !!a, e, !1) : n != null && Hi(t, !!a, n, !0);
          return;
        case "textarea":
          ht("invalid", t), (r = s = a = null);
          for (f in n)
            if (n.hasOwnProperty(f) && ((y = n[f]), y != null))
              switch (f) {
                case "value":
                  a = y;
                  break;
                case "defaultValue":
                  s = y;
                  break;
                case "children":
                  r = y;
                  break;
                case "dangerouslySetInnerHTML":
                  if (y != null) throw Error(o(91));
                  break;
                default:
                  Dt(t, e, f, y, n, null);
              }
          Pm(t, a, s, r);
          return;
        case "option":
          for (S in n)
            n.hasOwnProperty(S) &&
              ((a = n[S]), a != null) &&
              (S === "selected"
                ? (t.selected =
                    a && typeof a != "function" && typeof a != "symbol")
                : Dt(t, e, S, a, n, null));
          return;
        case "dialog":
          ht("beforetoggle", t),
            ht("toggle", t),
            ht("cancel", t),
            ht("close", t);
          break;
        case "iframe":
        case "object":
          ht("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Sl.length; a++) ht(Sl[a], t);
          break;
        case "image":
          ht("error", t), ht("load", t);
          break;
        case "details":
          ht("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          ht("error", t), ht("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (C in n)
            if (n.hasOwnProperty(C) && ((a = n[C]), a != null))
              switch (C) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Dt(t, e, C, a, n, null);
              }
          return;
        default:
          if (fr(e)) {
            for (O in n)
              n.hasOwnProperty(O) &&
                ((a = n[O]), a !== void 0 && Pc(t, e, O, a, n, void 0));
            return;
          }
      }
      for (y in n)
        n.hasOwnProperty(y) &&
          ((a = n[y]), a != null && Dt(t, e, y, a, n, null));
    }
    function WT(t, e, n, a) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var s = null,
            r = null,
            f = null,
            y = null,
            S = null,
            C = null,
            O = null;
          for (z in n) {
            var B = n[z];
            if (n.hasOwnProperty(z) && B != null)
              switch (z) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  S = B;
                default:
                  a.hasOwnProperty(z) || Dt(t, e, z, null, a, B);
              }
          }
          for (var w in a) {
            var z = a[w];
            if (((B = n[w]), a.hasOwnProperty(w) && (z != null || B != null)))
              switch (w) {
                case "type":
                  r = z;
                  break;
                case "name":
                  s = z;
                  break;
                case "checked":
                  C = z;
                  break;
                case "defaultChecked":
                  O = z;
                  break;
                case "value":
                  f = z;
                  break;
                case "defaultValue":
                  y = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(o(137, e));
                  break;
                default:
                  z !== B && Dt(t, e, w, z, a, B);
              }
          }
          rr(t, f, y, S, C, O, r, s);
          return;
        case "select":
          z = f = y = w = null;
          for (r in n)
            if (((S = n[r]), n.hasOwnProperty(r) && S != null))
              switch (r) {
                case "value":
                  break;
                case "multiple":
                  z = S;
                default:
                  a.hasOwnProperty(r) || Dt(t, e, r, null, a, S);
              }
          for (s in a)
            if (
              ((r = a[s]),
              (S = n[s]),
              a.hasOwnProperty(s) && (r != null || S != null))
            )
              switch (s) {
                case "value":
                  w = r;
                  break;
                case "defaultValue":
                  y = r;
                  break;
                case "multiple":
                  f = r;
                default:
                  r !== S && Dt(t, e, s, r, a, S);
              }
          (e = y),
            (n = f),
            (a = z),
            w != null
              ? Hi(t, !!n, w, !1)
              : !!a != !!n &&
                (e != null ? Hi(t, !!n, e, !0) : Hi(t, !!n, n ? [] : "", !1));
          return;
        case "textarea":
          z = w = null;
          for (y in n)
            if (
              ((s = n[y]),
              n.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y))
            )
              switch (y) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Dt(t, e, y, null, a, s);
              }
          for (f in a)
            if (
              ((s = a[f]),
              (r = n[f]),
              a.hasOwnProperty(f) && (s != null || r != null))
            )
              switch (f) {
                case "value":
                  w = s;
                  break;
                case "defaultValue":
                  z = s;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (s != null) throw Error(o(91));
                  break;
                default:
                  s !== r && Dt(t, e, f, s, a, r);
              }
          Wm(t, w, z);
          return;
        case "option":
          for (var F in n)
            (w = n[F]),
              n.hasOwnProperty(F) &&
                w != null &&
                !a.hasOwnProperty(F) &&
                (F === "selected"
                  ? (t.selected = !1)
                  : Dt(t, e, F, null, a, w));
          for (S in a)
            (w = a[S]),
              (z = n[S]),
              a.hasOwnProperty(S) &&
                w !== z &&
                (w != null || z != null) &&
                (S === "selected"
                  ? (t.selected =
                      w && typeof w != "function" && typeof w != "symbol")
                  : Dt(t, e, S, w, a, z));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var nt in n)
            (w = n[nt]),
              n.hasOwnProperty(nt) &&
                w != null &&
                !a.hasOwnProperty(nt) &&
                Dt(t, e, nt, null, a, w);
          for (C in a)
            if (
              ((w = a[C]),
              (z = n[C]),
              a.hasOwnProperty(C) && w !== z && (w != null || z != null))
            )
              switch (C) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (w != null) throw Error(o(137, e));
                  break;
                default:
                  Dt(t, e, C, w, a, z);
              }
          return;
        default:
          if (fr(e)) {
            for (var Ct in n)
              (w = n[Ct]),
                n.hasOwnProperty(Ct) &&
                  w !== void 0 &&
                  !a.hasOwnProperty(Ct) &&
                  Pc(t, e, Ct, void 0, a, w);
            for (O in a)
              (w = a[O]),
                (z = n[O]),
                !a.hasOwnProperty(O) ||
                  w === z ||
                  (w === void 0 && z === void 0) ||
                  Pc(t, e, O, w, a, z);
            return;
          }
      }
      for (var M in n)
        (w = n[M]),
          n.hasOwnProperty(M) &&
            w != null &&
            !a.hasOwnProperty(M) &&
            Dt(t, e, M, null, a, w);
      for (B in a)
        (w = a[B]),
          (z = n[B]),
          !a.hasOwnProperty(B) ||
            w === z ||
            (w == null && z == null) ||
            Dt(t, e, B, w, a, z);
    }
    function t0(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function PT() {
      if (typeof performance.getEntriesByType == "function") {
        for (
          var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
          a < n.length;
          a++
        ) {
          var s = n[a],
            r = s.transferSize,
            f = s.initiatorType,
            y = s.duration;
          if (r && y && t0(f)) {
            for (f = 0, y = s.responseEnd, a += 1; a < n.length; a++) {
              var S = n[a],
                C = S.startTime;
              if (C > y) break;
              var O = S.transferSize,
                B = S.initiatorType;
              O &&
                t0(B) &&
                ((S = S.responseEnd),
                (f += O * (S < y ? 1 : (y - C) / (S - C))));
            }
            if ((--a, (e += (8 * (r + f)) / (s.duration / 1e3)), t++, 10 < t))
              break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection &&
        ((t = navigator.connection.downlink), typeof t == "number")
        ? t
        : 5;
    }
    var $c = null,
      Ic = null;
    function fu(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function e0(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function n0(t, e) {
      if (t === 0)
        switch (e) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function tf(t, e) {
      return (
        t === "textarea" ||
        t === "noscript" ||
        typeof e.children == "string" ||
        typeof e.children == "number" ||
        typeof e.children == "bigint" ||
        (typeof e.dangerouslySetInnerHTML == "object" &&
          e.dangerouslySetInnerHTML !== null &&
          e.dangerouslySetInnerHTML.__html != null)
      );
    }
    var ef = null;
    function $T() {
      var t = window.event;
      return t && t.type === "popstate"
        ? t === ef
          ? !1
          : ((ef = t), !0)
        : ((ef = null), !1);
    }
    var i0 = typeof setTimeout == "function" ? setTimeout : void 0,
      IT = typeof clearTimeout == "function" ? clearTimeout : void 0,
      a0 = typeof Promise == "function" ? Promise : void 0,
      tA =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof a0 < "u"
            ? function (t) {
                return a0.resolve(null).then(t).catch(eA);
              }
            : i0;
    function eA(t) {
      setTimeout(function () {
        throw t;
      });
    }
    function Kn(t) {
      return t === "head";
    }
    function l0(t, e) {
      var n = e,
        a = 0;
      do {
        var s = n.nextSibling;
        if ((t.removeChild(n), s && s.nodeType === 8))
          if (((n = s.data), n === "/$" || n === "/&")) {
            if (a === 0) {
              t.removeChild(s), ga(e);
              return;
            }
            a--;
          } else if (
            n === "$" ||
            n === "$?" ||
            n === "$~" ||
            n === "$!" ||
            n === "&"
          )
            a++;
          else if (n === "html") Al(t.ownerDocument.documentElement);
          else if (n === "head") {
            (n = t.ownerDocument.head), Al(n);
            for (var r = n.firstChild; r; ) {
              var f = r.nextSibling,
                y = r.nodeName;
              r[Ya] ||
                y === "SCRIPT" ||
                y === "STYLE" ||
                (y === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
                n.removeChild(r),
                (r = f);
            }
          } else n === "body" && Al(t.ownerDocument.body);
        n = s;
      } while (n);
      ga(e);
    }
    function s0(t, e) {
      var n = t;
      t = 0;
      do {
        var a = n.nextSibling;
        if (
          (n.nodeType === 1
            ? e
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = "none"))
              : ((n.style.display = n._stashedDisplay || ""),
                n.getAttribute("style") === "" && n.removeAttribute("style"))
            : n.nodeType === 3 &&
              (e
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                : (n.nodeValue = n._stashedText || "")),
          a && a.nodeType === 8)
        )
          if (((n = a.data), n === "/$")) {
            if (t === 0) break;
            t--;
          } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
        n = a;
      } while (n);
    }
    function nf(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var n = e;
        switch (((e = e.nextSibling), n.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            nf(n), ur(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(n);
      }
    }
    function nA(t, e, n, a) {
      for (; t.nodeType === 1; ) {
        var s = n;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Ya])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (
                  ((r = t.getAttribute("rel")),
                  r === "stylesheet" && t.hasAttribute("data-precedence"))
                )
                  break;
                if (
                  r !== s.rel ||
                  t.getAttribute("href") !==
                    (s.href == null || s.href === "" ? null : s.href) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin) ||
                  t.getAttribute("title") !== (s.title == null ? null : s.title)
                )
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (
                  ((r = t.getAttribute("src")),
                  (r !== (s.src == null ? null : s.src) ||
                    t.getAttribute("type") !==
                      (s.type == null ? null : s.type) ||
                    t.getAttribute("crossorigin") !==
                      (s.crossOrigin == null ? null : s.crossOrigin)) &&
                    r &&
                    t.hasAttribute("async") &&
                    !t.hasAttribute("itemprop"))
                )
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          var r = s.name == null ? null : "" + s.name;
          if (s.type === "hidden" && t.getAttribute("name") === r) return t;
        } else return t;
        if (((t = qe(t.nextSibling)), t === null)) break;
      }
      return null;
    }
    function iA(t, e, n) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if (
          ((t.nodeType !== 1 ||
            t.nodeName !== "INPUT" ||
            t.type !== "hidden") &&
            !n) ||
          ((t = qe(t.nextSibling)), t === null)
        )
          return null;
      return t;
    }
    function u0(t, e) {
      for (; t.nodeType !== 8; )
        if (
          ((t.nodeType !== 1 ||
            t.nodeName !== "INPUT" ||
            t.type !== "hidden") &&
            !e) ||
          ((t = qe(t.nextSibling)), t === null)
        )
          return null;
      return t;
    }
    function af(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function lf(t) {
      return (
        t.data === "$!" ||
        (t.data === "$?" && t.ownerDocument.readyState !== "loading")
      );
    }
    function aA(t, e) {
      var n = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || n.readyState !== "loading") e();
      else {
        var a = function () {
          e(), n.removeEventListener("DOMContentLoaded", a);
        };
        n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
      }
    }
    function qe(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (
            ((e = t.data),
            e === "$" ||
              e === "$!" ||
              e === "$?" ||
              e === "$~" ||
              e === "&" ||
              e === "F!" ||
              e === "F")
          )
            break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var sf = null;
    function o0(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$" || n === "/&") {
            if (e === 0) return qe(t.nextSibling);
            e--;
          } else
            (n !== "$" &&
              n !== "$!" &&
              n !== "$?" &&
              n !== "$~" &&
              n !== "&") ||
              e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function r0(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (
            n === "$" ||
            n === "$!" ||
            n === "$?" ||
            n === "$~" ||
            n === "&"
          ) {
            if (e === 0) return t;
            e--;
          } else (n !== "/$" && n !== "/&") || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function c0(t, e, n) {
      switch (((e = fu(n)), t)) {
        case "html":
          if (((t = e.documentElement), !t)) throw Error(o(452));
          return t;
        case "head":
          if (((t = e.head), !t)) throw Error(o(453));
          return t;
        case "body":
          if (((t = e.body), !t)) throw Error(o(454));
          return t;
        default:
          throw Error(o(451));
      }
    }
    function Al(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      ur(t);
    }
    var Ye = new Map(),
      f0 = new Set();
    function hu(t) {
      return typeof t.getRootNode == "function"
        ? t.getRootNode()
        : t.nodeType === 9
          ? t
          : t.ownerDocument;
    }
    var Tn = k.d;
    k.d = { f: lA, r: sA, D: uA, C: oA, L: rA, m: cA, X: hA, S: fA, M: dA };
    function lA() {
      var t = Tn.f(),
        e = iu();
      return t || e;
    }
    function sA(t) {
      var e = Bi(t);
      e !== null && e.tag === 5 && e.type === "form" ? wy(e) : Tn.r(t);
    }
    var ma = typeof document > "u" ? null : document;
    function h0(t, e, n) {
      var a = ma;
      if (a && typeof e == "string" && e) {
        var s = Oe(e);
        (s = 'link[rel="' + t + '"][href="' + s + '"]'),
          typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
          f0.has(s) ||
            (f0.add(s),
            (t = { rel: t, crossOrigin: n, href: e }),
            a.querySelector(s) === null &&
              ((e = a.createElement("link")),
              se(e, "link", t),
              Pt(e),
              a.head.appendChild(e)));
      }
    }
    function uA(t) {
      Tn.D(t), h0("dns-prefetch", t, null);
    }
    function oA(t, e) {
      Tn.C(t, e), h0("preconnect", t, e);
    }
    function rA(t, e, n) {
      Tn.L(t, e, n);
      var a = ma;
      if (a && t && e) {
        var s = 'link[rel="preload"][as="' + Oe(e) + '"]';
        e === "image" && n && n.imageSrcSet
          ? ((s += '[imagesrcset="' + Oe(n.imageSrcSet) + '"]'),
            typeof n.imageSizes == "string" &&
              (s += '[imagesizes="' + Oe(n.imageSizes) + '"]'))
          : (s += '[href="' + Oe(t) + '"]');
        var r = s;
        switch (e) {
          case "style":
            r = pa(t);
            break;
          case "script":
            r = ya(t);
        }
        Ye.has(r) ||
          ((t = x(
            {
              rel: "preload",
              href: e === "image" && n && n.imageSrcSet ? void 0 : t,
              as: e,
            },
            n,
          )),
          Ye.set(r, t),
          a.querySelector(s) !== null ||
            (e === "style" && a.querySelector(El(r))) ||
            (e === "script" && a.querySelector(Ml(r))) ||
            ((e = a.createElement("link")),
            se(e, "link", t),
            Pt(e),
            a.head.appendChild(e)));
      }
    }
    function cA(t, e) {
      Tn.m(t, e);
      var n = ma;
      if (n && t) {
        var a = e && typeof e.as == "string" ? e.as : "script",
          s =
            'link[rel="modulepreload"][as="' +
            Oe(a) +
            '"][href="' +
            Oe(t) +
            '"]',
          r = s;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            r = ya(t);
        }
        if (
          !Ye.has(r) &&
          ((t = x({ rel: "modulepreload", href: t }, e)),
          Ye.set(r, t),
          n.querySelector(s) === null)
        ) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (n.querySelector(Ml(r))) return;
          }
          (a = n.createElement("link")),
            se(a, "link", t),
            Pt(a),
            n.head.appendChild(a);
        }
      }
    }
    function fA(t, e, n) {
      Tn.S(t, e, n);
      var a = ma;
      if (a && t) {
        var s = Ui(a).hoistableStyles,
          r = pa(t);
        e = e || "default";
        var f = s.get(r);
        if (!f) {
          var y = { loading: 0, preload: null };
          if ((f = a.querySelector(El(r)))) y.loading = 5;
          else {
            (t = x({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
              (n = Ye.get(r)) && uf(t, n);
            var S = (f = a.createElement("link"));
            Pt(S),
              se(S, "link", t),
              (S._p = new Promise(function (C, O) {
                (S.onload = C), (S.onerror = O);
              })),
              S.addEventListener("load", function () {
                y.loading |= 1;
              }),
              S.addEventListener("error", function () {
                y.loading |= 2;
              }),
              (y.loading |= 4),
              du(f, e, a);
          }
          (f = { type: "stylesheet", instance: f, count: 1, state: y }),
            s.set(r, f);
        }
      }
    }
    function hA(t, e) {
      Tn.X(t, e);
      var n = ma;
      if (n && t) {
        var a = Ui(n).hoistableScripts,
          s = ya(t),
          r = a.get(s);
        r ||
          ((r = n.querySelector(Ml(s))),
          r ||
            ((t = x({ src: t, async: !0 }, e)),
            (e = Ye.get(s)) && of(t, e),
            (r = n.createElement("script")),
            Pt(r),
            se(r, "link", t),
            n.head.appendChild(r)),
          (r = { type: "script", instance: r, count: 1, state: null }),
          a.set(s, r));
      }
    }
    function dA(t, e) {
      Tn.M(t, e);
      var n = ma;
      if (n && t) {
        var a = Ui(n).hoistableScripts,
          s = ya(t),
          r = a.get(s);
        r ||
          ((r = n.querySelector(Ml(s))),
          r ||
            ((t = x({ src: t, async: !0, type: "module" }, e)),
            (e = Ye.get(s)) && of(t, e),
            (r = n.createElement("script")),
            Pt(r),
            se(r, "link", t),
            n.head.appendChild(r)),
          (r = { type: "script", instance: r, count: 1, state: null }),
          a.set(s, r));
      }
    }
    function d0(t, e, n, a) {
      var s = (s = ct.current) ? hu(s) : null;
      if (!s) throw Error(o(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string"
            ? ((e = pa(n.href)),
              (n = Ui(s).hoistableStyles),
              (a = n.get(e)),
              a ||
                ((a = { type: "style", instance: null, count: 0, state: null }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            n.rel === "stylesheet" &&
            typeof n.href == "string" &&
            typeof n.precedence == "string"
          ) {
            t = pa(n.href);
            var r = Ui(s).hoistableStyles,
              f = r.get(t);
            if (
              (f ||
                ((s = s.ownerDocument || s),
                (f = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                r.set(t, f),
                (r = s.querySelector(El(t))) &&
                  !r._p &&
                  ((f.instance = r), (f.state.loading = 5)),
                Ye.has(t) ||
                  ((n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  Ye.set(t, n),
                  r || mA(s, t, n, f.state))),
              e && a === null)
            )
              throw Error(o(528, ""));
            return f;
          }
          if (e && a !== null) throw Error(o(529, ""));
          return null;
        case "script":
          return (
            (e = n.async),
            (n = n.src),
            typeof n == "string" &&
            e &&
            typeof e != "function" &&
            typeof e != "symbol"
              ? ((e = ya(n)),
                (n = Ui(s).hoistableScripts),
                (a = n.get(e)),
                a ||
                  ((a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(e, a)),
                a)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(o(444, t));
      }
    }
    function pa(t) {
      return 'href="' + Oe(t) + '"';
    }
    function El(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function m0(t) {
      return x({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function mA(t, e, n, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]")
        ? (a.loading = 1)
        : ((e = t.createElement("link")),
          (a.preload = e),
          e.addEventListener("load", function () {
            return (a.loading |= 1);
          }),
          e.addEventListener("error", function () {
            return (a.loading |= 2);
          }),
          se(e, "link", n),
          Pt(e),
          t.head.appendChild(e));
    }
    function ya(t) {
      return '[src="' + Oe(t) + '"]';
    }
    function Ml(t) {
      return "script[async]" + t;
    }
    function p0(t, e, n) {
      if ((e.count++, e.instance === null))
        switch (e.type) {
          case "style":
            var a = t.querySelector('style[data-href~="' + Oe(n.href) + '"]');
            if (a) return (e.instance = a), Pt(a), a;
            var s = x({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (a = (t.ownerDocument || t).createElement("style")),
              Pt(a),
              se(a, "style", s),
              du(a, n.precedence, t),
              (e.instance = a)
            );
          case "stylesheet":
            s = pa(n.href);
            var r = t.querySelector(El(s));
            if (r) return (e.state.loading |= 4), (e.instance = r), Pt(r), r;
            (a = m0(n)),
              (s = Ye.get(s)) && uf(a, s),
              (r = (t.ownerDocument || t).createElement("link")),
              Pt(r);
            var f = r;
            return (
              (f._p = new Promise(function (y, S) {
                (f.onload = y), (f.onerror = S);
              })),
              se(r, "link", a),
              (e.state.loading |= 4),
              du(r, n.precedence, t),
              (e.instance = r)
            );
          case "script":
            return (
              (r = ya(n.src)),
              (s = t.querySelector(Ml(r)))
                ? ((e.instance = s), Pt(s), s)
                : ((a = n),
                  (s = Ye.get(r)) && ((a = x({}, n)), of(a, s)),
                  (t = t.ownerDocument || t),
                  (s = t.createElement("script")),
                  Pt(s),
                  se(s, "link", a),
                  t.head.appendChild(s),
                  (e.instance = s))
            );
          case "void":
            return null;
          default:
            throw Error(o(443, e.type));
        }
      else
        e.type === "stylesheet" &&
          (e.state.loading & 4) === 0 &&
          ((a = e.instance), (e.state.loading |= 4), du(a, n.precedence, t));
      return e.instance;
    }
    function du(t, e, n) {
      for (
        var a = n.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          s = a.length ? a[a.length - 1] : null,
          r = s,
          f = 0;
        f < a.length;
        f++
      ) {
        var y = a[f];
        if (y.dataset.precedence === e) r = y;
        else if (r !== s) break;
      }
      r
        ? r.parentNode.insertBefore(t, r.nextSibling)
        : ((e = n.nodeType === 9 ? n.head : n),
          e.insertBefore(t, e.firstChild));
    }
    function uf(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title);
    }
    function of(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity);
    }
    var mu = null;
    function y0(t, e, n) {
      if (mu === null) {
        var a = new Map(),
          s = (mu = new Map());
        s.set(n, a);
      } else (s = mu), (a = s.get(n)), a || ((a = new Map()), s.set(n, a));
      if (a.has(t)) return a;
      for (
        a.set(t, null), n = n.getElementsByTagName(t), s = 0;
        s < n.length;
        s++
      ) {
        var r = n[s];
        if (
          !(
            r[Ya] ||
            r[ne] ||
            (t === "link" && r.getAttribute("rel") === "stylesheet")
          ) &&
          r.namespaceURI !== "http://www.w3.org/2000/svg"
        ) {
          var f = r.getAttribute(e) || "";
          f = t + f;
          var y = a.get(f);
          y ? y.push(r) : a.set(f, [r]);
        }
      }
      return a;
    }
    function g0(t, e, n) {
      (t = t.ownerDocument || t),
        t.head.insertBefore(
          n,
          e === "title" ? t.querySelector("head > title") : null,
        );
    }
    function pA(t, e, n) {
      if (n === 1 || e.itemProp != null) return !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (
            typeof e.precedence != "string" ||
            typeof e.href != "string" ||
            e.href === ""
          )
            break;
          return !0;
        case "link":
          if (
            typeof e.rel != "string" ||
            typeof e.href != "string" ||
            e.href === "" ||
            e.onLoad ||
            e.onError
          )
            break;
          return e.rel === "stylesheet"
            ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
            : !0;
        case "script":
          if (
            e.async &&
            typeof e.async != "function" &&
            typeof e.async != "symbol" &&
            !e.onLoad &&
            !e.onError &&
            e.src &&
            typeof e.src == "string"
          )
            return !0;
      }
      return !1;
    }
    function v0(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function yA(t, e, n, a) {
      if (
        n.type === "stylesheet" &&
        (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
        (n.state.loading & 4) === 0
      ) {
        if (n.instance === null) {
          var s = pa(a.href),
            r = e.querySelector(El(s));
          if (r) {
            (e = r._p),
              e !== null &&
                typeof e == "object" &&
                typeof e.then == "function" &&
                (t.count++, (t = pu.bind(t)), e.then(t, t)),
              (n.state.loading |= 4),
              (n.instance = r),
              Pt(r);
            return;
          }
          (r = e.ownerDocument || e),
            (a = m0(a)),
            (s = Ye.get(s)) && uf(a, s),
            (r = r.createElement("link")),
            Pt(r);
          var f = r;
          (f._p = new Promise(function (y, S) {
            (f.onload = y), (f.onerror = S);
          })),
            se(r, "link", a),
            (n.instance = r);
        }
        t.stylesheets === null && (t.stylesheets = new Map()),
          t.stylesheets.set(n, e),
          (e = n.state.preload) &&
            (n.state.loading & 3) === 0 &&
            (t.count++,
            (n = pu.bind(t)),
            e.addEventListener("load", n),
            e.addEventListener("error", n));
      }
    }
    var rf = 0;
    function gA(t, e) {
      return (
        t.stylesheets && t.count === 0 && gu(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount
          ? function (n) {
              var a = setTimeout(function () {
                if ((t.stylesheets && gu(t, t.stylesheets), t.unsuspend)) {
                  var r = t.unsuspend;
                  (t.unsuspend = null), r();
                }
              }, 6e4 + e);
              0 < t.imgBytes && rf === 0 && (rf = 62500 * PT());
              var s = setTimeout(
                function () {
                  if (
                    ((t.waitingForImages = !1),
                    t.count === 0 &&
                      (t.stylesheets && gu(t, t.stylesheets), t.unsuspend))
                  ) {
                    var r = t.unsuspend;
                    (t.unsuspend = null), r();
                  }
                },
                (t.imgBytes > rf ? 50 : 800) + e,
              );
              return (
                (t.unsuspend = n),
                function () {
                  (t.unsuspend = null), clearTimeout(a), clearTimeout(s);
                }
              );
            }
          : null
      );
    }
    function pu() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) gu(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          (this.unsuspend = null), t();
        }
      }
    }
    var yu = null;
    function gu(t, e) {
      (t.stylesheets = null),
        t.unsuspend !== null &&
          (t.count++,
          (yu = new Map()),
          e.forEach(vA, t),
          (yu = null),
          pu.call(t));
    }
    function vA(t, e) {
      if (!(e.state.loading & 4)) {
        var n = yu.get(t);
        if (n) var a = n.get(null);
        else {
          (n = new Map()), yu.set(t, n);
          for (
            var s = t.querySelectorAll(
                "link[data-precedence],style[data-precedence]",
              ),
              r = 0;
            r < s.length;
            r++
          ) {
            var f = s[r];
            (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
              (n.set(f.dataset.precedence, f), (a = f));
          }
          a && n.set(null, a);
        }
        (s = e.instance),
          (f = s.getAttribute("data-precedence")),
          (r = n.get(f) || a),
          r === a && n.set(null, s),
          n.set(f, s),
          this.count++,
          (a = pu.bind(this)),
          s.addEventListener("load", a),
          s.addEventListener("error", a),
          r
            ? r.parentNode.insertBefore(s, r.nextSibling)
            : ((t = t.nodeType === 9 ? t.head : t),
              t.insertBefore(s, t.firstChild)),
          (e.state.loading |= 4);
      }
    }
    var Dl = {
      $$typeof: q,
      Provider: null,
      Consumer: null,
      _currentValue: J,
      _currentValue2: J,
      _threadCount: 0,
    };
    function xA(t, e, n, a, s, r, f, y, S) {
      (this.tag = 1),
        (this.containerInfo = t),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = ir(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = ir(0)),
        (this.hiddenUpdates = ir(null)),
        (this.identifierPrefix = a),
        (this.onUncaughtError = s),
        (this.onCaughtError = r),
        (this.onRecoverableError = f),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = S),
        (this.incompleteTransitions = new Map());
    }
    function x0(t, e, n, a, s, r, f, y, S, C, O, B) {
      return (
        (t = new xA(t, e, n, f, S, C, O, B, y)),
        (e = 1),
        r === !0 && (e |= 24),
        (r = Ee(3, null, null, e)),
        (t.current = r),
        (r.stateNode = t),
        (e = Yr()),
        e.refCount++,
        (t.pooledCache = e),
        e.refCount++,
        (r.memoizedState = { element: a, isDehydrated: n, cache: e }),
        Zr(r),
        t
      );
    }
    function b0(t) {
      return t ? ((t = Qi), t) : Qi;
    }
    function S0(t, e, n, a, s, r) {
      (s = b0(s)),
        a.context === null ? (a.context = s) : (a.pendingContext = s),
        (a = _n(e)),
        (a.payload = { element: n }),
        (r = r === void 0 ? null : r),
        r !== null && (a.callback = r),
        (n = Bn(t, a, e)),
        n !== null && (ve(n, t, e), al(n, t, e));
    }
    function T0(t, e) {
      if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
      }
    }
    function cf(t, e) {
      T0(t, e), (t = t.alternate) && T0(t, e);
    }
    function A0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = fi(t, 67108864);
        e !== null && ve(e, t, 67108864), cf(t, 67108864);
      }
    }
    function E0(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = je();
        e = ar(e);
        var n = fi(t, e);
        n !== null && ve(n, t, e), cf(t, e);
      }
    }
    var vu = !0;
    function bA(t, e, n, a) {
      var s = R.T;
      R.T = null;
      var r = k.p;
      try {
        (k.p = 2), ff(t, e, n, a);
      } finally {
        (k.p = r), (R.T = s);
      }
    }
    function SA(t, e, n, a) {
      var s = R.T;
      R.T = null;
      var r = k.p;
      try {
        (k.p = 8), ff(t, e, n, a);
      } finally {
        (k.p = r), (R.T = s);
      }
    }
    function ff(t, e, n, a) {
      if (vu) {
        var s = hf(a);
        if (s === null) Wc(t, e, a, xu, n), D0(t, a);
        else if (AA(s, t, e, n, a)) a.stopPropagation();
        else if ((D0(t, a), e & 4 && -1 < TA.indexOf(t))) {
          for (; s !== null; ) {
            var r = Bi(s);
            if (r !== null)
              switch (r.tag) {
                case 3:
                  if (
                    ((r = r.stateNode), r.current.memoizedState.isDehydrated)
                  ) {
                    var f = si(r.pendingLanes);
                    if (f !== 0) {
                      var y = r;
                      for (y.pendingLanes |= 2, y.entangledLanes |= 2; f; ) {
                        var S = 1 << (31 - Te(f));
                        (y.entanglements[1] |= S), (f &= ~S);
                      }
                      nn(r), (St & 6) === 0 && ((eu = be() + 500), bl(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (y = fi(r, 2)), y !== null && ve(y, r, 2), iu(), cf(r, 2);
              }
            if (((r = hf(a)), r === null && Wc(t, e, a, xu, n), r === s)) break;
            s = r;
          }
          s !== null && a.stopPropagation();
        } else Wc(t, e, a, null, n);
      }
    }
    function hf(t) {
      return (t = dr(t)), df(t);
    }
    var xu = null;
    function df(t) {
      if (((xu = null), (t = _i(t)), t !== null)) {
        var e = d(t);
        if (e === null) t = null;
        else {
          var n = e.tag;
          if (n === 13) {
            if (((t = h(e)), t !== null)) return t;
            t = null;
          } else if (n === 31) {
            if (((t = p(e)), t !== null)) return t;
            t = null;
          } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return (xu = t), null;
    }
    function M0(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (u2()) {
            case Om:
              return 2;
            case Vm:
              return 8;
            case os:
            case o2:
              return 32;
            case _m:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var mf = !1,
      Qn = null,
      Jn = null,
      Fn = null,
      Cl = new Map(),
      wl = new Map(),
      Wn = [],
      TA =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " ",
        );
    function D0(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Qn = null;
          break;
        case "dragenter":
        case "dragleave":
          Jn = null;
          break;
        case "mouseover":
        case "mouseout":
          Fn = null;
          break;
        case "pointerover":
        case "pointerout":
          Cl.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          wl.delete(e.pointerId);
      }
    }
    function jl(t, e, n, a, s, r) {
      return t === null || t.nativeEvent !== r
        ? ((t = {
            blockedOn: e,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: r,
            targetContainers: [s],
          }),
          e !== null && ((e = Bi(e)), e !== null && A0(e)),
          t)
        : ((t.eventSystemFlags |= a),
          (e = t.targetContainers),
          s !== null && e.indexOf(s) === -1 && e.push(s),
          t);
    }
    function AA(t, e, n, a, s) {
      switch (e) {
        case "focusin":
          return (Qn = jl(Qn, t, e, n, a, s)), !0;
        case "dragenter":
          return (Jn = jl(Jn, t, e, n, a, s)), !0;
        case "mouseover":
          return (Fn = jl(Fn, t, e, n, a, s)), !0;
        case "pointerover":
          var r = s.pointerId;
          return Cl.set(r, jl(Cl.get(r) || null, t, e, n, a, s)), !0;
        case "gotpointercapture":
          return (
            (r = s.pointerId),
            wl.set(r, jl(wl.get(r) || null, t, e, n, a, s)),
            !0
          );
      }
      return !1;
    }
    function C0(t) {
      var e = _i(t.target);
      if (e !== null) {
        var n = d(e);
        if (n !== null) {
          if (((e = n.tag), e === 13)) {
            if (((e = h(n)), e !== null)) {
              (t.blockedOn = e),
                Ym(t.priority, function () {
                  E0(n);
                });
              return;
            }
          } else if (e === 31) {
            if (((e = p(n)), e !== null)) {
              (t.blockedOn = e),
                Ym(t.priority, function () {
                  E0(n);
                });
              return;
            }
          } else if (
            e === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function bu(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var n = hf(t.nativeEvent);
        if (n === null) {
          n = t.nativeEvent;
          var a = new n.constructor(n.type, n);
          (hr = a), n.target.dispatchEvent(a), (hr = null);
        } else return (e = Bi(n)), e !== null && A0(e), (t.blockedOn = n), !1;
        e.shift();
      }
      return !0;
    }
    function w0(t, e, n) {
      bu(t) && n.delete(e);
    }
    function EA() {
      (mf = !1),
        Qn !== null && bu(Qn) && (Qn = null),
        Jn !== null && bu(Jn) && (Jn = null),
        Fn !== null && bu(Fn) && (Fn = null),
        Cl.forEach(w0),
        wl.forEach(w0);
    }
    function Su(t, e) {
      t.blockedOn === e &&
        ((t.blockedOn = null),
        mf ||
          ((mf = !0),
          i.unstable_scheduleCallback(i.unstable_NormalPriority, EA)));
    }
    var Tu = null;
    function j0(t) {
      Tu !== t &&
        ((Tu = t),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
          Tu === t && (Tu = null);
          for (var e = 0; e < t.length; e += 3) {
            var n = t[e],
              a = t[e + 1],
              s = t[e + 2];
            if (typeof a != "function") {
              if (df(a || n) === null) continue;
              break;
            }
            var r = Bi(n);
            r !== null &&
              (t.splice(e, 3),
              (e -= 3),
              fc(
                r,
                { pending: !0, data: s, method: n.method, action: a },
                a,
                s,
              ));
          }
        }));
    }
    function ga(t) {
      function e(S) {
        return Su(S, t);
      }
      Qn !== null && Su(Qn, t),
        Jn !== null && Su(Jn, t),
        Fn !== null && Su(Fn, t),
        Cl.forEach(e),
        wl.forEach(e);
      for (var n = 0; n < Wn.length; n++) {
        var a = Wn[n];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
        C0(n), n.blockedOn === null && Wn.shift();
      if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
        for (a = 0; a < n.length; a += 3) {
          var s = n[a],
            r = n[a + 1],
            f = s[he] || null;
          if (typeof r == "function") f || j0(n);
          else if (f) {
            var y = null;
            if (r && r.hasAttribute("formAction")) {
              if (((s = r), (f = r[he] || null))) y = f.formAction;
              else if (df(s) !== null) continue;
            } else y = f.action;
            typeof y == "function"
              ? (n[a + 1] = y)
              : (n.splice(a, 3), (a -= 3)),
              j0(n);
          }
        }
    }
    function z0() {
      function t(r) {
        r.canIntercept &&
          r.info === "react-transition" &&
          r.intercept({
            handler: function () {
              return new Promise(function (f) {
                return (s = f);
              });
            },
            focusReset: "manual",
            scroll: "manual",
          });
      }
      function e() {
        s !== null && (s(), (s = null)), a || setTimeout(n, 20);
      }
      function n() {
        if (!a && !navigation.transition) {
          var r = navigation.currentEntry;
          r &&
            r.url != null &&
            navigation.navigate(r.url, {
              state: r.getState(),
              info: "react-transition",
              history: "replace",
            });
        }
      }
      if (typeof navigation == "object") {
        var a = !1,
          s = null;
        return (
          navigation.addEventListener("navigate", t),
          navigation.addEventListener("navigatesuccess", e),
          navigation.addEventListener("navigateerror", e),
          setTimeout(n, 100),
          function () {
            (a = !0),
              navigation.removeEventListener("navigate", t),
              navigation.removeEventListener("navigatesuccess", e),
              navigation.removeEventListener("navigateerror", e),
              s !== null && (s(), (s = null));
          }
        );
      }
    }
    function pf(t) {
      this._internalRoot = t;
    }
    (Au.prototype.render = pf.prototype.render =
      function (t) {
        var e = this._internalRoot;
        if (e === null) throw Error(o(409));
        var n = e.current,
          a = je();
        S0(n, a, t, e, null, null);
      }),
      (Au.prototype.unmount = pf.prototype.unmount =
        function () {
          var t = this._internalRoot;
          if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            S0(t.current, 2, null, t, null, null), iu(), (e[Vi] = null);
          }
        });
    function Au(t) {
      this._internalRoot = t;
    }
    Au.prototype.unstable_scheduleHydration = function (t) {
      if (t) {
        var e = qm();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < Wn.length && e !== 0 && e < Wn[n].priority; n++);
        Wn.splice(n, 0, t), n === 0 && C0(t);
      }
    };
    var R0 = l.version;
    if (R0 !== "19.2.8") throw Error(o(527, R0, "19.2.8"));
    k.findDOMNode = function (t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function"
          ? Error(o(188))
          : ((t = Object.keys(t).join(",")), Error(o(268, t)));
      return (
        (t = m(e)),
        (t = t !== null ? v(t) : null),
        (t = t === null ? null : t.stateNode),
        t
      );
    };
    var MA = {
      bundleType: 0,
      version: "19.2.8",
      rendererPackageName: "react-dom",
      currentDispatcherRef: R,
      reconcilerVersion: "19.2.8",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Eu.isDisabled && Eu.supportsFiber)
        try {
          (La = Eu.inject(MA)), (Se = Eu);
        } catch {}
    }
    return (
      (xa.createRoot = function (t, e) {
        if (!c(t)) throw Error(o(299));
        var n = !1,
          a = "",
          s = Ly,
          r = Hy,
          f = qy;
        return (
          e != null &&
            (e.unstable_strictMode === !0 && (n = !0),
            e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
            e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
            e.onCaughtError !== void 0 && (r = e.onCaughtError),
            e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
          (e = x0(t, 1, !1, null, null, n, a, null, s, r, f, z0)),
          (t[Vi] = e.current),
          Fc(t),
          new pf(e)
        );
      }),
      (xa.hydrateRoot = function (t, e, n) {
        if (!c(t)) throw Error(o(299));
        var a = !1,
          s = "",
          r = Ly,
          f = Hy,
          y = qy,
          S = null;
        return (
          n != null &&
            (n.unstable_strictMode === !0 && (a = !0),
            n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
            n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
            n.onCaughtError !== void 0 && (f = n.onCaughtError),
            n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
            n.formState !== void 0 && (S = n.formState)),
          (e = x0(t, 1, !0, e, n ?? null, a, s, S, r, f, y, z0)),
          (e.context = b0(null)),
          (n = e.current),
          (a = je()),
          (a = ar(a)),
          (s = _n(a)),
          (s.callback = null),
          Bn(n, s, a),
          (n = a),
          (e.current.lanes = n),
          qa(e, n),
          nn(e),
          (t[Vi] = e.current),
          Fc(t),
          new Au(e)
        );
      }),
      (xa.version = "19.2.8"),
      xa
    );
  }
  var Mf;
  function q0() {
    if (Mf) return wu.exports;
    Mf = 1;
    function i() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
        } catch (l) {
          console.error(l);
        }
    }
    return i(), (wu.exports = H0()), wu.exports;
  }
  var Y0 = q0();
  const Nu = Y.createContext({});
  function Ou(i) {
    const l = Y.useRef(null);
    return l.current === null && (l.current = i()), l.current;
  }
  const Vu = typeof window < "u" ? Y.useLayoutEffect : Y.useEffect,
    zl = Y.createContext(null);
  function _u(i, l) {
    i.indexOf(l) === -1 && i.push(l);
  }
  function Rl(i, l) {
    const u = i.indexOf(l);
    u > -1 && i.splice(u, 1);
  }
  const Je = (i, l, u) => (u > l ? l : u < i ? i : u);
  let Nl = () => {};
  const An = {},
    Df = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),
    Cf = (i) => typeof i == "object" && i !== null,
    wf = (i) => /^0[^.\s]+$/u.test(i);
  function jf(i) {
    let l;
    return () => (l === void 0 && (l = i()), l);
  }
  const ze = (i) => i,
    ba = (...i) => i.reduce((l, u) => (o) => u(l(o))),
    Sa = (i, l, u) => {
      const o = l - i;
      return o ? (u - i) / o : 1;
    };
  class Bu {
    constructor() {
      this.subscriptions = [];
    }
    add(l) {
      return _u(this.subscriptions, l), () => Rl(this.subscriptions, l);
    }
    notify(l, u, o) {
      const c = this.subscriptions.length;
      if (c)
        if (c === 1) this.subscriptions[0](l, u, o);
        else
          for (let d = 0; d < c; d++) {
            const h = this.subscriptions[d];
            h && h(l, u, o);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const xe = (i) => i * 1e3,
    Re = (i) => i / 1e3,
    zf = (i, l) => (l ? i * (1e3 / l) : 0),
    Rf = (i, l, u) =>
      (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i,
    G0 = 1e-7,
    X0 = 12;
  function k0(i, l, u, o, c) {
    let d,
      h,
      p = 0;
    do (h = l + (u - l) / 2), (d = Rf(h, o, c) - i), d > 0 ? (u = h) : (l = h);
    while (Math.abs(d) > G0 && ++p < X0);
    return h;
  }
  function Ta(i, l, u, o) {
    if (i === l && u === o) return ze;
    const c = (d) => k0(d, 0, 1, i, u);
    return (d) => (d === 0 || d === 1 ? d : Rf(c(d), l, o));
  }
  const Nf = (i) => (l) => (l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2),
    Of = (i) => (l) => 1 - i(1 - l),
    Vf = Ta(0.33, 1.53, 0.69, 0.99),
    Uu = Of(Vf),
    _f = Nf(Uu),
    Bf = (i) =>
      i >= 1
        ? 1
        : (i *= 2) < 1
          ? 0.5 * Uu(i)
          : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
    Lu = (i) => 1 - Math.sin(Math.acos(i)),
    Uf = Of(Lu),
    Lf = Nf(Lu),
    Z0 = Ta(0.42, 0, 1, 1),
    K0 = Ta(0, 0, 0.58, 1),
    Hf = Ta(0.42, 0, 0.58, 1),
    Q0 = (i) => Array.isArray(i) && typeof i[0] != "number",
    qf = (i) => Array.isArray(i) && typeof i[0] == "number",
    J0 = {
      linear: ze,
      easeIn: Z0,
      easeInOut: Hf,
      easeOut: K0,
      circIn: Lu,
      circInOut: Lf,
      circOut: Uf,
      backIn: Uu,
      backInOut: _f,
      backOut: Vf,
      anticipate: Bf,
    },
    F0 = (i) => typeof i == "string",
    Yf = (i) => {
      if (qf(i)) {
        Nl(i.length === 4);
        const [l, u, o, c] = i;
        return Ta(l, u, o, c);
      } else if (F0(i)) return J0[i];
      return i;
    },
    Ol = [
      "setup",
      "read",
      "resolveKeyframes",
      "preUpdate",
      "update",
      "preRender",
      "render",
      "postRender",
    ];
  function W0(i) {
    let l = new Set(),
      u = new Set(),
      o = !1,
      c = !1;
    const d = new WeakSet();
    let h = { delta: 0, timestamp: 0, isProcessing: !1 };
    function p(m) {
      d.has(m) && (g.schedule(m), i()), m(h);
    }
    const g = {
      schedule: (m, v = !1, x = !1) => {
        const N = x && o ? l : u;
        return v && d.add(m), N.add(m), m;
      },
      cancel: (m) => {
        u.delete(m), d.delete(m);
      },
      process: (m) => {
        if (((h = m), o)) {
          c = !0;
          return;
        }
        o = !0;
        const v = l;
        (l = u),
          (u = v),
          l.forEach(p),
          l.clear(),
          (o = !1),
          c && ((c = !1), g.process(m));
      },
    };
    return g;
  }
  const P0 = 40;
  function Gf(i, l) {
    let u = !1,
      o = !0;
    const c = { delta: 0, timestamp: 0, isProcessing: !1 },
      d = () => (u = !0),
      h = Ol.reduce((q, G) => ((q[G] = W0(d)), q), {}),
      {
        setup: p,
        read: g,
        resolveKeyframes: m,
        preUpdate: v,
        update: x,
        preRender: T,
        render: N,
        postRender: j,
      } = h,
      _ = () => {
        const q = An.useManualTiming,
          G = q ? c.timestamp : performance.now();
        (u = !1),
          q ||
            (c.delta = o
              ? 1e3 / 60
              : Math.max(Math.min(G - c.timestamp, P0), 1)),
          (c.timestamp = G),
          (c.isProcessing = !0),
          p.process(c),
          g.process(c),
          m.process(c),
          v.process(c),
          x.process(c),
          T.process(c),
          N.process(c),
          j.process(c),
          (c.isProcessing = !1),
          u && l && ((o = !1), i(_));
      },
      U = () => {
        (u = !0), (o = !0), c.isProcessing || i(_);
      };
    return {
      schedule: Ol.reduce((q, G) => {
        const et = h[G];
        return (
          (q[G] = (it, K = !1, Q = !1) => (u || U(), et.schedule(it, K, Q))), q
        );
      }, {}),
      cancel: (q) => {
        for (let G = 0; G < Ol.length; G++) h[Ol[G]].cancel(q);
      },
      state: c,
      steps: h,
    };
  }
  const {
    schedule: wt,
    cancel: En,
    state: It,
    steps: Hu,
  } = Gf(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ze, !0);
  let Vl;
  function $0() {
    Vl = void 0;
  }
  const oe = {
      now: () => (
        Vl === void 0 &&
          oe.set(
            It.isProcessing || An.useManualTiming
              ? It.timestamp
              : performance.now(),
          ),
        Vl
      ),
      set: (i) => {
        (Vl = i), queueMicrotask($0);
      },
    },
    Xf = (i) => (l) => typeof l == "string" && l.startsWith(i),
    kf = Xf("--"),
    I0 = Xf("var(--"),
    qu = (i) => (I0(i) ? tv.test(i.split("/*")[0].trim()) : !1),
    tv =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function Zf(i) {
    return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
  }
  const Ei = {
      test: (i) => typeof i == "number",
      parse: parseFloat,
      transform: (i) => i,
    },
    Aa = { ...Ei, transform: (i) => Je(0, 1, i) },
    _l = { ...Ei, default: 1 },
    Ea = (i) => Math.round(i * 1e5) / 1e5,
    Yu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function ev(i) {
    return i == null;
  }
  const nv =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Gu = (i, l) => (u) =>
      !!(
        (typeof u == "string" && nv.test(u) && u.startsWith(i)) ||
        (l && !ev(u) && Object.prototype.hasOwnProperty.call(u, l))
      ),
    Kf = (i, l, u) => (o) => {
      if (typeof o != "string") return o;
      const [c, d, h, p] = o.match(Yu);
      return {
        [i]: parseFloat(c),
        [l]: parseFloat(d),
        [u]: parseFloat(h),
        alpha: p !== void 0 ? parseFloat(p) : 1,
      };
    },
    iv = (i) => Je(0, 255, i),
    Xu = { ...Ei, transform: (i) => Math.round(iv(i)) },
    $n = {
      test: Gu("rgb", "red"),
      parse: Kf("red", "green", "blue"),
      transform: ({ red: i, green: l, blue: u, alpha: o = 1 }) =>
        "rgba(" +
        Xu.transform(i) +
        ", " +
        Xu.transform(l) +
        ", " +
        Xu.transform(u) +
        ", " +
        Ea(Aa.transform(o)) +
        ")",
    };
  function av(i) {
    let l = "",
      u = "",
      o = "",
      c = "";
    return (
      i.length > 5
        ? ((l = i.substring(1, 3)),
          (u = i.substring(3, 5)),
          (o = i.substring(5, 7)),
          (c = i.substring(7, 9)))
        : ((l = i.substring(1, 2)),
          (u = i.substring(2, 3)),
          (o = i.substring(3, 4)),
          (c = i.substring(4, 5)),
          (l += l),
          (u += u),
          (o += o),
          (c += c)),
      {
        red: parseInt(l, 16),
        green: parseInt(u, 16),
        blue: parseInt(o, 16),
        alpha: c ? parseInt(c, 16) / 255 : 1,
      }
    );
  }
  const ku = { test: Gu("#"), parse: av, transform: $n.transform },
    Ma = (i) => ({
      test: (l) =>
        typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
      parse: parseFloat,
      transform: (l) => `${l}${i}`,
    }),
    an = Ma("deg"),
    Fe = Ma("%"),
    W = Ma("px"),
    lv = Ma("vh"),
    sv = Ma("vw"),
    Qf = {
      ...Fe,
      parse: (i) => Fe.parse(i) / 100,
      transform: (i) => Fe.transform(i * 100),
    },
    Mi = {
      test: Gu("hsl", "hue"),
      parse: Kf("hue", "saturation", "lightness"),
      transform: ({ hue: i, saturation: l, lightness: u, alpha: o = 1 }) =>
        "hsla(" +
        Math.round(i) +
        ", " +
        Fe.transform(Ea(l)) +
        ", " +
        Fe.transform(Ea(u)) +
        ", " +
        Ea(Aa.transform(o)) +
        ")",
    },
    Gt = {
      test: (i) => $n.test(i) || ku.test(i) || Mi.test(i),
      parse: (i) =>
        $n.test(i) ? $n.parse(i) : Mi.test(i) ? Mi.parse(i) : ku.parse(i),
      transform: (i) =>
        typeof i == "string"
          ? i
          : i.hasOwnProperty("red")
            ? $n.transform(i)
            : Mi.transform(i),
      getAnimatableNone: (i) => {
        const l = Gt.parse(i);
        return (l.alpha = 0), Gt.transform(l);
      },
    },
    uv =
      /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function ov(i) {
    return (
      isNaN(i) &&
      typeof i == "string" &&
      (i.match(Yu)?.length || 0) + (i.match(uv)?.length || 0) > 0
    );
  }
  const Jf = "number",
    Ff = "color",
    rv = "var",
    cv = "var(",
    Wf = "${}",
    fv =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function Di(i) {
    const l = i.toString(),
      u = [],
      o = { color: [], number: [], var: [] },
      c = [];
    let d = 0;
    const p = l
      .replace(
        fv,
        (g) => (
          Gt.test(g)
            ? (o.color.push(d), c.push(Ff), u.push(Gt.parse(g)))
            : g.startsWith(cv)
              ? (o.var.push(d), c.push(rv), u.push(g))
              : (o.number.push(d), c.push(Jf), u.push(parseFloat(g))),
          ++d,
          Wf
        ),
      )
      .split(Wf);
    return { values: u, split: p, indexes: o, types: c };
  }
  function hv(i) {
    return Di(i).values;
  }
  function Pf({ split: i, types: l }) {
    const u = i.length;
    return (o) => {
      let c = "";
      for (let d = 0; d < u; d++)
        if (((c += i[d]), o[d] !== void 0)) {
          const h = l[d];
          h === Jf
            ? (c += Ea(o[d]))
            : h === Ff
              ? (c += Gt.transform(o[d]))
              : (c += o[d]);
        }
      return c;
    };
  }
  function dv(i) {
    return Pf(Di(i));
  }
  const mv = (i) =>
      typeof i == "number" ? 0 : Gt.test(i) ? Gt.getAnimatableNone(i) : i,
    pv = (i, l) =>
      typeof i == "number" ? (l?.trim().endsWith("/") ? i : 0) : mv(i);
  function yv(i) {
    const l = Di(i);
    return Pf(l)(l.values.map((o, c) => pv(o, l.split[c])));
  }
  const Ge = {
    test: ov,
    parse: hv,
    createTransformer: dv,
    getAnimatableNone: yv,
  };
  function Zu(i, l, u) {
    return (
      u < 0 && (u += 1),
      u > 1 && (u -= 1),
      u < 1 / 6
        ? i + (l - i) * 6 * u
        : u < 1 / 2
          ? l
          : u < 2 / 3
            ? i + (l - i) * (2 / 3 - u) * 6
            : i
    );
  }
  function gv({ hue: i, saturation: l, lightness: u, alpha: o }) {
    (i /= 360), (l /= 100), (u /= 100);
    let c = 0,
      d = 0,
      h = 0;
    if (!l) c = d = h = u;
    else {
      const p = u < 0.5 ? u * (1 + l) : u + l - u * l,
        g = 2 * u - p;
      (c = Zu(g, p, i + 1 / 3)), (d = Zu(g, p, i)), (h = Zu(g, p, i - 1 / 3));
    }
    return {
      red: Math.round(c * 255),
      green: Math.round(d * 255),
      blue: Math.round(h * 255),
      alpha: o,
    };
  }
  function Bl(i, l) {
    return (u) => (u > 0 ? l : i);
  }
  const jt = (i, l, u) => i + (l - i) * u,
    Ku = (i, l, u) => {
      const o = i * i,
        c = u * (l * l - o) + o;
      return c < 0 ? 0 : Math.sqrt(c);
    },
    vv = [ku, $n, Mi],
    xv = (i) => vv.find((l) => l.test(i));
  function $f(i) {
    const l = xv(i);
    if (!l) return !1;
    let u = l.parse(i);
    return l === Mi && (u = gv(u)), u;
  }
  const If = (i, l) => {
      const u = $f(i),
        o = $f(l);
      if (!u || !o) return Bl(i, l);
      const c = { ...u };
      return (d) => (
        (c.red = Ku(u.red, o.red, d)),
        (c.green = Ku(u.green, o.green, d)),
        (c.blue = Ku(u.blue, o.blue, d)),
        (c.alpha = jt(u.alpha, o.alpha, d)),
        $n.transform(c)
      );
    },
    Qu = new Set(["none", "hidden"]);
  function bv(i, l) {
    return Qu.has(i) ? (u) => (u <= 0 ? i : l) : (u) => (u >= 1 ? l : i);
  }
  function Sv(i, l) {
    return (u) => jt(i, l, u);
  }
  function Ju(i) {
    return typeof i == "number"
      ? Sv
      : typeof i == "string"
        ? qu(i)
          ? Bl
          : Gt.test(i)
            ? If
            : Ev
        : Array.isArray(i)
          ? th
          : typeof i == "object"
            ? Gt.test(i)
              ? If
              : Tv
            : Bl;
  }
  function th(i, l) {
    const u = [...i],
      o = u.length,
      c = i.map((d, h) => Ju(d)(d, l[h]));
    return (d) => {
      for (let h = 0; h < o; h++) u[h] = c[h](d);
      return u;
    };
  }
  function Tv(i, l) {
    const u = { ...i, ...l },
      o = {};
    for (const c in u)
      i[c] !== void 0 && l[c] !== void 0 && (o[c] = Ju(i[c])(i[c], l[c]));
    return (c) => {
      for (const d in o) u[d] = o[d](c);
      return u;
    };
  }
  function Av(i, l) {
    const u = [],
      o = { color: 0, var: 0, number: 0 };
    for (let c = 0; c < l.values.length; c++) {
      const d = l.types[c],
        h = i.indexes[d][o[d]],
        p = i.values[h] ?? 0;
      (u[c] = p), o[d]++;
    }
    return u;
  }
  const Ev = (i, l) => {
    const u = Ge.createTransformer(l),
      o = Di(i),
      c = Di(l);
    return o.indexes.var.length === c.indexes.var.length &&
      o.indexes.color.length === c.indexes.color.length &&
      o.indexes.number.length >= c.indexes.number.length
      ? (Qu.has(i) && !c.values.length) || (Qu.has(l) && !o.values.length)
        ? bv(i, l)
        : ba(th(Av(o, c), c.values), u)
      : Bl(i, l);
  };
  function eh(i, l, u) {
    return typeof i == "number" && typeof l == "number" && typeof u == "number"
      ? jt(i, l, u)
      : Ju(i)(i, l);
  }
  const Mv = (i) => {
      const l = ({ timestamp: u }) => i(u);
      return {
        start: (u = !0) => wt.update(l, u),
        stop: () => En(l),
        now: () => (It.isProcessing ? It.timestamp : oe.now()),
      };
    },
    nh = (i, l, u = 10) => {
      let o = "";
      const c = Math.max(Math.round(l / u), 2);
      for (let d = 0; d < c; d++)
        o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
      return `linear(${o.substring(0, o.length - 2)})`;
    },
    Ul = 2e4;
  function Fu(i) {
    let l = 0;
    const u = 50;
    let o = i.next(l);
    for (; !o.done && l < Ul; ) (l += u), (o = i.next(l));
    return l >= Ul ? 1 / 0 : l;
  }
  function Dv(i, l = 100, u) {
    const o = u({ ...i, keyframes: [0, l] }),
      c = Math.min(Fu(o), Ul);
    return {
      type: "keyframes",
      ease: (d) => o.next(c * d).value / l,
      duration: Re(c),
    };
  }
  const _t = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  };
  function Wu(i, l) {
    return i * Math.sqrt(1 - l * l);
  }
  const Cv = 12;
  function wv(i, l, u) {
    let o = u;
    for (let c = 1; c < Cv; c++) o = o - i(o) / l(o);
    return o;
  }
  const Pu = 0.001;
  function jv({
    duration: i = _t.duration,
    bounce: l = _t.bounce,
    velocity: u = _t.velocity,
    mass: o = _t.mass,
  }) {
    let c,
      d,
      h = 1 - l;
    (h = Je(_t.minDamping, _t.maxDamping, h)),
      (i = Je(_t.minDuration, _t.maxDuration, Re(i))),
      h < 1
        ? ((c = (m) => {
            const v = m * h,
              x = v * i,
              T = v - u,
              N = Wu(m, h),
              j = Math.exp(-x);
            return Pu - (T / N) * j;
          }),
          (d = (m) => {
            const x = m * h * i,
              T = x * u + u,
              N = Math.pow(h, 2) * Math.pow(m, 2) * i,
              j = Math.exp(-x),
              _ = Wu(Math.pow(m, 2), h);
            return ((-c(m) + Pu > 0 ? -1 : 1) * ((T - N) * j)) / _;
          }))
        : ((c = (m) => {
            const v = Math.exp(-m * i),
              x = (m - u) * i + 1;
            return -Pu + v * x;
          }),
          (d = (m) => {
            const v = Math.exp(-m * i),
              x = (u - m) * (i * i);
            return v * x;
          }));
    const p = 5 / i,
      g = wv(c, d, p);
    if (((i = xe(i)), isNaN(g)))
      return { stiffness: _t.stiffness, damping: _t.damping, duration: i };
    {
      const m = Math.pow(g, 2) * o;
      return { stiffness: m, damping: h * 2 * Math.sqrt(o * m), duration: i };
    }
  }
  const zv = ["duration", "bounce"],
    Rv = ["stiffness", "damping", "mass"];
  function ih(i, l) {
    return l.some((u) => i[u] !== void 0);
  }
  function Nv(i) {
    let l = {
      velocity: _t.velocity,
      stiffness: _t.stiffness,
      damping: _t.damping,
      mass: _t.mass,
      isResolvedFromDuration: !1,
      ...i,
    };
    if (!ih(i, Rv) && ih(i, zv))
      if (((l.velocity = 0), i.visualDuration)) {
        const u = i.visualDuration,
          o = (2 * Math.PI) / (u * 1.2),
          c = o * o,
          d = 2 * Je(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
        l = { ...l, mass: _t.mass, stiffness: c, damping: d };
      } else {
        const u = jv({ ...i, velocity: 0 });
        (l = { ...l, ...u, mass: _t.mass }), (l.isResolvedFromDuration = !0);
      }
    return l;
  }
  function Ll(i = _t.visualDuration, l = _t.bounce) {
    const u =
      typeof i != "object"
        ? { visualDuration: i, keyframes: [0, 1], bounce: l }
        : i;
    let { restSpeed: o, restDelta: c } = u;
    const d = u.keyframes[0],
      h = u.keyframes[u.keyframes.length - 1],
      p = { done: !1, value: d },
      {
        stiffness: g,
        damping: m,
        mass: v,
        duration: x,
        velocity: T,
        isResolvedFromDuration: N,
      } = Nv({ ...u, velocity: -Re(u.velocity || 0) }),
      j = T || 0,
      _ = m / (2 * Math.sqrt(g * v)),
      U = h - d,
      H = Re(Math.sqrt(g / v)),
      X = Math.abs(U) < 5;
    o || (o = X ? _t.restSpeed.granular : _t.restSpeed.default),
      c || (c = X ? _t.restDelta.granular : _t.restDelta.default);
    let q, G, et, it, K, Q;
    if (_ < 1)
      (et = Wu(H, _)),
        (it = (j + _ * H * U) / et),
        (q = (I) => {
          const pt = Math.exp(-_ * H * I);
          return h - pt * (it * Math.sin(et * I) + U * Math.cos(et * I));
        }),
        (K = _ * H * it + U * et),
        (Q = _ * H * U - it * et),
        (G = (I) =>
          Math.exp(-_ * H * I) * (K * Math.sin(et * I) + Q * Math.cos(et * I)));
    else if (_ === 1) {
      q = (pt) => h - Math.exp(-H * pt) * (U + (j + H * U) * pt);
      const I = j + H * U;
      G = (pt) => Math.exp(-H * pt) * (H * I * pt - j);
    } else {
      const I = H * Math.sqrt(_ * _ - 1);
      q = (kt) => {
        const Lt = Math.exp(-_ * H * kt),
          R = Math.min(I * kt, 300);
        return (
          h - (Lt * ((j + _ * H * U) * Math.sinh(R) + I * U * Math.cosh(R))) / I
        );
      };
      const pt = (j + _ * H * U) / I,
        vt = _ * H * pt - U * I,
        ee = _ * H * U - pt * I;
      G = (kt) => {
        const Lt = Math.exp(-_ * H * kt),
          R = Math.min(I * kt, 300);
        return Lt * (vt * Math.sinh(R) + ee * Math.cosh(R));
      };
    }
    const at = {
      calculatedDuration: (N && x) || null,
      velocity: (I) => xe(G(I)),
      next: (I) => {
        if (!N && _ < 1) {
          const vt = Math.exp(-_ * H * I),
            ee = Math.sin(et * I),
            kt = Math.cos(et * I),
            Lt = h - vt * (it * ee + U * kt),
            R = xe(vt * (K * ee + Q * kt));
          return (
            (p.done = Math.abs(R) <= o && Math.abs(h - Lt) <= c),
            (p.value = p.done ? h : Lt),
            p
          );
        }
        const pt = q(I);
        if (N) p.done = I >= x;
        else {
          const vt = xe(G(I));
          p.done = Math.abs(vt) <= o && Math.abs(h - pt) <= c;
        }
        return (p.value = p.done ? h : pt), p;
      },
      toString: () => {
        const I = Math.min(Fu(at), Ul),
          pt = nh((vt) => at.next(I * vt).value, I, 30);
        return I + "ms " + pt;
      },
      toTransition: () => {},
    };
    return at;
  }
  Ll.applyToOptions = (i) => {
    const l = Dv(i, 100, Ll);
    return (
      (i.ease = l.ease),
      (i.duration = xe(l.duration)),
      (i.type = "keyframes"),
      i
    );
  };
  const Ov = 5;
  function ah(i, l, u) {
    const o = Math.max(l - Ov, 0);
    return zf(u - i(o), l - o);
  }
  function $u({
    keyframes: i,
    velocity: l = 0,
    power: u = 0.8,
    timeConstant: o = 325,
    bounceDamping: c = 10,
    bounceStiffness: d = 500,
    modifyTarget: h,
    min: p,
    max: g,
    restDelta: m = 0.5,
    restSpeed: v,
  }) {
    const x = i[0],
      T = { done: !1, value: x },
      N = (Q) => (p !== void 0 && Q < p) || (g !== void 0 && Q > g),
      j = (Q) =>
        p === void 0
          ? g
          : g === void 0 || Math.abs(p - Q) < Math.abs(g - Q)
            ? p
            : g;
    let _ = u * l;
    const U = x + _,
      H = h === void 0 ? U : h(U);
    H !== U && (_ = H - x);
    const X = (Q) => -_ * Math.exp(-Q / o),
      q = (Q) => H + X(Q),
      G = (Q) => {
        const at = X(Q),
          I = q(Q);
        (T.done = Math.abs(at) <= m), (T.value = T.done ? H : I);
      };
    let et, it;
    const K = (Q) => {
      N(T.value) &&
        ((et = Q),
        (it = Ll({
          keyframes: [T.value, j(T.value)],
          velocity: ah(q, Q, T.value),
          damping: c,
          stiffness: d,
          restDelta: m,
          restSpeed: v,
        })));
    };
    return (
      K(0),
      {
        calculatedDuration: null,
        next: (Q) => {
          let at = !1;
          return (
            !it && et === void 0 && ((at = !0), G(Q), K(Q)),
            et !== void 0 && Q >= et ? it.next(Q - et) : (!at && G(Q), T)
          );
        },
      }
    );
  }
  function Vv(i, l, u) {
    const o = [],
      c = u || An.mix || eh,
      d = i.length - 1;
    for (let h = 0; h < d; h++) {
      let p = c(i[h], i[h + 1]);
      if (l) {
        const g = Array.isArray(l) ? l[h] || ze : l;
        p = ba(g, p);
      }
      o.push(p);
    }
    return o;
  }
  function _v(i, l, { clamp: u = !0, ease: o, mixer: c } = {}) {
    const d = i.length;
    if ((Nl(d === l.length), d === 1)) return () => l[0];
    if (d === 2 && l[0] === l[1]) return () => l[1];
    const h = i[0] === i[1];
    i[0] > i[d - 1] && ((i = [...i].reverse()), (l = [...l].reverse()));
    const p = Vv(l, o, c),
      g = p.length,
      m = (v) => {
        if (h && v < i[0]) return l[0];
        let x = 0;
        if (g > 1) for (; x < i.length - 2 && !(v < i[x + 1]); x++);
        const T = Sa(i[x], i[x + 1], v);
        return p[x](T);
      };
    return u ? (v) => m(Je(i[0], i[d - 1], v)) : m;
  }
  function Bv(i, l) {
    const u = i[i.length - 1];
    for (let o = 1; o <= l; o++) {
      const c = Sa(0, l, o);
      i.push(jt(u, 1, c));
    }
  }
  function Uv(i) {
    const l = [0];
    return Bv(l, i.length - 1), l;
  }
  function Lv(i, l) {
    return i.map((u) => u * l);
  }
  function Hv(i, l) {
    return i.map(() => l || Hf).splice(0, i.length - 1);
  }
  function Da({
    duration: i = 300,
    keyframes: l,
    times: u,
    ease: o = "easeInOut",
  }) {
    const c = Q0(o) ? o.map(Yf) : Yf(o),
      d = { done: !1, value: l[0] },
      h = Lv(u && u.length === l.length ? u : Uv(l), i),
      p = _v(h, l, { ease: Array.isArray(c) ? c : Hv(l, c) });
    return {
      calculatedDuration: i,
      next: (g) => ((d.value = p(g)), (d.done = g >= i), d),
    };
  }
  const qv = (i) => i !== null;
  function Hl(i, { repeat: l, repeatType: u = "loop" }, o, c = 1) {
    const d = i.filter(qv),
      p = c < 0 || (l && u !== "loop" && l % 2 === 1) ? 0 : d.length - 1;
    return !p || o === void 0 ? d[p] : o;
  }
  const Yv = { decay: $u, inertia: $u, tween: Da, keyframes: Da, spring: Ll };
  function lh(i) {
    typeof i.type == "string" && (i.type = Yv[i.type]);
  }
  class Iu {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((l) => {
        this.resolve = l;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(l, u) {
      return this.finished.then(l, u);
    }
  }
  const Gv = (i) => i / 100;
  class ql extends Iu {
    constructor(l) {
      super(),
        (this.state = "idle"),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          const { motionValue: u } = this.options;
          u && u.updatedAt !== oe.now() && this.tick(oe.now()),
            (this.isStopped = !0),
            this.state !== "idle" && (this.teardown(), this.options.onStop?.());
        }),
        (this.options = l),
        this.initAnimation(),
        this.play(),
        l.autoplay === !1 && this.pause();
    }
    initAnimation() {
      const { options: l } = this;
      lh(l);
      const {
        type: u = Da,
        repeat: o = 0,
        repeatDelay: c = 0,
        repeatType: d,
        velocity: h = 0,
      } = l;
      let { keyframes: p } = l;
      const g = u || Da;
      g !== Da &&
        typeof p[0] != "number" &&
        ((this.mixKeyframes = ba(Gv, eh(p[0], p[1]))), (p = [0, 100]));
      const m = g({ ...l, keyframes: p });
      d === "mirror" &&
        (this.mirroredGenerator = g({
          ...l,
          keyframes: [...p].reverse(),
          velocity: -h,
        })),
        m.calculatedDuration === null && (m.calculatedDuration = Fu(m));
      const { calculatedDuration: v } = m;
      (this.calculatedDuration = v),
        (this.resolvedDuration = v + c),
        (this.totalDuration = this.resolvedDuration * (o + 1) - c),
        (this.generator = m);
    }
    updateTime(l) {
      const u = Math.round(l - this.startTime) * this.playbackSpeed;
      this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = u);
    }
    tick(l, u = !1) {
      const {
        generator: o,
        totalDuration: c,
        mixKeyframes: d,
        mirroredGenerator: h,
        resolvedDuration: p,
        calculatedDuration: g,
      } = this;
      if (this.startTime === null) return o.next(0);
      const {
        delay: m = 0,
        keyframes: v,
        repeat: x,
        repeatType: T,
        repeatDelay: N,
        type: j,
        onUpdate: _,
        finalKeyframe: U,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, l))
        : this.speed < 0 &&
          (this.startTime = Math.min(l - c / this.speed, this.startTime)),
        u ? (this.currentTime = l) : this.updateTime(l);
      const H = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
        X = this.playbackSpeed >= 0 ? H < 0 : H > c;
      (this.currentTime = Math.max(H, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let q = this.currentTime,
        G = o;
      if (x) {
        const Q = Math.min(this.currentTime, c) / p;
        let at = Math.floor(Q),
          I = Q % 1;
        !I && Q >= 1 && (I = 1),
          I === 1 && at--,
          (at = Math.min(at, x + 1)),
          at % 2 &&
            (T === "reverse"
              ? ((I = 1 - I), N && (I -= N / p))
              : T === "mirror" && (G = h)),
          (q = Je(0, 1, I) * p);
      }
      let et;
      X
        ? ((this.delayState.value = v[0]), (et = this.delayState))
        : (et = G.next(q)),
        d && !X && (et.value = d(et.value));
      let { done: it } = et;
      !X &&
        g !== null &&
        (it =
          this.playbackSpeed >= 0
            ? this.currentTime >= c
            : this.currentTime <= 0);
      const K =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && it));
      return (
        K && j !== $u && (et.value = Hl(v, this.options, U, this.speed)),
        _ && _(et.value),
        K && this.finish(),
        et
      );
    }
    then(l, u) {
      return this.finished.then(l, u);
    }
    get duration() {
      return Re(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: l = 0 } = this.options || {};
      return this.duration + Re(l);
    }
    get time() {
      return Re(this.currentTime);
    }
    set time(l) {
      (l = xe(l)),
        (this.currentTime = l),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = l)
          : this.driver &&
            (this.startTime = this.driver.now() - l / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = "paused"),
            (this.holdTime = l),
            this.tick(l));
    }
    getGeneratorVelocity() {
      const l = this.currentTime;
      if (l <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(l);
      const u = this.generator.next(l).value;
      return ah((o) => this.generator.next(o).value, l, u);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(l) {
      const u = this.playbackSpeed !== l;
      u && this.driver && this.updateTime(oe.now()),
        (this.playbackSpeed = l),
        u && this.driver && (this.time = Re(this.currentTime));
    }
    play() {
      if (this.isStopped) return;
      const { driver: l = Mv, startTime: u } = this.options;
      this.driver || (this.driver = l((c) => this.tick(c))),
        this.options.onPlay?.();
      const o = this.driver.now();
      this.state === "finished"
        ? (this.updateFinished(), (this.startTime = o))
        : this.holdTime !== null
          ? (this.startTime = o - this.holdTime)
          : this.startTime || (this.startTime = u ?? o),
        this.state === "finished" &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      (this.state = "paused"),
        this.updateTime(oe.now()),
        (this.holdTime = this.currentTime);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.notifyFinished(),
        this.teardown(),
        (this.state = "finished"),
        this.options.onComplete?.();
    }
    cancel() {
      (this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        (this.startTime = this.holdTime = null);
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(l) {
      return (this.startTime = 0), this.tick(l, !0);
    }
    attachTimeline(l) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = "keyframes"),
          (this.options.ease = "linear"),
          this.initAnimation()),
        this.driver?.stop(),
        l.observe(this)
      );
    }
  }
  function Xv(i) {
    for (let l = 1; l < i.length; l++) i[l] ?? (i[l] = i[l - 1]);
  }
  const In = (i) => (i * 180) / Math.PI,
    to = (i) => {
      const l = In(Math.atan2(i[1], i[0]));
      return eo(l);
    },
    kv = {
      x: 4,
      y: 5,
      translateX: 4,
      translateY: 5,
      scaleX: 0,
      scaleY: 3,
      scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
      rotate: to,
      rotateZ: to,
      skewX: (i) => In(Math.atan(i[1])),
      skewY: (i) => In(Math.atan(i[2])),
      skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
    },
    eo = (i) => ((i = i % 360), i < 0 && (i += 360), i),
    sh = to,
    uh = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
    oh = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
    Zv = {
      x: 12,
      y: 13,
      z: 14,
      translateX: 12,
      translateY: 13,
      translateZ: 14,
      scaleX: uh,
      scaleY: oh,
      scale: (i) => (uh(i) + oh(i)) / 2,
      rotateX: (i) => eo(In(Math.atan2(i[6], i[5]))),
      rotateY: (i) => eo(In(Math.atan2(-i[2], i[0]))),
      rotateZ: sh,
      rotate: sh,
      skewX: (i) => In(Math.atan(i[4])),
      skewY: (i) => In(Math.atan(i[1])),
      skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
    };
  function no(i) {
    return i.includes("scale") ? 1 : 0;
  }
  function io(i, l) {
    if (!i || i === "none") return no(l);
    const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, c;
    if (u) (o = Zv), (c = u);
    else {
      const p = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      (o = kv), (c = p);
    }
    if (!c) return no(l);
    const d = o[l],
      h = c[1].split(",").map(Qv);
    return typeof d == "function" ? d(h) : h[d];
  }
  const Kv = (i, l) => {
    const { transform: u = "none" } = getComputedStyle(i);
    return io(u, l);
  };
  function Qv(i) {
    return parseFloat(i.trim());
  }
  const Ci = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    wi = new Set([...Ci, "pathRotation"]),
    rh = (i) => i === Ei || i === W,
    Jv = new Set(["x", "y", "z"]),
    Fv = Ci.filter((i) => !Jv.has(i));
  function Wv(i) {
    const l = [];
    return (
      Fv.forEach((u) => {
        const o = i.getValue(u);
        o !== void 0 &&
          (l.push([u, o.get()]), o.set(u.startsWith("scale") ? 1 : 0));
      }),
      l
    );
  }
  const Mn = {
    width: (
      { x: i },
      { paddingLeft: l = "0", paddingRight: u = "0", boxSizing: o },
    ) => {
      const c = i.max - i.min;
      return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
    },
    height: (
      { y: i },
      { paddingTop: l = "0", paddingBottom: u = "0", boxSizing: o },
    ) => {
      const c = i.max - i.min;
      return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
    },
    top: (i, { top: l }) => parseFloat(l),
    left: (i, { left: l }) => parseFloat(l),
    bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
    right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
    x: (i, { transform: l }) => io(l, "x"),
    y: (i, { transform: l }) => io(l, "y"),
  };
  (Mn.translateX = Mn.x), (Mn.translateY = Mn.y);
  const ti = new Set();
  let ao = !1,
    lo = !1,
    so = !1;
  function ch() {
    if (lo) {
      const i = Array.from(ti).filter((o) => o.needsMeasurement),
        l = new Set(i.map((o) => o.element)),
        u = new Map();
      l.forEach((o) => {
        const c = Wv(o);
        c.length && (u.set(o, c), o.render());
      }),
        i.forEach((o) => o.measureInitialState()),
        l.forEach((o) => {
          o.render();
          const c = u.get(o);
          c &&
            c.forEach(([d, h]) => {
              o.getValue(d)?.set(h);
            });
        }),
        i.forEach((o) => o.measureEndState()),
        i.forEach((o) => {
          o.suspendedScrollY !== void 0 &&
            window.scrollTo(0, o.suspendedScrollY);
        });
    }
    (lo = !1), (ao = !1), ti.forEach((i) => i.complete(so)), ti.clear();
  }
  function fh() {
    ti.forEach((i) => {
      i.readKeyframes(), i.needsMeasurement && (lo = !0);
    });
  }
  function Pv() {
    (so = !0), fh(), ch(), (so = !1);
  }
  class uo {
    constructor(l, u, o, c, d, h = !1) {
      (this.state = "pending"),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...l]),
        (this.onComplete = u),
        (this.name = o),
        (this.motionValue = c),
        (this.element = d),
        (this.isAsync = h);
    }
    scheduleResolve() {
      (this.state = "scheduled"),
        this.isAsync
          ? (ti.add(this),
            ao || ((ao = !0), wt.read(fh), wt.resolveKeyframes(ch)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: l,
        name: u,
        element: o,
        motionValue: c,
      } = this;
      if (l[0] === null) {
        const d = c?.get(),
          h = l[l.length - 1];
        if (d !== void 0) l[0] = d;
        else if (o && u) {
          const p = o.readValue(u, h);
          p != null && (l[0] = p);
        }
        l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]);
      }
      Xv(l);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(l = !1) {
      (this.state = "complete"),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
        ti.delete(this);
    }
    cancel() {
      this.state === "scheduled" && (ti.delete(this), (this.state = "pending"));
    }
    resume() {
      this.state === "pending" && this.scheduleResolve();
    }
  }
  const $v = (i) => i.startsWith("--");
  function hh(i, l, u) {
    $v(l) ? i.style.setProperty(l, u) : (i.style[l] = u);
  }
  const Iv = {};
  function dh(i, l) {
    const u = jf(i);
    return () => Iv[l] ?? u();
  }
  const t1 = dh(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    mh = dh(() => {
      try {
        document
          .createElement("div")
          .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    }, "linearEasing"),
    Ca = ([i, l, u, o]) => `cubic-bezier(${i}, ${l}, ${u}, ${o})`,
    ph = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: Ca([0, 0.65, 0.55, 1]),
      circOut: Ca([0.55, 0, 1, 0.45]),
      backIn: Ca([0.31, 0.01, 0.66, -0.59]),
      backOut: Ca([0.33, 1.53, 0.69, 0.99]),
    };
  function yh(i, l) {
    if (i)
      return typeof i == "function"
        ? mh()
          ? nh(i, l)
          : "ease-out"
        : qf(i)
          ? Ca(i)
          : Array.isArray(i)
            ? i.map((u) => yh(u, l) || ph.easeOut)
            : ph[i];
  }
  function e1(
    i,
    l,
    u,
    {
      delay: o = 0,
      duration: c = 300,
      repeat: d = 0,
      repeatType: h = "loop",
      ease: p = "easeOut",
      times: g,
    } = {},
    m = void 0,
  ) {
    const v = { [l]: u };
    g && (v.offset = g);
    const x = yh(p, c);
    Array.isArray(x) && (v.easing = x);
    const T = {
      delay: o,
      duration: c,
      easing: Array.isArray(x) ? "linear" : x,
      fill: "both",
      iterations: d + 1,
      direction: h === "reverse" ? "alternate" : "normal",
    };
    return m && (T.pseudoElement = m), i.animate(v, T);
  }
  function gh(i) {
    return typeof i == "function" && "applyToOptions" in i;
  }
  function n1({ type: i, ...l }) {
    return gh(i) && mh()
      ? i.applyToOptions(l)
      : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
  }
  class vh extends Iu {
    constructor(l) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !l)
      )
        return;
      const {
        element: u,
        name: o,
        keyframes: c,
        pseudoElement: d,
        allowFlatten: h = !1,
        finalKeyframe: p,
        onComplete: g,
      } = l;
      (this.isPseudoElement = !!d),
        (this.allowFlatten = h),
        (this.options = l),
        Nl(typeof l.type != "string");
      const m = n1(l);
      (this.animation = e1(u, o, c, m, d)),
        m.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !d)) {
            const v = Hl(c, this.options, p, this.speed);
            this.updateMotionValue && this.updateMotionValue(v),
              hh(u, o, v),
              this.animation.cancel();
          }
          g?.(), this.notifyFinished();
        });
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === "finished" && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      const { state: l } = this;
      l === "idle" ||
        l === "finished" ||
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      const l = this.options?.element;
      !this.isPseudoElement &&
        l?.isConnected &&
        this.animation.commitStyles?.();
    }
    get duration() {
      const l = this.animation.effect?.getComputedTiming?.().duration || 0;
      return Re(Number(l));
    }
    get iterationDuration() {
      const { delay: l = 0 } = this.options || {};
      return this.duration + Re(l);
    }
    get time() {
      return Re(Number(this.animation.currentTime) || 0);
    }
    set time(l) {
      const u = this.finishedTime !== null;
      (this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = xe(l)),
        u && this.animation.pause();
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(l) {
      l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l);
    }
    get state() {
      return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(l) {
      this.manualStartTime = this.animation.startTime = l;
    }
    attachTimeline({ timeline: l, rangeStart: u, rangeEnd: o, observe: c }) {
      return (
        this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: "linear" }),
        (this.animation.onfinish = null),
        l && t1()
          ? ((this.animation.timeline = l),
            u && (this.animation.rangeStart = u),
            o && (this.animation.rangeEnd = o),
            ze)
          : c(this)
      );
    }
  }
  const xh = { anticipate: Bf, backInOut: _f, circInOut: Lf };
  function i1(i) {
    return i in xh;
  }
  function a1(i) {
    typeof i.ease == "string" && i1(i.ease) && (i.ease = xh[i.ease]);
  }
  const oo = 10;
  class l1 extends vh {
    constructor(l) {
      a1(l),
        lh(l),
        super(l),
        l.startTime !== void 0 &&
          l.autoplay !== !1 &&
          (this.startTime = l.startTime),
        (this.options = l);
    }
    updateMotionValue(l) {
      const {
        motionValue: u,
        onUpdate: o,
        onComplete: c,
        element: d,
        ...h
      } = this.options;
      if (!u) return;
      if (l !== void 0) {
        u.set(l);
        return;
      }
      const p = new ql({ ...h, autoplay: !1 }),
        g = Math.max(oo, oe.now() - this.startTime),
        m = Je(0, oo, g - oo),
        v = p.sample(g).value,
        { name: x } = this.options;
      d && x && hh(d, x, v),
        u.setWithVelocity(p.sample(Math.max(0, g - m)).value, v, m),
        p.stop();
    }
  }
  const bh = (i, l) =>
    l === "zIndex"
      ? !1
      : !!(
          typeof i == "number" ||
          Array.isArray(i) ||
          (typeof i == "string" &&
            (Ge.test(i) || i === "0") &&
            !i.startsWith("url("))
        );
  function s1(i) {
    const l = i[0];
    if (i.length === 1) return !0;
    for (let u = 0; u < i.length; u++) if (i[u] !== l) return !0;
  }
  function u1(i, l, u, o) {
    const c = i[0];
    if (c === null) return !1;
    if (l === "display" || l === "visibility") return !0;
    const d = i[i.length - 1],
      h = bh(c, l),
      p = bh(d, l);
    return !h || !p ? !1 : s1(i) || ((u === "spring" || gh(u)) && o);
  }
  function ro(i) {
    (i.duration = 0), (i.type = "keyframes");
  }
  const Sh = new Set([
      "opacity",
      "clipPath",
      "filter",
      "transform",
      "backgroundColor",
    ]),
    o1 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
  function r1(i) {
    for (let l = 0; l < i.length; l++)
      if (typeof i[l] == "string" && o1.test(i[l])) return !0;
    return !1;
  }
  const c1 = new Set([
      "color",
      "backgroundColor",
      "outlineColor",
      "fill",
      "stroke",
      "borderColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",
    ]),
    f1 = jf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function h1(i) {
    const {
        motionValue: l,
        name: u,
        repeatDelay: o,
        repeatType: c,
        damping: d,
        type: h,
        keyframes: p,
      } = i,
      g = l?.owner?.current;
    if (!(g instanceof HTMLElement) && !(g instanceof SVGElement)) return !1;
    const { onUpdate: m, transformTemplate: v } = l.owner.getProps();
    return (
      f1() &&
      u &&
      (Sh.has(u) || (c1.has(u) && r1(p))) &&
      (u !== "transform" || !v) &&
      !m &&
      !o &&
      c !== "mirror" &&
      d !== 0 &&
      h !== "inertia"
    );
  }
  const d1 = 40;
  class m1 extends Iu {
    constructor({
      autoplay: l = !0,
      delay: u = 0,
      type: o = "keyframes",
      repeat: c = 0,
      repeatDelay: d = 0,
      repeatType: h = "loop",
      keyframes: p,
      name: g,
      motionValue: m,
      element: v,
      ...x
    }) {
      super(),
        (this.stop = () => {
          this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel();
        }),
        (this.createdAt = oe.now());
      const T = {
          autoplay: l,
          delay: u,
          type: o,
          repeat: c,
          repeatDelay: d,
          repeatType: h,
          name: g,
          motionValue: m,
          element: v,
          ...x,
        },
        N = v?.KeyframeResolver || uo;
      (this.keyframeResolver = new N(
        p,
        (j, _, U) => this.onKeyframesResolved(j, _, T, !U),
        g,
        m,
        v,
      )),
        this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(l, u, o, c) {
      this.keyframeResolver = void 0;
      const {
        name: d,
        type: h,
        velocity: p,
        delay: g,
        isHandoff: m,
        onUpdate: v,
      } = o;
      this.resolvedAt = oe.now();
      let x = !0;
      u1(l, d, h, p) ||
        ((x = !1),
        (An.instantAnimations || !g) && v?.(Hl(l, o, u)),
        (l[0] = l[l.length - 1]),
        ro(o),
        (o.repeat = 0));
      const N = {
          startTime: c
            ? this.resolvedAt
              ? this.resolvedAt - this.createdAt > d1
                ? this.resolvedAt
                : this.createdAt
              : this.createdAt
            : void 0,
          finalKeyframe: u,
          ...o,
          keyframes: l,
        },
        j = x && !m && h1(N),
        _ = N.motionValue?.owner?.current;
      let U;
      if (j)
        try {
          U = new l1({ ...N, element: _ });
        } catch {
          U = new ql(N);
        }
      else U = new ql(N);
      U.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(ze),
        this.pendingTimeline &&
          ((this.stopTimeline = U.attachTimeline(this.pendingTimeline)),
          (this.pendingTimeline = void 0)),
        (this._animation = U);
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(l, u) {
      return this.finished.finally(l).then(() => {});
    }
    get animation() {
      return (
        this._animation || (this.keyframeResolver?.resume(), Pv()),
        this._animation
      );
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(l) {
      this.animation.time = l;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(l) {
      this.animation.speed = l;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(l) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(l))
          : (this.pendingTimeline = l),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel();
    }
  }
  function Th(i, l, u, o = 0, c = 1) {
    const d = Array.from(i)
        .sort((m, v) => m.sortNodePosition(v))
        .indexOf(l),
      h = i.size,
      p = (h - 1) * o;
    return typeof u == "function" ? u(d, h) : c === 1 ? d * o : p - d * o;
  }
  const Ah = 30,
    p1 = (i) => !isNaN(parseFloat(i));
  class y1 {
    constructor(l, u = {}) {
      (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (o) => {
          const c = oe.now();
          if (
            (this.updatedAt !== c && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(o),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (const d of this.dependents) d.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(l),
        (this.owner = u.owner);
    }
    setCurrent(l) {
      (this.current = l),
        (this.updatedAt = oe.now()),
        this.canTrackVelocity === null &&
          l !== void 0 &&
          (this.canTrackVelocity = p1(this.current));
    }
    setPrevFrameValue(l = this.current) {
      (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(l) {
      return this.on("change", l);
    }
    on(l, u) {
      this.events[l] || (this.events[l] = new Bu());
      const o = this.events[l].add(u);
      return l === "change"
        ? () => {
            o(),
              wt.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : o;
    }
    clearListeners() {
      for (const l in this.events) this.events[l].clear();
    }
    attach(l, u) {
      (this.passiveEffect = l), (this.stopPassiveEffect = u);
    }
    set(l) {
      this.passiveEffect
        ? this.passiveEffect(l, this.updateAndNotify)
        : this.updateAndNotify(l);
    }
    setWithVelocity(l, u, o) {
      this.set(u),
        (this.prev = void 0),
        (this.prevFrameValue = l),
        (this.prevUpdatedAt = this.updatedAt - o);
    }
    jump(l, u = !0) {
      this.updateAndNotify(l),
        (this.prev = l),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        u && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(l) {
      this.dependents || (this.dependents = new Set()), this.dependents.add(l);
    }
    removeDependent(l) {
      this.dependents && this.dependents.delete(l);
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const l = oe.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        l - this.updatedAt > Ah
      )
        return 0;
      const u = Math.min(this.updatedAt - this.prevUpdatedAt, Ah);
      return zf(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
    }
    start(l) {
      return (
        this.stop(),
        new Promise((u) => {
          (this.hasAnimated = !0),
            (this.animation = l(u)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function ji(i, l) {
    return new y1(i, l);
  }
  function Eh(i, l) {
    if (i?.inherit && l) {
      const { inherit: u, ...o } = i;
      return { ...l, ...o };
    }
    return i;
  }
  function co(i, l) {
    const u = i?.[l] ?? i?.default ?? i;
    return u !== i ? Eh(u, i) : u;
  }
  const g1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    v1 = (i) => ({
      type: "spring",
      stiffness: 550,
      damping: i === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    x1 = { type: "keyframes", duration: 0.8 },
    b1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    S1 = (i, { keyframes: l }) =>
      l.length > 2
        ? x1
        : wi.has(i)
          ? i.startsWith("scale")
            ? v1(l[1])
            : g1
          : b1,
    T1 = new Set([
      "when",
      "delay",
      "delayChildren",
      "staggerChildren",
      "staggerDirection",
      "repeat",
      "repeatType",
      "repeatDelay",
      "from",
      "elapsed",
    ]);
  function A1(i) {
    for (const l in i) if (!T1.has(l)) return !0;
    return !1;
  }
  const fo =
      (i, l, u, o = {}, c, d) =>
      (h) => {
        const p = co(o, i) || {},
          g = p.delay || o.delay || 0;
        let { elapsed: m = 0 } = o;
        m = m - xe(g);
        const v = {
          keyframes: Array.isArray(u) ? u : [null, u],
          ease: "easeOut",
          velocity: l.getVelocity(),
          ...p,
          delay: -m,
          onUpdate: (T) => {
            l.set(T), p.onUpdate && p.onUpdate(T);
          },
          onComplete: () => {
            h(), p.onComplete && p.onComplete();
          },
          name: i,
          motionValue: l,
          element: d ? void 0 : c,
        };
        A1(p) || Object.assign(v, S1(i, v)),
          v.duration && (v.duration = xe(v.duration)),
          v.repeatDelay && (v.repeatDelay = xe(v.repeatDelay)),
          v.from !== void 0 && (v.keyframes[0] = v.from);
        let x = !1;
        if (
          ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
            (ro(v), v.delay === 0 && (x = !0)),
          (An.instantAnimations ||
            An.skipAnimations ||
            c?.shouldSkipAnimations ||
            p.skipAnimations) &&
            ((x = !0), ro(v), (v.delay = 0)),
          (v.allowFlatten = !p.type && !p.ease),
          x && !d && l.get() !== void 0)
        ) {
          const T = Hl(v.keyframes, p);
          if (T !== void 0) {
            wt.update(() => {
              v.onUpdate(T), v.onComplete();
            });
            return;
          }
        }
        return p.isSync ? new ql(v) : new m1(v);
      },
    E1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function M1(i) {
    const l = E1.exec(i);
    if (!l) return [,];
    const [, u, o, c] = l;
    return [`--${u ?? o}`, c];
  }
  function Mh(i, l, u = 1) {
    const [o, c] = M1(i);
    if (!o) return;
    const d = window.getComputedStyle(l).getPropertyValue(o);
    if (d) {
      const h = d.trim();
      return Df(h) ? parseFloat(h) : h;
    }
    return qu(c) ? Mh(c, l, u + 1) : c;
  }
  function Dh(i) {
    const l = [{}, {}];
    return (
      i?.values.forEach((u, o) => {
        (l[0][o] = u.get()), (l[1][o] = u.getVelocity());
      }),
      l
    );
  }
  function ho(i, l, u, o) {
    if (typeof l == "function") {
      const [c, d] = Dh(o);
      l = l(u !== void 0 ? u : i.custom, c, d);
    }
    if (
      (typeof l == "string" && (l = i.variants && i.variants[l]),
      typeof l == "function")
    ) {
      const [c, d] = Dh(o);
      l = l(u !== void 0 ? u : i.custom, c, d);
    }
    return l;
  }
  function ei(i, l, u) {
    const o = i.getProps();
    return ho(o, l, u !== void 0 ? u : o.custom, i);
  }
  const Ch = new Set([
      "width",
      "height",
      "top",
      "left",
      "right",
      "bottom",
      ...Ci,
    ]),
    mo = (i) => Array.isArray(i);
  function D1(i, l, u) {
    i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, ji(u));
  }
  function C1(i) {
    return mo(i) ? i[i.length - 1] || 0 : i;
  }
  function w1(i, l) {
    const u = ei(i, l);
    let { transitionEnd: o = {}, transition: c = {}, ...d } = u || {};
    d = { ...d, ...o };
    for (const h in d) {
      const p = C1(d[h]);
      D1(i, h, p);
    }
  }
  const te = (i) => !!(i && i.getVelocity);
  function j1(i) {
    return !!(te(i) && i.add);
  }
  function po(i, l) {
    const u = i.getValue("willChange");
    if (j1(u)) return u.add(l);
    if (!u && An.WillChange) {
      const o = new An.WillChange("auto");
      i.addValue("willChange", o), o.add(l);
    }
  }
  function yo(i) {
    return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
  }
  const wh = "data-" + yo("framerAppearId");
  function jh(i) {
    return i.props[wh];
  }
  function z1({ protectedKeys: i, needsAnimating: l }, u) {
    const o = i.hasOwnProperty(u) && l[u] !== !0;
    return (l[u] = !1), o;
  }
  function zh(i, l, { delay: u = 0, transitionOverride: o, type: c } = {}) {
    let { transition: d, transitionEnd: h, ...p } = l;
    const g = i.getDefaultTransition();
    d = d ? Eh(d, g) : g;
    const m = d?.reduceMotion,
      v = d?.skipAnimations;
    o && (d = o);
    const x = [],
      T = c && i.animationState && i.animationState.getState()[c],
      N = d?.path;
    N && N.animateVisualElement(i, p, d, u, x);
    for (const j in p) {
      const _ = i.getValue(j, i.latestValues[j] ?? null),
        U = p[j];
      if (U === void 0 || (T && z1(T, j))) continue;
      const H = { delay: u, ...co(d || {}, j) };
      v && (H.skipAnimations = !0);
      const X = _.get();
      if (
        X !== void 0 &&
        !_.isAnimating() &&
        !Array.isArray(U) &&
        U === X &&
        !H.velocity
      ) {
        wt.update(() => _.set(U));
        continue;
      }
      let q = !1;
      if (window.MotionHandoffAnimation) {
        const it = jh(i);
        if (it) {
          const K = window.MotionHandoffAnimation(it, j, wt);
          K !== null && ((H.startTime = K), (q = !0));
        }
      }
      po(i, j);
      const G = m ?? i.shouldReduceMotion;
      _.start(fo(j, _, U, G && Ch.has(j) ? { type: !1 } : H, i, q));
      const et = _.animation;
      et && x.push(et);
    }
    if (h) {
      const j = () =>
        wt.update(() => {
          h && w1(i, h);
        });
      x.length ? Promise.all(x).then(j) : j();
    }
    return x;
  }
  function go(i, l, u = {}) {
    const o = ei(i, l, u.type === "exit" ? i.presenceContext?.custom : void 0);
    let { transition: c = i.getDefaultTransition() || {} } = o || {};
    u.transitionOverride && (c = u.transitionOverride);
    const d = o ? () => Promise.all(zh(i, o, u)) : () => Promise.resolve(),
      h =
        i.variantChildren && i.variantChildren.size
          ? (g = 0) => {
              const {
                delayChildren: m = 0,
                staggerChildren: v,
                staggerDirection: x,
              } = c;
              return R1(i, l, g, m, v, x, u);
            }
          : () => Promise.resolve(),
      { when: p } = c;
    if (p) {
      const [g, m] = p === "beforeChildren" ? [d, h] : [h, d];
      return g().then(() => m());
    } else return Promise.all([d(), h(u.delay)]);
  }
  function R1(i, l, u = 0, o = 0, c = 0, d = 1, h) {
    const p = [];
    for (const g of i.variantChildren)
      g.notify("AnimationStart", l),
        p.push(
          go(g, l, {
            ...h,
            delay:
              u +
              (typeof o == "function" ? 0 : o) +
              Th(i.variantChildren, g, o, c, d),
          }).then(() => g.notify("AnimationComplete", l)),
        );
    return Promise.all(p);
  }
  function N1(i, l, u = {}) {
    i.notify("AnimationStart", l);
    let o;
    if (Array.isArray(l)) {
      const c = l.map((d) => go(i, d, u));
      o = Promise.all(c);
    } else if (typeof l == "string") o = go(i, l, u);
    else {
      const c = typeof l == "function" ? ei(i, l, u.custom) : l;
      o = Promise.all(zh(i, c, u));
    }
    return o.then(() => {
      i.notify("AnimationComplete", l);
    });
  }
  const O1 = { test: (i) => i === "auto", parse: (i) => i },
    Rh = (i) => (l) => l.test(i),
    Nh = [Ei, W, Fe, an, sv, lv, O1],
    Oh = (i) => Nh.find(Rh(i));
  function V1(i) {
    return typeof i == "number"
      ? i === 0
      : i !== null
        ? i === "none" || i === "0" || wf(i)
        : !0;
  }
  const _1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function B1(i) {
    const [l, u] = i.slice(0, -1).split("(");
    if (l === "drop-shadow") return i;
    const [o] = u.match(Yu) || [];
    if (!o) return i;
    const c = u.replace(o, "");
    let d = _1.has(l) ? 1 : 0;
    return o !== u && (d *= 100), l + "(" + d + c + ")";
  }
  const U1 = /\b([a-z-]*)\(.*?\)/gu,
    vo = {
      ...Ge,
      getAnimatableNone: (i) => {
        const l = i.match(U1);
        return l ? l.map(B1).join(" ") : i;
      },
    },
    xo = {
      ...Ge,
      getAnimatableNone: (i) => {
        const l = Ge.parse(i);
        return Ge.createTransformer(i)(
          l.map((o) =>
            typeof o == "number"
              ? 0
              : typeof o == "object"
                ? { ...o, alpha: 1 }
                : o,
          ),
        );
      },
    },
    Vh = { ...Ei, transform: Math.round },
    Yl = {
      borderWidth: W,
      borderTopWidth: W,
      borderRightWidth: W,
      borderBottomWidth: W,
      borderLeftWidth: W,
      borderRadius: W,
      borderTopLeftRadius: W,
      borderTopRightRadius: W,
      borderBottomRightRadius: W,
      borderBottomLeftRadius: W,
      width: W,
      maxWidth: W,
      height: W,
      maxHeight: W,
      top: W,
      right: W,
      bottom: W,
      left: W,
      inset: W,
      insetBlock: W,
      insetBlockStart: W,
      insetBlockEnd: W,
      insetInline: W,
      insetInlineStart: W,
      insetInlineEnd: W,
      padding: W,
      paddingTop: W,
      paddingRight: W,
      paddingBottom: W,
      paddingLeft: W,
      paddingBlock: W,
      paddingBlockStart: W,
      paddingBlockEnd: W,
      paddingInline: W,
      paddingInlineStart: W,
      paddingInlineEnd: W,
      margin: W,
      marginTop: W,
      marginRight: W,
      marginBottom: W,
      marginLeft: W,
      marginBlock: W,
      marginBlockStart: W,
      marginBlockEnd: W,
      marginInline: W,
      marginInlineStart: W,
      marginInlineEnd: W,
      fontSize: W,
      backgroundPositionX: W,
      backgroundPositionY: W,
      ...{
        rotate: an,
        pathRotation: an,
        rotateX: an,
        rotateY: an,
        rotateZ: an,
        scale: _l,
        scaleX: _l,
        scaleY: _l,
        scaleZ: _l,
        skew: an,
        skewX: an,
        skewY: an,
        distance: W,
        translateX: W,
        translateY: W,
        translateZ: W,
        x: W,
        y: W,
        z: W,
        perspective: W,
        transformPerspective: W,
        opacity: Aa,
        originX: Qf,
        originY: Qf,
        originZ: W,
      },
      zIndex: Vh,
      fillOpacity: Aa,
      strokeOpacity: Aa,
      numOctaves: Vh,
    },
    L1 = {
      ...Yl,
      color: Gt,
      backgroundColor: Gt,
      outlineColor: Gt,
      fill: Gt,
      stroke: Gt,
      borderColor: Gt,
      borderTopColor: Gt,
      borderRightColor: Gt,
      borderBottomColor: Gt,
      borderLeftColor: Gt,
      filter: vo,
      WebkitFilter: vo,
      mask: xo,
      WebkitMask: xo,
    },
    _h = (i) => L1[i],
    H1 = new Set([vo, xo]);
  function Bh(i, l) {
    let u = _h(i);
    return (
      H1.has(u) || (u = Ge),
      u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
    );
  }
  const q1 = new Set(["auto", "none", "0"]);
  function Y1(i, l, u) {
    let o = 0,
      c;
    for (; o < i.length && !c; ) {
      const d = i[o];
      typeof d == "string" && !q1.has(d) && Di(d).values.length && (c = i[o]),
        o++;
    }
    if (c && u) for (const d of l) i[d] = Bh(u, c);
  }
  class G1 extends uo {
    constructor(l, u, o, c, d) {
      super(l, u, o, c, d, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: l, element: u, name: o } = this;
      if (!u || !u.current) return;
      super.readKeyframes();
      for (let v = 0; v < l.length; v++) {
        let x = l[v];
        if (typeof x == "string" && ((x = x.trim()), qu(x))) {
          const T = Mh(x, u.current);
          T !== void 0 && (l[v] = T),
            v === l.length - 1 && (this.finalKeyframe = x);
        }
      }
      if ((this.resolveNoneKeyframes(), !Ch.has(o) || l.length !== 2)) return;
      const [c, d] = l,
        h = Oh(c),
        p = Oh(d),
        g = Zf(c),
        m = Zf(d);
      if (g !== m && Mn[o]) {
        this.needsMeasurement = !0;
        return;
      }
      if (h !== p)
        if (rh(h) && rh(p))
          for (let v = 0; v < l.length; v++) {
            const x = l[v];
            typeof x == "string" && (l[v] = parseFloat(x));
          }
        else Mn[o] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: l, name: u } = this,
        o = [];
      for (let c = 0; c < l.length; c++)
        (l[c] === null || V1(l[c])) && o.push(c);
      o.length && Y1(l, o, u);
    }
    measureInitialState() {
      const { element: l, unresolvedKeyframes: u, name: o } = this;
      if (!l || !l.current) return;
      o === "height" && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = Mn[o](
          l.measureViewportBox(),
          window.getComputedStyle(l.current),
        )),
        (u[0] = this.measuredOrigin);
      const c = u[u.length - 1];
      c !== void 0 && l.getValue(o, c).jump(c, !1);
    }
    measureEndState() {
      const { element: l, name: u, unresolvedKeyframes: o } = this;
      if (!l || !l.current) return;
      const c = l.getValue(u);
      c && c.jump(this.measuredOrigin, !1);
      const d = o.length - 1,
        h = o[d];
      (o[d] = Mn[u](
        l.measureViewportBox(),
        window.getComputedStyle(l.current),
      )),
        h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([p, g]) => {
            l.getValue(p).set(g);
          }),
        this.resolveNoneKeyframes();
    }
  }
  const bo = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius",
  ];
  function Uh(i, l, u) {
    if (i == null) return [];
    if (i instanceof EventTarget) return [i];
    if (typeof i == "string") {
      let o = document;
      const c = u?.[i] ?? o.querySelectorAll(i);
      return c ? Array.from(c) : [];
    }
    return Array.from(i).filter((o) => o != null);
  }
  const So = (i, l) => (l && typeof i == "number" ? l.transform(i) : i);
  function Gl(i) {
    return Cf(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
  }
  const { schedule: To } = Gf(queueMicrotask, !1),
    Xe = { x: !1, y: !1 };
  function Lh() {
    return Xe.x || Xe.y;
  }
  function X1(i) {
    return i === "x" || i === "y"
      ? Xe[i]
        ? null
        : ((Xe[i] = !0),
          () => {
            Xe[i] = !1;
          })
      : Xe.x || Xe.y
        ? null
        : ((Xe.x = Xe.y = !0),
          () => {
            Xe.x = Xe.y = !1;
          });
  }
  function Hh(i, l) {
    const u = Uh(i),
      o = new AbortController(),
      c = { passive: !0, ...l, signal: o.signal };
    return [u, c, () => o.abort()];
  }
  function k1(i) {
    return !(i.pointerType === "touch" || Lh());
  }
  function Z1(i, l, u = {}) {
    const [o, c, d] = Hh(i, u);
    return (
      o.forEach((h) => {
        let p = !1,
          g = !1,
          m;
        const v = () => {
            h.removeEventListener("pointerleave", j);
          },
          x = (U) => {
            m && (m(U), (m = void 0)), v();
          },
          T = (U) => {
            (p = !1),
              window.removeEventListener("pointerup", T),
              window.removeEventListener("pointercancel", T),
              g && ((g = !1), x(U));
          },
          N = () => {
            (p = !0),
              window.addEventListener("pointerup", T, c),
              window.addEventListener("pointercancel", T, c);
          },
          j = (U) => {
            if (U.pointerType !== "touch") {
              if (p) {
                g = !0;
                return;
              }
              x(U);
            }
          },
          _ = (U) => {
            if (!k1(U)) return;
            g = !1;
            const H = l(h, U);
            typeof H == "function" &&
              ((m = H), h.addEventListener("pointerleave", j, c));
          };
        h.addEventListener("pointerenter", _, c),
          h.addEventListener("pointerdown", N, c);
      }),
      d
    );
  }
  const qh = (i, l) => (l ? (i === l ? !0 : qh(i, l.parentElement)) : !1),
    Ao = (i) =>
      i.pointerType === "mouse"
        ? typeof i.button != "number" || i.button <= 0
        : i.isPrimary !== !1,
    K1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  function Q1(i) {
    return K1.has(i.tagName) || i.isContentEditable === !0;
  }
  const J1 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
  function F1(i) {
    return J1.has(i.tagName) || i.isContentEditable === !0;
  }
  const Xl = new WeakSet();
  function Yh(i) {
    return (l) => {
      l.key === "Enter" && i(l);
    };
  }
  function Eo(i, l) {
    i.dispatchEvent(
      new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }),
    );
  }
  const W1 = (i, l) => {
    const u = i.currentTarget;
    if (!u) return;
    const o = Yh(() => {
      if (Xl.has(u)) return;
      Eo(u, "down");
      const c = Yh(() => {
          Eo(u, "up");
        }),
        d = () => Eo(u, "cancel");
      u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l);
    });
    u.addEventListener("keydown", o, l),
      u.addEventListener("blur", () => u.removeEventListener("keydown", o), l);
  };
  function Gh(i) {
    return Ao(i) && !Lh();
  }
  const Xh = new WeakSet();
  function P1(i, l, u = {}) {
    const [o, c, d] = Hh(i, u),
      h = (p) => {
        const g = p.currentTarget;
        if (!Gh(p) || Xh.has(p)) return;
        Xl.add(g), u.stopPropagation && Xh.add(p);
        const m = l(g, p),
          v = { ...c, capture: !0 },
          x = (j, _) => {
            window.removeEventListener("pointerup", T, v),
              window.removeEventListener("pointercancel", N, v),
              Xl.has(g) && Xl.delete(g),
              Gh(j) && typeof m == "function" && m(j, { success: _ });
          },
          T = (j) => {
            x(
              j,
              g === window ||
                g === document ||
                u.useGlobalTarget ||
                qh(g, j.target),
            );
          },
          N = (j) => {
            x(j, !1);
          };
        window.addEventListener("pointerup", T, v),
          window.addEventListener("pointercancel", N, v);
      };
    return (
      o.forEach((p) => {
        (u.useGlobalTarget ? window : p).addEventListener("pointerdown", h, c),
          Gl(p) &&
            (p.addEventListener("focus", (m) => W1(m, c)),
            !Q1(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0));
      }),
      d
    );
  }
  function Mo(i) {
    return Cf(i) && "ownerSVGElement" in i;
  }
  const kl = new WeakMap();
  let Zl;
  const kh = (i, l, u) => (o, c) =>
      c && c[0]
        ? c[0][i + "Size"]
        : Mo(o) && "getBBox" in o
          ? o.getBBox()[l]
          : o[u],
    $1 = kh("inline", "width", "offsetWidth"),
    I1 = kh("block", "height", "offsetHeight");
  function tx({ target: i, borderBoxSize: l }) {
    kl.get(i)?.forEach((u) => {
      u(i, {
        get width() {
          return $1(i, l);
        },
        get height() {
          return I1(i, l);
        },
      });
    });
  }
  function ex(i) {
    i.forEach(tx);
  }
  function nx() {
    typeof ResizeObserver > "u" || (Zl = new ResizeObserver(ex));
  }
  function ix(i, l) {
    Zl || nx();
    const u = Uh(i);
    return (
      u.forEach((o) => {
        let c = kl.get(o);
        c || ((c = new Set()), kl.set(o, c)), c.add(l), Zl?.observe(o);
      }),
      () => {
        u.forEach((o) => {
          const c = kl.get(o);
          c?.delete(l), c?.size || Zl?.unobserve(o);
        });
      }
    );
  }
  const Kl = new Set();
  let zi;
  function ax() {
    (zi = () => {
      const i = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        },
      };
      Kl.forEach((l) => l(i));
    }),
      window.addEventListener("resize", zi);
  }
  function lx(i) {
    return (
      Kl.add(i),
      zi || ax(),
      () => {
        Kl.delete(i),
          !Kl.size &&
            typeof zi == "function" &&
            (window.removeEventListener("resize", zi), (zi = void 0));
      }
    );
  }
  function Zh(i, l) {
    return typeof i == "function" ? lx(i) : ix(i, l);
  }
  function sx(i) {
    return Mo(i) && i.tagName === "svg";
  }
  const ux = [...Nh, Gt, Ge],
    ox = (i) => ux.find(Rh(i)),
    Kh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    Ri = () => ({ x: Kh(), y: Kh() }),
    Qh = () => ({ min: 0, max: 0 }),
    Ft = () => ({ x: Qh(), y: Qh() }),
    rx = new WeakMap();
  function Ql(i) {
    return i !== null && typeof i == "object" && typeof i.start == "function";
  }
  function wa(i) {
    return typeof i == "string" || Array.isArray(i);
  }
  const Do = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    Co = ["initial", ...Do];
  function Jl(i) {
    return Ql(i.animate) || Co.some((l) => wa(i[l]));
  }
  function Jh(i) {
    return !!(Jl(i) || i.variants);
  }
  function cx(i, l, u) {
    for (const o in l) {
      const c = l[o],
        d = u[o];
      if (te(c)) i.addValue(o, c);
      else if (te(d)) i.addValue(o, ji(c, { owner: i }));
      else if (d !== c)
        if (i.hasValue(o)) {
          const h = i.getValue(o);
          h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
        } else {
          const h = i.getStaticValue(o);
          i.addValue(o, ji(h !== void 0 ? h : c, { owner: i }));
        }
    }
    for (const o in u) l[o] === void 0 && i.removeValue(o);
    return l;
  }
  const wo = { current: null },
    Fh = { current: !1 },
    fx = typeof window < "u";
  function hx() {
    if (((Fh.current = !0), !!fx))
      if (window.matchMedia) {
        const i = window.matchMedia("(prefers-reduced-motion)"),
          l = () => (wo.current = i.matches);
        i.addEventListener("change", l), l();
      } else wo.current = !1;
  }
  const Wh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
  let Fl = {};
  function Ph(i) {
    Fl = i;
  }
  function dx() {
    return Fl;
  }
  class mx {
    scrapeMotionValuesFromProps(l, u, o) {
      return {};
    }
    constructor(
      {
        parent: l,
        props: u,
        presenceContext: o,
        reducedMotionConfig: c,
        skipAnimations: d,
        blockInitialAnimation: h,
        visualState: p,
      },
      g = {},
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = uo),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const N = oe.now();
          this.renderScheduledAt < N &&
            ((this.renderScheduledAt = N), wt.render(this.render, !1, !0));
        });
      const { latestValues: m, renderState: v } = p;
      (this.latestValues = m),
        (this.baseTarget = { ...m }),
        (this.initialValues = u.initial ? { ...m } : {}),
        (this.renderState = v),
        (this.parent = l),
        (this.props = u),
        (this.presenceContext = o),
        (this.depth = l ? l.depth + 1 : 0),
        (this.reducedMotionConfig = c),
        (this.skipAnimationsConfig = d),
        (this.options = g),
        (this.blockInitialAnimation = !!h),
        (this.isControllingVariants = Jl(u)),
        (this.isVariantNode = Jh(u)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(l && l.current));
      const { willChange: x, ...T } = this.scrapeMotionValuesFromProps(
        u,
        {},
        this,
      );
      for (const N in T) {
        const j = T[N];
        m[N] !== void 0 && te(j) && j.set(m[N]);
      }
    }
    mount(l) {
      if (this.hasBeenMounted)
        for (const u in this.initialValues)
          this.values.get(u)?.jump(this.initialValues[u]),
            (this.latestValues[u] = this.initialValues[u]);
      (this.current = l),
        rx.set(l, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(l),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((u, o) => this.bindToMotionValue(o, u)),
        this.reducedMotionConfig === "never"
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === "always"
            ? (this.shouldReduceMotion = !0)
            : (Fh.current || hx(), (this.shouldReduceMotion = wo.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0);
    }
    unmount() {
      this.projection && this.projection.unmount(),
        En(this.notifyUpdate),
        En(this.render),
        this.valueSubscriptions.forEach((l) => l()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this);
      for (const l in this.events) this.events[l].clear();
      for (const l in this.features) {
        const u = this.features[l];
        u && (u.unmount(), (u.isMounted = !1));
      }
      this.current = null;
    }
    addChild(l) {
      this.children.add(l),
        this.enteringChildren ?? (this.enteringChildren = new Set()),
        this.enteringChildren.add(l);
    }
    removeChild(l) {
      this.children.delete(l),
        this.enteringChildren && this.enteringChildren.delete(l);
    }
    bindToMotionValue(l, u) {
      if (
        (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
        u.accelerate && Sh.has(l) && this.current instanceof HTMLElement)
      ) {
        const {
            factory: h,
            keyframes: p,
            times: g,
            ease: m,
            duration: v,
          } = u.accelerate,
          x = new vh({
            element: this.current,
            name: l,
            keyframes: p,
            times: g,
            ease: m,
            duration: xe(v),
          }),
          T = h(x);
        this.valueSubscriptions.set(l, () => {
          T(), x.cancel();
        });
        return;
      }
      const o = wi.has(l);
      o && this.onBindTransform && this.onBindTransform();
      const c = u.on("change", (h) => {
        (this.latestValues[l] = h),
          this.props.onUpdate && wt.preRender(this.notifyUpdate),
          o && this.projection && (this.projection.isTransformDirty = !0),
          this.scheduleRender();
      });
      let d;
      typeof window < "u" &&
        window.MotionCheckAppearSync &&
        (d = window.MotionCheckAppearSync(this, l, u)),
        this.valueSubscriptions.set(l, () => {
          c(), d && d();
        });
    }
    sortNodePosition(l) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== l.type
        ? 0
        : this.sortInstanceNodePosition(this.current, l.current);
    }
    updateFeatures() {
      let l = "animation";
      for (l in Fl) {
        const u = Fl[l];
        if (!u) continue;
        const { isEnabled: o, Feature: c } = u;
        if (
          (!this.features[l] &&
            c &&
            o(this.props) &&
            (this.features[l] = new c(this)),
          this.features[l])
        ) {
          const d = this.features[l];
          d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Ft();
    }
    getStaticValue(l) {
      return this.latestValues[l];
    }
    setStaticValue(l, u) {
      this.latestValues[l] = u;
    }
    update(l, u) {
      (l.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = l),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = u);
      for (let o = 0; o < Wh.length; o++) {
        const c = Wh[o];
        this.propEventSubscriptions[c] &&
          (this.propEventSubscriptions[c](),
          delete this.propEventSubscriptions[c]);
        const d = "on" + c,
          h = l[d];
        h && (this.propEventSubscriptions[c] = this.on(c, h));
      }
      (this.prevMotionValues = cx(
        this,
        this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(l) {
      return this.props.variants ? this.props.variants[l] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(l) {
      const u = this.getClosestVariantNode();
      if (u)
        return (
          u.variantChildren && u.variantChildren.add(l),
          () => u.variantChildren.delete(l)
        );
    }
    addValue(l, u) {
      const o = this.values.get(l);
      u !== o &&
        (o && this.removeValue(l),
        this.bindToMotionValue(l, u),
        this.values.set(l, u),
        (this.latestValues[l] = u.get()));
    }
    removeValue(l) {
      this.values.delete(l);
      const u = this.valueSubscriptions.get(l);
      u && (u(), this.valueSubscriptions.delete(l)),
        delete this.latestValues[l],
        this.removeValueFromRenderState(l, this.renderState);
    }
    hasValue(l) {
      return this.values.has(l);
    }
    getValue(l, u) {
      if (this.props.values && this.props.values[l])
        return this.props.values[l];
      let o = this.values.get(l);
      return (
        o === void 0 &&
          u !== void 0 &&
          ((o = ji(u === null ? void 0 : u, { owner: this })),
          this.addValue(l, o)),
        o
      );
    }
    readValue(l, u) {
      let o =
        this.latestValues[l] !== void 0 || !this.current
          ? this.latestValues[l]
          : (this.getBaseTargetFromProps(this.props, l) ??
            this.readValueFromInstance(this.current, l, this.options));
      return (
        o != null &&
          (typeof o == "string" && (Df(o) || wf(o))
            ? (o = parseFloat(o))
            : !ox(o) && Ge.test(u) && (o = Bh(l, u)),
          this.setBaseTarget(l, te(o) ? o.get() : o)),
        te(o) ? o.get() : o
      );
    }
    setBaseTarget(l, u) {
      this.baseTarget[l] = u;
    }
    getBaseTarget(l) {
      const { initial: u } = this.props;
      let o;
      if (typeof u == "string" || typeof u == "object") {
        const d = ho(this.props, u, this.presenceContext?.custom);
        d && (o = d[l]);
      }
      if (u && o !== void 0) return o;
      const c = this.getBaseTargetFromProps(this.props, l);
      return c !== void 0 && !te(c)
        ? c
        : this.initialValues[l] !== void 0 && o === void 0
          ? void 0
          : this.baseTarget[l];
    }
    on(l, u) {
      return (
        this.events[l] || (this.events[l] = new Bu()), this.events[l].add(u)
      );
    }
    notify(l, ...u) {
      this.events[l] && this.events[l].notify(...u);
    }
    scheduleRenderMicrotask() {
      To.render(this.render);
    }
  }
  class $h extends mx {
    constructor() {
      super(...arguments), (this.KeyframeResolver = G1);
    }
    sortInstanceNodePosition(l, u) {
      return l.compareDocumentPosition(u) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(l, u) {
      const o = l.style;
      return o ? o[u] : void 0;
    }
    removeValueFromRenderState(l, { vars: u, style: o }) {
      delete u[l], delete o[l];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: l } = this.props;
      te(l) &&
        (this.childSubscription = l.on("change", (u) => {
          this.current && (this.current.textContent = `${u}`);
        }));
    }
  }
  class Dn {
    constructor(l) {
      (this.isMounted = !1), (this.node = l);
    }
    update() {}
  }
  function Ih({ top: i, left: l, right: u, bottom: o }) {
    return { x: { min: l, max: u }, y: { min: i, max: o } };
  }
  function px({ x: i, y: l }) {
    return { top: l.min, right: i.max, bottom: l.max, left: i.min };
  }
  function yx(i, l) {
    if (!l) return i;
    const u = l({ x: i.left, y: i.top }),
      o = l({ x: i.right, y: i.bottom });
    return { top: u.y, left: u.x, bottom: o.y, right: o.x };
  }
  function jo(i) {
    return i === void 0 || i === 1;
  }
  function zo({ scale: i, scaleX: l, scaleY: u }) {
    return !jo(i) || !jo(l) || !jo(u);
  }
  function ni(i) {
    return (
      zo(i) ||
      td(i) ||
      i.z ||
      i.rotate ||
      i.rotateX ||
      i.rotateY ||
      i.skewX ||
      i.skewY
    );
  }
  function td(i) {
    return ed(i.x) || ed(i.y);
  }
  function ed(i) {
    return i && i !== "0%";
  }
  function Wl(i, l, u) {
    const o = i - u,
      c = l * o;
    return u + c;
  }
  function nd(i, l, u, o, c) {
    return c !== void 0 && (i = Wl(i, c, o)), Wl(i, u, o) + l;
  }
  function Ro(i, l = 0, u = 1, o, c) {
    (i.min = nd(i.min, l, u, o, c)), (i.max = nd(i.max, l, u, o, c));
  }
  function id(i, { x: l, y: u }) {
    Ro(i.x, l.translate, l.scale, l.originPoint),
      Ro(i.y, u.translate, u.scale, u.originPoint);
  }
  const ad = 0.999999999999,
    ld = 1.0000000000001;
  function gx(i, l, u, o = !1) {
    const c = u.length;
    if (!c) return;
    l.x = l.y = 1;
    let d, h;
    for (let p = 0; p < c; p++) {
      (d = u[p]), (h = d.projectionDelta);
      const { visualElement: g } = d.options;
      (g && g.props.style && g.props.style.display === "contents") ||
        (o &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          (We(i.x, -d.scroll.offset.x), We(i.y, -d.scroll.offset.y)),
        h && ((l.x *= h.x.scale), (l.y *= h.y.scale), id(i, h)),
        o && ni(d.latestValues) && Pl(i, d.latestValues, d.layout?.layoutBox));
    }
    l.x < ld && l.x > ad && (l.x = 1), l.y < ld && l.y > ad && (l.y = 1);
  }
  function We(i, l) {
    (i.min += l), (i.max += l);
  }
  function sd(i, l, u, o, c = 0.5) {
    const d = jt(i.min, i.max, c);
    Ro(i, l, u, d, o);
  }
  function ud(i, l) {
    return typeof i == "string" ? (parseFloat(i) / 100) * (l.max - l.min) : i;
  }
  function Pl(i, l, u) {
    const o = u ?? i;
    sd(i.x, ud(l.x, o.x), l.scaleX, l.scale, l.originX),
      sd(i.y, ud(l.y, o.y), l.scaleY, l.scale, l.originY);
  }
  function od(i, l) {
    return Ih(yx(i.getBoundingClientRect(), l));
  }
  function vx(i, l, u) {
    const o = od(i, u),
      { scroll: c } = l;
    return c && (We(o.x, c.offset.x), We(o.y, c.offset.y)), o;
  }
  const xx = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    bx = Ci.length;
  function Sx(i, l, u) {
    let o = "",
      c = !0;
    for (let h = 0; h < bx; h++) {
      const p = Ci[h],
        g = i[p];
      if (g === void 0) continue;
      let m = !0;
      if (typeof g == "number") m = g === (p.startsWith("scale") ? 1 : 0);
      else {
        const v = parseFloat(g);
        m = p.startsWith("scale") ? v === 1 : v === 0;
      }
      if (!m || u) {
        const v = So(g, Yl[p]);
        if (!m) {
          c = !1;
          const x = xx[p] || p;
          o += `${x}(${v}) `;
        }
        u && (l[p] = v);
      }
    }
    const d = i.pathRotation;
    return (
      d && ((c = !1), (o += `rotate(${So(d, Yl.pathRotation)}) `)),
      (o = o.trim()),
      u ? (o = u(l, c ? "" : o)) : c && (o = "none"),
      o
    );
  }
  function No(i, l, u) {
    const { style: o, vars: c, transformOrigin: d } = i;
    let h = !1,
      p = !1;
    for (const g in l) {
      const m = l[g];
      if (wi.has(g)) {
        h = !0;
        continue;
      } else if (kf(g)) {
        c[g] = m;
        continue;
      } else {
        const v = So(m, Yl[g]);
        g.startsWith("origin") ? ((p = !0), (d[g] = v)) : (o[g] = v);
      }
    }
    if (
      (l.transform ||
        (h || u
          ? (o.transform = Sx(l, i.transform, u))
          : o.transform && (o.transform = "none")),
      p)
    ) {
      const { originX: g = "50%", originY: m = "50%", originZ: v = 0 } = d;
      o.transformOrigin = `${g} ${m} ${v}`;
    }
  }
  function rd(i, { style: l, vars: u }, o, c) {
    const d = i.style;
    let h;
    for (h in l) d[h] = l[h];
    c?.applyProjectionStyles(d, o);
    for (h in u) d.setProperty(h, u[h]);
  }
  function cd(i, l) {
    return l.max === l.min ? 0 : (i / (l.max - l.min)) * 100;
  }
  const ja = {
      correct: (i, l) => {
        if (!l.target) return i;
        if (typeof i == "string")
          if (W.test(i)) i = parseFloat(i);
          else return i;
        const u = cd(i, l.target.x),
          o = cd(i, l.target.y);
        return `${u}% ${o}%`;
      },
    },
    Tx = {
      correct: (i, { treeScale: l, projectionDelta: u }) => {
        const o = i,
          c = Ge.parse(i);
        if (c.length > 5) return o;
        const d = Ge.createTransformer(i),
          h = typeof c[0] != "number" ? 1 : 0,
          p = u.x.scale * l.x,
          g = u.y.scale * l.y;
        (c[0 + h] /= p), (c[1 + h] /= g);
        const m = jt(p, g, 0.5);
        return (
          typeof c[2 + h] == "number" && (c[2 + h] /= m),
          typeof c[3 + h] == "number" && (c[3 + h] /= m),
          d(c)
        );
      },
    },
    Oo = {
      borderRadius: { ...ja, applyTo: [...bo] },
      borderTopLeftRadius: ja,
      borderTopRightRadius: ja,
      borderBottomLeftRadius: ja,
      borderBottomRightRadius: ja,
      boxShadow: Tx,
    };
  function fd(i, { layout: l, layoutId: u }) {
    return (
      wi.has(i) ||
      i.startsWith("origin") ||
      ((l || u !== void 0) && (!!Oo[i] || i === "opacity"))
    );
  }
  function Vo(i, l, u) {
    const o = i.style,
      c = l?.style,
      d = {};
    if (!o) return d;
    for (const h in o)
      (te(o[h]) ||
        (c && te(c[h])) ||
        fd(h, i) ||
        u?.getValue(h)?.liveStyle !== void 0) &&
        (d[h] = o[h]);
    return d;
  }
  function Ax(i) {
    return window.getComputedStyle(i);
  }
  class Ex extends $h {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = rd);
    }
    mount(l) {
      Nl(!!l.style), super.mount(l);
    }
    readValueFromInstance(l, u) {
      if (wi.has(u)) return this.projection?.isProjecting ? no(u) : Kv(l, u);
      {
        const o = Ax(l),
          c = (kf(u) ? o.getPropertyValue(u) : o[u]) || 0;
        return typeof c == "string" ? c.trim() : c;
      }
    }
    measureInstanceViewportBox(l, { transformPagePoint: u }) {
      return od(l, u);
    }
    build(l, u, o) {
      No(l, u, o.transformTemplate);
    }
    scrapeMotionValuesFromProps(l, u, o) {
      return Vo(l, u, o);
    }
  }
  const Mx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Dx = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function Cx(i, l, u = 1, o = 0, c = !0) {
    i.pathLength = 1;
    const d = c ? Mx : Dx;
    (i[d.offset] = `${-o}`), (i[d.array] = `${l} ${u}`);
  }
  const wx = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
  function hd(
    i,
    {
      attrX: l,
      attrY: u,
      attrScale: o,
      pathLength: c,
      pathSpacing: d = 1,
      pathOffset: h = 0,
      ...p
    },
    g,
    m,
    v,
  ) {
    if ((No(i, p, m), g)) {
      i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
      return;
    }
    (i.attrs = i.style), (i.style = {});
    const { attrs: x, style: T } = i;
    x.transform && ((T.transform = x.transform), delete x.transform),
      (T.transform || x.transformOrigin) &&
        ((T.transformOrigin = x.transformOrigin ?? "50% 50%"),
        delete x.transformOrigin),
      T.transform &&
        ((T.transformBox = v?.transformBox ?? "fill-box"),
        delete x.transformBox);
    for (const N of wx) x[N] !== void 0 && ((T[N] = x[N]), delete x[N]);
    l !== void 0 && (x.x = l),
      u !== void 0 && (x.y = u),
      o !== void 0 && (x.scale = o),
      c !== void 0 && Cx(x, c, d, h, !1);
  }
  const dd = new Set([
      "baseFrequency",
      "diffuseConstant",
      "kernelMatrix",
      "kernelUnitLength",
      "keySplines",
      "keyTimes",
      "limitingConeAngle",
      "markerHeight",
      "markerWidth",
      "numOctaves",
      "targetX",
      "targetY",
      "surfaceScale",
      "specularConstant",
      "specularExponent",
      "stdDeviation",
      "tableValues",
      "viewBox",
      "gradientTransform",
      "pathLength",
      "startOffset",
      "textLength",
      "lengthAdjust",
    ]),
    md = (i) => typeof i == "string" && i.toLowerCase() === "svg";
  function jx(i, l, u, o) {
    rd(i, l, void 0, o);
    for (const c in l.attrs) i.setAttribute(dd.has(c) ? c : yo(c), l.attrs[c]);
  }
  function pd(i, l, u) {
    const o = Vo(i, l, u);
    for (const c in i)
      if (te(i[c]) || te(l[c])) {
        const d =
          Ci.indexOf(c) !== -1
            ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
            : c;
        o[d] = i[c];
      }
    return o;
  }
  class zx extends $h {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Ft);
    }
    getBaseTargetFromProps(l, u) {
      return l[u];
    }
    readValueFromInstance(l, u) {
      if (wi.has(u)) {
        const o = _h(u);
        return (o && o.default) || 0;
      }
      return (u = dd.has(u) ? u : yo(u)), l.getAttribute(u);
    }
    scrapeMotionValuesFromProps(l, u, o) {
      return pd(l, u, o);
    }
    build(l, u, o) {
      hd(l, u, this.isSVGTag, o.transformTemplate, o.style);
    }
    renderInstance(l, u, o, c) {
      jx(l, u, o, c);
    }
    mount(l) {
      (this.isSVGTag = md(l.tagName)), super.mount(l);
    }
  }
  const Rx = Co.length;
  function yd(i) {
    if (!i) return;
    if (!i.isControllingVariants) {
      const u = i.parent ? yd(i.parent) || {} : {};
      return i.props.initial !== void 0 && (u.initial = i.props.initial), u;
    }
    const l = {};
    for (let u = 0; u < Rx; u++) {
      const o = Co[u],
        c = i.props[o];
      (wa(c) || c === !1) && (l[o] = c);
    }
    return l;
  }
  function gd(i, l) {
    if (!Array.isArray(l)) return !1;
    const u = l.length;
    if (u !== i.length) return !1;
    for (let o = 0; o < u; o++) if (l[o] !== i[o]) return !1;
    return !0;
  }
  const Nx = [...Do].reverse(),
    Ox = Do.length;
  function Vx(i) {
    return (l) =>
      Promise.all(l.map(({ animation: u, options: o }) => N1(i, u, o)));
  }
  function _x(i) {
    let l = Vx(i),
      u = vd(),
      o = !0,
      c = !1;
    const d = (m) => (v, x) => {
      const T = ei(i, x, m === "exit" ? i.presenceContext?.custom : void 0);
      if (T) {
        const { transition: N, transitionEnd: j, ..._ } = T;
        v = { ...v, ..._, ...j };
      }
      return v;
    };
    function h(m) {
      l = m(i);
    }
    function p(m) {
      const { props: v } = i,
        x = yd(i.parent) || {},
        T = [],
        N = new Set();
      let j = {},
        _ = 1 / 0;
      for (let H = 0; H < Ox; H++) {
        const X = Nx[H],
          q = u[X],
          G = v[X] !== void 0 ? v[X] : x[X],
          et = wa(G),
          it = X === m ? q.isActive : null;
        it === !1 && (_ = H);
        let K = G === x[X] && G !== v[X] && et;
        if (
          (K && (o || c) && i.manuallyAnimateOnMount && (K = !1),
          (q.protectedKeys = { ...j }),
          (!q.isActive && it === null) ||
            (!G && !q.prevProp) ||
            Ql(G) ||
            typeof G == "boolean")
        )
          continue;
        if (X === "exit" && q.isActive && it !== !0) {
          q.prevResolvedValues && (j = { ...j, ...q.prevResolvedValues });
          continue;
        }
        const Q = Bx(q.prevProp, G);
        let at = Q || (X === m && q.isActive && !K && et) || (H > _ && et),
          I = !1;
        const pt = Array.isArray(G) ? G : [G];
        let vt = pt.reduce(d(X), {});
        it === !1 && (vt = {});
        const { prevResolvedValues: ee = {} } = q,
          kt = { ...ee, ...vt },
          Lt = (J) => {
            (at = !0),
              N.has(J) && ((I = !0), N.delete(J)),
              (q.needsAnimating[J] = !0);
            const ot = i.getValue(J);
            ot && (ot.liveStyle = !1);
          };
        for (const J in kt) {
          const ot = vt[J],
            yt = ee[J];
          if (j.hasOwnProperty(J)) continue;
          let E = !1;
          mo(ot) && mo(yt) ? (E = !gd(ot, yt) || Q) : (E = ot !== yt),
            E
              ? ot != null
                ? Lt(J)
                : N.add(J)
              : ot !== void 0 && N.has(J)
                ? Lt(J)
                : (q.protectedKeys[J] = !0);
        }
        (q.prevProp = G),
          (q.prevResolvedValues = vt),
          q.isActive && (j = { ...j, ...vt }),
          (o || c) && i.blockInitialAnimation && (at = !1);
        const R = K && Q;
        at &&
          (!R || I) &&
          T.push(
            ...pt.map((J) => {
              const ot = { type: X };
              if (
                typeof J == "string" &&
                (o || c) &&
                !R &&
                i.manuallyAnimateOnMount &&
                i.parent
              ) {
                const { parent: yt } = i,
                  E = ei(yt, J);
                if (yt.enteringChildren && E) {
                  const { delayChildren: L } = E.transition || {};
                  ot.delay = Th(yt.enteringChildren, i, L);
                }
              }
              return { animation: J, options: ot };
            }),
          );
      }
      if (N.size) {
        const H = {};
        if (typeof v.initial != "boolean") {
          const X = ei(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
          X && X.transition && (H.transition = X.transition);
        }
        N.forEach((X) => {
          const q = i.getBaseTarget(X),
            G = i.getValue(X);
          G && (G.liveStyle = !0), (H[X] = q ?? null);
        }),
          T.push({ animation: H });
      }
      let U = !!T.length;
      return (
        o &&
          (v.initial === !1 || v.initial === v.animate) &&
          !i.manuallyAnimateOnMount &&
          (U = !1),
        (o = !1),
        (c = !1),
        U ? l(T) : Promise.resolve()
      );
    }
    function g(m, v) {
      if (u[m].isActive === v) return Promise.resolve();
      i.variantChildren?.forEach((T) => T.animationState?.setActive(m, v)),
        (u[m].isActive = v);
      const x = p(m);
      for (const T in u) u[T].protectedKeys = {};
      return x;
    }
    return {
      animateChanges: p,
      setActive: g,
      setAnimateFunction: h,
      getState: () => u,
      reset: () => {
        (u = vd()), (c = !0);
      },
    };
  }
  function Bx(i, l) {
    return typeof l == "string" ? l !== i : Array.isArray(l) ? !gd(l, i) : !1;
  }
  function ii(i = !1) {
    return {
      isActive: i,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function vd() {
    return {
      animate: ii(!0),
      whileInView: ii(),
      whileHover: ii(),
      whileTap: ii(),
      whileDrag: ii(),
      whileFocus: ii(),
      exit: ii(),
    };
  }
  function _o(i, l) {
    (i.min = l.min), (i.max = l.max);
  }
  function ke(i, l) {
    _o(i.x, l.x), _o(i.y, l.y);
  }
  function xd(i, l) {
    (i.translate = l.translate),
      (i.scale = l.scale),
      (i.originPoint = l.originPoint),
      (i.origin = l.origin);
  }
  const bd = 1e-4,
    Ux = 1 - bd,
    Lx = 1 + bd,
    Sd = 0.01,
    Hx = 0 - Sd,
    qx = 0 + Sd;
  function re(i) {
    return i.max - i.min;
  }
  function Yx(i, l, u) {
    return Math.abs(i - l) <= u;
  }
  function Td(i, l, u, o = 0.5) {
    (i.origin = o),
      (i.originPoint = jt(l.min, l.max, i.origin)),
      (i.scale = re(u) / re(l)),
      (i.translate = jt(u.min, u.max, i.origin) - i.originPoint),
      ((i.scale >= Ux && i.scale <= Lx) || isNaN(i.scale)) && (i.scale = 1),
      ((i.translate >= Hx && i.translate <= qx) || isNaN(i.translate)) &&
        (i.translate = 0);
  }
  function za(i, l, u, o) {
    Td(i.x, l.x, u.x, o ? o.originX : void 0),
      Td(i.y, l.y, u.y, o ? o.originY : void 0);
  }
  function Ad(i, l, u, o = 0) {
    const c = o ? jt(u.min, u.max, o) : u.min;
    (i.min = c + l.min), (i.max = i.min + re(l));
  }
  function Gx(i, l, u, o) {
    Ad(i.x, l.x, u.x, o?.x), Ad(i.y, l.y, u.y, o?.y);
  }
  function Ed(i, l, u, o = 0) {
    const c = o ? jt(u.min, u.max, o) : u.min;
    (i.min = l.min - c), (i.max = i.min + re(l));
  }
  function $l(i, l, u, o) {
    Ed(i.x, l.x, u.x, o?.x), Ed(i.y, l.y, u.y, o?.y);
  }
  function Md(i, l, u, o, c) {
    return (
      (i -= l), (i = Wl(i, 1 / u, o)), c !== void 0 && (i = Wl(i, 1 / c, o)), i
    );
  }
  function Xx(i, l = 0, u = 1, o = 0.5, c, d = i, h = i) {
    if (
      (Fe.test(l) &&
        ((l = parseFloat(l)), (l = jt(h.min, h.max, l / 100) - h.min)),
      typeof l != "number")
    )
      return;
    let p = jt(d.min, d.max, o);
    i === d && (p -= l),
      (i.min = Md(i.min, l, u, p, c)),
      (i.max = Md(i.max, l, u, p, c));
  }
  function Dd(i, l, [u, o, c], d, h) {
    Xx(i, l[u], l[o], l[c], l.scale, d, h);
  }
  const kx = ["x", "scaleX", "originX"],
    Zx = ["y", "scaleY", "originY"];
  function Cd(i, l, u, o) {
    Dd(i.x, l, kx, u ? u.x : void 0, o ? o.x : void 0),
      Dd(i.y, l, Zx, u ? u.y : void 0, o ? o.y : void 0);
  }
  function wd(i) {
    return i.translate === 0 && i.scale === 1;
  }
  function jd(i) {
    return wd(i.x) && wd(i.y);
  }
  function zd(i, l) {
    return i.min === l.min && i.max === l.max;
  }
  function Kx(i, l) {
    return zd(i.x, l.x) && zd(i.y, l.y);
  }
  function Rd(i, l) {
    return (
      Math.round(i.min) === Math.round(l.min) &&
      Math.round(i.max) === Math.round(l.max)
    );
  }
  function Nd(i, l) {
    return Rd(i.x, l.x) && Rd(i.y, l.y);
  }
  function Od(i) {
    return re(i.x) / re(i.y);
  }
  function Vd(i, l) {
    return (
      i.translate === l.translate &&
      i.scale === l.scale &&
      i.originPoint === l.originPoint
    );
  }
  function Pe(i) {
    return [i("x"), i("y")];
  }
  function Qx(i, l, u) {
    let o = "";
    const c = i.x.translate / l.x,
      d = i.y.translate / l.y,
      h = u?.z || 0;
    if (
      ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `),
      (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
      u)
    ) {
      const {
        transformPerspective: m,
        rotate: v,
        pathRotation: x,
        rotateX: T,
        rotateY: N,
        skewX: j,
        skewY: _,
      } = u;
      m && (o = `perspective(${m}px) ${o}`),
        v && (o += `rotate(${v}deg) `),
        x && (o += `rotate(${x}deg) `),
        T && (o += `rotateX(${T}deg) `),
        N && (o += `rotateY(${N}deg) `),
        j && (o += `skewX(${j}deg) `),
        _ && (o += `skewY(${_}deg) `);
    }
    const p = i.x.scale * l.x,
      g = i.y.scale * l.y;
    return (p !== 1 || g !== 1) && (o += `scale(${p}, ${g})`), o || "none";
  }
  const Jx = bo.length,
    _d = (i) => (typeof i == "string" ? parseFloat(i) : i),
    Bd = (i) => typeof i == "number" || W.test(i);
  function Fx(i, l, u, o, c, d) {
    c
      ? ((i.opacity = jt(0, u.opacity ?? 1, Wx(o))),
        (i.opacityExit = jt(l.opacity ?? 1, 0, Px(o))))
      : d && (i.opacity = jt(l.opacity ?? 1, u.opacity ?? 1, o));
    for (let h = 0; h < Jx; h++) {
      const p = bo[h];
      let g = Ud(l, p),
        m = Ud(u, p);
      if (g === void 0 && m === void 0) continue;
      g || (g = 0),
        m || (m = 0),
        g === 0 || m === 0 || Bd(g) === Bd(m)
          ? ((i[p] = Math.max(jt(_d(g), _d(m), o), 0)),
            (Fe.test(m) || Fe.test(g)) && (i[p] += "%"))
          : (i[p] = m);
    }
    (l.rotate || u.rotate) && (i.rotate = jt(l.rotate || 0, u.rotate || 0, o));
  }
  function Ud(i, l) {
    return i[l] !== void 0 ? i[l] : i.borderRadius;
  }
  const Wx = Ld(0, 0.5, Uf),
    Px = Ld(0.5, 0.95, ze);
  function Ld(i, l, u) {
    return (o) => (o < i ? 0 : o > l ? 1 : u(Sa(i, l, o)));
  }
  function $x(i, l, u) {
    const o = te(i) ? i : ji(i);
    return o.start(fo("", o, l, u)), o.animation;
  }
  function Ra(i, l, u, o = { passive: !0 }) {
    return i.addEventListener(l, u, o), () => i.removeEventListener(l, u, o);
  }
  const Ix = (i, l) => i.depth - l.depth;
  class tb {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(l) {
      _u(this.children, l), (this.isDirty = !0);
    }
    remove(l) {
      Rl(this.children, l), (this.isDirty = !0);
    }
    forEach(l) {
      this.isDirty && this.children.sort(Ix),
        (this.isDirty = !1),
        this.children.forEach(l);
    }
  }
  function eb(i, l) {
    const u = oe.now(),
      o = ({ timestamp: c }) => {
        const d = c - u;
        d >= l && (En(o), i(d - l));
      };
    return wt.setup(o, !0), () => En(o);
  }
  function Il(i) {
    return te(i) ? i.get() : i;
  }
  class nb {
    constructor() {
      this.members = [];
    }
    add(l) {
      _u(this.members, l);
      for (let u = this.members.length - 1; u >= 0; u--) {
        const o = this.members[u];
        if (o === l || o === this.lead || o === this.prevLead) continue;
        const c = o.instance;
        (!c || c.isConnected === !1) &&
          !o.snapshot &&
          (Rl(this.members, o), o.unmount());
      }
      l.scheduleRender();
    }
    remove(l) {
      if (
        (Rl(this.members, l),
        l === this.prevLead && (this.prevLead = void 0),
        l === this.lead)
      ) {
        const u = this.members[this.members.length - 1];
        u && this.promote(u);
      }
    }
    relegate(l) {
      for (let u = this.members.indexOf(l) - 1; u >= 0; u--) {
        const o = this.members[u];
        if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
          return this.promote(o), !0;
      }
      return !1;
    }
    promote(l, u) {
      const o = this.lead;
      if (l !== o && ((this.prevLead = o), (this.lead = l), l.show(), o)) {
        o.updateSnapshot(), l.scheduleRender();
        const { layoutDependency: c } = o.options,
          { layoutDependency: d } = l.options;
        (c === void 0 || c !== d) &&
          ((l.resumeFrom = o),
          u && (o.preserveOpacity = !0),
          o.snapshot &&
            ((l.snapshot = o.snapshot),
            (l.snapshot.latestValues = o.animationValues || o.latestValues)),
          l.root?.isUpdating && (l.isLayoutDirty = !0)),
          l.options.crossfade === !1 && o.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((l) => {
        l.options.onExitComplete?.(),
          l.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach((l) => l.instance && l.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      this.lead?.snapshot && (this.lead.snapshot = void 0);
    }
  }
  const ts = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
    Bo = ["", "X", "Y", "Z"],
    ib = 1e3;
  let ab = 0;
  function Uo(i, l, u, o) {
    const { latestValues: c } = l;
    c[i] && ((u[i] = c[i]), l.setStaticValue(i, 0), o && (o[i] = 0));
  }
  function Hd(i) {
    if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
    const { visualElement: l } = i.options;
    if (!l) return;
    const u = jh(l);
    if (window.MotionHasOptimisedAnimation(u, "transform")) {
      const { layout: c, layoutId: d } = i.options;
      window.MotionCancelOptimisedAnimation(u, "transform", wt, !(c || d));
    }
    const { parent: o } = i;
    o && !o.hasCheckedOptimisedAppear && Hd(o);
  }
  function qd({
    attachResizeListener: i,
    defaultParent: l,
    measureScroll: u,
    checkIsScrollRoot: o,
    resetTransform: c,
  }) {
    return class {
      constructor(h = {}, p = l?.()) {
        (this.id = ab++),
          (this.animationId = 0),
          (this.animationCommitId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.layoutVersion = 0),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              this.nodes.forEach(ub),
              this.nodes.forEach(db),
              this.nodes.forEach(mb),
              this.nodes.forEach(ob);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.linkedParentVersion = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = h),
          (this.root = p ? p.root || p : this),
          (this.path = p ? [...p.path, p] : []),
          (this.parent = p),
          (this.depth = p ? p.depth + 1 : 0);
        for (let g = 0; g < this.path.length; g++)
          this.path[g].shouldResetTransform = !0;
        this.root === this && (this.nodes = new tb());
      }
      addEventListener(h, p) {
        return (
          this.eventHandlers.has(h) || this.eventHandlers.set(h, new Bu()),
          this.eventHandlers.get(h).add(p)
        );
      }
      notifyListeners(h, ...p) {
        const g = this.eventHandlers.get(h);
        g && g.notify(...p);
      }
      hasListeners(h) {
        return this.eventHandlers.has(h);
      }
      mount(h) {
        if (this.instance) return;
        (this.isSVG = Mo(h) && !sx(h)), (this.instance = h);
        const { layoutId: p, layout: g, visualElement: m } = this.options;
        if (
          (m && !m.current && m.mount(h),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          this.root.hasTreeAnimated && (g || p) && (this.isLayoutDirty = !0),
          i)
        ) {
          let v,
            x = 0;
          const T = () => (this.root.updateBlockedByResize = !1);
          wt.read(() => {
            x = window.innerWidth;
          }),
            i(h, () => {
              const N = window.innerWidth;
              N !== x &&
                ((x = N),
                (this.root.updateBlockedByResize = !0),
                v && v(),
                (v = eb(T, 250)),
                ts.hasAnimatedSinceResize &&
                  ((ts.hasAnimatedSinceResize = !1), this.nodes.forEach(Xd)));
            });
        }
        p && this.root.registerSharedNode(p, this),
          this.options.animate !== !1 &&
            m &&
            (p || g) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: v,
                hasLayoutChanged: x,
                hasRelativeLayoutChanged: T,
                layout: N,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                const j =
                    this.options.transition || m.getDefaultTransition() || xb,
                  { onLayoutAnimationStart: _, onLayoutAnimationComplete: U } =
                    m.getProps(),
                  H = !this.targetLayout || !Nd(this.targetLayout, N),
                  X = !x && T;
                if (
                  this.options.layoutRoot ||
                  this.resumeFrom ||
                  X ||
                  (x && (H || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0));
                  const q = { ...co(j, "layout"), onPlay: _, onComplete: U };
                  (m.shouldReduceMotion || this.options.layoutRoot) &&
                    ((q.delay = 0), (q.type = !1)),
                    this.startAnimation(q),
                    this.setAnimationOrigin(v, X, q.path);
                } else
                  x || Xd(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete();
                this.targetLayout = N;
              },
            );
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const h = this.getStack();
        h && h.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          this.eventHandlers.clear(),
          En(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(pb),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: h } = this.options;
        return h && h.getProps().transformTemplate;
      }
      willUpdate(h = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            Hd(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let v = 0; v < this.path.length; v++) {
          const x = this.path[v];
          (x.shouldResetTransform = !0),
            (typeof x.latestValues.x == "string" ||
              typeof x.latestValues.y == "string") &&
              (x.isLayoutDirty = !0),
            x.updateScroll("snapshot"),
            x.options.layoutRoot && x.willUpdate(!1);
        }
        const { layoutId: p, layout: g } = this.options;
        if (p === void 0 && !g) return;
        const m = this.getTransformTemplate();
        (this.prevTransformTemplateValue = m
          ? m(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          h && this.notifyListeners("willUpdate");
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          const g = this.updateBlockedByResize;
          this.unblockUpdate(),
            (this.updateBlockedByResize = !1),
            this.clearAllSnapshots(),
            g && this.nodes.forEach(cb),
            this.nodes.forEach(Yd);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(Gd);
          return;
        }
        (this.animationCommitId = this.animationId),
          this.isUpdating
            ? ((this.isUpdating = !1),
              this.nodes.forEach(fb),
              this.nodes.forEach(hb),
              this.nodes.forEach(lb),
              this.nodes.forEach(sb))
            : this.nodes.forEach(Gd),
          this.clearAllSnapshots();
        const p = oe.now();
        (It.delta = Je(0, 1e3 / 60, p - It.timestamp)),
          (It.timestamp = p),
          (It.isProcessing = !0),
          Hu.update.process(It),
          Hu.preRender.process(It),
          Hu.render.process(It),
          (It.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), To.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(rb), this.sharedNodes.forEach(yb);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          wt.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        wt.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot ||
          !this.instance ||
          ((this.snapshot = this.measure()),
          this.snapshot &&
            !re(this.snapshot.measuredBox.x) &&
            !re(this.snapshot.measuredBox.y) &&
            (this.snapshot = void 0));
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let g = 0; g < this.path.length; g++)
            this.path[g].updateScroll();
        const h = this.layout;
        (this.layout = this.measure(!1)),
          this.layoutVersion++,
          this.layoutCorrected || (this.layoutCorrected = Ft()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: p } = this.options;
        p &&
          p.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            h ? h.layoutBox : void 0,
          );
      }
      updateScroll(h = "measure") {
        let p = !!(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === h &&
            (p = !1),
          p && this.instance)
        ) {
          const g = o(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: h,
            isRoot: g,
            offset: u(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : g,
          };
        }
      }
      resetTransform() {
        if (!c) return;
        const h =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          p = this.projectionDelta && !jd(this.projectionDelta),
          g = this.getTransformTemplate(),
          m = g ? g(this.latestValues, "") : void 0,
          v = m !== this.prevTransformTemplateValue;
        h &&
          this.instance &&
          (p || ni(this.latestValues) || v) &&
          (c(this.instance, m),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(h = !0) {
        const p = this.measurePageBox();
        let g = this.removeElementScroll(p);
        return (
          h && (g = this.removeTransform(g)),
          bb(g),
          {
            animationId: this.root.animationId,
            measuredBox: p,
            layoutBox: g,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        const { visualElement: h } = this.options;
        if (!h) return Ft();
        const p = h.measureViewportBox();
        if (!(this.scroll?.wasRoot || this.path.some(Sb))) {
          const { scroll: m } = this.root;
          m && (We(p.x, m.offset.x), We(p.y, m.offset.y));
        }
        return p;
      }
      removeElementScroll(h) {
        const p = Ft();
        if ((ke(p, h), this.scroll?.wasRoot)) return p;
        for (let g = 0; g < this.path.length; g++) {
          const m = this.path[g],
            { scroll: v, options: x } = m;
          m !== this.root &&
            v &&
            x.layoutScroll &&
            (v.wasRoot && ke(p, h), We(p.x, v.offset.x), We(p.y, v.offset.y));
        }
        return p;
      }
      applyTransform(h, p = !1, g) {
        const m = g || Ft();
        ke(m, h);
        for (let v = 0; v < this.path.length; v++) {
          const x = this.path[v];
          !p &&
            x.options.layoutScroll &&
            x.scroll &&
            x !== x.root &&
            (We(m.x, -x.scroll.offset.x), We(m.y, -x.scroll.offset.y)),
            ni(x.latestValues) && Pl(m, x.latestValues, x.layout?.layoutBox);
        }
        return (
          ni(this.latestValues) &&
            Pl(m, this.latestValues, this.layout?.layoutBox),
          m
        );
      }
      removeTransform(h) {
        const p = Ft();
        ke(p, h);
        for (let g = 0; g < this.path.length; g++) {
          const m = this.path[g];
          if (!ni(m.latestValues)) continue;
          let v;
          m.instance &&
            (zo(m.latestValues) && m.updateSnapshot(),
            (v = Ft()),
            ke(v, m.measurePageBox())),
            Cd(p, m.latestValues, m.snapshot?.layoutBox, v);
        }
        return ni(this.latestValues) && Cd(p, this.latestValues), p;
      }
      setTargetDelta(h) {
        (this.targetDelta = h),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(h) {
        this.options = {
          ...this.options,
          ...h,
          crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
        };
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== It.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(h = !1) {
        const p = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = p.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
        const g = !!this.resumingFrom || this !== p;
        if (
          !(
            h ||
            (g && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            this.parent?.isProjectionDirty ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: v, layoutId: x } = this.options;
        if (!this.layout || !(v || x)) return;
        this.resolvedRelativeTargetAt = It.timestamp;
        const T = this.getClosestProjectingParent();
        T &&
          this.linkedParentVersion !== T.layoutVersion &&
          !T.options.layoutRoot &&
          this.removeRelativeTarget(),
          !this.targetDelta &&
            !this.relativeTarget &&
            (this.options.layoutAnchor !== !1 && T && T.layout
              ? this.createRelativeTarget(
                  T,
                  this.layout.layoutBox,
                  T.layout.layoutBox,
                )
              : this.removeRelativeTarget()),
          !(!this.relativeTarget && !this.targetDelta) &&
            (this.target ||
              ((this.target = Ft()), (this.targetWithTransforms = Ft())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Gx(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                  this.options.layoutAnchor || void 0,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? this.applyTransform(
                        this.layout.layoutBox,
                        !1,
                        this.target,
                      )
                    : ke(this.target, this.layout.layoutBox),
                  id(this.target, this.targetDelta))
                : ke(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              this.options.layoutAnchor !== !1 &&
              T &&
              !!T.resumingFrom == !!this.resumingFrom &&
              !T.options.layoutScroll &&
              T.target &&
              this.animationProgress !== 1
                ? this.createRelativeTarget(T, this.target, T.target)
                : (this.relativeParent = this.relativeTarget = void 0)));
      }
      getClosestProjectingParent() {
        if (
          !(
            !this.parent ||
            zo(this.parent.latestValues) ||
            td(this.parent.latestValues)
          )
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      createRelativeTarget(h, p, g) {
        (this.relativeParent = h),
          (this.linkedParentVersion = h.layoutVersion),
          this.forceRelativeParentToResolveTarget(),
          (this.relativeTarget = Ft()),
          (this.relativeTargetOrigin = Ft()),
          $l(
            this.relativeTargetOrigin,
            p,
            g,
            this.options.layoutAnchor || void 0,
          ),
          ke(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        const h = this.getLead(),
          p = !!this.resumingFrom || this !== h;
        let g = !0;
        if (
          ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
            (g = !1),
          p &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (g = !1),
          this.resolvedRelativeTargetAt === It.timestamp && (g = !1),
          g)
        )
          return;
        const { layout: m, layoutId: v } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(m || v))
        )
          return;
        ke(this.layoutCorrected, this.layout.layoutBox);
        const x = this.treeScale.x,
          T = this.treeScale.y;
        gx(this.layoutCorrected, this.treeScale, this.path, p),
          h.layout &&
            !h.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            ((h.target = h.layout.layoutBox), (h.targetWithTransforms = Ft()));
        const { target: N } = h;
        if (!N) {
          this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        !this.projectionDelta || !this.prevProjectionDelta
          ? this.createProjectionDeltas()
          : (xd(this.prevProjectionDelta.x, this.projectionDelta.x),
            xd(this.prevProjectionDelta.y, this.projectionDelta.y)),
          za(this.projectionDelta, this.layoutCorrected, N, this.latestValues),
          (this.treeScale.x !== x ||
            this.treeScale.y !== T ||
            !Vd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
            !Vd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", N));
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(h = !0) {
        if ((this.options.visualElement?.scheduleRender(), h)) {
          const p = this.getStack();
          p && p.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = Ri()),
          (this.projectionDelta = Ri()),
          (this.projectionDeltaWithTransform = Ri());
      }
      setAnimationOrigin(h, p = !1, g) {
        const m = this.snapshot,
          v = m ? m.latestValues : {},
          x = { ...this.latestValues },
          T = Ri();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !p);
        const N = Ft(),
          j = m ? m.source : void 0,
          _ = this.layout ? this.layout.source : void 0,
          U = j !== _,
          H = this.getStack(),
          X = !H || H.members.length <= 1,
          q = !!(
            U &&
            !X &&
            this.options.crossfade === !0 &&
            !this.path.some(vb)
          );
        this.animationProgress = 0;
        let G;
        const et = g?.interpolateProjection(h);
        (this.mixTargetDelta = (it) => {
          const K = it / 1e3,
            Q = et?.(K);
          Q
            ? ((T.x.translate = Q.x),
              (T.x.scale = jt(h.x.scale, 1, K)),
              (T.x.origin = h.x.origin),
              (T.x.originPoint = h.x.originPoint),
              (T.y.translate = Q.y),
              (T.y.scale = jt(h.y.scale, 1, K)),
              (T.y.origin = h.y.origin),
              (T.y.originPoint = h.y.originPoint))
            : (kd(T.x, h.x, K), kd(T.y, h.y, K)),
            this.setTargetDelta(T),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              ($l(
                N,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox,
                this.options.layoutAnchor || void 0,
              ),
              gb(this.relativeTarget, this.relativeTargetOrigin, N, K),
              G && Kx(this.relativeTarget, G) && (this.isProjectionDirty = !1),
              G || (G = Ft()),
              ke(G, this.relativeTarget)),
            U &&
              ((this.animationValues = x),
              Fx(x, v, this.latestValues, K, q, X)),
            Q &&
              Q.rotate !== void 0 &&
              (this.animationValues || (this.animationValues = x),
              (this.animationValues.pathRotation = Q.rotate)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = K);
        }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(h) {
        this.notifyListeners("animationStart"),
          this.currentAnimation?.stop(),
          this.resumingFrom?.currentAnimation?.stop(),
          this.pendingAnimation &&
            (En(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = wt.update(() => {
            (ts.hasAnimatedSinceResize = !0),
              this.motionValue || (this.motionValue = ji(0)),
              this.motionValue.jump(0, !1),
              (this.currentAnimation = $x(this.motionValue, [0, 1e3], {
                ...h,
                velocity: 0,
                isSync: !0,
                onUpdate: (p) => {
                  this.mixTargetDelta(p), h.onUpdate && h.onUpdate(p);
                },
                onComplete: () => {
                  h.onComplete && h.onComplete(), this.completeAnimation();
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const h = this.getStack();
        h && h.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(ib),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const h = this.getLead();
        let {
          targetWithTransforms: p,
          target: g,
          layout: m,
          latestValues: v,
        } = h;
        if (!(!p || !g || !m)) {
          if (
            this !== h &&
            this.layout &&
            m &&
            Fd(this.options.animationType, this.layout.layoutBox, m.layoutBox)
          ) {
            g = this.target || Ft();
            const x = re(this.layout.layoutBox.x);
            (g.x.min = h.target.x.min), (g.x.max = g.x.min + x);
            const T = re(this.layout.layoutBox.y);
            (g.y.min = h.target.y.min), (g.y.max = g.y.min + T);
          }
          ke(p, g),
            Pl(p, v),
            za(this.projectionDeltaWithTransform, this.layoutCorrected, p, v);
        }
      }
      registerSharedNode(h, p) {
        this.sharedNodes.has(h) || this.sharedNodes.set(h, new nb()),
          this.sharedNodes.get(h).add(p);
        const m = p.options.initialPromotionConfig;
        p.promote({
          transition: m ? m.transition : void 0,
          preserveFollowOpacity:
            m && m.shouldPreserveFollowOpacity
              ? m.shouldPreserveFollowOpacity(p)
              : void 0,
        });
      }
      isLead() {
        const h = this.getStack();
        return h ? h.lead === this : !0;
      }
      getLead() {
        const { layoutId: h } = this.options;
        return h ? this.getStack()?.lead || this : this;
      }
      getPrevLead() {
        const { layoutId: h } = this.options;
        return h ? this.getStack()?.prevLead : void 0;
      }
      getStack() {
        const { layoutId: h } = this.options;
        if (h) return this.root.sharedNodes.get(h);
      }
      promote({ needsReset: h, transition: p, preserveFollowOpacity: g } = {}) {
        const m = this.getStack();
        m && m.promote(this, g),
          h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          p && this.setOptions({ transition: p });
      }
      relegate() {
        const h = this.getStack();
        return h ? h.relegate(this) : !1;
      }
      resetSkewAndRotation() {
        const { visualElement: h } = this.options;
        if (!h) return;
        let p = !1;
        const { latestValues: g } = h;
        if (
          ((g.z ||
            g.rotate ||
            g.rotateX ||
            g.rotateY ||
            g.rotateZ ||
            g.skewX ||
            g.skewY) &&
            (p = !0),
          !p)
        )
          return;
        const m = {};
        g.z && Uo("z", h, m, this.animationValues);
        for (let v = 0; v < Bo.length; v++)
          Uo(`rotate${Bo[v]}`, h, m, this.animationValues),
            Uo(`skew${Bo[v]}`, h, m, this.animationValues);
        h.render();
        for (const v in m)
          h.setStaticValue(v, m[v]),
            this.animationValues && (this.animationValues[v] = m[v]);
        h.scheduleRender();
      }
      applyProjectionStyles(h, p) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) {
          h.visibility = "hidden";
          return;
        }
        const g = this.getTransformTemplate();
        if (this.needsReset) {
          (this.needsReset = !1),
            (h.visibility = ""),
            (h.opacity = ""),
            (h.pointerEvents = Il(p?.pointerEvents) || ""),
            (h.transform = g ? g(this.latestValues, "") : "none");
          return;
        }
        const m = this.getLead();
        if (!this.projectionDelta || !this.layout || !m.target) {
          this.options.layoutId &&
            ((h.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (h.pointerEvents = Il(p?.pointerEvents) || "")),
            this.hasProjected &&
              !ni(this.latestValues) &&
              ((h.transform = g ? g({}, "") : "none"),
              (this.hasProjected = !1));
          return;
        }
        h.visibility = "";
        const v = m.animationValues || m.latestValues;
        this.applyTransformsToTarget();
        let x = Qx(this.projectionDeltaWithTransform, this.treeScale, v);
        g && (x = g(v, x)), (h.transform = x);
        const { x: T, y: N } = this.projectionDelta;
        (h.transformOrigin = `${T.origin * 100}% ${N.origin * 100}% 0`),
          m.animationValues
            ? (h.opacity =
                m === this
                  ? (v.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : v.opacityExit)
            : (h.opacity =
                m === this
                  ? v.opacity !== void 0
                    ? v.opacity
                    : ""
                  : v.opacityExit !== void 0
                    ? v.opacityExit
                    : 0);
        for (const j in Oo) {
          if (v[j] === void 0) continue;
          const { correct: _, applyTo: U, isCSSVariable: H } = Oo[j],
            X = x === "none" ? v[j] : _(v[j], m);
          if (U) {
            const q = U.length;
            for (let G = 0; G < q; G++) h[U[G]] = X;
          } else
            H
              ? (this.options.visualElement.renderState.vars[j] = X)
              : (h[j] = X);
        }
        this.options.layoutId &&
          (h.pointerEvents = m === this ? Il(p?.pointerEvents) || "" : "none");
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((h) => h.currentAnimation?.stop()),
          this.root.nodes.forEach(Yd),
          this.root.sharedNodes.clear();
      }
    };
  }
  function lb(i) {
    i.updateLayout();
  }
  function sb(i) {
    const l = i.resumeFrom?.snapshot || i.snapshot;
    if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
      const { layoutBox: u, measuredBox: o } = i.layout,
        { animationType: c } = i.options,
        d = l.source !== i.layout.source;
      if (c === "size")
        Pe((v) => {
          const x = d ? l.measuredBox[v] : l.layoutBox[v],
            T = re(x);
          (x.min = u[v].min), (x.max = x.min + T);
        });
      else if (c === "x" || c === "y") {
        const v = c === "x" ? "y" : "x";
        _o(d ? l.measuredBox[v] : l.layoutBox[v], u[v]);
      } else
        Fd(c, l.layoutBox, u) &&
          Pe((v) => {
            const x = d ? l.measuredBox[v] : l.layoutBox[v],
              T = re(u[v]);
            (x.max = x.min + T),
              i.relativeTarget &&
                !i.currentAnimation &&
                ((i.isProjectionDirty = !0),
                (i.relativeTarget[v].max = i.relativeTarget[v].min + T));
          });
      const h = Ri();
      za(h, u, l.layoutBox);
      const p = Ri();
      d ? za(p, i.applyTransform(o, !0), l.measuredBox) : za(p, u, l.layoutBox);
      const g = !jd(h);
      let m = !1;
      if (!i.resumeFrom) {
        const v = i.getClosestProjectingParent();
        if (v && !v.resumeFrom) {
          const { snapshot: x, layout: T } = v;
          if (x && T) {
            const N = i.options.layoutAnchor || void 0,
              j = Ft();
            $l(j, l.layoutBox, x.layoutBox, N);
            const _ = Ft();
            $l(_, u, T.layoutBox, N),
              Nd(j, _) || (m = !0),
              v.options.layoutRoot &&
                ((i.relativeTarget = _),
                (i.relativeTargetOrigin = j),
                (i.relativeParent = v));
          }
        }
      }
      i.notifyListeners("didUpdate", {
        layout: u,
        snapshot: l,
        delta: p,
        layoutDelta: h,
        hasLayoutChanged: g,
        hasRelativeLayoutChanged: m,
      });
    } else if (i.isLead()) {
      const { onExitComplete: u } = i.options;
      u && u();
    }
    i.options.transition = void 0;
  }
  function ub(i) {
    i.parent &&
      (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
      i.isSharedProjectionDirty ||
        (i.isSharedProjectionDirty = !!(
          i.isProjectionDirty ||
          i.parent.isProjectionDirty ||
          i.parent.isSharedProjectionDirty
        )),
      i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
  }
  function ob(i) {
    i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
  }
  function rb(i) {
    i.clearSnapshot();
  }
  function Yd(i) {
    i.clearMeasurements();
  }
  function cb(i) {
    (i.isLayoutDirty = !0), i.updateLayout();
  }
  function Gd(i) {
    i.isLayoutDirty = !1;
  }
  function fb(i) {
    i.isAnimationBlocked &&
      i.layout &&
      !i.isLayoutDirty &&
      ((i.snapshot = i.layout), (i.isLayoutDirty = !0));
  }
  function hb(i) {
    const { visualElement: l } = i.options;
    l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
      i.resetTransform();
  }
  function Xd(i) {
    i.finishAnimation(),
      (i.targetDelta = i.relativeTarget = i.target = void 0),
      (i.isProjectionDirty = !0);
  }
  function db(i) {
    i.resolveTargetDelta();
  }
  function mb(i) {
    i.calcProjection();
  }
  function pb(i) {
    i.resetSkewAndRotation();
  }
  function yb(i) {
    i.removeLeadSnapshot();
  }
  function kd(i, l, u) {
    (i.translate = jt(l.translate, 0, u)),
      (i.scale = jt(l.scale, 1, u)),
      (i.origin = l.origin),
      (i.originPoint = l.originPoint);
  }
  function Zd(i, l, u, o) {
    (i.min = jt(l.min, u.min, o)), (i.max = jt(l.max, u.max, o));
  }
  function gb(i, l, u, o) {
    Zd(i.x, l.x, u.x, o), Zd(i.y, l.y, u.y, o);
  }
  function vb(i) {
    return i.animationValues && i.animationValues.opacityExit !== void 0;
  }
  const xb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Kd = (i) =>
      typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(i),
    Qd = Kd("applewebkit/") && !Kd("chrome/") ? Math.round : ze;
  function Jd(i) {
    (i.min = Qd(i.min)), (i.max = Qd(i.max));
  }
  function bb(i) {
    Jd(i.x), Jd(i.y);
  }
  function Fd(i, l, u) {
    return (
      i === "position" || (i === "preserve-aspect" && !Yx(Od(l), Od(u), 0.2))
    );
  }
  function Sb(i) {
    return i !== i.root && i.scroll?.wasRoot;
  }
  const Tb = qd({
      attachResizeListener: (i, l) => Ra(i, "resize", l),
      measureScroll: () => ({
        x:
          document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
        y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Lo = { current: void 0 },
    Wd = qd({
      measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
      defaultParent: () => {
        if (!Lo.current) {
          const i = new Tb({});
          i.mount(window), i.setOptions({ layoutScroll: !0 }), (Lo.current = i);
        }
        return Lo.current;
      },
      resetTransform: (i, l) => {
        i.style.transform = l !== void 0 ? l : "none";
      },
      checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
    }),
    Ho = Y.createContext({
      transformPagePoint: (i) => i,
      isStatic: !1,
      reducedMotion: "never",
    });
  function Pd(i, l) {
    if (typeof i == "function") return i(l);
    i != null && (i.current = l);
  }
  function Ab(...i) {
    return (l) => {
      let u = !1;
      const o = i.map((c) => {
        const d = Pd(c, l);
        return !u && typeof d == "function" && (u = !0), d;
      });
      if (u)
        return () => {
          for (let c = 0; c < o.length; c++) {
            const d = o[c];
            typeof d == "function" ? d() : Pd(i[c], null);
          }
        };
    };
  }
  function Eb(...i) {
    return Y.useCallback(Ab(...i), i);
  }
  class Mb extends Y.Component {
    getSnapshotBeforeUpdate(l) {
      const u = this.props.childRef.current;
      if (
        Gl(u) &&
        l.isPresent &&
        !this.props.isPresent &&
        this.props.pop !== !1
      ) {
        const o = u.offsetParent,
          c = (Gl(o) && o.offsetWidth) || 0,
          d = (Gl(o) && o.offsetHeight) || 0,
          h = getComputedStyle(u),
          p = this.props.sizeRef.current;
        (p.height = parseFloat(h.height)),
          (p.width = parseFloat(h.width)),
          (p.top = u.offsetTop),
          (p.left = u.offsetLeft),
          (p.right = c - p.width - p.left),
          (p.bottom = d - p.height - p.top),
          (p.direction = h.direction);
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function Db({
    children: i,
    isPresent: l,
    anchorX: u,
    anchorY: o,
    root: c,
    pop: d,
  }) {
    const h = Y.useId(),
      p = Y.useRef(null),
      g = Y.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        direction: "ltr",
      }),
      { nonce: m } = Y.useContext(Ho),
      v = d !== !1 ? (i.props?.ref ?? i?.ref) : void 0,
      x = Eb(p, v);
    return (
      Y.useInsertionEffect(() => {
        const {
          width: T,
          height: N,
          top: j,
          left: _,
          right: U,
          bottom: H,
          direction: X,
        } = g.current;
        if (l || d === !1 || !p.current || !T || !N) return;
        const q = X === "rtl",
          G =
            u === "left"
              ? q
                ? `right: ${U}`
                : `left: ${_}`
              : q
                ? `left: ${_}`
                : `right: ${U}`,
          et = o === "bottom" ? `bottom: ${H}` : `top: ${j}`;
        p.current.dataset.motionPopId = h;
        const it = document.createElement("style");
        m && (it.nonce = m);
        const K = c ?? document.head;
        return (
          K.appendChild(it),
          it.sheet &&
            it.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${N}px !important;
            ${G}px !important;
            ${et}px !important;
          }
        `),
          () => {
            p.current?.removeAttribute("data-motion-pop-id"),
              K.contains(it) && K.removeChild(it);
          }
        );
      }, [l]),
      b.jsx(Mb, {
        isPresent: l,
        childRef: p,
        sizeRef: g,
        pop: d,
        children: d === !1 ? i : Y.cloneElement(i, { ref: x }),
      })
    );
  }
  const Cb = ({
    children: i,
    initial: l,
    isPresent: u,
    onExitComplete: o,
    custom: c,
    presenceAffectsLayout: d,
    mode: h,
    anchorX: p,
    anchorY: g,
    root: m,
  }) => {
    const v = Ou(wb),
      x = Y.useId(),
      T = Y.useRef(u),
      N = Y.useRef(o);
    Vu(() => {
      (T.current = u), (N.current = o);
    });
    let j = !0,
      _ = Y.useMemo(
        () => (
          (j = !1),
          {
            id: x,
            initial: l,
            isPresent: u,
            custom: c,
            onExitComplete: (U) => {
              v.set(U, !0);
              for (const H of v.values()) if (!H) return;
              o && o();
            },
            register: (U) => (
              v.set(U, !1),
              () => {
                v.delete(U), !T.current && !v.size && N.current?.();
              }
            ),
          }
        ),
        [u, v, o],
      );
    return (
      d && j && (_ = { ..._ }),
      Y.useMemo(() => {
        v.forEach((U, H) => v.set(H, !1));
      }, [u]),
      Y.useEffect(() => {
        !u && !v.size && o && o();
      }, [u]),
      (i = b.jsx(Db, {
        pop: h === "popLayout",
        isPresent: u,
        anchorX: p,
        anchorY: g,
        root: m,
        children: i,
      })),
      b.jsx(zl.Provider, { value: _, children: i })
    );
  };
  function wb() {
    return new Map();
  }
  function $d(i = !0) {
    const l = Y.useContext(zl);
    if (l === null) return [!0, null];
    const { isPresent: u, onExitComplete: o, register: c } = l,
      d = Y.useId();
    Y.useEffect(() => {
      if (i) return c(d);
    }, [i]);
    const h = Y.useCallback(() => i && o && o(d), [d, o, i]);
    return !u && o ? [!1, h] : [!0];
  }
  const es = (i) => i.key || "";
  function Id(i) {
    const l = [];
    return (
      Y.Children.forEach(i, (u) => {
        Y.isValidElement(u) && l.push(u);
      }),
      l
    );
  }
  const jb = ({
      children: i,
      custom: l,
      initial: u = !0,
      onExitComplete: o,
      presenceAffectsLayout: c = !0,
      mode: d = "sync",
      propagate: h = !1,
      anchorX: p = "left",
      anchorY: g = "top",
      root: m,
    }) => {
      const [v, x] = $d(h),
        T = Y.useMemo(() => Id(i), [i]),
        N = h && !v ? [] : T.map(es),
        j = Y.useRef(!0),
        _ = Y.useRef(T),
        U = Ou(() => new Map()),
        H = Y.useRef(new Set()),
        [X, q] = Y.useState(T),
        [G, et] = Y.useState(T);
      Vu(() => {
        (j.current = !1), (_.current = T);
        for (let Q = 0; Q < G.length; Q++) {
          const at = es(G[Q]);
          N.includes(at)
            ? (U.delete(at), H.current.delete(at))
            : U.get(at) !== !0 && U.set(at, !1);
        }
      }, [G, N.length, N.join("-")]);
      const it = [];
      if (T !== X) {
        let Q = [...T];
        for (let at = 0; at < G.length; at++) {
          const I = G[at],
            pt = es(I);
          N.includes(pt) || (Q.splice(at, 0, I), it.push(I));
        }
        return d === "wait" && it.length && (Q = it), et(Id(Q)), q(T), null;
      }
      const { forceRender: K } = Y.useContext(Nu);
      return b.jsx(b.Fragment, {
        children: G.map((Q) => {
          const at = es(Q),
            I = h && !v ? !1 : T === G || N.includes(at),
            pt = () => {
              if (H.current.has(at)) return;
              if (U.has(at)) H.current.add(at), U.set(at, !0);
              else return;
              let vt = !0;
              U.forEach((ee) => {
                ee || (vt = !1);
              }),
                vt && (K?.(), et(_.current), h && x?.(), o && o());
            };
          return b.jsx(
            Cb,
            {
              isPresent: I,
              initial: !j.current || u ? void 0 : !1,
              custom: l,
              presenceAffectsLayout: c,
              mode: d,
              root: m,
              onExitComplete: I ? void 0 : pt,
              anchorX: p,
              anchorY: g,
              children: Q,
            },
            at,
          );
        }),
      });
    },
    tm = Y.createContext({ strict: !1 }),
    em = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    };
  let nm = !1;
  function zb() {
    if (nm) return;
    const i = {};
    for (const l in em) i[l] = { isEnabled: (u) => em[l].some((o) => !!u[o]) };
    Ph(i), (nm = !0);
  }
  function im() {
    return zb(), dx();
  }
  function Rb(i) {
    const l = im();
    for (const u in i) l[u] = { ...l[u], ...i[u] };
    Ph(l);
  }
  const Nb = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport",
  ]);
  function ns(i) {
    return (
      i.startsWith("while") ||
      (i.startsWith("drag") && i !== "draggable") ||
      i.startsWith("layout") ||
      i.startsWith("onTap") ||
      i.startsWith("onPan") ||
      i.startsWith("onLayout") ||
      Nb.has(i)
    );
  }
  let am = (i) => !ns(i);
  function Ob(i) {
    typeof i == "function" &&
      (am = (l) => (l.startsWith("on") ? !ns(l) : i(l)));
  }
  try {
    Ob(require("@emotion/is-prop-valid").default);
  } catch {}
  function Vb(i, l, u) {
    const o = {};
    for (const c in i)
      (c === "values" && typeof i.values == "object") ||
        te(i[c]) ||
        ((am(c) ||
          (u === !0 && ns(c)) ||
          (!l && !ns(c)) ||
          (i.draggable && c.startsWith("onDrag"))) &&
          (o[c] = i[c]));
    return o;
  }
  const is = Y.createContext({});
  function _b(i, l) {
    if (Jl(i)) {
      const { initial: u, animate: o } = i;
      return {
        initial: u === !1 || wa(u) ? u : void 0,
        animate: wa(o) ? o : void 0,
      };
    }
    return i.inherit !== !1 ? l : {};
  }
  function Bb(i) {
    const { initial: l, animate: u } = _b(i, Y.useContext(is));
    return Y.useMemo(() => ({ initial: l, animate: u }), [lm(l), lm(u)]);
  }
  function lm(i) {
    return Array.isArray(i) ? i.join(" ") : i;
  }
  const qo = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function sm(i, l, u) {
    for (const o in l) !te(l[o]) && !fd(o, u) && (i[o] = l[o]);
  }
  function Ub({ transformTemplate: i }, l) {
    return Y.useMemo(() => {
      const u = qo();
      return No(u, l, i), Object.assign({}, u.vars, u.style);
    }, [l]);
  }
  function Lb(i, l) {
    const u = i.style || {},
      o = {};
    return sm(o, u, i), Object.assign(o, Ub(i, l)), o;
  }
  function Hb(i, l) {
    const u = {},
      o = Lb(i, l);
    return (
      i.drag &&
        i.dragListener !== !1 &&
        ((u.draggable = !1),
        (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
        (o.touchAction =
          i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
      i.tabIndex === void 0 &&
        (i.onTap || i.onTapStart || i.whileTap) &&
        (u.tabIndex = 0),
      (u.style = o),
      u
    );
  }
  const um = () => ({ ...qo(), attrs: {} });
  function qb(i, l, u, o) {
    const c = Y.useMemo(() => {
      const d = um();
      return (
        hd(d, l, md(o), i.transformTemplate, i.style),
        { ...d.attrs, style: { ...d.style } }
      );
    }, [l]);
    if (i.style) {
      const d = {};
      sm(d, i.style, i), (c.style = { ...d, ...c.style });
    }
    return c;
  }
  const Yb = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function Yo(i) {
    return typeof i != "string" || i.includes("-")
      ? !1
      : !!(Yb.indexOf(i) > -1 || /[A-Z]/u.test(i));
  }
  function Gb(i, l, u, { latestValues: o }, c, d = !1, h) {
    const g = ((h ?? Yo(i)) ? qb : Hb)(l, o, c, i),
      m = Vb(l, typeof i == "string", d),
      v = i !== Y.Fragment ? { ...m, ...g, ref: u } : {},
      { children: x } = l,
      T = Y.useMemo(() => (te(x) ? x.get() : x), [x]);
    return Y.createElement(i, { ...v, children: T });
  }
  function Xb(
    { scrapeMotionValuesFromProps: i, createRenderState: l },
    u,
    o,
    c,
  ) {
    return { latestValues: kb(u, o, c, i), renderState: l() };
  }
  function kb(i, l, u, o) {
    const c = {},
      d = o(i, {});
    for (const T in d) c[T] = Il(d[T]);
    let { initial: h, animate: p } = i;
    const g = Jl(i),
      m = Jh(i);
    l &&
      m &&
      !g &&
      i.inherit !== !1 &&
      (h === void 0 && (h = l.initial), p === void 0 && (p = l.animate));
    let v = u ? u.initial === !1 : !1;
    v = v || h === !1;
    const x = v ? p : h;
    if (x && typeof x != "boolean" && !Ql(x)) {
      const T = Array.isArray(x) ? x : [x];
      for (let N = 0; N < T.length; N++) {
        const j = ho(i, T[N]);
        if (j) {
          const { transitionEnd: _, transition: U, ...H } = j;
          for (const X in H) {
            let q = H[X];
            if (Array.isArray(q)) {
              const G = v ? q.length - 1 : 0;
              q = q[G];
            }
            q !== null && (c[X] = q);
          }
          for (const X in _) c[X] = _[X];
        }
      }
    }
    return c;
  }
  const om = (i) => (l, u) => {
      const o = Y.useContext(is),
        c = Y.useContext(zl),
        d = () => Xb(i, l, o, c);
      return u ? d() : Ou(d);
    },
    Zb = om({ scrapeMotionValuesFromProps: Vo, createRenderState: qo }),
    Kb = om({ scrapeMotionValuesFromProps: pd, createRenderState: um }),
    Qb = Symbol.for("motionComponentSymbol");
  function Jb(i, l, u) {
    const o = Y.useRef(u);
    Y.useInsertionEffect(() => {
      o.current = u;
    });
    const c = Y.useRef(null);
    return Y.useCallback(
      (d) => {
        d && i.onMount?.(d), l && (d ? l.mount(d) : l.unmount());
        const h = o.current;
        if (typeof h == "function")
          if (d) {
            const p = h(d);
            typeof p == "function" && (c.current = p);
          } else c.current ? (c.current(), (c.current = null)) : h(d);
        else h && (h.current = d);
      },
      [l],
    );
  }
  const rm = Y.createContext({});
  function Ni(i) {
    return (
      i &&
      typeof i == "object" &&
      Object.prototype.hasOwnProperty.call(i, "current")
    );
  }
  function Fb(i, l, u, o, c, d) {
    const { visualElement: h } = Y.useContext(is),
      p = Y.useContext(tm),
      g = Y.useContext(zl),
      m = Y.useContext(Ho),
      v = m.reducedMotion,
      x = m.skipAnimations,
      T = Y.useRef(null),
      N = Y.useRef(!1);
    (o = o || p.renderer),
      !T.current &&
        o &&
        ((T.current = o(i, {
          visualState: l,
          parent: h,
          props: u,
          presenceContext: g,
          blockInitialAnimation: g ? g.initial === !1 : !1,
          reducedMotionConfig: v,
          skipAnimations: x,
          isSVG: d,
        })),
        N.current && T.current && (T.current.manuallyAnimateOnMount = !0));
    const j = T.current,
      _ = Y.useContext(rm);
    j &&
      !j.projection &&
      c &&
      (j.type === "html" || j.type === "svg") &&
      Wb(T.current, u, c, _);
    const U = Y.useRef(!1);
    Y.useInsertionEffect(() => {
      j && U.current && j.update(u, g);
    });
    const H = u[wh],
      X = Y.useRef(
        !!H &&
          typeof window < "u" &&
          !window.MotionHandoffIsComplete?.(H) &&
          window.MotionHasOptimisedAnimation?.(H),
      );
    return (
      Vu(() => {
        (N.current = !0),
          j &&
            ((U.current = !0),
            (window.MotionIsMounted = !0),
            j.updateFeatures(),
            j.scheduleRenderMicrotask(),
            X.current && j.animationState && j.animationState.animateChanges());
      }),
      Y.useEffect(() => {
        j &&
          (!X.current && j.animationState && j.animationState.animateChanges(),
          X.current &&
            (queueMicrotask(() => {
              window.MotionHandoffMarkAsComplete?.(H);
            }),
            (X.current = !1)),
          (j.enteringChildren = void 0));
      }),
      j
    );
  }
  function Wb(i, l, u, o) {
    const {
      layoutId: c,
      layout: d,
      drag: h,
      dragConstraints: p,
      layoutScroll: g,
      layoutRoot: m,
      layoutAnchor: v,
      layoutCrossfade: x,
    } = l;
    (i.projection = new u(
      i.latestValues,
      l["data-framer-portal-id"] ? void 0 : cm(i.parent),
    )),
      i.projection.setOptions({
        layoutId: c,
        layout: d,
        alwaysMeasureLayout: !!h || (p && Ni(p)),
        visualElement: i,
        animationType: typeof d == "string" ? d : "both",
        initialPromotionConfig: o,
        crossfade: x,
        layoutScroll: g,
        layoutRoot: m,
        layoutAnchor: v,
      });
  }
  function cm(i) {
    if (i)
      return i.options.allowProjection !== !1 ? i.projection : cm(i.parent);
  }
  function Go(i, { forwardMotionProps: l = !1, type: u } = {}, o, c) {
    o && Rb(o);
    const d = u ? u === "svg" : Yo(i),
      h = d ? Kb : Zb;
    function p(m, v) {
      let x;
      const T = { ...Y.useContext(Ho), ...m, layoutId: Pb(m) },
        { isStatic: N } = T,
        j = Bb(m),
        _ = h(m, N);
      if (!N && typeof window < "u") {
        $b();
        const U = Ib(T);
        (x = U.MeasureLayout),
          (j.visualElement = Fb(i, _, T, c, U.ProjectionNode, d));
      }
      return b.jsxs(is.Provider, {
        value: j,
        children: [
          x && j.visualElement
            ? b.jsx(x, { visualElement: j.visualElement, ...T })
            : null,
          Gb(i, m, Jb(_, j.visualElement, v), _, N, l, d),
        ],
      });
    }
    p.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
    const g = Y.forwardRef(p);
    return (g[Qb] = i), g;
  }
  function Pb({ layoutId: i }) {
    const l = Y.useContext(Nu).id;
    return l && i !== void 0 ? l + "-" + i : i;
  }
  function $b(i, l) {
    Y.useContext(tm).strict;
  }
  function Ib(i) {
    const l = im(),
      { drag: u, layout: o } = l;
    if (!u && !o) return {};
    const c = { ...u, ...o };
    return {
      MeasureLayout:
        u?.isEnabled(i) || o?.isEnabled(i) ? c.MeasureLayout : void 0,
      ProjectionNode: c.ProjectionNode,
    };
  }
  function tS(i, l) {
    if (typeof Proxy > "u") return Go;
    const u = new Map(),
      o = (d, h) => Go(d, h, i, l),
      c = (d, h) => o(d, h);
    return new Proxy(c, {
      get: (d, h) =>
        h === "create"
          ? o
          : (u.has(h) || u.set(h, Go(h, void 0, i, l)), u.get(h)),
    });
  }
  const eS = (i, l) =>
    (l.isSVG ?? Yo(i))
      ? new zx(l)
      : new Ex(l, { allowProjection: i !== Y.Fragment });
  class nS extends Dn {
    constructor(l) {
      super(l), l.animationState || (l.animationState = _x(l));
    }
    updateAnimationControlsSubscription() {
      const { animate: l } = this.node.getProps();
      Ql(l) && (this.unmountControls = l.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: l } = this.node.getProps(),
        { animate: u } = this.node.prevProps || {};
      l !== u && this.updateAnimationControlsSubscription();
    }
    unmount() {
      this.node.animationState.reset(), this.unmountControls?.();
    }
  }
  let iS = 0;
  class aS extends Dn {
    constructor() {
      super(...arguments), (this.id = iS++), (this.isExitComplete = !1);
    }
    update() {
      if (!this.node.presenceContext) return;
      const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
        { isPresent: o } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || l === o) return;
      if (l && o === !1) {
        if (this.isExitComplete) {
          const { initial: d, custom: h } = this.node.getProps();
          if (
            typeof d == "string" ||
            (typeof d == "object" && d !== null && !Array.isArray(d))
          ) {
            const p = ei(this.node, d, h);
            if (p) {
              const { transition: g, transitionEnd: m, ...v } = p;
              for (const x in v) this.node.getValue(x)?.jump(v[x]);
            }
          }
          this.node.animationState.reset(),
            this.node.animationState.animateChanges();
        } else this.node.animationState.setActive("exit", !1);
        this.isExitComplete = !1;
        return;
      }
      const c = this.node.animationState.setActive("exit", !l);
      u &&
        !l &&
        c.then(() => {
          (this.isExitComplete = !0), u(this.id);
        });
    }
    mount() {
      const { register: l, onExitComplete: u } =
        this.node.presenceContext || {};
      u && u(this.id), l && (this.unmount = l(this.id));
    }
    unmount() {}
  }
  const lS = { animation: { Feature: nS }, exit: { Feature: aS } };
  function Na(i) {
    return { point: { x: i.pageX, y: i.pageY } };
  }
  const sS = (i) => (l) => Ao(l) && i(l, Na(l));
  function Oa(i, l, u, o) {
    return Ra(i, l, sS(u), o);
  }
  const fm = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
    hm = (i, l) => Math.abs(i - l);
  function uS(i, l) {
    const u = hm(i.x, l.x),
      o = hm(i.y, l.y);
    return Math.sqrt(u ** 2 + o ** 2);
  }
  const dm = new Set(["auto", "scroll"]);
  class mm {
    constructor(
      l,
      u,
      {
        transformPagePoint: o,
        contextWindow: c = window,
        dragSnapToOrigin: d = !1,
        distanceThreshold: h = 3,
        element: p,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (j) => {
          this.handleScroll(j.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = as(
              this.lastRawMoveEventInfo,
              this.transformPagePoint,
            ));
          const j = Xo(this.lastMoveEventInfo, this.history),
            _ = this.startEvent !== null,
            U = uS(j.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!_ && !U) return;
          const { point: H } = j,
            { timestamp: X } = It;
          this.history.push({ ...H, timestamp: X });
          const { onStart: q, onMove: G } = this.handlers;
          _ ||
            (q && q(this.lastMoveEvent, j),
            (this.startEvent = this.lastMoveEvent)),
            G && G(this.lastMoveEvent, j);
        }),
        (this.handlePointerMove = (j, _) => {
          (this.lastMoveEvent = j),
            (this.lastRawMoveEventInfo = _),
            (this.lastMoveEventInfo = as(_, this.transformPagePoint)),
            wt.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (j, _) => {
          this.end();
          const {
            onEnd: U,
            onSessionEnd: H,
            resumeAnimation: X,
          } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && X && X(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          const q = Xo(
            j.type === "pointercancel"
              ? this.lastMoveEventInfo
              : as(_, this.transformPagePoint),
            this.history,
          );
          this.startEvent && U && U(j, q), H && H(j, q);
        }),
        !Ao(l))
      )
        return;
      (this.dragSnapToOrigin = d),
        (this.handlers = u),
        (this.transformPagePoint = o),
        (this.distanceThreshold = h),
        (this.contextWindow = c || window);
      const g = Na(l),
        m = as(g, this.transformPagePoint),
        { point: v } = m,
        { timestamp: x } = It;
      this.history = [{ ...v, timestamp: x }];
      const { onSessionStart: T } = u;
      T && T(l, Xo(m, this.history));
      const N = { passive: !0, capture: !0 };
      (this.removeListeners = ba(
        Oa(this.contextWindow, "pointermove", this.handlePointerMove, N),
        Oa(this.contextWindow, "pointerup", this.handlePointerUp, N),
        Oa(this.contextWindow, "pointercancel", this.handlePointerUp, N),
      )),
        p && this.startScrollTracking(p);
    }
    startScrollTracking(l) {
      let u = l.parentElement;
      for (; u; ) {
        const o = getComputedStyle(u);
        (dm.has(o.overflowX) || dm.has(o.overflowY)) &&
          this.scrollPositions.set(u, { x: u.scrollLeft, y: u.scrollTop }),
          (u = u.parentElement);
      }
      this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY,
      }),
        window.addEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        (this.removeScrollListeners = () => {
          window.removeEventListener("scroll", this.onElementScroll, {
            capture: !0,
          }),
            window.removeEventListener("scroll", this.onWindowScroll);
        });
    }
    handleScroll(l) {
      const u = this.scrollPositions.get(l);
      if (!u) return;
      const o = l === window,
        c = o
          ? { x: window.scrollX, y: window.scrollY }
          : { x: l.scrollLeft, y: l.scrollTop },
        d = { x: c.x - u.x, y: c.y - u.y };
      (d.x === 0 && d.y === 0) ||
        (o
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += d.x),
            (this.lastMoveEventInfo.point.y += d.y))
          : this.history.length > 0 &&
            ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
        this.scrollPositions.set(l, c),
        wt.update(this.updatePoint, !0));
    }
    updateHandlers(l) {
      this.handlers = l;
    }
    end() {
      this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        En(this.updatePoint);
    }
  }
  function as(i, l) {
    return l ? { point: l(i.point) } : i;
  }
  function pm(i, l) {
    return { x: i.x - l.x, y: i.y - l.y };
  }
  function Xo({ point: i }, l) {
    return {
      point: i,
      delta: pm(i, ym(l)),
      offset: pm(i, oS(l)),
      velocity: rS(l, 0.1),
    };
  }
  function oS(i) {
    return i[0];
  }
  function ym(i) {
    return i[i.length - 1];
  }
  function rS(i, l) {
    if (i.length < 2) return { x: 0, y: 0 };
    let u = i.length - 1,
      o = null;
    const c = ym(i);
    for (; u >= 0 && ((o = i[u]), !(c.timestamp - o.timestamp > xe(l))); ) u--;
    if (!o) return { x: 0, y: 0 };
    o === i[0] &&
      i.length > 2 &&
      c.timestamp - o.timestamp > xe(l) * 2 &&
      (o = i[1]);
    const d = Re(c.timestamp - o.timestamp);
    if (d === 0) return { x: 0, y: 0 };
    const h = { x: (c.x - o.x) / d, y: (c.y - o.y) / d };
    return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
  }
  function cS(i, { min: l, max: u }, o) {
    return (
      l !== void 0 && i < l
        ? (i = o ? jt(l, i, o.min) : Math.max(i, l))
        : u !== void 0 && i > u && (i = o ? jt(u, i, o.max) : Math.min(i, u)),
      i
    );
  }
  function gm(i, l, u) {
    return {
      min: l !== void 0 ? i.min + l : void 0,
      max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0,
    };
  }
  function fS(i, { top: l, left: u, bottom: o, right: c }) {
    return { x: gm(i.x, u, c), y: gm(i.y, l, o) };
  }
  function vm(i, l) {
    let u = l.min - i.min,
      o = l.max - i.max;
    return (
      l.max - l.min < i.max - i.min && ([u, o] = [o, u]), { min: u, max: o }
    );
  }
  function hS(i, l) {
    return { x: vm(i.x, l.x), y: vm(i.y, l.y) };
  }
  function dS(i, l) {
    let u = 0.5;
    const o = re(i),
      c = re(l);
    return (
      c > o
        ? (u = Sa(l.min, l.max - o, i.min))
        : o > c && (u = Sa(i.min, i.max - c, l.min)),
      Je(0, 1, u)
    );
  }
  function mS(i, l) {
    const u = {};
    return (
      l.min !== void 0 && (u.min = l.min - i.min),
      l.max !== void 0 && (u.max = l.max - i.min),
      u
    );
  }
  const ko = 0.35;
  function pS(i = ko) {
    return (
      i === !1 ? (i = 0) : i === !0 && (i = ko),
      { x: xm(i, "left", "right"), y: xm(i, "top", "bottom") }
    );
  }
  function xm(i, l, u) {
    return { min: bm(i, l), max: bm(i, u) };
  }
  function bm(i, l) {
    return typeof i == "number" ? i : i[l] || 0;
  }
  const yS = new WeakMap();
  class gS {
    constructor(l) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Ft()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = l);
    }
    start(l, { snapToCursor: u = !1, distanceThreshold: o } = {}) {
      const { presenceContext: c } = this.visualElement;
      if (c && c.isPresent === !1) return;
      const d = (x) => {
          u && this.snapToCursor(Na(x).point), this.stopAnimation();
        },
        h = (x, T) => {
          const {
            drag: N,
            dragPropagation: j,
            onDragStart: _,
          } = this.getProps();
          if (
            N &&
            !j &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = X1(N)),
            !this.openDragLock)
          )
            return;
          (this.latestPointerEvent = x),
            (this.latestPanInfo = T),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Pe((H) => {
              let X = this.getAxisMotionValue(H).get() || 0;
              if (Fe.test(X)) {
                const { projection: q } = this.visualElement;
                if (q && q.layout) {
                  const G = q.layout.layoutBox[H];
                  G && (X = re(G) * (parseFloat(X) / 100));
                }
              }
              this.originPoint[H] = X;
            }),
            _ && wt.update(() => _(x, T), !1, !0),
            po(this.visualElement, "transform");
          const { animationState: U } = this.visualElement;
          U && U.setActive("whileDrag", !0);
        },
        p = (x, T) => {
          (this.latestPointerEvent = x), (this.latestPanInfo = T);
          const {
            dragPropagation: N,
            dragDirectionLock: j,
            onDirectionLock: _,
            onDrag: U,
          } = this.getProps();
          if (!N && !this.openDragLock) return;
          const { offset: H } = T;
          if (j && this.currentDirection === null) {
            (this.currentDirection = xS(H)),
              this.currentDirection !== null && _ && _(this.currentDirection);
            return;
          }
          this.updateAxis("x", T.point, H),
            this.updateAxis("y", T.point, H),
            this.visualElement.render(),
            U && wt.update(() => U(x, T), !1, !0);
        },
        g = (x, T) => {
          (this.latestPointerEvent = x),
            (this.latestPanInfo = T),
            this.stop(x, T),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null);
        },
        m = () => {
          const { dragSnapToOrigin: x } = this.getProps();
          (x || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: v } = this.getProps();
      this.panSession = new mm(
        l,
        {
          onSessionStart: d,
          onStart: h,
          onMove: p,
          onSessionEnd: g,
          resumeAnimation: m,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: v,
          distanceThreshold: o,
          contextWindow: fm(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(l, u) {
      const o = l || this.latestPointerEvent,
        c = u || this.latestPanInfo,
        d = this.isDragging;
      if ((this.cancel(), !d || !c || !o)) return;
      const { velocity: h } = c;
      this.startAnimation(h);
      const { onDragEnd: p } = this.getProps();
      p && wt.postRender(() => p(o, c));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: l, animationState: u } = this.visualElement;
      l && (l.isAnimationBlocked = !1), this.endPanSession();
      const { dragPropagation: o } = this.getProps();
      !o &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        u && u.setActive("whileDrag", !1);
    }
    endPanSession() {
      this.panSession && this.panSession.end(), (this.panSession = void 0);
    }
    updateAxis(l, u, o) {
      const { drag: c } = this.getProps();
      if (!o || !ls(l, c, this.currentDirection)) return;
      const d = this.getAxisMotionValue(l);
      let h = this.originPoint[l] + o[l];
      this.constraints &&
        this.constraints[l] &&
        (h = cS(h, this.constraints[l], this.elastic[l])),
        d.set(h);
    }
    resolveConstraints() {
      const { dragConstraints: l, dragElastic: u } = this.getProps(),
        o =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        c = this.constraints;
      l && Ni(l)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : l && o
          ? (this.constraints = fS(o.layoutBox, l))
          : (this.constraints = !1),
        (this.elastic = pS(u)),
        c !== this.constraints &&
          !Ni(l) &&
          o &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Pe((d) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(d) &&
              (this.constraints[d] = mS(o.layoutBox[d], this.constraints[d]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: l, onMeasureDragConstraints: u } =
        this.getProps();
      if (!l || !Ni(l)) return !1;
      const o = l.current,
        { projection: c } = this.visualElement;
      if (!c || !c.layout) return !1;
      c.root && ((c.root.scroll = void 0), c.root.updateScroll());
      const d = vx(o, c.root, this.visualElement.getTransformPagePoint());
      let h = hS(c.layout.layoutBox, d);
      if (u) {
        const p = u(px(h));
        (this.hasMutatedConstraints = !!p), p && (h = Ih(p));
      }
      return h;
    }
    startAnimation(l) {
      const {
          drag: u,
          dragMomentum: o,
          dragElastic: c,
          dragTransition: d,
          dragSnapToOrigin: h,
          onDragTransitionEnd: p,
        } = this.getProps(),
        g = this.constraints || {},
        m = Pe((v) => {
          if (!ls(v, u, this.currentDirection)) return;
          let x = (g && g[v]) || {};
          (h === !0 || h === v) && (x = { min: 0, max: 0 });
          const T = c ? 200 : 1e6,
            N = c ? 40 : 1e7,
            j = {
              type: "inertia",
              velocity: o ? l[v] : 0,
              bounceStiffness: T,
              bounceDamping: N,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...d,
              ...x,
            };
          return this.startAxisValueAnimation(v, j);
        });
      return Promise.all(m).then(p);
    }
    startAxisValueAnimation(l, u) {
      const o = this.getAxisMotionValue(l);
      return (
        po(this.visualElement, l),
        o.start(fo(l, o, 0, u, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Pe((l) => this.getAxisMotionValue(l).stop());
    }
    getAxisMotionValue(l) {
      const u = `_drag${l.toUpperCase()}`,
        c = this.visualElement.getProps()[u];
      return (
        c ||
        this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0)
      );
    }
    snapToCursor(l) {
      Pe((u) => {
        const { drag: o } = this.getProps();
        if (!ls(u, o, this.currentDirection)) return;
        const { projection: c } = this.visualElement,
          d = this.getAxisMotionValue(u);
        if (c && c.layout) {
          const { min: h, max: p } = c.layout.layoutBox[u],
            g = d.get() || 0;
          d.set(l[u] - jt(h, p, 0.5) + g);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: l, dragConstraints: u } = this.getProps(),
        { projection: o } = this.visualElement;
      if (!Ni(u) || !o || !this.constraints) return;
      this.stopAnimation();
      const c = { x: 0, y: 0 };
      Pe((h) => {
        const p = this.getAxisMotionValue(h);
        if (p && this.constraints !== !1) {
          const g = p.get();
          c[h] = dS({ min: g, max: g }, this.constraints[h]);
        }
      });
      const { transformTemplate: d } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        Pe((h) => {
          if (!ls(h, l, null)) return;
          const p = this.getAxisMotionValue(h),
            { min: g, max: m } = this.constraints[h];
          p.set(jt(g, m, c[h]));
        }),
        this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current) return;
      yS.set(this.visualElement, this);
      const l = this.visualElement.current,
        u = Oa(l, "pointerdown", (m) => {
          const { drag: v, dragListener: x = !0 } = this.getProps(),
            T = m.target,
            N = T !== l && F1(T);
          v && x && !N && this.start(m);
        });
      let o;
      const c = () => {
          const { dragConstraints: m } = this.getProps();
          Ni(m) &&
            m.current &&
            ((this.constraints = this.resolveRefConstraints()),
            o ||
              (o = vS(l, m.current, () =>
                this.scalePositionWithinConstraints(),
              )));
        },
        { projection: d } = this.visualElement,
        h = d.addEventListener("measure", c);
      d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()),
        wt.read(c);
      const p = Ra(window, "resize", () =>
          this.scalePositionWithinConstraints(),
        ),
        g = d.addEventListener(
          "didUpdate",
          ({ delta: m, hasLayoutChanged: v }) => {
            this.isDragging &&
              v &&
              (Pe((x) => {
                const T = this.getAxisMotionValue(x);
                T &&
                  ((this.originPoint[x] += m[x].translate),
                  T.set(T.get() + m[x].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        p(), u(), h(), g && g(), o && o();
      };
    }
    getProps() {
      const l = this.visualElement.getProps(),
        {
          drag: u = !1,
          dragDirectionLock: o = !1,
          dragPropagation: c = !1,
          dragConstraints: d = !1,
          dragElastic: h = ko,
          dragMomentum: p = !0,
        } = l;
      return {
        ...l,
        drag: u,
        dragDirectionLock: o,
        dragPropagation: c,
        dragConstraints: d,
        dragElastic: h,
        dragMomentum: p,
      };
    }
  }
  function Sm(i) {
    let l = !0;
    return () => {
      if (l) {
        l = !1;
        return;
      }
      i();
    };
  }
  function vS(i, l, u) {
    const o = Zh(i, Sm(u)),
      c = Zh(l, Sm(u));
    return () => {
      o(), c();
    };
  }
  function ls(i, l, u) {
    return (l === !0 || l === i) && (u === null || u === i);
  }
  function xS(i, l = 10) {
    let u = null;
    return Math.abs(i.y) > l ? (u = "y") : Math.abs(i.x) > l && (u = "x"), u;
  }
  class bS extends Dn {
    constructor(l) {
      super(l),
        (this.removeGroupControls = ze),
        (this.removeListeners = ze),
        (this.controls = new gS(l));
    }
    mount() {
      const { dragControls: l } = this.node.getProps();
      l && (this.removeGroupControls = l.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || ze);
    }
    update() {
      const { dragControls: l } = this.node.getProps(),
        { dragControls: u } = this.node.prevProps || {};
      l !== u &&
        (this.removeGroupControls(),
        l && (this.removeGroupControls = l.subscribe(this.controls)));
    }
    unmount() {
      this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession();
    }
  }
  const Zo = (i) => (l, u) => {
    i && wt.update(() => i(l, u), !1, !0);
  };
  class SS extends Dn {
    constructor() {
      super(...arguments), (this.removePointerDownListener = ze);
    }
    onPointerDown(l) {
      this.session = new mm(l, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: fm(this.node),
      });
    }
    createPanHandlers() {
      const {
        onPanSessionStart: l,
        onPanStart: u,
        onPan: o,
        onPanEnd: c,
      } = this.node.getProps();
      return {
        onSessionStart: Zo(l),
        onStart: Zo(u),
        onMove: Zo(o),
        onEnd: (d, h) => {
          delete this.session, c && wt.postRender(() => c(d, h));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Oa(
        this.node.current,
        "pointerdown",
        (l) => this.onPointerDown(l),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  let Ko = !1;
  class TS extends Y.Component {
    componentDidMount() {
      const {
          visualElement: l,
          layoutGroup: u,
          switchLayoutGroup: o,
          layoutId: c,
        } = this.props,
        { projection: d } = l;
      d &&
        (u.group && u.group.add(d),
        o && o.register && c && o.register(d),
        Ko && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove(),
        })),
        (ts.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(l) {
      const {
          layoutDependency: u,
          visualElement: o,
          drag: c,
          isPresent: d,
        } = this.props,
        { projection: h } = o;
      return (
        h &&
          ((h.isPresent = d),
          l.layoutDependency !== u &&
            h.setOptions({ ...h.options, layoutDependency: u }),
          (Ko = !0),
          c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d
            ? h.willUpdate()
            : this.safeToRemove(),
          l.isPresent !== d &&
            (d
              ? h.promote()
              : h.relegate() ||
                wt.postRender(() => {
                  const p = h.getStack();
                  (!p || !p.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      const { visualElement: l, layoutAnchor: u } = this.props,
        { projection: o } = l;
      o &&
        ((o.options.layoutAnchor = u),
        o.root.didUpdate(),
        To.postRender(() => {
          !o.currentAnimation && o.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: l,
          layoutGroup: u,
          switchLayoutGroup: o,
        } = this.props,
        { projection: c } = l;
      (Ko = !0),
        c &&
          (c.scheduleCheckAfterUnmount(),
          u && u.group && u.group.remove(c),
          o && o.deregister && o.deregister(c));
    }
    safeToRemove() {
      const { safeToRemove: l } = this.props;
      l && l();
    }
    render() {
      return null;
    }
  }
  function Tm(i) {
    const [l, u] = $d(),
      o = Y.useContext(Nu);
    return b.jsx(TS, {
      ...i,
      layoutGroup: o,
      switchLayoutGroup: Y.useContext(rm),
      isPresent: l,
      safeToRemove: u,
    });
  }
  const AS = {
    pan: { Feature: SS },
    drag: { Feature: bS, ProjectionNode: Wd, MeasureLayout: Tm },
  };
  function Am(i, l, u) {
    const { props: o } = i;
    i.animationState &&
      o.whileHover &&
      i.animationState.setActive("whileHover", u === "Start");
    const c = "onHover" + u,
      d = o[c];
    d && wt.postRender(() => d(l, Na(l)));
  }
  class ES extends Dn {
    mount() {
      const { current: l } = this.node;
      l &&
        (this.unmount = Z1(
          l,
          (u, o) => (Am(this.node, o, "Start"), (c) => Am(this.node, c, "End")),
        ));
    }
    unmount() {}
  }
  class MS extends Dn {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let l = !1;
      try {
        l = this.node.current.matches(":focus-visible");
      } catch {
        l = !0;
      }
      !l ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = ba(
        Ra(this.node.current, "focus", () => this.onFocus()),
        Ra(this.node.current, "blur", () => this.onBlur()),
      );
    }
    unmount() {}
  }
  function Em(i, l, u) {
    const { props: o } = i;
    if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
    i.animationState &&
      o.whileTap &&
      i.animationState.setActive("whileTap", u === "Start");
    const c = "onTap" + (u === "End" ? "" : u),
      d = o[c];
    d && wt.postRender(() => d(l, Na(l)));
  }
  class DS extends Dn {
    mount() {
      const { current: l } = this.node;
      if (!l) return;
      const { globalTapTarget: u, propagate: o } = this.node.props;
      this.unmount = P1(
        l,
        (c, d) => (
          Em(this.node, d, "Start"),
          (h, { success: p }) => Em(this.node, h, p ? "End" : "Cancel")
        ),
        { useGlobalTarget: u, stopPropagation: o?.tap === !1 },
      );
    }
    unmount() {}
  }
  const Qo = new WeakMap(),
    Jo = new WeakMap(),
    CS = (i) => {
      const l = Qo.get(i.target);
      l && l(i);
    },
    wS = (i) => {
      i.forEach(CS);
    };
  function jS({ root: i, ...l }) {
    const u = i || document;
    Jo.has(u) || Jo.set(u, {});
    const o = Jo.get(u),
      c = JSON.stringify(l);
    return (
      o[c] || (o[c] = new IntersectionObserver(wS, { root: i, ...l })), o[c]
    );
  }
  function zS(i, l, u) {
    const o = jS(l);
    return (
      Qo.set(i, u),
      o.observe(i),
      () => {
        Qo.delete(i), o.unobserve(i);
      }
    );
  }
  const RS = { some: 0, all: 1 };
  class NS extends Dn {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.stopObserver?.();
      const { viewport: l = {} } = this.node.getProps(),
        { root: u, margin: o, amount: c = "some", once: d } = l,
        h = {
          root: u ? u.current : void 0,
          rootMargin: o,
          threshold: typeof c == "number" ? c : RS[c],
        },
        p = (g) => {
          const { isIntersecting: m } = g;
          if (
            this.isInView === m ||
            ((this.isInView = m), d && !m && this.hasEnteredView)
          )
            return;
          m && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", m);
          const { onViewportEnter: v, onViewportLeave: x } =
              this.node.getProps(),
            T = m ? v : x;
          T && T(g);
        };
      this.stopObserver = zS(this.node.current, h, p);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: l, prevProps: u } = this.node;
      ["amount", "margin", "root"].some(OS(l, u)) && this.startObserver();
    }
    unmount() {
      this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1);
    }
  }
  function OS({ viewport: i = {} }, { viewport: l = {} } = {}) {
    return (u) => i[u] !== l[u];
  }
  const VS = {
      ...lS,
      ...{
        inView: { Feature: NS },
        tap: { Feature: DS },
        focus: { Feature: MS },
        hover: { Feature: ES },
      },
      ...AS,
      ...{ layout: { ProjectionNode: Wd, MeasureLayout: Tm } },
    },
    Xt = tS(VS, eS);
  function ai({ className: i }) {
    return b.jsxs("svg", {
      className: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        b.jsx("path", {
          d: "M7 17L17 7",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
        b.jsx("path", {
          d: "M7 7h10v10",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    });
  }
  function _S({ className: i }) {
    return b.jsxs("svg", {
      className: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        b.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "9",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
        b.jsx("path", {
          d: "M12 7v5l3 2",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
      ],
    });
  }
  function BS({ className: i }) {
    return b.jsxs("svg", {
      className: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        b.jsx("path", {
          d: "M6 8h9v10.5a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 6 18.5V8z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinejoin: "round",
        }),
        b.jsx("path", {
          d: "M15 10h1.8A2.2 2.2 0 0 1 19 12.2v2.6A2.2 2.2 0 0 1 16.8 17H15",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
        b.jsx("path", {
          d: "M8 5.5c0-1 .8-1.5 2-1.5s1.7.7 2.5 1.5c.6-.7 1.3-1.5 2.5-1.5",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
        b.jsx("path", {
          d: "M8.5 11v7M12 11v7",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          opacity: "0.45",
        }),
      ],
    });
  }
  function US({ className: i }) {
    return b.jsxs("svg", {
      className: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        b.jsx("rect", {
          x: "3.5",
          y: "8",
          width: "17",
          height: "9.5",
          rx: "3.5",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
        b.jsx("path", {
          d: "M8 11v4M6 13h4",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
        b.jsx("circle", {
          cx: "15.25",
          cy: "12",
          r: "1",
          fill: "currentColor",
        }),
        b.jsx("circle", { cx: "17.5", cy: "14", r: "1", fill: "currentColor" }),
      ],
    });
  }
  function LS({ className: i }) {
    return b.jsxs("svg", {
      className: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        b.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "8.25",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
        b.jsx("path", {
          d: "M12 3.75c2.1 2.35 3.15 5.1 3.15 8.25S14.1 17.9 12 20.25",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
        b.jsx("path", {
          d: "M12 3.75C9.9 6.1 8.85 8.85 8.85 12S9.9 17.9 12 20.25",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
        b.jsx("path", {
          d: "M4.2 9.5h15.6M4.2 14.5h15.6",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
        }),
      ],
    });
  }
  function Fo({ className: i }) {
    return b.jsx("svg", {
      className: i,
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": !0,
      children: b.jsx("path", {
        d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      }),
    });
  }
  function Mm({ className: i }) {
    return b.jsxs("svg", {
      className: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: [
        b.jsx("path", {
          d: "M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
        b.jsx("circle", {
          cx: "12",
          cy: "11",
          r: "2.5",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
      ],
    });
  }
  function HS({ className: i }) {
    return b.jsx("svg", {
      className: i,
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": !0,
      children: b.jsx("path", {
        d: "M6 9l6 6 6-6",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    });
  }
  function qS({ className: i }) {
    return b.jsxs("svg", {
      className: i,
      width: "36",
      height: "36",
      viewBox: "0 0 40 40",
      fill: "none",
      "aria-hidden": !0,
      children: [
        b.jsxs("defs", {
          children: [
            b.jsxs("linearGradient", {
              id: "kolkin-mark-bg",
              x1: "8",
              y1: "4",
              x2: "34",
              y2: "38",
              gradientUnits: "userSpaceOnUse",
              children: [
                b.jsx("stop", { stopColor: "#4A3420" }),
                b.jsx("stop", { offset: "0.5", stopColor: "#1C120C" }),
                b.jsx("stop", { offset: "1", stopColor: "#2E1E14" }),
              ],
            }),
            b.jsxs("linearGradient", {
              id: "kolkin-mark-ring",
              x1: "4",
              y1: "4",
              x2: "36",
              y2: "36",
              gradientUnits: "userSpaceOnUse",
              children: [
                b.jsx("stop", { stopColor: "#F0D9A8" }),
                b.jsx("stop", { offset: "0.45", stopColor: "#C9944E" }),
                b.jsx("stop", { offset: "1", stopColor: "#7A4E28" }),
              ],
            }),
            b.jsxs("linearGradient", {
              id: "kolkin-mark-k",
              x1: "12",
              y1: "8",
              x2: "28",
              y2: "32",
              gradientUnits: "userSpaceOnUse",
              children: [
                b.jsx("stop", { stopColor: "#FFF6E4" }),
                b.jsx("stop", { offset: "1", stopColor: "#E8C48A" }),
              ],
            }),
          ],
        }),
        b.jsx("circle", {
          cx: "20",
          cy: "20",
          r: "19",
          fill: "url(#kolkin-mark-bg)",
        }),
        b.jsx("circle", {
          cx: "20",
          cy: "20",
          r: "18.2",
          stroke: "url(#kolkin-mark-ring)",
          strokeWidth: "1.6",
        }),
        b.jsx("path", {
          d: "M12.5 9.5h3.2a.55.55 0 0 1 .55.55v19.9a.55.55 0 0 1-.55.55h-3.2a.55.55 0 0 1-.55-.55V10.05c0-.3.25-.55.55-.55Z",
          fill: "url(#kolkin-mark-k)",
        }),
        b.jsx("path", {
          d: "M16.5 19.2 26.1 9.9a.7.7 0 0 1 .95.05l1.85 1.95a.7.7 0 0 1-.05.98L19.4 21.1l-2.9-1.9Z",
          fill: "url(#kolkin-mark-k)",
        }),
        b.jsx("path", {
          d: "M16.5 20.8l2.9 1.9 9.8 8.6a.7.7 0 0 1-.02 1.05l-2.05 1.75a.7.7 0 0 1-.98-.05L16.5 20.8Z",
          fill: "url(#kolkin-mark-k)",
        }),
        b.jsx("path", {
          d: "M22.4 17.1c1.45-2.2 4.05-2.95 5.7-2.15-1 2.05-.85 4.05.25 5.65-2.15-.1-4.5-1.35-5.95-3.5Z",
          fill: "#C9944E",
        }),
        b.jsx("path", {
          d: "M24.2 17.6c.85-1 2.05-1.55 3.1-1.45",
          stroke: "#1C120C",
          strokeWidth: "0.65",
          strokeLinecap: "round",
          opacity: "0.4",
        }),
      ],
    });
  }
  const Vt = {
      name: "Kolkin Bar",
      rating: 4.5,
      reviewCount: 60,
      address: "Санкт-Петербург, Комендантский проспект, 69",
      phone: "+7 (921) 393-91-60",
      phoneHref: "tel:+79213939160",
      hours: "Пн–Чт, Вс: 16:00–00:00 · Пт–Сб: 16:00–02:00",
      mapUrl: "https://yandex.ru/maps/org/kolkin_bar/243420304014/",
      yandexUrl: "https://yandex.ru/maps/org/kolkin_bar/243420304014/",
      reviewsUrl: "https://yandex.ru/maps/org/kolkin_bar/243420304014/reviews/",
    },
    Dm = [
      "Крафтовое пиво",
      "Настольные игры",
      "Летняя веранда",
      "Спортивные трансляции",
      "Wi‑Fi",
      "Оплата картой",
    ],
    YS = [
      {
        author: "Дмитрий К.",
        date: "14 июля",
        text: "Пиво качественное и вкусное, закуски по приемлемым ценам!",
        rating: 5,
      },
      {
        author: "илья о.",
        date: "18 февраля",
        text: "Отличный бар с хорошим ассортиментом пива! И отличной компанией — можно посмотреть футбол.",
        rating: 5,
      },
      {
        author: "Павел Т.",
        date: "21 февраля",
        text: "Много пива, в целом отличное место рядом с домом!",
        rating: 4,
      },
      {
        author: "Милана Ё.",
        date: "17 февраля",
        text: "Прекрасное — после школы самое то 👍",
        rating: 5,
      },
      {
        author: "Артём С.",
        date: "3 марта",
        text: "Зашёл после работы — крафт свежий, настолки на месте, атмосфера своя. Буду возвращаться.",
        rating: 5,
      },
      {
        author: "Катя М.",
        date: "9 июня",
        text: "Уютно, без пафоса. Хороший выбор пива и приятная веранда летом.",
        rating: 5,
      },
    ],
    Cm = [
      {
        name: "Zubr Gold",
        detail: "Пилснер · Pivovar Zubr · Чехия · 4,1%",
        price: 320,
      },
      {
        name: "Странник",
        detail: "Венский лагер · Балтийский Меридиан · Россия · 4,5%",
        price: 250,
      },
      {
        name: "Steinbräu Helles",
        detail: "Лагер · Braugold Brauerei · Германия · 5,2%",
        price: 320,
      },
      {
        name: "Steinbräu Hefeweizen",
        detail: "Hefeweizen · Braugold Brauerei · Германия · 5,2%",
        price: 320,
        isNew: !0,
      },
      {
        name: "Stiegl Goldbräu",
        detail: "Лагер · Stieglbrauerei zu Salzburg · Австрия · 5%",
        price: 360,
        isNew: !0,
      },
      {
        name: "Месть королевы Анны",
        detail: "Портер · Балтийский Меридиан · Россия · 5,5%",
        price: 280,
      },
      {
        name: "All-Saint Cherry",
        detail: "Вишнёвый эль · Khoffner · Россия · 6%",
        price: 350,
      },
      {
        name: "Blue Monkey Wheat Ale",
        detail: "Witbier · Gletcher · Россия · 5,4%",
        price: 280,
      },
      {
        name: "Мы делили апельсин",
        detail: "Sour Ale · Khoffner · Россия · 6%",
        price: 350,
        isNew: !0,
      },
      {
        name: "Karma",
        detail: "West Coast IPA · Khoffner · Россия · 6%",
        price: 320,
      },
      {
        name: "Affection",
        detail: "Sour Ale · Khoffner · Россия · 6%",
        price: 350,
      },
      {
        name: "Milk of Amnesia v. Tropic",
        detail: "Milkshake IPA · Gletcher · Россия · 5,5%",
        price: 300,
      },
      {
        name: "Nut Butter",
        detail: "Браун эль · Gletcher · Россия · 5,5%",
        price: 300,
      },
      {
        name: "Ballantine Stout",
        detail: "Шоколадный стаут · МПК · Россия · 4,1%",
        price: 300,
      },
      {
        name: "Антоновка",
        detail: "Сидр полусухой · Tony Beer · Россия · 4,9%",
        price: 300,
      },
      { name: "Квас", price: 100 },
    ],
    ss = {
      hero: "./images/hero.jpg",
      gallery: [
        { src: "./images/photos/photo-15.jpg", alt: "Барная зона" },
        { src: "./images/photos/photo-22.jpg", alt: "Ассортимент крафта" },
        { src: "./images/photos/photo-07.jpg", alt: "Пиво за столом" },
        { src: "./images/photos/photo-09.jpg", alt: "Краны и банки" },
        { src: "./images/photos/photo-21.jpg", alt: "Свежий бокал" },
        { src: "./images/photos/photo-29.jpg", alt: "У окна" },
        { src: "./images/photos/photo-39.jpg", alt: "Вечер в компании" },
        { src: "./images/photos/photo-11.jpg", alt: "Меню на доске" },
        { src: "./images/photos/photo-18.jpg", alt: "Крафт в бокале" },
        { src: "./images/photos/photo-25.jpg", alt: "Полки с пивом" },
      ],
    },
    GS = [
      {
        title: "Крафт",
        icon: "beer",
        tags: ["Разливное", "Бутылочное", "ИПА", "Сезонное"],
        body: "Большой выбор разливного и бутылочного крафта — от классики до сезонных новинок. Качественное пиво по адекватным ценам, которое хочется пробовать снова.",
      },
      {
        title: "Атмосфера",
        icon: "games",
        tags: ["Настолки", "Веранда", "Wi‑Fi", "Уют"],
        body: "Место, где можно расслабиться после работы, сыграть в настольную игру или посидеть на летней веранде. Своя компания, свой ритм — без лишней суеты.",
      },
      {
        title: "События",
        icon: "sport",
        tags: ["Футбол", "Трансляции", "Компания", "Закуски"],
        body: "Спортивные трансляции на большом экране, закуски к пиву и компания, с которой легко познакомиться. Идеально для вечера пятницы или воскресного матча.",
      },
    ],
    wm = [
      { label: "О нас", href: "#about" },
      { label: "Меню", href: "#menu" },
      { label: "Галерея", href: "#gallery" },
      { label: "Отзывы", href: "#reviews" },
      { label: "Контакты", href: "#contact" },
    ];
  function XS() {
    const [i, l] = Y.useState(!1),
      [u, o] = Y.useState(!1);
    return (
      Y.useEffect(() => {
        const c = () => l(window.scrollY > 40);
        return (
          window.addEventListener("scroll", c, { passive: !0 }),
          () => window.removeEventListener("scroll", c)
        );
      }, []),
      Y.useEffect(
        () => (
          (document.body.style.overflow = u ? "hidden" : ""),
          () => {
            document.body.style.overflow = "";
          }
        ),
        [u],
      ),
      b.jsxs(b.Fragment, {
        children: [
          b.jsx("header", {
            className: `fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${i ? "py-3" : "py-4"}`,
            children: b.jsxs("div", {
              className:
                "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-16",
              children: [
                b.jsxs("a", {
                  href: "#hero",
                  className: `liquid-glass flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4 transition ${i ? "liquid-glass-strong" : ""}`,
                  "aria-label": `${Vt.name} — наверх`,
                  children: [
                    b.jsx(qS, { className: "h-9 w-9 shrink-0" }),
                    b.jsxs("span", {
                      className: "min-w-0 text-left leading-tight",
                      children: [
                        b.jsx("span", {
                          className:
                            "font-heading block text-base italic tracking-tight text-white md:text-lg",
                          children: Vt.name,
                        }),
                        b.jsx("span", {
                          className:
                            "font-body block text-[10px] font-light text-white/65 md:text-[11px]",
                          children: "Крафтовое пиво и атмосфера",
                        }),
                      ],
                    }),
                  ],
                }),
                b.jsxs("nav", {
                  className: `liquid-glass hidden items-center rounded-full px-1.5 py-1.5 md:flex ${i ? "liquid-glass-strong" : ""}`,
                  "aria-label": "Основная навигация",
                  children: [
                    wm.map((c) =>
                      b.jsx(
                        "a",
                        {
                          href: c.href,
                          className:
                            "font-body px-3 py-2 text-sm font-medium text-white/90 transition hover:text-white",
                          children: c.label,
                        },
                        c.href,
                      ),
                    ),
                    b.jsxs("a", {
                      href: Vt.phoneHref,
                      className:
                        "ml-1 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90",
                      children: [
                        "Позвонить",
                        b.jsx(ai, { className: "h-4 w-4" }),
                      ],
                    }),
                  ],
                }),
                b.jsxs("button", {
                  type: "button",
                  className: `liquid-glass flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full md:hidden ${i ? "liquid-glass-strong" : ""}`,
                  "aria-label": u ? "Закрыть меню" : "Открыть меню",
                  "aria-expanded": u,
                  onClick: () => o((c) => !c),
                  children: [
                    b.jsx("span", {
                      className: `block h-0.5 w-5 bg-white transition ${u ? "translate-y-2 rotate-45" : ""}`,
                    }),
                    b.jsx("span", {
                      className: `block h-0.5 w-5 bg-white transition ${u ? "opacity-0" : ""}`,
                    }),
                    b.jsx("span", {
                      className: `block h-0.5 w-5 bg-white transition ${u ? "-translate-y-2 -rotate-45" : ""}`,
                    }),
                  ],
                }),
              ],
            }),
          }),
          b.jsx(jb, {
            children:
              u &&
              b.jsx(Xt.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "fixed inset-0 z-[90] bg-black/80 backdrop-blur-xl md:hidden",
                onClick: () => o(!1),
                children: b.jsxs(Xt.nav, {
                  initial: { y: -20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: -20, opacity: 0 },
                  className:
                    "flex h-full flex-col items-center justify-center gap-6",
                  onClick: (c) => c.stopPropagation(),
                  children: [
                    wm.map((c) =>
                      b.jsx(
                        "a",
                        {
                          href: c.href,
                          className: "font-heading text-4xl italic text-white",
                          onClick: () => o(!1),
                          children: c.label,
                        },
                        c.href,
                      ),
                    ),
                    b.jsxs("a", {
                      href: Vt.phoneHref,
                      className:
                        "font-body mt-4 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black",
                      onClick: () => o(!1),
                      children: [
                        "Позвонить",
                        b.jsx(ai, { className: "h-4 w-4" }),
                      ],
                    }),
                  ],
                }),
              }),
          }),
        ],
      })
    );
  }
  function kS({ text: i, className: l = "" }) {
    const u = Y.useRef(null),
      [o, c] = Y.useState(!1),
      d = i.split(" ");
    return (
      Y.useEffect(() => {
        const h = u.current;
        if (!h) return;
        const p = new IntersectionObserver(
          ([m]) => {
            m.isIntersecting && (c(!0), p.disconnect());
          },
          { threshold: 0.1 },
        );
        p.observe(h);
        const g = h.getBoundingClientRect();
        return (
          g.top < window.innerHeight && g.bottom > 0 && (c(!0), p.disconnect()),
          () => p.disconnect()
        );
      }, []),
      b.jsx("div", {
        ref: u,
        className: l,
        style: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: "0.1em",
        },
        children: d.map((h, p) =>
          b.jsx(
            Xt.span,
            {
              style: { display: "inline-block", marginRight: "0.28em" },
              initial: { filter: "blur(10px)", opacity: 0, y: 50 },
              animate: o
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(10px)", opacity: 0, y: 50 },
              transition: { duration: 0.7, delay: p * 0.1, ease: "easeOut" },
              children: h,
            },
            `${h}-${p}`,
          ),
        ),
      })
    );
  }
  function jm(i = new Date()) {
    const l = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Moscow",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      }).formatToParts(i),
      u = l.find((v) => v.type === "weekday")?.value ?? "Mon",
      o = Number(l.find((v) => v.type === "hour")?.value ?? 0),
      c = Number(l.find((v) => v.type === "minute")?.value ?? 0),
      d = o * 60 + c,
      h = u === "Sat" && d < 120,
      p = u === "Sun" && d < 120,
      g = d >= 960,
      m = h || p || g;
    return { isOpen: m, label: m ? "Открыто" : "Закрыто" };
  }
  const Va = { filter: "blur(10px)", opacity: 0, y: 20 },
    _a = { filter: "blur(0px)", opacity: 1, y: 0 },
    Ba = (i) => ({ duration: 0.8, delay: i, ease: "easeOut" });
  function ZS() {
    const [i, l] = Y.useState(() => jm());
    return (
      Y.useEffect(() => {
        const u = () => l(jm());
        u();
        const o = window.setInterval(u, 6e4);
        return () => clearInterval(o);
      }, []),
      b.jsxs("section", {
        id: "hero",
        className: "relative min-h-screen bg-black",
        children: [
          b.jsxs("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: [
              b.jsx("img", {
                src: ss.hero,
                alt: "",
                "aria-hidden": !0,
                className: "h-full w-full scale-110 object-cover ken-burns",
                style: {
                  filter:
                    "blur(2px) saturate(1.12) contrast(1.04) brightness(0.95)",
                },
              }),
              b.jsx("div", { className: "absolute inset-0 bg-black/25" }),
              b.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/75",
              }),
              b.jsx("div", {
                className:
                  "absolute inset-0 bg-amber-950/10 mix-blend-soft-light",
              }),
            ],
          }),
          b.jsxs("div", {
            className:
              "relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-28 text-center",
            children: [
              b.jsxs(Xt.a, {
                href: Vt.yandexUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                initial: Va,
                animate: _a,
                transition: Ba(0.3),
                className:
                  "liquid-glass flex flex-wrap items-center justify-center gap-2 rounded-full px-4 py-2 transition hover:bg-white/5",
                children: [
                  b.jsx("span", {
                    className: `rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${i.isOpen ? "bg-emerald-400 text-black" : "bg-white/20 text-white"}`,
                    children: i.label,
                  }),
                  b.jsx("span", {
                    className: "font-body text-sm text-white/90",
                    children: Vt.hours,
                  }),
                ],
              }),
              b.jsx("div", {
                className: "mt-6 max-w-4xl",
                children: b.jsx(kS, {
                  text: "Крафтовое пиво и атмосфера, куда хочется возвращаться",
                  className:
                    "font-heading text-5xl italic leading-[0.85] tracking-[-3px] text-white md:text-7xl lg:text-[5.5rem] lg:tracking-[-4px]",
                }),
              }),
              b.jsx(Xt.p, {
                initial: Va,
                animate: _a,
                transition: Ba(0.7),
                className:
                  "font-body mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/90 md:text-base",
                children:
                  "Kolkin Bar на Комендантском — большой выбор крафта, настольные игры, летняя веранда и трансляции матчей. Заходи после работы — здесь всегда своя компания и хорошее пиво.",
              }),
              b.jsxs(Xt.div, {
                initial: Va,
                animate: _a,
                transition: Ba(1),
                className:
                  "mt-7 flex flex-wrap items-center justify-center gap-4",
                children: [
                  b.jsxs("a", {
                    href: Vt.mapUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "liquid-glass-strong font-body flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.02]",
                    children: [
                      "Как добраться",
                      b.jsx(ai, { className: "h-4 w-4" }),
                    ],
                  }),
                  b.jsx("a", {
                    href: "#about",
                    className:
                      "font-body flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white",
                    children: "Узнать больше",
                  }),
                ],
              }),
              b.jsxs(Xt.div, {
                initial: Va,
                animate: _a,
                transition: Ba(1.2),
                className:
                  "mt-10 grid w-full max-w-md grid-cols-2 gap-3 px-1 sm:max-w-lg sm:gap-4",
                children: [
                  b.jsxs("div", {
                    className:
                      "liquid-glass flex flex-col rounded-[1.1rem] p-3.5 text-left sm:rounded-[1.25rem] sm:p-5",
                    children: [
                      b.jsx(Fo, {
                        className: "h-4 w-4 text-amber-400 sm:h-5 sm:w-5",
                      }),
                      b.jsx("p", {
                        className:
                          "font-heading mt-3 text-3xl italic leading-none tracking-[-1px] sm:mt-4 sm:text-4xl",
                        children: Vt.rating,
                      }),
                      b.jsxs("p", {
                        className:
                          "font-body mt-2 text-[11px] leading-snug text-white/80 sm:text-sm",
                        children: ["Рейтинг · ", Vt.reviewCount, " отзывов"],
                      }),
                    ],
                  }),
                  b.jsxs("div", {
                    className:
                      "liquid-glass flex flex-col rounded-[1.1rem] p-3.5 text-left sm:rounded-[1.25rem] sm:p-5",
                    children: [
                      b.jsx(_S, {
                        className: "h-4 w-4 text-white/80 sm:h-5 sm:w-5",
                      }),
                      b.jsx("p", {
                        className:
                          "font-heading mt-3 text-3xl italic leading-none tracking-[-1px] sm:mt-4 sm:text-4xl",
                        children: "16:00",
                      }),
                      b.jsx("p", {
                        className:
                          "font-body mt-2 text-[11px] leading-snug text-white/80 sm:text-sm",
                        children: "До полуночи или двух ночи",
                      }),
                    ],
                  }),
                ],
              }),
              b.jsx(Xt.div, {
                initial: Va,
                animate: _a,
                transition: Ba(1.4),
                className:
                  "mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-10",
                children: Dm.map((u) =>
                  b.jsx(
                    "span",
                    {
                      className:
                        "font-heading text-lg italic tracking-tight text-white/60 md:text-xl",
                      children: u,
                    },
                    u,
                  ),
                ),
              }),
            ],
          }),
          b.jsx("a", {
            href: "#about",
            "aria-label": "Прокрутить вниз",
            className:
              "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/50 transition hover:text-white",
            children: b.jsx(HS, { className: "h-6 w-6" }),
          }),
        ],
      })
    );
  }
  const KS = {
    espresso: {
      base: "bg-[#120e0b]",
      gradient: "bg-gradient-to-br from-[#1c1510] via-[#120e0b] to-[#0a0806]",
      glowA: "left-[-10%] top-[10%] h-[520px] w-[520px] bg-[#b45309]/22",
      glowB: "right-[-5%] bottom-[-10%] h-[400px] w-[400px] bg-[#78350f]/18",
    },
    charcoal: {
      base: "bg-[#101010]",
      gradient: "bg-gradient-to-b from-[#161616] via-[#101010] to-[#0c0c0c]",
      glowA: "right-[8%] top-[-5%] h-[380px] w-[380px] bg-white/[0.03]",
      glowB:
        "left-[-5%] bottom-[-10%] h-[320px] w-[320px] bg-neutral-400/[0.06]",
    },
    slate: {
      base: "bg-[#0f1216]",
      gradient: "bg-gradient-to-b from-[#151a22] via-[#0f1216] to-[#0a0c10]",
      glowA: "left-[-5%] top-[20%] h-[480px] w-[480px] bg-sky-900/18",
      glowB: "right-0 bottom-0 h-[380px] w-[380px] bg-indigo-950/22",
    },
    amber: {
      base: "bg-[#16120c]",
      gradient: "bg-gradient-to-tr from-[#1a140c] via-[#16120c] to-[#0f0c08]",
      glowA:
        "left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 bg-amber-500/18",
      glowB: "left-[10%] bottom-[-5%] h-[340px] w-[340px] bg-orange-800/12",
    },
    ink: {
      base: "bg-[#0c0c0c]",
      gradient: "bg-gradient-to-b from-[#111111] via-[#0c0c0c] to-[#080808]",
      glowA: "right-[-10%] top-1/3 h-[440px] w-[440px] bg-amber-700/8",
      glowB: "left-[-5%] bottom-0 h-[320px] w-[320px] bg-white/[0.025]",
    },
  };
  function Wo({ variant: i = "charcoal" }) {
    const l = KS[i];
    return b.jsxs("div", {
      className: "pointer-events-none absolute inset-0 overflow-hidden",
      "aria-hidden": !0,
      children: [
        b.jsx("div", { className: `absolute inset-0 ${l.base}` }),
        b.jsx("div", { className: `absolute inset-0 ${l.gradient}` }),
        b.jsx("div", {
          className: `ambient-glow absolute rounded-full blur-[120px] ${l.glowA}`,
        }),
        b.jsx("div", {
          className: `ambient-glow absolute rounded-full blur-[110px] ${l.glowB}`,
        }),
        b.jsx("div", {
          className:
            "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent",
        }),
      ],
    });
  }
  const QS = { beer: BS, games: US, sport: LS };
  function JS() {
    return b.jsxs("section", {
      id: "about",
      className: "relative px-6 py-20 md:px-16 lg:px-20 lg:py-24",
      children: [
        b.jsx(Wo, { variant: "espresso" }),
        b.jsxs("div", {
          className: "relative z-10 mx-auto max-w-7xl",
          children: [
            b.jsxs(Xt.header, {
              initial: { filter: "blur(10px)", opacity: 0, y: 24 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.3 },
              transition: { duration: 0.8, ease: "easeOut" },
              children: [
                b.jsx("p", {
                  className:
                    "font-body mb-6 text-base font-medium tracking-wide text-white/80",
                  children: "О нас",
                }),
                b.jsxs("h2", {
                  className:
                    "font-heading max-w-3xl text-5xl italic leading-[0.9] tracking-[-3px] md:text-7xl lg:text-[5.5rem]",
                  children: ["Пиво, игры", b.jsx("br", {}), "и свой вайб"],
                }),
                b.jsx("p", {
                  className:
                    "font-body mt-6 max-w-2xl text-base font-light leading-relaxed text-white/70",
                  children:
                    "Kolkin Bar — это не просто пивной магазин. Здесь можно выпить свежий крафт, поиграть в настолки, посмотреть матч или просто посидеть на веранде с друзьями после долгого дня.",
                }),
              ],
            }),
            b.jsx("div", {
              className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3",
              children: GS.map((i, l) => {
                const u = QS[i.icon];
                return b.jsxs(
                  Xt.article,
                  {
                    initial: { filter: "blur(10px)", opacity: 0, y: 24 },
                    whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
                    viewport: { once: !0, amount: 0.2 },
                    transition: {
                      duration: 0.7,
                      delay: l * 0.1,
                      ease: "easeOut",
                    },
                    className:
                      "liquid-glass-strong flex min-h-[300px] flex-col rounded-[1.25rem] p-6",
                    children: [
                      b.jsxs("div", {
                        className: "flex items-start justify-between gap-3",
                        children: [
                          b.jsx("div", {
                            className:
                              "liquid-glass flex h-11 w-11 items-center justify-center rounded-[0.75rem]",
                            children: b.jsx(u, {
                              className: "h-5 w-5 text-white/90",
                            }),
                          }),
                          b.jsx("div", {
                            className: "flex flex-wrap justify-end gap-1.5",
                            children: i.tags.map((o) =>
                              b.jsx(
                                "span",
                                {
                                  className:
                                    "liquid-glass font-body whitespace-nowrap rounded-full px-3 py-1 text-[11px] text-white/90",
                                  children: o,
                                },
                                o,
                              ),
                            ),
                          }),
                        ],
                      }),
                      b.jsx("div", { className: "flex-1" }),
                      b.jsx("h3", {
                        className:
                          "font-heading text-3xl italic leading-none tracking-[-1px] md:text-4xl",
                        children: i.title,
                      }),
                      b.jsx("p", {
                        className:
                          "font-body mt-3 text-sm font-light leading-snug text-white/80",
                        children: i.body,
                      }),
                    ],
                  },
                  i.title,
                );
              }),
            }),
            b.jsx(Xt.div, {
              initial: { filter: "blur(10px)", opacity: 0, y: 20 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.25 },
              transition: { duration: 0.7, ease: "easeOut" },
              className:
                "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
              children: Dm.map((i) =>
                b.jsx(
                  "div",
                  {
                    className:
                      "liquid-glass rounded-[1rem] px-4 py-4 text-center",
                    children: b.jsx("p", {
                      className:
                        "font-heading text-lg italic leading-tight tracking-tight text-white/90",
                      children: i,
                    }),
                  },
                  i,
                ),
              ),
            }),
            b.jsxs(Xt.div, {
              initial: { filter: "blur(10px)", opacity: 0, y: 20 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.3 },
              transition: { duration: 0.7, ease: "easeOut" },
              className:
                "mt-8 grid grid-cols-1 gap-4 overflow-hidden rounded-[1.25rem] lg:grid-cols-[1.2fr_1fr]",
              children: [
                b.jsxs("div", {
                  className:
                    "relative min-h-[220px] overflow-hidden rounded-[1.25rem] ring-1 ring-white/10 lg:min-h-[280px]",
                  children: [
                    b.jsx("img", {
                      src: ss.gallery[0].src,
                      alt: ss.gallery[0].alt,
                      className: "absolute inset-0 h-full w-full object-cover",
                      loading: "lazy",
                    }),
                    b.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent",
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className:
                    "liquid-glass-strong flex flex-col justify-between rounded-[1.25rem] p-6 md:p-8",
                  children: [
                    b.jsxs("div", {
                      children: [
                        b.jsx("p", {
                          className:
                            "font-heading text-3xl italic tracking-[-1px]",
                          children: "Ждём тебя",
                        }),
                        b.jsxs("p", {
                          className:
                            "font-body mt-3 flex items-start gap-2 text-sm text-white/75",
                          children: [
                            b.jsx(Mm, { className: "mt-0.5 h-4 w-4 shrink-0" }),
                            Vt.address,
                          ],
                        }),
                        b.jsx("p", {
                          className: "font-body mt-2 text-sm text-white/50",
                          children: Vt.hours,
                        }),
                      ],
                    }),
                    b.jsxs("div", {
                      className: "mt-6 flex flex-wrap gap-3",
                      children: [
                        b.jsxs("a", {
                          href: Vt.phoneHref,
                          className:
                            "font-body flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90",
                          children: [
                            Vt.phone,
                            b.jsx(ai, { className: "h-4 w-4" }),
                          ],
                        }),
                        b.jsx("a", {
                          href: Vt.mapUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "liquid-glass font-body rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5",
                          children: "На карте",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const FS = {
    subtle: {
      blur: "blur(4px)",
      brightness: "brightness(0.55)",
      overlay: "from-black/50 via-black/55 to-black/75",
      veil: "bg-black/20",
    },
    balanced: {
      blur: "blur(3px)",
      brightness: "brightness(0.65)",
      overlay: "from-black/40 via-black/50 to-black/70",
      veil: "bg-black/15",
    },
    vivid: {
      blur: "blur(2px)",
      brightness: "brightness(0.75)",
      overlay: "from-black/30 via-black/40 to-black/65",
      veil: "bg-black/10",
    },
  };
  function zm({
    images: i,
    intensity: l = "balanced",
    slideshow: u = !0,
    interval: o = 8e3,
    kenBurns: c = !0,
  }) {
    const d = Array.isArray(i) ? [...i] : [i],
      [h, p] = Y.useState(0),
      [g, m] = Y.useState(0),
      v = Y.useRef(null),
      x = Y.useRef(null),
      T = FS[l],
      N = Y.useCallback(() => {
        const U = performance.now(),
          H = (X) => {
            const q = Math.min((X - U) / 700, 1);
            m(q), q < 1 && (v.current = requestAnimationFrame(H));
          };
        v.current = requestAnimationFrame(H);
      }, []),
      j = Y.useCallback((U) => {
        const H = performance.now(),
          X = (q) => {
            const G = Math.min((q - H) / 800, 1);
            m(1 - G), G < 1 ? (v.current = requestAnimationFrame(X)) : U();
          };
        v.current = requestAnimationFrame(X);
      }, []),
      _ = Y.useCallback(() => {
        j(() => {
          p((U) => (U + 1) % d.length), N();
        });
      }, [j, N, d.length]);
    return (
      Y.useEffect(() => {
        if ((N(), !(!u || d.length <= 1)))
          return (
            (x.current = window.setInterval(_, o)),
            () => {
              x.current && clearInterval(x.current),
                v.current && cancelAnimationFrame(v.current);
            }
          );
      }, [_, N, o, u, d.length]),
      b.jsxs("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        "aria-hidden": !0,
        children: [
          b.jsx("div", { className: "absolute inset-0 bg-black" }),
          d.map((U, H) =>
            b.jsx(
              "img",
              {
                src: U,
                alt: "",
                className: `absolute inset-0 h-full w-full scale-110 object-cover ${c && H === h ? "ken-burns" : ""}`,
                style: {
                  opacity: H === h ? g : 0,
                  filter: `${T.blur} saturate(1.15) contrast(1.08) ${T.brightness}`,
                  transition: "opacity 0.7s ease",
                },
                onLoad: H === 0 ? N : void 0,
              },
              U,
            ),
          ),
          b.jsx("div", {
            className: `absolute inset-0 bg-gradient-to-b ${T.overlay}`,
          }),
          b.jsx("div", { className: `absolute inset-0 ${T.veil}` }),
          b.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30",
          }),
          b.jsx("div", {
            className: "absolute inset-0 bg-amber-950/10 mix-blend-soft-light",
          }),
          b.jsx("div", {
            className:
              "ambient-glow ambient-glow--amber absolute -left-1/4 top-1/4 h-[420px] w-[420px]",
          }),
          b.jsx("div", {
            className:
              "ambient-glow ambient-glow--warm absolute -right-1/4 bottom-0 h-[360px] w-[360px]",
          }),
          b.jsx("div", {
            className:
              "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent",
          }),
          b.jsx("div", {
            className: "section-noise absolute inset-0 opacity-[0.03]",
          }),
        ],
      })
    );
  }
  const WS = [
    "./images/photos/photo-09.jpg",
    "./images/gallery/beer.jpg",
    "./images/photos/photo-18.jpg",
  ];
  function PS(i) {
    return `${i} ₽`;
  }
  function $S() {
    return b.jsxs("section", {
      id: "menu",
      className: "relative px-6 py-20 md:px-16 lg:px-20 lg:py-24",
      children: [
        b.jsx(zm, {
          images: WS,
          intensity: "subtle",
          slideshow: !0,
          interval: 9e3,
          kenBurns: !0,
        }),
        b.jsxs("div", {
          className: "relative z-10 mx-auto max-w-4xl",
          children: [
            b.jsxs(Xt.header, {
              initial: { filter: "blur(10px)", opacity: 0, y: 20 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.4 },
              transition: { duration: 0.7, ease: "easeOut" },
              className: "mb-10 text-center",
              children: [
                b.jsx("p", {
                  className:
                    "font-body mb-3 text-base font-medium tracking-wide text-white/80",
                  children: "Меню",
                }),
                b.jsx("h2", {
                  className:
                    "font-heading text-4xl italic leading-[0.9] tracking-[-2px] md:text-5xl",
                  children: "Beer on tap",
                }),
                b.jsx("p", {
                  className:
                    "font-body mx-auto mt-4 max-w-md text-sm font-light text-white/65",
                  children:
                    "Разливное · цены за бокал · ассортимент обновляется",
                }),
              ],
            }),
            b.jsx(Xt.div, {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.15 },
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              className:
                "liquid-glass-strong rounded-[1.25rem] px-5 py-2 md:px-8",
              children: b.jsx("ul", {
                children: Cm.map((i, l) =>
                  b.jsxs(
                    "li",
                    {
                      className: `group flex items-start justify-between gap-4 py-3.5 md:items-baseline md:gap-6 ${l < Cm.length - 1 ? "border-b border-white/[0.07]" : ""}`,
                      children: [
                        b.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            b.jsxs("div", {
                              className:
                                "flex flex-wrap items-baseline gap-x-2 gap-y-0.5",
                              children: [
                                i.isNew &&
                                  b.jsx("span", {
                                    className:
                                      "font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8C48A]",
                                    children: "New",
                                  }),
                                b.jsx("h3", {
                                  className:
                                    "font-heading text-lg italic tracking-tight text-white transition group-hover:text-[#F0D9A8] md:text-xl",
                                  children: i.name,
                                }),
                              ],
                            }),
                            i.detail &&
                              b.jsx("p", {
                                className:
                                  "font-body mt-0.5 text-[12px] font-light leading-snug text-white/45 md:text-[13px]",
                                children: i.detail,
                              }),
                          ],
                        }),
                        b.jsx("p", {
                          className:
                            "font-heading shrink-0 text-lg italic tabular-nums text-white/90 md:text-xl",
                          children: PS(i.price),
                        }),
                      ],
                    },
                    i.name,
                  ),
                ),
              }),
            }),
            b.jsx("p", {
              className: "font-body mt-5 text-center text-xs text-white/40",
              children: "Уточняй актуальные краны у бармена",
            }),
          ],
        }),
      ],
    });
  }
  const $e = ss.gallery;
  function IS() {
    return b.jsxs("section", {
      id: "gallery",
      className: "relative px-6 py-24 md:px-16 lg:px-20 lg:py-32",
      children: [
        b.jsx(Wo, { variant: "charcoal" }),
        b.jsxs("div", {
          className: "relative z-10 mx-auto max-w-7xl",
          children: [
            b.jsxs(Xt.header, {
              initial: { filter: "blur(10px)", opacity: 0, y: 24 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.3 },
              transition: { duration: 0.8, ease: "easeOut" },
              className:
                "mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
              children: [
                b.jsxs("div", {
                  children: [
                    b.jsx("p", {
                      className:
                        "font-body mb-4 text-base font-medium tracking-wide text-white/80",
                      children: "Галерея",
                    }),
                    b.jsx("h2", {
                      className:
                        "font-heading text-5xl italic leading-[0.9] tracking-[-3px] md:text-6xl",
                      children: "Загляни внутрь",
                    }),
                  ],
                }),
                b.jsx("p", {
                  className:
                    "font-body max-w-sm text-sm font-light text-white/75",
                  children:
                    "Тёплый свет, крафт на кранах и атмосфера, ради которой стоит зайти",
                }),
              ],
            }),
            b.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                b.jsxs("div", {
                  className: "flex flex-col gap-4 lg:h-[380px] lg:flex-row",
                  children: [
                    b.jsx(Oi, {
                      image: $e[0],
                      className: "h-56 w-full lg:h-full lg:w-2/3",
                      delay: 0,
                    }),
                    b.jsx(Oi, {
                      image: $e[1],
                      className: "h-56 w-full lg:h-full lg:w-1/3",
                      delay: 0.06,
                    }),
                  ],
                }),
                b.jsx("div", {
                  className:
                    "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                  children: [$e[2], $e[3], $e[4]].map((i, l) =>
                    b.jsx(
                      Oi,
                      {
                        image: i,
                        className: "aspect-[4/3] w-full",
                        delay: 0.1 + l * 0.05,
                      },
                      i.src,
                    ),
                  ),
                }),
                b.jsxs("div", {
                  className: "flex flex-col gap-4 lg:h-[380px] lg:flex-row",
                  children: [
                    b.jsx(Oi, {
                      image: $e[5],
                      className: "h-56 w-full lg:h-full lg:w-1/3",
                      delay: 0.2,
                    }),
                    b.jsx(Oi, {
                      image: $e[6],
                      className: "h-56 w-full lg:h-full lg:w-2/3",
                      delay: 0.26,
                    }),
                  ],
                }),
                b.jsx("div", {
                  className:
                    "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                  children: [$e[7], $e[8], $e[9]].map((i, l) =>
                    b.jsx(
                      Oi,
                      {
                        image: i,
                        className: "aspect-[4/3] w-full",
                        delay: 0.3 + l * 0.05,
                      },
                      i.src,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function Oi({ image: i, className: l = "", delay: u = 0 }) {
    return b.jsxs(Xt.figure, {
      initial: { filter: "blur(10px)", opacity: 0, y: 20 },
      whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
      viewport: { once: !0, amount: 0.15 },
      transition: { duration: 0.6, delay: u, ease: "easeOut" },
      className: `group relative shrink-0 overflow-hidden rounded-[1.25rem] ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ${l}`,
      children: [
        b.jsx("img", {
          src: i.src,
          alt: i.alt,
          loading: "lazy",
          className:
            "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105",
        }),
        b.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent",
        }),
        b.jsx("figcaption", {
          className:
            "font-body absolute bottom-4 left-4 z-10 rounded-full bg-black/45 px-3 py-1 text-sm text-white backdrop-blur-sm",
          children: i.alt,
        }),
      ],
    });
  }
  const t2 = [
    "./images/backgrounds/reviews-bg.jpg",
    "./images/backgrounds/reviews-bg-alt.jpg",
  ];
  function e2() {
    return b.jsxs("section", {
      id: "reviews",
      className: "relative px-6 py-20 md:px-16 lg:px-20 lg:py-24",
      children: [
        b.jsx(zm, {
          images: t2,
          intensity: "balanced",
          slideshow: !0,
          interval: 7500,
        }),
        b.jsxs("div", {
          className: "relative z-10 mx-auto max-w-7xl",
          children: [
            b.jsxs(Xt.header, {
              initial: { filter: "blur(10px)", opacity: 0, y: 24 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.3 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "mb-10",
              children: [
                b.jsx("p", {
                  className:
                    "font-body mb-4 text-base font-medium tracking-wide text-white/80",
                  children: "Отзывы",
                }),
                b.jsxs("div", {
                  className: "flex flex-wrap items-end gap-6",
                  children: [
                    b.jsx("h2", {
                      className:
                        "font-heading text-5xl italic leading-[0.9] tracking-[-3px] md:text-6xl",
                      children: "Гости говорят",
                    }),
                    b.jsxs("div", {
                      className:
                        "liquid-glass-strong flex items-center gap-3 rounded-full px-5 py-2",
                      children: [
                        b.jsx(Fo, { className: "text-amber-400" }),
                        b.jsx("span", {
                          className: "font-heading text-2xl italic",
                          children: Vt.rating,
                        }),
                        b.jsxs("span", {
                          className: "font-body text-sm text-white/70",
                          children: [Vt.reviewCount, " отзывов"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            b.jsx("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3",
              children: YS.map((i, l) =>
                b.jsxs(
                  Xt.blockquote,
                  {
                    initial: { filter: "blur(10px)", opacity: 0, y: 20 },
                    whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
                    viewport: { once: !0, amount: 0.2 },
                    transition: {
                      duration: 0.6,
                      delay: l * 0.06,
                      ease: "easeOut",
                    },
                    className:
                      "liquid-glass-strong flex flex-col rounded-[1.25rem] p-6",
                    children: [
                      b.jsxs("div", {
                        className:
                          "mb-3 flex items-center justify-between gap-3",
                        children: [
                          b.jsx("cite", {
                            className:
                              "font-body text-sm font-medium not-italic text-white",
                            children: i.author,
                          }),
                          b.jsx("span", {
                            className:
                              "font-body shrink-0 text-xs text-white/55",
                            children: i.date,
                          }),
                        ],
                      }),
                      b.jsx("div", {
                        className: "mb-3 flex gap-0.5",
                        children: Array.from({ length: i.rating }).map((u, o) =>
                          b.jsx(Fo, { className: "text-amber-400" }, o),
                        ),
                      }),
                      b.jsxs("p", {
                        className:
                          "font-body flex-1 text-sm font-light leading-relaxed text-white/90",
                        children: ["«", i.text, "»"],
                      }),
                    ],
                  },
                  `${i.author}-${i.date}`,
                ),
              ),
            }),
            b.jsxs(Xt.div, {
              initial: { filter: "blur(10px)", opacity: 0, y: 16 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.4 },
              transition: { duration: 0.7, ease: "easeOut" },
              className:
                "liquid-glass-strong mt-8 flex flex-col items-start justify-between gap-5 rounded-[1.25rem] p-6 sm:flex-row sm:items-center sm:p-8",
              children: [
                b.jsxs("div", {
                  children: [
                    b.jsx("p", {
                      className:
                        "font-heading text-2xl italic tracking-[-1px] md:text-3xl",
                      children: "Был у нас? Напиши пару слов",
                    }),
                    b.jsx("p", {
                      className:
                        "font-body mt-2 max-w-lg text-sm font-light text-white/70",
                      children:
                        "Отзывы помогают другим найти хорошее место — и нам становиться лучше.",
                    }),
                  ],
                }),
                b.jsxs("a", {
                  href: Vt.reviewsUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "font-body flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90",
                  children: [
                    "Оставить отзыв",
                    b.jsx(ai, { className: "h-4 w-4" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function n2() {
    return b.jsxs("section", {
      id: "contact",
      className: "relative px-6 pb-12 pt-24 md:px-16 lg:px-20",
      children: [
        b.jsx(Wo, { variant: "amber" }),
        b.jsxs("div", {
          className: "relative z-10 mx-auto max-w-7xl",
          children: [
            b.jsxs(Xt.footer, {
              initial: { filter: "blur(10px)", opacity: 0, y: 24 },
              whileInView: { filter: "blur(0px)", opacity: 1, y: 0 },
              viewport: { once: !0, amount: 0.3 },
              transition: { duration: 0.8, ease: "easeOut" },
              className:
                "liquid-glass-strong flex flex-col items-start justify-between gap-8 rounded-[1.5rem] p-8 md:flex-row md:items-center md:p-12",
              children: [
                b.jsxs("div", {
                  children: [
                    b.jsx("p", {
                      className:
                        "font-body mb-3 text-base font-medium tracking-wide text-white/80",
                      children: "Контакты",
                    }),
                    b.jsx("p", {
                      className:
                        "font-heading text-4xl italic tracking-[-1px] md:text-5xl",
                      children: "Приходи в гости",
                    }),
                    b.jsxs("p", {
                      className:
                        "font-body mt-4 flex items-start gap-2 text-base text-white/85 md:text-lg",
                      children: [
                        b.jsx(Mm, { className: "mt-1 h-5 w-5 shrink-0" }),
                        Vt.address,
                      ],
                    }),
                    b.jsx("p", {
                      className:
                        "font-body mt-2 text-sm text-white/55 md:text-base",
                      children: Vt.hours,
                    }),
                  ],
                }),
                b.jsxs("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    b.jsxs("a", {
                      href: Vt.phoneHref,
                      className:
                        "font-body flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-black transition hover:bg-white/90",
                      children: [Vt.phone, b.jsx(ai, { className: "h-4 w-4" })],
                    }),
                    b.jsx("a", {
                      href: Vt.mapUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "liquid-glass font-body rounded-full px-6 py-3.5 text-base font-medium text-white transition hover:bg-white/5",
                      children: "Открыть на карте",
                    }),
                  ],
                }),
              ],
            }),
            b.jsxs("div", {
              className:
                "mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center",
              children: [
                b.jsxs("p", {
                  className:
                    "font-body text-center text-sm text-white/55 sm:text-left md:text-base",
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " ",
                    Vt.name,
                    b.jsx("span", {
                      className: "mx-2 text-white/25",
                      children: "·",
                    }),
                    "Комендантский проспект, 69",
                  ],
                }),
                b.jsxs("a", {
                  href: "https://github.com/ilyalycha23",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "liquid-glass group inline-flex items-center gap-2 rounded-full px-4 py-2.5 transition hover:bg-white/5",
                  children: [
                    b.jsx("span", {
                      className:
                        "font-body text-sm tracking-wide text-white/55 transition group-hover:text-white/75",
                      children: "Made by",
                    }),
                    b.jsx("span", {
                      className:
                        "font-heading text-xl italic tracking-tight text-[#E8C48A] transition group-hover:text-[#F0D9A8] md:text-2xl",
                      children: "ilyalycha",
                    }),
                    b.jsx(ai, {
                      className:
                        "h-4 w-4 text-white/40 transition group-hover:text-[#E8C48A]",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function i2() {
    return b.jsxs(b.Fragment, {
      children: [
        b.jsx(XS, {}),
        b.jsxs("main", {
          children: [
            b.jsx(ZS, {}),
            b.jsx(JS, {}),
            b.jsx($S, {}),
            b.jsx(IS, {}),
            b.jsx(e2, {}),
            b.jsx(n2, {}),
          ],
        }),
      ],
    });
  }
  Y0.createRoot(document.getElementById("root")).render(
    b.jsx(Y.StrictMode, { children: b.jsx(i2, {}) }),
  );
})();
