# OsuBeatmap Python SDK Reference

Complete API reference for the OsuBeatmap Python SDK.


## OsuBeatmapSDK

### Constructor

```python
from osubeatmap_sdk import OsuBeatmapSDK

client = OsuBeatmapSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OsuBeatmapSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = OsuBeatmapSDK.test()
```


### Instance Methods

#### `Beatmap(data=None)`

Create a new `BeatmapEntity` instance. Pass `None` for no initial data.

#### `Download(data=None)`

Create a new `DownloadEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BeatmapEntity

```python
beatmap = client.Beatmap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `str` | No | Date when beatmap was approved/ranked |
| `ar` | `float` | No | Approach rate |
| `artist` | `str` | No | Song artist |
| `beatmapset_id` | `int` | No | Beatmap set ID |
| `bpm` | `float` | No | Beats per minute |
| `creator` | `str` | No | Beatmap creator username |
| `cs` | `float` | No | Circle size |
| `difficulty_rating` | `float` | No | Star rating |
| `favourite_count` | `int` | No | Number of favorites |
| `hp` | `float` | No | HP drain |
| `id` | `int` | No | Beatmap ID |
| `last_updated` | `str` | No | Last update date |
| `length` | `int` | No | Song length in seconds |
| `max_combo` | `int` | No | Maximum combo |
| `mode` | `int` | No | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `float` | No | Overall difficulty |
| `playcount` | `int` | No | Total play count |
| `status` | `str` | No | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `str` | No | Song title |
| `version` | `str` | No | Difficulty name |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Beatmap().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BeatmapEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DownloadEntity

```python
download = client.Download()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Download().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DownloadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `str` | No | Date when beatmap was approved/ranked |
| `ar` | `float` | No | Approach rate |
| `artist` | `str` | No | Song artist |
| `beatmapset_id` | `int` | No | Beatmap set ID |
| `bpm` | `float` | No | Beats per minute |
| `creator` | `str` | No | Beatmap creator username |
| `cs` | `float` | No | Circle size |
| `difficulty_rating` | `float` | No | Star rating |
| `favourite_count` | `int` | No | Number of favorites |
| `hp` | `float` | No | HP drain |
| `id` | `int` | No | Beatmap ID |
| `last_updated` | `str` | No | Last update date |
| `length` | `int` | No | Song length in seconds |
| `max_combo` | `int` | No | Maximum combo |
| `mode` | `int` | No | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `float` | No | Overall difficulty |
| `playcount` | `int` | No | Total play count |
| `status` | `str` | No | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `str` | No | Song title |
| `version` | `str` | No | Difficulty name |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Search().list()
for search in results:
    print(search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = OsuBeatmapSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

