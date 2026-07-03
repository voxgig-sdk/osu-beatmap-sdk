package voxgigosubeatmapsdk

import (
	"github.com/voxgig-sdk/osu-beatmap-sdk/go/core"
	"github.com/voxgig-sdk/osu-beatmap-sdk/go/entity"
	"github.com/voxgig-sdk/osu-beatmap-sdk/go/feature"
	_ "github.com/voxgig-sdk/osu-beatmap-sdk/go/utility"
)

// Type aliases preserve external API.
type OsuBeatmapSDK = core.OsuBeatmapSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OsuBeatmapEntity = core.OsuBeatmapEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OsuBeatmapError = core.OsuBeatmapError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBeatmapEntityFunc = func(client *core.OsuBeatmapSDK, entopts map[string]any) core.OsuBeatmapEntity {
		return entity.NewBeatmapEntity(client, entopts)
	}
	core.NewDownloadEntityFunc = func(client *core.OsuBeatmapSDK, entopts map[string]any) core.OsuBeatmapEntity {
		return entity.NewDownloadEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.OsuBeatmapSDK, entopts map[string]any) core.OsuBeatmapEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOsuBeatmapSDK = core.NewOsuBeatmapSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewOsuBeatmapSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *OsuBeatmapSDK  { return NewOsuBeatmapSDK(nil) }
func Test() *OsuBeatmapSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
