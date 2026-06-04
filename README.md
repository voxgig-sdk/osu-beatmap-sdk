# OsuBeatmap SDK

Search, browse, and download osu! beatmaps via the osu.direct community mirror

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About osu! beatmap API

[osu.direct](https://osu.direct/) is a community-run mirror and API for [osu!](https://osu.ppy.sh/) beatmap data, providing programmatic search and download access to beatmaps from the popular rhythm game.

The API exposes endpoints for looking up and searching beatmaps and beatmap sets, and for retrieving downloadable `.osz` packages so external tools, bots, and game clients can fetch maps without hitting the official osu! servers directly.

This is an unofficial third-party service. It is not operated by ppy Pty Ltd (the makers of osu!), and availability, rate limiting, and terms are set by the osu.direct operators rather than the official osu! API team.

## Try it

**TypeScript**
```bash
npm install osu-beatmap
```

**Python**
```bash
pip install osu-beatmap-sdk
```

**PHP**
```bash
composer require voxgig/osu-beatmap-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/osu-beatmap-sdk/go
```

**Ruby**
```bash
gem install osu-beatmap-sdk
```

**Lua**
```bash
luarocks install osu-beatmap-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { OsuBeatmapSDK } from 'osu-beatmap'

const client = new OsuBeatmapSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o osu-beatmap-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "osu-beatmap": {
      "command": "/abs/path/to/osu-beatmap-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Beatmap** | An osu! beatmap or beatmapset — the playable rhythm-game chart metadata (artist, title, difficulty, mapper, etc.) returned by the beatmap lookup endpoints. | `/beatmaps/{id}` |
| **Download** | Endpoints that return the packaged beatmap files (`.osz`) for a given beatmap set so clients can install them locally. | `/download/{id}` |
| **Search** | Query operations over the beatmap catalogue, letting clients filter and discover maps by terms such as title, artist, or mapper. | `/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from osubeatmap_sdk import OsuBeatmapSDK

client = OsuBeatmapSDK({})


# Load a specific beatmap
beatmap, err = client.Beatmap(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'osubeatmap_sdk.php';

$client = new OsuBeatmapSDK([]);


// Load a specific beatmap
[$beatmap, $err] = $client->Beatmap(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/osu-beatmap-sdk/go"

client := sdk.NewOsuBeatmapSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "OsuBeatmap_sdk"

client = OsuBeatmapSDK.new({})


# Load a specific beatmap
beatmap, err = client.Beatmap(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("osu-beatmap_sdk")

local client = sdk.new({})


-- Load a specific beatmap
local beatmap, err = client:Beatmap(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = OsuBeatmapSDK.test()
const result = await client.Beatmap().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = OsuBeatmapSDK.test(None, None)
result, err = client.Beatmap(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = OsuBeatmapSDK::test(null, null);
[$result, $err] = $client->Beatmap(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Beatmap(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = OsuBeatmapSDK.test(nil, nil)
result, err = client.Beatmap(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Beatmap(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the osu! beatmap API

- Upstream: [https://osu.direct/](https://osu.direct/)
- API docs: [https://osu.direct/api/docs](https://osu.direct/api/docs)

---

Generated from the osu! beatmap API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
