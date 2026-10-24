# OsuBeatmap SDK configuration

module OsuBeatmapConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "OsuBeatmap",
        "slug" => "osu-beatmap",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "now" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://osu.direct/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "beatmap" => {},
          "download" => {},
          "search" => {},
        },
      },
      "entity" => {
        "beatmap" => {
          "fields" => [
            {
              "name" => "approved_date",
              "title" => "Approved Date",
              "type" => "`$STRING`",
              "short" => "Date when beatmap was approved/ranked",
              "format" => "date-time",
            },
            {
              "name" => "ar",
              "title" => "Ar",
              "type" => "`$NUMBER`",
              "short" => "Approach rate",
              "format" => "float",
            },
            {
              "name" => "artist",
              "title" => "Artist",
              "type" => "`$STRING`",
              "short" => "Song artist",
            },
            {
              "name" => "beatmapset_id",
              "title" => "Beatmapset Id",
              "type" => "`$INTEGER`",
              "short" => "Beatmap set ID",
            },
            {
              "name" => "bpm",
              "title" => "Bpm",
              "type" => "`$NUMBER`",
              "short" => "Beats per minute",
              "format" => "float",
            },
            {
              "name" => "creator",
              "title" => "Creator",
              "type" => "`$STRING`",
              "short" => "Beatmap creator username",
            },
            {
              "name" => "cs",
              "title" => "Cs",
              "type" => "`$NUMBER`",
              "short" => "Circle size",
              "format" => "float",
            },
            {
              "name" => "difficulty_rating",
              "title" => "Difficulty Rating",
              "type" => "`$NUMBER`",
              "short" => "Star rating",
              "format" => "float",
            },
            {
              "name" => "favourite_count",
              "title" => "Favourite Count",
              "type" => "`$INTEGER`",
              "short" => "Number of favorites",
            },
            {
              "name" => "hp",
              "title" => "Hp",
              "type" => "`$NUMBER`",
              "short" => "HP drain",
              "format" => "float",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "short" => "Beatmap ID",
            },
            {
              "name" => "last_updated",
              "title" => "Last Updated",
              "type" => "`$STRING`",
              "short" => "Last update date",
              "format" => "date-time",
            },
            {
              "name" => "length",
              "title" => "Length",
              "type" => "`$INTEGER`",
              "short" => "Song length in seconds",
            },
            {
              "name" => "max_combo",
              "title" => "Max Combo",
              "type" => "`$INTEGER`",
              "short" => "Maximum combo",
            },
            {
              "name" => "mode",
              "title" => "Mode",
              "type" => "`$INTEGER`",
              "short" => "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)",
            },
            {
              "name" => "od",
              "title" => "Od",
              "type" => "`$NUMBER`",
              "short" => "Overall difficulty",
              "format" => "float",
            },
            {
              "name" => "playcount",
              "title" => "Playcount",
              "type" => "`$INTEGER`",
              "short" => "Total play count",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "short" => "Beatmap status (ranked, qualified, loved, etc.)",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Song title",
            },
            {
              "name" => "version",
              "title" => "Version",
              "type" => "`$STRING`",
              "short" => "Difficulty name",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "beatmap",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/beatmaps/{id}",
                  "segments" => [
                    {
                      "lit" => "beatmaps",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "beatmaps",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "download" => {
          "fields" => [
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "download",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/download/{id}",
                  "segments" => [
                    {
                      "lit" => "download",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "download",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                    "query" => [
                      {
                        "name" => "no_video",
                        "orig" => "noVideo",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "response" => {
                    "binary" => true,
                    "kind" => "raw",
                    "media" => "application/octet-stream",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "search" => {
          "fields" => [
            {
              "name" => "approved_date",
              "title" => "Approved Date",
              "type" => "`$STRING`",
              "short" => "Date when beatmap was approved/ranked",
              "format" => "date-time",
            },
            {
              "name" => "ar",
              "title" => "Ar",
              "type" => "`$NUMBER`",
              "short" => "Approach rate",
              "format" => "float",
            },
            {
              "name" => "artist",
              "title" => "Artist",
              "type" => "`$STRING`",
              "short" => "Song artist",
            },
            {
              "name" => "beatmapset_id",
              "title" => "Beatmapset Id",
              "type" => "`$INTEGER`",
              "short" => "Beatmap set ID",
            },
            {
              "name" => "bpm",
              "title" => "Bpm",
              "type" => "`$NUMBER`",
              "short" => "Beats per minute",
              "format" => "float",
            },
            {
              "name" => "creator",
              "title" => "Creator",
              "type" => "`$STRING`",
              "short" => "Beatmap creator username",
            },
            {
              "name" => "cs",
              "title" => "Cs",
              "type" => "`$NUMBER`",
              "short" => "Circle size",
              "format" => "float",
            },
            {
              "name" => "difficulty_rating",
              "title" => "Difficulty Rating",
              "type" => "`$NUMBER`",
              "short" => "Star rating",
              "format" => "float",
            },
            {
              "name" => "favourite_count",
              "title" => "Favourite Count",
              "type" => "`$INTEGER`",
              "short" => "Number of favorites",
            },
            {
              "name" => "hp",
              "title" => "Hp",
              "type" => "`$NUMBER`",
              "short" => "HP drain",
              "format" => "float",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "short" => "Beatmap ID",
            },
            {
              "name" => "last_updated",
              "title" => "Last Updated",
              "type" => "`$STRING`",
              "short" => "Last update date",
              "format" => "date-time",
            },
            {
              "name" => "length",
              "title" => "Length",
              "type" => "`$INTEGER`",
              "short" => "Song length in seconds",
            },
            {
              "name" => "max_combo",
              "title" => "Max Combo",
              "type" => "`$INTEGER`",
              "short" => "Maximum combo",
            },
            {
              "name" => "mode",
              "title" => "Mode",
              "type" => "`$INTEGER`",
              "short" => "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)",
            },
            {
              "name" => "od",
              "title" => "Od",
              "type" => "`$NUMBER`",
              "short" => "Overall difficulty",
              "format" => "float",
            },
            {
              "name" => "playcount",
              "title" => "Playcount",
              "type" => "`$INTEGER`",
              "short" => "Total play count",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "short" => "Beatmap status (ranked, qualified, loved, etc.)",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Song title",
            },
            {
              "name" => "version",
              "title" => "Version",
              "type" => "`$STRING`",
              "short" => "Difficulty name",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/search",
                  "segments" => [
                    {
                      "lit" => "search",
                    },
                  ],
                  "parts" => [
                    "search",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.beatmaps`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                      {
                        "name" => "mode",
                        "orig" => "mode",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "field" => true,
                      },
                      {
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 0,
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "status",
                        "orig" => "status",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "field" => true,
                      },
                    ],
                  },
                  "select" => {},
                  "response" => {
                    "kind" => "json",
                    "media" => "application/json",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    OsuBeatmapFeatures.make_feature(name)
  end
end
