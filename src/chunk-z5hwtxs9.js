import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { fJt, xhs } from "/$bunfs/root/chunk-s7aawpq2.js";
import { m0 } from "/$bunfs/root/chunk-9dn6gg6j.js";
import s from "process";
function r() {
    let { env } = s;
    let { TERM, TERM_PROGRAM } = env;
    if (s.platform !== "win32") {
        return TERM !== "linux";
    }
    return Boolean(env.WT_SESSION) || Boolean(env.TERMINUS_SUBLIME) || env.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
const f = {
    circleQuestionMark: "(?)",
    questionMarkPrefix: "(?)",
    square: "█",
    squareDarkShade: "▓",
    squareMediumShade: "▒",
    squareLightShade: "░",
    squareTop: "▀",
    squareBottom: "▄",
    squareLeft: "▌",
    squareRight: "▐",
    squareCenter: "■",
    bullet: "●",
    dot: "․",
    ellipsis: "…",
    pointerSmall: "›",
    triangleUp: "▲",
    triangleUpSmall: "▴",
    triangleDown: "▼",
    triangleDownSmall: "▾",
    triangleLeftSmall: "◂",
    triangleRightSmall: "▸",
    home: "⌂",
    heart: "♥",
    musicNote: "♪",
    musicNoteBeamed: "♫",
    arrowUp: "↑",
    arrowDown: "↓",
    arrowLeft: "←",
    arrowRight: "→",
    arrowLeftRight: "↔",
    arrowUpDown: "↕",
    almostEqual: "≈",
    notEqual: "≠",
    lessOrEqual: "≤",
    greaterOrEqual: "≥",
    identical: "≡",
    infinity: "∞",
    subscriptZero: "₀",
    subscriptOne: "₁",
    subscriptTwo: "₂",
    subscriptThree: "₃",
    subscriptFour: "₄",
    subscriptFive: "₅",
    subscriptSix: "₆",
    subscriptSeven: "₇",
    subscriptEight: "₈",
    subscriptNine: "₉",
    oneHalf: "½",
    oneThird: "⅓",
    oneQuarter: "¼",
    oneFifth: "⅕",
    oneSixth: "⅙",
    oneEighth: "⅛",
    twoThirds: "⅔",
    twoFifths: "⅖",
    threeQuarters: "¾",
    threeFifths: "⅗",
    threeEighths: "⅜",
    fourFifths: "⅘",
    fiveSixths: "⅚",
    fiveEighths: "⅝",
    sevenEighths: "⅞",
    line: "─",
    lineBold: "━",
    lineDouble: "═",
    lineDashed0: "┄",
    lineDashed1: "┅",
    lineDashed2: "┈",
    lineDashed3: "┉",
    lineDashed4: "╌",
    lineDashed5: "╍",
    lineDashed6: "╴",
    lineDashed7: "╶",
    lineDashed8: "╸",
    lineDashed9: "╺",
    lineDashed10: "╼",
    lineDashed11: "╾",
    lineDashed12: "−",
    lineDashed13: "–",
    lineDashed14: "‐",
    lineDashed15: "⁃",
    lineVertical: "│",
    lineVerticalBold: "┃",
    lineVerticalDouble: "║",
    lineVerticalDashed0: "┆",
    lineVerticalDashed1: "┇",
    lineVerticalDashed2: "┊",
    lineVerticalDashed3: "┋",
    lineVerticalDashed4: "╎",
    lineVerticalDashed5: "╏",
    lineVerticalDashed6: "╵",
    lineVerticalDashed7: "╷",
    lineVerticalDashed8: "╹",
    lineVerticalDashed9: "╻",
    lineVerticalDashed10: "╽",
    lineVerticalDashed11: "╿",
    lineDownLeft: "┐",
    lineDownLeftArc: "╮",
    lineDownBoldLeftBold: "┓",
    lineDownBoldLeft: "┒",
    lineDownLeftBold: "┑",
    lineDownDoubleLeftDouble: "╗",
    lineDownDoubleLeft: "╖",
    lineDownLeftDouble: "╕",
    lineDownRight: "┌",
    lineDownRightArc: "╭",
    lineDownBoldRightBold: "┏",
    lineDownBoldRight: "┎",
    lineDownRightBold: "┍",
    lineDownDoubleRightDouble: "╔",
    lineDownDoubleRight: "╓",
    lineDownRightDouble: "╒",
    lineUpLeft: "┘",
    lineUpLeftArc: "╯",
    lineUpBoldLeftBold: "┛",
    lineUpBoldLeft: "┚",
    lineUpLeftBold: "┙",
    lineUpDoubleLeftDouble: "╝",
    lineUpDoubleLeft: "╜",
    lineUpLeftDouble: "╛",
    lineUpRight: "└",
    lineUpRightArc: "╰",
    lineUpBoldRightBold: "┗",
    lineUpBoldRight: "┖",
    lineUpRightBold: "┕",
    lineUpDoubleRightDouble: "╚",
    lineUpDoubleRight: "╙",
    lineUpRightDouble: "╘",
    lineUpDownLeft: "┤",
    lineUpBoldDownBoldLeftBold: "┫",
    lineUpBoldDownBoldLeft: "┨",
    lineUpDownLeftBold: "┥",
    lineUpBoldDownLeftBold: "┩",
    lineUpDownBoldLeftBold: "┪",
    lineUpDownBoldLeft: "┧",
    lineUpBoldDownLeft: "┦",
    lineUpDoubleDownDoubleLeftDouble: "╣",
    lineUpDoubleDownDoubleLeft: "╢",
    lineUpDownLeftDouble: "╡",
    lineUpDownRight: "├",
    lineUpBoldDownBoldRightBold: "┣",
    lineUpBoldDownBoldRight: "┠",
    lineUpDownRightBold: "┝",
    lineUpBoldDownRightBold: "┡",
    lineUpDownBoldRightBold: "┢",
    lineUpDownBoldRight: "┟",
    lineUpBoldDownRight: "┞",
    lineUpDoubleDownDoubleRightDouble: "╠",
    lineUpDoubleDownDoubleRight: "╟",
    lineUpDownRightDouble: "╞",
    lineDownLeftRight: "┬",
    lineDownBoldLeftBoldRightBold: "┳",
    lineDownLeftBoldRightBold: "┯",
    lineDownBoldLeftRight: "┰",
    lineDownBoldLeftBoldRight: "┱",
    lineDownBoldLeftRightBold: "┲",
    lineDownLeftRightBold: "┮",
    lineDownLeftBoldRight: "┭",
    lineDownDoubleLeftDoubleRightDouble: "╦",
    lineDownDoubleLeftRight: "╥",
    lineDownLeftDoubleRightDouble: "╤",
    lineUpLeftRight: "┴",
    lineUpBoldLeftBoldRightBold: "┻",
    lineUpLeftBoldRightBold: "┷",
    lineUpBoldLeftRight: "┸",
    lineUpBoldLeftBoldRight: "┹",
    lineUpBoldLeftRightBold: "┺",
    lineUpLeftRightBold: "┶",
    lineUpLeftBoldRight: "┵",
    lineUpDoubleLeftDoubleRightDouble: "╩",
    lineUpDoubleLeftRight: "╨",
    lineUpLeftDoubleRightDouble: "╧",
    lineUpDownLeftRight: "┼",
    lineUpBoldDownBoldLeftBoldRightBold: "╋",
    lineUpDownBoldLeftBoldRightBold: "╈",
    lineUpBoldDownLeftBoldRightBold: "╇",
    lineUpBoldDownBoldLeftRightBold: "╊",
    lineUpBoldDownBoldLeftBoldRight: "╉",
    lineUpBoldDownLeftRight: "╀",
    lineUpDownBoldLeftRight: "╁",
    lineUpDownLeftBoldRight: "┽",
    lineUpDownLeftRightBold: "┾",
    lineUpBoldDownBoldLeftRight: "╂",
    lineUpDownLeftBoldRightBold: "┿",
    lineUpBoldDownLeftBoldRight: "╃",
    lineUpBoldDownLeftRightBold: "╄",
    lineUpDownBoldLeftBoldRight: "╅",
    lineUpDownBoldLeftRightBold: "╆",
    lineUpDoubleDownDoubleLeftDoubleRightDouble: "╬",
    lineUpDoubleDownDoubleLeftRight: "╫",
    lineUpDownLeftDoubleRightDouble: "╪",
    lineCross: "╳",
    lineBackslash: "╲",
    lineSlash: "╱"
};
const a = {
    tick: "✔",
    info: "ℹ",
    warning: "⚠",
    cross: "✘",
    squareSmall: "◻",
    squareSmallFilled: "◼",
    circle: "◯",
    circleFilled: "◉",
    circleDotted: "◌",
    circleDouble: "◎",
    circleCircle: "ⓞ",
    circleCross: "ⓧ",
    circlePipe: "Ⓘ",
    radioOn: "◉",
    radioOff: "◯",
    checkboxOn: "☒",
    checkboxOff: "☐",
    checkboxCircleOn: "ⓧ",
    checkboxCircleOff: "Ⓘ",
    pointer: "❯",
    triangleUpOutline: "△",
    triangleLeft: "◀",
    triangleRight: "▶",
    lozenge: "◆",
    lozengeOutline: "◇",
    hamburger: "☰",
    smiley: "㋡",
    mustache: "෴",
    star: "★",
    play: "▶",
    nodejs: "⬢",
    oneSeventh: "⅐",
    oneNinth: "⅑",
    oneTenth: "⅒"
};
const h = {
    tick: "√",
    info: "i",
    warning: "‼",
    cross: "×",
    squareSmall: "□",
    squareSmallFilled: "■",
    circle: "( )",
    circleFilled: "(*)",
    circleDotted: "( )",
    circleDouble: "( )",
    circleCircle: "(○)",
    circleCross: "(×)",
    circlePipe: "(│)",
    radioOn: "(*)",
    radioOff: "( )",
    checkboxOn: "[×]",
    checkboxOff: "[ ]",
    checkboxCircleOn: "(×)",
    checkboxCircleOff: "( )",
    pointer: ">",
    triangleUpOutline: "∆",
    triangleLeft: "◄",
    triangleRight: "►",
    lozenge: "♦",
    lozengeOutline: "◊",
    hamburger: "≡",
    smiley: "☺",
    mustache: "┌─┐",
    star: "✶",
    play: "►",
    nodejs: "♦",
    oneSeventh: "1/7",
    oneNinth: "1/9",
    oneTenth: "1/10"
};
const D = {
    ...f,
    ...a
};
const c = {
    ...f,
    ...h
};
const p = r();
const w = p ? D : c;
const te = w;
const R = Object.entries(a);
function ynt() {
    return m0()?.settings.workflowSizeGuideline !== undefined;
}
function gYt(e) {
    return fJt(m0()?.settings.workflowSizeGuideline) ?? fJt(e);
}
function Hlr(e, size) {
    let size_1 = gYt(e);
    if (size_1 === undefined) {
        return {
            size,
            isDefault: true
        };
    }
    return {
        size: size_1,
        isDefault: false
    };
}
function PRn(e, i) {
    let l = wo();
    l.sessionStartWorkflowSizeGuideline ??= Hlr(e, i);
    return l.sessionStartWorkflowSizeGuideline;
}
function u7r(e, i) {
    let { size, isDefault } = PRn(e, i);
    if (size === "unrestricted") {
        return "";
    }
    return `

${xhs(size, isDefault)}`;
}
function wts(e, i, l) {
    let size = Hlr(i, l).size;
    let d;
    for(let n = e.length - 1; n >= 0; n--){
        let t = e[n];
        if (t?.type === "attachment" && t.attachment.type === "workflow_size_guideline_change") {
            d = t.attachment.size;
            break;
        }
    }
    let u = d ?? PRn(i, l).size;
    if (size !== u) {
        return [
            {
                type: "workflow_size_guideline_change",
                size
            }
        ];
    }
    return [];
}
export { te, ynt, gYt, Hlr, PRn, u7r, wts };
