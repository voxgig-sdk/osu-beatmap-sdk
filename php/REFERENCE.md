# OsuBeatmap PHP SDK Reference

Complete API reference for the OsuBeatmap PHP SDK.


## OsuBeatmapSDK

### Constructor

```php
require_once __DIR__ . '/osubeatmap_sdk.php';

$client = new OsuBeatmapSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OsuBeatmapSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = OsuBeatmapSDK::test();
```


### Instance Methods

#### `Beatmap($data = null)`

Create a new `BeatmapEntity` instance. Pass `null` for no initial data.

#### `Download($data = null)`

Create a new `DownloadEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): OsuBeatmapUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BeatmapEntity

```php
$beatmap = $client->Beatmap();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `string` | No | Date when beatmap was approved/ranked |
| `ar` | `float` | No | Approach rate |
| `artist` | `string` | No | Song artist |
| `beatmapset_id` | `int` | No | Beatmap set ID |
| `bpm` | `float` | No | Beats per minute |
| `creator` | `string` | No | Beatmap creator username |
| `cs` | `float` | No | Circle size |
| `difficulty_rating` | `float` | No | Star rating |
| `favourite_count` | `int` | No | Number of favorites |
| `hp` | `float` | No | HP drain |
| `id` | `int` | No | Beatmap ID |
| `last_updated` | `string` | No | Last update date |
| `length` | `int` | No | Song length in seconds |
| `max_combo` | `int` | No | Maximum combo |
| `mode` | `int` | No | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `float` | No | Overall difficulty |
| `playcount` | `int` | No | Total play count |
| `status` | `string` | No | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `string` | No | Song title |
| `version` | `string` | No | Difficulty name |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Beatmap()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BeatmapEntity`

Create a new `BeatmapEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DownloadEntity

```php
$download = $client->Download();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Download()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DownloadEntity`

Create a new `DownloadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `string` | No | Date when beatmap was approved/ranked |
| `ar` | `float` | No | Approach rate |
| `artist` | `string` | No | Song artist |
| `beatmapset_id` | `int` | No | Beatmap set ID |
| `bpm` | `float` | No | Beats per minute |
| `creator` | `string` | No | Beatmap creator username |
| `cs` | `float` | No | Circle size |
| `difficulty_rating` | `float` | No | Star rating |
| `favourite_count` | `int` | No | Number of favorites |
| `hp` | `float` | No | HP drain |
| `id` | `int` | No | Beatmap ID |
| `last_updated` | `string` | No | Last update date |
| `length` | `int` | No | Song length in seconds |
| `max_combo` | `int` | No | Maximum combo |
| `mode` | `int` | No | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `float` | No | Overall difficulty |
| `playcount` | `int` | No | Total play count |
| `status` | `string` | No | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `string` | No | Song title |
| `version` | `string` | No | Difficulty name |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Search()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new OsuBeatmapSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

