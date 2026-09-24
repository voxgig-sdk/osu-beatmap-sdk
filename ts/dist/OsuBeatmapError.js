"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OsuBeatmapError = void 0;
class OsuBeatmapError extends Error {
    isOsuBeatmapError = true;
    sdk = 'OsuBeatmap';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.OsuBeatmapError = OsuBeatmapError;
//# sourceMappingURL=OsuBeatmapError.js.map