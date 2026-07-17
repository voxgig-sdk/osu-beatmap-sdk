-- OsuBeatmap SDK exists test

local sdk = require("osu-beatmap_sdk")

describe("OsuBeatmapSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
