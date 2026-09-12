import { OsuBeatmapEntityBase } from '../OsuBeatmapEntityBase';
import type { OsuBeatmapSDK } from '../OsuBeatmapSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../OsuBeatmapTypes';
declare class SearchEntity extends OsuBeatmapEntityBase<Search> {
    constructor(client: OsuBeatmapSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
