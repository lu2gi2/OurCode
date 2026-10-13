import { gn } from "/$bunfs/root/chunk-k3tkc302.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { JI } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { nZe, ybt } from "/$bunfs/root/chunk-b099rff3.js";
import { Gs } from "/$bunfs/root/chunk-7q005g04.js";
const name = "slides";
function A8n() {
    return JI() && ybt();
}
function C8n(t) {
    return sn(t.policyKey);
}
function l(t) {
    return A8n() && C8n(t);
}
const wht = {
    name: "design",
    intent: "design",
    typeTitle: "Design",
    policyKey: "allow_cobalt_plinth_bramble",
    nounPhrase: "a design",
    askWhenNoBrief: "what they want designed",
    description: "Make a new Design artifact from a brief",
    argumentHint: "[what to design]"
};
const c = {
    name,
    intent: "slides",
    typeTitle: "Slides",
    policyKey: "allow_cobalt_plinth_juniper",
    nounPhrase: "a slide deck",
    askWhenNoBrief: "what the deck should be about",
    description: "Make a new Slides deck artifact from a brief",
    argumentHint: "[what the deck is about]"
};
function R8n({ name, intent, typeTitle, nounPhrase, askWhenNoBrief }, s) {
    let r = s.trim();
    return [
        nZe() ? `\`/${name}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Call the \`${gn}\` tool with \`action: "quickstart"\` and \`intent: "${intent}"\` (adding \`design_systems: false\` if you already have a design system's link or the user declined one), then do what its result says: create the new Artifact from the type it names \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 and fill it by following those instructions. If it says no such type is listed for this user, say so plainly, then do what it says instead.` : `\`/${name}\` was invoked: a request for ${nounPhrase} made as a NEW Artifact from the published Artifact type titled "${typeTitle}". Use the \`${gn}\` tool the way its Artifact-types guidance describes: list the Artifact types available to this user (\`type_query: "${typeTitle}"\`), take the listed type whose title is "${typeTitle}" (if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no type titled "${typeTitle}" is listed for this user, say so plainly and offer to make ${nounPhrase} another way.`,
        r ? `The brief:

${r}` : `No brief was given \u2014 ask the user ${askWhenNoBrief} before creating anything.`
    ].join(`

`);
}
function x8n() {
    let t = c;
    Gs({
        name: t.name,
        description: t.description,
        argumentHint: t.argumentHint,
        isEnabled: ()=>l(t),
        userInvocable: true,
        disableModelInvocation: true,
        async getPromptForCommand (i) {
            return [
                {
                    type: "text",
                    text: R8n(t, i)
                }
            ];
        }
    });
}
export { A8n, C8n, wht, R8n, x8n };
