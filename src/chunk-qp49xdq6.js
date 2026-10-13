const t = {
    type: "local-jsx",
    name: "background",
    aliases: [
        "bg"
    ],
    description: "Send this session to the background and free the terminal",
    argumentHint: "[prompt]",
    immediate: (e)=>!e.trim(),
    isEnabled: ()=>true
};
const n = t;
export { n as default };
