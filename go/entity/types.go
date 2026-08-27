// Typed models for the OsuBeatmap SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/osu-beatmap-sdk/go/core"
)

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
	Id *string `json:"id,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
