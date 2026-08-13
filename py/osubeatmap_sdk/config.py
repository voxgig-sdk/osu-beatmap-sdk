# OsuBeatmap SDK configuration


def make_config():
    return {
        "main": {
            "name": "OsuBeatmap",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://osu.direct/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "beatmap": {},
                "download": {},
                "search": {},
            },
        },
        "entity": {
      "beatmap": {
        "fields": [
          {
            "active": True,
            "name": "approved_date",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "ar",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "beatmapset_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "bpm",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "creator",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "cs",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "difficulty_rating",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "favourite_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "hp",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "last_updated",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "length",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "max_combo",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "od",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "playcount",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
        ],
        "name": "beatmap",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/beatmaps/{id}",
                "parts": [
                  "beatmaps",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "download": {
        "fields": [],
        "name": "download",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "no_video",
                      "orig": "no_video",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/download/{id}",
                "parts": [
                  "download",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                    "no_video",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "active": True,
            "name": "approved_date",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "ar",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "beatmapset_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "bpm",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "creator",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "cs",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "difficulty_rating",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "favourite_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "hp",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "last_updated",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "length",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "max_combo",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "mode",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "od",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "playcount",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search",
                "parts": [
                  "search",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "mode",
                    "offset",
                    "q",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.beatmaps`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
