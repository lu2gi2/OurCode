const dhn = "/extra-usage is now /usage-credits";
const rjs = async (a, t)=>{
    let { call } = await import("/$bunfs/root/chunk-3z2b248t.js");
    return {
        type: "text",
        value: `/extra-usage is now /usage-credits

${(await call(a, t)).value}`
    };
};
export { dhn, rjs };
