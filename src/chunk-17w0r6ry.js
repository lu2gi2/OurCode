function Ss() {
    let t;
    return {
        set: (e)=>{
            t = e;
        },
        get: ()=>t
    };
}
const lwr = Ss();
const ZPt = ()=>lwr.get();
export { Ss, lwr, ZPt };
