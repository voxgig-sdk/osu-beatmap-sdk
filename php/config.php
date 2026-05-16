<?php
declare(strict_types=1);

// OsuBeatmap SDK configuration

class OsuBeatmapConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "OsuBeatmap",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://osu.direct/api",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'ar',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'artist',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'beatmapset_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'bpm',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'creator',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'cs',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'difficulty_rating',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'favourite_count',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'hp',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'last_updated',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'length',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'max_combo',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'mode',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'od',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'playcount',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 16,
            ],
            [
              'name' => 'status',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 17,
            ],
            [
              'name' => 'title',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 18,
            ],
            [
              'name' => 'version',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 19,
            ],
          ],
          'name' => 'beatmap',
          'op' => [
            'load' => [
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
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'download' => [
          'fields' => [],
          'name' => 'download',
          'op' => [
            'load' => [
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
                        'active' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'no_video',
                        'orig' => 'no_video',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'ar',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'artist',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'beatmapset_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'bpm',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'creator',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'cs',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'difficulty_rating',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'favourite_count',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'hp',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'last_updated',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'length',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'max_combo',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'mode',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'od',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'playcount',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 16,
            ],
            [
              'name' => 'status',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 17,
            ],
            [
              'name' => 'title',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 18,
            ],
            [
              'name' => 'version',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 19,
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
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
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'mode',
                        'orig' => 'mode',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
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
