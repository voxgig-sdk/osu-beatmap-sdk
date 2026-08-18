# OsuBeatmap SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "name": "approved_date",
            "type": "`$STRING`",
          },
          {
            "name": "ar",
            "type": "`$NUMBER`",
          },
          {
            "name": "artist",
            "type": "`$STRING`",
          },
          {
            "name": "beatmapset_id",
            "type": "`$INTEGER`",
          },
          {
            "name": "bpm",
            "type": "`$NUMBER`",
          },
          {
            "name": "creator",
            "type": "`$STRING`",
          },
          {
            "name": "cs",
            "type": "`$NUMBER`",
          },
          {
            "name": "difficulty_rating",
            "type": "`$NUMBER`",
          },
          {
            "name": "favourite_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "hp",
            "type": "`$NUMBER`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "last_updated",
            "type": "`$STRING`",
          },
          {
            "name": "length",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_combo",
            "type": "`$INTEGER`",
          },
          {
            "name": "mode",
            "type": "`$INTEGER`",
          },
          {
            "name": "od",
            "type": "`$NUMBER`",
          },
          {
            "name": "playcount",
            "type": "`$INTEGER`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "version",
            "type": "`$STRING`",
          },
        ],
        "name": "beatmap",
        "op": {
          "load": {
            "input": "data",
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
              },
            ],
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
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "no_video",
                      "orig": "no_video",
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
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "ar",
            "type": "`$NUMBER`",
          },
          {
            "name": "artist",
            "type": "`$STRING`",
          },
          {
            "name": "beatmapset_id",
            "type": "`$INTEGER`",
          },
          {
            "name": "bpm",
            "type": "`$NUMBER`",
          },
          {
            "name": "creator",
            "type": "`$STRING`",
          },
          {
            "name": "cs",
            "type": "`$NUMBER`",
          },
          {
            "name": "difficulty_rating",
            "type": "`$NUMBER`",
          },
          {
            "name": "favourite_count",
            "type": "`$INTEGER`",
          },
          {
            "name": "hp",
            "type": "`$NUMBER`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "last_updated",
            "type": "`$STRING`",
          },
          {
            "name": "length",
            "type": "`$INTEGER`",
          },
          {
            "name": "max_combo",
            "type": "`$INTEGER`",
          },
          {
            "name": "mode",
            "type": "`$INTEGER`",
          },
          {
            "name": "od",
            "type": "`$NUMBER`",
          },
          {
            "name": "playcount",
            "type": "`$INTEGER`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "version",
            "type": "`$STRING`",
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
