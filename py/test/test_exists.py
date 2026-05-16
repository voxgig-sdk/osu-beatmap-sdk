# ProjectName SDK exists test

import pytest
from osubeatmap_sdk import OsuBeatmapSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OsuBeatmapSDK.test(None, None)
        assert testsdk is not None
