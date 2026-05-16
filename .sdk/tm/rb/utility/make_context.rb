# OsuBeatmap SDK utility: make_context
require_relative '../core/context'
module OsuBeatmapUtilities
  MakeContext = ->(ctxmap, basectx) {
    OsuBeatmapContext.new(ctxmap, basectx)
  }
end
