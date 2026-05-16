<?php
declare(strict_types=1);

// OsuBeatmap SDK utility: prepare_body

class OsuBeatmapPrepareBody
{
    public static function call(OsuBeatmapContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
