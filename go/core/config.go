package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "OsuBeatmap",
			"slug": "osu-beatmap",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://osu.direct/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"beatmap": map[string]any{},
				"download": map[string]any{},
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"beatmap": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "approved_date",
						"short": "Date when beatmap was approved/ranked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ar",
						"short": "Approach rate",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "artist",
						"short": "Song artist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "beatmapset_id",
						"short": "Beatmap set ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "bpm",
						"short": "Beats per minute",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "creator",
						"short": "Beatmap creator username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cs",
						"short": "Circle size",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "difficulty_rating",
						"short": "Star rating",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "favourite_count",
						"short": "Number of favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hp",
						"short": "HP drain",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"short": "Beatmap ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "last_updated",
						"short": "Last update date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "length",
						"short": "Song length in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_combo",
						"short": "Maximum combo",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "mode",
						"short": "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "od",
						"short": "Overall difficulty",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "playcount",
						"short": "Total play count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status",
						"short": "Beatmap status (ranked, qualified, loved, etc.)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Song title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"short": "Difficulty name",
						"type": "`$STRING`",
					},
				},
				"name": "beatmap",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/beatmaps/{id}",
								"parts": []any{
									"beatmaps",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"download": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "download",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "no_video",
											"orig": "no_video",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/download/{id}",
								"parts": []any{
									"download",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"no_video",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "approved_date",
						"short": "Date when beatmap was approved/ranked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ar",
						"short": "Approach rate",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "artist",
						"short": "Song artist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "beatmapset_id",
						"short": "Beatmap set ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "bpm",
						"short": "Beats per minute",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "creator",
						"short": "Beatmap creator username",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cs",
						"short": "Circle size",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "difficulty_rating",
						"short": "Star rating",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "favourite_count",
						"short": "Number of favorites",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hp",
						"short": "HP drain",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"short": "Beatmap ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "last_updated",
						"short": "Last update date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "length",
						"short": "Song length in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "max_combo",
						"short": "Maximum combo",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "mode",
						"short": "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "od",
						"short": "Overall difficulty",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "playcount",
						"short": "Total play count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status",
						"short": "Beatmap status (ranked, qualified, loved, etc.)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Song title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"short": "Difficulty name",
						"type": "`$STRING`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"parts": []any{
									"search",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"mode",
										"offset",
										"q",
										"status",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.beatmaps`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
