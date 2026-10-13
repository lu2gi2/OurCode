import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
const o = "cli";
class s {
    bundledSkills = [];
    bundledSkillKillSwitchSurvivors = new Set;
    bundledSkillSessionResetHooks = [];
    bundledSkillsInitialized = false;
    shippedTablesFillFailed = false;
    bundledSkillFilesElsewhere = undefined;
    commandsOffHere = undefined;
    attachedFolderSkills = undefined;
    builtinToolsServedByMcp = undefined;
    builtinCommandTable = undefined;
    builtinCommandNames = undefined;
    shippedCommandNames = undefined;
    loadedCommands = new Map;
    skillToolCommands = new Map;
    slashCommandToolSkills = new Map;
    skillIndex = new Map;
    reservedSpellingsByLoadedResult = new WeakMap;
    loadedResultsMissingTrustedNames = new WeakSet;
    skillDirCommands = new Map;
    dynamicSkillStates = new Map;
    lastCollisionExtrasSpellings = new Map;
    dynamicSkillStateKey = ()=>o;
    dynamicSkillsLoaded = Oe();
    skillsChanged = Oe();
    replacedSkillNames = new Map;
    replacedSkillNamesSeq = 0;
    shadowedBundledSkills = undefined;
    fallbackShadowTelemetryLogged = new Set;
    skillContentIntern = new Map;
    skillFiles = new WeakMap;
    builtinPlugins = new Map;
    builtinPluginsInitialized = false;
    builtinPluginFailures = new Map;
    builtinPluginWiredSkills = new WeakMap;
    bundledWorkflows = [];
    markdownFiles = new Map;
    markdownScansGivenUp = 0;
    agentDefinitions = new Map;
    projectAgentsElsewhere = [];
    outputStyleDirStyles = new Map;
    allOutputStyles = new Map;
    routines = new Map;
    routineCronTasks = new Map;
    allWorkflows = new Map;
    reservedSpellingsFor(e, n) {
        let i = this.reservedSpellingsByLoadedResult.get(e);
        if (i) {
            return i;
        }
        let l = n();
        this.reservedSpellingsByLoadedResult.set(e, l);
        return l;
    }
    refusedReservedSkillNames() {
        return Array.from(this.dynamicSkillStates.get(this.dynamicSkillStateKey())?.refusedReservedNames.values() ?? []);
    }
    markLoadedResultMissingTrustedNames(e) {
        this.loadedResultsMissingTrustedNames.add(e);
    }
    loadedResultIsMissingTrustedNames(e) {
        return this.loadedResultsMissingTrustedNames.has(e);
    }
    clearLoadCaches() {
        this.invalidateCommands();
        this.skillDirCommands.clear();
        this.markdownFiles.clear();
        this.agentDefinitions.clear();
        this.outputStyleDirStyles.clear();
        this.allOutputStyles.clear();
        this.routines.clear();
        this.routineCronTasks.clear();
        this.allWorkflows.clear();
    }
    invalidateCommands() {
        this.builtinCommandTable = undefined;
        this.builtinCommandNames = undefined;
        this.shippedCommandNames = undefined;
        this.loadedCommands.clear();
        this.skillToolCommands.clear();
        this.slashCommandToolSkills.clear();
        this.skillIndex.clear();
    }
    invalidateSkillDirs() {
        this.skillDirCommands.clear();
        let e = this.dynamicSkillStates.get(this.dynamicSkillStateKey());
        if (e) {
            e.conditionalSkills.clear();
            e.activatedConditionalSkillNames.clear();
        }
    }
    evictDynamicSkillState(e) {
        this.dynamicSkillStates.delete(e);
        this.lastCollisionExtrasSpellings.delete(e);
        let n = `${e}:`;
        for (let i of [
            ...this.skillDirCommands.keys()
        ]){
            if (i.startsWith(n)) {
                this.skillDirCommands.delete(i);
            }
        }
    }
}
function s7(e, n, i) {
    let l = e.get(n);
    if (l !== undefined) {
        return l;
    }
    let t = i();
    e.set(n, t);
    return t;
}
function i7(e) {
    return e ?? "\x00";
}
const a = new q(()=>new s);
function xr() {
    return a.of(B().host);
}
export { s7, i7, xr };
