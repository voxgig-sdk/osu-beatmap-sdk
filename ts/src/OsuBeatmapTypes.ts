// Typed models for the OsuBeatmap SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Beatmap {
  approved_date?: string
  ar?: number
  artist?: string
  beatmapset_id?: number
  bpm?: number
  creator?: string
  cs?: number
  difficulty_rating?: number
  favourite_count?: number
  hp?: number
  id?: number
  last_updated?: string
  length?: number
  max_combo?: number
  mode?: number
  od?: number
  playcount?: number
  status?: string
  title?: string
  version?: string
}

export interface BeatmapLoadMatch {
  id: number
}

export interface Download {
}

export interface DownloadLoadMatch {
  id: number
}

export interface Search {
  approved_date?: string
  ar?: number
  artist?: string
  beatmapset_id?: number
  bpm?: number
  creator?: string
  cs?: number
  difficulty_rating?: number
  favourite_count?: number
  hp?: number
  id?: number
  last_updated?: string
  length?: number
  max_combo?: number
  mode?: number
  od?: number
  playcount?: number
  status?: string
  title?: string
  version?: string
}

export type SearchListMatch = Partial<Search>

