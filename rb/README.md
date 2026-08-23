# OsuBeatmap Ruby SDK



The Ruby SDK for the OsuBeatmap API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Beatmap` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/osu-beatmap-sdk/releases](https://github.com/voxgig-sdk/osu-beatmap-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "OsuBeatmap_sdk"

client = OsuBeatmapSDK.new
```

### 3. Load a beatmap

```ruby
begin
  # load returns the ENTITY — call data_get for the Beatmap record (raises on error).
  beatmap = client.Beatmap.load({ "id" => 1 })
  puts beatmap
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  beatmap = client.Beatmap.load({ "id" => 1 })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = OsuBeatmapSDK.test({
  "entity" => { "beatmap" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
beatmap = client.Beatmap.load({ "id" => "test01" })
puts beatmap
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = OsuBeatmapSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
OSU_BEATMAP_TEST_LIVE=TRUE
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### OsuBeatmapSDK

```ruby
require_relative "OsuBeatmap_sdk"
client = OsuBeatmapSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = OsuBeatmapSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### OsuBeatmapSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Beatmap` | `(data) -> BeatmapEntity` | Create a Beatmap entity instance. |
| `Download` | `(data) -> DownloadEntity` | Create a Download entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `OsuBeatmapError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Beatmap

| Field | Description |
| --- | --- |
| `approved_date` | Date when beatmap was approved/ranked |
| `ar` | Approach rate |
| `artist` | Song artist |
| `beatmapset_id` | Beatmap set ID |
| `bpm` | Beats per minute |
| `creator` | Beatmap creator username |
| `cs` | Circle size |
| `difficulty_rating` | Star rating |
| `favourite_count` | Number of favorites |
| `hp` | HP drain |
| `id` | Beatmap ID |
| `last_updated` | Last update date |
| `length` | Song length in seconds |
| `max_combo` | Maximum combo |
| `mode` | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | Overall difficulty |
| `playcount` | Total play count |
| `status` | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | Song title |
| `version` | Difficulty name |

Operations: Load.

API path: `/beatmaps/{id}`

#### Download

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/download/{id}`

#### Search

| Field | Description |
| --- | --- |
| `approved_date` | Date when beatmap was approved/ranked |
| `ar` | Approach rate |
| `artist` | Song artist |
| `beatmapset_id` | Beatmap set ID |
| `bpm` | Beats per minute |
| `creator` | Beatmap creator username |
| `cs` | Circle size |
| `difficulty_rating` | Star rating |
| `favourite_count` | Number of favorites |
| `hp` | HP drain |
| `id` | Beatmap ID |
| `last_updated` | Last update date |
| `length` | Song length in seconds |
| `max_combo` | Maximum combo |
| `mode` | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | Overall difficulty |
| `playcount` | Total play count |
| `status` | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | Song title |
| `version` | Difficulty name |

Operations: List.

API path: `/search`



## Entities


### Beatmap

Create an instance: `beatmap = client.Beatmap`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_date` | `String` | Date when beatmap was approved/ranked |
| `ar` | `Float` | Approach rate |
| `artist` | `String` | Song artist |
| `beatmapset_id` | `Integer` | Beatmap set ID |
| `bpm` | `Float` | Beats per minute |
| `creator` | `String` | Beatmap creator username |
| `cs` | `Float` | Circle size |
| `difficulty_rating` | `Float` | Star rating |
| `favourite_count` | `Integer` | Number of favorites |
| `hp` | `Float` | HP drain |
| `id` | `Integer` | Beatmap ID |
| `last_updated` | `String` | Last update date |
| `length` | `Integer` | Song length in seconds |
| `max_combo` | `Integer` | Maximum combo |
| `mode` | `Integer` | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `Float` | Overall difficulty |
| `playcount` | `Integer` | Total play count |
| `status` | `String` | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `String` | Song title |
| `version` | `String` | Difficulty name |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Beatmap record (raises on error).
beatmap = client.Beatmap.load({ "id" => 1 })
```


### Download

Create an instance: `download = client.Download`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Download record (raises on error).
download = client.Download.load({ "id" => 1 })
```


### Search

Create an instance: `search = client.Search`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `approved_date` | `String` | Date when beatmap was approved/ranked |
| `ar` | `Float` | Approach rate |
| `artist` | `String` | Song artist |
| `beatmapset_id` | `Integer` | Beatmap set ID |
| `bpm` | `Float` | Beats per minute |
| `creator` | `String` | Beatmap creator username |
| `cs` | `Float` | Circle size |
| `difficulty_rating` | `Float` | Star rating |
| `favourite_count` | `Integer` | Number of favorites |
| `hp` | `Float` | HP drain |
| `id` | `Integer` | Beatmap ID |
| `last_updated` | `String` | Last update date |
| `length` | `Integer` | Song length in seconds |
| `max_combo` | `Integer` | Maximum combo |
| `mode` | `Integer` | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `Float` | Overall difficulty |
| `playcount` | `Integer` | Total play count |
| `status` | `String` | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `String` | Song title |
| `version` | `String` | Difficulty name |

#### Example: List

```ruby
# list returns an Array of Search records (raises on error).
searchs = client.Search.list
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── OsuBeatmap_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`OsuBeatmap_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
beatmap = client.Beatmap
beatmap.load({ "id" => 1 })

# beatmap.data_get now returns the beatmap data from the last load
# beatmap.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
