# OsuBeatmap SDK utility: make_context

from core.context import OsuBeatmapContext


def make_context_util(ctxmap, basectx):
    return OsuBeatmapContext(ctxmap, basectx)
