import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { dB, G3t } from "/$bunfs/root/chunk-yq147k4z.js";
import { $fe } from "/$bunfs/root/chunk-066dgc2r.js";
import { OU, EQn, aI, h_t, TQn } from "/$bunfs/root/chunk-cgpqvjrr.js";
import { hs, kV } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qme, g_t } from "/$bunfs/root/chunk-gw1f0xa7.js";
import { qt, le, Te, P, Z, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
const j = Object.freeze({});
const k = qt(j);
function Gmt(o) {
    let a = w(6);
    let { storageV5, credentials, children } = o;
    let t;
    if (a[0] !== credentials || a[1] !== storageV5) {
        t = storageV5 === undefined && credentials === undefined ? j : {
            storageV5,
            credentials
        };
        a[0] = credentials;
        a[1] = storageV5;
        a[2] = t;
    } else {
        t = a[2];
    }
    let C = t;
    let H;
    if (a[3] !== children || a[4] !== C) {
        H = e(k.Provider, {
            value: C,
            children
        });
        a[3] = children;
        a[4] = C;
        a[5] = H;
    } else {
        H = a[5];
    }
    return H;
}
function Pe() {
    return Te(k);
}
N();
const Me = ()=>Te($fe);
const YO = Me;
N();
const z = "dark";
const i = qt({
    themeSetting: z,
    setThemeSetting: ()=>{},
    setPreviewTheme: ()=>{},
    cancelPreview: ()=>{},
    currentTheme: z,
    resolvedTheme: dB(z),
    activeThemeOverrides: undefined,
    customThemes: [],
    activeCustomTheme: undefined,
    reloadCustomThemes: ()=>Promise.resolve(),
    setPreviewOverrides: ()=>{}
});
function Hdn() {
    return hs("theme", "dark").value;
}
function Ddn(o) {
    let t = w(46);
    let { children, initialState, onThemeSave } = o;
    let { storageV5 } = Pe();
    let C;
    if (t[0] !== onThemeSave || t[1] !== storageV5) {
        C = (H)=>{
            if (onThemeSave) {
                return onThemeSave(H);
            }
            return kV("theme", H, storageV5);
        };
        t[0] = onThemeSave;
        t[1] = storageV5;
        t[2] = C;
    } else {
        C = t[2];
    }
    let I = C;
    let [T, rt] = y(initialState ?? Hdn);
    let [it, J] = y(null);
    let [nt, setPreviewOverrides] = y(null);
    let [K, mt] = y(EQn);
    let ve;
    if (t[3] === S) {
        ve = OU();
        t[3] = ve;
    } else {
        ve = t[3];
    }
    let ve_pluginThemes = ve.pluginThemes;
    let Q = Rt(ve_pluginThemes.subscribe, ve_pluginThemes.getState);
    let Se;
    if (t[4] !== Q || t[5] !== K) {
        Se = [
            ...K,
            ...Q
        ];
        t[4] = Q;
        t[5] = K;
        t[6] = Se;
    } else {
        Se = t[6];
    }
    let customThemes = Se;
    let ge;
    if (t[7] !== initialState || t[8] !== T) {
        ge = ()=>{
            if ((initialState ?? T) === "auto") {
                return qme();
            }
            return "dark";
        };
        t[7] = initialState;
        t[8] = T;
        t[9] = ge;
    } else {
        ge = t[9];
    }
    let [ot, O] = y(ge);
    let m = it ?? T;
    let pe;
    if (t[10] !== storageV5) {
        pe = ()=>h_t(storageV5).then(mt);
        t[10] = storageV5;
        t[11] = pe;
    } else {
        pe = t[11];
    }
    let reloadCustomThemes = pe;
    let fe;
    let we;
    if (t[12] !== reloadCustomThemes) {
        fe = ()=>{
            reloadCustomThemes();
            return TQn(()=>void reloadCustomThemes());
        };
        we = [
            reloadCustomThemes
        ];
        t[12] = reloadCustomThemes;
        t[13] = fe;
        t[14] = we;
    } else {
        fe = t[13];
        we = t[14];
    }
    P(fe, we);
    let { internal_querier } = YO();
    let Ce;
    let ye;
    if (t[15] !== m) {
        Ce = ()=>{
            if (m !== "auto") {
                return;
            }
            O(qme());
            return g_t(()=>O(qme()));
        };
        ye = [
            m
        ];
        t[15] = m;
        t[16] = Ce;
        t[17] = ye;
    } else {
        Ce = t[16];
        ye = t[17];
    }
    P(Ce, ye);
    let Oe;
    let Ve;
    if (t[18] !== m || t[19] !== internal_querier) {
        Oe = ()=>{
            if (m !== "auto" || !internal_querier) {
                return;
            }
            let Re;
            let ke = false;
            import("/$bunfs/root/chunk-yp8zddcz.js").then(({ watchSystemTheme })=>{
                if (ke) {
                    return;
                }
                Re = watchSystemTheme(internal_querier, O);
            });
            return ()=>{
                ke = true;
                Re?.();
            };
        };
        Ve = [
            m,
            internal_querier
        ];
        t[18] = m;
        t[19] = internal_querier;
        t[20] = Oe;
        t[21] = Ve;
    } else {
        Oe = t[20];
        Ve = t[21];
    }
    P(Oe, Ve);
    let U;
    if (t[22] !== m) {
        U = aI(m);
        t[22] = m;
        t[23] = U;
    } else {
        U = t[23];
    }
    let R = U;
    let xe;
    if (t[24] !== R || t[25] !== customThemes) {
        xe = R ? customThemes.find((ht)=>ht.slug === R) : undefined;
        t[24] = R;
        t[25] = customThemes;
        t[26] = xe;
    } else {
        xe = t[26];
    }
    let activeCustomTheme = xe;
    let currentTheme = activeCustomTheme ? activeCustomTheme.base : m === "auto" ? ot : R ? "dark" : m;
    let activeThemeOverrides = nt ?? activeCustomTheme?.overrides;
    let _e;
    if (t[27] !== activeThemeOverrides || t[28] !== currentTheme) {
        _e = G3t(dB(currentTheme), activeThemeOverrides);
        t[27] = activeThemeOverrides;
        t[28] = currentTheme;
        t[29] = _e;
    } else {
        _e = t[29];
    }
    let resolvedTheme = _e;
    let Ne;
    if (t[30] === S) {
        Ne = ()=>J(null);
        t[30] = Ne;
    } else {
        Ne = t[30];
    }
    let cancelPreview = Ne;
    let setThemeSetting;
    if (t[31] !== I) {
        setThemeSetting = (X)=>{
            rt(X);
            J(null);
            if (X === "auto") {
                O(qme());
            }
            I(X);
        };
        t[31] = I;
        t[32] = setThemeSetting;
    } else {
        setThemeSetting = t[32];
    }
    let setPreviewTheme;
    if (t[33] === S) {
        setPreviewTheme = (qe)=>{
            J(qe);
            if (qe === "auto") {
                O(qme());
            }
        };
        t[33] = setPreviewTheme;
    } else {
        setPreviewTheme = t[33];
    }
    let He;
    if (t[34] !== activeCustomTheme || t[35] !== activeThemeOverrides || t[36] !== currentTheme || t[37] !== customThemes || t[38] !== reloadCustomThemes || t[39] !== resolvedTheme || t[40] !== setThemeSetting || t[41] !== T) {
        He = {
            themeSetting: T,
            setThemeSetting,
            setPreviewTheme,
            cancelPreview,
            currentTheme,
            resolvedTheme,
            activeThemeOverrides,
            customThemes,
            activeCustomTheme,
            reloadCustomThemes,
            setPreviewOverrides
        };
        t[34] = activeCustomTheme;
        t[35] = activeThemeOverrides;
        t[36] = currentTheme;
        t[37] = customThemes;
        t[38] = reloadCustomThemes;
        t[39] = resolvedTheme;
        t[40] = setThemeSetting;
        t[41] = T;
        t[42] = He;
    } else {
        He = t[42];
    }
    let ee = He;
    let Ue;
    if (t[43] !== children || t[44] !== ee) {
        Ue = e(i.Provider, {
            value: ee,
            children
        });
        t[43] = children;
        t[44] = ee;
        t[45] = Ue;
    } else {
        Ue = t[45];
    }
    return Ue;
}
function hr() {
    let s = w(3);
    let { currentTheme, setThemeSetting } = Te(i);
    let n;
    if (s[0] !== currentTheme || s[1] !== setThemeSetting) {
        n = [
            currentTheme,
            setThemeSetting
        ];
        s[0] = currentTheme;
        s[1] = setThemeSetting;
        s[2] = n;
    } else {
        n = s[2];
    }
    return n;
}
function q9() {
    return Te(i).themeSetting;
}
function Ldn() {
    let s = w(3);
    let { setPreviewTheme, cancelPreview } = Te(i);
    let n;
    if (s[0] !== cancelPreview || s[1] !== setPreviewTheme) {
        n = {
            setPreviewTheme,
            cancelPreview
        };
        s[0] = cancelPreview;
        s[1] = setPreviewTheme;
        s[2] = n;
    } else {
        n = s[2];
    }
    return n;
}
function Vb() {
    return Te(i).resolvedTheme;
}
function Ndn() {
    return Te(i).activeThemeOverrides;
}
function Dfe() {
    let a = w(5);
    let { customThemes, activeCustomTheme, reloadCustomThemes, setPreviewOverrides } = Te(i);
    let t;
    if (a[0] !== activeCustomTheme || a[1] !== customThemes || a[2] !== reloadCustomThemes || a[3] !== setPreviewOverrides) {
        t = {
            customThemes,
            activeCustomTheme,
            reloadCustomThemes,
            setPreviewOverrides
        };
        a[0] = activeCustomTheme;
        a[1] = customThemes;
        a[2] = reloadCustomThemes;
        a[3] = setPreviewOverrides;
        a[4] = t;
    } else {
        t = a[4];
    }
    return t;
}
export { Gmt, Pe, YO, Hdn, Ddn, hr, q9, Ldn, Vb, Ndn, Dfe };
