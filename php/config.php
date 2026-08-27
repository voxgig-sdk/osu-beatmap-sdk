<?php
declare(strict_types=1);

// OsuBeatmap SDK configuration

class OsuBeatmapConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "OsuBeatmap",
                "slug" => "osu-beatmap",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://osu.direct/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "beatmap" => [],
                    "download" => [],
                    "search" => [],
                ],
            ],
            "entity" => [
        'beatmap' => [
          'fields' => [
            [
              'name' => 'approved_date',
              'short' => 'Date when beatmap was approved/ranked',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ar',
              'short' => 'Approach rate',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'artist',
              'short' => 'Song artist',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'beatmapset_id',
              'short' => 'Beatmap set ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'bpm',
              'short' => 'Beats per minute',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'creator',
              'short' => 'Beatmap creator username',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cs',
              'short' => 'Circle size',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'difficulty_rating',
              'short' => 'Star rating',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'favourite_count',
              'short' => 'Number of favorites',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'hp',
              'short' => 'HP drain',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'id',
              'short' => 'Beatmap ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'last_updated',
              'short' => 'Last update date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'length',
              'short' => 'Song length in seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_combo',
              'short' => 'Maximum combo',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'mode',
              'short' => 'Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'od',
              'short' => 'Overall difficulty',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'playcount',
              'short' => 'Total play count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'status',
              'short' => 'Beatmap status (ranked, qualified, loved, etc.)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Song title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'version',
              'short' => 'Difficulty name',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'beatmap',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/beatmaps/{id}',
                  'parts' => [
                    'beatmaps',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'download' => [
          'fields' => [
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'download',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'no_video',
                        'orig' => 'no_video',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/download/{id}',
                  'parts' => [
                    'download',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'no_video',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [
            [
              'name' => 'approved_date',
              'short' => 'Date when beatmap was approved/ranked',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ar',
              'short' => 'Approach rate',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'artist',
              'short' => 'Song artist',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'beatmapset_id',
              'short' => 'Beatmap set ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'bpm',
              'short' => 'Beats per minute',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'creator',
              'short' => 'Beatmap creator username',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'cs',
              'short' => 'Circle size',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'difficulty_rating',
              'short' => 'Star rating',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'favourite_count',
              'short' => 'Number of favorites',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'hp',
              'short' => 'HP drain',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'id',
              'short' => 'Beatmap ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'last_updated',
              'short' => 'Last update date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'length',
              'short' => 'Song length in seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'max_combo',
              'short' => 'Maximum combo',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'mode',
              'short' => 'Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'od',
              'short' => 'Overall difficulty',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'playcount',
              'short' => 'Total play count',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'status',
              'short' => 'Beatmap status (ranked, qualified, loved, etc.)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Song title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'version',
              'short' => 'Difficulty name',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'mode',
                        'orig' => 'mode',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search',
                  'parts' => [
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'mode',
                      'offset',
                      'q',
                      'status',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.beatmaps`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return OsuBeatmapFeatures::make_feature($name);
    }
}
