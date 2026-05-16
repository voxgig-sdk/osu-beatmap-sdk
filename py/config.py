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
            "auth": {
                "prefix": "Bearer",
            },
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
            "name": "approved_date",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "ar",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "beatmapset_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "bpm",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "creator",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "cs",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "difficulty_rating",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "favourite_count",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "hp",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "last_updated",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "length",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "max_combo",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "mode",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "od",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "playcount",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
        ],
        "name": "beatmap",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "no_video",
                      "orig": "no_video",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "approved_date",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "ar",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "beatmapset_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "bpm",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "creator",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "cs",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "difficulty_rating",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "favourite_count",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "hp",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "last_updated",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "length",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "max_combo",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "mode",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "od",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "playcount",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 50,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
