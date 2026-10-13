function so(r) {
    return r.map((t)=>{
        let n = String(t);
        if (n === "") {
            return "''";
        }
        if (/^[A-Za-z0-9_./:=@+,-]+$/.test(n)) {
            return n;
        }
        return `'${n.replaceAll("'", `'"'"'`)}'`;
    }).join(" ");
}
export { so };
