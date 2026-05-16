package core

type OsuBeatmapError struct {
	IsOsuBeatmapError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOsuBeatmapError(code string, msg string, ctx *Context) *OsuBeatmapError {
	return &OsuBeatmapError{
		IsOsuBeatmapError: true,
		Sdk:              "OsuBeatmap",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OsuBeatmapError) Error() string {
	return e.Msg
}
