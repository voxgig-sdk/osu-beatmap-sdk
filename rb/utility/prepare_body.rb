# OsuBeatmap SDK utility: prepare_body
require_relative 'media'
module OsuBeatmapUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return OsuBeatmapUtilities.raw_body(ctx.reqdata) if OsuBeatmapUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
