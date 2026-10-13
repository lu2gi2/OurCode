import { Ei } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const w = C(function(et) {
    class V extends Error {
        constructor(t, e, i){
            super(i);
            Error.captureStackTrace(this, this.constructor);
            this.name = this.constructor.name;
            this.code = e;
            this.exitCode = t;
            this.nestedError = undefined;
        }
    }
    class W extends V {
        constructor(t){
            super(1, "commander.invalidArgument", t);
            Error.captureStackTrace(this, this.constructor);
            this.name = this.constructor.name;
        }
    }
    et.CommanderError = V;
    et.InvalidArgumentError = W;
});
const H = C(function(ot) {
    const { InvalidArgumentError } = w();
    class q {
        constructor(t, e){
            this.description = e || "";
            this.variadic = false;
            this.parseArg = undefined;
            this.defaultValue = undefined;
            this.defaultValueDescription = undefined;
            this.argChoices = undefined;
            switch(t[0]){
                case "<":
                    this.required = true;
                    this._name = t.slice(1, -1);
                    break;
                case "[":
                    this.required = false;
                    this._name = t.slice(1, -1);
                    break;
                default:
                    this.required = true;
                    this._name = t;
                    break;
            }
            if (this._name.length > 3 && this._name.slice(-3) === "...") {
                this.variadic = true;
                this._name = this._name.slice(0, -3);
            }
        }
        name() {
            return this._name;
        }
        _concatValue(t, e) {
            if (e === this.defaultValue || !Array.isArray(e)) {
                return [
                    t
                ];
            }
            return e.concat(t);
        }
        default(t, e) {
            this.defaultValue = t;
            this.defaultValueDescription = e;
            return this;
        }
        argParser(t) {
            this.parseArg = t;
            return this;
        }
        choices(t) {
            this.argChoices = t.slice();
            this.parseArg = (e, i)=>{
                if (!this.argChoices.includes(e)) {
                    throw new InvalidArgumentError(`Allowed choices are ${this.argChoices.join(", ")}.`);
                }
                if (this.variadic) {
                    return this._concatValue(e, i);
                }
                return e;
            };
            return this;
        }
        argRequired() {
            this.required = true;
            return this;
        }
        argOptional() {
            this.required = false;
            return this;
        }
    }
    function rt(t) {
        let e = t.name() + (t.variadic === true ? "..." : "");
        if (t.required) {
            return `<${e}>`;
        }
        return `[${e}]`;
    }
    ot.Argument = q;
    ot.humanReadableArgName = rt;
});
const k = C(function(lt) {
    const { humanReadableArgName } = H();
    class F {
        constructor(){
            this.helpWidth = undefined;
            this.sortSubcommands = false;
            this.sortOptions = false;
            this.showGlobalOptions = false;
        }
        visibleCommands(t) {
            let e = t.commands.filter((n)=>!n._hidden);
            let i = t._getHelpCommand();
            if (i && !i._hidden) {
                e.push(i);
            }
            if (this.sortSubcommands) {
                e.sort((n, s)=>n.name().localeCompare(s.name()));
            }
            return e;
        }
        compareOptions(t, e) {
            let i = (n)=>{
                if (n.short) {
                    return n.short.replace(/^-/, "");
                }
                return n.long.replace(/^--/, "");
            };
            return i(t).localeCompare(i(e));
        }
        visibleOptions(t) {
            let e = t.options.filter((n)=>!n.hidden);
            let i = t._getHelpOption();
            if (i && !i.hidden) {
                let n = i.short && t._findOption(i.short);
                let s = i.long && t._findOption(i.long);
                if (!n && !s) {
                    e.push(i);
                } else if (i.long && !s) {
                    e.push(t.createOption(i.long, i.description));
                } else if (i.short && !n) {
                    e.push(t.createOption(i.short, i.description));
                }
            }
            if (this.sortOptions) {
                e.sort(this.compareOptions);
            }
            return e;
        }
        visibleGlobalOptions(t) {
            if (!this.showGlobalOptions) {
                return [];
            }
            let e = [];
            for(let i = t.parent; i; i = i.parent){
                let n = i.options.filter((s)=>!s.hidden);
                e.push(...n);
            }
            if (this.sortOptions) {
                e.sort(this.compareOptions);
            }
            return e;
        }
        visibleArguments(t) {
            if (t._argsDescription) {
                t.registeredArguments.forEach((e)=>{
                    e.description = e.description || t._argsDescription[e.name()] || "";
                });
            }
            if (t.registeredArguments.find((e)=>e.description)) {
                return t.registeredArguments;
            }
            return [];
        }
        subcommandTerm(t) {
            let e = t.registeredArguments.map((i)=>humanReadableArgName(i)).join(" ");
            return t._name + (t._aliases[0] ? `|${t._aliases[0]}` : "") + (t.options.length ? " [options]" : "") + (e ? ` ${e}` : "");
        }
        optionTerm(t) {
            return t.flags;
        }
        argumentTerm(t) {
            return t.name();
        }
        longestSubcommandTermLength(t, e) {
            return e.visibleCommands(t).reduce((acc, item)=>Math.max(acc, e.subcommandTerm(item).length), 0);
        }
        longestOptionTermLength(t, e) {
            return e.visibleOptions(t).reduce((acc, item)=>Math.max(acc, e.optionTerm(item).length), 0);
        }
        longestGlobalOptionTermLength(t, e) {
            return e.visibleGlobalOptions(t).reduce((acc, item)=>Math.max(acc, e.optionTerm(item).length), 0);
        }
        longestArgumentTermLength(t, e) {
            return e.visibleArguments(t).reduce((acc, item)=>Math.max(acc, e.argumentTerm(item).length), 0);
        }
        commandUsage(t) {
            let t__name = t._name;
            if (t._aliases[0]) {
                t__name = `${t__name}|${t._aliases[0]}`;
            }
            let i = "";
            for(let n = t.parent; n; n = n.parent){
                i = `${n.name()} ${i}`;
            }
            return `${i + t__name} ${t.usage()}`;
        }
        commandDescription(t) {
            return t.description();
        }
        subcommandDescription(t) {
            return t.summary() || t.description();
        }
        optionDescription(t) {
            let e = [];
            if (t.argChoices) {
                e.push(`choices: ${t.argChoices.map((i)=>JSON.stringify(i)).join(", ")}`);
            }
            if (t.defaultValue !== undefined) {
                if (t.required || t.optional || t.isBoolean() && typeof t.defaultValue === "boolean") {
                    e.push(`default: ${t.defaultValueDescription || JSON.stringify(t.defaultValue)}`);
                }
            }
            if (t.presetArg !== undefined && t.optional) {
                e.push(`preset: ${JSON.stringify(t.presetArg)}`);
            }
            if (t.envVar !== undefined) {
                e.push(`env: ${t.envVar}`);
            }
            if (e.length > 0) {
                return `${t.description} (${e.join(", ")})`;
            }
            return t.description;
        }
        argumentDescription(t) {
            let e = [];
            if (t.argChoices) {
                e.push(`choices: ${t.argChoices.map((i)=>JSON.stringify(i)).join(", ")}`);
            }
            if (t.defaultValue !== undefined) {
                e.push(`default: ${t.defaultValueDescription || JSON.stringify(t.defaultValue)}`);
            }
            if (e.length > 0) {
                let i = `(${e.join(", ")})`;
                if (t.description) {
                    return `${t.description} ${i}`;
                }
                return i;
            }
            return t.description;
        }
        formatHelp(t, e) {
            let i = e.padWidth(t, e);
            let n = e.helpWidth || 80;
            let s = 2;
            let r = 2;
            function a(p, O) {
                if (O) {
                    let S = `${p.padEnd(i + 2)}${O}`;
                    return e.wrap(S, n - 2, i + 2);
                }
                return p;
            }
            function o(p) {
                return p.join(`
`).replace(/^/gm, " ".repeat(2));
            }
            let h = [
                `Usage: ${e.commandUsage(t)}`,
                ""
            ];
            let u = e.commandDescription(t);
            if (u.length > 0) {
                h = h.concat([
                    e.wrap(u, n, 0),
                    ""
                ]);
            }
            let c = e.visibleArguments(t).map((p)=>a(e.argumentTerm(p), e.argumentDescription(p)));
            if (c.length > 0) {
                h = h.concat([
                    "Arguments:",
                    o(c),
                    ""
                ]);
            }
            let d = e.visibleOptions(t).map((p)=>a(e.optionTerm(p), e.optionDescription(p)));
            if (d.length > 0) {
                h = h.concat([
                    "Options:",
                    o(d),
                    ""
                ]);
            }
            if (this.showGlobalOptions) {
                let p = e.visibleGlobalOptions(t).map((O)=>a(e.optionTerm(O), e.optionDescription(O)));
                if (p.length > 0) {
                    h = h.concat([
                        "Global Options:",
                        o(p),
                        ""
                    ]);
                }
            }
            let _ = e.visibleCommands(t).map((p)=>a(e.subcommandTerm(p), e.subcommandDescription(p)));
            if (_.length > 0) {
                h = h.concat([
                    "Commands:",
                    o(_),
                    ""
                ]);
            }
            return h.join(`
`);
        }
        padWidth(t, e) {
            return Math.max(e.longestOptionTermLength(t, e), e.longestGlobalOptionTermLength(t, e), e.longestSubcommandTermLength(t, e), e.longestArgumentTermLength(t, e));
        }
        wrap(t, e, i, n = 40) {
            let r = new RegExp(`[\\n][${" \\f\\t\\v\xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF"}]+`);
            if (t.match(r)) {
                return t;
            }
            let a = e - i;
            if (a < n) {
                return t;
            }
            let o = t.slice(0, i);
            let h = t.slice(i).replace(`\r
`, `
`);
            let u = " ".repeat(i);
            let d = `\\s${"\u200B"}`;
            let _ = new RegExp(`
|.{1,${a - 1}}([${d}]|$)|[^${d}]+?([${d}]|$)`, "g");
            let p = h.match(_) || [];
            return o + p.map((O, S)=>{
                if (O === `
`) {
                    return "";
                }
                return (S > 0 ? u : "") + O.trimEnd();
            }).join(`
`);
        }
    }
    lt.Help = F;
});
const D = C(function(ft) {
    const { InvalidArgumentError } = w();
    class M {
        constructor(t, e){
            this.flags = t;
            this.description = e || "";
            this.required = t.includes("<");
            this.optional = t.includes("[");
            this.variadic = /\w\.\.\.[>\]]$/.test(t);
            this.mandatory = false;
            let i = dt(t);
            this.short = i.shortFlag;
            this.long = i.longFlag;
            this.negate = false;
            if (this.long) {
                this.negate = this.long.startsWith("--no-");
            }
            this.defaultValue = undefined;
            this.defaultValueDescription = undefined;
            this.presetArg = undefined;
            this.envVar = undefined;
            this.parseArg = undefined;
            this.hidden = false;
            this.argChoices = undefined;
            this.conflictsWith = [];
            this.implied = undefined;
        }
        default(t, e) {
            this.defaultValue = t;
            this.defaultValueDescription = e;
            return this;
        }
        preset(t) {
            this.presetArg = t;
            return this;
        }
        conflicts(t) {
            this.conflictsWith = this.conflictsWith.concat(t);
            return this;
        }
        implies(t) {
            let e = t;
            if (typeof t === "string") {
                e = {
                    [t]: true
                };
            }
            this.implied = Object.assign(this.implied || {}, e);
            return this;
        }
        env(t) {
            this.envVar = t;
            return this;
        }
        argParser(t) {
            this.parseArg = t;
            return this;
        }
        makeOptionMandatory(t = true) {
            this.mandatory = !!t;
            return this;
        }
        hideHelp(t = true) {
            this.hidden = !!t;
            return this;
        }
        _concatValue(t, e) {
            if (e === this.defaultValue || !Array.isArray(e)) {
                return [
                    t
                ];
            }
            return e.concat(t);
        }
        choices(t) {
            this.argChoices = t.slice();
            this.parseArg = (e, i)=>{
                if (!this.argChoices.includes(e)) {
                    throw new InvalidArgumentError(`Allowed choices are ${this.argChoices.join(", ")}.`);
                }
                if (this.variadic) {
                    return this._concatValue(e, i);
                }
                return e;
            };
            return this;
        }
        name() {
            if (this.long) {
                return this.long.replace(/^--/, "");
            }
            return this.short.replace(/^-/, "");
        }
        attributeName() {
            return pt(this.name().replace(/^no-/, ""));
        }
        is(t) {
            return this.short === t || this.long === t;
        }
        isBoolean() {
            return !this.required && !this.optional && !this.negate;
        }
    }
    class j {
        constructor(t){
            this.positiveOptions = new Map;
            this.negativeOptions = new Map;
            this.dualOptions = new Set;
            t.forEach((e)=>{
                if (e.negate) {
                    this.negativeOptions.set(e.attributeName(), e);
                } else {
                    this.positiveOptions.set(e.attributeName(), e);
                }
            });
            this.negativeOptions.forEach((e, i)=>{
                if (this.positiveOptions.has(i)) {
                    this.dualOptions.add(i);
                }
            });
        }
        valueFromOption(t, e) {
            let i = e.attributeName();
            if (!this.dualOptions.has(i)) {
                return true;
            }
            let presetArg = this.negativeOptions.get(i).presetArg;
            let s = presetArg !== undefined ? presetArg : false;
            return e.negate === (s === t);
        }
    }
    function pt(t) {
        return t.split("-").reduce((acc, item)=>acc + item[0].toUpperCase() + item.slice(1));
    }
    function dt(t) {
        let shortFlag;
        let longFlag;
        let n = t.split(/[ |,]+/);
        if (n.length > 1 && !/^[[<]/.test(n[1])) {
            shortFlag = n.shift();
        }
        longFlag = n.shift();
        if (!shortFlag && /^-[^-]$/.test(longFlag)) {
            shortFlag = longFlag;
            longFlag = undefined;
        }
        return {
            shortFlag,
            longFlag
        };
    }
    ft.Option = M;
    ft.DualOptions = j;
});
const U = C(function(At) {
    function Ot(t, e) {
        if (Math.abs(t.length - e.length) > 3) {
            return Math.max(t.length, e.length);
        }
        let i = [];
        for(let n = 0; n <= t.length; n++){
            i[n] = [
                n
            ];
        }
        for(let n = 0; n <= e.length; n++){
            i[0][n] = n;
        }
        for(let n = 1; n <= e.length; n++){
            for(let s = 1; s <= t.length; s++){
                let r = 1;
                if (t[s - 1] === e[n - 1]) {
                    r = 0;
                } else {
                    r = 1;
                }
                i[s][n] = Math.min(i[s - 1][n] + 1, i[s][n - 1] + 1, i[s - 1][n - 1] + r);
                if (s > 1 && n > 1 && t[s - 1] === e[n - 2] && t[s - 2] === e[n - 1]) {
                    i[s][n] = Math.min(i[s][n], i[s - 2][n - 2] + 1);
                }
            }
        }
        return i[t.length][e.length];
    }
    function Ct(t, e) {
        if (!e || e.length === 0) {
            return "";
        }
        e = Array.from(new Set(e));
        let i = t.startsWith("--");
        if (i) {
            t = t.slice(2);
            e = e.map((a)=>a.slice(2));
        }
        let n = [];
        let s = 3;
        let r = 0.4;
        e.forEach((a)=>{
            if (a.length <= 1) {
                return;
            }
            let o = Ot(t, a);
            let h = Math.max(t.length, a.length);
            if ((h - o) / h > r) {
                if (o < s) {
                    s = o;
                    n = [
                        a
                    ];
                } else if (o === s) {
                    n.push(a);
                }
            }
        });
        n.sort((a, o)=>a.localeCompare(o));
        if (i) {
            n = n.map((a)=>`--${a}`);
        }
        if (n.length > 1) {
            return `
(Did you mean one of ${n.join(", ")}?)`;
        }
        if (n.length === 1) {
            return `
(Did you mean ${n[0]}?)`;
        }
        return "";
    }
    At.suggestSimilar = Ct;
});
const B = C(function(vt) {
    const EventEmitter = Le("events").EventEmitter;
    const A = Le("child_process");
    const f = Le("path");
    const b = Le("fs");
    const l = Le("process");
    const { Argument, humanReadableArgName } = H();
    const { CommanderError } = w();
    const { Help } = k();
    const { Option, DualOptions } = D();
    const { suggestSimilar } = U();
    class I extends EventEmitter {
        constructor(t){
            super();
            this.commands = [];
            this.options = [];
            this.parent = null;
            this._allowUnknownOption = false;
            this._allowExcessArguments = true;
            this.registeredArguments = [];
            this._args = this.registeredArguments;
            this.args = [];
            this.rawArgs = [];
            this.processedArgs = [];
            this._scriptPath = null;
            this._name = t || "";
            this._optionValues = {};
            this._optionValueSources = {};
            this._storeOptionsAsProperties = false;
            this._actionHandler = null;
            this._executableHandler = false;
            this._executableFile = null;
            this._executableDir = null;
            this._defaultCommandName = null;
            this._exitCallback = null;
            this._aliases = [];
            this._combineFlagAndOptionalValue = true;
            this._description = "";
            this._summary = "";
            this._argsDescription = undefined;
            this._enablePositionalOptions = false;
            this._passThroughOptions = false;
            this._lifeCycleHooks = {};
            this._showHelpAfterError = false;
            this._showSuggestionAfterError = true;
            this._outputConfiguration = {
                writeOut: (e)=>l.stdout.write(e),
                writeErr: (e)=>l.stderr.write(e),
                getOutHelpWidth: ()=>{
                    if (l.stdout.isTTY) {
                        return l.stdout.columns;
                    }
                },
                getErrHelpWidth: ()=>{
                    if (l.stderr.isTTY) {
                        return l.stderr.columns;
                    }
                },
                outputError: (e, i)=>i(e)
            };
            this._hidden = false;
            this._helpOption = undefined;
            this._addImplicitHelpCommand = undefined;
            this._helpCommand = undefined;
            this._helpConfiguration = {};
        }
        copyInheritedSettings(t) {
            this._outputConfiguration = t._outputConfiguration;
            this._helpOption = t._helpOption;
            this._helpCommand = t._helpCommand;
            this._helpConfiguration = t._helpConfiguration;
            this._exitCallback = t._exitCallback;
            this._storeOptionsAsProperties = t._storeOptionsAsProperties;
            this._combineFlagAndOptionalValue = t._combineFlagAndOptionalValue;
            this._allowExcessArguments = t._allowExcessArguments;
            this._enablePositionalOptions = t._enablePositionalOptions;
            this._showHelpAfterError = t._showHelpAfterError;
            this._showSuggestionAfterError = t._showSuggestionAfterError;
            return this;
        }
        _getCommandAndAncestors() {
            let t = [];
            for(let e = this; e; e = e.parent){
                t.push(e);
            }
            return t;
        }
        command(t, e, i) {
            let n = e;
            let s = i;
            if (typeof n === "object" && n !== null) {
                s = n;
                n = null;
            }
            s = s || {};
            let [, r, a] = t.match(/([^ ]+) *(.*)/);
            let o = this.createCommand(r);
            if (n) {
                o.description(n);
                o._executableHandler = true;
            }
            if (s.isDefault) {
                this._defaultCommandName = o._name;
            }
            o._hidden = !!(s.noHelp || s.hidden);
            o._executableFile = s.executableFile || null;
            if (a) {
                o.arguments(a);
            }
            this._registerCommand(o);
            o.parent = this;
            o.copyInheritedSettings(this);
            if (n) {
                return this;
            }
            return o;
        }
        createCommand(t) {
            return new I(t);
        }
        createHelp() {
            return Object.assign(new Help, this.configureHelp());
        }
        configureHelp(t) {
            if (t === undefined) {
                return this._helpConfiguration;
            }
            this._helpConfiguration = t;
            return this;
        }
        configureOutput(t) {
            if (t === undefined) {
                return this._outputConfiguration;
            }
            Object.assign(this._outputConfiguration, t);
            return this;
        }
        showHelpAfterError(t = true) {
            if (typeof t !== "string") {
                t = !!t;
            }
            this._showHelpAfterError = t;
            return this;
        }
        showSuggestionAfterError(t = true) {
            this._showSuggestionAfterError = !!t;
            return this;
        }
        addCommand(t, e) {
            if (!t._name) {
                throw Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
            }
            e = e || {};
            if (e.isDefault) {
                this._defaultCommandName = t._name;
            }
            if (e.noHelp || e.hidden) {
                t._hidden = true;
            }
            this._registerCommand(t);
            t.parent = this;
            t._checkForBrokenPassThrough();
            return this;
        }
        createArgument(t, e) {
            return new Argument(t, e);
        }
        argument(t, e, i, n) {
            let s = this.createArgument(t, e);
            if (typeof i === "function") {
                s.default(n).argParser(i);
            } else {
                s.default(i);
            }
            this.addArgument(s);
            return this;
        }
        arguments(t) {
            t.trim().split(/ +/).forEach((e)=>{
                this.argument(e);
            });
            return this;
        }
        addArgument(t) {
            let e = this.registeredArguments.slice(-1)[0];
            if (e && e.variadic) {
                throw Error(`only the last argument can be variadic '${e.name()}'`);
            }
            if (t.required && t.defaultValue !== undefined && t.parseArg === undefined) {
                throw Error(`a default value for a required argument is never used: '${t.name()}'`);
            }
            this.registeredArguments.push(t);
            return this;
        }
        helpCommand(t, e) {
            if (typeof t === "boolean") {
                this._addImplicitHelpCommand = t;
                return this;
            }
            t = t ?? "help [command]";
            let [, i, n] = t.match(/([^ ]+) *(.*)/);
            let s = e ?? "display help for command";
            let r = this.createCommand(i);
            r.helpOption(false);
            if (n) {
                r.arguments(n);
            }
            if (s) {
                r.description(s);
            }
            this._addImplicitHelpCommand = true;
            this._helpCommand = r;
            return this;
        }
        addHelpCommand(t, e) {
            if (typeof t !== "object") {
                this.helpCommand(t, e);
                return this;
            }
            this._addImplicitHelpCommand = true;
            this._helpCommand = t;
            return this;
        }
        _getHelpCommand() {
            if (this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"))) {
                if (this._helpCommand === undefined) {
                    this.helpCommand(undefined, undefined);
                }
                return this._helpCommand;
            }
            return null;
        }
        hook(t, e) {
            let i = [
                "preSubcommand",
                "preAction",
                "postAction"
            ];
            if (!i.includes(t)) {
                throw Error(`Unexpected value for event passed to hook : '${t}'.
Expecting one of '${i.join("', '")}'`);
            }
            if (this._lifeCycleHooks[t]) {
                this._lifeCycleHooks[t].push(e);
            } else {
                this._lifeCycleHooks[t] = [
                    e
                ];
            }
            return this;
        }
        exitOverride(t) {
            if (t) {
                this._exitCallback = t;
            } else {
                this._exitCallback = (e)=>{
                    if (e.code !== "commander.executeSubCommandAsync") {
                        throw e;
                    }
                };
            }
            return this;
        }
        _exit(t, e, i) {
            if (this._exitCallback) {
                this._exitCallback(new CommanderError(t, e, i));
            }
            l.exit(t);
        }
        action(t) {
            let e = (i)=>{
                let length = this.registeredArguments.length;
                let s = i.slice(0, length);
                if (this._storeOptionsAsProperties) {
                    s[length] = this;
                } else {
                    s[length] = this.opts();
                }
                s.push(this);
                return t.apply(this, s);
            };
            this._actionHandler = e;
            return this;
        }
        createOption(t, e) {
            return new Option(t, e);
        }
        _callParseArg(t, e, i, n) {
            try {
                return t.parseArg(e, i);
            } catch (error) {
                if (error.code === "commander.invalidArgument") {
                    let r = `${n} ${error.message}`;
                    this.error(r, {
                        exitCode: error.exitCode,
                        code: error.code
                    });
                }
                throw error;
            }
        }
        _registerOption(t) {
            let e = t.short && this._findOption(t.short) || t.long && this._findOption(t.long);
            if (e) {
                let i = t.long && this._findOption(t.long) ? t.long : t.short;
                throw Error(`Cannot add option '${t.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${i}'
-  already used by option '${e.flags}'`);
            }
            this.options.push(t);
        }
        _registerCommand(t) {
            let e = (n)=>[
                    n.name()
                ].concat(n.aliases());
            let i = e(t).find((n)=>this._findCommand(n));
            if (i) {
                let n = e(this._findCommand(i)).join("|");
                let s = e(t).join("|");
                throw Error(`cannot add command '${s}' as already have command '${n}'`);
            }
            this.commands.push(t);
        }
        addOption(t) {
            this._registerOption(t);
            let e = t.name();
            let i = t.attributeName();
            if (t.negate) {
                let s = t.long.replace(/^--no-/, "--");
                if (!this._findOption(s)) {
                    this.setOptionValueWithSource(i, t.defaultValue === undefined ? true : t.defaultValue, "default");
                }
            } else if (t.defaultValue !== undefined) {
                this.setOptionValueWithSource(i, t.defaultValue, "default");
            }
            let n = (s, r, a)=>{
                if (s == null && t.presetArg !== undefined) {
                    s = t.presetArg;
                }
                let o = this.getOptionValue(i);
                if (s !== null && t.parseArg) {
                    s = this._callParseArg(t, s, o, r);
                } else if (s !== null && t.variadic) {
                    s = t._concatValue(s, o);
                }
                if (s == null) {
                    if (t.negate) {
                        s = false;
                    } else if (t.isBoolean() || t.optional) {
                        s = true;
                    } else {
                        s = "";
                    }
                }
                this.setOptionValueWithSource(i, s, a);
            };
            this.on(`option:${e}`, (s)=>{
                let r = `error: option '${t.flags}' argument '${s}' is invalid.`;
                n(s, r, "cli");
            });
            if (t.envVar) {
                this.on(`optionEnv:${e}`, (s)=>{
                    let r = `error: option '${t.flags}' value '${s}' from env '${t.envVar}' is invalid.`;
                    n(s, r, "env");
                });
            }
            return this;
        }
        _optionEx(t, e, i, n, s) {
            if (typeof e === "object" && e instanceof Option) {
                throw Error("To add an Option object use addOption() instead of option() or requiredOption()");
            }
            let r = this.createOption(e, i);
            r.makeOptionMandatory(!!t.mandatory);
            if (typeof n === "function") {
                r.default(s).argParser(n);
            } else if (n instanceof RegExp) {
                let a = n;
                n = (o, h)=>{
                    let u = a.exec(o);
                    if (u) {
                        return u[0];
                    }
                    return h;
                };
                r.default(s).argParser(n);
            } else {
                r.default(n);
            }
            return this.addOption(r);
        }
        option(t, e, i, n) {
            return this._optionEx({}, t, e, i, n);
        }
        requiredOption(t, e, i, n) {
            return this._optionEx({
                mandatory: true
            }, t, e, i, n);
        }
        combineFlagAndOptionalValue(t = true) {
            this._combineFlagAndOptionalValue = !!t;
            return this;
        }
        allowUnknownOption(t = true) {
            this._allowUnknownOption = !!t;
            return this;
        }
        allowExcessArguments(t = true) {
            this._allowExcessArguments = !!t;
            return this;
        }
        enablePositionalOptions(t = true) {
            this._enablePositionalOptions = !!t;
            return this;
        }
        passThroughOptions(t = true) {
            this._passThroughOptions = !!t;
            this._checkForBrokenPassThrough();
            return this;
        }
        _checkForBrokenPassThrough() {
            if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) {
                throw Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`);
            }
        }
        storeOptionsAsProperties(t = true) {
            if (this.options.length) {
                throw Error("call .storeOptionsAsProperties() before adding options");
            }
            if (Object.keys(this._optionValues).length) {
                throw Error("call .storeOptionsAsProperties() before setting option values");
            }
            this._storeOptionsAsProperties = !!t;
            return this;
        }
        getOptionValue(t) {
            if (this._storeOptionsAsProperties) {
                return this[t];
            }
            return this._optionValues[t];
        }
        setOptionValue(t, e) {
            return this.setOptionValueWithSource(t, e, undefined);
        }
        setOptionValueWithSource(t, e, i) {
            if (this._storeOptionsAsProperties) {
                this[t] = e;
            } else {
                this._optionValues[t] = e;
            }
            this._optionValueSources[t] = i;
            return this;
        }
        getOptionValueSource(t) {
            return this._optionValueSources[t];
        }
        getOptionValueSourceWithGlobals(t) {
            let e;
            this._getCommandAndAncestors().forEach((i)=>{
                if (i.getOptionValueSource(t) !== undefined) {
                    e = i.getOptionValueSource(t);
                }
            });
            return e;
        }
        _prepareUserArgs(t, e) {
            if (t !== undefined && !Array.isArray(t)) {
                throw Error("first parameter to parse must be array or undefined");
            }
            e = e || {};
            if (t === undefined && e.from === undefined) {
                if (l.versions?.electron) {
                    e.from = "electron";
                }
                let n = l.execArgv ?? [];
                if (n.includes("-e") || n.includes("--eval") || n.includes("-p") || n.includes("--print")) {
                    e.from = "eval";
                }
            }
            if (t === undefined) {
                t = l.argv;
            }
            this.rawArgs = t.slice();
            let i;
            switch(e.from){
                case undefined:
                case "node":
                    this._scriptPath = t[1];
                    i = t.slice(2);
                    break;
                case "electron":
                    if (l.defaultApp) {
                        this._scriptPath = t[1];
                        i = t.slice(2);
                    } else {
                        i = t.slice(1);
                    }
                    break;
                case "user":
                    i = t.slice(0);
                    break;
                case "eval":
                    i = t.slice(1);
                    break;
                default:
                    throw Error(`unexpected parse option { from: '${e.from}' }`);
            }
            if (!this._name && this._scriptPath) {
                this.nameFromFilename(this._scriptPath);
            }
            this._name = this._name || "program";
            return i;
        }
        parse(t, e) {
            let i = this._prepareUserArgs(t, e);
            this._parseCommand([], i);
            return this;
        }
        async parseAsync(t, e) {
            let i = this._prepareUserArgs(t, e);
            await this._parseCommand([], i);
            return this;
        }
        _executeSubCommand(t, e) {
            e = e.slice();
            let i = false;
            let n = [
                ".js",
                ".ts",
                ".tsx",
                ".mjs",
                ".cjs"
            ];
            function s(u, c) {
                let d = f.resolve(u, c);
                if (b.existsSync(d)) {
                    return d;
                }
                if (n.includes(f.extname(c))) {
                    return;
                }
                let _ = n.find((p)=>b.existsSync(`${d}${p}`));
                if (_) {
                    return `${d}${_}`;
                }
            }
            this._checkForMissingMandatoryOptions();
            this._checkForConflictingOptions();
            let r = t._executableFile || `${this._name}-${t._name}`;
            let a = this._executableDir || "";
            if (this._scriptPath) {
                let u;
                try {
                    u = b.realpathSync(this._scriptPath);
                } catch (c) {
                    u = this._scriptPath;
                }
                a = f.resolve(f.dirname(u), a);
            }
            if (a) {
                let u = s(a, r);
                if (!u && !t._executableFile && this._scriptPath) {
                    let c = f.basename(this._scriptPath, f.extname(this._scriptPath));
                    if (c !== this._name) {
                        u = s(a, `${c}-${t._name}`);
                    }
                }
                r = u || r;
            }
            i = n.includes(f.extname(r));
            let o;
            if (l.platform !== "win32") {
                if (i) {
                    e.unshift(r);
                    e = G(l.execArgv).concat(e);
                    o = A.spawn(l.argv[0], e, {
                        stdio: "inherit"
                    });
                } else {
                    o = A.spawn(r, e, {
                        stdio: "inherit"
                    });
                }
            } else {
                e.unshift(r);
                e = G(l.execArgv).concat(e);
                o = A.spawn(l.execPath, e, {
                    stdio: "inherit"
                });
            }
            if (!o.killed) {
                [
                    "SIGUSR1",
                    "SIGUSR2",
                    "SIGTERM",
                    "SIGINT",
                    "SIGHUP"
                ].forEach((c)=>{
                    l.on(c, ()=>{
                        if (o.killed === false && o.exitCode === null) {
                            o.kill(c);
                        }
                    });
                });
            }
            let _exitCallback = this._exitCallback;
            o.on("close", (u)=>{
                u = u ?? 1;
                if (!_exitCallback) {
                    l.exit(u);
                } else {
                    _exitCallback(new CommanderError(u, "commander.executeSubCommandAsync", "(close)"));
                }
            });
            o.on("error", (u)=>{
                if (u.code === "ENOENT") {
                    let c = a ? `searched for local subcommand relative to directory '${a}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
                    let d = `'${r}' does not exist
 - if '${t._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${c}`;
                    throw Error(d);
                } else if (u.code === "EACCES") {
                    throw Error(`'${r}' not executable`);
                }
                if (!_exitCallback) {
                    l.exit(1);
                } else {
                    let c = new CommanderError(1, "commander.executeSubCommandAsync", "(error)");
                    c.nestedError = u;
                    _exitCallback(c);
                }
            });
            this.runningCommand = o;
        }
        _dispatchSubcommand(t, e, i) {
            let n = this._findCommand(t);
            if (!n) {
                this.help({
                    error: true
                });
            }
            let s;
            s = this._chainOrCallSubCommandHook(s, n, "preSubcommand");
            s = this._chainOrCall(s, ()=>{
                if (n._executableHandler) {
                    this._executeSubCommand(n, e.concat(i));
                } else {
                    return n._parseCommand(e, i);
                }
            });
            return s;
        }
        _dispatchHelpCommand(t) {
            if (!t) {
                this.help();
            }
            let e = this._findCommand(t);
            if (e && !e._executableHandler) {
                e.help();
            }
            return this._dispatchSubcommand(t, [], [
                this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"
            ]);
        }
        _checkNumberOfArguments() {
            this.registeredArguments.forEach((t, e)=>{
                if (t.required && this.args[e] == null) {
                    this.missingArgument(t.name());
                }
            });
            if (this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) {
                return;
            }
            if (this.args.length > this.registeredArguments.length) {
                this._excessArguments(this.args);
            }
        }
        _processArguments() {
            let t = (i, n, s)=>{
                let r = n;
                if (n !== null && i.parseArg) {
                    let a = `error: command-argument value '${n}' is invalid for argument '${i.name()}'.`;
                    r = this._callParseArg(i, n, s, a);
                }
                return r;
            };
            this._checkNumberOfArguments();
            let e = [];
            this.registeredArguments.forEach((i, n)=>{
                let i_defaultValue = i.defaultValue;
                if (i.variadic) {
                    if (n < this.args.length) {
                        i_defaultValue = this.args.slice(n);
                        if (i.parseArg) {
                            i_defaultValue = i_defaultValue.reduce((acc, item)=>t(i, item, acc), i.defaultValue);
                        }
                    } else if (i_defaultValue === undefined) {
                        i_defaultValue = [];
                    }
                } else if (n < this.args.length) {
                    i_defaultValue = this.args[n];
                    if (i.parseArg) {
                        i_defaultValue = t(i, i_defaultValue, i.defaultValue);
                    }
                }
                e[n] = i_defaultValue;
            });
            this.processedArgs = e;
        }
        _chainOrCall(t, e) {
            if (t && t.then && typeof t.then === "function") {
                return t.then(()=>e());
            }
            return e();
        }
        _chainOrCallHooks(t, e) {
            let i = t;
            let n = [];
            this._getCommandAndAncestors().reverse().filter((s)=>s._lifeCycleHooks[e] !== undefined).forEach((hookedCommand)=>{
                hookedCommand._lifeCycleHooks[e].forEach((callback)=>{
                    n.push({
                        hookedCommand,
                        callback
                    });
                });
            });
            if (e === "postAction") {
                n.reverse();
            }
            n.forEach((s)=>{
                i = this._chainOrCall(i, ()=>s.callback(s.hookedCommand, this));
            });
            return i;
        }
        _chainOrCallSubCommandHook(t, e, i) {
            let n = t;
            if (this._lifeCycleHooks[i] !== undefined) {
                this._lifeCycleHooks[i].forEach((s)=>{
                    n = this._chainOrCall(n, ()=>s(this, e));
                });
            }
            return n;
        }
        _parseCommand(t, e) {
            let i = this.parseOptions(e);
            this._parseOptionsEnv();
            this._parseOptionsImplied();
            t = t.concat(i.operands);
            e = i.unknown;
            this.args = t.concat(e);
            if (t && this._findCommand(t[0])) {
                return this._dispatchSubcommand(t[0], t.slice(1), e);
            }
            if (this._getHelpCommand() && t[0] === this._getHelpCommand().name()) {
                return this._dispatchHelpCommand(t[1]);
            }
            if (this._defaultCommandName) {
                this._outputHelpIfRequested(e);
                return this._dispatchSubcommand(this._defaultCommandName, t, e);
            }
            if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
                this.help({
                    error: true
                });
            }
            this._outputHelpIfRequested(i.unknown);
            this._checkForMissingMandatoryOptions();
            this._checkForConflictingOptions();
            let n = ()=>{
                if (i.unknown.length > 0) {
                    this.unknownOption(i.unknown[0]);
                }
            };
            let s = `command:${this.name()}`;
            if (this._actionHandler) {
                n();
                this._processArguments();
                let r;
                r = this._chainOrCallHooks(r, "preAction");
                r = this._chainOrCall(r, ()=>this._actionHandler(this.processedArgs));
                if (this.parent) {
                    r = this._chainOrCall(r, ()=>{
                        this.parent.emit(s, t, e);
                    });
                }
                r = this._chainOrCallHooks(r, "postAction");
                return r;
            }
            if (this.parent && this.parent.listenerCount(s)) {
                n();
                this._processArguments();
                this.parent.emit(s, t, e);
            } else if (t.length) {
                if (this._findCommand("*")) {
                    return this._dispatchSubcommand("*", t, e);
                }
                if (this.listenerCount("command:*")) {
                    this.emit("command:*", t, e);
                } else if (this.commands.length) {
                    this.unknownCommand();
                } else {
                    n();
                    this._processArguments();
                }
            } else if (this.commands.length) {
                n();
                this.help({
                    error: true
                });
            } else {
                n();
                this._processArguments();
            }
        }
        _findCommand(t) {
            if (!t) {
                return;
            }
            return this.commands.find((e)=>e._name === t || e._aliases.includes(t));
        }
        _findOption(t) {
            return this.options.find((e)=>e.is(t));
        }
        _checkForMissingMandatoryOptions() {
            this._getCommandAndAncestors().forEach((t)=>{
                t.options.forEach((e)=>{
                    if (e.mandatory && t.getOptionValue(e.attributeName()) === undefined) {
                        t.missingMandatoryOptionValue(e);
                    }
                });
            });
        }
        _checkForConflictingLocalOptions() {
            let t = this.options.filter((i)=>{
                let n = i.attributeName();
                if (this.getOptionValue(n) === undefined) {
                    return false;
                }
                return this.getOptionValueSource(n) !== "default";
            });
            t.filter((i)=>i.conflictsWith.length > 0).forEach((i)=>{
                let n = t.find((s)=>i.conflictsWith.includes(s.attributeName()));
                if (n) {
                    this._conflictingOption(i, n);
                }
            });
        }
        _checkForConflictingOptions() {
            this._getCommandAndAncestors().forEach((t)=>{
                t._checkForConflictingLocalOptions();
            });
        }
        parseOptions(t) {
            let operands = [];
            let unknown = [];
            let n = operands;
            let s = t.slice();
            function r(o) {
                return o.length > 1 && o[0] === "-";
            }
            let a = null;
            while(s.length){
                let o = s.shift();
                if (o === "--") {
                    if (n === unknown) {
                        n.push(o);
                    }
                    n.push(...s);
                    break;
                }
                if (a && !r(o)) {
                    this.emit(`option:${a.name()}`, o);
                    continue;
                }
                a = null;
                if (r(o)) {
                    let h = this._findOption(o);
                    if (h) {
                        if (h.required) {
                            let u = s.shift();
                            if (u === undefined) {
                                this.optionMissingArgument(h);
                            }
                            this.emit(`option:${h.name()}`, u);
                        } else if (h.optional) {
                            let u = null;
                            if (s.length > 0 && !r(s[0])) {
                                u = s.shift();
                            }
                            this.emit(`option:${h.name()}`, u);
                        } else {
                            this.emit(`option:${h.name()}`);
                        }
                        a = h.variadic ? h : null;
                        continue;
                    }
                }
                if (o.length > 2 && o[0] === "-" && o[1] !== "-") {
                    let h = this._findOption(`-${o[1]}`);
                    if (h) {
                        if (h.required || h.optional && this._combineFlagAndOptionalValue) {
                            this.emit(`option:${h.name()}`, o.slice(2));
                        } else {
                            this.emit(`option:${h.name()}`);
                            s.unshift(`-${o.slice(2)}`);
                        }
                        continue;
                    }
                }
                if (/^--[^=]+=/.test(o)) {
                    let h = o.indexOf("=");
                    let u = this._findOption(o.slice(0, h));
                    if (u && (u.required || u.optional)) {
                        this.emit(`option:${u.name()}`, o.slice(h + 1));
                        continue;
                    }
                }
                if (r(o)) {
                    n = unknown;
                }
                if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
                    if (this._findCommand(o)) {
                        operands.push(o);
                        if (s.length > 0) {
                            unknown.push(...s);
                        }
                        break;
                    } else if (this._getHelpCommand() && o === this._getHelpCommand().name()) {
                        operands.push(o);
                        if (s.length > 0) {
                            operands.push(...s);
                        }
                        break;
                    } else if (this._defaultCommandName) {
                        unknown.push(o);
                        if (s.length > 0) {
                            unknown.push(...s);
                        }
                        break;
                    }
                }
                if (this._passThroughOptions) {
                    n.push(o);
                    if (s.length > 0) {
                        n.push(...s);
                    }
                    break;
                }
                n.push(o);
            }
            return {
                operands,
                unknown
            };
        }
        opts() {
            if (this._storeOptionsAsProperties) {
                let t = {};
                let e = this.options.length;
                for(let i = 0; i < e; i++){
                    let n = this.options[i].attributeName();
                    t[n] = n === this._versionOptionName ? this._version : this[n];
                }
                return t;
            }
            return this._optionValues;
        }
        optsWithGlobals() {
            return this._getCommandAndAncestors().reduce((acc, item)=>Object.assign(acc, item.opts()), {});
        }
        error(t, e) {
            this._outputConfiguration.outputError(`${t}
`, this._outputConfiguration.writeErr);
            if (typeof this._showHelpAfterError === "string") {
                this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
            } else if (this._showHelpAfterError) {
                this._outputConfiguration.writeErr(`
`);
                this.outputHelp({
                    error: true
                });
            }
            let i = e || {};
            let n = i.exitCode || 1;
            let s = i.code || "commander.error";
            this._exit(n, s, t);
        }
        _parseOptionsEnv() {
            this.options.forEach((t)=>{
                if (t.envVar && t.envVar in l.env) {
                    let e = t.attributeName();
                    if (this.getOptionValue(e) === undefined || [
                        "default",
                        "config",
                        "env"
                    ].includes(this.getOptionValueSource(e))) {
                        if (t.required || t.optional) {
                            this.emit(`optionEnv:${t.name()}`, l.env[t.envVar]);
                        } else {
                            this.emit(`optionEnv:${t.name()}`);
                        }
                    }
                }
            });
        }
        _parseOptionsImplied() {
            let t = new DualOptions(this.options);
            let e = (i)=>this.getOptionValue(i) !== undefined && ![
                    "default",
                    "implied"
                ].includes(this.getOptionValueSource(i));
            this.options.filter((i)=>i.implied !== undefined && e(i.attributeName()) && t.valueFromOption(this.getOptionValue(i.attributeName()), i)).forEach((i)=>{
                Object.keys(i.implied).filter((n)=>!e(n)).forEach((n)=>{
                    this.setOptionValueWithSource(n, i.implied[n], "implied");
                });
            });
        }
        missingArgument(t) {
            let e = `error: missing required argument '${t}'`;
            this.error(e, {
                code: "commander.missingArgument"
            });
        }
        optionMissingArgument(t) {
            let e = `error: option '${t.flags}' argument missing`;
            this.error(e, {
                code: "commander.optionMissingArgument"
            });
        }
        missingMandatoryOptionValue(t) {
            let e = `error: required option '${t.flags}' not specified`;
            this.error(e, {
                code: "commander.missingMandatoryOptionValue"
            });
        }
        _conflictingOption(t, e) {
            let i = (r)=>{
                let a = r.attributeName();
                let o = this.getOptionValue(a);
                let h = this.options.find((c)=>c.negate && a === c.attributeName());
                let u = this.options.find((c)=>!c.negate && a === c.attributeName());
                if (h && (h.presetArg === undefined && o === false || h.presetArg !== undefined && o === h.presetArg)) {
                    return h;
                }
                return u || r;
            };
            let n = (r)=>{
                let a = i(r);
                let o = a.attributeName();
                if (this.getOptionValueSource(o) === "env") {
                    return `environment variable '${a.envVar}'`;
                }
                return `option '${a.flags}'`;
            };
            let s = `error: ${n(t)} cannot be used with ${n(e)}`;
            this.error(s, {
                code: "commander.conflictingOption"
            });
        }
        unknownOption(t) {
            if (this._allowUnknownOption) {
                return;
            }
            let e = "";
            if (t.startsWith("--") && this._showSuggestionAfterError) {
                let n = [];
                let s = this;
                do {
                    let r = s.createHelp().visibleOptions(s).filter((a)=>a.long).map((a)=>a.long);
                    n = n.concat(r);
                    s = s.parent;
                }while (s && !s._enablePositionalOptions)
                e = suggestSimilar(t, n);
            }
            let i = `error: unknown option '${t}'${e}`;
            this.error(i, {
                code: "commander.unknownOption"
            });
        }
        _excessArguments(t) {
            if (this._allowExcessArguments) {
                return;
            }
            let length = this.registeredArguments.length;
            let i = length === 1 ? "" : "s";
            let s = `error: too many arguments${this.parent ? ` for '${this.name()}'` : ""}. Expected ${length} argument${i} but got ${t.length}.`;
            this.error(s, {
                code: "commander.excessArguments"
            });
        }
        unknownCommand() {
            let t = this.args[0];
            let e = "";
            if (this._showSuggestionAfterError) {
                let n = [];
                this.createHelp().visibleCommands(this).forEach((s)=>{
                    n.push(s.name());
                    if (s.alias()) {
                        n.push(s.alias());
                    }
                });
                e = suggestSimilar(t, n);
            }
            let i = `error: unknown command '${t}'${e}`;
            this.error(i, {
                code: "commander.unknownCommand"
            });
        }
        version(t, e, i) {
            if (t === undefined) {
                return this._version;
            }
            this._version = t;
            e = e || "-V, --version";
            i = i || "output the version number";
            let n = this.createOption(e, i);
            this._versionOptionName = n.attributeName();
            this._registerOption(n);
            this.on(`option:${n.name()}`, ()=>{
                this._outputConfiguration.writeOut(`${t}
`);
                this._exit(0, "commander.version", t);
            });
            return this;
        }
        description(t, e) {
            if (t === undefined && e === undefined) {
                return this._description;
            }
            this._description = t;
            if (e) {
                this._argsDescription = e;
            }
            return this;
        }
        summary(t) {
            if (t === undefined) {
                return this._summary;
            }
            this._summary = t;
            return this;
        }
        alias(t) {
            if (t === undefined) {
                return this._aliases[0];
            }
            let e = this;
            if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
                e = this.commands[this.commands.length - 1];
            }
            if (t === e._name) {
                throw Error("Command alias can't be the same as its name");
            }
            let i = this.parent?._findCommand(t);
            if (i) {
                let n = [
                    i.name()
                ].concat(i.aliases()).join("|");
                throw Error(`cannot add alias '${t}' to command '${this.name()}' as already have command '${n}'`);
            }
            e._aliases.push(t);
            return this;
        }
        aliases(t) {
            if (t === undefined) {
                return this._aliases;
            }
            t.forEach((e)=>this.alias(e));
            return this;
        }
        usage(t) {
            if (t === undefined) {
                if (this._usage) {
                    return this._usage;
                }
                let e = this.registeredArguments.map((i)=>humanReadableArgName(i));
                return [].concat(this.options.length || this._helpOption !== null ? "[options]" : [], this.commands.length ? "[command]" : [], this.registeredArguments.length ? e : []).join(" ");
            }
            this._usage = t;
            return this;
        }
        name(t) {
            if (t === undefined) {
                return this._name;
            }
            this._name = t;
            return this;
        }
        nameFromFilename(t) {
            this._name = f.basename(t, f.extname(t));
            return this;
        }
        executableDir(t) {
            if (t === undefined) {
                return this._executableDir;
            }
            this._executableDir = t;
            return this;
        }
        helpInformation(t) {
            let e = this.createHelp();
            if (e.helpWidth === undefined) {
                e.helpWidth = t && t.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
            }
            return e.formatHelp(this, e);
        }
        _getHelpContext(t) {
            t = t || {};
            let e = {
                error: !!t.error
            };
            let i;
            if (e.error) {
                i = (n)=>this._outputConfiguration.writeErr(n);
            } else {
                i = (n)=>this._outputConfiguration.writeOut(n);
            }
            e.write = t.write || i;
            e.command = this;
            return e;
        }
        outputHelp(t) {
            let e;
            if (typeof t === "function") {
                e = t;
                t = undefined;
            }
            let i = this._getHelpContext(t);
            this._getCommandAndAncestors().reverse().forEach((s)=>s.emit("beforeAllHelp", i));
            this.emit("beforeHelp", i);
            let n = this.helpInformation(i);
            if (e) {
                n = e(n);
                if (typeof n !== "string" && !Buffer.isBuffer(n)) {
                    throw Error("outputHelp callback must return a string or a Buffer");
                }
            }
            i.write(n);
            if (this._getHelpOption()?.long) {
                this.emit(this._getHelpOption().long);
            }
            this.emit("afterHelp", i);
            this._getCommandAndAncestors().forEach((s)=>s.emit("afterAllHelp", i));
        }
        helpOption(t, e) {
            if (typeof t === "boolean") {
                if (t) {
                    this._helpOption = this._helpOption ?? undefined;
                } else {
                    this._helpOption = null;
                }
                return this;
            }
            t = t ?? "-h, --help";
            e = e ?? "display help for command";
            this._helpOption = this.createOption(t, e);
            return this;
        }
        _getHelpOption() {
            if (this._helpOption === undefined) {
                this.helpOption(undefined, undefined);
            }
            return this._helpOption;
        }
        addHelpOption(t) {
            this._helpOption = t;
            return this;
        }
        help(t) {
            this.outputHelp(t);
            let e = l.exitCode || 0;
            if (e === 0 && t && typeof t !== "function" && t.error) {
                e = 1;
            }
            this._exit(e, "commander.help", "(outputHelp)");
        }
        addHelpText(t, e) {
            let i = [
                "beforeAll",
                "before",
                "after",
                "afterAll"
            ];
            if (!i.includes(t)) {
                throw Error(`Unexpected value for position to addHelpText.
Expecting one of '${i.join("', '")}'`);
            }
            let n = `${t}Help`;
            this.on(n, (s)=>{
                let r;
                if (typeof e === "function") {
                    r = e({
                        error: s.error,
                        command: s.command
                    });
                } else {
                    r = e;
                }
                if (r) {
                    s.write(`${r}
`);
                }
            });
            return this;
        }
        _outputHelpIfRequested(t) {
            let e = this._getHelpOption();
            if (e && t.find((n)=>e.is(n))) {
                this.outputHelp();
                this._exit(0, "commander.helpDisplayed", "(outputHelp)");
            }
        }
    }
    function G(execArgv) {
        return execArgv.map((e)=>{
            if (!e.startsWith("--inspect")) {
                return e;
            }
            let i;
            let n = "127.0.0.1";
            let s = "9229";
            let r;
            if ((r = e.match(/^(--inspect(-brk)?)$/)) !== null) {
                i = r[1];
            } else if ((r = e.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
                i = r[1];
                if (/^\d+$/.test(r[3])) {
                    s = r[3];
                } else {
                    n = r[3];
                }
            } else if ((r = e.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
                i = r[1];
                n = r[3];
                s = r[4];
            }
            if (i && s !== "0") {
                return `${i}=${n}:${parseInt(s) + 1}`;
            }
            return e;
        });
    }
    vt.Command = I;
});
const Y = C(function(kt) {
    const { Argument } = H();
    const { Command } = B();
    const { CommanderError, InvalidArgumentError } = w();
    const { Help } = k();
    const { Option } = D();
    kt.program = new Command;
    kt.createCommand = (t)=>new Command(t);
    kt.createOption = (t, e)=>new Option(t, e);
    kt.createArgument = (t, e)=>new Argument(t, e);
    kt.Command = Command;
    kt.Option = Option;
    kt.Argument = Argument;
    kt.Help = Help;
    kt.CommanderError = CommanderError;
    kt.InvalidArgumentError = InvalidArgumentError;
    kt.InvalidOptionArgumentError = InvalidArgumentError;
});
const Q = C(function(g, X) {
    const m = Y();
    g = X.exports = {};
    g.program = new m.Command;
    g.Argument = m.Argument;
    g.Command = m.Command;
    g.CommanderError = m.CommanderError;
    g.Help = m.Help;
    g.InvalidArgumentError = m.InvalidArgumentError;
    g.InvalidOptionArgumentError = m.InvalidArgumentError;
    g.Option = m.Option;
    g.createCommand = (t)=>new m.Command(t);
    g.createOption = (t, e)=>new m.Option(t, e);
    g.createArgument = (t, e)=>new m.Argument(t, e);
});
const Z = Se(Q(), 1);
const { program, createCommand, createArgument, createOption, CommanderError, InvalidArgumentError: KBe, InvalidOptionArgumentError, Command: YBe, Argument, Option, Help: bin } = Z.default;
const E = 2;
const x = 2;
const Lt = 36;
const Rt = 30;
const tt = 4;
function N(t, e) {
    let i = Math.max(e, 1);
    let n = [];
    for (let s of t.split(`
`)){
        let r = s.match(/\s*\S+/g);
        if (!r) {
            n.push("");
            continue;
        }
        let a = "";
        let o = 0;
        let h = false;
        for (let u of r){
            let c = ae(u);
            if (!h) {
                a = u;
                o = c;
                h = true;
            } else if (o + c <= i) {
                a += u;
                o += c;
            } else {
                n.push(a);
                let d = u.replace(/^\s+/, "");
                a = d;
                o = ae(d);
            }
        }
        n.push(a);
    }
    return n.join(`
`);
}
function v(t, e, i, n) {
    let s = " ".repeat(E);
    if (!e) {
        return s + t;
    }
    let r = ae(t);
    if (e.includes(`
`)) {
        let c = r <= i ? Ei(" ", i - r + x) : " ".repeat(x);
        return (s + t + c + e).replace(/\n/g, `
` + s);
    }
    let a = n - E - i - x;
    if (r <= i && a >= Rt) {
        let c = Ei(" ", i - r + x);
        let d = " ".repeat(E + i + x);
        let _ = N(e, a);
        return s + t + c + _.replace(/\n/g, `
` + d);
    }
    let o = " ".repeat(E + tt);
    let h = n - E - tt;
    let u = N(e, h);
    return s + t + `
` + o + u.replace(/\n/g, `
` + o);
}
function y(t, e, i) {
    if (i.length === 0) {
        return;
    }
    t.push(e, ...i, "");
}
function formatHelp(t, e) {
    let i = e.helpWidth || 80;
    let n = Math.min(e.padWidth(t, e), Lt);
    let s = [
        `Usage: ${e.commandUsage(t)}`,
        ""
    ];
    let r = e.commandDescription(t);
    if (r.length > 0) {
        s.push(N(r, i), "");
    }
    y(s, "Arguments:", e.visibleArguments(t).map((a)=>v(e.argumentTerm(a), e.argumentDescription(a), n, i)));
    y(s, "Options:", e.visibleOptions(t).map((a)=>v(e.optionTerm(a), e.optionDescription(a), n, i)));
    if (e.showGlobalOptions) {
        y(s, "Global Options:", e.visibleGlobalOptions(t).map((a)=>v(e.optionTerm(a), e.optionDescription(a), n, i)));
    }
    y(s, "Commands:", e.visibleCommands(t).map((a)=>v(e.subcommandTerm(a), e.subcommandDescription(a), n, i)));
    return s.join(`
`);
}
function tee() {
    let t = (e)=>e.long?.replace(/^--/, "") ?? e.short?.replace(/^-/, "") ?? "";
    return {
        sortSubcommands: true,
        sortOptions: true,
        formatHelp,
        compareOptions: (e, i)=>t(e).localeCompare(t(i))
    };
}
export { KBe, YBe, Option as ds, bin, tee };
