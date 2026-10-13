import { lt, B } from "/$bunfs/root/chunk-ctt36bn8.js";
class n {
    announcementSlotWinner = null;
    announcementSlotGovernance = null;
    announcementSlotReleased = false;
    countedNoticeImpressions = new Set;
    startupAnnouncementPick = undefined;
    companyAnnouncement = null;
    fotwContent = null;
    ccCeMigrateGroup = undefined;
    savedModelSuccessorDrawnAt = null;
    reset() {
        this.announcementSlotWinner = null;
        this.announcementSlotGovernance = null;
        this.announcementSlotReleased = false;
        this.countedNoticeImpressions.clear();
        this.startupAnnouncementPick = undefined;
        this.companyAnnouncement = null;
        this.fotwContent = null;
        this.ccCeMigrateGroup = undefined;
        this.savedModelSuccessorDrawnAt = null;
    }
}
const J2r = new lt(()=>new n);
function mx() {
    return J2r.of(B());
}
export { J2r, mx };
