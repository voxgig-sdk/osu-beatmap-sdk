# OsuBeatmap TypeScript SDK Reference

Complete API reference for the OsuBeatmap TypeScript SDK.


## OsuBeatmapSDK

### Constructor

```ts
new OsuBeatmapSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `OsuBeatmapSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = OsuBeatmapSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `OsuBeatmapSDK` instance in test mode.


### Instance Methods

#### `Beatmap(data?: object)`

Create a new `Beatmap` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BeatmapEntity` instance.

#### `Download(data?: object)`

Create a new `Download` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DownloadEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `OsuBeatmapSDK.test()`.

**Returns:** `OsuBeatmapSDK` instance in test mode.


---

## BeatmapEntity

```ts
const beatmap = client.Beatmap()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `string` | No | Date when beatmap was approved/ranked |
| `ar` | `number` | No | Approach rate |
| `artist` | `string` | No | Song artist |
| `beatmapset_id` | `number` | No | Beatmap set ID |
| `bpm` | `number` | No | Beats per minute |
| `creator` | `string` | No | Beatmap creator username |
| `cs` | `number` | No | Circle size |
| `difficulty_rating` | `number` | No | Star rating |
| `favourite_count` | `number` | No | Number of favorites |
| `hp` | `number` | No | HP drain |
| `id` | `number` | No | Beatmap ID |
| `last_updated` | `string` | No | Last update date |
| `length` | `number` | No | Song length in seconds |
| `max_combo` | `number` | No | Maximum combo |
| `mode` | `number` | No | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `number` | No | Overall difficulty |
| `playcount` | `number` | No | Total play count |
| `status` | `string` | No | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `string` | No | Song title |
| `version` | `string` | No | Difficulty name |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Beatmap().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BeatmapEntity` instance with the same client and
options.

#### `client()`

Return the parent `OsuBeatmapSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DownloadEntity

```ts
const download = client.Download()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Download().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DownloadEntity` instance with the same client and
options.

#### `client()`

Return the parent `OsuBeatmapSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `approved_date` | `string` | No | Date when beatmap was approved/ranked |
| `ar` | `number` | No | Approach rate |
| `artist` | `string` | No | Song artist |
| `beatmapset_id` | `number` | No | Beatmap set ID |
| `bpm` | `number` | No | Beats per minute |
| `creator` | `string` | No | Beatmap creator username |
| `cs` | `number` | No | Circle size |
| `difficulty_rating` | `number` | No | Star rating |
| `favourite_count` | `number` | No | Number of favorites |
| `hp` | `number` | No | HP drain |
| `id` | `number` | No | Beatmap ID |
| `last_updated` | `string` | No | Last update date |
| `length` | `number` | No | Song length in seconds |
| `max_combo` | `number` | No | Maximum combo |
| `mode` | `number` | No | Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania) |
| `od` | `number` | No | Overall difficulty |
| `playcount` | `number` | No | Total play count |
| `status` | `string` | No | Beatmap status (ranked, qualified, loved, etc.) |
| `title` | `string` | No | Song title |
| `version` | `string` | No | Difficulty name |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `OsuBeatmapSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new OsuBeatmapSDK({
  feature: {
    test: { active: true },
  }
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

