export interface Beatmap {
    approved_date?: string;
    ar?: number;
    artist?: string;
    beatmapset_id?: number;
    bpm?: number;
    creator?: string;
    cs?: number;
    difficulty_rating?: number;
    favourite_count?: number;
    hp?: number;
    id?: number;
    last_updated?: string;
    length?: number;
    max_combo?: number;
    mode?: number;
    od?: number;
    playcount?: number;
    status?: string;
    title?: string;
    version?: string;
}
export interface BeatmapLoadMatch {
    id: number;
}
export interface Download {
    id?: string;
}
export interface DownloadLoadMatch {
    id: number;
    no_video?: boolean;
}
export interface Search {
    approved_date?: string;
    ar?: number;
    artist?: string;
    beatmapset_id?: number;
    bpm?: number;
    creator?: string;
    cs?: number;
    difficulty_rating?: number;
    favourite_count?: number;
    hp?: number;
    id?: number;
    last_updated?: string;
    length?: number;
    max_combo?: number;
    mode?: number;
    od?: number;
    playcount?: number;
    status?: string;
    title?: string;
    version?: string;
}
export interface SearchListMatch {
    limit?: number;
    mode?: number;
    offset?: number;
    q?: string;
    status?: string;
}
