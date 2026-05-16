<?php
declare(strict_types=1);

// OsuBeatmap SDK utility: result_body

class OsuBeatmapResultBody
{
    public static function call(OsuBeatmapContext $ctx): ?OsuBeatmapResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
