const Nt = new Set([
    65534,
    65535,
    131070,
    131071,
    196606,
    196607,
    262142,
    262143,
    327678,
    327679,
    393214,
    393215,
    458750,
    458751,
    524286,
    524287,
    589822,
    589823,
    655358,
    655359,
    720894,
    720895,
    786430,
    786431,
    851966,
    851967,
    917502,
    917503,
    983038,
    983039,
    1048574,
    1048575,
    1114110,
    1114111
]);
const m = "\uFFFD";
const s = {
    EOF: -1,
    [-1]: "EOF",
    NULL: 0,
    0: "NULL",
    TABULATION: 9,
    9: "TABULATION",
    CARRIAGE_RETURN: 13,
    13: "CARRIAGE_RETURN",
    LINE_FEED: 10,
    10: "LINE_FEED",
    FORM_FEED: 12,
    12: "FORM_FEED",
    SPACE: 32,
    32: "SPACE",
    EXCLAMATION_MARK: 33,
    33: "EXCLAMATION_MARK",
    QUOTATION_MARK: 34,
    34: "QUOTATION_MARK",
    AMPERSAND: 38,
    38: "AMPERSAND",
    APOSTROPHE: 39,
    39: "APOSTROPHE",
    HYPHEN_MINUS: 45,
    45: "HYPHEN_MINUS",
    SOLIDUS: 47,
    47: "SOLIDUS",
    DIGIT_0: 48,
    48: "DIGIT_0",
    DIGIT_9: 57,
    57: "DIGIT_9",
    SEMICOLON: 59,
    59: "SEMICOLON",
    LESS_THAN_SIGN: 60,
    60: "LESS_THAN_SIGN",
    EQUALS_SIGN: 61,
    61: "EQUALS_SIGN",
    GREATER_THAN_SIGN: 62,
    62: "GREATER_THAN_SIGN",
    QUESTION_MARK: 63,
    63: "QUESTION_MARK",
    LATIN_CAPITAL_A: 65,
    65: "LATIN_CAPITAL_A",
    LATIN_CAPITAL_Z: 90,
    90: "LATIN_CAPITAL_Z",
    RIGHT_SQUARE_BRACKET: 93,
    93: "RIGHT_SQUARE_BRACKET",
    GRAVE_ACCENT: 96,
    96: "GRAVE_ACCENT",
    LATIN_SMALL_A: 97,
    97: "LATIN_SMALL_A",
    LATIN_SMALL_Z: 122,
    122: "LATIN_SMALL_Z"
};
const C = {
    DASH_DASH: "--",
    CDATA_START: "[CDATA[",
    DOCTYPE: "doctype",
    SCRIPT: "script",
    PUBLIC: "public",
    SYSTEM: "system"
};
function K(e) {
    return e >= 55296 && e <= 57343;
}
function pe(e) {
    return e >= 56320 && e <= 57343;
}
function Se(e, t) {
    return (e - 55296) * 1024 + 9216 + t;
}
function V(e) {
    return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function z(e) {
    return e >= 64976 && e <= 65007 || Nt.has(e);
}
const o = {
    controlCharacterInInputStream: "control-character-in-input-stream",
    noncharacterInInputStream: "noncharacter-in-input-stream",
    surrogateInInputStream: "surrogate-in-input-stream",
    nonVoidHtmlElementStartTagWithTrailingSolidus: "non-void-html-element-start-tag-with-trailing-solidus",
    endTagWithAttributes: "end-tag-with-attributes",
    endTagWithTrailingSolidus: "end-tag-with-trailing-solidus",
    unexpectedSolidusInTag: "unexpected-solidus-in-tag",
    unexpectedNullCharacter: "unexpected-null-character",
    unexpectedQuestionMarkInsteadOfTagName: "unexpected-question-mark-instead-of-tag-name",
    invalidFirstCharacterOfTagName: "invalid-first-character-of-tag-name",
    unexpectedEqualsSignBeforeAttributeName: "unexpected-equals-sign-before-attribute-name",
    missingEndTagName: "missing-end-tag-name",
    unexpectedCharacterInAttributeName: "unexpected-character-in-attribute-name",
    unknownNamedCharacterReference: "unknown-named-character-reference",
    missingSemicolonAfterCharacterReference: "missing-semicolon-after-character-reference",
    unexpectedCharacterAfterDoctypeSystemIdentifier: "unexpected-character-after-doctype-system-identifier",
    unexpectedCharacterInUnquotedAttributeValue: "unexpected-character-in-unquoted-attribute-value",
    eofBeforeTagName: "eof-before-tag-name",
    eofInTag: "eof-in-tag",
    missingAttributeValue: "missing-attribute-value",
    missingWhitespaceBetweenAttributes: "missing-whitespace-between-attributes",
    missingWhitespaceAfterDoctypePublicKeyword: "missing-whitespace-after-doctype-public-keyword",
    missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: "missing-whitespace-between-doctype-public-and-system-identifiers",
    missingWhitespaceAfterDoctypeSystemKeyword: "missing-whitespace-after-doctype-system-keyword",
    missingQuoteBeforeDoctypePublicIdentifier: "missing-quote-before-doctype-public-identifier",
    missingQuoteBeforeDoctypeSystemIdentifier: "missing-quote-before-doctype-system-identifier",
    missingDoctypePublicIdentifier: "missing-doctype-public-identifier",
    missingDoctypeSystemIdentifier: "missing-doctype-system-identifier",
    abruptDoctypePublicIdentifier: "abrupt-doctype-public-identifier",
    abruptDoctypeSystemIdentifier: "abrupt-doctype-system-identifier",
    cdataInHtmlContent: "cdata-in-html-content",
    incorrectlyOpenedComment: "incorrectly-opened-comment",
    eofInScriptHtmlCommentLikeText: "eof-in-script-html-comment-like-text",
    eofInDoctype: "eof-in-doctype",
    nestedComment: "nested-comment",
    abruptClosingOfEmptyComment: "abrupt-closing-of-empty-comment",
    eofInComment: "eof-in-comment",
    incorrectlyClosedComment: "incorrectly-closed-comment",
    eofInCdata: "eof-in-cdata",
    absenceOfDigitsInNumericCharacterReference: "absence-of-digits-in-numeric-character-reference",
    nullCharacterReference: "null-character-reference",
    surrogateCharacterReference: "surrogate-character-reference",
    characterReferenceOutsideUnicodeRange: "character-reference-outside-unicode-range",
    controlCharacterReference: "control-character-reference",
    noncharacterCharacterReference: "noncharacter-character-reference",
    missingWhitespaceBeforeDoctypeName: "missing-whitespace-before-doctype-name",
    missingDoctypeName: "missing-doctype-name",
    invalidCharacterSequenceAfterDoctypeName: "invalid-character-sequence-after-doctype-name",
    duplicateAttribute: "duplicate-attribute",
    nonConformingDoctype: "non-conforming-doctype",
    missingDoctype: "missing-doctype",
    misplacedDoctype: "misplaced-doctype",
    endTagWithoutMatchingOpenElement: "end-tag-without-matching-open-element",
    closingOfElementWithOpenChildElements: "closing-of-element-with-open-child-elements",
    disallowedContentInNoscriptInHead: "disallowed-content-in-noscript-in-head",
    openElementsLeftAfterEof: "open-elements-left-after-eof",
    abandonedHeadElementChild: "abandoned-head-element-child",
    misplacedStartTagForHeadElement: "misplaced-start-tag-for-head-element",
    nestedNoscriptInHead: "nested-noscript-in-head",
    eofInElementThatCanContainOnlyText: "eof-in-element-that-can-contain-only-text"
};
const Ct = 65536;
class de {
    constructor(e){
        this.handler = e;
        this.html = "";
        this.pos = -1;
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = Ct;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        this.lastErrOffset = -1;
    }
    get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
    }
    get offset() {
        return this.droppedBufferSize + this.pos;
    }
    getError(e, t) {
        let { line, col, offset } = this;
        let h = col + t;
        let l = offset + t;
        return {
            code: e,
            startLine: line,
            endLine: line,
            startCol: h,
            endCol: h,
            startOffset: l,
            endOffset: l
        };
    }
    _err(e) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
            this.lastErrOffset = this.offset;
            this.handler.onParseError(this.getError(e, 0));
        }
    }
    _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
    }
    _processSurrogate(e) {
        if (this.pos !== this.html.length - 1) {
            let t = this.html.charCodeAt(this.pos + 1);
            if (pe(t)) {
                this.pos++;
                this._addGap();
                return Se(e, t);
            }
        } else if (!this.lastChunkWritten) {
            this.endOfChunkHit = true;
            return s.EOF;
        }
        this._err(o.surrogateInInputStream);
        return e;
    }
    willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
        if (this.willDropParsedChunk()) {
            this.html = this.html.substring(this.pos);
            this.lineStartPos -= this.pos;
            this.droppedBufferSize += this.pos;
            this.pos = 0;
            this.lastGapPos = -2;
            this.gapStack.length = 0;
        }
    }
    write(e, t) {
        if (this.html.length > 0) {
            this.html += e;
        } else {
            this.html = e;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = t;
    }
    insertHtmlAtCurrentPos(e) {
        this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
    }
    startsWith(e, t) {
        if (this.pos + e.length > this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return false;
        }
        if (t) {
            return this.html.startsWith(e, this.pos);
        }
        for(let a = 0; a < e.length; a++){
            if ((this.html.charCodeAt(this.pos + a) | 32) !== e.charCodeAt(a)) {
                return false;
            }
        }
        return true;
    }
    peek(e) {
        let t = this.pos + e;
        if (t >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return s.EOF;
        }
        let a = this.html.charCodeAt(t);
        if (a === s.CARRIAGE_RETURN) {
            return s.LINE_FEED;
        }
        return a;
    }
    advance() {
        this.pos++;
        if (this.isEol) {
            this.isEol = false;
            this.line++;
            this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return s.EOF;
        }
        let e = this.html.charCodeAt(this.pos);
        if (e === s.CARRIAGE_RETURN) {
            this.isEol = true;
            this.skipNextNewLine = true;
            return s.LINE_FEED;
        }
        if (e === s.LINE_FEED) {
            this.isEol = true;
            if (this.skipNextNewLine) {
                this.line--;
                this.skipNextNewLine = false;
                this._addGap();
                return this.advance();
            }
        }
        this.skipNextNewLine = false;
        if (K(e)) {
            e = this._processSurrogate(e);
        }
        if (!(this.handler.onParseError === null || e > 31 && e < 127 || e === s.LINE_FEED || e === s.CARRIAGE_RETURN || e > 159 && e < 64976)) {
            this._checkForProblematicCharacters(e);
        }
        return e;
    }
    _checkForProblematicCharacters(e) {
        if (V(e)) {
            this._err(o.controlCharacterInInputStream);
        } else if (z(e)) {
            this._err(o.noncharacterInInputStream);
        }
    }
    retreat(e) {
        this.pos -= e;
        while(this.pos < this.lastGapPos){
            this.lastGapPos = this.gapStack.pop();
            this.pos--;
        }
        this.isEol = false;
    }
}
const f = {
    CHARACTER: 0,
    0: "CHARACTER",
    NULL_CHARACTER: 1,
    1: "NULL_CHARACTER",
    WHITESPACE_CHARACTER: 2,
    2: "WHITESPACE_CHARACTER",
    START_TAG: 3,
    3: "START_TAG",
    END_TAG: 4,
    4: "END_TAG",
    COMMENT: 5,
    5: "COMMENT",
    DOCTYPE: 6,
    6: "DOCTYPE",
    EOF: 7,
    7: "EOF",
    HIBERNATION: 8,
    8: "HIBERNATION"
};
function j(e, t) {
    for(let a = e.attrs.length - 1; a >= 0; a--){
        if (e.attrs[a].name === t) {
            return e.attrs[a].value;
        }
    }
    return null;
}
const J = new Uint16Array("ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\x00\x00\x00\x00\x00\x00ᕫᛍᦍᰒᷝ὾\u2060↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp\x9D¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\x00\x00\x00͔͂\x00Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\x00\x00ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\x00\x00ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\x00ц\x00ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\x00ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\x00\x00ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\x00\x00֣mallSquare;旼erySmallSquare;斪Ͱֺ\x00ֿ\x00\x00ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\x00ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\x00ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\x00ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\x00ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\x00ࣃbleBracket;柦nǔࣈ\x00࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\x00စbleBracket;柧nǔည\x00နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\x00\x00ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\x00ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀\u205F\u200ASpace;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\x00ጬጱ\x00\x00\x00\x00\x00ጸጽ፷ᎅ\x00᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\x00጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\x00ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\x00ᖰᖶᖿ\x00\x00\x00\x00ᗆᗛᗫᙟ᙭\x00ᚕ᚛ᚲᚹ\x00ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\x00\x00ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\x00\x00ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\x00ᠳƲᠯ\x00ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\x00᧨ᨑᨕᨲ\x00ᨷᩐ\x00\x00᪴\x00\x00᫁\x00\x00ᬡᬮ᭍᭒\x00᯽\x00ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩\uFE00Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\x00᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\x00\x00᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\x00ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\x00\x00᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁î\u1160eĀmx᫱᫶ent»᫩eóɍǧ᫾\x00ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\x00\x00᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪\uFE00Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\x00\x00ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\x00\x00ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\x00\x00ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\x00\x00ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\x00ᾞ\x00ᾡᾧ\x00\x00ῆῌ\x00ΐ\x00ῦῪ\u2000\x00\u2008⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\x00\x00᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\x00ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao\u200C⁕Ācs‑⁒α‚‰‸⁅⁈\x00⁐β•‥‧\u202A\u202C\x00\u202E耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\x00‶;慔;慖ʴ‾⁁\x00\x00⁃耻¾䂾;慗;慜5;慘ƶ⁌\x00⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛\uFE00s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\x00↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩\uFE00Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\x00⊪\x00⊸⋅⋎\x00⋕⋳\x00\x00⋸⌢⍧⍢⍿\x00⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\x00⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\x00⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\x00⒪\x00⒱\x00\x00\x00\x00\x00⒵Ⓔ\x00ⓆⓈⓍ\x00⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭\uFE00ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚\uFE00s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨\uFE00Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\x00⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\x00⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\x00\x00⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ⴭ\x00ⴸⵈⵠⵥ⵲ⶄᬇ\x00\x00ⶍⶫ\x00ⷈⷎ\x00ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\x00\x00⵼\x00ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\x00⹽\x00⺀⺝\x00⺢⺹\x00\x00⻋ຜ\x00⼓\x00\x00⼫⾼\x00⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\x00\x00⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\x00㍺㎤\x00\x00㏬㏰\x00㐨㑈㑚㒭㒱㓊㓱\x00㘖\x00\x00㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\x00㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\x00\x00㎜iäᑤaraì⹯耻\xAD䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬\uFE00ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓\uFE00pĀ;sᆴ㑵;쀀⊔\uFE00uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\x00㙾㛂\x00\x00\x00\x00\x00㛛㜃\x00㜉㝬\x00\x00\x00㞇ɲ㙖\x00\x00㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\x00㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\x00㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\x00\x00㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\x00\x00㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊\uFE00;쀀⫋\uFE00setneqĀ;q㦏㦒쀀⊋\uFE00;쀀⫌\uFE00Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\x00㪋\x00㪐㪛\x00\x00㪝㪨㪫㪯\x00\x00㫃㫎\x00㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((e)=>e.charCodeAt(0)));
const Le = new Uint16Array("Ȁaglq\t\x15\x18\x1Bɭ\x0F\x00\x00\x12p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e)=>e.charCodeAt(0)));
const pt = new Map([
    [
        0,
        65533
    ],
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]);
const Re = String.fromCodePoint ?? ((e)=>{
    let t = "";
    if (e > 65535) {
        e -= 65536;
        t += String.fromCharCode(e >>> 10 & 1023 | 55296);
        e = 56320 | e & 1023;
    }
    t += String.fromCharCode(e);
    return t;
});
function De(result) {
    if (result >= 55296 && result <= 57343 || result > 1114111) {
        return 65533;
    }
    return pt.get(result) ?? result;
}
const N = {
    NUM: 35,
    35: "NUM",
    SEMI: 59,
    59: "SEMI",
    EQUALS: 61,
    61: "EQUALS",
    ZERO: 48,
    48: "ZERO",
    NINE: 57,
    57: "NINE",
    LOWER_A: 97,
    97: "LOWER_A",
    LOWER_F: 102,
    102: "LOWER_F",
    LOWER_X: 120,
    120: "LOWER_X",
    LOWER_Z: 122,
    122: "LOWER_Z",
    UPPER_A: 65,
    65: "UPPER_A",
    UPPER_F: 70,
    70: "UPPER_F",
    UPPER_Z: 90,
    90: "UPPER_Z"
};
const St = 32;
const P = {
    VALUE_LENGTH: 49152,
    49152: "VALUE_LENGTH",
    BRANCH_LENGTH: 16256,
    16256: "BRANCH_LENGTH",
    JUMP_TABLE: 127,
    127: "JUMP_TABLE"
};
function Te(e) {
    return e >= N.ZERO && e <= N.NINE;
}
function Lt(e) {
    return e >= N.UPPER_A && e <= N.UPPER_F || e >= N.LOWER_A && e <= N.LOWER_F;
}
function Rt(e) {
    return e >= N.UPPER_A && e <= N.UPPER_Z || e >= N.LOWER_A && e <= N.LOWER_Z || Te(e);
}
function Dt(e) {
    return e === N.EQUALS || Rt(e);
}
const A = {
    EntityStart: 0,
    0: "EntityStart",
    NumericStart: 1,
    1: "NumericStart",
    NumericDecimal: 2,
    2: "NumericDecimal",
    NumericHex: 3,
    3: "NumericHex",
    NamedEntity: 4,
    4: "NamedEntity"
};
const D = {
    Legacy: 0,
    0: "Legacy",
    Strict: 1,
    1: "Strict",
    Attribute: 2,
    2: "Attribute"
};
class Z {
    constructor(e, t, a){
        this.decodeTree = e;
        this.emitCodePoint = t;
        this.errors = a;
        this.state = A.EntityStart;
        this.consumed = 1;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.decodeMode = D.Strict;
    }
    startEntity(e) {
        this.decodeMode = e;
        this.state = A.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
    }
    write(e, t) {
        switch(this.state){
            case A.EntityStart:
                {
                    if (e.charCodeAt(t) === N.NUM) {
                        this.state = A.NumericStart;
                        this.consumed += 1;
                        return this.stateNumericStart(e, t + 1);
                    }
                    this.state = A.NamedEntity;
                    return this.stateNamedEntity(e, t);
                }
            case A.NumericStart:
                return this.stateNumericStart(e, t);
            case A.NumericDecimal:
                return this.stateNumericDecimal(e, t);
            case A.NumericHex:
                return this.stateNumericHex(e, t);
            case A.NamedEntity:
                return this.stateNamedEntity(e, t);
        }
    }
    stateNumericStart(e, t) {
        if (t >= e.length) {
            return -1;
        }
        if ((e.charCodeAt(t) | St) === N.LOWER_X) {
            this.state = A.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(e, t + 1);
        }
        this.state = A.NumericDecimal;
        return this.stateNumericDecimal(e, t);
    }
    addToNumericResult(e, t, a, n) {
        if (t !== a) {
            let d = a - t;
            this.result = this.result * n ** d + parseInt(e.substr(t, d), n);
            this.consumed += d;
        }
    }
    stateNumericHex(e, t) {
        let a = t;
        while(t < e.length){
            let n = e.charCodeAt(t);
            if (Te(n) || Lt(n)) {
                t += 1;
            } else {
                this.addToNumericResult(e, a, t, 16);
                return this.emitNumericEntity(n, 3);
            }
        }
        this.addToNumericResult(e, a, t, 16);
        return -1;
    }
    stateNumericDecimal(e, t) {
        let a = t;
        while(t < e.length){
            let n = e.charCodeAt(t);
            if (Te(n)) {
                t += 1;
            } else {
                this.addToNumericResult(e, a, t, 10);
                return this.emitNumericEntity(n, 2);
            }
        }
        this.addToNumericResult(e, a, t, 10);
        return -1;
    }
    emitNumericEntity(e, t) {
        if (this.consumed <= t) {
            this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
        }
        if (e === N.SEMI) {
            this.consumed += 1;
        } else if (this.decodeMode === D.Strict) {
            return 0;
        }
        this.emitCodePoint(De(this.result), this.consumed);
        if (this.errors) {
            if (e !== N.SEMI) {
                this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
    }
    stateNamedEntity(e, t) {
        let { decodeTree } = this;
        let n = decodeTree[this.treeIndex];
        let d = (n & P.VALUE_LENGTH) >> 14;
        for(; t < e.length; t++, this.excess++){
            let h = e.charCodeAt(t);
            this.treeIndex = gt(decodeTree, n, this.treeIndex + Math.max(1, d), h);
            if (this.treeIndex < 0) {
                if (this.result === 0 || this.decodeMode === D.Attribute && (d === 0 || Dt(h))) {
                    return 0;
                }
                return this.emitNotTerminatedNamedEntity();
            }
            n = decodeTree[this.treeIndex];
            d = (n & P.VALUE_LENGTH) >> 14;
            if (d !== 0) {
                if (h === N.SEMI) {
                    return this.emitNamedEntityData(this.treeIndex, d, this.consumed + this.excess);
                }
                if (this.decodeMode !== D.Strict) {
                    this.result = this.treeIndex;
                    this.consumed += this.excess;
                    this.excess = 0;
                }
            }
        }
        return -1;
    }
    emitNotTerminatedNamedEntity() {
        let { result, decodeTree } = this;
        let n = (decodeTree[result] & P.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, n, this.consumed);
        this.errors?.missingSemicolonAfterCharacterReference();
        return this.consumed;
    }
    emitNamedEntityData(e, t, a) {
        let { decodeTree } = this;
        this.emitCodePoint(t === 1 ? decodeTree[e] & ~P.VALUE_LENGTH : decodeTree[e + 1], a);
        if (t === 3) {
            this.emitCodePoint(decodeTree[e + 2], a);
        }
        return a;
    }
    end() {
        switch(this.state){
            case A.NamedEntity:
                if (this.result !== 0 && (this.decodeMode !== D.Attribute || this.result === this.treeIndex)) {
                    return this.emitNotTerminatedNamedEntity();
                }
                return 0;
            case A.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case A.NumericHex:
                return this.emitNumericEntity(0, 3);
            case A.NumericStart:
                this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
                return 0;
            case A.EntityStart:
                return 0;
        }
    }
}
function ge(e) {
    let t = "";
    let a = new Z(e, (n)=>t += Re(n));
    return function(d, h) {
        let l = 0;
        let _ = 0;
        while((_ = d.indexOf("&", _)) >= 0){
            t += d.slice(l, _);
            a.startEntity(h);
            let p = a.write(d, _ + 1);
            if (p < 0) {
                l = _ + a.end();
                break;
            }
            l = _ + p;
            _ = p === 0 ? l + 1 : l;
        }
        let b = t + d.slice(l);
        t = "";
        return b;
    };
}
function gt(decodeTree, t, a, n) {
    let d = (t & P.BRANCH_LENGTH) >> 7;
    let h = t & P.JUMP_TABLE;
    if (d === 0) {
        if (h !== 0 && n === h) {
            return a;
        }
        return -1;
    }
    if (h) {
        let b = n - h;
        if (b < 0 || b >= d) {
            return -1;
        }
        return decodeTree[a + b] - 1;
    }
    let l = a;
    let _ = l + d - 1;
    while(l <= _){
        let b = l + _ >>> 1;
        let p = decodeTree[b];
        if (p < n) {
            l = b + 1;
        } else if (p > n) {
            _ = b - 1;
        } else {
            return decodeTree[b + d];
        }
    }
    return -1;
}
const ss = ge(J);
const rs = ge(Le);
const E = {
    HTML: "http://www.w3.org/1999/xhtml",
    MATHML: "http://www.w3.org/1998/Math/MathML",
    SVG: "http://www.w3.org/2000/svg",
    XLINK: "http://www.w3.org/1999/xlink",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
};
const g = {
    TYPE: "type",
    ACTION: "action",
    ENCODING: "encoding",
    PROMPT: "prompt",
    NAME: "name",
    COLOR: "color",
    FACE: "face",
    SIZE: "size"
};
const O = {
    NO_QUIRKS: "no-quirks",
    QUIRKS: "quirks",
    LIMITED_QUIRKS: "limited-quirks"
};
const c = {
    A: "a",
    ADDRESS: "address",
    ANNOTATION_XML: "annotation-xml",
    APPLET: "applet",
    AREA: "area",
    ARTICLE: "article",
    ASIDE: "aside",
    B: "b",
    BASE: "base",
    BASEFONT: "basefont",
    BGSOUND: "bgsound",
    BIG: "big",
    BLOCKQUOTE: "blockquote",
    BODY: "body",
    BR: "br",
    BUTTON: "button",
    CAPTION: "caption",
    CENTER: "center",
    CODE: "code",
    COL: "col",
    COLGROUP: "colgroup",
    DD: "dd",
    DESC: "desc",
    DETAILS: "details",
    DIALOG: "dialog",
    DIR: "dir",
    DIV: "div",
    DL: "dl",
    DT: "dt",
    EM: "em",
    EMBED: "embed",
    FIELDSET: "fieldset",
    FIGCAPTION: "figcaption",
    FIGURE: "figure",
    FONT: "font",
    FOOTER: "footer",
    FOREIGN_OBJECT: "foreignObject",
    FORM: "form",
    FRAME: "frame",
    FRAMESET: "frameset",
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    HEAD: "head",
    HEADER: "header",
    HGROUP: "hgroup",
    HR: "hr",
    HTML: "html",
    I: "i",
    IMG: "img",
    IMAGE: "image",
    INPUT: "input",
    IFRAME: "iframe",
    KEYGEN: "keygen",
    LABEL: "label",
    LI: "li",
    LINK: "link",
    LISTING: "listing",
    MAIN: "main",
    MALIGNMARK: "malignmark",
    MARQUEE: "marquee",
    MATH: "math",
    MENU: "menu",
    META: "meta",
    MGLYPH: "mglyph",
    MI: "mi",
    MO: "mo",
    MN: "mn",
    MS: "ms",
    MTEXT: "mtext",
    NAV: "nav",
    NOBR: "nobr",
    NOFRAMES: "noframes",
    NOEMBED: "noembed",
    NOSCRIPT: "noscript",
    OBJECT: "object",
    OL: "ol",
    OPTGROUP: "optgroup",
    OPTION: "option",
    P: "p",
    PARAM: "param",
    PLAINTEXT: "plaintext",
    PRE: "pre",
    RB: "rb",
    RP: "rp",
    RT: "rt",
    RTC: "rtc",
    RUBY: "ruby",
    S: "s",
    SCRIPT: "script",
    SEARCH: "search",
    SECTION: "section",
    SELECT: "select",
    SOURCE: "source",
    SMALL: "small",
    SPAN: "span",
    STRIKE: "strike",
    STRONG: "strong",
    STYLE: "style",
    SUB: "sub",
    SUMMARY: "summary",
    SUP: "sup",
    TABLE: "table",
    TBODY: "tbody",
    TEMPLATE: "template",
    TEXTAREA: "textarea",
    TFOOT: "tfoot",
    TD: "td",
    TH: "th",
    THEAD: "thead",
    TITLE: "title",
    TR: "tr",
    TRACK: "track",
    TT: "tt",
    U: "u",
    UL: "ul",
    SVG: "svg",
    VAR: "var",
    WBR: "wbr",
    XMP: "xmp"
};
const u = {
    UNKNOWN: 0,
    0: "UNKNOWN",
    A: 1,
    1: "A",
    ADDRESS: 2,
    2: "ADDRESS",
    ANNOTATION_XML: 3,
    3: "ANNOTATION_XML",
    APPLET: 4,
    4: "APPLET",
    AREA: 5,
    5: "AREA",
    ARTICLE: 6,
    6: "ARTICLE",
    ASIDE: 7,
    7: "ASIDE",
    B: 8,
    8: "B",
    BASE: 9,
    9: "BASE",
    BASEFONT: 10,
    10: "BASEFONT",
    BGSOUND: 11,
    11: "BGSOUND",
    BIG: 12,
    12: "BIG",
    BLOCKQUOTE: 13,
    13: "BLOCKQUOTE",
    BODY: 14,
    14: "BODY",
    BR: 15,
    15: "BR",
    BUTTON: 16,
    16: "BUTTON",
    CAPTION: 17,
    17: "CAPTION",
    CENTER: 18,
    18: "CENTER",
    CODE: 19,
    19: "CODE",
    COL: 20,
    20: "COL",
    COLGROUP: 21,
    21: "COLGROUP",
    DD: 22,
    22: "DD",
    DESC: 23,
    23: "DESC",
    DETAILS: 24,
    24: "DETAILS",
    DIALOG: 25,
    25: "DIALOG",
    DIR: 26,
    26: "DIR",
    DIV: 27,
    27: "DIV",
    DL: 28,
    28: "DL",
    DT: 29,
    29: "DT",
    EM: 30,
    30: "EM",
    EMBED: 31,
    31: "EMBED",
    FIELDSET: 32,
    32: "FIELDSET",
    FIGCAPTION: 33,
    33: "FIGCAPTION",
    FIGURE: 34,
    34: "FIGURE",
    FONT: 35,
    35: "FONT",
    FOOTER: 36,
    36: "FOOTER",
    FOREIGN_OBJECT: 37,
    37: "FOREIGN_OBJECT",
    FORM: 38,
    38: "FORM",
    FRAME: 39,
    39: "FRAME",
    FRAMESET: 40,
    40: "FRAMESET",
    H1: 41,
    41: "H1",
    H2: 42,
    42: "H2",
    H3: 43,
    43: "H3",
    H4: 44,
    44: "H4",
    H5: 45,
    45: "H5",
    H6: 46,
    46: "H6",
    HEAD: 47,
    47: "HEAD",
    HEADER: 48,
    48: "HEADER",
    HGROUP: 49,
    49: "HGROUP",
    HR: 50,
    50: "HR",
    HTML: 51,
    51: "HTML",
    I: 52,
    52: "I",
    IMG: 53,
    53: "IMG",
    IMAGE: 54,
    54: "IMAGE",
    INPUT: 55,
    55: "INPUT",
    IFRAME: 56,
    56: "IFRAME",
    KEYGEN: 57,
    57: "KEYGEN",
    LABEL: 58,
    58: "LABEL",
    LI: 59,
    59: "LI",
    LINK: 60,
    60: "LINK",
    LISTING: 61,
    61: "LISTING",
    MAIN: 62,
    62: "MAIN",
    MALIGNMARK: 63,
    63: "MALIGNMARK",
    MARQUEE: 64,
    64: "MARQUEE",
    MATH: 65,
    65: "MATH",
    MENU: 66,
    66: "MENU",
    META: 67,
    67: "META",
    MGLYPH: 68,
    68: "MGLYPH",
    MI: 69,
    69: "MI",
    MO: 70,
    70: "MO",
    MN: 71,
    71: "MN",
    MS: 72,
    72: "MS",
    MTEXT: 73,
    73: "MTEXT",
    NAV: 74,
    74: "NAV",
    NOBR: 75,
    75: "NOBR",
    NOFRAMES: 76,
    76: "NOFRAMES",
    NOEMBED: 77,
    77: "NOEMBED",
    NOSCRIPT: 78,
    78: "NOSCRIPT",
    OBJECT: 79,
    79: "OBJECT",
    OL: 80,
    80: "OL",
    OPTGROUP: 81,
    81: "OPTGROUP",
    OPTION: 82,
    82: "OPTION",
    P: 83,
    83: "P",
    PARAM: 84,
    84: "PARAM",
    PLAINTEXT: 85,
    85: "PLAINTEXT",
    PRE: 86,
    86: "PRE",
    RB: 87,
    87: "RB",
    RP: 88,
    88: "RP",
    RT: 89,
    89: "RT",
    RTC: 90,
    90: "RTC",
    RUBY: 91,
    91: "RUBY",
    S: 92,
    92: "S",
    SCRIPT: 93,
    93: "SCRIPT",
    SEARCH: 94,
    94: "SEARCH",
    SECTION: 95,
    95: "SECTION",
    SELECT: 96,
    96: "SELECT",
    SOURCE: 97,
    97: "SOURCE",
    SMALL: 98,
    98: "SMALL",
    SPAN: 99,
    99: "SPAN",
    STRIKE: 100,
    100: "STRIKE",
    STRONG: 101,
    101: "STRONG",
    STYLE: 102,
    102: "STYLE",
    SUB: 103,
    103: "SUB",
    SUMMARY: 104,
    104: "SUMMARY",
    SUP: 105,
    105: "SUP",
    TABLE: 106,
    106: "TABLE",
    TBODY: 107,
    107: "TBODY",
    TEMPLATE: 108,
    108: "TEMPLATE",
    TEXTAREA: 109,
    109: "TEXTAREA",
    TFOOT: 110,
    110: "TFOOT",
    TD: 111,
    111: "TD",
    TH: 112,
    112: "TH",
    THEAD: 113,
    113: "THEAD",
    TITLE: 114,
    114: "TITLE",
    TR: 115,
    115: "TR",
    TRACK: 116,
    116: "TRACK",
    TT: 117,
    117: "TT",
    U: 118,
    118: "U",
    UL: 119,
    119: "UL",
    SVG: 120,
    120: "SVG",
    VAR: 121,
    121: "VAR",
    WBR: 122,
    122: "WBR",
    XMP: 123,
    123: "XMP"
};
const Pt = new Map([
    [
        c.A,
        u.A
    ],
    [
        c.ADDRESS,
        u.ADDRESS
    ],
    [
        c.ANNOTATION_XML,
        u.ANNOTATION_XML
    ],
    [
        c.APPLET,
        u.APPLET
    ],
    [
        c.AREA,
        u.AREA
    ],
    [
        c.ARTICLE,
        u.ARTICLE
    ],
    [
        c.ASIDE,
        u.ASIDE
    ],
    [
        c.B,
        u.B
    ],
    [
        c.BASE,
        u.BASE
    ],
    [
        c.BASEFONT,
        u.BASEFONT
    ],
    [
        c.BGSOUND,
        u.BGSOUND
    ],
    [
        c.BIG,
        u.BIG
    ],
    [
        c.BLOCKQUOTE,
        u.BLOCKQUOTE
    ],
    [
        c.BODY,
        u.BODY
    ],
    [
        c.BR,
        u.BR
    ],
    [
        c.BUTTON,
        u.BUTTON
    ],
    [
        c.CAPTION,
        u.CAPTION
    ],
    [
        c.CENTER,
        u.CENTER
    ],
    [
        c.CODE,
        u.CODE
    ],
    [
        c.COL,
        u.COL
    ],
    [
        c.COLGROUP,
        u.COLGROUP
    ],
    [
        c.DD,
        u.DD
    ],
    [
        c.DESC,
        u.DESC
    ],
    [
        c.DETAILS,
        u.DETAILS
    ],
    [
        c.DIALOG,
        u.DIALOG
    ],
    [
        c.DIR,
        u.DIR
    ],
    [
        c.DIV,
        u.DIV
    ],
    [
        c.DL,
        u.DL
    ],
    [
        c.DT,
        u.DT
    ],
    [
        c.EM,
        u.EM
    ],
    [
        c.EMBED,
        u.EMBED
    ],
    [
        c.FIELDSET,
        u.FIELDSET
    ],
    [
        c.FIGCAPTION,
        u.FIGCAPTION
    ],
    [
        c.FIGURE,
        u.FIGURE
    ],
    [
        c.FONT,
        u.FONT
    ],
    [
        c.FOOTER,
        u.FOOTER
    ],
    [
        c.FOREIGN_OBJECT,
        u.FOREIGN_OBJECT
    ],
    [
        c.FORM,
        u.FORM
    ],
    [
        c.FRAME,
        u.FRAME
    ],
    [
        c.FRAMESET,
        u.FRAMESET
    ],
    [
        c.H1,
        u.H1
    ],
    [
        c.H2,
        u.H2
    ],
    [
        c.H3,
        u.H3
    ],
    [
        c.H4,
        u.H4
    ],
    [
        c.H5,
        u.H5
    ],
    [
        c.H6,
        u.H6
    ],
    [
        c.HEAD,
        u.HEAD
    ],
    [
        c.HEADER,
        u.HEADER
    ],
    [
        c.HGROUP,
        u.HGROUP
    ],
    [
        c.HR,
        u.HR
    ],
    [
        c.HTML,
        u.HTML
    ],
    [
        c.I,
        u.I
    ],
    [
        c.IMG,
        u.IMG
    ],
    [
        c.IMAGE,
        u.IMAGE
    ],
    [
        c.INPUT,
        u.INPUT
    ],
    [
        c.IFRAME,
        u.IFRAME
    ],
    [
        c.KEYGEN,
        u.KEYGEN
    ],
    [
        c.LABEL,
        u.LABEL
    ],
    [
        c.LI,
        u.LI
    ],
    [
        c.LINK,
        u.LINK
    ],
    [
        c.LISTING,
        u.LISTING
    ],
    [
        c.MAIN,
        u.MAIN
    ],
    [
        c.MALIGNMARK,
        u.MALIGNMARK
    ],
    [
        c.MARQUEE,
        u.MARQUEE
    ],
    [
        c.MATH,
        u.MATH
    ],
    [
        c.MENU,
        u.MENU
    ],
    [
        c.META,
        u.META
    ],
    [
        c.MGLYPH,
        u.MGLYPH
    ],
    [
        c.MI,
        u.MI
    ],
    [
        c.MO,
        u.MO
    ],
    [
        c.MN,
        u.MN
    ],
    [
        c.MS,
        u.MS
    ],
    [
        c.MTEXT,
        u.MTEXT
    ],
    [
        c.NAV,
        u.NAV
    ],
    [
        c.NOBR,
        u.NOBR
    ],
    [
        c.NOFRAMES,
        u.NOFRAMES
    ],
    [
        c.NOEMBED,
        u.NOEMBED
    ],
    [
        c.NOSCRIPT,
        u.NOSCRIPT
    ],
    [
        c.OBJECT,
        u.OBJECT
    ],
    [
        c.OL,
        u.OL
    ],
    [
        c.OPTGROUP,
        u.OPTGROUP
    ],
    [
        c.OPTION,
        u.OPTION
    ],
    [
        c.P,
        u.P
    ],
    [
        c.PARAM,
        u.PARAM
    ],
    [
        c.PLAINTEXT,
        u.PLAINTEXT
    ],
    [
        c.PRE,
        u.PRE
    ],
    [
        c.RB,
        u.RB
    ],
    [
        c.RP,
        u.RP
    ],
    [
        c.RT,
        u.RT
    ],
    [
        c.RTC,
        u.RTC
    ],
    [
        c.RUBY,
        u.RUBY
    ],
    [
        c.S,
        u.S
    ],
    [
        c.SCRIPT,
        u.SCRIPT
    ],
    [
        c.SEARCH,
        u.SEARCH
    ],
    [
        c.SECTION,
        u.SECTION
    ],
    [
        c.SELECT,
        u.SELECT
    ],
    [
        c.SOURCE,
        u.SOURCE
    ],
    [
        c.SMALL,
        u.SMALL
    ],
    [
        c.SPAN,
        u.SPAN
    ],
    [
        c.STRIKE,
        u.STRIKE
    ],
    [
        c.STRONG,
        u.STRONG
    ],
    [
        c.STYLE,
        u.STYLE
    ],
    [
        c.SUB,
        u.SUB
    ],
    [
        c.SUMMARY,
        u.SUMMARY
    ],
    [
        c.SUP,
        u.SUP
    ],
    [
        c.TABLE,
        u.TABLE
    ],
    [
        c.TBODY,
        u.TBODY
    ],
    [
        c.TEMPLATE,
        u.TEMPLATE
    ],
    [
        c.TEXTAREA,
        u.TEXTAREA
    ],
    [
        c.TFOOT,
        u.TFOOT
    ],
    [
        c.TD,
        u.TD
    ],
    [
        c.TH,
        u.TH
    ],
    [
        c.THEAD,
        u.THEAD
    ],
    [
        c.TITLE,
        u.TITLE
    ],
    [
        c.TR,
        u.TR
    ],
    [
        c.TRACK,
        u.TRACK
    ],
    [
        c.TT,
        u.TT
    ],
    [
        c.U,
        u.U
    ],
    [
        c.UL,
        u.UL
    ],
    [
        c.SVG,
        u.SVG
    ],
    [
        c.VAR,
        u.VAR
    ],
    [
        c.WBR,
        u.WBR
    ],
    [
        c.XMP,
        u.XMP
    ]
]);
function x(e) {
    return Pt.get(e) ?? u.UNKNOWN;
}
const T = u;
const Pe = {
    [E.HTML]: new Set([
        T.ADDRESS,
        T.APPLET,
        T.AREA,
        T.ARTICLE,
        T.ASIDE,
        T.BASE,
        T.BASEFONT,
        T.BGSOUND,
        T.BLOCKQUOTE,
        T.BODY,
        T.BR,
        T.BUTTON,
        T.CAPTION,
        T.CENTER,
        T.COL,
        T.COLGROUP,
        T.DD,
        T.DETAILS,
        T.DIR,
        T.DIV,
        T.DL,
        T.DT,
        T.EMBED,
        T.FIELDSET,
        T.FIGCAPTION,
        T.FIGURE,
        T.FOOTER,
        T.FORM,
        T.FRAME,
        T.FRAMESET,
        T.H1,
        T.H2,
        T.H3,
        T.H4,
        T.H5,
        T.H6,
        T.HEAD,
        T.HEADER,
        T.HGROUP,
        T.HR,
        T.HTML,
        T.IFRAME,
        T.IMG,
        T.INPUT,
        T.LI,
        T.LINK,
        T.LISTING,
        T.MAIN,
        T.MARQUEE,
        T.MENU,
        T.META,
        T.NAV,
        T.NOEMBED,
        T.NOFRAMES,
        T.NOSCRIPT,
        T.OBJECT,
        T.OL,
        T.P,
        T.PARAM,
        T.PLAINTEXT,
        T.PRE,
        T.SCRIPT,
        T.SECTION,
        T.SELECT,
        T.SOURCE,
        T.STYLE,
        T.SUMMARY,
        T.TABLE,
        T.TBODY,
        T.TD,
        T.TEMPLATE,
        T.TEXTAREA,
        T.TFOOT,
        T.TH,
        T.THEAD,
        T.TITLE,
        T.TR,
        T.TRACK,
        T.UL,
        T.WBR,
        T.XMP
    ]),
    [E.MATHML]: new Set([
        T.MI,
        T.MO,
        T.MN,
        T.MS,
        T.MTEXT,
        T.ANNOTATION_XML
    ]),
    [E.SVG]: new Set([
        T.TITLE,
        T.FOREIGN_OBJECT,
        T.DESC
    ]),
    [E.XLINK]: new Set,
    [E.XML]: new Set,
    [E.XMLNS]: new Set
};
const H = new Set([
    T.H1,
    T.H2,
    T.H3,
    T.H4,
    T.H5,
    T.H6
]);
const Mt = new Set([
    c.STYLE,
    c.SCRIPT,
    c.XMP,
    c.IFRAME,
    c.NOEMBED,
    c.NOFRAMES,
    c.PLAINTEXT
]);
function Me(e, scriptingEnabled) {
    return Mt.has(e) || scriptingEnabled && e === c.NOSCRIPT;
}
const r = {
    DATA: 0,
    0: "DATA",
    RCDATA: 1,
    1: "RCDATA",
    RAWTEXT: 2,
    2: "RAWTEXT",
    SCRIPT_DATA: 3,
    3: "SCRIPT_DATA",
    PLAINTEXT: 4,
    4: "PLAINTEXT",
    TAG_OPEN: 5,
    5: "TAG_OPEN",
    END_TAG_OPEN: 6,
    6: "END_TAG_OPEN",
    TAG_NAME: 7,
    7: "TAG_NAME",
    RCDATA_LESS_THAN_SIGN: 8,
    8: "RCDATA_LESS_THAN_SIGN",
    RCDATA_END_TAG_OPEN: 9,
    9: "RCDATA_END_TAG_OPEN",
    RCDATA_END_TAG_NAME: 10,
    10: "RCDATA_END_TAG_NAME",
    RAWTEXT_LESS_THAN_SIGN: 11,
    11: "RAWTEXT_LESS_THAN_SIGN",
    RAWTEXT_END_TAG_OPEN: 12,
    12: "RAWTEXT_END_TAG_OPEN",
    RAWTEXT_END_TAG_NAME: 13,
    13: "RAWTEXT_END_TAG_NAME",
    SCRIPT_DATA_LESS_THAN_SIGN: 14,
    14: "SCRIPT_DATA_LESS_THAN_SIGN",
    SCRIPT_DATA_END_TAG_OPEN: 15,
    15: "SCRIPT_DATA_END_TAG_OPEN",
    SCRIPT_DATA_END_TAG_NAME: 16,
    16: "SCRIPT_DATA_END_TAG_NAME",
    SCRIPT_DATA_ESCAPE_START: 17,
    17: "SCRIPT_DATA_ESCAPE_START",
    SCRIPT_DATA_ESCAPE_START_DASH: 18,
    18: "SCRIPT_DATA_ESCAPE_START_DASH",
    SCRIPT_DATA_ESCAPED: 19,
    19: "SCRIPT_DATA_ESCAPED",
    SCRIPT_DATA_ESCAPED_DASH: 20,
    20: "SCRIPT_DATA_ESCAPED_DASH",
    SCRIPT_DATA_ESCAPED_DASH_DASH: 21,
    21: "SCRIPT_DATA_ESCAPED_DASH_DASH",
    SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: 22,
    22: "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",
    SCRIPT_DATA_ESCAPED_END_TAG_OPEN: 23,
    23: "SCRIPT_DATA_ESCAPED_END_TAG_OPEN",
    SCRIPT_DATA_ESCAPED_END_TAG_NAME: 24,
    24: "SCRIPT_DATA_ESCAPED_END_TAG_NAME",
    SCRIPT_DATA_DOUBLE_ESCAPE_START: 25,
    25: "SCRIPT_DATA_DOUBLE_ESCAPE_START",
    SCRIPT_DATA_DOUBLE_ESCAPED: 26,
    26: "SCRIPT_DATA_DOUBLE_ESCAPED",
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH: 27,
    27: "SCRIPT_DATA_DOUBLE_ESCAPED_DASH",
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: 28,
    28: "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",
    SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: 29,
    29: "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",
    SCRIPT_DATA_DOUBLE_ESCAPE_END: 30,
    30: "SCRIPT_DATA_DOUBLE_ESCAPE_END",
    BEFORE_ATTRIBUTE_NAME: 31,
    31: "BEFORE_ATTRIBUTE_NAME",
    ATTRIBUTE_NAME: 32,
    32: "ATTRIBUTE_NAME",
    AFTER_ATTRIBUTE_NAME: 33,
    33: "AFTER_ATTRIBUTE_NAME",
    BEFORE_ATTRIBUTE_VALUE: 34,
    34: "BEFORE_ATTRIBUTE_VALUE",
    ATTRIBUTE_VALUE_DOUBLE_QUOTED: 35,
    35: "ATTRIBUTE_VALUE_DOUBLE_QUOTED",
    ATTRIBUTE_VALUE_SINGLE_QUOTED: 36,
    36: "ATTRIBUTE_VALUE_SINGLE_QUOTED",
    ATTRIBUTE_VALUE_UNQUOTED: 37,
    37: "ATTRIBUTE_VALUE_UNQUOTED",
    AFTER_ATTRIBUTE_VALUE_QUOTED: 38,
    38: "AFTER_ATTRIBUTE_VALUE_QUOTED",
    SELF_CLOSING_START_TAG: 39,
    39: "SELF_CLOSING_START_TAG",
    BOGUS_COMMENT: 40,
    40: "BOGUS_COMMENT",
    MARKUP_DECLARATION_OPEN: 41,
    41: "MARKUP_DECLARATION_OPEN",
    COMMENT_START: 42,
    42: "COMMENT_START",
    COMMENT_START_DASH: 43,
    43: "COMMENT_START_DASH",
    COMMENT: 44,
    44: "COMMENT",
    COMMENT_LESS_THAN_SIGN: 45,
    45: "COMMENT_LESS_THAN_SIGN",
    COMMENT_LESS_THAN_SIGN_BANG: 46,
    46: "COMMENT_LESS_THAN_SIGN_BANG",
    COMMENT_LESS_THAN_SIGN_BANG_DASH: 47,
    47: "COMMENT_LESS_THAN_SIGN_BANG_DASH",
    COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: 48,
    48: "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",
    COMMENT_END_DASH: 49,
    49: "COMMENT_END_DASH",
    COMMENT_END: 50,
    50: "COMMENT_END",
    COMMENT_END_BANG: 51,
    51: "COMMENT_END_BANG",
    DOCTYPE: 52,
    52: "DOCTYPE",
    BEFORE_DOCTYPE_NAME: 53,
    53: "BEFORE_DOCTYPE_NAME",
    DOCTYPE_NAME: 54,
    54: "DOCTYPE_NAME",
    AFTER_DOCTYPE_NAME: 55,
    55: "AFTER_DOCTYPE_NAME",
    AFTER_DOCTYPE_PUBLIC_KEYWORD: 56,
    56: "AFTER_DOCTYPE_PUBLIC_KEYWORD",
    BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: 57,
    57: "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",
    DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: 58,
    58: "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",
    DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: 59,
    59: "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",
    AFTER_DOCTYPE_PUBLIC_IDENTIFIER: 60,
    60: "AFTER_DOCTYPE_PUBLIC_IDENTIFIER",
    BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: 61,
    61: "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",
    AFTER_DOCTYPE_SYSTEM_KEYWORD: 62,
    62: "AFTER_DOCTYPE_SYSTEM_KEYWORD",
    BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: 63,
    63: "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",
    DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: 64,
    64: "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",
    DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: 65,
    65: "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",
    AFTER_DOCTYPE_SYSTEM_IDENTIFIER: 66,
    66: "AFTER_DOCTYPE_SYSTEM_IDENTIFIER",
    BOGUS_DOCTYPE: 67,
    67: "BOGUS_DOCTYPE",
    CDATA_SECTION: 68,
    68: "CDATA_SECTION",
    CDATA_SECTION_BRACKET: 69,
    69: "CDATA_SECTION_BRACKET",
    CDATA_SECTION_END: 70,
    70: "CDATA_SECTION_END",
    CHARACTER_REFERENCE: 71,
    71: "CHARACTER_REFERENCE",
    AMBIGUOUS_AMPERSAND: 72,
    72: "AMBIGUOUS_AMPERSAND"
};
const kA = {
    DATA: r.DATA,
    RCDATA: r.RCDATA,
    RAWTEXT: r.RAWTEXT,
    SCRIPT_DATA: r.SCRIPT_DATA,
    PLAINTEXT: r.PLAINTEXT,
    CDATA_SECTION: r.CDATA_SECTION
};
function Bt(e) {
    return e >= s.DIGIT_0 && e <= s.DIGIT_9;
}
function U(e) {
    return e >= s.LATIN_CAPITAL_A && e <= s.LATIN_CAPITAL_Z;
}
function kt(e) {
    return e >= s.LATIN_SMALL_A && e <= s.LATIN_SMALL_Z;
}
function M(e) {
    return kt(e) || U(e);
}
function xe(e) {
    return M(e) || Bt(e);
}
function ee(e) {
    return e + 32;
}
function ke(e) {
    return e === s.SPACE || e === s.LINE_FEED || e === s.TABULATION || e === s.FORM_FEED;
}
function Be(e) {
    return ke(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN;
}
function Ht(e) {
    if (e === s.NULL) {
        return o.nullCharacterReference;
    } else if (e > 1114111) {
        return o.characterReferenceOutsideUnicodeRange;
    } else if (K(e)) {
        return o.surrogateCharacterReference;
    } else if (z(e)) {
        return o.noncharacterCharacterReference;
    } else if (V(e) || e === s.CARRIAGE_RETURN) {
        return o.controlCharacterReference;
    }
    return null;
}
class uSt {
    constructor(e, t){
        this.options = e;
        this.handler = t;
        this.paused = false;
        this.inLoop = false;
        this.inForeignNode = false;
        this.lastStartTagName = "";
        this.active = false;
        this.state = r.DATA;
        this.returnState = r.DATA;
        this.entityStartPos = 0;
        this.consumedAfterSnapshot = -1;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = {
            name: "",
            value: ""
        };
        this.preprocessor = new de(t);
        this.currentLocation = this.getCurrentLocation(-1);
        this.entityDecoder = new Z(J, (a, n)=>{
            this.preprocessor.pos = this.entityStartPos + n - 1;
            this._flushCodePointConsumedAsCharacterReference(a);
        }, t.onParseError ? {
            missingSemicolonAfterCharacterReference: ()=>{
                this._err(o.missingSemicolonAfterCharacterReference, 1);
            },
            absenceOfDigitsInNumericCharacterReference: (a)=>{
                this._err(o.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + a);
            },
            validateNumericCharacterReference: (a)=>{
                let n = Ht(a);
                if (n) {
                    this._err(n, 1);
                }
            }
        } : undefined);
    }
    _err(e, t = 0) {
        this.handler.onParseError?.(this.preprocessor.getError(e, t));
    }
    getCurrentLocation(e) {
        if (!this.options.sourceCodeLocationInfo) {
            return null;
        }
        return {
            startLine: this.preprocessor.line,
            startCol: this.preprocessor.col - e,
            startOffset: this.preprocessor.offset - e,
            endLine: -1,
            endCol: -1,
            endOffset: -1
        };
    }
    _runParsingLoop() {
        if (this.inLoop) {
            return;
        }
        this.inLoop = true;
        while(this.active && !this.paused){
            this.consumedAfterSnapshot = 0;
            let e = this._consume();
            if (!this._ensureHibernation()) {
                this._callState(e);
            }
        }
        this.inLoop = false;
    }
    pause() {
        this.paused = true;
    }
    resume(e) {
        if (!this.paused) {
            throw Error("Parser was already resumed");
        }
        this.paused = false;
        if (this.inLoop) {
            return;
        }
        this._runParsingLoop();
        if (!this.paused) {
            e?.();
        }
    }
    write(e, t, a) {
        this.active = true;
        this.preprocessor.write(e, t);
        this._runParsingLoop();
        if (!this.paused) {
            a?.();
        }
    }
    insertHtmlAtCurrentPos(e) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(e);
        this._runParsingLoop();
    }
    _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
            this.preprocessor.retreat(this.consumedAfterSnapshot);
            this.consumedAfterSnapshot = 0;
            this.active = false;
            return true;
        }
        return false;
    }
    _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
    }
    _advanceBy(e) {
        this.consumedAfterSnapshot += e;
        for(let t = 0; t < e; t++){
            this.preprocessor.advance();
        }
    }
    _consumeSequenceIfMatch(e, t) {
        if (this.preprocessor.startsWith(e, t)) {
            this._advanceBy(e.length - 1);
            return true;
        }
        return false;
    }
    _createStartTagToken() {
        this.currentToken = {
            type: f.START_TAG,
            tagName: "",
            tagID: u.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(1)
        };
    }
    _createEndTagToken() {
        this.currentToken = {
            type: f.END_TAG,
            tagName: "",
            tagID: u.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(2)
        };
    }
    _createCommentToken(e) {
        this.currentToken = {
            type: f.COMMENT,
            data: "",
            location: this.getCurrentLocation(e)
        };
    }
    _createDoctypeToken(e) {
        this.currentToken = {
            type: f.DOCTYPE,
            name: e,
            forceQuirks: false,
            publicId: null,
            systemId: null,
            location: this.currentLocation
        };
    }
    _createCharacterToken(type, chars) {
        this.currentCharacterToken = {
            type,
            chars,
            location: this.currentLocation
        };
    }
    _createAttr(e) {
        this.currentAttr = {
            name: e,
            value: ""
        };
        this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
        let t;
        let currentToken = this.currentToken;
        if (j(currentToken, this.currentAttr.name) === null) {
            currentToken.attrs.push(this.currentAttr);
            if (currentToken.location && this.currentLocation) {
                let n = (t = currentToken.location).attrs ?? (t.attrs = Object.create(null));
                n[this.currentAttr.name] = this.currentLocation;
                this._leaveAttrValue();
            }
        } else {
            this._err(o.duplicateAttribute);
        }
    }
    _leaveAttrValue() {
        if (this.currentLocation) {
            this.currentLocation.endLine = this.preprocessor.line;
            this.currentLocation.endCol = this.preprocessor.col;
            this.currentLocation.endOffset = this.preprocessor.offset;
        }
    }
    prepareToken(e) {
        this._emitCurrentCharacterToken(e.location);
        this.currentToken = null;
        if (e.location) {
            e.location.endLine = this.preprocessor.line;
            e.location.endCol = this.preprocessor.col + 1;
            e.location.endOffset = this.preprocessor.offset + 1;
        }
        this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
        let currentToken = this.currentToken;
        this.prepareToken(currentToken);
        currentToken.tagID = x(currentToken.tagName);
        if (currentToken.type === f.START_TAG) {
            this.lastStartTagName = currentToken.tagName;
            this.handler.onStartTag(currentToken);
        } else {
            if (currentToken.attrs.length > 0) {
                this._err(o.endTagWithAttributes);
            }
            if (currentToken.selfClosing) {
                this._err(o.endTagWithTrailingSolidus);
            }
            this.handler.onEndTag(currentToken);
        }
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(e) {
        this.prepareToken(e);
        this.handler.onComment(e);
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(e) {
        this.prepareToken(e);
        this.handler.onDoctype(e);
        this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(e) {
        if (this.currentCharacterToken) {
            if (e && this.currentCharacterToken.location) {
                this.currentCharacterToken.location.endLine = e.startLine;
                this.currentCharacterToken.location.endCol = e.startCol;
                this.currentCharacterToken.location.endOffset = e.startOffset;
            }
            switch(this.currentCharacterToken.type){
                case f.CHARACTER:
                    {
                        this.handler.onCharacter(this.currentCharacterToken);
                        break;
                    }
                case f.NULL_CHARACTER:
                    {
                        this.handler.onNullCharacter(this.currentCharacterToken);
                        break;
                    }
                case f.WHITESPACE_CHARACTER:
                    {
                        this.handler.onWhitespaceCharacter(this.currentCharacterToken);
                        break;
                    }
            }
            this.currentCharacterToken = null;
        }
    }
    _emitEOFToken() {
        let location = this.getCurrentLocation(0);
        if (location) {
            location.endLine = location.startLine;
            location.endCol = location.startCol;
            location.endOffset = location.startOffset;
        }
        this._emitCurrentCharacterToken(location);
        this.handler.onEof({
            type: f.EOF,
            location
        });
        this.active = false;
    }
    _appendCharToCurrentCharacterToken(e, t) {
        if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type === e) {
                this.currentCharacterToken.chars += t;
                return;
            } else {
                this.currentLocation = this.getCurrentLocation(0);
                this._emitCurrentCharacterToken(this.currentLocation);
                this.preprocessor.dropParsedChunk();
            }
        }
        this._createCharacterToken(e, t);
    }
    _emitCodePoint(e) {
        let t = ke(e) ? f.WHITESPACE_CHARACTER : e === s.NULL ? f.NULL_CHARACTER : f.CHARACTER;
        this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
    }
    _emitChars(e) {
        this._appendCharToCurrentCharacterToken(f.CHARACTER, e);
    }
    _startCharacterReference() {
        this.returnState = this.state;
        this.state = r.CHARACTER_REFERENCE;
        this.entityStartPos = this.preprocessor.pos;
        this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? D.Attribute : D.Legacy);
    }
    _isCharacterReferenceInAttribute() {
        return this.returnState === r.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === r.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === r.ATTRIBUTE_VALUE_UNQUOTED;
    }
    _flushCodePointConsumedAsCharacterReference(e) {
        if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += String.fromCodePoint(e);
        } else {
            this._emitCodePoint(e);
        }
    }
    _callState(e) {
        switch(this.state){
            case r.DATA:
                {
                    this._stateData(e);
                    break;
                }
            case r.RCDATA:
                {
                    this._stateRcdata(e);
                    break;
                }
            case r.RAWTEXT:
                {
                    this._stateRawtext(e);
                    break;
                }
            case r.SCRIPT_DATA:
                {
                    this._stateScriptData(e);
                    break;
                }
            case r.PLAINTEXT:
                {
                    this._statePlaintext(e);
                    break;
                }
            case r.TAG_OPEN:
                {
                    this._stateTagOpen(e);
                    break;
                }
            case r.END_TAG_OPEN:
                {
                    this._stateEndTagOpen(e);
                    break;
                }
            case r.TAG_NAME:
                {
                    this._stateTagName(e);
                    break;
                }
            case r.RCDATA_LESS_THAN_SIGN:
                {
                    this._stateRcdataLessThanSign(e);
                    break;
                }
            case r.RCDATA_END_TAG_OPEN:
                {
                    this._stateRcdataEndTagOpen(e);
                    break;
                }
            case r.RCDATA_END_TAG_NAME:
                {
                    this._stateRcdataEndTagName(e);
                    break;
                }
            case r.RAWTEXT_LESS_THAN_SIGN:
                {
                    this._stateRawtextLessThanSign(e);
                    break;
                }
            case r.RAWTEXT_END_TAG_OPEN:
                {
                    this._stateRawtextEndTagOpen(e);
                    break;
                }
            case r.RAWTEXT_END_TAG_NAME:
                {
                    this._stateRawtextEndTagName(e);
                    break;
                }
            case r.SCRIPT_DATA_LESS_THAN_SIGN:
                {
                    this._stateScriptDataLessThanSign(e);
                    break;
                }
            case r.SCRIPT_DATA_END_TAG_OPEN:
                {
                    this._stateScriptDataEndTagOpen(e);
                    break;
                }
            case r.SCRIPT_DATA_END_TAG_NAME:
                {
                    this._stateScriptDataEndTagName(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPE_START:
                {
                    this._stateScriptDataEscapeStart(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPE_START_DASH:
                {
                    this._stateScriptDataEscapeStartDash(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPED:
                {
                    this._stateScriptDataEscaped(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPED_DASH:
                {
                    this._stateScriptDataEscapedDash(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataEscapedDashDash(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataEscapedLessThanSign(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
                {
                    this._stateScriptDataEscapedEndTagOpen(e);
                    break;
                }
            case r.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
                {
                    this._stateScriptDataEscapedEndTagName(e);
                    break;
                }
            case r.SCRIPT_DATA_DOUBLE_ESCAPE_START:
                {
                    this._stateScriptDataDoubleEscapeStart(e);
                    break;
                }
            case r.SCRIPT_DATA_DOUBLE_ESCAPED:
                {
                    this._stateScriptDataDoubleEscaped(e);
                    break;
                }
            case r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
                {
                    this._stateScriptDataDoubleEscapedDash(e);
                    break;
                }
            case r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
                {
                    this._stateScriptDataDoubleEscapedDashDash(e);
                    break;
                }
            case r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
                {
                    this._stateScriptDataDoubleEscapedLessThanSign(e);
                    break;
                }
            case r.SCRIPT_DATA_DOUBLE_ESCAPE_END:
                {
                    this._stateScriptDataDoubleEscapeEnd(e);
                    break;
                }
            case r.BEFORE_ATTRIBUTE_NAME:
                {
                    this._stateBeforeAttributeName(e);
                    break;
                }
            case r.ATTRIBUTE_NAME:
                {
                    this._stateAttributeName(e);
                    break;
                }
            case r.AFTER_ATTRIBUTE_NAME:
                {
                    this._stateAfterAttributeName(e);
                    break;
                }
            case r.BEFORE_ATTRIBUTE_VALUE:
                {
                    this._stateBeforeAttributeValue(e);
                    break;
                }
            case r.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
                {
                    this._stateAttributeValueDoubleQuoted(e);
                    break;
                }
            case r.ATTRIBUTE_VALUE_SINGLE_QUOTED:
                {
                    this._stateAttributeValueSingleQuoted(e);
                    break;
                }
            case r.ATTRIBUTE_VALUE_UNQUOTED:
                {
                    this._stateAttributeValueUnquoted(e);
                    break;
                }
            case r.AFTER_ATTRIBUTE_VALUE_QUOTED:
                {
                    this._stateAfterAttributeValueQuoted(e);
                    break;
                }
            case r.SELF_CLOSING_START_TAG:
                {
                    this._stateSelfClosingStartTag(e);
                    break;
                }
            case r.BOGUS_COMMENT:
                {
                    this._stateBogusComment(e);
                    break;
                }
            case r.MARKUP_DECLARATION_OPEN:
                {
                    this._stateMarkupDeclarationOpen(e);
                    break;
                }
            case r.COMMENT_START:
                {
                    this._stateCommentStart(e);
                    break;
                }
            case r.COMMENT_START_DASH:
                {
                    this._stateCommentStartDash(e);
                    break;
                }
            case r.COMMENT:
                {
                    this._stateComment(e);
                    break;
                }
            case r.COMMENT_LESS_THAN_SIGN:
                {
                    this._stateCommentLessThanSign(e);
                    break;
                }
            case r.COMMENT_LESS_THAN_SIGN_BANG:
                {
                    this._stateCommentLessThanSignBang(e);
                    break;
                }
            case r.COMMENT_LESS_THAN_SIGN_BANG_DASH:
                {
                    this._stateCommentLessThanSignBangDash(e);
                    break;
                }
            case r.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
                {
                    this._stateCommentLessThanSignBangDashDash(e);
                    break;
                }
            case r.COMMENT_END_DASH:
                {
                    this._stateCommentEndDash(e);
                    break;
                }
            case r.COMMENT_END:
                {
                    this._stateCommentEnd(e);
                    break;
                }
            case r.COMMENT_END_BANG:
                {
                    this._stateCommentEndBang(e);
                    break;
                }
            case r.DOCTYPE:
                {
                    this._stateDoctype(e);
                    break;
                }
            case r.BEFORE_DOCTYPE_NAME:
                {
                    this._stateBeforeDoctypeName(e);
                    break;
                }
            case r.DOCTYPE_NAME:
                {
                    this._stateDoctypeName(e);
                    break;
                }
            case r.AFTER_DOCTYPE_NAME:
                {
                    this._stateAfterDoctypeName(e);
                    break;
                }
            case r.AFTER_DOCTYPE_PUBLIC_KEYWORD:
                {
                    this._stateAfterDoctypePublicKeyword(e);
                    break;
                }
            case r.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateBeforeDoctypePublicIdentifier(e);
                    break;
                }
            case r.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierDoubleQuoted(e);
                    break;
                }
            case r.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypePublicIdentifierSingleQuoted(e);
                    break;
                }
            case r.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
                {
                    this._stateAfterDoctypePublicIdentifier(e);
                    break;
                }
            case r.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
                {
                    this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
                    break;
                }
            case r.AFTER_DOCTYPE_SYSTEM_KEYWORD:
                {
                    this._stateAfterDoctypeSystemKeyword(e);
                    break;
                }
            case r.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateBeforeDoctypeSystemIdentifier(e);
                    break;
                }
            case r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierDoubleQuoted(e);
                    break;
                }
            case r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
                {
                    this._stateDoctypeSystemIdentifierSingleQuoted(e);
                    break;
                }
            case r.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
                {
                    this._stateAfterDoctypeSystemIdentifier(e);
                    break;
                }
            case r.BOGUS_DOCTYPE:
                {
                    this._stateBogusDoctype(e);
                    break;
                }
            case r.CDATA_SECTION:
                {
                    this._stateCdataSection(e);
                    break;
                }
            case r.CDATA_SECTION_BRACKET:
                {
                    this._stateCdataSectionBracket(e);
                    break;
                }
            case r.CDATA_SECTION_END:
                {
                    this._stateCdataSectionEnd(e);
                    break;
                }
            case r.CHARACTER_REFERENCE:
                {
                    this._stateCharacterReference();
                    break;
                }
            case r.AMBIGUOUS_AMPERSAND:
                {
                    this._stateAmbiguousAmpersand(e);
                    break;
                }
            default:
                throw Error("Unknown state");
        }
    }
    _stateData(e) {
        switch(e){
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.TAG_OPEN;
                    break;
                }
            case s.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this._emitCodePoint(e);
                    break;
                }
            case s.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateRcdata(e) {
        switch(e){
            case s.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.RCDATA_LESS_THAN_SIGN;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateRawtext(e) {
        switch(e){
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.RAWTEXT_LESS_THAN_SIGN;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptData(e) {
        switch(e){
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA_LESS_THAN_SIGN;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _statePlaintext(e) {
        switch(e){
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateTagOpen(e) {
        if (M(e)) {
            this._createStartTagToken();
            this.state = r.TAG_NAME;
            this._stateTagName(e);
        } else {
            switch(e){
                case s.EXCLAMATION_MARK:
                    {
                        this.state = r.MARKUP_DECLARATION_OPEN;
                        break;
                    }
                case s.SOLIDUS:
                    {
                        this.state = r.END_TAG_OPEN;
                        break;
                    }
                case s.QUESTION_MARK:
                    {
                        this._err(o.unexpectedQuestionMarkInsteadOfTagName);
                        this._createCommentToken(1);
                        this.state = r.BOGUS_COMMENT;
                        this._stateBogusComment(e);
                        break;
                    }
                case s.EOF:
                    {
                        this._err(o.eofBeforeTagName);
                        this._emitChars("<");
                        this._emitEOFToken();
                        break;
                    }
                default:
                    this._err(o.invalidFirstCharacterOfTagName);
                    this._emitChars("<");
                    this.state = r.DATA;
                    this._stateData(e);
            }
        }
    }
    _stateEndTagOpen(e) {
        if (M(e)) {
            this._createEndTagToken();
            this.state = r.TAG_NAME;
            this._stateTagName(e);
        } else {
            switch(e){
                case s.GREATER_THAN_SIGN:
                    {
                        this._err(o.missingEndTagName);
                        this.state = r.DATA;
                        break;
                    }
                case s.EOF:
                    {
                        this._err(o.eofBeforeTagName);
                        this._emitChars("</");
                        this._emitEOFToken();
                        break;
                    }
                default:
                    this._err(o.invalidFirstCharacterOfTagName);
                    this._createCommentToken(2);
                    this.state = r.BOGUS_COMMENT;
                    this._stateBogusComment(e);
            }
        }
    }
    _stateTagName(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this.state = r.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case s.SOLIDUS:
                {
                    this.state = r.SELF_CLOSING_START_TAG;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    this.emitCurrentTagToken();
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.tagName += m;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInTag);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.tagName += String.fromCodePoint(U(e) ? ee(e) : e);
        }
    }
    _stateRcdataLessThanSign(e) {
        if (e === s.SOLIDUS) {
            this.state = r.RCDATA_END_TAG_OPEN;
        } else {
            this._emitChars("<");
            this.state = r.RCDATA;
            this._stateRcdata(e);
        }
    }
    _stateRcdataEndTagOpen(e) {
        if (M(e)) {
            this.state = r.RCDATA_END_TAG_NAME;
            this._stateRcdataEndTagName(e);
        } else {
            this._emitChars("</");
            this.state = r.RCDATA;
            this._stateRcdata(e);
        }
    }
    handleSpecialEndTag(e) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
            return !this._ensureHibernation();
        }
        this._createEndTagToken();
        let currentToken = this.currentToken;
        currentToken.tagName = this.lastStartTagName;
        switch(this.preprocessor.peek(this.lastStartTagName.length)){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                this._advanceBy(this.lastStartTagName.length);
                this.state = r.BEFORE_ATTRIBUTE_NAME;
                return false;
            case s.SOLIDUS:
                this._advanceBy(this.lastStartTagName.length);
                this.state = r.SELF_CLOSING_START_TAG;
                return false;
            case s.GREATER_THAN_SIGN:
                this._advanceBy(this.lastStartTagName.length);
                this.emitCurrentTagToken();
                this.state = r.DATA;
                return false;
            default:
                return !this._ensureHibernation();
        }
    }
    _stateRcdataEndTagName(e) {
        if (this.handleSpecialEndTag(e)) {
            this._emitChars("</");
            this.state = r.RCDATA;
            this._stateRcdata(e);
        }
    }
    _stateRawtextLessThanSign(e) {
        if (e === s.SOLIDUS) {
            this.state = r.RAWTEXT_END_TAG_OPEN;
        } else {
            this._emitChars("<");
            this.state = r.RAWTEXT;
            this._stateRawtext(e);
        }
    }
    _stateRawtextEndTagOpen(e) {
        if (M(e)) {
            this.state = r.RAWTEXT_END_TAG_NAME;
            this._stateRawtextEndTagName(e);
        } else {
            this._emitChars("</");
            this.state = r.RAWTEXT;
            this._stateRawtext(e);
        }
    }
    _stateRawtextEndTagName(e) {
        if (this.handleSpecialEndTag(e)) {
            this._emitChars("</");
            this.state = r.RAWTEXT;
            this._stateRawtext(e);
        }
    }
    _stateScriptDataLessThanSign(e) {
        switch(e){
            case s.SOLIDUS:
                {
                    this.state = r.SCRIPT_DATA_END_TAG_OPEN;
                    break;
                }
            case s.EXCLAMATION_MARK:
                {
                    this.state = r.SCRIPT_DATA_ESCAPE_START;
                    this._emitChars("<!");
                    break;
                }
            default:
                this._emitChars("<");
                this.state = r.SCRIPT_DATA;
                this._stateScriptData(e);
        }
    }
    _stateScriptDataEndTagOpen(e) {
        if (M(e)) {
            this.state = r.SCRIPT_DATA_END_TAG_NAME;
            this._stateScriptDataEndTagName(e);
        } else {
            this._emitChars("</");
            this.state = r.SCRIPT_DATA;
            this._stateScriptData(e);
        }
    }
    _stateScriptDataEndTagName(e) {
        if (this.handleSpecialEndTag(e)) {
            this._emitChars("</");
            this.state = r.SCRIPT_DATA;
            this._stateScriptData(e);
        }
    }
    _stateScriptDataEscapeStart(e) {
        if (e === s.HYPHEN_MINUS) {
            this.state = r.SCRIPT_DATA_ESCAPE_START_DASH;
            this._emitChars("-");
        } else {
            this.state = r.SCRIPT_DATA;
            this._stateScriptData(e);
        }
    }
    _stateScriptDataEscapeStartDash(e) {
        if (e === s.HYPHEN_MINUS) {
            this.state = r.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars("-");
        } else {
            this.state = r.SCRIPT_DATA;
            this._stateScriptData(e);
        }
    }
    _stateScriptDataEscaped(e) {
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.SCRIPT_DATA_ESCAPED_DASH;
                    this._emitChars("-");
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInScriptHtmlCommentLikeText);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedDash(e) {
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.SCRIPT_DATA_ESCAPED_DASH_DASH;
                    this._emitChars("-");
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.state = r.SCRIPT_DATA_ESCAPED;
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInScriptHtmlCommentLikeText);
                    this._emitEOFToken();
                    break;
                }
            default:
                this.state = r.SCRIPT_DATA_ESCAPED;
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedDashDash(e) {
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA;
                    this._emitChars(">");
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.state = r.SCRIPT_DATA_ESCAPED;
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInScriptHtmlCommentLikeText);
                    this._emitEOFToken();
                    break;
                }
            default:
                this.state = r.SCRIPT_DATA_ESCAPED;
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataEscapedLessThanSign(e) {
        if (e === s.SOLIDUS) {
            this.state = r.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
        } else if (M(e)) {
            this._emitChars("<");
            this.state = r.SCRIPT_DATA_DOUBLE_ESCAPE_START;
            this._stateScriptDataDoubleEscapeStart(e);
        } else {
            this._emitChars("<");
            this.state = r.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(e);
        }
    }
    _stateScriptDataEscapedEndTagOpen(e) {
        if (M(e)) {
            this.state = r.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
            this._stateScriptDataEscapedEndTagName(e);
        } else {
            this._emitChars("</");
            this.state = r.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(e);
        }
    }
    _stateScriptDataEscapedEndTagName(e) {
        if (this.handleSpecialEndTag(e)) {
            this._emitChars("</");
            this.state = r.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(e);
        }
    }
    _stateScriptDataDoubleEscapeStart(e) {
        if (this.preprocessor.startsWith(C.SCRIPT, false) && Be(this.preprocessor.peek(C.SCRIPT.length))) {
            this._emitCodePoint(e);
            for(let t = 0; t < C.SCRIPT.length; t++){
                this._emitCodePoint(this._consume());
            }
            this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else if (!this._ensureHibernation()) {
            this.state = r.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(e);
        }
    }
    _stateScriptDataDoubleEscaped(e) {
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
                    this._emitChars("-");
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                    this._emitChars("<");
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInScriptHtmlCommentLikeText);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedDash(e) {
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
                    this._emitChars("-");
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                    this._emitChars("<");
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInScriptHtmlCommentLikeText);
                    this._emitEOFToken();
                    break;
                }
            default:
                this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedDashDash(e) {
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this._emitChars("-");
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                    this._emitChars("<");
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.SCRIPT_DATA;
                    this._emitChars(">");
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
                    this._emitChars(m);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInScriptHtmlCommentLikeText);
                    this._emitEOFToken();
                    break;
                }
            default:
                this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitCodePoint(e);
        }
    }
    _stateScriptDataDoubleEscapedLessThanSign(e) {
        if (e === s.SOLIDUS) {
            this.state = r.SCRIPT_DATA_DOUBLE_ESCAPE_END;
            this._emitChars("/");
        } else {
            this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(e);
        }
    }
    _stateScriptDataDoubleEscapeEnd(e) {
        if (this.preprocessor.startsWith(C.SCRIPT, false) && Be(this.preprocessor.peek(C.SCRIPT.length))) {
            this._emitCodePoint(e);
            for(let t = 0; t < C.SCRIPT.length; t++){
                this._emitCodePoint(this._consume());
            }
            this.state = r.SCRIPT_DATA_ESCAPED;
        } else if (!this._ensureHibernation()) {
            this.state = r.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(e);
        }
    }
    _stateBeforeAttributeName(e) {
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.SOLIDUS:
            case s.GREATER_THAN_SIGN:
            case s.EOF:
                {
                    this.state = r.AFTER_ATTRIBUTE_NAME;
                    this._stateAfterAttributeName(e);
                    break;
                }
            case s.EQUALS_SIGN:
                {
                    this._err(o.unexpectedEqualsSignBeforeAttributeName);
                    this._createAttr("=");
                    this.state = r.ATTRIBUTE_NAME;
                    break;
                }
            default:
                this._createAttr("");
                this.state = r.ATTRIBUTE_NAME;
                this._stateAttributeName(e);
        }
    }
    _stateAttributeName(e) {
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
            case s.SOLIDUS:
            case s.GREATER_THAN_SIGN:
            case s.EOF:
                {
                    this._leaveAttrName();
                    this.state = r.AFTER_ATTRIBUTE_NAME;
                    this._stateAfterAttributeName(e);
                    break;
                }
            case s.EQUALS_SIGN:
                {
                    this._leaveAttrName();
                    this.state = r.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case s.QUOTATION_MARK:
            case s.APOSTROPHE:
            case s.LESS_THAN_SIGN:
                {
                    this._err(o.unexpectedCharacterInAttributeName);
                    this.currentAttr.name += String.fromCodePoint(e);
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.currentAttr.name += m;
                    break;
                }
            default:
                this.currentAttr.name += String.fromCodePoint(U(e) ? ee(e) : e);
        }
    }
    _stateAfterAttributeName(e) {
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.SOLIDUS:
                {
                    this.state = r.SELF_CLOSING_START_TAG;
                    break;
                }
            case s.EQUALS_SIGN:
                {
                    this.state = r.BEFORE_ATTRIBUTE_VALUE;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    this.emitCurrentTagToken();
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInTag);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._createAttr("");
                this.state = r.ATTRIBUTE_NAME;
                this._stateAttributeName(e);
        }
    }
    _stateBeforeAttributeValue(e) {
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.QUOTATION_MARK:
                {
                    this.state = r.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                    break;
                }
            case s.APOSTROPHE:
                {
                    this.state = r.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.missingAttributeValue);
                    this.state = r.DATA;
                    this.emitCurrentTagToken();
                    break;
                }
            default:
                this.state = r.ATTRIBUTE_VALUE_UNQUOTED;
                this._stateAttributeValueUnquoted(e);
        }
    }
    _stateAttributeValueDoubleQuoted(e) {
        switch(e){
            case s.QUOTATION_MARK:
                {
                    this.state = r.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case s.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.currentAttr.value += m;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInTag);
                    this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAttributeValueSingleQuoted(e) {
        switch(e){
            case s.APOSTROPHE:
                {
                    this.state = r.AFTER_ATTRIBUTE_VALUE_QUOTED;
                    break;
                }
            case s.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.currentAttr.value += m;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInTag);
                    this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAttributeValueUnquoted(e) {
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this._leaveAttrValue();
                    this.state = r.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case s.AMPERSAND:
                {
                    this._startCharacterReference();
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue();
                    this.state = r.DATA;
                    this.emitCurrentTagToken();
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    this.currentAttr.value += m;
                    break;
                }
            case s.QUOTATION_MARK:
            case s.APOSTROPHE:
            case s.LESS_THAN_SIGN:
            case s.EQUALS_SIGN:
            case s.GRAVE_ACCENT:
                {
                    this._err(o.unexpectedCharacterInUnquotedAttributeValue);
                    this.currentAttr.value += String.fromCodePoint(e);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInTag);
                    this._emitEOFToken();
                    break;
                }
            default:
                this.currentAttr.value += String.fromCodePoint(e);
        }
    }
    _stateAfterAttributeValueQuoted(e) {
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this._leaveAttrValue();
                    this.state = r.BEFORE_ATTRIBUTE_NAME;
                    break;
                }
            case s.SOLIDUS:
                {
                    this._leaveAttrValue();
                    this.state = r.SELF_CLOSING_START_TAG;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._leaveAttrValue();
                    this.state = r.DATA;
                    this.emitCurrentTagToken();
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInTag);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingWhitespaceBetweenAttributes);
                this.state = r.BEFORE_ATTRIBUTE_NAME;
                this._stateBeforeAttributeName(e);
        }
    }
    _stateSelfClosingStartTag(e) {
        switch(e){
            case s.GREATER_THAN_SIGN:
                {
                    let t = this.currentToken;
                    t.selfClosing = true;
                    this.state = r.DATA;
                    this.emitCurrentTagToken();
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInTag);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.unexpectedSolidusInTag);
                this.state = r.BEFORE_ATTRIBUTE_NAME;
                this._stateBeforeAttributeName(e);
        }
    }
    _stateBogusComment(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    this.emitCurrentComment(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this.emitCurrentComment(currentToken);
                    this._emitEOFToken();
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.data += m;
                    break;
                }
            default:
                currentToken.data += String.fromCodePoint(e);
        }
    }
    _stateMarkupDeclarationOpen(e) {
        if (this._consumeSequenceIfMatch(C.DASH_DASH, true)) {
            this._createCommentToken(C.DASH_DASH.length + 1);
            this.state = r.COMMENT_START;
        } else if (this._consumeSequenceIfMatch(C.DOCTYPE, false)) {
            this.currentLocation = this.getCurrentLocation(C.DOCTYPE.length + 1);
            this.state = r.DOCTYPE;
        } else if (this._consumeSequenceIfMatch(C.CDATA_START, true)) {
            if (this.inForeignNode) {
                this.state = r.CDATA_SECTION;
            } else {
                this._err(o.cdataInHtmlContent);
                this._createCommentToken(C.CDATA_START.length + 1);
                this.currentToken.data = "[CDATA[";
                this.state = r.BOGUS_COMMENT;
            }
        } else if (!this._ensureHibernation()) {
            this._err(o.incorrectlyOpenedComment);
            this._createCommentToken(2);
            this.state = r.BOGUS_COMMENT;
            this._stateBogusComment(e);
        }
    }
    _stateCommentStart(e) {
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.COMMENT_START_DASH;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.abruptClosingOfEmptyComment);
                    this.state = r.DATA;
                    let t = this.currentToken;
                    this.emitCurrentComment(t);
                    break;
                }
            default:
                this.state = r.COMMENT;
                this._stateComment(e);
        }
    }
    _stateCommentStartDash(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.COMMENT_END;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.abruptClosingOfEmptyComment);
                    this.state = r.DATA;
                    this.emitCurrentComment(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInComment);
                    this.emitCurrentComment(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.data += "-";
                this.state = r.COMMENT;
                this._stateComment(e);
        }
    }
    _stateComment(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.COMMENT_END_DASH;
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    currentToken.data += "<";
                    this.state = r.COMMENT_LESS_THAN_SIGN;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.data += m;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInComment);
                    this.emitCurrentComment(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.data += String.fromCodePoint(e);
        }
    }
    _stateCommentLessThanSign(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.EXCLAMATION_MARK:
                {
                    currentToken.data += "!";
                    this.state = r.COMMENT_LESS_THAN_SIGN_BANG;
                    break;
                }
            case s.LESS_THAN_SIGN:
                {
                    currentToken.data += "<";
                    break;
                }
            default:
                this.state = r.COMMENT;
                this._stateComment(e);
        }
    }
    _stateCommentLessThanSignBang(e) {
        if (e === s.HYPHEN_MINUS) {
            this.state = r.COMMENT_LESS_THAN_SIGN_BANG_DASH;
        } else {
            this.state = r.COMMENT;
            this._stateComment(e);
        }
    }
    _stateCommentLessThanSignBangDash(e) {
        if (e === s.HYPHEN_MINUS) {
            this.state = r.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
        } else {
            this.state = r.COMMENT_END_DASH;
            this._stateCommentEndDash(e);
        }
    }
    _stateCommentLessThanSignBangDashDash(e) {
        if (e !== s.GREATER_THAN_SIGN && e !== s.EOF) {
            this._err(o.nestedComment);
        }
        this.state = r.COMMENT_END;
        this._stateCommentEnd(e);
    }
    _stateCommentEndDash(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    this.state = r.COMMENT_END;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInComment);
                    this.emitCurrentComment(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.data += "-";
                this.state = r.COMMENT;
                this._stateComment(e);
        }
    }
    _stateCommentEnd(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    this.emitCurrentComment(currentToken);
                    break;
                }
            case s.EXCLAMATION_MARK:
                {
                    this.state = r.COMMENT_END_BANG;
                    break;
                }
            case s.HYPHEN_MINUS:
                {
                    currentToken.data += "-";
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInComment);
                    this.emitCurrentComment(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.data += "--";
                this.state = r.COMMENT;
                this._stateComment(e);
        }
    }
    _stateCommentEndBang(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.HYPHEN_MINUS:
                {
                    currentToken.data += "--!";
                    this.state = r.COMMENT_END_DASH;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.incorrectlyClosedComment);
                    this.state = r.DATA;
                    this.emitCurrentComment(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInComment);
                    this.emitCurrentComment(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.data += "--!";
                this.state = r.COMMENT;
                this._stateComment(e);
        }
    }
    _stateDoctype(e) {
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this.state = r.BEFORE_DOCTYPE_NAME;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.BEFORE_DOCTYPE_NAME;
                    this._stateBeforeDoctypeName(e);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    this._createDoctypeToken(null);
                    let t = this.currentToken;
                    t.forceQuirks = true;
                    this.emitCurrentDoctype(t);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingWhitespaceBeforeDoctypeName);
                this.state = r.BEFORE_DOCTYPE_NAME;
                this._stateBeforeDoctypeName(e);
        }
    }
    _stateBeforeDoctypeName(e) {
        if (U(e)) {
            this._createDoctypeToken(String.fromCharCode(ee(e)));
            this.state = r.DOCTYPE_NAME;
        } else {
            switch(e){
                case s.SPACE:
                case s.LINE_FEED:
                case s.TABULATION:
                case s.FORM_FEED:
                    break;
                case s.NULL:
                    {
                        this._err(o.unexpectedNullCharacter);
                        this._createDoctypeToken(m);
                        this.state = r.DOCTYPE_NAME;
                        break;
                    }
                case s.GREATER_THAN_SIGN:
                    {
                        this._err(o.missingDoctypeName);
                        this._createDoctypeToken(null);
                        let t = this.currentToken;
                        t.forceQuirks = true;
                        this.emitCurrentDoctype(t);
                        this.state = r.DATA;
                        break;
                    }
                case s.EOF:
                    {
                        this._err(o.eofInDoctype);
                        this._createDoctypeToken(null);
                        let t = this.currentToken;
                        t.forceQuirks = true;
                        this.emitCurrentDoctype(t);
                        this._emitEOFToken();
                        break;
                    }
                default:
                    this._createDoctypeToken(String.fromCodePoint(e));
                    this.state = r.DOCTYPE_NAME;
            }
        }
    }
    _stateDoctypeName(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this.state = r.AFTER_DOCTYPE_NAME;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    this.emitCurrentDoctype(currentToken);
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.name += m;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.name += String.fromCodePoint(U(e) ? ee(e) : e);
        }
    }
    _stateAfterDoctypeName(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    this.emitCurrentDoctype(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                if (this._consumeSequenceIfMatch(C.PUBLIC, false)) {
                    this.state = r.AFTER_DOCTYPE_PUBLIC_KEYWORD;
                } else if (this._consumeSequenceIfMatch(C.SYSTEM, false)) {
                    this.state = r.AFTER_DOCTYPE_SYSTEM_KEYWORD;
                } else if (!this._ensureHibernation()) {
                    this._err(o.invalidCharacterSequenceAfterDoctypeName);
                    currentToken.forceQuirks = true;
                    this.state = r.BOGUS_DOCTYPE;
                    this._stateBogusDoctype(e);
                }
        }
    }
    _stateAfterDoctypePublicKeyword(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this.state = r.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case s.QUOTATION_MARK:
                {
                    this._err(o.missingWhitespaceAfterDoctypePublicKeyword);
                    currentToken.publicId = "";
                    this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case s.APOSTROPHE:
                {
                    this._err(o.missingWhitespaceAfterDoctypePublicKeyword);
                    currentToken.publicId = "";
                    this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.missingDoctypePublicIdentifier);
                    currentToken.forceQuirks = true;
                    this.state = r.DATA;
                    this.emitCurrentDoctype(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingQuoteBeforeDoctypePublicIdentifier);
                currentToken.forceQuirks = true;
                this.state = r.BOGUS_DOCTYPE;
                this._stateBogusDoctype(e);
        }
    }
    _stateBeforeDoctypePublicIdentifier(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.QUOTATION_MARK:
                {
                    currentToken.publicId = "";
                    this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case s.APOSTROPHE:
                {
                    currentToken.publicId = "";
                    this.state = r.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.missingDoctypePublicIdentifier);
                    currentToken.forceQuirks = true;
                    this.state = r.DATA;
                    this.emitCurrentDoctype(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingQuoteBeforeDoctypePublicIdentifier);
                currentToken.forceQuirks = true;
                this.state = r.BOGUS_DOCTYPE;
                this._stateBogusDoctype(e);
        }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.QUOTATION_MARK:
                {
                    this.state = r.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.publicId += m;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.abruptDoctypePublicIdentifier);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this.state = r.DATA;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.publicId += String.fromCodePoint(e);
        }
    }
    _stateDoctypePublicIdentifierSingleQuoted(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.APOSTROPHE:
                {
                    this.state = r.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.publicId += m;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.abruptDoctypePublicIdentifier);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this.state = r.DATA;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.publicId += String.fromCodePoint(e);
        }
    }
    _stateAfterDoctypePublicIdentifier(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this.state = r.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    this.emitCurrentDoctype(currentToken);
                    break;
                }
            case s.QUOTATION_MARK:
                {
                    this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case s.APOSTROPHE:
                {
                    this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
                currentToken.forceQuirks = true;
                this.state = r.BOGUS_DOCTYPE;
                this._stateBogusDoctype(e);
        }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(currentToken);
                    this.state = r.DATA;
                    break;
                }
            case s.QUOTATION_MARK:
                {
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case s.APOSTROPHE:
                {
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
                currentToken.forceQuirks = true;
                this.state = r.BOGUS_DOCTYPE;
                this._stateBogusDoctype(e);
        }
    }
    _stateAfterDoctypeSystemKeyword(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                {
                    this.state = r.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case s.QUOTATION_MARK:
                {
                    this._err(o.missingWhitespaceAfterDoctypeSystemKeyword);
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case s.APOSTROPHE:
                {
                    this._err(o.missingWhitespaceAfterDoctypeSystemKeyword);
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.missingDoctypeSystemIdentifier);
                    currentToken.forceQuirks = true;
                    this.state = r.DATA;
                    this.emitCurrentDoctype(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
                currentToken.forceQuirks = true;
                this.state = r.BOGUS_DOCTYPE;
                this._stateBogusDoctype(e);
        }
    }
    _stateBeforeDoctypeSystemIdentifier(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.QUOTATION_MARK:
                {
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                    break;
                }
            case s.APOSTROPHE:
                {
                    currentToken.systemId = "";
                    this.state = r.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.missingDoctypeSystemIdentifier);
                    currentToken.forceQuirks = true;
                    this.state = r.DATA;
                    this.emitCurrentDoctype(currentToken);
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.missingQuoteBeforeDoctypeSystemIdentifier);
                currentToken.forceQuirks = true;
                this.state = r.BOGUS_DOCTYPE;
                this._stateBogusDoctype(e);
        }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.QUOTATION_MARK:
                {
                    this.state = r.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.systemId += m;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.abruptDoctypeSystemIdentifier);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this.state = r.DATA;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.systemId += String.fromCodePoint(e);
        }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.APOSTROPHE:
                {
                    this.state = r.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    currentToken.systemId += m;
                    break;
                }
            case s.GREATER_THAN_SIGN:
                {
                    this._err(o.abruptDoctypeSystemIdentifier);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this.state = r.DATA;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                currentToken.systemId += String.fromCodePoint(e);
        }
    }
    _stateAfterDoctypeSystemIdentifier(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.SPACE:
            case s.LINE_FEED:
            case s.TABULATION:
            case s.FORM_FEED:
                break;
            case s.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(currentToken);
                    this.state = r.DATA;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInDoctype);
                    currentToken.forceQuirks = true;
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._err(o.unexpectedCharacterAfterDoctypeSystemIdentifier);
                this.state = r.BOGUS_DOCTYPE;
                this._stateBogusDoctype(e);
        }
    }
    _stateBogusDoctype(e) {
        let currentToken = this.currentToken;
        switch(e){
            case s.GREATER_THAN_SIGN:
                {
                    this.emitCurrentDoctype(currentToken);
                    this.state = r.DATA;
                    break;
                }
            case s.NULL:
                {
                    this._err(o.unexpectedNullCharacter);
                    break;
                }
            case s.EOF:
                {
                    this.emitCurrentDoctype(currentToken);
                    this._emitEOFToken();
                    break;
                }
            default:
        }
    }
    _stateCdataSection(e) {
        switch(e){
            case s.RIGHT_SQUARE_BRACKET:
                {
                    this.state = r.CDATA_SECTION_BRACKET;
                    break;
                }
            case s.EOF:
                {
                    this._err(o.eofInCdata);
                    this._emitEOFToken();
                    break;
                }
            default:
                this._emitCodePoint(e);
        }
    }
    _stateCdataSectionBracket(e) {
        if (e === s.RIGHT_SQUARE_BRACKET) {
            this.state = r.CDATA_SECTION_END;
        } else {
            this._emitChars("]");
            this.state = r.CDATA_SECTION;
            this._stateCdataSection(e);
        }
    }
    _stateCdataSectionEnd(e) {
        switch(e){
            case s.GREATER_THAN_SIGN:
                {
                    this.state = r.DATA;
                    break;
                }
            case s.RIGHT_SQUARE_BRACKET:
                {
                    this._emitChars("]");
                    break;
                }
            default:
                this._emitChars("]]");
                this.state = r.CDATA_SECTION;
                this._stateCdataSection(e);
        }
    }
    _stateCharacterReference() {
        let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
        if (e < 0) {
            if (this.preprocessor.lastChunkWritten) {
                e = this.entityDecoder.end();
            } else {
                this.active = false;
                this.preprocessor.pos = this.preprocessor.html.length - 1;
                this.consumedAfterSnapshot = 0;
                this.preprocessor.endOfChunkHit = true;
                return;
            }
        }
        if (e === 0) {
            this.preprocessor.pos = this.entityStartPos;
            this._flushCodePointConsumedAsCharacterReference(s.AMPERSAND);
            this.state = !this._isCharacterReferenceInAttribute() && xe(this.preprocessor.peek(1)) ? r.AMBIGUOUS_AMPERSAND : this.returnState;
        } else {
            this.state = this.returnState;
        }
    }
    _stateAmbiguousAmpersand(e) {
        if (xe(e)) {
            this._flushCodePointConsumedAsCharacterReference(e);
        } else {
            if (e === s.SEMICOLON) {
                this._err(o.unknownNamedCharacterReference);
            }
            this.state = this.returnState;
            this._callState(e);
        }
    }
}
const ye = new Set([
    u.DD,
    u.DT,
    u.LI,
    u.OPTGROUP,
    u.OPTION,
    u.P,
    u.RB,
    u.RP,
    u.RT,
    u.RTC
]);
const He = new Set([
    ...ye,
    u.CAPTION,
    u.COLGROUP,
    u.TBODY,
    u.TD,
    u.TFOOT,
    u.TH,
    u.THEAD,
    u.TR
]);
const te = new Set([
    u.APPLET,
    u.CAPTION,
    u.HTML,
    u.MARQUEE,
    u.OBJECT,
    u.TABLE,
    u.TD,
    u.TEMPLATE,
    u.TH
]);
const Ut = new Set([
    ...te,
    u.OL,
    u.UL
]);
const Ft = new Set([
    ...te,
    u.BUTTON
]);
const Ue = new Set([
    u.ANNOTATION_XML,
    u.MI,
    u.MN,
    u.MO,
    u.MS,
    u.MTEXT
]);
const Fe = new Set([
    u.DESC,
    u.FOREIGN_OBJECT,
    u.TITLE
]);
const yt = new Set([
    u.TR,
    u.TEMPLATE,
    u.HTML
]);
const wt = new Set([
    u.TBODY,
    u.TFOOT,
    u.THEAD,
    u.TEMPLATE,
    u.HTML
]);
const Yt = new Set([
    u.TABLE,
    u.TEMPLATE,
    u.HTML
]);
const vt = new Set([
    u.TD,
    u.TH
]);
class he {
    get currentTmplContentOrNode() {
        if (this._isInTemplate()) {
            return this.treeAdapter.getTemplateContent(this.current);
        }
        return this.current;
    }
    constructor(e, t, a){
        this.treeAdapter = t;
        this.handler = a;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = u.UNKNOWN;
        this.current = e;
    }
    _indexOf(e) {
        return this.items.lastIndexOf(e, this.stackTop);
    }
    _isInTemplate() {
        return this.currentTagId === u.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === E.HTML;
    }
    _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
    }
    push(e, t) {
        this.stackTop++;
        this.items[this.stackTop] = e;
        this.current = e;
        this.tagIDs[this.stackTop] = t;
        this.currentTagId = t;
        if (this._isInTemplate()) {
            this.tmplCount++;
        }
        this.handler.onItemPush(e, t, true);
    }
    pop() {
        let current = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(current, true);
    }
    replace(e, t) {
        let a = this._indexOf(e);
        this.items[a] = t;
        if (a === this.stackTop) {
            this.current = t;
        }
    }
    insertAfter(e, t, a) {
        let n = this._indexOf(e) + 1;
        this.items.splice(n, 0, t);
        this.tagIDs.splice(n, 0, a);
        this.stackTop++;
        if (n === this.stackTop) {
            this._updateCurrentElement();
        }
        this.handler.onItemPush(this.current, this.currentTagId, n === this.stackTop);
    }
    popUntilTagNamePopped(e) {
        let t = this.stackTop + 1;
        do {
            t = this.tagIDs.lastIndexOf(e, t - 1);
        }while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== E.HTML)
        this.shortenToLength(t < 0 ? 0 : t);
    }
    shortenToLength(e) {
        while(this.stackTop >= e){
            let t = this.current;
            if (this.tmplCount > 0 && this._isInTemplate()) {
                this.tmplCount -= 1;
            }
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(t, this.stackTop < e);
        }
    }
    popUntilElementPopped(e) {
        let t = this._indexOf(e);
        this.shortenToLength(t < 0 ? 0 : t);
    }
    popUntilPopped(e, t) {
        let a = this._indexOfTagNames(e, t);
        this.shortenToLength(a < 0 ? 0 : a);
    }
    popUntilNumberedHeaderPopped() {
        this.popUntilPopped(H, E.HTML);
    }
    popUntilTableCellPopped() {
        this.popUntilPopped(vt, E.HTML);
    }
    popAllUpToHtmlElement() {
        this.tmplCount = 0;
        this.shortenToLength(1);
    }
    _indexOfTagNames(e, t) {
        for(let a = this.stackTop; a >= 0; a--){
            if (e.has(this.tagIDs[a]) && this.treeAdapter.getNamespaceURI(this.items[a]) === t) {
                return a;
            }
        }
        return -1;
    }
    clearBackTo(e, t) {
        let a = this._indexOfTagNames(e, t);
        this.shortenToLength(a + 1);
    }
    clearBackToTableContext() {
        this.clearBackTo(Yt, E.HTML);
    }
    clearBackToTableBodyContext() {
        this.clearBackTo(wt, E.HTML);
    }
    clearBackToTableRowContext() {
        this.clearBackTo(yt, E.HTML);
    }
    remove(e) {
        let t = this._indexOf(e);
        if (t >= 0) {
            if (t === this.stackTop) {
                this.pop();
            } else {
                this.items.splice(t, 1);
                this.tagIDs.splice(t, 1);
                this.stackTop--;
                this._updateCurrentElement();
                this.handler.onItemPop(e, false);
            }
        }
    }
    tryPeekProperlyNestedBodyElement() {
        if (this.stackTop >= 1 && this.tagIDs[1] === u.BODY) {
            return this.items[1];
        }
        return null;
    }
    contains(e) {
        return this._indexOf(e) > -1;
    }
    getCommonAncestor(e) {
        let t = this._indexOf(e) - 1;
        if (t >= 0) {
            return this.items[t];
        }
        return null;
    }
    isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === u.HTML;
    }
    hasInDynamicScope(e, t) {
        for(let a = this.stackTop; a >= 0; a--){
            let n = this.tagIDs[a];
            switch(this.treeAdapter.getNamespaceURI(this.items[a])){
                case E.HTML:
                    {
                        if (n === e) {
                            return true;
                        }
                        if (t.has(n)) {
                            return false;
                        }
                        break;
                    }
                case E.SVG:
                    {
                        if (Fe.has(n)) {
                            return false;
                        }
                        break;
                    }
                case E.MATHML:
                    {
                        if (Ue.has(n)) {
                            return false;
                        }
                        break;
                    }
            }
        }
        return true;
    }
    hasInScope(e) {
        return this.hasInDynamicScope(e, te);
    }
    hasInListItemScope(e) {
        return this.hasInDynamicScope(e, Ut);
    }
    hasInButtonScope(e) {
        return this.hasInDynamicScope(e, Ft);
    }
    hasNumberedHeaderInScope() {
        for(let e = this.stackTop; e >= 0; e--){
            let t = this.tagIDs[e];
            switch(this.treeAdapter.getNamespaceURI(this.items[e])){
                case E.HTML:
                    {
                        if (H.has(t)) {
                            return true;
                        }
                        if (te.has(t)) {
                            return false;
                        }
                        break;
                    }
                case E.SVG:
                    {
                        if (Fe.has(t)) {
                            return false;
                        }
                        break;
                    }
                case E.MATHML:
                    {
                        if (Ue.has(t)) {
                            return false;
                        }
                        break;
                    }
            }
        }
        return true;
    }
    hasInTableScope(e) {
        for(let t = this.stackTop; t >= 0; t--){
            if (this.treeAdapter.getNamespaceURI(this.items[t]) !== E.HTML) {
                continue;
            }
            switch(this.tagIDs[t]){
                case e:
                    return true;
                case u.TABLE:
                case u.HTML:
                    return false;
            }
        }
        return true;
    }
    hasTableBodyContextInTableScope() {
        for(let e = this.stackTop; e >= 0; e--){
            if (this.treeAdapter.getNamespaceURI(this.items[e]) !== E.HTML) {
                continue;
            }
            switch(this.tagIDs[e]){
                case u.TBODY:
                case u.THEAD:
                case u.TFOOT:
                    return true;
                case u.TABLE:
                case u.HTML:
                    return false;
            }
        }
        return true;
    }
    hasInSelectScope(e) {
        for(let t = this.stackTop; t >= 0; t--){
            if (this.treeAdapter.getNamespaceURI(this.items[t]) !== E.HTML) {
                continue;
            }
            switch(this.tagIDs[t]){
                case e:
                    return true;
                case u.OPTION:
                case u.OPTGROUP:
                    break;
                default:
                    return false;
            }
        }
        return true;
    }
    generateImpliedEndTags() {
        while(ye.has(this.currentTagId)){
            this.pop();
        }
    }
    generateImpliedEndTagsThoroughly() {
        while(He.has(this.currentTagId)){
            this.pop();
        }
    }
    generateImpliedEndTagsWithExclusion(e) {
        while(this.currentTagId !== e && He.has(this.currentTagId)){
            this.pop();
        }
    }
}
const L = {
    Marker: 0,
    0: "Marker",
    Element: 1,
    1: "Element"
};
const we = {
    type: L.Marker
};
class le {
    constructor(e){
        this.treeAdapter = e;
        this.entries = [];
        this.bookmark = null;
    }
    _getNoahArkConditionCandidates(e, t) {
        let a = [];
        let t_length = t.length;
        let d = this.treeAdapter.getTagName(e);
        let h = this.treeAdapter.getNamespaceURI(e);
        for(let idx = 0; idx < this.entries.length; idx++){
            let entry = this.entries[idx];
            if (entry.type === L.Marker) {
                break;
            }
            let { element } = entry;
            if (this.treeAdapter.getTagName(element) === d && this.treeAdapter.getNamespaceURI(element) === h) {
                let attrs = this.treeAdapter.getAttrList(element);
                if (attrs.length === t_length) {
                    a.push({
                        idx,
                        attrs
                    });
                }
            }
        }
        return a;
    }
    _ensureNoahArkCondition(e) {
        if (this.entries.length < 3) {
            return;
        }
        let t = this.treeAdapter.getAttrList(e);
        let a = this._getNoahArkConditionCandidates(e, t);
        if (a.length < 3) {
            return;
        }
        let n = new Map(t.map((h)=>[
                h.name,
                h.value
            ]));
        let d = 0;
        for (const l of a){
            if (l.attrs.every((_)=>n.get(_.name) === _.value)) {
                d += 1;
                if (d >= 3) {
                    this.entries.splice(l.idx, 1);
                }
            }
        }
    }
    insertMarker() {
        this.entries.unshift(we);
    }
    pushElement(element, t) {
        this._ensureNoahArkCondition(element);
        this.entries.unshift({
            type: L.Element,
            element,
            token: t
        });
    }
    insertElementAfterBookmark(element, t) {
        let a = this.entries.indexOf(this.bookmark);
        this.entries.splice(a, 0, {
            type: L.Element,
            element,
            token: t
        });
    }
    removeEntry(e) {
        let t = this.entries.indexOf(e);
        if (t >= 0) {
            this.entries.splice(t, 1);
        }
    }
    clearToLastMarker() {
        let e = this.entries.indexOf(we);
        if (e >= 0) {
            this.entries.splice(0, e + 1);
        } else {
            this.entries.length = 0;
        }
    }
    getElementEntryInScopeWithTagName(e) {
        let t = this.entries.find((a)=>a.type === L.Marker || this.treeAdapter.getTagName(a.element) === e);
        if (t && t.type === L.Element) {
            return t;
        }
        return null;
    }
    getElementEntry(e) {
        return this.entries.find((t)=>t.type === L.Element && t.element === e);
    }
}
var treeAdapter = {
    createDocument () {
        return {
            nodeName: "#document",
            mode: O.NO_QUIRKS,
            childNodes: []
        };
    },
    createDocumentFragment () {
        return {
            nodeName: "#document-fragment",
            childNodes: []
        };
    },
    createElement (e, namespaceURI, attrs) {
        return {
            nodeName: e,
            tagName: e,
            attrs,
            namespaceURI,
            childNodes: [],
            parentNode: null
        };
    },
    createCommentNode (data) {
        return {
            nodeName: "#comment",
            data,
            parentNode: null
        };
    },
    createTextNode (value) {
        return {
            nodeName: "#text",
            value,
            parentNode: null
        };
    },
    appendChild (e, t) {
        e.childNodes.push(t);
        t.parentNode = e;
    },
    insertBefore (e, t, a) {
        let n = e.childNodes.indexOf(a);
        e.childNodes.splice(n, 0, t);
        t.parentNode = e;
    },
    setTemplateContent (e, t) {
        e.content = t;
    },
    getTemplateContent (e) {
        return e.content;
    },
    setDocumentType (e, t, publicId, systemId) {
        let d = e.childNodes.find((h)=>h.nodeName === "#documentType");
        if (d) {
            d.name = t;
            d.publicId = publicId;
            d.systemId = systemId;
        } else {
            let h = {
                nodeName: "#documentType",
                name: t,
                publicId,
                systemId,
                parentNode: null
            };
            treeAdapter.appendChild(e, h);
        }
    },
    setDocumentMode (e, t) {
        e.mode = t;
    },
    getDocumentMode (e) {
        return e.mode;
    },
    detachNode (e) {
        if (e.parentNode) {
            let t = e.parentNode.childNodes.indexOf(e);
            e.parentNode.childNodes.splice(t, 1);
            e.parentNode = null;
        }
    },
    insertText (e, t) {
        if (e.childNodes.length > 0) {
            let a = e.childNodes[e.childNodes.length - 1];
            if (treeAdapter.isTextNode(a)) {
                a.value += t;
                return;
            }
        }
        treeAdapter.appendChild(e, treeAdapter.createTextNode(t));
    },
    insertTextBefore (e, t, a) {
        let n = e.childNodes[e.childNodes.indexOf(a) - 1];
        if (n && treeAdapter.isTextNode(n)) {
            n.value += t;
        } else {
            treeAdapter.insertBefore(e, treeAdapter.createTextNode(t), a);
        }
    },
    adoptAttributes (e, t) {
        let a = new Set(e.attrs.map((n)=>n.name));
        for(let n = 0; n < t.length; n++){
            if (!a.has(t[n].name)) {
                e.attrs.push(t[n]);
            }
        }
    },
    getFirstChild (e) {
        return e.childNodes[0];
    },
    getChildNodes (e) {
        return e.childNodes;
    },
    getParentNode (e) {
        return e.parentNode;
    },
    getAttrList (e) {
        return e.attrs;
    },
    getTagName (e) {
        return e.tagName;
    },
    getNamespaceURI (e) {
        return e.namespaceURI;
    },
    getTextNodeContent (e) {
        return e.value;
    },
    getCommentNodeContent (e) {
        return e.data;
    },
    getDocumentTypeNodeName (e) {
        return e.name;
    },
    getDocumentTypeNodePublicId (e) {
        return e.publicId;
    },
    getDocumentTypeNodeSystemId (e) {
        return e.systemId;
    },
    isTextNode (e) {
        return e.nodeName === "#text";
    },
    isCommentNode (e) {
        return e.nodeName === "#comment";
    },
    isDocumentTypeNode (e) {
        return e.nodeName === "#documentType";
    },
    isElementNode (e) {
        return Object.prototype.hasOwnProperty.call(e, "tagName");
    },
    setNodeSourceCodeLocation (e, t) {
        e.sourceCodeLocation = t;
    },
    getNodeSourceCodeLocation (e) {
        return e.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation (e, t) {
        e.sourceCodeLocation = {
            ...e.sourceCodeLocation,
            ...t
        };
    }
};
const ve = "html";
const Qt = "about:legacy-compat";
const Gt = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
const Qe = [
    "+//silmaril//dtd html pro v0r11 19970101//",
    "-//as//dtd html 3.0 aswedit + extensions//",
    "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
    "-//ietf//dtd html 2.0 level 1//",
    "-//ietf//dtd html 2.0 level 2//",
    "-//ietf//dtd html 2.0 strict level 1//",
    "-//ietf//dtd html 2.0 strict level 2//",
    "-//ietf//dtd html 2.0 strict//",
    "-//ietf//dtd html 2.0//",
    "-//ietf//dtd html 2.1e//",
    "-//ietf//dtd html 3.0//",
    "-//ietf//dtd html 3.2 final//",
    "-//ietf//dtd html 3.2//",
    "-//ietf//dtd html 3//",
    "-//ietf//dtd html level 0//",
    "-//ietf//dtd html level 1//",
    "-//ietf//dtd html level 2//",
    "-//ietf//dtd html level 3//",
    "-//ietf//dtd html strict level 0//",
    "-//ietf//dtd html strict level 1//",
    "-//ietf//dtd html strict level 2//",
    "-//ietf//dtd html strict level 3//",
    "-//ietf//dtd html strict//",
    "-//ietf//dtd html//",
    "-//metrius//dtd metrius presentational//",
    "-//microsoft//dtd internet explorer 2.0 html strict//",
    "-//microsoft//dtd internet explorer 2.0 html//",
    "-//microsoft//dtd internet explorer 2.0 tables//",
    "-//microsoft//dtd internet explorer 3.0 html strict//",
    "-//microsoft//dtd internet explorer 3.0 html//",
    "-//microsoft//dtd internet explorer 3.0 tables//",
    "-//netscape comm. corp.//dtd html//",
    "-//netscape comm. corp.//dtd strict html//",
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    "-//sq//dtd html 2.0 hotmetal + extensions//",
    "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
    "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
    "-//spyglass//dtd html 2.0 extended//",
    "-//sun microsystems corp.//dtd hotjava html//",
    "-//sun microsystems corp.//dtd hotjava strict html//",
    "-//w3c//dtd html 3 1995-03-24//",
    "-//w3c//dtd html 3.2 draft//",
    "-//w3c//dtd html 3.2 final//",
    "-//w3c//dtd html 3.2//",
    "-//w3c//dtd html 3.2s draft//",
    "-//w3c//dtd html 4.0 frameset//",
    "-//w3c//dtd html 4.0 transitional//",
    "-//w3c//dtd html experimental 19960712//",
    "-//w3c//dtd html experimental 970421//",
    "-//w3c//dtd w3 html//",
    "-//w3o//dtd w3 html 3.0//",
    "-//webtechs//dtd mozilla html 2.0//",
    "-//webtechs//dtd mozilla html//"
];
const Wt = [
    ...Qe,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//"
];
const qt = new Set([
    "-//w3o//dtd w3 html strict 3.0//en//",
    "-/w3c/dtd html 4.0 transitional/en",
    "html"
]);
const Ge = [
    "-//w3c//dtd xhtml 1.0 frameset//",
    "-//w3c//dtd xhtml 1.0 transitional//"
];
const Xt = [
    ...Ge,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//"
];
function Ye(publicId, t) {
    return t.some((a)=>publicId.startsWith(a));
}
function We(e) {
    return e.name === ve && e.publicId === null && (e.systemId === null || e.systemId === Qt);
}
function qe(e) {
    if (e.name !== ve) {
        return O.QUIRKS;
    }
    let { systemId } = e;
    if (systemId && systemId.toLowerCase() === Gt) {
        return O.QUIRKS;
    }
    let { publicId } = e;
    if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (qt.has(publicId)) {
            return O.QUIRKS;
        }
        let n = systemId === null ? Wt : Qe;
        if (Ye(publicId, n)) {
            return O.QUIRKS;
        }
        n = systemId === null ? Ge : Xt;
        if (Ye(publicId, n)) {
            return O.LIMITED_QUIRKS;
        }
    }
    return O.NO_QUIRKS;
}
const Xe = {
    TEXT_HTML: "text/html",
    APPLICATION_XML: "application/xhtml+xml"
};
const Vt = "definitionurl";
const zt = "definitionURL";
const jt = new Map([
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((e)=>[
        e.toLowerCase(),
        e
    ]));
const Jt = new Map([
    [
        "xlink:actuate",
        {
            prefix: "xlink",
            name: "actuate",
            namespace: E.XLINK
        }
    ],
    [
        "xlink:arcrole",
        {
            prefix: "xlink",
            name: "arcrole",
            namespace: E.XLINK
        }
    ],
    [
        "xlink:href",
        {
            prefix: "xlink",
            name: "href",
            namespace: E.XLINK
        }
    ],
    [
        "xlink:role",
        {
            prefix: "xlink",
            name: "role",
            namespace: E.XLINK
        }
    ],
    [
        "xlink:show",
        {
            prefix: "xlink",
            name: "show",
            namespace: E.XLINK
        }
    ],
    [
        "xlink:title",
        {
            prefix: "xlink",
            name: "title",
            namespace: E.XLINK
        }
    ],
    [
        "xlink:type",
        {
            prefix: "xlink",
            name: "type",
            namespace: E.XLINK
        }
    ],
    [
        "xml:lang",
        {
            prefix: "xml",
            name: "lang",
            namespace: E.XML
        }
    ],
    [
        "xml:space",
        {
            prefix: "xml",
            name: "space",
            namespace: E.XML
        }
    ],
    [
        "xmlns",
        {
            prefix: "",
            name: "xmlns",
            namespace: E.XMLNS
        }
    ],
    [
        "xmlns:xlink",
        {
            prefix: "xmlns",
            name: "xlink",
            namespace: E.XMLNS
        }
    ]
]);
const $t = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((e)=>[
        e.toLowerCase(),
        e
    ]));
