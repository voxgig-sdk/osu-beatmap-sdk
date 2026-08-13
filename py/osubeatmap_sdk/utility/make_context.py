# OsuBeatmap SDK utility: make_context

from osubeatmap_sdk.core.context import OsuBeatmapContext


def make_context_util(ctxmap, basectx):
    return OsuBeatmapContext(ctxmap, basectx)
