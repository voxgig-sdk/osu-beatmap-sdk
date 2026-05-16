<?php
declare(strict_types=1);

// OsuBeatmap SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OsuBeatmapMakeContext
{
    public static function call(array $ctxmap, ?OsuBeatmapContext $basectx): OsuBeatmapContext
    {
        return new OsuBeatmapContext($ctxmap, $basectx);
    }
}
