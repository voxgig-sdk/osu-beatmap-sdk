import { OsuBeatmapEntityBase } from '../OsuBeatmapEntityBase';
import type { OsuBeatmapSDK } from '../OsuBeatmapSDK';
import type { Control } from '../types';
import type { Download, DownloadLoadMatch } from '../OsuBeatmapTypes';
declare class DownloadEntity extends OsuBeatmapEntityBase<Download> {
    constructor(client: OsuBeatmapSDK, entopts: any);
    make(this: DownloadEntity): DownloadEntity;
    load(this: any, reqmatch?: DownloadLoadMatch, ctrl?: Control): Promise<DownloadEntity>;
}
export { DownloadEntity };
