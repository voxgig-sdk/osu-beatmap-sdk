# OsuBeatmap SDK feature factory

from osubeatmap_sdk.feature.base_feature import OsuBeatmapBaseFeature
from osubeatmap_sdk.feature.test_feature import OsuBeatmapTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OsuBeatmapBaseFeature(),
        "test": lambda: OsuBeatmapTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
