const Bme = 10;
const jme = 2000;
function Wme(m, n, t = Date.now) {
    let e = m;
    let o = t();
    function r() {
        let k = t();
        let u = Math.floor((k - o) / n);
        if (u > 0) {
            e = Math.min(m, e + u);
            o += u * n;
        }
    }
    return {
        tryConsume () {
            r();
            if (e > 0) {
                e--;
                return true;
            }
            return false;
        },
        tokens () {
            r();
            return e;
        },
        msUntilToken () {
            r();
            if (e > 0) {
                return 0;
            }
            return Math.max(0, o + n - t());
        }
    };
}
export { Bme, jme, Wme };
