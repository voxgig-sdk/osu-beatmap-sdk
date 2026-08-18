-- OsuBeatmap SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "OsuBeatmap",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://osu.direct/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["beatmap"] = {},
        ["download"] = {},
        ["search"] = {},
      },
    },
    entity = {
      ["beatmap"] = {
        ["fields"] = {
          {
            ["name"] = "approved_date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ar",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "artist",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "beatmapset_id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "bpm",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "creator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "difficulty_rating",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "favourite_count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hp",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "last_updated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "length",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "max_combo",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "od",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "playcount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "beatmap",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/beatmaps/{id}",
                ["parts"] = {
                  "beatmaps",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["download"] = {
        ["fields"] = {},
        ["name"] = "download",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "no_video",
                      ["orig"] = "no_video",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/download/{id}",
                ["parts"] = {
                  "download",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "no_video",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "approved_date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ar",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "artist",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "beatmapset_id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "bpm",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "creator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cs",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "difficulty_rating",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "favourite_count",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hp",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "last_updated",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "length",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "max_combo",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "mode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "od",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "playcount",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 50,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "mode",
                      ["orig"] = "mode",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "status",
                      ["orig"] = "status",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search",
                ["parts"] = {
                  "search",
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "mode",
                    "offset",
                    "q",
                    "status",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.beatmaps`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
