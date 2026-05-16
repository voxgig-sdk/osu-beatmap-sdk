# OsuBeatmap SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OsuBeatmapFeatures
  def self.make_feature(name)
    case name
    when "base"
      OsuBeatmapBaseFeature.new
    when "test"
      OsuBeatmapTestFeature.new
    else
      OsuBeatmapBaseFeature.new
    end
  end
end
