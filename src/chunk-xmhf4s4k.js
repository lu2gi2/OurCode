import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { Se, C } from "/$bunfs/root/chunk-cj4xndke.js";
const f = C(function(d, h) {
    h.exports = {
        single: {
            topLeft: "┌",
            top: "─",
            topRight: "┐",
            right: "│",
            bottomRight: "┘",
            bottom: "─",
            bottomLeft: "└",
            left: "│"
        },
        double: {
            topLeft: "╔",
            top: "═",
            topRight: "╗",
            right: "║",
            bottomRight: "╝",
            bottom: "═",
            bottomLeft: "╚",
            left: "║"
        },
        round: {
            topLeft: "╭",
            top: "─",
            topRight: "╮",
            right: "│",
            bottomRight: "╯",
            bottom: "─",
            bottomLeft: "╰",
            left: "│"
        },
        bold: {
            topLeft: "┏",
            top: "━",
            topRight: "┓",
            right: "┃",
            bottomRight: "┛",
            bottom: "━",
            bottomLeft: "┗",
            left: "┃"
        },
        singleDouble: {
            topLeft: "╓",
            top: "─",
            topRight: "╖",
            right: "║",
            bottomRight: "╜",
            bottom: "─",
            bottomLeft: "╙",
            left: "║"
        },
        doubleSingle: {
            topLeft: "╒",
            top: "═",
            topRight: "╕",
            right: "│",
            bottomRight: "╛",
            bottom: "═",
            bottomLeft: "╘",
            left: "│"
        },
        classic: {
            topLeft: "+",
            top: "-",
            topRight: "+",
            right: "|",
            bottomRight: "+",
            bottom: "-",
            bottomLeft: "+",
            left: "|"
        },
        arrow: {
            topLeft: "↘",
            top: "↓",
            topRight: "↙",
            right: "←",
            bottomRight: "↖",
            bottom: "↑",
            bottomLeft: "↗",
            left: "→"
        }
    };
});
const g = C(function(B, e) {
    const b = f();
    e.exports = b;
    e.exports.default = b;
});
const m = [
    "top",
    "left",
    "right",
    "bottom",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
];
const p = (t)=>L(t) && m.every((r)=>typeof t[r] === "string");
const R = Se(g(), 1);
const n = {
    dashed: {
        top: "╌",
        left: "╎",
        right: "╎",
        bottom: "╌",
        topLeft: " ",
        topRight: " ",
        bottomLeft: " ",
        bottomRight: " "
    },
    quote: {
        top: " ",
        left: "▎",
        right: " ",
        bottom: " ",
        topLeft: " ",
        topRight: " ",
        bottomLeft: " ",
        bottomRight: " "
    }
};
const o = {
    ...R.default,
    ...n
};
function PFn(t) {
    let i = typeof t === "string" && Object.hasOwn(o, t) ? o[t] : t;
    if (p(i)) {
        return i;
    }
}
const VNs = Object.keys(o).filter((t)=>PFn(t) !== undefined);
export { PFn, VNs };
