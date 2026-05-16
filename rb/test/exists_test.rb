# OsuBeatmap SDK exists test

require "minitest/autorun"
require_relative "../OsuBeatmap_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = OsuBeatmapSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
