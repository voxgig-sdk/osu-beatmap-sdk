# OsuBeatmap Golang SDK Reference

Complete API reference for the OsuBeatmap Golang SDK.


## OsuBeatmapSDK

### Constructor

```go
func NewOsuBeatmapSDK(options map[string]any) *OsuBeatmapSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *OsuBeatmapSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *OsuBeatmapSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Beatmap(data map[string]any) OsuBeatmapEntity`

Create a new `Beatmap` entity instance. Pass `nil` for no initial data.

#### `Download(data map[string]any) OsuBeatmapEntity`

Create a new `Download` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) OsuBeatmapEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## BeatmapEntity

```go
beatmap := client.Beatmap(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | ``$STRING`` | No |  |
| `ar` | ``$NUMBER`` | No |  |
| `artist` | ``$STRING`` | No |  |
| `beatmapset_id` | ``$INTEGER`` | No |  |
| `bpm` | ``$NUMBER`` | No |  |
| `creator` | ``$STRING`` | No |  |
| `cs` | ``$NUMBER`` | No |  |
| `difficulty_rating` | ``$NUMBER`` | No |  |
| `favourite_count` | ``$INTEGER`` | No |  |
| `hp` | ``$NUMBER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `length` | ``$INTEGER`` | No |  |
| `max_combo` | ``$INTEGER`` | No |  |
| `mode` | ``$INTEGER`` | No |  |
| `od` | ``$NUMBER`` | No |  |
| `playcount` | ``$INTEGER`` | No |  |
| `status` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `version` | ``$STRING`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Beatmap(nil).Load(map[string]any{"id": "beatmap_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BeatmapEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DownloadEntity

```go
download := client.Download(nil)
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Download(nil).Load(map[string]any{"id": "download_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DownloadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | ``$STRING`` | No |  |
| `ar` | ``$NUMBER`` | No |  |
| `artist` | ``$STRING`` | No |  |
| `beatmapset_id` | ``$INTEGER`` | No |  |
| `bpm` | ``$NUMBER`` | No |  |
| `creator` | ``$STRING`` | No |  |
| `cs` | ``$NUMBER`` | No |  |
| `difficulty_rating` | ``$NUMBER`` | No |  |
| `favourite_count` | ``$INTEGER`` | No |  |
| `hp` | ``$NUMBER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `length` | ``$INTEGER`` | No |  |
| `max_combo` | ``$INTEGER`` | No |  |
| `mode` | ``$INTEGER`` | No |  |
| `od` | ``$NUMBER`` | No |  |
| `playcount` | ``$INTEGER`` | No |  |
| `status` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `version` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Search(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewOsuBeatmapSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

