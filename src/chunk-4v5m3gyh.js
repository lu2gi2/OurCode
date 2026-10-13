import { Pi } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Mgo, LE, o7t } from "/$bunfs/root/chunk-nbx3tg29.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
const ame = "cc-plugin-you-should-know";
const H8n = {
    id: "you-should-know-plugin",
    providerAgnostic: true,
    advertisedCommand: "plugin",
    cooldownSessions: 10,
    maxLifetimeShows: 3,
    content: async (o)=>`Want a side agent watching your back while Claude works? Turn on You should know:
${Wn("suggestion", o.theme)(`/plugin enable ${ame}@${Pi}`)}`,
    isRelevant: async ()=>Mgo(ame) && LE(ame)?.defaultEnabled === false && o7t(`${ame}@${Pi}`) === undefined
};
export { ame, H8n };
