-- Typed models for the OsuBeatmap SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Beatmap
---@field approved_date? string
---@field ar? number
---@field artist? string
---@field beatmapset_id? number
---@field bpm? number
---@field creator? string
---@field cs? number
---@field difficulty_rating? number
---@field favourite_count? number
---@field hp? number
---@field id? number
---@field last_updated? string
---@field length? number
---@field max_combo? number
---@field mode? number
---@field od? number
---@field playcount? number
---@field status? string
---@field title? string
---@field version? string

---@class BeatmapLoadMatch
---@field id number

---@class Download
---@field id? string

---@class DownloadLoadMatch
---@field id number
---@field no_video? boolean

---@class Search
---@field approved_date? string
---@field ar? number
---@field artist? string
---@field beatmapset_id? number
---@field bpm? number
---@field creator? string
---@field cs? number
---@field difficulty_rating? number
---@field favourite_count? number
---@field hp? number
---@field id? number
---@field last_updated? string
---@field length? number
---@field max_combo? number
---@field mode? number
---@field od? number
---@field playcount? number
---@field status? string
---@field title? string
---@field version? string

---@class SearchListMatch
---@field limit? number
---@field mode? number
---@field offset? number
---@field q? string
---@field status? string

local M = {}

return M
