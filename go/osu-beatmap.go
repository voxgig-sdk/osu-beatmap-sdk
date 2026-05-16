package voxgigosubeatmapsdk

import (
	"github.com/voxgig-sdk/osu-beatmap-sdk/core"
	"github.com/voxgig-sdk/osu-beatmap-sdk/entity"
	"github.com/voxgig-sdk/osu-beatmap-sdk/feature"
	_ "github.com/voxgig-sdk/osu-beatmap-sdk/utility"
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
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
