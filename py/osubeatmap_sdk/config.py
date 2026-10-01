# OsuBeatmap SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "slug": "osu-beatmap",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Approved Date",
            "type": "`$STRING`",
            "short": "Date when beatmap was approved/ranked",
            "format": "date-time",
          },
          {
            "name": "ar",
            "title": "Ar",
            "type": "`$NUMBER`",
            "short": "Approach rate",
            "format": "float",
          },
          {
            "name": "artist",
            "title": "Artist",
            "type": "`$STRING`",
            "short": "Song artist",
          },
          {
            "name": "beatmapset_id",
            "title": "Beatmapset Id",
            "type": "`$INTEGER`",
            "short": "Beatmap set ID",
          },
          {
            "name": "bpm",
            "title": "Bpm",
            "type": "`$NUMBER`",
            "short": "Beats per minute",
            "format": "float",
          },
          {
            "name": "creator",
            "title": "Creator",
            "type": "`$STRING`",
            "short": "Beatmap creator username",
          },
          {
            "name": "cs",
            "title": "Cs",
            "type": "`$NUMBER`",
            "short": "Circle size",
            "format": "float",
          },
          {
            "name": "difficulty_rating",
            "title": "Difficulty Rating",
            "type": "`$NUMBER`",
            "short": "Star rating",
            "format": "float",
          },
          {
            "name": "favourite_count",
            "title": "Favourite Count",
            "type": "`$INTEGER`",
            "short": "Number of favorites",
          },
          {
            "name": "hp",
            "title": "Hp",
            "type": "`$NUMBER`",
            "short": "HP drain",
            "format": "float",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Beatmap ID",
          },
          {
            "name": "last_updated",
            "title": "Last Updated",
            "type": "`$STRING`",
            "short": "Last update date",
            "format": "date-time",
          },
          {
            "name": "length",
            "title": "Length",
            "type": "`$INTEGER`",
            "short": "Song length in seconds",
          },
          {
            "name": "max_combo",
            "title": "Max Combo",
            "type": "`$INTEGER`",
            "short": "Maximum combo",
          },
          {
            "name": "mode",
            "title": "Mode",
            "type": "`$INTEGER`",
            "short": "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)",
          },
          {
            "name": "od",
            "title": "Od",
            "type": "`$NUMBER`",
            "short": "Overall difficulty",
            "format": "float",
          },
          {
            "name": "playcount",
            "title": "Playcount",
            "type": "`$INTEGER`",
            "short": "Total play count",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Beatmap status (ranked, qualified, loved, etc.)",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Song title",
          },
          {
            "name": "version",
            "title": "Version",
            "type": "`$STRING`",
            "short": "Difficulty name",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "beatmap",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/beatmaps/{id}",
                "segments": [
                  {
                    "lit": "beatmaps",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "beatmaps",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "download",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/download/{id}",
                "segments": [
                  {
                    "lit": "download",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "download",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "no_video",
                      "orig": "noVideo",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "no_video",
                  ],
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
            "title": "Approved Date",
            "type": "`$STRING`",
            "short": "Date when beatmap was approved/ranked",
            "format": "date-time",
          },
          {
            "name": "ar",
            "title": "Ar",
            "type": "`$NUMBER`",
            "short": "Approach rate",
            "format": "float",
          },
          {
            "name": "artist",
            "title": "Artist",
            "type": "`$STRING`",
            "short": "Song artist",
          },
          {
            "name": "beatmapset_id",
            "title": "Beatmapset Id",
            "type": "`$INTEGER`",
            "short": "Beatmap set ID",
          },
          {
            "name": "bpm",
            "title": "Bpm",
            "type": "`$NUMBER`",
            "short": "Beats per minute",
            "format": "float",
          },
          {
            "name": "creator",
            "title": "Creator",
            "type": "`$STRING`",
            "short": "Beatmap creator username",
          },
          {
            "name": "cs",
            "title": "Cs",
            "type": "`$NUMBER`",
            "short": "Circle size",
            "format": "float",
          },
          {
            "name": "difficulty_rating",
            "title": "Difficulty Rating",
            "type": "`$NUMBER`",
            "short": "Star rating",
            "format": "float",
          },
          {
            "name": "favourite_count",
            "title": "Favourite Count",
            "type": "`$INTEGER`",
            "short": "Number of favorites",
          },
          {
            "name": "hp",
            "title": "Hp",
            "type": "`$NUMBER`",
            "short": "HP drain",
            "format": "float",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Beatmap ID",
          },
          {
            "name": "last_updated",
            "title": "Last Updated",
            "type": "`$STRING`",
            "short": "Last update date",
            "format": "date-time",
          },
          {
            "name": "length",
            "title": "Length",
            "type": "`$INTEGER`",
            "short": "Song length in seconds",
          },
          {
            "name": "max_combo",
            "title": "Max Combo",
            "type": "`$INTEGER`",
            "short": "Maximum combo",
          },
          {
            "name": "mode",
            "title": "Mode",
            "type": "`$INTEGER`",
            "short": "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)",
          },
          {
            "name": "od",
            "title": "Od",
            "type": "`$NUMBER`",
            "short": "Overall difficulty",
            "format": "float",
          },
          {
            "name": "playcount",
            "title": "Playcount",
            "type": "`$INTEGER`",
            "short": "Total play count",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Beatmap status (ranked, qualified, loved, etc.)",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Song title",
          },
          {
            "name": "version",
            "title": "Version",
            "type": "`$STRING`",
            "short": "Difficulty name",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/search",
                "segments": [
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.beatmaps`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 50,
                    },
                    {
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "mode",
                    "offset",
                    "q",
                    "status",
                  ],
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
