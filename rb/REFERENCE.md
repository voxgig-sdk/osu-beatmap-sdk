# OsuBeatmap Ruby SDK Reference

Complete API reference for the OsuBeatmap Ruby SDK.


## OsuBeatmapSDK

### Constructor

```ruby
require_relative 'OsuBeatmap_sdk'

client = OsuBeatmapSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OsuBeatmapSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = OsuBeatmapSDK.test
```


### Instance Methods

#### `Beatmap(data = nil)`

Create a new `Beatmap` entity instance. Pass `nil` for no initial data.

#### `Download(data = nil)`

Create a new `Download` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## BeatmapEntity

```ruby
beatmap = client.Beatmap
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `String` | No |  |
| `ar` | `Float` | No |  |
| `artist` | `String` | No |  |
| `beatmapset_id` | `Integer` | No |  |
| `bpm` | `Float` | No |  |
| `creator` | `String` | No |  |
| `cs` | `Float` | No |  |
| `difficulty_rating` | `Float` | No |  |
| `favourite_count` | `Integer` | No |  |
| `hp` | `Float` | No |  |
| `id` | `Integer` | No |  |
| `last_updated` | `String` | No |  |
| `length` | `Integer` | No |  |
| `max_combo` | `Integer` | No |  |
| `mode` | `Integer` | No |  |
| `od` | `Float` | No |  |
| `playcount` | `Integer` | No |  |
| `status` | `String` | No |  |
| `title` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Beatmap.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BeatmapEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DownloadEntity

```ruby
download = client.Download
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Download.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DownloadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `String` | No |  |
| `ar` | `Float` | No |  |
| `artist` | `String` | No |  |
| `beatmapset_id` | `Integer` | No |  |
| `bpm` | `Float` | No |  |
| `creator` | `String` | No |  |
| `cs` | `Float` | No |  |
| `difficulty_rating` | `Float` | No |  |
| `favourite_count` | `Integer` | No |  |
| `hp` | `Float` | No |  |
| `id` | `Integer` | No |  |
| `last_updated` | `String` | No |  |
| `length` | `Integer` | No |  |
| `max_combo` | `Integer` | No |  |
| `mode` | `Integer` | No |  |
| `od` | `Float` | No |  |
| `playcount` | `Integer` | No |  |
| `status` | `String` | No |  |
| `title` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Search.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = OsuBeatmapSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

