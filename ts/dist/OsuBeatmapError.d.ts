import { Context } from './Context';
declare class OsuBeatmapError extends Error {
    isOsuBeatmapError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { OsuBeatmapError };
