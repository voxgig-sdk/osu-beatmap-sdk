import { OsuBeatmapEntityBase } from '../OsuBeatmapEntityBase';
import type { OsuBeatmapSDK } from '../OsuBeatmapSDK';
import type { Control } from '../types';
import type { Beatmap, BeatmapLoadMatch } from '../OsuBeatmapTypes';
declare class BeatmapEntity extends OsuBeatmapEntityBase<Beatmap> {
    constructor(client: OsuBeatmapSDK, entopts: any);
    make(this: BeatmapEntity): BeatmapEntity;
    load(this: any, reqmatch?: BeatmapLoadMatch, ctrl?: Control): Promise<BeatmapEntity>;
}
export { BeatmapEntity };
