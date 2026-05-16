# OsuBeatmap SDK feature factory

from feature.base_feature import OsuBeatmapBaseFeature
from feature.test_feature import OsuBeatmapTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OsuBeatmapBaseFeature(),
        "test": lambda: OsuBeatmapTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
