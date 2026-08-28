<?php
declare(strict_types=1);

// Typed models for the OsuBeatmap SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Beatmap entity data model. */
class Beatmap
{
    public ?string $approved_date = null;
    public ?float $ar = null;
    public ?string $artist = null;
    public ?int $beatmapset_id = null;
    public ?float $bpm = null;
    public ?string $creator = null;
    public ?float $cs = null;
    public ?float $difficulty_rating = null;
    public ?int $favourite_count = null;
    public ?float $hp = null;
    public ?int $id = null;
    public ?string $last_updated = null;
    public ?int $length = null;
    public ?int $max_combo = null;
    public ?int $mode = null;
    public ?float $od = null;
    public ?int $playcount = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $version = null;
}

/** Request payload for Beatmap#load. */
class BeatmapLoadMatch
{
    public int $id;
}

/** Download entity data model. */
class Download
{
    public ?string $id = null;
}

/** Request payload for Download#load. */
class DownloadLoadMatch
{
    public int $id;
    public ?bool $no_video = null;
}

/** Search entity data model. */
class Search
{
    public ?string $approved_date = null;
    public ?float $ar = null;
    public ?string $artist = null;
    public ?int $beatmapset_id = null;
    public ?float $bpm = null;
    public ?string $creator = null;
    public ?float $cs = null;
    public ?float $difficulty_rating = null;
    public ?int $favourite_count = null;
    public ?float $hp = null;
    public ?int $id = null;
    public ?string $last_updated = null;
    public ?int $length = null;
    public ?int $max_combo = null;
    public ?int $mode = null;
    public ?float $od = null;
    public ?int $playcount = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $version = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public ?int $limit = null;
    public ?int $mode = null;
    public ?int $offset = null;
    public ?string $q = null;
    public ?string $status = null;
}

