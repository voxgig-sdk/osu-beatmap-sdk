import { BeatmapEntity } from './entity/BeatmapEntity';
import { DownloadEntity } from './entity/DownloadEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './OsuBeatmapTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { OsuBeatmapEntityBase } from './OsuBeatmapEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class OsuBeatmapSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Beatmap(entopts?: Record<string, any>): BeatmapEntity;
    Download(entopts?: Record<string, any>): DownloadEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): OsuBeatmapSDK;
    tester(testopts?: any, sdkopts?: any): OsuBeatmapSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof OsuBeatmapSDK;
export { stdutil, config, BaseFeature, OsuBeatmapEntityBase, OsuBeatmapSDK, SDK, };
