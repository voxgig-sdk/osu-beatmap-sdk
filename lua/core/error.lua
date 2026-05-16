-- OsuBeatmap SDK error

local OsuBeatmapError = {}
OsuBeatmapError.__index = OsuBeatmapError


function OsuBeatmapError.new(code, msg, ctx)
  local self = setmetatable({}, OsuBeatmapError)
  self.is_sdk_error = true
  self.sdk = "OsuBeatmap"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function OsuBeatmapError:error()
  return self.msg
end


function OsuBeatmapError:__tostring()
  return self.msg
end


return OsuBeatmapError
