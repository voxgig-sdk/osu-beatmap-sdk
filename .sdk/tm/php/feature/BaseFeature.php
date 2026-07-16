<?php
declare(strict_types=1);

// OsuBeatmap SDK base feature

class OsuBeatmapBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(OsuBeatmapContext $ctx, array $options): void {}
    public function PostConstruct(OsuBeatmapContext $ctx): void {}
    public function PostConstructEntity(OsuBeatmapContext $ctx): void {}
    public function SetData(OsuBeatmapContext $ctx): void {}
    public function GetData(OsuBeatmapContext $ctx): void {}
    public function GetMatch(OsuBeatmapContext $ctx): void {}
    public function SetMatch(OsuBeatmapContext $ctx): void {}
    public function PrePoint(OsuBeatmapContext $ctx): void {}
    public function PreSpec(OsuBeatmapContext $ctx): void {}
    public function PreRequest(OsuBeatmapContext $ctx): void {}
    public function PreResponse(OsuBeatmapContext $ctx): void {}
    public function PreResult(OsuBeatmapContext $ctx): void {}
    public function PreDone(OsuBeatmapContext $ctx): void {}
    public function PreUnexpected(OsuBeatmapContext $ctx): void {}
}
