import { t as e } from "./quote-form-7Wk8P6Kp.js";
import { l as t, n, r, u as i } from "./index-B8iIe9LF.js";
import { a, i as o, r as s, t as c } from "./services-BnB1S4vk.js";
var l = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  u = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  d = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  ee = (e) => {
    let t = d(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  f = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  te = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  p = i(t()),
  m = (0, p.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, p.createElement)(
        `svg`,
        {
          ref: c,
          ...f,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: l(`lucide`, i),
          ...(!a && !te(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [...o.map(([e, t]) => (0, p.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])],
      ),
  ),
  h = (e, t) => {
    let n = (0, p.forwardRef)(({ className: n, ...r }, i) =>
      (0, p.createElement)(m, {
        ref: i,
        iconNode: t,
        className: l(`lucide-${u(ee(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = ee(e)), n);
  },
  g = h(`armchair`, [
    [`path`, { d: `M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3`, key: `irtipd` }],
    [
      `path`,
      {
        d: `M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z`,
        key: `1qyhux`,
      },
    ],
    [`path`, { d: `M5 18v2`, key: `ppbyun` }],
    [`path`, { d: `M19 18v2`, key: `gy7782` }],
  ]),
  _ = h(`arrow-down`, [
    [`path`, { d: `M12 5v14`, key: `s699le` }],
    [`path`, { d: `m19 12-7 7-7-7`, key: `1idqje` }],
  ]),
  v = h(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  ne = h(`door-closed`, [
    [`path`, { d: `M10 12h.01`, key: `1kxr2c` }],
    [`path`, { d: `M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14`, key: `36qu9e` }],
    [`path`, { d: `M2 20h20`, key: `owomy5` }],
  ]),
  re = h(`drill`, [
    [
      `path`,
      { d: `M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z`, key: `ioqxb1` },
    ],
    [
      `path`,
      {
        d: `M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8`,
        key: `1rs59n`,
      },
    ],
    [`path`, { d: `M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3`, key: `105ega` }],
    [`path`, { d: `M18 6h4`, key: `66u95g` }],
    [`path`, { d: `m5 10-2 8`, key: `xt2lic` }],
    [`path`, { d: `m7 18 2-8`, key: `1bzku2` }],
  ]),
  ie = h(`layers`, [
    [
      `path`,
      {
        d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,
        key: `zw3jo`,
      },
    ],
    [
      `path`,
      {
        d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,
        key: `1wduqc`,
      },
    ],
    [
      `path`,
      {
        d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,
        key: `kqbvx6`,
      },
    ],
  ]),
  y = h(`ruler`, [
    [
      `path`,
      {
        d: `M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z`,
        key: `icamh8`,
      },
    ],
    [`path`, { d: `m14.5 12.5 2-2`, key: `inckbg` }],
    [`path`, { d: `m11.5 9.5 2-2`, key: `fmmyf7` }],
    [`path`, { d: `m8.5 6.5 2-2`, key: `vc6u1g` }],
    [`path`, { d: `m17.5 15.5 2-2`, key: `wo5hmg` }],
  ]),
  b = h(`truck`, [
    [`path`, { d: `M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`, key: `wrbu53` }],
    [`path`, { d: `M15 18H9`, key: `1lyqi6` }],
    [
      `path`,
      {
        d: `M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,
        key: `lysw3i`,
      },
    ],
    [`circle`, { cx: `17`, cy: `18`, r: `2`, key: `332jqn` }],
    [`circle`, { cx: `7`, cy: `18`, r: `2`, key: `19iecd` }],
  ]),
  ae = `/assets/home-craft-hero-yTzN17L-.jpg`,
  oe = {
    version: 1,
    asset_id: `3d55228d-5c06-4167-85b9-e2d698c0f9b3`,
    project_id: `e9340bd4-af7f-422b-a524-fb6ae042a93a`,
    url: `/__l5e/assets-v1/3d55228d-5c06-4167-85b9-e2d698c0f9b3/espray-original-logo.png`,
    r2_key: `a/v1/e9340bd4-af7f-422b-a524-fb6ae042a93a/3d55228d-5c06-4167-85b9-e2d698c0f9b3/espray-original-logo.png`,
    original_filename: `espray-original-logo.png`,
    size: 95520,
    content_type: `image/png`,
    created_at: `2026-10-14T19:11:13Z`,
  },
  x = Object.defineProperty,
  S = (e, t) => x(e, `name`, { value: t, configurable: !0 });
function C(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
S(C, `setRef`);
function w(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = C(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : C(e[t], null);
        }
      };
  };
}
S(w, `composeRefs`);
function T(...e) {
  return p.useCallback(w(...e), e);
}
S(T, `useComposedRefs`);
var E = Object.defineProperty,
  D = (e, t) => E(e, `name`, { value: t, configurable: !0 });
function O(e) {
  let t = p.forwardRef((t, n) => {
    let { children: r, ...i } = t,
      a = null,
      o = !1,
      s = [];
    (P(r) && typeof L == `function` && (r = L(r._payload)),
      p.Children.forEach(r, (e) => {
        if (M(e)) {
          o = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (P(n) && typeof L == `function` && (n = L(n._payload)),
            (a = le(t, n)),
            s.push(a?.props?.children));
        } else s.push(e);
      }),
      a
        ? (a = p.cloneElement(a, void 0, s))
        : !o && p.Children.count(r) === 1 && p.isValidElement(r) && (a = r));
    let c = a ? j(a) : void 0,
      l = T(n, c);
    if (!a) {
      if (r || r === 0) throw Error(o ? I(e) : ue(e));
      return r;
    }
    let u = A(i, a.props ?? {});
    return (a.type !== p.Fragment && (u.ref = n ? l : c), p.cloneElement(a, u));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
D(O, `createSlot`);
var k = O(`Slot`),
  se = Symbol.for(`radix.slottable`);
function ce(e) {
  let t = D((e) => (`child` in e ? e.children(e.child) : e.children), `Slottable`);
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = se), t);
}
D(ce, `createSlottable`);
var le = D((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return p.isValidElement(t)
      ? p.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return p.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function A(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
D(A, `mergeProps`);
function j(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
D(j, `getElementRef`);
function M(e) {
  return (
    p.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === se
  );
}
D(M, `isSlottable`);
var N = Symbol.for(`react.lazy`);
function P(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === N &&
    `_payload` in e &&
    F(e._payload)
  );
}
D(P, `isLazyComponent`);
function F(e) {
  return typeof e == `object` && !!e && `then` in e;
}
D(F, `isPromiseLike`);
var ue = D(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  I = D(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  L = p.use;
function R(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = R(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function z() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = R(e)) && (r && (r += ` `), (r += t));
  return r;
}
var de = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  fe = z,
  pe = (e, t) => (n) => {
    if (t?.variants == null) return fe(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = de(t) || de(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return fe(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n) ? n.includes({ ...i, ...o }[t]) : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  me = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  he = (e, t) => ({ classGroupId: e, validator: t }),
  ge = (e = new Map(), t = null, n) => ({ nextPart: e, validators: t, classGroupId: n }),
  B = `-`,
  _e = [],
  ve = `arbitrary..`,
  ye = (e) => {
    let t = Se(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return xe(e);
        let n = e.split(B);
        return be(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? me(i, t) : t) : i || _e;
        }
        return n[e] || _e;
      },
    };
  },
  be = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = be(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(B) : e.slice(t).join(B),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  xe = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? ve + r : void 0;
        })(),
  Se = (e) => {
    let { theme: t, classGroups: n } = e;
    return Ce(n, t);
  },
  Ce = (e, t) => {
    let n = ge();
    for (let r in e) {
      let i = e[r];
      we(i, n, r, t);
    }
    return n;
  },
  we = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      Te(i, t, n, r);
    }
  },
  Te = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ee(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      De(e, t, n, r);
      return;
    }
    Oe(e, t, n, r);
  },
  Ee = (e, t, n) => {
    let r = e === `` ? t : ke(t, e);
    r.classGroupId = n;
  },
  De = (e, t, n, r) => {
    if (Ae(e)) {
      we(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(he(n, e)));
  },
  Oe = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      we(o, ke(t, a), n, r);
    }
  },
  ke = (e, t) => {
    let n = e,
      r = t.split(B),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = ge()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  Ae = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  je = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  Me = `!`,
  Ne = `:`,
  Pe = [],
  Fe = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  Ie = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === Ne) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(Me)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(Me) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return Fe(t, l, c, u);
      };
    if (t) {
      let e = t + Ne,
        n = r;
      r = (t) => (t.startsWith(e) ? n(t.slice(e.length)) : Fe(Pe, !1, t, void 0, !0));
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  Le = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a)) : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  Re = (e) => ({
    cache: je(e.cacheSize),
    parseClassName: Ie(e),
    sortModifiers: Le(e),
    postfixLookupClassGroupIds: ze(e),
    ...ye(e),
  }),
  ze = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  Be = /\s+/,
  Ve = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(Be),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: ee,
          baseClassName: f,
          maybePostfixModifierPosition: te,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let p = !!te,
        m;
      if (p) {
        m = r(f.substring(0, te));
        let e = m && o[m] ? r(f) : void 0;
        e && e !== m && ((m = e), (p = !1));
      } else m = r(f);
      if (!m) {
        if (!p) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((m = r(f)), !m)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        p = !1;
      }
      let h = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        g = ee ? h + Me : h,
        _ = g + m;
      if (s.indexOf(_) > -1) continue;
      s.push(_);
      let v = i(m, p);
      for (let e = 0; e < v.length; ++e) {
        let t = v[e];
        s.push(g + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  He = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length; ) (n = e[t++]) && (r = Ue(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  Ue = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++) e[r] && (t = Ue(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  We = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Re(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = Ve(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(He(...e)));
  },
  Ge = [],
  V = (e) => {
    let t = (t) => t[e] || Ge;
    return ((t.isThemeGetter = !0), t);
  },
  Ke = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  qe = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Je = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Ye = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Xe =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ze = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Qe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  $e =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  H = (e) => Je.test(e),
  U = (e) => !!e && !Number.isNaN(Number(e)),
  W = (e) => !!e && Number.isInteger(Number(e)),
  et = (e) => e.endsWith(`%`) && U(e.slice(0, -1)),
  G = (e) => Ye.test(e),
  tt = () => !0,
  nt = (e) => Xe.test(e) && !Ze.test(e),
  rt = () => !1,
  it = (e) => Qe.test(e),
  at = (e) => $e.test(e),
  ot = (e) => !K(e) && !J(e),
  st = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  ct = (e) => X(e, Ct, rt),
  K = (e) => Ke.test(e),
  q = (e) => X(e, wt, nt),
  lt = (e) => X(e, Tt, U),
  ut = (e) => X(e, Dt, tt),
  dt = (e) => X(e, Et, rt),
  ft = (e) => X(e, xt, rt),
  pt = (e) => X(e, St, at),
  mt = (e) => X(e, Ot, it),
  J = (e) => qe.test(e),
  Y = (e) => Z(e, wt),
  ht = (e) => Z(e, Et),
  gt = (e) => Z(e, xt),
  _t = (e) => Z(e, Ct),
  vt = (e) => Z(e, St),
  yt = (e) => Z(e, Ot, !0),
  bt = (e) => Z(e, Dt, !0),
  X = (e, t, n) => {
    let r = Ke.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Z = (e, t, n = !1) => {
    let r = qe.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  xt = (e) => e === `position` || e === `percentage`,
  St = (e) => e === `image` || e === `url`,
  Ct = (e) => e === `length` || e === `size` || e === `bg-size`,
  wt = (e) => e === `length`,
  Tt = (e) => e === `number`,
  Et = (e) => e === `family-name`,
  Dt = (e) => e === `number` || e === `weight`,
  Ot = (e) => e === `shadow`,
  kt = We(() => {
    let e = V(`color`),
      t = V(`font`),
      n = V(`text`),
      r = V(`font-weight`),
      i = V(`tracking`),
      a = V(`leading`),
      o = V(`breakpoint`),
      s = V(`container`),
      c = V(`spacing`),
      l = V(`radius`),
      u = V(`shadow`),
      d = V(`inset-shadow`),
      ee = V(`text-shadow`),
      f = V(`drop-shadow`),
      te = V(`blur`),
      p = V(`perspective`),
      m = V(`aspect`),
      h = V(`ease`),
      g = V(`animate`),
      _ = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
      v = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      ne = () => [...v(), J, K],
      re = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      ie = () => [`auto`, `contain`, `none`],
      y = () => [J, K, c],
      b = () => [H, `full`, `auto`, ...y()],
      ae = () => [W, `none`, `subgrid`, J, K],
      oe = () => [`auto`, { span: [`full`, W, J, K] }, W, J, K],
      x = () => [W, `auto`, J, K],
      S = () => [`auto`, `min`, `max`, `fr`, J, K],
      C = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      w = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
      T = () => [`auto`, ...y()],
      E = () => [
        H,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...y(),
      ],
      D = () => [H, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...y()],
      O = () => [H, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...y()],
      k = () => [e, J, K],
      se = () => [...v(), gt, ft, { position: [J, K] }],
      ce = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      le = () => [`auto`, `cover`, `contain`, _t, ct, { size: [J, K] }],
      A = () => [et, Y, q],
      j = () => [``, `none`, `full`, l, J, K],
      M = () => [``, U, Y, q],
      N = () => [`solid`, `dashed`, `dotted`, `double`],
      P = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      F = () => [U, et, gt, ft],
      ue = () => [``, `none`, te, J, K],
      I = () => [`none`, U, J, K],
      L = () => [`none`, U, J, K],
      R = () => [U, J, K],
      z = () => [H, `full`, ...y()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [G],
        breakpoint: [G],
        color: [tt],
        container: [G],
        "drop-shadow": [G],
        ease: [`in`, `out`, `in-out`],
        font: [ot],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [G],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
        radius: [G],
        shadow: [G],
        spacing: [`px`, U],
        text: [G],
        "text-shadow": [G],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, H, K, J, m] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, J, K] }],
        "container-named": [st],
        columns: [{ columns: [U, K, J, s] }],
        "break-after": [{ "break-after": _() }],
        "break-before": [{ "break-before": _() }],
        "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }],
        "object-position": [{ object: ne() }],
        overflow: [{ overflow: re() }],
        "overflow-x": [{ "overflow-x": re() }],
        "overflow-y": [{ "overflow-y": re() }],
        overscroll: [{ overscroll: ie() }],
        "overscroll-x": [{ "overscroll-x": ie() }],
        "overscroll-y": [{ "overscroll-y": ie() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: b() }],
        "inset-x": [{ "inset-x": b() }],
        "inset-y": [{ "inset-y": b() }],
        start: [{ "inset-s": b(), start: b() }],
        end: [{ "inset-e": b(), end: b() }],
        "inset-bs": [{ "inset-bs": b() }],
        "inset-be": [{ "inset-be": b() }],
        top: [{ top: b() }],
        right: [{ right: b() }],
        bottom: [{ bottom: b() }],
        left: [{ left: b() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [W, `auto`, J, K] }],
        basis: [{ basis: [H, `full`, `auto`, s, ...y()] }],
        "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [U, H, `auto`, `initial`, `none`, K] }],
        grow: [{ grow: [``, U, J, K] }],
        shrink: [{ shrink: [``, U, J, K] }],
        order: [{ order: [W, `first`, `last`, `none`, J, K] }],
        "grid-cols": [{ "grid-cols": ae() }],
        "col-start-end": [{ col: oe() }],
        "col-start": [{ "col-start": x() }],
        "col-end": [{ "col-end": x() }],
        "grid-rows": [{ "grid-rows": ae() }],
        "row-start-end": [{ row: oe() }],
        "row-start": [{ "row-start": x() }],
        "row-end": [{ "row-end": x() }],
        "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }],
        "auto-cols": [{ "auto-cols": S() }],
        "auto-rows": [{ "auto-rows": S() }],
        gap: [{ gap: y() }],
        "gap-x": [{ "gap-x": y() }],
        "gap-y": [{ "gap-y": y() }],
        "justify-content": [{ justify: [...C(), `normal`] }],
        "justify-items": [{ "justify-items": [...w(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...w()] }],
        "align-content": [{ content: [`normal`, ...C()] }],
        "align-items": [{ items: [...w(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...w(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": C() }],
        "place-items": [{ "place-items": [...w(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...w()] }],
        p: [{ p: y() }],
        px: [{ px: y() }],
        py: [{ py: y() }],
        ps: [{ ps: y() }],
        pe: [{ pe: y() }],
        pbs: [{ pbs: y() }],
        pbe: [{ pbe: y() }],
        pt: [{ pt: y() }],
        pr: [{ pr: y() }],
        pb: [{ pb: y() }],
        pl: [{ pl: y() }],
        m: [{ m: T() }],
        mx: [{ mx: T() }],
        my: [{ my: T() }],
        ms: [{ ms: T() }],
        me: [{ me: T() }],
        mbs: [{ mbs: T() }],
        mbe: [{ mbe: T() }],
        mt: [{ mt: T() }],
        mr: [{ mr: T() }],
        mb: [{ mb: T() }],
        ml: [{ ml: T() }],
        "space-x": [{ "space-x": y() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": y() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: E() }],
        "inline-size": [{ inline: [`auto`, ...D()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...D()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...D()] }],
        "block-size": [{ block: [`auto`, ...O()] }],
        "min-block-size": [{ "min-block": [`auto`, ...O()] }],
        "max-block-size": [{ "max-block": [`none`, ...O()] }],
        w: [{ w: [s, `screen`, ...E()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...E()] }],
        "max-w": [{ "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...E()] }],
        h: [{ h: [`screen`, `lh`, ...E()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...E()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...E()] }],
        "font-size": [{ text: [`base`, n, Y, q] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, bt, ut] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              et,
              K,
            ],
          },
        ],
        "font-family": [{ font: [ht, dt, t] }],
        "font-features": [{ "font-features": [K] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, J, K] }],
        "line-clamp": [{ "line-clamp": [U, `none`, J, lt] }],
        leading: [{ leading: [a, ...y()] }],
        "list-image": [{ "list-image": [`none`, J, K] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, J, K] }],
        "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
        "text-decoration-style": [{ decoration: [...N(), `wavy`] }],
        "text-decoration-thickness": [{ decoration: [U, `from-font`, `auto`, J, q] }],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [U, `auto`, J, K] }],
        "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: y() }],
        "tab-size": [{ tab: [W, J, K] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              J,
              K,
            ],
          },
        ],
        whitespace: [
          { whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, J, K] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: se() }],
        "bg-repeat": [{ bg: ce() }],
        "bg-size": [{ bg: le() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, W, J, K],
                radial: [``, J, K],
                conic: [W, J, K],
              },
              vt,
              pt,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: A() }],
        "gradient-via-pos": [{ via: A() }],
        "gradient-to-pos": [{ to: A() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: j() }],
        "rounded-s": [{ "rounded-s": j() }],
        "rounded-e": [{ "rounded-e": j() }],
        "rounded-t": [{ "rounded-t": j() }],
        "rounded-r": [{ "rounded-r": j() }],
        "rounded-b": [{ "rounded-b": j() }],
        "rounded-l": [{ "rounded-l": j() }],
        "rounded-ss": [{ "rounded-ss": j() }],
        "rounded-se": [{ "rounded-se": j() }],
        "rounded-ee": [{ "rounded-ee": j() }],
        "rounded-es": [{ "rounded-es": j() }],
        "rounded-tl": [{ "rounded-tl": j() }],
        "rounded-tr": [{ "rounded-tr": j() }],
        "rounded-br": [{ "rounded-br": j() }],
        "rounded-bl": [{ "rounded-bl": j() }],
        "border-w": [{ border: M() }],
        "border-w-x": [{ "border-x": M() }],
        "border-w-y": [{ "border-y": M() }],
        "border-w-s": [{ "border-s": M() }],
        "border-w-e": [{ "border-e": M() }],
        "border-w-bs": [{ "border-bs": M() }],
        "border-w-be": [{ "border-be": M() }],
        "border-w-t": [{ "border-t": M() }],
        "border-w-r": [{ "border-r": M() }],
        "border-w-b": [{ "border-b": M() }],
        "border-w-l": [{ "border-l": M() }],
        "divide-x": [{ "divide-x": M() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": M() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...N(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...N(), `hidden`, `none`] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-bs": [{ "border-bs": k() }],
        "border-color-be": [{ "border-be": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...N(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [U, J, K] }],
        "outline-w": [{ outline: [``, U, Y, q] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: [``, `none`, u, yt, mt] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, yt, mt] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: M() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [U, q] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": M() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": [`none`, ee, yt, mt] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [U, J, K] }],
        "mix-blend": [{ "mix-blend": [...P(), `plus-darker`, `plus-lighter`] }],
        "bg-blend": [{ "bg-blend": P() }],
        "mask-clip": [
          { "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
          `mask-no-clip`,
        ],
        "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }],
        "mask-image-linear-pos": [{ "mask-linear": [U] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": F() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": F() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": F() }],
        "mask-image-t-to-pos": [{ "mask-t-to": F() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": F() }],
        "mask-image-r-to-pos": [{ "mask-r-to": F() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": F() }],
        "mask-image-b-to-pos": [{ "mask-b-to": F() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": F() }],
        "mask-image-l-to-pos": [{ "mask-l-to": F() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": F() }],
        "mask-image-x-to-pos": [{ "mask-x-to": F() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": F() }],
        "mask-image-y-to-pos": [{ "mask-y-to": F() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [J, K] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": F() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": F() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          { "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": v() }],
        "mask-image-conic-pos": [{ "mask-conic": [U] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": F() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": F() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          { "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
        ],
        "mask-position": [{ mask: se() }],
        "mask-repeat": [{ mask: ce() }],
        "mask-size": [{ mask: le() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, J, K] }],
        filter: [{ filter: [``, `none`, J, K] }],
        blur: [{ blur: ue() }],
        brightness: [{ brightness: [U, J, K] }],
        contrast: [{ contrast: [U, J, K] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, f, yt, mt] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: [``, U, J, K] }],
        "hue-rotate": [{ "hue-rotate": [U, J, K] }],
        invert: [{ invert: [``, U, J, K] }],
        saturate: [{ saturate: [U, J, K] }],
        sepia: [{ sepia: [``, U, J, K] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, J, K] }],
        "backdrop-blur": [{ "backdrop-blur": ue() }],
        "backdrop-brightness": [{ "backdrop-brightness": [U, J, K] }],
        "backdrop-contrast": [{ "backdrop-contrast": [U, J, K] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, U, J, K] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [U, J, K] }],
        "backdrop-invert": [{ "backdrop-invert": [``, U, J, K] }],
        "backdrop-opacity": [{ "backdrop-opacity": [U, J, K] }],
        "backdrop-saturate": [{ "backdrop-saturate": [U, J, K] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, U, J, K] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": y() }],
        "border-spacing-x": [{ "border-spacing-x": y() }],
        "border-spacing-y": [{ "border-spacing-y": y() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          { transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, J, K] },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [U, `initial`, J, K] }],
        ease: [{ ease: [`linear`, `initial`, h, J, K] }],
        delay: [{ delay: [U, J, K] }],
        animate: [{ animate: [`none`, g, J, K] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [p, J, K] }],
        "perspective-origin": [{ "perspective-origin": ne() }],
        rotate: [{ rotate: I() }],
        "rotate-x": [{ "rotate-x": I() }],
        "rotate-y": [{ "rotate-y": I() }],
        "rotate-z": [{ "rotate-z": I() }],
        scale: [{ scale: L() }],
        "scale-x": [{ "scale-x": L() }],
        "scale-y": [{ "scale-y": L() }],
        "scale-z": [{ "scale-z": L() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: R() }],
        "skew-x": [{ "skew-x": R() }],
        "skew-y": [{ "skew-y": R() }],
        transform: [{ transform: [J, K, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: ne() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: z() }],
        "translate-x": [{ "translate-x": z() }],
        "translate-y": [{ "translate-y": z() }],
        "translate-z": [{ "translate-z": z() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [W, J, K] }],
        accent: [{ accent: k() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          { scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              J,
              K,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": k() }],
        "scrollbar-track-color": [{ "scrollbar-track": k() }],
        "scrollbar-gutter": [{ "scrollbar-gutter": [`auto`, `stable`, `both`] }],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": y() }],
        "scroll-mx": [{ "scroll-mx": y() }],
        "scroll-my": [{ "scroll-my": y() }],
        "scroll-ms": [{ "scroll-ms": y() }],
        "scroll-me": [{ "scroll-me": y() }],
        "scroll-mbs": [{ "scroll-mbs": y() }],
        "scroll-mbe": [{ "scroll-mbe": y() }],
        "scroll-mt": [{ "scroll-mt": y() }],
        "scroll-mr": [{ "scroll-mr": y() }],
        "scroll-mb": [{ "scroll-mb": y() }],
        "scroll-ml": [{ "scroll-ml": y() }],
        "scroll-p": [{ "scroll-p": y() }],
        "scroll-px": [{ "scroll-px": y() }],
        "scroll-py": [{ "scroll-py": y() }],
        "scroll-ps": [{ "scroll-ps": y() }],
        "scroll-pe": [{ "scroll-pe": y() }],
        "scroll-pbs": [{ "scroll-pbs": y() }],
        "scroll-pbe": [{ "scroll-pbe": y() }],
        "scroll-pt": [{ "scroll-pt": y() }],
        "scroll-pr": [{ "scroll-pr": y() }],
        "scroll-pb": [{ "scroll-pb": y() }],
        "scroll-pl": [{ "scroll-pl": y() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, J, K] }],
        fill: [{ fill: [`none`, ...k()] }],
        "stroke-w": [{ stroke: [U, Y, q, lt] }],
        stroke: [{ stroke: [`none`, ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function At(...e) {
  return kt(z(e));
}
var Q = r(),
  jt = pe(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground hover:bg-accent-deep`,
          destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
          outline: `border border-accent/60 bg-background hover:bg-accent hover:text-accent-foreground`,
          secondary: `border border-accent/60 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground`,
          ghost: `hover:bg-accent hover:text-accent-foreground`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-9 px-4 py-2`,
          sm: `h-8 rounded-md px-3 text-xs`,
          lg: `h-10 rounded-md px-8`,
          icon: `h-9 w-9`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  ),
  Mt = p.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) =>
    (0, Q.jsx)(r ? k : `button`, {
      className: At(jt({ variant: t, size: n, className: e })),
      ref: a,
      ...i,
    }),
  );
Mt.displayName = `Button`;
var Nt = [
  { image: ae, alt: `Meistras tikrina lygią individualaus baldo briauną` },
  { image: a.url, alt: `ESPRAY pagaminta individuali virtuvė` },
  { image: o.url, alt: `ESPRAY individualūs korpusiniai baldai interjere` },
  { image: s.url, alt: `ESPRAY pagaminta ir sumontuota virtuvė` },
];
function Pt() {
  let [e, t] = (0, p.useState)(0),
    [r, i] = (0, p.useState)(!1),
    [a, o] = (0, p.useState)(!0);
  return (
    (0, p.useEffect)(() => {
      let e = window.setTimeout(() => o(!1), 2200);
      return () => window.clearTimeout(e);
    }, []),
    (0, p.useEffect)(() => {
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
        t = () => i(e.matches);
      return (t(), e.addEventListener(`change`, t), () => e.removeEventListener(`change`, t));
    }, []),
    (0, p.useEffect)(() => {
      if (r || document.hidden) return;
      let e = window.setTimeout(() => t((e) => (e + 1) % Nt.length), 3e3);
      return () => window.clearTimeout(e);
    }, [e, r]),
    (0, Q.jsxs)(Q.Fragment, {
      children: [
        a &&
          (0, Q.jsx)(`div`, {
            className: `home-intro pointer-events-none fixed inset-0 z-50 grid place-items-center`,
            "aria-hidden": `true`,
            "data-home-intro": !0,
            children: (0, Q.jsx)(`img`, {
              src: oe.url,
              alt: ``,
              width: 927,
              height: 374,
              fetchPriority: `high`,
              className: `home-intro-logo h-auto w-[min(76%,480px)]`,
            }),
          }),
        (0, Q.jsxs)(`section`, {
          className: `home-hero relative isolate overflow-hidden bg-scrim text-glass`,
          "aria-label": `ESPRAY baldai`,
          "data-home-hero": !0,
          children: [
            (0, Q.jsx)(`div`, {
              className: `absolute inset-0 -z-20`,
              "aria-live": `off`,
              children: Nt.map((t, n) =>
                (0, Q.jsx)(
                  `div`,
                  {
                    className: `home-hero-slide absolute inset-0 ${e === n ? `is-active` : ``}`,
                    "aria-hidden": e !== n,
                    "data-home-slide": n,
                    children: (0, Q.jsx)(`img`, {
                      src: t.image,
                      alt: t.alt,
                      className: `h-full w-full object-cover object-[62%_center]`,
                      width: 1536,
                      height: 1024,
                      fetchPriority: n === 0 ? `high` : `auto`,
                    }),
                  },
                  t.image,
                ),
              ),
            }),
            (0, Q.jsx)(`div`, { className: `home-hero-shade absolute inset-0 -z-10` }),
            (0, Q.jsx)(`div`, {
              className: `home-hero-content mx-auto flex w-full max-w-[1440px] flex-col px-6 pb-6 pt-14 sm:px-10 md:px-16 md:pb-9 md:pt-20`,
              children: (0, Q.jsxs)(`div`, {
                className: `my-auto max-w-[760px] py-8 md:py-12`,
                children: [
                  (0, Q.jsxs)(`h1`, {
                    className: `max-w-[14ch] text-[43px] font-semibold leading-[1.06] text-balance sm:text-[58px] md:text-[76px]`,
                    children: [
                      `Lygus paviršius,`,
                      (0, Q.jsx)(`br`, {}),
                      (0, Q.jsx)(`span`, {
                        className: `text-glass/80`,
                        children: `tikslios briaunos.`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `mt-7 max-w-[47ch] text-[15px] leading-relaxed text-glass/90 md:text-[17px]`,
                    children: `Gaminame baldus, kuriuos norisi liesti — nuo projekto ir MDF dažymo iki CNC frezavimo bei montavimo vietoje.`,
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `mt-9 flex flex-wrap items-center gap-5`,
                    children: [
                      (0, Q.jsx)(Mt, {
                        asChild: !0,
                        className: `h-auto rounded-full bg-accent px-5 py-3 text-[14px] text-primary-foreground hover:bg-accent-deep`,
                        children: (0, Q.jsx)(n, {
                          to: `/kontaktai`,
                          children: `Gauti kainos pasiūlymą`,
                        }),
                      }),
                      (0, Q.jsx)(Mt, {
                        asChild: !0,
                        variant: `link`,
                        className: `h-auto p-0 text-[14px] text-glass hover:text-accent-deep`,
                        children: (0, Q.jsxs)(n, {
                          to: `/galerija`,
                          children: [`Žiūrėti darbus `, (0, Q.jsx)(_, { "aria-hidden": `true` })],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
var $ = [
    {
      text: "Spinteles gavome lygias kaip stiklas. Sumontavo per dieną, be dulkių pėdsakų.",
      service: "Greta M. — butas Vilniuje",
    },
  ],
  Ft = 6e3,
  It = 300;
function Lt() {
  let [e, t] = (0, p.useState)(0),
    [n, r] = (0, p.useState)(!1),
    [i, a] = (0, p.useState)(!1),
    [o, s] = (0, p.useState)(!1);
  ((0, p.useEffect)(() => {
    let e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
      t = () => s(e.matches);
    return (t(), e.addEventListener(`change`, t), () => e.removeEventListener(`change`, t));
  }, []),
    (0, p.useEffect)(() => {
      if (i || document.hidden) return;
      let e = window.setInterval(() => {
        if (o) {
          t((e) => (e + 1) % $.length);
          return;
        }
        (r(!0),
          window.setTimeout(() => {
            (t((e) => (e + 1) % $.length), r(!1));
          }, It));
      }, Ft);
      return () => window.clearInterval(e);
    }, [i, o]));
  let c = $[e % $.length];
  return (0, Q.jsxs)(`div`, {
    className: `col-span-12 flex flex-col items-center justify-center rounded-[26px] border border-line/70 bg-surface/70 p-8 text-center ring-1 ring-line/20 backdrop-blur-xl md:col-span-7`,
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    onFocusCapture: () => a(!0),
    onBlurCapture: () => a(!1),
    "data-testimonials-rotator": !0,
    children: [
      (0, Q.jsx)(`p`, {
        className: `font-mono text-[10px] uppercase tracking-[0.2em] text-muted`,
        children: `Atsiliepimai`,
      }),
      (0, Q.jsxs)(`div`, {
        className: `testimonial-fade mt-4 flex min-h-[150px] w-full flex-col items-center justify-center transition-opacity duration-300 ${n ? `opacity-0` : `opacity-100`}`,
        "aria-live": `polite`,
        children: [
          (0, Q.jsxs)(`blockquote`, {
            className: `max-w-[34ch] text-[19px] leading-snug text-balance text-ink md:text-[22px]`,
            children: [`„`, c.text, `"`],
          }),
          (0, Q.jsx)(`p`, {
            className: `mt-4 font-mono text-[11px] text-muted`,
            children: c.service,
          }),
        ],
      }),
    ],
  });
}
var Rt = [
  {
    title: `Baldų kūrimas ir projektavimas`,
    text: `Individualūs baldų sprendimai nuo idėjos iki paruošto gaminio.`,
    image: `/assets/services-kitchen-banner-vxEk5t01.jpg`,
    imageAlt: `Tamsi moderni virtuvė su marmuriniu sienos uždangalu ir šiltu apšvietimu`,
    services: [
      {
        icon: ne,
        title: c[0].title,
        text: `Individualūs gaminiai pagal matmenis – spintos, virtuvės, biuro baldai.`,
        to: c[0].to,
      },
      {
        icon: g,
        title: c[1].title,
        text: `Interjero sprendimai ir baldų pritaikymas Jūsų erdvei.`,
        to: c[1].to,
      },
      {
        icon: y,
        title: c[2].title,
        text: `Techniniai brėžiniai ir baldų konstrukcijos paruošimas.`,
        to: c[2].to,
      },
    ],
  },
  {
    title: `Apdirbimas ir montavimas`,
    text: `Kokybiškas apdirbimas, paviršiaus apdaila ir pilnas įrengimas Jūsų erdvėje.`,
    image: `/assets/services-cnc-banner-DmnxKppN.jpg`,
    imageAlt: `CNC freza apdirba medieną, sklinda medžio drožlės`,
    services: [
      {
        icon: ie,
        title: c[3].title,
        text: `Lygus, patvarus ir estetiškas paviršiaus padengimas.`,
        to: c[3].to,
      },
      {
        icon: re,
        title: c[4].title,
        text: `Tikslūs ir kokybiški frezavimo darbai pagal Jūsų projektą.`,
        to: c[4].to,
      },
      {
        icon: b,
        title: c[5].title,
        text: `Saugus pristatymas ir profesionalus sumontavimas vietoje.`,
        to: c[5].to,
      },
    ],
  },
];
function zt() {
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(Pt, {}),
      (0, Q.jsxs)(`div`, {
        className: `mx-auto max-w-[1200px] px-6 pb-24`,
        children: [
          (0, Q.jsxs)(`section`, {
            id: `paslaugos`,
            className: `mt-16`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `home-services-intro`,
                children: (0, Q.jsx)(`p`, {
                  className: `home-service-eyebrow`,
                  children: `Mūsų paslaugos`,
                }),
              }),
              (0, Q.jsx)(`div`, {
                className: `mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2`,
                children: Rt.map((e) =>
                  (0, Q.jsxs)(
                    `div`,
                    {
                      className: `home-service-category`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `home-service-banner`,
                          children: [
                            (0, Q.jsx)(`img`, {
                              src: e.image,
                              alt: e.imageAlt,
                              loading: `lazy`,
                              width: 1536,
                              height: 1024,
                            }),
                            (0, Q.jsx)(`div`, { className: `home-service-banner-shade` }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`h3`, {
                                  className: `home-service-banner-title`,
                                  children: e.title,
                                }),
                                (0, Q.jsx)(`p`, {
                                  className: `home-service-banner-text`,
                                  children: e.text,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `home-service-rows`,
                          children: e.services.map((e) =>
                            (0, Q.jsxs)(
                              n,
                              {
                                to: e.to,
                                className: `home-service-row`,
                                children: [
                                  (0, Q.jsx)(e.icon, {
                                    className: `home-service-row-icon`,
                                    "aria-hidden": `true`,
                                    strokeWidth: 1.5,
                                  }),
                                  (0, Q.jsxs)(`span`, {
                                    className: `home-service-row-body`,
                                    children: [
                                      (0, Q.jsx)(`span`, {
                                        className: `home-service-row-title`,
                                        children: e.title,
                                      }),
                                      (0, Q.jsx)(`span`, {
                                        className: `home-service-row-text`,
                                        children: e.text,
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(v, {
                                    className: `home-service-row-arrow`,
                                    "aria-hidden": `true`,
                                  }),
                                ],
                              },
                              e.title,
                            ),
                          ),
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          }),
          (0, Q.jsxs)(`section`, {
            className: `mt-3 grid grid-cols-12 gap-3`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `col-span-12 flex flex-col justify-center rounded-[26px] border border-line/70 bg-surface/70 p-8 ring-1 ring-line/20 backdrop-blur-xl md:col-span-5`,
                children: [
                  (0, Q.jsx)(`p`, {
                    className: `font-mono text-[10px] uppercase tracking-[0.2em] text-muted`,
                    children: `Apie mus`,
                  }),
                  (0, Q.jsx)(`p`, {
                    className: `mt-4 max-w-[34ch] text-[17px] leading-relaxed text-pretty text-ink/90`,
                    children: `Espray — šeimos gamyba Panevėžyje. Dirbame su MDF, fanera ir kietąja mediena; kiekvieną briauną tikriname ranka.`,
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `mt-6 flex gap-8`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`p`, {
                            className: `text-[22px] font-semibold`,
                            children: `15+`,
                          }),
                          (0, Q.jsx)(`p`, {
                            className: `font-mono text-[10px] uppercase tracking-[0.16em] text-muted`,
                            children: `metai`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`p`, {
                            className: `text-[22px] font-semibold`,
                            children: `480`,
                          }),
                          (0, Q.jsx)(`p`, {
                            className: `font-mono text-[10px] uppercase tracking-[0.16em] text-muted`,
                            children: `projektų`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(n, {
                    to: `/apie`,
                    className: `mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-accent transition-colors hover:text-accent-deep`,
                    children: `Susipažinti →`,
                  }),
                ],
              }),
              (0, Q.jsx)(Lt, {}),
            ],
          }),
          (0, Q.jsx)(`section`, {
            className: `mt-3 rounded-[26px] border border-line/70 bg-surface/80 p-8 ring-1 ring-line/20 backdrop-blur-xl md:p-10`,
            children: (0, Q.jsxs)(`div`, {
              className: `grid grid-cols-12 gap-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `col-span-12 md:col-span-5`,
                  children: [
                    (0, Q.jsx)(`h2`, {
                      className: `text-[26px] font-semibold tracking-tight`,
                      children: `Užklausa`,
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `mt-3 max-w-[34ch] text-[14px] leading-relaxed text-muted`,
                      children: `Parašykite, ką norite pagaminti — atsakysime per 1 darbo dieną.`,
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `mt-6 space-y-2 font-mono text-[12px] text-ink/80`,
                      children: [
                        (0, Q.jsx)(`p`, { children: `Nerijus Novikovas` }),
                        (0, Q.jsx)(`p`, {
                          children: (0, Q.jsx)(`a`, {
                            href: `tel:+37060791028`,
                            className: `hover:text-accent`,
                            children: `+370 607 91028`,
                          }),
                        }),
                        (0, Q.jsx)(`p`, {
                          children: (0, Q.jsx)(`a`, {
                            href: `mailto:nerijus@espray.lt`,
                            className: `hover:text-accent`,
                            children: `nerijus@espray.lt`,
                          }),
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-muted`,
                          children: `Velžio kel. 48, Panevėžys`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsx)(`div`, {
                  className: `col-span-12 md:col-span-7`,
                  children: (0, Q.jsx)(e, {}),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
export { zt as component };
