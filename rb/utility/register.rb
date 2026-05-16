# OsuBeatmap SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

OsuBeatmapUtility.registrar = ->(u) {
  u.clean = OsuBeatmapUtilities::Clean
  u.done = OsuBeatmapUtilities::Done
  u.make_error = OsuBeatmapUtilities::MakeError
  u.feature_add = OsuBeatmapUtilities::FeatureAdd
  u.feature_hook = OsuBeatmapUtilities::FeatureHook
  u.feature_init = OsuBeatmapUtilities::FeatureInit
  u.fetcher = OsuBeatmapUtilities::Fetcher
  u.make_fetch_def = OsuBeatmapUtilities::MakeFetchDef
  u.make_context = OsuBeatmapUtilities::MakeContext
  u.make_options = OsuBeatmapUtilities::MakeOptions
  u.make_request = OsuBeatmapUtilities::MakeRequest
  u.make_response = OsuBeatmapUtilities::MakeResponse
  u.make_result = OsuBeatmapUtilities::MakeResult
  u.make_point = OsuBeatmapUtilities::MakePoint
  u.make_spec = OsuBeatmapUtilities::MakeSpec
  u.make_url = OsuBeatmapUtilities::MakeUrl
  u.param = OsuBeatmapUtilities::Param
  u.prepare_auth = OsuBeatmapUtilities::PrepareAuth
  u.prepare_body = OsuBeatmapUtilities::PrepareBody
  u.prepare_headers = OsuBeatmapUtilities::PrepareHeaders
  u.prepare_method = OsuBeatmapUtilities::PrepareMethod
  u.prepare_params = OsuBeatmapUtilities::PrepareParams
  u.prepare_path = OsuBeatmapUtilities::PreparePath
  u.prepare_query = OsuBeatmapUtilities::PrepareQuery
  u.result_basic = OsuBeatmapUtilities::ResultBasic
  u.result_body = OsuBeatmapUtilities::ResultBody
  u.result_headers = OsuBeatmapUtilities::ResultHeaders
  u.transform_request = OsuBeatmapUtilities::TransformRequest
  u.transform_response = OsuBeatmapUtilities::TransformResponse
}
