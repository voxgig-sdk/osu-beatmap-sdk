# OsuBeatmap Ruby SDK Reference

Complete API reference for the OsuBeatmap Ruby SDK.


## OsuBeatmapSDK

### Constructor

```ruby
require_relative 'osu-beatmap_sdk'

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

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Beatmap.load({ "id" => "beatmap_id" })
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
result = client.Download.load({ "id" => "download_id" })
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

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.Search.list(nil)
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

