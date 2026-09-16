# OsuBeatmap SDK feature factory

from osubeatmap_sdk.feature.base_feature import OsuBeatmapBaseFeature
from osubeatmap_sdk.feature.ratelimit_feature import OsuBeatmapRatelimitFeature
from osubeatmap_sdk.feature.retry_feature import OsuBeatmapRetryFeature
from osubeatmap_sdk.feature.test_feature import OsuBeatmapTestFeature
from osubeatmap_sdk.feature.timeout_feature import OsuBeatmapTimeoutFeature


_FEATURES = {
    "base": lambda: OsuBeatmapBaseFeature(),
    "ratelimit": lambda: OsuBeatmapRatelimitFeature(),
    "retry": lambda: OsuBeatmapRetryFeature(),
    "test": lambda: OsuBeatmapTestFeature(),
    "timeout": lambda: OsuBeatmapTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
