# OsuBeatmap SDK utility: feature_add
module OsuBeatmapUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
