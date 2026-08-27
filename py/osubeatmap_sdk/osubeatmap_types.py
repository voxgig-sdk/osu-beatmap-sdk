# Typed models for the OsuBeatmap SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Beatmap(TypedDict, total=False):
    approved_date: str
    ar: float
    artist: str
    beatmapset_id: int
    bpm: float
    creator: str
    cs: float
    difficulty_rating: float
    favourite_count: int
    hp: float
    id: int
    last_updated: str
    length: int
    max_combo: int
    mode: int
    od: float
    playcount: int
    status: str
    title: str
    version: str


class BeatmapLoadMatch(TypedDict):
    id: int


class Download(TypedDict, total=False):
    id: str


class DownloadLoadMatch(TypedDict):
    id: int


class Search(TypedDict, total=False):
    approved_date: str
    ar: float
    artist: str
    beatmapset_id: int
    bpm: float
    creator: str
    cs: float
    difficulty_rating: float
    favourite_count: int
    hp: float
    id: int
    last_updated: str
    length: int
    max_combo: int
    mode: int
    od: float
    playcount: int
    status: str
    title: str
    version: str


class SearchListMatch(TypedDict, total=False):
    approved_date: str
    ar: float
    artist: str
    beatmapset_id: int
    bpm: float
    creator: str
    cs: float
    difficulty_rating: float
    favourite_count: int
    hp: float
    id: int
    last_updated: str
    length: int
    max_combo: int
    mode: int
    od: float
    playcount: int
    status: str
    title: str
    version: str
