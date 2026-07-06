# frozen_string_literal: true

# Typed models for the OsuBeatmap SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Beatmap entity data model.
#
# @!attribute [rw] approved_date
#   @return [String, nil]
#
# @!attribute [rw] ar
#   @return [Float, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] beatmapset_id
#   @return [Integer, nil]
#
# @!attribute [rw] bpm
#   @return [Float, nil]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] cs
#   @return [Float, nil]
#
# @!attribute [rw] difficulty_rating
#   @return [Float, nil]
#
# @!attribute [rw] favourite_count
#   @return [Integer, nil]
#
# @!attribute [rw] hp
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Integer, nil]
#
# @!attribute [rw] max_combo
#   @return [Integer, nil]
#
# @!attribute [rw] mode
#   @return [Integer, nil]
#
# @!attribute [rw] od
#   @return [Float, nil]
#
# @!attribute [rw] playcount
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
Beatmap = Struct.new(
  :approved_date,
  :ar,
  :artist,
  :beatmapset_id,
  :bpm,
  :creator,
  :cs,
  :difficulty_rating,
  :favourite_count,
  :hp,
  :id,
  :last_updated,
  :length,
  :max_combo,
  :mode,
  :od,
  :playcount,
  :status,
  :title,
  :version,
  keyword_init: true
)

# Request payload for Beatmap#load.
#
# @!attribute [rw] id
#   @return [Integer]
BeatmapLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Download entity data model.
class Download
end

# Request payload for Download#load.
#
# @!attribute [rw] id
#   @return [Integer]
DownloadLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] approved_date
#   @return [String, nil]
#
# @!attribute [rw] ar
#   @return [Float, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] beatmapset_id
#   @return [Integer, nil]
#
# @!attribute [rw] bpm
#   @return [Float, nil]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] cs
#   @return [Float, nil]
#
# @!attribute [rw] difficulty_rating
#   @return [Float, nil]
#
# @!attribute [rw] favourite_count
#   @return [Integer, nil]
#
# @!attribute [rw] hp
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Integer, nil]
#
# @!attribute [rw] max_combo
#   @return [Integer, nil]
#
# @!attribute [rw] mode
#   @return [Integer, nil]
#
# @!attribute [rw] od
#   @return [Float, nil]
#
# @!attribute [rw] playcount
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
Search = Struct.new(
  :approved_date,
  :ar,
  :artist,
  :beatmapset_id,
  :bpm,
  :creator,
  :cs,
  :difficulty_rating,
  :favourite_count,
  :hp,
  :id,
  :last_updated,
  :length,
  :max_combo,
  :mode,
  :od,
  :playcount,
  :status,
  :title,
  :version,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] approved_date
#   @return [String, nil]
#
# @!attribute [rw] ar
#   @return [Float, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] beatmapset_id
#   @return [Integer, nil]
#
# @!attribute [rw] bpm
#   @return [Float, nil]
#
# @!attribute [rw] creator
#   @return [String, nil]
#
# @!attribute [rw] cs
#   @return [Float, nil]
#
# @!attribute [rw] difficulty_rating
#   @return [Float, nil]
#
# @!attribute [rw] favourite_count
#   @return [Integer, nil]
#
# @!attribute [rw] hp
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] length
#   @return [Integer, nil]
#
# @!attribute [rw] max_combo
#   @return [Integer, nil]
#
# @!attribute [rw] mode
#   @return [Integer, nil]
#
# @!attribute [rw] od
#   @return [Float, nil]
#
# @!attribute [rw] playcount
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
SearchListMatch = Struct.new(
  :approved_date,
  :ar,
  :artist,
  :beatmapset_id,
  :bpm,
  :creator,
  :cs,
  :difficulty_rating,
  :favourite_count,
  :hp,
  :id,
  :last_updated,
  :length,
  :max_combo,
  :mode,
  :od,
  :playcount,
  :status,
  :title,
  :version,
  keyword_init: true
)

