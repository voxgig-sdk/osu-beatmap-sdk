package = "voxgig-sdk-osu-beatmap"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/osu-beatmap-sdk.git"
}
description = {
  summary = "OsuBeatmap SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["osu-beatmap_sdk"] = "osu-beatmap_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
