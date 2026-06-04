package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "OsuBeatmap",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "ar",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "artist",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "beatmapset_id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "bpm",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "creator",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "cs",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "difficulty_rating",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "favourite_count",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "hp",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "last_updated",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "length",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "max_combo",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "mode",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "od",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "playcount",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "version",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 19,
					},
				},
				"name": "beatmap",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"download": map[string]any{
				"fields": []any{},
				"name": "download",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "no_video",
											"orig": "no_video",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "ar",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "artist",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "beatmapset_id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "bpm",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "creator",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "cs",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "difficulty_rating",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "favourite_count",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "hp",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "last_updated",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "length",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "max_combo",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "mode",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "od",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "playcount",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "version",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 19,
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
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
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
