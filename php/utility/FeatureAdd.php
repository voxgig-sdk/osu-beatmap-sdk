<?php
declare(strict_types=1);

// OsuBeatmap SDK utility: feature_add

class OsuBeatmapFeatureAdd
{
    public static function call(OsuBeatmapContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
