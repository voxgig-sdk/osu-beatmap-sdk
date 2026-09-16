# OsuBeatmap SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OsuBeatmapFeatures
  def self.make_feature(name)
    case name
    when "base"
      OsuBeatmapBaseFeature.new
    when "ratelimit"
      OsuBeatmapRatelimitFeature.new
    when "retry"
      OsuBeatmapRetryFeature.new
    when "test"
      OsuBeatmapTestFeature.new
    when "timeout"
      OsuBeatmapTimeoutFeature.new
    else
      OsuBeatmapBaseFeature.new
    end
  end
end
