import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "beatmap",
    "accessor": "Beatmap",
    "op": "load",
    "method": "GET",
    "path": "/beatmaps/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "beatmapset_id": 1,
      "title": "x",
      "artist": "x",
      "creator": "x",
      "version": "x",
      "difficulty_rating": 1,
      "mode": 1,
      "status": "x",
      "bpm": 1,
      "length": 1,
      "max_combo": 1,
      "cs": 1,
      "ar": 1,
      "od": 1,
      "hp": 1,
      "playcount": 1,
      "favourite_count": 1,
      "approved_date": "2026-01-01T00:00:00Z",
      "last_updated": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "download",
    "accessor": "Download",
    "op": "load",
    "method": "GET",
    "path": "/download/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "no_video": "v1"
    },
    "headers": [],
    "query": [
      "noVideo"
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/search",
    "args": [],
    "select": {
      "limit": "v1",
      "mode": "v1",
      "offset": "v1",
      "q": "v1",
      "status": "v1"
    },
    "headers": [],
    "query": [
      "q",
      "mode",
      "status",
      "offset",
      "limit"
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "beatmaps": [
        {
          "approved_date": "2026-01-01T00:00:00Z",
          "ar": 1,
          "artist": "x",
          "beatmapset_id": 1,
          "bpm": 1,
          "creator": "x",
          "cs": 1,
          "difficulty_rating": 1,
          "favourite_count": 1,
          "hp": 1,
          "id": 1,
          "last_updated": "2026-01-01T00:00:00Z",
          "length": 1,
          "max_combo": 1,
          "mode": 1,
          "od": 1,
          "playcount": 1,
          "status": "x",
          "title": "x",
          "version": "x"
        }
      ],
      "total": 1
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
