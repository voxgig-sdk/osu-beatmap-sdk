// Typed models for the OsuBeatmap SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Beatmap is the typed data model for the beatmap entity.
type Beatmap struct {
	ApprovedDate *string `json:"approved_date,omitempty"`
	Ar *float64 `json:"ar,omitempty"`
	Artist *string `json:"artist,omitempty"`
	BeatmapsetId *int `json:"beatmapset_id,omitempty"`
	Bpm *float64 `json:"bpm,omitempty"`
	Creator *string `json:"creator,omitempty"`
	Cs *float64 `json:"cs,omitempty"`
	DifficultyRating *float64 `json:"difficulty_rating,omitempty"`
	FavouriteCount *int `json:"favourite_count,omitempty"`
	Hp *float64 `json:"hp,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Length *int `json:"length,omitempty"`
	MaxCombo *int `json:"max_combo,omitempty"`
	Mode *int `json:"mode,omitempty"`
	Od *float64 `json:"od,omitempty"`
	Playcount *int `json:"playcount,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	Version *string `json:"version,omitempty"`
}

// BeatmapLoadMatch is the typed request payload for Beatmap.LoadTyped.
type BeatmapLoadMatch struct {
	Id int `json:"id"`
}

// Download is the typed data model for the download entity.
type Download struct {
}

// DownloadLoadMatch is the typed request payload for Download.LoadTyped.
type DownloadLoadMatch struct {
	Id int `json:"id"`
}

// Search is the typed data model for the search entity.
type Search struct {
	ApprovedDate *string `json:"approved_date,omitempty"`
	Ar *float64 `json:"ar,omitempty"`
	Artist *string `json:"artist,omitempty"`
	BeatmapsetId *int `json:"beatmapset_id,omitempty"`
	Bpm *float64 `json:"bpm,omitempty"`
	Creator *string `json:"creator,omitempty"`
	Cs *float64 `json:"cs,omitempty"`
	DifficultyRating *float64 `json:"difficulty_rating,omitempty"`
	FavouriteCount *int `json:"favourite_count,omitempty"`
	Hp *float64 `json:"hp,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Length *int `json:"length,omitempty"`
	MaxCombo *int `json:"max_combo,omitempty"`
	Mode *int `json:"mode,omitempty"`
	Od *float64 `json:"od,omitempty"`
	Playcount *int `json:"playcount,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	Version *string `json:"version,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	ApprovedDate *string `json:"approved_date,omitempty"`
	Ar *float64 `json:"ar,omitempty"`
	Artist *string `json:"artist,omitempty"`
	BeatmapsetId *int `json:"beatmapset_id,omitempty"`
	Bpm *float64 `json:"bpm,omitempty"`
	Creator *string `json:"creator,omitempty"`
	Cs *float64 `json:"cs,omitempty"`
	DifficultyRating *float64 `json:"difficulty_rating,omitempty"`
	FavouriteCount *int `json:"favourite_count,omitempty"`
	Hp *float64 `json:"hp,omitempty"`
	Id *int `json:"id,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Length *int `json:"length,omitempty"`
	MaxCombo *int `json:"max_combo,omitempty"`
	Mode *int `json:"mode,omitempty"`
	Od *float64 `json:"od,omitempty"`
	Playcount *int `json:"playcount,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	Version *string `json:"version,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
