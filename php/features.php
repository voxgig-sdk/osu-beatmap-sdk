<?php
declare(strict_types=1);

// OsuBeatmap SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class OsuBeatmapFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new OsuBeatmapBaseFeature();
            case "test":
                return new OsuBeatmapTestFeature();
            default:
                return new OsuBeatmapBaseFeature();
        }
    }
}
