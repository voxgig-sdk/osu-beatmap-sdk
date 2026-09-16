package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewBeatmapEntityFunc func(client *OsuBeatmapSDK, entopts map[string]any) OsuBeatmapEntity

var NewDownloadEntityFunc func(client *OsuBeatmapSDK, entopts map[string]any) OsuBeatmapEntity

var NewSearchEntityFunc func(client *OsuBeatmapSDK, entopts map[string]any) OsuBeatmapEntity