const Zt = new Set([
    u.B,
    u.BIG,
    u.BLOCKQUOTE,
    u.BODY,
    u.BR,
    u.CENTER,
    u.CODE,
    u.DD,
    u.DIV,
    u.DL,
    u.DT,
    u.EM,
    u.EMBED,
    u.H1,
    u.H2,
    u.H3,
    u.H4,
    u.H5,
    u.H6,
    u.HEAD,
    u.HR,
    u.I,
    u.IMG,
    u.LI,
    u.LISTING,
    u.MENU,
    u.META,
    u.NOBR,
    u.OL,
    u.P,
    u.PRE,
    u.RUBY,
    u.S,
    u.SMALL,
    u.SPAN,
    u.STRONG,
    u.STRIKE,
    u.SUB,
    u.SUP,
    u.TABLE,
    u.TT,
    u.U,
    u.UL,
    u.VAR
]);
function Ke(e) {
    let e_tagID = e.tagID;
    return e_tagID === u.FONT && e.attrs.some(({ name })=>name === g.COLOR || name === g.SIZE || name === g.FACE) || Zt.has(e_tagID);
}
function fe(e) {
    for(let t = 0; t < e.attrs.length; t++){
        if (e.attrs[t].name === Vt) {
            e.attrs[t].name = zt;
            break;
        }
    }
}
function me(e) {
    for(let t = 0; t < e.attrs.length; t++){
        let a = jt.get(e.attrs[t].name);
        if (a != null) {
            e.attrs[t].name = a;
        }
    }
}
function ue(e) {
    for(let t = 0; t < e.attrs.length; t++){
        let a = Jt.get(e.attrs[t].name);
        if (a) {
            e.attrs[t].prefix = a.prefix;
            e.attrs[t].name = a.name;
            e.attrs[t].namespace = a.namespace;
        }
    }
}
function Ve(e) {
    let t = $t.get(e.tagName);
    if (t != null) {
        e.tagName = t;
        e.tagID = x(e.tagName);
    }
}
function eu(e, t) {
    return t === E.MATHML && (e === u.MI || e === u.MO || e === u.MN || e === u.MS || e === u.MTEXT);
}
function tu(e, t, a) {
    if (t === E.MATHML && e === u.ANNOTATION_XML) {
        for(let n = 0; n < a.length; n++){
            if (a[n].name === g.ENCODING) {
                let d = a[n].value.toLowerCase();
                return d === Xe.TEXT_HTML || d === Xe.APPLICATION_XML;
            }
        }
    }
    return t === E.SVG && (e === u.FOREIGN_OBJECT || e === u.DESC || e === u.TITLE);
}
function ze(e, t, a, n) {
    return (!n || n === E.HTML) && tu(e, t, a) || (!n || n === E.MATHML) && eu(e, t);
}
const uu = "hidden";
const au = 8;
const su = 3;
const i = {
    INITIAL: 0,
    0: "INITIAL",
    BEFORE_HTML: 1,
    1: "BEFORE_HTML",
    BEFORE_HEAD: 2,
    2: "BEFORE_HEAD",
    IN_HEAD: 3,
    3: "IN_HEAD",
    IN_HEAD_NO_SCRIPT: 4,
    4: "IN_HEAD_NO_SCRIPT",
    AFTER_HEAD: 5,
    5: "AFTER_HEAD",
    IN_BODY: 6,
    6: "IN_BODY",
    TEXT: 7,
    7: "TEXT",
    IN_TABLE: 8,
    8: "IN_TABLE",
    IN_TABLE_TEXT: 9,
    9: "IN_TABLE_TEXT",
    IN_CAPTION: 10,
    10: "IN_CAPTION",
    IN_COLUMN_GROUP: 11,
    11: "IN_COLUMN_GROUP",
    IN_TABLE_BODY: 12,
    12: "IN_TABLE_BODY",
    IN_ROW: 13,
    13: "IN_ROW",
    IN_CELL: 14,
    14: "IN_CELL",
    IN_SELECT: 15,
    15: "IN_SELECT",
    IN_SELECT_IN_TABLE: 16,
    16: "IN_SELECT_IN_TABLE",
    IN_TEMPLATE: 17,
    17: "IN_TEMPLATE",
    AFTER_BODY: 18,
    18: "AFTER_BODY",
    IN_FRAMESET: 19,
    19: "IN_FRAMESET",
    AFTER_FRAMESET: 20,
    20: "AFTER_FRAMESET",
    AFTER_AFTER_BODY: 21,
    21: "AFTER_AFTER_BODY",
    AFTER_AFTER_FRAMESET: 22,
    22: "AFTER_AFTER_FRAMESET"
};
const ru = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1
};
const et = new Set([
    u.TABLE,
    u.TBODY,
    u.TFOOT,
    u.THEAD,
    u.TR
]);
const Je = {
    scriptingEnabled: true,
    sourceCodeLocationInfo: false,
    treeAdapter,
    onParseError: null
};
class q {
    constructor(e, t, a = null, n = null){
        this.fragmentContext = a;
        this.scriptHandler = n;
        this.currentToken = null;
        this.stopped = false;
        this.insertionMode = i.INITIAL;
        this.originalInsertionMode = i.INITIAL;
        this.headElement = null;
        this.formElement = null;
        this.currentNotInHTML = false;
        this.tmplInsertionModeStack = [];
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
        this.options = {
            ...Je,
            ...e
        };
        this.treeAdapter = this.options.treeAdapter;
        this.onParseError = this.options.onParseError;
        if (this.onParseError) {
            this.options.sourceCodeLocationInfo = true;
        }
        this.document = t ?? this.treeAdapter.createDocument();
        this.tokenizer = new uSt(this.options, this);
        this.activeFormattingElements = new le(this.treeAdapter);
        this.fragmentContextID = a ? x(this.treeAdapter.getTagName(a)) : u.UNKNOWN;
        this._setContextModes(a ?? this.document, this.fragmentContextID);
        this.openElements = new he(this.document, this.treeAdapter, this);
    }
    static parse(e, t) {
        let a = new this(t);
        a.tokenizer.write(e, true);
        return a.document;
    }
    static getFragmentParser(e, t) {
        let a = {
            ...Je,
            ...t
        };
        if (!(e !== null && e !== undefined)) {
            e = a.treeAdapter.createElement(c.TEMPLATE, E.HTML, []);
        }
        let n = a.treeAdapter.createElement("documentmock", E.HTML, []);
        let d = new this(a, n, e);
        if (d.fragmentContextID === u.TEMPLATE) {
            d.tmplInsertionModeStack.unshift(i.IN_TEMPLATE);
        }
        d._initTokenizerForFragmentParsing();
        d._insertFakeRootElement();
        d._resetInsertionMode();
        d._findFormInFragmentContext();
        return d;
    }
    getFragment() {
        let e = this.treeAdapter.getFirstChild(this.document);
        let t = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(e, t);
        return t;
    }
    _err(e, t, a) {
        if (!this.onParseError) {
            return;
        }
        let d = e.location ?? ru;
        let h = {
            code: t,
            startLine: d.startLine,
            startCol: d.startCol,
            startOffset: d.startOffset,
            endLine: a ? d.startLine : d.endLine,
            endCol: a ? d.startCol : d.endCol,
            endOffset: a ? d.startOffset : d.endOffset
        };
        this.onParseError(h);
    }
    onItemPush(e, t, a) {
        this.treeAdapter.onItemPush?.(e);
        if (a && this.openElements.stackTop > 0) {
            this._setContextModes(e, t);
        }
    }
    onItemPop(e, t) {
        if (this.options.sourceCodeLocationInfo) {
            this._setEndLocation(e, this.currentToken);
        }
        this.treeAdapter.onItemPop?.(e, this.openElements.current);
        if (t) {
            let d;
            let h;
            if (this.openElements.stackTop === 0 && this.fragmentContext) {
                d = this.fragmentContext;
                h = this.fragmentContextID;
            } else {
                ({ current: d, currentTagId: h } = this.openElements);
            }
            this._setContextModes(d, h);
        }
    }
    _setContextModes(e, t) {
        let a = e === this.document || this.treeAdapter.getNamespaceURI(e) === E.HTML;
        this.currentNotInHTML = !a;
        this.tokenizer.inForeignNode = !a && !this._isIntegrationPoint(t, e);
    }
    _switchToTextParsing(e, t) {
        this._insertElement(e, E.HTML);
        this.tokenizer.state = t;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = i.TEXT;
    }
    switchToPlaintextParsing() {
        this.insertionMode = i.TEXT;
        this.originalInsertionMode = i.IN_BODY;
        this.tokenizer.state = kA.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
            return this.fragmentContext;
        }
        return this.openElements.current;
    }
    _findFormInFragmentContext() {
        let fragmentContext = this.fragmentContext;
        while(fragmentContext){
            if (this.treeAdapter.getTagName(fragmentContext) === c.FORM) {
                this.formElement = fragmentContext;
                break;
            }
            fragmentContext = this.treeAdapter.getParentNode(fragmentContext);
        }
    }
    _initTokenizerForFragmentParsing() {
        if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== E.HTML) {
            return;
        }
        switch(this.fragmentContextID){
            case u.TITLE:
            case u.TEXTAREA:
                {
                    this.tokenizer.state = kA.RCDATA;
                    break;
                }
            case u.STYLE:
            case u.XMP:
            case u.IFRAME:
            case u.NOEMBED:
            case u.NOFRAMES:
            case u.NOSCRIPT:
                {
                    this.tokenizer.state = kA.RAWTEXT;
                    break;
                }
            case u.SCRIPT:
                {
                    this.tokenizer.state = kA.SCRIPT_DATA;
                    break;
                }
            case u.PLAINTEXT:
                {
                    this.tokenizer.state = kA.PLAINTEXT;
                    break;
                }
            default:
        }
    }
    _setDocumentType(e) {
        let t = e.name || "";
        let a = e.publicId || "";
        let n = e.systemId || "";
        this.treeAdapter.setDocumentType(this.document, t, a, n);
        if (e.location) {
            let h = this.treeAdapter.getChildNodes(this.document).find((l)=>this.treeAdapter.isDocumentTypeNode(l));
            if (h) {
                this.treeAdapter.setNodeSourceCodeLocation(h, e.location);
            }
        }
    }
    _attachElementToTree(e, startTag) {
        if (this.options.sourceCodeLocationInfo) {
            let a = startTag && {
                ...startTag,
                startTag
            };
            this.treeAdapter.setNodeSourceCodeLocation(e, a);
        }
        if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentElement(e);
        } else {
            let a = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(a, e);
        }
    }
    _appendElement(e, t) {
        let a = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(a, e.location);
    }
    _insertElement(e, t) {
        let a = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(a, e.location);
        this.openElements.push(a, e.tagID);
    }
    _insertFakeElement(e, t) {
        let a = this.treeAdapter.createElement(e, E.HTML, []);
        this._attachElementToTree(a, null);
        this.openElements.push(a, t);
    }
    _insertTemplate(e) {
        let t = this.treeAdapter.createElement(e.tagName, E.HTML, e.attrs);
        let a = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(t, a);
        this._attachElementToTree(t, e.location);
        this.openElements.push(t, e.tagID);
        if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(a, null);
        }
    }
    _insertFakeRootElement() {
        let e = this.treeAdapter.createElement(c.HTML, E.HTML, []);
        if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(e, null);
        }
        this.treeAdapter.appendChild(this.openElements.current, e);
        this.openElements.push(e, u.HTML);
    }
    _appendCommentNode(e, t) {
        let a = this.treeAdapter.createCommentNode(e.data);
        this.treeAdapter.appendChild(t, a);
        if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(a, e.location);
        }
    }
    _insertCharacters(e) {
        let t;
        let a;
        if (this._shouldFosterParentOnInsertion()) {
            ({ parent: t, beforeElement: a } = this._findFosterParentingLocation());
            if (a) {
                this.treeAdapter.insertTextBefore(t, e.chars, a);
            } else {
                this.treeAdapter.insertText(t, e.chars);
            }
        } else {
            t = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.insertText(t, e.chars);
        }
        if (!e.location) {
            return;
        }
        let n = this.treeAdapter.getChildNodes(t);
        let d = a ? n.lastIndexOf(a) : n.length;
        let h = n[d - 1];
        if (this.treeAdapter.getNodeSourceCodeLocation(h)) {
            let { endLine, endCol, endOffset } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(h, {
                endLine,
                endCol,
                endOffset
            });
        } else if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(h, e.location);
        }
    }
    _adoptNodes(e, t) {
        for(let a = this.treeAdapter.getFirstChild(e); a; a = this.treeAdapter.getFirstChild(e)){
            this.treeAdapter.detachNode(a);
            this.treeAdapter.appendChild(t, a);
        }
    }
    _setEndLocation(e, t) {
        if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
            let a = t.location;
            let n = this.treeAdapter.getTagName(e);
            let d = t.type === f.END_TAG && n === t.tagName ? {
                endTag: {
                    ...a
                },
                endLine: a.endLine,
                endCol: a.endCol,
                endOffset: a.endOffset
            } : {
                endLine: a.startLine,
                endCol: a.startCol,
                endOffset: a.startOffset
            };
            this.treeAdapter.updateNodeSourceCodeLocation(e, d);
        }
    }
    shouldProcessStartTagTokenInForeignContent(e) {
        if (!this.currentNotInHTML) {
            return false;
        }
        let t;
        let a;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
            t = this.fragmentContext;
            a = this.fragmentContextID;
        } else {
            ({ current: t, currentTagId: a } = this.openElements);
        }
        if (e.tagID === u.SVG && this.treeAdapter.getTagName(t) === c.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === E.MATHML) {
            return false;
        }
        return this.tokenizer.inForeignNode || (e.tagID === u.MGLYPH || e.tagID === u.MALIGNMARK) && !this._isIntegrationPoint(a, t, E.HTML);
    }
    _processToken(e) {
        switch(e.type){
            case f.CHARACTER:
                {
                    this.onCharacter(e);
                    break;
                }
            case f.NULL_CHARACTER:
                {
                    this.onNullCharacter(e);
                    break;
                }
            case f.COMMENT:
                {
                    this.onComment(e);
                    break;
                }
            case f.DOCTYPE:
                {
                    this.onDoctype(e);
                    break;
                }
            case f.START_TAG:
                {
                    this._processStartTag(e);
                    break;
                }
            case f.END_TAG:
                {
                    this.onEndTag(e);
                    break;
                }
            case f.EOF:
                {
                    this.onEof(e);
                    break;
                }
            case f.WHITESPACE_CHARACTER:
                {
                    this.onWhitespaceCharacter(e);
                    break;
                }
        }
    }
    _isIntegrationPoint(e, t, a) {
        let n = this.treeAdapter.getNamespaceURI(t);
        let d = this.treeAdapter.getAttrList(t);
        return ze(e, n, d, a);
    }
    _reconstructActiveFormattingElements() {
        let length = this.activeFormattingElements.entries.length;
        if (length) {
            let t = this.activeFormattingElements.entries.findIndex((n)=>n.type === L.Marker || this.openElements.contains(n.element));
            let a = t < 0 ? length - 1 : t - 1;
            for(let n = a; n >= 0; n--){
                let d = this.activeFormattingElements.entries[n];
                this._insertElement(d.token, this.treeAdapter.getNamespaceURI(d.element));
                d.element = this.openElements.current;
            }
        }
    }
    _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = i.IN_ROW;
    }
    _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(u.P);
        this.openElements.popUntilTagNamePopped(u.P);
    }
    _resetInsertionMode() {
        for(let e = this.openElements.stackTop; e >= 0; e--){
            switch(e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]){
                case u.TR:
                    {
                        this.insertionMode = i.IN_ROW;
                        return;
                    }
                case u.TBODY:
                case u.THEAD:
                case u.TFOOT:
                    {
                        this.insertionMode = i.IN_TABLE_BODY;
                        return;
                    }
                case u.CAPTION:
                    {
                        this.insertionMode = i.IN_CAPTION;
                        return;
                    }
                case u.COLGROUP:
                    {
                        this.insertionMode = i.IN_COLUMN_GROUP;
                        return;
                    }
                case u.TABLE:
                    {
                        this.insertionMode = i.IN_TABLE;
                        return;
                    }
                case u.BODY:
                    {
                        this.insertionMode = i.IN_BODY;
                        return;
                    }
                case u.FRAMESET:
                    {
                        this.insertionMode = i.IN_FRAMESET;
                        return;
                    }
                case u.SELECT:
                    {
                        this._resetInsertionModeForSelect(e);
                        return;
                    }
                case u.TEMPLATE:
                    {
                        this.insertionMode = this.tmplInsertionModeStack[0];
                        return;
                    }
                case u.HTML:
                    {
                        this.insertionMode = this.headElement ? i.AFTER_HEAD : i.BEFORE_HEAD;
                        return;
                    }
                case u.TD:
                case u.TH:
                    {
                        if (e > 0) {
                            this.insertionMode = i.IN_CELL;
                            return;
                        }
                        break;
                    }
                case u.HEAD:
                    {
                        if (e > 0) {
                            this.insertionMode = i.IN_HEAD;
                            return;
                        }
                        break;
                    }
            }
        }
        this.insertionMode = i.IN_BODY;
    }
    _resetInsertionModeForSelect(e) {
        if (e > 0) {
            for(let t = e - 1; t > 0; t--){
                let a = this.openElements.tagIDs[t];
                if (a === u.TEMPLATE) {
                    break;
                } else if (a === u.TABLE) {
                    this.insertionMode = i.IN_SELECT_IN_TABLE;
                    return;
                }
            }
        }
        this.insertionMode = i.IN_SELECT;
    }
    _isElementCausesFosterParenting(e) {
        return et.has(e);
    }
    _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
        for(let e = this.openElements.stackTop; e >= 0; e--){
            let beforeElement = this.openElements.items[e];
            switch(this.openElements.tagIDs[e]){
                case u.TEMPLATE:
                    {
                        if (this.treeAdapter.getNamespaceURI(beforeElement) === E.HTML) {
                            return {
                                parent: this.treeAdapter.getTemplateContent(beforeElement),
                                beforeElement: null
                            };
                        }
                        break;
                    }
                case u.TABLE:
                    {
                        let parent = this.treeAdapter.getParentNode(beforeElement);
                        if (parent) {
                            return {
                                parent,
                                beforeElement
                            };
                        }
                        return {
                            parent: this.openElements.items[e - 1],
                            beforeElement: null
                        };
                    }
                default:
            }
        }
        return {
            parent: this.openElements.items[0],
            beforeElement: null
        };
    }
    _fosterParentElement(e) {
        let t = this._findFosterParentingLocation();
        if (t.beforeElement) {
            this.treeAdapter.insertBefore(t.parent, e, t.beforeElement);
        } else {
            this.treeAdapter.appendChild(t.parent, e);
        }
    }
    _isSpecialElement(e, t) {
        let a = this.treeAdapter.getNamespaceURI(e);
        return Pe[a].has(t);
    }
    onCharacter(e) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
            Ha(this, e);
            return;
        }
        switch(this.insertionMode){
            case i.INITIAL:
                {
                    F(this, e);
                    break;
                }
            case i.BEFORE_HTML:
                {
                    w(this, e);
                    break;
                }
            case i.BEFORE_HEAD:
                {
                    Y(this, e);
                    break;
                }
            case i.IN_HEAD:
                {
                    v(this, e);
                    break;
                }
            case i.IN_HEAD_NO_SCRIPT:
                {
                    Q(this, e);
                    break;
                }
            case i.AFTER_HEAD:
                {
                    G(this, e);
                    break;
                }
            case i.IN_BODY:
            case i.IN_CAPTION:
            case i.IN_CELL:
            case i.IN_TEMPLATE:
                {
                    ut(this, e);
                    break;
                }
            case i.TEXT:
            case i.IN_SELECT:
            case i.IN_SELECT_IN_TABLE:
                {
                    this._insertCharacters(e);
                    break;
                }
            case i.IN_TABLE:
            case i.IN_TABLE_BODY:
            case i.IN_ROW:
                {
                    _e(this, e);
                    break;
                }
            case i.IN_TABLE_TEXT:
                {
                    ct(this, e);
                    break;
                }
            case i.IN_COLUMN_GROUP:
                {
                    se(this, e);
                    break;
                }
            case i.AFTER_BODY:
                {
                    re(this, e);
                    break;
                }
            case i.AFTER_AFTER_BODY:
                {
                    ae(this, e);
                    break;
                }
            default:
        }
    }
    onNullCharacter(e) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
            ka(this, e);
            return;
        }
        switch(this.insertionMode){
            case i.INITIAL:
                {
                    F(this, e);
                    break;
                }
            case i.BEFORE_HTML:
                {
                    w(this, e);
                    break;
                }
            case i.BEFORE_HEAD:
                {
                    Y(this, e);
                    break;
                }
            case i.IN_HEAD:
                {
                    v(this, e);
                    break;
                }
            case i.IN_HEAD_NO_SCRIPT:
                {
                    Q(this, e);
                    break;
                }
            case i.AFTER_HEAD:
                {
                    G(this, e);
                    break;
                }
            case i.TEXT:
                {
                    this._insertCharacters(e);
                    break;
                }
            case i.IN_TABLE:
            case i.IN_TABLE_BODY:
            case i.IN_ROW:
                {
                    _e(this, e);
                    break;
                }
            case i.IN_COLUMN_GROUP:
                {
                    se(this, e);
                    break;
                }
            case i.AFTER_BODY:
                {
                    re(this, e);
                    break;
                }
            case i.AFTER_AFTER_BODY:
                {
                    ae(this, e);
                    break;
                }
            default:
        }
    }
    onComment(e) {
        this.skipNextNewLine = false;
        if (this.currentNotInHTML) {
            be(this, e);
            return;
        }
        switch(this.insertionMode){
            case i.INITIAL:
            case i.BEFORE_HTML:
            case i.BEFORE_HEAD:
            case i.IN_HEAD:
            case i.IN_HEAD_NO_SCRIPT:
            case i.AFTER_HEAD:
            case i.IN_BODY:
            case i.IN_TABLE:
            case i.IN_CAPTION:
            case i.IN_COLUMN_GROUP:
            case i.IN_TABLE_BODY:
            case i.IN_ROW:
            case i.IN_CELL:
            case i.IN_SELECT:
            case i.IN_SELECT_IN_TABLE:
            case i.IN_TEMPLATE:
            case i.IN_FRAMESET:
            case i.AFTER_FRAMESET:
                {
                    be(this, e);
                    break;
                }
            case i.IN_TABLE_TEXT:
                {
                    y(this, e);
                    break;
                }
            case i.AFTER_BODY:
                {
                    Tu(this, e);
                    break;
                }
            case i.AFTER_AFTER_BODY:
            case i.AFTER_AFTER_FRAMESET:
                {
                    hu(this, e);
                    break;
                }
            default:
        }
    }
    onDoctype(e) {
        this.skipNextNewLine = false;
        switch(this.insertionMode){
            case i.INITIAL:
                {
                    lu(this, e);
                    break;
                }
            case i.BEFORE_HEAD:
            case i.IN_HEAD:
            case i.IN_HEAD_NO_SCRIPT:
            case i.AFTER_HEAD:
                {
                    this._err(e, o.misplacedDoctype);
                    break;
                }
            case i.IN_TABLE_TEXT:
                {
                    y(this, e);
                    break;
                }
            default:
        }
    }
    onStartTag(e) {
        this.skipNextNewLine = false;
        this.currentToken = e;
        this._processStartTag(e);
        if (e.selfClosing && !e.ackSelfClosing) {
            this._err(e, o.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
    }
    _processStartTag(e) {
        if (this.shouldProcessStartTagTokenInForeignContent(e)) {
            Ua(this, e);
        } else {
            this._startTagOutsideForeignContent(e);
        }
    }
    _startTagOutsideForeignContent(e) {
        switch(this.insertionMode){
            case i.INITIAL:
                {
                    F(this, e);
                    break;
                }
            case i.BEFORE_HTML:
                {
                    fu(this, e);
                    break;
                }
            case i.BEFORE_HEAD:
                {
                    _u(this, e);
                    break;
                }
            case i.IN_HEAD:
                {
                    R(this, e);
                    break;
                }
            case i.IN_HEAD_NO_SCRIPT:
                {
                    Nu(this, e);
                    break;
                }
            case i.AFTER_HEAD:
                {
                    Cu(this, e);
                    break;
                }
            case i.IN_BODY:
                {
                    I(this, e);
                    break;
                }
            case i.IN_TABLE:
                {
                    k(this, e);
                    break;
                }
            case i.IN_TABLE_TEXT:
                {
                    y(this, e);
                    break;
                }
            case i.IN_CAPTION:
                {
                    ba(this, e);
                    break;
                }
            case i.IN_COLUMN_GROUP:
                {
                    Ce(this, e);
                    break;
                }
            case i.IN_TABLE_BODY:
                {
                    ce(this, e);
                    break;
                }
            case i.IN_ROW:
                {
                    oe(this, e);
                    break;
                }
            case i.IN_CELL:
                {
                    Ia(this, e);
                    break;
                }
            case i.IN_SELECT:
                {
                    Et(this, e);
                    break;
                }
            case i.IN_SELECT_IN_TABLE:
                {
                    Oa(this, e);
                    break;
                }
            case i.IN_TEMPLATE:
                {
                    Sa(this, e);
                    break;
                }
            case i.AFTER_BODY:
                {
                    Ra(this, e);
                    break;
                }
            case i.IN_FRAMESET:
                {
                    Da(this, e);
                    break;
                }
            case i.AFTER_FRAMESET:
                {
                    Pa(this, e);
                    break;
                }
            case i.AFTER_AFTER_BODY:
                {
                    xa(this, e);
                    break;
                }
            case i.AFTER_AFTER_FRAMESET:
                {
                    Ba(this, e);
                    break;
                }
            default:
        }
    }
    onEndTag(e) {
        this.skipNextNewLine = false;
        this.currentToken = e;
        if (this.currentNotInHTML) {
            Fa(this, e);
        } else {
            this._endTagOutsideForeignContent(e);
        }
    }
    _endTagOutsideForeignContent(e) {
        switch(this.insertionMode){
            case i.INITIAL:
                {
                    F(this, e);
                    break;
                }
            case i.BEFORE_HTML:
                {
                    mu(this, e);
                    break;
                }
            case i.BEFORE_HEAD:
                {
                    bu(this, e);
                    break;
                }
            case i.IN_HEAD:
                {
                    Au(this, e);
                    break;
                }
            case i.IN_HEAD_NO_SCRIPT:
                {
                    Iu(this, e);
                    break;
                }
            case i.AFTER_HEAD:
                {
                    Ou(this, e);
                    break;
                }
            case i.IN_BODY:
                {
                    ne(this, e);
                    break;
                }
            case i.TEXT:
                {
                    ca(this, e);
                    break;
                }
            case i.IN_TABLE:
                {
                    W(this, e);
                    break;
                }
            case i.IN_TABLE_TEXT:
                {
                    y(this, e);
                    break;
                }
            case i.IN_CAPTION:
                {
                    Aa(this, e);
                    break;
                }
            case i.IN_COLUMN_GROUP:
                {
                    Na(this, e);
                    break;
                }
            case i.IN_TABLE_BODY:
                {
                    Ae(this, e);
                    break;
                }
            case i.IN_ROW:
                {
                    dt(this, e);
                    break;
                }
            case i.IN_CELL:
                {
                    Ca(this, e);
                    break;
                }
            case i.IN_SELECT:
                {
                    Tt(this, e);
                    break;
                }
            case i.IN_SELECT_IN_TABLE:
                {
                    pa(this, e);
                    break;
                }
            case i.IN_TEMPLATE:
                {
                    La(this, e);
                    break;
                }
            case i.AFTER_BODY:
                {
                    lt(this, e);
                    break;
                }
            case i.IN_FRAMESET:
                {
                    ga(this, e);
                    break;
                }
            case i.AFTER_FRAMESET:
                {
                    Ma(this, e);
                    break;
                }
            case i.AFTER_AFTER_BODY:
                {
                    ae(this, e);
                    break;
                }
            default:
        }
    }
    onEof(e) {
        switch(this.insertionMode){
            case i.INITIAL:
                {
                    F(this, e);
                    break;
                }
            case i.BEFORE_HTML:
                {
                    w(this, e);
                    break;
                }
            case i.BEFORE_HEAD:
                {
                    Y(this, e);
                    break;
                }
            case i.IN_HEAD:
                {
                    v(this, e);
                    break;
                }
            case i.IN_HEAD_NO_SCRIPT:
                {
                    Q(this, e);
                    break;
                }
            case i.AFTER_HEAD:
                {
                    G(this, e);
                    break;
                }
            case i.IN_BODY:
            case i.IN_TABLE:
            case i.IN_CAPTION:
            case i.IN_COLUMN_GROUP:
            case i.IN_TABLE_BODY:
            case i.IN_ROW:
            case i.IN_CELL:
            case i.IN_SELECT:
            case i.IN_SELECT_IN_TABLE:
                {
                    it(this, e);
                    break;
                }
            case i.TEXT:
                {
                    oa(this, e);
                    break;
                }
            case i.IN_TABLE_TEXT:
                {
                    y(this, e);
                    break;
                }
            case i.IN_TEMPLATE:
                {
                    ht(this, e);
                    break;
                }
            case i.AFTER_BODY:
            case i.IN_FRAMESET:
            case i.AFTER_FRAMESET:
            case i.AFTER_AFTER_BODY:
            case i.AFTER_AFTER_FRAMESET:
                {
                    Ie(this, e);
                    break;
                }
            default:
        }
    }
    onWhitespaceCharacter(e) {
        if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (e.chars.charCodeAt(0) === s.LINE_FEED) {
                if (e.chars.length === 1) {
                    return;
                }
                e.chars = e.chars.substr(1);
            }
        }
        if (this.tokenizer.inForeignNode) {
            this._insertCharacters(e);
            return;
        }
        switch(this.insertionMode){
            case i.IN_HEAD:
            case i.IN_HEAD_NO_SCRIPT:
            case i.AFTER_HEAD:
            case i.TEXT:
            case i.IN_COLUMN_GROUP:
            case i.IN_SELECT:
            case i.IN_SELECT_IN_TABLE:
            case i.IN_FRAMESET:
            case i.AFTER_FRAMESET:
                {
                    this._insertCharacters(e);
                    break;
                }
            case i.IN_BODY:
            case i.IN_CAPTION:
            case i.IN_CELL:
            case i.IN_TEMPLATE:
            case i.AFTER_BODY:
            case i.AFTER_AFTER_BODY:
            case i.AFTER_AFTER_FRAMESET:
                {
                    tt(this, e);
                    break;
                }
            case i.IN_TABLE:
            case i.IN_TABLE_BODY:
            case i.IN_ROW:
                {
                    _e(this, e);
                    break;
                }
            case i.IN_TABLE_TEXT:
                {
                    nt(this, e);
                    break;
                }
            default:
        }
    }
}
function iu(e, t) {
    let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
    if (a) {
        if (!e.openElements.contains(a.element)) {
            e.activeFormattingElements.removeEntry(a);
            a = null;
        } else if (!e.openElements.hasInScope(t.tagID)) {
            a = null;
        }
    } else {
        rt(e, t);
    }
    return a;
}
function nu(e, t) {
    let a = null;
    let stackTop = e.openElements.stackTop;
    for(; stackTop >= 0; stackTop--){
        let d = e.openElements.items[stackTop];
        if (d === t.element) {
            break;
        }
        if (e._isSpecialElement(d, e.openElements.tagIDs[stackTop])) {
            a = d;
        }
    }
    if (!a) {
        e.openElements.shortenToLength(stackTop < 0 ? 0 : stackTop);
        e.activeFormattingElements.removeEntry(t);
    }
    return a;
}
function cu(e, t, element) {
    let n = t;
    let d = e.openElements.getCommonAncestor(t);
    for(let h = 0, l = d; l !== element; h++, l = d){
        d = e.openElements.getCommonAncestor(l);
        let _ = e.activeFormattingElements.getElementEntry(l);
        let b = _ && h >= su;
        if (!_ || b) {
            if (b) {
                e.activeFormattingElements.removeEntry(_);
            }
            e.openElements.remove(l);
        } else {
            l = ou(e, _);
            if (n === t) {
                e.activeFormattingElements.bookmark = _;
            }
            e.treeAdapter.detachNode(n);
            e.treeAdapter.appendChild(l, n);
            n = l;
        }
    }
    return n;
}
function ou(e, t) {
    let a = e.treeAdapter.getNamespaceURI(t.element);
    let n = e.treeAdapter.createElement(t.token.tagName, a, t.token.attrs);
    e.openElements.replace(t.element, n);
    t.element = n;
    return n;
}
function du(e, t, a) {
    let n = e.treeAdapter.getTagName(t);
    let d = x(n);
    if (e._isElementCausesFosterParenting(d)) {
        e._fosterParentElement(a);
    } else {
        let h = e.treeAdapter.getNamespaceURI(t);
        if (d === u.TEMPLATE && h === E.HTML) {
            t = e.treeAdapter.getTemplateContent(t);
        }
        e.treeAdapter.appendChild(t, a);
    }
}
function Eu(e, t, a) {
    let n = e.treeAdapter.getNamespaceURI(a.element);
    let { token } = a;
    let h = e.treeAdapter.createElement(token.tagName, n, token.attrs);
    e._adoptNodes(t, h);
    e.treeAdapter.appendChild(t, h);
    e.activeFormattingElements.insertElementAfterBookmark(h, token);
    e.activeFormattingElements.removeEntry(a);
    e.openElements.remove(a.element);
    e.openElements.insertAfter(t, h, token.tagID);
}
function Ne(e, t) {
    for(let a = 0; a < au; a++){
        let n = iu(e, t);
        if (!n) {
            break;
        }
        let d = nu(e, n);
        if (!d) {
            break;
        }
        e.activeFormattingElements.bookmark = n;
        let h = cu(e, d, n.element);
        let l = e.openElements.getCommonAncestor(n.element);
        e.treeAdapter.detachNode(h);
        if (l) {
            du(e, l, h);
        }
        Eu(e, d, n);
    }
}
function be(e, t) {
    e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function Tu(e, t) {
    e._appendCommentNode(t, e.openElements.items[0]);
}
function hu(e, t) {
    e._appendCommentNode(t, e.document);
}
function Ie(e, t) {
    e.stopped = true;
    if (t.location) {
        let a = e.fragmentContext ? 0 : 2;
        for(let n = e.openElements.stackTop; n >= a; n--){
            e._setEndLocation(e.openElements.items[n], t);
        }
        if (!e.fragmentContext && e.openElements.stackTop >= 0) {
            let n = e.openElements.items[0];
            let d = e.treeAdapter.getNodeSourceCodeLocation(n);
            if (d && !d.endTag) {
                e._setEndLocation(n, t);
                if (e.openElements.stackTop >= 1) {
                    let h = e.openElements.items[1];
                    let l = e.treeAdapter.getNodeSourceCodeLocation(h);
                    if (l && !l.endTag) {
                        e._setEndLocation(h, t);
                    }
                }
            }
        }
    }
}
function lu(e, t) {
    e._setDocumentType(t);
    let a = t.forceQuirks ? O.QUIRKS : qe(t);
    if (!We(t)) {
        e._err(t, o.nonConformingDoctype);
    }
    e.treeAdapter.setDocumentMode(e.document, a);
    e.insertionMode = i.BEFORE_HTML;
}
function F(e, t) {
    e._err(t, o.missingDoctype, true);
    e.treeAdapter.setDocumentMode(e.document, O.QUIRKS);
    e.insertionMode = i.BEFORE_HTML;
    e._processToken(t);
}
function fu(e, t) {
    if (t.tagID === u.HTML) {
        e._insertElement(t, E.HTML);
        e.insertionMode = i.BEFORE_HEAD;
    } else {
        w(e, t);
    }
}
function mu(e, t) {
    let t_tagID = t.tagID;
    if (t_tagID === u.HTML || t_tagID === u.HEAD || t_tagID === u.BODY || t_tagID === u.BR) {
        w(e, t);
    }
}
function w(e, t) {
    e._insertFakeRootElement();
    e.insertionMode = i.BEFORE_HEAD;
    e._processToken(t);
}
function _u(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.HEAD:
            {
                e._insertElement(t, E.HTML);
                e.headElement = e.openElements.current;
                e.insertionMode = i.IN_HEAD;
                break;
            }
        default:
            Y(e, t);
    }
}
function bu(e, t) {
    let t_tagID = t.tagID;
    if (t_tagID === u.HEAD || t_tagID === u.BODY || t_tagID === u.HTML || t_tagID === u.BR) {
        Y(e, t);
    } else {
        e._err(t, o.endTagWithoutMatchingOpenElement);
    }
}
function Y(e, t) {
    e._insertFakeElement(c.HEAD, u.HEAD);
    e.headElement = e.openElements.current;
    e.insertionMode = i.IN_HEAD;
    e._processToken(t);
}
function R(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.BASE:
        case u.BASEFONT:
        case u.BGSOUND:
        case u.LINK:
        case u.META:
            {
                e._appendElement(t, E.HTML);
                t.ackSelfClosing = true;
                break;
            }
        case u.TITLE:
            {
                e._switchToTextParsing(t, kA.RCDATA);
                break;
            }
        case u.NOSCRIPT:
            {
                if (e.options.scriptingEnabled) {
                    e._switchToTextParsing(t, kA.RAWTEXT);
                } else {
                    e._insertElement(t, E.HTML);
                    e.insertionMode = i.IN_HEAD_NO_SCRIPT;
                }
                break;
            }
        case u.NOFRAMES:
        case u.STYLE:
            {
                e._switchToTextParsing(t, kA.RAWTEXT);
                break;
            }
        case u.SCRIPT:
            {
                e._switchToTextParsing(t, kA.SCRIPT_DATA);
                break;
            }
        case u.TEMPLATE:
            {
                e._insertTemplate(t);
                e.activeFormattingElements.insertMarker();
                e.framesetOk = false;
                e.insertionMode = i.IN_TEMPLATE;
                e.tmplInsertionModeStack.unshift(i.IN_TEMPLATE);
                break;
            }
        case u.HEAD:
            {
                e._err(t, o.misplacedStartTagForHeadElement);
                break;
            }
        default:
            v(e, t);
    }
}
function Au(e, t) {
    switch(t.tagID){
        case u.HEAD:
            {
                e.openElements.pop();
                e.insertionMode = i.AFTER_HEAD;
                break;
            }
        case u.BODY:
        case u.BR:
        case u.HTML:
            {
                v(e, t);
                break;
            }
        case u.TEMPLATE:
            {
                B(e, t);
                break;
            }
        default:
            e._err(t, o.endTagWithoutMatchingOpenElement);
    }
}
function B(e, t) {
    if (e.openElements.tmplCount > 0) {
        e.openElements.generateImpliedEndTagsThoroughly();
        if (e.openElements.currentTagId !== u.TEMPLATE) {
            e._err(t, o.closingOfElementWithOpenChildElements);
        }
        e.openElements.popUntilTagNamePopped(u.TEMPLATE);
        e.activeFormattingElements.clearToLastMarker();
        e.tmplInsertionModeStack.shift();
        e._resetInsertionMode();
    } else {
        e._err(t, o.endTagWithoutMatchingOpenElement);
    }
}
function v(e, t) {
    e.openElements.pop();
    e.insertionMode = i.AFTER_HEAD;
    e._processToken(t);
}
function Nu(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.BASEFONT:
        case u.BGSOUND:
        case u.HEAD:
        case u.LINK:
        case u.META:
        case u.NOFRAMES:
        case u.STYLE:
            {
                R(e, t);
                break;
            }
        case u.NOSCRIPT:
            {
                e._err(t, o.nestedNoscriptInHead);
                break;
            }
        default:
            Q(e, t);
    }
}
function Iu(e, t) {
    switch(t.tagID){
        case u.NOSCRIPT:
            {
                e.openElements.pop();
                e.insertionMode = i.IN_HEAD;
                break;
            }
        case u.BR:
            {
                Q(e, t);
                break;
            }
        default:
            e._err(t, o.endTagWithoutMatchingOpenElement);
    }
}
function Q(e, t) {
    let a = t.type === f.EOF ? o.openElementsLeftAfterEof : o.disallowedContentInNoscriptInHead;
    e._err(t, a);
    e.openElements.pop();
    e.insertionMode = i.IN_HEAD;
    e._processToken(t);
}
function Cu(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.BODY:
            {
                e._insertElement(t, E.HTML);
                e.framesetOk = false;
                e.insertionMode = i.IN_BODY;
                break;
            }
        case u.FRAMESET:
            {
                e._insertElement(t, E.HTML);
                e.insertionMode = i.IN_FRAMESET;
                break;
            }
        case u.BASE:
        case u.BASEFONT:
        case u.BGSOUND:
        case u.LINK:
        case u.META:
        case u.NOFRAMES:
        case u.SCRIPT:
        case u.STYLE:
        case u.TEMPLATE:
        case u.TITLE:
            {
                e._err(t, o.abandonedHeadElementChild);
                e.openElements.push(e.headElement, u.HEAD);
                R(e, t);
                e.openElements.remove(e.headElement);
                break;
            }
        case u.HEAD:
            {
                e._err(t, o.misplacedStartTagForHeadElement);
                break;
            }
        default:
            G(e, t);
    }
}
function Ou(e, t) {
    switch(t.tagID){
        case u.BODY:
        case u.HTML:
        case u.BR:
            {
                G(e, t);
                break;
            }
        case u.TEMPLATE:
            {
                B(e, t);
                break;
            }
        default:
            e._err(t, o.endTagWithoutMatchingOpenElement);
    }
}
function G(e, t) {
    e._insertFakeElement(c.BODY, u.BODY);
    e.insertionMode = i.IN_BODY;
    ie(e, t);
}
function ie(e, t) {
    switch(t.type){
        case f.CHARACTER:
            {
                ut(e, t);
                break;
            }
        case f.WHITESPACE_CHARACTER:
            {
                tt(e, t);
                break;
            }
        case f.COMMENT:
            {
                be(e, t);
                break;
            }
        case f.START_TAG:
            {
                I(e, t);
                break;
            }
        case f.END_TAG:
            {
                ne(e, t);
                break;
            }
        case f.EOF:
            {
                it(e, t);
                break;
            }
        default:
    }
}
function tt(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertCharacters(t);
}
function ut(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertCharacters(t);
    e.framesetOk = false;
}
function pu(e, t) {
    if (e.openElements.tmplCount === 0) {
        e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
    }
}
function Su(e, t) {
    let a = e.openElements.tryPeekProperlyNestedBodyElement();
    if (a && e.openElements.tmplCount === 0) {
        e.framesetOk = false;
        e.treeAdapter.adoptAttributes(a, t.attrs);
    }
}
function Lu(e, t) {
    let a = e.openElements.tryPeekProperlyNestedBodyElement();
    if (e.framesetOk && a) {
        e.treeAdapter.detachNode(a);
        e.openElements.popAllUpToHtmlElement();
        e._insertElement(t, E.HTML);
        e.insertionMode = i.IN_FRAMESET;
    }
}
function Ru(e, t) {
    if (e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    e._insertElement(t, E.HTML);
}
function Du(e, t) {
    if (e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    if (H.has(e.openElements.currentTagId)) {
        e.openElements.pop();
    }
    e._insertElement(t, E.HTML);
}
function gu(e, t) {
    if (e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    e._insertElement(t, E.HTML);
    e.skipNextNewLine = true;
    e.framesetOk = false;
}
function Pu(e, t) {
    let a = e.openElements.tmplCount > 0;
    if (!e.formElement || a) {
        if (e.openElements.hasInButtonScope(u.P)) {
            e._closePElement();
        }
        e._insertElement(t, E.HTML);
        if (!a) {
            e.formElement = e.openElements.current;
        }
    }
}
function Mu(e, t) {
    e.framesetOk = false;
    let t_tagID = t.tagID;
    for(let n = e.openElements.stackTop; n >= 0; n--){
        let d = e.openElements.tagIDs[n];
        if (t_tagID === u.LI && d === u.LI || (t_tagID === u.DD || t_tagID === u.DT) && (d === u.DD || d === u.DT)) {
            e.openElements.generateImpliedEndTagsWithExclusion(d);
            e.openElements.popUntilTagNamePopped(d);
            break;
        }
        if (d !== u.ADDRESS && d !== u.DIV && d !== u.P && e._isSpecialElement(e.openElements.items[n], d)) {
            break;
        }
    }
    if (e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    e._insertElement(t, E.HTML);
}
function xu(e, t) {
    if (e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    e._insertElement(t, E.HTML);
    e.tokenizer.state = kA.PLAINTEXT;
}
function Bu(e, t) {
    if (e.openElements.hasInScope(u.BUTTON)) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilTagNamePopped(u.BUTTON);
    }
    e._reconstructActiveFormattingElements();
    e._insertElement(t, E.HTML);
    e.framesetOk = false;
}
function ku(e, t) {
    let a = e.activeFormattingElements.getElementEntryInScopeWithTagName(c.A);
    if (a) {
        Ne(e, t);
        e.openElements.remove(a.element);
        e.activeFormattingElements.removeEntry(a);
    }
    e._reconstructActiveFormattingElements();
    e._insertElement(t, E.HTML);
    e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Hu(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertElement(t, E.HTML);
    e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Uu(e, t) {
    e._reconstructActiveFormattingElements();
    if (e.openElements.hasInScope(u.NOBR)) {
        Ne(e, t);
        e._reconstructActiveFormattingElements();
    }
    e._insertElement(t, E.HTML);
    e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Fu(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertElement(t, E.HTML);
    e.activeFormattingElements.insertMarker();
    e.framesetOk = false;
}
function yu(e, t) {
    if (e.treeAdapter.getDocumentMode(e.document) !== O.QUIRKS && e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    e._insertElement(t, E.HTML);
    e.framesetOk = false;
    e.insertionMode = i.IN_TABLE;
}
function at(e, t) {
    e._reconstructActiveFormattingElements();
    e._appendElement(t, E.HTML);
    e.framesetOk = false;
    t.ackSelfClosing = true;
}
function st(e) {
    let t = j(e, g.TYPE);
    return t != null && t.toLowerCase() === uu;
}
function wu(e, t) {
    e._reconstructActiveFormattingElements();
    e._appendElement(t, E.HTML);
    if (!st(t)) {
        e.framesetOk = false;
    }
    t.ackSelfClosing = true;
}
function Yu(e, t) {
    e._appendElement(t, E.HTML);
    t.ackSelfClosing = true;
}
function vu(e, t) {
    if (e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    e._appendElement(t, E.HTML);
    e.framesetOk = false;
    t.ackSelfClosing = true;
}
function Qu(e, t) {
    t.tagName = c.IMG;
    t.tagID = u.IMG;
    at(e, t);
}
function Gu(e, t) {
    e._insertElement(t, E.HTML);
    e.skipNextNewLine = true;
    e.tokenizer.state = kA.RCDATA;
    e.originalInsertionMode = e.insertionMode;
    e.framesetOk = false;
    e.insertionMode = i.TEXT;
}
function Wu(e, t) {
    if (e.openElements.hasInButtonScope(u.P)) {
        e._closePElement();
    }
    e._reconstructActiveFormattingElements();
    e.framesetOk = false;
    e._switchToTextParsing(t, kA.RAWTEXT);
}
function qu(e, t) {
    e.framesetOk = false;
    e._switchToTextParsing(t, kA.RAWTEXT);
}
function $e(e, t) {
    e._switchToTextParsing(t, kA.RAWTEXT);
}
function Xu(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertElement(t, E.HTML);
    e.framesetOk = false;
    e.insertionMode = e.insertionMode === i.IN_TABLE || e.insertionMode === i.IN_CAPTION || e.insertionMode === i.IN_TABLE_BODY || e.insertionMode === i.IN_ROW || e.insertionMode === i.IN_CELL ? i.IN_SELECT_IN_TABLE : i.IN_SELECT;
}
function Ku(e, t) {
    if (e.openElements.currentTagId === u.OPTION) {
        e.openElements.pop();
    }
    e._reconstructActiveFormattingElements();
    e._insertElement(t, E.HTML);
}
function Vu(e, t) {
    if (e.openElements.hasInScope(u.RUBY)) {
        e.openElements.generateImpliedEndTags();
    }
    e._insertElement(t, E.HTML);
}
function zu(e, t) {
    if (e.openElements.hasInScope(u.RUBY)) {
        e.openElements.generateImpliedEndTagsWithExclusion(u.RTC);
    }
    e._insertElement(t, E.HTML);
}
function ju(e, t) {
    e._reconstructActiveFormattingElements();
    fe(t);
    ue(t);
    if (t.selfClosing) {
        e._appendElement(t, E.MATHML);
    } else {
        e._insertElement(t, E.MATHML);
    }
    t.ackSelfClosing = true;
}
function Ju(e, t) {
    e._reconstructActiveFormattingElements();
    me(t);
    ue(t);
    if (t.selfClosing) {
        e._appendElement(t, E.SVG);
    } else {
        e._insertElement(t, E.SVG);
    }
    t.ackSelfClosing = true;
}
function Ze(e, t) {
    e._reconstructActiveFormattingElements();
    e._insertElement(t, E.HTML);
}
function I(e, t) {
    switch(t.tagID){
        case u.I:
        case u.S:
        case u.B:
        case u.U:
        case u.EM:
        case u.TT:
        case u.BIG:
        case u.CODE:
        case u.FONT:
        case u.SMALL:
        case u.STRIKE:
        case u.STRONG:
            {
                Hu(e, t);
                break;
            }
        case u.A:
            {
                ku(e, t);
                break;
            }
        case u.H1:
        case u.H2:
        case u.H3:
        case u.H4:
        case u.H5:
        case u.H6:
            {
                Du(e, t);
                break;
            }
        case u.P:
        case u.DL:
        case u.OL:
        case u.UL:
        case u.DIV:
        case u.DIR:
        case u.NAV:
        case u.MAIN:
        case u.MENU:
        case u.ASIDE:
        case u.CENTER:
        case u.FIGURE:
        case u.FOOTER:
        case u.HEADER:
        case u.HGROUP:
        case u.DIALOG:
        case u.DETAILS:
        case u.ADDRESS:
        case u.ARTICLE:
        case u.SEARCH:
        case u.SECTION:
        case u.SUMMARY:
        case u.FIELDSET:
        case u.BLOCKQUOTE:
        case u.FIGCAPTION:
            {
                Ru(e, t);
                break;
            }
        case u.LI:
        case u.DD:
        case u.DT:
            {
                Mu(e, t);
                break;
            }
        case u.BR:
        case u.IMG:
        case u.WBR:
        case u.AREA:
        case u.EMBED:
        case u.KEYGEN:
            {
                at(e, t);
                break;
            }
        case u.HR:
            {
                vu(e, t);
                break;
            }
        case u.RB:
        case u.RTC:
            {
                Vu(e, t);
                break;
            }
        case u.RT:
        case u.RP:
            {
                zu(e, t);
                break;
            }
        case u.PRE:
        case u.LISTING:
            {
                gu(e, t);
                break;
            }
        case u.XMP:
            {
                Wu(e, t);
                break;
            }
        case u.SVG:
            {
                Ju(e, t);
                break;
            }
        case u.HTML:
            {
                pu(e, t);
                break;
            }
        case u.BASE:
        case u.LINK:
        case u.META:
        case u.STYLE:
        case u.TITLE:
        case u.SCRIPT:
        case u.BGSOUND:
        case u.BASEFONT:
        case u.TEMPLATE:
            {
                R(e, t);
                break;
            }
        case u.BODY:
            {
                Su(e, t);
                break;
            }
        case u.FORM:
            {
                Pu(e, t);
                break;
            }
        case u.NOBR:
            {
                Uu(e, t);
                break;
            }
        case u.MATH:
            {
                ju(e, t);
                break;
            }
        case u.TABLE:
            {
                yu(e, t);
                break;
            }
        case u.INPUT:
            {
                wu(e, t);
                break;
            }
        case u.PARAM:
        case u.TRACK:
        case u.SOURCE:
            {
                Yu(e, t);
                break;
            }
        case u.IMAGE:
            {
                Qu(e, t);
                break;
            }
        case u.BUTTON:
            {
                Bu(e, t);
                break;
            }
        case u.APPLET:
        case u.OBJECT:
        case u.MARQUEE:
            {
                Fu(e, t);
                break;
            }
        case u.IFRAME:
            {
                qu(e, t);
                break;
            }
        case u.SELECT:
            {
                Xu(e, t);
                break;
            }
        case u.OPTION:
        case u.OPTGROUP:
            {
                Ku(e, t);
                break;
            }
        case u.NOEMBED:
        case u.NOFRAMES:
            {
                $e(e, t);
                break;
            }
        case u.FRAMESET:
            {
                Lu(e, t);
                break;
            }
        case u.TEXTAREA:
            {
                Gu(e, t);
                break;
            }
        case u.NOSCRIPT:
            {
                if (e.options.scriptingEnabled) {
                    $e(e, t);
                } else {
                    Ze(e, t);
                }
                break;
            }
        case u.PLAINTEXT:
            {
                xu(e, t);
                break;
            }
        case u.COL:
        case u.TH:
        case u.TD:
        case u.TR:
        case u.HEAD:
        case u.FRAME:
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
        case u.CAPTION:
        case u.COLGROUP:
            break;
        default:
            Ze(e, t);
    }
}
function $u(e, t) {
    if (e.openElements.hasInScope(u.BODY)) {
        e.insertionMode = i.AFTER_BODY;
        if (e.options.sourceCodeLocationInfo) {
            let a = e.openElements.tryPeekProperlyNestedBodyElement();
            if (a) {
                e._setEndLocation(a, t);
            }
        }
    }
}
function Zu(e, t) {
    if (e.openElements.hasInScope(u.BODY)) {
        e.insertionMode = i.AFTER_BODY;
        lt(e, t);
    }
}
function ea(e, { tagID }) {
    if (e.openElements.hasInScope(tagID)) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilTagNamePopped(tagID);
    }
}
function ta(e) {
    let t = e.openElements.tmplCount > 0;
    let { formElement } = e;
    if (!t) {
        e.formElement = null;
    }
    if ((formElement || t) && e.openElements.hasInScope(u.FORM)) {
        e.openElements.generateImpliedEndTags();
        if (t) {
            e.openElements.popUntilTagNamePopped(u.FORM);
        } else if (formElement) {
            e.openElements.remove(formElement);
        }
    }
}
function ua(e) {
    if (!e.openElements.hasInButtonScope(u.P)) {
        e._insertFakeElement(c.P, u.P);
    }
    e._closePElement();
}
function aa(e) {
    if (e.openElements.hasInListItemScope(u.LI)) {
        e.openElements.generateImpliedEndTagsWithExclusion(u.LI);
        e.openElements.popUntilTagNamePopped(u.LI);
    }
}
function sa(e, { tagID }) {
    if (e.openElements.hasInScope(tagID)) {
        e.openElements.generateImpliedEndTagsWithExclusion(tagID);
        e.openElements.popUntilTagNamePopped(tagID);
    }
}
function ra(e) {
    if (e.openElements.hasNumberedHeaderInScope()) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilNumberedHeaderPopped();
    }
}
function ia(e, { tagID }) {
    if (e.openElements.hasInScope(tagID)) {
        e.openElements.generateImpliedEndTags();
        e.openElements.popUntilTagNamePopped(tagID);
        e.activeFormattingElements.clearToLastMarker();
    }
}
function na(e) {
    e._reconstructActiveFormattingElements();
    e._insertFakeElement(c.BR, u.BR);
    e.openElements.pop();
    e.framesetOk = false;
}
function rt(e, { tagName, tagID }) {
    for(let d = e.openElements.stackTop; d > 0; d--){
        let h = e.openElements.items[d];
        let l = e.openElements.tagIDs[d];
        if (tagID === l && (tagID !== u.UNKNOWN || e.treeAdapter.getTagName(h) === tagName)) {
            e.openElements.generateImpliedEndTagsWithExclusion(tagID);
            if (e.openElements.stackTop >= d) {
                e.openElements.shortenToLength(d);
            }
            break;
        }
        if (e._isSpecialElement(h, l)) {
            break;
        }
    }
}
function ne(e, t) {
    switch(t.tagID){
        case u.A:
        case u.B:
        case u.I:
        case u.S:
        case u.U:
        case u.EM:
        case u.TT:
        case u.BIG:
        case u.CODE:
        case u.FONT:
        case u.NOBR:
        case u.SMALL:
        case u.STRIKE:
        case u.STRONG:
            {
                Ne(e, t);
                break;
            }
        case u.P:
            {
                ua(e);
                break;
            }
        case u.DL:
        case u.UL:
        case u.OL:
        case u.DIR:
        case u.DIV:
        case u.NAV:
        case u.PRE:
        case u.MAIN:
        case u.MENU:
        case u.ASIDE:
        case u.BUTTON:
        case u.CENTER:
        case u.FIGURE:
        case u.FOOTER:
        case u.HEADER:
        case u.HGROUP:
        case u.DIALOG:
        case u.ADDRESS:
        case u.ARTICLE:
        case u.DETAILS:
        case u.SEARCH:
        case u.SECTION:
        case u.SUMMARY:
        case u.LISTING:
        case u.FIELDSET:
        case u.BLOCKQUOTE:
        case u.FIGCAPTION:
            {
                ea(e, t);
                break;
            }
        case u.LI:
            {
                aa(e);
                break;
            }
        case u.DD:
        case u.DT:
            {
                sa(e, t);
                break;
            }
        case u.H1:
        case u.H2:
        case u.H3:
        case u.H4:
        case u.H5:
        case u.H6:
            {
                ra(e);
                break;
            }
        case u.BR:
            {
                na(e);
                break;
            }
        case u.BODY:
            {
                $u(e, t);
                break;
            }
        case u.HTML:
            {
                Zu(e, t);
                break;
            }
        case u.FORM:
            {
                ta(e);
                break;
            }
        case u.APPLET:
        case u.OBJECT:
        case u.MARQUEE:
            {
                ia(e, t);
                break;
            }
        case u.TEMPLATE:
            {
                B(e, t);
                break;
            }
        default:
            rt(e, t);
    }
}
function it(e, t) {
    if (e.tmplInsertionModeStack.length > 0) {
        ht(e, t);
    } else {
        Ie(e, t);
    }
}
function ca(e, t) {
    if (t.tagID === u.SCRIPT) {
        e.scriptHandler?.(e.openElements.current);
    }
    e.openElements.pop();
    e.insertionMode = e.originalInsertionMode;
}
function oa(e, t) {
    e._err(t, o.eofInElementThatCanContainOnlyText);
    e.openElements.pop();
    e.insertionMode = e.originalInsertionMode;
    e.onEof(t);
}
function _e(e, t) {
    if (et.has(e.openElements.currentTagId)) {
        e.pendingCharacterTokens.length = 0;
        e.hasNonWhitespacePendingCharacterToken = false;
        e.originalInsertionMode = e.insertionMode;
        e.insertionMode = i.IN_TABLE_TEXT;
        switch(t.type){
            case f.CHARACTER:
                {
                    ct(e, t);
                    break;
                }
            case f.WHITESPACE_CHARACTER:
                {
                    nt(e, t);
                    break;
                }
        }
    } else {
        X(e, t);
    }
}
function da(e, t) {
    e.openElements.clearBackToTableContext();
    e.activeFormattingElements.insertMarker();
    e._insertElement(t, E.HTML);
    e.insertionMode = i.IN_CAPTION;
}
function Ea(e, t) {
    e.openElements.clearBackToTableContext();
    e._insertElement(t, E.HTML);
    e.insertionMode = i.IN_COLUMN_GROUP;
}
function Ta(e, t) {
    e.openElements.clearBackToTableContext();
    e._insertFakeElement(c.COLGROUP, u.COLGROUP);
    e.insertionMode = i.IN_COLUMN_GROUP;
    Ce(e, t);
}
function ha(e, t) {
    e.openElements.clearBackToTableContext();
    e._insertElement(t, E.HTML);
    e.insertionMode = i.IN_TABLE_BODY;
}
function la(e, t) {
    e.openElements.clearBackToTableContext();
    e._insertFakeElement(c.TBODY, u.TBODY);
    e.insertionMode = i.IN_TABLE_BODY;
    ce(e, t);
}
function fa(e, t) {
    if (e.openElements.hasInTableScope(u.TABLE)) {
        e.openElements.popUntilTagNamePopped(u.TABLE);
        e._resetInsertionMode();
        e._processStartTag(t);
    }
}
function ma(e, t) {
    if (st(t)) {
        e._appendElement(t, E.HTML);
    } else {
        X(e, t);
    }
    t.ackSelfClosing = true;
}
function _a(e, t) {
    if (!e.formElement && e.openElements.tmplCount === 0) {
        e._insertElement(t, E.HTML);
        e.formElement = e.openElements.current;
        e.openElements.pop();
    }
}
function k(e, t) {
    switch(t.tagID){
        case u.TD:
        case u.TH:
        case u.TR:
            {
                la(e, t);
                break;
            }
        case u.STYLE:
        case u.SCRIPT:
        case u.TEMPLATE:
            {
                R(e, t);
                break;
            }
        case u.COL:
            {
                Ta(e, t);
                break;
            }
        case u.FORM:
            {
                _a(e, t);
                break;
            }
        case u.TABLE:
            {
                fa(e, t);
                break;
            }
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
            {
                ha(e, t);
                break;
            }
        case u.INPUT:
            {
                ma(e, t);
                break;
            }
        case u.CAPTION:
            {
                da(e, t);
                break;
            }
        case u.COLGROUP:
            {
                Ea(e, t);
                break;
            }
        default:
            X(e, t);
    }
}
function W(e, t) {
    switch(t.tagID){
        case u.TABLE:
            {
                if (e.openElements.hasInTableScope(u.TABLE)) {
                    e.openElements.popUntilTagNamePopped(u.TABLE);
                    e._resetInsertionMode();
                }
                break;
            }
        case u.TEMPLATE:
            {
                B(e, t);
                break;
            }
        case u.BODY:
        case u.CAPTION:
        case u.COL:
        case u.COLGROUP:
        case u.HTML:
        case u.TBODY:
        case u.TD:
        case u.TFOOT:
        case u.TH:
        case u.THEAD:
        case u.TR:
            break;
        default:
            X(e, t);
    }
}
function X(e, t) {
    let e_fosterParentingEnabled = e.fosterParentingEnabled;
    e.fosterParentingEnabled = true;
    ie(e, t);
    e.fosterParentingEnabled = e_fosterParentingEnabled;
}
function nt(e, t) {
    e.pendingCharacterTokens.push(t);
}
function ct(e, t) {
    e.pendingCharacterTokens.push(t);
    e.hasNonWhitespacePendingCharacterToken = true;
}
function y(e, t) {
    let a = 0;
    if (e.hasNonWhitespacePendingCharacterToken) {
        for(; a < e.pendingCharacterTokens.length; a++){
            X(e, e.pendingCharacterTokens[a]);
        }
    } else {
        for(; a < e.pendingCharacterTokens.length; a++){
            e._insertCharacters(e.pendingCharacterTokens[a]);
        }
    }
    e.insertionMode = e.originalInsertionMode;
    e._processToken(t);
}
const ot = new Set([
    u.CAPTION,
    u.COL,
    u.COLGROUP,
    u.TBODY,
    u.TD,
    u.TFOOT,
    u.TH,
    u.THEAD,
    u.TR
]);
function ba(e, t) {
    let t_tagID = t.tagID;
    if (ot.has(t_tagID)) {
        if (e.openElements.hasInTableScope(u.CAPTION)) {
            e.openElements.generateImpliedEndTags();
            e.openElements.popUntilTagNamePopped(u.CAPTION);
            e.activeFormattingElements.clearToLastMarker();
            e.insertionMode = i.IN_TABLE;
            k(e, t);
        }
    } else {
        I(e, t);
    }
}
function Aa(e, t) {
    let t_tagID = t.tagID;
    switch(t_tagID){
        case u.CAPTION:
        case u.TABLE:
            {
                if (e.openElements.hasInTableScope(u.CAPTION)) {
                    e.openElements.generateImpliedEndTags();
                    e.openElements.popUntilTagNamePopped(u.CAPTION);
                    e.activeFormattingElements.clearToLastMarker();
                    e.insertionMode = i.IN_TABLE;
                    if (t_tagID === u.TABLE) {
                        W(e, t);
                    }
                }
                break;
            }
        case u.BODY:
        case u.COL:
        case u.COLGROUP:
        case u.HTML:
        case u.TBODY:
        case u.TD:
        case u.TFOOT:
        case u.TH:
        case u.THEAD:
        case u.TR:
            break;
        default:
            ne(e, t);
    }
}
function Ce(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.COL:
            {
                e._appendElement(t, E.HTML);
                t.ackSelfClosing = true;
                break;
            }
        case u.TEMPLATE:
            {
                R(e, t);
                break;
            }
        default:
            se(e, t);
    }
}
function Na(e, t) {
    switch(t.tagID){
        case u.COLGROUP:
            {
                if (e.openElements.currentTagId === u.COLGROUP) {
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE;
                }
                break;
            }
        case u.TEMPLATE:
            {
                B(e, t);
                break;
            }
        case u.COL:
            break;
        default:
            se(e, t);
    }
}
function se(e, t) {
    if (e.openElements.currentTagId === u.COLGROUP) {
        e.openElements.pop();
        e.insertionMode = i.IN_TABLE;
        e._processToken(t);
    }
}
function ce(e, t) {
    switch(t.tagID){
        case u.TR:
            {
                e.openElements.clearBackToTableBodyContext();
                e._insertElement(t, E.HTML);
                e.insertionMode = i.IN_ROW;
                break;
            }
        case u.TH:
        case u.TD:
            {
                e.openElements.clearBackToTableBodyContext();
                e._insertFakeElement(c.TR, u.TR);
                e.insertionMode = i.IN_ROW;
                oe(e, t);
                break;
            }
        case u.CAPTION:
        case u.COL:
        case u.COLGROUP:
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
            {
                if (e.openElements.hasTableBodyContextInTableScope()) {
                    e.openElements.clearBackToTableBodyContext();
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE;
                    k(e, t);
                }
                break;
            }
        default:
            k(e, t);
    }
}
function Ae(e, t) {
    let t_tagID = t.tagID;
    switch(t.tagID){
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
            {
                if (e.openElements.hasInTableScope(t_tagID)) {
                    e.openElements.clearBackToTableBodyContext();
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE;
                }
                break;
            }
        case u.TABLE:
            {
                if (e.openElements.hasTableBodyContextInTableScope()) {
                    e.openElements.clearBackToTableBodyContext();
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE;
                    W(e, t);
                }
                break;
            }
        case u.BODY:
        case u.CAPTION:
        case u.COL:
        case u.COLGROUP:
        case u.HTML:
        case u.TD:
        case u.TH:
        case u.TR:
            break;
        default:
            W(e, t);
    }
}
function oe(e, t) {
    switch(t.tagID){
        case u.TH:
        case u.TD:
            {
                e.openElements.clearBackToTableRowContext();
                e._insertElement(t, E.HTML);
                e.insertionMode = i.IN_CELL;
                e.activeFormattingElements.insertMarker();
                break;
            }
        case u.CAPTION:
        case u.COL:
        case u.COLGROUP:
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
        case u.TR:
            {
                if (e.openElements.hasInTableScope(u.TR)) {
                    e.openElements.clearBackToTableRowContext();
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE_BODY;
                    ce(e, t);
                }
                break;
            }
        default:
            k(e, t);
    }
}
function dt(e, t) {
    switch(t.tagID){
        case u.TR:
            {
                if (e.openElements.hasInTableScope(u.TR)) {
                    e.openElements.clearBackToTableRowContext();
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE_BODY;
                }
                break;
            }
        case u.TABLE:
            {
                if (e.openElements.hasInTableScope(u.TR)) {
                    e.openElements.clearBackToTableRowContext();
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE_BODY;
                    Ae(e, t);
                }
                break;
            }
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
            {
                if (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(u.TR)) {
                    e.openElements.clearBackToTableRowContext();
                    e.openElements.pop();
                    e.insertionMode = i.IN_TABLE_BODY;
                    Ae(e, t);
                }
                break;
            }
        case u.BODY:
        case u.CAPTION:
        case u.COL:
        case u.COLGROUP:
        case u.HTML:
        case u.TD:
        case u.TH:
            break;
        default:
            W(e, t);
    }
}
function Ia(e, t) {
    let t_tagID = t.tagID;
    if (ot.has(t_tagID)) {
        if (e.openElements.hasInTableScope(u.TD) || e.openElements.hasInTableScope(u.TH)) {
            e._closeTableCell();
            oe(e, t);
        }
    } else {
        I(e, t);
    }
}
function Ca(e, t) {
    let t_tagID = t.tagID;
    switch(t_tagID){
        case u.TD:
        case u.TH:
            {
                if (e.openElements.hasInTableScope(t_tagID)) {
                    e.openElements.generateImpliedEndTags();
                    e.openElements.popUntilTagNamePopped(t_tagID);
                    e.activeFormattingElements.clearToLastMarker();
                    e.insertionMode = i.IN_ROW;
                }
                break;
            }
        case u.TABLE:
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
        case u.TR:
            {
                if (e.openElements.hasInTableScope(t_tagID)) {
                    e._closeTableCell();
                    dt(e, t);
                }
                break;
            }
        case u.BODY:
        case u.CAPTION:
        case u.COL:
        case u.COLGROUP:
        case u.HTML:
            break;
        default:
            ne(e, t);
    }
}
function Et(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.OPTION:
            {
                if (e.openElements.currentTagId === u.OPTION) {
                    e.openElements.pop();
                }
                e._insertElement(t, E.HTML);
                break;
            }
        case u.OPTGROUP:
            {
                if (e.openElements.currentTagId === u.OPTION) {
                    e.openElements.pop();
                }
                if (e.openElements.currentTagId === u.OPTGROUP) {
                    e.openElements.pop();
                }
                e._insertElement(t, E.HTML);
                break;
            }
        case u.HR:
            {
                if (e.openElements.currentTagId === u.OPTION) {
                    e.openElements.pop();
                }
                if (e.openElements.currentTagId === u.OPTGROUP) {
                    e.openElements.pop();
                }
                e._appendElement(t, E.HTML);
                t.ackSelfClosing = true;
                break;
            }
        case u.INPUT:
        case u.KEYGEN:
        case u.TEXTAREA:
        case u.SELECT:
            {
                if (e.openElements.hasInSelectScope(u.SELECT)) {
                    e.openElements.popUntilTagNamePopped(u.SELECT);
                    e._resetInsertionMode();
                    if (t.tagID !== u.SELECT) {
                        e._processStartTag(t);
                    }
                }
                break;
            }
        case u.SCRIPT:
        case u.TEMPLATE:
            {
                R(e, t);
                break;
            }
        default:
    }
}
function Tt(e, t) {
    switch(t.tagID){
        case u.OPTGROUP:
            {
                if (e.openElements.stackTop > 0 && e.openElements.currentTagId === u.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === u.OPTGROUP) {
                    e.openElements.pop();
                }
                if (e.openElements.currentTagId === u.OPTGROUP) {
                    e.openElements.pop();
                }
                break;
            }
        case u.OPTION:
            {
                if (e.openElements.currentTagId === u.OPTION) {
                    e.openElements.pop();
                }
                break;
            }
        case u.SELECT:
            {
                if (e.openElements.hasInSelectScope(u.SELECT)) {
                    e.openElements.popUntilTagNamePopped(u.SELECT);
                    e._resetInsertionMode();
                }
                break;
            }
        case u.TEMPLATE:
            {
                B(e, t);
                break;
            }
        default:
    }
}
function Oa(e, t) {
    let t_tagID = t.tagID;
    if (t_tagID === u.CAPTION || t_tagID === u.TABLE || t_tagID === u.TBODY || t_tagID === u.TFOOT || t_tagID === u.THEAD || t_tagID === u.TR || t_tagID === u.TD || t_tagID === u.TH) {
        e.openElements.popUntilTagNamePopped(u.SELECT);
        e._resetInsertionMode();
        e._processStartTag(t);
    } else {
        Et(e, t);
    }
}
function pa(e, t) {
    let t_tagID = t.tagID;
    if (t_tagID === u.CAPTION || t_tagID === u.TABLE || t_tagID === u.TBODY || t_tagID === u.TFOOT || t_tagID === u.THEAD || t_tagID === u.TR || t_tagID === u.TD || t_tagID === u.TH) {
        if (e.openElements.hasInTableScope(t_tagID)) {
            e.openElements.popUntilTagNamePopped(u.SELECT);
            e._resetInsertionMode();
            e.onEndTag(t);
        }
    } else {
        Tt(e, t);
    }
}
function Sa(e, t) {
    switch(t.tagID){
        case u.BASE:
        case u.BASEFONT:
        case u.BGSOUND:
        case u.LINK:
        case u.META:
        case u.NOFRAMES:
        case u.SCRIPT:
        case u.STYLE:
        case u.TEMPLATE:
        case u.TITLE:
            {
                R(e, t);
                break;
            }
        case u.CAPTION:
        case u.COLGROUP:
        case u.TBODY:
        case u.TFOOT:
        case u.THEAD:
            {
                e.tmplInsertionModeStack[0] = i.IN_TABLE;
                e.insertionMode = i.IN_TABLE;
                k(e, t);
                break;
            }
        case u.COL:
            {
                e.tmplInsertionModeStack[0] = i.IN_COLUMN_GROUP;
                e.insertionMode = i.IN_COLUMN_GROUP;
                Ce(e, t);
                break;
            }
        case u.TR:
            {
                e.tmplInsertionModeStack[0] = i.IN_TABLE_BODY;
                e.insertionMode = i.IN_TABLE_BODY;
                ce(e, t);
                break;
            }
        case u.TD:
        case u.TH:
            {
                e.tmplInsertionModeStack[0] = i.IN_ROW;
                e.insertionMode = i.IN_ROW;
                oe(e, t);
                break;
            }
        default:
            e.tmplInsertionModeStack[0] = i.IN_BODY;
            e.insertionMode = i.IN_BODY;
            I(e, t);
    }
}
function La(e, t) {
    if (t.tagID === u.TEMPLATE) {
        B(e, t);
    }
}
function ht(e, t) {
    if (e.openElements.tmplCount > 0) {
        e.openElements.popUntilTagNamePopped(u.TEMPLATE);
        e.activeFormattingElements.clearToLastMarker();
        e.tmplInsertionModeStack.shift();
        e._resetInsertionMode();
        e.onEof(t);
    } else {
        Ie(e, t);
    }
}
function Ra(e, t) {
    if (t.tagID === u.HTML) {
        I(e, t);
    } else {
        re(e, t);
    }
}
function lt(e, t) {
    if (t.tagID === u.HTML) {
        if (!e.fragmentContext) {
            e.insertionMode = i.AFTER_AFTER_BODY;
        }
        if (e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === u.HTML) {
            e._setEndLocation(e.openElements.items[0], t);
            let n = e.openElements.items[1];
            if (n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag) {
                e._setEndLocation(n, t);
            }
        }
    } else {
        re(e, t);
    }
}
function re(e, t) {
    e.insertionMode = i.IN_BODY;
    ie(e, t);
}
function Da(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.FRAMESET:
            {
                e._insertElement(t, E.HTML);
                break;
            }
        case u.FRAME:
            {
                e._appendElement(t, E.HTML);
                t.ackSelfClosing = true;
                break;
            }
        case u.NOFRAMES:
            {
                R(e, t);
                break;
            }
        default:
    }
}
function ga(e, t) {
    if (t.tagID === u.FRAMESET && !e.openElements.isRootHtmlElementCurrent()) {
        e.openElements.pop();
        if (!e.fragmentContext && e.openElements.currentTagId !== u.FRAMESET) {
            e.insertionMode = i.AFTER_FRAMESET;
        }
    }
}
function Pa(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.NOFRAMES:
            {
                R(e, t);
                break;
            }
        default:
    }
}
function Ma(e, t) {
    if (t.tagID === u.HTML) {
        e.insertionMode = i.AFTER_AFTER_FRAMESET;
    }
}
function xa(e, t) {
    if (t.tagID === u.HTML) {
        I(e, t);
    } else {
        ae(e, t);
    }
}
function ae(e, t) {
    e.insertionMode = i.IN_BODY;
    ie(e, t);
}
function Ba(e, t) {
    switch(t.tagID){
        case u.HTML:
            {
                I(e, t);
                break;
            }
        case u.NOFRAMES:
            {
                R(e, t);
                break;
            }
        default:
    }
}
function ka(e, t) {
    t.chars = m;
    e._insertCharacters(t);
}
function Ha(e, t) {
    e._insertCharacters(t);
    e.framesetOk = false;
}
function ft(e) {
    while(e.treeAdapter.getNamespaceURI(e.openElements.current) !== E.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current)){
        e.openElements.pop();
    }
}
function Ua(e, t) {
    if (Ke(t)) {
        ft(e);
        e._startTagOutsideForeignContent(t);
    } else {
        let a = e._getAdjustedCurrentElement();
        let n = e.treeAdapter.getNamespaceURI(a);
        if (n === E.MATHML) {
            fe(t);
        } else if (n === E.SVG) {
            Ve(t);
            me(t);
        }
        ue(t);
        if (t.selfClosing) {
            e._appendElement(t, n);
        } else {
            e._insertElement(t, n);
        }
        t.ackSelfClosing = true;
    }
}
function Fa(e, t) {
    if (t.tagID === u.P || t.tagID === u.BR) {
        ft(e);
        e._endTagOutsideForeignContent(t);
        return;
    }
    for(let a = e.openElements.stackTop; a > 0; a--){
        let n = e.openElements.items[a];
        if (e.treeAdapter.getNamespaceURI(n) === E.HTML) {
            e._endTagOutsideForeignContent(t);
            break;
        }
        let d = e.treeAdapter.getTagName(n);
        if (d.toLowerCase() === t.tagName) {
            t.tagName = d;
            e.openElements.shortenToLength(a);
            break;
        }
    }
}
const ya = new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        39,
        "&apos;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ]
]);
const gs = String.prototype.codePointAt != null ? (e, t)=>e.codePointAt(t) : (e, t)=>{
    if ((e.charCodeAt(t) & 64512) === 55296) {
        return (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536;
    }
    return e.charCodeAt(t);
};
function Oe(e, t) {
    return function(n) {
        let d;
        let h = 0;
        let l = "";
        while(d = e.exec(n)){
            if (h !== d.index) {
                l += n.substring(h, d.index);
            }
            l += t.get(d[0].charCodeAt(0));
            h = d.index + 1;
        }
        return l + n.substring(h);
    };
}
const Ps = Oe(/[&<>'"]/g, ya);
const mt = Oe(/["&\u00A0]/g, new Map([
    [
        34,
        "&quot;"
    ],
    [
        38,
        "&amp;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
const _t = Oe(/[&<>\u00A0]/g, new Map([
    [
        38,
        "&amp;"
    ],
    [
        60,
        "&lt;"
    ],
    [
        62,
        "&gt;"
    ],
    [
        160,
        "&nbsp;"
    ]
]));
const wa = new Set([
    c.AREA,
    c.BASE,
    c.BASEFONT,
    c.BGSOUND,
    c.BR,
    c.COL,
    c.EMBED,
    c.FRAME,
    c.HR,
    c.IMG,
    c.INPUT,
    c.KEYGEN,
    c.LINK,
    c.META,
    c.PARAM,
    c.SOURCE,
    c.TRACK,
    c.WBR
]);
function bt(e, t) {
    return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === E.HTML && wa.has(t.treeAdapter.getTagName(e));
}
const Ya = {
    treeAdapter,
    scriptingEnabled: true
};
function Wer(e, t) {
    let a = {
        ...Ya,
        ...t
    };
    if (bt(e, a)) {
        return "";
    }
    return At(e, a);
}
function At(e, t) {
    let a = "";
    let n = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === c.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === E.HTML ? t.treeAdapter.getTemplateContent(e) : e;
    let d = t.treeAdapter.getChildNodes(n);
    if (d) {
        for (let h of d){
            a += va(h, t);
        }
    }
    return a;
}
function va(e, t) {
    if (t.treeAdapter.isElementNode(e)) {
        return Qa(e, t);
    }
    if (t.treeAdapter.isTextNode(e)) {
        return Wa(e, t);
    }
    if (t.treeAdapter.isCommentNode(e)) {
        return qa(e, t);
    }
    if (t.treeAdapter.isDocumentTypeNode(e)) {
        return Xa(e, t);
    }
    return "";
}
function Qa(e, t) {
    let a = t.treeAdapter.getTagName(e);
    return `<${a}${Ga(e, t)}>${bt(e, t) ? "" : `${At(e, t)}</${a}>`}`;
}
function Ga(e, { treeAdapter }) {
    let a = "";
    for (let n of treeAdapter.getAttrList(e)){
        a += " ";
        if (n.namespace) {
            switch(n.namespace){
                case E.XML:
                    {
                        a += `xml:${n.name}`;
                        break;
                    }
                case E.XMLNS:
                    {
                        if (n.name !== "xmlns") {
                            a += "xmlns:";
                        }
                        a += n.name;
                        break;
                    }
                case E.XLINK:
                    {
                        a += `xlink:${n.name}`;
                        break;
                    }
                default:
                    a += `${n.prefix}:${n.name}`;
            }
        } else {
            a += n.name;
        }
        a += `="${mt(n.value)}"`;
    }
    return a;
}
function Wa(e, t) {
    let { treeAdapter } = t;
    let n = treeAdapter.getTextNodeContent(e);
    let d = treeAdapter.getParentNode(e);
    let h = d && treeAdapter.isElementNode(d) && treeAdapter.getTagName(d);
    if (h && treeAdapter.getNamespaceURI(d) === E.HTML && Me(h, t.scriptingEnabled)) {
        return n;
    }
    return _t(n);
}
function qa(e, { treeAdapter }) {
    return `<!--${treeAdapter.getCommentNodeContent(e)}-->`;
}
function Xa(e, { treeAdapter }) {
    return `<!DOCTYPE ${treeAdapter.getDocumentTypeNodeName(e)}>`;
}
function Cvn(e, t) {
    return q.parse(e, t);
}
function yWs(e, t, a) {
    if (typeof e === "string") {
        a = t;
        t = e;
        e = null;
    }
    let n = q.getFragmentParser(e, a);
    n.tokenizer.write(t, true);
    return n.getFragment();
}
export { kA, uSt, Wer, Cvn, yWs };
