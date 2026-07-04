# Typed models for the OsuBeatmap SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Beatmap:
    approved_date: Optional[str] = None
    ar: Optional[float] = None
    artist: Optional[str] = None
    beatmapset_id: Optional[int] = None
    bpm: Optional[float] = None
    creator: Optional[str] = None
    cs: Optional[float] = None
    difficulty_rating: Optional[float] = None
    favourite_count: Optional[int] = None
    hp: Optional[float] = None
    id: Optional[int] = None
    last_updated: Optional[str] = None
    length: Optional[int] = None
    max_combo: Optional[int] = None
    mode: Optional[int] = None
    od: Optional[float] = None
    playcount: Optional[int] = None
    status: Optional[str] = None
    title: Optional[str] = None
    version: Optional[str] = None


@dataclass
class BeatmapLoadMatch:
    id: int


@dataclass
class Download:
    pass


@dataclass
class DownloadLoadMatch:
    id: int


@dataclass
class Search:
    approved_date: Optional[str] = None
    ar: Optional[float] = None
    artist: Optional[str] = None
    beatmapset_id: Optional[int] = None
    bpm: Optional[float] = None
    creator: Optional[str] = None
    cs: Optional[float] = None
    difficulty_rating: Optional[float] = None
    favourite_count: Optional[int] = None
    hp: Optional[float] = None
    id: Optional[int] = None
    last_updated: Optional[str] = None
    length: Optional[int] = None
    max_combo: Optional[int] = None
    mode: Optional[int] = None
    od: Optional[float] = None
    playcount: Optional[int] = None
    status: Optional[str] = None
    title: Optional[str] = None
    version: Optional[str] = None


@dataclass
class SearchListMatch:
    approved_date: Optional[str] = None
    ar: Optional[float] = None
    artist: Optional[str] = None
    beatmapset_id: Optional[int] = None
    bpm: Optional[float] = None
    creator: Optional[str] = None
    cs: Optional[float] = None
    difficulty_rating: Optional[float] = None
    favourite_count: Optional[int] = None
    hp: Optional[float] = None
    id: Optional[int] = None
    last_updated: Optional[str] = None
    length: Optional[int] = None
    max_combo: Optional[int] = None
    mode: Optional[int] = None
    od: Optional[float] = None
    playcount: Optional[int] = None
    status: Optional[str] = None
    title: Optional[str] = None
    version: Optional[str] = None

